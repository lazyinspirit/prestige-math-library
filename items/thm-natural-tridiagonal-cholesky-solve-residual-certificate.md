---
id: thm-natural-tridiagonal-cholesky-solve-residual-certificate
kind: theorem
title: A successful natural-cubic tridiagonal Cholesky solve has a certified residual
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate
  - alg-rounded-cholesky-with-failure-status
  - thm-rounded-cholesky-componentwise-and-normwise-backward-error
  - lem-rounded-triangular-substitution-componentwise-backward-error
  - lem-rounded-linear-and-normal-residual-certificates
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-finite-arithmetic-schedule-termination-and-count
  - def-frobenius-matrix-norm
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §2.9
      url: https://fncbook.com/structure/
    - title: A. M. Stuart and J. Voss, Matrix Analysis and Algorithms, §§2.6, 3.4, and 5.1
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

Let $r\ge3$, $n=r-2$, and use the stored input data, arithmetic model and
algorithm of
[[alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate]]. If
assembly succeeds, its stored symmetric tridiagonal matrix $T$ is positive
definite. On every full successful call, the algorithm returns
$\operatorname{success}(\widehat M,C,\alpha,\beta,B)$. Let
$\widehat m=(\widehat M_2,\ldots,\widehat M_{r-1})$ be the interior
subvector, let $f$ be the stored right-hand side, and let $\widehat w$ be the
computed rounded residual vector from the algorithm's residual-evaluation
step. Then
$$
\|T\widehat m-f\|_\infty\le C.
$$
For $v\in\mathbb R^n$, the notation here is
$\|v\|_\infty:=\max_{1\le k\le n}|v_k|$.
Thus $e=T\widehat m-f$ is an exact right-hand-side perturbation satisfying
$T\widehat m=f+e$ and $\|e\|_\infty\le C$. This absolute residual
certificate remains valid when $\widehat m=0$ or $f=0$.

The algorithm's factorization and two substitutions are the successful
executions of the published dense rounded Cholesky and triangular-substitution
procedures on the same stored $T$ and $f$, after omitting only exact-zero
operations. Their failure tests retain the published positive-normal pivot
and operationwise range rules. Exact positive definiteness does not guarantee
rounded success.

Write $\widehat L$ and $z$ for the factor and forward-solve vector computed in
this execution. There are additional conditional backward-error statements.
If
$(n+3)u<1$, lower bidiagonal $D_1$ and upper bidiagonal $D_2$ satisfy
$$
(\widehat L+D_1)z=f,\qquad (\widehat L^T+D_2)\widehat m=z,\qquad |D_1|\le\tau|\widehat L|,\qquad |D_2|\le\tau|\widehat L|^T,\qquad \tau=\frac{(n+3)u}{1-(n+3)u}.
$$
If $(20n+20)u<1/5$, put
$g=(20n+20)u/(1-(20n+20)u)$. For the symmetric factor residual
$E=\widehat L\widehat L^T-T$,
$$
|E|\le100g|\widehat L||\widehat L|^T.
$$
With
$$
J=E+D_1\widehat L^T+\widehat L D_2+D_1D_2,
$$
we have $(T+J)\widehat m=f$ and
$$
|J|\le(100g+2\tau+\tau^2)|\widehat L||\widehat L|^T.
$$
The matrix $J$ need not be symmetric. If also
$100\sqrt n\,g\le1/2$, then
$\|E\|_F\le200\sqrt n\,g\|T\|_F$. The residual certificate above
requires only the algorithm's $(n-1)u<1$ check; it does not require these
stronger factor and triangular-solve conditions.

The finite procedure terminates and uses $O(r)$ floating-point operations,
$O(r)$ stored scalars, $O(r)$ exact rational operations and $O(r)$ stored
rationals. No rational bit-complexity bound is asserted.

## Facts & Assumptions

**Given:** $r\ge3$, strictly increasing finite stored knots, finite stored
data, $0<u\le1/4$, and a full successful call of the local algorithm with
its exact rational certificate completed.

