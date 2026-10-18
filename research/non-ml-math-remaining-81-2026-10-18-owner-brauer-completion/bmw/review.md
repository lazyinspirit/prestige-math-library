# BMW source review and unresolved local proof obligation

Run: `non-ml-math-remaining-81-2026-10-18`.
Reviewer: `/root/math81_brauer_completion/bmw_basis`.
Disposition: **unresolved; no proof acceptance**. One review cycle, no canonical repair cycle. No shared manifest, contract, page, dispatch, runtime or gate was changed. The full claim remains in its original draft carrier; no helper was created.

Read CLAUDE.md, README.md, SCHEMA.md, Batch 60 notes, native beta attempt-1 result, the owner direction, PA-29 direction and its complete Brauer construction. The native attempt explicitly reports the BMW proof as absent; its successful dispatch exit is not mathematical completion.

The 61-page Goodman–Hauschild PDF was downloaded from https://arxiv.org/pdf/math/0411155 and extracted with PyMuPDF. Reading covered Definitions 2.1–2.6; §§2.4 and 2.7 concerning the scalar skein module and closure; Definition 3.1, Remarks 3.2–3.5, Lemma 3.9 and Proposition 3.14; §§4.1–4.4; and all of §§5.1–5.5 (PDF pp.34–50). The affine arguments in §§3.3–3.4 and §6 were only selectively inspected and are not claimed as read in full. No Kauffman/Turaev full-text proof was read. No Morton–Wassermann unpublished manuscript was accessed.

## What can be verified from the inspected argument

The convention substitution is correct: source λ=ρ and source z=−(q−q⁻¹). It converts source g−g⁻¹=z(e−1) to the carrier's g−g⁻¹=(q−q⁻¹)(1−e), and source λ⁻¹−λ=z(δ−1) to the carrier's parameter relation. Source λ and δ are units, as required by the carrier's universal ring. No division by q−q⁻¹ is permissible or necessary.

The descending reduction is a valid spanning argument, separately from independence. With an orientation, strand order and basepoints on circles, reverse a crossing first encountered underneath. The skein relation expresses this as the changed diagram plus two diagrams with one fewer crossing. Induct on crossing number, and for the term retaining the number of crossings induct on the number of incorrect crossings for the fixed traversal. Reversing a crossing preserves its strands and traversal, so that second number decreases by one. Smoothing terms need fresh traversal choices but belong to the outer induction. This prevents an unsupported claim that all changes decrease crossing number.

A descending diagram is layered: each earlier strand passes over all later strands. A descending self-crossed strand is an unknotted arc, possibly with framing curls; pulling the traversed arc successively above its untraversed portion removes its crossings by ambient isotopy. Passing from ambient isotopy to regular isotopy retains a signed number of curls, removed using the untwisting relation. Closed components can first be made descending and higher than later strands and then removed, with scalar δ and the appropriate framing power of λ. After deleting curls and circles, one gets one loop-free, self-crossing-free descending class per connector. In distinct layers, any two simple planar arcs with the same boundary endpoints deform to one another; their ribbons have the same zero self-framing. This is the geometric content of source Propositions 5.5–5.7. It establishes spanning, not coefficient independence.

The generic domain needed by the source can be justified algebraically: over the UFD A=Z[λ±1,δ±1], the polynomial (δ−1)z+λ−λ⁻¹ is primitive, since δ−1 and λ−λ⁻¹ have no common irreducible factor. It is linear and irreducible over Frac(A), hence prime in A[z]. Thus Λ is an integral domain. This argument concerns Λ, and does not require proving that the subsequent q-parameter ring is a domain.

The ordinary connector determinant has a simple exact calculation. For connectors c,d let ℓ(c,d) count the alternating cycles obtained by gluing c to the reflected d. Then ℓ(c,d)≤n, with equality exactly when c=d: every cycle has at least two vertices, and all n cycles have two vertices precisely when both matching edges agree at every vertex. Consequently the normalized closure matrix A has entries δ^(ℓ(c,d)−n), diagonal entries 1 and off-diagonal entries strictly negative in δ-degree. Every nonidentity permutation term in det(A) contains an off-diagonal entry, so det(A)=1+δ⁻¹p(δ⁻¹)≠0. This applies to all connectors and is not a bounded rank calculation.

