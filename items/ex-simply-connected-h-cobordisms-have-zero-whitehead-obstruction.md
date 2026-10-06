---
id: ex-simply-connected-h-cobordisms-have-zero-whitehead-obstruction
kind: example
title: "Simply connected h-cobordisms have zero Whitehead obstruction"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 17
deps: [thm-smooth-s-cobordism-theorem, def-h-cobordism, def-simply-connected, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, thm-division-algorithm-in-z, thm-bezout-identity, lem-product-cobordisms-have-critical-point-free-presentations, lem-h-cobordisms-admit-two-index-normal-form-presentations, lem-the-orientable-double-cover-of-a-smooth-manifold, cor-connected-cover-of-a-simply-connected-space-is-trivial, def-homotopy-equivalence, def-countable-choice]
provenance:
  statement: literature-derived
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1, Theorem 1.2 and Remark 1.28, printed pp. 2 and 20"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Theorem 8.34, printed p. 185; PDF page 193"
---
## Example

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a connected smooth
h-cobordism of dimension $n+1\ge6$ with $M_0$ simply connected and closed. Then
$\operatorname{Wh}(1)=0$, so every finite based handle complex of $(W,M_0)$ has
torsion class $0$ and the s-cobordism criterion produces a diffeomorphism
$W\cong M_0\times[0,1]$ relative to $M_0$, recovering the simply connected
h-cobordism theorem of the preceding pair as the case $\pi=1$.

## Facts & Assumptions

**Given:** A connected smooth h-cobordism $(W;M_0,M_1)$ of dimension $n+1\ge6$ with $M_0$ closed, connected and simply connected.

[F1] The trivial group has vanishing Whitehead group: $\mathbb Z[1]=\mathbb Z$; the determinant is a well-defined surjection $K_1(\mathbb Z)\to\{\pm1\}$ because every elementary matrix has determinant $1$; and it is injective, since a common divisor of the entries of a column of an invertible integer matrix divides the determinant $\pm1$, the division algorithm with the Bézout identity reduces such a primitive column to $(\pm1,0,\dots,0)^{\mathsf T}$ by elementary row additions and swaps, and induction on the size then presents every invertible integer matrix, up to permutation, as elementarily equivalent to a diagonal matrix with entries $\pm1$, whose class is a sum of classes $[\pm1]$; hence $K_1(\mathbb Z)\cong\{\pm1\}$ and $\operatorname{Wh}(1)=K_1(\mathbb Z)/\langle[\pm1]\rangle=0$ ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], [[thm-division-algorithm-in-z]], [[thm-bezout-identity]]).

[F2] For a simply connected closed $M_0$ the fundamental group $\pi_1(M_0)$ is trivial, and the presentation-indexed torsion of every finite handle presentation of $(W,M_0)$ is an element of $\operatorname{Wh}(\pi_1(M_0))=\operatorname{Wh}(1)$ ([[def-simply-connected]], [[def-h-cobordism]]).

[F3] The presentation-relative s-cobordism criterion: $W$ is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$ if and only if some finite handle presentation $H$ of $(W,M_0)$ has $\tau_H(W,M_0)=0$ ([[thm-smooth-s-cobordism-theorem]]).

[F4] A product cobordism $M_0\times[0,1]$ has the critical-point-free height-function presentation relative to $M_0\times\{0\}$ ([[lem-product-cobordisms-have-critical-point-free-presentations]]).

[F5] A finite handle presentation of $(W,M_0)$ exists: the two-index normal-form lemma, applied at any allowed index to the oriented data below, produces a handle decomposition of $W$ relative to $M_0$ under the countable-choice hypothesis $\mathrm{AC}_\omega$ assumed here ([[lem-h-cobordisms-admit-two-index-normal-form-presentations]], [[def-countable-choice]]).

[F6] The oriented hypotheses of the criterion hold automatically. If $M_0$ were nonorientable, its orientation double cover would be a connected two-sheeted cover of the simply connected space $M_0$ ([[lem-the-orientable-double-cover-of-a-smooth-manifold]]), contradicting the triviality of connected covers of a simply connected space ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]); hence $M_0$ is orientable, and the homotopy equivalence $M_0\hookrightarrow W$ of the h-cobordism carries $\pi_1(M_0)=1$ to $\pi_1(W)=1$, so the boundaryless interior of $W$ is simply connected: pushing boundary-collar coordinates a small positive distance inward gives a homotopy equivalence $\operatorname{int}W\hookrightarrow W$, with its homotopies keeping positive coordinates positive. Apply the same cover argument to $\operatorname{int}W$. Its orientation extends over the product boundary collars to $W$, with $M_1$ inheriting a compatible boundary orientation ([[def-homotopy-equivalence]], [[def-h-cobordism]], [[def-simply-connected]]).

## Verification

1.1 By [F1] the Whitehead group of the trivial group vanishes, and by [F2] the fundamental group of the simply connected closed manifold $M_0$ is trivial, so every presentation-indexed class $\tau_H(W,M_0)$ of a finite handle presentation of $(W,M_0)$ lies in $\operatorname{Wh}(1)=0$ and is therefore the zero class. [F1, F2, given]

2.1 Take the finite handle presentation $H$ of $(W,M_0)$ supplied by [F5]; by step 1.1 its class vanishes, and by [F6] the oriented hypotheses of the criterion are met, so applying [F3] with this presentation yields a diffeomorphism $W\cong M_0\times[0,1]$ relative to $M_0$. [F2, F3, F5, F6, step 1.1]

3.1 The product model is consistent with the conclusion: the height function of $M_0\times[0,1]$ has no critical points and presents it with the empty handle list by [F4], whose torsion class is zero by the criterion; conversely the argument of steps 1.1 and 2.1 shows that every simply connected h-cobordism in dimension $n+1\ge6$ is a product, which is the simply connected h-cobordism theorem as the case $\pi=1$ of the presentation-relative criterion. [F3, F4, step 2.1] ∎
