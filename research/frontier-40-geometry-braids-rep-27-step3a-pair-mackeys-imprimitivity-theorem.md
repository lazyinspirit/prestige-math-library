# Step 3a dispatch report — `mackeys-imprimitivity-theorem`

- Run: `frontier-40-geometry-braids-rep-27` (batch 3, orders 510.077/510.078, `representation-theory`).
- Pair: A `mackeys-imprimitivity-theorem` (27 items) / B
  `mackeys-imprimitivity-theorem-examples` (4 items); B `requires` is A only.
- Role: alpha scope review of this pair only. No scaffold, item, plan, page,
  manifest or owner record was edited; this report and the `record-scope`
  receipt are the only outputs.
- **Decision: `sufficient`** for the promised subject. Two confirmed
  prerequisite gaps and one uncertainty are recorded in §4 for the owner /
  Step 3b author; none of them omits a design-promised topic, so they are
  recorded as unmet-prerequisite findings rather than as an insufficient scope.

## 1. Inputs read

| Artifact | Use |
|---|---|
| `research/frontier-40-geometry-braids-rep-27-batch-3.pages.json` | Full text of both pages: all 31 items (27 A + 4 B), statements, strategies, deps, dependency levels, `requires` (A: the four published pages below; B: A only), companion links |
| `...-batch-3.coverage.json`, `...-batch-3.notes.md` | 9 source rows / 62 harvested results; disposition table; scaffolder's construction and repair record; drop of the Colojoară–Gheondea source |
| `...-batch-3.cross-batch-dependencies.json` and `...-cross-batch-dependencies.json` | No batch-3 edge: 0 items, 0 pages of this pair are touched by run-level cross-batch dependencies |
| `research/plan-representation-theory-groups-track.md` §RG-24 (L1736–1777), crosswalk L2482–2486, deferral L2582, consumer rows L2731/L2735, §15.6 item 3 | Binding prose design: 10 A rows + 4 B rows, hard proof plan, H=G / H={e} boundary clauses, nontransitive-orbit decomposition deferred to RG-26 |
| `research/plan-functional-analysis-track.md` §14.14 L3607–3658 | FA-20's consumer note: its only direct consumers are RG-24 `mackeys-imprimitivity-theorem` and RG-26; published impact zero |
| `research/plan-spec.json` orders 510.077/510.078 | Page fields (kind, category, companion, `requires`) match the manifest; `items` intentionally empty at page level |
| `...-scope-ledger.json`, `...-owner-authoring-direction.md`, `...-planning-notes.md` | Both pages owed; owner preserves the complete promised scope and allows local helpers; no pair-specific owner amendment exists |
| `...-alpha-step1-drift.md` (RG-24 section) | Step-1 verdict `no-drift`; measurable-selection / representative-independence recorded as authoring proof obligations, not absent page prerequisites |
| `...-owner-mackey-spectral/review.json`, `.../scoped-checks.json`, `.../source-reading.json`, `.../sunder-4-read.txt`, `.../mackey-5-read.txt`, `.../loomis-34-read.txt`, `.../bekka-affine-read.txt` | Repair-owner evidence: 31/31 items, 107 external published direct suppliers, max level 11, 5 new local helpers, the three flagged items, exact source-reading ranges, and the honest note that Mackey/Sunder are incomplete at the measurable step |
| `items/*.md` spot reads | PVM definition page, unbounded-self-adjoint/Stone page, 1-D momentum example, n-dimensional multiplier lemma, position-operator example, induced-representation page items |
| `...-url-liveness.json` plus four fresh `curl -sIL` probes | Sunder notes, arXiv:2402.15737, the Internet-Archive Mackey scan and Loomis all answer 200 today; coverage records 8/9 fetch-verified, 9/9 resolved, 1 documented drop |

## 2. Design ∶ scaffold comparison (scope only)

All 14 commissioned RG-24 rows are present with the design's ids and kinds.

