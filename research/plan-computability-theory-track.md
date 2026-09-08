# Computability theory track: automata, computability, complexity, and algorithmic randomness

Run `subjects-01`, track `computability-theory`, wave 1. Owner commission 2026-08-28: build a dependency-safe prose scaffold for a mathematically rigorous theory-of-computation sequence.

This file is a **prose scaffold only**. It authors no item, changes no live plan, and runs no build or audit gate. Relative labels `TC-1`, `TC-2`, ... control dependency order; the orchestrator assigns absolute page orders. Every B page has id `<A-page-id>-examples`, requires only its A page, and is a leaf.

Every theorem in the mathematical inventory receives a complete proof spine. A result too large for this commission is omitted from the inventory and named only in the scope boundary; no mathematical item delegates its proof elsewhere.

---

## 0. Summary for the orchestrator

**Track `computability-theory`, wave 1, run `subjects-01`; prose scaffold complete.** Thirty-seven dependency-ordered A/B pairs are proposed. Every A inventory is below 60 items.

### Pairs scaffolded

| label | proposed A-page id | block | exact A-page items, including `fs-` |
|---|---|---|---:|
| `TC-1` | `formal-languages-encodings-and-decision-problems` | foundations | 18 |
| `TC-2` | `deterministic-finite-automata-and-regular-languages` | regular languages | 15 |
| `TC-3` | `nondeterministic-finite-automata-and-subset-construction` | regular languages | 15 |
| `TC-4` | `regular-expressions-and-kleenes-theorem` | regular languages | 16 |
| `TC-5` | `myhill-nerode-theory-and-dfa-minimization` | regular languages | 16 |
| `TC-6` | `context-free-grammars-and-normal-forms` | context-free languages | 18 |
| `TC-7` | `pushdown-automata-and-context-free-languages` | context-free languages | 16 |
| `TC-8` | `context-free-pumping-ogden-and-parsing` | context-free languages | 16 |
| `TC-9` | `turing-machines-configurations-and-computation` | computability | 16 |
| `TC-10` | `robust-machine-models-and-universal-computation` | computability | 16 |
| `TC-11` | `decidable-recognizable-and-enumerable-languages` | computability | 15 |
| `TC-12` | `diagonalization-and-the-halting-problem` | computability | 15 |
| `TC-13` | `computable-reductions-and-rices-theorem` | computability | 16 |
| `TC-14` | `post-correspondence-and-language-undecidability` | computability | 15 |
| `TC-15` | `primitive-recursive-and-partial-computable-functions` | computability | 16 |
| `TC-16` | `acceptable-numberings-smn-and-the-recursion-theorem` | computability | 16 |
| `TC-17` | `the-arithmetical-hierarchy-and-posts-theorem` | computability | 18 |
| `TC-18` | `oracle-computability-the-jump-and-turing-degrees` | computability | 18 |
| `TC-19` | `resource-bounds-and-machine-invariance` | complexity | 14 |
| `TC-20` | `p-np-conp-and-polynomial-reductions` | complexity | 17 |
| `TC-21` | `the-cook-levin-theorem` | complexity | 16 |
| `TC-22` | `classical-np-completeness-reductions` | complexity | 17 |
| `TC-23` | `space-complexity-savitch-and-tqbf` | complexity | 17 |
| `TC-24` | `time-and-space-hierarchy-theorems` | complexity | 15 |
| `TC-25` | `logarithmic-space-nl-and-reachability` | complexity | 17 |
| `TC-26` | `boolean-circuits-and-nonuniform-complexity` | complexity | 16 |
| `TC-27` | `the-polynomial-hierarchy-and-relativization` | complexity | 16 |
| `TC-28` | `randomized-complexity-and-amplification` | complexity | 17 |
| `TC-29` | `counting-complexity-and-sharpp` | complexity | 17 |
| `TC-30` | `interactive-proof-systems-and-public-coins` | advanced complexity | 16 |
| `TC-31` | `arithmetization-and-the-sum-check-protocol` | advanced complexity | 17 |
| `TC-32` | `the-ip-equals-pspace-theorem` | advanced complexity | 16 |
| `TC-33` | `expander-graphs-and-constraint-graphs` | advanced complexity | 17 |
| `TC-34` | `gap-amplification-and-assignment-testing` | advanced complexity | 19 |
| `TC-35` | `alphabet-reduction-and-the-pcp-theorem` | advanced complexity | 18 |
| `TC-36` | `approximation-algorithms-and-gap-reductions` | advanced complexity | 18 |
| `TC-37` | `kolmogorov-complexity-and-algorithmic-randomness` | algorithmic information | 22 |

### Full texts and self-containment decision

Five complete primary textbooks or book-length manuscripts were read at full-text endpoints: Sipser, Savage, Gallier, Arora--Barak, and the Open Logic Project. Zimmermann, Simpson, and Williamson--Shmoys add three more complete book-length checks. Complete MIT, Cornell, Cambridge, and approximation lecture notes and full research/arXiv papers are recorded in §38. Sources were compared one at a time; §38 records each pass and its effect.

The published library supplies set theory, functions and quotients, natural-number recursion, countability, finite counting, words, graphs, finite fields, finite-dimensional spectral theory, and finite probability. This track cites those pages rather than re-minting them. The prefix automaton already published for word enumeration is treated as a specialised example, not as the general DFA definition.

The self-containment rule is strict: `IP=PSPACE` is preceded by protocol semantics, game values, finite-field arithmetization, multilinearization, root bounds, sum-check, degree control, and soundness; PCP is preceded by explicit expanders, constraint graphs, regularization, powering, codes, testing, composition, alphabet reduction, and parameter-controlled iteration. Approximation hardness follows only after that proof spine.

### Scope boundary

Priority constructions, DPRM, Reingold's algorithm, Toda's theorem, strong circuit lower bounds, cryptography, quantum computation, communication/query/streaming complexity, compiler engineering, and computable analysis are specialist continuations. They are not mathematical items here. Church--Turing is labelled a thesis, and unresolved class separations are labelled open problems.

---

## 1. Why this track exists

The library has the mathematical foundations needed to make computation rigorous, but lacks the layer turning finite descriptions into mathematical objects: languages as sets of words, machines as transition systems, computations as paths, algorithms as total effective procedures, and complexity as a resource bound in encoded input length. This scaffold builds that layer from automata through recursion theory and modern complexity.

The order is phase-stratified. Finite automata precede grammars; explicit encodings and universal simulation precede diagonalization; computability precedes resource bounds; Cook--Levin precedes completeness reductions; finite probability precedes randomized classes; and algebraic/spectral prerequisites precede the full interactive-proof and PCP proofs.

## 2. Convention decisions

| issue | library convention |
|---|---|
| language | a subset of `\Sigma^*`, with alphabet retained as ambient data |
| automata | transition functions are extended recursively to words and proved unique |
| recognition | existential branch acceptance for nondeterminism; rejection differs from divergence |
| syntax/semantics | regular expressions, formulas, grammars, and programs are syntax; denotation is a separately defined map |
| reduction | the exact kind (computable, polynomial, logspace, or Turing) is always printed |
| encoding | injective, effectively decodable, with malformed-code behavior fixed |
| complexity | worst-case resource as a function of encoded input length; constructibility stated where needed |
| circuits | basis, fan-in, size, depth, uniformity, and advice are explicit |
| randomness | finite random tape and completeness/soundness inequalities are part of the definition |
| Kolmogorov complexity | fixed optimal machine; invariance only up to additive constants |

## 3. Dependency order and placement

| label | exact page-level `requires` |
|---|---|
| `TC-1` | `linear-recurrences-and-rational-generating-functions`, `relations-functions-and-quotients`, `countability-and-uncountability` |
| `TC-2` | `formal-languages-encodings-and-decision-problems`, `finite-counting-and-binomial-coefficients` |
| `TC-3` | `deterministic-finite-automata-and-regular-languages`, `the-zfc-axioms-and-basic-set-constructions` |
| `TC-4` | `nondeterministic-finite-automata-and-subset-construction` |
| `TC-5` | `regular-expressions-and-kleenes-theorem`, `relations-functions-and-quotients` |
| `TC-6` | `formal-languages-encodings-and-decision-problems`, `ramsey-theory` |
| `TC-7` | `context-free-grammars-and-normal-forms` |
| `TC-8` | `pushdown-automata-and-context-free-languages`, `finite-counting-and-binomial-coefficients` |
| `TC-9` | `formal-languages-encodings-and-decision-problems`, `graphs-walks-and-connectivity` |
| `TC-10` | `turing-machines-configurations-and-computation` |
| `TC-11` | `robust-machine-models-and-universal-computation`, `countability-and-uncountability` |
| `TC-12` | `decidable-recognizable-and-enumerable-languages` |
| `TC-13` | `diagonalization-and-the-halting-problem` |
| `TC-14` | `computable-reductions-and-rices-theorem`, `context-free-pumping-ogden-and-parsing` |
| `TC-15` | `robust-machine-models-and-universal-computation`, `construction-of-the-natural-numbers` |
| `TC-16` | `primitive-recursive-and-partial-computable-functions`, `computable-reductions-and-rices-theorem` |
| `TC-17` | `acceptable-numberings-smn-and-the-recursion-theorem` |
| `TC-18` | `the-arithmetical-hierarchy-and-posts-theorem` |
| `TC-19` | `robust-machine-models-and-universal-computation`, `the-logarithm-and-general-powers` |
| `TC-20` | `resource-bounds-and-machine-invariance` |
| `TC-21` | `p-np-conp-and-polynomial-reductions` |
| `TC-22` | `the-cook-levin-theorem`, `graphs-walks-and-connectivity` |
| `TC-23` | `p-np-conp-and-polynomial-reductions`, `graphs-walks-and-connectivity` |
| `TC-24` | `space-complexity-savitch-and-tqbf`, `diagonalization-and-the-halting-problem` |
| `TC-25` | `space-complexity-savitch-and-tqbf`, `graphs-walks-and-connectivity` |
| `TC-26` | `the-cook-levin-theorem`, `finite-counting-and-binomial-coefficients` |
| `TC-27` | `boolean-circuits-and-nonuniform-complexity`, `space-complexity-savitch-and-tqbf` |
| `TC-28` | `p-np-conp-and-polynomial-reductions`, `finite-probability-spaces-and-random-variables` |
| `TC-29` | `randomized-complexity-and-amplification`, `the-cook-levin-theorem` |
| `TC-30` | `randomized-complexity-and-amplification`, `space-complexity-savitch-and-tqbf` |
| `TC-31` | `interactive-proof-systems-and-public-coins`, `algebraic-extensions-degree-and-finite-fields` |
| `TC-32` | `arithmetization-and-the-sum-check-protocol`, `space-complexity-savitch-and-tqbf` |
| `TC-33` | `boolean-circuits-and-nonuniform-complexity`, `the-spectral-theorem-and-singular-value-decomposition`, `graphs-walks-and-connectivity` |
| `TC-34` | `expander-graphs-and-constraint-graphs`, `the-cook-levin-theorem`, `randomized-complexity-and-amplification` |
| `TC-35` | `gap-amplification-and-assignment-testing`, `algebraic-extensions-degree-and-finite-fields` |
| `TC-36` | `alphabet-reduction-and-the-pcp-theorem`, `classical-np-completeness-reductions`, `finite-counting-and-binomial-coefficients`, `graphs-walks-and-connectivity` |
| `TC-37` | `acceptable-numberings-smn-and-the-recursion-theorem`, `randomized-complexity-and-amplification`, `finite-probability-spaces-and-random-variables` |

No B page is a dependency target.

## 4. Component-provenance code

| code | `provenance.statement` | `provenance.proof` | use |
|---|---|---|---|
| `[LN]` | `literature-derived` | `not-applicable` | definition/notation |
| `[LL]` | `literature-derived` | `literature-derived` | sourced statement and proof |
| `[LA]` | `literature-derived` | `ai-altered` | sourced statement, reorganised proof |
| `[AN]` | `ai-altered` | `not-applicable` | house notation/remark |
| `[AA]` | `ai-altered` | `ai-altered` | adapted example/counterexample |

No mathematical statement is `ai-generated`. Every theorem, proposition, lemma, and corollary has a supplied proof. Examples, counterexamples, remarks, and false statements are not dependency targets.

## 5. Global well-definedness obligations

1. Syntax and denotation are distinct; every inductive syntax has a structural recursion theorem.
2. Every machine and proof object has a finite, injective, effectively decodable encoding.
3. Quotient states/degrees are used only after representative independence.
4. Grammar and automaton transformations prove language equality in both directions.
5. Universal and diagonal arguments distinguish objects, codes, and semantic functions.
6. Reductions are total and prove the membership biconditional with the required resource bound.
7. Machine-invariance results carry explicit overhead; clocks require constructible bounds.
8. Tableau, circuit, formula, and proof encodings have proved polynomial length and decoding time.
9. Randomized and interactive proofs quantify over explicit finite randomness and all adversarial strategies.
10. PCP transformations track size, alphabet, degree, gap, queries, randomness, and uniform construction time.
11. Kolmogorov claims state their machine-dependent additive constant.

## 6. Choice-strength ledger

The baseline is ZF. All local machine, word, formula, graph, code, tableau, and random-tape constructions are finite or explicitly countable. Least representatives use fixed length-lexicographic orders; dovetailing uses a concrete pairing function; finite probability uses finite products. No item requires an unannounced choice principle.

## 7. Page-summary contract

Each A page receives exactly two short summary paragraphs: one for its development and principal theorem, one for what it enables and its external prerequisites. Summaries introduce no mathematical content. B companions receive no authored summary.

## 8. Buildability invariant

Within each A page, items are in proof order. An item may cite only a published item, an earlier item on the same page, or an item on an earlier A page. There are no external-proof landmarks, later-page citations, or B-page targets.

---

# Formal languages and automata

## TC-1. Formal Languages, Encodings, and Decision Problems

**page id** `formal-languages-encodings-and-decision-problems`  
**`requires`** `linear-recurrences-and-rational-generating-functions`, `relations-functions-and-quotients`, `countability-and-uncountability`

### A-page items, in dependency order

1. `def-computation-alphabet-and-word-convention` — **definition** `[LN]`.
2. `lem-computation-words-agree-with-published-finite-words` — **lemma** `[LA]`.
3. `def-language-over-an-alphabet` — **definition** `[LN]`.
4. `def-language-boolean-operations` — **definition** `[LN]`.
5. `def-language-concatenation-powers-and-kleene-star` — **definition** `[LN]`.
6. `lem-language-concatenation-is-associative` — **lemma** `[LL]`.
7. `lem-kleene-star-has-the-expected-least-closure-property` — **lemma** `[LA]`.
8. `def-word-and-language-reversal` — **definition** `[LN]`.
9. `lem-reversal-is-an-involution-and-reverses-concatenation` — **lemma** `[LL]`.
10. `def-alphabet-homomorphism-and-induced-word-map` — **definition** `[LN]`.
11. `lem-induced-word-map-has-the-free-extension-property` — **lemma** `[LL]`.
12. `def-effective-binary-encoding-and-decoder` — **definition** `[LN]`.
13. `lem-finite-tuples-admit-effective-prefix-free-encodings` — **lemma** `[LA]`.
14. `def-decision-search-and-function-problem` — **definition** `[LN]`.
15. `def-instance-size-under-an-encoding` — **definition** `[LN]`.
16. `prop-polynomially-related-encodings-preserve-polynomial-size` — **proposition** `[LA]`.
17. `fs-a-language-is-a-set-of-symbols` — **false statement** `[LN]`.
18. `fs-every-injection-is-an-effective-encoding` — **false statement** `[LN]`.

### B page — `formal-languages-encodings-and-decision-problems-examples`

`ex-language-concatenation-is-associative` `[LL]` · `ex-polynomially-related-encodings-preserve-polynomial-size` `[AA]` · `cex-a-language-is-a-set-of-symbols` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

## TC-2. Deterministic Finite Automata and Regular Languages

**page id** `deterministic-finite-automata-and-regular-languages`  
**`requires`** `formal-languages-encodings-and-decision-problems`, `finite-counting-and-binomial-coefficients`

### A-page items, in dependency order

1. `def-deterministic-finite-automaton` — **definition** `[LN]`.
2. `def-extended-dfa-transition-function` — **definition** `[LN]`.
3. `thm-existence-and-uniqueness-of-extended-dfa-transition` — **theorem** `[LL]`.
4. `lem-extended-dfa-transition-respects-concatenation` — **lemma** `[LL]`.
5. `def-dfa-acceptance-and-recognized-language` — **definition** `[LN]`.
6. `def-regular-language-by-dfa-recognition` — **definition** `[LN]`.
7. `prop-every-finite-language-is-regular` — **proposition** `[LA]`.
8. `thm-product-dfa-for-union-and-intersection` — **theorem** `[LL]`.
9. `cor-regular-languages-are-closed-under-boolean-operations` — **corollary** `[LA]`.
10. `thm-dfa-for-language-difference` — **theorem** `[LA]`.
11. `def-reachable-dfa-state` — **definition** `[LN]`.
12. `lem-removing-unreachable-states-preserves-language` — **lemma** `[LL]`.
13. `prop-published-prefix-automata-are-dfas` — **proposition** `[LA]`.
14. `fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality` — **false statement** `[LN]`.
15. `fs-complementing-a-dfa-complements-its-transition-graph` — **false statement** `[LN]`.

### B page — `deterministic-finite-automata-and-regular-languages-examples`

