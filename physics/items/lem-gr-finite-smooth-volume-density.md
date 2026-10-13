---
id: lem-gr-finite-smooth-volume-density
kind: lemma
title: "Existence of a positive smooth volume density of total mass one on a smooth Lorentzian four-manifold"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: constructive
deps: [def-gr-smooth-lorentzian-objects, def-borel-measurable-nonnegative-density-on-a-manifold, def-countable-chart-gluing-of-a-nonnegative-density-measure, def-smooth-manifold, def-smooth-partition-of-unity-subordinate-to-an-open-cover, cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover, def-gr-metric-volume-form-and-current-flux, thm-chart-gluing-defines-a-countably-additive-borel-density-measure, thm-density-measure-is-independent-of-the-chart-gluing, thm-density-measure-integration-agrees-with-smooth-density-integration, thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls, cor-integral-over-a-null-set-vanishes, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-monotone-convergence-for-the-integral, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets, def-countable-choice, lem-coordinate-balls-form-a-basis-of-a-topological-manifold]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-borel-measurable-nonnegative-density-on-a-manifold: mathematical-premise
  def-countable-chart-gluing-of-a-nonnegative-density-measure: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-smooth-partition-of-unity-subordinate-to-an-open-cover: mathematical-premise
  cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  thm-chart-gluing-defines-a-countably-additive-borel-density-measure: mathematical-premise
  thm-density-measure-is-independent-of-the-chart-gluing: mathematical-premise
  thm-density-measure-integration-agrees-with-smooth-density-integration: mathematical-premise
  thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure: mathematical-premise
  cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-coordinate-balls-form-a-basis-of-a-topological-manifold: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): the volume function construction (partition of unity, finite positive smooth density and normalization), proof of Theorem 2.11.1, printed pp. 57-58"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): the volume measure in the proof that a Cauchy surface implies global hyperbolicity, section 6.6"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $(M,g,N)$ be a nonempty time-oriented smooth
Lorentzian four-manifold ([[def-gr-smooth-lorentzian-objects]]) with the
metric volume coefficient $w=\sqrt{|\det(g_{ab})|}$ of
[[def-gr-metric-volume-form-and-current-flux]] clause (a) in charts. Then
there is a positive smooth density $r$ on $M$ in the following sense: in the
coefficient formulation of
[[def-borel-measurable-nonnegative-density-on-a-manifold]], $r$ is the
nonnegative density whose chart coefficients are smooth functions, and
$r>0$ at every point. Its glued density measure
$\mu:=\mu_r$ of [[def-countable-chart-gluing-of-a-nonnegative-density-measure]]
and [[thm-chart-gluing-defines-a-countably-additive-borel-density-measure]]
satisfies:

**(a)** $\mu(M)=1$, and $\mu$ is a compact-finite, locally finite,
$\sigma$-finite regular Borel measure;

**(b)** $\mu(O)>0$ for every nonempty open $O\subseteq M$;

**(c)** local absolute continuity. For every chart $(V,y)$ of $M$ and every
Borel set $E\subseteq V$ whose image $y(E)$ is Lebesgue null in
$\mathbb R^4$, one has $\mu(E)=0$.

## Facts & Assumptions

**Given:** A nonempty time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and $\mathrm{AC}_\omega$.

[L1] $M$ is a smooth four-manifold: Hausdorff, second countable, locally Euclidean, and coordinate balls form a basis; consequently there is a countable open cover by relatively compact coordinate charts, and for every such cover there is a smooth partition of unity subordinate to it, locally finite and with values in $[0,1]$ summing to one ([[def-smooth-manifold]], [[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]], [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]], [[cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover]], [[def-countable-choice]]).

[L2] Densities as coefficients: a nonnegative density on $M$ assigns to every chart a Borel coefficient taking values in $[0,\infty]$ and obeying the absolute-Jacobian overlap law; products of coefficients with nonnegative smooth functions and locally finite sums obey the same law, so the product of a nonnegative smooth function with a density and every locally finite sum of densities are again densities; a density is smooth when all its chart coefficients are smooth ([[def-borel-measurable-nonnegative-density-on-a-manifold]]). In arbitrary overlapping charts with transition $x=\varphi\circ y$, tensor transformation gives $g_y=(D\varphi)^T(g_x\circ\varphi)D\varphi$, hence $\sqrt{|\det g_y|}=|\det D\varphi|\sqrt{|\det(g_x\circ\varphi)|}$. Thus the coefficients $w=\sqrt{|\det g_{ab}|}$ obey the density overlap law and define a positive smooth density without requiring an orientation. This is a determinant identity; the oriented volume-form assertion is not used ([[def-gr-metric-volume-form-and-current-flux]] clause (a) for the coefficient formula).

[L3] Gluing and measure: a nonnegative density together with a countable locally finite chart cover and a subordinate smooth partition of unity defines a countably additive nonnegative Borel measure $\mu_r$ by the displayed chart formula, independent of the cover and partition; for a positive smooth density $\mu_r$ is finite on compact sets, locally finite and $\sigma$-finite, and regular Borel ([[def-countable-chart-gluing-of-a-nonnegative-density-measure]], [[thm-chart-gluing-defines-a-countably-additive-borel-density-measure]], [[thm-density-measure-is-independent-of-the-chart-gluing]], [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]).

