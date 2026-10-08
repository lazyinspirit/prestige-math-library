# Batch 4 — `kazhdans-property-t-and-spectral-gap` / `…-examples` (RG-29) construction evidence

Run: `frontier-43-complex-representation-15` (beta role, batch-4 dispatch; this
pass supersedes the lost attempt-1 lease and rebuilds nothing that is not
recorded here). Owned outputs:
`research/frontier-43-complex-representation-15-batch-4.pages.json` (23 A-page +
4 B-page items), the coverage record `…-batch-4.coverage.json`, 27 current Step-1
readiness records, the consumer-batch dependency input
`…-batch-4.cross-batch-dependencies.json`, and this note.

Status: **27 items `ready`, 0 escalated**, after one bounded owner repair and focused review. These records are Step-1 construction
evidence, not mathematical approval; Step 3 owns authoring and independent
review. No published content, shared plan, engine state or verdict was edited.

## Controlling design, plan and owner direction

- The **representation-theory-groups track design controls**:
  `research/plan-representation-theory-groups-track.md` §RG-29 (A page
  `kazhdans-property-t-and-spectral-gap`, B page
  `kazhdans-property-t-and-spectral-gap-examples`; design tables at L2018 ff.
  and L2058 ff., source-backing rows L2550 ff.). All 14 design A items and all
  4 design B items are present, with the requested scope (almost invariant
  vectors, Kazhdan pairs/constants, the Kazhdan-pair equivalence, the
  isolation theorem, the coefficient lemma, compact generation, quotient
  inheritance, compact groups, amenable-plus-(T), spectral gap, uniform
  spectral gap, the higher-rank theorem, the SL₂(ℝ) failure; B: compact Kazhdan
  pair, finite groups, ℤ, the complementary-series witness).
- `research/plan-spec.json` fixes orders **1238/1239**, kinds A/B, category
  `representation-theory`, companions, and the page `requires`
  (`unitary-representations-positive-type-and-gns`,
  `group-c-star-algebras-and-the-fell-unitary-dual`,
  `amenability-reiter-nets-and-folner-conditions`,
  `sl2-r-principal-and-complementary-series`). The manifest matches the plan
  exactly; **no design/plan conflict exists in ids, orders, categories or
  requires**, so no conflict resolution was needed. The design's prose
  proof-plan instructions that differ from the constructed routes are recorded
  below as explicit deviations.
