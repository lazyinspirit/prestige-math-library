---
id: lem-q-binomial-expansion-for-q-commuting-elements
kind: lemma
title: "The quantum binomial expansion for $q$-commuting elements"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
  - def-q-integer-q-factorial-and-q-multinomial
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
aliases: []
dependency_level: 3
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
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.1.3, printed pp. 307–308, displays (13.1.3.8)–(13.1.3.9): quantum Serre elements and their q-binomial coefficients; the subsequent quasiprimitivity proof invokes q-binomial identities."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed p. 5, display (1.1): Gaussian binomial conventions for q_i=q^{s_i}."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $t$ be an indeterminate over $\mathbb Q$, and let $A$ be a unital associative $\mathbb Q(t)$-algebra. For $N\ge0$ and $0\le r\le N$, set

$$B_{N,r}(t):=\frac{[N]_t!}{[r]_t![N-r]_t!},\qquad [m]_t:=1+t+\cdots+t^{m-1},\quad [m]_t!:=\prod_{k=1}^m[k]_t,\quad [0]_t:=0,\quad [0]_t!:=1,$$

and set $B_{N,r}(t)=0$ when $r<0$ or $r>N$. If $x,y\in A$ satisfy $yx=txy$, then for every $N\ge0$,

$$ (x+y)^N=\sum_{r=0}^{N}B_{N,r}(t)x^ry^{N-r}.$$

For a symmetrizable Cartan datum and $i\in I$, any unital $\mathbb Q(q)$-algebra can be viewed as a $\mathbb Q(t)$-algebra via $t\mapsto q_i^2$. In that algebra, if $yx=q_i^2xy$, then

$$ (x+y)^N=\sum_{r=0}^{N}q_i^{r(N-r)}\binom{N}{r}_i x^ry^{N-r},$$

using the symmetric Gaussian binomials of [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]. If instead $yx=t^{-1}xy$, the same expansion has coefficients $B_{N,r}(t^{-1})=t^{-r(N-r)}B_{N,r}(t)$.

## Facts & Assumptions

**Given:** The conventions above, the Gaussian quotient definitions, and the relation $yx=txy$ when the generic expansion is used.

[F1] The asymmetric $q$-integer and factorial use $[m]_t=1+t+\cdots+t^{m-1}$ and the empty product $[0]_t!=1$; for $k\ge1$, $[k]_t$ is a nonzero polynomial, so the Gaussian factorial quotient is defined in $\mathbb Q(t)$ ([[def-q-integer-q-factorial-and-q-multinomial]]).

[F2] The symmetric Gaussian coefficient satisfies $C_{N,r}=q_i^{-r}C_{N-1,r}+q_i^{N-r}C_{N-1,r-1}$ ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

[F3] The symmetric and asymmetric Gaussian coefficients satisfy $\binom{N}{r}_i=q_i^{-r(N-r)}B_{N,r}(q_i^2)$, with $q_i=q^{d_i}$ and $d_i>0$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F4] Since $q$ is indeterminate and $d_i>0$, $q_i^2=q^{2d_i}$ is transcendental; substitution $t\mapsto q_i^2$ therefore embeds $\mathbb Q(t)$ into $\mathbb Q(q)$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Proof

**Proof technique:** Induct on the power, using the exact q-Pascal coefficient for the chosen commutation order.

1.1 For $k\ge1$, $[k]_{t^{-1}}=t^{-(k-1)}[k]_t$; multiplying for $k=1,\ldots,N$ and dividing the factorials gives $B_{N,r}(t^{-1})=t^{-N(N-1)/2+r(r-1)/2+(N-r)(N-r-1)/2}B_{N,r}(t)=t^{-r(N-r)}B_{N,r}(t)$. The exponent equality follows by expanding the three quadratic terms; for $N=0,r=0$ both coefficients equal $1$. [given, F1, algebra]

1.2 Put $D_{N,r}:=q_i^{r(N-r)}C_{N,r}$. Multiplying the recurrence [F2] by $q_i^{r(N-r)}$ and using [F3] gives $B_{N,r}(q_i^2)=B_{N-1,r}(q_i^2)+(q_i^2)^{N-r}B_{N-1,r-1}(q_i^2)$ for $0\le r\le N$; outside this range all terms vanish. The first exponent becomes $r(N-r-1)$, and the second differs from $(r-1)(N-r)$ by $2(N-r)$. By the injectivity in [F4], this is the generic recurrence $B_{N,r}(t)=B_{N-1,r}(t)+t^{N-r}B_{N-1,r-1}(t)$. [given, F2, F3, F4, algebra]

2.1 For $N=0$ the formula is $1=1$. Suppose it holds for $N-1$. From $yx=txy$, induction on $a$ gives $y^a x=t^a xy^a$: it is true for $a=0$, and $y^{a+1}x=t^a yxy^a=t^{a+1}xy^{a+1}$. Multiplying the $N-1$ expansion on the right by $x+y$ and reindexing the terms from the final $x$ gives the coefficient $B_{N-1,r}(t)+t^{N-r}B_{N-1,r-1}(t)$ at $x^ry^{N-r}$. By step 1.2 this is $B_{N,r}(t)$, proving the generic expansion. Under $t=q_i^2$, [F3] turns this coefficient into $q_i^{r(N-r)}C_{N,r}$ and gives the symmetric formula. [step 1.2, F3, algebra]

3.1 If $yx=t^{-1}xy$, apply the generic expansion of step 2.1 with parameter $t^{-1}$. Step 1.1 rewrites its coefficients as $t^{-r(N-r)}B_{N,r}(t)$, proving the inverse-parameter formula as well. [step 1.1, step 2.1, algebra] ∎
