---
id: thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums
kind: theorem
title: "Truncated zero-sum formula for primitive Dirichlet-character von Mangoldt sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-dirichlet-character-von-mangoldt-sum
  - def-parity-dirichlet-character
  - def-primitive-dirichlet-character-and-conductor
  - def-von-mangoldt-function
  - lem-dirichlet-character-values
  - lem-primitive-dirichlet-l-logarithmic-derivative-contour-bounds
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-truncated-perron-formula
  - thm-residue-theorem-null-homologous-cycle
  - thm-dirichlet-l-euler-product
  - thm-primitive-dirichlet-l-functional-equation
  - thm-gamma-weierstrass-product
  - cor-gamma-one-half-value
  - thm-euler-mascheroni-constant-and-harmonic-asymptotic
justified_by: []
proof_strategy: contour
axiom_use: "The proof uses explicit finite contours and a choice-free conductor-one theta regularization; it does not invoke the choice-qualified zeta zero-count or explicit-formula theorems."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory I, Chapter 12, Theorem 12.10 and Corollary 12.11"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf"
      locator: "Printed pp. 403–405: primitive-character truncated formula, residue constant, error, and exceptional-zero cancellation."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., Chapter 19"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 114–120: truncated formula with the residue constant and the exceptional-zero correction."
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chap-errorbounds2.html"
      locator: "Theorem 10.2: explicit formula and the term b(χ); proof refers to Davenport §19."
verification: {}
---

## Statement

