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
dependency_level: 14
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

[F2] For a side $K$ of the standard snowflake, write $\rho:[0,1]\to K$ for its base-four parametrisation. The four-similarity model has ratio $1/3$; its level-$n$ cells are rhombi $V_w$ of diameter $3^{-n}$, with pairwise disjoint interiors, and each cell corresponds to an interval of length $4^{-n}$. The interval endpoints map to the retained vertices of $P_n$, so consecutive subdivision parameters map to endpoints of one level-$n$ edge. At $p=1/3$, the base rhombus has vertices $(\pm1/2,0),(0,\pm1/2)$, so its inradius is $1/(2\sqrt2)$ and every cell contains a square of side $3^{-n}/4$. The side parametrisation $\rho$ is continuous, surjective, and injective; the outward three-side parametrisation is continuous and injective on $[0,1)$ in the classical case. These construction and parametrisation facts, including the touching-endpoint cases, are established in §2, Lemma 2.1, and §3, Lemma 3.1 and Proposition 3.2 of van Golden–Kombrink–Samuel.

[F3] The complete cell-based bounded-turning proof for the generalized snowflakes specializes at $p=1/3$ to $M=12$: pairs separated by a skipped child have a subarc of diameter at most $3^{-m}$ and distance at least $3^{-m}(1/2-p)$; pairs in adjacent child cells use the deepest intersecting descendant cells, with connecting subarc diameter at most $2\cdot3^{-n}$ and separation at least $3^{-(n+1)}/2$. Pairs on different sides of a vertex satisfy the same latter estimate. Thus the constants are $6$ and $12$, respectively (van Golden–Kombrink–Samuel, §3, Theorem 3.3 and its complete proof).

[F4] For $s>0$, Hausdorff measure is the small-scale limit of the infimal sums $\sum_j(\operatorname{diam}U_j)^s$ over arbitrary countable covers ([[def-hausdorff-measure]], [[def-hausdorff-content-at-scale-delta]]). Hausdorff dimension is the infimum of the zero-measure exponents, and $0<\mathcal H^s(E)<\infty$ implies $\dim_H E=s$; if $t<s=\dim_H E$, then $\mathcal H^t(E)=\infty$ ([[def-hausdorff-dimension]], [[thm-hausdorff-dimension-critical-exponent]]).

[F5] Under Countable Choice, $\lambda_2$ is a complete measure, is monotone, and is additive on disjoint measurable sets; open and closed boxes have their usual area ([[thm-lebesgue-measure-is-a-complete-measure]], [[def-measure]], [[prop-measure-monotonicity]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]). Also under Countable Choice, one-dimensional Lebesgue outer measure is countably subadditive and assigns $[0,1]$ measure $1$ ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]).

[F6] For $\alpha=\log 4/\log 3$, $\alpha>1$ and $3^{-\alpha}=1/4$, by the real-power laws and logarithm change of base ([[def-real-power]], [[thm-real-power-laws]], [[thm-logarithm-change-of-base]]).

[F7] For a Jordan curve in a finite chart, bounded turning implies the quasiconformal-image-of-the-circle condition in the quasicircle characterization ([[thm-quasicircle-characterizations]], [[def-quasicircle]]). This characterization is an authored draft; its upstream Ahlfors–Beurling and quasiconformal interfaces remain open.

[F8] Every quasicircle is globally conformally removable ([[thm-zero-length-sets-and-quasicircles-are-conformally-removable]]). This authored draft's quasiconformal-removability and invariance chain remains open.

[F9] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F10] The geometric sequences $3^{-n}$ tend to zero and $(4/3)^n$ tend to $+\infty$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** use the self-similar cell geometry for bounded turning and Hausdorff measure, and the retained polygon vertices for length.

1.1 The cited parametrisation in [F2] is a continuous surjection from $[0,1]$ onto the three-side snowflake, has equal endpoint values, and is injective on $[0,1)$ for the all-outward classical construction. It therefore induces a continuous bijection from the circle $[0,1]/(0\sim1)$ onto $S$. A continuous bijection from a compact space to the Hausdorff plane is a homeomorphism, so $S$ is a Jordan curve. [F2, given]

