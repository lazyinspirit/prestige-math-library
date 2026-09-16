---
id: def-order-on-bounded-self-adjoint-operators
kind: definition
title: Order on bounded self adjoint operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-self-adjoint-positive-unitary-and-normal-operator, def-countable-choice, thm-hilbert-adjoint-properties, def-hilbert-space, def-operator-norm]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.4, printed pp.245–255"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Definition

Assume Countable Choice and let $H$ be a nonzero complex Hilbert space. Write

$$\mathcal B(H)_{\mathrm{sa}}:=\{\,T\in\mathcal B(H):T^*=T\,\}$$

for the set of bounded self-adjoint operators on $H$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]). For $S,T\in\mathcal B(H)_{\mathrm{sa}}$ define

$$S\le T \quad\Longleftrightarrow\quad \langle (T-S)x,x\rangle\ge0 \quad\text{for every }x\in H .$$

Equivalently $T\ge S$; the notation $T\ge0$ is exactly the positivity of [[def-self-adjoint-positive-unitary-and-normal-operator]]. Operators are compared only when both are self-adjoint: the relation is not defined for a general pair in $\mathcal B(H)$, and no conjugate-linear or non-real quadratic form is admitted by the definition.

**$\mathcal B(H)_{\mathrm{sa}}$ is a real vector space and $\le$ is a partial order on it.** Sums and real scalar multiples of self-adjoint operators are self-adjoint, because the adjoint is conjugate-linear and $T^{**}=T$ ([[thm-hilbert-adjoint-properties]]); the zero operator is self-adjoint. So the comparisons below are between elements of a real vector space.

- **Reflexivity.** $S-S=0$ and $\langle 0x,x\rangle=0$, so $S\le S$.
- **Transitivity.** If $S\le T$ and $T\le U$, then for every $x$
  $$\langle (U-S)x,x\rangle=\langle (U-T)x,x\rangle+\langle (T-S)x,x\rangle\ge0 ,$$
  by additivity of the pairing in its first argument, so $S\le U$.
- **Antisymmetry.** If $S\le T$ and $T\le S$, then $\langle (T-S)x,x\rangle=0$ for every $x$. The sesquilinear form $B(x,y):=\langle(T-S)x,y\rangle$ is linear in $x$ and conjugate-linear in $y$ and satisfies $B(z,z)=0$ for every $z$, so the four-term expansion
  $$4B(x,y)=B(x+y,x+y)-B(x-y,x-y)+iB(x+iy,x+iy)-iB(x-iy,x-iy)$$
  vanishes for all $x,y$. Hence $\langle(T-S)x,y\rangle=0$ for all $x,y$, and fixing $x$ and taking $y=(T-S)x$ gives $\|(T-S)x\|^2=0$, so $T-S=0$ and $S=T$. The expansion is the displayed consequence of additivity and conjugate-linearity alone, so antisymmetry consumes no completeness of $H$ ([[def-hilbert-space]]).

**Two conventions.** First, the order is a partial order on the real vector space of self-adjoint operators; it is not a total order, and the extrema of the spectrum in the later results are taken in $\mathbb R$, not by comparing operators. Second, $T\ge0$ refers to the quadratic form of a self-adjoint operator; the counterexample on the companion page shows that nonnegativity of the spectrum alone does not define positivity for operators that are not self-adjoint ([[def-operator-norm]] for the operator data used throughout).
