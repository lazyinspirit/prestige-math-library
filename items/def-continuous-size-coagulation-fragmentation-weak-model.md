---
id: def-continuous-size-coagulation-fragmentation-weak-model
kind: definition
title: Continuous-size coagulation-fragmentation weak model
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-weighted-total-variation-space-for-population-measures
  - def-bounded-lipschitz-discrepancy-for-measures
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §1
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Definition

Fix $a>0$ and $E=[a,\infty)$. A continuous-size coagulation-fragmentation model consists of a symmetric nonnegative aggregation kernel $K:E^2\to[0,K_*]$ and finite constants $L_K,L_\beta\ge0$ such that
$$|K(x,y)-K(x',y')|\le L_K(|x-x'|+|y-y'|),\qquad |\beta(x)-\beta(y)|\le L_\beta|x-y|,$$
where $\beta:E\to[0,\beta_*]$ is the fragmentation rate. It also has a Borel kernel $x\mapsto B_x$ of finite nonnegative daughter-count measures on $E$. Fix a finite constant $D\ge1$ and require $B_x(E)\le D$, $\operatorname{supp}(B_x)\subseteq[a,x]$, and $\int_E z\,B_x(dz)=x$. For $x<2a$, take $\beta(x)=0$ and $B_x=\delta_x$. Assume $d_{BL}(B_x,B_y)\le L_B|x-y|$, where $d_{BL}$ is defined in [[def-bounded-lipschitz-discrepancy-for-measures]].

For signed $\mu,\nu\in\mathcal M_w(E)$ define the symmetric bilinear coagulation operator and linear fragmentation operator by

$$\mathcal C(\mu,\nu)=\frac12\iint_{E^2}K(x,y)(\delta_{x+y}-\delta_x-\delta_y)\,\mu(dx)\nu(dy),\qquad \mathcal F\mu=\int_E\beta(x)(B_x-\delta_x)\,\mu(dx).$$

On a time interval $[0,T]$, a weak solution is a path $\mu\in C([0,T];\mathcal M_w(E))$ of positive measures satisfying the following identity in integral form for each continuous $\varphi$ with $|\varphi(x)|\le C(1+x^2)$:

$$\frac{d}{dt}\int_E\varphi\,d\mu_t=\frac12\iint_{E^2}K(x,y)[\varphi(x+y)-\varphi(x)-\varphi(y)]\,\mu_t(dx)\mu_t(dy)+\int_E\beta(x)\left[\int_E\varphi(z)B_x(dz)-\varphi(x)\right]\mu_t(dx)$$

Equivalently, $\dot\mu=\mathcal C(\mu,\mu)+\mathcal F\mu$ in $\mathcal M_w(E)$. The first term counts ordered coagulation pairs with factor $1/2$. The second term removes one parent at each fragmentation event and adds its expected daughter measure; its first-moment normalization is the displayed identity. A binary split $x\mapsto(u,x-u)$ has $B_x=\delta_u+\delta_{x-u}$.