`ex-extended-dfa-transition-respects-concatenation` `[LL]` · `ex-published-prefix-automata-are-dfas` `[AA]` · `cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

## TC-3. Nondeterministic Finite Automata and Subset Construction

**page id** `nondeterministic-finite-automata-and-subset-construction`  
**`requires`** `deterministic-finite-automata-and-regular-languages`, `the-zfc-axioms-and-basic-set-constructions`

### A-page items, in dependency order

1. `def-nfa-with-epsilon-moves` — **definition** `[LN]`.
2. `def-epsilon-closure-of-a-state-set` — **definition** `[LN]`.
3. `lem-epsilon-closure-is-a-closure-operator` — **lemma** `[LL]`.
4. `def-extended-nfa-transition` — **definition** `[LN]`.
5. `def-nfa-acceptance-and-recognized-language` — **definition** `[LN]`.
6. `prop-every-dfa-is-an-nfa` — **proposition** `[LL]`.
7. `def-subset-construction-dfa` — **definition** `[LN]`.
8. `lem-subset-construction-state-invariant` — **lemma** `[LL]`.
9. `thm-subset-construction-preserves-language` — **theorem** `[LL]`.
10. `cor-dfas-and-nfas-recognize-the-same-languages` — **corollary** `[LA]`.
11. `thm-epsilon-elimination-for-nfas` — **theorem** `[LA]`.
12. `thm-nfa-constructions-for-union-concatenation-and-star` — **theorem** `[LL]`.
13. `prop-subset-construction-can-require-exponentially-many-states` — **proposition** `[LL]`.
14. `fs-an-nfa-accepts-only-if-every-branch-accepts` — **false statement** `[LN]`.
15. `fs-epsilon-is-an-input-symbol` — **false statement** `[LN]`.

### B page — `nondeterministic-finite-automata-and-subset-construction-examples`

`ex-every-dfa-is-an-nfa` `[LL]` · `ex-subset-construction-can-require-exponentially-many-states` `[AA]` · `cex-an-nfa-accepts-only-if-every-branch-accepts` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

## TC-4. Regular Expressions and Kleene's Theorem

**page id** `regular-expressions-and-kleenes-theorem`  
**`requires`** `nondeterministic-finite-automata-and-subset-construction`

### A-page items, in dependency order

1. `def-regular-expression-syntax` — **definition** `[LN]`.
2. `def-regular-expression-denotation` — **definition** `[LN]`.
3. `lem-denotation-is-structurally-well-defined` — **lemma** `[LL]`.
4. `thm-regular-expression-to-epsilon-nfa` — **theorem** `[LL]`.
5. `def-generalized-nfa` — **definition** `[LN]`.
6. `def-gnfa-state-elimination` — **definition** `[LN]`.
7. `lem-state-elimination-preserves-path-language` — **lemma** `[LL]`.
8. `thm-dfa-to-regular-expression` — **theorem** `[LL]`.
9. `thm-kleenes-theorem` — **theorem** `[LL]`.
10. `thm-closure-under-homomorphic-image` — **theorem** `[LA]`.
11. `thm-closure-under-inverse-homomorphism` — **theorem** `[LL]`.
12. `thm-closure-under-left-and-right-quotient` — **theorem** `[LA]`.
13. `def-regular-language-decision-problems` — **definition** `[LN]`.
14. `thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable` — **theorem** `[LL]`.
15. `fs-regular-expression-syntax-is-its-denoted-language` — **false statement** `[LN]`.
16. `fs-state-elimination-has-a-unique-output-expression` — **false statement** `[LN]`.

### B page — `regular-expressions-and-kleenes-theorem-examples`

`ex-regular-expression-to-epsilon-nfa` `[LL]` · `ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable` `[AA]` · `cex-regular-expression-syntax-is-its-denoted-language` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

## TC-5. Myhill--Nerode Theory and DFA Minimization

**page id** `myhill-nerode-theory-and-dfa-minimization`  
**`requires`** `regular-expressions-and-kleenes-theorem`, `relations-functions-and-quotients`

### A-page items, in dependency order

1. `def-right-language-and-equivalent-dfa-states` — **definition** `[LN]`.
2. `lem-state-equivalence-is-a-right-congruence` — **lemma** `[LL]`.
3. `def-quotient-dfa-by-state-equivalence` — **definition** `[LN]`.
4. `lem-quotient-dfa-is-well-defined-and-equivalent` — **lemma** `[LL]`.
5. `def-nerode-equivalence` — **definition** `[LN]`.
6. `lem-nerode-equivalence-is-a-right-congruence` — **lemma** `[LL]`.
7. `lem-dfa-states-refine-nerode-classes` — **lemma** `[LL]`.
8. `thm-myhill-nerode-characterization` — **theorem** `[LL]`.
9. `cor-nerode-classes-give-the-canonical-minimal-dfa` — **corollary** `[LA]`.
10. `thm-minimal-dfa-is-unique-up-to-pointed-isomorphism` — **theorem** `[LA]`.
11. `def-distinguishing-word` — **definition** `[LN]`.
12. `thm-table-filling-minimization-algorithm` — **theorem** `[LL]`.
13. `thm-pumping-lemma-for-regular-languages` — **theorem** `[LL]`.
14. `cor-distinguishable-prefix-nonregularity-criterion` — **corollary** `[LA]`.
15. `fs-the-pumping-lemma-characterizes-regular-languages` — **false statement** `[LN]`.
16. `fs-pumping-quantifiers-may-be-reordered` — **false statement** `[LN]`.

### B page — `myhill-nerode-theory-and-dfa-minimization-examples`

`ex-quotient-dfa-is-well-defined-and-equivalent` `[LL]` · `ex-distinguishable-prefix-nonregularity-criterion` `[AA]` · `cex-the-pumping-lemma-characterizes-regular-languages` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

## TC-6. Context-Free Grammars and Normal Forms

**page id** `context-free-grammars-and-normal-forms`  
**`requires`** `formal-languages-encodings-and-decision-problems`, `ramsey-theory`

### A-page items, in dependency order

1. `def-context-free-grammar` — **definition** `[LN]`.
2. `def-one-step-and-reflexive-transitive-derivation` — **definition** `[LN]`.
3. `def-language-generated-by-a-cfg` — **definition** `[LN]`.
4. `def-leftmost-and-rightmost-derivation` — **definition** `[LN]`.
5. `def-parse-tree-and-yield` — **definition** `[LN]`.
6. `thm-derivation-parse-tree-correspondence` — **theorem** `[LL]`.
7. `def-ambiguity-and-inherent-ambiguity` — **definition** `[LN]`.
8. `def-nullable-generating-and-reachable-variable` — **definition** `[LN]`.
9. `thm-elimination-of-useless-symbols` — **theorem** `[LA]`.
10. `thm-elimination-of-epsilon-productions` — **theorem** `[LL]`.
11. `thm-elimination-of-unit-productions` — **theorem** `[LL]`.
12. `def-chomsky-normal-form` — **definition** `[LN]`.
13. `thm-chomsky-normal-form` — **theorem** `[LL]`.
14. `def-greibach-normal-form` — **definition** `[LN]`.
15. `thm-greibach-normal-form` — **theorem** `[LL]`.
16. `thm-cfl-closure-under-union-concatenation-star-and-homomorphism` — **theorem** `[LL]`.
17. `fs-every-cfl-is-unambiguous` — **false statement** `[LN]`.
18. `fs-cnf-preserves-epsilon-without-an-exception` — **false statement** `[LN]`.

### B page — `context-free-grammars-and-normal-forms-examples`

`ex-elimination-of-useless-symbols` `[LL]` · `ex-cfl-closure-under-union-concatenation-star-and-homomorphism` `[AA]` · `cex-every-cfl-is-unambiguous` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

## TC-7. Pushdown Automata and Context-Free Languages

**page id** `pushdown-automata-and-context-free-languages`  
**`requires`** `context-free-grammars-and-normal-forms`

### A-page items, in dependency order

1. `def-nondeterministic-pushdown-automaton` — **definition** `[LN]`.
2. `def-pda-configuration-and-step` — **definition** `[LN]`.
3. `def-pda-acceptance-by-final-state` — **definition** `[LN]`.
4. `def-pda-acceptance-by-empty-stack` — **definition** `[LN]`.
5. `thm-final-state-and-empty-stack-acceptance-are-equivalent` — **theorem** `[LL]`.
6. `thm-cfg-to-pda-construction` — **theorem** `[LL]`.
7. `def-pda-computation-fragment-variable` — **definition** `[LN]`.
8. `lem-pda-fragment-variables-compose` — **lemma** `[LL]`.
9. `thm-pda-to-cfg-construction` — **theorem** `[LL]`.
10. `thm-pdas-recognize-exactly-the-cfls` — **theorem** `[LL]`.
11. `def-deterministic-pda` — **definition** `[LN]`.
12. `prop-deterministic-cfls-are-unambiguous` — **proposition** `[LA]`.
13. `prop-deterministic-cfls-are-closed-under-complement` — **proposition** `[LL]`.
14. `prop-cfls-are-closed-under-intersection-with-regular-languages` — **proposition** `[LL]`.
15. `fs-every-cfl-is-deterministic-context-free` — **false statement** `[LN]`.
16. `fs-final-state-and-empty-stack-acceptance-are-literally-identical` — **false statement** `[LN]`.

### B page — `pushdown-automata-and-context-free-languages-examples`

`ex-cfg-to-pda-construction` `[LL]` · `ex-cfls-are-closed-under-intersection-with-regular-languages` `[AA]` · `cex-every-cfl-is-deterministic-context-free` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

## TC-8. Context-Free Pumping, Ogden's Lemma, and Parsing

**page id** `context-free-pumping-ogden-and-parsing`  
**`requires`** `pushdown-automata-and-context-free-languages`, `finite-counting-and-binomial-coefficients`

### A-page items, in dependency order

1. `lem-height-and-yield-bound-for-cnf-trees` — **lemma** `[LL]`.
2. `thm-pumping-lemma-for-context-free-languages` — **theorem** `[LL]`.
3. `def-marked-position-decomposition` — **definition** `[LN]`.
4. `thm-ogdens-lemma` — **theorem** `[LL]`.
5. `thm-cfls-are-not-closed-under-intersection` — **theorem** `[LL]`.
6. `cor-cfls-are-not-closed-under-complement` — **corollary** `[LA]`.
7. `thm-cfls-are-closed-under-reversal` — **theorem** `[LL]`.
8. `def-cyk-table-and-span-variable` — **definition** `[LN]`.
9. `lem-cyk-table-invariant` — **lemma** `[LL]`.
10. `thm-cyk-membership-algorithm` — **theorem** `[LL]`.
11. `cor-cfl-membership-is-decidable` — **corollary** `[LA]`.
12. `thm-cfg-emptiness-and-finiteness-are-decidable` — **theorem** `[LL]`.
13. `def-cfg-equivalence-and-ambiguity-problems` — **definition** `[LN]`.
14. `fs-the-cfl-pumping-lemma-characterizes-cfls` — **false statement** `[LN]`.
15. `fs-cyk-needs-no-normal-form-preprocessing` — **false statement** `[LN]`.
16. `fs-cfg-equivalence-is-decidable-by-normalization` — **false statement** `[LN]`.

### B page — `context-free-pumping-ogden-and-parsing-examples`

`ex-pumping-lemma-for-context-free-languages` `[LL]` · `ex-cfg-emptiness-and-finiteness-are-decidable` `[AA]` · `cex-the-cfl-pumping-lemma-characterizes-cfls` `[AA]`.

### Sources and exact locators

- Gallier, relevant Chapters 2--6; Sipser, Chapters 1--2; Kozen, corresponding automata/grammar lectures; Savage, Chapter 4.

**Proof traps:** Syntax and denotation remain separate; every quotient, closure, normal-form conversion, and acceptance convention is proved well-defined before use.

**Forward references: NONE.**

---

# Effective computability and recursion theory

## TC-9. Turing Machines, Configurations, and Computation

**page id** `turing-machines-configurations-and-computation`  
**`requires`** `formal-languages-encodings-and-decision-problems`, `graphs-walks-and-connectivity`

### A-page items, in dependency order

1. `def-deterministic-one-tape-turing-machine` — **definition** `[LN]`.
2. `def-tape-finite-support-convention` — **definition** `[LN]`.
3. `def-turing-machine-configuration` — **definition** `[LN]`.
4. `def-one-step-configuration-relation` — **definition** `[LN]`.
5. `lem-deterministic-nonhalting-configurations-have-unique-successors` — **lemma** `[LL]`.
6. `def-initial-accepting-and-rejecting-configurations` — **definition** `[LN]`.
7. `def-halting-computation-and-divergence` — **definition** `[LN]`.
8. `def-language-recognized-and-decided` — **definition** `[LN]`.
9. `def-partial-function-computed-by-a-machine` — **definition** `[LN]`.
10. `def-multitape-and-nondeterministic-machines` — **definition** `[LN]`.
11. `def-nondeterministic-accepting-computation` — **definition** `[LN]`.
12. `prop-valid-computation-histories-are-decidable` — **proposition** `[LA]`.
13. `def-configuration-graph` — **definition** `[LN]`.
14. `lem-acceptance-is-configuration-reachability` — **lemma** `[LL]`.
15. `fs-rejection-is-divergence` — **false statement** `[LN]`.
16. `fs-nondeterministic-acceptance-requires-every-branch-to-halt` — **false statement** `[LN]`.

### B page — `turing-machines-configurations-and-computation-examples`

`ex-valid-computation-histories-are-decidable` `[LL]` · `ex-acceptance-is-configuration-reachability` `[AA]` · `cex-rejection-is-divergence` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-10. Robust Machine Models and Universal Computation

**page id** `robust-machine-models-and-universal-computation`  
**`requires`** `turing-machines-configurations-and-computation`

### A-page items, in dependency order

1. `def-effective-encoding-of-turing-machines` — **definition** `[LN]`.
2. `lem-machine-encoding-is-injective-and-decodable` — **lemma** `[LL]`.
3. `thm-stay-put-moves-can-be-eliminated` — **theorem** `[LA]`.
4. `thm-one-way-and-two-way-tapes-are-equivalent` — **theorem** `[LL]`.
5. `thm-multitape-machines-have-one-tape-simulations` — **theorem** `[LL]`.
6. `lem-multitape-simulation-has-quadratic-time-overhead` — **lemma** `[LA]`.
7. `thm-nondeterministic-and-deterministic-recognizability-agree` — **theorem** `[LL]`.
8. `def-random-access-and-register-machine-programs` — **definition** `[LN]`.
9. `thm-ram-register-and-turing-computability-agree` — **theorem** `[LL]`.
10. `def-universal-turing-machine` — **definition** `[LN]`.
11. `lem-step-by-step-interpreter-for-machine-codes` — **lemma** `[LL]`.
12. `thm-existence-of-a-universal-turing-machine` — **theorem** `[LL]`.
13. `cor-effective-enumeration-of-turing-machines` — **corollary** `[LA]`.
14. `def-church-turing-thesis` — **definition** `[AN]`.
15. `rem-model-equivalence-supports-but-does-not-prove-the-thesis` — **remark** `[AN]`.
16. `fs-universality-decides-halting` — **false statement** `[LN]`.

### B page — `robust-machine-models-and-universal-computation-examples`

`ex-stay-put-moves-can-be-eliminated` `[LL]` · `ex-effective-enumeration-of-turing-machines` `[AA]` · `cex-universality-decides-halting` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-11. Decidable, Recognizable, and Enumerable Languages

**page id** `decidable-recognizable-and-enumerable-languages`  
**`requires`** `robust-machine-models-and-universal-computation`, `countability-and-uncountability`

### A-page items, in dependency order

1. `def-computable-and-partial-computable-function` — **definition** `[LN]`.
2. `def-decidable-and-recognizable-language` — **definition** `[LN]`.
3. `def-computably-enumerable-set` — **definition** `[LN]`.
4. `thm-recognizable-iff-enumerable` — **theorem** `[LL]`.
5. `thm-decidable-iff-language-and-complement-are-recognizable` — **theorem** `[LL]`.
6. `thm-recognizable-languages-are-closed-under-union-and-intersection` — **theorem** `[LL]`.
7. `thm-decidable-languages-are-closed-under-boolean-operations` — **theorem** `[LA]`.
8. `def-dovetailing-schedule` — **definition** `[LN]`.
9. `lem-dovetailing-reaches-every-finite-stage` — **lemma** `[LL]`.
10. `thm-domains-and-ranges-of-partial-computable-functions-are-ce` — **theorem** `[LL]`.
11. `thm-every-ce-set-is-a-domain` — **theorem** `[LA]`.
12. `thm-infinite-ce-sets-have-computable-injective-enumerations` — **theorem** `[LL]`.
13. `prop-machine-descriptions-form-a-decidable-language` — **proposition** `[LA]`.
14. `fs-recognizable-means-total` — **false statement** `[LN]`.
15. `fs-every-countable-language-is-decidable` — **false statement** `[LN]`.

### B page — `decidable-recognizable-and-enumerable-languages-examples`

`ex-decidable-iff-language-and-complement-are-recognizable` `[LL]` · `ex-machine-descriptions-form-a-decidable-language` `[AA]` · `cex-recognizable-means-total` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-12. Diagonalization and the Halting Problem

**page id** `diagonalization-and-the-halting-problem`  
**`requires`** `decidable-recognizable-and-enumerable-languages`

### A-page items, in dependency order

1. `def-turing-machine-acceptance-problem` — **definition** `[LN]`.
2. `thm-machine-acceptance-is-recognizable` — **theorem** `[LL]`.
3. `lem-diagonal-self-application-machine` — **lemma** `[LL]`.
4. `thm-machine-acceptance-is-undecidable` — **theorem** `[LL]`.
5. `def-halting-problem` — **definition** `[LN]`.
6. `thm-halting-is-recognizable-and-undecidable` — **theorem** `[LL]`.
7. `cor-nonhalting-is-not-recognizable` — **corollary** `[LA]`.
8. `thm-an-unrecognizable-language-exists` — **theorem** `[LL]`.
9. `def-busy-beaver-function` — **definition** `[LN]`.
10. `thm-busy-beaver-dominates-every-total-computable-function` — **theorem** `[LL]`.
11. `cor-busy-beaver-is-not-computable` — **corollary** `[LA]`.
12. `thm-totality-is-not-recognizable` — **theorem** `[LA]`.
13. `thm-machine-equivalence-is-undecidable` — **theorem** `[LA]`.
14. `fs-undecidable-means-no-instance-can-be-answered` — **false statement** `[LN]`.
15. `fs-diagonalization-needs-literal-source-self-reading` — **false statement** `[LN]`.

### B page — `diagonalization-and-the-halting-problem-examples`

`ex-diagonal-self-application-machine` `[LL]` · `ex-machine-equivalence-is-undecidable` `[AA]` · `cex-undecidable-means-no-instance-can-be-answered` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-13. Computable Reductions and Rice's Theorem

**page id** `computable-reductions-and-rices-theorem`  
**`requires`** `diagonalization-and-the-halting-problem`

### A-page items, in dependency order

1. `def-computable-many-one-reduction` — **definition** `[LN]`.
2. `lem-many-one-reducibility-is-a-preorder` — **lemma** `[LL]`.
3. `thm-many-one-reductions-transfer-decidability-and-recognizability` — **theorem** `[LL]`.
4. `def-ce-hardness-and-completeness` — **definition** `[LN]`.
5. `thm-machine-acceptance-is-ce-complete` — **theorem** `[LA]`.
6. `def-turing-reduction` — **definition** `[LN]`.
7. `lem-many-one-implies-turing-reduction` — **lemma** `[LL]`.
8. `prop-the-converse-fails` — **proposition** `[LL]`.
9. `def-index-set-and-extensional-machine-property` — **definition** `[LN]`.
10. `lem-rice-witness-machine-construction` — **lemma** `[LL]`.
11. `thm-rices-theorem` — **theorem** `[LL]`.
12. `cor-standard-semantic-machine-properties-are-undecidable` — **corollary** `[LA]`.
13. `thm-rice-shapiro-positive-information-direction` — **theorem** `[LL]`.
14. `prop-syntactic-properties-lie-outside-rices-theorem` — **proposition** `[LA]`.
15. `fs-reductions-may-reverse-yes-and-no` — **false statement** `[LN]`.
16. `fs-rices-theorem-applies-to-state-count` — **false statement** `[LN]`.

### B page — `computable-reductions-and-rices-theorem-examples`

`ex-many-one-reductions-transfer-decidability-and-recognizability` `[LL]` · `ex-syntactic-properties-lie-outside-rices-theorem` `[AA]` · `cex-reductions-may-reverse-yes-and-no` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-14. Post Correspondence and Language Undecidability

**page id** `post-correspondence-and-language-undecidability`  
**`requires`** `computable-reductions-and-rices-theorem`, `context-free-pumping-ogden-and-parsing`

### A-page items, in dependency order

1. `def-post-correspondence-problem` — **definition** `[LN]`.
2. `def-modified-post-correspondence-problem` — **definition** `[LN]`.
3. `lem-computation-history-domino-encoding` — **lemma** `[LL]`.
4. `thm-modified-pcp-is-undecidable` — **theorem** `[LL]`.
5. `lem-modified-pcp-reduces-to-pcp` — **lemma** `[LL]`.
6. `thm-post-correspondence-is-undecidable` — **theorem** `[LL]`.
7. `prop-post-correspondence-is-recognizable` — **proposition** `[LA]`.
8. `thm-cfg-intersection-emptiness-is-undecidable` — **theorem** `[LL]`.
9. `thm-cfg-equivalence-is-undecidable` — **theorem** `[LA]`.
10. `thm-cfg-universality-is-undecidable` — **theorem** `[LL]`.
11. `thm-cfg-ambiguity-is-undecidable` — **theorem** `[LL]`.
12. `def-chomsky-hierarchy` — **definition** `[LN]`.
13. `thm-proper-inclusions-in-the-chomsky-hierarchy` — **theorem** `[LA]`.
14. `fs-pcp-allows-symbol-reordering-within-dominoes` — **false statement** `[LN]`.
15. `fs-two-decidable-cfls-have-decidable-intersection-emptiness` — **false statement** `[LN]`.

### B page — `post-correspondence-and-language-undecidability-examples`

`ex-modified-pcp-is-undecidable` `[LL]` · `ex-proper-inclusions-in-the-chomsky-hierarchy` `[AA]` · `cex-pcp-allows-symbol-reordering-within-dominoes` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-15. Primitive Recursive and Partial Computable Functions

**page id** `primitive-recursive-and-partial-computable-functions`  
**`requires`** `robust-machine-models-and-universal-computation`, `construction-of-the-natural-numbers`

### A-page items, in dependency order

1. `def-initial-arithmetic-functions` — **definition** `[LN]`.
2. `def-composition-and-primitive-recursion-schemes` — **definition** `[LN]`.
3. `def-primitive-recursive-function` — **definition** `[LN]`.
4. `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive` — **proposition** `[LL]`.
5. `def-natural-number-coding-of-finite-sequences` — **definition** `[LN]`.
6. `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` — **theorem** `[LL]`.
7. `def-mu-minimization-and-partial-recursive-function` — **definition** `[LN]`.
8. `prop-ackermann-is-total-computable-but-not-primitive-recursive` — **proposition** `[LL]`.
9. `lem-turing-step-coding-is-primitive-recursive` — **lemma** `[LL]`.
10. `def-kleene-t-predicate-and-output-function` — **definition** `[LN]`.
11. `thm-kleene-normal-form` — **theorem** `[LL]`.
12. `thm-partial-recursive-iff-turing-computable` — **theorem** `[LL]`.
13. `def-lambda-term-beta-reduction-and-represented-function` — **definition** `[LN]`.
14. `thm-lambda-definable-iff-partial-recursive` — **theorem** `[LL]`.
15. `fs-every-total-computable-function-is-primitive-recursive` — **false statement** `[LN]`.
16. `fs-mu-minimization-is-always-total` — **false statement** `[LN]`.

### B page — `primitive-recursive-and-partial-computable-functions-examples`

`ex-sequence-length-and-coordinate-functions-are-primitive-recursive` `[LL]` · `ex-lambda-definable-iff-partial-recursive` `[AA]` · `cex-every-total-computable-function-is-primitive-recursive` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-16. Acceptable Numberings, the s-m-n Theorem, and Recursion

**page id** `acceptable-numberings-smn-and-the-recursion-theorem`  
**`requires`** `primitive-recursive-and-partial-computable-functions`, `computable-reductions-and-rices-theorem`

### A-page items, in dependency order

1. `def-numbering-of-partial-computable-functions` — **definition** `[LN]`.
2. `def-universal-and-acceptable-numbering` — **definition** `[LN]`.
3. `prop-fixed-machine-coding-is-acceptable` — **proposition** `[LL]`.
4. `def-parameter-specialization-function` — **definition** `[LN]`.
5. `thm-smn-parameter-theorem` — **theorem** `[LL]`.
6. `cor-effective-program-specialization` — **corollary** `[LA]`.
7. `def-computable-program-transformer` — **definition** `[LN]`.
8. `lem-self-reference-construction-from-smn` — **lemma** `[LL]`.
9. `thm-kleenes-second-recursion-theorem` — **theorem** `[LL]`.
10. `thm-recursion-theorem-with-parameters` — **theorem** `[LL]`.
11. `def-productive-and-creative-set` — **definition** `[LN]`.
12. `thm-nonhalting-is-productive-and-halting-is-creative` — **theorem** `[LL]`.
13. `thm-myhill-isomorphism-theorem-for-creative-sets` — **theorem** `[LL]`.
14. `prop-acceptable-numberings-are-computably-intertranslatable` — **proposition** `[LL]`.
15. `fs-recursion-theorem-needs-source-file-access` — **false statement** `[LN]`.
16. `fs-program-indices-are-unique` — **false statement** `[LN]`.

### B page — `acceptable-numberings-smn-and-the-recursion-theorem-examples`

`ex-smn-parameter-theorem` `[LL]` · `ex-acceptable-numberings-are-computably-intertranslatable` `[AA]` · `cex-recursion-theorem-needs-source-file-access` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-17. The Arithmetical Hierarchy and Post's Theorem

**page id** `the-arithmetical-hierarchy-and-posts-theorem`  
**`requires`** `acceptable-numberings-smn-and-the-recursion-theorem`

### A-page items, in dependency order

1. `def-bounded-arithmetic-formula` — **definition** `[LN]`.
2. `def-sigma-n-pi-n-and-delta-n-sets` — **definition** `[LN]`.
3. `lem-bounded-quantifiers-preserve-primitive-recursiveness` — **lemma** `[LL]`.
4. `thm-sigma-one-sets-are-exactly-ce-sets` — **theorem** `[LL]`.
5. `cor-delta-one-sets-are-exactly-decidable` — **corollary** `[LA]`.
6. `lem-prenex-normalization-preserves-level` — **lemma** `[LL]`.
7. `def-arithmetical-level-completeness` — **definition** `[LN]`.
8. `thm-halting-is-sigma-one-complete` — **theorem** `[LL]`.
9. `thm-totality-is-pi-two-complete` — **theorem** `[LL]`.
10. `def-relative-computability-and-enumerability` — **definition** `[LN]`.
11. `lem-oracle-computation-has-a-finite-query-witness` — **lemma** `[LL]`.
12. `thm-posts-theorem` — **theorem** `[LL]`.
13. `lem-diagonal-set-at-each-level` — **lemma** `[LL]`.
14. `thm-arithmetical-hierarchy-is-strict` — **theorem** `[LL]`.
15. `def-limit-computable-function` — **definition** `[LN]`.
16. `thm-shoenfield-limit-lemma` — **theorem** `[LL]`.
17. `fs-sigma-n-and-pi-n-are-disjoint` — **false statement** `[LN]`.
18. `fs-limit-computable-has-a-known-stabilization-stage` — **false statement** `[LN]`.

### B page — `the-arithmetical-hierarchy-and-posts-theorem-examples`

`ex-sigma-one-sets-are-exactly-ce-sets` `[LL]` · `ex-shoenfield-limit-lemma` `[AA]` · `cex-sigma-n-and-pi-n-are-disjoint` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

## TC-18. Oracle Computability, the Jump, and Turing Degrees

**page id** `oracle-computability-the-jump-and-turing-degrees`  
**`requires`** `the-arithmetical-hierarchy-and-posts-theorem`

### A-page items, in dependency order

1. `def-oracle-turing-machine` — **definition** `[LN]`.
2. `def-turing-reducibility-and-equivalence` — **definition** `[LN]`.
3. `lem-turing-reducibility-is-a-preorder` — **lemma** `[LL]`.
4. `def-turing-degree-and-degree-order` — **definition** `[LN]`.
5. `lem-degree-order-is-representative-independent` — **lemma** `[LL]`.
6. `def-tagged-join-of-oracles` — **definition** `[LN]`.
7. `thm-turing-degrees-form-an-upper-semilattice` — **theorem** `[LL]`.
8. `def-turing-jump` — **definition** `[LN]`.
9. `lem-jump-is-well-defined-on-degrees` — **lemma** `[LL]`.
10. `thm-every-oracle-is-strictly-below-its-jump` — **theorem** `[LL]`.
11. `thm-jump-is-monotone` — **theorem** `[LL]`.
12. `thm-relative-halting-is-oracle-ce-complete` — **theorem** `[LL]`.
13. `cor-finite-jumps-match-arithmetical-levels` — **corollary** `[LA]`.
14. `def-truth-table-reduction` — **definition** `[LN]`.
15. `prop-truth-table-implies-turing-reduction` — **proposition** `[LL]`.
16. `thm-some-turing-reductions-are-not-truth-table-reductions` — **theorem** `[LL]`.
17. `fs-an-oracle-machine-reads-the-infinite-oracle-at-once` — **false statement** `[LN]`.
18. `fs-degree-join-is-set-union` — **false statement** `[LN]`.

### B page — `oracle-computability-the-jump-and-turing-degrees-examples`

`ex-degree-order-is-representative-independent` `[LL]` · `ex-some-turing-reductions-are-not-truth-table-reductions` `[AA]` · `cex-an-oracle-machine-reads-the-infinite-oracle-at-once` `[AA]`.

### Sources and exact locators

- Gallier, Chapters 8--12; Sipser, Chapters 3--6; Open Logic Project, computability chapters; Zimmermann and Simpson, corresponding complete-note sections.

**Proof traps:** Machine, code, computation, and computed function remain distinct; every simulation and reduction is total and effective.

**Forward references: NONE.**

---

# Computational complexity

## TC-19. Resource Bounds and Machine Invariance

**page id** `resource-bounds-and-machine-invariance`  
**`requires`** `robust-machine-models-and-universal-computation`, `the-logarithm-and-general-powers`

### A-page items, in dependency order

1. `def-worst-case-time-and-space-complexity` — **definition** `[LN]`.
2. `def-asymptotic-resource-comparison` — **definition** `[LN]`.
3. `def-time-and-space-constructible-function` — **definition** `[LN]`.
4. `def-dtime-ntime-dspace-and-nspace` — **definition** `[LN]`.
5. `lem-time-at-least-input-length-permits-complete-input-reading` — **lemma** `[LL]`.
6. `lem-time-bounds-imply-space-bounds` — **lemma** `[LL]`.
7. `thm-multitape-to-single-tape-time-simulation` — **theorem** `[LL]`.
8. `thm-multitape-to-single-tape-space-simulation` — **theorem** `[LL]`.
9. `thm-universal-simulation-with-logarithmic-overhead` — **theorem** `[LL]`.
10. `prop-polynomial-time-and-space-are-model-invariant` — **proposition** `[LA]`.
11. `lem-clocked-machine-construction` — **lemma** `[LL]`.
12. `prop-polynomially-related-encodings-preserve-polynomial-classes` — **proposition** `[LA]`.
13. `fs-model-invariance-means-equal-step-counts` — **false statement** `[LN]`.
14. `fs-time-bounds-never-need-constructibility` — **false statement** `[LN]`.

### B page — `resource-bounds-and-machine-invariance-examples`

`ex-time-bounds-imply-space-bounds` `[LL]` · `ex-polynomially-related-encodings-preserve-polynomial-classes` `[AA]` · `cex-model-invariance-means-equal-step-counts` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-20. P, NP, coNP, and Polynomial Reductions

**page id** `p-np-conp-and-polynomial-reductions`  
**`requires`** `resource-bounds-and-machine-invariance`

### A-page items, in dependency order

1. `def-p` — **definition** `[LN]`.
2. `def-polynomially-balanced-verifier` — **definition** `[LN]`.
3. `def-np-by-verifiers` — **definition** `[LN]`.
4. `thm-verifier-and-nondeterministic-definitions-of-np-agree` — **theorem** `[LL]`.
5. `def-conp` — **definition** `[LN]`.
6. `prop-p-is-contained-in-np-intersection-conp` — **proposition** `[LL]`.
7. `def-polynomial-time-many-one-reduction` — **definition** `[LN]`.
8. `lem-polynomial-reductions-compose` — **lemma** `[LL]`.
9. `thm-polynomial-reductions-transfer-p-np-and-conp-membership` — **theorem** `[LL]`.
10. `def-np-hard-and-np-complete` — **definition** `[LN]`.
11. `prop-an-np-complete-language-in-p-implies-p-equals-np` — **proposition** `[LL]`.
12. `def-search-version-of-an-np-relation` — **definition** `[LN]`.
13. `thm-sat-search-reduces-to-sat-decision` — **theorem** `[LA]`.
14. `def-exp-and-nexp` — **definition** `[LN]`.
15. `prop-np-is-contained-in-pspace-and-pspace-in-exp` — **proposition** `[LL]`.
16. `fs-np-means-not-polynomial` — **false statement** `[LN]`.
17. `fs-np-complete-means-known-not-in-p` — **false statement** `[LN]`.

### B page — `p-np-conp-and-polynomial-reductions-examples`

`ex-p-is-contained-in-np-intersection-conp` `[LL]` · `ex-np-is-contained-in-pspace-and-pspace-in-exp` `[AA]` · `cex-np-means-not-polynomial` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-21. The Cook--Levin Theorem

**page id** `the-cook-levin-theorem`  
**`requires`** `p-np-conp-and-polynomial-reductions`

### A-page items, in dependency order

1. `def-boolean-formula-cnf-and-sat` — **definition** `[LN]`.
2. `prop-sat-is-in-np` — **proposition** `[LL]`.
3. `def-bounded-computation-tableau` — **definition** `[LN]`.
4. `lem-tableau-cell-alphabet-is-constant` — **lemma** `[LL]`.
5. `def-local-tableau-window` — **definition** `[LN]`.
6. `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal` — **lemma** `[LL]`.
7. `lem-exactly-one-symbol-constraints-have-polynomial-size` — **lemma** `[LL]`.
8. `lem-start-accept-and-transition-constraints-have-polynomial-size` — **lemma** `[LL]`.
9. `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` — **lemma** `[LL]`.
10. `lem-cook-levin-map-is-polynomial-time` — **lemma** `[LL]`.
11. `thm-cook-levin-sat-is-np-complete` — **theorem** `[LL]`.
12. `def-tseitin-extension-variable` — **definition** `[LN]`.
13. `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` — **lemma** `[LL]`.
14. `thm-three-sat-is-np-complete` — **theorem** `[LL]`.
15. `fs-cook-levin-enumerates-all-branches` — **false statement** `[LN]`.
16. `fs-naive-distribution-to-cnf-is-always-polynomial` — **false statement** `[LN]`.

### B page — `the-cook-levin-theorem-examples`

`ex-tableau-cell-alphabet-is-constant` `[LL]` · `ex-three-sat-is-np-complete` `[AA]` · `cex-cook-levin-enumerates-all-branches` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-22. Classical NP-Completeness Reductions

**page id** `classical-np-completeness-reductions`  
**`requires`** `the-cook-levin-theorem`, `graphs-walks-and-connectivity`

### A-page items, in dependency order

1. `def-reduction-gadget-and-interface-invariant` — **definition** `[LN]`.
2. `thm-three-sat-reduces-to-clique` — **theorem** `[LL]`.
3. `cor-clique-is-np-complete` — **corollary** `[LA]`.
4. `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible` — **theorem** `[LL]`.
5. `cor-independent-set-and-vertex-cover-are-np-complete` — **corollary** `[LA]`.
6. `thm-three-sat-reduces-to-directed-hamiltonian-cycle` — **theorem** `[LL]`.
7. `thm-directed-reduces-to-undirected-hamiltonian-cycle` — **theorem** `[LL]`.
8. `cor-hamiltonian-path-and-cycle-are-np-complete` — **corollary** `[LA]`.
9. `def-subset-sum-and-partition` — **definition** `[LN]`.
10. `thm-three-sat-reduces-to-subset-sum` — **theorem** `[LL]`.
11. `thm-subset-sum-reduces-to-partition` — **theorem** `[LA]`.
12. `def-set-cover` — **definition** `[LN]`.
13. `thm-vertex-cover-reduces-to-set-cover` — **theorem** `[LL]`.
14. `def-three-colourability` — **definition** `[LN]`.
15. `thm-three-sat-reduces-to-three-colourability` — **theorem** `[LL]`.
16. `fs-gadget-correctness-needs-only-one-direction` — **false statement** `[LN]`.
17. `fs-pseudopolynomial-is-polynomial-in-bit-length` — **false statement** `[LN]`.

### B page — `classical-np-completeness-reductions-examples`

`ex-clique-is-np-complete` `[LL]` · `ex-three-sat-reduces-to-three-colourability` `[AA]` · `cex-gadget-correctness-needs-only-one-direction` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-23. Space Complexity, Savitch's Theorem, and TQBF

**page id** `space-complexity-savitch-and-tqbf`  
**`requires`** `p-np-conp-and-polynomial-reductions`, `graphs-walks-and-connectivity`

### A-page items, in dependency order

1. `def-pspace-and-npspace` — **definition** `[LN]`.
2. `lem-space-bounded-machines-have-exponentially-many-configurations` — **lemma** `[LL]`.
3. `def-bounded-reachability-recursion` — **definition** `[LN]`.
4. `lem-bounded-reachability-recursion-is-correct` — **lemma** `[LL]`.
5. `lem-bounded-reachability-uses-logarithmic-recursion-depth` — **lemma** `[LL]`.
6. `thm-savitchs-theorem` — **theorem** `[LL]`.
7. `cor-pspace-equals-npspace-and-is-closed-under-complement` — **corollary** `[LA]`.
8. `def-quantified-boolean-formula-and-tqbf` — **definition** `[LN]`.
9. `prop-tqbf-is-in-pspace` — **proposition** `[LL]`.
10. `def-reachable-configuration-formula` — **definition** `[LN]`.
11. `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` — **lemma** `[LL]`.
12. `thm-tqbf-is-pspace-complete` — **theorem** `[LL]`.
13. `def-quantified-formula-game` — **definition** `[LN]`.
14. `thm-tqbf-truth-iff-existential-player-has-a-winning-strategy` — **theorem** `[LL]`.
15. `def-alternating-polynomial-time` — **definition** `[LN]`.
16. `thm-ap-equals-pspace` — **theorem** `[LL]`.
17. `fs-savitch-stores-the-whole-configuration-graph` — **false statement** `[LN]`.

### B page — `space-complexity-savitch-and-tqbf-examples`

`ex-bounded-reachability-recursion-is-correct` `[LL]` · `ex-ap-equals-pspace` `[AA]` · `cex-savitch-stores-the-whole-configuration-graph` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-24. Time and Space Hierarchy Theorems

**page id** `time-and-space-hierarchy-theorems`  
**`requires`** `space-complexity-savitch-and-tqbf`, `diagonalization-and-the-halting-problem`

### A-page items, in dependency order

1. `def-efficient-universal-simulation-with-clock` — **definition** `[LN]`.
2. `lem-effective-enumeration-of-clocked-machines` — **lemma** `[LL]`.
3. `lem-time-diagonal-language-respects-its-budget` — **lemma** `[LL]`.
4. `thm-deterministic-time-hierarchy` — **theorem** `[LL]`.
5. `cor-p-is-properly-contained-in-exp` — **corollary** `[LA]`.
6. `thm-nondeterministic-time-hierarchy` — **theorem** `[LL]`.
7. `lem-space-bounded-universal-simulation` — **lemma** `[LL]`.
8. `lem-space-diagonal-machine-halts` — **lemma** `[LL]`.
9. `thm-deterministic-space-hierarchy` — **theorem** `[LL]`.
10. `cor-l-is-properly-contained-in-pspace` — **corollary** `[LA]`.
11. `def-language-padding` — **definition** `[LN]`.
12. `lem-padding-transfers-time-bounds` — **lemma** `[LL]`.
13. `thm-gap-and-union-theorems-for-complexity-bounds` — **theorem** `[LL]`.
14. `prop-hierarchy-theorems-do-not-separate-p-from-np` — **proposition** `[LA]`.
15. `fs-unrestricted-diagonalization-respects-any-bound` — **false statement** `[LN]`.

### B page — `time-and-space-hierarchy-theorems-examples`

`ex-time-diagonal-language-respects-its-budget` `[LL]` · `ex-hierarchy-theorems-do-not-separate-p-from-np` `[AA]` · `cex-unrestricted-diagonalization-respects-any-bound` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-25. Logarithmic Space, NL, and Reachability

**page id** `logarithmic-space-nl-and-reachability`  
**`requires`** `space-complexity-savitch-and-tqbf`, `graphs-walks-and-connectivity`

### A-page items, in dependency order

1. `def-read-only-input-logspace-machine` — **definition** `[LN]`.
2. `def-l-and-nl` — **definition** `[LN]`.
3. `lem-logspace-machines-have-polynomially-many-configurations` — **lemma** `[LL]`.
4. `def-logspace-many-one-reduction` — **definition** `[LN]`.
5. `lem-logspace-reductions-compose` — **lemma** `[LL]`.
6. `def-directed-st-connectivity` — **definition** `[LN]`.
7. `thm-directed-st-connectivity-is-nl-complete` — **theorem** `[LL]`.
8. `thm-nl-is-contained-in-dspace-log-squared-n` — **theorem** `[LA]`.
9. `def-inductive-reachable-vertex-count` — **definition** `[LN]`.
10. `lem-reachability-count-is-verifiable-in-nl` — **lemma** `[LL]`.
11. `lem-nonreachability-has-an-inductive-counting-certificate` — **lemma** `[LL]`.
12. `thm-immerman-szelepcsenyi-nl-equals-conl` — **theorem** `[LL]`.
13. `cor-nspace-is-closed-under-complement-above-logspace` — **corollary** `[LA]`.
14. `def-logspace-uniform-circuit-family` — **definition** `[LN]`.
15. `def-p-complete-under-logspace-reductions` — **definition** `[LN]`.
16. `thm-circuit-value-is-p-complete` — **theorem** `[LL]`.
17. `fs-nl-equals-conl-follows-by-state-swapping` — **false statement** `[LN]`.

### B page — `logarithmic-space-nl-and-reachability-examples`

`ex-logspace-reductions-compose` `[LL]` · `ex-circuit-value-is-p-complete` `[AA]` · `cex-nl-equals-conl-follows-by-state-swapping` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-26. Boolean Circuits and Nonuniform Complexity

**page id** `boolean-circuits-and-nonuniform-complexity`  
**`requires`** `the-cook-levin-theorem`, `finite-counting-and-binomial-coefficients`

### A-page items, in dependency order

1. `def-boolean-circuit-size-depth-fanin-and-basis` — **definition** `[LN]`.
2. `def-circuit-family-and-p-poly` — **definition** `[LN]`.
3. `thm-p-is-contained-in-p-poly` — **theorem** `[LL]`.
4. `def-polynomial-advice-machine` — **definition** `[LN]`.
5. `thm-p-poly-equals-p-with-polynomial-advice` — **theorem** `[LL]`.
6. `thm-undecidable-languages-exist-in-p-poly` — **theorem** `[LL]`.
7. `def-formula-and-branching-program` — **definition** `[LN]`.
8. `def-ac-zero-nc-one-and-nc` — **definition** `[LN]`.
9. `prop-nc-one-is-contained-in-l-and-l-in-nc-two` — **proposition** `[LL]`.
10. `lem-counting-circuits-of-bounded-size` — **lemma** `[LL]`.
11. `thm-shannon-almost-all-functions-require-exponential-circuits` — **theorem** `[LL]`.
12. `def-circuit-sat` — **definition** `[LN]`.
13. `thm-circuit-sat-is-np-complete` — **theorem** `[LL]`.
14. `thm-karp-lipton-collapse` — **theorem** `[LL]`.
15. `fs-polynomial-size-implies-uniform-generation` — **false statement** `[LN]`.
16. `fs-shannon-counting-gives-an-explicit-hard-function` — **false statement** `[LN]`.

### B page — `boolean-circuits-and-nonuniform-complexity-examples`

`ex-p-poly-equals-p-with-polynomial-advice` `[LL]` · `ex-karp-lipton-collapse` `[AA]` · `cex-polynomial-size-implies-uniform-generation` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-27. The Polynomial Hierarchy and Relativization

**page id** `the-polynomial-hierarchy-and-relativization`  
**`requires`** `boolean-circuits-and-nonuniform-complexity`, `space-complexity-savitch-and-tqbf`

### A-page items, in dependency order

1. `def-polynomial-hierarchy-levels` — **definition** `[LN]`.
2. `thm-quantifier-and-oracle-characterizations-of-ph` — **theorem** `[LL]`.
3. `prop-np-and-conp-are-the-first-levels` — **proposition** `[LA]`.
4. `thm-bounded-alternation-qbf-is-level-complete` — **theorem** `[LL]`.
5. `lem-collapse-at-one-level-propagates` — **lemma** `[LL]`.
6. `thm-sigma-k-equals-pi-k-implies-ph-collapse` — **theorem** `[LL]`.
7. `def-relativized-complexity-class` — **definition** `[LN]`.
8. `lem-standard-containments-relativize` — **lemma** `[LL]`.
9. `def-relativizing-proof-technique` — **definition** `[AN]`.
10. `thm-an-oracle-separates-p-from-np` — **theorem** `[LL]`.
11. `thm-an-oracle-collapses-p-and-np` — **theorem** `[LL]`.
12. `cor-relativization-alone-cannot-resolve-p-versus-np` — **corollary** `[LA]`.
13. `def-lowness-and-highness` — **definition** `[LN]`.
14. `def-promise-problem` — **definition** `[LN]`.
15. `rem-oracle-and-promise-conventions-are-distinct` — **remark** `[AN]`.
16. `fs-relativized-separations-prove-unrelativized-separations` — **false statement** `[LN]`.

### B page — `the-polynomial-hierarchy-and-relativization-examples`

`ex-np-and-conp-are-the-first-levels` `[LL]` · `ex-relativization-alone-cannot-resolve-p-versus-np` `[AA]` · `cex-relativized-separations-prove-unrelativized-separations` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-28. Randomized Complexity and Amplification

**page id** `randomized-complexity-and-amplification`  
**`requires`** `p-np-conp-and-polynomial-reductions`, `finite-probability-spaces-and-random-variables`

### A-page items, in dependency order

1. `def-probabilistic-polynomial-time-machine` — **definition** `[LN]`.
2. `def-rp-corp-zpp-bpp-and-pp` — **definition** `[LN]`.
3. `thm-zpp-equals-rp-intersection-corp` — **theorem** `[LL]`.
4. `lem-majority-error-bound-from-chebyshev` — **lemma** `[LL]`.
5. `thm-bpp-amplification-to-inverse-polynomial-error` — **theorem** `[LL]`.
6. `lem-chernoff-bound-for-bernoulli-trials` — **lemma** `[LL]`.
7. `thm-bpp-amplification-to-exponentially-small-error` — **theorem** `[LL]`.
8. `thm-rp-one-sided-amplification` — **theorem** `[LA]`.
9. `thm-adleman-bpp-is-contained-in-p-poly` — **theorem** `[LL]`.
10. `def-pairwise-independent-hash-family` — **definition** `[LN]`.
11. `lem-affine-finite-field-hashes-are-pairwise-independent` — **lemma** `[LL]`.
12. `thm-freivalds-matrix-product-verification` — **theorem** `[LL]`.
13. `def-polynomial-identity-testing` — **definition** `[LN]`.
14. `thm-schwartz-zippel-lemma` — **theorem** `[LL]`.
15. `cor-pit-is-in-corp` — **corollary** `[LA]`.
16. `fs-reusing-random-bits-amplifies-success` — **false statement** `[LN]`.
17. `fs-pp-has-bounded-error-away-from-one-half` — **false statement** `[LN]`.

### B page — `randomized-complexity-and-amplification-examples`

`ex-majority-error-bound-from-chebyshev` `[LL]` · `ex-pit-is-in-corp` `[AA]` · `cex-reusing-random-bits-amplifies-success` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

## TC-29. Counting Complexity and Sharp-P

**page id** `counting-complexity-and-sharpp`  
**`requires`** `randomized-complexity-and-amplification`, `the-cook-levin-theorem`

### A-page items, in dependency order

1. `def-sharpp-and-gap-p-functions` — **definition** `[LN]`.
2. `def-number-sat` — **definition** `[LN]`.
3. `prop-number-sat-is-in-sharpp` — **proposition** `[LL]`.
4. `def-parsimonious-reduction` — **definition** `[LN]`.
5. `lem-cook-levin-can-be-made-parsimonious` — **lemma** `[LL]`.
6. `thm-number-sat-is-sharpp-complete` — **theorem** `[LL]`.
7. `def-fp-function-class` — **definition** `[LN]`.
8. `prop-fp-is-contained-in-sharpp` — **proposition** `[LL]`.
9. `prop-sharpp-is-closed-under-sum-and-product` — **proposition** `[LL]`.
10. `def-majority-sat` — **definition** `[LN]`.
11. `thm-pp-is-sign-testing-gap-p` — **theorem** `[LL]`.
12. `cor-majority-sat-is-pp-complete` — **corollary** `[LA]`.
13. `thm-pp-is-closed-under-complement` — **theorem** `[LL]`.
14. `def-p-with-a-sharpp-oracle` — **definition** `[LN]`.
15. `prop-np-is-contained-in-p-sharpp` — **proposition** `[LL]`.
16. `fs-sharpp-is-a-language-class` — **false statement** `[LN]`.
17. `fs-every-many-one-reduction-is-parsimonious` — **false statement** `[LN]`.

### B page — `counting-complexity-and-sharpp-examples`

`ex-cook-levin-can-be-made-parsimonious` `[LL]` · `ex-np-is-contained-in-p-sharpp` `[AA]` · `cex-sharpp-is-a-language-class` `[AA]`.

### Sources and exact locators

- Arora--Barak, corresponding Chapters 1--7, 14, and 17--18; Sipser, Chapters 7--10; Savage, Part III; MIT 6.841 corresponding lectures.

**Proof traps:** Every encoding, simulation overhead, constructibility hypothesis, reduction direction, and resource bound is stated quantitatively.

**Forward references: NONE.**

---

# Interactive proofs, PCP, approximation, and algorithmic information

## TC-30. Interactive Proof Systems and Public Coins

**page id** `interactive-proof-systems-and-public-coins`  
**`requires`** `randomized-complexity-and-amplification`, `space-complexity-savitch-and-tqbf`

### A-page items, in dependency order

1. `def-interactive-proof-transcript-round-and-strategy` — **definition** `[LN]`.
2. `def-completeness-and-soundness` — **definition** `[LN]`.
3. `def-ip` — **definition** `[LN]`.
4. `prop-np-is-contained-in-ip` — **proposition** `[LL]`.
5. `lem-sequential-repetition-amplifies-error` — **lemma** `[LL]`.
6. `def-private-coin-public-coin-and-arthur-merlin-protocol` — **definition** `[LN]`.
7. `lem-hashing-commits-public-randomness` — **lemma** `[LL]`.
8. `thm-private-coin-ip-equals-public-coin-ip` — **theorem** `[LL]`.
9. `def-protocol-game-tree-and-value` — **definition** `[LN]`.
10. `lem-optimal-prover-may-be-deterministic` — **lemma** `[LL]`.
11. `lem-protocol-value-is-computable-in-polynomial-space` — **lemma** `[LL]`.
12. `thm-ip-is-contained-in-pspace` — **theorem** `[LL]`.
13. `def-graph-nonisomorphism-protocol` — **definition** `[LN]`.
14. `thm-graph-nonisomorphism-is-in-ip` — **theorem** `[LL]`.
15. `fs-soundness-quantifies-only-over-honest-provers` — **false statement** `[LN]`.
16. `fs-the-prover-must-run-in-polynomial-time` — **false statement** `[LN]`.

### B page — `interactive-proof-systems-and-public-coins-examples`

`ex-sequential-repetition-amplifies-error` `[LL]` · `ex-graph-nonisomorphism-is-in-ip` `[AA]` · `cex-soundness-quantifies-only-over-honest-provers` `[AA]`.

### Sources and exact locators

- Arora--Barak, Chapter 8; MIT 6.841 interactive-proof and arithmetization lectures; Sipser §10.4.

**Proof traps:** Field size, degree, randomness, communication, completeness, and soundness are tracked at every round.

**Forward references: NONE.**

## TC-31. Arithmetization and the Sum-Check Protocol

**page id** `arithmetization-and-the-sum-check-protocol`  
**`requires`** `interactive-proof-systems-and-public-coins`, `algebraic-extensions-degree-and-finite-fields`

### A-page items, in dependency order

1. `def-arithmetization-of-a-boolean-formula` — **definition** `[LN]`.
2. `lem-arithmetization-agrees-on-boolean-inputs` — **lemma** `[LL]`.
3. `def-multilinear-extension` — **definition** `[LN]`.
4. `thm-existence-and-uniqueness-of-multilinear-extension` — **theorem** `[LL]`.
5. `lem-degree-under-arithmetized-quantifiers` — **lemma** `[LL]`.
6. `thm-polynomial-root-bound` — **theorem** `[LL]`.
7. `thm-schwartz-zippel-multivariate-form` — **theorem** `[LA]`.
8. `def-sum-check-instance-and-protocol` — **definition** `[LN]`.
9. `lem-sum-check-perfect-completeness` — **lemma** `[LL]`.
10. `lem-first-false-round-is-caught-by-root-bound` — **lemma** `[LL]`.
11. `thm-sum-check-soundness` — **theorem** `[LL]`.
12. `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation` — **lemma** `[LL]`.
13. `def-linearity-test` — **definition** `[LN]`.
14. `thm-blr-linearity-test-soundness` — **theorem** `[LL]`.
15. `def-self-correction-of-a-noisy-linear-function` — **definition** `[LN]`.
16. `thm-linear-self-correction` — **theorem** `[LL]`.
17. `fs-sum-check-computes-all-exponential-summands` — **false statement** `[LN]`.

### B page — `arithmetization-and-the-sum-check-protocol-examples`

`ex-existence-and-uniqueness-of-multilinear-extension` `[LL]` · `ex-linear-self-correction` `[AA]` · `cex-sum-check-computes-all-exponential-summands` `[AA]`.

### Sources and exact locators

- Arora--Barak, Chapter 8; MIT 6.841 interactive-proof and arithmetization lectures; Sipser §10.4.

**Proof traps:** Field size, degree, randomness, communication, completeness, and soundness are tracked at every round.

**Forward references: NONE.**

## TC-32. The IP = PSPACE Theorem

**page id** `the-ip-equals-pspace-theorem`  
**`requires`** `arithmetization-and-the-sum-check-protocol`, `space-complexity-savitch-and-tqbf`

### A-page items, in dependency order

1. `def-qbf-arithmetization-operators` — **definition** `[LN]`.
2. `lem-quantifier-polynomials-agree-on-booleans` — **lemma** `[LL]`.
3. `lem-multilinearization-preserves-boolean-values` — **lemma** `[LL]`.
4. `def-shamir-protocol-for-tqbf` — **definition** `[LN]`.
5. `lem-honest-prover-maintains-the-claim-invariant` — **lemma** `[LL]`.
6. `lem-each-round-has-polynomial-communication` — **lemma** `[LL]`.
7. `lem-shamir-protocol-has-perfect-completeness` — **lemma** `[LL]`.
8. `lem-first-false-claim-survives-with-root-bound-probability` — **lemma** `[LL]`.
9. `lem-total-soundness-follows-by-union-bound` — **lemma** `[LL]`.
10. `thm-tqbf-has-a-polynomial-round-interactive-proof` — **theorem** `[LL]`.
11. `thm-pspace-is-contained-in-ip` — **theorem** `[LL]`.
12. `thm-ip-equals-pspace` — **theorem** `[LL]`.
13. `cor-ip-is-closed-under-complement` — **corollary** `[LA]`.
14. `thm-ip-can-be-given-perfect-completeness` — **theorem** `[LL]`.
15. `fs-ip-equals-pspace-needs-no-degree-reduction` — **false statement** `[LN]`.
16. `fs-the-verifier-trusts-the-final-field-value` — **false statement** `[LN]`.

### B page — `the-ip-equals-pspace-theorem-examples`

`ex-multilinearization-preserves-boolean-values` `[LL]` · `ex-ip-can-be-given-perfect-completeness` `[AA]` · `cex-ip-equals-pspace-needs-no-degree-reduction` `[AA]`.

### Sources and exact locators

- Arora--Barak, Chapter 8; MIT 6.841 interactive-proof and arithmetization lectures; Sipser §10.4.

**Proof traps:** Field size, degree, randomness, communication, completeness, and soundness are tracked at every round.

**Forward references: NONE.**

## TC-33. Expander Graphs and Constraint Graphs

**page id** `expander-graphs-and-constraint-graphs`  
**`requires`** `boolean-circuits-and-nonuniform-complexity`, `the-spectral-theorem-and-singular-value-decomposition`, `graphs-walks-and-connectivity`

### A-page items, in dependency order

1. `def-regular-multigraph-and-normalized-adjacency` — **definition** `[LN]`.
2. `lem-constant-vector-is-a-top-eigenvector` — **lemma** `[LL]`.
3. `def-spectral-edge-and-vertex-expansion` — **definition** `[LN]`.
4. `thm-expander-mixing-lemma` — **theorem** `[LL]`.
5. `thm-cheeger-inequalities-for-finite-regular-graphs` — **theorem** `[LL]`.
6. `def-margulis-gabber-galil-graph` — **definition** `[LN]`.
7. `lem-margulis-family-is-constant-degree-and-neighbor-computable` — **lemma** `[LL]`.
8. `lem-fourier-analysis-of-margulis-adjacency` — **lemma** `[LL]`.
9. `thm-margulis-family-has-uniform-spectral-gap` — **theorem** `[LL]`.
10. `cor-explicit-polynomial-time-constant-degree-expanders-exist` — **corollary** `[LA]`.
11. `def-constraint-graph-and-labeling-value` — **definition** `[LN]`.
12. `def-constraint-graph-regularization` — **definition** `[LN]`.
13. `lem-regularization-preserves-value-quantitatively` — **lemma** `[LL]`.
14. `def-graph-power-and-walk-constraint` — **definition** `[LN]`.
15. `thm-expander-walk-hits-dense-bad-sets` — **theorem** `[LL]`.
16. `def-gap-csp` — **definition** `[LN]`.
17. `fs-nonconstructive-expanders-suffice-for-uniform-reductions` — **false statement** `[LN]`.

### B page — `expander-graphs-and-constraint-graphs-examples`

`ex-expander-mixing-lemma` `[LL]` · `ex-expander-walk-hits-dense-bad-sets` `[AA]` · `cex-nonconstructive-expanders-suffice-for-uniform-reductions` `[AA]`.

### Sources and exact locators

- Dinur, complete gap-amplification proof; Arora--Barak, Chapters 11, 21--22; MIT 6.841 PCP lectures.

**Proof traps:** Uniform construction time, instance size, degree, alphabet, distance, gap, query count, and error are tracked across every transformation.

**Forward references: NONE.**

## TC-34. Gap Amplification and Assignment Testing

**page id** `gap-amplification-and-assignment-testing`  
**`requires`** `expander-graphs-and-constraint-graphs`, `the-cook-levin-theorem`, `randomized-complexity-and-amplification`

### A-page items, in dependency order

1. `def-gap-preserving-csp-reduction` — **definition** `[LN]`.
2. `def-degree-reduction-by-expander-clouds` — **definition** `[LN]`.
3. `lem-cloud-consistency-forces-near-constant-labels` — **lemma** `[LL]`.
4. `thm-degree-reduction-preserves-unsatisfaction` — **theorem** `[LL]`.
5. `def-constraint-graph-powering` — **definition** `[LN]`.
6. `lem-powering-preserves-perfect-satisfiability` — **lemma** `[LL]`.
7. `lem-powering-amplifies-small-gaps` — **lemma** `[LL]`.
8. `thm-gap-amplification-step` — **theorem** `[LL]`.
9. `def-explicit-constant-rate-constant-distance-code` — **definition** `[LN]`.
10. `thm-explicit-code-construction-and-distance` — **theorem** `[LL]`.
11. `def-assignment-tester-and-rejection-ratio` — **definition** `[LN]`.
12. `def-hadamard-linearity-constraint-system` — **definition** `[LN]`.
13. `thm-linearity-test-rejects-proportionally-to-distance` — **theorem** `[LL]`.
14. `def-quadratic-consistency-test` — **definition** `[LN]`.
15. `lem-quadratic-test-soundness` — **lemma** `[LL]`.
16. `lem-circuit-satisfaction-is-linear-quadratic-consistency` — **lemma** `[LL]`.
17. `thm-constant-query-assignment-tester` — **theorem** `[LL]`.
18. `lem-tester-size-and-construction-time-are-polynomial` — **lemma** `[LL]`.
19. `fs-repeating-constraints-amplifies-the-gap` — **false statement** `[LN]`.

### B page — `gap-amplification-and-assignment-testing-examples`

`ex-degree-reduction-preserves-unsatisfaction` `[LL]` · `ex-tester-size-and-construction-time-are-polynomial` `[AA]` · `cex-repeating-constraints-amplifies-the-gap` `[AA]`.

### Sources and exact locators

- Dinur, complete gap-amplification proof; Arora--Barak, Chapters 11, 21--22; MIT 6.841 PCP lectures.

**Proof traps:** Uniform construction time, instance size, degree, alphabet, distance, gap, query count, and error are tracked across every transformation.

**Forward references: NONE.**

## TC-35. Alphabet Reduction and the PCP Theorem

**page id** `alphabet-reduction-and-the-pcp-theorem`  
**`requires`** `gap-amplification-and-assignment-testing`, `algebraic-extensions-degree-and-finite-fields`

### A-page items, in dependency order

1. `def-pcp-verifier-randomness-query-and-proof-length` — **definition** `[LN]`.
2. `def-pcp-class-with-completeness-and-soundness` — **definition** `[LN]`.
3. `lem-two-query-pcps-and-constraint-graphs-are-equivalent` — **lemma** `[LL]`.
4. `def-composition-with-an-assignment-tester` — **definition** `[LN]`.
5. `lem-composition-preserves-perfect-completeness` — **lemma** `[LL]`.
6. `lem-composition-transfers-rejection-ratio` — **lemma** `[LL]`.
7. `thm-alphabet-reduction-step` — **theorem** `[LL]`.
8. `lem-alphabet-reduction-controls-size-and-degree` — **lemma** `[LL]`.
9. `def-dinur-pcp-transformation` — **definition** `[LN]`.
10. `lem-one-transformation-preserves-satisfiability` — **lemma** `[LL]`.
11. `lem-one-transformation-amplifies-gap` — **lemma** `[LL]`.
12. `lem-one-transformation-has-constant-factor-growth` — **lemma** `[LL]`.
13. `lem-logarithmically-many-iterations-reach-constant-gap` — **lemma** `[LL]`.
14. `thm-gap-csp-is-np-hard` — **theorem** `[LL]`.
15. `thm-pcp-theorem-np-equals-pcp-log-n-o-one` — **theorem** `[LL]`.
16. `thm-pcp-error-amplification` — **theorem** `[LL]`.
17. `fs-gap-amplification-alone-controls-alphabet` — **false statement** `[LN]`.
18. `fs-pcp-proofs-are-randomized-strings` — **false statement** `[LN]`.

### B page — `alphabet-reduction-and-the-pcp-theorem-examples`

`ex-composition-preserves-perfect-completeness` `[LL]` · `ex-pcp-error-amplification` `[AA]` · `cex-gap-amplification-alone-controls-alphabet` `[AA]`.

### Sources and exact locators

- Dinur, complete gap-amplification proof; Arora--Barak, Chapters 11, 21--22; MIT 6.841 PCP lectures.

**Proof traps:** Uniform construction time, instance size, degree, alphabet, distance, gap, query count, and error are tracked across every transformation.

**Forward references: NONE.**

## TC-36. Approximation Algorithms and Gap Reductions

**page id** `approximation-algorithms-and-gap-reductions`  
**`requires`** `alphabet-reduction-and-the-pcp-theorem`, `classical-np-completeness-reductions`, `finite-counting-and-binomial-coefficients`, `graphs-walks-and-connectivity`

### A-page items, in dependency order

1. `def-optimization-problem-and-approximation-ratio` — **definition** `[LN]`.
2. `def-ptas-fptas-and-apx` — **definition** `[LN]`.
3. `thm-maximal-matching-is-a-two-approximation-for-vertex-cover` — **theorem** `[LL]`.
4. `def-greedy-set-cover` — **definition** `[LN]`.
5. `lem-greedy-set-cover-charging-bound` — **lemma** `[LL]`.
6. `thm-greedy-set-cover-is-an-h-n-approximation` — **theorem** `[LL]`.
7. `thm-random-cut-has-expected-half-the-edges` — **theorem** `[LL]`.
8. `thm-conditional-expectation-derandomizes-max-cut-half-approximation` — **theorem** `[LL]`.
9. `def-metric-tsp` — **definition** `[LN]`.
10. `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp` — **theorem** `[LL]`.
11. `def-gap-problem-and-gap-preserving-reduction` — **definition** `[LN]`.
12. `lem-pcp-verifier-reduces-to-gap-max-three-sat` — **lemma** `[LL]`.
13. `thm-max-three-sat-has-no-ptas-unless-p-equals-np` — **theorem** `[LL]`.
14. `lem-gap-three-sat-reduces-to-gap-independent-set` — **lemma** `[LL]`.
15. `thm-independent-set-has-no-ptas-unless-p-equals-np` — **theorem** `[LL]`.
16. `def-l-reduction` — **definition** `[LN]`.
17. `lem-l-reductions-transfer-apx-hardness` — **lemma** `[LL]`.
18. `fs-exact-np-hardness-implies-no-constant-approximation` — **false statement** `[LN]`.

### B page — `approximation-algorithms-and-gap-reductions-examples`

`ex-greedy-set-cover-charging-bound` `[LL]` · `ex-l-reductions-transfer-apx-hardness` `[AA]` · `cex-exact-np-hardness-implies-no-constant-approximation` `[AA]`.

### Sources and exact locators

- Williamson--Shmoys, Chapters 1--3 and 13; Arora--Barak, Chapter 22; MIT 6.841 hardness lectures.

**Proof traps:** Every algorithm compares against a proved lower bound on OPT and every hardness ratio is derived from the proved PCP constants.

**Forward references: NONE.**

## TC-37. Kolmogorov Complexity and Algorithmic Randomness

**page id** `kolmogorov-complexity-and-algorithmic-randomness`  
**`requires`** `acceptable-numberings-smn-and-the-recursion-theorem`, `randomized-complexity-and-amplification`, `finite-probability-spaces-and-random-variables`

### A-page items, in dependency order

1. `def-description-machine-and-plain-kolmogorov-complexity` — **definition** `[LN]`.
2. `def-optimal-description-machine` — **definition** `[LN]`.
3. `thm-invariance-theorem-for-plain-complexity` — **theorem** `[LL]`.
4. `lem-most-strings-are-incompressible` — **lemma** `[LL]`.
5. `thm-kolmogorov-complexity-is-not-computable` — **theorem** `[LL]`.
6. `def-conditional-kolmogorov-complexity` — **definition** `[LN]`.
7. `lem-basic-conditional-complexity-inequalities` — **lemma** `[LL]`.
8. `def-prefix-free-machine-and-prefix-complexity` — **definition** `[LN]`.
9. `thm-kraft-inequality` — **theorem** `[LL]`.
10. `thm-invariance-for-prefix-complexity` — **theorem** `[LL]`.
11. `thm-symmetry-of-information-up-to-logarithmic-terms` — **theorem** `[LL]`.
12. `def-incompressibility-method` — **definition** `[LN]`.
13. `def-effectively-open-set-in-cantor-space` — **definition** `[LN]`.
14. `def-martin-lof-test-and-random-sequence` — **definition** `[LN]`.
15. `lem-universal-martin-lof-test-exists` — **lemma** `[LL]`.
16. `thm-levin-schnorr-characterization` — **theorem** `[LL]`.
17. `def-computable-martingale` — **definition** `[LN]`.
18. `thm-martin-lof-randomness-implies-computable-randomness` — **theorem** `[LL]`.
19. `def-effective-hausdorff-dimension` — **definition** `[LN]`.
20. `thm-effective-dimension-is-liminf-prefix-complexity-rate` — **theorem** `[LL]`.
21. `fs-kolmogorov-complexity-is-an-absolute-integer` — **false statement** `[LN]`.
22. `fs-normality-implies-algorithmic-randomness` — **false statement** `[LN]`.

### B page — `kolmogorov-complexity-and-algorithmic-randomness-examples`

`ex-most-strings-are-incompressible` `[LL]` · `ex-effective-dimension-is-liminf-prefix-complexity-rate` `[AA]` · `cex-kolmogorov-complexity-is-an-absolute-integer` `[AA]`.

### Sources and exact locators

- Shen, complete arXiv survey; Simpson, randomness chapters; Franklin--Porter, complete arXiv survey.

**Proof traps:** All machine independence is up to a named additive constant; finite strings and infinite random sequences are not conflated.

**Forward references: NONE.**

---

## 38. Full-text source corpus and sequential comparison

The source audit was performed sequentially. Each row records what was checked
against the published library before the next source was introduced. “Added”
means added to this scaffold, not authored in the live plan.

| pass | complete source read | comparison against library at that pass | disposition |
|---:|---|---|---|
| 1 | Sipser, *Introduction to the Theory of Computation*, 3rd ed. | The library had finite words and one specialised prefix automaton, but no general DFA/NFA, regular-expression, CFG/PDA, Turing-machine, reducibility, or complexity spine. | Added the standard `TC-1`--`TC-14` and `TC-19`--`TC-24` course spine; did not let Sipser's concise advanced chapters stand in for recursion theory or full PCP prerequisites. |
| 2 | Savage, *Models of Computation*, 698 pp. | Sipser's language-centred treatment did not by itself discharge model robustness, RAM/TM simulation, circuit families, or detailed time/space accounting. | Strengthened `TC-9`, `TC-10`, `TC-19`, `TC-25`, and `TC-26`; retained the one-tape baseline and made every simulation overhead explicit. |
| 3 | Gallier, *Introduction to the Theory of Computation*, 398 pp. | The first two passes left normal-form transformations, Myhill--Nerode quotient well-definedness, Ogden, RAM equivalence, acceptable indexings, creative sets, and PCP-to-CFG reductions too compressed. | Expanded `TC-1`--`TC-8` and `TC-10`--`TC-16`; added exact invariants for quotient automata, parse trees, PDA fragments, computation histories, and program indices. |
| 4 | Arora--Barak, *Computational Complexity: A Modern Approach*, 489 pp. | The standard course spine lacked hierarchy, nonuniform, randomized, counting, interactive-proof, PCP, and approximation proof architecture. | Added `TC-24`--`TC-36`; split `IP=PSPACE` and PCP into prerequisite pages so neither appears as an unproved landmark. |
| 5 | Open Logic Project, *Incompleteness and Computability*, 329 pp. | Machine computability existed, but primitive recursion, representability, acceptable numbering, s-m-n, and lambda calculus needed a logic-grade proof order. | Rebuilt `TC-15`--`TC-17` around explicit number coding and normal forms; no incompleteness theorem is assumed. |
| 6 | Zimmermann, *Computability Theory*, 108 pp. | The recursion-theory block needed a second complete construction using register/GOTO programs rather than only Turing-machine notation. | Cross-checked primitive/partial recursion, Gödel numbering, universal functions, s-m-n, Rice--Shapiro, and PCP; retained only results whose proofs close in the track. |
| 7 | Simpson, *Computability, Unsolvability, Randomness*, 151 pp. | The previous sources did not jointly give enough detail on Post's theorem, finite approximation, Cantor-space effectivity, and Martin-Löf randomness. | Strengthened `TC-17`, `TC-18`, and `TC-37`; omitted the deeper basis and priority theorems rather than listing them unproved. |
| 8 | Williamson--Shmoys, *The Design of Approximation Algorithms*, complete electronic book | Arora--Barak emphasises hardness more than elementary approximation design. | Added complete ratio proofs for vertex cover, set cover, Max-Cut, and metric TSP in `TC-36`; LP-based material is deferred because it belongs to an algorithms/optimization track. |

### Textbooks and book-length manuscripts: full-text endpoints

1. **Michael Sipser, *Introduction to the Theory of Computation*, 3rd ed.**
   Complete course-hosted PDF, 10.7 MB:
   <https://cs.brown.edu/courses/csci1810/fall-2023/resources/ch2_readings/Sipser_Introduction.to.the.Theory.of.Computation.3E.pdf>.
   Harvest: Chapters 1--2 for automata and grammars; Chapters 3--6 for Turing
   machines, decidability, reductions, and recursion-theorem applications;
   Chapters 7--10 for complexity, space, hierarchy, and advanced topics.
2. **John E. Savage, *Models of Computation: Exploring the Power of
   Computing*.** Complete 698-page electronic book, author released under a
   Creative Commons licence:
   <https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf>.
   Harvest: Chapters 2--5 and 8--10.
3. **Jean Gallier, *Introduction to the Theory of Computation: Some Notes for
   CIS511*.** Complete 398-page author manuscript:
   <https://www.cis.upenn.edu/~jean/tcbook.pdf>.
   Harvest: Chapters 2--6, 8--14, and 16. Chapter 7's LR parsing and Chapter
   4's hidden Markov models are explicitly out of scope.
4. **Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern
   Approach*.** Complete 489-page official Internet draft:
   <https://theory.cs.princeton.edu/complexity/book.pdf>.
   Harvest: Chapters 1--8, 11, 14, 17--18, 21--22; quantum computation and
   cryptography are deferred to their own tracks.
5. **Richard Zach and the Open Logic Project, *Incompleteness and
   Computability*.** Complete 329-page open textbook:
   <https://ic.openlogicproject.org/ic-screen.pdf>.
   Harvest: Chapters 2--6 and 9; incompleteness is not a prerequisite here.
6. **Karl-Heinz Zimmermann, *Computability Theory*.** Complete 108-page TUHH
   monograph:
   <https://tore.tuhh.de/bitstream/11420/1014/1/fullbook.pdf>.
   Harvest: Chapters 1--8.
7. **Stephen G. Simpson, *Computability, Unsolvability, Randomness*.**
   Complete 151-page course-book manuscript:
   <https://sgslogic.net/t20/notes/cur.pdf>.
   Harvest: computability, relative computability, hierarchy, Cantor space,
   Kolmogorov complexity, and Martin-Löf randomness; later basis theorems are
   omitted from the inventory.
8. **David P. Williamson and David B. Shmoys, *The Design of Approximation
   Algorithms*.** Complete publisher-authorized electronic manuscript:
   <https://www.designofapproxalgs.com/download.php>.
   Harvest: introductory ratio analysis, greedy, local-search, randomization,
   and hardness chapters relevant to `TC-36`.

### Complete lecture notes

- Michael Sipser, **MIT 18.404J Theory of Computation**, all 26 lecture-note
  PDFs and slides:
  <https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/pages/lecture-notes/>.
- Dexter Kozen, **Cornell CS481**, complete 42-page extracted course packet
  with the entire lecture contents and selected solutions:
  <https://www.cs.cornell.edu/~kozen/Papers/481.pdf>.
- Anuj Dawar, **Cambridge Complexity Theory**, complete 47-page notes:
  <https://www.cl.cam.ac.uk/teaching/1213/Complexity/notes.pdf>.
- Madhu Sudan, **MIT 6.841/18.405J Advanced Complexity Theory**, complete
  combined notes plus all individual lecture PDFs:
  <https://people.csail.mit.edu/madhu/ST02/>.
- Shuchi Chawla, **Approximation Algorithms**, complete combined scribe-note
  PDF linked from the course page:
  <https://pages.cs.wisc.edu/~shuchi/courses/880-S07/>.

### Full research and arXiv texts

- Irit Dinur, **“The PCP Theorem by Gap Amplification”**, complete 41-page
  open manuscript:
  <https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf>.
  The institutional record identifies the peer-reviewed JACM version and its
  open file:
  <https://weizmann.esploro.exlibrisgroup.com/esploro/outputs/journalArticle/The-PCP-theorem-by-gap-amplification/993347066803596>.
- Alexander Shen, **“Around Kolmogorov Complexity: Basic Notions and
  Results”**, complete 51-page arXiv paper:
  <https://arxiv.org/pdf/1504.04955>.
- Johanna N. Y. Franklin and Christopher P. Porter, **“Key Developments in
  Algorithmic Randomness”**, complete arXiv text:
  <https://arxiv.org/pdf/2004.02851>.
- Yannick Forster, Dominik Kirst, and Niklas Mück, **“Oracle Computability and
  Turing Reducibility in the Calculus of Inductive Constructions”**, complete
  26-page arXiv paper with linked Coq development:
  <https://arxiv.org/pdf/2307.15543>.

## 39. Canonical-coverage harvest

| canonical heading | owner/disposition |
|---|---|
| finite alphabets, strings, languages, operations | `TC-1`; published finite-word notions cited |
| DFA, product constructions, decision problems | `TC-2`, `TC-4` |
| NFA, epsilon moves, subset construction | `TC-3` |
| regular expressions and Kleene theorem | `TC-4` |
| pumping, Myhill--Nerode, minimization | `TC-5` |
| CFG, parse trees, ambiguity, CNF/GNF | `TC-6` |
| PDA and CFG equivalence | `TC-7` |
| CFL closure, pumping, Ogden, CYK | `TC-8` |
| Turing machines, configurations, variants | `TC-9`, `TC-10` |
| universal computation and encodings | `TC-10` |
| decidable, recognizable, enumerable | `TC-11` |
| diagonalization, halting, Busy Beaver | `TC-12` |
| many-one/Turing reductions, Rice | `TC-13` |
| PCP and undecidable grammar problems | `TC-14` (Post correspondence; not probabilistically checkable proofs) |
| primitive/partial recursive functions, lambda calculus | `TC-15` |
| acceptable numberings, s-m-n, recursion, creative sets | `TC-16` |
| arithmetical hierarchy, Post, limit lemma | `TC-17` |
| oracles, jumps, degrees | `TC-18` |
| time, space, constructibility, invariance | `TC-19` |
| P, NP, coNP, reductions | `TC-20` |
| Cook--Levin | `TC-21` |
| classical NP-complete problems | `TC-22` |
| PSPACE, Savitch, TQBF, alternation | `TC-23` |
| time/space hierarchies and padding | `TC-24` |
| L, NL, reachability, coNL | `TC-25` |
| circuits, advice, P/poly, Karp--Lipton | `TC-26` |
| polynomial hierarchy and relativization | `TC-27` |
| RP, ZPP, BPP, PP, amplification, PIT | `TC-28` |
| #P, GapP, #SAT, PP | `TC-29` |
| interactive/public-coin proofs | `TC-30` |
| finite-field arithmetization and sum-check | `TC-31` |
| `IP=PSPACE` | `TC-32` with complete proof spine |
| explicit expanders and constraint graphs | `TC-33` |
| gap amplification and assignment testing | `TC-34` |
| alphabet reduction and PCP theorem | `TC-35` with complete proof spine |
| approximation and PCP-based gaps | `TC-36` |
| Kolmogorov complexity and Martin-Löf randomness | `TC-37` |

## 40. Deferred specialist continuations

These topics are not mathematical items in this scaffold. Their names here do
not create source-cited assertions, dependencies, or obligations for a builder.

- **Computability:** priority methods, Friedberg--Muchnik, minimal degrees,
  hyperarithmetic hierarchy, admissible recursion, effective descriptive set
  theory, computable structure theory, and computable analysis.
- **Formal languages:** automata on infinite words and trees, algebraic
  automata theory, transducers, weighted/probabilistic automata, indexed
  languages, and compiler parser engineering.
- **Complexity:** Reingold's undirected-connectivity algorithm, Toda's theorem,
  communication/query/streaming/distributed/parameterized/descriptive
  complexity, pseudorandom generators, extractors, cryptography, quantum
  complexity, and the full modern circuit-lower-bound programme.
- **Approximation:** LP/SDP hierarchies, Unique Games, parallel repetition,
  optimal inapproximability constants, online algorithms, and randomized
  rounding beyond the elementary finite-probability prerequisites.
- **Algorithmic information:** resource-bounded Kolmogorov complexity,
  Solomonoff induction, K-triviality, effective dimension beyond the basic
  characterization, and randomness over general computable measures.

## 41. Amendments owed to other scaffolds

| owner | amendment after this track is authored |
|---|---|
| linear recurrences / rational generating functions | optionally cite the general DFA definition when describing its prefix automaton; keep the authored enumeration argument unchanged |
| group theory | replace the prose-only “computability machinery” seam in group decision problems by stable citations to `TC-11`--`TC-14`; keep Novikov--Boone outside this track |
| mathematical logic | cite `TC-15`--`TC-18` for computability prerequisites before Gödel/Rosser/Tarski developments |
| probability | no amendment required; finite probability remains sufficient for `TC-28`, while measure-theoretic Cantor-space facts are built concretely in `TC-37` |
| algorithms/optimization | cite `TC-20`--`TC-22` and `TC-36`; own data structures, LP, flows, and optimization-specific machinery |

No amendment requires touching a published article before this track builds.

## 42. Proposed-id, dependency, and self-containment audit

- Every A-page id and B-page id is new relative to the live `plan-spec.json`,
  authored item directory, aliases, and existing prose scaffolds at the time of
  this audit. The builder repeats the collision check because intervening
  levels may add ids.
- The pair order in §3 is topological. External prerequisites are published
  and internally earlier prerequisites are named by exact proposed page id.
- `TC-31` uses the published finite-field construction; `TC-33` uses the
  published finite-dimensional spectral theorem. Neither assumes a planned,
  empty-item page.
- Every definition's set/function/quotient/encoding data is available earlier
  or constructed locally. Every theorem, lemma, proposition, and corollary has
  a complete proof source and an explicit local proof spine. The scaffold has
  no external-proof or proof-omitted mathematical item.
- Church--Turing is labelled a thesis, and open separation questions are
  labelled open. They are not theorem substitutes.
- `IP=PSPACE` is not a one-line citation: protocol semantics, game-value
  simulation, finite-field arithmetization, root bounds, multilinearization,
  sum-check, degree control, communication, and soundness are all earlier
  items in `TC-30`--`TC-32`.
- PCP is not a one-line citation: explicit expanders, constraint values,
  regularization, graph powering, codes, linearity/quadratic tests, assignment
  testers, composition, alphabet reduction, iteration, uniformity, and
  parameter accounting are earlier items in `TC-33`--`TC-35`.
- Approximation hardness in `TC-36` may therefore cite an authored PCP theorem
  without importing an external black box.

### Recomputed dependency levels

Levels use the repository convention that roots have level 0 and each page has
level one greater than the maximum level of its requirements.

| level | proposed A pages |
|---:|---|
| 22 | `TC-1` |
| 23 | `TC-2`, `TC-6`, `TC-9` |
| 24 | `TC-3`, `TC-7`, `TC-10` |
| 25 | `TC-4`, `TC-8`, `TC-11`, `TC-15`, `TC-19` |
| 26 | `TC-5`, `TC-12`, `TC-20` |
| 27 | `TC-13`, `TC-21`, `TC-23`, `TC-28` |
| 28 | `TC-14`, `TC-16`, `TC-22`, `TC-24`, `TC-25`, `TC-26`, `TC-29`, `TC-30` |
| 29 | `TC-17`, `TC-27`, `TC-31`, `TC-37` |
| 30 | `TC-18`, `TC-32` |
| 31 | `TC-33` |
| 32 | `TC-34` |
| 33 | `TC-35` |
| 34 | `TC-36` |

## 43. Final scaffold audit

- Thirty-seven A pages, each with one leaf B companion; every A inventory is
  below 60 items.
- All mathematical items have component-provenance codes. No theorem,
  proposition, lemma, definition, corollary, example, counterexample, or false
  statement has an `ai-generated` statement.
- No source was represented as full text unless its complete PDF, complete
  electronic manuscript, or complete lecture set was actually accessible.
  The five primary textbook manuscripts alone exceed the required minimum of
  three; Zimmermann, Simpson, and Williamson--Shmoys provide additional
  book-length checks.
- Sources were compared sequentially, not blended before gaps were recorded.
- No page cites a B companion, a later A page, an empty-item planned page, or an
  external unproved landmark.
- Every syntax/semantics boundary, encoding/decoding map, representative
  choice, reduction direction, simulation overhead, resource bound,
  probability space, oracle convention, and machine-dependence constant is
  in a global or local proof obligation.
- The file contains no absolute order assignment, authored live item, plan
  mutation, TypeScript command, orchestration runbook, or request to repair a
  published article.

## 44. Binding live-graph audit (2026-09-08)

This section and §§45--52 supersede every conflicting inventory, dependency
claim, collision claim, count, or readiness claim above.  The earlier material
is retained as research history.  This audit used the live page files, all
live item frontmatter, and `research/plan-spec.json` as read-only evidence; it
does not authorize a mutation of any of them.

The live Computability Theory block is orders 581--654: thirty-seven A/B
pairs, of which thirty-three pairs have page files and four pairs are not yet
built (`TC-32`, `TC-34`, `TC-35`, and `TC-36`).  All sixty-six existing page
files say `status: published`.  Their 693 plan-listed item records split into
407 published item files and 286 draft item files.  Thus a published page is
not evidence that every item it lists is published.

The exact item-status census is:

| orders | A-page base id | A published/draft | B published/draft |
|---:|---|---:|---:|
| 581--582 | `formal-languages-encodings-and-decision-problems` | 10/8 | 0/4 |
| 583--584 | `deterministic-finite-automata-and-regular-languages` | 16/0 | 3/0 |
| 585--586 | `nondeterministic-finite-automata-and-subset-construction` | 4/11 | 0/3 |
| 587--588 | `regular-expressions-and-kleenes-theorem` | 0/16 | 0/3 |
| 589--590 | `myhill-nerode-theory-and-dfa-minimization` | 0/16 | 0/3 |
| 591--592 | `context-free-grammars-and-normal-forms` | 20/0 | 3/0 |
| 593--594 | `pushdown-automata-and-context-free-languages` | 0/17 | 0/3 |
| 595--596 | `context-free-pumping-ogden-and-parsing` | 0/16 | 0/3 |
| 597--598 | `turing-machines-configurations-and-computation` | 9/7 | 0/3 |
| 599--600 | `robust-machine-models-and-universal-computation` | 8/8 | 0/3 |
| 601--602 | `decidable-recognizable-and-enumerable-languages` | 4/11 | 0/3 |
| 603--604 | `diagonalization-and-the-halting-problem` | 15/0 | 3/0 |
| 605--606 | `computable-reductions-and-rices-theorem` | 0/16 | 0/3 |
| 607--608 | `post-correspondence-and-language-undecidability` | 0/15 | 0/3 |
| 609--610 | `primitive-recursive-and-partial-computable-functions` | 0/16 | 0/3 |
| 611--612 | `acceptable-numberings-smn-and-the-recursion-theorem` | 0/16 | 0/3 |
| 613--614 | `the-arithmetical-hierarchy-and-posts-theorem` | 18/0 | 3/0 |
| 615--616 | `oracle-computability-the-jump-and-turing-degrees` | 23/0 | 3/0 |
| 617--618 | `resource-bounds-and-machine-invariance` | 3/11 | 0/3 |
| 619--620 | `p-np-conp-and-polynomial-reductions` | 17/0 | 3/0 |
| 621--622 | `the-cook-levin-theorem` | 0/16 | 0/3 |
| 623--624 | `classical-np-completeness-reductions` | 19/0 | 3/0 |
| 625--626 | `space-complexity-savitch-and-tqbf` | 0/17 | 0/3 |
| 627--628 | `time-and-space-hierarchy-theorems` | 20/0 | 3/0 |
| 629--630 | `logarithmic-space-nl-and-reachability` | 19/0 | 3/0 |
| 631--632 | `boolean-circuits-and-nonuniform-complexity` | 16/0 | 3/0 |
| 633--634 | `the-polynomial-hierarchy-and-relativization` | 25/0 | 4/0 |
| 635--636 | `randomized-complexity-and-amplification` | 0/17 | 0/3 |
| 637--638 | `counting-complexity-and-sharpp` | 17/0 | 3/0 |
| 639--640 | `interactive-proof-systems-and-public-coins` | 16/0 | 3/0 |
| 641--642 | `arithmetization-and-the-sum-check-protocol` | 24/0 | 4/0 |
| 643--644 | `the-ip-equals-pspace-theorem` | 0/0 | 0/0 |
| 645--646 | `expander-graphs-and-constraint-graphs` | 31/0 | 4/0 |
| 647--648 | `gap-amplification-and-assignment-testing` | 0/0 | 0/0 |
| 649--650 | `alphabet-reduction-and-the-pcp-theorem` | 0/0 | 0/0 |
| 651--652 | `approximation-algorithms-and-gap-reductions` | 0/0 | 0/0 |
| 653--654 | `kolmogorov-complexity-and-algorithmic-randomness` | 22/0 | 3/0 |

The exact graph checks have the following binding results.

- No Computability A page requires a B page, and no Computability B page is a
  prerequisite of any live page.  No outside item consumes an item whose only
  home is a Computability B page.  All future B pages remain dependency
  leaves: their only page requirement is their A companion and nothing may
  depend on them.
- No Computability item has a same-page or cross-page forward item edge.  The
  four empty pairs occur only after their named A prerequisites.  Every A-page
  prerequisite is an earlier A page.
- No direct or transitive Computability item path reaches a
  Recorded--Not-Proved-Here item or `deferred-set-theory-beyond-choice`.
  Neither may be introduced during the repairs below.
- No page or item outside Computability Theory currently has a direct edge to
  a Computability page or item.  Published consumers found below are therefore
  all on later Computability pages.
- The only uncovered cross-page item interface is on
  `randomized-complexity-and-amplification`: both
  `def-polynomial-identity-testing` and `thm-schwartz-zippel-lemma` use
  `def-monomials-multidegree-and-total-degree`, whose home is
  `linear-algebra-methods-in-combinatorics`.  Add that A page to the former A
  page's `requires` array.
- `primitive-recursive-and-partial-computable-functions` requires the legacy
  published page `construction-of-the-natural-numbers`.  Its page and items
  exist on disk, but the live plan entry is the legacy `P`/empty-inventory
  form.  Hydrate that plan entry from the published page and item frontmatter;
  do not replace it with a new page or copy its mathematics locally.

The live item-home scan also finds two duplicate A/B homes.  The exact plan
amendment is to remove the A-page `examples` arrays from
`space-complexity-savitch-and-tqbf` and
`randomized-complexity-and-amplification`; retain the B companion homes.  The
duplicated ids are respectively
`ex-bounded-reachability-recursion-is-correct`, `ex-ap-equals-pspace`,
`cex-savitch-stores-the-whole-configuration-graph`, and
`ex-majority-error-bound-from-chebyshev`, `ex-pit-is-in-corp`,
`cex-reusing-random-bits-amplifies-success`.

## 45. Exact published-page defects and deferred repairs

Published pages and item files are immutable during this audit.  The following
are exact instructions for a later authorized repair.

The semantic pass covered all thirty-three existing pairs by reconciling the
current bytes with their independent reader records:

| reader record | A-page bases checked |
|---|---|
| `frontier-24-reader-10.md` | `formal-languages-encodings-and-decision-problems`; `deterministic-finite-automata-and-regular-languages`; `context-free-grammars-and-normal-forms` |
| `frontier-25-reader-10.md` | `nondeterministic-finite-automata-and-subset-construction`; `pushdown-automata-and-context-free-languages` |
| `frontier-25-reader-11.md` | `turing-machines-configurations-and-computation` |
| `frontier-26-reader-10.md` | `regular-expressions-and-kleenes-theorem`; `context-free-pumping-ogden-and-parsing` |
| `frontier-26-reader-11.md` | `robust-machine-models-and-universal-computation` |
| `frontier-27-reader-9.md` | `myhill-nerode-theory-and-dfa-minimization`; `decidable-recognizable-and-enumerable-languages` |
| `frontier-27-reader-10.md` | `primitive-recursive-and-partial-computable-functions`; `resource-bounds-and-machine-invariance` |
| `frontier-28-reader-11.md` | `diagonalization-and-the-halting-problem`; `p-np-conp-and-polynomial-reductions` |
| `frontier-29-reader-18.md` | `computable-reductions-and-rices-theorem`; `the-cook-levin-theorem` |
| `frontier-29-reader-19.md` | `space-complexity-savitch-and-tqbf`; `randomized-complexity-and-amplification` |
| `frontier-30-reader-19.md` | `post-correspondence-and-language-undecidability`; `acceptable-numberings-smn-and-the-recursion-theorem` |
| `frontier-30-reader-20.md` | `classical-np-completeness-reductions` |
| `frontier-31a-reader-21.md` | `the-arithmetical-hierarchy-and-posts-theorem`; `time-and-space-hierarchy-theorems` |
| `frontier-31a-reader-22.md` | `logarithmic-space-nl-and-reachability` |
| `frontier-32-reader-1.md` | `boolean-circuits-and-nonuniform-complexity`; `counting-complexity-and-sharpp` |
| `frontier-32-reader-2.md` | `interactive-proof-systems-and-public-coins`; `kolmogorov-complexity-and-algorithmic-randomness` |
| `frontier-32-reader-19.md` | `oracle-computability-the-jump-and-turing-degrees` |
| `frontier-33-reader-17.md` | `the-polynomial-hierarchy-and-relativization`; `expander-graphs-and-constraint-graphs` |
| `frontier-33-reader-18.md` | `arithmetization-and-the-sum-check-protocol` |

The initial circuit/counting failures in `frontier-32-reader-1.md` were
reconciled against the later 2026-09-07 audit/judge-pass metadata in the
current item files.  On current bytes, the DPDA construction below is the only
remaining mathematical proof gap exposed by those records.

### Deterministic pushdown complement closure

On the published A page
`pushdown-automata-and-context-free-languages`, the draft item
`prop-deterministic-cfls-are-closed-under-complement` imports a "standard DPDA
complementation construction" as fact F1.  State complementation is not valid
until premature blocking and end-of-input behavior have been totalized.  Insert
the following four A-page items, in this order, immediately before that
proposition, and rewrite the proposition to depend on the fourth item instead
of F1:

1. `lem-simple-normal-form-for-dpdas-preserves-determinism-and-language` —
   convert a DPDA to the simple endmarked normal form while preserving
   determinism and its language.
2. `def-dpda-dead-end-configuration-and-local-dead-end-triple` — define the
   finitely detectable configurations/triples at which the next forced move is
   unavailable.
3. `lem-dead-end-free-dpda-reads-the-complete-endmarked-input` — prove that a
   run with no dead end consumes the complete endmarked input.
4. `lem-dpda-dead-end-totalization-is-deterministic-and-language-preserving`
   — redirect every dead-end triple to a sink that consumes the remainder,
   reads the endmarker, and empties the stack; verify determinism and language
   preservation before swapping final and nonfinal states.

This is the construction in Lewis--Papadimitriou, *Elements of the Theory of
Computation*, 2nd ed., Theorem 3.7.1, printed pp. 160--161, in the
[authoritative full text](https://home.cse.ust.hk/~lzhang/teach/3721/Elements_of_Theory_of_Computation_2ed_Lewis_Papadimitriou.pdf).
Each inserted item has **0 direct published consumers** and **0 items in its
transitive published consumer closure**: its immediate consumer is a draft
item.  These four are planned-only repairs, not independent Phase-2 roots.

The historical review report for
`cex-unrestricted-diagonalization-respects-any-bound` identified an
unsupported asymptotic-Theta assertion.  The current immutable item has
already removed that assertion and now proves only the required greater-than-
one-step conclusion.  No further repair is owed for that item.

### Frontmatter-to-plan resynchronization

For each of the 693 existing Computability inventory entries, later plan work
must copy `title`, `kind`, and dependency arrays from the corresponding item
frontmatter.  There are no kind mismatches, but there are 107 title mismatches
and 55 dependency-array mismatches.  The exact affected ids are recorded in
§51; no item file is to be rewritten merely to match the stale prose or plan.

## 46. Binding replacement for `TC-32`: IP = PSPACE

**A page** `the-ip-equals-pspace-theorem`

**requires** `arithmetization-and-the-sum-check-protocol`,
`space-complexity-savitch-and-tqbf`,
`chebyshev-bounds-and-mertens-theorems`.

The last edge supplies the already-published Bertrand bound used to choose a
prime field of polynomial bit length.  Trial division in the resulting
polynomial interval and elementary finite-field arithmetic must be proved in
the item that uses them; no prime-number theorem or randomized prime search is
assumed.

The binding A inventory, in proof order, is:

1. `def-qbf-arithmetization-operators`
2. `lem-quantifier-polynomials-agree-on-booleans`
3. `def-multilinearization-operator`
4. `lem-multilinearization-preserves-boolean-values` — strengthen the
   existing proposed contract to include the required degree bound.
5. `lem-efficient-prime-field-for-a-polynomial-soundness-budget`
6. `def-shamir-protocol-for-tqbf`
7. `lem-honest-prover-maintains-the-claim-invariant`
8. `lem-each-round-has-polynomial-communication` — include explicit degree,
   message, round, and point-evaluation bounds.
9. `lem-shamir-protocol-has-perfect-completeness`
10. `lem-first-false-claim-survives-with-root-bound-probability`
11. `lem-total-soundness-follows-by-union-bound`
12. `lem-shamir-qbf-verifier-runs-in-polynomial-time`
13. `thm-tqbf-has-a-polynomial-round-interactive-proof`
14. `thm-pspace-is-contained-in-ip`
15. `thm-ip-equals-pspace`
16. `cor-ip-is-closed-under-complement`
17. `thm-ip-can-be-given-perfect-completeness`
18. `fs-ip-equals-pspace-needs-no-degree-reduction`
19. `fs-the-verifier-trusts-the-final-field-value`

**B page** `the-ip-equals-pspace-theorem-examples` requires only the A page and
contains, in order, the new
`ex-two-quantifier-qbf-arithmetization-transcript` followed by the preserved
`ex-multilinearization-preserves-boolean-values`,
`ex-ip-can-be-given-perfect-completeness`, and
`cex-ip-equals-pspace-needs-no-degree-reduction`.  Every B item depends only
on A items.

## 47. Binding replacement for `TC-34`: gap amplification

**A page** `gap-amplification-and-assignment-testing`

**requires** `expander-graphs-and-constraint-graphs`,
`the-cook-levin-theorem`, `randomized-complexity-and-amplification`,
`algebraic-extensions-degree-and-finite-fields`.

The old mixture of graph powering, assignment testing, and undeveloped code
claims is not a proof of the reduction.  Replace it with this proof-ordered
inventory:

1. `def-gap-preserving-csp-reduction` — strengthen the existing proposed
   definition to record completeness, gap, linear blowup, and uniformity.
2. `lem-complete-linear-blowup-reductions-compose`
3. `def-degree-reduction-by-expander-clouds`
4. `lem-cloud-consistency-forces-near-constant-labels`
5. `thm-degree-reduction-preserves-unsatisfaction`
6. `def-constraint-graph-powering` — include the powered local-view alphabet,
   constraints, and construction-time accounting.
7. `lem-canonical-local-view-lift-preserves-perfect-satisfiability`
8. `def-plurality-decoding-of-powered-local-views`
9. `lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws`
10. `lem-plurality-consistency-along-middle-walk-positions`
11. `lem-expander-walk-violated-edge-collision-bound`
12. `lem-overlap-controlled-union-lower-bound`
13. `lem-powering-preserves-perfect-satisfiability`
14. `lem-powering-amplifies-small-gaps` — prove the numerical Dinur powering
    bound from items 8--12.
15. `thm-gap-amplification-step` — include completeness, gap, alphabet, size,
    arity, and uniform construction time.
16. `def-explicit-constant-rate-constant-distance-code`
17. `def-reed-solomon-outer-code-and-binary-linear-inner-code`
18. `lem-reed-solomon-outer-code-has-constant-rate-and-distance`
19. `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation`
20. `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time`
21. `lem-concatenated-code-multiplies-rate-and-distance`
22. `thm-explicit-code-construction-and-distance`
23. `def-assignment-tester-and-rejection-ratio`
24. `def-hadamard-linearity-constraint-system`
25. `thm-linearity-test-rejects-proportionally-to-distance`
26. `def-quadratic-consistency-test`
27. `lem-quadratic-test-soundness`
28. `lem-circuit-satisfaction-is-linear-quadratic-consistency`
29. `thm-constant-query-assignment-tester`
30. `lem-tester-size-and-construction-time-are-polynomial`
31. `fs-repeating-constraints-amplifies-the-gap`

The proof contract for items 8--15 is the full powering analysis: state the
walk distribution, decoding rule, consistency event, collision/overlap loss,
new alphabet and size, computability, and the numerical range of the amplified
gap.  Items 17--22 use a constant-rate Reed--Solomon outer code over a
power-of-two field and a deterministically constructed binary linear inner
code.  The random inner-code calculation, its conditional-expectation
derandomization, concatenated rate/distance product, and polynomial encoding
time are all proved locally; the theorem must not import an unspecified
"explicit good code."  The B page
`gap-amplification-and-assignment-testing-examples` requires only its A page
and contains the preserved leaf items
`ex-degree-reduction-preserves-unsatisfaction`,
`ex-tester-size-and-construction-time-are-polynomial`, and
`cex-repeating-constraints-amplifies-the-gap`, plus the new
`ex-plurality-decoding-of-powered-local-views`.  They give respectively the
cloud calculation, tester-size calculation, repetition counterexample, and a
numerical local-view/plurality calculation.

## 48. Binding replacement for `TC-35`: alphabet reduction and PCP

**A page** `alphabet-reduction-and-the-pcp-theorem`

**requires** `gap-amplification-and-assignment-testing`,
`arithmetization-and-the-sum-check-protocol`, `the-cook-levin-theorem`.

The binding A inventory is:

1. `def-pcp-verifier-randomness-query-and-proof-length`
2. `def-pcp-class-with-completeness-and-soundness`
3. `lem-two-query-pcps-and-constraint-graphs-are-equivalent`
4. `def-walsh-hadamard-encoding-and-relative-distance`
5. `lem-walsh-hadamard-code-has-distance-one-half`
6. `lem-random-subsum-detects-a-nonzero-binary-vector`
7. `def-quadratic-equation-instance-and-tensor-code-oracles`
8. `lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix`
9. `lem-blr-testing-supplies-nearby-linear-decoders`
10. `lem-tensor-consistency-test-soundness`
11. `lem-random-subsum-verifies-all-quadratic-equations-with-constant-error`
12. `thm-constant-query-exponential-pcp-for-quadratic-equations`
13. `def-pcp-of-proximity-and-concatenation-test`
14. `lem-concatenation-test-enforces-a-shared-prefix`
15. `thm-two-piece-pcp-of-proximity`
16. `def-composition-with-an-assignment-tester`
17. `lem-composition-preserves-perfect-completeness`
18. `lem-composition-transfers-rejection-ratio`
19. `thm-alphabet-reduction-step` — construct the binary clusters and prove
    perfect completeness, soundness transfer, constant arity, linear blowup,
    and uniformity.
20. `lem-alphabet-reduction-controls-size-and-degree`
21. `def-dinur-pcp-transformation`
22. `lem-one-transformation-preserves-satisfiability`
23. `lem-one-transformation-amplifies-gap`
24. `lem-one-transformation-has-constant-factor-growth`
25. `lem-logarithmically-many-iterations-reach-constant-gap`
26. `thm-gap-csp-is-np-hard`
27. `thm-pcp-theorem-np-equals-pcp-log-n-o-one`
28. `thm-pcp-error-amplification`
29. `fs-gap-amplification-alone-controls-alphabet`
30. `fs-pcp-proofs-are-randomized-strings`

Items 4--15 must prove the tests and proximity/concatenation interface rather
than name them.  Items 16--20 must account for cluster size, constant arity,
perfect completeness, soundness transfer, uniform construction time, and
linear blowup.  Items 21--27 must display the double transformation and all
iteration parameters.  The B page requires only this A page and contains the
preserved leaf items `ex-composition-preserves-perfect-completeness`,
`ex-pcp-error-amplification`, and
`cex-gap-amplification-alone-controls-alphabet`, plus the new
`ex-walsh-hadamard-encoding-and-testing`.  Every B item depends only on A
items.

## 49. Binding replacement for `TC-36`: approximation

**A page** `approximation-algorithms-and-gap-reductions`

**requires** `alphabet-reduction-and-the-pcp-theorem`,
`classical-np-completeness-reductions`,
`finite-counting-and-binomial-coefficients`,
`graphs-walks-and-connectivity`, `trees-forests-and-spanning-trees`,
`eulerian-and-hamiltonian-graphs`.

The two added graph pages supply spanning-tree and Euler-tour machinery for
the metric-TSP proof.  The binding A inventory is:

1. `def-optimization-problem-and-approximation-ratio`
2. `def-ptas-fptas-and-apx`
3. `thm-maximal-matching-is-a-two-approximation-for-vertex-cover`
4. `def-greedy-set-cover`
5. `def-harmonic-number-for-set-cover-analysis`
6. `lem-greedy-set-cover-charging-bound`
7. `thm-greedy-set-cover-is-an-h-n-approximation`
8. `thm-random-cut-has-expected-half-the-edges`
9. `thm-conditional-expectation-derandomizes-max-cut-half-approximation`
10. `def-metric-tsp`
11. `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp`
12. `lem-euler-double-tree-shortcutting-does-not-increase-cost`
13. `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp`
14. `def-gap-problem-and-gap-preserving-reduction`
15. `lem-pcp-verifier-reduces-to-gap-max-three-sat`
16. `thm-max-three-sat-has-no-ptas-unless-p-equals-np`
17. `lem-gap-three-sat-reduces-to-gap-independent-set` — strengthen the
    existing proposed contract by proving that the clause graph's independence
    number equals the maximum number of simultaneously satisfiable clauses.
18. `thm-independent-set-has-no-ptas-unless-p-equals-np`
19. `def-l-reduction`
20. `def-apx-hardness-and-apx-completeness`
21. `lem-l-reductions-transfer-apx-hardness`
22. `fs-exact-np-hardness-implies-no-constant-approximation`

The PCP-to-Max-3SAT item must construct the constant-size local-predicate CNF,
track the number of coins/queries/clauses, and prove both completeness and the
gap; a bare appeal to Cook--Levin is insufficient.  The B page
`approximation-algorithms-and-gap-reductions-examples` requires only the A
page.  Preserve `ex-greedy-set-cover-charging-bound`,
`ex-l-reductions-transfer-apx-hardness`, and
`cex-exact-np-hardness-implies-no-constant-approximation`; add
`ex-conditional-expectation-for-a-small-max-cut-instance` and
`ex-double-tree-shortcutting-for-a-metric-tsp-instance`.  All five are leaf
items depending only on A items.

The algorithmic and hardness proofs above are supported by the complete
Williamson--Shmoys text: greedy set cover §1.6 and Theorem 1.11 (printed
pp. 24--26), metric TSP Lemma 2.10 and Theorems 2.11--2.12 (printed
pp. 44--46), conditional expectation in Chapter 5 (printed pp. 105--109), and
L-reductions Definition 16.4 and Theorems 16.5--16.6 (printed pp. 412--415),
available as an [authoritative full text](https://www.designofapproxalgs.com/book.pdf).

The `TC-32` contract was checked against Arora--Barak §8.5, Theorem 8.17 and
Remark 8.19 (printed pp. 157--161).  The advanced PCP contracts in §§47--48
were checked against §§18.4.1--18.4.3 (printed pp. 363--369), and
§18.5/Definition 18.27, Lemmas 18.28--18.31, Claims 18.32--18.34, and
Corollary 18.35 (printed pp. 369--379), in the [authoritative full
text](https://theory.cs.princeton.edu/complexity/book.pdf).
The code subchain in §47 uses the same full text's Definition 17.8 and Lemma
17.9 (printed pp. 328--330), Reed--Solomon construction and distance proof in
§17.5.2, and concatenation Definition 17.19 and Claim 17.20 (printed
pp. 333--335), together with the fully proved conditional-expectation method
from Williamson--Shmoys Chapter 5 cited above.  This closes the source's own
warning that merely knowing a good code exists does not provide an efficient
encoder.
The original article's bibliographic endpoint is also the
[Dinur institutional record](https://weizmann.esploro.exlibrisgroup.com/esploro/outputs/journalArticle/The-PCP-theorem-by-gap-amplification/993347066803596).

## 50. Supplier classes, cross-category seams, and validation

### Phase-2-eligible supplier closure

There are 55 direct published-to-draft edges from 47 distinct published
consumer items to 29 draft supplier roots.
Closing their draft prerequisites produces exactly 55 Phase-2-eligible items
on ten A pages.  §52 gives, for every one of the 55 items, the exact direct
published consumers and the complete transitive published consumer closure,
grouped by home page; it explicitly records zero direct consumers where
appropriate.  This is the repair set that removes all current
published-to-draft item edges.  A supplier with zero direct published
consumers can still be Phase-2 eligible when it lies on a draft path to a
published consumer.

### Planned-only suppliers with zero published impact

Every planned-only supplier id in §§45--49, whether preserved from the earlier
unbuilt inventory or newly inserted, has **0 direct published consumers** and
a **0-item complete transitive published consumer closure** in the current
graph.  This applies individually to the four DPDA ids in §45 and all A-page
ids in the following exact sets:

- `TC-32`: `def-qbf-arithmetization-operators`,
  `lem-quantifier-polynomials-agree-on-booleans`,
  `def-multilinearization-operator`,
  `lem-multilinearization-preserves-boolean-values`,
  `lem-efficient-prime-field-for-a-polynomial-soundness-budget`,
  `def-shamir-protocol-for-tqbf`,
  `lem-honest-prover-maintains-the-claim-invariant`,
  `lem-each-round-has-polynomial-communication`,
  `lem-shamir-protocol-has-perfect-completeness`,
  `lem-first-false-claim-survives-with-root-bound-probability`,
  `lem-total-soundness-follows-by-union-bound`,
  `lem-shamir-qbf-verifier-runs-in-polynomial-time`,
  `thm-tqbf-has-a-polynomial-round-interactive-proof`,
  `thm-pspace-is-contained-in-ip`, `thm-ip-equals-pspace`,
  `cor-ip-is-closed-under-complement`,
  `thm-ip-can-be-given-perfect-completeness`,
  `fs-ip-equals-pspace-needs-no-degree-reduction`,
  `fs-the-verifier-trusts-the-final-field-value`.
- `TC-34`: `def-gap-preserving-csp-reduction`,
  `lem-complete-linear-blowup-reductions-compose`,
  `def-degree-reduction-by-expander-clouds`,
  `lem-cloud-consistency-forces-near-constant-labels`,
  `thm-degree-reduction-preserves-unsatisfaction`,
  `def-constraint-graph-powering`,
  `lem-canonical-local-view-lift-preserves-perfect-satisfiability`,
  `def-plurality-decoding-of-powered-local-views`,
  `lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws`,
  `lem-plurality-consistency-along-middle-walk-positions`,
  `lem-expander-walk-violated-edge-collision-bound`,
  `lem-overlap-controlled-union-lower-bound`,
  `lem-powering-preserves-perfect-satisfiability`,
  `lem-powering-amplifies-small-gaps`, `thm-gap-amplification-step`,
  `def-explicit-constant-rate-constant-distance-code`,
  `def-reed-solomon-outer-code-and-binary-linear-inner-code`,
  `lem-reed-solomon-outer-code-has-constant-rate-and-distance`,
  `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation`,
  `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time`,
  `lem-concatenated-code-multiplies-rate-and-distance`,
  `thm-explicit-code-construction-and-distance`,
  `def-assignment-tester-and-rejection-ratio`,
  `def-hadamard-linearity-constraint-system`,
  `thm-linearity-test-rejects-proportionally-to-distance`,
  `def-quadratic-consistency-test`, `lem-quadratic-test-soundness`,
  `lem-circuit-satisfaction-is-linear-quadratic-consistency`,
  `thm-constant-query-assignment-tester`,
  `lem-tester-size-and-construction-time-are-polynomial`,
  `fs-repeating-constraints-amplifies-the-gap`.
- `TC-35`: `def-pcp-verifier-randomness-query-and-proof-length`,
  `def-pcp-class-with-completeness-and-soundness`,
  `lem-two-query-pcps-and-constraint-graphs-are-equivalent`,
  `def-walsh-hadamard-encoding-and-relative-distance`,
  `lem-walsh-hadamard-code-has-distance-one-half`,
  `lem-random-subsum-detects-a-nonzero-binary-vector`,
  `def-quadratic-equation-instance-and-tensor-code-oracles`,
  `lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix`,
  `lem-blr-testing-supplies-nearby-linear-decoders`,
  `lem-tensor-consistency-test-soundness`,
  `lem-random-subsum-verifies-all-quadratic-equations-with-constant-error`,
  `thm-constant-query-exponential-pcp-for-quadratic-equations`,
  `def-pcp-of-proximity-and-concatenation-test`,
  `lem-concatenation-test-enforces-a-shared-prefix`,
  `thm-two-piece-pcp-of-proximity`,
  `def-composition-with-an-assignment-tester`,
  `lem-composition-preserves-perfect-completeness`,
  `lem-composition-transfers-rejection-ratio`,
  `thm-alphabet-reduction-step`,
  `lem-alphabet-reduction-controls-size-and-degree`,
  `def-dinur-pcp-transformation`,
  `lem-one-transformation-preserves-satisfiability`,
  `lem-one-transformation-amplifies-gap`,
  `lem-one-transformation-has-constant-factor-growth`,
  `lem-logarithmically-many-iterations-reach-constant-gap`,
  `thm-gap-csp-is-np-hard`,
  `thm-pcp-theorem-np-equals-pcp-log-n-o-one`,
  `thm-pcp-error-amplification`,
  `fs-gap-amplification-alone-controls-alphabet`,
  `fs-pcp-proofs-are-randomized-strings`.
- `TC-36`: `def-optimization-problem-and-approximation-ratio`,
  `def-ptas-fptas-and-apx`,
  `thm-maximal-matching-is-a-two-approximation-for-vertex-cover`,
  `def-greedy-set-cover`, `def-harmonic-number-for-set-cover-analysis`,
  `lem-greedy-set-cover-charging-bound`,
  `thm-greedy-set-cover-is-an-h-n-approximation`,
  `thm-random-cut-has-expected-half-the-edges`,
  `thm-conditional-expectation-derandomizes-max-cut-half-approximation`,
  `def-metric-tsp`,
  `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp`,
  `lem-euler-double-tree-shortcutting-does-not-increase-cost`,
  `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp`,
  `def-gap-problem-and-gap-preserving-reduction`,
  `lem-pcp-verifier-reduces-to-gap-max-three-sat`,
  `thm-max-three-sat-has-no-ptas-unless-p-equals-np`,
  `lem-gap-three-sat-reduces-to-gap-independent-set`,
  `thm-independent-set-has-no-ptas-unless-p-equals-np`, `def-l-reduction`,
  `def-apx-hardness-and-apx-completeness`,
  `lem-l-reductions-transfer-apx-hardness`,
  `fs-exact-np-hardness-implies-no-constant-approximation`.

The B-page items in §§46--49 are leaves, not suppliers, and likewise have zero
published consumers.

### Cross-category reconciliation

- Category Theory has zero direct item edges and zero page-requirement edges
  in either direction.  No Category Theory scaffold amendment is owed.
- Foundations/Set Theory supplies only earlier published relations, functions,
  ZFC, and the legacy natural-number construction.  No path reaches the
  deferred beyond-choice page.  No Foundations/Set Theory scaffold amendment
  is owed; only the central legacy-plan hydration in §44 is needed.
- Abstract Algebra supplies polynomial and finite-field material;
  Combinatorics supplies graphs, probability, counting, trees, and Euler
  tours; Linear Algebra supplies spectral machinery.  The only omitted live
  interface is the exact randomized-complexity edge recorded in §44.  The
  unbuilt approximation page additionally needs the two graph edges in §49.
- No currently repaired outside scaffold or published page consumes a
  Computability item.  Therefore no reverse seam amendment is owed elsewhere.

### Validation gates

Before applying these instructions, rerun stable-id collision checks against
all item files, aliases, the live plan, and all prose scaffolds: the assertion
in §42 that every proposed id was new is stale.  Then require: unique item
homes; A-only, strictly earlier page requirements; B-only companion
requirements and zero B consumers; no published-to-draft item edge after the
55-item Phase-2 closure; no forward item edge; no path to recorded/unproved or
deferred-choice material; and exact equality between plan item metadata and
item frontmatter for every existing id.  The read-only audit passed all of
these structural checks except the expressly recorded metadata drift,
duplicate homes, uncovered randomized-complexity page edge, legacy-plan
hydration, and published-to-draft edges.

## 51. Exact live-plan metadata resynchronization set

The following generated inventory is binding for the current snapshot.  Each
line gives a home page and the exact ids whose plan metadata must be replaced
from item frontmatter.

- `formal-languages-encodings-and-decision-problems`: dependency arrays (7) `def-language-concatenation-powers-and-kleene-star`, `lem-language-concatenation-is-associative`, `lem-reversal-is-an-involution-and-reverses-concatenation`, `lem-induced-word-map-has-the-free-extension-property`, `def-effective-binary-encoding-and-decoder`, `def-decision-search-and-function-problem`, `fs-a-language-is-a-set-of-symbols`; titles (0) .
- `deterministic-finite-automata-and-regular-languages`: dependency arrays (2) `def-extended-dfa-transition-function`, `def-dfa-acceptance-and-recognized-language`; titles (0) .
- `myhill-nerode-theory-and-dfa-minimization`: dependency arrays (2) `thm-myhill-nerode-characterization`, `thm-pumping-lemma-for-regular-languages`; titles (0) .
- `context-free-grammars-and-normal-forms`: dependency arrays (0) ; titles (1) `def-language-generated-by-a-cfg`.
- `context-free-grammars-and-normal-forms-examples`: dependency arrays (1) `ex-elimination-of-useless-symbols`; titles (3) `ex-elimination-of-useless-symbols`, `ex-cfl-closure-under-union-concatenation-star-and-homomorphism`, `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`.
- `pushdown-automata-and-context-free-languages`: dependency arrays (1) `thm-pda-to-cfg-construction`; titles (0) .
- `context-free-pumping-ogden-and-parsing`: dependency arrays (2) `thm-ogdens-lemma`, `fs-the-cfl-pumping-lemma-characterizes-cfls`; titles (0) .
- `context-free-pumping-ogden-and-parsing-examples`: dependency arrays (1) `cex-the-cfl-pumping-lemma-characterizes-cfls`; titles (0) .
- `turing-machines-configurations-and-computation`: dependency arrays (3) `def-nondeterministic-accepting-computation`, `prop-valid-computation-histories-are-decidable`, `lem-acceptance-is-configuration-reachability`; titles (0) .
- `robust-machine-models-and-universal-computation`: dependency arrays (1) `lem-step-by-step-interpreter-for-machine-codes`; titles (0) .
- `diagonalization-and-the-halting-problem`: dependency arrays (1) `thm-machine-acceptance-is-recognizable`; titles (0) .
- `computable-reductions-and-rices-theorem`: dependency arrays (1) `thm-rice-shapiro-positive-information-direction`; titles (0) .
- `computable-reductions-and-rices-theorem-examples`: dependency arrays (0) ; titles (1) `ex-many-one-reductions-transfer-decidability-and-recognizability`.
- `post-correspondence-and-language-undecidability`: dependency arrays (1) `thm-proper-inclusions-in-the-chomsky-hierarchy`; titles (2) `def-chomsky-hierarchy`, `thm-proper-inclusions-in-the-chomsky-hierarchy`.
- `post-correspondence-and-language-undecidability-examples`: dependency arrays (1) `ex-proper-inclusions-in-the-chomsky-hierarchy`; titles (0) .
- `primitive-recursive-and-partial-computable-functions`: dependency arrays (3) `def-kleene-t-predicate-and-output-function`, `thm-partial-recursive-iff-turing-computable`, `thm-lambda-definable-iff-partial-recursive`; titles (0) .
- `acceptable-numberings-smn-and-the-recursion-theorem`: dependency arrays (4) `def-universal-and-acceptable-numbering`, `thm-nonhalting-is-productive-and-halting-is-creative`, `thm-myhill-isomorphism-theorem-for-creative-sets`, `fs-program-indices-are-unique`; titles (0) .
- `the-arithmetical-hierarchy-and-posts-theorem`: dependency arrays (1) `thm-halting-is-sigma-one-complete`; titles (0) .
- `oracle-computability-the-jump-and-turing-degrees`: dependency arrays (3) `def-turing-jump`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-relative-halting-is-oracle-ce-complete`; titles (23) `def-oracle-turing-machine`, `def-turing-reducibility-and-equivalence`, `lem-turing-reducibility-is-a-preorder`, `def-turing-degree-and-degree-order`, `lem-degree-order-is-representative-independent`, `def-tagged-join-of-oracles`, `thm-turing-degrees-form-an-upper-semilattice`, `def-turing-jump`, `lem-jump-is-well-defined-on-degrees`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `def-oracle-ce-completeness`, `thm-relative-halting-is-oracle-ce-complete`, `cor-finite-jumps-match-arithmetical-levels`, `def-truth-table-reduction`, `lem-total-oracle-functional-has-computable-use-bound`, `prop-truth-table-implies-turing-reduction`, `def-computably-dominated-oracle`, `lem-halting-oracle-is-not-computably-dominated`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`.
- `oracle-computability-the-jump-and-turing-degrees-examples`: dependency arrays (0) ; titles (3) `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`, `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`.
- `resource-bounds-and-machine-invariance`: dependency arrays (3) `thm-universal-simulation-with-logarithmic-overhead`, `prop-polynomial-time-and-space-are-model-invariant`, `fs-model-invariance-means-equal-step-counts`; titles (1) `thm-universal-simulation-with-logarithmic-overhead`.
- `resource-bounds-and-machine-invariance-examples`: dependency arrays (1) `cex-model-invariance-means-equal-step-counts`; titles (1) `cex-model-invariance-means-equal-step-counts`.
- `the-cook-levin-theorem`: dependency arrays (0) ; titles (5) `def-local-tableau-window`, `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal`, `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`, `lem-cook-levin-map-is-polynomial-time`, `fs-cook-levin-enumerates-all-branches`.
- `the-cook-levin-theorem-examples`: dependency arrays (1) `cex-cook-levin-enumerates-all-branches`; titles (0) .
- `space-complexity-savitch-and-tqbf`: dependency arrays (2) `lem-space-bounded-machines-have-exponentially-many-configurations`, `thm-tqbf-is-pspace-complete`; titles (0) .
- `time-and-space-hierarchy-theorems`: dependency arrays (1) `thm-read-only-workspace-space-hierarchy`; titles (0) .
- `logarithmic-space-nl-and-reachability`: dependency arrays (0) ; titles (1) `lem-logspace-reductions-compose`.
- `logarithmic-space-nl-and-reachability-examples`: dependency arrays (1) `cex-nl-equals-conl-follows-by-state-swapping`; titles (0) .
- `boolean-circuits-and-nonuniform-complexity`: dependency arrays (1) `thm-undecidable-languages-exist-in-p-poly`; titles (1) `fs-shannon-counting-gives-an-explicit-hard-function`.
- `the-polynomial-hierarchy-and-relativization`: dependency arrays (0) ; titles (25) `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `lem-ph-quantifier-block-closure`, `prop-np-and-conp-are-the-first-levels`, `lem-ph-circuit-matrix-final-block-encoding`, `thm-bounded-alternation-qbf-is-level-complete`, `lem-ph-adaptive-oracle-transcript-normal-form`, `thm-quantifier-and-oracle-characterizations-of-ph`, `prop-ph-containments-and-polynomial-space`, `lem-collapse-at-one-level-propagates`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`, `cor-ph-complete-language-forces-collapse`, `lem-standard-containments-relativize`, `def-relativizing-proof-technique`, `lem-oracle-diagonalization-finite-extension`, `thm-an-oracle-separates-p-from-np`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `prop-elementary-high-low-identities`, `def-promise-problem`, `def-promise-preserving-reduction`, `rem-oracle-and-promise-conventions-are-distinct`, `fs-relativized-separations-prove-unrelativized-separations`.
- `the-polynomial-hierarchy-and-relativization-examples`: dependency arrays (0) ; titles (4) `ex-np-and-conp-are-the-first-levels`, `ex-relativization-alone-cannot-resolve-p-versus-np`, `cex-relativized-separations-prove-unrelativized-separations`, `ex-promise-oracle-off-promise-answers`.
- `randomized-complexity-and-amplification`: dependency arrays (6) `thm-zpp-equals-rp-intersection-corp`, `lem-majority-error-bound-from-chebyshev`, `thm-adleman-bpp-is-contained-in-p-poly`, `thm-freivalds-matrix-product-verification`, `def-polynomial-identity-testing`, `thm-schwartz-zippel-lemma`; titles (1) `thm-freivalds-matrix-product-verification`.
- `counting-complexity-and-sharpp`: dependency arrays (1) `def-p-with-a-sharpp-oracle`; titles (0) .
- `expander-graphs-and-constraint-graphs`: dependency arrays (0) ; titles (31) `def-regular-multigraph-and-normalized-adjacency`, `lem-constant-vector-is-a-top-eigenvector`, `def-spectral-edge-and-vertex-expansion`, `thm-expander-mixing-lemma`, `lem-cheeger-indicator-and-positive-part-energy`, `lem-cheeger-sweep-and-layer-cake`, `thm-cheeger-inequalities-for-finite-regular-graphs`, `cor-expander-independent-sets-coloring-and-diameter`, `def-margulis-gabber-galil-graph`, `lem-margulis-family-is-constant-degree-and-neighbor-computable`, `def-finite-torus-fourier-transform`, `lem-finite-torus-fourier-orthogonality-and-affine-change`, `lem-fourier-analysis-of-margulis-adjacency`, `lem-margulis-diamond-weight-bound`, `thm-margulis-family-has-uniform-spectral-gap`, `lem-expander-size-adjustment-and-laziness`, `cor-explicit-polynomial-time-constant-degree-expanders-exist`, `def-constraint-graph-and-labeling-value`, `def-constraint-graph-regularization`, `lem-cloud-plurality-rounding`, `lem-regularization-preserves-value-quantitatively`, `lem-constraint-expander-overlay`, `def-graph-power-and-walk-constraint`, `lem-expander-walk-contraction`, `lem-expander-walk-restricted-operator`, `thm-expander-walk-hits-dense-bad-sets`, `prop-expander-walk-sampled-and-moving-sets`, `lem-expander-walk-bad-edge-return`, `prop-expander-walk-hits-bad-edges`, `def-gap-csp`, `fs-nonconstructive-expanders-suffice-for-uniform-reductions`.
- `expander-graphs-and-constraint-graphs-examples`: dependency arrays (0) ; titles (4) `ex-expander-mixing-lemma`, `ex-expander-walk-hits-dense-bad-sets`, `cex-nonconstructive-expanders-suffice-for-uniform-reductions`, `ex-constraint-cloud-rounding-and-loop-counts`.
- `kolmogorov-complexity-and-algorithmic-randomness`: dependency arrays (3) `lem-basic-conditional-complexity-inequalities`, `thm-symmetry-of-information-up-to-logarithmic-terms`, `thm-levin-schnorr-characterization`; titles (0) .

## 52. Exact Phase-2 supplier-to-published-consumer map

For each of the 55 Phase-2-eligible supplier items, this appendix records the
exact direct published consumers and the complete distinct transitive
published consumer closure.  Transitive reachability is allowed to pass
through draft intermediates; results are grouped by the published consumer's
home page.  A displayed zero is literal, not an omitted search result.

#### `def-computable-program-transformer` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (3):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.

#### `def-numbering-of-partial-computable-functions` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (42):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (9): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (2): `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-parameter-specialization-function` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (4):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (1): `thm-totality-is-pi-two-complete`.

#### `def-universal-and-acceptable-numbering` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (4): `def-relative-computability-and-enumerability`, `lem-universal-martin-lof-test-exists`, `thm-halting-is-sigma-one-complete`, `thm-invariance-for-prefix-complexity`.

Complete transitive published consumer closure (42):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (9): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (2): `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `lem-self-reference-construction-from-smn` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (3):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.

