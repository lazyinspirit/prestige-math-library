#!/usr/bin/env python3
"""Regenerate shard-08 interface impact inventories from original/current edges.

Mechanical reachability is evidence for scope, not a mathematical verdict.
The reviewed dispositions below encode the separate use inspection recorded
in agent-08-report.md.
"""
from pathlib import Path
import collections, hashlib, io, json, re, subprocess, tarfile
ROOT=Path(__file__).resolve().parents[2]
D=ROOT/'research/ap-131-sol-repair'
items={p.stem:p for p in (ROOT/'items').glob('*.md')}
shard=json.loads((D/'shard-08.json').read_text())
original_ids=[x['id'] for x in shard]
new_id='lem-countable-union-of-compact-content-zero-sets-is-null-in-zf'
bull_new_ids=['lem-replicating-a-vertex-of-a-perfect-graph-preserves-perfection','thm-lovasz-perfect-graph-criterion-and-complement-invariance','thm-substituting-perfect-graphs-preserves-perfection']
source_ids=list(original_ids)+[new_id]+bull_new_ids
modified_outside=['cor-distance-to-subspace-by-annihilating-functionals','cor-distance-to-annihilator-is-restriction-norm','cor-norm-recovered-from-the-dual-unit-ball','cor-dual-separates-points','cor-finite-dimensional-subspaces-are-complemented','cor-dense-range-iff-transpose-is-injective','cor-density-characterised-by-annihilator-zero','thm-closed-hyperplanes-are-kernels-of-nonzero-functionals','thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one','def-l-p-space-as-a-quotient-by-null-functions','cor-separable-reflexive-space-has-separable-dual','def-split-banach-submanifold','rem-surjectivity-alone-does-not-give-a-banach-submanifold-without-a-split-kernel','rem-riemann-integral-choice-ledger','def-darboux-integral','fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set','rem-integral-conventions-and-scope','cor-riemann-integrability-and-lebesgue-null-discontinuity-sets']
all_current={str(p.relative_to(ROOT)):p.read_text() for p in list((ROOT/'items').glob('*.md'))+list((ROOT/'library').rglob('*.md'))}
all_old={}
# Include the baseline of every item and page so an edge removed by another
# writer in an intermediate carrier still belongs to this original closure.
archive=subprocess.run(['git','archive','HEAD','items','library'],cwd=ROOT,capture_output=True,check=True).stdout
with tarfile.open(fileobj=io.BytesIO(archive)) as tf:
 for member in tf.getmembers():
  if member.isfile() and member.name.endswith('.md'):
   all_old[member.name]=tf.extractfile(member).read().decode()
for x in original_ids:
 p=D/'before'/f'{x}.md'
 if p.exists():all_old[f'items/{x}.md']=p.read_text()
for x in modified_outside:
 p=D/'before'/f'agent-08-outside-{x}.md'
 if p.exists():all_old[f'items/{x}.md']=p.read_text()
known=set(items)
alias={}
for name,p in items.items():
 t=p.read_text();m=re.search(r'^aliases:\s*\[([^\]]*)\]',t,re.M)
 if m:
  for a in re.findall(r'[a-z0-9-]+',m.group(1)):alias[a]=name
for path,s in all_old.items():
 name=Path(path).stem;m=re.search(r'^aliases:\s*\[([^\]]*)\]',s,re.M)
 if m:
  for a in re.findall(r'[a-z0-9-]+',m.group(1)):alias.setdefault(a,name)
rev=collections.defaultdict(lambda:collections.defaultdict(list))
token=re.compile(r'(?<![a-z0-9-])(?:def|thm|lem|prop|cor|rem|ex|cex|fs)-[a-z0-9-]+(?![a-z0-9-])')

