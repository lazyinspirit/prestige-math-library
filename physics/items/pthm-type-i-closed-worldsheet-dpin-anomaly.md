---
id: pthm-type-i-closed-worldsheet-dpin-anomaly
kind: physics-theorem
title: "Type I Closed Worldsheet DPIN Anomaly"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 12
domain: physics
physical_scope: "Closed unoriented ten-dimensional Type I worldsheet anomaly with DPin structure and pullback tangent fermions. The source excludes open strings, Chan–Paton anomaly cancellation, and tadpoles; its DPin bordism/eta computation remains source-reported and conditional here."
deps:
  - def-type-i-closed-worldsheet-projection
  - thm-gts-spin-and-spin-c-obstruction-and-torsor-classification
  - thm-gts-pontryaginthom-correspondence-for-spin-bordism-over-bg
  - prop-gts-local-curvature-and-global-holonomy-of-an-anomaly-line-theory
  - def-st-dpin-structure-conventions
  - def-singular-cohomology-ring
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - prop-first-stiefel-whitney-class-classifies-orientability
  - thm-naturality-of-stiefel-whitney-classes
  - lem-st-wu-relation-sq1-w2
  - def-axiom-of-choice
dependency_roles:
  def-type-i-closed-worldsheet-projection: formulation-prerequisite
  thm-gts-spin-and-spin-c-obstruction-and-torsor-classification: mathematical-premise
  thm-gts-pontryaginthom-correspondence-for-spin-bordism-over-bg: mathematical-premise
  prop-gts-local-curvature-and-global-holonomy-of-an-anomaly-line-theory: mathematical-premise
  def-st-dpin-structure-conventions: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  prop-first-stiefel-whitney-class-classifies-orientability: mathematical-premise
  thm-naturality-of-stiefel-whitney-classes: mathematical-premise
  lem-st-wu-relation-sq1-w2: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1"
      url: "https://arxiv.org/pdf/2608.30774v1"
      locator: "§4.1–4.2 and Appendix A.2: DPin structure, closed Type I anomaly decomposition, and explicit exclusion of open strings."
verification:
  precheck: pass
---

## Statement

For the ten-dimensional Type I closed unoriented worldsheet with DPin tangential structure, chiral GSO gauging combined with worldsheet orientation reversal, and the N=(1,1) sigma-model fermions coupled to pullback TX, the source-reported closed-sector anomaly cancels exactly when the target is orientable and admits a Spin structure. The source computes this using the DPin bordism group and eta-invariant model, and states that its analysis excludes the open-string anomaly sector. This result does not prove Type I D9 tadpole or Chan–Paton constraints.

## Statement references

[Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1](https://arxiv.org/pdf/2608.30774v1)

## Facts & Assumptions

**Given:** A smooth ten-dimensional target $X$, closed Type I worldsheets with the DPin structure of the preceding definition, tangent fermions in $\phi^*TX$, cancellation of the local anomaly polynomial, full AC, and the exact source-reported DPin anomaly input [A1].

[F1] [[def-type-i-closed-worldsheet-projection]] specifies the closed unoriented quotient and its DPin tangential structure; it excludes open strings and tadpoles.

[F2] [[def-st-dpin-structure-conventions]] identifies a DPin structure by the relative class $a$ and trivialization of $w_2+w_1^2+w_1a$; on oriented manifolds it restricts to Spin$\times\mathbb Z_2$.

[F3] [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] fixes the Stiefel–Whitney classes and their coefficient ring $H^*(-;\mathbb F_2)$.

[F4] [[thm-naturality-of-stiefel-whitney-classes]]: the classes $w_i$ commute with pullback of real vector bundles.

[F5] [[prop-first-stiefel-whitney-class-classifies-orientability]]: $w_1(E)=0$ iff a numerable real bundle $E$ is orientable, under its stated smooth-base and AC hypotheses.

[F6] [[thm-gts-spin-and-spin-c-obstruction-and-torsor-classification]]: an oriented real bundle on the stated smooth-manifold base has a Spin lift iff $w_2=0$, under full AC; the mathematical criterion is proved by its current suppliers.

[F7] [[lem-st-wu-relation-sq1-w2]]: $Sq^1w_2(E)=w_1(E)w_2(E)+w_3(E)$ for every real bundle in its stated scope.

[A1] Kawahira–Kawanago–Saito–Wada compute $\Omega^{DPin}_3(BO(10))$ as a $\mathbb Z_8$ point summand, a Spin$\times\mathbb Z_2$ summand matching Type II, and four $\mathbb Z_2$ summands detected by $\widetilde w^2w_1(E)$, $w_1(E)^3$, $w_1(E)w_2(E)$, and $w_3(E)$, where $\widetilde w=a+w_1(TW)$. Their eta/anomaly character is trivial on the point summand for rank 10 and is trivial on the Spin$\times\mathbb Z_2$ summand exactly for an orientable Spin target; the four remaining characteristic numbers then impose no further condition. The DPin spectral-sequence computation and physical eta-line identification are not locally supplied.

[A2] Full AC is assumed as defined in [[def-axiom-of-choice]], as required by [F5]–[F6] and the Pontryagin–Thom supplier.

## Proof

1.1 The source’s DPin bordism decomposition [A1] contains the reduced Spin$\times\mathbb Z_2$ summand, and by [F2] its restriction is the oriented Type II GSO anomaly. Vanishing of the full Type I character therefore forces this restricted character to vanish; [A1] says that happens exactly when $w_1(TX)=w_2(TX)=0$. By [F5] this is orientability, and by [F6] the vanishing of $w_2$ on the oriented tangent bundle gives a Spin lift under that theorem’s base and AC hypotheses. [F1, F2, F5, F6, A1, A2, given]

2.1 Conversely, suppose $X$ is oriented and Spin. For every sigma-model map $\phi:W\to X$, naturality [F4] gives $w_i(E)=\phi^*w_i(TX)$ for $E=\phi^*TX$, so $w_1(E)=w_2(E)=0$. Then [F7] yields $w_3(E)=Sq^1(0)+0=0$. Each four characteristic-number summands in [A1] vanishes: the first has factor $w_1(E)$, the next two have factor $w_1(E)$ or $w_2(E)$, and the last is $w_3(E)$. The point summand cancels for rank 10, and the Spin$\times\mathbb Z_2$ summand cancels by the assumed Spin condition, so all generators have trivial anomaly character. [F3, F4, F7, A1, A2, step 1.1, algebra]

3.1 The two implications establish that the closed Type I anomaly cancels exactly for an orientable Spin target under the listed source inputs. The source explicitly restricts this computation to closed worldsheets, so no conclusion about D9-brane, Chan–Paton, or open-string anomalies follows. [F1, A1, step 1.1, step 2.1] ∎

## Remarks

The full DPin bordism group, its four characteristic generators, eta-character values, and the physical anomaly-line identification remain source-reported premises. The GTS Pontryagin–Thom result treats normal Spin bordism over an independent $BG$, not DPin bordism; the Dai–Freed proposition treats an analytic Spin determinant line, not this DPin theory. Both exact scope mismatches are recorded in the batch notes.
