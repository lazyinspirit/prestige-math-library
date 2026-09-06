# Frontier 31 beta — batch 21 scaffold notes

## Scope and design reconciliation

Authorised outputs are this notes file, `frontier-31-batch-21.pages.json`, and
`frontier-31-batch-21.coverage.json`. No published page, plan structure,
workflow state, or other batch was changed.

The circuit dispatch names `plan-computability-theory-track.md` at lines 1090
and 1114. I read the contiguous TC-26 block at lines 1090--1124. Line 1090
starts the governing A-page design and line 1114 introduces its B-page list;
the latter is part of the same block, not a competing completion/expansion
amendment. No later competing design location was supplied. The counting page
uses the TC-29 block at lines 1199--1234.

The design and `research/plan-spec.json` agree for every dispatch fact:

| page | order | prerequisites | design decision |
| --- | ---: | --- | --- |
| Boolean Circuits and Nonuniform Complexity | 631 | `the-cook-levin-theorem`, `finite-counting-and-binomial-coefficients` | 16 A items and 3 B items; the nonuniform/advice route, counting lower bound, CircuitSAT, and Karp--Lipton |
| Counting Complexity and Sharp-P | 637 | `randomized-complexity-and-amplification`, `the-cook-levin-theorem` | 17 A items and 3 B items; parsimonious Cook--Levin, NumberSAT, Gap-P/PP, and a #P-value oracle |

There is therefore no drift claim to adjudicate. Both A pages are below the
60-item split threshold (16 and 17 items), and their B pages contain 3 items
each. No split is proposed. The live autopilot status reports a different run
(`frontier-23`); it was observed but not altered, because the dispatch
authorises only frontier-31 batch-21 artifacts.

## Source ledger and harvest limits

Every URL below was read as the document named, not used merely as a
citation. `coverage.json` contains the complete per-heading disposition.

| key | independent treatment and role | URL and exact range read |
| --- | --- | --- |
| AB6 | Arora and Barak, *Computational Complexity: A Modern Approach* (textbook; circuit primary treatment) | <https://theory.cs.princeton.edu/complexity/book.pdf>, contents PDF pp. 6--7 and Chapter 6 printed pp. 101--114 / PDF pp. 116--129: Sections 6.1--6.7 and Chapter notes. |
| Katz | Jonathan Katz, *Notes on Complexity Theory*, Lecture 10: *Non-Uniform Complexity* (full lecture-note treatment) | <https://www.cs.umd.edu/~jkatz/complexity/f11/lecture10.pdf>, entire PDF pp. 1--4: Sections 1, 1.1, 1.2, 1.3, Bibliographical Notes. |
| AB9 | Arora and Barak, same independent textbook (counting primary treatment) | <https://theory.cs.princeton.edu/complexity/book.pdf>, contents PDF p. 7 and Chapter 9 printed pp. 172--175 / PDF pp. 186--190: chapter introduction, §§9.1, 9.1.1, 9.2, and the opening of §9.2.1 through Example 9.9. |
| Fortnow | Lance Fortnow, *Counting Complexity* (survey treatment) | <https://lance.fortnow.com/papers/files/counting.pdf>, abstract and §§1--4.1, PDF pp. 1 and 4--15: §3 through §3.1, and §4 through Theorem 4.14. |

The circuit page draws its direct mathematical backbone from AB6 Definitions
6.1--6.5, Theorems 6.7, 6.11, 6.13, 6.15, Definitions 6.21--6.22, and
Definition 6.30/Lemma 6.31; Katz independently covers the counting lower
bound, P/poly, CircuitSAT, the unary nonuniform example, Karp--Lipton, and
NC/AC. The counting page draws from AB9 Definition 9.2, Remark 9.3,
Theorem 9.7's invertible witness correspondence, and its #P function-oracle
convention; Fortnow independently covers Definition 3.1, Theorems/Lemmas
3.2--3.10, Classifications 4.1, 4.3, 4.12, Corollary 4.13, and Theorem 4.14.

The coverage dispositions deliberately exclude, with result-specific reasons,
the circuit hierarchy, P-completeness, exponential-size circuit
characterisation, permanent/Valiant machinery, Toda-style isolation and
hierarchy results, and auxiliary counting classes. None is used as a hidden
proof step.

## Conventions locked for authoring

- A circuit is a finite DAG over input nodes, constants, NOT, and fan-in-two
  AND/OR gates. Its size is the number of non-input gates and depth is the
  longest input-to-output gate path. Fixed finite bases are used only up to
  constant factors.
- `P/poly` means an arbitrary length-indexed polynomial-size family. It makes
  no uniform-generation assertion. The AC/NC item, in contrast, states a
  logspace-uniform circuit-description convention internally (SIZE/TYPE/EDGE
  style), since no pre-existing `def-logspace-uniform-circuit-family` item is
  available in the prerequisite closure.
