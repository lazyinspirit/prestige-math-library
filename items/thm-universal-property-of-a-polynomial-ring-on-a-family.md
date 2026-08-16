---
id: thm-universal-property-of-a-polynomial-ring-on-a-family
kind: theorem
title: "Universal property of a polynomial ring on an arbitrary family of indeterminates"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-ring-on-a-family-is-a-commutative-ring, def-ring-homomorphism, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

## Statement

Let $R,S$ be commutative rings, let $\varphi:R\to S$ be a ring homomorphism,
and let $(s_i)_{i\in I}$ be a family in $S$. There is a unique ring homomorphism

$$\Phi:R[x_i:i\in I]\longrightarrow S$$

whose restriction to $R$ is $\varphi$ and which satisfies $\Phi(x_i)=s_i$ for
every $i\in I$.

## Facts & Assumptions

**Given:** Commutative rings $R,S$, a ring homomorphism $\varphi:R\to S$, and a family $(s_i)_{i\in I}$ in $S$.

[L1] The finite convolution construction is a commutative ring containing $R$ ([[thm-polynomial-ring-on-a-family-is-a-commutative-ring]]).

[L2] A ring homomorphism preserves addition, multiplication, and the multiplicative identity ([[def-ring-homomorphism]]).

[L3] Finite sums may be reindexed and evaluated in either order over finite products ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 For $a\in\mathcal M(I)$ define $s^a:=\prod_{i\in\operatorname{supp}(a)}s_i^{a_i}$, and for $c=\sum_a c_ax^a$ define $\Phi(c):=\sum_a\varphi(c_a)s^a$; both expressions are finite and the empty product is $1_S$. [L1, construct]

2.1 Pointwise addition gives $\Phi(c+d)=\Phi(c)+\Phi(d)$, while $s^{a+b}=s^as^b$ and finite reindexing give $\Phi(cd)=\Phi(c)\Phi(d)$. [step 1.1, L3, algebra]

3.1 The zero monomial gives $\Phi(1)=1$, constants give $\Phi(r)=\varphi(r)$, and the one-supported exponent family gives $\Phi(x_i)=s_i$; hence $\Phi$ is the required ring homomorphism by [L2]. [step 1.1, step 2.1, L2]

4.1 Any ring homomorphism with these values must send $c_ax^a$ to $\varphi(c_a)s^a$ and therefore, by finite additivity, must equal the formula in step 1.1. [step 1.1, L2] ∎
