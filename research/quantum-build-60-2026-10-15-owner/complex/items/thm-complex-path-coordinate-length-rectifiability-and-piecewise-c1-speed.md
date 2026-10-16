---
id: thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed
kind: theorem
title: Complex path length equals coordinate length and piecewise speed integral
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-complex-path-polygonal-length-and-rectifiability
- thm-complex-coordinate-isometry-and-topology-transport
- def-complex-conjugate-real-imaginary-part-and-modulus
- def-path-polygonal-length-and-rectifiability-in-rn
- thm-rectifiable-iff-coordinate-functions-have-bounded-variation
- cor-piecewise-c1-paths-have-additive-speed-integral-length
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
  - title: U. Lang, Differential Geometry I, Section 1.1
    url: https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf
---

## Statement

For a continuous $\gamma:[a,b]\to\mathbb C$, $a\le b$, write $\Gamma=\Phi\circ\gamma=(x,y)$. Every complex polygonal sum equals the corresponding Euclidean polygonal sum of $\Gamma$, and

$$L_{\mathbb C}(\gamma)=L_{\mathbb R^2}(\Gamma).$$

Thus $\gamma$ is rectifiable exactly when both real functions $x$ and $y$ have bounded variation. If $\Gamma$ is continuous and piecewise $C^1$, meaning that on each piece $[t_j,t_{j+1}]$ its interior derivative has a continuous extension $(x'_j,y'_j)$ to the closed piece, then

$$L_{\mathbb C}(\gamma)=\sum_j\int_{t_j}^{t_{j+1}}\|\Gamma'_j(t)\|_2\,dt=\sum_j\int_{t_j}^{t_{j+1}}\sqrt{x'_j(t)^2+y'_j(t)^2}\,dt<\infty.$$

Corners and zero-speed pieces are allowed. Singleton intervals have zero length and variation, with empty speed sum.

## Facts & Assumptions

**Given:** $\gamma$ and its coordinate path $\Gamma$; real and imaginary components have the meaning of [[def-complex-conjugate-real-imaginary-part-and-modulus]].

[F1] $\Phi$ is an isometric homeomorphism ([[thm-complex-coordinate-isometry-and-topology-transport]]).

[F2] Both lengths are suprema of polygonal sums, with singleton length zero ([[def-complex-path-polygonal-length-and-rectifiability]], [[def-path-polygonal-length-and-rectifiability-in-rn]]).

[F3] A Euclidean path is rectifiable exactly when each coordinate has bounded variation, including the singleton case ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]).

[F4] A continuous piecewise $C^1$ Euclidean path has finite length equal to the sum of its piece speed integrals, with no derivative-matching condition at corners ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

## Proof

1.1 Continuity of $\Gamma$ follows from continuity of $\gamma$ and [F1]. For each partition, isometry identifies each chord length $|\gamma(t_{i+1})-\gamma(t_i)|$ with $\|\Gamma(t_{i+1})-\Gamma(t_i)\|_2$. Summing gives equality of sums, and taking the supremum over the same partitions gives equality of lengths, finite or infinite. [given, F1, F2]

2.1 Apply [F3] to the continuous $\mathbb R^2$ path $\Gamma$. Length equality in step 1.1 identifies its rectifiability with that of $\gamma$, yielding the claimed equivalence with bounded variation of $x$ and $y$. [step 1.1, F2, F3]

2.2 Under the piecewise $C^1$ hypothesis, [F4] applies to $\Gamma$ on the same subdivision. Substitution of step 1.1 gives the complex length formula and finiteness. The coordinate formula for the Euclidean norm gives the displayed square-root integrand; no complex-linear derivative is assumed. [given, step 1.1, F4, algebra]

3.1 For $a=b$, [F2] makes both lengths zero, [F3] gives zero coordinate variations, and [F4] uses an empty sum. Thus all claims include this case. [F2, F3, F4] ∎
