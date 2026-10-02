---
id: thm-induced-representation-is-independent-of-rho-function-and-measure-representative
kind: theorem
title: "Independence of rho and equivalent quotient representative"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-unitary-induction-from-a-closed-subgroup, def-covariant-function-model-of-unitary-induction, lem-the-induced-action-is-unitary, lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities, lem-radon-nikodym-cocycle-of-a-homogeneous-measure, thm-weil-quotient-integration-formula-with-rho-function, lem-closed-subgroup-quotient-averaging-and-compact-lifts, thm-rmk-uniqueness-among-radon-measures]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
    - title: "David Vogan, Unitary Representations of Locally Compact Groups and Induced Representations"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. Two rho-functions $\rho_1,\rho_2$ with their Weil measures give unitarily equivalent induced representations by $U(F)(x)=[\rho_1(x)/\rho_2(x)]^{1/2}F(x)$. More generally, an equivalent quasi-invariant Radon representative $\nu$ gives the same completed measurable-section representation via its positive local density and translated Radon–Nikodym cocycle.

## Facts & Assumptions

**Given:** AC, the induced model and action, two rho-functions and Weil measures, or an equivalent quasi-invariant Radon measure $\nu$.

[F1] The Weil formula and uniqueness identify each quotient measure ([[thm-weil-quotient-integration-formula-with-rho-function]]).

[F2] Covariant sections use the quotient norm and cocycle action ([[def-covariant-function-model-of-unitary-induction]], [[lem-the-induced-action-is-unitary]]).

[F3] Equivalent Radon measures have positive finite local densities and componentwise unitary multiplication maps ([[lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities]]).

[F4] The rho-derived density is $D_g(q)=\rho(g^{-1}x)/\rho(x)$ ([[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]]).

[F5] The quotient averaging map $T_H$ is onto $C_c(G/H)$ ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F6] Radon measures agreeing on $C_c(G/H)$ agree on Borel sets ([[thm-rmk-uniqueness-among-radon-measures]]).

[A1] AC is the choice-function principle required by the stated hypothesis ([[def-axiom-of-choice]]).
## Proof

**Proof technique:** direct.

1.1 Put $a(q)=\rho_2(x)/\rho_1(x)$ for $q=xH$. The rho covariance makes this ratio independent of representative and positive continuous. If $\phi=T_Hf$, the two Weil formulas give $$\int_X\phi\,d\mu_{\rho_2}=\int_G f\rho_2dx=\int_G f\rho_1a\,dx=\int_X\phi(q)a(q)\,d\mu_{\rho_1}(q).$$ The measure $a\mu_{\rho_1}$ is Radon because $a$ is positive continuous and bounded on compact sets. Surjectivity of $T_H$ gives equality of its $C_c$ integrals with those of $\mu_{\rho_2}$, and [F6] identifies $d\mu_{\rho_2}=a\,d\mu_{\rho_1}$. [F1, F5, F6, A1]

2.1 Define $U(F)=a^{-1/2}F=[\rho_1/\rho_2]^{1/2}F$. The ratio is $H$-invariant, so covariance is preserved, and step 1.1 gives $$\|UF\|_{\rho_2}^2=\int_Xa^{-1}\|F\|^2d\mu_{\rho_2}=\|F\|_{\rho_1}^2.$$ The inverse multiplier is $a^{1/2}$, hence $U$ extends onto the Hilbert completions. [F2, step 1.1]

2.2 For the action, both sides of $U\Pi_1(g)F=\Pi_2(g)UF$ multiply $F(g^{-1}x)$ by the same scalar: $$a(xH)^{-1/2}D_g^1(xH)^{1/2}=D_g^2(xH)^{1/2}a(g^{-1}xH)^{-1/2},$$ which follows by substituting $a=\rho_2/\rho_1$ into [F4]. Thus the rho choices give equivalent representations. [F2, F4, step 1.1]

3.1 For an equivalent quasi-invariant $\nu$, [F3] supplies local densities $w=d\nu/d\mu_\rho>0$ on each open sigma-compact component. Multiplication by $w^{-1/2}$ is a unitary from the $\mu_\rho$ section space to the $\nu$ section space, since $d\nu=w\,d\mu_\rho$. On each open $\sigma$-compact target component, $g^{-1}$ maps it to an open $\sigma$-compact set meeting only countably many components, so the componentwise densities are measurable there. Pushing $w\mu_\rho$ forward under $q\mapsto gq$ gives the local Radon--Nikodym derivative $$D_g^\nu(q)=\frac{w(g^{-1}q)}{w(q)}D_g^\rho(q)$$ almost everywhere on that component. The componentwise multiplication maps assemble on the Hilbert direct sum, and substitution in the action formula gives $U\Pi_\rho(g)=\Pi_\nu(g)U$ almost everywhere. Thus the general measure representative gives the same unitary representation. ∎ [A1, F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 2.2]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix B §B.1 Theorem B.1.4(iii) and Appendix E §E.1 Proposition E.1.5, PDF pp. 353–355 and 414–415. Full relevant text was inspected; local density handling is expanded here for non-$\sigma$-finite quotients.