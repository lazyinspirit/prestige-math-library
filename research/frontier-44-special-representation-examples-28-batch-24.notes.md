# Batch 24 - Cyclotomic Hecke and Quiver Hecke Algebras: scaffold notes

Run `frontier-44-special-representation-examples-28`, pair
`cyclotomic-hecke-and-quiver-hecke-algebras` (order 1840) /
`cyclotomic-hecke-and-quiver-hecke-algebras-examples` (order 1841),
`special-topics-in-representation-theory`. The scaffold is the SYMR-11 pair of
the symmetric-group track: the type-A cyclotomic Hecke--KLR bridge and the
grading transported across it.

**Status.** Manifest populated: 10 A-page items and 4 B-page items (14 total).
All 14 items carry a fresh `ready` record; `node tools/step1-decisions.mjs
check --run ...` reports 783/783 run items closed and the only remaining
"work" rows are the two empty shells of batch 25 (not this batch).
`item-dependency-levels` reports no label mismatch inside this batch after the
labels were recomputed across the whole run (max level 9; both level-0
suppliers are the batch-9 Cartan datum and the batch-20 quantum
characteristic). This is scaffold readiness, not mathematical approval.

## 1. Binding owner direction and controlling design

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
is read as binding, in particular the two sections naming this pair:

- **Future cyclotomic first/right convention (2026-10-09).** The side
  convention of
  `research/frontier-44-special-representation-examples-28-owner-klr-future-cyclotomic-convention-and-quotient-proof.md`
  is consumed exactly as the batch-11 manifest binds it: the cyclotomic
  relation is imposed on the **first** strand, induction appends on the
  **right**, and the based-quotient statement is `pi_Lambda` composed with the
  multiplication-reversing star, with the word-mirror twist as the alternative
  route. This batch uses the *algebra-level* interfaces only: the standard
  monic quotient `def-cyclotomic-klr-quotient-at-a-dominant-weight` (whose
  statement fixes first-strand/right-append), the KLR grading
  `def-klr-grading-and-diagrammatic-composition`, and the dot-annihilator /
  finite-dimensionality lemma. No based-quotient, global-basis, quantum-star
  or projective-cover statement is asserted or consumed by this pair; the
  word-mirror lemma is **not** used, and no item of this pair depends on the
  held geometric branch.
- **Final KLR algebraic interfaces (2026-10-09).** Only the reviewed
  algebraic/duality/grading/parameter interfaces of batch 10 are consumed
  (`def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`,
  `def-klr-grading-and-diagrammatic-composition`), never the producer's
  readiness as proof. The geometric global-basis theorem is not used.

**Which design controls.** The dispatch lists two design mentions: the QG
track plan L478 (the planned-consumer sentence naming SYMR-11 as a consumer of
QG-6--QG-8) and the symmetric-group track plan L46 (the SYMR-11 row of the
page table). Neither is a page design. The actual page design is
`research/symmetric-group-planning/proposed-inventory.md` **"SYMR-11 --
Cyclotomic Hecke and quiver Hecke algebras"** (section starting at line 319),
with the A/B page inventories and the exact proposed IDs. That section
controls, because it is the only document that states this pair's claims,
conventions and proof route; the two plan mentions only fix the pair's
identity, category and consumer position (SYMR-11 consumes QG-6/QG-7/QG-8 and
supplies SYMR-12 later). `plan-symmetric-group-representations-track.md`
section 7 records the same seam ("SYMR-11 consumes QG-6/QG-7/QG-8").

## 2. Plan / design conflicts recorded

1. **Plan-spec vs design inventory.** `research/plan-spec.json` carries the
   pair with an empty `items` array, like every planned page; the design
   proposes 6 A items and 4 B items. The manifest contains all 10 of them and
   adds exactly 4 local items needed to close the proof route:
   `lem-cyclotomic-hecke-algebra-basis-and-dimension` (the ordered-monomial
   basis/dimension is used by the level-one identification, by the block
   centrality argument and by the counterexample),
   `prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras`
   (the design's clause "at Lambda_0 identify the symmetric-group/finite-Hecke
   specialization" is a theorem, not a convention, so it is scaffolded as a
   proposition rather than buried in the definition),
   `lem-cyclotomic-hecke-intertwiners-and-local-power-series` (the design's
   single "intertwiners produce local KLR generators" lemma needs the
   power-series calculus and the intertwiner identities as a separate
   prerequisite), and `lem-cyclotomic-klr-block-satisfies-the-hecke-relations`
   (the inverse direction sigma: the design's Main-Theorem row says "construct
   Hecke-to-KLR generators and inverse Hecke generators", which is a second
   substantial lemma). No design item was removed, weakened or replaced.
