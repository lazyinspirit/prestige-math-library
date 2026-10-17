---
page: self-consistent-projector-iterations-and-certified-mixing
title: "Self consistent projector iterations and certified mixing"
status: published
items:
  - lem-capped-diis-coefficient-minimizer-exists
  - def-self-consistent-projector-response-map
  - def-admissible-hermitian-density-domain
  - lem-spectral-gap-persistence-and-uniform-resolvent-bound
  - lem-gapped-projector-map-well-defined
  - lem-projector-is-admissible-density
  - lem-admissible-density-domain-is-closed-convex-complete
  - thm-block-projector-frechet-derivative-and-bound
  - thm-contractive-scf-convergence-and-inexact-error-bound
  - thm-level-shift-fixed-projector-equivalence
  - alg-undamped-scf-with-gap-and-residual-status
  - alg-capped-diis-projector-proposal
  - lem-density-mixing-preserves-domain-but-not-projectors
  - thm-gapped-response-projector-lipschitz-certificate
  - cor-finite-basis-energy-model-has-c1-response
  - thm-density-mixing-contracts-under-jacobian-certificate
  - alg-certified-scf-with-diis-safeguard
  - thm-certified-diis-error-inheritance
  - alg-relaxed-density-mixing-with-finite-budget
  - lem-finite-budget-scf-iteration-work
examples: []
---

This page defines the self-consistent occupied-projector map only where a
strict occupied/unoccupied spectral gap makes the rank-$r$ projector unique.
It distinguishes undamped projector iteration from convex density mixing:
relaxed densities remain Hermitian, positive, bounded by the identity, and
fixed-trace, but need not remain idempotent. A common separating resolvent
contour gives a block-projector derivative and explicit resolvent/Lipschitz
bounds, including the case of repeated eigenvalues within either spectral
cluster.

The undamped convergence result requires a complete invariant set and a verified
contraction factor $q<1$; a positive gap or damping parameter alone does not
provide one. Inexact eigensolves contribute an additive error term. DIIS is a
capped finite-memory proposal with singular-solver and gap fallbacks. A candidate
is accepted only when a separately certified fixed-point residual places it
inside the contractive error budget; the least-squares commutator residual alone
is not an error certificate. Level shifts preserve a fixed occupied projector
only under commutation and strict shifted block ordering. Finite iteration caps
retain explicit gap-loss, eigensolver-failure, and budget-exhaustion outcomes.
