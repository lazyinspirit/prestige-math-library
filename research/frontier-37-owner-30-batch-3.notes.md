# Frontier 37, owner 30 — batch 3 scaffold notes

Run `frontier-37-owner-30`, beta, batch 3. One owned A/B pair in `number-theory`:
A `dirichlets-unit-theorem-regulators-and-s-units` (order 365.919) with 18 items and
B `dirichlets-unit-theorem-regulators-and-s-units-examples` (order 365.92) with 7 items.
Read before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task
`research/frontier-37-owner-30-beta-3.task.md`, the complete NT-23 design in
`research/plan-number-theory-track.md` (starting at the id mention L1951, through the B-page
table), `research/plan-spec.json` pages 203–204, and the batch evidence of batches 1–2.
The owner-authoring-direction file `research/frontier-37-owner-30-owner-authoring-direction.md`
does not exist (verified again at the end of construction), so no direction text was in force.
Only this batch's manifest, coverage, notes, readiness records and cross-batch dependency input
were written. Published content, shared plans, engine state and verdicts were not edited.

## Scope and plan comparison

`research/plan-spec.json` entries 203 (A) and 204 (B) match the design and the manifest exactly on
id, title, kind, category, order, companion and `requires`:
A requires `minkowski-theory-and-number-field-class-groups`,
`pell-equations-and-generalized-pell-orbits`; B requires only this A page. The plan's two item
inventories are empty scaffold placeholders, so there is no item-level plan-versus-design text to
conflict with; **no page-level design-versus-plan conflict was found**, and no selected pair,
`requires` list or shared plan was changed.

The design's A-page inventory is preserved in its order, with two necessary local suppliers
inserted immediately before their consumers (see “Local additions”):

1. `lem-roots-of-unity-in-a-number-field-are-finite` (L1)
2. `thm-kronecker-root-of-unity-criterion` (L1)
3. `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one` (L0)
4. `thm-product-formula-for-number-fields` (L0, AC)
5. `def-logarithmic-unit-embedding` (L0)
6. `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` (L1, AC)
7. `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` (L2)
8. `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` (L0, local addition)
9. `lem-logarithmic-unit-image-is-discrete` (L3, AC)
10. `thm-logarithmic-unit-image-is-a-full-lattice` (L5, AC; batch-2 suppliers)
11. `thm-dirichlet-unit-theorem` (L6, AC)
12. `def-fundamental-units` (L7, AC)
13. `def-number-field-regulator` (L8, AC, `justified_by` the next theorem)
14. `lem-deleted-row-minors-of-a-matrix-with-zero-column-sums` (L0, local addition)
15. `thm-number-field-regulator-is-well-defined` (L9, AC)
16. `cor-unit-ranks-by-number-field-signature` (L7, AC)
17. `def-s-integers-and-s-units-of-a-number-field` (L0)
18. `thm-s-unit-theorem` (L8, AC)

The B page is exactly the design's seven examples/counterexample (levels 8–10):
`ex-units-of-q-and-imaginary-quadratic-fields`, `ex-real-quadratic-units-and-pell`,
`ex-units-in-a-real-cubic-field`, `ex-regulator-of-a-real-quadratic-field`,
`ex-change-of-fundamental-units-preserves-regulator`, `ex-s-units-of-q`,
`cex-z-sqrt-d-units-need-not-equal-ok-units`. The design's “Requires” paragraph also names
CA-9's fractional ideals, prime valuations and class-group interface and NT-22's finite-dimensional
lattice results; those are **item-level** dependencies in `deps`, not page-level `requires`, and the
manifest carries them directly. No page split is needed.

### Design reconciliations (recorded, not scope changes)

- **Spanning step.** The design's `thm-logarithmic-unit-image-is-a-full-lattice` note says the hard
  step “uses Minkowski's convex-body theorem and finiteness of ideal classes”. The scaffold instead
  follows Stein's proof of Theorem 8.1.2: the equality-case Minkowski theorem plus the batch-2
  lemma `lem-finitely-many-number-field-ideals-of-bounded-norm` supply a fixed finite list of
  representatives `b_1,…,b_m` of the principal ideals of norm at most `A`. Class-group finiteness
  is not needed there; it is consumed only by `thm-s-unit-theorem` (Lagrange gives `[p]^h=1` and
  `p^h=(π_p)`, so the valuation image contains `hZ^S`). This removes one unnecessary dependency from
  the spanning theorem without weakening any claim.