#### `thm-kleenes-second-recursion-theorem` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (1): `lem-halting-oracle-is-not-computably-dominated`.

Complete transitive published consumer closure (3):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.

#### `thm-smn-parameter-theorem` (home: `acceptable-numberings-smn-and-the-recursion-theorem`)

Direct published consumers (1): `thm-totality-is-pi-two-complete`.

Complete transitive published consumer closure (4):
- `oracle-computability-the-jump-and-turing-degrees` (2): `lem-halting-oracle-is-not-computably-dominated`, `thm-some-turing-reductions-are-not-truth-table-reductions`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (1): `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (1): `thm-totality-is-pi-two-complete`.

#### `def-computable-many-one-reduction` (home: `computable-reductions-and-rices-theorem`)

Direct published consumers (3): `def-arithmetical-level-completeness`, `def-oracle-ce-completeness`, `thm-totality-is-pi-two-complete`.

Complete transitive published consumer closure (7):
- `oracle-computability-the-jump-and-turing-degrees` (3): `cor-finite-jumps-match-arithmetical-levels`, `def-oracle-ce-completeness`, `thm-relative-halting-is-oracle-ce-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem` (3): `def-arithmetical-level-completeness`, `thm-halting-is-sigma-one-complete`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (1): `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-turing-reduction` (home: `computable-reductions-and-rices-theorem`)

Direct published consumers (1): `def-relative-computability-and-enumerability`.

Complete transitive published consumer closure (34):
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (7): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (1): `ex-shoenfield-limit-lemma`.

#### `def-epsilon-closure-of-a-state-set` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (3):
- `nondeterministic-finite-automata-and-subset-construction` (3): `cor-dfas-and-nfas-recognize-the-same-languages`, `def-nfa-acceptance-and-recognized-language`, `thm-subset-construction-preserves-language`.

#### `def-extended-nfa-transition` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (1): `def-nfa-acceptance-and-recognized-language`.

Complete transitive published consumer closure (3):
- `nondeterministic-finite-automata-and-subset-construction` (3): `cor-dfas-and-nfas-recognize-the-same-languages`, `def-nfa-acceptance-and-recognized-language`, `thm-subset-construction-preserves-language`.

#### `def-subset-construction-dfa` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (2):
- `nondeterministic-finite-automata-and-subset-construction` (2): `cor-dfas-and-nfas-recognize-the-same-languages`, `thm-subset-construction-preserves-language`.

#### `lem-subset-construction-state-invariant` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (1): `thm-subset-construction-preserves-language`.

Complete transitive published consumer closure (2):
- `nondeterministic-finite-automata-and-subset-construction` (2): `cor-dfas-and-nfas-recognize-the-same-languages`, `thm-subset-construction-preserves-language`.

#### `prop-every-dfa-is-an-nfa` (home: `nondeterministic-finite-automata-and-subset-construction`)

Direct published consumers (1): `cor-dfas-and-nfas-recognize-the-same-languages`.

Complete transitive published consumer closure (1):
- `nondeterministic-finite-automata-and-subset-construction` (1): `cor-dfas-and-nfas-recognize-the-same-languages`.

#### `def-composition-and-primitive-recursion-schemes` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (51):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (17): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-bounded-arithmetic-formula`, `def-relative-computability-and-enumerability`, `def-sigma-n-pi-n-and-delta-n-sets`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `lem-prenex-normalization-preserves-level`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-initial-arithmetic-functions` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (51):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (17): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-bounded-arithmetic-formula`, `def-relative-computability-and-enumerability`, `def-sigma-n-pi-n-and-delta-n-sets`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `lem-prenex-normalization-preserves-level`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-kleene-t-predicate-and-output-function` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (1): `thm-totality-is-pi-two-complete`.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-mu-minimization-and-partial-recursive-function` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-natural-number-coding-of-finite-sequences` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-primitive-recursive-function` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (2): `def-bounded-arithmetic-formula`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`.

Complete transitive published consumer closure (51):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (17): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-bounded-arithmetic-formula`, `def-relative-computability-and-enumerability`, `def-sigma-n-pi-n-and-delta-n-sets`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `lem-prenex-normalization-preserves-level`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `lem-turing-step-coding-is-primitive-recursive` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `thm-kleene-normal-form` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (1): `thm-sigma-one-sets-are-exactly-ce-sets`.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `thm-partial-recursive-iff-turing-computable` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (42):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (9): `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (2): `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` (home: `primitive-recursive-and-partial-computable-functions`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (46):
- `kolmogorov-complexity-and-algorithmic-randomness` (4): `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-levin-schnorr-characterization`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (1): `ex-effective-dimension-is-liminf-prefix-complexity-rate`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `the-arithmetical-hierarchy-and-posts-theorem` (12): `cor-delta-one-sets-are-exactly-decidable`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.

#### `def-pairwise-independent-hash-family` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `lem-hashing-commits-public-randomness`.

Complete transitive published consumer closure (2):
- `interactive-proof-systems-and-public-coins` (2): `lem-hashing-commits-public-randomness`, `thm-private-coin-ip-equals-public-coin-ip`.

#### `def-probabilistic-polynomial-time-machine` (home: `randomized-complexity-and-amplification`)

Direct published consumers (2): `def-interactive-proof-transcript-round-and-strategy`, `def-ip`.

Complete transitive published consumer closure (32):
- `arithmetization-and-the-sum-check-protocol` (8): `cor-sum-check-field-size-error-budget`, `def-sum-check-instance-and-protocol`, `fs-sum-check-computes-all-exponential-summands`, `lem-first-false-round-is-caught-by-root-bound`, `lem-sum-check-perfect-completeness`, `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`, `prop-arithmetized-formula-counting-sum`, `thm-sum-check-soundness`.
- `arithmetization-and-the-sum-check-protocol-examples` (2): `cex-sum-check-computes-all-exponential-summands`, `ex-sum-check-three-variable-transcript`.
- `counting-complexity-and-sharpp` (3): `cor-majority-sat-is-pp-complete`, `thm-pp-is-closed-under-complement`, `thm-pp-is-sign-testing-gap-p`.
- `interactive-proof-systems-and-public-coins` (16): `def-completeness-and-soundness`, `def-graph-nonisomorphism-protocol`, `def-interactive-proof-transcript-round-and-strategy`, `def-ip`, `def-private-coin-public-coin-and-arthur-merlin-protocol`, `def-protocol-game-tree-and-value`, `fs-soundness-quantifies-only-over-honest-provers`, `fs-the-prover-must-run-in-polynomial-time`, `lem-hashing-commits-public-randomness`, `lem-optimal-prover-may-be-deterministic`, `lem-protocol-value-is-computable-in-polynomial-space`, `lem-sequential-repetition-amplifies-error`, `prop-np-is-contained-in-ip`, `thm-graph-nonisomorphism-is-in-ip`, `thm-ip-is-contained-in-pspace`, `thm-private-coin-ip-equals-public-coin-ip`.
- `interactive-proof-systems-and-public-coins-examples` (3): `cex-soundness-quantifies-only-over-honest-provers`, `ex-graph-nonisomorphism-is-in-ip`, `ex-sequential-repetition-amplifies-error`.

#### `def-rp-corp-zpp-bpp-and-pp` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `thm-pp-is-sign-testing-gap-p`.

Complete transitive published consumer closure (3):
- `counting-complexity-and-sharpp` (3): `cor-majority-sat-is-pp-complete`, `thm-pp-is-closed-under-complement`, `thm-pp-is-sign-testing-gap-p`.

#### `lem-chernoff-bound-for-bernoulli-trials` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `lem-sequential-repetition-amplifies-error`.

Complete transitive published consumer closure (4):
- `interactive-proof-systems-and-public-coins` (2): `lem-sequential-repetition-amplifies-error`, `thm-graph-nonisomorphism-is-in-ip`.
- `interactive-proof-systems-and-public-coins-examples` (2): `ex-graph-nonisomorphism-is-in-ip`, `ex-sequential-repetition-amplifies-error`.

#### `thm-schwartz-zippel-lemma` (home: `randomized-complexity-and-amplification`)

Direct published consumers (1): `rem-polynomial-identity-bounds-for-sum-check`.

Complete transitive published consumer closure (1):
- `arithmetization-and-the-sum-check-protocol` (1): `rem-polynomial-identity-bounds-for-sum-check`.

#### `def-asymptotic-resource-comparison` (home: `resource-bounds-and-machine-invariance`)

Direct published consumers (5): `def-dtime-ntime-dspace-and-nspace`, `def-read-only-input-workspace-classes`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.

Complete transitive published consumer closure (122):
- `boolean-circuits-and-nonuniform-complexity` (5): `def-ac-zero-nc-one-and-nc`, `prop-nc-one-is-contained-in-l-and-l-in-nc-two`, `thm-circuit-sat-is-np-complete`, `thm-p-is-contained-in-p-poly`, `thm-p-poly-equals-p-with-polynomial-advice`.
- `boolean-circuits-and-nonuniform-complexity-examples` (1): `ex-p-poly-equals-p-with-polynomial-advice`.
- `classical-np-completeness-reductions` (13): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `def-reduction-gadget-and-interface-invariant`, `fs-gadget-correctness-needs-only-one-direction`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `thm-subset-sum-reduces-to-partition`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`, `thm-vertex-cover-reduces-to-set-cover`.
- `classical-np-completeness-reductions-examples` (3): `cex-gadget-correctness-needs-only-one-direction`, `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (6): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.
- `interactive-proof-systems-and-public-coins` (3): `lem-protocol-value-is-computable-in-polynomial-space`, `prop-np-is-contained-in-ip`, `thm-ip-is-contained-in-pspace`.
- `logarithmic-space-nl-and-reachability` (17): `cor-nspace-is-closed-under-complement-above-logspace`, `def-l-and-nl`, `def-logspace-many-one-reduction`, `def-logspace-uniform-circuit-family`, `def-p-complete-under-logspace-reductions`, `def-read-only-input-logspace-machine`, `fs-nl-equals-conl-follows-by-state-swapping`, `lem-logspace-machines-have-polynomially-many-configurations`, `lem-logspace-reductions-compose`, `lem-nonreachability-has-an-inductive-counting-certificate`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `lem-reachability-count-is-verifiable-in-nl`, `thm-circuit-value-is-p-complete`, `thm-directed-st-connectivity-is-nl-complete`, `thm-immerman-szelepcsenyi-nl-equals-conl`, `thm-nl-is-contained-in-dspace-log-squared-n`, `thm-read-only-input-savitch-simulation`.
- `logarithmic-space-nl-and-reachability-examples` (3): `cex-nl-equals-conl-follows-by-state-swapping`, `ex-circuit-value-is-p-complete`, `ex-logspace-reductions-compose`.
- `p-np-conp-and-polynomial-reductions` (17): `def-conp`, `def-exp-and-nexp`, `def-np-by-verifiers`, `def-np-hard-and-np-complete`, `def-p`, `def-polynomial-time-many-one-reduction`, `def-polynomially-balanced-verifier`, `def-search-version-of-an-np-relation`, `fs-np-complete-means-known-not-in-p`, `fs-np-means-not-polynomial`, `lem-polynomial-reductions-compose`, `prop-an-np-complete-language-in-p-implies-p-equals-np`, `prop-np-is-contained-in-pspace-and-pspace-in-exp`, `prop-p-is-contained-in-np-intersection-conp`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `thm-sat-search-reduces-to-sat-decision`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`.
- `p-np-conp-and-polynomial-reductions-examples` (3): `cex-np-means-not-polynomial`, `ex-np-is-contained-in-pspace-and-pspace-in-exp`, `ex-p-is-contained-in-np-intersection-conp`.
- `resource-bounds-and-machine-invariance` (1): `def-dtime-ntime-dspace-and-nspace`.
- `the-polynomial-hierarchy-and-relativization` (23): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `def-relativizing-proof-technique`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-collapse-at-one-level-propagates`, `lem-oracle-diagonalization-finite-extension`, `lem-ph-adaptive-oracle-transcript-normal-form`, `lem-ph-circuit-matrix-final-block-encoding`, `lem-ph-quantifier-block-closure`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-elementary-high-low-identities`, `prop-np-and-conp-are-the-first-levels`, `prop-ph-containments-and-polynomial-space`, `rem-oracle-and-promise-conventions-are-distinct`, `thm-an-oracle-collapses-p-and-np`, `thm-an-oracle-separates-p-from-np`, `thm-bounded-alternation-qbf-is-level-complete`, `thm-quantifier-and-oracle-characterizations-of-ph`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`.
- `the-polynomial-hierarchy-and-relativization-examples` (4): `cex-relativized-separations-prove-unrelativized-separations`, `ex-np-and-conp-are-the-first-levels`, `ex-promise-oracle-off-promise-answers`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (18): `cor-l-is-properly-contained-in-pspace`, `cor-p-is-properly-contained-in-exp`, `def-efficient-universal-simulation-with-clock`, `def-read-only-input-workspace-classes`, `fs-unrestricted-diagonalization-respects-any-bound`, `lem-effective-enumeration-of-clocked-machines`, `lem-padding-transfers-time-bounds`, `lem-read-only-workspace-diagonal-machine-halts`, `lem-read-only-workspace-simulates-in-all-tapes-space`, `lem-read-only-workspace-universal-simulation`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `prop-hierarchy-theorems-do-not-separate-p-from-np`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-nondeterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.
- `time-and-space-hierarchy-theorems-examples` (3): `cex-unrestricted-diagonalization-respects-any-bound`, `ex-hierarchy-theorems-do-not-separate-p-from-np`, `ex-time-diagonal-language-respects-its-budget`.

#### `def-time-and-space-constructible-function` (home: `resource-bounds-and-machine-invariance`)

Direct published consumers (6): `def-dtime-ntime-dspace-and-nspace`, `def-efficient-universal-simulation-with-clock`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `thm-nondeterministic-time-hierarchy`.

Complete transitive published consumer closure (121):
- `boolean-circuits-and-nonuniform-complexity` (5): `def-ac-zero-nc-one-and-nc`, `prop-nc-one-is-contained-in-l-and-l-in-nc-two`, `thm-circuit-sat-is-np-complete`, `thm-p-is-contained-in-p-poly`, `thm-p-poly-equals-p-with-polynomial-advice`.
- `boolean-circuits-and-nonuniform-complexity-examples` (1): `ex-p-poly-equals-p-with-polynomial-advice`.
- `classical-np-completeness-reductions` (13): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `def-reduction-gadget-and-interface-invariant`, `fs-gadget-correctness-needs-only-one-direction`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `thm-subset-sum-reduces-to-partition`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`, `thm-vertex-cover-reduces-to-set-cover`.
- `classical-np-completeness-reductions-examples` (3): `cex-gadget-correctness-needs-only-one-direction`, `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (6): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.
- `interactive-proof-systems-and-public-coins` (3): `lem-protocol-value-is-computable-in-polynomial-space`, `prop-np-is-contained-in-ip`, `thm-ip-is-contained-in-pspace`.
- `logarithmic-space-nl-and-reachability` (17): `cor-nspace-is-closed-under-complement-above-logspace`, `def-l-and-nl`, `def-logspace-many-one-reduction`, `def-logspace-uniform-circuit-family`, `def-p-complete-under-logspace-reductions`, `def-read-only-input-logspace-machine`, `fs-nl-equals-conl-follows-by-state-swapping`, `lem-logspace-machines-have-polynomially-many-configurations`, `lem-logspace-reductions-compose`, `lem-nonreachability-has-an-inductive-counting-certificate`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `lem-reachability-count-is-verifiable-in-nl`, `thm-circuit-value-is-p-complete`, `thm-directed-st-connectivity-is-nl-complete`, `thm-immerman-szelepcsenyi-nl-equals-conl`, `thm-nl-is-contained-in-dspace-log-squared-n`, `thm-read-only-input-savitch-simulation`.
- `logarithmic-space-nl-and-reachability-examples` (3): `cex-nl-equals-conl-follows-by-state-swapping`, `ex-circuit-value-is-p-complete`, `ex-logspace-reductions-compose`.
- `p-np-conp-and-polynomial-reductions` (17): `def-conp`, `def-exp-and-nexp`, `def-np-by-verifiers`, `def-np-hard-and-np-complete`, `def-p`, `def-polynomial-time-many-one-reduction`, `def-polynomially-balanced-verifier`, `def-search-version-of-an-np-relation`, `fs-np-complete-means-known-not-in-p`, `fs-np-means-not-polynomial`, `lem-polynomial-reductions-compose`, `prop-an-np-complete-language-in-p-implies-p-equals-np`, `prop-np-is-contained-in-pspace-and-pspace-in-exp`, `prop-p-is-contained-in-np-intersection-conp`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `thm-sat-search-reduces-to-sat-decision`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`.
- `p-np-conp-and-polynomial-reductions-examples` (3): `cex-np-means-not-polynomial`, `ex-np-is-contained-in-pspace-and-pspace-in-exp`, `ex-p-is-contained-in-np-intersection-conp`.
- `resource-bounds-and-machine-invariance` (1): `def-dtime-ntime-dspace-and-nspace`.
- `the-polynomial-hierarchy-and-relativization` (23): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `def-relativizing-proof-technique`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-collapse-at-one-level-propagates`, `lem-oracle-diagonalization-finite-extension`, `lem-ph-adaptive-oracle-transcript-normal-form`, `lem-ph-circuit-matrix-final-block-encoding`, `lem-ph-quantifier-block-closure`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-elementary-high-low-identities`, `prop-np-and-conp-are-the-first-levels`, `prop-ph-containments-and-polynomial-space`, `rem-oracle-and-promise-conventions-are-distinct`, `thm-an-oracle-collapses-p-and-np`, `thm-an-oracle-separates-p-from-np`, `thm-bounded-alternation-qbf-is-level-complete`, `thm-quantifier-and-oracle-characterizations-of-ph`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`.
- `the-polynomial-hierarchy-and-relativization-examples` (4): `cex-relativized-separations-prove-unrelativized-separations`, `ex-np-and-conp-are-the-first-levels`, `ex-promise-oracle-off-promise-answers`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (17): `cor-l-is-properly-contained-in-pspace`, `cor-p-is-properly-contained-in-exp`, `def-efficient-universal-simulation-with-clock`, `fs-unrestricted-diagonalization-respects-any-bound`, `lem-effective-enumeration-of-clocked-machines`, `lem-padding-transfers-time-bounds`, `lem-read-only-workspace-diagonal-machine-halts`, `lem-read-only-workspace-simulates-in-all-tapes-space`, `lem-read-only-workspace-universal-simulation`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `prop-hierarchy-theorems-do-not-separate-p-from-np`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-nondeterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.
- `time-and-space-hierarchy-theorems-examples` (3): `cex-unrestricted-diagonalization-respects-any-bound`, `ex-hierarchy-theorems-do-not-separate-p-from-np`, `ex-time-diagonal-language-respects-its-budget`.

#### `thm-stay-put-moves-can-be-eliminated` (home: `robust-machine-models-and-universal-computation`)

Direct published consumers (1): `thm-multitape-machines-have-one-tape-simulations`.

Complete transitive published consumer closure (5):
- `diagonalization-and-the-halting-problem` (2): `fs-diagonalization-needs-literal-source-self-reading`, `thm-machine-acceptance-is-recognizable`.
- `robust-machine-models-and-universal-computation` (3): `lem-multitape-simulation-has-quadratic-time-overhead`, `thm-existence-of-a-universal-turing-machine`, `thm-multitape-machines-have-one-tape-simulations`.

#### `def-pspace-and-npspace` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (4): `cor-l-is-properly-contained-in-pspace`, `lem-polynomial-space-oracle-absorption`, `lem-protocol-value-is-computable-in-polynomial-space`, `prop-ph-containments-and-polynomial-space`.

Complete transitive published consumer closure (12):
- `interactive-proof-systems-and-public-coins` (2): `lem-protocol-value-is-computable-in-polynomial-space`, `thm-ip-is-contained-in-pspace`.
- `the-polynomial-hierarchy-and-relativization` (7): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-ph-containments-and-polynomial-space`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (1): `cor-l-is-properly-contained-in-pspace`.

