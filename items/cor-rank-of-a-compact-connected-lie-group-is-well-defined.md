---
id: cor-rank-of-a-compact-connected-lie-group-is-well-defined
kind: corollary
title: Rank is well-defined
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-conjugacy-of-maximal-tori, def-axiom-of-choice, def-conjugation-and-the-adjoint-representation-of-a-lie-group, def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §5, consequence of Theorem 4.34"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. All maximal tori of a compact connected Lie group
have the same dimension; this common dimension is the **rank** of $G$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected Lie group $G$, and two maximal tori $T_1,T_2\le G$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the conjugacy theorem [L1].

[L1] Any two maximal tori of $G$ are conjugate ([[thm-conjugacy-of-maximal-tori]]).

[L2] Conjugation $C_g(h)=ghg^{-1}$ is a Lie-group automorphism, hence a diffeomorphism; its restriction to a maximal torus $T_1$ is a Lie-group isomorphism onto $gT_1g^{-1}$, so $\dim T_1=\dim gT_1g^{-1}$, and a Lie group and its Lie algebra have the same dimension ([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] there is $g\in G$ with $T_2=gT_1g^{-1}$; by [L2] conjugation restricts to a Lie-group isomorphism $T_1\to T_2$, so $\dim T_2=\dim T_1$. [L1, L2]

2.1 Since $T_1,T_2$ were arbitrary maximal tori, all maximal tori of $G$ have the same dimension, and defining the rank of $G$ to be that common dimension is therefore unambiguous. The Axiom of Choice entered only through [L1]. [A1, step 1.1] ∎
