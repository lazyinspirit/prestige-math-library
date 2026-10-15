---
id: thm-euler-maruyama-weak-order-one-under-backward-regularity
kind: theorem
title: "Euler–Maruyama weak order one under backward regularity"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-euler-maruyama
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - thm-euler-maruyama-uniform-moment-and-increment-bounds
  - def-ito-sde-and-strong-solution
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - thm-finite-horizon-moments-for-lipschitz-ito-sdes
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - def-d-dimensional-brownian-motion
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, Theorem 3.2 and proof"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §8.3"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Statement

Assume the Axiom of Choice. Let $d,m\ge1$ be finite, fix $T>0$, and work on
the complete usual filtered probability space of
[[def-ito-sde-and-strong-solution]]. Take $0<h\le1$ with $N=T/h\in\mathbb N$.
Let $W$ be an adapted standard
$m$-dimensional Brownian motion with increments independent of the current
filtration. Use Euclidean state norms and the Frobenius matrix norm, and write
$A:B=\operatorname{tr}(A^{\mathsf T}B)$. Let
$b:[0,T]\times\mathbb R^d\to\mathbb R^d$ and
$\sigma:[0,T]\times\mathbb R^d\to\mathbb R^{d\times m}$ be jointly Borel,
globally Lipschitz in state, of uniform linear growth, and satisfy the
half-Hölder time modulus in [[alg-euler-maruyama]]. Let $X_0$ be
$\mathcal F_0$-measurable, independent of $\sigma(W_t-W_0:0\le t\le T)$, with
$\mathbb E|X_0|^p<\infty$ for some $p\ge2q+8$, where $q\ge0$ is finite;
when $q=0$, use the convention $|x|^q=1$.
Let $X$ be the exact strong solution and $Y^h,\bar Y^h$ the continuous
Euler interpolation and step process of
[[def-euler-maruyama-step-process-and-continuous-interpolation]].

For a bounded Borel payoff $\varphi:\mathbb R^d\to\mathbb R$, define
$$ u(t,x)=\mathbb E\bigl[\varphi(X_T^{t,x})\bigr], $$
where $X^{t,x}$ is the unique shifted strong solution started from $x$ at time
$t$, supplied by [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]. Set
$$ L_t v(x)=b(t,x)\cdot\nabla v(x)+\tfrac12\bigl(\sigma(t,x)\sigma(t,x)^{\mathsf T}\bigr):D_x^2v(x). $$
Assume $u(T,x)=\varphi(x)$ and $(\partial_t+L_t)u=0$ on
$[0,T)\times\mathbb R^d$. A multi-index is $\alpha=(\alpha_1,\ldots,\alpha_d)$
with nonnegative integer entries and $|\alpha|=\sum_i\alpha_i$. Assume every
mixed derivative
$\partial_t^jD_x^\alpha u$ with $0\le j\le2$ and $|\alpha|\le4$ exists,
is continuous, and satisfies
$$ |\partial_t^jD_x^\alpha u(t,x)|\le C_u(1+|x|^q) $$
for a common constant $C_u$. Finally, assume the exact and Euler processes
have uniform pointwise moments of order $p$ on $[0,T]$; the Euler bounds are
provided by [[thm-euler-maruyama-uniform-moment-and-increment-bounds]] and the
exact bound by the P-SDE-01 moment contract. Then
$$ \bigl|\mathbb E\varphi(X_T)-\mathbb E\varphi(Y_N^h)\bigr|\le C h, $$
where $C$ is independent of $h$. The theorem is conditional on the stated
backward regularity; it does not derive that regularity from coefficient or
payoff smoothness.

## Facts & Assumptions

**Given:** AC; finite $d,m$; the fixed horizon and grid; the Brownian, coefficient, initial-value, exact-solution, backward-equation, mixed-derivative and moment hypotheses in the Statement.