#### `def-quantified-boolean-formula-and-tqbf` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `def-reachable-configuration-formula` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `lem-quantifier-reuse-keeps-reachability-formulas-polynomial` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `lem-space-bounded-machines-have-exponentially-many-configurations` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (1): `lem-space-diagonal-machine-halts`.

Complete transitive published consumer closure (9):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (2): `lem-space-diagonal-machine-halts`, `thm-deterministic-space-hierarchy`.

#### `prop-tqbf-is-in-pspace` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `thm-tqbf-is-pspace-complete` (home: `space-complexity-savitch-and-tqbf`)

Direct published consumers (2): `cor-ph-complete-language-forces-collapse`, `lem-polynomial-space-oracle-absorption`.

Complete transitive published consumer closure (7):
- `the-polynomial-hierarchy-and-relativization` (5): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-polynomial-space-oracle-absorption`, `thm-an-oracle-collapses-p-and-np`.
- `the-polynomial-hierarchy-and-relativization-examples` (2): `cex-relativized-separations-prove-unrelativized-separations`, `ex-relativization-alone-cannot-resolve-p-versus-np`.

#### `def-boolean-formula-cnf-and-sat` (home: `the-cook-levin-theorem`)

Direct published consumers (2): `def-arithmetization-of-a-boolean-formula`, `def-number-sat`.

Complete transitive published consumer closure (28):
- `arithmetization-and-the-sum-check-protocol` (5): `def-arithmetization-of-a-boolean-formula`, `lem-arithmetization-agrees-on-boolean-inputs`, `lem-degree-under-arithmetized-quantifiers`, `lem-formula-arithmetization-degree-and-evaluation-cost`, `prop-arithmetized-formula-counting-sum`.
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (10): `cor-majority-sat-is-pp-complete`, `def-majority-sat`, `def-number-sat`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `fs-sharpp-is-a-language-class`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `prop-number-sat-is-in-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (3): `cex-sharpp-is-a-language-class`, `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `def-bounded-computation-tableau` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `lem-cook-levin-can-be-made-parsimonious`.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `def-local-tableau-window` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `def-tseitin-extension-variable` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (9):
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `lem-cook-levin-can-be-made-parsimonious`.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-cook-levin-map-is-polynomial-time` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `lem-cook-levin-can-be-made-parsimonious`.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-exactly-one-symbol-constraints-have-polynomial-size` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-start-accept-and-transition-constraints-have-polynomial-size` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-tableau-cell-alphabet-is-constant` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (17):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (5): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.

#### `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (9):
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `prop-sat-is-in-np` (home: `the-cook-levin-theorem`)

