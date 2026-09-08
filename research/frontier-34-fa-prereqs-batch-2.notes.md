# frontier-34-fa-prereqs — batch 2 scaffold audit

**VERDICT: BLOCKED / NOT READY FOR AUTHORING OR SPLICE.**

This is a blocked scaffold, not a completed proof/source-closure certificate. All 62 design scope entries remain in the manifest (the Lomonosov boundary has the corrected remark prefix); four required support items were added. Explicit arrays record known necessary dependencies, not a claim that the blocked theorem interfaces are sufficient. No published files, plan, design, tasks, runtime state, or other batch files were edited.

## Structural traversal evidence — initial snapshot before concurrent batch updates

Read all run batch manifests for item-ID resolution, current plan requires, and all authored frontmatter for graph traversal. Canonical on-disk item relations supersede plan relations. Traversed deps, justified_by, and non-remark forward_refs; this is a structural audit only. The complete transitive mathematical statement/proof audit is **not finished** and cannot be inferred from these counts.

```json
{
  "page_closure_count": 177,
  "item_closure_count": 998,
  "missing_page_ids": [],
  "missing_item_paths": [
    [
      "thm-reflexive-iff-unit-ball-weakly-compact",
      "thm-banach-alaoglu"
    ],
    [
      "thm-reflexive-iff-unit-ball-weakly-compact",
      "thm-goldstine"
    ]
  ],
  "recorded_dependency_paths": [],
  "owned_id_collisions": {},
  "foundations_catalogue_in_page_closure": false,
  "raw_cycles_when_including_justified_by": 360,
  "raw_cross_page_B_edges_including_justified_by_and_forward_refs": 112,
  "interpretation": "Raw cycles include schema-required justified_by backedges and are not evidence of dependency circularity. B-edge candidates include legacy forward_refs and unverified first-home assignments and are not established fatal defects. No clean-cycle or B-leaf audit certificate is claimed from this exploratory traversal."
}
```

## Dispatch and design reconciliation

Read CLAUDE.md and README.md completely; SCHEMA.md and WORKFLOW.md completely; the generated batch task and generic scaffold task; current batch manifest; FA-10 and FA-11 complete design sections; relevant inherited-boundary, proof-seam, convention, choice-ledger, and source-acquisition passages. The design whole-file read was truncated and is not claimed as a full-file reading. The assigned sections were reread in bounded output. The starting owned coverage and notes did not exist. The plan already had unrelated modifications; those were left alone. Active run identity was checked against `.autopilot/frontier-34-fa-prereqs/` and Git HEAD `12927d03a` (`plan: add frontier prerequisite scaffolds`); the displayed status report was stale and was not treated as evidence that drift review was still incomplete.

Current plan assigns FA-10 at 288.065, B at 288.066, FA-11 at 288.067, B at 288.068. Its predecessor-chain requires edges reach the broader FA-6–FA-9 and MT-14/MT-16 dependencies named in the design. Thus the compact plan edges are not a substantive design conflict. Unlike the historical prose introduction, MT and FA-1–FA-7 now have authored published content. All four owned plan inventories remain empty, as expected before tool-managed splicing. The supplied L38 design pointer was only a summary-row mention; the actual FA-10 heading precedes line 809. No page order or requires was changed.

The following design issues remain binding obligations, not permission to remove mathematics:

* The FA-11 UBP-first coordinate-continuity route is circular. UBP requires bounded operators. Add the coefficient-series Banach-space construction, use bounded inverse to prove bounded partial sums, then use UBP if desired. This changes the proof-local choice accounting from the unsupported AC_omega assertion to inherited DC for this implementation.
* Clarkson inequalities are absent from the current plan (case-insensitive `rg` search returned no matches). The two exponent ranges are now reserved before the uniform-convexity corollary. Their scalar proof and full dependency closure are not yet verified.
* The published arbitrary-measure Lp duality theorem states **real** functionals and explicitly assumes countable choice. It is adequate for the real canonical-bidual argument at both p and q. It is not a complex theorem. The complex Lp case remains open in the full scope; the real statement in the manifest is a verified subcase, not an approved reduction of the commission.
* The published `thm-complex-dual-of-ell-one-is-ell-infinity` is complex-only and has no conjugation in its bilinear pairing. Use `cor-ell-p-duality-by-counting-measure` for the real case. Sequence indices are zero-based, including in the James-space translation.
* FA-10's two Hilbert examples intentionally point to later FA-13. Their exact definition/Riesz/parallelogram IDs are not yet available in the owned evidence. The examples remain blocked until exact allowed forward_refs can be registered and audited. No A theorem may depend on them. The norm-attainment example has `deps: []` pending those exact forward references; the provisional James edge was removed because it does not supply the designed Riesz route.
* The Lomonosov boundary is described as an unproved leaf but given a cex prefix. The manifest now maps design `cex-complex-bishop-phelps-for-general-convex-sets` to unused `rem-complex-bishop-phelps-for-general-convex-sets`, with kind remark and `proved_here:false`. Its exact primary statement, source URL, and external_dependency record remain missing, so it is not ready to materialize. Enflo and Szankowski also need exact full-source-backed remark metadata. None is a permitted supplier.
* The James norm is the **real cyclic** quadratic-variation norm of BS Definition 2.75, including the closing term and factor 1/2. Neither the common noncyclic norm nor a merely equivalent norm licenses the prescribed noncanonical isometry.
* BS 3.4's unit-ball theorem is not by itself the full relative three-way Eberlein–Smulian theorem. The supplied separable lemmas establish only part of the requested route. Do not infer metrizability of an arbitrary nonseparable weakly compact set.

## Fatal blockers and owning obligations

**F1 — Predecessor proof/axiom closure remains open; IDs now resolve across the run.** At initial traversal, `thm-reflexive-iff-unit-ball-weakly-compact -> thm-banach-alaoglu`, `thm-reflexive-iff-unit-ball-weakly-compact -> thm-goldstine`, and `thm-milman-pettis -> thm-goldstine` terminated at empty batch-1 reservations. At final reread, concurrent batch 1 had 19/9/16/7 items and supplied all three previously missing names, including `def-weak-topology-on-a-normed-space`. Their exact current statements and strategies were reread. The weak topology is the scalar-linear initial topology; Alaoglu is for any normed space assuming BPI; Goldstine is weak-star density of the canonical closed unit ball in the bidual closed unit ball. Those statements fit the intended immediate use. They are still proposed interfaces, not a completed transitive proof certificate: batch 1 explicitly flags the inherited Tychonoff audit and a stronger AC hypothesis on the published Hahn–Banach chain. The consumers must not report the intended BPI/HB cost as a verified implemented cost. Batch-1 notes did not yet exist on this final reread. The batch-only content-policy command still reports seven missing-supplier errors because its scope excludes that unspliced manifest; those errors now mean absence from the checker scope/on-disk authored items, not missing IDs across the run. No manifest import by assertion or certificate of batch-1 closure is made.

**F2 — General James hard direction not source-closed.** The exact quantified statements of the two proposed James lemmas remain unavailable. Megginson's author page and Springer access attempt do not supply full text. Moors's `New2.pdf` is a real paper/talk PDF, but its stated purpose and Theorem 9 restrict the result to separable sets; Theorem 10 assumes weak-star sequential compactness of the dual ball. Neither proves the general commissioned result. It is not substituted. Recover and fully read Megginson's complete general proof, then expand its prerequisites before the consumer. This also blocks norm-attainment examples relying on James. No lemma title is being accepted as a mathematical interface.

**F3 — Eberlein–Smulian prescribed full proof unavailable.** The EuDML page failed via the web tool; the Digizeitschriften purported PDF redirected to its home page. BS and Brezis were inspected as corroboration, but do not replace the Whitley route with its full three-way relative statement. Add the finite-test recursive bidual norming/closure lemma after verifying the source. The theorem currently lists necessary but insufficient dependencies and is marked BLOCKED.

**F4 — Further full-proof and boundary evidence missing.** Schur gliding humps; asymptotic-center existence/uniqueness; Clarkson's scalar inequalities; the real Bishop–Phelps support-cone lemma; full basis/AP and ba source treatment; James-space completion/tail lemmas and its dual/bidual/isometry calculation; the finite-dimensional geometric input for Dvoretzky–Rogers; Lomonosov, Enflo, and Szankowski exact primary boundaries. All remain in the inventory, not dropped or converted to unsupported claims. The James-space single bidual lemma must be decomposed into every necessary sourced estimate before approval. The full Müger PDF failed repeatedly; its short alternative was reharvested only for A.4 and is **not** a certificate for the missing B.2.1 supplement.

