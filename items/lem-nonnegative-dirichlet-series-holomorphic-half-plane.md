---
dependency_level: 0
id: lem-nonnegative-dirichlet-series-holomorphic-half-plane
kind: lemma
title: A nonnegative Dirichlet series cannot hide its positive abscissa
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-taylor-expansion-holomorphic-function
- cor-uniqueness-of-complex-power-series-coefficients
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- thm-weierstrass-convergence-holomorphic-functions
- thm-exponential-beats-every-polynomial
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §13 context, printed543–545; elementary Taylor/positivity proof supplied independently here;
      full local finite-order specialization below.
---

## Statement

Assume AC and Countable Choice. Let $a_N\ge0$ be real numbers for $N\ge1$ and suppose $\sum_N a_NN^{-s}$ converges for every real $s>1$. If its holomorphic function on $\operatorname{Re}s>1$ has a holomorphic extension to $\operatorname{Re}s>0$, then $\sum_N a_NN^{-\delta}<\infty$ for every real $\delta>0$.

## Facts & Assumptions

**Given:** The coefficients, extension and choice assumptions in the Statement.

[F1] A holomorphic function equals its Taylor series throughout any centered disc contained in its domain, and convergent complex power-series coefficients are unique. [[thm-taylor-expansion-holomorphic-function]] [[cor-uniqueness-of-complex-power-series-coefficients]]

[F2] Nonnegative sums may be interchanged by Tonelli. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F3] Locally uniform limits of holomorphic functions are holomorphic; exponential decay dominates polynomial factors. [[thm-weierstrass-convergence-holomorphic-functions]] [[thm-exponential-beats-every-polynomial]]

[A1] The measure and series interfaces retain AC/CC. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 For any $\sigma_0>1$, choose $1<\sigma_1<\sigma_0$. The series is uniformly absolutely bounded on $\operatorname{Re}s\ge\sigma_0$ by $\sum a_NN^{-\sigma_1}$, so [F3] gives its holomorphic sum. For each integer $j\ge0$, $(\log N)^jN^{-2}$ is bounded by a constant times $N^{-3/2}$, so $$b_j=\frac1{j!}\sum_N a_NN^{-2}(\log N)^j$$ is finite and nonnegative. [F3, given, algebra]

2.1 For $|z|<1/2$, the double exponential series is absolutely summable, bounded by $\sum_Na_NN^{-2+|z|}<\infty$. Expanding $e^{z\log N}$ and interchanging the absolutely convergent sums, or applying [F2] to their absolute values, gives $F(2-z)=\sum_{j\ge0}b_jz^j$. By [F1], these are the Taylor coefficients of the given extension at the center $s=2$, in the variable $z=2-s$. The disc $|z|<2$ lies in $\operatorname{Re}s>0$, so the same Taylor series converges throughout that disc. [F1, F2, step 1.1, algebra]

3.1 If $0<\delta\le1$, set $z=2-\delta\in[1,2)$. Taylor convergence and $b_j\ge0$ show that $\sum_jb_jz^j$ is finite. Tonelli [F2] now gives $$\sum_jb_jz^j=\sum_Na_NN^{-2}\sum_{j\ge0}\frac{(z\log N)^j}{j!}=\sum_Na_NN^{-\delta}.$$ For $\delta>1$ the original hypothesis already gives convergence. This proves the assertion without importing a general singularity theorem for Dirichlet series. [F1, F2, step 2.1, algebra] ∎ 