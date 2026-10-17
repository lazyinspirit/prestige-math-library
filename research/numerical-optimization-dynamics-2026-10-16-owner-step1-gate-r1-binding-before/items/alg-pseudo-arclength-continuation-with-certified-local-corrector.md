---
id: alg-pseudo-arclength-continuation-with-certified-local-corrector
kind: algorithm
title: "Finite-budget pseudo-arclength continuation with a certified local corrector"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-newton-correction-for-vector-residuals
  - alg-finite-budget-newton-for-vector-residuals
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-total-derivative-in-euclidean-space
  - def-rank-and-nullity
  - lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound
  - lem-regular-curve-chart-and-pseudo-arclength-predictor-defect
  - lem-transverse-hyperplane-selects-unique-local-branch-point
  - thm-augmented-residual-contraction-certificate
  - thm-simple-fold-lyapunov-schmidt-parameterization
  - thm-pseudo-arclength-local-newton-correction
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapters 2–3, printed pp. 7–27: regular curve tangents, predictor-corrector steps, and Newton correction"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§§3.1–3.2 and 7.1, printed pp. 51–55 and 92–94: fold conditions, scalar reduction, and augmented corrector"
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^{n+1}$ be open, and let
$F:U\to\mathbb R^n$ be $C^2$ in the componentwise sense of
[[def-ck-euclidean-maps-and-diffeomorphisms]] on a declared tube; its total
derivative $DF$ has the linear first-order meaning of
[[def-total-derivative-in-euclidean-space]]. Require $C^3$ on any subtube
where a fold check is requested. A valid seed consists of a center
$\bar z_0$, a radius $r_0$, and a certified ball containing exactly one
zero $z_0^*$ of an initial augmented section
$$G_{-1}(z):=\bigl(F(z),\tau_{-1}^T(z-z_{p,-1})\bigr),$$
where $\tau_{-1}$ is unit and the section is transverse to the regular local
solution branch. Thus the seed certifies one solution point of $F=0$ by
intersecting the branch with a hyperplane; it does not claim that $F=0$ has an
isolated zero in $\mathbb R^{n+1}$. The seed also includes a neighborhood
in which every zero of $F$ lies on the certified local curve chart and a
verified rank-$n$ condition on that chart.

Supply a unit previous orientation, step length $h>0$, requested step count
$N_{\rm req}\in\mathbb N_0$, continuation budget $N_s\in\mathbb N_0$,
corrector budget $N_c\in\mathbb N_0$, residual tolerance $\epsilon\ge0$,
and angle margin $c\in(0,1]$. At each current certified section ball
$B_k=\overline B_2(\bar z_k,r_k)$, its unique branch point is denoted
$z_k^*$. A tangent routine must provide a unit candidate $\widehat t_k$ and
a certified error bound to a unit vector $t_k\in\ker DF(z_k^*)$, plus a
verified inverse bound for $DF(z_k^*)|_{t_k^\perp}$. Missing rank, tangent,
or error bounds are failures; they are never treated as zero error.

At a queried point $z$, an evaluator returns either exact $(F(z),DF(z))$ or
certified data $(\widehat F(z),\eta_F,\widehat J(z),\eta_J)$ with
$$\|\widehat F(z)-F(z)\|_2\le\eta_F,\qquad \|\widehat J(z)-DF(z)\|_{\rm op}\le\eta_J.$$
For every proposed root ball, the certificate routine must also supply an
inverse bound for the approximate augmented Jacobian, a Jacobian-Lipschitz
constant on the whole ball, and an isolating branch neighborhood/angle
enclosure. If any
bound is missing, return `root-certificate-inconclusive` for that candidate.
Initialize the fold field as `not-requested` when no fold check was asked,
and as `inconclusive` while a requested check remains unresolved.

**Output:** a finite list of certified local section-root balls; a
continuation status from `finite-trace`, `rank-or-tangent-unverified`,
`tangent-angle-failure`, `tube-exit`, `singular-corrector`,
`corrector-budget-exhausted`, `root-certificate-inconclusive`, or
`continuation-budget-exhausted`; and a fold field with value
`not-requested`, `certified`, or `inconclusive`. Each ball records its
center, radius, strict contraction bounds from
[[thm-augmented-residual-contraction-certificate]], the local chart and
angle enclosure identifying it with the unique next point on the traced
branch, and the evaluation-error bounds used.

**Procedure:**

