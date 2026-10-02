---
id: ex-prime-decomposition-in-q-zeta-twelve
kind: example
title: Prime decomposition in Q(zeta_12)
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-discriminant-of-a-cyclotomic-field
  - thm-prime-factorisation-in-a-cyclotomic-field
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
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6 and Ch. 8"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 6, Theorem 6.4(c) and Remark 6.6(c), pp. 99-100: the discriminant formula disc(Q(zeta_n)) = (-1)^{phi(n)/2} n^{phi(n)}/prod_{p|n} p^{phi(n)/(p-1)} and the ramified prime powers. Ch. 8, Example 8.18, pp. 143-144: unramified residue degree equals the order of l modulo n."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Chs. 10-11"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 10, Theorem 10.1 (prime-power rings) and Ch. 11, Theorem 11.6(2) (ramified primes for reduced N), pp. 54-62."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

For $K=\mathbb Q(\zeta_{12})$ the discriminant is $d_K=144=2^{4}\cdot3^{2}$.
The primes $2$ and $3$ each have a unique prime of $\mathcal O_K$ above them,
with $e=f=2$; and a rational prime $\ell\nmid12$ splits into four primes of
residue degree $1$ when $\ell\equiv1\pmod{12}$, and into two primes of residue
degree $2$ when $\ell\equiv5,7,11\pmod{12}$.

## Facts & Assumptions

**Given:** A primitive twelfth root of unity $\zeta_{12}$ and
$K=\mathbb Q(\zeta_{12})$, a reduced index since $4\mid12$
([[def-cyclotomic-extension]]).

[F1] Discriminant formula: for a reduced index $f>1$ with $K=\mathbb Q(\zeta_f)$,
$$d_K=(-1)^{\varphi(f)/2}\frac{f^{\varphi(f)}}{\prod_{p\mid f}p^{\varphi(f)/(p-1)}}$$
([[thm-discriminant-of-a-cyclotomic-field]]).

[F2] Prime factorisation: for the reduced index $f=12$, a rational prime
$\ell$, and $f=\ell^{a}m$ with $\gcd(\ell,m)=1$, one has
$\ell\mathcal O_K=(P_1\cdots P_g)^{e}$ with $e=\varphi(\ell^{a})$,
$d=\operatorname{ord}_m(\ell)$, $g=\varphi(m)/d$, and the $P_i$ pairwise
distinct primes of residue degree $d$
([[thm-prime-factorisation-in-a-cyclotomic-field]]).

[F3] For $\ell\nmid12$ every prime above $\ell$ has residue degree
$\operatorname{ord}_{12}(\ell)$ and their number is
$\varphi(12)/\operatorname{ord}_{12}(\ell)$
([[cor-unramified-prime-decomposition-in-a-cyclotomic-field]]).

[F4] For $\ell\nmid12$, the prime $\ell$ splits completely in $K$ if and only
if $\ell\equiv1\pmod{12}$
([[cor-complete-splitting-in-a-cyclotomic-field]]).

[F5] $\varphi(12)=4$, and the unit group is
$(\mathbb Z/12)^{\times}=\{1,5,7,11\}$, in which every element has order $1$ or
$2$: $1$ has order $1$, while $5^{2}\equiv7^{2}\equiv11^{2}\equiv1\pmod{12}$
with $5,7,11\not\equiv1\pmod{12}$
([[def-unit-group-modulo-n-and-euler-totient]], [[def-order-in-a-group]]).

## Verification

**Proof technique:** direct.

1.1 The data $\varphi(12)=4$, $12^{4}=20736$ and $2^{4}\cdot3^{2}=16\cdot9=144$ give $d_K=(-1)^{2}\cdot20736/144=144=2^{4}\cdot3^{2}$. [F1, F5]

1.2 For $\ell=2$ write $12=2^{2}\cdot3$, so $a=2$, $m=3$: $e=\varphi(4)=2$, $d=\operatorname{ord}_3(2)=2$ (as $2^{2}\equiv1$ and $2\not\equiv1\pmod3$) and $g=\varphi(3)/2=1$; hence $2\mathcal O_K=P^{2}$ for the unique prime above $2$, of residue degree $2$. [F2]

1.3 For $\ell=3$ write $12=3\cdot4$, so $a=1$, $m=4$: $e=\varphi(3)=2$, $d=\operatorname{ord}_4(3)=2$ (as $3^{2}\equiv1$ and $3\not\equiv1\pmod4$) and $g=\varphi(4)/2=1$; hence $3\mathcal O_K=P'^{2}$ for the unique prime above $3$, of residue degree $2$. [F2]

2.1 For a prime $\ell\nmid12$ the class of $\ell$ modulo $12$ is one of $1,5,7,11$. If $\ell\equiv1\pmod{12}$ then $\operatorname{ord}_{12}(\ell)=1$, so by [F3] there are $\varphi(12)=4$ primes of degree $1$, and by [F4] $\ell$ splits completely; if $\ell\equiv5,7,11\pmod{12}$ then the order is $2$ by [F5], so there are $4/2=2$ primes, each of residue degree $2$. [F3, F4, F5, step 1.1]

3.1 Collecting steps 1.1 through 2.1: $d_K=144$; the primes $2$ and $3$ are ramified with a single prime each, of $e=f=2$; and every $\ell\nmid12$ splits into four degree-one primes for the class $1$, or two degree-two primes for the classes $5,7,11$ modulo $12$. [step 1.1, step 1.2, step 1.3, step 2.1] ∎

## Remarks

- **Degree check.** In every unramified case $e f g=\varphi(12)=4$: four
  degree-one primes, or two degree-two primes, or (were the order $4$) one
  degree-four prime; the last case does not occur because
  $(\mathbb Z/12)^{\times}$ has exponent $2$.
- **Ramified primes.** $2$ and $3$ are exactly the prime divisors of the
  discriminant $d_K=144$, consistent with the ramification criterion for the
  reduced index $12$.
