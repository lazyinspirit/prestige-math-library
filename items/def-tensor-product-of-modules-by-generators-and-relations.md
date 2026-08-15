---
id: def-tensor-product-of-modules-by-generators-and-relations
kind: definition
title: "The tensor product $M\\otimes_R N$ from the additive group underlying the free $\\mathbb Z$-module on $M\\times N$, elementary tensors, and finite tensor sums"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-balanced-and-bilinear-maps, def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules, def-generated-subgroup, def-quotient-group]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "C. Dennis, Week 1 recap on tensor products"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
    - title: "H. Miller, Lectures on Algebraic Topology I, Sections 20-21"
      url: "https://math.mit.edu/~hrm/papers/905-notes-aug19.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a unital ring, $M$ a right $R$-module, and $N$ a left $R$-module. Let

$$F:=\mathbb Z^{(M\times N)}$$

be the free $\mathbb Z$-module on the set $M\times N$ ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]), and write $e_{(m,n)}$ for its standard basis elements. The additive group of $F$ is abelian. Let $H$ be the subgroup generated ([[def-generated-subgroup]]) by all elements

$$e_{(m+m',n)}-e_{(m,n)}-e_{(m',n)},$$

$$e_{(m,n+n')}-e_{(m,n)}-e_{(m,n')},$$

and

$$e_{(mr,n)}-e_{(m,rn)}$$

as $m,m'$ range over $M$, $n,n'$ over $N$, and $r$ over $R$. Since every subgroup of an abelian group is normal, the quotient group $F/H$ is defined ([[def-quotient-group]]). The **tensor product of $M$ and $N$ over $R$** is

$$M\otimes_RN:=F/H.$$

The coset of $e_{(m,n)}$ is the **elementary tensor** $m\otimes n$. Every tensor is a finite sum of elementary tensors, because every element of $F$ is a finite $\mathbb Z$-linear combination of basis elements and integer coefficients may be absorbed into either additive variable. The defining relations give

$$(m+m')\otimes n=m\otimes n+m'\otimes n,\qquad m\otimes(n+n')=m\otimes n+m\otimes n',$$

and

$$(mr)\otimes n=m\otimes(rn).$$

In particular $0\otimes n=0=m\otimes0$. No $R$-module structure on $M\otimes_RN$ is part of this arbitrary-ring definition; at this stage it is an abelian group.
