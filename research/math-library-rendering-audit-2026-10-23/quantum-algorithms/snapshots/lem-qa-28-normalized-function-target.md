---
id: lem-qa-28-normalized-function-target
kind: lemma
title: Rescaling a matrix-function target for QSVT
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - thm-qa-28-polynomial-matrix-function-error
  - def-qa-22-block-encoding
  - def-functional-calculus-for-a-normal-endomorphism
justified_by: []
axiom_use: "None; the claim follows from scalar rescaling in finite spectral calculus."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §§2–3"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Let $H$ be Hermitian on a nonzero finite-dimensional complex inner-product space, with $\|H\|\le\alpha$, where $\alpha>0$, and let $f:\sigma(H)\to\mathbb C$. If $\beta>0$, $\beta\ge\|f(H)\|$, and a polynomial $p$ satisfies
$$\sup_{x\in\sigma(H/\alpha)}\left|p(x)-\frac{f(\alpha x)}{\beta}\right|\le\eta,$$
then $\|\beta p(H/\alpha)-f(H)\|\le\beta\eta$. Consequently, if a unitary has top-left block $p(H/\alpha)$, it is a $\beta$-block encoding of $f(H)$ with compression error at most $\eta$ under the block-encoding convention.

## Facts & Assumptions

**Given:** $H=H^*$ on a nonzero finite-dimensional space, $0<\alpha$, $\|H\|\le\alpha$, $\beta>0$, $\beta\ge\|f(H)\|$, and the displayed scalar approximation.

[F1] [[thm-qa-28-polynomial-matrix-function-error]]: a uniform scalar approximation on the spectrum transfers to the operator norm by finite spectral calculus.

[F2] [[def-functional-calculus-for-a-normal-endomorphism]]: $g(H)=\sum_\lambda g(\lambda)P_\lambda$, so scalar multiplication of $g$ multiplies its matrix function by the same scalar.

[F3] [[def-qa-22-block-encoding]]: a unitary is a $\beta$-block encoding of $A$ when its designated compression equals $A/\beta$ (or is within the separately stated error).

## Proof

1.1 The spectrum of $H/\alpha$ is $\{\lambda/\alpha:\lambda\in\sigma(H)\}$, since each eigenvector of $H$ remains an eigenvector with its eigenvalue divided by $\alpha$. For each such eigenvalue, the hypothesis gives $|\beta p(\lambda/\alpha)-f(\lambda)|\le\beta\eta$. Apply [F1] to $H$ and the scalar function $\lambda\mapsto\beta p(\lambda/\alpha)-f(\lambda)$ to get the asserted operator-norm inequality. [F1, given, algebra]

2.1 The top-left block equals $p(H/\alpha)$ by hypothesis. Dividing the proved inequality by $\beta$ gives $\|p(H/\alpha)-f(H)/\beta\|\le\eta$. The additional hypothesis $\beta\ge\|f(H)\|$ supplies the normalization condition in the block-encoding definition [F3], so this is a valid $\beta$-block encoding with compression error at most $\eta$. [F2, F3, step 1.1, algebra] ∎