- The NC containment proposition defines the read-only-input logspace model in
  its statement/proof. Karp--Lipton likewise defines the needed PH and
  `Sigma_2^p` notation in its statement. These are self-contained conventions,
  not forward dependencies on the later polynomial-hierarchy page.
- CircuitSAT has a DAG gate-list encoding and a designated output. The
  reduction proof must map SAT/formula input to CircuitSAT, state preservation
  of satisfiability, and separately bound encoding size.
- `#P` denotes nonnegative integer-valued accepting-path-count functions.
  `GapP` is accepting paths minus rejecting paths. The #P page's `FP` means
  total nonnegative integer-valued functions with polynomial-time binary
  output; this is the exact convention needed for `FP subseteq #P` and must
  not be silently widened to signed FP.
- NumberSAT counts assignments to its declared variable list, including unused
  variables. A parsimonious reduction preserves the numerical count exactly,
  not merely the yes/no answer. The Cook--Levin lemma must use uniquely
  determined tableau/extension variables and prove a bijection, not cite only
  equisatisfiability.
- MajoritySAT uses the strict threshold `#sat(phi) > 2^(n-1)`. PP's strict
  Gap-P sign form needs the standard zero-gap offset before complementing.
  `P^#P` queries receive an exact #P value in binary, not a membership bit.

## Item checkpoint — Boolean Circuits and Nonuniform Complexity

The table is the source/dependency handoff for every planned item. `AB6` and
`Katz` expand to exact URL/locator records above; full proof routes are in the
manifest `strategy` fields.

| item | exact planned claim | declared dependencies | support |
| --- | --- | --- | --- |
| `def-boolean-circuit-size-depth-fanin-and-basis` | Defines the DAG basis, fan-in, size, depth, and fixed-basis convention. | `[]` | AB6 Def. 6.1; Katz §1.1 |
| `def-circuit-family-and-p-poly` | Defines nonuniform families and P/poly. | circuit definition | AB6 Defs. 6.2--6.3; Katz §1.2 |
| `thm-p-is-contained-in-p-poly` | `P subseteq P/poly` via tableau/unrolling. | circuit definition; family; `def-p` | AB6 Thm. 6.7/Rem. 6.8; Katz Thm. 3 |
| `def-polynomial-advice-machine` | Defines length-only polynomial advice. | `[]` | AB6 §6.1.1/Def. 6.9; Katz Def. 1 |
| `thm-p-poly-equals-p-with-polynomial-advice` | Establishes the two simulations. | family; advice | AB6 Thm. 6.11/Rem. 6.12 |
| `thm-undecidable-languages-exist-in-p-poly` | Gives an undecidable unary language with small circuits. | family | AB6 unary example; Katz §1.2 |
| `def-formula-and-branching-program` | Separates formulas and deterministic branching programs. | circuit definition | AB6 circuit/formula discussion; definition authored directly |
| `def-ac-zero-nc-one-and-nc` | Defines AC0, NC1, NC and the limited uniformity convention. | circuit definition | AB6 Defs. 6.5, 6.21, 6.22; Katz Def. 2 |
| `prop-nc-one-is-contained-in-l-and-l-in-nc-two` | Proves `NC1 subseteq L subseteq NC2`. | AC/NC definition | Katz §1.3; AB6 §6.5.1 |
| `lem-counting-circuits-of-bounded-size` | Bounds size-s circuit encodings by `2^{O(s log(n+s))}`. | circuit definition; product rule | AB6 proof of Thm. 6.15; Katz Thm. 1 |
| `thm-shannon-almost-all-functions-require-exponential-circuits` | Almost all n-bit functions need `Omega(2^n/n)` gates. | counting lemma; function-cardinality theorem | AB6 Thm. 6.15; Katz Thm. 1 |
| `def-circuit-sat` | Defines CircuitSAT with its encoding and output gate. | circuit definition | AB6 Def. 6.30; Katz §1.2 |
| `thm-circuit-sat-is-np-complete` | Proves CircuitSAT is in NP and NP-hard. | CircuitSAT; Cook--Levin; many-one; NP-complete | AB6 Lem. 6.31--6.32; Katz §1.2 |
| `thm-karp-lipton-collapse` | `NP subseteq P/poly` implies `PH = Sigma_2^p`. | family; P/poly/advice theorem; CircuitSAT theorem | AB6 Thm. 6.13; Katz Thm. 4 |
| `fs-polynomial-size-implies-uniform-generation` | Rejects the uniform-generation inference. | family; undecidable-small-circuit theorem | AB6 unary example; Katz §1.2 |
| `fs-shannon-counting-gives-an-explicit-hard-function` | Rejects the explicitness inference from Shannon counting. | count lemma; Shannon theorem | AB6 §6.3/Thm. 6.15; Katz Thm. 1 |
| `ex-p-poly-equals-p-with-polynomial-advice` | Works both hardwiring directions on a finite instance. | P/poly/advice theorem | AB6 Rem. 6.12 |
| `ex-karp-lipton-collapse` | Displays the existential circuit/universal challenge form. | Karp--Lipton theorem | AB6 Thm. 6.13 |
| `cex-polynomial-size-implies-uniform-generation` | Uses unary undecidability against a uniform generator. | unary theorem; false statement | AB6 unary example; Katz §1.2 |

