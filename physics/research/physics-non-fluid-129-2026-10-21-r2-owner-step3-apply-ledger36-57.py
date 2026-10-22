import pathlib,json,hashlib,datetime
P=pathlib.Path;r='physics-non-fluid-129-2026-10-21-r2';base=P(f'research/{r}-owner-step3-decision-ledger36-57');pp=base/'proposal.json';pb=pp.read_bytes();x=json.loads(pb);sha=lambda b:hashlib.sha256(b).hexdigest();now=datetime.datetime.now(datetime.timezone.utc).isoformat()
for g in x['guards']['files']:assert sha(P(g['path']).read_bytes())==g['sha256'],g['path']
for p in x['guards']['absent_paths']:assert not P(p).exists()
g=x['guards']['ledger'];lp=P(g['path']);lb=lp.read_bytes();assert sha(lb[:g['prefix_bytes']])==g['prefix_sha256'];ledger=[json.loads(l) for l in lb.splitlines() if l.strip()];ids={a['defect_id'] for a in ledger}
for e in x['guards']['original_ledger_rows']:assert next(a for a in ledger if a['defect_id']==e['defect_id'])==e['row']
s=json.loads(P(f'.physics-autopilot/{r}/state.json').read_text());assert all(d.get('endedAt') for d in s['dispatches'].values()) and not P(f'.physics-autopilot/{r}/controller.lock').exists()
pending={}
def doc(path):
 p=P(path)
 if p not in pending:pending[p]=[p.read_bytes(),json.loads(p.read_text())]
 return pending[p][1]
for a in x['decision_replacements']:
 d=doc(a['path']);n=next(i for i,b in enumerate(d['decisions']) if b['obligation']==a['obligation']);assert d['decisions'][n]==a['before'];d['decisions'][n]=a['after']
for a in x['supplemental_decisions']:
 d=doc(a['path']);assert all(b['obligation']!=a['after']['obligation'] for b in d['decisions']);d['decisions'].append(a['after'])
rows=x['ledger_appends_proposed']
for row in rows:assert row['defect_id'] not in ids;ids.add(row['defect_id']);row['at']=now
out=base/'root-application';assert not out.exists();out.mkdir();(out/'proposal.json').write_bytes(pb);(out/'ledger.before.jsonl').write_bytes(lb)
for p,(before,d) in pending.items():(out/p.name).write_bytes(before)
for p,(before,d) in pending.items():assert p.read_bytes()==before
assert lp.read_bytes()==lb
with lp.open('ab') as f:f.write(('\n'.join(json.dumps(a,separators=(',',':')) for a in rows)+'\n').encode())
for p,(before,d) in pending.items():p.write_text(json.dumps(d,indent=2)+'\n')
(out/'receipt.json').write_text(json.dumps({'run':r,'at':now,'proposal_sha256':sha(pb),'decision_replacements':len(x['decision_replacements']),'supplemental_decisions':len(x['supplemental_decisions']),'appended_rows':[a['defect_id'] for a in rows],'original_ledger_rows_preserved':True,'source_edits':False,'native_gate_success':False,'batch52_excluded':True},indent=2)+'\n');print('Applied20 exact decision successors,3 supplemental decisions,5append-onlyledgerrows;originals preserved')