| design row | manifest item |
|---|---|
| system of imprimitivity (def) | `def-system-of-imprimitivity` |
| transitive system (def) | `def-transitive-system-of-imprimitivity` |
| canonical system from induction (lem) | `lem-induced-representations-carry-a-canonical-system-of-imprimitivity` |
| transformation-algebra representation (lem) | `lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra` |
| spectral multiplicity model (lem) | `lem-spectral-measure-multiplicity-model-for-a-transitive-system` |
| stabilizer unitarity (lem) | `lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary` |
| reconstruction map (lem) | `lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining` |
| imprimitivity theorem (thm) | `thm-mackey-imprimitivity-theorem` |
| uniqueness (thm) | `thm-uniqueness-in-mackey-imprimitivity` |
| little-group corollary (cor) | `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup` |
| B: regular ℝⁿ model | `ex-the-regular-position-momentum-imprimitivity-system` |
| B: finite transitive model | `ex-imprimitivity-for-a-finite-transitive-g-set` |
| B: real ax+b little groups | `ex-little-groups-for-the-real-ax-plus-b-group` |
| B: transitivity is essential (cex) | `cex-a-nontransitive-system-is-not-classified-by-one-stabilizer` |

Seventeen run-local proof suppliers (12 original + 5 added by the repair owner)
carry the design's stated reconstruction joints; the owner-authoring direction
explicitly permits required local helpers. No commissioned claim was dropped:
the batch notes and the manifest retain the full theorem, the uniqueness
clause, the abelian-normal corollary and every example. Page fields match
`plan-spec.json` (order, title, kind, category, companion); the A page has 27
items, far below the cap, and the B page is a dependency leaf.

Recorded corrections are scope-preserving and visible in the statements: the
transformation-algebra convention `f₁(h,x)f₂(h⁻¹g,h⁻¹x)` with its continuous
LCH action hypothesis; the finite example's inducing fibre dimension
`dim(ℋ)/|X|`; the affine example's one vs. two non-zero dual orbits for
`Aff(ℝ)` vs. `Aff(ℝ)₀`; and the explicit choice (`Assume AC`) interfaces. The
only wording-level deviation from a design row is that
`cex-a-nontransitive-system-is-not-classified-by-one-stabilizer` is an explicit
ℤ/2 three-point system rather than the source's disjoint-orbit system; the
design's announced role ("shows transitivity is essential to the one-subgroup
theorem") is exactly served, and its proof is choice-free. No promised subject
is missing.

Design boundary confirmed against the plan: the theorem is the transitive
case for second-countable LCH `G`, closed `H`, separable Hilbert spaces; the
canonical-system lemma contains the `H=G` (one point) and `H={e}`
multiplication/translation clauses; arbitrary nontransitive orbit
decompositions are deferred to RG-26 by plan L2582, and the B counterexample
marks that boundary rather than omitting it.

## 3. Source coverage, including the declined rows

Harvest: 62 rows (A 42: 16 `included`, 20 `inline`, 6 `out-of-scope`; B 20: 7
`included`, 8 `inline`, 5 `out-of-scope`). The `coverage-checklist` warnings
"16/42" and "7/20 harvested results scaffolded" count only `included` rows; as
Alpha I confirm the remaining rows are deliberate declines, each with a
reason, and I agree with them:

- **Stone–von Neumann application / Heisenberg relations** (Mackey §4): not in
  RG-24's design; the unbounded Heisenberg machinery belongs to the later
  group-C\* / SL₂ track. The B example cites the position–momentum form only
  as motivation.
- **Projective (multiplier) representations, non-regular orbit theory**
  (Sunder §5): the pair is commissioned for ordinary unitary systems; the
  non-regular decomposition is RG-26's.
- **Misra §1 / Theorems 2.5 (commuting tuples of homogeneous normal
  operators)**: the pair needs only the transitive one-orbit case.
- **Bekka–de la Harpe Ch. 1 §§1.A–1.C foundations** (unitary representations,
  Schur, positive type, induction): already published on the RG-19/RG-20/RG-23
  pages, which this pair requires; rebuilding them would duplicate published
  content.
