---
id: lem-dyadic-dirichlet-polynomial-separated-mean-square
kind: lemma
title: "Separated mean square for a dyadic Dirichlet polynomial"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
  - thm-newton-leibniz-with-interior-derivative
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-continuous-implies-integrable
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Montgomery and Vaughan, Multiplicative Number Theory III, Theorem 26.8 and proof, printed pp. 113–114"
      url: "https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf"
      locator: "Dyadic adaptation of the continuous-to-discrete argument: modulation replaces log n by log(n/N)."
---

## Statement

Let $N\ge1$ be an integer, $T\ge2$ a real number, and $a_n\in\mathbb C$ for the integers $N<n\le2N$. Let $\mathcal S$ be a finite subset of an arbitrary real interval $[b,b+T]$, with distinct elements separated by at least one. There is an absolute constant $C$ such that
$$\sum_{t\in\mathcal S}\left|\sum_{N<n\le2N}a_n n^{it}\right|^2\le C(T+N)\sum_{N<n\le2N}|a_n|^2.$$
Here $n^{it}=\exp(it\log n)$. The constant is independent of $b,N,T$, the coefficients, and the number of samples; no upper bound on $N/T$ is assumed.

## Statement references

[Montgomery and Vaughan, Theorem 26.8 and its proof; dyadic modulation adaptation](https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf)

## Facts & Assumptions

**Given:** The finite coefficient sequence, $N,T,b$ and the separated sample set in the Statement. All integrals below are finite-interval Riemann integrals.

[F1] For a Dirichlet polynomial of length $K$ with arbitrary complex coefficients $c_n$, and $H\ge2$, the continuous estimate is $\int_0^H|\sum_{n\le K}c_n n^{-it}|^2dt\le C_0(H+K)\sum_{n\le K}|c_n|^2$, with an absolute constant. Only this continuous assertion is used. [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[F2] Newton–Leibniz applies to a real continuously differentiable function on a compact interval. [[thm-newton-leibniz-with-interior-derivative]]

[F3] The exponential has derivative itself and $|\exp(iv)|=1$ for real $v$. [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[F4] Continuous real functions on compact intervals are Riemann integrable. [[thm-continuous-implies-integrable]]

## Proof

1.1 Put $G=\sum_{N<n\le2N}|a_n|^2$. For any coefficients $c_n$ supported on this dyadic block and interval $J=[d,d+H]$ with $H\ge2$, conjugation and translation convert $\sum c_n n^{it}$ at $t=d+v$ to the complex conjugate of $\sum \overline{c_n}n^{-id}n^{-iv}$. Extend its coefficients by zero to length $2N$ and apply F1. By F3 the coefficient norm is unchanged. Consequently $$\int_J\left|\sum_{N<n\le2N}c_n n^{it}\right|^2dt\le C_0(H+2N)\sum_{N<n\le2N}|c_n|^2.$$ This gives the continuous estimate uniformly in the position of $J$ and for either sign of the phase. [F1, F3, given, algebra]

2.1 Set $Q(t)=\exp(-it\log N)\sum_{N<n\le2N}a_n n^{it}=\sum_{N<n\le2N}a_n\exp(it\log(n/N))$. Then $|Q(t)|$ is the modulus in the Statement, and F3 gives $$Q'(t)=i\sum_{N<n\le2N}\log(n/N)a_n\exp(it\log(n/N)).$$ The real logarithms satisfy $0<\log(n/N)\le\log2$. Multiplying either sum by $\exp(it\log N)$ preserves its modulus, so step 1.1 bounds their integrals on any such $J$ by $C_0(H+2N)G$ and $C_0(H+2N)(\log2)^2G$, respectively. This modulation is what prevents a loss depending on $\log N$. [F3, step 1.1, algebra]

3.1 For $t\in\mathcal S$ put $I_t=[t-1/2,t+1/2]$ and let $J=[b-1/2,b+T+1/2]$. These unit intervals have disjoint interiors and lie in $J$. The real function $h=|Q|^2$ has continuous derivative $h'=2\operatorname{Re}(Q'\overline Q)$. F2 implies, for each $v\in I_t$, $$|Q(t)|^2\le |Q(v)|^2+2\int_{I_t}|Q(w)||Q'(w)|dw.$$ Integrate over $v\in I_t$, then sum over the finite set. Nonnegativity, disjoint interiors and F4 give $$\sum_{t\in\mathcal S}|Q(t)|^2\le\int_J|Q(w)|^2dw+2\int_J|Q(w)||Q'(w)|dw\le2\int_J|Q(w)|^2dw+\int_J|Q'(w)|^2dw,$$ using $2uv\le u^2+v^2$, which follows from $(u-v)^2\ge0$. Intersections at interval endpoints have zero Riemann integral and do not alter the estimate. [F2, F4, step 2.1, given, algebra]

4.1 The interval $J$ has length $H=T+1\ge3$. Insert the two continuous bounds of step 2.1 into step 3.1 to obtain $C_0(2+(\log2)^2)(T+1+2N)G\le C(T+N)G$, with an absolute $C$. This is the claimed bound. If $\mathcal S$ is empty or $G=0$, both the assertion and the argument give zero on the left. The proof permits $N=1$, closed sample endpoints and arbitrary real $b$, and uses no selection from an infinite family. [step 2.1, step 3.1, algebra] ∎

## Source notes

This is a local dyadic adaptation of the cited sampling argument, using the existing continuous mean-square supplier. It is not a proof of the full Heath–Brown pairwise theorem, and does not use that theorem as a premise.
