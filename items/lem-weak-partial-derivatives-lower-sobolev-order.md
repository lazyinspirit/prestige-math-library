---
id: lem-weak-partial-derivatives-lower-sobolev-order
kind: lemma
title: "Weak partial derivatives lower the Sobolev order"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-derivatives-are-unique-almost-everywhere, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 1 §1.2, Definition 1.8, printed pp. 4–5; §1.3, Lemma 1.14(2) and proof, printed pp. 9–10, for iterated weak derivatives."
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Omega\subseteq\mathbb R^n$ be open, $k\ge1$, $1\le p\le\infty$ and $u\in W^{k,p}(\Omega;\mathbb K)$. For every multi-index $\beta$ with $|\beta|\le k$ the weak derivative $D^{\beta}u$, viewed as an $L^p$ class, belongs to $W^{k-|\beta|,p}(\Omega)$, and $D^{\alpha}(D^{\beta}u)=D^{\alpha+\beta}u$ a.e. whenever $|\alpha|+|\beta|\le k$.

## Facts & Assumptions

**Given:** Countable Choice; an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$; integers $k\ge1$; an exponent $1\le p\le\infty$; a class $u\in W^{k,p}(\Omega;\mathbb K)$; and multi-indices $\beta,\alpha$ with $|\beta|\le k$ and $|\alpha|+|\beta|\le k$.

[F1] $u\in W^{k,p}(\Omega;\mathbb K)$ means that $u$ and all weak derivatives $D^\gamma u$ with $|\gamma|\le k$ have representatives in $L^p(\Omega;\mathbb K)$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] A weak derivative is defined by the test-function integration-by-parts identity against $C_c^\infty(\Omega)$ test functions ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F3] If $D^\alpha u$ and $D^\beta u$ exist in $L^1_{\mathrm{loc}}(\Omega)$ and $D^{\alpha+\beta}u$ also exists in $L^1_{\mathrm{loc}}(\Omega)$, then $D^\alpha(D^\beta u)$ exists and equals $D^{\alpha+\beta}u$ almost everywhere ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F4] Weak derivatives in $L^1_{\mathrm{loc}}$ are unique as almost-everywhere classes ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F5] Countable Choice, assumed throughout ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Regularity bookkeeping. Since $u\in W^{k,p}(\Omega;\mathbb K)$ and $|\beta|,|\alpha+\beta|\le k$, the classes $D^\alpha u$, $D^\beta u$ and $D^{\alpha+\beta}u$ are defined and lie in $L^p(\Omega;\mathbb K)$ by [F1]; representatives of $L^p$ classes are locally integrable on the open set $\Omega$, so both are classes in $L^1_{\mathrm{loc}}(\Omega;\mathbb K)$ to which the weak-differentiation calculus of [F2] applies. [F1, F2, F5, given]

2.1 Commutation. With $\alpha,\beta$ as in the Given, the hypotheses of [F3] are met by step 1.1: $D^\alpha u$, $D^\beta u$ and $D^{\alpha+\beta}u$ exist in $L^1_{\mathrm{loc}}(\Omega)$, hence $D^\alpha(D^\beta u)$ exists and satisfies $D^\alpha(D^\beta u)=D^{\alpha+\beta}u$ almost everywhere on $\Omega$. [F3, step 1.1, given]

3.1 Descent of the order. By step 2.1, for every multi-index $\alpha$ with $|\alpha|\le k-|\beta|$ the weak derivative $D^\alpha(D^\beta u)$ exists and equals $D^{\alpha+\beta}u$, which lies in $L^p(\Omega;\mathbb K)$ by step 1.1; also $D^\beta u\in L^p(\Omega;\mathbb K)$. By [F1] this says exactly that the class $D^\beta u$ belongs to $W^{k-|\beta|,p}(\Omega;\mathbb K)$. The identity $D^\alpha(D^\beta u)=D^{\alpha+\beta}u$ is an almost-everywhere identity of classes, and by uniqueness [F4] it is independent of the representatives chosen for $D^\beta u$ and $D^{\alpha+\beta}u$. [F1, F2, F4, step 1.1, step 2.1, algebra] ∎

## Source notes

The source records the commutation of weak partial derivatives as part of the elementary calculus of weak derivatives; the proof above isolates the two uses: existence of the higher derivative and uniqueness of the $L^1_{\mathrm{loc}}$ classes. No regularity of $\partial\Omega$ and no boundedness of $\Omega$ is needed.
