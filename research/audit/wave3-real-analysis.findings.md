# Wave 3 real-analysis — Audit-Beta A1/A2 findings

## Continuity checkpoint — 2026-08-04

- Substage: A1/A2 evidence closure after the first full mathematical read; no A3 approval has been sought and no repair has been applied.
- Owned artifacts: this findings file now exists; `wave3-real-analysis.provenance.jsonl` and `wave3-real-analysis.proof-contracts.json` remain to be generated.
- Completed checks: read both in-scope A pages and all 44 in-scope items in full; read all 272 numbered proof steps; inventoried 190 labelled Facts and 398 direct dependency citations; read the six cited `deferred-set-theory-beyond-choice` targets and confirmed that the fuchsia double-dagger citations are legitimate external catalogue citations; checked the main choice-sensitive arguments (Cantor–Schröder–Bernstein, subsets of countable sets, surjections from `N`, products, countable unions, and the two ZF countermodel items); found no mathematical falsehood in the first pass; began source recovery and verified the UC Davis analysis text through the model-side web route.
- Disk discipline: no library item or page has been changed, no B companion has been created, and no shared git-state-changing command has been run.
- Open checks: finish independent source/HTTP verification for every URL that will enter the provenance ledger; compare every remaining Fact citation with the precise target clause; classify all statement/proof provenance; generate all 35 proof contracts; run the strict gate and coverage/count checks; convert the observed page-summary/survey decay and any citation defects into classed proposals below.
- Exact next action: verify the remaining academic source URLs and their relevant clauses, then complete the 95-target citation comparison before generating the ledger and contracts.

## A1 provenance determination

The manifest has 44 mathematical-content items. The provenance ledger has exactly 44 rows, with no missing or extra id. I made no `ai-generated` determination: every Statement, Definition, false claim, and supplied proof was recoverable as established mathematics from the verified references. In particular, failure to locate an exact transcription was never treated as evidence of novelty. There is no `established-knowledge` waiver and no undecidable classification requiring Alpha escalation.

| statement / proof / evidence | count | ids |
|---|---:|---|
| `ai-altered` / `not-applicable` / `semantic-source` | 9 | `def-injection-surjection-bijection`, `def-equinumerous`, `def-countable`, `def-countable-choice`, `rem-continuum-hypothesis`, `def-finite-sum`, `def-integer-power`, `def-rational-power`, `rem-real-exponents-deferred` |
| `ai-altered` / `ai-altered` / `semantic-source` | 35 | every proof-bearing item in the manifest: all remaining ids |

The `ai-altered` label is deliberate. The local items combine established results with this library's at-most-countable convention, von Neumann naturals, explicit ZF/choice accounting, complete-ordered-field setting, rational-exponent restriction, zero-base supplements, equality cases, and dependency-explicit proof segmentation. Those changes prevent an exact-source classification, but none is a positive novelty determination.

### Class (c) provenance-retag proposal

At A4 only, after A3 approval, apply the 44 statement/proof determinations in `wave3-real-analysis.provenance.jsonl`, add the corresponding reader-visible references, and retire any legacy one-axis `authorship` field in the same edit. This proposal includes pure frontmatter-only retags; no retag has been applied in A1/A2.

### URL verification record

Every URL below was opened successfully through the model-side web route on 2026-08-04 and returned the requested HTTP 200 resource. Shell DNS was not used to infer either presence or absence. These are exactly the 16 distinct URLs recorded in the ledger:

