---
id: ex-gr-fx07-2
kind: example
title: "Negative stationary Killing density in the Kerr ergoregion"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "A local sign calculation for the canonical scalar stress tensor and stationary Kerr multiplier; it makes no stability or observational claim."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-kerr-exterior
  - lem-gr-fx-kerr-exterior-properties
  - prop-gr-fx-kerr-horizon-generator
  - def-gr-fx-killing-energy-current
  - def-gr-scalar-field-matter-model
  - def-gr-observer-and-rest-space
  - lem-gr-observer-projection-decomposition
  - prop-gr-scalar-field-stress-energy-conservation
  - thm-gr-killing-and-on-shell-matter-identities
  - def-countable-choice
dependency_roles:
  def-gr-fx-kerr-exterior: mathematical-premise
  lem-gr-fx-kerr-exterior-properties: mathematical-premise
  prop-gr-fx-kerr-horizon-generator: mathematical-premise
  def-gr-fx-killing-energy-current: mathematical-premise
  def-gr-scalar-field-matter-model: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  prop-gr-scalar-field-stress-energy-conservation: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §7.6, PDF pp. 102-103"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §10, PDF pp. 30-31"
      url: "https://arxiv.org/pdf/0706.0622"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

At an exterior point $p$ where the stationary Killing field $T=\partial_t$ is
spacelike, let $U$ be an oriented coordinate neighborhood of $p$, restrict the
real scalar-field model to $U$, set its potential to $V=0$, fix a coupling
$K>0$, and let $n$ be any observer at $p$. There is a smooth scalar field
$\varphi:U\to\mathbb R$ for which the associated Killing-multiplier density
$\rho_T(p;n)$ is negative. Thus the density $\rho_T(p;n)$ is not nonnegative
on all scalar first-derivative data at $p$, so this multiplier cannot provide
a pointwise nonnegative density for all such data there. If a scalar field on
$U$ satisfies its scalar equation, its current is conserved. This example does
not assert that an on-shell field exists with the prescribed derivative.

## Facts & Assumptions

**Given:** An exterior Kerr point $p$ in the ergoregion, an oriented coordinate neighborhood $U$ of $p$, an observer $n$ at $p$, and a smooth real scalar field $\varphi:U\to\mathbb R$ in the scalar model with zero potential and positive constant coupling.

[F1] [[prop-gr-fx-kerr-horizon-generator]]: $T=\partial_t$ is spacelike when $r_+<r<M+\sqrt{M^2-a^2\cos^2\theta}$.

[F2] [[def-gr-observer-and-rest-space]] and [[lem-gr-observer-projection-decomposition]]: $g(n,n)=-1$, $n$ is future-directed, and $n^\perp$ is positive definite.

[F3] [[def-gr-scalar-field-matter-model]]: for $V=0$ the candidate stress tensor is $Q_{ab}=K(\partial_a\varphi\,\partial_b\varphi-\frac12g_{ab}g^{cd}\partial_c\varphi\,\partial_d\varphi)$, with $K>0$.

[F4] [[def-gr-fx-killing-energy-current]]: $j_T^a=-Q^{ab}T_b$ and $\rho_T(p;n)=-g(n,j_T)=Q_{ab}n^aT^b$.

[F5] [[prop-gr-scalar-field-stress-energy-conservation]]: for $V=0$, $\nabla^aQ_{ab}=K\Box_g\varphi\,\partial_b\varphi$, so $\Box_g\varphi=0$ implies $\nabla^aQ_{ab}=0$.

[F6] [[thm-gr-killing-and-on-shell-matter-identities]]: a symmetric divergence-free tensor contracted with a Killing field gives a divergence-free current.

[A1] The smooth Lorentzian, observer, and tangent-bundle conventions use only countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Verification

1.1 Because $T$ is spacelike by [F1], decompose it relative to $n$ as $T=\alpha n+w$, where $\alpha:=-g(T,n)$ and $w:=T+g(T,n)n\in n^\perp$. By [F2], if $\beta:=\sqrt{g(w,w)}$ then $\beta>|\alpha|$; set $e:=w/\beta$, so $g(e,e)=1$, $g(n,e)=0$, and $T=\alpha n+\beta e$. [given, A1, F1, F2, algebra]

2.1 Set $\lambda:=-(n^\flat+e^\flat)$ at $p$, where $n^\flat=g(n,\cdot)$ and $e^\flat=g(e,\cdot)$. Then $\lambda(n)=1$, $\lambda(e)=-1$, and $\lambda$ vanishes on the orthogonal complement of $\operatorname{span}\{n,e\}$. In the chosen chart $x:U\to x(U)$, define $\varphi:U\to\mathbb R$ by $\varphi(q):=\sum_{a=0}^3\lambda_a(x^a(q)-x^a(p))$. This smooth local scalar field has $d\varphi_p=\lambda$. Thus $g^{-1}(\lambda,\lambda)=-1+1=0$ and $\lambda(T)=\alpha-\beta$. [F2, step 1.1, construct]

3.1 By [F3], at $p$ the scalar stress tensor is $Q_{ab}=K(\lambda_a\lambda_b-\frac12g_{ab}g^{-1}(\lambda,\lambda))$. Using [F4] and $g^{-1}(\lambda,\lambda)=0$, $\rho_T(p;n)=Q_{ab}n^aT^b=K\lambda(n)\lambda(T)=K(\alpha-\beta)<0$. Hence the stationary Killing-multiplier density is not nonnegative on all smooth scalar first-derivative data at $p$. [F3, F4, step 1.1, step 2.1, algebra]

4.1 For any field that additionally satisfies $\Box_g\varphi=0$, [F5] makes $Q$ divergence-free and [F6] makes the associated Killing current divergence-free. This is conditional; the example does not assert existence of an on-shell solution with the selected first derivative. Step 3.1 proves that this multiplier density is not nonnegative on all smooth scalar first-derivative data at $p$. [F5, F6, step 3.1] ∎


## Remarks

The source literature also exhibits negative stationary Killing energy for particles in the ergoregion. The calculation above is for the declared massless scalar stress model and does not imply a superradiant instability or any black-hole stability conclusion.
