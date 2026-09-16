---
id: thm-cartan-killing-classification-of-complex-simple-lie-algebras
kind: theorem
title: Cartan-Killing classification of complex simple Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-classification-of-irreducible-reduced-crystallographic-root-systems, thm-isomorphism-theorem-for-complex-semisimple-lie-algebras, thm-existence-theorem-for-complex-semisimple-lie-algebras, def-axiom-of-choice, prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §§10-11, the two-step passage (2.58) and its consequences, printed pp. 196-202"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. The finite-dimensional complex simple Lie
algebras are classified up to isomorphism by the connected Dynkin diagrams
$$A_n\ (n\ge1),\quad B_n\ (n\ge2),\quad C_n\ (n\ge3),\quad D_n\ (n\ge4), \quad E_6,\ E_7,\ E_8,\ F_4,\ G_2 .$$

## Facts & Assumptions

**Given:** A finite-dimensional complex simple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$, root system $\Phi$ and base $\Delta$; and the classification of irreducible reduced crystallographic root systems.

[A1] AC is assumed and is used through the isomorphism and existence theorems ([[def-axiom-of-choice]]).

[L1] The root system of $\mathfrak g$ is reduced and crystallographic, and $(\mathfrak g,\mathfrak h)$ determines a based root system; $\mathfrak g$ is simple if and only if $\Phi$ is irreducible ([[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram]]).

[L2] The irreducible reduced crystallographic root systems are exactly those of the listed types, with the standard low-rank identifications ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]).

[L3] Two finite-dimensional complex semisimple Lie algebras with isomorphic based root systems are isomorphic, and every reduced crystallographic root system is realized by a finite-dimensional complex semisimple algebra, simple when the system is irreducible ([[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]], [[thm-existence-theorem-for-complex-semisimple-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak g$ be finite-dimensional complex simple. Then its root system $\Phi$ is irreducible by [L1], so by [L2] its Dynkin diagram is one of the connected diagrams listed; the diagram is connected by [L1]. [L1, L2, algebra]

1.2 Uniqueness: if two complex simple Lie algebras have diagrams of the same type, their based root systems are isomorphic by [L2], so the algebras are isomorphic by [L3]. [L2, L3, algebra]

1.3 Existence: for each connected diagram of the list, take an irreducible reduced crystallographic root system of that type, which exists by [L2], and realize it by a finite-dimensional complex semisimple algebra, simple because the system is irreducible, by [L3]. [L2, L3, algebra]

2.1 Steps 1.1, 1.2 and 1.3 establish a bijection between isomorphism classes of finite-dimensional complex simple Lie algebras and the connected Dynkin diagrams listed, which is the Cartan-Killing classification. [step 1.1, step 1.2, step 1.3, A1, algebra] ∎
