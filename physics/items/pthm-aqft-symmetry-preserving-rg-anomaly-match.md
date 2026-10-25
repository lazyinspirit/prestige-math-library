---
id: pthm-aqft-symmetry-preserving-rg-anomaly-match
kind: physics-theorem
title: "Symmetry-preserving RG anomaly matching"
status: "published"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Use natural units $c=\hbar=1$. Assume Countable Choice: every countable family of nonempty sets admits a choice function. Fix a finite-regulator model on a compact, closed, oriented Riemannian spin four-manifold $M$, with its actual boundary-condition data, fields and jets, regulator, measure, and admissible local counterterms at every scale. Let $G$ be a compact finite-dimensional real Lie group serving as the internal global symmetry with fixed global form, let $P\to M$ be a smooth principal right $G$-bundle with supplied smooth connection $A$, let $V_R$ be a finite-dimensional Hermitian complex vector space, and let $R:G\to U(V_R)$ be a smooth group homomorphism. The admitted background groupoid has these nondynamical connections as objects and the selected background gauge transformations as arrows; the symmetry is exact and unbroken along the flow and is not a dynamical gauge redundancy. Fix a smooth family of Fredholm chiral Dirac operators $D^+_{A,R}$ and its inverse determinant line with the Quillen metric and Bismut–Freed unitary connection, with precisely the spin/Clifford, associated-bundle, induced-connection, Sobolev-domain, and admissible spectral-cut/regularization conventions of the determinant-line definition. On each background patch, the finite-regulator partition functional at scale $\mu$ is the local scalar representative of a section of that line, and its transition functions and endpoint gauge actions are retained.

Also fix a Minkowski coordinate region $U\subseteq\mathbb R^{1,3}$ with its orientation, spin structure, boundary-term convention, fields and jet domains, and identify it with the Euclidean local-variation problem by a specified Wick-rotation map. Here that map means an isomorphism between the complexified local background finite-jet algebras on the two patches, mapping the admitted background fields and horizontal forms and intertwining the horizontal derivatives and BRST differentials while preserving the declared boundary-term convention. Use the Minkowski patch's background-only finite-jet BRST complex, with nilpotent differential $s$ and horizontal derivative $d_H$; its local anomaly class is the relative cohomology class of ghost-number-one horizontal four-form cocycles modulo $d_H$ and the declared four-dimensional background counterterms. Write $\mathcal C_{\mathrm{loc}}$ for the background-only finite-jet local density whose integral on this patch is the counterterm $C$. Assume an exact symmetry-preserving Wilsonian comparison from $\mu_{\mathrm{UV}}$ to $\mu_{\mathrm{IR}}$ retains all remaining low-energy and topological sectors and satisfies $W_{\mu_{\mathrm{UV}}}[A]-W_{\mu_{\mathrm{IR}}}[A]=C[A]$ on each common local branch, for one admissible, single-valued, dimensionless local counterterm.

For the local anomaly conclusion, impose the following additional compatibility hypothesis. In the same regularization and boundary-term convention at both endpoints, the infinitesimal BRST variation of each branch $W_\mu$ is local in finite jets and is represented by the corresponding $a_{\mu,4}\in\mathcal A_{\mathrm{bg},U}^{1,4}$ used in the local-anomaly definition: $\delta_s W_\mu[A]=\int_U a_{\mu,4}$ modulo the fixed boundary term. The specified Wick-rotation map carries these Euclidean variations to that BRST complex and commutes with its differential. The representative assignment is linear on the common branches, and the local counterterm assignment is compatible with it, so replacing a branch by that branch plus $C[A]=\int_U\mathcal C_{\mathrm{loc}}$ changes its representative by $s\mathcal C_{\mathrm{loc}}+d_Hq_3$ with $\mathcal C_{\mathrm{loc}}\in\mathcal C$ and $q_3\in\mathcal N$, where the same declared counterterm and boundary spaces $\mathcal C,\mathcal N$ are used at both endpoints. This is model and regularization data; it is not inferred from the scalar partition equality alone.

For the determinant-line comparison, take $C$ in the unitary phase convention so $e^{-C[A]}\in U(1)$. Assume the line-valued comparison induces a unitary isomorphism of the endpoint determinant-line families which, in local frames, is multiplication by the phase $e^{-C[A]}$ and which preserves the specified unitary connections and endpoint gauge identifications. Then the ultraviolet and complete infrared four-dimensional local BRST anomaly classes agree modulo the declared local counterterms, and the determinant-line holonomies agree on every admitted loop of background connections modulo gauge transformations. This is a conditional matching constraint only; it determines no infrared spectrum or gap and asserts no continuum limit or empirical result.