[F1] [[alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate]] specifies the stored tridiagonal assembly, bidiagonal factor and solves, sparse rounded residual, exact rational quantities $F_1,X_1,Y_1,V_1,W_1$, and the returned value $C=W_1+g_nF_1X_1+u(V_1+Y_1)$.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful real operation has relative error at most $u$ when its exact result is nonzero, exact zeros are preserved, and operations whose exact nonzero result is outside the normal range fail.

[F3] [[alg-rounded-cholesky-with-failure-status]] specifies the dense rounded Cholesky recurrence, its operation order, and its positive-normal pivot test.

[F4] [[lem-rounded-triangular-substitution-componentwise-backward-error]]: for a successful rounded triangular solve in dimension $n$ with $(n+3)u<1$, a componentwise matrix perturbation bounded by $\gamma_{n+3}|R|$ converts the computed solution into an exact solution.

[F5] [[thm-rounded-cholesky-componentwise-and-normwise-backward-error]]: for a successful Cholesky factorization of an SPD matrix, if $(20n+20)u<1/5$, then $|\widehat L\widehat L^T-T|\le100g|\widehat L||\widehat L|^T$; under its further stated norm condition it gives $\|E\|_F\le200\sqrt n\,g\|T\|_F$.

[F6] [[lem-rounded-linear-and-normal-residual-certificates]]: for a successful sequential rounded matrix-vector product and subtraction, the exact linear residual differs from the computed one in Euclidean norm by at most $g_n\|T\|_F\|\widehat m\|_2+u(\|\widehat v\|_2+\|f\|_2)$.

[F7] [[lem-finite-arithmetic-schedule-termination-and-count]]: a finite initialized instruction list with finite-return instructions terminates at its first failure or its completion return.

[F8] [[def-frobenius-matrix-norm]]: $\|M\|_F$ is the Euclidean norm of the finite list of matrix entries, equivalently $\bigl(\sum_{i,j}|M_{ij}|^2\bigr)^{1/2}$.

[F9] [[def-inner-product-norm]]: on a real or complex inner-product space, $\|v\|=\sqrt{\langle v,v\rangle}$.

[F10] [[prop-standard-coordinate-inner-products]]: on $\mathbb R^n$, $\langle v,w\rangle=\sum_{k=1}^n v_kw_k$, so the induced Euclidean norm is $\|v\|_2=(\sum_{k=1}^n v_k^2)^{1/2}$.

[A1] The local algorithm completes assembly, factorization, both substitutions, residual evaluation and its exact rational certificate without any range or resource failure.

## Proof

1.1 Each successful width subtraction has exact positive input difference, so by [F2] its stored result $\widehat h_i$ is positive. Write $S_k=\widehat h_k+\widehat h_{k+1}$. The successful rounding of its sum and multiplication by $2$ gives $d_k\ge2(1-u)^2S_k\ge(9/8)S_k>S_k$. Row $k$'s off-diagonal absolute sum is at most $S_k$: it contains only some of the positive entries $\widehat h_k,\widehat h_{k+1}$, and for $n=1$ it is zero. For any real nonzero vector $v$, applying $2c_kv_kv_{k+1}\ge-|c_k|(v_k^2+v_{k+1}^2)$ to each adjacent term yields $v^TTv\ge\sum_k(d_k-\sum_{j\ne k}|T_{kj}|)v_k^2>0$. Hence every successfully assembled $T$ is real SPD. [A1, F1, F2, algebra]

1.2 In the dense Cholesky recurrence of [F3], induction over columns shows that $\widehat L_{ij}=0$ for $i>j+1$: the input matrix is tridiagonal, and in each such row the prior-column products and input entry are zero. At $k=1$ the diagonal square-sum is empty, so its pivot is copied as $p_1=d_1$, exactly as in the local algorithm. For $k>1$, the only possible nonzero term in the dense diagonal square-sum is $e_{k-1}^2$; the remaining zero products, additions and subtractions are exact and cannot fail under [F2]. Thus the dense pivot is exactly the specialized $p_k$, followed by the same square root and positive-normal test. For the first subdiagonal, the dense dot product has only the input $c_k$ after its exact zero terms, so the update is exactly $\operatorname{fl}(c_k/\ell_k)$. Every lower entry beyond that subdiagonal is exactly zero. This induction proves equality of all stored factor entries and all potentially failing operations. The forward and backward dense triangular recurrences likewise have only the single adjacent product; all other terms are exact zeros. Therefore the specialized solve outputs equal the published substitutions. [A1, F1, F2, F3, induction]

