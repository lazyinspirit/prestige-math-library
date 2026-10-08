# Batch 28 — Heaps, Commutation Classes, and Fully Commutative Elements (CG-24)

Run `frontier-42-coxeter-32`; role beta; pair CG-24, orders 1772 (A) and 1773 (B),
category `coxeter-groups`. Outputs written by this batch:

- `research/frontier-42-coxeter-32-batch-28.pages.json` (6 A items, 4 B items)
- `research/frontier-42-coxeter-32-batch-28.coverage.json` (4 sources on the A page,
  3 on the B page; every one fetch-stamped)
- `research/frontier-42-coxeter-32-batch-28.cross-batch-dependencies.json` (16 reviewed edges)
- `research/frontier-42-coxeter-32-step1-<item>.json` (10 readiness records, all `ready`)

## Design, plan and owner direction

`research/frontier-42-coxeter-32-owner-authoring-direction.md` was read before construction.
The design section is `research/plan-coxeter-groups-track.md` L508–523 (CG-24); the
`plan-spec.json` entries for orders 1772/1773 agree with it in id, title, category,
companion, `requires` list and scope. **No design/plan conflict was found.**

The design lists four A-page contracts; all four are scaffolded, in prerequisite order, as
items A1, A4, A5, A6 below, with the design's own statement content preserved and the two
local additions of the next section inserted before their consumers. The B companion's
three constructions (heaps of 132 and 121, two linear extensions in one commutation class, a
convex alternating chain causing failure, distributive versus nondistributive intervals) are
B items 1–4.

### Recorded discrepancies with scaffold-preparation metadata (the design controls)

