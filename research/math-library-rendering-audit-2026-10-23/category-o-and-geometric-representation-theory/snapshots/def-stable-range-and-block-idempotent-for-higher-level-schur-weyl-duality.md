---
id: def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality
kind: definition
title: "Stable range and block idempotent corner for higher-level Schur-Weyl duality"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 34
deps: [thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       def-degenerate-cyclotomic-hecke-algebra,
       thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras,
       cor-the-regular-module-decomposes-into-projective-indecomposables,
       def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
       def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       def-classical-complex-matrix-lie-algebras, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 6.2, Lemma 6.5, Theorem 6.6 and Corollary 6.7, printed pp. 40-41: the stable-range condition q_l>=d, the stable injectivity, the central corner fH_d(a)f outside the stable range, and the enlargement/deletion construction of the supporting blocks."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.2, printed pp. 23-24: the generalized-eigenvalue idempotents e(i), their S_d-orbits and the primitive central idempotents of the cyclotomic quotient."
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice. Keep a nonempty pyramid $\lambda=(0\le p_1\le\cdots\le p_n)$ with $l=p_n>0$ columns of heights $q_1\ge\cdots\ge q_l$, the origin $c$, and $U_d=V_c^{\otimes d}$ of [[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]. The **stable range** is $q_l\ge d$: there are at least $d$ rows of maximum length $l$. Put $a_j=c_j+q_j-n$, $A_d=\operatorname{im}(W(\lambda)\to\operatorname{End}U_d)$ and $B_d=\operatorname{im}(H_d(\mathbf a)\to\operatorname{End}U_d^{\mathrm{op}})$.

For every complex origin the finite image algebras are mutual centralizers, and the raw Hecke action is faithful in the stable range. For an **admissible** origin, meaning $c_j-c_k\in\mathbb Z$ implies $c_j=c_k$, the following construction defines the central support outside that range. Append $t$ full ground rows of length $l$ until $q_l+t\ge d$, keeping $l$ and $c$ fixed. Then $n$ and every $q_j$ increase by $t$, so every $a_j$ stays fixed. In the enlarged tensor space $U_d^{\mathrm{big}}$, let $e$ be the projection onto tensors using only retained rows, equivalently having zero occupancy in every deleted row. A large tableau is **contractible** if every deleted-row entry is the ground entry $c_j+1-r$ in row $r$ and column $j$. The supporting central idempotent $f$ acts as one on precisely the contractible standard-labelled simples and as zero on the others. Through the faithful enlarged Hecke action it is a central idempotent of $H_d(\mathbf a)$, and
$$B_d\cong fH_d(\mathbf a)f,\qquad\ker\psi_d=(1-f)H_d(\mathbf a).$$

This $f$ is a sum of entire supporting central blocks. Individual residue idempotents $e(\mathbf i)$ need not be central; they do not individually define this two-sided corner. The unrestricted tensor model does not by itself supply the admissible central-support conclusion.

For the empty pyramid $l=N=0$, the convention is separate: in degree zero the tensor and image algebras are $\mathbb C$ with the identity corner $f=1$; in positive degree the tensor, image algebras and their module categories are zero and $f=0$. No $q_l$ or nonempty stable-range condition is used in that case.

## Facts & Assumptions

**Given:** The actual tensor actions, the small and enlarged pyramids, and their finite image algebras.

[F1] The actual right tensor matrices, independent filtered double centralizer, stable injectivity and admissible finite-image projectivity are supplied by [[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]], [[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]] and [[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]].

[F2] The genuine original-head standard/simple comparison identifies $V(A)$ as the head-normalized inducing Levi module, with scalar central character given by the content $\theta(A)$; a standard-labelled $V(A)$ has unique simple quotient $L_W(A)$ by the essential-projective-head and genuine finite-W Morita argument in step 9.1 of [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]], and these are the distinct exhaustive finite-image simples. Its original path and Gauss generators are those of [[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]] and [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]].

[F3] Finite algebras have projective covers and every nonzero finite module has a simple subquotient ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]], [[cor-the-regular-module-decomposes-into-projective-indecomposables]]).

