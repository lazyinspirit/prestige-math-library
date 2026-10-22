---
id: lem-small-integer-matrix-linear-algebra-in-quadratic-logarithmic-space
kind: lemma
title: Exact small-entry matrix algebra in quadratic logarithmic workspace
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-determinant-of-a-square-matrix
  - thm-laplace-cofactor-expansion
  - thm-gaussian-elimination-produces-row-echelon-form
  - thm-fundamental-theorem-of-arithmetic
  - lem-chinese-remainder-two-moduli
  - thm-euclidean-algorithm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§6 and 8, small-entry matching matrices, determinant bounds and
        compressed normal-coordinate computations; the explicit streamed modular
        implementation is proved locally.
    - title: Keith Conrad, The Chinese Remainder Theorem
      url: https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf
      locator: The coprime two-modulus reconstruction used iteratively below.
dependency_level: 0
---

## Statement

Let $n\ge1$, and let $A$ be an integer matrix with at most $n$ rows and at most $n$ columns, all entries in $\{-1,0,1\}$. Deterministic algorithms compute its rational rank and an independent set of original rows in time polynomial in $n$ and sequential Turing workspace $O(n^2\log(n+2))$ bits. The determinant of any specified square submatrix is computable within the same bounds. If $A$ has $b\ge1$ columns and rational rank $b-1$, a primitive integer generator of its one-dimensional rational kernel is computable within those bounds, with either choice of its overall sign. The zero-row and zero-column matrices and the $0\times0$ determinant convention are included.

## Statement references

[[def-determinant-of-a-square-matrix]] — the determinant is an integer Leibniz sum.

[[thm-gaussian-elimination-produces-row-echelon-form]] — elimination is used only over prime fields.

[[lem-chinese-remainder-two-moduli]] — streamed reconstruction from coprime moduli.

[[thm-laplace-cofactor-expansion]] — cofactor construction of a null vector.

## Facts & Assumptions

**Given:** The bounded-size small-entry matrix of the Statement; all integers are binary encoded and the input can be reread.

[F1] The Leibniz formula has $d!$ terms in dimension $d$, and Laplace expansion expresses a determinant through its cofactors. ([[def-determinant-of-a-square-matrix]], [[thm-laplace-cofactor-expansion]])

[F2] Gaussian elimination over a field consists of pivot selection, row interchange, nonzero pivot division and row addition. ([[thm-gaussian-elimination-produces-row-echelon-form]])

[F3] Positive integers have unique finite prime factorizations. Coprime residue classes reconstruct uniquely modulo their product, and Euclidean remainder descent computes gcds. The proof below constructs the coefficient identities needed for inverses and primitivity. ([[thm-fundamental-theorem-of-arithmetic]], [[lem-chinese-remainder-two-moduli]], [[thm-euclidean-algorithm]])


## Proof

1.1 Every $d\times d$ minor, $0\le d\le n$, has absolute determinant at most $d!\le(n+2)^n$ by [F1], interpreting the empty determinant as $1$. Put $B=(n+2)^n$, $M=16(n+2)^4$, $L_M=\operatorname{lcm}(1,\ldots,M)$ and $P_M=\prod_{p\le M,\ p\text{ prime}}p$. All these are integers; only $B$ and the small bound $M$, not the complete integers $L_M,P_M$, will be stored. [given, F1, F3, construct]

2.1 The bound $L_M\ge2^{M-1}/M$ is elementary. For $N=M-1$ and any $0\le j\le N$, counting multiples of $p,p^2,\ldots$ in factorials gives $$v_p\binom Nj=\sum_{a\ge1}\left(\left\lfloor\frac N{p^a}\right\rfloor-\left\lfloor\frac j{p^a}\right\rfloor-\left\lfloor\frac{N-j}{p^a}\right\rfloor\right).$$ Each summand is zero or one and vanishes for $p^a>N$. Thus this valuation is at most $\lfloor\log_p N\rfloor$, at most the exponent of $p$ in $L_M$. Unique factorization makes every $\binom Nj$ divide $L_M$. The sum of the $M$ binomial coefficients is $2^{M-1}$, so at least one is at least $2^{M-1}/M$, proving the bound. [F3, step 1.1, algebra]

3.1 The exponent of every prime in $L_M$ is at most $\log_2 M$. Consequently $L_M\le P_M^{\log_2 M}$ and $$\log_2P_M\ge\frac{M-1-\log_2 M}{\log_2 M}.$$ For the chosen $M$, $\log_2M=4+4\log_2(n+2)\le4(n+2)$ and $M-1-\log_2M\ge M/2$. The displayed lower bound is therefore at least $2(n+2)^3$, which is greater than $n\log_2(n+2)+3$. Hence $P_M>8B$. Enumerate integers $2,\ldots,M$, testing each for primality by trial division up to its square root. There are polynomially many trials on $O(\log(n+2))$-bit integers. Stop the prime stream as soon as its running product $Q$ exceeds $2B$; the bound just proved guarantees that this happens by $M$. Immediately before the last multiplication $Q\le2B$, so the final product is at most $2BM$. The product accumulator thus has $O(n\log(n+2))$ bits. [F3, step 1.1, step 2.1, construct, algebra]

