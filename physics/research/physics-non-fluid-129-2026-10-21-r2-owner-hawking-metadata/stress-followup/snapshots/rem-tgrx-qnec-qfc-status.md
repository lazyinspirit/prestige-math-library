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

For a smooth codimension-two cut $\Sigma$ on a stationary null hypersurface,
one proved form of the quantum null energy condition (QNEC) bounds the null
stress $\langle T_{kk}\rangle:=\langle T_{ab}k^ak^b\rangle$ below by
$\hbar/(2\pi)$ times the second variation of the outside von Neumann entropy
per infinitesimal transverse area under a null deformation. The cited proof
applies to its stated free or superrenormalizable bosonic field theories on
stationary null hypersurfaces; it is not an unrestricted assertion for every
state, geometry or dimension. The quantum focusing conjecture (QFC) instead
proposes that, for a specified generalized entropy functional
$S_{\mathrm{gen}}=S_{\mathrm{grav}}+S_{\mathrm{out}}$ on a smooth null cut,
its source-defined quantum expansion
$\Theta[V;y]=(4G/\sqrt h)\,\delta S_{\mathrm{gen}}/\delta V(y)$ cannot
increase under a further forward affine deformation $V(y)$ of the cut; this
remains a conjecture in general. Weakly curved Einstein-Hilbert-Gauss-Bonnet
models have QFC counterexamples in dimensions $d\ge5$, and later tests find
QFC counterexamples only in a particular two-dimensional Jackiw-Teitelboim
toy-model regime while proving a restricted QFC for a class of such models.
Those theory- and regime-specific results supply no universal QFC theorem for
arbitrary higher-curvature effective gravity. The linearized horizon model on
this page defines no outside entropy, generalized entropy functional or
entropy shape derivative, so it neither assumes nor derives QNEC or QFC.

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
