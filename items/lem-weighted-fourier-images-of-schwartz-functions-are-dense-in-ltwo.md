---
id: lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo
kind: lemma
title: Weighted Fourier transforms of Schwartz functions are dense in L2
status: published
origin: pipeline
deps:
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-schwartz-space-and-its-seminorms
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - def-bessel-potential-pre-hilbert-norm-on-schwartz-space
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, property (4), printed pp. 140–141 (density of Schwartz functions in H^s)"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Proposition 4.8 proof, printed p. 69 (density via the weighted L2 model)"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume Countable Choice. For every $n\ge1$ and $s\in\mathbb R$, the set
$$\{\langle\xi\rangle^s\mathcal F(u)(\xi):u\in\mathcal S(\mathbb R^n)\}$$
is dense in complex $L^2(\mathbb R^n)$. In fact it contains every frequency
function in $C_c^\infty(\mathbb R^n)$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, and $s\in\mathbb R$.

[A1] Countable Choice is the principle of selecting one element from each
nonempty set in a countable family ([[def-countable-choice]]).

[F1] Both bracket powers multiply Schwartz space continuously and are mutual
inverses ([[lem-japanese-bracket-powers-preserve-schwartz-space]]).

[F2] Fourier transformation is onto Schwartz space and has a Schwartz-valued
inverse ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F3] Under Countable Choice, complex $C_c^\infty(\mathbb R^n)$ is dense in
Euclidean complex $L^p$ for every finite $p$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F4] The weight and transform in this claim are the ones used in the
preceding candidate form
([[def-bessel-potential-pre-hilbert-norm-on-schwartz-space]]).

[F5] Complex compactly supported smooth functions are defined componentwise,
and their derivatives are componentwise
([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F6] Schwartz space consists of actual smooth functions with all polynomially
weighted derivative seminorms finite
([[def-schwartz-space-and-its-seminorms]]).

## Proof

**Proof technique:** Exact preimage construction followed by smooth density.

1.1 Fix an arbitrary $h\in C_c^\infty(\mathbb R^n;\mathbb C)$. By [F5], its components and every derivative are continuous with compact support, so each $\xi^\alpha\partial^\beta h$ is bounded and [F6] gives $h\in\mathcal S$; [F1] then gives $q=\langle\xi\rangle^{-s}h\in\mathcal S$. [F1, F4, F5, F6, given]

2.1 By [F2], $u=\mathcal F^{-1}q$ belongs to Schwartz space, and pointwise $\langle\xi\rangle^s\mathcal F(u)=\langle\xi\rangle^s q=h$. Thus every such $h$ is in the weighted Fourier image. [A1, F2, step 1.1]

3.1 For any $g\in L^2$ and $\varepsilon>0$, [F3] with $p=2$ supplies $h\in C_c^\infty$ with $\|g-h\|_2<\varepsilon$; step 2.1 puts this same $h$ in the weighted Fourier image, proving that image dense in $L^2$. [A1, F3, step 2.1] ∎
