---
id: lem-quantum-pascal-recurrence-and-gaussian-integrality
kind: lemma
title: "The quantum Pascal recurrences, the Gauss product formula and Gaussian integrality"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
  - def-polynomial-ring-over-a-commutative-ring
  - def-the-laurent-polynomial-ring
aliases: []
dependency_level: 2
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed p. 5, display (1.1): the Gaussian quotient convention for q_i=q^{s_i}."
    - title: "Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras, Journal of Lie Theory 13 (2003), 21–64"
      url: "https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf"
      locator: "§2.1, printed p. 32, Lemma 2.3 proof: the shuffle verification invokes q-binomial identities proved by induction; the identities are proved locally here."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Fix a symmetrizable Cartan datum and $i\in I$, and use the conventions of [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]. Write $C_{m,r}:=\binom{m}{r}_i$, with $C_{m,r}=0$ when $r<0$ or $r>m$.

(i) **Pascal recurrences.** For $m\ge1$ and every integer $r$,

$$C_{m,r}=q_i^{-r}C_{m-1,r}+q_i^{m-r}C_{m-1,r-1}=q_i^rC_{m-1,r}+q_i^{r-m}C_{m-1,r-1}.$$

(ii) **Symmetry.** For $0\le r\le m$, $C_{m,r}=C_{m,m-r}$.

(iii) **Gauss product formula.** For every $N\ge0$, in the polynomial ring $\mathbb Q(q)[z]$,

$$\prod_{j=0}^{N-1}(1+q_i^{2j}z)=\sum_{r=0}^{N}q_i^{r(N-1)}C_{N,r}z^r.$$

Consequently, for $N\ge1$,

$$\sum_{r=0}^{N}(-1)^rq_i^{r(N-1)}C_{N,r}=0.$$

(iv) **Integrality.** For $0\le r\le m$,

$$C_{m,r}\in q_i^{-r(m-r)}\mathbb Z[q_i^2]\subseteq\mathbb Z[q_i^{\pm1}].$$

Thus every Gaussian quotient is a Laurent polynomial in $q_i$ with integer coefficients, and the Pascal recurrences hold in that Laurent polynomial ring.

## Facts & Assumptions

**Given:** A symmetrizable Cartan datum, a fixed $i\in I$, and the symmetric $q_i$-integer, factorial and Gaussian quotient from [[def-quantum-integers-factorials-and-divided-powers-at-q-i]].

[F1] $q_i=q^{d_i}$ for an indeterminate $q$ and positive integer $d_i$; all symmetric $q_i$-factorials in the quotient are nonzero ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] $R[z]$ is the polynomial ring over a commutative ring $R$, and $\mathbb Z[t^{\pm1}]$ consists of finite Laurent sums with integer coefficients ([[def-polynomial-ring-over-a-commutative-ring]], [[def-the-laurent-polynomial-ring]]).

## Proof

**Proof technique:** Derive the recurrences from a symmetric $q_i$-integer identity, then use induction.

1.1 For $0\le r\le m$, the numerator identity $q_i^{-r}(q_i^{m-r}-q_i^{-(m-r)})+q_i^{m-r}(q_i^r-q_i^{-r})=q_i^m-q_i^{-m}$ gives $[m]_i=q_i^{-r}[m-r]_i+q_i^{m-r}[r]_i$. [given, F1, algebra]

2.1 For $1\le r\le m-1$, multiply the identity of step 1.1 by $[m-1]_i!/([r]_i![m-r]_i!)$ and use the factorial quotient to obtain $C_{m,r}=q_i^{-r}C_{m-1,r}+q_i^{m-r}C_{m-1,r-1}$. The same formula holds at $r=0,m$ by $C_{m,0}=C_{m,m}=1$ and the out-of-range zero convention; for $r<0$ or $r>m$ every term is zero. The factorial definition gives $C_{m,r}=C_{m,m-r}$ for $0\le r\le m$; applying the first recurrence at $m-r$ and using this symmetry gives the second recurrence. [step 1.1, F1, algebra]

3.1 Put $G_{m,r}:=q_i^{r(m-r)}C_{m,r}$. The first recurrence in step 2.1 gives, for $1\le r\le m-1$, $G_{m,r}=G_{m-1,r}+q_i^{2(m-r)}G_{m-1,r-1}$. Since $G_{m,0}=G_{m,m}=1$, induction on $m$ shows $G_{m,r}$ is a polynomial in $q_i^2$ with integer coefficients; this proves $C_{m,r}\in q_i^{-r(m-r)}\mathbb Z[q_i^2]$. Because $d_i>0$ and $q$ is indeterminate, distinct powers of $q_i$ are linearly independent over $\mathbb Z$, so this evaluation embeds the Laurent polynomial ring and gives the stated inclusion and Laurent-polynomial recurrences. [step 2.1, F1, F2, algebra]

3.2 Let $P_N(z):=\prod_{j=0}^{N-1}(1+q_i^{2j}z)$. For $N=0$ both sides of the Gauss formula are $1$. If it holds for $N-1$, the coefficient of $z^r$ in $P_N$ is $q_i^{r(N-2)}C_{N-1,r}+q_i^{(r-1)(N-2)+2(N-1)}C_{N-1,r-1}$; by the first recurrence in step 2.1 this equals $q_i^{r(N-1)}C_{N,r}$, since $(r-1)(N-2)+2(N-1)=r(N-1)+N-r$. Thus induction proves the product formula in $\mathbb Q(q)[z]$. [step 2.1, F2, algebra]

4.1 For $N\ge1$, evaluate the formula of step 3.2 at $z=-1$. The factor with $j=0$ makes the product zero, so its right side is the alternating Gaussian sum in the statement and is zero. This proves the final assertion and completes all parts. [step 3.2, algebra] ∎
