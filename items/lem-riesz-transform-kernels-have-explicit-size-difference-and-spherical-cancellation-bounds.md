---
id: lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds
kind: lemma
title: "Riesz kernel size, difference and spherical-cancellation bounds"
status: draft
origin: pipeline
deps: [def-riesz-transforms-on-euclidean-space, lem-riesz-transform-principal-value-kernel-formula, thm-polar-coordinates-formula-for-lebesgue-measure, cor-mean-value-theorem, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-derivative-of-a-power, thm-linear-change-of-variables-for-lebesgue-measure, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.4, kernel in Definition 5.1.13 and the estimates in the proof of Proposition 5.1.14, printed pp. 324-327"
---

## Statement

Assume [[def-countable-choice|Countable Choice]], let $n\ge1$ and $1\le j\le n$,
and let $K_j(x)=c_nx_j/|x|^{n+1}$ with
$c_n=\Gamma((n+1)/2)/\pi^{(n+1)/2}$ be the Riesz kernel of
[[def-riesz-transforms-on-euclidean-space]]. Then:

1. $|K_j(x)|\le c_n|x|^{-n}$ for every $x\ne0$;
2. with $C_n:=c_n\,2^{n+1}(3n+4)$ one has
   $|K_j(x-h)-K_j(x)|\le C_n\,|h|\,|x|^{-(n+1)}$ whenever $x\ne0$ and
   $|h|\le|x|/2$; and
3. $\int_{S^{n-1}}K_j(r\omega)\,d\sigma(\omega)=0$ for every $r>0$, where
   $\sigma$ is the polar surface measure of
   [[thm-polar-coordinates-formula-for-lebesgue-measure]] on the unit sphere
   $S^{n-1}=\{\omega\in\mathbb R^n:|\omega|=1\}$.

The constant $C_n$ is explicit and depends only on $n$; at $n=1$ it reads
$C_1=28c_1=28/\pi$. These are the raw size, first-difference and cancellation
estimates that a later singular-integral treatment consumes; no Calderón–Zygmund
kernel definition is invoked here.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le j\le n$, and the Riesz kernel $K_j(x)=c_nx_j/|x|^{n+1}$ with $0<c_n<\infty$.

[F1] The Riesz kernel $K_j(x)=c_nx_j/|x|^{n+1}$ has $0<c_n<\infty$, is smooth, odd and homogeneous of degree $-n$ on $\mathbb R^n\setminus\{0\}$, so $K_j(r\omega)=c_nr^{-n}\omega_j$ whenever $r>0$ and $|\omega|=1$. [[def-riesz-transforms-on-euclidean-space]]

[F2] If $N$ is a norm on a real vector space and $u,w$ are vectors, then $\bigl|N(u)-N(w)\bigr|\le N(u-w)$. [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]

[F3] For $n\ge1$ and $x\in\mathbb R^n$ the Euclidean norm satisfies $\lVert x\rVert_\infty\le\lVert x\rVert_2$, hence $|x_j|\le\lVert x\rVert_2=|x|$ for every coordinate $j$. [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]

[F4] Mean value theorem: a real function continuous on a closed interval and differentiable on its interior has a point whose derivative equals the average rate of change. [[cor-mean-value-theorem]]

[F5] For every natural $m\ge1$ the function $s\mapsto s^{-m}$ is differentiable on $\mathbb R\setminus\{0\}$ with derivative $-m\,s^{-m-1}$. [[lem-derivative-of-a-power]]

[F6] Polar coordinates: for $n\ge1$ and every Borel $h:\mathbb R^n\to[0,\infty]$, $\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$, and $\sigma$ is a finite Borel measure on $S^{n-1}$. [[thm-polar-coordinates-formula-for-lebesgue-measure]]

[F7] Linear change of variables for Lebesgue measure, in particular $\lambda_n(T[E])=|\det T|\,\lambda_n(E)$ for invertible linear $T$. [[thm-linear-change-of-variables-for-lebesgue-measure]]

## Proof

**Proof technique:** direct.

1.1 Fix $x\ne0$. By [F1] the kernel is $K_j(x)=c_nx_j|x|^{-(n+1)}$, so $|K_j(x)|=c_n|x_j||x|^{-(n+1)}\le c_n|x|^{-n}$ by the coordinate bound $|x_j|\le|x|$ of [F3] and the positivity $|x|>0$. [F1, F3, given, algebra]

1.2 Fix $x\ne0$ and $h$ with $|h|\le|x|/2$ and put $A:=|x-h|$. By [F2] applied to the Euclidean norm, $\bigl|A-|x|\bigr|\le|h|$, so $|x|/2\le A\le3|x|/2$; by [F3], $|h_j|\le|h|$ and $|(x-h)_j|\le A\le3|x|/2$. In particular $A>0$ and the kernel is defined at both arguments. [F2, F3, given, algebra]

1.3 Let $A_n:=\int_{S^{n-1}}\omega_j\,d\sigma(\omega)$ and $H(x):=\mathbf 1_{\{1<|x|<2\}}\,x_j$. The function $H$ is Borel and $\int_{\mathbb R^n}|H|\,d\lambda_n<\infty$; the map $x\mapsto-x$ is a linear bijection with $|\det|=1$, so [F7] gives $\int_{\mathbb R^n}H(-x)\,d\lambda_n(x)=\int_{\mathbb R^n}H(x)\,d\lambda_n(x)$, while $H(-x)=-H(x)$ gives $\int H\,d\lambda_n=-\int H\,d\lambda_n$, that is, $\int_{\mathbb R^n}H\,d\lambda_n=0$. On the other hand [F6] applied to the nonnegative and the negative part of $H$ gives $\int_{\mathbb R^n}H\,d\lambda_n=\int_1^2 r^{n-1}\bigl(\int_{S^{n-1}}r\omega_j\,d\sigma(\omega)\bigr)dr=A_n\int_1^2r^n\,dr$ with $\int_1^2r^n\,dr>0$, so $A_n=0$. Hence for every $r>0$ the homogeneity [F1] gives $\int_{S^{n-1}}K_j(r\omega)\,d\sigma(\omega)=c_nr^{-n}\int_{S^{n-1}}\omega_j\,d\sigma(\omega)=c_nr^{-n}A_n=0$. [F1, F6, F7, given, algebra]

2.1 Keep $x\ne0$ and $|h|\le|x|/2$ as in 1.2, put $B:=|x|$ and $\psi(s):=s^{-(n+1)}$; by [F5] with $m=n+1\ge2\ge1$ one has $\psi'(s)=-(n+1)s^{-(n+2)}$ on $(0,\infty)$. The interval with endpoints $A$ and $B$ lies in $[B/2,\infty)$ by 1.2. If $A=B$, then $|\psi(A)-\psi(B)|=0$ and the following bound is immediate. If $A\ne B$, [F4] on the interval with ordered endpoints $\min(A,B)<\max(A,B)$ gives a point $s$ with $\psi(A)-\psi(B)=\psi'(s)(A-B)$ and therefore $|\psi(A)-\psi(B)|\le(n+1)(B/2)^{-(n+2)}|A-B|\le(n+1)2^{n+2}|h|B^{-(n+2)}$. Insert $\pm(x-h)_j\psi(B)$ into the difference and expand: $K_j(x-h)-K_j(x)=c_n\bigl[(x-h)_j\bigl(\psi(A)-\psi(B)\bigr)-h_j\psi(B)\bigr]$, so by 1.2 and the preceding bound, and by $\psi(B)=B^{-(n+1)}$, $|K_j(x-h)-K_j(x)|\le c_n\bigl[\tfrac32(n+1)2^{n+2}+2^{n+1}\bigr]|h|B^{-(n+1)}=C_n|h||x|^{-(n+1)}$ with $C_n=c_n2^{n+1}(3n+4)$, since $\tfrac32(n+1)2^{n+2}=3(n+1)2^{n+1}$ and $3(n+1)+1=3n+4$. [step 1.2, F1, F4, F5, given, algebra]

3.1 The three assertions are proved: $|K_j(x)|\le c_n|x|^{-n}$ for $x\ne0$ is 1.1; the difference bound with the stated constant is 2.1, whose hypothesis $|h|\le|x|/2$ keeps both arguments nonzero as recorded in 1.2; and the vanishing of every spherical integral $\int_{S^{n-1}}K_j(r\omega)\,d\sigma(\omega)$, $r>0$, is 1.3. [step 1.1, step 1.3, step 2.1, given] ∎
