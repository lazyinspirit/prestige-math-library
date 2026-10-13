---
id: thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects
kind: theorem
title: "Schur functor images of standard, simple, projective and tilting objects"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 38
deps: [thm-higher-level-schur-weyl-double-centralizer,
       thm-higher-level-schur-weyl-endomorphism-isomorphism,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o,
       def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality,
       def-the-whittaker-functor-from-the-relevant-parabolic-o-summand,
       def-degenerate-affine-hecke-algebra, def-degenerate-cyclotomic-hecke-algebra,
       thm-schur-weyl-double-centralizer, thm-schur-weyl-decomposition-with-length-cutoff, def-axiom-of-choice]
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
      locator: "Theorems 6.12, 6.15 and Corollary 6.13, printed pp. 45-48: the isomorphism S(A) = Hom_g(P_c tensor V^tensor d, N(A)), the modules D(A) = Hom_g(P_c tensor V^tensor d, K(A)) forming all irreducibles for standard A, the cosocle statement and the multiplicity equality [S(A):D(B)]=[N(A):L(B)]; Section 5.3-5.5 for the projective and tilting clauses."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Theorem 3.7, Theorem 3.8 and Theorem 3.10, printed pp. 27-31, with Section 3.4 (6.20)-(3.22), printed pp. 25-26: the Specht modules by parabolic induction, their irreducible heads and the Fock/KL dictionary; the local proof below expands the corner computation of the owner batch-17 note, Specht-corner sections 1-4."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 6, Sections 6.3-6.5, printed pp. 62-72: the parabolic Verma and Specht modules and the standard flags of tiltings."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and fix an admissible origin $c$. Let
$\pi=\operatorname{Hom}_{\mathfrak g}(T,-)$ be the Schur functor of
[[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]],
$T=P_c\otimes V^{\otimes d}$. Use the current category-O namespace:
$N(A):=M(A)$ is the generalized standard, $K(A):=\nabla(A)$ the costandard,
$L(A)$ the category-O simple and $P(A)$ its projective cover, as in
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]].
The source17 symbol $K(A)$ denotes our $L(A)$, not our costandard $K(A)$.
Let $V_{\!\mathrm{Wh}}$ denote the genuine continuous-dual functor of
[[def-the-whittaker-functor-from-the-relevant-parabolic-o-summand]], and write
$\mathsf L(A):=V_{\!\mathrm{Wh}}(L(A))$ for the finite-W image of the
category-O simple; for $A\in\mathrm{Std}$ this is the source finite-W simple
appearing in the Whittaker/Morita contract of
[[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]].
In particular the $W_d$-Hom below takes a finite-W module as its second
argument. Let $\mathrm{Std}$ be the standard labels. Then:

1. For every label $A$, the Schur image of the standard object $N(A)$ is the
   intrinsic affine-induced Specht module
   $$S(A)=H_d\otimes_{H_{d_1,\dots,d_l}}\Bigl(\bigotimes_j \mathrm{ev}^*_{a_j}S^{\mu^{(j)}}\Bigr),\qquad a_j=c_j+q_j-n,$$
   where $\mu^{(j)}$ is the partition of $d_j$ read from the nonnegative
   ground differences in the $j$-th column of $A$ and the factors are induced
   along the affine Young subalgebra $H_{d_1,\dots,d_l}=H_{d_1}\otimes\cdots
   \otimes H_{d_l}$. Its affine action factors through the cyclotomic image $B_d$, so the same module is obtained by replacing $H_d$ in this tensor product by $H_d(\mathbf a)$.
2. For $A\in\mathrm{Std}$ the module
   $D(A)=\pi(L(A))\cong\operatorname{Hom}_{W_d}(V_c^{\otimes d},\mathsf L(A))$ is
   simple, the modules $D(A)$, $A\in\mathrm{Std}$, form a complete set of
   pairwise non-isomorphic simples of the Hecke image $B_d$, and
   $\pi(L(A))=0$ for $A\notin\mathrm{Std}$.
