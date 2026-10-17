---
id: thm-landweber-source-and-noise-error-bounds
kind: theorem
title: Landweber converges for exact data and balances source bias with noise
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - lem-landweber-filter-and-residual-identities
  - alg-landweber-iteration-with-discrepancy-stopping
  - def-compact-spectral-filter-and-qualification
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - lem-compact-spectral-multiplier-is-well-defined
  - thm-hilbert-adjoint-properties
  - def-orthogonality-and-orthogonal-complement
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
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 6: Iterative Methods"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap6.pdf"
      locator: "Slides 5–10: Landweber stability interval, polynomial filter, and semiconvergence."
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, Theorems 7.2–7.3 and source-condition filter estimates, printed pp. 67–69 / PDF pp. 79–81."
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be a nonzero compact operator between
real or complex Hilbert spaces, set $T=A^*A$, choose
$0<\omega<2/\|A\|^2$, and let $y=Ax^\dagger$ with
$x^\dagger\in(\ker A)^\perp$. Let $x_k$ be the exact-data Landweber iterates
in the infinite recurrence-defined path of
[[alg-landweber-iteration-with-discrepancy-stopping]] for datum $y$; this path
depends on $A,\omega,y$ and not on a finite cap or stopping test. Put
$r_k(t)=(1-\omega t)^k$. Then $\|x_k-x^\dagger\|$ is nonincreasing and
$x_k\to x^\dagger$ in norm. For every $s>0$, if $x^\dagger=T^s w$ with
$w\in X$, then for $k\ge1$,
$$\|x_k-x^\dagger\|\le C_{s,A,\omega}\|w\|k^{-s}.$$
The scalar filter also satisfies
$$\sup_{t\in\Sigma}t^s|r_k(t)|\le C_{s,A,\omega}k^{-s},$$
where $\Sigma$ is the set of nonzero eigenvalues of $T$.
For noisy data $y_\delta$ with $\|y_\delta-y\|\le\delta$, let
$x_k^\delta$ be the infinite recurrence-defined path for datum $y_\delta$.
It satisfies
$$\|x_k^\delta-x_k\|\le\sqrt{2\omega k}\,\delta.$$
Consequently, under the source condition $x^\dagger=T^\nu w$,
$0<\nu\le1$, the total error obeys
$$\|x_k^\delta-x^\dagger\|\le C_{\nu,A,\omega}\|w\|k^{-\nu} +\sqrt{2\omega k}\,\delta.$$

## Facts & Assumptions

**Given:** Countable Choice; the stated $A,\omega,y,x^\dagger$; and
$T=A^*A$.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the Hilbert-adjoint and compact spectral theorem suppliers used in this proof.

[F1] [[lem-landweber-filter-and-residual-identities]]: For the infinite mathematical path, $x_k=g_k(T)A^*y_\delta$ and, for exact data, $x^\dagger-x_k=r_k(T)x^\dagger$.

[F2] [[def-compact-spectral-filter-and-qualification]]: $T^\nu$ and the filters are defined by their scalar values on the nonzero eigenvalues of the compact positive operator $T$.

[F3] [[lem-compact-gram-operator-is-positive-and-has-kernel]]: $T$ is compact positive self-adjoint and $\ker T=\ker A$.

[F4] [[thm-hilbert-adjoint-properties]]: $\|A^*A\|=\|A\|^2$ and $\|Q\|^2=\|QQ^*\|$ for bounded Hilbert-space operators.

[F5] [[def-orthogonality-and-orthogonal-complement]]: $x^\dagger\in(\ker A)^\perp$ means it has no component in the zero eigenspace of $T$.

[F6] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: The nonzero eigenspaces of compact self-adjoint $T$ are mutually orthogonal, at most countably many, and together with $\ker T$ have dense span in $X$.

[F7] [[lem-compact-spectral-multiplier-is-well-defined]]: A bounded scalar multiplier on these eigenspaces defines an operator whose norm is at most the supremum of the multiplier's absolute value.

## Proof

**Given:** The hypotheses and facts above. Write $M=\|A\|^2$.

1.1 For every nonzero eigenvalue $t$ of $T$, [F3]–[F4] give $0<t\le M$, so $0<\omega t<2$ and $|1-\omega t|<1$. Therefore $|r_k(t)|$ decreases with $k$ and tends to $0$. Since $x^\dagger\perp\ker T$ by [F3] and [F5], [F6] expands it using only positive-eigenvalue components. By [F1], each component of $x_k-x^\dagger$ is multiplied by $-r_k(t)$; its magnitude decreases to zero and is bounded by the corresponding component of $x^\dagger$. Given $\epsilon>0$, choose a finite set of eigenvalues whose omitted squared components of $x^\dagger$ sum to less than $\epsilon$; on the chosen finite set every component tends to zero. The squared error sum therefore tends to at most $\epsilon$, and arbitrariness of $\epsilon$ proves norm convergence. The componentwise decrease also proves monotonicity of the norm. [A1, F1, F3, F4, F5, F6, given, choose]

