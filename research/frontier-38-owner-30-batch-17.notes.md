# Batch 17 scaffold notes — Oriented Links, Braid Closures, and Markov Equivalence

Run: `frontier-38-owner-30`. Beta batch 17, covering exactly the pair
`oriented-links-braid-closures-and-markov-equivalence` (A, order 749) and
`oriented-links-braid-closures-and-markov-equivalence-examples` (B, order 750),
category `braid-groups`. This dispatch wrote only the batch manifest, coverage,
these notes, the Step-1 readiness records, and the consumer cross-batch
dependency input. No published content, plan, engine state or verdict was
edited. The generating scratch file is `/tmp/b17/gen_items.py` with the
correction pass `/tmp/b17/apply_corrections.py`; the persisted manifest is the
authority.

## Design control

Both assigned design locations are in `research/plan-braid-groups-track.md`:
L574 is the BG-11 A-page table (commissioned inventory, dependency sketch, proof
route, source locators) and L598 is the BG-11 examples table (the four B-page
items). The two locations do not contradict each other and the A-page table is
the controlling design for the pair; the B table supplies the examples.
`research/frontier-38-owner-30-owner-authoring-direction.md` is binding and
overrides stale design text: it requires complete local closure of every
prerequisite, exact item `deps`, and no reliance on unbuilt pairs or
citation-only proofs, which is the route taken here.
`research/plan-spec.json` fixes the two page ids, orders 749/750, the category,
the companions, and the A page's three declared `requires`; the plan controls
where it disagrees with the design, and the one real disagreement is recorded
below. The Step-1 drift review for this page (`...-alpha-step1-drift.md`,
section `oriented-links-braid-closures-and-markov-equivalence`) returned
`no-drift` and confirms the route is local; it is a prerequisite-placement
review, not a proof certificate.

## Plan/spec conflicts and corrections recorded

1. **`requires` extension — owner escalation (the one plan conflict).**
   The scaffolded proof of the Yamada–Vogel height bookkeeping consumes the
   annulus lemma `lem-two-disjoint-circles-in-s-two-cobound-an-annulus`, whose
   proof uses two published items outside the declared closure of page 749:
   `thm-jordan-brouwer-separation` (page
   `orientations-poincare-lefschetz-and-alexander-duality`, order 366.015) and
   `lem-jordan-schoenflies-extension-for-plane-curves` (page
   `classification-of-compact-connected-surfaces`, order 444.1). Neither page is
   in the 231-page transitive closure of the plan's three `requires`. The
   dependency chains are:
   `lem-two-disjoint-circles… → thm-jordan-brouwer-separation` and
   `lem-two-disjoint-circles… → lem-jordan-schoenflies-extension-for-plane-curves`,
   and then
   `def-coherence… , def-reducing-arc… , lem-yamada-vogel… , lem-a-positive-height… , lem-a-height-zero… , thm-alexanders… , lem-non-braid-like… , lem-braid-like-moves-can-be-moved-to-height-zero , lem-reducing-move-peaks… , lem-four-band… , lem-reidemeister-factorization , thm-markovs…`
   transitively. Because 444.1 itself declares 366.015 in its `requires`, the
   manifest declares the transitively reduced set
   `…, classification-of-compact-connected-surfaces` only; declaring 366.015 as
   well would trip the library's `redundant-prereq` hygiene rule. The batch
   manifest's `requires` therefore differs from plan-spec by exactly that one
   page, which is the decision the splice step will surface (splice-plan
   refuses the manifest/plan `requires` disagreement and routes it to
   adjudication). `splice-plan --verify` does not flag the item dependencies
   themselves: both supplier pages are on disk, and "a dep to a page on disk is
   licensed by reading order and needs no requires entry". No unbuilt or
   unselected pair is used.
   *Escalation to the owner:* reconcile page 749's `requires` by adding
   `classification-of-compact-connected-surfaces` (order 444.1; pulls 366.015),
   The earlier published edge is justified by the actual Schoenflies use; no
   replacement item is needed. Parent owns the corresponding plan-spec edit.
