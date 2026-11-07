---
id: thm-complex-abelian-variety-uniformizes-as-complex-torus
kind: theorem
title: Analytic uniformization and natural lattice action of complex abelian varieties
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-abelian-variety-over-a-field
- prop-abelian-variety-commutativity-from-rigidity
- thm-abelian-variety-is-projective
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- lem-irreducible-complex-varieties-are-analytically-connected
- thm-structure-of-a-compact-connected-abelian-lie-group
- thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero
- prop-exponential-map-is-natural-for-lie-group-homomorphisms
- def-holomorphic-function-in-several-complex-variables
- cor-strong-nullstellensatz-two-inclusions
- def-complex-vector-space-lattice-and-torus
justified_by: []
sources:
  references:
  - title: J. S. Milne, Complex Multiplication, version 2020
    url: https://www.jmilne.org/math/CourseNotes/CM.pdf
    locator: Chapter I section2, Propositions2.1–2.2, and Chapter II section6, Proposition6.1. The general compact complex Lie-group implication is reconstructed using the published real Lie-group theorem; the source sends its proof to Mumford.
---

## Statement

Assume the Axiom of Choice. Let $A/\mathbb C$ be an abelian variety of dimension $g\ge0$, let $A^{\mathrm{an}}=A(\mathbb C)$ with its analytic manifold structure, and let $V_A=T_0A^{\mathrm{an}}$. The exponential map is a surjective holomorphic group homomorphism
$$\exp_A:V_A\longrightarrow A^{\mathrm{an}}$$
whose kernel $\Lambda_A$ is discrete, free abelian of rank $2g$, and spans $V_A$ over $\mathbb R$. With the quotient complex structure it induces a complex Lie-group isomorphism $V_A/\Lambda_A\cong A^{\mathrm{an}}$. The map $\exp_A$ is a universal holomorphic covering. For $g=0$ the lattice and vector space are zero and the abelian variety is the one-point group.

For every algebraic group homomorphism $f:A\to B$, its differential $df_0:V_A\to V_B$ is complex linear, sends $\Lambda_A$ into $\Lambda_B$, and satisfies $f^{\mathrm{an}}\exp_A=\exp_Bdf_0$. Thus endomorphisms act on the integral lattice. This action is faithful and extends injectively to an action of $\operatorname{End}^0(A):=\operatorname{End}(A)\otimes_{\mathbb Z}\mathbb Q$ on $\Lambda_A\otimes_{\mathbb Z}\mathbb Q$. No converse algebraization assertion for arbitrary holomorphic homomorphisms is made.

## Facts & Assumptions

**Given:** AC and the abelian variety or algebraic homomorphism in the Statement.

[A1] AC is the stated hypothesis and implies Countable Choice, as needed by the exponential-map suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] An abelian variety is smooth, proper and geometrically connected; under AC it is geometrically integral, commutative and projective ([[def-abelian-variety-over-a-field]], [[prop-abelian-variety-commutativity-from-rigidity]], [[thm-abelian-variety-is-projective]]).

[F2] Under AC a smooth projective complex scheme has a compact analytic complex manifold of the same dimension; algebraic morphisms between smooth separated finite-type complex schemes are holomorphic on analytifications ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]]). A nonempty irreducible complex algebraic variety is analytically connected ([[lem-irreducible-complex-varieties-are-analytically-connected]]).

[F3] Under AC a compact connected abelian real Lie group $T$ is the quotient of its real Lie algebra by the full discrete lattice which is the kernel of its surjective exponential; the quotient map is locally a diffeomorphism ([[thm-structure-of-a-compact-connected-abelian-lie-group]]).

[F4] Under Countable Choice the exponential is smooth with identity differential at zero ([[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]]). It is natural for homomorphisms of real Lie groups ([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]).

[F5] A smooth map in complex coordinates is holomorphic if its real differential is complex linear at every point: its real differentiability expansion then is precisely the complex-linear differentiability expansion in the definition, component by component ([[def-holomorphic-function-in-several-complex-variables]]).

[F6] Under AC the Strong Nullstellensatz says $I(V(I))=\sqrt I$ over an algebraically closed field ([[cor-strong-nullstellensatz-two-inclusions]]).

[F7] A complex torus is a complex vector space modulo a discrete full integral lattice ([[def-complex-vector-space-lattice-and-torus]]).

## Proof

1.1 By [F1], $A$ is a smooth projective geometrically integral commutative group variety. By [F2], $A^{\mathrm{an}}$ is a nonempty compact connected complex manifold of dimension $g$. Algebraic multiplication and inversion are holomorphic by the morphism clause of [F2]. Analytification respects these composition identities and products: on affine coordinates both constructions evaluate the same regular functions, and product coordinates give the product topology and atlas. Therefore $A^{\mathrm{an}}$ is an abelian complex Lie group and hence an abelian real Lie group of dimension $2g$. Its real tangent space is the underlying real space of $V_A$. [A1, F1, F2, given, construct]

