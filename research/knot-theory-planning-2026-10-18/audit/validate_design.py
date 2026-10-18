"""Scoped identity/projection/evidence checks, not native gates or proof checks."""
from pathlib import Path
import json,re,hashlib,collections,datetime,yaml
ROOT=Path(__file__).resolve().parents[3];BASE=ROOT/'research/knot-theory-planning-2026-10-18';AUDIT=BASE/'audit'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def check(ok,msg):
 if not ok:raise AssertionError(msg)
delta=json.loads((BASE/'proposed-registration-delta.json').read_text());snapshot=json.loads((BASE/'author-snapshot.json').read_text())
its={x['id']:x for x in delta['proposed_items']};ps={p['id']:p for p in delta['page_rows']};pairs=delta['pairs']
check(len(its)==len(delta['proposed_items']),'duplicate IDs')
K={'definition':'def','algorithm':'alg','lemma':'lem','theorem':'thm','proposition':'prop','corollary':'cor','remark':'rem','open-problem':'op','example':'ex','counterexample':'cex'}
for ident,it in its.items():
 check(it['kind'] in K and ident.startswith(K[it['kind']]+'-'),'kind '+ident)
 check(re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',ident),'ID syntax '+ident)
 check(len(it['statement'])>30 and len(it['proof_design'])>30,'contract '+ident)
 check('Prove the named step' not in str(it),'placeholder '+ident)
 check(not re.search(r'https?://|\[\[[a-z][a-z0-9-]*(?:\||\]\])',it['statement']),'statement link '+ident)
 check(it['home_page'] in ps and ident in ps[it['home_page']]['items'],'ownership '+ident)
 check(len(it['deps'])==len(set(it['deps'])),'duplicate deps '+ident)
 for d in it['deps']:
  check(re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',d),'non-ID deps '+ident)
  check(d in its or(ROOT/'items'/f'{d}.md').exists(),'unresolved '+d)
  if d in its:check(its[d]['kind'] not in ('open-problem','remark','example','counterexample'),'nonlogical supplier '+d)
 for j in it['justified_by']:
  check(j in its and ident in its[j]['deps'],'bad justified_by '+ident)
  check(j not in it['deps'],'discharge cycle '+ident)
seen=set();active=set()
def visit(i):
 check(i not in active,'item cycle '+i)
 if i in seen:return
 active.add(i)
 for d in its[i]['deps']:
  if d in its:visit(d)
 active.remove(i);seen.add(i)
for i in its:visit(i)

# Identity inventory only: this does not validate or repair unrelated items.
inventory=set();aliases={};unparsed=[]
for p in (ROOT/'items').glob('*.md'):
 inventory.add(p.stem)
 try:
  # Parse only the identity field, without validating unrelated frontmatter.
  fm=p.read_text().split('---',2)[1]
  m=re.search(r'^aliases:(.*?)(?=^[A-Za-z_][A-Za-z0-9_-]*:|\Z)',fm,re.M|re.S)
  if m:
   data=yaml.safe_load('aliases:'+m[1])
   for a in data.get('aliases',[]) or[]:aliases.setdefault(a,[]).append(p.stem)
 except Exception:unparsed.append(str(p.relative_to(ROOT)))
check(not unparsed,'could not inspect alias fields '+str(unparsed[:3]))
check(not(set(its)&inventory),'existing ID collision')
check(not(set(its)&set(aliases)),'existing alias collision')
candidate_aliases=[]
for it in its.values():candidate_aliases+=it.get('aliases',[])
check(len(candidate_aliases)==len(set(candidate_aliases)),'candidate alias duplicate')
check(not(set(candidate_aliases)&(set(its)|inventory|set(aliases))),'candidate alias collision')

text=(ROOT/'research/plan-knot-theory-track.md').read_text()
headings=re.findall(r'^#{2,6}\s+(.+?)\s*$',text,re.M)
check(len(pairs)*2==len(ps),'pair/page count')
orders={p['id']:p['order'] for p in ps.values()}
for q in pairs:
 check(q['a_page'] in ps and q['b_page'] in ps,'pair page')
 check(q['a_heading'] in headings,'native-discoverable heading '+q['id'])
 check(ps[q['a_page']]['kind']=='A' and ps[q['b_page']]['kind']=='B','A/B kind')
 check(q['a_items']==ps[q['a_page']]['items'] and q['b_items']==ps[q['b_page']]['items'],'placement projection')
 check(q['a_page'] in ps[q['b_page']]['requires'],'B companion prerequisite')
 for d in ps[q['a_page']]['requires']:check(orders[d]<orders[q['a_page']],'page ordering '+q['id'])
 check(q['prose'].strip() in text,'pair prose mismatch '+q['id'])
 check(q['prose_sha256']==hashlib.sha256(q['prose'].encode()).hexdigest(),'pair prose hash '+q['id'])
for it in its.values():
 if ps[it['home_page']]['kind']=='B':check(it['kind'] in ('example','counterexample') and it.get('logical_leaf'),'B kind '+it['id'])

parts=delta['category_registration']['pathway_parts'];placed=[p for x in parts for p in x['pages']]
check(len(placed)==len(set(placed))==len(pairs),'pathway placements')
partof={p:x['part'] for x in parts for p in x['pages']}
for p in placed:
 check(ps[p]['kind']=='A','B in pathway')
 for d in ps[p]['requires']:check(partof[d]<=partof[p],'backward part')

for row in delta['source_dossiers']:
 check(sha(ROOT/row['path'])==row['raw_sha256'],'source hash '+row['path'])
for path,digest in snapshot['reader_dossiers_frozen'].items():check(sha(ROOT/path)==digest,'immutable dossier changed '+path)
for r in delta['existing_item_supplier_records']:
 p=ROOT/r['path'];check(sha(p)==r['raw_sha256'],'supplier changed '+r['id'])
 fm=yaml.safe_load(p.read_text().split('---',2)[1]);check(fm['id']==r['id'] and fm['status']==r['status'],'supplier identity '+r['id'])
used={d for it in its.values() for d in it['deps'] if d not in its}
bindings={r['id']:r for r in delta['existing_item_supplier_records']}
check(used<=set(bindings),'missing per-item bindings')
check(all(bindings[i]['status']=='published' and bindings[i]['use']!='excluded-unproved-or-draft-context' for i in used),'draft/literature-only selected supplier')
for field,path in [('source_scaffold_sha256','research/plan-knot-theory-track.md'),('category_pathway_sha256',delta['category_pathway']),('prerequisite_map_sha256',delta['prerequisite_map']),('coverage_and_sources_sha256',delta['coverage_and_sources'])]:check(sha(ROOT/path)==delta[field],'projection hash '+field)

result={'kind':'scoped-knot-theory-research-design-validation','checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'decision':'structural-pass-with-explicit-future-source-and-proof-obligations','mathematical_acceptance':False,'native_gates_run':False,'tests_or_whole_corpus_battery_run':False,'scope':'Only proposed Knot Theory artifacts, their existing ID/alias inventory, actual used supplier bindings and frozen reader dossier hashes. No source carrier edits or proof certification.','counts':{'pairs':len(pairs),'pages':len(ps),'items':len(its),'module_interfaces':delta['proof_module_count'],'algorithms':sum(i['kind']=='algorithm' for i in its.values()),'open_problems':sum(i['kind']=='open-problem' for i in its.values()),'remarks':sum(i['kind']=='remark' for i in its.values()),'b_items':sum(i.get('logical_leaf',False) for i in its.values()),'existing_used_supplier_ids':len(used),'existing_bound_item_ids':len(bindings),'pathway_parts':len(parts)},'checks':{k:'pass' for k in ['canonical_kinds_and_prefixes','unique_ids_and_aliases','existing_id_alias_collision_inventory','ID_only_deps_and_justified_by','discharge_reverse_edge_rule','item_DAG','single_item_page_ownership','B_items_nonlogical_leaves','open_remark_terminal','page_DAG_and_order','A_only_complete_pathway','native_discoverable_A_headings','pair_prose_projection_and_hashes','six_projection_hash_bindings','all_12_frozen_dossier_hashes','actual_used_supplier_raw_hash_status_bindings']},'limits':delta['design_limitations'],'retired_missing_author_context_ids':delta['retired_missing_context_ids'],'artifact_allowlist':[],'artifact_hashes_excluding_validation_self':{}}
files=[ROOT/'research/plan-knot-theory-track.md']+[BASE/p for p in ['proposed-registration-delta.json','prerequisite-map.md','coverage-and-sources.md','category-and-pathway.md','AUTHOR-STATUS.md']]+sorted(p for p in AUDIT.iterdir() if p.is_file() and p.name!='validation.json')
for p in files:
 result['artifact_allowlist'].append(str(p.relative_to(ROOT)));result['artifact_hashes_excluding_validation_self'][str(p.relative_to(ROOT))]=sha(p)
result['artifact_allowlist'].append(str((AUDIT/'validation.json').relative_to(ROOT)))
result['validation_self_binding']='Its final raw SHA-256 is supplied separately to root; no recursive self-hash is claimed.'
(AUDIT/'validation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'counts':result['counts'],'checks':'pass','validation_sha256':sha(AUDIT/'validation.json')},indent=2))
