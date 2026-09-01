# Step 8 — group d adjudication

Run `frontier-28`; batches 9 and 11.

## Outcome

- Rejections adjudicated: 23 exact `(id, model, context_sha256)` tuples.
- `confirmed_fatal`: 5; all five received the smallest coherent owned-item repair and exact defect-ledger linkage.
- `confirmed_nonfatal`: 15; none of these items was changed.
- `false_positive`: 3; none of these items was changed.
- Incoming alerts: none.
- Cross-group alerts raised: none.

## Rejection decisions

| item | context | outcome | decision |
|---|---|---|---|
| `cex-np-means-not-polynomial` | `39b0bfa137d2957c…` | `confirmed_nonfatal` | A one-pass linear-time decider places the parity language in P by immediately unpacking the definition of P. The missing direct definition citation is local polish, while the counterexample and conclusion are correct. |
| `cex-undecidable-means-no-instance-can-be-answered` | `46b3691a764c67de…` | `confirmed_nonfatal` | The Facts block omits the immediately preceding theorem that establishes undecidability of `A_TM`, but the explicit accepting instance is correct and the antecedent is closed by that page-local theorem. |
| `cor-busy-beaver-is-not-computable` | `f49a6ea4243495f7…` | `confirmed_nonfatal` | Given a machine computing `BB`, adding one to its binary output is an immediate fixed machine construction. The closure step is unstated but not a false or material claim. |
| `def-busy-beaver-function` | `e33fb780b1fab116…` | `false_positive` | The prose first defines `BB(n)` as the maximum number of steps taken by the relevant halting machines; the displayed `time_M` formula is a faithful notation for that already defined quantity. |
| `def-np-by-verifiers` | `f33b373bcf6d5229…` | `false_positive` | The nondeterministic-machine equivalence is in fact the immediately following item on the same page. |
| `ex-diagonal-self-application-machine` | `94a855e7d9a375b4…` | `confirmed_nonfatal` | The constructed finite one-tape machine can immediately be put in the fixed normalized numeric syntax and coded. The omitted normalization sentence is nonfatal. |
| `ex-np-is-contained-in-pspace-and-pspace-in-exp` | `447d8bc70a88efe7…` | `confirmed_nonfatal` | “Verifier” uses the page's polynomial-time NP-verifier convention, and the cited search definition presupposes an NP relation. The compact Given line is thin but does not make the example false. |
| `ex-p-is-contained-in-np-intersection-conp` | `859e9f6c5ae3b016…` | `confirmed_nonfatal` | Linear-time decidability implies P-membership directly from the page's definition; omitting that direct citation is an immediately closable gap. |
| `fs-diagonalization-needs-literal-source-self-reading` | `c975dcd51fe6f099…` | `false_positive` | The Given clause fixes the hypothetical-decider diagonal construction, and [L2] accurately summarizes the cited lemma's proof: it forms the coded pair and reverses the decider's answer. |
| `fs-np-complete-means-known-not-in-p` | `07a3a5d568186d51…` | `confirmed_fatal` | The old proof gave only a conditional collapse and did not refute the meta-claim that exclusion from P had already been proved. The repair cites the current unresolved status of P versus NP and observes that a proof `C notin P` for an NP-complete `C` would settle `P != NP`. Rejudge target; defect `frontier-28-A8-d-hash-001`. |
| `fs-np-means-not-polynomial` | `5d796eaa9024a08f…` | `confirmed_nonfatal` | P is contained in NP and trivial polynomial-time languages exist, so the slogan is refuted. [L2]'s abbreviated description of NP is non-load-bearing polish. |
| `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph` | `69e7937cbf605787…` | `confirmed_nonfatal` | Positive but non-total adjacency from the singleton `{v}` to `B_i` immediately means the pair is neither complete nor anticomplete. The cited lemma starts one sentence later, making this a citation-placement gap only. |
| `lem-star-or-special-vertex-obstructions-force-wonderfulness` | `f1369f9e4c585588…` | `confirmed_fatal` | Step 3.1 applied the restricted-union lemma to a shortened family whose length need not be at least `y^{-a}`. The repair transports the homogeneous set back through the reindexing and applies the lemma to the original blockade and large subset `I(v)`. Rejudge target; defect `frontier-28-A8-d-hash-002`. |
| `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses` | `74d63ae806f98e59…` | `confirmed_fatal` | [L1] dropped both numerical lifting hypotheses and the indexed-copy requirement from its citation. The repaired fact states the exact bounds and step 2.2 explicitly relabels each selected copy. Rejudge target; defect `frontier-28-A8-d-hash-003`. |
| `prop-np-is-contained-in-pspace-and-pspace-in-exp` | `728aeaf635f1fe14…` | `confirmed_nonfatal` | For a fixed number of tapes, the one-tape configuration description extends immediately to one state, finitely many head positions, and finitely many tape contents; step 1.2 writes that extension and its count explicitly. |
| `thm-busy-beaver-dominates-every-total-computable-function` | `b3db915460025b9e…` | `confirmed_fatal` | The old proof asserted an unsupported linear code-length compiler bound. The repair constructs a linear-state numeral-writing prefix and derives the sufficient `O(log n log log n)` code bound from the concrete transition-table encoding. Rejudge target; defect `frontier-28-A8-d-hash-004`. |
| `thm-halting-is-recognizable-and-undecidable` | `fe47661370d27110…` | `confirmed_nonfatal` | The reduction's malformed-input branch is omitted, but the same effective pair/machine/word parser already used in the recognizability half rejects those finitely specified bad formats. This is immediate implementation polish. |
| `thm-machine-acceptance-is-undecidable` | `77a7551261aa1029…` | `confirmed_nonfatal` | The finite machine constructed in the diagonal lemma can immediately be relabelled into the fixed coded-machine normal form. The missing normalization sentence is nonfatal. |
| `thm-machine-equivalence-is-undecidable` | `2335f6726ae55d69…` | `confirmed_nonfatal` | The fixed code is a concrete finite transition-table syntax, so adjoining a fixed simulation wrapper and hard-wired finite data is an effective elementary compilation. [L2] compresses this construction but the reduction is sound. |
| `thm-polynomial-reductions-transfer-p-np-and-conp-membership` | `89ebaef9ef6fb820…` | `confirmed_fatal` | The definition of reduction allows arbitrary finite source alphabets, while the local NP and coNP definitions contain only binary languages. The repaired Statement and Given block bind both languages inside `{0,1}*`. Rejudge target; defect `frontier-28-A8-d-hash-005`. |
| `thm-sat-search-reduces-to-sat-decision` | `ceb83359158ce564…` | `confirmed_nonfatal` | [L2] is an interpretive summary, but the algorithm directly proves that the output assignment has length at most the formula length and makes only linearly many oracle queries. No conclusion depends on an inflated citation. |
| `thm-totality-is-not-recognizable` | `5d62b402bd551fec…` | `confirmed_nonfatal` | The concrete machine syntax makes the wrapper with hard-wired machine/input data effectively compilable. The cited encoding definition does not spell out the wrapper, but the finite construction is immediate. |
| `thm-verifier-and-nondeterministic-definitions-of-np-agree` | `12de8da2ed542559…` | `confirmed_nonfatal` | The proof strengthens an eventual `O(n^k)` bound to `cn^k` at every length, missing the finite prefix and `n=0`. Replacing it mentally by `c(n+1)^k` or handling finitely many short inputs closes the proof immediately. |

