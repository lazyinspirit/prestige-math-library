# Step 3b — pair `countability-and-uncountability` (batch 2)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-countability-and-uncountability-a3ec36e7357e7141`.
Owned A page: `countability-and-uncountability` (order 17, real-analysis, 22
items). Owned B page: `countability-and-uncountability-examples` (order 18, 12
items). Batch 2 contains only this pair, so no sibling rows exist in the shared
batch files.

## Owned IDs and open obligations (entry checkpoint)

A (all published, preserved; audit + decision owed): `def-equinumerous`,
`lem-nat-order-is-membership`, `lem-pigeonhole`, `def-countable`,
`thm-schroder-bernstein`, `lem-subset-of-countable`,
`lem-countable-iff-surjection-from-n`, `lem-finite-subsets-listable`,
`thm-n-cross-n-countable`, `thm-product-of-countable`, `def-countable-choice`,
`def-dependent-choice`, `def-choice-for-pairs-and-countable-finite-choice`,
`thm-choice-implies-dependent-implies-countable-choice`,
`thm-countable-union-of-countable`, `thm-rationals-countable`,
`thm-cantor-powerset`, `thm-r-uncountable`, `cor-interval-uncountable`,
`cor-irrationals-uncountable`, `rem-continuum-hypothesis`,
`fs-uncountable-contains-interval`.

B (all 12 scaffold-only; items, page, contracts owed): `ex-deleting-a-point-from-a-countably-infinite-set`,
`ex-power-set-of-the-naturals-is-uncountable`,
`lem-finite-real-coefficient-lists-have-at-most-degree-many-roots`,
`ex-binary-sequences-are-uncountable`, `ex-explicit-enumeration-of-the-rationals`,
`cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n`,
`cex-the-empty-set-is-not-a-surjective-image-of-n`,
`ex-cantor-diagonal-misses-every-listed-binary-sequence`,
`ex-integers-are-countably-infinite`,
`ex-real-algebraic-numbers-are-countably-infinite`,
`ex-rationals-in-an-interval`,
`ex-complement-of-a-countable-set-of-reals-is-uncountable`.

Open obligations at entry: (1) author all 12 B item files and the B page
`library/real-analysis/countability-and-uncountability-examples.md`;
(2) audit the 22 preserved published A items against the current manifest
(deps/claims/format) and record item decisions for all 34 IDs;
(3) write `research/frontier-44-special-representation-examples-28-batch-2.proof-contracts.json`
with exact citation quotes, per-step inputs, boundary dispositions;
(4) run the focused checks named by the dispatch (proof-layout, precheck,
rendercheck, content-policy, depcheck/depsource, dependency levels,
validate-plan, contract battery); (5) reconcile supplier uses and record any
escalations. Direct in-run prerequisite pair to inspect:
`roots-and-rational-powers` (published; supplies `def-finite-sum`,
`lem-finite-sum-laws`, `def-integer-power` to the algebraic-number items).

## Checkpoint log

(updated after each item; resume here)

### Level-3 B item 1: `ex-deleting-a-point-from-a-countably-infinite-set`

- **Authored** `items/ex-deleting-a-point-from-a-countably-infinite-set.md`
  (draft, `origin: pipeline`, `dependency_level: 3`, provenance
  literature-derived/ai-generated per manifest).
- **Claim/conventions.** For countably infinite $X$ and $x \in X$:
  $X \approx X \setminus \{x\}$ via the shift $\varphi_n$ (identity below $n$,
  successor above) conjugated by a bijection $e:\mathbb N \to X$; the point
  $X \setminus \{x\}$ is a proper subset; the finite contrast is pigeonhole
  claim 5; no choice.
- **Actual proof route.** $\varphi_n$ defined by Separation from
  $\mathbb N\times\mathbb N$; well-defined function $\mathbb N\to
  \mathbb N\setminus\{n\}$ (trichotomy/antisymmetry/reflexivity of the additive
  order); injective (case split, $\sigma$ injective, discreteness); surjective
  ($m \ne n$: $m<n$ identity; $n<m$ writes $m=n+j$, $j=\sigma(i)$,
  $m=\sigma(n+i)$ with $n \le n+i$); restriction $e_0$ onto
  $X\setminus\{x\}$; composite bijection; finite contrast transported from
  pigeonhole claim 5.
