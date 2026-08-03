# Wave 2 real-analysis — Audit-Beta A1/A2/A4 findings

Scope is the manifest of record `wave2-real-analysis.pages.json`: the published A/B pair `suprema-and-infima` and `suprema-and-infima-examples`, 25 formerly untagged items. A1/A2 recorded proposals without editing source content; A4 applied the 25 A3-approved retags, three citation-precision repairs, two durable item restatements, and the approved A-page summary rewrite. No id, item, or reading-order entry was renamed, removed, or reordered.

## A1 provenance determination

All 25 items have a ledger row. No statement or construction was assigned `ai-generated`: each exact construction or claim was found in the literature, or was a recoverable reformulation or specialization of a sourced result. There are no `established-knowledge` waivers and no undecidable classifications requiring Alpha escalation.

| statement / proof / evidence | count | ids |
|---|---:|---|
| `literature-derived` / `not-applicable` / `exact-source` | 2 | `def-bounded-set`, `def-infimum` |
| `ai-altered` / `not-applicable` / `semantic-source` | 2 | `def-max-min`, `rem-sup-conventions` |
| `literature-derived` / `literature-derived` / `exact-source` | 2 | `lem-sup-unique`, `thm-infimum-property` |
| `ai-altered` / `ai-altered` / `semantic-source` | 5 | `lem-sup-epsilon`, `lem-inf-epsilon`, `lem-sup-monotone`, `lem-sup-sum`, `ex-sup-rationals-below-sqrt-two` |
| `ai-altered` / `ai-generated` / `semantic-source` | 7 | `lem-reflection`, `lem-max-is-sup`, `lem-finite-set-has-max`, `lem-sup-translate`, `lem-sup-scale`, `fs-every-set-has-sup`, `ex-sup-of-sum-of-sets` |
| `literature-derived` / `ai-generated` / `exact-source` | 7 | `fs-sup-belongs-to-set`, `ex-sup-of-open-interval`, `ex-sup-of-closed-interval`, `ex-inf-of-reciprocals`, `cex-sup-not-attained`, `cex-unbounded-set-has-no-sup`, `cex-empty-set-has-no-sup` |

### Class (c) provenance-retag proposal

Approve the 25 ledger determinations above and, at A4 only, write the matching component provenance and reader-visible reference entries while removing any legacy `authorship` field in the same edit. The per-item evidence, convention deltas, proof-route rationale, and exact URLs are in `wave2-real-analysis.provenance.jsonl`. This is a proposal even where the eventual edit is frontmatter-only.

The following URLs were opened successfully during this pass and returned the requested resources over HTTP 200 on 2026-08-03:

- John K. Hunter, *An Introduction to Real Analysis*: `https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf`
- Peter J. Olver, *Continuous Calculus*: `https://www-users.cse.umn.edu/~olver/ln_/cc.pdf`
- MIT 18.100A, *Complete Lecture Notes*: `https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf`
- David H. Ernst, *An Introduction to Proof via Inquiry-Based Learning*, §5.1: `https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page`

## A2 mathematical and citation audit

I found no false or overstrong item Statement, Definition, Example construction, Refutation, Counterexample, or numbered proof conclusion. The least-upper-bound hypotheses, reflection formula, both epsilon directions, finite-extrema induction, monotonicity, translation, sign-sensitive scaling, sumset identity, interval computations, reciprocal example, and rational square-root gap all close under the cited clauses. The page summary contains a class-(d) ambiguity and several schema-contract defects, and three proof Facts need citation-precision repair.

The full proof-contract scope is 21 proof-bearing items. It maps all 161 numbered steps exactly once, captures all 174 raw fact-link occurrences as 172 distinct Fact/source contracts and their uses (two Fact paragraphs repeat the same link), and supplies all eight boundary dispositions for every item. On the A2 pre-repair text, `proof-contract.mjs --strict` had exactly one deliberate hard failure: `cex-empty-set-has-no-sup` cited a free-prose remark from a proof Fact, although the contract permits only a source Definition, Statement, Statement refuted, or Example. A4 removed that citation and synchronized the contract; the final strict run is clean.

### A3 override: no class-(a) falsehood

The orchestrator overturned the proposed falsehood classification. In the sentence saying that the least-upper-bound property requires a set to be “nonempty and bounded above, and each hypothesis fails on its own witness,” the nearest antecedent of “each hypothesis” is the ordered pair *nonempty* / *bounded above*. The empty set correctly witnesses failure of nonemptiness, and the canonical naturals correctly witness failure of boundedness above. The sentence is true as written. Its potential to be misread against the two previously mentioned false statements is a class-(d) ambiguity only, and the approved summary rewrite resolves it without recording or counting a corrected falsehood.

