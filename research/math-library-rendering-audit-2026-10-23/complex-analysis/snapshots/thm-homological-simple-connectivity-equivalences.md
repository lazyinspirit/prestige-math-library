---
id: thm-homological-simple-connectivity-equivalences
kind: theorem
title: "Equivalent characterisations of a homologically simply connected domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homologically-simply-connected-complex-domain, def-null-homologous-and-homologous-complex-cycles, thm-primitives-homologically-simply-connected-domains, cor-cycle-integral-of-a-derivative-vanishes, cor-holomorphic-logarithm-has-the-logarithmic-derivative, def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, def-complex-primitive, thm-algebra-of-complex-derivatives, def-complex-domain, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-complex-exponential-surjects-onto-the-punctured-plane, thm-zero-complex-derivative-on-a-domain-implies-constant, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-complex-differentiability-implies-continuity, thm-cauchy-integral-formula-higher-derivatives, thm-complex-exponential-addition-and-real-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4, Theorem 14"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $U$ be a complex domain. The following are equivalent.

1. $U$ is homologically simply connected: every complex chain which is a cycle
   with trace in $U$ is null-homologous in $U$.
2. Every holomorphic function on $U$ has a primitive on $U$.
3. Every holomorphic nowhere-zero function on $U$ has a holomorphic logarithm on
   $U$.
4. For every $p\in\mathbb C\setminus U$, the function $z\mapsto1/(z-p)$ has a
   primitive on $U$.
5. $\int_\Gamma f(z)\,dz=0$ for every holomorphic $f$ on $U$ and every cycle
   $\Gamma$ with trace in $U$.
6. $\int_\Gamma\frac{dz}{z-p}=0$ for every cycle $\Gamma$ with trace in $U$ and
   every $p\in\mathbb C\setminus U$.

## Facts & Assumptions

**Given:** A complex domain $U$.

[L1] A complex domain is homologically simply connected when every cycle with trace in it is null-homologous in it ([[def-homologically-simply-connected-complex-domain]]), and a cycle $\Gamma$ with trace in $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,p)=0$ for every $p\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L2] Every holomorphic function on a homologically simply connected complex domain has a primitive there ([[thm-primitives-homologically-simply-connected-domains]]).

[L3] If $\Gamma$ is a cycle whose trace lies in an open $V$ and $F$ is a primitive on $V$ of a continuous $f$ with $F'=f$ continuous, then $\int_\Gamma f\,dz=0$ ([[cor-cycle-integral-of-a-derivative-vanishes]]).

[L4] If $L$ and $h$ are holomorphic on an open set with $\exp\circ L=h$, then $h$ is nowhere zero and $L'=h'/h$; for $h(z)=z-p$ on a set missing $p$ this gives $L'(z)=1/(z-p)$ ([[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[L5] $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$ for a chain $\Gamma$ and $p\notin\Gamma^\ast$ ([[def-integration-and-index-of-complex-chain]]), a chain being a finite list of integer-weighted complex contours ([[def-complex-chain-and-cycle]]).

[L6] A primitive of $f$ on $V$ is a holomorphic $F$ with $F'=f$ on $V$ ([[def-complex-primitive]]).

[L7] Linear combinations, products and nonvanishing quotients of functions complex differentiable at a point are complex differentiable there; constants have derivative $0$ and the identity has derivative $1$ ([[thm-algebra-of-complex-derivatives]]).

[L8] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]).

[L9] The complex exponential is entire with $\exp'=\exp$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]), and if $f:V\to W$ and $g:W\to\mathbb C$ are complex differentiable at the relevant points, then $(g\circ f)'(a)=g'(f(a))f'(a)$ ([[thm-chain-rule-for-complex-derivatives]]).

[L10] The complex exponential maps $\mathbb C$ onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[L11] A holomorphic function with vanishing derivative on a complex domain is constant there ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[L12] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L13] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]), and every holomorphic function has complex derivatives of all natural orders locally ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L14] $\exp(z+w)=\exp z\,\exp w$, so $\exp(w)\exp(-w)=1$ for every complex $w$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

**Proof technique:** direct.

1.1 Condition 1 implies condition 2: this is [L2] applied to the domain $U$, which condition 1 makes homologically simply connected by [L1]. [given, L1, L2]

1.2 Condition 2 implies condition 3, argued from condition 2 alone and not from the theorem about homologically simply connected domains. Let $f$ be holomorphic and nowhere zero on $U$; by [L13] the derivative $f'$ is holomorphic, so $f'/f$ is holomorphic on $U$ by [L7], and condition 2 supplies a primitive $G$ with $G'=f'/f$ ([L6]). Fix $z_0\in U$, nonempty by [L8], and use [L10] to pick $w_0$ with $\exp(w_0)=f(z_0)$; put $F=G-G(z_0)+w_0$. Since [L12] shows the exponential never vanishes, $\exp(-F)$ is holomorphic and nowhere zero, so $f\exp(-F)$ is holomorphic with derivative $\bigl(f'-f\,(f'/f)\bigr)\exp(-F)=0$ on $U$ by [L7] and [L9], hence constant by [L11] and [L8]; its value at $z_0$ is $\exp(w_0)\exp(-w_0)=1$ by [L14], so $\exp\circ F=f$. [given, L6, L7, L8, L9, L10, L11, L12, L13, L14]

1.3 Condition 3 implies condition 4. Let $p\in\mathbb C\setminus U$; then $h(z)=z-p$ is holomorphic and nowhere zero on $U$ by [L7], so condition 3 gives a holomorphic $g$ on $U$ with $\exp\circ g=h$, and [L4] gives $g'(z)=1/(z-p)$; thus $g$ is a primitive of $z\mapsto1/(z-p)$ on $U$ in the sense of [L6]. [given, L4, L6, L7]

1.4 Condition 4 implies condition 6. Let $\Gamma$ be a cycle with trace in $U$ and $p\in\mathbb C\setminus U$. Condition 4 supplies a primitive of $z\mapsto1/(z-p)$ on the open set $U$, whose derivative is that function and is continuous by [L7] and [L13]; so [L3] gives $\int_\Gamma dz/(z-p)=0$. [given, L3, L6, L7, L13]

1.5 Condition 6 implies condition 1. For a cycle $\Gamma$ with trace in $U$ and $p\in\mathbb C\setminus U$, condition 6 and [L5] give $n(\Gamma,p)=0$; by [L1] that is exactly null-homology of $\Gamma$ in $U$, for every such $\Gamma$, which is condition 1. [given, L1, L5]

1.6 Condition 2 implies condition 5. Given a holomorphic $f$ on $U$ and a cycle $\Gamma$ with trace in $U$, condition 2 supplies a primitive $F$ with $F'=f$, continuous by [L13]; so [L3] gives $\int_\Gamma f\,dz=0$. [given, L3, L6, L13]

1.7 Condition 5 implies condition 6. For $p\in\mathbb C\setminus U$ the function $z\mapsto1/(z-p)$ is holomorphic on $U$ by [L7], so condition 5 applied to it gives $\int_\Gamma dz/(z-p)=0$ for every cycle $\Gamma$ with trace in $U$. [given, L5, L7]

2.1 Steps 1.1, 1.2, 1.3, 1.4 and 1.5 close the cycle of implications $1\Rightarrow2\Rightarrow3\Rightarrow4\Rightarrow6\Rightarrow1$, so conditions 1, 2, 3, 4 and 6 are equivalent; steps 1.6 and 1.7 insert condition 5 between conditions 2 and 6, which are already known equivalent, so all six conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7] ∎
