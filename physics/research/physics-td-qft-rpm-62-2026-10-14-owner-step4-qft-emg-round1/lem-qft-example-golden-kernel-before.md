---
id: lem-qft-example-golden-kernel
kind: lemma
domain: mathematics
title: Golden-rule kernel and its quantified approximate-identity limit
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-qft-example-data
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - thm-l-one-l-two-agreement-of-fourier-transform
  - thm-plancherel
dependency_roles:
  def-qft-example-data: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  thm-l-one-l-two-agreement-of-fourier-transform: mathematical-premise
  thm-plancherel: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §3.6.1 “Fermi’s Golden Rule”
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
    - title: M. Srednicki, Quantum Field Theory, author-hosted prepublication draft, §§4 and 7
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
    - title: R. Fitzpatrick, Quantum Mechanics, Chapter 13, finite-time perturbation theory
      url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
---

## Statement

Assume the Countable Choice axiom $\mathrm{AC}_\omega$ ([[def-countable-choice]]), $\hbar>0$ in joule-seconds, $T>0$ in seconds, an energy $E_0\in\mathbb R$ in joules, a dimensionless $\lambda\in\mathbb R$, and a bounded nonnegative Borel function $w:\mathbb R\to[0,\infty)$ continuous at $E_0$. Here $w$ is a specified transition-density weight in joules; no state density or matrix element is inferred from the name.

For angular frequency $\omega\in\mathbb R$ in $\mathrm{s}^{-1}$, define
$$K_T(\omega)=\frac1T\left|\int_0^T e^{i\omega t}\,dt\right|^2 =\begin{cases}\dfrac{4\sin^2(\omega T/2)}{T\omega^2},&\omega\ne0,\\[4pt]T,&\omega=0.\end{cases}$$
Then $K_T\ge0$, $\int_{\mathbb R}K_T(\omega)\,d\omega=2\pi$, and for every $r>0$,
$$\int_{|\omega|>r}\frac{K_T(\omega)}{2\pi}\,d\omega\le\frac{4}{\pi Tr}.$$
For bounded Borel $f:\mathbb R\to\mathbb C$ continuous at $0$, define
$$\omega_f(r)=\sup_{|\omega|\le r}|f(\omega)-f(0)|.$$
Then
$$\left|\int_{\mathbb R}\frac{K_T(\omega)}{2\pi}f(\omega)\,d\omega-f(0)\right| \le\omega_f(r)+\frac{8\|f\|_\infty}{\pi Tr},$$
so the left-hand integral tends to $f(0)$ as $T\to\infty$.

Define the finite-time second-order coefficient quantity
$$P_2(T)=\frac{\lambda^2}{\hbar^2} \int_{\mathbb R}w(E)\left|\int_0^T e^{i(E-E_0)t/\hbar}\,dt\right|^2dE.$$
It is finite and
$$\lim_{T\to\infty}\frac{P_2(T)}{T}=\frac{2\pi\lambda^2}{\hbar}w(E_0).$$
This is a theorem about the stated integral coefficient, not an exact long-time transition probability, an exponential decay law, or a product of distributions such as $\delta^2$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $T>0$, $\hbar>0$, $\lambda\in\mathbb R$, $E_0\in\mathbb R$, and the bounded nonnegative weight $w$ continuous at $E_0$.

[F1] [[def-countable-choice]], [[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]], [[thm-l-one-l-two-agreement-of-fourier-transform]]: $\mathrm{AC}_\omega$ is the stated countable-choice principle; the one-dimensional Fourier transform is $\widehat g(\nu)=\int g(t)e^{-2\pi it\nu}dt$; under that axiom Plancherel preserves the $L^2$ norm, and for $g\in L^1\cap L^2$ the integral transform represents the $L^2$ transform almost everywhere.

[F2] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $|e^{ix}|=1$ and $e^{ix}-1=2i e^{ix/2}\sin(x/2)$ for real $x$.

[F3] [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]: under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism between open subsets of $\mathbb R^m$ changes nonnegative Borel Lebesgue integrals by its absolute Jacobian determinant.

