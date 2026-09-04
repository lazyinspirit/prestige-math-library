---
id: lem-coefficient-field-maps-isomorphically-to-residue-field
kind: lemma
title: "A coefficient field maps isomorphically to the residue field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-equicharacteristic-local-ring-and-coefficient-field]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a local ring with residue field $k=A/\mathfrak m$.
If $K \subseteq A$ is a coefficient field, then the residue map restricts to a
field isomorphism
$$K \xrightarrow{\sim} k.$$

## Facts & Assumptions

**Given:** A local ring $(A,\mathfrak m)$ and a coefficient field $K \subseteq A$.

[L1] A coefficient field is defined to be a subfield on which the residue map
is an isomorphism onto the residue field
([[def-equicharacteristic-local-ring-and-coefficient-field]]).

## Proof

**Proof technique:** unpack the definition.

1.1 By [L1], the defining property of a coefficient field is precisely that the composite $K \hookrightarrow A \twoheadrightarrow A/\mathfrak m$ is an isomorphism. [L1, given]

2.1 Therefore a coefficient field maps isomorphically to the residue field. [step 1.1] ∎
