from pathlib import Path
import json,re
D=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-step3-qft58-global-calculus');x=json.load(open(D/'precheck-numbering-proposals.json'));maps=[]
for r in x['results']:
 if r['status']!='repair':continue
 p=Path(r['file']);s=p.read_text();a=s.index('## Proof\n')+len('## Proof\n');b=s.index('\n## Remarks',a)if '\n## Remarks'in s[a:]else len(s);old=s[a:b];pr=r['proposed_proof'];start=re.search(r'(?m)^1\.1 ',pr).start();new=pr[start:pr.index('∎')+1].strip();pat=r'(?ms)^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)';op=re.findall(pat,old.strip());np=re.findall(pat,new);norm=lambda t:re.sub(r'\b\d+\.\d+\b','STEP',' '.join(t.split()));mp={}
 for n,body in op:
  matches=[n2 for n2,b2 in np if norm(body)==norm(b2)];assert len(matches)==1,(r['item_id'],n,matches);mp[n]=matches[0]
 assert len(op)==len(np)
 given=old[:re.search(r'(?m)^1\.1 ',old).start()];p.write_text(s[:a]+given+new+'\n\n'+s[b:].lstrip());maps.append({'id':r['item_id'],'oldToNewByParagraphContent':mp,'paragraphCount':len(op),'mathematicalTextUnchangedExceptOwnStepReferences':True})
(D/'numbering-content-maps.json').write_text(json.dumps(maps,indent=2)+'\n');print(maps)
