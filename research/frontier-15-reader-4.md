# frontier-15 — independent reader 4 (step 6a)

## Scope and method

Assigned batch: `research/frontier-15-batch-4.pages.json`.

Pages under review:

- `sigma-algebras-and-borel-sets` (A page)
- `sigma-algebras-and-borel-sets-examples` (B page)

The batch contains 60 mathematical-content items. The read checks every title,
Statement/Definition/Example/Statement-refuted section, every numbered proof
step, every direct `[F#]`/`[A#]`/`[L#]` citation against its target on disk,
the eight boundary dispositions in the batch proof contract, component
provenance, and both page bodies. Findings are assigned stable `R4-*` ids and
are not renumbered.

## Findings

### Fatal

#### R4-1 — `thm-transfinite-description-of-generated-sigma-algebras`, Statement and Steps 2.1–2.2 — empty generator gives the wrong result

The recursion starts with `\mathcal E_0:=\mathcal E` and at a successor takes
only complements of existing members and unions of sequences already in the
previous stage.  If `\mathcal E=\varnothing`, there is no sequence
`\mathbb N\to\mathcal E_0`; transfinite induction therefore gives
`\mathcal E_\alpha=\varnothing` at every stage.  The displayed union is empty,
whereas `\sigma_X(\varnothing)` is a sigma algebra and contains at least
`\varnothing` and `X` (one set when `X=\varnothing`).  The contract's checked
empty-family row consequently asserted a false boundary disposition.  Severity:
**fatal** (false Statement and missing base case).

#### R4-2 — `thm-transfinite-description-of-generated-sigma-algebras`, `[L4]` and Steps 2.1, 3.1 — cited definition does not prove existence or minimality

`[L4]` attributes the existence and leastness of the generated sigma algebra to
`def-generated-sigma-algebra`.  That item merely defines the notation and
explicitly points to `thm-generated-sigma-algebra-exists-and-is-minimal` for
existence and minimality.  The cited clause therefore does not license Steps 2.1
and 3.1.  Severity: **fatal** (inaccurate citation and unlicensed inference).

#### R4-3 — `thm-cardinality-bound-for-generated-sigma-algebras`, `[L2]` — exponent monotonicity is restated without its hypothesis

`[L2]` says cardinal exponentiation is monotone in both arguments.  Its source,
`lem-cardinal-arithmetic-basic-laws`, states monotonicity in the exponent only
for nonzero base.  The omitted hypothesis is real: `0^0=1` while `0^1=0`.
Severity: **fatal** (inflated restatement of a cited lemma).

#### R4-4 — `thm-cardinality-of-the-borel-sigma-algebra-on-rn`, `[L7]` and Step 1.2 — the cited AC definition does not establish cardinal availability

`[L7]` says `def-axiom-of-choice` makes every cardinal and cardinal exponent
available.  The cited item only defines choice functions and the product form of
AC; it contains neither the well-ordering theorem nor the definition of cardinal
exponentiation.  Step 1.2 therefore uses a claim absent from its cited input.
Severity: **fatal** (inaccurate citation and unlicensed inference).

#### R4-6 — `rem-the-borel-hierarchy-never-stabilizes`, Statement and external-source record — the ordinal domain includes an undefined level

