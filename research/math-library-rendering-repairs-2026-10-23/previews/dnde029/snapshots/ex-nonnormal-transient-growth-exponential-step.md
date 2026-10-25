---
id: ex-nonnormal-transient-growth-exponential-step
kind: example
title: Exact exponential stepping captures nonnormal transient growth
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - def-inner-product-norm
  - prop-standard-coordinate-inner-products
  - def-matrix-product-and-identity-matrix
  - lem-exponential-series-of-a-bounded-operator
  - def-exponential-euler-and-etd2-step-maps
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - lem-exponential-series-has-infinite-radius
  - lem-finite-matrix-semilinear-variation-of-constants
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Marlis Hochbruck and Alexander Ostermann, Exponential Integrators, Acta Numerica 19 (2010)"
      url: "https://publikationen.bibliothek.kit.edu/1000024914/1910360"
      locator: "§1, equations (1.2)–(1.6), and §3, highly oscillatory/nonnormal evolution discussion, PDF pp. 1–4 and 30–42."
    - title: "Jitse Niesen and Will M. Wright, A Krylov Subspace Algorithm for Evaluating the Phi-Functions Appearing in Exponential Integrators, arXiv:0907.4631v2"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "§3.1, Arnoldi action approximation and work count, PDF pp. 4–5."
---

## Statement

Let
$$A=\begin{pmatrix}-1&2e\\0&-1\end{pmatrix},\qquad g=0,\qquad y(0)=\begin{pmatrix}0\\1\end{pmatrix}.$$
Here nonnormal means $AA^*\ne A^*A$. Compute the exact solution, show its norm grows above its initial value before decaying, and verify that exact-action exponential Euler and ETD2 reproduce it at every grid point.

## Facts & Assumptions

**Given:** The finite matrix, zero nonlinear term, initial state, and methods of [[def-exponential-euler-and-etd2-step-maps]].

[F1] [[def-exponential-euler-and-etd2-step-maps]]: when $g=0$, both exact maps reduce to $y\mapsto e^{hA}y$.

[F2] [[lem-exponential-series-of-a-bounded-operator]]: the finite-matrix exponential is defined by its convergent series and satisfies $e^{(r+s)A}=e^{rA}e^{sA}$.

[F3] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: $e^t$ is defined by its convergent power series.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]], and [[def-matrix-product-and-identity-matrix]]: $A^*$ is the conjugate transpose and products are the usual matrix products.

[F5] [[def-inner-product-norm]] and [[prop-standard-coordinate-inner-products]]: $\|v\|_2^2=v^*v$ in standard complex coordinates.

[F6] [[cor-exponential-reciprocal-and-positivity]]: $e^{-t}=1/e^t$ and $e^t>0$ for every real $t$.

[F7] [[lem-finite-matrix-semilinear-variation-of-constants]]: when $g=0$, a solution satisfies $y(t)=e^{tA}y(0)$.

[A1] The exact IVP starts at the stated $y(0)$ and has $g=0$.

## Verification

1.1 Write $A=-I+N$ with $N=\begin{pmatrix}0&2e\\0&0\end{pmatrix}$; direct multiplication gives $N^2=0$ [F4]. The formula holds for $n=1$ since $A=-I+N$. If $A^n=(-1)^nI+n(-1)^{n-1}N$, multiplying by $A=-I+N$ and using $N^2=0$ gives $A^{n+1}=(-1)^{n+1}I+(n+1)(-1)^nN$, so induction proves it for every $n\ge1$. Substituting in the absolutely convergent matrix-exponential series [F2] gives $e^{tA}=e^{-t}I+\sum_{n\ge1}t^n(-1)^{n-1}N/(n-1)!=e^{-t}(I+tN)$ by the scalar series [F3]. [given, F2, F3, F4, induction, algebra]

