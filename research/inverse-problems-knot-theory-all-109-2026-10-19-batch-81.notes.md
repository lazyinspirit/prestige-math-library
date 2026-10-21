# Batch 81 authoring notes — ribbon knots and the slice-ribbon problem

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: beta · batch: 81 · scheduled dependency level: 4 · scheduled prerequisite: batch 74  
Original scheduling input: `11b27fc496fa6bd8a5c6eb791a0caba52b2b03bb4df536ec3cba33e89dbfadee`

## Controlling plan and inventory

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner direction, the exact batch task and dependency-order task, the complete KT-28 design section, `research/plan-spec.json`, and the generated batch dependency-level file before authoring.
- KT-28 in `research/plan-knot-theory-track.md` lines 844–868 controls the claim inventory and proof route. Its design names four A items and two B items, defines ribbon knots through ribbon immersions, asks for the local push-in proof, and requires the no-maximum banded-link movie convention. `plan-spec.json` matches the page IDs, title, order, category, companion and required page, but has empty `items` arrays; those are scaffold placeholders, not a conflicting inventory.
- `plan-spec.json` and the prerequisite map declare `thm-knot-concordance-is-an-abelian-group` as a direct dependency of the local-resolution lemma and ribbon-implies-slice theorem. That edge is retained in the manifest. The actual supplier carrier is now present, but its topological branch is incomplete (details below). This is not treated as a complete supplier.
- The assigned inventory is `def-ribbon-disk-and-ribbon-knot`, `lem-ribbon-singularity-local-resolution`, `op-slice-ribbon-conjecture`, `thm-ribbon-knot-is-smoothly-slice`, `ex-knot-kt-28-worked-cases`, and `cex-knot-kt-28-boundary-case`. There are four A items and two B items, below the 100-item cap.

## Item levels and dependency changes

The manifest retains the plan-declared dependencies and all direct item dependencies. Levels count suppliers anywhere in the active run, not only within this assigned pair. The definition's highest in-run supplier is in batch 74 at level 5, so its level is 6; each later level follows from the maximum supplier level:

| Level | Item | Direct in-batch suppliers |
|---:|---|---|
| 6 | `def-ribbon-disk-and-ribbon-knot` | none |
| 7 | `lem-ribbon-singularity-local-resolution` | `def-ribbon-disk-and-ribbon-knot` |
| 7 | `op-slice-ribbon-conjecture` | `def-ribbon-disk-and-ribbon-knot` |
| 8 | `thm-ribbon-knot-is-smoothly-slice` | definition and local-resolution lemma |
| 9 | `ex-knot-kt-28-worked-cases` | definition, local-resolution lemma and theorem |
| 9 | `cex-knot-kt-28-boundary-case` | definition, local-resolution lemma and theorem |

The example's full Fox-coloring proof needs direct suppliers `def-quandle-and-knot-coloring` and `lem-dihedral-operation-is-a-quandle` from batch 63, `lem-dihedral-fox-coloring-count-is-reidemeister-invariant` from batch 103, and the connected-sum definition from batch 60. These required edges remain in the batch-81 manifest. Thus the initial batch-level scheduling input's prerequisite list `[74]` does not describe every direct supplier batch; batch-level reconciliation must include 60, 63, 74 and 103. The original batch assignment is not edited. The item-level level remains computed from the full run DAG, not the batch level.

## Actual supplier inspection and unresolved prerequisites

