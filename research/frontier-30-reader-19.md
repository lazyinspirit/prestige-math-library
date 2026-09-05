# frontier-30 reader-19 report

Date: 2026-09-04.
Run: `frontier-30`
Batch: `19`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-dispatch/reader-reader-19.prompt.md`, `research/frontier-30-batch-19.pages.json`, `research/frontier-30-batch-19.coverage.json`, `research/frontier-30-batch-19.proof-contracts.json`, `research/frontier-30-batch-19.notes.md`, and the live controller state via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Live-state note: `.autopilot` currently reports `frontier-23` as the running controller state, not `frontier-30`. I therefore treated the named `frontier-30` dispatch prompt and batch-19 artifacts as the scope authority for this reader task.
- Assigned pages: `library/computability-theory/post-correspondence-and-language-undecidability.md`, `library/computability-theory/post-correspondence-and-language-undecidability-examples.md`, `library/computability-theory/acceptable-numberings-smn-and-the-recursion-theorem.md`, and `library/computability-theory/acceptable-numberings-smn-and-the-recursion-theorem-examples.md`.
- Assigned A-page items: `def-post-correspondence-problem`, `def-modified-post-correspondence-problem`, `lem-computation-history-domino-encoding`, `thm-modified-pcp-is-undecidable`, `lem-modified-pcp-reduces-to-pcp`, `thm-post-correspondence-is-undecidable`, `prop-post-correspondence-is-recognizable`, `thm-cfg-intersection-emptiness-is-undecidable`, `thm-cfg-universality-is-undecidable`, `thm-cfg-equivalence-is-undecidable`, `thm-cfg-ambiguity-is-undecidable`, `def-chomsky-hierarchy`, `thm-proper-inclusions-in-the-chomsky-hierarchy`, `fs-pcp-allows-symbol-reordering-within-dominoes`, `fs-two-decidable-cfls-have-decidable-intersection-emptiness`, `def-numbering-of-partial-computable-functions`, `def-universal-and-acceptable-numbering`, `prop-fixed-machine-coding-is-acceptable`, `def-parameter-specialization-function`, `thm-smn-parameter-theorem`, `cor-effective-program-specialization`, `def-computable-program-transformer`, `lem-self-reference-construction-from-smn`, `thm-kleenes-second-recursion-theorem`, `thm-recursion-theorem-with-parameters`, `def-productive-and-creative-set`, `thm-nonhalting-is-productive-and-halting-is-creative`, `thm-myhill-isomorphism-theorem-for-creative-sets`, `prop-acceptable-numberings-are-computably-intertranslatable`, `fs-recursion-theorem-needs-source-file-access`, and `fs-program-indices-are-unique`.
- Assigned B-page items: `ex-modified-pcp-is-undecidable`, `ex-proper-inclusions-in-the-chomsky-hierarchy`, `cex-pcp-allows-symbol-reordering-within-dominoes`, `ex-smn-parameter-theorem`, `ex-acceptable-numberings-are-computably-intertranslatable`, and `cex-recursion-theorem-needs-source-file-access`.
- Dependency closure opened on disk for verification: `def-effective-encoding-of-turing-machines`, `def-halting-computation-and-divergence`, `prop-valid-computation-histories-are-decidable`, `def-computable-many-one-reduction`, `thm-machine-acceptance-is-undecidable`, `thm-many-one-reductions-transfer-decidability-and-recognizability`, `def-language-generated-by-a-cfg`, `def-cfg-equivalence-and-ambiguity-problems`, `def-ambiguity-and-inherent-ambiguity`, `def-regular-language-by-dfa-recognition`, `def-language-recognized-and-decided`, `thm-pumping-lemma-for-regular-languages`, `thm-pumping-lemma-for-context-free-languages`, `cor-cfl-membership-is-decidable`, `thm-cfls-are-not-closed-under-intersection`, `thm-decidable-languages-are-closed-under-boolean-operations`, `thm-machine-acceptance-is-ce-complete`, `def-computable-and-partial-computable-function`, `def-partial-function-computed-by-a-machine`, `def-decidable-and-recognizable-language`, `thm-partial-recursive-iff-turing-computable`, `lem-machine-encoding-is-injective-and-decodable`, `def-kleene-t-predicate-and-output-function`, `thm-kleene-normal-form`, and `def-natural-number-coding-of-finite-sequences`.

## Confirmed defects and edits

1. Repaired `items/def-universal-and-acceptable-numbering.md`.
   The item used the sequence-code notation without naming its dependency and left the residual-input convention implicit. I added the missing dependency on `def-natural-number-coding-of-finite-sequences` and made the residual unary-input convention explicit.
2. Repaired `items/prop-fixed-machine-coding-is-acceptable.md`.
   The old proof established universality and hard-wiring but never proved that the coded-machine family is actually a numbering of all partial computable unary functions. I inserted the missing relabeling argument before the universality step and aligned the later steps to that repaired structure.
3. Repaired `items/def-parameter-specialization-function.md`.
   The old definition used flat tuple codes, which was incompatible with the page's binary hard-wiring operation from acceptability. I replaced it with the recursively nested input coding `\operatorname{Inp}_n`, so `s_m^n` now matches the actual iterated specialization mechanism.
4. Repaired `items/thm-smn-parameter-theorem.md`.
   The old induction silently identified `\ulcorner a,\ulcorner b_1,\dots,b_n\urcorner\urcorner` with the flat code `\ulcorner a,b_1,\dots,b_n\urcorner`, which is false for the chosen coding. I rewrote the inductive step to use the repaired `\operatorname{Inp}_n` convention.
5. Repaired `items/thm-recursion-theorem-with-parameters.md`.
   The old proof treated the specialized triple input as one flat sequence code. I corrected the chosen-index clause and the fixed-point identity to the nested code `\ulcorner a,\ulcorner r,x\urcorner_{\mathrm{seq}}\urcorner_{\mathrm{seq}}`, matching the repaired `s_2^1` semantics.
6. Repaired `items/thm-nonhalting-is-productive-and-halting-is-creative.md`.
   The old statement and proof were overgeneralized to an arbitrary numbering, but the construction actually relied on the fixed machine coding and its injective decoder. I restricted the theorem to the fixed machine-coding acceptable numbering and repaired the c.e./productive-function steps to cite that concrete setup honestly.
7. Repaired `items/thm-myhill-isomorphism-theorem-for-creative-sets.md`.
   The old proof again treated the fixed machine-coding argument as if it worked for an arbitrary numbering, and its one-one fixed-point reduction was under-justified. I restricted the theorem to the fixed machine-coding numbering and rewrote the `K \le_1 C` step so the one-one property comes from the explicit parameter-specialization construction used on this page.
8. Repaired `items/fs-program-indices-are-unique.md`.
   The old refutation tried to force two distinct indices out of `s_1^1`, but that distinctness is not guaranteed for an arbitrary acceptable numbering. I replaced it with the clean recursion-theorem witness: the transformer `F(e)=e+1` yields a fixed point `e` with `\varphi_e=\varphi_{e+1}`.
9. Repaired `items/ex-acceptable-numberings-are-computably-intertranslatable.md`.
   The old example defined `(\beta_j)` only on pair-coded indices and gave a partial back-translation. I made the numbering total on all indices via a decoder-projection `\pi(j)` and repaired the translator `t_{\beta\to\alpha}` accordingly.
10. Repaired `items/ex-proper-inclusions-in-the-chomsky-hierarchy.md`.
    The old example named the specific witness `L_{abc}` without any local proof or dependency supporting that choice. I added the missing pumping-lemma and `A_{TM}` dependencies and wrote the direct witness checks for all three containments.
11. Updated `research/frontier-30-batch-19.proof-contracts.json`.
    I aligned the contract entries for `prop-fixed-machine-coding-is-acceptable`, `thm-smn-parameter-theorem`, `thm-recursion-theorem-with-parameters`, `thm-nonhalting-is-productive-and-halting-is-creative`, `thm-myhill-isomorphism-theorem-for-creative-sets`, `fs-program-indices-are-unique`, `ex-acceptable-numberings-are-computably-intertranslatable`, and `ex-proper-inclusions-in-the-chomsky-hierarchy` with the repaired current text.

No repaired item carried a `verification.judge` block, so there was no stale judge record to remove.

## Per-page verdicts

- `post-correspondence-and-language-undecidability`: pass. I re-read the A-page summary, all fifteen page items, and the opened dependency closure; no defect remained after the independent read.
- `post-correspondence-and-language-undecidability-examples`: pass after the `ex-proper-inclusions-in-the-chomsky-hierarchy` repair. No B-page prose edit was needed.
- `acceptable-numberings-smn-and-the-recursion-theorem`: pass after the eight A-page item repairs above. The current page summary still matches the repaired item spine.
- `acceptable-numberings-smn-and-the-recursion-theorem-examples`: pass after the `ex-acceptable-numberings-are-computably-intertranslatable` repair. No B-page prose edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/prop-fixed-machine-coding-is-acceptable.md items/thm-smn-parameter-theorem.md items/thm-recursion-theorem-with-parameters.md items/thm-nonhalting-is-productive-and-halting-is-creative.md items/thm-myhill-isomorphism-theorem-for-creative-sets.md items/fs-program-indices-are-unique.md items/ex-acceptable-numberings-are-computably-intertranslatable.md`
  Result: all 7 repaired proof-bearing items were already single-line clean; `reflow` reported them unchanged.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-proper-inclusions-in-the-chomsky-hierarchy.md`
  Result: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-fixed-machine-coding-is-acceptable.md items/thm-smn-parameter-theorem.md items/thm-recursion-theorem-with-parameters.md items/thm-nonhalting-is-productive-and-halting-is-creative.md items/thm-myhill-isomorphism-theorem-for-creative-sets.md items/fs-program-indices-are-unique.md items/ex-acceptable-numberings-are-computably-intertranslatable.md`
  Result: `7 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-proper-inclusions-in-the-chomsky-hierarchy.md`
  Result: `1 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts` over the remaining proof-bearing assigned batch-19 items
  Result: `21 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-19.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 29/29 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-19.proof-contracts.json`
  Result: `66` citations over `29` items, with no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-30-batch-19.pages.json`
  Result: `37 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-19.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: `232` rows, `209` marked `not_applicable`, and no contradicted dispositions.
