from pathlib import Path
import json,difflib
B=Path(__file__).parent
edits=[(Path('tools/step5-initial-metadata-history.mjs'),[
("need(live.run===run&&stateDrained(live)&&((live.stage==='5.1-adjudicate'&&live.paused===true)||live.stage==='5.2-impact'),'wrong live initial collection boundary');", "need(live.run===run&&stateDrained(live)&&['5.1-adjudicate','5.2-impact'].includes(live.stage),'wrong live initial collection boundary');")]),
(Path('tools/step5-initial-metadata-history.md'),[
("During the original initial collection, live sources/manifests must equal the\nvalidated corrected archives, and live state must remain drained paused 5.1\nor drained pre-dispatch 5.2. Historical supporting-metadata lookup returns", "During the original initial collection, live sources/manifests must equal the\nvalidated corrected archives. Live state must be drained in 5.1 or pre-dispatch\n5.2; the actual native 5.1 collection gate runs unpaused after owner permission\nand resume. Creation and recording still require the actual paused, drained\n5.1 hold authenticated by the archived state/request. Collection authenticates\nthat earlier creation and does not require or imply another pause. All original\nnative handoff, current graph and no-impact guards remain mandatory.\nHistorical supporting-metadata lookup returns")])]
rows=[]
for p,pairs in edits:
 before=p.read_text();after=before
 for old,new in pairs:
  if after.count(old)!=1:raise RuntimeError('ambiguous literal guard '+str(p))
  after=after.replace(old,new,1)
 for sub,t in [('before',before),('proposed',after)]:
  out=B/sub/p;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(t)
 diff=B/(p.name+'.diff');diff.write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+str(p),tofile='b/'+str(p))))
 rows.append({'path':str(p),'before_file':str(B/'before'/p),'proposed_file':str(B/'proposed'/p),'diff_file':str(diff),'replacements':[{'source_excerpt':x,'proposed_replacement':y} for x,y in pairs]})
(B/'guarded-successor.json').write_text(json.dumps({'research_only':True,'cycle':2,'final_focused_cycle':True,'applied':False,'edits':rows},indent=2)+'\n')
