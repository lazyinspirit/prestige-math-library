---
id: ex-periods-of-a-holomorphic-function-on-an-annulus
kind: example
title: "Every cycle in a round annulus has one period, that of the central circle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-contour-integrals-homologous-cycles, def-null-homologous-and-homologous-complex-cycles, thm-winding-number-circle-traversed-k-times, thm-winding-number-chain-laws, cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace, thm-circle-integrals-of-integer-monomials, def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, lem-plane-exterior-of-a-closed-disc-is-path-connected, def-connected-component-and-quasicomponent, thm-components-partition-and-are-closed, def-convex-subset-of-euclidean-space, def-path-connected, thm-path-connected-implies-connected, lem-complex-conjugation-and-modulus-laws, def-metric-bounded-diameter, thm-winding-number-of-a-cycle-is-integer, thm-algebra-of-complex-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.7"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Example

Let $0<r_1<r_2$, let $A=\{z:r_1<|z|<r_2\}$, and let $C(t)=\rho\exp(it)$ on
$[0,2\pi]$ for a fixed $\rho$ with $r_1<\rho<r_2$. Let $\Gamma$ be any complex
chain which is a cycle with trace in $A$, and put $k=n(\Gamma,0)$, an integer.
Then $\Gamma$ and the chain $kC$, consisting of $C$ with coefficient $k$, are
homologous in $A$, and consequently

$$\int_\Gamma f(z)\,dz=k\int_C f(z)\,dz$$

for every holomorphic $f$ on $A$. For $f(z)=1/z$ the right-hand factor is
$\int_C dz/z=2\pi i$, so $\int_\Gamma dz/z=2\pi ik$.

## Facts & Assumptions

**Given:** Radii $0<r_1<\rho<r_2$, the annulus $A$, the circle $C$, and a cycle $\Gamma$ with trace in $A$.

[L1] If $f$ is holomorphic on an open $\Omega$ and two cycles with traces in $\Omega$ are homologous in $\Omega$, their integrals of $f$ agree ([[cor-contour-integrals-homologous-cycles]]).

[L2] Two cycles with traces in $\Omega$ are homologous in $\Omega$ exactly when their indices agree at every point of $\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L3] For $a\in\mathbb C$, $r>0$ and $k'\in\mathbb Z$, the contour $a+r\exp(ik't)$ on $[0,2\pi]$ has index $k'$ for $|z-a|<r$ and $0$ for $|z-a|>r$, with trace $\{|z-a|=r\}$ when $k'\ne0$ ([[thm-winding-number-circle-traversed-k-times]]).

[L5] For a cycle $\Gamma$ the trace is compact, the index is constant on every connected component of $\mathbb C\setminus\Gamma^\ast$, each such component is open, and there is $R>0$ with $n(\Gamma,p)=0$ whenever $|p|>R$ ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L6] For $a\in\mathbb C$, $r>0$ and every integer $m$, the positively oriented circle $a+r\exp(it)$ on $[0,2\pi]$ satisfies $\int_\gamma(z-a)^m\,dz=2\pi i$ when $m=-1$ and $0$ otherwise ([[thm-circle-integrals-of-integer-monomials]]).

[L7] $\int_\Gamma f\,dz=\sum_{k'<r,\,m_{k'}\ne0}m_{k'}\int_{\gamma_{k'}}f\,dz$ and $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$ ([[def-integration-and-index-of-complex-chain]]), a chain being a finite list of integer-weighted contours, and a one-term chain carried by a closed contour being a cycle ([[def-complex-chain-and-cycle]]).

[L8] For $c\in\mathbb C$ and every real $R'>0$, the set $\{z:|z-c|\ge R'\}$ is path-connected and connected ([[lem-plane-exterior-of-a-closed-disc-is-path-connected]]).

[L9] The connected component of a point is the union of all connected subsets containing it ([[def-connected-component-and-quasicomponent]]) and contains every connected subset containing that point ([[thm-components-partition-and-are-closed]]).

[L10] A set is convex when it contains the segment between any two of its points ([[def-convex-subset-of-euclidean-space]]); a subset joined by paths inside it is path-connected ([[def-path-connected]]) and hence connected ([[thm-path-connected-implies-connected]]).

[L11] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); a subset is bounded when it is empty or lies inside some ball ([[def-metric-bounded-diameter]]).

[L12] The index of a cycle about a point off its trace is an integer ([[thm-winding-number-of-a-cycle-is-integer]]).

[L13] Constants and the identity are holomorphic, and nonvanishing quotients of holomorphic functions are holomorphic ([[thm-algebra-of-complex-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 The trace of $\Gamma$ lies in $A$, so it misses the closed disc $D=\{|z|\le r_1\}$ and the closed exterior $E=\{|z|\ge r_2\}$, whose union is $\mathbb C\setminus A$. The number $k=n(\Gamma,0)$ is defined because $0\notin A$, and it is an integer by [L12]. [given, L7, L12]

1.2 By [L3] the contour $C$ is closed, with index $1$ on $D$ and $0$ on $E$. Since $kC$ is the one-term chain carrying $C$ with coefficient $k$, [L7] gives $n(kC,p)=k\,n(C,p)$ at every $p$ off $\{|z|=\rho\}$, so it is $k$ on $D$, since $|p|\le r_1<\rho$ there, and $0$ on $E$, since $|p|\ge r_2>\rho$ there; its trace is contained in $\{|z|=\rho\}\subseteq A$, and it is a cycle by [L7]. [given, L3, L7]

2.1 $D$ is convex by [L10] and [L11], hence connected, and $E$ is connected by [L8]; both are subsets of $\mathbb C\setminus\Gamma^\ast$ by step 1.1. [step 1.1, L8, L10, L11]

3.1 By [L9] the connected set $D$ lies inside a single component of $\mathbb C\setminus\Gamma^\ast$, on which the index is constant by [L5]; since $0\in D$, this gives $n(\Gamma,p)=k$ for every $p\in D$. [step 2.1, L5, L9]

3.2 By [L9] the connected set $E$ lies inside a single component of $\mathbb C\setminus\Gamma^\ast$; by [L5] there is $R>0$ with $n(\Gamma,q)=0$ whenever $|q|>R$, and $E$ contains the point $\max(r_2,R)+1$ of modulus greater than $R$, so the constant value of the index on that component is $0$: thus $n(\Gamma,p)=0$ for every $p\in E$. [step 2.1, L5, L9, L11]

4.1 Steps 3.1, 3.2 and 1.2 make the indices of $\Gamma$ and $kC$ agree at every point of $\mathbb C\setminus A=D\cup E$, so [L2] makes them homologous in the open set $A$, and [L1] gives $\int_\Gamma f\,dz=\int_{kC}f\,dz=k\int_Cf\,dz$ for every holomorphic $f$ on $A$, the last equality by [L7]. [step 3.1, step 3.2, step 1.2, L1, L2, L7]

5.1 The identity map $z\mapsto z$ is holomorphic and nonvanishing on $A$, because $0\notin A$; hence [L13] makes $f(z)=1/z$ holomorphic on $A$. Then [L6] with $a=0$ and $m=-1$ gives $\int_C dz/z=2\pi i$, so step 4.1 yields $\int_\Gamma dz/z=2\pi ik$. [step 4.1, L6, L13] ∎
