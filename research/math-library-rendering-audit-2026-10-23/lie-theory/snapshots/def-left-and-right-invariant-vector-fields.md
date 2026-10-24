---
id: def-left-and-right-invariant-vector-fields
kind: definition
title: Left- and right-invariant vector fields
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle", "def-smooth-vector-field-as-a-tangent-bundle-section", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Definition 2.26, printed page 21
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$, and let $X$ be a smooth vector field on a Lie
group $G$. The field $X$ is **left invariant** if

$$d(L_g)_h(X_h)=X_{gh}$$

for every $g,h\in G$. It is **right invariant** if

$$d(R_g)_h(X_h)=X_{hg}$$

for every $g,h\in G$, where $R_g(h)=hg$ is the ordinary right translation.

In the left-invariant case, setting $h=e$ gives
$X_g=d(L_g)_e(X_e)$. Conversely, if that identity-value formula holds for
every $g$, then the chain rule and $L_g\circ L_h=L_{gh}$ give

$$d(L_g)_h(X_h)=d(L_g)_h d(L_h)_e(X_e)=d(L_{gh})_e(X_e)=X_{gh}.$$

Thus left invariance is equivalent to the displayed identity-value formula.
Likewise, $R_g\circ R_h=R_{hg}$ shows that right invariance is equivalent to
$X_g=d(R_g)_e(X_e)$. This agrees with Kirillov's Definition 2.26 after
translating the source's inverse-parametrized right action into the ordinary
right-translation convention used here.

The assumption $\mathrm{AC}_\omega$ is inherited exactly through the supplied
definition of a smooth vector field on the canonical smooth tangent bundle and
through the supplied translation trivializations. The chain-rule calculation
is pointwise and makes no further choice. A Lie group is nonempty; in dimension
zero the tangent values are all zero, and the same definition applies in
dimension one. No metric or nondegeneracy hypothesis occurs, and Lie groups are
boundaryless by the page convention.
