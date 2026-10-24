---
id: lem-casson-gordon-bordism-independence-and-nonsingularity
kind: lemma
title: Bordism independence of the Casson–Gordon Witt class
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - lem-unitary-field-witt-forms-respect-bordism-and-whole-boundary-gluing
  - lem-low-degree-geometric-bordism-over-finite-cyclic-times-circle
  - lem-casson-gordon-bordism-admissibility
  - lem-casson-gordon-twisted-intersection-form-is-nonsingular
  - def-oriented-bordism-group-of-a-space
  - lem-oriented-bordism-classes-over-a-space-form-an-abelian-group
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 8, §§8.1, 8.4–8.5, pp. 164–172; complete sections read, with the bordism comparison deferred to referenced results
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed p. 190; τ-independence is asserted by analogy with σ-independence and one gluing step is identified, but the full bordism comparison is not supplied
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC. For a fixed prime-power cover degree and prime-power order character, the rationalized difference between the twisted and untwisted Casson–Gordon intersection-form Witt classes, divided by the bounding multiplicity $r$, is independent of the chosen multiple and bounding pair. It defines a class in $W(\mathbb C(t))\otimes\mathbb Q$.

## Statement references

[[lem-casson-gordon-bordism-admissibility|Existence of a multiple bounding pair]]

[[lem-casson-gordon-twisted-intersection-form-is-nonsingular|Nonsingularity of the capped twisted form]]

[[def-oriented-bordism-group-of-a-space|Oriented bordism classes of maps]]

[[lem-oriented-bordism-classes-over-a-space-form-an-abelian-group|The bordism group operation]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §§8.1, 8.4–8.5, pp. 164–172](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** AC, the fixed marked boundary character pair, and two smooth multiple bounding data.

[F1] Such data exist, and their twisted middle form is nonsingular on the actual cover-tensor module. [[lem-casson-gordon-bordism-admissibility]], [[lem-casson-gordon-twisted-intersection-form-is-nonsingular]]

[F2] For $B=K(C_d\times\mathbb Z,1)$, every closed four-manifold satisfies $d([Z,f]-[Z,\mathrm{constant}])=0$ in geometric smooth bordism. The proof constructs the requisite low-degree comparison, not merely rational signature equality. [[lem-low-degree-geometric-bordism-over-finite-cyclic-times-circle]]

[F3] The nonsingular image form over a unitary involutive field is zero on a closed four-boundary with extending coefficients and satisfies the whole-boundary Witt gluing identity. Its formation commutes with field extension. [[lem-unitary-field-witt-forms-respect-bordism-and-whole-boundary-gluing]]

[F4] Disjoint union and orientation reversal are the geometric bordism operations. [[def-oriented-bordism-group-of-a-space]], [[lem-oriented-bordism-classes-over-a-space-form-an-abelian-group]] Full AC is retained. [[def-axiom-of-choice]]

## Proof

1.1 Put $F=\mathbb C(t)$. For any smooth four-manifold $V$ over $B$ let $D(V)$ be its twisted nonsingular image Witt form minus the scalar extension to $F$ of its ordinary complex nonsingular image form. The representation $(a,n)\mapsto\zeta_d^at^n$ is unitary for the stipulated involution. By [F3], the two terms vanish on a closed five-bordism boundary with their respective extending systems. Hence on closed four-manifolds their difference is a homomorphism from $\Omega_4^{SO}(B)$ to $W(F)$. For a constant map the two coefficient systems are the same constant $F$ system, so $D(Z,\mathrm{constant})=0$. [F2, F3, F4, given, construct, algebra]

2.1 Applying that homomorphism to [F2] gives $dD(Z,f)=0$ for every closed $Z$ over $B$. In particular every closed ambiguity has torsion Witt difference and becomes zero after tensoring with $\mathbb Q$. This conclusion concerns the entire Witt class, not just its signature. No arbitrary-group analytic index theorem is required. [F2, F3, step 1.1, algebra]

3.1 If the bounding multiplicities are $r_0,r_1$, take $r_1$ disjoint copies of $W_0$ and $r_0$ copies of $W_1$. Their whole marked boundaries are the same $r_0r_1$ copies. Glue them, reversing the second orientation, with the same boundary character maps. Whole-boundary Witt gluing [F3] gives $$D(Z)=r_1D(W_0)-r_0D(W_1).$$ This uses the ordinary nonsingular quotient even when the ordinary absolute form has a radical. The twisted boundary is acyclic by [F1], so that term uses precisely the absolute module of the Statement. By step 2.1 the left side is zero rationally. Dividing by $r_0r_1$ proves $D(W_0)/r_0=D(W_1)/r_1$. Disjoint union, repeated multiples and all marked gluing choices are therefore compatible. [F1, F3, F4, step 2.1, construct, algebra]

4.1 We also record the target enlargement needed for a disk extension. Embed $C_d$ in $C_D$ for $d\mid D$ by $a\mapsto(D/d)a$, and keep the infinite coordinate unchanged. With positive roots of unity, $\zeta_D^{(D/d)a}=\zeta_d^a$, so the two rank-one $F$ coefficient systems and their forms are literally the same. Regard any original bounding datum as a datum over the larger target. Even if its boundary map is not onto that target, the proof of steps 1.1–3.1 still applies: [F2] and [F3] allow arbitrary continuous maps to $B$, and acyclicity concerns the actual coefficient system. One may use the induced principal cover, which can be disconnected; its local coefficient module is unchanged. Thus a smooth filling over the larger finite cyclic target computes the same rational class. [F1, F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 Finally the specified one-sided signature is a well-defined homomorphism on this rational Witt group. The entries of a Hermitian rational matrix, its nonzero determinant, and a rational change-of-basis matrix have only finitely many zeros and poles on the unit circle unless the relevant function is identically zero. For a nonsingular representative choose a short interval $0<\theta<\epsilon$ avoiding those finite exceptional sets. Its evaluations are nonsingular Hermitian matrices, and their eigenvalue signs cannot change without a zero determinant, so the signature is constant there. Congruent representatives have congruent evaluations on a common such interval. A hyperbolic form evaluates to a hyperbolic form and has zero signature. Direct sums add signatures, and rationalization extends this homomorphism by rational linearity. This verifies exactly the one-sided limit specified in the invariant Definition; it does not substitute another averaging convention. Together with step 3.1 this completes the claimed rationalized Witt construction. [F3, step 3.1, algebra] ∎