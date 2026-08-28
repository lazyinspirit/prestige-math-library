# frontier-22 · Beta-9 · batch notes — `cographs-perfect-patterns-and-pure-pairs`

Run `frontier-22`, batch `9`, one A/B pair, category `combinatorics`.
Author: Beta-9. Session date: Friday, August 28, 2026.

Artifacts owned by this batch:
`research/frontier-22-batch-9.pages.json`,
`research/frontier-22-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and shape

Design locations opened:

- [research/plan-combinatorics-and-categories.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-combinatorics-and-categories.md:3906)
- [research/plan-combinatorics-and-categories.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-combinatorics-and-categories.md:3939)

The controlling design is section `16.2` row `413/414` together with the
section `16.3` split-page note that the `C_5` and star-expansion proofs are
kept separate so the cograph / perfect-pattern / pure-pair machinery stays on
its own page below the review ceiling.

Shape after scaffolding:

- `cographs-perfect-patterns-and-pure-pairs` (A): **21 items**
- `cographs-perfect-patterns-and-pure-pairs-examples` (B): **5 items**

The A page stays below the 60-item split threshold, so no split is proposed.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch says to record drift and follow `research/plan-spec.json` rather
than adjudicating locally.

### Finding 1 — no order drift

The design row and `research/plan-spec.json` both place the A/B pair at
`413/414`.

### Finding 2 — no prerequisite drift

The design row and `research/plan-spec.json` both declare the same page
prerequisites:

- `modules-substitution-and-prime-graphs`
- `pure-pairs-forests-and-path-antipath-classes`

### Finding 3 — no hidden page prerequisite surfaced

The step-0 drift note for this page also reports no missing prerequisite page
beyond that declared closure:
[research/frontier-22-alpha-step0-drift.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-22-alpha-step0-drift.md:45).

---

## 3. Source choices and coverage boundaries

Only the A page needs a harvest ledger.

Sources actually read and recorded:

1. Tero Harju, *Lecture Notes on Combinatorial Structures in Graph Theory*:
   `https://users.utu.fi/harju/Structures/Structure2018.pdf`
2. Maria Chudnovsky, *The Erdős-Hajnal Conjecture—A Survey*:
   `https://arxiv.org/pdf/1606.08827`
3. Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl,
   *Erdős-Hajnal for graphs with no 5-hole*:
   `https://arxiv.org/html/2102.04994v1`

How these sources are used:

- Harju is the required full lecture-note treatment with a harvestable table of
  contents. I used it for the cograph recursion via Exercise `5.2`, the
  cograph characterization via Exercise `5.3`, and the prime-graph `P_4`
  witness via Theorem `5.1`.
- Chudnovsky's survey is the clean secondary treatment for perfect graphs:
  definition, the square-root clique/stable-set theorem, the perfect-induced
  subgraph restatement, and the Seinsche theorem row already published earlier.
- The `5-hole` paper is the eligible primary treatment for this page's later
  machinery: `\kappa(G)`, `\tau`-criticality, the cograph-pattern additive
  `\kappa` lemma, the no-wide-cograph-pattern obstruction, and the
  `\mathcal B`-rainbow definition.

Coverage boundaries I kept explicit:

- Harju's general `\Delta`-graph clan statements in `5.1`, `Lemma 5.1`,
  `Lemma 5.2`, `Remark 5.1`, and `Exercise 5.1` stay **out of scope** here.
  They depend on the strong-module / special-quotient language that the current
  plan still does not assign to a graph-theory page.
- Chudnovsky's survey `Theorem 1.2` (the Strong Perfect Graph Theorem) stays
  **out of scope**. This page only needs the definition of perfect graph and
  the elementary `|V|\le\alpha\omega` consequence.
- In the `5-hole` paper, results `6.1`, `6.2`, and `6.3` stay **deferred**
  to `star-expansions-and-erdos-hajnal`. This page takes only the
  `\mathcal B`-rainbow definition from that opening.

---

## 4. Local scaffold decisions

### Decision 1 — the cograph definition uses the complete-connection route

Harju Exercise `5.2` gives two equivalent recursive descriptions. I chose the
`singleton + disjoint union + complete connection` form as the working
definition, because it lets the page prove `cographs are perfect` directly from
closure lemmas without importing the weak perfect graph theorem.

### Decision 2 — the perfect-graph block is deliberately elementary

The page defines perfect graphs, proves `|V(G)|\le\kappa(G)` for a perfect
graph, derives the square-root clique/stable-set bound, and then uses those
facts in the later Erdős-Hajnal reformulations and perfect-pattern theorem.
It does **not** open either the weak or the strong perfect graph theorem.

### Decision 3 — published prerequisites are reused rather than duplicated

