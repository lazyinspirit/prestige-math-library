# Step 5A authored-content adjudication — group c (batches 6 and 9)

Run `phase-2-next-18`; group `c` covers batch 6 (Suslin trees/lines/algebras;
proper forcing, countable-support iterations and PFA) and batch 9 (Prikry
forcing and Gitik's singular-cardinal model; minimal walks, oscillation and
L/S spaces). Scope read from `research/phase-2-next-18-step5-scope-{6,9}.json`
(version 3): 104 items and 8 pages. This is direct group adjudication of the
authored mathematics; it is not a repeat of the Step-3 scaffold or
source-inventory audit, not an independent judge and not a publication stamp.

## Verdicts

All 112 obligations (104 items and 8 pages) received one decision with
obligation `authored:<batch>:<id>` in
`research/phase-2-next-18-alpha-c-5a-decisions.json`:

- accepted: 108;
- repaired: 4 (each with a closed, uniquely owned defect-ledger row and
  `repair_confidence: 1`):
  - `lem-suslin-line-nowhere-separable-quotient` — `phase-2-next-18-5a-c-001`
    (missing two-class case in the endpoint deletion; the missing argument was
    supplied);
  - `ex-countable-support-fusion-at-a-limit-stage` — `...-002` (LaTeX spacing
    macro written without its backslash);
  - `cor-pfa-implies-no-s-spaces` — `...-003` (same class of typo in a display);
  - `def-ordered-fundamental-space-and-nice-refinement` — `...-004` (same).
- escalated: 0. Withdrawn: 0.

No item, statement or intended result was weakened, no pair or page was added,
no manifest order or page header was changed, and no local definitions or
lemmas were needed: every declared dependency exists and states the fact its
consumer cites. The only record edits are the 94 `risk_review` entries below.

## What was actually checked

Every item file was read (statement, facts, numbered proof steps, remarks) and
every page header and prose paragraph was read against its item list. Inference
steps were checked one by one against the exact statements of the cited
suppliers, which were re-read in `items/` where the inference depended on their
wording or on their boundary clauses. Load-bearing external arguments were
compared with the complete source texts, retrieved and read in chunks with
bounded output:

- Monk, *Set theory following Jech* (`https://euclid.colorado.edu/~monkd/jech.pdf`):
  Lemma 9.12 with its full proof (pp. 65–68) for the normal splitting
  refinement; Theorem 9.13 (pp. 68–69) for the first-difference order and its
  ccc argument; Theorems 9.14–9.15 and Corollary 9.16 (pp. 69–72) for the
  completion; Theorem 9.17 and its proof (pp. 72–74) for the nowhere-separable
  quotient; Theorem 9.18 (pp. 74–75) for the nested-interval tree.
- Moore–Venturi, *The Proper Forcing Axiom: a tutorial*
  (`https://pi.math.cornell.edu/~justin/Ftp/Raach_notes.pdf`): Sections 3.2, 4
  and 5 for the PID poset, Lemma 4.3 (properness) and Theorem 5.1 (PFA implies
  PID) — used to check `thm-pfa-implies-p-ideal-dichotomy` step by step.
- Todorcevic, *Combinatorial dichotomies in set theory*, Section 23
  (`https://www.math.toronto.edu/~stevo/dichotomies4.pdf`) for the
  PID + p > omega_1 ⇒ no-S-space argument used in
  `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces`.
- Cummings, *Iterated Forcing and Elementary Embeddings*, Theorem 24.11 and its
  proof (`https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf`,
  pp. 99–101) for the Laver-guided iteration, its size/κ-cc/collapse profile
  and the lifting argument of `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa`.
- Karagila, *Forcing & Symmetric Extensions*
  (`https://karagila.org/files/Forcing-2023.pdf`): Theorem 4.25 (countably
  closed forcing adding a Suslin tree), Theorems 4.22–4.23, Definition 4.21,
  and the club-shooting material used by the examples.
- Also consulted in the repository: the exact statements of the suppliers named
  in each contract citation row (`def-suslin-line-order-interface`,
  `thm-closure-distributivity-and-no-short-sequences`,
  `thm-forcing-preorders-have-regular-open-completions`,
  `def-kappa-closure-distributivity-and-chain-condition`,
  `lem-countable-tree-antichain-sealing`, `thm-splitting-suslin-tree-poset-square-not-ccc`,
  `def-martins-axiom`, specialization suppliers, `lem-forcing-transfer-for-finite-zfc-fragments`,
  `thm-formal-consistency-transfer-by-forcing`, `thm-formal-relative-consistency-from-verified-proof-reduction`).

