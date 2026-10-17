---
id: alg-golub-welsch-certified-node-and-weight-enclosures
kind: algorithm
title: Certified Gaussian nodes and weights by Golub–Welsch
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - lem-gauss-monic-three-term-recurrence
  - thm-jacobi-matrix-spectrum-equals-gauss-nodes
  - thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared
  - lem-gauss-weight-residual-gap-bound
  - def-intervals-rectangles-and-complex-balls
  - def-outward-rounded-interval-and-ball-operations
  - def-dyadic-floating-point-format-and-directed-rounding
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - alg-thick-and-implicitly-restarted-arnoldi-with-locking
  - alg-uniform-interval-linear-residual-certifier
  - thm-uniform-interval-linear-residual-certifier-soundness
  - alg-near-orthonormal-hermitian-eigenvalue-certifier
  - thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness
justified_by:
  - thm-golub-welsch-certified-enclosures-are-sound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Definition

Input an integer $m\ge1$, admissible moment data $(a,b,m,r,\mu)$ from
[[def-gauss-moment-data]] with $r\ge2m-1$, finite dyadic intervals
$I_0,\ldots,I_{2m-1}$ promised to contain the respective moments
$\mu_j=\int x^j\,d\mu(x)$, a finite dyadic format, and positive dyadic
width tolerances $\varepsilon_x,\varepsilon_w$. The measure and the truth of
the moment-enclosure promise are mathematical input promises; this procedure
does not verify them. All interval operations use
[[def-outward-rounded-interval-and-ball-operations]]. Any overflow, invalid
domain, nonpositive divisor, failed solve, undecidable comparison, or failed
certification returns `inconclusive`.

1. Set $p_0=1$. For each $k=1,\ldots,m-1$, enclose the Hankel matrix and
right-hand side
$$ (H_k)_{ij}=\mu_{i+j},\qquad (b_k)_i=-\mu_{i+k} \quad(0\le i,j<k) $$
by the corresponding moment intervals. Take the exact rational midpoints of
these interval data and use exact Gaussian elimination with row swaps to the
first available nonzero pivot to produce point proposals for $H_k^{-1}$ and
$-H_k^{-1}b_k$. If a pivot is zero, return `inconclusive`. Round every
proposal down to a finite dyadic in the selected format; on overflow, return
`inconclusive`. Call
[[alg-uniform-interval-linear-residual-certifier]] on the full rectangle
families with these proposals. Continue only on `certified`, and enclose each
coefficient of the unique solution by its reported center plus or minus the
outward-rounded uniform error radius. These intervals enclose the coefficients
of $p_k(X)=X^k+\sum_{j<k}c_{kj}X^j$ whenever the moment promise holds.

2. Using outward interval arithmetic, compute for $0\le j<m$
$$ h_j=\sum_{r,s=0}^{j}c_{jr}c_{js}\mu_{r+s},\qquad \alpha_j=\frac{\sum_{r,s=0}^{j}c_{jr}c_{js}\mu_{r+s+1}}{h_j}, $$
where $c_{jj}=1$ and $p_0$ has $c_{00}=1$. For $1\le j<m$, also compute
$\beta_j=h_j/h_{j-1}$. If any enclosure for $h_j$ does not have a strictly
positive lower endpoint, or a division or square root is not certified on its
domain, return `inconclusive`. Form a real symmetric interval Jacobi matrix
$\mathcal J$ with diagonal intervals $\alpha_j$ and mirrored off-diagonal
intervals $\sqrt{\beta_j}$; reuse the same interval in each mirrored pair.
Use for certification the family of all real symmetric tridiagonal matrices
with those diagonal and mirrored off-diagonal entries and all other entries
zero. The moment promise and the preceding enclosures ensure that this family
contains the true Jacobi matrix.

3. If $m=1$, set the node interval to $\alpha_0$ and the weight interval to
$I_0$. Return `certified` exactly when both widths meet their tolerances and
the node interval lies in $(a,b)$; otherwise return `inconclusive`.

