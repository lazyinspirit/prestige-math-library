---
id: def-gts-smooth-syz-fibration-and-dual-local-system-torus
kind: definition
title: Smooth SYZ fibration and dual local-system torus
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-gts-special-lagrangian-with-phase
  - def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-gts-special-lagrangian-with-phase: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Dominic Joyce, Lectures on Special Lagrangian Geometry
      url: https://arxiv.org/pdf/math/0111111v3
      locator: §7, SYZ conjecture and smooth torus-fibration formulation
    - title: Mark Gross and P. M. H. Wilson, Mirror Symmetry via 3-tori for a Class of Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: §§1–3, smooth dual torus fibrations and their topological compactifications
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X^\circ$ be a smooth open subset of an almost-Calabi–Yau $n$-fold and $B^\circ$ a smooth real $n$-manifold. Write $T^n=(\mathbb R/\mathbb Z)^n$. A smooth SYZ fibration datum is a smooth proper submersion $\pi:X^\circ\to B^\circ$ whose fibres $L_b=\pi^{-1}(b)$ are connected oriented manifolds diffeomorphic to $T^n$ and special Lagrangian, with a specified phase $\theta_b\in\mathbb R/(2\pi\mathbb Z)$ for each $b$. Proper means inverse images of compact subsets are compact; submersion means $d\pi$ is surjective at every point. The chosen domain $X^\circ$, base $B^\circ$, and any excluded discriminant are part of the data.

For each $b$, let $H_1(L_b;\mathbb Z)$ denote first singular homology. The dual torus is
$$\widehat L_b=\operatorname{Hom}(H_1(L_b;\mathbb Z),U(1)),\qquad U(1)=\{z\in\mathbb C:|z|=1\}.$$
It is the character group; equivalently it specifies one-dimensional complex representations of $\pi_1(L_b)$ that factor through $H_1(L_b;\mathbb Z)$ and have image in $U(1)$. To define the family, use the homology local system $R_1\pi_*\mathbb Z$: in a smooth local trivialization of $\pi$, its sections are locally constant elements of $H_1(T^n;\mathbb Z)$, glued by the homology maps induced by changes of trivialization. Equivalently, supply a local system $\mathcal H$ with a specified isomorphism $\eta:\mathcal H\xrightarrow{\sim}R_1\pi_*\mathbb Z$ of local systems. In fibre terms this requires $\eta_c T^{\mathcal H}_\gamma=T^{H_1}_\gamma\eta_b$ for every path $\gamma$ from $b$ to $c$, where $T_\gamma$ denotes parallel transport. Isomorphisms of individual fibres without this transport compatibility are insufficient. The dual family is the character-torus bundle glued by precomposition with the inverse homology transport, with fibre $\operatorname{Hom}(\mathcal H_b,U(1))$. Its monodromy is this induced action along loops. Integral-affine coordinates and their monodromy may be included as further data but are not implied by this definition.

This is only a definition on the smooth locus. It asserts no fibration exists, no singular compactification, and no instanton-corrected gluing or mirror reconstruction.

## Definition references

[[def-gts-special-lagrangian-with-phase]]

[[def-gts-symplectic-and-almost-complex-curve-data]]
