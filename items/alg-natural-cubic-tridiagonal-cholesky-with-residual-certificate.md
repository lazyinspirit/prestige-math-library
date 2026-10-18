---
id: alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate
kind: algorithm
title: Natural-cubic tridiagonal Cholesky solve with a residual certificate
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-rounded-cholesky-with-failure-status
  - lem-rounded-triangular-substitution-componentwise-backward-error
  - lem-rounded-linear-and-normal-residual-certificates
  - thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots
justified_by:
  - thm-natural-tridiagonal-cholesky-solve-residual-certificate
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
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

## Definition

Use one binary floating-point format from
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]
with round-to-nearest, ties-to-even, a known rational unit roundoff
$0<u\le1/4$, and the model's normal-or-zero success rule. Inputs are
$r\ge2$ finite stored real knots $x_1<\cdots<x_r$ and finite stored real
values $y_1,\ldots,y_r$. These stored numbers are the exact interpolation
data; no unrecorded perturbation of the data is included. Write
$h_i=x_{i+1}-x_i$ for their exact rational differences. If a constant $2$
or $6$ needed by the selected branch is not representable as a finite normal
number, return `input-format-failure`. Arithmetic statuses below report the
first failing operation in the specified order. This algorithm makes no
claim that floating-point success is automatic.

If $r=2$, return `success` with endpoint second derivatives
$\widehat M_1=\widehat M_2=0$ and error certificate $B=0$. The corresponding
piece is the exact straight line. For $r\ge3$, put $n=r-2$ and return
`certificate-parameter-failure` unless $(n-1)u<1$.

For $r\ge3$, assemble stored widths and secant slopes in increasing
$i=1,\ldots,r-1$: compute
$\widehat h_i=\operatorname{fl}(x_{i+1}-x_i)$,
$a_i=\operatorname{fl}(y_{i+1}-y_i)$, and
$q_i=\operatorname{fl}(a_i/\widehat h_i)$, in that order. At the first
failed operation return `assembly-range-failure(i,operation)`. Successful
width subtraction gives $\widehat h_i>0$. In increasing $k=1,\ldots,n$,
for the row corresponding to knot $x_{k+1}$ compute
$$
s_k=\operatorname{fl}(\widehat h_k+\widehat h_{k+1}),\quad d_k=\operatorname{fl}(2s_k),\quad t_k=\operatorname{fl}(q_{k+1}-q_k),\quad f_k=\operatorname{fl}(6t_k)
$$
in that order. Copy $c_k=\widehat h_{k+1}$ for $k<n$. On failure return
`assembly-range-failure(k,operation)`. Let $T\in\mathbb R^{n\times n}$
have diagonal $d_k$, adjacent off-diagonal entries $c_k$, and zero entries
elsewhere; represent it by these three diagonals, not a dense array. Let the
stored right-hand side be $f=(f_1,\ldots,f_n)^T$.

Factor $T$ with a real lower bidiagonal factor, stored as diagonal
$\ell_1,\ldots,\ell_n$ and subdiagonal $e_1,\ldots,e_{n-1}$. For
$k=1,\ldots,n$ in order, set $p_1=d_1$ by exact copy; for $k>1$ compute
$\zeta_k=\operatorname{fl}(e_{k-1}e_{k-1})$ and
$p_k=\operatorname{fl}(d_k-\zeta_k)$. If either operation fails, return
`factor-range-failure(k,operation)`. If the resulting $p_k$ fails the
published positive-normal pivot test of
[[alg-rounded-cholesky-with-failure-status]], return `invalid-pivot(k,p_k)`.
Otherwise compute
$\ell_k=\operatorname{fl}(\sqrt{p_k})$; on failure or a nonpositive or
nonnormal result return `factor-range-failure(k,operation)`. For $k<n$ compute
$e_k=\operatorname{fl}(c_k/\ell_k)$ and return the same indexed factor
status on failure.

