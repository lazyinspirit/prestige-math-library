---
id: cor-cyclotomic-ramification-criterion
kind: corollary
title: Ramification primes of a reduced cyclotomic conductor
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-prime-factorisation-in-a-cyclotomic-field
  - def-conductor-of-a-cyclotomic-field
  - thm-totient-of-a-prime-power
  - def-divides-in-z
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
      locator: "Theorem 6.4(c), pp. 99-100, and Remark 6.6(a), p. 100: if p divides n then p ramifies unless p = 2 and n = 2 times an odd number; combined with the unramified power-map case of Example 8.18, pp. 143-144."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 11, Theorem 11.6 and Remark 11.7"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Theorem 11.6(2) and Remark 11.7, pp. 61-62: for N not twice an odd integer, p divides the discriminant of Q(zeta_N) if and only if p divides N; the excluded shape N = 2 times odd is exactly the non-reduced one."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $f\ge1$ be a reduced index, that is, $f$ is odd or $4\mid f$, and let
$K=\mathbb Q(\zeta_f)$. A rational prime $\ell$ ramifies in $K$ — that is, in
the factorisation of $\ell\mathcal O_K$ some prime ideal occurs with exponent at
least $2$ — if and only if $\ell\mid f$.

## Facts & Assumptions

**Given:** A reduced index $f\ge1$, a primitive $f$-th root of unity
$\zeta_f$, the field $K=\mathbb Q(\zeta_f)$, a rational prime $\ell$, and the
factorisation $f=\ell^{a}m$ with $\gcd(\ell,m)=1$ (so $a$ is the $\ell$-adic
valuation of $f$ and $\ell\nmid f$ exactly when $a=0$).

[F1] By the prime factorisation theorem for reduced indices,
$$\ell\mathcal O_K=(P_1\cdots P_g)^{e},\qquad e=\varphi(\ell^{a}),$$
with pairwise distinct primes $P_1,\dots,P_g$; in particular every prime above
$\ell$ has exponent exactly $e$ in $\ell\mathcal O_K$, so $\ell$ is unramified
in $K$ if and only if $e=1$
([[thm-prime-factorisation-in-a-cyclotomic-field]]).

[F2] For a prime $\ell$ and $a\ge1$, $\varphi(\ell^{a})=\ell^{a}-\ell^{a-1}
=\ell^{a-1}(\ell-1)$, and $\varphi(1)=1$; hence for $a\ge1$ one has
$\varphi(\ell^{a})=1$ exactly when $\ell=2$ and $a=1$
([[thm-totient-of-a-prime-power]]).

[F3] Since $f$ is reduced, $f$ is odd or $4\mid f$; consequently, if $2\mid f$
then $4\mid f$, so the exponent $a=v_2(f)$ is not $1$ — it is either $0$ or at
least $2$. [definition of reduced index, arithmetic]

## Proof

**Proof technique:** direct.

1.1 If $a=0$ then $e=\varphi(1)=1$, while if $a\ge1$ then $e=\ell^{a-1}(\ell-1)=1$ holds exactly for $\ell=2$, $a=1$; hence $e=1$ if and only if $a=0$, or $\ell=2$ and $a=1$. [F2]

2.1 If $\ell\mid f$ then $a\ge1$; if moreover $\ell=2$ then $a\ge2$ by [F3], so the exceptional case $\ell=2$, $a=1$ of step 1.1 cannot occur for the reduced index $f$. [F3]

3.1 Combining steps 1.1 and 2.1: when $\ell\nmid f$ we have $a=0$ and $e=1$, and when $\ell\mid f$ we have $a\ge1$ with $(\ell,a)\ne(2,1)$, hence $e\ge2$. [step 1.1, step 2.1]

4.1 By [F1] the ramification behaviour of $\ell$ is read off from the single exponent $e$: $\ell$ is unramified exactly when $e=1$ and ramified exactly when $e\ge2$. Step 3.1 therefore gives: $\ell\nmid f$ implies $e=1$ and $\ell$ unramified, while $\ell\mid f$ implies $e\ge2$ and $\ell$ ramified. Hence $\ell$ ramifies in $K=\mathbb Q(\zeta_f)$ if and only if $\ell\mid f$. [F1, step 3.1] ∎

## Remarks

- **Reducedness is essential for the converse.** For the non-reduced index
  $f=6$ one has $\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)$ and $\ell=2$ divides
  $f$ although $2$ is unramified; the exclusion of indices $f\equiv2\pmod4$
  is exactly what makes "$\ell\mid f$" equivalent to ramification here.
- **Prime divisors of the conductor.** Once the companion conductor theorem
  identifies the reduced index $f$ with the conductor
  ([[def-conductor-of-a-cyclotomic-field]]) of $\mathbb Q(\zeta_f)$,
  the corollary reads: the ramified primes are exactly the prime divisors of
  the conductor, and away from them the Frobenius is the power map by
  [[lem-arithmetic-frobenius-on-a-cyclotomic-field]].
