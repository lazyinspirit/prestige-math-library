---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
id: ex-heavy-ball-optimized-quadratic-spectrum
kind: example
title: "The spectrum 1, 4, 9 gives tuned root factor one half"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-heavy-ball-momentum
  - alg-gradient-descent
  - prop-gradient-of-a-quadratic-matrix-form
  - thm-heavy-ball-rate-on-strongly-convex-quadratics
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $A=\operatorname{diag}(1,4,9)$, $F(w)=\tfrac12w^{\mathsf T}Aw$ on $\mathbb R^3$, and $w_0=w_1=(1,1,1)$. With $c=1$ and $L=9$, tuned heavy-ball has $\alpha=\tfrac14$, $\beta=\tfrac14$, and modal root factor $\tfrac12$ at all three eigenvalues. Its endpoint characteristic polynomials are repeated-root polynomials. Gradient descent with step $\gamma=\tfrac15$ has modal multipliers $\tfrac45,\tfrac15,-\tfrac45$, so its worst modal factor is $\tfrac45$.

## Example references

[[thm-heavy-ball-rate-on-strongly-convex-quadratics]]

[[alg-heavy-ball-momentum]]

[[alg-gradient-descent]]

## Facts & Assumptions

**Given:** The diagonal matrix $A=\operatorname{diag}(1,4,9)$, objective $F(w)=\tfrac12w^{\mathsf T}Aw$, initial vector $w_0=w_1=(1,1,1)$, and the two fixed-step update rules.

[F1] [[thm-heavy-ball-rate-on-strongly-convex-quadratics]]: for $c=1$, $L=9$, the tuned parameters are $\alpha=4/(\sqrt L+\sqrt c)^2$ and $\beta=((\sqrt L-\sqrt c)/(\sqrt L+\sqrt c))^2$, with modal root factor $q=(\sqrt L-\sqrt c)/(\sqrt L+\sqrt c)$.

[F2] [[alg-heavy-ball-momentum]]: the update is $w_{t+1}=w_t-\alpha\nabla F(w_t)+\beta(w_t-w_{t-1})$.

[F3] [[alg-gradient-descent]]: in fixed-step mode, the update is $x\mapsto x-\gamma\nabla F(x)$.

[F4] [[prop-gradient-of-a-quadratic-matrix-form]]: for $q(x)=\tfrac12\|Cx\|_2^2$, the gradient is $C^\ast Cx$.

## Verification

1.1 The eigenvalues of $A$ are $1,4,9$, so $c=1$, $L=9$, $\kappa=9$, and $q=(3-1)/(3+1)=1/2$. Substitution into [F1] gives $\alpha=4/(3+1)^2=1/4$ and $\beta=q^2=1/4$. [given, F1, algebra]

1.2 Taking $C=\operatorname{diag}(1,2,3)$ gives $C^{\mathsf T}C=A$, so [F4] yields $\nabla F(w)=Aw$. Projecting [F2]'s update onto each standard coordinate gives polynomial $p_\lambda(r)=r^2-(1+\beta-\alpha\lambda)r+\beta$. For $\lambda=1$ it is $r^2-r+1/4=(r-1/2)^2$; for $\lambda=4$ it is $r^2-r/4+1/4$, whose roots are $1/8\pm i\sqrt{15}/8$ and have modulus $1/2$; for $\lambda=9$ it is $r^2+r+1/4=(r+1/2)^2$. Thus each root factor is $1/2$, and the endpoint roots are repeated. [given, F2, F4, algebra]

2.1 By [F3], gradient descent with $\gamma=1/5$ has multiplier $1-\lambda/5$ on an eigenvector of eigenvalue $\lambda$. The multipliers at $1,4,9$ are $4/5,1/5,-4/5$, whose largest absolute value is $4/5$. [given, F3, algebra] ∎
