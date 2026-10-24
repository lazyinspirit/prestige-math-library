---
id: lem-a-finite-dimensional-solvable-lie-algebra-has-a-codimension-one-ideal-over-an-algebraically-closed-characteristic-zero-field
kind: lemma
title: Codimension-one ideal in a nonzero solvable Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-quotient-lie-algebra, thm-rank-nullity]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Proposition 1.23"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Proof of Proposition 1.23, printed pp. 25–26"
---

## Statement

A nonzero finite-dimensional solvable Lie algebra over an algebraically closed
field of characteristic zero has an ideal of codimension one. In fact, this
lemma is valid over every field.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional solvable Lie algebra $\mathfrak g$.

[L1] Solvability means the derived series eventually vanishes ([[def-derived-series-and-solvable-lie-algebra]]).

[L2] An ideal has a quotient Lie algebra with a canonical projection ([[def-quotient-lie-algebra]]).

[L3] Rank-nullity computes codimension through a surjective linear map ([[thm-rank-nullity]]).

## Proof

**Proof technique:** direct.

1.1 The derived algebra $[\mathfrak g,\mathfrak g]$ is proper. Otherwise $\mathfrak g^{(1)}=\mathfrak g$, so every derived term would equal the nonzero algebra $\mathfrak g$, contradicting solvability in [L1]. Thus the abelianization $A=\mathfrak g/[\mathfrak g,\mathfrak g]$ in [L2] is nonzero and finite-dimensional. [given, L1, L2, algebra]

2.1 Choose a hyperplane $H<A$: take one nonzero vector, extend it to a finite basis, and span all basis vectors except that one. The inverse image $\mathfrak h$ of $H$ in $\mathfrak g$ contains $[\mathfrak g,\mathfrak g]$, so $[\mathfrak g,\mathfrak h]\subseteq[\mathfrak g,\mathfrak g]\subseteq\mathfrak h$ and $\mathfrak h$ is an ideal. By [L3], its codimension equals that of $H$, namely one. Only a finite basis extension is used, so algebraic closure and characteristic zero are unnecessary and no Choice principle is invoked. [L2, L3, step 1.1, algebra] ∎
