# Batch 43 weak tensor convention repair

Run: advanced-qft-supersymmetry-build-2026-10-23. Outside repair cycle 1.
Scientific owner: /root/fusion_two_category_conventions. Date: 2026-10-24.
This is substantive repair evidence, not native acceptance, a receipt, source-coverage certification, or a gate result.

The actual finding is `scope-review/batch-43/review-1.json`: the open problem required the earlier strict Gray-monoid tensor structure but included the concrete nonsemistrict model 2Vec_G^omega. This defect is confirmed. KTZ Remark 2.1 expressly states the mismatch and notes that the nontrivial pentagonator affects the center's objects, not merely its braiding. The remedy uses the actual weak models throughout; it makes no strictification or invariance-under-strictification assertion.

## Library search and reuse

Before editing I searched the current root and physics item/page trees for weak monoidal 2-categories, pentagonators, Gray monoids, and the twisted graded model. I read these root carriers as mathematical context, without changing or importing them:

- `items/def-weak-linear-two-category.md`.
- `items/def-monoidal-weak-two-category.md` (weak data and separately specified semistrict presentation).
- `items/def-fusion-two-category.md`.
- `items/def-four-cocycle-twisted-monoidal-structure-on-2vect-g.md`.
- `items/thm-four-cocycle-2vect-g-is-fusion-two-category.md` (including its local proof).
- `items/thm-three-cochain-gauge-equivalence-2vect-g.md` (including its local proof).

Those are not in the physics import receipt. They are not new logical wikilinks in the repaired item and are not presented as imported suppliers. Their actual weak tensor data and the cocycle calculation guide the precise local convention in the already-cleared open problem. The existing physics supplier `def-aqft-noninvertible-defect-fusion` remains unchanged and supplies only the underlying strict linear 2-category, finiteness, adjunction and separable-splitting meanings; its Gray-monoid tensor requirement is explicitly replaced for this problem.

## Actual external reading

I retrieved the full PDFs at `https://arxiv.org/pdf/1905.04644` and `https://arxiv.org/pdf/1102.0981` into this evidence directory, and extracted their text using PyMuPDF. Retrieval is not an assertion of reading either whole paper.

Actually read from Kong–Tian–Zhou, arXiv:1905.04644v2: §1; the monoidal-bicategory data at the start of §2 (PDF pp.3–4); the object, 1-morphism and 2-morphism descriptions and equations (2.1)–(2.3) (PDF pp.4–6); Remark 2.1; and the normalized twisted model at the start of §3 and the cocycle-dependent center equation (3.2) (PDF pp.10–12). Their convention allows a strict underlying 2-category and weak tensor pseudofunctor, associators, unitors, pentagonator and unit modifications. Their center is expressly the weak center, and (3.2) shows where the original omega remains visible.

Actually read from Gurski, arXiv:1102.0981v1: the introductory conventions of §2.4 (PDF p.12) and the free-structure description in §4.1 (PDF pp.33–34), including the tensor functoriality cells, associator/unit adjoint equivalences and four invertible modifications. I did not perform a fresh audit of the full braided coherence theorem or claim that theorem transports this problem's interface data.

## Exact repair and retained scope

Only `physics/items/op-aqft-fusion-two-category-anomaly-classification.md` was edited. Its frontmatter is unchanged.

The formulation now specifies the tensor pseudofunctor, its comparison maps and their equations; pseudonatural associator/unit adjoint equivalences; typed pentagonator and three typed unit modifications; and the monoidal-bicategory pasting axioms. It defines linear monoidal pseudofunctors with tensor and unit equivalences and their associativity/unit modifications, including compatibility with the actual pentagonators. Monoidal pseudonatural equivalences and modifications use the same convention. All centers, boundaries, interfaces, transport and endpoint markings retain this structure. The center definition points to KTZ's actual weak equations (2.1)–(2.3).

The full normalized cocycle benchmark is retained with its five-input equation. The inclusion from N extends grades by zero; the quotient pushes grades forward along p by finite sums. Their tensorators are reindexing/distributivity equivalences. On each homogeneous four-tuple their pentagonator compatibilities reduce respectively to omega(e,e,e,e)=1 and p*omega(g1,g2,g3,g4)=omega(p(g1),p(g2),p(g3),p(g4)). All other comparisons are the same canonical elementary-tensor reindexings. Thus arbitrary normalized omega, including nontrivial classes, remains in the model. No claim that omega can be gauged to 1 is made.

The marked endability/transport classification, equivalence relation, nonminimal boundary choices, nonsplit finite-2-group target, categorical background/relative response target, and restricted invertible compatibility targets remain. The finite-2-group construction remains the preexisting proposed research target; no established strictification theorem has been reclassified as open. The item stays an open problem and never becomes a logical supplier. No new prerequisite item is necessary for this local convention.

## Affected-consumer review

I searched actual current `physics/items` and `physics/library` references to the exact OP ID; the item has no aliases. The only outside occurrence is its inventory entry in `library/advanced-qft-and-supersymmetry/qftx-anomaly-matching-and-frontier.md`. No item uses this open problem logically or nonlogically, so there are no indirect item consumers. That compact page is frontmatter-only and simply places the same OP: unaffected; its inventory, prerequisites and presentation remain correct. Its examples companion has no occurrence and no prose making a tensor-convention claim: unaffected.

The other four batch-43 items concern the exact background RG comparison and its anomaly-matching examples. They neither reference nor depend on this OP and do not use its fusion-2-category conventions: unaffected by this change. The unchanged `def-aqft-noninvertible-defect-fusion` interface creates no new consumer event in other batches. No outside repair is required.

There are no diagrams in the changed item. The tensor comparison maps and cocycle compatibility are stated in text and formulas; no diagram supplies a proof obligation.

## Focused mechanical observation

After the final source edit I ran, from `physics/`:

`node tools/physics-support/proof-layout.mjs items/op-aqft-fusion-two-category-anomaly-classification.md`

Exit 0: `proof-layout: 1 items, 0 steps, 0 defects`.

No metadata, manifest, proof contract, source-coverage record, readiness record, receipt, native state, gate, import pin or commit was changed. Root retains the actual metadata/native owner resolution duties. In particular Root may add the already-linked Gurski source to structured source metadata if desired; this repair leaves that metadata untouched as instructed.
