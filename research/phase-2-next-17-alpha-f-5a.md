# Batch 10 — authored-content review (5a-f)

Run: `phase-2-next-17`. Group `f`; batch `10` only (scope
`research/phase-2-next-17-step5-scope-10.json`: 21 items, 4 pages). This is the
dispatched Step-5a review of the authored mathematics and pages — not a
publication, an independent judge pass or a whole-closure certificate.

Decisions: 25 obligations, **20 accepted, 1 repaired, 0 escalated**
(`research/phase-2-next-17-alpha-f-5a-decisions.json`). No item, page or pair was
added or removed; no dependency was changed. Two draft-item defects were
recorded in the append-only defect ledger and repaired locally.

## Scope and method

Read `CLAUDE.md`, `briefs/alpha-step5.md`, the dispatch briefs, the batch-10
manifest, notes, coverage, and proof contract, both A/B page pairs, all 21
authored items, and the published suppliers each argument actually uses
(`def-polynomial-time-verifier-and-reduction-interface`,
`def-multitape-and-nondeterministic-machines`,
`def-nondeterministic-accepting-computation`,
`def-dtime-ntime-dspace-and-nspace`,
`def-worst-case-time-and-space-complexity`,
`def-uniform-asymptotic-time-space-comparison`,
`def-machine-time-and-space-constructibility`,
`def-turing-machine-configuration`, `def-one-step-configuration-relation`,
`def-turing-machine-initial-and-halting-configuration-interface`,
`thm-multitape-machines-have-one-tape-simulations`,
`lem-multitape-simulation-has-quadratic-time-overhead`,
`def-effective-encoding-of-turing-machines`,
`lem-machine-encoding-is-injective-and-decodable`,
`thm-smn-for-the-fixed-acceptable-numbering`,
`thm-kleene-fixed-point-theorem-for-program-indices`). The Step-3b report and
the scope decisions were used as navigation only; the current authored text was
re-read and judged on its own.

Sources consulted in this read (complete relevant passages): Arora–Barak
*Computational Complexity*, §2.3.4–§2.3.5 (printed pp. 47–49; PDF pp. 63–66,
computation-locality proof and the SAT→3SAT clause chain) and Theorem 4.11
§4.3 (printed pp. 81–82; PDF pp. 97–98, the succinct `ψ_i` recurrence and the
polynomial prenex conversion); Kabanets CMPT 710 lectures 7, 10, 12, 13; Vadhan
CS221 lecture 6. The Kabanets/Vadhan lecture notes prove the nondeterministic
time hierarchy under the stronger hypothesis of a *time-constructible* lower
bound and do not contain SFM's recursive-padding generality; the item's extra
generality therefore rests on its own local argument, which I verified step by
step (below). The SFM primary URL is the owner-dropped ResearchGate link and was
not retried.

## Item outcomes

All 21 items are sound as authored. Per-item evidence with the exact steps and
inferences checked is in the decisions file; the load-bearing points were:

- `def-boolean-formulas-cnf-and-satisfiability-interface` — encoding, parser
  totality, evaluation semantics, malformed words in neither language, empty
  clause false / empty conjunction true.
- `def-bounded-turing-computation-tableau-interface` — the local allowed
  relation is *deterministic on genuine one-head rows* (one allowed output per
  window triple: preserve; prescribed write with the clamped left move at cell
  zero; arrive with the target state and written symbol; halting freeze), heads
  are conserved, spurious heads and exterior-marker heads are forbidden. The
  padded relation is tableau-only, and cell `T+1` is never reached because the
  head is at most `t<=T` after `t` steps.
- `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations` — both
  directions; the converse uses the uniqueness above, so a satisfying assignment
  decodes the padded run.
- `lem-tableau-to-cnf-map-has-polynomial-size-and-time` — `a(T+1)(T+2)` cell
  variables, `O(T^2)` clauses of width `max(a,4)` plus one accepting clause of
  width `a(T+2)`, `O(log T)`-bit indices, so polynomial size and time; the three
  gate patterns enforce exactly `v=¬u`, `v=u∧w`, `v=u∨w` in both directions.
