---
id: thm-critical-thimbles-split-generate-the-stopped-category
kind: theorem
title: Critical thimbles split-generate the stopped category in the specified four-dimensional model
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 6
deps:
  - def-stopped-fukaya-category-algebraic-conventions
  - lem-finite-dg-y-oneda-and-perfect-hull
  - lem-finite-exact-stopped-floer-history-and-localization-model
  - thm-critical-thimble-path-slide-evaluation-triangle
  - lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse
  - lem-critical-bar-clock-history-correction-has-counted-primitive
dependency_roles:
  def-stopped-fukaya-category-algebraic-conventions: mathematical-premise
  lem-finite-dg-y-oneda-and-perfect-hull: mathematical-premise
  lem-finite-exact-stopped-floer-history-and-localization-model: mathematical-premise
  thm-critical-thimble-path-slide-evaluation-triangle: mathematical-premise
  lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse: mathematical-premise
  lem-critical-bar-clock-history-correction-has-counted-primitive: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lectures 7 and 10, twisted objects and wrapped-category setup; its separate generation examples are not substituted for this all-branes theorem.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: Theorems 1.9--1.10 and Corollary 1.14 with its §7.3 proof; those statements have distinct sectorial/Fukaya--Seidel hypotheses and do not imply this custom four-block claim.
    - title: Mohammed Abouzaid, A geometric criterion for generating the Fukaya category
      url: https://arxiv.org/pdf/1001.4593v2
      locator: Theorem 1.1 and proof; its symplectic-cohomology unit-image hypothesis is not established here and is not used as a premise.
verification:
  precheck: pending
---

## Statement

For every datum in the generation subclass, with exactly the base core stop $S$ and all finite critical thimbles $\Delta_1,\ldots,\Delta_m$, the idempotent-complete pretriangulated stopped wrapped category of all finite-type exact graded relative-Spin conical surfaces with finite-rank flat complex systems equals $\operatorname{thick}\{\Delta_1,\ldots,\Delta_m\}$. Finite disconnected objects are included componentwise. The proof must construct the actual finite critical-bar evaluation for every object, use the full co-unit/history nullhomotopy to kill the remainder after allowed wrapping, and give the fully faithful perfect-module/Yoneda comparison. The claim is not disk-only, finite-probe-only, right-orthogonality-only, or numerical generation; arbitrary extra stops are outside its scope.

The finite-object Yoneda implication is verified conditionally below. The all-object evaluation, counted co-unit primitive, and compatible strict DG enhancement are not currently established, so the generation theorem is escalated and is not asserted as proved.

## Statement references

[[def-stopped-fukaya-category-algebraic-conventions]]

[[lem-finite-dg-y-oneda-and-perfect-hull]]

[[lem-finite-exact-stopped-floer-history-and-localization-model]]

[[thm-critical-thimble-path-slide-evaluation-triangle]]

[[lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse]]

[[lem-critical-bar-clock-history-correction-has-counted-primitive]]

## Facts & Assumptions

**Given:** The generation-subclass geometry and the exact base stop and finite critical thimbles fixed by the geometric definition. All objects are finite-type exact conical surfaces with the specified grading, relative Spin data, and finite-rank flat systems.

[F1] [[def-stopped-fukaya-category-algebraic-conventions]] defines finite twisted objects, thick closure, and perfect modules; it does not construct the geometric category.

[F2] [[lem-finite-exact-stopped-floer-history-and-localization-model]] supplies the four-dimensional finite operation/history category, compactness/gluing, full Morse/PSS units and derived localization, with its compatible algebraic DG bar presentation. It does not place the required all-object critical evaluations or the counted co-unit into that model, and does not prove generation.

[F3] [[thm-critical-thimble-path-slide-evaluation-triangle]] has not completed the actual slide movie, coefficient/probe counts, or finite object maps.