2. **Design dependency list corrected.** The design gives
   `def-affine-and-cyclotomic-type-a-hecke-algebras` only the deps
   `def-generic-type-a-hecke-algebra` and
   `def-quantum-characteristic-of-an-invertible-hecke-parameter`. The actual
   definition also needs the cyclic affine Cartan datum (for `I=Z/eZ`,
   `alpha_i`, `(Lambda,alpha_i)` and the level), so
   `def-cyclic-affine-type-a-cartan-datum` is declared. The design's deps for
   `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks` are kept
   plus the basis item (finiteness of the regular module is what makes the
   centrality argument work).
3. **Design dep `thm-klr-pbw-basis-theorem` examined and dropped.** The
   design's Main-Theorem row asks for the QG-7 PBW theorem. Reading the proof
   route shows the mutual-inverse check uses only the presentation, the
   nilpotence of the dots and the finite-dimensionality of the block (the
   batch-11 dot-annihilator lemma); PBW is not consumed, so it is not
   declared. Declaring it would be an inflated dependency.
4. **Design's `source locator` column (Agent 6 S1/S2) replaced by primary
   locators.** The design cites the internal research report
   (`agent-6-articles-klr-fock.md`, "Agent 6 S1/S2"); the manifest cites the
   underlying primary sources (Brundan--Kleshchev 2008/2009, Hu--Mathas,
   Kleshchev's survey, Mathas' manuscript, Khovanov--Lauda I) with exact
   locators, as the coverage file records.
5. **`def-degenerate-affine-hecke-algebra` is NOT consumed (recorded
   escalation).** The batch-17 pair
   (`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`) contains
   ready items `def-degenerate-affine-hecke-algebra` and
   `def-degenerate-cyclotomic-hecke-algebra`, which are the natural homes for
   the degenerate presentation. That page is **not** in the closure of this
   page's declared `requires` (the four planned prerequisites), so consuming
   them would raise `undeclared-prereq` in `validate-plan`; the role may not
   edit shared plans to add a prerequisite edge. The degenerate presentation
   is therefore stated locally inside
   `def-affine-and-cyclotomic-type-a-hecke-algebras` (it is a presentation,
   not a new claim), and this is escalated to the owner as a requested
   cross-batch decision: if the owner prefers the batch-17 supplier, add
   `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` to this
   page's `requires` and replace the local degenerate clause by a dependency.
   Note the two batch-17 statements are over `C` and carry an AC bookkeeping
   hypothesis in their strategy, whereas this page's degenerate branch is over
   a field of characteristic `e`; a genuine interface extension would have to
   be reconciled at the same time.
6. **`e=0` branches deferred (recorded boundary).** The source's Main Theorem
   also covers `e=0` (quiver `A_infinity`: `q` not a root of unity, and the
   characteristic-zero degeneration). The design's specialization row fixes
   the **cyclic** type-A residue quiver, and the page's whole consumer stack
   (SYMR-10/12: nondegenerate finite-order root of unity, Ariki) lives in
   finite `e`. The `e=0` branch needs an `A_infinity` Cartan datum with a
   finite-level dominant-weight lattice, which exists nowhere in the library
   and is not authorized as a new pair by this dispatch; the coverage file
   defers it with destination `owner-decision` and the item statements record
   the scope boundary. Corollaries 2 and Section 5 of the source and Corollary
   2.10 of the survey are disposed the same way.
7. **Tower compatibility deferred.** Brundan--Kleshchev 2009, diagram (4.10),
   states compatibility of the isomorphism with the tower embeddings. No item
   of this page needs it, and its proof is a separate comparison of block
   embeddings; the coverage file records it as `deferred` to
   `owner-decision` (it belongs with the future Ariki page if that page's
   functor comparison needs the embedding interface). This is recorded, not
   silently dropped.