**F5 — Fetch evidence fails for every retained source.** The shell has DNS failures (`curl: (6) Could not resolve host`, Node `EAI_AGAIN`) for all three retained document hosts. The web tool opened full PDFs, allowing the bounded reading recorded in coverage, but that is not the required downloaded-content hash stamp. Source-fetch stamp mode produced 0/4 stamps; no manual stamp was fabricated. URL sweep and result backing therefore fail. Do not clear these gates or publish on the basis of web snippets or metadata. Full-document reading of a named theorem and the mechanical source-fetch evidence are distinct obligations.

**F6 — Closure certificate incomplete.** The initial exploratory traversal covers all four requires closures and item relations reachable from the 66 owned roots, but not a completed semantic review of all items on every inherited page. Every missing/ambiguous supplier and unresolved proof above blocks the transitive certificate. Canonical page and published-content checks passed only for the existing tree, not this unspliced manifest. The Foundations catalogue was absent from the explored page closure and no recorded item was reached along the explored relation graph. `extcheck` additionally passed its current-tree boundary checks. Do not advertise those results as a complete semantic audit of all run content.

## Necessary support additions and page capacity

Registered, in proof order:

1. `lem-clarkson-inequalities-for-real-and-complex-lp`, before the Lp uniform-convexity corollary, on FA-10. Both exponent inequalities are retained. Full scalar/measure dependency registration remains blocked by source reading.
2. `lem-schauder-coefficient-space-is-banach`, between the basis definition and coordinate-continuity theorem, on FA-11. Depends on the basis definition and finite-dimensional coordinate continuity; supplies a bounded summation bijection for bounded inverse.
3. `lem-finite-range-sequences-are-uniformly-dense-in-ell-infinity`, before the charge-integral extension proof, on FA-11. Gives explicit scalar quantization in sup norm; ordinary measure-theory simple-function density is not a substitute.
4. `thm-existence-of-a-shift-invariant-mean-on-bounded-sequences`, before the properness of the countably-additive ba subspace, on FA-11. Prove directly from the earlier analytic HB machinery. The published `ex-banach-limit-from-hahn-banach` and `lem-banach-limit-properties` are B-only suppliers and cannot be used across pages. This new independently proved A interface does not modify or rehome the published items.

Current A counts are 25 and 28, below the plan's 60-item ceiling; B counts are 6 and 7. No new prerequisite A/B pair is presently demonstrated necessary: these four missing supports fit the authorized pairs. Full expansion of the blocked long proofs may change that assessment. If it crosses 60, record a complete split pair proposal and block the consumer; plan/design are outside this dispatch's write authority. Do not pad or delete results.

## Source acquisition and exact reading limits

* BS original URL `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf`: web 403; shell DNS failure. Same 8 June 2017 manuscript recovered at `https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf`, web identified 452 PDF pages. Coverage retains original_url. Complete named results actually harvested: Theorem 2.71 (pp.89–91), Theorem 2.73 (p.93), Definition 2.75 (p.94). Other §3.4 and James-space windows were exploratory and are not claimed as full proof reading.
* Brezis `https://math.jhu.edu/~sire/brezis.pdf`: web identified full 603-page document. Complete named results harvested: Proposition 3.20, Theorem 3.26, Corollary 3.27, uniform-convexity definition, Theorem 3.31. Real convention is explicit. Other nearby text is not claimed as harvested in full.
* Müger original `https://www.math.ru.nl/~mueger/functionalanalysis.pdf`: repeated web timeout/error, including a query-parameter retry. Alternative `https://www.math.ru.nl/~mueger/functionalanalysis_short.pdf`: web identified 190 PDF pages; original_url retained, new locators and contents supplied. Theorem A.4 with all seven conditions and proof was read completely in overlapping windows. The contents list is not proof that omitted supplements are in this short file.
* Megginson `https://websites.umich.edu/~meggin/ibst.html` is the author's book description, not full mathematics. `https://link.springer.com/content/pdf/10.1007/978-1-4612-0603-3.pdf` redirected to a book landing page. No full-text acquisition is claimed. The complete author description locates the detailed general James reflexivity proof in §1.13, Eberlein–Smulian in §2.8, James weak compactness in §2.9 (using §1.13), and support points/subreflexivity in §2.11. This corrects the design's inadequate §§2.8–2.9 citation; the description supplies bibliographic locators only, not mathematical proof evidence.
* Whitley `https://eudml.org/doc/161575` failed. `https://www.digizeitschriften.de/download/pdf/235181684_0172/log27.pdf` redirected to the site's home page. Neither is fetch evidence for the 3-page paper; source-fetch-check's generic four-page PDF minimum will also require workflow handling if the actual three-page primary paper is recovered, rather than pretending the primary article has four pages.
* Moors `https://www.math.auckland.ac.nz/~moors/New2.pdf` was inspected to test replacement adequacy. Its separability or dual-ball sequential-compactness assumptions make it inadequate for the requested general James proof. It is not a retained supporting source; no general theorem has been harvested from its title.
* Two supplementary basis-note fetch attempts failed: Columbia RA2.pdf returned 404; TCD notes_MA2223.pdf returned a web error. These attempts do not back the coefficient-space repair.