3. For $A\in\mathrm{Std}$, $\pi(P(A))$ is the projective cover $Y(A)$ of
   $D(A)$, and $\pi^*\pi(P(A))\cong P(A)$; ambient off-standard projectives
   still have their genuine images, and no projective-preservation assertion
   is made for them.
4. Images of tiltings carry the opposite-parabolic standard/Specht flag
   coefficients, and $\pi$ is fully faithful on tiltings.
5. For $A\in\mathrm{Col}$ and $B\in\mathrm{Std}$,
   $[S(A):D(B)]=[N(A):L(B)]=d_{B,A}(1)$, where $d_{B,A}$ is the typed
   canonical-basis coefficient of the Fock-space dictionary; for $B\notin
   \mathrm{Std}$ the symbol $D(B)$ is not a Hecke simple. All interfaces are
   ungraded at parameter $1$.

## Facts & Assumptions

**Given:** The admissible origin $c$, the tensor object $T=P_c\otimes V^{\otimes d}$, the Schur functor $\pi$, the standard and costandard objects $N(A),K(A)$, the simples $L(A)$, the projectives $P(A)$, and the Hecke image $B_d$.

[F1] In the actual category-O namespace the generalized standards are $M(A)=N(A)$, the simples are $L(A)$, projective covers are $P(A)$ and costandards are $\nabla(A)=K(A)$. These have the BGG reciprocity and standard/costandard/tilting flags of [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]] and [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]. Composition multiplicities below are always taken against the simple $L(B)$; they are not standard-flag multiplicities against a costandard.

[F2] The Schur functor $\pi$ is exact, kills exactly the off-standard simples, recovers $\operatorname{add}(T)$ under $\pi^*\pi$, and is fully faithful on all projectives and on all tiltings; $T$ contains every standard-labelled projective-injective cover ([[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]], [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]]).

[F3] The filtered double centralizer identifies $B_d=\operatorname{End}_{W_d}(V_c^{\otimes d})^{\mathrm{op}}$, and the Schur quotient is the composite of the genuine Whittaker functor with the Morita equivalence; the stable range gives $B_d=H_d(\mathbf a)$ ([[thm-higher-level-schur-weyl-double-centralizer]], [[thm-higher-level-schur-weyl-endomorphism-isomorphism]], [[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]], [[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]]).

[F4] The Fock-space dictionary: the canonical, dual-canonical and quasi-canonical bases of the higher-level Fock module carry the typed labels of simples, projectives and tiltings of the summand, and the coefficient $d_{B,A}(1)$ computes the corresponding multiplicity at parameter $1$ ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]]).

[F5] The cyclotomic Hecke algebra has the bounded monomial basis and the affine evaluation homomorphisms $\mathrm{ev}_{a}\colon H_{d_j}\to\mathbb C[S_{d_j}]$, $x_k\mapsto a+\sum_{h<k}(h,k)$ ([[def-degenerate-cyclotomic-hecke-algebra]]).

[F6] For each finite-dimensional complex column space $E_j$, classical Schur–Weyl duality identifies its polynomial highest-weight multiplicity spaces with the ordinary Specht modules, with the length cutoff $\ell(\mu)\le\dim E_j$ ([[thm-schur-weyl-double-centralizer]], [[thm-schur-weyl-decomposition-with-length-cutoff]]). Cancelling the common origin character leaves the same intertwiners. The row symmetrizer in $E_j^{\otimes d_j}$ realizes the corresponding product of symmetric powers; its Young-symmetrizer quotient has the Specht fibre.



## Proof

**Proof technique:** direct.

**Given:** The standard $N(A)$, the costandard $K(A)$, the labels of $\mathrm{Std}$, and the corner data of the stable realization. For the empty pyramid, degree zero has the sole empty label and all its modules and functors are $\mathbb C$ and the identity; positive degree has no labels and only zero modules. The assertions follow directly there, and the following construction treats a nonempty pyramid.

