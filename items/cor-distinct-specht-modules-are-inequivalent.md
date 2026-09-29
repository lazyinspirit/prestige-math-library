---
id: cor-distinct-specht-modules-are-inequivalent
kind: corollary
title: Distinct complex Specht modules are inequivalent
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: false
deps:
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-dominance-order-on-partitions
  - def-intertwiner-equivalent-and-faithful-representations
  - def-young-subgroup-tabloid-and-permutation-module
  - lem-polytabloid-covariance-and-column-sign
  - thm-group-actions-and-group-ring-modules-correspond
  - thm-specht-to-permutation-homomorphism-dominance
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.4(a) and complete proof, printed p. 16"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Corollary 4.4 and proof, printed p. 15"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

If $\lambda,\mu\vdash n$ and $S^\lambda\cong S^\mu$ as complex
$S_n$-representations, then $\lambda=\mu$.

## Facts & Assumptions

**Given:** $n\ge0$, partitions $\lambda,\mu\vdash n$, and an isomorphism
$f:S^\lambda\to S^\mu$ of complex $S_n$-representations.

[F1] Each shape $\nu\vdash n$ has a canonical standard row-filled tableau
$t_\nu$ ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] The Specht space $S^\nu$ is the complex span of its polytabloids, each
lying in the tabloid module $M^\nu$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F3] For every tableau $t$, the coefficient of $\{t\}$ in $e_t$ is $1$; in
particular $e_t\ne0$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F4] For each $\nu\vdash n$, $S^\nu$ is an $S_n$-submodule of $M^\nu$
([[lem-polytabloid-covariance-and-column-sign]]).

[F5] An isomorphism of representations is an invertible intertwiner
([[def-intertwiner-equivalent-and-faithful-representations]]).

[F6] A complex-linear map of $S_n$-representations is equivariant exactly when
it is a $\mathbb C[S_n]$-module homomorphism
([[thm-group-actions-and-group-ring-modules-correspond]]).

[F7] A nonzero $\mathbb C[S_n]$-module map $S^\alpha\to M^\beta$ implies
$\alpha\unrhd\beta$
([[thm-specht-to-permutation-homomorphism-dominance]]).

[F8] The dominance relation on partitions of $n$ is antisymmetric:
$\lambda\unrhd\mu$ and $\mu\unrhd\lambda$ imply $\lambda=\mu$
([[def-dominance-order-on-partitions]]).

No form of the Axiom of Choice is used. The proof uses only the canonical
tableaux in [F1] and the given isomorphism.

## Proof

**Proof technique:** direct.

1.1 Let $t_\lambda$ be the canonical tableau from [F1]. By [F2]-[F3], $e_{t_\lambda}\ne0$ in $S^\lambda$. Let $\iota_\mu:S^\mu\hookrightarrow M^\mu$ be inclusion and set $\psi:=\iota_\mu\circ f$. Since $f$ and inclusion are injective, $\psi(e_{t_\lambda})\ne0$. By [F4]-[F5], both maps are $S_n$-equivariant, so [F6] makes $\psi$ a $\mathbb C[S_n]$-module homomorphism. [given, F1, F2, F3, F4, F5, F6]

1.2 The inverse $f^{-1}$ is equivariant: for $y=f(x)$, surjectivity and equivariance of $f$ give $f^{-1}(\sigma y)=f^{-1}(\sigma f(x))=f^{-1}(f(\sigma x))=\sigma x=\sigma f^{-1}(y)$ for every $\sigma\in S_n$. Let $t_\mu$ be the canonical tableau from [F1] and let $\iota_\lambda:S^\lambda\hookrightarrow M^\lambda$ be inclusion. By [F2]-[F3], $e_{t_\mu}\ne0$ in $S^\mu$; since $f^{-1}$ and inclusion are injective, $\psi':=\iota_\lambda\circ f^{-1}:S^\mu\to M^\lambda$ is nonzero. By [F4]-[F6], it is a $\mathbb C[S_n]$-module homomorphism. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 Apply [F7] to the nonzero map $\psi:S^\lambda\to M^\mu$ from step 1.1; it gives $\lambda\unrhd\mu$. [step 1.1, F7]

2.2 Apply [F7] with $\alpha=\mu$ and $\beta=\lambda$ to $\psi'$ from step 1.2. It gives $\mu\unrhd\lambda$. [step 1.2, F7]

3.1 Steps 2.1 and 2.2 give both dominance relations, so [F8] yields $\lambda=\mu$. [step 2.1, step 2.2, F8] ∎
