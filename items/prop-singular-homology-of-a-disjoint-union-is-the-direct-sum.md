---
id: prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
kind: proposition
title: "The singular homology of a disjoint union is the direct sum"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-chain-complex-and-singular-homology, def-disjoint-union-topology]
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

Let $X=\bigsqcup_{\alpha\in A}X_\alpha$ be a disjoint union of topological
spaces, and let $G$ be an abelian group. Then for every $n\geq 0$,
$$H_n^{\mathrm{sing}}(X;G)\cong\bigoplus_{\alpha\in A}H_n^{\mathrm{sing}}(X_\alpha;G).$$

## Facts & Assumptions

**Given:** A disjoint union $X=\bigsqcup_{\alpha\in A}X_\alpha$, an abelian
group $G$, and an integer $n\geq 0$.

[L1] Singular homology is computed from the singular chain complex
([[def-singular-chain-complex-and-singular-homology]]).

[L2] In the disjoint-union topology, each summand $X_\alpha$ is an open and
closed subspace of $X$ ([[def-disjoint-union-topology]]).

## Proof

**Proof technique:** direct.

1.1 The standard simplex $\Delta^n$ is path-connected: if $u=(u_0,\dots,u_n)$ and $v=(v_0,\dots,v_n)$ are points of $\Delta^n$, the straight-line map $t\mapsto (1-t)u+tv$ stays in $\Delta^n$. Therefore any singular simplex $\sigma:\Delta^n\to X$ has connected image. Since the sets $X_\alpha$ are pairwise disjoint and clopen by [L2], the image of $\sigma$ lies in exactly one summand $X_\alpha$. [L2, given]

2.1 Step 1.1 identifies $C_n(X;G)$ with the direct sum of the chain groups $C_n(X_\alpha;G)$, degree by degree, and the singular boundary preserves the chosen summand because each face of a simplex in $X_\alpha$ still lands in $X_\alpha$. Thus $$C_\bullet(X;G)\cong\bigoplus_{\alpha\in A}C_\bullet(X_\alpha;G)$$ as chain complexes. [L1, step 1.1]

3.1 Cycles and boundaries of a direct-sum chain complex are taken componentwise, so homology also splits componentwise. Applying [L1] to the chain-complex isomorphism of step 2.1 yields $$H_n^{\mathrm{sing}}(X;G)\cong\bigoplus_{\alpha\in A}H_n^{\mathrm{sing}}(X_\alpha;G).$$ [L1, step 2.1] ∎