def add_edges(path,s,version):
 parts=s.split('---',2)
 fm=parts[1] if len(parts)>2 else ''
 body=parts[2] if len(parts)>2 else s
 for field in ['deps','justified_by','forward_refs','external_refs','items','examples']:
  m=re.search(r'^'+field+r':\s*\[([\s\S]*?)\]',fm,re.M)
  if not m:continue
  for raw in token.findall(m.group(1)):
   key=alias.get(raw,raw)
   if key in known:
    rev[key][path].append({'source':version,'kind':field,'excerpt':field+': '+raw})
 for lineno,line in enumerate(body.splitlines(),1):
  for raw in set(token.findall(line)):
   key=alias.get(raw,raw)
   if key in known:
    kind='wikilink' if '[['+raw in line else 'plain-reference'
    rev[key][path].append({'source':version,'kind':kind,'line':lineno,'excerpt':line.strip()[:1000]})
for path,s in all_current.items():add_edges(path,s,'current')
for path,s in all_old.items():add_edges(path,s,'original')

def section(s):
 if not s:return None
 m=re.search(r'^## (Statement|Definition)\s*\n',s,re.M)
 if not m:return None
 e=re.search(r'^## ',s[m.end():],re.M)
 return s[m.start():m.end()+e.start()] if e else s[m.start():]

def claim_ac(s):
 c=section(s) or ''
 return bool(re.search(r'Assum(?:e|ing) (?:the )?Axiom of Choice|Assume AC|Assuming AC',c,re.I))

def claim_hb(s):
 c=section(s) or ''
 return bool(re.search(r'Assume HB|relative Hahn.{0,8}Banach principle HB|Assume the ultrafilter lemma and HB',c,re.I))

