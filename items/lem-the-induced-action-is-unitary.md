---
id: lem-the-induced-action-is-unitary
kind: lemma
title: "Unitary cocycle-corrected left action"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-radon-nikodym-cocycle-of-a-homogeneous-measure, def-covariant-function-model-of-unitary-induction, lem-the-induced-inner-product-is-independent-of-coset-representatives, def-axiom-of-choice]
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

Assume AC. For $g\in G$ and $F\in C_c(G,H;V)$, define $(\Pi_\rho(g)F)(x)=D_g(xH)^{1/2}F(g^{-1}x)=[\rho(g^{-1}x)/\rho(x)]^{1/2}F(g^{-1}x)$. This is covariant, preserves the inner product, satisfies $\Pi_\rho(g_1)\Pi_\rho(g_2)=\Pi_\rho(g_1g_2)$, and extends to a unitary on the completion.

## Facts & Assumptions

**Given:** The induced model, its quotient measure, and $g,g_1,g_2\in G$.

[A1] AC is assumed as stated ([[def-axiom-of-choice]]).

[F1] $D_g$ is positive, representative-independent, and satisfies the density cocycle ([[lem-radon-nikodym-cocycle-of-a-homogeneous-measure]]).

[F2] Covariant functions and their norm are defined by the induced model ([[def-covariant-function-model-of-unitary-induction]]).

[F3] The integrated inner product is positive definite ([[lem-the-induced-inner-product-is-independent-of-coset-representatives]]).

## Proof

**Proof technique:** direct.

1.1 Since $D_g$ is a function on $G/H$, it is right $H$-invariant. Thus $F(g^{-1}xh)=\sigma(h)^{-1}F(g^{-1}x)$ proves covariance of $\Pi_\rho(g)F$. Its quotient support is the translate by $g$ of the compact support of $F$. [F1, F2, A1]

2.1 Applying twice gives $$\Pi_\rho(g_1)\Pi_\rho(g_2)F(x)=\big(D_{g_1}(xH)D_{g_2}(g_1^{-1}xH)\big)^{1/2}F(g_2^{-1}g_1^{-1}x)=\Pi_\rho(g_1g_2)F(x)$$ by the cocycle identity [F1]. Also $\Pi_\rho(e)=I$, so $\Pi_\rho(g^{-1})$ is the inverse. [F1, step 1.1]

3.1 The cocycle identity with $g_1=g^{-1},g_2=g$ gives $D_g(grH)D_{g^{-1}}(rH)=1$. The change-of-measure formula $d((g^{-1})_*\mu_\rho)/d\mu_\rho=D_{g^{-1}}$ then yields $$\|\Pi_\rho(g)F\|_2^2=\int D_g(q)\|F(g^{-1}q)\|^2d\mu_\rho(q)=\int D_g(gr)D_{g^{-1}}(r)\|F(r)\|^2d\mu_\rho(r)=\|F\|_2^2.$$ Thus the operator is an isometry on the dense continuous model, and its inverse from step 2.1 makes its extension unitary on the completion. ∎ [A1, F1, F2, F3, step 1.1, step 2.1]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1, Proposition E.1.4, PDF pp. 413–414. Full relevant text was inspected.