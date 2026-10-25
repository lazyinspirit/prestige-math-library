---
id: thm-gauge-fixed-stable-discrete-path-comparison
kind: theorem
title: "A gauge-fixed stable discrete path lies within second order of a smooth MEP"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - lem-local-root-in-max-norm
  - lem-arc-length-polyline-interpolation-error
  - prop-central-string-projected-force-consistency
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-ck-and-multi-index-notation-in-several-variables
proof_strategy: contraction
provenance:
  statement: ai-altered
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Xuanyu Liu, Huajie Chen, and Christoph Ortner, Convergence of the Discrete Minimum Energy Path"
      url: "https://arxiv.org/pdf/2204.07467"
      locator: "§2.1–2.3 and §4.1–4.3: explicit consistency/stability hypotheses for a different upwind discretization; no result is imported"
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (5)–(6): projected normal residual with a separate reparameterization constraint"
---

## Statement

Let $L>0$ and let $M\ge2$ be an integer. Let $V$ and $U$ satisfy [[def-regular-minimum-energy-path-in-a-collision-free-tube]], and let $R_*:[0,L]\to U$ be a $C^3$ unit-speed regular MEP with fixed endpoints, using the endpoint extension convention of [[lem-arc-length-polyline-interpolation-error]]. For $h=L/M$, let $z_h=(R_*(h),\ldots,R_*((M-1)h))$ be its interior samples and let $I_h$ be piecewise-linear reconstruction with the same fixed endpoints.

In a local coordinate chart, choose a smooth orthonormal normal frame $Q_i$ at each centered discrete tangent, and keep that frame convention and chart fixed throughout the local ball. Define the square gauge-fixed residual $G_h$ on the $d(M-1)$ interior coordinates by the $(d-1)(M-1)$ scalar entries of $Q_i^T\nabla V(R_i)$ and the $M-1$ independent spacing components $\ell_i-\ell_M$, $1\le i<M$, where $\ell_i=\|R_i-R_{i-1}\|_2$. Its norm is the maximum absolute value of all scalar residual coordinates; the domain norm is the maximum absolute value of all node coordinates. Assume this chosen map is $C^1$ on the open ball in hypothesis 2. The endpoints are fixed and the spacing equations fix the arc-length reparameterization; a zero of this residual is exactly a zero of all centered-tangent normal force components and equality of all segment lengths.

Assume that for all sufficiently small $h$ the following constants $C_0,\beta,L_G,C_I>0$ are independent of $h$:

1. The consistency and interpolation bounds are $\|G_h(z_h)\|_\infty\le C_0h^2$ and $\|I_hz_h-R_*\|_{C^0,\infty}\le C_Ih^2$, where $\|Y\|_{C^0,\infty}:=\sup_{s\in[0,L]}\max_{j<d}|Y_j(s)|$.
2. $DG_h(z_h)$ is invertible with induced maximum-norm inverse bound $\|DG_h(z_h)^{-1}\|_\infty\le\beta$, and $DG_h$ is $L_G$-Lipschitz in the induced maximum operator norm on the open maximum-norm ball of radius $2\rho_h$ about $z_h$, where $\rho_h=2\beta C_0h^2$.
3. That ball lies in the residual's domain and $\beta L_G\rho_h\le1/2$.

Then there is a unique gauge-fixed discrete zero $z_h^*$ in $\overline B_\infty(z_h,\rho_h)$, and

$$\|I_hz_h^*-R_*\|_\infty\le(C_I+2\beta C_0)h^2.$$

The consistency hypothesis is supplied by [[prop-central-string-projected-force-consistency]] for the centered-tangent string residual. The theorem is conditional on the stated uniform inverse and Lipschitz bounds; it proves no blanket convergence result for every potential, mesh, or improved-tangent NEB chain.

## Facts & Assumptions

**Given:** The MEP, fixed endpoints, discrete samples, reconstruction, square gauge-fixed residual, and uniform consistency/stability constants in the Statement.

