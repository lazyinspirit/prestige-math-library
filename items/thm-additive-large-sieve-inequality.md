---
dependency_level: 1
id: thm-additive-large-sieve-inequality
kind: theorem
title: "Additive large-sieve inequality for separated frequencies"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-abstract-large-sieve-setting
  - def-complex-exponential
  - def-pi-via-first-positive-cosine-zero
  - thm-eulers-formula
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-sine-and-cosine-derivatives
  - thm-chain-rule
  - thm-newton-leibniz-with-interior-derivative
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-first-mean-value-theorem-for-integrals
  - thm-monotonicity-of-the-integral
  - thm-additivity-over-subintervals
  - thm-monotone-change-of-variable-for-riemann-integrals
  - def-derivative
  - lem-complex-conjugation-and-modulus-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 15"
      url: "https://kskedlaya.org/ant/chap-largesieve.html"
      locator: "Theorem 15.5 and its duality proof, §15.3"
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Theorem 4.1 and the proof of the weaker rational-frequency bound, printed pp. 48–51"
verification:
  precheck: pass
---

## Statement

Let $N\ge1$ be an integer, let $M\in\mathbb Z$, and let $a_n\in\mathbb C$ for
$M<n\le M+N$. Put $\mathbb T:=\mathbb R/\mathbb Z$. For classes
$\alpha,\beta\in\mathbb T$ with real lifts $x,y$, put
$d_{\mathbb T}(\alpha,\beta):=\min_{k\in\mathbb Z}|x-y-k|$, independent
of the chosen lifts. Let
$A\subseteq\mathbb T$ be finite, let $0<\delta\le1$, and assume
$d_{\mathbb T}(\alpha,\beta)\ge\delta$ for distinct $\alpha,\beta\in A$.
Define $e(t):=\exp(2\pi i t)$ for $t\in\mathbb R$. On
$X=\{M+1,\ldots,M+N\}$ with counting weights, let
$\phi_\alpha(n):=e(-n\widetilde\alpha)$, where $\widetilde\alpha$ is any real
lift of $\alpha$. The period of $e$ makes this independent of the lift.
For the indexed family $(\phi_\alpha)_{\alpha\in A}$, its optimal
large-sieve constant satisfies
$$\Delta(X,1,(\phi_\alpha)_{\alpha\in A})\le\delta^{-1}+4\pi N.$$
Equivalently,
$$\sum_{\alpha\in A}\left|\sum_{M<n\le M+N}a_ne(n\widetilde\alpha)\right|^2 \le(\delta^{-1}+4\pi N)\sum_{M<n\le M+N}|a_n|^2.$$

## Statement references

[[def-abstract-large-sieve-setting]]

[[def-complex-exponential]]

[[def-pi-via-first-positive-cosine-zero]]

[[thm-eulers-formula]]

[[thm-kernel-and-fibres-of-complex-exponential]]

[[thm-sine-and-cosine-derivatives]]

[[thm-chain-rule]]

[[def-derivative]]

[[lem-complex-conjugation-and-modulus-laws]]

[[thm-first-mean-value-theorem-for-integrals]]

[[thm-monotonicity-of-the-integral]]

[[thm-additivity-over-subintervals]]

[[thm-newton-leibniz-with-interior-derivative]]

[[lem-continuous-functions-riemann-integrable]]

[[lem-riemann-integral-linearity]]

[[thm-monotone-change-of-variable-for-riemann-integrals]]