1.1 **A regular corner in the stable realization.** Add full ground rows until there are $d$ distinct rows of length $l$, and choose one rightmost box in each such row; let $v_S$ be their ordered tensor and $e_S$ the row-weight projection onto tensors using these rows once each. The actual tensor matrices in [F3] preserve row multisets, so this projection commutes with the right Hecke action and belongs to the left image by the first centralizer. The vectors $v_Sx_1^{r_1}\cdots x_d^{r_d}w$, $0\le r_i<l$, $w\in S_d$, have distinct leading tensors: the leading dot moves its box one column left, while a permutation changes the ordered distinct rows. They therefore form a basis of $e_SU$ by triangularity, and its cardinality is $l^dd!$. Thus $b\mapsto v_Sb$ identifies $e_SU$ with the right regular $H_d(\mathbf a)$-module. Put $A=\operatorname{End}_{H_d(\mathbf a)}U$. Since $e_SU$ is regular, $Ae_S=\operatorname{Hom}_{H_d}(e_SU,U)\cong U$ by evaluation at $v_S$. Consequently $h:H_d(\mathbf a)\to e_SAe_S$, characterized by $h(b)v_S=v_Sb$, is an algebra isomorphism, and $\theta\mapsto\theta(v_S)$ identifies $\operatorname{Hom}_{A}(U,M)$ with $e_SM$ for every finite-image module $M$. The left Hecke action on this corner is $h$, not the naive right action on $M$. [F3, F5, construct, algebra]

2.1 **The cyclic symmetric generator and its bottom quotient.** Write $A-A_c=(m_1,\ldots,m_N)$, retaining $a_j=c_j+q_j-n$ exclusively for the cyclotomic roots, and form the actual cumulative-column $\mathfrak p$-module $Z=\bigotimes_i\operatorname{Sym}^{m_i}(V_{\le\operatorname{col}(i)})$. Its bottom column degree is $b=\sum_i m_i(l-\operatorname{col}(i))$; the higher-degree part is a $\mathfrak p$-submodule, and $Z/Z_{>b}$ is the inflated Levi module $Z_b=\bigotimes_j\bigotimes_r\operatorname{Sym}^{\mu_r^{(j)}}(E_j)$. Put $w_A=\sum_{w\in\prod_iS_{m_i}}w$ and $x_A=\prod_i\prod_{k=1}^{m_i}\prod_{j>\operatorname{col}(i)}(x_{m_1+\cdots+m_{i-1}+k}-a_j)$. Apply these commuting factors one tensor place at a time, starting with the first place, and within each place in descending column order $j=l,l-1,\ldots,\operatorname{col}(i)+1$. The actual dot formula gives $v_Sx_A=v_{\mathbf j}$, where $\mathbf j$ has the ordered rows of $v_S$ and column sequence prescribed by $A-A_c$; subtracting $a_j$ cancels the scalar at column $j$ and moves that box one column left. Hence $v_Sx_Aw_A=v_{\mathbf j}w_A\in e_SZ$. More generally the vectors $v_Swx_1^{r_1}\cdots x_d^{r_d}x_Aw_A$, with $0\le r_k<\operatorname{col}(\mathbf j_k)$ and $w$ ranging over cosets of $\prod_i S_{m_i}$, have distinct leading symmetrized tensors and span $e_SZ$ by the ordinary symmetric-tensor basis. Thus this vector generates $e_SZ$ as a corner module, and its image generates $e_S(Z/Z_{>b})$. These are actual vector identities and triangular basis statements, rather than a character identification. [F1, F3, F5, step 1.1, construct, algebra]

