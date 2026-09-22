---
id: thm-isomorphism-theorem-for-complex-semisimple-lie-algebras
kind: theorem
title: Isomorphism theorem for complex semisimple Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-sl-two-triple, thm-serre-presentation-theorem, thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, def-axiom-of-choice, def-cartan-matrix-of-a-based-root-system]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Two finite-dimensional complex semisimple Lie
algebras are isomorphic if their based root systems, equivalently their
Cartan matrices, are isomorphic.

## Facts & Assumptions

**Given:** Finite-dimensional complex semisimple Lie algebras $\mathfrak g,\mathfrak g'$ with Cartan subalgebras $\mathfrak h,\mathfrak h'$, root systems $\Phi,\Phi'$ and bases $\Delta,\Delta'$ whose Cartan matrices are equal, $A=A'$.

[A1] AC is assumed; it is used through the Serre presentation theorem and the root-system theorem ([[def-axiom-of-choice]]).

[L1] The root system of a complex semisimple Lie algebra is a reduced crystallographic root system, and the Cartan matrix of a base is $a_{ij}=\alpha_j(h_i)$ ([[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[def-cartan-matrix-of-a-based-root-system]]).

[L2] Every root $\alpha$ admits elements $e_\alpha\in\mathfrak g_\alpha$ and $f_\alpha\in\mathfrak g_{-\alpha}$ such that $(e_\alpha,f_\alpha,h_\alpha)$ is a root $\mathfrak{sl}_2$ triple ([[thm-root-sl-two-triple]]).

[L3] Once root $\mathfrak{sl}_2$ triples have been chosen for the simple roots, every finite-dimensional complex semisimple Lie algebra with Cartan matrix $A$ is isomorphic to the Serre algebra $\mathfrak g(A)$ via its canonical generators ([[thm-serre-presentation-theorem]]).

[L4] Two based root systems with equal Cartan matrices are isomorphic by the map carrying corresponding simple roots to one another ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]]).

## Proof

**Proof technique:** direct.

1.1 An isomorphism of based root systems of $\mathfrak g$ and $\mathfrak g'$ means that, after numbering the simple roots compatibly, the Cartan matrices agree, and conversely equality of the matrices gives a root-system isomorphism by [L4]; so the hypothesis is equivalent to $A=A'$ for suitable numberings. [L1, L4, algebra]

2.1 By [L2], choose root $\mathfrak{sl}_2$ triples $(e_i,f_i,h_i)$ and $(e_i',f_i',h_i')$ for every simple root in the two algebras. Let $E_i,F_i,H_i$ denote the canonical generators of $\mathfrak g(A)$. By [L3], the assignments $(E_i,F_i,H_i)\mapsto(e_i,f_i,h_i)$ and $(E_i,F_i,H_i)\mapsto(e_i',f_i',h_i')$ define isomorphisms $\mathfrak g(A)\to\mathfrak g$ and $\mathfrak g(A)\to\mathfrak g'$, because both chosen families satisfy the presentation for the common matrix $A=A'$. [L2, L3, step 1.1, algebra]

3.1 Composing one isomorphism with the inverse of the other gives an isomorphism $\mathfrak g\to\mathfrak g'$. [step 2.1, A1, algebra] ∎
