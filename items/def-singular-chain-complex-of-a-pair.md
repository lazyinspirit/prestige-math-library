---
id: def-singular-chain-complex-of-a-pair
kind: definition
title: "Relative singular chain complex"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-chain-complex-and-singular-homology]
justified_by: [lem-singular-boundary-descends-to-relative-chains]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Definition

Fix an abelian group $G$. For a subspace $A\subseteq X$, regard the finite
singular chains $C_n(A;G)$ as the subgroup of $C_n(X;G)$ induced by inclusion.
The **relative singular chain group** is
$$C_n(X,A;G):=C_n(X;G)/C_n(A;G).$$
Equip these quotients with the induced maps
$$\overline\partial_n[c]:=[\partial_n c].$$
Their well-definedness and the identity $\overline\partial^2=0$ are established
in [[lem-singular-boundary-descends-to-relative-chains]]. The resulting chain
complex is denoted $C_\bullet(X,A;G)$. Thus both $A=\varnothing$ and $A=X$ are
admitted.
