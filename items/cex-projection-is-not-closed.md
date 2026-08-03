---
id: cex-projection-is-not-closed
kind: counterexample
title: "The hyperbola $\\{(x,y) : xy = 1\\}$ is closed in $\\mathbb{R}^2$ and its image under the first projection is $\\mathbb{R} \\setminus \\{0\\}$, which is not closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-projections-are-closed-maps, lem-product-topology-on-rn, thm-product-universal-property,
       def-metric-continuity,
       thm-metric-continuity-characterisations, lem-of-inverse-positive,
       lem-real-line-is-a-metric-space, def-max-min, lem-of-abs-value,
       def-homeomorphism-and-open-maps, ex-rn-as-a-product]
justified_by: []
aliases: []
landmark: false
short: "a projection that is not closed"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Open and closed maps (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_and_closed_maps"
    - title: "Hyperbola (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hyperbola"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "A quotient map which is neither open nor closed (UC Riverside Math 205A notes)"
      url: "https://math.ucr.edu/~res/math205A/quotmap.pdf"
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

**Given:** $\mathbb{R}^2$ with the product topology, the first projection $\pi_0(x,y) = x$, and the set $H$ above.

[A1] The product topology on $\mathbb{R}^2$ is the metric topology of $d_\infty((x,y),(x',y')) = \max\{|x-x'|, |y-y'|\}$, and $\mathbb{R}^2$ is therefore metrizable ([[lem-product-topology-on-rn]]).

[A2] $f$ is a closed map when images of closed sets are closed; every projection is continuous and open ([[def-homeomorphism-and-open-maps]], [[thm-product-universal-property]]).

[L1] The multiplication map $m : \mathbb{R}^2 \to \mathbb{R}$, $m(x,y) := xy$, is continuous. At $(a,b)$ and for $\varepsilon > 0$, take $$\delta := \min\left\{1,\ \frac{\varepsilon}{|a|+|b|+1}\right\}>0.$$ If $d_\infty((x,y),(a,b))<\delta$, then $|x|<|a|+1$ and $$|xy-ab|\le |x|\,|y-b|+|b|\,|x-a| < (|a|+|b|+1)\delta\le\varepsilon.$$ This is the metric definition of continuity ([[def-metric-continuity]], [[lem-of-abs-value]], [[lem-of-inverse-positive]], [[def-max-min]]).

[L2] The singleton $\{1\}$ is closed in $\mathbb{R}$: the open interval of radius $|t-1|/2$ about any $t\ne1$ avoids $1$. A continuous map of metric spaces has closed preimages of closed sets ([[lem-real-line-is-a-metric-space]], [[thm-metric-continuity-characterisations]], clause (c)).

[L3] $U \subseteq \mathbb{R}$ is open exactly when every point of $U$ has a bounded open interval around it inside $U$ ([[lem-real-line-is-a-metric-space]]).

## Counterexample

**Proof technique:** direct.

1.1 Since $H = m^{-1}[\{1\}]$, [L1] and [L2] show that $H$ is closed in $\mathbb{R}^2$. [A1, L1, L2]

1.2 For $x \ne 0$ one has $(x, 1/x) \in H$, since $x \cdot (1/x) = 1$; and no point $(0,y)$ lies in $H$, since $0 \cdot y = 0 \ne 1$. Hence $\pi_0[H] = \mathbb{R} \setminus \{0\}$. [given]

1.3 The set $\mathbb{R}\setminus\{0\}$ is not closed: its complement $\{0\}$ is not open, because every interval $(-r,r)$ with $r>0$ contains the nonzero point $r/2$. [L3]

2.1 By step 1.1 the set $H$ is closed and by steps 1.2 and 1.3 its image $\pi_0[H]$ is not, so $\pi_0$ is not a closed map by [A2]; by [A2] it is nevertheless a continuous open map, which refutes the claim. [step 1.1, step 1.2, step 1.3, A2] ∎

## Remarks

- **The picture behind the computation.** The two branches of $H$ run away to infinity as $x$ approaches $0$, so the first coordinates of points of $H$ come arbitrarily close to $0$ while $H$ itself stays away from the whole vertical axis: the point of $H$ nearest to $(0,y_0)$ with $y_0 \ne 0$ is at horizontal distance about $1/|y_0|$, and $H$ approaches the axis only at unbounded heights. Projecting forgets the height, so the first coordinates alone fill $\mathbb{R} \setminus \{0\}$ and their limit point $0$ is missing from the image; nothing about $H$ being closed prevents that, because the points of $H$ whose images converge to $0$ escape to infinity instead of converging in $\mathbb{R}^2$.

- **Which hypothesis would repair it, and why it is not available.** If the second factor were compact, the projection along it would be a closed map, and $H$ would then have to meet the axis. Compactness is later in the reading order, so no repair is stated here; what is recorded is only the failure.

- **The other two conclusions about projections survive untouched.** $\pi_0$ is open and surjective ([[thm-product-universal-property]], [[ex-rn-as-a-product]]); those hold for every product and are not affected by this witness. Openness and closedness are independent properties of a map, as [[def-homeomorphism-and-open-maps]] records.