- Batch 74's required A-page file `library/knot-theory/smooth-and-topological-knot-concordance.md` is absent. Its draft item carriers are present and were read where used. The A page cannot be verified as a current page prerequisite.
- The current body of `items/thm-knot-concordance-is-an-abelian-group.md` was re-read in full after discovering it had appeared since the earlier inventory. The smooth group branch is argued. Its `[L1]` explicitly leaves the locally flat topological connected-sum compatibility unresolved at `thm-locally-flat-codimension-three-arc-unknotting`; therefore the theorem's combined smooth/topological statement does not yet supply its full declared interface. The batch-81 geometric proof does not use the group operation, but the direct dependency is retained per the controlling map. The exact affected item edges and evidence are in `batch-81.cross-batch-dependencies.json` and the proof contracts.
- **Post-record supplier refresh:** a current-input audit found that batch-74 carriers `lem-smooth-and-topological-slice-genus-minima-exist` and `lem-smooth-and-topological-knot-concordance-is-an-equivalence-relation` changed after the six Step-1 escalations were recorded. Both current full statements and proofs have now been reread. The minima lemma supplies nonemptiness by a radial graph, local-flatness of the smooth graph, and least genera by a finite initial segment of `N0`; the equivalence lemma proves reflexivity, symmetry, transitivity and representative independence in both categories. They do not remove the missing required page or the group theorem's unresolved connected-sum compatibility branch. Their current bodies lie in the transitive input closure of all six items, so a direct `itemHash` comparison reports the six stored hashes are no longer current. Per the explicit “never overwrite an escalation” instruction, the six original `owner:false` escalations are preserved unchanged; the owner must refresh their hashes after reconciling these updated suppliers. They are not described as current-input hash-bound records.
- The definition uses the required smooth immersion in `S^3`, with proper and interior preimage arcs for each transverse double arc. The local lemma separates the interior arcs by a finite collar-height construction and proves injectivity, immersion, properness and the exact boundary. This establishes ribbon immersion ⇒ smooth proper disk locally.
- The plan also requires an equivalent radial no-maximum disk/movie convention. The actual batch-74 `lem-general-knot-reverse-mirror-sum-is-ribbon` statement and proof were inspected: they construct a smooth proper disk whose radial Morse indices are only 0 and 1. That does not, by itself, prove the reverse conversion to the A-page ribbon immersion. A complete local theorem with input “proper disk in `B^4` with radial Morse indices only 0 and 1” and output “ribbon immersion in `S^3` with the stated preimage arcs” is missing. This affects the ribbon assertion in `ex-knot-kt-28-worked-cases` and the design's claim that the two conventions are equivalent. Proposed placement is a new A-page intermediate theorem after the definition and before B examples. No conversion proof, supplier excerpt, or acceptance is invented.
- The slice-ribbon open problem is formulated in the immersion model only. It claims no converse proof. The current 2026 peer-reviewed Hom–Park article is identified by its full author-hosted arXiv text and the publisher page; the publisher full-text route was blocked for the fetch checker, so the author version was used for the full-text source stamp while the published-version date was checked separately.
- The trefoil counterexample has a separate full-AC branch: the published nonsliceness supplier assumes full AC; the proof records full AC ⇒ ACω before applying ribbon ⇒ slice. No ACω/full-AC conflation is made.

## Authoring summary

- `def-ribbon-disk-and-ribbon-knot`: complete immersion definition and band/no-maximum movie terminology; links follow the complete Definition. Its equivalence obligation is explicitly left unresolved rather than asserted as proved.
- `lem-ribbon-singularity-local-resolution`: explicit height-separation proof using a collar, finite disjoint bump supports, a uniform scale, and compactness; the construction is choice-free. The plan-declared concordance-group supplier is retained but escalated because its topological branch is incomplete.
- `thm-ribbon-knot-is-smoothly-slice`: two-step proof of the smooth proper disk and genus-zero conclusion under the library's explicit ACω slice-genus convention. It asserts only ribbon ⇒ smooth slice.
- `op-slice-ribbon-conjecture`: uninterrupted disk formulation, dated status and source review. The Zenodo attachment is conditional under `H_Q`, leaves additional clauses unproved, and does not resolve the conjecture; the metadata/attachment mismatch is noted.
- `ex-knot-kt-28-worked-cases`: complete Fox 3-color transfer calculation and coloring-count obstruction establish nontriviality; the radial disk supplier establishes smooth sliceness. The ribbon clause remains escalated because no-maximum disk ⇒ ribbon immersion has not been proved.
- `cex-knot-kt-28-boundary-case`: complete contradiction under full AC from the trefoil nonsliceness supplier and full-AC ⇒ ACω. Its statement and references remain uninterrupted.

The proof-contract file carries exact quotations from actual suppliers, every numbered step and its inputs, boundary dispositions, the finite Fox 3-color calculation, and explicit unresolved obligations. No excerpt is supplied for the unresolved radial conversion. All page files are YAML frontmatter only with empty Markdown bodies; no summary or `page_layout` was authored.

## Full-text source reading and disposition

Eight full-text sources are recorded with per-result dispositions in `batch-81.source-coverage.json` and `batch-81.coverage.json`:

- Arunima Ray, *Slice Knots and Knot Concordance*, complete 29-page lecture-note PDF; §1.1, Definitions 1.4–1.5, Proposition 1.5, Figures 4–6, Proposition 1.6 and Conjecture 1.7, printed pp.3–5.
- Brendan Owens, *Knots and 4-Manifolds*, complete relevant Lecture 1 pages; PDF pp.2–3, ribbon double arcs, interior-arc push-in and radial movie.
- Charles Livingston, *A Survey of Classical Knot Concordance*, complete 29-page chapter; §2.1, Definition 2.3 and ribbon/slice discussion, printed pp.322–323; §10, Problem 1, p.342.
- Daniel Brejevs, complete 134-page thesis; §2.2 and Figure 2.1, band move and square-knot presentation, printed pp.16–17.
- Jennifer Hom and JungHwan Park, complete 16-page author-hosted arXiv v1 PDF at `https://arxiv.org/pdf/2507.20455`; §1, printed pp.1–3, general converse and restricted results. The official Springer version-of-record page was inspected in the browser and gives publication date 18 June 2026, but the source-fetch tool got a cookie-consent wall after an initial failure plus five retries. Those exact failed attempts are preserved as `publisher_fetch_history`; the full arXiv version was then stamped successfully. No source was dropped.
- The 71-page PDF attached to Zenodo record 21752847, full relevant text inspected: Abstract, Definition 0.1, Assumption 10.5, Remarks 10.11–10.12, Theorem 10.26, Corollary 10.27 and conclusion. It proves only a conditional reduction and is not used as a proof of the open problem.
- Józef H. Przytycki, complete 28-page paper on 3-coloring; §1 and §2, printed pp.2–3 and 10–11.
- J. Scott Carter, complete 31-page survey; §§2.1 and 2.3, printed pp.3–4 and 8–9.

`node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-81.source-coverage.json --stamp` finished with 8/8 full-text sources verified and resolved (1 newly stamped on the alternate arXiv route). The failed publisher route is retained; no source is marked dropped.

## Scoped checks and handoff

- `node tools/proof-layout.mjs` on the six explicitly changed item files: **6 items, 12 numbered steps, 0 defects**.
- `node tools/proof-contract.mjs ... --strict --json`: **6/6 contracts checked, 0 errors, 0 warnings**.
- `node tools/coverage-checklist.mjs ... --json`: **1 A page, 20 harvested source results, 0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage ...` in check mode: **8/8 sources fetch-verified, 0 documented drops**. Stamp mode previously verified 8/8, with the Hom–Park alternate arXiv full-text route newly stamped after the publisher cookie-wall failures.
- Focused `node tools/depcheck.mjs --items-file /tmp/kt81-item-selection.json --json`: **6 item checks and 2 page checks, 0 errors, 0 warnings**; dependency closure covered 1,803 items and 454 pages.
- Focused statement-first inspection of the six authored carriers: **6 items, 0 defects**. The statement, definition, open-problem, example and refuted-statement sections are uninterrupted; references follow those complete sections. Duplicate proof-only reference lists were removed while all required supplier links remain in Facts & Assumptions.
- `node tools/item-dependency-levels.mjs check --run ...` exits 1 for **69 run-wide errors** in unrelated empty scaffold inventories and stale labels. None of the six batch-81 items appears among the errors; their current labels are 6, 7, 7, 8, 9, 9 and match the recomputed run DAG.
- `node tools/batch-dependency-levels.mjs check --run ...` exits 1 with the existing cycle `67 -> 75 -> 67`. The batch-81 schedule input remains unchanged. Direct batch-81 item suppliers span batches 60, 63, 74 and 103, while the original assignment lists only 74.
- The two authored page files contain YAML frontmatter only and empty bodies. No summary or `page_layout` field was authored; the engine adds `compact-v1` in its mechanical post-authoring transition.

All six Step-1 records are `escalated`, not `ready`: the required batch-74 page is missing; the plan-declared group theorem has an unresolved topological branch; the radial no-maximum disk-to-ribbon-immersion conversion is missing for the definition/example interface; and the batch scheduling input does not include all direct supplier batches. The records include the examined direct dependencies and exact evidence. These are authoring handoffs, not independent review, acceptance, gate approval or publication.

The six records are `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-<item-id>.json`. Every record has `owner:false` and `decision: escalated`; none overwrote an earlier record. Their hashes are stale after the transitive batch-74 supplier edits documented above. The definition and worked example name the missing proposed A-page theorem `thm-ribbon-no-maximum-disk-implies-ribbon-immersion`; the local-resolution lemma and smooth-slice theorem name the incomplete direct supplier `thm-knot-concordance-is-an-abelian-group` and its exact missing branch `thm-locally-flat-codimension-three-arc-unknotting`; the open problem records the absent required page and definition-interface gap; the trefoil counterexample records the missing required page and the incomplete group theorem as a transitive obligation. Exact direct item dependency arrays and the hashes as initially recorded remain in the files themselves.
