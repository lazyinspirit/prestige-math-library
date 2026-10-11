# Batch 5 notes — `divided-powers-integral-forms-and-quantum-highest-weights` / `…-examples`

Run `frontier-44-special-representation-examples-28`, role beta, label batch-5, 2026-10-08.
Written files: `research/frontier-44-special-representation-examples-28-batch-5.pages.json`,
`…-batch-5.coverage.json` (with fetch stamps), `…-batch-5.cross-batch-dependencies.json` (`[]`),
the 20 `…-step1-<id>.json` readiness records, and this note. No published content, shared plan,
engine state or verdict was edited.

## Scope built

- A page `divided-powers-integral-forms-and-quantum-highest-weights` (order 1526): **16 new items**
  (7 definitions, 3 lemmas, 4 theorems, 2 propositions), dependency levels 0–5.
- B page `…-examples` (order 1527): **4 new items** (3 examples, 1 counterexample), levels 2–6.
- Full inventory (in manifest order; `L` = recomputed in-run `dependency_level`):
  - A: `def-lusztig-divided-power-integral-form` L0; `lem-the-lusztig-integral-form-is-stable-under-bar-and-contravariant-duality` L1;
    `lem-divided-power-and-toral-quantum-binomial-reordering-identities` L1;
    `thm-integral-triangular-decomposition-for-the-lusztig-form` L2;
    `def-quantum-weight-module-and-integrability` L0;
    `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators` L1;
    `def-quantum-verma-module-and-simple-highest-weight-quotient` L1;
    `def-kashiwara-skew-derivations-on-the-negative-quantum-half` L0;
    `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half` L1;
    `lem-the-negative-half-is-separated-by-iterated-skew-derivations` L2;
    `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` L3;
    `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` L3;
    `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` L2;
    `def-contravariant-form-on-an-integrable-quantum-highest-weight-module` L3;
    `thm-quantum-highest-weight-modules-deform-the-classical-weight-character` L4;
    `prop-integrable-quantum-highest-weight-modules-are-semisimple` L5.
  - B: `ex-divided-powers-and-lusztig-form-in-quantized-sl-two` L2; `ex-quantum-verma-and-simple-modules-for-sl-two` L3;
    `ex-specializing-a-quantum-highest-weight-lattice-at-q-one` L5; `cex-direct-q-one-substitution-in-quantum-denominators` L6.
- No cycles. Items were listed in a linear extension of the page dependency graphs after the first
  `validate-plan --run` pass reported one `intra-order` error (the q-one toral lemma preceded its
  weight-module prerequisite); the reordered manifest passes.

## Which design controls, and design-vs-plan conflicts

