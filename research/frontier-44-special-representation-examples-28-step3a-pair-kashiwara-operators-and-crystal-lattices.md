# Step 3a scope review — pair `kashiwara-operators-and-crystal-lattices` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-kashiwara-operators-and-crystal-lattices-311fdfbce8aefe0e`
- Batch: 6. A page `kashiwara-operators-and-crystal-lattices` (order 1528,
  13 items); B page `kashiwara-operators-and-crystal-lattices-examples`
  (order 1529, 4 items).
- Date: 2026-10-10
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification, a scaffold edit or an owner record.

## Inputs read

- Manifests `research/frontier-44-special-representation-examples-28-batch-6.pages.json`
  (13 A + 4 B items, all with `deps`), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (26 open rows, each naming a batch-5 or
  published supplier); `research/plan-spec.json` orders 1528/1529 carry the
  same ids, kinds, companions and `requires` with empty item arrays, so the
  batch-6 manifest is the current inventory;
  `frontier-44-special-representation-examples-28-scope-ledger.json` and
  `…-drift-evidence.json` list both pages; the step-1 drift review
  (`…-alpha-step1-drift.md`, §`kashiwara-operators-and-crystal-lattices`)
  gives `no-drift` (QG-3 requires QG-2, as declared).
- Prose design: `research/plan-quantum-groups-track.md` QG-3 (L112–L131: the
  13 planned A items with their exact proof joints; the B companion is named
  only).
- Owner decisions: `…-owner-authoring-direction.md` (build the 24 pairs,
  suppliers before consumers, no publication) together with its binding
  quantum sections (current QG 5/6/7/8 inventories 25/17/14/31; "current
  inventory is 13 A + 4 B (17 contracts)" for this pair; formal φ on B(∞) is
  ε + weight and not the infinite lowering length; projection compatibility
  only for surviving residues; JKK 7.26 printed factor direction corrected).
- Published suppliers `items/<id>.md` (all `status: published`) and the
  scaffolded batch-5 suppliers on `divided-powers-integral-forms-and-quantum-highest-weights`.

## A-page scope — matches the QG-3 design item for item

The 13-item inventory is exactly the design table: `def-the-local-ring-at-q-zero`;
`thm-unique-kashiwara-i-string-decomposition`; `def-kashiwara-crystal-operators`;
`thm-the-i-string-decomposition-of-the-negative-half`;
`def-crystal-lattice-and-crystal-basis`;
`lem-rank-one-tensor-strings-have-the-crystal-limit-rule`;
`def-crystal-graph-epsilon-phi-and-weight`;
`def-kashiwara-lattices-lambda-and-infinity`;
`lem-highest-weight-tensor-maps-and-their-adjunction`;
`thm-grand-loop-existence-of-highest-weight-crystal-bases`;
`lem-crystal-lattice-polarizations-are-perfect-at-q-zero`;
`lem-crystal-operators-commute-with-highest-weight-projection-modulo-q`;
`thm-crystal-basis-of-the-negative-half`. Together they cover the intended
subject: the crystal limiting ring, the two string decompositions, the
Kashiwara operators with both endpoint projections, the lattice/basis/graph
axioms and the crystal limit, ε/φ, the defining generation of
ℒ(λ),ℬ(λ),ℒ(∞),ℬ(∞), the interlocking grand-loop clauses A(r)–O(r) (existence
of the highest-weight crystal bases, the tensor/projection steps, the
negative-half clauses), the post-loop polarization perfection, projection
compatibility and the B(∞) crystal basis.

Excluded source material has an explicit disposition and a named destination
that exists in the frontier scaffold: upper crystal bases and the §6–§7
globalization go to QG-5 `balanced-triples-and-global-crystal-bases` (batch 8);
the §2.6 uniqueness theorem and the §5 tensor product rule go to QG-4
`tensor-product-crystals-and-highest-weight-crystal-uniqueness` (batch 7,
`thm-crystal-basis-tensor-product-rule`,
`thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`);
the weight-module, Verma, contravariant-form and negative-half-form material
goes to QG-2 (batch 5). Kashiwara §3.3 (reduced algebra) is out-of-scope with
a recorded reason (the library replaces it by the QG-2 skew-derivation
presentation). The a_ii=2 restriction (no imaginary simple roots) is recorded
and consistent with the library's Cartan datum. No topic of the intended
subject is missing without a named, scaffolded home.

## B-page scope — 4 examples/counterexample, all concept-covering

