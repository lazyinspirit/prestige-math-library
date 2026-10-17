---
id: thm-continuous-coagulation-fragmentation-moment-bounds
kind: theorem
title: Bounded-kernel measure solutions conserve mass and control number and second moments
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - lem-continuous-coagulation-fragmentation-local-positive-wellposedness
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the moment tests are continuous and bounded by the defining weight.
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
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3.1
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

Let $\mu_t$ be a positive local solution of [[def-continuous-size-coagulation-fragmentation-weak-model]] with initial number $N_0$, mass $M_1$, and second moment $M_{2,0}<\infty$. Then for every time in its interval of existence,

$$M_1(\mu_t)=M_1,\qquad M_0(\mu_t)\le N_0e^{\beta_*Dt},\qquad M_2(\mu_t)\le M_{2,0}+K_*M_1^2t.$$

## Facts & Assumptions

**Given:** The weak equation with symmetric bounded $K$, daughter mass normalization, and a positive local solution in $\mathcal M_w(E)$.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: the coagulation increment for a test $\varphi$ is $\varphi(x+y)-\varphi(x)-\varphi(y)$; fragmentation increment is $\int\varphi(z)B_x(dz)-\varphi(x)$, with $\int zB_x(dz)=x$ and $z\le x$ on its support.

[F2] [[lem-continuous-coagulation-fragmentation-local-positive-wellposedness]]: a positive local solution exists in $\mathcal M_w(E)$, so the tests $1,x,x^2$ are integrable.

## Proof

1.1 Take $\varphi(x)=x$ in [F1]. The coagulation increment is $(x+y)-x-y=0$, and the fragmentation increment is $\int zB_x(dz)-x=0$. Thus $M_1'(\mu_t)=0$, and integration gives $M_1(\mu_t)=M_1$. [given, F1, F2, algebra]

1.2 With $\varphi=1$, each coagulation event changes number by $-1$, while fragmentation changes it by $B_x(E)-1\le D$. Hence $M_0'(\mu_t)\le\beta_*D M_0(\mu_t)$. The derivative of $e^{-\beta_*Dt}M_0(\mu_t)$ is nonpositive, giving $M_0(\mu_t)\le N_0e^{\beta_*Dt}$. [F1, F2, algebra]

2.1 With $\varphi=x^2$, coagulation contributes $\frac12\iint K(x,y)[(x+y)^2-x^2-y^2]\,d\mu_t d\mu_t=\iint K(x,y)xy\,d\mu_t d\mu_t\le K_*M_1^2$. Fragmentation contributes $\int\beta(x)[\int z^2B_x(dz)-x^2]\,d\mu_t\le0$, since $z^2\le xz$ and $\int zB_x=x$. Therefore $M_2'(\mu_t)\le K_*M_1^2$, and integration proves the last bound. [F1, F2, step 1.1, algebra] ∎
