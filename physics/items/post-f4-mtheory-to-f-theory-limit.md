---
id: post-f4-mtheory-to-f-theory-limit
kind: postulate
title: M-theory/F-theory elliptic-fiber limit
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
category: string-theory
deps:
- def-f4-elliptic-fibration-with-section
- post-f4-type-iib-elliptic-fibration-dictionary
- def-m2-brane-worldvolume-action
- post-m-theory-type-iia-circle-limit-dictionary
dependency_roles:
  def-f4-elliptic-fibration-with-section: mathematical-premise
  post-f4-type-iib-elliptic-fibration-dictionary: formulation-prerequisite
  def-m2-brane-worldvolume-action: formulation-prerequisite
  post-m-theory-type-iia-circle-limit-dictionary: formulation-prerequisite
physical_scope: >-
  Adopted low-energy M/F duality limit for a fixed smooth compact flat sectioned elliptic Calabi–Yau fourfold. The chosen
  Kähler-form family, generic-fiber area limit, and external-circle decompactification are source-regime inputs. Generic-fiber-
  wrapped M2 states are identified with Kaluza–Klein modes; the space-filling M2/D3 source-charge map is stated separately.
  No universal equivalence, singular-model prescription, exact dimensionful fiber/radius coefficient, or general
  source-normalization theorem is asserted.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Cumrun Vafa, Evidence for F-Theory, arXiv:hep-th/9602022v1
    url: https://arxiv.org/pdf/hep-th/9602022v1
    locator: §4 opening, printed pp. 10–11, the M/F-theory relation and its conjectural physical status.
  - title: Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2
    url: https://arxiv.org/pdf/1401.7844v2
    locator: §1, printed pp. 2–5, the flat genus-one/elliptic setup, fiber-area limit, and CY4 proof qualification.
  - title: Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1
    url: https://arxiv.org/pdf/1806.01854v1
    locator: "§2.3, printed pp. 12–13, F/M circle duality; §3.4, printed pp. 19–24, generic-fiber-wrapped M2 Kaluza–Klein states and the fiber-volume limit; §9.2, printed pp. 86–87, equation (9.11) and the separate space-filling M2/D3 charge correspondence."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Fix a smooth compact elliptically fibered Calabi–Yau fourfold $\pi:\widehat Y_4\to B_3$ with flat genus-one fibers and a specified regular section, in the geometric effective regime of the suppliers listed below. Let $\Delta\subset B_3$ be the discriminant divisor from the Weierstrass dictionary and $B_3^\circ=B_3\setminus\Delta$ its smooth-fiber locus. Fix $b\in B_3^\circ$ and write $E_b=\pi^{-1}(b)$ for the smooth fiber over $b$, a compact complex curve. Let $\epsilon\in(0,\epsilon_0]$ parametrize the source's family of compactification metrics, with Kähler forms $J_\epsilon$ that are smooth, positive, closed real $(1,1)$-forms on $\widehat Y_4$, and define the fiber area by $A_f(\epsilon)=\int_{E_b}J_\epsilon$. Let $M_3$ be the external Lorentzian three-dimensional spacetime, locally modeled on $\mathbb R^{1,2}$. For the wrapped-particle calculation, use the source's unwarped product idealization $Y_{11}=M_3\times\widehat Y_4$ with external Lorentzian and internal Kähler metrics. In the dual Type-IIB description, let $\widetilde S_B^1$ be the external circle whose reduction gives the three-dimensional effective theory; write $\theta\sim\theta+2\pi$ for its angular coordinate and $R_B(\epsilon)$ for its proper radius, so the circumference is $2\pi R_B(\epsilon)$. Adopt the source's low-energy F/M scaling $A_f(\epsilon)\to0$ and $R_B(\epsilon)\to\infty$ as $\epsilon\downarrow0$. The four-dimensional Type-IIB description is the decompactification limit of $M_3\times\widetilde S_B^1$.

For an M2 membrane whose worldvolume locally is $\gamma\times E_b$, let $\gamma:I\to M_3$ be a smooth timelike embedding from an interval $I\subseteq\mathbb R$; this is the membrane's particle worldline. In the source's wrapped-fiber particle sector, the classical tension term contributes rest energy $T_{M2}A_f$ per unit proper time, where $T_{M2}>0$ is the independent tension of the M2 worldvolume-action definition. In units $\hbar=c=1$, $[A_f]=\mathrm{length}^2$ and $[T_{M2}]=\mathrm{length}^{-3}$, so this energy has dimension $\mathrm{length}^{-1}$. We adopt the source's identification of the generic elliptic-fiber wrapping class $n[E_\tau]$ with the Kaluza–Klein Fourier sector $e^{in\theta}$ of fields on $\widetilde S_B^1$, for $n\in\mathbb Z$, and use the chosen smooth fiber $E_b$ as its wrapped representative in this selected model; negative $n$ represents reversed orientation. These are particle states from M2 branes wrapping the full smooth elliptic fiber, not D3 branes.

Separately, the source's tadpole dictionary identifies a space-filling M2 source in $M_3$ with D3 source charge in the four-dimensional Type-IIB description on $M_3\times\widetilde S_B^1$. This space-filling source-charge correspondence is distinct from the particle state of an M2 wrapped on $E_b$. These are adopted physical limit and charge postulates, not consequences of the fibration definition or bosonic membrane action alone. No universal equivalence, singular-model prescription, exact dimensionful fiber/radius coefficient, or general source-normalization theorem is asserted.

## Facts & Assumptions

**Given:** A fixed smooth compact resolved flat elliptic Calabi–Yau fourfold, a regular section, and the low-energy duality regime.

[F1] [[def-f4-elliptic-fibration-with-section]] specifies a proper flat genus-one fibration with a regular section; its current record is escalated for an unrelated Mordell–Weil group-law input, while this postulate uses only the stated fibration clause.

[F2] [[post-f4-type-iib-elliptic-fibration-dictionary]] supplies the geometric type-IIB/elliptic-fiber interpretation; its current Step 1 record is escalated because its Weierstrass readiness is stale, so this is not treated as ready proof input.

[F3] [[def-m2-brane-worldvolume-action]] currently defines the classical M2 area term and Wess–Zumino coupling, with $T_{M2}$ as an independent physical normalization, on a smooth closed oriented timelike membrane in CJS superspace. Its current Step 1 record is ready. This postulate uses only the bosonic area-term interface and does not infer duality from it.

[F4] [[post-m-theory-type-iia-circle-limit-dictionary]] currently adopts $R_{11}=g_s\ell_s$, $\ell_p^3=g_s\ell_s^3$, the stated string-frame metric ansatz, and a conditional D0/first-KK mass match. Its current Step 1 record is ready. No exact coefficient for the F-theory circle scaling is inferred from this separate IIA/M dictionary.

[F5] Weigand's §3.4 identifies M2 states wrapping the generic elliptic-fiber class $n[E_\tau]$ with the Kaluza–Klein tower of the dual circle and says the fiber-volume-zero limit decompactifies that circle. The Postulate uses the chosen smooth fiber $E_b$ as the wrapped representative in this selected model. Section 9.2, immediately after equation (9.11) on printed p. 87, separately identifies the space-filling M2 and D3 source charges. These are distinct M2 configurations.

## Postulate references

[[def-f4-elliptic-fibration-with-section]]

[[post-f4-type-iib-elliptic-fibration-dictionary]]

[[def-m2-brane-worldvolume-action]]

[[post-m-theory-type-iia-circle-limit-dictionary]]

[Weigand, §§2.3, 3.4, and 9.2](https://arxiv.org/pdf/1806.01854v1)
