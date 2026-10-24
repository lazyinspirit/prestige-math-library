---
id: alg-qa-23-bounded-height-numerical-roots
kind: algorithm
title: Bounded-grid rational root isolation and rounded numerical QSP input
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - alg-qa-23-polynomial-root-isolation
justified_by: [thm-qa-23-bounded-height-root-arithmetic-cost]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Gilyén et al., Quantum singular value transformation and beyond
      url: https://arxiv.org/abs/1806.01838
---

## Definition

This is the efficient numerical variant explicitly authorized by OP0/OP1; the complete exact/complete numerical modes retain their own root schedule. Its cost coordinate charges rational field arithmetic, including exact integer arithmetic on loop indices, rational comparisons, and exact input-coefficient comparisons. In particular, each integer midpoint division by $2$ in a bounded binary search is charged. Exact input-coefficient equality/order tests are explicitly ideal charged resources; coefficient encoding/access and implementation, including any algebraic refinement or minimal-polynomial conversion, are separate costs. It asserts no Turing or bit-time bound.

`ROUND-QSP(p,d,δ)` receives a real coefficient polynomial of degree at most $d$, parity $d\bmod 2$, with $|p|\le1$ on $[-1,1]$, and rational $\delta>0$. Put $\tau=\min(\delta,8)$. Initialize $L=0$ and increment it until $2^{-L}\le\tau/[64(d+1)]$. Set $a=(1-\tau/16)p$. Set $A=1$ if $d=0$ and $A=(d+1)d^d$ if $d\ge1$. For each permitted coefficient $y$ of $a$, set the integer $M=(A+2)2^L$, initialize $lo=-M$ and $hi=M+1$, and repeat while $hi-lo>1$: set $k=\lfloor(lo+hi)/2\rfloor$, compare $y$ with $k2^{-L}$, and set $lo=k$ if $k2^{-L}\le y$, otherwise set $hi=k$. Let $k=lo$. If $y=k2^{-L}$, set this rounded coefficient to that mesh value; otherwise compare $y$ with $(k+\tfrac12)2^{-L}$ and choose the nearer of $k2^{-L}$ and $(k+1)2^{-L}$, taking the lower point in a tie. Keep all other coefficients zero. For $d=0$ the only permitted coefficient is the constant coefficient and this same search rounds it; no interpolation is used. Return the resulting dyadic polynomial $h$ and the integer polynomial obtained from $1-h^2$ by multiplying by $2^{2L}$.

`GRID-ROOTS(P,b)` receives a nonzero rational real polynomial $P$ and $b\ge1$. If $P$ is constant, return the empty root list. Otherwise let $n=\deg P\ge1$. First divide every coefficient by the nonzero leading coefficient, using rational field operations. Only then clear the denominators of these monic coefficient ratios and remove integer content. Compute integer gcds by Euclidean division, obtaining each quotient by bounded integer binary search rather than a free floor primitive. Use the square-free reduction, winding count, multiplicity test and real Sturm counts of [[alg-qa-23-polynomial-root-isolation]], with the following bounded search and rational sign implementations.

At any coordinate interval $(u,v)$, set $N=100(n+1)$, where $n=\deg P$. Choose the least dyadic denominator $D=2^k$ for which the middle third contains at least $N+1$ consecutive grid points $j/D$. Take its first $N$ points. For outer half-widths use intervals $(B,B+1)$, with $B=2+\max_{j<n}|a_j/a_n|$ rounded upward to an integer; the search need not start at zero. Test all pairs of the two $N$-point sets in lexicographic order, using precisely the existing root-free-boundary, nonzero-vertex-imaginary-part, and nonzero-edge-imaginary-polynomial tests. Use the first admissible pair. If none exists return `INTERNAL_ERROR`. For subdivision use the two parent coordinate intervals and their middle thirds, so every child width is at most $2/3$ of its parent width. This bounded search replaces the unbounded global dyadic-pair enumeration only in this numerical alternate.

Implement each edge sign $R(\alpha)$, where $I(\alpha)=0$, by rational root isolation of the square-free part of $RI$ (omit a nonzero constant factor, and handle $R\equiv0$ separately). Use Sturm counts of $I$ and $R$ in each product-root isolator to identify the $I$-roots; retain only those with $I$-count one and $R$-count zero, refining as needed. Use a rational sample therein for the sign of $R$. Boundary root-freeness ensures that $\alpha$ is not a common root. Endpoint roots are tested and factored out before open-interval Sturm counting. The sign change of $I$ at $\alpha$ is its pair of rational endpoint signs. For sign refinement avoid roots of $RI$ when choosing cuts. The one-dimensional Sturm subdivisions use the first nonroot among $N$ dyadic grid points in the middle third, with the same bounded-grid rule. Euclidean gcd, division, and negative-remainder Sturm chains use exact rational field operations. Stop and return isolators by the original diameter/count rule.
