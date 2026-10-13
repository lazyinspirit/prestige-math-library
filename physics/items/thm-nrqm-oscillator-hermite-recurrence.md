---
id: thm-nrqm-oscillator-hermite-recurrence
aliases: [nrqm-oscillator-hermite-recurrence]
kind: theorem
domain: mathematics
title: "Hermite recurrence"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, cor-cauchy-schwarz-inequality-for-l-two, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, thm-derivative-of-exponential, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, thm-complex-exponential-addition-and-real-extension, thm-chain-rule, thm-algebra-of-derivatives, thm-ftc-second-part, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, def-countable-choice, thm-lebesgue-measure-under-dilations-and-reflections]
dependency_roles:
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-lebesgue-measure-under-dilations-and-reflections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (ladder operators, Hermite polynomials, Theorem 8.5)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 pp. 37-41 (ladder algebra and the ground-state Gaussian)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $L^2=L^2(\mathbb R,dy)$ be the complex Lebesgue space with inner product $\langle\varphi,\psi\rangle=\int_{\mathbb R}\varphi(y)\overline{\psi(y)}\,dy$ linear in the first argument ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]); this pairing makes $L^2$ a complex Hilbert space by [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]. For complex-valued functions, smoothness and derivatives use the componentwise convention of [[def-complex-lp-and-euclidean-test-function-conventions]]. Write $g_0$ for the function $g_0(y):=\pi^{-1/4}e^{-y^{2}/2}$ and also for its class in $L^2$. Put

$$P:=\{p\,g_0:\ p\in\mathbb C[y]\}\subseteq L^2 ,$$

the set of classes of polynomial multiples of $g_0$. Each class in $P$ has a unique representative of the form $p g_0$: if $p g_0=qg_0$ almost everywhere, the continuous function $(p-q)g_0$ vanishes almost everywhere and therefore everywhere, and $g_0(y)>0$ for every $y$, so $p=q$. Let $Y$ be multiplication by $y$ and $\partial_y$ the derivative, acting on this unique smooth representative. Set $g_{-1}:=0$ for use in the recurrence formulas at $n=0$. Define

$$a:=\frac{Y+\partial_y}{\sqrt2},\qquad a^\dagger:=\frac{Y-\partial_y}{\sqrt2},\qquad g_n:=\frac{(a^\dagger)^ng_0}{\sqrt{n!}}\quad(n\in\mathbb N).$$

Then:

(a) $g_0\in L^2$ with $\|g_0\|=1$; more generally $y^kg_0\in L^2$ for every $k\in\mathbb N$, so $P$ is a linear subspace of $L^2$ all of whose members are represented by $C^\infty$ functions;

(b) $Y,\partial_y,a,a^\dagger$ map $P$ into $P$, and $\partial_y(pg_0)=(p'-yp)g_0$ for every polynomial $p$;

(c) for all $\varphi,\psi\in P$, $\langle a^\dagger\varphi,\psi\rangle=\langle\varphi,a\psi\rangle$ and $\langle a\varphi,\psi\rangle=\langle\varphi,a^\dagger\psi\rangle$;

(d) $a^\dagger a-a a^\dagger=-I$ on $P$, i.e. $[a,a^\dagger]=aa^\dagger-a^\dagger a=I$ on $P$, and $ag_0=0$;

(e) for every $n\in\mathbb N$: $ag_n=\sqrt n\,g_{n-1}$ (with $ag_0=0$), $a^\dagger g_n=\sqrt{n+1}\,g_{n+1}$, $a^\dagger ag_n=ng_n$ and $aa^\dagger g_n=(n+1)g_n$;

(f) the polynomials

$$H_n(y):=(-1)^ne^{y^2}\frac{d^n}{dy^n}e^{-y^2}$$

are polynomials of degree $n$ with leading coefficient $2^n$, $H_0=1$, $H_1(y)=2y$, $H_n(-y)=(-1)^nH_n(y)$, and they satisfy

$$H_n'=2nH_{n-1},\qquad H_{n+1}=2yH_n-2nH_{n-1}\qquad(n\ge1);$$

moreover

$$g_n=\frac{H_ng_0}{\sqrt{2^nn!}};$$

(g) consequently

$$\sqrt2\,y\,g_n=\sqrt n\,g_{n-1}+\sqrt{n+1}\,g_{n+1},\qquad \sqrt2\,g_n'=\sqrt n\,g_{n-1}-\sqrt{n+1}\,g_{n+1}.$$

## Facts & Assumptions

**Given:** the space $L^2(\mathbb R,dy)$ with its inner product; the function $g_0(y)=\pi^{-1/4}e^{-y^2/2}$; the space $P$ of polynomial multiples of $g_0$; the operators $Y,\partial_y,a,a^\dagger$ and the vectors $g_n$.

[F1] $L^2$ is a complex Hilbert space for $\langle f,g\rangle=\int f\overline g$, with $\|f\|_2^2=\int|f|^2$; the pairing is well defined on a.e. classes, positive definite, and satisfies $|\langle f,g\rangle|\le\int|fg|\le\|f\|_2\|g\|_2$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F2] For $t>0$, the Lebesgue Gaussian transform at dimension $n=1$, frequency $\xi=0$ and parameter $t/\pi$ gives $\int_{\mathbb R}e^{-ty^2}dy=\sqrt{\pi/t}$; every polynomial times a positive real Gaussian is absolutely integrable ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]). In particular $\int e^{-y^2}dy=\sqrt\pi$ and $\int e^{-y^2/2}dy=\sqrt{2\pi}$.

