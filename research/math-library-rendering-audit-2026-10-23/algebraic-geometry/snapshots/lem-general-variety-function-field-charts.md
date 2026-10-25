---
id: "lem-general-variety-function-field-charts"
kind: "lemma"
title: "Function fields and dominant pullbacks on general varieties"
deps: ["def-axiom-of-choice", "lem-classical-variety-noetherian-components", "lem-classical-principal-opens-form-affine-basis", "thm-classical-function-field-independent-of-affine-open", "lem-classical-dominant-map-pulls-back-function-fields"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-general-variety-function-field-charts). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Milne §§5j–k pp.115–116"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Any two affine charts meet; inside their intersection choose a nonempty affine chart using a principal-open basis. Use the affine field comparison and cocycle compatibility. Restrict a dominant map to nonempty affine charts; density follows by continuity and density of the source chart."
---

## Statement

For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

[F2] Under AC ([[def-axiom-of-choice]]), every nonempty affine open $U$ of an affine variety has its fraction field canonically identified with that of the ambient variety, compatibly with further restriction ([[thm-classical-function-field-independent-of-affine-open]]).

[F3] Under AC, a dominant rational map between classical affine varieties pulls back their function fields injectively and compatibly with restrictions ([[lem-classical-dominant-map-pulls-back-function-fields]]).

[F4] Every nonempty open subset of an affine chart contains a nonempty principal affine open ([[lem-classical-principal-opens-form-affine-basis]]).

## Proof

1.1 One may describe a rational function as a regular function on a nonempty open, with two representatives identified when they agree on a nonempty open of their common domain. In an irreducible space every finite intersection of nonempty opens is nonempty, so this is an equivalence relation. On an irreducible affine chart $V$, a regular function is locally a quotient of polynomial functions. Any one nonempty such neighborhood therefore represents an element of $\operatorname{Frac}k[V]$, and conversely each fraction is regular on its nonempty denominator open. Equality on a nonempty open implies equality of fractions because the coordinate ring is a domain. This also agrees with the supplied principal-open field identification. [F2]

2.1 Any two nonempty affine charts meet because $X$ is irreducible. By [F4], their overlap contains a nonempty affine principal open in either chart. Restricting rational representatives to that common open and applying [F2] identifies both fields. Compatibility under further restriction makes this identification independent of the chosen common open, and triple overlaps give the cocycle identity. Affine charts exist by the finite-cover result. [F1, F2, F4, step 1.1]

3.1 If $f$ is dominant, the inverse image of a nonempty target open is nonempty. For nonempty source open $V$ and target open $W$, $V\cap f^{-1}(W)$ is nonempty: the image of $V$ is dense in the irreducible target, so it meets $W$. Choose an affine target chart $W$ and then, inside $f^{-1}(W)$, an affine source chart by [F1] and [F4]. This restriction is dominant, so [F3] gives an injective affine function-field pullback. The restriction compatibility from steps 1.1–2.1 and [F3] identifies it with a unique injection between the general fields. The use of AC is inherited exactly at [F2] and [F3]. [F1, F3, F4, step 2.1] ∎