### Class (b) citation-precision repairs

#### `cex-empty-set-has-no-sup`: a proof Fact cites a remark as a theorem

Current `[L4]` says that the library does not adopt extended-real conventions and that `sup emptyset` is undefined, citing `rem-sup-conventions`; step 4.1 cites `[L4]`. A free-prose convention remark is not a permissible proof-contract source clause, and the counterexample has already proved the needed conclusion in steps 1.1–3.1.

Proposal: remove `[L4]`, remove the `[L4]` tag from step 4.1, and remove `rem-sup-conventions` from this item's `deps`. Keep the explanatory link in the unnumbered prose and Remarks, where it is orientation rather than proof input. This is a dependency deletion, not an item deletion or id change.

#### `cex-sup-not-attained`: `[L1]` over-attributes the interval computation

Current `[L1]` attributes “I is nonempty, 1 is an upper bound, sup I = 1, and 1 is not in I” jointly to `ex-sup-of-open-interval` and `lem-sup-epsilon`. The example states all four propositions; the generic epsilon lemma states none of those instance facts by itself. This counterexample imports the completed computation rather than rerunning it.

Proposal: delete the `lem-sup-epsilon` link from `[L1]` and remove it from this item's `deps`; retain only `ex-sup-of-open-interval` as the source of the imported interval fact.

#### `ex-sup-rationals-below-sqrt-two`: `[L5]` reverses a false-statement source without saying so

Current `[L5]` reads “No rational squares to 2 (`fs-sqrt2-rational`)”, while the cited item's Statement literally displays the false existential claim and its Refutation establishes the negation. The mathematical use is correct, but the Fact does not faithfully state what the cited false-statement item records.

Proposal: restate `[L5]` as: “The claim that there exists `x in Q` with `x^2 = 2` is false (`fs-sqrt2-rational`).” No dependency change is needed.

### Class (d) debatable restatements and published-claim decay

#### A-page summary: four paragraphs, positional/survey prose, and an ambiguous antecedent

The summary has four paragraphs instead of the required two, calls this “the first page of analysis proper,” makes a corpus-wide downstream claim, counts “three things,” and permits the antecedent ambiguity resolved at A3. Proposed complete replacement, two paragraphs under 150 words each:

> Completeness of $\mathbb{R}$ supplies a least upper bound for every nonempty set bounded above. Lower bounds, infima, maxima and minima provide the dual notions and distinguish a best bound from an attained element. Reflection through zero converts upper-bound questions into lower-bound questions and derives the greatest-lower-bound property from least-upper-bound completeness.
>
> The development proves uniqueness and epsilon characterizations of suprema and infima, then establishes their behavior under inclusion, translation, nonzero scaling, and sumsets. Finite nonempty subsets attain maxima and minima, whereas open intervals show that a supremum need not be attained. The empty set and the canonical naturals show independently why nonemptiness and boundedness above are required for a real supremum.

#### `lem-finite-set-has-max`: stale denial of published consumers

Its second Remark says “no published item of the library cites either [the arbitrary-ordered-field observation] or this lemma.” Disk inspection finds 117 published `deps` consumers of `lem-finite-set-has-max`, including many later real-analysis and topology items. This is the exact published-claim-decay class the triage rule says to record rather than chase.

Proposal: replace the denial sentence with durable mathematical prose: “The same induction works in any totally ordered field; this item records the real-specialized form used by later developments.” Do not enumerate or deny consumers.

#### `rem-sup-conventions`: a future promise has already closed

The final sentence says that if a later page needs the extended real line, it “will introduce it explicitly.” The published item `def-extended-reals` now does so on `limsup-and-subsequential-limits`.

Proposal: replace the future promise with: “The extended real line is introduced explicitly in `def-extended-reals` for later limsup and liminf arguments, with its order and partial arithmetic kept separate from R.” Add the link using the mechanically legal forward-reference metadata determined at A3/A4; do not turn it into a logical `deps` edge.

## A4 applied repair record

### Class (c): 25 provenance retags

Each item had no component `provenance` block before A4. The new text is the exact `statement` / `proof` pair below. The cited reference was added to `sources.references`; existing references were retained. No scoped item had a legacy `authorship` field, so D5 required no deletion. The four reference URLs used in this batch are:

- Hunter: `https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf`
- Ernst: `https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page`
- MIT: `https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf`
- Olver: `https://www-users.cse.umn.edu/~olver/ln_/cc.pdf`

| item | old text | new provenance text | evidence / source URL |
|---|---|---|---|
| `def-bounded-set` | component provenance absent | `statement: literature-derived`; `proof: not-applicable` | `exact-source`; Hunter |
| `def-infimum` | component provenance absent | `statement: literature-derived`; `proof: not-applicable` | `exact-source`; Hunter |
| `def-max-min` | component provenance absent | `statement: ai-altered`; `proof: not-applicable` | `semantic-source`; Ernst |
| `lem-sup-unique` | component provenance absent | `statement: literature-derived`; `proof: literature-derived` | `exact-source`; Hunter |
| `lem-reflection` | component provenance absent | `statement: ai-altered`; `proof: ai-generated` | `semantic-source`; Hunter |
| `thm-infimum-property` | component provenance absent | `statement: literature-derived`; `proof: literature-derived` | `exact-source`; Hunter and MIT |
| `lem-sup-epsilon` | component provenance absent | `statement: ai-altered`; `proof: ai-altered` | `semantic-source`; Ernst and Hunter |
| `lem-inf-epsilon` | component provenance absent | `statement: ai-altered`; `proof: ai-altered` | `semantic-source`; Hunter |
| `lem-max-is-sup` | component provenance absent | `statement: ai-altered`; `proof: ai-generated` | `semantic-source`; Ernst |
| `lem-finite-set-has-max` | component provenance absent | `statement: ai-altered`; `proof: ai-generated` | `semantic-source`; Hunter. The pre-repair theorem was an exact match, but the A4 AI rewrite of its statement-side Remark requires the final `ai-altered` tag. |
| `lem-sup-monotone` | component provenance absent | `statement: ai-altered`; `proof: ai-altered` | `semantic-source`; Hunter |
| `lem-sup-translate` | component provenance absent | `statement: ai-altered`; `proof: ai-generated` | `semantic-source`; Olver |
| `lem-sup-scale` | component provenance absent | `statement: ai-altered`; `proof: ai-generated` | `semantic-source`; Hunter |
| `lem-sup-sum` | component provenance absent | `statement: ai-altered`; `proof: ai-altered` | `semantic-source`; Hunter and Olver |
| `rem-sup-conventions` | component provenance absent | `statement: ai-altered`; `proof: not-applicable` | `semantic-source`; Hunter |
| `fs-sup-belongs-to-set` | component provenance absent | `statement: literature-derived`; `proof: ai-generated` | `exact-source`; Hunter |
| `fs-every-set-has-sup` | component provenance absent | `statement: ai-altered`; `proof: ai-generated` | `semantic-source`; Hunter and MIT |
| `ex-sup-of-open-interval` | component provenance absent | `statement: literature-derived`; `proof: ai-generated` | `exact-source`; Hunter |
| `ex-sup-of-closed-interval` | component provenance absent | `statement: literature-derived`; `proof: ai-generated` | `exact-source`; Hunter |
| `ex-inf-of-reciprocals` | component provenance absent | `statement: literature-derived`; `proof: ai-generated` | `exact-source`; Hunter |
| `ex-sup-rationals-below-sqrt-two` | component provenance absent | `statement: ai-altered`; `proof: ai-altered` | `semantic-source`; MIT and Hunter |
| `ex-sup-of-sum-of-sets` | component provenance absent | `statement: ai-altered`; `proof: ai-generated` | `semantic-source`; Olver |
| `cex-sup-not-attained` | component provenance absent | `statement: literature-derived`; `proof: ai-generated` | `exact-source`; Hunter |
| `cex-unbounded-set-has-no-sup` | component provenance absent | `statement: literature-derived`; `proof: ai-generated` | `exact-source`; Hunter and MIT |
| `cex-empty-set-has-no-sup` | component provenance absent | `statement: literature-derived`; `proof: ai-generated` | `exact-source`; Hunter |

The 20 frontmatter-only retags preserve their pre-existing `verification.judge` and audit/verification stamps. The five items with mathematical or public-interface text changes below have the stale prior `verification.judge` and `verification.verified` blocks removed; none had an `audited` stamp, and this Beta wrote no new certification.

### Class (b): citation precision

#### `cex-empty-set-has-no-sup`

