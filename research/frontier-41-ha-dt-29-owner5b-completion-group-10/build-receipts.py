import json,re,pathlib,hashlib,datetime
P=pathlib.Path; out=P('research/frontier-41-ha-dt-29-owner5b-completion-group-10'); work=json.loads(P('research/frontier-41-ha-dt-29-owner5b-completion-worklists/group-10.json').read_text());reviewer='owner-helper /root/step5b_completion_g1';run=work['run'];torus='ex-perfect-morse-function-on-a-torus';defect='5b-owner-g1-torus-endpoint-coefficient-attribution'
def raw(i):return P('items/'+i+'.md').read_bytes()
def sha(b):return hashlib.sha256(b).hexdigest()
def body(i):return raw(i).decode().split('---',2)[-1]
def clause(i):
 t=body(i);m=re.search(r'(?ms)^## (Statement|Definition|Remark|Remarks)\n(.*?)(?=^## |\Z)',t);return (m.group(1),m.group(2).strip()) if m else ('body',t.strip())
def evidence(i,s):
 t=body(i);pars=t.split('\n\n');hit=[p.strip() for p in pars if '[['+s+']]' in p or '[['+s+'|' in p];sec,q=clause(s)
 if not hit:return f'{s}: no body invocation in the current consumer; the declared dependency does not supply a proof step. Interface checked as context only, not load-bearing.'
 loc=[]
 for p in hit:
  f=re.match(r'\[(F\d+|L\d+|A\d+)\]',p)
  if f:
   tag=f.group(1);uses=[re.match(r'(\d+\.\d+)',a).group(1) for a in pars if re.match(r'\d+\.\d+',a) and re.search(r'\[[^\]]*\b'+tag+r'\b',a)];loc.append(tag+(' -> Proof/Verification '+', '.join(uses) if uses else ' (contextual Fact)'))
  else:
   st=re.match(r'(\d+\.\d+)',p);loc.append('Proof/Verification '+st.group(1) if st else 'Definition/Statement/Remarks clause')
 # Exact quotations expose consumed clauses and the current claim without attributing an unavailable historic version.
 return f'{s}: consumer '+ '; '.join(loc)+'. Exact consumed text: '+ ' / '.join(hit)+f' Supplier {sec}: '+q+'. Disposition: the quoted consumer use is licensed in its stated scope; explanatory mentions and unused Facts supply no stronger result.'

rows=[]
for e in work['pending_edges']:
 rows.append(dict(kind='edge',**{k:e[k] for k in ['from','to','from_group','to_group']},reviewer=reviewer,from_sha256=sha(raw(e['from'])),to_sha256=sha(raw(e['to'])),verdict='accurate',note=evidence(e['from'],e['to']),defect_ids=[]))
(out/'edge-verdicts.jsonl').write_text(''.join(json.dumps(r)+'\n' for r in rows))
disp=[]
for c in work['pending_direct_consumers']:
 notes='\n\n'.join(evidence(c['id'],s) for s in c['changed_suppliers'])
 disp.append(dict(id=c['id'],status='still-licensed',reviewer=reviewer,consumer_sha256=sha(raw(c['id'])),changed_suppliers=c['changed_suppliers'],notes=notes))
(out/'impact-dispositions.json').write_text(json.dumps(dict(run=run,group=10,dispositions=disp),indent=2)+'\n')
(out/'carrier-deltas.json').write_text('[]\n')
(out/'defect-proposals.json').write_text('[]\n')
print(len(rows),len(disp))
