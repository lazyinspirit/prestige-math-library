---
id: ex-finite-shattered-set
kind: example
title: "A finite class shattering three points"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-minimax-excess-risk
  - def-shattering-and-vc-dimension
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §§3.3–3.4"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Statistical Learning Theory course notes, University of British Columbia, Chapter 7 §§7.2.2–7.3"
      url: "https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html"
---

## Example

Let $\mathcal X=\{x_1,x_2,x_3\}$ have the discrete sigma-algebra, and let $\mathcal H$ be the class of all eight functions from $\mathcal X$ to $\{0,1\}$. Then $\operatorname{VCdim}(\mathcal H)=3$.

## Example references

[Mohri et al., Foundations of Machine Learning, 2nd ed., Chapter 3](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

[Statistical Learning Theory course notes, University of British Columbia, §7.2.2](https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html)

## Facts & Assumptions

**Given:** The finite measurable space $\mathcal X$ and the class $\mathcal H=\{0,1\}^{\mathcal X}$.

[F1] A class shatters an indexed finite set exactly when its trace family contains every subset of the index set; its VC dimension is the supremum of shattered cardinalities ([[def-minimax-excess-risk]], [[def-shattering-and-vc-dimension]]).

## Verification

1.1 For each $A\subseteq[3]$, the function $h_A$ defined by $h_A(x_i)=1$ exactly when $i\in A$ belongs to $\mathcal H$; hence the indexed trace family on $\{x_1,x_2,x_3\}$ is $\mathcal P([3])$, so this set is shattered by [F1]. [given, F1, construct]

2.1 The whole domain has only three points, so no subset of four distinct domain points exists. Thus no four-point set can be shattered, and the VC dimension is exactly three. [given, F1, algebra] ∎
