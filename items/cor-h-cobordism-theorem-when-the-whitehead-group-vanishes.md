---
id: cor-h-cobordism-theorem-when-the-whitehead-group-vanishes
kind: corollary
title: "The h-cobordism theorem when the Whitehead group vanishes"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 16
deps: [def-whitehead-torsion-of-an-h-cobordism, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, lem-h-cobordisms-admit-two-index-normal-form-presentations, thm-vanishing-torsion-implies-product-cobordism, def-h-cobordism, thm-division-algorithm-in-z, thm-bezout-identity, def-countable-choice]
provenance:
  statement: ai-altered
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
      locator: "Chapter 1 §1.4, Remark 1.28, printed p. 20"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Theorem 8.34, printed p. 185; PDF page 193"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a nonempty connected oriented smooth
h-cobordism of dimension $n+1\ge6$ with $M_0$ closed connected oriented and let
$\pi=\pi_1(M_0)$. If $\operatorname{Wh}(\pi)=0$ — for instance if $\pi$ is
trivial — then every presentation-indexed class $\tau_H(W,M_0)$ vanishes, and
$W$ is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$. In particular the
classical simply connected h-cobordism theorem is the case $\pi=1$.

## Facts & Assumptions

**Given:** A nonempty connected oriented smooth h-cobordism $(W;M_0,M_1)$ of dimension $n+1\ge6$ with $M_0$ closed connected oriented and $\pi=\pi_1(M_0)$, and the hypothesis $\operatorname{Wh}(\pi)=0$.

[F1] Every finite handle presentation of $(W,M_0)$ has a well-defined contraction torsion of its based handle complex, and hence a presentation-indexed class $\tau_H(W,M_0)\in\operatorname{Wh}(\pi)$ ([[def-whitehead-torsion-of-an-h-cobordism]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], [[def-h-cobordism]]).

[F2] A finite handle presentation of $(W,M_0)$ exists: the two-index normal-form lemma applies to the oriented data of the statement and produces a handle decomposition of $W$ relative to $M_0$ with handles only in degrees $q$ and $q+1$ for every $2\le q\le n-2$, under the countable-choice hypothesis $\mathrm{AC}_\omega$ assumed here ([[lem-h-cobordisms-admit-two-index-normal-form-presentations]], [[def-countable-choice]]).

[F3] A presentation with vanishing presentation-indexed torsion gives a product structure relative to $M_0$, and the vanishing-torsion sufficiency theorem applies to any finite presentation ([[thm-vanishing-torsion-implies-product-cobordism]]).

[F4] The trivial group has vanishing Whitehead group: $\mathbb Z[1]=\mathbb Z$; the determinant is a well-defined surjection $K_1(\mathbb Z)\to\{\pm1\}$ because every elementary matrix has determinant $1$ and the classes of the $1\times1$ matrices $(\pm1)$ occur; and it is injective, since a common divisor of the entries of a column of an invertible integer matrix divides the determinant $\pm1$, the division algorithm with the Bézout identity reduces such a primitive column to $(\pm1,0,\dots,0)^{\mathsf T}$ by elementary row additions and swaps, and induction on the size then presents every invertible integer matrix, up to permutation, as elementarily equivalent to a diagonal matrix with entries $\pm1$, whose class is a sum of classes $[\pm1]$; hence $K_1(\mathbb Z)\cong\{\pm1\}$ and $\operatorname{Wh}(1)=K_1(\mathbb Z)/\langle[\pm1]\rangle=0$ ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], [[thm-division-algorithm-in-z]], [[thm-bezout-identity]]).

## Proof

1.1 Take a finite handle presentation $H$ of $(W,M_0)$, which exists by [F2]; by [F1] its presentation-indexed class $\tau_H(W,M_0)$ is an element of $\operatorname{Wh}(\pi)$, and by hypothesis $\operatorname{Wh}(\pi)=0$, so $\tau_H(W,M_0)=0$ automatically, without any independence of presentations being needed. [F1, F2, given]

2.1 Since the chosen presentation has vanishing presentation-indexed torsion, the vanishing-torsion sufficiency theorem of [F3] applies to it and yields that $W$ is diffeomorphic to $M_0\times[0,1]$ relative to $M_0$; this argument works for every presentation because every presentation's class lies in the zero group. [F3, step 1.1]

3.1 The case $\pi=1$ is covered because [F4] gives $\operatorname{Wh}(1)=0$, so the simply connected h-cobordism theorem is the special case of the statement in which the fundamental group is trivial. [F4, step 2.1] ∎
