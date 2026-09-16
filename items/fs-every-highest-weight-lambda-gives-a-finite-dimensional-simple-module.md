---
id: fs-every-highest-weight-lambda-gives-a-finite-dimensional-simple-module
kind: false-statement
title: Finite-dimensionality requires dominance integrality
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral, def-integral-dominant-and-strictly-dominant-weights, def-highest-weight-vector-and-highest-weight-module, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, def-special-linear-lie-algebra-sl-two, def-coroot-of-a-lie-algebra-root, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §§1–3"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every functional $\lambda\in\mathfrak h^*$ is the
highest weight of a finite-dimensional simple module over the complex
semisimple Lie algebra $\mathfrak g$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ with Cartan subalgebra $\mathfrak h=\mathbb Ch$ and simple root $\alpha$, $\alpha(h)=2$, with coroot $h_\alpha$ ([[def-coroot-of-a-lie-algebra-root]], [[def-special-linear-lie-algebra-sl-two]]), and the functional $\lambda\in\mathfrak h^*$ defined by $\lambda(h)=-1$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory used by [L1] ([[def-axiom-of-choice]]).

[L1] The highest weight of every finite-dimensional irreducible module is dominant integral, that is, $\langle\lambda,\alpha^\vee\rangle=\lambda(h_\alpha)\in\mathbb Z_{\ge0}$ for every simple root ([[lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral]], [[def-integral-dominant-and-strictly-dominant-weights]]).

[L2] For $\mathfrak{sl}_2$ the coroot of the root $\alpha$ satisfies $h_\alpha=h$, since $\alpha(h)=2$ forces the normalisation $h_\alpha=2H_\alpha/\alpha(H_\alpha)$ with $H_\alpha$ dual to $\alpha$; hence for the functional $\lambda$ of the Given line, $\langle\lambda,\alpha^\vee\rangle=\lambda(h)=-1$. [definition of the coroot]

[L3] A finite-dimensional simple highest weight module has a highest weight vector of some weight, and that highest weight is well defined ([[def-highest-weight-vector-and-highest-weight-module]], [[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Refutation

**Proof technique:** direct.

1.1 Suppose a finite-dimensional simple $\mathfrak{sl}_2$-module $V$ had highest weight $\lambda$; then by [L1] the pairing $\langle\lambda,\alpha^\vee\rangle$ would be a nonnegative integer. [L1, L3, A1]

2.1 But by [L2] that pairing equals $\lambda(h)=-1$, which is a negative integer, and in particular is not in $\mathbb Z_{\ge0}$; this contradicts step 1.1. [L2, step 1.1]

3.1 Hence the functional $\lambda$ with $\lambda(h)=-1$ is not the highest weight of any finite-dimensional simple module, so the universal statement of the Statement section is false; the failed conclusion is the claim that arbitrary functionals occur as highest weights of finite-dimensional simple modules. [step 2.1] ∎
