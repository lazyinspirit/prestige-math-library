# Batch 16 Step-1 scaffold — `parabolic-category-o-and-fock-space-bases`

Run `frontier-44-special-representation-examples-28`, batch 16 (orders 1788/1789),
category `special-topics-in-representation-theory`. Owned pair:

- A `parabolic-category-o-and-fock-space-bases`
- B `parabolic-category-o-and-fock-space-bases-examples`

Owned outputs written in this dispatch: `…-batch-16.pages.json` (22 items: 18 A + 4 B),
`…-batch-16.coverage.json` (9 source entries, all `fetch_verified`, 63 harvested
results), `…-batch-16.cross-batch-dependencies.json` (61 rows, all `open`), the 22
`…-step1-<item>.json` readiness records (19 ready, 3 escalated), this note, and the
owned "Batch 16 Step-1 scaffold" section appended to
`briefs/tasks/frontier-dependency-ledger.md`. No published item, shared plan, engine
state or verdict was edited; no item carrier under `items/` or `library/` was created.

## 1. Binding direction and plan reconciliation

`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
was read in full before construction and is binding. The clauses that bear on this
pair are (i) the Category O prerequisite/order decision (keep orders 1782–1793,
suppliers before consumers, exact supplier interfaces) and (ii) the quantum final-
interface clause: "Future 9 Fock and 16 finite-rank type-A consumers must use these
exact interfaces. Semi-infinite wedge bars, tail/truncation compatibility and
two-sided-unbounded affinized vector evaluations require their own local source
arguments; the finite ordered tensor theorem is not that proof." That clause is built
into item `thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations`,
which consumes batch-8's `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`
only in its proved scope (finite ordered products of based integrable modules) and
proves the semi-infinite direct-limit step locally by the source's truncation lemma.
The regular-block/inverse-KL correction and the genuine parabolic correction of batches
14–15 are inherited as interfaces by the transition-matrix and parabolic-block items;
batch-15's record ("singular blocks: spherical normalization `m_{k(y),k(x)}(1)` with
`k(w)=w0^J w^{-1}w0`; the antispherical family governs the genuine regular parabolic
form") is the interface that fixes the q=1 cross-check of the Fock transition matrix.

`research/plan-kazhdan-lusztig-track.md` KL-6 (line 170) is the inventory source. All
17 design A items are scaffolded under their exact design ids in the design's
prerequisite order. **One local prerequisite** is added on the same A page before its
consumers: `def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules`
(the exact interface between the Fock-space normalization of the sources — generators
`D_i,E_i,F_i`, coproduct, bar — and the library's quantum-group conventions fixed by
the owner quantum direction: `v=q^{-1}`, unchanged divided generators, `K_h^L` mapped
to `K_{-h}`). No design item was dropped, weakened or re-numbered. The B companion
carries the design's four items (3 examples + 1 counterexample).

**Recorded conflict with `research/plan-spec.json`.** None in the page metadata: the
plan carries the pair at orders 1788/1789 with exactly the `requires` set named in the
dispatch, B requires A, and the category matches. `validate-plan` reports two
`redundant-prereq` advisories on this A page (`grothendieck-groups-and-graded-cartan-pairings`
and `young-diagrams-tableaux-and-permutation-modules` are already reachable through
`singular-and-parabolic-kazhdan-lusztig-theory`), which are advisories on the plan's
own declared requirements, not errors. The only textual divergence found is stale
source metadata, not scope: the design lists the Brundan–Kleshchev and Brundan articles
as the KL-6 sources, while the design's own proof route for the Ringel-duality item
implicitly requires Soergel's Kac–Moody twisting-functor theorem, which is not a
listed KL-6 source and is not retrievable (see §3). No other conflict was found.

## 2. Construction summary

22 items (18 A + 4 B) built once in prerequisite order. `dependency_level` labels are
computed from the whole-run graph with `tools/item-dependency-levels.mjs` (in-run
suppliers raise the level; published suppliers do not). The written labels equal the
computed levels for all 22 items and there is no cycle and no forward intra-page edge
(`item-dependency-levels check --run` reports no batch-16 row; the run-wide failures are
other batches' empty scaffold inventories: 9, 10, 11, 17, 18, 23, 24, 25).

A-page route: (A1) convention dictionary; (A2) Fock module and tableau/Bruhat
combinatorics; (A3) finite wedge quotients, truncation direct limit and the column
monomial basis; (A4) the quasi-R tensor bar with triangularity, truncation
compatibility and integral form; (A5) the four bases and the two pairings; (A6) the
KL/Deodhar transition matrix with the family-fixing obligation; (A7) the standard
monomial basis of the highest weight submodule; (A8) the integral parabolic blocks
`O^Lambda_alpha`; (A9) the residue translation functors `e_i,f_i`; (A10) the
integrable Fock-space action; (A11) `[O^Lambda] = F(Lambda)_Z` and the Hom pairing;
(A12) standard/costandard-filtered and tilting objects; (A13) existence and
classification of indecomposable tiltings; (A14) the Ringel dual of a finite ideal;
(A15) parabolic Ringel duality via the opposite parabolic (**escalated**); (A16) the
three-basis dictionary (**escalated for the tilting clause**); (A17) the Fock pairing
lemma; (A18) the quantum-group global bases of the highest-weight submodule.
B-page items: the four bases in the smallest two-factor tensor space, residue
translation on small parabolic standards, opposite-parabolic Ringel duality on a
finite ideal (**escalated**), and the canonical-vs-quasi-canonical counterexample.

Choice: the A-page category-O items (A8–A16, A17) declare `def-axiom-of-choice`,
inherited from the published block/parabolic theory and the translation-functor
suppliers; the Fock-space items A1–A7 and A18 and the Hecke-side computations are
choice-free as scaffolded, and no new choice principle is introduced. Axiom of Choice
is never consumed to prove a replacement of a recorded result.

## 3. Mathematical decisions and escalations (recorded honestly)

1. **Three escalations.** `thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic`
   (A15) is escalated. Its engine is an accessible, complete proof in the finite/even
   case: Brundan, *Tilting modules for Lie superalgebras* (arXiv:math/0209235, fetched;
   Lemma 5.3, Theorems 5.1/5.4, Corollaries 5.7–5.8, Theorem 6.4 with (6.5),
   Example 7.1 identifying the classical case with BGG category O) plus
   Andersen–Stroppel, *Twisting functors on O* (fetched) for the twisting-functor
   interface. What is **not** closed is the type-A parabolic refinement used by this
   page: BK 0901.0057 Lemma 4.10 states it, but its proof is attributed there to
   Soergel, *Character formulas for tilting modules over Kac–Moody algebras*,
   Represent. Theory 2 (1998) 432–448, Theorem 6.6. Retrieval of that paper failed:
   (i) the AMS/ERT PDF URL redirects to a bot-wall HTML page (19.99 MB of HTML, no
   `%PDF`), (ii) the guessed direct `S1088-4165-98-00052-6` PDF path returns 404,
   (iii) the Wayback availability/CDX APIs answer 429 and then "Internet Archive
   services are temporarily offline", (iv) the Freiburg homepage redirect serves a
   landing graphic, not a papers list, and (v) no author-hosted or mirror copy was
   found by web search. `grep`-searched alternatives (Khomenko–Mazorchuk, *On
   Arkhipov's and Enright's functors*) also have no open full text. Rather than
   assume the parabolic statement from the Borel statement, A15 is escalated with the
   exact missing step (restriction to the p-locally-finite categories and the
   identification of the labelling shift with the reverse-column reading). A16 is
   escalated for its tilting clause only (clauses [L(A)]=L_A and [P(A)]=P_A are fully
   scaffolded and are recorded as such inside the reason, but no partial readiness is
   implied). The B item `ex-opposite-parabolic-ringel-duality-on-a-finite-ideal` is
   escalated because it consumes A15.
2. **Family-fixing obligation in `thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix`.**
   The source formula (BK (2.16)–(2.18)) is reproduced verbatim and the source itself
   identifies the `p_{A,B}` as Deodhar's parabolic Kazhdan–Lusztig polynomials, but the
   exact family (spherical `M^J` vs antispherical `N^J`) and the index dictionary
   against the library's Hecke normalization are a normalization check that must be
   proved by the author, not assumed. The strategy fixes the decisive method: match
   the two smallest cases (`S_2`; `S_3` with `J={s_1}`) using batch-15's
   alternating-sum and spherical-reduction theorems, and fix the family by the `q=1`
   comparison with the independently proved singular-block multiplicity theorem
   (batch 15, spherical with `k(w)=w0^J w^{-1}w0`). This is recorded as an obligation,
   not as a defect; the q=1 side of the comparison is robust to the polynomial-family
   assignment.
3. **QG-8 scope respected.** Item A4 consumes the finite-product tensor-bar theorem in
   its exact proved scope only, and proves the semi-infinite wedge/direct-limit step
   itself from BK Lemma 2.1 (quasi-R-matrix truncation). No item of this page claims
   general integral action, no item identifies upper with lower global bases, and no
   item asserts a grading on category O or the Koszul/Ext refinement reserved for a
   later frontier.
4. **Parabolic versus properly stratified categories.** Following the batch-15 owner
   correction, every parabolic item is stated for the genuine locally parabolic-finite
   category `O^p` (batch-15 supplier items) and not for Mazorchuk–Stroppel's
   projectively-presentable properly stratified subcategory. No Koszul duality,
   singular/parabolic equivalence or graded lift is imported.

## 4. Readiness records

19 ready / 3 escalated, all `owner: false`, recorded through
`node tools/step1-decisions.mjs record`; every ready reason names the examined
dependency ids and the evidence (source and locator) and the exact proof route. Every
escalated reason states the missing prerequisite and the retrieval evidence.
`step1-decisions check --run …` reports 524 items, 520 ready, 16 work rows run-wide;
exactly three of them are batch-16 (the escalations above). No in-run supplier is
treated as proved merely because it is scaffolded: the batch-5/6/7/8 and batch-15
suppliers are scaffolded and owner-ready but not authored, and every edge stays open.

## 5. Coverage and sources

`…-batch-16.coverage.json` has 6 sources on the A page and 3 on the B page, every one
read in the recorded locator range and every one carrying a `fetch_verified` stamp:

- Brundan–Kleshchev, *The degenerate analogue of Ariki's categorification theorem*
  (arXiv:0901.0057, complete 44 pp.): §§2.1–2.8, §3.1 (Theorem 3.1, Lemmas 3.2–3.3,
  (3.3), (3.5)), §§4.3–4.4 (Lemma 4.10, Theorem 4.15, Corollary 4.18);
- Brundan, *Dual canonical bases and Kazhdan–Lusztig polynomials*
  (arXiv:math/0509700v2, complete 29 pp.): §§2–5 (Hecke module (4.3), Theorems 4/7/11,
  Corollaries 5/8/9/12/13, Remark 10, Remark 14) and §7 (Lemma 25, Theorem 26,
  Remarks 27/30, Example 28, Theorem 29);
- Brundan–Kleshchev, *Schur–Weyl duality for higher levels* (arXiv:math/0605217,
  complete 50 pp.): §§4.1–4.5 (Lemma 4.3, Theorem 4.5, Theorem 4.8, Lemma 4.10);
- Mazorchuk, *Lectures on Algebraic Categorification* (arXiv:1011.0144v3, complete
  128 pp.; the primary lecture-note treatment): §§4.1–4.7 (Theorems 4.5, 4.8–4.10,
  Proposition 4.11, the gl_2 example);
- Brundan, *Tilting modules for Lie superalgebras* (arXiv:math/0209235, complete):
  §§2–6 (Corollary 4.5, Theorem 5.1, Lemma 5.3, Theorems 5.4/6.3/6.4, (6.5)) and
  Example 7.1;
- Andersen–Stroppel, *Twisting functors on O* (author-hosted complete article,
  University of Bonn): §§1–4 (Lemma 2.1, Theorems 2.2–2.3, Theorem 3.2, Theorem 4.1,
  Corollary 4.2).

63 harvested results carry dispositions: A page 53 (40 included, 5 inline, 8
out-of-scope with reasons), B page 10 (all included). No result is undisposed and no
result is dropped. A page sources include a lecture-note set (Mazorchuk) as the primary
treatment, satisfying the two-treatment rule; the B page also carries Mazorchuk as its
primary kind. The failed Soergel retrieval is _not_ presented as a coverage source,
because no claim of this page is disposed to it as a read source; it is recorded as the
exact blocker of the escalated items instead.

## 6. Checks actually run (with actual results)

- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` — 524 items, 0
  normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` — 524
  scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs …-batch-16.coverage.json --require-destination` —
  2 pages, 63 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …-batch-16.coverage.json --stamp` —
  9/9 fetch-verified (9 newly stamped), 9/9 resolved; check mode identical.
- `node tools/url-sweep.mjs --coverage …-batch-16.coverage.json --out <temp>
  --recover --fail-on-dead` — 6/6 distinct URLs live, 0 failed, 0 blocking, 6 citation
  decisions (0 documented drops).
- `node tools/source-backing.mjs --coverage …-batch-16.coverage.json --liveness <temp>
  --require-verified` — 23 authored results, every one backed.
- `node tools/item-dependency-levels.mjs check --run …` — no batch-16 row; run-wide
  FAIL only on other batches' empty inventories (9, 10, 11, 17, 18, 23, 24, 25).
- `node tools/step1-decisions.mjs check --run …` — 524 items, 520 ready, 16 work rows
  run-wide; exactly 3 are batch-16 (the escalations).
- `frontier-item-gate --tool validate-plan` — OK: acyclic and consistent, no item-level
  cycles, forward references, B-page dependencies or unresolved ids. Advisory only on
  this page: the two `redundant-prereq` rows of §1.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` — refreshed and
  deduplicated; reviewed batches now include 16 with 62 unified edges touching batch 16
  and 0 orphaned reviews. `--require-reviewed` still fails pending batches
  11/17/18/23/24/25, whose inputs are not yet written; that is the engine's join-time
  condition, not a batch-16 finding.
