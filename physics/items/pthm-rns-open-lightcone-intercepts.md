---
id: pthm-rns-open-lightcone-intercepts
kind: physics-theorem
title: Open RNS Light-Cone Intercepts
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - def-rns-spin-structures-and-sectors
  - pthm-rns-criticality-central-charge-cancellation
  - def-rns-transverse-oscillator-system
  - lem-rns-hurwitz-zeta-at-minus-one
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  pthm-rns-criticality-central-charge-cancellation: physical-result
  def-rns-transverse-oscillator-system: formulation-prerequisite
  lem-rns-hurwitz-zeta-at-minus-one: mathematical-premise
physical_scope: "Free flat ten-dimensional open RNS string with NN boundary conditions, in a nonzero-p^+ light-cone chart and the declared zeta-regularized normal-ordering prescription; no GSO, BRST, or no-ghost equivalence is inferred."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§§6.4.3–6.5, printed pp. 137–142, normal-ordering constants and open NS/R light-cone spectrum."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§3.1.4, printed pp. 60–61 (PDF pp. 81–82), open-string mass shell; §§2.3.5–2.3.6, printed pp. 46–48 (PDF pp. 67–69), NS/R vacua."
verification:
  precheck: pending
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
proof_strategy: direct
---

## Statement

For the flat ten-dimensional open RNS string with NN boundary conditions in all target directions, in a light-cone chart with $p^+\ne0$ and with the declared zeta-regularized normal-ordering prescription, the unprojected mass formulas are
$$\alpha'M^2=N-\frac12\quad\text{in NS},\qquad \alpha'M^2=N\quad\text{in R},$$
where $M^2=-p^2$. Thus the unprojected NS vacuum is tachyonic with $M^2=-1/(2\alpha')$, and the R ground state is massless. The GSO projection and the identification of these states with covariant BRST cohomology are separate.

## Statement references

[Timo Weigand, *Introduction to String Theory*, §§6.4.3–6.5](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §3.1.4](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Facts & Assumptions

**Given:** Let $D\in\mathbb Z_{>0}$ and impose the local criticality condition in [F3], as well as $\alpha'>0$, open NN boundary conditions in all target directions, $p^+\ne0$, $p^2=-M^2$, and the residual light-cone zero-mode constraint and zeta prescription in [[def-rns-transverse-oscillator-system]]. Keep the NS vacuum before GSO.

[F1] [[post-rns-flat-worldsheet-model]]: the target is flat $\mathbb R^{1,D-1}$ with Lorentzian metric and $\alpha'$ is the length-squared parameter in the action.

[F2] [[def-rns-spin-structures-and-sectors]]: NS fermion modes are half-integral and R modes integral, with periodic R zero modes.

[F3] [[pthm-rns-criticality-central-charge-cancellation]]: for this flat RNS model, local central-charge cancellation is equivalent to $D=10$.

[F4] [[def-rns-transverse-oscillator-system]]: there are $D-2$ transverse oscillator directions; the open zero mode is $\alpha_0^\mu=\sqrt{2\alpha'}p^\mu$, $L_0^{\rm lc}=\frac12\alpha_0^2+N+A_B+A_F=0$, and the vacuum sums are $A_B=\frac{D-2}{2}\sum_{n\ge1}n$ and $A_F=-\frac{D-2}{2}\sum_{r>0}r$ under zeta regularization.

[F5] [[lem-rns-hurwitz-zeta-at-minus-one]]: $\zeta(-1,a)=-\frac12(a^2-a+1/6)$, so $\zeta(-1,1)=-1/12$ and $\zeta(-1,1/2)=1/24$.

## Proof

1.1 By [F3], $D=10$, so [F4] has eight transverse bosons. Their zero-point term is $A_B=\frac82\sum_{n\ge1}n=4\zeta(-1,1)=-1/3$ by [F5]. [given, F3, F4, F5, algebra]

2.1 In NS the positive fermion frequencies are $r=n+1/2$, $n\ge0$, by [F2]. Therefore $A_F^{NS}=-(8/2)\sum_{n\ge0}(n+1/2)=-4\zeta(-1,1/2)=-1/6$ by [F4]–[F5]. The total vacuum term is $A_{NS}=-1/3-1/6=-1/2$, so its intercept, defined as $a_{NS}=-A_{NS}$ in $L_0=\alpha'p^2+N-a_{NS}$, is $1/2$. [given, F2, F4, F5, step 1.1, algebra]

2.2 In R the positive fermion frequencies are positive integers, again by [F2]. Hence $A_F^R=-4\zeta(-1,1)=+1/3$ by [F4]–[F5], and $A_R=A_B+A_F^R=0$, giving $a_R=0$. The R zero modes have frequency zero and make no vacuum-energy contribution. [given, F2, F4, F5, step 1.1, algebra]

3.1 The open normalization in [F4] gives $\frac12\alpha_0^2=\alpha'p^2=-\alpha'M^2$. The constraint $L_0^{\rm lc}=0$ is therefore $-\alpha'M^2+N-a=0$ in each sector. Substituting $a_{NS}=1/2$ from step 2.1 and $a_R=0$ from step 2.2 gives the two stated mass formulas. At $N=0$ they give respectively $M^2=-1/(2\alpha')$ and $M^2=0$. [given, F1, F4, step 2.1, step 2.2, algebra] ∎

## Remarks

The NS vacuum's negative mass squared is a pre-GSO result; [[def-rns-gso-projection]] removes it from the chiral supersymmetric projection. This calculation is a light-cone oscillator deduction and proves neither BRST equivalence nor the no-ghost theorem.
