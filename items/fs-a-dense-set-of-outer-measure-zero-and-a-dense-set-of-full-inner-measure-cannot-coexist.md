---
id: fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist
kind: false-statement
title: "FALSE: a dense subset of $\\mathbb{R}$ of outer measure zero and a dense subset of full inner measure cannot both meet every open interval"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [prop-countable-subsets-of-rn-are-lebesgue-null,
       lem-q-and-irrationals-dense-r,
       thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree,
       def-lebesgue-inner-measure-on-r,
       thm-lebesgue-measure-of-a-box-of-every-kind]
aliases: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
pipeline_run: null
---

## Statement

A dense subset of $\mathbb{R}$ of outer measure zero and a dense subset of full
inner measure cannot both meet every open interval.

## Facts & Assumptions

**Given:** The rational reals $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, its complement is dense, and every nonempty open subset of $\mathbb{R}$ is uncountable ([[lem-q-and-irrationals-dense-r]]).

[L2] Every at most countable subset of $\mathbb{R}$ is Lebesgue null; in particular $\lambda(\mathbb{Q}_{\mathbb{R}})=0$ ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[L3] For bounded subsets of $\mathbb{R}$, Lebesgue measurability is equivalent to equality of inner and outer measure ([[thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree]]).

[L4] $\lambda_*(E)=\sup\{\,\lambda(K):K\subseteq E\text{ compact}\,\}$ ([[def-lebesgue-inner-measure-on-r]]).

[L5] Every bounded nondegenerate interval is Lebesgue measurable with its usual length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Refutation

**Proof technique:** direct.

1.1 The set $\mathbb{Q}_{\mathbb{R}}$ is dense by [L1], and it has outer measure $0$ because it is countably infinite and therefore Lebesgue null by [L2]. [L1, L2]

2.1 Let $I \subseteq \mathbb{R}$ be a bounded nondegenerate interval. Then $I \setminus \mathbb{Q}_{\mathbb{R}}$ is measurable, because $I$ is measurable by [L5] and $\mathbb{Q}_{\mathbb{R}}$ has measure $0$ by step 1.1. Also $\lambda(I \setminus \mathbb{Q}_{\mathbb{R}})=\lambda(I)$, so [L3] gives $\lambda_*(I \setminus \mathbb{Q}_{\mathbb{R}})=\lambda(I)$. [step 1.1, L3, L4, L5, algebra]

3.1 Every nonempty open interval contains both a rational and an irrational by [L1]. So $\mathbb{Q}_{\mathbb{R}}$ is dense, and $\mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ is also dense. Step 2.1 shows that inside every bounded nondegenerate interval the latter has full inner measure. These two dense sets therefore coexist, and the statement is false. [step 2.1, L1, algebra] ∎
