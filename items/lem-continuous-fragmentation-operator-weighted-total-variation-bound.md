---
id: lem-continuous-fragmentation-operator-weighted-total-variation-bound
kind: lemma
title: Mass-normalized fragmentation is bounded in weighted total variation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - def-weighted-total-variation-space-for-population-measures
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the kernel is integrated against a single finite measure.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
    - title: Jacek Banasiak, Analytic fragmentation semigroups and classical solutions to coagulation-fragmentation equations, §§1–2
      url: https://repository.up.ac.za/bitstream/handle/2263/65144/Banasiak_Analytic_2019.pdf?isAllowed=n&sequence=1
---

## Statement

Assume the daughter-count bound $B_x(E)\le D$ of [[def-continuous-size-coagulation-fragmentation-weak-model]] with $D\ge1$. The fragmentation operator there satisfies

$$\|\mathcal F\mu\|_w\le\beta_*(D+1)\|\mu\|_w\qquad(\mu\in\mathcal M_w(E)).$$

## Facts & Assumptions

**Given:** $E=[a,\infty)$, $w(x)=1+x^2$, $0\le\beta\le\beta_*$, daughter support in $[a,x]$, daughter number at most $D$, and daughter first moment $x$.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: $\mathcal F\mu=\int\beta(x)(B_x-\delta_x)\,\mu(dx)$, $B_x(E)\le D$, and $\int z\,B_x(dz)=x$.

[F2] [[def-weighted-total-variation-space-for-population-measures]]: $\|\sigma\|_w=\int(1+x^2)\,d|\sigma|$.

## Proof

1.1 Since $0\le z\le x$ on the support of $B_x$, $z^2\le xz$ and hence $\int z^2B_x(dz)\le x^2$. Therefore $\int w(z)B_x(dz)\le D+x^2$. [given, F1, algebra]

2.1 The weighted variation of the signed measure $B_x-\delta_x$ is at most $\int w\,dB_x+w(x)\le D+1+2x^2\le(D+1)(1+x^2)$ because $D\ge1$. Integrating against $\beta(x)|\mu|(dx)$ and using [F2] gives the claim. [given, F1, F2, step 1.1, algebra] ∎

