---
id: def-lie-bracket-on-the-tangent-space-of-a-lie-group
kind: definition
title: Lie bracket on the tangent space of a Lie group
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant", "def-lie-bracket-of-smooth-vector-fields"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$, let $G$ be a Lie group with identity $e$, and
write $\mathfrak g=T_eG$. For $u,v\in\mathfrak g$, let $u^L$ and $v^L$ be
their unique left-invariant smooth extensions. Define the **Lie-group tangent
bracket** by

$$[u,v]_G=[u^L,v^L]_e.$$

The evaluation isomorphism
[[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]]
makes both extensions unique, so the definition is unambiguous. Moreover,
[[prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant]] makes
$[u^L,v^L]$ left invariant, and hence its identity value determines it:

$$[u^L,v^L]=[u,v]_G^L.$$

The bracket on fields is the library's fixed commutator
$[X,Y]f=X(Yf)-Y(Xf)$ from
[[def-lie-bracket-of-smooth-vector-fields]]. This explicitly fixes the sign
for every later occurrence of $\operatorname{ad}$, the Maurer--Cartan equation,
and right-invariant fields. In particular, no opposite vector-field
commutator convention is being imported from a source.

The assumption $\mathrm{AC}_\omega$ is inherited exactly through the supplied
invariant-extension and bracket-closure results; evaluating the supplied
vector-field bracket at $e$ adds no choice. A Lie group is nonempty. If
$\dim G=0$, then $\mathfrak g=0$ and this is the unique zero bracket; the
definition applies unchanged in dimension one. No metric or nondegeneracy
hypothesis occurs, and the group is boundaryless by convention.
