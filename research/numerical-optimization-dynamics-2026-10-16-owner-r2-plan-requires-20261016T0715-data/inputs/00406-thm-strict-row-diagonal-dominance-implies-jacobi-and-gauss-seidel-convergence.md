---
id: thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence
kind: theorem
title: "Strict row diagonal dominance guarantees Jacobi and Gauss–Seidel convergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-diagonal-lower-upper-splitting-convention
  - alg-jacobi-stationary-iteration
  - alg-gauss-seidel-stationary-iteration
  - def-stationary-iteration-from-a-matrix-splitting
  - thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.2.3"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 119–122, Theorem 4.9: strict row diagonal dominance implies convergence of Jacobi and Gauss–Seidel; proofs by eigenvector bounds."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 31"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf"
      locator: "PDF pp. 2–4: strict row diagonal dominance gives Jacobi and Gauss–Seidel contraction bounds."
    - title: "Rutgers University MATH 574, Lecture Notes, §3 Matrix iterative methods"
      url: "https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf"
      locator: "PDF pp. 2–3, Theorems 7–8: strict diagonal dominance convergence tests for Jacobi and Gauss–Seidel."
---

## Statement

Let $n\ge1$ and $A=(a_{ij})\in M_n(\mathbb R)$ satisfy strict row diagonal
dominance:

$$|a_{ii}|>\sum_{j\ne i}|a_{ij}|\qquad(i=1,\ldots,n).$$

Then the Jacobi and fixed-order Gauss–Seidel iterations defined by
[[alg-jacobi-stationary-iteration]] and
[[alg-gauss-seidel-stationary-iteration]] converge in exact arithmetic to the
unique solution of $Ax=b$ for every $b,x^{(0)}\in\mathbb R^n$.

## Facts & Assumptions

**Given:** $n\ge1$, a real matrix $A=(a_{ij})$ satisfying the displayed strict
row diagonal-dominance inequalities, any $b,x^{(0)}\in\mathbb R^n$, and the
fixed order $1,\ldots,n$.

[A1] For each row $i$, $|a_{ii}|>\sum_{j\ne i}|a_{ij}|$.

[L1] The diagonal/lower/upper convention has $A=D-L-U$, with $L$ strictly
lower and $U$ strictly upper ([[def-diagonal-lower-upper-splitting-convention]]).

[F1] Jacobi uses the stationary split $M_J=D$, $N_J=L+U$ and solves
$D x^{(k+1)}=(L+U)x^{(k)}+b$
([[alg-jacobi-stationary-iteration]]).

[F2] Fixed-order Gauss–Seidel uses $M_G=D-L$, $N_G=U$ and solves
$(D-L)x^{(k+1)}=Ux^{(k)}+b$
([[alg-gauss-seidel-stationary-iteration]]).

[L2] If a finite-dimensional triangular system has nonzero diagonal, forward
or backward substitution gives its unique solution
([[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]).

[L3] For a stationary split $A=M-N$ with invertible $M$, the iteration matrix
is $G=M^{-1}N$ and the update is $x^{(k+1)}=Gx^{(k)}+M^{-1}b$
([[def-stationary-iteration-from-a-matrix-splitting]]).

[L4] Such an iteration converges to the unique solution for every right-hand
side and every start if and only if $\rho(G)<1$
([[thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one]]).

## Proof


1.1 By [A1], every $a_{ii}\ne0$. Thus $D$ and the lower-triangular matrix $D-L$ have nonzero diagonal, so the solves in [F1] and [F2] are uniquely defined by [L2]. [A1, F1, F2, L2, algebra]

2.1 By [F1]–[F2] and [L3], the iteration matrices are $G_J=D^{-1}(L+U)$ and $G_G=(D-L)^{-1}U$. [F1, F2, L3, step 1.1, algebra]

3.1 For each row $i$, set $q_i=\sum_{j\ne i}|a_{ij}|/|a_{ii}|$ and $q_J=\max_i q_i<1$. Since $L_{ij}=-a_{ij}$ below the diagonal and $U_{ij}=-a_{ij}$ above it, $\sum_j|(G_J)_{ij}|=q_i$. Hence for any eigenpair $G_Jz=\lambda z$ with $z\ne0$, choose $i$ with $|z_i|=\max_j|z_j|$; the row equation gives $|\lambda||z_i|\le q_i|z_i|\le q_J|z_i|$, so $|\lambda|<1$ and $\rho(G_J)<1$. [A1, L1, step 2.1, algebra]

3.2 Let $G_Gz=\lambda z$ with $z\ne0$, and choose $i$ with $|z_i|=\max_j|z_j|=:R$. The equation $Uz=\lambda(D-L)z$ in row $i$ is $\sum_{j>i}U_{ij}z_j=\lambda(a_{ii}z_i-\sum_{j<i}L_{ij}z_j)$, so $|\lambda|\,|a_{ii}z_i-\sum_{j<i}L_{ij}z_j| \le\sum_{j>i}|U_{ij}||z_j|$. By the reverse triangle inequality and [A1], the left factor is at least $|\lambda|(|a_{ii}|-\sum_{j<i}|a_{ij}|)R$, while the right side is at most $\sum_{j>i}|a_{ij}|R$. Therefore $|\lambda|\le\max_i\frac{\sum_{j>i}|a_{ij}|}{|a_{ii}|-\sum_{j<i}|a_{ij}|}<1$; the denominators are positive and each strict inequality follows from [A1]. Thus $\rho(G_G)<1$. [A1, L1, step 2.1, algebra]

4.1 The bounds in steps 3.1 and 3.2 and [L4] imply that both methods converge to the unique solution of $Ax=b$ for every $b$ and every initial vector. [L4, step 3.1, step 3.2] ∎