- `fwdcheck`/`extcheck` via `frontier-item-gate` — attempted; both FAIL with
  `focus-item-unknown` because the focus items are scaffolded but have no `items/*.md`
  carrier before authoring (the engine defers external-reference checking to Step 3).
  `depsource` — attempted; it aborts with `--run requires a run identity and a nonempty
  --items-file selection` (no authored carriers exist to select). Recorded as not
  applicable / blocked at Step 1, not as passes.

## 7. Unresolved findings and cross-batch rows

`…-batch-16.cross-batch-dependencies.json` carries 61 rows (59 item + 2 page), all
`open`:

- page `parabolic-category-o-and-fock-space-bases` ← batch-8 page
  `balanced-triples-and-global-crystal-bases` (plan KL-6; exact finite-product scope of
  the tensor-bar theorem and the direct-limit restriction recorded);
- page `parabolic-category-o-and-fock-space-bases` ← batch-15 page
  `singular-and-parabolic-kazhdan-lusztig-theory` (plan KL-6; the spherical/
  antispherical interface recorded);
- 59 item edges to batch-5 (`def-quantum-weight-module-and-integrability`,
  `def-contravariant-form-on-an-integrable-quantum-highest-weight-module`,
  `def-lusztig-divided-power-integral-form`,
  `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
  `def-quantum-verma-module-and-simple-highest-weight-quotient`,
  `prop-integrable-quantum-highest-weight-modules-are-semisimple`,
  `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half`), batch-6
  (`def-kashiwara-lattices-lambda-and-infinity`, `def-crystal-lattice-and-crystal-basis`,
  `def-kashiwara-crystal-operators`, `def-crystal-graph-epsilon-phi-and-weight`),
  batch-7 (`lem-tensor-products-of-integrable-weight-modules-are-integrable`,
  `def-tensor-product-of-crystals`, `thm-crystal-basis-tensor-product-rule`,
  `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`),
  batch-8 (`def-the-bar-lattice-and-integral-lattice-of-a-based-module`,
  `def-balanced-triple-and-globalization-map`,
  `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`,
  `lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations`,
  `def-lower-global-basis-of-a-quantum-highest-weight-module`,
  `def-upper-global-basis-by-the-contravariant-form`,
  `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`,
  `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`,
  `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible`,
  `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type`,
  `prop-global-bases-specialize-to-integral-weight-bases`) and batch-15
  (`def-parabolic-category-o-for-a-standard-parabolic`,
  `def-standard-parabolic-and-levi-subalgebras-from-simple-roots`,
  `thm-parabolic-category-o-is-a-highest-weight-category`,
  `def-parabolic-kazhdan-lusztig-basis-and-polynomials`,
  `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones`,
  `thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis`,
  `def-parabolic-hecke-module-and-antispherical-standard-basis`,
  `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials`,
  `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`). Every row
  names the exact interface used; all suppliers are scaffolded and owner-ready but not
  authored, so the edges stay open for the ordinary supplier-before-consumer Step-3/Step-5
  review.

Supplier direction owed by a sibling consumer batch (its owner writes that row): batch
17 page `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` declares this A
page in its `requires` (plan KL-7); the unified ledger lists that page edge. No other
run manifest declares a dependency on a batch-16 item.

No published item consumed by this batch was found defective: the published category-O
items (`def-bgg-category-o`, `thm-bgg-reciprocity`,
`thm-projectives-in-category-o-have-verma-flags`,
`lem-standard-costandard-hom-and-ext-vanishing`,
`prop-restricted-duality-is-an-exact-involution-on-category-o`), the published
Grothendieck-group and Young-diagram items, and the published quantum-Serre page were
read at their interfaces and are consistent with the claims scaffolded here.

The three escalations are the batch's only unclosable obligations. Readiness is
scaffold-level: Step 3 authors the proofs and Steps 5–8 review; this note is not a
mathematical approval and no engine stage or verdict was stamped.
