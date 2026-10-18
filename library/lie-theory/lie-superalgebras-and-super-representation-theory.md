---
page: lie-superalgebras-and-super-representation-theory
title: "Lie Superalgebras and Super-Representations"
status: draft
items:
  - def-associative-superalgebra-over-complex-numbers
  - def-lie-superalgebra-over-complex-numbers
  - def-complexified-four-dimensional-n1-super-poincare-bracket-data
  - def-gl-1-1-bracket-data
  - def-lie-supermodule
  - def-triangular-decomposition-of-a-lie-superalgebra
  - lem-ideal-generated-by-homogeneous-elements-is-graded
  - lem-odd-self-jacobi-in-characteristic-zero
  - def-highest-weight-vector-and-module-for-a-lie-superalgebra
  - def-simple-and-semisimple-lie-supermodules
  - def-universal-enveloping-superalgebra
  - thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi
  - thm-gl-1-1-is-a-lie-superalgebra
  - def-two-dimensional-highest-weight-module-for-gl-1-1
  - thm-super-poincare-birkhoff-witt-ordered-monomial-basis
  - thm-universal-property-of-the-enveloping-superalgebra
  - thm-supermodules-equivalent-to-graded-u-modules
  - thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined
  - def-typicality-for-gl-1-1-highest-weights
examples: []
---

This page develops a characteristic-zero, complex Lie-superalgebra route with an explicit sign convention. Every super-PBW and model-specific claim below has its own local proof. Ordinary Lie-algebra results serve only as context unless an item states and verifies the exact interface it uses.

Companion examples: [[lie-superalgebras-and-super-representation-theory-examples]].

## Conventions and scope

A complex Lie superalgebra is a parity-graded vector space with graded skew symmetry and the signed Jacobi identity. Odd brackets are symmetric; for an odd element $x$, the relation in the enveloping superalgebra is $x^2=[x,x]/2$. The local definition lists odd self-Jacobi explicitly, and a separate characteristic-zero lemma proves it follows from signed Jacobi. Positive-characteristic generalizations are not claimed.

The super-PBW proof uses a supplied ordered homogeneous basis and makes no basis-selection or choice step. It proves the normal forms directly from the signed relations. The ordinary PBW theorem [[thm-poincare-birkhoff-witt]] is not used to infer this result.

## Algebra and module route

1. [[def-lie-superalgebra-over-complex-numbers]] fixes the complex grading, parity, bracket signs, and odd self-Jacobi convention.
2. [[def-associative-superalgebra-over-complex-numbers]] defines the graded associative target and its supercommutator.
3. [[def-universal-enveloping-superalgebra]] gives $U(\mathfrak g)=T(\mathfrak g)/I$, with the signed bracket relations. [[lem-ideal-generated-by-homogeneous-elements-is-graded]] proves that the homogeneous relation ideal gives the quotient its supergrading; [[thm-universal-property-of-the-enveloping-superalgebra]] proves its mapping property.
4. [[thm-super-poincare-birkhoff-witt-ordered-monomial-basis]] proves ordered even powers and distinct ordered odd generators form a basis, using an explicit terminating and confluent reduction argument.
5. [[def-lie-supermodule]] uses parity-preserving actions and even morphisms. [[thm-supermodules-equivalent-to-graded-u-modules]] proves the correspondence with graded left $U(\mathfrak g)$-modules.

The universal-property square is included as notation only; the proof is the item proof and does not rely on the diagram.

```tikzcd
\begin{tikzcd}
\mathfrak g \arrow[r,"\iota_{\mathfrak g}"] \arrow[dr,"\phi"'] & U(\mathfrak g) \arrow[d,"\widehat\phi"] \\
& A
\end{tikzcd}
```

Here $\iota_{\mathfrak g}$ is induced by the degree-one inclusion $\mathfrak g\to T(\mathfrak g)$ followed by the quotient $T(\mathfrak g)\to U(\mathfrak g)$. The map $\phi:\mathfrak g\to A$ preserves parity and brackets when $A$ uses its supercommutator, and $\widehat\phi$ is the unique graded associative-algebra map extending it.

## Highest weights and model calculations

[[def-triangular-decomposition-of-a-lie-superalgebra]] states only the graded subalgebra and direct-sum conditions. [[def-highest-weight-vector-and-module-for-a-lie-superalgebra]] defines highest-weight vectors relative to that chosen datum; it makes no finite-dimensional classification claim. [[def-simple-and-semisimple-lie-supermodules]] fixes simplicity in the graded category and does not assert that finite-dimensional categories are semisimple.

For the fixed $\mathfrak{gl}(1|1)$ bracket table, [[thm-gl-1-1-is-a-lie-superalgebra]] verifies the Lie-superalgebra and triangular-decomposition axioms. The two-dimensional family is defined in [[def-two-dimensional-highest-weight-module-for-gl-1-1]] and its action is checked in [[thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined]]. Typicality is defined only for this family and positive odd root in [[def-typicality-for-gl-1-1-highest-weights]]; it is not a criterion for other root data.

The N=1 items give complexified spinor-form bracket data in [[def-complexified-four-dimensional-n1-super-poincare-bracket-data]] and prove Jacobi in [[thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi]]. They establish an algebraic bracket, not a real form, unitary representation, field realization, spin-statistics theorem, or off-shell closure result.

## Reading and source boundaries

The signed definitions and module conventions follow the full relevant sections of Barbier, *A minimal representation for the orthosymplectic Lie-superalgebra*, §§2.1–2.6, and Caston–Fioresi, *Mathematical Foundations of Supersymmetry*, §§1.1–1.3. The super-PBW statement is also recorded by Barbier, Theorem 2.6.4; that source refers elsewhere for its proof, so the proof here is supplied locally. Serganova’s §§2, 10, and 13 treat triangular/highest-weight and typicality conventions only for specified superalgebra/root data. The N=1 signs and brackets are cross-checked against Figueroa-O’Farrill, *BUSSTEPP Lectures on Supersymmetry*, §I.3 and Appendix A.2–A.3; its Wess–Zumino field example is on-shell and is not generalized here.