- `thm-cook-levin-sat-completeness-interface` — SAT ∈ NP by the
  one-bit-per-distinct-variable certificate; the reduction is total on all
  binary strings with no promise, and length zero is covered.
- `thm-three-sat-completeness-interface` — the clause chain was checked in both
  directions including `m=4`, empty clauses and the fixed unsatisfiable image of
  malformed CNF.
- `def-polynomial-space-and-nondeterministic-polynomial-space` — conventions,
  the finitely-branching-tree finiteness argument (least-indexed child, no AC),
  visited-cell accounting and invariance of the union under enlarging a bound.
- `lem-space-bounded-machine-configuration-count` — canonical-prefix code,
  injectivity, `2^{O_M(S+\log(n+2))}` count and the `S>=n` simplification.
- `thm-tqbf-pspace-completeness-interface` — critical item, all eight steps
  read: recursive evaluation in polynomial space; the validity-constrained
  configuration graph with the tagged sink (reachable vertices are genuine
  configurations; transitions leaving the `S`-cell interval cannot cut a genuine
  run); the one-copy recurrence
  `R_{i+1}(X,Y)=∃Z∀b,U,V(¬G∨R_i(U,V))` characterised as “path of length at most
  `2^i`” in both directions; the `2^m` simple-path bound; the prenex identity
  `A∨Qz B ≡ Qz(A∨B)` and the `O(m^2 log(m+2))` size; the 3CNF/3DNF matrix
  variants; and the generation accounting of steps 7.2/8.1, which is explicitly
  confined to the labelled input/output-excluding auxiliary-space convention.
- `ex-a-two-step-computation-tableau-and-its-local-clauses`,
  `ex-tseitin-conversion-preserves-satisfiability`,
  `ex-qbf-reachability-recursion-space-accounting` — recomputed the rows,
  windows, nine Tseitin clauses, and the true/false reachability instances; the
  falsified clause and the inconsistent extension are correct.
- `def-nondeterministic-acceptance-time-and-exact-clock` — shortest-acceptance
  minimum, the inclusive cutoff with the two-move stay macro, `T(n)>=1`, no
  monotonicity, and no switch of convention relative to the published
  all-branch classes.
- `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time` —
  guess/replay/erase pass structure; the erase frontier is within
  `max(|x|,t)+1` cells (a simulated head starts at cell zero and moves at most
  one cell per step), so `τ_S(x)<=c(|x|+τ_M(x))+d`, with soundness of every
  accepting branch and the converse from a shortest accepting run.
- `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation` —
  prefix-freeness of `1^{|d|}0d1^{r(d)}0`, `O(|e|+1)` validation by running the
  decoder one step per consumed padding symbol, and a constant per-step
  interpreter cost after a single application of the two-tape simulation.
- `lem-time-controlled-self-reference-for-nondeterministic-machines` — the
  explicit compilers `f`, `Q` and `e_0=f(q)` give
  `L(M_{e_0})=L(H_{e_0})` with the quantitative bound; the published s-m-n and
  fixed-point theorems enter only extensionally.
- `lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds` — the
  union/intersection timings, the clocked cutoff halting on every branch, and the
  explicit refusal to claim all-branch halting for the two-tape normalization.
- `lem-no-recursive-bound-covers-all-recursive-unary-languages` — the triple
  enumeration (unbounded length per `(e,c)`), the finite bounded-tree search and
  both diagonalization cases, including `b(n)=0`.
- `thm-nondeterministic-recursive-padding-separation` — **repaired** (below);
  after the repair, the language identity, the step-down estimate and the bound
  induction are complete and the little-o bookkeeping
  (`A(n)=K(a(n)+n+1)>=n+1`, `A(n+1)=o(T(n))` using `a(n+1)>=n+1`, hence
  `n=o(T(n))`) checks out, as does `b(m)=m+1+Σ_{j<=2m}T(j)` dominating
  `T(m+ℓ)` without monotonicity.
