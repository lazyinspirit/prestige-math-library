---
id: ex-checking-the-subreciprocal-condition-for-the-loglog-bound
kind: example
title: "Checking the subreciprocal condition for the loglog bound"
status: published
origin: pipeline
deps: [def-subreciprocal-function-and-ell-divisibility, lem-qid-logarithmic-and-constant-divisibility, thm-loglog-quantitative-induced-density-bound, thm-logarithm-change-of-base]
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "5.1 and 5.2"
generation:
  role: example
proof_strategy: direct
---

## Example

For $\ell(x)=\log_2(1/x)$ on $(0,1/2)$, the function is subreciprocal. At $x=1/16$ we have $\ell(x)=4$ and $\log_2\ell(x)=2$, and the loglog density fraction with symbolic constant $C>0$ is $2^{-8C}$.

## Facts & Assumptions

**Given:** $\ell(x)=\log_2(1/x)$, $0<x<1/2$, and $C>0$ symbolic.

[F1] From [[lem-qid-logarithmic-and-constant-divisibility]]: Every nonempty finite graph $H$ is $\ell$-divisive for each of $\ell(x)=\log_2(1/x)$ and $\ell(x)=2$. Both functions are subreciprocal on $(0,1/2)$.

[F2] From [[thm-loglog-quantitative-induced-density-bound]]: $\delta=2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)}$.

## Verification

1.1 For $0<x<1/2$, reciprocation and the increasing logarithm show $\ell(x)>1$ and make $\ell$ nonincreasing. The bound $\log_2 y\leq y$ at $y=1/x>2$ implicit in the subreciprocity assertion [F1] gives $\ell(x)\leq1/x$. Thus all subreciprocal conditions hold, including positivity of $\log_2\ell(x)$. [F1, given]

2.1 At $x=1/16$, $1/x=16=2^4$, so $\ell(x)=4=2^2$ and $\log_2\ell(x)=2$. Substituting in [F2] with $C_H=C$ gives exponent $C\cdot4^2/2=8C$ and fraction $2^{-8C}$. The parameter $C$ remains symbolic. [F2, step 1.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 5.1 and 5.2.
