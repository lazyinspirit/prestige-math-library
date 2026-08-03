---
id: cex-quotient-map-neither-open-nor-closed
kind: counterexample
title: "On $A = ([0,\\infty) \\times \\mathbb{R}) \\cup (\\mathbb{R} \\times \\{0\\})$ the first projection is a quotient map, by the section $x \\mapsto (x,0)$, and is neither open nor closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-quotient-map-is-open, lem-open-or-closed-surjection-is-quotient,
       def-quotient-topology, def-subspace-topology-top, thm-subspace-closure-and-interior,
       lem-product-topology-on-rn, def-product-topology, thm-product-universal-property,
       def-homeomorphism-and-open-maps, def-metrizable-space,
       def-interval, lem-real-line-is-a-metric-space, cor-archimedean-reciprocal,
       lem-of-inverse-positive, cex-projection-is-not-closed, lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: false
short: "a quotient map that is neither open nor closed"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Section (category theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Section_(category_theory)"
    - title: "A quotient map which is neither open nor closed (UC Riverside Math 205A notes)"
      url: "https://math.ucr.edu/~res/math205A/quotmap.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a quotient map is an open map
([[fs-quotient-map-is-open]]), and in the same breath that a quotient map is a
closed map.

**Witness.** In $\mathbb{R}^2$ with its usual topology
([[lem-product-topology-on-rn]]) let

$$A \;:=\; \big([0,\infty) \times \mathbb{R}\big) \cup \big(\mathbb{R} \times \{0\}\big)$$

carry the subspace topology ([[def-subspace-topology-top]]), and let
$q := \pi_0 \restriction A : A \to \mathbb{R}$ be the first projection. Then:

1. $q$ is a **quotient map**, because $s(x) := (x,0)$ is a continuous section:
   $s$ is continuous, takes values in $A$, and $q \circ s = \mathrm{id}_{\mathbb{R}}$
   ([[lem-open-or-closed-surjection-is-quotient]], clause 3).
2. $q$ is **not open**: $U := A \cap (\mathbb{R} \times (0,\infty)) = [0,\infty) \times (0,\infty)$
   is open in $A$ and $q[U] = [0,\infty)$ is not open in $\mathbb{R}$.
3. $q$ is **not closed**: $H^{+} := \{\, (x, 1/x) : x > 0 \,\}$ is closed in
   $\mathbb{R}^2$, hence closed in $A$, and $q[H^{+}] = (0,\infty)$ is not closed
   in $\mathbb{R}$.

## Facts & Assumptions

**Given:** $\mathbb{R}^2$ with the usual topology; the set $A$ above with the subspace topology; $q = \pi_0 \restriction A$; the map $s(x) = (x,0)$; the sets $U$ and $H^{+}$ of the statement.

[A1] $\mathbb{R}^2$ carries the product topology, which is the metric topology of $d_\infty$; the boxes $V \times W$ with $V,W$ open in $\mathbb{R}$ form a basis; projections are continuous ([[lem-product-topology-on-rn]], [[def-product-topology]], [[thm-product-universal-property]], [[def-metrizable-space]]).

[A2] The open sets of $A$ are the traces $O \cap A$ with $O$ open in $\mathbb{R}^2$, and the closed sets of $A$ are the traces of the closed sets ([[def-subspace-topology-top]], [[thm-subspace-closure-and-interior]]).

[L1] A continuous surjection admitting a continuous section is a quotient map ([[lem-open-or-closed-surjection-is-quotient]], clause 3; [[def-quotient-topology]]).

[L2] A map into a binary product is continuous exactly when both components are; restrictions and corestrictions to subspaces of continuous maps are continuous; composites of continuous maps are continuous ([[thm-product-universal-property]], [[def-subspace-topology-top]], [[lem-continuity-is-local-and-pastes]]).

[L3] The repaired hyperbola result proves that $H := \{(x,y) : xy = 1\}$ is closed in $\mathbb{R}^2$ as the preimage of the closed singleton $\{1\}$ under continuous multiplication ([[cex-projection-is-not-closed]]); an intersection of two closed sets is closed.

[L4] $[a,\infty) = \{t : a \le t\}$ and $(a,\infty) = \{t : a < t\}$; a subset of $\mathbb{R}$ is open exactly when each of its points has a bounded open interval around it inside the set, and $(a,\infty)$ is open ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

[L5] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]]).

[L6] $f$ is open when images of open sets are open and closed when images of closed sets are closed ([[def-homeomorphism-and-open-maps]]).

## Counterexample

**Proof technique:** direct.

