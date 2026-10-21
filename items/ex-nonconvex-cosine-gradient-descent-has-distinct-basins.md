---
id: ex-nonconvex-cosine-gradient-descent-has-distinct-basins
kind: example
title: "Two initial intervals converge to different minima of a periodic objective"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - thm-smooth-bounded-below-gd-stationarity
  - alg-gradient-descent
  - def-jacobian-matrix-and-gradient
  - thm-sine-and-cosine-derivatives
  - thm-algebra-of-derivatives
  - def-derivative
  - cor-sine-and-cosine-are-one-lipschitz
  - cor-pi-is-the-first-positive-sine-zero
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-monotone-converges-iff-bounded
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $F(x)=1-\cos x$ on $\mathbb R$, and use the fixed step $\alpha=1$. Its gradient is $F'(x)=\sin x$, which is $1$-Lipschitz, and $F(x)\ge0$. Gradient descent is the iteration $x_{t+1}=x_t-\sin x_t$. Every start $x_0\in(0,\pi)$ produces a sequence converging to the global minimizer $0$, while every start $x_0\in(\pi,2\pi)$ produces a sequence converging to the distinct global minimizer $2\pi$.

## Facts & Assumptions

**Given:** The objective $F(x)=1-\cos x$, the fixed step $\alpha=1$, and an initial point in either $(0,\pi)$ or $(\pi,2\pi)$.

[F1] [[alg-gradient-descent]]: with a fixed step $t_k$, the update is $x_{k+1}=x_k-t_k\nabla F(x_k)$.

[F2] [[thm-smooth-bounded-below-gd-stationarity]]: for a continuously differentiable objective with $L$-Lipschitz gradient, fixed $0<\alpha\le1/L$, and an objective lower bounded along the iterates, the gradient norms tend to zero.

[F3] [[thm-sine-and-cosine-derivatives]]: $(\cos x)'=-\sin x$, $\sin 0=0$, and $\cos 0=1$.

[F4] [[thm-algebra-of-derivatives]]: derivatives of sums and scalar multiples are the corresponding sums and scalar multiples of derivatives, and constant functions have derivative zero.

[F5] [[def-derivative]]: $f'(c)$ is the limit of $(f(x)-f(c))/(x-c)$ as $x\to c$ through $x\ne c$; a constant function has zero difference quotient.

[F6] [[cor-sine-and-cosine-are-one-lipschitz]]: $|\sin u-\sin v|\le|u-v|$ and $|\cos u-\cos v|\le|u-v|$ for all real $u,v$.

[F7] [[cor-pi-is-the-first-positive-sine-zero]]: $\sin x>0$ for $0<x<\pi$.

[F8] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: $\sin x=0$ exactly when $x=m\pi$ for an integer $m$, and both sine and cosine have period $2\pi$.

[F9] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin(-x)=-\sin x$ and $|\cos x|\le1$.

[F10] [[cor-monotone-converges-iff-bounded]]: every bounded monotone real sequence converges.

## Verification

1.1 By [F3, F4, F5], $F'(x)=\sin x$. Then [F6] makes the gradient continuous and $1$-Lipschitz; [F9] gives $F(x)\ge0$, and [F3, F8] give $F(0)=F(2\pi)=0$. Thus the hypotheses of [F2] hold with $L=1$ and $\alpha=1$, so every trajectory has gradient norm tending to zero. [given, F2, F3, F4, F5, F6, F8, F9, algebra]

1.2 Suppose $x_0\in(0,\pi)$. If $0<x_t\le x_0$, [F7] gives $\sin x_t>0$, and [F6] with $v=0$ gives $\sin x_t\le x_t$; hence $0\le x_{t+1}=x_t-\sin x_t<x_t$. If $x_t=0$, it stays at $0$. Induction shows $0\le x_{t+1}\le x_t\le x_0$, so [F10] gives a limit $\ell\in[0,x_0]$. Given $\varepsilon>0$, convergence gives an index after which both $|x_t-\ell|<\varepsilon/2$ and $|x_{t+1}-\ell|<\varepsilon/2$; hence $|x_t-x_{t+1}|\to0$ and, by the update, $\sin x_t\to0$. Also [F6] gives $|\sin x_t-\sin\ell|\le|x_t-\ell|\to0$, so $\sin\ell=0$. By [F8], the only such zero in $[0,x_0]$ is $0$, so $\ell=0$. [given, F1, F6, F7, F8, F10, algebra, induction]

2.1 Suppose $x_0\in(\pi,2\pi)$. If $x_0\le x_t<2\pi$, put $u_t=2\pi-x_t\in(0,\pi)$. By [F7, F8, F9], $\sin x_t=-\sin u_t<0$, and [F6] gives $-\sin x_t=\sin u_t\le u_t=2\pi-x_t$. Therefore $x_t<x_{t+1}=x_t-\sin x_t\le2\pi$; if $x_t=2\pi$, it remains there. Induction gives a nondecreasing sequence bounded above by $2\pi$, so [F10] gives a limit $\ell\in[x_0,2\pi]$. Convergence implies $|x_{t+1}-x_t|\to0$ by the same two-term estimate used in step 1.2, so $\sin u_t\to0$. Since $u_t=2\pi-x_t\to2\pi-\ell$, [F6] gives $|\sin u_t-\sin(2\pi-\ell)|\le|u_t-(2\pi-\ell)|\to0$, hence $\sin(2\pi-\ell)=0$. By [F8], the only such zero with $0\le2\pi-\ell<2\pi-x_0<\pi$ is $0$. Thus $\ell=2\pi$. [given, step 1.2, F1, F6, F7, F8, F9, F10, algebra, induction] ∎