- **Bekka–de la Harpe Ch. 1 §1.F / Ch. 8 (measurable fields, factors, type I)**:
  the measurable-field/direct-integral interface is the published FA pair this
  pair requires; factor/type-I theory is RG-26.
- **Bekka–de la Harpe Ch. 3 (Heisenberg, Baumslag–Solitar, GLₙ examples)**: not
  part of the pair's promised examples; only the `Aff(ℝ)` classification is
  commissioned, and it is present.
- **Mackey §3 finite-group ancestry**: the finite model is built from the
  published finite-group induction page and the B example; the source only
  recalls the definition's origin.

The `inline` rows are genuinely folded into listed proofs (e.g. Sunder Prop.
2.4 into the reconstruction lemma, Sunder Thm 3.7 uniqueness into the
multiplicity-uniqueness lemma, Misra Thm 4.5's multiplier identity into the
cocycle-field lemma, Loomis §§34B–34C into the L¹-character lemma). Source
substitution: the design's Colojoară–Gheondea Ch. 4 §5 was not obtainable
(documented drop with bounded attempts); the theorem statements and canonical
models rest on the complete Mackey 1949 article, Sunder's 22-page notes,
Misra–Narayanan–Varughese and Bekka–de la Harpe, plus Loomis §34 for the L¹
character input. I re-probed all four cited URLs today: 200 OK each. The
repair owner's honest note stands: Mackey and Sunder are incomplete at the
measurable step, so the local Haar/Fubini argument, not a citation, is the
closure route.

## 4. Prerequisite audit and unmet-prerequisite findings

