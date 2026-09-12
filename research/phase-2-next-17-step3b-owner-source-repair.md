# Owner-side Step 3b source-record repair: punctured Euclidean plane

Run: phase-2-next-17. Scope: only the Ben Andrews source record in
research/phase-2-next-17-batch-7.coverage.json as it concerns
ex-the-punctured-euclidean-plane-is-geodesically-incomplete and the adjacent
misnumbered Hopf–Rinow attribution in that same source object.
No shared batch carrier, item, decision, or published file has been changed
for this repair. Await an exclusive write window from the owner.

## Evidence and exact correction

The current Andrews reading_status says the complete eight-page chapter
contains a "punctured-plane warning." Its contents row for the example is
named "Punctured plane," gives "§11.2 discussion," and attributes "finite-time
escape and failure of minimizing joins." This is false attribution. The
[author-hosted Andrews Chapter 11 PDF](https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf)
has eight pages; §11.2 on printed pp.102–104 (PDF pp.2–4) concerns local
minimizing properties and mentions long great-circle arcs, not a punctured
plane. §11.5, Theorem 11.5.1 and proof on printed pp.106–108 (PDF pp.6–8)
give the general equivalence and the finite-endpoint Cauchy continuation
argument. The complete PDF was read in bounded portions, and a text search
found no occurrence of "punctured." It does not provide the witness
gamma(t)=(1-t,0) in R² minus the origin or discuss failure of minimizing
joins for that example.

The supplemental group-B item file currently proves the witness directly:
constant Cartesian metric gives zero Christoffel symbols, the affine line
gamma:(-infinity,1) to M is a unit-speed geodesic, and continuity prevents an
extension through its deleted-origin limit at time 1. Its own Source locator
correctly describes Andrews §11.5 as general context only and explicitly
disclaims attribution of the punctured-plane witness. The group-B receipt was
not yet visible in its group report when this checkpoint was made; reread the
item and receipt before any shared edit because its author may revise them.

Proposed narrow coverage replacement, preserving the source and item mapping:

- In the Andrews reading_status, replace "including its metric-limit
  continuation and punctured-plane warning" with "including its metric-limit
  continuation; it contains no punctured-plane example."
- In that source's single example contents row, set name to
  "Geodesic-completeness context for the punctured-plane witness"; locator to
  "§11.5, Theorem 11.5.1 and proof, printed pp.106–108 (PDF pp.6–8)";
  retain disposition included and the exact example item ID; set support to
  "General completeness and finite-endpoint continuation context only; the
  deleted-origin geodesic, its finite-time obstruction, and incompleteness
  are calculated locally in the item. Andrews does not discuss the
  punctured plane or a failed minimizing join there."

Do not create a source drop or a fresh retrieval record: the Andrews PDF is
available, already has a genuine eight-page fetch_verified record, and
continues to support general completeness context. This repair corrects
attribution, not a mathematical item proof.

The same Andrews source object has two more exact locator errors. Its
top-level locator says "Propositions 11.1.1–11.1.4 and Theorem 11.2.1"; the
actual chapter has Proposition 11.1.1 in §11.1 and Theorem 11.5.1 for
Hopf–Rinow in §11.5. Its contents row named "Theorem 11.2.1: Hopf–Rinow"
and located in §11.2 is likewise wrong: §11.2 Proposition 11.2.1 is local
geodesic minimization. The owner included these corrections within this
same source-record integrity repair. Proposed replacements:

- Top-level locator: "Chapter 11, especially §11.1 Proposition 11.1.1,
  §11.2 local minimization, §11.3 convex neighbourhoods, and §11.5
  Theorem 11.5.1 (Hopf–Rinow); complete eight-page chapter."
- Hopf–Rinow contents row name: "Theorem 11.5.1: Hopf–Rinow";
  locator: "§11.5, printed pp.106–108 (PDF pp.6–8)";
  retain its item ID, disposition and support for the complete equivalence
  proof.

## Checks after exclusive-write authorization

1. Freshly reread the item, its group-B receipt/report, and the exact Andrews
   coverage object; abort if the supplemental author changed the attribution
   or shared files are concurrently owned.
2. Apply only the Andrews source-field and two contents-row changes above.
3. Run coverage-checklist.mjs on the exact batch-7 coverage path and
   source-fetch-check.mjs with --coverage on that path and --timeout-sec 12.
   These are read-only checks. Record their exact results here and notify the
   owner; do not stamp or write a Step-3 decision.

