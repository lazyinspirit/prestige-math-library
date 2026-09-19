---
id: cor-normalized-haar-measure-on-a-compact-lie-group
kind: corollary
title: Normalized Haar measure on a compact Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-left-right-and-bi-invariant-borel-measure-on-a-lie-group, cor-normalized-haar-probability-on-a-compact-group, def-axiom-of-choice, def-left-haar-integral-and-left-haar-measure]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, (4.1)–(4.2) and Chapter VIII §1 for the uniqueness argument"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§3–§4, uniqueness of Haar measure on a compact group"
proof_strategy: direct
landmark: true
---

## Statement

Assume the Axiom of Choice. Every compact Lie group has a unique regular Borel
probability measure invariant under left and right translations and inversion.

## Facts & Assumptions

**Given:** A compact Lie group $G$ with identity $e$.

[A1] The Axiom of Choice is the choice principle of [[def-axiom-of-choice]]; it is inherited here through [L1], which is proved under AC.

[L1] Every compact Hausdorff group has a unique left Haar probability measure, and that measure is right invariant and inversion invariant as well ([[cor-normalized-haar-probability-on-a-compact-group]]).

[L2] A left Haar measure is by definition a nonzero Borel measure that is finite on compact sets, outer regular on Borel sets and inner regular on open sets; a probability measure is a left Haar measure of total mass one ([[def-left-haar-integral-and-left-haar-measure]]).

[L3] A finite Radon measure is left invariant when $\mu(gE)=\mu(E)$ for all Borel $E$ and $g$, right invariant when $\mu(Eg)=\mu(E)$, inversion invariant when $\mu(E^{-1})=\mu(E)$, and bi-invariant when both translation conditions hold; for a compact group a finite Radon measure is a probability measure exactly when its total mass is one ([[def-left-right-and-bi-invariant-borel-measure-on-a-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 A finite-dimensional Lie group is a Hausdorff topological group, and compactness is a topological property, so a compact Lie group is a compact Hausdorff group; by [L1] it therefore carries a unique left Haar probability measure $\mu$, which is right invariant and inversion invariant. [L1, L2, algebra]

1.2 Since $G$ is compact, every left Haar measure on $G$ has finite positive total mass and can be normalized by dividing by that mass; compactness alone does not make an arbitrary Haar measure a probability measure. Conversely, a regular Borel probability measure that is left invariant is a left Haar measure of total mass one in the sense of [L2]. Hence the uniqueness assertion of [L1] is exactly uniqueness among regular Borel probability measures that are left invariant. [L1, L2]

2.1 By [L3] the measure $\mu$ of step 1.1 is bi-invariant satisfying all three invariance conditions, so a measure with the stated properties exists. [L3, step 1.1]

2.2 For uniqueness let $\nu$ be any regular Borel probability measure invariant under left and right translations and inversion. Then $\nu$ is a left Haar probability measure, so $\nu=\mu$ by the uniqueness in [L1], applied through step 1.2. [L1, step 1.2]

3.1 Existence and uniqueness are established, and the Axiom of Choice entered exactly through the uniqueness-and-existence statement [L1]. [A1, step 2.1, step 2.2] ∎
