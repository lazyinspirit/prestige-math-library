---
id: cex-projection-is-not-closed
kind: counterexample
title: "The hyperbola $\\{(x,y) : xy = 1\\}$ is closed in $\\mathbb{R}^2$ and its image under the first projection is $\\mathbb{R} \\setminus \\{0\\}$, which is not closed"
status: published
origin: session
deps: [fs-projections-are-closed-maps, lem-product-topology-on-rn, thm-product-universal-property,
       def-product-topology, def-metrizable-space, thm-metric-sequential-closure,
       def-metric-convergence, lem-of-inverse-positive, cor-archimedean-reciprocal,
       lem-real-line-is-a-metric-space, def-interval, def-max-min, thm-algebra-of-limits,
       lem-limit-unique, def-sequence, def-homeomorphism-and-open-maps, ex-rn-as-a-product]
justified_by: []
aliases: []
landmark: false
short: "a projection that is not closed"
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
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Hyperbola (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hyperbola"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
pipeline_run: null
---

## Statement refuted

**Refuted:** that the projections of a product with the product topology are
closed maps ([[fs-projections-are-closed-maps]],
[[def-homeomorphism-and-open-maps]]).

**Witness.** In $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ with the product
topology, which is the usual topology
([[lem-product-topology-on-rn]], [[ex-rn-as-a-product]]), take

$$H \;:=\; \{\, (x,y) \in \mathbb{R}^2 : xy = 1 \,\} .$$

Then $H$ is closed in $\mathbb{R}^2$, its image under the first projection is
$\pi_0[H] = \mathbb{R}\setminus\{0\}$, and $\mathbb{R}\setminus\{0\}$ is not
closed in $\mathbb{R}$: the point $0$ lies in its closure and not in it. So
$\pi_0$ is not a closed map, although it is a continuous open surjection
([[thm-product-universal-property]]).

## Facts & Assumptions

**Given:** $\mathbb{R}^2$ with the product topology, the first projection $\pi_0(x,y) = x$, the set $H$ above, and sequences indexed by $\mathbb{N}$ ([[def-sequence]]).

[A1] The product topology on $\mathbb{R}^2$ is the metric topology of $d_\infty((x,y),(x',y')) = \max\{|x-x'|, |y-y'|\}$, and $\mathbb{R}^2$ is therefore metrizable ([[lem-product-topology-on-rn]], [[ex-rn-as-a-product]], [[def-metrizable-space]], [[def-product-topology]]).

[A2] $f$ is a closed map when images of closed sets are closed; every projection is continuous and open ([[def-homeomorphism-and-open-maps]], [[thm-product-universal-property]]).

[L1] In a metric space, $F$ is closed if and only if every sequence in $F$ that converges in the space has its limit in $F$ ([[thm-metric-sequential-closure]], claim 2). The direction used below, from sequentially closed to closed, is the one that spends the Axiom of Countable Choice, as that item records at the step that spends it.

[L2] $p^{(m)} \to p$ in a metric space means that for every rational $\varepsilon > 0$ there is $K$ with $d(p^{(m)},p) < \varepsilon$ for all $m \ge K$; on $\mathbb{R}$ the metric is $|s-t|$ ([[def-metric-convergence]], [[lem-real-line-is-a-metric-space]]).

[L3] $\max S$ is an upper bound for a two-element set $S$ of reals ([[def-max-min]]).

[L4] If $u_m \to u$ and $v_m \to v$ in $\mathbb{R}$ then $u_m v_m \to uv$, and a convergent sequence of reals has exactly one limit ([[thm-algebra-of-limits]], [[lem-limit-unique]]).

[L5] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[cor-archimedean-reciprocal]]), and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[lem-of-inverse-positive]]); $U \subseteq \mathbb{R}$ is open exactly when every point of $U$ has a bounded open interval around it inside $U$ ([[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metrizable-space]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $(p^{(m)})$ be a sequence in $H$ converging to $p = (a,b)$ in $\mathbb{R}^2$, and write $p^{(m)} = (u_m, v_m)$, so $u_m v_m = 1$ for every $m$. [given, A1]

1.2 For $x \ne 0$ one has $(x, 1/x) \in H$, since $x \cdot (1/x) = 1$; and no point $(0,y)$ lies in $H$, since $0 \cdot y = 0 \ne 1$. Hence $\pi_0[H] = \mathbb{R} \setminus \{0\}$. [given]

1.3 The sequence $w_m := 1/(m+1)$ satisfies $w_m \ne 0$ and $w_m \to 0$ in $\mathbb{R}$: given a rational $\eta > 0$, [L5] gives a natural $m_0 \ge 1$ with $1/m_0 < \eta$, and $|w_m - 0| = 1/(m+1) \le 1/m_0 < \eta$ for every $m \ge m_0$. [L5]

2.1 $u_m \to a$ and $v_m \to b$ in $\mathbb{R}$: for a rational $\varepsilon > 0$, [L2] supplies $K$ with $d_\infty(p^{(m)},p) < \varepsilon$ for $m \ge K$, and $|u_m - a| \le d_\infty(p^{(m)},p)$, $|v_m - b| \le d_\infty(p^{(m)},p)$ by [L3]. [step 1.1, A1, L2, L3]

2.2 By step 1.2 and step 1.3 the sequence $(w_m)$ lies in $\mathbb{R}\setminus\{0\}$ and converges in $\mathbb{R}$ to $0 \notin \mathbb{R}\setminus\{0\}$; so $\mathbb{R}\setminus\{0\}$ is not closed in $\mathbb{R}$ by [L1]. [step 1.2, step 1.3, L1]

3.1 By step 2.1 and [L4] the sequence $(u_m v_m)$ converges to $ab$; being constant with value $1$ it also converges to $1$, so $ab = 1$ by uniqueness of limits. Hence $p \in H$. [step 1.1, step 2.1, L4]

4.1 By step 3.1 every sequence in $H$ converging in $\mathbb{R}^2$ has its limit in $H$, so $H$ is closed in $\mathbb{R}^2$ by [L1]. [step 3.1, A1, L1]

5.1 By step 4.1 the set $H$ is closed and by steps 1.2 and 2.2 its image $\pi_0[H]$ is not, so $\pi_0$ is not a closed map by [A2]; by [A2] it is nevertheless a continuous open map, which refutes the claim. [step 1.2, step 2.2, step 4.1, A2] ∎

## Remarks

- **The picture behind the computation.** The two branches of $H$ run away to
  infinity as $x$ approaches $0$, so the first coordinates of points of $H$ come
  arbitrarily close to $0$ while $H$ itself stays away from the whole vertical
  axis: the point of $H$ nearest to $(0,y_0)$ with $y_0 \ne 0$ is at horizontal
  distance about $1/|y_0|$, and $H$ approaches the axis only at unbounded heights.
  Projecting forgets the height, so the first coordinates alone fill
  $\mathbb{R} \setminus \{0\}$ and their limit point $0$ is missing from the
  image; nothing about $H$ being closed prevents that, because the points of $H$
  whose images converge to $0$ escape to infinity instead of converging in
  $\mathbb{R}^2$.

- **Which hypothesis would repair it, and why it is not available.** If the second
  factor were compact, the projection along it would be a closed map, and $H$
  would then have to meet the axis. Compactness is later in the reading order, so
  no repair is stated here; what is recorded is only the failure.

- **The other two conclusions about projections survive untouched.** $\pi_0$ is
  open and surjective ([[thm-product-universal-property]],
  [[ex-rn-as-a-product]]); those hold for every product and are not affected by
  this witness. Openness and closedness are independent properties of a map, as
  [[def-homeomorphism-and-open-maps]] records.
