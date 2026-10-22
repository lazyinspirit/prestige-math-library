import pathlib,json,hashlib,datetime
P=pathlib.Path;r='physics-non-fluid-129-2026-10-21-r2';base=P(f'research/{r}-owner-step3-decision-ledger84-114');pp=base/'proposal.json';proposalbytes=pp.read_bytes();x=json.loads(proposalbytes);sha=lambda b:hashlib.sha256(b).hexdigest();now=datetime.datetime.now(datetime.timezone.utc).isoformat()
for g in x['guards']:assert sha(P(g['path']).read_bytes())==g['sha256'],g['path']
s=json.loads(P(f'.physics-autopilot/{r}/state.json').read_text());assert all(d.get('endedAt') for d in s['dispatches'].values()) and not P(f'.physics-autopilot/{r}/controller.lock').exists()
lp=P('research/defect-ledger.jsonl');lb=lp.read_bytes();ledger=[json.loads(l) for l in lb.splitlines() if l.strip()];ids={a['defect_id'] for a in ledger}
for row in x['original_relevant_ledger_rows']:assert next(a for a in ledger if a['defect_id']==row['defect_id'])==row
pending={}
def doc(n):
 p=P(f'research/{r}-alpha-batch-{n}-3a-decisions.json')
 if p not in pending:pending[p]=[p.read_bytes(),json.loads(p.read_text())]
 return pending[p][1]
for a in x['decision_replacements']:
 d=doc(a['batch']);index=next(i for i,b in enumerate(d['decisions']) if b['obligation']==a['original']['obligation']);assert d['decisions'][index]==a['original'];d['decisions'][index]=a['proposed']
for a in x['supplemental_decisions']:
 d=doc(a['batch']);assert all(b['obligation']!=a['proposed']['obligation'] for b in d['decisions']);d['decisions'].append(a['proposed'])
rows=[]
for row in x['proposed_ledger_appends']:
 assert row['defect_id'] not in ids;ids.add(row['defect_id']);row['at']=now;row['evidence'].append({'path':str(pp),'note':'Root adopted exact same-owner historical/source ownership review; original native findings and source-reading limits preserved.'});rows.append(row)
out=base/'root-application';assert not out.exists();out.mkdir();(out/'proposal.json').write_bytes(proposalbytes);(out/'ledger.before.jsonl').write_bytes(lb)
for p,(before,d) in pending.items():(out/p.name).write_bytes(before)
for p,(before,d) in pending.items():assert p.read_bytes()==before
assert lp.read_bytes()==lb
with lp.open('ab') as f:f.write(('\n'.join(json.dumps(a,separators=(',',':')) for a in rows)+'\n').encode())
for p,(before,d) in pending.items():p.write_text(json.dumps(d,indent=2)+'\n')
(out/'receipt.json').write_text(json.dumps({'run':r,'at':now,'proposal_sha256':sha(proposalbytes),'decision_replacements':len(x['decision_replacements']),'supplemental_decisions':len(x['supplemental_decisions']),'new_closed_subject_specific_rows':[a['defect_id'] for a in rows],'original_ledger_rows_preserved':True,'source_edits':False,'native_gate_success':False,'pending_page_alias106':True},indent=2)+'\n');print('Applied3 exact ownership successors,1 supplemental95decision,1authentic102consumer row;106held')
