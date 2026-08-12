---
id: thm-universal-property-of-module-direct-sums
kind: theorem
title: "Universal property of a direct sum of modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-direct-sum-of-a-family-of-modules, def-module-homomorphism-kernel-image-and-cokernel]
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

Let $(M_i)_{i\in I}$ be left $R$-modules and $N$ a left $R$-module. For every family of homomorphisms $f_i:M_i\to N$, there is a unique homomorphism
$$f:\bigoplus_{i\in I}M_i\longrightarrow N$$
such that $f\circ\jmath_i=f_i$ for every $i$. It is given by
$$f((m_i))=\sum_{i\in\operatorname{supp}(m)}f_i(m_i).$$
For $I=\varnothing$, this is the unique map $0\to N$.

## Facts & Assumptions

**Given:** A family $(M_i)_{i\in I}$ of left $R$-modules, a left $R$-module $N$, and homomorphisms $f_i:M_i\to N$.

[F1] Elements of $\bigoplus_iM_i$ have finite support, and $\jmath_i$ is the coordinate inclusion ([[def-direct-sum-of-a-family-of-modules]]).

[F2] A module homomorphism preserves addition and scalar multiplication ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** constructive.

1.1 Define $f((m_i)):=\sum_{i\in\operatorname{supp}(m)}f_i(m_i)$; the sum is finite by [F1], and padding it by zero terms shows it is independent of the chosen finite set containing the support. [F1, construct]

2.1 Addition and scalar multiplication may be checked on the finite union of the relevant supports, so [F2] gives $f(m+m')=f(m)+f(m')$ and $f(rm)=rf(m)$. [step 1.1, F1, F2]

2.2 For $x\in M_i$, step 1.1 gives $f(\jmath_i(x))=f_i(x)$, so $f\circ\jmath_i=f_i$. [step 1.1, F1]

2.3 Every $m=(m_i)$ equals the finite sum $\sum_{i\in\operatorname{supp}(m)}\jmath_i(m_i)$. Hence any homomorphism $g$ satisfying $g\circ\jmath_i=f_i$ has $g(m)=\sum_i f_i(m_i)=f(m)$ and therefore equals $f$. [step 1.1, F1, F2]

3.1 If $I=\varnothing$, the direct sum is $0$ by [F1], the formula is the empty sum, and the construction and uniqueness still apply. Thus the universal property holds for every index set. [step 1.1, step 2.1, step 2.2, step 2.3, F1, discharge-construct] ∎