## Separate read-only batch-7 dependency reconciliation requested by owner

The following four older degree-page items currently have differing deps in
item YAML and the batch-7 manifest. This is a mechanical comparison only;
no proof was judged. All four existing Step-3 review receipts are currently
hash-valid **before** any manifest edit. The mismatch pattern looks like
adjacent scaffold dependency lists were carried to the wrong result, but
that is an inference, not proof that the item YAML lists are sufficient.
The owner or normal gate-resolution workflow must decide which declarations
are mathematically right before applying a serial manifest repair.

1. cor-degree-is-an-integer-and-independent-of-the-regular-value
   - Item deps: thm-regular-value-formula-for-compact-support-degree.
   - Manifest deps: the same theorem, plus thm-heine-borel-rn and
     thm-compact-subset-of-a-hausdorff-space-is-closed. Thus the two
     compactness IDs are manifest-only.
   - Current review receipt: accept, SHA-256
     51a940ded9cb98f1b91da9941d3b3b2da4574c94eb1751c754e191915bb709a5;
     examined only the regular-value theorem. Current item hash equals it.
2. fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre
   - Item deps: thm-regular-value-formula-for-compact-support-degree,
     thm-heine-borel-rn,
     thm-compact-subset-of-a-hausdorff-space-is-closed.
   - Manifest deps: the regular-value theorem and
     prop-degree-of-the-power-map-on-the-circle. The compactness IDs are
     item-only; the power-map proposition is manifest-only.
   - Current review receipt: repaired, SHA-256
     a6a0b287f44836c69615d94ef2a5118ba67507f0bbe9892c1c84903afebc742f;
     examined the three item deps. Current item hash equals it.
3. ex-a-two-sheeted-orientation-preserving-cover-has-degree-two
   - Item deps: thm-regular-value-formula-for-compact-support-degree and
     prop-degree-of-the-power-map-on-the-circle.
   - Manifest deps: the regular-value theorem plus the following 12 IDs,
     all manifest-only: thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle,
     prop-real-line-mod-integers-is-compact-and-path-connected,
     prop-real-line-mod-integers-is-hausdorff,
     thm-compact-subset-of-a-hausdorff-space-is-closed,
     thm-closed-subspace-of-a-compact-space-is-compact,
     thm-sine-cosine-zero-sets-and-fundamental-period,
     thm-sine-and-cosine-derivatives, thm-chain-rule,
     cor-trigonometric-parity-and-pythagorean-identity,
     thm-quarter-turn-values-and-shift-formulas,
     lem-sine-positive-and-cosine-decreasing-on-zero-two,
     cor-pi-is-the-first-positive-sine-zero. The power-map proposition is
     item-only.
   - Current review receipt: repaired, SHA-256
     0509c0e3df5b5633ea4f6eed7d93f0643634c8bae3c41e4094a5d2454ddda832;
     examined the two item deps. Current item hash equals it.
4. cex-a-map-with-two-preimages-but-degree-zero
   - Manifest deps: only thm-regular-value-formula-for-compact-support-degree.
   - Item deps: that theorem plus precisely the same 12 IDs listed as
     manifest-only for the preceding two-sheeted-cover example. All 12
     are item-only here.
   - Current review receipt: repaired, SHA-256
     cad36dba8467a0e2f479e626cbeb7b2ccfc14ce0d43bcfcb136347e4827b2e82;
     examined all 13 item deps. Current item hash equals it.

If the mathematically justified outcome is to align these four manifest
lists to their corresponding item lists, make those four edits under an
exclusive window, then recompute the four item hashes and refresh all
invalidated item decisions under the normal authorization. The scope hash
ignores dependency lists, but the item hash includes manifest metadata and
dependency closures; current review receipts therefore cannot be assumed
valid after a manifest repair. This report does not authorize or perform it.

## Private batch-7 integration fragment prepared for the owner's serial window