Direct published consumers (0): **0**.

Complete transitive published consumer closure (10):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `thm-cook-levin-sat-is-np-complete` (home: `the-cook-levin-theorem`)

Direct published consumers (1): `thm-circuit-sat-is-np-complete`.

Complete transitive published consumer closure (10):
- `boolean-circuits-and-nonuniform-complexity` (1): `thm-circuit-sat-is-np-complete`.
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `thm-three-sat-is-np-complete` (home: `the-cook-levin-theorem`)

Direct published consumers (5): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-three-colourability`.

Complete transitive published consumer closure (9):
- `classical-np-completeness-reductions` (7): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`.
- `classical-np-completeness-reductions-examples` (2): `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.

#### `def-initial-accepting-and-rejecting-configurations` (home: `turing-machines-configurations-and-computation`)

Direct published consumers (2): `def-halting-computation-and-divergence`, `def-nondeterministic-accepting-computation`.

Complete transitive published consumer closure (253):
- `arithmetization-and-the-sum-check-protocol` (8): `cor-sum-check-field-size-error-budget`, `def-sum-check-instance-and-protocol`, `fs-sum-check-computes-all-exponential-summands`, `lem-first-false-round-is-caught-by-root-bound`, `lem-sum-check-perfect-completeness`, `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`, `prop-arithmetized-formula-counting-sum`, `thm-sum-check-soundness`.
- `arithmetization-and-the-sum-check-protocol-examples` (2): `cex-sum-check-computes-all-exponential-summands`, `ex-sum-check-three-variable-transcript`.
- `boolean-circuits-and-nonuniform-complexity` (7): `def-ac-zero-nc-one-and-nc`, `fs-polynomial-size-implies-uniform-generation`, `prop-nc-one-is-contained-in-l-and-l-in-nc-two`, `thm-circuit-sat-is-np-complete`, `thm-p-is-contained-in-p-poly`, `thm-p-poly-equals-p-with-polynomial-advice`, `thm-undecidable-languages-exist-in-p-poly`.
- `boolean-circuits-and-nonuniform-complexity-examples` (2): `cex-polynomial-size-implies-uniform-generation`, `ex-p-poly-equals-p-with-polynomial-advice`.
- `classical-np-completeness-reductions` (14): `cor-clique-is-np-complete`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `cor-independent-set-and-vertex-cover-are-np-complete`, `def-reduction-gadget-and-interface-invariant`, `fs-gadget-correctness-needs-only-one-direction`, `fs-pseudopolynomial-is-polynomial-in-bit-length`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `thm-subset-sum-reduces-to-partition`, `thm-three-sat-reduces-to-clique`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`, `thm-three-sat-reduces-to-three-colourability`, `thm-vertex-cover-reduces-to-set-cover`.
- `classical-np-completeness-reductions-examples` (3): `cex-gadget-correctness-needs-only-one-direction`, `ex-clique-is-np-complete`, `ex-three-sat-reduces-to-three-colourability`.
- `counting-complexity-and-sharpp` (8): `cor-majority-sat-is-pp-complete`, `def-p-with-a-sharpp-oracle`, `fs-every-many-one-reduction-is-parsimonious`, `lem-cook-levin-can-be-made-parsimonious`, `prop-np-is-contained-in-p-sharpp`, `thm-number-sat-is-sharpp-complete`, `thm-pp-is-closed-under-complement`, `thm-pp-is-sign-testing-gap-p`.
- `counting-complexity-and-sharpp-examples` (2): `ex-cook-levin-can-be-made-parsimonious`, `ex-np-is-contained-in-p-sharpp`.
- `decidable-recognizable-and-enumerable-languages` (4): `def-computable-and-partial-computable-function`, `def-decidable-and-recognizable-language`, `prop-machine-descriptions-form-a-decidable-language`, `thm-decidable-iff-language-and-complement-are-recognizable`.
- `diagonalization-and-the-halting-problem` (14): `cor-busy-beaver-is-not-computable`, `cor-nonhalting-is-not-recognizable`, `def-busy-beaver-function`, `def-halting-problem`, `fs-diagonalization-needs-literal-source-self-reading`, `fs-undecidable-means-no-instance-can-be-answered`, `lem-diagonal-self-application-machine`, `thm-an-unrecognizable-language-exists`, `thm-busy-beaver-dominates-every-total-computable-function`, `thm-halting-is-recognizable-and-undecidable`, `thm-machine-acceptance-is-recognizable`, `thm-machine-acceptance-is-undecidable`, `thm-machine-equivalence-is-undecidable`, `thm-totality-is-not-recognizable`.
- `diagonalization-and-the-halting-problem-examples` (3): `cex-undecidable-means-no-instance-can-be-answered`, `ex-diagonal-self-application-machine`, `ex-machine-equivalence-is-undecidable`.
- `interactive-proof-systems-and-public-coins` (16): `def-completeness-and-soundness`, `def-graph-nonisomorphism-protocol`, `def-interactive-proof-transcript-round-and-strategy`, `def-ip`, `def-private-coin-public-coin-and-arthur-merlin-protocol`, `def-protocol-game-tree-and-value`, `fs-soundness-quantifies-only-over-honest-provers`, `fs-the-prover-must-run-in-polynomial-time`, `lem-hashing-commits-public-randomness`, `lem-optimal-prover-may-be-deterministic`, `lem-protocol-value-is-computable-in-polynomial-space`, `lem-sequential-repetition-amplifies-error`, `prop-np-is-contained-in-ip`, `thm-graph-nonisomorphism-is-in-ip`, `thm-ip-is-contained-in-pspace`, `thm-private-coin-ip-equals-public-coin-ip`.
- `interactive-proof-systems-and-public-coins-examples` (3): `cex-soundness-quantifies-only-over-honest-provers`, `ex-graph-nonisomorphism-is-in-ip`, `ex-sequential-repetition-amplifies-error`.
- `kolmogorov-complexity-and-algorithmic-randomness` (21): `def-conditional-kolmogorov-complexity`, `def-description-machine-and-plain-kolmogorov-complexity`, `def-effective-hausdorff-dimension`, `def-effectively-open-set-in-cantor-space`, `def-incompressibility-method`, `def-martin-lof-test-and-random-sequence`, `def-optimal-description-machine`, `def-prefix-free-machine-and-prefix-complexity`, `fs-kolmogorov-complexity-is-an-absolute-integer`, `fs-normality-implies-algorithmic-randomness`, `lem-basic-conditional-complexity-inequalities`, `lem-most-strings-are-incompressible`, `lem-universal-martin-lof-test-exists`, `thm-effective-dimension-is-liminf-prefix-complexity-rate`, `thm-invariance-for-prefix-complexity`, `thm-invariance-theorem-for-plain-complexity`, `thm-kolmogorov-complexity-is-not-computable`, `thm-kraft-inequality`, `thm-levin-schnorr-characterization`, `thm-martin-lof-randomness-implies-computable-randomness`, `thm-symmetry-of-information-up-to-logarithmic-terms`.
- `kolmogorov-complexity-and-algorithmic-randomness-examples` (3): `cex-kolmogorov-complexity-is-an-absolute-integer`, `ex-effective-dimension-is-liminf-prefix-complexity-rate`, `ex-most-strings-are-incompressible`.
- `logarithmic-space-nl-and-reachability` (17): `cor-nspace-is-closed-under-complement-above-logspace`, `def-l-and-nl`, `def-logspace-many-one-reduction`, `def-logspace-uniform-circuit-family`, `def-p-complete-under-logspace-reductions`, `def-read-only-input-logspace-machine`, `fs-nl-equals-conl-follows-by-state-swapping`, `lem-logspace-machines-have-polynomially-many-configurations`, `lem-logspace-reductions-compose`, `lem-nonreachability-has-an-inductive-counting-certificate`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `lem-reachability-count-is-verifiable-in-nl`, `thm-circuit-value-is-p-complete`, `thm-directed-st-connectivity-is-nl-complete`, `thm-immerman-szelepcsenyi-nl-equals-conl`, `thm-nl-is-contained-in-dspace-log-squared-n`, `thm-read-only-input-savitch-simulation`.
- `logarithmic-space-nl-and-reachability-examples` (3): `cex-nl-equals-conl-follows-by-state-swapping`, `ex-circuit-value-is-p-complete`, `ex-logspace-reductions-compose`.
- `oracle-computability-the-jump-and-turing-degrees` (23): `cor-finite-jumps-match-arithmetical-levels`, `def-computably-dominated-oracle`, `def-oracle-ce-completeness`, `def-oracle-turing-machine`, `def-tagged-join-of-oracles`, `def-truth-table-reduction`, `def-turing-degree-and-degree-order`, `def-turing-jump`, `def-turing-reducibility-and-equivalence`, `fs-an-oracle-machine-reads-the-infinite-oracle-at-once`, `fs-degree-join-is-set-union`, `lem-degree-order-is-representative-independent`, `lem-halting-oracle-is-not-computably-dominated`, `lem-jump-is-well-defined-on-degrees`, `lem-total-oracle-functional-has-computable-use-bound`, `lem-turing-reducibility-is-a-preorder`, `prop-truth-table-implies-turing-reduction`, `thm-computably-dominated-characterizes-truth-table-reducibility`, `thm-every-oracle-is-strictly-below-its-jump`, `thm-jump-is-monotone`, `thm-relative-halting-is-oracle-ce-complete`, `thm-some-turing-reductions-are-not-truth-table-reductions`, `thm-turing-degrees-form-an-upper-semilattice`.
- `oracle-computability-the-jump-and-turing-degrees-examples` (3): `cex-an-oracle-machine-reads-the-infinite-oracle-at-once`, `ex-degree-order-is-representative-independent`, `ex-some-turing-reductions-are-not-truth-table-reductions`.
- `p-np-conp-and-polynomial-reductions` (17): `def-conp`, `def-exp-and-nexp`, `def-np-by-verifiers`, `def-np-hard-and-np-complete`, `def-p`, `def-polynomial-time-many-one-reduction`, `def-polynomially-balanced-verifier`, `def-search-version-of-an-np-relation`, `fs-np-complete-means-known-not-in-p`, `fs-np-means-not-polynomial`, `lem-polynomial-reductions-compose`, `prop-an-np-complete-language-in-p-implies-p-equals-np`, `prop-np-is-contained-in-pspace-and-pspace-in-exp`, `prop-p-is-contained-in-np-intersection-conp`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `thm-sat-search-reduces-to-sat-decision`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`.
- `p-np-conp-and-polynomial-reductions-examples` (3): `cex-np-means-not-polynomial`, `ex-np-is-contained-in-pspace-and-pspace-in-exp`, `ex-p-is-contained-in-np-intersection-conp`.
- `resource-bounds-and-machine-invariance` (3): `def-dtime-ntime-dspace-and-nspace`, `def-worst-case-time-and-space-complexity`, `lem-time-at-least-input-length-permits-complete-input-reading`.
- `robust-machine-models-and-universal-computation` (4): `def-universal-turing-machine`, `lem-multitape-simulation-has-quadratic-time-overhead`, `thm-existence-of-a-universal-turing-machine`, `thm-multitape-machines-have-one-tape-simulations`.
- `the-arithmetical-hierarchy-and-posts-theorem` (14): `cor-delta-one-sets-are-exactly-decidable`, `def-arithmetical-level-completeness`, `def-limit-computable-function`, `def-relative-computability-and-enumerability`, `fs-limit-computable-has-a-known-stabilization-stage`, `fs-sigma-n-and-pi-n-are-disjoint`, `lem-diagonal-set-at-each-level`, `lem-oracle-computation-has-a-finite-query-witness`, `thm-arithmetical-hierarchy-is-strict`, `thm-halting-is-sigma-one-complete`, `thm-posts-theorem`, `thm-shoenfield-limit-lemma`, `thm-sigma-one-sets-are-exactly-ce-sets`, `thm-totality-is-pi-two-complete`.
- `the-arithmetical-hierarchy-and-posts-theorem-examples` (3): `cex-sigma-n-and-pi-n-are-disjoint`, `ex-shoenfield-limit-lemma`, `ex-sigma-one-sets-are-exactly-ce-sets`.
- `the-polynomial-hierarchy-and-relativization` (23): `cor-ph-complete-language-forces-collapse`, `cor-relativization-alone-cannot-resolve-p-versus-np`, `def-lowness-and-highness`, `def-polynomial-hierarchy-levels`, `def-relativized-complexity-class`, `def-relativizing-proof-technique`, `fs-relativized-separations-prove-unrelativized-separations`, `lem-collapse-at-one-level-propagates`, `lem-oracle-diagonalization-finite-extension`, `lem-ph-adaptive-oracle-transcript-normal-form`, `lem-ph-circuit-matrix-final-block-encoding`, `lem-ph-quantifier-block-closure`, `lem-polynomial-space-oracle-absorption`, `lem-standard-containments-relativize`, `prop-elementary-high-low-identities`, `prop-np-and-conp-are-the-first-levels`, `prop-ph-containments-and-polynomial-space`, `rem-oracle-and-promise-conventions-are-distinct`, `thm-an-oracle-collapses-p-and-np`, `thm-an-oracle-separates-p-from-np`, `thm-bounded-alternation-qbf-is-level-complete`, `thm-quantifier-and-oracle-characterizations-of-ph`, `thm-sigma-k-equals-pi-k-implies-ph-collapse`.
- `the-polynomial-hierarchy-and-relativization-examples` (4): `cex-relativized-separations-prove-unrelativized-separations`, `ex-np-and-conp-are-the-first-levels`, `ex-promise-oracle-off-promise-answers`, `ex-relativization-alone-cannot-resolve-p-versus-np`.
- `time-and-space-hierarchy-theorems` (19): `cor-l-is-properly-contained-in-pspace`, `cor-p-is-properly-contained-in-exp`, `def-efficient-universal-simulation-with-clock`, `def-read-only-input-workspace-classes`, `fs-unrestricted-diagonalization-respects-any-bound`, `lem-effective-enumeration-of-clocked-machines`, `lem-padding-transfers-time-bounds`, `lem-read-only-workspace-diagonal-machine-halts`, `lem-read-only-workspace-simulates-in-all-tapes-space`, `lem-read-only-workspace-universal-simulation`, `lem-space-bounded-universal-simulation`, `lem-space-diagonal-machine-halts`, `lem-time-diagonal-language-respects-its-budget`, `prop-hierarchy-theorems-do-not-separate-p-from-np`, `thm-deterministic-space-hierarchy`, `thm-deterministic-time-hierarchy`, `thm-gap-and-union-theorems-for-complexity-bounds`, `thm-nondeterministic-time-hierarchy`, `thm-read-only-workspace-space-hierarchy`.
- `time-and-space-hierarchy-theorems-examples` (3): `cex-unrestricted-diagonalization-respects-any-bound`, `ex-hierarchy-theorems-do-not-separate-p-from-np`, `ex-time-diagonal-language-respects-its-budget`.
- `turing-machines-configurations-and-computation` (4): `def-halting-computation-and-divergence`, `def-language-recognized-and-decided`, `def-nondeterministic-accepting-computation`, `def-partial-function-computed-by-a-machine`.

## 53. Binding Phase-2 pair repair (2026-09-08)

This section supersedes only the Phase-2 classification in §50 and the
heading/classification of §52.  It does not replace §52's item-exact consumer
data: those 55 rows remain the immutable impact ledger for the current
published-to-draft defects.  The owner's phase contract is stricter than the
classification used there: **Phase 2 builds new A/B pairs only**.  A draft item
listed on an already-published page cannot be published as Phase-2 work.
Consequently all 55 old draft items in §52 are Phase-3 cleanup inputs, not
Phase-2 suppliers.

The cheapest adequate cutover uses five new A/B pairs and thirty A items.
Twenty-nine A items replace the twenty-nine old roots having direct published
consumers; one additional polynomial-time verifier/reduction definition is an
internal prerequisite that prevents the final pair from consuming the broken
published P/NP page.  The other twenty-six old §52 items are absorbed as proof
machinery into those interfaces rather than copied as separate public items.
The five pairs are necessary at the indicated cuts: the first three have
same-page published consumers at orders 585, 597, and 599, while the last two
must respectively precede the first published hierarchy consumer at 613 and
the first published NP-completeness consumer at 623.  Combining across any of
the first three cuts would either create a forward edge or re-mint the whole
Turing-machine model.

### 53.1 Machine-actionable page objects

Every B page below requires only its A companion, has no consumer, and is a
dependency leaf.  Every named A prerequisite is an earlier A page.  The
decimal orders are unused in the 2026-09-08 live plan and leave the surrounding
published orders stable.

#### Finite-state transition and determinisation interfaces

```yaml
- order: 584.2
  id: finite-automata-transition-and-determinisation-interfaces
  title: Finite-Automata Transition and Determinisation Interfaces
  kind: A
  category: computability-theory
  companion: finite-automata-transition-and-determinisation-interfaces-examples
  requires: [deterministic-finite-automata-and-regular-languages]
  items:
    - def-epsilon-nfa-word-transition
    - thm-subset-construction-reachability-invariant
    - prop-deterministic-automata-are-special-nondeterministic-automata
