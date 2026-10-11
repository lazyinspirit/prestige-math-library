---
id: thm-q-schaper-virtual-radical-layer-formula
kind: theorem
title: "The q-Schaper virtual radical-layer formula"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-alternating-weyl-and-specht-symbols-from-beta-sequences, def-jantzen-filtration-of-a-lifted-cell-module, def-removable-border-strip-and-height, def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras, def-type-a-hecke-specht-module-and-cell-form, def-type-a-q-schur-algebra-and-weyl-modules, lem-hooks-correspond-to-removable-border-strips, lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation, lem-semistandard-weight-dimensions-detect-virtual-weyl-classes, thm-q-schur-weyl-weight-space-gram-determinant-hook-product, thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]
justified_by: []
aliases: []
landmark: false
dependency_level: 14
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

Let $R$ be a principal ideal domain, $\pi$ a prime element, $F=R/\pi R$ the residue field, and let $\hat q\in R^{\times}$ satisfy $[n]!_{\hat q}\ne0$ in $R$; put $q:=\hat q+\pi R\in F^{\times}$. Let $d\ge1$, let $\lambda$ be a partition of $n$ with at most $d$ parts, and let $W^{\lambda}_F$ be the Weyl module of the q-Schur algebra $S_F(d,n)=S(d,n)\otimes_RF$ with its Jantzen filtration $W^{\lambda}_F(i)$ with respect to $(R,\pi)$ ([[def-jantzen-filtration-of-a-lifted-cell-module]], [[def-type-a-q-schur-algebra-and-weyl-modules]]).

1. (**Jantzen sum formula**) In the Grothendieck group of finite-dimensional $S_F(d,n)$-modules, $$\sum_{i>0}\bigl[W^{\lambda}_F(i)\bigr]=\sum_{\substack{(a,b),(a,c)\in[\lambda]\\ b<c}}\Bigl(\nu_\pi\bigl([h^{\lambda}_{ab}]_{\hat q}\bigr)-\nu_\pi\bigl([h^{\lambda}_{ac}]_{\hat q}\bigr)\Bigr)\Bigl[W_F^{(\beta_1,\dots,\beta_b+h^{\lambda}_{ac},\dots,\beta_c-h^{\lambda}_{ac},\dots,\beta_n)}\Bigr],$$ where $\beta=\beta(\lambda)$ is the beta sequence of $\lambda$, $h^{\lambda}_{ab}$ are its hook lengths and the symbols are the virtual Weyl symbols of [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]. 2. (**q-Schaper, $d\ge n$**) If $d\ge n$ and $\Pi$ denotes the Schur functor of [[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]], then applying $\Pi$ to (1) gives the corresponding identity for the Hecke Specht modules in the source's normalisation, that is, for the Murphy cell modules $\Pi(W^{\lambda}_F)=S^{\lambda}_{\mathrm M}$ of [[def-type-a-hecke-specht-module-and-cell-form]] (the Dipper-James form is obtained by conjugating partitions and applying the same $\theta$ pullback to every Hecke module), $$\sum_{i>0}\bigl[S^{\lambda}_F(i)\bigr]=\sum_{\substack{(a,b),(a,c)\in[\lambda]\\ b<c}}\Bigl(\nu_\pi\bigl([h^{\lambda}_{ab}]_{\hat q}\bigr)-\nu_\pi\bigl([h^{\lambda}_{ac}]_{\hat q}\bigr)\Bigr)\Bigl[S_F^{(\beta_1,\dots,\beta_b+h^{\lambda}_{ac},\dots,\beta_c-h^{\lambda}_{ac},\dots,\beta_n)}\Bigr]$$ in the Grothendieck group of finite-dimensional $H_{F,q}(S_n)$-modules, with the virtual Specht symbols of [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]. The formula is a positive filtration-sum identity expressed in a signed Weyl/Specht basis. A single nonzero signed Weyl coefficient does not force the corresponding labelled simple factor: the entire right side must first be expanded and cancelled in simple classes. For a Weyl module and an off-head label $\nu$, the resulting multiplicity of $L^\nu$ is an upper bound for $[W^\lambda:L^\nu]$, and is positive exactly when that factor occurs in the radical. This does not give a general closed algorithm for decomposition numbers.

## Facts & Assumptions

