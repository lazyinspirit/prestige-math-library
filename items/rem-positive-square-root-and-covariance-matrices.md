---
id: rem-positive-square-root-and-covariance-matrices
kind: remark
title: Positive square root and covariance matrices
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-positive-square-root, def-axiom-of-choice, def-self-adjoint-positive-unitary-and-normal-operator, def-order-on-bounded-self-adjoint-operators]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.4, printed pp.245–260"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §3, printed pp.239–243"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
---

## Remark

Assume AC. Let $V$ be a nonzero finite-dimensional complex inner-product space and let $C$ be a positive covariance matrix, that is a self-adjoint operator on $V$ with $\langle Cx,x\rangle\ge0$ for every $x$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-order-on-bounded-self-adjoint-operators]]). Then $C$ has a unique positive square root $C^{1/2}$, obtained by the same continuous functional calculus as on the main page: since $V$ is finite dimensional and nonzero the spectrum of $C$ is a finite nonempty subset of $[0,+\infty)$, and $\lambda\mapsto\sqrt\lambda$ is applied to $C$ by the calculus, the square root lying in $C^*(I,C)$ ([[thm-positive-square-root]]).

**Unitary covariance change.** If $U$ is unitary on $V$, then $(UCU^*)^{1/2}=UC^{1/2}U^*$: the operator $UC^{1/2}U^*$ is positive, because $\langle UC^{1/2}U^*x,x\rangle=\langle C^{1/2}U^*x,U^*x\rangle\ge0$, and its square is $UC^{1/2}U^*UC^{1/2}U^*=UCU^*$; uniqueness of the positive square root therefore identifies it with $(UCU^*)^{1/2}$. In particular the square root is equivariant under the unitary changes of coordinates in which covariance matrices are compared.

**Scope.** This remark is orientation for the probability track: covariance matrices are positive, and the finite-dimensional instance of the positive-square-root theorem supplies their standard square roots. It proves no probability theorem, and it does not assert positivity of any particular covariance matrix; that positivity is a hypothesis of the interface, to be supplied by the consumer ([[def-axiom-of-choice]] for the declared choice strength).
