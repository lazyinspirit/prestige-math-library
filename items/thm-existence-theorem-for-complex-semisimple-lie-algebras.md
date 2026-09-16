---
id: thm-existence-theorem-for-complex-semisimple-lie-algebras
kind: theorem
title: Existence theorem for complex semisimple Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-serre-presentation-theorem, prop-root-systems-decompose-uniquely-into-irreducible-components, thm-existence-of-each-classified-root-system, def-axiom-of-choice, def-reducible-and-irreducible-root-system]
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
---

## Statement

Assume the Axiom of Choice. Every reduced crystallographic root system
$\Phi$ is the root system of a finite-dimensional complex semisimple Lie
algebra; if $\Phi$ is irreducible, the algebra may be taken simple.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi$ with base $\Delta$ and irreducible decomposition $\Phi=\Phi_1\sqcup\cdots\sqcup\Phi_m$ spanning orthogonal subspaces.

[A1] AC is assumed and is used through the Serre presentation theorem ([[def-axiom-of-choice]]).

[L1] The irreducible components $\Phi_j$ are reduced crystallographic root systems with pairwise orthogonal spans whose sum is the ambient space; the decomposition is unique ([[prop-root-systems-decompose-uniquely-into-irreducible-components]], [[def-reducible-and-irreducible-root-system]]).

[L2] For a finite-type Cartan matrix $A$ the Serre algebra $\mathfrak g(A)$ is finite-dimensional and semisimple, with Cartan matrix $A$ and root system $\Phi(A)$; if $A$ is irreducible, $\mathfrak g(A)$ is simple ([[thm-serre-presentation-theorem]]).

[L3] For every type occurring as an irreducible component there is a reduced crystallographic root system with that Cartan matrix ([[thm-existence-of-each-classified-root-system]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] write the base $\Delta$ as the disjoint union of the bases $\Delta_j$ of the components, with Cartan matrices $A_j$; the Cartan matrix of $\Phi$ is the block diagonal matrix $\operatorname{diag}(A_1,\dots,A_m)$. [L1, algebra]

1.2 For each $j$ the Serre algebra $\mathfrak g(A_j)$ is finite-dimensional semisimple with root system $\Phi_j$ by [L2], and the direct sum $\mathfrak g=\bigoplus_j\mathfrak g(A_j)$ is a finite-dimensional complex semisimple Lie algebra whose Cartan subalgebra is the direct sum of the Cartan subalgebras and whose root system is the orthogonal disjoint union $\Phi_1\sqcup\cdots\sqcup\Phi_m=\Phi$. If $\Phi$ is irreducible, $m=1$ and $\mathfrak g(A_1)$ is simple. [L1, L2, algebra]

2.1 step 1.2 assigns to every reduced crystallographic root system $\Phi$ a finite-dimensional complex semisimple Lie algebra with that root system, and a simple algebra when $\Phi$ is irreducible; no component is left unrealized because every component's Cartan matrix is a finite-type Cartan matrix of a classified type by the classification theorem. [step 1.2, L3, A1, algebra] ∎
