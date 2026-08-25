---
id: cor-stokes-gives-zero-circulation-for-a-curl-free-field
kind: corollary
title: "A curl-free field has zero circulation around the induced boundary chain of a $C^2$ patch"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-classical-stokes-theorem-for-a-c2-surface-patch, cor-curl-vanishes-exactly-when-a-field-is-closed, def-divergence-and-curl-of-a-c1-vector-field, def-the-induced-boundary-chain-of-a-c2-surface-patch, thm-multidimensional-integral-properties, def-riemann-integral-over-a-jordan-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $(D,\varphi)$ be a $C^2$ patch over a finite elementary Green region and let $F$ be a $C^1$ vector field on an open set $U\subseteq\mathbb R^3$ containing $\varphi[D]$, with $\operatorname{curl}F=0$ at every point of $U$. Then

$$\oint_{\varphi(\partial D)}F\cdot d\mathbf r=0.$$

The curl must vanish on an open set containing the whole patch image, not merely along the induced boundary chain. Equivalently, by [[cor-curl-vanishes-exactly-when-a-field-is-closed]], the hypothesis is that $F$ be closed on $U$.

## Facts & Assumptions

**Given:** The $C^2$ patch $(D,\varphi)$ over a finite elementary Green region, the open $U\supseteq\varphi[D]$, and the $C^1$ field $F$ on $U$ with $\operatorname{curl}F=0$ throughout $U$.

[F1] The curl of a $C^1$ field on an open subset of $\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] The circulation of $F$ around the induced boundary chain is the finite sum of the vector line integrals along the arcs $\varphi\circ\sigma_l$ ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]), and integration over a bounded Jordan measurable set is integration of the zero extension over a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[L1] For a $C^2$ patch over a finite elementary Green region and a $C^1$ field $F$ on an open set containing the patch image, the circulation around the induced boundary chain equals the flux of the curl in the induced orientation, $\oint_{\varphi(\partial D)}F\cdot d\mathbf r=\int_D\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle$ ([[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]).

[L2] A $C^1$ field on an open subset of $\mathbb R^3$ is closed if and only if its curl vanishes identically ([[cor-curl-vanishes-exactly-when-a-field-is-closed]]).

[L3] For integrable $f,g$ on a nondegenerate rectangle and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable with integral $\alpha\int f+\beta\int g$ ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varphi[D]\subseteq U$ and $\operatorname{curl}F$ vanishes at every point of $U$ by hypothesis and [F1], the integrand $\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle$ is identically zero on $D$. Its zero extension to a bounding rectangle is the zero function, which by [L3] with $\alpha=\beta=0$ is integrable with integral $0$, so $\int_D\langle(\operatorname{curl}F)\circ\varphi,\varphi_u\times\varphi_v\rangle=0$ by [F2]. [given, F1, F2, L3]

2.1 By [L1] the circulation around the induced boundary chain equals that integral, hence is $0$. By [L2] the hypothesis $\operatorname{curl}F=0$ on $U$ is the same as $F$ being closed on $U$, so the corollary may be read either way. [step 1.1, F2, L1, L2] ∎

## Remarks

- **A closed field can still have nonzero circulation around a loop.** What this corollary rules out is a nonzero circulation around the induced boundary chain of a $C^2$ patch whose whole image lies where the curl vanishes. A closed field on a domain that carries no such patch spanning the loop may circulate: the companion examples page gives a field with circulation $2\pi$ around a circle encircling the excluded axis, and no patch over a finite elementary Green region has image inside that domain and that circle as its induced boundary.
