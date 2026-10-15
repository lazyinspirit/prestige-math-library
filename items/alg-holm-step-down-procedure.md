---
id: alg-holm-step-down-procedure
kind: algorithm
title: Holm step-down procedure
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-null-valid-p-value-and-fwer-fdr
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
    - title: "Jelle J. Goeman and Aldo Solari, The sequential rejection principle of familywise error control, The Annals of Statistics 38(6) (2010), Section 3"
      url: "https://arxiv.org/pdf/1211.3313"
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 5, Sections 5.1–5.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Definition

For $m\ge1$, fix a finite family of null hypotheses $H_{0i}$, $1\le i\le m$, before observing the data, and let $p_i:\mathcal X\to[0,1]$ be p-value statistics valid for their respective nulls in the sense of [[def-null-valid-p-value-and-fwer-fdr]]. Given $\alpha\in[0,1]$ and an observation $x\in\mathcal X$, order the indices by the pairs $(p_i(x),i)$ in lexicographic order. This gives a unique permutation $\pi$ with $p_{\pi(1)}(x)\le\cdots\le p_{\pi(m)}(x)$; ties are ordered by increasing index.

Set
$$r_\alpha(x)=\max\{k\in\{0,\ldots,m\}:p_{\pi(j)}(x)\le\alpha/(m-j+1)\text{ for every }1\le j\le k\}.$$
The rejected-index set is $R_\alpha(x)=\{\pi(j):1\le j\le r_\alpha(x)\}$. Reject $H_{0i}$ exactly when $i\in R_\alpha(x)$; equivalently, compare sequentially to $\alpha/(m-j+1)$, stop at the first failed comparison, and reject only the preceding ranks.

For $m=0$, extend the procedure to the empty input by returning the empty rejected set. For $m\ge1$, every denominator in a tested rank is positive. The ordering is a unique finite permutation, and the finite set defining $r_\alpha(x)$ contains $0$, so the output is well-defined.