- `ex-nondeterministic-polynomial-logarithmic-time-separation` — the
  `Θ((n+1)^k)` nested-loop exact clock, the effective `g`, and the shifted
  little-o inequality (`k>=2` is used in the first term); both inclusions and
  the separating language are correct.
- `ex-shortest-acceptance-and-clocked-all-branch-halting` — one-step accepting
  branch plus a divergent branch, `τ_N(x)=1`, the one-transition exact clock and
  the two-branch cutoff machine; the zero-cutoff and last-round endpoints.

Pages: all four reviewed against their ordered item inventories and summaries.
The two A-page summaries match the proved content (including the logspace
generation convention and the “no monotonicity / no AC” statements); the two B
pages keep `items: []` with the manifest example lists in order and summaries
that match the examples. Accepted with empty defect lists.

## Repair made (one item, two defects)

`thm-nondeterministic-recursive-padding-separation`, recorded in
`research/defect-ledger.jsonl` and mirrored in the batch proof contract:

1. `p2-next17-5a-f-padding-step-truncated` (fatal, `invalid-inference`,
   `proof-step 3.2`). Step 3.2 existed only as the fragment
   “…use `k'=k+1` and the induction bound `τ_V(z_{k+1})≤A(N_k+1)` in step 2.1.
   **Then**” — no conclusion and no citation bracket — and the contract row
   `derive-3.2` reproduced the same truncated claim. The estimate that step
   4.1's induction step consumes was therefore absent from the authored proof.
   Repair: 3.2 now states and proves the step-down estimate
   `τ_P(w_k) ≤ d(N_k+2+τ_V(z_{k+1}))`, and under `τ_V(z_{k+1})≤A(N_k+1)`,
   `A(N_k+1)≥N_k+2` (step 1.1) gives
   `τ_P(w_k) ≤ d(N_k+2+A(N_k+1))` (hence at most `2dA(N_k+1)`). Both ingredients are already
   proved in the item (step 2.1's second estimate is conditional on
   `z_{k+1}∈L(V)`, which the induction hypothesis supplies because
   `τ_V(z_{k+1})≤A(N_k+1)<∞`). I also made the induction step of 4.1 explicit
   (“For the step from `k+1` to `k` the induction hypothesis gives …”), so the
   displayed chain is fully licensed at its point of use.
2. `p2-next17-5a-f-padding-self-citation` (nonfatal,
   `citation-misattributed`, `proof-step 4.1`). Step 4.1's closing bracket read
   `[step 1.1, step 2.1, step 4.1]`, citing the step itself; the correct
   reference is the step-down estimate of 3.2. The bracket and the contract's
   `derive-4.1` inputs now name 3.2.

Carrier updates made with the repair: the item text; the batch contract's
`derive-3.2` claim/inputs and `derive-4.1` claim/inputs; and the two boundary
rows whose evidence named 3.2 for the `k=0` descent and the endpoint claim (now
naming 4.1 for the descent, 3.2 for the step-down). No dependency, provenance,
manifest, page-order or shared-plan record changed.

## Local suppliers and shared-plan amendments

None. No missing local prerequisite was found: every step either is discharged
in the item or cites a published supplier, and no new definition or lemma was
needed. Consequently no item was added to the manifest/contract/page and no
shared-plan or Phase-2 amendment is requested. `research/phase-2-next-17-batch-10.cross-batch-dependencies.json`
stays an empty array and `briefs/tasks/frontier-dependency-ledger.md` gained no
row; `frontier-dependency-ledger.mjs refresh --run phase-2-next-17` was run and
reports refreshed/deduplicated.

## Published findings