3.1 **The affine colour fibre.** Ordinary Levi Schur-Weyl gives $\operatorname{Hom}_{\mathfrak h}(U,Z_b)\cong\bigotimes_j M^{\mu^{(j)}}$ on the canonical colour fibre, where $M^{\mu}$ is the symmetric-group permutation module. Its vectors in the corner are $v_{\mathbf j}ww_A+e_SZ_{>b}$ with $w\in S_{d_1}\times\cdots\times S_{d_l}$. For $k=d_1+\cdots+d_{j-1}+1$, the identity $v_{\mathbf j}=v_Sx_A$ and commutativity of dots give $h(x_k)v_{\mathbf j}ww_A=v_Sx_Ax_kww_A=v_{\mathbf j}x_kww_A$. In the bottom quotient the dot formula has scalar $a_j=c_j+q_j-n$: its left-neighbour term has higher degree, all preceding places have strictly smaller column and all later places have greater or equal column, so both signed transposition sums are empty. Thus $x_k$ acts as $a_j$ on that canonical fibre. The affine cross relations then determine the remaining dots as $a_j$ plus their within-block Jucys-Murphy sums. This proves that the fibre inclusion is a homomorphism for the affine Young subalgebra $H_{d_1}\otimes\cdots\otimes H_{d_l}$, with module $\bigotimes_j\mathrm{ev}_{a_j}^*M^{\mu^{(j)}}$, and its image generates the entire corner by step 2.1. [F3, F5, F6, step 1.1, step 2.1, construct, algebra]

4.1 **The genuine Specht isomorphism.** The Levi Young-symmetrizer map gives an actual quotient $Z_b\twoheadrightarrow V(A)$ and hence a $\mathfrak p$-quotient $Z/Z_{>b}\twoheadrightarrow V(A)$. The canonical colour fibre quotient is $\bigotimes_j S^{\mu^{(j)}}$, by ordinary Levi Schur-Weyl. The affine fibre map in step 3.1 descends through this actual quotient and still generates: $e_S$ is exact and the generating vector of its source maps onto a generator of its quotient. Affine induction therefore gives a surjection $S(A)\twoheadrightarrow e_SV(A)$. The multilinear row-weight part of $\bigotimes_j S_{\mu^{(j)}}(E_j)$ has one summand for each allocation of the $d$ distinct rows into ordered colour subsets of sizes $d_j$, and on each subset its weight space is the polytabloid Specht space. Its dimension is $d!/(d_1!\cdots d_l!)\prod_j\dim S^{\mu^{(j)}}$. This is also the induced module's dimension, since the affine algebra is free over its affine Young subalgebra with the finite shuffle basis. The existing surjection is therefore an isomorphism. Steps 1.1 and [F2] identify its target with $\operatorname{Hom}_{W_d}(U,V(A))=\pi(N(A))$, preserving the actual Hecke maps. [F1, F2, F3, F5, F6, step 1.1, step 3.1, construct, algebra]

5.1 **Descent to the original pyramid.** Extend the original label $A$ by the added ground rows, producing a contractible large label $A^+$. Its column partitions $\mu^{(j)}$ and roots $a_j$ are unchanged. The actual original-path/zero-occupancy compression in [F3] gives $eV(A^+)=V(A)$ and $eU^+=U$, with the faithful supporting-block Morita equivalence and natural Hom comparison. Every simple constituent of $V(A^+)$ has the same entry-multiset central character as $A^+$; the bottom-row minimum argument forces every such label to be contractible. Hence the supporting central idempotent satisfies $fV(A^+)=V(A^+)$, and the Hom comparison identifies the original $\operatorname{Hom}_{W_d}(U,V(A))$ with the entire large Hom module, rather than an arbitrary quotient of it. Step 4.1 therefore descends the same intrinsic Specht isomorphism to the original pyramid. [F3, step 4.1, construct, algebra]

