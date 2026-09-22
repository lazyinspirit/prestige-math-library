---
id: cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus
kind: corollary
title: Compact connected abelian subgroups lie in maximal tori
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-torus-and-maximal-torus-in-a-compact-lie-group, thm-maximal-tori-exist-in-compact-lie-groups, def-axiom-of-choice, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-cartans-closed-subgroup-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4, Corollary 4.46 and the preceding maximality discussion"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every compact connected abelian subgroup of a
compact Lie group is contained in a maximal torus.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$, and a subgroup $A\le G$ that is compact, connected and abelian.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it supplies the countable choice assumed by the closed-subgroup theorem in [L2] and supplies the stated hypothesis of [L3], whose current maximum-dimension proof needs no choice.

[L1] A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[L2] A closed subgroup of a finite-dimensional real Lie group is an embedded Lie subgroup, so a compact connected abelian subgroup of $G$ is a compact connected abelian Lie group, i.e. a torus; a torus of $G$ is by definition such a closed Lie subgroup ([[thm-cartans-closed-subgroup-theorem]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

[L3] Every torus of a compact Lie group is contained in a maximal torus ([[thm-maximal-tori-exist-in-compact-lie-groups]]).

## Proof

**Proof technique:** direct.

1.1 Since $G$ is Hausdorff and $A$ is compact, $A$ is closed by [L1]; by [L2] the subgroup $A$ is an embedded Lie subgroup, and it is a compact connected abelian Lie group, hence a torus in the sense of the definition. [L1, L2]

2.1 By [L3] the torus $A$ is contained in a maximal torus of $G$, which is the required conclusion. The Axiom of Choice entered through the closed-subgroup theorem in [L2] and supplies the retained hypothesis of [L3]; the proof of [L3] itself uses no choice. [A1, L2, L3, step 1.1] ∎
