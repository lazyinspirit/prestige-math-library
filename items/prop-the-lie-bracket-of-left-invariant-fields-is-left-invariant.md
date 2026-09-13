---
id: prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant
kind: proposition
title: The Lie bracket of left-invariant fields is left invariant
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-left-and-right-invariant-vector-fields", "prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle", "cor-diffeomorphism-pushforward-preserves-lie-brackets"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Definition 2.26, printed page 21, for the invariance convention
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $X$ and $Y$ are left-invariant smooth vector
fields on a Lie group $G$, then their Lie bracket $[X,Y]$ is left invariant.

The countable-choice assumption is used exactly through the supplied
invariant-field and smooth translation-trivialization results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$, and left-invariant smooth
vector fields $X,Y$ on $G$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Left invariance means that every left translation carries the field to
itself pointwise. [[def-left-and-right-invariant-vector-fields]].

[F3] Every left translation is a diffeomorphism.
[[prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle]].

[F4] Pushforward by a diffeomorphism preserves the Lie bracket.
[[cor-diffeomorphism-pushforward-preserves-lie-brackets]].

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$. By [F3], $L_g$ is a diffeomorphism. The pointwise invariance identities in [F2] say exactly that $(L_g)_*X=X$ and $(L_g)_*Y=Y$. [F2, F3]

2.1 Naturality [F4] and step 1.1 give $(L_g)_*[X,Y]=[(L_g)_*X,(L_g)_*Y]=[X,Y]$. Since $g$ was arbitrary, [F2] says that $[X,Y]$ is left invariant. [F2, F4, step 1.1]

3.1 A Lie group is nonempty. In dimension zero all vector fields and brackets vanish, while dimension one requires no change. No metric or nondegeneracy condition occurs, and the group is boundaryless by convention. The stated $\mathrm{AC}_\omega$ is inherited through [F2] and [F3]; fixing one arbitrary group element and applying bracket naturality makes no family selection. The proposition is a one-way closure statement, not a biconditional. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