- Old Fact: `[L4] Conventions: the extended-real conventions $\sup \emptyset = -\infty$ and $\inf \emptyset = +\infty$ are not adopted in this library, and $\sup \emptyset$ is simply undefined ([[rem-sup-conventions]]).`
- Old step ending: `[step 3.1, step 1.1, L3, L4]`; old `deps` included `rem-sup-conventions`.
- New text: `[L4]` is absent, step 4.1 ends `[step 3.1, step 1.1, L3]`, and `rem-sup-conventions` is absent from `deps`. The explanatory `[[rem-sup-conventions]]` links remain in unnumbered prose and the final Remark.
- Elementary derivation: step 1.1 proves that every real is an upper bound of the empty set; steps 2.1–3.1 show that each proposed upper bound $w$ is exceeded downward by the strictly smaller upper bound $w-1$, so no real upper bound is least. Step 4.1 therefore follows from steps 1.1 and 3.1 plus the false claim recorded in `[L3]`; the convention Remark supplies no logical input.

#### `cex-sup-not-attained`

- Old Fact: `[L1] The open unit interval: $I$ is nonempty, $1$ is an upper bound of $I$, $\sup I = 1$, and $1 \notin I$ ([[ex-sup-of-open-interval]], [[lem-sup-epsilon]]).`
- Old `deps` included `lem-sup-epsilon`.
- New Fact: `[L1] The open unit interval: $I$ is nonempty, $1$ is an upper bound of $I$, $\sup I = 1$, and $1 \notin I$ ([[ex-sup-of-open-interval]]).`; `lem-sup-epsilon` is absent from `deps`.
- Source check: the `## Example` section of `ex-sup-of-open-interval` states all four imported instance facts. `lem-sup-epsilon` states only the generic epsilon characterization and none of those facts for $I$.

#### `ex-sup-rationals-below-sqrt-two`

- Old Fact: `[L5] No rational squares to $2$ ([[fs-sqrt2-rational]]).`
- New Fact: `[L5] The claim that there exists $x \in \mathbb{Q}$ with $x^2 = 2$ is false ([[fs-sqrt2-rational]]).`
- Source check: the exact `## Statement` of `fs-sqrt2-rational` is `**False claim:** there exists $x \in \mathbb{Q}$ with $x^2 = 2$.`; its Refutation establishes the negation consumed at step 2.2. The new Fact now names the false-statement polarity rather than presenting the refuted existential as though it were the cited Statement.

### Class (d): durable restatements

#### `lem-finite-set-has-max`

- Old text: `**Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. Reading the same three steps with $\mathbb{R}$ replaced by an arbitrary ordered field ([[def-ordered-field]]) therefore yields a maximum and a minimum for every nonempty finite subset of that field, $\mathbb{Q}$ included. That generalisation is an observation about the argument above and is not itemised separately, and no published item of the library cites either it or this lemma. Where published material does take a maximum of finitely many rationals, as [[lem-cauchy-bounded]] does when it sets $M = \max\{|a_1|, \dots, |a_{N-1}|, |a_N| + 1\}$, it does so by an explicit choice inside its own proof, so no published proof is retroactively made to depend on this page.`
- New text: `**Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; this item records the real-specialized form used by later developments.`
- On-disk check and elementary derivation: 117 published items list this lemma in `deps`, and sampled consumers cite it directly, so both old consumer denials had decayed to falsehoods. The durable mathematical replacement follows by inspection of the proof: step 1.1 uses reflexivity, steps 3.1–3.2 use totality and transitivity, and step 5.1 uses induction; completeness is unused.

#### `rem-sup-conventions`

- Old text: `If a later page needs $\overline{\mathbb{R}}$, for instance for limsup and liminf of a sequence that is not bounded, it will introduce it explicitly as a new object with its own order and its own partial arithmetic, rather than quietly extending $\mathbb{R}$.`
- New text: `The extended real line is introduced explicitly in [[def-extended-reals]] for later limsup and liminf arguments, with its order and partial arithmetic kept separate from $\mathbb{R}$.`
- On-disk check: the published `def-extended-reals` defines $\overline{\mathbb{R}}$, its order, and its partial arithmetic. The link is recorded in `forward_refs: [def-extended-reals]`, not in `deps`, because it is orientation rather than a logical input.

#### `suprema-and-infima` page summary

Class: page-summary contract repair and class-(d) ambiguity resolution, **not** a corrected falsehood.

Old text:

> **Objective.** This page builds the working toolkit for suprema and infima in $\mathbb{R}$. It is the first page of analysis proper, once $\mathbb{R}$ has been constructed and axiomatised on the earlier pages, and the analysis that follows rests on it: completeness is used through the supremum, and the supremum is used through the epsilon characterisation proved here.
>
> The supremum itself is **not** defined here. The published [[def-complete-ordered-field]] already defines upper bound, bounded above, least upper bound, and the least-upper-bound property that distinguishes $\mathbb{R}$ from $\mathbb{Q}$. What that definition leaves open is everything one actually computes with, and that is the content of this page.
>
> Three things are worth watching. First, the **infimum is not assumed**: the greatest-lower-bound property is proved, by reflecting a set through the origin and applying the least-upper-bound property to $-S$, so $\inf S = -\sup(-S)$ is a theorem rather than a second axiom. Second, the **epsilon characterisation**, that an upper bound $u$ is the supremum exactly when every $u - \varepsilon$ is beaten by some element of the set, is the form used in practice, and both directions are proved. Third, the arithmetic: suprema commute with translation, with positive scaling, and with sums of sets, while negative scaling exchanges supremum and infimum.
>
> The two false statements guard the errors that follow from thinking of the supremum as a maximum. A supremum **need not belong to its set**, and a set **need not have one at all**: the least-upper-bound property requires the set to be nonempty and bounded above, and each hypothesis fails on its own witness, the empty set for the first and the set of canonical naturals of $\mathbb{R}$ for the second. Distinguishing supremum from maximum is the whole point of the definitions of maximum and minimum given here, and of the lemma identifying when the two coincide.

New text:

> Completeness of $\mathbb{R}$ supplies a least upper bound for every nonempty set bounded above. Lower bounds, infima, maxima and minima provide the dual notions and distinguish a best bound from an attained element. Reflection through zero converts upper-bound questions into lower-bound questions and derives the greatest-lower-bound property from least-upper-bound completeness.
>
> The development proves uniqueness and epsilon characterizations of suprema and infima, then establishes their behavior under inclusion, translation, nonzero scaling, and sumsets. Finite nonempty subsets attain maxima and minima, whereas open intervals show that a supremum need not be attained. The empty set and the canonical naturals show independently why nonemptiness and boundedness above are required for a real supremum.

Contract check: the old body had four prose paragraphs, positional prose, a corpus-wide downstream claim, and the count “three things.” The replacement has exactly two nonempty paragraphs of 50 and 60 words and makes no count, ranking, positional, or corpus-wide claim. The final sentence assigns the empty set to nonemptiness and the canonical naturals to boundedness directly, removing the antecedent ambiguity while preserving the true mathematics.

## Triage notes not proposed for repair

- `lem-sup-unique` presents the supremum and infimum implications in parallel and combines them at the final step. Reading the two assumption branches separately closes the formal presentation gap well within 30 seconds.
- Several Facts derive reflexivity, transitivity, inverse uniqueness, or nonstrict order forms directly from ordered-field/field definitions rather than citing a dedicated intermediate lemma. Each derivation is elementary and under the 30-second threshold; none hides a stronger hypothesis or a wrong direction.
- Subjective phrases such as “smallest interesting computation” are nonfatal prose imperfections and were not pursued.

## Owner-only queue

None. No item deletion, id change, or reading-order change is proposed.

## Continuity checkpoint

Substage: A4 complete, awaiting the orchestrator's wave-wide post-A4 snapshot/gate-of-record and A6 independent reading. Owned artifacts are `wave2-real-analysis.provenance.jsonl`, `wave2-real-analysis.proof-contracts.json`, and this findings file; source edits are exactly the 25 manifest item files and the `suprema-and-infima` A-page body. All 25 required `pre-<id>` touch labels and the extra `pre-suprema-and-infima` label are present in valid JSON. Concurrent Betas exposed a non-atomic `touchlog` writer race twice; after all sibling snapshot loops drained, the surviving complete JSON was validated, a trailing 12-byte partial duplicate was removed, and all missing real-analysis labels were retaken before any corresponding edit. No item id, reading order, or B-page body changed. Exact next action: Alpha assigns independent readers to the five material item repairs and the page rewrite, writes current `verification.verified` stamps only after certification, audits the dependency/forward-reference impact, and the orchestrator runs the coordinated post-A4 snapshot and wave-wide gates.

## Coverage statement

