# Batch 21 — Cores, Quotients, and Blocks of Symmetric Groups

Run: `frontier-44-special-representation-examples-28`. Owned pair:
`cores-quotients-and-blocks-of-symmetric-groups` (A, order 1571) and
`cores-quotients-and-blocks-of-symmetric-groups-examples` (B, order 1572),
category `special-topics-in-representation-theory`. The scaffold holds
**13 A items and 4 B items**, all recorded `ready`, with in-run dependency
levels 0–11 on the A page and 6–10 on the B page (no cycle). Construction is
scaffold planning and readiness, not authored proof acceptance; Step 3 owns the
proofs and the full gate battery.

## Scope and governing texts

The owner direction
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read before constructing any item: all 24 planned pairs of the category are
retained with their claims, sources and proof obligations, suppliers before
consumers, no new pairs, no publication. The pair keeps the design route of
`research/plan-symmetric-group-representations-track.md` (the SYMR-8 row at L43,
whose binding item inventory is the SYMR-8 section of
`research/symmetric-group-planning/proposed-inventory.md`): the beta-set and
e-runner abacus model, the hook/bead-gap correspondence, the e-core/e-quotient/
e-weight definitions with the order-independent core theorem, the quotient
control of e-divisible hooks and the size/weight formula, the q-Schur block
separation lemma and the Weyl-module block theorem via the Jantzen sum formula,
the Hecke Specht corollary through the Schur functor, the Nakayama block
classification at q = 1, the weight-zero defect-zero proposition, the weight-one
bidiagonal decomposition pattern, the weight-versus-defect boundary remark, and
on the B companion the e = 3 abacus example for (6,5,2,1^3), the (4,3,2,1)
3-core example, the S_3 weight-one decomposition matrix and the removable-hook
counterexample.

`research/plan-spec.json` carries only the planned page shells for this pair
(`"items": []` for orders 1571 and 1572), so there is **no plan-vs-design
inventory conflict at item level**; the design's proposed inventory is the item
source and the plan's page objects (title, companion, category, orders,
`requires`) are preserved verbatim in the manifest. The only plan-level output
for this page is the advisory `redundant-prereq` list of the shared canonical
`requires` chain (`integral-specht-modules-and-modular-simple-modules`,
`grothendieck-groups-and-graded-cartan-pairings` and `artinian-rings-and-length`
are already reached through other declared prerequisites); the shared list was
not edited here. Note that **no item of this page consumes an item of
`artinian-rings-and-length`**: the design table for SYMR-8 does not use it
either (the generic Artinian block machinery was replaced by the batch-20
finite-dimensional central-idempotent items), so the declared require is
currently unreferenced at item level — recorded for owner/Alpha reconciliation.

### Design/plan reconciliation recorded for the owner

1. **Inventory is the design's 13 + 4.** No item was added, removed or
   weakened relative to the SYMR-8 tables; no local prerequisite beyond the
   design's list was needed because every proof joint is either in a declared
   supplier or in the abacus theory of this page (the bead-gap/removal lemma).
   The design's B item `ex-three-core-and-three-quotient-by-abacus` keeps the
   source's example; the design's counterexample keeps its role but uses the
   verified pair (5)/(4,1) at p = 3.
2. **Hypotheses repaired on the q-Schur block theorem.** The design states it
   for "a field `F`, `d>=n`, and `e` the quantum characteristic in the q-Schaper
   modular-system setup". The printed proof uses the Jantzen sum formula of
   Mathas Theorem 5.31, whose hypotheses are a PID `R`, a prime `pi`, a lift
   `q-hat` of `q` with `[n]!_{q-hat} != 0`. The manifest states the theorem in
   that exact setup and records in the strategy that such a lift always exists
   (for instance `R = F[X]` localised at `(X-q)`, `pi = X-q`, `q-hat = X`), so
   the field statement is recovered. This is a hypothesis clarification, not a
   weakening.
