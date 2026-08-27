---
id: def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types
kind: definition
title: "Affine, almost simple, diagonal, product action, and twisted wreath types"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-imprimitive-wreath-product-of-permutation-groups, def-regular-actions, def-almost-simple-finite-group, prop-unique-abelian-minimal-normal-subgroup-gives-affine-type]
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
    - title: "M. W. Liebeck, C. E. Praeger, and J. Saxl, On the O'Nan-Scott Theorem for Finite Primitive Permutation Groups"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/9286080793AA683DFB749077A44F9305/S144678870003216Xa.pdf/div-class-title-on-the-o-nan-scott-theorem-for-finite-primitive-permutation-groups-div.pdf"
---

## Definition

For a finite primitive permutation group $G \le \operatorname{Sym}(\Omega)$,
the five coarse O'Nan-Scott types used on this page are:

- **Affine type:** the socle is the unique minimal normal subgroup, it is
  abelian and regular, and [[prop-unique-abelian-minimal-normal-subgroup-gives-affine-type]]
  identifies it with a finite vector space.
- **Almost simple type:** the socle is a nonabelian simple group and the whole
  group lies between that socle and its full automorphism group in the sense of
  [[def-almost-simple-finite-group]].
- **Diagonal type:** the socle is a direct product $T^k$, with $k\ge2$, of isomorphic
  nonabelian simple groups, and the action is the standard diagonal action on a
  coset space of a diagonal subgroup.
- **Product action type:** after identifying $\Omega$ with $\Delta^\ell$ for
  some $\ell\ge2$, there is a primitive group $H$ on $\Delta$ of almost simple
  or diagonal type, with $N=\operatorname{Soc}(H)$, such that
  $$N^\ell=\operatorname{Soc}(G)\le G\le H\wr K,$$
  where $K\le S_\ell$ is the transitive group induced by $G$ on the
  coordinates and the wreath product has its product action. If
  $(h_1,\ldots,h_\ell;k)\in H^\ell\rtimes K$, its product action is
  $$(\delta_1,\ldots,\delta_\ell)\longmapsto(\delta_{k^{-1}(1)}h_{k^{-1}(1)},\ldots,\delta_{k^{-1}(\ell)}h_{k^{-1}(\ell)}).$$
- **Twisted wreath type:** the socle is again regular and nonabelian, but the
  regular action is built from a twisted wreath product rather than from an
  abelian vector-space action.
