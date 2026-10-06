# Step 3a scope review — `categorical-braid-actions-and-decategorification`

Run `frontier-40-geometry-braids-rep-27` · batch 8 · role alpha (scope only: no item
approvals, no owner records, no scaffold edits).

Pair under review:

- A page `categorical-braid-actions-and-decategorification` (30 items),
- B page `categorical-braid-actions-and-decategorification-examples` (4 items).

**Decision: `sufficient` (scope).** No merger and no subject enrichment is
recommended. The scope text as written nevertheless carries three repairs that the
owner should route before authoring (one is a mis-stated result, not a proof gap):
item 30's "explicit" Burau-kernel element is not the source's element and is not
defined as written; the B cancellation example misstates the four terms and degrees
of the tensor complex; and coverage rows are missing for four cited sources. These
are formulation/bookkeeping defects, not omitted topics: the planned definitions,
results and examples cover the intended subject, and no confirmed scaffold
addition is needed. Exact evidence and the minimal fix are in "Findings" below.

## Review basis

Read: `research/frontier-40-geometry-braids-rep-27-batch-8.pages.json` and
`-batch-8.coverage.json` and `-batch-8.cross-batch-dependencies.json` and
`-batch-8.notes.md`; the binding design `research/plan-braid-groups-track.md`
L722–L760 (BG-15 A and B tables) and `research/plan-spec.json` orders 757/758;
`research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`;
`-planning-notes.md`; `-scope-ledger.json`; the commissioned prose design
`research/braid-groups-planning/researcher-06-categorical-actions.md`;
`-alpha-step1-drift.md` (this page `no-drift`). Published pages were inspected at
item level: `graded-quiver-algebras-and-derived-tensor-functors`,
`perfect-complexes-and-triangulated-grothendieck-groups`,
`homological-gaussian-elimination`, `geometric-braids-and-artin-generators`,
`punctured-disks-mapping-classes-and-point-pushing`, plus the in-run batch-5
supplier `the-burau-representations` and the batch-9 consumer
`rouquier-complexes-and-categorical-braid-relations`. No owner `proceed`/merge/enrich
record exists for this pair. Nothing was edited.

Sources read for the mathematics: the complete cached Khovanov–Seidel extraction
`scratchpad/source-cache/braid-groups/khovanov-seidel.txt` (sha256 prefix
`34e747083f6229d6`, byte count and hash matching the coverage stamp; printed
pp. 1–47: Definition 2.6, the proof of Proposition 2.4, Theorem 2.5, §2e.1,
§3a (I), Lemmas 3.12–3.14, §3d `I^bigr` and (B1)–(B4), Lemmas 3.18 and 3.20,
§4a `L(c~)`, Proposition 4.4/Corollary 4.8, Proposition 4.9, Corollary 1.2);
Farb–Margalit v5 author draft (sha256 prefix `46c4cc848134ba38`, matching the
stamp; Proposition 3.2 statement and the bigon/isotopy-extension material);
Bigelow, *The Burau representation is not faithful for n = 5*, re-fetched fresh
from the arXiv URL of the coverage (`/tmp/bigelow.pdf`, 110,820 bytes, sha256 prefix
`04e402f09205809e`, identical to the coverage stamp; Theorems 1.2 and 1.4,
Definition 1.3, §2 converse proof, §3 construction with Figure 3 and its final
paragraph). Seidel–Thomas was not re-read this session (all its coverage rows are
`out-of-scope` corroboration).

## Inventory versus the design

The A inventory contains all 18 design ids and no design item is missing; the B
inventory is the design's 4 items verbatim. The 12 additional A items are
prerequisites of the design's own proof routes, not padding:

- the topological layer the design's arc-detector row already invoked but never
  defined (`def-curves-and-geometric-intersection-numbers-on-the-marked-disk`,
  `lem-geometric-intersection-numbers-are-isotopy-invariants`,
  `def-basic-arcs-admissible-curves-and-normal-form`,
  `lem-standard-twists-fix-the-complementary-basic-arcs-and-commute`,
  `lem-standard-disk-twists-generate-a-free-abelian-subgroup`);
