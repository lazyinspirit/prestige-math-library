---
id: def-chebotarev-prime-ideal-counting-function
kind: definition
title: "Chebotarev prime-ideal counting function with absolute norm convention"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-prime-and-maximal-ideals
  - def-absolute-norm-of-an-ideal
  - lem-finitely-many-number-field-ideals-of-bounded-norm
  - def-finite-galois-extension-and-galois-group
  - def-arithmetic-frobenius-coset
  - thm-frobenius-elements-above-a-prime-are-conjugate
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Remark 7.5, printed p. 260."
verification:
  precheck: n/a
---

## Definition

Let $F$ be a number field, let $L/F$ be a finite Galois extension, and put $G=\operatorname{Gal}(L/F)$. Let $C\subseteq G$ be stable under conjugation. For each nonzero prime ideal $\mathfrak p\subseteq\mathcal O_F$ unramified in $L$, let $\operatorname{Frob}_{\mathfrak p}(L/F)$ be the conjugacy class of arithmetic Frobenius elements above $\mathfrak p$, whose residue action is $x\mapsto x^{N_{F/\mathbb Q}\mathfrak p}$. Define
$$S_C(L/F)=\{\mathfrak p\subseteq\mathcal O_F:\mathfrak p\ne0,\ \mathfrak p\text{ is unramified in }L,\ \operatorname{Frob}_{\mathfrak p}(L/F)\subseteq C\}.$$
For real $x\ge1$, define
$$\pi_C(x;L/F)=\#\{\mathfrak p\in S_C(L/F):N_{F/\mathbb Q}\mathfrak p\le x\},$$
where $N_{F/\mathbb Q}\mathfrak p=|\mathcal O_F/\mathfrak p|$ is the absolute ideal norm. Thus prime ideals of the base field are counted, their residue degrees are included in their absolute norms, and ramified primes are omitted.

## Definition references

[[def-number-field]]

[[def-ring-of-integers-of-a-number-field]]

[[def-prime-and-maximal-ideals]]

[[def-absolute-norm-of-an-ideal]]

[[lem-finitely-many-number-field-ideals-of-bounded-norm]]

[[def-finite-galois-extension-and-galois-group]]

[[def-arithmetic-frobenius-coset]]

[[thm-frobenius-elements-above-a-prime-are-conjugate]]

[Milne, Class Field Theory, VIII §7, Remark 7.5](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
