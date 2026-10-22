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
  inequalities and the quantum focusing conjecture. It establishes no
  entropy inequality, universal theorem, experimental result, or model
  applicability claim.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Raphael Bousso, Zachary Fisher, Jason Koeller, Stefan Leichenauer and Aron C. Wall, Proof of the Quantum Null Energy Condition, arXiv:1509.02542v2"
      url: "https://arxiv.org/pdf/1509.02542"
      locator: "Complete 32-page article; abstract, §2 and §§4.5–5, for the entropy second-variation statement and proof scope: free or superrenormalizable bosonic fields on stationary null hypersurfaces, with its specified field-theory assumptions."
    - title: "Raphael Bousso, Zachary Fisher, Stefan Leichenauer and Aron C. Wall, A Quantum Focussing Conjecture, arXiv:1506.02669v1"
      url: "https://arxiv.org/pdf/1506.02669"
      locator: "Complete 45-page article; §3.3, equation (3.10), and §5.2, for the proposed functional monotonicity and its distinction from special QNEC proofs."
    - title: "Zicao Fu, Jason Koeller and Donald Marolf, Violating the Quantum Focusing Conjecture and Quantum Covariant Entropy Bound in d ≥ 5 dimensions, arXiv:1705.03161v2"
      url: "https://arxiv.org/pdf/1705.03161"
      locator: "Complete 14-page article; §2, equations (2.17)–(2.19), and §4, for weak-curvature Einstein-Hilbert-Gauss-Bonnet counterexamples to unrestricted QFC in spacetime dimension d ≥ 5 and the EFT-resolution caveat."
    - title: "Victor Franken, Sami Kaya, François Rondeau, Arvin Shahbazi-Moghaddam and Patrick Tran, Tests of restricted quantum focusing and a new CFT bound, arXiv:2510.13961v3"
      url: "https://arxiv.org/pdf/2510.13961"
      locator: "Complete 57-page article; abstract and §1, plus §3, especially pp. 20–22, for the class of two-dimensional JT toy models, the regime-specific QFC counterexamples, and the authors' caution against interpreting them as strong evidence against the original conjecture."
verification:
  precheck: n/a
---

## Statement

Use natural units $c=\hbar=k_B=1$. For the cited quantum null energy condition
(QNEC), let $\Sigma$ be a smooth spacelike codimension-two cut splitting a
Cauchy surface, and let $p\in\Sigma$. Let $\mathcal N$ be a smooth null
hypersurface orthogonal to $\Sigma$ near $p$, with smooth future-directed null
generators labelled by transverse coordinates $y$. On each generator use an
affine parameter $\lambda$ increasing toward the future and normalize its
tangent by $k^a=(d/d\lambda)^a$. Deforming $\Sigma$ to $\Sigma[\lambda(y)]$
moves each generator by its indicated affine amount. The source's
$S_{\mathrm{out}}[\lambda(y)]$ is the von Neumann entropy of the quantum-field
state restricted to one side of the deformed cut, equivalently to the
corresponding side of a Cauchy surface; the entropy itself may be divergent,
while the source-defined derivatives in the inequality are finite. The source
calls $\mathcal N$ stationary when its classical null expansion vanishes
everywhere. Its pointwise QNEC statement additionally requires that the
classical expansion and shear vanish at $p$. For a transverse patch of area
$A$ about $p$, $S_{\mathrm{out}}''(p)$ is the source-defined second affine
variation for that patch, with the other generators held fixed. The proved
QNEC form is
$$\langle T_{kk}(p)\rangle\ge\frac{1}{2\pi}\lim_{A\to0}\frac{S_{\mathrm{out}}''(p)}{A},\qquad \langle T_{kk}(p)\rangle:=\langle T_{ab}(p)k^ak^b\rangle.$$
The cited proof applies to free or superrenormalizable bosonic field theories
on stationary null hypersurfaces; it is not an unrestricted claim for every
state, geometry, or field theory.

For the quantum focusing conjecture (QFC), let $\sigma$ be a smooth
codimension-two initial cut orthogonal to a smooth null hypersurface
$\mathcal N$, and label its null generators by $y$. Choose an affine parameter
$\lambda$ on each generator with $\lambda=0$ at $\sigma$, increasing in the
chosen future direction. An admissible nonnegative function $V(y)$ specifies
the cut that meets generator $y$ at $\lambda=V(y)$. Let $S_{\mathrm{gen}}[V]
=S_{\mathrm{grav}}[V]+S_{\mathrm{out}}[V]$ be the specified generalized
entropy functional of the cut, where $S_{\mathrm{out}}$ is the outside-state
entropy, and let $h(y)$ be the determinant of the cut's induced transverse
metric in the chosen generator coordinates. Here $G>0$ is Newton's constant
in the stated natural units. The source-defined quantum
expansion is
$$\Theta[V;y_1]:=\frac{4G}{\sqrt{h(y_1)}}\frac{\delta S_{\mathrm{gen}}[V]}{\delta V(y_1)},$$
with $\hbar=1$. The QFC conjectures, for admissible $V$ and generator labels
$y_1,y_2$, the functional-derivative inequality
$$\frac{\delta\Theta[V;y_1]}{\delta V(y_2)}\le0,$$
understood in the source's distributional sense when the generator points
coincide. This remains a conjecture in general.

Weakly curved Einstein-Hilbert-Gauss-Bonnet models have QFC counterexamples
in spacetime dimensions $d\ge5$. The cited 2026 v3 paper proves a restricted QFC for a
class of two-dimensional Jackiw-Teitelboim (JT) toy models and reports
counterexamples to the original and stronger QFC in a regime where matter
quantum effects are comparable to the total dilaton. Its authors state that
this counterexample regime has no known higher-dimensional uplift or
dimensional-reduction interpretation, is confined to the toy model, and is
not strong evidence against the original QFC. These theory- and
regime-specific findings establish no universal QFC theorem for arbitrary
higher-curvature effective gravity. The linearized horizon model discussed
here defines no outside entropy, generalized entropy functional, or entropy
shape derivative; it neither assumes nor derives QNEC or QFC.

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