Solve $Lz=f$ by forward substitution in increasing index order: set
$z_1=\operatorname{fl}(f_1/\ell_1)$; for $k>1$, compute
$a=\operatorname{fl}(e_{k-1}z_{k-1})$,
$b=\operatorname{fl}(f_k-a)$, and $z_k=\operatorname{fl}(b/\ell_k)$.
Solve $L^T\widehat m=z$ in decreasing order: set
$\widehat m_n=\operatorname{fl}(z_n/\ell_n)$; for $k<n$, compute
$a=\operatorname{fl}(e_k\widehat m_{k+1})$,
$b=\operatorname{fl}(z_k-a)$, and
$\widehat m_k=\operatorname{fl}(b/\ell_k)$. At the first failed operation
return `solve-range-failure(direction,k,operation)`. These are separate
multiply, subtract, and divide operations; no fused multiply-add is used.
Set $\widehat M_1=\widehat M_r=0$ and copy the interior vector
$\widehat M_{k+1}=\widehat m_k$.

Compute the rounded residual in increasing row order. Within row $k$, form
the products $T_{kj}\widehat m_j$ for existing columns $j$ in increasing
column order, and add them sequentially from an exact zero accumulator to
obtain $\widehat v_k$. Then compute
$\widehat w_k=\operatorname{fl}(\widehat v_k-f_k)$. Return the first
`residual-range-failure(k,j,operation)` if any operation fails. Structural
zero entries are omitted; all included products, additions, and the final
subtraction use the operationwise model.

The certificate calculations that follow are exact rational arithmetic on
the finite binary values and the rational $u$; they are not rounded
floating-point calculations. Define
$$
F_1=\sum_{k=1}^n|d_k|+2\sum_{k=1}^{n-1}|c_k|,\quad X_1=\sum_{k=1}^n|\widehat m_k|,\quad Y_1=\sum_{k=1}^n|f_k|,\quad V_1=\sum_{k=1}^n|\widehat v_k|,\quad W_1=\sum_{k=1}^n|\widehat w_k|
$$
and
$$
g_n=\frac{1+6u}{1-(n-1)u}-1,\qquad C=W_1+g_nF_1X_1+u(V_1+Y_1).
$$
Form the exact natural-cubic matrix $A$ and right-hand side $b$ for the
original stored data as in
[[thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots]]:
$A_{kk}=2(h_k+h_{k+1})$, $A_{k,k+1}=A_{k+1,k}=h_{k+1}$, and
$b_k=6((y_{k+2}-y_{k+1})/h_{k+1}-(y_{k+1}-y_k)/h_k)$, with only existing
interior entries included; represent $A$ by its three diagonals and compute
the following row quantities as a stream, without allocating dense matrices.
Compute
$$
\alpha=\max_k\sum_j|A_{kj}-T_{kj}|,\quad \beta=\max_k|b_k-f_k|,\quad Q=\max_k|\widehat m_k|,\quad \delta=\min_{1\le k\le n}(h_k+h_{k+1}),\quad H=\max_{1\le i<r}h_i,
$$
and
$$
B=\frac{H^2}{8\delta}(C+\alpha Q+\beta).
$$
All denominators are positive: $h_i>0$, $\delta>0$, and
$1-(n-1)u>0$. Return `success(\widehat M,C,\alpha,\beta,B)`. If a
resource-limited implementation cannot complete the exact rational
certificate, it may return `certificate-resource-failure`, which carries no
certified $B$.

For $r\ge3$, associate to the returned vector $\widehat M$ the piecewise
cubic reconstruction on each $[x_i,x_{i+1}]$ given by
$$
\widehat s_i(x)=\frac{\widehat M_i(x_{i+1}-x)^3+\widehat M_{i+1}(x-x_i)^3}{6h_i}+\left(y_i-\frac{\widehat M_i h_i^2}{6}\right)\frac{x_{i+1}-x}{h_i}+\left(y_{i+1}-\frac{\widehat M_{i+1}h_i^2}{6}\right)\frac{x-x_i}{h_i}.
$$
This reconstruction interpolates the stored data and need not be $C^1$ at an interior knot;
it is a piecewise cubic reconstruction, not necessarily a natural spline.
The certificate concerns exact evaluation of these pieces. Any floating-point
evaluation of them needs a separate piece-evaluation error allowance.

## Remarks

This local procedure specializes the published rounded Cholesky and
substitution methods to the natural-cubic tridiagonal system; it does not
redefine natural interpolation. Its termination and linear arithmetic and
storage bounds are proved in
[[thm-natural-tridiagonal-cholesky-solve-residual-certificate]].
