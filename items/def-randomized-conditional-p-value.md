---
id: def-randomized-conditional-p-value
kind: definition
title: "Randomized conditional upper-tail p-values"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-random-element-and-real-random-variable
  - def-conditional-law-given-a-random-element
  - def-independent-random-elements
  - lem-conditional-kernel-tail-and-atom-evaluations-are-measurable
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "A. J. Brockwell, Universal Residuals: A Multivariate Transformation, Lemma 2 and Theorem 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2211730/"
    - title: "George Deligiannidis, Foundations of Statistical Inference, Chapter 13, PDF pp. 77–78"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
---

## Definition

Fix one null probability law $P_0$. Let $S$ be a random element of a measurable space and let $T$ be a real random variable on the same probability space. Suppose a conditional law kernel $K(s,\cdot)$ of $T$ given $S$ is supplied, in the sense of [[def-conditional-law-given-a-random-element]]. On an auxiliary extension, let $U$ be independent of $(S,T)$ and have the uniform Borel probability law on $[0,1]$, characterized by $P(U\le u)=u$ for $0\le u\le1$. The **randomized conditional upper-tail p-value** is
$$p_U:=K(S,(T,\infty))+U K(S,\{T\}),$$
and its **nonrandomized upper-tail value** is
$$p_0:=K(S,[T,\infty)).$$
The strict tail and atom terms are evaluated at the realized pair $(S,T)$; the independent $U$ randomizes only within the tie mass. Their measurability, including measurability of both displayed p-values, follows from [[lem-conditional-kernel-tail-and-atom-evaluations-are-measurable]]. The inclusive tail is the sum of the strict tail and the atom at $T$. This definition asserts no existence of the conditional kernel; it is supplied as part of the input.
