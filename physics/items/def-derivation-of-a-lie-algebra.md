---
id: def-derivation-of-a-lie-algebra
kind: definition
title: Derivations of Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-algebra-over-a-field, def-linear-map]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, derivations in §3.2"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Definition

A **derivation** of a Lie algebra $\mathfrak g$ is a linear map
$D:\mathfrak g\to\mathfrak g$ satisfying

$$D[x,y]=[Dx,y]+[x,Dy]$$

for all $x,y$. The vector space of derivations is denoted
$\operatorname{Der}(\mathfrak g)$. For $x\in\mathfrak g$, the linear map

$$\operatorname{ad}_x:\mathfrak g\to\mathfrak g,\qquad \operatorname{ad}_x(y)=[x,y],$$

is called an **inner derivation** once its derivation law is established by
Jacobi in the following proposition.
