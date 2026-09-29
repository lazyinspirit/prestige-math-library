---
id: thm-poisson-jensen-formula-meromorphic-function
kind: theorem
title: "Poisson–Jensen formula for a meromorphic function on a disc"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-meromorphic-function-complex-domain, thm-isolated-zeros-holomorphic-function, thm-poles-meromorphic-function-are-discrete-and-countable, thm-zero-order-factorization-holomorphic-function, thm-pole-characterizations, thm-poisson-representation-for-disc-harmonic-functions, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-holomorphic-functions-are-real-analytic-and-smooth]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §1"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §§1–2"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

Let $f$ be a meromorphic function on a neighbourhood of the closed disc
$|z|\le R$, not identically zero, and suppose first that it has no zero or pole
on $|z|=R$. For $|z|<R$ away from the zeros and poles of $f$,

$$ \log|f(z)|=\frac1{2\pi}\int_0^{2\pi}\frac{R^2-|z|^2}{|Re^{it}-z|^2}\log|f(Re^{it})|\,dt-\sum_{|b|<R,\ f(b)=0}m_bG_R(z,b)+\sum_{|p|<R,\ p\text{ a pole}}\nu_pG_R(z,p). $$

where each distinct zero $b$ and pole $p$ is included once, $m_b$ is the
zero multiplicity, $\nu_p$ is the pole order, and

$$G_R(z,a)=\log\left|\frac{R^2-\overline a z}{R(z-a)}\right|.$$

At a radius meeting a zero or pole on its boundary, the identity means the
limit through regular radii increasing to that radius; a boundary divisor has
Green contribution zero in that limit.

## Facts & Assumptions

**Given:** A meromorphic $f$ on a neighbourhood of $|z|\le R$, with no boundary divisor for the regular-radius case.

[F1] A nonzero holomorphic function has only isolated zeros ([[thm-isolated-zeros-holomorphic-function]]).

[F2] Every pole has a neighbourhood containing no other pole ([[thm-poles-meromorphic-function-are-discrete-and-countable]]).

[F3] A zero of finite order factors locally as $(z-a)^m g(z)$ with $g(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F4] A pole of order $m$ has a reciprocal with a zero of order $m$ ([[thm-pole-characterizations]]).

[F5] A harmonic function on a neighbourhood of a closed disc is given inside by the Poisson integral of its boundary values ([[thm-poisson-representation-for-disc-harmonic-functions]]).

[F6] The real and imaginary parts of a holomorphic function satisfy the Cauchy–Riemann equations ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F7] A holomorphic function is smooth ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

## Proof

**Proof technique:** factor each divisor with a disc Blaschke factor, then apply Poisson representation to the zero-free remainder.

1.1 On a regular closed disc there are finitely many zeros and poles: [F1] and [F2] make each divisor discrete, while a divisor cannot accumulate at a pole because [F4] makes $1/f$ holomorphic with a zero there. List the zeros $b$ with multiplicities $m_b$ and poles $p$ with orders $\nu_p$. [F1, F2, F4, given]

1.2 For every $|a|<R$, set $B_a(z)=R(z-a)/(R^2-\overline a z)$. Its denominator is nonzero on a neighbourhood of the closed disc; it has one simple zero at $a$, and direct modulus calculation gives $|B_a(Re^{it})|=1$ and $\log|B_a(z)|=-G_R(z,a)$. [algebra]

1.3 Form

$$
g(z)=f(z)\frac{\prod_p B_p(z)^{\nu_p}}{\prod_b B_b(z)^{m_b}}.
$$

By [F3], each zero factor cancels locally against the corresponding denominator factor; by [F4], each pole is cancelled by the numerator factor. Thus $g$ is holomorphic and nowhere zero on a neighbourhood of the closed disc, and $|g|=|f|$ on the boundary. [F3, F4, step 1.1, step 1.2, given]

2.1 To see that $u=\log|g|$ is harmonic, near any point $w$ shrink a disc until $|g(z)/g(w)-1|<1$ and use the convergent power series for $\log(1+\xi)$ to obtain a local holomorphic logarithm of $g$. Its real part is $u$ up to the constant $\log|g(w)|$; [F6] and [F7] make that real part $C^2$ with zero Laplacian. This is local at every point, so $u$ is harmonic on a neighbourhood of the closed disc. [F6, F7, step 1.3]

3.1 Apply [F5] to $u$. On the boundary $u=\log|f|$, so its Poisson integral is exactly the boundary term in the statement. On the interior, solve the defining equation for $\log|f|$ using step 1.3 and $\log|B_a|=-G_R(z,a)$ from step 1.2. Each zero contributes $-m_bG_R(z,b)$ and each pole contributes $+\nu_pG_R(z,p)$, proving the formula on regular radii. [F5, step 1.2, step 1.3, step 2.1, algebra]

4.1 If $b$ is a zero or pole on $|z|=R$, locally $f(\zeta)=(\zeta-b)^k h(\zeta)$ with integer $k$ and nonvanishing holomorphic $h$ (use [F3] for zeros and [F4] for poles). Therefore the boundary logarithm is a multiple of $\log|re^{it}-b|$ plus a continuous term; these logarithms converge in angular $L^1$ as $r\uparrow R$. For each fixed interior $z$, the Poisson kernels converge boundedly, and $G_r(z,b)\to0$ for $|b|=R$. Passing to the limit in step 3.1 proves the stated boundary-radius convention. [F3, F4, step 3.1, algebra] ∎
