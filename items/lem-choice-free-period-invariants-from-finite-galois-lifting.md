---
id: lem-choice-free-period-invariants-from-finite-galois-lifting
kind: lemma
title: Period invariant fields from finite Galois lifting without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - lem-choice-free-de-rham-invariants-iff-finite-galois-lifting
  - lem-choice-free-semistable-comparison-reduction-to-de-rham-invariants
  - lem-choice-free-ramified-crystalline-comparison-injection
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Theorem 9.1.5 and its invariant-field deduction; the finite-lifting scope is made explicit below
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, let $C=\widehat F$ be its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. Suppose restriction $G_{\mathbb Q_p}\to\operatorname{Gal}(L/\mathbb Q_p)$ is surjective for every finite Galois $L/\mathbb Q_p$ in $F$. Then for every finite $K\subset F$ with maximal unramified subfield $K_0$, one has $B_{\mathrm{dR}}^{G_K}=K$ and
$$\operatorname{Frac}(B_{\mathrm{cris}})^{G_K}=B_{\mathrm{cris}}^{G_K}=\operatorname{Frac}(B_{\mathrm{st}})^{G_K}=B_{\mathrm{st}}^{G_K}=K_0.$$
This is a conditional consequence of the displayed lifting property, not an assertion that lifting or period-ring regularity holds unconditionally.

## Facts & Assumptions

**Given:** The valued algebraic closure, its completion and primitive cyclotomic system, and finite Galois restriction surjectivity as stated.

[F1] The given finite lifting property gives $B_{\mathrm{dR}}^{G_K}=K$ for each finite $K$, without Choice. [[lem-choice-free-de-rham-invariants-iff-finite-galois-lifting]]

[F2] If $B_{\mathrm{dR}}^{G_{\mathbb Q_p}}=\mathbb Q_p$, the normalized map $K\otimes_{K_0}B_{\mathrm{st}}\to B_{\mathrm{dR}}$ is injective without Choice. [[lem-choice-free-semistable-comparison-reduction-to-de-rham-invariants]]

[F3] The crystalline tensor map $K\otimes_{K_0}B_{\mathrm{cris}}\to B_{\mathrm{dR}}$ is injective without Choice. [[lem-choice-free-ramified-crystalline-comparison-injection]]

## Proof

1.1 By [F1] the given lifting property gives $B_{\mathrm{dR}}^{G_K}=K$ for the fixed finite $K$ and also for $K=\mathbb Q_p$. Hence [F2]–[F3] give injective tensor maps for both period rings. Localizing each map at the nonzero elements of its period ring gives $K\otimes_{K_0}E\hookrightarrow B_{\mathrm{dR}}$, where $E$ is either crystalline or semistable fraction field. [F1, F2, F3, given, algebra]

2.1 Since $G_K$ fixes $K$ and $K_0$, restriction of step 1.1 embeds $K\otimes_{K_0}E^{G_K}$ into $B_{\mathrm{dR}}^{G_K}=K$. If $E^{G_K}$ had two $K_0$-linearly independent elements, their tensors with $1$ would remain $K$-linearly independent, contradicting the one-dimensional $K$-target. Thus $E^{G_K}$ has dimension at most one over $K_0$; it contains $K_0$, so it equals $K_0$. Since each period ring contains $K_0$ and lies in its fraction field, its invariant subring is also $K_0$. This proves all four identities without introducing an additional choice or claiming the lifting hypothesis. [F1, step 1.1, algebra] ∎

## Source notes

The invariant-field deduction following Brinon–Conrad Theorem 9.1.5 was read and is reproduced in finite-dimensional tensor form. The finite-lifting hypothesis remains explicit; regularity of stable Galois lines is a separate obligation.
