---
id: thm-polarization-bijection-in-characteristic-not-two
kind: theorem
title: 'If $\operatorname{char}F\neq2$, quadratic forms and symmetric bilinear forms correspond by $q(v)=B(v,v)$ and $B(u,v)=\tfrac12 b_q(u,v)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quadratic-form-and-polar-form, def-bilinear-symmetric-skew-and-alternating-forms, def-ring-characteristic, def-field]
aliases: []
landmark: true
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

## Statement

Let $\operatorname{char}F\ne2$. The assignments

$$B\longmapsto q_B,\quad q_B(v)=B(v,v),\qquad q\longmapsto B_q,\quad B_q(u,v)=\tfrac12b_q(u,v)$$

are inverse bijections between symmetric bilinear forms and quadratic forms.

## Facts & Assumptions

**Given:** A field $F$ with $\operatorname{char}F\ne2$ and an $F$-vector space $V$.

[L1] A quadratic form satisfies $q(av)=a^2q(v)$ and has bilinear polar form $b_q(u,v)=q(u+v)-q(u)-q(v)$ ([[def-quadratic-form-and-polar-form]]).

[L2] A symmetric bilinear form is bilinear and satisfies $B(u,v)=B(v,u)$ ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[L3] The characteristic is the least positive natural multiple of $1_F$ that is zero, or $0$ if none exists ([[def-ring-characteristic]]); in a field $0_F\ne1_F$ and every nonzero scalar is invertible ([[def-field]]).

## Proof

**Proof technique:** explicit inverse.

1.1 Because $\operatorname{char}F\ne2$, [L3] makes the scalar $2=1_F+1_F$ nonzero and hence invertible. If $B$ is symmetric bilinear, then $q_B(av)=a^2q_B(v)$ and $b_{q_B}(u,v)=B(u+v,u+v)-B(u,u)-B(v,v)=2B(u,v)$. Thus $q_B$ is a quadratic form. [L1, L2, L3, algebra]

1.2 If $q$ is quadratic, [L1] makes $b_q$ bilinear, and its defining formula is symmetric. Hence $B_q=\tfrac12b_q$ is symmetric bilinear by [L2] and [L3]. [L1, L2, L3]

2.1 Step 1.1 gives $B_{q_B}=B$. Conversely, $b_q(v,v)=q(2v)-2q(v)=4q(v)-2q(v)=2q(v)$, so $q_{B_q}(v)=\tfrac12b_q(v,v)=q(v)$. [step 1.1, step 1.2, L1, L3, algebra]

3.1 The two assignments are therefore mutually inverse bijections. The use of $2^{-1}$ identifies precisely where the characteristic hypothesis enters. [step 2.1, L3] ∎