- **Finiteness route.** The design's comments for the roots-of-unity, Kronecker and discreteness
  items say “bounded lattice points are finite”. The manifest reaches the same finiteness through
  the batch-2 bounded-conjugate polynomial box
  (`lem-bounded-conjugates-give-finitely-many-integral-polynomials`, a ready supplier of this run),
  which avoids importing the volume machinery into the elementary finiteness steps. Statements are
  unchanged.
- **Milne locators.** The design's primary backing cites “Lemma 5.1–5.2 and Thm. 5.3”. In the
  retrieved v3.08 text, the unit theorem statement is Theorem 5.1 p.85, Lemma 5.2 p.86 is the
  norm criterion, Prop. 5.5/Cor. 5.6 p.87 are the finiteness/Kronecker statements, and the
  full-lattice theorem is Theorem 5.9 pp.88–89 (S-units: Thm. 5.11 p.90). The manifest uses these
  reconciled locators; this is a locator correction against the actual retrieved edition, not a
  route change.
- **Design §19 vs. the published ZF item.** The design says to use the proved CA-9
  `thm-unique-factorisation-of-ideals-in-dedekind-domains` and not
  `thm-number-field-integral-ideal-factorisation-in-zf`, “whose stronger choice claim is separately
  recorded and is inadequate as a proof supplier”. The ZF item is now **published and proved**,
  so the design's description of it as recorded-only is stale; the manifest still uses the CA-9
  route directly. Its transitive presence in this batch's closure through the published
  `thm-ideal-norm-is-multiplicative` is recorded under published defects below. NT-23 makes no ZF
  claim of its own, so this is an AC-branch note, not a violation.

### Local additions

- `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` (Milne Lemma 4.14/Prop. 4.15,
  Sutherland §15.2, Neukirch I.4/I.7): the unit theorem needs the discreteness ⇒ lattice structure
  theorem (a discrete subgroup is finitely generated free abelian), which the design's
  `lem-logarithmic-unit-image-is-discrete` does not itself provide. It is stated as an equivalence
  so both the bounded-finiteness form and the free-basis form are available, and it sits before
  both the discreteness lemma and the full-lattice theorem.
- `lem-deleted-row-minors-of-a-matrix-with-zero-column-sums` (Milne p.94, Sutherland Def. 15.16):
  `thm-number-field-regulator-is-well-defined` needs the exact cofactor statement that the
  `r+1` deleted-row determinants of a rank-`r` matrix with zero column sums agree up to sign; the
  sources state the conclusion but not a local proof, so the scaffold writes the repeated-column /
  rank-nullity argument as a local supplier. It also carries the nonzero-minor criterion needed to
  see that the common determinant does not vanish.
- `def-number-field-regulator` carries `justified_by: [thm-number-field-regulator-is-well-defined]`
  as its well-definedness discharge (the theorem depends back on the definition through `deps`,
  per `SCHEMA.md`); the definition itself names no particular deleted row.

## Dependency and mathematical audit

Every one of the 25 items has an explicit `deps` array, `statement`, `strategy`,
`provenance`, `sources.references` with locators, and a `dependency_level` computed from in-run
suppliers only (out-of-run suppliers never raise a level). Levels run 0–9 on the A page and reach
10 on the B page; the maximum chain is
`def-logarithmic-unit-embedding → hyperplane → discreteness → full lattice → unit theorem →
fundamental units → regulator → well-definedness` (A) with the B examples one level above their
suppliers. There are no cycles; the recomputation after the final manifest edits reports **0
batch-3 label errors**.

