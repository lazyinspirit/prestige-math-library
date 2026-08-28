---
id: thm-perfect-graphs-satisfy-kappa-at-least-their-order
kind: theorem
title: "Every perfect graph satisfies |V(G)|<=kappa(G)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-perfect-graph,
       def-kappa-of-a-graph,
       thm-clique-independence-chromatic-bounds,
       def-clique-stable-set-and-numbers,
       def-proper-vertex-colouring-and-chromatic-number]
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

If $G$ is a perfect graph, then

$$|V(G)|\leq \kappa(G).$$

## Facts & Assumptions

**Given:** A perfect graph $G$.

[L1] Perfect graphs satisfy $\chi(G)=\omega(G)$
([[def-perfect-graph]]).

[L2] Every finite graph satisfies $|V(G)|\leq\chi(G)\alpha(G)$
([[thm-clique-independence-chromatic-bounds]]).

[L3] By definition, $\kappa(G)=\alpha(G)\omega(G)$
([[def-kappa-of-a-graph]], [[def-clique-stable-set-and-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Combining [L1] and [L2] gives $|V(G)|\leq \chi(G)\alpha(G)=\omega(G)\alpha(G).$ [L1, L2]

2.1 The right-hand side of step 1.1 is $\kappa(G)$ by [L3]. Therefore $|V(G)|\leq \kappa(G)$. [step 1.1, L3] ∎
