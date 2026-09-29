---
id: def-stable-schur-function-by-bialternants
kind: definition
title: Stable Schur functions from bialternants
status: draft
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §3
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.13
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Definition

For a partition $\lambda$ and an integer $N\ge\ell(\lambda)$, pad $\lambda$
with zero parts to length $N$ and set
$\delta_N=(N-1,N-2,\ldots,0)$. Define the alternating polynomial
$$a_{\lambda+\delta_N}(x_1,\ldots,x_N):=\det\bigl(x_i^{\lambda_j+N-j}\bigr)_{1\le i,j\le N},$$
and define $a_{\delta_N}$ by the same formula with $\lambda=\varnothing$.
The finite-rank Schur polynomial is
$$s_\lambda(x_1,\ldots,x_N):=\frac{a_{\lambda+\delta_N}(x_1,\ldots,x_N)}{a_{\delta_N}(x_1,\ldots,x_N)}.$$
For $0\le N<\ell(\lambda)$, define $s_\lambda(x_1,\ldots,x_N):=0$.
Thus a component is specified at every rank, including rank zero; empty
determinants have value $1$.

**Well-definedness and stability.** The exponents $\lambda_j+N-j$ are
strictly decreasing, so the numerator is alternating. Setting $x_i=x_j$
makes it zero; the factor theorem therefore gives divisibility by each
$x_i-x_j$ in $\mathbb Z[x_1,\ldots,x_N]$. These pairwise nonassociate prime
factors therefore have product $a_{\delta_N}$ dividing the numerator, so the quotient is an
integral polynomial. Since numerator and denominator both change by the sign
of a variable permutation, their quotient is symmetric. Its degree is
$|\lambda|$.

If $N+1>\ell(\lambda)$, setting $x_{N+1}=0$ in the rank-$(N+1)$ numerator
and denominator expands each determinant along its last row; both resulting
minors have the common factor $x_1\cdots x_N$, and after cancelling it the
quotient is exactly the rank-$N$ quotient. At the remaining boundary
$N+1=\ell(\lambda)>0$, every exponent in the rank-$(N+1)$ numerator
is positive, so its last row becomes zero when $x_{N+1}=0$.
The denominator specializes to
$(x_1\cdots x_N)a_{\delta_N}$, a nonzero polynomial (equal to $1$ when
$N=0$). Specializing the polynomial identity
$a_{\lambda+\delta_{N+1}}=a_{\delta_{N+1}}s_\lambda$
and cancelling this nonzero polynomial shows that the specialized Schur
polynomial is zero, as required by the rank-$N$ definition. Below this
boundary both components are zero. Hence these polynomials form a
compatible sequence in the inverse limit
[[def-stable-graded-ring-of-symmetric-functions]], defining
$s_\lambda\in\Lambda^{|\lambda|}$. With the empty determinant equal to $1$,
$s_{\varnothing}=1$. The partition length and padding convention is that of
[[def-partition-young-diagram-and-conjugate-partition]].

At the minimal rank $N=1$, the one-box partition gives
$s_{(1)}(x_1)=x_1$ directly from the quotient; its stable sequence is
nonzero.
