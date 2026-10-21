---
id: cex-offset-free-sine-ridge-functions-are-not-dense
kind: counterexample
title: "Offset-free sine ridge functions cannot uniformly approximate the square function"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-single-hidden-layer-network]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, §5"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
---

## Statement refuted

Finite sine ridge sums without hidden-unit offsets, even when an output bias is allowed, are uniformly dense in $C([-1,1],\mathbb R)$.

## Statement references

[Leshno et al., §5: the offset-free sine boundary](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

## Facts & Assumptions

**Given:** The restricted family $S(x)=c+\sum_{j=1}^m a_j\sin(w_jx)$, with $m\in\mathbb N_0$ and real parameters.

[F1] The full single-hidden-layer convention includes arbitrary hidden offsets and an output bias ([[def-single-hidden-layer-network]]); this counterexample removes the hidden offsets.

## Counterexample

1.1 Since sine is odd, $S(0)=c$ and $\bigl(S(1)+S(-1)\bigr)/2=c$. [given, F1, algebra]

2.1 For the even target $f(x)=x^2$, uniform error at most $\varepsilon$ implies both $|c|=|S(0)-f(0)|\le\varepsilon$ and $|c-1|=\left|(S(1)+S(-1))/2-1\right|\le\varepsilon$. [step 1.1, algebra]

3.1 Every real $c$ satisfies $\max(|c|,|c-1|)\ge1/2$. Thus no such sum approximates $x^2$ with error less than $1/2$, disproving uniform density. [step 2.1, algebra] ∎

