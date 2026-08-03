# Wave 1 topology Audit-Beta findings

## Scope and result

The scope of record is the 76 items in
`research/audit/wave1-topology.pages.json`: 24 items on
`completeness-and-uniform-continuity`, 12 on its examples page, 26 on
`topological-spaces-and-continuity`, and 14 on its examples page. All 76
Statements or Constructions, all supplied proofs and refutations, all Remarks,
and both A-page summaries were read from disk. No out-of-manifest item was
re-audited; dependency targets were read only to test the citations made by
in-scope items.

The per-item determinations are the 76 rows of
`wave1-topology.provenance.jsonl`. Their census is:

| evidence | statement classification | items |
|---|---|---:|
| `semantic-source` | `ai-altered` | 73 |
| `trivial` | `ai-generated` | 1 |
| `none` | `ai-generated` | 2 |

The 57 supplied proofs or refutations are classified `ai-generated`: they are
local arguments from the declared clauses, not recoveries of a source proof.
The other 19 items have no proof component and are `not-applicable`. All 33
distinct recorded URLs were opened on 2026-08-03 and returned HTTP 200.

The three positive `ai-generated` determinations are:

- `cex-cantor-intersection-needs-vanishing-diameters` (`trivial`): the exact
  metric `d(m,n)=1+1/(m+n)` off the diagonal and its nested tails are a bespoke
  witness. Symmetry, positivity, separation, the triangle inequality, closedness,
  boundedness, empty intersection, and diameters bounded away from zero are
  checked directly in the item.
- `rem-complete-metrizability-is-the-topological-shadow` (`none`): this is a
  bespoke page-local bridge and forward pointer rather than an independently
  recognizable literature proposition. The mathematical content it mentions
  is explicitly routed to its existing dependencies.
- `rem-topology-conventions` (`none`): this is a bespoke ledger of six local
  editorial convention choices, not a literature theorem or definition.

No item required the provisional `established-knowledge` route, and no
classification remains undecided for Alpha.

## Proof contracts and citation audit

`wave1-topology.proof-contracts.json` contains 57 contracts. They cover all 499
numbered proof/refutation steps exactly once, 353 labelled Facts & Assumptions,
726 fact-to-source records with exact on-disk source clauses and use maps, and
all eight boundary cases for every proof-bearing item.

The strict proof-contract checker reports five empty-use records, all caused by
three labels present in the published Facts & Assumptions but absent from every
numbered step tag:

- `cex-strict-contraction-without-a-fixed-point` [L5], sourcing
  `def-lipschitz-holder-contraction`; its content is semantically used in step
  3.1, but the step omits the label.
- `cex-sequential-closure-strictly-inside-closure` [L5], sourcing
  `lem-subset-of-countable`; the fact is unused.
- `cex-non-metrizable-topology` [L2], whose three dependency links support only
  a Remark's alternate proof and are unused by the numbered proof.

The contracts retain `uses: []` rather than inventing a use. These are
nonfatal contract-hygiene quirks under the 30-second rule and are not repair
proposals. Apart from those five expected empty-use records, the strict checker
found no missing contract, bad source quote, unknown step, duplicate input-map
coverage, or omitted boundary case.

Every dependency target cited by an in-scope item exists and was checked against
the mathematical claim made of it. Same-category targets were checked against
their on-disk statements and audited provenance where present; cross-category
targets were checked against their on-disk mathematical text without treating
an absent provenance tag on the target as an item defect.

## A3 repair proposals

### Citation precision: 1

`lem-metric-cauchy-with-convergent-subsequence`, step 4.1, concludes convergence
of the whole sequence with `[step 3.1, A2]`. Step 3.1 supplies the required
eventual epsilon inequality for the whole sequence, but [A2] states only the
convergence criterion as specialized to the subsequence. It therefore does not
license the final definitional inference in the form cited. The theorem and its
argument are true; this is a load-bearing citation-precision defect, not a
mathematical falsehood.

Current [A2]:

> [A2] Convergence of the subsequence: for every real $\eta > 0$ there is $K_2$ with $d(x_{n_j}, p) < \eta$ for all $j \ge K_2$ ([[def-metric-convergence]], [[lem-rat-embeds-dense]]).

Proposed [A2]:

> [A2] Metric convergence: a sequence $(y_j)$ converges to $p$ if and only if for every real $\eta>0$ there is $K$ such that $d(y_j,p)<\eta$ for all $j\ge K$. Applied to $y_j=x_{n_j}$, the subsequence hypothesis gives $K_2$ with $d(x_{n_j},p)<\eta$ for all $j\ge K_2$ ([[def-metric-convergence]], [[lem-rat-embeds-dense]]).

