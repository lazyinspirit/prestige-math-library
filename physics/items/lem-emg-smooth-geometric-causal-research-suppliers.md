---
id: lem-emg-smooth-geometric-causal-research-suppliers
kind: lemma
title: "Causal and Cauchy-surface inputs for smooth electrovacuum developments"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-gr-causal-conditions-and-global-hyperbolicity
  - def-gr-causal-curves-and-reachability
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-gr-normal-neighborhoods-and-position-vectors
  - def-gr-inverse-metric-and-musical-isomorphisms
  - thm-gr-convex-normal-neighborhoods
  - thm-gr-normal-neighborhood-causal-cone
  - thm-gr-auxiliary-complete-riemannian-metric
  - lem-gr-globally-hyperbolic-causal-structure
  - thm-gr-limit-curve-two-endpoints
  - lem-gr-time-separation-maximizers
  - lem-gr-local-cauchy-neighborhood
  - thm-gr-cauchy-surface-implies-globally-hyperbolic
  - thm-gr-volume-time-function
  - thm-gr-smooth-cauchy-temporal-splitting
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  thm-gr-limit-curve-two-endpoints: mathematical-premise
  lem-gr-time-separation-maximizers: mathematical-premise
  lem-gr-local-cauchy-neighborhood: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification, arXiv:1309.7591v3 (2015), Definitions and Theorems 2.6–2.8, printed pp. 10–12, and complete proofs §§3.1–3.3, printed pp. 12–24."
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), complete notes, especially §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. Let $(M,g,N)$ be a time-oriented smooth globally hyperbolic Lorentzian four-manifold with the causal-curve and global-hyperbolicity conventions of [[def-gr-causal-conditions-and-global-hyperbolicity]] and [[def-gr-causal-curves-and-reachability]]. The following interfaces are available for the local and global geometry of smooth electrovacuum developments:

1. Every point has an arbitrarily small strictly convex normal neighborhood. For a future causal curve $\sigma$ in such a neighborhood from $p$, its length satisfies $L_g(\sigma)\le\sqrt{-g_p(v,v)}$, where $v=\exp_p^{-1}(\sigma(1))$. Equality is characterized by the reparametrized radial geodesic when $v$ is future timelike and the curve does not return to $p$ after its start. The future causal and timelike sets are the exponential images of their tangent cones.
2. Each connected component admits a complete auxiliary Riemannian metric. The causal relation is closed, and the causal hull $J^+(K_1)\cap J^-(K_2)$ of two compact sets is compact.
3. Let $h$ be the complete auxiliary metric $h\prime$ of [[thm-gr-auxiliary-complete-riemannian-metric]] clause (b), and let $\alpha_k:[0,b_k]\to M$, $0<b_k<\infty$, be future causal curves parametrized by $h$-arclength, with $\alpha_k(0)\to x$ and $\alpha_k(b_k)\to z$ in $M$. After passage to a subsequence with $b_k\to b\in[0,\infty]$, the bounded-length, zero-length and unbounded-length conclusions of [[thm-gr-limit-curve-two-endpoints]] hold: for $0<b<\infty$ the common-domain reparametrizations converge uniformly to a joining causal curve, for $b=0$ the curves converge uniformly on their varying domains to $x=z$, and for $b=\infty$ the forward and backward tails converge on compact parameter intervals to the respective inextendible curves with the supplier's sequential closure relation. Strong causality excludes the unbounded case when all images lie in one compact set.
4. Lorentzian time separation is finite on causal pairs in a globally hyperbolic spacetime, is attained by a causal geodesic, is upper semicontinuous, and is continuous at timelike-related points, with the degenerate coincident-endpoint case as specified in [[lem-gr-time-separation-maximizers]].
5. Every smooth embedded spacelike hypersurface has a variable-width temporal neighborhood whose intrinsic domain-of-dependence interior is globally hyperbolic with that hypersurface Cauchy. Every globally hyperbolic spacetime also admits a smooth Cauchy temporal splitting as in [[thm-gr-smooth-cauchy-temporal-splitting]].

