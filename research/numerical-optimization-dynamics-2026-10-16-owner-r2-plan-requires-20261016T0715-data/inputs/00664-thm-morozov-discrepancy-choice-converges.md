---
id: thm-morozov-discrepancy-choice-converges
kind: theorem
title: Morozov discrepancy roots exist and converge for nonzero exact data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 4
deps:
  - alg-morozov-discrepancy-bracketing-and-bisection
  - lem-tikhonov-data-residual-continuity-monotonicity-and-limits
  - thm-tikhonov-convergence-under-noise-parameter-coupling
  - def-compact-spectral-filter-and-qualification
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - def-countable-choice
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - def-inner-product-space
  - cor-inner-product-induces-a-norm
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 4, Theorem 4.7 on discrepancy existence and Chapter 6, Tikhonov regularization, PDF pp. 34–35 and 55–63. Clason assumes dense range for the existence theorem; the present proof uses the explicit range-distance condition.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slide 8 states the discrepancy target and its dependence on the noise-level estimate.
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be compact between real or complex
Hilbert spaces, let $x^\dagger\perp\ker A$, and let the exact datum
$y=Ax^\dagger$ be nonzero. Fix $\tau>1$. For any sequence
$\delta_j>0$ tending to zero and data $y_j=y+e_j$ with $\|e_j\|\le\delta_j$,
assume $\tau\delta_j<\|y_j\|$ (which holds for all sufficiently large $j$
when $y\ne0$). Then for each such $j$ there exists a positive parameter
$\lambda_j$ satisfying the Morozov equation
$$\|A(A^*A+\lambda_j I)^{-1}A^*y_j-y_j\|=\tau\delta_j.$$
Every sequence of exact roots $\lambda_j$ of these equations satisfies
$\lambda_j\to0$, $\delta_j/\sqrt{\lambda_j}\to0$, and
$$\|(A^*A+\lambda_j I)^{-1}A^*y_j-x^\dagger\|\to0.$$
Whenever [[alg-morozov-discrepancy-bracketing-and-bisection]] returns a
bracket for the same data and target, the bracket contains at least one such
exact root. Finite-budget exhaustion remains inconclusive.

## Facts & Assumptions

**Given:** Countable Choice, compact $A:X\to Y$, $x^\dagger\perp\ker A$,
nonzero $y=Ax^\dagger$, $\tau>1$, and noisy data $y_j=y+e_j$ with
$\|e_j\|\le\delta_j$, $\delta_j\to0$, and $\tau\delta_j<\|y_j\|$.

[A1] [[def-countable-choice]]: Countable Choice is the hypothesis of the
compact spectral theorem; no full Choice is used.

[F1] [[lem-tikhonov-data-residual-continuity-monotonicity-and-limits]]: The
residual $r_g(\lambda)$ is continuous and nondecreasing, tends to
$\operatorname{dist}(g,\overline{\operatorname{Ran}A})$ at zero and to
$\|g\|$ at infinity, and its residual vector is
$\lambda(AA^*+\lambda I)^{-1}g$ with multiplier norm at most one.

[F2] [[alg-morozov-discrepancy-bracketing-and-bisection]]: An admissible
finite search returns $[\lambda_-,\lambda_+]$ with
$r_{y_j}(\lambda_-)<\tau\delta_j\le r_{y_j}(\lambda_+)$; an exhausted budget
returns no bracket.

[F3] [[lem-compact-gram-operator-is-positive-and-has-kernel]]: $A^*A$ and
$AA^*$ are compact positive self-adjoint operators, with
$\ker(A^*A)=\ker A$.

[F4] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: The
nonzero eigenspaces of $A^*A$ are orthogonal and their finite-subset sums
converge to every vector perpendicular to its kernel.

[F5] [[lem-hilbert-tikhonov-normal-operator-invertible]]: Both shifted normal
operators for $A$ and $A^*$ are invertible when $\lambda>0$.

[F6] [[def-compact-spectral-filter-and-qualification]]: The Tikhonov solution
is $x_\lambda^g=(A^*A+\lambda I)^{-1}A^*g$.

[F7] [[thm-tikhonov-convergence-under-noise-parameter-coupling]]: If
$\lambda_j\to0$ and $\delta_j/\sqrt{\lambda_j}\to0$, the corresponding
Tikhonov solutions converge to $x^\dagger$.

