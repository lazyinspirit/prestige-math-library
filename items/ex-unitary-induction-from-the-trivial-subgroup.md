---
id: ex-unitary-induction-from-the-trivial-subgroup
kind: example
title: "Induction from the trivial subgroup"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-unitary-induction-from-a-closed-subgroup, thm-weil-quotient-integration-formula-with-rho-function, def-left-and-right-regular-unitary-representations]
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

Assume AC. For $H=\{e\}$ with its standard Haar measure of mass $1$ and the one-dimensional trivial representation, choose $\rho=1$. Then $G/H=G$, $\mu_\rho$ is left Haar measure, and $\operatorname{Ind}_{\{e\}}^G1$ is the left regular representation on $L^2(G)$, $(\lambda(g)f)(x)=f(g^{-1}x)$.

## Facts & Assumptions

**Given:** AC and an LCH group $G$ with a left Haar measure.

[F1] The closed-subgroup induction construction and action ([[thm-unitary-induction-from-a-closed-subgroup]]).

[F2] The Weil formula and uniqueness of its quotient measure ([[thm-weil-quotient-integration-formula-with-rho-function]]).

[F3] For the trivial subgroup the left regular representation acts by $f(x)\mapsto f(g^{-1}x)$ ([[def-left-and-right-regular-unitary-representations]]).

[A1] AC is the choice-function principle required by the stated hypothesis ([[def-axiom-of-choice]]).
## Proof

**Proof technique:** direct.

1.1 When $H=\{e\}$, the rho covariance imposes no restriction, and $\rho=1$ is valid. The averaging map $T_H$ is identity and the Weil formula becomes $\int_G f(x)dx=\int_G f(x)d\mu_\rho(x)$. Radon uniqueness [F2] identifies $\mu_\rho$ with left Haar measure. [F2, given, A1]

2.1 Covariance is empty for the trivial subgroup, so the dense model is $C_c(G)$ and its completion is $L^2(G)$. The density cocycle is $D_g(x)=1$, hence the induced action is $F(x)\mapsto F(g^{-1}x)$, exactly [F3]. The construction theorem [F1] supplies strong continuity and unitarity. ∎ [A1, F1, F2, F3, step 1.1]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1, Example E.1.8(i), PDF p. 414; Vogan, *On the Definition of Induced Representations*, §2. All relevant lines were inspected.