## Proof

**Proof technique:** direct.

**Given:** $U^{\mathrm{big}}$, $U$, the retained-box embedding $i\mapsto\hat i$, and admissible $c$ for the central-support claims.

1.1 The retained projection is an actual left-image idempotent. The matrix $e=\sum_{\mathbf i\in I^d}E_{\hat{\mathbf i},\hat{\mathbf i}}$ commutes with the right $x_k$ and $s_k$: left-neighbour moves, place swaps and scalar terms preserve the row multiset, so none changes zero deleted-row occupancy. Thus $e\in A_d^{\mathrm{big}}$ by the independent first centralizer. Every term of the right tensor formula restricts identically under $v_{\mathbf i}\mapsto v_{\hat{\mathbf i}}$, because row and column positions and left neighbours agree and $c_j+(q_j+t)-(n+t)=a_j$. This proves the actual right-bimodule identification $eU^{\mathrm{big}}=U$ and a surjective restriction map $\rho:B_d^{\mathrm{big}}\to B_d$. Extending a commuting operator on $eU^{\mathrm{big}}$ by zero on $(1-e)U^{\mathrm{big}}$ shows $A_d=eA_d^{\mathrm{big}}e$. No Morita conclusion is used. [F1, construct, algebra]

2.1 The standard contraction has the same corner action. In column $j$ the finite Levi module is $\mathbb C_{c_j}\otimes S_{\mu^{(j)}}(\mathbb C^{q_j+t})$, with $\mu^{(j)}$ the partition of the ground differences. The zero-occupancy part is $\mathbb C_{c_j}\otimes S_{\mu^{(j)}}(\mathbb C^{q_j})$, by the tensor Young-symmetrizer realization; it is zero precisely when a removed-row partition entry is nonzero. For the original $T_{ij;0}^{(r)}$ path sum, every summand is a product of matrix units with strictly increasing join columns. Levi projection kills strict off-column matrix factors, leaving at most one factor in each column. A deleted intermediate row causes an off-diagonal crossing in a column whose removed-coordinate occupancy then cannot be restored by another factor, so zero-occupancy compression kills it. Every surviving path has only retained rows and is exactly a small path. The head shift changes by $-(j-1)t$ in column $j$, while a retained box's ordinary source reading position changes by $+(j-1)t$. Its source highest weight $A_{\mathrm{box}}+k-1$ therefore cancels that shift: the normalized weight is $A_{\mathrm{box}}+\operatorname{row}(\mathrm{box})-1$ in both diagrams. Hence the complete retained matrix action, and then formal Gauss elimination, gives $eV(A)=V(\bar A)$ for contractible $A$, and zero otherwise, with the corner identification of step 1.1. [F1, F2, step 1.1, construct, algebra]

3.1 The simple contraction and central saturation. The same projector acts on all standards: let $H_r=T_{rr;0}^{(1)}$ be the row Cartan and $\kappa_r=\sum_{j:\text{row }r\text{ reaches column }j}c_j$. Its head-normalized action on a degree-$d$ Levi standard has $H_r-\kappa_r$ equal to polynomial row occupancy with eigenvalues $0,\ldots,d$. Hence $e=\prod_{r\text{ deleted}}\prod_{h=1}^d(1-(H_r-\kappa_r)/h)$ is exactly zero removed-row occupancy on every standard and equals step 1.1's image idempotent; for $d=0$ the inner product is one. Exactness of $e(-)$ and step 2.1 therefore kill every noncontractible simple. For a surviving big simple $L$, each nonzero $v\in eL$ generates $eL=eA_d^{\mathrm{big}}ev$, so $eL$ is simple. Conversely for a corner simple $S$, every proper submodule of $A_d^{\mathrm{big}}e\otimes_{eA_d^{\mathrm{big}}e}S$ is killed by $e$: one with image $S$ generates that whole induced module. The sum of proper submodules is thus proper and is its unique maximal submodule. Its simple quotient has $e$-image $S$. This proves a bijection between corner simples and surviving big simples without a Morita assumption. Every small standard tableau extends uniquely by full ground rows to a contractible large standard tableau. The complete Std simple lists in F2 and the corner of step 1.1 show that the survivor subset has the same finite cardinality as all contractible Std labels, so every contractible simple survives. Its simple image is a quotient of $eV(A)=V(\bar A)$, whose already proved unique head gives $eL_W(A)=L_W(\bar A)$. If $\theta(B)=\theta(A)$ and $A$ is contractible, separate the charge cosets. Admissibility makes all charges in one coset equal. The minimal bottom entry $c_j+1-(n+t)$ occurs once in every column of that coset; strictness and nonnegative ground differences force these occurrences into the same bottom row of $B$. Remove that row and repeat for all deleted rows. Then $B$ is contractible. Scalar central characters therefore separate contractible from noncontractible simples, so generalized central-character decomposition gives a central idempotent $f\in A_d^{\mathrm{big}}$ with exactly that support. Since $e$ kills all complementary simples, $e(1-f)=0$: a nonzero idempotent acts nontrivially on some simple of a finite algebra. Hence $e=ef=fe$. [F2, F3, step 2.1, construct, algebra]