[F3] For $t\ge0$ and $k\in\mathbb N$ one has $t^k\le2^kk!\,e^{t/2}$: by [[def-complex-exponential]] and [[lem-complex-exponential-series-converges-everywhere]] the exponential is the sum of the absolutely convergent series $\sum_j(t/2)^j/j!$ with nonnegative terms, so $e^{t/2}\ge(t/2)^k/k!$.

[F4] The real exponential is $C^\infty$ with $(\exp)'=\exp$ ([[thm-derivative-of-exponential]]); the chain rule ([[thm-chain-rule]]) and product rule ([[thm-algebra-of-derivatives]]) hold for real-valued functions. For complex-valued functions apply those rules separately to the real and imaginary parts, as in the componentwise convention of [[def-complex-lp-and-euclidean-test-function-conventions]]. Consequently $(e^{-y^2/2})'=-ye^{-y^2/2}$ and, for any complex polynomial $p$, $(p\,g_0)'=(p'-yp)g_0$ on $\mathbb R$.

[F5] For every real $x$, $e^x>0$ and $e^{-x}=1/e^x$ ([[cor-exponential-reciprocal-and-positivity]]); the real exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]). The complex exponential extends the real one and satisfies $e^{z+w}=e^ze^w$ for all $z,w\in\mathbb C$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F6] If $F:[a,b]\to\mathbb R$ is differentiable at every point of $[a,b]$ and $F'$ is integrable there, then $\int_a^bF'=F(b)-F(a)$ ([[thm-ftc-second-part]]); complex integration by parts on $\mathbb R$ is valid when both derivative products are in $L^1$ and the product vanishes at both ends ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]). For $\varphi,\psi\in P$ one has $\varphi(y)\overline{\psi(y)}\to0$ as $|y|\to\infty$, because its modulus is bounded by $C(1+y^{2k})e^{-y^2}$ for some $C>0$ and $k\in\mathbb N$; [F3] bounds this by $C(1+2^kk!)e^{-y^2/2}$, which tends to zero since $e^{y^2/2}\ge1+y^2/2$ by the same nonnegative series and [F5].

## Proof

1.1 [The Gaussian moments and polynomial classes] If $p g_0=qg_0$ as $L^2$ classes, $(p-q)g_0$ is a continuous function that vanishes almost everywhere, hence vanishes everywhere; since $g_0>0$, $p=q$. Thus the representative used to define $Y$ and $\partial_y$ is unique, so these operators are well defined on $P$. By [F2], $\|g_0\|^2=\pi^{-1/2}\int e^{-y^2}d\lambda=\pi^{-1/2}\sqrt\pi=1$, so $g_0\in L^2$ and $\|g_0\|=1$. For $k\in\mathbb N$ and $y\in\mathbb R$, $|y^kg_0(y)|^2=\pi^{-1/2}y^{2k}e^{-y^2}\le\pi^{-1/2}2^kk!\,e^{-y^2/2}$ by [F3]; hence $\|y^kg_0\|^2\le\pi^{-1/2}2^kk!\sqrt{2\pi}<\infty$ by [F2], so $y^kg_0\in L^2$. Every $pg_0$ with $\deg p=m$ is a finite linear combination of $y^0g_0,\dots,y^mg_0$, so $pg_0\in L^2$: $P\subseteq L^2$ is a linear subspace. [given, F1, F2, F3, F5, algebra]

