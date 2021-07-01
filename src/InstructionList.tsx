

export function InstructionList(props: { instructions: Array<string> }) {
    return <ol>{
      props.instructions.map((instruction: string) =>
        <InstructionItem instruction={instruction} />
      )
    }</ol>
  }
  
  function InstructionItem(props: { instruction: string }) {
    return <li>{props.instruction}</li>
  }