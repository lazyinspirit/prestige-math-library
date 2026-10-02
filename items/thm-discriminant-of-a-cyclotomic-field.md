---
id: thm-discriminant-of-a-cyclotomic-field
kind: theorem
title: Signed discriminant of a cyclotomic field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-cyclotomic-ring-of-integers
  - lem-prime-power-cyclotomic-integral-structure
  - lem-coprime-discriminant-compositum-integral-basis
  - thm-power-basis-discriminant-is-polynomial-discriminant
  - thm-discriminant-as-an-embedding-determinant
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-composita-of-cyclotomic-extensions
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - cor-euler-totient-is-multiplicative
  - def-cyclotomic-extension
  - def-roots-of-unity-in-a-field
  - def-archimedean-embeddings-and-number-field-signature
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Remark 6.6(c) and Proposition 6.2(d)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 6, Remark 6.6(c), pp. 100-101: disc(Q(zeta_n)/Q) = (-1)^{phi(n)/2} n^{phi(n)} / prod_{p|n} p^{phi(n)/(p-1)}; Proposition 6.2(d): the prime-power discriminant is ±p^{p^{r-1}(r(p-1)-1)}."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Theorem 11.6 and Remark 11.7"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 11, pp. 61-63: the discriminant of Q(zeta_N) obtained from the prime-power case and the coprime-discriminant compositum."
---

## Statement

Let $f>1$ be a reduced index, that is $f$ is odd or $4\mid f$, and let
$K=\mathbb Q(\zeta_f)$ for a primitive $f$-th root of unity $\zeta_f$. Then the
signed field discriminant is
$$d_K=(-1)^{\varphi(f)/2}\,\frac{f^{\varphi(f)}}{\prod_{p\mid f}p^{\varphi(f)/(p-1)}},$$
the product being over the primes $p$ dividing $f$; for $f=1$ one has
$d_{\mathbb Q}=1$. The conductor theorem later identifies the reduced index $f$
with the intrinsic conductor of $K$.

## Facts & Assumptions

**Given:** A reduced index $f$ and a primitive $f$-th root of unity
$\zeta=\zeta_f$ in a fixed algebraic closure of $\mathbb Q$, with
$K:=\mathbb Q(\zeta)$ and $n:=[K:\mathbb Q]=\varphi(f)$. In the main case
$f>1$, write $f=p_1^{a_1}\cdots p_r^{a_r}$ with pairwise distinct primes
$p_i$ and $a_i\ge1$, put $e_i:=\varphi(p_i^{a_i})$ and
$K_i:=\mathbb Q(\zeta_{p_i^{a_i}})$, and for $j\le r$ put
$n_j:=p_1^{a_1}\cdots p_j^{a_j}$ and $M_j:=K_1\cdots K_j$.

[F1] $K_i$ has ring of integers $\mathcal O_{K_i}=\mathbb Z[\zeta_{p_i^{a_i}}]$
with the power basis as an integral basis, and
$$|d_{K_i}|=p_i^{\,L_i},\qquad L_i:=p_i^{a_i-1}(a_i(p_i-1)-1)=a_ie_i-\frac{e_i}{p_i-1}$$
([[lem-prime-power-cyclotomic-integral-structure]]).

[F2] Coprime-discriminant compositum: for number fields $A,B$ with
$[AB:\mathbb Q]=[A:\mathbb Q][B:\mathbb Q]$ and $\gcd(d_A,d_B)=1$, the ring of
integers satisfies $\mathcal O_{AB}=\mathcal O_A\mathcal O_B$ and
$$d_{AB}=d_A^{[B:\mathbb Q]}\,d_B^{[A:\mathbb Q]}$$
([[lem-coprime-discriminant-compositum-integral-basis]]).

[F3] For every $m\ge1$, $\mathcal O_{\mathbb Q(\zeta_m)}=\mathbb Z[\zeta_m]$ and
$1,\zeta_m,\dots,\zeta_m^{\varphi(m)-1}$ is an integral basis
([[thm-cyclotomic-ring-of-integers]]); the discriminant of an order is
independent of the chosen integral basis, so it may be computed from this basis
([[def-discriminant-of-a-number-field-basis-and-order]],
[[thm-power-basis-discriminant-is-polynomial-discriminant]]).

[F4] $M_j=\mathbb Q(\zeta_{n_j})$ inside the fixed algebraic closure, with
$[M_j:\mathbb Q]=\varphi(n_j)=\prod_{i\le j}e_i$: this is the compositum
identity $F(\mu_a)F(\mu_b)=F(\mu_{\operatorname{lcm}(a,b)})$ together with
irreducibility of the cyclotomic polynomials and multiplicativity of
$\varphi$ on coprime arguments
([[thm-composita-of-cyclotomic-extensions]],
[[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]],
[[cor-euler-totient-is-multiplicative]],
[[def-cyclotomic-extension]]).

[F5] For an ordered $\mathbb Q$-basis $\alpha_1,\dots,\alpha_n$ of a number
field $L$ with distinct embeddings $\sigma_1,\dots,\sigma_n\colon L\to\mathbb C$
one has $\operatorname{disc}(\alpha_1,\dots,\alpha_n)=\det(\sigma_i(\alpha_j))^{2}$
and the determinant is nonzero
([[thm-discriminant-as-an-embedding-determinant]]).

