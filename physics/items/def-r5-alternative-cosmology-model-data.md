---
id: def-r5-alternative-cosmology-model-data
kind: definition
title: Alternative string-cosmology model data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 1
deps:
- def-r5-cosmology-4d-scalar-eft-data
- def-smooth-vector-field-as-a-tangent-bundle-section
- def-oriented-smooth-manifold-and-oriented-chart
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
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
sources:
  references:
  - title: 'M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early
      Universe to Today, arXiv:2303.04819v2'
    url: https://arxiv.org/pdf/2303.04819v2
    locator: Complete retrieved review; §7.1–§7.9, PDF pp. 133–152, for alternative model families, stated branches, transition
      and control limitations; §7.3–§7.9, PDF pp. 135–152, for the exact family interfaces retained here.
  - title: Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424
    url: https://arxiv.org/pdf/0907.5424
    locator: Complete retrieved 159-page lecture-note PDF; Lecture 1 §§3.1–3.3 and 6.1–6.2 for spacetime, background dynamics
      and scalar-field model inputs; Lecture 2 §§9.1–9.3 and 12–13 for perturbation variables, transfer to observables, spectra
      and pivot quantities. Inflation-specific assumptions are not made universal.
physical_scope: Definition of alternative string-cosmology model data only. It makes no cosmological solution, empirical,
  string-vacuum, transition, or observational claim.
---

## Definition

An alternative cosmology model datum specifies spacetime dimension/frame, action and fields, background branch (expanding/contracting/static), initial and boundary conditions, sources and transition/bounce prescription, perturbation variables and transfer rule, EFT/alpha-prime/string-loop control regime, and the observational quantities to be compared; absent transition or transfer data are recorded as missing rather than inferred.

More explicitly, let $D\geq 2$ be the spacetime dimension, let $I\subseteq\mathbb R$ be a nonempty time interval, and supply $(\mathcal M,g_F,\mathcal N,\mathfrak o)$: $\mathcal M$ is a smooth $D$-manifold, $g_F$ is a smooth symmetric nondegenerate covariant $2$-tensor of signature $(-,+,\ldots,+)$, and $\mathcal N:\mathcal M\to T\mathcal M$ is a globally defined smooth tangent-bundle section satisfying $g_F(\mathcal N,\mathcal N)<0$ everywhere. The supplied field $\mathcal N$ selects the time orientation; a timelike vector $v\in T_p\mathcal M$ is future-directed here when $g_F(v,\mathcal N_p)<0$. Independently supply the orientation $\mathfrak o$: for every $p$, it selects a ray $\mathfrak o_p\subset\det T_p\mathcal M=\Lambda^D T_p\mathcal M$, consisting of the positive multiples of a nonzero $D$-vector, smoothly in $p$. Smoothness means these rays have local nowhere-zero smooth generators whose ratios on overlaps are positive. The time orientation and determinant-line orientation are independent data on all of $\mathcal M$, not structures inferred from a metric or from a field on one open branch. The smooth tangent bundle uses the countable-choice convention already inherited through the geometric EFT supplier. This is a specification of supplied structures, with no assertion that every Lorentzian manifold admits them. The label $F$ names the **field frame**, meaning the metric field used in the action and equations; it does not mean a coordinate chart, observer congruence, or tetrad. If both string-frame and Einstein-frame metrics are used, give the Weyl map between them and state the metric to which each action, field, and observable belongs. A coordinate chart is a separate local parametrization of $\mathcal M$.

A datum contains a spacetime dimension and named metric frame; an action and its field domain; a background branch; initial and boundary data; sources and transition prescriptions; perturbation variables and a transfer rule; correction-control conditions; and observable outputs to compare.

The action is a specified functional $S_F[\Psi]$ on a stated space of sections or field maps $\Psi$ over $\mathcal M$, with the fields, regularity, variational boundary terms, and field equations written explicitly. A source is a specified field or localized term in those equations or in the action; its normalization, support, and frame are part of the datum.