1.3 Let $r_*=T\widehat m-f$ be the exact residual. The algorithm computes the same sparse sequential products and subtraction as the dense dot product in [F6], with only exact-zero products and additions omitted. By [F2], a zero product is exact and adding zero to a stored normal value or zero is also exact, so the sparse accumulation is identical to the dense one. Thus [F6] gives $\|\widehat w-r_*\|_2\le g_n\|T\|_F\|\widehat m\|_2+u(\|\widehat v\|_2+\|f\|_2)$. By [F9] and [F10], the Euclidean norm is the square root of the sum of squared coordinates, so each coordinate magnitude is at most that norm and $\|v\|_2\le\sum_k|v_k|$; the latter follows by squaring, since all cross terms are nonnegative. By [F8], the same argument on the finite entry list gives $\|T\|_F\le\sum_{i,j}|T_{ij}|=F_1$. The definitions in [F1] therefore imply $\|\widehat w\|_2\le W_1$, $\|\widehat m\|_2\le X_1$, $\|\widehat v\|_2\le V_1$, and $\|f\|_2\le Y_1$. The coordinate bound also gives $\|r_*\|_\infty\le\|r_*\|_2$, whence $\|r_*\|_\infty\le\|r_* -\widehat w\|_2+\|\widehat w\|_2\le C$. Setting $e=r_*$ gives the stated exact right-hand-side perturbation without division by a solution or residual norm. [A1, F1, F2, F6, F8, F9, F10, algebra]

2.1 If $(n+3)u<1$, apply [F4] to each successful triangular substitution from step 1.2. It gives $D_1,D_2$ with $(\widehat L+D_1)z=f$ and $(\widehat L^T+D_2)\widehat m=z$ and the stated entrywise bounds; since $\widehat L$ is bidiagonal, those bounds force $D_1,D_2$ to be bidiagonal as well. Under the distinct condition $(20n+20)u<1/5$, step 1.1 and [F5] give $E=\widehat L\widehat L^T-T$ and the stated factor bound. Substituting the second triangular equation into the first gives $(\widehat L+D_1)(\widehat L^T+D_2)\widehat m=f$. Expanding the product and using $\widehat L\widehat L^T=T+E$ yields $(T+J)\widehat m=f$. Entrywise submultiplicativity and the bounds on $D_1,D_2,E$ give the displayed bound for $J$. The conditional Frobenius estimate is exactly the further norm consequence in [F5], with the norm convention in [F8]. [A1, F1, F4, F5, F8, step 1.1, step 1.2, algebra]

3.1 Put $n=r-2$. Assembly makes a fixed number of floating-point operations per each of the $r-1$ intervals and $n$ rows. Factorization, each substitution and residual evaluation visit $n$ rows, with at most a fixed number of operations per row because a tridiagonal row has at most three nonzero entries. The exact-certificate scan likewise visits $r-1$ intervals and $n$ rows; each contributes a fixed number of rational operations and comparisons to the sums, row discrepancies, and extrema, followed by a fixed number to form $B$. Thus the floating-point and exact rational operation counts are $O(r)$. The algorithm stores only input and output vectors, the bidiagonal factor, the three diagonals of $T$ and $A$, and a fixed number of rational accumulators; row discrepancies can be computed as they are scanned, so storage is $O(r)$ scalars and $O(r)$ rationals. Every loop has a finite index range and every floating-point instruction returns or its first failure. The certificate denominators $h_i$, $\delta$, and $1-(n-1)u$ are positive, so each exact rational operation has finite inputs and is defined. [F7] therefore gives termination; if a resource limit prevents completion of the exact certificate, the algorithm returns its separate failure status and no $B$. No rational bit-complexity bound follows. [A1, F1, F7, algebra] ∎
