---
id: ex-snowflake-quasicircle
kind: example
title: "The Koch snowflake is a non-rectifiable quasicircle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 16
deps:
  - def-path-polygonal-length-and-rectifiability-in-rn
  - def-axiom-of-choice
  - def-countable-choice
  - def-hausdorff-content-at-scale-delta
  - def-hausdorff-dimension
  - def-hausdorff-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measure
  - def-quasicircle
  - def-real-power
  - lem-geometric-sequence-null
  - prop-measure-monotonicity
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-hausdorff-dimension-critical-exponent
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
  - thm-logarithm-change-of-base
  - thm-quasicircle-characterizations
  - thm-real-power-laws
  - thm-compactness-under-continuous-maps
  - thm-zero-length-sets-and-quasicircles-are-conformally-removable
axiom_use: >-
  Assume AC for the quasicircle-characterisation and conformal-removability
  suppliers. Countable Choice, derived from AC, is used for the Lebesgue
  measure and outer-measure interfaces in the Hausdorff-measure estimate.
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §1.4.1, printed pp. 22–23: the classical Koch snowflake construction and its self-similar sides; read in full."
    - title: "S. van Golden, S. Kombrink, and T. Samuel, On the geometry of generalised Koch snowflakes"
      url: "https://arxiv.org/abs/2601.07371"
      locator: "§2, Lemma 2.1 and the Hausdorff-dimension proof, printed pp. 4–7: the four ratio-1/3 rhombus cells, disjoint interiors, and the finite-positive critical Hausdorff measure argument; §3, Lemma 3.1, Proposition 3.2 and Theorem 3.3, printed pp. 6–9: the classical snowflake parametrisation, Jordan property, complete cell-based bounded-turning proof, and constant 12. The full relevant arguments were read."
    - title: "M. Ghomi, Curves and Surfaces, Lecture Notes 1"
      url: "https://ghomi.math.gatech.edu/Classes/Math497C/LectureNotes1.pdf"
      locator: "Exercise 9: the Koch-side polygonal construction and the hint that its approximants have lengths tending to infinity. The exercise is not used as a proof; the retained-vertex polygonal-sum argument is given in Proof 1.2."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice. Normalize an equilateral triangle to have side length $1$, and construct the classical Koch snowflake $S$ by replacing the middle third of every boundary segment by the two sides of the outward equilateral bump at each stage. Equivalently, $S$ is the Hausdorff limit of the snowflake polygons $P_n$. Then:

(a) $S$ is a Jordan curve with bounded-turning constant $M=12$, hence is a quasicircle.

(b) $P_n$ has perimeter $3(4/3)^n$, which tends to infinity. Thus $S$ is not rectifiable, its chord-arc (Lavrentiev) condition fails (a chord-arc Jordan curve is rectifiable and has shorter-subarc length bounded by a constant times chord length), and quasicircles need not be rectifiable.

(c) With $s=\log 4/\log 3$, one has $0<\mathcal H^s(S)<\infty$, $\dim_H S=s$, and $\mathcal H^1(S)=+\infty$.

(d) $S$ is conformally removable.

## Facts & Assumptions

**Given:** AC and the standard outward Koch construction, with the initial triangle normalized as in the statement.

[F1] For a path, arc length is the supremum of its inscribed polygonal sums, and the path is rectifiable exactly when these sums are bounded ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

[F2] The standard four similarities on the side with endpoints $-1/2,1/2$ are $\psi_0(z)=z/3-1/3$, $\psi_1(z)=e^{i\pi/3}z/3-1/12+i\sqrt3/12$, $\psi_2(z)=e^{-i\pi/3}z/3+1/12+i\sqrt3/12$, and $\psi_3(z)=z/3+1/3$. Let $V=\{x+iy:|x|+\sqrt3|y|\le1/2\}$ and let $T$ be the triangle with vertices $-1/2,1/2,i\sqrt3/6$. These are the rhombus and the upper triangle used below. At the classical parameter $p=1/3$, equation (1.1) of van Golden–Kombrink–Samuel gives the rhombus vertices $(\pm1/2,0),(0,\pm1/(2\sqrt3))$. Its diameter is one and its inradius is $1/4$, by distance to the lines $\pm x\pm\sqrt3y=1/2$. The local construction, injectivity and packing properties are proved in step 1.1; the source supplies their coordinate model. The compact-to-Hausdorff criterion is [[thm-compactness-under-continuous-maps]].

