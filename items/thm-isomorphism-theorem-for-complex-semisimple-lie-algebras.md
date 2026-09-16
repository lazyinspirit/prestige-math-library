---
id: thm-isomorphism-theorem-for-complex-semisimple-lie-algebras
kind: theorem
title: Isomorphism theorem for complex semisimple Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-serre-presentation-theorem, thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, def-axiom-of-choice, def-cartan-matrix-of-a-based-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §10, Theorem 2.108, printed pp. 196-198"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Two finite-dimensional complex semisimple Lie
algebras are isomorphic if their based root systems, equivalently their
Cartan matrices, are isomorphic.

## Facts & Assumptions

**Given:** Finite-dimensional complex semisimple Lie algebras $\mathfrak g,\mathfrak g'$ with Cartan subalgebras $\mathfrak h,\mathfrak h'$, root systems $\Phi,\Phi'$ and bases $\Delta,\Delta'$ whose Cartan matrices are equal, $A=A'$.

[A1] AC is assumed; it is used through the Serre presentation theorem and the root-system theorem ([[def-axiom-of-choice]]).

[L1] The root system of a complex semisimple Lie algebra is a reduced crystallographic root system, and the Cartan matrix of a base is $a_{ij}=\alpha_j(h_i)$ ([[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[def-cartan-matrix-of-a-based-root-system]]).

[L2] Every finite-dimensional complex semisimple Lie algebra with Cartan matrix $A$ is isomorphic to the Serre algebra $\mathfrak g(A)$ ([[thm-serre-presentation-theorem]]).

[L3] Two based root systems with equal Cartan matrices are isomorphic by the map carrying corresponding simple roots to one another ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]]).

## Proof

**Proof technique:** direct.

1.1 An isomorphism of based root systems of $\mathfrak g$ and $\mathfrak g'$ means that, after numbering the simple roots compatibly, the Cartan matrices agree, and conversely equality of the matrices gives a root-system isomorphism by [L3]; so the hypothesis is equivalent to $A=A'$ for suitable numberings. [L1, L3, algebra]

2.1 Choose root $\mathfrak{sl}_2$ triples $(e_i,f_i,h_i)$ and $(e_i',f_i',h_i')$ for the simple roots; by [L2] the assignments $e_i\mapsto e_i$, $f_i\mapsto f_i$, $h_i\mapsto h_i$ define isomorphisms $\mathfrak g(A)\to\mathfrak g$ and $\mathfrak g(A)\to\mathfrak g'$ because the relations depend only on $A=A'$. [L2, step 1.1, algebra]

3.1 Composing one isomorphism with the inverse of the other gives an isomorphism $\mathfrak g\to\mathfrak g'$. [step 2.1, A1, algebra] ∎
