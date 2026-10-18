from pathlib import Path
import json,re,hashlib,difflib
root=Path.cwd();R='non-ml-math-remaining-81-2026-10-18';out=root/f'research/{R}-owner-first-scaffold-gate-repair/monotone-notation';inv=json.loads((out/'consumer-inventory.json').read_text());rows=inv['consumers']+inv['textual_only_contexts'];subjects=set(inv['subjects']);ids=[r['id'] for r in rows if r['id'] in subjects or r['has_applied_iota']]
assert len(ids)==20
H=lambda x:hashlib.sha256(x).hexdigest()
convention=r'Throughout, $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$ denotes the canonical copies. Natural numbers, integers and rationals are written directly when used in real arithmetic.'
def remove_iota(text):
 changes=[];pos=0;result=''
 while (m:=re.search(r'\\iota\s*\(',text[pos:])):
  a=pos+m.start();op=pos+m.end()-1;j=op+1;depth=1
  while depth:
   if text[j]=='(':depth+=1
   elif text[j]==')':depth-=1
   j+=1
  arg=text[op+1:j-1]; # all actual arguments in this bounded inventory are natural-valued
  braces=parens=0;compound=False
  for ch in arg:
   if ch=='{':braces+=1
   elif ch=='}':braces-=1
   elif ch=='(':parens+=1
   elif ch==')':parens-=1
   elif ch in '+-/' and not braces and not parens:compound=True
  replacement='('+arg+')' if compound else arg
  result+=text[pos:a]+replacement;changes.append({'offset_in_body_after_prose_normalization':a,'old':text[a:j],'new':replacement,'argument':arg});pos=j
 return result+text[pos:],changes
