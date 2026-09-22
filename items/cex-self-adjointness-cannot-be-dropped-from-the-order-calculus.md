---
id: cex-self-adjointness-cannot-be-dropped-from-the-order-calculus
kind: counterexample
title: Self adjointness cannot be dropped from the order calculus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-order-on-bounded-self-adjoint-operators, def-countable-choice, def-self-adjoint-positive-unitary-and-normal-operator, def-spectrum-and-resolvent-of-a-bounded-operator, def-hilbert-space-adjoint, thm-hilbert-adjoint-properties]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3–5.4, printed pp.235–255"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement refuted

Assume Countable Choice. For every bounded operator whose spectrum is a subset of $[0,+\infty)$, the quadratic form is nonnegative; equivalently, spectral nonnegativity alone characterises positivity and self-adjointness may be dropped from the order calculus.

## Facts & Assumptions

[A1] Positivity of an operator is the quadratic-form condition that $\langle Tx,x\rangle$ is a real number in $[0,+\infty)$ for every $x$, and the order relation is defined only for self-adjoint pairs ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-order-on-bounded-self-adjoint-operators]]).

[A2] The adjoint is characterised by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ ([[def-hilbert-space-adjoint]]).

[A3] $\lambda\in\rho(T)$ exactly when $\lambda I-T$ is bijective with bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A4] Countable Choice is the declared choice hypothesis of this pair's order calculus ([[def-countable-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** The two-dimensional complex inner-product space with orthonormal basis $(e_1,e_2)$ and the Jordan nilpotent $J=\begin{pmatrix}0&1\\0&0\end{pmatrix}$.

1.1 $J$ has real spectrum $\{0\}\subseteq[0,+\infty)$: $J^2=0$ gives the inverse $z^{-1}(I+z^{-1}J)$ of $zI-J$ for every $z\ne0$, while $z=0$ is a spectral value because $Je_1=0$. [A3, A2, algebra]

1.2 $J$ is not positive: for $x:=\tfrac1{\sqrt2}(e_1+ie_2)$ one has $Jx=\tfrac{i}{\sqrt2}e_1$ and hence $\langle Jx,x\rangle=\tfrac{i}{\sqrt2}\cdot\overline{\tfrac1{\sqrt2}}=\tfrac i2$, which is not a real number, while positivity of a bounded operator requires the value of the quadratic form at every vector to be a real number in $[0,+\infty)$. [A1, A2, algebra]

1.3 $J$ is not self-adjoint: the defining pairing on the standard orthonormal basis gives $J^*e_1=e_2$ and $J^*e_2=0$, so $J^*=\begin{pmatrix}0&0\\1&0\end{pmatrix}\ne J$. [A2, algebra]

2.1 The witness $J$ therefore has nonnegative real spectrum but is neither positive nor self-adjoint, so nonnegativity of the spectrum alone does not give the quadratic-form inequalities of the order calculus. [step 1.1, step 1.2, step 1.3]

3.1 The statement is refuted: $J$ satisfies its spectral antecedent but fails its quadratic-form conclusion, so spectral nonnegativity alone cannot extend the self-adjoint order definition to all bounded operators. [step 2.1, A1, A4] ∎
