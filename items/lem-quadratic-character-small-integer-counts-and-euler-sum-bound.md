---
dependency_level: 8
id: lem-quadratic-character-small-integer-counts-and-euler-sum-bound
kind: lemma
title: Small quadratic split integers, ramified divisors and the corrected Euler sum
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
deps:
- lem-quadratic-discriminant-character-and-class-number-normalization
- lem-reduced-quadratic-forms-have-bounded-class-multiplicity
- thm-chinese-remainder-theorem
- thm-z-mod-p-is-a-field
- thm-fundamental-theorem-of-arithmetic
- def-legendre-symbol
- thm-chebyshev-theta-linear-bounds
- lem-chebyshev-psi-prime-power-expansion
- thm-von-mangoldt-divisor-sum-identity
- lem-summatory-logarithm-asymptotic
- thm-first-mertens-theorem-for-primes
- thm-second-mertens-theorem-for-primes
- lem-abel-summation-by-parts
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-monotonicity-of-the-integral
- thm-additivity-over-subintervals
- thm-monotone-convergence
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-dependent-choice
justified_by: []
axiom_use: AC+CC inherited from the quadratic arithmetic normalization/counts. The
  finite congruence lifts and prime sums introduce no additional choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: W. Haneke, Über die reellen Nullstellen der Dirichletschen L-Reihen
    url: https://www.impan.pl/shop/publication/transaction/download/product/98676?download.pdf
    locator: Acta Arithmetica22(1973),391–421, complete scanned article visually read.
      Arithmetic reduced-form counts and positive Mellin/Euler estimates reconstructed
      locally; no theorem imported.
  - title: W. Haneke, Corrigendum
    url: https://www.impan.pl/shop/publication/transaction/download/product/101046?download.pdf
    locator: Acta Arithmetica31(1976),99–100, full two-page correction visually read;
      the ramified-prime reciprocal sum is retained.
---

## Statement

Assume AC and Countable Choice. Let $d,q,\chi_d,H$ be the quadratic data of the normalization lemma and put $Y=\sqrt q/2$. The number of positive integers $n\le Y$ all of whose prime factors $p$ satisfy $\chi_d(p)=1$ is at most $64H$. The number of odd positive divisors $n\mid q$ with $n\le Y$ is also at most $64H$. Either set may be empty. With $X=q^{16}$, the finite Euler sum satisfies
$$S_q=\sum_{p\le X}\frac{1+\chi_d(p)}p\le3\log\log(H+3)+400.$$
The ramified contribution $\sum_{p\mid q}1/p$ is included. All fundamental conductors $q\ge3$, both signatures and all cutoff endpoints are covered. The integer one qualifies for the split set by its empty prime-factor list only when $Y\ge1$.

## Facts & Assumptions

**Given:** The data and AC+CC hypotheses in the Statement.

[F1] The quadratic dictionary gives the exact primitive character, fundamental discriminant, $H\ge1/3$ and full norm-positive-unit class normalization. The complete reduced sets have cardinality at most $32H$. [[lem-quadratic-discriminant-character-and-class-number-normalization]] [[lem-reduced-quadratic-forms-have-bounded-class-multiplicity]]

[F2] Finite CRT, arithmetic in a prime field and unique prime factorization apply to the integer congruences used here. [[thm-chinese-remainder-theorem]] [[thm-z-mod-p-is-a-field]] [[thm-fundamental-theorem-of-arithmetic]] [[def-legendre-symbol]]

[F3] The actual Chebyshev proof obtains its all-$x$ upper bound by the prime divisors of central binomial coefficients; prime powers expand $\psi$ and $\sum_{d\mid n}\Lambda(d)=\log n$. The finite floor identity and Abel summation underlie the first and second Mertens theorems. The constants needed below are derived again in the proof. [[thm-chebyshev-theta-linear-bounds]] [[lem-chebyshev-psi-prime-power-expansion]] [[thm-von-mangoldt-divisor-sum-identity]] [[lem-summatory-logarithm-asymptotic]] [[thm-first-mertens-theorem-for-primes]] [[thm-second-mertens-theorem-for-primes]] [[lem-abel-summation-by-parts]]

[F4] Logarithms have their integral/product laws, and additive monotone integration and monotone convergence justify the positive elementary bounds. [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[thm-monotonicity-of-the-integral]] [[thm-additivity-over-subintervals]] [[thm-monotone-convergence]]

[A1] Full AC and CC are retained at the literal local supplier interfaces. AC implies DC and hence covers inherited DC requirements; no necessity or choice-free refinement is asserted. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The stated data.

1.1 If all prime factors of $n\le Y$ split, choose $b^2\equiv d\pmod{4n}$. At an odd prime $p\mid n$ the root is nonzero by [F1]; given a root modulo $p^j$, replacing $b$ by $b+kp^j$ solves the next congruence uniquely because $2b$ is invertible modulo $p$. If $2\mid n$, splitting gives $d\equiv1\pmod8$; starting with an odd root modulo eight, the two choices $b,b+2^{j-1}$ toggle its square modulo $2^{j+1}$ for every $j\ge3$. CRT combines these lifts and the required parity at two. For $d<0$ take its representative in $[-n,n]$ (choose one endpoint when both occur). Then $(n,b,(b^2-d)/(4n))$ is integral with $|b|\le n$ and last coefficient at least $q/(4n)\ge n$, hence reduced. For $d>0$ take its unique representative in $(\sqrt d-2n,\sqrt d)$ modulo $2n$; the irrational endpoints and $2n\le\sqrt d$ give $b>0$, $0<\sqrt d-b<2n<\sqrt d+b$, hence reduced. For $n=1$ the same parity choice works directly, including the negative boundary. Every resulting form is primitive: a common odd prime would have its square divide the fundamental discriminant, while a common factor two would force $d/4\equiv0,1\pmod4$, contrary to its fundamental even possibilities $2,3\pmod4$. Distinct $n$ give different first coefficients. Thus the split set injects into the complete reduced set. [F1, F2, A1, given, construct, algebra]

