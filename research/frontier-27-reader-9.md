# frontier-27 reader-9 report

Date: 2026-08-31.
Run: `frontier-27`
Batch: `9`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-27-reader.task.md`, `research/frontier-27-beta-9.task.md`, `research/frontier-27-batch-9.pages.json`, `research/frontier-27-batch-9.coverage.json`, `research/frontier-27-batch-9.proof-contracts.json`, `research/frontier-27-batch-9.notes.md`, `research/plan-computability-theory-track.md` (TC-5 and TC-11), and `research/plan-spec.json`.
- Assigned pages: `library/computability-theory/myhill-nerode-theory-and-dfa-minimization.md`, `library/computability-theory/myhill-nerode-theory-and-dfa-minimization-examples.md`, `library/computability-theory/decidable-recognizable-and-enumerable-languages.md`, `library/computability-theory/decidable-recognizable-and-enumerable-languages-examples.md`.
- Assigned A-page items: `def-right-language-and-equivalent-dfa-states`, `lem-state-equivalence-is-a-right-congruence`, `def-quotient-dfa-by-state-equivalence`, `lem-quotient-dfa-is-well-defined-and-equivalent`, `def-nerode-equivalence`, `lem-nerode-equivalence-is-a-right-congruence`, `lem-dfa-states-refine-nerode-classes`, `thm-myhill-nerode-characterization`, `cor-nerode-classes-give-the-canonical-minimal-dfa`, `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism`, `def-distinguishing-word`, `thm-table-filling-minimization-algorithm`, `thm-pumping-lemma-for-regular-languages`, `cor-distinguishable-prefix-nonregularity-criterion`, `fs-the-pumping-lemma-characterizes-regular-languages`, `fs-pumping-quantifiers-may-be-reordered`, `def-computable-and-partial-computable-function`, `def-decidable-and-recognizable-language`, `def-computably-enumerable-set`, `thm-recognizable-iff-enumerable`, `thm-decidable-iff-language-and-complement-are-recognizable`, `thm-recognizable-languages-are-closed-under-union-and-intersection`, `thm-decidable-languages-are-closed-under-boolean-operations`, `def-dovetailing-schedule`, `lem-dovetailing-reaches-every-finite-stage`, `thm-domains-and-ranges-of-partial-computable-functions-are-ce`, `thm-every-ce-set-is-a-domain`, `thm-infinite-ce-sets-have-computable-injective-enumerations`, `prop-machine-descriptions-form-a-decidable-language`, `fs-recognizable-means-total`, and `fs-every-countable-language-is-decidable`.
- Assigned B-page items: `ex-quotient-dfa-is-well-defined-and-equivalent`, `ex-distinguishable-prefix-nonregularity-criterion`, `cex-the-pumping-lemma-characterizes-regular-languages`, `ex-decidable-iff-language-and-complement-are-recognizable`, `ex-machine-descriptions-form-a-decidable-language`, `cex-recognizable-means-total`.
- Dependency items opened for verification: `def-deterministic-finite-automaton`, `def-extended-dfa-transition-function`, `def-dfa-acceptance-and-recognized-language`, `def-equivalence-relation`, `def-reachable-dfa-state`, `lem-removing-unreachable-states-preserves-language`, `lem-pigeonhole`, `def-language-over-an-alphabet`, `def-language-recognized-and-decided`, `def-partial-function-computed-by-a-machine`, `def-effective-binary-encoding-and-decoder`, `lem-finite-tuples-admit-effective-prefix-free-encodings`, `def-language-boolean-operations`, `def-effective-encoding-of-turing-machines`, `lem-machine-encoding-is-injective-and-decodable`, `def-countable`, `cor-effective-enumeration-of-turing-machines`, `def-computation-alphabet-and-word-convention`, and `def-sequence`.
- Local spot-checks beyond the page text: I decoded the sample code in `ex-machine-descriptions-form-a-decidable-language` against the repository's tuple format and confirmed the claimed tuple `(11,1,1,1,0,1)`.

## Design/spec check

- The TC-5 and TC-11 design blocks agree with the live spec on page ids, orders `589/590` and `601/602`, titles, categories, companions, and `requires` lists.
- The batch notes' controlling-design call is correct: the second cited line in each task block is the B-page subheading inside the same track block, not a competing redesign.

## Confirmed defects and edits

1. Repaired `items/def-distinguishing-word.md`.
   The definition used `\delta^*` without binding it. I made the extended transition function explicit in the opening sentence so the witness notion is well-typed on the page.
2. Repaired `items/thm-minimal-dfa-is-unique-up-to-pointed-isomorphism.md`.
   The old proof asserted injectivity of the map from states of a minimal DFA to Nerode classes without justification. I replaced that step with a well-defined surjection, then used the fact that both automata are minimal to recover bijectivity from equal finite cardinalities.
3. Repaired `items/thm-table-filling-minimization-algorithm.md`.
   The old closing sentence only said that no further merge was possible, which did not justify minimality among all equivalent reachable DFAs. I replaced it with the standard injection argument from quotient states into any reachable equivalent DFA via distinguishing suffixes.
4. Repaired `items/thm-domains-and-ranges-of-partial-computable-functions-are-ce.md`.
   The old proof treated an arbitrary effectively encoded set `X` as though its elements were already enumerated, and it also ignored the unrestricted behavior of the machine on malformed codes. I rewrote the domain and range recognizers through the fixed encodings, filtering malformed inputs with the decoder before simulating the machine.
5. Repaired `items/thm-infinite-ce-sets-have-computable-injective-enumerations.md`.
   The old proof wrote `g(0),g(1),g(2),...` even though `g` is a partial computable function on an arbitrary encoded set `X`, not on `\mathbb N`. I rewrote the dovetailing argument on binary codes and tracked distinct valid codes instead of a nonexistent numeric input list.
6. Updated `research/frontier-27-batch-9.proof-contracts.json`.
   I regenerated the changed contract entries for `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism`, `thm-table-filling-minimization-algorithm`, `thm-domains-and-ranges-of-partial-computable-functions-are-ce`, and `thm-infinite-ce-sets-have-computable-injective-enumerations`, and also refreshed the downstream `def-distinguishing-word` citation quotes in `cor-distinguishable-prefix-nonregularity-criterion` and `ex-distinguishable-prefix-nonregularity-criterion`.

## Per-page verdicts

- `myhill-nerode-theory-and-dfa-minimization`: pass after the repairs above. The definitions, proofs, and page summary now agree with the opened dependencies and the claimed minimality route.
- `myhill-nerode-theory-and-dfa-minimization-examples`: pass. I rechecked the quotient example, the distinguishable-prefix example, and the pumping counterexample against the A-page repairs; no B-page-body edit was needed.
- `decidable-recognizable-and-enumerable-languages`: pass after the repairs above. The encoded-set arguments now respect the fixed decoders and no longer smuggle in an enumeration of an arbitrary `X`.
- `decidable-recognizable-and-enumerable-languages-examples`: pass. The recognizer example, machine-code example, and looping recognizer counterexample remain consistent with the repaired A-page statements.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-distinguishing-word.md items/thm-minimal-dfa-is-unique-up-to-pointed-isomorphism.md items/thm-table-filling-minimization-algorithm.md items/thm-domains-and-ranges-of-partial-computable-functions-are-ce.md items/thm-infinite-ce-sets-have-computable-injective-enumerations.md`
  Result: all five files were already in canonical flow after the edits.
