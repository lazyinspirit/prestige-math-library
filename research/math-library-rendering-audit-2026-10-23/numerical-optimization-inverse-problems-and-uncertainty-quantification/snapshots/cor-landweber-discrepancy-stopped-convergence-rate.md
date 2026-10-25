---
id: cor-landweber-discrepancy-stopped-convergence-rate
kind: corollary
title: Landweber discrepancy stopping converges under a source condition
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-landweber-source-and-noise-error-bounds
  - lem-landweber-filter-and-residual-identities
  - alg-landweber-iteration-with-discrepancy-stopping
  - def-compact-spectral-filter-and-qualification
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - lem-compact-spectral-multiplier-is-well-defined
  - thm-hilbert-adjoint-properties
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, Theorems 7.3 and 7.6–7.7, printed pp. 68–70 / PDF pp. 80–82: source rates, discrepancy stopping, and finite crossing."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 6: Iterative Methods"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap6.pdf"
      locator: "Slides 5–10: exact Landweber filter and semi-convergence background."
---

## Statement

Assume Countable Choice and the hypotheses of
[[thm-landweber-source-and-noise-error-bounds]]. Let
$x^\dagger=T^\nu w$ with $0<\nu\le1$ and $R=\|w\|\ge0$. Fix $\tau>1$ and
$\delta>0$ with $\|y_\delta-Ax^\dagger\|\le\delta$. Let $k_\delta$ be the
first index on the associated infinite mathematical path satisfying
$\|Ax_{k_\delta}^\delta-y_\delta\|\le\tau\delta$, where $x_k^\delta$ is
the corresponding noisy-data path.
If a finite budget is used, assume it is at least the upper bound $K_\delta$
constructed in the proof when $R>0$. If $R=0$, the initial iterate is the
first crossing and any finite budget suffices. For all sufficiently small
$\delta$,
$$\|x_{k_\delta}^\delta-x^\dagger\| \le C_{\nu,A,\omega,\tau}R^{1/(2\nu+1)}\delta^{2\nu/(2\nu+1)}.$$
The conclusion is conditional on an actual discrepancy crossing; a budget
exhaustion status is inconclusive.

## Facts & Assumptions

**Given:** The stated compact operator, Landweber parameter, source condition,
noise bound, $\tau>1$, and the first discrepancy index.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the compact spectral and Hilbert-adjoint suppliers used in the proof.

[F1] [[thm-landweber-source-and-noise-error-bounds]]: For every $s>0$, $\sup_{t\in\Sigma}t^s|r_k(t)|\le C_{s,A,\omega}k^{-s}$; the noise amplification is at most $\sqrt{2\omega k}\delta$.

[F2] [[lem-landweber-filter-and-residual-identities]]: $y_\delta-Ax_k^\delta=r_k(AA^*)y_\delta$ and $x^\dagger-x_k=r_k(T)x^\dagger$.

[F3] [[def-compact-spectral-filter-and-qualification]]: $T^\nu$ and $r_k(T)$ act by their scalar multipliers on each nonzero eigenspace.

[F4] [[thm-hilbert-adjoint-properties]]: $\|Av\|^2=\langle A^*Av,v\rangle$, $\|A^*\|=\|A\|$, and $\|Q\|^2=\|QQ^*\|$ for bounded Hilbert-space operators.

[F5] [[lem-compact-spectral-multiplier-is-well-defined]]: A compact spectral multiplier has operator norm at most the supremum of the absolute values of its scalar multipliers.

[F6] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: The eigenspaces of compact self-adjoint $T$ are mutually orthogonal and, together with $\ker T$, have dense span.

[F7] [[lem-compact-gram-operator-is-positive-and-has-kernel]]: Both $A^*A$ and $AA^*$ are compact, positive, and self-adjoint; $\ker(A^*A)=\ker A$.

## Proof

**Given:** The hypotheses above, with $R\ge0$.

If $R=0$, then $w=0$, so $x^\dagger=0$ and $y=Ax^\dagger=0$. The initial
iterate $x_0^\delta=0$ has residual $\|Ax_0^\delta-y_\delta\|=\|y_\delta\|
\le\delta\le\tau\delta$. Therefore $k_\delta=0$ and the stopped error is
zero, which is the stated estimate with $R=0$ since $0^a=0$ for every $a>0$.
For the rest of the proof assume $R>0$. [given, algebra]

