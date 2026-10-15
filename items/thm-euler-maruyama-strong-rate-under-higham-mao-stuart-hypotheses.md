---
id: thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses
kind: theorem
title: "Euler–Maruyama strong rate under Higham–Mao–Stuart hypotheses"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-euler-maruyama-autonomous
  - lem-euler-maruyama-autonomous-interpolation-increment-moments
  - lem-brownian-ito-integral-l1-maximal-bound
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-gronwall-integral-inequality
  - cor-cauchy-schwarz-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §4, Assumptions 3.1/4.1/4.2, Lemma 4.3 and Theorem 4.4"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, §2"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, §8.2, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Statement

Assume AC. Let $d,m\ge1$ be finite, fix $T>0$, and work on a complete filtered
probability space whose filtration is right-continuous and contains every
$P$-null subset of $\mathcal F$ in $\mathcal F_0$. Let $W=(W_t)_{0\le t\le T}$
be an adapted standard $m$-dimensional Brownian motion whose increments are
independent of the current filtration. Let
$X_0$ be finite and $\mathcal F_0$-measurable, independent of
$\sigma(W_t-W_0:0\le t\le T)$. Use Euclidean state norms and the Frobenius
matrix norm. Consider
the autonomous SDE
$$X_t=X_0+\int_0^t f(X_s)\,ds+\int_0^t g(X_s)\,dW_s, \qquad X_t\in\mathbb R^d,$$
where $f:\mathbb R^d\to\mathbb R^d$ and
$g:\mathbb R^d\to\mathbb R^{d\times m}$ are $C^1$. Assume that constants
$\mu,c,D\ge0$ and an integer $q\ge1$ satisfy, for all $x,y\in\mathbb R^d$,
$$\langle x-y,f(x)-f(y)\rangle\le\mu|x-y|^2, \qquad \|g(x)-g(y)\|_F^2\le c|x-y|^2,$$
and
$$|f(x)-f(y)|^2\le D(1+|x|^q+|y|^q)|x-y|^2.$$
For each $0<h\le1$ with $N=T/h\in\mathbb N$, let $Y^h$ be the continuous
Euler–Maruyama interpolation and $\bar Y^h$ its left-endpoint step process
from [[alg-euler-maruyama-autonomous]]. Assume
that an exact strong solution $X$ and these exact, step and continuous Euler
processes have uniformly bounded moments of every finite order on $[0,T]$:
for every $p\ge1$,
$$\mathbb E\sup_{t\le T}|X_t|^p+ \sup_{0<h\le1,\ T/h\in\mathbb N}\left( \mathbb E\sup_{t\le T}|Y_t^h|^p+ \mathbb E\sup_{t\le T}|\bar Y_t^h|^p\right)<\infty.$$
Then a constant $C$, independent of $h$, satisfies
$$\mathbb E\sup_{0\le t\le T}|X_t-Y_t^h|^2\le Ch.$$
In particular the grid-point root-mean-square error is $O(h^{1/2})$.
The all-moment premise is part of this source contract; $X_0\in L^2$ alone
does not imply it.

## Facts & Assumptions

**Given:** AC; finite $d,m$; $T>0$; the stated Brownian and coefficient hypotheses; an exact strong solution $X$; and the uniform all-moment bounds in the Statement.

[F1] The autonomous Euler algorithm returns the grid recursion, left-endpoint step process, and continuous interpolation using $Y_t=Y_k+f(Y_k)(t-t_k)+g(Y_k)(W_t-W_{t_k})$; endpoint values agree with the recursion. [[alg-euler-maruyama-autonomous]]

[F2] For every even integer $r\ge2$, the autonomous Euler interpolation increment satisfies $\sup_{t\le T}\mathbb E|Y_t-\bar Y_t|^r\le C_rh^{r/2}$ under the all-moment and coefficient premises stated in that lemma. [[lem-euler-maruyama-autonomous-interpolation-increment-moments]]

[F3] For a finite-dimensional continuous Brownian Itô process and $F\in C^{1,2}$, Itô's formula has drift $\partial_tF+b\cdot\nabla F+\frac12(\sigma\sigma^{\mathsf T}):D^2F$ and stochastic term $\nabla F\,\sigma\,dW$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F4] For a finite-energy $m$-dimensional Brownian Itô integral $N_t=\sum_j\int_0^tK_s^j\,dW_s^j$, $\mathbb E\sup_{t\le T}|N_t|\le16\sqrt m\,\mathbb E(\int_0^T\sum_j|K_s^j|^2ds)^{1/2}$. [[lem-brownian-ito-integral-l1-maximal-bound]]

[F5] If $U,V\in L^2$, then $\mathbb E|UV|\le(\mathbb E U^2)^{1/2}(\mathbb E V^2)^{1/2}$. [[cor-cauchy-schwarz-for-random-variables]]

[F6] If $v(t)\le A+\int_0^t Bv(s)\,ds$ for nonnegative continuous $v$ and constants $A,B\ge0$, then $v(t)\le Ae^{Bt}$. [[thm-gronwall-integral-inequality]]

[F7] A finite-dimensional continuous Brownian Itô process is an adapted continuous solution of its coordinatewise drift-plus-Itô-integral equation on the given usual filtered space. [[def-continuous-brownian-ito-process]]

[F8] Tonelli's theorem interchanges expectation and time integration for the nonnegative measurable drift and diffusion-error terms used below. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] AC is stated because the Brownian, Itô-process, multidimensional Itô and maximal-integral interfaces in [F3], [F4], and [F7] adopt it. [[def-axiom-of-choice]]

## Proof

