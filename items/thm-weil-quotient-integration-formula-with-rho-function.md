---
id: thm-weil-quotient-integration-formula-with-rho-function
kind: theorem
title: "Weil formula with a rho-function"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-rho-function-for-a-closed-subgroup, lem-closed-subgroup-quotient-averaging-and-compact-lifts, lem-compactly-supported-kernels-admit-commuting-radon-integrals, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures, thm-choice-implies-dependent-implies-countable-choice, lem-haar-change-of-variables-under-inversion, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]
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
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. For fixed left Haar measures $dx,dh$ and any rho-function $\rho$ there is a unique Radon measure $\mu_\rho$ on $G/H$ such that $\int_G f(x)\rho(x)\,dx=\int_{G/H}\int_H f(xh)\,dh\,d\mu_\rho(xH)$ for every $f\in C_c(G)$. It has full support.

## Facts & Assumptions

**Given:** LCH $G$, closed $H$, fixed left Haar measures $dx,dh$, a rho-function $\rho$, and AC.

[F1] The convention is $\int_G f(xh)dx=\Delta_G(h)^{-1}\int_Gf dx$, and rho covariance is $\rho(xh)=\Delta_H(h)\Delta_G(h)^{-1}\rho(x)$ ([[def-rho-function-for-a-closed-subgroup]]).

[F2] The averaging map $T_H:C_c(G)\to C_c(G/H)$ is onto; its proof also constructs nonnegative lifts and lifts whose averages equal $1$ on a prescribed compact quotient set ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F3] Positive integrations against compactly supported continuous kernels on LCH spaces commute ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F4] Every positive functional on $C_c(X;\mathbb R)$, for $X$ LCH, is represented by a Radon measure ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]]).

[F5] Two Radon measures agreeing on $C_c(X)$ agree on all Borel sets under DC ([[thm-rmk-uniqueness-among-radon-measures]]).

[F6] Inversion changes left Haar integration by $\int_H a(h^{-1})\,dh=\int_H a(h)\Delta_H(h^{-1})\,dh$ for nonnegative Borel $a$ ([[lem-haar-change-of-variables-under-inversion]]).

[F7] AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[A1] AC is assumed in its choice-function form ([[def-axiom-of-choice]]).

[F8] Any point of an open subset of an LCH space admits a nonnegative compactly supported continuous bump contained in that open set ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 For $f,g\in C_c(G)$, the kernel $(x,h)\mapsto f(x)g(xh)\rho(x)$ has compact support in $G\times H$: its support lies in $\operatorname{supp}f\times((\operatorname{supp}f)^{-1}\operatorname{supp}g\cap H)$. Thus [F3] permits interchanging the two integrations. Right-translation change of variables in $G$, [F1], and inversion in $H$ using [F6] give $$\int_G f(x)(T_Hg)(xH)\rho(x)\,dx=\int_G(T_Hf)(xH)g(x)\rho(x)\,dx.$$ Explicitly, the inner integral at $h$ becomes $\Delta_H(h)^{-1}\int_G f(yh^{-1})g(y)\rho(y)\,dy$; integrating this in $h$ and applying [F6] gives $\int_H f(yh)\,dh$. [F1, F3, F6, construct]
2.1 Define $\Lambda(T_Hf)=\int_G f\rho\,dx$. If $T_Hf=0$, let $Q=p(\operatorname{supp}f)$ and choose $g\in C_c(G)$ with $T_Hg=1$ on $Q$, as supplied by the compact-set lift construction in [F2]. The identity in step 1.1 gives $\int_G f\rho\,dx=\int_G (T_Hf)(xH)g(x)\rho(x)\,dx=0$. Thus $\Lambda$ is well defined. If $\phi\ge0$, choose a nonnegative lift $f$ with $T_Hf=\phi$ using [F2]; then $\Lambda(\phi)=\int f\rho\,dx\ge0$. [F2, step 1.1]
3.1 By [F4] and [F7], $\Lambda$ is represented by a Radon measure $\mu_\rho$, and [F5] makes it unique. The defining identity for $\Lambda$ is the displayed Weil formula. For any nonempty open $O\subseteq X$, [F8] gives a nonzero nonnegative $\phi\in C_c(X)$ supported in $O$. Choose the nonnegative lift $f$ from [F2]. Since $T_Hf=\phi$ is nonzero, $f$ is positive at some point and hence on a nonempty open subset of $G$. A nonzero left Haar measure has full support: its support is nonempty, closed, and invariant under every left translation, so it is all of $G$. The positive continuous weight $\rho$ therefore gives $\int_Gf\rho\,dx>0$. The Weil identity implies $\mu_\rho(O)>0$, proving full support. ∎ [A1, F2, F4, F5, F7, F8, step 1.1, step 2.1]
