---
id: cex-an-everywhere-defined-closed-operator-on-a-banach-space-cannot-be-unbounded
kind: counterexample
title: "An everywhere-defined closed operator on a Banach space is bounded"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-densely-defined-closed-and-closable-operator, thm-closed-graph-theorem, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-unbounded-linear-operator-domain-and-graph, def-dependent-choice, def-hilbert-space, lem-unbounded-adjoint-is-well-defined-and-closed]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Remark 7.27 and the graph discussion, p.34"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Exercise 6.47 and Exercise 6.50, Sec. 6.1"
---

## Statement refuted

Assume Dependent Choice. Let $X,Y$ be Banach spaces and let $T:X\to Y$ be a
linear operator defined on all of $X$ whose graph is closed in $X\oplus Y$.
Then $T$ is bounded. Consequently an unbounded self-adjoint operator on a
Hilbert space $H$ cannot have domain $H$: its domain is a proper dense
subspace.

## Facts & Assumptions

[A1] Under Dependent Choice, an everywhere defined linear map between Banach spaces is bounded if and only if its graph is closed ([[thm-closed-graph-theorem]], [[def-dependent-choice]]).

[A2] A self-adjoint operator is densely defined and closed, being equal to the adjoint of a densely defined operator ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[lem-unbounded-adjoint-is-well-defined-and-closed]], [[def-unbounded-linear-operator-domain-and-graph]]).

[A3] A Hilbert space is a Banach space, so the closed graph theorem applies to everywhere defined operators on it ([[def-hilbert-space]], [[thm-closed-graph-theorem]]).

## Counterexample

**Proof technique:** direct.

**Given:** Banach spaces $X,Y$ and an everywhere defined linear $T$ with closed graph.

1.1 The closed graph theorem gives that $T$ is bounded: an everywhere defined linear map between Banach spaces with closed graph is bounded. [A1, given]

2.1 Let $H$ be a Hilbert space and let $S$ be a self-adjoint operator on $H$. A self-adjoint operator is closed, being equal to the adjoint of a densely defined operator; if in addition $D(S)=H$, then step 1.1 applied to $S:H\to H$ shows that $S$ is bounded. [A2, A3, step 1.1]

3.1 Therefore a self-adjoint operator that is unbounded must have $D(S)\ne H$, and its domain is dense by the definition of self-adjointness; the claimed impossibility of an unbounded everywhere-defined self-adjoint operator follows. [A2, step 2.1]

4.1 Both conclusions are steps 1.1 and 2.1, and the hypothesis used is exactly Dependent Choice, through the closed graph theorem. ∎
