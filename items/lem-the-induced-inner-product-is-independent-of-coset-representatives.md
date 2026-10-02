---
id: lem-the-induced-inner-product-is-independent-of-coset-representatives
kind: lemma
title: "Well-defined induced inner product"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-covariant-function-model-of-unitary-induction, thm-weil-quotient-integration-formula-with-rho-function, lem-closed-subgroup-quotient-averaging-and-compact-lifts, def-axiom-of-choice]
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

Assume AC. For $F_1,F_2\in C_c(G,H;V)$, $q=xH\mapsto\langle F_1(x),F_2(x)\rangle$ is independent of $x$, continuous, and compactly supported. Its $\mu_\rho$ integral is a positive-definite inner product; the norm vanishes only when $F=0$.

## Facts & Assumptions

**Given:** Strongly continuous unitary $\sigma$, rho-derived measure $\mu_\rho$, and $F_1,F_2\in C_c(G,H;V)$.

[A1] AC is assumed as stated ([[def-axiom-of-choice]]).

[F1] Covariant sections satisfy $F(xh)=\sigma(h)^{-1}F(x)$ ([[def-covariant-function-model-of-unitary-induction]]).

[F2] The representation $\sigma$ in the induced model is unitary on $V$ ([[def-covariant-function-model-of-unitary-induction]]).

[F3] The quotient map is open and $G/H$ is LCH ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]]).

[F4] The rho-derived Radon measure has full support ([[thm-weil-quotient-integration-formula-with-rho-function]]).

## Proof

**Proof technique:** direct.

1.1 For $h\in H$, covariance and unitarity give $$\langle F_1(xh),F_2(xh)\rangle=\langle\sigma(h)^{-1}F_1(x),\sigma(h)^{-1}F_2(x)\rangle=\langle F_1(x),F_2(x)\rangle.$$ Thus the scalar is independent of the representative. Its continuous lift to $G$ descends continuously because the quotient map is open; its support lies in the intersection of the compact quotient supports. [F1, F2, F3, A1]

2.1 Radon finiteness on that compact support makes the integral finite. For $F_1=F_2=F$, the integral is nonnegative. If it were zero but $F$ were nonzero at some $x$, continuity would make $\|F\|^2$ positive on a nonempty open subset of $G/H$, which has positive measure by full support [F4], a contradiction. Hence the norm is positive definite; integrating the pointwise sesquilinear form gives the asserted inner product. ∎ [A1, F4, step 1.1, algebra]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1, Definition E.1.6, PDF pp. 412–413. Full relevant text was inspected.