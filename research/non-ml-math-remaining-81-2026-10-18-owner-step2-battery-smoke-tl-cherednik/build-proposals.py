import json,hashlib,pathlib
base=pathlib.Path('research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-smoke-tl-cherednik')
a=json.load(open('research/non-ml-math-remaining-81-2026-10-18-owner-step2-first-battery-failures/finite-smoke-assignment-tl_cherednik.json'))
# Exact complete source sentences/formulas, not reconstructed mathematical paraphrases.
excerpts=[
 r'By [F2] the bracket-word set is finite of size $C_n$.',
 r'The set $\mathcal N_n$ is in bijection with Dyck paths of semilength $n$; consequently it has $C_n$ elements and spans $P_n(R,\delta)$.',
 r'$$\begin{array}{c|ccccc}\cdot&1&a&b&ab&ba\\ \hline 1&1&a&b&ab&ba\\ a&a&\delta a&ab&\delta ab&a\\ b&b&ba&\delta b&b&\delta ba\\ ab&ab&a&\delta ab&ab&\delta a\\ ba&ba&\delta ba&b&\delta b&ba\end{array}$$',
 r'$$u_1u_2u_1=u_1,\qquad u_2u_1u_2=u_2.$$',
 r'By [F2], $d_1^2=\delta d_1=0$.',
 r'At $n=t=0$ the form is the unit form on the empty link state.',
 r'But $W_{2,0}=kx$ is itself a nonzero simple module by step 2.1.',
 r'$$[\phi_{3,1}]_{(a,b)}=\begin{pmatrix}\delta&1\\1&\delta\end{pmatrix}.$$',
 r'At $c=1/2$, this is $n x^{n-1}$ for even $n$ and $(n-1)x^{n-1}$ for odd $n$.',
 r'Directly, $(d/dx)(xf)-x(d/dx)f=f$ for every polynomial $f$, verifying the Weyl relation in this representation.',
 r'$$x f=xf,\qquad (w f)(z)=f(w^{-1}z),\qquad y f=\partial_y f-\sum_{s\in S}c_s\frac{\alpha_s(y)}{\alpha_s}(1-s)f.$$',
 r'This uses a generating quotient, rather than the invalid inference from exactness and relations on composition factors.',
 r'This proves an annihilating polynomial, including resonant parameters; no diagonalizability at such parameters is inferred from a characteristic polynomial.',
 r'replace $y x$ by $x y+\kappa(y,x)$;'
]
selectors=[{}, {}, {}, {}, {}, {}, {}, {}, {'c':0.5,'max_degree':3},{'max_degree':2},{'c':0.5,'max_degree':2},{'mu':2},{'e':2,'c':0.5},{'max_degree':2}]
rows=[]
for i,row in enumerate(a['rows']):
 text=pathlib.Path(row['source']).read_text()
 assert excerpts[i] in text,(i,excerpts[i])
 old=json.load(open(row['contract']))['contracts'][row['id']]['finite_smoke']
 assert old==row['finite_smoke'],row['id']
 new=json.loads(json.dumps(old));new[0]['asserts']=excerpts[i];new[0].update(selectors[i])
 if i==11:new[0]['checked_in']='Proof step 2.1 (the explicit matrix is an independent bounded witness to its final logical warning).'
 if i==12:new[0]['checked_in']='Proof step 1.1; parameter roots computed from the cited Hecke-algebra definition.'
 rows.append({'id':row['id'],'contract':row['contract'],'source':row['source'],'guard':{'finite_smoke':old,'source_raw_sha256':hashlib.sha256(text.encode()).hexdigest()},'replacement':{'finite_smoke':new},'reason':'Authored assertion was a paraphrase absent from current source; bind an authentic excerpt and explicit bounded fixture selectors where absent.'})
(base/'row-patches.json').write_text(json.dumps({'version':1,'run':a['run'],'scope':'finite_smoke rows only; compare guard then replace exact per-item projection','patches':rows},indent=2)+'\n')
