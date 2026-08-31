---
id: lem-normalized-two-square-count-is-multiplicative
kind: lemma
title: "The normalized two-square count is multiplicative with the expected prime-power values"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-square-representation-function,
       def-multiplicative-arithmetic-function,
       def-coprime,
       lem-three-mod-four-prime-dividing-two-square-sum]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

The arithmetic function $f(n):=r_2(n)/4$ is multiplicative. More precisely,

$$
f(2^a)=1,
$$

$$
f(p^a)=a+1 \quad\text{for } p\equiv1\pmod4,
$$

and

$$
f(q^a)=\begin{cases}1,&a\text{ even},\\0,&a\text{ odd},\end{cases}\quad\text{for } q\equiv3\pmod4.
$$

## Facts & Assumptions

**Given:** A natural exponent $a$, a prime $p\equiv1\pmod4$, a prime $q\equiv3\pmod4$, and coprime positive integers $m,n$.

## Proof

**Proof technique:** direct.

1.1 The ordered-sign representations of $1$ are $(\pm1,0)$ and $(0,\pm1)$, so $r_2(1)=4$ and therefore $f(1)=1$. [given, algebra]

2.1 Write a positive integer $N$ as $$ N=2^\alpha\prod_{i=1}^r p_i^{e_i}\prod_{j=1}^s q_j^{b_j}, $$ where the $p_i\equiv1\pmod4$, the $q_j\equiv3\pmod4$, and all listed primes are distinct. If some $b_j$ is odd and $N=x^2+y^2$, write $N=q_j^{2k+1}M$ with $q_j\nmid M$. Repeatedly applying [[lem-three-mod-four-prime-dividing-two-square-sum]] shows that $x=q_j^kx_0$ and $y=q_j^ky_0$, so $q_jM=x_0^2+y_0^2$. One more application of the same lemma forces $q_j\mid x_0$ and $q_j\mid y_0$, hence $q_j^2\mid q_jM$, contradiction. Therefore $r_2(N)=0$ whenever some $b_j$ is odd. If every $b_j$ is even, the cited Hackman theorem gives $$ \frac{r_2(N)}4=\prod_{i=1}^r(e_i+1). $$ Applying this to $N=2^a$, $N=p^a$, and $N=q^a$ yields $$ \frac{r_2(2^a)}4=1,\qquad \frac{r_2(p^a)}4=a+1,\qquad \frac{r_2(q^a)}4=\begin{cases}1,&a\text{ even},\\0,&a\text{ odd}.\end{cases} $$ [step 1.1, given]

3.1 Let $f(n):=r_2(n)/4$. If $\gcd(m,n)=1$, the prime supports of $m$ and $n$ are disjoint. If step 2.1 gives $f(m)=0$ or $f(n)=0$, then some prime $q\equiv3\pmod4$ has odd exponent in one factor, hence still odd exponent in $mn$, so step 2.1 also gives $f(mn)=0=f(m)f(n)$. Otherwise every prime $q\equiv3\pmod4$ occurs to even exponent in both $m$ and $n$, so also in $mn$, and the primes $p\equiv1\pmod4$ occurring in $mn$ are exactly those occurring in one factor or the other, with the same exponents. Step 2.1 therefore factors the nonzero case as $$ f(mn)=\prod_{p^e\parallel m,\ p\equiv1(4)}(e+1) \prod_{p^{e'}\parallel n,\ p\equiv1(4)}(e'+1)=f(m)f(n). $$ Together with $f(1)=1$ from step 1.1, this is exactly the multiplicativity condition of [[def-multiplicative-arithmetic-function]]. [step 1.1, step 2.1, given, algebra]

4.1 Steps 1.1, 2.1, and 3.1 prove the stated prime-power values and multiplicativity. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- The load-bearing sourced input is Hackman Chapter K.III.1's exact formula for $r_2(N)/4$. Steps 2.1 and 3.1 use that formula, read in the library's ordered-sign convention, to obtain both the prime-power values and the multiplicativity statement.
