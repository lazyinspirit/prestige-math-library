---
dependency_level: 0
id: def-generalized-elliott-halberstam-hypothesis
kind: definition
title: "Generalized Elliott–Halberstam hypothesis GEH(θ) for coefficient convolutions"
status: draft
origin: pipeline
deps: [def-unit-group-modulo-n-and-euler-totient, def-natural-logarithm]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
---

## Definition

Fix $0<\theta<1$. The **GEH($\theta$) hypothesis** is the following assertion.

For an arithmetic function $f$ of finite support on the positive integers and a reduced residue class $a\pmod q$, put
$$\Delta(f;a\bmod q)=\sum_{n\equiv a\ (q)}f(n)-\frac1{\varphi(q)}\sum_{(n,q)=1}f(n),\qquad (\alpha*\beta)(n)=\sum_{d\mid n}\alpha(d)\beta(n/d).$$
Here $\tau(n)$ is the number of positive divisors of $n$; all sums and the moduli $q,r$ range over positive integers.

For every fixed $\epsilon>0$, $0<c_0\le c_1$, $C_0\ge1$ and $C\ge0$, use the following class of input families. Consider any family $\mathcal A$ of tuples $(x,N,M,\alpha,\beta)$ with $x\ge3$, $x^\epsilon\le N,M\le x^{1-\epsilon}$ and $c_0x\le NM\le c_1x$. The complex arithmetic functions $\alpha,\beta$ are supported respectively on $[N,2N]$ and $[M,2M]$ and satisfy, for every positive integer $n$,
$$|\alpha(n)|,|\beta(n)|\le C_0\tau(n)^C(\log x)^C.$$
Require the following uniform Siegel–Walfisz property of the $\beta$ family: for **every** fixed $B\ge1$ there are constants $K_B>0$, $D_B\ge0$ and $X_B\ge3$ such that, for all tuples of the family with $x\ge X_B$, every $q,r\ge1$ and every reduced $a\pmod q$,
$$\left|\Delta\bigl(\beta\,1_{(\cdot,r)=1};a\bmod q\bigr)\right|\le K_B\tau(qr)^{D_B}M(\log x)^{-B}.$$
The constants and thresholds are uniform over the family and the displayed variables. The indicator $1_{(\cdot,r)=1}(n)$ is one when $\gcd(n,r)=1$ and zero otherwise.

For every such family with its declared uniform input bounds, every fixed output saving $A\ge1$ and every fixed cutoff multiplier $C_Q>0$, there must be constants $K_{A,C_Q}>0$ and $X_{A,C_Q}\ge3$ such that, for all its tuples with $x\ge X_{A,C_Q}$,
$$\sum_{q\le C_Qx^\theta}\max_{(a,q)=1}|\Delta(\alpha*\beta;a\bmod q)|\le K_{A,C_Q}x(\log x)^{-A}.$$
The output constants may depend only on the fixed $\theta,\epsilon,c_0,c_1,C_0,C,A,C_Q$ and on the declared uniform Siegel–Walfisz bounds and thresholds for the family. They do not depend on its individual tuple $(x,N,M,\alpha,\beta)$ once those input data are fixed. No restriction to one selected coefficient-growth exponent, or to only the output saving in the input Siegel–Walfisz property, is intended.

## Definition references

[[def-unit-group-modulo-n-and-euler-totient|Euler totient and reduced residue classes]]

[[def-natural-logarithm|Natural logarithm]]

## Source formulation and scalar convention

This is the family-uniform formulation of Polymath8b Claim 2.6, with all fixed divisor/logarithmic growth bounds permitted and with the Siegel–Walfisz premise at every fixed saving. Fixed multiplicative constants in the source's power-range notation are absorbed by replacing $\epsilon$ by a smaller positive value for sufficiently large $x$. The cutoff multiplier retains the source's full $Q\ll x^\theta$ range. Dependence on only finitely many saving exponents is not asserted.

The source states real sequences. For complex sequences write $\alpha=\alpha_R+i\alpha_I$ and $\beta=\beta_R+i\beta_I$. Each real component obeys the same coefficient bound, and each real component of $\Delta(\beta 1_{(\cdot,r)=1};a\bmod q)$ is bounded by its complex modulus. Moreover $\alpha*\beta=\alpha_R*\beta_R-\alpha_I*\beta_I+i(\alpha_R*\beta_I+\alpha_I*\beta_R)$. Linearity of $\Delta$ and the triangle inequality give the complex estimate from the four real estimates, with at most four times their maximum constant. Conversely the complex formulation includes real sequences. This finite extension preserves the arithmetic-function scope; it supplies no proof of GEH.