The binding texts are `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
(read in full before constructing; it authorizes the 24 special-topics pairs plus four B pages,
requires suppliers before consumers, and forbids publication) and the design
`research/plan-quantum-groups-track.md` **QG-2** at L87–L110 with the QG-2 B inventory at L263–L269.
`research/plan-spec.json` orders 1526/1527 carry the same ids, kinds, companions and `requires`
(`quantized-enveloping-algebras-and-quantum-serre-relations`, `integrable-highest-weight-kac-moody-modules`)
with empty item arrays. **No design-vs-plan conflict was found**; the plan controls and was followed.

Recorded deviations and findings for Alpha/owner (all recorded here because they change or narrow
design text, none of them weakens a published claim):

1. **`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` — "integrality"
   corrected.** The design asks for "integrality on the divided-power form". In the JKK normalization
   `(1,1)=1`, `(F_iP,Q)=(P,e_i'Q)` this is false as a bare statement: the rank-one computation gives
   `(F_i^{(a)},F_i^{(b)}) = δ_{ab} q_i^{-a(a-1)/2}/[a]_i! = δ_{ab}/[a]_{q_i^2}!`, so
   `(F_i^{(2)},F_i^{(2)}) = 1/(1+q_i^2) ∉ A` (verified here). The item states instead the two exact
   facts: the form is `A`-valued on the `A`-span `W` of the words in the `F_i` (proved by induction on
   the first argument, integrality of `e_i'`), and on the divided-power lattice the values are the
   Gaussian-factorial inverses with the explicit witness. The word lattice is strictly smaller than
   `U_A^-`.
2. **`prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` — scope of the toral
   clause.** The item asserts (i) the Serre elements specialize to the classical ones and the half maps
   `U(𝔫^±)_k → U_A^±⊗_A k` are isomorphisms (AC declared, used only through the published generic-half
   rank theorem), (ii) `K_h ↦ 1` and the operator-level toral specialization on lattice weight modules
   (JKK/Stanford-slides route), (iii) the Cartan commutator families on lattice modules. It does **not**
   assert the algebra-level identity `T̄_{i,c,t} = binom(T̄_{i,0,1}+c, t)` or a kernel statement for the
   toral part; those would need a separate argument not available at scaffold time. Direct substitution
   `q=1` is forbidden (Berkeley, Lusztig 33.1).
3. **`def-contravariant-form-on-an-integrable-quantum-highest-weight-module` — one sourced step.**
   Uniqueness, orthogonality and nondegeneracy are proved inline; the *existence/descent* of the form is
   the source's "standard arguments" statement (JKK (2.3); Kashiwara Prop. 3.4.4 constructs the analogous
   form on `U^-` through the dual module). The strategy records this as the one step to be reproduced by
   the Step-3 author in the library's conventions.
4. **`lem-the-negative-half-is-separated-by-iterated-skew-derivations` / form theorem — AC declared and
   localized.** The route identifies the radical of the free-algebra form with the Serre ideal via
   Lusztig 33.1.1 and 33.1.3(a),(b) together with the published component rank comparison
   `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing`(i);
   that supplier assumes AC, so AC is declared in the separation lemma and inherited by the form theorem
   and by the two later items that use them (see "Choice" below). Everything else on the page
   (rank-one computations, triangular decomposition, integrability, the Verma/string theory, the
   contravariant form on the simple module) is choice-free.
5. **`thm-quantum-highest-weight-modules-deform-the-classical-weight-character` — general-case
   multiplicities cite a source with a regularity hypothesis.** The finite-type case follows Berkeley
   Theorem 13.2.1.10 verbatim; the general symmetrizable case is Lusztig Theorem 33.1.3(d), stated in the
   book for regular root data, and that hypothesis is recorded in the item rather than assumed silently.
6. **No imaginary simple roots.** The library's `def-generalized-cartan-matrix` has `a_ii = 2`, so all
   `U_A`-form and specialization statements are restricted to the generalized-Cartan-matrix case; the
   Borcherds-general (`a_ii ≤ 0`) branches of JKK are recorded as out of scope in the coverage file.

## Sources (read at the recorded locators; all fetch-verified)

- G. Lusztig, *Introduction to Quantum Groups* (monograph, author-hosted scan,
  `https://math.mit.edu/~gyuri/papers/quant.gr.pdf`), printed pp. 4–9 (Ch. 1 §1.2.3–1.2.15: the inner
  product on the free algebra, the radical and the quotient `f`, the skew derivations `r_i`, `r̄_i` and
  the separation Lemma 1.2.15), pp. 185–188 (Ch. 23 §23.1–23.2: divided powers, identity 23.1.3(6), the
  `A`-form and its `A`-basis), pp. 245–246 (Ch. 31 §31.1), pp. 258–260 (Ch. 33 §33.1.1–33.1.3:
  specialization `v=1`, Serre quotient = `f`, the dimension comparison and Theorem 33.1.3(d)).
- K. Jeong, S.-J. Kang and M. Kashiwara, *Crystal Bases for Quantum Generalized Kac-Moody Algebras*
  (paper, `https://arxiv.org/pdf/math/0305390`), §1 pp. 5–6, §2 pp. 7–8 ((2.1)–(2.4), Prop. 2.2), §3
  pp. 9–13 (Def. 3.1, Lemmas 3.5–3.6, Thm. 3.7), §6 pp. 22–23 ((6.1)–(6.6), Prop. 6.1).
