---
id: def-it-channel-dispersion
kind: definition
title: Conditional information variance and DMC dispersion
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-discrete-memoryless-channel-information-capacity, def-discrete-memoryless-channel-information-density]
justified_by: [lem-it-dmc-dispersion-attains-minimum]
aliases: []
axiom_use: No choice axiom is used; all conditional variances are finite sums on the charged support.
provenance:
  statement: literature-derived
  proof: not-applicable
proof_obligations:
  - Define the conditional variance for every finite-DMC input law with explicit support conventions.
  - Define the CAID dispersion minimum and maximum and leave attainment to the justified local lemma.
sources:
  references:
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: §IV, printed pp. 132–134 / PDF pp. 10–12; dispersion and normal-approximation conventions.
    - title: Masahito Hayashi, Information Spectrum Approach to Second-Order Coding Rate in Channel Coding
      url: https://arxiv.org/pdf/0801.2242
      locator: §III and Theorems 1–2; conditional information variance and multiple capacity-achieving input laws.
---

## Definition

Let $P$ be an input probability vector for the finite DMC $W$, and let $P_Y(y)=\sum_xP(x)W(y\mid x)$. On cells with $P(x)W(y\mid x)>0$, define $\imath_P(x;y)=\ln[W(y\mid x)/P_Y(y)]$; the denominator is then positive. Put
$$V(P,W):=\sum_{x:P(x)>0}P(x)\operatorname{Var}_{W(\cdot\mid x)}[\imath_P(x;Y)].$$
Let $C(W)=\max_P I(P,W)$ and $\Pi(W)=\{P:I(P,W)=C(W)\}$, the nonempty set of capacity-achieving input distributions. Define
$$V_{\min}(W):=\min_{P\in\Pi(W)}V(P,W),\qquad V_{\max}(W):=\max_{P\in\Pi(W)}V(P,W).$$
The local attainment lemma [[lem-it-dmc-dispersion-attains-minimum]] proves these extrema exist. Dispersion is measured in nats squared. In the normal-approximation theorem on this page only the fixed range $0<\epsilon<1/2$ and premise $V_{\min}(W)>0$ are used.