1.2 Choose an integer $m>s$. For $v\ge0$ and an integer $n\ge0$,
$(1+v)^n\ge1+nv$: induction proves this, since multiplying the bound at
$n$ by $1+v$ gives $1+(n+1)v+nv^2\ge1+(n+1)v$. For $k\ge2m$, let
$n=\lfloor k/m\rfloor$, so $mn\le k$ and $n\ge k/(2m)$.
If $0<t\le\min\{M,\omega^{-1}\}$, put $u=\omega t\in(0,1]$. At $u=1$
the filter is zero. If $0<u\le1/k$, then $u^s(1-u)^k\le k^{-s}$. If
$k\ge2m$ and $1/k<u<1$, the identity $(1-u)(1+u)=1-u^2\le1$ gives
$(1-u)^{-k}\ge(1+u)^k\ge(1+u)^{mn}=((1+u)^n)^m\ge(nu)^m$.
Consequently
$$u^s(1-u)^k\le n^{-m}u^{s-m}\le n^{-m}k^{m-s} \le(2m)^m k^{-s}.$$
For $k<2m$ the same product is at most $1\le(2m)^s k^{-s}$. Thus on this
range $t^s|r_k(t)|=\omega^{-s}u^s(1-u)^k\le C_{s,\omega}k^{-s}$.
If $\omega^{-1}<t\le M$, a range that exists only when $\omega M>1$, then
$|1-\omega t|=\omega t-1\le\omega M-1=:q\in(0,1)$. Put
$a=q^{-1}-1>0$. For $k\ge2m$ and the same $n$,
$$q^{-k}=(1+a)^k\ge(1+a)^{mn}=((1+a)^n)^m\ge(na)^m,$$
so $k^s q^k\le(2m)^m a^{-m}k^{s-m}\le(2m)^m a^{-m}$. For $k<2m$,
$k^s q^k\le(2m)^s$. Hence $\sup_{k\ge1}k^s q^k<\infty$ and
$t^s|r_k(t)|\le M^s q^k\le C_{s,M,\omega}k^{-s}$. Combining the two
ranges proves $\sup_{t\in\sigma(T)\setminus\{0\}}t^s|r_k(t)|\le
C_{s,A,\omega}k^{-s}$. [A1, F2, F3, F4, given, algebra]

1.3 For $k\ge1$, the scalar geometric identity gives $g_k(t)=[1-(1-\omega t)^k]/t$ for $t>0$. Since $|1-\omega t|\le1$, both the bound by $2$ and the finite-sum bound by $k\omega t$ hold for its numerator. Hence $$\sqrt t\,|g_k(t)|\le\min\{2/\sqrt t,\omega k\sqrt t\}\le\sqrt{2\omega k}.$$ The last inequality follows by splitting at $t=2/(\omega k)$. For $Q_k=g_k(T)A^*$, adjoint multiplication gives $Q_kQ_k^*=g_k(T)Tg_k(T)^*$, the compact spectral multiplier with scalar values $t|g_k(t)|^2$ and value zero on $\ker T$. [F7] bounds its norm by the supremum of these values; [F4] and $\|Q_k\|^2=\|Q_kQ_k^*\|$ then give $\|Q_k\|\le\sqrt{2\omega k}$. Applying [F1] to $y_\delta-y$ gives $\|x_k^\delta-x_k\|=\|Q_k(y_\delta-y)\|\le\sqrt{2\omega k}\,\delta$. [A1, F1, F4, F7, given, algebra]

2.1 Under $x^\dagger=T^sw$, [F1] gives $x_k-x^\dagger=-r_k(T)T^sw$. On every eigenspace the product multiplier is $t^sr_k(t)$, bounded by [step 1.2]; [F7] therefore yields $\|x_k-x^\dagger\|\le\sup_{t>0}t^s|r_k(t)|\,\|w\|$. Substituting the bound in [step 1.2] proves the source-bias estimate. [A1, F1, F2, F7, step 1.2, algebra]

3.1 The triangle inequality gives $\|x_k^\delta-x^\dagger\|\le\|x_k^\delta-x_k\|+\|x_k-x^\dagger\|$; substituting the bounds from [step 2.1] and [step 1.3] proves the final estimate. [step 2.1, step 1.3, algebra] ∎
