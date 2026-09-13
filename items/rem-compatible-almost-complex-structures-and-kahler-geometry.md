---
id: rem-compatible-almost-complex-structures-and-kahler-geometry
kind: remark
title: Compatible almost-complex structures and Kähler geometry
status: published
origin: pipeline
deps: ["def-compatible-almost-kahler-metric", "def-lie-bracket-of-smooth-vector-fields"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definition 3.32 and Remark 3.33, pp. 42--43
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Remark

Every Kähler manifold is almost Kähler, but a compatible almost-complex
structure need not be integrable. A **Kähler manifold** requires that $J$ come
from a complex-manifold structure in addition to compatibility with the closed
form $\omega$. Thus the existence of compatible $J$ on every symplectic
manifold does not make every symplectic manifold Kähler.

For the sign convention used by the examples below, the Nijenhuis tensor is

$$N_J(X,Y)=[JX,JY]-J[JX,Y]-J[X,JY]-[X,Y].$$

Direct substitution of
[[def-lie-bracket-of-smooth-vector-fields|the vector-field commutator]] shows
that all derivatives of scalar coefficients cancel, so $N_J$ is
$C^\infty$-linear in $X$ and $Y$.  If $J$ is integrable, take local real
coordinates underlying holomorphic coordinates.  On their coordinate frame
$J$ has the constant standard matrix and all coordinate brackets vanish;
hence the displayed formula is zero on every pair of frame vectors and
therefore $N_J=0$.  Thus nonvanishing of $N_J$ is a direct obstruction to
integrability; the converse is the substantially deeper
Newlander–Nirenberg theorem and is not used here.

When $J$ is integrable, the identities
$g=\omega(\mathord\cdot,J\mathord\cdot)$ and
$\omega(\mathord\cdot,\mathord\cdot)=g(J\mathord\cdot,\mathord\cdot)$ connect
the symplectic, complex, and Riemannian descriptions.

All assertions are local and apply in real dimension zero. Compatibility
makes the associated metric positive definite, so degenerate forms are outside
the hypotheses. There is no interval or endpoint assertion, and the coordinate
test uses no choice principle.
