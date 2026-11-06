---
id: pthm-rns-closed-lightcone-level-matching
kind: physics-theorem
title: Closed RNS Light-Cone Mass Shell and Level Matching
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
physical_scope: "Free flat ten-dimensional closed RNS string, in a nonzero-p^+ light-cone chart and the stated zeta-regularized normal ordering; GSO, BRST, interactions, and higher-genus sewing are excluded."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.6, printed p. 142, equations (6.115)–(6.118), closed-string mass shell, level matching and NS/R intercepts."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.3.5–2.3.6, printed pp. 46–48 (PDF pp. 67–69), NS/R vacuum conventions; §3.1.4, printed pp. 60–61 (PDF pp. 81–82), open mass shell. The closed factor of four is sourced to Weigand (6.115)."
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
proof_strategy: direct
---

## Statement

For the flat ten-dimensional closed RNS string in light-cone gauge, let $N_L,N_R$ be the left and right transverse oscillator numbers, and let $a_{NS}=1/2$, $a_R=0$. In any sector pair $(s_L,s_R)\in\{NS,R\}^2$, the two zero-mode constraints give
$$\frac{\alpha'M^2}{4}=N_L-a_{s_L}=N_R-a_{s_R}.$$
Their equality is level matching. This is the free-string formula sector by sector before the chosen GSO combination.

## Statement references

[Timo Weigand, *Introduction to String Theory*, Chapter 6.6](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §§2.3 and 3.1.4](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Facts & Assumptions

**Given:** Let $D\in\mathbb Z_{>0}$ and impose the local criticality condition in [F3], with a closed string, $p^+\ne0$, $p^2=-M^2$, independent chiral modes, and the residual left and right light-cone zero-mode constraints in [[def-rns-transverse-oscillator-system]].

[F1] [[post-rns-flat-worldsheet-model]]: the target metric is Lorentzian and $\alpha'$ has dimension length squared.

[F2] [[def-rns-spin-structures-and-sectors]]: each chirality has NS half-integer or R integer fermion modes.

[F3] [[pthm-rns-criticality-central-charge-cancellation]]: the local flat RNS central term cancels exactly at $D=10$.

[F4] [[def-rns-transverse-oscillator-system]]: there are $D-2$ transverse modes in each chirality, the closed zero modes are $\alpha_0^\mu=\widetilde\alpha_0^\mu=\sqrt{\alpha'/2}p^\mu$, and each chiral constraint is $\frac12\alpha_0^2+N+A_B+A_F=0$ with the displayed zeta prescription.

[F5] [[lem-rns-hurwitz-zeta-at-minus-one]]: $\zeta(-1,1)=-1/12$ and $\zeta(-1,1/2)=1/24$.

## Proof

1.1 By [F3], $D=10$, hence there are eight transverse bosonic modes per chirality by [F4]. Their vacuum term is $A_B=4\zeta(-1,1)=-1/3$ by [F5]. [given, F3, F4, F5, algebra]

2.1 For an NS chirality, [F2] gives positive frequencies $n+1/2$, so $A_F^{NS}=-4\zeta(-1,1/2)=-1/6$ by [F4]–[F5]; thus $A_{NS}=-1/2$ and $a_{NS}:=-A_{NS}=1/2$. For an R chirality, the positive frequencies are integers, so $A_F^R=-4\zeta(-1,1)=+1/3$ and $A_R=0$, hence $a_R=0$. R zero modes have frequency zero. [given, F2, F4, F5, step 1.1, algebra]

3.1 For either chirality, [F4] gives $\frac12\alpha_0^2=\alpha'p^2/4=-\alpha'M^2/4$. Its constraint becomes $-\alpha'M^2/4+N-a_s=0$, where $a_s$ is the value from step 2.1. Therefore $\alpha'M^2/4=N-a_s$ separately on the left and right. [given, F1, F4, step 2.1, algebra]

4.1 The same momentum $p^\mu$ occurs in both closed zero modes by [F4]. Equating the two expressions for $\alpha'M^2/4$ from step 3.1 gives $N_L-a_{s_L}=N_R-a_{s_R}$, exactly the level-matching condition. No open-string zero-mode normalization or post-GSO restriction has been used. [given, F2, F4, step 3.1, algebra] ∎

## Remarks

For NS-NS, level matching reads $N_L-1/2=N_R-1/2$; for R-R it reads $N_L=N_R$. Mixed NS-R and R-NS sectors have the corresponding half-unit shift. The equality is a consequence of the two free closed-string constraints, not modular invariance or an interacting sewing theorem.
