---
id: ex-qftx-n1-wess-zumino-cubic-f-potential
kind: example
title: Cubic one-field Wess–Zumino F-term potential
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions-examples
deps:
  - post-qftx-n1-wess-zumino-model
  - pthm-qftx-n1-f-term-potential
dependency_roles:
  post-qftx-n1-wess-zumino-model: physical-assumption
  pthm-qftx-n1-f-term-potential: physical-result
proof_strategy: direct
physical_scope: "A one-field classical rigid N=1 Wess–Zumino model with canonical Kähler metric and cubic superpotential, used to illustrate the F-term elimination formula. No quantum, empirical, or particle-spectrum claim is asserted."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§3.2, printed pp. 22–24: polynomial superpotentials and algebraic elimination of chiral auxiliary fields."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§4.3, printed pp. 21–22: the one-field Wess–Zumino action and auxiliary scalar potential."
verification:
  precheck: pending
---

## Example

Take one chiral field with canonical Kähler potential $K(\bar\phi,\phi)=\bar\phi\phi$ and holomorphic superpotential $W(\phi)=\tfrac12m\phi^2+\tfrac16y\phi^3$, where $m\in\mathbb C$ has mass dimension one and $y\in\mathbb C$ is dimensionless. For a smooth compactly supported scalar component $\phi:M\to\mathbb C$, the auxiliary equation and F-term potential are

$$F=-\overline{m\phi+\tfrac12y\phi^2},\qquad V_F=\left|m\phi+\tfrac12y\phi^2\right|^2.$$

This is a classical model calculation, not an empirical claim or a quantum effective potential.

## Example references

[Stephen P. Martin, *A Supersymmetry Primer*, §3.2](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §4.3](https://arxiv.org/pdf/hep-th/0101055).

[[post-qftx-n1-wess-zumino-model]]

[[pthm-qftx-n1-f-term-potential]]

## Facts & Assumptions

**Given:** The one-field canonical model and $W(\phi)$ in the Example.

[A1] [[post-qftx-n1-wess-zumino-model]]: the canonical Kähler choice has $g_{\phi\bar\phi}=1$ and its chiral auxiliary sector is $F\bar F+FW'(\phi)+\bar F\overline{W'(\phi)}$.

[F1] [[pthm-qftx-n1-f-term-potential]]: for a positive Kähler metric, $F=-g^{\phi\bar\phi}\overline{W'(\phi)}$ and $V_F=g^{\phi\bar\phi}W'(\phi)\overline{W'(\phi)}$.

## Verification
**Given:** [A1], [F1], and the polynomial superpotential in the Example.

1.1 Differentiate $W(\phi)=\tfrac12m\phi^2+\tfrac16y\phi^3$ to obtain $W'(\phi)=m\phi+\tfrac12y\phi^2$. [given, algebra]

2.1 Substitute $g_{\phi\bar\phi}=g^{\phi\bar\phi}=1$ and the derivative from step 1.1 into [F1]. This gives $F=-\overline{m\phi+\tfrac12y\phi^2}$ and $V_F=|m\phi+\tfrac12y\phi^2|^2$, as stated. [A1, F1, step 1.1, algebra] ∎
