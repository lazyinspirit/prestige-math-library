from pathlib import Path
import json,difflib
B=Path(__file__).parent
first=Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-native-downstream-pending-cycle1/guarded-successor.json')
packet=json.loads(first.read_text());P=Path(packet['code']['path']);before=P.read_text();after=before;pairs=[]
for edit in packet['code']['replacements']:
 old,new=edit['source_excerpt'],edit['proposed_replacement']
 # No new restriction on initial adjudicator report extensions: the helper is
 # exclusively called for owner waves and validates its actual frontier there.
 if old.startswith('    if(!Array.isArray(report.reviews)'):
  continue
 if old.startswith('export function assertImpactProgress'):
  new=new.replace(r'/\\.result\\.json$/',r'/\.result\.json$/')
  new=new.replace('    const native=read(dispatchPath);', "    const native=read(dispatchPath);\n    // ownerUnits uses the bare lane only for the base owner pack. Native\n    // continuation dispatches cover the encoded phase:lane stage unit, while\n    // report.unit remains the decoded bare lane. Match that exact identity.\n    const basePhase=pack.basePhase??pack.phase;\n    const nativeCover=pack.phase===basePhase?unit:`${pack.phase}:${unit}`;")
  new=new.replace('JSON.stringify(native.covers)===JSON.stringify([unit])','JSON.stringify(native.covers)===JSON.stringify([nativeCover])')
  new=new.replace("requireValue(first.run===run&&first.role==='alpha-repair'&&first.ok===true", "requireValue(first.run===run&&first.role==='alpha-repair'&&first.ok===true\n        &&first.label===workerLabel('impact-initial',1,claim.unit)&&JSON.stringify(first.covers)===JSON.stringify([claim.unit])")
 pairs.append((old,new))
for old,new in pairs:
 if after.count(old)!=1:raise RuntimeError('literal guard '+str(after.count(old))+' '+old[:90])
 after=after.replace(old,new,1)
for sub,t in [('before',before),('proposed',after)]:
 out=B/sub/P;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(t)
(B/'step5-workflow.mjs.diff').write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+str(P),tofile='b/'+str(P))))
doc=Path(packet['doc']['path']);dbefore=doc.read_text();append=packet['doc']['append']
append=append.replace('pack and successful Sol6.1/high dispatch against its immutable attempt.', 'pack and successful Sol6.1/high dispatch against its immutable attempt.\nNative base-wave coverage is the bare lane; continuation coverage is the exact\n`phase:lane` stage unit, while reports retain the decoded bare lane. Initial\nadjudicator report handling is unchanged; the owner-wave helper alone validates\nthe bounded pending extension against the actual frontier.')
dafter=dbefore.rstrip()+'\n\n'+append
for sub,t in [('before',dbefore),('proposed',dafter)]:
 out=B/sub/doc;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(t)
(B/'WORKFLOW.md.diff').write_text(''.join(difflib.unified_diff(dbefore.splitlines(True),dafter.splitlines(True),fromfile='a/'+str(doc),tofile='b/'+str(doc))))
(B/'guarded-successor.json').write_text(json.dumps({'research_only':True,'applied':False,'cycle':2,'final_focused_cycle':True,'supersedes_proposal_only':str(first),'code':{'path':str(P),'before_file':str(B/'before'/P),'proposed_file':str(B/'proposed'/P),'replacements':[{'source_excerpt':x,'proposed_replacement':y} for x,y in pairs]},'doc':{'path':str(doc),'before_file':str(B/'before'/doc),'proposed_file':str(B/'proposed'/doc),'guard':'Require complete exact preimage before append','append':append}},indent=2)+'\n')