1.1 Induction in the recursion shows that $Y_k^h$ is $\mathcal F_{t_k}$-measurable: this holds for $Y_0=X_0$, and each update uses $\mathcal F_{t_k}$-measurable coefficients and a Brownian increment measurable at $t_{k+1}$. The interpolation is therefore adapted and continuous. For integration use the predictable step representative $\widehat Y_0^h=Y_0$ and $\widehat Y_s^h=Y_k^h$ on $(t_k,t_{k+1}]$; its coefficient processes $f(\widehat Y^h)$ and $g(\widehat Y^h)$ are predictable because each $Y_k^h$ is $\mathcal F_{t_k}$-measurable and $f,g$ are continuous. It agrees with $\bar Y^h$ outside the finite set of grid times. The recursion and interpolation give the same integral equation with these predictable coefficients. Setting $y=0$ in the coefficient inequalities yields $|f(x)|^2\le2|f(0)|^2+2D(1+|x|^q)|x|^2$ and $\|g(x)\|_F^2\le2\|g(0)\|_F^2+2c|x|^2$. The all-moment premise thus gives finite expected time-integral energy for these Euler coefficients; it gives the same for $f(X)$ and $g(X)$. The definition [F7] then makes the Euler interpolation and exact solution continuous Brownian Itô processes, and its linear-combination clause makes their difference $e$ one as well. In Itô's formula for $|e_t|^2$, the drift is $2\langle e_t,f(X_t)-f(\widehat Y_t^h)\rangle+\|G_t\|_F^2$ and the martingale term is $M_t=2\sum_{j=1}^m\int_0^t\langle e_s,G_{s,\cdot j}\rangle\,dW_s^j$, where $G_s=g(X_s)-g(\widehat Y_s^h)$. Since $e$ is continuous adapted and $G$ is predictable, each martingale integrand is predictable. Its finite expected energy follows from $\sum_j|2\langle e_s,G_{s,\cdot j}\rangle|^2\le4|e_s|^2\|G_s\|_F^2$ and $\mathbb E\int_0^T|e_s|^2\|G_s\|_F^2ds\le T(\mathbb E\sup_{s\le T}|e_s|^4)^{1/2}(\mathbb E\sup_{s\le T}\|G_s\|_F^4)^{1/2}<\infty$ by the all-moment and coefficient-growth premises. [F1, F3, F7, given]

1.2 Split the drift difference at $Y_t^h$. The one-sided Lipschitz bound and $2ab\le a^2+b^2$ give $2\langle e,f(X)-f(\widehat Y)\rangle \le(2\mu+1)|e|^2+|f(Y)-f(\widehat Y)|^2$ almost everywhere in time. The polynomial local-Lipschitz condition bounds the final term by $D(1+|Y|^q+|\widehat Y|^q)|Y-\widehat Y|^2$. Also, splitting $g(X)-g(\widehat Y)$ at $g(Y)$ and using its global Lipschitz bound gives $\|G\|_F^2\le2c|e|^2+2c|Y-\widehat Y|^2$. By [F2] with $r=2,4$, the all-moment premise, and [F5], $\mathbb E|Y_s-\widehat Y_s|^2\le C h$ and $\mathbb E\big[(1+|Y_s|^q+|\widehat Y_s|^q)|Y_s-\widehat Y_s|^2\big]\le C h$ for almost every $s$, uniformly in $h$. Tonelli [F8] then bounds the expected integrated drift by $C\int_0^t\mathbb E|e_s|^2\,ds+Ch$. [F2, F5, F8, given, algebra]

1.3 Apply [F4] to the vector integrand $K_s^j=2\langle e_s,G_{s,\cdot j}\rangle$. Since $\sum_j|K_s^j|^2\le4|e_s|^2\|G_s\|_F^2$, $\mathbb E\sup_{s\le t}|M_s| \le32\sqrt m\,\mathbb E\left[\sup_{s\le t}|e_s|\left(\int_0^t\|G_s\|_F^2ds\right)^{1/2}\right] \le32\sqrt m\left(v(t)\,\mathbb E\int_0^t\|G_s\|_F^2ds\right)^{1/2},$ where $v(t)=\mathbb E\sup_{s\le t}|e_s|^2$. From [F2], Tonelli [F8], and the Lipschitz estimate for $g$, $\mathbb E\int_0^t\|G_s\|_F^2\,ds \le C\int_0^t\mathbb E|e_s|^2\,ds+Ch.$ Young's inequality therefore bounds the martingale term by $\frac12v(t)+C\int_0^t v(s)\,ds+Ch$. [F2, F4, F5, F8, given, algebra]

2.1 Take the supremum over times up to $t$ in Itô's identity from step 1.1, take expectations, and insert the drift estimate from step 1.2 and martingale estimate from step 1.3. Moving $\frac12v(t)$ to the left gives $v(t)\le C\int_0^t v(s)\,ds+Ch.$ The all-moment assumption makes $v$ finite; pathwise continuity of $e$ and dominated convergence make $v$ continuous. Applying [F6] with the nondecreasing constant term $Ch$ yields $v(T)\le C'h$. The constants depend on $T,d,m,\mu,c,D,q$ and the all-moment bounds, but not on $h$. [F6, step 1.1, step 1.2, step 1.3, algebra]

3.1 Since $Y_T^h=Y_N^h$, the grid endpoint is included in the supremum bound. Taking square roots gives the stated root-mean-square order. AC is inherited exactly through [A1]; no choice principle is used in the numerical estimates. [A1, step 2.1] ∎

## Remarks

This is the autonomous all-moment Higham–Mao–Stuart route. It does not replace the separate finite-$L^2$ theorem, does not extend to nonautonomous coefficients, and does not derive its all-moment premise from $X_0\in L^2$. The local proof uses [F4], whose $L^1$ maximal estimate is proved from the published $L^2$ Doob inequality and stopping identity; no unproved Burkholder–Davis–Gundy supplier is imported.
