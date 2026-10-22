---
id: lem-supported-smooth-field-families-admit-countable-genericity-under-cc
kind: lemma
title: "Supported smooth field families admit countable genericity under Countable Choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-separable-complete-metric-baire-in-zf
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Section4.5, smooth function topology and finite-dimensional local perturbations; supported finite-chart completeness and separable-Baire choice accounting proved locally here"
---

## Statement

Assume Countable Choice. Let $M$ be a closed compact smooth manifold, and consider smooth parameter-dependent vector fields $V_t$ on $M$, $0\le t\le1$, with the smooth topology defined by uniform bounds on every finite derivative order, including parameter derivatives. Let the fixed open subset $Q\subset M\times[0,1]$ contain $M\times([0,\epsilon)\cup(1-\epsilon,1])$ for some $\epsilon>0$. The linear space $\mathcal V$ of such families vanishing on $Q$ is separable and completely metrizable. The same holds for any translate $X^0+\mathcal V$.

Every open subset $\mathcal A$ of this affine space admits an equivalent complete separable metric. Consequently, if $(\mathcal G_j)_{j\ge1}$ is any specified countable family of relatively open dense subsets of $\mathcal A$, their intersection is dense in $\mathcal A$. There is no use of Dependent Choice: the only countable choice here selects a dense sequence in a closed subspace of a given second-countable ambient field space, and the remaining Baire conclusion is the separable theorem proved in ZF.

For example, if $f_t$ and $X^0_t$ are smooth, all critical points lie in the fixed protected open region $Q$, the prescribed fields there are descending, and $df_t(X^0_t)<0$ off the critical locus, then the families in $X^0+\mathcal V$ that remain strictly descending form an open subset. Any specified countable collection of compact finite-flow incidence conditions, once actually proved open and dense in that subset, may therefore be imposed simultaneously. This last assertion assumes those openness and density proofs; it does not manufacture them from a generic function path.

## Statement references

[[thm-separable-complete-metric-baire-in-zf]]

## Facts & Assumptions

**Given:** The compact manifold, parameter interval, protected open set, and the stated smooth topology.

[F1] Smooth partitions of unity and compact-set cutoffs exist under Countable Choice ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F2] A separable complete metric space has the dense-open-intersection Baire property in ZF, with its least-index nested-ball proof, requiring no dependent selections ([[thm-separable-complete-metric-baire-in-zf]]).

## Proof

1.1 A variation vanishing on the prescribed endpoint intervals extends by zero across the identified parameter endpoints, so identify these variations with smooth sections of the pulled-back tangent bundle on the closed compact product $M\times S^1$, vanishing on the corresponding open set. Work first in the ambient space of all smooth sections on that product. Choose finitely many ordinary coordinate boxes with smaller compact boxes covering this product, smooth local frames for the pulled-back tangent bundle and a subordinate smooth partition of unity. Let $\|V\|_r$ be the maximum, in this finite system, of the suprema of all coefficient derivatives of total order at most $r$ on these boxes; enlarge the boxes slightly before fixing them, so overlap transition derivatives are bounded on the smaller boxes. These are separating seminorms and define exactly the stated smooth topology. The metric $$d(V,W)=\sum_{r=0}^\infty2^{-r-1}\min\{1,\|V-W\|_r\}$$ is complete on all smooth field families. Indeed a $d$-Cauchy sequence is Cauchy in every seminorm: for each $r$, the corresponding summand forces $\|V_n-V_m\|_r\to0$. Every derivative coefficient then has a uniform limit. The fundamental theorem of calculus on coordinate line segments shows that a limit derivative is the derivative of the limit of the preceding order, by passing to the limit in the integral formula; repeat in every coordinate and order. Thus the limiting coefficient is smooth. There is no parameter-boundary extension issue: the ambient product has circle parameter, and the eventual variations vanish on a whole neighborhood of the identified endpoint. On overlaps the vector-field transition rules pass to the uniform limits, so the local limits define a global smooth family, and all seminorms converge. This proves completeness without any countable choice of limits: each uniform limit is unique and is defined by its given Cauchy sequence. [F1, given, construct, algebra]