## 3. Item interface decisions (what the manifest actually claims)

- **Definitions of both cases are over the field `F` in finite quantum
  characteristic `e`.** Nondegenerate: `q != 1`, `e = ord(q)`, quiver
  `A^{(1)}_{e-1}`, quotient by `prod_i (X_1 - q^i)^{(Lambda,alpha_i)}`.
  Degenerate: `q = 1`, `char F = e > 0`, quotient by
  `prod_i (x_1 - i)^{(Lambda,alpha_i)}`. The Hecke normalisation is the
  library's `T_i^2 = (q-1)T_i + q`. The Fock page's affine Hecke action is
  **explicitly not identified** with this one (its generator satisfies
  `S^2 = (Q-1)S + Q` with `S = -q t`; in the present normalisation it carries
  the parameter `Q`, the square of the present Hecke parameter). No page
  consumer may silently bridge the two normalisations.
- **Type-A KLR datum.** `Q^A = 1` for `a_ij = 0`, `Q^A_{i,i+1} = v-u` and
  `Q^A_{i+1,i} = u-v` for `e >= 3`, and `Q^A_{01} = Q^A_{10} = -(u-v)^2` for
  `e = 2`; conditions (Q1)-(Q4) are verified explicitly. The dictionary to the
  source's sign-modified presentation is `psi_r = -tau_r` (with `y_r = x_r`);
  every one of the relations (1.6)-(1.15) was checked by hand against the
  batch-10 presentation, including the braid correction (the divided
  difference evaluates to `+1` in the forward single-edge case, `-1` in the
  backward case, `2y_{r+1}-y_r-y_{r+2}` on the `e=2` double edge and `0`
  otherwise).
- **The KLR grading subtlety is recorded.** The degree of a product
  `psi_r psi_{r+1} psi_r e(i)` is the sum of `-a` over the three colour pairs
  of the *successive permuted sequences*, not over the three positions of the
  original word; this is what makes (1.15) homogeneous in all cases, and it is
  the content of the B-page degree-check example. (Checked explicitly in all
  four cases including `e=2`.)
- **Centrality of `e_alpha`** is proved from the module-theoretic weight
  decomposition plus finiteness of the algebra, so the isomorphism theorem
  does not need the source's center/primitivity theorem; primitivity is
  recorded in the block definition as not used. Consequently the two maps
  `rho`, `sigma` are defined on the block `H^Lambda_alpha` without any
  unproved structure input.
- **Level-one identification.** `H^Lambda_d` at level one is the finite
  type-A Hecke algebra resp. `F S_d`; surjectivity is the explicit recursion
  for the polynomial generators, injectivity the `l=1` case of the basis
  item plus the published standard basis theorem. The two worked examples use
  this identification and the q-content dictionary of the batch-20 Jucys--
  Murphy theorem.

## 4. Source evidence and reading honesty

`node tools/source-fetch-check.mjs --coverage research/...-batch-24.coverage.json --stamp`
-> `9/9 source(s) fetch-verified (9 newly stamped)`;
check mode -> `9/9 source(s) resolved`. The coverage file lists 2 pages,
43 harvested rows, 0 errors, 0 warnings (including the `--require-destination`
run): 22 `included` + 8 `inline` + 11 `out-of-scope` (each with a specific
reason) + 2 `deferred`, both with destination `owner-decision` (the `e=0`
branch and the tower compatibility).

What this worker actually read in this dispatch (the cached PDFs under
`scratchpad/source-cache/symmetric-groups/` were re-hashed and match the
recorded SHA-256 values):

- **Brundan--Kleshchev 2008 (arXiv:0808.2032v3)**, complete 32-page article,
  SHA-256 `c9a24757...da922b0`: Introduction pp. 1--5 (quiver, (1.1)--(1.4),
  Main Theorem (1.6)--(1.15), Corollaries 1--2); Section 2.1--2.2 (divided
  differences (2.1)--(2.3), the presentation (2.4)--(2.7), Lemma 2.1,
  Corollary 2.2); Section 3.1--3.5 in full (pp. 7--19); Section 4.1--4.5 in
  full (pp. 19--27); Section 5 (pp. 27--29); Section 6 (pp. 29--31).