Actual transitive proof dependencies were checked, not page membership: direct suppliers are 6
ready-but-unpublished batch-2 scaffolds (recorded as the batch's cross-batch edges), and 69
out-of-run items that are all **published** on disk. The full declared closures of the 25 items
contain 1,589 distinct nodes — 1,555 published items on disk plus 34 in-run items (14 batch-2
ready scaffolds and other batch-3 items) — with no missing id, no unpublished out-of-run supplier,
no `proved_here: false` Recorded item, and no path to `deferred-set-theory-beyond-choice` in any
closure. The published suppliers
whose statements and proofs were read include the CA-9 Dedekind/fractional-ideal/valuation/class
group interface, the Pell classification items of the published Pell page, the quadratic
ring-of-integers/discriminant items, the complex roots-of-unity interface, and the
finitely-generated-abelian-group structure theorem. Key pairings checked:

- **Product formula** (`thm-product-formula-for-number-fields`): `(x)=(a)(b)^{-1}` is factored with
  the proved `cor-ring-of-integers-is-a-dedekind-domain` and
  `thm-unique-factorisation-of-ideals-in-dedekind-domains`; multiplicativity
  (`thm-ideal-norm-is-multiplicative`) and `N((α))=|Nm α|` give the finite product, and
  `thm-field-norm-and-trace-by-embeddings` gives the archimedean one. The AC use is exactly the
  CA-9 full-Choice route and is declared.
- **Full lattice** (`thm-logarithmic-unit-image-is-a-full-lattice`): the product region `S_c` has
  volume `2^{r_1}π^{r_2}A = 2^n·2^{-r_2}√|d_K| = 2^n covol(σ(O_K))` using the batch-2 covolume
  theorem for the unit ideal; the equality-case Minkowski theorem (batch 2, AC-qualified) yields
  `0≠a∈O_K` in `S_c`; the batch-2 bounded-ideal-norm finiteness lemma supplies the finite
  representative list; Stein's (8.1.3)–(8.1.4) estimates and the fixed-`z` adjustment of Lemma
  8.1.10 (rescaled complex weights, product `∏c_i·∏c_i²=A`) give a unit with `f(u)≠0`, hence
  `W=H`. All selections other than the published Lebesgue-volume interface are finite.
- **S-units** (`thm-s-unit-theorem`): with `h` the class number, Lagrange in the finite group
  `Cl(O_K)` gives `[p]^h=1`; the valuation image contains `hZ^S`, has finite index, and has kernel
  `O_K^×`, so the rank is `r_1+r_2-1+|S|` in the convention “`S` contains finite primes only”
  (matches Neukirch Cor. (11.7) p.71 and the design). The isomorphism is noncanonical.
- **Regulator**: the definition fixes the doubled-complex normalization and the empty-determinant
  convention (`r=0`); the well-definedness theorem uses the local deleted-row lemma and the
  `GL_r(Z)` change of fundamental system, so the invariant is independent of both auxiliary
  choices.
- **Axiom accounting.** 17 items state “Assume the Axiom of Choice”, carry an `axiom_use` note and
  list `def-axiom-of-choice` in `deps`; their AC is inherited either from the CA-9 Dedekind route
  (product formula, hyperplane) or from the published Countable-Choice Lebesgue-volume interface
  used by the equality-case Minkowski theorem (full lattice downstream). Eight items have
  choice-free statements and arguments (the finiteness unit/Kronecker/unit-criterion items, the
  logarithmic embedding definition, the kernel lemma, the lattice criterion, the deleted-row
  minors, the S-integer definition). Four of those eight have closures that reach AC only through
  published suppliers or the foundational vocabulary; their strategies therefore say that the
  argument itself introduces no Choice use and that the item makes no standalone ZF claim, rather
  than asserting a global ZF result. No item claims ZF; NT-23 inherits NT-22's full-Choice route
  and adds no stronger requirement.
- **Duplicate counterexample.** The owned
  `cex-z-sqrt-d-units-need-not-equal-ok-units` strictly strengthens the published
  `cex-pell-units-need-not-be-all-quadratic-field-units`: the published item exhibits only the
  missing unit `ε=(1+√5)/2 ∉ Z[√5]`, while the batch-3 item identifies both unit groups and the
  index: `Z[√5]^×=±⟨2+√5⟩=±⟨ε³⟩` has index 3 in `O_K^×=±⟨ε⟩`. Both can coexist; the published
  item is not edited, and no drop is warranted because the new statement is strictly more
  informative.
- **B-page numeric evidence** (used only as checks of the exact arguments): `X³−3X+1` has roots
  1.5320888862379562, 0.3472963553338606, −1.8793852415718169; `Nm(α)=−1`, `Nm(α−1)=1`,
  `Nm(α+1)=−3`; every deleted-row 2×2 minor for the cubic pair equals 0.849287450646192 in
  absolute value; `ε³=2+√5`, `ε⁶=9+4√5`, `log(9+4√5)=6 log ε≈2.88727`.

### Cross-batch dependency input

`research/frontier-37-owner-30-batch-3.cross-batch-dependencies.json` records 9 open edges — the
page edge A ← `minkowski-theory-and-number-field-class-groups`, and item edges
`lem-roots-of-unity…`, `thm-kronecker…`, `lem-logarithmic-unit-image-is-discrete` ←
`lem-bounded-conjugates-give-finitely-many-integral-polynomials`;
`thm-logarithmic-unit-image-is-a-full-lattice` ←
{`cor-minkowski-convex-body-theorem-at-equality`, `thm-covolume-of-an-ideal-lattice`,
`thm-ring-of-integers-and-ideals-are-full-lattices`, `lem-finitely-many-number-field-ideals-of-bounded-norm`};
`thm-s-unit-theorem` ← `thm-finiteness-of-the-number-field-class-group`. All six suppliers are
batch-2 items with `ready` Step-1 records but no publication yet, so the edges stay `open` and the
claims were checked against the batch-2 scaffold contracts only; verify against authored batch-2
content at Step 3b. No planned supplier was treated as published. `frontier-dependency-ledger.mjs
refresh --run frontier-37-owner-30` succeeded after the final manifest edit: 26 batches reviewed,
4 unreviewed (7, 8, 22, 29), 70 edges, 0 orphaned reviews.

## Sources and harvested results

Ten source entries (6 on A, the same core four on B) were fetched as complete PDFs, inspected in
the ranges below, and stamped by `source-fetch-check --stamp`; every fetch succeeded on the first
attempt, so no recovery retries, drops or `source_resolution` blocks were needed. Two independent
full treatments (Milne's lecture notes and Stein's textbook) plus further lecture-note and
monograph backings support every A-page item.

| Source | Complete text | Range inspected | Stamp |
| --- | --- | --- | --- |
| Milne, *Algebraic Number Theory* v3.08 | 166 pp | Ch. 4 pp.73–75; Ch. 5 pp.85–94; Ch. 7 pp.112–113; Ch. 8 pp.137–139 | 1,287,434 B, `de2066ee7a319c0e` |
| Stein, *Algebraic Number Theory* | 215 pp | §§8.1–8.2.2 pp.87–96; §18.1 pp.182–183 | 1,195,062 B, `4ea5168b966f3632` |
| Conrad–Landesman, Math 154 notes | 153 pp | Thm. 24.6 pp.126–127; Ch. 29 pp.148–153 | 763,960 B, `bcfa6cf52d90e833` |
| Sutherland, MIT 18.785 Lecture 15 | 10 pp | §§15.1–15.3 pp.1–10 | 414,005 B, `a2431b0b97b00a98` |
| Neukirch, *Algebraic Number Theory* | 590 pp | §§I.4, I.7, I.11 pp.23–71; §VI.1 pp.358–359 | 36,588,729 B, `a6d883b38fa7adc6` |
| Biasse–Van Vredendaal, S-unit computation | 19 pp | §2F p.106 | 2,492,678 B, `ea76c63b0f5e28af` |

The harvest has 97 rows, all with a disposition and destination: 56 included, 21 inline,
18 out-of-scope with specific reasons, 2 already-published (Stein Def. 8.1.1, the unit-group
definition `lem-ring-units-form-a-group`, and Stein Lemma 8.1.8, the finite-cyclic-root-group
statement `prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group`). No row is deferred.
Notable deliberate exclusions:
Milne's matrix-invertibility Lemma 5.10 (the scaffold follows Stein's equivalent fixed-product
adjustment), Milne Example 5.4 (a rank-one cubic illustration; the B page's cubic is totally real
of rank two), Remark 5.7 (sharpness of integrality), and the CM/cubic continued-fraction material.
The B page reuses the Milne/Stein/Sutherland/Conrad locators for its examples and additionally
documents the source-level misprint recorded below. `coverage-checklist --require-destination`
passes with 0 errors and 0 warnings; the non-stamping `source-fetch-check` second pass reports
10/10 resolved.