No new published-item defect was found in this scope, and nothing published was
edited. I re-read the canonical `research/published-consumer-supplier-ledger.md`
entries for the batch's published debt and each has its own section with audit
evidence, the exact prerequisite/use, a planned Phase-2 supplier and a repair
strategy; the entry for `thm-nondeterministic-time-hierarchy` in particular
commissioned exactly this A/B pair (item `8.` of that audit, status A-P). The six
recorded consumers are: `cor-clique-is-np-complete`,
`cor-hamiltonian-path-and-cycle-are-np-complete`,
`thm-circuit-sat-is-np-complete`,
`cor-l-is-properly-contained-in-pspace`,
`cor-ph-complete-language-forces-collapse`,
`thm-nondeterministic-time-hierarchy`. The ledger already maps the pending
suppliers of this batch onto them (for example
`thm-tqbf-pspace-completeness-interface` for `cor-ph-complete-language-forces-collapse`
and `def-polynomial-space-and-nondeterministic-polynomial-space` for
`cor-l-is-properly-contained-in-pspace`), so no ledger edit was required; the
published-consumer-ledger lock was not taken.

Cross-group observation (not repaired, not mine): the repo-wide `prosecheck`
gate currently fails on one draft item outside batch 10 —
`items/cor-grothendieck-collapse-when-one-functor-is-exact.md` (batch 4) claims
`[[def-collapse-at-a-page]]` is called *later* while that page's order is
365.065 against the consumer's 365.069. The owning group has to repair it before
the repo-wide gate can pass.

## Checks run (local, honest)

- `tools/tsx-run.mjs tools/precheck.mts` over the 21 batch items: 17 checked
  (the four definitions carry no proof), 0 failing; re-run for the changed item
  after the repair: pass.
- `node tools/proof-contract.mjs research/phase-2-next-17-batch-10.proof-contracts.json --strict`:
  0 errors, 1 warning (pre-existing `shotgun-bracket` on the padding theorem,
  whose step 1.1 cites 4 of 7 declared facts while two later steps cite none;
  not an error and not repaired here).
- `node tools/risk-report.mjs … --require-reviewed`: 0 errors, 21 items routed;
  the eight HIGH/CRITICAL items now carry complete `risk_review` records in the
  batch contract (`def-bounded-turing-computation-tableau-interface`,
  `lem-tableau-to-cnf-map-has-polynomial-size-and-time`,
  `thm-cook-levin-sat-completeness-interface`,
  `thm-tqbf-pspace-completeness-interface`,
  `def-nondeterministic-acceptance-time-and-exact-clock`,
  `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time`,
  `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation`,
  `thm-nondeterministic-recursive-padding-separation`).
- `tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`:
  168 boundary rows, 0 contradicted, 0 template clusters.
- `tools/citation-fidelity.mjs … --fail-on-missing-quote`: 48 citations, no
  missing quote, no widening candidate.
- `tools/finite-smoke.mjs` (batch): 0 errors, 0 checks (the batch carries no
  `finite_smoke` obligations; the merged run-level scope is live with 1 check).
- `tools/manifest-deps.mjs research/phase-2-next-17-batch-10.pages.json`: 21
  items, 0 errors. `tools/manifest-integrity.mjs --run phase-2-next-17`: no scope
  drift. `tools/splice-plan.mjs --run phase-2-next-17 --verify`: 34 pages agree
  with 11 manifests.
- Repo-wide: `depcheck` OK (no cycles, all references resolve),
  `fwdcheck` OK, `depsource` 0 unresolved, `rendercheck` OK, `extcheck` OK,
  `pathcheck` 0 errors, `prosecheck` FAILS on the single out-of-scope item named
  above.
- `tools/defect-ledger.mjs append` (2 rows, view re-rendered) and
  `validate --run phase-2-next-17`: 0 errors. `node tools/step5-scope.mjs check
  --run phase-2-next-17 --batch 10 --phase adjudicate`: 25 obligations,
  0 errors, with the two new ledger rows owned by the repaired decision. The
  engine's `stamp` gate was run locally to confirm the decisions carry current
  carrier hashes; the engine re-stamps them.

## Blockers

None for batch 10. No escalation is requested: no unmet prerequisite, no
unresolved mathematics and no source-availability gap blocks acceptance of this
batch. The only open items are outside this scope: the out-of-scope `prosecheck`
failure above, and the run-level 4-splice blocker recorded in
`.autopilot/phase-2-next-17/status.md`.
