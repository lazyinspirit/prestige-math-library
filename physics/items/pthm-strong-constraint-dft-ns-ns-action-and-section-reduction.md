---
id: pthm-strong-constraint-dft-ns-ns-action-and-section-reduction
kind: physics-theorem
title: Strong Constraint DFT NS NS Action And Section Reduction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-st-double-field-theory-generalized-metric-data
  - pthm-st-dft-generalized-diffeomorphism-algebra-closure
  - pthm-st-dft-generalized-scalar-action-invariance
  - pthm-st-dft-supergravity-section-reduction
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
dependency_roles:
  def-st-double-field-theory-generalized-metric-data: formulation-prerequisite
  pthm-st-dft-generalized-diffeomorphism-algebra-closure: physical-result
  pthm-st-dft-generalized-scalar-action-invariance: physical-result
  pthm-st-dft-supergravity-section-reduction: physical-result
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Smooth ten-dimensional massless NS–NS fields in a local doubled chart, subject to the pairwise strong constraint and a fixed supergravity section; no RR fields, localized sources, loops, higher derivatives, strong-constraint-violating twists, global T-fold existence, or full string-CFT equivalence."
sources:
  references:
    - title: "Olaf Hohm, Chris Hull, and Barton Zwiebach, Generalized Metric Formulation of Double Field Theory, arXiv:1006.4823v1"
      url: "https://arxiv.org/pdf/1006.4823v1"
      locator: "Introduction equations (1.15)–(1.19), PDF pp. 5–6; §§3.1–3.2, equations (3.10)–(3.28), pp. 10–14; §4.3, equations (4.24)–(4.47), pp. 18–22."
    - title: "Gerardo Aldazabal, Diego Marqués, and Carmen Núñez, Double Field Theory: A Pedagogical Review, arXiv:1305.1907v2"
      url: "https://arxiv.org/pdf/1305.1907v2"
      locator: "§§3.3–3.7, PDF pp. 19–31: generalized metric, strong constraint, generalized gauge algebra, action, and reduction to the supergravity section."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $D=10$ and use doubled coordinates $X^M=(x^i,\widetilde x_i)$, $i=0,\ldots,9$, all with length dimension, with dimensionless $\eta_{MN}=\begin{pmatrix}0&I_{10}\\I_{10}&0\end{pmatrix}$ and inverse-length derivatives. Let $\mathcal H_{MN}$ be a symmetric generalized metric satisfying $\mathcal H_{MP}\eta^{PQ}\mathcal H_{QN}=\eta_{MN}$, and let $d$ be the dimensionless generalized dilaton. Require every field, gauge parameter, and product of such objects $A,B$ to obey the strong constraint $\eta^{MN}\partial_M\partial_NA=0$ and $\eta^{MN}(\partial_MA)(\partial_NB)=0$. Whenever a trivial parameter $\xi^M=\partial^M\chi$ is used in the gauge-algebra statement, also require its scalar potential $\chi$ to belong to this strongly constrained collection. With compactly supported gauge parameters or vanishing boundary flux, the two-derivative NS–NS DFT action
$$
S_{\rm DFT}=\frac1{2\kappa_0^2}\int d^{20}X\,e^{-2d}\left[\frac18\mathcal H^{MN}\partial_M\mathcal H^{KL}\partial_N\mathcal H_{KL}-\frac12\mathcal H^{MN}\partial_N\mathcal H^{KL}\partial_L\mathcal H_{MK}-2\partial_Md\,\partial_N\mathcal H^{MN}+4\mathcal H^{MN}\partial_Md\,\partial_Nd\right]
$$
is invariant under generalized diffeomorphisms, and their gauge algebra closes modulo trivial parameters. Its integrand has dimension length$^{-2}$, so the full doubled integral has dimension length$^{10}$ after the factor $\kappa_0^{-2}$; the section statement below divides by the dual-coordinate volume of dimension length$^{10}$. On a fixed local supergravity section $\widetilde\partial^i=0$, set $G:=G^{(s)}$ in the string-frame convention, parameterize $\mathcal H$ by $G$ and $B_2$, and set $e^{-2d}=\sqrt{-G}e^{-2\Phi}$. The action per unit dual-coordinate volume then reduces, up to a total derivative, to the dimensionless source-free leading tree-level two-derivative string-frame NS–NS action. This is a local massless-field result; it does not assert global T-fold existence, independent dependence on all doubled coordinates, RR/source terms, higher-derivative corrections, string loops, or an uplift for every gauged supergravity.

