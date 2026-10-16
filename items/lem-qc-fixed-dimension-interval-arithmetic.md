---
id: lem-qc-fixed-dimension-interval-arithmetic
kind: lemma
title: Fixed-Dimension Dyadic Matrix Routines Have Polynomial Bit Cost
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-effective-binary-encoding-and-decoder
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: Dieter van Melkebeek and Thomas Watson, Time-Space Efficient Simulations of Quantum Computations
      url: https://theoryofcomputing.org/articles/v008a001/v008a001.pdf
      locator: §4.3, PDF pp. 32–42, finite-precision matrix operations
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §§3–4, exact-real matrix operations and the finite-precision caveat, PDF pp. 4–10
---

## Statement

Fix a positive matrix dimension $d$ and an integer $c\ge1$. A dyadic interval is a
closed interval with dyadic-rational endpoints; a complex matrix interval
stores one such interval for every real and imaginary entry. Suppose each
input is given by a Cauchy procedure which, on unary request $1^q$, returns a
rational approximation to each real and imaginary entry with error at most
$2^{-q}$ and uses $O((q+1)^c)$ bit operations. Suppose exact scalar and
matrix inputs have entries of modulus at most $3$. Each fixed algebraic real
constant is supplied by a rational polynomial and an open rational interval
with nonroot endpoints on which the polynomial has opposite endpoint signs
and exactly one real root.
Here rational outputs and fixed rational data are stored as a sign and
binary numerator and positive denominator, separated by a fixed delimiter;
the fraction need not be reduced. The complete output length is charged to
the Cauchy procedure's bit time.
When each scalar divisor
and each norm used for normalization has modulus at
least $2^{-B}$, the following routines return dyadic intervals of diameter at
most $2^{-p}$ containing the exact answer, using
$O((p+B+1)^{\max(c,3)})$ bit operations:

- any fixed finite composition of sums and products;
- quotient by a scalar whose modulus is at least $2^{-B}$;
- the nonnegative square root of a real in $[0,1]$;
- normalization $v/\|v\|_2$ of a real vector with $\|v\|_2\ge2^{-B}$;
- the matrix exponential $e^A$ when $\|A\|\le1$; and
- the matrix logarithm $\log(I+E)=\sum_{j\ge1}(-1)^{j+1}E^j/j$
  when $\|E\|\le1/2$.

Here $d$ and the number of scalar operations in the fixed composition are
constants. The exponent $B$ is needed only for divisions and normalization;
the square-root routine also works at input zero. The constants in the
complexity bound may depend on the fixed dimension, routine, and Cauchy-time
constant.

## Facts & Assumptions

**Given:** Fixed $d$, output precision $p\ge1$, conditioning bound $B\ge0$, and Cauchy input procedures with the cost stated above.

[F1] [[def-effective-binary-encoding-and-decoder]] supplies only the abstract encoding/decoder convention. The binary numerator/denominator representation and charged output length are specified in the Statement; their parsing cost is established directly in step 1.1.

[F2] The operator norm is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

## Proof

