<template>
  <div v-if="editor">
    <EditorContent :editor="editor" />
  </div>
</template>

<script>
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

export default {
  components: {
    EditorContent,
  },
  props: {
    modelValue: { type: String, default: undefined },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      editor: null,
      emitAfterOnUpdate: false,
    };
  },
  watch: {
    modelValue(val) {
      if (this.emitAfterOnUpdate) {
        this.emitAfterOnUpdate = false;
        return;
      }
      if (this.editor) {
        this.editor.commands.setContent(val?.replace(/\n/g, "<br/>"));
      }
    },
  },
  mounted() {
    const extensions = [StarterKit.configure({ heading: false })];

    this.editor = new Editor({
      onUpdate: ({ editor }) => {
        this.emitAfterOnUpdate = true;
        this.$emit("update:modelValue", editor.getHTML());
      },
      content: this.modelValue?.replace(/\n/g, "<br/>"),
      extensions,
    });
  },
  beforeUnmount() {
    if (this.editor) this.editor.destroy();
  },
};
</script>