- Hunter, *An Introduction to Real Analysis*: `https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf`
- Lebl, basic set theory: `https://www.jirka.org/ra/html/sec_basicset.html`
- Zapletal, set theory notes: `https://people.clas.ufl.edu/zapletal/files/notesset3.pdf`
- Axiom of Countable Choice: `https://en.wikipedia.org/wiki/Axiom_of_countable_choice`
- Fremlin, *Measure Theory*, Chapter 56: `https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf`
- Stanford Encyclopedia of Philosophy, Continuum Hypothesis: `https://plato.stanford.edu/entries/continuum-hypothesis/`
- Sierpiński's theorem, GCH implies AC: `https://www.ps.uni-saarland.de/extras/sierpinski/`
- Dedekind-infinite sets: `https://en.wikipedia.org/wiki/Dedekind-infinite_set`
- Cambridge JSL, first Cohen model / countable choice: `https://www.cambridge.org/core/journals/journal-of-symbolic-logic/article/does-mathsf-dc-imply-mathsf-acomega-uniformly/05069A84199B3477B3BEA2E58EF21AF6`
- Lebl, *Basic Analysis I*: `https://www.jirka.org/ra/realanal-may07-18.pdf`
- Yale, recursive finite summation: `https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html`
- Binghamton, recursive sums, products, and powers: `https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf`
- MIT 18.100A, AM–GM handout: `https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_rec1.pdf`
- Cornell, finite inequalities: `https://e.math.cornell.edu/people/belk/measuretheory/Inequalities.pdf`
- Oregon State, Young/Hölder/Minkowski notes: `https://math.oregonstate.edu/~show/old/142_Luenberger.pdf`
- Emory, radicals and rational exponents: `https://mathcenter.oxford.emory.edu/site/math100/radicals/`

## A2 mathematical and citation audit

I found no false or overstrong mathematical Statement, Definition, theorem conclusion, corollary, false-statement refutation, or numbered proof step. The target Statements on these two load-bearing pages were checked clause by clause with their incoming wave-3 fan-out in mind. In particular, their hypotheses and conclusions do not silently strengthen finite to countably infinite, omit nonemptiness, reverse an implication, or spend an undeclared choice principle.

The choice ledger closes as follows:

- `thm-schroder-bernstein` constructs the bijection explicitly and uses only unique preimages; no choice is spent.
- `lem-subset-of-countable` and `lem-countable-iff-surjection-from-n` take canonical least natural witnesses; neither spends choice.
- `thm-product-of-countable` combines two separately supplied enumerations, a finite witness use.
- `thm-countable-union-of-countable` spends `AC_omega` exactly at step 3.1, where all component surjections are selected simultaneously.
- `thm-r-uncountable` uses the first admissible third in a fixed order and recursion, not dependent choice.
- `thm-rationals-countable` uses surjective quotient maps and never chooses a representative for every equivalence class.
- The two ZF false statements retain their external consistency hypotheses and do not promote a relative countermodel result into an internal ZF proof.

The four logical dependencies into the excluded `deferred-set-theory-beyond-choice` catalogue are accurate: `rem-feferman-levy-model`, `rem-cohen-first-model`, `rem-independence-of-ch-and-gch`, and `rem-gch-implies-ac` state the exact external propositions consumed. I also read the orienting links to `rem-godel-constructible-universe` and `rem-cohen-forcing-ac-independent`. All six targets are visibly not-proved-here catalogue entries; no target retag is proposed.

The full proof-contract scope is 35/35 proof-bearing items. It covers all 272 numbered steps exactly once, records 388 distinct Fact/source citation contracts representing 398 raw direct Fact-link occurrences (ten Fact paragraphs repeat the same target), and supplies 280 item-specific boundary dispositions. The Facts & Assumptions sections contain 190 labelled Facts, 26 additional direct links in Given clauses, 95 distinct labelled-Fact targets, and 97 distinct targets when Given clauses are included.

### Class (b) citation-precision proposals

#### `fs-countable-union-theorem-of-zf`: unused contrast Fact `[L2]`

Current text:

> `[L2] U is provable from ZF together with AC_omega (thm-countable-union-of-countable, def-countable-choice).`

No Refutation step cites `[L2]`; the proof uses `[A1]` and `[L1]` only. The proposition is accurate, but placing an unused contrast clause among proof Facts creates two source contracts with no using step and fails the permanent proof-contract rule.

