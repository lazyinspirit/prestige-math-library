---
id: lem-expander-walk-contraction
kind: lemma
title: "Expander walk contraction"
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
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §3.1 Definition3.1 and §3.1.1 Theorems3.2–3.3, Lemma3.4, pp25–26."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

Fix a finite $d$-regular adjacency-slot multigraph on $n\ge1$ vertices, with normalized adjacency $M$, and put $\alpha=\|M|_{\mathbf1^\perp}\|$ as in [[def-spectral-edge-and-vertex-expansion]].

A walk that at each step chooses one of the $d$ ports uniformly has transition matrix $M$ and stationary uniform law $u=\mathbf1/n$. For any initial probability vector $p$ and integer $t\ge0$, using the ordinary Euclidean norm,
$$\|M^tp-u\|_2\le\alpha^t\|p-u\|_2,\qquad \operatorname{TV}(M^tp,u)\le\frac{\sqrt n}{2}\alpha^t.$$
For $t=0$ the factor $\alpha^0$ is interpreted as one. For $t\ge1$, the adjacency-slot power has nontrivial norm $\alpha^t$. Here total variation means half the $\ell^1$ distance.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For the regular multigraph and spectral conventions in the stated convention, put $\alpha=\|M|_{\mathbf1^\perp}\|$. For $n\ge2$ order the eigenvalues $1=\mu_1\ge\mu_2\ge\cdots\ge\mu_n$, counting multiplicity, and put $\gamma=1-\mu_2$. Thus $\alpha=\max_{j\ge2}|\mu_j|$, which also controls negative eigenvalues. Write $\operatorname{cut}(S)=\sum_{u\in S,v\notin S}A_{uv}$ and $\partial_VS=\{v\notin S:A_{uv}>0\text{ for some }u\in S\}$. Normalized edge expansion and external vertex expansion are $$h=\min_{0<|S|\le n/2}\frac{\operatorname{cut}(S)}{d|S|},\qquad h_V=\min_{0<|S|\le n/2}\frac{|\partial_VS|}{|S|}.$$ For $n=1$, put $\alpha=0$ and leave $\mu_2,\gamma,h,h_V$ undefined; cut-expansion assertions are vacuous. A bounded-degree family is an expander family when its normalized edge expansion has a positive uniform lower bound for $n\ge2$. Polynomial-time constructibility means a uniform algorithm outputs the adjacency list in time polynomial in $n$; neighbor computation in time polynomial in $\log n$ is a stronger requirement. ([[def-spectral-edge-and-vertex-expansion]]).

[F2] For vectors $u,v$ in a real or complex inner product space, $$|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert.$$ Equality holds if and only if $u$ and $v$ are linearly dependent, including the case in which either vector is zero. ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).


## Proof

1.1 There are $A_{vw}$ slots leading from $v$ to $w$, so one-step transition probability is $M_{vw}$. Symmetry and row sums imply column sums one, hence stationarity of $u$. Starting uniformly, all $nd^t$ port walks of length $t$ have equal probability. [F1]

1.2 Since $p-u$ is mean zero, applying the operator norm bound $t$ times gives the Euclidean contraction (the common normalization of inner products cancels). Moreover $\|p-u\|_2^2=\sum p_v^2-1/n\le1$. Cauchy–Schwarz bounds $\|q\|_1\le\sqrt n\|q\|_2$, giving the total variation assertion. At $t=0$ the norm inequality is equality before the last bound; at $n=1$ the difference is zero. [F1, F2]

2.1 Matrix multiplication counts port walks, so normalized adjacency of the power is $M^t$. On an orthonormal mean-zero eigenbasis its eigenvalues are $\mu_j^t$; for $t\ge1$ their largest absolute value is $\alpha^t$. The zero-dimensional case has both sides zero. The estimate allows $\alpha=1$ and asserts convergence only when $\alpha<1$. [step 1.2, algebra] ∎
