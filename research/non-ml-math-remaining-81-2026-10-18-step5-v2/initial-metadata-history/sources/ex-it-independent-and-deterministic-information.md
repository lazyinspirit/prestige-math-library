---
id: ex-it-independent-and-deterministic-information
kind: example
title: "Independent and deterministic finite information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule, def-it-finite-conditional-entropy, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.5, printed pp. 36–37; mutual information as joint KL and entropy reduction."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 3, §§3.1–3.2, printed pp. 42–45; MI as KL and entropy difference."
---

## Example

For finite $X,Y$, independence gives $I(X;Y)=0$. If $Y=f(X)$ for a function $f$ on the finite alphabet of $X$, then $I(X;Y)=H(Y)$.

## Facts & Assumptions

**Given:** Finite $X,Y$ with joint pmf $p_{XY}$; in the second case $Y=f(X)$.

[F1] [[def-it-finite-mutual-information]]: $I(X;Y)$ is the finite KL divergence between $p_{XY}$ and $p_X\otimes p_Y$.

[F2] [[thm-it-finite-entropy-chain-rule]]: $I(X;Y)=H(Y)-H(Y|X)$.

[F3] [[def-it-finite-conditional-entropy]]: conditional entropy is the average of the entropies of the conditional pmfs.

[F4] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(r)=-\sum_{r_i>0}r_i\ln r_i$, with $0\ln0=0$.

## Verification

1.1 If $X,Y$ are independent, then $p_{XY}(x,y)=p_X(x)p_Y(y)$ at every coordinate. Each positive-support ratio in [F1] is $1$, so every summand is zero and $I(X;Y)=0$. [given, F1, algebra]

2.1 If $Y=f(X)$, then for each $x$ with $p_X(x)>0$, $p_{Y|X=x}$ has mass $1$ at $f(x)$ and $0$ elsewhere, so [F4] gives entropy $-1\ln1=0$. Averaging these conditional entropies by [F3] gives $H(Y|X)=0$, and [F2] yields $I(X;Y)=H(Y)$. [given, F2, F3, F4, algebra] ∎
