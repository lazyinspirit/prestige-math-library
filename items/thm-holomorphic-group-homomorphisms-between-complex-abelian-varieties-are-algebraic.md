---
id: thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
kind: theorem
title: Holomorphic group homomorphisms between complex abelian varieties are algebraic
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
- thm-abelian-variety-is-projective
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- thm-ag-standard-smooth-geometric-regularity
- lem-regular-system-of-parameters-equivalent-basis
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- cor-normalization-resolves-singularities-of-curves
- thm-regular-equals-smooth-over-perfect-field
- thm-meromorphic-functions-on-smooth-projective-complex-curves-are-rational
- thm-jacobian-criterion-smooth-morphism
- thm-flat-finite-presentation-is-open
- lem-nonaffine-fppf-descent-of-scheme-morphisms
- cor-strong-nullstellensatz-two-inclusions
justified_by: []
sources:
  references:
  - title: J. S. Milne, Complex Multiplication, version0.10 (2020)
    url: https://www.jmilne.org/math/CourseNotes/CM.pdf
    locator: Chapter I section2, Propositions2.1–2.2, and Chapter II section6, Proposition6.1, full-faithfulness assertion. The source's reference to Chow/Mumford is replaced by the local curve-and-descent proof below.
---

## Statement

Assume the Axiom of Choice. Let $A,B$ be complex abelian varieties, of any dimensions including zero. Every holomorphic group homomorphism $f:A^{\mathrm{an}}\to B^{\mathrm{an}}$ is induced by a unique algebraic group homomorphism $A\to B$. Thus analytification gives a bijection
$$\operatorname{Hom}_{\mathbb C\text{-groups}}(A,B)\xrightarrow{\sim}\operatorname{Hom}_{\mathrm{hol.groups}}(A^{\mathrm{an}},B^{\mathrm{an}}).$$
This does not assert that an arbitrary complex torus is algebraic.

## Facts & Assumptions

**Given:** AC, the complex abelian varieties and the holomorphic group homomorphism in the Statement.

[A1] AC is explicit and supplies DC and Countable Choice when required by the projectivity/normalization interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Abelian varieties are smooth proper geometrically connected group varieties and are projective. Their analytifications are smooth compact complex manifolds, standard smooth algebraic charts yield holomorphic coordinates, and algebraic morphisms analytify holomorphically ([[def-abelian-variety-over-a-field]], [[thm-abelian-variety-is-projective]], [[lem-smooth-projective-analytification-has-rational-kahler-polarization]], [[thm-ag-standard-smooth-geometric-regularity]]).

