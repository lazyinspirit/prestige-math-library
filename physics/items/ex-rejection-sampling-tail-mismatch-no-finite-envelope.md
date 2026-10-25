---
id: ex-rejection-sampling-tail-mismatch-no-finite-envelope
kind: example
title: A lighter-tailed proposal has no finite rejection envelope
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-rejection-sampling
  - cor-archimedean-reciprocal
  - cor-cauchy-reals-lub-complete
  - def-counting-measure
  - def-real-limit
  - lem-of-inverse-positive
  - lem-of-naturals-positive
  - prop-counting-measure-is-a-measure
  - thm-counting-measure-integral-is-nonnegative-series
  - thm-of-archimedean
  - thm-reals-ordered-field
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 4 §4.7
      url: https://artowen.su.domains/mc/Ch-nonunifrng.pdf
    - title: Computational Statistics with R, Chapter 6 §6.1
      url: https://cswr.nrhstat.org/reject-samp.html
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

On $\mathbb N=\{0,1,2,\ldots\}$ with counting measure, put $f(0)=g(0)=0$ and
for $n\ge1$ define
$$f(n)=\frac1{n(n+1)},\qquad g(n)=\frac4{n(n+1)(n+2)}.$$
Both are probability masses, but their ratio
$f(n)/g(n)=(n+2)/4$ for $n\ge1$ is unbounded. Thus this lighter-tailed
proposal has no finite rejection envelope for the target.

## Facts & Assumptions

[A1] The sample space is $\mathbb N$ with counting measure. The displayed target and proposal masses are nonnegative and vanish at $0$.

[F1] [[alg-rejection-sampling]]: a finite rejection envelope requires $f(n)\le c g(n)$ at every point outside a common counting-null set.

[F2] [[def-counting-measure]], [[prop-counting-measure-is-a-measure]], and [[thm-counting-measure-integral-is-nonnegative-series]]: counting measure assigns each set its cardinality, so its only null set is empty; integration of a nonnegative function against it is the nonnegative series of its point masses.

[F3] [[thm-reals-ordered-field]] and [[cor-cauchy-reals-lub-complete]]: $\mathbb R$ is a complete ordered field.

[F4] [[cor-archimedean-reciprocal]]: for every $\varepsilon>0$ some positive integer $m$ satisfies $1/m<\varepsilon$.

[F5] [[lem-of-inverse-positive]] and [[lem-of-naturals-positive]]: reciprocation reverses positive order, and the canonical naturals are positive and strictly increasing.

[F6] [[def-real-limit]]: a real sequence tends to $x$ when every positive rational tolerance eventually bounds its distance from $x$.

[F7] [[thm-of-archimedean]]: for every real $x$ there is a positive integer $n>x$.

## Verification

**Given:** The two mass functions in the Example, counting measure on $\mathbb N$, and the real number field.

1.1 The partial sums telescope: $\sum_{n=1}^N f(n)=1-\frac1{N+1}$ and $\sum_{n=1}^N g(n)=1-\frac2{(N+1)(N+2)}$. For any positive rational $\varepsilon$, [F4] applied to $\varepsilon/2$ supplies $m$ with $1/m<\varepsilon/2$; for all $N+1\ge m$, [F5] gives $1/(N+1)\le1/m<\varepsilon/2$ and $2/((N+1)(N+2))\le2/(N+1)\le2/m<\varepsilon$. Thus both remainders tend to zero by [F6], and [F2] gives total masses $1$. [A1, F2, F3, F4, F5, F6, algebra]

2.1 At each $n\ge1$, $\frac{f(n)}{g(n)}=\frac{n+2}{4}$. For any finite proposed envelope $c>0$, [F7] gives a positive integer $n>4c$, so $f(n)/g(n)=(n+2)/4>c$. Since [F2] says the only counting-null set is empty, no common null exception can remove these points. This contradicts the required envelope in [F1]; the pair has no finite rejection envelope. [A1, F1, F2, F7, step 1.1, algebra] ∎