1.1 Put $p=\nu+\tfrac12$. By [F2], $x_k-x^\dagger=-r_k(T)T^\nu w$. The compact spectral expansion [F6], the power convention [F3], and $\|Az\|^2=\langle A^*Az,z\rangle$ from [F4] give $\|Ax_k-y\|=\|T^p r_k(T)w\|$. The scalar filter bound [F1] therefore gives $\|Ax_k-y\|\le C_{p,A,\omega}Rk^{-p}$. Choose $$K_\delta=\max\!\left\{1,\left\lceil\left(\frac{C_{p,A,\omega}R}{(\tau-1)\delta}\right)^{1/p}\right\rceil\right\}.$$ Then $\|Ax_{K_\delta}-y\|\le(\tau-1)\delta$. By [F2], the noisy residual differs from the exact-data residual by $r_{K_\delta}(AA^*)(y_\delta-y)$. [F7] makes $AA^*$ compact positive self-adjoint, and [F4] gives $\|AA^*\|=\|A\|^2$. Every eigenvalue $t$ of $AA^*$ therefore satisfies $0\le t\le\|A\|^2$, so $|1-\omega t|\le1$ by the step-size hypothesis. [F5] bounds the noise residual by $\delta$. Hence $\|Ax_{K_\delta}^\delta-y_\delta\|\le\tau\delta$, so the first crossing exists and $k_\delta\le K_\delta$ (provided the finite budget reaches $K_\delta$). [A1, F1, F2, F3, F4, F5, F6, F7, given, construct, algebra]

1.2 At the crossing, [F2] and the same multiplier estimate [F5] give $\|Ax_{k_\delta}-y\|\le\|Ax_{k_\delta}^\delta-y_\delta\|+\delta\le(\tau+1)\delta$. [A1, F2, F5, given, algebra]

2.1 Let $v=r_{k_\delta}(T)w$ and $\theta=2\nu/(2\nu+1)$. For a finite set $E\subseteq\Sigma$, put $a_t=t^{2\nu+1}\|P_tv\|^2$ and $b_t=\|P_tv\|^2$. Then $t^{2\nu}\|P_tv\|^2=a_t^\theta b_t^{1-\theta}$. If either $\sum_Ea_t$ or $\sum_Eb_t$ is zero, every summand on the left is zero. Otherwise normalize $\tilde a_t=a_t/(\sum_Ea_t)$ and $\tilde b_t=b_t/(\sum_Eb_t)$. The scalar inequality $u^\theta v^{1-\theta}\le\theta u+(1-\theta)v$ follows by minimizing $f(s)=\theta s+(1-\theta)-s^\theta$: $f'(s)=\theta(1-s^{\theta-1})$ is negative for $0<s<1$ and positive for $s>1$, so $f(s)\ge f(1)=0$. Thus the sum of the normalized products is at most $1$, and $$\|T^\nu v\|\le\|T^{\nu+1/2}v\|^{2\nu/(2\nu+1)}\|v\|^{1/(2\nu+1)}.$$ Since [F6] gives the norm-convergent spectral expansion, increasing finite sets $E$ to $\Sigma$ passes this inequality to the full sums. Also $\|v\|\le R$ because $|r_{k_\delta}(t)|\le1$. Finally [F2], [F3], [F4], [F6], and [step 1.2] give $x^\dagger-x_{k_\delta}=T^\nu v$. For every $z\in X$, $\|Az\|^2=\langle Tz,z\rangle=\sum_{t\in\Sigma}t\|P_tz\|^2=\|T^{1/2}z\|^2$, so $\|T^{\nu+1/2}v\|=\|A T^\nu v\|=\|Ax_{k_\delta}-y\|\le(\tau+1)\delta$. Hence $$\|x_{k_\delta}-x^\dagger\|=\|T^\nu v\|\le((\tau+1)\delta)^{2\nu/(2\nu+1)}R^{1/(2\nu+1)}.$$ [A1, F2, F3, F4, F6, step 1.2, algebra]

3.1 From [F1], $\|x_{k_\delta}^\delta-x_{k_\delta}\|\le\sqrt{2\omega K_\delta}\delta$. Put $B=C_{p,A,\omega}R/(\tau-1)$, choosing $C_{p,A,\omega}>0$. For sufficiently small $\delta$, $B/\delta\ge1$, so $K_\delta=\lceil(B/\delta)^{1/p}\rceil\le2(B/\delta)^{1/p}$. Therefore $$\sqrt{2\omega K_\delta}\delta\le2\sqrt{\omega}\,B^{1/(2p)}\delta^{1-1/(2p)}=C'R^{1/(2\nu+1)}\delta^{2\nu/(2\nu+1)},$$ because $2p=2\nu+1$. Combining this with [step 2.1] by the triangle inequality proves the claim. [A1, F1, step 1.1, step 2.1, algebra] ∎
