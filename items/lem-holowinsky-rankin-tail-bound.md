---
id: lem-holowinsky-rankin-tail-bound
kind: lemma
title: "Holowinsky–Soundararajan Rankin–Selberg Tail Bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - thm-soundararajan-weak-subconvexity-symmetric-square
  - thm-symmetric-square-l-function-analytic-properties-and-zero-free-region
  - def-holowinsky-soundararajan-sieve-parameters
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "§2, Lemma 1, printed p. 7: the estimate for R_k(f) derived from weak subconvexity and the L(1) lower bound."
    - title: "K. Soundararajan, Weak Subconvexity for Central Values of L-Functions"
      url: "https://arxiv.org/pdf/0809.1635v1"
      locator: "§1, equation (1.1), and Example 1 proof, printed pp. 2 and 4–5: the uniform-in-t symmetric-square bound."
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $k\ge4$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a nonzero full-level holomorphic Hecke cusp form with $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$. Define
$$R_k(f)=\frac{1}{k^{1/2}L(1,\operatorname{sym}^2 f)}\int_{-\infty}^{\infty}\frac{|L(\tfrac12+it,\operatorname{sym}^2 f)|}{(1+|t|)^{10}}\,dt,$$
using the symmetric-square $L$-function defined by its level-one Euler product and continuation. For every $\epsilon>0$,
$$R_k(f)\ll_\epsilon(\log k)^\epsilon,$$
with an implied constant independent of $f$ and $k$.

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[thm-soundararajan-weak-subconvexity-symmetric-square]]

[[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]

[[def-holowinsky-soundararajan-sieve-parameters]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-countable-choice]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, §2, Lemma 1](https://arxiv.org/pdf/0809.1636v1)

[Soundararajan, *Weak Subconvexity for Central Values of L-Functions*, §1 and Example 1](https://arxiv.org/pdf/0809.1635v1)

## Facts & Assumptions

**Given:** AC, DC and Countable Choice; an even integer $k\ge4$; and a normalized full-level holomorphic Hecke cusp eigenform $f$.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: For every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a function $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n\in\mathbb N$.

[A3] [[def-countable-choice]]: For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n\in\mathbb N$.

[F1] [[thm-soundararajan-weak-subconvexity-symmetric-square]]: For each $\delta>0$ and every real $t$, $|L(\tfrac12+it,\operatorname{sym}^2f)|\ll_\delta k^{1/2}(1+|t|)^{3/4}(\log k)^{-1+\delta}$, uniformly in $f$ and $k$.

[F2] [[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]: $L(1,\operatorname{sym}^2f)\ge c_1/\log k$ for an absolute $c_1>0$.

[F3] [[def-holowinsky-soundararajan-sieve-parameters]]: $R_k(f)$ is $(k^{1/2}L(1,\operatorname{sym}^2f))^{-1}$ times the integral of $|L(\tfrac12+it,\operatorname{sym}^2f)|(1+|t|)^{-10}$ over $t\in\mathbb R$.

## Proof

1.1 Apply [F1] with $\delta=\epsilon$ inside the nonnegative integral defined by [F3]. Since $3/4-10=-37/4$ and $\int_{-\infty}^{\infty}(1+|t|)^{-37/4}\,dt=8/33$, this gives $R_k(f)\ll_\epsilon \bigl(L(1,\operatorname{sym}^2f)(\log k)^{1-\epsilon}\bigr)^{-1}$. [F1, F3, given, algebra]

2.1 The positive lower bound [F2] implies $L(1,\operatorname{sym}^2f)^{-1}\le c_1^{-1}\log k$. Substitution in step 1.1 yields $R_k(f)\ll_\epsilon(\log k)^\epsilon$. AC, DC and Countable Choice enter only through [F1] and [F2]; this integral estimate itself is choice free. [A1, A2, A3, F1, F2, step 1.1, algebra] ∎
