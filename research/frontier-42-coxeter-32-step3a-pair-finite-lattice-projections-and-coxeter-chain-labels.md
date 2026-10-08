# Step 3a scope review — `finite-lattice-projections-and-coxeter-chain-labels`

- Run: `frontier-42-coxeter-32` (role alpha, label
  `step3a-pair-finite-lattice-projections-and-coxeter-chain-labels-d24faaffe70f488f`)
- Pair: A `finite-lattice-projections-and-coxeter-chain-labels` (order 1726,
  batch 5, `coxeter-groups`, label CG-02; 4 items) + B
  `finite-lattice-projections-and-coxeter-chain-labels-examples` (order 1727;
  3 items). B is a leaf: its `requires` is the A page only, and no item outside
  the pair depends on a B item.
- Design inputs: `research/plan-coxeter-groups-track.md` §CG-02 (L150–L161);
  `research/coxeter-scaffold/inventory.json` CG-02; the def's binding justifier
  in `research/coxeter-scaffold/definition-justifications.json`
  (`thm-cg-finite-lattice-interval-congruence-criterion`); binding owner
  direction `research/frontier-42-coxeter-32-owner-authoring-direction.md`.
- Inputs read: batch-5 manifest, Step-1 note, coverage, cross-batch input (`[]`),
  native page prose for both pages, plan-spec CG-02 entry, scope ledger, owner
  scope, the seven Step-1 readiness records, the consumer scaffolds in batches
  16 (CG-13) and 32 (CG-29), frontier gate selections, and the published
  suppliers consumed.
- **Decision: `sufficient`** (receipt:
  `research/frontier-42-coxeter-32-step3a-review-finite-lattice-projections-and-coxeter-chain-labels.json`).
  No omitted topic, result or example of the intended subject was found; no
  owner merger or enrichment is required; no unmet prerequisite is confirmed.
  Observations in §4 are Step-3b declaration details, not scope gaps.

## 1. Scope inventory and design mapping

All four planned A contracts are kept with identical ids and kinds, in the
design's proof routes; all three promised B tasks are realized as items:

| Design clause (CG-02 / inventory) | Manifest item |
|---|---|
| lattice congruence, proposed quotient operations, class endpoints; descending rooted-chain labels; (N)/(L); ordinary edge labeling | `def-cg-finite-lattice-congruence-and-interval-projections` |
| class closure, unique endpoints, classes are intervals; representative independence; quotient lattice; monotone projections | `lem-cg-lattice-quotient-descent-and-class-intervals` |
| interval partition with monotone endpoints is a congruence; necessity; quotient operation formulas | `thm-cg-finite-lattice-interval-congruence-criterion` |
| lexicographic shelling by first divergence/first reunion; signed falling-chain Möbius formula; conventions | `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` |
| criterion on a chain and a diamond | `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond` |
| interval partition with non-monotone endpoints fails the criterion | `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence` |
| rank-three chain labeling translated into order-complex facets | `ex-cg-rank-three-chain-labeling-and-order-complex-facets` |

Plan-spec agrees exactly on order, kind, category, companion and both `requires`
lists (item arrays empty). The definition is a property declaration with no
existence claim, and its `justified_by` target is the criterion item, as the
binding justifications file requires; endpoints/representative-independence are
discharged by the quotient lemma and the criterion (the definition's own text
says so). The shelling lemma carries the exact hypotheses it uses ((N) and (L)
on every rooted interval) and the rank-0/rank-1/empty-open-interval conventions
the design lists. The rank-zero/one conventions and the `(x,y)`-vs-`[x,y]` facet
conventions are present in statements.

Two design-vs-scaffold readings are consistent, not gaps:

- The design says "finite graded bounded poset" for the chain-label part; the
  scaffold states a finite graded poset, which is what the claims use
  (boundedness is never consumed; intervals supply their own bounds).