- The **binding owner direction** (`…-owner-authoring-direction.md`, "Batch 4:
  RG-29 higher-rank theorem") is satisfied in full:
  `thm-sl-n-r-has-property-t-for-n-at-least-three` is scaffolded with a full
  local proof strategy through the four named local suppliers
  (`lem-sl2-r-has-no-invariant-probability-on-the-projective-line`,
  `lem-sl2-r-semidirect-r2-has-relative-property-t`,
  `lem-normal-relative-property-t-controls-distance-to-invariant-vectors`,
  `lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups`), all
  authored before the theorem (levels 1, 2, 2, 0 versus the theorem's level 3),
  using the published abelian PVM, compact-probability-subsequence and
  convex-projection suppliers, with no integer bounded-generation theorem and
  no higher-rank topic. No item uses `proved_here: false`, `external_refs` or
  any external-dependency fallback.

## Inventory and dependency levels

- A page: 23 items (7 definitions, 7 lemmas, 8 theorems, 1 proposition),
  including the four owner-mandated local suppliers. B page: 4 items (2
  examples, 2 counterexamples). Both pages are far below the 100-item cap.
- `dependency_level` distribution over the 27 items: level 0 ×7, level 1 ×5,
  level 2 ×6, level 3 ×4, level 4 ×1, level 5 ×1, level 8 ×1, level 10 ×1,
  level 11 ×1; maximum level 11
  (`cex-sl2-r-complementary-series-destroys-property-t`).
- `node tools/item-dependency-levels.mjs check --run
  frontier-43-complex-representation-15` → batch-4 labels all recompute
  correctly; the only errors are the batch-5 pair's `empty scaffold inventory`
  (a sibling dispatch's state, not a batch-4 finding).
- In-run cross-batch dependency edges (recorded in the consumer input and in
  `research/frontier-43-complex-representation-15-cross-batch-dependencies.json`):
  page edge to batch-2 `amenability-reiter-nets-and-folner-conditions` and
  item edges to `def-amenable-locally-compact-group` (level 1) and
  `thm-hulanicki-weak-containment-criterion-for-amenability` (level 7) from
  `thm-an-amenable-property-t-locally-compact-group-is-compact`; page edge to
  batch-3 `sl2-r-principal-and-complementary-series` and item edges from
  `prop-sl2-r-does-not-have-property-t` to `def-normalized-principal-series-i-epsilon-nu`
  (1), `thm-compact-picture-of-the-sl2-principal-series` (2),
  `lem-k-type-decomposition-of-the-sl2-principal-series` (3),
  `thm-unitarity-of-the-sl2-complementary-series` (8),
  `cor-complementary-series-converge-to-the-trivial-representation` (9), and
  from `cex-sl2-r-complementary-series-destroys-property-t` to the same
  corollary (9) and unitarity theorem (8). All 72 distinct external dependency
  targets are published items on published pages (item and home-page status
  checked item-by-item); no planned-only supplier is treated as published.
- Actual closures were checked against the design route, the owner direction
  and the source texts: the projective-line obstruction (unipotent normal form,
  equal-mass partition argument), the relative-(T) PVM/probability route
  (separable reduction, E({0}) = 0, total-variation estimate ≤
  2‖π(g)ξ−ξ‖, weak-subsequence extraction, unipotent limit contradiction),
  the quantitative normal-subgroup control (projection and telescoping, strict
  form by direct sum), real Gaussian elimination (explicit count
  2n²+6n−8 ≤ 2n²+6n; the six-transvection factorization of diag(a,a⁻¹)
  rechecked by direct multiplication), and the least-norm convex-orbit
  argument (orbit within distance 1/2, nonzero fixed point).

## Construction repairs recorded in this pass

1. **B-page dependency rule (b-leaf).** Five declared dependencies pointed at
   published items homed only on examples pages
   (`ex-one-point-compactifications-of-the-line-and-of-the-naturals`,
   `ex-pontryagin-dual-of-euclidean-space`,
   `ex-normalized-haar-measure-on-a-finite-group`,
   `ex-pontryagin-dual-of-the-integers-is-the-circle`,
   `ex-unitary-dual-and-full-group-c-star-algebra-of-the-integers`). SCHEMA
   forbids using a B-page-only item as another page's dependency. Repairs:
   the compact-metrizability of P¹(ℝ) is now proved locally by the explicit
   inverse-stereographic homeomorphism ℝ* → S¹ with A-homed published
   suppliers; the dual of ℝ² is identified through the published A-homed
   character/product-dual lemmas; finite-group Haar measure uses the published
   A-homed normalized-Haar-probability corollary with the counting measure
   checked directly; the ℤ counterexample constructs its characters directly.
   After the repair, `validate-plan` (whole plan, this manifest spliced) exits 0
   with no `b-leaf`, `undeclared-prereq`, `resolve`, `forward-ref` or
   `intra-order` errors for this batch.
2. **Weak-containment equivalence scope.** The published
   `lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors`
   is stated for locally compact Hausdorff groups and its own remark proves
   that the general-topological-group equivalence fails. The scaffold now
   restricts the `1_G ≺ π` identification in
   `def-almost-invariant-vectors-for-a-unitary-representation` and
   `def-spectral-gap-for-a-unitary-representation` to the locally compact
   Hausdorff case (recording that only the direction from almost invariant
   vectors holds in general), and
   `thm-property-t-is-uniform-spectral-gap-for-representations` states the
   spectral-gap identification for locally compact Hausdorff groups while its
   displacement-bound iff is kept for all topological groups.
3. **GNS-converse form.** The final sentence of
   `lem-almost-invariant-vectors-and-positive-type-functions` claimed that
   *each* GNS representation of a net of positive-type functions converging to
   1 on compacta itself has almost invariant vectors. That is false for a
   single member of such a net (e.g. a net that eventually converges and has
   one non-amenable regular-representation member). The statement now asserts
   the correct net form — eventual `(Q,ε)`-invariance of the cyclic vectors,
   hence almost invariant vectors of the Hilbert direct sum — with the direct
   sum added to the dependencies and the caveat in the strategy.
4. **Isolation theorem repaired without weakening.** The general C*-algebra irreducible-separation supplier and central character-ideal argument below replace the missing convex-density/splitting route.
5. **Amenable-plus-(T) route.** The design's prose suggests combining Hulanicki
   with isolation of the trivial representation; the scaffold instead proves
   the theorem directly (Hulanicki gives almost invariant vectors of λ_G, (T)
   gives a nonzero invariant vector, the locally proved finite-Haar-volume
   criterion gives compactness). This is a deliberate route choice that avoids
   consuming the held isolation theorem; the statement (KHV Theorem 1.1.6) is
   unchanged.

## Sources and dispositions

The two genuine native source fetches remain: KHV complete523-page text (1971873bytes,sha256_16 0281823290dfb42e) and Breuillard complete38-page notes (554157bytes,sha256_16 7272f3b62d2ee7cd). The bounded repair adds only the previously fetched/read full Farah author book,535pages,9651043bytes,sha2567000d7d842da12d5b934b013d3a346c1ffe52e04c6a3d8cedb72f23c251fb073. Its genuine fetch stamp is reused, never fabricated. Full relevant passages read: Lemma1.7.6 printed27–28/PDF56–57; Proposition1.10.3 printed35/PDF64; Lemma3.6.4/Proposition3.6.5(1)–(3) printed104–105/PDF133–134. Three specific new coverage rows supply state norming, GNS and purity; the pure norm-attainer compact-face step and reducing-projection argument are proved locally.

Coverage now records40dispositions over3actual sources. KHV C.5.3/C.5.5(ii) and F.2.8/F.2.9 are explicitly out-of-scope for the chosen complete alternative proof, with exact reasons; they are not missing premises or owner-decision holds. The other existing dispositions are retained. No new citation exception is requested or applied.

## Exact isolation repair and focused review

New supplier `lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras` is physically before its sole consumer `thm-property-t-is-equivalent-to-isolation-of-the-trivial-representation`. It proves irreducible nondegenerate representations detect every nonzero element of any C*-algebra, without separability. A spectral norm-attainer extends by complex Hahn–Banach; positivity is proved from the signed-t inequality and contraction estimate. A compact norm-attaining face has a pure extreme point by the actual earlier Krein–Milman supplier. The full unital GNS construction and reducing-projection argument give irreducibility. For nonunital A, restriction of an irreducible representation of its unitization is nonzero, nondegenerate and irreducible because A is an ideal. No Polish/separable result is used.

For arbitrary LCH G, the actual published Fell-closure/kernel identity gives a nonzero character ideal I at an isolated trivial class. Kernel separation makes chi|I injective and onto C; its chi-value1 element p is a central projection with ap=pa=chi(a)p. If a representation with almost invariant vectors killed p, the published weak-containment/kernel theorem would contradict chi(p)=1. Its nonzero p-range therefore carries the trivial amplification by the actual nondegenerate group/C* correspondence. The direct-sum R formulation uses the coefficient-neighbourhood definition directly for closure=>weak containment, retaining finite coefficient sums; the actual published LCH trivial-weak-containment lemma supplies single almost invariant unit vectors. The dual-only Fell closure theorem is not applied to reducible R members.

The single focused review checked the unchanged full statement, arbitrary LCH hypotheses, empty dual complement/trivial group, nonunital and nonseparable algebras, proper-set choice of irreducible representatives, finite-sum coefficient witnesses and direct/indirect consumers. It identified and corrected exact Hilbert projection prerequisites: use the real Hilbert orthogonal-decomposition/linear-selfadjoint projection suppliers and early AC=>Countable Choice theorem, rather than finite-dimensional projection statements or a late duplicate implication lemma. For P=pi(p), its closed range and orthogonal decomposition are proved directly. No affected consumer statement changed; the existing isolation theorem has no declared in-run consumer. No item files were edited.

## Current checks and readiness

Focused checks: manifest-deps27/0errors; coverage40rows/0errors/warnings; source-fetch3/3verified; policy with the two declared in-run supplier manifests loaded77subjects/0errors/warnings; run-aware batch4 dependency levels27items,max11,0errors. A standalone batch4 policy invocation correctly found9references to un-authored in-run batch2/3 suppliers; supplying their actual manifests resolves all9, without dropping or fabricating those dependencies. New published prerequisites all have actual earlier homes in the existing four-edge closure; no page edge or cross-batch input is added.

Readiness is refreshed dependency-first on final scaffold bytes and preserves unchanged current records. Durable exact review/readiness/hash evidence is `frontier-43-complex-representation-15-property-t-isolation-resolution.json`. Root owns the native gate; scaffold authoring readiness is not authored-proof acceptance.

## Existing authoring caveats retained

- SL2(R) source normalization uses phi_nu(g)=integral_K |alpha(p(k,g))|^(1-nu) while the compact-picture cocycle has exponent1+nu; state the dictionary in the authored rank-one failure proof.
- The SL2(R) semidirect R2 spectral-measure argument reduces to the separable invariant carrier generated by a witness, using second countability of that specific group. This reduction is unrelated to the arbitrary-LCH isolation proof.
- AC accounting and the previously integrated higher-rank local proof routes remain unchanged. Existing cross-batch supplier edges retain their actual open-until-authored status.

## Adjudicated complementary-series interface correction

Binding `sl2-complementary-owner-disposition.md` authorizes correction of the false fixed-parameter weak-containment clause and undefined normalized endpoint form. Sound family convergence, reducibility, endpoint subquotients and full positive-definite interval are retained. The ambient smooth globalization is now explicitly distinguished from its K-finite (g,K)-module. The actual dual pairing and intertwiner act on smooth vectors; polynomial eigenvalue bounds from recurrence, integration-by-parts Fourier decay and uniform derivative limits supply the continuous smooth multiplier. Real derived intertwining integrates along J,H,e0 to all ANK factors, so whole-G invariance never assumes the K-finite core is G-stable.

Spherical weights are a0=1 and a_(±2j)=product_(l=1..j)(2l-1-nu)/(2l-1+nu), at regular real parameters. The full module is positive definite exactly for|nu|<1; the weighted norm is dominated by a C^r norm, which proves strong continuity on the Hilbert completion via smooth density and unitarity. Atnu=1 the finite normalized limit has only a0=1; atnu=-1 the separate rescaled(1+nu)limit has b0=0,b_(±2j)=2j. Uniform polynomial bounds pass smooth pairing invariance to those endpoint limits. No normalized pole is treated as a finite form, and no blanket indefiniteness of exceptional rescaled forms is retained. Odd recurrence forbids full positive definiteness for real nonzero nu; positive even parameters have zero tails, negative even parameters zero central weights, andnu0 retains the two-limit unitary splitting.

The spherical coefficient uses the actual intertwining identity R_nu Pi_nu=Pi_-nu R_nu and R_nu f0=f0; this proves its1-nu exponent, distinct from the compact action's1+nu. Compactness gives family/Fell convergence asnu→1. Weak containment belongs to the single direct sum over a cofinal sequence, not each fixed representation. The two batch4 failure consumers use that sum with almost invariant f0 vectors and no invariant coordinates; their original quantitative/no-Kazhdan-pair claims remain.

One focused review of these exact revised interfaces is completed before current readiness refresh. No additional broad source/classification audit, citation exception or pair is introduced. Exact source/full passages, correction decisions, actual dependency maps, focused checks and current hashes are recorded in `sl2-complementary-interface-resolution.md/json`. Native batch5 remains untouched while writing; its23currently visible affected subjects are handed to root for reconciliation on stable inputs. This record is scaffold authoring readiness, not item acceptance.

The one focused review also corrected the precise smooth-domain prerequisites: P=MAN contains−I and is all upper triangular, while AN is its positive-diagonal identity component; ANK is unique and smooth, whereas MAN×K has the M ambiguity removed by parity. The compact inverse/action now uses canonical ANK (with an explicit lower-row formula), and its homogeneous space is P\G. The definition's stale algebraic-only strategy sentence is reconciled with its ambient smooth globalization. These are the single local interface correction, without another source/proof audit. They expand final affected readiness to all20batch3subjects plus2batch4consumers, and the future beta5map to23subjects.