**Given:** A PID $R$ with prime $\pi$, residue field $F$, $\hat q\in R^{\times}$ with $[n]!_{\hat q}\ne0$, the q-Schur algebra $S_F(d,n)$ and its Weyl modules with Jantzen filtrations ([[def-jantzen-filtration-of-a-lifted-cell-module]], [[def-type-a-q-schur-algebra-and-weyl-modules]]), and the virtual Weyl and Specht symbols ([[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]).

[F1] ([[thm-q-schur-weyl-weight-space-gram-determinant-hook-product]]) The Gram determinant of $W^{\lambda}$ on its $\nu$-weight space equals $q^{N}$ times the hook-ratio product $\prod_{(a,b),(a,c)\in[\lambda],b<c}([h^{\lambda}_{ab}]_{\hat q}/[h^{\lambda}_{ac}]_{\hat q})^{d_{\mu}(\dots)}$; under $[n]!_{\hat q}\ne0$ every factor is nonzero in the domain $R$.

[F2] ([[lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation]]) The total dimension of the positive Jantzen layers on a non-degenerate form equals the $\pi$-adic valuation of its Gram determinant.

[F3] ([[lem-semistandard-weight-dimensions-detect-virtual-weyl-classes]]) Equality of all semistandard weight-space dimensions forces equality in the Grothendieck group of $S_F(d,n)$-modules.

[F4] The balanced displacement removes the $h_{ac}$-strip and adds the same number of boxes, preserving degree; its sign is the beta sorting sign ([[def-removable-border-strip-and-height]], [[lem-hooks-correspond-to-removable-border-strips]]).

[F5] The exact Schur functor has integral corner isomorphism and exact restricted form factor $1$, with $e^*=e$ ([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]], [[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]). Filtration transport is proved below, rather than assumed from exactness.

[F6] Source results (Mathas, Theorem 5.31 and Corollary 5.32, printed pp. 58-60): the Jantzen sum formula for the q-Schur algebra and its transport to the Hecke side, with the coefficient $\nu_\pi([h^{\lambda}_{ab}]_{\hat q})-\nu_\pi([h^{\lambda}_{ac}]_{\hat q})$ and the virtual symbols.



## Proof

**Proof technique:** direct.

1.1 Work on a fixed weight space of the lifted free Weyl module. Every hook quantum integer is nonzero because its index is at most $n$ and $[n]!_{\hat q}\ne0$ in the domain. The balanced Gram formula [F1] gives its determinant, and the unit power of $\hat q$ has valuation zero. The Jantzen Gram-valuation lemma [F2] thus gives the sum of positive filtration-submodule dimensions as $$\sum_{(a,b),(a,c),\ b<c}  (\nu_\pi([h_{ab}]_{\hat q})-\nu_\pi([h_{ac}]_{\hat q}))  d_\mu(\beta+h_{ac}\mathbf e_b-h_{ac}\mathbf e_c).$$ The signed number is exactly the weight dimension of the corresponding balanced virtual Weyl symbol, including zero and cutoff cases. [given, F1, F2, F4]

2.1 Apply step 1.1 to every weight. The Weyl weight-character matrix is unitriangular, so [F3] detects equality of Grothendieck classes and proves part 1. These are classes of the filtration submodules $W_F^\lambda(i)$, not their successive quotients and not simply the radical class. [F3, step 1.1]

3.1 Establish filtration transport before applying the exact functor. On the lifted Weyl module $W$, the identity $e^*=e$ makes $We\perp W(1-e)$. For $x\in We$ and every $i\ge0$, pairing $x$ with all of $W$ is divisible by $\pi^i$ exactly when its pairing with $We$ is. Thus $W(i)e=(We)(i)$. Reducing modulo $\pi$ commutes with the direct summand projection, giving $W_F(i)e=(We)_F(i)$. The actual corner isomorphism and factor-$1$ form identity [F5] identify the latter with the Murphy Specht filtration. Applying the exact functor to the proved Weyl-class identity therefore transports each submodule and every signed term, proving part 2 even when a reduced cell form is identically zero. For the ordinary convention, apply the same $\theta$ to both modules and conjugate the labels; the independently proved Laurent-unit form factor preserves these divisibility filtrations as well. [F5, step 2.1]

4.1 Explain the valid multiplicity information. The Weyl form has nonzero simple head, $W_F(1)=\operatorname{rad}W_F$, and $W_F(i)\subseteq\operatorname{rad}W_F$ for $i>0$. Consequently for $\nu\ne\lambda$ its actual multiplicity in $W_F$ is its radical multiplicity, bounded above by its multiplicity in the whole positive sum. This whole-sum multiplicity is positive if and only if that factor occurs in the radical, since the first submodule is the radical and later ones lie inside it. No such conclusion is drawn from an individual positive or negative Weyl coefficient before cancellation. All claims follow from steps 1.1-3.1 and this submodule inclusion. [F4, step 1.1, step 2.1, step 3.1] ∎