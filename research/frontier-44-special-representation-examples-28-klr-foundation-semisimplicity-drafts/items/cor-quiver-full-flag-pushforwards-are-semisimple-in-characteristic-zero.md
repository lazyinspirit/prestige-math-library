---
id: cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero
kind: corollary
title: "Full quiver-flag pushforwards are semisimple in characteristic zero"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - lem-algebraic-open-inclusion-surjects-on-fundamental-groups
  - lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification
  - thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology
  - lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom
  - lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom
  - lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative
  - thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
  - thm-constructible-six-functors-proper-base-change-and-verdier-duality
  - thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Varagnolo and Vasserot, Canonical bases and KLR-algebras, sections 1–2"
      url: https://arxiv.org/pdf/0901.3992
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Assume the Axiom of Choice as inherited from the geometry and equivariant constructible-category suppliers. Let $\Gamma$ be any finite loopless complex quiver, with arbitrary finite arrow multiplicities, and let $\beta$ be any finite dimension vector. For a color word $\nu$ of content $\beta$, use the increasing full graded flag incidence $\pi_\nu:X_\nu\to E_V$ and $G_V=\prod_i\operatorname{GL}(V_i)$ of [[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]]. For every coefficient field $k$ of characteristic zero, in the actual bounded equivariant constructible category,
$$L_\nu=R\pi_{\nu!}k_{X_\nu}[d_\nu],\qquad d_\nu=\dim_\mathbb C X_\nu,$$
is a finite direct sum of shifts of simple $G_V$-equivariant perverse sheaves. Consequently the finite sum over all such words is a semisimple complex in the same sense. No semismallness, finite-ADE hypothesis or affine paving of the fibers of $\pi_\nu$ is required.

## Facts & Assumptions

**Given:** the quiver, dimension, words, coefficient field and choice assumption in the Statement.

[F1] The geometry supplier gives the vector subbundle incidence, projectivity, and explicit smooth projective compactifications on the original space and the finite Grassmannian models ([[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]]). The compact smooth-source projective theorem over arbitrary characteristic-zero coefficients is [[thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology]]. This latter foundation is a genuine required theorem, not an axiom inferred from incidence geometry.

[F2] For the full-rank frame models $U_N\to B_N$, put $s_N=\dim_\mathbb C B_N=\sum_i\beta_i(N_i-\beta_i)$ and $r_N=2\min_{\beta_i>0}(N_i-\beta_i)$. The actual functor $Q_N:A\mapsto A_N$ has $Q_N(A)[s_N]$ perverse-exact and conservative, and for ordinary amplitudes $A\le a$, $B\ge b$ it identifies degree-zero Hom when $r_N\ge a-b$. In particular it identifies $\operatorname{End}_G(K)$ and $\operatorname{End}(K_N)$ as rings when $K$ has amplitude $[b,a]$. Bounded equivariant Cartesian constructible objects split idempotents inside that actual category. These are the finite-resolution and telescope constructions of [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] and [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]], together with the separate normalized perverse reflection theorem [[lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative]]. They do not assert derived full faithfulness of forgetting equivariance or descent of every perverse object on a finite model.

[F3] Six-functor proper smooth base change identifies $Q_N(R\pi_!k[d])$ with $R\pi_{N!}k[d]$. Open restriction is perverse-exact and commutes with intermediate extension/IC; bounded objects have finite cohomological amplitudes ([[thm-constructible-six-functors-proper-base-change-and-verdier-duality]], [[thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]).

## Proof

**Given:** the data in the Statement and the actual suppliers [F1]–[F3].

1.1 There are finitely many color words. Put $K=\bigoplus_\nu L_\nu$ and $f=\sum_i\beta_i(\beta_i-1)/2$. A fiber of $\pi_\nu$ is a closed subvariety of the full color flag variety of dimension $f$, so its constructible cohomology lies in $[0,2f]$ by the finite real-dimensional cochain models of [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]]. Proper base change gives ordinary amplitude $[-d_\nu,2f-d_\nu]$ for $L_\nu$. Thus $K$ has amplitude $[b,a]$ with $b=-\max_\nu d_\nu$ and $a=2f-\min_\nu d_\nu$. Choose $N_i\ge\beta_i+1$ with $r_N\ge a-b=2f+\max d_\nu-\min d_\nu$. In the trivial-group case use the point model. [F1, F2, F3, construct]