Boundary and endpoint cases checked explicitly include: the empty and
one-element Boolean algebra (Suslin algebra dichotomy); the two-element
quotient case repaired above; the empty/finite trace conventions of the
minimal walks (including the alpha = 0 lower-trace convention); the D_n and
E_eta density cases of Prikry forcing (empty stem, label 0, empty family); the
gamma = 0 cases of the bounded-name fusions; the empty-support and
identity-permutation cases of the Gitik symmetry lemmas; the empty family in
PFA and MA definitions; the kappa- versus ccc-antichain distinctions; and the
mu-comparison cases of the homogenization codes.

## Risk review

94 items are routed high or critical by `tools/risk-report.mjs` (49 in batch 6,
45 in batch 9). A specific `risk_review` disposition was written into each
owning batch contract during this read using `tools/apply-risk-reviews.mjs`
with reviewer `group-alpha 5a-c (Step 5A direct group review)`; each note
records the concrete steps, hypotheses and boundary cases checked for that
item, and the two repaired-typo items carry their defect references in the
decisions. `node tools/risk-report.mjs
research/phase-2-next-18-batch-N.proof-contracts.json --require-reviewed`
reports `0 error(s)` for N = 6 and N = 9 (54 and 50 items routed). No risk was
left unresolved.

## Local suppliers and amendments

None. No missing local prerequisite was found, so no definition or lemma was
created, no contract citation needed a new supplier, and no manifest or page
order changed. No shared-plan or Phase-2 amendment is requested from the serial
lead. The group-c consumer rows of
`research/phase-2-next-18-batch-{6,9}.cross-batch-dependencies.json` were
updated where my read changed them: the batch-6 input stays empty, and the
page-level row (consumer `minimal-walks-oscillation-and-l-and-s-spaces`,
supplier `proper-forcing-countable-support-iterations-and-pfa`) moves from
`open` to `verified` because the supplier's five item interfaces and both of
its A/B pages are now decided; the unified ledger was refreshed mechanically.

## Published findings

None. The four defects above are in draft items authored in this run, so no
published item was found defective during this review and no entry was added to
`research/published-consumer-supplier-ledger.md`. No published content was
edited.

## Checks run (honest local results)

- `node tools/risk-report.mjs ... --require-reviewed` for batches 6 and 9:
  0 errors (after the 94 review entries).
- `node tools/tsx-run.mjs tools/precheck.mts` on each of the four repaired
  items: all clean (the three formatting-only items and the repaired proof
  item).
- `node tools/defect-ledger.mjs append` for the four rows with the guard-form
  pre- and post-hashes; the generated view was re-rendered in the same
  transaction, and `validate`/`check` remain the engine's gates.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-18`
  after the batch-9 input edit.
- The engine's own `step5-decision-stamp` and `step5-routing-*` gates run after
  this dispatch; the decisions file deliberately carries no self-computed
  `subject_sha256` so that the stamp is the single authority for carrier
  hashes. Nothing here is a judge verdict, a stamp or an independent review.

## Depth, limits and blockers

No blockers. The following honesty notes record where my verification was
source-guided or structural rather than a line-by-line re-derivation, so the
5B lead and the operator can weight it correctly:

- The Gitik class-forcing machinery (`def-gitik-strongly-compact-filter-system-and-class-forcing`
  and its consumers): I checked the definition's internal coherence
  (unique cut, extendability equivalence, well-definedness of Phi_p, filter
  existence and uniformity, order and set-stage properties) and the structure
  and stated steps of the restriction/amalgamation/Prikry-property lemma, the
  expanded class-forcing theorem, the intermediate model items, the
  homogenization lemma, and the relative-consistency assembly. I did not
  re-derive every clause of the ten tree conditions against Schürz's thesis;
  that fidelity rests on the recorded Step-1/Step-3 source audit, which the
  items' own source locators make checkable.
- The Moore club-extension and oscillation-block lemmas, the two Moore–L-space
  argument items and the CH strong-S-space recursion
  (`lem-ch-nice-refinement-is-strongly-hereditarily-separable`) are long
  reflection arguments. I verified their statements, hypotheses, dependency
  fit, quantifier order, and the individual moves their proofs state
  (club-of-cuts, the M-definable-set reflection, the Delta-system and pattern
  applications, the backward prunings), but I did not reconstruct every
  auxiliary proof obligation from scratch.
- `lem-formal-pfa-iteration-verification-compiler` and the three other
  proof-code items were checked for the structure the verified-reduction
  suppliers demand (finite-fragment scope, primitive-recursive bounds, PA
  induction invariant, single stored PFA block, no model extraction); I did
  not machine-check the emitted codes.
- Everything else (the Suslin/L-space/forcing items, the Prikry items, the
  counting and cardinal items, and all examples and counterexamples) was
  checked step by step, including the arithmetic of the finite examples
  (the binary first-difference table, the three-stage interval configuration,
  the minimal walk with C_omega the evens and its running-maximum lists, and
  the modular parity computation of the oscillation pattern theorem).
