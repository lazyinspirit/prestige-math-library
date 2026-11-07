---
id: lem-vinogradov-local-congruence-toolkit
kind: lemma
title: "Newton identities and Vinogradov's local congruence count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-vinogradov-mean-value-Jsk
  - thm-vinogradov-mean-value-is-solution-count
  - def-prime
  - thm-bezout-identity
  - lem-int-cancellation
  - lem-integer-part
  - def-factorial-and-falling-factorial
  - cor-symmetric-group-has-factorial-cardinality-again
  - lem-continuous-torus-orthogonality-for-integer-frequencies
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 42–46, Lemmas 24.1–24.4; proof of Theorem 24.5, pp. 47–51."
---

## Statement

For a positive integer $r$, $r!$ denotes the usual factorial of its corresponding natural number.

For real $X\ge1$, $J_{b,k}(X)$ is the $2b$-th torus mean of $\sum_{n\le X}e(\sum_{j=1}^k\alpha_jn^j)$, equivalently the number of ordered pairs of $b$-tuples in $[1,X]$ with equal power sums through degree $k$.

For integers $k,b\ge1$, let $N_{k,b}(X)$ be the number
$$N_{k,b}(X):=\#\left\{(m_1,\ldots,m_b,n_1,\ldots,n_b):1\le m_i,n_i\le X,\ \sum_{i=1}^b m_i^j=\sum_{i=1}^b n_i^j\ (1\le j\le k)\right\}.$$
Thus $N_{k,b}(X)=J_{b,k}(X)$ under the mean-value convention. For $b\le k$, $J_{b,k}(X)\le b!X^b$. For $b\ge k$, $J_{b,k}(X)\le k!X^{2b-k}$. If $p$ is prime with $p>k$, $h=(h_1,\ldots,h_k)$ is an integer vector, and $A_I(p,h)$ counts the $k$-tuples $m_i$ in an integer interval $I$ of diameter less than $p^k$ that are pairwise distinct modulo $p$ and satisfy
$$\sum_{i=1}^k m_i^j\equiv h_j\pmod {p^j}\qquad(1\le j\le k),$$
then $A_I(p,h)\le k!p^{k(k-1)/2}$. These count formulas agree with the mean-value convention of $J_{b,k}$. If $I$ is any finite interval of at most $\lfloor X\rfloor$ integers and $h\in\mathbb Z^k$, the number of ordered pairs $u,v\in I^b$ satisfying $\sum_i u_i^j-\sum_i v_i^j=h_j$ for $1\le j\le k$ is at most $J_{b,k}(X)$.

## Statement references

[[lem-integer-part]]

[[def-factorial-and-falling-factorial]]

[[cor-symmetric-group-has-factorial-cardinality-again]]

