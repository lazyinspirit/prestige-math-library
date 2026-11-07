---
id: thm-voronoi-divisor-weighted-k0-y0-summation-formula
kind: theorem
title: "Finite-interval weighted divisor Voronoï formula with the K₀/Y₀ kernel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps: [thm-voronoi-divisor-summation-formula, lem-voronoi-improper-kernel-bessel-evaluation, def-voronoi-bessel-k-y-functions, lem-voronoi-bessel-k-y-series-converge, lem-voronoi-bessel-k-y-differential-recurrences, thm-integration-by-parts]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, formulas (3.2)–(3.3), printed p. 47"
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§1, formula (1.6), test-function and endpoint convention"
verification:
  precheck: pending
---

## Statement

Let $0<a<b<\infty$, let $f:[a,b]\to\mathbb C$ be twice continuously differentiable, and let $d(n)$ count the positive divisors of each positive integer $n$. Define
$$\delta_0(u):=4K_0(4\pi\sqrt u)-2\pi Y_0(4\pi\sqrt u)\qquad(u>0),$$
where, for $z>0$,
$$K_0(z):=-\bigl(\log(z/2)+\gamma\bigr)I_0(z)+\sum_{m=1}^{\infty}\frac{H_m(z^2/4)^m}{(m!)^2},\qquad Y_0(z):=\frac2\pi\bigl(\log(z/2)+\gamma\bigr)J_0(z)+\frac2\pi\sum_{m=1}^{\infty}\frac{(-1)^{m+1}H_m(z^2/4)^m}{(m!)^2},$$
with $H_m=\sum_{j=1}^m j^{-1}$, $J_0(z)=\sum_{m=0}^{\infty}(-1)^m(z^2/4)^m/(m!)^2$, and $I_0(z)=\sum_{m=0}^{\infty}(z^2/4)^m/(m!)^2$, where $\gamma$ is the Euler–Mascheroni constant and $\log$ is the natural logarithm. Let
$$\sum_{a\le n\le b}'d(n)f(n)$$
denote the finite sum over integers in $[a,b]$, with the term at $a$ counted with weight $1/2$ when $a$ is an integer and the term at $b$ counted with weight $1/2$ when $b$ is an integer; all interior terms have weight $1$. Then
$$\sum_{a\le n\le b}'d(n)f(n) =\int_a^b f(x)(\log x+2\gamma)\,dx +\lim_{M\to\infty}\sum_{m=1}^{M}d(m)\int_a^b f(x)\delta_0(mx)\,dx.$$
The kernel series is interpreted by these initial-segment limits, with the endpoint half-weight convention as stated.

## Statement references

[Ivić, Chapter 3, §1, formulas (3.2)–(3.3)](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

[Miller and Schmid, §1, formula (1.6)](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** $0<a<b$ and $f\in C^2([a,b];\mathbb C)$. Integrals on this finite interval are componentwise Riemann integrals.

[F1] [[thm-voronoi-divisor-summation-formula]] gives $A(x):=\sum_{n<x}d(n)+d(x)/2-x(\log x+2\gamma-1)-1/4=(2/\pi)\sum_{m\ge1}d(m)F(mx,0)/m$, with pointwise convergence, partial sums uniformly bounded on $[a,b]$, and uniform convergence on compact sets away from integers.

[F2] [[lem-voronoi-improper-kernel-bessel-evaluation]] gives $F(t,0)=-\sqrt t[K_1(4\pi\sqrt t)+(\pi/2)Y_1(4\pi\sqrt t)]$ for $t>0$.

[F3] [[def-voronoi-bessel-k-y-functions]] and [[lem-voronoi-bessel-k-y-series-converge]] give the smooth functions with the displayed normalization; [[lem-voronoi-bessel-k-y-differential-recurrences]] gives $(zK_1)'=-zK_0$ and $(zY_1)'=zY_0$.

[F4] [[thm-integration-by-parts]] applies on finite intervals to continuously differentiable real functions. Applying it to four real component pairs gives the complex identity.

## Proof

**Given:** The interval and test function in the statement.

1.1 Define the finite smooth sums $P_M(x)=-\sum_{m=1}^M d(m)\sqrt{x/m}[Y_1(4\pi\sqrt{mx})+(2/\pi)K_1(4\pi\sqrt{mx})]$. By [F1]–[F2], $P_M(x)\to A(x)$ pointwise, the $P_M$ are uniformly bounded on $[a,b]$, and they converge uniformly on compact sets avoiding integers. Differentiating this finite sum by [F3] gives $P_M'(x)=\sum_{m=1}^M d(m)[4K_0(4\pi\sqrt{mx})-2\pi Y_0(4\pi\sqrt{mx})]=\sum_{m=1}^M d(m)\delta_0(mx)$. [F1, F2, F3, construct, algebra]

2.1 By [F4], $\int_a^b fP_M'=f(b)P_M(b)-f(a)P_M(a)-\int_a^b f'P_M$. The last integral tends to $\int_a^b f'A$: delete intervals of total length less than $\eta$ around the finitely many integers in $[a,b]$. On the remaining compact set convergence is uniform; on the deleted intervals the integral error is bounded by $C\|f'\|_\infty\eta$, using the common bound on $P_M$ and the bound on the piecewise smooth function $A$. All these integrands are Riemann integrable. Taking $M\to\infty$ and then $\eta\downarrow0$ proves $\lim_M\int_a^b fP_M'=f(b)A(b)-f(a)A(a)-\int_a^b f'A$. This uses no differentiation of an infinite series. [F1, F4, step 1.1, choose, algebra]

3.1 Put $D^*(x)=\sum_{n<x}d(n)+d(x)/2$ and $M_0(x)=x(\log x+2\gamma-1)+1/4$, so $A=D^*-M_0$ and $M_0'=\log x+2\gamma$. Substitute this into step 2.1 and integrate the smooth $M_0$ terms by [F4]. The result is $f(b)D^*(b)-f(a)D^*(a)-\int_a^b f'D^*-\int_a^b f(x)(\log x+2\gamma)\,dx$. [F4, step 2.1, algebra]

4.1 Only finitely many atoms of $D^*$ can contribute on $[a,b]$. For an atom at an integer $n$, the endpoint expression minus its $f'$ integral contributes $f(n)$ when $a<n<b$, $f(a)/2$ when $n=a$, $f(b)/2$ when $n=b$, and zero otherwise. For example an interior atom contributes $f(b)-\int_n^b f'=f(n)$, an atom at $a$ contributes $f(b)-f(a)/2-\int_a^b f'=f(a)/2$, and an atom at $b$ contributes only $f(b)/2$. Atoms below $a$ cancel by the same finite-interval identity; atoms above $b$ contribute zero. Multiplying by $d(n)$ and adding gives exactly the primed finite sum in the statement. Together with step 1.1's expression for $P_M'$ and step 3.1 this proves the required initial-segment limit and its exact endpoint weights. [F4, step 1.1, step 3.1, algebra] ∎