1.1 $s$ is continuous into $\mathbb{R}^2$, its components being the identity and the constant $0$; its values $(x,0)$ lie in $A$, so its corestriction $s : \mathbb{R} \to A$ is continuous by [L2]. And $q(s(x)) = x$, so $q \circ s = \mathrm{id}_{\mathbb{R}}$. [A1, L2]

1.2 $U = A \cap (\mathbb{R} \times (0,\infty)) = [0,\infty) \times (0,\infty)$: a point of $A$ with positive second coordinate cannot lie on $\mathbb{R} \times \{0\}$, so it lies in $[0,\infty)\times\mathbb{R}$ with second coordinate positive. And $\mathbb{R}\times(0,\infty)$ is open in $\mathbb{R}^2$ by [A1] and [L4], so $U$ is open in $A$ by [A2]. [A1, A2, L4]

1.3 $H^{+} = H \cap \big([0,\infty)\times\mathbb{R}\big)$ is closed in $\mathbb{R}^2$, being an intersection of two closed sets, the second being the complement of the open set $(-\infty,0)\times\mathbb{R}$; here $H^{+} \subseteq H$ has first coordinate positive, since $xy = 1$ forbids $x = 0$. So $H^{+}$ is closed in $A$ by [A2], being $H^{+} \cap A$ with $H^{+} \subseteq A$. [A1, A2, L3, L4]

1.4 $[0,\infty)$ is not open in $\mathbb{R}$: for every $r > 0$ the interval $(-r,r)$ contains $-r/2 < 0$, so no bounded open interval around $0$ lies inside $[0,\infty)$. [L4]

1.5 $(0,\infty)$ is not closed in $\mathbb{R}$: its complement $(-\infty,0]$ is not open, since for every $r > 0$ the interval $(-r,r)$ contains $r/2 > 0$. [L4]

2.1 $q$ is continuous, being a restriction of the continuous $\pi_0$; and it is surjective, since $q(s(x)) = x$ for every $x$. [step 1.1, A1, L2]

2.2 $q[U] = [0,\infty)$: for $x \ge 0$ the point $(x,1)$ lies in $U$, and every point of $U$ has first coordinate in $[0,\infty)$. [step 1.2, L4]

2.3 $q[H^{+}] = (0,\infty)$: for $x > 0$ the point $(x,1/x)$ lies in $H^{+}$, and every point of $H^{+}$ has positive first coordinate. [step 1.3, L5]

3.1 By steps 1.1 and 2.1 with [L1], $q$ is a quotient map. This is claim 1. [step 1.1, step 2.1, L1]

3.2 By steps 1.2, 2.2 and 1.4 the map $q$ carries the open set $U$ to a set that is not open, so $q$ is not open by [L6]. This is claim 2. [step 1.2, step 2.2, step 1.4, L6]

3.3 By steps 1.3, 2.3 and 1.5 the map $q$ carries the closed set $H^{+}$ to a set that is not closed, so $q$ is not closed by [L6]. This is claim 3. [step 1.3, step 2.3, step 1.5, L6]

4.1 Steps 3.1, 3.2 and 3.3 give the three claims, so a quotient map need be neither open nor closed, which refutes the claim. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **What makes $q[U]$ fail to be open is the shape of $A$ near the negative axis.** The set $U = A \cap (\mathbb{R} \times (0,\infty))$ is open in $A$ for the trivial reason that $\mathbb{R} \times (0,\infty)$ is open in $\mathbb{R}^2$; the shape of $A$ has nothing to do with that. What the shape does is fix the image. A point $(x,0)$ with $x < 0$ has $A$-neighbourhoods lying entirely on the horizontal axis, because $A$ contains no point with $x < 0$ and $y \ne 0$, so the axis to the left of the origin is, from inside $A$, a half-line with nothing attached above or below it. Consequently $U$ reaches no first coordinate below $0$ and $q[U] = [0,\infty)$, which contains the boundary point $0$ without containing any neighbourhood of it.

- **All three clauses of [[lem-open-or-closed-surjection-is-quotient]] are needed.** This map satisfies clause 3 and neither of the other two, so the section clause is not redundant; conversely the collapse map of [[fs-quotient-map-is-open]] is closed and not open, and the projection $q \times q$ of [[ex-torus-as-a-quotient-of-the-square]] is open. The three clauses cover genuinely different situations.

- **The failure of closedness is the hyperbola again.** $H^{+}$ is one branch of the closed set of [[cex-projection-is-not-closed]], cut out by intersecting with a closed half-plane; the image loses the point $0$ for exactly the same reason as there.