[F4] [[lem-outgoing-thimble-pairing-has-common-stage-finite-serre-inverse]] supplies the compressed target and common-stage support argument conditionally, but lacks the actual outgoing count and forward membership.

[F5] [[lem-critical-bar-clock-history-correction-has-counted-primitive]] proves the exact four-block residual formula conditionally; the marked geometric primitive $z_N$ is absent.

[F6] [[lem-finite-dg-y-oneda-and-perfect-hull]] proves the perfect-module/Yoneda comparison for an already supplied strictly unital DG enhancement, not for a category that is only homologically unital.

[A1] For every connected object $L$, the missing universal evaluation input is an actual finite twisted object $P_{L,N}\in\operatorname{Tw}(\Delta_1,\ldots,\Delta_m)$, an allowed positive-history object $U_{L,N}$, and an actual chain map $P_{L,N}\to U_{L,N}$ in the fixed finite bar model, with all local systems, ends, and operations retained.

[A2] The cone of each map in [A1] must be killed by the complete counted four-block nullhomotopy of [F5], in the same model and stage; ordinary right-bar acyclicity alone is insufficient.

[A3] The category must be realized in a compatible strictly unital DG bar/history enhancement, with the strictification and all-operation comparison from the geometric homologically unital model actually supplied.

## Proof

1.1 Fix one connected object $L$. Under [A1], $P_{L,N}$ is a finite sum of shifts, cones, and twisted differentials built only from the critical thimbles, so $P_{L,N}\in\operatorname{thick}\{\Delta_i\}$. The allowed positive continuation from $L$ to $U_{L,N}$ becomes invertible in the derived localization by the histories. Under [A2], the cone of $P_{L,N}\to U_{L,N}$ is nullhomotopic in that same localized bar model, so the map is a quasi-isomorphism there. Therefore
$$L\simeq U_{L,N}\simeq P_{L,N}$$
in the stopped wrapped category, and $L$ belongs to the thick closure of the thimbles. This implication uses the actual maps and homotopy in [A1] and [A2]; it does not follow from a numerical rank or a single probe. [A1, A2, F1, F2, construct, algebra]

2.1 A finite disconnected object has finitely many components by the finite-type convention. Applying step 1.1 to each component and taking their finite direct sum puts the whole object in the same thick subcategory. Closure under shifts, cones, and retracts is part of [F1], so this proves the conditional all-object conclusion for the stated idempotent-complete category. [F1, step 1.1, construct, algebra]

2.2 Under [A3], apply [F6] to the actual strictly unital DG enhancement. It identifies the finite twisted hull and its retracts fully faithfully with the perfect modules generated by the representables. Thus once the geometric evaluation has placed every representable brane in the thimble-generated hull, the same equality holds in the perfect-module/Yoneda model. The lemma is not applicable before [A3]; a cohomological unit or a label saying “wrapped category” does not supply a strict DG enhancement. [A3, F1, F6, step 1.1, construct, algebra]

3.1 The actual assigned theorem requires all three conditional inputs [A1], [A2], and [A3]. Current carriers do not give a finite evaluation for an arbitrary finite-type brane and local system; [F5] has no counted $z_N$; and the generic operation/DG bar model of [F2] does not by itself construct or identify the required critical evaluation and co-unit maps in that model. The finite inverse and path-slide inputs [F3] and [F4] also remain incomplete. Therefore steps 1.1 through 2.2 are conditional implications, not a proof of generation. The exact unresolved owner input is an all-object finite evaluation construction, the same-model four-block counted co-unit, and the compatible DG/Yoneda comparison; no extra stops or narrower object class are silently substituted. This item remains escalated. [A1, A2, A3, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 2.2] ∎

## Remarks

The exact source comparison was inspected: GPS Corollary 1.14 concerns a Fukaya--Seidel setup with a specific stop/fibre, and Abouzaid's Theorem 1.1 requires a symplectic-cohomology unit-image condition. Neither is a premise for the all-branes statement here.