## Published defects for the owner ledger

1. **`cor-ring-of-integers-is-a-dedekind-domain` — published**, direct prerequisite of
   `thm-product-formula-for-number-fields` and therefore in most of this page's closure. Its Proof
   1.1 applies `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` to
   `Z ⊂ K` without citing that `Z` is Dedekind and `K/Q` is finite separable. Both are true and
   published (`ex-integers-with-absolute-value-are-euclidean`/`thm-euclidean-domain-is-a-pid`/
   `ex-pid-as-dedekind-domain`; `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`/
   `cor-algebraic-extensions-of-perfect-fields-are-separable`); the repair is to add the suppliers
   and spell out the instantiation. No false claim, no batch-3 blocker. (Also recorded by batch 2;
   repeated here because this batch consumes the corollary directly.)
2. **`thm-number-field-integral-ideal-factorisation-in-zf` — published**, transitively in this
   batch's closure via the published `thm-ideal-norm-is-multiplicative`. The item is titled “in ZF”
   and its Proof 2.1 asserts “no Choice is used”, but its declared dependency closure includes
   `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr →
   thm-equivalent-characterisations-of-a-dvr → thm-noetherian-ring-ideal-characterisations`, whose
   statement assumes dependent choice “as available under the Axiom of Choice” and whose only
   DC-using step is 3⇒4. Design §19 already calls the item inadequate as a proof supplier for ZF
   purposes, and this batch does not consume its ZF claim: `thm-product-formula-for-number-fields`
   names the proved CA-9 items directly and states AC. Repair strategy for the ledger: either audit
   that the DVR chain uses only the choice-free clauses (1⇔2, 2⇒3, 4⇒2) and cite them exactly, or
   restate the factorisation item as DC/AC-qualified. Publication states: both items published; no
   Step-1 escalation is required for this batch, which is AC-qualified throughout.
