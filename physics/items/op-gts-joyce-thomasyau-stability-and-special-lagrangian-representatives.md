---
id: op-gts-joyce-thomasyau-stability-and-special-lagrangian-representatives
kind: open-problem
title: Joyce and Thomas–Yau stability versus special-Lagrangian representatives
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-bridgeland-stability-condition-with-support-property
  - def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms
  - def-gts-special-lagrangian-with-phase
dependency_roles:
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms: mathematical-premise
  def-gts-special-lagrangian-with-phase: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jacopo Stoppa, Special Lagrangian Sections and Stability Conditions on Threefolds
      url: https://arxiv.org/pdf/2508.17709v1
      locator: §1, Conjecture 1.1, Remarks 1.2–1.3 and Theorem 1.4; partial summary, not a construction of the singular enlargement
    - title: Dominic Joyce, Conjectures on Bridgeland stability for Fukaya categories of Calabi–Yau manifolds, special Lagrangians, and Lagrangian mean curvature flow
      url: https://arxiv.org/pdf/1401.4949v2
      locator: §3.2, Conjecture 3.2(a)–(c), alternative (c) prime and Remark 3.3(i)–(ii); the strongest representative clause is explicitly labelled dubious
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Open problem

Formulate and resolve the following Joyce–Thomas–Yau construction and correspondence problem for the source almost-Calabi–Yau setting, including its proposed immersed and singular branes. Let $M$ be a complex manifold of complex dimension $n=\dim_{\mathbb C}M$, let $J$ be its integrable complex structure, let $\omega$ be a Kähler form (a real closed positive $(1,1)$-form), and let $\Omega$ be a nowhere-vanishing holomorphic $n$-form. The compact case and any noncompact case must have their actual analytic regime specified; “suitably convex at infinity” alone is not a definition or a construction theorem.

The set/map notation below is an explicit formulation of the missing construction obligations, not a claim that Joyce or Stoppa supplies a completed singular-brane model. The missing construction data are an essentially small triangulated enlarged Fukaya category $\mathcal D$, an explicitly defined set $\mathscr B$ of geometric branes, a specified geometric equivalence relation $\sim$ on $\mathscr B$, and a realization map
$$\rho:\mathscr B/{\sim}\longrightarrow\operatorname{Iso}(\mathcal D).$$
Here $\operatorname{Iso}(\mathcal D)$ is the set of isomorphism classes in $\mathcal D$. The brane model must state its immersed and singular objects, orientation, grading, local-system and obstruction data, its geometric equivalence relation, and the coherent operations that make its realization in $\mathcal D$ meaningful. Geometric equivalence is not defined to mean equality of the images under $\rho$: that would make uniqueness of representatives tautological. These constructions, including their analytic prerequisites, are part of the problem; the currently recorded blocked Fukaya interface does not supply them.

Specify a finite-rank free abelian charge group $\Gamma$, a norm on $\Gamma_{\mathbb R}$, and a homomorphism $v:K(\mathcal D)\to\Gamma$, where $K(\mathcal D)$ is the triangulated Grothendieck group. Seek a natural stability condition $\sigma=(Z,\mathcal P)$ on this category in the stated Bridgeland sense, with $Z:\Gamma\to\mathbb C$ a group homomorphism and $\mathcal P$ its actual slicing. Require the central charge to be the period charge
$$Z(v(E))=\int_{\operatorname{cl}(E)}\Omega,$$
where $v:K(\mathcal D)\to\Gamma$ is the chosen numerical charge map and $\operatorname{cl}:K(\mathcal D)\to H_n(M;\mathbb Z)$ is a specified compatible homology-class map; the integration cycle, support and convergence must be defined in the chosen regime. Semistable of phase $\phi\in\mathbb R$ means a nonzero object of $\mathcal P(\phi)$, so its central charge is $m(E)e^{i\pi\phi}$ with $m(E)>0$. A central charge without a slicing does not specify semistability.

