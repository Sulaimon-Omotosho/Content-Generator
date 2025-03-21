import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

const OutputSection = () => {
  const editorRef: any = useRef()
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5 '>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2'>
          <Copy /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue='Your Contents'
        height='600px'
        initialEditType='wysiwyg'
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  )
}

export default OutputSection
