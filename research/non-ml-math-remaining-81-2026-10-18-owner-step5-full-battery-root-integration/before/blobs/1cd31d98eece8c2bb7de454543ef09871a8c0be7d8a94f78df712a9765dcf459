---
id: def-finite-directed-information-and-causal-conditioning
kind: definition
title: Finite directed information and causal conditioning
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-conditional-mutual-information]
aliases: []
axiom_use: No choice axiom is used; every alphabet and sum is finite.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 17, §17.6, Massey's directed information and causal conditioning, printed pp. 449–451.
---

## Definition

For finite random sequences $X^n=(X_1,\ldots,X_n)$ and $Y^n=(Y_1,\ldots,Y_n)$, define the **directed information** from $X^n$ to $Y^n$ by
$$I(X^n\to Y^n):=\sum_{i=1}^n I(X^i;Y_i\mid Y^{i-1}),$$
where $X^i=(X_1,\ldots,X_i)$ and $Y^0$ is the empty tuple. For a third finite sequence $Z^n$, define the causally conditioned version
$$I(X^n\to Y^n\Vert Z^n):=\sum_{i=1}^n I(X^i;Y_i\mid Y^{i-1},Z^i).$$
All conditional mutual information terms use the finite nats convention of [[def-it-finite-conditional-mutual-information]]. The conditioning includes $Z_i$ because it is the current side-information symbol available at the receiving end of the directed-information term; $Y^{i-1}$ and $Z^{i-1}$ are the past.