2.1 This ambient metric space has a countable dense subset. Here are actual approximation data. In the finite coordinate decomposition from step1.1 each compactly supported coefficient extends by zero to a Euclidean box. For a fixed derivative order $r$, convolution with a Gaussian of sufficiently small width approximates that coefficient in $C^r$ on the fixed compact box. This follows directly by writing each derivative of the convolution as the average of translated derivatives of the coefficient; uniform continuity controls the small translations and the Gaussian tail has arbitrarily small mass. That Gaussian convolution has a convergent power series with all derivatives uniformly convergent on compact boxes: integrate the exponential Gaussian power series over the fixed compact support, where the series and each fixed derivative are uniformly absolutely convergent. Truncate that series and approximate its finitely many coefficients by rationals. Multiply by the fixed larger chart cutoff and restore the local frame. The finite sum of these chart fields approximates the original family in $C^r$; the error in the finitely many cutoff derivatives is bounded by a fixed multiple of the coefficient error. Using all rational-coefficient polynomials of all finite degrees in these finitely many fixed charts therefore gives one countable family dense for every finite seminorm neighborhood, hence dense in the smooth metric. The countable approximating family is the fixed rational-polynomial family on the circle-product charts; the protected endpoint vanishing is imposed only in the closed subspace of step3.1. Countability uses only finite products and the canonical enumeration of rational finite lists. [F1, step 1.1, construct]

3.1 The subspace $\mathcal V$ is closed, since uniform convergence of the zeroth-order coefficients preserves vanishing at every point of $Q$. Its restricted metric is complete by step1.1. To prove separability without treating arbitrary subspaces as automatically separable in ZF, use the actual countable base of ambient balls obtained from the countable dense set in step2.1 and positive rational radii. For each base member meeting $\mathcal V$, take its nonempty intersection with $\mathcal V$. Countable Choice selects one point from each of these at most countably many nonempty intersections. The selected points form a countable dense set in $\mathcal V$, because every relatively open set contains one such base intersection. Empty intersections are omitted, and the zero family shows that the subspace itself is nonempty. Translation by $X^0$ gives the same complete separable structure on the affine space. This is the only countable selection made in this proof. [F1, step 1.1, step 2.1, construct]

4.1 If $\mathcal A$ is nonempty and open in this affine metric space $S$, put $\delta(X)=\operatorname{dist}_d(X,S\setminus\mathcal A)$, which is positive on $\mathcal A$. If the complement is empty put $\delta=1$. Distance to a nonempty set is one-Lipschitz, by the triangle inequality and taking its defining infimum. The metric $$d_{\mathcal A}(X,Y)=d(X,Y)+|\delta(X)^{-1}-\delta(Y)^{-1}|$$ is complete and induces the relative topology. Its topology agrees with $d$ because $\delta$ and its positive reciprocal are continuous. A $d_{\mathcal A}$-Cauchy sequence has a $d$-limit in $S$ and bounded convergent reciprocal distances. Thus its distances from the complement are bounded below by a positive constant; the limit lies in $\mathcal A$, and its reciprocal distance also converges, giving convergence in $d_{\mathcal A}$. The ambient affine space is second countable by step3.1, and its open subset is separable: intersect its countable dense set with $\mathcal A$, which is dense there because $\mathcal A$ is open. Thus [F2] applies to $\mathcal A$ with this metric and gives the asserted dense intersection. Empty $\mathcal A$ has the vacuous assertion. [F2, step 3.1, construct, algebra]

5.1 In the descending example, $K=(M\times[0,1])\setminus Q$ is compact and contains no critical point. For any strictly descending family $X$ the continuous function $-df_t(X_t)$ therefore has a positive minimum on $K$. Small zeroth-order coefficient changes preserve this strict inequality there. On $Q$ every permitted variation is zero, so the prescribed inequality remains unchanged. Hence the admissible descending families form an open subset of the affine space. If the supplied compact incidence conditions have each been proved relatively open and dense, apply step4.1 to that exact countable list. Its dense intersection retains all protected values and remains strictly descending. The least-index Baire proof in [F2], after the one Countable Choice selection of step3.1, supplies the intersection point without a successor-dependent perturbation recursion. This proves precisely the stated choice and genericity interface. [F1, F2, step 3.1, step 4.1, construct] ∎