## Item checkpoint — Counting Complexity and Sharp-P

`AB9` and `Fortnow` expand to exact URL/locator records above. The strategy
field on the manifest is the required proof strategy checkpoint.

| item | exact planned claim | declared dependencies | support |
| --- | --- | --- | --- |
| `def-sharpp-and-gap-p-functions` | Defines #P and Gap-P counting functions. | `[]` | AB9 Def. 9.2/Rem. 9.3; Fortnow Def. 3.1 |
| `def-number-sat` | Defines exact NumberSAT counts with declared variables. | Boolean-formula definition | AB9 #SAT example/Thm. 9.7 |
| `prop-number-sat-is-in-sharpp` | NumberSAT is a #P function. | #P/Gap-P; NumberSAT | AB9 Def. 9.2; Fortnow Def. 3.1 |
| `def-parsimonious-reduction` | Defines exact-count polynomial maps. | `[]` | AB9 Thm. 9.7 witness bijection |
| `lem-cook-levin-can-be-made-parsimonious` | Gives a count-preserving Cook--Levin construction. | parsimonious; NumberSAT; tableau; Cook--Levin iff/map lemmas | AB9 Thm. 9.7 |
| `thm-number-sat-is-sharpp-complete` | NumberSAT is #P-complete under the stated parsimonious convention. | #P; NumberSAT; parsimonious; membership; lemma | AB9 Thm. 9.7 |
| `def-fp-function-class` | Fixes nonnegative binary-output FP. | `[]` | Fortnow p. 3--5/Thm. 3.5 |
| `prop-fp-is-contained-in-sharpp` | Nonnegative FP is contained in #P. | #P/Gap-P; FP | Fortnow Thm. 3.5 |
| `prop-sharpp-is-closed-under-sum-and-product` | #P closes under finite sum and product constructions. | #P/Gap-P | Fortnow §3.1/Lem. 3.9 |
| `def-majority-sat` | Defines strict-threshold MajoritySAT. | NumberSAT | AB9 §9.1.1; Fortnow §4.1 |
| `thm-pp-is-sign-testing-gap-p` | PP is strict Gap-P sign testing. | #P/Gap-P; prior PP definition | Fortnow Class. 4.3/4.12; AB9 §9.1.1 |
| `cor-majority-sat-is-pp-complete` | MajoritySAT is PP-complete. | MajoritySAT; PP sign theorem; parsimonious lemma | AB9 §9.1.1/Thm. 9.7; Fortnow §4.1 |
| `thm-pp-is-closed-under-complement` | PP is closed under complement. | #P/Gap-P; PP sign theorem | Fortnow Lem. 3.3/Class. 4.12/Cor. 4.13 |
| `def-p-with-a-sharpp-oracle` | Defines P with an exact #P-value oracle. | `def-p`; #P/Gap-P | AB9 §9.2/Def. 9.5; Fortnow §2 |
| `prop-np-is-contained-in-p-sharpp` | `NP subseteq P^#P` by a positive witness count. | #P oracle; #P/Gap-P; NumberSAT completeness | Fortnow Class. 4.1; AB9 §9.2 |
| `fs-sharpp-is-a-language-class` | Rejects the category error that #P is a language class. | #P/Gap-P; NumberSAT | AB9 Def. 9.2; Fortnow Def. 3.1 |
| `fs-every-many-one-reduction-is-parsimonious` | Rejects decision-preserving-implies-count-preserving. | many-one; parsimonious; NumberSAT | AB9 Thm. 9.7 contrast |
| `ex-cook-levin-can-be-made-parsimonious` | Shows a two-path computation/tableau bijection. | parsimonious Cook--Levin lemma | AB9 Thm. 9.7 |
| `ex-np-is-contained-in-p-sharpp` | Decides SAT by nonzero NumberSAT output. | NumberSAT; NP-oracle proposition | Fortnow Class. 4.1 |
| `cex-sharpp-is-a-language-class` | Contrasts NumberSAT values with SAT membership. | NumberSAT; false statement | AB9 Def. 9.2 |

## Dependency and proof obligations for authoring

