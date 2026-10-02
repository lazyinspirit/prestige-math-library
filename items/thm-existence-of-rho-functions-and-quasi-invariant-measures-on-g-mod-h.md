---
id: thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h
kind: theorem
title: "Existence of rho-functions and quotient measure classes"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-rho-function-for-a-closed-subgroup, lem-bruhat-cutoff-on-a-closed-subgroup-quotient, thm-weil-quotient-integration-formula-with-rho-function, thm-the-modular-function-is-a-continuous-homomorphism, lem-closed-subgroup-quotient-averaging-and-compact-lifts, lem-compactly-supported-kernels-admit-commuting-radon-integrals, thm-choice-implies-dependent-implies-countable-choice, thm-rmk-uniqueness-among-radon-measures]
justified_by: []
aliases: []
proof_strategy: construction
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

Assume AC. Every closed $H\leq G$ admits a rho-function $\rho$ and a full-support strongly quasi-invariant Radon measure $\mu_\rho$ on $G/H$ satisfying the Weil formula.

## Facts & Assumptions

**Given:** LCH $G$, closed $H$, fixed left Haar measures and AC.

[F1] AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] There is a continuous nonnegative Bruhat cutoff $\beta$ with $\int_H\beta(xh)dh=1$ and compact support over compact quotient subsets ([[lem-bruhat-cutoff-on-a-closed-subgroup-quotient]]).

[F3] The modular functions are positive continuous homomorphisms and the rho covariance convention is $\rho(xh)=\Delta_H(h)\Delta_G(h)^{-1}\rho(x)$ ([[def-rho-function-for-a-closed-subgroup]], [[thm-the-modular-function-is-a-continuous-homomorphism]]).

[F4] Compactly supported continuous kernels have continuous partial integrals ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F5] Every rho-function gives a unique Radon quotient measure satisfying the Weil formula ([[thm-weil-quotient-integration-formula-with-rho-function]]).

[F6] $T_H:C_c(G)\to C_c(G/H)$ is onto ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F7] Radon measures agreeing on $C_c(G/H)$ agree on Borel sets under DC ([[thm-rmk-uniqueness-among-radon-measures]]).

[A1] AC is the choice-function principle ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** construction.

1.1 Define $\rho(x)=\int_H\beta(xh)\Delta_G(h)/\Delta_H(h)\,dh$. For each $x$, the integrand is supported on the compact fiber intersection $x^{-1}\operatorname{supp}\beta\cap H$, so its integral is finite. It is positive because $\beta\ge0$, the weight is positive, and $\int_H\beta(xh)dh=1$. [F2, F3, construct]

2.1 Near $x_0$ choose a compact neighborhood $K$. The set $S=\operatorname{supp}\beta\cap p^{-1}(p(K))$ is compact by [F2], and all $h$ for which $xh\in\operatorname{supp}\beta$ with $x\in K$ lie in the compact set $K^{-1}S\cap H$. The integrand is jointly continuous with this common compact support; [F4] gives continuity of its integral. Thus $\rho$ is positive and continuous. [F2, F3, F4, step 1.1]

2.2 For $h_0\in H$, substitute $k=h_0h$; left invariance of $dh$ and the homomorphism laws give $\rho(xh_0)=\Delta_H(h_0)\Delta_G(h_0)^{-1}\rho(x)$. Hence $\rho$ is a rho-function. [F3, step 1.1, algebra]

3.1 Apply [F5] to obtain $\mu_\rho$ and the Weil formula. The ratio $D_g(xH)=\rho(g^{-1}x)/\rho(x)$ is independent of the representative by [F3] and is positive continuous. For $\phi=T_Hf$, Weil and left invariance give $$\int_{G/H}\phi(gq)d\mu_\rho(q)=\int_G f(gx)\rho(x)dx=\int_G f(y)\rho(g^{-1}y)dy=\int_{G/H}\phi(q)D_g(q)d\mu_\rho(q).$$ By [F6] this holds for every $\phi\in C_c(G/H)$, and [F7] identifies $g_*\mu_\rho=D_g\mu_\rho$. Positivity of $D_g$ gives equivalence of measures; the ratio descends continuously jointly in $(g,q)$ through the open quotient map. Thus $\mu_\rho$ is strongly quasi-invariant. Full support is part of [F5]. ∎ [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 2.2]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix B §B.1, PDF pp. 349–356; Bruhat, *Lectures on Lie Groups and Representations of Locally Compact Groups*, Chapter 7 §§3.3–3.4, PDF pp. 72–77. Full relevant text was inspected.