This is the smallest fact-level repair that licenses both the use of [A2] in
step 1.1 and the use of its general criterion in step 4.1. No dependency change
is required.

### Provenance retag: 76

Apply the per-item `provenance.statement` and `provenance.proof` values from the
JSONL ledger, add the cited working reference where applicable, and remove the
legacy one-axis `authorship` field in the same edit. These are pure retro-tags
unless combined with the citation repair above. The 73 sourced statements are
semantic recoveries rather than exact-source recoveries because their library
forms alter notation, conventions, packaging, or adjacent clauses. The three
positive bespoke determinations are listed above.

### Debatable restatement: 2

Both A-page bodies violate the binding two-paragraph summary contract:

- `library/topology/completeness-and-uniform-continuity.md` has nine prose
  paragraphs, including page-position and future-page assertions.
- `library/topology/topological-spaces-and-continuity.md` has eight prose
  paragraphs, including page-position and companion-page assertions.

Each body should be replaced by exactly two nonempty paragraphs under 150 words:
the first limited to mathematical prerequisites actually declared by the page,
the second limited to the definitions and results developed there and their
logical progression. This is page-prose decay, not a mathematical defect in an
item. Because the rewrite requires compression and selection rather than a
single mechanical deletion, it is class (d) and awaits A3 adjudication.

### Unambiguous falsehood: 0

No false Statement, proof conclusion, example computation, counterexample,
false-statement refutation, or mathematical Remark was found.

## Nonfatal observations

- In `thm-banach-fixed-point`, step 3.1 uses the finite geometric estimate at
  the endpoint $m=n$. The displayed factorization is stated for a positive
  number of summands; the empty-sum endpoint is immediate and takes under 30
  seconds to close.
- In `ex-order-topology`, step 1.1 uses that a finite nonempty subset of a total
  order has a least and greatest element. This is immediate by finite induction
  and takes under 30 seconds to close.
- The three unused Facts & Assumptions labels recorded in the contract section
  are presentation hygiene only. They do not create an invalid inference.

No A4 edit, verification stamp, judge run, commit, or push was performed.

## Alpha handoff

Evidence-class counts are 73 `semantic-source`, 1 `trivial`, and 2 `none`.
There are 57 proof contracts. Proposed defects are 0 class (a) falsehoods, 1
class (b) citation-precision repair, 76 class (c) provenance retags, and 2 class
(d) page-summary restatements. Escalations to Alpha are 0.

Coverage is complete without exception: every mathematical-content item, every
numbered proof/refutation step, every dependency citation, every Remark, and
both A-page summaries in the four manifest pages were read and checked.

## Continuity checkpoint

Substage: A1/A2 complete. Owned artifacts:
`research/audit/wave1-topology.provenance.jsonl`,
`research/audit/wave1-topology.findings.md`, and
`research/audit/wave1-topology.proof-contracts.json`. Completed checks: 76
provenance determinations, 33 URL status checks, 57 proof contracts, 499-step
coverage, 726 fact-to-source checks, all Remarks, and both A-page summaries.
Open mathematical constraints: none; the sole material proposal is the [A2]
citation repair above. Exact next action: validate the three artifacts and
report the counts to the orchestrator without changing repository content.

## A4 apply record (wave 1b)

Applied the A3 order to 75 of 76 scoped items. Existing reader-visible sources
already covered every ledger URL. `cex-cantor-intersection-needs-vanishing-diameters`
now carries `generation.role: counterexample`; the approved generated remark
needs no role under the schema. `rem-topology-conventions` was deliberately
left untouched for Alpha/A6 containment adjudication. In
`lem-metric-cauchy-with-convergent-subsequence`, `[A2]` now states the general
metric convergence criterion and then instantiates it at the subsequence; its
proof contract was unchanged because the source and uses did not change. The
two approved A-page summaries were rewritten to exactly two short paragraphs.
The material lemma had stale judge and owner verification stamps removed. No
`verification.verified` or `verification.audited` stamp was written. Alpha/A6
independent verification is still required.

The refreshed corpus graph contradicts A3's cone-0 premise for two of the
approved generated statements: `cex-cantor-intersection-needs-vanishing-diameters`
has the direct-citation consumer `thm-cantor-intersection-metric`, and
`rem-complete-metrizability-is-the-topological-shadow` has the direct-citation
consumer `fs-completeness-is-a-topological-property`. Each cone is 1, so
`genrisk --receipt` correctly leaves both dispositions pending for Alpha/A6.
