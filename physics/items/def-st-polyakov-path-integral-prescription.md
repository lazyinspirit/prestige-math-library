---
id: def-st-polyakov-path-integral-prescription
kind: definition
title: "Polyakov Path Integral Prescription"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 5
deps:
  - post-st-bosonic-polyakov-model
  - def-st-conformal-gauge-and-residual-symmetry
  - def-st-bosonic-bc-ghost-system
  - def-riemann-surface-and-holomorphic-atlas
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-axiom-of-choice
dependency_roles:
  post-st-bosonic-polyakov-model: physical-assumption
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: "A formal closed Euclidean-worldsheet prescription for the flat tensile bosonic string; it defines no measure, convergence theorem, or target-time contour."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§5.1–5.4.3 and 6.1–6.2.3 (PDF file pp.115–145; printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); formal Faddeev–Popov prescription, ghost determinant, residual moduli, and path-integral limits."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For $D\ge3$, let the target be $M=\mathbb R^{1,D-1}$ with $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$. Fix a nonempty compact, connected, oriented smooth surface $\Sigma_g$ without boundary. Give it a complex atlas, meaning a covering family of homeomorphisms from open subsets of $\Sigma_g$ onto open subsets of $\mathbb C$ whose transition maps are holomorphic in both directions. Assume the Axiom of Choice for the genus convention: $g\ge0$ is the unique handle number for which the underlying oriented surface is homeomorphic to the sphere with $g$ handles. The worldsheet fields are smooth maps $X\in C^\infty(\Sigma_g,M)$ and smooth positive-definite Riemannian metrics $g_E$ on $\Sigma_g$; the formal map domain includes maps that are not immersions. In units $\hbar=c=1$, $[X^\mu]=L$, $[\alpha']=L^2$, $T=(2\pi\alpha')^{-1}$, and worldsheet coordinates are dimensionless.

The Euclidean action assigned to $(X,g_E)$ is
$$
S_E[X,g_E]=\frac{T}{2}\int_{\Sigma_g}d\operatorname{vol}_{g_E}\,g_E^{ab}\eta_{\mu\nu}\partial_aX^\mu\partial_bX^\nu
$$
Here $\partial_a$ is differentiation in a smooth local worldsheet coordinate chart. On cylinder coordinates the continuation is $\tau=-i\tau_E$; on general $\Sigma_g$ the displayed expression is the formally continued local action, and no global time coordinate is assumed.

Let $\operatorname{Met}^+(\Sigma_g)$ be the set of smooth positive-definite metrics, $\operatorname{Diff}^+(\Sigma_g)$ the smooth orientation-preserving diffeomorphisms, and $\operatorname{Weyl}(\Sigma_g)=C^\infty(\Sigma_g,\mathbb R)$ the additive Weyl parameters. The action on fields is
$$
(\phi,\omega)\cdot(g_E,X)=(e^{2\omega}\phi^*g_E,X\circ\phi),\qquad \phi\in\operatorname{Diff}^+(\Sigma_g),\quad \omega\in\operatorname{Weyl}(\Sigma_g).
$$
Define $g_1\sim g_2$ when $g_2=e^{2\omega}\phi^*g_1$ for such $\phi,\omega$, and define the formal conformal moduli set $\mathcal M_g=\operatorname{Met}^+(\Sigma_g)/\sim$. The prescription symbolically divides the integral over $(g_E,X)$ by the diffeomorphism and Weyl action, leaving the formal integration over $\mathcal M_g$.

For a fixed metric $g_E$, let $\nabla$ be its Levi-Civita connection and define the linearized Faddeev--Popov operator on smooth vector fields by
$$
(P_{g_E}v)_{ab}=\nabla_av_b+\nabla_bv_a-g_{E,ab}\nabla_cv^c,
$$
where $v_b=g_{E,bc}v^c$; it is the trace-free part of the metric variation under the infinitesimal diffeomorphism $v$. Here $\Gamma(S^2_0T^*\Sigma_g)$ denotes the smooth symmetric covariant $2$-tensor fields $h$ with $g_E^{ab}h_{ab}=0$. Its kernel $\ker P_{g_E}$ is the conformal-Killing vector-field space, hence the $c$-ghost zero-mode space. Use the $L^2(g_E)$ pairings $\langle v,w\rangle=\int_{\Sigma_g}g_{E,ab}v^aw^b\,d\operatorname{vol}_{g_E}$ and $\langle h,k\rangle=\int_{\Sigma_g}g_E^{ac}g_E^{bd}h_{ab}k_{cd}\,d\operatorname{vol}_{g_E}$ on vector fields and trace-free symmetric tensors; the formal adjoint $P_{g_E}^*$ defines the $b$-ghost zero-mode space $\ker P_{g_E}^*$; the linearized moduli space is the quotient $\operatorname{coker}P_{g_E}=\Gamma(S^2_0T^*\Sigma_g)/\operatorname{im}P_{g_E}.$ The gauge-fixing determinant is represented formally by the Grassmann-odd symmetric-traceless tensor $b_{ab}$ and vector $c^a$ with action $S_{gh}=(2\pi)^{-1}\int_{\Sigma_g}d\operatorname{vol}_{g_E}\,b_{ab}\nabla^ac^b$, in local complex coordinates with chiral components $b_{zz},c^z$ and antiholomorphic counterparts. This specifies the zero-mode spaces but does not assert a global gauge slice or a measure. Since the target metric has a timelike coordinate, $S_E$ is not a positive quadratic form in $X$; no target-time integration contour is chosen.

## Definition references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§5.1–5.4.3 and 6.1–6.2.3 (PDF file pp.115–145; printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); printed pp.108–138); formal Faddeev–Popov prescription, ghost determinant, residual moduli, and path-integral limits.

## Remarks

[[post-st-bosonic-polyakov-model]] is the adopted Lorentzian model whose formal Euclidean prescription is recorded here. [[def-st-conformal-gauge-and-residual-symmetry]] gives the local gauge convention, and [[def-st-bosonic-bc-ghost-system]] gives the corresponding gauge-fixed ghost sector. The Euclidean worldsheet is a compact Riemann surface under [[def-riemann-surface-and-holomorphic-atlas]]. Its genus is taken from [[def-genus-and-euler-characteristic-compact-riemann-surface]], whose exact statement assumes [[def-axiom-of-choice]]; AC enters through the compact-surface classification used to define genus. The imports are mathematical prerequisites only and do not construct a physical measure.

The quotient, its conformal moduli set, and the two linearized ghost zero-mode spaces are the exact formal objects used here; no finite-dimensional moduli-space structure or global gauge slice is asserted. The symbols $\mathcal D X$ and $\mathcal Dg$ do not designate measures whose existence, positivity, or convergence has been proved. The target has one timelike coordinate, so worldsheet Euclidean continuation alone does not specify a convergent target-field Gaussian; a target-time contour is separate and unspecified. No sewing, amplitude, or all-genus measure theorem is asserted.