- `node tools/regen-contract-entries.mjs research/frontier-27-batch-9.proof-contracts.json thm-minimal-dfa-is-unique-up-to-pointed-isomorphism thm-table-filling-minimization-algorithm thm-domains-and-ranges-of-partial-computable-functions-are-ce thm-infinite-ce-sets-have-computable-injective-enumerations cor-distinguishable-prefix-nonregularity-criterion ex-distinguishable-prefix-nonregularity-criterion`
  Result: all six affected entries regenerated cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-distinguishing-word.md items/thm-minimal-dfa-is-unique-up-to-pointed-isomorphism.md items/thm-table-filling-minimization-algorithm.md items/thm-domains-and-ranges-of-partial-computable-functions-are-ce.md items/thm-infinite-ce-sets-have-computable-injective-enumerations.md`
  Result: `4 checked, 0 failing`; the four proof-bearing edited items passed after I adopted precheck's canonical step numbering.
- `node tools/tsx-run.mjs tools/precheck.mts <all 29 proof-bearing batch-9 items>`
  Result: `29 checked, 0 failing`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: exit `0`; only the repository's standing `redundant-prereq` advisories appeared, ending with the usual `OK` summary.
- `node tools/content-policy.mjs research/frontier-27-batch-9.pages.json`
  Result: `37 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-27-batch-9.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 29/29 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-27-batch-9.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-27-batch-9.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions.
- `git diff --check -- items/def-distinguishing-word.md items/thm-minimal-dfa-is-unique-up-to-pointed-isomorphism.md items/thm-table-filling-minimization-algorithm.md items/thm-domains-and-ranges-of-partial-computable-functions-are-ce.md items/thm-infinite-ce-sets-have-computable-injective-enumerations.md research/frontier-27-batch-9.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
