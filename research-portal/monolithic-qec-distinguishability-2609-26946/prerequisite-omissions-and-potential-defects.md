---
title: Prerequisite omissions and potential defects
research_report: defects
description: Original-article findings for Monolithic Quantum Error Correction
  in the Presence of Distinguishability.
status: published
generated_at: 2026-11-14T02:51:09.342Z
---

3 confirmed findings in the original article.

## article-vacuum-ultraviolet-regularity · confirmed

**Tags:** prerequisite omission

https://arxiv.org/abs/2609.26946; PDF pp. 10–13, Eqs. (S2.8)–(S2.10), (S3.2), (S3.18) (PDF p. 13).

> this is the familiar free-space result

The continuum dipole derivation does not specify ultraviolet regularization needed to apply its ordinary ULE kernel-moment criterion. The stated free-space law gives J(ω) proportional to ω³Θ(ω), hence g(ω) grows as ω^(3/2). Its ordinary Fourier integral is unavailable; finite Γ and τB are not established by this unregularized calculation.

The printed field normalization and vacuum law, together with S2’s moment definitions, expose a missing applicability condition. No claim is made that the adopted finite-dimensional Lindbladian is inconsistent.

**Correction:** Specify a form factor/cutoff and verify the kernel moments and short-memory regime, or present the finite jump model explicitly as an effective postulate.

**Silent assumptions:** A physically regularized bath with the required finite jump-kernel moments.

## article-static-lamb-kernel-transcription · confirmed

**Tags:** typos

https://arxiv.org/abs/2609.26946; PDF p. 10, Eq. (S2.14) and kernel definition immediately below (PDF p. 10).

> When the Hamiltonian is time independent

The static Lamb-shift formula retains an incorrect energy argument, sign and coupling prefactor. The cited ULE erratum, corrected expressions (1)–(2), uses first argument El−Em and kernel prefactor −2πγ; the article prints Em−El and +2π. The rendered formula confirms this transcription.

This is the authors’ printed static formula, compared directly with the independent 2021 erratum. It concerns coefficient transcription; it does not refute the benchmark simulations, which absorb the scalar shift.

**Correction:** Use Λ=Σ f(El−Em,En−El)Xml Xln|m><n| with f(a,b)=−2πγ PV∫g(ω−a)g(ω+b)dω/ω, retaining channel indices.

## article-ule-residual-state-scope · confirmed

**Tags:** prerequisite omission; missing proof steps

https://arxiv.org/abs/2609.26946; PDF pp. 9–10, Eq. (S2.3) and paragraph following Eq. (S2.10) (PDF p. 10).

> Γ𝜏B ≪1 because ‖𝜉(𝑡)‖ ≤2Γ2𝜏B for all times

The cited residual estimate is transferred to the exact reduced-state equation without its modified-state qualification. Nathan–Rudner §III A and §III C bound a modified operator σ close to the exact interaction-picture state r. The article identifies ξ with the exact-state residual without explaining that replacement.

The article’s ξ in S2.3 describes its reduced-state evolution. The cited source’s quantitative theorem concerns σ; closeness alone supplies no derivative bound. This is a source-application gap, not a counterexample to the physical approximation.

**Correction:** State ||σ−r||≤ΓτB separately from ||σ̇−D(σ)||≤2Γ²τB, with the source’s normalized couplings, Gaussian bath and remote-past preparation hypotheses.
