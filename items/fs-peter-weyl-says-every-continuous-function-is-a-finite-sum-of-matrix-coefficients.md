---
id: fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients
kind: false-statement
title: Peter–Weyl gives density, not finite equality
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group, def-axiom-of-choice, cor-schurs-lemma-for-irreducible-representations, prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t, def-the-one-dimensional-torus-and-normalized-haar-integral]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3 (density, not equality, of the matrix-coefficient algebra)"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every continuous function on a compact Lie group is
a finite sum of matrix coefficients.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the group $G=S^1=\mathbb R/\mathbb Z$.

[L1] Finite linear combinations of matrix coefficients are uniformly dense in $C(G)$ ([[cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group]]).

[L2] The irreducible unitary representations of the abelian group $S^1$ are one-dimensional (Schur's lemma for irreducible representations over $\mathbb C$), and the characters of the torus are $z\mapsto z^n$, $n\in\mathbb Z$ ([[cor-schurs-lemma-for-irreducible-representations]], [[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2] every irreducible unitary representation of $S^1$ is a character $z\mapsto z^n$, and its matrix coefficients are scalar multiples of that character; hence every finite sum of matrix coefficients is a function of the form $\theta\mapsto p(e^{i\theta})$ for a Laurent polynomial $p$, which is smooth in the real variable $\theta$. [L2]

2.1 The continuous function $f(e^{i\theta}):=|\theta|$ for $\theta\in(-\pi,\pi]$ on $S^1$ is not differentiable at $\theta=0$, while every function $\theta\mapsto p(e^{i\theta})$ with $p$ a Laurent polynomial is differentiable there; hence $f$ is not a finite sum of matrix coefficients. [step 1.1]

3.1 On the other hand, by [L1] the finite sums of matrix coefficients are uniformly dense, so $f$ is a uniform limit of such sums; Peter–Weyl therefore gives density, not finite equality, and the statement of this item is false. [L1, step 2.1] ∎
