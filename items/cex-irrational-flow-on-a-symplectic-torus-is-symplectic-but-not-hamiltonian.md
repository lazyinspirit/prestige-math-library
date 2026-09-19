---
id: cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian
kind: counterexample
title: An irrational flow on a symplectic torus is symplectic but not Hamiltonian
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-symplectic-and-hamiltonian-lie-group-action, def-two-dimensional-torus, ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus, cor-a-nonzero-period-obstructs-exactness-and-bounding, def-fundamental-vector-field-of-a-left-action, def-countable-choice, thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 18, §18.1, example on p. 106 and Lecture 26, §26.4, p. 167
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, generating vector fields and Hamiltonian actions, printed pages 82--83
proof_strategy: direct
---

## Statement refuted

The constant flow of irrational slope on the symplectic two-torus is
Hamiltonian. **This is false:** it is symplectic, and no global Hamiltonian
function exists for it.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the two-torus $T^2=\mathbb R^2/\mathbb Z^2$ with $\omega=dx\wedge dy$, and the vector field $X=a\partial_x+b\partial_y$ of irrational slope with $(a,b)\ne(0,0)$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface.

[F1] In the standard smooth quotient coordinates on $T^2=\mathbb R^2/\mathbb Z^2$, $dx$ and $dy$ descend to global one-forms and $\omega=dx\wedge dy$ is the standard symplectic form ([[ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus]]). A one-form with nonzero period is not exact ([[cor-a-nonzero-period-obstructs-exactness-and-bounding]]).

[F2] A vector field is Hamiltonian exactly when $\iota_X\omega$ is exact, and the flow of a complete symplectic field is a symplectic action of $\mathbb R$. [[def-symplectic-and-hamiltonian-lie-group-action]].

[F3] The fundamental field of the translation action $t\cdot[(x,y)]=[(x+at,y+bt)]$ is $-(a\partial_x+b\partial_y)$. [[def-fundamental-vector-field-of-a-left-action]].


## Counterexample

**Proof technique:** direct.

1.1 The field $X=a\partial_x+b\partial_y$ is symplectic: $\iota_X\omega=a\,dy-b\,dx$ is closed because its coefficients are constants, equivalently $\mathcal L_X\omega=d(\iota_X\omega)=0$. [F1, given]

2.1 Its contraction is not exact: integrating $a\,dy-b\,dx$ around the two generating loops gives the periods $a$ and $-b$, and at least one of them is nonzero because $(a,b)\ne(0,0)$. By [F1] this one-form is not exact, so no Hamiltonian function exists. [step 1.1, F1]

3.1 Equivalently, the flow of $X$ is the action $t\cdot[(x,y)]=[(x+at,y+bt)]$ of $\mathbb R$ on $T^2$, which is symplectic; its fundamental field is $-X$ by [F3], and the moment equation for $\xi=1$ would require a function with $d\mu^1=\iota_X\omega$, again impossible by step 2.1. [step 2.1, F2, F3]

4.1 The irrational constant flow is therefore a symplectic action that is not Hamiltonian, refuting the statement. [step 1.1, step 2.1, A1] ∎
