---
id: rem-onan-scott-eight-type-and-five-type-conventions
kind: remark
title: "This page uses the coarse five-type O'Nan-Scott convention"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types]
verification:
  precheck: n/a
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local convention repair; full remark, definition interface and cited comparison read; rendercheck passed. Not an independent judge or classification-proof certification."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "M. W. Liebeck, C. E. Praeger and J. Saxl, On the O'Nan-Scott theorem, Section 1"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/9286080793AA683DFB749077A44F9305/S144678870003216Xa.pdf/div-class-title-on-the-o-nan-scott-theorem-for-finite-primitive-permutation-groups-div.pdf"
    - title: "S. D. Smith, finite simple groups text, Remark 6.1.4, comparison table"
      url: "https://homepages.math.uic.edu/~smiths/book.pdf"
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

Modern accounts often use eight types: HA (affine), HS (holomorph simple), HC
(holomorph compound), AS (almost simple), PA (product action), SD (simple
diagonal), CD (compound diagonal), and TW (twisted wreath). Relative to the
five labels in [[def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types]],
the correspondence with the Liebeck–Praeger–Saxl convention is:

| Five-type branch | Modern types |
|---|---|
| Affine (I) | HA |
| Almost simple (II) | AS |
| Simple diagonal (III(a)) | SD, HS |
| Product action (III(b)) | PA, CD, HC |
| Twisted wreath (III(c)) | TW |

In III(a), the one-minimal-normal-subgroup case is SD and the
two-regular-minimal-normal-subgroup case is HS. In III(b), an almost-simple
component gives PA; a simple-diagonal component gives CD or HC, according
to whether there is one minimal normal subgroup or two. Thus HC and CD
belong to the coarse product-action branch, not the simple-diagonal branch.
This is a terminology comparison, not a proof that the five branches exhaust
all finite primitive groups or a substitute for the twisted-wreath construction.
