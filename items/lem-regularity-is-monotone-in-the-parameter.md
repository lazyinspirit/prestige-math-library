---
id: lem-regularity-is-monotone-in-the-parameter
kind: lemma
title: "An $\\epsilon$-regular pair is $\\epsilon'$-regular for every $\\epsilon'\\ge\\epsilon$ with $\\epsilon'>0$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-epsilon-regular-pair, def-edge-density-between-vertex-sets]
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
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Remark 2.1.3"
      url: "https://yufeizhao.com/gtacbook/gtacbook.pdf"
pipeline_run: null
---

## Statement

Let $0<\epsilon\le\epsilon'$. If $(X,Y)$ is an $\epsilon$-regular pair, then it
is an $\epsilon'$-regular pair.

## Facts & Assumptions

**Given:** Reals $0<\epsilon\le\epsilon'$, disjoint nonempty vertex sets $X,Y$, and an $\epsilon$-regular pair $(X,Y)$.

[L1] An $\epsilon$-regular pair requires the density deviation bound for all subsets $X'\subseteq X$, $Y'\subseteq Y$ with $|X'|\ge\epsilon|X|$ and $|Y'|\ge\epsilon|Y|$ ([[def-epsilon-regular-pair]], [[def-edge-density-between-vertex-sets]]).

## Proof

**Proof technique:** direct.

1.1 If $|X'|\ge\epsilon'|X|$ and $|Y'|\ge\epsilon'|Y|$, then also $|X'|\ge\epsilon|X|$ and $|Y'|\ge\epsilon|Y|$ because $\epsilon'\ge\epsilon$. [L1, algebra]

2.1 The $\epsilon$-regularity of $(X,Y)$ therefore gives $|d(X',Y')-d(X,Y)|\le\epsilon\le\epsilon'$. This is exactly the definition of $\epsilon'$-regularity. [step 1.1, L1, algebra] ∎
