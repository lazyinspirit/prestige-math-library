---
id: cor-liouville-theorem-in-several-complex-variables
kind: corollary
title: "A bounded holomorphic function on all of $\\mathbb{C}^m$ is constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chain-rule-for-holomorphic-maps-in-several-variables, thm-liouville-bounded-entire-function, def-holomorphic-function-in-several-complex-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, rem-complex-euclidean-space-dictionary]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, Ex. 1.2.13"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$ and let $f : \mathbb{C}^m \to \mathbb{C}$ be holomorphic. If there
is a real $M \ge 0$ such that $|f(z)| \le M$ for every $z \in \mathbb{C}^m$,
then $f$ is constant.

## Facts & Assumptions

**Given:** A holomorphic function $f : \mathbb{C}^m \to \mathbb{C}$ and a real $M \ge 0$ such that $|f(z)| \le M$ for every $z \in \mathbb{C}^m$.

[L1] The composite of holomorphic maps is holomorphic and its complex Jacobian is the product ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[L2] Every bounded entire function of one complex variable is constant ([[thm-liouville-bounded-entire-function]]).

[L3] Holomorphic functions on open subsets of $\mathbb{C}^m$ are those of [[def-holomorphic-function-in-several-complex-variables]], and they are continuous ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z\in\mathbb C^m$. The map $\ell_z:\mathbb C\to\mathbb C^m$ defined by $\ell_z(\xi)=\xi z$ is holomorphic, so by [L1] the composite $g_z:=f\circ\ell_z:\mathbb C\to\mathbb C$ is holomorphic; and for every $\xi\in\mathbb C$ one has $|g_z(\xi)|=|f(\xi z)|\le M$, so [L2] makes $g_z$ constant on $\mathbb C$. [given, L1, L2, L3]

2.1 Evaluating the constant function $g_z$ at $\xi=0$ and $\xi=1$ gives $f(z)=g_z(1)=g_z(0)=f(0)$. Since $z$ was arbitrary, $f$ is constant on $\mathbb C^m$. [step 1.1] ∎

## Remarks

- **No connectedness argument is needed.** Every point is compared directly with the origin along the complex line it spans, so the conclusion is pointwise and not topological.
