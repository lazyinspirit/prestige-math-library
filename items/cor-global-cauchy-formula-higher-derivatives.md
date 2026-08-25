---
id: cor-global-cauchy-formula-higher-derivatives
kind: corollary
title: "The higher-derivative form of the global Cauchy formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-global-cauchy-integral-formula-homology, lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace, cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-cauchy-integral-formula-higher-derivatives, thm-induction-principle, def-factorial-and-falling-factorial, thm-algebra-of-complex-derivatives, def-complex-integer-powers, def-integration-and-index-of-complex-chain, def-null-homologous-and-homologous-complex-cycles, def-connected-component-and-quasicomponent, def-metric-topology, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be holomorphic,
and let $\Gamma$ be a complex chain which is a cycle, with trace in $\Omega$ and
null-homologous in $\Omega$. Then for every natural number $m$ and every
$z\in\Omega\setminus\Gamma^\ast$

$$n(\Gamma,z)\,f^{(m)}(z)=\frac{m!}{2\pi i}\int_\Gamma\frac{f(\zeta)}{(\zeta-z)^{m+1}}\,d\zeta,$$

with $f^{(0)}=f$. The case $m=0$ is the integral formula already proved.

## Facts & Assumptions

**Given:** An open $\Omega$, a holomorphic $f:\Omega\to\mathbb C$, and a cycle $\Gamma$ with $\Gamma^\ast\subseteq\Omega$ which is null-homologous in $\Omega$.

[L1] Under these hypotheses, $n(\Gamma,z)f(z)=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}\,d\zeta$ for every $z\in\Omega\setminus\Gamma^\ast$ ([[thm-global-cauchy-integral-formula-homology]]).

[L2] For a chain $\Gamma$ and $\varphi$ continuous on $\Gamma^\ast$, the functions $F_j(z)=(2\pi i)^{-1}\int_\Gamma\varphi(\zeta)(\zeta-z)^{-j}\,d\zeta$ are holomorphic on $\mathbb C\setminus\Gamma^\ast$ for every natural $j\ge1$ and satisfy $F_j'=jF_{j+1}$ ([[lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace]]).

[L3] For a cycle $\Gamma$ the trace is compact, the index is constant on every connected component of $\mathbb C\setminus\Gamma^\ast$, and each such component is open ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L4] A holomorphic function is smooth in the real coordinates ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]) and has complex derivatives of every natural order ([[thm-cauchy-integral-formula-higher-derivatives]]); a complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L5] If a property holds at $0$ and passes from $j$ to $j+1$, it holds for every natural number ([[thm-induction-principle]]).

[L6] $0!=1$ and $(j+1)!=j!\,(j+1)$ ([[def-factorial-and-falling-factorial]]).

[L7] A constant multiple of a function complex differentiable at a point is complex differentiable there with the corresponding derivative ([[thm-algebra-of-complex-derivatives]]).

[L8] Negative integer powers are defined exactly for nonzero complex bases ([[def-complex-integer-powers]]).

[L9] $n(\Gamma,z)=(2\pi i)^{-1}\int_\Gamma d\zeta/(\zeta-z)$ for $z\notin\Gamma^\ast$ ([[def-integration-and-index-of-complex-chain]]), and null-homology in $\Omega$ means the index vanishes at every point outside $\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L10] The connected component of a point is the union of all connected subsets containing it ([[def-connected-component-and-quasicomponent]]), and a set is closed exactly when its complement is open ([[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 The trace $\Gamma^\ast$ is compact by [L3], hence closed, so $\mathbb C\setminus\Gamma^\ast$ is open by [L10] and $\Omega\setminus\Gamma^\ast$ is open. The restriction of $f$ to $\Gamma^\ast$ is continuous by [L4], so the functions $F_j(z)=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-j}\,d\zeta$ of [L2] are defined and holomorphic on $\mathbb C\setminus\Gamma^\ast$ with $F_j'=jF_{j+1}$, the powers being legitimate by [L8]. [given, L2, L3, L4, L8, L10]

1.2 By [L4] the function $f$ has complex derivatives $f^{(m)}$ of every natural order on $\Omega$. [given, L4]

2.1 An induction on $j$ ([L5]) using $F_1'=F_2$, the relation $F_j'=jF_{j+1}$ of step 1.1, [L6] and [L7] gives $F_1^{(j)}=j!\,F_{j+1}$ on $\mathbb C\setminus\Gamma^\ast$ for every natural $j$, the case $j=0$ reading $F_1=0!\,F_1$. [step 1.1, L5, L6, L7]

2.2 Fix $z_0\in\Omega\setminus\Gamma^\ast$ and let $C$ be the connected component of $z_0$ in $\mathbb C\setminus\Gamma^\ast$. By [L3] the set $C$ is open and $n(\Gamma,\cdot)$ is a constant $k$ on it, so $W=C\cap\Omega$ is an open subset of $\Omega\setminus\Gamma^\ast$ containing $z_0$ on which the index has the constant value $k$. [step 1.1, L3, L9, L10]

3.1 By [L1] the identity $k\,f=F_1$ holds on $W$; both sides are holomorphic there by steps 1.1 and 1.2, and complex differentiation is a local operation, so differentiating $m$ times on $W$ and using [L7] gives $k\,f^{(m)}=F_1^{(m)}$ on $W$. [step 1.2, step 2.2, L1, L7]

4.1 Combining step 3.1 with step 2.1 at the point $z_0$ gives $n(\Gamma,z_0)f^{(m)}(z_0)=k\,f^{(m)}(z_0)=m!\,F_{m+1}(z_0)$, which is the displayed formula; since $z_0\in\Omega\setminus\Gamma^\ast$ was arbitrary and $m$ was an arbitrary natural number, the formula holds throughout, and at $m=0$ it is [L1] again by [L6]. [step 2.1, step 3.1, L1, L6] ∎
