---
id: rem-algorithmic-role-of-onan-scott
kind: remark
title: "Computing the socle of a finite primitive permutation group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-minimal-normal-subgroup-and-socle, thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]
sources:
  scraped: []
  references:
    - title: "Computing the socle of a finite primitive permutation group"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-algorithmic-role-of-onan-scott.json
---


For a finite permutation group given by generators on a finite set, the socle can be computed by a terminating enumeration. First close the generating set under products and inverses; the process stabilizes inside the finite symmetric group and yields the full list of group elements. Enumerate its subsets. A subset is a subgroup exactly when it contains the identity and is closed under products and inverses, and it is normal exactly when conjugation by each group element preserves it. All these tests are finite.

Among the nontrivial normal subgroups retain those having no proper nontrivial normal subgroup of the whole group inside them. These are precisely the minimal normal subgroups of [[def-minimal-normal-subgroup-and-socle]]. Closing their union under products and inverses computes their generated subgroup, which is the socle by that definition. If there are no such subgroups, this closure is the trivial group. This algorithm uses no classification theorem and makes no efficiency claim.

For a faithful primitive action, each retained minimal normal subgroup is transitive by [[thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]]. Its orbits can also be computed directly from the finite permutation list. Thus the local structural theorem supplies a concrete consistency condition on the computed normal subgroups and socle. Determining the socle and its orbits provides structural data for further calculations on the given group.
