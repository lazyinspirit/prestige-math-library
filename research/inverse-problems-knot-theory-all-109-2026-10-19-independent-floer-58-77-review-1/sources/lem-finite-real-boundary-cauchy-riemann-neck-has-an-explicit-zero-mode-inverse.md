---
id: lem-finite-real-boundary-cauchy-riemann-neck-has-an-explicit-zero-mode-inverse
kind: lemma
title: "A finite real-boundary Cauchy--Riemann neck has an explicit zero-mode inverse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants, lem-countable-choice-weighted-strip-sobolev-algebra-and-composition]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Let $R>0$, $m\ge1$, and $C_R=[0,R]\times[0,1]$. Consider $D_0=\partial_s+i\partial_t$ on $\mathbb C^m$-valued $H^1$ sections with real zeroth traces on $t=0,1$. Use the real orthonormal modes $\phi_n(t)=e^{-i\pi nt}$, $n\in\mathbb Z$, coordinatewise, and let $a_n(s)$ be the real mode coefficients. Impose the mixed spectral conditions
$$a_n(0)=0\ (n>0),\qquad a_n(R)=0\ (n<0),\qquad a_0(0)=0.$$
These define a closed Hilbert subspace $X_R$ of $H^1(C_R)$ using actual weak traces, without extra forcing-edge conditions. Then
$$D_0:X_R\longrightarrow L^2(C_R;\mathbb C^m)$$
is a bounded real isomorphism. Writing $f_n$ for the real coefficients of $f$, its inverse is
$$a_n(s)=\begin{cases}\displaystyle\int_0^s e^{-\pi n(s-r)}f_n(r)\,dr,&n>0,\\\displaystyle-\int_s^R e^{-\pi n(s-r)}f_n(r)\,dr,&n<0,\\\displaystyle\int_0^s f_0(r)\,dr,&n=0.\end{cases}$$
The nonzero-mode inverse has $H^1$ norm bounded independently of $R$. The full inverse satisfies
$$\|u\|_{H^1}\le C(1+R)\|f\|_{L^2},$$
with $C$ independent of $R$, and its zero mode has the exact drift
$$a_0(R)-a_0(0)=\int_0^R f_0(r)\,dr.$$
Allowing a specified real initial constant $c$ adds precisely the constant section $c$; its $H^1$ norm is $\sqrt R|c|$. Requiring instead both zero-mode end values to vanish gives zero kernel and the closed range $\int_0^R f_0=0$, of real codimension $m$, with the same inverse bound on that range.

This is a finite-neck weak $H^1\to L^2$ operator statement. It asserts no unrestricted higher-order corner regularity, uniform bound for the zero mode as $R\to\infty$, geometric parametrix or nonlinear gluing.

## Statement references

[[lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants]]

## Facts & Assumptions

**Given:** The finite cylinder, real horizontal trace domain and the mixed mode conditions of the Statement. Coefficients and inner products are real even though sections are complex-valued.

[F1] The complete Fourier proof of [[lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants]] gives the real orthonormal basis $e^{-i\pi nt}$ and Parseval, including the zero mode. It follows alternatively by separating the real cosine and imaginary sine bases.

[F2] [[lem-countable-choice-weighted-strip-sobolev-algebra-and-composition]] supplies actual weak horizontal trace bounds and finite reflected extensions and convolution for the $H^1$ boundary domain. Only its unweighted local estimates are used here.

## Proof

1.1 For a section with the real horizontal traces, integration by parts in $t$ gives the coefficient identity $\langle i u_t,\phi_n\rangle_{\mathbb R}=\pi n\langle u,\phi_n\rangle_{\mathbb R}$. The endpoint terms have zero real part because both trace vectors there are real and the boundary term contains $i$. This is valid first for smooth real-boundary sections and then for the actual $H^1$ domain by the finite reflection approximation in [F2]. Parseval therefore gives $$\|u\|_2^2=\sum_n\|a_n\|_2^2,\quad\|u_s\|_2^2=\sum_n\|a_n'\|_2^2,\quad\|u_t\|_2^2=\sum_n(\pi n)^2\|a_n\|_2^2.$$ In particular each $a_n\in H^1([0,R];\mathbb R^m)$ and has its usual continuous representative. Its endpoint evaluation is bounded for fixed $R$: writing its endpoint value as its average plus the integral of its derivative bounds it by $R^{-1/2}\|a_n\|_2+\sqrt R\|a_n'\|_2$. Thus every specified mode condition is closed, and their intersection with the closed horizontal-trace domain is the Hilbert space $X_R$. Projection of the equation yields $a_n'+\pi n a_n=f_n$. [F1, F2, given, construct, algebra]

2.1 For a nonzero real $\lambda=\pi n$, the displayed Volterra formula is the unique weak solution of $a'+\lambda a=f_n$ with its stipulated vanishing end value. Its integrals are well defined for $L^2$ data on a finite interval. Integration of the scalar square identity gives $$\|a'\|_2^2+\lambda^2\|a\|_2^2+\lambda(|a(R)|^2-|a(0)|^2)=\|f_n\|_2^2.$$ For $\lambda>0$ the initial value vanishes, so its boundary term is nonnegative; for $\lambda<0$ the final value vanishes and the same is true. Hence $$\|a'\|_2^2+\lambda^2\|a\|_2^2\le\|f_n\|_2^2.$$ Since $|\lambda|\ge\pi$, this controls also $\|a\|_2$ uniformly, independently of the cylinder length. The zero mode is its actual primitive. Cauchy--Schwarz and integration give $$\|a_0\|_2^2\le\int_0^R s\int_0^s|f_0(r)|^2\,dr\,ds\le R^2\|f_0\|_2^2/2,\qquad\|a_0'\|_2=\|f_0\|_2.$$ These prove exactly the uniform nonzero-mode and linear-length zero-mode estimates. [step 1.1, construct, algebra]

3.1 Apply these formulas to finitely many modes of an arbitrary $f\in L^2$. Their source sums have real horizontal traces and the required end coefficients. Step2.1 and Parseval show that the sums converge in $H^1$, since the same estimate applies to every omitted tail of $f$. Closedness from step1.1 puts the limit in $X_R$. The bounded operator $D_0:H^1\to L^2$ sends it to $f$ by convergence of the partial sums in $L^2$. This constructs the inverse with the asserted norm bound. Conversely every solution in $X_R$ has the coefficient ODEs in step1.1 and their stipulated end values, hence has these same uniquely determined coefficients. Completeness in [F1] makes it the constructed solution. Thus the actual weak operator is onto and injective. No boundary condition on the forcing at the four cylinder edges was imposed in this construction. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Integrating the zero-mode ODE proves the exact drift formula. Changing its initial value from zero to $c$ changes only that mode by the constant $c$, leaving every other mode and the forcing unchanged. Its derivative norms are zero and its function norm is $\sqrt R|c|$. With both mean end values zero, the necessary and sufficient condition is consequently $\Lambda_R(f):=\int_0^R f_0=0$. This bounded map onto $\mathbb R^m$ has norm $\sqrt R$; its onto-ness follows by taking the constant real forcing $f=c/R$. Its kernel is a closed codimension-$m$ range, and step3.1 gives its actual bounded inverse and zero kernel. These exact finite-dimensional mean constraints, and the possible growth of the primitive with $R$, are retained rather than hidden inside a claimed uniform neck inverse. Nothing here proves higher regularity at the artificial vertical-boundary corners or a geometric gluing result. [step 1.1, step 2.1, step 3.1, construct, algebra] ∎
