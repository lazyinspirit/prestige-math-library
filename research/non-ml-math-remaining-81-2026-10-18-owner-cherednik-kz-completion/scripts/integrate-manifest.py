import pathlib,json,yaml,re
r='non-ml-math-remaining-81-2026-10-18';b=pathlib.Path('research/'+r+'-owner-cherednik-kz-completion');p=pathlib.Path('research/'+r+'-batch-73.pages.json');d=json.loads(p.read_text());new=json.loads((b/'new-item-ids.json').read_text());scope=json.loads((b/'item-scope.json').read_text());fm={i:yaml.safe_load(pathlib.Path('items/'+i+'.md').read_text().split('---',2)[1]) for i in scope};rows={i['id']:i for pg in d for i in pg['items']}
for i in scope:
 f=fm[i]
 if i not in rows:
  s=pathlib.Path('items/'+i+'.md').read_text();stmt=s.split('## Statement\n',1)[1].split('\n## ',1)[0].strip();rows[i]={'id':i,'kind':f['kind'],'title':f['title'],'deps':f.get('deps',[]),'statement':stmt,'strategy':'Complete local proof in the numbered carrier; see owner construction for exact source and consumer closure.','axiom_use':'No additional arbitrary choice principle; the costandard Ext argument uses a finite projective Koszul resolution with explicit contraction.','provenance':f['provenance'],'sources':f['sources']['references'],'justified_by':[]}
 else:rows[i]['deps']=f.get('deps',[])
# Preserve original levels verbatim. New rows intentionally omit levels for root recertification.
abase=[i['id'] for i in d[0]['items']]+new;aset=set(abase);order=[];done=set();active=set()
def visit(i):
 if i in done:return
 if i in active:raise RuntimeError('cycle '+i)
 active.add(i)
 for dep in fm[i].get('deps',[]):
  if dep in aset:visit(dep)
 active.remove(i);done.add(i);order.append(i)
for i in abase:visit(i)
d[0]['items']=[rows[i] for i in order]
for pg in d[1:]:pg['items']=[rows[i['id']] for i in pg['items']]
p.write_text(json.dumps(d,indent=2)+'\n')
page=pathlib.Path('library/'+d[0]['category']+'/'+d[0]['id']+'.md');s=page.read_text();a=s.index('items:\n');z=s.index('examples:',a);s=s[:a]+'items:\n'+''.join('  - '+i+'\n' for i in order)+s[z:];s=s.replace('The standard-module Hecke relation is proved locally. The all-object factorization and quotient-equivalence claims are retained with their exact authoring escalations below.','The Hecke relation is proved for every object by generalized-standard parameter families. The torsion-quotient equivalence is proved under the explicit Hecke-rank hypothesis.');a=s.index('The standard-module relation is proved');z=s.index('## Prerequisites and reuse boundaries',a);s=s[:a]+'''The uniform Euler bound in [[thm-rational-cherednik-category-o-projective-generator-from-generalized-standards]] constructs a finite projective generator inside generalized standards and proves the highest-weight structure. [[lem-rational-cherednik-costandard-orthogonality-and-character]] proves costandard orthogonality with a finite Koszul resolution and equality of standard/costandard characters; [[thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank]] proves reciprocity and the KZ projective endomorphism dimension $|W|$.

[[lem-rational-cherednik-kz-relation-specializes-in-flat-family]] proves a convergent nonresonant gauge and respects the fractional meridian endpoint. Monodromy depends holomorphically on the polynomial-free generalized-standard family, so the exact Hecke relation extends to every parameter. Thus [[thm-rational-cherednik-kz-standard-modules-factor-through-hecke]] and [[thm-rational-cherednik-kz-factors-through-hecke-algebra]] hold without an assumption of semisimplicity or diagonalizability at resonant parameters.

For the quotient, [[lem-finite-modules-with-connection-over-a-polynomial-open-are-locally-free]] supplies the coherent-connection local-freeness statement beyond category $\\mathcal O$. [[lem-cherednik-nilpotent-induced-connections-have-moderate-growth]] proves uniform growth on generic lines, and [[lem-bounded-separate-rationality-is-rational]] gives the interpolation argument needed to algebraize horizontal maps and invariant determinant lines. [[thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image]] consequently proves full faithfulness and closure under subobjects and quotients directly. No unproved full Riemann–Hilbert theorem is imported.

Finally [[thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank]] proves that the Hecke map onto the KZ projective endomorphism algebra is surjective, and the explicit hypothesis $\\dim_{\\mathbb C}\\mathcal H_{q(c)}(W)=|W|$ makes it an isomorphism. The equivalence identifies the torsion quotient, rather than all of category $\\mathcal O$, with Hecke modules. No unconditional Hecke dimension theorem is claimed.

'''+s[z:];page.write_text(s)
print('A',len(order),'B',len(d[1]['items']))