- Borcherds–Haiman–Johnson-Freyd–Reshetikhin–Serganova, *Berkeley Lectures on Lie Groups and Quantum
  Groups* (book-length lecture notes, `https://categorified.net/LieQuantumGroups.pdf`), Ch. 12
  §12.2.1–12.2.2 pp. 275–281, Ch. 13 §13.1.1–13.1.3 pp. 297–310, Ch. 13 §13.2.1 pp. 313–318
  (Theorem 13.2.1.10 and its proof; Corollary 13.2.1.11).
- Stanford Math 263C *Quantum Groups* lecture slides (lecture-notes,
  `http://sporadic.stanford.edu/quantum/lecture16.pdf`): "The restricted quantum group", "Certain
  important elements" (the toral recursion and the `E^{(r)}F^{(r)}` identity).
- M. Kashiwara, *On crystal bases of the q-analogue of universal enveloping algebras* (paper,
  `https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf`), §3
  (Proposition 3.4.4 and the string propositions 3.4.5–3.4.6).
- The A-page coverage entry harvests 33 source headings (included/inline/already-published rows for the
  items above; the root-of-unity chapters 34–35, the canonical-basis chapters and the crystal sections
  are disposed with reasons and, for deferrals, resolving destinations
  `kashiwara-operators-and-crystal-lattices` and `klr-algebras-induction-and-quantum-serre-categorification`).
  The B-page entry harvests 7 headings, all `included`, each pointing at one of the four B items.

## Checks actually run (results on this batch's current files)

- `node tools/source-fetch-check.mjs --coverage …-batch-5.coverage.json --stamp` → **8/8
  fetch-verified** (8 stamps; 5 distinct documents); gate mode re-run → 8/8 fetch-verified.
- `node tools/url-sweep.mjs --coverage …-batch-5.coverage.json --recover --fail-on-dead --out /tmp/b5/liveness.json`
  → **5/5 live, 0 failed, 0 recoverable** (5 distinct URLs; arXiv uses `/pdf/`).
- `node tools/source-backing.mjs --coverage …-batch-5.coverage.json --liveness /tmp/b5/liveness.json`
  → 18 authored result(s) across 1 file, every one still backed by an openable source; no errors.
  (18 rather than 20 because two items carry only inline-disposed harvested results in the counter and
  are counted under their supplying rows; both carry full URL references in the manifest.)
- `node tools/coverage-checklist.mjs …-batch-5.coverage.json --require-destination` → 2 pages,
  40 harvested results, **0 errors, 0 warnings**.
- `node tools/manifest-deps.mjs …-batch-5.pages.json` → 20 items, 0 normalized, **0 errors**.
- `node tools/content-policy.mjs --manifest-only …-batch-5.pages.json` → 20 scoped items,
  **0 errors, 0 warnings**.
- `node tools/item-dependency-levels.mjs check --run …` → no error touches any batch-5 item; the
  reported errors are the other batches' still-empty scaffold inventories (36 such errors at the time
  of the run). Max in-run level on this batch: 6 (`cex-direct-q-one-substitution-in-quantum-denominators`).
- `node tools/validate-plan.mjs research/plan-spec.json --run …` → after the item reordering, no
  item-level cycles, forward references, B-page dependencies or unresolved ids for the pages with item
  lists; the two batch-5 pages show 16 and 4 items, and the downstream consumers 1528, 1532, 1536 see
  the new suppliers. (The first pass caught exactly one `intra-order` error, recorded above.)
- `node tools/extcheck.mjs` → OK, 26654 items, 0 recorded-not-proved.
- `node tools/step1-decisions.mjs record` (20 calls, one per item, all `ready`, dependencies = the
  manifest dep arrays as examined) and `… check --run …` → none of the 20 batch-5 items is in the
  unresolved work list; the remaining unresolved entries belong to other batches.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → refreshed and deduplicated with the
  batch-5 input present; `…-batch-5.cross-batch-dependencies.json` is `[]` because every supplier of
  this batch is either published out-of-run or same-batch (no cross-batch edges were added).

