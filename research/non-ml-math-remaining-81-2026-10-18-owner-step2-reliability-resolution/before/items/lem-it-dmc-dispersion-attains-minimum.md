---
id: lem-it-dmc-dispersion-attains-minimum
kind: lemma
title: DMC minimum and maximum dispersion are attained
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-channel-dispersion, lem-it-dmc-capacity-output-law-is-unique, lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound, lem-discrete-memoryless-channel-capacity-is-attained, def-discrete-memoryless-channel-information-capacity, def-it-finite-mutual-information, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-logarithm-slower-than-every-positive-power, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the finite-dimensional simplex is compact and the variance function is continuous on the CAID set.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_obligations:
  - Show the capacity-achieving set is a nonempty closed subset of the finite input simplex.
  - Use the unique full reachable output law to prove continuity of conditional dispersion on that set.
sources:
  references:
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: §IV, printed pp. 132–134 / PDF pp. 10–12; minimum-dispersion optimizer convention.
    - title: Masahito Hayashi, Information Spectrum Approach to Second-Order Coding Rate in Channel Coding
      url: https://arxiv.org/pdf/0801.2242
      locator: §III, Theorem 2; minimum and maximum conditional variances over multiple capacity-achieving inputs.
---

## Statement

For every finite DMC, the set $\Pi(W)$ of capacity-achieving input laws is nonempty and compact, and the function $P\mapsto V(P,W)$ is continuous on $\Pi(W)$. Therefore $V_{\min}(W)$ and $V_{\max}(W)$ in [[def-it-channel-dispersion]] are attained.

## Facts & Assumptions

**Given:** A finite DMC and the definitions of $C(W)$, $\Pi(W)$, and $V(P,W)$.

[F1] [[lem-discrete-memoryless-channel-capacity-is-attained]]: a capacity-achieving input law exists.

[F2] [[lem-it-dmc-capacity-output-law-is-unique]]: all capacity-achieving inputs induce the same output law $Q^*$.

[F3] [[lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound]]: every row is supported on $Q^*$, and $D(W(\cdot\mid x)\|Q^*)\le C(W)$.

[F4] [[def-it-channel-dispersion]]: $V(P,W)$ is the $P$-average of row conditional variances of $\ln[W(Y\mid x)/(PW)(Y)]$.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: the finite-dimensional probability simplex is compact, and a continuous function on a nonempty compact set attains its extrema.

[F6] [[def-it-finite-mutual-information]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite mutual information has the finite entropy expansion, with $0\ln0=0$.

[F7] [[thm-logarithm-slower-than-every-positive-power]]: $t\ln t\to0$ as $t\downarrow0$.

[F8] [[def-discrete-memoryless-channel-information-capacity]]: $C(W)=\max_P I(P,W)$ and $\Pi(W)$ is its maximizing level set.

## Proof

1.1 The input simplex is compact by [F5]. Expanding the KL sum in [F6] gives $I(P,W)=H(PW)-\sum_xP(x)H(W_x)$. This finite entropy formula is continuous: [F7] gives $t\ln t\to0$ at zero. By [F8], $\Pi(W)=\{P:I(P,W)=C(W)\}$ is the maximizing level set and is closed in the simplex. [F5, F6, F7, F8, given]

1.2 For $P\in\Pi(W)$, [F2] gives $PW=Q^*$, and [F3] says each row is supported on $Q^*$. On every reachable output $y$, $Q^*(y)>0$: some row has $W(y\mid x)>0$, and [F3] requires that row's support to lie in $Q^*$. Consequently each row variance $v_x:=\operatorname{Var}_{W(\cdot\mid x)}\ln[W(Y\mid x)/Q^*(Y)]$ is a finite constant independent of $P\in\Pi(W)$. [F2, F3, given]

2.1 By [F1], $\Pi(W)$ is nonempty; step 1.1 makes it a closed subset of a compact set, hence compact. [F1, step 1.1]

3.1 On $\Pi(W)$, [F4] therefore becomes $V(P,W)=\sum_xP(x)v_x$, a finite linear function of $P$, hence continuous. Applying [F5] to the compact nonempty set from step 2.1 proves attainment of its minimum and maximum. [F4, F5, step 2.1, step 1.2, algebra] ∎
