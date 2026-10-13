---
id: rem-gr-curvature-tidal-scope-and-conventions
kind: remark
title: "Conventions, units and scope for curvature and tidal quantities"
status: published
origin: session
domain: physics
dependency_level: 15
physical_scope: "Bookkeeping remark for the curvature-and-tides page: it fixes the sign, index and unit conventions of the curvature items, distinguishes chart artifacts from curvature, and delimits the model status of the word 'tidal'. It makes no prediction, uses no empirical premise, and asserts nothing about nature beyond the adopted framework postulates it cites."
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, thm-gr-second-bianchi-and-divergence-free-einstein, def-gr-si-unit-and-coordinate-conventions, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-point-normal-and-exponential-coordinate-charts, pthm-gr-tidal-comparison, thm-gr-conjugacy-and-local-timelike-maximum]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  pthm-gr-tidal-comparison: physical-result
  thm-gr-conjugacy-and-local-timelike-maximum: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: curvature conventions (3.63)-(3.67) and the tidal reading of geodesic deviation (3.113), printed pp. 74-76 and 86-88 (PDF pp. 81-83 and 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 4.4-4.6: symmetries, Bianchi identities, Ricci and Einstein tensors, and the tidal remark, printed pp. 45-50 (PDF pp. 46-51)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 3.4 and 3.4.1: Riemann symmetries, Bianchi identity and the Ricci/Einstein tensors, printed pp. 130-132 (PDF pp. 137-139)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Conventions, units and scope

**Signs and index order.** The curvature operator, the component order and the
lowered, Ricci, scalar and Einstein contractions are fixed once in
[[def-gr-curvature-tensor-and-derived-tensors]] and used unchanged throughout
this page: $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and
$R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$, so that the
algebraic symmetries of [[thm-gr-curvature-algebraic-symmetries]] and the
divergence identity $\nabla^aG_{ab}=0$ of
[[thm-gr-second-bianchi-and-divergence-free-einstein]] hold in exactly the
displayed form. Sources that order the loop indices differently, or that use
the opposite overall sign, state the same mathematics in another convention;
no formula is imported from a source without converting it to this one.

**Units.** In length coordinates, in which $x^0=ct$ and all $x^a$ carry
metres and the metric components are dimensionless
([[def-gr-si-unit-and-coordinate-conventions]]), the Christoffel symbols
$\Gamma^a{}_{bc}$ have units of inverse length and the components
$R^a{}_{bcd}$, $R_{abcd}$, $\operatorname{Ric}_{ab}$ and $S$ have units of
inverse length squared. The Einstein tensor has the same units as the Ricci
tensor, and the field-equation coupling of the framework is normalized so
that $\kappa T_{ab}$ has the same units; no numerical value of any constant
is asserted by these conventions. In other coordinates, such as charts with
an angular coordinate, individual component units change with the Jacobian
and carry no universal dimension; only invariant statements, proper times and
observer-relative quantities keep their physical reading.

**Connection artifacts versus curvature.** The Christoffel symbols are chart
functions and not tensor components; a chart can make all of them vanish at a
point ([[thm-gr-point-normal-and-exponential-coordinate-charts]]) without
making the curvature vanish there:
[[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (c) shows
that curvature at a point is exactly the second-order metric information that
no coordinate choice can remove. Conversely a chart may have nonzero
Christoffel symbols everywhere while the curvature vanishes identically, as
for flat space in curvilinear coordinates. Curvature is also not a trace of
itself: $\operatorname{Ric}=0$ is a weaker condition than $R=0$, and the
converse implications are not asserted anywhere on this page.

**"Tidal" is a model term.** In [[pthm-gr-tidal-comparison]] the word tidal
refers to the curvature term $R(U,J)U$ in the deviation equation satisfied by
smooth free-fall congruences of the adopted model; the deduction shows that
this term is exactly the infinitesimal relative four-acceleration when ideal
test-body histories realize the mathematical family on a common interval.
Its vanishing for all timelike directions and all separation values at an
event is equivalent to the vanishing of curvature there. All these values
are attained by local mathematical candidate families, without guaranteeing
bodies realizing them. It does not assert
that any real body is freely falling, that any particular measured effect is
of this form, or that agreement of any such comparison would establish the
postulates; a comparison with data would require apparatus models, empirical
premises with uncertainties and statistical inference, none of which is part
of this page.

**Scope of the maximum and conjugacy results.** The exact maximum statement
is [[thm-gr-conjugacy-and-local-timelike-maximum]] clause (b). Its hypotheses
are a smooth future timelike geodesic $\gamma:[0,b]\to M$, $b>0$, with
$g(\gamma',\gamma')=-1$ and no conjugate instant in $(0,b]$ relative to $0$:
no nonzero smooth field $J$ along $\gamma$ satisfying
$D_s^2J=R(\gamma',J)\gamma'$ vanishes both at $0$ and at such an instant.
Fix a finite chart cover $(U_i,x_i)$ and a partition
$0=s_0<\cdots<s_m=b$ with $\gamma([s_{i-1},s_i])\subseteq U_i$.
The comparison curves $\alpha:[0,b]\to M$ are continuous piecewise-$C^1$
future timelike curves with the same endpoints. For some $\delta>0$, each
comparison curve must remain in the corresponding $U_i$ and satisfy
$\sup\|x_i\circ\alpha-x_i\circ\gamma\|<\delta$ and
$\sup\|(x_i\circ\alpha)'-(x_i\circ\gamma)'\|<\delta$ on every common
smooth partition piece, with Euclidean norms as in that clause. Only in
this comparison class is $L_g(\alpha)\le b=L_g(\gamma)$ asserted; equality
means a piecewise-$C^1$ strictly increasing reparametrization onto $[0,b]$.

The local inverse branches used in that theorem's proof steps 2.1-3.1 are
smooth maps $\psi_k:V_k\to D_k\subseteq T_pM$, $p=\gamma(0)$, inverse to
$\exp_p|_{D_k}:D_k\to V_k$, where $D_k,V_k$ are open and the restricted
exponential map is a diffeomorphism. A finite parameter subdivision puts
each radial subsegment $s\gamma'(0)$ in its corresponding $D_k$.
Compatibility means adjacent branches agree on a neighborhood of the
shared endpoint event and send that event to the same radial vector.
Branches at nonadjacent occurrences of a repeated event need not agree;
one injective exponential chart containing the whole segment is not assumed.
These are local assertions, not global maximality, existence of conjugate
instants, or a classification of where global maximality first fails.
Global causal, completeness and singularity statements are reserved for
later pages and are not prerequisites of the results here.
