---
id: lem-root-of-unity-closed-bottom-alcove-weyl-modules-are-simple
kind: lemma
title: Simplicity of Weyl modules in the closed bottom alcove
status: published
dependency_level: 10
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [lem-root-of-unity-integral-weyl-specialization, thm-root-of-unity-affine-weyl-linkage, lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs, thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified, thm-cg-affine-alcove-transitivity-presentation-and-length, lem-root-datum-combinatorics, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Henning Haahr Andersen and Catharina Stroppel, Fusion Rings for Quantum Groups
      url: https://pure.au.dk/ws/files/77171619/Fusion_Rings_for_Qunatum_Groups.pdf
      locator: Section 2.1.1, equation (2.12); the norm-minimal orbit argument is proved here using affine folding.
---

## Statement

In the selected simply-laced branch, if $\lambda\in P^+$ satisfies $\langle\lambda+\rho,\theta^\vee\rangle\le\ell$, then $\Delta_\zeta(\lambda)=L_\zeta(\lambda)=T_\zeta(\lambda)=\nabla_\zeta(\lambda)$. Its quantum dimension is nonzero for strict inequality and zero for equality. Thus the boundary case is included, not inferred from an open-alcove statement. The Axiom of Choice is inherited from the Weyl suppliers.

## Facts & Assumptions

**Given:** The actual Weyl families, affine linkage and tiltings already constructed.

[F1] The affine reflection arrangement is locally finite, its group acts simply transitively on alcoves, and adjacent alcoves are related by reflection in their common facet ([[thm-cg-affine-alcove-transitivity-presentation-and-length]]); translate by $\rho$ and rescale by $\ell$ for the current convention.

[F2] A proper composition factor of a Weyl module at $\lambda$ has dominant highest label $\mu<\lambda$ in its affine dot orbit ([[lem-root-of-unity-integral-weyl-specialization]], [[thm-root-of-unity-affine-weyl-linkage]]).

[F3] Weyl and dual Weyl modules have the same finite character; tiltings are unique at prescribed highest labels, and the Weyl dimension formula and its singular zero set hold ([[thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified]], [[lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs]]).

## Proof

**Given:** The closed unshifted fundamental alcove $C=\{x:(x,\alpha_i)\ge0,\ (x,\theta)\le\ell\}$, and normalize roots to squared length two.

1.1 Define the folding map $p$ on an open alcove $wC^\circ$ by $p(x)=w^{-1}x$. It extends continuously across facets: the two inverse maps on adjacent alcoves differ by the corresponding fundamental-facet reflection, which fixes their common facet pointwise. At a point on several walls, use a small ball meeting only the finitely many incident walls; its local chambers are connected by adjacent local chambers, so the same agreement proves that all limiting inverse maps coincide there. This yields a continuous map on the whole Euclidean space, identity on $C$, and $p(wx)=p(x)$ for every affine Weyl element. On a line segment crossing walls generically, local finiteness divides it into finitely many pieces on each of which $p$ is an isometry, so the distance of the images of its endpoints is at most its length. General endpoints follow by arbitrarily small perturbation of the endpoints to avoid the finitely many codimension-two wall intersections and passage to continuity. Hence $p$ is one-Lipschitz. [F1, algebra]

2.1 The origin belongs to $C$, so $p(0)=0$. Thus for $x\in C$ and any affine Weyl element $w$, step 1.1 gives $\|x\|=\|p(wx)-p(0)\|\le\|wx\|$. Put $x=\lambda+\rho$. If a dominant $\mu<\lambda$ belonged to its dot orbit, then $\mu+\rho=wx$ while $\|\lambda+\rho\|^2-\|\mu+\rho\|^2=(\lambda-\mu,\lambda+\mu+2\rho)>0$: expand the nonzero positive-root-lattice vector $\lambda-\mu$ in simple roots and use strict positivity of every pairing with $\lambda+\mu+2\rho$. This contradicts the norm inequality. By [F2] there is no proper composition factor of $\Delta_\zeta(\lambda)$, and it is simple. [F1, F2, step 1.1, algebra]

3.1 The dual Weyl module has a unique simple socle at the same label and the same character and dimension, so it too equals that simple module. This object is consequently tilting, and uniqueness identifies it with $T_\zeta(\lambda)$. By [F3] its quantum dimension is nonzero in the strict bottom alcove and zero on the upper wall, proving all assertions. [F2, F3, step 2.1, algebra] ∎
