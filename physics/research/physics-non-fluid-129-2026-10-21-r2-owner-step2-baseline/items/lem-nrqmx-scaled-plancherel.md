---
id: lem-nrqmx-scaled-plancherel
kind: lemma
domain: mathematics
library: mathematics
title: Plancherel identity for the scaled semiclassical Fourier transform
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-nrqmx-weyl-symbol-wigner
  - thm-plancherel
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: §1.1.2, printed p. 4, definition of the semiclassical Fourier transform with factor \((2\pi\hbar)^{-d/2}\); its exact \(L^2\) normalization is proved locally here
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, $\epsilon>0$, and define $\mathcal F_\epsilon$ on $\mathcal S(\mathbb R^d)$ by [[def-nrqmx-weyl-symbol-wigner]]. It extends uniquely to a unitary operator on $L^2(\mathbb R^d)$.

## Statement references

[[def-nrqmx-weyl-symbol-wigner]]

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, and $\epsilon>0$.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] With negative-sign $2\pi$ normalization, the Fourier transform $\mathcal F_2u(\eta)=\int e^{-2\pi i x\cdot\eta}u(x)\,dx$ on Schwartz space extends uniquely to a surjective isometry of $L^2$ ([[thm-plancherel]]).

[F2] If $T:U\to V$ is a $C^1$ diffeomorphism of open Euclidean sets, then $\int_V f(y)dy=\int_U f(T(x))|\det DT(x)|dx$ for nonnegative Lebesgue-measurable $f$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F3] The scaled transform on Schwartz space is exactly $(\mathcal F_\epsilon u)(\xi)=(2\pi\epsilon)^{-d/2}(\mathcal F_2u)(\xi/(2\pi\epsilon))$, using the definition in [[def-nrqmx-weyl-symbol-wigner]].

## Proof
**Given:** The data of the Statement and [A1], [F1]–[F3].

1.1 Put $c=2\pi\epsilon>0$ and define $D_cg(\xi)=c^{-d/2}g(\xi/c)$ on $L^2(\mathbb R^d)$. A null set is sent to a null set by the same change-of-variables theorem [F2], so this definition is independent of the representative of $g$. Apply [F2] to $T(\eta)=c\eta$, whose Jacobian determinant is $c^d$, and to the nonnegative function $f(\xi)=|g(\xi/c)|^2$. This gives
$$ \|D_cg\|_2^2=c^{-d}\int_{\mathbb R^d}|g(\xi/c)|^2\,d\xi =c^{-d}c^d\int_{\mathbb R^d}|g(\eta)|^2\,d\eta =\|g\|_2^2. $$
The inverse is $D_{1/c}$, as direct substitution shows, so $D_c$ is unitary. [given, A1, F2, algebra]

2.1 By [F3], $\mathcal F_\epsilon u=D_c\mathcal F_2u$ for every $u\in\mathcal S$. Both factors extend unitarily by step 1.1 and [F1], so their composition is a unitary extension to $L^2$. Since $\mathcal S$ is dense and the extension is continuous, no other continuous extension can differ on any $L^2$ vector. [step 1.1, F1, F3, algebra] ∎