6.1 Tilting images and full faithfulness. The opposite-parabolic flag coefficients are the actual tilting-character coefficients of [F1] and [F4]; exact $\pi$ carries each successive standard section to its Specht module by steps 4.1–5.1, so it preserves these flag multiplicities. For fullness, the local corner proof of [F2] applies: in the finite summand algebra $A$, $\pi$ is equivalent to $e(-)$ and has right adjoint $G(X)=\operatorname{Hom}_{eAe}(eA,X)$. Its unit on a target with standard socle is injective and has off-standard cokernel. A tilting has standard socle from its standard flag and standard head from its costandard flag and simple-preserving restricted duality. Any map from it to the off-standard cokernel vanishes, since a nonzero quotient would have standard head. Adjunction therefore factors every map between its Schur images uniquely through the original target, proving full faithfulness on tiltings. [F1, F2, F4, step 5.1, algebra]

6.2 Simple images and heads. Here $\mathsf L(A)=V_{\!\mathrm{Wh}}(L(A))$ uses the genuine continuous-dual functor, rather than raw Whittaker vectors in $L(A)$. The finite-W simple-image classification and the genuine Morita equivalence in [F2] and [F3] imply that $D(A)=\pi(L(A))\cong\operatorname{Hom}_{W_d}(V_c^{\otimes d},\mathsf L(A))$ is simple for $A\in\mathrm{Std}$, that these are distinct and exhaustive, and that $\pi(L(A))=0$ otherwise. For a standard label $A$, the cover $P(A)$ is an indecomposable summand of $T$, so $Y(A)=\pi(P(A))$ is an indecomposable projective. Its simple quotients are determined by $\operatorname{Hom}_{B_d}(Y(A),D(B))\cong\operatorname{Hom}_{\mathfrak g}(P(A),L(B))$, which has dimension $\delta_{A,B}$; this is the ordinary equivalence on $\operatorname{add}(T)$ and the simple-image computation. Thus $Y(A)$ has head $D(A)$. Lift the cover $P(A)\to L(A)$ through $N(A)\to L(A)$ using projectivity; the lift is surjective since the latter is the simple-head quotient and any proper submodule of $N(A)$ lies in its radical. Exactness yields $Y(A)\twoheadrightarrow S(A)\twoheadrightarrow D(A)$. Every nonzero quotient of the indecomposable projective $Y(A)$ has the same simple head $D(A)$: its kernel is contained in the unique maximal submodule. Therefore $S(A)$ has head $D(A)$. [F1, F2, F3, step 5.1, algebra]

7.1 Projective images. For $A\in\mathrm{Std}$, the preceding step shows that $Y(A)=\pi(P(A))$ is the indecomposable projective with simple head $D(A)$, hence its projective cover. Evaluation $T\otimes_{B_d}\pi(P(A))\to P(A)$ is an isomorphism because $P(A)\in\operatorname{add}(T)$: this is checked on $T$ and restricted to its idempotent summands. Thus $\pi^*\pi(P(A))\cong P(A)$. Off-standard projectives retain their actual images, and no projective-preservation assertion follows for them. [F2, step 6.2, algebra]

8.1 Multiplicities. Since $\pi$ is exact and its kernel is generated by the off-standard simples, the composition multiplicities of $S(A)=\pi(N(A))$ are the multiplicities of the simple $L(B)$ in $N(A)$ for $B\in\mathrm{Std}$; by the Fock-space dictionary [F4] the typed coefficient of the dual-canonical/canonical pairing equals $d_{B,A}(1)$, so $[S(A):D(B)]=[N(A):L(B)]=d_{B,A}(1)$; for $B\notin\mathrm{Std}$ the module $D(B)$ is zero and is not a simple Hecke label. All the identifications above are ungraded and taken at parameter $1$. [F2, F4, step 6.2, algebra] ∎

## Remarks

- The intrinsic definition of $S(A)$ by parabolic induction replaces the faulty direct $\operatorname{Hom}_{\mathfrak p}$ identification of the source with the corner/regular-vector computation: the canonical colour fibre is only one of several fibres of $e_SV(A)$, and the corner operators supply the correct extension.
- The proof deliberately separates the stable-range corner computation (steps 1.1–5.1) from the exact-quotient consequences (steps 6.1–8.1); the latter only use exactness, the kernel description and the Fock dictionary, so they are insensitive to the choice of stable realization.