These are mathematical causal inputs. They add no field equations, empirical assumptions, completeness conclusion for causal geodesics, or uniform time-width assertion for noncompact hypersurfaces.

## Facts & Assumptions
**Given:** Countable Choice and Dependent Choice, a smooth time-oriented Lorentzian metric, and the causal definitions in the Statement.

[F1] [[thm-gr-convex-normal-neighborhoods]] provides strict convex normal neighborhoods and unique contained joining geodesics; [[thm-gr-normal-neighborhood-causal-cone]] gives the causal/timelike exponential-cone characterizations and local length maximality.

[F2] [[thm-gr-auxiliary-complete-riemannian-metric]] constructs a complete Riemannian metric on each connected component. Under strong causality and compact diamonds, [[lem-gr-globally-hyperbolic-causal-structure]] proves closedness of the causal relation and compactness of causal hulls of compact sets.

[F3] [[thm-gr-limit-curve-two-endpoints]] supplies the bounded and unbounded limit-curve conclusions for curves parametrized by auxiliary Riemannian arclength, including its explicit endpoint and strong-causality hypotheses.

[F4] [[lem-gr-time-separation-maximizers]] defines time separation by a supremum of Lorentzian lengths and proves finiteness, attainment, causal-geodesic maximizers, upper semicontinuity, and continuity at timelike-related points; its zero-length coincident endpoint is treated as a degenerate maximizer.

[F5] [[lem-gr-local-cauchy-neighborhood]] gives a variable-width neighborhood of any smooth embedded spacelike hypersurface whose intrinsic domain-of-dependence interior has that hypersurface Cauchy; [[thm-gr-cauchy-surface-implies-globally-hyperbolic]] makes the neighborhood globally hyperbolic. [[thm-gr-smooth-cauchy-temporal-splitting]] supplies a global smooth Cauchy temporal function, complete flow and product splitting on a globally hyperbolic spacetime.

## Proof

1.1 Apply [F1] at each point of $M$, with an arbitrary prescribed open neighborhood to obtain the local normal neighborhood. The first supplier gives the unique geodesic segment and strict convexity; the second applies to that same set and gives exactly the exponential-cone, null-rigidity and length conclusions in clause 1. [given, F1]

1.2 Apply [F2]. The time orientation gives a smooth timelike field needed for its auxiliary Riemannian construction, and the assumed global hyperbolicity supplies strong causality and compact diamonds. The resulting complete auxiliary metric is precisely the metric required by the causal-structure lemma; its conclusions give clause 2. [given, F2, algebra]

1.3 The assumed manifold is globally hyperbolic, so [F4] applies to every fixed endpoint $q$. Its definition of $\tau_q$ as a supremum and its compact-diamond argument give finiteness and attainment; the maximizing-curve argument gives a causal geodesic; its local normal-neighborhood formula gives continuity on timelike-related points, while the endpoint-sequence argument gives upper semicontinuity on compact sets. The $r=q$ case has length zero by definition and is not silently treated as a nondegenerate curve. This proves clause 4 with exactly its endpoint qualifications. [given, F1, F2, F3, F4]

2.1 For the sequence in clause 3, both endpoint limits and the exact auxiliary metric required by [F3] are stipulated. Together with Countable Choice, Dependent Choice and the smooth time-oriented metric, these are all its hypotheses. Apply its positive bounded-length, zero-length and unbounded-length alternatives after taking a subsequence with $b_k\to b$; the zero-length limit is constant and is not called a causal curve with nonzero velocity. Global hyperbolicity supplies strong causality for its compact-imprisonment conclusion. This proves clause 3 with precisely the stated endpoint conditions. [given, step 1.2, F3]

3.1 For any smooth embedded spacelike hypersurface, apply [F5]'s local-neighborhood clause. Its width is a positive function on the hypersurface, and its domain of dependence is intrinsic to that neighborhood; the Cauchy and global-hyperbolicity conclusions are therefore precisely those in clause 5, without compactness or uniform-width assumptions. For any globally hyperbolic spacetime, the temporal-splitting supplier applies under the same choice assumptions and gives its product decomposition. [given, F5] ∎