Proposal: remove `[L2]` from Facts & Assumptions and retain the same accurate contrast in unnumbered explanatory prose or Remarks. Do not fabricate a proof-step use. Preserve the existing mathematical links where they remain reader orientation.

#### `fs-infinite-has-countable-subset-in-zf`: unused contrast Fact `[A2]`

Current text:

> `[A2] ZF together with AC_omega does prove S (def-countable-choice). This is a standard result, quoted here for contrast and not proved in this library either.`

No Refutation step cites `[A2]`; the item itself says it is present only for contrast. Its source contract therefore has no using step.

Proposal: remove `[A2]` from Facts & Assumptions and move the contrast to Remarks, keeping its not-proved-here qualification. Do not add `[A2]` to a proof step that does not depend on it.

### Strict proof-contract result on the unrepaired A2 text

The command `node tools/proof-contract.mjs research/audit/wave3-real-analysis.proof-contracts.json --strict` checks 35/35 contracts and reports 0 warnings plus exactly these three deliberate A2 errors:

```text
ERROR citation-uses [fs-countable-union-theorem-of-zf]: L2 -> thm-countable-union-of-countable needs every proof step that cites L2
ERROR citation-uses [fs-countable-union-theorem-of-zf]: L2 -> def-countable-choice needs every proof step that cites L2
ERROR citation-uses [fs-infinite-has-countable-subset-in-zf]: A2 -> def-countable-choice needs every proof step that cites A2
proof-contract: 3 error(s), 0 warning(s), 35/35 item(s) checked
```

The empty `uses` arrays are intentional audit evidence. The contract does not invent uses to make the gate green; if A3 approves the two class-(b) proposals, A4 can synchronize the item text and contract.

## Class (a) falsehood proposals

None. In particular, no mathematical falsehood was found. The stale corpus-existence sentence below is published-claim decay in a Remark, handled under the prose-triage class (d), not a fatal mathematical Statement defect.

## Class (d) debatable restatements and published-claim decay

### `rem-real-exponents-deferred`: later development now exists

The final route paragraph currently says:

> `No link is given here, because the page that carries that development does not exist yet, and a wikilink to it would be unresolvable.`

That corpus claim has decayed. The published page `library/real-analysis/the-logarithm-and-general-powers.md` exists and contains `def-real-power`, `thm-real-power-laws`, and `thm-rational-supremum-power-agrees-with-exp`, exactly the development the Remark predicts. The surrounding mathematical reading-order claim remains sound.

Proposal: replace only the stale sentence with durable orientation such as: “The later development is now published in `def-real-power` and `thm-real-power-laws`; `thm-rational-supremum-power-agrees-with-exp` proves that the rational-supremum construction agrees with the exponential construction.” Add legal orienting wikilinks under the forward-reference convention chosen at A3/A4; do not create a logical dependency on later material.

### `countability-and-uncountability` A-page summary

The body has nine prose paragraphs rather than exactly two and contains count/survey/position language including “One preliminary,” “A second preliminary,” “Almost every,” “The three false statements,” and “One older debt.” This violates the A-page summary contract even though the mathematics is accurate.

Proposed complete replacement, two paragraphs under 150 words each:

> Functions compare sets through injections, surjections, and bijections, while the von Neumann naturals and their additive order provide the finite measuring objects. Induction, recursion, and the well-ordering of the naturals support explicit enumerations. The construction of the rationals supplies quotient maps and positive-denominator representatives, and the least-upper-bound property of the complete ordered field supplies the nested-interval argument used for the reals.
>
> The page defines equinumerosity, finite and countable sets, and countable choice, then proves Cantor–Schröder–Bernstein and the basic closure properties of countability. An explicit pairing of the naturals yields countability of products and of the rationals; countable unions are separated out with their precise choice hypothesis. Cantor's power-set theorem and a choice-free nested-interval construction establish uncountability results, followed by counterexamples that mark the limits of the ZF and cardinality conclusions.

### `roots-and-rational-powers` A-page summary

