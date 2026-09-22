---
id: thm-bounded-normal-operator-abstract-spectral-theorem
kind: theorem
title: Bounded normal operator abstract spectral theorem
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-for-bounded-normal-operators, def-axiom-of-choice, def-c-star-algebra, def-self-adjoint-positive-unitary-and-normal-operator, def-spectrum-and-resolvent-of-a-bounded-operator, lem-bounded-hilbert-operators-form-a-c-star-algebra, thm-bounded-inverse-theorem, thm-spectrum-is-nonempty-compact-and-norm-bounded]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.70, printed pp.268–273"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Example 4.9, pp.13–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. A bounded operator $T$ on a nonzero complex Hilbert space is normal exactly when it is the image of the coordinate function $z\mapsto z$ under a unital star representation of $C(K)$ for some nonempty compact set $K\subseteq\mathbb C$; canonically $K=\sigma(T)$ and the representation is the continuous functional calculus.

## Facts & Assumptions

[A1] A unital star-homomorphism, or representation, $\rho:C(K)\to\mathcal B(H)$ is a unital complex-linear multiplicative map with $\rho(\overline f)=\rho(f)^*$ ([[def-c-star-algebra]]).

[A2] For bounded $T$ one has $T^*T=TT^*$ exactly when $T$ is normal, and the coordinate function $z$ and its conjugate generate the unital $\ast$-algebra of functions $q(z,\overline z)$ ([[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-c-star-algebra]]).

[A3] For normal $T$ the continuous functional calculus is a unital isometric star-isomorphism $C(\sigma(T))\to C^*(I,T)$ with $z\mapsto T$ ([[thm-continuous-functional-calculus-for-bounded-normal-operators]]).

[A4] For every bounded $T$ the spectrum is a nonempty compact subset of $\mathbb C$: $\mathcal B(H)$ is a nonzero unital complex Banach algebra, its algebra spectrum agrees with the operator spectrum by the bounded inverse theorem, and spectra in nonzero unital complex Banach algebras are nonempty and compact ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]], [[thm-bounded-inverse-theorem]], [[thm-spectrum-is-nonempty-compact-and-norm-bounded]]).

[A5] AC is the hypothesis of the calculus supplier ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded operator $T\in\mathcal B(H)$.

1.1 Suppose $K\subseteq\mathbb C$ is nonempty and compact and $T=\rho(z)$ for a unital star-homomorphism $\rho:C(K)\to\mathcal B(H)$, where $z$ is the coordinate function; then $T^*=\rho(z)^*=\rho(\overline z)$ and $T^*T=\rho(\overline z)\rho(z)=\rho(\overline zz)=\rho(z\overline z)=\rho(z)\rho(\overline z)=TT^*$, so $T$ is normal. [A1, A2]

1.2 Conversely, if $T$ is normal, take $K:=\sigma(T)$, a nonempty compact Hausdorff space, and the continuous functional calculus $\Psi:C(\sigma(T))\to C^*(I,T)$; it is a unital star-homomorphism into $\mathcal B(H)$ with $\Psi(z)=T$. [A3, A4]

2.1 The two implications show that normality is equivalent to being the image of the coordinate function under a unital star representation of some $C(K)$ with nonempty compact $K\subseteq\mathbb C$; the canonical instance is $K=\sigma(T)$ with the continuous functional calculus, and no other compact set is needed for the equivalence. [step 1.1, step 1.2, A5] ∎