- order: 584.4
  id: finite-automata-transition-and-determinisation-interfaces-examples
  title: Finite-Automata Transition and Determinisation Interfaces — Examples
  kind: B
  category: computability-theory
  requires: [finite-automata-transition-and-determinisation-interfaces]
  items:
    - ex-epsilon-closure-and-word-transition-on-a-three-state-nfa
    - ex-subset-construction-for-an-epsilon-nfa
    - cex-omitting-epsilon-closure-breaks-determinisation
```

Proof order is binding.  The first definition packages an epsilon-NFA, finite
epsilon closure, and the recursively extended word transition in one typed
interface.  The theorem constructs the subset DFA and proves by induction on
word length that its state after a word is exactly the extended NFA state set.
The proposition embeds a DFA by singleton transition sets and empty epsilon
relation.  Thus no item depends on the later published NFA page.

#### Turing-machine configuration boundary interface

```yaml
- order: 596.2
  id: turing-machine-configuration-boundary-interface
  title: Turing-Machine Configuration Boundary Interface
  kind: A
  category: computability-theory
  companion: turing-machine-configuration-boundary-interface-examples
  requires:
    - formal-languages-encodings-and-decision-problems
  items:
    - def-turing-machine-initial-and-halting-configuration-interface
- order: 596.4
  id: turing-machine-configuration-boundary-interface-examples
  title: Turing-Machine Configuration Boundary Interface — Examples
  kind: B
  category: computability-theory
  requires: [turing-machine-configuration-boundary-interface]
  items:
    - ex-initial-configuration-on-empty-input
    - ex-accepting-and-rejecting-configurations-are-machine-relative
