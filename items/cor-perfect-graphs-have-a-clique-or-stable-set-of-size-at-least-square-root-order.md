---
id: cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order
kind: corollary
title: "Every perfect graph has a clique or stable set of size at least the square root of its order"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-perfect-graphs-satisfy-kappa-at-least-their-order,
       def-kappa-of-a-graph,
       def-homogeneous-set-and-homogeneous-number,
       def-clique-stable-set-and-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Theorem 1.3"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

If $G$ is a perfect graph on $n$ vertices, then $G$ has a clique or a stable
set of size at least $\sqrt n$.

## Facts & Assumptions

**Given:** A perfect graph $G$ on $n$ vertices.

[L1] Perfect graphs satisfy $|V(G)|\leq\kappa(G)$
([[thm-perfect-graphs-satisfy-kappa-at-least-their-order]]).

[L2] $\kappa(G)=\alpha(G)\omega(G)$ and
$\operatorname{hom}(G)=\max\{\alpha(G),\omega(G)\}$
([[def-kappa-of-a-graph]],
[[def-homogeneous-set-and-homogeneous-number]],
[[def-clique-stable-set-and-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Let $h:=\operatorname{hom}(G)=\max\{\alpha(G),\omega(G)\}$. Then $\alpha(G)\leq h$ and $\omega(G)\leq h$, so [L2] gives $\kappa(G)=\alpha(G)\omega(G)\leq h^2.$ [L2, given]

2.1 Since $n=|V(G)|$, [L1] and step 1.1 yield $n\leq h^2$. Therefore $h\geq \sqrt n$. If $h=\omega(G)$, $G$ has a clique of size at least $\sqrt n$; if $h=\alpha(G)$, it has a stable set of that size. [step 1.1, L1, L2]

3.1 Hence every perfect graph on $n$ vertices has a clique or stable set of size at least $\sqrt n$. [step 2.1] ∎