1.2 We require an effective all-$x$ version of the local Mertens argument [F3]. The central-binomial prime-product argument of its Chebyshev proof gives $\theta(x)\le2x\log2<2x$ for every $x\ge2$. Prime-power expansion yields $\psi(x)\le2x+2\sqrt x\log x/\log2\le10x$: there are at most $\log x/\log2$ powers with exponent at least two, and [F4] gives $\log2\ge1/2$, $\log x\le2\sqrt x$. Summing the divisor identity gives the exact formula $\sum_{n\le x}\log n=\sum_{m\le x}\Lambda(m)\lfloor x/m\rfloor$. Monotonicity bounds its left side between $x\log x-x+1-\log x$ and $x\log x$. The floor error lies between zero and $\psi(x)$. Dividing by $x$ therefore shows $-2\le\sum_{m\le x}\Lambda(m)/m-\log x\le10$. The prime-power tail is at most $\sum_{n\ge2}\log n/[n(n-1)]\le4\sum_{n\ge2}n^{-3/2}\le8$, by [F4]. Consequently $A(x)=\sum_{p\le x}\log p/p=\log x+R(x)$ with $|R(x)|\le18$ for every $x\ge2$. [F2, F3, F4, algebra]

2.1 For an odd divisor $n\mid q$ put $s=0$ or $1$ according as $d\equiv0$ or $1\pmod4$. In the negative case take $b=sn$. The quotient $(b^2-d)/(4n)$ is integral: for odd $d$, $d/n\equiv n\pmod4$, while for even $d$, $4n\mid d$. In the positive case choose $j\equiv s\pmod2$ with $\sqrt d-2n<jn<\sqrt d$ and put $b=jn$; again $4n\mid b^2-d$. The same inequalities as step 1.1 make each triple reduced and primitive. Distinct $n$ again have different first coefficients. Both injections have counts at most $32H\le64H$ by [F1], without asserting either set nonempty when $Y<1$. [F1, F2, step 1.1, construct, algebra]

2.2 Abel summation in [F3] now gives, for $P(x)=\sum_{p\le x}1/p$, $$P(x)-\log\log x=1-\log\log2+\frac{R(x)}{\log x}+\int_2^x\frac{R(t)}{t\log^2t}\,dt.$$ Since $1/2\le\log2<1$, the absolute error is at most $2+18/\log2\le38<40$. This is uniform for every real $x\ge2$; no unspecified asymptotic threshold or Mertens constant is needed. Put $\tau=H+3>3$ and $X=q^{16}$. The weighted split primes up to $\tau$ contribute at most $2\log\log\tau+80$. Those with $\tau<p\le Y$ contribute at most $2(64H)/\tau\le128$ by step 1.1; if the interval is empty this bound still holds. For $q\ge16$, $Y\ge2$ and $\log X/\log Y\le64$, so the primes in $Y<p\le X$ contribute at most $2(P(X)-P(Y))\le2(\log64+80)<172$. If $q<16$, their entire contribution is at most $2\sum_{2\le n\le X}1/n\le2\log X<128<172$, since $\log16<4$. Taking all three bounds, allowing overlaps when $\tau>Y$ only increases the upper estimate, proves that the total weighted split part is at most $2\log\log\tau+380$. [F3, F4, step 1.1, step 1.2, algebra]

3.1 Let $r$ be the number of odd prime divisors of $q$. For $q\ge16$, pair divisors of its squarefree odd part with their complements. At least $2^{r-1}$ are at most $\sqrt q$ (if $r=0$ the resulting weaker numerical inequality is still valid). Each such divisor above $Y$ has an odd prime factor, since $Y\ge2$, and dividing by one gives an odd divisor at most $\sqrt q/3<Y$; choose its least prime factor. Each small divisor has at most $r$ such preimages, besides itself. Step 2.1 thus gives $2^{r-1}\le(r+1)64H$. For $r\ge8$, induction gives $r+1\le2^{r/2}$ and hence $r\le2\log(128H)/\log2\le4(7+\log\tau)\le32\log\tau$. The case $r<8$ has the same bound because $\log\tau>\log3>1$; the last strict inequality follows, for example, by the lower Riemann sum $\sum_{j=5}^{12}1/j=28271/27720>1$ for $\log3$. Including two gives $\omega(q)+1\le34\log\tau$. Ordered distinct ramified primes have $p_j\ge j+1$, whence [F4] gives $\sum_{p\mid q}1/p\le\sum_{j=1}^{\omega(q)}1/(j+1)\le\log(\omega(q)+1)\le\log\log\tau+\log34<\log\log\tau+4$. For $q<16$ the direct finite bound $\sum_{p\mid q}1/p<4$ suffices, without the divisor-pairing argument. Finally $1+\chi_d(p)$ is two, zero or one for split, inert or ramified primes. Add this literal ramified contribution to step 2.2 to obtain $S_q\le3\log\log(H+3)+384\le3\log\log(H+3)+400$, as asserted. [F1, F2, F4, step 2.1, step 2.2, choose, algebra] ∎