The scaffold cites the already-published items for:

- the Seinsche `P_4` dichotomy,
- the pattern graph of a pure blockade, and
- the clique / stable-set / chromatic-number inequality.

The two finite four-vertex witness checks stay inline on the A page instead:
`thm-cographs-are-exactly-the-p-four-free-graphs` checks directly that `P_4`
and `\overline{P_4}` are connected, and
`thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`
uses the four-vertex connected-anticonnected degree count inline rather than a
foreign B-page example.

So page `413` adds only the missing cograph, perfect-pattern, `\kappa`, and
`\tau`-critical glue, while staying inside the no-foreign-B-item rule.

### Decision 4 — `\mathcal B`-rainbow lives here only as vocabulary

The design row names `B`-rainbow copies, but the forest rainbow theorem and the
star-expansion consequences belong later. I therefore scaffolded the rainbow
definition on `413` and left theorems `6.1`-`6.3` to page `417`.

---

## 5. Known limits and caution points

- `lem-induced-subgraphs-of-cographs-are-cographs` and
  `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical` are honest
  on-page closure lemmas. They are source-grounded by the surrounding routes
  but are not themselves harvested theorem headings.
- The strong-module / special-quotient side of Harju's section 5 still has no
  page owner. If the cograph page is revisited later, that theory should be
  placed by plan change rather than smuggled into this page.
- The shell-side source tools cannot resolve any of the three URLs in this
  sandbox, even though all three were successfully opened and read through the
  web reader on Friday, August 28, 2026. So the remaining source blocker here
  is mechanical DNS access from the shell, not an identified dead source.

---

## 6. Validator results

### Actual results run on Friday, August 28, 2026

- `node -e 'JSON.parse(...)'` on `research/frontier-22-batch-9.pages.json`
  -> `pages-json: ok`

- `node -e 'JSON.parse(...)'` on `research/frontier-22-batch-9.coverage.json`
  -> `coverage-json: ok`

- `node tools/coverage-checklist.mjs research/frontier-22-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 26 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs research/frontier-22-batch-*.pages.json --manifest-only`
  -> `content-policy: 192 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with warnings only**. The validator ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.`
  The warning stream was the usual run-wide `redundant-prereq` noise, not a
  batch-9 failure.

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-9.coverage.json --stamp`
  -> **failed mechanically in this sandbox**:
  `EAI_AGAIN` on
  `https://users.utu.fi/harju/Structures/Structure2018.pdf`,
  `https://arxiv.org/pdf/1606.08827`,
  and `https://arxiv.org/html/2102.04994v1`.
  Result line:
  `source-fetch-check: 0/3 source(s) fetch-verified (0 newly stamped), 3 FAILED`

- `timeout 30s node tools/url-sweep.mjs --coverage research/frontier-22-batch-9.coverage.json --out /tmp/frontier-22-batch-9-url-liveness.json --recover --fail-on-dead`
  -> **failed mechanically in the same way**:
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-22-batch-9-url-liveness.json`
  with each row reporting `curl: (6) Could not resolve host`.
  Because the web reader opened these exact URLs on the same day, I am not
  treating this as evidence that the sources are dead; it is a shell-side DNS
  blocker that a later source-scout pass will need to work around.

---

## Step-3 fix pass

- `C9-1` — applied on current bytes; no pushback.
  Evidence: the stable review at
  [research/frontier-22-alpha-c-step3-scaffold-review.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-22-alpha-c-step3-scaffold-review.md:104)
  identifies two forbidden foreign B-page dependencies. The live A-page
  manifest keeps both finite witness checks inline instead:
  `thm-cographs-are-exactly-the-p-four-free-graphs` now carries the `P_4` /
  `\overline{P_4}` connectivity check in its strategy, and
  `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`
  now carries the four-vertex connected-anticonnected degree argument inline.
  A direct scan of `research/frontier-22-batch-9.pages.json` shows no remaining
  dependency on `ex-p-four-is-connected-and-anticonnected` or
  `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices`.
  Source evidence re-read on Friday, August 28, 2026: Harju §5.2-§5.3
  (`Theorem 5.1`, `Exercise 5.3`, `Example 5.2`), Chudnovsky survey
  (`Theorem 1.3`, `Conjecture 1.2`, `Theorem 2.1`), and Chudnovsky-Scott-
  Seymour-Spirkl §5-§6 (`5.1`, `5.2`, `6.1`-`6.3` and the `\mathcal B`-
  rainbow definition).
  Changed scaffold record: updated
  [research/frontier-22-batch-9.notes.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-22-batch-9.notes.md:122)
  so Decision `3` matches the repaired A-page dependency boundary, and updated
  `research/frontier-22-batch-9.coverage.json` so the primary-source locator
  for `https://arxiv.org/html/2102.04994v1` matches the live HTML lines
  re-read in this fix pass.

