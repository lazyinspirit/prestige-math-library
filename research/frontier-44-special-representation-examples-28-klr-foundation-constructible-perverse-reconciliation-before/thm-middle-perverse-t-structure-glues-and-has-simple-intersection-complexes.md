---
id: "thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes"
kind: theorem
title: "Middle perverse t structure glues and has simple intersection complexes"
status: draft
origin: session
deps: ["def-equivariant-constructible-derived-category-for-complex-algebraic-varieties", "thm-constructible-six-functors-proper-base-change-and-verdier-duality", "lem-complex-algebraic-stratifications-have-finite-conical-cochain-models", "lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom", "def-canonical-t-structure-on-a-derived-category"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Beilinson\u2013Bernstein\u2013Deligne, Faisceaux pervers, \u00a7\u00a71.4 and 2.1"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
proof_strategy: direct
---

## Statement

Assume AC and let $k$ be a characteristic-zero field. On complex algebraically constructible derived categories, middle perversity is defined on smooth complex strata $S$ by $H^q(i_S^*A)=0$ for $q>-\dim_\mathbb C S$ and $H^q(i_S^!A)=0$ for $q<-\dim_\mathbb C S$. These inequalities give a bounded t structure, independent of compatible refinement, gluing across algebraic open/closed decompositions. The equivariant structure is detected by restriction to X. Its heart is abelian of finite length; its simples are intermediate extensions $\operatorname{IC}_Z(L)=j_{!*}L[\dim_\mathbb C Z]$ of simple finite-rank local systems on dense smooth opens of irreducible supports, with equivariant data in the equivariant category. If A,B lie in the heart, $\operatorname{Hom}(A,B[m])=0$ for $m<0$. A simple object's endomorphism ring is a division k-algebra, not asserted to equal k.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] is used with the hypotheses explicitly stated in its claim.

[F5] The exact local supplier contract of [[def-canonical-t-structure-on-a-derived-category]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 suppose the actual six-operation supplier gives j!⊣j*⊣Rj* and i*⊣i*⊣i!, full faithfulness of i*, j!, Rj*, vanishing j*i*=0 and the two localization triangles. Given t-structures on U,Z, define T≤0 by j*K≤0 and i*K≤0, and T≥0 by j*K≥0 and i!K≥0. Orthogonality follows from j!j*A→A→i*i*A: the two endpoint Hom groups into B≥1 vanish by adjunction and the two existing t-structures. For truncation, form Y→K→Rj*τ≥1(j*K). Then form A→Y→i*τ≥1(i*Y). Octahedral completion gives A→K→B with a triangle i*τ≥1(i*Y)→B→Rj*τ≥1(j*K). Applying j* shows j*A=τ≤0j*K and j*B=τ≥1j*K. Applying i* to A→Y gives i*A=τ≤0i*Y. Applying i! to the latter B triangle and using i!Rj*=0 gives i!B=τ≥1i*Y. Thus A≤0, B≥1; shift closure is immediate. Induct on the finite number of strata, starting with the ordinary t-structure shifted by dim_C S on each smooth stratum. Six operations preserve constructibility and boundedness, so the construction stays in D^b_c. [given, F1, F2, F3, F4, F5]

1.2 For refinement T⊂S of complex codimension c, ordinary pullback preserves the upper bound −dim_C S≤−dim_C T. On locally constant cohomology, extraordinary pullback is ordinary pullback shifted by −2c, so its lower bound becomes −dim_C S+2c≥−dim_C T. Therefore both old halves lie in the refined halves; uniqueness of truncation proves equality on the old category. Common refinement establishes independence. This uses the orientation/local conical supplier, rather than presupposing stratification independence. [given, F1, F2, F3, F4, F5]

1.3 The heart is abelian by the general t-structure argument: kernel and cokernel of u:A→B are the perverse cohomology in degrees −1 and0 of Cone(u), and the truncation triangles give image/coimage equality. Define j_!*L as the image of pH^0j!L→pH^0Rj*L. Its restriction is L. Its supported subobjects and quotients vanish: the supported maximal subobject/quotient are respectively the degree-zero i! and i* terms, which the intermediate image construction removes using the localization triangles. Conversely any extension without a nonzero boundary subobject/quotient is this image by adjunction. A subobject of j_!*L restricts to a subobject of L; when L is simple it either vanishes (hence is boundary-supported, impossible), or the quotient vanishes on U (hence is boundary-supported, impossible). Thus IC of a simple local system is simple. A simple heart object has a nonzero restriction on a suitable open stratum; that restriction is simple or a proper sub-local-system would generate a proper intermediate-image subobject. The no-boundary-subobject/quotient characterization then identifies it with IC. On a fixed finite compatible stratification, finite-dimensional local systems have finite length, and induction using the two localization sequences proves finite length of the heart; every object and ascending/descending chain remains constructible for that stratification. Simple supports are closures of connected smooth strata, irreducible in the algebraic stratification used. [given, F1, F2, F3, F4, F5]

1.4 For m<0, B[m] lies in T≥−m⊂T≥1 and A lies in T≤0, giving negative-Hom vanishing directly from orthogonality. If u:T→T is nonzero with T simple, its kernel and image force kernel0 and imageT, so u is invertible. This proves division algebra without an algebraic-closure hypothesis. [given, F1, F2, F3, F4, F5]

2.1 Equivariant transfer requires the actual descent supplier: smooth pullback with the dimension shift is t-exact, so the unique ordinary truncations carry compatible descent and restrict to the stated t-structure. Cartesian cohomology makes forgetful restriction conservative. For A,B perverse, the actual equivariant tensor/internal-Hom adjunction identifies Hom with degree-zero equivariant cohomology of internal derived Hom. The general derived-augmentation model computes it on the action nerve. Perverse negative-Hom vanishing on every ordinary open makes that internal Hom have no negative sheaf cohomology, so its augmentation rows have no negative degrees; total degree0 is the kernel of its p=0→p=1 differential. A morphism A→B is equivariant exactly when this differential vanishes. Maps p*A→p*B on G×X are constant in the connected G-coordinate: local negative internal-Hom vanishing identifies them with sections of the pulled degree-zero Hom sheaf; connectedness gives those sections precisely the sections on X. The two pullback maps agree at the identity of G by the equivariance unit, hence agree throughout G. Thus every underlying heart morphism is equivariant and the forgetful heart functor is fully faithful. Ordinary finite-length decompositions between equivariant heart objects therefore lift; arbitrary derived splittings are not inferred to lift. Equivariant IC classification follows the same intermediate-extension argument on equivariant strata, after compatible descent. [given, F1, F2, F3, F4, F5] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
