---
id: thm-cyclotomic-ring-of-integers
kind: theorem
title: Ring of integers of every cyclotomic field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-prime-power-cyclotomic-integral-structure
  - lem-coprime-discriminant-compositum-integral-basis
  - thm-composita-of-cyclotomic-extensions
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient
  - def-cyclotomic-extension
  - def-integral-basis-and-power-integral-basis
  - def-ring-of-integers-of-a-number-field
  - cor-euler-totient-is-multiplicative
  - thm-bezout-identity
  - lem-coprime-divides-product
  - def-coprime
  - def-linear-basis
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6, Theorem 6.4 and Remark 6.6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 6, Theorem 6.4(a)-(b) with proof, pp. 99-100, and Remark 6.6: O_{Q(zeta_n)} = Z[zeta_n] for every n, via the prime-power case and a coprime-discriminant compositum."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Theorem 11.6 with Lemma 11.8 and Theorem 11.9"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 11, pp. 61-63: Z[zeta_N] = O_{Q(zeta_N)} assembled from the prime-power case Q(zeta_a)Q(zeta_b) = Q(zeta_{ab}) for coprime a,b and the coprime-discriminant compositum theorem."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

For every $n\ge1$, with $\zeta_n$ a primitive $n$-th root of unity in a fixed
algebraic closure of $\mathbb Q$,
$$\mathcal O_{\mathbb Q(\zeta_n)}=\mathbb Z[\zeta_n],$$
and $1,\zeta_n,\dots,\zeta_n^{\varphi(n)-1}$ is an integral basis of
$\mathcal O_{\mathbb Q(\zeta_n)}$.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a primitive $n$-th root of unity $\zeta_n$ in
a fixed algebraic closure $\Omega$ of $\mathbb Q$. When $n>1$, write
$$n=p_1^{a_1}\cdots p_r^{a_r},\qquad i=1,\dots,r,$$
with $p_1,\dots,p_r$ pairwise distinct primes and $a_i\ge1$, put
$m_i:=n/p_i^{a_i}$ and $\zeta_i:=\zeta_n^{\,m_i}$, and put
$K_i:=\mathbb Q(\zeta_i)$. For $j=1,\dots,r$ put
$n_j:=p_1^{a_1}\cdots p_j^{a_j}$ and $M_j:=K_1\cdots K_j$.

[F1] $\Phi_n\in\mathbb Z[t]$ is monic of degree $\varphi(n)$,
$\Phi_n(\zeta_n)=0$, and $\Phi_n$ is irreducible in $\mathbb Q[t]$
([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]],
[[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]). Hence
$\Phi_n$ is the minimal polynomial of $\zeta_n$, so
$[\mathbb Q(\zeta_n):\mathbb Q]=\varphi(n)$ and
$1,\zeta_n,\dots,\zeta_n^{\varphi(n)-1}$ are linearly independent over
$\mathbb Q$, and $\mathbb Q(\zeta_n)$ is a cyclotomic extension of
$\mathbb Q$ of order $n$ ([[def-cyclotomic-extension]]).

