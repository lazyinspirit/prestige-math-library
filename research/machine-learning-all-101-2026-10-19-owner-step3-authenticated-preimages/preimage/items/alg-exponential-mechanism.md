---
id: alg-exponential-mechanism
kind: algorithm
title: Exponential mechanism
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-differential-privacy-and-adjacency
  - def-exponential-mechanism-utility-sensitivity
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-real-exponential-function-and-e
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Definition

Let $\mathcal D$ be the finite-support count functions on a nonempty record universe, with add/remove-one-occurrence adjacency. Input a database $D\in\mathcal D$, a parameter $\varepsilon>0$, a nonempty finite database-independent range $R$, and a real-valued utility $u:\mathcal D\times R\to\mathbb R$ with finite positive global utility sensitivity $\Delta_u$. For each $r\in R$, set
$$ w_D(r)=\exp\!\left(\frac{\varepsilon u(D,r)}{2\Delta_u}\right),\qquad Z_D=\sum_{s\in R}w_D(s). $$
Output $r\in R$ with probability $w_D(r)/Z_D$. Equip $R$ with its power-set sigma-algebra and define $K(D,B)=\sum_{r\in B}w_D(r)/Z_D$ for each $B\subseteq R$; this is the probability kernel from databases to outputs.

## Definition references

[[def-exponential-mechanism-utility-sensitivity|Global utility sensitivity]]

[[def-measure-kernel-and-probability-kernel|The probability-kernel conditions for a randomized mechanism]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.4, printed pp. 36–37.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, Proposition 4.2, PDF pp. 33–34.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** $\varepsilon>0$, a nonempty finite set $R$, a real-valued utility $u$, and a finite sensitivity $\Delta_u>0$.

[F1] [[def-exponential-mechanism-utility-sensitivity|Utility sensitivity]] is the attained finite maximum of adjacent-pair score differences over the database-independent finite range.

[F2] [[def-real-exponential-function-and-e|Real exponential]] is finite and strictly positive on every real input.

[F3] [[def-probability-measure|Probability measure]] means a measure of total mass one.

[F4] [[def-differential-privacy-and-adjacency|The database domain]] has the power-set sigma-algebra.

[F5] [[def-measure-kernel-and-probability-kernel|Probability kernel]] means each section is a probability measure and each event evaluation is measurable in the source.

## Verification

1.1 Since $\Delta_u>0$ and each score $u(D,r)$ is real, [F2] makes every weight $w_D(r)$ finite and positive. The nonempty finite sum $Z_D$ is therefore finite and strictly positive. For $A\subseteq R$, define $K(D,A)=\sum_{r\in A}w_D(r)/Z_D$. This is nonnegative, equals one on $R$, and is countably additive because a disjoint family of subsets of finite $R$ has only finitely many nonempty members. Thus each section is a probability measure by [F3]. [F1, F2, F3, given, construct]

2.1 For every $A\subseteq R$, $D\mapsto K(D,A)$ is measurable because every subset of the database domain is measurable by [F4]. Hence the assignment satisfies both conditions in [F5] and is a probability kernel. [F4, F5, step 1.1] ∎
