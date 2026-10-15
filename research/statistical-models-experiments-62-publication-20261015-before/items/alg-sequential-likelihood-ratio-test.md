---
id: alg-sequential-likelihood-ratio-test
kind: algorithm
title: Sequential likelihood-ratio test
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-discrete-stopping-time
  - def-filtration-and-filtered-probability-space
  - def-likelihood-ratio-as-rn-derivative
  - def-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Robert L. Wolpert, Introduction to Martingales, STA 711 course notes, §1.2, PDF pp. 4–5"
      url: "https://www2.stat.duke.edu/courses/Fall18/sta711/lec/topics/mg.pdf"
---

## Definition

Assume the [[def-axiom-of-choice|Axiom of Choice]], which states that every family of nonempty sets has a choice function. Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge0})$ be a discrete filtration on a common measurable space and let $P_0,P_1$ be probability measures on it. Assume that for every $t\ge0$, the restrictions $P_0|_{\mathcal F_t}$ and $P_1|_{\mathcal F_t}$ are mutually absolutely continuous: each restriction assigns measure zero to exactly the same $\mathcal F_t$ events as the other. For each $t$, choose a nonnegative $\mathcal F_t$-measurable representative $L_t$ of the likelihood-ratio density $d(P_1|_{\mathcal F_t})/d(P_0|_{\mathcal F_t})$ [[def-likelihood-ratio-as-rn-derivative]]. The filtration and stopping-time conventions are those of [[def-filtration-and-filtered-probability-space]] and [[def-discrete-stopping-time]].

Input thresholds $\alpha,\beta\in(0,1)$. At times $t=1,2,\ldots$, compute $L_t$ and apply these instructions:

1. If $L_t\ge1/\alpha$, stop and decide $H_1$.
2. Otherwise, if $L_t\le\beta$, stop and decide $H_0$.
3. Otherwise continue to the next observation.

The two boundaries are disjoint because $\beta<1<1/\alpha$. The output time is
$$\tau=\inf\{t\ge1:L_t\ge1/\alpha\text{ or }L_t\le\beta\},\qquad \inf\varnothing=\infty.$$
If $\tau=\infty$, the procedure has no finite terminal decision. It does not itself assert that a crossing occurs.