Every one of the 25 in-scope items was read and changed at A4: `def-bounded-set`, `def-infimum`, `def-max-min`, `lem-sup-unique`, `lem-reflection`, `thm-infimum-property`, `lem-sup-epsilon`, `lem-inf-epsilon`, `lem-max-is-sup`, `lem-finite-set-has-max`, `lem-sup-monotone`, `lem-sup-translate`, `lem-sup-scale`, `lem-sup-sum`, `rem-sup-conventions`, `fs-sup-belongs-to-set`, `fs-every-set-has-sup`, `ex-sup-of-open-interval`, `ex-sup-of-closed-interval`, `ex-inf-of-reciprocals`, `ex-sup-rationals-below-sqrt-two`, `ex-sup-of-sum-of-sets`, `cex-sup-not-attained`, `cex-unbounded-set-has-no-sup`, and `cex-empty-set-has-no-sup`. Twenty received frontmatter/source retags only. Material item text or dependency metadata changed only in `lem-finite-set-has-max`, `rem-sup-conventions`, `ex-sup-rationals-below-sqrt-two`, `cex-sup-not-attained`, and `cex-empty-set-has-no-sup`; their stale prior certification/judge blocks are absent pending A6. The only changed page file is `library/real-analysis/suprema-and-infima.md`, whose body is now exactly two paragraphs of 50 and 60 words. The B page, every id, and both reading-order arrays are unchanged.

The A1/A2 reading coverage remains complete: all 161 numbered proof, verification, refutation, and counterexample steps; all 95 Facts and 174 raw direct Fact-link occurrences (172 distinct Fact/source contracts); and all 176 manifest relationships were checked. The final proof contracts cover 21/21 proof-bearing items and now match the repaired text. There is no unread proof step or dependency citation in the pair, and the overturned summary finding is recorded only as class (d), never as a corrected fatal falsehood.

Gates and checks run on the final A4 state:

- `touchlog.mjs snap`: all 25 `pre-<id>` labels plus `pre-suprema-and-infima` present; final ledger JSON parses after the concurrent-writer recovery described above.
- `reflow.mts`: the four changed proof-bearing items were already canonical; all four reported `unchanged`.
- `precheck.mts`: `cex-empty-set-has-no-sup`, `cex-sup-not-attained`, `ex-sup-rationals-below-sqrt-two`, and `lem-finite-set-has-max` all passed; 4 checked, 0 failing, and no REPAIR stratification was printed.
- `proof-contract.mjs --strict`: 21/21 contracts checked, 0 errors, 0 warnings.
- `content-policy.mjs --audit`: 25 scoped items, 0 errors, 0 warnings; item frontmatter, ledger labels, evidence classes, URLs, and D5 retirement state agree.
- `fwdcheck.mjs`: pass, 0 open forward references and no cycle/load-bearing error; `rem-sup-conventions -> def-extended-reals` is a legal closed forward reference.
- `depcheck.mjs --json`: exit 1 only for 15 `published-unaudited` material-repair transients awaiting A6, exactly five from this batch and ten from concurrent batches. Its only other finding naming this batch is the expected warning that `cex-empty-set-has-no-sup` keeps an unnumbered orientation link to `rem-sup-conventions` after the logical `deps` edge was removed, exactly as A3 required. No resolution, cycle, draft-publication, or other hard error was reported.
- `extcheck.mjs`: pass; 0 hard errors. Its 83 corpus-wide `unproved-on-published` warnings are the existing visibly marked recorded-not-proved closure, not defects introduced here.
- `citecheck.mjs` over the 25 items: exit 0 with one pre-existing heuristic warning at `thm-infimum-property` `[L5]`; nonstrict order reversal follows by the strict/equality cases from the declared ordered-field facts and is under the 30-second threshold.
- `rendercheck.mjs` over the 25 items and A page: 26 files, 0 errors; all delimiters and KaTeX spans render.
- `prosecheck.mjs --warnings` over the same 26 files: 0 errors and six nonblocking heuristics. One is the exact mathematical phrase “two claims,” one is the pronoun “none of them,” and four accurately state this library's explicit real-versus-extended-real convention; none is a page count, false scope denial, or positional contradiction.
- `depsource.mjs`: pass with 0 unresolved dependencies. Its three batch entries in the Archimedean-reciprocal worklist use the direct Archimedean form already checked at A2.
- Scoped provenance/source/stamp/summary invariant script: 25 item labels match 25 ledger rows, every ledger URL occurs reader-visibly, zero legacy `authorship` fields remain, all 20 pure-retag judge blocks remain, all five material stale stamps are absent, and the summary is 2 paragraphs of 50/60 words.
- JSON/JSONL parse checks and scoped `git diff --check`: pass; no malformed audit artifact or whitespace error.