[F4] For $s>0$, Hausdorff measure is the small-scale limit of the infimal sums $\sum_j(\operatorname{diam}U_j)^s$ over arbitrary countable covers ([[def-hausdorff-measure]], [[def-hausdorff-content-at-scale-delta]]). Hausdorff dimension is the infimum of the zero-measure exponents, and $0<\mathcal H^s(E)<\infty$ implies $\dim_H E=s$; if $t<s=\dim_H E$, then $\mathcal H^t(E)=\infty$ ([[def-hausdorff-dimension]], [[thm-hausdorff-dimension-critical-exponent]]).

[F5] Under Countable Choice, $\lambda_2$ is a complete measure, is monotone, and is additive on disjoint measurable sets; open and closed boxes have their usual area ([[thm-lebesgue-measure-is-a-complete-measure]], [[def-measure]], [[prop-measure-monotonicity]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]). Also under Countable Choice, one-dimensional Lebesgue outer measure is countably subadditive and assigns $[0,1]$ measure $1$ ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]).

[F6] For $\alpha=\log 4/\log 3$, $\alpha>1$ and $3^{-\alpha}=1/4$, by the real-power laws and logarithm change of base ([[def-real-power]], [[thm-real-power-laws]], [[thm-logarithm-change-of-base]]).

[F7] For a Jordan curve in a finite chart, bounded turning implies the quasiconformal-image-of-the-circle condition in the quasicircle characterization ([[thm-quasicircle-characterizations]], [[def-quasicircle]]).

[F8] Every quasicircle is globally conformally removable ([[thm-zero-length-sets-and-quasicircles-are-conformally-removable]]).

[F9] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F10] The geometric sequences $3^{-n}$ tend to zero and $(4/3)^n$ tend to $+\infty$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** use the self-similar cell geometry for bounded turning and Hausdorff measure, and the retained polygon vertices for length.

1.1 The maps in [F2] send $T$ into itself; direct substitution of its three vertices verifies this. Their triangles meet only at consecutive retained vertices, and nonconsecutive triangles are separated by at least $1/6$: their real projections lie respectively in $[-1/2,-1/6]$, $[-1/6,0]$, $[0,1/6]$, $[1/6,1/2]$. For adjacent triangles, their cones at the common vertex have angular separation at least $\pi/3$, so their intersection is just that vertex. The same maps send $V$ into $V$, as substitution of its four vertices verifies, and their interiors lie in the corresponding disjoint open real-coordinate strips. Iteration gives level-$n$ rhombi of diameter $3^{-n}$ with disjoint interiors. Define $\rho(t)$ by the nested triangles prescribed by the base-four digits of $t\in[0,1]$, interpreting $1$ by the all-three digits. Nested diameters tend to zero, so completeness gives a unique point. At a double expansion, the two addresses end in all-three and all-zero digits; their triangles shrink to the same consecutive vertex, so $\rho$ is well-defined. Parameters within $4^{-n}$ lie in the same or adjacent level-$n$ parameter intervals, whose triangles have union diameter at most $2\cdot3^{-n}$; hence $\rho$ is continuous. The polygonal parametrizations differ uniformly from it by at most $3^{-n}$ and have the retained vertices as interval endpoints, proving surjectivity onto the Hausdorff limit. If two parameters have different first child addresses, triangle separation forces any common image to be their shared endpoint; the endpoint's only addresses are the corresponding all-three/all-zero tails. Thus the parameters agree, proving injectivity. The three outward copies of $T$ on the initial equilateral triangle meet only at the initial vertices: their endpoint cones again have separation at least $\pi/3$, and away from the vertices they lie on different exterior sides. The concatenation of the three side parametrizations is therefore continuous, with equal endpoints and injective on $[0,1)$. It induces a continuous bijection from the compact circle to $S$, a homeomorphism by [[thm-compactness-under-continuous-maps]]. Hence $S$ is Jordan. Every level-$n$ rhombus has inradius $3^{-n}/4$, so it contains an open axis-parallel square of side $3^{-n}/4$; this is valid after any rotation, since that square's circumradius is less than the inradius. [F2, F10, given, construct, algebra]

