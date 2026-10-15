---
id: ex-hh-ariki-koike-colliding-content-specialization
kind: example
title: "A repeated root collides the generic one-box contents"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps:
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
  - lem-hh-rank-one-cyclotomic-quotient-monic-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $r=2,n=1$, the two generic standard multitableaux have contents $u_1$ and $u_2$, which are distinct in $K=\mathbb Q(Q,u_1,u_2)$. Under the specialization $Q\mapsto2$ and $u_1,u_2\mapsto1$ into $\mathbb Q$, the contents coincide and the algebra becomes $\mathbb Q[\varepsilon]/(\varepsilon^2)$ with $\varepsilon=X-1\ne0$. The generic interpolation factor $(X-u_2)/(u_1-u_2)$ therefore has no value at this specialization.

## Facts & Assumptions

**Given:** The multiplicative content function for standard multitableaux and the rank-one level-two quotient.

[F1] [[def-hh-multipartitions-standard-tableaux-and-generic-contents]]: $\operatorname{res}_t(i)=u_cQ^{b-a}$ for a box $(c,a,b)$, and the content field is $K=\mathbb Q(Q,u_1,\ldots,u_r)$.

[F2] [[lem-hh-rank-one-cyclotomic-quotient-monic-basis]]: when $r=2$ and $u_1=u_2=c$, the rank-one algebra is $F[\varepsilon]/(\varepsilon^2)$ and $\varepsilon$ is nonzero.

## Verification

**Given:** The level-two, rank-one, one-box content sequences and the parameter specialization stated in the example.

1.1 There are exactly two multipartitions of $1$ with two components, one box in component $1$ or one box in component $2$. In either tableau the box is $(c,1,1)$, so [F1] gives content $u_cQ^0=u_c$. The two generic values $u_1,u_2$ are unequal in the rational function field because they are distinct indeterminates. [F1, algebra]

2.1 Under $Q\mapsto2$, $u_1,u_2\mapsto1$, both contents become $1$. By [F2] with $F=\mathbb Q$, the specialized algebra is $\mathbb Q[\varepsilon]/(\varepsilon^2)$ and $\varepsilon$ is nonzero. The denominator $u_1-u_2$ of the generic interpolation factor becomes zero, so that rational expression cannot be specialized to a projector. This exhibits the content collision without asserting semisimplicity or failure of the PBW basis. [F2, step 1.1, algebra] ∎