Let $\chi$ be a primitive Dirichlet character modulo $q\ge1$, of parity $a\in\{0,1\}$, with $\chi(-1)=(-1)^a$. Put $\delta_\chi=1$ for $q=1$ and $0$ otherwise, and put $m_\chi=1$ for $q>1,a=0$ and $0$ otherwise. Define $b_\chi$ by the Laurent expansion
$$\frac{L'}{L}(s,\chi)=\frac{m_\chi}{s}+b_\chi+O(s)\quad(s\to0),$$
and define
$$V_a(x)=\begin{cases}-\tfrac12\log(1-x^{-2}),&a=0,\\\tfrac12\log((x+1)/(x-1)),&a=1.\end{cases}$$
Let $\psi_0(x,\chi)=\sum_{n<x}\Lambda(n)\chi(n)+\tfrac12\Lambda(x)\chi(x)$, where the endpoint term is zero unless $x$ is a positive integer. For all real $x,T\ge2$,
$$\psi_0(x,\chi)=\delta_\chi x-\sum_{|\gamma|\le T}\frac{x^\rho}{\rho}-m_\chi\log x-b_\chi+V_a(x)+O\!\left(\frac{x}{T}\log^2(qxT)+(\log x)\min\left\{1,\frac{x}{T\langle x\rangle}\right\}\right).$$
Here the finite sum runs over all nontrivial zeros $\rho=\beta+i\gamma$, with multiplicity and both signs of the ordinate, including real zeros; $\langle x\rangle$ is the distance to the nearest positive prime power other than $x$ itself. All implied constants are absolute. In particular, for $x\in\mathbb Z+\tfrac12$, $2\le T\le x$, and any zero-separated height satisfying $||\gamma|-T|\ge\eta/\log(q(T+2))$, the starred and sharp sums agree and the error is $O_\eta(xT^{-1}\log^2(qxT)+\log^2(qxT))$.

For $q>1$ the residue normalization is
$$-b_\chi=\frac{L'}{L}(1,\bar\chi)+\log\frac{q}{2\pi}-\gamma_0,$$
where $\gamma_0$ is the Euler–Mascheroni constant. For $q=1$, $b_\chi=\zeta'(0)/\zeta(0)=\log(2\pi)$. No choice axiom is assumed.

## Statement references

[Montgomery–Vaughan, Chapter 12, Theorems 12.5 and 12.10, including the residue calculation on printed p. 405](https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf)

## Facts & Assumptions

**Given:** The primitive character, parity and parameters in the Statement.

[F1] The sharp sum and von Mangoldt weights have their stated conventions ([[def-dirichlet-character-von-mangoldt-sum]], [[def-von-mangoldt-function]], [[lem-dirichlet-character-values]]); $|\Lambda(n)\chi(n)|\le\log n$.

[F2] Primitive $L$-functions have the choice-free local and far-left logarithmic-derivative bounds, trivial-zero ledger and zero symmetries in [[lem-primitive-dirichlet-l-logarithmic-derivative-contour-bounds]]. Right-half zeros in a unit window have the bound of [[lem-primitive-dirichlet-l-zero-count-in-unit-window]]; functional reflection gives the same bound for all strip zeros.

[F3] Truncated Perron inversion holds with its two explicit kernel errors and starred endpoint ([[thm-truncated-perron-formula]]).

[F4] The residue theorem holds on admissible finite contours ([[thm-residue-theorem-null-homologous-cycle]]). In every rectangle below choose a bounded open neighbourhood with no further poles outside the contour, so the local residue sum includes all poles of that neighbourhood.

[F5] The Euler product and its logarithm converge absolutely for $\Re s>1$ ([[thm-dirichlet-l-euler-product]]); the primitive completed functional equation has its literal conjugate-character convention ([[thm-primitive-dirichlet-l-functional-equation]]).

[F6] Reciprocal Gamma has its locally uniformly convergent product with Euler constant $\gamma_0$, and $\Gamma(1/2)=\sqrt\pi$ ([[thm-gamma-weierstrass-product]], [[cor-gamma-one-half-value]]). Harmonic numbers satisfy $H_N=\log N+\gamma_0+o(1)$ ([[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]).

## Proof

**Proof technique:** truncated Perron inversion and finite contours, retaining the residue at zero.

1.1 Put $c=1+1/\log(2x)\in(1,2)$, so $x^c=O(x)$. Differentiating the absolutely convergent Euler logarithm [F5] gives $-L'/L(s,\chi)=\sum_{n\ge1}\Lambda(n)\chi(n)n^{-s}$ in $\Re s>1$. At height $H\ge2$, [F3] expresses $\psi_0(x,\chi)$ as $P_H=-(2\pi i)^{-1}\int_{c-iH}^{c+iH}(L'/L)(s,\chi)x^sds/s$, with error bounded by $$\sum_{n\ne x}\Lambda(n)(x/n)^c\min\{1,(H|\log(x/n)|)^{-1}\}+\frac{c\Lambda(x)}H.$$ This use is valid for complex coefficients by the triangle inequality, and the endpoint term is present only for integer $x$. [F1, F3, F5, given, algebra]

1.2 The all-zero unit-window bound [F2] shows that only $O(\log(q(T+2)))$ absolute ordinates fall in $[T-1,T+2]$. Remove intervals of radius $d/\log(q(T+2))$ about them from $[T,T+1]$, with a sufficiently small absolute $d>0$; their total length is less than $1/2$. A point $H$ of the complement exists and has the required separation from every absolute ordinate; ordinates outside the enlarged interval are at distance at least $1$. This is one finite selection, not a countable choice. By [F2], $L'/L(\sigma\pm iH,\chi)=O(\log^2(q(H+2)))$ for $-1\le\sigma\le c$. [F2, given, construct, algebra]

1.3 Logarithmic differentiation of the completed functional equation in [F5] gives $$\frac{L'}{L}(s,\chi)=-\frac{L'}{L}(1-s,\bar\chi)-\log(q/\pi)-\tfrac12\psi((s+a)/2)-\tfrac12\psi((1-s+a)/2),$$ where $\psi=\Gamma'/\Gamma$. From [F6], $\psi(s/2)=-2/s-\gamma_0+O(s)$, $\psi(1)=-\gamma_0$, and $\psi(1/2)=-\gamma_0-2\log2$. For the last identity the product derivative's partial sum is $-2-\gamma_0+2H_N-2H_{2N+1}+2$, tending to $-\gamma_0-2\log2$. Substituting $s=0$ and taking the finite part gives, for $q>1$, $-b_\chi=(L'/L)(1,\bar\chi)+\log(q/(2\pi))-\gamma_0$ in both parity cases. Nonvanishing at $1$ and the exact order at $0$ are already established in [F2]. [F2, F5, F6, algebra]

2.1 The far terms $n\notin(3x/4,5x/4)$ have $|\log(x/n)|\gg1$ and total $O(x\log^2(2x)/H)$: use $\Lambda(n)\le\log n$ and $\sum_{n\ge2}(\log n)n^{-c}=O((c-1)^{-2})$ by the integral test. For the near terms $(x/n)^c=O(1)$ and $|\log(x/n)|\gg|n-x|/x$. On each side single out the closest contributing prime power to $x$, if any. Each such term is at most $O(\log x\min\{1,x/(H\langle x\rangle)\})$. For every other prime power on that side, its distance from $x$ is at least its positive integer distance from the singled-out integer; summing these distances costs $O(\log(2x))$. Thus all remaining terms are $O(x\log^2(2x)/H)$. The separate endpoint is $O(\log(2x)/H)$. Consequently $$\psi_0(x,\chi)=P_H+O\!\left(\frac{x\log^2(2x)}H+(\log x)\min\{1,x/(H\langle x\rangle)\}\right).$$ [F1, step 1.1, algebra]

2.2 Shift the segment in $P_H$ to the left side of the rectangle with vertices $c\pm iH,-K\pm iH$, where $K$ runs over positive half-integers tending to infinity. For the horizontal parts $-1\le\sigma\le c$, step 1.2 gives an integral of modulus at most $$C\frac{\log^2(q(H+2))}{H}\int_{-1}^c x^\sigma d\sigma\ll\frac{x\log^2(q(H+2))}{H\log x}.$$ For $\sigma\le-1$, each horizontal point has distance at least $H$ from every trivial zero. The far-left estimate [F2] gives tails bounded by $C\int_{-\infty}^{-1}x^\sigma\log(q(|\sigma|+H+2))d\sigma/H\ll\log(q(H+2))/(Hx\log x)$. Along $\Re s=-K$, distance from every trivial zero is at least $1/2$; its vertical integral is $O(Hx^{-K}\log(q(K+H+2))/K)\to0$. Thus all boundary integrals are $O(xH^{-1}\log^2(qxH))$. [F2, step 1.2, algebra]

2.3 For $q=1$, a direct summation on integer intervals gives for $\Re s>1$ and then, by locally uniform convergence of the tail integral, for $\Re s>0$, $$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty\{v\}v^{-s-1}dv.$$ This follows by integrating the step function $\lfloor v\rfloor$ on each interval and letting the integer endpoint tend to infinity. Derivatives of the tail integral on a compact set with $\Re s\ge\epsilon>0$ are dominated by constants times $v^{-1-\epsilon}(1+|\log v|^j)$, so the identity gives holomorphic continuation there. Moreover $\int_1^N\{v\}v^{-2}dv=\log N-H_N+1$, so [F6] yields $\zeta(s)=1/(s-1)+\gamma_0+O(s-1)$. In the completed functional equation, use this at $1-s$, together with $1/\Gamma(s/2)=s/2+\gamma_0s^2/4+O(s^3)$, $\Gamma((1-s)/2)=\sqrt\pi(1-\psi(1/2)s/2+O(s^2))$, and $\pi^{s-1/2}=\pi^{-1/2}(1+s\log\pi+O(s^2))$. Multiplication gives $\zeta(s)=-1/2-\tfrac12\log(2\pi)s+O(s^2)$, hence $b_\chi=\log(2\pi)$. This establishes the conductor-one constant without a choice-qualified zeta theorem. [F5, F6, step 1.3, algebra]

3.1 By [F4], a nontrivial zero contributes $-m_\rho x^\rho/\rho$. The only pole of $L$ is at $1$ for $q=1$, contributing $x$. The simple negative trivial zeros contribute $x^{-2k}/(2k)$ for even parity and $x^{1-2k}/(2k-1)$ for odd parity. At $0$, the Laurent expansion in the Statement gives residue $-m_\chi\log x-b_\chi$. There is no nontrivial zero at $0$ by [F2]. Letting $K\to\infty$, the negative-trivial-zero series converge absolutely and sum to $V_0(x)=-\tfrac12\log(1-x^{-2})$ and $V_1(x)=\tfrac12\log((x+1)/(x-1))$, by integrating geometric series. This proves the displayed formula at height $H$, with the error of step 2.1 plus the boundary error of step 2.2. [F2, F4, step 2.1, step 2.2, algebra]

4.1 Moving the cutoff from $H$ to $T$ changes at most $O(\log(q(T+2)))$ zeros with $T\le|\gamma|\le H\le T+1$. Each term has modulus at most $x/T$, since $0<\Re\rho<1$. This includes zeros exactly at $T$ and proves either strict or non-strict endpoint convention with error $O(x\log(q(T+2))/T)$. Since $H\asymp T$ and $\log(qxH)\asymp\log(qxT)$, step 3.1 yields the Statement for every $T\ge2$, including zero ordinates. [F2, step 1.2, step 3.1, algebra]

5.1 If $x$ is a half-integer, the endpoint has no jump and $\psi_0(x,\chi)=\psi(x,\chi)$. Also $\langle x\rangle\ge1/2$, so the endpoint-distance term is at most $\log x\ll\log^2(qxT)$. Restricting step 4.1 to $2\le T\le x$ and to the separated heights in the original scope gives the asserted specialized error; its additional separation hypothesis is harmless. All finite-part and trivial-tail terms remain present. [F1, step 4.1, given, algebra] ∎

## Source notes

The native all-zero Statement omitted the residue at $0$. The present formula restores that residue and the full trivial-zero tail, with the precise conjugate-character normalization, while retaining the original half-integer and zero-separated range as a specialization. The omission is an unsupported source/interface claim, not an asserted unconditional counterexample based on the unknown existence of extremely close exceptional zeros. Neither the classical zero-free-region theorem nor Siegel's bound is a premise of this contour proof. The conductor-one argument is reconstructed locally, and the choice-qualified published zeta counting/formula results are not used to establish this unqualified Statement.
