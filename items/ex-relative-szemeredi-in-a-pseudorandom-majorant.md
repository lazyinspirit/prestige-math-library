---
id: ex-relative-szemeredi-in-a-pseudorandom-majorant
kind: example
title: "Applying relative Szemerédi to a dense function below a majorant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - thm-szemeredi-relative-to-a-pseudorandom-measure
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§3, Theorem 3.5, printed pp. 491–492"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.2–9.6, printed pp. 285–306; the relative Roth case is $k=3$"
---

## Example

Fix $k\ge3$ and $0<\delta\le1$. Let $p\to\infty$ through primes, let $\nu_p:F_p\to[0,\infty)$ be a $k$-pseudorandom majorant, and let $f_p:F_p\to[0,\infty)$ satisfy $0\le f_p\le\nu_p$ and $\mathbb E f_p\ge\delta$. Applying the relative theorem gives a positive normalized $k$-term progression count: $\mathbb E_{x,r\in F_p}\prod_{j=0}^{k-1}f_p(x+jr)\ge c(k,\delta)-o(1)$ for some $c(k,\delta)>0$.

## Example references

[[thm-szemeredi-relative-to-a-pseudorandom-measure|Szemerédi's theorem relative to a pseudorandom measure]]

[Green and Tao, §3, Theorem 3.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Zhao, Chapter 9.2–9.6](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Example and the relative Szemerédi theorem for $k$-pseudorandom measures.

[F1] The relative theorem has the same pointwise majorization and positive-average hypotheses as the Example ([[thm-szemeredi-relative-to-a-pseudorandom-measure]]).

## Verification

1.1 The sequence $\nu_p$ is $k$-pseudorandom, $f_p$ is nonnegative and bounded pointwise by $\nu_p$, and its mean is at least $\delta$, so all assumptions of [F1] hold. [given, F1]

2.1 Substituting these objects into [F1] gives the normalized progression-count lower bound stated in the Example. [given, F1, step 1.1] ∎
