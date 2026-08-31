# frontier-26 reader-10 report

## Opened scope

Pages opened:

- `library/computability-theory/regular-expressions-and-kleenes-theorem.md`
- `library/computability-theory/regular-expressions-and-kleenes-theorem-examples.md`
- `library/computability-theory/context-free-pumping-ogden-and-parsing.md`
- `library/computability-theory/context-free-pumping-ogden-and-parsing-examples.md`

Assigned items opened:

- `regular-expressions-and-kleenes-theorem`: `def-regular-expression-syntax`, `def-regular-expression-denotation`, `lem-denotation-is-structurally-well-defined`, `thm-regular-expression-to-epsilon-nfa`, `def-generalized-nfa`, `def-gnfa-state-elimination`, `lem-state-elimination-preserves-path-language`, `thm-dfa-to-regular-expression`, `thm-kleenes-theorem`, `thm-closure-under-homomorphic-image`, `thm-closure-under-inverse-homomorphism`, `thm-closure-under-left-and-right-quotient`, `def-regular-language-decision-problems`, `thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable`, `fs-regular-expression-syntax-is-its-denoted-language`, `fs-state-elimination-has-a-unique-output-expression`
- `regular-expressions-and-kleenes-theorem-examples`: `ex-regular-expression-to-epsilon-nfa`, `ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable`, `cex-regular-expression-syntax-is-its-denoted-language`
- `context-free-pumping-ogden-and-parsing`: `lem-height-and-yield-bound-for-cnf-trees`, `thm-pumping-lemma-for-context-free-languages`, `def-marked-position-decomposition`, `thm-ogdens-lemma`, `thm-cfls-are-not-closed-under-intersection`, `cor-cfls-are-not-closed-under-complement`, `thm-cfls-are-closed-under-reversal`, `def-cyk-table-and-span-variable`, `lem-cyk-table-invariant`, `thm-cyk-membership-algorithm`, `cor-cfl-membership-is-decidable`, `thm-cfg-emptiness-and-finiteness-are-decidable`, `def-cfg-equivalence-and-ambiguity-problems`, `fs-the-cfl-pumping-lemma-characterizes-cfls`, `fs-cyk-needs-no-normal-form-preprocessing`, `fs-cfg-equivalence-is-decidable-by-normalization`
- `context-free-pumping-ogden-and-parsing-examples`: `ex-pumping-lemma-for-context-free-languages`, `ex-cfg-emptiness-and-finiteness-are-decidable`, `cex-the-cfl-pumping-lemma-characterizes-cfls`

Dependency items opened:

- automata/language layer: `def-computation-alphabet-and-word-convention`, `def-language-over-an-alphabet`, `def-language-boolean-operations`, `def-language-concatenation-powers-and-kleene-star`, `def-deterministic-finite-automaton`, `def-dfa-acceptance-and-recognized-language`, `def-extended-dfa-transition-function`, `def-nfa-with-epsilon-moves`, `def-nfa-acceptance-and-recognized-language`, `def-regular-language-by-dfa-recognition`, `thm-subset-construction-preserves-language`, `cor-dfas-and-nfas-recognize-the-same-languages`, `thm-product-dfa-for-union-and-intersection`, `thm-complementing-accept-states-complements-the-language`, `def-alphabet-homomorphism-and-induced-word-map`
- CFG/CNF layer: `def-context-free-grammar`, `def-language-generated-by-a-cfg`, `def-parse-tree-and-yield`, `def-chomsky-normal-form`, `def-one-step-and-reflexive-transitive-derivation`, `thm-chomsky-normal-form`, `thm-derivation-parse-tree-correspondence`, `thm-elimination-of-useless-symbols`, `thm-elimination-of-epsilon-productions`, `thm-elimination-of-unit-productions`, `def-word-and-language-reversal`, `thm-cfl-closure-under-union-concatenation-star-and-homomorphism`, `def-ambiguity-and-inherent-ambiguity`
- numeric dependency: `def-nat-power`

External sources opened because the current items relied on source-trail facts rather than internal derivations:

- Aho Lecture 10: `https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html`
- Aho Lecture 11: `https://www.cs.columbia.edu/~aho/cs3261/Lectures/L11-Properties_of_CFLs.html`
- Cunningham Chapter 8: `https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html`
- CS StackExchange witness note: `https://cs.stackexchange.com/questions/12041/example-of-a-non-context-free-language-that-nonetheless-can-be-pumped`
- ROIFE Ogden note: `https://roife.github.io/posts/formal-languages-and-automata-06/`

## Repairs

1. `items/lem-state-elimination-preserves-path-language.md`
   Rewrote the forward and reverse directions so they compress and expand arbitrary paths through the eliminated state `r`, rather than only a single first-visit/final-exit pattern.

2. `items/lem-height-and-yield-bound-for-cnf-trees.md`
   Corrected the base case. When the parse-tree height is `1`, the root can only be the variable leaf for the exceptional `S -> epsilon` rule; it cannot yield a one-letter word.

3. `items/thm-pumping-lemma-for-context-free-languages.md`
   Repaired the pumping-length choice and long-path argument. The proof now uses `p = 2^m + 1`, which actually forces a repeated variable on some root-to-leaf path.

4. `items/def-marked-position-decomposition.md`
   Aligned admissibility with the standard Ogden condition from the opened source trail: `vx` must contain at least one marked position; the previous version incorrectly required marked positions in both `v` and `x`.

5. `items/thm-ogdens-lemma.md`
   Repaired the theorem to use the CFG-to-CNF route, the standard admissibility condition, and the branch-point halving argument with `p = 2^{|V|+1}`.

6. `research/frontier-26-batch-10.proof-contracts.json`
   Synchronized the proof contracts for `lem-state-elimination-preserves-path-language`, `lem-height-and-yield-bound-for-cnf-trees`, `thm-pumping-lemma-for-context-free-languages`, and `thm-ogdens-lemma`.

No stale `verification.judge` block had to be removed: none of the edited batch-10 items carried one.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts items/def-marked-position-decomposition.md items/lem-height-and-yield-bound-for-cnf-trees.md items/thm-pumping-lemma-for-context-free-languages.md items/lem-state-elimination-preserves-path-language.md items/thm-ogdens-lemma.md`
  Result: reflow changed `lem-height-and-yield-bound-for-cnf-trees` and `lem-state-elimination-preserves-path-language`; the other three items were already single-line compliant.

- `node tools/tsx-run.mjs tools/precheck.mts items/def-marked-position-decomposition.md items/lem-height-and-yield-bound-for-cnf-trees.md items/thm-pumping-lemma-for-context-free-languages.md items/lem-state-elimination-preserves-path-language.md items/thm-ogdens-lemma.md`
  Result: `PASS` for the four proved items. The edited definition remains `verification.precheck: n/a`, so it is not part of the checked set.

- `node tools/citecheck.mjs items/lem-height-and-yield-bound-for-cnf-trees.md items/thm-pumping-lemma-for-context-free-languages.md items/lem-state-elimination-preserves-path-language.md items/thm-ogdens-lemma.md`
  Result: `OK — every recognised elementary move cites a home that states it.`

- `node tools/depcheck.mjs --quiet`
  Result: fails for unrelated pre-existing repo-wide errors outside batch 10. The live errors are `items/ex-the-tautological-line-bundle-over-real-projective-space.md`, `items/cex-an-acyclic-noncontractible-cone.md`, `items/fs-an-acyclic-mapping-cone-is-contractible.md`, and two `justification-backward` errors in `items/def-l-p-space-as-a-quotient-by-null-functions.md`. I left them untouched because they are outside the assigned repair scope.

## Page verdicts

- `regular-expressions-and-kleenes-theorem`: pass after repair
- `regular-expressions-and-kleenes-theorem-examples`: pass
- `context-free-pumping-ogden-and-parsing`: pass after repair
- `context-free-pumping-ogden-and-parsing-examples`: pass

## Uneditable defects

None remaining in the assigned pages, assigned items, or dependency items opened for this review.

## Blockers

- No batch-local blocker remains.
- Repo-wide `depcheck` is still red, but only because of unrelated existing defects outside batch 10.
