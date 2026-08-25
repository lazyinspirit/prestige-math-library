---
id: ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null
kind: example
title: "Every Lebesgue measurable proper subgroup of $(\\mathbb{R},+)$ is null, and $\\mathbb{Z}$ and $\\mathbb{Q}$ are instances"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn,
       prop-countable-subsets-of-rn-are-lebesgue-null,
       thm-rationals-countable,
       thm-r-uncountable,
       def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Ye, L. Yu, X. Zhao, When is $A+xA=\\mathbb{R}$?, Corollary 1.2"
      url: "https://arxiv.org/pdf/2505.00556"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.6.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice. If $G \le (\mathbb{R},+)$ is Lebesgue
measurable and proper, then $\lambda_1(G)=0$. In particular both $\mathbb{Z}$
and $\mathbb{Q}$ are Lebesgue null subgroups of the line.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] A Lebesgue measurable subgroup of $(\mathbb R^n,+)$ of positive measure is all of $\mathbb R^n$ ([[cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn]]).

[L2] Every at most countable subset of $\mathbb R^n$ is Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F1] The rationals are countably infinite ([[thm-rationals-countable]]).

[F2] The real numbers are uncountable ([[thm-r-uncountable]]).

## Verification

**Proof technique:** direct.

1.1 If $G \le (\mathbb{R},+)$ is measurable and proper, then the contrapositive of [L1] gives $\lambda_1(G)=0$. [L1]

2.1 The integers and rationals are at most countable subgroups of $(\mathbb{R},+)$, so [L2] gives them Lebesgue measure zero; they are proper because [F1] and [F2] show $\mathbb{Q} \ne \mathbb{R}$, and $\mathbb{Z} \subseteq \mathbb{Q}$. [step 1.1, L2, F1, F2]

3.1 Step 1.1 uses measurability in an essential way: it says nothing about subgroups of $\mathbb{R}$ that are not Lebesgue measurable. [step 1.1] ∎