2.1 By [F7] and step 1.1, the solution is $y(t)=e^{-t}(2et,1)^{\mathsf T}$. Direct multiplication using [F4] gives $AA^*=\begin{pmatrix}1+4e^2&-2e\\-2e&1\end{pmatrix}$ and $A^*A=\begin{pmatrix}1&-2e\\-2e&1+4e^2\end{pmatrix}$, which differ, so $A$ is nonnormal. By [F5] and [F6], its initial norm is $1$, whereas $\|y(1)\|_2=e^{-1}\sqrt{4e^2+1}>2$. For $t>0$, the exponential series gives $e^t\ge t^2/2$, and [F6] gives $e^{-t}=1/e^t\le2/t^2$; hence $e^{-t}\to0$ and $te^{-t}\le2/t\to0$, so $y(t)\to0$. [A1, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 By [F1], every exact-action step is multiplication by $e^{hA}$. Repeated use of the semigroup identity in [F2] gives $(e^{hA})^n=e^{nhA}$, so the method returns $y(t_n)$ at every grid point. The transient growth is therefore present in the exact linear flow and is not removed by exponentiating this nonnormal matrix. [F1, F2, step 1.1, algebra, induction] ∎

## Remarks

The phase-plane picture illustrates the exact trajectory $y(t)=(2te^{1-t},e^{-t})^{\mathsf T}$ for $t\ge0$. Arrows follow increasing time. The filled points are attained at $t=0$ and $t=1$; the origin is only the limit as $t\to\infty$. The dashed radial segment compares $\|y(1)\|_2>2$ with $\|y(0)\|_2=1$. Both exact-action methods sample this same curve at their grid points, as proved above. The verification is independent of the picture.

```tikz
\begin{tikzpicture}[scale=2.5,>=stealth]
\draw[->] (-0.18,0) -- (2.65,0) node[right] {$y_1$};
\draw[->] (0,-0.12) -- (0,1.35) node[above] {$y_2$};
\node[below left] at (0,0) {$0$};
\draw[dashed] (0,0) -- (2,0.36788);
\node[below] at (1.25,0.21) {$\|y(1)\|_2>2$};
\draw[thick] plot[smooth] coordinates {(0.00000,1.00000) (0.49192,0.90484) (0.89022,0.81873) (1.20825,0.74082) (1.45770,0.67032) (1.64872,0.60653) (1.79019,0.54881) (1.88980,0.49659) (1.95424,0.44933) (1.98931,0.40657) (2.00000,0.36788) (1.99064,0.33287) (1.96495,0.30119) (1.92613,0.27253) (1.87690,0.24660) (1.81959,0.22313) (1.75620,0.20190) (1.68839,0.18268) (1.61758,0.16530) (1.54496,0.14957) (1.47152,0.13534) (1.39806,0.12246) (1.32525,0.11080) (1.25365,0.10026) (1.18367,0.09072) (1.11565,0.08208) (1.04986,0.07427) (0.98649,0.06721) (0.92567,0.06081) (0.86750,0.05502) (0.81201,0.04979) (0.75923,0.04505) (0.70914,0.04076) (0.66171,0.03688) (0.61688,0.03337) (0.57459,0.03020) (0.53477,0.02732) (0.49732,0.02472) (0.46216,0.02237) (0.42918,0.02024) (0.39830,0.01832) (0.36940,0.01657) (0.34240,0.01500) (0.31720,0.01357) (0.29368,0.01228) (0.27178,0.01111) (0.25138,0.01005) (0.23240,0.00910) (0.21476,0.00823) (0.19837,0.00745) (0.18316,0.00674) (0.16904,0.00610) (0.15595,0.00552) (0.14383,0.00499) (0.13260,0.00452) (0.12220,0.00409) (0.11258,0.00370) (0.10369,0.00335) (0.09547,0.00303) (0.08787,0.00274) (0.08086,0.00248) (0.07438,0.00224) (0.06841,0.00203) (0.06289,0.00184) (0.05781,0.00166) (0.05313,0.00150) (0.04881,0.00136) (0.04484,0.00123) (0.04117,0.00111) (0.03780,0.00101) (0.03470,0.00091) (0.03185,0.00083) (0.02922,0.00075) (0.02681,0.00068) (0.02459,0.00061) (0.02255,0.00055) (0.02068,0.00050) (0.01896,0.00045) (0.01737,0.00041) (0.01592,0.00037) (0.01459,0.00034)};
\draw[thick,->] (1.20825,0.74082) -- (1.45770,0.67032);
\draw[thick,->] (1.47152,0.13534) -- (1.39767,0.12246);
\node[above right] at (1.15,0.78) {$t\ \mathrm{increases}$};
\fill (0,1) circle (0.025);
\node[left] at (0,1) {$y(0)=(0,1)$};
\fill (2,0.36788) circle (0.025);
\node[right] at (2,0.46) {$y(1)=(2,e^{-1})$};
\draw[thick,dashed,->] (0.01459,0.00034) -- (0.00247,0.00005);
\node[below] at (0.48,-0.14) {$y(t)\to0$};
\end{tikzpicture}
```
