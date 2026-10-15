---
id: ex-dirichlet-multinomial-update
kind: example
title: "A three-category Dirichlet-Multinomial update"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-dirichlet-multinomial-conjugate-update
  - cor-real-gamma-positive-integer-values
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the Dirichlet density normalization theorem."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §3.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Gero Walter, A Technical Note on the Dirichlet-Multinomial Model, 2013"
      url: "https://epub.ub.uni-muenchen.de/14068/1/tech-rep-131_gero-walter.pdf"
---

## Statement

Assume Countable Choice. With prior $p\sim\operatorname{Dirichlet}(1,2,1)$,
sample size $n=3$, and observed counts $y=(2,1,0)$, the evidence is $1/10$ and
the posterior is $\operatorname{Dirichlet}(3,3,1)$.

## Facts & Assumptions

**Given:** Countable Choice, the prior parameters $(1,2,1)$, sample size $3$, and counts $(2,1,0)$.

[A1] Countable Choice is used by the Dirichlet simplex normalization theorem. [[def-countable-choice]].

[F1] For positive Dirichlet parameters and admissible counts, the posterior adds the counts coordinatewise and the evidence is the Multinomial coefficient times the ratio of Dirichlet normalizers. [[thm-dirichlet-multinomial-conjugate-update]].

[F2] For positive integers $r$, $\Gamma(r)=(r-1)!$. [[cor-real-gamma-positive-integer-values]].

## Verification

**Given:** The hypotheses in the Statement and facts [A1], [F1], [F2].

1.1 Here $\alpha_+=4$, $n=3$, and $3!/(2!1!0!)=3$. By [F2], $\Gamma(4)=6$, $\Gamma(1)=\Gamma(2)=1$, $\Gamma(3)=2$, and $\Gamma(7)=720$. Substitution into [F1] gives $m(y)=3\cdot6\cdot4/720=1/10$. [A1, F1, F2, given, algebra]

2.1 The updated coordinates are $(1+2,2+1,1+0)=(3,3,1)$, all strictly positive, so [F1] gives the proper posterior $\operatorname{Dirichlet}(3,3,1)$. The zero count in the third category leaves its positive prior coordinate unchanged. [A1, F1, given, algebra] ∎