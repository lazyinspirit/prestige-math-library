---
id: ex-polynomial-activation-bounded-degree-obstruction
kind: example
title: "A polynomial activation confines univariate outputs to bounded degree"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-countable-choice
  - def-single-hidden-layer-network
  - lem-polynomial-activation-bounded-degree-obstruction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Step 1"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
---

## Example

Assume Countable Choice. Let $q\in\mathbb N_0$ and use the polynomial activation $\sigma(t)=t^q$ (with $t^0=1$). Every finite single-hidden-layer output restricted to $[0,1]$ is a polynomial of degree at most $q$, and the target $f(t)=t^{q+1}$ stays at uniform distance at least $(q+1)!/[2^{q+2}(q+1)^{q+1}]$ from every such output.

## Example references

[Leshno et al., proof of Theorem 1, polynomial-activation obstruction](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

## Facts & Assumptions

**Given:** $q\in\mathbb N_0$, $\sigma(t)=t^q$, and the target $t^{q+1}$ on $[0,1]$.

[F1] Polynomial activation functions satisfy the hypotheses of the bounded-degree obstruction with their exact polynomial representative ([[lem-polynomial-activation-bounded-degree-obstruction]]).

[F2] A single-hidden-layer output is a finite affine combination of activation units ([[def-single-hidden-layer-network]]).

[A1] Countable Choice is the assumption of the cited obstruction lemma ([[def-countable-choice]]).

## Verification

1.1 By [F2], each unit on a univariate input is $(wt+b)^q$, a polynomial of degree at most $q$; finite weighted sums and an output bias preserve that degree bound. [given, F2, algebra]

2.1 Apply [F1] with the polynomial $p(t)=t^q$ to obtain the stated positive lower bound for approximation of $t^{q+1}$. [given, F1, A1] ∎

