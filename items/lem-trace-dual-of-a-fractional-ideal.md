---
id: lem-trace-dual-of-a-fractional-ideal
kind: lemma
title: "Trace dual of a fractional ideal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-fractional-ideal
  - def-trace-dual-and-codifferent-of-a-number-field
  - def-different-of-a-number-field
  - def-invertible-fractional-ideal
  - lem-codifferent-is-a-fractional-ideal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5, Lemma 5.7"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.462–463: the Minkowski dual of an ideal lattice is the conjugate of its trace dual, equal to (a D)^-1."
    - title: "Keith Conrad, The Different Ideal, Definitions 3.2 and 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
      locator: "Trace-dual and different conventions; the codifferent is the trace dual of O_K and the different is its inverse."

---

## Statement

Let $K$ be a number field with ring of integers $\mathcal O_K$, different $\mathfrak D_K$, and codifferent $\mathcal O_K^\vee=\{x\in K:\operatorname{Tr}_{K/\mathbb Q}(x\mathcal O_K)\subseteq\mathbb Z\}$. For every nonzero fractional ideal $\mathfrak a$ of $\mathcal O_K$, its trace dual
$$\mathfrak a^\vee:=\{x\in K:\operatorname{Tr}_{K/\mathbb Q}(x\mathfrak a)\subseteq\mathbb Z\}$$
is the fractional ideal
$$\mathfrak a^\vee=(\mathfrak a\mathfrak D_K)^{-1}.$$

## Statement references

[[def-trace-dual-and-codifferent-of-a-number-field]]

[[def-different-of-a-number-field]]

[[def-number-field]]

[[def-fractional-ideal]]

## Facts & Assumptions

**Given:** A number field $K$, its ring of integers $\mathcal O_K$, a nonzero fractional ideal $\mathfrak a$, the trace pairing $\operatorname{Tr}_{K/\mathbb Q}$, its codifferent $\mathcal O_K^\vee$, and its different $\mathfrak D_K$.

[F1] The trace dual of a lattice $A\subset K$ is $A^\vee=\{x\in K:\operatorname{Tr}_{K/\mathbb Q}(xA)\subseteq\mathbb Z\}$, and the codifferent is $\mathcal O_K^\vee$ ([[def-trace-dual-and-codifferent-of-a-number-field]]).

[F2] The different is $\mathfrak D_K=(\mathcal O_K^\vee)^{-1}$, so $\mathcal O_K^\vee=\mathfrak D_K^{-1}$ ([[def-different-of-a-number-field]]).

[F3] Every nonzero fractional ideal is invertible, with $\mathfrak a\mathfrak a^{-1}=\mathcal O_K$ ([[def-invertible-fractional-ideal]]).

[F4] A number field $K$ is a finite extension of $\mathbb Q$ and $\mathcal O_K$ denotes its ring of integers ([[def-number-field]]).

## Proof

1.1 Suppose $x\in\mathfrak a^{-1}\mathfrak D_K^{-1}$. Then $x\mathfrak a\subseteq\mathfrak D_K^{-1}=\mathcal O_K^\vee$ by [F2] and the definition of the inverse ideal. For each $y\in\mathfrak a$, membership $xy\in\mathcal O_K^\vee$ implies $\operatorname{Tr}_{K/\mathbb Q}(xy)\in\mathbb Z$ by [F1], taking the multiplier $1\in\mathcal O_K$. Hence $x\in\mathfrak a^\vee$. [F1, F2, given, algebra]

1.2 Suppose instead $x\in\mathfrak a^\vee$. For every $y\in\mathfrak a$ and $z\in\mathcal O_K$, $yz\in\mathfrak a$, so $\operatorname{Tr}_{K/\mathbb Q}((xy)z)\in\mathbb Z$; thus $xy\in\mathcal O_K^\vee=\mathfrak D_K^{-1}$ by [F1] and [F2], and $x\mathfrak a\subseteq\mathfrak D_K^{-1}$. Multiplying this inclusion by $\mathfrak a^{-1}$ and using [F3] gives $x\mathcal O_K\subseteq\mathfrak a^{-1}\mathfrak D_K^{-1}$, hence $x\in\mathfrak a^{-1}\mathfrak D_K^{-1}$. [F1, F2, F3, given, algebra]

2.1 Steps 1.1 and 1.2 prove $\mathfrak a^\vee=\mathfrak a^{-1}\mathfrak D_K^{-1}=(\mathfrak a\mathfrak D_K)^{-1}$. [step 1.1, step 1.2, algebra] ∎