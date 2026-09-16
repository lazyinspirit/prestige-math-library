---
id: fs-a-root-system-determines-a-compact-connected-semisimple-group-up-to-isomorphism
kind: false-statement
title: Root systems determine only isogeny class
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems, prop-central-quotients-correspond-to-intermediate-character-lattices, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §7 and Chapter V §8 (isogeny versus isomorphism)"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. A root system determines a compact connected
semisimple group up to isomorphism.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the groups $SU(2)$ and $SO(3)$ with their standard structures.

[L1] The simply connected form and the adjoint form of a root system are centrally isogenous but generally not isomorphic; for type $A_1$ the simply connected form is $SU(2)$ and the adjoint form is $SO(3)=SU(2)/\{\pm I\}$ ([[thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems]], [[prop-central-quotients-correspond-to-intermediate-character-lattices]]).

[L2] The centre of $SU(2)$ is $\{\pm I\}$, of order two, while the centre of $SO(3)$ is trivial: a central element of $SO(3)$ commutes with every rotation, and a rotation commuting with all rotations is the identity. [L1]

## Refutation

**Proof technique:** direct.

1.1 Both $SU(2)$ and $SO(3)$ are compact, connected and semisimple, and both have root system of type $A_1$; indeed $SO(3)$ is the quotient of $SU(2)$ by the central subgroup $\{\pm I\}$ of order two by [L1], and the quotient map is a finite central isogeny. [L1]

1.2 An isomorphism of Lie groups carries the centre onto the centre; by [L2] the centres are $\{\pm I\}$ for $SU(2)$ and the trivial group for $SO(3)$, so no isomorphism exists. [L2]

2.1 Hence the type $A_1$ root system determines $SU(2)$ and $SO(3)$ only up to finite central isogeny, not up to isomorphism; the statement is false and the correct classification theorem retains the isogeny qualification, with the intermediate central quotients recorded by their character lattices. [L1, step 1.1, step 1.2] ∎
