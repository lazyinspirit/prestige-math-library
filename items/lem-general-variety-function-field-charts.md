---
id: "lem-general-variety-function-field-charts"
kind: "lemma"
title: "Function fields and dominant pullbacks on general varieties"
deps: ["lem-classical-variety-noetherian-components", "thm-function-field-independent-affine-open", "lem-dominant-map-pullback-function-fields"]
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
    - title: "Milne §§5j–k pp.115–116"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Any two affine charts meet; inside their intersection choose a nonempty affine chart using a principal-open basis. Use the affine field comparison and cocycle compatibility. Restrict a dominant map to nonempty affine charts; density follows by continuity and density of the source chart."
---

## Statement

For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

[F2] Assume the Axiom of Choice. Let $X$ be a classical affine variety. If $U \subseteq X$ is a nonempty affine open subset, then $$ \operatorname{Frac}(k[U])\cong k(X) $$ canonically. Hence any two nonempty affine opens of $X$ have canonically isomorphic function fields. ([[thm-function-field-independent-affine-open]]).

[F3] Let $\eta:X \dashrightarrow Y$ be a dominant rational map between classical affine varieties. Then pullback along any representative induces an injective $k$-algebra homomorphism $$ \eta^*:k(Y)\hookrightarrow k(X). $$ This construction is independent of the representative and is functorial under composition of dominant rational maps. ([[lem-dominant-map-pullback-function-fields]]).

## Proof

1.1 One may describe a rational function as a regular function on a nonempty open, with two representatives identified when they agree on a nonempty open of their common domain. In an irreducible space every finite intersection of nonempty opens is nonempty, so this is an equivalence relation. On an irreducible affine chart $V$, a regular function is locally a quotient of polynomial functions. Any one nonempty such neighborhood therefore represents an element of $\operatorname{Frac}k[V]$, and conversely each fraction is regular on its nonempty denominator open. Equality on a nonempty open implies equality of fractions because the coordinate ring is a domain. This also agrees with the supplied principal-open field identification. [F2]

2.1 Any two nonempty affine charts meet. Restricting their rational representatives to their overlap identifies both fields with the rational functions just described. This identification is independent of every further restriction, and triple overlaps give the cocycle identity. Affine charts exist by the finite-cover result. [F1, step 1.1]

3.1 If $f$ is dominant, the inverse image of a nonempty target open is nonempty. For nonempty source open $V$ and target open $W$, $V\cap f^{-1}(W)$ is nonempty whenever $W$ is nonempty; hence a restriction from any nonempty source open remains dominant. Choose affine charts on source and target with the source chart in the target-chart inverse image. The affine dominant pullback is injective. Compatibility with restrictions identifies it with a unique injection between the fields in the statement. [F3, step 2.1] ∎
