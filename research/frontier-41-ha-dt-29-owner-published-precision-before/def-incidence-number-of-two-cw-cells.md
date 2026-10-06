---
id: def-incidence-number-of-two-cw-cells
kind: definition
title: Incidence number of two CW cells
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oriented-cellular-chain-group, def-skeleta-cw-subcomplex-and-relative-cw-complex]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Definition

For $n\ge2$ and oriented cells $e^n_\alpha$ and $e^{n-1}_\beta$, collapse the complement of $e^{n-1}_\beta$ in $X^{n-1}$ and compose the attaching map of $e^n_\alpha$ with the resulting quotient to $S^{n-1}$. Its induced endomorphism of oriented $\widetilde H_{n-1}(S^{n-1};\mathbb Z)$ is multiplication by a unique integer, denoted $[e^n_\alpha:e^{n-1}_\beta]$.

For $n=1$, orient the characteristic interval of $e^1_\alpha$ from $-1$ to $+1$ and, for a vertex $v=e^0_\beta$, set
$$[e^1_\alpha:v]=\mathbf 1_{\{\chi_\alpha(+1)=v\}}-\mathbf 1_{\{\chi_\alpha(-1)=v\}}.$$
Thus an oriented edge contributes its terminal vertex minus its initial vertex, and a loop with both endpoints at one vertex has incidence number zero there.
