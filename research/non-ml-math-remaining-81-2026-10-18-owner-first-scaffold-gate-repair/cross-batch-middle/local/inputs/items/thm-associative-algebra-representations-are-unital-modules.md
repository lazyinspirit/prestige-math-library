---
id: thm-associative-algebra-representations-are-unital-modules
kind: theorem
title: Associative algebra representations are unital modules
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-unital-associative-algebra-representation
  - def-left-and-right-modules
  - def-algebra-over-a-commutative-ring
  - def-vector-space
  - def-vector-space-of-linear-maps
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, §1.1, printed p. 5"
      url: "https://arxiv.org/pdf/0901.0827"
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations, §3.2, printed pp. 29–30"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
---

## Statement

Let $k$ be a field, $A$ a unital associative $k$-algebra, and $V$ a
$k$-vector space. There is a bijection between unital representations
$\rho:A\to\operatorname{End}_k(V)$ of [[def-unital-associative-algebra-representation]]
and $k$-bilinear left $A$-module actions $A\times V\to V$, $(a,v)\mapsto a\cdot v$,
for which $(ab)\cdot v=a\cdot(b\cdot v)$ and $1_A\cdot v=v$. The maps are
$a\cdot v=\rho(a)(v)$ and $\rho(a)(v)=a\cdot v$. Here $k$-bilinear means
linear in each variable with respect to the given $k$-vector structures; the
module axioms are those of [[def-left-and-right-modules]].

## Facts & Assumptions

**Given:** A field $k$, a unital associative $k$-algebra $A$, a $k$-vector space
$V$, and the representation and action data in the Statement.

[F1] [[def-unital-associative-algebra-representation]]: a representation is a $k$-linear map $\rho:A\to\operatorname{End}_k(V)$ preserving the unit and multiplication.

[F2] [[def-left-and-right-modules]]: a unital left module action is additive in both variables, associative, and satisfies $1_Av=v$.

[F3] [[def-vector-space]]: scalar multiplication on each $k$-vector space is compatible with addition and with multiplication in $k$.

[F4] [[def-vector-space-of-linear-maps]]: $\operatorname{End}_k(V)$ has pointwise vector-space operations on its $k$-linear maps.

[F5] [[def-algebra-over-a-commutative-ring]]: the multiplication and unit of a $k$-algebra are compatible with its specified $k$-algebra structure.

## Proof

1.1 Given a representation $\rho$, define $a\cdot v:=\rho(a)(v)$. For fixed $a$, this is $k$-linear in $v$ because $\rho(a)\in\operatorname{End}_k(V)$; for fixed $v$, it is $k$-linear in $a$ because $\rho$ is $k$-linear, $A$ has its specified $k$-vector structure, and evaluation at $v$ respects the pointwise vector-space operations of [F4]. Thus the action is $k$-bilinear. [given, F1, F3, F4, F5, construct]

1.2 Conversely, given a $k$-bilinear unital left $A$-module action, define $\rho(a)(v):=a\cdot v$. Bilinearity in $v$ makes each $\rho(a)$ a $k$-linear endomorphism, and bilinearity in $a$ makes $\rho$ $k$-linear. [given, F2, F3, F4, F5, construct]

2.1 For the action constructed in step 1.1, multiplicativity and preservation of the identity in [F1] give $(ab)\cdot v=a\cdot(b\cdot v)$ and $1_A\cdot v=v$. For the map constructed in step 1.2, the unital left-module laws in [F2] give $\rho(ab)=\rho(a)\circ\rho(b)$ and $\rho(1_A)=\operatorname{id}_V$, which are the representation conditions in [F1]. [given, F1, F2, step 1.1, step 1.2, algebra]

3.1 Starting with $\rho$, the first construction returns $a\cdot v=\rho(a)(v)$; starting with an action, the second returns $\rho(a)(v)=a\cdot v$. Equality for every $a,v$ proves that the constructions are inverse and hence give the stated bijection. [step 1.1, step 1.2, step 2.1, algebra] ∎
