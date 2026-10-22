// Exercise the existing native stage descriptor and gate subprocess runner.
import {step5Stages} from '../../../tools/physics-autopilot/stages/mathlib.step5.mts';
import {runGate} from '../../../tools/physics-autopilot/src/gates.mts';
const root=process.argv[2],run='fixture';
const stages=step5Stages({gate:(id:string,argv:string[])=>({id,argv})});
const gate=stages.find((stage:any)=>stage.id==='5.1-adjudicate').gates({run,repo:root})[0];
const result=await runGate(gate,{cwd:root});
console.log(JSON.stringify({stage:'5.1-adjudicate',argv:gate.argv,result}));
if(!result.ok)process.exitCode=1;
