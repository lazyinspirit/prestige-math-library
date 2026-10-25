---
id: lem-asd-regularity-perturbation-and-orientability
kind: lemma
title: Generic regularity and orientability for the sign-fixed self-dual moduli problem
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - thm-asd-deformation-complex-index-formula
  - def-axiom-of-choice
  - lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections
  - lem-bounded-smoothing-perturbations-give-open-dense-asd-transversality
  - lem-su-two-asd-determinant-lines-are-gauge-equivariantly-orientable
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §§II.1–II.4, printed pp.288–295; complete slice, bounded smoothing perturbation, and determinant orientation proofs
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC. Let $X$ be a closed simply connected oriented Riemannian four-manifold with positive-definite intersection form, and let $P\to X$ be an $SU(2)$-bundle with $c_2(P)[X]=-1$. Complete the connections in $H^3$ and the gauge transformations in $H^4$, and use the unbased irreducible configuration quotient. The curvature section $\Phi([A])=F_A^-$ takes values in its $H^2$ equation bundle. Choose an open subset $U$ covered by finitely many bounded Coulomb slice balls centered at smooth irreducible connections, and an open $V$ whose closure is contained in the union of strictly smaller closed balls in these charts, their images lying in $U$.

Allow smooth gauge-equivariant perturbation sections supported in $U$, whose slice representatives are smooth $H^3$-valued maps with finite uniform $H^3$ norm on the specified chart balls. Interpret them in the $H^2$ equation bundle by inclusion. Give this class the topology of the uniform $H^3$ section norm on those finitely many balls together with convergence of the section and its slice derivative $H^3\to H^2$ uniformly on compact subsets. The perturbations for which $\Phi+\sigma$ is transverse to zero at every zero in $\overline V$ form an open dense subset. Their zero sets in $V$ are smooth orientable five-manifolds, and the real determinant line of the gauge-fixed deformation family is orientable on the irreducible quotient. The based quotient may be used to pull back this orientation; it carries an additional $SO(3)$ framing fiber and is not the unbased five-dimensional moduli space.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§II.1–II.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] The sign-fixed equation is $F_A^-=0$, with unbased real operator $d_A^*\oplus d_A^-$ and charge $c_2=-1$. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[F2] Its real index is $8k-3(1-b_1+b_-)$, with full AC. Here $k=1$ and $b_1=b_-=0$, so the index is five. [[thm-asd-deformation-complex-index-formula]]

[F3] The actual high-Sobolev slice construction gives a smooth unbased quotient and equation bundle; the based quotient is a principal $SO(3)$ framing bundle. [[lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections]]

[F4] On the stated finite slice collars, bounded smoothing perturbations give an open dense transverse class in exactly the specified topology, and their regular zero sets have dimension equal to the unbased index. [[lem-bounded-smoothing-perturbations-give-open-dense-asd-transversality]]

[F5] The real $SU(2)$ determinant family is gauge-equivariantly orientable on a closed simply connected oriented four-manifold, and this persists under compact perturbations and induces the orientation of a regular zero set. [[lem-su-two-asd-determinant-lines-are-gauge-equivariantly-orientable]]

[A1] Full AC is used through the analytic, finite-model, Bott and obstruction suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC, the manifold and bundle, and the actual Sobolev, slice-collar and perturbation conditions of the Statement.

1.1 By [F3], the quotient and equation bundle are smooth in the stated $H^3/H^4$ spaces. In a slice centered at $A$ the equation is $F_A^-+d_A^-a+(a\wedge a)^-$. The derivative of each allowed perturbation factors through the compact inclusion $H^3\hookrightarrow H^2$, and [F4] proves Fredholmness of the slice derivative with the same index as [F1]. Formula [F2] gives that index as five. [F1, F2, F3, F4, A1, given, algebra]

2.1 Apply [F4] with the exact finite larger and smaller slice balls in the Statement. Its compact zero-container follows from the uniform $H^3$ bound on nearby perturbation values: in each smaller slice ball the curvature equation and $d_A^*a=0$ give a uniform $H^4$ bound on the solution $a$, hence compactness in $H^3$. Compact-set derivative control then preserves surjectivity at the remaining zeros. Density follows from finite cokernel-complement perturbations and finite-dimensional Sard. Thus the claimed set is open dense, and its zero set in $V$ is a smooth five-manifold by step 1.1. [F4, step 1.1]

3.1 By [F5], the unperturbed real determinant line is orientable with every gauge transformation preserving the orientation. Scaling the compact perturbation derivative from zero to its actual value preserves this property. At a transverse zero the kernel of the slice derivative is the moduli tangent space and its cokernel is zero, so the determinant orientation gives a tangent orientation. The extra scalar gauge block is invertible and has its fixed orientation. Therefore the actual unbased moduli manifold is orientable. The based quotient only pulls this construction back and adds the three framing directions described in [F3]; it is not used to change the index in step 1.1. This proves all conclusions. [F1, F3, F5, step 1.1, step 2.1, A1, algebra] ∎

## Source notes

The complete source proof on Donaldson's printed pp.288–295 was read, including the $H^3/H^4$ exponents, the perturbations valued in $H^3$ with equation target $H^2$, Lemma 9 and Lemma 10. This replaces a defective previous formalization, not the mathematical theorem by an easier special case. A nonempty open subset of an infinite-dimensional Hilbert manifold cannot have compact closure: in a contained coordinate ball, an orthonormal sequence at a fixed small radius has no convergent subsequence. Thus the previous phrase “relatively compact open set” did not express the finite bounded slice collars used in the source. Uniform control of the smoothing section value is the compactness mechanism for openness; arbitrary compact derivatives with only compact-open control do not supply that mechanism. The previous based-quotient wording also omitted its three framing directions. The three actual suppliers prove the corrected analytic operation and the original orientability conclusion, with full AC stated explicitly.