[L4] Positivity: for a positive smooth density $\mu_r(O)>0$ for every nonempty open $O$, and $r>0$ on a nonempty open set means the coefficient in any chart meeting that set is positive on a nonempty open subset of the chart image ([[cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L5] Chart formula: for a nonnegative Borel $f$ and any chart partition $(x_i,\varphi_i)$ one has $\int_Mf\,d\mu_r=\sum_i\int_{x_i(U_i)}(\varphi_ifr)_{x_i}\,d\lambda_4$, with $0\cdot\infty=0$; in particular the measure is additive over finite chart covers and the map $r\mapsto\mu_r$ is positively homogeneous: $\mu_{cr}=c\,\mu_r$ for $c>0$ ([[thm-density-measure-integration-agrees-with-smooth-density-integration]]).

[L6] Finiteness and convergence: a bounded Borel function supported in a coordinate box has finite Lebesgue integral, its integral over a Lebesgue-null Borel set vanishes, and the integral of a locally finite sum of nonnegative integrands is the sum of the integrals; a nonnegative measurable function with vanishing integral vanishes almost everywhere, and a $C^1$ diffeomorphism between open subsets of $\mathbb R^4$ carries Lebesgue-null sets to Lebesgue-null sets ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-integral-over-a-null-set-vanishes]], [[thm-monotone-convergence-for-the-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]]).

## Proof

**Proof technique:** constructive.

1.1 (A countable cover adapted to the metric.) By [L1] choose a countable cover $\{U_i\}_{i\ge1}$ of $M$ by relatively compact coordinate charts $(U_i,x_i)$ and a smooth partition of unity $\{\rho_i\}$ subordinate to it, so that $\rho_i$ has compact support in $U_i$, only finitely many $\rho_i$ are nonzero near any point, and $\sum_i\rho_i=1$. For each $i$ let $\delta_i$ be the density supported in $U_i$ whose coefficient in the chart $x_i$ is $\rho_i\cdot w$, where $w>0$ is the smooth metric volume coefficient of [L2]; then $\delta_i\ge0$, it is a smooth density, and $\delta_i>0$ on $\{\rho_i>0\}$ whenever this set is nonempty. [L1, L2, construct]

2.1 (The masses are finite and the weights positive.) Fix $i$. Since $\operatorname{supp}\delta_i$ is compact, cover it by finitely many relatively compact coordinate balls and let $\{\theta_1,\dots,\theta_m\}$ be a subordinate finite smooth partition of unity. Applying the chart formula of [L5] with that finite cover exhibits $\mu_{\delta_i}(M)$ as a finite sum of Lebesgue integrals of bounded Borel functions supported in boxes; each term is finite by [L6], so $d_i:=\mu_{\delta_i}(M)<\infty$. Zero partition terms are allowed, so $d_i$ may be zero. Put $c_i:=(1+d_i)^{-1}\in(0,1]$. [step 1.1, L3, L4, L5, L6]

3.1 (The normalized density.) Define $$r_0:=\sum_{i\ge1}2^{-i}c_i\,\delta_i .$$ Only finitely many $\delta_i$ are nonzero near any point, so $r_0$ is a smooth density by [L2]; it is strictly positive at every point because in the chart of a point $q$ its coefficient is $w(q)\sum_i2^{-i}c_i\rho_i(q)$ with $w(q)>0$ and some $\rho_i(q)>0$. Applying the chart formula to the locally finite sum and using [L6], $$\mu_{r_0}(M)=\sum_{i\ge1}2^{-i}c_i\,d_i\le\sum_{i\ge1}2^{-i}=1,$$ and $\mu_{r_0}(M)>0$ by [L4], since $M$ is nonempty and $r_0$ is strictly positive. Hence $C:=\mu_{r_0}(M)\in(0,1]$. Define $r:=r_0/C$ and $\mu:=\mu_r$; by the homogeneity of [L5], $\mu(M)=\mu_{r_0}(M)/C=1$. [step 1.1, step 2.1, L2, L3, L4, L5, L6]

4.1 (The properties of $\mu$.) By step 3.1, $\mu(M)=1$; since $r$ is a positive smooth density, [L3] makes $\mu$ compact-finite, locally finite, $\sigma$-finite and regular Borel. This is (a). Property (b) is the positivity clause of [L4]. For (c), let $(V,y)$ be a chart and let $E\subseteq V$ be Borel with $y(E)$ Lebesgue null. By the chart formula of [L5] applied with a partition whose first chart is $(V,y)$ and using $0\cdot\infty=0$, $\mu(E)$ is the sum of Lebesgue integrals of nonnegative Borel coefficients over $y(E)$ and over the images of the remaining charts, and each of those images is null in its own chart because the chart transitions are $C^1$ diffeomorphisms on overlaps and carry null sets to null sets [L6]; each integral vanishes by [L6], so $\mu(E)=0$. [step 3.1, L3, L4, L5, L6]

5.1 (Conclusion.) The positive smooth density $r$ and its measure $\mu=\mu_r$ satisfy (a), (b) and (c) by step 4.1, and the construction used only countably many choices through the cover and partition of step 1.1 and the finite selections of step 2.1. [step 3.1, step 4.1, given, discharge-construct] ∎

## Remarks

- **Why the weights $2^{-i}c_i$.** Without finite weights a positive smooth density can have infinite total mass; the weights make $\mu_{r_0}(M)\le1$ while keeping every term positive, and the $c_i$ control the individual total masses. The construction uses $\mathrm{AC}_\omega$ only through the existence of the countable partition of unity and the finite selections inside compactly supported pieces.
- **The measure is not canonical.** Any two measures produced this way are mutually absolutely continuous with positive smooth density ratio, but the normalization depends on the chosen cover and partition. Only the properties (a)-(c) are used downstream, and they are stable under replacing $r$ by $\lambda r$, $\lambda>0$.
- **Use.** The measure $\mu$ is the finite volume underlying [[lem-gr-chronological-volume-continuity]] and the volume time function of [[thm-gr-volume-time-function]]; clause (c) is what makes achronal boundaries and other local Lipschitz graphs null via [[lem-gr-achronal-boundaries-lipschitz-graphs]] clause (d).