- "Coxeter" instantiations are deliberately homed in the consumers: the Bruhat
  deletion labeling is defined and proved in CG-13
  (`def-cg-deletion-chain-labels-and-shelling`,
  `lem-cg-bruhat-increasing-chain-and-local-descent-replacement`,
  `thm-cg-bruhat-deletion-label-shelling`,
  `thm-cg-bruhat-eulerian-intervals-and-mobius`), and the weak-order
  kernel/sortable application in CG-29. Both consumer scaffolds exist on this
  frontier and consume exactly the abstract clauses supplied here; the pair's
  own B example instantiates the labeling on the Boolean lattice $B_3$.

## 2. Source coverage — checked, with the residual uncertainty stated

The pair's coverage row records four complete, fetch-verified treatments:

- Björner–Brenti, *Combinatorics of Coxeter Groups* §2.7 (printed pp. 48–55)
  and Appendix A2.2–A2.4 (pp. 300–304) — deletion labeling, Lemmas 2.7.2/2.7.4,
  full proof of Theorem 2.7.5, Definition A2.4.1; fetch `sha256_16 ad1e7d9260127bb2`.
- Wachs, *Poset topology* Lecture 3 §§3.1–3.4 (printed pp. 41–66) — Definition
  3.2.1 (EL), Theorem 3.2.2, Remark 3.2.5, Definition 3.3.1 (CL, rooted
  intervals), §3.4 descents; fetch `sha256_16 c23fb90ff3cb3973`.
- Stanley, *Introduction to Hyperplane Arrangements*, Lecture 1 §1.2 and
  Lecture 4 §4.1 — Definition 4.11 (E-labeling) and the complete proof of
  Theorem 4.11 with the flag $f$-vector claim; fetch `sha256_16 d3cc5d2586e773d1`.
- Reading, *Lattice congruences of the weak order* TLC slides, slides 2–9 —
  the order-theoretic characterization and the quotient construction
  $[x]\vee[y]=[x\vee y]$, $[x]\wedge[y]=[x\wedge y]$; fetch
  `sha256_16 6edf3d06363ab085`.

37 harvested results carry per-row dispositions: one `included` result per A
item (the four contracts), further results used `inline`, the published
suppliers marked `already-published`, and the remaining rows out of scope with
recorded reasons (homotopy type/CW/PL, Cohen–Macaulayness, $k$-crowns, matroid
broken circuits, restriction/$h$-vector theory). Two results are `deferred` to
the correct homes: BB Cor. 2.7.10 and Wachs Thm. 3.3.4 to
`bruhat-interval-labels-shellings-and-mobius-functions`; the least-elements
lattice to `sortable-projections-and-finite-cambrian-lattices`. The single checker warning
is `coverage-low-yield` (4/37 scaffolded), which is the expected consequence of
keeping exactly the four design contracts and declining the same sections'
other results with reasons.

