---
id: thm-csm-ising-chain-convergent-series
kind: theorem
title: "Exact convergent Ising-chain high-temperature series"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: ["thm-tdmath-ising-chain-limit", "def-real-exponential-function-and-e", "thm-derivative-of-exponential", "thm-exponential-addition-formula", "cor-mean-value-theorem", "thm-logarithm-derivative-and-integral", "thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"thm-tdmath-ising-chain-limit": "mathematical-premise", "def-real-exponential-function-and-e": "mathematical-premise", "thm-derivative-of-exponential": "mathematical-premise", "thm-exponential-addition-formula": "mathematical-premise", "cor-mean-value-theorem": "mathematical-premise", "thm-logarithm-derivative-and-integral": "mathematical-premise", "thm-natural-logarithm-laws": "mathematical-premise"}
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

## Proof
1.1 At zero field the larger transfer-matrix eigenvalue in [F1] is $\lambda_+=e^K+e^{-K}=2\cosh K$. Therefore the limiting pressure is $P(K)=\log(2\cosh K)=\log2+\log(1+w)$ with $w=\cosh K-1\geq0$. [A1, F1, F2, algebra]

1.2 Put $u=|K|/2<1/4$. If $u=0$, then $w=0$. If $u>0$, [F3] applied to $\sinh$ on $[0,u]$ gives $\sinh u=u\cosh\xi$ for some $0<\xi<u$, so $\sinh u<u e^u$. Also $\log(4/3)=\int_1^{4/3}dt/t>1/4$, hence monotonicity and inverse laws in [F2] give $e^u<4/3$. Thus in both cases $0\leq w=2\sinh^2u<2(4u/3)^2=8K^2/9<2/9<1/4$ when $u>0$, and the bound is immediate when $u=0$. [F2, F3, algebra]

2.1 For $0\leq t\leq w<1$, the finite geometric identity gives $\sum_{j=0}^{n}(-t)^j=(1-(-t)^{n+1})/(1+t)$; the remainder is bounded uniformly by $w^{n+1}/(1-w)$. Thus $\sum_{j\geq0}(-t)^j=(1+t)^{-1}$ uniformly on $[0,w]$. [step 1.2, algebra]

3.1 Integrating this uniformly convergent identity from $0$ to $w$ and using [F2] yields $\log(1+w)=\sum_{m\geq1}(-1)^{m+1}w^m/m$. If $|K|\leq r<1/2$, step 1.2 gives $0\leq w<8r^2/9<2/9=:w_r<1$. Therefore the series of absolute values is bounded uniformly by $\sum_{m\geq1}w_r^m/m<\infty$, proving absolute convergence and uniform convergence on that compact interval. [F2, step 1.2, step 2.1, algebra] ∎ 