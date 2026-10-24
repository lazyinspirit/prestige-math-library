---
id: thm-homotopy-equivalence-is-an-equivalence-relation
kind: theorem
title: "Having the same homotopy type is an equivalence relation on topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homotopy-equivalence, thm-composition-respects-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations, def-equivalence-relation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

The relation “has the same homotopy type as” is reflexive, symmetric and transitive on topological spaces, hence is an equivalence relation.

## Facts & Assumptions

**Given:** Topological spaces $X,Y,Z$ and homotopy equivalences $f:X\to Y$ and $p:Y\to Z$ with homotopy inverses $g:Y\to X$ and $q:Z\to Y$.

[A1] A homotopy equivalence has a continuous homotopy inverse whose two composites are homotopic to the appropriate identity maps ([[def-homotopy-equivalence]]).

[L1] Precomposition and postcomposition by continuous maps preserve homotopies ([[thm-composition-respects-homotopy]]).

[L2] Homotopy is symmetric and transitive ([[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]]).

[L3] A relation is an equivalence relation exactly when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 The identity $\operatorname{id}_X:X\to X$ is a homotopy equivalence with itself as homotopy inverse, since both composites equal, and hence are homotopic to, $\operatorname{id}_X$. [A1, L2]

1.2 If $f:X\to Y$ has homotopy inverse $g:Y\to X$, the same two homotopies show that $g$ has homotopy inverse $f$. Thus the relation is symmetric. [A1]

1.3 For transitivity, the composite $p\circ f:X\to Z$ has candidate homotopy inverse $g\circ q:Z\to X$. By [A1], $q\circ p\simeq\operatorname{id}_Y$ and $g\circ f\simeq\operatorname{id}_X$. [A1]

1.4 Similarly, $f\circ g\simeq\operatorname{id}_Y$ gives $p\circ(f\circ g)\circ q\simeq p\circ q$, and $p\circ q\simeq\operatorname{id}_Z$ then gives $(p\circ f)\circ(g\circ q)\simeq\operatorname{id}_Z$. [A1, L1, L2]

2.1 Applying [L1] to $q\circ p\simeq\operatorname{id}_Y$ gives $g\circ(q\circ p)\circ f\simeq g\circ f$, and [L2] with $g\circ f\simeq\operatorname{id}_X$ gives $(g\circ q)\circ(p\circ f)\simeq\operatorname{id}_X$. [step 1.3, L1, L2]

3.1 Steps 2.1 and 1.4 make $g\circ q$ a homotopy inverse of $p\circ f$, so the relation is transitive. With steps 1.1 and 1.2, [L3] makes it an equivalence relation. [step 1.1, step 1.2, step 2.1, step 1.4, A1, L3] ∎
