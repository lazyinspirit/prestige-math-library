import json,re
from pathlib import Path
root=Path.cwd()
base=root/'research/machine-learning-all-101-2026-10-19-neural-operator-proposal/ap-proof'
helper='lem-inward-mollification-and-finite-rank-approximation-on-lipschitz-domains'
target='thm-neural-operator-input-output-spaces-have-ap'

def section(source, name):
    path=base/'items'/f'{source}.md'
    if not path.exists():path=root/'items'/f'{source}.md'
    text=path.read_text()
    s=text.split(f'## {name}\n',1)[1].split('\n## ',1)[0].strip()
    return s

def excerpt(source,name,needle=None):
    s=section(source,name)
    if needle is None:return s
    chunks=s.split('\n\n')
    return next(c for c in chunks if needle in c)

H=[
('F1','def-sobolev-space-wkp-and-its-norm','Definition','W^{0,p}'),
('F1','lem-sobolev-norm-is-well-defined-and-definite','Statement','Assume Countable Choice'),
('F2','lem-finite-ambient-partitions-for-euclidean-boundary-integration','Statement',None),
('F3','lem-mollification-commutes-with-weak-derivatives-in-the-interior','Statement',None),
('F4','lem-complex-translation-and-approximate-identity-interfaces','Statement',None),
('F5','thm-minkowski-integral-inequality','Statement',None),
('F6','lem-classical-derivatives-are-weak-derivatives','Statement','Assume Countable Choice'),
('F6','lem-weak-leibniz-rule-with-a-smooth-factor','Statement',None),
('F7','thm-heine-borel-rn','Statement',None),
('F7','thm-heine-cantor-metric','Statement','Let $(X,d_X)$'),
('F8','prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets','Statement',None),
('F8','thm-holder-inequality-for-integrals','Statement',None),
('F9','lem-smooth-bump-between-concentric-euclidean-balls','Statement',None)]
T=[
('F1',helper,'Statement',None),
('F2','def-approximation-property-and-bounded-approximation-property','Definition','Let $X$'),
('F3','def-sobolev-space-wkp-and-its-norm','Definition','W^{0,p}'),
('F3','lem-sobolev-norm-is-well-defined-and-definite','Statement','Assume Countable Choice'),
('F3','thm-riesz-fischer-completeness-of-l-p','Statement','Assume countable choice'),
('F4','thm-holder-inequality-for-integrals','Statement',None),
('F5','lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves','Statement',None)]
contracts={}
for item,spec in [(helper,H),(target,T)]:
    text=(base/'items'/f'{item}.md').read_text()
    proof=text.split('## Proof\n',1)[1]
    rows=[]
    for m in re.finditer(r'(?ms)^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',proof):
        n,body=m.group(1),m.group(2).strip()
        mt=re.search(r'\[([^\[\]]+)\](?: ∎)?$',body)
        assert mt,(item,n)
        tags=[x.strip() for x in mt.group(1).split(',')]
        claim=body[:mt.start()].strip()
        rows.append(dict(id='step-'+n,claim=claim,step=n,inputs=tags))
    citations=[]
    for fact,source,name,needle in spec:
        uses=[r['step'] for r in rows if fact in r['inputs']]
        assert uses,(item,fact)
        citations.append(dict(fact=fact,source=source,source_section=name,quote=excerpt(source,name,needle),uses=uses))
    boundaries=[
      dict(case='empty',status='checked',evidence='Helper step 1.1 treats empty D and empty K by the zero map; the target applies the same quantified helper.'),
      dict(case='zero',status='checked',evidence='Helper steps 2.4 and 3.1 include m=0; zero functions are fixed by every linear construction.'),
      dict(case='one',status='checked',evidence='The inward graph estimate of helper step 1.1 works for d=1, with no horizontal coordinates; compact singleton K yields density in step 5.2.'),
      dict(case='degenerate',status='checked',evidence='Empty interior remainders and empty integration cells are omitted or contribute zero; finite-rank spans may have dependent or zero generators.'),
      dict(case='endpoints',status='checked',evidence='Helper steps 2.3–2.4 explicitly use Tonelli/Minkowski at p=1; p=infinity is excluded for Sobolev approximation. All Cm orders m>=0 are included.'),
      dict(case='nonempty-choice',status='checked',evidence='Countable Choice is an explicit hypothesis for the analytical interfaces. Chart subcovers, cell representatives and compact nets require only finite selection.'),
      dict(case='iff-forward',status='not_applicable',reason='The claim is not a biconditional.'),
      dict(case='iff-reverse',status='not_applicable',reason='The claim is not a biconditional.')]
    if item==target:
      boundaries[1]['evidence']='Steps 1.1–1.2 prove completeness including W0p=Lp and C0; step 2.1 applies the full approximation helper.'
    contracts[item]=dict(citations=citations,derivations=rows,routine_steps=[],boundaries=boundaries,
      axioms=[dict(id='def-countable-choice',uses=[r['step'] for r in rows],reason='Explicit hypothesis; used by the Sobolev/Lebesgue/translation/mollification and, in the target, completeness/calculus interfaces. Geometric and compact-net selections are finite.')],
      finite_checks=[],risk_review=dict(status='complete',reviewer='ap-proof-proposal-author',notes='Complete local derivations authored for independent parent review. This proposed contract supplies no workflow acceptance, gate pass, or transitive prerequisite audit.'))
payload=dict(version=1,run='machine-learning-all-101-2026-10-19',batch='37',pair='neural-operators-and-physics-informed-learning',scope=[helper,target],contracts=contracts)
(base/'proposed-proof-contracts.json').write_text(json.dumps(payload,indent=2,ensure_ascii=False)+'\n')
print('Wrote proposed contracts:', {k:len(v['derivations']) for k,v in contracts.items()})
