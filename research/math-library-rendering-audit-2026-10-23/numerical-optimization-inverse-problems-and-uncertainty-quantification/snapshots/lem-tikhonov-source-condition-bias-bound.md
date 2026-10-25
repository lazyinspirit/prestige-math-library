---
id: lem-tikhonov-source-condition-bias-bound
kind: lemma
title: Tikhonov has qualification one for source powers of the Gram operator
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 2
deps:
  - def-compact-spectral-filter-and-qualification
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - def-countable-choice
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
      locator: Chapter 6, Tikhonov qualification and source-condition rates, PDF pp. 55–58; the source exponent is converted from powers of |A| to powers of A*A.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf
      locator: Complete 29-slide chapter; slides 17–18 give the Tikhonov residual filter $\lambda/(\sigma_i^2+\lambda)$ in the squared-penalty convention.
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be compact between real or complex
Hilbert spaces, put $S=A^*A$, and suppose
$x^\dagger=S^\nu w$ with $0<\nu\le1$ and $\|w\|\le R$. Then for every
$\lambda>0$ the exact-data Tikhonov bias satisfies
$$\|x^\dagger-(A^*A+\lambda I)^{-1}A^*Ax^\dagger\| \le R\lambda^\nu.$$
Equivalently, the Tikhonov residual filter has qualification at least one in
the convention of [[def-compact-spectral-filter-and-qualification]].

## Facts & Assumptions

**Given:** Countable Choice, compact $A:X\to Y$, $S=A^*A$, a source
representation $x^\dagger=S^\nu w$ with $0<\nu\le1$ and $\|w\|\le R$,
and $\lambda>0$.

[A1] [[def-countable-choice]]: Countable Choice is required by the compact
self-adjoint spectral theorem used for $S$.

[F1] [[lem-compact-gram-operator-is-positive-and-has-kernel]]: $S$ is compact,
positive and self-adjoint.

[F2] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: The
nonzero eigenspaces of $S$ are orthogonal and the finite-subset spectral sums
converge in norm.

[F3] [[def-compact-spectral-filter-and-qualification]]: The Tikhonov residual
multiplier is $r_\lambda(t)=\lambda/(t+\lambda)$, and $S^\nu$ is the
multiplier $t^\nu$ on positive eigenvalues and zero on the kernel.

## Proof
1.1 On the eigenspace $E_t$ with $t>0$, the exact-data regularization error $x^\dagger-x_\lambda$ multiplies the source coefficient by $\lambda t^\nu/(t+\lambda)$; on $\ker S$ the source multiplier $t^\nu$ is zero. Orthogonality in [F2] and the definition in [F3] therefore give $$x^\dagger-x_\lambda=\sum_{t\in\Sigma} \frac{\lambda t^\nu}{t+\lambda}P_tw.$$ [A1, F1, F2, F3, algebra]

1.2 Put $s=t/\lambda$. If $0<s\le1$, then $s^\nu/(1+s)\le s^\nu\le1$. If $s\ge1$, then $s^\nu/(1+s)\le s^{\nu-1}\le1$ because $\nu\le1$. Thus $\lambda t^\nu/(t+\lambda)=\lambda^\nu s^\nu/(1+s)\le\lambda^\nu$ for every $t>0$. [given, algebra]

2.1 Applying the orthogonal norm formula to step 1.1 and using step 1.2 gives $$\|x^\dagger-x_\lambda\|^2 =\sum_{t\in\Sigma}\left|\frac{\lambda t^\nu}{t+\lambda}\right|^2\|P_tw\|^2 \le\lambda^{2\nu}\sum_{t\in\Sigma}\|P_tw\|^2 \le\lambda^{2\nu}\|w\|^2.$$ Taking nonnegative square roots proves the bound. The scalar inequality in step 1.2 is the qualification condition from [F3] with $C_\nu=1$. [F2, F3, step 1.1, step 1.2, algebra] ∎
