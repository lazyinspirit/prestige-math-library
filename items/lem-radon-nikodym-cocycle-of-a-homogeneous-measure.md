---
id: lem-radon-nikodym-cocycle-of-a-homogeneous-measure
kind: lemma
title: "Continuous quotient translation cocycle"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-quasi-invariant-measure-on-a-homogeneous-space, thm-weil-quotient-integration-formula-with-rho-function, def-rho-function-for-a-closed-subgroup, thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h, lem-closed-subgroup-quotient-averaging-and-compact-lifts, thm-rmk-uniqueness-among-radon-measures, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
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

Assume AC. For the rho-derived $\mu_\rho$ and $g\in G$, $d(g_*\mu_\rho)/d\mu_\rho(xH)=D_g(xH)=\rho(g^{-1}x)/\rho(x)>0$. This is independent of representative, jointly continuous, and satisfies $D_{g_1g_2}(q)=D_{g_1}(q)D_{g_2}(g_1^{-1}q)$.

## Facts & Assumptions

**Given:** Closed $H\le G$, a rho-function $\rho$, its Weil measure $\mu_\rho$, and elements $g,g_1,g_2\in G$.

[A1] AC is assumed as stated ([[def-axiom-of-choice]]).

[F1] Rho-functions satisfy $\rho(xh)=\Delta_H(h)\Delta_G(h)^{-1}\rho(x)$ ([[def-rho-function-for-a-closed-subgroup]]).

[F2] The rho-derived measure satisfies the Weil formula ([[thm-weil-quotient-integration-formula-with-rho-function]]).

[F3] Every $\phi\in C_c(G/H)$ equals $T_Hf$ for some $f\in C_c(G)$ ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F4] Radon measures agreeing on $C_c$ agree on Borel sets ([[thm-rmk-uniqueness-among-radon-measures]]).

[F5] The quotient map is open and $G/H$ is LCH ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[A2] AC implies DC, so the Radon-measure uniqueness supplier applies ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Define $D_g(xH)=\rho(g^{-1}x)/\rho(x)$. Replacing $x$ by $xh$ multiplies numerator and denominator by the same factor from [F1], so the ratio is well-defined and positive. The continuous function $(g,x)\mapsto\rho(g^{-1}x)/\rho(x)$ is constant on fibers in the second coordinate; [F5] makes its descent through $G\times G\to G\times G/H$ continuous. [F1, F5, construct]

2.1 For $\phi=T_Hf$, Weil’s formula and left invariance give $$\int_{G/H}\phi(gq)d\mu_\rho(q)=\int_G f(gx)\rho(x)dx=\int_G f(y)\rho(g^{-1}y)dy=\int_{G/H}\phi(q)D_g(q)d\mu_\rho(q).$$ The positive continuous density is locally bounded, so it defines a Radon measure relative to the Radon measure $\mu_\rho$. By [F3] the equality holds on every $C_c(G/H)$ function; [F4] identifies $g_*\mu_\rho=D_g\mu_\rho$. This proves the derivative formula. [A1, A2, F2, F3, F4, step 1.1]

3.1 For $q=xH$, the ratios telescope: $$D_{g_1}(q)D_{g_2}(g_1^{-1}q)=\frac{\rho(g_1^{-1}x)}{\rho(x)}\frac{\rho(g_2^{-1}g_1^{-1}x)}{\rho(g_1^{-1}x)}=D_{g_1g_2}(q).$$ Together with step 1.1, this proves the stated cocycle identity and continuity. [A1, A2, step 1.1, step 2.1, algebra] ∎

## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix B §B.1, Theorem B.1.4 and its quotient-measure density calculation, PDF pp. 352–354. Full relevant text was inspected.