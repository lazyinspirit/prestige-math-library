---
id: lem-dixon-entire-gluing
kind: lemma
title: "Dixon's glued function is entire and vanishes at infinity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-contour-parameter-integrals-are-holomorphic, lem-holomorphic-difference-quotient-is-jointly-continuous, lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable, lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace, cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace, def-null-homologous-and-homologous-complex-cycles, def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, cor-ml-estimate-for-complex-line-integrals, prop-linearity-of-complex-line-integrals, thm-compact-subset-is-closed-and-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-closed-subspace-of-a-compact-space-is-compact, thm-heine-borel-rn, def-complex-differentiability-holomorphic-and-entire, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, lem-complex-conjugation-and-modulus-laws, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, cor-complex-differentiability-implies-continuity, rem-complex-plane-euclidean-dictionary, thm-algebra-of-complex-derivatives]
justified_by: []
aliases: []
landmark: true
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

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be holomorphic
and let $\Gamma$ be a complex chain which is a cycle, with trace in $\Omega$ and
null-homologous in $\Omega$
([[def-null-homologous-and-homologous-complex-cycles]]). Let $g$ be the filled
difference quotient of $f$ on $\Omega\times\Omega$
([[lem-holomorphic-difference-quotient-is-jointly-continuous]]) and put

$$h_0(z)=\frac1{2\pi i}\int_\Gamma g(\zeta,z)\,d\zeta\ \ (z\in\Omega),\qquad \Omega_0=\{z\in\mathbb C\setminus\Gamma^\ast:n(\Gamma,z)=0\},\qquad h_1(z)=\frac1{2\pi i}\int_\Gamma\frac{f(\zeta)}{\zeta-z}\,d\zeta\ \ (z\in\Omega_0).$$

Then $\Omega_0$ is open, $\Omega\cup\Omega_0=\mathbb C$, $h_0$ is holomorphic on
$\Omega$, $h_1$ is holomorphic on $\Omega_0$, and $h_0=h_1$ on
$\Omega\cap\Omega_0$. Consequently the function $h$ equal to $h_0$ on $\Omega$
and to $h_1$ on $\Omega_0$ is a well-defined entire function; it is bounded, and
for every $\varepsilon>0$ there is $R>0$ with $|h(z)|<\varepsilon$ whenever
$|z|>R$.

## Facts & Assumptions

**Given:** An open $\Omega$, a holomorphic $f:\Omega\to\mathbb C$, and a cycle $\Gamma=\sum_{k<r}m_k\gamma_k$ with $\Gamma^\ast\subseteq\Omega$ which is null-homologous in $\Omega$; the plane carries the Euclidean metric of [[rem-complex-plane-euclidean-dictionary]].

[L1] If $\gamma$ is a rectifiable contour, $W$ is open and $\varphi$ is continuous on $\gamma^\ast\times W$ with $\varphi(w,\cdot)$ holomorphic on $W$ for each $w\in\gamma^\ast$, then $z\mapsto\int_\gamma\varphi(\zeta,z)\,d\zeta$ is holomorphic on $W$ ([[thm-contour-parameter-integrals-are-holomorphic]]).

[L2] The filled difference quotient $g$ of a holomorphic $f$ on $\Omega$ equals $(f(\zeta)-f(z))/(\zeta-z)$ off the diagonal and $f'(z)$ on it, and is continuous on $\Omega\times\Omega$ ([[lem-holomorphic-difference-quotient-is-jointly-continuous]]).

[L3] For each fixed $z\in\Omega$ the map $\zeta\mapsto g(\zeta,z)$ is holomorphic on $\Omega$, and for each fixed $\zeta\in\Omega$ the map $z\mapsto g(\zeta,z)$ is holomorphic on $\Omega$ ([[lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable]]).

[L4] For a complex chain $\Gamma$ and $\varphi$ continuous on $\Gamma^\ast$, the function $z\mapsto(2\pi i)^{-1}\int_\Gamma\varphi(\zeta)(\zeta-z)^{-1}\,d\zeta$ is holomorphic on $\mathbb C\setminus\Gamma^\ast$ ([[lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace]]).

[L5] For a cycle $\Gamma$ the trace $\Gamma^\ast$ is compact, the index is locally constant on $\mathbb C\setminus\Gamma^\ast$, the set $\Omega_0$ of points off the trace where the index vanishes is open, and there is $R_1>0$ with $n(\Gamma,p)=0$ whenever $|p|>R_1$ ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L6] A cycle $\Gamma$ with trace in $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,p)=0$ for every $p\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L7] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$, and $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$ for $p\notin\Gamma^\ast$ ([[def-integration-and-index-of-complex-chain]]); a chain is a finite list of integer-weighted contours whose trace is the union of the $\gamma_k^\ast$ with $m_k\ne0$ ([[def-complex-chain-and-cycle]]).

[L8] If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$, with $M\ge0$, then $|\int_\gamma f\,dz|\le M\,L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]); complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]).

[L9] A compact subset is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); a continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); a closed bounded interval and a closed disc are compact ([[thm-heine-borel-rn]]).

