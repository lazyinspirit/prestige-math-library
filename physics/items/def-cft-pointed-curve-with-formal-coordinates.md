---
id: def-cft-pointed-curve-with-formal-coordinates
kind: definition
title: Pointed curve with formal coordinates
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-axiom-of-choice
  - def-cft-smooth-projective-complex-curve
  - def-cft-aut-o-formal-coordinate-group
  - lem-cft-formal-coordinate-fibre-is-aut-o-torsor
dependency_roles:
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-cft-smooth-projective-complex-curve: mathematical-premise
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
  lem-cft-formal-coordinate-fibre-is-aut-o-torsor: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Frenkel, Vertex Algebras and Algebraic Curves, Bourbaki survey, §§4.1–4.3 and 5.1
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: Algebraic curves, formal-coordinate changes, and pointed-surface conformal blocks.
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 3, §3.1
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch3.pdf
      locator: Formal coordinates and diagonal chiral operations on a smooth curve.
---

## Definition

Assume full AC. A **pointed curve with formal coordinates** is a smooth projective complex curve $X$ with specified presentation as defined above, an integer $n\ge0$, an ordered tuple of pairwise distinct points $(p_1,\ldots,p_n)$, and for every $i$ an isomorphism of complete local rings $t_i:\widehat{\mathcal O}_{X,p_i}\xrightarrow{\sim}\mathbb C\llbracket t\rrbracket$. The genus $g(X)$ is the genus of the underlying compact connected Riemann surface, using the Euler-characteristic convention of the imported genus definition. The full AC assumption is carried because that supplier's stated surface-classification proof uses it; this definition itself makes no further selection.

For a family, the marked points are pairwise disjoint holomorphic sections of a family as defined in the smooth-projective-curve definition, and each $t_i$ is the relative formal coordinate $\tau_i:\widehat{\mathcal O}_{\mathcal X,s_i(S)}\xrightarrow{\sim}\mathcal O_S\llbracket t_i\rrbracket$ of that supplier, preserving the section ideal as specified there. For an individual marked point, put $\widehat{\mathfrak m}_{p_i}:=\ker(\widehat{\mathcal O}_{X,p_i}\to\mathbb C)$ and $\xi_i:=t_i^{-1}(t)\in\widehat{\mathfrak m}_{p_i}$. The data retain the full formal coordinate isomorphisms; they do not pass to only the first-order class $\xi_i\bmod\widehat{\mathfrak m}_{p_i}^2$, a nonzero element of the cotangent space $\widehat{\mathfrak m}_{p_i}/\widehat{\mathfrak m}_{p_i}^2\cong\mathfrak m_{p_i}/\mathfrak m_{p_i}^2$. The identification is induced by completion and follows by truncating a local chart parameter at degree two. Replacing the full coordinate by this class requires a separately specified descent action of the remaining coordinate changes, which this item does not assert. An analytic coordinate germ means a holomorphic chart coordinate $z$ centered at $p$. Taylor expansion in $z$ induces a continuous isomorphism $\tau_z:\widehat{\mathcal O}_{X,p}\xrightarrow{\sim}\mathbb C\llbracket t\rrbracket$ sending $z$ to $t$; its restriction to holomorphic germs has convergent Taylor series. An arbitrary formal coordinate isomorphism need not be of this form, and formal series need not converge. No stability condition is imposed here: stable $(g,n)$, meaning $2g-2+n>0$, is required only when a later moduli or sewing theorem explicitly assumes it. No moduli stack or boundary-stratum theorem is included.

## Definition references

[[def-riemann-surface-and-holomorphic-atlas]]

[[def-genus-and-euler-characteristic-compact-riemann-surface]]

[[def-axiom-of-choice]]

[[def-cft-smooth-projective-complex-curve]]

[[def-cft-aut-o-formal-coordinate-group]]

[[lem-cft-formal-coordinate-fibre-is-aut-o-torsor]]
