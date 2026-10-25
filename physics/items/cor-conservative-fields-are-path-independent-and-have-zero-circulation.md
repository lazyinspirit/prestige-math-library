---
id: cor-conservative-fields-are-path-independent-and-have-zero-circulation
kind: corollary
title: "Conservative fields are path-independent and have zero integral around every closed path"
status: published
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
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Corollary 9.3.2"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and let $F:U\to\mathbb R^n$ be conservative. Then $F$ is path-independent. Moreover,

$$\int_\gamma F\cdot d\mathbf r=0$$

for every closed piecewise-$C^1$ path $\gamma$ in $U$.

## Facts & Assumptions
**Given:** The open set and conservative field in the Statement.

[L1] Conservativity means that $F=\nabla\phi$ for some $C^1$ potential $\phi$, and path independence compares any two piecewise-$C^1$ paths having the same endpoints ([[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L2] For every piecewise-$C^1$ path $\gamma$, $$\int_\gamma\nabla\phi\cdot d\mathbf r=\phi(\gamma(b))-\phi(\gamma(a))$$ ([[thm-gradient-theorem-for-line-integrals]]).



## Proof

**Proof technique:** direct.

1.1 Choose a potential $\phi$ as in [L1]. If $\alpha$ and $\beta$ have the same initial point $x$ and terminal point $y$, then [L2] gives $$\int_\alpha F\cdot d\mathbf r=\phi(y)-\phi(x)=\int_\beta F\cdot d\mathbf r.$$ [given, L1, L2]

1.2 If $\gamma$ is closed, then its two endpoint values agree, and [L2] gives $\int_\gamma F\cdot d\mathbf r=0$. [given, L2, algebra]

2.1 Hence $F$ is path-independent by [L1]. [step 1.1, L1]

3.1 The closed-loop conclusion does not require connectedness: it is an endpoint calculation for each path that exists. [step 1.2] ∎
