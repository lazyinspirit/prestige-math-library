---
id: thm-hurwitz-zero-free-limit
kind: theorem
title: "Hurwitz's zero-free limit theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuity-of-zeros-locally-uniform-convergence,
       thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4, Exercise 5.4.14"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain, let each
$f_n:\Omega\to\mathbb C$ be holomorphic and nowhere zero, and suppose
$f_n\to f$ locally uniformly on $\Omega$. Then either $f\equiv0$ on $\Omega$, or
$f$ is nowhere zero on $\Omega$.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, holomorphic nowhere-zero functions $f_n$ on
$\Omega$, and locally uniform convergence $f_n\to f$.

[L1] Locally uniform limits of holomorphic functions are holomorphic
([[thm-weierstrass-convergence-holomorphic-functions]]).

[L2] Near an isolated zero of the limit, sufficiently late approximants have the
same total zero multiplicity ([[thm-continuity-of-zeros-locally-uniform-convergence]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the limit function $f$ is holomorphic on $\Omega$. If $f\equiv0$, the first alternative of the statement holds. [given, L1]

2.1 Assume $f\not\equiv0$ and suppose toward a contradiction that $f(a)=0$ at some point $a\in\Omega$. Then $a$ is an isolated zero of $f$, so [L2] gives a disc about $a$ on which every sufficiently large $f_n$ has at least one zero. That contradicts the hypothesis that every $f_n$ is nowhere zero. [step 1.1, L2, assume-contra, discharge-contradiction]

3.1 Therefore, in the nonzero branch of step 1.1, the function $f$ has no zeros on $\Omega$. This is the second alternative. [step 1.1, step 2.1] ∎