The geometric construction must also give precise subsets $\mathscr{SL}_\phi\subseteq\mathscr B/{\sim}$ of weak special-Lagrangian branes. On an oriented embedded smooth representative $i:L\hookrightarrow M$ the required condition is
$$i^*\omega=0,\qquad \operatorname{Im}(e^{-i\pi\phi}i^*\Omega)=0,\qquad \operatorname{Re}(e^{-i\pi\phi}i^*\Omega)>0.$$
For immersed or singular representatives the regularity, multiplicity, orientation, admissible singularities, test objects and weak meaning of this equation must be constructed and stated explicitly. The embedded smooth definition does not supply these extensions, and no unspecified “weak” predicate is assumed here.

Does such a natural construction exist for the proposed source regimes with both of the following properties? For every nonzero $E\in\mathcal P(\phi)$, the set
$$\{b\in\mathscr{SL}_\phi:\rho(b)=[E]\}$$
has exactly one element; conversely, every $b\in\mathscr{SL}_\phi$ realizes a nonzero object of $\mathcal P(\phi)$. This retains the strongest proposed uniqueness of geometric brane representatives and the converse, rather than restricting to embedded smooth branes or to Stoppa's toric section case. Whether that strongest uniqueness is tenable is itself part of the question: Joyce explicitly questions it. Uniqueness only of the underlying special-Lagrangian integral current is a distinct proposed replacement, not the assertion silently used here. No correspondence, category construction, singular-brane definition or logical-supplier result is claimed.

## Open problem references

[[def-gts-bridgeland-stability-condition-with-support-property]]

[[def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms]]

[[def-gts-special-lagrangian-with-phase]]

[Joyce, Conjecture 3.2 and Remark 3.3](https://arxiv.org/pdf/1401.4949v2)

[Stoppa, §1](https://arxiv.org/pdf/2508.17709v1)

## Status

Source and formulation review, 2026-11-05: Stoppa's §1 presents Conjecture 1.1 as a partial summary of Joyce's programme. It explicitly supplies a proposed stability condition $(Z,\mathcal P)$; Remark 1.2 says the immersed/singular category extension needed for the representative assertion is conjectural, and Remark 1.3 records the converse. The previously recorded question omitted the slicing and presupposed unspecified weak-brane and equivalence conventions. The formulation above makes those missing constructions explicit parts of the open problem and spells out the desired representative and converse conditions; it does not certify their existence.

The primary Joyce source is more cautious than the partial summary. Conjecture 3.2(a),(b) asks for the period stability condition and the special-Lagrangian-to-semistable direction. Part (c), the strongest representative assertion retained above, is labelled “Dubious, probably false as stated.” Its alternative (c)' is also labelled dubious. Remark 3.3(i) explains why adding immersed/singular geometric objects matters even if the enlarged categories are equivalent; Remark 3.3(ii) notes the multiple-cover ambiguity in brane uniqueness and suggests uniqueness of the induced special-Lagrangian integral current as a possible better statement. Thus this item records an unresolved construction/formulation programme and its strongest questioned variant, not an unqualified established conjectural theorem or a proved correspondence. The current-uniqueness alternative is not identified with geometric brane uniqueness.

Stoppa's Theorem 1.4 supplies a conditional result for specified line bundles on smooth projective toric threefolds, under its divisorial inequalities, negative-slope and numerical hypotheses, generic polarization and simultaneous large-volume/large-line-bundle scaling. It does not settle the general enlarged-category problem or its uniqueness issue. This review read the cited source passages, not an exhaustive literature search through the review date; no claim that all later partial results or possible resolutions were checked is made.

The existing embedded smooth special-Lagrangian definition supplies only its stated smooth predicate. The multi-object Fukaya carrier remains a blocked construction interface, with compactness, transversality or virtual regularization, coherent gluing, convergence, units and category-level composition unresolved. Keeping these as construction obligations is essential to the open formulation. This item remains a draft open problem with no proof or logical-supplier status.