[F4] [[def-qft-example-data]]: $E,\hbar$ use SI joules and joule-seconds, angular frequency is in $\mathrm{s}^{-1}$, and $\lambda$ is dimensionless.

## Proof

1.1 For $\omega\ne0$, integration of the exponential gives $\int_0^Te^{i\omega t}dt=(e^{i\omega T}-1)/(i\omega)$. Fact [F2] gives its squared modulus $4\sin^2(\omega T/2)/\omega^2$. At $\omega=0$ the integral is $T$, so the continuation is $K_T(0)=T$. For any integrable complex $q$, put $I=\int q$. If $I=0$, $|I|\le\int|q|$ is immediate; otherwise $\alpha=\overline I/|I|$ gives $|I|=\int\operatorname{Re}(\alpha q)\le\int|q|$. Applied to $q(t)=e^{i\omega t}$ on $[0,T]$, with $|q|=1$ by [F2], this gives $K_T\le T$. Also $K_T\le4/(T\omega^2)$ for $\omega\ne0$. These bounds show $K_T$ is integrable and establish the tail estimate by integrating $\omega^{-2}$ on both rays. [given, F2, algebra]

1.2 Let $g=1_{[0,T]}$. It belongs to $L^1(\mathbb R)\cap L^2(\mathbb R)$ and $\|g\|_2^2=T$. For $\nu=-\omega/(2\pi)$, its integral transform is $\widehat g(\nu)=\int_0^T e^{i\omega t}dt$. By [F1], this integral represents the $L^2$ transform almost everywhere and Plancherel gives $\int_{\mathbb R}|\widehat g(\nu)|^2d\nu=T$. The linear substitution $\omega=-2\pi\nu$ [F3] gives $$\int_{\mathbb R}K_T(\omega)d\omega =\frac{2\pi}{T}\int_{\mathbb R}|\widehat g(\nu)|^2d\nu=2\pi.$$ The affine substitution is the one-dimensional case of [F3]. [given, F1, F3]

2.1 Since $\int K_T/(2\pi)=1$, subtracting $f(0)$ writes the error as $\int (K_T/(2\pi))(f-f(0))$. On $|\omega|\le r$ the absolute difference is at most $\omega_f(r)$ and the kernel mass there is at most one. On $|\omega|>r$ it is at most $2\|f\|_\infty$, and the mass is at most $4/(\pi Tr)$ by step 1.1. Adding these bounds proves the estimate. [given, step 1.1, step 1.2, algebra]

3.1 Given $\varepsilon>0$, continuity at zero gives $r>0$ with $\omega_f(r)<\varepsilon/2$. For this fixed $r$, choose $T$ large enough that $8\|f\|_\infty/(\pi Tr)<\varepsilon/2$. Step 2.1 then gives error below $\varepsilon$. Thus the approximate-identity limit is $f(0)$. [given, step 2.1]

4.1 The bounds in step 1.1 make $K_T(\omega)w(E_0+\hbar\omega)$ integrable because $w$ is bounded. In the definition of $P_2$, substitute $E=E_0+\hbar\omega$; this is an affine $C^1$ diffeomorphism with Jacobian $\hbar>0$, so [F3] applies to the nonnegative integrand. Since $$\left|\int_0^T e^{i\omega t}dt\right|^2=T K_T(\omega),$$ we obtain $$\frac{P_2(T)}{T}=\frac{\lambda^2}{\hbar}\int_{\mathbb R}K_T(\omega)w(E_0+\hbar\omega)\,d\omega =\frac{2\pi\lambda^2}{\hbar}\int_{\mathbb R}\frac{K_T(\omega)}{2\pi}f(\omega)\,d\omega,$$ where $f(\omega)=w(E_0+\hbar\omega)$ is bounded and continuous at zero. Step 3.1 gives the claimed limit. The units are $\mathrm{s}^{-1}$ because $w(E_0)/\hbar$ has units $\mathrm J/(\mathrm{J\,s})$. No exact-dynamics or probability claim follows from this coefficient calculation. [given, F3, F4, step 1.1, step 3.1, algebra] ∎