1. `research/coxeter-scaffold/inventory.json`, `audit-checks.json` and `independent-audit.json`
   list `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (batch 5,
   `finite-lattice-projections-and-coxeter-chain-labels`) as a dependency of **all four**
   CG-24 contracts, and `thm-cg-weak-order-meet-semilattice-and-finite-lattice` (batch 23)
   as a dependency of all four. The controlling design text names neither. The
   lexicographic/Möbius lemma is about finite lattice congruences, chain shellings and
   falling-chain Möbius cancellation, and **no proof step of any heap item uses it**; it is
   therefore not declared as a `dep`. The weak-order meet-semilattice theorem is likewise not
   consumed: A6 *constructs* the lattice structure of `[1,w]_R` from the isomorphism with
   `J(P_w)` instead of assuming it, so declaring that theorem would be an unused dependency.
   Both omissions are deliberate and are the only divergences from the preparation metadata.
2. The A page's `requires` list (fixed by the design and `plan-spec.json`) contains
   `finite-lattice-projections-and-coxeter-chain-labels`. Review finding: no clause of that
   supplier page is consumed by any contracted item or B example of this pair, whose proofs
   route through the weak-order lemmas, Matsumoto's theorem and the published order-ideal
   lattice. The page field is not a scaffold-editable field, so it is retained unchanged and
   recorded here as a page requirement without a consumer clause on this page. This is not a
   mathematical defect of the pair; it is a plan-level inventory observation for the owner.
3. `def-cg-labeled-word-heap-and-fully-commutative-element` keeps the design's
   `justified_by: [thm-cg-heaps-classify-commutation-classes]`, as in the definition
   justification file.

## Local additions (not scope changes)

Two prerequisite items were necessary for mathematical closure and are not among the four
named contracts:

1. `lem-cg-finite-poset-linear-extensions-and-connectivity` (A2): finite posets have linear
   extensions (by removing minimal elements), a prescribed order ideal can be made the
   initial segment of a linear extension, and any two linear extensions are connected by
   adjacent swaps of incomparable elements. The first two clauses are needed by the heap
   classification and by the ideal map of the interval theorem; the third is exactly the
   design's "adjacent incomparable swaps connect all linear extensions" instruction, used to
   prove the commutativity class equals the labeled linear extensions.
2. `lem-cg-convex-chains-consecutive-in-a-linear-extension` (A3): a convex chain — in
   particular a covering pair — occurs consecutively in some linear extension, proved by
   contracting the chain to one vertex. This is the design's "contracting it to one vertex,
   proving acyclicity and expanding a linear extension" instruction, and it is needed both
   for the necessity half of the heap criterion and for the reducedness argument in its
   sufficiency half.

No further item was needed; the page has 6 items, far inside the 100-item cap.

## Mathematical route and the choices made

- **Heap and commutativity class.** For a word `s` the heap `P_s` is the transitive closure
  of `i<j` with `m(s_i,s_j) != 2`; antisymmetry is immediate because every generating
  relation lies inside the position order. The design's commutativity class, full
  commutativity, labeled heap isomorphism and labeled linear extensions are recorded in A1.
- **Heaps classify commutation classes (A4).** `L(P_s,s) = C(s)` for **arbitrary** words:
  one inclusion is the swap correspondence (a commuting adjacent pair is an adjacent
  incomparable pair), the other is the adjacent-swap connectivity of linear extensions.
  Multiplicities, injectivity of the extension-to-word map and the bijection between
  commutation classes and labeled heaps are stated as clauses; the heap of a fully
  commutative element is well defined.
- **Forbidden configurations (A5).** Clause (1) is Stembridge's Proposition 1.1: the
  projection of a word to two noncommuting letters is a commutation-class invariant, so a
  full contiguous braid factor yields a reduced word outside the class, and conversely the
  first braid move leaving the class is necessarily a long braid move. Clause (2) is
  Proposition 2.3 in the strong form: `(a)` (no convex alternating chain of length
  `m(u,v) >= 3`) and `(b)` (no covering pair with equal labels) together are equivalent to
  `s` being reduced with fully commutative product. The design's warning that "proving a heap
  word reduced requires both cancellation and braid control" is discharged explicitly:
  - `(a)` first shows that the braid class of `s` equals its commutativity class, since a long
    braid move applied to any commutation-class member would produce a convex alternating
    chain in its (isomorphic) heap;
  - `(b)` then rules out a non-reduced `s` by Matsumoto's M-reducedness: a sequence of braid
    moves would produce a word with a consecutive equal pair, hence a covering pair with
    equal labels in the same heap;
  - Matsumoto's braid connectivity then gives `R(w) = C(s)`, i.e. full commutativity.
  This is Stembridge's compressed final sentence of Proposition 2.3, expanded as the design
  requires and cross-checked against Nadeau's Lemma 2.4 (the independent Tits-reduction
  formulation).
- **Distributive intervals (A6).** For fully commutative `w`, the ideal `I(x)` of a reduced
  word of `x <=_R w` is well defined by the multiplicity/completion argument; the inverse
  `psi(I)` is the product of any labeled linear extension of the ideal `I`, well defined
  because such a word's heap is the labeled poset `I` (an ideal is downward closed, so all
  witnessing paths stay inside it) and the heap classification applies. This two-sided-inverse
  argument replaces the source's compressed injectivity sentence by an explicit one; the
  design's contract, including "meet and join are intersection and union of ideals", is
  preserved, and the design's caveat is recorded: only the right weak interval is identified
  with `J(P_w)`, not the Bruhat interval, and no converse is claimed for non-fully-commutative
  elements.
- **No Choice anywhere in the pair.** All objects are finite words, finite posets and finite
  ideals. The minimal-element and linear-extension arguments use a listing of a finite set,
  so even the finite choices are made without any choice principle. No item consumes
  `def-axiom-of-choice`.

## Item inventory (level = step-1 dependency level)

| # | Item | Kind | Level | In-run deps (batch) |
|---|---|---|---|---|
| A1 | `def-cg-labeled-word-heap-and-fully-commutative-element` | def | 1 | b2 |
| A2 | `lem-cg-finite-poset-linear-extensions-and-connectivity` | lem | 0 | — |
| A3 | `lem-cg-convex-chains-consecutive-in-a-linear-extension` | lem | 1 | A2 |
| A4 | `thm-cg-heaps-classify-commutation-classes` | thm | 2 | A1, A2, b2 |
| A5 | `thm-cg-fully-commutative-forbidden-chain-criterion` | thm | 5 | A1, A3, A4, b2 |
| A6 | `thm-cg-fully-commutative-weak-intervals-are-distributive` | thm | 14 | A1, A2, A4, b2, b23 ×3 |
| B1 | `ex-cg-heap-of-one-three-two-in-a3` | ex | 6 | A1, A4, A5 |
| B2 | `ex-cg-heap-of-one-two-one-in-a2-and-long-braid` | ex | 6 | A1, A4, A5, b2 |
| B3 | `ex-cg-distributive-weak-intervals-of-fully-commutative-elements` | ex | 15 | A1, A4, A6, B1, b23 |
| B4 | `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element` | ex | 15 | A1, A5, A6, B2, b2, b23 ×2 |

Every item declares its
`deps` explicitly; `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports zero label mismatches for these items; every batch-28 error-free run of the check
never printed a line naming a batch-28 item, and any remaining run-level errors belong to
sibling batches that were being written concurrently.

## Sources (all fetched as full text and stamped)

Three independent treatments of the heap material were read, plus the origin monograph;
each page also has a `survey`/`monograph`-kind source, satisfying the primary-treatment rule.

1. J. R. Stembridge, *On the Fully Commutative Elements of Coxeter Groups*, author manuscript,
   33 pp., `https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf`, stamp sha256_16
   `a8bfbb8d13303e88`. Read in the complete extracted text: Introduction, §§1.1–1.3, §2
   (Lemma 2.1, Theorem 2.2, Proposition 2.3), PDF pp. 1–10. Not read: §§3–6 beyond their
   headings and quoted statements.
