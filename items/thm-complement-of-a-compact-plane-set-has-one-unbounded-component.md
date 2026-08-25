---
id: thm-complement-of-a-compact-plane-set-has-one-unbounded-component
kind: theorem
title: "The complement of a compact plane set has exactly one unbounded connected component"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-plane-exterior-of-a-closed-disc-is-path-connected, def-connected-component-and-quasicomponent, thm-components-partition-and-are-closed, thm-unions-of-connected-sets, thm-compact-subset-is-closed-and-bounded, cor-rn-is-polygonally-connected-and-locally-path-connected, def-metric-bounded-diameter, def-metric-ball, def-metric-topology, cor-archimedean-reciprocal, rem-complex-plane-euclidean-dictionary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $K\subseteq\mathbb C$ be compact. Then $\mathbb C\setminus K$ has exactly one
unbounded connected component $U_\infty$, and every other component is bounded.
Moreover, whenever $R>0$ satisfies $K\subseteq\{z:|z|\le R\}$, the exterior
$\{z:|z|>R\}$ is contained in $U_\infty$.

The empty set is covered: $\mathbb C\setminus\varnothing=\mathbb C$ has the
single component $\mathbb C$, which is unbounded.

## Facts & Assumptions

**Given:** A compact set $K\subseteq\mathbb C$; the plane is read as $\mathbb R^2$ with its Euclidean metric through [[rem-complex-plane-euclidean-dictionary]].

[L1] For $c\in\mathbb C$ and $R>0$, the set $\{z:|z-c|>R\}$ is path-connected and a connected subset of $\mathbb C$ ([[lem-plane-exterior-of-a-closed-disc-is-path-connected]]).

[L2] The connected component $C(x)$ is the union of all connected subsets containing $x$ ([[def-connected-component-and-quasicomponent]]).

[L3] $C(x)$ contains every connected subset containing $x$; distinct components are disjoint; every point lies in its own component, and the components cover the space ([[thm-components-partition-and-are-closed]]).

[L4] A union of connected subsets with a common point is connected ([[thm-unions-of-connected-sets]]).

[L5] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L6] A subset $A$ of a metric space is bounded when $A=\varnothing$ or $A\subseteq B(x_0,r)$ for some $x_0$ and some real $r>0$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

[L7] A set is closed exactly when its complement is open ([[def-metric-topology]]).

[L8] For $n\ge1$, $\mathbb R^n$ is polygonally connected and connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[L9] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 By [L5] the set $K$ is closed and bounded, so by [L6] there are $x_0$ and $s>0$ with $K\subseteq B(x_0,s)$, and then $K\subseteq\{z:|z|\le R\}$ for $R=|x_0|+s>0$; if $K=\varnothing$ any $R>0$ serves. By [L7] the complement $\mathbb C\setminus K$ is open. [given, L5, L6, L7]

1.2 Fix any $R>0$ with $K\subseteq\{z:|z|\le R\}$ and put $E_R=\{z:|z|>R\}$. Then $E_R\subseteq\mathbb C\setminus K$, and $E_R$ is a connected subset of $\mathbb C$ by [L1]; it is nonempty, since $2R\in E_R$, and unbounded, since for every real $r>0$ and every $x_0$ the number $R+|x_0|+r$ has modulus exceeding $R$ and lies outside $B(x_0,r)$, so no ball of [L6] contains $E_R$. [given, L1, L6, L9]

2.1 Let $z_0\in E_R$ and let $U_\infty:=C(z_0)$ be its component in $\mathbb C\setminus K$. The set $E_R$ is a connected subset of $\mathbb C\setminus K$ containing $z_0$, so $E_R\subseteq U_\infty$ by [L2] and [L3]; hence $U_\infty$ is unbounded by step 1.2 and [L6]. This holds for every admissible $R$, which is the final clause of the statement. [step 1.1, step 1.2, L2, L3, L6]

3.1 Let $C$ be a component of $\mathbb C\setminus K$ with $C\ne U_\infty$. By [L3] the two are disjoint, so $C\cap E_R=\varnothing$ by step 2.1, that is $C\subseteq\{z:|z|\le R\}\subseteq B(0,R+1)$; hence $C$ is bounded by [L6]. [step 2.1, L3, L6]

4.1 Steps 2.1 and 3.1 give exactly one unbounded component, namely $U_\infty$, with every other component bounded. When $K=\varnothing$ the complement is $\mathbb C$, which is connected by [L8], so by [L3] and [L4] it is its own single component and that component is $U_\infty$. [step 2.1, step 3.1, L3, L4, L8] ∎
