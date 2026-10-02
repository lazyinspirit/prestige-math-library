---
id: prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree
kind: proposition
title: "Criterion for an invariant quotient measure"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-rho-function-for-a-closed-subgroup, thm-weil-quotient-integration-formula-with-rho-function, lem-closed-subgroup-quotient-averaging-and-compact-lifts, lem-right-translation-scales-left-haar-measure, thm-uniqueness-of-left-haar-measure-up-to-scale, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures, thm-choice-implies-dependent-implies-countable-choice]
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
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. The quotient $G/H$ has a nonzero $G$-invariant Radon measure if and only if $\Delta_G|_H=\Delta_H$. When they agree, $\rho=1$ in the Weil formula supplies such a measure.

## Facts & Assumptions

**Given:** LCH $G$, closed $H$, fixed left Haar measures, and AC.

[F1] The averaging map $T_H:C_c(G)\to C_c(G/H)$ is onto ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F2] Positive functionals on $C_c$ have Radon representing measures, and Radon measures are determined by their $C_c$ integrals ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]], [[thm-rmk-uniqueness-among-radon-measures]]).

[F3] Any two left Haar measures are positive scalar multiples ([[thm-uniqueness-of-left-haar-measure-up-to-scale]]).

[F4] Right translation by $h$ scales a left Haar integral by $\Delta(h)^{-1}$ ([[lem-right-translation-scales-left-haar-measure]]).

[F5] $\rho=1$ is a rho-function exactly when $\Delta_G|_H=\Delta_H$; its Weil measure satisfies the quotient formula ([[def-rho-function-for-a-closed-subgroup]], [[thm-weil-quotient-integration-formula-with-rho-function]]).

[F6] AC implies DC as required by the cited measure results ([[thm-choice-implies-dependent-implies-countable-choice]]).

[A1] AC is assumed ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\nu$ is a nonzero invariant Radon measure on $X=G/H$. Define $L(f)=\int_XT_Hf\,d\nu$ for real $f\in C_c(G)$. This functional is positive. If it were zero, surjectivity [F1] would make every $C_c(X)$ integral against $\nu$ zero, and [F2] would force $\nu=0$. Thus $L$ is nonzero. [F1, F2, A1]
1.2 Conversely suppose the modular functions agree on $H$. Then $\rho=1$ satisfies the covariance in [F5]. Let $\mu_1$ be the Weil measure. For $a\in G$ and $\phi=T_Hf$, its translate satisfies $$\int_X\phi(a^{-1}q)d\mu_1(q)=\int_G f(a^{-1}x)dx=\int_Gf(x)dx=\int_X\phi(q)d\mu_1(q),$$ by left invariance. [F1, F5]
2.1 For $a\in G$, let $L_af(x)=f(a^{-1}x)$. Then $T_H(L_af)(xH)=T_Hf(a^{-1}xH)$, so invariance of $\nu$ gives $L(L_af)=L(f)$. By [F2], $L$ is represented by a Radon measure $\lambda$ on $G$; it is left invariant and nonzero, hence a left Haar measure. [F2, step 1.1]
3.1 By [F3], $\lambda=c\,dx$ for $c>0$. For $h\in H$, right translation gives $T_H(R_hf)=\Delta_H(h)^{-1}T_Hf$ by [F4] applied in $H$. Hence $L(R_hf)=\Delta_H(h)^{-1}L(f)$. Since $\lambda=c\,dx$, [F4] applied in $G$ also gives $L(R_hf)=\Delta_G(h)^{-1}L(f)$. Choose $f$ with $L(f)>0$; equality forces $\Delta_G(h)=\Delta_H(h)$. [F3, F4, step 2.1, choose]
4.1 Surjectivity [F1] gives this equality for every $C_c(X)$ test function. The Radon uniqueness in [F2] shows $a_*\mu_1=\mu_1$; the Weil measure is nonzero. This proves sufficiency and the equivalence. ∎ [A1, F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1, step 1.2, choose]



## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix B §B.1, Corollary B.1.7, PDF pp. 355–356; Bruhat, *Lectures on Lie Groups and Representations of Locally Compact Groups*, Chapter 7 §3.3, Proposition 3, PDF pp. 74–75. Full relevant text was inspected.