1. If $N_{\rm req}=0$, skip the continuation loop and finalize with the seed
   ball. Otherwise, at the unique root $z_k^*$ in the current certified
   section ball, query
   the tangent routine. If the rank (the dimension of the derivative image,
   [[def-rank-and-nullity]]) of $DF(z_k^*$) cannot be certified equal to $n$ or its
   unit-kernel-vector error bound cannot be verified, return
   `rank-or-tangent-unverified`. Flip the sign of $\widehat t_k$ so its
   certified dot product with the previous orientation is positive. Also
   certify $\widehat t_k^Tt_k\ge c$ for the correspondingly oriented true
   tangent; if either angular condition fails, return `tangent-angle-failure`.
2. Set $z_p:=\bar z_k+h\widehat t_k$ and use the plane normal
   $\widehat t_k$ in
   $$G_k(z):=\bigl(F(z),\widehat t_k^T(z-z_p)\bigr).$$
   The chart certificate must give an interval
   $[-r_{\rm ch}^-,r_{\rm ch}^+]$ and a number $\kappa>0$ with
   $\widehat t_k^Tc_k'(s)\ge\kappa$ throughout it, where $c_k(0)=z_k^*$;
   it must also give a neighborhood in which every zero of $F$ lies on this
   chart. Verify $h>r_k$ and $h+r_k\le\kappa r_{\rm ch}^+$. These
   inequalities put $d=\widehat t_k^T(z_p-z_k^*)$ in
   $(0,\kappa r_{\rm ch}^+]$; by
   [[lem-transverse-hyperplane-selects-unique-local-branch-point]], the
   section has exactly one intersection on the full chart interval. If its angle
   bound fails, return `tangent-angle-failure`; if $h\le r_k$ or the chart
   length condition fails, return `root-certificate-inconclusive`. If the
   predictor or required chart leaves the declared tube, return `tube-exit`.
3. If evaluations are exact, call
   [[alg-finite-budget-newton-for-vector-residuals]] on $G_k$ from $z_p$,
   with tolerance $\epsilon$ and budget $N_c$. Map its `singular-jacobian`
   status to `singular-corrector` and `invalid-trial` to `tube-exit`. For
   `root` or `iteration-budget-exhausted`, retain the last valid iterate as
   a candidate and continue to step 5. If the predictor is certified to lie
   in the invariant ball of [[thm-pseudo-arclength-local-newton-correction]],
   every attempted exact update has that theorem's quadratic error bound;
   otherwise the finite-budget run is only a candidate generator.
4. If evaluations have bounded errors, initialize $y_0=z_p$. For
   $j=0,1,\ldots,N_c$, first query the certified approximate residual and
   Jacobian at $y_j$ and attempt the root certificate in
   [[thm-augmented-residual-contraction-certificate]]. If the certificate
   inputs are unavailable, return `root-certificate-inconclusive`. Append a ball only
   if every strict inequality passes and the whole ball lies inside the
   chart neighborhood where step 2 identifies the unique branch point. If
   it passes, stop this corrector loop. If it fails at $j=N_c$, return
   `corrector-budget-exhausted`. Otherwise call
   [[alg-newton-correction-for-vector-residuals]] on the supplied approximate
   augmented matrix and residual. Map `singular-jacobian` to
   `singular-corrector`; if the trial leaves the tube, return `tube-exit`;
   else set $y_{j+1}=y_j+s_j$. This branch only generates candidates and has
   no convergence promise.
5. In the exact-evaluation branch, apply the same root certificate to the
   last valid Newton candidate. If it passes, append its certified ball. If it
   fails after a `root` residual stop,
   return `root-certificate-inconclusive`; if it fails after
   `iteration-budget-exhausted`, return `corrector-budget-exhausted`. A
   finite Newton budget or residual tolerance alone is never a root proof.
6. After each accepted section ball, set the new previous orientation to
   its certified unit tangent and repeat until $N_{\rm req}$ accepted steps
   are reached; then return `finite-trace`. If $N_s<N_{\rm req}$ is spent
   first, return the partial list with `continuation-budget-exhausted`.
7. During finalization (including every early return), for a requested fold
   check require a certified record matching all
   hypotheses of [[thm-simple-fold-lyapunov-schmidt-parameterization]]:
   $\operatorname{rank}F_x=n-1$, normalized right and nonzero left
   nullvectors, and strict enclosures excluding zero for
   $w^TF_\lambda$ and $w^TF_{xx}[v,v]$. If any condition is unavailable,
   set the fold field to `inconclusive`; otherwise set it to `certified` and
   record only the local fold chart and curvature formula.

## Remarks

The local predictor-defect estimate in
[[lem-regular-curve-chart-and-pseudo-arclength-predictor-defect]] applies to
an exact root and exact unit tangent. Tangent and seed-center errors in an
actual step are handled by the supplied residual/error enclosures and the
root certificate, not silently set to zero. The exact Newton branch preserves
the supplier's `root` convention: residual tolerance was met, not necessarily
an exact zero. No finite trace certifies that a connected component is
exhausted or that another component is absent.