# Direct exceptions established by reading the cited Fact/Proof/Remarks uses.
page_findings={
 'library/not-proved-here/open-problems-and-research-frontier.md':'repaired by root: summary now calls the HB-to-additive implication a historical question with unverified present status',
 'library/real-analysis/the-riemann-integral.md':'repaired by root: summary now cites the canonical ZF cover lemma and says both directions of Lebesgue criterion are ZF',
 'library/functional-analysis/geometric-hahn-banach-and-convex-separation.md':'repaired by root: summary distinguishes AC-based geometric separation from the direct choice-free hyperplane theorem',
 'library/functional-analysis/the-analytic-hahn-banach-theorem.md':'repaired by root: summary identifies AC at the Zorn step and inherited norming consequences',
 'library/measure-theory/the-radon-nikodym-theorem-and-lebesgue-decomposition.md':'repaired by root: summary identifies AC for complex-density existence'
}
reviewed={
 'def-radon-nikodym-derivative':{'thm-integration-against-a-radon-nikodym-derivative':'unaffected: conditional on an already supplied representative; it does not assert complex-density existence'},
 'cor-finite-dimensional-subspaces-are-complemented':{'ex-bounded-operators-form-a-noncommutative-banach-algebra':'unaffected: example explicitly assumes AC in its Example section'},
 'def-reflexive-banach-space':{'cor-separable-reflexive-space-has-separable-dual':'repaired: cites the HB-relative bidual isometry separately; definition still supplies surjectivity'},
 'thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric':{
   'thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one':'repaired: elementary scalar inequality proved locally, with AC-dependent metric dependency removed',
   'def-l-p-space-as-a-quotient-by-null-functions':'repaired: orientation to later metric theorem now says under its stated choice hypothesis',
   'cor-lacunary-series-lp-membership-is-coefficient-ell-two':'repaired: AC premise propagated to completeness-based convergence proof'
 },
 'thm-geometric-hahn-banach-for-subspaces':{
   'thm-closed-hyperplanes-are-kernels-of-nonzero-functionals':'repaired: direct choice-free codimension-one proof replaces HB appeal',
   'lem-finite-evaluations-separate-from-a-dual-subspace':'repaired by its owner: original HB separation edge was removed; current finite-coordinate proof constructs the functional from a finite basis'},
 'thm-hahn-banach-norm-preserving-extension':{'ex-many-extensions-from-a-codimension-one-subspace':'unaffected: example uses explicit finite-dimensional extensions, not arbitrary HB existence'},
 'lem-transpose-is-bounded-and-has-the-same-norm':{'lem-canonical-map-is-natural':'repaired by its owner: original norm-equality supplier edge was removed; current proof uses only the bounded transpose definition and direct evaluation'},
 'thm-norm-preserving-extension-from-any-subspace':{'ex-distance-to-a-subspace-via-annihilating-functionals':'repaired by its owner: original extension edge was replaced by an AC-qualified dominated-HB construction, including the complexification step'},
 'thm-dual-norms-every-vector':{'ex-norming-functionals-in-lp-from-the-measure-duality-page':'repaired by its owner: original norming edge was replaced by the relative-HB norming supplier under the stated HB premise'},
}
source_ids += [x for x in modified_outside if x=='rem-riemann-integral-choice-ledger' or (lambda a,b: section(a)!=section(b))(all_old.get(f'items/{x}.md',''),all_current.get(f'items/{x}.md',''))]
for x in source_ids:
 old=all_old.get(f'items/{x}.md');cur=all_current.get(f'items/{x}.md')
 if not cur:continue
 oldsec=section(old);cursec=section(cur)
 target=D/f'agent-08-impact-{x}.jsonl'
 seen={f'items/{x}.md'};q=collections.deque([(f'items/{x}.md',0,[x])]);rows=[]
 while q:
  node,depth,path_ids=q.popleft()
  if not node.startswith('items/'):continue
  supplier=Path(node).stem
  for consumer,uses in rev.get(supplier,{}).items():
   if consumer==node or consumer in seen:continue
   seen.add(consumer)
   cid=Path(consumer).stem
   newpath=path_ids+[cid]
   direct=(depth==0)
   cs=all_current.get(consumer,'')
   if consumer in page_findings and any(u['kind']!='items' and u['kind']!='examples' for u in uses):
    disp=page_findings[consumer]
   elif x=='rem-riemann-integral-choice-ledger' and cid in ['def-darboux-integral','fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set','rem-integral-conventions-and-scope']:
    disp='repaired: direct prose now states the ZF Lebesgue forward proof and correct page choice ledger'
   elif x=='rem-riemann-integral-choice-ledger':
    disp='unaffected: actual use records choice-free finite selection or cites the ledger without relying on obsolete AC cost'
   elif x==new_id and cid=='thm-lebesgue-criterion':
    disp='repaired: forward implication now invokes this ZF compact content-zero union lemma at the exact former AC_omega gap'
   elif x==new_id and cid=='rem-riemann-integral-choice-ledger':
    disp='repaired: ledger cites this canonical-cover lemma as the precise ZF supplier'
   elif x in bull_new_ids and direct and cid in ['thm-basic-bull-free-graphs-are-two-narrow','thm-alpha-narrowness-is-preserved-under-substitution','thm-substituting-perfect-graphs-preserves-perfection']:
    disp='repaired by published prerequisite: direct consumer now cites the fully proved perfect-graph supplier; the separate bull-free Berge perfection gap is not discharged by this edge'
   elif x in bull_new_ids and direct and consumer.startswith('library/'):
    disp='repaired by root: page registers this proved prerequisite before its bull-free consumers'
   elif x=='thm-lebesgue-criterion' and cid=='rem-riemann-integral-choice-ledger':
    disp='repaired: choice ledger now names the canonical ZF rational-cover lemma and charges no AC_omega to Lebesgue criterion'
   elif x=='thm-lebesgue-criterion' and cid in ['def-darboux-integral','fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set','rem-integral-conventions-and-scope','cor-riemann-integrability-and-lebesgue-null-discontinuity-sets']:
    disp='repaired: direct prose now attributes both criterion implications to ZF; the Lebesgue-measure corollary retains AC_omega for its translation suppliers'
   elif x=='cor-riemann-integrability-and-lebesgue-null-discontinuity-sets':
    disp='unaffected: only the explanatory choice-cost sentence changed; the AC_omega premise, Lebesgue-measure conclusion, and proof suppliers are identical'
   elif x=='rem-hahn-banach-discontinuous-additive-open' and consumer=='library/not-proved-here/open-problems-and-research-frontier.md':
    disp='repaired by root: page now places this under historical questions and says current status is unverified, outside its current-open paragraph'
   elif x=='def-l-p-space-as-a-quotient-by-null-functions':
    disp='unaffected: quotient-class definition is unchanged; only orientation to a later conditional metric theorem was qualified'
   elif x=='thm-lebesgue-criterion':
    disp='unaffected: core iff criterion is unchanged and now has a ZF proof; no added premise'
   elif x=='rem-hahn-banach-discontinuous-additive-open':
    disp='unaffected: recorded question narrowed to a dated source claim; no theorem was used'
   elif direct and cid in reviewed.get(x,{}):
    disp=reviewed[x][cid]
   elif direct and cid in modified_outside:
    disp='repaired: direct supplier use reconciled in this shard; see before/current consumer sections'
   elif direct and cid in source_ids:
    disp='repaired: assigned direct supplier use carries its exact Choice premise'
   elif direct and claim_ac(cs):
    disp='unaffected: consumer Statement already assumes AC, which discharges supplier premise'
   elif direct and claim_hb(cs) and x in ['def-reflexive-banach-space']:
    disp='unaffected: cited use is surjectivity; any isometry use has a separate relative-HB supplier'
   elif direct and x=='def-reflexive-banach-space' and consumer.startswith('library/'):
    disp='unaffected: page frontmatter lists the definition; its body makes no separate unqualified bidual-isometry claim'
   elif direct and x=='def-reflexive-banach-space':
    disp='unaffected: actual use is surjectivity, the unchanged definition; any isometry use is separately under HB or AC'
   elif direct and x=='def-radon-nikodym-derivative' and consumer.startswith('library/'):
    disp='unaffected: page lists the definition; its prose separately says complex-density existence retains AC'
   elif direct and x=='def-radon-nikodym-derivative':
    disp='unaffected: direct use is a signed/explicit density example or false claim; no unqualified complex existence'
   elif direct and x=='cor-lacunary-series-lp-membership-is-coefficient-ell-two':
    disp='unaffected: page listing only'
   elif direct and consumer.startswith('library/'):
    disp='unaffected: page frontmatter lists the supplier; body prose was inspected for an unqualified assertion of its changed contract'
   elif direct:
    disp='REVIEW REQUIRED: direct use lacks an established premise or local independence explanation'
   else:
    disp='indirect edge traced, not a fresh proof audit: no additional premise is transmitted by this source once the actual direct use is repaired or found unaffected; a changed intermediate interface is separately inventoried as its own direct event'
   dedup=[];keys=set()
   for u in uses:
    k=(u['source'],u['kind'],u['excerpt'])
    if k not in keys:keys.add(k);dedup.append(u)
   rows.append({'consumer':consumer,'depth':depth+1,'via':node,'path':newpath,'uses':dedup,'disposition':disp,'review_scope':('actual direct-use assessment' if direct else 'transitive edge trace; no fresh whole-proof audit'),'intermediate_interface_changed_here':(cid in source_ids and section(all_old.get(consumer,''))!=section(cs)),'current_sha256':hashlib.sha256(cs.encode()).hexdigest() if cs else None})
   if consumer.startswith('items/'):q.append((consumer,depth+1,newpath))
 meta={'id':x,'kind':'interface-impact','before_sha256':hashlib.sha256(old.encode()).hexdigest() if old is not None else None,'current_sha256':hashlib.sha256(cur.encode()).hexdigest(),'before_section':oldsec,'current_section':cursec,'statement_changed':oldsec!=cursec,'consumer_count':len(rows),'direct_count':sum(r['depth']==1 for r in rows),'requires_review_count':sum(r['disposition'].startswith('REVIEW') for r in rows),'note':'Edges are union of Git-baseline items/pages, frozen original source snapshots, and current explicit deps/links/aliases/page mentions. Each row records the actual citation line or declared edge; mathematical dispositions are explained in agent-08-report.md.'}
 with target.open('w') as out:
  out.write(json.dumps(meta,ensure_ascii=False)+'\n')
  for row in rows:out.write(json.dumps(row,ensure_ascii=False)+'\n')
 print(x,len(rows),meta['direct_count'],meta['requires_review_count'])
