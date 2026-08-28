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
