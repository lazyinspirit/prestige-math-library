---
id: def-normalized-set-theoretic-section-and-factor-set
kind: definition
title: "Normalized set-theoretic section and factor set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extension-inducing-a-prescribed-abelian-kernel-action]
verification:
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

For an extension

$$1\to M\xrightarrow{i}E\xrightarrow{\pi}G\to1$$

inducing the given action on the abelian kernel $M$, a **normalized
set-theoretic section** is a map $s:G\to E$ such that

$$\pi\circ s=\operatorname{id}_G,\qquad s(1)=1.$$

Its **factor set** is the function $f_s:G\times G\to M$ determined by

$$i(f_s(g,h))=s(g)s(h)s(gh)^{-1}.$$

Because $\pi(s(g)s(h)s(gh)^{-1})=1$, the right-hand side lies in $i(M)$, so
$f_s(g,h)$ is well defined.