## Dependency verification

Every declared dep resolves on disk (published items) or to a batch-5 item, and each is used by the
recorded strategy: QG-1 suppliers (`def-drinfeld-jimbo-quantized-enveloping-algebra`,
`def-quantum-integers-factorials-and-divided-powers-at-q-i`,
`lem-quantum-pascal-recurrence-and-gaussian-integrality`,
`thm-quantized-sl-two-string-formulas`, `thm-triangular-decomposition-of-a-quantized-enveloping-algebra`,
`thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing`,
`def-positive-negative-and-toral-quantum-subalgebras`,
`lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions`), the classical page
(`def-integrable-kac-moody-module`, `def-kac-moody-integral-and-dominant-integral-weights`,
`thm-serre-presentation-of-a-kac-moody-algebra`), and algebra/PID items
(`def-the-laurent-polynomial-ring`, `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free`,
`def-principal-ideal-domain`, `def-annihilator-and-torsion-of-a-module`, `def-submodule`,
`def-direct-sum-of-a-family-of-modules`, `def-quotient-ring`). Hypotheses, directions and conventions
were checked against the published statements (row convention `⟨α_j,h_i⟩=a_ij`, inverse-torus
coproduct, `q_i=q^{d_i}`); the two sign conventions that are easy to get wrong (the twisted Leibniz
twists and the operators produced by the `K_i` and `K_i^{-1}` coefficients of (6.1)) were recomputed
explicitly during construction. No missing, circular, forward or inadequate dependency was found; no
Recorded result is consumed; no page reaches `deferred-set-theory-beyond-choice` through these proofs.
No record was overturned: nothing in this batch depends on a published item whose statement was
changed.

## Choice

AC is declared in four items, each with its exact use:
`prop-specialization-at-q-one-recovers-the-classical-enveloping-relations` (half rank comparison via the
published generic-half theorem),
`lem-the-negative-half-is-separated-by-iterated-skew-derivations` (radical = Serre ideal via Lusztig's
degreewise dimension comparison), the form theorem (inherited from the separation lemma), and
`prop-integrable-quantum-highest-weight-modules-are-semisimple` (simultaneous selection of singular
vector bases and the algebraic direct-sum decomposition, mirroring the published classical analogue).
`thm-quantum-highest-weight-modules-deform-the-classical-weight-character` inherits AC from the
specialization proposition. All other items are choice-free, and the finite-induction case of the
semisimplicity proposition is choice-free.

## Readiness records and residual state

All 20 items were recorded `ready` via `tools/step1-decisions.mjs` with their examined dependency
arrays, and `check --run` currently lists none of them as unresolved. As batch-1 noted for the same
run, a readiness record's hash covers the transitive closure against the whole run's manifests plus
`plan-spec.json`; sibling batches that scaffold preserved published pages can therefore invalidate
these fingerprints mechanically even though the mathematical evidence (complete strategy, examined
dependencies, fetch stamps) is unchanged. Batches 12, 19 and 26 were still writing when this note was
finalized, so a final whole-run re-record pass may be needed before the `step1-readiness` gate closes;
there is no mechanical repair for that gate.

## Escalations, uncertainty, published defects

- No defect was found in any published supplier during this pass; the published items read (QG-1, the
  integrable/classical page and the algebra/PID items) match how this batch uses them.
- The open points recorded for Alpha/owner are the six design deviations above; the only genuinely
  open *mathematical* step is the descent/existence argument in the contravariant-form definition
  (item 3), which the source states as "standard arguments" and which the Step-3 author must reproduce.
- No source outage or failed-retrieval branch occurred: all cited documents were fetched and stamped
  (8/8), so no `source_resolution` block was needed.

## Root serial integral-home integration — 2026-10-08

