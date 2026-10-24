---
id: thm-existence-theorem-for-complex-semisimple-lie-algebras
kind: theorem
title: Existence theorem for complex semisimple Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-serre-presentation-theorem, prop-root-systems-decompose-uniquely-into-irreducible-components, def-positive-system-and-base-of-simple-roots, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix, def-simple-semisimple-and-reductive-lie-algebras, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §11, the Existence Theorem and its proof, printed pp. 199-202"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. For every reduced crystallographic root system
$\Phi$ there are a finite-dimensional complex semisimple Lie algebra
$\mathfrak g$, a Cartan subalgebra of $\mathfrak g$, and an isomorphism from
$\Phi$ onto the resulting root system. If $\Phi$ is nonempty and
irreducible, $\mathfrak g$ may be taken simple. For the empty root system,
$\mathfrak g$ may be taken to be the zero Lie algebra.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$.

[A1] AC is assumed and is used through the Serre presentation theorem ([[def-axiom-of-choice]]).

[L1] The irreducible components $\Phi_j$ are reduced crystallographic root systems with pairwise orthogonal spans whose sum is the ambient space; the decomposition is unique ([[prop-root-systems-decompose-uniquely-into-irreducible-components]]).

[L2] A regular vector determines a positive system and its simple roots; those simple roots form a basis, and every root has integral coordinates of one sign in that basis ([[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L3] For a finite-type Cartan matrix $A$ the Serre algebra $\mathfrak g(A)$ is finite-dimensional and semisimple, with Cartan matrix $A$ and root system $\Phi(A)$. If $A$ is the Cartan matrix of an irreducible component of a reduced crystallographic root system, then $\mathfrak g(A)$ is simple ([[thm-serre-presentation-theorem]]).

[L4] Two based reduced crystallographic root systems with the same Cartan matrix are isomorphic by the linear map that matches their ordered bases ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]]).

[L5] The zero Lie algebra is semisimple but not simple ([[def-simple-semisimple-and-reductive-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 If $\Phi=\varnothing$, then its ambient space is zero because $\Phi$ spans it. Taking $\mathfrak g=0$ gives the empty root system and a semisimple algebra by [L5], proving the empty case. Henceforth suppose $\Phi\ne\varnothing$. [L5, algebra]

1.2 Choose a regular vector and the resulting base $\Delta$ by [L2]. By [L1], write $\Phi=\Phi_1\sqcup\cdots\sqcup\Phi_m$. The restriction of the regular vector to $E_j=\operatorname{span}\Phi_j$ is regular for $\Phi_j$, and positivity is tested componentwise, so $\Delta$ is the disjoint union of the bases $\Delta_j=\Delta\cap\Phi_j$. Let $A_j$ be the Cartan matrix of $(\Phi_j,\Delta_j)$; the Cartan matrix of $\Phi$ is the block diagonal matrix $\operatorname{diag}(A_1,\dots,A_m)$. [L1, L2, algebra]

1.3 For each $j$, [L3] gives a finite-dimensional semisimple Serre algebra $\mathfrak g(A_j)$ with based root system $\Psi_j$ having Cartan matrix $A_j$. By [L4], the base-matching map is a root-system isomorphism $\varphi_j:\Phi_j\to\Psi_j$. Since $A_j$ is the Cartan matrix of the irreducible component $\Phi_j$, [L3] also makes $\mathfrak g(A_j)$ simple. [L1, L3, L4, algebra]

2.1 Put $\mathfrak g=\bigoplus_{j=1}^{m}\mathfrak g(A_j)$ and take the direct sum of the Cartan subalgebras supplied by [L3]. Brackets between distinct summands vanish, so the roots of $\mathfrak g$ are exactly the roots of the summands, extended by zero on the other Cartan summands; hence its root system is the orthogonal disjoint union $\Psi_1\sqcup\cdots\sqcup\Psi_m$. The disjoint union of the maps $\varphi_j$ from step 1.3 is therefore an isomorphism from $\Phi$ onto this root system. The direct sum is finite-dimensional and semisimple, and if $\Phi$ is irreducible then $m=1$ and $\mathfrak g=\mathfrak g(A_1)$ is simple. [L1, L3, step 1.3, algebra, A1] ∎
