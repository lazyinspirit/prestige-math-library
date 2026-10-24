---
id: ex-the-n-torus-and-its-exponential-lattice
kind: example
title: The n-torus and its exponential lattice
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-exponential-map-of-a-lie-group, def-lie-group]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Example 3.5, printed page 30
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory torus example
---

## Example

Assume $\mathrm{AC}_\omega$. For
$\mathbb T^n=\mathbb R^n/\mathbb Z^n$, the exponential is

$$\exp_{\mathbb T^n}(X)=[X],\qquad \ker(\exp_{\mathbb T^n})=\mathbb Z^n.$$

Under the unit-circle convention $x\mapsto e^{ix}$, the same kernel is written
$2\pi\mathbb Z^n$.

## Facts & Assumptions

**Given:** The additive quotient torus.

[F1] Smooth group operations define a Lie group. [[def-lie-group]].

[F2] The Lie-group exponential is the time-one point of the one-parameter subgroup with the given velocity. [[def-exponential-map-of-a-lie-group]].

[F3] The exponential-map interface [F2] assumes countable choice and records its use through the supplied invariant-field and completeness result. [[def-countable-choice]].

## Verification

**Proof technique:** direct.

1.1 Integer translations preserve the standard smooth charts, so addition and negation descend to smooth operations on the quotient; hence [F1] gives an $n$-dimensional Lie group with tangent space $\mathbb R^n$ at the identity. [F1, algebra]

2.1 For $X\in\mathbb R^n$, the curve $t\mapsto[tX]$ is a one-parameter subgroup with initial velocity $X$. By [F2], its time-one point is $\exp_{\mathbb T^n}(X)=[X]$. This equals the identity exactly when $X\in\mathbb Z^n$. [F2, step 1.1, algebra]

3.1 At $n=0$ the torus and kernel are trivial; at $n=1$ this is the circle quotient. The lattice is discrete but no nondegeneracy is asserted. There is no metric, endpoint issue, or biconditional beyond the direct kernel calculation. The assumed $\mathrm{AC}_\omega$ is used by [F2] through its stated supplier chain, and the fixed integer lattice adds no choice. [F1, F2, F3, step 1.1, step 2.1] ∎
