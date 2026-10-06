# Bounded adapted Whitney tube proposal

This is a separate author proposal, not a receipt, gate decision, certification or canonical mutation. Native alpha batch 14 was writing when this proposal was prepared. Root must merge the proposed files only after that writer drains, reconcile the current batch manifest/contracts/plan, home the helper before its theorem consumer, and register its supported Step-5 creation origin.

## Confirmed gap and local construction

The original theorem step 1.1 attempted to preserve sheet-exact geodesics by a partition allegedly constant in normal directions. An arbitrary ordinary partition does not preserve total geodesicity. A normal tubular-germ comparison also does not supply the missing relative sheet geometry. Both unsupported uses are removed from the proposed theorem proof and replaced by one new A-page local supplier, `lem-a-clean-framed-whitney-bigon-has-an-adapted-tube`.

The supplier proves disk/frame extension from local smooth corner extensions, preliminary metric extension with prescribed tangent flags, uniform normal exponential sheet tubes, antipodal reflections, averaging, equality on Euclidean-only overlaps, preservation of the metric on each sheet zero section, uniqueness of reflected geodesics, the full framed-disk exponential tube, compact global injectivity, and exact inverse sheet images. The disk itself need not be replaced or straightened: prescribe its inward tangent line perpendicular to the relevant sheet in the preliminary metric. Reflection averaging preserves that zero-section prescription. The original quotient framing is retained; no orthonormalization or change in its homotopy class is necessary. The helper's statement retains the one-dimensional sheet cases and zero-rank blocks.

## Source reading actually performed

Read the full texts locally with PyMuPDF (`fitz`), not snippets:

- `/tmp/batch14-sources/milnor.pdf`, PDF pages 78-89, including Lemma 6.7, its plane isotopy, all of Lemma 6.8 on printed pp. 74-77, collar construction, and completion of the framed exponential tube. The proof's reflection averaging and equality on Euclidean tube overlaps are the source-grounded construction. Source URL: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf .
- `/tmp/batch14-sources/ranicki.pdf`, PDF pages 146-147, printed pp. 139-140: the complementary tangent/normal splitting, smooth collar, disk extension, extended framing and final invocation of Milnor's isotopy. Source URL: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro .

Read the actual library supplier statements/proofs for ambient tubular neighbourhoods, product charts, proper Euclidean embedding, Euclidean tube, smooth inverse function theorem, geodesic existence/uniqueness, local isometries preserving geodesics, and the relevant batch-14 clean-disk/framing consumers. Exact Statement/Definition quotes are included in the proposed contracts. In particular, the ambient tubular theorem requires a closed boundaryless submanifold and gives no asserted sheet-adapted derivative; the new argument does not misapply it to a cornered disk. It instead proves the local exponential construction and uniform shrinking.

## Surgical definition clarification and actual consumers

Replace `smooth on its strata and in fixed corner charts` in `def-whitney-disk-and-clean-framed-whitney-disk` by `smooth as a map from a manifold with corners, meaning that it admits a smooth local extension near every source point, with the fixed product corner charts`.

Separately smooth strata do not alone imply a smooth tube or even a smooth disk tangent bundle along an edge. This clarification makes the standard intended notion explicit; it does not change the Whitney dimension range, sign conditions, disk-existence hypotheses or framing obstruction. Direct item consumers of this Definition on the current disk are:

- `def-local-whitney-move`: takes a clean framed disk as input; its existing adapted-tube reference is now supplied by the theorem/helper.
- `lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range`: step 1.1 constructs a genuinely smooth clean collar from corner product sectors and inward sheet-normal vectors and smooths relative to that collar. Step 2.1 keeps that collar fixed. Thus its supplied disk already has the clarified joint smoothness; no range weakening or new proof route is needed.
- `lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range`: uses smooth disk normal projections and radial transport on the supplied smooth disk; smooths its frame extensions relative to fixed collars. The clarified notion makes its existing smooth-bundle input explicit.
- `lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses`: similarly consumes a smooth disk and supplies smooth relative frame extension, without changing the disk.
- `thm-whitney-move-removes-a-cancelling-pair-of-intersections`: proposed proof explicitly applies the new smooth adapted-tube supplier.

The new helper is an additional direct consumer. No already published direct consumer was found in this exact Definition scan. Indirect existence consumers retain their existing smooth relative collar output; no claim restriction is proposed.

## Same-agent bounded audit and checks

One source/prerequisite audit and one constructive proof pass were performed. Self-audit checked: local extension at every edge/corner, embedded extension from rank and compactness, actual quotient-compatible tangent lifts, positive metric extension, uniform geodesic domain, normal tube global injectivity, corner-only tube overlaps and antipodal Euclidean agreement, cutoff equal to the glued metric near entire compact collars, involution fixed-point uniqueness, normal projection preserving both sheet flags, local sheet inverse equality and uniform exclusion of other branches, and rank-zero cases. A local correction removed unnecessary orthonormalization so the supplied quotient framing and fixed representatives are retained.

After the final proposal edits, these actual read-only focused checks passed:

```
node tools/tsx-run.mjs tools/precheck.mts research/R-owner-adapted-whitney-tube-proposal.lemma.md research/R-owner-adapted-whitney-tube-proposal.theorem.md
```

Output: both direct proofs PASS; 2 checked, 0 failing.

```
node tools/proof-layout.mjs research/R-owner-adapted-whitney-tube-proposal.lemma.md research/R-owner-adapted-whitney-tube-proposal.theorem.md
```

Output: 2 items, 10 steps, 0 defects.

These are local author checks, not an independent mathematical audit. No remaining exact local prerequisite is known under the clarified standard smooth-disk hypothesis. Root may personally adjudicate exact proof objections within the bounded loop; no additional reviewer wave is proposed.

## Integration artifacts

- `R-owner-adapted-whitney-tube-proposal.lemma.md`: full new helper source.
- `R-owner-adapted-whitney-tube-proposal.theorem.md`: full theorem proposal, unchanged Statement, new step 1.1 and scoped dependencies/fact.
- `R-owner-adapted-whitney-tube-proposal.contracts.json`: exact supplier quotes and numbered derivations for both proofs.
- `R-owner-adapted-whitney-tube-proposal.manifest-delta.json`: one helper insertion before the theorem, proposed theorem row replacement and the Definition text replacement. Apply relevant metadata to the current batch manifest and corresponding current plan entry; merge against final native output rather than overwriting unrelated native edits. Relevant library A-page list/prose must place and mention this helper before the move theorem.

The native theorem snapshot's Statement was intentionally left unchanged. The theorem contract retains actual F5-F7 supplier quotes but replaces unsupported F1-F4 tube claims by the new exact helper statement. Root must regenerate any hashes/evidence through the real supported tools after canonical integration; this proposal fabricates none.
