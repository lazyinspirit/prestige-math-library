---
id: pthm-cft-rns-one-odd-modulus-pco-insertion
kind: physics-theorem
title: One NS odd modulus produces a PCO plus its position differential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-type-ii-superstring-amplitude-data
justified_by: []
domain: physics
library: physics
dependency_roles:
  def-cft-type-ii-superstring-amplitude-data: formulation-prerequisite
physical_scope: "Local closed type-II RNS amplitude data for an NS superdisc with one odd modulus, at a PCO point away from the source's spurious-singularity locus."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Wang and Xi Yin, On the Equivalence between SRS and PCO Formulations of Superstring Perturbation Theory, arXiv:2205.01106v2"
      url: https://arxiv.org/pdf/2205.01106v2
      locator: "§5.1, equations (5.1)–(5.7), PDF pp. 17–18."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the local NS superdisc gluing deformation with one odd coordinate $\nu$ and moving center $z_0(t)$ in the closed type-II amplitude data specified on this page, Berezin integration over $\nu$ turns its local superintegrand factor into the PCO insertion $X(z_0(t))+d_Y\xi(z_0(t))$.

## Statement references

[[def-cft-type-ii-superstring-amplitude-data]]

## Facts & Assumptions

**Given:** The odd parameter satisfies $\nu^2=0$, and $z_0(t)$ is a smooth function of the even moduli. The local transition is $w=z-\theta\nu/(z-z_0(t))$, $\eta=\theta-\nu/(z-z_0(t))$.

[F1] [[def-cft-type-ii-superstring-amplitude-data]]: the local factor is $(1+\nu G_{z_0})\exp(B_{z_0})\delta(d\nu)\delta(B_\nu)$, with $B_{z_0}=-2\nu\partial\beta(z_0)\,dz_0$, $B_\nu=2\beta(z_0)-\nu\partial b(z_0)$, $\int d\nu\,\nu=1$, $\xi=-\Theta(\beta)$, and $\partial_\beta\Theta(\beta)=\delta(\beta)$.

[F2] [[def-cft-type-ii-superstring-amplitude-data]]: $X(z)=\frac12\oint_{C_z}\frac{dw}{2\pi i}\frac{G(w)}{w-z}\delta(\beta(z))-\frac14\partial b(z)\delta'(\beta(z))$, and $d_Y\xi(z_0)=-dz_0\,\partial_{z_0}\Theta(\beta(z_0))$.

## Proof

1.1 Taylor expansion of the formal distribution at the even argument gives $\delta(B_\nu)=\delta(2\beta-\nu\partial b)=\frac12\delta(\beta)-\frac{\nu}{4}\partial b\,\delta'(\beta)$, using $\delta(a\beta+\nu c)=a^{-1}\delta(\beta)+a^{-2}\nu c\delta'(\beta)$ from [F1]. [given, F1, algebra]

2.1 Multiplying this by $1+\nu G_{z_0}$, the coefficient of $\nu$ from the correlator deformation is $\frac12G_{z_0}\delta(\beta(z_0))-\frac14\partial b(z_0)\delta'(\beta(z_0))$. Substituting $G_{z_0}=\oint_{C_{z_0}}\frac{dw}{2\pi i}\frac{G(w)}{w-z_0}$ and applying $\int d\nu\,\nu=1$ identifies this contribution with $X(z_0)$. [given, F1, F2, step 1.1, algebra]

2.2 Since $B_{z_0}$ is already proportional to $\nu$, the exponential contributes only its linear term. Multiplying $-2\nu\partial\beta(z_0)dz_0$ by the constant term $\frac12\delta(\beta(z_0))$ in $\delta(B_\nu)$ gives $-\nu dz_0\partial_{z_0}\Theta(\beta(z_0))$ by $\partial_\beta\Theta(\beta)=\delta(\beta)$. Berezin integration therefore gives $d_Y\xi(z_0)$. [given, F1, step 1.1, algebra]

3.1 The two coefficient contributions add, so the odd-coordinate integral is exactly $X(z_0(t))+d_Y\xi(z_0(t))$. This is a conditional model deduction from the supplied supermoduli coupling and ghost conventions; it does not define a functional measure. [given, F1, F2, step 2.1, step 2.2] ∎

## Remarks

When $z_0$ is fixed on the even-moduli patch, $d_Y\xi(z_0)=0$ and the contribution is $X(z_0)$. At a spurious-singularity point the amplitude data do not define this local insertion, so the statement excludes it.
