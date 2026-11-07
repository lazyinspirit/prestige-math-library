---
id: lem-primitive-dirichlet-l-logarithmic-derivative-contour-bounds
kind: lemma
title: "Local and contour bounds for logarithmic derivatives of primitive Dirichlet L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-completed-primitive-dirichlet-l-has-order-at-most-one
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-hadamard-factorization-for-finite-order-entire-functions
  - thm-zero-exponent-is-bounded-by-entire-order
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - thm-dirichlet-l-euler-product
  - thm-dirichlet-l-nonzero-at-one
  - thm-dirichlet-l-nonvanishing-line-one
  - thm-gamma-weierstrass-product
  - thm-gamma-meromorphic-continuation
  - lem-gamma-functional-equation-meromorphic-extension
  - thm-stirling-formula-gamma
  - thm-twisted-poisson-summation
  - lem-fourier-transform-of-a-gaussian
  - thm-identity-theorem-holomorphic-functions
  - thm-zero-order-factorization-holomorphic-function
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory I, Chapter 12"
      url: "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/16.0_pp_397_418_Explicit_formulae.pdf"
      locator: "Printed pp. 397–405, Lemmas 12.1, 12.4, 12.6–12.9; the local formula here explicitly excludes trivial-zero poles."
---

## Statement

