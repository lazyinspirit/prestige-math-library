---
id: prop-star-shaped-plane-domains-are-homologically-simply-connected
kind: proposition
title: "Star-shaped plane domains are homologically simply connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-homologically-simply-connected-complex-domain, def-null-homologous-and-homologous-complex-cycles, cor-cycle-integral-of-a-derivative-vanishes, thm-holomorphic-primitive-on-star-shaped-domain, def-star-shaped-open-subset-of-rn, rem-plane-star-shaped-and-convex-dictionary, def-convex-subset-of-euclidean-space, thm-algebra-of-complex-derivatives, def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, def-complex-domain, def-complex-primitive, def-path-connected, thm-path-connected-implies-connected, lem-continuity-is-local-and-pastes, cor-complex-differentiability-implies-continuity]
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
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be nonempty, open, and star-shaped with respect to some
$a\in U$ ([[def-star-shaped-open-subset-of-rn]]). Then $U$ is a complex domain
and is homologically simply connected
([[def-homologically-simply-connected-complex-domain]]).

In particular every nonempty convex open subset of $\mathbb C$ is homologically
simply connected, since it is star-shaped with respect to each of its points;
this covers every open disc and $\mathbb C$ itself.

## Facts & Assumptions

**Given:** A nonempty open $U\subseteq\mathbb C$ star-shaped with respect to $a\in U$; the plane identification and its segments are those of [[rem-plane-star-shaped-and-convex-dictionary]].

[L1] A complex domain is homologically simply connected when every cycle with trace in it is null-homologous in it ([[def-homologically-simply-connected-complex-domain]]), and a cycle $\Gamma$ with trace in $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,p)=0$ for every $p\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L2] If $\Gamma$ is a cycle whose trace lies in an open $V$ and $F$ is a primitive on $V$ of a continuous $f$ with $F'=f$ continuous, then $\int_\Gamma f\,dz=0$ ([[cor-cycle-integral-of-a-derivative-vanishes]]).

[L3] If $U\subseteq\mathbb C$ is open and star-shaped with respect to $a\in U$, every holomorphic $f:U\to\mathbb C$ has the primitive $F(z)=\int_{\ell_{az}}f(\zeta)\,d\zeta$ ([[thm-holomorphic-primitive-on-star-shaped-domain]]).

[L4] A nonempty open $U\subseteq\mathbb R^n$ is star-shaped with respect to $a\in U$ when $a+t(x-a)\in U$ for every $x\in U$ and $0\le t\le1$; every convex open set is star-shaped with respect to each of its points ([[def-star-shaped-open-subset-of-rn]], [[def-convex-subset-of-euclidean-space]]).

[L5] Constants and the identity are complex differentiable, and linear combinations, products and nonvanishing quotients of functions complex differentiable at a point are complex differentiable there ([[thm-algebra-of-complex-derivatives]]); a complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L6] $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$ for a chain $\Gamma$ and $p\notin\Gamma^\ast$ ([[def-integration-and-index-of-complex-chain]]), a chain being a finite list of integer-weighted contours ([[def-complex-chain-and-cycle]]).

[L7] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]).

[L8] A subset is path-connected when any two of its points are joined by a continuous map from $[0,1]$ with image inside it ([[def-path-connected]]), and a path-connected subset is connected ([[thm-path-connected-implies-connected]]); a composite of continuous maps is continuous and a function continuous on each member of a finite closed cover is continuous ([[lem-continuity-is-local-and-pastes]]).

[L9] A primitive of $f$ on $V$ is a holomorphic $F$ with $F'=f$ on $V$ ([[def-complex-primitive]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y\in U$ the maps $t\mapsto x+2t(a-x)$ on $[0,\tfrac12]$ and $t\mapsto a+(2t-1)(y-a)$ on $[\tfrac12,1]$ are continuous, take values in $U$ by [L4], and agree at $t=\tfrac12$ with the value $a$; the first begins at $x$ and the second ends at $y$. Thus [L8] joins $x$ to $y$ inside $U$, making $U$ path-connected, hence connected. With $U$ nonempty and open, [L7] makes it a complex domain. [given, L4, L7, L8]

1.2 Let $\Gamma$ be a cycle with trace in $U$ and let $p\in\mathbb C\setminus U$. Then $z\mapsto1/(z-p)$ is holomorphic on $U$ by [L5], since $z-p\ne0$ there. [given, L5, L6]

2.1 By [L3] the function $F(z)=\int_{\ell_{az}}\frac{d\zeta}{\zeta-p}$ is a primitive on $U$ of $z\mapsto1/(z-p)$, and $F'$ equals that function, which is continuous by [L5]. [step 1.2, L3, L5, L9]

3.1 The trace of $\Gamma$ lies in the open set $U$, so [L2] applied with $V=U$, $f(z)=1/(z-p)$ and $F$ of step 2.1 gives $\int_\Gamma\frac{dz}{z-p}=0$, whence $n(\Gamma,p)=0$ by [L6]. [step 1.2, step 2.1, L2, L6]

4.1 Since $\Gamma$ and $p\notin U$ were arbitrary, step 3.1 makes every cycle in $U$ null-homologous in $U$, so the complex domain of step 1.1 is homologically simply connected by [L1]. A nonempty convex open set is star-shaped with respect to each of its points by [L4], so the same conclusion applies to it. [step 1.1, step 3.1, L1, L4] ∎
