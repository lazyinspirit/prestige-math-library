---
id: cex-box-topology-diagonal-not-continuous
kind: counterexample
title: "The diagonal $x \\mapsto (x,x,\\dots)$ from $\\mathbb{R}$ into $\\mathbb{R}^{\\mathbb{N}}$ is continuous for the product topology and not for the box topology"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-product-universal-property, thm-box-finer-than-product, def-product-topology,
       def-continuous-map-top, thm-continuity-characterisations-top, def-metrizable-space,
       lem-real-line-is-a-metric-space, cor-archimedean-reciprocal, lem-of-inverse-positive,
       def-interval, fs-product-topology-equals-box-topology, def-canonical-natural,
       lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "the box topology breaks the diagonal"
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
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
pipeline_run: null
---

## Statement refuted

**Refuted:** that the box topology has the characteristic property of a product,
that is, that a map into $\prod_i X_i$ with all components continuous is
continuous for the box topology. Equivalently, this exhibits again that the two
topologies differ ([[fs-product-topology-equals-box-topology]]).

**Witness.** Let $P := \mathbb{R}^{\mathbb{N}} = \prod_{k \in \mathbb{N}}\mathbb{R}$
with every factor carrying the usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), and let

$$\Delta : \mathbb{R} \to P, \qquad \Delta(t)_k := t \quad (k \in \mathbb{N})$$

be the **diagonal** map. Every component $\pi_k \circ \Delta$ is the identity of
$\mathbb{R}$, hence continuous. Then $\Delta$ is continuous for the product
topology ([[thm-product-universal-property]], claim 2) and is **not** continuous
for the box topology: the box

$$B \;:=\; \prod_{k \in \mathbb{N}} \Big(-\tfrac{1}{k+1},\ \tfrac{1}{k+1}\Big)$$

is box-open and $\Delta^{-1}[B] = \{0\}$, which is not open in $\mathbb{R}$.

## Facts & Assumptions

**Given:** $P = \prod_{k \in \mathbb{N}}\mathbb{R}$, the diagonal $\Delta$, and the box $B$ above; $1/(k+1)$ abbreviates $1/\iota(k+1)$ ([[def-canonical-natural]]).

[A1] A basis for the box topology is the family of all boxes $\prod_k U_k$ with every $U_k$ open in $\mathbb{R}$ ([[def-product-topology]], [[thm-box-finer-than-product]]).

[A2] A map into a product with the product topology is continuous exactly when all its components are ([[thm-product-universal-property]], claim 2).

[L1] A map of spaces is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b); [[def-continuous-map-top]]).

[L2] $(a,b) = \{s : a < s < b\}$ is open in the usual topology of $\mathbb{R}$, and a subset of $\mathbb{R}$ is open there exactly when each of its points has a bounded open interval around it inside the set ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

[L3] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[cor-archimedean-reciprocal]]); $\iota(k+1) \ge 1 > 0$ and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

## Counterexample

**Proof technique:** direct.

1.1 Each component $\pi_k \circ \Delta$ is the identity map of $\mathbb{R}$, since $(\pi_k \circ \Delta)(t) = \Delta(t)_k = t$; the identity is continuous, its preimages being the sets themselves. [given, L1]

1.2 Each factor of $B$ is a bounded open interval and $1/(k+1) > 0$ by [L3], so $B$ is a box with open factors and hence open in the box topology. [A1, L2, L3]

1.3 $\{0\}$ is not open in $\mathbb{R}$: for every $r > 0$ the interval $(-r,r)$ contains $r/2$, which is different from $0$; so no bounded open interval around $0$ lies inside $\{0\}$. [L2]

2.1 $0 \in \Delta^{-1}[B]$, since $\Delta(0)_k = 0 \in (-1/(k+1),\ 1/(k+1))$ for every $k$ by [L3]. [step 1.2, L2, L3]

2.2 $\Delta$ is continuous for the product topology, by step 1.1 and [A2]. [step 1.1, A2]

3.1 $\Delta^{-1}[B] = \{0\}$: a real $t$ lies in it exactly when $|t| < 1/(k+1)$ for every $k \in \mathbb{N}$; if $t \ne 0$ then $|t| > 0$ and [L3] gives a natural $m \ge 1$ with $1/m < |t|$, and taking $k := m - 1$ contradicts that condition. With step 2.1 this gives the stated equality. [step 2.1, L2, L3]

4.1 By steps 1.2, 3.1 and 1.3 the preimage under $\Delta$ of a box-open set is not open in $\mathbb{R}$, so $\Delta$ is not continuous into $P$ with the box topology, by [L1]; by step 2.2 it is continuous into $P$ with the product topology, although its components are the same in both cases. That refutes the claim. [step 1.2, step 2.2, step 3.1, step 1.3, L1] ∎

## Remarks

- **This is the practical reason the product topology is the default.** The
  characteristic property of [[thm-product-universal-property]] is what makes a
  map into a product easy to build, and the box topology has no such property:
  here every component is the identity, and continuity still fails. Any
  construction that assembles a map coordinate by coordinate would break in the
  box topology.

- **The two topologies are separated by this single map.** If they agreed, the
  same map could not be continuous for one and not for the other; so this item
  reproves the strictness recorded in
  [[fs-product-topology-equals-box-topology]], by a different route and with the
  same box.

- **Nothing here needs a choice principle**, the box $B$ and the map $\Delta$
  being written down by formulas, and the only existential step being the
  Archimedean one of [[cor-archimedean-reciprocal]].
