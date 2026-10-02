---
id: ex-unitary-induction-from-a-cocompact-lattice
kind: example
title: "Uniform lattice quotient and quasi-regular action"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h, prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree, thm-unitary-induction-from-a-closed-subgroup, prop-compact-discrete-and-abelian-groups-are-unimodular, lem-radon-nikodym-cocycle-of-a-homogeneous-measure, def-rho-function-for-a-closed-subgroup]
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

Assume AC. If $\Gamma$ is a closed discrete cocompact subgroup of locally compact $G$, then $G$ is unimodular, $G/\Gamma$ has a finite invariant Radon measure, and $\operatorname{Ind}_\Gamma^G1$ identifies with the quasi-regular action on $L^2(G/\Gamma)$ without a cocycle.

## Facts & Assumptions

**Given:** AC, LCH $G$, and closed discrete $\Gamma$ such that $G/\Gamma$ is compact.

[F5] The rho covariance law uses the stated modular convention ([[def-rho-function-for-a-closed-subgroup]]).

[F1] A discrete group is unimodular ([[prop-compact-discrete-and-abelian-groups-are-unimodular]]).

[F2] Every closed subgroup admits a rho-derived quasi-invariant Radon measure with density cocycle $D_g$ ([[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]], [[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]]).

[F3] A nonzero $G$-invariant quotient measure exists exactly when $\Delta_G|_\Gamma=\Delta_\Gamma$ ([[prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree]]).

[F4] The induced representation is unitary and its scalar covariant model is given by the induction theorem ([[thm-unitary-induction-from-a-closed-subgroup]]).

[A1] AC is the choice-function principle required by the stated hypothesis ([[def-axiom-of-choice]]).
## Proof

**Proof technique:** direct.

1.1 Since $\Gamma$ is discrete, [F1] gives $\Delta_\Gamma=1$. The function $\rho(x)=\Delta_G(x)^{-1}$ obeys $\rho(x\gamma)=\Delta_\Gamma(\gamma)\Delta_G(\gamma)^{-1}\rho(x)$, so it is a rho-function by [F5]. Its cocycle is constant: $D_g(x\Gamma)=\rho(g^{-1}x)/\rho(x)=\Delta_G(g)$. [F1, F2, F5, algebra]
2.1 Let $\mu_\rho$ be its quotient measure. Since $G/\Gamma$ is compact, $0<\mu_\rho(G/\Gamma)<\infty$: finiteness is Radon compact-finiteness and positivity follows from full support. The pushforward $g_*\mu_\rho$ has the same total mass as $\mu_\rho$, while [F2] gives $g_*\mu_\rho=\Delta_G(g)\mu_\rho$. Therefore $\Delta_G(g)=1$ for every $g$, and $G$ is unimodular. [A1, F2, step 1.1]
3.1 Now $\Delta_G|_\Gamma=\Delta_\Gamma=1$, so [F3] gives a nonzero invariant Radon measure on $G/\Gamma$; compactness makes it finite. For $\rho=1$ its cocycle is identically one. Scalar covariance says $F(x\gamma)=F(x)$, so sections are exactly functions on $G/\Gamma$, and the action is $F(q)\mapsto F(g^{-1}q)$ with the quotient $L^2$ norm. This is the quasi-regular representation, as claimed by [F4]. ∎ [A1, F1, F2, F3, F4, step 1.1, step 2.1]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix B §B.1 and Appendix E §E.1, Proposition B.1.6 and Example E.1.8(ii), PDF pp. 355–356 and 414. Full relevant text was inspected.