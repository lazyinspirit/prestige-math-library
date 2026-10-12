---
id: thm-q-schaper-virtual-radical-layer-formula
kind: theorem
title: "The q-Schaper virtual radical-layer formula"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-alternating-weyl-and-specht-symbols-from-beta-sequences, def-removable-border-strip-and-height, def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras, def-type-a-hecke-specht-module-and-cell-form, lem-hooks-correspond-to-removable-border-strips, lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation, lem-semistandard-weight-dimensions-detect-virtual-weyl-classes, thm-q-schur-weyl-weight-space-gram-determinant-hook-product, thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Theorem 5.31 and Corollary 5.32 (q-Schaper), printed pp. 58-60, with Theorem 5.18, Corollary 5.19, Lemmas 5.22-5.26 and Proposition 5.24"
---

## Statement

Let $R$ be a principal ideal domain, $\pi$ a prime element, $F=R/\pi R$ the
residue field, and let $\hat q\in R^{\times}$ satisfy $[n]!_{\hat q}\ne0$ in $R$;
put $q:=\hat q+\pi R\in F^{\times}$. Let $d\ge1$, let $\lambda$ be a partition
of $n$ with at most $d$ parts, and let $W^{\lambda}_F$ be the Weyl module of the
q-Schur algebra $S_F(d,n)=S(d,n)\otimes_RF$ with its Jantzen filtration
$W^{\lambda}_F(i)$ with respect to $(R,\pi)$
([[def-jantzen-filtration-of-a-lifted-cell-module]],
[[def-type-a-q-schur-algebra-and-weyl-modules]]).

1. (**Jantzen sum formula**) In the Grothendieck group of finite-dimensional
   $S_F(d,n)$-modules,
   $$\sum_{i>0}\bigl[W^{\lambda}_F(i)\bigr]=\sum_{\substack{(a,b),(a,c)\in[\lambda]\\ b<c}}\Bigl(\nu_\pi\bigl([h^{\lambda}_{ab}]_{\hat q}\bigr)-\nu_\pi\bigl([h^{\lambda}_{ac}]_{\hat q}\bigr)\Bigr)\Bigl[W_F^{(\beta_1,\dots,\beta_b+h^{\lambda}_{ab},\dots,\beta_c-h^{\lambda}_{ac},\dots,\beta_n)}\Bigr],$$
   where $\beta=\beta(\lambda)$ is the beta sequence of $\lambda$,
   $h^{\lambda}_{ab}$ are its hook lengths and the symbols are the virtual Weyl
   symbols of [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]].
2. (**q-Schaper, $d\ge n$**) If $d\ge n$ and $\Pi$ denotes the Schur functor of
   [[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]], then
   applying $\Pi$ to (1) gives the corresponding identity for the Hecke Specht
   modules in the source's normalisation, that is, for the Murphy cell modules
   $\Pi(W^{\lambda}_F)=S^{\lambda}_{\mathrm M}$ of
   [[def-type-a-hecke-specht-module-and-cell-form]] (the Dipper-James form is
   obtained by conjugating partitions and applying the same $\theta$ pullback
   to every Hecke module),
   $$\sum_{i>0}\bigl[S^{\lambda}_F(i)\bigr]=\sum_{\substack{(a,b),(a,c)\in[\lambda]\\ b<c}}\Bigl(\nu_\pi\bigl([h^{\lambda}_{ab}]_{\hat q}\bigr)-\nu_\pi\bigl([h^{\lambda}_{ac}]_{\hat q}\bigr)\Bigr)\Bigl[S_F^{(\beta_1,\dots,\beta_b+h^{\lambda}_{ab},\dots,\beta_c-h^{\lambda}_{ac},\dots,\beta_n)}\Bigr]$$
   in the Grothendieck group of finite-dimensional $H_{F,q}(S_n)$-modules, with
   the virtual Specht symbols of
   [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]. The formula
   is a virtual radical-layer identity: each nonzero coefficient bounds the
   corresponding composition multiplicity from above and forces at least one
   occurrence of the corresponding simple factor, but it is not a general
   algorithm for decomposition numbers.

