---
id: pthm-rns-criticality-central-charge-cancellation
kind: physics-theorem
title: RNS Local Central-Charge Cancellation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - def-rns-local-operator-algebra-conventions
  - def-st-bosonic-bc-ghost-system
  - def-rns-beta-gamma-superghost-picture-system
  - def-cft-r5-n1-superconformal-algebra
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  def-rns-local-operator-algebra-conventions: formulation-prerequisite
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  def-rns-beta-gamma-superghost-picture-system: formulation-prerequisite
  def-cft-r5-n1-superconformal-algebra: mathematical-premise
physical_scope: "Local chiral central-charge cancellation for the free flat RNS matter and standard conformal ghosts; it is not a global Weyl, modular, GSO, spacetime gauge, or gravitational anomaly theorem."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§6.4.3, printed pp. 137–138, matter central charge; §6.5, printed p. 140, critical dimension."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.3.2–2.3.6, printed pp. 43–48 (PDF pp. 64–69), superghost stress and bosonization; §3.1.2, printed pp. 57–58 (PDF pp. 78–79), BRST conventions."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

For the flat RNS model with $D$ free real target scalars and $D$ real worldsheet Majorana fermions in each chirality, together with reparametrization $bc$ ghosts of weights $(2,-1)$ and commuting $\beta\gamma$ ghosts of weights $(3/2,-1/2)$, the matter central charge is $c_m=3D/2$, the ghost central charge is $c_{gh}=-26+11=-15$, and the total local central term per chirality is $c_{tot}=3D/2-15$. Thus $c_{tot}=0$ if and only if $D=10$. This is the local central-charge cancellation condition of the gauge-fixed flat model.

## Statement references

[Timo Weigand, *Introduction to String Theory*, §§6.4.3–6.5](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §§2.3 and 3.1.2](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Facts & Assumptions

**Given:** $D\in\mathbb Z_{>0}$. Use the OPEs and radial normal ordering in [[def-rns-local-operator-algebra-conventions]], the $bc$ system in [[def-st-bosonic-bc-ghost-system]], the commuting $\beta\gamma$ stress tensor in [[def-rns-beta-gamma-superghost-picture-system]], and the $N=1$ central-charge normalization in [[def-cft-r5-n1-superconformal-algebra|$N=1$ superconformal mode algebra in NS and Ramond sectors]]. The statement concerns one chiral copy; the barred copy has the same calculation.

[F1] [[post-rns-flat-worldsheet-model]]: there are $D$ real scalars and $D$ real worldsheet Majorana fields, with flat free-field action and target dimension $D$.

[F2] [[def-rns-local-operator-algebra-conventions]]: $T_X=-\alpha'^{-1}:\partial X\cdot\partial X:$, $T_\psi=-\frac12:\psi\cdot\partial\psi:$, $G_m=i\sqrt{2/\alpha'}:\psi\cdot\partial X:$, $T_{bc}=-2:b\partial c:-:\partial b\,c:$, and $T(z)T(w)$ has central coefficient $c/2$.

[F3] [[def-st-bosonic-bc-ghost-system]]: $b(z)c(w)\sim(z-w)^{-1}$, $\{b_m,c_n\}=\delta_{m+n,0}I$, the fields anticommute, and their weights are $(2,-1)$.

[F4] [[def-rns-beta-gamma-superghost-picture-system]]: $\beta,\gamma$ commute, have weights $(3/2,-1/2)$, and $T_{\beta\gamma}=-\frac32:\partial\gamma\,\beta:-\frac12:\gamma\partial\beta:$.

[F5] [[def-cft-r5-n1-superconformal-algebra|$N=1$ superconformal mode algebra in NS and Ramond sectors]]: $\{G_r,G_s\}=2L_{r+s}+\frac{r^2-\frac14}{3}\delta_{r+s,0}C$, which fixes the supercurrent central normalization used by the matter OPE.

## Proof


1.1 For one scalar, the only $u^{-4}$ contribution to $T_X(z)T_X(w)$ is its two pairings of $\partial X$ with $\partial X$, each $-\alpha'/(2u^2)$ by [F2]. Their product with the prefactor $\alpha'^{-2}$ is $1/(2u^4)$, so this scalar contributes $c=1$. For one Majorana field, the contraction $\psi(z)\psi(w)=u^{-1}$ and its derivatives give a double-contraction coefficient $1/(4u^4)$ after the factor $(-1/2)^2$, so it contributes $c=1/2$. Independent fields have no cross contractions; summing the $D$ copies gives $c_m=D+D/2=3D/2$. [given, F1, F2, algebra]