[F6] A real number that is a root of unity is $\pm1$, of multiplicative order
$1$ or $2$ ([[def-roots-of-unity-in-a-field]]). The signature $(r_1,r_2)$ of a
number field satisfies $r_1+2r_2=[L:\mathbb Q]$
([[def-archimedean-embeddings-and-number-field-signature]]).

## Proof

**Proof technique:** direct.

1.1 In the main case $f>1$, each $p_i^{a_i}$ is at least $3$: if $p_i$ is odd this is clear, and if $p_i=2$ then $4\mid f$ because $f$ is reduced, so $a_i\ge2$. Hence each $K_i$ has degree $e_i\ge2$, and $\varphi(f)=\prod_{i\le r}e_i$ by multiplicativity of $\varphi$ on the coprime factors $p_i^{a_i}$. [F4, given]

1.2 For every $i$ the power-basis computation of [F1] gives $|d_{K_i}|=p_i^{L_i}$ with $L_i=a_ie_i-e_i/(p_i-1)$, and the p_i-adic exponent of the claimed formula is $\varphi(f)a_i-\varphi(f)/(p_i-1)$. [F1, given]

1.3 The field $K=\mathbb Q(\zeta)$ has no real embedding: if $\sigma(K)\subseteq\mathbb R$ for an embedding $\sigma$, then $\sigma(\zeta)\in\mathbb R$ is a root of unity whose order is exactly $f\ge3$, because $\sigma(\zeta)^{m}=1$ if and only if $\zeta^{m}=1$ if and only if $f\mid m$; but by [F6] a real root of unity has order $1$ or $2$, a contradiction. Hence $r_1=0$, complex conjugation acts on the $n$ embeddings as a fixed-point-free involution, and $r_2=n/2=\varphi(f)/2$ by [F6]. [F6, given]

1.4 In the separate case from the Statement with $f=1$, one has $K=\mathbb Q$,
and [F3] gives the integral basis $(1)$ of $\mathcal O_{\mathbb Q}=\mathbb Z$.
Its trace Gram matrix is the $1\times1$ matrix
$[\operatorname{Tr}_{\mathbb Q/\mathbb Q}(1\cdot1)]=[1]$, so its determinant
is $1$; by the discriminant definition in [F3], $d_{\mathbb Q}=1$. [F3]

2.1 By induction on $j$, $|d_{M_j}|=\prod_{i\le j}|d_{K_i}|^{\varphi(n_j)/e_i}$: for $j=1$, $M_1=K_1$ and the exponent is $1$; for $j\ge2$, [F4] gives $[M_{j-1}:\mathbb Q]=\varphi(n_{j-1})$ and $[K_j:\mathbb Q]=e_j$ with $M_j=M_{j-1}K_j$, the discriminants $d_{M_{j-1}}$ and $d_{K_j}$ are coprime because one is $\pm$ a product of powers of $p_1,\dots,p_{j-1}$ and the other is $\pm p_j^{L_j}$, and [F2] then gives $|d_{M_j}|=|d_{M_{j-1}}|^{e_j}|d_{K_j}|^{\varphi(n_{j-1})}$. [F2, F4, step 1.2]

2.2 With respect to the integral basis $1,\zeta,\dots,\zeta^{n-1}$ of [F3], the determinant $\Delta:=\det(\sigma_i(\zeta^{j-1}))$ of [F5] is nonzero and $d_K=\Delta^{2}$. Complex conjugation permutes the index set of the embeddings by a product of $n/2$ transpositions by step 1.3, so $\overline{\Delta}=(-1)^{n/2}\Delta$ and therefore $|\Delta|^{2}=\overline{\Delta}\Delta=(-1)^{n/2}\Delta^{2}=(-1)^{n/2}d_K$; since $|\Delta|^{2}>0$, the sign of $d_K$ is $(-1)^{n/2}=(-1)^{\varphi(f)/2}$. [F3, F5, step 1.3]

3.1 Taking absolute values in the induction of step 2.1 with $j=r$ and using $M_r=K$ and $\varphi(n_r)=\varphi(f)$ gives $|d_K|=\prod_{i\le r}p_i^{\,L_i\varphi(f)/e_i}=\prod_{i\le r}p_i^{\,\varphi(f)\bigl(a_i-1/(p_i-1)\bigr)}=f^{\varphi(f)}/\prod_{i\le r}p_i^{\varphi(f)/(p_i-1)}$. [F4, step 1.2, step 2.1]

4.1 Combining the sign of step 2.2 with the absolute value of step 3.1 gives
$d_K=(-1)^{\varphi(f)/2}f^{\varphi(f)}/\prod_{p\mid f}p^{\varphi(f)/(p-1)}$
for the given reduced index $f>1$; the separate $f=1$ case has
$d_{\mathbb Q}=1$ by step 1.4. These are the cases in the Statement. [step 2.2, step 3.1, step 1.4] ∎

## Remarks

- **Sign and absolute value are computed separately.** The absolute value comes
  from the prime-power absolute discriminants and the coprime-discriminant
  compositum formula; the sign comes from the pairing of complex embeddings.
  Neither the different ideal nor its positive norm is used.
- **Reduced index.** For an unreduced index $2m$ with $m$ odd one has
  $\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)$, and the formula must be applied to
  the reduced index $m$; the statements of this pair therefore exclude
  $f\equiv2\pmod4$.