## Repairs

1. `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`
   now states the exact lifting thresholds and relabelling requirement.
2. `lem-star-or-special-vertex-obstructions-force-wonderfulness` now applies
   the block-union lemma to the original blockade rather than the shortened
   reindexing.
3. `thm-busy-beaver-dominates-every-total-computable-function` now derives a
   concrete sufficient code-size estimate.
4. `thm-polynomial-reductions-transfer-p-np-and-conp-membership` now fixes the
   binary domains needed by NP and coNP.
5. `fs-np-complete-means-known-not-in-p` now gives a valid refutation using the
   unresolved status of P versus NP.

No nonfatal or false-positive item was changed.

## Append-only hash correction

The first adjudication append accidentally applied SHA-256 a second time to
the already computed guard digest. The shared adjudication and defect ledgers
were not rewritten. Twenty-three exact guard-hash correction rows were appended
to the adjudication ledger, and five exact closure rows were appended through
`tools/defect-ledger.mjs append`. The Step-8 guard recognizes all five group-d
content changes as licensed. The original wrong-hash rows remain append-only
evidence and are paired with the first five defect rows; the exact corrections
are the `frontier-28-A8-d-hash-*` rows named above.

## Sources consulted

- Local `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph`:
  supports the exact `(r-1)eta < 1` ordinary-pattern threshold and
  `(q-1)eta < 1/2` threshold for the `H+` lift.
- Local `def-effective-encoding-of-turing-machines`: supplies the explicit
  transition-table tuple encoding used to derive the repaired busy-beaver
  code-size estimate.
- Local `def-polynomial-time-many-one-reduction`, `def-np-by-verifiers`, and
  `def-conp`: establish the arbitrary-alphabet reduction domain and binary-only
  NP/coNP domains that required narrowing the transfer theorem.