[Kedlaya, Chapter 15, full text](https://kskedlaya.org/ant/chap-largesieve.html)

[Kowalski, Chapter 4.2, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** The integers $M,N$, coefficients $(a_n)$, a finite
$\delta$-separated set $A\subseteq\mathbb T$, and $e(t)=\exp(2\pi i t)$.

[F1] The large-sieve constant is the optimal second-moment constant for the
indexed family of functions on the finite set $X$
([[def-abstract-large-sieve-setting]]).

[F2] Euler's formula gives $e(t)=\cos(2\pi t)+i\sin(2\pi t)$, and the
exponential has period $2\pi i\mathbb Z$ in its complex argument
([[thm-eulers-formula]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F3] Sine and cosine are differentiable with derivatives cosine and minus sine,
and the real chain rule applies to their compositions with linear functions
([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[F4] The real derivative is defined by the difference-quotient limit; finite
linear combinations of such quotients may be differentiated by taking the
finite sum of their limits ([[def-derivative]]).

[F5] A continuous real function on an interval of positive length takes its
average value at some point of that interval
([[thm-first-mean-value-theorem-for-integrals]]).

[F6] Continuous functions on a closed interval are Riemann integrable;
Newton–Leibniz recovers the integral of a continuous derivative; the integral
is linear and monotone; and it is additive over adjacent subintervals
([[lem-continuous-functions-riemann-integrable]],
[[thm-newton-leibniz-with-interior-derivative]],
[[lem-riemann-integral-linearity]],
[[thm-monotonicity-of-the-integral]],
[[thm-additivity-over-subintervals]]).
Complex integrals below mean the componentwise integrals of real and imaginary
parts, so the real Newton–Leibniz theorem applies to each part.

[F7] The change-of-variable theorem for the translation $t\mapsto t\pm1$
preserves the integral, and $e$ is periodic with period $1$
([[thm-monotone-change-of-variable-for-riemann-integrals]], [F2]).

[F8] Complex conjugation preserves sums and products, $z\overline z=|z|^2$,
and $|zw|=|z||w|$ with the triangle inequality; in particular
$|\overline z-\overline w|=|z-w|$
([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 Write $b_r:=a_{M+1+r}$ for $0\le r<N$ and $P(t):=\sum_{r=0}^{N-1}b_re(rt)$. For every $\alpha\in A$, $\sum_{M<n\le M+N}a_ne(n\widetilde\alpha) =e((M+1)\widetilde\alpha)P(\widetilde\alpha)$, and the prefactor has modulus $1$ by [F2]. Thus the left side is $\sum_{\alpha\in A}|P(\widetilde\alpha)|^2$. [given, F2, algebra]

1.2 For each integer $r$, Euler's formula [F2], the trigonometric derivatives and chain rule [F3] give the componentwise real derivative $(e(rt))'=2\pi i r e(rt)$, and differentiability gives continuity of every $e(rt)$. The difference quotient of $P$ is the finite sum of the termwise quotients. Given $\varepsilon>0$, choose for each of the finitely many terms a threshold making its quotient error less than $\varepsilon/N$; the minimum threshold and the triangle inequality show that the sum quotient tends to $P'(t)=\sum_{r=0}^{N-1}2\pi i r b_r e(rt).$ This limit also gives continuity of $P$. For real $h\ne0$, with $f(t):=|P(t)|^2=P(t)\overline{P(t)}$, conjugation laws [F8] give $\frac{f(t+h)-f(t)}h= \frac{P(t+h)-P(t)}h\overline{P(t+h)} +P(t)\overline{\frac{P(t+h)-P(t)}h}.$ Taking $h\to0$, using the continuity of conjugation from [F8], proves $f'(t)=2\operatorname{Re}(P'(t)\overline{P(t)})$ and $|f'(t)|\le2|P'(t)||P(t)|$. Both $P$ and $P'$ are continuous, so $f$ and $f'$ are continuous. [F2, F3, F4, F8, algebra]

1.3 For every integer $k$, [F2]–[F3] give $(e(kt))'=2\pi i k e(kt)$ and $e(k)=e(0)=1$. For nonzero $k$, apply Newton–Leibniz [F6] to the real and imaginary parts of $e(kt)$ and use this derivative identity to obtain $\int_0^1e(kt)\,dt=0$; for $k=0$ the integral is $1$. Expanding the finite sums and using this orthogonality gives $\int_0^1|P(t)|^2\,dt=\sum_{r=0}^{N-1}|b_r|^2,\qquad \int_0^1|P'(t)|^2\,dt=(2\pi)^2\sum_{r=0}^{N-1}r^2|b_r|^2 \le(2\pi N)^2\sum_{r=0}^{N-1}|b_r|^2.$ [F2, F3, F6, algebra]

2.1 For each $\alpha$, let $I_\alpha=[\widetilde\alpha-\delta/2,\widetilde\alpha+\delta/2]$. The arcs have disjoint interiors modulo $1$: an interior overlap would make the circular distance between their centers less than $\delta$. By [F5], choose $t_\alpha\in I_\alpha$ with $f(t_\alpha)=\delta^{-1}\int_{I_\alpha}f(t)\,dt.$ Put $u:=\min(t_\alpha,\widetilde\alpha)$ and $v:=\max(t_\alpha,\widetilde\alpha)$. Newton–Leibniz [F6] on $[u,v]$ and monotonicity and linearity [F6], applied to $-|f'|\le f'\le|f'|$, give $|f(\widetilde\alpha)-f(t_\alpha)| \le\int_u^v|f'(t)|\,dt\le\int_{I_\alpha}|f'(t)|\,dt,$ where the last inequality follows by additivity and nonnegativity of $|f'|$. Therefore $f(\widetilde\alpha)\le\delta^{-1}\int_{I_\alpha}|P(t)|^2\,dt +\int_{I_\alpha}|f'(t)|\,dt.$ [given, step 1.2, F5, F6, construct]

3.1 If an arc crosses an integer, split it there and translate the outer piece by one; [F7] preserves its integrals. The resulting subintervals of one period have disjoint interiors. Sort their endpoints in $[0,1]$ and apply additivity [F6] successively; the omitted gaps have nonnegative integrals by monotonicity [F6]. Thus the sum of their integrals is at most the integral on $[0,1]$. Summing step 2.1 gives $\sum_{\alpha\in A}|P(\widetilde\alpha)|^2 \le\delta^{-1}\int_0^1|P(t)|^2\,dt+\int_0^1|f'(t)|\,dt.$ [step 1.2, step 2.1, F6, F7, algebra]

4.1 For $\lambda=(2\pi N)^{-1}>0$, the square $(\sqrt{\lambda}|P'|-\lambda^{-1/2}|P|)^2\ge0$ gives $2|P'||P|\le\lambda|P'|^2+\lambda^{-1}|P|^2$. Integrating and applying monotonicity [F6] and step 1.3 gives $\int_0^1|f'(t)|\,dt\le \left(\lambda(2\pi N)^2+\lambda^{-1}\right)\sum_r|b_r|^2 =4\pi N\sum_r|b_r|^2.$ [step 3.1, step 1.3, F6, algebra]

5.1 Substitute steps 1.3 and 4.1 into step 3.1. Since $\sum_r|b_r|^2=\sum_{M<n\le M+N}|a_n|^2$, this proves the displayed large-sieve bound and hence the bound for $\Delta$ in the Statement. [F1, given, step 3.1, step 1.3, step 4.1, algebra] ∎
