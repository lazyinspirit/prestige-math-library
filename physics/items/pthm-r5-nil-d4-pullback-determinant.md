---
id: pthm-r5-nil-d4-pullback-determinant
kind: physics-theorem
title: Nil Wrapped D4 Pullback Metric And Determinant
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-r5-sw-nil-background-data
  - def-r5-nil-d4-worldvolume-embedding
dependency_roles:
  post-r5-sw-nil-background-data: physical-assumption
  def-r5-nil-d4-worldvolume-embedding: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Exact induced metric and DBI determinant for the stated smooth D4 embedding in the adopted Nil metric block; assumes a four-dimensional mostly-plus string-frame metric in zero-shift cosmic-time form ds_{4,s}^2=-dt^2+h_ij(t,x)dx^i dx^j with smooth positive-definite h and retains only homogeneous u1(t)."
sources:
  references:
    - title: "Eva Silverstein and Alexander Westphal, Monodromy in the CMB: Gravity Waves and String Inflation, arXiv:0803.3085v2"
      url: "https://arxiv.org/pdf/0803.3085v2"
      locator: "§2.3 equations (2.6) and (2.9), PDF pp. 8–10; Nil metric and D4 induced determinant."
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, equation (2.19), PDF p. 15; pullback determinant in the leading DBI action."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the embedding $\iota_u$ of [[def-r5-nil-d4-worldvolume-embedding]], with smooth $u_1=u_1(t)>0$, $u_2=\sigma\in\mathbb R/\mathbb Z$, $x'=x'_0$, fixed $\widetilde q_0$, and $ds_{4,s}^2=-dt^2+h_{ij}(t,x)dx^idx^j$ where $h_{ij}$ is smooth and positive definite, the induced metric is block diagonal between $X_4$ and $\sigma$, with
$$ (\iota_u^*G^{(s)})_{\mu\nu}=g_{4,s,\mu\nu}+\alpha'L_{u_1}^2\partial_\mu u_1\partial_\nu u_1,\qquad (\iota_u^*G^{(s)})_{\sigma\sigma}=\alpha'(L_{u_2}^2+M^2L_x^2u_1^2). $$
Consequently, for $\alpha'L_{u_1}^2\dot u_1^2<1$,
$$ \sqrt{-\det(\iota_u^*G^{(s)})}=\sqrt{-g_{4,s}}\sqrt{\alpha'(L_{u_2}^2+M^2L_x^2u_1^2)}\sqrt{1-\alpha'L_{u_1}^2\dot u_1^2}. $$

## Statement References

[Silverstein and Westphal, §2.3](https://arxiv.org/pdf/0803.3085v2)

## Facts & Assumptions

**Given:** The full product metric and lattice and the embedding in [F1]–[F2], with $X_4=I\times\Sigma_3$, smooth $u_1(t)$, and the zero-shift mostly-plus string-frame metric $ds_{4,s}^2=-dt^2+h_{ij}(t,x)dx^idx^j$ with smooth positive-definite spatial metric $h$.

[F1] [[post-r5-sw-nil-background-data]]: $ds^2_{N^3}=\alpha'(L_{u_1}^2du_1^2+L_{u_2}^2du_2^2+L_x^2(dx'+Mu_1du_2)^2)$, with the isomorphic second Nil factor held at the fixed point in the embedding.

[F2] [[def-r5-nil-d4-worldvolume-embedding]]: $u_2=\sigma$, $x'=x'_0$, the second Nil coordinate is fixed, and $u_1=u_1(t)$ is smooth on $I$.

## Proof

1.1 Pulling back the Nil one-forms by [F2] gives $\iota_u^*du_1=\partial_\mu u_1dx^\mu$, $\iota_u^*du_2=d\sigma$, and $\iota_u^*(dx'+Mu_1du_2)=Mu_1d\sigma$. The metric [F1] therefore yields the two displayed blocks, with no mixed $dx^\mu d\sigma$ term. [given, F1, F2, algebra]

2.1 Write $v_\mu=\partial_\mu u_1$ and $a=\alpha'L_{u_1}^2$. Since $g_{4,s}$ is invertible, factor $\det(g_{4,s}+a vv^{\mathsf T})=\det(g_{4,s})\det(I+a g_{4,s}^{-1}v v^{\mathsf T})$. If $v=0$ the second determinant is $1$. If $v\ne0$, let $w=g_{4,s}^{-1}v\ne0$ and use a basis whose first vector is $w$; the rank-one map $wv^{\mathsf T}$ has only its first row possibly nonzero, so $I+a\,wv^{\mathsf T}$ has determinant $1+a v^{\mathsf T}w$. Thus the determinant factor is $1+\alpha'L_{u_1}^2g_{4,s}^{\mu\nu}\partial_\mu u_1\partial_\nu u_1=1-\alpha'L_{u_1}^2\dot u_1^2$ in the assumed zero-shift cosmic-time metric. Multiplying by the positive $\sigma$-block determinant proves the square-root formula on the stated Lorentzian branch. [given, step 1.1, algebra] ∎