- **Dependencies actually used** (added to item deps beyond the scaffold list:
  `def-nat-addition`, `thm-nat-linear-order`; both out-of-run published naturals
  items, so the in-run level stays 3 and the manifest level is unchanged).
  Manifest was NOT edited for this item; the item deps are a superset of the
  manifest deps. Recheck: `item-dependency-levels` remains green.
- **Checks.** `precheck` PASS (direct), `proof-layout` 1 item / 10 steps /
  0 defects. Canonical layering adopted by hand (renumbered to 1.1–1.5, 2.1,
  2.2, 3.1, 4.1, 5.1 after the checker's layer repair).
- **Open.** Contract entry (quotes for F1–F8 sources) owed; A-item decisions
  owed.

### Level-3 B item 2: `ex-power-set-of-the-naturals-is-uncountable`

- **Authored** `items/ex-power-set-of-the-naturals-is-uncountable.md` (draft,
  `dependency_level: 3`).
- **Claim/route.** There is no surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$
  ([[thm-cantor-powerset]]), so $\mathcal{P}(\mathbb{N})$ is uncountable; the
  singleton map and a hypothetical bijection give two injections, and the
  two-sided-inverse supplier turns the bijection around for the forbidden
  onto map. Sources: Hunter §1.6 Thm 1.47 (p. 18); Lebl §0.3 Thm 0.3.34
  (pp. 19–20). Deps added beyond the scaffold list:
  `thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `repaired`/`dependency`.

### Level-3 B item 3: `lem-finite-real-coefficient-lists-have-at-most-degree-many-roots`

- **Authored** `items/lem-finite-real-coefficient-lists-have-at-most-degree-many-roots.md`
  (draft, `dependency_level: 3`, induction).
- **Claim/route.** A real coefficient list $(a_0,\dots,a_d)$ with $a_d \neq 0$
  has at most $d$ real roots; synthetic division $P=(x-r)Q$ is set up backwards
  so it also covers $r=0$ without dividing by $r$, no-zero-divisors passes the
  remaining roots to $Q$, and finite index extraction supplies the count.
  Source: Lebl §1.4 Ex 1.4.9 (p. 43), proof supplied locally, not assumed.
  Deps added: the discreteness/order and subset/difference suppliers consumed
  by the counting steps; removed one unused redundant fact.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `repaired`/`dependency`.

### Level-4 B item 4: `ex-binary-sequences-are-uncountable`

- **Authored** `items/ex-binary-sequences-are-uncountable.md` (draft,
  `dependency_level: 4`).
- **Claim/route.** $\{0,1\}^{\mathbb{N}}$ is equinumerous with
  $\mathcal{P}(\mathbb{N})$ via the characteristic-function bijection
  $S \mapsto \chi_S$ (graph by Separation, inverse by subset recovery), hence
  uncountable. Sources: Hunter §1.6 Cor 1.48 (pp. 18–19); Lebl §1.5 Ex 1.5.5
  (p. 48). No deps added beyond the scaffold list.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `accept`.

### Level-4 B item 5: `ex-explicit-enumeration-of-the-rationals`

- **Authored** `items/ex-explicit-enumeration-of-the-rationals.md` (draft,
  `dependency_level: 4`).
- **Claim/route.** The doubly decoded $J_0(m,n)=2^m(2n+1)$ yields a total
  surjection onto $\mathbb{Q}$ through difference-pair numerators and positive
  denominators, and the least-first-occurrence recursion converts it into a
  bijection $\mathbb{Q} \approx \mathbb{N}$ (totality by pigeonhole); initial
  sample value $q(3)=-1$ agrees with the pairing convention. Sources: Hunter
  §1.6 Props 1.44–1.45 (pp. 16–17), §2.3 Thm 2.5 (p. 25); Lebl §0.3.
  Deps added: `def-equinumerous`, `lem-subset-of-countable`.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `repaired`/`dependency`.

### Level-5 B item 6: `cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n`

- **Authored** `items/cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n.md`
  (draft, `dependency_level: 5`).
- **Claim/route.** The constant map onto a one-element set is onto while
  pigeonhole excludes a bijection with $\mathbb{N}$; the source's repeated-value
  enumeration (Hunter §1.6 Prop 1.44, pp. 16–17) is the pattern.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `accept`.

### Level-5 B item 7: `cex-the-empty-set-is-not-a-surjective-image-of-n`

- **Authored** `items/cex-the-empty-set-is-not-a-surjective-image-of-n.md`
  (draft, `dependency_level: 5`).
- **Claim/route.** $\varnothing$ is finite hence countable under
  [[def-countable]], but no function $\mathbb{N} \to \varnothing$ exists
  (the empty function has empty domain; a function on $\mathbb{N}$ would need a
  value at $0$). This is the non-empty proviso of Hunter §1.6 Prop 1.44 read
  against Lebl §0.3 Def 0.3.29.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `accept`.

### Level-5 B item 8: `ex-cantor-diagonal-misses-every-listed-binary-sequence`

- **Authored** `items/ex-cantor-diagonal-misses-every-listed-binary-sequence.md`
  (draft, `dependency_level: 5`).
- **Claim/route.** For any $s : \mathbb{N} \to \{0,1\}^{\mathbb{N}}$, the
  complemented diagonal $d(n) = 1 - s_n(n)$ is built by Separation and differs
  from $s_n$ at $n$, so $d$ is outside the range. Source: Hunter §1.6, the
  diagonal construction after Cor 1.48 (p. 18).
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `accept`.

### Level-6 B item 9: `ex-integers-are-countably-infinite`

- **Authored** `items/ex-integers-are-countably-infinite.md` (draft,
  `dependency_level: 6`).
- **Claim/route.** $\mathbb{Z} \approx \mathbb{N}$ by the two-injection route:
  $n \mapsto [(n,0)]$ from the natural embedding, and the pairing/quotient
  surjection with the least-preimage injection in the other direction, closed
  by Schröder–Bernstein; the product consequence $\mathbb{Z}\times\mathbb{Z}$
  is countable. Sources: Hunter §2.3 Thm 2.5 (p. 25); Lebl §0.3 Ex 0.3.32
  (p. 18).
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `accept`.

### Level-6 B item 10: `ex-real-algebraic-numbers-are-countably-infinite`

- **Authored** `items/ex-real-algebraic-numbers-are-countably-infinite.md`
  (draft, `dependency_level: 6`).
- **Claim/route.** Real algebraicity is defined locally by nonzero finite
  integer coefficient lists evaluated in $\mathbb{R}$; the total coefficient
  decoding, least witness code $n(x)$ and unique increasing root rank $j(x)$
  inject $A$ into $\mathbb{N}$, the embedded rationals inject into $A$, and
  $A \approx \mathbb{N}$ follows; $\mathbb{R} \setminus A$ is uncountable by
  the two-set interleaving against [[thm-r-uncountable]]. ZF throughout: no
  $\mathrm{AC}_\omega$, no countable-union theorem. The owner's Step-1
  "R minus A" wording correction is incorporated. Sources: Hunter §4.6
  (pp. 89–90); Lebl §1.4 Ex 1.4.9(a)–(b) (p. 43). Deps added: the two
  natural-number suppliers consumed by the finite listing induction.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `repaired`/`dependency`.

### Level-7 B item 11: `ex-rationals-in-an-interval`

- **Authored** `items/ex-rationals-in-an-interval.md` (draft,
  `dependency_level: 7`).
- **Claim/route.** For $a<b$ the least-index recursion produces a strictly
  increasing injection $\mathbb{N} \to \mathbb{Q}_{(a,b)}$ and
  subset-countability the reverse injection, so the interval rationals are
  countably infinite, while the interval itself is uncountable
  ([[cor-interval-uncountable]]); the complement conclusion uses only the two
  given enumerations. Sources: Hunter §2.8 Thm 2.31 (p. 36); Lebl §1.2 Thm
  1.2.4(ii). Deps added: the subset and set-difference suppliers.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `repaired`/`dependency`.

### Level-8 B item 12: `ex-complement-of-a-countable-set-of-reals-is-uncountable`

- **Authored** `items/ex-complement-of-a-countable-set-of-reals-is-uncountable.md`
  (draft, `dependency_level: 8`).
- **Claim/route.** If $C \subseteq \mathbb{R}$ is at most countable then
  $\mathbb{R} \setminus C$ is uncountable: the empty case is separated, and
  otherwise two fixed enumerations interleave on $\mathbb{N}\times\mathbb{N}$
  to contradict [[thm-r-uncountable]]. The countable-union theorem is named as
  contrast only and its $\mathrm{AC}_\omega$ is never consumed. Sources: Lebl
  §1.4 after Thm 1.4.2 (p. 42); Hunter §2.3 after Thm 2.5 (p. 25). Deps:
  four scaffold-mirror-omitted manifest dependencies synced; one unused
  redundant fact removed.
- **Checks/decision.** `precheck` PASS, `proof-layout` clean; decision
  `repaired`/`dependency`.

## A-page audit and decisions (22 preserved published items)

- All 22 A items were audited against the current manifest: hypotheses,
  suppliers, page order, proof route and format were re-read; no mathematical
  gap was found and no statement or proof was changed beyond the two notation
  repairs below.
- `cor-irrationals-uncountable` and `fs-uncountable-contains-interval`:
  **repaired** (`notation`) under the applied-notation policy —
  `\iota(0)` / `\iota(q)` were replaced by the direct numeral/rational; the
  arguments, steps and dependencies are unchanged, so no consumer propagation
  is owed.
- `thm-countable-union-of-countable` was accepted in place carrying the
  pre-existing Step-1 F3 pointer repair (its Statement commentary now names
  the later foundations page instead of "this page's false statements"; the
  quantified theorem and its single $\mathrm{AC}_\omega$ use are unchanged).
  The remaining 19 A items were accepted unchanged (`precheck` PASS where
  applicable), defect list empty.
- A page order was re-verified: the two preliminary lemmas precede
  `def-countable`, the interval corollary follows `thm-r-uncountable`, and
  every same-page supplier precedes its consumer.

## Contracts, checks and gates (final battery on the frozen state)

- `proof-layout` over all 34 changed paths: 34 items, 206 steps, 0 defects.
- `precheck` over all 34 paths: 28 checked, 0 failing (6 definitions/remarks
  not applicable).
- `rendercheck` over the 34 paths plus the B page: OK, 35 files.
- `content-policy` on `research/…-batch-2.pages.json` (non-manifest mode):
  34 scoped items, 0 errors, 0 warnings. (`--manifest-only` now reports
  `batch-item-already-exists` for the authored IDs, which is expected and was
  used only as pre-authoring evidence.)
- `depcheck --items-file` (34 IDs): OK; 3 pre-existing
  `published-local-repair` notices on `def-countable-choice`,
  `def-dependent-choice`, `rem-continuum-hypothesis`, not owned defects.
- `depsource --items-file … --run …`: 0 unresolved; 421 dependency links to
  published pages, 3 to in-pair draft pages (`ex-binary-sequences…` →
  `ex-power-set…`, `ex-real-algebraic-numbers…` →
  `ex-explicit-enumeration…` and → `lem-finite-real-coefficient-lists…`),
  all resolved within the pair with the supplier authored earlier.
- `manifest-deps`: 34 items, 0 normalized, 0 errors — the B manifest deps were
  synced to the final item files (superseding the interim note in the item-1
  checkpoint).
- `item-dependency-levels check --run`: 861 items / 100 pages, no errors.
- `validate-plan research/plan-spec.json --run …`: exit 0; declared order
  acyclic and consistent for all 100 pages (unrelated `redundant-prereq`
  warnings only).
- `coverage-checklist --require-destination`: 2 pages, 54 harvested, 0 errors,
  1 pre-existing low-yield warning on the A page (6/30), already explained in
  Step 3a.
- `source-fetch-check --coverage …`: 6/6 fetch-verified, 6/6 resolved.
- `proof-contract --strict`: 0 errors, 0 warnings, 34/34 items.
- `boundary-audit --fail-on-contradicted --fail-on-template`: exit 0; no
  contradicted dispositions, no template reuse; 152 of 272 rows
  not-applicable.
- `citation-fidelity --fail-on-missing-quote`: exit 0.
- `pathcheck --pages-file`, `prosecheck` over the 34 items plus B page: clean.
- `finite-smoke`: 0 checks over 0/34 obligated items (this pair registers no
  finite obligation) — expected.
- `gate-liveness --run …`: whole-run parity observation only — the merged
  whole-run proof-contract/coverage/finite-smoke inputs are not present yet
  and the run-wide precheck summary is unparsed; not an owned-pair defect.
- `step3-decisions.mjs check --phase final`: 0 of the owned 34 IDs open — all
  receipts current and hash-bound; no escalation recorded.

## Scope decisions, pre-splice rechecks and supplier reconciliation

- Scope decisions for the pair: three decline rows (two Lebl §1.5 Ex 1.5.5
  binary-expansion/$\mathbb{R}\approx\mathcal{P}(\mathbb{N})$ rows and Lebl
  §0.3 Ex 0.3.25 Dedekind split) all recorded `stands` with evidence; the
  binary-sequence space is built without the expansion identification and the
  Dedekind split stays out of scope. No owner action outstanding.
- Step-1 pre-splice findings rechecked against current inputs: F1 (22 A + 12 B
  records registered) holds — manifest/coverage/levels agree; F2 (single local
  false-statement paragraph plus later-home names) holds in the A page
  carrier; F3 (pointer repaired to the later page) holds in
  `thm-countable-union-of-countable`.
- Direct in-run prerequisite pair `roots-and-rational-powers` was inspected:
  published, and its `def-finite-sum`, `lem-finite-sum-laws`,
  `def-integer-power` interfaces are consumed only through the local root-bound
  lemma with the referenced cross-batch rows verified. No unfinished supplier
  remained, so no consumer decision needed escalation; the two B-local
  suppliers (`ex-explicit-enumeration-of-the-rationals`,
  `lem-finite-real-coefficient-lists-have-at-most-degree-many-roots`) were
  authored at levels 4 and 3 before their level-6 consumers.
- No new items were added in-run: every owner-reviewed ID is either published
  or on the B scaffold list, so no new ID needs engine scope/item
  certification.

## Published concerns

- Fixed in-run: the two applied-notation defects above (interfaces unchanged;
  no cross-group propagation owed).
- Pre-existing and unchanged: the three recorded local repairs
  (`def-countable-choice`, `def-dependent-choice`, `rem-continuum-hypothesis`)
  and the Step-1 pointer/prose corrections; the A-page coverage low-yield
  warning. None blocks this pair; shared-ledger updates remain with the
  serial reconciler.
- No new published defect or source uncertainty was found; no plan or prose
  amendment for Step 4 is requested from this pair.

## Handoff status

- **Completed.** All 34 assigned IDs: 12 B items authored and the B page
  `library/real-analysis/countability-and-uncountability-examples.md` created;
  22 A items audited with current item decisions; contracts
  (`research/…-batch-2.proof-contracts.json`, 34 entries) written; manifest,
  coverage, cross-batch inputs and scope decisions updated.
- **Checks actually run.** The full battery above (`proof-layout`, `precheck`,
  `rendercheck`, `content-policy`, `depcheck`, `depsource`, `manifest-deps`,
  `item-dependency-levels`, `validate-plan`, `coverage-checklist`,
  `source-fetch-check`, `proof-contract --strict`, `boundary-audit`,
  `citation-fidelity`, `pathcheck`, `prosecheck`, `finite-smoke`,
  `gate-liveness`, `step3-decisions check`).
- **Added suppliers.** None. All prerequisites resolve to published items
  (including the inspected `roots-and-rational-powers` page) or to in-pair
  items authored earlier.
- **Open obligations.** None unresolved for this pair; the 3 in-pair
  draft-page supplier links close at splice when the B page publishes, and the
  whole-run `gate-liveness` parity items belong to the run aggregate, not this
  pair. No escalated item decisions remain.

