---
id: lem-floater-hormann-window-polynomial-interpolates
kind: lemma
title: Floater–Hormann window polynomials interpolate their local data
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-window-polynomial
  - def-cardinal-polynomial-interpolation
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - def-natural-numbers
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation
        with no poles and high rates of approximation, Section 2
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
verification:
  precheck: pass
---

## Statement

For each window $i$, the polynomial $p_i$ in
[[def-floater-hormann-window-polynomial]] has degree at most $d$ and satisfies
$p_i(x_k)=f_k$ for every $i\le k\le i+d$. It is the unique polynomial of
degree at most $d$ with those values. In particular, when all local data
equal $1$, the local Lagrange basis functions sum to the constant polynomial
$1$.

## Facts & Assumptions

**Given:** Distinct real nodes and data as in the Floater–Hormann definition, an integer $0\le d<n$, and a window index $0\le i\le n-d$.

[F1] [[def-floater-hormann-window-polynomial]]: $p_i$ is the sum of the local Lagrange terms $f_k\prod_{j\ne k}(t-x_j)/(x_k-x_j)$.

[F2] [[def-cardinal-polynomial-interpolation]] and [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: the displayed local Lagrange sum is the unique polynomial of degree at most $d$ taking the data on the $d+1$ window nodes.

[F3] [[def-natural-numbers]]: every nonnegative integer $d$ belongs to $\mathbb N$.

## Proof

1.1 Each summand in [F1] is a polynomial of degree at most $d$, so $p_i$ has degree at most $d$. At a local node $x_\ell$, every summand with $k\ne\ell$ contains the zero factor $x_\ell-x_\ell$, while the $k=\ell$ product equals one. Therefore $p_i(x_\ell)=f_\ell$. [given, F1, algebra]

2.1 By [F3], $d\in\mathbb N$, so [F2] applies and $p_i$ is the unique polynomial of degree at most $d$ with these window values. The constant polynomial $1$ has the value $1$ at each local node; uniqueness makes its Lagrange interpolant equal to $1$. [given, F2, F3, step 1.1, algebra] ∎

