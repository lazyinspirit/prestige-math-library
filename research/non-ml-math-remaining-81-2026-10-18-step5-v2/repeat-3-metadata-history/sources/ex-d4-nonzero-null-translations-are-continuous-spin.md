---
id: ex-d4-nonzero-null-translations-are-continuous-spin
kind: example
title: A D=4 continuous-spin little representation has nonzero translations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
proof_strategy: direct
axiom_use: AC is inherited from the null little-group Mackey classification and positive-energy Poincaré classification.
deps:
  - def-axiom-of-choice
  - thm-positive-energy-wigner-mackey-classification-for-connected-covers
  - lem-null-little-group-unitary-duals-for-all-dimensions
  - lem-mackey-induction-classification-for-regular-euclidean-duals
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.3 and Appendix B.3, PDF pp. 13–15 and 57–58; the local example checks the translation subgroup explicitly."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed p. 4.16 (PDF p. 64), continuous-spin branch."

---

## Example

For $D=4$, let $E=\mathbb R^2\rtimes SO(2)$ be the null little group and choose a nonzero dual vector $\xi_\rho=\rho e_1$ with $\rho>0$. Its little-group representation
$$
\theta_\rho=\operatorname{Ind}_{\mathbb R^2}^{E}\chi_{\xi_\rho}
$$
is the continuous-spin representation of radius $\rho$. The translation subgroup $\mathbb R^2$ acts nontrivially in $\theta_\rho$; the full Poincaré induction from any nonzero future null momentum with little-group representation $\theta_\rho$ is irreducible and positive-energy.

## Facts & Assumptions

**Given:** $D=4$, $E=\mathbb R^2\rtimes SO(2)$, and $\xi_\rho=\rho e_1$ with $\rho>0$.

[F1] [[lem-null-little-group-unitary-duals-for-all-dimensions]]: the $\rho>0$ base little-group representation is induced from the character $\chi_{\xi_\rho}$ of $\mathbb R^2$, and the induced model acts on orbit points by their translation characters.

[F2] [[lem-mackey-induction-classification-for-regular-euclidean-duals]]: the induced model uses a full-support quasi-invariant Radon measure on its homogeneous orbit base.

[F3] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: induction from any irreducible little-group representation over a nonzero future null momentum gives an irreducible positive-energy representation of the connected-cover Poincaré group.

[A1] AC is assumed through [F1] and [F3]. [[def-axiom-of-choice]]

## Proof

**Given:** $\rho>0$ and the groups and characters in the Example.

1.1 The vector $\xi_\rho\ne0$, so the dual orbit $S_\rho=\{\eta\in\mathbb R^2:|\eta|=\rho\}$ does not contain zero. By [F1], $\theta_\rho$ is the irreducible induction from $\chi_{\xi_\rho}$ and, in the induced model, translation by $a\in\mathbb R^2$ multiplies over $\eta\in S_\rho$ by $e^{i\eta\cdot a}$. [F1, given]

2.1 Choose $a=(\pi/\rho)e_1$. At $\eta=\xi_\rho$ the multiplier is $e^{i\xi_\rho\cdot a}=e^{i\pi}=-1$. It remains different from $1$ on an open arc around $\xi_\rho$ by continuity. The orbit base is the circle $SO(2)$, and the full-support measure in [F2] assigns positive measure to this arc. Thus the translation operator is not the identity, proving that $\mathbb R^2$ acts nontrivially. [F1, F2, step 1.1, algebra]

3.1 Choose any nonzero future null $p_+$ and the little-group representation $\theta_\rho$. It is irreducible by [F1], so [F3] gives an irreducible positive-energy Poincaré induction. Its little-group translations remain nontrivial by step 2.1. Hence the example lies in the continuous-spin branch with nonzero null-little-group translations; it cannot be replaced by a helicity representation, for which those translations are trivial. [F1, F3, A1, step 2.1] ∎
