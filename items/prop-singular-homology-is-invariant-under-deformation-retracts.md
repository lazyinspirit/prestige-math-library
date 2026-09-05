---
id: prop-singular-homology-is-invariant-under-deformation-retracts
kind: proposition
title: "Singular homology is invariant under deformation retracts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, thm-a-deformation-retract-is-a-homotopy-equivalence]
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

If $A$ is a deformation retract of a topological space $X$, then for every
$n\geq 0$ and every abelian group $G$ the inclusion $i:A\hookrightarrow X$
induces an isomorphism
$$H_n^{\mathrm{sing}}(i_\#):H_n^{\mathrm{sing}}(A;G)\to H_n^{\mathrm{sing}}(X;G).$$

## Facts & Assumptions

**Given:** A deformation retract inclusion $i:A\hookrightarrow X$, an abelian
group $G$, and an integer $n\geq 0$.

[L1] A deformation retract inclusion is a homotopy equivalence
([[thm-a-deformation-retract-is-a-homotopy-equivalence]]).

[L2] Homotopy equivalences induce isomorphisms on singular homology
([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the inclusion $i$ is a homotopy equivalence. [L1, given]

2.1 Applying [L2] to $i$ gives the displayed isomorphism on singular homology in every degree. [L2, step 1.1] ∎