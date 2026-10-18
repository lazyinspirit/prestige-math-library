---
id: lem-it-dmc-caid-conditional-variance-identity
kind: lemma
title: A CAID's information-density variance equals its conditional dispersion
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-channel-dispersion, lem-it-dmc-capacity-output-law-is-unique, lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound, lem-discrete-memoryless-channel-capacity-is-attained, def-discrete-memoryless-channel-information-capacity, def-it-finite-mutual-information]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; this is a finite law-of-total-variance calculation.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Show each row used by a CAID has divergence exactly C(W), not merely at most C(W).
  - Apply the finite conditional variance decomposition with the common conditional mean.
sources:
  references:
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: §IV, printed pp. 132–134 / PDF pp. 10–12; conditional information variance at a capacity-achieving input.
    - title: Masahito Hayashi, Information Spectrum Approach to Second-Order Coding Rate in Channel Coding
      url: https://arxiv.org/pdf/0801.2242
      locator: §III, equations defining $V_{P,W}$ and Theorems 1–2.
---

## Statement

For every CAID $P\in\Pi(W)$, let $Q^*=PW$ and let $(X,Y)\sim P(x)W(y\mid x)$. For every $x$ with $P(x)>0$,
$$\mathbb E[\ln(W(Y\mid x)/Q^*(Y))\mid X=x]=C(W),$$
and
$$\operatorname{Var}[\ln(W(Y\mid X)/Q^*(Y))]=V(P,W).$$

## Facts & Assumptions

**Given:** A finite DMC and a capacity-achieving input law $P$.

[F1] [[lem-discrete-memoryless-channel-capacity-is-attained]]: $P$ is a maximizer of $I(P,W)$ and $I(P,W)=C(W)$.

[F2] [[lem-it-dmc-capacity-output-law-is-unique]]: every CAID induces the same output law $Q^*$.

[F3] [[lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound]]: each row is supported on $Q^*$ and has divergence $d_x:=D(W(\cdot\mid x)\|Q^*)\le C(W)$.

[F4] [[def-it-finite-mutual-information]]: $I(P,W)$ is the KL divergence of the joint law $P(x)W(y\mid x)$ from its product marginals.

[F5] [[def-it-channel-dispersion]]: $V(P,W)=\sum_xP(x)\operatorname{Var}_{W_x}\ln[W(Y\mid x)/(PW)(Y)]$.

## Proof
1.1 Since $Q^*=PW$, [F4] expands to $I(P,W)=\sum_xP(x)D(W(\cdot\mid x)\|Q^*)=\sum_xP(x)d_x$. By [F1], this average is $C(W)$, while [F3] gives $d_x\le C(W)$ for every $x$. Therefore each $x$ with $P(x)>0$ has $d_x=C(W)$; otherwise the weighted average would be strictly smaller. [F1, F2, F3, F4, given, algebra]

2.1 Under the joint law, the conditional mean of $Z=\ln[W(Y\mid X)/Q^*(Y)]$ given $X=x$ is $d_x$. Step 1.1 makes this mean the constant $C(W)$ on every positive-mass input. Hence $\mathbb EZ=C(W)$ and $\operatorname{Var}(Z)=\mathbb E[(Z-C(W))^2]=\sum_xP(x)\operatorname{Var}_{W_x}(Z)=V(P,W),$ where the last equality is [F5]. All terms are finite because the alphabets and charged supports are finite. [F3, F5, step 1.1, given, algebra] ∎
