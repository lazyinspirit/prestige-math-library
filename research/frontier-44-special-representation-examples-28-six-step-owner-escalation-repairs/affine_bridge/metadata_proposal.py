from pathlib import Path
import json,re,copy
out=Path('research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/affine_bridge');ids=json.loads((out/'items.json').read_text());aggregate=Path('research/frontier-44-special-representation-examples-28-six-step-batch-23.proof-contracts.json');contracts=json.loads(aggregate.read_text())['contracts'];proposal={}
def sections(t):return {m.group(1):m.group(2).strip() for m in re.finditer(r'^## (.*?)\n([\s\S]*?)(?=^## |\Z)',t,re.M)}
for id in ids:
 t=Path('items/'+id+'.md').read_text();sec=sections(t);steps=[];uses={}
 for m in re.finditer(r'^(\d+\.\d+) (.*?) \[([^\]\n]+)\](?: ∎)?$',sec['Proof'],re.M):
  n,claim,tags=m.groups();inputs=[x.strip() for x in tags.split(',')];steps.append({'id':'step-'+n.replace('.','-'),'step':n,'claim':claim,'inputs':inputs})
  for tag in inputs:uses.setdefault(tag,[]).append(n)
 c=copy.deepcopy(contracts.get(id,{'citations':[],'routine_steps':[],'boundaries':[]}));c['derivations']=steps
 for citation in c['citations']:citation['uses']=uses.get(citation.get('fact'),[])
 facts={m.group(1):m.group(2) for m in re.finditer(r'^\[(F\d+)\] (.*)$',sec['Facts & Assumptions'],re.M)}
 if id in contracts: addfacts=['F6']
 else:addfacts=list(facts)
 for fact in addfacts:
  for source in re.findall(r'\[\[([^]|]+)',facts[fact]):
   st=Path('items/'+source+'.md').read_text();ss=sections(st);name='Statement' if 'Statement' in ss else 'Definition';quote=ss.get(name,'')
   if id.endswith('string-leading-terms') and fact=='F3':name='Definition and Verification 2.3';quote=ss['Definition']+'\n\n'+next(line for line in ss['Verification'].splitlines() if line.startswith('2.3 '))
   c['citations'].append({'fact':fact,'source':source,'source_section':name,'quote':quote,'uses':uses.get(fact,[])})
 if id not in contracts:c['boundaries']=[{'type':'assumption','detail':'Inherited AC only through finite quantum based/bar suppliers; all tensor/Hecke/matrix/string calculations are finite.'},{'type':'scope','detail':'Every finite minuscule type-A tensor cut and either factor order. No category O or cellular-simple label identification; no whole-item acceptance stamp.'}]
 proposal[id]=c
(out/'proposed-contract-entries.json').write_text(json.dumps(proposal,indent=2)+'\n')
(out/'root-metadata-proposal.json').write_text(json.dumps({'run':'frontier-44-special-representation-examples-28-six-step','batch':23,'contract_target':str(aggregate),'replacement_contracts_file':str(out/'proposed-contract-entries.json'),'page_insertions':[{'page':'library/representation-theory/parabolic-category-o-and-fock-space-bases.md','insert':ids[3],'before':ids[0]},{'page':'library/representation-theory/parabolic-category-o-and-fock-space-bases.md','insert':ids[4],'before':ids[2]}],'new_manifest_ids':ids[3:],'deps_additions':{ids[0]:[ids[3]],ids[1]:[ids[3]],ids[2]:[ids[4]]},'original_statements':'all three unchanged byte-for-byte','new_cross_batch_supplier_for_upper':'thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules; bounded finite-type minuscule product clause only','verification_request':'Root independent review and native integration; no independent acceptance claimed here.','risks_to_keep_open_until_root_review':['f44-six-step-b23-linkage-bridge','f44-six-step-b23-kl-coefficient-bridge','f44-six-step-b23-upper-crystal-labels'],'root_only_depcheck_issue':'inherited prerequisite page cycle foundations-of-the-real-numbers -> construction-of-r-via-cauchy-sequences -> construction-of-r-via-dedekind-cuts -> foundations-of-the-real-numbers'},indent=2)+'\n')
print('Proposed '+str(len(proposal))+' contract entries; no aggregate writes.')