- Clay Mathematics Institute, [P vs NP](https://www.claymath.org/millennium/p-vs-np/):
  lists P versus NP as unsolved and supports the repaired meta-mathematical
  refutation of “NP-complete means already proved outside P.”

## Rejudge targets

The engine should rejudge exactly these five repaired items:

- `fs-np-complete-means-known-not-in-p`
- `lem-star-or-special-vertex-obstructions-force-wonderfulness`
- `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`
- `thm-busy-beaver-dominates-every-total-computable-function`
- `thm-polynomial-reductions-transfer-p-np-and-conp-membership`

## Checks run

- Focused precheck: all five repaired proof-bearing items pass.
- Focused render check: all five repaired files pass YAML, delimiter, and KaTeX validation.
- Step-8 scope check: passes with four groups scoped, 424 items partitioned, zero open rejections, and no cross-group alerts.
- Defect-ledger append: both five-row batches validated and appended; the generated view was refreshed.
- Defect-ledger validation for `frontier-28`: 216 rows checked, zero schema errors.
- Group-d exact linkage audit: the latest 23 tuples resolve to 5 fatal, 15 nonfatal, and 3 false-positive outcomes; each exact fatal hash has exactly one `frontier-28-A8-d-hash-*` owner.
- Whole-level defect linkage did not yet pass because 107 fatal adjudications owned by other groups had no matching ledger row at check time; none of the five exact group-d fatal rows appeared in that failure list.
- Step-8 guard: all five group-d changes are licensed by exact confirmed-fatal pre-edit hashes. The whole-level invocation did not pass because 38 concurrent changes owned by other groups carried nonmatching guard hashes; no group-d item was among those errors.

## Alerts and blockers

No incoming alert, cross-group finding, or group-d blocker remains. The
whole-level guard is waiting on other owning groups' concurrent adjudications;
group d did not alter or disposition those items.

## Step-8 preflight repair-integrity round 1

### Envelope and scope

- Gate: `proof-contract`, with the matching `citation-fidelity` residue.
- Assigned group-d ids acted on:
  `prop-an-np-complete-language-in-p-implies-p-equals-np` and
  `fs-np-complete-means-known-not-in-p`.
- `live_tuples` was empty, so this round created no adjudication, changed no
  content, and started no judge sweep.
- `thm-projective-module-characterizations` had `scope: unknown` and no owner in
  the envelope. It was not changed or dispositioned by group d.

### Licensing rows

- The changed statement quoted by
  `prop-an-np-complete-language-in-p-implies-p-equals-np` comes from the repair
  licensed by the exact fatal tuple for
  `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, context
  `89ebaef9ef6fb820aab0658607905b20c390ad35740cd8e0074ff2c8551914c5`,
  pre-edit guard hash
  `a1eec118b13260d2f0f89a95cb4cc42751a160a7f730b437545a5ab3441a0d78`.
- The current refutation and new local fact in
  `fs-np-complete-means-known-not-in-p` come from its exact fatal tuple, context
  `07a3a5d568186d5189b669f77a13ebb12ffb114e6cb8fa6c1fb3aa11dd361d67`,
  pre-edit guard hash
  `cf3e3802390d8e6d74e7e577b7aad97bb726efc95004506e01c8aae7fbb76823`.

### Documentary repairs

- Regenerated the two batch-11 contract entries from the current item text.
  This refreshed the reduction theorem's exact quoted statement and rebuilt
  every citation use and proof-step input for the repaired false statement,
  including `L1`, `L2`, and local fact `F1` in step 2.1.
- Rebuilt `research/frontier-28-proof-contracts.json` mechanically from all 11
  per-batch contract files so the merged gate input matches batch 11.

### Changed files

- `research/frontier-28-batch-11.proof-contracts.json`
- `research/frontier-28-proof-contracts.json`
- This group report

### Targeted checks

- Regeneration: 2 entries regenerated, 0 skipped.
- Contract merge: 339 scoped items from 11 batch files.
- Strict proof contract on the two assigned ids: 2/2 checked, 0 errors, 0 warnings.
- Batch-11 citation fidelity: 83 citations checked, 0 missing quotes, 0 widening candidates, and 0 upheld-review residue.
- Reviewed risk report on the two assigned ids: 2 routed, 0 errors.
- Focused precheck: both proof-bearing items pass.
- Focused render check: both files pass YAML, delimiter, and KaTeX validation.

### Blocker

None for group d. The envelope's proof-contract and risk residue owned by other
groups, together with the unknown-owner item, was left untouched for engine
routing.
