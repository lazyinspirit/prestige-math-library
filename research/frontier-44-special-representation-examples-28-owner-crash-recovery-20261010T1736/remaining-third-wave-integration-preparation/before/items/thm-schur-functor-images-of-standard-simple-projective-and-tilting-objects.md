---
id: thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects
kind: theorem
title: "Schur functor images of standard, simple, projective and tilting objects"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 37
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
       def-degenerate-cyclotomic-hecke-algebra, def-axiom-of-choice]
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
      locator: "Theorems 6.12, 6.15 and Corollary 6.13, printed pp. 45-48: the isomorphism S(A) = Hom_g(P_c tensor V^tensor d, N(A)), the modules D(A) = Hom_g(P_c tensor V^tensor d, K(A)) forming all irreducibles for standard A, the cosocle statement and the multiplicity equality [S(A):D(B)]=[N(A):K(B)]; Section 5.3-5.5 for the projective and tilting clauses."
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
$T=P_c\otimes V^{\otimes d}$, and let $N(A),K(A)$ denote the standard and
costandard objects of the relevant parabolic summand, $L(A)$ the simples and
$P(A)$ the projective covers, indexed by admissible labels $A$; let
$\mathrm{Std}$ be the standard labels. Then:

1. For every label $A$, the Schur image of the standard object $N(A)$ is the
   intrinsic affine-induced Specht module
   $$S(A)=H_d(\mathbf a)\otimes_{H_{d_1,\dots,d_l}}\Bigl(\bigotimes_j \mathrm{ev}^*_{a_j}S^{\mu^{(j)}}\Bigr),\qquad a_j=c_j+q_j-n,$$
   where $\mu^{(j)}$ is the partition of $d_j$ read from the nonnegative
   ground differences in the $j$-th column of $A$ and the factors are induced
   along the affine Young subalgebra $H_{d_1,\dots,d_l}=H_{d_1}\otimes\cdots
   \otimes H_{d_l}$.
2. For $A\in\mathrm{Std}$ the module
   $D(A)=\pi(K(A))\cong\operatorname{Hom}_{W_d}(V_c^{\otimes d},L(A))$ is
   simple, the modules $D(A)$, $A\in\mathrm{Std}$, form a complete set of
   pairwise non-isomorphic simples of the Hecke image $B_d$, and
   $\pi(K(A))=0$ for $A\notin\mathrm{Std}$.
3. For $A\in\mathrm{Std}$, $\pi(P(A))$ is the projective cover $Y(A)$ of
   $D(A)$, and $\pi^*\pi(P(A))\cong P(A)$; ambient off-standard projectives
   still have their genuine images, and no projective-preservation assertion
   is made for them.
4. Images of tiltings carry the opposite-parabolic standard/Specht flag
   coefficients, and $\pi$ is fully faithful on tiltings.
5. For $A\in\mathrm{Col}$ and $B\in\mathrm{Std}$,
   $[S(A):D(B)]=[N(A):K(B)]=d_{B,A}(1)$, where $d_{B,A}$ is the typed
   canonical-basis coefficient of the Fock-space dictionary; for $B\notin
   \mathrm{Std}$ the symbol $D(B)$ is not a Hecke simple. All interfaces are
   ungraded at parameter $1$.

## Facts & Assumptions

**Given:** The admissible origin $c$, the tensor object $T=P_c\otimes V^{\otimes d}$, the Schur functor $\pi$, the standard and costandard objects $N(A),K(A)$, the simples $L(A)$, the projectives $P(A)$, and the Hecke image $B_d$.

[F1] Highest-weight structure of the summand: $N(A),K(A),L(A),P(A)$ exist and are classified by the admissible labels, with BGG reciprocity and the standard/costandard/tilting filtrations ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]], [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]).

[F2] The Schur functor $\pi$ is exact, kills exactly the off-standard simples, recovers $\operatorname{add}(T)$ under $\pi^*\pi$, and is fully faithful on all projectives and on all tiltings; $T$ contains every standard-labelled projective-injective cover ([[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]], [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]]).

[F3] The filtered double centralizer identifies $B_d=\operatorname{End}_{W_d}(V_c^{\otimes d})^{\mathrm{op}}$, and the Schur quotient is the composite of the genuine Whittaker functor with the Morita equivalence; the stable range gives $B_d=H_d(\mathbf a)$ ([[thm-higher-level-schur-weyl-double-centralizer]], [[thm-higher-level-schur-weyl-endomorphism-isomorphism]], [[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]], [[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]]).

[F4] The Fock-space dictionary: the canonical, dual-canonical and quasi-canonical bases of the higher-level Fock module carry the typed labels of simples, projectives and tiltings of the summand, and the coefficient $d_{B,A}(1)$ computes the corresponding multiplicity at parameter $1$ ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]]).

[F5] The cyclotomic Hecke algebra has the bounded monomial basis and the evaluation homomorphisms $\mathrm{ev}_{a}\colon H_{d_j}(\mathbf a)\to\mathbb C[S_{d_j}]$ at the roots $a_j$ ([[def-degenerate-cyclotomic-hecke-algebra]]).



