---
id: thm-integral-logarithm-is-a-bijection
kind: theorem
title: "$L:(0,\\infty)\\to\\mathbb R$ is a continuous strictly increasing bijection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-integral-logarithm-is-strictly-increasing,
       thm-integral-logarithm-is-unbounded, thm-intermediate-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

The function

$$L:(0,\infty)\to\mathbb R$$

is a continuous strictly increasing bijection.

## Facts & Assumptions

**Given:** $L$ on $(0,\infty)$ and a target $r\in\mathbb R$.

[L1] $L$ is continuous and strictly increasing on $(0,\infty)$
([[cor-integral-logarithm-is-strictly-increasing]]).

[L2] For every real $r$, there are positive $a,b$ with
$L(a)<r<L(b)$ ([[thm-integral-logarithm-is-unbounded]]).

[L3] A continuous real function on $[a,b]$ takes every value between its
endpoint values ([[thm-intermediate-value]]).

## Proof

**Proof technique:** direct.

1.1 Strict increase in [L1] makes $L$ injective. [L1]

1.2 By [L2], choose positive $a,b$ with $L(a)<r<L(b)$. Strict increase in [L1] then implies $a<b$. [L2, L1]

2.1 The restriction of $L$ to $[a,b]$ is continuous by [L1], so [L3] gives $x\in(a,b)$ with $L(x)=r$. Thus $L$ is surjective onto $\mathbb R$. [step 1.2, L1, L3]

3.1 Steps 1.1 and 2.1 show that $L$ is a bijection, and continuity and strict increase are already supplied by [L1]. [step 1.1, step 2.1, L1] ∎