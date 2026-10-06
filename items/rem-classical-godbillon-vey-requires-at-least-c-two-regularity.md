---
id: rem-classical-godbillon-vey-requires-at-least-c-two-regularity
kind: remark
title: "The supplied smooth Godbillon-Vey construction does not cover merely C1 foliations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-godbillon-vey-class, lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega, def-exterior-derivative-by-the-invariant-vector-field-formula, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "Introduction and \u00a73.1, printed pp. 1-4 and 10-11"
    - title: "S. Hurder and A. Katok, Differentiability, Rigidity and Godbillon-Vey Classes for Anosov Flows"
      url: "https://www.numdam.org/item/PMIHES_1990__72__5_0.pdf"
      locator: "Section 7, Proposition 7.1 and its proof, printed pp. 42-48"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. The construction in [[def-godbillon-vey-class]] is stated for smooth foliations and smooth defining data. It supplies no cohomological Godbillon–Vey class for merely $C^1$ foliations.

## Remarks

This is a limitation of the supplied construction, not a necessary regularity threshold for every Godbillon–Vey theory. Hurder–Katok, §7, Proposition 7.1, constructs a natural Godbillon–Vey invariant for transversally $C^{1,\alpha}$ codimension-one foliations of closed oriented $3$-manifolds when $\alpha>1/2$, extending the $C^2$ invariant. Their argument uses a distributional pairing; it is not the smooth differential-form construction supplied here.

The usual finite-regularity theory defines the Godbillon–Vey class for $C^2$ foliations and the Godbillon measure for $C^1$ foliations. Hurder–Langevin, §3, printed p.10, states this distinction, then explicitly specializes §3.1 to smooth foliations and refers elsewhere for the required finite-regularity modifications. Those modifications are not proved on this page. In particular one cannot obtain the $C^2$-atlas theory merely by replacing “smooth” by “$C^2$” in the smooth-form proof: the associated defining form may have lower regularity, and comparison with smooth de Rham cohomology requires additional work.
