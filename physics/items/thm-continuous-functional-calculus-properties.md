---
id: thm-continuous-functional-calculus-properties
kind: theorem
title: Continuous functional calculus properties
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-mapping-for-continuous-normal-functional-calculus, thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, lem-spectrum-of-a-positive-operator-is-nonnegative, def-axiom-of-choice, thm-continuous-functional-calculus-for-bounded-normal-operators, def-c-star-algebra-generated-by-a-normal-operator, thm-hilbert-adjoint-properties, def-self-adjoint-positive-unitary-and-normal-operator, thm-complex-stone-weierstrass-self-adjoint]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.54 and Theorem 5.70, printed pp.250–273"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Example 4.9, pp.13–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. The continuous functional calculus on a nonzero complex Hilbert space preserves sums, products, conjugation and positivity, is norm-continuous, obeys continuous composition, sends eigenvectors at $\lambda$ to scalar evaluation at $\lambda$, and commutes with every $S$ satisfying $ST=TS$ and $ST^*=T^*S$.

## Facts & Assumptions

[A1] The normal calculus $f\mapsto f(T)$ is an isometric unital star-isomorphism $C(\sigma(T))\to C^*(I,T)$, hence complex-linear, multiplicative, unital, star-preserving and isometric; when $T$ is self-adjoint, this normal calculus agrees function-by-function with the self-adjoint calculus, which has the same properties and range ([[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]).

[A2] $\sigma(f(T))=f(\sigma(T))$ and $f(T)$ is normal ([[thm-spectral-mapping-for-continuous-normal-functional-calculus]]).

[A3] $\ast$-polynomials are uniformly dense in the continuous functions on a compact subset of $\mathbb C$ ([[thm-complex-stone-weierstrass-self-adjoint]]).

[A4] $C^*(I,T)$ is the norm closure of the unital $\ast$-algebra of $\ast$-polynomials in $T$, and multiplication in $\mathcal B(H)$ is continuous ([[def-c-star-algebra-generated-by-a-normal-operator]], [[thm-hilbert-adjoint-properties]]).

[A5] For normal $T$ and $Tx=\lambda x$ one has $T^*x=\overline\lambda x$: $\|(T^*-\overline\lambda)x\|^2=\langle(T^*-\overline\lambda)(T-\lambda)x,x\rangle=\langle(T-\lambda)x,(T-\lambda)x\rangle=0$ by normality ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-hilbert-adjoint-properties]]).

[A6] If $X\ge0$ is a bounded positive operator then $\sigma(X)\subseteq[0,+\infty)$ ([[lem-spectrum-of-a-positive-operator-is-nonnegative]]).

[A7] AC is the hypothesis of the calculus and spectral suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded normal $T\in\mathcal B(H)$, functions $f,k\in C(\sigma(T))$, a function $h\in C(\sigma(f(T)))$, and an operator $S$ commuting with $T$ and $T^*$.

1.1 Linearity, multiplicativity, conjugation and norm-continuity hold: $f(T)$ is the image of $f$ under an isometric unital $\ast$-isomorphism, so $(f+k)(T)=f(T)+k(T)$, $(fk)(T)=f(T)k(T)$, $(\lambda f)(T)=\lambda f(T)$, $\overline f(T)=f(T)^*$ and $\|f(T)\|=\|f\|_\infty$. [A1]

1.2 If $f\ge0$ is real-valued, write $f=|r|^2$ with $r=\sqrt f$ continuous; then $f(T)=r(T)^*r(T)$ and $\langle f(T)x,x\rangle=\|r(T)x\|^2\ge0$, so $f(T)$ is a positive operator; conversely, if $f(T)\ge0$ as a quadratic form, then $\sigma(f(T))\subseteq[0,+\infty)$ and [A2] gives $f(\sigma(T))\subseteq[0,+\infty)$, so $f\ge0$. [A1, A2, A6, algebra]

1.3 For every $\ast$-polynomial $q$ in $z,\overline z$ and every eigenvector $x$ of $T$ at $\lambda$, one has $T^*x=\overline\lambda x$ and hence $q(T,T^*)x=q(\lambda,\overline\lambda)x$. [A4, A5, algebra]

1.4 If $S$ commutes with $T$ and $T^*$, then $S$ commutes with every $\ast$-polynomial in $T$, and hence with every element of $C^*(I,T)$ by continuity of multiplication. [A4, algebra]

2.1 Eigenvector identity: for eigenvectors $x$ of $T$ at $\lambda$ and $f$ continuous, approximate $f$ uniformly on $\sigma(T)$ by $\ast$-polynomials $q_n$; then $f(T)x=\lim q_n(T)x=\lim q_n(\lambda,\overline\lambda)x=f(\lambda)x$. [step 1.3, A1, A3]

2.2 Composition: since $f(T)$ is normal and $\sigma(f(T))=f(\sigma(T))$, choose $\ast$-polynomials $q_n$ converging uniformly to $h$ on $\sigma(f(T))$. Multiplicativity and conjugation give $q_n(f(T),f(T)^*)=(q_n(f,\overline f))(T)$. The left side converges to $h(f(T))$ by the isometry of the calculus for $f(T)$, while the right side converges to $(h\circ f)(T)$ because $q_n\circ f\to h\circ f$ uniformly on $\sigma(T)$. Thus $h(f(T))=(h\circ f)(T)$. [step 1.1, A1, A2, A3, algebra]

2.3 Commutant: since $f(T)\in C^*(I,T)$ and $S$ commutes with all of $C^*(I,T)$, $Sf(T)=f(T)S$. [step 1.4, A4]

3.1 The calculus therefore preserves sums, products, conjugation and positivity, is norm-continuous, obeys continuous composition $h(f(T))=(h\circ f)(T)$, sends eigenvectors at $\lambda$ to the scalar $f(\lambda)$, and commutes with every $S$ commuting with $T$ and $T^*$. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, A7] ∎
