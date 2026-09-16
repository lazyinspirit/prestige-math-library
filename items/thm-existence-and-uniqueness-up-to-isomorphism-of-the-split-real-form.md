---
id: thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form
kind: theorem
title: Existence and uniqueness up to isomorphism of the split real form
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-split-real-form, thm-serre-presentation-theorem, thm-isomorphism-theorem-for-complex-semisimple-lie-algebras, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §5, and Chapter II, §11 Existence Theorem, printed pp. 199-202 and 375-380"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, Theorem 39.6, printed pp. 199-202"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ has a split real form
([[def-split-real-form]]), and it is unique up to isomorphism of real Lie
algebras.

## Facts & Assumptions

**Given:** The Axiom of Choice and a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with a Cartan subalgebra $\mathfrak h$ and base $\Delta=\{\alpha_1,\dots,\alpha_r\}$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the Serre presentation and the root data of [L1] and [L2].

[L1] The Serre presentation realizes $\mathfrak g$ from generators $e_i,f_i,h_i$, $i=1,\dots,r$, with relations determined by the Cartan matrix $A=(a_{ij})$, where $a_{ij}=\alpha_j(h_i)$ are integers, together with the Chevalley relations $[e_i,f_j]=\delta_{ij}h_i$ and string relations whose structure constants are integers ([[thm-serre-presentation-theorem]]).

[L2] Two finite-dimensional complex semisimple Lie algebras with isomorphic based root systems, equivalently equal Cartan matrices, are isomorphic ([[thm-isomorphism-theorem-for-complex-semisimple-lie-algebras]]).

[L3] A split real form of $\mathfrak g$ is a real form containing a Cartan subalgebra $\mathfrak h_0$ on which all adjoint operators are diagonalizable over $\mathbb R$ ([[def-split-real-form]], [[def-cartan-subalgebra-of-a-lie-algebra]]).



**Proof technique:** direct.

1.1 Define $\mathfrak g_0$ as the real span of the generators $e_i,f_i,h_i$, $i=1,\dots,r$, inside $\mathfrak g$. The relations of [L1] have integral, in particular real, structure constants, so the real span is closed under the bracket and is a real Lie subalgebra of the realification of $\mathfrak g$; its complex span is $\mathfrak g$ because the generators are a spanning set over $\mathbb C$ by [L1]. [L1, algebra]

1.2 Conversely let $\mathfrak g_1$ be a split real form of $\mathfrak g$ with split Cartan subalgebra $\mathfrak h_1$. Complexifying, $\mathfrak h_1^{\mathbb C}$ is a Cartan subalgebra of $\mathfrak g$ on which all adjoint operators are diagonalizable over $\mathbb C$, so it is a Cartan subalgebra in the complex sense; the root system of $(\mathfrak g,\mathfrak h_1^{\mathbb C})$ is a reduced crystallographic root system with a base whose Cartan matrix is isomorphic to that of $(\mathfrak g,\mathfrak h)$. [L2, L3, algebra]

2.1 The subalgebra $\mathfrak h_0=\sum_i\mathbb Rh_i$ is a Cartan subalgebra of $\mathfrak g_0$ and the adjoint action of $\mathfrak h_0$ is diagonalizable over $\mathbb R$: the bracket relations $[h_i,e_j]=a_{ij}e_j$ and $[h_i,f_j]=-a_{ij}f_j$ with $a_{ij}\in\mathbb Z$ exhibit a basis of $\mathfrak g_0$ consisting of eigenvectors with real eigenvalues; the normalizer of $\mathfrak h_0$ in $\mathfrak g_0$ equals $\mathfrak h_0$ because that is already true for $\mathfrak h$ in $\mathfrak g$ and $\mathfrak g_0$ is a real form. Hence $\mathfrak g_0$ is a split real form of $\mathfrak g$. [L1, L3, step 1.1, algebra]

2.2 The real root vectors of $\mathfrak g_1$ give, after normalizing, elements $e_i',f_i',h_i'$ of $\mathfrak g_1$ satisfying the same integral relations of the Serre presentation for the Cartan matrix $A$: the split condition provides real root spaces and real brackets, and the standard normalization of the $\mathfrak{sl}_2$-triples in each real root space makes the structure constants integers, exactly the Serre relations of [L1]. [L1, L3, step 1.2, algebra]

3.1 Hence there is a real Lie-algebra isomorphism $\mathfrak g_0\to\mathfrak g_1$ carrying $e_i,f_i,h_i$ to $e_i',f_i',h_i'$, since the generators and relations presentation is a universal construction: a map of generators respecting all relations extends to a Lie-algebra homomorphism, and the same argument in the reverse direction gives a two-sided inverse. Thus any two split real forms are isomorphic. [L1, step 1.1, step 2.2, algebra]

4.1 Existence is step 2.1 and uniqueness up to real isomorphism is step 3.1, so the theorem follows. [step 2.1, step 3.1, A1] ∎

1 checked, 1 failing
