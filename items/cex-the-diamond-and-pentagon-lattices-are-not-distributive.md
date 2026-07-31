---
id: cex-the-diamond-and-pentagon-lattices-are-not-distributive
kind: counterexample
title: "The diamond $M_3$ and pentagon $N_5$ violate distributivity by explicit joins and meets"
status: published
origin: session
deps: [def-lattice-distributive-lattice-and-order-ideal]
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

## Statement refuted

Every finite lattice is distributive.

## Facts & Assumptions

**Given:** The diamond $M_3=\{0,1,a,b,c\}$, where $a,b,c$ are incomparable atoms, and the pentagon $N_5=\{0,a,b,c,1\}$, where $0<a<b<1$, $0<c<1$, and $c$ is incomparable with $a,b$.

[F1] Distributivity requires $x\wedge(y\vee z)=(x\wedge y)\vee(x\wedge z)$ for all elements ([[def-lattice-distributive-lattice-and-order-ideal]]).

## Counterexample

**Proof technique:** direct.

1.1 In $M_3$, one has $b\vee c=1$, $a\wedge b=0$, and $a\wedge c=0$. Therefore $a\wedge(b\vee c)=a$, while $(a\wedge b)\vee(a\wedge c)=0$. [given, F1]

1.2 In $N_5$, one has $a\vee c=1$, $b\wedge a=a$, and $b\wedge c=0$. Therefore $b\wedge(a\vee c)=b$, while $(b\wedge a)\vee(b\wedge c)=a$. [given, F1]

2.1 Since $a\ne0$ in $M_3$ and $a\ne b$ in $N_5$, each lattice violates the distributive identity in [F1]. Both are finite, so either one refutes the Statement. [step 1.1, step 1.2, F1] ∎
