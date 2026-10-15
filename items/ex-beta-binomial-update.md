---
id: ex-beta-binomial-update
kind: example
title: "A Beta(2,3) prior updated by five Bernoulli trials"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-beta-binomial-conjugate-update
  - cor-real-gamma-positive-integer-values
  - thm-real-beta-gamma-identity
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "The example uses the Countable Choice branch already declared by the Beta normalization supplier; the integer arithmetic adds no axiom."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 3, §3.1"
      url: "https://www.bayesrulesbook.com/chapter-3"
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
---

## Statement

Assume Countable Choice. With prior $P\sim\operatorname{Beta}(2,3)$ and $n=5$ Binomial trials, an
observed success count $y=3$ has evidence $4/21$ and posterior
$\operatorname{Beta}(5,5)$. The boundary counts $y=0$ and $y=5$ give proper
posteriors $\operatorname{Beta}(2,8)$ and $\operatorname{Beta}(7,3)$.

## Facts & Assumptions

**Given:** Countable Choice, the prior parameters $(2,3)$, trial count $5$, and success count $3$.

[A1] Countable Choice is used by the Beta density normalization in the update theorem. [[def-countable-choice]].

[F1] For positive $\alpha,\beta$, the evidence is $\binom ny B(\alpha+y,\beta+n-y)/B(\alpha,\beta)$ and the posterior is Beta$(\alpha+y,\beta+n-y)$; endpoint counts are allowed. [[thm-beta-binomial-conjugate-update]].

[F2] For every natural number $r$, $\Gamma(r+1)=r!$. [[cor-real-gamma-positive-integer-values]].

[F3] For $u,v>0$, $B(u,v)=\Gamma(u)\Gamma(v)/\Gamma(u+v)$. [[thm-real-beta-gamma-identity]].

## Proof

**Given:** Countable Choice, $P\sim\operatorname{Beta}(2,3)$, $n=5$, and $y=3$.

1.1 By [F3] and [F2], $B(5,5)=4!4!/9!=1/630$ and $B(2,3)=1!2!/4!=1/12$. Thus [F1] gives $m(3)=\binom53\frac{B(5,5)}{B(2,3)}=10\frac{1/630}{1/12}=\frac4{21}.$ This number is finite and positive. [A1, F1, F2, F3, algebra]

1.2 The posterior parameters in [F1] are $2+3=5$ and $3+(5-3)=5$, so the posterior is $\operatorname{Beta}(5,5)$. [A1, F1, given, algebra]

2.1 At $y=0$ the updated shapes are $(2,8)$; at $y=5$ they are $(7,3)$. Both pairs are positive, so [F1] gives finite-positive evidence and the stated proper endpoint posteriors. [A1, F1, cases, algebra] ∎