3. **Completion of the Hecke corollary's proof.** The source's printed proof of
   Corollary 5.37 is terse at the step "S^lambda and S^mu in the same block only
   if they have the same e-core": it invokes Proposition 4.19 and Theorem 5.36
   without the intermediate argument. The scaffold records a complete route:
   the corner idempotents `e_C e = e e_C e` of `H = eSe` are pairwise
   orthogonal nonzero central idempotents summing to `1_H`, so the supports of
   the q-Schur blocks partition the Hecke blocks, giving `#blocks(H) >=
   #blocks(S)`; the source's direct-product identity
   `End_H(M) = product_i End_{B_i}(M B_i)` gives `#blocks(S) >= #blocks(H)`;
   equality forces the block correspondence to be a bijection, and Theorem 5.36
   transfers. The same proposition is stated with a complete proof as
   Proposition 2.3 of Lyle–Mathas, which is registered as a source and whose
   argument was followed. Step 3 must keep this idempotent-transfer argument.
4. **Dependency repairs relative to the design table (all additions are
   genuine direct uses).** (a) `lem-hooks-are-bead-gap-pairs-on-an-abacus`
   carries the removable-strip language and therefore depends on the batch-19
   `def-removable-border-strip-and-height` and
   `lem-hooks-correspond-to-removable-border-strips`, which
   `thm-e-core-is-independent-of-the-rim-hook-removal-order` also consumes
   (the design listed only the definition; its proof route needs the bead-slide
   identification and the strip identification). (b)
   `lem-virtual-weyl-combinations-detect-q-schur-block-separation` gains
   `lem-semistandard-weight-dimensions-detect-virtual-weyl-classes` (batch 20),
   which is exactly the linear independence of the Weyl classes the design's
   route asks for. (c) The q-Schur block theorem gains
   `def-quantum-characteristic-...`, `def-q-integer-...` and
   `def-dominance-order-on-partitions` (the valuation test
   `nu_pi([h]_{q-hat}) != 0 <=> e | h` and the ordering of the induction moves).
   (d) The Hecke corollary gains the batch-20 Schur-idempotent and
   Schur-functor items and the two central-idempotent lemmas, as used by the
   completed argument of item 3. (e) The Nakayama theorem gains
   `def-splitting-p-modular-system-for-a-finite-group` and
   `prop-core-quotient-size-and-weight-formula` (the `(gamma,w)` indexing), and
   the weight-zero proposition gains `def-p-blocks-by-primitive-central-idempotents`.
   (f) The weight-one theorem gains the batch-20 q-Schur/Schur-functor items
   needed to state the Weyl matrix and its Specht translation, and the
   block-separation lemma used in the triangular solution. (g) On the B page,
   `ex-three-core-of-four-three-two-one` gains the size formula and the
   `ex-a-weight-one-block-decomposition-matrix` example gains the Nakayama
   theorem and the published p-regular simple-label theorem (the B-page item
   must not depend on another B page's published example, so the independent
   cross-check is the direct computation from the standard module, see item 5).
5. **Weight-one e-restricted pattern checked independently.** The design's
   claim that among the e weight-one partitions `lambda_1 > ... > lambda_e` the
   dominance-largest `lambda_1` is not e-restricted while the other e-1 are
   e-restricted is not in the printed wording of Mathas Proposition 5.38; the
   scaffolder verified it computationally for e = 2, 3, 4, 5 over all cores
   with n <= 18 using a scratch beta-set/abacus script (kept under /tmp, not a
   repo deliverable): in every case there are exactly e partitions, the
   dominance order is linear on them, and the e-restricted pattern is exactly
   `[False, True, ..., True]`. Step 3 must prove it from the Jantzen
   computation together with the e-restricted simple classification.
6. **Dipper–James translation on the B example.** The weight-one example is
   stated in the source's Weyl/simple normalisation, then translated with the
   conjugation/duality dictionary `S^lambda_DJ = (S^{lambda'}_M)^*`,
   `D^lambda_DJ = (D^{lambda'}_M)^*` of the batch-20 Specht-module definition
   item. The resulting p-regular matrix
   `[[1,0],[1,1],[0,1]]` with rows `(3),(2,1),(1,1,1)` was checked against a
   direct computation in characteristic 3 (the all-ones vector of `S^(2,1)`
   spans a trivial submodule with sign quotient, and `S^(3) = triv`,
   `S^(1^1^1) = sgn`); the identical numerical case p = 2 was checked with the
   scratch abacus script (core `(1)`, partitions `(3)` and `(1,1,1)`, both with
   class `[triv]`). The dictionary's index bookkeeping is the one place where
   Step 3 must be explicit.

## Mathematical closure and dependency verification

