---
id: lem-na-weak-local-potentials-and-continuation
kind: lemma
title: Local weak scalar potentials and continuation on a simply connected open set
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-hcurl-space, thm-poincare-inequality-on-a-ball, thm-zero-weak-gradient-implies-componentwise-constancy, thm-sobolev-spaces-are-banach-spaces, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, def-axiom-of-choice, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, lem-mollification-commutes-with-weak-derivatives-in-the-interior, lem-euclidean-balls-have-positive-finite-lebesgue-measure, lem-test-function-cutoffs-and-euclidean-localization, thm-lebesgue-number-lemma, thm-heine-borel-rn]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: Section 2.2, equation (8); the weak continuation argument is supplied explicitly here.
---

## Statement

Assume AC. Let $G\subset\mathbb R^3$ be open and connected, and let $v\in L^2_{\mathrm{loc}}(G;\mathbb R^3)$ have zero distributional curl. Every ball compactly contained in $G$ has an $H^1$ primitive of $v$. If every based loop in $G$ is homotopic to a constant loop fixing its basepoint, these local primitives glue to $f\in H^1_{\mathrm{loc}}(G)$ with $\nabla f=v$. Such $f$ is unique up to a constant. This assertion alone does not assert global $L^2$ integrability of $f$ on $G$.

## Facts & Assumptions

**Given:** AC, $G,v$, and distributional curl zero.

[F1] Mean-zero functions on a ball obey the scaled Poincare inequality by [[thm-poincare-inequality-on-a-ball]]. Sobolev spaces are complete by [[thm-sobolev-spaces-are-banach-spaces]].

[F2] Mollification is smooth and commutes with weak differentiation, and converges locally in $L^2$, by [[thm-l-one-approximate-identities-converge-in-l-p]] and [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]].

[F3] An $H^1_{\mathrm{loc}}$ function with zero weak gradient is constant on each connected component by [[thm-zero-weak-gradient-implies-componentwise-constancy]].

[F4] Choose a nonnegative smooth compact cutoff equal to one on a smaller ball and supported in $B_1(0)$ using [[lem-test-function-cutoffs-and-euclidean-localization]], and normalize its positive finite integral using [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]. Its rescalings have the convention of [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] and form the approximate identity in [[prop-mollifier-families-are-l-one-approximate-identities]]. For Sobolev derivative commutation one may use [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]] on relatively compact open sets. In step 1.1 the given vector need not have all first weak derivatives: its mollified curl is zero directly by applying the distributional zero-curl identity to the translated mollifier, whose support stays inside $B(a,r')$. Thus no $W^{1,2}$ regularity of the original vector is assumed. The compact-test localization in step 2.2 is justified by the real Euclidean partition statement of [[lem-test-function-cutoffs-and-euclidean-localization]].

[F5] [[thm-heine-borel-rn]] at $n=2$ makes the parameter square compact. [[thm-lebesgue-number-lemma]] then applies to the relative open pullback cover $\{H^{-1}(B)\}$ of that compact metric square and gives the grid size in step 2.1. That theorem requires no choice principle. The analogous compact-interval use gives the finite path subdivisions in step 1.2.

## Proof

1.1 Let $B=B(a,r)\Subset G$ and choose $r'>r$ with $B(a,r')\Subset G$. Zero-extend $v|_{B(a,r')}$ as an $L^2$ function and convolve at radii $\varepsilon_j\downarrow0$ smaller than $r'-r$. The resulting $v_j$ are smooth and curl free on a neighborhood of $B$, and $v_j\to v$ in $L^2(B)$ by [F2]. Put $g_j(x)=\int_0^1 v_j(a+t(x-a))\cdot(x-a)\,dt$. The smooth curl-free identity $\partial_iv_{j,k}=\partial_kv_{j,i}$ gives $\partial_i g_j=\int_0^1\frac{d}{dt}(t v_{j,i}(a+t(x-a)))dt=v_{j,i}(x)$. Subtract $(g_j)_B$. For any $j,k$, [F1] bounds the $H^1$ norm of this normalized difference by $C_B\|v_j-v_k\|_{L^2(B)}$. Completeness gives a limit $g_B\in H^1(B)$ with mean zero and gradient $v$. No passage through smooth de Rham cohomology is made. [F1, F2, construct, algebra]

1.2 Cover $G$ by its countable rational balls with compact closure in $G$, and choose the primitives in step 1.1. Every nonempty intersection of two such balls is convex and connected. By [F3], $g_B-g_C=c_{BC}$ almost everywhere on $B\cap C$, with a unique real constant; $c_{BC}=-c_{CB}$, and $c_{BC}+c_{CD}=c_{BD}$ whenever the triple intersection is nonempty. Consider a germ of a primitive to mean a local $H^1$ primitive on a neighborhood of a point, identifying two when they agree almost everywhere on a smaller neighborhood. Fix one germ at a basepoint. Along a path, choose a finite subdivision whose successive subpaths lie in balls, and transport the current primitive by adding the unique constant needed to agree on an overlap at each subdivision point. This defines the terminal germ. Inserting extra subdivision points does not change it, and changing the covering balls gives the same result: refine around every subdivision point so that all balls compared contain that point, use their nonempty open intersections, and use the displayed cocycle identity. Thus transport is well defined along a path and reverses under reversal of that path. [F3, step 1.1, construct]

2.1 Transport is invariant under endpoint-fixed path homotopy. For a continuous homotopy $H:[0,1]^2\to G$, compactness gives a finite subcover of its image by the ball cover and a Lebesgue number for the pullback cover of the square. A sufficiently fine rectangular grid then maps every closed cell into one ball. The transport around the boundary of that cell is the identity: compute it with that one ball's primitive; subdivision and ball independence from step 1.2 permit this computation. Compose these identities over all cells. Every interior edge is traversed once in each direction, so its transports cancel. The two vertical boundary paths are constant when endpoints are fixed; hence the transports along the two horizontal paths agree. If $G$ has the stated loop property, any two paths from the basepoint to a given point have equal terminal germs by applying this argument to their concatenation with one reversed. A connected open subset of Euclidean space is path connected: the set reachable by polygonal paths is both open and relatively closed, since a ball about any point joins that point to all nearby points. Thus there is a terminal germ at every point. [step 1.2, construct, algebra]

2.2 On a small ball around any point, path independence identifies these terminal germs with one fixed local primitive plus a constant. The resulting local functions therefore agree almost everywhere on overlaps. They define an $L^2_{\mathrm{loc}}$ class on $G$: enumerate the countable ball cover and use the first applicable representative on each measurable difference of balls; the overlap exceptional sets have countable union of measure zero. Any compact subset has a finite ball subcover, so the class is $H^1$ locally, and its weak derivative is $v$ there and hence globally on compactly supported tests. This is $f$. Any two choices differ by a locally $H^1$ zero-gradient function, so [F3] makes the difference constant. AC is used only for the cited analytic interfaces and the countable local representative/primitive choices. [F3, step 2.1, construct] ∎
