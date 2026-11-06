---
id: post-cft-r5-compact-boson-flat-gauging-model
kind: postulate
title: Adopted compact-boson flat-gauging and rational self-duality model
status: published
origin: session
domain: physics
library: physics
dependency_level: 4
physical_scope: Restricted source-described noncompact SymTFT and two-step flat-gauging model for the idealized compact-boson CFT at dimensionless radius R>0, with a separately selected rational finite-wall normalization. No empirical assertion, rigorous continuum functional measure, or irrational absolute fusion normalization is supplied.
deps:
  - def-cft-r5-compact-boson-full-theory
  - def-cft-r5-compact-boson-charge-lattice-and-cocycle
  - def-cft-r5-topological-defect-interface-conventions
  - def-cft-r5-finite-gauging-wall-conventions
dependency_roles:
  def-cft-r5-compact-boson-full-theory: mathematical-premise
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  def-cft-r5-topological-defect-interface-conventions: formulation-prerequisite
  def-cft-r5-finite-gauging-wall-conventions: formulation-prerequisite
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Riccardo Argurio, Andrés Collinucci, Giovanni Galati, Ondrej Hulik, and Elise Paznokas, Non-Invertible T-duality at Any Radius via Non-Compact SymTFT, arXiv:2409.11822v1
      url: https://arxiv.org/pdf/2409.11822v1
      locator: Sections 3–3.1, especially equations (3.9)–(3.20), and section 4.2, equations (4.19)–(4.25) and the following normalization discussion, printed pp. 9–12 and 19–21.
      source_limit: The charge action is given up to a prefactor; the rational construction is compared only up to normalization, and the irrational normalization and Hilbert-space interpretation remain unresolved in the source.
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-06
    scope: Source-reported adopted construction and charge action in arXiv:2409.11822v1, sections 3–3.1 and 4.2 (equations 3.9–3.20 and 4.19–4.25). The rational finite-wall normalization is an adopted convention, not a source-proved scalar match. No continuum-measure construction, irrational absolute normalization, empirical validation, or full-paper review is claimed.
    by: "Codex Root: independent scoped source and formulation check"
---

## Postulate

Fix the idealized compact-boson full-local-CFT package $C_R$ at dimensionless radius $R>0$, with local Ginsparg radius $r=R/\sqrt2$ and genuine primary labels $V_{n,w}$, $n,w\in\mathbb Z$. Adopt the source's noncompact SymTFT and two-step flat-gauging construction as restricted physical model data. First gauge $U(1)_w$ with flat connections, producing the noncompact intermediate scalar theory. Then gauge the period-$2\pi/R$ subgroup $\mathbb Z\subset\mathbb R$ of its momentum-shift symmetry. This supplies a topological radius-changing interface $I_R:C_R\to C_{1/R}$. Compose it with the selected invertible radius-duality interface $U_{1/R\to R}:C_{1/R}\to C_R$ to form $N_R=U_{1/R\to R}\circ I_R:C_R\to C_R$.

Adopt the source-reported charge-label action, up to a nonzero overall normalization,
$$N_R:V_{n,w}\longmapsto\begin{cases}V_{R^2w,\,n/R^2},&R^2w\in\mathbb Z\text{ and }n/R^2\in\mathbb Z,\\ \text{a non-genuine defect endpoint},&\text{otherwise}.\end{cases}$$
A non-genuine endpoint belongs to an endpoint sector of the interface data and is not a genuine bulk local-field label. This assumption supplies the construction and its label action; it does not supply a continuum functional-measure foundation or an absolute normalization at irrational $R^2$.

For reduced rational $R^2=p/q$, with positive coprime integers $p,q$, adopt the source's anomaly-free finite subgroup gauging $G_R\cong\mathbb Z_p\times\mathbb Z_q$ and select an invertible self-duality interface $U_R:C_R/G_R\to C_R$. Under this identification, the specified gauging symmetry lines $L_{a,b}$ become the lines $g_{a,b}$ acting by
$$g_{a,b}V_{n,w}=e^{2\pi i(an/p+bw/q)}V_{n,w},\qquad 0\le a<p,\quad 0\le b<q.$$
Use the untwisted endpoint-framed finite gauging wall $W_{G_R}:C_R\to C_R/G_R$ with the finite-groupoid-cardinality convention: hold both endpoint trivializations fixed, weight a framed flat-bundle sector by $1/|\operatorname{Aut}|$, and include no extra division by $|G_R|$ at the endpoints. Define the rationally normalized defect to be exactly $N_R=U_R\circ W_{G_R}$, with no additional scalar.

The two-step construction and the finite rational construction are identified here only in their source-reported charge-label action up to normalization. The exact finite-wall normalization is a selected rational model input. It is not a claim that the source proves an exact scalar match between these constructions. No continuous-gauging normalization is inferred.

## Postulate references

[[def-cft-r5-compact-boson-full-theory]]

[[def-cft-r5-compact-boson-charge-lattice-and-cocycle]]

[[def-cft-r5-topological-defect-interface-conventions]]

[[def-cft-r5-finite-gauging-wall-conventions]]

[Argurio et al., sections 3–3.1 and 4.2](https://arxiv.org/pdf/2409.11822v1)

## Scope and non-derivation

This is an explicitly adopted source-described model construction, rather than a proof that every compact-boson algebra has the required continuum gauging realization. It records no empirical measurements or tests. The source obtains the construction using functional gauge-field integrals; this item does not provide a rigorously constructed continuum measure. Its irrational absolute normalization and twisted-Hilbert-space interpretation are not asserted.

Finite semisimplicity of the rational group-line sector and pairwise non-isomorphic simplicity of its lines remain separate hypotheses of the consuming fusion theorem and example. Neither their fusion direct sum nor noninvertibility is postulated here: those are deductions requiring the finite-wall counting result, the declared line-sector hypotheses, and the genuine-field argument. No finite fusion-category structure is assumed for an irrational-radius continuous construction.
