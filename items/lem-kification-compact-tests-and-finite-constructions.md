---
id: lem-kification-compact-tests-and-finite-constructions
kind: lemma
title: Kification, compact tests, and finite constructions
deps: ["def-compactly-generated-conventions-for-based-homotopy", "thm-product-universal-property", "thm-quotient-universal-property", "thm-finite-products-of-compact-spaces", "thm-compactness-under-continuous-maps", "thm-closed-subspace-of-a-compact-space-is-compact", "thm-compact-subset-of-a-hausdorff-space-is-closed", "cor-heine-borel-in-the-product-topology"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: N. P. Strickland, The category of CGWH spaces
      url: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf
      locator: Sections1–2, Lemma1.8 through Proposition2.6 and closed-subspace part of Lemma2.26, pp.2–3,7
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Kification preserves exactly the continuous maps from compact Hausdorff spaces, is idempotent and functorial, and satisfies: for CG $T$, a function $T\to X$ is continuous if and only if it is continuous into $kX$. Finite k-products are categorical products of CG spaces. Ordinary quotients, finite disjoint unions and closed subspaces of CG spaces are CG. Products of closed inclusions are closed inclusions in this category, and finite clopen decompositions commute with kification. If $X$ is CG, its ordinary product $X\times I$ is CG. Kification leaves cubical maps and their relative homotopies unchanged.

## Facts & Assumptions

[F1] K-closed sets are tested by all compact Hausdorff maps. [[def-compactly-generated-conventions-for-based-homotopy]]

[F2] The continuity of a map into an ordinary product is equivalent to coordinate continuity. [[thm-product-universal-property]]

[F3] A fibre-constant continuous map factors continuously through a quotient. [[thm-quotient-universal-property]]

[F4] Closed subsets of compact spaces are compact. [[thm-closed-subspace-of-a-compact-space-is-compact]]

[F5] Finite products of compact spaces are compact. [[thm-finite-products-of-compact-spaces]]

[F6] Continuous images of compact spaces are compact. [[thm-compactness-under-continuous-maps]]

[F7] A compact subset of a Hausdorff space is closed. [[thm-compact-subset-of-a-hausdorff-space-is-closed]]

[F8] Closed bounded Euclidean subsets, in particular intervals and cubes, are compact. [[cor-heine-borel-in-the-product-topology]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Inverse images commute with arbitrary intersections and finite unions, and send $\varnothing,X$ to $\varnothing,K$. Thus the k-closed sets are closed sets of a topology containing all original closed sets. Each original test $u:K\to X$ is continuous into $kX$ by that definition; the reverse follows by composing with the continuous identity $kX\to X$. Since the tests are identical, $k(kX)=kX$. [F1]

1.2 For a finite disjoint union, a k-closed subset restricts to a closed subset of each CG summand by testing the inclusion composed with every test; it is therefore closed. For $A$ closed in CG $X$ and $F$ k-closed in $A$, a test $u:K\to X$ restricts on the compact Hausdorff closed set $u^{-1}A$. Thus $u^{-1}F$ is closed there, hence in $K$. Consequently $F$ is closed in $X$, proving that the subspace $A$ is CG. [F1, F4]

2.1 If $T$ is CG and $f:T\to X$ is continuous, then for every k-closed $F\subseteq X$ and test $v:K\to T$, $(fv)^{-1}F$ is closed. Hence $f^{-1}F$ is k-closed in $T$, thus closed. This proves continuity into $kX$; composition with $kX\to X$ proves the converse. Applied to $kT$, this also proves functoriality. A compact Hausdorff $K$ is CG since its identity is a test. [F1, step 1.1]

2.2 Let $F$ be k-closed in the ordinary $X\times I$ and $(x,t)\notin F$. The vertical test $s\mapsto(x,s)$ shows $F_x$ closed. Choose a closed interval neighbourhood $J$ of $t$ in $I$ disjoint from $F_x$, using relative intervals at 0 and 1. Set $V=\{y: (\{y\}\times J)\cap F=\varnothing\}$. For a test $u:K\to X$, the inverse image of $F$ in the compact Hausdorff $K\times J$ is closed, hence compact. Its projection is compact and closed in $K$ and equals $K\setminus u^{-1}V$. Thus $V$ is k-open and hence open. The rectangle $V\times\operatorname{int}_I J$ misses $F$, so $F$ is ordinary closed. Therefore $X\times I$ is CG. [F4, F5, F6, F7, F8, step 1.1]

3.1 A family of continuous coordinates from CG $T$ induces a continuous map into the ordinary product, which lifts to its kification by step 2.1. Conversely projections from the k-product are continuous. Coordinate uniqueness proves the product property, and inverse coordinate rearrangements prove finite associativity and symmetry. For an ordinary quotient $q:X\to Q$ with $X$ CG, step 2.1 makes $q:X\to kQ$ continuous. Each k-closed $F\subseteq Q$ therefore has closed $q^{-1}F$, so quotient finality makes $F$ closed in $Q$. [F2, F3, step 2.1]

4.1 The inverse image of a closed factor under a projection from a k-product is closed, hence CG by step 1.2. Its ordinary subspace topology identifies with the corresponding k-product: the continuous coordinate map in one direction comes from step 3.1, while its inverse is continuous into the subspace because its composite into the ambient product is continuous. Iterating handles products of closed inclusions. A compact test into a finite clopen decomposition splits into compact Hausdorff clopen domains. Testing each piece proves that kification commutes with that decomposition. [F4, step 3.1, step 1.2]

5.1 Cubes and their cylinders are compact Hausdorff; the zero-fold cube is a point. Step 1.1 therefore preserves all maps and homotopies from these domains. The underlying functions do not change, so all specified boundary equalities are preserved as well. Empty spaces and empty coproducts satisfy the same closed-set tests vacuously. [F8, step 1.1, step 2.2] ∎