The machine-readable, private pre-splice fragment is
`research/phase-2-next-17-step3b-owner-manifest-repair-fragment.json`.
It names all eight completed supplemental original items from groups A, B, C,
F and G, excluding the already-integrated radial lemma from group E. For each
it records the exact current item-frontmatter dependency list to place in its
existing batch-7 manifest row. It also records the exact zero-based manifest
page/item positions and neighbouring IDs for A/B page insertion, seven absent
Datar coverage destinations, the existing Andrews example row to replace,
and the four older degree-item manifest realignments above. The punctured-plane
row additionally needs its manifest provenance changed to
`ai-generated`/`ai-generated` with `generation.role: example`; this matches the
completed item and prevents an invented source attribution.

The live D author corrected the Andrews Hopf--Rinow contents row before this
fragment was finalized: it now correctly names Theorem 11.5.1 in section
11.5. The fragment therefore leaves that row unchanged. The source-level
locator, reading-status assertion of a punctured-plane warning, and the
punctured-plane contents row remain wrong in the latest read and are the only
Andrews corrections proposed there. The existing eight-page fetch record is
preserved. The source-level Datar locator needs to mention Proposition 15.3.1
and Corollary 16.4.5 when the seven new destinations are integrated.

A read-only comparison after writing the fragment parsed it as JSON and
matched all 12 proposed dependency arrays to the current item YAML, all eight
supplemental page positions and immediate neighbours to the manifest, the
four degree-item page positions, the Datar/Andrews source indices, and the
already-corrected Hopf--Rinow row. The D author's unrelated concurrent edits
changed both shared-carrier hashes between initial inventory and this check;
the fragment baseline was updated to the latest observed manifest SHA-256
`81101493bfa446eaef4cec68a8315739207a846a9c204b4f033d55988f80cec2`
and coverage SHA-256
`13cc1b0a8693e5df3c108eff903e971847285dce082927bffedc2ad8a1341ebd`.
No relevant supplemental dependency or source correction had been integrated
at that read. The owner must recheck those hashes and exact rows in an
exclusive window rather than applying this private snapshot blindly. No
canonical manifest, coverage, page, decision, proof contract, or published
file was edited during the **preparation** stage described above.

## Exclusive serial-window repair completed

The owner then paused the D author and granted this assistant exclusive
ownership of the batch-7 manifest and coverage carriers. Under that window,
the following canonical edits were made with narrow `apply_patch` changes:

- Mirrored the exact current item-frontmatter dependency lists for all eight
  supplemental A/B/C/F/G originals into their existing manifest rows. The
  F local-isometry lemma and G affine-reparametrization false statement already
  matched and were left unchanged. The punctured-plane example manifest row
  now also matches its authored `ai-generated` statement/proof provenance and
  `generation.role: example`; its scaffold strategy was replaced by the actual
  deleted-origin geodesic calculation. The closed-submanifold strategy was
  corrected to the authored topology/completeness route.
- Realigned precisely the four older degree-item manifest dependency rows
  recorded above to their current item-frontmatter lists. This is a
  mechanical alignment, not an independent proof judgment. Any Step-3 item
  decisions invalidated by changed manifest metadata require authorized
  refresh; existing receipt hashes must not be assumed current.
- Added seven item-specific included destinations to the existing Datar
  coverage source, retaining their locally proved qualifications and the
  deferred Ambrose covering row. Expanded only its source locator to name
  Proposition 15.3.1 and Corollary 16.4.5.
- Corrected the three still-false Andrews fields: top-level locator,
  reading-status claim of a punctured-plane warning, and the punctured-plane
  example row. Its already-correct Hopf--Rinow contents row and genuine fetch
  record were left unchanged.

Read-only checks after the patch: both shared files parse as JSON; the
fragment comparison found zero errors across all 12 current item/manifest
dependency lists, the punctured example provenance/generation, seven Datar
coverage destinations and the Andrews source fields. The batch-7 coverage
checklist reported 2 pages, 86 harvested entries, 0 errors, 0 warnings.
`source-fetch-check` reported 9/9 sources fetch-verified and 9/9 resolved,
with no new stamp. The owner was notified and the shared-file lane explicitly
released. No strict proof-contract or page render pass is claimed here.

The two physical geodesics A/B page files remain absent by owner instruction:
the manifest still has six un-authored A items and five un-authored B items,
so D will compose the full pages after those files exist. This assistant did
not edit a physical page, proof contract, decision, scope record, dependency
ledger, plan, published item, or audit/judge stamp. The private fragment
retains its pre-splice baseline solely as a replay/integration record and is
not a current shared-carrier hash after the canonical repair.
