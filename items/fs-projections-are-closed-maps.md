---
id: fs-projections-are-closed-maps
kind: false-statement
title: "FALSE: the projections of a product are closed maps"
status: published
origin: session
deps: [thm-product-universal-property, lem-product-topology-on-rn, def-product-topology,
       def-homeomorphism-and-open-maps, def-metrizable-space, thm-metric-sequential-closure,
       def-metric-convergence, lem-real-line-is-a-metric-space, def-interval,
       thm-algebra-of-limits, lem-limit-unique, def-sequence, def-max-min]
justified_by: []
forward_refs: [cex-projection-is-not-closed]
aliases: []
landmark: false
short: "projections need not be closed"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Hyperbola (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hyperbola"
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

**Given:** $\mathbb{R}^2 = \prod_{k<2}\mathbb{R}$ with the product topology, the first projection $\pi_0(x,y) = x$, the set $H$ of the statement, and sequences indexed by $\mathbb{N}$ ([[def-sequence]]).

[A1] The product topology on $\mathbb{R}^2$ is the metric topology of $d_\infty((x,y),(x',y')) = \max\{|x-x'|,\ |y-y'|\}$, so $\mathbb{R}^2$ is metrizable ([[lem-product-topology-on-rn]], [[def-metrizable-space]]).

[A2] $f$ is a closed map when images of closed sets are closed ([[def-homeomorphism-and-open-maps]]).

[L1] In a metric space, $F$ is closed if and only if every sequence in $F$ converging in the space has its limit in $F$ ([[thm-metric-sequential-closure]], claim 2). The direction used below, from sequentially closed to closed, is the one that spends the Axiom of Countable Choice, as that item records.

[L2] $p^{(m)} \to p$ in a metric space means $d(p^{(m)},p) \to 0$; unwound, for every rational $\varepsilon > 0$ there is $K$ with $d(p^{(m)},p) < \varepsilon$ for all $m \ge K$ ([[def-metric-convergence]]). On $\mathbb{R}$ the metric is $|s-t|$ ([[lem-real-line-is-a-metric-space]]).

[L3] $\max S$ is an upper bound for a two-element set $S$ of reals ([[def-max-min]]).

[L4] If $u_m \to u$ and $v_m \to v$ in $\mathbb{R}$ then $u_m v_m \to uv$ ([[thm-algebra-of-limits]]); a convergent sequence of reals has exactly one limit ([[lem-limit-unique]]).

[L5] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every point of $U$ has a bounded open interval around it inside $U$; $(a,b) = \{t : a < t < b\}$ ([[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metrizable-space]]).

## Refutation

**Proof technique:** direct.

1.1 Let $(p^{(m)})$ be a sequence in $H$ with $p^{(m)} \to p = (a,b)$ in $\mathbb{R}^2$. For each $m$ write $p^{(m)} = (u_m, v_m)$, so $u_m v_m = 1$. [given, A1]

1.2 For $x \ne 0$ the point $(x, 1/x)$ lies in $H$, since $x \cdot (1/x) = 1$; and $(0,y) \notin H$ for every $y$, since $0 \cdot y = 0 \ne 1$. So $\pi_0[H] = \mathbb{R} \setminus \{0\}$. [given]

1.3 $\mathbb{R} \setminus \{0\}$ is not closed in $\mathbb{R}$: its complement $\{0\}$ is not open, because for every $r > 0$ the interval $(-r, r)$ contains $r/2$, which is nonzero and hence outside $\{0\}$. [L5]

2.1 $u_m \to a$ and $v_m \to b$ in $\mathbb{R}$: given a rational $\varepsilon > 0$, [L2] supplies $K$ with $d_\infty(p^{(m)}, p) < \varepsilon$ for $m \ge K$, and $|u_m - a| \le d_\infty(p^{(m)},p)$ and $|v_m - b| \le d_\infty(p^{(m)},p)$ by [L3]. [step 1.1, A1, L2, L3]

3.1 By step 2.1 and [L4] the sequence $(u_m v_m)$ converges to $ab$; it is the constant sequence with value $1$, which converges to $1$, so $ab = 1$ by uniqueness of limits in [L4]. Hence $p \in H$. [step 1.1, step 2.1, L4]

4.1 By step 3.1 every sequence in $H$ that converges in $\mathbb{R}^2$ has its limit in $H$, so $H$ is closed in $\mathbb{R}^2$ by [L1]. [step 3.1, A1, L1]

5.1 By step 4.1 the set $H$ is closed in $\mathbb{R}^2$, while by steps 1.2 and 1.3 its image $\pi_0[H] = \mathbb{R} \setminus \{0\}$ is not closed in $\mathbb{R}$; so $\pi_0$ is not a closed map by [A2] and the claim is false. [step 1.2, step 1.3, step 4.1, A2] ∎

## Remarks

- **The failure is about unboundedness, not about the hyperbola.** As $x$ runs to
  $0$ through positive values the second coordinate $1/x$ runs away, so the
  points of $H$ approach the vertical axis without meeting it; the image
  "loses" the point $0$ that the closed set never had. A hypothesis that forbids
  the escape, compactness of the *other* factor, is what makes a projection
  closed, and it is not available at this point in the reading order.

- **Open and closed are independent for projections.** Every projection is open
  ([[thm-product-universal-property]]), and this item shows that no projection
  theorem for closed sets follows from it. That is consistent with
  [[def-homeomorphism-and-open-maps]], where an open map that is not closed and a
  closed map that is not open are exhibited on a two-point space.

- **The same witness is worked in full on the companion page** as
  [[cex-projection-is-not-closed]], where the image is computed again and the
  role of the countable choice used in [[thm-metric-sequential-closure]] is
  stated at the step that spends it.
