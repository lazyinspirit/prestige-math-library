---
id: rem-l2-projection-agreement
kind: remark
title: Agreement with the concrete L-two projection
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-orthogonal-projection, lem-closed-l-two-subspaces-have-orthogonal-projections, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.36, p.237"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Remark

Assume the Axiom of Choice, and let $H$ be complex $L^2(\mu)$ or a closed linear subspace of it with $M\subseteq H$ a closed linear subspace ([[lem-closed-l-two-subspaces-have-orthogonal-projections]]). That published theorem constructs a linear contraction $P_M:H\to H$ with $P_Mf\in M$ and $f-P_Mf\perp M$ for every $f$, together with $H=M\oplus M^\perp$.

The Hilbert orthogonal projection of [[def-hilbert-orthogonal-projection]] is characterised by the same two properties: its value at $f$ is the unique $M$-component of the unique orthogonal decomposition $f=P_Mf+(f-P_Mf)$ with $f-P_Mf\in M^\perp$. Since the concrete construction supplies a vector of $M$ whose residual is orthogonal to $M$, and the orthogonal decomposition is unique, the concrete map and the Hilbert projection agree wherever both are defined. The concrete theorem is used only to identify the two constructions: it is not a supplier for the existence, linearity, contractivity or self-adjointness of the Hilbert projection, which are proved on this page from the abstract decomposition.

The choice cost of the identification is the concrete theorem's: it assumes AC, and AC implies the Axiom of Countable Choice, under which the abstract projection exists ([[def-axiom-of-choice]]). No stronger principle is claimed, and the identification is orientation only, not a load-bearing prerequisite of any theorem on this page.
