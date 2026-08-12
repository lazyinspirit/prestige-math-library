---
id: thm-universal-property-of-free-modules
kind: theorem
title: "Universal property of the free module on a set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-module-direct-sums]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a unital ring, $X$ a set, and $M$ a left $R$-module. Every set map $u:X\to M$ extends uniquely to an $R$-module homomorphism $\bar u:R^{(X)}\to M$ satisfying $\bar u(e_x)=u(x)$. Explicitly,
$$\bar u\left(\sum_{x\in F}r_xe_x\right)=\sum_{x\in F}r_xu(x).$$

## Facts & Assumptions

**Given:** A set map $u:X\to M$.

[F1] $R^{(X)}$ is the direct sum of copies of the regular module $R$, with standard vectors $e_x$ and unique finite coordinate expressions ([[def-free-module-on-a-set-and-standard-basis]]).

[L1] A family of homomorphisms from the summands determines a unique homomorphism from their direct sum ([[thm-universal-property-of-module-direct-sums]]).

## Proof

**Proof technique:** constructive.

1.1 For each $x\in X$, define the homomorphism $f_x:R\to M$ by $f_x(r)=ru(x)$. [given, construct]

2.1 By [L1], the family $(f_x)$ determines a unique homomorphism $\bar u:R^{(X)}\to M$ with $\bar u\circ\jmath_x=f_x$. [step 1.1, F1, L1]

3.1 Since $e_x=\jmath_x(1_R)$, one has $\bar u(e_x)=f_x(1_R)=u(x)$, and additivity gives the displayed finite-sum formula. [step 2.1, F1]

4.1 Any homomorphism agreeing with $u$ on every $e_x$ agrees with $\bar u$ on every finite linear combination, hence on all of $R^{(X)}$. [step 3.1, F1]

5.1 When $X=\varnothing$, [F1] gives $R^{(X)}=0$ and the unique map $0\to M$, so no nonempty choice is hidden. The construction and uniqueness prove the universal property. [step 1.1, step 2.1, step 3.1, step 4.1, F1, discharge-construct] ∎
