---
id: cex-geometric-cardinality-is-not-homotopy-invariant
kind: counterexample
title: "Geometric cardinality is not homotopy invariant"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, def-local-oriented-intersection-sign, def-oriented-intersection-number, ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds, def-circle-as-real-line-mod-integers, def-smooth-family-of-maps-and-evaluation-map, thm-oriented-intersection-number-is-homotopy-invariant, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-12.md"
      - "research/frontier-38-owner-30-alpha-batch-12-5a.md"
      - "research/frontier-38-owner-30-step5-hash-12-post-5a.json"
    content_sha256: "9c82f8bc0670f3109e1d50c4d6289d7b105b87b6f35f43a2a8e11effeec12540"
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 78–79 (two deformations with counts $2$ and $0$); Ch. 3 §3, printed p. 109 (cancelling preimages)"
---

## Statement refuted

The raw number of intersection points of transverse endpoint maps is a homotopy invariant, so the signed and mod 2 counts are not needed to detect its behaviour.

## Facts & Assumptions

**Given:** $M=\mathbb R^2$ with its standard smooth structure and orientation, the closed embedded oriented $x$-axis $A$, and the circle $X=S^1$.

[F1] Euclidean spaces and their open subsets are the standard smooth manifolds ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]), and $S^1=\mathbb R/\mathbb Z$ carries its quotient smooth structure with coordinates lifted from intervals of length less than $1$, whose transitions are integer translations. It is compact as the projection of $[0,1]$ ([[def-circle-as-real-line-mod-integers]]).

[F2] At a transverse intersection of a map $f:S^1\to\mathbb R^2$ with $A$, the local sign compares $(df_\theta(T_\theta S^1),T_pA)$ with the standard orientation of $\mathbb R^2$ ([[def-local-oriented-intersection-sign]], [[def-transverse-complementary-dimensional-intersection-set]]).

[F3] The signed count is the sum of the local signs and the mod 2 count is the number of points modulo two ([[def-oriented-intersection-number]], [[def-mod-two-intersection-number]]).

[F4] $f_s([u])=(\cos(2\pi u),s+\sin(2\pi u))$, $[u]\in\mathbb R/\mathbb Z$, $0\le s\le2$, is well defined because its coordinates are one-periodic in $u$; thus it is a smooth family in the sense of the evaluation map ([[def-smooth-family-of-maps-and-evaluation-map]]).

[F5] Under $\mathrm{AC}_\omega$, homotopic transverse maps have equal mod 2 intersection numbers, and the same holds for the oriented numbers ([[thm-mod-two-intersection-number-is-homotopy-invariant]], [[thm-oriented-intersection-number-is-homotopy-invariant]]); the explicit counts below do not require using those general theorems.

## Counterexample

**Proof technique:** compute the intersections and their signs for the explicit family.

1.1 Write $\theta=2\pi u$ modulo $2\pi$. For $(\cos\theta,s+\sin\theta)\in A$ one needs $\sin\theta=-s$. For $0\le s<1$ there are exactly two solutions, one with $\cos\theta>0$ and one with $\cos\theta<0$; for $s=1$ there is a single solution $[u]=[3/4]$, a tangency; for $s>1$ there is none. In particular the raw cardinality of $f_s^{-1}(A)$ is $2$ for $0\le s<1$ and $0$ for $s>1$. [F1, F4, given, algebra]

2.1 At a solution the ordered pair $(df_\theta(1),(1,0))=((-\sin\theta,\cos\theta),(1,0))$ has determinant $-\cos\theta$ in the standard basis, so the local sign is $\varepsilon=-\operatorname{sgn}(\cos\theta)$ by [F2]. Hence at the two solutions of 1.1 the signs are $+1$ and $-1$, and both the signed count $I(f_s,A)$ and the parity count $I_2(f_s,A)$ are $0$ for every transverse slice; for $s>1$ the fibre is empty and both counts are again $0$. [F2, F3, step 1.1, algebra]

3.1 The family $f_s$ is a smooth homotopy between $f_0$ and $f_2$, yet the raw cardinalities of the intersections are $2$ and $0$; hence geometric cardinality is not a homotopy invariant. The signed and parity counts, by contrast, are constant with value $0$ across the family and are compatible with the invariance asserted under the hypotheses of [F5]; the cardinality changes exactly at the tangency $s=1$, where the slice is not transverse. The full evaluation map remains transverse since its derivative in $s$ is $(0,1)$, which together with $T A$ spans $\mathbb R^2$. [F4, F5, step 1.1, step 2.1] ∎
