---
id: pthm-rns-flat-action-variation
kind: physics-theorem
title: Flat RNS Action Euler–Lagrange Equations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
physical_scope: "Classical local variations of the flat gauge-fixed RNS action with compactly supported variations; boundary terms, global supersymmetry charges, quantum anomalies, and interacting backgrounds are excluded."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.1, printed pp. 128–130, equations (6.7)–(6.11), gauge-fixed action and field equations."
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

For the adopted flat RNS action, let $x^\pm=\tau\pm\sigma$ and $\partial_\pm=\frac12(\partial_\tau\pm\partial_\sigma)$. For compactly supported variations, with odd variations tested in the exterior extensions specified below, the Euler–Lagrange equations are $\partial_+\partial_-X^\mu=0$, $\partial_-\psi_+^\mu=0$, and $\partial_+\psi_-^\mu=0$.

## Statement references

[[post-rns-flat-worldsheet-model]]

[Timo Weigand, *Introduction to String Theory*, Chapter 6.1](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

## Facts & Assumptions

**Given:** Work locally with the Lorentzian metric and spinor conventions in [[post-rns-flat-worldsheet-model]], dimensionless $\tau,\sigma$, and compactly supported variations. Put $\psi=(\psi_+,\psi_-)^T$.

[F1] [[post-rns-flat-worldsheet-model]]: the adopted action is $-\frac1{8\pi}\int[(2/\alpha')\partial_aX\cdot\partial^aX+2i\bar\psi\rho^a\partial_a\psi]d^2\sigma$.

[A1] Use the local classical field domain fixed in [[post-rns-flat-worldsheet-model]]: on the bounded coordinate rectangle $\Omega$, $X\in C^2(\overline\Omega;M)$ and $\psi\in C^1(\overline\Omega;\Lambda_{\bar1}\otimes M\otimes\mathbb R^2)$. Take $\delta X\in C_c^2(\Omega;M)$. For odd variation tests extend $\Lambda$ to $\Lambda^+=\Lambda\otimes\bigwedge(\theta)$ with one fresh odd generator $\theta$, using the graded tensor product; the fields remain in the original embedded $\Lambda$. Allow independent compactly supported odd variations in $\Lambda^+$, in particular $\delta\psi_\pm^\mu=\theta f$ for every real $f\in C_c^1(\Omega)$ in one component at a time. Stationarity means that every such first variation is zero in $\Lambda^+\otimes_{\mathbb R}\mathbb C$; the complexification accommodates the factor $i$ in the action. This is the formal Grassmann variational convention, rather than testing only within a fixed finite odd algebra. Grassmann-valued integrals are taken coefficientwise. Use left Grassmann variations, so moving an odd variation past an odd field changes sign; compact support removes all boundary terms.

## Proof

1.1 Substitution of the fixed $\rho^a$ and $\bar\psi$ into [F1] gives $S_B=(1/(\pi\alpha'))\int\partial_+X\cdot\partial_-X$. Varying $X$ and integrating each derivative off $\delta X$ gives $\delta S_B=-(2/(\pi\alpha'))\int\delta X\cdot\partial_+\partial_-X$. Since compactly supported component variations are arbitrary, $\partial_+\partial_-X^\mu=0$ for each $\mu$. [given, F1, A1, algebra]

2.1 The same substitution gives $S_F=(i/(2\pi))\int(\psi_+\cdot\partial_-\psi_++\psi_-\cdot\partial_+\psi_-)d^2\sigma$. For a left Grassmann variation, integration by parts and reordering the two odd factors make the two terms in each variation equal, so $\delta S_F=(i/\pi)\int(\delta\psi_+\cdot\partial_-\psi_++\delta\psi_-\cdot\partial_+\psi_-)d^2\sigma$. Testing a single component with $\delta\psi=\theta f$, multiplication by $\theta$ is injective on the embedded $\Lambda$ (distinct original exterior monomials remain distinct after adjoining $\theta$). The first variation therefore forces each original Grassmann coefficient of the integral against $f$ to vanish. The ordinary fundamental lemma applied to these continuous real coefficient functions, with $f\in C_c^1(\Omega)$ arbitrary, gives $\partial_-\psi_+^\mu=0$ and $\partial_+\psi_-^\mu=0$. [given, F1, A1, algebra] ∎

## Remarks

The gauge-fixed action and equations match Weigand, Chapter 6.1, equations (6.7)–(6.11). The source's stress and supercurrent formulas are adopted in [[post-rns-flat-worldsheet-model]]; their parent metric/gravitino Noether derivation is not supplied by this gauge-fixed-action variation. Euclidean OPE normalization and central-charge cancellation are separate.
