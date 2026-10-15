---
id: def-rpm-h-almost-regular-legendre
kind: definition
title: "Regular, hyperregular and almost-regular Legendre domains"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "Mathematical regularity package for Lagrangian models; it does not assert that a particular physical Lagrangian satisfies the package."
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-countable-choice
  - def-rpm-h-cotangent-phase-space
  - def-fibre-derivative-and-legendre-transform-of-a-lagrangian
sources:
  references:
    - title: "Andrew Hanson, Tullio Regge and Claudio Teitelboim, Constrained Hamiltonian Systems, Part 1, Chapter I"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Printed pp. 7–9: singular Lagrangians, primary constraints and the failure of unique velocity inversion."
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  def-fibre-derivative-and-legendre-transform-of-a-lagrangian: mathematical-premise
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Assume countable choice ACω, as in [[def-countable-choice]], for the smooth cotangent-bundle carrier convention used by this page; no full Axiom of Choice is assumed.

Let $\mathcal D$ be an open subset of the time-dependent tangent bundle $\mathbb R\times TQ$ of a finite-dimensional smooth manifold $Q$, and let $L:\mathcal D\to\mathbb R$ be smooth. For fixed $t$, the **fibre derivative** is the map

$$\mathbb F L(t,q,v)=(t,q,p),\qquad p(w)=\left.\frac{d}{ds}\right|_{s=0}L(t,q,v+sw),$$

as in [[def-fibre-derivative-and-legendre-transform-of-a-lagrangian]]. In induced coordinates $p_i=\partial L/\partial v^i$.

The Lagrangian is **regular** at $(t,q,v)$ when the velocity Hessian $(\partial^2L/\partial v^i\partial v^j)$ is invertible there; regularity gives only a local inverse branch. It is **hyperregular on a declared domain** when $\mathbb F L$ is a diffeomorphism from that entire domain onto an open subset of $\mathbb R\times T^*Q$.

It is **almost regular on a declared open domain $\mathcal D_0\subseteq\mathcal D$**, with the inherited open-submanifold structure, when the following are all assumed: $\mathbb F L|_{\mathcal D_0}$ has constant rank; its image $N$ is an embedded submanifold of $\mathbb R\times T^*Q$; its corestriction $\mathcal D_0\to N$ is a surjective submersion (its differential is surjective at every point); and every fibre of that corestriction is connected. These hypotheses are not consequences of singularity alone.
