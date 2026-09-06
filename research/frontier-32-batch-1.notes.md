# Frontier 32 / beta / batch 1 — scaffold notes

## Authority and design decision

The only edited artifacts are this note, frontier-32-batch-1.pages.json, and
frontier-32-batch-1.coverage.json. No plan, workflow state, published page, or
other batch was edited.

The controlling design is TC-26 in research/plan-computability-theory-track.md
at lines 1090--1113 for Boolean Circuits and Nonuniform Complexity and its
companion, and TC-29 at lines 1199--1222 for Counting Complexity and Sharp-P
and its companion. The second circuits location named by the dispatch (line
1114) begins the companion portion of the same TC-26 record; it is contiguous
with, not an amendment to, the A-page record. No later competing
completion/expansion record was found. research/plan-spec.json agrees with
TC-26 on order 631 and prerequisites, and with TC-29 on order 637 and
prerequisites. frontier-32-alpha-step0-drift.md records both as no-drift.

The A pages have 16 and 17 items, and each B page has 3. Neither is near the
60-item split limit; no split is proposed. All A mathematics precedes its
companion's examples/counterexamples.

## Sources read, locators, and support record

| Page | Source and treatment | Exact range read | Scaffold support |
| --- | --- | --- | --- |
| Circuits | [Arora--Barak, Computational Complexity: A Modern Approach, web draft](https://theory.cs.princeton.edu/complexity/book.pdf), textbook | Contents PDF pp. 6--7; Ch. 6 PDF pp. 116--128 / printed pp. 101--113, chapter opening through Chapter notes and history; following exercises excluded | Primary TOC-bearing treatment of circuit/family definitions, uniformity, advice, Karp--Lipton, Shannon, AC/NC, CKT-SAT. |
| Circuits | [Jonathan Katz, Notes on Complexity Theory, Lecture 10](https://www.cs.umd.edu/~jkatz/complexity/f11/lecture10.pdf), full lecture note | Whole PDF pp. 1--4: §§1, 1.1, 1.2, 1.3, Bibliographical Notes | Independent check of counting, P/poly/advice, unary nonuniformity, Karp--Lipton, AC/NC, NC1--L--NC2. |
| Counting | [Arora--Barak, Computational Complexity: A Modern Approach, web draft](https://theory.cs.princeton.edu/complexity/book.pdf), textbook | Contents PDF p. 7; Ch. 9 PDF pp. 186--190 / printed pp. 172--175, chapter opening through §9.2.1 and Example 9.9 | Primary TOC-bearing treatment of #P, #SAT, PP, function-oracle completeness, and the Cook--Levin count correspondence. |
| Counting | [Lance Fortnow, Counting Complexity](https://lance.fortnow.com/papers/files/counting.pdf), survey | Abstract; §§2--4.1, PDF pp. 1--14: §3 through final line of Theorem 4.14, excluding Classification 4.15 | Independent #P/GapP, FP, closure, PP sign/complement, and oracle context. |

The coverage artifact enumerates every source-owned heading/result in those
exact ranges, with an included or inline item ID, or an individual
out-of-scope reason. It expressly includes the potentially easy-to-miss
Arora--Barak Example 6.4 and Remark 6.16, parallel-machine definitions and
examples, DC-uniform material, and Fortnow Theorem 3.11.

The full PDFs were reader-fetched and reread on 2026-09-06. Durable
full-body stamps from the immediately preceding verified harvest are:
Arora--Barak 4,572,986 bytes / SHA-256 prefix da0881782a35bde6 / 489 pages;
Katz 77,611 / 72536f7de0459766 / 4 pages; Fortnow 307,710 /
02ee99027e52eba7 / 29 pages. A forced Node full-body re-fetch in this
sandbox on 2026-09-06 returned EAI_AGAIN DNS errors for all four URLs. That is
an environment DNS failure, not an HTTP/source failure, and did not justify
removing or re-sourcing material actually read at the live full-text URLs. The
ordinary source-stamp gate passes 4/4; this forced-refetch limitation remains
visible for source repair.

## Conventions, route, and dependency rationale

- Circuits are finite DAGs with constants, inputs, NOT, fan-in-two AND/OR
  gates; size counts non-input gates and depth is the longest input-output
  path. Fixed finite bases are constant-factor equivalent.
- A P/poly family selects one circuit for each input length and need not be
  constructible. Logspace uniformity appears only in the AC/NC definition and
  the NC1--L--NC2 result.
- CircuitSAT uses a directed acyclic gate-list encoding. Its hardness map is
  formula-to-circuit. Karp--Lipton states its PH and Sigma-2 convention within
  the theorem rather than assuming uniformity of arbitrary P/poly families.
- #P and GapP are function classes: binary accepting-path counts and
  accepting-minus-rejecting gaps. FP is nonnegative binary-output FP here;
  NumberSAT retains its declared, even unused, variables.
- Parsimonious means exact count equality. MajoritySAT uses strict
  greater-than half. A #P oracle returns a binary function value, not a
  language-membership bit.

The already-published direct prerequisites were checked:
def-p; def-rp-corp-zpp-bpp-and-pp; thm-product-rule;
thm-cardinality-of-a-set-of-functions; def-polynomial-time-many-one-reduction;
def-np-hard-and-np-complete; def-boolean-formula-cnf-and-sat;
def-bounded-computation-tableau;
lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs; and
lem-cook-levin-map-is-polynomial-time. Every item below has its full proposed
proof strategy and source support in the manifest/coverage artifacts; the
ledger records its exact mathematical target and dependencies.

## Item ledger

### Boolean Circuits and Nonuniform Complexity, A (order 631)

| ID | Claim and proposed proof route | Explicit deps |
| --- | --- | --- |
| def-boolean-circuit-size-depth-fanin-and-basis | Define finite Boolean DAGs, basis, size, fan-in, depth, and fixed-basis equivalence. | [] |
| def-circuit-family-and-p-poly | Define length-indexed circuit families and P/poly; separate family existence from circuit construction. | [def-boolean-circuit-size-depth-fanin-and-basis] |
| thm-p-is-contained-in-p-poly | Unroll a polynomial-time tableau into a layered polynomial-size circuit, without a generator inference. | [def-boolean-circuit-size-depth-fanin-and-basis, def-circuit-family-and-p-poly, def-p] |
| def-polynomial-advice-machine | Define polynomial length-only advice, explicitly not required computable. | [] |
| thm-p-poly-equals-p-with-polynomial-advice | Encode a circuit as advice and hardwire advice into a circuit, separately charging both resources. | [def-circuit-family-and-p-poly, def-polynomial-advice-machine] |
| thm-undecidable-languages-exist-in-p-poly | Give an undecidable unary language a constant circuit at each length; use diagonal/countability undecidability. | [def-circuit-family-and-p-poly] |
| def-formula-and-branching-program | Distinguish fan-out-one formulas from acyclic deterministic branching programs and their sizes. | [def-boolean-circuit-size-depth-fanin-and-basis] |
| def-ac-zero-nc-one-and-nc | Define AC0, NC1, NC by size/depth/fan-in and state the limited uniformity convention. | [def-boolean-circuit-size-depth-fanin-and-basis] |
| prop-nc-one-is-contained-in-l-and-l-in-nc-two | Depth-first circuit evaluation gives NC1 subset L; configuration reachability squaring gives L subset NC2. | [def-ac-zero-nc-one-and-nc] |
| lem-counting-circuits-of-bounded-size | Topologically encode gates and prove at most 2^(O(s log(n+s))) represented functions. | [def-boolean-circuit-size-depth-fanin-and-basis, thm-product-rule] |
| thm-shannon-almost-all-functions-require-exponential-circuits | Compare that bound with 2^(2^n), retaining a concrete c 2^n/n threshold and the non-explicitness distinction. | [lem-counting-circuits-of-bounded-size, thm-cardinality-of-a-set-of-functions] |
| def-circuit-sat | Define gate-list CircuitSAT with a designated output. | [def-boolean-circuit-size-depth-fanin-and-basis] |
| thm-circuit-sat-is-np-complete | Verify assignments topologically and convert Cook--Levin formulas gate-by-gate, proving the direction and size bound. | [def-circuit-sat, thm-cook-levin-sat-is-np-complete, def-polynomial-time-many-one-reduction, def-np-hard-and-np-complete] |
| thm-karp-lipton-collapse | Existentially choose a candidate SAT circuit, universally challenge correctness, then simulate hierarchy quantifiers. | [def-circuit-family-and-p-poly, thm-p-poly-equals-p-with-polynomial-advice, thm-circuit-sat-is-np-complete] |
| fs-polynomial-size-implies-uniform-generation | Refute with the unary undecidable circuit family; a generator is extra structure. | [def-circuit-family-and-p-poly, thm-undecidable-languages-exist-in-p-poly] |
| fs-shannon-counting-gives-an-explicit-hard-function | Refute: cardinality supplies neither description nor recognition of a hard truth table. | [lem-counting-circuits-of-bounded-size, thm-shannon-almost-all-functions-require-exponential-circuits] |

### Boolean Circuits companion, B (order 632)

| ID | Claim and proposed proof route | Explicit deps |
| --- | --- | --- |
| ex-p-poly-equals-p-with-polynomial-advice | Trace advice hardwiring and circuit-as-advice on one finite instance. | [thm-p-poly-equals-p-with-polynomial-advice] |
| ex-karp-lipton-collapse | Display candidate circuit, universal formula challenge, and deterministic agreement check. | [thm-karp-lipton-collapse] |
| cex-polynomial-size-implies-uniform-generation | Use unary constant circuits; a uniform generator would decide the undecidable language. | [thm-undecidable-languages-exist-in-p-poly, fs-polynomial-size-implies-uniform-generation] |

### Counting Complexity and Sharp-P, A (order 637)

| ID | Claim and proposed proof route | Explicit deps |
| --- | --- | --- |
| def-sharpp-and-gap-p-functions | Define #P accepting-path counts and GapP signed gaps with binary conventions. | [] |
| def-number-sat | Define NumberSAT over the declared variable list, including unused variables. | [def-boolean-formula-cnf-and-sat] |
| prop-number-sat-is-in-sharpp | Guess declared variables and accept exactly satisfiers, including malformed-input handling. | [def-sharpp-and-gap-p-functions, def-number-sat] |
| def-parsimonious-reduction | Define polynomial maps preserving exact counts, contrasting decision many-one maps. | [] |
| lem-cook-levin-can-be-made-parsimonious | Use unique tableau variables and equivalence clauses to biject accepting paths with satisfiers. | [def-parsimonious-reduction, def-number-sat, def-bounded-computation-tableau, lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs, lem-cook-levin-map-is-polynomial-time] |
| thm-number-sat-is-sharpp-complete | Chain an arbitrary #P accepting-path count through the parsimonious Cook--Levin formula. | [def-sharpp-and-gap-p-functions, def-number-sat, def-parsimonious-reduction, prop-number-sat-is-in-sharpp, lem-cook-levin-can-be-made-parsimonious] |
| def-fp-function-class | Define nonnegative binary-output FP. | [] |
| prop-fp-is-contained-in-sharpp | Compute f(x), make a padded binary guess, and accept exactly f(x) branches. | [def-sharpp-and-gap-p-functions, def-fp-function-class] |
| prop-sharpp-is-closed-under-sum-and-product | Use a tagged leading branch for sums and independent sequential branches for products. | [def-sharpp-and-gap-p-functions] |
| def-majority-sat | Define strict-majority satisfiability, including the zero-variable convention. | [def-number-sat] |
| thm-pp-is-sign-testing-gap-p | Translate majority to a positive GapP gap and normalize the converse computation. | [def-sharpp-and-gap-p-functions, def-rp-corp-zpp-bpp-and-pp] |
| cor-majority-sat-is-pp-complete | Preserve a strict majority threshold under parsimonious Cook--Levin with fixed binary-choice padding. | [def-majority-sat, thm-pp-is-sign-testing-gap-p, lem-cook-levin-can-be-made-parsimonious] |
| thm-pp-is-closed-under-complement | Negate the gap and fix the zero case by a one-path offset before strict sign testing. | [def-sharpp-and-gap-p-functions, thm-pp-is-sign-testing-gap-p] |
| def-p-with-a-sharpp-oracle | Define adaptive polynomially many binary-value queries to a fixed #P function. | [def-p, def-sharpp-and-gap-p-functions] |
| prop-np-is-contained-in-p-sharpp | Query a verifier-witness #P count and test its binary value for positivity. | [def-p-with-a-sharpp-oracle, def-sharpp-and-gap-p-functions, thm-number-sat-is-sharpp-complete] |
| fs-sharpp-is-a-language-class | Refute the type error with non-Boolean NumberSAT values versus its SAT predicate. | [def-sharpp-and-gap-p-functions, def-number-sat] |
| fs-every-many-one-reduction-is-parsimonious | Add an unused declared variable: satisfiability stays fixed and the count doubles. | [def-polynomial-time-many-one-reduction, def-parsimonious-reduction, def-number-sat] |

### Counting companion, B (order 638)

| ID | Claim and proposed proof route | Explicit deps |
| --- | --- | --- |
| ex-cook-levin-can-be-made-parsimonious | Exhibit two accepting tableaux and exactly two satisfiers under unique auxiliary variables. | [lem-cook-levin-can-be-made-parsimonious] |
| ex-np-is-contained-in-p-sharpp | Decide a small formula by one NumberSAT query and a nonzero test. | [def-number-sat, prop-np-is-contained-in-p-sharpp] |
| cex-sharpp-is-a-language-class | Contrast two non-Boolean NumberSAT values with their Boolean nonzero predicate. | [def-number-sat, fs-sharpp-is-a-language-class] |

## Known limits, proof obligations, and validation

Authoring must retain: the O(s log(n+s)) gate encoding; independent resource
bounds for both advice directions; existential candidate before universal
Karp--Lipton challenge; unique, not merely equisatisfiable, Cook--Levin
auxiliaries; PP's zero-gap offset; and the declared added variable in the
many-one/parsimonious counterexample. No missing prerequisite item is known.

Completed validation: JSON parse passed; manifest-deps reported 39 items,
0 normalizations, 0 errors; manifest-only content policy reported 0 errors and
0 warnings; coverage-checklist reported 2 pages, 112 harvested results,
0 errors, and one non-blocking low-yield warning for the deliberately broad
Fortnow range (19 of 49 harvested results scaffolded, each other result given a
specific disposition); ordinary source-stamp gate passed 4/4; and
validate-plan completed with its OK verdict for the repository's declared
order, item dependencies, and this batch's four item lists. A final
working-tree scope check found this batch's three authorized artifacts alongside
pre-existing, unrelated run artifacts, which were not touched. The
forced-refetch DNS condition above remains an unresolved environmental
verification limit, not a completed source-repair action.