1.2 [Invariance of $P$ and $ag_0=0$] For a complex polynomial $p=p_1+ip_2$ with real polynomials $p_1,p_2$, the real product and chain rules [F4] applied to $p_1g_0$ and $p_2g_0$ give $\partial_y(pg_0)=(p'-yp)g_0$; $Y(pg_0)=(yp)g_0$ has polynomial factor $yp$. Thus both $Y$ and $\partial_y$, hence $a=(Y+\partial_y)/\sqrt2$ and $a^\dagger=(Y-\partial_y)/\sqrt2$, map $P$ into $P$. Since $g_0'=-yg_0$ by [F4], $(Y+\partial_y)g_0=yg_0+g_0'=0$, i.e. $ag_0=0$. All members of $P$ are represented by componentwise $C^\infty$ functions by [F4]. [given, F4, F5, algebra]

1.3 [Adjoint pairing] Let $\varphi,\psi\in P$. They are componentwise $C^\infty$ by [F4], and $\varphi'\overline\psi$ and $\varphi\overline{\psi'}$ are polynomial multiples of $e^{-y^2}$, hence absolutely integrable by [F2]. Their product $\varphi\overline\psi$ tends to zero at both ends by [F6]. Apply the whole-line complex integration-by-parts identity in [F6] to $u=\varphi$ and $v=\overline\psi$ to obtain $\int_{\mathbb R}\varphi'\overline\psi=-\int_{\mathbb R}\varphi\overline{\psi'}$. Therefore $\langle a^\dagger\varphi,\psi\rangle=2^{-1/2}\int(y\varphi-\varphi')\overline\psi=2^{-1/2}\int\varphi\overline{y\psi+\psi'}=\langle\varphi,a\psi\rangle$, since $y$ is real and $\overline{\psi'}$ is the derivative of $\overline\psi$; the second identity follows by exchanging $\varphi$ and $\psi$ and conjugating. [given, F1, F2, F4, F5, F6, algebra]

1.4 [Rodrigues polynomials] Define $H_n(y):=(-1)^ne^{y^2}\frac{d^n}{dy^n}e^{-y^2}$; each $H_n$ is a polynomial because differentiating $e^{-y^2}$ produces $e^{-y^2}$ times a polynomial, and $H_0=1$, $H_1=2y$. Put $F_n:=e^{y^2}\frac{d^n}{dy^n}e^{-y^2}$, so $H_n=(-1)^nF_n$. By the product rule, $F_{n+1}=e^{y^2}\frac{d}{dy}\bigl(e^{-y^2}F_n\bigr)=-2yF_n+F_n'$, hence $H_{n+1}=2yH_n-H_n'$. We prove $H_n'=2nH_{n-1}$ for all $n\ge1$ by strong induction: for $n=1$ this is $H_1'=2=2H_0$, and $H_2=4y^2-2$ gives $H_2'=8y=4H_1$. For $n\ge2$, if it holds for all $1\le j\le n$, then differentiating the displayed relation at $n$ gives $H_{n+1}'=2H_n+2yH_n'-H_n''$, while the induction hypothesis gives $H_n'=2nH_{n-1}$ and $H_n''=2nH_{n-1}'=4n(n-1)H_{n-2}$, and the same relation at $n-1$ reads $H_n=2yH_{n-1}-H_{n-1}'$, so $2yH_{n-1}=H_n+2(n-1)H_{n-2}$; substituting, $H_{n+1}'=2H_n+2n\bigl(H_n+2(n-1)H_{n-2}\bigr)-4n(n-1)H_{n-2}=2(n+1)H_n$, which is the claim for $n+1$. Hence $H_n'=2nH_{n-1}$ for all $n\ge1$, and the displayed relation becomes the three-term recurrence $H_{n+1}=2yH_n-2nH_{n-1}$ for $n\ge1$. Induction on this recurrence gives that $H_n$ has degree $n$ with leading coefficient $2^n$ (the term $2yH_n$ contributes $2\cdot2^n=2^{n+1}$ to $y^{n+1}$ and $-2nH_{n-1}$ only degree $n-1$) and that $H_n(-y)=(-1)^nH_n(y)$, true for $n=0,1$ and inherited. [given, F4, F5, algebra]

2.1 [Commutator] On any $C^\infty$ function $\varphi$, $2(aa^\dagger-a^\dagger a)=(Y+\partial_y)(Y-\partial_y)-(Y-\partial_y)(Y+\partial_y)$, and expanding with the product rule [F4] gives $(Y+\partial_y)(Y-\partial_y)=Y^2-Y\partial_y+\partial_yY-\partial_y^2$ and $(Y-\partial_y)(Y+\partial_y)=Y^2+Y\partial_y-\partial_yY-\partial_y^2$; subtracting gives $2(\partial_yY-Y\partial_y)=2I$ because $\partial_y(Y\varphi)-Y(\partial_y\varphi)=\varphi$. Hence $[a,a^\dagger]=I$ on $P$ by step 1.2. [step 1.2, F4, algebra]

2.2 [Identification of $g_n$] We prove $g_n=H_ng_0/\sqrt{2^nn!}$ by induction on $n$. For $n=0$ this is $g_0=H_0g_0$. Assume it holds for $n$; by step 1.2 and [F4], $(Y-\partial_y)(H_ng_0)=(2yH_n-H_n')g_0=H_{n+1}g_0$ by step 1.4, so $g_{n+1}=a^\dagger g_n/\sqrt{n+1}=(Y-\partial_y)H_ng_0/(\sqrt2\sqrt{n+1}\sqrt{2^nn!})=H_{n+1}g_0/\sqrt{2^{n+1}(n+1)!}$, which completes the induction. [step 1.2, step 1.4, F4, algebra]

3.1 [Ladder relations] From $[a,a^\dagger]=I$ on $P$ we prove $[a,(a^\dagger)^n]=n(a^\dagger)^{n-1}$ on $P$ for every $n\ge1$: for $n=1$ this is step 2.1, and if it holds for $n$ then $[a,(a^\dagger)^{n+1}]=[a,(a^\dagger)^n]a^\dagger+(a^\dagger)^n[a,a^\dagger]=n(a^\dagger)^{n-1}a^\dagger+(a^\dagger)^n=(n+1)(a^\dagger)^n$, all evaluated on $P$, which $(a^\dagger)^n$ and $a$ preserve by step 1.2. Since $ag_0=0$, for $n\ge1$ we get $ag_n=[a,(a^\dagger)^n]g_0/\sqrt{n!}=n(a^\dagger)^{n-1}g_0/\sqrt{n!}=\sqrt n\,g_{n-1}$, while $ag_0=0$; by definition $a^\dagger g_n=(a^\dagger)^{n+1}g_0/\sqrt{n!}=\sqrt{n+1}\,g_{n+1}$ for every $n$, hence $a^\dagger ag_n=\sqrt n\,a^\dagger g_{n-1}=ng_n$ and, using $aa^\dagger=a^\dagger a+I$ from step 2.1, $aa^\dagger g_n=(n+1)g_n$. [step 2.1, step 1.2, algebra]

4.1 [The $y$ and $\partial_y$ actions] In the formulas containing $g_{n-1}$ at $n=0$, set $g_{-1}:=0$; this is the zero vector, so both formulas at $n=0$ are exactly the two ladder identities with $ag_0=0$. Since $Y=(a+a^\dagger)/\sqrt2$ and $\partial_y=(a-a^\dagger)/\sqrt2$ on $P$ by the definitions, applying step 3.1 gives $\sqrt2\,yg_n=ag_n+a^\dagger g_n=\sqrt n\,g_{n-1}+\sqrt{n+1}\,g_{n+1}$ and $\sqrt2\,g_n'=ag_n-a^\dagger g_n=\sqrt n\,g_{n-1}-\sqrt{n+1}\,g_{n+1}$. All identities are in $L^2$, where equalities mean equality of classes, and the underlying functions agree pointwise because both sides are represented by continuous functions; the polynomial identities of step 1.4 are pointwise identities of polynomials. [step 3.1, step 1.4, step 2.2] ∎
