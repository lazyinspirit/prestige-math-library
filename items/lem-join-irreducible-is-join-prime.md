---
id: lem-join-irreducible-is-join-prime
kind: lemma
title: "Every join-irreducible element of a distributive lattice is join-prime"
status: published
origin: session
deps: [def-lattice-distributive-lattice-and-order-ideal, def-join-irreducible-element]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.212, Lecture 16: Distributive lattices"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/resources/mit18_212s19_lec16/"
pipeline_run: null
---

## Statement

Let $L$ be a finite distributive lattice and let $j\in L$ be join-irreducible. If
$j\le a\vee b$, then $j\le a$ or $j\le b$. Thus $j$ is join-prime.

## Facts & Assumptions

**Given:** A finite distributive lattice $L$, a join-irreducible $j\in L$, and elements $a,b\in L$ with $j\le a\vee b$.

[F1] In a lattice, $x\le y$ exactly when $x\wedge y=x$; distributivity gives $x\wedge(y\vee z)=(x\wedge y)\vee(x\wedge z)$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

[F2] If $j=u\vee v$ and $j$ is join-irreducible, then $j=u$ or $j=v$ ([[def-join-irreducible-element]]).

## Proof

**Proof technique:** direct.

1.1 Since $j\le a\vee b$, one has $j=j\wedge(a\vee b)$. Distributivity rewrites this as $j=(j\wedge a)\vee(j\wedge b)$. [given, F1]

2.1 Join-irreducibility applied to step 1.1 gives $j=j\wedge a$ or $j=j\wedge b$. These equalities are respectively equivalent to $j\le a$ or $j\le b$. [step 1.1, F1, F2]

3.1 Hence every join-irreducible element of a distributive lattice is join-prime. [step 2.1] ∎