2. **The design's B example counts the wrong number of Seifert circles.** The
   design says the Yamada–Vogel example runs on a "three-circle diagram"; the
   source (Birman–Brendle, Example 2.1 and Figure 4) runs on the standard 5₂
   diagram with **four** Seifert circles, five positive signed arcs and height 2,
   producing an eight-crossing three-braid. The scaffold follows the source
   (`ex-alexanders-braiding-algorithm-on-a-small-diagram`) and records the design
   correction here.
3. **Design dependency sketches were too thin and are replaced by the complete
   local chain.** The design's rows for the Markov route list only
   `def-markov-conjugation-and-stabilization-moves`,
   `thm-alexanders-closed-braid-theorem` and the closing theorem, which cannot
   carry the proof: the scaffold adds the concreteness chain that the sources
   actually use — the generic-projection existence and classification lemmas,
   the smooth-braid smoothing lemma, the ambient isotopy extension lemma, the
   closure-invariance lemma, the conjugacy bridge, and the full Traczyk
   factorization chain (`lem-non-braid-like…`, `lem-braid-like-moves-can-be-moved-to-height-zero`,
   `lem-reducing-move-peaks…`, `lem-the-four-band-d-pair-case…`,
   `lem-reidemeister-moves-between…`). The design's `lem-yamada-vogel…` row was
   split into the definition of coherence/height, the definition of reducing
   arcs and the move, the height-drop bookkeeping, the defect-region existence
   lemma, and the height-zero reading lemma, because each is a distinct proof
   obligation.
4. **Two missing dependencies were repaired after comparing each strategy text
   with its `deps`.** `thm-alexanders-closed-braid-theorem` cites the existence
   of regular projections in its proof but did not list
   `lem-every-oriented-link-admits-a-regular-projection`; and
   `thm-oriented-reidemeister-equivalence-theorem` applies the general-position
   perturbation lemma without listing
   `lem-a-smooth-isotopy-of-links-can-be-put-in-general-position`. Both are now
   in `deps`.
5. **`def-markov-conjugation-and-stabilization-moves` no longer consumes the
   AC-stated four-model corollary.** The design listed
   `cor-all-four-classical-braid-models-realize-the-artin-presentation` (which
   assumes AC), but the definition only needs the Artin inclusion and the
   identification of σₙ with the elementary geometric half twist. The deps are
   now `def-braid-group-by-the-artin-presentation`,
   `def-elementary-geometric-half-twist` and the choice-free
   `prop-the-artin-presentation-surjects-onto-geometric-braids`; the definition
   is choice-free. The same choice-free surjectivity replaces the AC corollary
   in `lem-a-height-zero-diagram-represents-a-closed-braid` (only a witness
   word is needed, not completeness of the presentation).
6. **Ordering and reference repairs in the generated scaffold.** The
   ambient-isotopy extension lemma was moved before its consumer
   `lem-closure-depends-only-on-the-braid-isotopy-class`, and
   `def-braid-index-of-an-oriented-link` after
   `thm-alexanders-closed-braid-theorem`; the closure-invariance lemma's
   `sources.references` placeholder `[0]` was replaced by the real Chaidez and
   Birman–Brendle references. `validate-plan`'s same-page `intra-order` rule now
   holds for both pages.

## Axiom-strength audit (AC and AC_ω), exact uses

`SCHEMA.md` requires stating the axiom in the item contract, declaring it in
`deps`, identifying the proof use and carrying it to consumers. The initial
generated scaffold under-declared this, so the following items now state their
assumption and declare `def-countable-choice` (AC_ω) or `def-axiom-of-choice`
(AC), with the exact use written into each strategy and readiness record.
`thm-choice-implies-dependent-implies-countable-choice` (published) is declared
wherever an AC-stated item consumes an AC_ω-stated supplier, following the
batch-16 precedent.

- **AC_ω, via Sard / transversality / Whitney / partitions of unity / isotopy
  extension:** `lem-every-oriented-link-admits-a-regular-projection`,
  `lem-a-smooth-isotopy-of-links-can-be-put-in-general-position`,
  `thm-oriented-reidemeister-equivalence-theorem`,
  `lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid`,
  `lem-closure-depends-only-on-the-braid-isotopy-class`,
  `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`,
  `lem-markov-moves-preserve-oriented-closure-isotopy`.
