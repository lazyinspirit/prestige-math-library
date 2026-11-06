---
id: def-type-iia-supergravity-killing-spinor-equations
kind: definition
title: Type Iia Supergravity Killing Spinor Equations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-type-iia-two-derivative-supergravity-action
  - pthm-type-iia-bosonic-field-equations
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: physical-assumption
  pthm-type-iia-bosonic-field-equations: physical-result
physical_scope: "Local massless type IIA supersymmetry criterion in Hamilton's string-frame Clifford convention on a contractible Lorentzian spin patch. The definition requires a bosonic solution of the displayed field equations as well as a nonzero Killing spinor; it asserts no existence, global extension, uniqueness, or classification."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§§3.2–3.6 for Lorentzian spinors and Clifford conventions; §6.2, Theorem 6.8 and its proof for the type IIA Killing-spinor equations and the on-shell bosonic-solution hypothesis."
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
proof_strategy: direct
---

## Definition

Let $U$ be a contractible open subset of an oriented and time-oriented smooth ten-dimensional Lorentzian manifold with signature $(-+\cdots+)$. Use the length, field, and string-frame conventions of the adopted massless type IIA action. Supply a principal $\mathrm{Spin}(9,1)$-bundle $P\to U$ lifting its oriented, time-oriented orthonormal frame bundle, and the real 32-dimensional Majorana representation $\rho$ of the physical Clifford algebra with generators $\{\Gamma_a,\Gamma_b\}=2\eta_{ab}$. The spinor bundle is $S=P\times_\rho\mathbb R^{32}$, and $\nabla$ is its Levi-Civita spin connection. In an oriented orthonormal frame set $\Gamma_{11}:=\Gamma_0\Gamma_1\cdots\Gamma_9$ and, for a $p$-form $F$, define $F\cdot\psi=(1/p!)F_{a_1\ldots a_p}\Gamma^{a_1\ldots a_p}\psi$, with antisymmetrized gamma products and Hamilton’s orientation convention. Clifford multiplication by a vector $X$ is denoted $X\cdot$.

Take smooth bosonic fields $g_s,\Phi,B_2,C_1,C_3$ and their local field strengths in the adopted massless action convention. By definition in this item, a *local supersymmetric bosonic solution* on $U$ is a solution of the source-free bosonic equations stated in the Type IIA Bosonic Field Equations result for which there exists a nonzero smooth $\epsilon\in\Gamma(S)$ satisfying, for every smooth vector field $X$,
$$0=\nabla_X\epsilon-\frac14(i_XH_3)\cdot\Gamma_{11}\epsilon +\frac18e^\Phi\left[\widetilde G_4\cdot(X\cdot\epsilon)+G_2\cdot(X\cdot\Gamma_{11}\epsilon)\right],$$
and
$$0=\left[\frac14e^\Phi G_2-\frac13(d\Phi)\cdot\Gamma_{11} +\frac1{12}e^\Phi\widetilde G_4\cdot\Gamma_{11} +\frac16H_3\right]\cdot\epsilon.$$
The ten-dimensional IIA multiplet has two opposite-chirality Majorana–Weyl supersymmetry parameters; $\epsilon$ is their combined 32-real-component Majorana field. This convention does not assert a spin lift on a general non-spin spacetime.

## Definition references

[M. J. D. Hamilton, §§3.2–3.6 and §6.2, Theorem 6.8](https://arxiv.org/pdf/1607.00327v3)

[[post-type-iia-two-derivative-supergravity-action]]

[[pthm-type-iia-bosonic-field-equations]]

## Facts & Assumptions

**Given:** A contractible spin patch with its supplied $\mathrm{Spin}(9,1)$ lift, smooth fields in the Hamilton massless convention, and a nonzero smooth Majorana spinor candidate.

[A1] [[def-supergravity-conventions-and-normalizations]] (current batch-56 carrier and current ready Step 1 record inspected; its stated hypotheses match this use): use Lorentzian signature $(-+\cdots+)$, the declared ten-dimensional IIA opposite-chirality Majorana–Weyl pair, and a source-fixed Clifford/Hodge convention.

[A2] [[post-type-iia-two-derivative-supergravity-action]] adopts the bosonic fields and local field-strength definitions used in the two displayed spinor operators.

[F1] [Hamilton, §§3.2–3.6](https://arxiv.org/pdf/1607.00327v3): on a supplied oriented, time-oriented Lorentzian spin patch, the associated spinor bundle, spin connection, Clifford multiplication, chirality operator, and real Majorana spinor module are defined in the convention fixed above.

[F2] [[pthm-type-iia-bosonic-field-equations]]: the phrase “bosonic solution” means all its listed source-free Euler–Lagrange equations and potential Bianchi identities hold.

## Verification

1.1 The contraction $i_XH_3$ is a two-form, so its Clifford action and the action of $\nabla_X$ both map sections of $S$ to sections of $S$. For each $p$-form $F$, the defined antisymmetrized Clifford product $F\cdot$ is an endomorphism of $S$, and $X\cdot$ is also such an endomorphism. Therefore every term of the gravitino equation is a section of $S$. [given, A1, F1, def. spinor and Clifford definitions]

1.2 The terms $e^\Phi G_2$, $(d\Phi)\cdot\Gamma_{11}$, $e^\Phi\widetilde G_4\cdot\Gamma_{11}$, and $H_3$ act by Clifford endomorphisms of $S$; hence the algebraic equation is a well-defined section of $S$. The conjunction with [F2] is part of the definition, so a Killing-spinor equation alone is not called an on-shell supersymmetric bosonic solution here. [given, A2, F1, F2, def. spinor and Clifford definitions]

2.1 Hamilton’s source criterion is precisely the existence of a nonzero spinor satisfying these two systems for a bosonic solution of the IIA field equations. Thus the local criterion is fixed only after the bosonic on-shell hypothesis, spin lift, form conventions, and Clifford convention have all been supplied; it makes no assertion that such a spinor exists. [given, F1, F2, step 1.1, step 1.2] ∎

