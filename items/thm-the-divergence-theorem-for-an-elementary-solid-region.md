---
id: thm-the-divergence-theorem-for-an-elementary-solid-region
kind: theorem
title: "The divergence theorem on an elementary solid region"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-solid-region, lem-the-coordinate-flux-identity-for-a-simple-solid-region, def-divergence-and-curl-of-a-c1-vector-field, def-finitely-patched-regular-surface-and-integrals, thm-multidimensional-integral-properties, def-euclidean-inner-product, cor-every-face-of-an-elementary-solid-region-is-outward-oriented, def-riemann-integral-over-a-jordan-set, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-oriented-unit-normal-and-flux-of-a-surface-patch, lem-standard-basis-of-f-n, def-simple-solid-region-in-a-coordinate-direction]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Theorem 4.2.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), Theorem 6.20"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $E$ be an elementary solid region with presentation $\Sigma=\bigl((D_1,\varphi_1),\ldots,(D_P,\varphi_P)\bigr)$ ([[def-elementary-solid-region]]) and let $F$ be a $C^1$ vector field on an open set containing $E$. Then

$$\iiint_E\operatorname{div}F=\iint_{\partial E}\langle F,n\rangle,$$

where the left side is the integral of $\operatorname{div}F$ over $E$ and the right side is the flux of $F$ over the presentation $\Sigma$, that is $\sum_{j=1}^P\int_{D_j}\langle F(\varphi_j),\varphi_{j,u}\times\varphi_{j,v}\rangle$. At every interior parameter point whose projection lies in the interior of the relevant base, the orientation in which that flux is taken is the outward one, by [[cor-every-face-of-an-elementary-solid-region-is-outward-oriented]].

## Facts & Assumptions

**Given:** The elementary solid region $E$ with its three simple descriptions, its presentation $\Sigma$ and the three partitions of $\{1,\ldots,P\}$ into sublists, and the $C^1$ field $F$ on an open $O\supseteq E$.

[F1] For a compatible finite patch presentation the oriented flux is the sum of the patch values, each being $\int_{D_j}(F\circ\varphi_j)\cdot(\varphi_{j,u}\times\varphi_{j,v})$ ([[def-finitely-patched-regular-surface-and-integrals]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F2] The divergence of a $C^1$ field $F$ on an open subset of $\mathbb R^n$ is $\operatorname{div}F=\sum_{i<n}\partial_iF_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$, and $e_k$ has $k$th coordinate $1$ and the others $0$; so a vector $v\in\mathbb R^3$ is $v_xe_x+v_ye_y+v_ze_z$ ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]]).

[F4] An elementary solid region carries one presentation adapted to a simple description of $E$ in each of the three coordinate directions ([[def-elementary-solid-region]], [[def-simple-solid-region-in-a-coordinate-direction]]).

[F5] Integration over a bounded Jordan measurable set is integration of the zero extension over a bounding rectangle ([[def-riemann-integral-over-a-jordan-set]]).

[L1] Let $(k,D,\gamma_1,\gamma_2)$ be a simple description of $E$ in the direction $k$, let $\Sigma$ be adapted to it, and let $R$ be $C^1$ on an open set containing $E$. Then the flux of $Re_k$ over the presentation equals the integral of the $k$th partial derivative of $R$ over $E$ ([[lem-the-coordinate-flux-identity-for-a-simple-solid-region]]).

[L2] For integrable $f,g$ on a nondegenerate rectangle and scalars $\alpha,\beta$, the function $\alpha f+\beta g$ is integrable with integral $\alpha\int f+\beta\int g$ ([[thm-multidimensional-integral-properties]]).

[L3] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Proof

**Proof technique:** direct.

1.1 By [F3] the field splits as $F=F_xe_x+F_ye_y+F_ze_z$ on $O$, each $F_k$ being a $C^1$ real function there. For each patch, [F1] and [F3] make the flux integrand $\langle F(\varphi_j),\varphi_{j,u}\times\varphi_{j,v}\rangle=\sum_{k}F_k(\varphi_j)\,(\varphi_{j,u}\times\varphi_{j,v})_k$, a sum of three continuous functions on the compact Jordan parameter region $D_j$; each is integrable by [L3], so [L2] and [F5] split that patch's flux into the three corresponding patch fluxes of the fields $F_ke_k$. Summing over $j$ and using [F1] again, the flux of $F$ over $\Sigma$ is the sum over $k$ of the fluxes of $F_ke_k$ over $\Sigma$. [given, F1, F3, F5, L2, L3]

1.2 Fix a direction $k$. By [F4] the same presentation $\Sigma$ is adapted to the $k$th simple description of $E$, and $F_k$ is $C^1$ on the open $O\supseteq E$, so [L1] applies and gives that the flux of $F_ke_k$ over $\Sigma$ equals $\int_E\partial_kF_k$. This holds for each of the three directions, with the one presentation and the three descriptions supplied with $E$. [given, F4, L1]

2.1 Adding the three identities of step 1.2 and substituting into step 1.1, the flux of $F$ over $\Sigma$ equals $\int_E\partial_xF_x+\int_E\partial_yF_y+\int_E\partial_zF_z$. Each $\partial_kF_k$ is continuous on the compact Jordan set $E$, hence integrable over it by [L3], so [L2] and [F5] combine those three integrals into $\int_E(\partial_xF_x+\partial_yF_y+\partial_zF_z)$, which is $\int_E\operatorname{div}F$ by [F2]. [step 1.1, step 1.2, F2, F5, L2, L3]

3.1 Step 2.1 is the asserted identity. The requirement that one presentation be adapted in all three directions is used exactly once, in step 1.2, where the three applications of [L1] must be to the same boundary integral; and the outward reading of the normals is [[cor-every-face-of-an-elementary-solid-region-is-outward-oriented]], on which no step above depends. [step 2.1] ∎

## Remarks

- **The field must be $C^1$ on an open set containing all of $E$, not only on $\partial E$.** Step 1.2 integrates $\partial_kF_k$ over the whole solid, so the partial derivatives must exist there. The companion examples page records the failure that quietly weakening this hypothesis produces.

- **Nothing is asserted for a solid presented without the data.** The three descriptions, the presentation and the three sortings are hypotheses. A compact set with a piecewise smooth boundary may admit them, may admit them only after being cut into pieces — which is what [[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]] is for — or may not be shown to admit them by anything on this page.
