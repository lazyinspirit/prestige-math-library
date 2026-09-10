---
id: lem-tail-sum-integrability-equivalence
kind: lemma
title: Tail sum integrability equivalence
deps: ["cor-layer-cake-formulas-for-random-variables", "thm-monotone-convergence", "thm-monotone-convergence-for-the-integral"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For a measurable $X:\Omega\to[0,\infty]$ on a probability space, $\sum_{n\ge1}\mathbb P(X>n)\le\mathbb EX\le1+\sum_{n\ge1}\mathbb P(X>n)$. Thus $\mathbb EX<\infty$ if and only if the tail series is finite.

## Facts & Assumptions

[F1] [[thm-monotone-convergence-for-the-integral]]: Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 For $0\le t<\infty$, let $N(t)$ count positive integers strictly less than $t$. When $t=0$ the count is zero; when $t=m\ge1$ is an integer it is $m-1$; between consecutive integers it is the lower integer. Thus $N(t)\le t\le1+N(t)$. At $t=\infty$ both $N(t)$ and $t$ are infinite, and the extended inequalities remain valid. [given, algebra]

2.1 The functions $\sum_{n=1}^m\mathbf1_{\{X>n\}}$ increase pointwise to $N(X)$. F1 therefore gives $\mathbb EN(X)=\sum_{n\ge1}\mathbb P(X>n)$. Integrate both inequalities in step 1.1 and use $\mathbb E1=1$ to obtain the bracket. [F1, step 1.1]

3.1 If $\mathbb EX$ is finite, the left inequality in step 2.1 bounds the series. Conversely a finite series makes the right inequality finite. This proves both directions, including extended-valued X. [step 2.1] ∎