[L10] A function holomorphic on all of $\mathbb C$ is entire, and holomorphy on an open set is complex differentiability at each of its points ([[def-complex-differentiability-holomorphic-and-entire]]).

[L11] A set is closed exactly when its complement is open, and a set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]], [[def-metric-ball]]); a set is bounded when it is empty or lies inside a ball ([[def-metric-bounded-diameter]]).

[L12] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L13] Finite sums in the additive commutative monoid of $\mathbb C$ are additive, and complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L14] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L15] Finite linear combinations of holomorphic functions are holomorphic ([[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By [L5] the trace $\Gamma^\ast$ is compact, the set $\Omega_0$ is open, and there is $R_1>0$ with $n(\Gamma,p)=0$ for $|p|>R_1$; by [L9] and [L11] there is also $R_0>0$ with $\Gamma^\ast\subseteq\{w:|w|\le R_0\}$. [given, L5, L9, L11]

1.2 If $p\notin\Omega$ then $p\notin\Gamma^\ast$, because $\Gamma^\ast\subseteq\Omega$, and $n(\Gamma,p)=0$ by [L6]; so $p\in\Omega_0$. Hence $\Omega\cup\Omega_0=\mathbb C$. [given, L6, L7]

1.3 For each $k<r$ with $m_k\ne0$ the trace $\gamma_k^\ast$ lies in $\Gamma^\ast\subseteq\Omega$, and $g$ is continuous on $\gamma_k^\ast\times\Omega$ by [L2] with $z\mapsto g(w,z)$ holomorphic on $\Omega$ for each fixed $w$ by [L3]; so [L1] makes $z\mapsto\int_{\gamma_k}g(\zeta,z)\,d\zeta$ holomorphic on $\Omega$, and [L15] therefore makes the finite linear combination $h_0$ holomorphic on $\Omega$. [given, L1, L2, L3, L7, L13, L15]

2.1 The restriction of $f$ to $\Gamma^\ast$ is continuous by [L14], so [L4] makes $z\mapsto(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}d\zeta$ holomorphic on $\mathbb C\setminus\Gamma^\ast$; since $\Omega_0\subseteq\mathbb C\setminus\Gamma^\ast$ is open by step 1.1, $h_1$ is holomorphic on $\Omega_0$. [step 1.1, L4, L14]

2.2 Let $z\in\Omega\cap\Omega_0$. Then $z\notin\Gamma^\ast$, so $\zeta\ne z$ for every $\zeta\in\Gamma^\ast$ and [L2] gives $g(\zeta,z)=\bigl(f(\zeta)-f(z)\bigr)/(\zeta-z)$ there; splitting the integral by [L8] and [L13] gives $h_0(z)=h_1(z)-f(z)\,n(\Gamma,z)$ through [L7], and $n(\Gamma,z)=0$ because $z\in\Omega_0$, so $h_0(z)=h_1(z)$. [step 1.1, L2, L7, L8, L13]

2.3 Let $M_f=0$ when $\Gamma^\ast=\varnothing$, and otherwise choose a real $M_f\ge0$ with $|f(w)|\le M_f$ for every $w\in\Gamma^\ast$; such a bound exists because $f$ is continuous on the compact trace by [L14], so its image is compact and therefore bounded by [L9]. Put $M(\Gamma)=\sum_{k<r,\,m_k\ne0}|m_k|L(\gamma_k)$. For $z\in\Omega_0$ with $|z|>R_0$ and $\zeta\in\Gamma^\ast$, [L12] gives $|\zeta-z|\ge|z|-R_0>0$, so [L7], [L8] and [L13] give $|h_1(z)|\le M_fM(\Gamma)/\bigl(2\pi(|z|-R_0)\bigr)$. [step 1.1, L7, L8, L9, L12, L13, L14]

3.1 By steps 1.2, 1.3, 2.1 and 2.2 the assignment $h=h_0$ on $\Omega$ and $h=h_1$ on $\Omega_0$ is a well-defined function on $\mathbb C$, and it is complex differentiable at every point because each point lies in one of the two open sets on which the corresponding piece is holomorphic; so $h$ is entire by [L10]. [step 1.2, step 1.3, step 2.1, step 2.2, L10]

4.1 Let $\varepsilon>0$ and take $R=\max\{R_0,R_1\}+M_fM(\Gamma)/(2\pi\varepsilon)+1$. For $|z|>R$ step 1.1 puts $z$ in $\Omega_0$, so $h(z)=h_1(z)$ by step 3.1 and step 2.3 gives $|h(z)|<\varepsilon$. Taking $\varepsilon=1$ produces one such $R$, and $h$ is continuous on the compact disc $\{|z|\le R\}$ by [L9] and [L14], hence bounded there by [L9]; so $h$ is bounded on $\mathbb C$. If $\Gamma^\ast=\varnothing$ then every integral over $\Gamma$ is $0$ by [L7] and $h$ is identically $0$, which satisfies both conclusions. [step 3.1, step 2.3, L7, L9, L11, L14] ∎