- Validation on current bytes:
  `node tools/coverage-checklist.mjs research/frontier-22-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 26 harvested result(s), 0 error(s), 0 warning(s)`

- Validation on current bytes:
  `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-*.pages.json`
  -> `content-policy: 425 scoped item(s), 0 error(s), 0 warning(s)`

- Validation on current bytes:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.`
  The warning stream remained the usual run-wide `redundant-prereq` noise only.

## Step-5 authoring

Date: Friday, August 28, 2026.

- Authored page files:
  `library/combinatorics/cographs-perfect-patterns-and-pure-pairs.md` and
  `library/combinatorics/cographs-perfect-patterns-and-pure-pairs-examples.md`.

- Authored item ids on the A page:
  `def-complete-connection-of-two-disjoint-graphs`,
  `def-cograph-by-singletons-disjoint-union-and-complete-connection`,
  `lem-induced-subgraphs-of-cographs-are-cographs`,
  `thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement`,
  `thm-cographs-are-exactly-the-p-four-free-graphs`,
  `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`,
  `def-perfect-graph`,
  `def-kappa-of-a-graph`,
  `lem-disjoint-union-of-perfect-graphs-is-perfect`,
  `lem-complete-connection-of-perfect-graphs-is-perfect`,
  `thm-cographs-are-perfect`,
  `thm-perfect-graphs-satisfy-kappa-at-least-their-order`,
  `cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order`,
  `rem-the-perfect-induced-subgraph-formulation-of-the-erdos-hajnal-conjecture`,
  `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`,
  `thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades`,
  `def-tau-critical-graph`,
  `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical`,
  `thm-pure-blockades-with-cograph-patterns-have-additive-kappa`,
  `thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades`,
  `def-blockade-rainbow-induced-copy`.

- Authored item ids on the B page:
  `ex-the-four-cycle-is-a-cograph`,
  `ex-the-five-vertex-path-is-perfect-but-not-a-cograph`,
  `ex-a-two-block-pure-blockade-has-additive-kappa`,
  `ex-a-pure-blockade-with-perfect-but-not-cograph-pattern`,
  `ex-a-blockade-rainbow-copy-of-the-four-vertex-path`.

- Created proof-contract artifact:
  `research/frontier-22-batch-9.proof-contracts.json`.

- Provenance rationale:
  direct source-heading items and terminology items stay `literature-derived`;
  the local closure lemmas, reformulation glue, and concrete finite examples are
  tagged `ai-altered` on the statement side; every authored proof or
  verification is tagged `ai-generated`; definitions and the remark remain
  `not-applicable` on the proof side.

- Narrowed or corrected claims:
  no planned item was dropped or narrowed, but the scaffold strategy text for
  `ex-the-four-cycle-is-a-cograph` was false as written. `C_4` is not the
  complete connection of two disjoint edges; it is the complete connection of
  two disjoint edgeless two-vertex graphs, and the authored verification uses
  that truthful decomposition.

- Additional authoring choice:
  `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`
  was proved from the just-authored cograph characterization plus the published
  module lemma, rather than by importing Harju's small-primitive-subgraph route
  as a citation-only fact. This keeps the page inside the stated no-external-
  theorem proof contract.

- Required checks run on current bytes:
  `node tools/tsx-run.mjs tools/precheck.mts ...19 proof-bearing batch-9 items...`
  -> `19 checked, 0 failing — all clean`.
  `node tools/content-policy.mjs research/frontier-22-batch-9.pages.json`
  -> `content-policy: 26 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the standing run-wide `redundant-prereq` warnings.

- Proof-contract checks run on current bytes:
  `node tools/regen-contract-entries.mjs research/frontier-22-batch-9.proof-contracts.json ...19 ids...`
  -> `research/frontier-22-batch-9.proof-contracts.json: regenerated 19, skipped 0`.
  `node tools/proof-contract.mjs research/frontier-22-batch-9.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 19/19 item(s) checked`.
  After the first strict pass surfaced a nonfatal `shotgun-bracket` warning on
  `thm-pure-blockades-with-cograph-patterns-have-additive-kappa`, I split the
  setup of that proof across separate numbered steps, regenerated its contract
  entry, and reran the strict gate to the clean final state above.
  `node tools/citation-fidelity.mjs research/frontier-22-batch-9.proof-contracts.json --items-dir items`
  -> `96 citation(s) over 19 authored item(s)`, with no missing quotes and no
  widening candidates.

- Blockers:
  none in batch-9 authoring scope.
