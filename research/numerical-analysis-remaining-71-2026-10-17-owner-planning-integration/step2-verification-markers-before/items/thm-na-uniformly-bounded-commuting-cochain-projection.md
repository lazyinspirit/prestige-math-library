---
id: thm-na-uniformly-bounded-commuting-cochain-projection
kind: theorem
title: Uniformly bounded commuting projection for lowest-order Nedelec spaces
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-na-lowest-order-whitney-de-rham-spaces, def-na-zero-tangential-hcurl, lem-na-whitney-cochain-correction-and-strong-convergence, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
---


## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Omega\subset\mathbb R^3$ be a nonempty bounded Lipschitz polyhedron and let $\{\mathcal T_h\}$ be a shape-regular family of matching affine tetrahedral meshes with $h=\max_{K\in\mathcal T_h}\operatorname{diam}(K)\to0$. For the full lowest-order spaces $E_h^0=W_h^0,E_h^1=N_h^1,E_h^2=N_h^2,E_h^3=N_h^3$ of [[def-na-lowest-order-whitney-de-rham-spaces]], there are linear projections $\pi_h^k:L^2\Lambda^k(\Omega)\to E_h^k$ satisfying $\pi_h^k|_{E_h^k}=I$ and $d\pi_h^k=\pi_h^{k+1}d$ on $H\Lambda^k(\Omega)$. Their norms are uniformly bounded both in $L^2$ and in $H\Lambda^k$, for $k=0,1,2,3$.

There is also a boundary-corrected family of projections $\pi_{h,0}^k:L^2\Lambda^k(\Omega)\to E_{h,0}^k$, where $E_{h,0}^k=E_h^k\cap H_0\Lambda^k(\Omega)$ and $H_0\Lambda^k$ is the graph closure of compactly supported smooth forms. These have the same uniform bounds, are the identity on $E_{h,0}^k$, and commute on the homogeneous complex. In particular,
$$\pi_{h,0}^0:H_0^1(\Omega)\to W_h^0\cap H_0^1(\Omega),\qquad \pi_{h,0}^1:H_0(\operatorname{curl};\Omega)\to N_h^1\cap H_0(\operatorname{curl};\Omega),\qquad \nabla\pi_{h,0}^0=\pi_{h,0}^1\nabla.$$
Here the zero tangential space uses [[def-na-zero-tangential-hcurl]]. Each family converges strongly in $L^2$ on every $L^2$ form, uniformly on compact $L^2$ subsets, and in the graph norm on its corresponding graph domain. The full and homogeneous families are separate operators. These are cochain projections; canonical edge moments are not asserted bounded on $H(\operatorname{curl})$.

## Facts & Assumptions


**Given:** Countable Choice; the full and homogeneous complexes, the mesh hypotheses above, and the averaged-pullback construction and correction in [[lem-na-whitney-cochain-correction-and-strong-convergence]].

[F1] The corrected averaged-pullback maps are uniformly bounded full and homogeneous commuting projections, with strong and compact-uniform $L^2$ convergence and graph convergence. ([[lem-na-whitney-cochain-correction-and-strong-convergence]])

**Choice use.** Countable Choice is inherited solely from the proved coefficient $L^2$ density/completeness, smoothing and change-of-variables inputs carried by [F1]. The construction makes only finite geometric choices and uses no arbitrary-index choice. It does not consume the regular-decomposition theorem.

## Proof


1.1 Use the inward averaged-pullback moments, finite element inverse correction, and notation $\pi_h^k=\pi_h^{+,k}$ of [F1]. The degree identifications give respectively $H^1$, $H(\operatorname{curl})$, $H(\operatorname{div})$, and $L^2$ as the four graph spaces. The projection and commutation identities and all stated full-space bounds follow from [F1]. No contractibility or regular-decomposition hypothesis enters this construction. [F1, given, construct]

2.1 For the homogeneous family use the outward averaged-pullback moments of the zero extension and their separate finite element correction, writing $\pi_{h,0}^k=\pi_h^{-,k}$. The proof of [F1] identifies its target with zero boundary moments and with $E_h^k\cap H_0\Lambda^k$. Consequently its degree-zero and degree-one targets are precisely the two stated homogeneous finite element spaces, and commutation gives the displayed gradient identity and the relative curl and divergence identities. Its bounds and convergence follow from [F1]. [F1, step 1.1, construct] ∎