The two preserved global Z[q,q^-1] theorem IDs moved to selected QG5/batch8 under the exact owner proposal. All other current25 batch5 contracts are retained. Original native and pre-integration carriers/decisions remain archived. Field/local-q1 results supply early consumers; no early consumer depends on the moved IDs. The global branches remain owner-held until their actual QG5 prerequisite proofs and stable readiness review close. Source harvests were transferred/redirected with genuine fetch history; this is inventory integration, not mathematical acceptance or a whole-step gate.


## Owner mathematical repair and serial integration — 2026-10-08T13:18:03.997947+00:00

The historical native inventory and source assertions above are retained as pre-repair history. Current inventory is21 A +4 B (25 contracts):18 unmoved native IDs and7 local suppliers; the two original full Z[q,q^-1] claims are uniquely retained at approved QG5 batch8 by root serial integration. This is neither scope loss nor replacement by Q-freeness. Berkeley13.2.1.10 is over Q[q,q^-1]; Lusztig23/31 concerns dot-U. The actual late Z-basis argument is Kashiwara91§§6–7, with freeness a conclusion. Current early field/local suppliers close the contravariant Cartan-projection/radical/descent, finite-support auxiliary regular datum, quantum-Serre integrability, local-q1 universality/character comparison, full positive toral/enveloping specialization and unmodified integral toral basis. The half polarization is A-valued on ordinary words and has explicit Gaussian denominators on divided powers; it is not globally divided-form A-valued. The highest-module integral form is a different pairing and is A-valued. No early dependency on the late global claims remains. Lusztig scan has355 actual PDF pages; the native coverage706 count is corrected from the independently fetched bytes. Owner evidence is in RUN-owner-quantum-integral-repair.md and the exact home integration receipt. Current strategies were independently reviewed by this repair owner; no new ready decision has been registered.


## Owner correction supersession — current31 contract interface

The preceding native caveats and ready labels are preserved as history, not current proof verdicts. The exclusive owner has preserved all29 native batch8 IDs and added exactly two in-page suppliers: negative-half reversal and the full Lusztig/Kashiwara root-color normalization dictionary. Current inventory is27A+4B, maximum dependency level19, ordered supplier-first. Current5/6/7 inventories are25/17/14. No early5–7 dependency reaches either transferred global8 contract.

The full Kashiwara91 §§6–7 integral induction now derives the strong Z[q±] claims: ordinary skew extraction proves half saturation BEFORE gluing; signed reversal transfers right ideals; the balanced string ideals glue global lifts; finite Z-chart generation proves Laurent freeness, and module ideal saturation/integral highest quotient presentation are conclusions. No torsionfree-over-nonPID or pre-existing global-basis freeness premise remains.

The full source convention is v=q^-1, torus inversion, opposite coproduct followed by tensor flip; the forms differ by the root-color factor C_nu, not a single scalar. Field Θ, inverse and all threefold identities have local complete proofs. Upper duality is restricted graded and perfect weightwise. The A-dual basis uses inverse FIELD Gram matrices, its own dual infinity chart and adjoint bar; no lower integral self-duality or exact unweighted operator adjunction is asserted.

The affine A1 action counterexample is CONFIRMED, not an unresolved proof gap: its modified free/bar-fixed U_A-stable lattice satisfies the exact four Lusztig27.1.2 based conditions and the crystal chart equals the direct-sum chart. Integral highest quotient presentation supplies the map modulo[2]. The degree-delta Θ coefficient is −(1−q²)/(1+q²), outside A. Root independently checked the algebra and visually read all(a)–(d) on PDF223/printed214. Thus arbitrary affine based pairs do not have automatic integral Θ action. The actual contract retains general highest-FIRST with arbitrary based second, arbitrary based first with lowestSECOND under finite action, all finite highest products, finite-type arbitrary based pairs proved by the full24.1.6 coefficient route, and exact based direct sums/subquotients of these constructions via actual bar-compatible basis-to-basis-or0 maps and basis-subset kernels. Arbitrary based pairs retain the field tensor bar whenever action is finite; their integral claims require independent integral action, which is not assumed.

