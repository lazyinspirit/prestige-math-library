# Frontier-22 group b — Step 10 readiness re-attestation adjudication

## Outcomes

| item | outcome | evidence and disposition |
|---|---|---|
| `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` | `confirmed_fatal` | L3 widened the cited nonempty-intersection lemma to the empty family. Restricted it to `n>=1`, proved the proper-ideal decomposition has `r>=1`, and made the directly used Dependent Choice hypothesis explicit. Ledger `frontier-22-S10R-b-001`. |
| `def-primary-decomposition-minimal-and-isolated-components` | `confirmed_fatal` | Its module-annihilator radicals were not well typed from the dependencies. Added the primary-submodule dependency that establishes annihilator idealhood. Ledger `frontier-22-S10R-b-002`. |
| `def-primary-submodule-and-primary-ideal` | `confirmed_fatal` | `sqrt(Ann_R(M/Q))` was applied before idealhood of the annihilator was established. Added the elementary ideal verification. Ledger `frontier-22-S10R-b-003`. |
| `ex-embedded-component-varies-but-radical-does-not` | `confirmed_fatal` | L1 dropped the Noetherian and finite-module hypotheses. Restored the hypotheses, proved `k[x,y]` Noetherian, recorded the Choice scope of isolated uniqueness, and verified prime radicals before use. Ledger `frontier-22-S10R-b-004`. |
| `ex-primary-localisation-kills-a-component` | `confirmed_fatal` | L1 dropped the localization lemma's Noetherian and finite-module hypotheses. Restored them, proved `k[x,y]` Noetherian, and recorded Choice for the cited localization/uniqueness route. Ledger `frontier-22-S10R-b-005`. |
| `ex-primary-maximal-radical-test` | `confirmed_fatal` | L2 omitted the cited theorem's Axiom of Choice. The proof already computes `m^2=0` directly, so the unnecessary theorem, fact, and proof tag were removed instead of adding an irrelevant hypothesis. Ledger `frontier-22-S10R-b-006`. |
| `lem-annihilator-of-a-cyclic-submodule` | `confirmed_nonfatal` | Idealhood of `Ann_R(m)` follows immediately from the module axioms. This is the same reader-closes proof gap recorded at Step 7; the statement and isomorphism are correct. No edit. |
| `lem-associated-primes-contained-in-support` | `confirmed_fatal` | L3 attributed module localization and its zero criterion to a ring-localization definition. Added the exact module-localization dependencies and fact. Ledger `frontier-22-S10R-b-007`. |
| `lem-associated-primes-exact-sequence-right-bound` | `confirmed_nonfatal` | Step 1.1 omits an explicit citation to the associated-prime definition, but both uses are immediate unfoldings of that page convention and the argument is correct. No edit. |
| `lem-intersection-of-primary-submodules-with-same-radical` | `confirmed_fatal` | The statement admitted `r=0`, making the conclusion false and a maximum undefined. Added `r>=1` and replaced the proof by a choice-free finite-maximum argument establishing properness, primaryity, and radical equality. Ledger `frontier-22-S10R-b-008`. |
| `lem-irreducible-submodule-is-primary-noetherian` | `confirmed_nonfatal` | The proof uses the standard Noetherian-implies-ACC equivalence without an explicit fact; the local Noetherian definition points to that exact equivalence and the inference is immediate. No edit. |
| `lem-localisation-of-a-primary-submodule` | `confirmed_fatal` | L2 dropped the cited localization theorem's Noetherian-ring hypothesis. Restored it and made the Axiom of Choice used by L1 explicit. Ledger `frontier-22-S10R-b-009`. |
| `lem-maximal-element-annihilator-primality-step` | `confirmed_nonfatal` | The proof does not spell out idealhood of an element annihilator, but it follows immediately from the module axioms; the properness and prime-product condition are proved. No edit. |
| `lem-noetherian-ring-maximal-element-annihilator-exists` | `confirmed_fatal` | L2 falsely attributed idealhood to a definition that only gives the annihilator set. The proof now establishes idealhood directly, and Dependent Choice is explicit for the cited maximal condition. Ledger `frontier-22-S10R-b-010`. |
| `lem-primary-decomposition-combine-equal-radicals` | `confirmed_fatal` | L2 misdescribed the minimality definition. It now states both irredundancy and distinct radicals, while the proof identifies equal-radical combination with the second cleanup requirement. Ledger `frontier-22-S10R-b-011`. |
| `lem-primary-decomposition-delete-redundant-components` | `confirmed_fatal` | L1 described only irredundancy as the definition of minimality. It now retains both defining conditions and uses only the first one for deletion. Ledger `frontier-22-S10R-b-012`. |
| `lem-zero-divisor-annihilator-contained-in-associated-prime` | `confirmed_fatal` | L1 attributed a kernel submodule to an annihilator definition that does not define it. The proof now verifies the kernel is a submodule directly and cites the exact associated-prime definition. Ledger `frontier-22-S10R-b-013`. |
| `thm-first-uniqueness-theorem-primary-decomposition` | `confirmed_fatal` | L1 omitted the cited lemma's prime-radical hypothesis. The Statement, Given data, and fact now require every component to be `p_i`-primary for a prime ideal `p_i`. Ledger `frontier-22-S10R-b-014`. |
| `thm-isolated-primary-components-are-unique` | `confirmed_fatal` | L3 omitted that the radical is prime, leaving the denominator set and contraction lemma unsupported. Added prime radicals, exact citation hypotheses, and the Choice scope inherited from localization. Ledger `frontier-22-S10R-b-015`. |
| `thm-lasker-noether-primary-decomposition` | `confirmed_fatal` | L2 omitted the cited maximal-condition theorem's Dependent Choice proviso. Added it to the Statement, Given data, dependency list, and fact. Ledger `frontier-22-S10R-b-016`. |
| `thm-minimal-support-primes-are-associated` | `confirmed_nonfatal` | The last step unfolds the associated-prime definition without an explicit fact. The constructed nonzero element has annihilator exactly `p`, so the conclusion is immediate and correct. No edit. |
| `thm-primary-submodule-characterisations` | `confirmed_fatal` | L8 omitted the cited radical theorem's Axiom of Choice. Added the axiom to the Statement, Given data, dependency list, and exact fact, and removed the stale judge stamp. Ledger `frontier-22-S10R-b-017`. |
| `thm-second-uniqueness-theorem-primary-decomposition` | `confirmed_fatal` | Step 3.1 used an undefined localization map. Added the module-localization dependency, defined the canonical map `lambda_M`, and used it consistently; direct prime-radical and Choice hypotheses were also synchronized. Ledger `frontier-22-S10R-b-018`. |

