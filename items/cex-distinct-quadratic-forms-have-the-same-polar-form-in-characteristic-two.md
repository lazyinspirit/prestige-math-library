---
id: cex-distinct-quadratic-forms-have-the-same-polar-form-in-characteristic-two
kind: counterexample
title: 'In characteristic $2$, distinct quadratic forms can have the same polar form'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quadratic-form-and-polar-form, thm-z-mod-p-is-a-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §7'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Statement refuted

**Refuted claim:** A quadratic form is determined by its polar form in every characteristic.

## Facts & Assumptions

**Given:** On $\mathbb F_2^2$, define $q_0(x,y)=0$ and $q_1(x,y)=x^2$.

[L1] The ring $\mathbb F_2$ is a field of characteristic $2$ ([[thm-z-mod-p-is-a-field]]).

[L2] A quadratic form has $q(av)=a^2q(v)$ and bilinear polar form $b_q(u,v)=q(u+v)-q(u)-q(v)$ ([[def-quadratic-form-and-polar-form]]).

## Counterexample

**Proof technique:** direct computation.

1.1 Both $q_0$ and $q_1$ have the required degree-two homogeneity. The polar form of $q_0$ is zero, while for $u=(x,y)$ and $v=(s,t)$, $b_{q_1}(u,v)=(x+s)^2-x^2-s^2=2xs=0$ by [L1]. Thus both are quadratic forms with zero polar form. [L1, L2, algebra]

1.2 They are distinct because $q_0(1,0)=0$ while $q_1(1,0)=1$. [given, algebra]

2.1 Hence polarization is not injective in characteristic $2$. [step 1.1, step 1.2] ∎