[F1] The Euler recursion uses $Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)(W_{t_{k+1}}-W_{t_k})$, and its continuous interpolation uses those same left-endpoint coefficients. [[alg-euler-maruyama]] [[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F2] For every finite $p\ge2$ allowed by the initial moment, the Euler step, continuous interpolation and left-endpoint process have pointwise moments bounded uniformly over $h$; their interpolation increment satisfies $\mathbb E|Y_t-\bar Y_t|^2\le C h$. [[thm-euler-maruyama-uniform-moment-and-increment-bounds]]

[F3] Brownian increments have law $N_m(0,(t-s)I_m)$ and are independent of the current filtration. [[def-d-dimensional-brownian-motion]]

[F4] For each even integer $r\ge2$, a scalar Brownian increment has $r$th absolute moment $(r-1)!!|t-s|^{r/2}<\infty$. [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F5] For a finite-dimensional continuous Brownian Itô process and $F\in C^{1,2}$, Itô's formula has drift $\partial_tF+b\cdot\nabla F+\frac12(\sigma\sigma^{\mathsf T}):D^2F$ and stochastic term $\nabla F\,\sigma\,dW$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F6] A continuous Brownian Itô process has the coordinatewise drift-plus-Itô-integral representation used to interpret the exact SDE solution; every finite-energy piece of its localized Brownian integral is a square-integrable mean-zero martingale. [[def-continuous-brownian-ito-process]]

[F7] Under the global Lipschitz and linear-growth assumptions and $X_0\in L^2$, the exact strong solution exists uniquely and has a finite path-supremum second moment. For each deterministic $t<T$ and $x\in\mathbb R^d$, the same theorem applies on the shifted interval $[0,T-t]$ with coefficients $b(t+s,\cdot),\sigma(t+s,\cdot)$, shifted filtration $\mathcal F_{t+s}$, Brownian motion $W_{t+s}-W_t$, and deterministic initial value $x$; these data retain the theorem's hypotheses, so $X^{t,x}$ is well-defined. [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

[F8] For every real $p\ge2$ with $\mathbb E|X_0|^p<\infty$, the exact solution has $\sup_{t\le T}\mathbb E|X_t|^p<\infty$. [[thm-finite-horizon-moments-for-lipschitz-ito-sdes]]

[F9] A standard normal has density $e^{-z^2/2}/\sqrt{2\pi}$ and the centered Gaussian law of a Brownian increment of length $h$ is symmetric with covariance $hI_m$. Its real nonnegative absolute-moment bounds are derived in step 1.3 from [F4]. [[def-standard-normal-and-normal-laws]] [[def-d-dimensional-brownian-motion]]

[A1] AC is declared because the SDE, Brownian, normal-law, Gaussian-moment and multidimensional Itô interfaces in [F3]–[F9] adopt it. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement or Example and the facts above.

1.1 By [F6], the exact solution has the continuous Itô decomposition; apply [F5] to $u(t,X_t)$. The backward equation cancels its drift. Moreover, $|\nabla u(t,x)|\le C(1+|x|^q)$ and linear growth of $\sigma$ give $\mathbb E\int_0^T\|\nabla u(s,X_s)\sigma(s,X_s)\|_F^2ds<\infty$ because $p\ge2q+8$ and [F8] supplies the exact process moments. Thus the stochastic integral is a square-integrable mean-zero martingale by [F6]. With $u(T,\cdot)=\varphi$, this proves $\mathbb E\varphi(X_T)=\mathbb E u(0,X_0).$ [A1, F5, F6, F7, F8, given]

1.2 Fix $t<T$, $x\in\mathbb R^d$, and $0<h\le\min(1,T-t)$; set $\Delta W\sim N_m(0,hI_m)$ and $\delta=b(t,x)h+\sigma(t,x)\Delta W$. Taylor's formula along the spatial segment gives $u(t,x+\delta)=\sum_{k=0}^3\frac1{k!}D_x^ku(t,x)[\delta^{\otimes k}]+R_4,$ $u_t(t,x+\delta)=\sum_{k=0}^2\frac1{k!}D_x^ku_t(t,x)[\delta^{\otimes k}]+R_3^t,$ where $D_x^ku[z^{\otimes k}]$ means the $k$th spatial derivative applied to $z$ in all $k$ slots. The integral remainders are $R_4=\frac1{3!}\int_0^1(1-r)^3D_x^4u(t,x+r\delta)[\delta^{\otimes4}]\,dr,$ $R_3^t=\frac1{2!}\int_0^1(1-r)^2D_x^3u_t(t,x+r\delta)[\delta^{\otimes3}]\,dr.$ Time Taylor expansion gives $u(t+h,x+\delta)=u(t,x+\delta)+hu_t(t,x+\delta)+R_{tt},\qquad R_{tt}=h^2\int_0^1(1-r)u_{tt}(t+rh,x+\delta)\,dr.$ The derivative bounds in the Statement and $|x+r\delta|^q\le C_q(|x|^q+|\delta|^q)$ imply $|R_4|\le C(1+|x|^q+|\delta|^q)|\delta|^4,\quad |R_3^t|\le C(1+|x|^q+|\delta|^q)|\delta|^3,\quad |R_{tt}|\le Ch^2(1+|x+\delta|^q).$ If $q=0$, interpret $1+|x|^q$ as the constant $2$. [given, algebra]

1.3 For each finite real $s>0$, choose an integer $n\ge1$ with $2n\ge s$. If $Z$ is scalar standard normal, $|Z|^s\le1+|Z|^{2n}$, so [F4] gives $E|Z|^s\le1+(2n-1)!!<\infty$. For a standard $m$-dimensional Gaussian vector $G$, $|G|\le\sqrt m\max_j|G_j|$ gives $|G|^s\le m^{s/2}\sum_{j=1}^m|G_j|^s$, and hence $E|G|^s\le m^{1+s/2}\{1+(2n-1)!!\}$. By the Gaussian scaling convention in [F3] and [F9], $\Delta W$ has law $\sqrt h G$, so $E|\Delta W|^s\le C_{s,m}h^{s/2}$. This also covers $h=0$ when $s>0$; for $s=0$ adopt $|x|^0=1$, and its expectation is one. No initial-state moment stronger than the Statement is used in this Gaussian calculation. [F3, F4, F9, choose, algebra]

2.1 The coefficient growth bounds and [F3]–[F4], [F9] give $\mathbb E\delta=b(t,x)h,\qquad \mathbb E(\delta\delta^{\mathsf T})=a(t,x)h+h^2b(t,x)b(t,x)^{\mathsf T},$ $\|\mathbb E(\delta^{\otimes3})\|\le Ch^2(1+|x|^3),\qquad \mathbb E|\delta|^s\le C_s h^{s/2}(1+|x|^s)$ for each finite exponent $s>0$ used in the Taylor remainders. Indeed, $|b(t,x)|+\|\sigma(t,x)\|_F\le C(1+|x|)$ and $|\delta|\le h|b(t,x)|+\|\sigma(t,x)\|_F|\Delta W|$; [F9] and $h\le1$ give the stated bound. When $q=0$, its $|\delta|^q$ factor is the constant $1$. For the third tensor moment, write $\delta=hb+Z$ with $Z=\sigma(t,x)\Delta W$. The centered Gaussian $Z$ has covariance $ha(t,x)$ and zero third moment, so expanding the tensor cube leaves three terms with one $hb$ and two $Z$ factors, plus $(hb)^{\otimes3}$; each has expectation $O(h^2(1+|x|^3))$. Substituting these moments in step 1.2, the first-order terms combine to $h(\partial_tu+b\cdot\nabla u+\frac12a:D_x^2u)(t,x)=0$. Every other Taylor term is bounded by $Ch^2(1+|x|^{q+4})$: the fourth spatial remainder uses $\mathbb E|\delta|^4(1+|x|^q+|\delta|^q)$, the time-space terms use $\mathbb E\delta$ and $\mathbb E\delta\delta^{\mathsf T}$, and the $u_t$ third-order remainder is $O(h^{5/2})(1+|x|^{q+3})\le Ch^2(1+|x|^{q+4})$. Therefore $\left|\mathbb E u(t+h,x+\delta)-u(t,x)\right| \le Ch^2(1+|x|^{q+4}).$ [F3, F4, F9, step 1.2, step 1.3, algebra]

3.1 Condition on $\mathcal F_{t_k}$. By [F1], $Y_{k+1}^h$ is the one-step update in step 2.1 with $t=t_k$ and $x=Y_k^h$; [F3] makes the Brownian increment independent of $\mathcal F_{t_k}$. Thus $\left|\mathbb E\left[u(t_{k+1},Y_{k+1}^h)-u(t_k,Y_k^h)\mid\mathcal F_{t_k}\right]\right| \le Ch^2(1+|Y_k^h|^{q+4}).$ Since $p\ge2q+8\ge q+4$, [F2] and the exact pointwise moment premise make the expectation of the right side at most $C'h^2$, uniformly in $k,h$. [F1, F2, F3, step 2.1]

4.1 Sum the conditional one-step errors over $k=0,\dots,N-1$. The sum telescopes to $\left|\mathbb E u(T,Y_N^h)-\mathbb E u(0,Y_0^h)\right| \le NC'h^2=C'Th.$ Here $u(T,Y_N^h)=\varphi(Y_N^h)$ and $Y_0^h=X_0$; step 1.1 gives $\mathbb E u(0,X_0)=\mathbb E\varphi(X_T)$. Combining the equalities proves the desired weak error bound. AC enters only through [A1]. [A1, step 1.1, step 3.1, algebra] ∎

## Remarks

The explicit mixed derivative premise includes $\partial_tD_x^3u$, which is
used in the Taylor remainder for $u_t$. The moment exponent $p\ge2q+8$ is a
conservative bound for the $q+4$ polynomial remainder and the martingale
integrability in step 1.1. The proof assumes the backward regularity and does
not prove it from $b,\sigma$ or $\varphi$ smoothness.
