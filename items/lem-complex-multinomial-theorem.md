---
id: lem-complex-multinomial-theorem
kind: lemma
title: The multinomial theorem for finitely many complex variables
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
proof_strategy: direct
deps:
  - def-canonical-natural
  - def-complex-integer-powers
  - def-factorial-and-falling-factorial
  - def-finite-sum-in-a-commutative-monoid
  - def-monoid-finite-product
  - def-multinomial-coefficient
  - def-nat-addition
  - def-nat-multiplication
  - def-nat-order
  - def-semigroup-and-monoid
  - lem-binomial-theorem-over-complex-numbers
  - lem-nat-mult-cancellative
  - lem-power-laws
  - thm-binomial-closed-formula
  - thm-complex-numbers-form-a-field
  - thm-induction-principle
  - thm-multinomial-theorem
  - lem-finite-sum-reindexing-and-fubini
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pending
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition
      url: https://math.mit.edu/~rstan/ec/ec1.pdf
      locator: >-
        §1.2, printed pp. 26–27 (PDF pp. 26–27): the multinomial coefficient
        factorial formula (1.23) and the multinomial expansion following (1.24).
        Stanley states the expansion and leaves its proof to the reader; the
        complete complex-field proof is supplied here.
---

## Statement

Let $m,n\in\mathbb N$, let $\mathcal W(n,m)$ and $\binom n\alpha$ be as in [[def-multinomial-coefficient]], and let $z_0,\ldots,z_{m-1}\in\mathbb C$. Write $\iota_{\mathbb C}:\mathbb N\to\mathbb C$ for the canonical natural of [[def-canonical-natural]]. Then

$$\left(\sum_{i<m}z_i\right)^n=\sum_{\alpha\in\mathcal W(n,m)}\iota_{\mathbb C}\!\left(\binom n\alpha\right)\prod_{i<m}z_i^{\alpha_i}.$$

For every $\alpha\in\mathcal W(n,m)$, the same coefficient satisfies
$$\iota_{\mathbb C}\!\left(\binom n\alpha\right)\prod_{i<m}\iota_{\mathbb C}(\alpha_i!)=\iota_{\mathbb C}(n!).$$
The sum on the right is the finite sum in the additive commutative monoid of $\mathbb C$; the statement includes $m=0$ and $n=0$.

## Facts & Assumptions

[F1] $\mathcal W(n,m)$ is finite and $\binom n\alpha$ is a natural number. When $m=0$, $\mathcal W(0,0)=\{()\}$ and $\mathcal W(n,0)=\varnothing$ for $n\ge1$ ([[def-multinomial-coefficient]], [[thm-multinomial-theorem]]).

[F2] For $x,y\in\mathbb C$ and $j\in\mathbb N$, $(x+y)^j=\sum_{k\le j}\iota_{\mathbb C}\!\left(\binom jk\right)x^ky^{j-k}$ ([[lem-binomial-theorem-over-complex-numbers]]).

[F3] For $\alpha\in\mathcal W(n,m)$, $\binom n\alpha\prod_{i<m}\alpha_i!=n!$; and if $j\le n$, then $j+(n-j)=n$ and $\binom nj\,j!\,(n-j)!=n!$ ([[def-nat-order]], [[thm-multinomial-theorem]], [[thm-binomial-closed-formula]]).

[F4] Every factorial $j!$ is a nonzero natural number ([[def-factorial-and-falling-factorial]]).

[F5] Multiplication in $\mathbb N$ cancels a common nonzero factor ([[lem-nat-mult-cancellative]]).

[F6] The canonical natural $\iota_{\mathbb C}$ is defined by $\iota_{\mathbb C}(0)=0$ and $\iota_{\mathbb C}(j+1)=\iota_{\mathbb C}(j)+1$; complex integer powers use $z^0=1$ and $z^{j+1}=z^jz$ ([[def-canonical-natural]], [[def-complex-integer-powers]]).

[F7] The additive structure of $\mathbb C$ is a commutative monoid. Its finite sums over finite sets are independent of enumeration and invariant under bijective reindexing; finite products in the multiplicative monoid use the same finite-list recursion ([[def-semigroup-and-monoid]], [[thm-complex-numbers-form-a-field]], [[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]], [[def-monoid-finite-product]]).

[F8] The natural operations satisfy $a+0=a$, $a+(j+1)=(a+j)+1$, $a\cdot0=0$, and $a\cdot(j+1)=a\cdot j+a$ ([[def-nat-addition]], [[def-nat-multiplication]]).