- **Brundan--Kleshchev 2009 (arXiv:0901.4450v3)**, complete 57-page article,
  SHA-256 `62e4dddf...3fa1266`: Section 2.2 ((2.9)--(2.12) and the grading
  statement); Section 4.1--4.4 (Theorem 4.1, Remark 4.2, diagram (4.10)).
- **Hu--Mathas (arXiv:1304.0906v3)**, complete 51-page article, freshly
  fetched, SHA-256 `54b112868...2c2cf520`: Introduction (Theorem A, Corollary
  1.1); Section 2.2 (Definition 2.2, Remark 2.3); Section 2.5--2.6
  (Theorem 2.8, Definition 2.10, Remark 2.13, Theorem 2.14, Corollary 2.15);
  Section 4.1 (Definition 4.1). It is the second independent treatment: it
  proves the deformed presentation and restates the blockwise isomorphism
  under its own (e-idempotent-subring) conventions, which confirms the shape
  of the relations used here without being an import of the proof.
- **Kleshchev's survey (arXiv:0909.4844v1)**, complete 66-page survey,
  SHA-256 `86851996...c6f2cab`: Sections 2.7--2.8 (Definition 2.7 with
  (2.33), Theorem 2.8, Corollaries 2.9--2.10) and Section 2.11 (Definition
  2.14). It is the book-length/survey treatment required by the source policy;
  it states the same presentation and grading with independent references.
- **Mathas, *Hecke algebras and Schur algebras of the symmetric group***
  (complete 79-page prepublication manuscript,
  `https://web.math.ucsb.edu/~bigelow/books/mathas.pdf`, SHA-256
  `8cfeb611...1b997e0`): Chapters 1--5 (printed pp. 1--65) for the finite
  type-A Hecke algebra, its Murphy basis and Jucys--Murphy theory. The
  manuscript does **not** treat the affine/cyclotomic or KLR side; it backs
  the level-one finite-Hecke statements only.
- **Khovanov--Lauda I (arXiv:0803.4121v3)**, complete 53-page article,
  SHA-256 `8fffabbb...0abad7`: Section 2.1--2.2 (relations (2.3)--(2.8);
  grading (2.12): dot degree 2, crossing degree `-i.j`) for the B-page
  degree-check example.

**Honesty flags.**

- The one proof input this scaffold does not itself carry is the
  **whole ordered-monomial basis theorem** (spanning and the dimension
  `l^d d!`): it is quoted from [BK (3.6)/(4.6)], whose originals are
  [K1, Theorem 7.5.6] and [AK] and which the Kleshchev survey restates as
  Theorem 2.11 (verified in the cached full texts: [BK] p. 7 "see e.g.
  [K1, Theorem 7.5.6]" for the degenerate basis, [BK] Section 4.1 "As goes
  back to [AK]" for (4.6); survey arXiv:0909.4844 p. 14 for the displayed
  basis `{T_w X_1^{a_1}...X_d^{a_d}}`). The item marks the authoring step
  responsible for writing out the source's normal-form argument over the
  polynomial subalgebra; if the Step-3 review judges that incomplete, this
  item and its consumers are the batch's escalation point. Everything else in
  the batch is either an explicit finite computation or a relation check
  spelled out in the strategy.
