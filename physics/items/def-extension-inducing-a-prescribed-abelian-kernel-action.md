---
id: def-extension-inducing-a-prescribed-abelian-kernel-action
kind: definition
title: "An extension inducing a prescribed abelian kernel action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]
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

Let $M$ be an abelian group and $G$ a group acting on $M$. An extension

$$1\to M\xrightarrow{i}E\xrightarrow{\pi}G\to1$$

**induces the prescribed action** when for each $g\in G$ and each lift
$\widetilde g\in E$ with $\pi(\widetilde g)=g$, the rule

$$g\cdot m:=i^{-1}(\widetilde g\,i(m)\,\widetilde g^{-1})$$

recovers the given action of $G$ on $M$.

This is well defined because changing the lift by an element of $i(M)$ does not
change the conjugation action on $i(M)$ when $M$ is abelian. Equivalence of
such extensions is the fixed-kernel fixed-quotient equivalence of
[[def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]].
