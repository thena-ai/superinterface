import {
  useSuperinterfaceContext,
} from '@superinterface/react'
import { useMemo } from 'react'
import {
  useQuery,
} from '@tanstack/react-query'
import { queryOptions } from './lib/queryOptions'

type Args = {
  assistantId: string
}

export const useAssistant = ({
  assistantId,
}: Args) => {
  const superinterfaceContext = useSuperinterfaceContext()
  const props = useQuery(queryOptions({
    assistantId,
    superinterfaceContext,
  }))

  console.log({ props })

  return useMemo(() => ({
    ...props,
    assistant: props.data ? props.data.assistant : null,
  }), [props])
}
