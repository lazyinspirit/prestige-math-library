---
id: pthm-aqft-symmetry-preserving-rg-anomaly-match
kind: physics-theorem
title: "Symmetry-preserving RG anomaly matching"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-anomaly-matching-and-frontier
dependency_level: 5
deps:
  - def-aqft-exact-background-rg-flow
  - def-aqft-thooft-anomaly
  - def-aqft-global-anomaly-holonomy
dependency_roles:
  def-aqft-exact-background-rg-flow: formulation-prerequisite
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Conditional matching of the four-dimensional local perturbative anomaly class and a specified chiral determinant-line holonomy for a finite-regulator exact symmetry-preserving RG comparison with explicit Euclidean/BRST and line-connection compatibility assumptions. No continuum limit, phase exclusion, spectrum claim, or empirical result is asserted."
sources:
  references:
    - title: "Jeffrey A. Harvey, TASI 2003 Lectures on Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0509097"
      locator: "§2.3, 't Hooft matching conditions: an unbroken global symmetry's anomaly must be reproduced in the infrared; the argument uses background gauging and spectator fermions."
    - title: "David Tong, Gauge Theory, full lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§3.5, printed pp. 176–178, for the spectator-fermion anomaly-matching argument and equality of UV/IR anomaly coefficients when the symmetry survives."
verification:
  precheck: pending
---

## Statement

Use natural units $c=\hbar=1$. Fix a finite-regulator model on a compact, closed, oriented Riemannian spin four-manifold $M$, with its actual boundary-condition data, fields and jets, regulator, measure, and admissible local counterterms at every scale. Let $G$ be a compact internal global symmetry group with fixed global form, a smooth principal right $G$-bundle $P\to M$, background connection $A$, and unitary finite-dimensional representation $R$. The admitted background groupoid has these nondynamical connections as objects and the selected background gauge transformations as arrows; the symmetry is exact and unbroken along the flow and is not a dynamical gauge redundancy. Fix a smooth family of Fredholm chiral Dirac operators $D^+_{A,R}$ and its inverse determinant line with the Quillen metric and Bismut–Freed unitary connection, as in the determinant-line definition. On each background patch, the finite-regulator partition functional at scale $\mu$ is the local scalar representative of a section of that line, and its transition functions and endpoint gauge actions are retained.

Also fix a Minkowski coordinate region $U\subseteq\mathbb R^{1,3}$ with its orientation, spin structure, boundary-term convention, fields and jet domains, and identify it with the Euclidean local-variation problem by a specified Wick-rotation map. Use its background-only finite-jet BRST complex, with nilpotent differential $s$ and horizontal derivative $d_H$; its local anomaly class is the relative cohomology class of ghost-number-one horizontal four-form cocycles modulo $d_H$ and the declared four-dimensional background counterterms. Write $\mathcal C_{\mathrm{loc}}$ for the local density whose integral is the counterterm $C$. Assume an exact symmetry-preserving Wilsonian comparison from $\mu_{\mathrm{UV}}$ to $\mu_{\mathrm{IR}}$ retains all remaining low-energy and topological sectors and satisfies $W_{\mu_{\mathrm{UV}}}[A]-W_{\mu_{\mathrm{IR}}}[A]=C[A]$ on each common local branch, for one admissible, single-valued, dimensionless local counterterm. For the determinant-line comparison, take $C$ in the unitary phase convention so $e^{-C[A]}\in U(1)$. Assume the line-valued comparison induces a unitary isomorphism of the endpoint determinant-line families which, in local frames, is multiplication by the phase $e^{-C[A]}$ and which preserves the specified unitary connections and endpoint gauge identifications. Then the ultraviolet and complete infrared four-dimensional local BRST anomaly classes agree modulo the declared local counterterms, and the determinant-line holonomies agree on every admitted loop of background connections modulo gauge transformations. This is a conditional matching constraint only; it determines no infrared spectrum or gap and asserts no continuum limit or empirical result.

## Statement references

[Harvey, *TASI 2003 Lectures on Anomalies*, §2.3](https://arxiv.org/pdf/hep-th/0509097)

[Tong, *Gauge Theory*, §3.5](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf)

## Facts & Assumptions

**Given:** The finite-regulator model tuple on the compact spin four-manifold, the bundle and unitary representation, Fredholm Dirac family and its specified inverse determinant line, the common background groupoid, nonzero local partition representatives, the local BRST/Wick-rotation identification, and the exact line-compatible RG comparison stated above.

[F1] [[def-aqft-thooft-anomaly]]: the current definition is the infinitesimal local class $[a_4]\in H^{1,4}(s\mid d_H)$ of the background finite-jet BRST complex, modulo the selected four-dimensional counterterms and total derivatives. Its current Step 1 record is ready and hash-current; the separate run-level dependency check flags its declared level $0$ against computed level $3$.

[F2] [[def-aqft-global-anomaly-holonomy]]: the current definition fixes the inverse determinant line of a smooth Fredholm chiral Dirac family on a compact spin manifold, with its Quillen metric and Bismut–Freed connection; a loop is a path of connections followed by its endpoint gauge identification, whose unitary scalar is the holonomy. Its current owner Step 1 record is escalated and stale against the current item hash. The recorded reason names an earlier missing readiness record for [F1]; [F1] now has a ready current record, but the owner escalation must remain untouched.

[F3] [[def-aqft-exact-background-rg-flow]]: the current local definition fixes the finite-regulator model and scale data, the background groupoid and exact symmetry action, the Wilsonian shell comparison, all retained infrared sectors, and the single-valued local functional $C$ relating the two background responses.

[A1] Every RG step acts equivariantly on the same allowed background groupoid and uses the selected model's declared global $G$-action, field representations, regulator, measure, and boundary conditions; no transformation is removed from the anomaly test.

[A2] The selected model provides the stated Wick-rotation identification, so its infinitesimal Euclidean variations and counterterms are represented in the four-dimensional BRST complex of [F1]. This is model data; the theorem does not assert such an identification for arbitrary QFTs.

[A3] The exact comparison supplies the unitary, connection-preserving determinant-line isomorphism in the Statement, including its action on endpoint gauge arrows. This is an explicit prerequisite and is not inferred from scalar partition equality alone.

## Proof

1.1 Differentiate $W_{\mu_{\mathrm{UV}}}-W_{\mu_{\mathrm{IR}}}=C$ along an infinitesimal background gauge transformation in the identified local BRST complex. The local anomaly representatives then differ by $s\mathcal C_{\mathrm{loc}}+d_Hq_3$ for the boundary-term convention $q_3$ fixed in [F1]. This is zero in $H^{1,4}(s\mid d_H)$ modulo the admissible counterterms, so the local anomaly classes agree. [F1, F3, A1, A2, algebra]

2.1 Let an admitted loop be represented by a path of connections from $A_0$ to $A_1$ and the closing gauge arrow $u:A_1\to A_0$. By [A3], parallel transport along the path and the endpoint gauge identification both intertwine with the determinant-line isomorphism from the ultraviolet to the infrared. The two loop endomorphisms are therefore conjugate by that line isomorphism. Because each line is one-dimensional, conjugation leaves its scalar unchanged, so the holonomies agree under [F2]. This proves the global part without inferring it from the local BRST class. [F2, A3, algebra] ∎
