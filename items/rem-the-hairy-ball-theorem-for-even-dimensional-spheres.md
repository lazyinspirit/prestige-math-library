---
id: rem-the-hairy-ball-theorem-for-even-dimensional-spheres
kind: remark
title: "The hairy-ball theorem for even-dimensional spheres"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
proved_here: false
deps: [fs-every-vector-bundle-is-globally-trivial, ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
external_dependency:
  source_url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
  exact_statement: "For every positive even integer n, every continuous tangent vector field on the sphere S^n has a zero."
  local_proof_attempt: "No local proof is supplied on this page; the degree or Euler-class obstruction is deferred to later material."
  necessity: "The result supplies the stated contrast between the trivial normal line bundle and the nontrivial tangent bundle of an even-dimensional sphere."
---
## Remark

The triviality of $TS^1$ does not extend to every sphere. For even-dimensional
spheres $S^{2m}$ with $m\ge 1$, the hairy-ball theorem says that $TS^{2m}$ has
no nowhere-zero global section, so those tangent bundles are not trivial. The
case $S^0$ is exceptional: its tangent bundle has rank $0$ and is trivial. This
page does not prove the hairy-ball theorem; the obstruction will be supplied
later from degree and Euler-class machinery.

The contrast is already visible in this batch. The sphere's normal line bundle
is trivial by the radial field, but the tangent bundle need not be.
