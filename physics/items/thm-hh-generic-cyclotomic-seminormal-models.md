---
id: thm-hh-generic-cyclotomic-seminormal-models
kind: theorem
title: "Generic seminormal models for cyclotomic Hecke algebras"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-cyclotomic-commuting-jucys-murphy-generators, def-hh-multipartitions-standard-tableaux-and-generic-contents]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3"
      url: "https://arxiv.org/pdf/1304.0906v3"
      locator: "§3.2, PDF pp. 15–18: axial distances, generic seminormal coefficients, and the six reorderings in the braid calculation; the multiplicative-content matrices and all boundary terms are verified here"
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38: multiplicative G(r,1,n) normalization; the generic module relations are proved here"
---

## Statement

Let $K=\mathbb Q(Q,u_1,\ldots,u_r)$, and let $\lambda$ be an $r$-multipartition of $n$. On the $K$-vector space $V^\lambda$ with basis $\{v_t:t\in\operatorname{Std}(\lambda)\}$, define

$$ L_jv_t=\operatorname{res}_t(j)v_t $$

and, for $1\le i<n$, with $a=\operatorname{res}_t(i)$ and $b=\operatorname{res}_t(i+1)$,

$$ T_iv_t=\frac{(Q-1)b}{b-a}v_t+\frac{Qb-a}{b-a}v_{s_it}, $$

where the second term is defined to be zero when swapping $i,i+1$ gives a nonstandard multitableau. Then these operators satisfy every quadratic, braid, affine, and cyclotomic relation in [[def-hh-multiplicative-cyclotomic-hecke-algebra]], so $V^\lambda$ is an $H_{r,n}\otimes_RK$-module. Each $V^\lambda$ is irreducible, and the modules for distinct multipartitions are pairwise nonisomorphic.

## Facts & Assumptions

**Given:** The generic field and contents, the standard multitableau sets, the commuting affine Jucys–Murphy generators, and the multiplicative presentation of [[def-hh-multiplicative-cyclotomic-hecke-algebra]].

[F1] Content sequences of standard multitableaux are distinct, addable contents are pairwise distinct, equal-content diagonal boxes have two required intermediate boxes, and standard multitableaux are linear extensions connected by adjacent swaps of incomparable boxes. ([[def-hh-multipartitions-standard-tableaux-and-generic-contents]])

[F2] $L_i=X_i$ commute, $T_iL_iT_i=QL_{i+1}$, $T_iL_j=L_jT_i$ for $j\notin\{i,i+1\}$, and $T_i^2=(Q-1)T_i+Q$. ([[lem-hh-cyclotomic-commuting-jucys-murphy-generators]], [[def-hh-multiplicative-cyclotomic-hecke-algebra]])

[F3] The parameters $Q,u_1,\ldots,u_r$ are algebraically independent over $\mathbb Q$, so two monomials $u_cQ^d$ and $u_{c'}Q^{d'}$ are equal in $K$ only when $c=c'$ and $d=d'$. ([[def-hh-multiplicative-cyclotomic-hecke-algebra]])

## Proof

**Given:** An $r$-multipartition $\lambda$, the vector space $V^\lambda$, its standard multitableaux, and the content operators in the statement.

1.1 For any standard tableau, consecutive labels cannot occupy equal-content boxes by [F1], so all denominators in the formula are nonzero. The same fact for the endpoints of three consecutive labels shows that each local triple has three pairwise distinct contents. The diagonal $L_j$ commute. Since entry $1$ must occupy the northwest box $(c,1,1)$ of one component, $L_1$ acts on every basis vector by one of $u_1,\ldots,u_r$; hence $p(L_1)=0$. [F1, F2, F3]

1.2 Fix two distinct contents $x,y$ in a two-state swap orbit and put $A_{xy}=(Q-1)y/(y-x)$ and $B_{xy}=(Qy-x)/(y-x)$. In the ordered basis $v_{xy},v_{yx}$, the full two-state matrix is $M=\begin{pmatrix}A_{xy}&B_{yx}\\B_{xy}&A_{yx}\end{pmatrix}$. Direct substitution gives $A_{xy}+A_{yx}=Q-1$ and $A_{xy}A_{yx}-B_{xy}B_{yx}=-Q$; the characteristic polynomial is therefore $z^2-(Q-1)z-Q$, and Cayley–Hamilton proves $M^2=(Q-1)M+QI$. If $D_i=\operatorname{diag}(x,y)$ and $D_{i+1}=\operatorname{diag}(y,x)$, direct multiplication also gives $MD_iM=QD_{i+1}$: the off-diagonal entries vanish by $xA_{xy}+yA_{yx}=0$, and the diagonal entries are $xA_{xy}^2+yB_{yx}B_{xy}=Qy$ and $xB_{xy}B_{yx}+yA_{yx}^2=Qx$. These are the quadratic and affine relations on a full two-state orbit. [F2, algebra]

