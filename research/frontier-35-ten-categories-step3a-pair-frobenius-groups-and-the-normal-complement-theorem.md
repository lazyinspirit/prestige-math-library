# Step 3a scope review — frobenius-groups-and-the-normal-complement-theorem

- Run: `frontier-35-ten-categories` (batch 10), role alpha, label
  `step3a-pair-frobenius-groups-and-the-normal-complement-theorem-fa4cf6e3c72382d0`.
- A page: `frobenius-groups-and-the-normal-complement-theorem` (order 510.043,
  representation-theory, 32 items).
- B page: `frobenius-groups-and-the-normal-complement-theorem-examples`
  (order 510.044, 6 items); companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-35-ten-categories-batch-10.pages.json` (32 A + 6 B items,
  all with `deps`), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (owned content `[]`);
  `research/frontier-35-ten-categories-scope-ledger.json` (pages 510.043/510.044
  listed; 52 pages = 26 owed pairs) and
  `research/frontier-35-ten-categories-drift-evidence.json` entry for the A page
  (declared `requires` = manifest `requires`); `plan-spec.json` rows
  510.043/510.044 carry empty item arrays and the A→B edge, so the batch
  manifest is the current inventory.
- Prose design: `research/plan-representation-theory-groups-track.md` RG-7
  (lines 477–546: table of 32 A and 6 B items, hard proof plan), the design's
  source table rows for Bartel/Craven/Flavell/Kurzweil–Stellmacher (lines
  2234–2237), the two-independent-treatments requirement (line 2284), the
  Frobenius terminology note (line 2152), the anti-padding record (line 2504
  defers Craven's complement conjugacy/structure results to group theory;
  line 2505 defers Alperin's fusion theorem; line 2506 defers the Odd Order
  statement), the RG-7/H1–H8 harvest rows (lines 2355–2362) and the `requires`
  matrix entry (line 2675).
- `research/frontier-35-ten-categories-owner-authoring-direction.md`: defers
  batch 8's coherent-sheaf pair and one batch-13 Easton item; it names no change
  to batch 10, so the RG-7 design scope stands.
- Step-1 readiness records `research/frontier-35-ten-categories-step1-<item>.json`
  for all 38 pair items: every record is `decision: ready` with examined
  dependencies and a named source locator; none is escalated or source-dropped.
- Supplier seams: the five plan prerequisites
  `clifford-theory-over-normal-subgroups`,
  `characters-and-the-orthogonality-relations`,
  `induced-representations-and-frobenius-reciprocity`,
  `sylow-theorems-and-nilpotent-groups`, `normal-subgroups-and-quotient-groups`
  are all published (`library/representation-theory/`,
  `library/abstract-algebra/`) with nonempty item inventories.
- Source re-verification for this review, from the batch-10 extracted texts
  (`/tmp/frontier35-b10-{bartel,flavell,kurzweil,craven}.txt`, matching the
  coverage's fetch stamps `284fb30b5da74e63`/43 pp.,
  `416e4c9857d62913`/19 pp., `063adf0f74891740`/400 pp.,
  `014a62146a975217`/99 pp.):
  Bartel §6.1 Definition 6.1 (complement), Definition 6.2 (kernel set),
  Lemma 6.3 (|N|=[G:H] and M⊆N), Lemma 6.4 (zero-at-identity) and the full
  Theorem 6.5 proof, including the M=⋂ker φ̃ step and G=N⋊H;
  Flavell 2.1–2.5 (transfer), 3.3–3.5 (normal p-complement, four equivalent
  forms), 3.6 (abelian Sylow fusion), 3.8 (Burnside), 4.2–4.3 (p-residual),
  5.6–5.7, 5.9 and 5.10 (the exact three-way equivalence
  (a)⇔(b)⇔(c) with "P controls fusion in P");
  Kurzweil–Stellmacher 7.1.1–7.1.6, 7.2.1, 7.2.3, 7.2.4 (local-to-global
  form; Grün/weak-closure route), plus the book's independent Frobenius
  chapter §4.1 (Frobenius's Theorem 4.1.6, second definition 4.1.7, examples
  p. 83) and the structure block §8.3/9.5.2 discussed below;
  Craven Theorem 3.8 (three-way equivalence including "Aut_G(Q) is a p-group")
  and Exercise 3.6 statement plus its solution (P controls fusion ⇔ automizers
  are p-groups), and §3.3 "Nilpotence of Frobenius Kernels" (unused).
- Checks I ran: `coverage-checklist.mjs` on
  `frontier-35-ten-categories-batch-10.coverage.json --require-destination`
  exit 0 (2 pages, 140 harvested rows, 0 errors, 0 warnings);
  `manifest-deps.mjs` on the batch manifest exit 0 (63 items, 0 errors);
  a recursive dependency scan of the 38 pair items resolving to 38 in-run pair
  items + 28 published `items/*.md` suppliers, with 0 missing and 0
  planned-but-unbuilt IDs.

## Scope against the prose design

All 32 designed RG-7 A identifiers are present in the manifest, in design
order, and match the design's statements (rows RG-7/H1–H8, plan lines
2355–2362): the complement/kernel definitions and the coset-action
characterization; the cardinality lemma; the zero-at-identity, character
extension construction, irreducibility and kernel-intersection lemmas; the
kernel theorem and semidirect decomposition; the fixed-point-free action
converse; the normal p-complement definition, transfer construction and its
three lemmas; the equivalent forms of a normal p-complement; the p-residual;
Burnside's theorem; the p-local normalizer and fusion-control definitions;
the global-to-local, local-to-fusion and fusion-to-global lemmas; the
three-way Frobenius normal p-complement theorem; and the automizer criterion.
Six further items beyond the design are genuine local prerequisites of the
design's own hard proof plan (plan lines 526–534) and each carries a
source row: `lem-p-residual-is-generated-by-p-prime-elements-and-idempotent`
(Flavell 4.1/4.3), `lem-abelian-sylow-fusion-in-its-normalizer` (Flavell 3.6;
K–S 7.1.5), `lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local`
(Flavell 5.6), `lem-local-sylow-conjugacy-ascent-for-fusion` (Flavell 5.7–5.8),
`lem-normal-p-subgroup-has-proper-commutator-in-a-p-group` (Flavell 5.9) and
`lem-p-automizer-condition-implies-fusion-control` (Craven Exercise 3.6
solution).

All 6 designed B leaves are present unchanged: S₃, the affine linear family,
the transitive-action counterexample, the closure-content remark, the S₃
normal 2-complement check and the A₅ cyclic-Sylow counterexample. The one
recorded sharpening against the design text is the affine example's `q>2`
hypothesis (at `q=2` the complement is trivial, outside the page's nontrivial
complement definition); it narrows nothing that the design intended and keeps
the example true.

Nothing in the design's A or B inventory was dropped, weakened or moved, and
the coverage's canonical dimension disposes all 38 rows as `included`; there is
no deferred canonical row for this pair. The design's "deliberately not
decomposed" entries that touch this subject (Craven's complement
conjugacy/structure results, line 2504; Alperin fusion, line 2505) are
cross-track seams, not omissions from RG-7.

## Source coverage

The page's coverage block has 4 fetch-verified treatments and 38 canonical rows
(32 A + 6 B, all `included`), with 41 source-heading rows: Bartel 6 rows,
Flavell 22, Kurzweil–Stellmacher 10 (2 `out-of-scope` with item-specific
reasons: 7.1.7–7.1.9 general weak-closure/strongly-closed extensions and
7.2.2–7.2.3 specialized cyclic/central Sylow criteria), Craven 3. I re-read
the load-bearing locators listed above and found no fabricated, shifted or
one-directional citation presented as the full result: Bartel's proof contains
the kernel-as-intersection-of-character-kernels step verbatim in structure;
Flavell 3.5 and 5.10 match the scaffolded four forms and three-way equivalence;
Craven Theorem 3.8 and Exercise 3.6 give the automizer/fusion-control
equivalence used by `cor-frobenius-automizer-criterion-for-p-nilpotence`.
Two independent treatments exist for each half (Bartel + Craven/K–S §4.1 for
the kernel theorem; Flavell + Kurzweil–Stellmacher 7.x for the normal
p-complement theorem), as the design's line 2284 requires.

## Role in the library

The pair is the only representation-theory-track treatment of Frobenius groups
and of the normal p-complement criterion. A scan of all seventeen batch
manifests and `plan-spec.json` finds exactly one in-run consumer, the B
companion, and no other plan page that names this A page in `requires`; no
published page or item references the pair's item IDs, and
`research/published-consumer-supplier-ledger.md` has no entry naming the pair
or any of its items. Of the 28 published suppliers reached by the pair, the
eight that appear in the ledger's classification-index section are all resolved or
`clear` (e.g. `thm-frobenius-formula-for-induced-characters` U-P resolved,
`def-virtual-character-and-character-ring-of-a-finite-group` repaired,
`cor-frobenius-reciprocity-for-complex-characters` clear); none is an open
A-P/U-P carrier. The owned cross-batch dependency input is `[]`, so no
same-run supplier is consumed.

## Uncertainty and observations for the owner

1. **Frobenius-group structure theory is deliberately outside this pair.**
   Kernel nilpotency (K–S 9.5.2), conjugacy of complements (K–S 8.3.7) and the
   cyclic-or-quaternion Sylow structure of complements (K–S 8.3.8) are not
   designed, scaffolded or covered here; all three sit on the fixed-point-free
   action block. The RG-7 design explicitly defers them (plan line 2504:
   "finite-group structure results owned by group theory; RG-7 needs only the
   kernel/normal-complement theorem") and the group-theory track defers the
   underlying Thompson/Higman results (`plan-group-theory-track.md` line 3081:
   Craven, *The Theory of p-Groups*, Ch. 5 "Fixed-Point-Free Automorphisms").
   I judge the pair adequate for its designed subject — the two theorem halves
   named in its title — and record `sufficient` on that basis. Stated
   uncertainty, honestly: if the owner's notion of "Frobenius groups" is meant
   to include kernel nilpotency, the pair would need enrichment (a nilpotency
   corollary plus the deferral-removing prerequisites), because the automizer
   criterion alone does not give it: for elementary abelian `Q` the automizer
   `N_K(Q)/C_K(Q)` `≤` `Aut(Q)` can contain elements of order prime to `p`.
   No such enrichment is authorised or recommended by the current design.
2. **Coverage-row granularity.** 15 of the 38 items (the six B leaves, the
   three character-extension/kernel-intersection items, the coset-action
   proposition, the fixed-point-free-action proposition, the p-local normalizer
   definition and the three local-fusion lemmas) are disposed in the canonical
   dimension but have no per-heading row in the coverage's source-contents
   lists; their backing exists in the same fetched documents (Bartel
   Theorem 6.5's proof; K–S §4.1 examples at PDF p. 83; Flavell 4.1/4.3,
   5.7–5.8; Craven Exercise 3.6 solution) and each Step-1 record names it.
   This is record granularity, not missing source coverage; extending those
   rows would make the mapping auditable item-by-item but is not a scope gap.
3. **Edition/section drift in the design's Craven citation.** The design cites
   Craven, *Finite Group Theory* §1.4, pp. 17–20 (URL `...finitegroups2010.pdf`),
   while the coverage's fetch-verified active copy is the 2012 notes
   (`...finitegroups2012.pdf`), where the normal p-complement theorem is
   Theorem 3.8 (printed p. 38), Exercise 3.6 with solutions is on printed
   pp. 83–84, and the Frobenius-group section is §4.1. The mathematics is the
   same and is present in the fetched document; the owner may want the citation
   reconciled to one edition when the page is built.
4. Kurzweil–Stellmacher 7.2.4 states only the local-to-global direction of the
   normal p-complement theorem, so it is independent support for one direction
   rather than a second full proof of the scaffold's three-way equivalence;
   the equivalence is Flavell 5.10 with Craven Exercise 3.6 for the
   automizer/fusion-control clause. Noted so that no later reader treats the
   K–S row as full coverage of the equivalence.
5. Proof correctness, statement-by-statement source fidelity and dependency
   minimality were **not** judged here; those belong to Step 3b and Step 5.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject — Frobenius's character-theoretic kernel theorem with its
semidirect-product consequence, and the local normal p-complement criterion
with transfer, Burnside's theorem, the p-residual fusion argument and the
automizer formulation — at design breadth, with source backing for every
design row and for the six added local prerequisites, and with the adjacent
Frobenius-group structure and fixed-point-free-action results deferred by the
design and the group-theory plan. Recorded: **sufficient**.
