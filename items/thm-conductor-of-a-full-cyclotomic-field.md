---
id: thm-conductor-of-a-full-cyclotomic-field
kind: theorem
title: Conductor of a full cyclotomic field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-conductor-of-a-cyclotomic-field
  - thm-prime-factorisation-in-a-cyclotomic-field
  - thm-decomposition-and-inertia-in-towers
  - cor-orders-of-decomposition-and-inertia-groups
  - thm-totient-of-a-prime-power
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - cor-splitting-fields-are-unique-up-to-base-isomorphism
  - def-cyclotomic-extension
  - def-prime-above-and-residue-degree
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6, Remark 6.6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Remark 6.6(a)-(b), p. 100: Q(zeta_{2m}) = Q(zeta_m) for odd m and the field Q(zeta_n) is determined by the reduced index, with p = 2 the only exception."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 11, Remark 11.7"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Remark 11.7, pp. 61-62: for odd n, -zeta_n is a primitive 2n-th root of unity with Z[zeta_n] = Z[-zeta_n], so Q(zeta_N) cannot distinguish an odd N from 2N; this is exactly the unreduced shape n = 2 times odd."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 1, Theorem 1.1 and Ch. 6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 1, pp. 19-21, and Ch. 6, pp. 95-100: ramification exponents multiply in towers, and Q(zeta_n) contains a primitive m-th root of unity only in the expected cases; used to identify the least admissible index."
---

## Statement

Let $n\ge1$ and let $\mathbb Q(\zeta_n)$ be the $n$-th cyclotomic field.
The cyclotomic conductor of $\mathbb Q(\zeta_n)$ is
$$\begin{cases}n,&n\ \text{odd or }4\mid n,\\ n/2,&n\equiv2\pmod4.\end{cases}$$
In particular $\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)$ for odd $m$, and for
$n=2$ one has $\mathbb Q(\zeta_2)=\mathbb Q$ of conductor $1$.

## Facts & Assumptions

**Given:** An integer $n\ge1$; for every $N\ge1$ the index
$$t(N):=\begin{cases}N,&N\ \text{odd or }4\mid N,\\ N/2,&N\equiv2\pmod4,\end{cases}$$
and the number $r:=t(n)$. Also a primitive $N$-th root of unity $\zeta_N$ for
each $N$.

[F1] Conductor: the cyclotomic conductor of a full cyclotomic field
$K=\mathbb Q(\mu_f)$ is the least positive $f$ that is *admissible*, meaning
that there is a $\mathbb Q$-algebra embedding $K\hookrightarrow F$ into a
splitting field $F$ of $t^{f}-1$ over $\mathbb Q$
([[def-conductor-of-a-cyclotomic-field]]). Splitting fields of $t^{f}-1$ over
$\mathbb Q$ are unique up to $\mathbb Q$-isomorphism and $\mathbb Q(\zeta_f)$ is
one, so $f$ is admissible for $K$ exactly when $K$ embeds in
$\mathbb Q(\zeta_f)$
([[cor-splitting-fields-are-unique-up-to-base-isomorphism]],
[[def-cyclotomic-extension]]).

[F2] For a primitive $r$-th root $\zeta_r$, the polynomial $\Phi_r$ is its
monic minimal polynomial over $\mathbb Q$ and its roots are exactly the
primitive $r$-th roots of unity
([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]],
[[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]]);
hence a $\mathbb Q$-algebra embedding $\mathbb Q(\zeta_r)\hookrightarrow E$
into a field $E$ sends $\zeta_r$ to a primitive $r$-th root of unity
$\xi\in E$, and $\mathbb Q(\xi)$ is the splitting field of $t^{r}-1$ over
$\mathbb Q$ inside $E$, that is, a copy of $\mathbb Q(\zeta_r)$.

[F3] If $m$ is odd then $(-\zeta_m)^{2m}=1$ and $(-\zeta_m)^{m}=-1$, so
$-\zeta_m$ is a primitive $2m$-th root of unity; hence the splitting field of
$t^{2m}-1$ over $\mathbb Q$ is $\mathbb Q(-\zeta_m)=\mathbb Q(\zeta_m)$, that
is, $\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)$
([[def-cyclotomic-extension]]).

