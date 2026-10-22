---
id: lem-sl2-trace-functions-are-regular-and-invariant
kind: lemma
title: "Trace functions are regular and conjugation invariant"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - lem-sl2-representation-variety-is-affine
justified_by: []
proof_strategy: direct
axiom_use: "The adjugate and trace identities used in the proof are choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, §2.1"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Stephan Tillmann, Varieties associated to 3-manifolds, §§4.2–4.4"
      url: "https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf"
---

## Statement

Assume full AC. For every word $w$ in the generators of a finitely presented group $G$, the function $\rho\mapsto\operatorname{tr}(\rho(w))$ is a regular function on $\operatorname{Hom}(G,SL_2(\mathbb C))$ and is invariant under simultaneous conjugation.

## Statement references

[Bénard, Florens, and Rodau, §2.1](https://arxiv.org/html/2103.14151)

[Tillmann, §§4.2–4.4](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, a finite presentation of $G$, its affine representation variety, and a word $w$ in the generators and their inverses.

[F1] Generator and relator matrix entries are regular coordinates on the affine representation variety ([[lem-sl2-representation-variety-is-affine]]).

[F2] If $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb C)$, then $A^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ ([[def-sl-two-character-variety-and-peripheral-eigenvalues]]).

## Proof

1.1 Evaluate $w$ by multiplying its generator matrices and the adjugates for inverse letters. Each entry of the resulting matrix is a polynomial in the representation coordinates, so its trace is regular. [F1, F2]

1.2 For any $P\in SL_2(\mathbb C)$, conjugation sends the word matrix $W$ to $PWP^{-1}$. The identity $\operatorname{tr}(PWP^{-1})=\operatorname{tr}(WP^{-1}P)=\operatorname{tr}(W)$ proves invariance. [step 1.1, algebra]

2.1 Thus each word trace defines an element of the conjugation-invariant coordinate ring of the representation variety. [step 1.1, step 1.2] ∎
