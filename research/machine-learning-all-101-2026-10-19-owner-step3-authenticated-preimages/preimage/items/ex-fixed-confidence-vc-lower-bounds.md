---
id: ex-fixed-confidence-vc-lower-bounds
kind: example
title: "Fixed-confidence lower bounds at dimension four"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - thm-realizable-vc-minimax-lower-bound
  - thm-agnostic-vc-minimax-lower-bound
  - def-minimax-excess-risk
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Statistical Learning Theory course notes, University of British Columbia, Chapter 7 §7.3"
      url: "https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html"
---

## Example

Let $\mathcal H$ be any nonempty measurable binary class of VC dimension $4$ and let $m=64$. For every learner, there is a realizable law and target with probability at least $1/100$ that target risk exceeds $3/2048$, and there is an agnostic law with probability at least $1/64$ that class excess risk exceeds $1/\sqrt{5120}$. The two laws may differ.

## Example references

[Mohri et al., Foundations of Machine Learning, 2nd ed., Theorems 3.20 and 3.23](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

[Statistical Learning Theory course notes, University of British Columbia, Theorem 7.13 and proof (supports the realizable assertion here)](https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html)

## Facts & Assumptions

**Given:** A binary class $\mathcal H$ with $\operatorname{VCdim}(\mathcal H)=4$, an integer sample size $m=64$, and a learner $A$.

[F1] For $d\ge2$ and $m\ge\lceil(d-1)/4\rceil$, the realizable lower-bound error threshold is $(d-1)/(32m)$ with failure probability at least $1/100$ ([[thm-realizable-vc-minimax-lower-bound]]).

[F2] For $d\ge2$ and $m\ge\lceil64d/5\rceil$, the agnostic lower-bound threshold is $\sqrt{d/(320m)}$ with failure probability at least $1/64$ ([[thm-agnostic-vc-minimax-lower-bound]]).

[F3] The VC dimension is the supremum of the cardinalities of finite shattered point sets ([[def-minimax-excess-risk]]).

## Verification

1.1 By [F3] the given class has $d=4$. Hence $\lceil(4-1)/4\rceil=1\le64$ and $(4-1)/(32\cdot64)=3/2048$, so [F1] gives the realizable assertion. [given, F1, F3, algebra]

2.1 Also $\lceil64\cdot4/5\rceil=52\le64$ and $\sqrt{4/(320\cdot64)}=1/\sqrt{5120}$, so [F2] gives the agnostic assertion. The theorems allow different hard laws, as stated. [given, F2, algebra] ∎
