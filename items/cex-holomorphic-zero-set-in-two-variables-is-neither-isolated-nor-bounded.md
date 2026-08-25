---
id: cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded
kind: counterexample
title: "A nonzero holomorphic function on $\\mathbb{C}^2$ whose zero set is an unbounded hyperplane"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-function-in-several-complex-variables, thm-identity-theorem-in-several-complex-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, rem-complex-euclidean-space-dictionary, def-balls-and-polydiscs-in-complex-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, Ex. 1.2.21"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement refuted

That a nonzero holomorphic function on a domain in $\mathbb C^m$ has isolated
zeros.

## Counterexample

Take $f:\mathbb C^2\to\mathbb C$ given by $f(z_0,z_1)=z_0$.

## Facts & Assumptions

**Given:** The function $f(z_0,z_1)=z_0$ on $\mathbb C^2$.

[L1] Holomorphic functions on open subsets of $\mathbb C^m$ are those of [[def-holomorphic-function-in-several-complex-variables]], and they are continuous and separately holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L2] A holomorphic function vanishing on a nonempty open subset of a connected open set in $\mathbb C^m$ vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

## Refutation

**Proof technique:** direct.

1.1 The function $f(z_0,z_1)=z_0$ is holomorphic on $\mathbb C^2$ and is not identically zero, since $f(1,0)=1$. [given, L1]

1.2 Its zero set is exactly $\{(z_0,z_1)\in\mathbb C^2:z_0=0\}=\{0\}\times\mathbb C$. [given, algebra]

2.1 This zero set is unbounded, because $(0,t)$ belongs to it for every complex $t$, and no point of it is isolated in it: if $(0,w)$ is a zero and $\varepsilon>0$, then $(0,w+\varepsilon/2)$ is a different zero within Euclidean distance $\varepsilon/2$. [step 1.2]

3.1 The zero set has empty interior, so this witness does not contradict [L2]; it shows instead that in several variables a nonzero holomorphic function can vanish on a whole positive-dimensional complex hyperplane. Therefore the refuted claim fails. [step 1.1, step 2.1, L2] ∎
