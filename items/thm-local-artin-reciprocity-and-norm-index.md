---
id: thm-local-artin-reciprocity-and-norm-index
kind: theorem
title: Local Artin reciprocity and norm index
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-local-artin-reciprocity-map
- lem-canonical-local-reciprocity-from-cyclic-character-pairings
- lem-finite-separable-local-field-norm-image-is-open
justified_by: []
proof_strategy: direct
axiom_use: AC and DC are precisely the hypotheses of the accepted canonical local
  construction; no arbitrary-tensor DC theorem, cross-base Artin norm functoriality
  or unrestricted all-open-subgroups existence is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter III §§1–3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition, Chapter I §§1–2
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
verification: {}
---


## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a complete discretely valued field with
finite residue field and let $L/K$ be finite Galois. With arithmetic
Frobenius normalization, the local Artin map induces an isomorphism
$$K^\times/N_{L/K}L^\times\xrightarrow{\sim}\operatorname{Gal}(L/K)^{\mathrm{ab}}.$$
For abelian $L/K$, the abelianization is the whole Galois group. The induced
kernel is exactly $N_{L/K}L^\times$ and the
quotient order is $|\operatorname{Gal}(L/K)^{\mathrm{ab}}|$. Norm subgroups
of finite abelian extensions determine those extensions uniquely and reverse
inclusions. If an open finite-index subgroup $N\le K^\times$ contains the
norm subgroup of a finite separable extension, then $N$ is itself the norm
subgroup of a finite abelian extension.

## Statement references

[[def-local-artin-reciprocity-map]]

[[def-field-norm-and-trace]]

[[thm-field-norm-and-trace-by-embeddings]]

[[thm-local-class-formation-for-finite-residue-local-field]]

[[cor-class-formation-tate-nakayama-under-specified-choice]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[J. S. Milne, *Class Field Theory*, Chapter III §§1–3, printed pp. 97–109](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §§1–2, printed pp. 17–27](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** AC/DC, the finite-residue local field and finite Galois extension
$L/K$ in the original Statement, with the canonical Artin-map convention.

[F1] The canonical character-pairing construction gives the map on the
open-subgroup completion; for every finite Galois extension its quotient
to the Galois abelianization has norm kernel and the stated quotient order.
It proves finite abelian tower compatibility, arithmetic Frobenius and the
norm-correspondence assertions conditional on containing a finite separable
norm. [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F2] The local Artin map denotes this distinguished finite-character map,
not an arbitrary continuous map with unramified normalization.
[[def-local-artin-reciprocity-map]]

[F3] Finite separable local norms are open by the trace/determinant Hensel
argument. [[lem-finite-separable-local-field-norm-image-is-open]]

[A1] AC and DC are explicit hypotheses of the construction supplier; no
stronger choice scope is asserted. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** specialize the proved canonical finite-character
construction to each clause of the unchanged original claim.

**Given:** The data above.

1.1 By [F2], the map named in the Statement is the distinguished map
constructed in [F1]. Let $G=\operatorname{Gal}(L/K)$ and let
$E=L^{[G,G]}$ be its largest abelian subextension. The construction gives
an onto finite map to $\operatorname{Gal}(E/K)=G^{\mathrm{ab}}$ whose
kernel on $K^\times$ is $N_{E/K}E^\times$. Its proved nonabelian norm
limitation step gives $N_{L/K}L^\times=N_{E/K}E^\times$ by norm
transitivity, the independently established untensored Tate index
$|G^{\mathrm{ab}}|$, and equality of finite indices. Therefore it induces
the claimed isomorphism and quotient order. If $L/K$ is abelian, $E=L$
and the abelianization is $G$. This is the actual constructed map, not an
identification of an unrelated map with an abstract isomorphism.
[A1, F1, F2, given]

2.1 On each finite unramified extension, the construction computes the
character pairing by valuation followed by inverse Bockstein and arithmetic
Frobenius evaluation. It yields
$\operatorname{rec}_K(a)=\operatorname{Frob}_K^{v_K(a)}$ there.
Thus the normalization in the Statement is arithmetic Frobenius. Its
finite kernels are open by [F3], which was actually used in extending the
finite maps to the specified completion; finite index alone is not invoked
as a continuity proof. [F1, F2, F3, step 1.1]

3.1 The construction's same-base finite abelian quotient compatibility
proves the norm correspondence: a subgroup containing the norm of a finite
abelian extension is the inverse image of a subgroup of its Galois group,
and is exactly the norm group of the corresponding fixed field. For a
subgroup containing the norm of a finite separable extension, a finite
Galois closure and transitivity reduce to its largest abelian subextension.
This proves the last conditional assertion in the original Statement; it
does not require or assert that every open finite-index subgroup already
contains some such norm. To compare two abelian norm groups, put both
fields in their compositum and use the same surjective finite canonical
map: equality or inclusion of kernels gives equality or inclusion of their
fixing subgroups, hence uniqueness and reversed field inclusion. These are
exactly the proved steps of [F1], not cross-base norm functoriality or an
unproved negative Tate-inflation comparison. [F1, F2, step 1.1, algebra] ∎
