---
id: lem-euler-maruyama-autonomous-interpolation-increment-moments
kind: lemma
title: "All-moment Euler interpolation increment bound under autonomous hypotheses"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-euler-maruyama-autonomous
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - def-d-dimensional-brownian-motion
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, Lemma 4.3"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Statement

Assume the Axiom of Choice, let $d,m\ge1$ be finite, and fix $T>0$. Work on a
complete filtered probability space whose filtration is right-continuous and
contains every $P$-null subset of $\mathcal F$ in $\mathcal F_0$. Let $W$ be
an adapted standard $m$-dimensional Brownian motion whose increments after
time $s$ are independent of $\mathcal F_s$. Let $X_0$ be finite and
$\mathcal F_0$-measurable, and independent of
$\sigma(W_t-W_0:0\le t\le T)$. Use the Euclidean state norm and Frobenius
matrix norm. Let $f:\mathbb R^d\to\mathbb R^d$ and
$g:\mathbb R^d\to\mathbb R^{d\times m}$ be autonomous $C^1$ coefficients.
Assume finite constants $\mu,c,D\ge0$ and an integer $q\ge1$ satisfy, for
all $x,y\in\mathbb R^d$,
$$ \langle x-y,f(x)-f(y)\rangle\le\mu|x-y|^2,\qquad \|g(x)-g(y)\|_F^2\le c|x-y|^2, $$
$$ |f(x)-f(y)|^2\le D(1+|x|^q+|y|^q)|x-y|^2. $$
For each $0<h\le1$ with $N=T/h$ a positive integer, let $Y^h$ be the
continuous Euler–Maruyama interpolation and $\bar Y^h$ its left-endpoint step
process from [[alg-euler-maruyama-autonomous]], using this same $W$ and $X_0$.
Assume that for every finite $p\ge1$,
$$ \sup_{0<h\le1,\ T/h\in\mathbb N} \left(\mathbb E\sup_{t\le T}|Y_t^h|^p+ \mathbb E\sup_{t\le T}|\bar Y_t^h|^p\right)<\infty. $$
Then for every even integer $r\ge2$ there is a finite constant $C_r$, independent
of $h$, such that
$$ \sup_{0\le t\le T}\mathbb E|Y_t^h-\bar Y_t^h|^r\le C_r h^{r/2}. $$
The premise is an all-moment premise for this autonomous coefficient class; it
does not follow from the finite-$L^2$ moment bound alone.

## Facts & Assumptions

**Given:** AC; finite dimensions $d,m$; $T>0$; the stated complete right-continuous filtered space, adapted Brownian motion and initial value; the $C^1$, one-sided-Lipschitz, diffusion-Lipschitz and polynomial drift inequalities in the Statement; $0<h\le1$ with $T/h\in\mathbb N$; and the uniform all-moment bounds stated there.

[F1] On $[t_k,t_{k+1}]$, the continuous Euler interpolation is
$Y_t=Y_k+f(Y_k)(t-t_k)+g(Y_k)(W_t-W_{t_k})$, while $\bar Y_t=Y_k$ on
$[t_k,t_{k+1})$ and $Y_T=\bar Y_T=Y_N$.
[[alg-euler-maruyama-autonomous]]

[F2] If a Brownian coordinate has increment law $N(0,|t-s|)$, then for every integer $n\ge1$ its $2n$th absolute moment is $(2n-1)!!|t-s|^n<\infty$.
[[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] A standard finite-dimensional Brownian motion has independent coordinates, each a standard one-dimensional Brownian motion; its vector increments have law $N_m(0,(t-s)I_m)$.
[[def-d-dimensional-brownian-motion]]

[A1] AC is declared because the deterministic Brownian-increment and Gaussian-moment interfaces used in [F2] and [F3] assume it. [[def-axiom-of-choice]]

## Proof


1.1 Fix $t\in[t_k,t_{k+1})$ and put $r_t=Y_t^h-\bar Y_t^h$ and $\delta=t-t_k$. By [F1], $r_t=\delta f(Y_k^h)+g(Y_k^h)(W_t-W_{t_k}).$ For even $r\ge2$, the finite-dimensional power inequality gives $|r_t|^r\le2^{r-1}\left(\delta^r|f(Y_k^h)|^r+ \|g(Y_k^h)\|_F^r|W_t-W_{t_k}|^r\right).$ [F1, algebra]

2.1 Taking $y=0$ in the coefficient bounds gives $|f(x)|^2\le2|f(0)|^2+2D(1+|x|^q)|x|^2, \qquad \|g(x)\|_F^2\le2\|g(0)\|_F^2+2c|x|^2.$ Thus $|f(x)|^r\le C_r(1+|x|^{(q+2)r/2})$ and $\|g(x)\|_F^r\le C_r(1+|x|^r)$. The uniform all-moment premise therefore bounds both coefficient moments in step 1.1 uniformly over $h$ and $t$. [given, algebra]

2.2 Each coordinate of $W_t-W_{t_k}$ has the Gaussian law in [F3], so [F2] and the finite-dimensional inequality $|z|^r\le C_{r,m}\sum_{j=1}^m|z_j|^r$ give $\mathbb E|W_t-W_{t_k}|^r\le C_{r,m}\delta^{r/2}$. Since $Y_k^h$ is $\mathcal F_{t_k}$-measurable and Brownian increments are independent of $\mathcal F_{t_k}$, conditioning in step 1.1 separates the coefficient factor from this Gaussian moment. [F2, F3, given]

3.1 Using $0\le\delta\le h\le1$, so $\delta^r\le\delta^{r/2}$, steps 1.1, 2.1 and 2.2 yield $\mathbb E|Y_t^h-\bar Y_t^h|^r\le C_r h^{r/2}$ uniformly for $t<T$. At grid points the increment is zero by [F1], including $t=T$. The constants depend on $r,T,d,m,c,D,q,f(0),g(0)$ and the stated moment bounds, but not on $h$. AC is inherited only through [A1] and the declared Gaussian interfaces; no arbitrary-index choice is used in the estimate. [A1, F1, step 1.1, step 2.1, step 2.2] ∎
## Source notes

Higham–Mao–Stuart, Lemma 4.3, proves this interpolation increment estimate
under its autonomous one-sided-Lipschitz and all-moment hypotheses. The proof
above records the growth and Gaussian-moment steps needed here explicitly.
