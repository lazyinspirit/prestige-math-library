---
id: thm-quadratic-tower-characterization-of-algebraic-constructibility
kind: theorem
title: "A real number is algebraically constructible exactly when it lies in a finite tower of real quadratic adjunctions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-algebraically-constructible-real-number, cor-element-algebraic-iff-simple-extension-finite, thm-of-square-roots, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Theorem 1.37 through consequence 1.41"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

A real number $x$ is algebraically constructible if and only if there is a tower

$$\mathbb Q=K_0\subseteq K_1\subseteq\cdots\subseteq K_r\subseteq\mathbb R$$

with $x\in K_r$ and, for every $i$, an element $a_i\in K_{i-1}$ with $a_i>0$ such that

$$K_i=K_{i-1}(\sqrt{a_i})\qquad\text{and}\qquad[K_i:K_{i-1}]=2.$$

The tower may have length zero.

## Facts & Assumptions

**Given:** The algebraically constructible field $\mathcal C\subseteq\mathbb R$.

[L1] The field $\mathcal C$ is the smallest real subfield containing $\mathbb Q$ and closed under positive square roots ([[def-algebraically-constructible-real-number]]).

[L2] An element algebraic over a field generates a finite simple extension, with degree equal to its minimal-polynomial degree ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L3] Every positive real element has a unique positive square root ([[thm-of-square-roots]]).

[L4] The minimal polynomial of an algebraic element divides every polynomial over the base field vanishing at it ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Let $T$ be the union of all terminal fields of finite towers obtained from $\mathbb Q$ by adjoining positive square roots, omitting any adjunction whose square root is already present. The empty tower puts $\mathbb Q$ in $T$. [given, L3]

1.2 Conversely, induction along any such tower shows $K_i\subseteq\mathcal C$: the base $\mathbb Q$ lies in $\mathcal C$, and square-root closure puts each generator and hence its generated field in $\mathcal C$. Thus $T\subseteq\mathcal C$. [L1]

2.1 If $x,y\in T$, append the generators of their two towers to one another. Any redundant adjunction is omitted; every remaining step has degree $2$, because its generator $\sqrt a$ is a root of $t^2-a$ over the base, so by [L4] its minimal polynomial divides $t^2-a$ and has degree at most $2$, while degree $1$ would put $\sqrt a$ in the base, which the omission of redundant adjunctions excludes; [L2] then gives $[K_{i-1}(\sqrt a):K_{i-1}]=2$. Thus $x-y$, $xy$, and $x^{-1}$ for $x\ne0$ lie in a common terminal field, so $T$ is a subfield. [step 1.1, L2, L4]

3.1 If $0<a\in T$, append $\sqrt a$ to a tower containing $a$, or do nothing if it is already present. Hence $T$ is closed under positive square roots. By minimality in [L1], $\mathcal C\subseteq T$. [step 1.1, step 2.1, L1, L3]

4.1 Therefore $T=\mathcal C$. Membership in $T$ is exactly the existence of a displayed finite quadratic tower, including the zero-length case. [step 3.1, step 1.2] ∎