- **Scaffold self-review repair (2026-10-10, recorded).** An earlier draft of
  `lem-cyclotomic-hecke-algebra-basis-and-dimension` claimed that *every*
  polynomial generator satisfies the degree-`l` cyclotomic polynomial
  `prod_i(t-c_i)^{lambda_i}`, and the strategies of that item,
  `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks` and
  `lem-cyclotomic-hecke-intertwiners-and-local-power-series` used a
  per-generator reduction/annihilator. That is **false**: the source imposes
  the relation in the FIRST variable only, and at degenerate level one with
  `d=2` it gives `x_1=0` but `x_2=s_1 != 0` while `l=1` (equally,
  nondegenerate `X_2-1 = q^{-1}(q-1)T_1 != 0`). All three texts were repaired:
  the false clause was removed from the statement of the basis item; the
  block idempotents are now defined through the minimal polynomials `m_r` of
  `X_r` on the finite-dimensional regular module, the CRT, and the source's
  eigenvalue statement ([BK 4.1] citing [G, Lemma 4.7]; [BK 3.1] citing
  [K1, Lemma 7.1.2]); the intertwiner strategy now derives nilpotence of `y_r`
  from the generalised-eigenspace construction. The corrected strategy also
  records the pitfall for the author. No consumer claim changed scope: the
  downstream items use only finite dimensionality, the basis at `l=1`, the
  eigenvalue sets and nilpotence, all of which the repaired texts supply.
  The 11 step-1 records whose input closure changed (the three edited items
  plus their eight transitive dependents) were re-recorded fresh; the other
  three batch records stayed closed.
- The degenerate branch is stated and used only in finite `e` (positive
  characteristic). No item asserts anything about the characteristic-zero
  degeneration; the coverage deferral records where it should go.
- No `e=0` claim, no global/canonical basis, no induction/restriction
  functor, no projective/simple classification and no Ariki statement is made
  on this page.

## 5. Published defects and open obligations

No defect was confirmed in any consumed published item. The published
interfaces read are `def-generic-type-a-hecke-algebra`,
`thm-standard-basis-of-the-generic-type-a-hecke-algebra` and the
finite-specialization proposition; all statements matched their uses. The
in-run interfaces read are the batch-9 cyclic Cartan datum, the batch-10 KLR
definition and grading, the batch-11 cyclotomic quotient and dot-annihilator
lemma, and the batch-20 quantum characteristic, block definition and
Jucys--Murphy theorem; their statements and hypotheses were checked against
the clauses consumed here. The cross-batch input carries 50 rows (46 item + 4
page-requires): 19 are genuine cross-batch edges (15 item + 4 page) recording
the exact consumed clause and the supplier's current scaffold state, and 31
are this pair's same-batch deps carried in the same file (the unified ledger
surfaces those as in-manifest deps, not cross-batch edges).

Open obligations, recorded and not silently discharged:

1. **Escalation: batch-17 degenerate affine Hecke supplier.** Requested
   owner decision (Section 2.5 above): either add the batch-17 page to this
   page's `requires` and consume `def-degenerate-affine-hecke-algebra` /
   `def-degenerate-cyclotomic-hecke-algebra` (reconciling their `C`/AC
   hypotheses with the characteristic-`e` branch), or keep the local
   presentation. The local presentation is mathematically complete either
   way; only the duplication/link policy is owner-owned.
2. **Escalation: `e=0` branch.** Deferred with destination `owner-decision`
   (needs a new `A_infinity` datum prerequisite pair; exact placement: the
   QG track, either as an extension of
   `quantum-affine-type-a-and-level-one-fock-space` or as a new pair before
   order 1840).
3. **Flagged proof input:** the ordered-monomial basis theorem of Section 4
   (spanning and independence), quoted from [BK (3.6)/(4.6)] = [K1, Theorem
   7.5.6] / [AK] and restated as the survey's Theorem 2.11; the authoring step
   writes out the source's normal-form argument. The 2026-10-10 self-review
   repair (Section 4) removed the false per-generator-annihilator claim and
   the false per-generator reduction from this item's draft and from the
   block-idempotent and intertwiner drafts.
