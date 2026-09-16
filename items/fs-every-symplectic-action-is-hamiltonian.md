---
id: fs-every-symplectic-action-is-hamiltonian
kind: false-statement
title: Every symplectic action is Hamiltonian
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symplectic-and-hamiltonian-lie-group-action, def-fundamental-vector-field-of-a-left-action, def-two-dimensional-torus, def-countable-choice, thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology, cor-a-nonzero-period-obstructs-exactness-and-bounding]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 26, §26.4, example of the circle action on the torus, printed page 167
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remark 7.13(c) and weakly Hamiltonian actions, printed page 83
proof_strategy: direct
---

## Statement

Every symplectic Lie-group action is Hamiltonian. **This is false.**

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the two-torus $T^2=\mathbb R^2/\mathbb Z^2$ with $\omega=dx\wedge dy$, and the translation action of $G=\mathbb R$ in the first coordinate.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface.

[F1] On $T^2$ the one-forms $dx$ and $dy$ are well defined, $\omega=dx\wedge dy$ is symplectic, and the vector field $\partial_x$ is symplectic but not Hamiltonian: $\iota_{\partial_x}\omega=dy$ has nonzero period and is not exact. [[def-two-dimensional-torus]].

[F2] The action $t\cdot[(x,y)]:=[(x+t,y)]$ is a smooth left action of $\mathbb R$ on $T^2$, and its fundamental field for $\xi=1$ is $\xi_{T^2}=\left.\frac d{dt}\right|_0(-t)\cdot p=-\partial_x$. [[def-fundamental-vector-field-of-a-left-action]], [[def-two-dimensional-torus]].

[F3] A Hamiltonian action admits a map whose component for $\xi$ satisfies $d\mu^\xi=-\iota_{\xi_{T^2}}\omega$. [[def-symplectic-and-hamiltonian-lie-group-action]].



## Refutation

**Proof technique:** direct.

1.1 The translation action is symplectic: translations of the first coordinate preserve $dx$, $dy$ and hence $\omega=dx\wedge dy$. [F1, F2, given]

1.2 By [F2] the component equation for $\xi=1$ would read $d\mu^1=-\iota_{-\partial_x}\omega=\iota_{\partial_x}\omega=dy$, so the function $\mu^1$ would be a primitive of $dy$. [F2, F3]

2.1 But $dy$ has nonzero period: integrating it over the closed loop $\gamma(t)=[(0,t)]$, $0\le t\le1$, gives $1$, while the integral of an exact one-form over a closed loop vanishes. Hence $dy$ is not exact, and no such function $\mu^1$ exists. [step 1.2, F1]

3.1 The translation action is therefore symplectic but not Hamiltonian, so the statement is false. [step 1.1, step 2.1, A1] ∎