4.1 Fullness and the supported module equivalence. Set $A_f=fA_d^{\mathrm{big}}f$. Every simple $A_f$-module survives $e$. If $A_feA_f$ were proper, the nonzero finite quotient $A_f/A_feA_f$ would have a simple killed by $e$, a contradiction. Thus write $f=\sum_k a_keb_k$. Multiplication $A_fe\otimes_{eA_fe}eM\to M$ has inverse $m\mapsto\sum_k a_ke\otimes eb_km$; the fullness identity and tensor balancing verify both composites. Also $e(A_fe\otimes N)\to N$ is the canonical isomorphism. These actual maps give inverse equivalences on all supported-block modules. In particular the functor $e(-)$ is faithful on that summand, and its kernel on all large finite-image modules is exactly the complementary summand. [F3, step 3.1, construct, algebra]

5.1 The simultaneous central corner and both kernels. The operator $f$ commutes with $A_d^{\mathrm{big}}$, hence belongs to $B_d^{\mathrm{big}}$ by the second centralizer. It is central there because every right operator commutes with every left operator. The equivalence of step 4.1 identifies $\operatorname{End}_{A_f}(fU^{\mathrm{big}})^{\mathrm{op}}$ with $\operatorname{End}_{eA_fe}(eU^{\mathrm{big}})^{\mathrm{op}}$, so the restriction of $\rho$ is an isomorphism $fB_d^{\mathrm{big}}f\to B_d$. Its kernel on $B_d^{\mathrm{big}}$ is $(1-f)B_d^{\mathrm{big}}$. The enlarged stable action is faithful by F1, giving $B_d=fH_d(\mathbf a)f$ and $\ker\psi_d=(1-f)H_d(\mathbf a)$. On the left, $fU^{\mathrm{big}}$ has annihilator $(1-f)A_d^{\mathrm{big}}$, and $eU^{\mathrm{big}}$ is faithful for its corner $eA_d^{\mathrm{big}}e$; the latter need not be a module for all of $A_d^{\mathrm{big}}$. Infinite-W kernels are the inverse images of these finite-image kernels. [F1, step 1.1, step 4.1, construct, algebra]

6.1 The parameter boundary. Stable faithfulness and the matrix restriction of step 1.1 hold for every complex origin. Central saturation in step 3.1 used admissibility, so the supporting-block and faithful-equivalence assertions are made only there. The supporting idempotent is a sum of whole central blocks; individual residue idempotents are not thereby made central. All row additions keep $l$ fixed and add full rows, preserving $c_j+q_j-n$ exactly. [F1, step 3.1, step 5.1, algebra] ∎

## Remarks

The equivalence above is between the supported finite-image summand and the retained finite-image corner. If the enlarged tensor module is a progenerator, this explicit equivalence transports its supported part to the small tensor progenerator. Ground and ordinary-dual adjunction proofs establish that hypothesis in the admissible double-centralizer supplier; the corner proof does not assume its own Morita conclusion.
