from pathlib import Path
import json,difflib
B=Path(__file__).parent
first=Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-historical-verifier-cycle1/guarded-successor.json')
packet=json.loads(first.read_text());rows=[]
extra=[
("  for(const [key,batch,item] of [['manifest',e.batch,e.supplier_id],['consumer_manifest',e.consumer_batch,e.consumer_id]]) {", "  // After genuine marked closure, route validation authenticates historical\n  // manifest evidence through the same sealed captures as step3-close verify.\n  // Before closure this remains strict live preclosure routing.\n  const closedPath=`research/${run}-step3-closure.json`;\n  const closed=existsSync(resolve(root,closedPath))?JSON.parse(bytes(root,closedPath)):null;\n  const frozenArtifacts=closed?.version===3&&closed.run===run&&closed.status==='closed'\n    &&closed.basis==='dependency-ordered-step3a'&&closed.manifest_evidence_policy===PRECLOSURE_MANIFEST_POLICY\n    &&closed.artifacts&&typeof closed.artifacts==='object'&&!Array.isArray(closed.artifacts)\n    ?closed.artifacts:null;\n  for(const [key,batch,item] of [['manifest',e.batch,e.supplier_id],['consumer_manifest',e.consumer_batch,e.consumer_id]]) {"),
("{kind:'downstream-consumer',registry:binding.path,index,field:key},{preclosure:true});", "{kind:'downstream-consumer',registry:binding.path,index,field:key},{preclosure:true,frozenArtifacts});")]
for entry in packet['edits']:
 p=Path(entry['path']);before=p.read_text();after=before;pairs=[(x['source_excerpt'],x['proposed_replacement']) for x in entry['replacements']]
 if p.name=='step3-owner-downstream-consumer-routes.mjs':pairs+=extra
 if p.name=='step3-preclosure-manifest-continuity.md':
  pairs=[(old,new.replace('Later `step3-close verify` authenticates history separately.', 'Later `step3-close verify` and postclosure `validateDownstreamConsumerRoute` authenticate history separately.')
   .replace('The later live manifest is retained separately', 'Postclosure route validation selects the artifact map only from the actual on-disk, same-run, closed version-3 receipt with the original dependency-ordered basis and marked manifest policy. The shared history helper authenticates that supplied map against the actual receipt and all sealed references/captures. Before closure or for an unmarked receipt, route validation retains strict live preclosure behavior; close/default artifact reconstruction never auto-selects the historical map.\n\nThe later live manifest is retained separately')) for old,new in pairs]
 for old,new in pairs:
  if after.count(old)!=1:raise RuntimeError('literal guard count '+str(after.count(old))+' '+str(p)+' '+old[:70])
  after=after.replace(old,new,1)
 for sub,text in [('before',before),('proposed',after)]:
  out=B/sub/p;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(text)
 diff=B/(p.name+'.diff');diff.write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+str(p),tofile='b/'+str(p))))
 rows.append({'path':str(p),'before_file':str(B/'before'/p),'proposed_file':str(B/'proposed'/p),'diff_file':str(diff),'replacements':[{'source_excerpt':x,'proposed_replacement':y} for x,y in pairs]})
(B/'guarded-successor.json').write_text(json.dumps({'research_only':True,'applied':False,'cycle':2,'final_focused_cycle':True,'supersedes_proposal_only':str(first),'original_native_evidence_unchanged':True,'edits':rows},indent=2)+'\n')
