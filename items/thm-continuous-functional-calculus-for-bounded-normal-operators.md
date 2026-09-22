---
id: thm-continuous-functional-calculus-for-bounded-normal-operators
kind: theorem
title: Continuous functional calculus for bounded normal operators
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-character-space-of-generated-normal-algebra-is-operator-spectrum, thm-maximal-ideal-space-is-compact-hausdorff, thm-commutative-gelfand-naimark, def-axiom-of-choice, def-c-star-algebra-generated-by-a-normal-operator, thm-complex-stone-weierstrass-self-adjoint, thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, def-self-adjoint-positive-unitary-and-normal-operator, def-c-star-algebra]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. For a bounded normal operator $T$ on a nonzero complex Hilbert space there is a unique isometric unital star-isomorphism $C(\sigma(T))\to C^*(I,T)$, $f\mapsto f(T)$, sending the coordinate function $z$ to $T$; for self-adjoint $T$ it agrees with the self-adjoint calculus.

## Facts & Assumptions

[A1] For normal $T$ the nonzero unital commutative C\*-algebra $C^*(I,T)$ has a nonempty compact Hausdorff character space, and the map $\Phi:\Delta(C^*(I,T))\to\sigma(T)$, $\chi\mapsto\chi(T)$, is a homeomorphism onto the therefore nonempty compact spectrum; pullback $f\mapsto f\circ\Phi$ is consequently an isometric bijection $C(\sigma(T))\to C(\Delta(C^*(I,T)))$ preserving pointwise sums, products and conjugation ([[thm-maximal-ideal-space-is-compact-hausdorff]], [[lem-character-space-of-generated-normal-algebra-is-operator-spectrum]], [[def-c-star-algebra]]).

[A2] For a nonzero unital commutative complex C\*-algebra $C$ the Gelfand transform $\Gamma:C\to C(\Delta(C))$ is an isometric unital $\ast$-isomorphism onto $C(\Delta(C))$, so its inverse has the same properties ([[thm-commutative-gelfand-naimark]]).

[A3] For normal $T$ the generated algebra $C^*(I,T)$ is a nonzero unital commutative C\*-algebra with the same identity as $\mathcal B(H)$ ([[def-c-star-algebra-generated-by-a-normal-operator]]).

[A4] Every unital point-separating self-adjoint complex function algebra on a nonempty compact Hausdorff space is uniformly dense in the continuous functions; applied to $\sigma(T)\subseteq\mathbb C$ this makes the $\ast$-polynomials in $z$ and $\overline z$ uniformly dense in $C(\sigma(T))$ ([[thm-complex-stone-weierstrass-self-adjoint]]).

[A5] For self-adjoint $T$ there is a unique isometric unital star-homomorphism $C(\sigma(T))\to\mathcal B(H)$ with $z\mapsto T$ and range $C^*(I,T)$ ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]]).

[A6] Every self-adjoint operator is normal ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A7] AC is the hypothesis of the Gelfand and character-space suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal operator $T\in\mathcal B(H)$, with $\Delta:=\Delta(C^*(I,T))$ and $\Phi(\chi)=\chi(T)$.

1.1 The algebra $C^*(I,T)$ is a nonzero unital commutative C\*-algebra with the same identity as $\mathcal B(H)$, its character space $\Delta$ is nonempty compact Hausdorff, $\Phi:\Delta\to\sigma(T)$ is a homeomorphism, and the pullback map $U(f):=f\circ\Phi$ is an isometric bijection $C(\sigma(T))\to C(\Delta)$ that preserves pointwise sums, products and conjugation. [A1, A3]

1.2 The inverse Gelfand transform $\Gamma^{-1}:C(\Delta)\to C^*(I,T)$ is an isometric unital $\ast$-isomorphism onto $C^*(I,T)$. [A2]

2.1 The composite $\Psi:=\Gamma^{-1}\circ U:C(\sigma(T))\to C^*(I,T)$ is an isometric unital $\ast$-isomorphism onto $C^*(I,T)$, and $\Psi(z)=\Gamma^{-1}(\widehat T)=T$ because the Gelfand transform of $T$ is $\widehat T(\chi)=\chi(T)=\Phi(\chi)=z(\Phi(\chi))=(z\circ\Phi)(\chi)$. [step 1.1, step 1.2, algebra]

3.1 $\Psi$ is the only isometric unital $\ast$-isomorphism $C(\sigma(T))\to C^*(I,T)$ with $z\mapsto T$: if $\Xi$ is another, then $\Xi^{-1}\circ\Psi$ is a unital $\ast$-isomorphism of $C(\sigma(T))$ fixing $z$ and $\overline z$, hence fixing every $\ast$-polynomial in $z$; these are uniformly dense by Stone–Weierstrass and the map is isometric, so it is the identity on $C(\sigma(T))$ and $\Xi=\Psi$. [step 2.1, A4, A7, algebra]

4.1 For self-adjoint $T$ the self-adjoint calculus of [A5] is an isometric unital star-homomorphism $C(\sigma(T))\to\mathcal B(H)$ with $z\mapsto T$ and range $C^*(I,T)$; regarded as a map onto $C^*(I,T)$ it is an isometric unital $\ast$-isomorphism, so step 3.1 identifies it with $\Psi$. [step 2.1, step 3.1, A5, A6]

5.1 The map $f\mapsto f(T):=\Psi(f)$ is therefore the unique isometric unital star-isomorphism $C(\sigma(T))\to C^*(I,T)$ sending $z$ to $T$, and it agrees with the self-adjoint calculus when $T$ is self-adjoint. [step 2.1, step 3.1, step 4.1] ∎