2.1 Apply [F3] to this real Lie group. Its exponential $e:V_A\to A^{\mathrm{an}}$ is a surjective homomorphism, with discrete full lattice kernel $\Lambda_A$ of rank $2g$, and its real quotient $V_A/\Lambda_A$ maps diffeomorphically to $A^{\mathrm{an}}$. By [A1] the Countable Choice required in [F4] is available, so $e$ is smooth with $de_0$ the identity. Translation of the homomorphism identity $e(v+w)=e(v)+e(w)$ gives $de_v=d(L_{e(v)})_0de_0$. Each translation of the complex Lie group is holomorphic and has complex-linear differential. Thus $de_v$ is complex linear at every $v$, and [F5] proves $e$ holomorphic. [A1, F3, F4, F5, step 1.1, algebra]

3.1 Choose a ball $D\subseteq V_A$ about zero small enough that $(D-D)\cap\Lambda_A=\{0\}$ and $e|_D$ is a real diffeomorphism onto an open set. This is possible by discreteness and the local quotient statement of [F3]. The quotient map is open, since the inverse image of the image of an open set is its union of lattice translates. Its restrictions to translates of $D$ define complex coordinate charts on $V_A/\Lambda_A$; overlap maps are locally translations by lattice elements and are holomorphic. The induced map to $A^{\mathrm{an}}$ is a smooth diffeomorphism whose differential is complex linear by step 2.1. Its inverse has the inverse complex-linear differential and is smooth, so [F5] makes both maps holomorphic. This gives the asserted complex Lie-group isomorphism and the torus structure of [F7]. [F3, F5, F7, step 2.1, choose, construct, algebra]

3.2 Let $f:A\to B$ be an algebraic group homomorphism. By [F2] its analytic map is holomorphic and its differential at the identity is complex linear. By [A1] and the naturality in [F4], $f^{\mathrm{an}}e_A=e_Bdf_0$. Consequently $df_0(\Lambda_A)\subseteq\Lambda_B$. Differentiation respects composition by the chain rule and addition because the differential of the group law at the identity is vector addition; hence these restrictions form a ring action for endomorphisms. Since $\Lambda_A$ spans $V_A$ over $\mathbb R$, its restriction determines $df_0$ uniquely. If this restriction is zero, $df_0=0$, and surjectivity of $e_A$ in step 2.1 makes $f^{\mathrm{an}}$ the zero homomorphism. [A1, F2, F4, step 2.1, algebra]

4.1 The full inverse image of the chart given by $D$ is the disjoint union of its translates $D+\lambda$, $\lambda\in\Lambda_A$; each maps homeomorphically, indeed biholomorphically, to that chart. Translates of such charts cover the quotient, so $e$ is a holomorphic covering. The vector space $V_A$ is simply connected: any loop based at zero contracts through the based homotopy $(s,t)\mapsto(1-s)\gamma(t)$, and translations handle any basepoint. Thus this covering is universal. When $g=0$, [F3] gives the singleton group, zero tangent space and zero lattice, and all the statements hold with their trivial maps. [F3, step 3.1, construct, algebra]

5.1 An algebraic morphism from a reduced finite-type complex scheme to a separated complex scheme is determined by its complex-point map. Indeed, the equalizer of two such morphisms is a closed subscheme. On any affine source chart its ideal consists of functions vanishing at every complex point. Lift its functions to a polynomial presentation and use [F6]; the coordinate ring is reduced, so every such function is zero. Hence the equalizer is the whole source. Applied to step 3.2, this proves faithfulness on endomorphisms. A full lattice is free of finite rank, so its endomorphism ring is torsion-free. If $n\alpha=0$ for an algebraic endomorphism, its faithful lattice action is zero and $\alpha=0$. Tensoring with $\mathbb Q$ therefore extends the injective action into $\operatorname{End}_{\mathbb Q}(\Lambda_A\otimes\mathbb Q)$: any element has a common integer denominator, and a zero rational action would force its numerator to vanish. The same argument handles $g=0$. This proves every asserted clause. [F1, F6, step 3.2, algebra] ∎

## Source-reading boundary

The cached full Milne CM notes were consulted only at Chapter I section2, Propositions2.1–2.2 and their surrounding paragraphs, and Chapter II section6, Proposition6.1 and its explicit proof sketch. Proposition2.1 refers the compact-Lie-group implication to Mumford, and Proposition6.1 labels its general equivalence argument a sketch and invokes Chow for algebraization. Neither reference is imported here. The local proof above reconstructs the exponential/holomorphic/lattice statements from actual published library suppliers and does not claim essential surjectivity of algebraization or the algebraicity of an arbitrary holomorphic torus homomorphism.
