---
id: fs-every-symplectic-action-is-hamiltonian
kind: false-statement
title: Every symplectic action is Hamiltonian
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symplectic-and-hamiltonian-lie-group-action, def-fundamental-vector-field-of-a-left-action, def-smooth-left-action-of-a-lie-group, def-countable-choice, def-two-dimensional-torus, cor-a-nonzero-period-obstructs-exactness-and-bounding]
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

[F1] On the given standard smooth torus $T^2=\mathbb R^2/\mathbb Z^2$ the forms $dx,dy$ descend, $\omega=dx\wedge dy$ is symplectic, and $\iota_{\partial_x}\omega=dy$. A closed one-form with nonzero period on an oriented embedded circle is not exact ([[cor-a-nonzero-period-obstructs-exactness-and-bounding]]).

[F2] A smooth left action is jointly smooth and satisfies the identity and action laws; in the library convention its fundamental field is $\xi_M(p)=\left.\frac d{dt}\right|_0\exp(-t\xi)\cdot p$. [[def-smooth-left-action-of-a-lie-group]], [[def-fundamental-vector-field-of-a-left-action]].

[F3] A Hamiltonian action admits a map whose component for $\xi$ satisfies $d\mu^\xi=-\iota_{\xi_{T^2}}\omega$. [[def-symplectic-and-hamiltonian-lie-group-action]].



## Refutation

**Proof technique:** direct.

1.1 The displayed formula descends from the smooth translations $(x,y)\mapsto(x+t,y)$ of $\mathbb R^2$, and the identity and action laws hold by addition, so it is a smooth left action by [F2]. These translations preserve $dx$, $dy$ and hence $\omega=dx\wedge dy$, so the action is symplectic. [F1, F2, given, algebra]

1.2 By [F2] the fundamental field for $\xi=1$ is $\left.\frac d{dt}\right|_0(-t)\cdot p=-\partial_x$. Thus the component equation would read $d\mu^1=-\iota_{-\partial_x}\omega=\iota_{\partial_x}\omega=dy$, so $\mu^1$ would be a primitive of $dy$. [F2, F3, algebra]

2.1 But $dy$ has nonzero period: integrating it over the closed loop $\gamma(t)=[(0,t)]$, $0\le t\le1$, gives $1$, while the integral of an exact one-form over a closed loop vanishes. Hence $dy$ is not exact, and no such function $\mu^1$ exists. [step 1.2, F1]

3.1 The translation action is therefore symplectic but not Hamiltonian, so the statement is false. [step 1.1, step 2.1, A1] ∎