[F8] [[def-hilbert-space-adjoint]]: $\langle Au,z\rangle
=\langle u,A^*z\rangle$.

[F9] [[thm-hilbert-adjoint-properties]]: $A^*A$ is self-adjoint.

[F10] [[cor-inner-product-induces-a-norm]]: $\|u\|^2=\langle u,u\rangle$.

## Proof
1.1 Because $y\in\operatorname{Ran}A$, $\operatorname{dist}(y_j,\overline{\operatorname{Ran}A})\le \|y_j-y\|\le\delta_j<\tau\delta_j$. The upper endpoint condition is in the Given data. By [F1], the residual is continuous with endpoint limits strictly below and strictly above $\tau\delta_j$; the intermediate value theorem gives at least one positive root. [given, F1, algebra, choose, A1]

1.2 Put $T=AA^*$ and $L_\lambda=\lambda(T+\lambda I)^{-1}$. By [F1], $\|L_\lambda\|\le1$, so the reverse triangle inequality gives $$|r_{y_j}(\lambda)-r_y(\lambda)| \le\|L_\lambda(y_j-y)\|\le\delta_j.$$ At any root $\lambda_j$, this implies $$(\tau-1)\delta_j\le r_y(\lambda_j)\le(\tau+1)\delta_j.$$ [given, F1, algebra, A1]

1.3 The intertwining identity $(AA^*+\lambda I)A=A(A^*A+\lambda I)$ and [F5] imply $L_\lambda A=A\lambda(A^*A+\lambda I)^{-1}$. By [F6], this is the residual multiplier for the exact-data Tikhonov solution, so $r_y(\lambda)=\|L_\lambda y\|$. For $x^\dagger\perp\ker A$, [F3]–[F4] give $x^\dagger=\sum_{t>0}P_tx^\dagger$. The images $AP_tx^\dagger$ for distinct $t$ are orthogonal, since $\langle Au,Av\rangle=\langle A^*Au,v\rangle=t\langle u,v\rangle$ when $u\in E_t$ and $v$ lies in a different eigenspace. Also $\|AP_tx^\dagger\|^2=t\|P_tx^\dagger\|^2$. Therefore $$\frac{r_y(\lambda)^2}{\lambda} =\sum_{t>0}\frac{\lambda t}{(t+\lambda)^2}\|P_tx^\dagger\|^2.$$ Each scalar coefficient is at most $1/4$, because $(t+\lambda)^2-4t\lambda=(t-\lambda)^2\ge0$, and for fixed $t>0$ it tends to zero as $\lambda\downarrow0$. Choose a finite spectral set whose orthogonal tail of $x^\dagger$ has squared norm below any prescribed $\varepsilon>0$; the tail contribution is at most $\varepsilon/4$, while the finite sum tends to zero. Thus $r_y(\lambda)/\sqrt\lambda\to0$. [given, F3, F4, F5, F8, F9, F10, algebra, A1, F6]

2.1 Any bracket returned by [F2] has residual below target at its lower end and at least target at its upper end. Continuity from [F1] gives a root inside the bracket. Thus the finite procedure retains an exact discrepancy crossing whenever it succeeds. [F1, F2, step 1.1, algebra, A1]

2.2 For every $\varepsilon>0$, $L_\varepsilon$ is injective by [F5], so $r_y(\varepsilon)=\|L_\varepsilon y\|>0$ because $y\ne0$. The residual $r_y$ is nondecreasing by [F1]. If $\lambda_j\ge\varepsilon$ along an infinite subsequence, then $r_y(\lambda_j)\ge r_y(\varepsilon)>0$ there, contradicting the upper bound in step 1.2 as $\delta_j\to0$. Hence $\lambda_j\to0$. [given, F1, F5, step 1.2, algebra, A1]

3.1 From step 1.2, $\delta_j/\sqrt{\lambda_j}\le r_y(\lambda_j)/((\tau-1)\sqrt{\lambda_j})\to0$ by step 1.3. Step 2.2 already gives $\lambda_j\to0$, so [F7] proves convergence of the Tikhonov solutions to $x^\dagger$. [F7, step 2.2, step 1.3, algebra, A1, step 1.2] ∎
