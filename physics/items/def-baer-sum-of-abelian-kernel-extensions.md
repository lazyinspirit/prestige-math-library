---
id: def-baer-sum-of-abelian-kernel-extensions
kind: definition
title: "Baer sum of abelian-kernel extensions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extension-inducing-a-prescribed-abelian-kernel-action, def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Definition

Let

$$1\to M\to E_1\to G\to1,\qquad 1\to M\to E_2\to G\to1$$

be two extensions inducing the same action on the abelian kernel $M$.

Their **Baer sum** is the extension obtained by first forming the pullback
$E_1\times_G E_2$, whose kernel is naturally $M\oplus M$, and then pushing out
that kernel along the addition map $M\oplus M\to M$, $(m,n)\mapsto m+n$.

The resulting extension class is written $[E_1]+[E_2]$.
