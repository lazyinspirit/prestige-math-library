---
id: def-eleven-dimensional-supergravity-supersymmetric-background
kind: definition
title: Supersymmetric Background in Eleven-Dimensional CJS Supergravity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-eleven-dimensional-cjs-supergravity-action
  - pthm-eleven-dimensional-cjs-bosonic-field-equations
  - def-eleven-dimensional-lorentzian-geometry
  - thm-eleven-dimensional-levi-civita-existence-and-uniqueness
  - def-eleven-dimensional-spin-structure-and-majorana-bundle
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-eleven-dimensional-cjs-supergravity-action: physical-assumption
  pthm-eleven-dimensional-cjs-bosonic-field-equations: physical-result
  def-eleven-dimensional-lorentzian-geometry: mathematical-premise
  thm-eleven-dimensional-levi-civita-existence-and-uniqueness: mathematical-premise
  def-eleven-dimensional-spin-structure-and-majorana-bundle: mathematical-premise
aliases: []
proof_strategy: direct
physical_scope: "Definition of the source-free classical CJS Killing-spinor condition on an open set, with Hamilton's Clifford convention. It makes no spinor-existence, global-extension, uniqueness, classification, or quantum claim."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§3.1, normalized gamma antisymmetrization and form Clifford multiplication; §3.2, orthochronous spinor bundles; §3.3, induced spin connection; §3.6, the eleven-dimensional volume-element sign and Majorana convention; §5.2, Theorem 5.7, the Killing-spinor equation."
    - title: "Jerome P. Gauntlett and Pascal Pakis, The Geometry of D=11 Killing Spinors, arXiv:hep-th/0212008v3"
      url: "https://arxiv.org/pdf/hep-th/0212008"
      locator: "§2, equation (2.3), and Appendix A, Clifford/Majorana conventions."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Use the following source-reported CJS convention. Let $U\subseteq M$ be a nonempty open set, with $M$ an eleven-manifold carrying the spin structure and 32-real-dimensional Majorana bundle $S$ defined in [[def-eleven-dimensional-spin-structure-and-majorana-bundle]]. Let $(g,F_4)$ be a smooth source-free bosonic CJS solution on $U$, meaning the equations in [[pthm-eleven-dimensional-cjs-bosonic-field-equations]] hold there. Put $\eta=\operatorname{diag}(-1,1,\ldots,1)$. Let $(E_0,\ldots,E_{10})$ be the standard basis of $V=\mathbb R^{11}$ and $i_\eta:V\to\mathrm{Cl}(V,\eta)$ its canonical Clifford generator map. In a local spin frame above an oriented, time-oriented $\eta$-orthonormal frame $e:V\to TM$, write $e_A=e(E_A)$ and set $\Gamma_A:=\rho(i_\eta(E_A))$ and $\Gamma^A:=\eta^{AB}\Gamma_B$, acting on the local spinor components as in the spin-bundle definition. The CJS representation choice is

$$\Gamma_0\Gamma_1\cdots\Gamma_{10}=+I_\Delta.$$

For each $p$-form $\omega$ and spinor section $s$, define $\Gamma^{A_1\cdots A_p}:=\frac1{p!}\sum_{\sigma\in S_p}\operatorname{sgn}(\sigma)\Gamma^{A_{\sigma(1)}}\cdots\Gamma^{A_{\sigma(p)}}$ and $\omega\cdot s:=\frac1{p!}\omega_{A_1\cdots A_p}\Gamma^{A_1\cdots A_p}s$, where $S_p$ is the permutation group of $\{1,\ldots,p\}$. These products are normalized antisymmetrizations, matching Hamilton's §3.1 convention; they obey $\{\Gamma_A,\Gamma_B\}=2\eta_{AB}I$. Set $X^\flat=g(X,\cdot)$ and let $\iota_XF_4$ denote contraction in the first argument. Call $(g,F_4)$ **supersymmetric on $U$** exactly when there exists a smooth Majorana spinor $\epsilon\in\Gamma(S|_U)$, not identically zero, whose spin covariant derivative $\nabla^S$ induced from the Levi-Civita connection satisfies, for every smooth vector field $X$ on $U$,

