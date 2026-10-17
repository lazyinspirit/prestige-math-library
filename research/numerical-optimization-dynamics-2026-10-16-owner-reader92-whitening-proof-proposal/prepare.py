from pathlib import Path
import json,re,shutil,difflib
R='numerical-optimization-dynamics-2026-10-16';b=Path('research')/(R+'-owner-reader92-whitening-proof-proposal');id='prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil';p=Path('items')/(id+'.md');before=p.read_text();after=before
newdeps=['prop-adjoint-algebra','thm-matrix-of-the-adjoint-is-the-conjugate-transpose'];after=after.replace('  - def-matrix-product-and-identity-matrix\n','  - def-matrix-product-and-identity-matrix\n'+''.join('  - '+v+'\n' for v in newdeps),1)
old='[F2] Matrix multiplication, conjugate transpose, and inverse use the\nassociative matrix-product convention\n([[def-matrix-product-and-identity-matrix]]).'
new=r'''[F2] Matrix products and identity matrices use the entrywise convention of [[def-matrix-product-and-identity-matrix]].

[F3] For compatible finite-dimensional maps, $(AB)^*=B^*A^*$, $A^{**}=A$, and $I^*=I$ ([[prop-adjoint-algebra]]). In the standard orthonormal coordinate bases these adjoints are the conjugate-transpose matrices ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]).'''
assert old in after;after=after.replace(old,new,1)
old='1.1 The matrix $\\widetilde H=L^{-1}HL^{-*}$ is Hermitian, since'
new=r'''1.1 Taking adjoints of $L^{-1}L=I$ and $LL^{-1}=I$ by [F3] gives $L^*(L^{-1})^*=I$ and $(L^{-1})^*L^*=I$. Hence $L^*$ is invertible with inverse $(L^{-1})^*=L^{-*}$; taking adjoints again gives $(L^{-*})^*=L^{-1}$. The matrix $\widetilde H=L^{-1}HL^{-*}$ is Hermitian, since'''
assert old in after;after=after.replace(old,new,1);after=after.replace('[F1, F2, given, algebra]','[F1, F2, F3, given, algebra]',1);after=after.replace('[F1, F2, step 1.1, given, algebra]','[F1, F2, F3, step 1.1, given, algebra]',1)
after=after.replace('Since $c\\ne0$ iff $y\\ne0$, division proves equality of the two Rayleigh quotients. [F1, F2, step 1.1, algebra]','Since $c\\ne0$ iff $y\\ne0$, and $S>0$ makes $c^*Sc>0$, both equal denominators are positive. Division proves equality of the two Rayleigh quotients. [F1, F2, F3, step 1.1, algebra]',1)
sec=lambda s:re.search(r'^## Statement\n(.*?)(?=^## |\Z)',s,re.M|re.S).group(1)
assert sec(before)==sec(after)
for folder,text in [('before',before),('proposed',after)]:
 d=b/folder/p;d.parent.mkdir(parents=True,exist_ok=True);d.write_text(text)
(b/'whitening.diff').write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='before/'+str(p),tofile='proposed/'+str(p))))
context=['prop-adjoint-algebra','thm-matrix-of-the-adjoint-is-the-conjugate-transpose','def-matrix-product-and-identity-matrix','def-cholesky-factorisation-with-positive-diagonal','thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique','def-invertible-matrix-and-general-linear-group','def-finite-basis-projector-energy-model','ex-overlap-whitening-can-amplify-coefficient-errors','ex-nearly-dependent-overlap-matrix-whitening-and-conditioning']
for v in context:
 d=b/'context/items'/(v+'.md');d.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile('items/'+v+'.md',d)
for name in [R+'-reader-findings-92.json',R+'-reader-92.md',R+'-alpha-batch-57-3a.md',R+'-alpha-batch-57-3a-decisions.json']:
 p=Path('research')/name;d=b/'context'/p;d.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,d)
p=Path('research')/(R+'-batch-57.proof-contracts.json');x=json.load(open(p));d=b/'before'/p;d.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,d)
quotes=[]
for v in newdeps:
 text=Path('items/'+v+'.md').read_text();quote=re.search(r'^## Statement\n(.*?)(?=^## |\Z)',text,re.M|re.S).group(1).strip();quotes.append({'fact':'F3','source':v,'source_section':'Statement','quote':quote,'uses':['1.1','2.1','3.1']})
(b/'metadata-proposal.json').write_text(json.dumps({'canonical_writes':False,'scope_batch':57,'source':id,'new_deps':newdeps,'preserve_current_deps':True,'new_citations':quotes,'proof_projection':[{'step':'1.1','action':'Project final claim containing explicit inverse-adjoint derivation; add F3 to inputs.'},{'step':'2.1','action':'Claim unchanged; add F3 to inputs.'},{'step':'3.1','action':'Project explicit positive denominator clause; add F3 to inputs.'}],'facts_projection':{key:re.search(r'^\['+key+r'\] (.*?)(?=\n\n|\Z)',after,re.M|re.S).group(1) for key in ['F2','F3']},'foreign92':'NO92 source/metadata writes; supplier public Statement quotes are byte-identical and do not need replacement.'},indent=2)+'\n')
print({'source':id,'Statement_changed':False,'new_deps':newdeps,'canonical_writes':[]})
