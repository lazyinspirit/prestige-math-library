---
id: thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions
kind: theorem
title: "The simple type-A Hecke modules are indexed by e-regular partitions"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-e-regular-and-e-restricted-partitions, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Theorem 3.39 with Lemmas 3.35, 3.37 and 3.38 (the e-restricted criterion and the Gram determinant divisibility), and Corollary 3.40 (e>n if and only if H is split semisimple), printed pp. 31-34"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, complete 66-page survey"
      url: "https://arxiv.org/abs/0909.4844"
      locator: "Theorem 5.4 and Remark 5.5, printed pp. 24-25: D(mu) is nonzero exactly for restricted multipartitions, and D_mu is the sign-twist of D(chi^t) in the older labelling"
---

## Statement

Let $F$ be a field, $q\in F^{\times}$, let
$e=e(F,q)\in\{2,3,\dots\}\cup\{\infty\}$ be the quantum characteristic
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) and let
$H=H_{F,q}(S_n)$ for $n\ge0$. For $\lambda\vdash n$ let $S^{\lambda}$ be the
Hecke Specht module and $D^{\lambda}=S^{\lambda}/\mathrm{rad}\,S^{\lambda}$ its
cell-form quotient ([[def-type-a-hecke-specht-module-and-cell-form]]). Then:

1. $D^{\lambda}\ne0$ if and only if $\lambda$ is $e$-regular
   ([[def-e-regular-and-e-restricted-partitions]]);
2. $\{D^{\lambda}:\lambda\vdash n\text{ is }e\text{-regular}\}$ is a complete
   set of pairwise non-isomorphic absolutely irreducible $H$-modules;
3. $H$ is split semisimple if and only if $e>n$ (including $e=\infty$); when
   $e\le n$ the algebra has nonzero radical.

This is the exact root-of-unity replacement for the ordinary Specht
classification. At $q=1$ in characteristic $p>0$ it specialises to the
classification of the simple $F[S_n]$-modules by $p$-regular partitions
([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]). No
semisimplicity is assumed and no choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$, the algebra $H=H_{F,q}(S_n)$, its Hecke Specht modules $S^{\lambda}$ and quotients $D^{\lambda}$ in the signed conjugate normalization ([[def-type-a-hecke-specht-module-and-cell-form]]), and the numbers $e(F,q)$ and $[\ ]_q$ ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]).

[F1] ([[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]) The nonzero $D^{\lambda}$ form a complete set of pairwise non-isomorphic absolutely irreducible $H$-modules; $D^{\lambda}\ne0$ if and only if the cell form on $S^{\lambda}$ is not identically zero.

[F2] ([[def-type-a-hecke-specht-module-and-cell-form]]) In the signed conjugate normalization $S^{\lambda}=(S^{\lambda'}_{\mathrm M})^\theta$ and $D^{\lambda}=(D^{\lambda'}_{\mathrm M})^\theta$, where $S^{\lambda'}_{\mathrm M}$ is the Murphy cell module, $\theta$ is the involutive automorphism with $\theta(T_i)=-qT_i^{-1}=(q-1)-T_i$, and pullback along $\theta$ is exact, preserves submodules, quotients, nonzero modules and simplicity.

[F3] Source criterion (Mathas, Theorem 3.39, with Lemmas 3.35, 3.37 and 3.38, printed pp. 31-34): in the Murphy normalization $D^{\lambda}_{\mathrm M}\ne0$ if and only if $\lambda$ is $e$-restricted. The two halves of the source proof are: (a) for $e$-restricted $\lambda$ the $e$-ladder tableau of Lemma 3.37 is $e$-restricted and Lemma 3.35 produces at least one composition factor of $S^{\lambda}_{\mathrm M}$ carried by the interpolated $\mathbb L$-modules, so $D^{\lambda}_{\mathrm M}\ne0$; (b) if $\lambda$ is not $e$-restricted, then $[e]_q$ divides the common factor $g^{\lambda}$ of every Gram entry of $S^{\lambda}_{\mathrm M}$ (Lemma 3.38), and $[e]_q=0$ forces every Gram entry to vanish, so the form is identically zero and $D^{\lambda}_{\mathrm M}=0$. Equivalently in the older labelling, the nonzero $D_{\mu}$ are indexed by the $e$-restricted partitions and $D_{\mu}\cong D(\mu^t)\otimes\operatorname{sgn}$ (Kleshchev, Theorem 5.4 with Remark 5.5, printed pp. 24-25).

[F4] ([[def-e-regular-and-e-restricted-partitions]]) $\lambda$ is $e$-regular if and only if its conjugate $\lambda'$ is $e$-restricted.

[F5] ([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]) At $q=1$ in characteristic $p>0$ the simple $F[S_n]$-modules are the heads of the Specht modules for the $p$-regular partitions.



## Proof

**Proof technique:** direct.

1.1 The criterion in the signed normalization: for $\lambda\vdash n$, step [F2] gives $D^{\lambda}\ne0$ if and only if $D^{\lambda'}_{\mathrm M}\ne0$, which by [F3] holds if and only if the conjugate partition $\lambda'$ is $e$-restricted, which by [F4] holds if and only if $\lambda$ is $e$-regular. This proves part 1. [given, F2, F3, F4]

1.2 Semisimplicity: [F3] identifies the source's semisimplicity criterion (the corollary recorded in the locator above) as: $H$ is split semisimple if and only if $e>n$, and when $e\le n$ the algebra has nonzero radical. Concretely, the Gram determinants of the Hecke Specht modules are, up to units, products of the q-integers $[h]_q$ over the hook lengths $h$ of the partition (the source's Gram determinant computation); every hook length of a partition of $n$ lies in $\{1,\dots,n\}$, so for $e>n$ no factor $[h]_q$ vanishes and all cell forms are non-degenerate, while for $e\le n$ the one-row partition $(n)$ has a hook of length $e$, so $[e]_q=0$ makes its cell form degenerate and the algebra is not semisimple. This is part 3. [given, F3, F4]

2.1 Classification: by [F1] the family of nonzero $D^{\lambda}$ is a complete set of pairwise non-isomorphic absolutely irreducible $H$-modules; by step 1.1 the nonzero labels are exactly the $e$-regular partitions of $n$. This is part 2. [step 1.1, F1]

3.1 Specialisation: at $q=1$, $e$ equals the characteristic $p$ of $F$ when $p>0$ (and $e=\infty$ in characteristic $0$), the $e$-regular partitions are the $p$-regular partitions, and the statement specialises to the classification of the simple $F[S_n]$-modules by $p$-regular partitions recorded in [F5]. No semisimplicity was assumed beyond part 3 and no choice principle is used. [step 1.1, F5] ∎
