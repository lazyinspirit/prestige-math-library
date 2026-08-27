---
id: thm-hurwitz-injective-limit
kind: theorem
title: "A locally uniform limit of injective holomorphic functions is injective or constant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuity-of-zeros-locally-uniform-convergence,
       thm-weierstrass-convergence-holomorphic-functions,
       thm-isolated-zeros-holomorphic-function,
       def-complex-domain]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4, Corollary 5.4.9"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain, let each
$f_n:\Omega\to\mathbb C$ be holomorphic and injective, and suppose
$f_n\to f$ locally uniformly on $\Omega$. Then $f$ is injective or constant.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, injective holomorphic functions $f_n$ on
$\Omega$, and locally uniform convergence $f_n\to f$.

[L1] The limit $f$ is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[L2] A nonzero holomorphic function on a complex domain has isolated zeros
([[thm-isolated-zeros-holomorphic-function]]).

[L3] Near an isolated zero of the limit, sufficiently late approximants preserve
the total zero multiplicity ([[thm-continuity-of-zeros-locally-uniform-convergence]]).

## Proof

**Proof technique:** contradiction.

1.1 By [L1], the limit $f$ is holomorphic. Assume it is not constant. [given, L1, assume-contra]

2.1 Suppose toward a contradiction that $f$ is not injective. Then there are distinct points $a,b\in\Omega$ with $f(a)=f(b)=:w$. Because $f$ is nonconstant, the function $f-w$ is not identically zero, so [L2] makes both $a$ and $b$ isolated zeros of $f-w$. Choose disjoint closed discs $\overline{D(a,r_a)},\overline{D(b,r_b)}\subseteq\Omega$ containing no other zeros of $f-w$. [step 1.1, L2, choose]

3.1 Apply [L3] to the sequence $f_n-w$ on each of those discs. For all sufficiently large $n$, the function $f_n-w$ has at least one zero in $D(a,r_a)$ and at least one zero in $D(b,r_b)$. Since the discs are disjoint, those are two distinct preimages of $w$, contradicting injectivity of $f_n$. [step 2.1, L3, discharge-contradiction]

4.1 The contradiction in step 3.1 shows that a nonconstant limit must be injective. Therefore every limit is injective or constant. [step 1.1, step 3.1, discharge-contradiction] ∎
