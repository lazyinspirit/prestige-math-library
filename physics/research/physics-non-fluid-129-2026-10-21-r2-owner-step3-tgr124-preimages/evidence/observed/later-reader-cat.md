---
id: rem-tgrx-qnec-qfc-status
kind: remark
title: QNEC and QFC have different status and hypotheses
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgrx-linearized-horizon-model
dependency_roles:
  post-tgrx-linearized-horizon-model: formulation-prerequisite
physical_scope: >
  A source-scoped status distinction between selected quantum null energy
  inequalities and the quantum focusing conjecture. It establishes no entropy
  inequality, universal theorem, experimental result, or model applicability
  claim.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Raphael Bousso, Zachary Fisher, Jason Koeller, Stefan Leichenauer and
        Aron C. Wall, Proof of the Quantum Null Energy Condition,
        arXiv:1509.02542v2
      url: https://arxiv.org/pdf/1509.02542
      locator: "arXiv:1509.02542v2: abstract/outline; §2 equation (2.2) general
        conjecture; §3.1 D>2 stationary-null proof scope; §4.5 equation (4.63)
        completion; §5 equation (5.5) D=2 free-scalar form and qualified
        extensions. Actual reading: PDF pp. 1, 5, 7–9, 24–27; no replica-proof
        audit or local QNEC proof is claimed."
    - title: Raphael Bousso, Zachary Fisher, Stefan Leichenauer and Aron C. Wall, A
        Quantum Focussing Conjecture, arXiv:1506.02669v1
      url: https://arxiv.org/pdf/1506.02669
      locator: arXiv:1506.02669v1, §3.1–§3.3 (PDF pp. 8–12), especially
        equations (3.1), (3.5), and (3.8)–(3.10), for the generalized-entropy
        functional, cut profile, quantum expansion and QFC; §5.2 (PDF p. 19)
        for the diagonal QFC and its QNEC limit. No QFC proof audit is claimed.
    - title: Zicao Fu, Jason Koeller and Donald Marolf, Violating the Quantum Focusing
        Conjecture and Quantum Covariant Entropy Bound in d ≥ 5 dimensions,
        arXiv:1705.03161v2
      url: https://arxiv.org/pdf/1705.03161
      locator: arXiv:1705.03161v2, abstract and §2, especially equations
        (2.13), (2.17)–(2.19) (PDF pp. 5–6), for the weak-curvature,
        locally-stationary Einstein-Hilbert-Gauss-Bonnet QFC violations in
        d ≥ 5 for either sign of the coupling; §4 and the v2 note (PDF pp.
        9–10) for the transverse-localization and effective-cutoff caveat. No
        full proof audit is claimed.
    - title: Victor Franken, Sami Kaya, François Rondeau, Arvin Shahbazi-Moghaddam and
        Patrick Tran, Tests of restricted quantum focusing and a new CFT bound,
        arXiv:2510.13961v3
      url: https://arxiv.org/pdf/2510.13961
      locator: arXiv:2510.13961v3 (the current arXiv version and published
        version), abstract and §1 (PDF pp. 1–6) for the rQFC formulation and
        status; §3 (PDF pp. 16–21) for the JT model-specific QFC violations,
        matter-dominated regime and no-uplift caveat. No full proof audit is
        claimed.
verification:
  precheck: n/a
---

## Statement

Use natural units $c=\hbar=k_B=1$. For the cited quantum null energy condition
(QNEC), let $d\ge2$ be the spacetime dimension and let $\Sigma$ be a smooth
spacelike codimension-two cut splitting a
Cauchy surface, and let $p\in\Sigma$. Let $\mathcal N$ be a smooth null
hypersurface orthogonal to $\Sigma$ near $p$, with smooth future-directed null
generators labelled by transverse coordinates $y$. On each generator use an
affine parameter $\lambda$ increasing toward the future with $[\lambda]=L$,
and normalize its tangent by $k^a=(d/d\lambda)^a$. Deforming $\Sigma$ to
$\Sigma[\lambda(y)]$
moves each generator by its indicated affine amount. The source's
$S_{\mathrm{out}}[\lambda(y)]$ is the von Neumann entropy of the quantum-field
state restricted to one side of the deformed cut, equivalently to the
corresponding side of a Cauchy surface; the entropy itself may be divergent,
while the source-defined derivatives in the inequality are finite. In §2,
equation (2.2), the authors call the pointwise formulation the “general
conjecture”; its local geometric condition is that the classical expansion
and shear vanish at $p$. For a transverse patch of area $A$ about $p$,
$S_{\mathrm{out}}''(p)$ is the source-defined second affine variation for
that patch, with the other generators held fixed. The corresponding
pointwise formulation, in the small-area notation of equation (2.3), is
$$\langle T_{kk}(p)\rangle\ge\frac{1}{2\pi}\lim_{A\to0}\frac{S_{\mathrm{out}}''(p)}{A},\qquad \langle T_{kk}(p)\rangle:=\langle T_{ab}(p)k^ak^b\rangle.$$
Here $A$ is the geometric area of the transverse patch, computed from the
Riemannian metric induced on $\Sigma$, so $[A]=L^{d-2}$; both sides then have
dimension $L^{-d}$. Separately, the paper's abstract and
outline state applicability to free or superrenormalizable, massive or massless
bosonic fields on stationary null hypersurfaces, where “stationary” means that
the classical expansion vanishes everywhere. The authors explicitly treat the
QNEC proof as a fixed-background calculation without dynamical gravity. Its
§3.1–§4.5 argument treats $D>2$ on such a hypersurface. Section 5 derives the
free-scalar $D=2$ inequality by dimensional reduction and strong subadditivity;
there $T_{2D}$ is the stress tensor of the reduced chiral scalar, whose action
on the reduced theory agrees with the transverse integral of $T_{kk}$, and
$S''_{2D}$ is the reduced entropy's second affine variation. Section 5 also
treats higher-spin bosonic fields and discusses extending the result to
superrenormalizable interactions conditionally on preservation of the
null-surface observable algebra and $T_{kk}$; the paper presents that
preservation as expected, not as established for arbitrary such interactions.
These source-reported scopes are distinct from the general pointwise
conjectural formulation of §2; they do not establish that formulation for every
field theory and background.

