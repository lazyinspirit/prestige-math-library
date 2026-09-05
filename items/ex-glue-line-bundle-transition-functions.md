---
id: ex-glue-line-bundle-transition-functions
kind: example
title: "Units satisfying the cocycle law glue local rank-one free modules into a line bundle"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gluing-datum-sheaves, def-module-on-ringed-space, thm-gluing-sheaves]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Section 2.5.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
    - title: "The Stacks Project, Section 26.14"
      url: "https://stacks.math.columbia.edu/tag/01JA"
---

## Example

Let $(X,\mathcal O_X)$ be a ringed space with an open cover $X=\bigcup_i U_i$.
Suppose that for each pair $(i,j)$ there is a unit
$$
g_{ij}\in \mathcal O_X(U_i\cap U_j)^\times
$$
satisfying
$$g_{ii}=1, \qquad g_{ij}=g_{ji}^{-1}, \qquad g_{jk}g_{ij}=g_{ik}$$
on triple overlaps. Then the free rank-one modules $\mathcal O_X|_{U_i}$ glue
to a line bundle on $X$.

## Facts & Assumptions

**Given:** A ringed space $(X,\mathcal O_X)$, an open cover $X=\bigcup_i U_i$, and units $g_{ij}$ satisfying the displayed cocycle rules.

[F1] An $\mathcal O_X$-module is a sheaf with compatible module structures on every open set ([[def-module-on-ringed-space]]).

[F2] A gluing datum is given by overlap isomorphisms satisfying identity and cocycle conditions ([[def-gluing-datum-sheaves]]).

[L1] Compatible local sheaves glue uniquely up to unique isomorphism ([[thm-gluing-sheaves]]).

## Verification

**Proof technique:** direct.

1.1 On $U_i\cap U_j$, define $$\varphi_{ij}:\mathcal O_X|_{U_i\cap U_j}\longrightarrow \mathcal O_X|_{U_i\cap U_j},\qquad s\longmapsto g_{ij}s.$$ Because $g_{ij}$ is a unit, $\varphi_{ij}$ is an isomorphism of $\mathcal O_X$-modules, and the rules for the $g_{ij}$ are exactly the identity and cocycle conditions of [F2]. [F1, F2, given]

2.1 By [L1], the local free rank-one modules $\mathcal O_X|_{U_i}$ glue to an $\mathcal O_X$-module $\mathcal L$ on $X$ with $\mathcal L|_{U_i}\cong \mathcal O_X|_{U_i}$ for every $i$. Therefore $\mathcal L$ is locally free of rank one, i.e. a line bundle. [L1, step 1.1] ∎