2.1 For the braid relation take the contents of labels $i,i+1,i+2$ to be $a,b,c$. On the full six-state local space with states $abc,bac,acb,bca,cab,cba$, the coefficients of $T_iT_{i+1}T_i v_{abc}$ and $T_{i+1}T_iT_{i+1}v_{abc}$, in that order of states, are respectively $ (A_{ab}^2A_{bc}+B_{ab}A_{ac}B_{ba},\ B_{ab}(A_{ab}A_{bc}+A_{ac}A_{ba}),\ A_{ab}B_{bc}A_{ac},\ B_{ab}B_{ac}A_{bc},\ A_{ab}B_{bc}B_{ac},\ B_{ab}B_{ac}B_{bc}) $ and $ (A_{bc}^2A_{ab}+B_{bc}A_{ac}B_{cb},\ A_{bc}B_{ab}A_{ac},\ A_{ab}A_{bc}B_{bc}+B_{bc}A_{ac}A_{cb},\ A_{bc}B_{ab}B_{ac},\ B_{bc}B_{ac}A_{ab},\ B_{bc}B_{ac}B_{ab}). $ Here $A_{xy},B_{xy}$ are the explicit rational functions from step 1.2; the entries for the three middle reorderings are not discarded. Clearing the denominators, the two identities $A_{ab}A_{bc}+A_{ac}A_{ba}=A_{bc}A_{ac}$ and $A_{ab}A_{ac}=A_{ab}A_{bc}+A_{ac}A_{cb}$ have respective numerators proportional to $b(c-a)-a(c-b)-c(b-a)=0$ and $(c-b)-(c-a)+(b-a)=0$. They equate the $bac$ and $acb$ entries. For the $abc$ entry, use $B_{xy}B_{yx}=A_{xy}A_{yx}+Q$ to reduce the difference to $A_{ab}A_{bc}(A_{ab}-A_{bc})+A_{ac}(A_{ab}A_{ba}-A_{bc}A_{cb})$. The same two identities give $A_{ac}(A_{ab}A_{ba}-A_{bc}A_{cb})=-A_{ab}A_{bc}(A_{ab}-A_{bc})$, so this entry also vanishes. The other three entries agree by commutativity of scalar coefficients. Renaming $a,b,c$ proves the relation from every one of the six starting states. [F1, F3, algebra]

3.1 We now impose the row and column order of the three selected boxes, which is exactly the restriction defining the standard tableaux in this local orbit. In the full six-state space let $U$ be spanned by row-nonstandard states. It is invariant under both local generators: a swap can carry a row-nonstandard state to a row-standard state only by reversing a same-row adjacent pair, and for source contents $x=Qy$ the coefficient of that repair is $B_{xy}=(Qy-x)/(y-x)=0$. In the quotient by $U$, the row-standard states form a basis. Their standard states span an invariant subspace: a swap that stays row-standard but fails column order reverses a same-column adjacent pair, for which $b=Q^{-1}a$ and $B_{ab}=0$; a row-invalid target is already zero in the quotient. Thus the local standard-tableau action is a submodule of a quotient of the full six-state action. Every nonstandard term in the displayed six-state computation is either zero in this quotient or has the stated zero boundary coefficient, so the braid relation holds with precisely the zero convention in the statement. The same two-state quotient/submodule argument makes the quadratic and affine calculations of step 1.2 valid when a swap is nonstandard. Distant generators commute because they act on disjoint label pairs and each coefficient depends only on the contents in its own pair. [step 1.2, step 2.1, F1, algebra]

4.1 The diagonal operators and the matrices in steps 1.2 and 3.1 satisfy all affine relations. The inverse generators act by inverse diagonal scalars, which exist because every content is a unit in $K$, and each $T_i$ is invertible by its quadratic relation and the unit $Q$. Step 1.1 verifies the cyclotomic relation. The presentation's universal property therefore gives the asserted representation of $H_{r,n}\otimes_RK$. [step 1.1, step 1.2, step 3.1, F2]

5.1 In $V^\lambda$, for each label $j$ let $C_j$ be the finite set of contents it attains among standard tableaux of shape $\lambda$. For a fixed $t$ define $E_t=\prod_{j=1}^n\prod_{c\in C_j,\ c\ne\operatorname{res}_t(j)}(L_j-c)/(\operatorname{res}_t(j)-c)$. By [F1] all denominators are nonzero, and the distinct content sequences show that $E_t$ acts as the projection onto $Kv_t$. If a submodule contains a nonzero vector, some such projection gives it a basis vector $v_t$. For every admissible adjacent swap $s_it$, the coefficient $B_{ab}$ is nonzero: its vanishing would require $b=Q^{-1}a$, which by the box geometry in [F1] makes the boxes comparable and the swap nonstandard. Connectivity of linear extensions from [F1] then carries $v_t$ to every basis line, so the submodule is all of $V^\lambda$. Finally, an isomorphism between two modules must preserve the joint $L_1,\ldots,L_n$ spectrum. A sequence of contents reconstructs its tableau and shape by [F1], so distinct shapes have disjoint joint spectra and their modules are nonisomorphic. [F1, step 4.1, algebra]

6.1 Steps 1.1–4.1 prove the relation checks, irreducibility, and pairwise distinction over the generic fraction field. No specialization or denominator cancellation is used. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
