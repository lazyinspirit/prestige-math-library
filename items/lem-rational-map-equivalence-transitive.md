---
id: lem-rational-map-equivalence-transitive
kind: lemma
title: "The rational-map equivalence relation is transitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-map-varieties, lem-density-nonempty-open-affine-variety, lem-principal-opens-form-affine-basis]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, rational-map discussion in Chapter 5l"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, rational-map discussion in §3.2"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
---

## Statement

Let $X$ and $Y$ be classical affine varieties. The relation used in
[[def-rational-map-varieties]] is transitive: if
$$ \varphi_1:U_1\to Y,\qquad \varphi_2:U_2\to Y,\qquad \varphi_3:U_3\to Y $$
are representatives with $\varphi_1 \sim \varphi_2$ and
$\varphi_2 \sim \varphi_3$, then $\varphi_1 \sim \varphi_3$.

## Facts & Assumptions

**Given:** Classical affine varieties $X$ and $Y$, representatives $\varphi_i:U_i \to Y$ on nonempty affine opens $U_i \subseteq X$, and witnesses $W_{12} \subseteq U_1 \cap U_2$ and $W_{23} \subseteq U_2 \cap U_3$ with $\varphi_1=\varphi_2$ on $W_{12}$ and $\varphi_2=\varphi_3$ on $W_{23}$.

[L1] A rational-map representative is defined on a nonempty affine open subset of $X$, and two representatives are equivalent when they agree on a nonempty affine open subset of the overlap ([[def-rational-map-varieties]]).

[L2] Every nonempty open subset of a classical affine variety is dense ([[lem-density-nonempty-open-affine-variety]]).

[L3] Principal opens form a basis, and the intersection of two principal opens is again principal ([[lem-principal-opens-form-affine-basis]]).

## Proof

**Proof technique:** direct.

1.1 The sets $W_{12}$ and $W_{23}$ are nonempty open subsets of $X$ by [L1]. By [L2], both are dense in $X$, so their intersection is nonempty. [L1, L2, given]

2.1 The set $W_{12} \cap W_{23}$ is open in $X$. Since both $W_{12}$ and $W_{23}$ are affine opens, [L3] identifies their intersection as another affine open subset. On that common open we have $\varphi_1=\varphi_2=\varphi_3$. [L3, step 1.1, algebra]

3.1 Step 2.1 gives a nonempty affine open subset of $U_1 \cap U_3$ on which $\varphi_1$ and $\varphi_3$ agree. Therefore $\varphi_1 \sim \varphi_3$. [L1, step 2.1] ∎
