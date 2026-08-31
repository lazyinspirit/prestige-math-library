---
id: thm-end-germ-of-path-continuation-is-independent-of-the-chain
kind: theorem
title: "The terminal germ of a continuation along a fixed path is chain-independent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-refinement-of-analytic-continuation-chains, def-analytic-continuation-along-a-path, def-holomorphic-germ, def-function-element-and-direct-analytic-continuation, thm-identity-theorem-holomorphic-functions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.4"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Henry Wilton, Riemann Surfaces lecture notes, §9.2"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
---

## Statement

Let $\gamma:[0,1]\to\Omega$ be a path and let $\xi_0$ be a holomorphic germ at
$\gamma(0)$. If two admissible continuation chains of $\xi_0$ along $\gamma$
exist, then they determine the same terminal germ at $\gamma(1)$.

## Facts & Assumptions

**Given:** A path $\gamma:[0,1]\to\Omega$, an initial germ $\xi_0$ at $\gamma(0)$, and two admissible continuation chains of $\xi_0$ along $\gamma$.

[L1] Two admissible continuation chains along the same path admit a common refinement whose subinterval images lie in one element of each chain ([[lem-refinement-of-analytic-continuation-chains]]).

[L2] A holomorphic germ at a point is equality on some neighbourhood of that point, and an admissible continuation chain requires successive representatives to agree as germs at the joining path points ([[def-holomorphic-germ]], [[def-analytic-continuation-along-a-path]]).

[L3] If two holomorphic functions on a complex domain agree on a set with an accumulation point in that domain, then they agree on the whole domain ([[thm-identity-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], refine both chains so that they use the same subdivision $0=u_0<\cdots<u_r=1$, and on each interval $[u_k,u_{k+1}]$ the path image lies in both a function element $(f_k,U_k)$ from the first chain and a function element $(g_k,V_k)$ from the second. [L1]

1.2 At the initial point $\gamma(u_0)=\gamma(0)$ the two first representatives have germ $\xi_0$, so [L2] gives an open neighbourhood of $\gamma(0)$ on which $f_0=g_0$. [given, L2]

2.1 Assume inductively that $f_k$ and $g_k$ have the same germ at the left endpoint $\gamma(u_k)$. The path segment $\gamma([u_k,u_{k+1}])$ is connected, so it lies in one connected component $W_k$ of $U_k\cap V_k$. By [L2] the functions $f_k$ and $g_k$ agree on a neighbourhood of $\gamma(u_k)$ contained in $W_k$, and [L3] therefore gives $f_k=g_k$ on all of $W_k$. In particular they have the same germ at the right endpoint $\gamma(u_{k+1})$. [L2, L3, step 1.2, cases]

3.1 Applying step 2.1 successively for $k=0,\dots,r-1$ shows that the two refined chains have the same germ at every subdivision point, hence especially at $\gamma(1)$. [step 2.1, induction]

4.1 The terminal germs of the original chains equal those of the refinements, so the terminal germ depends only on $\xi_0$ and $\gamma$, not on the chosen admissible chain. [step 1.1, step 3.1] ∎