- **AC, via Jordan–Brouwer separation + Schoenflies (annulus lemma):**
  `lem-two-disjoint-circles-in-s-two-cobound-an-annulus`,
  `def-coherence-of-seifert-circles-and-the-height-of-a-diagram`,
  `def-reducing-arc-and-yamada-vogel-reducing-move`,
  `lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity`,
  `lem-a-positive-height-diagram-has-a-defect-region`,
  `lem-a-height-zero-diagram-represents-a-closed-braid` (AC enters through the
  Yamada chain even though the four-model corollary is no longer cited), `lem-non-braid-like-reidemeister-moves-are-generated-by-braid-like-moves-and-reductions`,
  `lem-braid-like-moves-can-be-moved-to-height-zero`,
  `lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case`,
  `lem-the-four-band-d-pair-case-is-a-markov-sequence`,
  `lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves`,
  `thm-alexanders-closed-braid-theorem`, `def-braid-index-of-an-oriented-link`,
  `thm-markovs-closed-braid-equivalence-theorem`, and the two B-page items that
  invoke those theorems (`ex-alexanders-braiding-algorithm-on-a-small-diagram`,
  `cex-conjugacy-alone-does-not-classify-braid-closures`).
- **Choice-free (14 items: 12 on the A page, 2 on the B page):** the two orientation/diagram definitions,
  `def-planar-isotopy…`, `def-oriented-reidemeister-moves`,
  `lem-each-oriented-reidemeister-move…`, the closure definition and
  `def-seifert-smoothing…`, `lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times`
  (conditional on a given general-position isotopy; the local models use only
  the listed genericity properties), `def-markov-conjugation-and-stabilization-moves`,
  `lem-free-homotopy-classes-of-loops-are-conjugacy-classes`,
  `lem-braid-isotopic-closed-braids-are-conjugate`,
  `lem-braid-like-reidemeister-moves-on-closed-braids-are-braid-isotopies`,
  `ex-torus-links-as-closures-of-two-strand-braids`,
  `ex-a-markov-stabilization-preserves-the-unknot-closure` (both instantiate
  explicit smooth braids), and the remaining definitions.
  `def-closure-of-a-geometric-braid` itself is now choice-free: the construction
  works for every geometric braid (one embedded circle per strand, n points per
  page), and passing to smooth representatives is deliberately deferred to the
  closure-invariance lemma, whose statement carries AC_ω.

No item of this batch reaches the Set Theory recorded-not-proved catalogue.

## Inventory

A page: **33 items** — 10 definitions, 20 lemmas, 3 theorems, plus the local
chain described above; levels 0–10, every item carrying an explicit `deps`
array, a statement, a proof strategy, sources, and a recomputed
`dependency_level`. B page: the four designed items (3 examples, 1
counterexample), levels 1, 6, 7, 11. Both pages are far below the 100-item
ceiling. `node tools/item-dependency-levels.mjs check --run
frontier-38-owner-30` reports no error for any batch-17 item (the only errors are
the still-empty inventories of other batches).

## Sources

Five coverage sources, all fetch-verified with full-text stamps in
`research/frontier-38-owner-30-batch-17.coverage.json`, 54 harvested headings
with a disposition each:

- Birman–Brendle, *Braids: A Survey*, Handbook of Knot Theory chapter,
  author-hosted manuscript (`https://www.math.columbia.edu/~jb/Handbook-21.pdf`),
  section 2 pp. 12–26 read in full (Theorems 1–4, Lemmas 2.1–2.8, Corollaries
  2.1–2.2, Example 2.1, Figures 3–12), plus sections 1.1–1.3 and 4.2.
- Traczyk, *A new proof of Markov's braid theorem*, Banach Center Publications
  42 (1998) 409–419, read completely (Theorems 1–2, Proposition 3, Lemmas 4–5,
  Figures 1–11). The canonical IMPAN URL
  (`http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf`) answered HTTP 403
  to six consecutive full-text fetches (timestamps preserved in the source's
  `recovery_note`); the article was recovered at the Internet Archive snapshot
  now in `url` (`https://web.archive.org/web/20231206161844if_/…`), with the
  dead URL kept as `original_url` per the recover-apply schema. The snapshot is
  the same 11-page, 189813-byte PDF (Title `traczyk.dvi`) inspected locally. The
  19 item-level references to Traczyk were updated to the recovered snapshot URL
  at scaffold time, so the Step-3 item files will not re-cite the 403 URL; the
  affected readiness records (including the transitive consumers whose hash cone
  contains a changed item) were re-recorded after the reference change, with the
  reasons preserved.
