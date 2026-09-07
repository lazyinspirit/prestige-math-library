---
id: "lem-zero-dimensional-classical-variety-finite"
kind: "lemma"
title: "Zero-dimensional varieties are finite sets"
deps: ["def-dimension-classical-variety", "lem-classical-variety-noetherian-components", "thm-affine-variety-dimension-coordinate-ring", "thm-affine-nullstellensatz-correspondence"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arapura §4.1 opening, p.30"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
    - title: "Milne §5j finite components and §9b fibres"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "A zero-dimensional irreducible chart has no proper irreducible closed subset; each closed point must be the whole component. Conversely finite T1 spaces have only singleton irreducible subsets."
---

## Statement

A classical variety $X$ has $\dim X\le0$ if and only if its underlying set is finite. The empty set is included. A nonempty irreducible variety of dimension zero is one point.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a classical variety $X$, let $\dim X$ be its chain dimension. If $X_1,\ldots,X_m$ are its irreducible components and $x\in X$ is a closed point, define $\dim_xX=\max_{x\in X_i}\dim X_i$. The indexing family is nonempty. Say that $X$ has pure dimension $d$ if every irreducible component has dimension $d$; the condition on components is vacuous for the empty variety, whose dimension is nevertheless $-\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-dimension-classical-variety]]).

[F2] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

## Proof

1.1 Classical points are closed: in every affine chart a singleton is the zero locus of the coordinate differences from its coordinates, and closedness is local on an open cover. If $\dim X\le0$, take its finite irreducible-component decomposition. For each nonempty component $Z$ choose $x\in Z$. If $Z\ne\{x\}$, the chain $\{x\}\subsetneq Z$ would have length one, contradicting the dimension bound. Thus every component is a singleton and $X$ is finite. [F1, F2]

2.1 Conversely a finite set of closed points is a discrete topological space. Its only nonempty irreducible subsets are singletons, so a nonempty finite $X$ has dimension zero. The empty variety has dimension $-\infty$. These also prove the last assertion. [F1, step 1.1] ∎
