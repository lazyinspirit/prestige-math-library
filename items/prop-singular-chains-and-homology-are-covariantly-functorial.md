---
id: prop-singular-chains-and-homology-are-covariantly-functorial
kind: proposition
title: "Singular chains and singular homology are covariantly functorial"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-chain-complex-and-singular-homology, def-induced-singular-chain-map, lem-induced-singular-chain-maps-commute-with-boundaries, prop-homology-respects-identities-and-composition]
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

For each abelian group $G$, the assignments
$$X\mapsto C_\bullet(X;G),\qquad f\mapsto f_\#$$
and
$$X\mapsto H_n^{\mathrm{sing}}(X;G),\qquad f\mapsto H_n(f_\#)$$
define covariant functors from topological spaces to chain complexes and to
abelian groups, respectively. Equivalently,
$$\operatorname{id}_{X,\#}=\operatorname{id}_{C_\bullet(X;G)},\qquad (g\circ f)_\#=g_\#\circ f_\#,$$
and for every $n\geq 0$,
$$H_n((g\circ f)_\#)=H_n(g_\#)\circ H_n(f_\#),\qquad H_n(\operatorname{id}_{X,\#})=\operatorname{id}_{H_n(X;G)}.$$

## Facts & Assumptions

**Given:** An abelian group $G$ and continuous maps $f:X\to Y$ and $g:Y\to Z$.

[L1] The induced singular chain map sends a singular simplex $\sigma$ to
$f\circ\sigma$ ([[def-induced-singular-chain-map]]).

[L2] Induced singular chain maps commute with the singular boundaries
([[lem-induced-singular-chain-maps-commute-with-boundaries]]).

[L3] Homology sends identity chain maps to identity maps and composite chain
maps to composite homology maps
([[prop-homology-respects-identities-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 For every singular simplex $\sigma$ in $X$, [L1] gives $\operatorname{id}_{X,\#}(\sigma)=\operatorname{id}_X\circ\sigma=\sigma$ and $(g\circ f)_\#(\sigma)=(g\circ f)\circ\sigma=g\circ(f\circ\sigma) =g_\#(f_\#(\sigma))$. By linearity, $\operatorname{id}_{X,\#}$ is the identity chain map and $(g\circ f)_\#=g_\#\circ f_\#$ on singular chains. [L1, given]

2.1 By [L2], every induced map $f_\#$ is a chain map. Therefore step 1.1 gives identity and composition laws in the category of chain complexes, and [L3] transfers those same laws to singular homology in each degree. [L2, L3, step 1.1] ∎