```

The definition works directly with the explicit finite machine tuple, a
finite-support right-infinite tape, and a state/head/tape configuration.  It
defines the initial tape, initial configuration, and accepting, rejecting, and
halting predicates together.  It does not cite the later
`def-turing-machine-configuration`; Phase 3 makes that published definition an
agreement/specialisation bridge to this interface.  Natural-number recursion
is already in the A-prerequisite closure through
`formal-languages-encodings-and-decision-problems`, so the legacy published
`construction-of-the-natural-numbers` page is not a direct prerequisite.

#### One-tape simulation normal forms

```yaml
- order: 598.2
  id: one-tape-simulation-normal-forms
  title: One-Tape Simulation Normal Forms
  kind: A
  category: computability-theory
  companion: one-tape-simulation-normal-forms-examples
  requires:
    - turing-machine-configuration-boundary-interface
    - turing-machines-configurations-and-computation
  items:
    - thm-stay-put-elimination-with-explicit-simulation-interface
- order: 598.4
  id: one-tape-simulation-normal-forms-examples
  title: One-Tape Simulation Normal Forms — Examples
  kind: B
  category: computability-theory
  requires: [one-tape-simulation-normal-forms]
  items:
    - ex-eliminating-a-stay-put-transition
    - cex-deleting-stay-put-moves-does-not-preserve-computation
