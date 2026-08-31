---
id: def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue
kind: definition
title: "The reduced resolvent, or group inverse, on the complementary invariant subspace of a simple eigenvalue"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-simple-spectral-projector,
       def-matrix-product-and-identity-matrix]
justified_by: [prop-reduced-resolvent-identities-for-a-simple-eigenvalue]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "G. W. Stewart and Ji-guang Sun, Matrix Perturbation Theory"
      url: "https://djvu.online/file/j5uuUqxIKij6w"
---

## Definition

Let $\lambda$ be a simple eigenvalue of $A$, and let $P$ be its simple spectral
projector. The **reduced resolvent**, also called the **group inverse** at
$\lambda$, is the unique linear map $S$ satisfying

$$SP=PS=0,\qquad S(A-\lambda I)=(A-\lambda I)S=I-P.$$

It acts as the inverse of $A-\lambda I$ on the complementary invariant
subspace and vanishes on the eigendirection.
