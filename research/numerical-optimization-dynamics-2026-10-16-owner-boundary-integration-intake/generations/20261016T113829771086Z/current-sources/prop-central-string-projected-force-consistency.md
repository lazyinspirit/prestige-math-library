---
id: prop-central-string-projected-force-consistency
kind: proposition
title: "Centered-tangent string residuals are second-order consistent on a regular MEP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-finite-image-string-method
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - lem-arc-length-polyline-interpolation-error
  - lem-centered-chord-and-unequal-step-tangent-error
  - def-jacobian-matrix-and-gradient
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(6): projected string force and reparameterization"
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, Convergence of the Discrete Minimum Energy Path"
      url: "https://arxiv.org/pdf/2204.07467"
      locator: "§2.1–2.3: regular-path MEP equation, discrete force, and source theorem assumptions; the second-order centered bound here is independent"
---

## Statement

Let $L>0$, let $M\ge2$ be an integer, and let $R$ be a regular MEP as in [[def-regular-minimum-energy-path-in-a-collision-free-tube]], now parameterized by arc length on $[0,L]$, with $R\in C^3$ under the endpoint convention of [[lem-arc-length-polyline-interpolation-error]] and the bounds of [[lem-centered-chord-and-unequal-step-tangent-error]] and [[lem-arc-length-polyline-interpolation-error]]. Let $R_i=R(ih)$ for $i=0,\ldots,M$, $Mh=L$, and assume every interior centered chord is nonzero. Suppose $\|\nabla V(R(s))\|_2\le G$ along the curve and $0<h\le1$. Use the centered unit tangent $\widehat t_i=(R_{i+1}-R_{i-1})/\|R_{i+1}-R_{i-1}\|_2$. Then the projected string force at each interior sample satisfies

$$\|(I-\widehat t_i\widehat t_i^T)\nabla V(R_i)\|_2\le C_Fh^2.$$

If the equal-spacing spring residual $k(\ell_i^+-\ell_i^-)\widehat t_i$ is also evaluated on these samples, then its norm is at most $C_Sh^3$ for fixed $k$. Equal-length polyline redistribution of the exact samples changes each image by at most $C_Rh^2$. The constants depend on the stated derivative bounds, $G$, $k$, and the path, not on $M$. The projected-force conclusion is for the centered-tangent string residual; it does not assert second-order consistency for the improved energy-selected NEB tangent.

## Facts & Assumptions

**Given:** The $C^3$ unit-speed regular MEP, mesh, derivative bounds, and gradient bound in the Statement.

[F1] [[def-regular-minimum-energy-path-in-a-collision-free-tube]]: $P_{t(s)}^\perp\nabla V(R(s))=0$ and $t(s)=R'(s)$ for the unit-speed parameterization.

[F2] [[lem-centered-chord-and-unequal-step-tangent-error]]: the open-interval $C^3$ extension and bounded third derivatives give $\|\widehat t_i-t(ih)\|_2\le C_th^2$ for the centered chord under the stated regularity and nondegeneracy.

[F3] [[lem-arc-length-polyline-interpolation-error]]: under its endpoint $C^3$ convention, sampled chord lengths satisfy $|\ell_i-h|\le C_1h^3$, and equal-length interpolation has image error at most $C_Rh^2$.

[F4] [[alg-finite-image-string-method]]: the string residual uses the normal projection formed from the centered chord, with endpoints fixed and linear equal-length redistribution.



**Given:** The data and conventions in the Statement.

## Proof

1.1 For unit vectors $u,v$, $uu^T-vv^T=(u-v)u^T+v(u-v)^T$, so $\|uu^T-vv^T\|_{\rm op}\le2\|u-v\|_2$. Apply this with $u=\widehat t_i$ and $v=t(ih)$. Since $P_v^\perp\nabla V(R_i)=0$ by [F1], we obtain $\|P_{\widehat t_i}^\perp\nabla V(R_i)\|_2\le2G\|\widehat t_i-t(ih)\|_2\le2GC_th^2$. [F1, F2, given, algebra]

1.2 By [F3], write each neighboring chord length as $\ell_i^\pm=h+e_i^\pm$ with $|e_i^\pm|\le C_1h^3$. Hence $k|\ell_i^+-\ell_i^-|\le2kC_1h^3$, because the triangle inequality bounds the difference by $|e_i^+|+|e_i^-|$. [F3, given, algebra]

2.1 The spring term is tangent and has the bound in step 1.2; the normal component has the bound in step 1.1. Since $h\le1$, $h^3\le h^2$, so their sum is bounded by $(2GC_t+2kC_1)h^2$. The string redistribution error is the last assertion of [F3]. These statements concern the centered-tangent string discretization specified by [F4]; the improved NEB tangent is a different branch and is treated separately. [F3, F4, step 1.1, step 1.2, algebra] ∎