2.1 The associated incidence has $\dim_\mathbb C X_{\nu,N}=d_\nu+s_N$. By [F3], $K_N[s_N]=\bigoplus_\nu R\pi_{\nu,N!}k_{X_{\nu,N}}[d_\nu+s_N]$. By [F1], each $\pi_{\nu,N}$ is the restriction over $t\ne0$ of a projective map between smooth projective varieties, with the same smooth source dimension. Apply the compact projective theorem to that map, then proper open base change. This gives a finite decomposition of each summand of $K_N[s_N]$ into shifts of ordinary perverse IC objects. [F1, F3, step 1.1, construct]

3.1 Those restricted IC objects are still simple or zero. Indeed a nonempty Zariski open of an irreducible support meets its dense smooth local-system locus, and the restriction of IC is IC of the restricted local system by [F3]. The actual field-independent topological supplier [[lem-algebraic-open-inclusion-surjects-on-fundamental-groups]] makes the map on fundamental groups from the resulting dense algebraic open onto the smooth connected locus surjective. Its explicit relative perturbation proof uses the positive real codimension of the algebraic complement, rather than merely a cohomology dimension bound. A simple representation remains simple after restriction along that surjective group map. Thus step 2.1 is a finite decomposition into shifts of simple ordinary perverse objects. [F3, step 2.1, construct]

4.1 The finite decomposition in step 3.1 determines mutually orthogonal projectors in $\operatorname{End}(K_N[s_N])=\operatorname{End}(K_N)$ whose sum is the identity. The ring isomorphism of [F2] lifts all of them uniquely and simultaneously to $\operatorname{End}_G(K)$; their idempotence, orthogonality and identity-sum relations lift because this is an injective ring comparison. Split them inside the bounded equivariant category by [F2]. The lifted summands have ordinary amplitude in $[b,a]$, since their cohomology is a direct summand of that of $K$. Their finite models are exactly the summands of step 3.1. [F2, step 1.1, step 3.1, algebra]

5.1 If a lifted summand's finite model after the common shift $s_N$ is $T_N[-j]$ with $T_N$ simple perverse, normalized perverse exactness and conservativity in [F2] make the lifted summand $T[-j]$ for a perverse $T$. Any nonzero proper perverse subobject of $T$ would be sent by that exact conservative functor to a nonzero proper subobject of $T_N$. This contradicts simplicity; hence $T$ is simple equivariantly. The finite projector decomposition of $K$ therefore has the asserted form. It may also be applied to each $L_\nu$ alone, proving the individual assertion independently of the sum. [F2, step 4.1, algebra]

6.1 The construction uses only finite decompositions and a single sufficiently large frame model with the actual degree-zero Hom bound. The smooth-source normalization at that model is $d_\nu+s_N$, and the common base shift is corrected by [F2], yielding exactly the original $[d_\nu]$ normalization. All arrow multiplicities and dimensions entered only the vectorbundle rank and finite flag dimension of [F1]; characteristic zero entered only its compact projective theorem. This proves the full Statement. [F1, F2, step 1.1, step 2.1, step 5.1] ∎

## Proof contract boundary

This completes the finite equivariant reduction **once** the compact projective semisimplicity theorem and the exact ordinary/equivariant constructible constructions are locally proved. Those upstream theorems are not declared accepted by this research draft. The entire argument is in the actual equivariant category and uses its proved idempotent completeness; it does not lift an arbitrary nonequivariant splitting by forgetting equivariance. The common shift $s_N$, finite amplitude bound and exact ring comparison are indispensable consumed clauses.
