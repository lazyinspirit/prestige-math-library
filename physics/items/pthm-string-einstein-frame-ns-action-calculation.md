---
id: pthm-string-einstein-frame-ns-action-calculation
kind: physics-theorem
title: String Einstein Frame NS Action Calculation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
  - lem-supergravity-weyl-scalar-curvature-rescaling
  - lem-supergravity-compact-metric-variation
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: physical-assumption
  lem-supergravity-weyl-scalar-curvature-rescaling: mathematical-premise
  lem-supergravity-compact-metric-variation: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Pointwise conformal rewrite of the adopted source-free ten-dimensional tree-level two-derivative NS–NS action. The full divergence term is retained; removing its integrated value requires an actual zero-flux boundary condition. The result does not add RR fields, sources, loops, or higher-derivative corrections."
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.3, Lemma 6.10 and Theorem 6.11; the ten-dimensional Einstein-frame field and action comparison."
    - title: "Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1"
      url: "https://arxiv.org/pdf/2410.19600v1"
      locator: "§3.2.1, equations (3.7)–(3.13), printed pp. 28–29; independent string/Einstien frame relation, determinant, p-form norm, and Weyl formula."
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
---

## Statement

Let $G_s$ and $G_E$ be smooth Lorentzian metrics on the same oriented ten-manifold, let $\Phi$ be a smooth real scalar, and let $B_2$ be a smooth local two-form potential with $H_3=dB_2$. Use the supergravity conventions fixed by the earlier definition def-supergravity-conventions-and-normalizations, set
$
G_s=e^{\Phi/2}G_E,\qquad
X_E:=G_E^{MN}\partial_M\Phi\,\partial_N\Phi,\qquad
H_E^2:=H_{MNP}H_{QRS}G_E^{MQ}G_E^{NR}G_E^{PS},
$
and $\Box_E\Phi:=G_E^{MN}\nabla^{(E)}_M\nabla^{(E)}_N\Phi$. Use the signed form norm $|F_p|_G^2=(1/p!)F_{M_1\ldots M_p}F^{M_1\ldots M_p}$ and the curvature convention with Ricci contraction $R_{QN}=R^P{}_{QPN}$ from the earlier supergravity conventions definition. In length-valued coordinates, the adopted action normalization makes $B_{MN}$ dimensionless and $H_{MNP}$ of dimension length$^{-1}$. Then
$
\sqrt{-G_s}=e^{5\Phi/2}\sqrt{-G_E},\quad
R_s=e^{-\Phi/2}\left(R_E-\frac92\Box_E\Phi-\frac92X_E\right),\quad
|d\Phi|_{G_s}^2=e^{-\Phi/2}X_E,\quad
H_{MNP}H_s^{MNP}=e^{-3\Phi/2}H_E^2,
$
so that $\sqrt{-G_s}e^{-2\Phi}=e^{\Phi/2}\sqrt{-G_E}$. Substitution into the adopted action post-ten-dimensional-ns-ns-supergravity-action gives the full local Einstein-frame density
$
S_{\rm NS}=\frac1{2\kappa_0^2}\int d^{10}x\,\sqrt{-G_E}
\left(R_E-\frac12X_E-\frac1{12}e^{-\Phi}H_E^2-\frac92\Box_E\Phi\right),
$
on every region where the action integrals are defined. The last term is retained in this identity. In local coordinates,
$
\sqrt{-G_E}\Box_E\Phi=\partial_M\!\left(\sqrt{-G_E}G_E^{MN}\partial_N\Phi\right).
$
It is a local total divergence; its integrated value may be removed only when its flux integral vanishes. Its first variation vanishes for compactly supported field variations, so it does not change the bulk Euler–Lagrange equations.

## Statement references

[[def-supergravity-conventions-and-normalizations]]

[[post-ten-dimensional-ns-ns-supergravity-action]]

## Facts & Assumptions

**Given:** The smooth ten-dimensional fields, conformal frame relation, action and norm conventions, and the curvature convention stated above.

