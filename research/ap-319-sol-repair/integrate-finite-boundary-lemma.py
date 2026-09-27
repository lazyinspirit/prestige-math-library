"""Integrate the locally reviewed owner-authorized finite boundary prerequisite."""
from pathlib import Path
import hashlib,json,re,yaml
b=Path(__file__).resolve().parent;r=b.parents[1]
i='lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary'
p=r/'items'/f'{i}.md';before=p.read_text();assert '\nstatus: draft\n' in before
(b/'root-before'/f'{i}.md').write_text(before)
s=before.replace('\nstatus: draft\n','\nstatus: published\n').replace('verification: {}','''verification:
  precheck: pass
  verified:
    model: Codex
    verdict: locally-reviewed
    date: 2026-09-23
    scope: "Owner-authorized new prerequisite; root read complete proof and exact local suppliers, with bounded independent Sol review. No judge or whole-closure certification."
    delegated_by: owner''')
p.write_text(s)
page=r/'library/differential-geometry/integration-of-forms-and-the-general-stokes-theorem.md'
t=page.read_text();anchor='"thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement"'
assert i not in t;t=t.replace(anchor,anchor+', "'+i+'"',1);page.write_text(t)
plan=r/'research/plan-spec.json';t=plan.read_text();anchor='        {\n          "id": "prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components"'
assert i not in t and t.count(anchor)==1
fm=yaml.safe_load(s.split('---',2)[1]);statement=re.search(r'## Statement\n\n([\s\S]*?)\n## Facts',s)[1].strip()
entry={'id':i,'kind':'lemma','title':fm['title'],'deps':fm['deps'],'statement':statement,'proof_plan':'Finite all-eligible boundary chart bump localization; local side-preserving Euclidean extension and Riemann substitution; finite refinement; pullback invariance and positivity; conditional agreement with global partition integral.'}
block='\n'.join('        '+l for l in json.dumps(entry,indent=2,ensure_ascii=False).splitlines())+',\n'
t=t.replace(anchor,block+anchor,1);json.loads(t);plan.write_text(t)
registry=b/'new-prerequisites.json';data=json.loads(registry.read_text())
for x in data:
 if x['id']==i:x.update(status='authored-reviewed-integrated',page=str(page.relative_to(r)),authored_draft_sha256=hashlib.sha256(before.encode()).hexdigest(),current_sha256=hashlib.sha256(s.encode()).hexdigest())
registry.write_text(json.dumps(data,indent=2)+'\n')
print(i,hashlib.sha256(s.encode()).hexdigest())
