import pathlib,json,hashlib,datetime
P=pathlib.Path('physics');r='physics-remaining-80-2026-10-17';D=P/'research'/f'{r}-owner-step3-accepted-repair-classification';doc=json.loads((D/'proposal.json').read_text());print('binding type',type(doc['input_bindings']).__name__)
changes=[];by={}
for x in doc['obligations']:
 q=x['root_observed_current_comparison'];p=P/'items'/f"{x['id']}.md";assert hashlib.sha256(p.read_bytes()).hexdigest()==q['current_source'],x['id']
for x in doc['obligations']+doc['supplementary_no_defect_proposals']:by.setdefault(x['batch'],[]).append(x)
(D/'root-before-adoption').mkdir(exist_ok=True)
for b,rows in by.items():
 p=P/'research'/f'{r}-alpha-batch-{b}-3a-decisions.json';old=p.read_bytes();current=json.loads(old);(D/'root-before-adoption'/p.name).write_bytes(old)
 for x in rows:
  d=next(d for d in current['decisions'] if d['obligation']==x['obligation']);assert d['verdict']=='accepted_repair',(x['obligation'],d['verdict']);assert isinstance(d['evidence'],str)
  before=json.loads(json.dumps(d));d['verdict']=x['proposed_verdict'];d['evidence']+=' Root current-carrier serialization follow-up: '+x['rationale']+' Full report-bound classification: research/'+r+'-owner-step3-accepted-repair-classification/proposal.json.'
  if x['proposed_verdict']=='reviewed_no_defect':
   assert not d.get('defect_ids'),(x['obligation'],d['defect_ids']);d['change_kind']=x['proposed_change_kind']
  changes.append({'batch':b,'obligation':d['obligation'],'before_verdict':before['verdict'],'after_verdict':d['verdict'],'preserved_current_defect_ids':d.get('defect_ids'),'source':x.get('root_observed_current_comparison')})
 p.write_text(json.dumps(current,indent=2,ensure_ascii=False)+'\n')
(D/'root-adoption.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'reviewed_by':'root','changes':changes,'scope':'Merge only report-supported verdict/current classification and append evidence; preserve corrected routes, existing evidence, current defect ownership and original history. Source/proof verdicts are prior actual scientific reviews, not newly fabricated audits. Rehashing pending.'},indent=2)+'\n');print('adopted',len(changes),'in',len(by),'files')