[F2] For a field $F$ and positive integers $m,m'$ such that
$\operatorname{char}F$ divides neither $m$ nor $m'$, the compositum inside a splitting field of
$t^{\operatorname{lcm}(m,m')}-1$ satisfies
$F(\mu_m)F(\mu_{m'})=F(\mu_{\operatorname{lcm}(m,m')})$; over $F=\mathbb Q$,
the characteristic hypothesis is vacuous
([[thm-composita-of-cyclotomic-extensions]]).

[F3] Euler's totient is multiplicative on coprime arguments, so by induction
on $j$ one has $\varphi(n_j)=\varphi(p_1^{a_1})\cdots\varphi(p_j^{a_j})$
([[cor-euler-totient-is-multiplicative]]).

[F4] For each prime power $p_i^{a_i}$ the prime-power cyclotomic structure
theorem gives
$$\mathcal O_{K_i}=\mathbb Z[\zeta_i],$$
with $1,\zeta_i,\dots,\zeta_i^{\varphi(p_i^{a_i})-1}$ an integral basis of
$\mathcal O_{K_i}$, and with the field discriminant satisfying
$|d_{K_i}|=p_i^{\,N_i}$ for the integer
$N_i:=p_i^{a_i-1}(a_i(p_i-1)-1)\ge0$
([[lem-prime-power-cyclotomic-integral-structure]]).

[F5] Coprime-discriminant compositum: if $K,L$ are number fields inside a
common algebraic closure with $[KL:\mathbb Q]=[K:\mathbb Q][L:\mathbb Q]$ and
$\gcd(d_K,d_L)=1$, then $\mathcal O_{KL}=\mathcal O_K\mathcal O_L$, the
products of an integral basis of $\mathcal O_K$ and an integral basis of
$\mathcal O_L$ form an integral basis of $\mathcal O_{KL}$, and
$d_{KL}=d_K^{[L:\mathbb Q]}d_L^{[K:\mathbb Q]}$
([[lem-coprime-discriminant-compositum-integral-basis]]).

[F6] Bézout: if $m,q\in\mathbb Z$ have $\gcd(m,q)=1$, there is $e\in\mathbb Z$
with $em\equiv1\pmod q$ ([[thm-bezout-identity]], [[def-coprime]]).

[F7] If $a,b,c\in\mathbb Z$ satisfy $a\mid c$, $b\mid c$ and $\gcd(a,b)=1$,
then $ab\mid c$; consequently, if finitely many pairwise coprime integers each
divide $c$, their product divides $c$
([[lem-coprime-divides-product]]).

[F8] An integral basis of $\mathcal O_K$ is an ordered $\mathbb Z$-basis of
$\mathcal O_K$ ([[def-integral-basis-and-power-integral-basis]],
[[def-ring-of-integers-of-a-number-field]]).

## Proof

**Proof technique:** direct.

1.1 For $n=1$ one has $\zeta_1=1$, $\varphi(1)=1$, $\mathbb Q(\zeta_1)=\mathbb Q$ and $\mathcal O_{\mathbb Q}=\mathbb Z$, so $\mathcal O_{\mathbb Q(\zeta_1)}=\mathbb Z[\zeta_1]=\mathbb Z$ and the single element $1=\zeta_1^{0}$ is a $\mathbb Z$-basis. For $n>1$ we keep the notation of the Given; each $\zeta_i=\zeta_n^{m_i}$ has order $p_i^{a_i}$, because $\zeta_n$ has order $n$; hence $\zeta_i$ is a primitive $p_i^{a_i}$-th root of unity and $K_i=\mathbb Q(\zeta_i)$ is a prime-power cyclotomic field as in [F4]. [F1, F4, given]

1.2 By induction on $j$ the compositum is $M_j=\mathbb Q(\zeta_{n_j})$ and $[M_j:\mathbb Q]=\varphi(n_j)=\prod_{i\le j}\varphi(p_i^{a_i})$: for $j=1$ this is $K_1=\mathbb Q(\zeta_{p_1^{a_1}})$ with degree $\varphi(p_1^{a_1})$ by [F1]; and if it holds for $j-1$, then $M_j=M_{j-1}K_j=\mathbb Q(\mu_{n_{j-1}})\mathbb Q(\mu_{p_j^{a_j}})=\mathbb Q(\mu_{n_j})$ by [F2] because $\operatorname{lcm}(n_{j-1},p_j^{a_j})=n_j$, while $[M_j:\mathbb Q]=\varphi(n_j)=\varphi(n_{j-1})\varphi(p_j^{a_j})=[M_{j-1}:\mathbb Q][K_j:\mathbb Q]$ by [F1] and [F3]. In particular $[M_r:\mathbb Q]=\varphi(n)=[\mathbb Q(\zeta_n):\mathbb Q]$ and $M_r=\mathbb Q(\zeta_n)$ inside $\Omega$. [F1, F2, F3]

1.3 The two rings agree: $\mathbb Z[\zeta_1]\cdots\mathbb Z[\zeta_r]=\mathbb Z[\zeta_n]$. Indeed each $\zeta_i=\zeta_n^{m_i}$ lies in $\mathbb Z[\zeta_n]$, which gives the inclusion $\subseteq$. Conversely, for each $i$ the numbers $m_i$ and $p_i^{a_i}$ are coprime, so [F6] provides $e_i\in\mathbb Z$ with $e_im_i\equiv1\pmod{p_i^{a_i}}$; since $p_i^{a_i}\mid m_j$ for $j\ne i$, the integer $\sum_j e_jm_j-1$ is divisible by every $p_i^{a_i}$, and these are pairwise coprime with product $n$, so $n\mid\sum_j e_jm_j-1$ by [F7]. Hence $\zeta_n^{\sum_j e_jm_j}=\zeta_n$, that is $\zeta_n=\prod_j(\zeta_n^{m_j})^{e_j}=\prod_j\zeta_j^{e_j}\in\mathbb Z[\zeta_1]\cdots\mathbb Z[\zeta_r]$, giving the reverse inclusion. [F6, F7, given]

2.1 Applying step 1.2 and the compositum theorem [F5] inductively on $j$ gives $\mathcal O_{M_j}=\mathcal O_{K_1}\cdots\mathcal O_{K_j}=\mathbb Z[\zeta_1]\cdots\mathbb Z[\zeta_j]$, with the products of the individual power bases as an integral basis, and $|d_{M_j}|=\prod_{i\le j}p_i^{\,N_i\cdot[M_j:K_i]}$ is a product of powers of the distinct primes $p_1,\dots,p_j$. Indeed, for $j=1$ this is [F4]; and for the induction step $M_j=M_{j-1}K_j$ satisfies the degree hypothesis by step 1.2, while $\gcd(d_{M_{j-1}},d_{K_j})=1$ because the first discriminant is $\pm$ a product of powers of $p_1,\dots,p_{j-1}$ and the second is $\pm p_j^{\,N_j}$ by [F4], so [F5] converts $\mathcal O_{M_{j-1}}\mathcal O_{K_j}$ into $\mathcal O_{M_j}$ and preserves the basis statement. [F4, F5, step 1.2]

3.1 By steps 1.2, 1.3 and 2.1 with $j=r$, $\mathcal O_{\mathbb Q(\zeta_n)}=\mathcal O_{M_r}=\mathbb Z[\zeta_1]\cdots\mathbb Z[\zeta_r]=\mathbb Z[\zeta_n]$. Every power $\zeta_n^{k}$ is a $\mathbb Z$-linear combination of $1,\zeta_n,\dots,\zeta_n^{\varphi(n)-1}$: this is clear for $k<\varphi(n)$, and the monic relation $\Phi_n(\zeta_n)=0$ of degree $\varphi(n)$ expresses $\zeta_n^{\varphi(n)}$ as such a combination, after which induction on $k$ handles all larger powers; hence $1,\zeta_n,\dots,\zeta_n^{\varphi(n)-1}$ spans the $\mathbb Z$-module $\mathbb Z[\zeta_n]=\mathcal O_{\mathbb Q(\zeta_n)}$, and by [F1] these $\varphi(n)$ elements are also linearly independent over $\mathbb Q$, hence over $\mathbb Z$. A linearly independent spanning set of a $\mathbb Z$-module is a $\mathbb Z$-basis ([[def-linear-basis]]), so $1,\zeta_n,\dots,\zeta_n^{\varphi(n)-1}$ is an ordered $\mathbb Z$-basis of $\mathcal O_{\mathbb Q(\zeta_n)}$, that is, an integral basis by [F8]. [F1, F8, step 1.2, step 1.3, step 2.1] ∎

## Remarks

- **Where coprimality is used.** The prime-power discriminants are (up to sign)
  powers of the distinct primes $p_i$, so the coprime-discriminant hypothesis
  of the compositum theorem holds at every step. The degree hypothesis is
  supplied by the compositum identity $M_j=\mathbb Q(\zeta_{n_j})$ together
  with multiplicativity of $\varphi$ on coprime arguments; neither hypothesis
  is automatic.
- **The Bezout step is the only place where the product structure of $n$
  enters additively.** It shows that $\zeta_n$ is a monomial in the $\zeta_i$,
  so the ring generated by all the local roots is already $\mathbb Z[\zeta_n]$.
