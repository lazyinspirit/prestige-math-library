---
id: lem-gr-finite-speed-independence-of-extension
kind: lemma
title: "Finite speed of propagation for linear symmetric hyperbolic systems: cone domination and independence of the extension"
status: published
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-gronwall-integral-inequality, def-ck-and-multi-index-notation-in-several-variables, def-metric-space]
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-metric-space: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.2 (Symmetric Hyperbolic Systems on Manifolds): the invariant principal-symbol definition of a symmetric hyperbolic system on a manifold, with Section 3.1's torus theory supplying the local model"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carrying the hypotheses of the analytic suppliers used below.

Let $T>0$, let $A^\mu:(-T,T)\times\mathbb R^3\to\operatorname{Sym}_m(\mathbb R)$
($\mu=0,1,2,3$) be smooth with $A^0(t,x)\ge aI$ for some constant $a>0$ and all
$(t,x)$, and let $\|A^i(t,x)\|\le b$ for the operator norm and all $i,t,x$. Let
$C:(-T,T)\times\mathbb R^3\to M_m(\mathbb R)$ be smooth and bounded by $K$.

**(a)** Put $\lambda:=\sqrt3\,b/a+1$; then $\lambda A^0(t,x)+\xi_iA^i(t,x)\ge0$ as a
quadratic form for every $(t,x)$ and every $\xi\in\mathbb R^3$ with
$|\xi|\le1$.

**(b)** Let $w\in C^1((-T,T)\times\mathbb R^3;\mathbb R^m)$ solve
$$A^0\partial_tw+A^i\partial_iw+Cw=0 ,$$
and let $x_0\in\mathbb R^3$, $0<t_0<T$, and suppose $w(0,x)=0$ for every
$|x-x_0|\le\lambda t_0$. Then $w(t,x)=0$ for every
$(t,x)\in\{(t,x):0\le t\le t_0,\ |x-x_0|\le\lambda(t_0-t)\}$.

**(c)** [independence of the extension] If $w_1,w_2$ are two solutions of two
such systems whose complete coefficient families, including $C$, agree on an open set containing the
truncated cone $D=\{(t,x):0\le t\le t_0,|x-x_0|\le\lambda(t_0-t)\}$, and if
$w_1(0,x)=w_2(0,x)$ for $|x-x_0|\le\lambda t_0$, then $w_1=w_2$ on $D$.

## Facts & Assumptions

**Given:** Countable Choice and The coefficients, their stated bounds and the $C^1$ solutions, and the point and time determining the compact cone $D$.

[L2] The divergence theorem applies on bounded piecewise $C^1$ domains ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[L3] Continuous nonnegative $E$ satisfying $E(t)\le c\int_0^tE(s)\,ds$ vanishes by Gronwall ([[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 (Correct symbol domination.) For every $|\xi|\le1$, $\|\sum_i\xi_iA^i\|\le\sum_i|\xi_i|\|A^i\|\le b\|\xi\|_1\le\sqrt3\,b$. Hence for every $z$ one has $z^{\mathsf T}(\lambda A^0+\xi_iA^i)z\ge(\lambda a-\sqrt3b)|z|^2=a|z|^2\ge0$. This proves (a). [given, algebra]

1.2 (Energy-current inequality on the compact cone.) Put $j^\mu=w^{\mathsf T}A^\mu w$. Symmetry and the equation give $\partial_\mu j^\mu=w^{\mathsf T}(\partial_tA^0+\sum_i\partial_iA^i-C-C^{\mathsf T})w$. On compact D let $M=\sup_D\|\partial_tA^0+\sum_i\partial_iA^i\|+2K<\infty$. Thus $\partial_\mu j^\mu\le M|w|^2\le(M/a)j^0$ throughout D. [given, algebra]

2.1 (Truncated cone flux.) For $0<\tau<t_0$, apply the divergence theorem to $D_\tau=\{(s,x):0\le s\le\tau,|x-x_0|\le\lambda(t_0-s)\}$. Base flux is $-E(0)$ and top flux is $E(\tau)$, where $E(s)=\int_{|x-x_0|\le\lambda(t_0-s)}j^0(s,x)\,dx$. The lateral outward unit normal is $(\lambda,\xi)/\sqrt{1+\lambda^2}$, so its flux is nonnegative by step 1.1. Step 1.2 gives $E(\tau)\le E(0)+(M/a)\int_0^\tau E(s)\,ds$. The domains avoid the cone vertex, so their boundaries are piecewise C1 as required. [step 1.1, step 1.2, L2, algebra]

3.1 (Vanishing and the vertex.) $E$ is continuous and nonnegative; zero initial data give $E(0)=0$. Gronwall therefore gives $E(s)=0$ for $0\le s<t_0$. Positivity of $A^0$ and continuity of w imply w vanishes on each closed top ball, since a nonzero value would give positive integral on a neighborhood. Letting s increase to t_0 and using continuity also gives $w(t_0,x_0)=0$. This proves (b). [step 2.1, L3, algebra]

4.1 (Independence.) On the common neighborhood of D, subtract the two identical linear equations. The difference $w_1-w_2$ solves the homogeneous system with the common matrices $A^\mu$ and the common zeroth-order coefficient C; it vanishes on the base. The preceding argument uses only coefficients on D and gives equality throughout D. This proves (c). [step 3.1, given, algebra] ∎
