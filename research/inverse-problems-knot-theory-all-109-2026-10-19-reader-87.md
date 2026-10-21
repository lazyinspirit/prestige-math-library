# Step 3a Reader Report — Batch 87

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `87`

## Opened inventory

Assigned pages:

- `library/knot-theory/vassiliev-invariants-and-chord-diagrams.md`
- `library/knot-theory/vassiliev-invariants-and-chord-diagrams-examples.md`

The A-page prerequisite `library/knot-theory/crossing-signs-writhe-and-linking-number.md` was also opened.

Assigned items, opened in manifest order:

- `def-singular-knot-and-vassiliev-derivative`
- `def-framed-chord-diagram-and-four-term-relations`
- `rem-weight-system-integration-proof-boundary`
- `lem-vassiliev-4t-from-singular-reidemeister-move`
- `lem-vassiliev-framing-one-term-relation`
- `thm-vassiliev-invariant-induces-weight-system`
- `cex-knot-kt-34-boundary-case`
- `ex-knot-kt-34-worked-cases`

Relevant supplier items opened to check the assigned proofs and examples:

- Algebra and choice: `def-ring`, `def-binary-operation`, `def-commutative-ring`, `def-choice-function`, `def-axiom-of-choice`, `def-countable`, `def-countable-choice`.
- Link and crossing conventions: `def-smooth-embedding`, `def-euclidean-spheres-and-closed-balls`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-oriented-reidemeister-moves`, `def-regular-oriented-link-diagram`, `lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy`, `thm-oriented-reidemeister-equivalence-theorem`.
- Linking and framing chain: `def-normal-and-conormal-bundles-of-an-embedded-submanifold`, `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`, `def-framed-knot-self-linking-and-seifert-framing`, `lem-framed-knot-push-off-self-linking-well-defined`, `alg-oriented-linking-number-from-diagram`, `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-oriented-linking-number-scan-terminates-and-is-correct`, `thm-linking-number-is-invariant-and-writhe-is-not`, `lem-blackboard-push-off-has-two-mixed-crossings-per-crossing`, `thm-blackboard-framing-self-linking-is-writhe`, `def-mod-two-intersection-number`, `thm-mod-two-intersection-number-is-homotopy-invariant`.

## Source evidence opened

- Bar-Natan and Stoimenow, *The Fundamental Theorem of Vassiliev Invariants*, §1.1, PDF pp. 3–5: singular finite differences, the 4T and framing-independence conditions, and the symbol theorem.
- Chmutov, Duzhin, and Mostovoy, *Introduction to Vassiliev Knot Invariants*, §§3.4, 3.5.1, 4.1, and 4.2.1–4.2.2, printed pp. 70–75 and 89–94: chord diagrams and representative independence, framing singularities, endpoint-slide form of 4T, the 1T proof, and the framed case.
- Chmutov and Lando, “Mutant knots and intersection graphs,” §2, PDF pp. 2–3: the rational Kontsevich integration theorem for unframed weight systems.
- Elhamdadi, Hajij, and Istvan, *Framed Knots*, §3, PDF pp. 7–9, and §6, PDF pp. 15–16: framing integer, its relation to push-off self-linking, and the winding description of framing classes.

## Review and edits

The A-page definitions preserve the finite-difference, crossing-sign, framing-zero, and coefficient-ring conventions used by the suppliers. The ordinary chord-diagram modules, 4T endpoint-slide convention, isolated-chord 1T convention, and auxiliary role of framing-zero marks are consistent. The integration-boundary remark's rational theorem is supported by the opened Chmutov–Lando passage; its characteristic-zero scalar-extension proof is finite-dimensional linear algebra.

The 4T lemma's resolution signs give
`(a-b)-(c-d)+(c-a)-(d-b)=0`. Its representative-independence argument treats added double-point and framing-zero events as extra singularities, as required by the type bound. The B-page curl is a positive Reidemeister-I move under the stated determinant convention, so the refuted writhe claim is correctly presented as false. The worked example's positive-minus-negative mixed-crossing derivative is `+1`, its self-crossing derivative is `0`, and its two-crossing difference cancels.

One material repair was made in `items/lem-vassiliev-framing-one-term-relation.md`, proof step 1.2. The original proof asserted that a framing turn contributes a clasp and changes self-linking without establishing the winding-to-linking normalization. The repair gives the tubular meridian calculation: the framing angle degree is the meridional winding, and a positive meridian links the core once under the item's orientation convention. It adds the exact external framing normalization and locator as [F9], and narrows the Chmutov citation to §4.2.2, p. 94, which directly supports the framed no-1T distinction. The affected proof contract now records [F9] and the updated derivation. There was no stale `verification.judge` entry in the item.

Validation after the final item edit and contract update:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-vassiliev-framing-one-term-relation.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-vassiliev-framing-one-term-relation.md` — pass, direct.
- `node tools/proof-layout.mjs items/lem-vassiliev-framing-one-term-relation.md` — 1 item, 3 steps, 0 defects.

## Diagrams

- The 4T diagram's arrow depicts the circle orientation used in the text. Its `s_1,s_2,s_3,s_4` positions are respectively before and after `p`, then before and after `q`; the fixed solid chord and moving dashed chord match the definition. No additional diagram is needed.
- The B-page curl diagram shows the vertical branch over the right-oriented horizontal branch. The determinant is positive under the stated convention, matching the caption and the one-crossing change. No additional diagram is needed.

## Defect not repaired

`ex-knot-kt-34-worked-cases`, `## Example`, sentence beginning “At any two distinct marked crossings”: the conclusion that linking number is a type-at-most-one invariant, and hence exact type one, omits `AC_ω`. The assigned statement's [F5] supplier, `thm-linking-number-is-invariant-and-writhe-is-not`, assumes `AC_ω`; its proof obtains diagram invariance through the `AC_ω`-qualified Reidemeister-equivalence theorem. The Example's Facts section records the same assumption, but the uninterrupted statement does not. This B-page prose is outside the reader's write scope. The owner can add `Assume AC_ω` to the Example statement or provide a separate choice-free invariance proof. This finding is recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-87.json`.

## Page verdicts and blocker

- `vassiliev-invariants-and-chord-diagrams`: YAML-only compact page metadata is consistent with its six assigned A-items and prerequisite. No page-level defect remains; the framing-one-term proof repair is recorded above.
- `vassiliev-invariants-and-chord-diagrams-examples`: YAML-only compact page metadata and example inventory are consistent. The page's `ex-knot-kt-34-worked-cases` item has the unedited missing-hypothesis finding above.

No blocker is present in batch 87. The recomputed run status at `2026-10-21T09:39:33Z` reported the run active with no in-flight task and no current blocker.

## Coverage limits

The review followed the supplier statements and proof arguments needed for this batch, including the linking-number and framed-push-off chain. It did not recursively audit every foundational dependency in those suppliers or every source in their bibliographies. No page summaries were present; no page or item gate, judgment, or publication action was performed.

The supplier-first reading sequence was not fully preserved: `def-singular-knot-and-vassiliev-derivative` and some other consumers were opened before their suppliers. The relevant supplier files were later opened and used in the review.
