---
id: ex-d2-future-null-rays-are-inequivalent
kind: example
title: The two D=2 future null rays give inequivalent representations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
proof_strategy: direct
axiom_use: AC is inherited from the positive-energy classification; the explicit boost-orbit calculation is choice-free.
deps:
  - def-axiom-of-choice
  - thm-positive-energy-wigner-mackey-classification-for-connected-covers
  - lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces
  - lem-lorentz-stabilizers-and-connected-cover-preimages
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.2, PDF pp. 11–13; the local example resolves the D=2 boundary absent from the source's general-dimensional treatment."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.13–4.16 (PDF pp. 61–64), dimensions at least four only; the D=2 orbit calculation is local."

---

## Example

In $D=2$, use the base Lorentz group $L=SO_0(1,1)\cong\mathbb R$. The two nonzero future null momenta
$$
p_+=(1,1),\qquad p_-=(1,-1)
$$
lie on distinct Lorentz orbits. Their stabilizers are trivial, so they give two induced positive-energy representations
$$
\pi_\pm=\operatorname{Ind}_{\mathbb R^2}^{\mathbb R^2\rtimes L}\chi_{p_\pm}.
$$
The representations $\pi_+$ and $\pi_-$ are inequivalent despite having the same mass squared $\eta(p_\pm,p_\pm)=0$.

## Facts & Assumptions

**Given:** $D=2$, the connected boost group $L$, and the mostly-plus form $\eta$.

[F1] [[lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces]]: in $D=2$ the nonzero null orbits are the four rays distinguished by the signs of $p^0$ and $p^1$.

[F2] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: $L\cong\mathbb R$ is the only connected Lorentz cover in $D=2$, and every nonzero null stabilizer is trivial.

[F3] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: each distinct orbit and its irreducible little-group representation give an inequivalent irreducible representation; a future null orbit gives positive energy.

[A1] AC is assumed through [F3]. [[def-axiom-of-choice]]

## Proof

**Given:** $p_+=(1,1)$ and $p_-=(1,-1)$.

1.1 For $q=(p^0,p^1)$, the connected boost of rapidity $s$ acts on light-cone coordinates by $(p^0+p^1,p^0-p^1)\mapsto(e^s(p^0+p^1),e^{-s}(p^0-p^1))$. For $p_+$ the second coordinate is zero and the first positive; for $p_-$ the first coordinate is zero and the second positive. These zero-coordinate patterns are preserved by every finite boost, so no element of $L$ carries $p_+$ to $p_-$. Both have $p^0>0$ and $\eta(p,p)=0$, hence are future null. [F1, given, algebra]

2.1 Their little groups are trivial by [F2], and the unique representation of the trivial group is its one-dimensional identity representation. Applying [F3] to the two distinct future null orbits yields irreducible positive-energy inductions, and its orbit-equivalence criterion makes $\pi_+$ and $\pi_-$ inequivalent. Their squared masses are both zero by direct substitution into $\eta(p,p)=-(p^0)^2+(p^1)^2$. [F1, F2, F3, A1, step 1.1, algebra] ∎