Bao–Wang arXiv1403.0039v2 complete7 pages was actually read. Propositions2.4/2.6 and Theorems2.7/2.9 close ordered/general-highest cases; Remark2.10 does not supply integral splitting; p5 association explicitly presupposes the relevant integral actions; Remark2.14 confirms the algebra coefficient boundary. This full source is now in coverage with its actual byte/hash stamp.

All4 native B contracts are corrected: actual Z-balanced intersections and correct q± charts; two-dimensional Θ has c=q−q^-1 fixed by coproduct intertwining and weight-preserving E⊗F action; the mixed chart witnesses nonexistence and the separate scaled1D genuine crystal chart witnesses nonuniqueness; m2 upper lattice uses middle vector/(1+q²), and the A2 lower words are already global while duals require inverse Gram matrices.

The owner reviewed every current7 consumer against the corrected5/6 supplier Definitions and Statements. Six current7 contracts needed focused repairs: top-weight residue and induction measure; strict tie versus max-attainment and raising-sign count; full finite-top tensor lattice stability BEFORE congruences; dual swap inequalities/operators; locally weight-finite indexed uniqueness rather than a false finite-constituent claim; dual B highest/lowest wording. All14 native7 IDs and actual true clauses remain. Native7 four carriers,14 decisions and2 receipts are archived before these amendments.

No readiness registrar, engine transition, shared-plan edit or independent authored-item audit is recorded by these corrections. Source/strategy proof readiness will be assessed only after the final current guard set and root authorization.

## Step 3b status (2026-10-10)

The scaffold inventory described above is **superseded**: the current manifest
carries 25 items (21 A + 4 B), not the 20 listed at scaffold time. The two
global IDs `thm-integral-triangular-decomposition-for-the-lusztig-form` and
`thm-quantum-highest-weight-modules-deform-the-classical-weight-character`
moved to their QG-5 home; none of the 25 authored items references either ID.
All 25 items are authored (draft) with complete proofs, both library pages
`divided-powers-integral-forms-and-quantum-highest-weights` and
`…-examples` exist (draft), the manifest `deps` are synced to the final item
deps, the batch proof contracts
(`…-batch-5.proof-contracts.json`, 207 citations / 135 step entries / 200
boundary rows) and the item decisions are written, and the explicit-path
battery is clean.

Two scaffold-dependency repairs were required. The published example
`ex-localisation-of-a-pid-at-a-prime` is homed on a B (examples) page, so the
two items `lem-local-q-one-deformation-proves-integrable-highest-weight-universality`
and `lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` no longer
depend on it; the short DVR/localization facts they need are now proved inline
in their Facts blocks. Seven further cited suppliers were added to `deps` for
citations that had been left undeclared (Drinfeld–Jimbo definition,
positive/negative/toral definition, quantum integers, Pascal integrality,
unmodified integral torus, symmetrizable Cartan datum, stability lemma).
Recorded content repairs: the skew-derivation word recursion exponents, three
stale step cross-references, two renderer-breaking bracketed expressions, the
two stale "open obligation" sentences whose suppliers are proved in this batch,
the B example's garbled divided-power coefficients and misprinted toral element
(independent q=3 checks), and one dropped `## Counterexample` heading.

Item decisions: 25 closed (6 accepted, 19 repaired), no escalations. Checks
run: precheck, rendercheck (25 items + 2 pages), proof-layout (25 items / 135
steps / 0 defects), content-policy item mode, coverage-checklist
`--require-destination`, manifest-deps, depcheck, depsource, extcheck,
prosecheck, item-dependency-levels (0 errors in this pair), validate-plan (no
error in this pair), source-fetch-check (8/8), proof-contract `--strict`,
boundary-audit, citation-fidelity and finite-smoke on the batch contracts.
Residual run-level `validate-plan` errors and the two citation-fidelity
widening candidates are reported at
`research/frontier-44-special-representation-examples-28-step3b-pair-divided-powers-integral-forms-and-quantum-highest-weights.md`.
The owned cross-batch input remains `[]` (no dependency of this pair points to
another batch; the unified ledger was refreshed).
