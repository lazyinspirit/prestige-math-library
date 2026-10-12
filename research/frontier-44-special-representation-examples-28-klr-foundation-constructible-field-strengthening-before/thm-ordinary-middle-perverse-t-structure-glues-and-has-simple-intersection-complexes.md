---
id: thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
kind: theorem
title: "Ordinary middle perverse t structure, recollement and intersection complexes"
status: draft
origin: session
deps: ["lem-analytic-constructible-sheaves-admit-coherent-six-operations", "lem-complex-algebraic-stratifications-have-finite-conical-cochain-models", "def-canonical-t-structure-on-a-derived-category"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "BBD §§1.4 and 2.1; Bernstein–Lunts Part I, finite resolution construction"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC and let $k$ have characteristic zero. On $D_c^b(X;k)$ for a separated finite-type complex variety, middle perversity is given on smooth complex strata $S$ by $H^q(i_S^*A)=0$ for $q>-\dim_\mathbb C S$ and $H^q(i_S^!A)=0$ for $q<-\dim_\mathbb C S$. These inequalities define a bounded t structure, independent of compatible refinement and gluing across algebraic open/closed decompositions. Verdier duality exchanges its two aisles. The heart is abelian and of finite length; its simple objects are the intersection complexes $j_{!*}L[\dim_\mathbb C Z]$ of simple finite-rank local systems on dense smooth opens of irreducible supports. Open restriction is perverse exact. Heart objects have no negative Hom, and a simple object's endomorphism ring is a division k-algebra. This is the ORDINARY category; no equivariant category, normalization, semisimplicity or noncharacteristic theorem is used.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[def-canonical-t-structure-on-a-derived-category]] is used with its explicit hypotheses.

## Proof

1.1 suppose the actual six-operation supplier gives j!⊣j*⊣Rj* and i*⊣i*⊣i!, full faithfulness of i*, j!, Rj*, vanishing j*i*=0 and the two localization triangles. Given t-structures on U,Z, define T≤0 by j*K≤0 and i*K≤0, and T≥0 by j*K≥0 and i!K≥0. Orthogonality follows from j!j*A→A→i*i*A: the two endpoint Hom groups into B≥1 vanish by adjunction and the two existing t-structures. For truncation, form Y→K→Rj*τ≥1(j*K). Then form A→Y→i*τ≥1(i*Y). Octahedral completion gives A→K→B with a triangle i*τ≥1(i*Y)→B→Rj*τ≥1(j*K). Applying j* shows j*A=τ≤0j*K and j*B=τ≥1j*K. Applying i* to A→Y gives i*A=τ≤0i*Y. Applying i! to the latter B triangle and using i!Rj*=0 gives i!B=τ≥1i*Y. Thus A≤0, B≥1; shift closure is immediate. Induct on the finite number of strata, starting with the ordinary t-structure shifted by dim_C S on each smooth stratum. Six operations preserve constructibility and boundedness, so the construction stays in D^b_c. [given, F1, F2, F3]

1.2 For refinement T⊂S of complex codimension c, ordinary pullback preserves the upper bound −dim_C S≤−dim_C T. On locally constant cohomology, extraordinary pullback is ordinary pullback shifted by −2c, so its lower bound becomes −dim_C S+2c≥−dim_C T. Therefore both old halves lie in the refined halves; uniqueness of truncation proves equality on the old category. Common refinement establishes independence. This uses the orientation/local conical supplier, rather than presupposing stratification independence. [given, F1, F2, F3]

1.3 Let $e=\dim_\mathbb C S$. The ordinary duality exchange gives $i_S^!D_XA=D_Si_S^*A$ and $i_S^*D_XA=D_Si_S^!A$. On bounded complexes with finite-rank locally constant cohomology on $S$, complex orientation and exact finite-dimensional duality give $H^j(D_SK)=(H^{-j-2e}(K))^\vee$. Thus $H^t(i_S^*A)=0$ for $t>-e$ implies $H^j(i_S^!D_XA)=0$ for $j<-e$, and $H^t(i_S^!A)=0$ for $t<-e$ implies $H^j(i_S^*D_XA)=0$ for $j>-e$. These are precisely the two opposite middle-perverse inequalities. Apply the same argument to $D_XA$ and use actual Verdier biduality to obtain equality of the exchanged aisles. [given, F1, F2, F3]

1.4 The heart is abelian by the general t-structure argument: kernel and cokernel of u:A→B are the perverse cohomology in degrees −1 and0 of Cone(u), and the truncation triangles give image/coimage equality. Define j_!*L as the image of pH^0j!L→pH^0Rj*L. Its restriction is L. Its supported subobjects and quotients vanish: the supported maximal subobject/quotient are respectively the degree-zero i! and i* terms, which the intermediate image construction removes using the localization triangles. Conversely any extension without a nonzero boundary subobject/quotient is this image by adjunction. A subobject of j_!*L restricts to a subobject of L; when L is simple it either vanishes (hence is boundary-supported, impossible), or the quotient vanishes on U (hence is boundary-supported, impossible). Thus IC of a simple local system is simple. A simple heart object has a nonzero restriction on a suitable open stratum; that restriction is simple or a proper sub-local-system would generate a proper intermediate-image subobject. The no-boundary-subobject/quotient characterization then identifies it with IC. On a fixed finite compatible stratification, finite-dimensional local systems have finite length, and induction using the two localization sequences proves finite length of the heart; every object and ascending/descending chain remains constructible for that stratification. Simple supports are closures of connected smooth strata, irreducible in the algebraic stratification used. [given, F1, F2, F3]

2.1 For m<0, B[m] lies in T≥−m⊂T≥1 and A lies in T≤0, giving negative-Hom vanishing directly from orthogonality. If u:T→T is nonzero with T simple, its kernel and image force kernel0 and imageT, so u is invertible. This proves division algebra without an algebraic-closure hypothesis. [given, F1, F2, F3] ∎

## Source notes

Research draft from the exact named local inputs. Ordinary geometric constructions retain their current draft/open status; this carries no native acceptance or independent audit.
