---
id: thm-csm-ising-chain-convergent-series
kind: theorem
title: "Exact convergent Ising-chain high-temperature series"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: ["thm-tdmath-ising-chain-limit", "def-real-exponential-function-and-e", "thm-derivative-of-exponential", "thm-exponential-addition-formula", "cor-exponential-reciprocal-and-positivity", "thm-exponential-is-strictly-increasing", "cor-mean-value-theorem", "thm-logarithm-derivative-and-integral", "thm-natural-logarithm-laws", "def-hyperbolic-functions", "thm-hyperbolic-identities-and-derivatives", "thm-geometric-series"]
justified_by: []
dependency_roles: {"thm-tdmath-ising-chain-limit": "mathematical-premise", "def-real-exponential-function-and-e": "mathematical-premise", "thm-derivative-of-exponential": "mathematical-premise", "thm-exponential-addition-formula": "mathematical-premise", "cor-exponential-reciprocal-and-positivity": "mathematical-premise", "thm-exponential-is-strictly-increasing": "mathematical-premise", "cor-mean-value-theorem": "mathematical-premise", "thm-logarithm-derivative-and-integral": "mathematical-premise", "thm-natural-logarithm-laws": "mathematical-premise", "def-hyperbolic-functions": "mathematical-premise", "thm-hyperbolic-identities-and-derivatives": "mathematical-premise", "thm-geometric-series": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

For the zero-field nearest-neighbor Ising chain with spins $s_i\in\{-1,+1\}$, coupling $J\in\mathbb R$, inverse temperature $\beta>0$, and $K=\beta J$, let $P(K)$ be the dimensionless pressure per site on periodic chains. For $|K|<\tfrac12$,
$$P(K)=\log(2\cosh K)=\log2+\sum_{m=1}^{\infty}\frac{(-1)^{m+1}}{m}(\cosh K-1)^m.$$
The series converges absolutely at every such $K$ and uniformly on each compact subinterval of $(-\tfrac12,\tfrac12)$. This is a sufficient convergence range for this specific one-dimensional model, not a generic cluster-expansion result.

## Facts & Assumptions

**Given:** A finite periodic Ising chain with zero field, $J\in\mathbb R$, $\beta>0$, and the dimensionless coupling $K=\beta J$.

[A1] The chain Hamiltonian is $H_N(s)=-J\sum_{i=1}^N s_i s_{i+1}$ with $s_{N+1}=s_1$, and its transfer matrix is $T_{s,t}=e^{Kst}$.

[F1] For this finite-alphabet periodic chain, the thermodynamic pressure exists and is $\log\lambda_+$, where $\lambda_+$ is the larger eigenvalue of the stated positive transfer matrix ([[thm-tdmath-ising-chain-limit]]).

[F2] The real exponential is smooth and obeys its addition law; $\cosh x=(e^x+e^{-x})/2$, $\cosh K-1=2\sinh^2(K/2)$, and $\log y=\int_1^y t^{-1}\,dt$ ([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[thm-derivative-of-exponential]], [[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]]).

[F3] The mean value theorem gives $g(b)-g(a)=g'(c)(b-a)$ for continuous $g$ on $[a,b]$ and differentiable $g$ on $(a,b)$ ([[cor-mean-value-theorem]]).

[F4] The hyperbolic functions are defined from the exponential, satisfy $\cosh K-1=2\sinh^2(K/2)$, and have $(\sinh x)'=\cosh x$ with $\cosh$ increasing on $[0,\infty)$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]).

[F5] For $|q|<1$, $\sum_{j=0}^\infty q^j=(1-q)^{-1}$ ([[thm-geometric-series]]).

[F6] The exponential is positive, satisfies $\exp(-x)=1/\exp x$, and is strictly increasing ([[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]).

## Proof
1.1 At zero field the larger transfer-matrix eigenvalue in [F1] is $\lambda_+=e^K+e^{-K}=2\cosh K$. Therefore the limiting pressure is $P(K)=\log(2\cosh K)=\log2+\log(1+w)$ with $w=\cosh K-1\geq0$. [A1, F1, F2, algebra]

1.2 Put $u=|K|/2<1/4$. If $u=0$, then $w=0$. If $u>0$, [F3] applied to $\sinh$ on $[0,u]$ gives $\sinh u=u\cosh\xi$ for some $0<\xi<u$; by [F4], $\cosh\xi<\cosh u$, while [F6] and the definition of $\cosh$ give $\cosh u<e^u$, so $\sinh u<u e^u$. The power-series definition of $\exp$ in [F2], with $j!\geq1$, and [F5] give $e^u=\sum_{j\geq0}u^j/j!\leq\sum_{j\geq0}u^j=(1-u)^{-1}<4/3$. Thus $0\leq w=2\sinh^2u<2(4u/3)^2=8K^2/9<2/9<1/4$ when $u>0$, and $w=0$ when $u=0$. [F2, F3, F4, F5, F6, algebra]

2.1 For $0\leq t\leq w<1$, the finite geometric identity gives $\sum_{j=0}^{n}(-t)^j=(1-(-t)^{n+1})/(1+t)$; the remainder is bounded uniformly by $w^{n+1}/(1-w)$. The pointwise sum is also $(1+t)^{-1}$ by [F5], so these same remainder bounds show uniform convergence on $[0,w]$. [step 1.2, F5, algebra]

3.1 Integrate the finite geometric identity from $0$ to $w$. The integral of its remainder has absolute value at most $w^{n+2}$, since $1+t\geq1$ on $[0,w]$; hence these finite integrals converge to $\int_0^w(1+t)^{-1}dt=\log(1+w)$ by [F2]. Integrating each finite sum gives $\sum_{m=1}^{n+1}(-1)^{m+1}w^m/m$, so passage to the limit yields $\log(1+w)=\sum_{m\geq1}(-1)^{m+1}w^m/m$. If $|K|\leq r<1/2$ with $r\geq0$, step 1.2 gives $0\leq w\leq8r^2/9<2/9=:w_r<1$. The tail of the series of absolute values after index $M$ is at most $\sum_{m>M}w_r^m=w_r^{M+1}/(1-w_r)\to0$, uniformly in $K$, by [F5]. This proves absolute convergence and uniform convergence on every such compact interval, including $r=0$. [F2, F5, step 1.2, step 2.1, algebra] ∎