[F2] A lift of a cotangent basis in a regular local ring is a regular system of parameters. Quotienting by any initial part of such a system gives a regular local ring of the complementary dimension, which is a domain ([[lem-regular-system-of-parameters-equivalent-basis]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F3] An integral projective curve over a perfect field has a finite birational normalization which is nonsingular and projective. Regular varieties over a perfect field are smooth ([[cor-normalization-resolves-singularities-of-curves]], [[thm-regular-equals-smooth-over-perfect-field]]).

[F4] Every holomorphic map from the analytification of a smooth projective complex curve to a smooth projective complex variety is algebraic ([[thm-meromorphic-functions-on-smooth-projective-complex-curves-are-rational]]).

[F5] The relative Jacobian criterion makes a morphism between smooth varieties of equal dimension etale where its differential is invertible. Flat finite-presentation morphisms are open, and morphisms with equal pullbacks descend uniquely along a faithfully flat quasi-compact locally finite-presentation map ([[thm-jacobian-criterion-smooth-morphism]], [[thm-flat-finite-presentation-is-open]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]).

[F6] For a reduced finite-type complex scheme, regular functions are detected by their values at complex points; hence morphisms to a separated scheme are detected by their complex-point maps, using the closed equalizer and the strong Nullstellensatz ([[cor-strong-nullstellensatz-two-inclusions]]).

## Proof

1.1 Suppose first $a=\dim A\ge1$. At its identity choose regular functions $t_1,\ldots,t_a$ on an affine neighbourhood $V$ which vanish there and whose differentials form a cotangent basis; [F1] permits the free coordinates of a standard smooth chart, or any lift of such a basis. By [F5], the coordinate map $t:V\to\mathbb A^a$ is etale at zero, and after shrinking $V$ it is etale everywhere. For every $i$, its inverse image of the $i$th coordinate axis is therefore a smooth one-dimensional scheme, by etale base change. Its local ring at zero is the regular domain $\mathcal O_{A,0}/(t_j:j\ne i)$ from [F2], so there is a unique irreducible component through zero. That component $Z_i$ is an integral smooth locally closed curve; smooth components are disjoint locally, so it has precisely the specified germ. Its projective closure $\overline Z_i$ in $A$ is an integral projective curve, since closure preserves the function field and dimension of an irreducible locally closed subvariety. Its tangent line at the identity is the common kernel of $dt_j$, $j\ne i$. These $a$ tangent lines form a direct sum equal to $T_0A$. [A1, F1, F2, F5, given, choose, construct, algebra]

2.1 Normalize each $\overline Z_i$ using [F3], obtaining a smooth projective integral curve $C_i$ and an algebraic map $\iota_i:C_i\to A$. Its normalization is an isomorphism over the smooth germ in step 1.1: on that local normal domain, a finite birational integral extension inside the same fraction field equals the domain itself. There is consequently a point $c_i\in C_i(\mathbb C)$ mapping to zero with differential image the chosen tangent line. Each $C_i$ is geometrically integral over the algebraically closed field. [F2, F3, step 1.1, construct, algebra]

3.1 Form the algebraic addition map $\mu:\prod_{i=1}^a C_i\to A$, $\mu(x_1,\ldots,x_a)=\sum_i\iota_i(x_i)$. At $c=(c_i)$ its differential is the isomorphism given by the direct sum of those tangent lines. Source and target are smooth of dimension $a$, so [F5] supplies a Zariski open neighbourhood $W$ of $c$ on which $\mu$ is etale. The image $U=\mu(W)$ is a nonempty Zariski open by [F5], and $W\to U$ is surjective, etale and quasi-compact; quasi-compactness follows since these are finite-type schemes over a field and hence Noetherian. It is therefore an fppf cover to which morphism descent applies. [F1, F5, step 2.1, construct, algebra]

3.2 The holomorphic composite $f\circ\iota_i^{\mathrm{an}}$ is an algebraic morphism $h_i:C_i\to B$ by [F4]. Summing their values gives an algebraic morphism $H:\prod_iC_i\to B$. The group identity for $f$ gives $H^{\mathrm{an}}=f\circ\mu^{\mathrm{an}}$ at every complex point. [F1, F4, step 2.1, given, construct, algebra]

4.1 Restrict $H$ to $W$. Its two pullbacks to $W\times_UW$ agree on complex points by step 3.2. That fibre product is smooth over $\mathbb C$: its projection to the smooth $W$ is etale, being a base change of $W\to U$. In particular it is reduced. By [F6] the pullbacks are equal as algebraic morphisms. The fppf descent in [F5] therefore yields an algebraic morphism $f_U:U\to B$. It equals $f$ on every complex point of $U$: the nonempty fibre of the etale finite-type cover over such a point has a complex point, by the Nullstellensatz, and the equality can be checked there. [F5, F6, step 3.1, step 3.2, construct, algebra]

5.1 For every $b\in A(\mathbb C)$ define on the algebraic open $U+b$ the algebraic morphism $f_b(x)=f_U(x-b)+f(b)$. Its constant value $f(b)$ is a complex point of $B$, hence a constant algebraic morphism. The holomorphic group law and step 4.1 show that every $f_b$ agrees pointwise with $f$ on its open. These opens cover all complex points of $A$: fix $u\in U(\mathbb C)$, and for a given $x$ use $b=x-u$. Their union is therefore all of $A$, since a nonempty closed complement in a finite-type complex scheme would have a complex point. On overlaps the maps agree by [F6]; thus they glue to an algebraic morphism $\widetilde f:A\to B$ with analytification $f$. This uses the group law to extend an algebraic map from an open, rather than asserting an unsupported algebraicity theorem for arbitrary analytic maps. [F1, F6, step 4.1, choose, construct, algebra]

6.1 The group-law identities for $\widetilde f$ and its value at the identity hold on complex points because its analytification is $f$. By [F6] applied to the reduced smooth $A\times A$ and to $A$, they hold algebraically. Uniqueness of $\widetilde f$ follows from the same detection on $A$. Conversely every algebraic group homomorphism analytifies holomorphically by [F1]. If $\dim A=0$, the smooth connected proper complex group with its identity is the one-point scheme, and a group homomorphism has the unique zero value in $B$; this is algebraic. If $\dim B=0$, the target is the one-point scheme and the assertion is equally immediate. This proves all stated dimensions and the full bijection. [F1, F6, step 5.1, algebra] ∎

## Source-reading boundary

The cached Milne CM notes were read at Chapter I section2, Propositions2.1–2.2, and Chapter II section6, Proposition6.1 and its explicit proof sketch. Their full-faithfulness assertion is the bibliographic source for this Statement. The source invokes Chow/Mumford; neither theorem is imported here. The curve rationality supplier is locally reconstructed, and the proof above constructs the necessary spanning tangent curves, actual etale cover, cocycle descent and translation gluing.
