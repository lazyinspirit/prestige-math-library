---
id: def-left-right-and-bi-invariant-borel-measure-on-a-lie-group
kind: definition
title: Left, right, and bi-invariant Borel measures
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-group, def-left-haar-integral-and-left-haar-measure, def-radon-measure-on-an-lch-space, thm-rmk-uniqueness-among-radon-measures]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, especially (4.1) and the normalized measure of (4.2)"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§1 and §8"
---

## Definition

Let $G$ be a Lie group with identity $e$ ([[def-lie-group]]). A **finite Radon
measure** on $G$ is a Borel measure that is finite on compact sets and inner
regular on open sets and outer regular on Borel sets, exactly the Radon
convention of [[def-left-haar-integral-and-left-haar-measure]]; it is a
**probability measure** when $\mu(G)=1$. A finite Radon measure $\mu$ on $G$ is

- **left invariant** when $\mu(gE)=\mu(E)$,
- **right invariant** when $\mu(Eg)=\mu(E)$,
- **inversion invariant** when $\mu(E^{-1})=\mu(E)$, and
- **bi-invariant** when it is both left and right invariant,

for every $g\in G$ and every Borel set $E\subseteq G$.

For a finite Radon measure the set-theoretic conditions above are equivalent to
their integral forms: $\mu$ is left invariant if and only if
$\int_G f(a^{-1}x)\,d\mu(x)=\int_G f(x)\,d\mu(x)$ for every $a\in G$ and every
continuous $f$ on $G$ of compact support, and similarly on the right, with
inversion in place of translation for the third condition. Indeed, the
translated measure $E\mapsto\mu(aE)$ is again a finite Radon measure, and two
finite Radon measures on a locally compact Hausdorff space agree if and only if
they give the same integral to every continuous compactly supported function
([[def-radon-measure-on-an-lch-space]], [[thm-rmk-uniqueness-among-radon-measures]]).

On a compact group the continuous functions are the compactly supported
functions, and a finite Radon measure is a probability measure exactly when its
integral of the constant function $1$ equals $1$. The normalized Haar measure
of a compact Lie group, constructed elsewhere, is the standard example of a
bi-invariant probability measure ([[cor-normalized-haar-measure-on-a-compact-lie-group]]);
this definition is the vocabulary in which its invariance is stated.
