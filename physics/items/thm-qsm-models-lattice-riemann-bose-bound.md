---
id: thm-qsm-models-lattice-riemann-bose-bound
kind: theorem
title: "Lattice Gaussian Riemann limits and the singular Bose endpoint"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-nonnegative-lebesgue-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - lem-csm-examples-gamma-gaussian-tools
  - def-countable-choice
dependency_roles:
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.5–3.6, thermodynamic momentum integrals and Bose/Fermi occupations"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lectures 23–25, quantum gases and Bose condensation"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/85cd383f3ca4573c3d578db435257c5a_MIT8_333F13_Lec25.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).
Let $d\ge1$ be an integer, $\alpha,\beta>0$, and $h>0$. Define
$F_B(p)=(e^{\beta\alpha|p|^2}-1)^{-1}$ for $p\ne0$ and
$F_F(p)=(e^{\beta(\alpha|p|^2-\mu)}+1)^{-1}$ for finite $\mu\in\mathbb R$.
For each $\mu<0$, both $F_B(\cdot;\mu)=(e^{\beta(\alpha|p|^2-\mu)}-1)^{-1}$ and $F_F$ are continuous, and for every fixed integer $s\ge0$ their polynomially weighted lattice sums converge with
$$h^d\sum_{k\in\mathbb Z^d}|hk|^sF(hk)\longrightarrow\int_{\mathbb R^d}|p|^sF(p)\,dp\quad(h\downarrow0).$$
The convergence is uniform when $(\beta,\mu)$ ranges over a compact subset of $\{\beta>0,\mu<0\}$ for bosons or $\{\beta>0,\mu\in\mathbb R\}$ for fermions. At the Bose endpoint $\mu=0$, define $F_B(p;0)=(e^{\beta\alpha|p|^2}-1)^{-1}$ for $p\ne0$. For every fixed $\beta,\alpha>0$ and $d\ge1$, monotone convergence gives $\int F_B(p;\mu)\,dp\uparrow\int F_B(p;0)\,dp$ as $\mu\uparrow0$, where the extended endpoint value is
$$\int_{\mathbb R^d}F_B(p;0)\,dp=(\pi/(\beta\alpha))^{d/2}\sum_{\ell=1}^\infty\ell^{-d/2}\in(0,+\infty].$$
It is finite exactly when $d>2$. In that case the missing-origin lattice sums satisfy
$$h^d\sum_{k\in\mathbb Z^d\setminus\{0\}}F_B(hk;0)\longrightarrow\int_{\mathbb R^d}F_B(p;0)\,dp\qquad(h\downarrow0).$$
No value is assigned to $F_B(0;0)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the Lebesgue integral and product-space conventions of the linked measure definitions; $d\ge1$, $\alpha,\beta>0$.

[F1] [[lem-csm-examples-gamma-gaussian-tools]], Statement and proof: the Gaussian integral is $\int_{\mathbb R}e^{-a x^2}dx=\sqrt{\pi/a}$ for $a>0$, and its finite products give the $d$ dimensional Gaussian value. Its full parameter-derivative clause is separately proved by differentiating the independently evaluated moments; this theorem uses only its Gaussian evaluation clause, not parameter differentiation.

[F2] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] and [[def-nonnegative-lebesgue-integral]]: boxes have their usual volume and nonnegative integrals are defined by increasing simple-function approximation.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions may be integrated in either order, including countable sums against Lebesgue measure.

[F4] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative measurable functions have integrals converging to the integral of their pointwise limit.

[F5] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: an axis-parallel box has Lebesgue measure equal to the product of its side lengths.

[A1] $h$ is the mesh size; $\alpha$ and $\beta$ are fixed positive real parameters. In later physical uses $\alpha$ has units energy·length$^2$, $p$ has units length$^{-1}$, and $\beta$ has units energy$^{-1}$.

## Proof



1.1 For $\mu<0$, the Bose denominator is bounded below by $e^{\beta(-\mu)}-1>0$ on compact sets; for finite $\mu$, the Fermi denominator is at least $1$. At large $|p|$, each occupation is bounded by $C e^{-c|p|^2}$ for positive constants $C,c$ depending on a compact parameter neighborhood. A polynomial factor $|p|^s$ is absorbed by a slower Gaussian because $r^s e^{-c r^2/2}$ is bounded on $[0,\infty)$. Thus the continuum integrands and their polynomially weighted tails are integrable by comparison with products of one dimensional Gaussians and Tonelli [F3,F1]. For each fixed $h>0$, the max-norm shell $|k|_\infty=n$ has at most $C_dn^{d-1}$ points, and its summand is bounded by a fixed polynomial in $n$ times $e^{-c h^2n^2}$; the ratio of successive polynomial-Gaussian terms is eventually below a constant less than one, proving every lattice sum is finite. [given, F1, F3, algebra]