The body has six prose paragraphs rather than exactly two and contains count/survey language including “in exactly one proof,” “the one proof on this page,” “nothing else on this page,” and “Two false statements.” The mathematics is accurate, but the summary violates the page contract.

Proposed complete replacement, two paragraphs under 150 words each:

> Recursion and induction provide finite sums, finite products, and integer powers in an ordered field. The least-upper-bound property of the complete ordered field, together with monotonicity and the factorisation of a difference of powers, supplies nonnegative roots. The rational construction and its ordered-field embedding provide the arithmetic and order of rational exponents, while the previously established square-root and absolute-value results support the finite inequalities.
>
> The page defines finite sums, integer powers, roots, and rational powers, proving their algebra, monotonicity, and boundary conventions. It develops AM–GM and its rationally weighted form, then derives Young and Hölder before proving Minkowski through Hölder; finite triangle and Cauchy–Schwarz inequalities complete the chain. The closing counterexamples explain why negative square roots and a representative-independent rational-power formula for negative bases are unavailable, and the final Remark identifies the later analytic machinery required for real exponents.

These page-body repairs are prose-triage proposals only. No page under `library/` has been changed.

## Triage notes not proposed for repair

- The `rem-continuum-hypothesis` links to Gödel's constructible universe and Cohen forcing are orienting expansions of its accurate independence claim; the four declared deferred dependencies already state the exact load-bearing propositions.
- Several items repeat a direct wikilink within one labelled Fact. The contract records one Fact/source entry with the complete set of using steps; these ten repeated occurrences do not represent missing source clauses.
- The other Remarks contain emphatic pedagogical wording, but no additional mathematical falsehood, false scope denial, or citation-direction defect survived the 30-second triage rule.

## Owner/orchestrator queue

- A3 should adjudicate the 44 class-(c) retags, the two class-(b) Fact removals/moves, the stale `rem-real-exponents-deferred` sentence, and the two A-page summary replacements.
- No deletion, id change, reading-order change, new theorem, or B companion is proposed.

## A1/A2 completion and coverage statement

A1 and A2 are complete on the manifest-of-record state. `wave3-real-analysis.provenance.jsonl` parses as 44 rows and matches all 44 manifest ids exactly. `wave3-real-analysis.proof-contracts.json` parses as 35 contracts for the exact 35 proof-bearing ids, with 272 derivations and all eight boundary cases per contract. No library page, item file, B companion, or shared git state has been changed.

Every one of the 44 in-scope items was read in full. Every one of the 272 numbered proof/refutation steps and every direct dependency citation in the two A-page contexts was read: all 398 labelled-Fact link occurrences, all 26 Given-clause link occurrences, all remaining Statement/Remark/page orienting links, and all six deferred catalogue targets named above. There is no unread proof step or dependency citation in the pair and no coverage exception.

## A4 applied record — 2026-08-04

The binding authority is research/audit/wave3-A3.md. I applied only its real-analysis approvals. In accordance with the orchestrator instruction for this concurrent stage, I took no touchlog snapshot; the existing whole-wave pre-A4 snapshot remains the baseline.

### Class (c): 44 provenance retags

Before A4, every row below had no provenance block and no legacy authorship line. After A4, each has the exact component labels shown and every URL from its corresponding wave3-real-analysis.provenance.jsonl row in sources.references, without removing any pre-existing reference. The source column incorporates that exact ledger row: its semantic-source evidence, working URLs, and item-specific rationale are the evidence record. Pure-retag items retained all existing verification evidence; the three materially repaired items follow the separate stamp record below.