2. P. Nadeau, *On the length of fully commutative elements*, arXiv:1511.08788, 19 pp.,
   `https://arxiv.org/pdf/1511.08788`, stamp sha256_16 `9e98b5cb1e8a10d9`. Read: §§2.2–2.4 in
   full (Definition 2.3, Lemma 2.4 with proof, Definition 2.5 and the fundamental property of
   heaps, properties (h1)–(h2), Propositions 2.6–2.7), PDF pp. 4–7; §§3–4 only at
   heading/statement level.
3. C. Krattenthaler, *The theory of heaps and the Cartier–Foata monoid* (appendix to the
   electronic reedition of Cartier–Foata), 11 pp., `https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf`,
   stamp sha256_16 `d08eb4acb2a5fa8a`. Read: §§1–3 in full (heap of pieces, monoid structure,
   equivalence with the Cartier–Foata monoid through reading linear extensions), PDF pp. 1–5;
   §4–§5 at statement level.
4. P. Cartier and D. Foata, *Problèmes combinatoires de commutation et réarrangements*,
   LNM 85 (1969), electronic reedition with appendices (2006), 81 pp.,
   `https://www.mat.univie.ac.at/~slc/books/cartfoa.pdf`, stamp sha256_16 `19996a8b31579bba`.
   Read in the extracted text: Foreword/table of contents, Chapitre premier §2 "Construction
   de L(Z;C)" and the statement of §3 Théorème 1.2 (V-decomposition) with the opening of its
   proof, front matter and printed pp. 5–9. Chapters 2–6 were read only at table-of-contents level; the
   V-decomposition itself is disposed out of scope because the contracted route uses linear
   extensions, and the chapter is cited as the origin of the commutation monoid.

Access notes: among the sources inspected, the only book-length treatment of the commutation
monoid available in fetched full text was the Cartier–Foata reedition with the Krattenthaler
appendix; Viennot's LNM 1234 paper was not fetched, so its availability in free full text is
not claimed either way. The heap-specific mathematics is therefore carried by three independent
paper/survey treatments (Stembridge, Nadeau, Krattenthaler) together with the origin monograph,
and this substitution is recorded honestly rather than claiming a textbook reading that did not
occur. No source retrieval failed, so no `source_resolution` record is attached anywhere.

Every harvested heading in the read ranges has a disposition in `coverage.json`
(`coverage-checklist`: 2 pages, 34 harvested results, 0 errors, 0 warnings). The only
declined results with a reason are (i) the converse direction (b)⇒(a) of Stembridge's
Theorem 2.2 and Proposition 1.4, (ii) Nadeau's Proposition 2.7 and §§3–4, (iii) Krattenthaler
§§4–5, and (iv) Cartier–Foata's V-decomposition and Chapters 2–6; each reason is specific in
the coverage file. No deferral to another page was needed.

`url-sweep` on this coverage: 4/4 unique URLs live, 0 failed. `source-backing`: 9 authored
results, all backed by an openable source.

## Dependency verification

Supplier statements and proof strategies were read for every in-run supplier used, in
dependency order: batch 2 (`coxeter-presentations-exchange-and-reduced-word-theorems`,
items at levels 0–5) and batch 23 (`weak-order-inversions-and-lattice-operations`, items at
levels 11–13). The checked clauses are recorded in the 16 evidence rows of
`research/frontier-42-coxeter-32-batch-28.cross-batch-dependencies.json` (consumer, supplier,
required claim, use, and the statement that no mismatch was found in statement, hypotheses or
direction). No missing, circular, forward or inadequate dependency was found:

- every `[[...]]` target in every item statement and strategy is declared in `deps` or
  `justified_by`;
- no dependency points at a later page or at a later item of the same page (all in-run dep
  levels are strictly below the consumer level);
- the declared prerequisites of every dependency page lie in the `requires` closure of the page that
  consumes them. The run-level `validate-plan --run` currently stops at the empty page shell of a batch
  in flight before reaching its per-page checks, so this condition was verified separately: a script
  resolved every `deps`/`justified_by` target of all ten items either to an in-run manifest item or to
  its published home page, and checked the target page against `closure(requires)` of the consuming page
  (for B-page items against `{A page} union closure(requires of A)`); no target falls outside that closure.
  The same audit found that the published counterexample `cex-the-diamond-and-pentagon-lattices-are-not-distributive`
  is homed only on the examples page `chains-antichains-sperner-and-dilworth-examples`, which SCHEMA forbids as
  another page's dependency; that dependency was removed from B4, whose non-distributivity verification is now
  a direct distributive-identity failure. No other dependency is homed only on a B/examples page;