1.2 For a fermionic first-order pair of weights $(\lambda,1-\lambda)$ with $T=(1-\lambda):\partial b\,c:-\lambda:b\,\partial c:$, put $A=:\partial b\,c:$ and $B=:b\,\partial c:$. The CAR in [F3] give the radial contractions $b(z)c(w)=c(z)b(w)=u^{-1}$; differentiating gives $\partial b(z)c(w)=-u^{-2}$, $b(z)\partial c(w)=u^{-2}$, $\partial b(z)\partial c(w)=-2u^{-3}$, and $\partial c(z)b(w)=-u^{-2}$. Pairing the two cross contractions in each normal-ordered product, with the fermionic Wick sign, gives the double-contraction coefficients $-1,-2,-2,-1$ times $u^{-4}$ for $AA,AB,BA,BB$. Weighting them by $(1-\lambda)^2$, $-\lambda(1-\lambda)$ twice, and $\lambda^2$ yields $-(1-\lambda)^2-\lambda^2+4\lambda(1-\lambda)=-(6\lambda^2-6\lambda+1)$. At $\lambda=2$, this is the explicit $T_{bc}$ declared in [F2], and the coefficient is $-13$, so $c_{bc}/2=-13$ and $c_{bc}=-26$. [given, F2, F3, algebra]

2.1 Contracting the two factors of $G_m=i\sqrt{2/\alpha'}\,\psi\cdot\partial X$ once in each field gives $D u^{-3}$; the single contractions give $2T_m(w)u^{-1}$. Hence $G_m(z)G_m(w)\sim D u^{-3}+2T_m(w)u^{-1}$. For a weight-$3/2$ current, if the leading OPE coefficient is $\kappa(z-w)^{-3}$, it contributes $\frac\kappa2(r^2-\frac14)\delta_{r+s,0}$ to $\{G_r,G_s\}$: expand $z^{r+1/2}$ to second order about $w$ in the two contour integrals. Matching [F5]'s coefficient $\frac c3(r^2-\frac14)$ gives $\kappa=2c/3$. Here $\kappa=D$, so $c_m=3D/2$, agreeing with step 1.1. [given, F1, F2, F5, step 1.1, algebra]

2.2 For the commuting pair, radial exchange in [F4]'s ordered convention gives $\gamma(z)\beta(w)=u^{-1}$ and $\beta(z)\gamma(w)=-u^{-1}$. Thus the four double-contraction coefficients for $AA,AB,BA,BB$ in the reordered first-order stress tensor have signs $+1,+2,+2,+1$ times $u^{-4}$. Reordering [F4] gives $T_{\beta\gamma}=-\frac32:\beta\partial\gamma:-\frac12:\partial\beta\,\gamma:$, the same bilinear form with $\lambda=3/2$ and commuting Wick signs. Its coefficient is $(1-\lambda)^2+\lambda^2-4\lambda(1-\lambda)=6\lambda^2-6\lambda+1=11/2$, so $c_{\beta\gamma}=11$. [given, F4, step 1.2, algebra]

3.1 The total stress tensor is the sum of independent matter, $bc$, and $\beta\gamma$ stresses, so there are no cross-contraction central terms. Adding the charges from steps 1.1, 1.2 and 2.2 gives $c_{tot}=3D/2-26+11=3D/2-15$. Solving $c_{tot}=0$ gives $D=10$, and substituting $D=10$ gives zero; since $D$ is an integer, this is exactly the stated iff. This is a local chiral cancellation only. [given, F1, step 1.1, step 1.2, step 2.2, algebra] ∎
## Remarks

The result supplies the local criticality input for [[pthm-rns-open-lightcone-intercepts]], [[pthm-rns-closed-lightcone-level-matching]], and the conditional BRST-cohomology interface [[def-rns-physical-state-brst-cohomology]]. It does not prove global Weyl invariance, modular invariance, GSO locality, or spacetime anomaly cancellation.