Independent spot-checks this session (honesty statement): the criterion's
classical form is confirmed by Grätzer's *The Congruences of a Finite Lattice*,
Technical Lemma 1.2 for finite lattices (interval classes + the cover condition
and its dual), and the exact text of Stanley Theorem 4.11 (an E-labeling gives
$(-1)^{\mathrm{rk}(x,y)}\mu(x,y)=\#\{\text{strictly decreasing saturated chains}\}$)
was fetched and read. Because this pair's labels are chain-dependent (rooted),
the operative source for the general statement is the CL version (Wachs Def.
3.3.1; BB Thm. 2.7.5 proof), which the coverage records as read in full. I did
not re-download the four PDFs in this session; their page-level locators rest on
the recorded `fetch_verified` stamps and the scaffolder's reading, machine
re-checked by `source-fetch-check` (4/4) and `url-sweep` (4/4 live).

## 3. Dependency, interface and mechanical checks

- All 13 direct external dependencies are published on disk and say what the
  consumers need: `def-partial-order`, `def-chain`,
  `def-lattice-distributive-lattice-and-order-ideal`,
  `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`,
  `def-finite-cardinality`, `thm-subset-of-a-finite-set`,
  `def-face-poset-and-order-complex`, `def-poset-mobius-function`,
  `lem-poset-mobius-recurrence`, `def-boolean-lattice-and-levels`,
  `thm-mobius-function-of-a-boolean-lattice`,
  `cor-mobius-inversion-for-finite-posets`.
- Every dependency's home page lies in the closure of the A page's declared
  `requires` (closure of 114 pages through the plan graph), including
  `finite-counting-and-binomial-coefficients` (home of the two finiteness
  suppliers) and `incidence-algebras-and-mobius-inversion`; the post-splice
  `undeclared-prereq` check therefore has no analogue of the open CG-05/CG-08
  finding for this pair. B requires only the A page, so no B-edge can block.
- Full upstream closure of the seven items (run manifests + plan + published
  frontmatter): 127 nodes, 0 unresolved ids, no `deferred-*` item, no item with
  `proved_here: false`. The only choice-adjacent node is
  `thm-well-ordering-principle`, reached through `thm-subset-of-a-finite-set`;
  the clauses consumed there (1–2: a subset of a finite set is finite with
  $|B|\le|A|$) are proved by induction on the ambient cardinal with no choice,
  and even the clause-4 least-element argument in the supplier is choice-free.
  The pair states no Choice hypothesis and needs none.
- Consumer interface: CG-13's five items map onto the definition clauses (2)–(4)
  and the shelling lemma (i)/(ii); CG-29's three items map onto the definition
  clause (1), the quotient lemma (ii)–(iv) and the criterion (i)–(ii), exactly
  as the consumers' statements cite them. Page-level `requires` edges into this
  pair come from orders 1748, 1750, 1754, 1772 and 1780; no item of those other
  pages depends on this pair, and no in-run consumer waits on the B page.
- Read-only mechanical checks re-run this session: `manifest-deps` 7 items /
  0 errors; `content-policy --manifest-only` 7 scoped items / 0 errors /
  0 warnings; `coverage-checklist --require-destination` 37 results / 0 errors /
  1 expected low-yield warning; `step1-decisions check` 302/302 ready with no
  work entry for this pair; all seven item ids are in
  `frontier-gate-items.json` and both pages in `frontier-gate-pages.json`;
  `plan-spec.json` and the batch manifest agree as tabled in §1.

## 4. Observations for the owner and Step 3b (non-blocking; scope unchanged)

1. **Item-level declaration nits.** The definition and criterion use
   "equivalence relation", and the B items use "partition"; both notions are
   published (`def-equivalence-relation` and `lem-equivalence-classes-partition`
   on `relations-functions-and-quotients`, which is in the A page's `requires`;
   `def-set-partition-and-block`). Neither is declared at item level. This is a
   Step-3b declaration choice, not an unmet prerequisite, since the homes are
   inside the requires closure.
2. **Batch-note wording (record only).** The Step-1 note's axiom paragraph
   phrases the clause 1–4 discussion as if it belonged to
   `thm-well-ordering-principle`; the clauses and Proof 6.1/9.1 belong to
   `thm-subset-of-a-finite-set`, and the well-ordering item is the auxiliary
   used by its clause 4. The substance (no Choice consumed; clauses 1–2
   choice-free) is correct as read today.

## 5. Uncertainty

- Step 3a certifies scope only; the seven items are proof contracts and their
  Step-3b proofs remain pending, including the CL adaptation of the flag
  $f$-vector argument in the shelling lemma's (ii). No proof-correctness claim
  is made here.
- The only scope evidence not personally re-verified in this session is the four
  sources' printed-page locators; their fetch stamps and liveness are
  machine-checked, and the two load-bearing statements were independently
  confirmed as described in §2.
- No potential published defect was found in the 13 suppliers at the clauses
  consumed, and no unresolved omission of the intended subject was found.

## 6. Decision and receipt

`sufficient` — the four A items and three B items cover every CG-02 clause and
every promised companion task; the source coverage is complete and the declines
are design-consistent; the dependency closure resolves inside the declared
requires with no unmet prerequisite and no Choice obligation. Recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32
--page finite-lattice-projections-and-coxeter-chain-labels --decision
sufficient`.
