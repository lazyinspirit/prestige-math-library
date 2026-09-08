---
id: "lem-classical-affine-morphisms-equal-on-dense-open"
kind: "lemma"
title: "Affine-source morphisms agreeing on a dense open agree everywhere"
status: published
origin: "pipeline"
deps: ["lem-classical-affine-variety-nonempty-opens-dense", "thm-classical-affine-global-regular-functions-coordinate-ring", "def-classical-affine-variety-morphism", "lem-classical-morphism-inverse-image-of-closed-is-closed", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 3.26 and the separatedness calculation of §5c, pp. 67, 102"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. If $X,Y$ are affine varieties and two morphisms $\phi,\psi:X\to Y$ agree on a dense open subset of $X$, they agree everywhere.

## Facts & Assumptions

**Given:** AC, affine varieties $X,Y$ over algebraically closed $k$, and morphisms $\phi,\psi:X\to Y$ agreeing on a dense open of $X$.

[F1] Global regular functions on X are elements of its coordinate ring ([[thm-classical-affine-global-regular-functions-coordinate-ring]]).

[F2] Coordinate functions on Y pull back to regular functions ([[def-classical-affine-variety-morphism]]).

[F3] Zero sets of regular functions on an open source are relatively closed ([[lem-classical-morphism-inverse-image-of-closed-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 Embed $Y\subseteq k^m$ and write $y_j$ for its coordinates. The functions $r_j=y_j\circ\phi-y_j\circ\psi$ are global regular functions by F1 and F2. Their zero sets are closed by F3. The common dense open is contained in every such zero set, hence each zero set is all of $X$. [F1, F2, F3, given]

2.1 Thus for every $x\in X$ and every $j$, $y_j(\phi(x))=y_j(\psi(x))$. Equality of all coordinates is equality of the tuples, so $\phi(x)=\psi(x)$. For $m=0$ the target has just the empty tuple and this conclusion is immediate as well. [step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 3.26 and the separatedness calculation of §5c, pp. 67, 102. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