Every item was checked against the actual statements of its suppliers; the
published items were read on disk, the batch-19 and batch-20 suppliers were read
in their manifest form (they are scaffolded, not authored), and the four source
treatments were read at the exact locators recorded in the coverage file. Key
verifications performed while constructing this scaffold:

- **Abacus theory (Tomczak §4.1, printed pp. 53–64).** The beta-set
  definition, the shift and Lemma 4.2 (`P(X) = lambda` iff `X = X_lambda + l`),
  Lemma 4.1/4.4/Corollary 4.5 (row hook lengths as gaps), Proposition 4.7 (the
  hook-removal beta-set formula `(X minus {h_i}) union {h_i - h_{i,j}}`),
  Corollary 4.8 (removal of an e-hook = sliding a bead one row up), Lemma 4.9
  (the shift permutes the runners cyclically), Theorems 4.10–4.11 and
  Proposition 4.12 were read in the complete text. The worked example
  `lambda = (6,5,2,1^3)`, `e = 3` was recomputed independently: the beta-set is
  `{11,9,5,3,2,1}`, the top-packed configuration gives `C_3(lambda) = (3,1)`,
  the runner row-label sets are `{3,1}`, `{0}`, `{3,1,0}` and
  `Q_3(lambda) = ((2,1),empty,(1))`, with `16 = 4 + 3*4` and four bead moves.
  The source's own `(4,3,2,1)` reduction to 3-core `(1)` was also recomputed
  (beta-set `{7,5,3,1}`, top-packed `{4,2,1,0}`, `P = (1)`).
