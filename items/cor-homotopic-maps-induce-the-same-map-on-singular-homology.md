---
id: cor-homotopic-maps-induce-the-same-map-on-singular-homology
kind: corollary
title: "Homotopic maps induce the same map on singular homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-chain-complex-and-singular-homology, thm-singular-chain-homotopy-formula, def-chain-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Statement

If $f,g:X\to Y$ are homotopic continuous maps, then for every $n\geq 0$ and
every abelian group $G$ the induced homomorphisms on singular homology agree:
$$H_n(f_\#)=H_n(g_\#):H_n^{\mathrm{sing}}(X;G)\to H_n^{\mathrm{sing}}(Y;G).$$

## Facts & Assumptions

**Given:** A homotopy between continuous maps $f,g:X\to Y$, an abelian group $G$, and an integer $n\geq 0$.

[L1] The prism operator of a homotopy satisfies $$g_\#-f_\#=\partial P_H+P_H\partial$$ ([[thm-singular-chain-homotopy-formula]]).

[L2] A family $s_n$ with $g_n-f_n=d_{n+1}s_n+s_{n-1}d_n$ is a chain homotopy ([[def-chain-homotopy]]).

[L3] Chain-homotopic chain maps induce the same map on homology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 Extend the prism operator by $P_{H,-1}=0$ on the zero group $C_{-1}(X;G)$. By [L1], $$f_\#-g_\#=\partial(-P_H)+(-P_H)\partial,$$ so the family $-P_H$ satisfies the defining identity of [L2] for a chain homotopy from $f_\#$ to $g_\#$. Thus the two induced singular chain maps are chain-homotopic. [L1, L2, given, construct]

2.1 Applying [L3] to the singular chain complex yields $$H_n(f_\#)=H_n(g_\#)$$ for every $n\geq 0$. [L3, step 1.1] ∎