- the split of the design's single bigraded definition row into definitional and
  factual content (`def-khovanov-seidel-bigraded-cover-and-bigraded-curves`,
  `lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action`,
  `lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading`,
  `lem-normal-form-string-types-and-their-geometric-intersection-contributions`,
  `lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers`);
- the freeness claim hidden in the design's `K_0` row
  (`lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives`)
  and the explicit five-strand kernel element
  (`lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel`) that makes the B
  counterexample independent of the recorded-not-proved remark on the Burau page.

This realises researcher-06's required repair chain for BG-15 (add
`lem-khovanov-seidel-basic-arcs-detect-the-identity-braid`; declare the punctured
disk, basic arcs, `Z^2` cover and preferred lift in the bigraded definition; make
the faithfulness route
`complex-of-a-braid-word → homs-compute-intersections → detector → faithful`), and
keeps the design's one imprecision (`L(c~)` indexed by crossings, not by essential
strings) source-faithful as the batch note records.

The page-level `requires` is the plan-spec chain; all its published members resolve
to published pages, and the single in-run supplier `the-burau-representations`
(batch 5, order 745) is scaffolded earlier as the owner direction requires. Its
eight required clauses (unreduced matrix convention `[[1-t,t],[1,0]]` on column
vectors; same-kernel transfer; cyclic cover; topological–matrix agreement;
`Z[q_1^{±1},q_2^{±1}]` coefficient ring; the `B_1|t=q` block used by the example)
are recorded `open` in `-batch-8.cross-batch-dependencies.json` for Step-3
re-verification. Role in the library: this pair consumes the published KS quiver
page and is consumed only through `def-weak-action-of-a-group-on-a-category` by
`rouquier-complexes-and-categorical-braid-relations` (batch 9), whose coherent
action refines it; the edge is recorded and consistent.

## Subject coverage spot-checked against the sources

- Definition 2.6 and the faithfulness definition: the scaffold statements match the
  source (`F_g` with `F_1 = Id` and mere existence of `F_{fg} ≅ F_fF_g`; no
  compositors, no pentagon; faithful = `F_g ≇ Id` for `g ≠ 1`).
- §2e.1: the displayed action on the basis `[P_0],…,[P_m]` and
  `[R_i] = [Id]−[U_i]` are transcribed exactly; the scaffold's added conjugating
  matrix `C` (`C_{r,r}=C_{r,r+1}=(−q)^{m−r}`, `C_{m,m}=1`) was verified by exact
  rational arithmetic: `C[R_i]C^{-1} = B_i|_{t=q}` for all `i` and `m = 1,…,6` at
  five rational values of `q`, against the Burau page's published convention
  `B_i = [[1−t,t],[1,0]]` and the published `R_i` action. The `m = 2` instance of
  the B example was checked termwise. The source's matrices are conjugate to, not
  literally, the Burau matrices, and the scaffold's explicit `C` correctly closes
  the "do not merely assert `q = t`" obligation from researcher-06.
- §3a–§3b: `I` with half-weight at marked endpoints, the exceptional value `2`, and
  the flow extension match the source; the detector lemma's two-iterate hypothesis
  matches Lemma 3.6 verbatim, and the free-abelian twist subgroup claim is the
  source's own step (Farb–Margalit Proposition 3.2, `i(T_a^k(b),b)=|k|i(a,b)^2`,
  is the recorded inline input).
- §3d–§3e: the `Z^2` cover given by `δ_P(ζ,z)=(h(z)^{-2}ζ^2,−h(z))`, the local
  index, the definition of `I^bigr` with the `(1+q_1^{-1}q_2)` interior factor, and
  properties (B1)–(B4) match Definition 3.9–3.14 and the displayed formulas;
  Lemmas 3.18 and 3.20 tables were compared entry by entry with the source table
  (k>0: `q_1+q_2`, `q_1+q_2`, `1+q_1q_2^{-1}`, `q_2`, `1`, zeros, `1+q_2`; k=0:
  `0`, `q_1q_2^{-1}+1`, `1`, `q_1q_2^{-1}+1`, `1`) and the `(q_1^{-1}q_2)^u`
  dependence is the source's stated computation.
