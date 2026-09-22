# Final adjudication — queue item 2

Item: `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras`.
Disposition: repaired. Source status: verified.

## Evidence and conventions

Reviewed the complete current item; the current direct dependency statements quoted in its Batch-11 contract; the complete Lie theorem, operator Jordan theorem, internal Jordan theorem and compatibility argument; its owning manifest, boundaries and risk record; Alpha's item entry and both Terra rejections. The already-read Cartan A/B pages, introductory supplier remarks and Cartan-page coverage fix finite-dimensional complex algebras, toral = abelian with semisimple adjoints on g, and Cartan = nilpotent and self-normalizing, including g=0. The rendered group-a bundle is empty, so the current files and contract are the evidence.

Source checked: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf — Etingof, Lecture 19, Proposition 19.6, Corollary 19.7 and the complete proof of Theorem 19.10, printed pp. 102–103 (PDF pages 100–101). These verify the weight-space orthogonality/nondegeneracy, stability of the centralizer under Jordan parts, and maximal-toral centralizer argument. Etingof uses toral self-centralizing as his Cartan definition; the library additionally proves the normalizer calculation to meet its own definition. I did not substitute the source's terminology for the library convention.

## Independent mathematical assessment and repair

Terra's final rejection, context `b10a9df71640a36354a7cc194fcf3c22f8547d5e2a3c0e78d3d159233fdd0ef4`, correctly identifies an inflated L1 citation. The internal Jordan theorem does not state polynomiality. Added a direct L9 citation and dependency on the existing published additive Jordan–Chevalley theorem for that precise assertion; L1 now gives exactly the internal theorem's interface. AC bookkeeping identifies both inherited uses.

The rest of the proof closes locally. Finite dimension supplies an inclusion-maximal toral subalgebra; the proof now explicitly fixes an arbitrary such subalgebra, proving the statement's universal clause. Polynomiality preserves commutation with ad(t), and centerlessness gives x_s,x_n in its centralizer l. Maximality places x_s in t. Engel makes l nilpotent. The cited Lie theorem states only existence of a common eigenvector, so I corrected L3 and supplied the finite invariant-flag construction using successive quotient modules inside step 5.1. I also corrected “a commutator” to “a sum of commutators” for a general element of [l,l]. All such matrices are strictly upper triangular; multiplication by an upper triangular matrix has zero trace. Weight orthogonality and nondegeneracy on g imply nondegeneracy on l, hence [l,l]=0. Then commuting with nilpotent ad(x_n) makes each product with ad(y) nilpotent, and nondegeneracy forces x_n=0. Thus l=t. Alpha's repaired normalizer argument correctly uses uniqueness of the direct weight decomposition, rather than asserting that individual summands lie in [x,t]. This gives self-normalization; abelianness gives nilpotence. The zero algebra is handled first.

Only the queued item and its manifest/contract metadata were repaired. No new lemma, supplier change, theorem, page, or pair was introduced. The Batch-11 and aggregate contract entries were synchronized and the choice boundary corrected, preserving the historical Alpha risk review. The sanctioned plan splicer refreshed only the two already-edited queued item objects (items 1 and 2); the accepted item 1 carrier was not changed or reopened.

## Ledger and focused validation

Reviewed the owning Batch-11 cross-batch input under `briefs/tasks/frontier-dependency-ledger.md`. It remains correctly empty: the added operator supplier is already published, not a different batch in this run. There is no cross-batch edge to add or remove. The unified ledger refresh succeeded. The published supplier's known direct-AC metadata debt remains in its existing canonical published-defect entry, outside this repair scope.

Strict focused proof-contract: 0 errors, 0 warnings, 1/1.
Item precheck: PASS. Item rendercheck: PASS.
Global depcheck: exit 0, no cycles or unresolved references; 277 library warnings remain and are not claimed repaired.
Plan splicer dry run and update: success, only the two authorized item objects differed.

No mathematical obligation remains for this item. Next action: terminal recording, then item 3 only after success. This is not a judge verdict or pass stamp.