$$\nabla^S_X\epsilon+\frac1{12}\left(X^\flat\wedge F_4-2\,\iota_XF_4\right)\cdot\epsilon=0.$$

The anticommutator alone does not fix the volume-element sign; because the flux terms use odd-degree $3$- and $5$-form products, the representation choice is part of this displayed Killing-spinor convention. This defines the classical Killing-spinor condition only. It claims no existence, uniqueness, global extension, or classification of solutions and no quantum or brane-source statement.

## Statement references

Hamilton, §§3.1, 3.6, and §5.2, Theorem 5.7; Gauntlett–Pakis, §2, equation (2.3), and Appendix A.

## Facts & Assumptions

**Given:** A source-free bosonic solution on the open set $U$, the specified spin structure and Majorana bundle, and Hamilton's gamma-matrix convention.

[A1] [[def-supergravity-conventions-and-normalizations]] declares Lorentzian signature $(-+\cdots+)$, $\{\Gamma_A,\Gamma_B\}=2\eta_{AB}I$, and one 32-real-component Majorana supersymmetry parameter in 11D CJS. Its current Step 1 record is ready at hash $41d207e61dbef5573f48b5cf2e70c2c19a136ec755a3c8047c832905c0b550$. It does not fix the eleven-dimensional volume-element sign; this item adds the source-reported choice below.

[F5] Hamilton, §3.6, chooses $\Gamma_0\Gamma_1\cdots\Gamma_{10}=+I$; Gauntlett–Pakis, Appendix A, equations (A.1)–(A.3), states the same product convention with $\epsilon_{012345678910}=+1$.

[F1] [[def-eleven-dimensional-spin-structure-and-majorana-bundle]] defines the supplied real rank-$32$ Majorana bundle and Majorana sections.

[F2] [[def-eleven-dimensional-spin-structure-and-majorana-bundle]] supplies the compatible spin connection induced on the associated real bundle.

[F3] [[def-eleven-dimensional-spin-structure-and-majorana-bundle]] defines the frame-independent Clifford action with $\{\Gamma_A,\Gamma_B\}=2\eta_{AB}I$.

[F4] [[post-eleven-dimensional-cjs-supergravity-action]] adopts the source-free two-derivative bosonic CJS truncation, and [[pthm-eleven-dimensional-cjs-bosonic-field-equations]] gives its conditional classical field equations.

## Proof

**Proof technique:** verify the equation is a well-defined local spinor equation.

1.1 For each smooth vector field $X$, $\nabla^S_X\epsilon$ is a smooth section of $S|_U$ by [F1] and [F2]. The form $X^\flat\wedge F_4$ has degree $5$, and $\iota_XF_4$ has degree $3$; both act on $S$ by the Clifford multiplication of [F3], so their indicated linear combination is also a smooth section of $S|_U$. [F1, F2, F3, F4, algebra]

2.1 Each term is $C^\infty(U)$-linear in $X$: the spin connection is linear in its direction argument by [F2], $X\mapsto X^\flat$ is linear, and contraction $X\mapsto\iota_XF_4$ is linear. Clifford multiplication is frame-independent by [F3], so vanishing for all $X$ is a well-defined tensorial condition, independent of the chosen local spin frame. [F2, F3, step 1.1, algebra]

3.1 The item defines “supersymmetric on $U$” to mean precisely that such a non-identically-zero section exists. The definition fixes the source-reported condition, including its selected Clifford-volume sign, but proves no existence, uniqueness, global extension, or classification statement. [A1, F1, F4, F5] ∎

## Remarks

Hamilton's form equation and Gauntlett–Pakis's component equation agree in this convention: the first term has coefficient $1/(12\cdot4!)=1/288$; the contraction term has coefficient $-2/(12\cdot3!)=-1/36=-8/288$, matching $[\Gamma_\mu{}^{\nu_1\cdots\nu_4}-8\delta_\mu^{\nu_1}\Gamma^{\nu_2\nu_3\nu_4}]/288$. This is a convention cross-check, not a proof that a nonzero solution exists.