2.1 The closed parametrisation traverses the three side parametrisations in cyclic order. By [F2], subdividing each side parameter interval into $4^n$ equal pieces inscribes exactly the $4^n$ retained level-$n$ edges on that side. Each has length $3^{-n}$, so the concatenated partition has polygonal sum $3\cdot4^n3^{-n}=3(4/3)^n$, which tends to $+\infty$ by [F10]. By [F1], the limiting boundary is not rectifiable. A chord-arc curve is rectifiable by definition, so its chord-arc condition fails here. [F1, F2, F10, step 1.1, algebra]

2.2 Put $\alpha=\log4/\log3$. For each $n$, the $3\cdot4^n$ level-$n$ rhombi covering the three Koch sides have diameter $3^{-n}$. Since $4^n(3^{-n})^\alpha=1$, these covers have total $\alpha$-cost $3$ and diameters tending to zero. Thus $\mathcal H^\alpha(S)\le3<\infty$. [F2, F4, F6, F10, step 1.1, algebra]

2.3 Let $K$ be one side and $(U_j)$ any countable cover of $K$ with $\operatorname{diam}U_j\le\delta<1$. For a nonempty $U$ with $d=\operatorname{diam}U>0$, choose $n\ge1$ with $3^{-n}\le d<3^{-n+1}$. At most $1024$ level-$n$ rhombi meet $U$: each contains an open axis-parallel square of side $3^{-n}/4$, these squares are pairwise disjoint, and all such squares lie in one axis-parallel square of side $8\cdot3^{-n}$; finite additivity and monotonicity of planar area give $N(3^{-n})^2/16\le64(3^{-n})^2$. The base-four parameter intervals of the cells meeting $U$ cover $\rho^{-1}(U)$, so $\lambda_1^*(\rho^{-1}(U))\le1024\cdot4^{-n}\le1024d^\alpha$. If $d=0$, then $U$ is empty or a singleton, and injectivity of $\rho$ makes its preimage empty or a singleton, of outer measure zero. Countable subadditivity and $\lambda_1^*([0,1])=1$ now give $1\le1024\sum_j(\operatorname{diam}U_j)^\alpha$. Taking the infimum over every such cover and then the small-scale limit yields $\mathcal H^\alpha(K)\ge1/1024$; monotonicity gives $\mathcal H^\alpha(S)\ge1/1024>0$. [F2, F4, F5, F9, step 1.1, algebra]

2.4 First consider the side arc from a point $x$ to an endpoint $v$. If $x=v$, its diameter is zero. Otherwise let $T_w$ be the deepest nested endpoint triangle containing $x$, of diameter $a=3^{-|w|}$. The endpoint children are $\psi_0$ and $\psi_3$; their repeated triangles shrink to the endpoint, so this depth is finite. The other three children of $T_w$ are at distance at least $a/3$ from $v$, by the real-coordinate strips in step 1.1. Thus $|x-v|\ge a/3$, while the entire endpoint subarc lies in $T_w$ and has diameter at most $a\le3|x-v|$. Now take distinct $x,y$ on one side and their deepest common triangle, of diameter $a$. If their first distinct children are nonconsecutive, their distance is at least $a/6$ and the intervening subarc has diameter at most $a$, giving ratio at most $6$. If the children are consecutive with shared vertex $v$, their endpoint cones have separation at least $\pi/3$ by step 1.1. Writing $r=|x-v|$, $s=|y-v|$, the cosine law gives $|x-y|^2\ge r^2+s^2-rs\ge(r+s)^2/4$. The two endpoint tails have combined diameter at most $3(r+s)\le6|x-y|$. This also includes a zero tail when one point is the vertex. Points on different initial sides admit the subarc through their shared initial vertex, with the identical cone and endpoint-tail estimate. These cases prove bounded turning with bound $6$, hence with the advertised bound $12$; no sharpness is asserted. [F2, step 1.1, construct, algebra]

3.1 By [F4], the finite positive $\alpha$-measure gives $\dim_H S=\alpha$; since $\alpha>1$, the same theorem gives $\mathcal H^1(S)=+\infty$. [F4, F6, step 2.2, step 2.3]

4.1 The Jordan curve $S$ has bounded turning by step 2.4, so [F7] makes it a quasicircle. Applying [F8] then proves that $S$ is conformally removable. [F7, F8, step 2.4] ∎