## Statement references

[Hohm, Hull, and Zwiebach, §§3–4.3](https://arxiv.org/pdf/1006.4823v1)

[Aldazabal, Marqués, and Núñez, §§3.3–3.7](https://arxiv.org/pdf/1305.1907v2)

## Facts & Assumptions

**Given:** Smooth ten-dimensional Lorentzian $G^{(s)}$, smooth $B_2$ and $\Phi$, the DFT field and transformation conventions, the pairwise strong constraint (including any scalar potential $\chi$ used for a trivial parameter), a fixed local physical section, and, for the integrated gauge-invariance claim, a compactly supported gauge parameter or vanishing boundary flux for the gauge-variation divergence. The section reduction is stated modulo the total derivatives specified in [F4].

[F1] [[def-st-double-field-theory-generalized-metric-data]]: $X^M=(x^i,\widetilde x_i)$, $\eta$ is off-diagonal, $\mathcal H$ is the block generalized metric built from a local metric $g$ and $B_2$, and $e^{-2d}=\sqrt{-g}e^{-2\Phi}$ on the physical section; the stated strong constraint applies to all fields, gauge parameters, and products.

[F2] [[pthm-st-dft-generalized-diffeomorphism-algebra-closure]]: under [F1]'s strong constraint, generalized diffeomorphisms close with the defined C-bracket modulo parameters $\xi^M=\partial^M\chi$ whose potentials are themselves in the strongly constrained scalar collection and which act trivially.

[F3] [[pthm-st-dft-generalized-scalar-action-invariance]]: the generalized-metric action is $\int e^{-2d}\mathcal R$ up to an explicit total divergence, and is invariant up to boundary terms because $\delta_\xi\mathcal R=\xi^M\partial_M\mathcal R$.

[F4] [[pthm-st-dft-supergravity-section-reduction]]: on a product coordinate domain $U_x\times\widetilde U$ with $0<V_{\widetilde U}:=\int_{\widetilde U}d^{10}\widetilde x<\infty$, the normalized action $S_{\rm DFT}=(2\kappa_0^2)^{-1}\int\mathcal L_{\rm DFT}$ divided by $V_{\widetilde U}$ reduces on $\widetilde\partial^i=0$ to the string-frame NS–NS action, modulo the supplier's explicit total derivatives and wherever the integrals exist. The NS–NS action is adopted in [A2].

[A1] [[def-supergravity-conventions-and-normalizations]]: in ten dimensions $G^{(s)}$ is the string-frame metric, the signature is mostly plus, $\hbar=c=1$, and $2\kappa_0^2=(2\pi)^7\alpha'^4$.

[A2] [[post-ten-dimensional-ns-ns-supergravity-action]]: adopt the source-free leading tree-level two-derivative NS–NS action in terms of $G^{(s)}$, $\Phi$, and $H_3=dB_2$, with no RR fields, localized sources, loops, or higher powers of $\alpha'$.

## Proof

1.1 By [F2], the generalized diffeomorphism commutator closes modulo trivial parameters on the DFT data in [F1]. By [F3], the action density changes only by a total divergence under the same strong constraint. The compact-support or boundary condition in the Given clause removes the integrated divergence, so the DFT action is invariant. [given, F1, F2, F3, algebra]

2.1 On the section $\widetilde\partial^i=0$, evaluate the local action per unit dual-coordinate volume on a product $U_x\times\widetilde U$ with $0<V_{\widetilde U}<\infty$, wherever the integrals exist. The section density is independent of $\widetilde x$, so $S_{\rm DFT}/V_{\widetilde U}=(2\kappa_0^2)^{-1}\int_{U_x}\mathcal L_{\rm DFT}|_{\widetilde\partial=0}$. This expression is independent of the chosen finite positive dual volume; it is the meaning of the local per-unit-volume action, without an infinite-volume quotient. Apply [F4]'s section calculation to this expression with [A1]–[A2]. It gives the string-frame action density and normalization in the Statement, with the stated total-derivative qualification. Combining this result with step 1.1 establishes the DFT claim under the adopted NS–NS action premise; this proof does not derive that physical premise or claim independent proof approval for its supplier. [given, A1, A2, F4, step 1.1, algebra] ∎