1.2 The closed parametrisation traverses the three side parametrisations in cyclic order. By [F2], subdividing each side parameter interval into $4^n$ equal pieces inscribes exactly the $4^n$ retained level-$n$ edges on that side. Each has length $3^{-n}$, so the concatenated partition has polygonal sum $3\cdot4^n3^{-n}=3(4/3)^n$, which tends to $+\infty$ by [F10]. By [F1], the limiting boundary is not rectifiable. A chord-arc curve is rectifiable by definition, so its chord-arc condition fails here. [F1, F2, F10, algebra]

1.3 Put $\alpha=\log4/\log3$. For each $n$, the $3\cdot4^n$ level-$n$ rhombi covering the three Koch sides have diameter $3^{-n}$. Since $4^n(3^{-n})^\alpha=1$, these covers have total $\alpha$-cost $3$ and diameters tending to zero. Thus $\mathcal H^\alpha(S)\le3<\infty$. [F2, F4, F6, F10, algebra]

1.4 Let $K$ be one side and $(U_j)$ any countable cover of $K$ with $\operatorname{diam}U_j\le\delta<1$. For a nonempty $U$ with $d=\operatorname{diam}U>0$, choose $n\ge1$ with $3^{-n}\le d<3^{-n+1}$. At most $1024$ level-$n$ rhombi meet $U$: each contains an open axis-parallel square of side $3^{-n}/4$, these squares are pairwise disjoint, and all such squares lie in one axis-parallel square of side $8\cdot3^{-n}$; finite additivity and monotonicity of planar area give $N(3^{-n})^2/16\le64(3^{-n})^2$. The base-four parameter intervals of the cells meeting $U$ cover $\rho^{-1}(U)$, so $\lambda_1^*(\rho^{-1}(U))\le1024\cdot4^{-n}\le1024d^\alpha$. If $d=0$, then $U$ is empty or a singleton, and injectivity of $\rho$ makes its preimage empty or a singleton, of outer measure zero. Countable subadditivity and $\lambda_1^*([0,1])=1$ now give $1\le1024\sum_j(\operatorname{diam}U_j)^\alpha$. Taking the infimum over every such cover and then the small-scale limit yields $\mathcal H^\alpha(K)\ge1/1024$; monotonicity gives $\mathcal H^\alpha(S)\ge1/1024>0$. [F2, F4, F5, F9, algebra]

2.1 For $x\ne y$ on one side, use the deepest cell containing both points. If their first distinct child indices are nonadjacent, the source's cell geometry gives a connecting subarc of diameter at most $3^{-m}$ and $|x-y|\ge3^{-m}/6$, hence ratio at most $6$. If those children are adjacent, refine to the deepest pair of intersecting descendant cells; the connecting subarc lies in their union, has diameter at most $2\cdot3^{-n}$, and the next-level cells containing $x,y$ are separated by at least $3^{-(n+1)}/2$. The ratio is at most $12$. When $x,y$ lie on different sides, the same adjacent-cell estimate at their common vertex gives the same bound. The cited proof of [F3] includes the endpoint configurations and shows that one of the two Jordan arcs can be chosen in each case. Thus $S$ has bounded turning with $M=12$. [F2, F3, step 1.1]

2.2 By [F4], the finite positive $\alpha$-measure gives $\dim_H S=\alpha$; since $\alpha>1$, the same theorem gives $\mathcal H^1(S)=+\infty$. [F4, F6, step 1.3, step 1.4]

3.1 The Jordan curve $S$ has bounded turning by step 2.1, so [F7] makes it a quasicircle. Applying [F8] then proves that $S$ is conformally removable. The exact consuming use of the two unfinished suppliers is the bounded-turning-to-quasicircle implication here and the quasicircle-removability implication here; both remain provisional pending their upstream gates. [F7, F8, step 2.1] ∎
