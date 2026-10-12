from pathlib import Path
import json,hashlib,datetime
root=Path('research/frontier-44-special-representation-examples-28-owner-crash-recovery-20261010T1736/levelone-current-recovery/finite-basis-constructor')
ids=['def-finite-q-wedge-space-and-normal-ordering-relations','thm-normally-ordered-q-wedges-form-a-basis']
guards=[]
for id in ids:
 b=Path('items/'+id+'.md').read_bytes();(root/'before'/f'{id}.md').write_bytes(b)
 guards.append({'id':id,'canonical_path':f'items/{id}.md','before_path':str(root/'before'/f'{id}.md'),'before_raw_sha256':hashlib.sha256(b).hexdigest()})
s=(root/'before'/f'{ids[0]}.md').read_text();s=s[:s.index('## Facts & Assumptions')]+r'''## Facts & Assumptions

**Given:** The quotient and charts in the Definition, with the stated affine Hecke Laurent action.

[F1] The corrected contract of [[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]] gives $\ker A_N=\sum_i\ker(S_i+1)$ and $A_NS_i=QA_N$, where $Q=q^2$; therefore each $S_i$ induces the scalar $Q$ on $W_N$. The kernel is stable under the quantum group action.

[F2] The residue operator and its exact Laurent extension are those of [[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]: $S(fw)=s(f)S(w)+(1-Q)Y_2(f-s(f))/(Y_1-Y_2)w$.

[F3] Each $u_m=Y^{p}v_j$ with $m=j-pe$, $1\le j\le e$, and $Y$ is invertible; the opposite energy is positive exactly for decreasing indices ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]]).

## Verification

**Proof technique:** calculate the actual Laurent two-factor kernel vectors and their symmetric-loop multiples, then use finite dominance followed by inversions for termination.

1.1 Symmetric Laurent multiplication preserves $\ker(S+1)$. If $g=s(g)$, [F2] gives $S(gx)=gS(x)$, since the divided difference of $g$ is zero; this applies also to negative common loop shifts $(Y_1Y_2)^r$. On a diagonal $d_j=v_j\otimes v_j$ one has $S(d_j)=-d_j$. For $j<k$, set $w=v_j\otimes v_k$ and $w'=v_k\otimes v_j$; substitution gives $S(w+q^{-1}w')=-(w+q^{-1}w')$. For $j>k$ the divided differences of $Y_1,Y_2$ give $S(Y_1w)=-qY_2w'$ and $S(Y_2w')=-qY_1w+(Q-1)Y_2w'$, so $Y_1w+q^{-1}Y_2w'$ is a $-1$ eigenvector. These calculations take place in the original Laurent tensor space. Their images vanish in every adjacent pair of slots by [F1]. [F1, F2, F3, given, algebra]

1.2 Diagonal and equal-residue relations. A repeated-index tensor is $(Y_1Y_2)^pd_j$ and hence vanishes. If $l<m$ have the same residue, write $l=j-(r+a)e$, $m=j-re$ with $a>0$. The symmetric multiple $(Y_1Y_2)^r(Y_1^a+Y_2^a)d_j$ is in $\ker(S+1)$ by step 1.1; its image is $u_l\wedge u_m+u_m\wedge u_l$, giving the equal-residue relation. No individual nonsymmetric loop multiplier of a kernel vector has been assumed to preserve the kernel. [step 1.1, F1, F3, algebra]

2.1 Distinct residues without wrapping. Write $l=j-pe$, $m=k-re$ with $j<k$. Then $m-l=(p-r)e+(k-j)=ae+b$, so $p=r+a$ and $b=k-j$. If $a=0$, the symmetric common shift $(Y_1Y_2)^r(w+q^{-1}w')$ gives $u_l\wedge u_m=-q^{-1}u_m\wedge u_l$. If $a>0$, multiply the same kernel vector by the symmetric Laurent polynomial $(Y_1Y_2)^r(Y_1^a+Y_2^a)$. The four resulting images are, with coefficients $1,q^{-1},1,q^{-1}$, respectively $(l,m)$, $(m-ae,l+ae)$, $(l+ae,m-ae)$, $(m,l)$. Their sum is zero, which is precisely the fourth displayed relation. [step 1.1, F1, F2, F3, algebra]

2.2 Distinct residues across the representative boundary. If $j>k$, the same expressions have $p-r=a+1$ and $b=e+k-j$. The wrapped base kernel vector of step 1.1 is $h=Y_1w+q^{-1}Y_2w'$. For $a=0$, its common shift $(Y_1Y_2)^rh$ gives the third displayed relation. For $a>0$, its symmetric multiple $(Y_1Y_2)^r(Y_1^a+Y_2^a)h$ has images $(l,m)$, $(m,l)$, $(l+ae,m-ae)$ and $(m-ae,l+ae)$ with coefficients $1,q^{-1},1,q^{-1}$. Thus it gives the same fourth relation in this case also. Together with step 1.2 this exhausts all residue and Laurent-exponent configurations. [step 1.1, step 1.2, step 2.1, F1, F2, F3, algebra]

3.1 Pair recursion and whole-word termination. In the mixed case the correction indices are $m-b$ and $l+b$, strictly between $l$ and $m$, with gap $ae-b<ae+b$; the first correction pair is already decreasing, and the reverse pair can be rewritten recursively. For a word of length $N$, fix its original interval $[L,U]$ and total sum $T$. Every branch stays among the finitely many integer tuples in $[L,U]^N$ of sum $T$. Sort a tuple decreasingly and list its first $N-1$ prefix sums. Balancing a pair of extremes strictly decreases this list in lexicographic order: the sums of the largest $r$ coordinates cannot increase, and at least one decreases since the sorted multisets differ. A leading adjacent swap preserves this list and decreases by one the number of pairs of positions whose indices are increasing. Hence the lexicographic pair consisting of prefix-sum list and inversion count strictly decreases along each nonzero branch. Its range is finite, so rewriting terminates. Equal adjacent indices vanish; a terminal nonzero word is strictly decreasing. [step 1.2, step 2.1, step 2.2, given, algebra]

4.1 Charts and energy. All coefficients in the displayed relations belong to $A=\mathbb Z[q,q^{-1}]$. Step 3.1 therefore expresses every Laurent tensor-lattice image in the $A$-span of the normal wedges; conversely each normal wedge is such an image. These two lattices equal $W_A$. Its positive chart is the separately defined $\mathbb Z[q]$-span $W_0$, and $q$ is a unit on $W_A$, so $W_A/qW_A=0$. The energy criterion is exactly [F3] and concerns the opposite channel. These computations establish every displayed relation and chart assertion in the Definition, conditional on the corrected kernel contract in [F1]. [step 3.1, F1, F3, given, algebra] ∎

## Remarks

This guarded successor uses the corrected kernel contract in [F1]; it is not current acceptance of the still defective canonical supplier. The parent owns supplier integration and all actual consumer reviews. No claim that $W_0$ is stable under normalized string operators is needed for this Definition.
''';(root/'proposals'/f'{ids[0]}.md').write_text(s)
s=(root/'before'/f'{ids[1]}.md').read_text();s=s[:s.index('## Facts & Assumptions')]+r'''## Facts & Assumptions

**Given:** The finite wedge quotient, all normally ordered wedges and the charts $W_A,W_0$ of the Statement.

[F1] The complete three-case straightening follows from the original Laurent divided-difference action and terminates with Laurent coefficients and fixed ambient interval and total sum ([[def-finite-q-wedge-space-and-normal-ordering-relations]]).

[F2] The corrected contract of [[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]] gives $A_N^2=C_NA_N$, $C_N\ne0$, $\ker A_N=\sum_i\ker(S_i+1)$ and the quotient identification $W_N\cong\operatorname{im}A_N$. On the quotient $S_i=Q=q^2$.

[F3] The actual residue matrix and divided difference specialize at $q=1$ to $S_i=-P_i$, with $P_i$ the factor flip; the divided-difference term vanishes. Consequently $A_N$ specializes to $\sum_w(-1)^{\ell(w)}P_w$, the signed ordinary antisymmetrizer.

[F4] The vector rules are $E_iu_m=\delta_{m\equiv i+1}u_{m-1}$, $F_iu_m=\delta_{m\equiv i}u_{m+1}$, and $K_iu_m=q^{\delta_{m\equiv i}-\delta_{m\equiv i+1}}u_m$; the fixed coproduct is $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$ and $\Delta F_i=F_i\otimes1+K_i\otimes F_i$ ([[lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis]]).

## Proof

**Proof technique:** the approved finite dominance and signed specialization proof establishes the field and Laurent bases; the approved rank-one cube calculation then tests the precise positive-chart claim.

1.1 Spanning and termination. For any finite tensor combination choose a finite interval containing its indices. In each word the total sum stays fixed under [F1]. Among the finite set of words in this interval of that sum, order first the sorted decreasing prefix-sum list and then the increasing-pair inversion count. Each secondary balanced pair strictly decreases the former, while a leading adjacent swap decreases the latter and leaves the former fixed. The multiset can change in a secondary branch. Thus every branch terminates, either at zero from repeated adjacent indices or at a strictly decreasing tuple. The relations have coefficients in $A$, proving field spanning and Laurent spanning. [F1, given, algebra]

2.1 Field independence. For finitely many distinct normal tuples $I_k$, let $t_{I_k}$ be their raw tensors. Each $A_Nt_{I_k}$ is a finite Laurent-polynomial combination of raw tensors, regular at $q=1$. Select the finite union of all their supports as rows. At $q=1$, [F3] gives signed antisymmetrizations. The strictly decreasing raw row $t_{I_j}$ occurs with coefficient $1$ in column $j$ and coefficient $0$ in the other columns: distinct decreasing tuples have distinct index multisets. Therefore the square minor on these rows specializes to the identity determinant $1$ and is nonzero in $\mathbb Q(q)$. If $\sum_k c_k u_{I_k}=0$, [F2] gives $\sum_k c_k A_Nt_{I_k}=0$, so that nonzero minor forces every $c_k=0$. This proves field independence and, with step 1.1, a field basis for every $N$. [F2, F3, step 1.1, given, algebra]

2.2 Laurent freeness. Step 1.1 supplies Laurent spanning. Any finite $A$-linear relation is also a field-linear relation and is zero coefficientwise by step 2.1. Thus the map from the direct sum of one copy of $A$ for each normal tuple to $W_A$ is both surjective and injective, proving precisely the claimed Laurent basis. No implication from torsionfreeness over a nonprincipal ring is used. The separate positive span is free over $\mathbb Z[q]$ by the same independence. [step 1.1, step 2.1, given, algebra]

3.1 The exact rank-one cube. Fix a color $i$. The integer pairs $(i+ke,i+ke+1)$ are disjoint for every $e\ge2$. An empty pair is inert; a doubly occupied pair is inert because applying $E_i$ or $F_i$ makes a repeated adjacent index, whose wedge is zero. Its net $K_i$-weight is zero. A singly occupied pair is a copy of the highest-weight-one rank-one module. Changing a free bit shifts an index by one and keeps the word decreasing; the only possible obstruction is an already occupied partner, the frozen double-pair case. Hence each block of fixed pair occupancies is, in decreasing pair order, exactly a tensor product of these free rank-one modules. More explicitly, $F_i$ on a free high bit has coefficient $q^{\sum_{s<t}\epsilon_s}$ and $E_i$ on a free low bit has coefficient $q^{-\sum_{s>t}\epsilon_s}$, where $\epsilon_s=1$ for a high bit and $-1$ for a low bit and the sums are over earlier or later free pairs. Frozen pairs contribute zero. Thus the approved tensor cube identification is an equality of module actions. [F1, F4, step 2.1, algebra]

3.2 The literal polynomial crystal claim fails on a two-bit block. Take $e=3$, $i=1$ and $N=2$, and put $h=u_4\wedge u_1$, $x=u_5\wedge u_1$, $y=u_4\wedge u_2$, $z=u_5\wedge u_2$. Step 3.1 gives $F_1h=x+qy$, $E_1x=q^{-1}h$, $E_1y=h$, $F_1x=q^{-1}z$, $F_1y=z$, and $F_1^{(2)}h=z$. Therefore $s=x-q^{-1}y$ is a highest-weight-zero vector and $x=(1+q^2)^{-1}F_1h+q^2(1+q^2)^{-1}s$ is its actual string decomposition. The normalized string operator sends $F_1h$ to $F_1^{(2)}h=z$ and sends $s$ to zero, so $\tilde f_1x=(1+q^2)^{-1}z$. The coefficient is not in $\mathbb Z[q]$, and step 2.1 excludes an alternative polynomial basis expression. Thus $W_0$ as literally defined in the preserved Statement is not stable under the normalized string operators. [step 2.1, step 3.1, F4, algebra]

4.1 Proven portion and obstruction. Steps 1.1-2.2 establish the entire field basis, Laurent basis and well-founded straightening claims, conditional on corrected suppliers [F1]-[F2]. Step 3.1 establishes the richest approved rank-one cube identification. Step 3.2 disproves the remaining assertion that the unlocalized $\mathbb Z[q]$-span is a crystal lattice; consequently it prevents a proof of the full unchanged Statement. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

This is a guarded incomplete successor with a byte-identical Statement, not an accepted theorem. The standard crystal ring is $\mathbb Q[q]_{(q)}$, over which $(1+q^2)^{-1}$ is allowed; the approved rank-one tensor rule concerns that local ring. Replacing the literal polynomial chart by its local-ring span would resolve the displayed obstruction and preserve the full cube scope, but requires parent classification and authorization of an interface correction. The separate $\mathbb Z[q]$-span can remain as a positive integral chart. The canonical kernel supplier remains defective until the parent integrates its corrected successor.
''';(root/'proposals'/f'{ids[1]}.md').write_text(s)
for g in guards:
 id=g['id'];a=(root/'before'/f'{id}.md').read_text();b=(root/'proposals'/f'{id}.md').read_text();heading='## Definition' if id.startswith('def-') else '## Statement'
 claim=lambda t:t[t.index(heading):t.index('## Facts & Assumptions')]
 assert claim(a)==claim(b)
 g.update(proposal_path=str(root/'proposals'/f'{id}.md'),proposal_raw_sha256=hashlib.sha256(b.encode()).hexdigest(),claim_byte_identical=True,claim_sha256=hashlib.sha256(claim(a).encode()).hexdigest())
(root/'guard-and-findings.json').write_text(json.dumps({'version':1,'run':'frontier-44-special-representation-examples-28','author':'/root/repair_step3_levelone_current_recovery/finite_basis_constructor','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'items':guards,'conditional_supplier_contract':'Corrected antisymmetrizer kernel and stable actual affine Hecke action; parent integration required','full_statement_accepted':False,'new_exact_gap':'The preserved theorem claims Z[q]-span stability under normalized string operators; e3 i1 N2 gives tilde f(u5 wedge u1)=u5 wedge u2/(1+q²)','no_canonical_or_native_writes':True},indent=2)+'\n')
