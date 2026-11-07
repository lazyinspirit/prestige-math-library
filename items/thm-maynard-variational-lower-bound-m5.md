---
dependency_level: 3
id: thm-maynard-variational-lower-bound-m5
kind: theorem
title: "Maynard's finite-dimensional lower bound $M_5>2$"
status: draft
origin: pipeline
proof_strategy: direct
deps: [def-maynard-variational-quantity-mk, lem-maynard-simplex-monomial-integrals, thm-multidimensional-riemann-criterion]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "James Maynard, ‘Small gaps between primes’ (2015), §8.3, Proposition 4.3(1)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
---

## Statement

For Maynard's simplex variational quantity $M_k$, one has $M_5>2$.


## Statement references

[[def-maynard-variational-quantity-mk|Maynard simplex functionals and $M_k$]]

[[lem-maynard-simplex-monomial-integrals|Exact simplex monomial moments]]


## Facts & Assumptions

**Given:** The Riemann test-function class and the variational quantity $M_5$.

[F1] The class $\mathcal F_k$ consists of supported Riemann test functions with $I_k(F)>0$ and every $J_{k,i}(F)>0$ ([[def-maynard-variational-quantity-mk]]).

[F2] $M_k$ is the supremum of $\sum_{i=1}^kJ_{k,i}(F)/I_k(F)$ over $F\in\mathcal F_k$ ([[def-maynard-variational-quantity-mk]]).

[F3] For nonnegative integer exponents, the exact integral of a monomial times a power of the simplex slack is given by the factorial formula in [[lem-maynard-simplex-monomial-integrals]].

[F4] A bounded function is Riemann integrable if its Darboux gaps can be made arbitrarily small ([[thm-multidimensional-riemann-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Put $P_1=\sum_{i=1}^5t_i$, $P_2=\sum_{i=1}^5t_i^2$, and $P(s,q)=(1-s)q+\frac7{10}(1-s)^2+\frac1{14}q-\frac3{14}(1-s)$. Define $F(t)=P(P_1,P_2)$ on $R_5$ and $F(t)=0$ off $R_5$. It is bounded and polynomial on the simplex; a grid of mesh $\delta$ has at most six last-coordinate intervals meeting $\sum_i t_i=1$ for each choice of the first four coordinate intervals, so the boundary cells have total volume $O(\delta)$ and [F4] makes $F$ Riemann integrable. Each coordinate section is piecewise polynomial. For $r=1-\sum_{j\ne i}t_j$ and $q=\sum_{j\ne i}t_j^2$, integrating the section from $0$ to $r$ gives $G_{F,i}=q(\frac{r^2}{2}+\frac r{14})+\frac{r^4}{12}+\frac{9r^3}{35}-\frac{3r^2}{28}$ on $R_4$ and zero outside: the needed integrals are $\int_0^r(r-u)\,du=r^2/2$, $\int_0^r(r-u)u^2\,du=r^4/12$, $\int_0^r(r-u)^2\,du=r^3/3$, and $\int_0^r u^2\,du=r^3/3$. The marginal and its square are polynomial on $R_4$, vanish at $r=0$, and are zero outside; their only possible discontinuities lie on $\sum_{j\ne i}t_j=1$, whose boundary cells have total volume $O(\delta)$ by the same grid argument. Thus $F$ satisfies the well-definedness conditions in [F1]. [given, F1, F4, construct, algebra]

2.1 Expanding $F^2$ and $G_{F,i}^2$ in powers of $r=1-\sum t_j$ and $q=\sum t_j^2$, and applying [F3] to each monomial, gives $I_5(F)=\frac{29509}{1222452000}>0$ and, by symmetry, $J_{5,i}(F)=\frac{40493}{4191264000}>0$ for every $i$. The complete rational coefficient and moment ledger is included in the proof contract; thus $F\in\mathcal F_5$. [given, F1, F3, step 1.1, algebra]

3.1 Therefore $M_5\ge\sum_{i=1}^5J_{5,i}(F)/I_5(F)=5J_{5,1}(F)/I_5(F)=\frac{1417255}{708216}>2$, since $1417255-2\cdot708216=823>0$. [given, F2, step 2.1, algebra] ∎