For the quantum focusing conjecture (QFC) in the cited semiclassical
Einstein-gravity formulation, let $\sigma$ be a smooth spacelike
codimension-two cut splitting a Cauchy surface, and let $\mathcal N$ be the
smooth null hypersurface generated by its orthogonal future-directed null
geodesics. Label the generators by local transverse coordinates
$y=(y^1,\ldots,y^{d-2})$ in $d$ spacetime dimensions. On each generator choose
an affine parameter $\lambda$ increasing to the future, with $\lambda=0$ at
$\sigma$, $[\lambda]=L$, and tangent $k=(d/d\lambda)$. A smooth nonnegative function
$V(y)$ defines a cut $\sigma[V]$ by its intersection with generator $y$ at
$\lambda=V(y)$; restrict to profiles for which this is a well-defined smooth
cut that still splits a Cauchy surface. Let $q_{AB}[V]$ be the positive
induced metric on $\sigma[V]$ in the coordinates $y$, set
$h[V](y):=\det(q_{AB}[V](y))$, and define its area by
$$A[V]:=\int_{\sigma[V]}\sqrt{h[V](y)}\,d^{d-2}y.$$
Let $S_{\mathrm{out}}[V]$ be the von Neumann entropy of the quantum-field state
restricted to one side of $\sigma[V]$. It may be ultraviolet divergent by
itself. In the cited source, the generalized entropy is the finite
cutoff-independent combination
$$S_{\mathrm{gen}}[V]:=\frac{A[V]}{4G}+S_{\mathrm{out}}[V]+S_{\mathrm{ct}}[V],$$
where $S_{\mathrm{ct}}[V]$ is the source-prescribed local geometric
counterterm contribution; this is the source's $S_{\mathrm{grav}}[V]
=A[V]/(4G)+S_{\mathrm{ct}}[V]$ plus $S_{\mathrm{out}}[V]$, with
$\hbar=1$. In $d$ dimensions, $G>0$ has dimension $L^{d-2}$, so
$S_{\mathrm{gen}}$ is dimensionless. The source defines the quantum expansion
as the entropy response to a localized affine displacement, divided by the
geometric area of the transverse patch; in its functional-derivative
convention this is
$$\Theta[V;y_1]:=\frac{4G}{\sqrt{h[V](y_1)}}\frac{\delta S_{\mathrm{gen}}[V]}{\delta V(y_1)}.$$
For every admissible one-parameter family $V_\tau$ with
$\partial_\tau V_\tau(y)\ge0$, the QFC conjectures
$$\frac{\delta\Theta[V;y_1]}{\delta V(y_2)}\le0$$
for all generator labels $y_1,y_2$, with the coincident-point diagonal
understood in the source's distributional sense. This remains a conjecture in
general.

The cited 2017 Einstein-Hilbert-Gauss-Bonnet analysis constructs weak-curvature
QFC violations for $d\ge5$ at points where the null expansion and shear vanish.
The construction uses arbitrarily fine transverse localization. The authors'
v2 note reports that restricting entropy variations to surfaces smooth on the
scale associated with $G\gamma$ removes their violation, and leaves the
effective-field-theory-scale formulation as an open issue.

The cited 2026 v3 paper proves the restricted QFC (rQFC) for a class of
two-dimensional Jackiw-Teitelboim (JT) gravity models coupled to quantum field
theory. For a differentiable family of cut profiles $V_\tau$ with
$\partial_\tau V_\tau(y)\ge0$, put $\Theta_\tau(y):=\Theta[V_\tau;y]$.
The rQFC asserts $\partial_\tau\Theta_\tau(y)\le0$ only at points where
$\Theta_\tau(y)=0$; it is weaker than the full QFC. The authors also construct
full-QFC counterexamples in a JT regime where matter quantum effects compete
with the total dilaton. They state that this regime has no higher-dimensional
uplift; although the JT action has an approximate dimensional-reduction origin,
they treat this counterexample regime as an exact two-dimensional toy model
and caution that it is not strong evidence against the original QFC. These
theory- and regime-specific findings establish no universal QFC theorem for
arbitrary higher-curvature effective gravity. The linearized horizon model
discussed here defines no outside entropy, generalized-entropy functional, or
entropy shape derivative; it neither assumes nor derives QNEC or QFC.

## Statement references

[[post-tgrx-linearized-horizon-model]]

[Bousso, Fisher, Koeller, Leichenauer and Wall, Proof of the Quantum Null Energy Condition](https://arxiv.org/pdf/1509.02542)

[Bousso, Fisher, Leichenauer and Wall, A Quantum Focussing Conjecture](https://arxiv.org/pdf/1506.02669)

[Fu, Koeller and Marolf, Violating the Quantum Focusing Conjecture and Quantum Covariant Entropy Bound in d ≥ 5 dimensions](https://arxiv.org/pdf/1705.03161)

[Franken et al., Tests of restricted quantum focusing and a new CFT bound](https://arxiv.org/pdf/2510.13961)

## Remarks

The QNEC and QFC claims above are reported source formulations, not local
proof premises. The higher-curvature result is limited to the models and
dimensions in its cited analysis; its discussion also distinguishes the
pointwise conjecture from possible effective-field-theory resolution
conditions.
