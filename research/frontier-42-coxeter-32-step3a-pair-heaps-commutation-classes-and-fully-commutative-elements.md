# Step 3a scope review — pair `heaps-commutation-classes-and-fully-commutative-elements`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-heaps-commutation-classes-and-fully-commutative-elements-477e41bdd44d4dbc` ·
design label CG-24.

- A page: `heaps-commutation-classes-and-fully-commutative-elements` (order 1772, batch 28, kind A).
- B page: `heaps-commutation-classes-and-fully-commutative-elements-examples` (order 1773, batch 28, kind B).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-heaps-commutation-classes-and-fully-commutative-elements.json`.
- One statement-level defect in A5(2) is flagged with exact evidence in §5 for owner/Step 3b
  correction; it is a wording defect inside the intended claim, not a scope omission.

## Inputs read

`research/frontier-42-coxeter-32-step3a-pair-heaps-commutation-classes-and-fully-commutative-elements-477e41bdd44d4dbc.task.md`;
`research/frontier-42-coxeter-32-batch-28.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`; `library/coxeter-groups/heaps-commutation-classes-and-fully-commutative-elements{,-examples}.md`;
`research/plan-coxeter-groups-track.md` §CG-24 (lines 508–523); `research/plan-spec.json`
(orders 1772/1773, requires); `research/coxeter-scaffold/pages.json`, `inventory.json`
(CG-24), `independent-audit.json` (CG-24 rows), `combinatorial-source-report.md` §C5;
`research/frontier-42-coxeter-32-owner-authoring-direction.md`;
`research/frontier-42-coxeter-32-owner-scope.json`;
`research/frontier-42-coxeter-32-scope-ledger.json`; `research/frontier-42-coxeter-32-alpha-step1-drift.md`
§`heaps-commutation-classes-and-fully-commutative-elements` (VERDICT: no-drift);
the current statements of every in-run supplier clause used by the pair (batch 2
`def-hh-coxeter-matrix-word-group-and-length`, `thm-hh-matsumoto-reduced-word-theorem`;
batch 23 `def-cg-left-right-weak-order-and-descents`,
`lem-cg-weak-order-prefix-property-and-left-translation`,
`lem-cg-weak-order-is-a-graded-partial-order`); the published items used
(`def-partial-order`, `def-chain`, `def-maximal-element`, `def-graded-poset-and-rank`,
`def-lattice-distributive-lattice-and-order-ideal`,
`lem-order-ideals-form-a-distributive-lattice`); and the four unique full-text sources
(re-downloaded and re-read as recorded in §3).

## 1. Prose design versus scaffold (A page)

The design (plan §CG-24 and the native prose page) names four ordered supplier contracts in
prerequisite order; the scaffold keeps all four ids, kinds, order and statement content, and
inserts two local items whose content the design itself already names as proof steps.

| Design contract (plan §CG-24 and native prose) | Scaffolded item(s) | Coverage |
|---|---|---|
| `def-cg-labeled-word-heap-and-fully-commutative-element` — heap of a word on positions, transitive closure of `i<j` with equal/noncommuting labels; labeled isomorphism, linear extensions, commutation classes, fully commutative elements; abstentions recorded | same id (1)–(7): words/reduced words, heap, labeled heaps up to isomorphism, linear extensions `L(P_s,s)`, commutation classes `C(s)`, fully commutative elements, explicit abstentions | complete |
| `thm-cg-heaps-classify-commutation-classes` — adjacent-incomparable-swap connectivity; swaps = commuting letters; heaps classify commutation classes preserving multiplicities and equal-label order; linear extension by removing minimal positions; convex chain made contiguous by contracting to one vertex; same-label covers made adjacent | same id (1) `L(P_s,s)=C(s)` for every word, (2) multiplicities/injectivity, (3) labeled heaps a complete invariant (bijection with commutation classes), (4) heaps of reduced words and well-definedness of `P_w`; local `lem-cg-finite-poset-linear-extensions-and-connectivity` (existence, prescribed initial ideals, adjacent-swap connectivity) and `lem-cg-convex-chains-consecutive-in-a-linear-extension` (convex chain/covering pair contiguous in some linear extension) | complete |
| `thm-cg-fully-commutative-forbidden-chain-criterion` — Matsumoto gives FC iff no reduced word contains a full braid factor `m_{st}≥3`; heap criterion excludes convex alternating `s,t` chains of length `m_{st}` and covering equal labels; reducedness proved by the Tits deletion route, not assumed | same id (1) braid-factor criterion, (2) heap criterion, (3) reformulation with reducedness a consequence, (4) explicit `m=∞` caveat | complete in content; clause (2) wording defect flagged in §5 |
| `thm-cg-fully-commutative-weak-intervals-are-distributive` — for FC `w` the lower right weak interval is the order-ideal lattice of its heap; prefixes give ideals, every ideal extends to a linear extension; ideal determines its element with an explicit inverse; inclusion gives the order; meet/join are intersection/union; no Bruhat-interval identification | same id (1) ideal `I(x)` of an interval element with well-definedness, (2) order isomorphism onto `J(P)`, (3) finite distributive lattice with `I(x∧y)=I(x)∩I(y)`, `I(x∨y)=I(x)∪I(y)`, (4) caveats excluding Bruhat intervals and non-FC elements | complete |

The two local additions are prerequisite completion, not scope change: both are finite
order-theory lemmas stated in the design's own proof route ("First prove finite
precedence relations have a linear extension by removing minimal positions. A convex chain
can be made contiguous by contracting it to one vertex, proving acyclicity and expanding a
linear extension; same-label covers can likewise be made adjacent."). The richest designed
form is kept: A4 is stated for arbitrary words, A5(2) states the equivalence with reducedness
as a conclusion, and A6 constructs the lattice structure from `J(P)` instead of assuming it.

Divergences from the pre-run preparation metadata are deliberate and recorded in the batch
note (the design controls): `coxeter-scaffold/inventory.json` and `independent-audit.json`
listed `thm-cg-weak-order-meet-semilattice-and-finite-lattice`,
`thm-hh-parabolic-minimal-representatives-and-length-additivity` and
`lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` for all four contracts; the
scaffold instead routes through the in-run weak-order prefix/gradedness lemmas and Matsumoto,
and never uses the shelling/Möbius lemma. I verified the substituted suppliers state the
needed clauses (prefix property (2), graded covers (2), finiteness (3), Matsumoto (1)–(3)),
and that no item of the pair consumes any clause of the dropped preparation suppliers. The
page `requires` list is design-fixed and not scaffold-editable by this role; the
one-page-without-consumer observation (`finite-lattice-projections-and-coxeter-chain-labels`)
is relayed as a plan-level note in §7.

## 2. B companion versus design

Design B task: "Build heaps of 132 and 121 in type A2/A3, exhibit two linear extensions in
one commutation class, and a convex alternating chain causing failure. Show distributive weak
intervals for a fully commutative element and contrasting nondistributive intervals." The
native B prose repeats this and adds that the companion is a dependency leaf.

| Design B component | B item | Coverage |
|---|---|---|
| heap of `132` in type `A_3` | `ex-cg-heap-of-one-three-two-in-a3` (V-shaped heap, two linear extensions, labels/covers, five order ideals) | complete |
| heap of `121` in type `A_2` | `ex-cg-heap-of-one-two-one-in-a2-and-long-braid` (chain heap, convex alternating chain, failure of full commutativity, two commutation classes) | complete |
| two linear extensions in one commutation class | B1(3) and B2(3) (linear extensions = reduced words of the element) | complete |
| convex alternating chain causing failure | B2(2)–(3), with reducedness from Matsumoto's dihedral clause | complete |
| distributive weak intervals for an FC element | `ex-cg-distributive-weak-intervals-of-fully-commutative-elements` (Boolean 4-element and 5-element intervals, meets/joins from ideals) | complete |
| contrasting nondistributive intervals | `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element` (pentagon in the `A_2` weak order, direct distributive-identity failure; explicitly does not claim the converse) | complete |

Dependency-leaf check: no page's `requires` list and no item outside the pair references any
of the four B items, and the only library mention of the pair outside its own two page files
is the `coxeter-groups` pathway listing. The B items depend only on the A page and on
published/scaffolded earlier suppliers.

The source report's §C5 breadth suggestions (type-`A` FC ⇔ 321-avoiding, Catalan/Dyck
enumeration, Temperley–Lieb algebra basis) are not among the four design contracts, the B
prose task, or the plan-spec item lists; the coverage file likewise disposes Stembridge
§§3–6 (classification) as out of scope, and the TL basis belongs to a separate Hopf/Hecke
supplier. I record this as an owner-level plan boundary, not an omission of a contracted
result (see §7).

## 3. Source coverage

`batch-28.coverage.json`: the A page carries four fetch-verified full-text sources
(Stembridge `FC.pdf`; Nadeau arXiv:1511.08788; Krattenthaler's heaps appendix; Cartier–Foata
reedition) and the B page three (Stembridge, Nadeau, Krattenthaler); 34 harvested results are
dispositioned with 0 checklist errors/warnings, and 7/7 sources re-fetch-verify in check mode.
I independently re-downloaded all four unique PDFs and compared size and `sha256_16` with the
recorded stamps — all four match exactly: Stembridge `207158 / a8bfbb8d13303e88`, Nadeau
`517604 / 9e98b5cb1e8a10d9`, Krattenthaler `146716 / d08eb4acb2a5fa8a`, Cartier–Foata
`666616 / 19996a8b31579bba`.

Targeted source re-reads (my own reading, not the coverage file's):

- Stembridge Prop. 1.1 (braid-factor criterion) and Prop. 1.2 for an *arbitrary* word `s∈S*`
  ("`L(P_s,s)` is the commutativity class of `s`", PDF pp. 3–5) — exactly A5(1) and A4(1).
- Stembridge Lemma 2.1 (for a partial order of `[l]` with `R(w)=L(P,s)`, the lower interval is
  isomorphic to `J(P)`, PDF p. 7) and Theorem 2.2 (five equivalent conditions, PDF p. 8) —
  the source of A6; the `(b)⇒(a)` converse is a separately recorded disposition.
- Stembridge Prop. 2.3 (PDF pp. 8–9): "the heap `P` of a word `s∈S*` is the heap of some fully
  commutative `w∈W` if and only if (a) … and (b) …" — the conjunction reading is the source
  basis for the §5 flag.
- Nadeau Def. 2.3, Lemma 2.4, Def. 2.5 with the fundamental bijection, properties (h1)–(h2)
  and Prop. 2.6 (`ℓ(w)=|Heap(w)|`, reduced expressions ↔ linear extensions, PDF pp. 5–6) —
  independent corroboration of A1/A4/A5; (h1) and (h2) are again stated as a conjunction.
- Krattenthaler Def. 2.2 and §3 (words read from linear extensions; heaps = word classes modulo
  commuting interchanges, PDF pp. 3–5) — the source of the heap formalism and of A4(1)'s
  converse reading.

Every out-of-scope disposition in the coverage file is genuinely outside the contracted
subject: Stembridge Prop. 1.3/1.4 and the `(b)⇒(a)` converse (only needed for the unclaimed
converse), Stembridge §§3–6 (maximal quotients, FC-finite classification, Bruhat
applications), Nadeau Prop. 2.7 and §§3–4 (descent characterization, automata/rationality),
Krattenthaler §§4–5 (heap generating functions, polyominoes), Cartier–Foata's V-decomposition
and Chapters 2–6 (Möbius function, flows, rearrangements). No contracted claim depends on a
declined result.

## 4. Prerequisite availability

- Page requirements: all four are available — `coxeter-presentations-exchange-and-reduced-word-theorems`
  (batch 2, in run), `finite-lattice-projections-and-coxeter-chain-labels` (batch 5, in run),
  `weak-order-inversions-and-lattice-operations` (batch 23, in run), and
  `chains-antichains-sperner-and-dilworth` (published library page; it supplies
  `def-graded-poset-and-rank`, `def-lattice-distributive-lattice-and-order-ideal` and
  `lem-order-ideals-form-a-distributive-lattice`, all consumed by A6). Three of the four are
  consumed by the pair's proofs; only `finite-lattice-projections-and-coxeter-chain-labels`
  has no consumer clause (§7 note 1).
- Item dependencies: all declared `deps`/`justified_by` of the ten items resolve to published
  items or to in-run scaffolds of batches 2, 23 and (within batch 28) strictly lower
  dependency levels 0–14; no edge points at a later batch or at another run's page. A strict
  closure scan over the current manifests plus `items/` (edges = `deps` ∪ `justified_by`)
  traverses 746 distinct nodes and finds **zero** nodes absent from both the published library
  and the current scaffold; including `forward_refs` the 1557-node closure also has zero such
  nodes. No node is homed only on a B/examples page (SCHEMA rule), and none requires a
  plan-spec-only item.
- Supplier clauses consumed were checked in their current statements:
  `def-hh-coxeter-matrix-word-group-and-length` (presented group, length, reduced
  expressions), `thm-hh-matsumoto-reduced-word-theorem` (1) braid connectivity of reduced
  words, (2) M-reducedness, (3) dihedral reduced alternating words (used by B2/B4);
  `def-cg-left-right-weak-order-and-descents` (weak orders, covers, intervals),
  `lem-cg-weak-order-prefix-property-and-left-translation` (2) prefix property,
  `lem-cg-weak-order-is-a-graded-partial-order` (2) covers `v=us` with `ℓ(v)=ℓ(u)+1` and
  (3) interval finiteness/gradedness; the published poset, order-ideal and distributive-lattice
  items. All used clauses are stated by their suppliers with the hypotheses the pair's
  strategies invoke.
- **Confirmed unmet prerequisites: none.** Residual uncertainty, honestly: this is a
  statement-and-manifest-level check — the supplier pages are scaffolds whose proofs are Step
  3b work, and the pair's own item files do not exist yet. Nothing needed by the pair lies
  outside the published library plus the current scaffold.

## 5. Flagged statement-level defect (owner action recommended; not a scope omission)

**A5 `thm-cg-fully-commutative-forbidden-chain-criterion` clause (2) reads: "The following are
equivalent: (a) `P_s` contains no convex chain … alternating between distinct `u,v` with
`3≤m(u,v)<∞`; (b) `P_s` contains no covering pair `i⋖j` with `s_i=s_j`; (c) `s` is reduced and
`w` is fully commutative."** As written this asserts a three-way equivalence. The intended
and true content — used by the item's own strategy, by clause (3) ("avoids the two forbidden
configurations (a) and (b)"), by B1(2)/B2(2) ("satisfies **both** conditions of … (2)"), and by
the design ("Heap criterion excludes convex alternating s,t chains of length m_st **and**
covering equal labels") — is the conjunction: (a) and (b) together are equivalent to (c).

Exact counterexamples to the pairwise reading:

- Type `A_1` (`S={s_1}`, `m(s_1,s_1)=1`), word `s=(s_1,s_1)`: the heap is the chain `1≺2`
  with equal labels. (a) holds vacuously (no pair `u≠v` with `3≤m(u,v)<∞`), (b) fails
  (`1⋖2` carries equal labels), and (c) fails (`s_1s_1=1`, so `s` is not reduced). Hence
  (a) does not imply (b) or (c).
- Type `A_2` (`m(s_1,s_2)=3`), word `s=(s_1,s_2,s_1)`: the heap is the chain `1≺2≺3` with
  covering pairs `1⋖2`, `2⋖3` of distinct labels, so (b) holds; (a) fails (the convex chain
  `1≺2≺3` has length `3=m(s_1,s_2)` with alternating labels); (c) fails (`w=s_1s_2s_1` is not
  fully commutative, as the pair's own B2 proves). Hence (b) does not imply (a) or (c).

Source basis: Stembridge Prop. 2.3 states the criterion as "if **and** only if (a) … and (b)
…" (PDF pp. 8–9, re-read); Nadeau Prop. 2.6 states it as the conjunction of (h1) and (h2)
(PDF p. 6); the batch-28 readiness record for A5 records the sufficiency argument in the form
`(a),(b)⇒(c)`.

Recommended owner action: amend clause (2)'s wording in the manifest (and hence in the Step 3b
item text) to the conjunction equivalence of (a) and (b) with (c); no change to (1), (3) or (4)
is needed. Scaffold edits are prohibited for this role, so the wording fix is left to the
owner/Step 3b. This defect does not change the pair's scope or coverage; it is flagged so it
cannot silently become a false item claim.

## 6. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-28.pages.json` | exit 0; 10 item(s), 0 normalized, 0 error(s) |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-28.coverage.json --require-destination` | exit 0; 2 page(s), 34 harvested result(s), 0 error(s), 0 warning(s) |
| source fetch | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-28.coverage.json` | 7/7 fetch-verified; 7/7 resolved, 0 documented drops |
| independent hash re-check | `curl` download of the 4 unique PDFs + `sha256sum` | 4/4 byte sizes and `sha256_16` stamps match `coverage.json` |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no batch-28 item named in any error line (sibling batches may still report their own) |
| closure scan | ad-hoc script over `batch-*.pages.json` + `items/` + `plan-spec.json` | 746 nodes (`deps`∪`justified_by`) and 1557 nodes (with `forward_refs`) resolve; 0 absent from published library + current scaffold |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 page(s) owed, 64 in the manifests; no scope drift |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed and deduplicated; batch-28's 16 edge rows are present in the ledger |
| plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | exit 1: 302 `[frontier-selection]` errors ("current manifest item … is absent from the selected plan pages") and 112 warnings, incl. 4 `[redundant-prereq]` rows naming this A page. Stage-expected: `plan-spec.json` pages still have `items: []`; `tools/splice-plan.mjs` copies each batch's item ids into the plan at Step 4, and the 3a-scope stage gates do not include this validator |