Mechanical audit (my script against disk, not the scaffolder's report):

- Direct deps of the 31 items: 134 distinct = 107 published + 27 in-pair
  scaffold, 0 unresolved.
- Transitive closure of the whole pair: 1687 ids = 31 scaffold items + 1656
  published items, and every one of the 1656 has frontmatter
  `status: published`; 0 deps outside batch 3 inside the run; 0 non-published
  published-tree deps; 0 `proved_here: false` / unproved deps.
- The four `requires` pages are published on disk:
  `unitary-representations-positive-type-and-gns`,
  `induced-unitary-representations-of-locally-compact-groups`,
  `spectral-measures-and-borel-functional-calculus`,
  `measurable-hilbert-fields-and-direct-integral-operators`, and the closure
  actually consumes 4 / 15 / 15 / 11 of their items respectively (counted).
  This is the FA supplier whose publication released RG-24 from the plan's
  build hold; it is now available.
- No run-level cross-batch edge touches batch 3 (checked the run edge file),
  consistent with `...-batch-3.cross-batch-dependencies.json` = `[]`.

Findings for the owner / Step 3b author. These are prerequisites absent from
both the published library and the current scaffold; they are recorded here
rather than as an insufficient-scope decision because no design-promised
subject is omitted.

1. **Confirmed gap — `countably separated` is undefined and its equivalence is
   unproved.** The statement of
   `cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup` says the
   dual action has "regular orbits in the sense of the preceding lemma
   (equivalently, the orbit space `N̂/K` is countably separated)". Required
   prerequisite: a definition of a countably separated Borel/orbit space, and
   the equivalence "regular orbit equivalence relation ⇔ countably separated
   orbit space" for Borel actions of second-countable groups on standard Borel
   spaces. Evidence of absence: `grep -rln 'countably separated' library/
   items/` returns nothing; the phrase occurs only in this scaffold statement
   (and in the future RG-26 design at
   `plan-representation-theory-groups-track.md` L1858). Recommended owner
   action: authorize a scaffold addition (definition + equivalence lemma) or
   amend the corollary to drop the parenthetical; the author cannot discharge
   it from published material alone.

2. **Confirmed gap — the n-dimensional momentum/generator identification has
   no supplier item.** `ex-the-regular-position-momentum-imprimitivity-system`
   asserts that "the generators of the one-parameter groups `t ↦ U_{te_j}`
   are the momentum operators `−i∂_j`" and that the PVM is the "joint spectral
   measure" of the position operators. Required prerequisite: for the
   translation group on `L²(ℝⁿ)`, the self-adjointness of the coordinate
   multipliers and the identification of the infinitesimal generator of
   `t ↦ U_{te_j}` with the momentum operator (with its domain). Evidence: the
   published library has only the 1-D analogue
   `ex-momentum-operator-under-the-fourier-transform` (agreement with
   `−i d/dx` on Schwartz functions, generator computed by unitary transport);
   no item states the n-dimensional identification, no item defines "joint
   spectral measure", and the example's `deps` do not declare the published
   n-dimensional ingredients that do exist
   (`lem-real-ltwo-multipliers-and-unitary-transport`,
   `thm-plancherel`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`,
   `thm-fourier-translation-modulation-dilation-and-reflection-laws`,
   `def-infinitesimal-generator-of-a-unitary-group`). Recommended action:
   declare those published suppliers and add a short intermediate lemma
   identifying the generator (or restrict the sentence to the published 1-D
   case). The ingredients are published, so this is a scaffold-dependency /
   authoring gap, not a knowledge gap.

3. **Uncertainty — two interfaces run on undeclared or undefined facts.**
   `lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups`
   concludes "in particular" that a Borel homomorphism into `U(K)` with the
   strong operator topology is strongly continuous; its strategy proves
   second countability of `U(K)` from a countable orthonormal basis, but no
   declared dep supplies the separable-Hilbert-space basis/ONB existence
   items. `lem-haar-regularization-of-transitive-unitary-cocycles` assumes
   "continuous in local convergence in measure in the strong topology of
   `U(K)`" and its strategy again uses a countable ONB and a "countable metric
   for the strong topology"; neither "local convergence in measure" nor the
   SOT metric of `U(K)` is defined anywhere in the library (0 hits) or the
   scaffold. Whether the author can proceed by inline proof from the published
   Hilbert-space basis items or needs a small added definition/metric lemma is
   unresolved; recommended action: declare the published ONB/Hilbert
   suppliers and either define the convergence notion in a helper or restate
   the hypothesis in already-defined terms.

## 5. Role in the library and non-blocking observations

- Role: the RG-24 page supplies the transitive imprimitivity theorem with
  uniqueness and the little-group corollary. Its planned consumers are
  RG-26 `direct-integral-decomposition-and-type-i-groups` and RG-28
  `sl2-r-principal-and-complementary-series`; it has zero published consumers
  and is not Phase 2 eligible. The pair consumes only the four published pages
  above.
- The planning-notes table points this pair's "design" at
  `plan-functional-analysis-track.md` L3658, which is FA-20's consumer
  paragraph, not RG-24; the drift review and the batch both bind RG-24
  (L1736–1777), and the Step 1 verdict for this pair is `no-drift`. This is a
  bookkeeping pointer nit, not a scope conflict.
- The nontransitive-orbit decomposition, the Stone–von Neumann application and
  projective multipliers remain deliberately outside the pair, consistent
  with plan L2582 and the coverage reasons; the B counterexample keeps the
  boundary explicit.

## 6. Checks I ran and the receipt

- My dep-closure / publish-status / coverage-count scripts (results in §4),
  and the grep evidence for the three findings in §4.
- Four source URL probes today: all 200 (Sunder, arXiv:2402.15737, Mackey
  Internet-Archive capture, Loomis).
- Recorded batch evidence re-verified on disk: `manifest-deps` 31 items /
  0 errors; `content-policy` 31 items / 0 errors; `coverage-checklist` 2 pages
  / 62 results / 0 errors / 2 warnings (the low-yield notices confirmed in
  §3); `source-fetch-check` 8/9 verified, 9/9 resolved; `source-backing` 19
  authored results backed.

Scope decision for the A page: `sufficient`, recorded with the three
prerequisite findings above. Owner authority is untouched: any statement
change (finding 1 parenthetical, finding 2 sentence) or inventory addition
(helper items) is the owner's decision, and the author should resolve findings
2–3 by declaring published suppliers and proving inline wherever possible.
