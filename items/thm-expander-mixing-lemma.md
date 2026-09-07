---
id: thm-expander-mixing-lemma
kind: theorem
title: "Expander mixing lemma"
status: published
origin: pipeline
deps: [def-spectral-edge-and-vertex-expansion, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
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
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §2.4 Lemma2.5, p21."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For any subsets $S,T$ of a finite $d$-regular adjacency-slot graph on $n\ge1$ vertices, let $e(S,T)=\sum_{u\in S,v\in T}A_{uv}$ count ordered slots. Then
$$\left|e(S,T)-\frac{d|S||T|}{n}\right|\le\alpha d\sqrt{|S|(1-|S|/n)\,|T|(1-|T|/n)}.$$
Overlap and loop slots are allowed.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For the regular multigraph and spectral conventions in the stated convention, put $\alpha=\|M|_{\mathbf1^\perp}\|$. For $n\ge2$ order the eigenvalues $1=\mu_1\ge\mu_2\ge\cdots\ge\mu_n$, counting multiplicity, and put $\gamma=1-\mu_2$. Thus $\alpha=\max_{j\ge2}|\mu_j|$, which also controls negative eigenvalues. Write $\operatorname{cut}(S)=\sum_{u\in S,v\notin S}A_{uv}$ and $\partial_VS=\{v\notin S:A_{uv}>0\text{ for some }u\in S\}$. Normalized edge expansion and external vertex expansion are $$h=\min_{0<|S|\le n/2}\frac{\operatorname{cut}(S)}{d|S|},\qquad h_V=\min_{0<|S|\le n/2}\frac{|\partial_VS|}{|S|}.$$ For $n=1$, put $\alpha=0$ and leave $\mu_2,\gamma,h,h_V$ undefined; cut-expansion assertions are vacuous. A bounded-degree family is an expander family when its normalized edge expansion has a positive uniform lower bound for $n\ge2$. Polynomial-time constructibility means a uniform algorithm outputs the adjacency list in time polynomial in $n$; neighbor computation in time polynomial in $\log n$ is a stronger requirement. ([[def-spectral-edge-and-vertex-expansion]]).

[F2] For vectors $u,v$ in a real or complex inner product space, $$|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert.$$ Equality holds if and only if $u$ and $v$ are linearly dependent, including the case in which either vector is zero. ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).


## Proof

1.1 Set $s=|S|/n$, $t=|T|/n$, $f=\mathbf1_S-s\mathbf1$ and $g=\mathbf1_T-t\mathbf1$. Both are mean zero and have normalized squared norms $s(1-s)$ and $t(1-t)$. Since $M$ preserves constants and their orthogonal complement, $e(S,T)/(nd)-st=\langle f,Mg\rangle$. This counts loops and overlap exactly as specified. [F1]

2.1 Cauchy–Schwarz and the defining operator bound give $|\langle f,Mg\rangle|\le\alpha\sqrt{s(1-s)t(1-t)}$. Multiply by $nd$. Empty or full sets give zero centered vectors and equality; at $n=1$ all sets are of that form. No division by a set size or by $\alpha$ is made. [F2, step 1.1] ∎
