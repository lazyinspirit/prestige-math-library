---
id: lem-cheeger-indicator-and-positive-part-energy
kind: lemma
title: "Cheeger indicator and positive part energy"
status: published
origin: pipeline
deps: [def-spectral-edge-and-vertex-expansion, cor-rayleigh-quotient-extreme-eigenvalue-characterisation]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §4.5.1 and beginning §4.5.2, pp40–42."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

Let $n\ge2$ and use normalized edge expansion $h$ and algebraic gap $\gamma=1-\mu_2$. Then $\gamma\le2h$. Moreover some sign of a nonzero mean-zero $\mu_2$ eigenvector has positive part $f\ne0$ supported on at most $n/2$ vertices and satisfying $\langle f,(I-M)f\rangle\le\gamma\|f\|^2$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For the regular multigraph and spectral conventions in the stated convention, put $\alpha=\|M|_{\mathbf1^\perp}\|$. For $n\ge2$ order the eigenvalues $1=\mu_1\ge\mu_2\ge\cdots\ge\mu_n$, counting multiplicity, and put $\gamma=1-\mu_2$. Thus $\alpha=\max_{j\ge2}|\mu_j|$, which also controls negative eigenvalues. Write $\operatorname{cut}(S)=\sum_{u\in S,v\notin S}A_{uv}$ and $\partial_VS=\{v\notin S:A_{uv}>0\text{ for some }u\in S\}$. Normalized edge expansion and external vertex expansion are $$h=\min_{0<|S|\le n/2}\frac{\operatorname{cut}(S)}{d|S|},\qquad h_V=\min_{0<|S|\le n/2}\frac{|\partial_VS|}{|S|}.$$ For $n=1$, put $\alpha=0$ and leave $\mu_2,\gamma,h,h_V$ undefined; cut-expansion assertions are vacuous. A bounded-degree family is an expander family when its normalized edge expansion has a positive uniform lower bound for $n\ge2$. Polynomial-time constructibility means a uniform algorithm outputs the adjacency list in time polynomial in $n$; neighbor computation in time polynomial in $\log n$ is a stronger requirement. ([[def-spectral-edge-and-vertex-expansion]]).

[F2] If $T$ is self-adjoint on a nonzero finite-dimensional real inner product space and its eigenvalues are ordered as $$\lambda_1\ge\cdots\ge\lambda_n,$$ then $$\lambda_1=\max_{v\ne0} R_T(v)\qquad\text{and}\qquad \lambda_n=\min_{v\ne0} R_T(v).$$ ([[cor-rayleigh-quotient-extreme-eigenvalue-characterisation]]).


## Proof

1.1 On the nonzero invariant space $\mathbf1^\perp$, the Rayleigh quotient of $I-M$ is at least $\gamma$. For $0<|S|\le n/2$, the centered indicator has norm squared $|S|(1-|S|/n)/n$ and energy $\operatorname{cut}(S)/(nd)$. Hence $\gamma\le\operatorname{cut}(S)/(d|S|(1-|S|/n))\le2\operatorname{cut}(S)/(d|S|)$. Minimize over the finite nonempty collection of such sets. [F1, F2]

2.1 Choose a nonzero mean-zero eigenvector $g$ for $\mu_2$. It has both positive and negative entries, so one sign has at most $n/2$ positive entries. Let $f=\max(g,0)$ for this sign. At a positive coordinate, $Mf\ge Mg$ since $f\ge g$ and $M$ is nonnegative; thus $(I-M)f\le(I-M)g=\gamma g$ there. Multiply by $f$, sum, and use $f=0$ elsewhere to obtain the energy bound. This also works when $\gamma=0$ and when some coordinates of $g$ vanish. [step 1.1, algebra] ∎