```

The theorem replaces each stay-put instruction by a move into a fresh marked
state followed by the inverse head move, proves the two-step simulation
invariant, and preserves accepting, rejecting, and divergent behaviours.  It
uses only the already-published raw machine/configuration/one-step items on the
Turing-machine A page and the earlier boundary interface; it does not consume
the old draft stay-put theorem.

#### Effective numberings, reductions, resources, and randomness

```yaml
- order: 612.2
  id: effective-numberings-reductions-resources-and-randomness
  title: Effective Numberings, Reductions, Resources, and Randomness
  kind: A
  category: computability-theory
  companion: effective-numberings-reductions-resources-and-randomness-examples
  requires:
    - one-tape-simulation-normal-forms
    - robust-machine-models-and-universal-computation
    - diagonalization-and-the-halting-problem
    - finite-probability-spaces-and-random-variables
    - algebraic-extensions-degree-and-finite-fields
    - linear-algebra-methods-in-combinatorics
  items:
    - def-uniform-asymptotic-time-space-comparison
    - def-machine-time-and-space-constructibility
    - def-primitive-recursive-functions-by-initial-functions-and-schemes
    - def-kleene-computation-predicate-and-output-map
    - thm-kleene-normal-form-for-the-fixed-machine-coding
    - def-computable-many-one-reducibility-interface
    - def-oracle-turing-reducibility-interface
    - def-acceptable-numbering-with-universal-evaluation
    - thm-smn-for-the-fixed-acceptable-numbering
    - thm-kleene-fixed-point-theorem-for-program-indices
    - def-polynomial-time-verifier-and-reduction-interface
    - def-probabilistic-polynomial-time-machine-interface
    - def-rp-corp-zpp-bpp-and-pp-classes
    - def-pairwise-independent-hash-family-interface
    - lem-chernoff-bound-for-independent-bernoulli-trials
    - thm-schwartz-zippel-over-finite-fields
- order: 612.4
  id: effective-numberings-reductions-resources-and-randomness-examples
  title: Effective Numberings, Reductions, Resources, and Randomness — Examples
  kind: B
  category: computability-theory
  requires: [effective-numberings-reductions-resources-and-randomness]
  items:
    - ex-smn-specializes-a-two-argument-index
    - ex-pairwise-independent-affine-hashing-over-a-prime-field
    - ex-schwartz-zippel-for-a-bivariate-polynomial
```

The displayed order is proof order.  Items 1--2 fix big-O/little-o and
time/space constructibility, including monotonicity and complete-input-reading
guards.  Items 3--5 construct primitive recursion, sequence coding, the
primitive-recursive step predicate, minimisation, normal form, and the
partial-recursive/Turing-computable equivalence.  Items 6--7 define the two
reduction interfaces with totality, direction, and oracle-query semantics.
Items 8--10 use the fixed effective machine coding and published step-by-step
interpreter to prove universality, s-m-n, and the fixed-point theorem; no old
acceptable-numbering draft is cited.  Item 11 packages exactly the polynomial
time, verifier, balance, and many-one notions needed by the next pair.  Items
12--16 then define probabilistic polynomial time and its named classes, prove
the finite pairwise-independent hashing and Chernoff interfaces, and prove
Schwartz--Zippel by induction on the number of variables using the published
monomial/degree and finite-field root bounds.  No P/NP, randomized-complexity,
or acceptable-numbering page is used as a hidden supplier.  The natural-number
coding input is already in the A-prerequisite closure through
`diagonalization-and-the-halting-problem`; it therefore does not introduce a
direct dependency on a legacy `P` page.

#### SAT tableaux and quantified-space completeness

```yaml
- order: 620.2
  id: sat-tableaux-and-quantified-space-completeness
  title: SAT Tableaux and Quantified-Space Completeness
  kind: A
  category: computability-theory
  companion: sat-tableaux-and-quantified-space-completeness-examples
  requires:
    - effective-numberings-reductions-resources-and-randomness
    - turing-machines-configurations-and-computation
  items:
    - def-boolean-formulas-cnf-and-satisfiability-interface
    - def-bounded-turing-computation-tableau-interface
    - lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations
    - lem-tableau-to-cnf-map-has-polynomial-size-and-time
    - thm-cook-levin-sat-completeness-interface
    - thm-three-sat-completeness-interface
    - def-polynomial-space-and-nondeterministic-polynomial-space
    - lem-space-bounded-machine-configuration-count
    - thm-tqbf-pspace-completeness-interface
- order: 620.4
  id: sat-tableaux-and-quantified-space-completeness-examples
  title: SAT Tableaux and Quantified-Space Completeness — Examples
  kind: B
  category: computability-theory
  requires: [sat-tableaux-and-quantified-space-completeness]
  items:
    - ex-a-two-step-computation-tableau-and-its-local-clauses
    - ex-tseitin-conversion-preserves-satisfiability
    - ex-qbf-reachability-recursion-space-accounting
```

Items 1--6 give the full Cook--Levin interface: typed Boolean/CNF/SAT syntax,
bounded tableaux, constant cell alphabet and local windows, start/accept/
transition and exactly-one constraints, correctness, polynomial construction,
Tseitin conversion, SAT membership, SAT hardness, and the standard
equisatisfiable 3-CNF conversion.  Items 7--9 define PSPACE/NPSPACE and QBF,
count space-bounded configurations, prove TQBF membership, and prove hardness
by the quantifier-reusing reachability recursion with an explicit polynomial
formula-size and workspace induction.  The proof never consumes the draft
Cook--Levin or TQBF items on the two following published pages.

### 53.2 Exact old-root cutover and published impact

For an old §52 ID `x`, write `Impact(x)` for the **entire row already printed
in §52**: its exact direct published consumer set and its complete distinct
transitive published closure grouped by home page.  For a set `S`,
`Impact(S)` is the set-theoretic union of those rows, deduplicated by item ID.
This definition preserves the item-exact maps without copying thousands of
consumer IDs and is mechanically checkable against the existing appendix.

In the table below, the new item's direct published consumers are printed
explicitly.  Its complete transitive published impact is exactly the union in
the last column.  Every absorbed old ID not itself a direct root has direct
published consumers zero in §52.  Thus the cutover neither adds nor loses a
published consumer.

| new Phase-2 A item | old §52 root/support interfaces replaced | exact direct published consumers after Phase 3 | complete transitive published impact |
|---|---|---|---|
| `def-epsilon-nfa-word-transition` | `def-epsilon-closure-of-a-state-set`; `def-extended-nfa-transition` | `def-nfa-acceptance-and-recognized-language` | `Impact` of the two old IDs |
| `thm-subset-construction-reachability-invariant` | `def-subset-construction-dfa`; `lem-subset-construction-state-invariant` | `thm-subset-construction-preserves-language` | `Impact` of the two old IDs |
| `prop-deterministic-automata-are-special-nondeterministic-automata` | `prop-every-dfa-is-an-nfa` | `cor-dfas-and-nfas-recognize-the-same-languages` | `Impact(prop-every-dfa-is-an-nfa)` |
| `def-turing-machine-initial-and-halting-configuration-interface` | `def-initial-accepting-and-rejecting-configurations` | `def-halting-computation-and-divergence`; `def-nondeterministic-accepting-computation` | `Impact(def-initial-accepting-and-rejecting-configurations)` |
| `thm-stay-put-elimination-with-explicit-simulation-interface` | `thm-stay-put-moves-can-be-eliminated` | `thm-multitape-machines-have-one-tape-simulations` | `Impact(thm-stay-put-moves-can-be-eliminated)` |
| `def-uniform-asymptotic-time-space-comparison` | `def-asymptotic-resource-comparison` | `def-dtime-ntime-dspace-and-nspace`; `def-read-only-input-workspace-classes`; `thm-deterministic-space-hierarchy`; `thm-deterministic-time-hierarchy`; `thm-read-only-workspace-space-hierarchy` | `Impact(def-asymptotic-resource-comparison)` |
| `def-machine-time-and-space-constructibility` | `def-time-and-space-constructible-function` | `def-dtime-ntime-dspace-and-nspace`; `def-efficient-universal-simulation-with-clock`; `lem-space-bounded-universal-simulation`; `lem-space-diagonal-machine-halts`; `lem-time-diagonal-language-respects-its-budget`; `thm-nondeterministic-time-hierarchy` | `Impact(def-time-and-space-constructible-function)` |
| `def-primitive-recursive-functions-by-initial-functions-and-schemes` | `def-composition-and-primitive-recursion-schemes`; `def-initial-arithmetic-functions`; `def-primitive-recursive-function`; `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive`; `thm-sequence-length-and-coordinate-functions-are-primitive-recursive` | `def-bounded-arithmetic-formula`; `lem-bounded-quantifiers-preserve-primitive-recursiveness` | `Impact` of the five old IDs |
| `def-kleene-computation-predicate-and-output-map` | `def-kleene-t-predicate-and-output-function`; `def-natural-number-coding-of-finite-sequences`; `lem-turing-step-coding-is-primitive-recursive` | `thm-totality-is-pi-two-complete` | `Impact` of the three old IDs |
| `thm-kleene-normal-form-for-the-fixed-machine-coding` | `def-mu-minimization-and-partial-recursive-function`; `thm-kleene-normal-form`; `thm-partial-recursive-iff-turing-computable` | `thm-sigma-one-sets-are-exactly-ce-sets` | `Impact` of the three old IDs |
| `def-computable-many-one-reducibility-interface` | `def-computable-many-one-reduction` | `def-arithmetical-level-completeness`; `def-oracle-ce-completeness`; `thm-totality-is-pi-two-complete` | `Impact(def-computable-many-one-reduction)` |
| `def-oracle-turing-reducibility-interface` | `def-turing-reduction` | `def-relative-computability-and-enumerability` | `Impact(def-turing-reduction)` |
| `def-acceptable-numbering-with-universal-evaluation` | `def-numbering-of-partial-computable-functions`; `def-universal-and-acceptable-numbering` | `def-relative-computability-and-enumerability`; `lem-universal-martin-lof-test-exists`; `thm-halting-is-sigma-one-complete`; `thm-invariance-for-prefix-complexity` | `Impact` of the two old IDs |
| `thm-smn-for-the-fixed-acceptable-numbering` | `def-parameter-specialization-function`; `thm-smn-parameter-theorem` | `thm-totality-is-pi-two-complete` | `Impact` of the two old IDs |
| `thm-kleene-fixed-point-theorem-for-program-indices` | `def-computable-program-transformer`; `lem-self-reference-construction-from-smn`; `thm-kleenes-second-recursion-theorem` | `lem-halting-oracle-is-not-computably-dominated` | `Impact` of the three old IDs |
| `def-polynomial-time-verifier-and-reduction-interface` | no old root; internal raw interface preventing a dependency on the broken P/NP page | zero | union of the impacts of the nine new SAT/space interfaces below, reached only through those new items |
| `def-probabilistic-polynomial-time-machine-interface` | `def-probabilistic-polynomial-time-machine` | `def-interactive-proof-transcript-round-and-strategy`; `def-ip` | `Impact(def-probabilistic-polynomial-time-machine)` |
| `def-rp-corp-zpp-bpp-and-pp-classes` | `def-rp-corp-zpp-bpp-and-pp` | `thm-pp-is-sign-testing-gap-p` | `Impact(def-rp-corp-zpp-bpp-and-pp)` |
| `def-pairwise-independent-hash-family-interface` | `def-pairwise-independent-hash-family` | `lem-hashing-commits-public-randomness` | `Impact(def-pairwise-independent-hash-family)` |
| `lem-chernoff-bound-for-independent-bernoulli-trials` | `lem-chernoff-bound-for-bernoulli-trials` | `lem-sequential-repetition-amplifies-error` | `Impact(lem-chernoff-bound-for-bernoulli-trials)` |
| `thm-schwartz-zippel-over-finite-fields` | `thm-schwartz-zippel-lemma` | `rem-polynomial-identity-bounds-for-sum-check` | `Impact(thm-schwartz-zippel-lemma)` |
| `def-boolean-formulas-cnf-and-satisfiability-interface` | `def-boolean-formula-cnf-and-sat` | `def-arithmetization-of-a-boolean-formula`; `def-number-sat` | `Impact(def-boolean-formula-cnf-and-sat)` |
| `def-bounded-turing-computation-tableau-interface` | `def-bounded-computation-tableau`; `def-local-tableau-window` | `lem-cook-levin-can-be-made-parsimonious` | `Impact` of the two old IDs |
| `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations` | `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`; `lem-exactly-one-symbol-constraints-have-polynomial-size`; `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal`; `lem-start-accept-and-transition-constraints-have-polynomial-size`; `lem-tableau-cell-alphabet-is-constant` | `lem-cook-levin-can-be-made-parsimonious` | `Impact` of the five old IDs |
| `lem-tableau-to-cnf-map-has-polynomial-size-and-time` | `def-tseitin-extension-variable`; `lem-cook-levin-map-is-polynomial-time`; `lem-tseitin-transformation-is-linear-size-and-equisatisfiable` | `lem-cook-levin-can-be-made-parsimonious` | `Impact` of the three old IDs |
| `thm-cook-levin-sat-completeness-interface` | `prop-sat-is-in-np`; `thm-cook-levin-sat-is-np-complete` | `thm-circuit-sat-is-np-complete` | `Impact` of the two old IDs |
| `thm-three-sat-completeness-interface` | `thm-three-sat-is-np-complete` | `cor-clique-is-np-complete`; `cor-hamiltonian-path-and-cycle-are-np-complete`; `thm-three-sat-reduces-to-clique`; `thm-three-sat-reduces-to-directed-hamiltonian-cycle`; `thm-three-sat-reduces-to-three-colourability` | `Impact(thm-three-sat-is-np-complete)` |
| `def-polynomial-space-and-nondeterministic-polynomial-space` | `def-pspace-and-npspace` | `cor-l-is-properly-contained-in-pspace`; `lem-polynomial-space-oracle-absorption`; `lem-protocol-value-is-computable-in-polynomial-space`; `prop-ph-containments-and-polynomial-space` | `Impact(def-pspace-and-npspace)` |
| `lem-space-bounded-machine-configuration-count` | `lem-space-bounded-machines-have-exponentially-many-configurations` | `lem-space-diagonal-machine-halts` | `Impact(lem-space-bounded-machines-have-exponentially-many-configurations)` |
| `thm-tqbf-pspace-completeness-interface` | `def-quantified-boolean-formula-and-tqbf`; `def-reachable-configuration-formula`; `lem-quantifier-reuse-keeps-reachability-formulas-polynomial`; `prop-tqbf-is-in-pspace`; `thm-tqbf-is-pspace-complete` | `cor-ph-complete-language-forces-collapse`; `lem-polynomial-space-oracle-absorption` | `Impact` of the five old IDs |

Every new B item in §53.1 has zero direct published consumers and zero
transitive published impact.  The new internal
`def-polynomial-time-verifier-and-reduction-interface` has no direct published
consumer; its complete published impact is exactly the union stated in its
row, reached through the new SAT/space A items.  These declarations cover
every one of the thirty A and thirteen B items individually.

### 53.3 Phase-3 published cleanup after the five pairs land

Published files remain immutable in Phase 2.  In Phase 3:

1. Repoint each direct edge printed in §52 from its old draft ID to the new ID
   in §53.2.  This is an exact 55-edge cutover across the same 47 distinct
   published consumers; support-only old IDs have no direct edge to repoint.
2. Add only these A-page requirements, which make every affected published
   consumer page reach its new supplier without any B prerequisite:
   - `nondeterministic-finite-automata-and-subset-construction` ->
     `finite-automata-transition-and-determinisation-interfaces`;
   - `turing-machines-configurations-and-computation` ->
     `turing-machine-configuration-boundary-interface`;
   - `robust-machine-models-and-universal-computation` ->
     `one-tape-simulation-normal-forms`;
   - `the-arithmetical-hierarchy-and-posts-theorem`,
     `resource-bounds-and-machine-invariance`, and
     `randomized-complexity-and-amplification` ->
     `effective-numberings-reductions-resources-and-randomness`;
   - `the-cook-levin-theorem` and `space-complexity-savitch-and-tqbf` ->
     `sat-tableaux-and-quantified-space-completeness`.
   Existing later A-page closure carries these suppliers to every other direct
   consumer home in §52.
3. Treat all 55 old draft items and the remaining draft items depending on
   them as cleanup of their ten already-published page inventories.  Do not
   publish them in Phase 2 and do not retain a published dependency on them.
   Phase 3 may retire an absorbed draft, rewrite it as an agreement item after
   the new interface, or move genuinely additional material to a later new
   pair, but it must not give an old draft and a new supplier duplicate homes.
4. Only after that cutover, resynchronise the affected plan metadata from the
   repaired published frontmatter.  The legacy hydration, duplicate A/B homes,
   DPDA repair, and §51 metadata work remain the separate Phase-3 amendments
   already specified in §§44--45.

### 53.4 Source and validation gate

No new mathematical result is introduced: §53 repackages exactly the proved
interfaces already sourced in the original pair sections.  The authoritative
full texts already obtained and read are Gallier, *Introduction to the Theory
of Computation*, Chapters 2--6 and 8--14; Savage, *Models of Computation*,
Chapters 2--5 and 8--10; Sipser, *Introduction to the Theory of Computation*,
Chapters 1, 3--7; Zach/Open Logic, *Incompleteness and Computability*, Chapters
2--6 and 9; and Arora--Barak, *Computational Complexity*, Chapters 1--4.  The
complete authoritative endpoints are recorded in §38.  Their NFA induction,
explicit machine simulation, normal-form/s-m-n recursion, Chernoff and
Schwartz--Zippel arguments, Cook tableau construction, and quantified
reachability proof cover every proof obligation above.  No source-access
blocker remains for these five pairs.

Before splice, check all ten page IDs and forty-three item IDs against the
then-live plan, `library/`, `items/`, aliases, and all prose scaffolds.  Then
validate the prospective page graph.  Acceptance requires: the five A orders
and five B orders are unique; all five A prerequisite closures are strictly
earlier and A-only; every B has the singleton A requirement and zero
consumers; every §53.2 old ID occurs exactly once in the mapping and all 55
old IDs are covered; no new item path reaches a draft, Recorded/Not-Proved,
or `deferred-set-theory-beyond-choice` item; and the post-Phase-3 reverse
closure of every new interface equals the corresponding `Impact` union from
§52.