1.2 At $\mu=0$ and $p\ne0$, $e^x-1\ge x$ gives $F_B(p)\le(\beta\alpha|p|^2)^{-1}$. If $|k|_\infty=n$, the number of integer lattice points in that shell is $(2n+1)^d-(2n-1)^d\le C_dn^{d-1}$, while $|k|\ge n$. Hence for $0<h\le\delta$, $h^d\sum_{0<|hk|\le\delta}F_B(hk)\le C h^{d-2}\sum_{n\le\delta/h}n^{d-3}\le C'\delta^{d-2}$ when $d>2$; the last estimate follows by comparison on each unit interval with the integral of $x^{d-3}$ (and for $d=3$ the sum is bounded by a constant times $\delta/h$). The continuum small-ball integral has the same bound by decomposing into dyadic annuli, each with volume at most a constant times its radius to power $d$. [given, F2, F5, algebra]

2.1 On a fixed compact cube, uniform continuity of $|p|^sF(p)$ implies that replacing its value on each mesh cube by its value at the lattice corner changes the integral by at most the cube volume times the common modulus of continuity; summing finitely many cubes makes this error tend to zero. The measure of each mesh cube is $h^d$ by [F5]. This proves convergence on compact cubes. [step 1.1, F5, algebra]

3.1 To control tails uniformly for $0<h\le1$, let $Q_{k,h}=hk+[-h/2,h/2]^d$. For $p\in Q_{k,h}$, $|hk|^2\ge |p|^2/2-dh^2/4$. The Gaussian bound from step 1.1 therefore bounds each weighted lattice summand times $h^d$ by a fixed constant times the integral of a slower Gaussian over $Q_{k,h}$; the polynomial weight is absorbed by reducing its exponent once more. Cubes whose centers satisfy $|hk|>R$ lie outside the ball of radius $R-\sqrt d/2$. The integral of the slower Gaussian on that exterior tends to zero as $R\to\infty$, by [F1,F3]. Compact convergence from step 2.1 and this uniform tail bound prove the stated full-space limit and finiteness of every lattice sum. [step 1.1, step 2.1, F1, F3, algebra]

4.1 Outside any fixed ball around zero, $F_B$ is continuous and has Gaussian tails, so the compact-annulus and tail argument in steps 2.1 and 3.1 applies. Split both the sum and integral into $0<|p|\le\delta$, $\delta<|p|\le R$, and $|p|>R$. First take $h\downarrow0$ on the annulus, then $R\to\infty$ using Gaussian tails, and finally $\delta\downarrow0$ using step 1.2. This proves convergence of the missing-origin Bose sums without assigning an origin value. [step 2.1, step 3.1, step 1.2, algebra]

5.1 For $p\ne0$, the positive geometric series gives $F_B(p;0)=\sum_{\ell\ge1}e^{-\ell\beta\alpha|p|^2}$. Its partial sums increase pointwise, so [F4] and Tonelli [F3] give the equality as extended nonnegative integrals $\int F_B=\sum_{\ell\ge1}\int e^{-\ell\beta\alpha|p|^2}dp$. The product Gaussian integral [F1] evaluates each term as $(\pi/(\ell\beta\alpha))^{d/2}$. The resulting positive series converges exactly when $d/2>1$, by comparison of $\sum\ell^{-d/2}$ with $\int_1^\infty x^{-d/2}dx$, and diverges otherwise. For $\mu<0$, $F_B(p;\mu)$ increases pointwise to $F_B(p;0)$ as $\mu\uparrow0$, so [F4] also gives convergence of the corresponding integrals to this endpoint value. This proves the extended endpoint formula, its divergence for $d\le2$, and the integral limit used by the Bose condensation theorem. [F1, F3, F4, algebra] ∎
## Remarks

The in-run supplier [[lem-csm-examples-gamma-gaussian-tools]] is a batch-34 draft. Its current complete argument proves the Gaussian values used here and its full moment-derivative clause; the latter follows from evaluated moments and the Gamma recurrence, without an improper-integral differentiation interchange or a research M17 premise. This theorem uses the Gaussian evaluation and finite-product integrability only. The singular-origin and uniform-tail arguments are supplied locally above. Ordinary native review remains required; this supplier compatibility check grants no readiness.