[F9] Complex field arithmetic is associative and distributive, and integer powers of nonzero elements obey the usual exponent laws ([[thm-complex-numbers-form-a-field]], [[lem-power-laws]]).

[F10] Induction on $\mathbb N$ is valid ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on the number of variables, with the complex binomial theorem in the inductive step.

**Given:** Naturals $m,n$, the finite index set $\mathcal W(n,m)$, and complex numbers $z_i$ for $i<m$.

1.1 The canonical natural preserves addition and multiplication in $\mathbb C$. For fixed $a\in\mathbb N$, induction [F10] on $b$ proves $\iota_{\mathbb C}(a+b)=\iota_{\mathbb C}(a)+\iota_{\mathbb C}(b)$: the base case uses $a+0=a$, and the successor case uses $a+(b+1)=(a+b)+1$ and the recursion in [F6]. A second induction on $b$ proves $\iota_{\mathbb C}(ab)=\iota_{\mathbb C}(a)\iota_{\mathbb C}(b)$: at $b=0$ both sides are $0$, and at the successor use $a(b+1)=ab+a$, the first identity, and distributivity in [F9]. Also $\iota_{\mathbb C}(1)=1$. Applying [F3] and the multiplicative property just proved successively along the finite product recursion [F7] gives the coefficient identity in the statement. [F3, F6, F7, F8, F9, F10, given]

1.2 For $m=0$, the left side is $0^n$. If $n=0$, both sides equal $1$: the right side has the single empty tuple, coefficient $\binom00=1$, and empty product $1$. If $n\ge1$, the right side is an empty sum and the left side is $0$; this proves the formula in dimension zero. [F1, F6, given]

1.3 Fix $m$ and assume the formula holds for this dimension for every exponent $j\in\mathbb N$ and every $m$-tuple of complex numbers. [ih]

2.1 Let $z_0,\ldots,z_m\in\mathbb C$, put $S=\sum_{i<m}z_i$, and fix $n\in\mathbb N$. The complex binomial theorem [F2], followed by the induction hypothesis [step 1.3] for each $j\le n$, expands $(S+z_m)^n$ as the finite double sum over $0\le j\le n$ and $\beta\in\mathcal W(j,m)$ whose summand is $\iota_{\mathbb C}\!\left(\binom nj\right)\iota_{\mathbb C}\!\left(\binom j\beta\right)\left(\prod_{i<m}z_i^{\beta_i}\right)z_m^{\,n-j}$. [F2, F7, step 1.3, given]

3.1 For every pair $(j,\beta)$ in step 2.1, let $\alpha=(\beta_0,\ldots,\beta_{m-1},n-j)\in\mathcal W(n,m+1)$. This is a bijection from the pair index set to $\mathcal W(n,m+1):$ its inverse takes the first $m$ coordinates as $\beta$ and their natural sum as $j$. Put $P=(\prod_{i<m}\beta_i!)(n-j)!$. By [F3], $\binom n\alpha P=n!$; also [F3] gives $\binom j\beta\prod_{i<m}\beta_i!=j!$, so $\binom nj\binom j\beta P=\binom nj\,j!\,(n-j)!=n!$. The factor $P$ is nonzero, since $\binom n\alpha P=n!\ne0$ by [F4]; hence [F5] gives $\binom n\alpha=\binom nj\binom j\beta$. Step 1.1 carries this identity to the canonical naturals in $\mathbb C$, and the power laws [F6], [F9] identify the accompanying monomial with $\prod_{i<m+1}z_i^{\alpha_i}$. [F1, F3, F4, F5, F6, F7, F9, step 1.1, step 2.1]

4.1 Reindex the finite double sum of step 2.1 along the bijection in step 3.1. Its coefficients and monomials become exactly those in the asserted formula for $m+1$ variables. The base case step 1.2 and this inductive step prove the statement for every $m$ by [F7] and induction. If all variables are zero and $n>0$, every $\alpha\in\mathcal W(n,m)$ has a positive coordinate, so every monomial on the right vanishes; if $n=0$, step 1.2 checks $0^0=1$. For $m=1$, the sole index is $(n)$ and its multinomial coefficient is $1$ by the coloring definition, so the formula reduces to $z_0^n=z_0^n$. [F1, F3, F6, F7, F10, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, discharge-induction] ∎
