---
id: thm-untwisted-quiver-coha-is-associative-and-unital
kind: theorem
title: "The untwisted quiver CoHA is associative and unital"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-untwisted-quiver-cohomological-hall-algebra
  - lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
  - thm-constructible-six-functors-proper-base-change-and-verdier-duality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §2.3"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Dominic Joyce, Cohomological Hall Algebras, Week 2 notes, Geometry Advanced Class Trinity Term 2026, §§2.1–2.2"
      url: "https://people.maths.ox.ac.uk/joyce/AdvancedClassTT26/Week2.pdf"
    - title: "Yan Soibelman, Remarks on Cohomological Hall algebras and their representations, §2.2"
      url: "https://www.math.ksu.edu/~soibel/COHA-modules-2-1.pdf"
---

## Statement

Assume AC as inherited from the equivariant Borel–Moore and six-functor
suppliers. For every finite quiver $Q$, the multiplication in
[[def-untwisted-quiver-cohomological-hall-algebra]] is associative and has unit
the class $1\in H_0^{\mathrm{BM}}(\operatorname{Rep}_Q(\mathbf 0);\mathbb Q)
=\mathbb Q$.

## Facts & Assumptions

**Given:** a finite quiver $Q$, rational equivariant Borel–Moore homology, and the exact-sequence product in [[def-untwisted-quiver-cohomological-hall-algebra]].

[F1] [[def-untwisted-quiver-cohomological-hall-algebra]]: the product is $p_*q^!(\alpha\boxtimes\beta)$, with the first factor the subrepresentation, the second the quotient, and degree shift $-2\chi_Q(\mathbf b,\mathbf a)$.

[F2] [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]]: the exact-sequence map $q$ is smooth and the forgetful map $p$ is representable and proper.

[F3] [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]: the proper and smooth base-change maps, their composition maps, and their projection identities are coherent for equivariant maps of schemes with one fixed acting group. It does not extend those operations to the nonrepresentable quotient-stack map induced by $P_{\mathbf a,\mathbf b}\to G_{\mathbf a}\times G_{\mathbf b}$, or the change from $P_{\mathbf a,\mathbf b}$ to $G_{\mathbf a+\mathbf b}$. Its Axiom of Choice dependence is inherited through the CoHA definition and [F3]; no new choice is made here.

[A1] [[def-axiom-of-choice]]: AC is inherited through the CoHA definition and [F3]; the flag identifications and shift calculations make no additional choices.

**Unresolved prerequisite.** Steps below give the flag-correspondence associativity argument assuming the quotient-stack Borel–Moore operations in the Definition exist and satisfy the stated coherence. The cited fixed-group suppliers do not prove that interface, so this item is escalated and the argument does not certify the unconditional Statement.



## Proof

**Proof technique:** direct.

1.1 For dimension vectors $\mathbf a,\mathbf b,\mathbf c$, the left parenthesization first chooses an exact sequence $0\to M_{\mathbf a}\to M_{\mathbf a+\mathbf b}\to M_{\mathbf b}\to0$ and then an exact sequence $0\to M_{\mathbf a+\mathbf b}\to M_{\mathbf a+\mathbf b+\mathbf c} \to M_{\mathbf c}\to0$. The resulting data are exactly a flag $0\subset M_{\mathbf a}\subset M_{\mathbf a+\mathbf b} \subset M_{\mathbf a+\mathbf b+\mathbf c}$ whose successive quotients have dimensions $\mathbf a,\mathbf b,\mathbf c$, in that order. Pullback to the stack of these flags identifies the composite pullback and pushforward with the two maps in the left-associated convolution. [F1, F2, given, construct]

1.2 If either dimension vector is $\mathbf 0$, the corresponding exact sequence has a unique zero subobject or a unique zero quotient. Hence both maps in the correspondence reduce to the identity on $\mathfrak M_{\mathbf d}$; the class $1$ acts as the identity on either side. [F1, F2, given]

2.1 In the right parenthesization, the first exact sequence is $0\to M_{\mathbf b}\to M_{\mathbf b+\mathbf c}\to M_{\mathbf c}\to0$; pulling its subobject back along the quotient $M_{\mathbf a+\mathbf b+\mathbf c}\to M_{\mathbf a+\mathbf b+\mathbf c}/M_{\mathbf a}$ gives the unique intermediate subobject $M_{\mathbf a+\mathbf b}$. Conversely quotienting the two-step flag of step 1.1 by $M_{\mathbf a}$ recovers that sequence. Thus the right composite uses the same flag stack. The Cartesian base-change and composition identities in [F3] make the two induced homology maps equal. [F1, F2, F3, step 1.1]

3.1 The degree shifts agree: bilinearity of $\chi_Q$ gives $ -\chi_Q(\mathbf b,\mathbf a) -\chi_Q(\mathbf c,\mathbf a+\mathbf b) =-\chi_Q(\mathbf c,\mathbf b) -\chi_Q(\mathbf b+\mathbf c,\mathbf a). $ So the equality in step 2.1 is an equality in the same graded component. [F1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 show that the two parenthesizations agree in the same graded component, while step 1.2 supplies a two-sided unit. Bilinearity extends these identities to the direct sum $\mathcal H_Q$. AC is used only through [A1]. [A1, F1, step 2.1, step 3.1, step 1.2] ∎
