---
id: lem-anm-noise-independent-of-nondescendants
kind: lemma
title: "An ANM noise is independent of every set of nondescendants"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - thm-independent-random-elements-have-product-joint-law
  - lem-measurable-functions-preserve-independence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Appendix A.10, Lemma 37"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.10"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

In a finite additive-noise model on a DAG $G$, for every vertex $j$ and every
set $S\subseteq\operatorname{nd}(j)$ of nondescendants, the noise $N_j$ is
independent of the random vector $X_S=(X_k)_{k\in S}$.

## Statement references

[[def-additive-noise-model|Finite recursive additive-noise models and nondescendants]]

## Facts & Assumptions

**Given:** A finite recursive ANM with mutually independent exogenous noises.

[F1] Each endogenous variable is obtained recursively in a topological order as a Borel function of its parents and its own noise. [[def-additive-noise-model]]

[F2] The joint law of a finite independent family is the product of its marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

[F3] Measurable functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

## Proof
**Given:** The finite DAG, its topological structural equations, and mutually independent noises.

1.1 For each $k\in S$, define $A_k$ to be $k$ together with all vertices having a directed path to $k$, and put $A=\bigcup_{k\in S}A_k$. In topological order, a root variable is a measurable function of its own noise; if this representation has been obtained for each parent of $k$, substituting those representations into $X_k=f_k(X_{\operatorname{pa}(k)})+N_k$ shows that $X_k$ is a measurable function of $(N_i)_{i\in A_k}$. Finite induction therefore makes $X_S$ a measurable function of $(N_i)_{i\in A}$. Since $S$ contains only nondescendants of $j$, no directed path goes from $j$ to a vertex of $S$, so $j\notin A$. [given, F1, construct]

2.1 The finite noise product law [F2] implies that $N_j$ is independent of the vector $(N_i)_{i\in A}$ because the two coordinate blocks are disjoint. Applying [F3] to the measurable map from that vector to $X_S$ from step 1.1 shows $N_j\perp X_S$. If $S=\varnothing$, $X_S$ is the constant empty tuple and the same independence statement holds. [F2, F3, step 1.1] ∎
## References

[Peters et al., JMLR (2014), Appendix A.10, Lemma 37](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Durrett, Probability: Theory and Examples, Theorem 2.1.10](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf)
