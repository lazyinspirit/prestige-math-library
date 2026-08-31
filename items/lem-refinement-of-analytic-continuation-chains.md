---
id: lem-refinement-of-analytic-continuation-chains
kind: lemma
title: "Two admissible continuation chains along one path admit a common refinement"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-analytic-continuation-along-a-path, thm-lebesgue-number-lemma]
justified_by: []
aliases: []
landmark: false
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
$\gamma(0)$. If

- $(f_0,U_0),\dots,(f_{m-1},U_{m-1})$ over
  $0=t_0<\cdots<t_m=1$, and
- $(g_0,V_0),\dots,(g_{n-1},V_{n-1})$ over
  $0=s_0<\cdots<s_n=1$

are admissible continuation chains for $\xi_0$ along $\gamma$, then there is a
subdivision

$$0=u_0<u_1<\cdots<u_r=1$$

such that for each $k<r$ the subpath $\gamma([u_k,u_{k+1}])$ lies in some
$U_i$ and in some $V_j$. In particular the two chains admit a common
refinement by restricting representatives to these smaller subintervals.

## Facts & Assumptions

**Given:** A path $\gamma:[0,1]\to\Omega$ and two admissible continuation chains for the same initial germ along $\gamma$.

[L1] An admissible continuation chain is given by a finite subdivision of $[0,1]$ and function elements covering the corresponding subpath images ([[def-analytic-continuation-along-a-path]]).

[L2] Every open cover of a compact metric space has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each set $\gamma^{-1}(U_i)$ is open in $[0,1]$, and the containment $\gamma([t_i,t_{i+1}])\subseteq U_i$ gives $[t_i,t_{i+1}]\subseteq\gamma^{-1}(U_i)$. Hence the finite family $\mathcal U:=\{\gamma^{-1}(U_i):0\le i<m\}$ is an open cover of $[0,1]$. Likewise $\mathcal V:=\{\gamma^{-1}(V_j):0\le j<n\}$ is an open cover of $[0,1]$. [L1, given]

1.2 Apply [L2] to the compact interval $[0,1]$ and the two open covers $\mathcal U$ and $\mathcal V$. Let $\delta_{\mathcal U},\delta_{\mathcal V}>0$ be corresponding Lebesgue numbers, put $\delta:=\min\{\delta_{\mathcal U},\delta_{\mathcal V}\}$, and choose a subdivision $0=u_0<u_1<\cdots<u_r=1$ whose mesh is less than $\delta$. Then every interval $[u_k,u_{k+1}]$ has diameter less than both $\delta_{\mathcal U}$ and $\delta_{\mathcal V}$. [L2, choose]

2.1 For each $k<r$, the interval $[u_k,u_{k+1}]$ has diameter less than $\delta_{\mathcal U}$ and less than $\delta_{\mathcal V}$, so the Lebesgue-number property gives indices $i,j$ with $[u_k,u_{k+1}] \subseteq \gamma^{-1}(U_i)$ and $[u_k,u_{k+1}] \subseteq \gamma^{-1}(V_j)$. Equivalently, $\gamma([u_k,u_{k+1}])\subseteq U_i\cap V_j$. Restricting $f_i$ and $g_j$ to these smaller intervals produces the required common refinement. [step 1.1, step 1.2, algebra] ∎
