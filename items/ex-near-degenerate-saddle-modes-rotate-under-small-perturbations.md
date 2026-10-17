---
id: ex-near-degenerate-saddle-modes-rotate-under-small-perturbations
kind: example
title: "A small spectral gap makes the dimer mode sensitive to perturbations"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-dimer-mode-perturbation-and-local-saddle-error
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, A dimer method for finding saddle points on high dimensional potential surfaces using only first derivatives"
      url: "https://hj.hi.is/papers/paperDimer.pdf"
      locator: "§II A–C: dimer rotation follows a curvature direction using paired force evaluations"
---

## Example

For each $\delta>0$, let

$$H_\delta=\begin{pmatrix}-\delta&0\\0&\delta\end{pmatrix},\qquad E_\delta=\begin{pmatrix}0&\delta\\\delta&0\end{pmatrix},\qquad \widehat H_\delta=H_\delta+E_\delta.$$

The exact lowest eigenvector is $e_1$. For every $z\in\mathbb R^2$, the perturbation satisfies $\|E_\delta z\|_2=\delta\|z\|_2$, and this amplification tends to zero with the gap, but the lowest eigenvector of $\widehat H_\delta$ remains at angle $\arctan(\sqrt2-1)>0$ from $e_1$. Thus an absolute perturbation tolerance alone cannot guarantee a mode error tending to zero as the spectral gap collapses.

## Facts & Assumptions

**Given:** The matrices above and the mode-separation context in [[thm-dimer-mode-perturbation-and-local-saddle-error]].

[F1] [[thm-dimer-mode-perturbation-and-local-saddle-error]]: the mode-angle bound depends on the error-to-gap ratio, not on absolute error alone.

## Proof

**Given:** $\delta>0$ and the two symmetric matrices in the Example.

1.1 The eigenvalues of $H_\delta$ are $-\delta$ and $\delta$, with exact lowest eigenvector $e_1$ and spectral gap $2\delta$. Also $E_\delta^TE_\delta=\delta^2I$, so for every $z$ we have $\|E_\delta z\|_2^2=z^TE_\delta^TE_\delta z=\delta^2\|z\|_2^2$ and hence $\|E_\delta z\|_2=\delta\|z\|_2$. [given, algebra]

1.2 The eigenvalues of $\widehat H_\delta$ are $\pm\sqrt2\,\delta$. For the negative eigenvalue, the first row equation gives $(-1+\sqrt2)x+y=0$, so a lowest unit eigenvector is proportional to $(1,1-\sqrt2)$. Its angle with $e_1$ is therefore $\arctan(|1-\sqrt2|)=\arctan(\sqrt2-1)$, a positive constant independent of $\delta$. [given, algebra]

2.1 As $\delta\downarrow0$, the perturbation norm tends to zero while this angle stays fixed at $\arctan(\sqrt2-1)>0$. The spectral gap also tends to zero, so this does not contradict the separated-mode bound [F1]; it shows why that bound must include a gap scale. [F1, step 1.1, step 1.2] ∎
