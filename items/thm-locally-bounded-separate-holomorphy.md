---
id: thm-locally-bounded-separate-holomorphy
kind: theorem
title: "Locally bounded and separately holomorphic implies holomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz, thm-osgood-lemma-in-several-complex-variables, def-separately-holomorphic-function, def-holomorphic-function-in-several-complex-variables, lem-continuity-is-local-and-pastes, def-balls-and-polydiscs-in-complex-euclidean-space, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, rem-complex-euclidean-space-dictionary, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: true
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
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open and let $f:U\to\mathbb C$ be
separately holomorphic and **locally bounded**: every point of $U$ has a
neighbourhood on which $|f|$ is bounded. Then $f$ is continuous on $U$ and
holomorphic on $U$.

The local-boundedness hypothesis is used, and it is not shown here to be
removable: this page carries no theorem that separate holomorphy alone implies
holomorphy, and none of its results is applied as if it did.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$ and a separately holomorphic, locally bounded $f:U\to\mathbb C$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] If $f$ is separately holomorphic on $\Delta_\rho(a)$ with $|f|\le M$ there and $0<\theta<1$, then $|f(w)-f(z)|\le\frac{M}{1-\theta}\bigl(\sum_{k<m}\rho_k^{-1}\bigr)\lVert w-z\rVert$ for $z,w\in\overline\Delta_{\theta\rho}(a)$, so $f$ is Lipschitz there ([[lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz]]).

[L2] A continuous separately holomorphic function on an open subset of $\mathbb C^m$ is holomorphic ([[thm-osgood-lemma-in-several-complex-variables]]).

[L3] Separate holomorphy is a condition on the slices through each point of the domain ([[def-separately-holomorphic-function]]), and holomorphic means complex differentiable at every point ([[def-holomorphic-function-in-several-complex-variables]]).

[L4] A function whose restrictions to the members of an open cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]]).

[L5] $\Delta_r(a)$ and $\overline\Delta_r(a)$ are defined coordinatewise by $|z_k-a_k|<r_k$ and $\le r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[L6] A set is open exactly when each of its points admits a ball inside it, $B(x,\varepsilon)=\{y:d(x,y)<\varepsilon\}$, and a subset is bounded when it is empty or lies inside a ball ([[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L7] $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in U$. Local boundedness and [L6] give $\varepsilon>0$ and $M\ge0$ with $B(a,\varepsilon)\subseteq U$ and $|f|\le M$ on $B(a,\varepsilon)$, after intersecting the bounding neighbourhood with a ball inside $U$. Put $\rho_k=\varepsilon/(2\sqrt m)$; then $\Delta_\rho(a)\subseteq B(a,\varepsilon)\subseteq U$, since $\lVert z-a\rVert^2=\sum_{k<m}|z_k-a_k|^2<m\rho_0^2=\varepsilon^2/4$ for $z\in\Delta_\rho(a)$ by [L5] and the dictionary. [given, L5, L6, L7]

2.1 The restriction of $f$ to $\Delta_\rho(a)$ is separately holomorphic by [L3], since a slice domain inside $\Delta_\rho(a)$ is an open subset of the corresponding slice domain inside $U$ and a restriction of a one-variable holomorphic function to an open subset is holomorphic; and $|f|\le M$ there by step 1.1. [step 1.1, L3, L5]

3.1 Applying [L1] with $\theta=\tfrac12$, the function $f$ is Lipschitz, hence continuous, on $\overline\Delta_{\rho/2}(a)$, and in particular on the open set $\Delta_{\rho/2}(a)$, which contains $a$ and is open by [L5] and [L6]. [step 1.1, step 2.1, L1, L5, L6]

4.1 The sets $\Delta_{\rho/2}(a)$ obtained in step 3.1 as $a$ ranges over $U$ form an open cover of $U$ on each member of which $f$ is continuous, so $f$ is continuous on $U$ by [L4]. [step 3.1, L4, L6]

5.1 By step 4.1 the function $f$ is continuous on $U$ and separately holomorphic by hypothesis, so [L2] makes it holomorphic on $U$. The bound $M$ entered only through step 1.1 and [L1]; nothing above removes it, and this page proves no statement that would. [given, step 4.1, L1, L2, L3] ∎