- **q-Schur block theorem (Mathas Lemma 5.34, Lemma 5.35, Theorem 5.36, Corollary
  5.37, Proposition 5.38, printed pp. 60–63).** The statement and both
  directions of the proof of Theorem 5.36 were read: the Jantzen sum formula,
  the valuation step (`nu_pi([h]_{q-hat}) != 0` forces `[h]_q = 0`, hence `e | h`),
  the beta-displacement index of Lemma 5.26 and the linkage induction. The exact
  multiplicity comparison and the direct-product block count of Corollary 5.37
  were read verbatim ("the number of block ideals contained in S(d,n) is at
  least as great as the number of blocks in H"); Proposition 5.38 and its
  Jantzen computation (the alternating sums `sum_{i>0} W^{lambda_k}(i) ~
  sum_{j>k} (-1)^{j-k+1} W^{lambda_j}`) were read. The (4,3,2,1) example on the
  printed page was matched with the recomputation.
- **Block correspondence (Lyle–Mathas, pp. 4–7).** Proposition 2.3 with its
  complete proof, Lemma 2.4 (linear independence of the Weyl classes) and
  Proposition 2.9 (blocks = Jantzen equivalence classes, with the argument
  `sum_{mu in Lambda'} J_{lambda mu}[Delta(mu)] = 0 => J_{lambda mu} = 0`) were
  read in the complete 19-page preprint, and its numbering and page markers were
  verified from the PDF text.
- **Nakayama statement (O'Donovan, pp. 1–6 and §5).** Theorem 1 and the
  surrounding p-core/p-weight definitions were read; the paper is registered as
  the independent treatment of the classification statement (its Young-module/
  Brauer-quotient proof route is not the one used on this page, and its sections
  2–5 are disposed out-of-scope in the coverage file).
- **Interfaces of the published suppliers.** The statements of
  `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
  `thm-cartan-matrix-is-d-transpose-d`,
  `thm-defect-zero-blocks-are-simple-algebras`,
  `def-defect-group-and-numerical-defect-of-a-block`,
  `def-p-blocks-by-primitive-central-idempotents`,
  `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
  `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
  `def-grothendieck-group-of-an-essentially-small-abelian-category`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-hook-arm-leg-and-hook-length` and `def-dominance-order-on-partitions`
  were read on disk and their hypotheses and directions matched the uses here
  (in particular the dominance orientation of the decomposition matrix is used
  only in the form `d_{lambda lambda} = 1`, which is orientation-free).
- **Choice and axiom strength.** Every item on both pages is choice-free: the
  abacus, Jantzen and Schur-functor arguments use only finite constructions and
  finite choices of bases, generators and lifts; the block calculus uses the
  finite-dimensional primitive-central-idempotent decomposition of the batch-20
  items, which is proved without the Artinian structure theorem. No item reaches
  `deferred-set-theory-beyond-choice` through any proof or prerequisite path,
  and no AC branch is introduced.
- **In-run transitive closure.** The only in-run suppliers are the batch-19
  hook/border-strip items and the batch-20 Hecke/q-Schur items; all edges are
  declared in the item `deps` arrays and in the cross-batch input file (25 item
  rows plus one page row). No other batch of this run is consumed.

## Sources and fetch evidence

Four complete treatments back the pair, two of them primary (a full textbook
manuscript and a full lecture-note set):

1. Andrew Mathas, *Hecke algebras and Schur algebras of the symmetric group*,
   complete 79-page prepublication manuscript (1998; the 1999 AMS edition is an
   edition boundary and no statement from its unseen Chapter 6 is used). URL:
   https://web.math.ucsb.edu/~bigelow/books/mathas.pdf. Locators: Chapter 4 §3
   (pp. 47–52) and Chapter 5 §§2–4 (pp. 54–65) with Lemma 5.34, Lemma 5.35,
   Theorem 5.36, Corollary 5.37, Proposition 5.38 and the (4,3,2,1) example.
2. Stacey Law (lecturer), notes by Leonard Tomczak, *Representation Theory of
   Symmetric Groups*, Cambridge Part III Michaelmas 2022, complete 76-page
   lecture notes. URL:
   https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf. Locators:
   §4.1, printed pp. 53–64 (Lemmas 4.1–4.9, Theorems 4.10–4.11, Proposition
   4.12, the e = 3 example, and the deferred quotient-tower material).
3. William O'Donovan, *A New Proof of Nakayama's Conjecture via Brauer
   Quotients of Young Modules*, arXiv:1708.04365, complete 16-page preprint.
   URL: https://arxiv.org/pdf/1708.04365. Locators: §1, pp. 1–6 (Theorem 1)
   with the proof overview in §5, pp. 13–14.
4. Sinéad Lyle and Andrew Mathas, *Blocks of affine and cyclotomic Hecke
   algebras*, author-hosted complete 19-page preprint (published in Math. Z.).
   URL: https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2006/lyle-24.pdf.
   Locators: §§2.1–2.3, pp. 4–7 (Lemmas 2.1–2.4, Proposition 2.3 and
   Proposition 2.9 with their proofs).

`node tools/source-fetch-check.mjs --coverage
research/frontier-44-special-representation-examples-28-batch-21.coverage.json
--stamp` returns `6/6 source(s) fetch-verified` (the two repeated citations on
the B page were stamped separately); check mode without network returns
`6/6 source(s) fetch-verified` and `6/6 source(s) resolved`.
`node tools/url-sweep.mjs --coverage <file> --out /tmp/b21/urls.json --recover`
reports `4/4 live; 0 failed`, and `node tools/source-backing.mjs --coverage
<file> --liveness /tmp/b21/urls.json --reharvest-plan /tmp/b21/reharvest.json`
reports `15 authored result(s) ... every one still backed by an openable source`.
The coverage file disposes **37 harvested source results** (A page: 20 included,
11 inline, 1 deferred with destination, 5 out-of-scope with reasons; B page: 4
included, 2 inline) with **0 errors and 0 warnings**.

## Cross-batch dependency input

`research/frontier-44-special-representation-examples-28-batch-21.cross-batch-dependencies.json`
holds 26 open rows: two item rows to the batch-19 rim-hook/border-strip items
(`def-removable-border-strip-and-height`,
`lem-hooks-correspond-to-removable-border-strips`), 23 item rows to the batch-20
Hecke/q-Schur items (Jantzen/q-Schaper, q-Schur algebra and Weyl modules, Schur
idempotent and Schur functor, block idempotents and the two central-idempotent
lemmas, quantum characteristic, weight-space detection, the q = 1
specialisation, and the Specht-module convention), each with the exact required
claim and use, and one page row for the declared edge
`cores-quotients-and-blocks-of-symmetric-groups ->
type-a-hecke-specht-modules-and-cellular-bases` (batch 20, scaffolded with 29 A
and 5 B items, not yet authored). The unified ledger was refreshed with
`node tools/frontier-dependency-ledger.mjs refresh --run
frontier-44-special-representation-examples-28`; the remaining unreviewed
batches are run state, not findings of this batch. All other suppliers of this
pair (the published SYMR-6, Grothendieck, blocks/defect and ordinary
partition/hook pages) are published content, so no further consumer rows are
owed.

## Checks run (exact results)

| check | command | result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-44-…-batch-*.pages.json` | 357 items (final run state while sibling batches are still being scaffolded), 0 normalized, **0 errors** |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-44-…-batch-*.pages.json` | 357 scoped items, **0 errors, 0 warnings** |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28` | no batch-21 error; this batch's labels match the computed levels (A max 11, B max 10); the remaining `empty scaffold inventory` rows and level mismatches belong to other, still-unfinished batches |
| coverage | `node tools/coverage-checklist.mjs <batch coverage> --require-destination` | 2 pages, 37 harvested results, **0 errors, 0 warnings** |
| source fetch | `node tools/source-fetch-check.mjs --coverage <batch coverage> --stamp`, then check mode | **6/6 fetch-verified**, 0 drops |
| url liveness | `node tools/url-sweep.mjs --coverage <batch coverage> --out /tmp/b21/urls.json --recover` | **4/4 live**, 0 failed, 4 citation decisions, 0 documented drops |
| source backing | `node tools/source-backing.mjs --coverage <batch coverage> --liveness /tmp/b21/urls.json --reharvest-plan /tmp/b21/reharvest.json` | 15 authored results, every one backed by an openable source |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-…` | **OK** (acyclic and consistent; no item-level cycles, no forward references, no B-page dependencies, no unresolved ids); only shared-plan `redundant-prereq` advisories remain on this page's canonical `requires` chain |
| scope | `node tools/manifest-integrity.mjs --run frontier-44-…` | 56 pages owed, 56 in manifests, **no scope drift** |
| readiness | `node tools/step1-decisions.mjs check --run frontier-44-…` | all **17 batch-21 records closed** (ready, non-owner); the run is not closed because other batches are still scaffolding |
| ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-…` | refreshed and deduplicated; batch-21 input accepted |
| depcheck / extcheck / fwdcheck | `node tools/depcheck.mjs --items-file /tmp/b21/items.json`, `extcheck`, `fwdcheck` | each fails with `focus-item-unknown` because Step-1 item files are deliberately absent; the engine runs these after authoring (Step 3). Not a batch finding |
| depsource | `node tools/depsource.mjs --items-file /tmp/b21/items.json --run frontier-44-…` | fails at `readRunManifestPages` with `Invalid or empty current page in frontier-44-…-batch-10.pages.json`: a run-state failure from another batch whose manifest page is still an empty inventory, not a batch-21 finding. Recorded for the operator; it clears as the remaining batches are scaffolded |

## Published defects and open obligations

No defect was confirmed in any consumed published item. The interfaces read
were the SYMR-6 integral/modular items
(`def-integral-specht-lattice-and-base-change`,
`def-modular-specht-form-and-radical-quotient`,
`def-p-regular-and-p-restricted-partitions`,
`thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
`thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`),
the Cartan identity `thm-cartan-matrix-is-d-transpose-d`, the block/defect items
`def-p-blocks-by-primitive-central-idempotents`,
`def-defect-group-and-numerical-defect-of-a-block`,
`thm-defect-zero-blocks-are-simple-algebras`, the Grothendieck item
`def-grothendieck-group-of-an-essentially-small-abelian-category`, and the
ordinary partition/hook/dominance items; all statements matched the uses.

Open obligations and uncertainties, honestly recorded:

- The batch-19 hook/border-strip suppliers and every batch-20 Hecke/q-Schur
  supplier used here are **scaffolded but not yet authored**; the 26 cross-batch
  rows stay open until Step 3 authors and Step 5 reviews them.
- The completed route for the Hecke block corollary (item 3 above) is the
  scaffold's own assembly of the source's terse printed step; it is not a
  verbatim source argument, and Step 3 must either reproduce the idempotent
  transfer argument or cite the Lyle–Mathas Proposition 2.3 proof.
- The printed case `t` dominating `s` in the batch-20 seminormal theorem was
  already repaired in batch 20; nothing here depends on that display.
- The general defect-group computation for weight-w blocks (defect
  `nu_p((p w)!)`, defect group a Sylow p-subgroup of `S_{p w}`, abelian iff
  `w < p`) was read as a cross-check in Eisele's dissertation Remark 2.139 but is
  deliberately **not asserted** on this page: no counted proof source is
  registered with this batch, exactly as the design requires, so
  `rem-block-weight-is-not-the-same-as-numerical-defect` records only the
  definitional distinction and the proved weight-zero case.
- The `redundant-prereq` advisories and the currently unreferenced
  `artinian-rings-and-length` require are shared-plan matters for owner/Alpha
  reconciliation; the plan was not edited.

Owner/operator reconciliation, the Step-3 authoring review and the full engine
gate still follow; a readiness record is not independent mathematical approval.


## One-time owner-authorized cellular consumer repair and actual proof instantiation

Original source20 escalation remains recorded at exhausted round 2 of 2. The owner authorized one bounded exceptional repair, including necessary affected consumers; no counter reset or new round occurs. The earlier guarded phrase deletion and frozen source20/source21 proof instantiation are preserved.

The actual NEW50 supplier research/frontier-44-special-representation-examples-28-batch-50.pages.json (SHA-256 a7e48637134b9eede4b257ebc4ccb2f09fe072be7efb0ea06c4a37a0fc882224) independently proves the arbitrary-ring ordinary polytabloid to signed-conjugate Murphy module isomorphism and exact Laurent-unit self-form comparison. Its factor is q^{N(lambda-prime)-length(w_lambda)}, hence exactly 1 at q=1 over every field. This supplies the ordinary module/form and PID Jantzen prerequisite; it is not a citation to an inaccessible primary proof. Same-shape contragredient duality is distinct from signed conjugation. Future authoring must use thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell and cor-dj-bridge-specialization-and-composition-multiplicity-dictionary through the corrected Definition. The printed p25 untwisted convention warning is not accepted as a proof premise.

The S3 characteristic3 example retains the numeric 3x3 associated q-Schur Weyl/simple matrix and the numeric 3x2 ordinary group matrix. The former is now named as the associated q-Schur block, d>=3. Conjugate module identities carry theta/sign, and shape(2,1) removes its unique3-rim hook to the empty core.

Historical source-reading and retrieval attempts are unchanged. No new full reading or retry is claimed. Guarded construction and affected-consumer evidence are in research/frontier-44-special-representation-examples-28-owner-cell-head-classification-repair/owner-authorized-phrase-deletion-exception/complete-one-time-consumer-extension. Root alone owns native integration, records and gates; same reviewer actual after-binding acceptance remains required.


## Same-reviewer Step3 constructive formula and block proof

This is first coherent current authored proof/binding reconciliation, with original cellular2/2 plus ONE exceptional history retained. The Mathas displayed beta indices contain an actual degree/sorting inconsistency; the proposed proof does not accept them as premises. The corrected alternating symbol uses the balanced transfer beta+h_ac*e_b-h_ac*e_c. The Gram construction proves the monic semistandard norm q^ell(last(T))*gamma_T, the strict Gamma boundary, a complete bead-indicator recursion for the hook exponents, and integral specialization before any vanishing-ratio evaluation. Necessary full proof carriers are `gram-constructor/proof-construction.md` and its retained strict-boundary clarification under the current owner research scope. Genuine selected full source reading is recorded in the constructor's input/source evidence for Mathas printedpp46–57 and58–60; it is not a claim to have read the whole book.

The Jantzen sum counts positive filtration submodules, not successive quotients. Multiplicity bounds refer to the whole sum after expansion in simple classes and cancellation. Integral Schur corner transport is proved with exact form factor1. The shape(3,2) example uses the actual balanced five-entry beta sequence and actual regular-weight Gram products; its ordinary nonregular Specht can be simple with zero cell-form quotient. The root-of-unity lift is the DVR C[qhat]_(1+qhat), where qhat is a unit.

The same-core q-Schur proof includes a complete local fixed-core connectivity construction (rather than the manuscript's false universal first-row-move argument), using actual selected full Lyle–Mathas Prop3.6(b),3.7 and4.2–4.3 proof text as source context only, without a source24 supplier backcycle. Carriers `core-constructor/fixed-core-connectivity-lemma.md` and `core-constructor/thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core.proposed-round1-complete.md` contain the full argument. The exact weight-one matrices retain their entries; the char3 example usesq1 over every characteristic3 field, with no impossible primitive cube-root requirement.
