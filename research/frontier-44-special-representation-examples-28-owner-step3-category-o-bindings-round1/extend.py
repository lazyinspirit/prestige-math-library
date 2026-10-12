import pathlib,json,hashlib,datetime,yaml
r='frontier-44-special-representation-examples-28';o=pathlib.Path(__file__).parent;e=json.load(open(o/'proposal.json'));existing={g['path'] for g in e['guards']}
ids=['thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials','thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials','ex-translation-between-two-regular-integral-blocks','thm-parabolic-kazhdan-lusztig-character-formula','ex-translation-to-a-singular-wall-in-type-a-two','ex-a-small-parabolic-category-o-character-formula']
for id in ids:
 for p in [pathlib.Path('items')/(id+'.md'),pathlib.Path('research')/(r+'-step3b-review-'+id+'.json')]:
  if not p.exists() or str(p) in existing:continue
  q=o/'before'/p.name;assert not q.exists();q.write_bytes(p.read_bytes());e['guards'].append({'path':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'before':str(q)})
mp=pathlib.Path('research')/(r+'-batch-15.pages.json');q=o/'before'/mp.name;assert not q.exists();q.write_bytes(mp.read_bytes());e['guards'].append({'path':str(mp),'sha256':hashlib.sha256(mp.read_bytes()).hexdigest(),'before':str(q)})
texts={id:(pathlib.Path('items')/(id+'.md')).read_text() for id in ids}
def replacepart(t,begin,end,replacement):
 a=t.index(begin);b=t.index(end,a);return t[:a]+replacement+t[b:]