[F4] Prime factorisation in a reduced cyclotomic field: for a reduced index $f$
and a rational prime $p$, writing $f=p^{a}m$ with $\gcd(p,m)=1$, one has
$p\mathcal O_{\mathbb Q(\zeta_f)}=(P_1\cdots P_g)^{\varphi(p^{a})}$ with
pairwise distinct primes $P_i$; in particular every prime of
$\mathcal O_{\mathbb Q(\zeta_f)}$ above $p$ occurs with exponent
$\varphi(p^{a})=\varphi(p^{v_p(f)})$ in $p\mathcal O_{\mathbb Q(\zeta_f)}$
([[thm-prime-factorisation-in-a-cyclotomic-field]]).

[F5] Tower of ramification groups: for a tower of number fields $M/L/K$ with
$M/K$ and $L/K$ finite Galois and primes $\mathfrak Q\mid\mathfrak P\mid
\mathfrak p$, the restriction maps fit in the exact sequence
$1\to I(\mathfrak Q/\mathfrak P)\to I(\mathfrak Q/\mathfrak p)\to
I(\mathfrak P/\mathfrak p)\to1$
([[thm-decomposition-and-inertia-in-towers]]); and for a finite Galois
extension the inertia group order is the ramification exponent,
$|I(\mathfrak P/\mathfrak p)|=e(\mathfrak P/\mathfrak p)$
([[cor-orders-of-decomposition-and-inertia-groups]]).

[F6] Euler totient of prime powers: $\varphi(1)=1$ and, for $a\ge1$,
$\varphi(p^{a})=p^{a-1}(p-1)$ for every prime $p$
([[thm-totient-of-a-prime-power]]); hence $a\mapsto\varphi(p^{a})$ is strictly
increasing on $a\ge1$, and $\varphi(p^{a})>1$ for $a\ge1$ except for $p=2$,
$a=1$.

[F7] For every $f\ge1$ the extension $\mathbb Q(\zeta_f)/\mathbb Q$ is Galois
with group isomorphic to $(\mathbb Z/f)^{\times}$
([[cor-the-galois-group-of-a-rational-cyclotomic-field]],
[[def-cyclotomic-extension]]).

[F8] A nonzero prime $\mathfrak P$ of a number-field ring of integers lies
above a prime $\mathfrak p$ of the base ring when its contraction is exactly
$\mathfrak p$
([[def-prime-above-and-residue-degree]]).

## Proof

**Proof technique:** direct.

1.1 For every $N\ge1$ the index $t(N)$ is reduced and $\mathbb Q(\zeta_N)=\mathbb Q(\zeta_{t(N)})$: this is immediate by definition when $N$ is odd or $4\mid N$, and if $N=2m$ with $m$ odd then $t(N)=m$ is odd and [F3] gives $\mathbb Q(\zeta_N)=\mathbb Q(\zeta_m)$. [F3]

1.2 If $\mathbb Q(\zeta_r)\hookrightarrow E$ is a $\mathbb Q$-algebra embedding into a field $E$, then the image $\xi$ of $\zeta_r$ is a primitive $r$-th root of unity and the subfield $\mathbb Q(\xi)$ is a splitting field of $t^{r}-1$ inside $E$, hence a copy of $\mathbb Q(\zeta_r)$; in particular an embedding $\mathbb Q(\zeta_r)\hookrightarrow\mathbb Q(\zeta_s)$ exhibits $\mathbb Q(\zeta_r)$ as a subfield of $\mathbb Q(\zeta_s)$. [F2]

2.1 By step 1.1, $\mathbb Q(\zeta_n)=\mathbb Q(\zeta_r)$ is a splitting field of $t^{r}-1$ over $\mathbb Q$ that contains $\zeta_r$, so the identity embedding shows that $r$ is admissible for $\mathbb Q(\zeta_n)$; hence the conductor of $\mathbb Q(\zeta_n)$ is at most $r$. [F1, step 1.1]

2.2 Let $g\ge1$ be admissible for $\mathbb Q(\zeta_n)$ and put $s:=t(g)$. By step 1.1, $s$ is reduced and $\mathbb Q(\zeta_g)=\mathbb Q(\zeta_s)$, so admissibility gives a $\mathbb Q$-algebra embedding $\mathbb Q(\zeta_n)\hookrightarrow\mathbb Q(\zeta_s)$, i.e., since $\mathbb Q(\zeta_n)=\mathbb Q(\zeta_r)$ by step 1.1, an embedding $\mathbb Q(\zeta_r)\hookrightarrow\mathbb Q(\zeta_s)$; step 1.2 then makes $\mathbb Q(\zeta_r)$ a subfield of $\mathbb Q(\zeta_s)$. [F1, step 1.1, step 1.2]

