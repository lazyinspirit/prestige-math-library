---
id: lem-entropy-deficit-controls-small-exceptional-sets
kind: lemma
title: "Entropy deficit controls small exceptional sets"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
deps: ["lem-finite-entropy-chain-and-conditioning-inequalities"]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Tao"
      url: https://arxiv.org/pdf/1509.05422v4
      locator: "Lemma 3.3, PDF pp. 23\u201324; explicit bound"
---

## Statement

Let $Y$ take values in a finite set of cardinality $M\ge2$, and let $E$ have size at most $Me^{-t}$ with $t>0$. Then
$$\mathbb P(Y\in E)\le\frac{\log M-\mathcal H(Y)+\log2}{t}.$$
For finite-valued $X$, if $E_x$ obeys the same size bound for each $x$, then
$$\mathbb P(Y\in E_X)\le\frac{\log M-\mathcal H(Y)+I(X;Y)+\log2}{t}.$$
No uniformity or independence of $Y$ is assumed.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

[F1] [[lem-finite-entropy-chain-and-conditioning-inequalities]] supplies its stated finite identity or entropy property under its exact hypotheses.

## Proof

1.1 If $E$ is empty the bound is immediate. Otherwise put $p=\mathbb P(Y\in E)$ and $J=1_E(Y)$. The chain identity, since $J$ is determined by $Y$, gives $\mathcal H(Y)=\mathcal H(J)+\mathcal H(Y\mid J)\le\log2+p\log|E|+(1-p)\log M\le\log2+\log M-pt$. This proves the first bound, including $p=0,1$ by omitting empty conditional events. [F1, given, algebra]

2.1 Apply the first bound to $Y$ conditional on each positive atom $X=x$, then average. The average conditional entropy is $\mathcal H(Y\mid X)=\mathcal H(Y)-I(X;Y)$ by [F1]. This gives the second bound directly, without a further good-value selection. [F1, step 1.1, algebra] ∎
