---
id: def-string-punctured-moduli-amplitude-form
kind: definition
title: Local punctured-moduli perturbative amplitude form
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 7
domain: physics
physical_scope: Chartwise formal correlator form on a specified stable pointed analytic family; it is not a determinant-line
  section, global measure, or convergent moduli integral.
deps:
- def-string-vertex-operator-and-covariant-insertion
- def-string-bc-ghost-moduli-pairing
- pthm-string-beltrami-antighost-pairing-coordinate-invariance
- def-cft-pointed-analytic-worldsheet
- def-genus-and-euler-characteristic-compact-riemann-surface
- def-axiom-of-choice
dependency_roles:
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  def-string-bc-ghost-moduli-pairing: formulation-prerequisite
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  pthm-string-beltrami-antighost-pairing-coordinate-invariance: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: David Tong, String Theory, Cambridge Part III notes
    url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
    locator: §6.4.1, printed pp. 145–147, torus modulus, local moduli quotient, and formal path-integral status.
  - title: 'Edward Witten, Superstring Perturbation Theory via Super Riemann Surfaces: An Overview'
    url: https://arxiv.org/pdf/1304.2832v4
    locator: §§3.1–3.2, PDF pp. 27–36, local amplitude forms, sewing coordinates, and the distinction between local expressions
      and global integration prescriptions.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $m,n,g\in\mathbb Z_{\ge0}$, let $U\subset\mathbb C^m$ be a connected open chart, and let $\pi:\mathcal C\to U$ be a specified analytic family of pointed compact worldsheets in the sense of Pointed analytic worldsheet and family, with connected fibers of common genus $g$ and exactly $n$ marked sections. In this item, a fiber is called **stable** when $2g-2+n>0$; only smooth fibers are considered, not nodal curves. Assume the family has local coordinates and tangent representatives $\mu_a,\bar\mu_a$. Assume an instance supplies vertex representatives, the bosonic $bc$ system, and a multilinear local CFT correlator functional on their ordered products. Require its evaluated coefficients to be $C^\infty$ functions on $U$ and require worldsheet-coordinate equivariance: simultaneous passive coordinate transport of all field and density inputs, including the fixed ghost zero-mode normalization, leaves the evaluation on the same tangent vectors unchanged. Thus any anomaly multiplier on these overlaps is assumed trivial in the chosen local trivialization. This is additional local model data, not implied by the individual primary-field laws. Fix a partition of the external insertions into unintegrated representatives used to fix residual conformal-Killing zero modes and integrated representatives carrying their stated insertion forms. Define the chartwise amplitude form by its evaluation on the tangent basis as the declared correlator functional with the ordered insertions
$$\biggl\langle\prod_{i\in I_0}c\bar c V_i\;\prod_{j\notin I_0}V_j^{\mathrm{int}}\;\prod_{a=1}^{m}(b,\mu_a)(\bar b,\bar\mu_a)\biggr\rangle_U,$$
where $I_0$, the ghost/picture conventions, the correlator functional, and any puncture-coordinate integrations are fixed as part of the instance. If the model uses a different but equivalent gauge-fixed representative, its conversion is additional input. This defines only the local form on $U$; it does not construct a global determinant-line section, compactified moduli space, regulator, or integral.

## Definition references

[[def-cft-pointed-analytic-worldsheet]]

## Facts & Assumptions

**Given:** A fixed genus-$g$ pointed analytic family, a local correlator functional, declared integrated/unintegrated on-shell vertex representatives, a tangent basis, and an explicit conformal-Killing prescription. Assume full AC for the supplied genus convention.

[F1] [[def-cft-pointed-analytic-worldsheet]] supplies the local family and puncture-coordinate data; it expressly does not assert existence of a moduli space or compactification.

[F2] [[def-string-vertex-operator-and-covariant-insertion]] gives the local passive-coordinate transformation law for primary insertion forms and separates physical BRST cohomology from primarity.

[F3] [[def-string-bc-ghost-moduli-pairing]] defines the local $b$-Beltrami insertions and requires the conformal-Killing treatment to be specified.

[F4] [[lem-string-beltrami-antighost-pairing-coordinate-invariance]] proves the coordinate invariance of each local antighost pairing.

[F5] [[def-genus-and-euler-characteristic-compact-riemann-surface]] carries the stated full-AC hypothesis for the compact surface genus convention.

[A1] The supplied CFT correlator functional, its ghost zero-mode normalization, and the chosen local gauge-fixing representative exist for this chart and satisfy the smoothness, multilinearity and worldsheet-coordinate equivariance required in the Definition; no carrier in this pair constructs them.

## Proof

1.1 On the fixed family and marked local-coordinate charts of [F1], with the genus label understood under [F5] and [A1], a passive coordinate change on the worldsheet makes each primary insertion form in [F2] invariant by its stated transformation law, while each antighost pairing in [F4] is invariant. The unintegrated $c\bar c$ factors transform with the declared ghost weights and the fixed zero-mode prescription in [F3]; the integrated representatives use their declared insertion forms. The equivariance hypothesis in [A1], applied to these simultaneously transported inputs, then implies that the correlator in the Definition has the same value for the same tangent vectors in overlapping worldsheet charts, conditional on [A1]. [given, F1, F2, F3, F4, F5, A1, algebra]

2.1 A change of tangent basis transforms the ordered $m$ antighost insertions by the determinant of that basis change, as shown in [F3]. The antiholomorphic insertions contribute the conjugate determinant under the corresponding antiholomorphic basis change. The holomorphic and antiholomorphic coordinate volume differentials on $U$ transform by the inverse determinants, so the evaluated expression is a top-degree form on this chart. This verification is local and says nothing about compatibility of determinant-line trivializations or integration cycles between charts or at the boundary. [F3, F4, step 1.1, algebra] ∎

## Remarks

The pointed-worldsheet supplier's current readiness hash is stale, and [A1] is an explicit per-instance input rather than a proved global construction. The definition is intentionally weaker than a global string measure.