`ex-kashiwara-strings-in-the-three-dimensional-sl-two-module` (string
decompositions, both endpoint failures, crystal, ε/φ);
`ex-crystal-graph-of-b-two-lambda-one` (rank-2 sl3 crystal with six vertices,
recursive lattice generation, all twelve ε–φ equalities);
`ex-projection-from-b-infinity-to-a-highest-weight-crystal` (B(∞) ≅ ℤ≥0 with
formal φ = −n, the truncation bijection, and the boundary failure of raising
compatibility at the killed residue);
`cex-an-a-zero-lattice-without-a-crystal-basis` (shows axioms (ii) and (iii)
are independent, with the two extra explicit witnesses). The page requires
only the A page, and a scan of all 50 batch manifests finds no consumer of
any of its 4 items outside the pair, so it is not a load-bearing supplier.

## Prerequisite closure — no unmet prerequisites

- Transitive walk from the 17 pair items over the run manifests and the
  published `items/*.md`: 70 distinct ids — the 17 pair items, 15 batch-5
  supplier items, 38 published items; **0 missing, 0 plan-only**. Every
  `[[id]]` citation in the pair resolves to a published item or an in-run
  scaffold item.
- A page requires QG-2 `divided-powers-integral-forms-and-quantum-highest-weights`
  (scaffolded in batch 5; the page edge is recorded open in the cross-batch
  file); B page requires the A page. No forward page edge.
- Interfaces checked, not gaps: the grand loop consumes the batch-5
  finite-support regularization for the chosen (possibly non-perfect) P-label
  grading, and its inherited AC enters only through the batch-5 negative-half
  form theorem, as declared. The published classical
  `def-kac-moody-integral-and-dominant-integral-weights` supplies P^+; the
  exact hypothesis translation to the quantum datum is a 3b obligation (see
  Uncertainty).
- Minor bookkeeping note (no scope effect): `def-the-local-ring-at-q-zero`
  uses published `ex-localisation-of-a-pid-at-a-prime`,
  `cor-polynomial-ring-over-a-field-is-a-pid` and `cor-dvr-is-a-pid` to
  justify "A_0 is a DVR, hence a PID", but declares none of the three in
  `deps` (only `cor-dvr-is-a-pid` is cited in the statement). All three are
  published, so no prerequisite is unmet; the 3b author should cite/declare
  them.

## Source coverage

- Three sources per page: Kashiwara 1991 (Duke 63, §§2.2–2.6, 3.1–3.5,
  4.1–4.10, 5.1 at printed pp. 467–516); JKK, arXiv:math/0305390 (§§4, 6, 7:
  (4.2)–(4.7), (6.1)–(6.10), (7.1)–(7.36)); Berkeley *Lie Groups and Quantum
  Groups*, Ch. 13 §13.3 (printed pp. 327–334).
- Dispositions: A page 22 `included` + 1 `inline` + 15 `deferred` +
  2 `already-published` + 1 `out-of-scope` (41 rows); B page 11 `included` +
  3 `deferred` (14 rows). All deferrals name a destination (QG-2/QG-4/QG-5).
- `source-fetch-check` → 6/6 fetch-verified, 6/6 resolved, 0 drops;
  `url-sweep` → 3/3 live, 0 failures, 0 drops; `source-backing` → 17/17
  authored results backed.

## Checks re-run during this review

`manifest-deps` (17 items, 0 errors); `coverage-checklist --require-destination`
(2 pages, 55 rows, 0 errors, 0 warnings); the closure walk above; the three
source checks above. Proof correctness was not assessed (out of scope for
3a); strategies were read at statement/hypothesis level.

## Uncertainty

- Scope only, not proof validity. The batch-6 notes' recorded caveat stands:
  the grand-loop strategy names every JKK clause and states the base cases,
  induction hypotheses and assembly, but the individual computations must be
  reproduced at 3b and reviewed at 5; that is an authoring/review obligation,
  not a scope defect.
- The reconciliation of the published classical P^+ definition (minimal
  realization) with the quantum datum's chosen label grading runs through the
  batch-5 regularization supplier; I found no missing item, but I have not
  verified the exact hypothesis translation at proof level.

## Decision

`sufficient` for `kashiwara-operators-and-crystal-lattices`: the planned
definitions, results and examples of the pair adequately cover the intended
subject (Kashiwara operators, string decompositions, lattice/basis axioms,
the grand loop, projection compatibility and B(∞), with the deferrals owned
by the scaffolded QG-2/QG-4/QG-5 pairs), with no unmet prerequisites, no
load-bearing B items and adequate source coverage. Recorded with
`tools/step3-decisions.mjs record-scope` (non-owner review).
