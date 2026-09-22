---
id: thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra
kind: theorem
title: Root-space decomposition
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-and-root-space-relative-to-a-cartan-subalgebra, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-toral-and-maximal-toral-subalgebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Proposition 19.11"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra, let $\mathfrak h$ be a Cartan subalgebra, and let
$\Phi=\Phi(\mathfrak g,\mathfrak h)$ be the set of roots of
[[def-root-and-root-space-relative-to-a-cartan-subalgebra]]. Then $\Phi$ is
finite and
$$\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$$
is a direct sum of $\mathfrak h$ with the nonzero root spaces.

## Facts & Assumptions

**Given:** The Axiom of Choice, such a Lie algebra $\mathfrak g$, and a Cartan subalgebra $\mathfrak h$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited here through [L1].

[L1] Cartan subalgebras of $\mathfrak g$ are exactly the maximal toral subalgebras; a Cartan subalgebra is nilpotent and equals its normalizer ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]], [[def-toral-and-maximal-toral-subalgebra]]).

[L2] A pairwise commuting family of diagonalisable endomorphisms of a finite-dimensional vector space is simultaneously diagonalisable ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L3] For $\alpha\in\mathfrak h^*$, the root space is $\mathfrak g_\alpha=\{x:[H,x]=\alpha(H)x\text{ for all }H\in\mathfrak h\}$, and a root is a nonzero $\alpha$ with $\mathfrak g_\alpha\ne0$ ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the subalgebra $\mathfrak h$ is abelian and $\operatorname{ad}_H$ is semisimple for every $H\in\mathfrak h$; the family $\{\operatorname{ad}_H\}_{H\in\mathfrak h}$ is therefore pairwise commuting and [L2] makes it simultaneously diagonalisable. Hence $\mathfrak g=\bigoplus_{\alpha\in\mathfrak h^*}\mathfrak g_\alpha$ with the $\mathfrak g_\alpha$ of [L3]. [L1, L2, L3, algebra]

1.2 The zero weight space is $\mathfrak g_0=\{x:[H,x]=0\text{ for all }H\in\mathfrak h\}=C_{\mathfrak g}(\mathfrak h)$. Since $\mathfrak h$ is abelian we have $\mathfrak h\subseteq C_{\mathfrak g}(\mathfrak h)$, and $C_{\mathfrak g}(\mathfrak h)\subseteq N_{\mathfrak g}(\mathfrak h)=\mathfrak h$ by [L1]; hence $\mathfrak g_0=\mathfrak h$. [L1, L3, algebra]

2.1 Consequently $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\ne0}\mathfrak g_\alpha$ where the sum runs over all nonzero functionals, and deleting the zero summands leaves precisely the sum over the roots; the decomposition is direct because it is a subsum of a direct sum. Only finitely many root spaces are nonzero, because $\mathfrak g$ is finite-dimensional and the summands are linearly independent nonzero subspaces, so $\Phi$ is finite. The Axiom of Choice was inherited from [L1]. [A1, L1, step 1.1, step 1.2, algebra] ∎
