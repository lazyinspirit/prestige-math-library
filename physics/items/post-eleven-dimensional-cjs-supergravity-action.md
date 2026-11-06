---
id: post-eleven-dimensional-cjs-supergravity-action
kind: postulate
title: Eleven-Dimensional CJS Supergravity Bosonic Action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - def-eleven-dimensional-lorentzian-geometry
  - thm-eleven-dimensional-levi-civita-existence-and-uniqueness
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-eleven-dimensional-lorentzian-geometry: mathematical-premise
  thm-eleven-dimensional-levi-civita-existence-and-uniqueness: mathematical-premise
aliases: []
physical_scope: "Adopted source-free, two-derivative, classical eleven-dimensional CJS bosonic action and Planck normalization. It is the fermion-free truncation of the low-energy supergravity framework; no brane sources, higher-derivative corrections, quantum effects, or field equations are asserted here."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§5.1, Definition 5.1, for the 11D bosonic CJS action; §8.2, Remark 8.26, for the M-theory Planck normalization; §3.6 for the 32-real-component Majorana convention."
    - title: "Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions, arXiv:1104.2051v2"
      url: "https://arxiv.org/pdf/1104.2051v2"
      locator: "§1.4, equation (9), for the eleven-dimensional supergravity bosonic action and field content; this is a low-energy framing cross-check, not the source of the displayed ell_p normalization."
    - title: "Jerome P. Gauntlett and Pascal Pakis, The Geometry of D=11 Killing Spinors, arXiv:hep-th/0212008v3"
      url: "https://arxiv.org/pdf/hep-th/0212008"
      locator: "§2, equation (2.1), for the bosonic action and its signature/gamma conventions."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Postulate

Adopt the following classical bosonic truncation of eleven-dimensional Cremmer–Julia–Scherk (CJS) supergravity. Let $M$ be an oriented Lorentzian eleven-manifold without boundary with metric $g$ of signature $(-+\cdots+)$, Levi-Civita connection from [[thm-eleven-dimensional-levi-civita-existence-and-uniqueness]], scalar curvature $R$, and Hodge star from [[def-eleven-dimensional-lorentzian-geometry]]. Let $C_3\in\Omega^3(M)$ be a globally defined smooth real three-form potential and set $F_4:=dC_3$. In natural units $\hbar=c=1$, take the action

$$S[g,C_3]=\frac{1}{2\kappa_{11}^{\,2}}\int_M\left(R\,\operatorname{vol}_g-\frac12F_4\wedge *_gF_4-\frac16C_3\wedge F_4\wedge F_4\right).$$

Here $\ell_p>0$ is the eleven-dimensional Planck length and the adopted normalization is

$$2\kappa_{11}^{\,2}=(2\pi)^8\ell_p^9.$$

Thus $[\ell_p]=\mathrm{length}$ and $[\kappa_{11}^{\,2}]=\mathrm{length}^9$. In coordinates of length dimension with dimensionless metric components, the action density is dimensionless after integration when $[C_{MNP}]=1$, $[F_{MNPQ}]=\mathrm{length}^{-1}$, and $[R]=\mathrm{length}^{-2}$. The form norm is signed Lorentzian norm $|F_4|_g^2=(1/4!)F_{MNPQ}F^{MNPQ}$.

The CJS multiplet includes a 32-real-component Majorana gravitino and one 32-real-component local supersymmetry parameter; the displayed action omits all fermion terms. This adopted action is the source-free, two-derivative low-energy truncation. It omits brane currents and boundary terms, the higher-derivative $C_3\wedge X_8$ correction, and quantum corrections. The displayed Chern–Simons sign is tied to the stated potential convention: replacing $C_3$ by $-C_3$ reverses that sign along with $F_4=dC_3$. The item asserts a model convention, not a universal law or a claim that every eleven-manifold admits these fields.

## Postulate references

Hamilton, §5.1, Definition 5.1, and §8.2, Remark 8.26; Taylor, §1.4, equation (9); Gauntlett–Pakis, §2, equation (2.1).

## Facts & Assumptions

**Given:** The action is adopted in the source-free, classical, two-derivative regime stated above.

[A1] [[def-supergravity-conventions-and-normalizations]]: its current carrier declares natural units $\hbar=c=1$, Lorentzian signature $(-+\cdots+)$, the signed form norm $|F_p|^2=(1/p!)F_{M_1\ldots M_p}F^{M_1\ldots M_p}$, and one 32-real-component Majorana parameter for 11D CJS. Its current Step 1 record is ready at hash $41d207e61dbef5573f48b5cf2e70c2c19a13696ec755a3c8047c832905c0b550$. The current carrier does not state the $\ell_p$-to-$\kappa_{11}$ relation; that separate normalization is adopted here directly from Hamilton §8.2, Remark 8.26.

[F1] [[def-eleven-dimensional-lorentzian-geometry]] defines the oriented metric volume form, signed Lorentzian form pairing, and Hodge star; [[thm-eleven-dimensional-levi-civita-existence-and-uniqueness]] supplies the unique torsion-free metric connection used for $R$.

[F2] [[def-supergravity-conventions-and-normalizations]] fixes the curvature convention
$$R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ},\qquad R_{QN}=R^P{}_{QPN},\qquad R=g^{QN}R_{QN}.$$
The scalar curvature $R$ in the Postulate uses this convention and the Levi-Civita connection supplied in [F1].

## Remarks

Variational equations are addressed in [[pthm-eleven-dimensional-cjs-bosonic-field-equations]].

Taylor’s equation (9) is used as an independent low-energy field-content and action-form comparison. Its locator is not used to assert the exact $(2\pi)^8\ell_p^9$ normalization. The action is interpreted through differences under compactly supported variations when $M$ is noncompact; no finite total action is assumed.
