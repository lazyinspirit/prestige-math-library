---
id: def-tor-by-resolving-the-right-module
title: "Tor from a projective resolution of the right module"
kind: definition
status: draft
origin: pipeline
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-projective-resolution-in-an-abelian-category"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For a right $R$-module $N$ with a specified projective resolution
$Q_\bullet\twoheadrightarrow N$ and a left $R$-module $M$, define the
right-resolution construction
$$\operatorname{Tor}^{R,Q}_n(N,M):=H_n(Q_\bullet\otimes_RM).$$
The datum $Q$ remains in the notation until the balance and change-of-resolution
results prove that it may be suppressed.
