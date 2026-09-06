# Frontier 32 — Step 6b group Alpha d

Run `frontier-32`; role `alpha`; dispatch `6b-d`; owned batches `7`, `16`, and `17`.

## Outcome

All 33 routed obligations are closed: 26 touched carriers and seven refuter findings. Eleven reader repairs remain exactly accepted; fifteen touched carriers are amended because Alpha added required high-risk dispositions or made a refuter-confirmed repair; five fatal and two nonfatal refuter findings are confirmed and repaired. There are no reader findings, page obligations, proposed withdrawals, or unresolved mathematical blockers in this group.

The machine-readable decisions, sealed carrier hashes, and unique ledger references are in `research/frontier-32-alpha-d-6b-decisions.json`. Closed defect rows `f32-6bd-b7-*`, `f32-6bd-b16-*`, and `f32-6bd-b17-*` were appended through `tools/defect-ledger.mjs`; the generated ledger view was refreshed by the same transaction.

## Repairs and mathematical evidence

### Batch 7

- Accepted the reader's six repairs: the zero-count interval now buffers both endpoints; the smoothed explicit formula defines the meromorphic Mellin continuation and residue at zero; the ZF ideal-factorization, norm-multiplicativity, and fundamental-identity proofs use local DVR layers plus finite support/CRT; and Eisenstein total ramification uses Milne's valuation argument rather than inapplicable Dedekind--Kummer.
- Confirmed `refuter:7:1` fatal. `lem-local-logarithmic-derivative-zeta` formerly included `s=1`; the statement and Given clause now impose `s\ne1`. Its contract records this pole boundary explicitly.
- High-risk reviews are complete for `thm-von-mangoldt-explicit-formula-smoothed`, `thm-number-field-integral-ideal-factorisation-in-zf`, `thm-ideal-norm-is-multiplicative`, and `thm-ramified-primes-and-the-number-field-discriminant`. Relevant sources were Kedlaya chapter 10 and Milne, *Algebraic Number Theory*, Proposition 3.53 and the surrounding ideal/ramification sections, together with the exact current dependency statements.

### Batch 16

- Accepted or retained the reader's nine repairs: four stale Sakellaridis references now use the applicable Etingof locations; the arbitrary-root embedding uses Etingof Theorem 15.11 directly; the Hom-dimension proof states the partition-growth argument; the simple-reflection and BGG proofs expose PBW injectivity; and strong linkage retains positive integrality.
- Confirmed `refuter:16:1` and `refuter:16:2` fatal. Both failures came from treating regular dominance as integral dominance. The counterexample witness now chooses a regular dominant integral `A_2` weight. The embedding-poset item's title, Example, verification, manifest title, and contract now all require regular integral dominance, while stable IDs are preserved.
- High-risk reviews are complete for `lem-simple-root-singular-vector-in-a-verma-module`, `thm-verma-embedding-for-an-arbitrary-positive-root`, `prop-verma-composition-multiplicities-are-finite`, `lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule`, `thm-strong-linkage-principle-for-verma-modules`, `thm-bgg-verma-homomorphism-criterion`, `cor-antidominant-verma-modules-are-simple`, and `ex-a2-regular-dominant-verma-embedding-poset`. The decisive locators are Etingof Theorem 15.11, section 20's Jantzen filtration, Theorem 20.13, Corollary 20.14, and the section 21 Bruhat-order exercise.

### Batch 17

