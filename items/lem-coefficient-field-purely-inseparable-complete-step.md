---
id: lem-coefficient-field-purely-inseparable-complete-step
kind: lemma
title: "Completeness resolves the purely inseparable prime-field case"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-equicharacteristic-prime-field-lifts, def-equicharacteristic-local-ring-and-coefficient-field]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a complete equicharacteristic local ring of
characteristic $p>0$, with residue field $k$. If every element of $k$ is
purely inseparable over the prime field $\mathbf F_p$, then the canonical copy
of $\mathbf F_p$ inside $A$ is contained in a coefficient field of $A$.

## Facts & Assumptions

**Given:** A complete equicharacteristic local ring $(A,\mathfrak m)$ of characteristic $p>0$ whose residue field $k$ is purely inseparable over $\mathbf F_p$.

[L1] The prime field already lifts in the equicharacteristic case ([[lem-equicharacteristic-prime-field-lifts]]).

[L2] A coefficient field is a subfield of $A$ mapping isomorphically to the residue field ([[def-equicharacteristic-local-ring-and-coefficient-field]]).

[L3] Stacks, Section 10.160, Theorem 10.160.8 constructs a coefficient ring in every complete local ring; in the equicharacteristic case that coefficient ring is a field.

## Proof

**Proof technique:** apply the complete-local source theorem to the prime-field case.

1.1 By [L1], the prime field $\mathbf F_p$ has its canonical copy inside $A$. [L1, given]

2.1 By [L3], the cited Cohen structure theorem yields a coefficient ring $C\subseteq A$. Because $A$ is equicharacteristic, that coefficient ring is a field, hence a coefficient field in the sense of [L2]. Every subfield of characteristic $p$ contains the prime field, so the canonical copy of $\mathbf F_p$ from step 1.1 lies in $C$. [L2, L3, step 1.1, choose]

3.1 Therefore, in the purely inseparable case over the prime field, completeness supplies a coefficient field containing the canonical prime-field lift. [step 2.1] ∎
