---
id: cor-homotopy-equivalence-bijection-on-path-components
kind: corollary
title: "A homotopy equivalence induces a bijection between path components"
status: published
origin: session
deps: [def-homotopy-equivalence, def-path-connected, thm-composition-respects-homotopy, thm-product-universal-property, thm-continuity-characterisations-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

For a space $X$, write $\pi_0(X)$ for its set of path components. If $f:X\to Y$ is a homotopy equivalence, then

$$f_*:\pi_0(X)\longrightarrow\pi_0(Y),\qquad f_*(P_X(x)):=P_Y(f(x)),$$

is a well-defined bijection. A homotopy inverse $g:Y\to X$ induces its inverse $g_*$.

## Facts & Assumptions

**Given:** A homotopy equivalence $f:X\to Y$ with homotopy inverse $g:Y\to X$.

[A1] Path components are the equivalence classes for the relation “joined by a path” ([[def-path-connected]]).

[A2] One has $g\circ f\simeq\operatorname{id}_X$ and $f\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-equivalence]]).

[L1] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]]).

[L3] Precomposition and postcomposition preserve homotopies ([[thm-composition-respects-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 If a path $\gamma:I\to X$ joins $x$ to $x'$, then $f\circ\gamma$ is continuous because $(f\circ\gamma)^{-1}[V]=\gamma^{-1}[f^{-1}[V]]$ for every open $V\subseteq Y$; it joins $f(x)$ to $f(x')$. Hence points in one path component of $X$ have images in one path component of $Y$, so $f_*$ is well defined. The same argument defines $g_*$. [A1, L2]

1.2 If continuous maps $u,v:X\to Y$ are homotopic, then $u(x)$ and $v(x)$ lie in the same path component for every $x\in X$: precompose the homotopy by the continuous map from a one-point space selecting $x$, using [L3]; the resulting homotopy of two maps from a point is exactly a path from $u(x)$ to $v(x)$. [L1, L3, A1]

2.1 Apply step 1.2 to $g\circ f\simeq\operatorname{id}_X$. For every $x\in X$, $g(f(x))$ and $x$ lie in the same path component, so $(g_*\circ f_*)(P_X(x))=P_X(x)$. Thus $g_*\circ f_*$ is the identity on $\pi_0(X)$. [step 1.2, A2]

2.2 Applying step 1.2 to $f\circ g\simeq\operatorname{id}_Y$ similarly gives $f_*\circ g_*=\operatorname{id}_{\pi_0(Y)}$. [step 1.2, A2]

3.1 Therefore $f_*$ and $g_*$ are mutually inverse functions, so $f_*$ is a bijection. [step 2.1, step 2.2] ∎