3. **`thm-ramified-primes-and-the-number-field-discriminant` — published**, *not* a batch-3
   prerequisite (no batch-3 item reaches it; checked by transitive closure). Retained for ledger
   continuity with batch 2: Proof 1.1 compresses the trace-pairing/nonreduced-residue-algebra
   equivalence into one “algebra” sentence; the repair is to expand it or add the proposed local
   supplier `lem-trace-degeneracy-of-finite-residue-algebra-detects-ramification`, which is not in
   this run.
4. **Source misprint, not a library defect.** Conrad–Landesman Example 29.1 p.149 displays
   `O_K^×=⟨±1⟩α^Z(α+1)^Z` for `α³−3α+1=0`, but `Nm(α+1)=(−1)³f(−1)=−3`, so `α+1` is not a
   unit. The scaffold asserts only the units `α`, `α−1` and the design's stated conclusion (two
   independent units, finite index), and records this correction in the example's strategy.

No published file or canonical published-defect ledger was edited by this worker.

## Checks and remaining run work

All commands run from the repository root after the final manifest edit and the 25 readiness
records.

| Check | Actual result |
| --- | --- |
| `manifest-deps` on all 30 run manifests | Pass: 640 items, 0 normalized, 0 errors |
| `content-policy --manifest-only` on all 30 run manifests | Pass: 640 scoped items, 0 errors, 0 warnings |
| `coverage-checklist …batch-3.coverage.json --require-destination` | Pass: 2 pages, 97 harvested, 0 errors, 0 warnings |
| `source-fetch-check --coverage …batch-3.coverage.json` | Pass: 10/10 fetch-verified; 10/10 resolved, 0 drops |
| `item-dependency-levels check --run frontier-37-owner-30` | Exit 1 with exactly 8 errors, all `empty scaffold inventory` in other batches (riemann-roch ×2, residues-serre-duality ×2, artin-presentation ×2, hormander ×2); **0 batch-3 label errors** |
| `step1-decisions check --run frontier-37-owner-30` | Exit 1; 640/640 run items have current `ready` records; the only 8 work rows are the same four other-batch pairs' empty inventories; no batch-3 row |
| `validate-plan.mjs research/plan-spec.json` | Exit 0; 1300 pages with item lists pass resolve/cycle/forward/B-page checks; 319 planned pages still carry no item list (notice only) |
| `extcheck.mjs` | Exit 0; 21,782 items, 177 recorded-not-proved, 40 published items resting on them — none in any batch-3 closure |
| `fwdcheck.mjs` | Exit 0; 21,782 items, 0 open forward references, 432 closed, 44 load-bearing |
| Custom closure checks (`/tmp/nt23/pathcheck.py`, closure scan) | 25/25 items: no path to `deferred-set-theory-beyond-choice`; no `proved_here: false` item in any closure; all out-of-run direct suppliers published |
| `frontier-dependency-ledger.mjs refresh` | Succeeded; batch-3 reviewed; 9 open edges registered; 0 orphans |

