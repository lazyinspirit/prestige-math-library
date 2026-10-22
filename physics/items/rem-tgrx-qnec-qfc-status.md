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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Use natural units $c=\hbar=k_B=1$. For each source formulation below,
supply its own Hausdorff, second-countable smooth $d$-manifold $M$ without
boundary, $d\ge2$, with a smooth symmetric nondegenerate metric $g$ of
signature $(-,+,\ldots,+)$ and a smooth timelike field $T$ fixing the future
cone. A nonzero tangent vector $v$ is timelike, null or spacelike according
as $g(v,v)<0$, $=0$ or $>0$; it is causal in the first two cases and future
directed when $g(v,T)<0$. Use the metric-compatible torsion-free connection
$\nabla$, whose coordinate coefficients are
$\Gamma^a{}_{bc}=\frac12g^{ae}(\partial_b g_{ec}+\partial_c g_{eb}-\partial_e g_{bc})$,
with repeated indices summed from $0$ to $d-1$ and $(g^{ab})=(g_{ab})^{-1}$.
A causal curve is a continuous map from a real interval into $M$, locally
piecewise $C^1$, with nonzero consistently directed causal tangent on each
smooth piece. It is inextendible if its image admits no continuation as such
a curve at either end. A Cauchy surface here is a smooth embedded spacelike
hypersurface met in exactly one point by every inextendible causal curve;
spacelike means that the induced metric is positive definite. A smooth
embedded codimension-two cut splits such a surface when the complement is
the disjoint union of two open sides whose common boundary is the cut.
Supply a quantum-field state and its stress expectation $\langle T_{ab}\rangle$
on the modeled domain, with the source's renormalization and differentiability
conditions. These data describe the cited setups, independently of the
four-dimensional linearized horizon model.

For the cited quantum null energy condition (QNEC), let $\Sigma\subset M$
be such a cut and let $p\in\Sigma$. Let $\mathcal N$ be a smooth null
hypersurface orthogonal to $\Sigma$ near $p$, with smooth future-directed null
generators labelled by transverse coordinates $y$. On each generator use an
affine parameter $\lambda$ increasing toward the future with $[\lambda]=L$,
and normalize its tangent by $k^a=(d/d\lambda)^a$. Deforming $\Sigma$ to
$\Sigma[\lambda(y)]$ moves each generator by its indicated affine amount.
Restrict to a smooth embedded null hypersurface segment before generator
intersections: the radical
$L_p:=\{v\in T_p\mathcal N:g(v,w)=0\text{ for all }w\in T_p\mathcal N\}$
is one-dimensional, is spanned by $k_p$, and $\nabla_k k=0$. For $d>2$, in transported cut coordinates put
$B_{AB}:=g(\nabla_{\partial_{y^A}}k,\partial_{y^B})$,
$\theta:=q^{AB}B_{AB}$ and $\sigma_{AB}:=B_{AB}-\theta q_{AB}/(d-2)$,
where $q$ is the induced positive cut metric. These define the classical
expansion and shear; there are no transverse expansion or shear components
when $d=2$. The source's
$S_{\mathrm{out}}[\lambda(y)]$ is the von Neumann entropy of the quantum-field
state restricted to one side of the deformed cut, equivalently to the
corresponding side of a Cauchy surface; the entropy itself may be divergent,
while the source-defined derivatives in the inequality are finite. With a
regulator admitting a positive trace-one reduced density operator $\rho$, the
von Neumann entropy is $-\operatorname{Tr}(\rho\log\rho)$, with
$0\log0=0$; continuum entropy and its derivatives use the cited limiting
prescription, not an assumed finite unregulated density matrix. In §2,
equation (2.2), the authors call the pointwise formulation the “general
conjecture”; its local geometric condition is that the classical expansion
and shear vanish at $p$. For $d>2$ and a transverse patch of area $A$ about $p$,
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
free-scalar $D=2$ inequality
$\langle T_{2D}\rangle\ge(2\pi)^{-1}S''_{2D}$ by dimensional reduction
and strong subadditivity, with no shrinking transverse-area limit;
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
Einstein-gravity formulation, use the geometry above and let $\sigma$ be a
smooth spacelike
codimension-two cut splitting a Cauchy surface, and let $\mathcal N$ be the
smooth null hypersurface generated by its orthogonal future-directed null
geodesics. Label the generators by local transverse coordinates
$y=(y^1,\ldots,y^{d-2})$ in $d$ spacetime dimensions. On each generator choose
an affine parameter $\lambda$ increasing to the future, with $\lambda=0$ at
$\sigma$, $[\lambda]=L$, and tangent $k=(d/d\lambda)$. A smooth
nonnegative function
$V(y)$ defines a cut $\sigma[V]$ by its intersection with generator $y$ at
$\lambda=V(y)$; restrict to profiles for which this is a well-defined smooth
cut that still splits a Cauchy surface. Let $q_{AB}[V]$ be the positive
induced metric on $\sigma[V]$ in the coordinates $y$, set
$h[V](y):=\det(q_{AB}[V](y))$, and define its area by
$$A[V]:=\int_{\sigma[V]}\sqrt{h[V](y)}\,d^{d-2}y.$$
For $d=2$, a cut is discrete, the empty metric determinant is $1$, and
this integral is counting measure; functional derivatives are derivatives
with respect to the individual cut-point displacements. The JT formulation
below uses a different gravitational entropy term and normalization.
Let $S_{\mathrm{out}}[V]$ be the von Neumann entropy of the quantum-field state
restricted to one side of $\sigma[V]$. It may be ultraviolet divergent by
itself. The cited source defines the generalized entropy by the following
combination and assumes its renormalized value is finite and cutoff-independent:
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
theory, in regions where the total dilaton is positive and the matter state
satisfies the source's two-dimensional QNEC. The total dilaton is the smooth
scalar $\Phi=\phi_0+\phi:M\to\mathbb R$ of that two-dimensional model,
with constant $\phi_0$; it replaces transverse area in the entropy term.
For a moving cut point $P(\lambda)$ on a future affine null geodesic,
$\lambda\in I\subset\mathbb R$, keep the other cut points fixed and use
$S_{\mathrm{gen}}=\sum_i\Phi(P_i)/(4G)+S_{\mathrm{ren}}$, where
$S_{\mathrm{ren}}$ is the source-renormalized matter entropy. Here $G>0$
and $\Phi$ are dimensionless, and the source's quantum expansion is
$\Theta(\lambda)=4G\Phi(P(\lambda))^{-1}dS_{\mathrm{gen}}/d\lambda$,
with $\Phi(P(\lambda))>0$ and the derivatives assumed to exist. Its rQFC
asserts $d\Theta/d\lambda\le0$ where $\Theta=0$; this is weaker than
requiring that inequality at every cut. The authors also construct
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