- Ozsváth–Stipsicz–Szabó, *Grid Homology for Knots and Links*, AMS Surveys and
  Monographs 208 (2015), section 2.1 (Theorem 2.1.4, Figure 2.2) and Appendix
  B.1, printed pp. 367–372, the independent transversality proof of
  Reidemeister's theorem.
- Queffelec, *Reidemeister's theorem using transversality*, Bull. Austral.
  Math. Soc. (2024), arXiv:2406.18203v1, sections 1–3 read in full (Theorem 1,
  multijet Theorem 2, §§3.1–3.6, Figures 2, 4, 5, 6).
- Chaidez, *Notes on Smooth Topology and Symplectic Embedding Problems*,
  Berkeley Geometry REU lecture notes, printed pp. 35–36: Proposition 2.38 and
  the Isotopy Extension Theorem 2.39, inspected directly.

This gives a survey, a monograph and lecture notes (three primary treatments)
plus two independent papers, i.e. two independent treatments per proof route:
BB+Traczyk for the Yamada–Vogel/Markov route, OSS+Queffelec for the
Reidemeister transversality route. Every decline is recorded with a source-specific
reason (no boilerplate); the only deferral is the §4.2 Hecke-trace /
Burau material, deferred to the plan's later pair
`hecke-markov-traces-and-polynomial-link-invariants`, which no item here
consumes.

## Checks run and results

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-17.pages.json`
  → `37 item(s), 0 normalized, 0 error(s)`.
- Whole-run `manifest-deps` on all 30 manifests → `751 item(s), 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-17.pages.json`
  → `37 scoped item(s), 0 error(s), 0 warning(s)`; whole-run → `751 scoped
  item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-17.coverage.json --require-destination`
  → `1 page(s), 54 harvested result(s), 0 error(s), 1 warning(s)`; the warning is
  the advisory `coverage-low-yield` (16/54 rows scaffolded as `included`; the
  rest are `inline` local models/figures, `already-published` basic braid
  material, one deferral and specific out-of-scope declines — for Alpha to
  confirm).
- `node tools/source-fetch-check.mjs --coverage …-batch-17.coverage.json`
  (stamp mode, then check mode) → `5/5 source(s) fetch-verified`, `5/5 resolved`.
- `node tools/url-sweep.mjs --coverage …-batch-17.coverage.json --out /tmp/… --recover --fail-on-dead`
  (output to `/tmp`, no run artifact touched) → `5/5 live; 0 failed`.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` → no
  error for any batch-17 item; the only remaining error is the still-empty
  inventory of `point-blowup-resolution-on-arbitrary-regular-surfaces-examples`
  (another batch, still being scaffolded during this dispatch).
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → none of
  the 37 batch-17 items is open; 720/752 run items ready at the last re-check
  during this dispatch (other batches were still being scaffolded concurrently).
  The open items and empty-inventory pages belong to other batches
  (`analytic-hardy…`, `sobolev-traces…`, `smooth-cobordism…`, `point-blowup…`
  and their companions).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (plan pages
  749/750 still carry empty item lists until the splice, so this run asserts
  reading order only).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  → refreshed; batch 17 is registered in `reviewed_batches` with its empty input.
  `--require-reviewed` currently fails on the five batches that have not yet
  supplied inputs (4, 11, 13, 26, 27), not on batch 17.
- `node tools/fwdcheck.mjs --quiet` → OK, exit 0. `node tools/extcheck.mjs` →
  OK, exit 0 (one pre-existing note about published `thm-urysohn-lemma`, not a
  batch-17 item).
- Simulated post-splice `validate-plan` check 15 over the final manifest: every
  out-of-run `deps` target homed on a plan page lies in the closure of the
  page's declared `requires` (the 444.1 declaration pulls 366.015 in); result
  `NONE` undeclared.

## Unresolved findings and authoring obligations (for Step 3/5)

- **Parent integration of the `requires` extension** (conflict 1 above): add
  `classification-of-compact-connected-surfaces` to page749 in plan-spec; the
  batch17 manifest already declares it. Both suppliers are published and earlier.
