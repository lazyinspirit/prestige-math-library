---
id: cor-potentials-differ-by-a-componentwise-constant
kind: corollary
title: "Two potentials of the same field differ by a constant on each piecewise-C1 path component"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-piecewise-c1-path-connected-conservative-and-path-independent, thm-gradient-theorem-for-line-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.3"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open. If $\phi,\psi:U\to\mathbb R$ are $C^1$ and satisfy $\nabla\phi=\nabla\psi$, then $\phi-\psi$ is constant on every piecewise-$C^1$ path component of $U$.

## Facts & Assumptions
**Given:** The open set and potentials in the Statement.

[L1] A piecewise-$C^1$ path component consists of points joined by piecewise-$C^1$ paths in the domain ([[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L2] The gradient theorem evaluates the line integral of a $C^1$ gradient as its endpoint increment ([[thm-gradient-theorem-for-line-integrals]]).



## Proof

**Proof technique:** direct.

1.1 Let $x,y$ lie in one piecewise-$C^1$ path component, and choose a path $\gamma$ from $x$ to $y$ as in [L1]. [given, L1]

2.1 Since $\nabla(\phi-\psi)=0$, [L2] gives $$0=\int_\gamma0\cdot d\mathbf r=(\phi-\psi)(y)-(\phi-\psi)(x).$$ [given, step 1.1, L2, algebra]

3.1 Thus $(\phi-\psi)(y)=(\phi-\psi)(x)$. Since $x,y$ were arbitrary within the component, the difference is constant there. [step 2.1]

4.1 No equality of the constants on distinct components is asserted, because [L1] supplies no path joining such points. [L1, step 3.1] ∎
