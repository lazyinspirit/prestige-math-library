---
id: ex-arithmetic-of-q-zeta-five
kind: example
title: Arithmetic of Q(zeta_5)
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-cyclotomic-ring-of-integers
  - thm-discriminant-of-a-cyclotomic-field
  - cor-total-ramification-in-a-prime-power-cyclotomic-field
  - cor-unramified-prime-decomposition-in-a-cyclotomic-field
  - cor-complete-splitting-in-a-cyclotomic-field
  - def-inertia-group-of-a-prime
  - cor-orders-of-decomposition-and-inertia-groups
  - def-order-in-a-group
  - def-cyclotomic-extension
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6, Proposition 6.2 and Remark 6.6(c)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Proposition 6.2, pp. 96-98: O_{Q(zeta_p)} = Z[zeta_p], (p) = (1 - zeta_p)^{p-1} totally ramified; Remark 6.6(c), p. 100: disc(Q(zeta_5)) = 5^3 = 125."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Chs. 10-12"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 10, Theorem 10.1 (Z[zeta_p] = O_K and total ramification at p), Ch. 12, pp. 63-65 (Frobenius and residue degrees for unramified primes)."
verification:
  precheck: pass
---

## Example

For $K=\mathbb Q(\zeta_5)$ one has $\mathcal O_K=\mathbb Z[\zeta_5]$ and
$d_K=5^{3}=125$. The prime $5$ is totally ramified:
$(5)=(1-\zeta_5)^{4}$ is a fourth power of the unique prime above $5$, whose
residue field is $\mathbb F_5$. The prime $2$ is unramified with a single prime
above it of residue degree $4$ (residue field $\mathbb F_{16}$) and trivial
inertia group; and $11$ splits completely into four degree-one primes.

## Facts & Assumptions

**Given:** A primitive fifth root of unity $\zeta=\zeta_5$ and
$K=\mathbb Q(\zeta)$, of degree $\varphi(5)=4$
([[def-cyclotomic-extension]]).

[F1] $\mathcal O_K=\mathbb Z[\zeta]$, with integral basis
$1,\zeta,\zeta^{2},\zeta^{3}$
([[thm-cyclotomic-ring-of-integers]]).

[F2] Discriminant: for the reduced index $f=5$,
$d_K=(-1)^{\varphi(5)/2}5^{\varphi(5)}/\prod_{p\mid5}p^{\varphi(5)/(p-1)}$
([[thm-discriminant-of-a-cyclotomic-field]]).

[F3] Total ramification at a prime-power level: with $\lambda=1-\zeta$,
$5\mathcal O_K=(\lambda)^{\varphi(5)}=(\lambda)^{4}$, and $\lambda\mathcal O_K$
is the unique prime of $\mathcal O_K$ above $5$, with residue field
$\mathbb F_5$
([[cor-total-ramification-in-a-prime-power-cyclotomic-field]]).

[F4] Unramified decomposition: for the reduced index $5$ and a prime
$\ell\nmid5$, every prime above $\ell$ has residue degree
$\operatorname{ord}_5(\ell)$ and there are
$\varphi(5)/\operatorname{ord}_5(\ell)=4/\operatorname{ord}_5(\ell)$ of them
([[cor-unramified-prime-decomposition-in-a-cyclotomic-field]]).

[F5] Complete splitting: for $\ell\nmid5$, the prime $\ell$ splits completely
in $K$ if and only if $\ell\equiv1\pmod5$
([[cor-complete-splitting-in-a-cyclotomic-field]]).

[F6] For finite Galois extensions the inertia group at a prime has order equal
to the ramification exponent, $|I(P/p)|=e(P/p)$, and $P$ is unramified over $p$
if and only if its inertia group is trivial
([[def-inertia-group-of-a-prime]],
[[cor-orders-of-decomposition-and-inertia-groups]]).

## Verification

**Proof technique:** direct.

1.1 Since $\varphi(5)=4$, the discriminant formula gives $d_K=(-1)^{2}\cdot5^{4}/5^{4/4}=5^{4}/5=5^{3}=125$. [F2]

1.2 The multiplicative order of $2$ modulo $5$ is $4$: the powers of $2$ modulo $5$ are $2,4,3,1$, so $\operatorname{ord}_5(2)=4$. [F4]

1.3 The class $11\equiv1\pmod5$ is the identity of $(\mathbb Z/5)^{\times}$. [F5]

1.4 By [F3], $5\mathcal O_K=(\lambda)^{4}$ with $\lambda\mathcal O_K$ the unique prime above $5$ and residue field $\mathbb F_5$; its ramification exponent is $4=[K:\mathbb Q]$, so $5$ is totally ramified and its inertia group at $\lambda$ has order $4$, the full Galois group. [F3, F6]

2.1 By [F4] and step 1.2 applied with $\ell=2$, there is exactly $4/4=1$ prime above $2$, of residue degree $4$; its residue field has $2^{4}=16$ elements, and since $2$ is unramified its inertia group is trivial by [F6], so $e=1, f=4, g=1$ with $efg=4=[K:\mathbb Q]$. [F4, F6, step 1.2]

2.2 By [F5] and step 1.3, $11$ splits completely in $K$: there are $\varphi(5)=4$ distinct primes above $11$, each of ramification exponent $1$ and residue degree $1$. [F5, step 1.3]

3.1 Collecting the results: $\mathcal O_K=\mathbb Z[\zeta_5]$ with $1,\zeta,\zeta^{2},\zeta^{3}$ an integral basis, $d_K=125$, the prime $5$ is totally ramified with $(5)=(1-\zeta)^{4}$, the prime $2$ has one prime above it of residue degree $4$ and trivial inertia, and $11$ splits into four degree-one primes. [F1, step 1.1, step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **Unramified decomposition has three cases.** For a prime $\ell\ne5$,
  the orders modulo $5$ are $1,2,4$ for the classes $1,4,\{2,3\}$,
  respectively. Thus [F4] gives four degree-one primes, two degree-two
  primes, or one degree-four prime. In particular $2$ is inert, while
  $19\equiv4\pmod5$ gives two primes, each of residue degree $2$.
- **Frobenius orders.** The arithmetic Frobenius at $2$ has order $4$ and
  generates the full group $(\mathbb Z/5)^{\times}$, while the Frobenius at
  $11$ is trivial, which is complete splitting in the sense of
  [[cor-complete-splitting-in-a-cyclotomic-field]].
