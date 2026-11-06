---
id: ex-rns-open-ns-vacuum-before-gso
kind: example
title: Open NS Vacuum Before the GSO Projection
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - def-rns-spin-structures-and-sectors
  - def-rns-gso-projection
  - def-rns-transverse-oscillator-system
  - pthm-rns-open-lightcone-intercepts
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-rns-gso-projection: formulation-prerequisite
  def-rns-transverse-oscillator-system: formulation-prerequisite
  pthm-rns-open-lightcone-intercepts: physical-result
physical_scope: "A worked open-string oscillator/GSO calculation in the flat ten-dimensional NN RNS model, in a chart with nonzero k^+ and with the declared zeta-regularized normal-ordering prescription and residual zero-mode constraint; it checks the stated light-cone mass and sector projection only, not BRST cohomology, spacetime supersymmetry, or observed physics."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§§6.4.3–6.5, printed pp. 137–142, NS intercept and G-parity projection."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.3.5 and 3.1.4, printed pp. 46–47 and 60–61 (PDF pp. 67–68 and 81–82), NS vacuum and open mass formula."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Example

In the flat ten-dimensional open NN RNS model, work in the light-cone chart $k^+=(k^0+k^9)/\sqrt2\ne0$ with the declared zeta-regularized normal-ordering prescription and residual zero-mode constraint. Choose the mass-shell momentum separately at each oscillator level. The unprojected NS vacuum has $N=0$, $F=0$, $G_{\rm NS}=-1$, and $\alpha'M^2=-1/2$, so the chiral supersymmetric GSO projection removes it. For any transverse index $i\in\{1,\ldots,8\}$, the first excitation $\psi^i_{-1/2}|0;k\rangle$ has $N=1/2$, $F=1$, $G_{\rm NS}=+1$, and $M^2=0$, so it passes this chiral projection. These are oscillator-level checks only; they do not verify all BRST or super-Virasoro constraints or establish a spacetime supersymmetry theorem.

## Example references

[Timo Weigand, *Introduction to String Theory*, §§6.4.3–6.5](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §§2.3.5 and 3.1.4](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Facts & Assumptions

**Given:** Use the ten-dimensional open NN model, one chiral NS sector, the unprojected vacuum and the mode/fermion-number conventions in [[def-rns-gso-projection]]. For each tested level choose momentum $k\in\mathbb R^{1,9}$ of dimension $L^{-1}$, with $k^+=(k^0+k^9)/\sqrt2\ne0$ and $M^2=-\eta_{\mu\nu}k^\mu k^\nu$, where $\eta=\operatorname{diag}(-,+,\ldots,+)$. Adopt the zeta-regularized vacuum terms and impose $L_0^{\rm lc}=0$ in [[def-rns-transverse-oscillator-system]], as required by [[pthm-rns-open-lightcone-intercepts]]. The momenta at the vacuum and first-excited levels lie on their respective mass shells and need not agree.

[F1] [[def-rns-gso-projection]]: $F$ counts nonzero fermion excitations modulo two, the NS vacuum has $F=0$, $G_{\rm NS}=(-1)^{F+1}$, and the chiral supersymmetric projection retains the $G=+1$ eigenspace.

[F2] [[pthm-rns-open-lightcone-intercepts]]: for the flat ten-dimensional open NN string in the nonzero-$k^+$ chart with the declared zeta prescription and residual zero-mode constraint, $\alpha'M^2=N-1/2$ in NS before GSO.

[F3] [[def-rns-transverse-oscillator-system]]: NS modes are half-integral, there are eight transverse directions at $D=10$, and each fermion creation mode $\psi^i_{-r}$ contributes oscillator level $r$.

[F4] [[post-rns-flat-worldsheet-model]]: $\alpha' > 0$, so dividing by $\alpha'$ preserves the sign of $M^2$.

## Verification

1.1 On the vacuum, $N=0$ by definition and $F=0$ by the vacuum convention in [F1]. Thus $G_{\rm NS}=(-1)^{0+1}=-1$, which fails the retained eigenvalue $+1$. [given, F1, algebra]

2.1 Applying one creation mode $\psi^i_{-1/2}$ adds level $1/2$ and one fermion excitation by [F3], so $N=1/2$ and $F=1$. Hence $G_{\rm NS}=(-1)^{1+1}=+1$, which satisfies [F1]'s projection. [given, F1, F3, step 1.1, algebra]

3.1 Substitution of $N=0$ and $N=1/2$ into [F2] gives respectively $\alpha'M^2=-1/2$ and $\alpha'M^2=0$. Since $\alpha'>0$, the first has negative mass squared and the second has $M^2=0$. The calculation checks only the level and GSO criteria stated in the example. [given, F2, F4, step 1.1, step 2.1, algebra] ∎

## Remarks

The first NS excitation passes the displayed sector projection, but this short calculation does not separately check BRST closure or all residual super-Virasoro constraints. It is not a complete physical-state classification.
