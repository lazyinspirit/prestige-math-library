---
id: fs-projections-are-closed-maps
kind: false-statement
title: "FALSE: the projections of a product are closed maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-product-universal-property, lem-product-topology-on-rn, def-product-topology,
       def-homeomorphism-and-open-maps,
       def-metric-continuity, thm-metric-continuity-characterisations,
       lem-real-line-is-a-metric-space, lem-of-abs-value,
       lem-of-inverse-positive, def-max-min]
justified_by: []
forward_refs: [cex-projection-is-not-closed]
aliases: []
landmark: false
short: "projections need not be closed"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Hyperbola (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hyperbola"
    - title: "A quotient map which is neither open nor closed (UC Riverside Math 205A notes)"
      url: "https://math.ucr.edu/~res/math205A/quotmap.pdf"
pipeline_run: null
---

## Statement

**False claim:** every projection $\pi_j : \prod_i X_i \to X_j$ of a product with
the product topology is a closed map, that is, carries closed subsets of the
product to closed subsets of $X_j$
([[def-product-topology]], [[def-homeomorphism-and-open-maps]]).

What is true is the corresponding statement for *open* sets: every projection is
an open map ([[thm-product-universal-property]], claim 3). The claim above fails
already for the binary product $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$,
whose product topology is the usual one ([[lem-product-topology-on-rn]]). The
witness is the hyperbola

$$H \;:=\; \{\, (x,y) \in \mathbb{R}^2 : xy = 1 \,\} ,$$

which is closed in $\mathbb{R}^2$ while $\pi_0[H] = \mathbb{R} \setminus \{0\}$
is not closed in $\mathbb{R}$.

## Facts & Assumptions

**Given:** $\mathbb{R}^2 = \prod_{k<2}\mathbb{R}$ with the product topology, the first projection $\pi_0(x,y) = x$, and the set $H$ of the statement.

[A1] The product topology on $\mathbb{R}^2$ is the metric topology of $d_\infty((x,y),(x',y')) = \max\{|x-x'|,\ |y-y'|\}$, so $\mathbb{R}^2$ is metrizable ([[lem-product-topology-on-rn]]).

[A2] $f$ is a closed map when images of closed sets are closed ([[def-homeomorphism-and-open-maps]]).

[L1] The multiplication map $m : \mathbb{R}^2 \to \mathbb{R}$, $m(x,y) := xy$, is continuous. Indeed, at $(a,b)$ and for $\varepsilon > 0$, put $$\delta := \min\left\{1,\ \frac{\varepsilon}{|a|+|b|+1}\right\}>0.$$ If $d_\infty((x,y),(a,b))<\delta$, then $|x|<|a|+1$ and $$|xy-ab|\le |x|\,|y-b|+|b|\,|x-a| < (|a|+|b|+1)\delta\le\varepsilon.$$ This is the metric definition of continuity ([[def-metric-continuity]], [[lem-of-abs-value]], [[lem-of-inverse-positive]], [[def-max-min]]).

[L2] The singleton $\{1\}$ is closed in $\mathbb{R}$: if $t\ne1$, the open interval of radius $|t-1|/2$ about $t$ avoids $1$. A continuous map of metric spaces has closed preimages of closed sets ([[lem-real-line-is-a-metric-space]], [[thm-metric-continuity-characterisations]], clause (c)).

[L3] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every point of $U$ has a bounded open interval around it inside $U$; $(a,b) = \{t : a < t < b\}$ ([[lem-real-line-is-a-metric-space]]).

## Refutation

**Proof technique:** direct.

1.1 Since $H = m^{-1}[\{1\}]$, [L1] and [L2] show that $H$ is closed in $\mathbb{R}^2$. [A1, L1, L2]

1.2 For $x \ne 0$ the point $(x, 1/x)$ lies in $H$, since $x \cdot (1/x) = 1$; and $(0,y) \notin H$ for every $y$, since $0 \cdot y = 0 \ne 1$. So $\pi_0[H] = \mathbb{R} \setminus \{0\}$. [given]

1.3 $\mathbb{R} \setminus \{0\}$ is not closed in $\mathbb{R}$: its complement $\{0\}$ is not open, because for every $r > 0$ the interval $(-r,r)$ contains $r/2$, which is nonzero and hence outside $\{0\}$. [L3]

2.1 By step 1.1 the set $H$ is closed in $\mathbb{R}^2$, while by steps 1.2 and 1.3 its image $\pi_0[H] = \mathbb{R} \setminus \{0\}$ is not closed in $\mathbb{R}$; so $\pi_0$ is not a closed map by [A2] and the claim is false. [step 1.1, step 1.2, step 1.3, A2] ∎

## Remarks

- **The failure is about unboundedness, not about the hyperbola.** As $x$ runs to $0$ through positive values the second coordinate $1/x$ runs away, so the points of $H$ approach the vertical axis without meeting it; the image "loses" the point $0$ that the closed set never had. A hypothesis that forbids the escape, compactness of the *other* factor, is what makes a projection closed, and it is not available at this point in the reading order.

- **Open and closed are independent for projections.** Every projection is open ([[thm-product-universal-property]]), and this item shows that no projection theorem for closed sets follows from it. That is consistent with [[def-homeomorphism-and-open-maps]], where an open map that is not closed and a closed map that is not open are exhibited on a two-point space.

- **The same witness is worked in full on the companion page** as [[cex-projection-is-not-closed]], where the image is computed again and the same choice-free closed-preimage argument establishes that the hyperbola is closed.