## Proof

**Proof technique:** direct.

**Given:** The standard $N(A)$, the costandard $K(A)$, the labels of $\mathrm{Std}$, and the corner data of the stable realization.

1.1 The Specht isomorphism. Choose a sufficiently large admissible stable realization in which the pyramid has $d$ distinct full ground rows; the row-torus weight idempotent $e_S$ of those rows is an element of the finite-W image, commuting with the Hecke action, and $e_SV_c^{\otimes d}$ has dimension $l^dd!$ with the words using the $d$ chosen rows as a basis, so evaluation at the regular vector identifies $\operatorname{Hom}_{W_d}(V_c^{\otimes d},-)$ with $e_S(-)$. The corner operators are the row permutations together with $h(x_i)=e_S(-D^{(2)}_{r_i}+e_2(c)+e_1(c)+d-n-i+1)e_S$, where $D^{(2)}_{r_i}$ is the degree-two Gauss/path coefficient; on the canonical colour fibre of the finite Levi standard $V(A)$ this acts by $a_j=c_j+q_j-n$ plus the within-column Jucys-Murphy sum, and the colour fibre is the tensor product of the column Specht modules $\bigotimes_jS^{\mu^{(j)}}$ by ordinary Schur-Weyl. Row permutations carry this fibre to every other colour fibre and span $e_SV(A)$, so dimension counting gives $\operatorname{Hom}_{W_d}(V_c^{\otimes d},V(A))\cong S(A)$, and by adjunction $\pi(N(A))=\operatorname{Hom}_{\mathfrak g}(T,N(A))\cong S(A)$. [F1, F3, F5, algebra, construct]

1.2 Tilting images. A tilting object has a standard flag and a costandard flag by [F1]; applying the exact functor $\pi$ to the standard flag expresses $\pi$ of the tilting with the opposite-parabolic standard/Specht flag coefficients, and the standard/socle polarity used for full faithfulness on tiltings shows that the quotient is fully faithful there. [F1, F2, algebra]

2.1 Outside the stable range. If $q_l<d$ the admissible-origin construction enlarges the pyramid by adding full ground rows until $d$ rows are distinct; contractible labels restrict to the original pyramid and the corner $e_S$ detects exactly them, so the identification of step 1.1 descends to the original objects; this is the same enlargement used for the central corner and it does not change the Hecke roots. [F3, step 1.1, algebra]

2.2 The simple images. For $A\in\mathrm{Std}$ exactness of $\pi$ and the quotient description of [F2] give $\pi(K(A))=\operatorname{Hom}_{\mathfrak g}(T,K(A))\cong\operatorname{Hom}_{W_d}(V_c^{\otimes d},L(A))=D(A)$, and the cosocle of the Specht module $S(A)=\pi(N(A))$ is $D(A)$ by the canonical highest-vector argument; since $\pi$ kills exactly the off-standard simples, $D(A)=0$ for $A\notin\mathrm{Std}$, and the standard labels give all distinct simples of $B_d$ because every Hecke simple is a composition factor of some $S(A)$ and distinct standard labels give non-isomorphic $D(A)$. [F2, step 1.1, algebra]

3.1 Projective images. For $A\in\mathrm{Std}$ the cover $P(A)$ lies in $\operatorname{add}(T)$ by [F2]; hence $\pi(P(A))$ is a direct summand of $\pi(T)=B_d$, so it is projective, and its head is $D(A)$ by exactness, which makes it the projective cover $Y(A)$ of $D(A)$; the elementary identity $\pi^*\pi\cong\mathrm{id}$ on $\operatorname{add}(T)$ then gives $\pi^*\pi(P(A))\cong P(A)$. For off-standard labels the image $\pi(P(A))$ is the genuine image of an ambient projective and is not claimed to be projective. [F2, step 2.2, algebra]

4.1 Multiplicities. Since $\pi$ is exact and its kernel is generated by the off-standard simples, the composition multiplicities of $S(A)=\pi(N(A))$ are the multiplicities of $K(B)$ in $N(A)$ for $B\in\mathrm{Std}$; by the Fock-space dictionary [F4] the typed coefficient of the dual-canonical/canonical pairing equals $d_{B,A}(1)$, so $[S(A):D(B)]=[N(A):K(B)]=d_{B,A}(1)$; for $B\notin\mathrm{Std}$ the module $D(B)$ is zero and is not a simple Hecke label. All the identifications above are ungraded and taken at parameter $1$. [F2, F4, step 2.2, algebra] ∎

## Remarks

- The intrinsic definition of $S(A)$ by parabolic induction replaces the faulty direct $\operatorname{Hom}_{\mathfrak p}$ identification of the source with the corner/regular-vector computation: the canonical colour fibre is only one of several fibres of $e_SV(A)$, and the corner operators supply the correct extension.
- The proof deliberately separates the stable-range corner computation (steps 1.1 and 2.1) from the exact-quotient consequences (steps 1.2, 2.2, 3.1 and 4.1); the latter only use exactness, the kernel description and the Fock dictionary, so they are insensitive to the choice of stable realization.
