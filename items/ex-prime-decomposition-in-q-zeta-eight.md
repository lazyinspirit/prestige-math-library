---
id: ex-prime-decomposition-in-q-zeta-eight
kind: example
title: Prime decomposition in Q(zeta_8)
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-discriminant-of-a-cyclotomic-field
  - cor-unramified-prime-decomposition-in-a-cyclotomic-field
  - cor-complete-splitting-in-a-cyclotomic-field
  - def-unit-group-modulo-n-and-euler-totient
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
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6, Remark 6.6(c)"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Remark 6.6(c), p. 100: disc(Q(zeta_8)) = 8^4/2^4 = 2^8, the only ramified prime being 2."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.18"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.18, pp. 143-144: for odd p the order of p modulo 8 is the residue degree, namely 1 for p = 1 mod 8 and 2 for p = 3,5,7 mod 8."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

For $K=\mathbb Q(\zeta_8)$ the discriminant is $d_K=2^{8}$. Every odd rational
prime is unramified; its residue degree is $1$ if it is $1\pmod8$ and is $2$
otherwise, with respectively four or two primes above it. In particular an odd
prime splits completely in $K$ exactly when it is $1\pmod8$.

## Facts & Assumptions

**Given:** A primitive eighth root of unity $\zeta_8$ and
$K=\mathbb Q(\zeta_8)$, a reduced index since $4\mid8$
([[def-cyclotomic-extension]]).

[F1] Discriminant formula: for the reduced index $f=8>1$,
$$d_K=(-1)^{\varphi(8)/2}\frac{8^{\varphi(8)}}{\prod_{p\mid8}p^{\varphi(8)/(p-1)}}$$
([[thm-discriminant-of-a-cyclotomic-field]]).

[F2] Unramified decomposition: for the reduced index $8$ and a prime
$\ell\nmid8$, every prime above $\ell$ has residue degree
$\operatorname{ord}_8(\ell)$ and there are
$\varphi(8)/\operatorname{ord}_8(\ell)=4/\operatorname{ord}_8(\ell)$ of them
([[cor-unramified-prime-decomposition-in-a-cyclotomic-field]]).

[F3] Complete splitting: for $\ell\nmid8$, the prime $\ell$ splits completely
in $K$ if and only if $\ell\equiv1\pmod8$
([[cor-complete-splitting-in-a-cyclotomic-field]]).

[F4] $\varphi(8)=4$ and the unit group is
$(\mathbb Z/8)^{\times}=\{1,3,5,7\}$; the class $1$ has order $1$, while
$3^{2}\equiv5^{2}\equiv7^{2}\equiv1\pmod8$ with $3,5,7\not\equiv1\pmod8$, so
those three classes have order $2$
([[def-unit-group-modulo-n-and-euler-totient]], [[def-order-in-a-group]]).

## Verification

**Proof technique:** direct.

1.1 Since $\varphi(8)=4$ and the only prime divisor of $8$ is $2$, the formula gives $d_K=(-1)^{2}\cdot8^{4}/2^{4}=4096/16=256=2^{8}$. [F1, F4]

1.2 For an odd prime $\ell$ the class of $\ell$ modulo $8$ lies in $\{1,3,5,7\}$; by [F4] it has order $1$ exactly for the class $1$, and order $2$ for the classes $3,5,7$. [F4]

2.1 By [F2] with $\ell$ odd, the primes above $\ell$ number $4/\operatorname{ord}_8(\ell)$ and each has residue degree $\operatorname{ord}_8(\ell)$. Hence $\ell\equiv1\pmod8$ gives $4/1=4$ primes of residue degree $1$ (residue fields $\mathbb F_\ell$), and by [F3] this is exactly the complete splitting condition; each of $\ell\equiv3,5,7\pmod8$ gives $4/2=2$ primes, of residue degree $2$ (residue fields $\mathbb F_{\ell^{2}}$). [F2, F3, step 1.2]

3.1 Summary: $d_K=2^{8}$, every odd prime is unramified, and its splitting type in $K$ depends only on $\ell\bmod8$: four degree-one primes for $\ell\equiv1$, two degree-two primes for $\ell\equiv3,5,7$; in all cases $efg=4=[K:\mathbb Q]$. [step 1.1, step 2.1] ∎

## Remarks

- **Only $2$ ramifies.** The discriminant $2^{8}$ has the single prime
  divisor $2$, and indeed $2\mid8$ with $8$ reduced; this is the pair's
  ramification criterion at the conductor $8$.
- **Relation to the second supplement.** Since $\mathbb Q(\zeta_8)$ contains
  $\mathbb Q(\sqrt2)$, the degree-two prime divisors of an odd
  $\ell\equiv3,5\pmod8$ refine the statement
  $\left(\frac2\ell\right)=-1$ of the second supplement; for
  $\ell\equiv1,7\pmod8$ the quadratic subfield splits.
