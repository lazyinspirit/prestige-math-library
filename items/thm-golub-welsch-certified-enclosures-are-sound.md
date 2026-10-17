---
id: thm-golub-welsch-certified-enclosures-are-sound
kind: theorem
title: Certified Golub–Welsch intervals contain the Gaussian nodes and weights
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 11
deps:
  - alg-golub-welsch-certified-node-and-weight-enclosures
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - lem-gauss-monic-three-term-recurrence
  - thm-jacobi-matrix-spectrum-equals-gauss-nodes
  - thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared
  - lem-gauss-weight-residual-gap-bound
  - thm-gauss-polynomial-moment-pairing-is-an-inner-product
  - alg-near-orthonormal-hermitian-eigenvalue-certifier
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - thm-uniform-interval-linear-residual-certifier-soundness
  - thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Statement

Let admissible moment data $(a,b,m,r,\mu)$ with $r\ge2m-1$ and finite moment
intervals satisfying the promise in
[[alg-golub-welsch-certified-node-and-weight-enclosures]] be given. If that
algorithm returns `certified` with node intervals $N_i$ and weight intervals
$W_i$, then the Gaussian nodes $x_i$ and weights $w_i$ satisfy
$x_i\in N_i$ and $w_i\in W_i$ for every $i=1,\ldots,m$. An inconclusive
return makes no claim.

## Facts & Assumptions

**Given:** Admissible moment data, truthful moment enclosures through degree
$2m-1$, and a certified algorithm return.

[F1] [[thm-uniform-interval-linear-residual-certifier-soundness]]: on
certified output, each supplied Hankel family has a unique solution and its
coefficients lie in the reported error balls.

[F2] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: all finite
outward interval expression DAGs contain the corresponding exact values.

[F3] [[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]] and
[[thm-jacobi-matrix-spectrum-equals-gauss-nodes]]: the true Jacobi matrix is
real symmetric and its increasingly ordered eigenvalues are exactly the
Gaussian nodes in $(a,b)$.

[F4] [[alg-near-orthonormal-hermitian-eigenvalue-certifier]] and
[[thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness]]: success
requires validated residual, Gram and norm bounds, and every increasingly
ordered eigenvalue in the admitted Hermitian matrix family lies in its
returned node interval.

[F5] [[thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared]]:
for a unit eigenvector $u_i$ at $x_i$, $w_i=\mu_0|(u_i)_1|^2$.

[F6] [[lem-gauss-weight-residual-gap-bound]]: a nonzero approximate
eigenvector with norm lower bound $s$, residual bound $\rho$, and separation
gap lower bound $g_i$ gives weight error at most
$2\sqrt2\,\mu_0\rho/(s g_i)$.

## Proof

1.1 Each coefficient solve in step 1 uses the full moment rectangle families, which contain the actual Hankel matrix and right-hand side by the moment promise. By [F1], successful uniform residual certification encloses the unique actual coefficient vector. The true Hankel matrices are positive definite by the support hypothesis and [[thm-gauss-polynomial-moment-pairing-is-an-inner-product]]; thus these solutions are the coefficients of the monic orthogonal polynomials. By [F2], the arithmetic in step 2 encloses every true $h_j,\alpha_j,\beta_j$ and hence the true Jacobi matrix. [F1, F2, given, algebra]

2.1 If $m=1$, the true Jacobi matrix is the one-by-one matrix $[\alpha_0]$. By [F3] its sole eigenvalue is the sole Gaussian node $x_1$, so $x_1=\alpha_0$. Its unit eigenvector is $(1)$, and [F5] gives $w_1=\mu_0$. The outward interval $\alpha_0$ and moment interval $I_0$ in step 3 of the algorithm contain these exact values by [F2]. [F2, F3, F5, step 1.1, algebra]

2.2 Assume $m\ge2$. By [F3], the eigenvalues of the true Jacobi matrix are precisely the Gaussian nodes. The matrix family in step 5 contains this matrix by step 1.1, and successful near-orthonormal certification gives $x_i\in N_i$ by [F4]. [F3, F4, step 1.1]

3.1 For column $v_i$ of $V$, the accepted checks in step 5 and [F4] certify $\|Jv_i-\theta_i v_i\|_2\le\rho$ and $\|V^*V-I\|_2\le d<1$. Therefore $\|v_i\|_2^2\ge1-d$, so the positive lower endpoint $s$ of the outward enclosure of $\sqrt{1-d}$ is a lower bound on its norm. The disjoint ordered intervals in step 5 make $g_i$ in step 6 a positive lower bound for the distance from $\theta_i$ to every other true node. [F2, F4, step 2.2, algebra]

4.1 Apply [F6] to $(v_i,\theta_i)$ and the bounds of step 3.1. The interval $C_i$ contains $\mu_0(v_i)_1^2/\|v_i\|_2^2$ and $R_i$ is at least the resulting error bound, because $\sup(I_0)\ge\mu_0$. Thus the exact Gaussian weight $w_i$ belongs to $C_i+[-R_i,R_i]=W_i$ by [F5]. [F2, F5, F6, step 3.1, algebra]

5.1 The $m=1$ case is step 2.1; for $m\ge2$, steps 2.2 and 4.1 give every node and weight enclosure. These cases exhaust $m\ge1$, proving the claim. [given, step 2.1, step 2.2, step 4.1, cases] ∎
