---
id: prop-classical-types-correspond-to-sl-so-and-sp
kind: proposition
title: Classical types correspond to sl, so and sp
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-killing-classification-of-complex-simple-lie-algebras, thm-existence-of-each-classified-root-system, prop-root-systems-of-the-classical-complex-lie-algebras, thm-isomorphism-theorem-for-complex-semisimple-lie-algebras, def-axiom-of-choice, ex-classical-simple-lie-algebras-and-their-killing-forms]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20.3, Examples 20.12-20.14, printed pp. 110-111; Lecture 21, Example 21.18"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and (2.50), printed pp. 150 and 155"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. The simple Lie algebras of types $A_n$, $B_n$,
$C_n$, $D_n$ are $\mathfrak{sl}_{n+1}(\mathbb C)$,
$\mathfrak{so}_{2n+1}(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$,
$\mathfrak{so}_{2n}(\mathbb C)$ respectively, subject to the low-rank
coincidences: $\mathfrak{so}_3\cong\mathfrak{sl}_2$ and
$\mathfrak{sp}_2\cong\mathfrak{sl}_2$, $\mathfrak{sp}_4\cong\mathfrak{so}_5$,
$\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$, and
$\mathfrak{so}_6\cong\mathfrak{sl}_4$.

## Facts & Assumptions

**Given:** The classical matrix Lie algebras and their diagonal Cartan subalgebras, with the root systems computed in [[prop-root-systems-of-the-classical-complex-lie-algebras]].

[A1] AC is assumed and is used through the isomorphism theorem ([[def-axiom-of-choice]]).

[L1] The root systems of $\mathfrak{sl}_n,\mathfrak{sp}_{2n},\mathfrak{so}_{2n},\mathfrak{so}_{2n+1}$ with respect to the diagonal Cartan subalgebra are the standard coordinate models of types $A_{n-1},C_n,D_n,B_n$, with one-dimensional root spaces ([[prop-root-systems-of-the-classical-complex-lie-algebras]]).

[L2] The classical matrix Lie algebras are semisimple in the indicated ranges: their Killing forms are the nonzero multiples $2n\operatorname{tr}(XY)$, $(n-2)\operatorname{tr}(XY)$ and $2(n+1)\operatorname{tr}(XY)$ of the trace form and are nondegenerate ([[ex-classical-simple-lie-algebras-and-their-killing-forms]]).

[L3] A finite-dimensional complex semisimple Lie algebra is determined up to isomorphism by its based root system, and the Cartan-Killing classification attaches the types to the connected diagrams ([[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]], [[thm-cartan-killing-classification-of-complex-simple-lie-algebras]], [[thm-existence-of-each-classified-root-system]]).

## Proof

**Proof technique:** direct.

1.1 The classical algebra $\mathfrak{sl}_{n+1}(\mathbb C)$ has root system of type $A_n$, $\mathfrak{sp}_{2n}(\mathbb C)$ of type $C_n$, $\mathfrak{so}_{2n+1}(\mathbb C)$ of type $B_n$ and $\mathfrak{so}_{2n}(\mathbb C)$ of type $D_n$, by [L1]; these algebras are semisimple in the relevant ranges by [L2], and their root systems are irreducible (the diagrams are connected), so they are simple by the classification. [L1, L2, L3, algebra]

2.1 For each type, the simple complex Lie algebra with that root system is unique up to isomorphism by [L3]; hence the classical algebra of that type is isomorphic to the abstract simple Lie algebra of the same type: $\mathfrak{sl}_{n+1}(\mathbb C)$ realizes $A_n$, $\mathfrak{so}_{2n+1}(\mathbb C)$ realizes $B_n$, $\mathfrak{sp}_{2n}(\mathbb C)$ realizes $C_n$, and $\mathfrak{so}_{2n}(\mathbb C)$ realizes $D_n$. [L3, step 1.1, algebra]

3.1 The low-rank coincidences are exactly the isomorphisms between the corresponding Dynkin diagrams: $A_1=B_1=C_1$ gives $\mathfrak{sl}_2\cong\mathfrak{so}_3\cong\mathfrak{sp}_2$; $B_2=C_2$ gives $\mathfrak{so}_5\cong\mathfrak{sp}_4$; $D_2=A_1\sqcup A_1$ gives $\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$; and $D_3=A_3$ gives $\mathfrak{so}_6\cong\mathfrak{sl}_4$. These are the only identifications among the four families in the stated ranges, by the classification list. [L3, step 2.1, A1, algebra] ∎
