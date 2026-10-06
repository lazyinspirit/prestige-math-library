---
id: cex-final-time-face-is-not-part-of-the-parabolic-boundary
kind: counterexample
title: The final-time face is not part of the parabolic boundary
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-parabolic-cylinder-and-parabolic-boundary
  - thm-weak-parabolic-maximum-principle
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - cor-pi-is-the-first-positive-sine-zero
  - thm-derivative-of-exponential
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - def-laplacian-of-a-c2-function
  - def-sine-and-cosine-by-power-series
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed p. 158, Example 6.3 ($x^2+2t$ attains its maximum at $(T,1)$: the interior/final-time behaviour matters)"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed p. 335 (the top-face case $t_0=T$ must be treated separately in the maximum principle)"
---

## Statement refuted

The claim refuted is that every supersolution $u_t-\Delta u\ge0$ on a bounded cylinder $Q$ satisfies $\max_{\overline Q}u\le\max_{\partial_pQ}u$. The witness has its larger maximum at a spatially interior point of the final-time face, which is excluded from the parabolic boundary. Take $\Omega=(0,\pi)$ and
$$u(x,t):=e^{t}\sin x .$$
Then $u_t=e^t\sin x$ and $\Delta u=-e^t\sin x$, so
$u_t-\Delta u=2e^t\sin x\ge0$ in $Q$: $u$ is a supersolution. Its maximum over
the closed cylinder is $\max_{\overline Q}u=e^{T}$, attained at the interior
point $(\pi/2,T)$ of the final-time face, whereas
$$\max_{\partial_pQ}u=\max\Bigl(\max_{[0,\pi]}\sin,0\Bigr)=1<e^{T}$$
because the lateral data vanish and the initial data are $\sin x\le1$ with
equality at $x=\pi/2$. So the final-time face is not part of the parabolic
boundary, and for a supersolution the maximum over the cylinder is genuinely
larger than the parabolic-boundary maximum: the maximum principle is
sign-sensitive and does not extend in the reverse direction.

## Facts & Assumptions

**Given:** $T>0$, the cylinder $Q=(0,\pi)\times(0,T]$ with $\overline Q=[0,\pi]\times[0,T]$, and the function $u(x,t)=e^t\sin x$.

[F1] The cylinder vocabulary: $\partial_pQ=(\overline\Omega\times\{0\})\cup(\partial\Omega\times[0,T])$, no point of the final-time face belongs to $\partial_pQ$, and $u_t-\Delta u\ge0$ in $Q$ is imposed for $0<t\le T$, with $u_t$ interpreted as the left time derivative at $t=T$ ([[def-parabolic-cylinder-and-parabolic-boundary]]).

[F2] $\sin$ and $\cos$ are $C^\infty$ with $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$, $\sin0=0$, $\cos0=1$ ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]]); $\sin(\pi/2)=1$, $\sin\pi=0$, and $\sin x>0$ for $0<x<\pi$ ([[thm-quarter-turn-values-and-shift-formulas]], [[cor-pi-is-the-first-positive-sine-zero]]), while $\sin$ has range $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F3] $\exp$ is $C^\infty$ with $\exp'=\exp$ and $\exp(x)>0$ for every real $x$ ([[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]]); the mean value theorem applies to $\exp$ on $[0,T]$ ([[cor-mean-value-theorem]]).

[F4] The Laplacian on $\mathbb R^1$ is $\Delta f=f''$ ([[def-laplacian-of-a-c2-function]]), and the weak maximum principle on a bounded cylinder: a subsolution $v\in C^{2,1}(\overline Q)$ with $v_t-\Delta v\le0$ in $Q$ satisfies $\max_{\overline Q}v=\max_{\partial_pQ}v$ ([[thm-weak-parabolic-maximum-principle]]).

## Counterexample

**Given:** $T>0$, the cylinder $Q=(0,\pi)\times(0,T]$, and $u(x,t)=e^t\sin x$.

1.1 The function $u$ is smooth on $\overline Q$ (a product of the smooth functions $e^t$ and $\sin x$, [F2] and [F3]), with $u_t=e^t\sin x$ and $\Delta u=u_{xx}=-e^t\sin x$ by [F2] and [F4]; hence $u_t-\Delta u=2e^t\sin x\ge0$ on $Q$, because $e^t>0$ by [F3] and $\sin x>0$ for $0<x<\pi$ by [F2]. [F2, F3, F4, given]

1.2 On the parabolic boundary, $u(0,t)=u(\pi,t)=e^t\sin\pi=0$ for every $t\in[0,T]$, and $u(x,0)=\sin x\le1$ with $u(\pi/2,0)=1$; hence $\max_{\partial_pQ}u=1$. [F1, F2, given]

1.3 For every $(x,t)\in\overline Q$ one has $\sin x\le1$ by [F2] and $e^t\le e^T$: indeed $e^T-e^t=e^c(T-t)>0$ for some $c\in(t,T)$ whenever $t<T$ by [F3] and the mean value theorem, so $u(x,t)\le e^T$; equality holds exactly at $(x,t)=(\pi/2,T)$, where $u=e^T\sin(\pi/2)=e^T$. Thus $\max_{\overline Q}u=e^T$, attained at the point $(\pi/2,T)$ of the final-time face. [F2, F3, given]

2.1 The point $(\pi/2,T)$ does not belong to $\partial_pQ$, because $\pi/2\in(0,\pi)$ and $T>0$ by [F1]; by step 1.3 it is a point of $\overline Q$ at which $u$ attains the value $e^T$, while by step 1.2 the parabolic boundary carries the strictly smaller maximum $1$. Since $e^T>1$ (again by the mean value theorem applied to $\exp$ on $[0,T]$, [F3]), a supersolution has its maximum over $\overline Q$ strictly larger than the parabolic-boundary maximum, refuting the proposed supersolution maximum bound. The minimum principle for supersolutions, obtained by applying the weak maximum principle to $-u$, remains valid. [step 1.2, step 1.3, F1, F3, given]

3.1 The sign sensitivity is real and the weak maximum principle is not contradicted: $v:=-u$ satisfies $v_t-\Delta v=-2e^t\sin x\le0$ on $Q$, and by [F4] its maximum over $\overline Q$ equals $\max_{\partial_pQ}v=0$, attained on the lateral faces, consistently with the theorem being stated for subsolutions. [step 1.1, step 1.2, F1, F4, given] ∎