## Statement references

[Harvey, *TASI 2003 Lectures on Anomalies*, §2.3](https://arxiv.org/pdf/hep-th/0509097)

[Tong, *Gauge Theory*, §3.5](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf)

## Facts & Assumptions

**Given:** The finite-regulator model tuple on the compact spin four-manifold, the bundle and unitary representation, Fredholm Dirac family and its specified inverse determinant line, the common background groupoid, nonzero local partition representatives, the local BRST/Wick-rotation identification, and the exact line-compatible RG comparison stated above.

[F1] [[def-aqft-thooft-anomaly]]: the current definition is the infinitesimal local class $[a_4]\in H^{1,4}_{\mathcal C,\mathcal N}(s\mid d_H)$ of the background finite-jet BRST complex, modulo the selected four-dimensional counterterms and total derivatives.

[F2] [[def-aqft-global-anomaly-holonomy]]: the current definition fixes the inverse determinant line of a smooth Fredholm chiral Dirac family on a compact spin manifold, with its Quillen metric and Bismut–Freed connection; a loop is a path of connections followed by its endpoint gauge identification, whose unitary scalar is the holonomy. Its spectral-cut/zeta/finite-part regularization is supplied admissible analytic data. The displayed line convention is retained at both RG endpoints: if one uses the dual line instead, both holonomy scalars are inverted, and the forward comparison becomes $(F^{-1})^*$ with local multiplier $e^{C}$ if the original comparison $F$ multiplies by $e^{-C}$, so equality remains equality; no undualized exponentiated-$\xi$ formula is used.

[F3] [[def-aqft-exact-background-rg-flow]]: the current local definition fixes the finite-regulator model and scale data, the background groupoid and exact symmetry action, the Wilsonian shell comparison, all retained infrared sectors, and the single-valued local functional $C$ relating the two background responses.

[A1] Every RG step acts equivariantly on the same allowed background groupoid and uses the selected model's declared global $G$-action, field representations, regulator, measure, and boundary conditions; no transformation is removed from the anomaly test.

[A2] The selected model provides the stated Wick-rotation identification, so its infinitesimal Euclidean variations and counterterms are represented in the four-dimensional BRST complex of [F1]. This is model data; the theorem does not assert such an identification for arbitrary QFTs.

[A3] The exact comparison supplies the unitary, connection-preserving determinant-line isomorphism in the Statement, including its action on endpoint gauge arrows. This is an explicit prerequisite and is not inferred from scalar partition equality alone.

[A4] In the common regularization, branch, Wick-rotation map, and boundary convention of the Statement, the local anomaly representatives at the two endpoints are the finite-jet BRST variation densities of their respective $W_\mu$ branches, and the same representative assignment sends the local counterterm $C=\int_U\mathcal C_{\mathrm{loc}}$ to $s\mathcal C_{\mathrm{loc}}+d_Hq_3$ with $\mathcal C_{\mathrm{loc}}\in\mathcal C$ and $q_3\in\mathcal N$ in the common declared spaces. This local-density compatibility is an extra hypothesis; equality of scalar partition functionals by itself does not identify their anomaly representatives.

## Proof

1.1 By the common branchwise local BRST-variation assignment in [A4], applying the same infinitesimal background variation to $W_{\mu_{\mathrm{UV}}}-W_{\mu_{\mathrm{IR}}}=C$ identifies the difference of the endpoint representatives with $s\mathcal C_{\mathrm{loc}}+d_Hq_3$ in the BRST complex of [F1]. This is zero in $H^{1,4}_{\mathcal C,\mathcal N}(s\mid d_H)$ modulo the admissible counterterms, so the local anomaly classes agree. The scalar identity is used only together with the explicit Wick-rotation and local-density hypotheses [A2, A4]. [F1, F3, A1, A2, A4, algebra]

2.1 Let an admitted loop be represented by a path of connections from $A_0$ to $A_1$ and the closing gauge arrow $v:A_1\to A_0$. Equivalently, the forward arrow of [F2] is $u=v^{-1}:A_0\to A_1$ and its inverse induced line map is $v_*=u_*^{-1}$. By [A3], parallel transport along the path and the endpoint gauge identification both intertwine with the determinant-line isomorphism from the ultraviolet to the infrared. The two loop endomorphisms are therefore conjugate by that line isomorphism. Because each line is one-dimensional, conjugation leaves its scalar unchanged, so the holonomies agree under [F2]. This proves the global part without inferring it from the local BRST class. [F2, A3, algebra] ∎
