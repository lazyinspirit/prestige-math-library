---
id: def-pool-based-realizable-active-learning
kind: definition
title: "Finite pool-based realizable active-learning instance"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-realizable-and-agnostic-pac
  - def-supervised-learning-problem
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Steve Hanneke, Theory of Active Learning, version 1.1, §§2.1–2.2 and §5.1"
      url: "https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf"
    - title: "Daniel Joseph Hsu, Algorithms for Active Learning, Chapter 2"
      url: "https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf"
---

## Definition

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space, let $D_X$ be a probability measure on it, and let $\mathcal H$ be a finite nonempty set of measurable classifiers $h:\mathcal X\to\{0,1\}$. A finite pool-based realizable active-learning instance consists of an ordered pool $U=(u_1,\ldots,u_m)\in\mathcal X^m$ for some $m\ge0$, an unknown target $h^*\in\mathcal H$, and a deterministic exact label oracle $\mathcal O:\mathcal X\to\{0,1\}$ satisfying $\mathcal O(x)=h^*(x)$ at every queried point. A fresh feature $X\sim D_X$ has target label $h^*(X)$; the pool itself need not be sampled from $D_X$. For a set $Q\subseteq\{1,\ldots,m\}$ of queried indices with observed labels $(y_i)_{i\in Q}$, the version space is $V(Q,y)=\{h\in\mathcal H:h(u_i)=y_i\text{ for every }i\in Q\}$. For any $V\subseteq\mathcal H$, its disagreement region is $\operatorname{DIS}(V)=\{x\in\mathcal X:\exists h,g\in V,\ h(x)\ne g(x)\}$. Since $V$ is finite and every classifier is measurable, $\operatorname{DIS}(V)$ is measurable. The pointwise exact-oracle assumption is stronger than standard distributional PAC realizability: zero population risk only requires agreement almost surely under the joint law and does not prescribe oracle values at every pool point.

## Definition references

[[def-supervised-learning-problem]]: supplies the measurable instance and label spaces, measurable predictors, and joint-law framework specialized here to binary labels.

[[def-realizable-and-agnostic-pac]]: defines standard PAC realizability by a finite-class member of zero population risk; that almost-sure condition alone does not prescribe pointwise labels on arbitrary pool entries.

[Steve Hanneke, *Theory of Active Learning*, version 1.1, §§2.1–2.2 and §5.1](https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf)

[Daniel Joseph Hsu, *Algorithms for Active Learning*, Chapter 2](https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf)