- §4a–§4c: `L(c~) = ⊕_x P_{x_0}[−x_1]\{x_2\}` over crossings and the two right-
  multiplication rules match §4a; Proposition 4.4, Corollary 4.8 and Proposition
  4.9 (freeness, Poincaré polynomial, and the factor `2` at `q_1=q_2=1` giving
  `I^bigr = 2I`) match, as does the final-paragraph derivation of Corollary 1.2.

Conclusion: the planned definitions, results and examples adequately cover the
intended subject; the additions are on the design's own route and source-grounded.

## Unmet prerequisites

No confirmed unmet prerequisite. Every one of the 163 dependency references of the
pair resolves: 92 to authored items, 71 to items scaffolded in this run, 0 missing
(mechanical scan over `items/` and all `-batch-*.pages.json`). The only in-run
supplier (the Burau page) is scaffolded earlier and its exact clauses are recorded
`open` for Step-3 re-verification.

Uncertainties to settle at Step 3b (no new item expected; all are
declaration/hypothesis checks, not confirmed gaps):

1. `lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives`
   and `def-graded-grothendieck-group-of-a-m-perfect-complexes` use the graded
   clause of the published `thm-perfect-complex-k-zero-agrees-with-projective-k-zero`;
   that clause's `[F2]` is phrased for "a unital graded `k`-algebra" while `A_m` is a
   graded `Z`-algebra. The published proof is uniform over the base ring and uses no
   field hypothesis, so this is a reading check, not evidence of a gap.
2. `def-khovanov-seidel-bigrading-cover-and-local-intersection-indices` writes
   `I^bigr ∈ Z[q_1^{±1},q_2^{±1}]` but depends on the one-variable in-run supplier
   `def-the-laurent-polynomial-ring`; the two-variable iteration, its monomial units
   and the reversal rule are exactly the clause recorded `open` in the cross-batch
   file — re-verify there.
3. `cex-ks-weak-actions-do-not-supply-pentagon-coherence-data` names "the category of
   complex vector spaces" without citing an item; the library instantiates it from
   `prop-modules-and-homomorphisms-form-category-rmod` (no new scaffold item needed,
   but the citation should be added in authoring).
4. `thm-khovanov-seidel-homs-compute-bigraded-arc-intersections` uses the
   Hom-complex identification ("Hom in the homotopy category is `H_0` of the Hom
   complex"), whose published supplier
   `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex`
   exists but is not declared; name it in the proof (graded reading) at authoring.

## Findings requiring repair (non-scope; owner action requested)

**F1 — A, `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel`: the
"explicit" element is not the source's element and is not defined as written.**
The statement says: "let α, β be the two embedded arcs … displayed in Figure 3 of the
source, let T_α, T_β be the half Dehn twists about α, β (exchanging the endpoints of
the respective arc), and put ψ := [T_α, T_β] … Then ψ ≠ 1 in B_5 and
ρ^mat_5(ψ) = I_5." In Figure 3, β runs from the boundary basepoint `p_0 ∈ ∂D` to the
puncture `q_3` (Bigelow, §3: "The following element of B_5 sends β to a straight arc
from p_0 to q_5"; Definition: "basepoint p_0 on ∂D"). A "half Dehn twist exchanging
the endpoints" of such an arc is not a braid class fixing ∂D pointwise, so T_β does
not exist in B_5 as described. Bigelow's actual element for this arc pair (§2, p. 401
and §3, p. 404) is "the commutator of a half Dehn twist about the boundary of a
regular neighborhood of α and a **full** Dehn twist about the boundary of a regular
neighborhood of β ∪ ∂D" — the half-twist commutator is his construction for β
between two punctures (`q_3 → q_4`), not for the p_0 arc. Minimal fix: restate the
explicit clause with Bigelow's element (or keep only the existence sentence). The
consuming B counterexample needs existence only and is unaffected.

**F2 — B, `ex-cancelling-a-generator-with-its-inverse-categorical-twist`: the
four-term total complex is misdescribed.** The statement says it is "the four-term
complex with terms U_i⊗U_i{−1} in degree −1, then A_m, A_m, A_m in degrees 0,0,0
after totalization". With the published conventions (`R_i^{−1}=U_i`, `R_i^0=A_m`;
`(R_i^{−1})^0=A_m`, `(R_i^{−1})^1=U_i{−1}`; totalization
`(R⊗X)^n = ⊕_{p+q=n}R^p⊗X^q`) the terms are `U_i` (deg −1),
`U_i⊗_{A_m}U_i{−1}` (deg 0), `A_m` (deg 0), `U_i{−1}` (deg 1). This is exactly
KS's `N^{−1}=P_i⊗{}_iP`, `N^0=A_m⊕(P_i⊗Q⊗{}_iP{−1})`, `N^1=P_i⊗{}_iP{−1}` in
the proof of Proposition 2.4, whose decomposition `N = T_{−1}⊕T_0⊕T_1` the example
correctly quotes. Minimal fix: correct the term/degree display; the cancellation
claim itself is right.

