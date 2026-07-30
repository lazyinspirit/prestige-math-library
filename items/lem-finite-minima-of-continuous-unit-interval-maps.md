---
id: lem-finite-minima-of-continuous-unit-interval-maps
kind: lemma
title: "Finite pointwise minima of continuous maps to $[0,1]$ are continuous"
status: published
origin: session
deps: [def-continuous-map-top, def-product-topology, thm-product-universal-property, thm-continuity-characterisations-top, def-interval]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. R. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

If $f_0,\ldots,f_{n-1}:X\to[0,1]$ are continuous, then $x\mapsto\min_{i<n}f_i(x)$ is continuous; for $n=0$ this minimum is the constant-one map.

## Facts & Assumptions

**Given:** A space $X$ and a finite family of continuous maps $f_i:X\to[0,1]$.

[F1] The product of two continuous maps is continuous into the product, and a map is continuous exactly when inverse images of open sets are open ([[thm-product-universal-property]], [[thm-continuity-characterisations-top]]).

[F2] The open intervals form the usual open-set basis of $[0,1]$ as a subspace of $\mathbb R$ ([[def-interval]], [[def-continuous-map-top]]).

## Proof

**Proof technique:** induction.

1.1 The map $m:[0,1]^2\to[0,1]$, $m(s,t)=\min(s,t)$ is continuous: for an interval $(a,b)$, $m^{-1}((a,b))=\{s>a,t>a\}\cap(\{s<b\}\cup\{t<b\})$, which is open in the product. [F2]

1.2 The empty minimum is constant one, hence continuous, and the one-term minimum is $f_0$. [given, base]

2.1 Assume the minimum $g_n=\min_{i<n}f_i$ is continuous. Then $(g_n,f_n):X\to[0,1]^2$ is continuous and $g_{n+1}=m\circ(g_n,f_n)$ is continuous. [F1, step 1.1, ih]

3.1 Induction gives the claim for every finite family. [step 1.2, step 2.1, discharge-induction] ∎
