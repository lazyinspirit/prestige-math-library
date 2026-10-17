---
id: alg-pseudo-arclength-continuation-with-certified-local-corrector
kind: algorithm
title: "Finite-budget pseudo-arclength continuation with a certified local corrector"
status: published
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
All supplied tangent, evaluator, chart, certificate and requested fold callbacks must return a result or their declared failure in finite time for a termination claim. Their mathematical bounds must be sound; finite outer budgets cannot force a nonreturning callback to finish. For every root ball proposed by a continuation attempt, the certificate routine must also supply an
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
`not-requested`, `certified`, or `inconclusive`. The initial seed record
retains its supplied unique-section-root certificate, center, radius,
section and transverse local chart/rank evidence; its center error is at
most $r_0$. Any stronger error or contraction bounds proved by the supplied
seed certificate are retained, but no contraction bounds are required or
inferred for the seed. Every newly appended ball records its center,
radius, section, strict contraction bounds and center-error bound from
[[thm-augmented-residual-contraction-certificate]], the local chart and
angle enclosure identifying it with the unique next point on the traced
branch, and the evaluation-error bounds used.

**Procedure:**

1. On entry only, initialize the list with the valid seed ball, accepted count $a=0$ and attempted continuation count $s=0$, and use the supplied unit previous orientation at the seed. On each visit to this step, denote the current previous orientation by $\tau_k$; retain the list, counts and orientation when returning from step6. If $a=N_{\rm req}$, including $N_{\rm req}=0$, finalize with status `finite-trace`. Otherwise, if $s=N_s$, finalize with `continuation-budget-exhausted`. Increment $s$ before making any callback for the next attempt. Thus $N_s$ caps attempts, not just successful steps.
2. At the unique current root $z_k^*$, query the tangent routine. Verify rank $DF(z_k^*)=n$, a unit candidate $\widehat t_k$, a unit true kernel vector $t_k$, its certified error $\|\widehat t_k-t_k\|_2\le e_k$, and the complement inverse bound. Missing evidence returns `rank-or-tangent-unverified`. Orient $\widehat t_k$ and its corresponding $t_k$ together, keeping $\tau_k$ fixed. Certify $\tau_k^Tt_k\ge c$ and $a_k:=\tau_k^T\widehat t_k>0$; an unavailable or failed angular test returns `tangent-angle-failure`.
3. Set $z_p=\bar z_k+h\widehat t_k$ and retain the **previous** orientation as section normal:
$$G_k(z)=\bigl(F(z),\tau_k^T(z-z_p)\bigr).$$
The chart certificate supplies a unit-speed chart $c_k$ with $c_k(0)=z_k^*$, $c_k'(0)=t_k$, an interval $[-r_{\rm ch}^-,r_{\rm ch}^+]$, a number $\kappa>0$, and a neighborhood $V_k$ in which every zero of $F$ belongs to that chart interval. Verify $\tau_k^Tc_k'(u)\ge\kappa$ throughout the interval and
$$h a_k>r_k,\qquad h a_k+r_k\le\kappa r_{\rm ch}^+.$$
These checks bound $d=\tau_k^T(z_p-z_k^*)$ between $h a_k-r_k$ and $h a_k+r_k$, so the selected section has one forward intersection on the supplied chart by [[lem-transverse-hyperplane-selects-unique-local-branch-point]]. A failed chart angle gives `tangent-angle-failure`; failed offset/length evidence gives `root-certificate-inconclusive`. If the predictor, proposed ball or required chart leaves the declared tube, return `tube-exit`.
4. With exact evaluations, call [[alg-finite-budget-newton-for-vector-residuals]] on $G_k$ from $z_p$, tolerance $\epsilon$ and update budget $N_c$. Map `singular-jacobian` to `singular-corrector` and `invalid-trial` to `tube-exit`. For `root` or `iteration-budget-exhausted`, retain the last valid iterate as a candidate. If the predictor is certified inside the invariant ball of [[thm-pseudo-arclength-local-newton-correction]], every attempted exact update has its quadratic error bound; otherwise this is only a candidate generator. Apply the root certificate of [[thm-augmented-residual-contraction-certificate]] to the last candidate. Accept only if every inequality passes and the **whole** ball lies in $V_k$. Unavailable inputs give `root-certificate-inconclusive`; failed tests after a `root` residual stop give that same status; failed tests after exhausted updates give `corrector-budget-exhausted`. Neither residual tolerance nor budget alone is a root proof. A passing ball proceeds to step6, without an earlier append.
5. With bounded evaluation errors, set $y_0=z_p$. For $j=0,\ldots,N_c$, query the supplied certified residual/Jacobian and root-ball data at $y_j$. Unavailable certificate inputs give `root-certificate-inconclusive`. Apply the same strict contraction tests and whole-ball inclusion in $V_k$ as in step4. A passing ball proceeds to step6, without an earlier append. If the tests fail at $j=N_c$, return `corrector-budget-exhausted`. Otherwise call [[alg-newton-correction-for-vector-residuals]] on the supplied approximate augmented residual and matrix. Map `singular-jacobian` to `singular-corrector`; otherwise let $s_j$ be its returned correction. A trial $y_j+s_j$ outside the tube gives `tube-exit`; otherwise set $y_{j+1}=y_j+s_j$.  This bounded-error branch has no convergence promise.
6. Append the passing ball **once**, with its section, error bounds and chart/angle record; increase $a$ by one. For the next attempt use the already certified unit candidate $\widehat t_k$ as the new previous orientation. It is not silently declared the exact tangent at the new root: step2 must certify its angle against the next root's tangent. Return to step1.
7. At every finalization, including every early return, retain the continuation status already assigned. For a requested fold check require a returned certified record satisfying all hypotheses of [[thm-simple-fold-lyapunov-schmidt-parameterization]] at its specified point: $F=0$, the required $C^3$ neighborhood, $\operatorname{rank}F_x=n-1$, normalized right and nonzero left nullvectors, and strict enclosures excluding zero for $w^TF_\lambda$ and $w^TF_{xx}[v,v]$, together with the stated complement/parameter normalization. Missing or failed evidence leaves the fold field `inconclusive`; otherwise set it to `certified` and record only the local fold chart and curvature formula. Without a fold request keep `not-requested`. This finalization makes finitely many callback requests and performs no unbounded search.

## Remarks

The local predictor-defect estimate in
[[lem-regular-curve-chart-and-pseudo-arclength-predictor-defect]] applies to
an exact root and exact unit tangent. Tangent and seed-center errors in an
actual step are handled by the supplied residual/error enclosures and the
root certificate, not silently set to zero. The exact Newton branch preserves
the supplier's `root` convention: residual tolerance was met, not necessarily
an exact zero. No finite trace certifies that a connected component is
exhausted or that another component is absent.