**F3 — coverage rows missing for four cited sources.** The item references cite,
with exact locators, Khovanov–Thomas 2007 §1 (2 items: `def-weak-action-…` and the
pentagon counterexample), Birman–Brendle §§4.2/4.4 (2 items: the decategorification
proposition and the kernel lemma), Bar-Natan "Fast Khovanov homology computations"
§4 (1 item: the mutual-inverse lemma), and Stacks Project Lemma 15.121.2 (1 item:
the freeness lemma) — none has a coverage entry (read evidence, locator,
disposition). The batch note's claim "Seven source entries … `7/7` fetch-verified"
includes Khovanov–Thomas and Birman–Brendle, but the coverage file's seven entries
are KS×2, Farb–Margalit×2, Bigelow×2 and Seidel–Thomas; the note's disposition
counts (37 included / 8 inline / 4 already-published / 8 out-of-scope) also differ
from the file (34 / 8 / 6 / 9). `coverage-checklist.mjs` passes because it does not
cross-check manifest references. Minimal fix: add the read-evidence rows with
dispositions, or drop the citations, at Step 3/4; no new item is implied.

**F4 — coverage attribution (minor).** Five A items appear in no coverage row:
`def-khovanov-seidel-path-ideal`,
`lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives`,
`def-graded-grothendieck-group-of-a-m-perfect-complexes`,
`lem-standard-twists-fix-the-complementary-basic-arcs-and-commute`,
`lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives`.
Their source content sits in the KS §1b/§2a/§2e.1 rows, which currently name other
items; add the item ids when those rows are next touched.

## Checks actually run

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/…-batch-8.pages.json` | 34 items, 0 missing, 0 error(s) |
| `node tools/coverage-checklist.mjs research/…-batch-8.coverage.json --require-destination` | 2 pages, 57 harvested results, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage research/…-batch-8.coverage.json` | 7/7 fetch-verified, 7/7 resolved (exit 0) |
| dependency resolution scan (163 pair references vs `items/` + all run manifests) | 92 authored / 71 in-run scaffold / **0 unresolved** |
| coverage rows ↔ manifest items | B 4/4 named; A 25/30 named (F4); no coverage row names a non-existent run item |
| coverage stamps vs local copies | KS sha256 `34e747083f6229d6…` (714,553 B) and Farb–Margalit `46c4cc848134ba38…` (3,609,750 B) match the stamps; Bigelow re-fetch matches `04e402f09205809e…` (110,820 B) |
| KS/FM/Bigelow argument reads | the locators above were read in the extracted full texts; the scaffold's transcriptions of the action matrices, Lemmas 3.18/3.20 tables, `I^bigr` and `L(c~)` rules match |
| exact conjugation check | `C[R_i]C^{-1}=B_i|_{t=q}` verified over `Z[q^{±1}]` for `m ≤ 6` at five rational `q` values, and the `m = 2` B-example matrices checked entrywise |

## Disposition and owner action

Scope is `sufficient`; no merger and no topic enrichment. The owner is asked to
route the three repairs (F1, F2, F3) plus F4 before Step-3b authoring: amend the two
statements (F1 item 30's explicit clause; F2 the term/degree display) or authorise
the Step-3b author to correct them, and reconcile the coverage rows. If the owner
prefers, recording `proceed` for the unchanged scope with these findings assigned to
the batch-8 author is an explicit alternative; the scope receipt binds the current
statements, so any statement amendment will require a fresh scope receipt.
