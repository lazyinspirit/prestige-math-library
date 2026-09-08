# Reader report — phase-2-wave-1 batch 13

Date: 2026-09-08.

## Scope opened

Read the current batch manifest, proof contracts, and all assigned prose and
item bodies:

- A page `finite-automata-transition-and-determinisation-interfaces` and
  items `def-epsilon-nfa-word-transition`,
  `thm-subset-construction-reachability-invariant`, and
  `prop-deterministic-automata-are-special-nondeterministic-automata`.
- B page `finite-automata-transition-and-determinisation-interfaces-examples`
  and items `ex-epsilon-closure-and-word-transition-on-a-three-state-nfa`,
  `ex-subset-construction-for-an-epsilon-nfa`, and
  `cex-omitting-epsilon-closure-breaks-determinisation`.
- A page `turing-machine-configuration-boundary-interface` and item
  `def-turing-machine-initial-and-halting-configuration-interface`.
- B page `turing-machine-configuration-boundary-interface-examples` and items
  `ex-initial-configuration-on-empty-input` and
  `ex-accepting-and-rejecting-configurations-are-machine-relative`.

For the claims actually used, opened the direct suppliers:
`def-computation-alphabet-and-word-convention`, `def-power-set`,
`def-indexed-union-and-intersection`, `def-finite-cardinality`,
`thm-subset-of-a-finite-set`, `thm-recursion`,
`thm-induction-principle`, `def-language-over-an-alphabet`,
`def-cartesian-product`, `def-axiom-schema-of-separation`,
`def-deterministic-finite-automaton`,
`thm-existence-and-uniqueness-of-extended-dfa-transition`,
`def-dfa-acceptance-and-recognized-language`,
`cor-cardinality-of-the-power-set`, `def-function`,
`def-the-set-of-functions-from-one-set-to-another`, and
`def-natural-numbers`.

Also opened the five cited targets: Gallier, *Introduction to the Theory of
Computation*, §§3.3–3.5 (PDF pp. 28–35); Aho, Lecture 3 §§1–2; Savage,
*Models of Computation*, §5.1 / Definition 5.1.1; Watrous, Lecture 12,
§12.1 / Definition 12.1; and MIT 18.404J Lecture 5, slides 8–10. Their
models support the cited NFA closure/subset route and the recorded Turing
machine variants. The local choices that differ from a source are explicitly
identified as conventions rather than claimed equivalences.

## Mathematical reading and verdicts

| Page | Verdict | Basis |
| --- | --- | --- |
| `finite-automata-transition-and-determinisation-interfaces` | pass | Finite saturation reaches a fixed point by stage `|Q|`; leastness, path interpretation, closure laws, and word recursion are compatible. The subset-DFA invariant correctly begins at `E(S)`, so the empty-word case is sound. The DFA embedding has empty epsilon transitions and the singleton induction is correct. |
| `finite-automata-transition-and-determinisation-interfaces-examples` | pass | The three-state closure values, all six word calculations, subset table, reachability induction, and the four unreachable subsets were recomputed. The two defective determinisations are separately refuted by the stated empty-word and one-letter witnesses. |
| `turing-machine-configuration-boundary-interface` | pass | The tuple's domain excludes both halting states, the initial tape has support exactly the finite input domain, and pairwise-distinct designated states make the initial configuration nonhalting and the outcome predicates disjoint. Empty input and the left boundary are stated without importing a run theorem. |
| `turing-machine-configuration-boundary-interface-examples` | pass | Both entries give total maps on their two-pair nonhalting domains. The all-blank empty-input tape is finite-support, and swapping the two outcome designations changes the named outcome of the same valid triple exactly as claimed. |

No false claim, omitted hypothesis, invalid inference, type error, defective
witness/computation, inaccurate citation, or overstrong title was confirmed.

## Edits and blockers

No content or contract edit was made. Consequently no reflow was required and
no `verification.judge` record was removed. There is no batch-local blocker and
no uneditable finding to route onward.

## Focused checks

- Explicit nine-item `precheck`: 9 checked, 0 failing.
- `proof-contract ... --strict`: 9/9 checked, 0 errors, 0 warnings.
- `content-policy` on the batch manifest: 9 scoped items, 0 errors, 0 warnings.
- Explicit nine-item/four-page `rendercheck`: 13 files passed.
