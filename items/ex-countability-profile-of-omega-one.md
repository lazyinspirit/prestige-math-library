---
id: ex-countability-profile-of-omega-one
kind: example
title: "Assuming countable choice, $\\omega_1$ is first countable and countably compact but is not separable or Lindelöf"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-first-countable-top, def-separable-space, def-compactness-variants, def-order-topology-on-an-ordinal, thm-countable-subsets-of-omega-one-are-bounded, thm-ordinal-spaces-and-compactness]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
pipeline_run: null
---
## Example
Assume countable choice. Successor ordinals and $0$ are isolated. If
$\alpha<\omega_1$ is a nonzero limit, enumerate the at most countable ordinal
$\alpha$ and take the successive finite suprema of that enumeration; the
result is a countable cofinal sequence, and the corresponding final intervals
$(\beta_n,\alpha]$ form a local base at $\alpha$. Thus $\omega_1$ is first
countable. The published ordinal theorem makes it countably compact.

Every at most countable subset $D\subseteq\omega_1$ is bounded by some
$\beta<\omega_1$, so the nonempty open tail above $\beta$ misses $D$; hence
$\omega_1$ is not separable. The open initial segments
$\{\,[0,\beta] : \beta<\omega_1\,\}$ cover $\omega_1$, but any at most countable
subfamily has bounded union and therefore fails to cover. Thus $\omega_1$ is
not Lindelöf.