A background is a selected field configuration $\Psi_0$ together with the equations it solves, or an expressly prescribed comparison configuration if it is not a solution. For a homogeneous cosmological branch, specify a smooth unit timelike observer field $u$ on the branch, future-directed in the supplied time orientation, requiring $g_F(u,\mathcal N)<0$; give its expansion scalar $\theta=\nabla^{(F)}_\mu u^\mu$, where $\nabla^{(F)}$ is the Levi-Civita connection of $g_F$. Specify a nonempty open spacetime region $U\subseteq\mathcal M$ on which $u$ is defined. The branch is expanding when $\theta(p)>0$ for every $p\in U$, contracting when $\theta(p)<0$ throughout $U$, and static in the expansion sense when $\theta(p)=0$ throughout $U$; otherwise label it as mixed or split the region. If branch labels are assigned to time subintervals $J\subseteq I$, additionally supply a smooth time function $T:U\to I$ with $g_F^{-1}(dT,dT)<0$ and $dT(u)>0$ everywhere on $U$. Here $g_F^{-1}$ is the bilinear form on covectors whose matrix is the inverse of the metric matrix; the strict negative inequality defines a timelike differential; the region for $J$ is the nonempty set $\{p\in U:T(p)\in J\}$. In the FLRW specialization below, take $\mathcal M=I\times\Sigma$ and $T(t,x)=t$. For an FLRW subcase let $d=D-1\geq1$, let $I$ be open, and let $\Sigma$ be a connected smooth $d$-manifold without boundary with a time-independent Riemannian metric $\gamma$ of constant normalized sectional curvature $k\in\{-1,0,1\}$. Explicitly, its Levi-Civita curvature satisfies $R^\gamma(X,Y)Z=k(\gamma(Y,Z)X-\gamma(X,Z)Y)$ for all tangent vectors, with convention $R^\gamma(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$; for $d=1$ take $k=0$. Use cosmic proper time $t$, dimensionless spatial coordinates, the future direction of increasing $t$, and the unit-lapse convention $c=1$:

$$ds_F^2=-dt^2+a(t)^2\gamma_{ij}dx^i dx^j.$$

Here $a:I\to(0,\infty)$ is smooth and has units of length, while $H:=\dot a/a$ has units of inverse length (equivalently inverse time when $c=1$). In this FLRW subcase take $\mathcal N=\partial_t$ and retain the independently supplied orientation $\mathfrak o$. The comoving field $u=\partial_t$ is then future-directed and unit timelike. In product coordinates its divergence is $\theta=\nabla^{(F)}_\mu u^\mu=|g_F|^{-1/2}\partial_t(|g_F|^{1/2})=d\dot a/a=dH$, since $|g_F|=a^{2d}\det\gamma$ and $\gamma$ is time-independent. If instead the conversion constant is retained with $g_{tt}=-c^2$, the unit field is $u=c^{-1}\partial_t$ and $\theta=dH/c$. This observer congruence is distinct from the field frame $F$.

Initial data are field values and the normal derivatives required by the stated equations on a specified spacelike hypersurface, subject to the stated constraint equations. Boundary data are functions or geometric conditions on a specified boundary. A transition or bounce prescription must identify the input and output hypersurfaces and give the matching, jump, source, or regularity conditions; if these data are absent, the record contains the value missing and no transition is inferred.

Perturbations are linear variations $\delta\Psi=\left.\frac{d}{d\epsilon}\Psi_\epsilon\right|_{\epsilon=0}$ about $\Psi_0$, with an identification of the perturbed and background spacetimes, a gauge choice or gauge-invariant variables, and their function spaces stated. A transfer rule is a specified map from perturbation data on the initial hypersurface to perturbation data on the final hypersurface. Its absence is recorded as missing. For an effective field theory, state the cutoff, omitted modes, derivative and backreaction bounds, and the correction parameters. Denote a string-frame metric by $g_{\rm str}$ and the string coupling by $g_{\rm string}$ so the metric and scalar are not denoted by the same symbol. Under a stated dilaton convention, for example, $g_{\rm string}=e^\Phi$ is dimensionless; $[\alpha']=\mathrm{length}^2$ and $\ell_s=\sqrt{\alpha'}$ has units of length. Any curvature-control bound must name a nonnegative curvature scale $\mathcal K_F$ in the named frame, with units $\mathrm{length}^{-2}$, and specify whether it is formed from a scalar invariant or from components in a stated frame; then $\alpha'\mathcal K_F$ is dimensionless. Bounds such as $\alpha'\mathcal K_{\rm str}\ll1$ and $g_{\rm string}\ll1$ are model-specific control conditions, not universal thresholds. Observable outputs are specified functions of a model solution, such as a power spectrum or transfer function; they are not observations. An empirical comparison separately requires the measured data, sampling and likelihood model, and uncertainty.

When the record includes a four-dimensional Einstein-frame multi-scalar EFT component, use the exact fields, frame, action normalization, cutoff, and omitted-mode convention of the four-dimensional Einstein-frame multi-scalar cosmology EFT data definition. That optional specialization does not assert that every alternative scenario is four-dimensional, Einstein-frame, or a controlled EFT.

## Definition references

[[def-r5-cosmology-4d-scalar-eft-data]]

[[def-smooth-vector-field-as-a-tangent-bundle-section]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2](https://arxiv.org/pdf/2303.04819v2)

[Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424](https://arxiv.org/pdf/0907.5424)