4. If $m\ge2$, take the interval midpoint matrix $J_c$ and run
[[alg-thick-and-implicitly-restarted-arnoldi-with-locking]] in exact arithmetic
on $J_c$ from the first coordinate vector, with full dimension $m$, target
count $m-1$, restart budget $N_{\max}=1$, thick restart mode, and zero
Ritz residual tolerance. Supply the following target rule if a restart is
reached: scan the current Ritz vectors in the projected eigensolve's returned
order, retain the first vectors that increase the span modulo all locked
vectors, and stop after selecting the required $r-k=m-1-k$ vectors. If the
list supplies too few independent vectors, return `unavailable`. No shift rule
is needed in thick mode. The full-dimension initial cycle is attempted before
any restart; the finite restart budget is a fallback, not a success promise.
On any status other than `converged`, or unless the returned locked and current
Ritz data together contain $m$ pairs, return `inconclusive`. Verify that every
returned pair has a real Ritz value and exactly zero original residual;
otherwise return `inconclusive`. For each normalized Ritz vector $y$, if it has
complex coordinates replace it by the normalization of the nonzero one of
$\operatorname{Re}y$ and $\operatorname{Im}y$ having larger Euclidean norm.
This is still an eigenvector of the real matrix $J_c$ for the same real Ritz
value. Round each resulting real Ritz-vector coordinate downward to a finite
dyadic and each real Ritz value downward. If the rounded Ritz values are not
strictly increasing, return `inconclusive`; otherwise call the resulting real
matrix $V$ and diagonal matrix $\Theta$.

5. By outward interval operations, calculate a Frobenius upper bound $d$ for
$V^*V-I$, a Frobenius upper bound $\rho$ for $JV-V\Theta$ over the entire
family $\mathcal J$, and Frobenius upper bounds $M_J,M_\Theta$ for $J$ and
$\Theta$. If $d\ge1$, return `inconclusive`. Compute an outward upper bound
$\tau$ for $1-\sqrt{1-d}$. Call
[[alg-near-orthonormal-hermitian-eigenvalue-certifier]] for the Hermitian
family of Jacobi matrices represented by $\mathcal J$, using $(V,\Theta)$ and
the proposed bounds $(d,\rho,M_J,M_\Theta,\tau)$. Continue only on
`certified`. Let $N_i$ be the returned node intervals in increasing order.
Require that they are pairwise disjoint, each lies in $(a,b)$, and each width
is at most $\varepsilon_x$; otherwise return `inconclusive`.

6. For each $i$, let $g_i$ be the minimum distance from $\theta_i$ to the
other node intervals $N_k$, $k\ne i$. Require $g_i>0$. Put $s$ equal to the
lower endpoint of an outward enclosure of $\sqrt{1-d}$ and require $s>0$;
also require $\sup(I_0)>0$. Outward-enclose
$$ C_i=I_0\,\frac{V_{1i}^{2}}{\sum_{j=1}^{m}V_{ji}^{2}},\qquad R_i=\frac{2\sqrt2\,\sup(I_0)\,\rho}{s g_i},\qquad W_i=C_i+[-R_i,R_i]. $$
The denominator must have a strictly positive lower endpoint. Return
`certified` with $(N_i,W_i)_{i=1}^m$ exactly when every $W_i$ is finite and has
width at most $\varepsilon_w$; otherwise return `inconclusive`. A certified
return claims only enclosures, not that the requested tolerances can always
be attained.

## Soundness interface

Under the input promises, success of each batch 61 interval certifier and
sound outward interval evaluation, step 1 encloses the actual orthogonal
polynomial coefficients and step 2 encloses the actual Jacobi matrix. The
Ritz computation supplies proposals only. The near-orthonormal Hermitian
certifier must establish the node intervals for every matrix in that family;
the residual-gap lemma then establishes the weight intervals. These are the
claims formalized by
[[thm-golub-welsch-certified-enclosures-are-sound]].