4. **Pre-existing run state, not this batch's findings:** `validate-plan`
   currently reports 26 `[intra-order]` errors on the batch-11 page
   `cyclotomic-klr-algebras-and-highest-weight-categorification` (items whose
   deps appear later in that page's array). That page is owned by another
   batch and its supplier obligations are already flagged in the owner
   direction ("close the supplier proofs and all affected actual consumer
   uses before 11->24->25 progression"). This batch does not edit it. The
   batch-25 pair (`ariki-categorification-and-graded-decomposition-numbers`)
   is still an empty scaffold; it is the recorded consumer of this pair, not
   this batch's scope.
5. **Consumer-batch input for batch 25.** The future Ariki pair consumes
   `thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism` and
   `cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`, plus the
   batch-11 blockwise interfaces; if the tower compatibility (deferred above)
   is needed there, it must be scaffolded there. The design's SYMR-12 route
   (nondegenerate root of unity, level one, `xi = q^2`) matches the finite-`e`
   nondegenerate branch of this pair.

## 6. Checks run (exact results)

| check | command | result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-44-...-batch-*.pages.json` | 783 items, 0 normalized, **0 errors** |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-44-...-batch-*.pages.json` | 783 scoped items, **0 errors, 0 warnings** |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28` | **0 errors inside this batch**; only the two batch-25 `empty scaffold inventory` rows remain (not ours); max level in this batch 9 |
| coverage | `node tools/coverage-checklist.mjs research/...-batch-24.coverage.json --require-destination` | 2 pages, 43 harvested results, **0 errors, 0 warnings** |
| source fetch (stamp) | `node tools/source-fetch-check.mjs --coverage research/...-batch-24.coverage.json --stamp` | **9/9 fetch-verified** (9 newly stamped) |
| source fetch (check) | `node tools/source-fetch-check.mjs --coverage research/...-batch-24.coverage.json` | **9/9 resolved**, 0 drops |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28` | **no error in this batch** (the `undeclared-prereq` row that appeared when the batch-17 page was consumed was repaired by the local degenerate presentation); run-level FAIL comes from 26 pre-existing `[intra-order]` rows on the batch-11 page, plus shared-plan `redundant-prereq` advisories |
| scope | `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` | **98 pages owed, 98 in manifests, no scope drift** |
| readiness | `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` | **783/783 items `ready`; 0 open rows for this batch**; run-level `closed: false` solely because of the two batch-25 `Empty scaffold inventory` rows |
| ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28` | refreshed and deduplicated; batch 24 listed in `reviewed_batches` with all 19 cross-batch edges reviewed, batch-25 the only `unreviewed` batch; the 31 same-batch rows in the input surface as in-manifest deps, not cross-batch edges. Batch-24 Step-1 section appended to `briefs/tasks/frontier-dependency-ledger.md` (marker block `frontier-44-special-representation-examples-28-batch-24-step1`) |
| url liveness | `node tools/url-sweep.mjs --coverage research/...-batch-24.coverage.json --out /tmp/b24/url-liveness.json` | **6/6 URLs live, 0 failed, 0 suspect**; 6 citation decisions, 0 documented source drops |
| source backing | `node tools/source-backing.mjs --coverage research/...-batch-24.coverage.json --liveness /tmp/b24/url-liveness.json` | **11 authored result(s) across 1 file(s), every one still backed by an openable source or documented alternative argument**; exit 0 |
| depcheck | `node tools/depcheck.mjs --items-file <the 14 ids>` | **FAIL, exit 1: 14/14 `focus-item-unknown`** (Step-1 item files are deliberately absent; the engine runs item-mode checks after authoring, Step 3). Same boundary as batches 11/17/19/20/21; not a batch finding |
| extcheck | `node tools/extcheck.mjs --items-file <the 14 ids>` | **FAIL, exit 1: 14/14 `focus-item-unknown`**, 0 items scanned for the same reason; not a batch finding |

No published carrier was edited. No `Recorded` result is consumed to prove its
replacement. No AC branch is introduced: every item is choice-free, and the
degenerate branch's field hypotheses are stated explicitly. Owner/operator
reconciliation, the Step-3 authoring review and the full engine gate still
follow; a readiness record is not independent mathematical approval.

Files written by this batch: the four
`research/frontier-44-special-representation-examples-28-batch-24.*` artifacts
(manifest, coverage, cross-batch input, these notes), the 14
`research/frontier-44-special-representation-examples-28-step1-<item>.json`
readiness records (11 of them re-recorded after the 2026-10-10 repair, 3
unchanged and still closed), the appended
`frontier-44-special-representation-examples-28-batch-24-step1` block in
`briefs/tasks/frontier-dependency-ledger.md`, and the derived unified ledger
`research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`
as regenerated by its sanctioned writer (`frontier-dependency-ledger.mjs
refresh`). `git status` confirms these are the only files this batch touched;
no item file, library page, shared plan, engine state or verdict was
modified.
