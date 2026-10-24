---
id: prop-dimensions-of-the-exceptional-simple-lie-algebras
kind: proposition
title: Dimensions of exceptional simple Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-dimension-formula-from-roots, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, def-rank-and-isomorphism-of-root-systems, thm-cartan-killing-classification-of-complex-simple-lie-algebras, thm-existence-theorem-for-complex-semisimple-lie-algebras, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Example 21.9 for G_2; Lecture 23, Definitions 23.8, 23.11, 23.14, 23.15 for F_4,E_8,E_7,E_6"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Problem 16, printed p. 205"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. The dimensions of the complex simple Lie algebras
of types $G_2,F_4,E_6,E_7,E_8$ are respectively $14,52,78,133,248$.

## Facts & Assumptions

**Given:** The explicit reduced crystallographic root systems of types $G_2,F_4,E_6,E_7,E_8$ described in the cited source.

[A1] AC is assumed and is used through the existence and classification theorems ([[def-axiom-of-choice]]).

[L1] In the explicit models of the cited source, $G_2$ has the twelve roots
listed in Example 21.9 and rank $2$; Definitions 23.8, 23.11, 23.14 and 23.15
give respectively $48,240,126,72$ roots for $F_4,E_8,E_7,E_6$, whose ranks
are respectively $4,8,7,6$.

[L2] For a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Cartan subalgebra $\mathfrak h$ and root system $\Phi$ one has $\dim\mathfrak g=\dim\mathfrak h+|\Phi|$. Moreover the real root span is identified with the real dual of a real form of $\mathfrak h$, so $\dim_{\mathbb C}\mathfrak h=\dim_{\mathbb R}\operatorname{span}_{\mathbb R}\Phi=\operatorname{rank}\Phi$ ([[prop-dimension-formula-from-roots]], [[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[def-rank-and-isomorphism-of-root-systems]]).

[L3] Every reduced crystallographic root system is the root system of a finite-dimensional complex simple Lie algebra when irreducible, and the type determines the isomorphism class ([[thm-existence-theorem-for-complex-semisimple-lie-algebras]], [[thm-cartan-killing-classification-of-complex-simple-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 For each of the five irreducible root systems, let $\mathfrak g$ be the corresponding finite-dimensional complex simple Lie algebra, which exists by [L3]. The root-system isomorphism in [L3] preserves the real ambient dimension by the definition of isomorphism, and [L2] identifies that rank with the complex dimension of a Cartan subalgebra. Therefore $\dim\mathfrak g=\operatorname{rank}\Phi+|\Phi|$. [L1, L2, L3, algebra]

2.1 Substituting the counts of [L1] gives $\dim\mathfrak g(G_2)=2+12=14$, $\dim\mathfrak g(F_4)=4+48=52$, $\dim\mathfrak g(E_6)=6+72=78$, $\dim\mathfrak g(E_7)=7+126=133$ and $\dim\mathfrak g(E_8)=8+240=248$, as asserted. [L1, step 1.1, algebra, A1] ∎
