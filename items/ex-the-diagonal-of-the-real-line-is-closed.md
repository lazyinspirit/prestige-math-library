---
id: ex-the-diagonal-of-the-real-line-is-closed
kind: example
title: "The diagonal of $\\mathbb{R}$ is closed in $\\mathbb{R}^2$, computed from the product basis"
status: draft
origin: session
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-product-topology, lem-product-topology-on-rn, lem-real-line-is-a-metric-space,
       def-metrizable-space, def-hausdorff-space, def-interval,
       thm-closure-characterisation-top, def-topology-basis-subbasis,
       lem-of-triangle-inequality, def-abs-value]
justified_by: []
aliases: []
landmark: false
short: "the diagonal of the real line is closed"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Give $\mathbb{R}$ its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]) and let $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$
carry the product topology ([[def-product-topology]],
[[lem-product-topology-on-rn]]). Then the diagonal
([[def-the-diagonal-of-a-space]])

$$\Delta_{\mathbb{R}} \;=\; \{\, (t,t) : t \in \mathbb{R} \,\}$$

is **closed** in $\mathbb{R}^2$, and the box that separates a point
$(a,b) \notin \Delta_{\mathbb{R}}$ from it may be written down:

$$(a - r, a + r) \times (b - r, b + r), \qquad r := \tfrac{1}{2}|a - b| > 0 .$$

Nothing here appeals to the general criterion; the computation is carried out
against the product basis directly. It agrees with
[[thm-hausdorff-iff-the-diagonal-is-closed]], $\mathbb{R}$ being Hausdorff
([[def-hausdorff-space]], [[def-metrizable-space]]), and the point of writing it
out is to show what the criterion's abstract box is in this case: the two open
intervals of half the distance between the coordinates.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, $\mathbb{R}^2$ with the product topology, and $\Delta_{\mathbb{R}} = \{\, z \in \mathbb{R}^2 : z_0 = z_1 \,\}$.

[A1] Every bounded open interval is open in $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open in $\mathbb{R}$ form a basis for the product topology on $\mathbb{R}^2$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[lem-product-topology-on-rn]]).

[A3] The absolute value satisfies $|u + v| \le |u| + |v|$, whence $|a - b| = |(a - t) + (t - b)| \le |a - t| + |t - b|$ for all reals $a, b, t$ ([[lem-of-triangle-inequality]], [[def-abs-value]]).

[L1] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

## Verification

**Proof technique:** direct.

1.1 Let $z = (a,b) \in \mathbb{R}^2$ with $z \notin \Delta_{\mathbb{R}}$, so $a \ne b$ and $r := |a-b|/2 > 0$. [given]

2.1 The set $B := (a - r, a + r) \times (b - r, b + r)$ is a basic open set of $\mathbb{R}^2$ containing $z$. [step 1.1, A1, A2]

3.1 $B \cap \Delta_{\mathbb{R}} = \varnothing$: a point of the intersection is of the form $(t,t)$ with $|t - a| < r$ and $|t - b| < r$, whence $|a - b| \le |a - t| + |t - b| < 2r = |a-b|$, which is impossible. [step 1.1, step 2.1, A3]

4.1 By [L1] no $z \notin \Delta_{\mathbb{R}}$ lies in $\overline{\Delta_{\mathbb{R}}}$, so $\overline{\Delta_{\mathbb{R}}} = \Delta_{\mathbb{R}}$ and $\Delta_{\mathbb{R}}$ is closed in $\mathbb{R}^2$. [step 1.1, step 2.1, step 3.1, L1] ∎

## Remarks

- **The radius $|a-b|/2$ is exactly the Hausdorff separation of $a$ and $b$ in $\mathbb{R}$, and that is not a coincidence.** The proof of [[thm-hausdorff-iff-the-diagonal-is-closed]] builds its box out of a pair of disjoint open sets separating the two coordinates; here that pair is $(a-r, a+r)$ and $(b-r, b+r)$, the two balls of radius half the distance which the usual metric supplies.

- **The product topology on $\mathbb{R}^2$ is the topology of the usual metrics on it**, so the computation above may be read equally as a statement about boxes or about balls ([[lem-product-topology-on-rn]]); the box form is used because it is what the criterion tests.