[F1] [[def-regular-minimum-energy-path-in-a-collision-free-tube]]: the continuous path is regular, satisfies the normal-gradient MEP equation, and has fixed endpoints.

[F2] [[prop-central-string-projected-force-consistency]]: on equal arc-length samples the centered-tangent projected force is bounded by a mesh-independent constant times $h^2$.

[F3] [[lem-arc-length-polyline-interpolation-error]]: under its endpoint $C^3$ convention, piecewise-linear interpolation and equal-length redistribution of the sampled smooth path have $O(h^2)$ supremum error.

[F4] [[lem-local-root-in-max-norm]]: if $\beta\epsilon\le r/2$, $\beta L_Gr\le1/2$, and the doubled maximum-norm ball lies in the domain, a square $C^1$ residual with inverse bound $\beta$ and derivative-Lipschitz constant $L_G$ has exactly one zero in the chosen radius-$r$ ball, at distance at most $2\beta\epsilon$.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for each unit frame vector $q$, $|q^Tg|\le\|g\|_2$.

[F6] [[lem-arc-length-polyline-interpolation-error]]: the $C^3$ curve on $[0,L]$ is understood as a restriction from an open interval containing that closed interval, with endpoint derivatives taken continuously from the extension.



**Given:** The hypotheses of the Statement.

## Proof

1.1 The normal frame has $d-1$ columns for each of the $M-1$ interior images, and the $M-1$ independent spacing components add $(d-1)(M-1)+(M-1)=d(M-1)$ scalar residual coordinates, matching the interior-coordinate dimension. [given, algebra]

2.1 The MEP and $C^3$ hypotheses are those in [F1] and [F6]. By [F2], the Euclidean norm of the projected normal force at each sample is bounded by a constant times $h^2$. Each normal coordinate is its inner product with a unit frame vector, so [F5] bounds that scalar by the same amount. By [F3], each chord length satisfies $|\ell_i-h|\le C_1h^3$, so $|\ell_i-\ell_M|\le2C_1h^3\le2C_1h^2$ because $h\le1$. Each scalar coordinate of the residual has a bound independent of the number of images, so their maximum is at most $C_0h^2$ after increasing the uniform constant $C_0$. Also by [F3], the reconstruction of the sample path differs from $R_*$ by at most $C_Ih^2$ in componentwise supremum norm. [F1, F2, F3, F5, F6, step 1.1, given, algebra]

3.1 Set $\epsilon_h=\|G_h(z_h)\|_\infty\le C_0h^2$. Apply [F4] in the fixed gauge chart with inverse bound $\beta$, Lipschitz bound $L_G$, and radius $r=\rho_h$. Since $\beta\epsilon_h\le\beta C_0h^2=\rho_h/2$ and $\beta L_G\rho_h\le1/2$, the lemma gives exactly one discrete zero $z_h^*$ in $\overline B_\infty(z_h,\rho_h)$ and $\|z_h^*-z_h\|_\infty\le2\beta\epsilon_h\le\rho_h$. This also covers $\epsilon_h=0$. [F4, given, step 2.1]

4.1 For each curve parameter, piecewise-linear reconstruction is a coordinatewise convex combination of neighboring node values. Hence its componentwise supremum norm is nonexpansive: $\|I_hz_h^*-I_hz_h\|_{C^0,\infty}\le\|z_h^*-z_h\|_\infty\le\rho_h$. The interpolation error in [F3] is stated in Euclidean vector norm and therefore also bounds the componentwise supremum norm. The triangle inequality now gives $\|I_hz_h^*-R_*\|_{C^0,\infty}\le\rho_h+C_Ih^2=(2\beta C_0+C_I)h^2$. The endpoints remain fixed in reconstruction, and $G_h(z_h^*)=0$ gives equal segment lengths. [F3, given, step 3.1, algebra] ∎