If a well-defined scalar-valued normalized closure functional ε:KT_n(Λ)→Λ has first been constructed, applying ε(T_c reflection(T_d)) gives a matrix B. At λ=1,z=0, the skein and curl relations forget crossings and framing, and B specializes to A. Thus det(B)≠0 in Λ. A relation among T_c can then be paired with every reflected T_d; invertibility over Frac(Λ) forces every coefficient to vanish. After this universal freeness, arbitrary base change is valid: tensor the generators-and-relations cokernel presentation with the chosen Λ-algebra; right exactness identifies it with the specialized tangle module, and the free connector basis tensors to a basis. Neither generic semisimplicity nor a small specialization alone supplies that step.

## Exact remaining obligations

1. **Scalar-valued closure before the determinant.** Descending reduction shows only that the empty diagram spans KT_0(Λ), so KT_0(Λ) is a quotient Λ/I. It does not show I=0. The above matrix must have entries in Λ with a proved scalar-valued evaluation, not entries in an unspecified quotient. Goodman–Hauschild §2.4 imports Turaev's theorem on the solid-torus skein module, from which their scalar target follows; its proof is not included in the read source. A local proof may instead construct the framed Kauffman link polynomial recursively, but must prove independence of basepoints, strand order and chosen skein reduction and invariance under Reidemeister II/III, together with the framing and loop normalizations. That complete proof has not been authored here. This is an established theorem, not an open problem.

2. **Algebraic injectivity is additional.** Even if KT_n freeness is complete, surjectivity BMW_n→KT_n does not prove an isomorphism. Source §§5.4–5.5 require the local identities for f_k, the absorption W_(2k) f_k=W_k f_k (and its odd analogue), and stability of the shuffle spaces V_n^(r) modulo the lower through-strand ideal. In particular the mixed-block case of source Lemma 5.37 needs the rank-zero factorization of 5.38 and the positive-permutation-braid manipulation of 5.39. The double induction on n and r then uses actual injectivity of the lower ideals and distinct connector independence. These identities are not proved by drawing the corresponding tangle and pulling it back: that would assume the map injective. Source Proposition 5.26 also uses specific word reductions in the diamond expression; a reference to its pictures would violate the local proof requirement. A fully verified transcription with all these reductions has not been authored here.

3. **No specialization shortcut.** Independence of the Brauer connectors after λ=1,z=0 cannot by itself prove a spanning module free over Λ. A relation with all coefficients in that specialization ideal survives this test, and nonflat modules can have torsion invisible there. The source's determinant over a domain solves this only after obligation 1. Finite BMW₂ computations and the O/Sp classical centralizer theorem solve neither obligation 1 nor 2.

There is also a boundary convention to make explicit on completion: the theorem quantifies n≥0, but the current BMW definition only defines n≥2. Define BMW_0=BMW_1=R, as in the source, before using these induction bases. This is a separate minor formulation repair and does not solve the proof gaps.

The smallest missing independent supplier for the determinant route is a fully proved scalar framed Kauffman evaluation. The largest remaining same-item task is the BMW ideal/shuffle stability reduction. They can be placed as local helpers if an owner delegates that continuation, but none has been added on this handoff. The preserved theorem statement has not been weakened.

## Current checks

All commands selected exactly `items/thm-bmw-kauffman-tangle-basis.md`:

- `node tools/proof-layout.mjs items/thm-bmw-kauffman-tangle-basis.md`: exit 1, 0 steps, 1 `no-steps` defect at its Proof heading.
- `node tools/rendercheck.mjs items/thm-bmw-kauffman-tangle-basis.md --json`: exit 0, 1 checked, 0 errors and 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-bmw-kauffman-tangle-basis.md --json`: exit 1, 1 proof checked, 1 failure, `no-qed`.

These failures are retained honestly. There is no proof contract to add or ready/accepted decision to record for BMW. Existing Batch 60 notes and metadata should retain BMW's unresolved status and may link this review as added evidence; the source-coverage description should not claim that a complete self-contained BMW proof was written or that Kauffman/Turaev was read.