| id | class | old text | new text | source |
|---|---|---|---|---|
| def-injection-surjection-bijection | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact def-injection-surjection-bijection provenance-ledger row (semantic-source) |
| def-equinumerous | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact def-equinumerous provenance-ledger row (semantic-source) |
| lem-nat-order-is-membership | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 1 ledger URL(s) reader-visible | exact lem-nat-order-is-membership provenance-ledger row (semantic-source) |
| lem-pigeonhole | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-pigeonhole provenance-ledger row (semantic-source) |
| def-countable | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact def-countable provenance-ledger row (semantic-source) |
| thm-schroder-bernstein | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-schroder-bernstein provenance-ledger row (semantic-source) |
| lem-subset-of-countable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-subset-of-countable provenance-ledger row (semantic-source) |
| lem-countable-iff-surjection-from-n | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-countable-iff-surjection-from-n provenance-ledger row (semantic-source) |
| lem-finite-subsets-listable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-finite-subsets-listable provenance-ledger row (semantic-source) |
| thm-n-cross-n-countable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-n-cross-n-countable provenance-ledger row (semantic-source) |
| thm-product-of-countable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-product-of-countable provenance-ledger row (semantic-source) |
| def-countable-choice | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact def-countable-choice provenance-ledger row (semantic-source) |
| thm-countable-union-of-countable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-countable-union-of-countable provenance-ledger row (semantic-source) |
| thm-rationals-countable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-rationals-countable provenance-ledger row (semantic-source) |
| thm-cantor-powerset | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-cantor-powerset provenance-ledger row (semantic-source) |
| thm-r-uncountable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-r-uncountable provenance-ledger row (semantic-source) |
| cor-interval-uncountable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact cor-interval-uncountable provenance-ledger row (semantic-source) |
| cor-irrationals-uncountable | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact cor-irrationals-uncountable provenance-ledger row (semantic-source) |
| rem-continuum-hypothesis | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact rem-continuum-hypothesis provenance-ledger row (semantic-source) |
| fs-countable-union-theorem-of-zf | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 1 ledger URL(s) reader-visible | exact fs-countable-union-theorem-of-zf provenance-ledger row (semantic-source) |
| fs-infinite-has-countable-subset-in-zf | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact fs-infinite-has-countable-subset-in-zf provenance-ledger row (semantic-source) |
| fs-uncountable-contains-interval | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact fs-uncountable-contains-interval provenance-ledger row (semantic-source) |
| def-finite-sum | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact def-finite-sum provenance-ledger row (semantic-source) |
| lem-finite-sum-laws | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-finite-sum-laws provenance-ledger row (semantic-source) |
| def-integer-power | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact def-integer-power provenance-ledger row (semantic-source) |
| lem-power-laws | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-power-laws provenance-ledger row (semantic-source) |
| lem-power-monotone | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-power-monotone provenance-ledger row (semantic-source) |
| lem-bernoulli-inequality | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-bernoulli-inequality provenance-ledger row (semantic-source) |
| lem-power-difference-factorisation | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-power-difference-factorisation provenance-ledger row (semantic-source) |
| thm-nth-roots-exist | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-nth-roots-exist provenance-ledger row (semantic-source) |
| def-rational-power | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact def-rational-power provenance-ledger row (semantic-source) |
| lem-rational-power-well-defined | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-rational-power-well-defined provenance-ledger row (semantic-source) |
| lem-rational-power-laws | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-rational-power-laws provenance-ledger row (semantic-source) |
| lem-rational-power-monotone | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-rational-power-monotone provenance-ledger row (semantic-source) |
| lem-triangle-inequality-finite | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact lem-triangle-inequality-finite provenance-ledger row (semantic-source) |
| thm-am-gm | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-am-gm provenance-ledger row (semantic-source) |
| thm-weighted-am-gm-rational | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-weighted-am-gm-rational provenance-ledger row (semantic-source) |
| thm-young-inequality | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 3 ledger URL(s) reader-visible | exact thm-young-inequality provenance-ledger row (semantic-source) |
| thm-cauchy-schwarz-finite | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact thm-cauchy-schwarz-finite provenance-ledger row (semantic-source) |
| thm-holder-finite | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 3 ledger URL(s) reader-visible | exact thm-holder-finite provenance-ledger row (semantic-source) |
| thm-minkowski-finite | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 3 ledger URL(s) reader-visible | exact thm-minkowski-finite provenance-ledger row (semantic-source) |
| rem-real-exponents-deferred | (c) | provenance absent; no authorship | statement: ai-altered; proof: not-applicable; all 2 ledger URL(s) reader-visible | exact rem-real-exponents-deferred provenance-ledger row (semantic-source) |
| fs-negative-has-square-root | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact fs-negative-has-square-root provenance-ledger row (semantic-source) |
| fs-rational-power-of-negative-base | (c) | provenance absent; no authorship | statement: ai-altered; proof: ai-altered; all 2 ledger URL(s) reader-visible | exact fs-rational-power-of-negative-base provenance-ledger row (semantic-source) |