## 7. Non-blocking notes (documentation, no scope action)

1. The design-fixed `requires` list names `finite-lattice-projections-and-coxeter-chain-labels`
   (batch 5, in run) although no clause of that page (lattice congruences, interval
   projections, chain labels, lexicographic shelling/Möbius cancellation) is consumed by any
   item of this pair. This is a plan-level inventory observation for the owner; the page field
   is not scaffold-editable here.
2. `validate-plan --run` reports four `[redundant-prereq]` warnings for this A page (the three
   in-run requires and the published page are already reachable transitively). These are
   informative; the list is design-fixed.
3. Source report §C5 asks for breadth beyond the contracted pair (type-`A` FC ⇔ 321-avoiding,
   Catalan enumeration, Temperley–Lieb basis). None of these appears in the plan §CG-24
   contracts, the B prose task, the plan-spec or the coverage inclusions; commissioning them
   would be a plan amendment, not a repair of this pair.
4. Coexistence: published items elsewhere (`thm-dilworth-finite-posets`,
   `cor-sperner-theorem-with-equality-cases`, the order-ideal lattice lemma) supply the
   order-theory background; the general-Coxeter heap/FC treatment has no other home in the
   library, matching the pathway part "affine-and-combinatorial-extensions" ("heaps control
   commutation classes"). No conflict or scope-reduction recorded.
5. Step 1 drift: VERDICT `no-drift` for this pair; `research/frontier-42-coxeter-32-step1-blockers.json`
   names no batch-28 item. Readiness records are `ready` but are not mathematical approval.
6. This review assessed scope only; proof correctness is out of role and not asserted.

## 8. Decision

**`heaps-commutation-classes-and-fully-commutative-elements`: sufficient.** The planned
definitions (words, heaps, labeled isomorphism, linear extensions, commutation classes, full
commutativity), results (linear-extension existence/initial ideals/adjacent-swap connectivity,
convex-chain contiguity, heap classification of commutation classes with multiplicities and
the labeled-heap bijection, braid-factor and forbidden-configuration criteria with reducedness
as a conclusion, and the order-ideal isomorphism for lower intervals with meet/join as
intersection/union and explicit Bruhat/non-FC caveats) and examples (four companion items
covering every design B task, as a dependency leaf) adequately cover the intended subject of
CG-24. No omitted contracted topic was found, no enrichment or merger is recommended, and no
unmet prerequisite was confirmed (746-node strict closure fully inside the published library
plus the current scaffold). One statement-level wording defect in A5(2) is flagged with exact
counterexamples and source evidence for owner/Step 3b correction (§5); it does not alter the
scope verdict. Owner action for scope: none required; proceed.