[F1] In ten dimensions the convention is $G_E=e^{-\Phi/2}G_s$, $H=dB$, $X_E=|d\Phi|_{G_E}^2$, and $|H|_G^2=H_{MNP}H^{MNP}/3!$ ([[def-supergravity-conventions-and-normalizations]]).

[A1] The adopted string-frame action has density $\sqrt{-G_s}e^{-2\Phi}[R_s+4|d\Phi|_{G_s}^2-\tfrac1{12}H_{MNP}H_s^{MNP}]$ with coefficient $(2\kappa_0^2)^{-1}$ ([[post-ten-dimensional-ns-ns-supergravity-action]]).

[F2] For $\widetilde g=e^{2\sigma}g$ in dimension $n$, the scalar curvature satisfies $ R_{\widetilde g}=e^{-2\sigma}\left(R_g-2(n-1)\Box_g\sigma-(n-1)(n-2)|d\sigma|_g^2\right) $ ([[lem-supergravity-weyl-scalar-curvature-rescaling]]).

[F3] The chart integral of a compactly supported smooth coordinate divergence is zero ([[lem-supergravity-compact-metric-variation]]).

## Proof

**Proof technique:** direct; scale the determinant and inverse metrics, apply the general Weyl-curvature identity, substitute each transformed term, and keep track of the boundary divergence.

1.1 From $G_s=e^{\Phi/2}G_E=e^{2\sigma}G_E$ with $\sigma=\Phi/4$, each inverse metric contributes $e^{-\Phi/2}$ and the square-root determinant contributes $e^{10\Phi/4}=e^{5\Phi/2}$. Therefore $\sqrt{-G_s}=e^{5\Phi/2}\sqrt{-G_E}$, $|d\Phi|_{G_s}^2=e^{-\Phi/2}X_E$, and the three raised indices in $H_{MNP}H_s^{MNP}$ give $e^{-3\Phi/2}H_E^2$. Multiplication by $e^{-2\Phi}$ gives the measure factor $e^{\Phi/2}\sqrt{-G_E}$. [given, F1, algebra]

2.1 Apply [F2] with $n=10$, $g=G_E$, and $\sigma=\Phi/4$. Then $e^{-2\sigma}=e^{-\Phi/2}$, $2(n-1)\Box_E\sigma=18(\Box_E\Phi)/4=(9/2)\Box_E\Phi$, and $(n-1)(n-2)|d\sigma|_E^2=72X_E/16=(9/2)X_E$. This gives the stated scalar-curvature transformation with its signs fixed by [F1]. [F1, F2, step 1.1, algebra]

3.1 Substitute steps 1.1 and 2.1 into [A1]. The curvature term acquires unit net exponential factor, the dilaton kinetic term contributes $+4X_E$, and the three-form term acquires $e^{-\Phi}$. Combining the curvature gradient contribution $-\tfrac92X_E$ with $+4X_E$ gives $-\tfrac12X_E$; the curvature divergence remains $-\tfrac92\Box_E\Phi$. Thus the complete transformed density is exactly the one in the Statement, including the coefficient $-1/12$ of $e^{-\Phi}H_E^2$. [A1, F1, step 1.1, step 2.1, algebra]

4.1 The Levi-Civita density identity is $\sqrt{-G_E}\Box_E\Phi=\partial_M(\sqrt{-G_E}G_E^{MN}\partial_N\Phi)$, obtained by expanding $\Box_E\Phi=G_E^{MN}(\partial_M\partial_N\Phi-\Gamma^{P}{}_{MN}\partial_P\Phi)$ and using $\Gamma^M{}_{MP}=\partial_P\log\sqrt{-G_E}$. Hence the final term is pointwise a coordinate divergence. Under a smooth compactly supported variation of $G_E,\Phi$, the variation of its vector-density components $\sqrt{-G_E}G_E^{MN}\partial_N\Phi$ is compactly supported; its divergence integrates to zero by [F3]. This proves the asserted bulk-variation statement. The value of the unvaried divergence integral is removable only when its flux integral is actually zero; no assumption of boundarylessness alone is used for a noncompact region. [given, F1, F3, step 3.1, algebra] ∎
