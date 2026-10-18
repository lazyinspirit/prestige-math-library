---
id: cor-aep-typical-set-probability-and-size-bounds
title: "Typical-set probability and cardinality bounds"
kind: corollary
status: draft
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-source-information-density-and-typical-set
  - lem-finite-alphabet-iid-information-aep
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §3.1"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3: AEP and typical sets"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For a finite-alphabet IID source and $\varepsilon>0$, let
$T_n(\varepsilon)$ be its typical set and
$\delta_n:=\mathbb P(X^n\notin T_n(\varepsilon))$. Then
$$0\le\delta_n\le\frac{V(p)}{n\varepsilon^2},\qquad |T_n(\varepsilon)|\le e^{n(H(p)+\varepsilon)},\qquad |T_n(\varepsilon)|\ge(1-\delta_n)e^{n(H(p)-\varepsilon)}.$$
In particular $\delta_n\to0$.

## Facts & Assumptions

**Given:** A finite-alphabet IID source, its entropy $H(p)$ and surprisal
variance $V(p)$, and $\varepsilon>0$.

[F1] [[def-finite-source-information-density-and-typical-set]]:
$T_n(\varepsilon)$ consists of positive-probability sequences satisfying
$|I_n(x^n)-H(p)|\le\varepsilon$.

[F2] [[lem-finite-alphabet-iid-information-aep]]:
$\mathbb P(|I_n(X^n)-H(p)|\ge\varepsilon)\le V(p)/(n\varepsilon^2)$.

## Proof

**Given:** The source and $\varepsilon$ in the Statement.

1.1 If $x^n\in T_n(\varepsilon)$, [F1] gives $p^n(x^n)=e^{-nI_n(x^n)}\ge e^{-n(H(p)+\varepsilon)}$. Summing these probabilities over $T_n(\varepsilon)$ and using total mass one yields $|T_n(\varepsilon)|e^{-n(H(p)+\varepsilon)}\le1$, proving the upper bound. [given, F1, algebra]

1.2 The other side of [F1] gives $p^n(x^n)\le e^{-n(H(p)-\varepsilon)}$ for each typical sequence. Hence $\mathbb P(X^n\in T_n(\varepsilon))\le |T_n(\varepsilon)|e^{-n(H(p)-\varepsilon)}$; rearranging and using $\mathbb P(X^n\in T_n(\varepsilon))=1-\delta_n$ proves the lower bound. [given, F1, algebra]

2.1 The complement of the typical set is contained in $\{|I_n(X^n)-H(p)|\ge\varepsilon\}$, so [F2] bounds $\delta_n$ by $V(p)/(n\varepsilon^2)$. This tends to zero, including when $V(p)=0$. [F2, algebra] ∎
