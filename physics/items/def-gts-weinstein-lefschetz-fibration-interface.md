---
id: def-gts-weinstein-lefschetz-fibration-interface
kind: definition
title: Weinstein Lefschetz fibration data interface
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Hacking and Ailsa Keating, Homological mirror symmetry for log Calabi–Yau surfaces
      url: https://arxiv.org/pdf/2005.05010v3
      locator: §3.1, abstract Weinstein Lefschetz fibration data and geometric realization
    - title: Emmanuel Giroux and John Pardon, Existence of Lefschetz fibrations on Stein and Weinstein domains
      url: https://arxiv.org/pdf/1411.6176v3
      locator: Definitions 1.4, 1.8, 1.9 and Remark 1.11; abstract and geometric conventions
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A **Weinstein domain** is a compact smooth manifold $W$ with boundary, a smooth one-form $\lambda_W$ with $\omega_W=d\lambda_W$ nondegenerate, and a smooth Morse function $\phi:W\to\mathbb R$ with $\partial W=\phi^{-1}(0)$ a regular level and $\phi<0$ in the interior. The vector field $Z$ defined by $\iota_Z\omega_W=\lambda_W$ points outward at the boundary and is gradient-like for $\phi$: its zeros are exactly the critical points of $\phi$, $d\phi(Z)>0$ elsewhere, and near each critical point $Z$ is the gradient of $\phi$ for a smooth positive definite metric. An **abstract Weinstein Lefschetz datum in dimension four** consists of such a two-dimensional domain $\Sigma$, and an ordered finite list of smooth embedded circles $L_i\subset\operatorname{int}\Sigma$ satisfying $\omega_\Sigma|_{L_i}=0$ and $\lambda_\Sigma|_{L_i}=df_i$ for specified smooth functions $f_i:L_i\to\mathbb R$.

A **geometric realization** is additional data, in the following compact-disc convention. Let $B=\{z\in\mathbb C:|z|\le1\}$. Specify a compact smooth four-manifold $E$ with corners, a smooth one-form $\lambda_E$ with $\omega_E=d\lambda_E$ symplectic, and a smooth surjection $w:E\to B$. Smooth maps and forms extend across the boundary in local charts. Its boundary faces are $\partial_vE=w^{-1}(\partial B)$ and $\partial_hE$, meeting in codimension-two corners. The critical points are finitely many interior points with distinct values in $\operatorname{int}B$. Near each critical point $p$ specify smooth real coordinates identifying a neighbourhood with a neighbourhood of $0\in\mathbb C^2$ in which $w(z)=w(p)+z_1^2+z_2^2$; $\omega_E$ tames the standard complex structure there, meaning $\omega_E(u,iu)>0$ for nonzero real tangent vectors $u$. Away from the critical values, $w$ is a smooth locally trivial bundle of compact surfaces with boundary, with $\partial_hE$ its fibre-boundary bundle, and $\omega_E$ restricts to a symplectic form on each fibre. Require a collar of $\partial_hE$ identified over $B$ with a product collar $[0,\epsilon)\times\partial\Sigma\times B$, on which $\lambda_E$ is the sum of the fibre collar form and the pullback of a smooth base one-form. The fibre Liouville fields point outward along $\partial_hE$. Specify a smoothing $M$ of the corners and Weinstein data on $M$ extending these exact data on the retained interior. The notation $(M,\lambda,w)$ refers to this realization with its corner model retained when discussing boundary fibres.

On the regular locus define the horizontal planes to be $H=(\ker dw)^{\perp_{\omega_E}}$. Require their lifts along piecewise smooth paths avoiding critical values to exist throughout each finite path interval and preserve the fibre boundary. Choose a regular base point $b_0\in\operatorname{int}B$, an exact symplectic identification of $w^{-1}(b_0)$ with $\Sigma$ (its pullback primitive differs from $\lambda_\Sigma$ by an exact form), and embedded smooth paths $\gamma_i:[0,1]\to B$ from $b_0$ to the respective critical values, with disjoint interiors and no other critical values. Order their distinct initial tangent directions clockwise in the complex orientation of $B$. For each path require a smooth embedded Lagrangian disc in $E$ over that path, with centre the critical point and boundary in $w^{-1}(b_0)$, whose circles over $0\le t<1$ are carried into one another by this horizontal transport and collapse to the critical point as $t\to1$. The identified boundary circle must be $L_i$. These discs define the **vanishing cycles** in this convention; exactness of each boundary is already part of the abstract data.

The abstract list and a geometric realization are separate data. This definition asserts neither existence of a realization for a proposed list nor any categorical comparison. Open-disc versions use the interior of this base and the corresponding completed or truncated total space with the chosen collar and transport data stated explicitly.
