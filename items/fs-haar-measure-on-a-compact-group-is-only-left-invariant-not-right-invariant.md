---
id: fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant
kind: false-statement
title: Compact Haar measure is bi-invariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normalized-haar-measure-on-a-compact-lie-group, def-axiom-of-choice, def-left-right-and-bi-invariant-borel-measure-on-a-lie-group]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, uniqueness of normalized Haar measure on a compact group"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Normalized Haar measure on a compact group is only
left invariant, not right invariant.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $\mu$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through [L1].

[L1] Every compact Lie group has a unique regular Borel probability measure invariant under left and right translations and inversion ([[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[L2] A finite Radon measure $\mu$ is right invariant when $\mu(Eh)=\mu(E)$ for all Borel $E$ and all $h\in G$ ([[def-left-right-and-bi-invariant-borel-measure-on-a-lie-group]]).

## Refutation

**Proof technique:** direct.

1.1 For fixed $h\in G$ define $\mu_h(E):=\mu(Eh)$; since right translation is a homeomorphism and $\mu$ is a regular Borel probability, $\mu_h$ is again a regular Borel probability, and it is left invariant: $\mu_h(gE)=\mu(gEh)=\mu(Eh)=\mu_h(E)$ for all $g$, because $\mu$ is left invariant. [L2]

2.1 By the uniqueness statement of [L1] we get $\mu_h=\mu$ for every $h$, so $\mu(Eh)=\mu(E)$ for all Borel $E$ and $h$: normalized Haar measure on a compact group is right invariant as well as left invariant. [L1, step 1.1]

3.1 Hence the statement of this item is false: the correct conclusion is bi-invariance, and the uniqueness argument above shows that no example of a compact group with a merely left-invariant normalized Haar measure exists. [A1, L1, step 2.1]∎
