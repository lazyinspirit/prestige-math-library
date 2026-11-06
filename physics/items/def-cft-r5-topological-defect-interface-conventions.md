---
id: def-cft-r5-topological-defect-interface-conventions
kind: definition
title: Topological defects, interfaces, orientation, and fusion conventions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
physical_scope: Operational conventions for topological lines and interfaces in the idealized two-dimensional compact-boson CFT.
deps:
  - def-cft-r5-full-local-cft-data
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Riccardo Argurio et al., Non-Invertible T-duality at Any Radius via Non-Compact SymTFT, arXiv:2409.11822v1
      url: https://arxiv.org/pdf/2409.11822v1
      locator: Sections 2–4, especially §3.1 and §4.2, pp. 7–21.
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: §8.7, radius duality.
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
---

## Definition

Use the full-local-CFT data package cited below: a worldsheet is an oriented smooth Riemann surface with dimensionless complex charts; each theory $C$ supplies a common field domain $\mathcal D_C$, a complex field-label space $\mathcal F_C$, a state-field bijection, two commuting Virasoro actions, and convergent local-field vacuum correlators. Here a stress tensor means the weak field with modes $L_n$, respectively $\bar L_n$, so locally $T_C(z)=\sum_{n\in\mathbb Z}L_nz^{-n-2}$ and $\bar T_C(\bar z)=\sum_{n\in\mathbb Z}\bar L_n\bar z^{-n-2}$ in weak matrix coefficients on the declared domain. Existence and convergence of these stress-field representatives are required model data. For spin packages also retain the specified spin structure, field parity and spin-bundle covariance of the bulk supplier. The notation $C_R$ labels the bosonic compact-boson package at positive dimensionless radius $R$.

An **interface data package** from $C$ to $C'$ consists of a smooth oriented embedded curve $\ell$ separating their two labelled regions, together with the following additional data. For every finite network $\Gamma$ of such curves meeting at finitely many junctions, supply a complex vector space $J_v$ of labels at each junction $v$. For $n$ ordered bulk insertions let $X_\Gamma$ be the open subset of $\Sigma^n$ consisting of pairwise distinct points off $\Gamma$, with each point in its prescribed theory region. In coordinate charts and local trivializations of the declared field bundles, supply multilinear correlators
$$K_\Gamma:\left(\bigotimes_{i=1}^n\mathcal F_{C_i}\right)\otimes\left(\bigotimes_{v}J_v\right)\longrightarrow\mathcal D'(X_\Gamma;\mathbb C).$$
Here $\mathcal D'(X;\mathbb C)$ is the space of continuous complex linear functionals on compactly supported smooth test densities on $X$, with its usual test-function topology. On overlapping charts, require these local distributions to transform by the declared field-bundle transition maps (including the specified spin-bundle maps in a spin package), so they define distributional sections globally. Require smooth representatives away from collisions and the network, coordinate covariance as in the bulk package, and reduction to its vacuum correlators when $\Gamma$ is absent. Products and changes of bulk OPE channel must agree on the declared convergence domains. If endpoint sectors are used, supply their complex label spaces and correlators by the same rule, with the endpoint position marked; a **genuine local field** is a label in $\mathcal F_C$ with no incident line, whereas a **non-genuine endpoint** has an incident line and is not a label in that bulk space.

The **local gluing data** are specified linear relations between one-sided boundary values of these correlators. More precisely, in every smooth collar $(-\epsilon,\epsilon)\times J$ of a regular segment, with $\ell=\{0\}\times J$ and the remaining insertions separated from the collar, require the stated one-sided limits as distributions on $J$ times the remaining configuration space to exist; specify the linear subspace of the product of those distribution spaces to which the pair of limits must belong. This requirement applies in particular to a stress insertion. It is a hypothesis on the supplied correlators; an arbitrary bulk distribution need not have a boundary trace. The relations and correlators must agree on overlapping collars. No smoothness across the line or restriction of an arbitrary distribution is presumed.

An interface is **topological** when both one-sided stress traces agree, separately for $T$ and $\bar T$ in the same local chart, and $K_{\phi_t\Gamma}=K_\Gamma$ on their common bulk configuration domain for every smooth ambient isotopy $\phi_t$, $0\le t\le1$, fixing neighbourhoods of the bulk insertions and junctions and preserving region labels and, for spin data, the chosen lift to the spin bundle. An ambient isotopy is a smooth family of diffeomorphisms with $\phi_0=\mathrm{id}$; junction labels are transported along it. Equality is equality of distributions for every choice of field and junction labels. An **endodefect** has $C'=C$. Orientation together with the worldsheet orientation fixes the source and target sides; reversing a line exchanges them and is denoted $\bar D$.

For fusion, require specified bilinear sewing operations on junction labels and correlators, with identity junctions and associative composition. For composable parallel interfaces $D:C\to C'$ and $E:C'\to C''$, the model must supply an interface $E\circ D$ and identify its correlators with the weak distributional limit of the parallel-line correlators as the intervening collar width tends to zero, for all bulk tests supported away from the collar. Require the result to be independent of collar and compatible with successive sewings; these are adopted existence and coherence conditions, not conclusions from bulk CFT axioms. Write $D\otimes E$ for this spatially ordered fusion (first $D$, then $E$), and $\mathbf1_C$ for the removable identity line. A **junction isomorphism** is a pair of junction labels whose sewn composites are the identity junctions and which give identical correlators after the corresponding local replacements. Equalities of lines below mean such isomorphisms. A line is **invertible** if some line is a fusion inverse in both orders; it is **noninvertible** otherwise. In the unitary model, orientation reversal is assumed to supply the adjoint line.

Local sewing also includes transport past an invertible line: the data must supply linear maps $t_D:\mathcal F_C\to\mathcal F_{C'}$ compatible with bulk correlators, identity transport, and $t_{E\circ D}=t_Et_D$ whenever the interfaces are invertible, with junction-isomorphic interfaces giving the same transport. Thus a two-sided inverse $E$ gives $t_Et_D=\mathrm{id}$ and $t_Dt_E=\mathrm{id}$; invertible lines act bijectively on genuine local fields. This compatibility is an explicit part of the interface model. A proposed line sending a genuine field only to a non-genuine endpoint cannot satisfy it and be invertible.

An interface $I_R:C_R\to C_{1/R}$ and an endodefect of $C_R$ are different objects. Here $U_{1/R\to R}:C_{1/R}\to C_R$ denotes the hypothesized invertible topological interface implementing the standard radius duality between the reciprocal-radius compact-boson CFTs; invertibility means that its orientation-reversed inverse fuses with it to the identity interface in both orders. This notation does not assert that a particular construction of $U_{1/R\to R}$ exists.

$$C_R \xrightarrow{I_R} C_{1/R} \xrightarrow{U_{1/R\to R}} C_R.$$

```latex
\begin{tikzcd}[column sep=large]
C_R \arrow[r,"I_R"] & C_{1/R} \arrow[r,"U_{1/R\to R}"] & C_R
\end{tikzcd}
```

Arrows indicate interfaces and composition is read from left to right. The diagram records domains and codomains only; it does not establish topologicality or fusion rules.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[Argurio et al., §§2–4](https://arxiv.org/pdf/2409.11822v1)

[Ginsparg, §8.7](https://arxiv.org/pdf/hep-th/9108028v1)

## Remarks

This is a chosen operational interface-data formulation of the source conventions, not a reconstruction theorem for a continuum CFT. The trace, sewing, and transport clauses are additional model conditions; the cited bulk data package alone does not supply them. This definition does not assert that any particular line satisfying a charge-label formula exists; that is a separate model input or theorem.

