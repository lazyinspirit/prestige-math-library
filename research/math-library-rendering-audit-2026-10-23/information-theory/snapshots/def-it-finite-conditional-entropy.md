---
id: def-it-finite-conditional-entropy
kind: definition
title: "Finite conditional entropy"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-information-units-and-logarithm-base, lem-it-finite-marginals-and-conditionals-are-pmfs, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-finite-probability-space-and-event, def-random-element-and-real-random-variable]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all alphabets and sums are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.5, printed pp. 35–36; conditional entropy as an average of conditional pmf entropies."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 1, §1.1, printed pp. 9–12, Definition 1.3; conditional entropy for finite X."
---

## Definition

Let $p_{XY}$ be a joint probability vector on finite alphabets $\mathcal X\times\mathcal Y$. It is the weight function of the canonical finite probability space from [[def-finite-probability-space-and-event]]; its coordinate maps are finite random elements in the sense of [[def-random-element-and-real-random-variable]]. Write $p_Y(y)=\sum_xp_{XY}(x,y)$. For each $y$ with $p_Y(y)>0$, set $p_{X|y}(x)=p_{XY}(x,y)/p_Y(y)$; this is a probability vector by [[lem-it-finite-marginals-and-conditionals-are-pmfs]]. Define the conditional entropy in nats by

$$H(X|Y):=\sum_{y:p_Y(y)>0}p_Y(y)H(p_{X|y}),$$

where $H(p)=-\sum_xp(x)\ln p(x)$ is the finite entropy of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. Terms for zero-mass $y$ are omitted. The base-$b$ version replaces $\ln$ by $\log_b$.
