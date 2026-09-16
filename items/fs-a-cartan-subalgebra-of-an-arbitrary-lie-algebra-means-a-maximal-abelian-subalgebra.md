---
id: fs-a-cartan-subalgebra-of-an-arbitrary-lie-algebra-means-a-maximal-abelian-subalgebra
kind: false-statement
title: A Cartan subalgebra of an arbitrary Lie algebra means a maximal abelian subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-lower-central-series-and-nilpotent-lie-algebra, def-lie-algebra-over-a-field]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Problems 3–4"
landmark: false
proof_strategy: direct
---

## Statement

In an arbitrary Lie algebra, "Cartan subalgebra" means a maximal abelian
subalgebra, the two notions being interchangeable.

## Facts & Assumptions

**Given:** The two-dimensional complex Lie algebra $\mathfrak g=\mathbb CX\oplus\mathbb CY$ with $[X,Y]=Y$, which is a Lie algebra because the bracket is alternating and, on a basis with a single nonzero product, all Jacobi identities reduce to $[X,[X,Y]]+[X,[Y,X]]=0$ and its alternating variants. A Cartan subalgebra is nilpotent and equal to its normalizer ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]]), and nilpotence for the one-dimensional subalgebra $\mathbb CX$ is the vanishing of the lower central series ([[def-lower-central-series-and-nilpotent-lie-algebra]], [[def-lie-algebra-over-a-field]]).

## Refutation

**Proof technique:** explicit witness.

1.1 The subalgebra $\mathbb CY$ is maximal abelian: it is one-dimensional, hence abelian, and $\mathfrak g$ itself is not abelian, so no abelian subalgebra strictly contains it. [given, algebra]

1.2 But $\mathbb CY$ is not a Cartan subalgebra: $N_{\mathfrak g}(\mathbb CY)=\{aX+bY:[aX+bY,Y]\in\mathbb CY\}$ equals $\mathfrak g$, because $[X,Y]=Y\in\mathbb CY$ and $[Y,Y]=0$; a Cartan subalgebra would have to equal its normalizer, and $\mathbb CY\ne\mathfrak g$. [given, algebra]

2.1 The definition is nevertheless not vacuous: $\mathbb CX$ is a Cartan subalgebra of $\mathfrak g$, since $[aX+bY,X]=-bY\in\mathbb CX$ forces $b=0$, so $N_{\mathfrak g}(\mathbb CX)=\mathbb CX$, and $\mathbb CX$ is abelian and therefore nilpotent. Thus a maximal abelian subalgebra of an arbitrary Lie algebra need not be a Cartan subalgebra, and the proposed identification fails. [given, step 1.1, step 1.2, algebra] ∎
