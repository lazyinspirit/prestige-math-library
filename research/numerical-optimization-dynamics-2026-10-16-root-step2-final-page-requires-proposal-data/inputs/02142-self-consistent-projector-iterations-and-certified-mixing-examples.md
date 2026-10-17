---
page: self-consistent-projector-iterations-and-certified-mixing-examples
title: "Self consistent projector iterations and certified mixing — Examples"
status: draft
items: []
examples:
  - ex-occupied-projector-discontinuity-at-zero-gap
  - ex-self-consistent-projector-two-cycle-with-gap
  - ex-affine-contractive-response-and-residual-error
  - ex-density-mixture-leaves-projector-manifold
  - ex-diis-singular-gram-fallback
  - ex-additive-eigensolve-tolerance-residual-certificate
---

These computations exhibit a finite-basis SCF two-cycle even with a positive
gap, the discontinuity at a gap closing, and an affine contraction with its
residual error bound. They add an eigensolver error to the residual certificate,
show a mixed density outside the projector manifold, and work out a singular
DIIS Gram fallback. The finite examples check their matrices directly and make
no general convergence claim for bare DIIS.
