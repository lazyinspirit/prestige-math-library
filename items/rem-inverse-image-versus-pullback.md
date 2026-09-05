---
id: rem-inverse-image-versus-pullback
kind: remark
title: "Inverse image of sheaves and pullback of modules are not the same construction"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inverse-image-presheaf-and-sheaf, def-pullback-module-ringed-spaces]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sections 6.21 and 6.26"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Sections 2.7 and 6.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

The notation $f^{-1}$ and $f^*$ describes two different operations.

The inverse image $f^{-1}\mathcal G$ only uses the underlying continuous map
$f:X\to Y$ and is defined for any sheaf on $Y$
([[def-inverse-image-presheaf-and-sheaf]]). It changes the topological base
space but does not yet change scalars.

The pullback $f^*\mathcal G$ is defined only after choosing a morphism of
ringed spaces, and for modules it adds the scalar extension
$$
\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}-
$$
to the inverse image
([[def-pullback-module-ringed-spaces]]).

Thus $f^{-1}$ is the sheaf-theoretic inverse image, whereas $f^*$ is the
module-theoretic pullback built from $f^{-1}$ plus tensoring.