- the A page's three in-run page requirements (batches 2, 5, 23) are reviewed as page rows;
  the published requirement `chains-antichains-sperner-and-dilworth` and all published item
  suppliers resolve on disk and are not run edges.

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` succeeds;
all 16 batch-28 edges carry a review row and there are no orphaned reviews. Its
`unreviewed_batches` list contains only batches other than 28 (at the last refresh:
19, 20, 25, 27, 29–32, minus whichever sibling review inputs landed since), so the
`--require-reviewed` stage gate cannot pass until those siblings land; that is a run-level
condition, not a batch-28 defect. The sibling review inputs are appearing while this batch
runs, and the ledger refresh is idempotent, so this list shrinks on its own. Batch 23's
manifest items were populated by the time of the final refresh and its item statements were
read in full for this batch's dependency review.

## Checks run (actual commands and results)

| Command | Result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | 10/10 batch-28 labels match computed levels 0,1,1,2,5,6,6,14,15,15 (no batch-28 error line at any run of the check); the remaining run-level errors are the empty or in-progress scaffolds of sibling batches, which are being written concurrently |
| `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | every item decision present at report time is current, including all 10 batch-28 records (`ready`); the run-level `closed:false` comes from the page shells of sibling batches still in flight |
| `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-28.coverage.json --require-destination` | 2 pages, 34 harvested, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage ...batch-28.coverage.json --stamp` | 7/7 sources fetch-verified (full text; stamps above) |
| `node tools/source-fetch-check.mjs --coverage ...batch-28.coverage.json` | 7/7 resolved in check mode |
| `node tools/url-sweep.mjs --coverage ...batch-28.coverage.json --out research/frontier-42-coxeter-32-batch-28-url-liveness.json --fail-on-dead` | 4/4 live, 0 failed |
| `node tools/source-backing.mjs --coverage ...batch-28.coverage.json --liveness ...batch-28-url-liveness.json` | 9/9 authored results backed |
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | all manifest items at report time, 0 errors (re-run several times while sibling batches landed) |
| `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | all scoped items at report time, 0 errors, 0 warnings |
| `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 present, no scope drift |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; 16/16 batch-28 edges reviewed, 0 orphaned |
| `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | exit 2: `Empty frontier page bipartite-coxeter-elements-and-ordered-root-complexes` (batch 19, in flight); the validator stops before its per-page passes, so the requires-closure condition was verified separately (see Dependency verification) with no violation |

`extcheck`, `fwdcheck`, `depcheck`, `depsource` and `precheck` are item-level validators that
resolve manifest ids through authored item files; at Step 1 those files intentionally do not
exist yet, and the engine runs the manifest-only policy and dependency passes instead. They
remain Step-3 obligations.

## Post-recording correction pass (honest record)

After the first write of the manifest, a full read-through found and corrected the following
defects before the readiness records were (re)hashed:

- B2 originally claimed that the covering pair `1 ⋖ 3` in the three-element chain sat over
  equal labels; `1 ≺ 3` is not a cover there, and the covering pairs `1 ⋖ 2`, `2 ⋖ 3` have
  distinct labels. The example now correctly says that condition (a) of the heap criterion
  fails while (b) holds, and derives non-full-commutativity from the braid-factor criterion
  applied to the reduced word `s_1s_2s_1` (reducedness from Matsumoto's dihedral clause).
- A3 had a corrupted symbol `c_rm` for the last element of the convex chain.
- A5 used the letters `u,v` both for generators and for a word in the same sentence; the word
  is now `q` and the generator pair is `x,y`, and the convexity of a contiguous factor is
  spelled out.
- B3 originally bounded `|[1,w]_R|` by a rank count; the count is not sufficient in a graded
  interval with several elements in a rank. The example now uses the interval isomorphism
  theorem's identification of `[1,w]_R` with the five-element ideal lattice `J(P_w)`.
- B4's justification that the interval is all of `W` now cites the dihedral order of the rank-
  two parabolic (Matsumoto clause (3)) instead of an informal type-`A_2` identification.
- B4's declared dependency on the published pentagon counterexample was removed after the home-page
  audit: that item lives only on `chains-antichains-sperner-and-dilworth-examples`, and SCHEMA forbids an
  item homed only on a B/examples page from being another page's dependency. The same distributive-
  identity failure is verified directly inside B4, and B4's readiness record was re-hashed after the removal.

## Escalations and unresolved findings

None for this batch. No source retrieval failed (no `source_resolution` records are needed),
no requested prerequisite belongs in another batch, and the complete local closure fits
comfortably inside the 100-item page cap. The only open items are run-level: the empty page
shells of batches 19, 20, 25, 27 and 29–32 keep `validate-plan --run` and the
`--require-reviewed` ledger gate red until those siblings land. Owner/operator reconciliation
and the full engine gate follow construction; neither the worker exit nor these readiness
records is independent mathematical approval — Step 3 provides that review.