[Montgomery–Vaughan, Lemmas 24.1–24.4 and Theorem 24.5 proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** Integers $k,b\ge1$, real $X\ge1$, and, for the congruence assertion, a prime $p>k$, an integer vector $h$, and an integer interval $I$ of diameter less than $p^k$.

[F1] The integral mean $J_{b,k}(X)$ equals the number of integer solutions to the equal-power-sum system ([[def-vinogradov-mean-value-Jsk]], [[thm-vinogradov-mean-value-is-solution-count]]).

[F2] For a prime $p$ and an integer $a$ not divisible by $p$, Bézout's identity supplies an inverse of $a$ modulo every $p^u$ ([[def-prime]], [[thm-bezout-identity]]).

[F3] The normalized integral of an integer-frequency torus character is $1$ at zero frequency and $0$ otherwise ([[lem-continuous-torus-orthogonality-for-integer-frequencies]]).

[F4] A product of nonzero integers is nonzero, so a product polynomial over $\mathbb Z$ has the stated root-matching property ([[lem-int-cancellation]]).

[F5] The natural factorial is $r!=1\cdot2\cdots r$, and the symmetric group on $r$ objects has exactly $r!$ elements ([[def-factorial-and-falling-factorial]], [[cor-symmetric-group-has-factorial-cardinality-again]]).

[F6] For real $X$, $\lfloor X\rfloor$ is the unique integer with $\lfloor X\rfloor\le X<\lfloor X\rfloor+1$ ([[lem-integer-part]]).

## Proof

**Proof technique:** Newton identities, root matching modulo prime powers, and orthogonality counts.

1.1 For a $k$-tuple $m=(m_1,\ldots,m_k)$ put $Q_m(z)=\prod_i(z-m_i)$ and write its coefficients using the elementary symmetric functions $\sigma_j(m)$. Also put $E_m(t)=\prod_i(1-m_it)=\sum_{j=0}^k(-1)^j\sigma_j(m)t^j$ and $s_j(m)=\sum_i m_i^j$, with $\sigma_0=1$. As formal power series, $$-tE_m'(t)=E_m(t)\sum_{\ell\ge1}s_\ell(m)t^\ell,$$ because $-tE_m'(t)/E_m(t)=\sum_i m_it/(1-m_it)=\sum_{\ell\ge1}s_\ell(m)t^\ell$. Comparing coefficients of $t^j$ gives $$j\sigma_j(m)=\sum_{\ell=1}^j(-1)^{\ell-1}\sigma_{j-\ell}(m)s_\ell(m).$$ Induction on $j$ shows equal first $k$ power sums give equal coefficients; if $p>k$, congruence of those sums modulo $p^u$ gives coefficient congruence modulo $p^u$, since each $j\le k$ is invertible modulo $p^u$ by [F2]. [given, F2, algebra]

2.1 If $b\le k$, equality of the first $k$ power sums makes the monic polynomials with roots $m_i$ and $n_i$ equal by step 1.1. Substituting $m_1$ into the equal product polynomials makes $\prod_i(m_1-n_i)=0$; [F4] shows some factor vanishes, so choose $n_j=m_1$. Reorder the $n_i$ and write the equal polynomials as $(z-m_1)A(z)=(z-m_1)B(z)$. If $A-B$ were nonzero with highest nonzero coefficient $c_d$ at degree $d$, then $(z-m_1)(A-B)$ would have coefficient $c_d\ne0$ at degree $d+1$, contradicting the polynomial identity. Hence $A=B$, and induction matches the remaining roots. Thus each solution is determined by an ordered $m$-tuple and a permutation of it. By [F5] there are at most $b!$ such reorderings, and by [F6] there are $\lfloor X\rfloor^b\le X^b$ ordered $m$-tuples, so the number of solutions is at most $b!X^b$. If $b\ge k$, put $S(\alpha)=\sum_{1\le n\le X}e(\sum_{j=1}^k\alpha_jn^j)$. The integral expression in [F1] and $|S(\alpha)|\le\lfloor X\rfloor$ give $$J_{b,k}(X)\le X^{2b-2k}J_{k,k}(X)\le X^{2b-2k}k!X^k=k!X^{2b-k}.$$ The first inequality follows pointwise from $|S|^{2b}=|S|^{2b-2k}|S|^{2k}$. [F1, F4, F5, step 1.1, algebra]

2.2 For fixed $h$, lift each residue $h_j\pmod {p^j}$ to an integer $g_j\pmod {p^k}$. There are $p^{k-j}$ lifts for coordinate $j$, hence $p^{\sum_{j=1}^k(k-j)}=p^{k(k-1)/2}$ lift vectors. For one fixed lift vector $g$, any two ordered solutions $m,n$ of $s_j\equiv g_j\pmod {p^k}$ have $Q_m\equiv Q_n\pmod {p^k}$ by step 1.1. Evaluating at $n_i$ shows $\prod_r(n_i-m_r)\equiv0\pmod {p^k}$. Since the $m_r$ are distinct modulo $p$, exactly one factor is divisible by $p$; all other factors are units modulo $p^k$ by [F2], so that factor is divisible by $p^k$. Since both entries lie in $I$ and its diameter is less than $p^k$, this gives $n_i=m_r$. Distinctness makes this matching a permutation, so at most $k!$ ordered solutions occur for each lift vector. Multiplying by the number of lifts proves the asserted bound. [step 1.1, F2, algebra]

3.1 For an interval $I$ of at most $\lfloor X\rfloor$ integers and $h\in\mathbb Z^k$, put $S_I(\alpha)=\sum_{n\in I}e(\sum_{j=1}^k\alpha_jn^j)$. By [F3], the number of pairs with difference vector $h$ is the Fourier coefficient $\int_{[0,1]^k}|S_I(\alpha)|^{2b}e(-h\cdot\alpha)\,d\alpha$, so its absolute value is at most $\int|S_I|^{2b}$. Orthogonality [F3] identifies the latter with the number of equal-power-sum pairs in $I$. Translate $I$ to $[1,|I|]$; the binomial theorem shows this preserves equality of all power sums. Inclusion into $[1,\lfloor X\rfloor]$ then bounds the count by $J_{b,k}(X)$ using [F1]. [given, F1, F3, algebra] ∎

