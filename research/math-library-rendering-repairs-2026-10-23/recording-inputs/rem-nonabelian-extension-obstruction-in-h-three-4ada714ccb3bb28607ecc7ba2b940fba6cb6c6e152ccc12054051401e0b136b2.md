---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/rem-nonabelian-extension-obstruction-in-h-three.json
  precheck: n/a
id: rem-nonabelian-extension-obstruction-in-h-three
kind: remark
title: "Nonabelian extension obstruction in $H^3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, thm-nonabelian-extension-obstruction-and-torsor-with-choice]
sources:
  scraped: []
  references:
    - title: "Samuel Eilenberg and Saunders Mac Lane, Cohomology Theory in Abstract Groups. II: Group Extensions with a non-Abelian Kernel, Annals of Mathematics (1947)"
      url: "https://doi.org/10.2307/1969174"
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"

---

## Remark

The classification theorem on this page assumes the Axiom of Choice and an
abelian kernel with a specified action. For a possibly nonabelian kernel $N$,
assume Choice and prescribe an outer action
$Q\to\operatorname{Out}(N)$.

Then [[thm-nonabelian-extension-obstruction-and-torsor-with-choice]] supplies
an obstruction in $H^3(Q,Z(N))$ that vanishes exactly when an extension
exists. When one exists, the equivalence classes form a torsor under
$H^2(Q,Z(N))$. In general the torsor has no preferred zero class; a chosen
base extension identifies it with the group.
