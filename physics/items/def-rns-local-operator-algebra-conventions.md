---
id: def-rns-local-operator-algebra-conventions
kind: definition
title: Local RNS Free-Field Operator Conventions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - pthm-rns-flat-action-variation
  - def-st-bosonic-bc-ghost-system
  - def-cft-r5-n1-superconformal-algebra
  - def-cft-r5-free-fermion-spin-theory
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  pthm-rns-flat-action-variation: physical-result
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  def-cft-r5-n1-superconformal-algebra: mathematical-premise
  def-cft-r5-free-fermion-spin-theory: mathematical-premise
physical_scope: "Local chiral Euclidean free-field OPE and stress-current conventions for one RNS chirality; excludes a global spin sum, path-integral measure, and interacting worldsheets."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.1, printed pp. 128–131, action, Noether currents, and constraints; §6.4.3, printed pp. 137–138, superconformal normalization."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "§5.4, printed pp. 68–70, equations (5.16)–(5.18): N=1 supercurrent OPE and mode-algebra central normalization; the source's component current $T_F$ is half-normalized relative to $G_m$ here."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.1.5–2.1.6, PDF pp. 32–34, equations (2.1.17)–(2.1.22): free-field two-point functions/OPEs, stress tensor, supercurrent, and matter central charge."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use one chiral Euclidean coordinate $z$ and write $u=z-w$. The target metric is $\eta_{\mu\nu}=\operatorname{diag}(-,+,\ldots,+)$, with target indices contracted using $\eta$. Fix the free-field OPEs
$$X^\mu(z)X^\nu(w)\sim-\frac{\alpha'}2\eta^{\mu\nu}\log u,\qquad \psi^\mu(z)\psi^\nu(w)\sim\frac{\eta^{\mu\nu}}u.$$
The corresponding derivative contraction is $\partial X^\mu(z)\partial X^\nu(w)\sim-\frac{\alpha'}{2}\eta^{\mu\nu}u^{-2}$. Normal ordering is radial point-splitting with these singular parts subtracted. Define
$$T_m=T_X+T_\psi,\qquad T_X=-\frac1{\alpha'}:\partial X\cdot\partial X:, \qquad T_\psi=-\frac12:\psi\cdot\partial\psi:, \qquad G_m=i\sqrt{\frac2{\alpha'}}:\psi\cdot\partial X:.$$
The $N=1$ current convention is $G_m(z)G_m(w)\sim D u^{-3}+2T_m(w)u^{-1}$, matched to the declared $N=1$ mode-algebra central normalization. The matter stress convention is $T(z)T(w)\sim\frac{c}{2}u^{-4}+2T(w)u^{-2}+\partial T(w)u^{-1}$.

For the reparametrization ghosts use anticommuting $b,c$ fields of weights $(2,-1)$ with OPE $b(z)c(w)\sim(z-w)^{-1}$, and stress tensor $T_{bc}=-2:b\partial c:-:\partial b\,c:$. This is the local free-field convention consumed by the RNS criticality calculation; closed strings use an independent barred copy. It defines neither a global determinant nor a functional measure.

## Definition references

[[post-rns-flat-worldsheet-model]]

[[pthm-rns-flat-action-variation]]

[[def-st-bosonic-bc-ghost-system]]

[[def-cft-r5-n1-superconformal-algebra|$N=1$ superconformal mode algebra in NS and Ramond sectors]]

[Timo Weigand, *Introduction to String Theory*, Chapter 6](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Paul Ginsparg, *Applied Conformal Field Theory*, §5.4](https://arxiv.org/pdf/hep-th/9108028v1)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §§2.1.5–2.1.6](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Remarks

The local criticality theorem [[pthm-rns-criticality-central-charge-cancellation]] derives the matter charge $c_m=3D/2$ from these OPE conventions. The Majorana OPE and stress normalization are compatible with the single-real-fermion component convention in [[def-cft-r5-free-fermion-spin-theory]]. That supplier's nonchiral common-spin-structure sum is not the independent left/right RNS sector sum. The Lorentzian free-field equations in [[pthm-rns-flat-action-variation]] identify the chiral on-shell restriction; these Euclidean OPEs and the $N=1$ current are the quantized free-field conventions, with the factor of $i$ fixed by the latter's normalization. Schlotterer's §2.1.6 current is $G_{\rm Sch}=i(2\alpha')^{-1/2}:\psi\cdot\partial X:$, while $G_m=2G_{\rm Sch}$ here. Ginsparg's component OPE $T_F(z)T_F(w)\sim c/6\,(z-w)^{-3}+\tfrac12T(w)(z-w)^{-1}$ therefore gives $G_m(z)G_m(w)\sim(2c/3)(z-w)^{-3}+2T(w)(z-w)^{-1}$; with $c=3D/2$ the leading coefficient is $D$, as stated above.
