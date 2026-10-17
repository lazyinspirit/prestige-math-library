---
id: lem-tikhonov-data-residual-continuity-monotonicity-and-limits
kind: lemma
title: Compact-operator Tikhonov residuals are continuous and increase from range distance to data norm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 2
deps:
  - def-compact-spectral-filter-and-qualification
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - lem-compact-spectral-multiplier-is-well-defined
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - def-countable-choice
  - def-orthogonality-and-orthogonal-complement
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-hilbert-adjoint-properties
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 4, Theorem 4.7 on discrepancy selection and Chapter 6, Tikhonov regularization, PDF pp. 34–35 and 55–63.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 8–9 discuss the discrepancy residual and its noise-level limitation.
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be compact between real or complex
Hilbert spaces. For data $g\in Y$ and $\lambda>0$, let
$x_\lambda(g)=(A^*A+\lambda I)^{-1}A^*g$ and
$r_g(\lambda)=\|Ax_\lambda(g)-g\|$. Then $r_g$ is continuous and
nondecreasing on $(0,\infty)$, and
$$g-Ax_\lambda(g)=\lambda(AA^*+\lambda I_Y)^{-1}g, \qquad\|\lambda(AA^*+\lambda I_Y)^{-1}\|\le1,$$
and
$$\lim_{\lambda\downarrow0}r_g(\lambda) =\operatorname{dist}(g,\overline{\operatorname{Ran}A}),\qquad \lim_{\lambda\to\infty}r_g(\lambda)=\|g\|.$$

## Facts & Assumptions

**Given:** Countable Choice, compact $A:X\to Y$ between Hilbert spaces,
data $g\in Y$, and $\lambda>0$.

[A1] [[def-countable-choice]]: Countable Choice is the hypothesis of the
compact spectral theorem; no full Choice is used.

[F1] [[def-compact-spectral-filter-and-qualification]]: The Tikhonov solution
is $x_\lambda(g)=(A^*A+\lambda I)^{-1}A^*g$.

[F2] [[lem-compact-gram-operator-is-positive-and-has-kernel]]: $AA^*$ is
compact, positive and self-adjoint, with $\ker(AA^*)=\ker A^*$.

[F3] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: The
nonzero eigenspaces of $AA^*$ are mutually orthogonal, and together with its
kernel they give an orthogonal decomposition of $Y$.

[F4] [[lem-compact-spectral-multiplier-is-well-defined]]: A bounded scalar
multiplier $q$ on the spectrum of a compact self-adjoint operator defines a
bounded operator with norm at most $\sup|q|$.

[F5] [[lem-hilbert-tikhonov-normal-operator-invertible]]: For bounded $T$ and
$\lambda>0$, $T^*T+\lambda I$ is invertible.

[F6] [[def-orthogonality-and-orthogonal-complement]]: $z\perp\operatorname{Ran}A$
exactly when $z$ is orthogonal to every $Ax$.

[F7] [[thm-orthogonal-decomposition-by-a-closed-subspace]]: A closed subspace
of a Hilbert space has an orthogonal projection, and the distance to it is the
norm of the orthogonal-complement component.

[F8] [[thm-hilbert-adjoint-properties]]: The adjoint identity relates
$\langle Ax,z\rangle$ to $\langle x,A^*z\rangle$.

## Proof
1.1 Put $T=AA^*$. The normal equation $(A^*A+\lambda I)x_\lambda(g)=A^*g$ follows from [F1] and [F5]. Applying $A$ gives $(T+\lambda I)Ax_\lambda(g)=Tg$, whence $$g-Ax_\lambda(g)=\lambda(T+\lambda I)^{-1}g.$$ The inverse exists by [F5] applied to $A^*:Y\to X$. The multiplier $q(s)=\lambda/(s+\lambda)$, including $q(0)=1$, has supremum at most one; [F4] gives the operator norm bound. [F1, F2, F4, F5, algebra, A1]

2.1 Let $P_s$ be the eigenspace projections of $T$ for its nonzero eigenvalues $s$, and $P_0$ the projection onto $\ker T$. By [F3] and step 1.1, $$r_g(\lambda)^2=\|P_0g\|^2+ \sum_{s>0}\left(\frac{\lambda}{s+\lambda}\right)^2\|P_sg\|^2.$$ Each coefficient $\lambda/(s+\lambda)$ is nondecreasing in $\lambda$; therefore the sum and its nonnegative square root are nondecreasing. [F3, step 1.1, algebra, A1]

2.2 On any compact interval $[a,b]\subset(0,\infty)$, $$\left|\frac{\lambda}{s+\lambda}-\frac{\mu}{s+\mu}\right| =\frac{s|\lambda-\mu|}{(s+\lambda)(s+\mu)} \le\frac{\|T\|}{a^2}|\lambda-\mu|$$ for $0\le s\le\|T\|$ and $\lambda,\mu\in[a,b]$. Hence the residual multipliers vary continuously in operator norm, which makes $\lambda\mapsto\lambda(T+\lambda I)^{-1}g$ and its norm continuous. [F2, F3, step 1.1, algebra, A1]

2.3 As $\lambda\downarrow0$, the coefficient on $P_0g$ stays $1$ and each coefficient on $P_sg$ for $s>0$ tends to zero. For a given $\varepsilon>0$, choose a finite spectral set whose orthogonal tail of $g$ has norm below $\varepsilon/2$; the multipliers have norm at most one, and the finite positive-eigenvalue sum tends to zero. Thus the residual tends to $P_0g$. As $\lambda\to\infty$, the bound $\sup_{0\le s\le\|T\|}|1-\lambda/(s+\lambda)|\le\|T\|/\lambda$ shows that the residual tends to $g$. [F3, step 1.1, algebra, A1]

3.1 The adjoint identity [F8] gives $(\operatorname{Ran}A)^\perp=\ker A^*$: orthogonality to every $Ax$ is equivalent to $\langle x,A^*z\rangle=0$ for every $x$, which is equivalent to $A^*z=0$. Taking closures leaves the orthogonal complement unchanged. By [F2], $\ker T=\ker A^*$, and [F7] identifies $\operatorname{dist}(g,\overline{\operatorname{Ran}A})=\|P_0g\|$. Step 2.3 gives the claimed lower endpoint, while its upper endpoint is $\|g\|$. [F2, F6, F7, F8, step 2.3, A1] ∎
