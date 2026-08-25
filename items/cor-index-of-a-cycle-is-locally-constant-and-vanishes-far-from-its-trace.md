---
id: cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace
kind: corollary
title: "The index of a cycle is locally constant off its trace and vanishes far from it"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-winding-number-of-a-cycle-is-integer, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, cor-ml-estimate-for-complex-line-integrals, prop-linearity-of-complex-line-integrals, thm-compact-subset-is-closed-and-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-closed-subspace-of-a-compact-space-is-compact, thm-heine-borel-rn, def-connected-component-and-quasicomponent, cor-components-of-open-subsets-of-rn-are-polygonally-connected, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, thm-infimum-property, def-infimum, lem-complex-conjugation-and-modulus-laws, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, def-integers, thm-int-comm-ring, thm-int-ordered-ring, lem-integer-part, rem-complex-plane-euclidean-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\Gamma=\sum_{k<r}m_k\gamma_k$ be a complex chain which is a cycle, and put
$M(\Gamma)=\sum_{k<r,\,m_k\ne0}|m_k|\,L(\gamma_k)$. Then the trace $\Gamma^\ast$
is compact, $\mathbb C\setminus\Gamma^\ast$ is open, and:

1. for $p_0\notin\Gamma^\ast$ with $d=\inf\{|w-p_0|:w\in\Gamma^\ast\}$ and
   $|p-p_0|<d/2$,
   $$|n(\Gamma,p)-n(\Gamma,p_0)|\le\frac{M(\Gamma)\,|p-p_0|}{\pi d^2},$$
   so $n(\Gamma,\cdot)$ is continuous on $\mathbb C\setminus\Gamma^\ast$;
2. $n(\Gamma,\cdot)$ is constant on every connected component of
   $\mathbb C\setminus\Gamma^\ast$, and each such component is open, so the index
   is locally constant;
3. there is $R>0$ with $n(\Gamma,p)=0$ for every $p$ with $|p|>R$.

Consequently $\Omega_0:=\{p\in\mathbb C\setminus\Gamma^\ast:n(\Gamma,p)=0\}$ is
open and contains $\{p:|p|>R\}$.

If $\Gamma^\ast=\varnothing$ then $d$ is the infimum of the empty set and clause
1 is not asserted; in that case $n(\Gamma,p)=0$ for every $p\in\mathbb C$ and
clauses 2 and 3 hold with $\Omega_0=\mathbb C$.

## Facts & Assumptions

**Given:** A cycle $\Gamma=\sum_{k<r}m_k\gamma_k$; the plane carries the Euclidean metric of [[rem-complex-plane-euclidean-dictionary]].

[L1] The index of a cycle about a point off its trace is an integer ([[thm-winding-number-of-a-cycle-is-integer]]).

[L2] A complex chain is a finite list of pairs $(m_k,\gamma_k)$ and its trace is the union of the $\gamma_k^\ast$ with $m_k\ne0$ ([[def-complex-chain-and-cycle]]).

[L3] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$, and $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$ for $p\notin\Gamma^\ast$ ([[def-integration-and-index-of-complex-chain]]).

[L4] If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$, with $M\ge0$, then $|\int_\gamma f(z)\,dz|\le M\,L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]).

[L5] For continuous $f,g$ on the trace of a rectifiable contour and $\alpha,\beta\in\mathbb C$, $\int_\gamma(\alpha f+\beta g)\,dz=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz$ ([[prop-linearity-of-complex-line-integrals]]).

[L6] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); the continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); a closed bounded interval is compact ([[thm-heine-borel-rn]]).

[L7] The connected component $C(x)$ is the union of all connected subsets containing $x$ ([[def-connected-component-and-quasicomponent]]), and every component of an open subset of $\mathbb R^n$ is open and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[L8] The continuous image of a connected subset is connected ([[thm-continuous-image-of-a-connected-space]]), and a connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).

[L9] A set is closed exactly when its complement is open, and a set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]], [[def-metric-ball]]); a subset is bounded when it is empty or lies inside some ball ([[def-metric-bounded-diameter]]).

[L10] A nonempty subset of $\mathbb R$ bounded below has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]]).