4.1 For a specified square submatrix $D$, compute its determinant modulo each successive prime by [F2]. Every nonzero residue $h$ modulo a prime $p$ is a unit, with an explicit small-space inverse: apply Euclidean descent to $(p,h)$, maintaining $r_i=s_i p+t_i h$ with initial coefficient pairs $(1,0),(0,1)$ and updates $(s_{i+1},t_{i+1})=(s_{i-1},t_{i-1})-q_i(s_i,t_i)$. The last nonzero remainder is $1$, since a common divisor of $p$ and $0<h<p$ is $1$ by primality. Its coefficient $t_i$ is an inverse modulo $p$. This also constructs Bézout identities for arbitrary integer pairs, and induction gives one for any finite list and its gcd. Thus elimination is over a field; if a pivot cannot be found in a square trailing block, the determinant residue is zero. Row interchanges change its sign, and otherwise the product of the unscaled pivots gives the determinant. This uses one matrix of $O(n^2)$ residues, each with $O(\log(n+2))$ bits, and $O(n^3)$ modular operations per prime. Combine each residue $r$ with the previous representative $a$ modulo $Q$ by $$a_{\rm new}=a+Q\left((r-a)Q^{-1}\bmod p\right),\qquad Q_{\rm new}=Qp.$$ The inverse exists by [F3] and is computed from $Q\bmod p$, so its Euclidean inputs have only $O(\log(n+2))$ bits. After $Q>2B$, the unique representative in $[-B,B]$ is the integer determinant by step 1.1. Only the current residue matrix, the two reconstruction integers and small counters are retained; no list of primes, residues or previous matrices is stored. [F1, F2, F3, step 1.1, step 3.1, construct]

4.2 For rank, perform prime-field elimination on the original rectangular matrix over the same prime stream, retaining the largest rank found and the original row indices of a basis attaining it. These indices can be selected during elimination without a transformation matrix: after the first $k$ pivots, the unselected rows have only had combinations of the $k$ selected original rows subtracted, so the next pivot row is independent of them exactly when its remainder is nonzero. The rank equals the largest order of a nonzero minor over either field. To see the needed direction directly, elimination selects $r$ original independent rows and $r$ pivot columns; their $r\times r$ submatrix becomes triangular with nonzero pivots after invertible row operations, so it has nonzero determinant. Conversely, $r+1$ rows are dependent and multilinearity makes every minor of that order zero. A nonzero modular minor is a nonzero integer minor, so every modular rank is at most the rational rank $r$. If $r>0$, choose any nonzero $r\times r$ integer minor $d$. If all sampled ranks were less than $r$, every sampled prime would divide $d$. Their product $Q>2B$ would divide $d$, contradicting $0<|d|\le B$. Therefore the maximum modular rank is exactly $r$, and its retained original rows form a rational row basis. For $r=0$ every entry and modular rank is zero. [F1, F2, F3, step 1.1, step 3.1, construct]

5.1 If the number of columns is $b$ and the rank is $b-1$, let $R$ consist of the $b-1$ independent original rows from step 4.2. For $1\le j\le b$, compute $w_j=(-1)^{j+1}\det R_{\widehat j}$ by step 4.1, retaining the vector $w$. Some cofactor is nonzero because $R$ has full row rank. Expanding the determinant of the matrix obtained by adding any row of $R$ as a duplicate row gives $Rw=0$ by [F1]. Every row of $A$ lies in the rational row span of $R$, hence $Aw=0$. Divide $w$ by the positive gcd of its entries; the result is primitive. If a rational multiple $cu$ of a primitive integer vector $u$ is integral, a Bézout identity $\sum_j a_j u_j=1$ gives $c=\sum_j a_j(cu_j)\in\mathbb Z$, so it generates all integer points on that line. Either overall sign may be selected. For $b=1$, $R$ is empty and its one empty cofactor is $1$, as required. [F1, F3, step 4.1, step 4.2, construct]

6.1 All counters bounded by $M$ have $O(\log(n+2))$ bits. The residue matrix uses $O(n^2\log(n+2))$ bits, the row-index list $O(n\log(n+2))$ bits, and each reconstructed determinant has $O(n\log(n+2))$ bits. The at most $n$ retained cofactors therefore also use $O(n^2\log(n+2))$ bits; the same residue matrix storage is reused for each one. Trial division, at most $M$ prime eliminations per determinant and at most $n$ cofactor determinants take polynomially many arithmetic operations on polynomial-length integers. Binary multiplication and long division take polynomial time; the Euclidean descent takes $O(\ell)$ divisions on $\ell$-bit inputs because after two nonzero remainder steps the remainder is at most half its previous value. The coefficient-tracking algorithm is needed computationally only for inverses with inputs less than $p\le M$. It has $O(\log p)$ updates and quotients at most $p$, so even the crude coefficient bound obtained by multiplying $2p$ per update has $O((\log p)^2)$ bits. Thus these small inverses need only $O((\log(n+2))^2)$ extra workspace, which fits the asserted bound. Normalizing the cofactor vector needs only ordinary remainder gcds on $O(n\log(n+2))$-bit integers; the existential Bézout identity used to prove primitivity need not be computed or stored. All integer multiplications and divisions can be done by the digit-by-digit algorithms using a constant number of buffers of the operand/output lengths. Thus reconstruction, inversions, gcd normalization, rank and kernel calculations all have polynomial bit time and the asserted workspace. Empty matrices are handled directly by rank zero and empty determinant one. This proves all claims. [F3, step 3.1, step 4.1, step 4.2, step 5.1, algebra] ∎