## Facts & Assumptions

**Given:** A PID $R$ with prime $\pi$, residue field $F$, $\hat q\in R^{\times}$ with $[n]!_{\hat q}\ne0$, the q-Schur algebra $S_F(d,n)$ and its Weyl modules with Jantzen filtrations ([[def-jantzen-filtration-of-a-lifted-cell-module]], [[def-type-a-q-schur-algebra-and-weyl-modules]]), and the virtual Weyl and Specht symbols ([[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]).

[F1] ([[thm-q-schur-weyl-weight-space-gram-determinant-hook-product]]) The Gram determinant of $W^{\lambda}$ on its $\nu$-weight space equals $q^{N}$ times the hook-ratio product $\prod_{(a,b),(a,c)\in[\lambda],b<c}([h^{\lambda}_{ab}]_{\hat q}/[h^{\lambda}_{ac}]_{\hat q})^{d_{\mu}(\dots)}$; under $[n]!_{\hat q}\ne0$ every factor is nonzero in the domain $R$.

[F2] ([[lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation]]) The total dimension of the positive Jantzen layers on a non-degenerate form equals the $\pi$-adic valuation of its Gram determinant.

[F3] ([[lem-semistandard-weight-dimensions-detect-virtual-weyl-classes]]) Equality of all semistandard weight-space dimensions forces equality in the Grothendieck group of $S_F(d,n)$-modules.

[F4] ([[def-removable-border-strip-and-height]], [[lem-hooks-correspond-to-removable-border-strips]]) The displaced beta indices are the hook lengths: unwrapping the border strip $R^{\lambda}_{ac}$ and re-wrapping it with lowest node in column $b$ corresponds to the beta displacement displayed in the statement.

[F5] ([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]], [[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]) The Schur functor $\Pi$ is exact and sends $W^{\lambda}_F$ to $S^{\lambda}_{\mathrm M}$ and its Jantzen layers on the Weyl side to the corresponding layers on the Specht side, commuting with Grothendieck classes.

[F6] Source results (Mathas, Theorem 5.31 and Corollary 5.32, printed pp. 58-60): the Jantzen sum formula for the q-Schur algebra and its transport to the Hecke side, with the coefficient $\nu_\pi([h^{\lambda}_{ab}]_{\hat q})-\nu_\pi([h^{\lambda}_{ac}]_{\hat q})$ and the virtual symbols.



**Proof technique:** direct.


## Proof

1.1 Weight-space identity: taking $\pi$-adic valuations of the hook product of [F1] makes each factor contribute the difference $\nu_\pi([h^{\lambda}_{ab}]_{\hat q})-\nu_\pi([h^{\lambda}_{ac}]_{\hat q})$ multiplied by the signed semistandard multiplicity, and by [F2] the total dimension of the positive Jantzen layers on the $\nu$-weight space is this sum; by [F4] the index of the corresponding term is the virtual Weyl symbol displayed. Hence the identity of part (1) holds after applying any semistandard weight functional. [given, F1, F2, F4]

2.1 Grothendieck upgrade: the right-hand side of part (1) is a virtual combination $\sum_\nu c_\nu[W_F^{\nu}]$ whose semistandard weight dimensions agree with those of $\sum_{i>0}[W^{\lambda}_F(i)]$ by step 1.1; by [F3] the two classes in the Grothendieck group of $S_F(d,n)$-modules coincide. This proves part (1). [step 1.1, F3]

3.1 Transport: the functor $\Pi$ is exact and carries the Weyl filtration to the Specht filtration termwise by [F5]; applying it to the identity of part (1) gives the identity of part (2) with the virtual Specht symbols, the vanishing virtual symbols accounting for the zero terms. This proves part (2). The formula is an identity of virtual radical layers and bounds composition multiplicities but does not compute them in general. [step 2.1, F5, F6] ∎