- **Explicit R2/R3 local computations.** Queffelec writes out the R1 model in
  detail and indicates the R2 (parabola pair) and R3 (drifting triple point)
  computations; the Step-3 author of
  `lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times` must
  transcribe both expansions rather than cite the indication.
- **Height-zero nesting induction.** The Yamada criterion ("h(D)=0 iff the
  Seifert picture is a nested chain") is asserted by both sources and used in
  `lem-a-height-zero-diagram-represents-a-closed-braid`; the Step-3 author must
  supply the induction on the nesting.
- **The four-band band computation.** Traczyk verifies the irreducible d-pair
  case by Figures 7–11 (multiple reductions, the exchange move, at most four
  bands); `lem-the-four-band-d-pair-case-is-a-markov-sequence` records the
  obligation to transcribe those two explicit band computations, including the
  multiple-reduction convention.
- **Annulus lemma dependence on AC.** Both `requires`-page suppliers assume AC
  (declared in their statements). If the owner prefers a choice-free page, a
  local smooth annulus/Schoenflies prerequisite would have to replace it; that
  would be new local mathematics, not a citation fix.
- **Design-vs-source correction** for the 5₂ example (four circles, not three)
  is recorded above; the B page follows the source.
- No published defect was found in any supplier used here; all examined
  out-of-run items state what the scaffold assumes (choice status checked item
  by item).

## Next action

The engine's step-1 join runs `step1-readiness`, `item-dependency-levels`, the
dependency ledger, coverage/policy/plan/ext/url/backing/fetch gates over the
whole run once the remaining batches land. The splice step must adjudicate the
page-749 `requires` reconciliation recorded in conflict 1; then Step 3 authors
write the 37 items in dependency order (levels 0…10 on the A page, 1…11 on the
B page), completing the recorded obligations before Step 5 reads them.

## Owner dependency review handoff — 2026-10-03

Independently read the full published `thm-jordan-brouwer-separation` proof and
`lem-jordan-schoenflies-extension-for-plane-curves` proof and the current annulus
scaffold. Jordan-Brouwer supplies exactly two complementary components, but no
ball-closure conclusion. Schoenflies supplies disk closures under AC, so its
use is essential to this scaffold. Its actual published home is
`library/topology/classification-of-compact-connected-surfaces.md`, order444.1.
The page's declared prerequisite `orientations-poincare-lefschetz-and-alexander-duality`
(order366.015) supplies Jordan-Brouwer. Thus the exact parent metadata repair is
**add only `classification-of-compact-connected-surfaces` to A749.requires in
plan-spec**, retaining the other three prerequisites; B750 remains dependent on
A749. This introduces no pair or item and no forward reference.

Step3 author obligation: the strategy's phrase “a disk with two boundary circles,
i.e. an annulus” must be expanded into the planar annulus argument (cut the region
along an embedded connector arc and use relative Schoenflies, then reglue its two
copies); disk-with-a-hole identification is not a definition or a consequence of
Jordan-Brouwer alone. Retain AC throughout the consuming height-bookkeeping chain.
This dependency review supplies local scaffold evidence, not a completed annulus
proof or independent mathematical certification. The existing 37-item inventory
and all commissioned braid claims are preserved.

Parent plan integration is now confirmed on disk: A749.requires has the exact
444.1 addition and retains its other three prerequisites; manifest and plan
reading prerequisites agree. No second direct edge to366.015 was introduced.

Additional exact finding reported to parent: the scaffold counterexample
`cex-conjugacy-alone-does-not-classify-braid-closures` currently compares
`sigma_1 in B_2` with `sigma_2 in B_3` and says both closures are unknots. The
latter has endpoint permutation `(23)` with fixed strand1, hence two closure
components. Its intended commissioned conclusion is preserved by replacing it
with the actual Markov stabilization `sigma_1 sigma_2 in B_3` of `sigma_1 in B_2`.
Parent subsequently authorized this same reviewer to repair exactly that row.
The current manifest now uses sigma_1 sigma_2 in B_3, explicitly proves closure
isotopy by the stabilization/R1 supplier, carries AC to AC_omega through the
choice bridge, and preserves the different-strand-number conjugacy convention.
Permutation cycles independently check component counts: (12) and a three-cycle
have one component; the rejected standalone (23) on three strands has two.
No item declares this counterexample as deps/justified_by/forward_refs, so no
downstream repair is required. Its current owner readiness record is ready.


## Owner-assigned Step 3b Markov computation investigation

Evidence: `research/frontier-38-owner-30-step3b-markov-computation-investigation.json`.
The original Traczyk PDF was inspected as rendered figures as well as full text.
Printed p. 419 uses multiple Markov moves and opposite full-twist compensation
on bands; this does not establish the scaffold's exact count of ordinary moves.
The four-band statement remains unchanged pending the user's quantitative ruling,
and its arbitrary internal-box comparison remains unverified. No pair is dropped.

The height-zero endpoint clause was clarified with parent authorization to allow
height-zero endpoints and require positive intermediate heights (survey Lemma 2.3,
pp. 20–21). Its proof now supplies a local strip/gluing avoidance argument and
includes the III-braid-move plus inverse-reduction return path for a kink on a
non-innermost strand. Its two direct consumers were reconciled: peak-lowering F5
and factorization step 2.1. Factorization's height induction removes every peak
at a level before decreasing the maximum; the final Markov theorem reads input
braids at their original cutting rays. These are local repairs, not acceptance.

A general compensated-band word identity is derived in the investigation receipt
by symbolic Artin substitutions. It yields m ordinary destabilizations for the
standalone width-m compensated kink, conditional on a valid faithful Artin
supplier. Batch 15's stem/action repairs are still pending. Arbitrary-box naturality
and exact Figure 8/11 word identification are separate unmet obligations.
Four changed item paths pass layout (17 steps, zero defects), format, rendering
and scoped strict contracts; manifest dependencies and citation fidelity pass.
The three original Markov escalations stay open.


### Necessary arbitrary-box prerequisite added

`lem-block-interchanges-transport-arbitrary-braid-boxes` is added to the existing
A page (34 items; pair38). Its complete Artin-relations proof transports entire
arbitrary blocks through uniform crossings, including inverse words and
zero/one-width cases. Four-band F5/step2.1 consumes it for the Figure8 right-column
box slide. The helper does not establish the remaining band Markov moves, sphere
isotopy or exchange computation. New source1010.0321 was retrieved in full
(45pages,SHA256 recorded in investigation receipt), with generator/presentation
sections read. Local scoped checks pass; original three escalations remain open.
The repaired Artin-faithfulness lane has supplied stable hashes and direct
operative proofs were reread; the general standalone identity may use that chain,
while arbitrary-box/context application remains a separate obligation.

### Ordinary exchange repair checkpoint

The same Markov repair lane added the genuinely consumed local prerequisite
`lem-ordinary-exchange-moves-are-markov-sequences` on this existing A page.
The inventory is now A36/B4=40, below the cap. The helper proves the ordinary
exchange for arbitrary boxes P,Q on the first n−1 old strands by explicit
Artin relations, one ordinary stabilization and one ordinary destabilization,
with both signs. It preserves all boxes and uses no later Garside supplier,
Choice, or Markov theorem. Outer-to-inner Figure11 ports make the added inner
strand n+1 and its crossing σ_n an ordinary right stabilization. The first
and last weaving words are compared directly, without accepting intermediate
source arrows by citation. The original four-band F3 now consumes this helper.
The quantitative original Statement remains unchanged and owner-held.

All eight changed item paths passed final proof-layout: 38 steps, zero defects.
Current exchange/main precheck, render and strict contracts passed; manifest40,
dependency-level822, citation-fidelity148 and content-policy40 passed. Coverage
has 61 harvested entries, zero errors and its existing low-yield warning.
Corpus depcheck currently exits zero, with unrelated warnings retained. These
are local content checks, not mathematical acceptance or native gate closure.
Stable verification-excluded hashes and the exact remaining obligations are in
`research/frontier-38-owner-30-step3b-markov-computation-investigation.json`.
The missing multiple-exchange decomposition, all four source packet/frame
identifications and full zero-width bookkeeping remain under investigation;
the three original escalations remain held.

### General typed band-exchange checkpoint

Registered `lem-band-exchanges-decompose-into-ordinary-markov-moves`, the
fourth genuinely consumed local prerequisite, before the original four-band
consumer. Current inventory A37/B4=41 remains on the same pair and below100.
The full abstract proof handles unequal p,q by a rigorously verified padding
identity: at the after-crossing cyclic cut the padded word is literally the
old word followed by its highest generator. Padding is ordinary stabilization,
not adding identity strands. Equal-width exchange retains its compensation
through an explicit weaving conjugation; an additional full-block conjugation
returns it to the compensated packet before ordinary destabilization. Zero
band widths yield identical endpoints; no nonexistent band is padded.

Root authorized the addition and checked the research padding/compensation
algebra; the final full item proof awaits root mathematical review. All nine
changed itempaths pass final layout:44steps,0defects. Current helper/main
precheck, render and strict contracts pass; manifest41, dependency824,
citation157 and content-policy41 pass. Coverage62 retains the existing
low-yield warning and has0errors. Exact hashes and unfinished source-port,
reducing-choice and quantitative obligations remain in the investigation JSON.
The original quantitative Statement remains unchanged; all original three
escalations remain held. Failed fixed-routing sourceword candidates are
recorded explicitly and excluded from proof evidence.

## Final drained repair handoff — 2026-10-03T03:39:25.707Z

Both owner-approved quantitative and endpoint corrections applied;23 repaired items and43-item carriers current. Root full mathematical reread qualified all repairs; no mathematical/permission blocker remains. Final local checks:precheck23/21proof;render24;explicit layout23/107;strict43/43;citations205/43;manifest/policy43;levels827/60/max16;depcheck clean. Existing16/64 coverage warning retained. Corpus fwdcheck5 outside-lane errors recorded with exact IDs/status/output in current hashes and final handoff. No native acceptance/gates written. Root owns recertification. This supersedes earlier pending statuses. Writing drained.

Forward-check routing clarification: all five sources are selected draft items in this run. The dual-homomorphisms source lacks pipeline_run metadata but is selected by batch10 manifest; four blowup sources carry the current pipeline_run. All remain outside this repair lane.

## Step3 gate repair: reviewed declines and boundary rows — 2026-10-03T04:31:59.028242+00:00

All16 assigned source declines have individual stands decisions with exact assignment row/context hashes, actual inspected full-source locators/PDF hashes and current proof-route mappings in research/frontier-38-owner-30-step3-gate-repair-markov-decisions.json. All42 assigned boundary templates now state individual mathematical dispositions; batches17+18 boundary audit472rows has0templates/0contradicted and4 current-hash reviewed consequent-equivalence false positives. No shared alpha scopes or native decisions modified. Separate substantive finding: the local isotopy-extension supplier falsely promises terminal ambient identity. Owner correction to terminal stationarity at H_1 is pending; no application or acceptance yet. Authorized proof-only repairs give an explicit constant extension to R, proper boundaryless graph, empty-source identity and exact spatial cutoff argument. Its3 direct consumers use only extension/support and retain their Statements. Current explicit changed-item layout1item/6steps and precheck/render pass; final checks must repeat after the approved terminal edit. Prepared patch /tmp/markov-gate-ie-terminal-repair.py is unapplied. Both earlier quantitative and peak-endpoint approvals remain effective. Unblocked writing drained pending explicit owner reply; held controller remains root-owned.

## Step3 gate repair: final approved and drained — 2026-10-03T04:36:55.368899+00:00

Owner explicitly approved terminal stationarity, response call_0Ximai0BNr455jyla5X6be2T. IE now promises initial identity and terminal H_1, with the zero-vector-field evolution/cocycle proof. Full extension/support and AC_omega preserved. Three actual consumers retain their Statements and exact citations regenerated; manifest/eight IE boundaries synchronized. Final focused layout1item/6steps, precheck/render, strict43+16 contracts and205+109 citation fidelity clean; boundary audit472rows0templates0contradicted4 precisely reviewed false positives. Content policy59clean, levels829/60/max16clean. Audit manifest with actual batch15 draft supplier included:87items/589relationships0defects (initial two-batch invocation only omitted that checker input). Sixteen individual source decline decisions and42 rewritten boundary rows/current hashes in final decisions artifact; unchanged coverage warnings16/64 and7/28 retained. IE canonical hash 8cbb7046de674c7376e63c05b39c3d54ebfbf38f9eda166ced3085d01dd00dc8. No mathematical or permission blocker remains; no native stamps/gates/shared scopes written. All writing drained for root integration and fresh native recertification.