Outcome totals: 18 `confirmed_fatal`, 5 `confirmed_nonfatal`, 0 `false_positive`.

## Rejudge targets

The supervising session must rejudge these exact repaired item ids:

- `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`
- `def-primary-decomposition-minimal-and-isolated-components`
- `def-primary-submodule-and-primary-ideal`
- `ex-embedded-component-varies-but-radical-does-not`
- `ex-primary-localisation-kills-a-component`
- `ex-primary-maximal-radical-test`
- `lem-associated-primes-contained-in-support`
- `lem-intersection-of-primary-submodules-with-same-radical`
- `lem-localisation-of-a-primary-submodule`
- `lem-noetherian-ring-maximal-element-annihilator-exists`
- `lem-primary-decomposition-combine-equal-radicals`
- `lem-primary-decomposition-delete-redundant-components`
- `lem-zero-divisor-annihilator-contained-in-associated-prime`
- `thm-first-uniqueness-theorem-primary-decomposition`
- `thm-isolated-primary-components-are-unique`
- `thm-lasker-noether-primary-decomposition`
- `thm-primary-submodule-characterisations`
- `thm-second-uniqueness-theorem-primary-decomposition`

No rejudge was initiated in this dispatch.

## Artifacts and checks

- Appended all 23 exact outcomes to `research/frontier-22-judge-adjudications.jsonl` with their pre-edit guard hashes.
- Appended 18 matching rows to `research/defect-ledger.jsonl`; `research/DEFECT-LEDGER.md` was regenerated by the append interface.
- Updated `research/frontier-22-batch-2.proof-contracts.json` and regenerated `research/frontier-22-proof-contracts.json`. Four downstream contract quotes were synchronized because the repaired definitions changed their exact cited sections; no downstream content was edited.
- Focused precheck passed for all 16 repaired proof-bearing items.
- Focused render check passed for all 18 repaired items.
- Strict batch-2 proof contracts passed 42/42.
- Batch-2 citation fidelity reported 117 citations, no missing quote, and no widening candidate.
- Batch-2 risk review passed with 0 missing reviews; the boundary audit found no contradicted disposition.
- Dependency check passed with pre-existing repository warnings only.
- Every repaired item remains `status: draft`; stale `verification.judge` blocks were removed from materially changed items.

## Blockers

None. The 18 repaired ids are pending the supervising session's targeted post-repair replay.
