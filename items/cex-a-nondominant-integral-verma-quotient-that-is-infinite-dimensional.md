---
id: cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional
kind: counterexample
title: A nondominant integral highest-weight module can be infinite-dimensional
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-verma-modules-for-sl-two, def-integral-dominant-and-strictly-dominant-weights, def-special-linear-lie-algebra-sl-two, def-highest-weight-vector-and-highest-weight-module, def-coroot-of-a-lie-algebra-root, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.3"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §3"
proof_strategy: direct
---

## Statement refuted

Assume the Axiom of Choice. If a functional $\lambda$ is integral, then the
highest weight module $M(\lambda)$ of weight $\lambda$ is finite-dimensional.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak{sl}_2(\mathbb C)$ with Cartan subalgebra $\mathfrak h=\mathbb Ch$ and chosen positive system $\Phi^+=\{\alpha\}$ with simple-root base $\Delta=\{\alpha\}$, where $\alpha(h)=2$, with coroot $h_\alpha=h$ ([[def-coroot-of-a-lie-algebra-root]], [[def-special-linear-lie-algebra-sl-two]]), the functional $\lambda\in\mathfrak h^*$ with $\lambda(h)=-1$, and the highest weight module $M(\lambda)$ of [[ex-verma-modules-for-sl-two]].

[A1] The Axiom of Choice is assumed; it is inherited through the cited module and the general highest-weight and integral-weight definitions ([[def-axiom-of-choice]]).

[L1] $\lambda$ is integral: $\langle\lambda,\alpha^\vee\rangle=\lambda(h_\alpha)=\lambda(h)=-1\in\mathbb Z$, but it is not dominant, since $-1$ is not nonnegative ([[def-integral-dominant-and-strictly-dominant-weights]], [[def-coroot-of-a-lie-algebra-root]]).

[L2] Every Verma module $M(\lambda)$ in [[ex-verma-modules-for-sl-two]] has the infinite basis $v_k=f^k\cdot v_0$, $k\ge0$, and is therefore infinite-dimensional. [example statement]

## Counterexample

**Proof technique:** direct.

1.1 The functional $\lambda$ with $\lambda(h)=-1$ is integral by [L1], so it satisfies the hypothesis of the refuted statement. [L1, A1]

1.2 By [L2] the highest weight module $M(\lambda)$ for this $\lambda$ is infinite-dimensional; the conclusion of the refuted statement ("$M(\lambda)$ is finite-dimensional") thus fails. [L2]

2.1 The witness is explicit: the integral but nondominant functional $\lambda$ with $\lambda(h)=-1$ and the module $M(\lambda)$ with its infinite basis $v_k=f^k\cdot v_0$, $k\ge0$; the failed conclusion is the implication from integrality to finite-dimensionality. [step 1.1, step 1.2] ∎