- `node tools/rendercheck.mjs items/def-universal-and-acceptable-numbering.md items/prop-fixed-machine-coding-is-acceptable.md items/def-parameter-specialization-function.md items/thm-smn-parameter-theorem.md items/thm-recursion-theorem-with-parameters.md items/thm-nonhalting-is-productive-and-halting-is-creative.md items/thm-myhill-isomorphism-theorem-for-creative-sets.md items/fs-program-indices-are-unique.md items/ex-acceptable-numberings-are-computably-intertranslatable.md items/ex-proper-inclusions-in-the-chomsky-hierarchy.md library/computability-theory/post-correspondence-and-language-undecidability.md library/computability-theory/post-correspondence-and-language-undecidability-examples.md library/computability-theory/acceptable-numberings-smn-and-the-recursion-theorem.md library/computability-theory/acceptable-numberings-smn-and-the-recursion-theorem-examples.md`
  Result: all `14` files passed YAML and KaTeX checks.
- `git diff --check -- items/def-universal-and-acceptable-numbering.md items/prop-fixed-machine-coding-is-acceptable.md items/def-parameter-specialization-function.md items/thm-smn-parameter-theorem.md items/thm-recursion-theorem-with-parameters.md items/thm-nonhalting-is-productive-and-halting-is-creative.md items/thm-myhill-isomorphism-theorem-for-creative-sets.md items/fs-program-indices-are-unique.md items/ex-acceptable-numberings-are-computably-intertranslatable.md items/ex-proper-inclusions-in-the-chomsky-hierarchy.md research/frontier-30-batch-19.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- No mathematical blocker remains. Operationally, the live `.autopilot` state is still `frontier-23`, so this report certifies only the named `frontier-30` batch-19 files that were opened and repaired above.
