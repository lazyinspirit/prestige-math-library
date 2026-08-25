---
id: ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half
kind: example
title: "The Smith-Volterra-Cantor set has Lebesgue measure exactly $1/2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-fat-cantor-set,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-continuity-from-above-for-measures,
       thm-fat-cantor-set-has-positive-measure,
       thm-geometric-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice and let $S$ be the Smith-Volterra-Cantor
set. Then

$$\lambda_1(S) = \tfrac12.$$

This is the exact value behind the published statement that $S$ is not null.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the stage lengths $(\lambda_n)_{n \in \mathbb{N}}$ and stage sets $(S_n)_{n \in \mathbb{N}}$ of [[def-fat-cantor-set]].

[F1] $$\lambda_0 = 1, \qquad \lambda_{n+1} = (\lambda_n - 4^{-n-1}) \cdot 2^{-1} \quad (n \in \mathbb{N}).$$ ([[def-fat-cantor-set]])

[L1] Assuming countable choice, a box in $\mathbb R^n$ with parameters $a_i \le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F2] Let $(E_n)_{n \in \mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0}) < +\infty$ for some $n_0$, then $\mu(\bigcap_n E_n) = \inf_n \mu(E_n)$ ([[thm-continuity-from-above-for-measures]]).

[F3] $S$ is closed and bounded, hence compact ([[thm-fat-cantor-set-has-positive-measure]]).

[F4] If $|r| < 1$ then the series $\sum r^k$ converges ([[thm-geometric-series]]).

## Verification

**Proof technique:** direct.

1.1 At stage $n$, the set $S_n$ is a disjoint union of $2^n$ closed intervals of common length $\lambda_n$, so $\lambda_1(S_n) = 2^n \lambda_n$. [F1, F3, L1, algebra]

2.1 Put $u_n := 2^n \lambda_n$. Then $u_0 = 1$ and $u_{n+1} = u_n - 2^{-n-2}$ by [F1], so an induction together with [F4] gives $u_n = \tfrac12 + 2^{-n-1}$ for every $n \in \mathbb{N}$. [step 1.1, F1, F4, algebra]

3.1 The sets $S_n$ decrease to $S$, and $\lambda_1(S_0)=1<+\infty$, so [F2] yields $\lambda_1(S) = \inf_n \lambda_1(S_n) = \lim_n (\tfrac12 + 2^{-n-1}) = \tfrac12$. [step 2.1, F2, F3, algebra] ∎
