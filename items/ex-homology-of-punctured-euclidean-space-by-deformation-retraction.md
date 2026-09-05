---
id: ex-homology-of-punctured-euclidean-space-by-deformation-retraction
kind: example
title: "The homology of punctured Euclidean space by deformation retraction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-singular-homology-is-invariant-under-deformation-retracts, thm-punctured-rn-deformation-retracts-onto-the-sphere]
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

## Example

For every $n\geq 1$ and every abelian group $G$, the punctured space
$\mathbb R^n\setminus\{0\}$ has the same singular homology groups as
$S^{n-1}$:
$$H_k^{\mathrm{sing}}(\mathbb R^n\setminus\{0\};G)\cong H_k^{\mathrm{sing}}(S^{n-1};G)\qquad(k\geq 0).$$

## Facts & Assumptions

**Given:** An integer $n\geq 1$ and an abelian group $G$.

[L1] $\mathbb R^n\setminus\{0\}$ deformation retracts onto $S^{n-1}$
([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

[L2] A deformation retract inclusion induces an isomorphism on singular
homology ([[prop-singular-homology-is-invariant-under-deformation-retracts]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the sphere inclusion $S^{n-1}\hookrightarrow\mathbb R^n\setminus\{0\}$ is a deformation retract inclusion. [L1, given]

2.1 Applying [L2] to that inclusion gives isomorphisms on singular homology in every degree, which is exactly the displayed statement. [L2, step 1.1] ∎