Let $\chi$ be primitive modulo $q\ge1$, of parity $a$, and put $\tau=|t|+2$. All zeros $\rho=\beta+i\gamma$ below are the nontrivial zeros, counted with multiplicity. Uniformly for $-1\le\sigma\le2$, $|t|\ge2$, and $s=\sigma+it$ not a zero,
$$\frac{L'}{L}(s,\chi)=\sum_{|\gamma-t|\le1}\frac1{s-\rho}+O(\log(q\tau)).$$
For fixed $\epsilon>0$, uniformly on $\Re s\le-1$ at distance at least $\epsilon$ from every trivial zero, one has
$$\frac{L'}{L}(s,\chi)=O_\epsilon(\log(q(|s|+2))).$$
Consequently, if $T\ge2$ and $||\gamma|-T|\ge\eta/\log(q(T+2))$ for all nontrivial zeros, then
$$\max_{-1\le\sigma\le2}\left|\frac{L'}{L}(\sigma\pm iT,\chi)\right|\ll_\eta\log^2(q(T+2)).$$
These assertions include $q=1$ without a choice axiom. For $q>1$ the trivial zeros are the simple zeros $-a-2m$ for $m\ge0$; for $q=1$ they are the simple negative even integers. Every other zero lies in $0<\Re s<1$.

## Facts & Assumptions

**Given:** The primitive character, parity and parameters in the Statement.

[F1] For $q>1$ the completion is entire of order one ([[lem-completed-primitive-dirichlet-l-has-order-at-most-one]]). Primitive completions, including the meromorphic conductor-one completion, have the stated normalization and functional equation ([[thm-primitive-dirichlet-l-analytic-continuation]], [[thm-primitive-dirichlet-l-functional-equation]]).

[F2] For every $q\ge1$, right-half zeros in $|\gamma-u|\le1$ number $O(\log(q(|u|+3)))$ ([[lem-primitive-dirichlet-l-zero-count-in-unit-window]]).

[F3] The genus-one Hadamard product applies to a nonzero entire function of order one; its zero sequence satisfies $\sum|\rho|^{-2}<\infty$ ([[thm-hadamard-factorization-for-finite-order-entire-functions]], [[thm-zero-exponent-is-bounded-by-entire-order]]).

[F4] The Euler product and its logarithm converge absolutely in $\Re s>1$ ([[thm-dirichlet-l-euler-product]]). Nonprincipal characters have no zero at $1$ or elsewhere on $\Re s=1$ ([[thm-dirichlet-l-nonzero-at-one]], [[thm-dirichlet-l-nonvanishing-line-one]]).

[F5] Gamma has its locally uniformly convergent reciprocal product, simple poles at the nonpositive integers, and the meromorphic recurrence ([[thm-gamma-weierstrass-product]], [[thm-gamma-meromorphic-continuation]], [[lem-gamma-functional-equation-meromorphic-extension]]). Stirling holds on closed sectors away from the negative real axis ([[thm-stirling-formula-gamma]]).

[F6] Gaussian transformation and twisted Poisson summation hold with their stated normalizations, also for the character modulo one ([[lem-fourier-transform-of-a-gaussian]], [[thm-twisted-poisson-summation]]).

[F7] Zeros of a nonzero holomorphic function are isolated and have finite multiplicities; analytic identities extend by the identity theorem ([[thm-identity-theorem-holomorphic-functions]], [[thm-zero-order-factorization-holomorphic-function]]).

## Proof

**Proof technique:** direct theta regularization, Hadamard differences, and Gamma recurrence.

1.1 For $q=1$, put $\theta(v)=\sum_{n\in\mathbb Z}e^{-\pi n^2v}$. By [F6], $\theta(v)=v^{-1/2}\theta(1/v)$. Termwise Mellin integration first in $\Re s>1$, splitting at $1$ and substituting $v=1/u$ on $(0,1)$, gives $$2\Lambda(s)=\frac2{s(s-1)}+\int_1^\infty(\theta(v)-1)\left(v^{s/2-1}+v^{(1-s)/2-1}\right)dv.$$ The tails converge locally uniformly in $s$ since $|\theta(v)-1|\le C e^{-\pi v}$ for $v\ge1$. Thus $\Xi(s)=\tfrac12s(s-1)\Lambda(s)$ is entire, satisfies $\Xi(s)=\Xi(1-s)$, and $\Xi(0)=\Xi(1)=1/2$. For $|s|\le R$, the integral is bounded by $C\int_1^\infty e^{-\pi v}v^{(R+2)/2}dv$, which by [F5] is $\exp(O((R+1)\log(R+3)))$. The prefactor is polynomial. Conversely on the positive real axis the Euler series gives $\zeta(R)=1+o(1)$ and Stirling gives $\log|\Xi(R)|=\tfrac R2\log R+O(R)$. Hence $\Xi$ has order exactly one. All estimates are for explicit series and integrals; no choice axiom or choice-qualified zeta-order theorem is used. [F1, F4, F5, F6, F7, given, algebra]

1.2 Logarithmic differentiation of [F5] gives $\psi(z)=\Gamma'(z)/\Gamma(z)=-1/z-\gamma_0+\sum_{m\ge1}(1/m-1/(m+z))$. For $\Re z\ge1/4$, split at $m=2|z|$: $|m+z|\ge|z|$ bounds initial terms by $1/m$, and the remaining terms by $2|z|/m^2$. Consequently $\psi(z)=O(\log(|z|+2))$ there. Gamma recurrence extends this bound to every $z$ at fixed positive distance $\epsilon$ from its nonpositive integer poles: choose the least $n\ge0$ with $\Re(z+n)\ge1$, if needed, and use $\psi(z)=\psi(z+n)-\sum_{j=0}^{n-1}(z+j)^{-1}$. The finite sum is $O_\epsilon(\log(|z|+2))$, by grouping integer $j$ according to $k\le|\Re z+j|<k+1$ (at most two per band), with the closest band bounded by $2/\epsilon$ and the others by $2/k$. [F5, algebra]

2.1 For $q=1$, [F4] gives for $\sigma>1$ and fixed nonzero $t$ $$\zeta(\sigma)^3|\zeta(\sigma+it)|^4|\zeta(\sigma+2it)|\ge1,$$ because its logarithm is $\sum_{p,k}p^{-k\sigma}[3+4\cos(kt\log p)+\cos(2kt\log p)]/k\ge0$ and $3+4\cos u+\cos(2u)=2(1+\cos u)^2$. If $\zeta(1+it)=0$ has multiplicity $m\ge1$, the simple pole at $1$ in [F1] and holomorphy at $1+2it$ make the left side $O((\sigma-1)^{4m-3})\to0$, a contradiction. The primitive functional equation, Gamma's simple poles and zero-free reciprocal product now show that $\Xi$'s zeros lie in $0<\Re s<1$; the negative even zeros of $\zeta$ are simple. Its value at $0$ is $-1/2$, from the residue $-1$ of $\Lambda(s)$ and $\Gamma(s/2)\sim2/s$. For $q>1$, [F1] and [F4] similarly make $\Lambda(0,\chi)\ne0$ and show that its zeros lie in the open strip; every zero $-a-2m$ of $L$ is simple since the reflected completed value at $1+a+2m$ is nonzero. [F1, F4, F5, F7, step 1.1, algebra]

2.2 On $\Re s\le-1$, logarithmic differentiation of the completed equation gives $$\frac{L'}{L}(s,\chi)=-\frac{L'}{L}(1-s,\bar\chi)-\log(q/\pi)-\frac12\psi((s+a)/2)-\frac12\psi((1-s+a)/2).$$ The first term is $O(1)$ by [F4]. The second Gamma argument has real part at least $1$; the first stays at distance at least $\epsilon/2$ from its poles under the stated trivial-zero separation. Step 1.2 proves the left-half-plane assertion. This identity is also valid for $q=1$ as a meromorphic identity, without a choice-qualified zeta functional equation. [F1, F4, F5, step 1.2, algebra]

3.1 Set $H_\chi=\Lambda(\cdot,\chi)$ for $q>1$ and $H_\chi=\Xi$ for $q=1$. By [F1], step 1.1 and [F3], its logarithmic derivative has the genus-one expansion. No zero is at $0$. To list zeros without a choice axiom, enumerate rational discs and assign each distinct zero its first disc containing it and no other zero; this injects the discrete zero set into $\mathbb N$, and finite multiplicities give its repeated list. Differencing at $s_0=2+it$ gives $$\frac{H_\chi'}{H_\chi}(s)-\frac{H_\chi'}{H_\chi}(s_0)=\sum_\rho\left(\frac1{s-\rho}-\frac1{s_0-\rho}\right).$$ The difference series converges absolutely and locally uniformly off zeros, since its tails are $O_s(|\rho|^{-2})$. [F1, F3, F7, step 1.1, step 2.1, algebra]

4.1 Reflection by the primitive functional equation sends left-half strip zeros to right-half strip zeros of $\bar\chi$, with reflected ordinate. Thus [F2] bounds the number of all zeros in each unit ordinate window by $O(\log(q(|u|+3)))$. For $n\le|\gamma-t|<n+1$, $n\ge1$, and $-1\le\sigma\le2$, the difference in step 3.1 is at most $3/n^2$ in modulus. Summing the window bounds gives $O(\log(q\tau))$, since $\log(q(|t|+n+3))\le\log(q(|t|+3))+\log(n+1)$. The subtracted terms of the nearby zeros contribute the same bound because $|s_0-\rho|\ge1$. [F1, F2, step 2.1, step 3.1, algebra]

5.1 At $s_0=2+it$, [F4] gives $L'/L(s_0,\chi)=-\sum_{p,k\ge1}\chi(p)^k(\log p)p^{-ks_0}=O(1)$. Taking logarithmic derivatives of the completion and, for $q=1$, of $\Xi=\tfrac12s(s-1)\Lambda$, the conductor terms cancel in the difference at $s,s_0$. For $|t|\ge2$, both Gamma arguments stay away from their poles; step 1.2 bounds their logarithmic derivatives by $O(\log\tau)$. The additional rational terms $1/s,1/(s-1)$ for $q=1$ are bounded. Substitution in steps 3.1 and 4.1 proves the first assertion. [F1, F4, step 1.1, step 3.1, step 4.1, step 1.2, algebra]

6.1 At $t=\pm T$, every denominator in the nearby-zero sum has modulus at least $\eta/\log(q(T+2))$. The number of terms is $O(\log(q(T+2)))$ by step 4.1. Apply step 5.1 to obtain the asserted horizontal bound. [step 4.1, step 5.1, given, algebra] ∎

## Remarks

For $q>1$, write $L'/L(s,\chi)=(1-a)/s+b_\chi+O(s)$ at $0$. The same Hadamard difference at $s_0=2$ gives
$$b_\chi=-\sum_{|\gamma|\le1}\frac1\rho+O(\log q).$$
Indeed the constant part of the Gamma difference is absolute, the subtracted nearby terms $(2-\rho)^{-1}$ contribute $O(\log q)$, and the distant differences at $s=0$ are bounded by $2/\gamma^2$ and the unit-window sum. This derived finite-part relation retains every low zero and makes no exceptional-zero or zero-free-region assumption.
