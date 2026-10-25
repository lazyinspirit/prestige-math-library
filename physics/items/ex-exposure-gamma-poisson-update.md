---
id: ex-exposure-gamma-poisson-update
kind: example
title: "Gamma-Poisson updating with a zero exposure"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-gamma-poisson-exposure-adjusted-update
  - cor-real-gamma-positive-integer-values
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from Gamma density normalization in the update theorem."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 5, §5.2.2"
      url: "https://www.bayesrulesbook.com/chapter-5"
---

## Statement

Assume Countable Choice. Take $\lambda\sim\operatorname{Gamma}(2,1)$ and two independent counts with
exposures $(e_1,e_2)=(2,0)$. For observed counts $(y_1,y_2)=(3,0)$, the
evidence is $32/243$ and the posterior is $\operatorname{Gamma}(5,3)$. If the
zero-exposure count were instead $y_2=1$, its evidence would be zero and no
posterior quotient would be defined.

## Facts & Assumptions

**Given:** Countable Choice, shape $a=2$, rate $b=1$, exposures $(2,0)$, and counts $(3,0)$.

[A1] Countable Choice is assumed by the Gamma density normalization used by the update theorem. [[def-countable-choice]].

[F1] For compatible zero-exposure data, the evidence is $c\,b^a\Gamma(a+S)/[\Gamma(a)(b+E)^{a+S}]$ and the posterior is Gamma$(a+S,b+E)$; an impossible zero-exposure count has zero evidence. [[thm-gamma-poisson-exposure-adjusted-update]].

[F2] For positive integers, $\Gamma(r+1)=r!$. [[cor-real-gamma-positive-integer-values]].

## Proof

**Given:** Countable Choice, the stated prior, exposures, and counts.

1.1 Here $S=3$, $E=2$, and $c=2^3/3!=4/3$ because the zero-exposure observation contributes factor one. By [F2], $\Gamma(5)=24$ and $\Gamma(2)=1$. Substitution in [F1] gives $m(3,0)=\frac43\frac{\Gamma(5)}{\Gamma(2)3^5} =\frac43\frac{24}{243}=\frac{32}{243}.$ [A1, F1, F2, algebra]

1.2 The updated shape is $2+3=5$ and the updated rate is $1+2+0=3$, so [F1] gives $\operatorname{Gamma}(5,3)$. [A1, F1, given, algebra]

2.1 If $y_2=1$ at exposure $e_2=0$, that observation is impossible under every $\lambda$ by [F1]. The likelihood is identically zero, its evidence is zero, and the finite-positive condition for a quotient fails. [A1, F1, cases] ∎