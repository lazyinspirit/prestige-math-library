---
id: thm-unitary-induction-from-a-closed-subgroup
kind: theorem
title: "Unitary induction from a closed subgroup"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h, def-covariant-function-model-of-unitary-induction, lem-the-induced-inner-product-is-independent-of-coset-representatives, lem-compactly-supported-covariant-generators-are-dense, lem-the-induced-action-is-unitary, lem-the-induced-action-is-strongly-continuous, thm-weil-quotient-integration-formula-with-rho-function, lem-radon-nikodym-cocycle-of-a-homogeneous-measure]
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

Assume AC. For every closed $H\leq G$ and strongly continuous unitary representation $\sigma:H\to U(V)$ on a Hilbert space $V$, the completion of covariant compact-coset-support functions with the rho quotient norm and cocycle-corrected left action is a strongly continuous unitary $G$-representation $\operatorname{Ind}_H^G\sigma$. If $H=G$ it identifies with $\sigma$; if $H=\{e\}$, one may normalize $\rho$ so the quotient measure is left Haar and identify the model with $L^2(G;V)$ carrying $\lambda_G\otimes I_V$, $(\lambda_G(g)\otimes I_V)F(x)=F(g^{-1}x)$; for $V=\mathbb C$ this is the scalar left regular representation. If $\mu_\rho$ is invariant the cocycle is one.

## Facts & Assumptions

**Given:** AC, closed $H\le G$, and a strongly continuous unitary $\sigma$ of $H$.

[F1] A rho-function and full-support strongly quasi-invariant Radon measure exist ([[thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h]]).

[F2] The covariant function model and completion are defined ([[def-covariant-function-model-of-unitary-induction]]).

[F3] The integrated inner product is positive definite ([[lem-the-induced-inner-product-is-independent-of-coset-representatives]]).

[F4] The cocycle-corrected action is unitary ([[lem-the-induced-action-is-unitary]]).

[F5] The action is strongly continuous ([[lem-the-induced-action-is-strongly-continuous]]).

[F7] The density derivative and its cocycle identity are given by the homogeneous-measure cocycle lemma ([[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]]).

[F6] For $H=\{e\}$, the quotient formula identifies the measure with Haar measure ([[thm-weil-quotient-integration-formula-with-rho-function]]).

[A1] AC is the choice-function principle required by the stated hypothesis ([[def-axiom-of-choice]]).
## Proof

**Proof technique:** direct.

1.1 Choose $\rho$ and $\mu_\rho$ by [F1] under [A1]. The covariance equations make the pointwise inner product a well-defined positive form by [F2,F3]. Its completion is a Hilbert space. [F2, F3, A1]
2.1 The formula $\Pi_\rho(g)F(x)=D_g(xH)^{1/2}F(g^{-1}x)$ preserves the dense covariant model and is a unitary representation by [F4]. The strong continuity lemma [F5] extends this property to every completed vector. This gives $\operatorname{Ind}_H^G\sigma$. [F2, F4, F5, step 1.1]
3.1 If $H=G$, then $G/H$ is a singleton and every covariant section is determined by $v=F(e)$, with $F(x)=\sigma(x)^{-1}v$. Rescale $\rho$ by a positive constant so the quotient point has measure one; evaluation at $e$ is then an isometry, and the action becomes $v\mapsto\sigma(g)v$. If $H=\{e\}$, put $c=dh(\{e\})$ and choose the constant rho-function $\rho(x)=c$. The Weil formula [F6] then gives $\mu_\rho=dx$, so the model completes from $C_c(G;V)$ to $L^2(G;V)$. The action is $F(x)\mapsto F(g^{-1}x)$, namely $\lambda_G\otimes I_V$; for $V=\mathbb C$ this is the scalar left regular representation. If $\mu_\rho$ is invariant, then $d(g_*\mu_\rho)/d\mu_\rho=1$; the continuous density $D_g$ is therefore one everywhere by full support, so the action has no cocycle factor. These are the three stated reductions. ∎ [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1, Definition E.1.6 and Remark E.1.7, PDF pp. 412–414; Vogan, *On the Definition of Induced Representations*, §§1–4. Complete relevant text was inspected.
