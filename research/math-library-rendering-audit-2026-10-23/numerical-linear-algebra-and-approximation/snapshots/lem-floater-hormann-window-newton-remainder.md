---
id: lem-floater-hormann-window-newton-remainder
kind: lemma
title: Newton remainder for a Floater–Hormann window polynomial
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-window-polynomial
  - lem-floater-hormann-window-polynomial-interpolates
  - def-distinct-node-divided-difference
  - lem-divided-difference-lagrange-formula-and-symmetry
  - def-cardinal-polynomial-interpolation
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - def-natural-numbers
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation
        with no poles and high rates of approximation, proof of Theorem 2
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $x\notin\{x_i,\ldots,x_{i+d}\}$. For any real data at these nodes and at
$x$, the local polynomial from
[[def-floater-hormann-window-polynomial]] satisfies
$$f(x)-p_i(x)= \left(\prod_{k=i}^{i+d}(x-x_k)\right) f[x_i,\ldots,x_{i+d},x].$$

## Facts & Assumptions

**Given:** Distinct real nodes $x_i,\ldots,x_{i+d},x$, real data at them, and the local window polynomial $p_i$.

[F1] [[def-floater-hormann-window-polynomial]] and [[lem-floater-hormann-window-polynomial-interpolates]]: $p_i$ has degree at most $d$ and agrees with the data on the window nodes.

[F2] [[def-distinct-node-divided-difference]] and [[lem-divided-difference-lagrange-formula-and-symmetry]]: the divided difference on $d+2$ nodes is the leading coefficient of their Lagrange interpolant.

[F3] [[def-cardinal-polynomial-interpolation]] and [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: for $r\in\mathbb N$, after sorting $r+1$ distinct real nodes and carrying their data along, the cardinal Lagrange sum is the unique polynomial of degree at most $r$ taking the assigned values.

[F4] [[def-natural-numbers]]: $\mathbb N$ contains $0$ and is closed under successor, so $d+1\in\mathbb N$.

## Proof

1.1 By [F4], $d+1\in\mathbb N$, so sort the combined node/data list increasingly and apply [F3], which supplies the degree-at-most-$(d+1)$ Lagrange interpolant $q_i$ through the $d+2$ nodes $x_i,\ldots,x_{i+d},x$. By [F2] its leading coefficient is $c=f[x_i,\ldots,x_{i+d},x]$. By [F1], $q_i-p_i$ has degree at most $d+1$, has leading coefficient $c$, and vanishes at each of the $d+1$ window nodes. [given, F1, F2, F3, F4, construct]

2.1 Let $R(t)=q_i(t)-p_i(t)-c\prod_{k=i}^{i+d}(t-x_k)$. The degree-$(d+1)$ leading terms cancel by step 1.1, so $R$ has degree at most $d$; it vanishes at all $d+1$ window nodes. By [F4], $d\in\mathbb N$, and [F3] says the only degree-at-most-$d$ polynomial with these zero values is $0$. Thus $R=0$. Evaluating $q_i-p_i=c\prod_{k=i}^{i+d}(t-x_k)$ at $t=x$, where $q_i(x)=f(x)$, proves the stated remainder. [given, F3, F4, step 1.1, algebra] ∎