Remaining findings for the owner/operator: the whole-run `item-dependency-levels` and
`step1-decisions` checks cannot close until batches 7, 8, 22 and 29 fill their eight empty page
inventories (their pairs are not part of this batch and were not touched). The six batch-2
suppliers are ready scaffolds, not authored content: cross-batch item edges stay open and must be
rechecked against the batch-2 proofs at Step 3b. Step-1 readiness records are scaffold judgments
with the examined dependency IDs and source evidence above; they are not mathematical approval —
owner/operator reconciliation and the Step-3 independent review follow.

## Step-3b completion checkpoint (author pass)

All 25 items are authored, checked and decided; the running record is
`research/frontier-37-owner-30-step3b-pair-dirichlets-unit-theorem-regulators-and-s-units.md`
and the completed contracts are
`research/frontier-37-owner-30-batch-3.proof-contracts.json` (25 entries, strict
pass, 0 errors/0 warnings). Six items recorded `repaired` (four B-only-dependency
repairs plus a stale supplier sentence in `thm-kronecker-root-of-unity-criterion`
and the decimal-token rewrite in
`ex-change-of-fundamental-units-preserves-regulator`), 19 `accept`, 0 escalated.
All six batch-2 suppliers are authored; their uses were re-read and the batch
dependency input now records 9 `verified` edges. The unified ledger refresh is
blocked by a sibling pair's malformed YAML in
`items/def-modular-specht-form-and-radical-quotient.md` (see the report's open
obligations). No other pair's files were edited.

## Post-author independent consumer audit (2026-09-30)

The full current proofs/definitions for the 14 assigned Dirichlet consumers were
re-read after the six batch-2 suppliers had authored text. This supersedes the
Step-3b author-pass decision summary above for mathematical handoff: its
ordinary `confidence: 1` receipts are stale against the newly authored supplier
proofs and are not fresh acceptance evidence. No new Step-3 decision receipts,
item-carrier, shared-plan, ledger, or autopilot-state changes were made. The
durable item-by-item record is
`research/frontier-37-owner-30-dirichlet-consumer-audit.md`.

Two proof-only repairs were authorized and drafted, preserving both Statements:
`thm-number-field-regulator-is-well-defined` now explicitly defines the
column-coordinate matrix `B` and uses `A'=AB`; `ex-real-quadratic-units-and-pell`
now keeps `w=u_d ε_d^{-m}` inside `Z[√d]` and derives the contradiction from its
positive coordinates and norm. Their manifest strategies and proof-contract
derivations/citations were synchronized. These edits have not been given fresh
ordinary receipts pending a stable published lattice input and actual-content
recheck.

The initial supplier audit found a Q-span gap in the authored batch-2
`thm-ring-of-integers-and-ideals-are-full-lattices`, step 1.2: coefficients
`m_i/b` lie in `K`, so that displayed expression proves only a `K`-linear span,
not a `Q`-linear span. Its later Q-independence argument plus the `n` elements
can complete the intended basis result, but the written step does not prove
that span. The active batch-2 helper has since replaced that step with a proof
using a `Z`-basis of `O_K`, denominator clearing for Q-independence, and the
fact that the basis has `n` elements; its current derivation contract matches
that route. Treat the supplier as in flight until the helper drains. The initial
audit also found two defects in the batch-2 **draft**
`def-minkowski-embedding-of-a-number-field`: the Definition gave the complex
block norm as `Σ_j |τ_j(x)|`, and its real-basis assertion was not justified by
injectivity/Q-basis data. The active batch-2 helper is repairing this draft
and its contract. In the current live item, the Definition now has the correct
`sqrt(Σ_j |τ_j(x)|²)` formula; the remark says injectivity alone is
insufficient, and the determinant calculation proves the real-basis claim.
The batch-2 quote and the corresponding batch-3 full-lattice quote retain the
earlier norm text. No supplier or supplier contract was edited here; wait for
the helper to drain and recheck the stable revision before updating quote
evidence or issuing ordinary receipts. Root's choice-free rank-degree repair
has now been integrated and is available as a stable published input, but the
batch-2 lattice helper remains in flight.

