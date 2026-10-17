---
id: thm-newton-matrix-sign-convergence-and-quadratic-rate
kind: theorem
title: "Newton sign iteration converges off the imaginary axis and is locally quadratic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-newton-matrix-sign-iteration
  - def-matrix-sign-for-spectrum-off-imaginary-axis
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - cor-finite-dimensional-normed-spaces-are-banach
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Functions of Matrices: Theory and Computation, Chapter 5: Matrix Sign Function"
      url: "https://eprints.maths.manchester.ac.uk/1067/1/OT104HighamChapter5.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$ have no eigenvalues on $i\mathbb R$, let
$S=\operatorname{sign}(A)$, and define the exact Newton sequence
$$X_0=A,\qquad X_{k+1}=\frac12(X_k+X_k^{-1}).$$
Then every iterate is defined, $X_k\to S$, and for every submultiplicative
matrix norm,
$$\|X_{k+1}-S\|\le\frac12\|X_k^{-1}\|\,\|X_k-S\|^2.$$
Thus the exact iteration is locally quadratically convergent. No error bound
for rounded iterates of [[alg-newton-matrix-sign-iteration]] is asserted.

## Facts & Assumptions

**Given:** A finite complex matrix with spectrum disjoint from the imaginary
axis and the exact Newton sequence.

[F1] The scalar sign is $1$ on the open right half-plane and $-1$ on the open
left half-plane, and $S$ is its analytic primary matrix function
([[def-matrix-sign-for-spectrum-off-imaginary-axis]]).

[F2] Analytic primary functions are given blockwise by their Taylor jets and
respect similarity ([[thm-analytic-primary-matrix-function-jordan-contour-agreement]]).

[F3] The exact Newton update is $X_{k+1}=(X_k+X_k^{-1})/2$
([[alg-newton-matrix-sign-iteration]]).

[F4] Every finite-dimensional complex normed space is complete
([[cor-finite-dimensional-normed-spaces-are-banach]]).

## Proof

1.1 In a Jordan representation of $A$, [F1]–[F2] give $S=I$ on every right-half-plane block and $S=-I$ on every left-half-plane block. Hence $S^2=I$ and $AS=SA$. Conjugate the exact iterates into this basis. Initially they are block diagonal with upper-triangular Jordan blocks. If $X_k$ has this form, its inverse, when defined, has the same block structure and its diagonal entries are the reciprocals of those of $X_k$. Thus each diagonal entry follows the scalar update $\lambda_{k+1}=(\lambda_k+\lambda_k^{-1})/2$. Whenever $\operatorname{Re}\lambda_k\ne0$, $\operatorname{Re}\lambda_{k+1} =\frac{\operatorname{Re}\lambda_k}{2} \left(1+|\lambda_k|^{-2}\right),$ so its nonzero real-part sign is unchanged. By induction all diagonal entries remain nonzero and off $i\mathbb R$, each $X_k$ is invertible, and the next update is defined. [F1, F2, F3, algebra]

2.1 Since the Jordan-block diagonal values remain in the same half-planes, [F2] gives $\operatorname{sign}(X_k)=S$ for every $k$. Also $X_k$ commutes with $S$: this holds for $X_0=A$, and if it holds for $X_k$, then its inverse also commutes with $S$, so the update [F3] preserves commutation. The eigenvalues of $X_k+S$ are $\lambda_k+s$ on the corresponding blocks, with $\operatorname{Re}(\lambda_k+s)\ne0$ because $\operatorname{Re}\lambda_k$ has sign $s$. Thus $X_k+S$ is invertible. Define $G_k=(X_k-S)(X_k+S)^{-1}$. [F1, F2, F3, step 1.1, algebra]

3.1 Using $S^2=I$ and commutation with $X_k$, expansion gives $X_{k+1}\pm S=\frac12X_k^{-1}(X_k\pm S)^2, \qquad G_{k+1}=G_k^2.$ Hence $G_k=G_0^{2^k}$. The eigenvalues of $G_0$ are $(\lambda-s)/(\lambda+s)$; their moduli are less than one because $|\lambda+s|^2-|\lambda-s|^2=4s\operatorname{Re}\lambda>0$. [step 1.1, step 2.1, algebra]

4.1 In a Jordan basis of $A$, $G_0=(A-S)(A+S)^{-1}$ is block upper triangular; on a block at $\lambda$ its diagonal is $\mu=(\lambda-s)/(\lambda+s)$ and its strictly upper triangular part is nilpotent, say $N_0^d=0$. Its $q$th power is $\sum_{j<d}\binom qj\mu^{q-j}N_0^j$. Each term tends to zero as $q\to\infty$ because $|\mu|<1$ and exponential decay dominates the polynomial factor $\binom qj$; if $\mu=0$, the nilpotent block power is eventually zero. Thus $G_0^{2^k}\to0$. The eigenvalues of $G_k=G_0^{2^k}$ have modulus less than one, so $I-G_k$ is invertible. Rearranging the definition of $G_k$ gives $X_k=(I-G_k)^{-1}(I+G_k)S$, so $X_k\to S$. [F2, step 3.1, algebra]

5.1 Direct expansion, using $X_kS=SX_k$ and $S^2=I$, gives $X_{k+1}-S=\frac12X_k^{-1}(X_k-S)^2$. Taking any submultiplicative norm proves the stated quadratic inequality. To bound the inverse near the limit, write $X_k=S(I+Y_k)$ with $Y_k=S^{-1}(X_k-S)$. Since $X_k\to S$, eventually $\|Y_k\|<1/2$. The geometric series $\sum_{j\ge0}(-Y_k)^j$ is Cauchy in the chosen norm because its tail is bounded by the scalar geometric tail; the matrix space is complete by [F4]. Multiplication of its partial sums by $I+Y_k$ shows its sum is $(I+Y_k)^{-1}$, whose norm is at most $\|I\|+\|Y_k\|/(1-\|Y_k\|)\le\|I\|+1$. Thus $\|X_k^{-1}\|\le(\|I\|+1)\|S^{-1}\|$ eventually, so the displayed inequality has a fixed quadratic constant near the limit. [F1, F4, step 1.1, step 4.1, algebra] ∎