### Class (b): unused contrast Facts moved to Remarks

#### fs-countable-union-theorem-of-zf

- Old text: [L2] U is provable from ZF together with AC_omega (thm-countable-union-of-countable, def-countable-choice).
- New text: [L2] is absent from Facts & Assumptions. The existing Remark now says that thm-countable-union-of-countable proves U from ZF together with AC_omega, linked to def-countable-choice, and is not weakened by this item; no Refutation step was given a fabricated use.
- Source/derivation: the cited theorem Statement assumes AC_omega and proves the displayed countable-union conclusion; def-countable-choice states that axiom. This is the A3-verified direct contrast, moved without changing the proof. The two obsolete L2 citation rows were removed from the proof contract.

#### fs-infinite-has-countable-subset-in-zf

- Old text: [A2] ZF together with AC_omega does prove S (def-countable-choice). This is a standard result, quoted here for contrast and not proved in this library either.
- New text: [A2] is absent from Facts & Assumptions. The Remark now begins “With AC_omega the statement is true”, links AC_omega to def-countable-choice, and immediately retains the qualification “This standard contrast is not proved in this library either.” No Refutation step was given a fabricated use.
- Source/derivation: the A3-approved standard AC_omega contrast, with its not-proved-here qualification retained; the following sentences spell out the countable family of nonempty injection sets and simultaneous selection. The obsolete A2 citation row was removed from the proof contract.

For both class-(b) repairs, the stale verification.judge block was deleted. Their existing delegated verification.verified blocks were left intact; A4 wrote no certification.

### Class (d): stale corpus claim repaired

#### rem-real-exponents-deferred

- Old text: “No link is given here, because the page that carries that development does not exist yet, and a wikilink to it would be unresolvable.”
- New text: “That later development is now published: def-real-power defines general positive-base powers, thm-real-power-laws proves their laws, and thm-rational-supremum-power-agrees-with-exp identifies the rational-supremum construction with the exponential construction,” with each id wikilinked.
- Source/derivation: the published file library/real-analysis/the-logarithm-and-general-powers.md lists all three named items, whose on-disk Definition/Statements give exactly the orientation recorded here. They were added only to forward_refs; none was added to deps, so no logical dependence on later material was created.
- Stamp transition: the stale verification.judge block and obsolete audited: 2026-07-27 stamp were deleted. No replacement certification was written at A4.

### Declined proposals left unapplied

The A-page bodies library/real-analysis/countability-and-uncountability.md and library/real-analysis/roots-and-rational-powers.md were not changed. A3 explicitly declined both wholesale summary rewrites under the recorded-not-chased prose rule; the drafts remain above for the A10 owner queue.

### A4 local checks

- reflow.mts: all 35 changed proof-bearing items reported unchanged.
- precheck.mts: 35 checked, 0 failing.
- proof-contract.mjs --strict: 0 errors, 0 warnings, 35/35 checked.
- content-policy.mjs --audit: 44 scoped items, 0 errors, 0 warnings.
- extcheck.mjs: exit 0; the moved not-proved-here citations remain correctly marked.
- fwdcheck.mjs: exit 0; all three new orienting links are declared, later, closed, and non-load-bearing.
