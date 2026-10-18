---
id: ex-d2-zero-orbit-has-nontrivial-lorentz-character
kind: example
title: A nontrivial D=2 Lorentz character lies over zero momentum
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
proof_strategy: direct
axiom_use: AC is inherited from the positive-energy classification; the one-dimensional character computation is choice-free.
deps:
  - def-axiom-of-choice
  - thm-positive-energy-wigner-mackey-classification-for-connected-covers
  - lem-lorentz-stabilizers-and-connected-cover-preimages
  - def-connected-poincare-cover-and-positive-energy
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.1–§3.2, PDF pp. 9–13; the local example treats the full zero-orbit little group."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.13–4.16 (PDF pp. 61–64), nonzero mass shells; zero-orbit representations are supplied locally."

---

## Example

In $D=2$, the connected Lorentz group is the additive rapidity group $K=L\cong\mathbb R$. At zero momentum, $K_0=K$. For any fixed $s\ne0$, the character
$$
\theta_s(r)=e^{isr}
$$
therefore gives the one-dimensional Poincaré representation
$$
\Pi_s(a,r)=\theta_s(r)=e^{isr},\qquad a\in\mathbb R^2, r\in K.
$$
It is irreducible, nontrivial, and positive-energy. Thus zero momentum includes nonvacuum Lorentz-cover representations.

## Facts & Assumptions

**Given:** $D=2$, the connected boost group $K=L\cong\mathbb R$, zero momentum, and $s\ne0$.

[F1] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: $D=2$ has no nontrivial connected Lorentz cover and the zero-momentum stabilizer is all of $K=L\cong\mathbb R$.

[F2] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: at $p=0$, any irreducible strongly continuous unitary representation of $K_0=K$ gives an irreducible strongly continuous positive-energy induction.

[F3] [[def-connected-poincare-cover-and-positive-energy]]: $\chi_0(a)=1$ for all translations, and a representation is positive-energy when its translation spectral PVM is concentrated on $C_+$.

[A1] AC is assumed through [F2]. [[def-axiom-of-choice]]

## Proof

**Given:** $s\ne0$, $p=0$, and the semidirect product group $\mathbb R^2\rtimes K$.

1.1 The function $\theta_s(r)=e^{isr}$ is a continuous one-dimensional unitary character of the additive group $K=\mathbb R$, hence is irreducible. Since $p=0$, [F1] gives $K_p=K$, and [F2] yields its induced representation over the zero orbit. Induction from the whole group stabilizer identifies with the inducing representation itself, so the formula is $\Pi_s(a,r)=\chi_0(a)\theta_s(r)=e^{isr}$. [F1, F2, F3, A1, given]

2.1 The representation is nontrivial: at $r=\pi/s$ it has value $e^{i\pi}=-1$. Its translation subgroup acts identically because $\chi_0=1$, and [F2] guarantees positive energy since the inducing momentum $0$ lies in $C_+$. This proves that a nontrivial Lorentz character lies over zero momentum. [F2, F3, step 1.1, algebra] ∎
