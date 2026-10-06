---
id: rem-highest-weights-can-have-the-same-primitive-ideal
kind: remark
title: "Highest weights can have the same primitive ideal"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [prop-annihilators-of-simple-highest-weight-modules-are-primitive, def-primitive-ideal-of-an-enveloping-algebra, def-annihilator-ideal-of-a-lie-algebra-module, def-axiom-of-choice, lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 25.1, the note after Theorem 25.4, printed pp.123-124"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1-2.2, printed pp.6-9"
---

## Remark

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $\mathfrak g$ be finite-dimensional complex semisimple. The assignment $\lambda\mapsto I(\lambda)=\operatorname{Ann}_{U(\mathfrak g)}L(\lambda)$
from weights to primitive ideals ([[prop-annihilators-of-simple-highest-weight-modules-are-primitive]],
[[def-primitive-ideal-of-an-enveloping-algebra]],
[[def-annihilator-ideal-of-a-lie-algebra-module]]) is not injective in general,
and a fixed central character can carry more than one primitive ideal;
describing the fibres of this map is the content of Joseph's theory of Goldie
rank polynomials and of Kazhdan-Lusztig cell theory, which is not part of the
algebraic prefix on this page. For noninjectivity, already in $\mathfrak{sl}_2$ the distinct weights $1/2$ and $-5/2$ have normalized Casimir value $5/8$, which is not $n(n+2)/2$ for any integer $n\ge0$: those values are $0$ for $n=0$ and at least $3/2$ for $n\ge1$. By [[lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]], both Verma modules are simple and have the same annihilator, namely the central ideal. In contrast, the
trivial central character carries the distinct primitive ideals
$\operatorname{Ann}L(0)$ and $\operatorname{Ann}L(-2)$ — the annihilators of
the trivial module and of the simple Verma module $M(-2)=L(-2)$ — so Duflo's
surjectivity is not a bijection between weights and primitive ideals.

## Remarks

- **What is recorded here and what is not.** This item records a boundary: the
  map from weights to primitive ideals has fibres of size greater than one, and
  their description requires the character-polynomial machinery of Joseph,
  Barbasch and Vogan. No fibrewise classification is asserted, and the item is
  not used as a supplier by any proof on this page.
- **The $\mathfrak{sl}_2$ witness.** The two annihilators named above are
  distinct: the trivial module is finite-dimensional with $h$ acting by $0$,
  while $h$ acts with nonzero eigenvalue $-2$ on the highest vector of
  $M(-2)$, so the annihilators differ. Simplicity of $M(-2)$ follows from the $\mathfrak{sl}_2$ irreducibility criterion recorded in [[lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]]: $-2\notin\mathbb Z_{\ge0}$. This is the same witness that the
  companion page records in full; the comparison is by central character,
  since $\chi_0=\chi_{-2}$ on $\mathfrak{sl}_2$.
