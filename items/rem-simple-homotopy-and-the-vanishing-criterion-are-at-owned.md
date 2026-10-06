---
id: rem-simple-homotopy-and-the-vanishing-criterion-are-at-owned
kind: remark
title: "Simple homotopy and the vanishing criterion are owned by AT"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 11
deps: [def-simple-homotopy-equivalence, thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, def-whitehead-torsion-of-an-h-cobordism, def-h-cobordism]
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 2 §2.3, printed pp. 34–38"
    - title: "James F. Davis and Paul Kirk, Lecture Notes in Algebraic Topology (author-hosted complete text)"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "Theorem 11.31, printed pp. 343--345 (PDF pp. 358--360)"
---
## Remark

The letter "s" in "s-cobordism" refers to *simple* homotopy equivalence. AT-22
owns the definition of simple homotopy equivalence
([[def-simple-homotopy-equivalence]]) and the theorem that a finite CW homotopy
equivalence is simple if and only if its Whitehead torsion vanishes
([[thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes]],
[[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]]); this page cites
both and does not mint a second definition, no new expansion–collapse calculus
is introduced here, and the parity and basis conventions are those of AT-22.

For a fixed presentation $H$ the condition $\tau_H(W,M_0)=0$ of
[[def-whitehead-torsion-of-an-h-cobordism]] is equivalent to the inclusion
$M_0\hookrightarrow W$ being simple for the associated finite CW structures, by
the AT-22 criterion. The presentation-relative s-cobordism theorem asked on
this page cares whether at least one such presentation exists; it does not
identify the torsion classes of presentations that are not related by the
elementary handle modifications of this page, and it does not promote a
vanishing class in one presentation to a simple homotopy equivalence of
arbitrary CW models. The h-cobordism hypothesis used throughout is the one of
[[def-h-cobordism]].
