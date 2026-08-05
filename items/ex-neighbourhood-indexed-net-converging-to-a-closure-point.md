---
id: ex-neighbourhood-indexed-net-converging-to-a-closure-point
kind: example
title: "A neighbourhood-indexed net in $A$ converges to each point of $\\overline{A}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-closure-characterised-by-nets, def-neighbourhood-top, def-directed-set-and-net, def-net-convergence-and-cluster-point]
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "net (nLab)"
      url: "https://ncatlab.org/nlab/show/net"
pipeline_run: null
---

## Example

Let $p\in\overline A\subseteq X$. The pairs $(N,a)$ with $N$ a neighbourhood of $p$ and $a\in N\cap A$, directed by reverse inclusion of $N$, form an index set. The net $(N,a)\mapsto a$ lies in $A$ and converges to $p$.

## Facts & Assumptions

**Given:** A point $p\in\overline A$ in a topological space $X$.

[L1] Every neighbourhood of $p$ meets $A$ ([[thm-closure-characterised-by-nets]]).

[L2] Finite intersections of neighbourhoods of $p$ are neighbourhoods ([[def-neighbourhood-top]]).

[L3] Net convergence means eventual membership in each neighbourhood ([[def-net-convergence-and-cluster-point]]).



## Verification

**Proof technique:** constructive.

1.1 Let $E=\{(N,a):N\in\mathcal N(p),\ a\in N\cap A\}$ and order it by $(N,a)\preceq(M,b)$ when $M\subseteq N$. [L1, construct]

2.1 For two indices, [L2] and [L1] give $c\in(N\cap M)\cap A$; $(N\cap M,c)$ is above both. Thus $E$ is directed. [step 1.1, L1, L2]

2.2 The net $x_{(N,a)}=a$ is eventually in every neighbourhood $N$ of $p$, since any pair with first coordinate $N$ is a threshold. Hence $x\to p$. [step 1.1, L3]

3.1 This is the asserted net in $A$. [step 2.2, discharge-construct] ∎
