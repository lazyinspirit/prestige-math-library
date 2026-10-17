from pathlib import Path
import json,shutil,difflib
B=Path(__file__).parent;F=Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-step5-current-repair-supplement-cycle1')
packet=json.loads((F/'guarded-successor.json').read_text())
for folder in ['before','proposed']:
 source=F/folder;target=B/folder
 if source.exists():shutil.copytree(source,target,dirs_exist_ok=True)
for name in ['schema.md','workflow-append.md','step5-workflow.mjs.diff','WORKFLOW.md.diff']:
 shutil.copyfile(F/name,B/name)
module=Path('tools/step5-owner-current-repairs.mjs');p=B/'proposed'/module;before=p.read_text()
old="need(beforeMeta.kind==='definition'&&!Object.values(pack.assignments).flat().some(x=>x.id===id)"
new="need(beforeMeta.kind==='definition'&&source(after,id).kind==='definition'&&!Object.values(pack.assignments).flat().some(x=>x.id===id)"
if before.count(old)!=1:raise RuntimeError('unique outside-kind literal guard failed')
after=before.replace(old,new,1);p.write_text(after)
(B/'module-cycle1-to-cycle2.diff').write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='cycle1/'+str(module),tofile='cycle2/'+str(module))))
packet.update({'cycle':2,'final_focused_cycle':True,'supersedes_proposal_only':str(F/'guarded-successor.json')})
packet['new_module']['proposed_file']=str(p)
for field in ['workflow','documentation']:
 for name in ['before_file','proposed_file']:packet[field][name]=packet[field][name].replace(str(F.resolve()),str(B.resolve())).replace(str(F),str(B))
packet['only_module_delta']={'before_proposal':str(F/'proposed'/module),'source_excerpt':old,'proposed_replacement':new,'reviewed_url_guard':'Already present in cycle1 and unchanged: review.source_urls.every(url=>reviewedUrls.has(url)).'}
(B/'guarded-successor.json').write_text(json.dumps(packet,indent=2)+'\n')