3.1 Let $p$ be a prime with $p\mid r$, and write $L=\mathbb Q(\zeta_r)$ and $M=\mathbb Q(\zeta_s)$, so step 2.2 gives $L\subseteq M$. By [F4], choose a prime $\mathfrak Q$ of $\mathcal O_M$ above $p$; define $\mathfrak P:=\mathfrak Q\cap\mathcal O_L$. The inclusion $\mathcal O_L\hookrightarrow\mathcal O_M$ makes $\mathfrak P$ the inverse image of the prime $\mathfrak Q$, hence $\mathfrak P$ is prime. Since $p\in\mathfrak Q$, one has $p\in\mathfrak P$, so $\mathfrak P\ne(0)$; moreover $\mathfrak P\cap\mathbb Z=(\mathfrak Q\cap\mathcal O_L)\cap\mathbb Z=\mathfrak Q\cap\mathbb Z=(p)$, so [F8] says $\mathfrak P$ lies above $p$. By [F4], the ramification exponents of these primes are $e(\mathfrak P/p)=\varphi(p^{v_p(r)})$ and $e(\mathfrak Q/p)=\varphi(p^{v_p(s)})$ (with $v_p(s)=0$ allowed and $\varphi(1)=1$). By [F7], both $L/\mathbb Q$ and $M/\mathbb Q$ are Galois, so [F5] applies to $M/L/\mathbb Q$ and makes $I(\mathfrak P/p)$ a quotient of $I(\mathfrak Q/p)$; therefore $\varphi(p^{v_p(r)})$ divides $\varphi(p^{v_p(s)})$. [F4, F5, F7, F8, step 2.2]

4.1 For every prime $p$ the exponents of $p$ in the reduced indices $r$ and $s$ lie in $\{0,1,2,\dots\}$ when $p$ is odd and in $\{0\}\cup\{k\ge2\}$ when $p=2$; by [F6] the function $a\mapsto\varphi(p^{a})$ is strictly increasing on these sets and satisfies $\varphi(p^{0})=1<\varphi(p^{2})=2$ for $p=2$ and $1<\varphi(p)=p-1$ for odd $p$, so $\varphi(p^{v_p(r)})\le\varphi(p^{v_p(s)})$ implies $v_p(r)\le v_p(s)$. Step 3.1 therefore gives $v_p(r)\le v_p(s)$ for every prime $p\mid r$ — vacuously when $r=1$ — so $r\mid s$; and $s=t(g)$ equals $g$ or $g/2$, so $s\le g$ and hence $r\le g$. [F6, step 3.1]

5.1 Step 2.1 shows that $r$ is admissible and step 4.1 shows that every admissible $g$ satisfies $g\ge r$; hence the least admissible index — the conductor of $\mathbb Q(\zeta_n)$ — equals $r=t(n)$. Consequently the conductor is $n$ when $n$ is odd or $4\mid n$ and is $n/2$ when $n\equiv2\pmod4$; in particular $\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)$ for odd $m$ by step 1.1, and for $n=2$ the conductor is $t(2)=1$, with $\mathbb Q(\zeta_2)=\mathbb Q$. [F1, step 2.1, step 4.1] ∎

## Remarks

- **Dependency reconciliation (Step 3a observation).** The comparison of
  ramification exponents inside the inclusion
  $\mathbb Q(\zeta_r)\subseteq\mathbb Q(\zeta_s)$ is supplied here by the
  published tower theorem [[thm-decomposition-and-inertia-in-towers]] together
  with [[cor-orders-of-decomposition-and-inertia-groups]]; the local
  monogenic/DVR route sketched in the scaffold is not needed, and no use is
  made of any general ideal factorisation theorem beyond the pair's own
  [[thm-prime-factorisation-in-a-cyclotomic-field]].
- **The excluded shape.** For $n=2m$ with $m$ odd one has
  $\mathbb Q(\zeta_n)=\mathbb Q(\zeta_m)$, so $n$ is never the conductor;
  Remark 11.7 of Conrad-Landesman makes the same point via
  $-\zeta_m$ and $\mathbb Z[\zeta_m]=\mathbb Z[-\zeta_m]$.
