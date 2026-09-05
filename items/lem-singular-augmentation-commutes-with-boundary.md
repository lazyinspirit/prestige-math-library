---
id: lem-singular-augmentation-commutes-with-boundary
kind: lemma
title: "The singular augmentation commutes with the boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-zero-simplex-augmentation-and-reduced-singular-homology, def-singular-boundary-operator]
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

For every topological space $X$ and every abelian group $G$,
$$\varepsilon_X\partial_1=0:C_1(X;G)\to G.$$
Consequently $\operatorname{im}\partial_1\subseteq\ker\varepsilon_X$, so the
reduced singular chain complex of
[[def-zero-simplex-augmentation-and-reduced-singular-homology]] is well
defined.

## Facts & Assumptions

**Given:** A topological space $X$ and an abelian group $G$.

[L1] The augmentation sends every $0$-simplex tensor $g$ to $g$
([[def-zero-simplex-augmentation-and-reduced-singular-homology]]).

[L2] The singular boundary of a $1$-simplex is the terminal $0$-face minus the
initial $0$-face ([[def-singular-boundary-operator]]).

## Proof

**Proof technique:** direct.

1.1 Let $\sigma:\Delta^1\to X$ be a singular $1$-simplex and let $g\in G$. By [L2], $$\partial_1(\sigma\otimes g)=(\sigma\delta_0)\otimes g-(\sigma\delta_1)\otimes g.$$ Applying [L1] gives $$\varepsilon_X\partial_1(\sigma\otimes g)=g-g=0.$$ [L1, L2, given, algebra]

2.1 The generators $\sigma\otimes g$ span $C_1(X;G)$, so step 1.1 proves $\varepsilon_X\partial_1=0$ on all of $C_1(X;G)$. Therefore every $1$-boundary lies in $\ker\varepsilon_X$, which is exactly the compatibility needed in degree $0$ for the reduced chain complex. [step 1.1] ∎