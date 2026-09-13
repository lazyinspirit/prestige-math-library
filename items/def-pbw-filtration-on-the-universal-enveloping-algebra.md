---
id: def-pbw-filtration-on-the-universal-enveloping-algebra
kind: definition
title: PBW filtration on the enveloping algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-universal-enveloping-algebra, def-direct-sum-of-a-family-of-modules]
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
    - title: "Etingof, MIT 18.745 notes, §§12.2 and 13.1, printed pp. 70 and 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.2, printed pp. 72–74"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

Let $q:T(\mathfrak g)\twoheadrightarrow U(\mathfrak g)$ be the defining
quotient map. For $n\geq0$, define

$$F_nU(\mathfrak g)=q\left(\bigoplus_{0\leq r\leq n}\mathfrak g^{\otimes r}\right),$$

and put $F_{-1}U(\mathfrak g)=0$. This is the **PBW filtration**. It is
increasing and exhaustive: every tensor-algebra element has finite degree
support, hence every enveloping-algebra element belongs to some $F_n$.

Equivalently, $F_n$ is spanned by products of at most $n$ elements from the
image $\iota_{\mathfrak g}(\mathfrak g)$, with the empty product included. This definition
does not assume that $\iota_{\mathfrak g}$ is injective.
