---
id: ex-etale-kummer-sequence-prime-to-residue-characteristic
kind: example
title: "Étale Kummer sequence when n is prime to the characteristic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - rem-etale-kummer-when-n-is-invertible
  - thm-multiplication-by-n-has-degree-n-to-2g
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew Snowden, Abelian varieties (algebraic theory), Lecture 4"
      url: "https://open.umich.edu/sites/default/files/downloads/2014-math679-asnowden-lecture04-handout.pdf"
      locator: "The Mordell–Weil theorem section, displayed Galois Kummer sequence."
    - title: "The Stacks Project, Groupoid Schemes, Section 39.9, Lemma 39.9.8"
      url: "https://stacks.math.columbia.edu/tag/0BFG"
      locator: "Finite locally free degree of multiplication by n."
---

## Example

Let $K=\mathbb Q$, let $A/K$ be an abelian variety of dimension one, and take $n=2$. For a chosen separable closure $K^s/K$, put $G_K=\operatorname{Aut}_K(K^s)$ with its Krull topology. Write $H^1_{\mathrm{cts}}(G_K,M)$ for continuous 1-cocycles $c:G_K\to M$ satisfying $c(\sigma\tau)=c(\sigma)+\sigma c(\tau)$, modulo coboundaries $c_m(\sigma)=\sigma m-m$. Then $A[2]$ is finite étale of rank $4$, the sequence $0\to A[2]\to A\xrightarrow{[2]}A\to0$ is exact after étale-local base change, and
$$0\longrightarrow A(\mathbb Q)/2A(\mathbb Q)\longrightarrow H^1_{\mathrm{cts}}(G_K,A[2](K^s))\longrightarrow H^1_{\mathrm{cts}}(G_K,A(K^s))[2]\longrightarrow0$$
is exact.

## Example references

[Andrew Snowden, Abelian varieties (algebraic theory), Lecture 4](https://open.umich.edu/sites/default/files/downloads/2014-math679-asnowden-lecture04-handout.pdf)

[The Stacks Project, Groupoid Schemes, Lemma 39.9.8](https://stacks.math.columbia.edu/tag/0BFG)

## Facts & Assumptions


**Given:** The Axiom of Choice, Dependent Choice, $K=\mathbb Q$, an abelian variety $A/K$ of dimension one, and $n=2$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Dependent Choice states that every serial relation on a nonempty set admits an infinite chain ([[def-dependent-choice]]).

[F1] [[rem-etale-kummer-when-n-is-invertible]]: when $n$ is invertible, the kernel sequence is étale-local exact and induces the displayed continuous Galois H¹ sequence.

[F2] [[thm-multiplication-by-n-has-degree-n-to-2g]]: the finite flat rank of $A[n]$ is $n^{2g}$; when $n$ is invertible, it is finite étale.

## Verification


1.1 The field $\mathbb Q$ has characteristic zero, so $2\in\mathbb Q^\times$. Apply [F1] with $n=2$ and $A/\mathbb Q$; it gives the étale-local exact sequence and the continuous Galois H¹ sequence in the Example statement. [A1, A2, F1, given]

2.1 Since $\dim A=1$, [F2] gives $\operatorname{rank}A[2]=2^{2}=4$ and finite étaleness. This verifies the stated torsion rank and completes the specialization. [A1, A2, F2, step 1.1] ∎
