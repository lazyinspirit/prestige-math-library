---
id: ex-finite-morphism-torsion-etale-base-change
kind: example
title: Finite morphisms as the zero-dimensional proper-base-change case
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
- lem-finite-morphism-etale-direct-image-calculus
- def-etale-fppf-topology-comparison-and-cohomology-models
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
  - title: The Stacks Project, Etale Cohomology
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Explicit local consequence of the indicated local provider; no new full-source reading is claimed.
axiom_use: No choice axiom or existence of injectives is asserted; actual cohomology models are supplied data.
---

## Example

Let f:Y→X be finite and F any abelian étale sheaf on Y. On actual supplied cohomology models, R^q f_*F=0 for q>0. For every g:X′→X the canonical base-change map g^*Rf_*F→Rf′_*g′^*F is an isomorphism. At a given geometric point x, (f_*F)_x is the finite product of the F_y over the geometric fibre; an empty fibre gives the zero group. No torsion, flatness, finite-presentation or Noetherian assumption is needed.

## Facts & Assumptions

**Given:** Finite f, coefficient sheaf F, g and actual cohomology models as in the Statement; a geometric point is given when a stalk is discussed.

[F1] All finite morphism exactness, arbitrary base change and given-point finite-product stalk statements are the proved public interface. [[lem-finite-morphism-etale-direct-image-calculus]]

[F2] Actual supplied cohomology models are data, not an injective-existence assertion. [[def-etale-fppf-topology-comparison-and-cohomology-models]]

## Verification

1.1 Compute Rf_* using an actual supplied injective resolution F→I•. Exactness of f_* gives H^q(f_*I•)=f_*H^q(I•). Its only cohomology is therefore f_*F in degree zero, and R^qf_*F=0 for q>0. The same argument applies to f′ after every base change. This uses exactness itself, not any assertion that arbitrary inverse image preserves injectives. [F1, F2, given, construct, algebra]

2.1 The actual base-change morphism on degree-zero sheaves is the pullback-counit map β:g^*f_*F→f′_*g′^*F. It is an isomorphism by [F1]. The derived exchange morphism agrees with β on degree zero by its construction from the same adjunction, while both sides have zero higher cohomology by step1.1 and exactness of g^*. Hence that actual exchange morphism is an isomorphism in the derived category. [F1, F2, step 1.1, given, construct, algebra]

3.1 For a given geometric point x:SpecΩ→X the finite Ω-algebra of the fibre has finitely many local Artinian components. Apply the finite-product formula [F1] to obtain (f_*F)_x=∏_y F_y. The index is the set of underlying geometric fibre points, rather than the rank or the scheme-theoretic length of the finite fibre. Nilpotent thickening of a component supplies no extra factor. [F1, F2, step 2.1, given, construct, algebra]

4.1 For example, if the finite geometric fibre consists of two points with stalk groups M and N, the displayed stalk is M×N. A finite local nonreduced fibre with one point contributes its one coefficient stalk, regardless of its length. A finite empty fibre contributes the product over the empty set, the terminal abelian group 0. [F1, F2, step 3.1, given, construct, algebra]

5.1 The comparison β on these finite products is the actual restriction of sections followed by the coefficient pullback on each matched fibre point. This describes the same natural map used in step2.1; the proof does not replace it by an unrelated abstract isomorphism between isomorphic groups. The finite theorem already establishes that map without choosing a family of geometric points. [F1, F2, step 4.1, given, construct, algebra]

6.1 Thus finite morphisms give the zero-dimensional proper-base-change calculation for all abelian coefficients on the supplied models, including empty fibres. No positive-dimensional proper theorem, torsion finiteness theorem or choice principle is used. [F1, F2, step 5.1, given, construct, algebra] ∎