The mathematical findings above come from textual proof review. After the
repairs, selected mechanical checks passed: `precheck.mts` checked 2 items with
0 failures; strict proof-contract validation checked both selected contracts
with 0 errors and 0 warnings; and `rendercheck.mjs` passed on both item files.
No test suite or decision-receipt command was run. These checks are not proof
acceptance. The historical whole-batch results above describe the earlier
author pass only; they do not validate the current supplier revision. Root
normalized the empty `justified_by` field on
`lem-roots-of-unity-in-a-number-field-are-finite` to `[]`, and the two repaired
items received the same metadata normalization; none of these metadata-only
changes certifies a proof or refreshes a receipt.

## Dirichlet batch-3 proof and supplier closeout (2026-10-01)

Both pages and all 25 actual item bodies (18 A-page, 7 B-page) were audited.
The 25-item proof-route audit and report-only source dispositions are in
`research/frontier-37-owner-30-dirichlet-completion.md`. The live coverage JSON
currently records 18 out-of-scope source rows (15 A-page, 3 B-page) and zero
deferred rows; the source rows retain their exact identities and explanations.

Four authorized proof corrections were synchronized with the matching
manifest, proof contracts, and (for full lattice) coverage:

- `lem-discrete-subgroups-of-real-vector-spaces-are-lattices`: proves bounded
  finiteness with a finite coordinate grid; fixes the `γ ∉ W` coefficient
  step; proves quotient finiteness by the explicit finite surjection
  `F → Γ/Γ₀`; and uses scaling into `(1/N)Γ₀ ≅ Z^r` followed by finite-rank
  subgroup induction via `lem-subgroups-of-z-are-cyclic`. It avoids the
  published generic FGA route, whose actual supplier chain spends Choice.
- `thm-logarithmic-unit-image-is-a-full-lattice`: quotes the actual current
  unscaled Minkowski Definition; uses the correct complex coefficients; defines
  and proves positivity of `A` before use; derives product volume from the
  qualified measure suppliers; and proves the bounded-norm principal-ideal
  family nonempty using the unit ideal.
- `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity`: handles moduli of
  omitted complex conjugates before applying Kronecker.
- `def-number-field-regulator`: derives real independence from the full
  lattice's span and dimension, and connects arbitrary fundamental-unit bases
  by `GL_r(Z)`.

The prior regulator-column and Pell-order repairs remain part of the audited
current state. The Pell proof distinguishes the `Z[√d]` Pell-order generator
from the maximal-order unit (`ε³` versus `ε` for `d=5`). The full-lattice proof
also states that the unit ideal has norm `1 ≤ A`, so its finite representative
set is nonempty.

Focused local checks passed: precheck on the three proof items (0 failures),
strict proof-contract validation on the four affected items (0 errors and 0
warnings), focused rendercheck on all four, JSON parsing, literal source-quote
checks, and direct manifest/front-matter dependency agreement. These are
content checks, not shared gates. Parent authorized ordinary nonowner
confidence-1 receipts for the exact 25 audit-required items after the changed
proof and supplier routes were reviewed; all 25 are closed (11 `repaired`, 14
`accept`) with actual dependencies and current item hashes. No owner decision
or gate was attempted; root remains the integration and gate owner.

Root reports the relevant supplier revisions stable and no batch-3 item closure
intersects an active other-batch writer. The published ZF factorisation
integration has item-byte SHA-256
`626959101a86491f5fca50994f7ca77984fc1c358b91c66f86a102426c459c81`. The shared
Git HEAD noted at handoff was `b51a7383a`; it is not a content hash. No shared
scope decisions, plan, ledger, engine or autopilot-state data were edited here.