The coverage file has two independent treatments per A page and only 13 honestly harvested rows. This is a partial harvest with explicit open_obligations, not coverage for all 66 items. No full-text claim from the historical prose harvest has been inherited without rechecking it.

## Checks actually run

| command | observed result | limitation |
|---|---|---|
| `node tools/coverage-checklist.mjs research/frontier-34-fa-prereqs-batch-2.coverage.json --require-destination` | exit 0; 2 pages, 13 harvested rows, 0 errors/warnings | checks harvest structure, not all-item source/proof completeness |
| `node tools/manifest-deps.mjs research/frontier-34-fa-prereqs-batch-*.pages.json` | exit 0; 276 items, 0 missing arrays | initial whole-run snapshot; final rerun passed with 556 items as other Betas wrote concurrently |
| `node tools/content-policy.mjs --manifest-only research/frontier-34-fa-prereqs-batch-2.pages.json` | exit 1; 66 scoped items, 7 missing dependency errors | same seven errors on final rerun; see F1 for supplied-but-unspliced predecessor interfaces |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; 1486 pages, 15116 planned items; existing-plan warnings | owned inventories remain empty in plan, so this does not validate their item graphs |
| `node tools/extcheck.mjs --quiet` | exit 0; 63 existing-tree warnings | no authored owned pages yet; not approval of blocked reservations |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-fa-prereqs-batch-2.coverage.json --stamp --timeout-sec 10` | exit 1; 0/4 fetch-verified; four EAI_AGAIN failures | no stamp written |
| `node tools/url-sweep.mjs --coverage research/frontier-34-fa-prereqs-batch-2.coverage.json --out /tmp/frontier-34-fa-prereqs-batch-2-url-liveness.json --timeout-ms 5000 --fail-on-dead` | exit 1; 0/3 live, three DNS failures | temporary output avoids writing an unauthorized run-wide artifact |
| `node tools/source-backing.mjs --coverage research/frontier-34-fa-prereqs-batch-2.coverage.json --liveness /tmp/frontier-34-fa-prereqs-batch-2-url-liveness.json` | exit 1; nine included results lack mechanically openable backing | same URLs remain in coverage; no mathematics deleted |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-fa-prereqs-batch-2.coverage.json` | exit 1; four unstamped source entries | confirms source gate remains blocked |

Final targeted Python check passed: all 62 design scope entries are preserved under the documented Lomonosov prefix correction; four support entries added; 66 unique IDs; explicit dependency arrays; every same-page dependency precedes its consumer; A/B counts 25/6/28/7. Coverage checklist was rerun unchanged at 13 rows, zero errors/warnings. Repository-wide `rg` found no prior occurrence of the new remark ID. These are structural checks only.

No authoring, precheck, rendering, judge, publication, plan splice, or workflow transition was run. No fabricated verification/provenance stamps were added to blocked items.

## Resume obligations

Reread the current manifest, coverage, these notes, the active predecessor manifests, and exact published dependency statements after handoff. Recover the prescribed full texts and mechanical fetch environment first. Complete the source-anchored proof decomposition for F2–F4, resolve F1 with actual earlier supplied items, register all hypotheses and source metadata, and finish the full transitive semantic audit. Preserve every design item and its scalar, norm, choice, and leaf-boundary warnings. Re-run the failed checks only after the corresponding evidence changes. Both pairs remain blocked and unpublishable.