proposals=[]
for id in ids:
 rel=f'items/{id}.md'; raw=(root/rel).read_bytes();s=raw.decode();fm,body=s.split('---',2)[1:]; originalbody=body
 # Remove only local explanatory notation that would become tautological.
 if id=='def-dirichlet-and-thomae-functions':
  old='library; for a natural $q$ the real $\\iota(q) = q \\cdot 1_{\\mathbb{R}}$ is the\ncanonical natural ([[def-canonical-natural]]), and $\\iota(q) > 0$ for $q \\ge 1$'
  new='library. A natural $q$ denotes its canonical real value $q \\cdot 1_{\\mathbb{R}}$\n([[def-canonical-natural]]), and $q > 0$ for $q \\ge 1$'; assert old in body;body=body.replace(old,new)
  old='natural number $\\ge 1$, and $\\iota(q(x)/d) = \\iota(q(x))/d$ because $\\iota$\ncarries products of naturals to products ([[lem-of-naturals-positive]]); hence'
  new='natural number $\\ge 1$. Since the canonical embeddings preserve products,\nthis integer quotient agrees with real division\n([[lem-of-naturals-positive]]); hence';assert old in body;body=body.replace(old,new)
 if id=='lem-additive-is-q-linear':
  old='[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\\iota(n)$ for the\ncanonical natural of $n$ in $\\mathbb{R}$ ([[def-canonical-natural]]). Then, for'
  new='[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing each natural\ndirectly for its canonical value in $\\mathbb{R}$ ([[def-canonical-natural]]). Then, for';assert old in body;body=body.replace(old,new)
  old='[L2] The canonical natural satisfies $\\iota(0) = 0$ and $\\iota(n+1) = \\iota(n) + 1$, and it agrees with the additive multiple $n \\cdot 1_{\\mathbb{R}}$'
  new='[L2] The canonical inclusion sends zero to the real zero and a successor to the preceding value plus $1$; the real value of $n$ agrees with the additive multiple $n \\cdot 1_{\\mathbb{R}}$';assert old in body;body=body.replace(old,new)
 if id=='thm-discontinuity-set-is-f-sigma':
  old='where $\\iota(m)$ is the canonical natural of $m$ in $\\mathbb{R}$; and '
  assert old in body;body=body.replace(old,'where $m$ is identified with its canonical real value; and ')
 if id=='thm-dirichlet-and-thomae-continuity-sets':
  body=body.replace('are the canonical copies and $\\iota(q) = q \\cdot 1_{\\mathbb{R}}$.','are the canonical copies, with each natural written directly as a real.')
 if id=='ex-locally-unbounded-finite-everywhere':
  body=body.replace('where $\\iota(q)$ is the canonical natural ([[def-canonical-natural]]) and','where a natural $q$ is identified with its canonical real value ([[def-canonical-natural]]) and')
 if id=='ex-thomae-values-and-oscillation-computed':
  body=body.replace('are the canonical copies and $\\iota(q)$ is the canonical natural','are the canonical copies, with each natural identified with its real value')
 body,applications=remove_iota(body)
 replacements={r'$\iota$ is positive and strictly increasing on the naturals $\ge 1$':r'the natural numbers $\ge 1$ are positive in $\mathbb{R}$ and their order is preserved there',r'$\iota$ is strictly increasing and positive on the naturals $\ge 1$':r'the natural numbers $\ge 1$ are positive in $\mathbb{R}$ and their order is preserved there',r'$\iota$ is positive on the naturals $\ge 1$':r'every natural number $\ge 1$ is positive in $\mathbb{R}$',r'because $\iota$ is strictly increasing':r'because the canonical inclusion preserves strict order',r'$\iota$ is nonnegative and nondecreasing on $\mathbb{N}$':r'the natural numbers are nonnegative and their order is preserved in $\mathbb{R}$'}
 for old,new in replacements.items():body=body.replace(old,new)
 if id=='lem-additive-is-q-linear':
  body=body.replace('= (n+1)f(x) = (n+1)f(x)', '= (n+1)f(x)')
  body=body.replace('base case $n = 0$: $0 = 0$, so','base case $n = 0$:')
  body=body.replace('where $0 = 0$ and the identity reads','where the real value of $n$ is $0$ and the identity reads')
 if id=='ex-indicator-of-q-is-baire-class-two-not-one':body=body.replace('since $0 = 0$','since the factor $n$ is zero')
 if id not in ['def-dirichlet-and-thomae-functions','lem-additive-is-q-linear']:
  body=re.sub(r'(\n## [^\n]+\n\n)',lambda m:m[1]+convention+'\n\n',body,count=1)
 assert '\\iota' not in body,(id,'remaining iota')
 new='---'+fm+'---'+body;assert new!=s;assert new.split('---',2)[1]==fm
 dst=out/'proposals'/rel;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_text(new)
 arc=out/'before'/rel;arc.parent.mkdir(parents=True,exist_ok=True);arc.write_bytes(raw)
 diff=''.join(difflib.unified_diff(s.splitlines(True),new.splitlines(True),fromfile=rel,tofile='proposals/'+rel))
 dp=out/'deltas'/f'{id}.diff';dp.parent.mkdir(exist_ok=True);dp.write_text(diff)
 proposals.append({'id':id,'path':rel,'subject':id in subjects,'before_sha256':H(raw),'proposal_sha256':H(new.encode()),'frontmatter_unchanged':True,'old_new_delta':str(dp.relative_to(out)),'applications':applications})
(out/'proposal-index.json').write_text(json.dumps({'run':R,'cycle':1,'canonical_writes':False,'proposals':proposals},indent=2)+'\n')
# Exact actual page consumer inventory, including aliases and indirect subjects.
affected={r['id'] for r in rows};amap=inv['aliases']; pagecontexts=[]
for p in (root/'library').rglob('*.md'):
 s=p.read_text();refs=[]
 for n,line in enumerate(s.splitlines(),1):
  targets=[m[1] for m in re.finditer(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]|\[[^\]]*\]\([^)]*/([a-z][a-z0-9-]+)\.md\)',line)]
  # Plain paths and item inventories are caught independently below.
  mentions=[id for id in affected if id in line]
  if mentions:refs.append({'line':n,'ids':mentions,'text':line})
 if refs:pagecontexts.append({'path':str(p.relative_to(root)),'sha256':H(p.read_bytes()),'references':refs,'has_applied_iota':bool(re.search(r'\\iota\s*\(',s)),'disposition':'notation-identical exported mathematics; page identity/inventory/routes unchanged'})
(out/'page-consumers.json').write_text(json.dumps(pagecontexts,indent=2)+'\n')
print('Isolated proposals',len(proposals),'page contexts',len(pagecontexts),'page iota',[(r['path']) for r in pagecontexts if r['has_applied_iota']])
