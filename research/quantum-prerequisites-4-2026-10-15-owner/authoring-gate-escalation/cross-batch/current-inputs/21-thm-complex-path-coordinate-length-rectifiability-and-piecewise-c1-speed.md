---
id: thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed
kind: theorem
title: Complex path length equals coordinate length and piecewise speed integral
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 2
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
  - def-p-norms-on-rn
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: L. V. Ahlfors, Complex Analysis, 3rd ed., Chapter 4, Section 1.2
      url: https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf
    - title: U. Lang, Differential Geometry I, Section 1.1
      url: https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf
---

## Statement

Let $a\le b$ and let $\gamma:[a,b]\to\mathbb C$ be continuous. Put
$\Gamma:=\Phi\circ\gamma=(x,y)$, where
$x(t)=\operatorname{Re}\gamma(t)$ and
$y(t)=\operatorname{Im}\gamma(t)$. For every partition, the complex polygonal
sum of $\gamma$ equals the Euclidean polygonal sum of $\Gamma$, and

$$L_{\mathbb C}(\gamma)=L_{\mathbb R^2}(\Gamma),$$

including singleton intervals. Consequently, $\gamma$ is rectifiable exactly
when both $x$ and $y$ have bounded variation.

If $a<b$ and there is a finite partition
$a=t_0<\cdots<t_m=b$ such that on each piece
$[t_j,t_{j+1}]$ the path $\Gamma$ is differentiable in the interior and its
derivative extends continuously to the closed piece, then

$$L_{\mathbb C}(\gamma)=\sum_{j<m}\int_{t_j}^{t_{j+1}}\|\Gamma'_j(t)\|_2\,dt=\sum_{j<m}\int_{t_j}^{t_{j+1}}\sqrt{x'_j(t)^2+y'_j(t)^2}\,dt<\infty.$$

Corners and zero-speed pieces are allowed. On a singleton interval the length
and coordinate variations are zero, and the piecewise-speed sum is empty.

## Facts & Assumptions

**Given:** The continuous complex path $\gamma$ and, when $a<b$, the stated
finite subdivision.

[F1] [[thm-complex-coordinate-isometry-and-topology-transport]]: $\Phi$ is a bijective isometry from $d_{\mathbb C}$ to $d_2$.

[F2] [[def-complex-path-polygonal-length-and-rectifiability]] and [[def-path-polygonal-length-and-rectifiability-in-rn]]: Both lengths are suprema over the same interval partitions, with singleton length zero.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: $\operatorname{Re}(a+bi)=a$ and $\operatorname{Im}(a+bi)=b$, so the coordinates of $\Phi(\gamma(t))$ are $x(t),y(t)$.

[F4] [[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]: A continuous $\mathbb R^2$ path is rectifiable exactly when both coordinate functions have bounded variation, including the singleton case.

[F5] [[cor-piecewise-c1-paths-have-additive-speed-integral-length]]: A continuous piecewise-$C^1$ Euclidean path has finite length equal to the sum of the speed integrals on the pieces; derivatives need not match at corners.

[F6] [[def-p-norms-on-rn]]: For $(u,v)\in\mathbb R^2$, $\|(u,v)\|_2=\sqrt{u^2+v^2}$.

## Proof

1.1 The path $\Gamma$ is continuous: for any $s,t\in[a,b]$, [F1] gives $d_2(\Gamma(s),\Gamma(t))=d_{\mathbb C}(\gamma(s),\gamma(t))$, so the continuity condition for $\gamma$ implies that for $\Gamma$. By [F3], $\Gamma=(x,y)$. For each partition point pair, [F1] identifies the chord lengths; summing termwise gives equal polygonal sums by [F2]. [given, F1, F2, F3, algebra]

2.1 If $a<b$, taking the supremum of those equal sums over the identical partition set in [F2] gives $L_{\mathbb C}(\gamma)=L_{\mathbb R^2}(\Gamma)$. If $a=b$, both lengths are zero by [F2]. [F2, step 1.1]

3.1 Apply [F4] to the continuous $\mathbb R^2$ path $\Gamma$. The length equality in step 2.1 identifies its rectifiability with that of $\gamma$, and [F3] identifies its coordinate functions with $x$ and $y$. Thus the bounded-variation equivalence holds in both directions. [F3, F4, step 2.1]

3.2 Under the piecewise-$C^1$ hypothesis with $a<b$, [F5] applies to $\Gamma$ on the given subdivision. Substituting the length equality from step 2.1 gives the first integral formula and finiteness; [F6] gives the displayed square-root integrand. No derivative equality at adjacent endpoints is required by [F5]. [given, F5, F6, step 2.1, algebra]

4.1 If $a=b$, [F2] gives zero for both lengths, [F4] gives zero coordinate variations, and the speed sum is empty. Hence all stated boundary conventions hold. [given, F2, F4] ∎