- Accepted the reader's base-field and hypothesis repairs for equal Galois multiplicities, the character/stabilizer fixed field, the Schur-index definition and splitting-field independence, the nonsplitting-field character formula, the degree corollary, division-algebra index, minimal realization, and the `C_3` example.
- Confirmed `refuter:17:1` fatal. `thm-scalar-extension-of-an-irreducible-finite-group-representation` now proves descent of the Galois-stable isotypic sum: trace-dual bases and the separability identity give `X=E\otimes_F X^\Gamma`, and irreducibility of `V` forces that orbit to contain every constituent. The unused endomorphism-base-change dependency was removed from the item and manifest, and the contract was regenerated.
- Confirmed `refuter:17:2` fatal. `ex-quaternion-character-has-schur-index-two` no longer relies on the inaccurate claim that the cited character formula proves `m\mid\chi(1)`. Left multiplication on the rational Hamilton division algebra is an irreducible rational `Q_8`-module and has complex character `2\chi`, directly giving Schur index two.
- Confirmed `refuter:17:3` and `refuter:17:4` nonfatal. `thm-schur-index-equals-division-algebra-index` now spells `\operatorname{End}` correctly and uses the typed tensor `1\otimes z` in `E\otimes_KD_V`; its proof contract was regenerated.
- The materially altered scalar-extension, quaternion, and division-algebra proofs now carry `provenance.proof: ai-altered`; their literature-derived statements and source references are unchanged.
- High-risk reviews are complete for the scalar-extension theorem, character-field lemma, splitting-field independence, nonsplitting-field character formula, division-algebra index theorem, minimal-realization theorem, and rational splitting of `S_3`. The pre-repair high-risk quaternion item also has a specific completed review. These checks agree with Wiese Proposition 2.2.11/Corollary 2.2.12 and Corollary 2.5.7, and Zheng Propositions 4.3.2 and 4.6.14.

## Validation

- Focused reflow: six Alpha-edited proof items unchanged after canonical reflow.
- Focused precheck: six checked, zero failures.
- Focused strict proof contracts: batches 7, 16, and 17 pass for every Alpha-edited entry; final batch-wide strict checks are recorded at closure.
- Manifest dependencies: batches 16 and 17 pass with zero errors after the title/dependency synchronization.
- Content policy: all three owned manifests pass with zero errors and zero warnings (53, 25, and 19 scoped items).
- Batch-wide strict proof contracts: 43/43, 23/23, and 14/14 entries pass with zero errors or warnings.
- Risk report without `--require-reviewed` was run for each owned contract. Twenty items that were HIGH/CRITICAL before or during repair received specific `risk_review: complete` records. Re-running all three contracts with `--require-reviewed` reports zero errors.
- Defect ledger: 33 rows appended; `defect-ledger validate --run frontier-32` reports zero errors.
- Batch-local Step-6 adjudication gates: batches 7, 16, and 17 pass with zero errors for their 7, 11, and 15 routed obligations.

The workspace lifecycle command reports an unrelated live `.autopilot` run named `frontier-23`, as the independent batch-7 reader also observed. The exact user-dispatched frontier-32 scope files, reports, findings, carriers, dependencies, and prior-retry artifacts were present and internally checkable, so this environmental mismatch did not prevent group-d adjudication and no lifecycle transition was attempted.

## Gate repair cycle 1 — `step6-routing-adjudicate`

Reread all ten live group-d items across batches 7, 16, and 17, including the
exact number-theory, Verma-module, and Schur-index dependencies, authoritative
source passages, reader/refuter evidence, frozen carriers, and prior retry
records. Their reader repairs remain mathematically sound. `contract-audit-8`
later changed each proof-contract record, so all ten touched decisions are now
`amended_repair`; ten `route: gate` supplemental decisions and matching stale-
classification rows record that carrier history.

The Schur-index corollary also had a distinct nonfatal citation defect: its
frontmatter named Zheng Corollary 4.3.3, whose exact result is not the formula
used. The reference now names Wiese Corollary 2.5.6, as already mapped by the
batch coverage. That repair has its own `route: gate` decision and ledger row,
making eleven rows in `frontier-32-alpha-d-6b-gate-ledger-rows.json`. A twelfth,
separate append-only correction row records that the final citation repair also
changed the item component, without rewriting the retained stale-classification
row. Canonical reflow left the item unchanged; focused precheck and rendercheck
each pass.

The full primary gate now reports 717 routed items, 359 adjudication
obligations, and zero errors. Run-wide defect-ledger validation checks 394
`frontier-32` rows with zero errors.