id=ids[0];t=texts[id]
a=t.index('If the same weights');b=t.index('The highest-weight category theorem',a)
stmt=r'''For the same highest weights in the antidominant base
$\lambda_{\mathrm{anti}}=w_0\cdot\lambda$, the actual longest-left label is
$z=yw_0$, since $y\cdot\lambda=z\cdot\lambda_{\mathrm{anti}}$.
Its shortest-left encoding is $a=\mathrm{lf}(y):=w_Jyw_0\in{}^JW$, so the
weight in that encoding is $(w_Ja)\cdot\lambda_{\mathrm{anti}}$, not
$a\cdot\lambda_{\mathrm{anti}}$. With $b=\mathrm{lf}(x)$, the reindexed matrix is
$$\widetilde N_{a,b}:=n_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}(1)=n_{w_Jaw_0,\,w_Jbw_0}(1).$$
It is the same multiplicity matrix with both indices permuted and has reversed
support in the transported order. It is not in general $n_{a,b}(1)$.
Every label retains its explicit dot-baseweight.
'''
t=t[:a]+stmt+t[b:]
a=t.index('1.2 **The dominant labels.**');b=t.index('\n\n2.1',a)
step=r'''1.2 **The dominant labels.** Put $A=\lambda+\rho$, strictly dominant and integral. The weight $y\cdot\lambda$ is $\mathfrak p_J$-dominant iff $\langle yA,\alpha_j^\vee\rangle-1\ge0$ for every $j\in J$. The integer $\langle A,y^{-1}\alpha_j^\vee\rangle$ is positive exactly when $y^{-1}\alpha_j$ is a positive root: strict dominance makes positive-root coroot pairings positive integers and negative-root pairings negative. Thus the condition is $y^{-1}\alpha_j>0$ for all $j\in J$, equivalently no LEFT descent $s_jy<y$. These are precisely the shortest-left representatives ${}^JW$ in the coset-minimum convention of [F4]; no inversion of the weight label is performed. [F4, algebra]'''
t=t[:a]+step+t[b:];a=t.index('3.2 **Native longest-left labels.**');b=t.index('\n\n4.1',a)
step=r'''3.2 **Native longest-left labels.** Let $\lambda_{\mathrm{anti}}=w_0\cdot\lambda$. Dot-action composition gives $y\cdot\lambda=(yw_0)\cdot\lambda_{\mathrm{anti}}$ and $x\cdot\lambda=(xw_0)\cdot\lambda_{\mathrm{anti}}$. If $y$ has no left descent in $J$, each $y^{-1}\alpha_j$ is positive, so $(yw_0)^{-1}\alpha_j=w_0y^{-1}\alpha_j$ is negative; hence $z=yw_0$ is the longest representative in its left $W_J$-coset. Its shortest-left encoding is $a=w_Jz=w_Jyw_0$, with inverse $y=w_Jaw_0$; similarly $b=w_Jxw_0$ has inverse $x=w_Jbw_0$. Consequently the same multiplicity of step 2.1 is $[\Delta^J((w_Ja)\cdot\lambda_{\mathrm{anti}}):L((w_Jb)\cdot\lambda_{\mathrm{anti}})]=n_{w_Jaw_0,w_Jbw_0}(1)=\widetilde N_{a,b}$. This is an honest permutation of rows and columns, with support transported from $w_Jaw_0\le w_Jbw_0$, not a claim that $\widetilde N_{a,b}=n_{a,b}(1)$. Choosing the transported reversed order reads the same matrix as lower triangular. [F1, F4, step 2.1, algebra]'''
t=t[:a]+step+t[b:];texts[id]=t
id=ids[1];t=texts[id];a=t.index('[F4] Ordinary Kazhdan');b=t.index('\n\n[F5]',a)
f4=r'''[F4] Ordinary Kazhdan--Lusztig polynomial data: $P_{a,b}(1)$ is defined by the classical normalization, and simultaneous inversion gives $P_{a,b}=P_{a^{-1},b^{-1}}$ ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]], [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]). The latter supplier also gives uniqueness of the bar-fixed triangular basis; the conjugation-by-$w_0$ symmetry needed below is proved from that uniqueness in step 1.3.'''
t=t[:a]+f4+t[b:];a=t.index('1.3 **The spherical dictionary.**');b=t.index('\n\n2.1',a)
step=r'''1.3 **The spherical dictionary.** Conjugation by $w_0$ permutes the type-$A$ simple reflections, so the assignment $H_z\mapsto H_{w_0zw_0}$, $v\mapsto v$ is an algebra automorphism: it preserves the quadratic and braid presentations, the bar, length and Bruhat order. It sends a bar-fixed triangular element with top $H_b$ to one with top $H_{w_0bw_0}$; uniqueness in [F4] therefore gives $p_{a,b}=p_{w_0aw_0,w_0bw_0}$. Now set $k(w)=w_0^Jw^{-1}w_0$. Inversion sends $W^J$ to ${}^JW$ [F5]; multiplying a shortest-left representative on the right by $w_0$ makes it longest-left, and multiplication on the left by $w_0^J$ makes it shortest-left again, so $k(w)\in{}^JW$. The spherical reduction [F5] gives $m_{k(y),k(w)}=p_{w_0^Jk(y),w_0^Jk(w)}=p_{y^{-1}w_0,w^{-1}w_0}=p_{w_0y,w_0w}=p_{yw_0,ww_0}$, using simultaneous inversion from [F4] and the conjugation symmetry just proved. Evaluating at $v=1$ and applying the classical normalization yields $m_{k(y),k(w)}(1)=P_{yw_0,ww_0}(1)$. [F4, F5, algebra]'''
t=t[:a]+step+t[b:];texts[id]=t
id=ids[2];t=texts[id]
old='it is nonsplit because [F8] gives $F(P(-2))\\cong P(-3)$ and a splitting of the image sequence would produce a splitting of the original one, whose middle term $P(-2)$ is the indecomposable cover of [F5] and step 4.1.'
new='it is nonsplit because an exact inverse equivalence $G$ would carry a splitting of its image back to a splitting of the original sequence. The original middle module is $M(0)=P(0)$, not $P(-2)$; it is indecomposable by step 1.2, and its submodule $M(-2)$ and quotient $L(0)$ are both nonzero by steps 2.1 and 3.1, so such a splitting is impossible.'
assert old in t;t=t.replace(old,new);t=t.replace('[F1, F5, F8, F9, step 4.1]\n\n6.1','[F1, F5, F8, F9, step 1.2, step 2.1, step 3.1, step 4.1]\n\n6.1');texts[id]=t
id=ids[3];t=texts[id]
a=t.index('In the equivalent antidominant longest-left');b=t.index('This is the ungraded',a)
new=r'''In the antidominant base $\lambda_{\mathrm{anti}}=w_0\cdot\lambda$, set
$a=\mathrm{lf}(y)=w_Jyw_0$ and encode the same weight as
$(w_Ja)\cdot\lambda_{\mathrm{anti}}$. The reindexed matrix is
$\widetilde N_{a,b}=N_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}$
and its inverse is reindexed by the same permutation; thus the same formula
has reversed support in the transported order. This does not replace the
entries by $n_{a,b}(1)$.
'''
t=t[:a]+new+t[b:];a=t.index('3.1 **Reindexing and conclusion.**');b=t.index('\n',a)
new=r'''3.1 **Reindexing and conclusion.** Use $a=\mathrm{lf}(y)=w_Jyw_0$ as the shortest-left encoding of the actual longest-left label $yw_0$ in the antidominant base, so the same weight is $(w_Ja)\cdot\lambda_{\mathrm{anti}}$. The corrected dictionary in [[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]] gives $\widetilde N_{a,b}=N_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}$. Reindexing both coordinates is conjugation by a permutation matrix, hence $\widetilde N^{-1}_{a,b}=N^{-1}_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}$; therefore $\operatorname{ch}L((w_Ja)\cdot\lambda_{\mathrm{anti}})=\sum_b\widetilde N^{-1}_{a,b}\operatorname{ch}\Delta^J((w_Jb)\cdot\lambda_{\mathrm{anti}})$, with the original support transported by $\mathrm{lf}$. Choosing the transported reversed order makes this matrix lower triangular. This preserves every character formula and constructs no Koszul or Ext grading. [F1, step 1.2, step 2.1, algebra] ∎'''
t=t[:a]+new+t[b:];texts[id]=t
id=ids[4];t=texts[id]
a=t.index('dually\n');b=t.index('The surviving\n',a)
new=r'''dually
$(P(\mu):\Delta(y\cdot\mu))=1$ for all three $y$,
$(P(s_2\cdot\mu):\Delta(s_2\cdot\mu))=(P(s_2\cdot\mu):\Delta(s_1s_2\cdot\mu))=1$,
with its $\Delta(\mu)$ multiplicity zero, and
$P(s_1s_2\cdot\mu)=\Delta(s_1s_2\cdot\mu)$ has the single top-label standard.
'''
t=t[:a]+new+t[b:]
t=t.replace('gives $1$ exactly when $y\\le w$ in $W^J','gives $1$ exactly when $y\\ge w$ in $W^J')
a=t.index('2.2 **The sl_3 matrices.**');b=t.index('\n\n3.1',a)
new=r'''2.2 **The sl_3 matrices.** Right multiplication by the longest element reverses Bruhat order, so $yw_0\le ww_0$ iff $y\ge w$. In the chain $W^J=(1,s_2,s_1s_2)$, the formula [F3] therefore gives the displayed LOWER unitriangular matrix $A$: its row $y$, column $w$ is one exactly when $y\ge w$. BGG [F4] gives the same entries for $(P(w\cdot\mu):\Delta(y\cdot\mu))$. Thus the column at $w=1$ consists of three ones, the column at $w=s_2$ has zeros at $y=1$ and ones at $y=s_2,s_1s_2$, and the column at $w=s_1s_2$ has only the diagonal one. These are precisely the corrected projective flags displayed above; reading rows gives the unchanged simple composition factors of the three Vermas. [F3, F4, algebra]'''
t=t[:a]+new+t[b:];texts[id]=t
id=ids[5];t=texts[id];t=t.replace('exactly for $y\\le w$ and','exactly for $y\\ge w$ and').replace('exactly when $y\\le w$ and','exactly when $y\\ge w$ and');texts[id]=t
for id,t in texts.items(): (o/'proposed/items'/(id+'.md')).write_text(t)
# Mirror every changed interface/strategy in its owning complete manifest, preserving all other objects.
ms={14:json.load(open(o/'proposed/batch-14.pages.json')),15:json.load(open(mp))}
for no,m in ms.items():
 for pg in m:
  for x in pg['items']:
   if x['id'] not in texts:continue
   t=texts[x['id']];body=t.split('---',2)[2];heading='## Statement' if x['kind']=='theorem' else '## Example';a=body.index(heading)+len(heading);end=body.find('\n## ',a);x['statement']=body[a:end if end!=-1 else None].strip()
   if x['id']==ids[0]:x['strategy']='Retain the full finite-Levi Weyl/PBW signed character proof and ordinary antispherical multiplicities. Correct dominant label criterion by pairing lambda+rho with y^-1 alpha_j: it is no LEFT J descent. Actual antidominant longest-left label is z=yw0; shortest-left encoding a=w_Jz carries weight (w_Ja) dot lambda_anti. Reindex matrix by Ntilde_ab=n_{w_Jaw0,w_Jbw0}(1), not n_ab. All regular/general highest-weight and no-Koszul boundaries preserved.'
   elif x['id']==ids[1]:x['strategy']=x['strategy']+' Conjugation by w0 preserves the Hecke presentation, bar and Bruhat order; prove its KL-coefficient symmetry locally by uniqueness, then use inverse symmetry to justify the spherical dictionary k(w)=w_Jw^-1w0. Reconcile actual regular dominant-base suppliers before closure.'
   elif x['id']==ids[2]:x['strategy']=x['strategy']+' In the transported nonsplit Verma sequence the original middle module is M(0)=P(0), not P(-2); an exact inverse equivalence carries a hypothetical splitting back, contradicting PBW indecomposability of M(0).'
   elif x['id']==ids[3]:x['strategy']='Invert the unchanged ordinary antispherical multiplicity matrix N in its dominant shortest-left labels. Under shortest-left encoding a=lf(y) of longest-left anti-base label yw0, use weight (w_Ja) dot lambda_anti and conjugate N and N^-1 by the same permutation matrix. Do not substitute n_ab for reindexed entries. Retain signed-chain inverse and no-Koszul conclusions.'
   elif x['id']==ids[4]:x['strategy']='Retain exact sl2 wall translation and sl3 LOWER composition matrix. Since yw0<=ww0 iff y>=w, read projective flags from columns of that lower matrix: P(mu) has all3 standards, middle projective has last2, highest projective has only itself. Preserve all simple factor/wall survivor computations.'
   elif x['id']==ids[5]:x['strategy']=x['strategy']+' The singular lower matrix has entry one exactly for y>=w, not y<=w; preserve both displayed matrices and character identities.'
 (o/f'proposed/batch-{no}.pages.json').write_text(json.dumps(m,indent=2)+'\n')
e['changed_ids']+=ids;e['owned_flag_ids']=[x['target'] for x in json.load(open('research/'+r+'-owner-current-step3-flag-assignments.json'))['category_o']];e['unchanged_review_subjects']=['lem-projective-verma-multiplicities-equal-soergel-standard-ranks','rem-the-full-ext-version-requires-the-koszul-grading-of-category-o'];e['supplier_item_changes']=['def-regular-integral-dot-orbit-labelling-convention','thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials','thm-parabolic-kazhdan-lusztig-character-formula','ex-translation-to-a-singular-wall-in-type-a-two'];e['full_theorem_statement_unchanged']=False;e['preserved_core_KL_at_one_theorem_statement']=True;e['extension_at']=datetime.datetime.now(datetime.timezone.utc).isoformat();e['proposed']=[{'path':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in (o/'proposed').rglob('*') if p.is_file()];(o/'proposal.json').write_text(json.dumps(e,indent=2)+'\n');print('same first pass extended: 8 carriers proposed; complete native14/15 successors; authentic new preimages captured')
