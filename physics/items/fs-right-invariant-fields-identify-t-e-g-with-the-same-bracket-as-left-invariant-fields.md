---
id: fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields
kind: false-statement
title: Right-invariant fields identify T_eG with the same bracket as left-invariant fields
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, prop-right-invariant-fields-carry-the-opposite-lie-bracket, def-matrix-units]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I, Section 10, printed page 69
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 3, Proposition 1 and proof, printed pages 44–45
---

## Statement refuted

Ordinary right-invariant fields identify $T_eG$ with the same Lie bracket as
ordinary left-invariant fields.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the upper-unitriangular $3$-by-$3$ group.

[F1] Right-invariant extensions carry the negative of the tangent bracket. [[prop-right-invariant-fields-carry-the-opposite-lie-bracket]].

[F2] Matrix units obey $E_{ij}E_{kl}=\delta_{jk}E_{il}$. [[def-matrix-units]].

[F3] Countable choice is the exact assumption inherited from [F1]. [[def-countable-choice]].

## Refutation

**Proof technique:** counterexample.

1.1 Put $X=E_{12}$ and $Y=E_{23}$. By [F2], their left-invariant tangent bracket is $[X,Y]=XY-YX=E_{13}\ne0$. [F2, algebra]

2.1 By [F1], the corresponding right-invariant fields satisfy $[X^R,Y^R]=-[X,Y]^R=-E_{13}^R$, not $E_{13}^R$. This disproves the same-bracket assertion. [F1, step 1.1]

3.1 The witness is nonempty and three-dimensional; dimensions zero and one have zero bracket and cannot witness the sign error. There is no metric, degeneracy, interval, endpoint, or biconditional. $\mathrm{AC}_\omega$ is propagated exactly through [F1], with no additional choice. [F1, F2, F3, step 1.1, step 2.1] ∎