1.1 Query each Cauchy procedure at precision $q+4$, obtaining a rational $r$ with $|r-x|\le2^{-q-4}$. Round $r$ to a dyadic $a$ with $|a-r|\le2^{-q-4}$ and return $[a-2^{-q-3},a+2^{-q-3}]$; it contains $x$ and has width $2^{-q-2}$. This rounding costs $O(L+q^2)$ for an $L$-bit rational: scan its numerator and denominator to determine their binary lengths, discard values below the error tolerance, and otherwise retain their leading $q+O(1)$ bits before long division. Since $|r|\le4$, truncating both integers at that relative precision changes the quotient by at most $2^{-q-5}$ after a fixed guard increase; the dyadic division rounding fits the remaining error budget. The scan costs $O(L)$ and the shortened division $O(q^2)$, while $L=O((q+1)^c)$ by the query-time bound. If the fixed composition has no operations, copying this input interval already gives the claimed enclosure. Choose $q=p+K'(B+1)+K'\lceil\log_2(p+2)\rceil+C_0$ with sufficiently large fixed $K',C_0$. The interval endpoints have $O(p+B)$ bits after the binary point. Addition, comparison, and rounding use $O(p+B)$ bit operations; schoolbook multiplication and long division use $O((p+B)^2)$. Outward rounding at $q$ fractional bits adds at most $C2^{-q}$ local error per operation. Induction through the fixed expression tree, using the input bound $3$ and divisor lower bound $2^{-B}$, gives a bound $M=2^{K(B+1)}$ for all exact intermediate magnitudes and error-amplification factors, with fixed $K$: sums and products of a fixed number of quantities bounded by $2^{K(B+1)}$ remain so after increasing $K$, while a quotient has magnitude at most $M2^B$ and error gain at most $2^{O(B+1)}$ by the estimate below. The expression has only a fixed number of such operations, so one larger $K$ covers every stage. For a quotient $x/y$, let $x',y'$ be its midpoint inputs, each within $\delta$ of the exact value, where $\delta\le2^{-B-1}$. Then $|y'|\ge2^{-B-1}$ and $|x'|\le2M$, so $\left|\frac{x}{y}-\frac{x'}{y'}\right| \le2^B\delta+M2^{2B+2}\delta=2^{O(B+1)}\delta$. The stated guard precision therefore makes propagated input and rounding errors at most $2^{-p-4}$. Each Cauchy query costs $O((q+1)^c)$ and each dyadic operation costs $O((p+B)^2)$, so the fixed routine costs $O((p+B+1)^{\max(c,2)})$ and encloses the exact answer. [F1, construct]

2.1 To compute $\sqrt{x}$ for $0\le x\le1$, request an interval $[x_-,x_+]$ of width at most $2^{-2p-12}$ and set $\ell=\max(0,x_-)$ and $u=\min(1,x_+)$. Then $\ell\le x\le u$ and $u-\ell\le2^{-2p-12}$. The inequality $|\sqrt{x}-\sqrt{y}|\le\sqrt{|x-y|}$ shows that the input uncertainty contributes at most $2^{-p-6}$. Bisect separately for the exact rational endpoints $\ell,u$ on $[0,1]$, comparing squared dyadic midpoints with those endpoints. After $O(p)$ bisections the two square roots are enclosed by dyadic intervals of width at most $2^{-p-4}$; monotonicity encloses $\sqrt{x}$ in their combined interval, whose width is at most $2^{-p-6}+2^{-p-3}<2^{-p}$. Each comparison uses $O(p^2)$ bit operations, so the total is $O(p^3)$. For normalization, choose a fixed power of two $R\ge3\sqrt d$ and compute $\|v\|_2=R\sqrt{\sum_i(v_i/R)^2}$ to $q$ bits, so the square-root input lies in $[0,1]$. The norm changes by at most $\|v-v'\|_2$; division by a norm at least $2^{-B}$ and the preceding division estimate show that $q$ guard bits suffice to return each coordinate of $v/\|v\|_2$ within $2^{-p}$. The vector has fixed dimension, so this costs $O((p+B+1)^{\max(c,3)})$. [F2, step 1.1, algebra]

2.2 Request the entries of $A$ to $q'$ bits, where $q'=p+2\lceil\log_2(p+2)\rceil+C_0$ and $C_0$ is a sufficiently large absolute constant. Let $A'$ be the midpoint matrix. Since $d$ is fixed, $\|A-A'\|\le C2^{-q'}$ and $\|A'\|\le3/2$. The telescoping identity for powers gives $\|A^j-A'^j\|\le j(3/2)^{j-1}\|A-A'\|$, so their exponential series differ by at most $e^{3/2}\|A-A'\|$. Truncate the series for $e^{A'}$ at $m=24(p+2)$. Using $j!\ge2^{j-1}$, its tail is at most $8(3/4)^{m+1}<2^{-p-4}$. Compute terms recursively as $T_0=I$ and $T_j=T_{j-1}A'/j$, rounding each product and division outward to $q'$ fractional bits. The error recurrence is $e_j\le(3/2)e_{j-1}/j+C2^{-q'}$; after $j=1$, its multiplier is at most $3/4$, so $e_j\le C'2^{-q'}$ uniformly. Summing $m$ terms contributes at most $C'm2^{-q'}$. The choice of $q'$ makes total error, including the input perturbation, less than $2^{-p}$. There are $O(p)$ products and divisions of fixed-size matrices with $O(p)$-bit operands, hence the dyadic arithmetic cost is $O((p+1)^3)$. Including Cauchy queries as in step 1.1, the routine cost is $O((p+1)^{\max(c,3)})$. For $\|E\|\le1/2$, request the entries to the same precision and let $E'$ be the midpoint, so $\|E'\|\le3/4$. The series difference between $E$ and $E'$ is bounded by $\sum_{j\ge1}\|E^j-E'^j\|/j\le4\|E-E'\|$. Truncate the logarithm series for $E'$ at $m=24(p+2)$. Its tail is at most $\sum_{j>m}(3/4)^j/j\le4(3/4)^{m+1}<2^{-p-4}$. Successive computed powers have errors bounded by a geometric sum of their rounding errors, since $\|E'\|\le3/4$. After multiplication by $1/j$ and summation, total power, coefficient and outward-rounding error is at most $C(m+1)2^{-q'}$, below $2^{-p-2}$ after increasing the fixed constant $C_0$. Thus the logarithm interval also has diameter at most $2^{-p}$ and dyadic arithmetic cost $O((p+1)^3)$; including Cauchy queries, its cost is $O((p+1)^{\max(c,3)})$. [F2, step 1.1, algebra]

3.1 Let $\alpha$ be a fixed algebraic real constant, described by a rational polynomial $f$ and an open rational interval with nonroot endpoints on which $f$ has opposite endpoint signs and exactly one real root, namely $\alpha$. At each bisection, evaluate $f$ exactly at the rational midpoint. If it is a root, return it exactly; otherwise the unique-root and sign-change conditions identify the half containing $\alpha$. After $O(p)$ bisections the interval has width at most $2^{-p-3}$; round its lower endpoint down and its upper endpoint up to multiples of $2^{-p-3}$. The resulting dyadic interval has width at most $3\cdot2^{-p-3}<2^{-p}$. An exact rational root is enclosed by the same outward-rounding rule. Each evaluation has $O(p)$-bit operands and fixed degree, and there are $O(p)$ bisections, giving $O(p^3)$ bit operations. Real and imaginary parts are handled separately. The number of matrix coordinates is fixed, so all coordinatewise bounds above give the claimed matrix-interval bounds. [F1, step 1.1, step 2.2] ∎