The manifest has an explicit `deps` array on every item object, including all
root definitions. All external dependencies resolve through the two declared
prerequisite closures: Cook--Levin supplies the Boolean-formula, tableau,
mapping, NP-completeness, many-one, and P/NP foundations; finite counting
supplies the product rule and function-counting theorem; randomized complexity
supplies the existing PP definition. No B item is used by another page.

Authoring must still make these fragile steps fully explicit:

1. The P/poly/advice equivalence must charge advice encoding and topological
   circuit evaluation, rather than saying that advice is automatically uniform.
2. Shannon's gate description count must retain its `s log(n+s)` term and
   choose a numerical constant before comparing with `2^(2^n)` functions.
3. CircuitSAT hardness must use the correct source-to-target direction. The
   Karp--Lipton proof must verify a candidate circuit on *all* challenge
   formulas, not just assert a SAT circuit exists.
4. Parsimony must be a literal path/assignment bijection. Merely citing the
   established satisfiable-if-and-only-if Cook--Levin lemma is insufficient.
5. The PP complement proof needs a zero-gap adjustment before negation; a
   naive accept/reject swap does not settle ties.

## Validation checkpoint

Completed on 2026-09-05, without modifying any non-batch artifact:

| check | result |
| --- | --- |
| JSON parse | PASS — both batch JSON files parse. |
| `node tools/manifest-deps.mjs research/frontier-31-batch-21.pages.json` | PASS — 39 items, 0 normalised, 0 errors; every item has an explicit dependency array. |
| `node tools/content-policy.mjs --manifest-only --json research/frontier-31-batch-21.pages.json` | PASS — 39 scoped items, 0 errors, 0 warnings. |
| read-only manifest/prerequisite-closure audit | PASS — 39 items, 0 errors: every dependency resolves, is backward within its own page, avoids B pages, and homes in the transitive closure of that page's declared prerequisites. |
| `node tools/coverage-checklist.mjs research/frontier-31-batch-21.coverage.json --json` | PASS with review warning — 2 pages, 103 harvested entries, 0 errors; counting has 19/48 scaffolded results. The lower yield is intentional and fully item-reasoned in coverage: the Fortnow range also contains omitted isolation/Toda machinery and auxiliary counting classes. Alpha should confirm that scope boundary rather than convert unrelated results into padding. |
| `node tools/validate-plan.mjs research/plan-spec.json` | PASS — no hard errors (the validator reports the repository's existing redundant-prerequisite warnings, including the plan-approved direct finite-counting prerequisite for the circuit page). `plan-spec.json` is intentionally unspliced with beta manifests at this stage, so this is a global plan-order check; the preceding manifest and closure gates check these new item edges. |
| whole-run `content-policy --manifest-only` across `research/frontier-31-batch-*.pages.json` | BLOCKED outside batch 21 — 6 missing-dependency errors are in another batch's group-homology items: `def-schur-multiplier-of-a-group`, `lem-five-term-homology-sequence-for-a-free-presentation`, `def-superperfect-group`, `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two` (two targets), and `lem-positive-degree-integral-homology-of-a-finite-group`. No batch-21 item is named in those failures and this dispatch forbids repairing another batch. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-21.coverage.json --stamp --timeout-sec 90` | BLOCKED by shell DNS — 0/4 sources stamped; Node `fetch` returned `EAI_AGAIN` for the AB6/AB9 textbook URL, Katz notes URL, and Fortnow survey URL. No source was deleted or reclassified to evade this gate. |
| `node tools/url-sweep.mjs --coverage research/frontier-31-batch-21.coverage.json --out /tmp/frontier-31-batch-21-url-sweep.json --recover --fail-on-dead` | BLOCKED by the same shell DNS — 0/3 distinct URLs live, all `curl: (6) Could not resolve host`; archive recovery could not run because it also requires DNS. The report is deliberately in `/tmp`, not a repository artifact. |

The browser fetcher did retrieve the full documents during harvest on the same
date: it identified AB as a 489-page PDF, Katz as a four-page PDF, and Fortnow
as a 29-page PDF, and supplied the quoted source ranges used above. That is
evidence the recorded URLs themselves remain live and full-text; it cannot
truthfully create the source-fetch tool's required bytes/hash stamp, because
the shell fetcher never received those bodies. Therefore the batch is **not
ready for the source-fetch/liveness gates** until the DNS condition clears and
the unmodified URLs can be stamped. The next action is exactly:

```text
node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-21.coverage.json --stamp --timeout-sec 90
node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-21.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-31-batch-21.coverage.json --out /tmp/frontier-31-batch-21-url-sweep.json --recover --fail-on-dead
```

After that, re-run the batch policy and coverage gate; the separate whole-run
policy failure remains owned by its other batch.