[L11] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L12] Finite sums in the additive commutative monoid of $\mathbb C$ are additive, and complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L13] The integers form an ordered commutative ring and are discrete in $\mathbb R$; in particular the only integer of modulus below $1$ is $0$, and if $m<n$ then $m+\tfrac12$ lies strictly between them and is not an integer ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 Each $\gamma_k^\ast$ is the continuous image of a compact interval, hence compact by [L6], so the trace $\Gamma^\ast$ of [L2] is a finite union of compact sets and is compact by [L6], closed and bounded by [L6], and its complement is open by [L9]. [given, L2, L6, L9]

2.1 Suppose $\Gamma^\ast\ne\varnothing$, fix $p_0\notin\Gamma^\ast$ and put $d=\inf\{|w-p_0|:w\in\Gamma^\ast\}$, which exists by [L10] and is positive because the complement of the closed set $\Gamma^\ast$ is open, so some ball $B(p_0,\varepsilon)$ misses $\Gamma^\ast$ and $d\ge\varepsilon$ by [L9]. For $|p-p_0|<d/2$ and $z\in\Gamma^\ast$ one has $|z-p_0|\ge d$ and $|z-p|>d/2>0$ by [L11], so $p\notin\Gamma^\ast$ and $\bigl|\frac1{z-p}-\frac1{z-p_0}\bigr|=\bigl|\frac{p-p_0}{(z-p)(z-p_0)}\bigr|\le 2|p-p_0|/d^2$. [step 1.1, L9, L10, L11, algebra]

2.2 Let $R_0>0$ satisfy $\Gamma^\ast\subseteq\{z:|z|\le R_0\}$, available from the boundedness in step 1.1 and [L9]. For $|p|>R_0$ and $z\in\Gamma^\ast$, [L11] gives $|z-p|\ge|p|-R_0>0$, so [L3], [L4] and [L12] give $|n(\Gamma,p)|\le M(\Gamma)/\bigl(2\pi(|p|-R_0)\bigr)$. [step 1.1, L3, L4, L9, L11, L12]

3.1 For $k$ with $m_k\ne0$ the trace $\gamma_k^\ast$ lies in $\Gamma^\ast$, so the bound of step 2.1 holds on it and [L4] gives $\bigl|\int_{\gamma_k}\bigl(\frac1{z-p}-\frac1{z-p_0}\bigr)dz\bigr|\le 2|p-p_0|L(\gamma_k)/d^2$; combining the terms with [L3], [L5], [L11] and [L12] yields $|n(\Gamma,p)-n(\Gamma,p_0)|\le M(\Gamma)|p-p_0|/(\pi d^2)$, which is clause 1 and makes $n(\Gamma,\cdot)$ continuous at $p_0$. [step 2.1, L3, L4, L5, L11, L12]

3.2 Take $R=R_0+M(\Gamma)/(2\pi)+1$. For $|p|>R$ step 2.2 gives $|n(\Gamma,p)|<1$, and $n(\Gamma,p)$ is an integer by [L1], so it is $0$ by [L13]; this is clause 3. [step 2.2, L1, L13]

4.1 Let $C$ be a connected component of $\mathbb C\setminus\Gamma^\ast$. By [L7], applied to the open set of step 1.1, the component $C$ is open and polygonally connected, hence connected; by [L1] the index is integer-valued and by step 3.1 it is continuous, so [L8] makes its image on $C$ a connected subset of $\mathbb R$. That image lies in $\mathbb Z$, so [L13] forces it to be a single point. This is clause 2. [step 1.1, step 3.1, L1, L7, L8, L13]

5.1 By step 4.1 the set $\Omega_0$ is a union of components of the open set $\mathbb C\setminus\Gamma^\ast$, each open by [L7], hence open; and it contains $\{p:|p|>R\}$ by step 3.2. If $\Gamma^\ast=\varnothing$ then every $m_k$ is zero or $r=0$, so $\int_\Gamma f\,dz=0$ for every $f$ by [L3] and $n(\Gamma,p)=0$ for every $p\in\mathbb C$, giving $\Omega_0=\mathbb C$. [step 3.2, step 4.1, L3, L7] ∎
