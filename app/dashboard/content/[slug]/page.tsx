'use client'
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateList'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PROPS {
  params: {
    slug: string
  }
}

const ContentePage = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | any = Templates?.find(
    (item) => item.slug == props.params['slug']
  )

  const GenerateAIContent = (FormData: any) => {}
  return (
    <div className='p-5'>
      <Link href='/dashboard'>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {/* FORM SECTION  */}
        <FormSection
          userFormInput={(v: any) => GenerateAIContent(v)}
          selectedTemplate={selectedTemplate}
        />
        {/* OUTPUT SECTION  */}
        <div className='col-span-2'>
          <OutputSection />
        </div>
      </div>
    </div>
  )
}

export default ContentePage