The Statement and `external_dependency.exact_statement` say “for every
countable ordinal `\alpha<\omega_1`,” which includes `\alpha=0`.  Marker's
Definition 2.4 starts the Borel hierarchy at `\Sigma^0_1` and gives the recursive
clause for `\alpha>1`; Corollary 2.38 is stated within that convention.  Thus the
local formulation extends the result to an undefined `\Sigma^0_0`/`\Pi^0_0`
level.  `fs-the-borel-hierarchy-closes-after-two-steps` repeats the overbroad
restatement in `[L1]`.  Severity: **fatal** (missing domain hypothesis and
inaccurate external restatement).  Source checked directly: [Marker,
Definition 2.4 and Corollary
2.38](https://homepages.math.uic.edu/~marker/math512/dst.pdf).

### Polish

#### R4-5 — `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, `[L3]` and Step 2.1 — the citation is unnecessarily indirect

`[L3]` restates rational density as the between-points property but cites
`lem-q-and-irrationals-dense-r`, whose Statement formulates density through
closure.  After opening the full dependency, that formulation does license the
between-points consequence by the standard closure characterization, so this is
not fatal.  `lem-rat-embeds-dense` states the exact clause directly and is the
cleaner input.  Severity: **polish** under the 30-second rule.

#### R4-7 — `lem-open-subsets-of-r-are-countable-unions-of-rational-intervals`, Step 1.1 — subset-countability input is unstated

The step infers that a subfamily of a countable basis is at most countable from
the basis theorem alone.  `lem-subset-of-countable` supplies the omitted
one-line input.  A competent reader can close the gap immediately, so this is
**polish**, not fatal under the 30-second rule.

#### R4-8 — `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, Step 2.1 — rational index-set countability is unstated

The step calls the rational-indexed unions countable without citing the
countability of `\mathbb Q`.  `thm-rationals-countable` supplies it.  Severity:
**polish** under the 30-second rule.

#### R4-9 — `thm-cardinality-of-the-borel-sigma-algebra-on-rn`, Step 1.1 — the cited input does not by itself count finite endpoint tuples

`[L1]` supplies the rational-box basis but not the countability of finite products
of a countable set.  `thm-hessenberg`, now recorded separately as `[L8]`,
supplies the needed cardinal arithmetic; the repaired step also gives an
explicit injection proving that the box family is infinite.  Severity:
**polish** under the 30-second rule.

#### R4-10 — `thm-sigma-algebra-generated-by-a-countable-partition`, Step 2.1 — a definition is used as a subset theorem

The step says every `S\subseteq I` is at most countable “by `[L2]`,” but `[L2]`
only defines “at most countable.”  `lem-subset-of-countable` is the exact missing
input.  Severity: **polish** under the 30-second rule.

#### R4-11 — `thm-infinite-sigma-algebra-has-continuum-many-members`, Step 1.1 — countability of a union of finite ranges is unstated

The construction takes the union of countably many finite ranges and calls it
countable without an input licensing countable unions.  Under the stated
countable-choice hypothesis, `thm-countable-union-of-countable` supplies the
fact.  Severity: **polish** under the 30-second rule.

#### R4-12 — `thm-cardinality-bound-for-generated-sigma-algebras`, Steps 1.2 and 2.1 — choice and countable-limit inputs are omitted from step tags

The proof chooses stagewise injections and, at a limit stage below `\omega_1`,
uses that the predecessor set is countable.  The item already has facts `[L5]`
and `[L6]` that license these moves, but the steps and contract derivations omit
them.  Severity: **polish** under the 30-second rule.

#### R4-13 — batch proof contract, boundary evidence — malformed TeX and control characters

Two checked empty-case evidence strings contain a vertical-tab control character
where `\varnothing` was intended; several other checked rows dropped the
backslash from TeX commands such as `\kappa`, `\ge`, `\le`, `\mathrm`, and
`\varnothing`.  This does not invalidate the associated proofs, but makes their
recorded evidence inaccurate or unreadable.  Severity: **polish**.

## Changes made

All licensed defects above were repaired.  No item was added or deleted, so the
batch manifest's item lists required no change.  `research/plan-spec.json`, both
page files, other batches, and published items were not edited.

- `thm-transfinite-description-of-generated-sigma-algebras`: changed the seed
  to `\mathcal E\cup\{\varnothing\}`, repaired the base and empty-generator
  arguments, added the actual existence/minimality theorem as a dependency, and
  redirected `[L4]` to it.
- `thm-cardinality-bound-for-generated-sigma-algebras`: restored the nonzero-base
  hypothesis in `[L2]`, made the base injection explicit, and recorded the
  countable-limit and stagewise-choice inputs in Steps 1.2 and 2.1.
- `thm-cardinality-of-the-borel-sigma-algebra-on-rn`: replaced the unsupported
  AC citation with the well-ordering theorem and cardinal-arithmetic definition,
  separated the continuum and product-cardinality facts, and wrote the explicit
  rational-box injection proving infinitude.
- `thm-seven-generators-of-the-borel-sigma-algebra-on-r`: redirected rational
  density to the dependency stating the exact between-points clause and added
  the countability of `\mathbb Q` to Step 2.1.
- `lem-open-subsets-of-r-are-countable-unions-of-rational-intervals` and
  `thm-sigma-algebra-generated-by-a-countable-partition`: added
  `lem-subset-of-countable` and used it at the formerly unsupported subset
  inferences.
- `thm-infinite-sigma-algebra-has-continuum-many-members`: added the
  countable-union theorem and used it, with the existing countability
  dichotomy, to construct the required injective sequence.
- `rem-the-borel-hierarchy-never-stabilizes` and
  `fs-the-borel-hierarchy-closes-after-two-steps`: restricted the hierarchy
  statement and its consumer to `1\le\alpha<\omega_1`.
- `research/frontier-15-batch-4.proof-contracts.json`: synchronized every
  changed citation, fact use, and derivation; replaced the false
  empty-generator disposition with the repaired computation; wrote concrete
  boundary evidence for the affected zero, one, degenerate, and choice cases;
  and repaired all malformed TeX/control characters identified in R4-13.

None of the changed draft items contained `verification.judge`, so there was no
stale judge record to delete.  The separate statement/proof provenance fields
remain accurate after the repairs.  No scoped item depends on an
`ai-generated` Statement or Construction.

## Coverage and per-page verdicts

Every title and Statement was checked separately against its proof or recorded
external source.  Every numbered proof/refutation step, every direct fact
citation, all 376 contract boundary rows, all component-provenance records, and
both page bodies were read.  The count below is of files actually opened, not a
manifest estimate:

- scoped mathematical-content items: **60/60** (`44` on the A page and `16` on
  the B page);
- distinct cited dependency/reference items opened from disk: **34**;
- distinct mathematical item files opened in total: **94**.

Per-page verdicts:

- `sigma-algebras-and-borel-sets` (A): **clean after repair**, 44/44 items read.
  The seven changed items resolve R4-1–R4-5 and R4-7–R4-13.  Its two-paragraph
  summary satisfies the page-body contract.
- `sigma-algebras-and-borel-sets-examples` (B): **clean after repair**, 16/16
  items read.  The two hierarchy items resolve R4-6.  The B page has no authored
  body, as required.

Final finding count: **5 fatal** (`R4-1`, `R4-2`, `R4-3`, `R4-4`, `R4-6`) and
**8 polish** (`R4-5`, `R4-7`–`R4-13`), all resolved.  No unresolved concern or
published-dependency falsehood remains from this batch read.

Validation after the final edits:

- `tools/reflow.mts`: all nine changed items already conformed;
- `tools/precheck.mts`: 8 proof-bearing items checked, 0 failing (the external
  remark is correctly `n/a`);
- strict proof contract: 47/47 items, 0 errors, 0 warnings;
- boundary audit: 376 rows, no template cluster or contradicted disposition;
- citation fidelity: 128 citations, no missing quote or widening candidate;
- coverage checklist: 65 harvested results, 0 errors, 0 warnings;
- content policy: 60 scoped items, 0 errors, 0 warnings;
- prose and render checks: 62 files, 0 errors, 0 warnings; all math and
  frontmatter parsed successfully;
- batch JSON parsing: passed.
