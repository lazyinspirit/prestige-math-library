---
id: def-truncation-at-a-fixed-level
title: "Zero truncation at a positive level"
kind: definition
status: draft
origin: pipeline
deps: ["def-random-element-and-real-random-variable", "thm-arithmetic-and-lattice-operations-preserve-measurability"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Section 2.2.3, p. 62"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

For a real random variable $X$ and a deterministic level $A>0$, its **zero truncation** is
$$X^{(A)}=X\mathbf1_{\{|X|\le A\}}.$$
The threshold event is measurable because $X$ is measurable and $[-A,A]$ is Borel; its indicator and the product are measurable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]]. Thus $X^{(A)}$ is a real random variable as in [[def-random-element-and-real-random-variable]]. It equals $X$ at both cutoff endpoints and is zero outside the interval. Since $|X^{(A)}|\le A$, for every $0<p<\infty$ its absolute $p$th moment is at most $A^p\mathbb P(\Omega)=A^p$. This is not clipping to the endpoints.
