---
id: def-it-finite-mutual-information
kind: definition
title: "Finite mutual information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-information-units-and-logarithm-base, lem-it-finite-marginals-and-conditionals-are-pmfs, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-finite-probability-space-and-event, def-random-element-and-real-random-variable]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all distributions and sums are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.5, printed pp. 36–37; joint-KL and entropy-difference formulas for mutual information."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 3, §3.1, printed pp. 41–43, Definition 3.1 and Theorem 3.2."
---

## Definition

Let $p_{XY}$ be a joint probability vector on finite alphabets $\mathcal X\times\mathcal Y$, with marginals $p_X(x):=\sum_y p_{XY}(x,y)$ and $p_Y(y):=\sum_xp_{XY}(x,y)$. The marginals are probability vectors by [[lem-it-finite-marginals-and-conditionals-are-pmfs]]. The joint vector is the outcome-weight function of the canonical finite probability space from [[def-finite-probability-space-and-event]]; its coordinate maps are finite random elements in the sense of [[def-random-element-and-real-random-variable]]. Define mutual information in nats by

$$I(X;Y):=D(p_{XY}\|p_X\otimes p_Y)=\sum_{(x,y):p_{XY}(x,y)>0}p_{XY}(x,y)\ln\frac{p_{XY}(x,y)}{p_X(x)p_Y(y)},$$

where $D$ is the finite KL convention of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]] and $(p_X\otimes p_Y)(x,y):=p_X(x)p_Y(y)$. Every ratio in the displayed sum is positive and finite: if $p_{XY}(x,y)>0$, then each marginal sum is at least that positive entry. The sum is over finite support, so $I(X;Y)$ is finite. The base-$b$ version replaces $\ln$ by $\log_b$.
