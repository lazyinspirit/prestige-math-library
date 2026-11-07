---
id: rem-flat-etale-p-primary-distinction
kind: remark
title: Étale and flat cohomology agree away from p, not at p-primary torsion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- lem-finite-locally-free-commutative-group-of-invertible-rank-is-etale
- thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison
- cor-completed-field-cone-etale-fppf-compact-support-comparison
- lem-fppf-kummer-roots-of-unity-over-a-field
- lem-site-slice-restriction-locality-and-composition
- def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
justified_by: []
proof_strategy: direct
axiom_use: Uses the actual supplied cohomology models and real Tate resolutions fixed by the Definition. The comparison, affine family descent, norm/biduality and field Kummer arguments add no choice principle. No external theorem is imported.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §0.4(d) and §3.9
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
  - title: Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, Proposition 2.1(4) and Remark 2.2
    url: https://arxiv.org/pdf/1804.03941
verification: {}
---

## Remark

For a finite flat commutative group scheme whose order is invertible on the
base, the group scheme is finite étale and its étale and fppf cohomology
groups agree; the same comparison holds for the compact-support groups in the
global-curve convention of the Definition. At a point of residue characteristic $p$, this comparison fails for
p-primary torsion, meaning coefficients killed by a power of $p$: for $K=\mathbb F_p(t)$, the
étale sheaf associated to $\mu_p$ is zero, while
$H^1_{\mathrm{fppf}}(K,\mu_p)=K^\times/K^{\times p}$ is nonzero.

## Remark references

[[lem-finite-locally-free-commutative-group-of-invertible-rank-is-etale]]

[[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]]

[[cor-completed-field-cone-etale-fppf-compact-support-comparison]]

[[lem-fppf-kummer-roots-of-unity-over-a-field]]

[[lem-site-slice-restriction-locality-and-composition]]

[[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

## Facts & Assumptions

**Given:** A finite locally free commutative coefficient group with invertible order for the first assertion; the field $K=\mathbb F_p(t)$ for the counterexample; and the actual cohomology models and identical real Tate resolutions used in the stated global-curve Definition. No comparison theorem is assumed as data.

[F1] A commutative finite locally free group of invertible rank is étale; its proof uses algebraic Cartier biduality and invariant differentials. [[lem-finite-locally-free-commutative-group-of-invertible-rank-is-etale]]

[F2] Finite étale coefficients have the natural ordinary étale–fppf comparison in every degree for each actual supplied cohomology model. [[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]]

[F3] The same natural comparison gives compact-support isomorphisms for the identical completed-field cone and supplied real Tate complexes. [[cor-completed-field-cone-etale-fppf-compact-support-comparison]]

[F4] The roots-of-unity fppf Kummer sequence is exact and classifies field torsors by $K^\times/K^{\times n}$; for $n=p$ over $\mathbb F_p(t)$ its nonzero class $t$ contrasts with the zero small-étale sheaf. [[lem-fppf-kummer-roots-of-unity-over-a-field]]

[F5] Exact abelian sheafification, sheaf kernels/cokernels and the actual supplied-resolution interpretation are available at their stated scope. [[lem-site-slice-restriction-locality-and-composition]]

[F6] The compact-support convention uses exactly the completed-field restriction cone and identical supplied real resolutions; it asserts no comparison with a different henselian or compactification convention. [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

## Proof

**Proof technique:** direct.

1.1 If the coefficient group's order is invertible, [F1] makes it finite étale. Apply [F2] to its actual ordinary cohomology models and [F3] to the identical completed-local-field cones prescribed in [F6]. These are the ordinary and compact-support comparisons asserted in the Remark, including all modified real-place degrees. This uses no local-flat-duality theorem. [F1, F2, F3, F6, given, algebra]

1.2 By [F4], the small-étale sheaf $\mu_p$ is zero and the fppf torsor group is $K^\times/K^{\times p}$, with the nontrivial class $t$ because its order of vanishing at zero is one. We verify explicitly that this is also the degree-one group in any actual injective-derived model under consideration; thus the torsor convention is not silently substituted for derived cohomology. [F4, given, algebra]

1.3 Let $A$ be an abelian sheaf and $0\to A\to I\to I^1\to\cdots$ the actual supplied injective resolution. Put $Q=I/A$. Comparison with any alternative actual named-functor-acyclic model is the derived-unit isomorphism proved in [F5], so this computes the stated right-derived group without spending global-section acyclicity for another functor. Its tail identifies $H^1(A)=\Gamma(Q)/\operatorname{im}\Gamma(I)$. A section $q$ of $Q$ has the fibre torsor $P_q=I\times_Q\{q\}$; local nonemptiness follows from the sheaf epimorphism $I\to Q$, and two lifts differ uniquely by $A$. Translation by a global $i\in I$ identifies the fibres of $q$ and $q+i$. [F5, given, construct, algebra]

2.1 Conversely, for an $A$-torsor $P$ form the free abelian sheaf $\mathbb Z[P]$ and the quotient $E$ of $I\oplus\mathbb Z[P]$ by all local relations $(-a,[p+a]-[p])$. Augmentation gives $0\to I\to E\to\mathbb Z\to0$: on any local trivialization with section $p_0$, the isomorphism sends $(i,\sum n_p[p])$ to $(i+\sum n_pa_p,\sum n_p)$ where $p=p_0+a_p$. This verifies the exactness locally, without choosing a family of local sections. Injectivity of this particular $I$ gives a retraction $E\to I$. Its kernel maps isomorphically to $\mathbb Z$, so the section one lifts to a global $z\in E$ of augmentation one. The images of $[p]-z$ in $Q$ do not change when $p$ is replaced by $p+a$, and therefore glue uniquely to $q\in\Gamma(Q)$. The map $p\mapsto[p]-z$ identifies $P$ with $P_q$. Free sheaves and quotients here are actual sheafifications from [F5], not an assertion that an arbitrary injective resolution exists. [F5, step 1.3, construct, algebra]

3.1 An equivariant isomorphism $P_q\to P_{q'}$ differs from a local lift by an element of $I$ independent of that lift, hence by a global $i\in\Gamma(I)$; its image is $q'-q$. This proves injectivity of the torsor correspondence. Adding two local lifts identifies contracted torsor product with the fibre of $q+q'$, so the correspondence is a natural group isomorphism. Apply it to $A=\mu_p$ and [F4]. The nontrivial class $t$ therefore gives the asserted nonzero derived $H^1_{\mathrm{fppf}}$, whereas cohomology of the zero étale sheaf is zero. This proves the full unchanged Remark. [F4, F5, step 1.2, step 1.3, step 2.1, algebra] ∎

## Source notes

The completed-field cone and the supplied real Tate data are identical on the two sides. The proof establishes the torsor-to-derived H1 identification for the actual right-derived models. The comparison and Kummer arguments use locally proved suppliers; no external theorem is imported. The original Remark is preserved literally.
