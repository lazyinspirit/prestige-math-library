---
id: def-regular-element-and-rank-of-a-complex-lie-algebra
kind: definition
title: Regular element and rank
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-algebra-over-a-field, def-semisimple-and-nilpotent-endomorphisms, def-derivation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20, Definition 20.2"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra
([[def-lie-algebra-over-a-field]]), and for $x\in\mathfrak g$ write
$\mathfrak g^x=\ker(\operatorname{ad}_x)=\{y\in\mathfrak g:[x,y]=0\}$ using
$\operatorname{ad}_x(y)=[x,y]$ from [[def-derivation-of-a-lie-algebra]]. The
numbers $\dim\mathfrak g^x$ are natural numbers bounded by $\dim\mathfrak g$,
so the set of values attained has a least element; it is denoted
$\operatorname{rank}(\mathfrak g)$.

An element $x\in\mathfrak g$ is **regular** if $\dim\mathfrak g^x=\operatorname{rank}(\mathfrak g)$,
and **regular semisimple** if in addition $\operatorname{ad}_x$ is a
semisimple endomorphism in the sense of
[[def-semisimple-and-nilpotent-endomorphisms]]. Thus every regular semisimple
element is regular and has semisimple adjoint operator, and for $\mathfrak
g=0$ the single element $0$ is regular semisimple with
$\operatorname{rank}(0)=0$.
