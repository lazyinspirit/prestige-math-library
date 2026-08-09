# Audit-Beta findings — wave 8, real-analysis-absolute-convergence

## A4 completion status and scope

A1, A2, and the owner-approved A4 repairs are complete for the manifest pair
`absolute-convergence-and-rearrangement` /
`absolute-convergence-and-rearrangement-examples`. The manifest checksum read
during the audit was
`65a7edb1021235944ec20ccbc4a017efbddac6fcaf2aa42a409d4c309af6a165`.
The scope is 40 items: 20 on the A page and 20 on the B page. Thirty-four are
proof-bearing; the four definitions and two Remarks are not.

I read both page files, all 40 scoped items, all 324 numbered proof/refutation/
counterexample steps, every Remark and page-summary claim, and every cited
clause needed from the 54 distinct external dependency targets. The strict
worksheet contains 433 exact Fact-to-source citation records and all 272
standard boundary dispositions. No item, page, shared artifact, RESUME file,
or other batch file was edited during A1/A2. At A4, exactly three items received
material repairs, the other 37 received provenance/source retags only, and one
approved sentence was narrowed on the A page. The namespaced ledger, findings,
and contract worksheet were updated; no shared receipt, RESUME file, touch
ledger, judge ledger, or other batch was changed.

### Durable context checkpoint

At the approximately 60% context checkpoint, both pages and all 40 scoped
items had been read, including every numbered proof step; 30 of the 54 external
dependency targets had been checked, and the remaining work was dependency
closure, literature classification, and durable contract writing. The two
leading issues at that checkpoint were the strict-inequality claim in the
infinite-product Remark and the A-page summary shape. The remaining 24
dependency targets and all literature determinations were subsequently closed.

## A1 provenance determination

The A3-corrected provenance ledger has exactly one row per manifest item.
Statement counts are 11 `literature-derived` / `exact-source`, 26 `ai-altered` /
`semantic-source`, and three positively identified `ai-generated` / `trivial`
bespoke witnesses. There are no `established-knowledge` fallbacks, no
URL-free sourced labels, and no unresolved invented-versus-established cases.
Proofs are classified independently: 19 `ai-altered`, 15 `ai-generated`, and
six `not-applicable`. All 40 `origin: session` fields were preserved, no
`authorship` field exists, and all rows remain `alpha_concurred: false` pending
the independent A6 reading.

The three `ai-generated` statements are the directly checkable bespoke
witnesses `ex-dirichlet-test-with-period-three-signs`, `ex-abel-test-applied`,
and `cex-abel-test-needs-monotonicity`. The row-level convention deltas,
proof determinations, rationales, and URLs are in the JSONL ledger.

The final ledger uses 14 distinct literature URLs searched/opened during A1/A3,
including:

- John K. Hunter, *An Introduction to Real Analysis*, Chapter 4:
  <https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf>
- N. Donaldson, *Math 140A Notes*:
  <https://www.math.uci.edu/~ndonalds/math140a/notes.pdf>
- Princeton notes treating absolute double series and iterated sums:
  <https://web.math.princeton.edu/~gunning/bk.pdf>
- Thomson, Bruckner, and Bruckner, *Elementary Real Analysis*:
  <https://ejwingler.people.ysu.edu/TBB-Real.pdf>
- D. Dikranjan, *Analysis 478*, Chapter 6:
  <https://people.math.binghamton.edu/dikran/478/Ch6.pdf>
- UT Austin, *Real Analysis*, series and base-$b$ expansions:
  <https://web.ma.utexas.edu/ibl1/courses/resources/m365.pdf>
- Colorado State's exact Cauchy-product counterexample:
  <https://www.math.colostate.edu/~adams/teaching/math171spr2010/Hw4Sol.pdf>

## A2 findings and A4 dispositions

### 1. `thm-infinite-product-criterion`: false claim that $p_k<1$ is essential

Class: **(a) unambiguous falsehood**, confined to the first two sentences of a
Remark; the theorem and its proof remain correct as stated.

A2 text:

> **The hypothesis $p_k < 1$ in claim 3 is not cosmetic.** A single factor
> $1-p_k=0$ would make every later partial product $0$; the definition of
> convergence then fails at every tail containing that index, though a tail
> starting after it may still converge. Requiring $p_k<1$ throughout keeps
> every factor nonzero and makes the statement an honest equivalence.

Under `def-infinite-product`, convergence is explicitly tail-based and permits
finitely many zero factors. Claim 3 remains an honest equivalence with
$0\le p_k\le1$: if only finitely many $p_k$ equal $1$, start after the last;
if infinitely many equal $1$, the series diverges and every tail contains a
zero factor, so the product diverges. The strict hypothesis is convenient for
the current proof, not mathematically essential.

A3-approved replacement, applied at A4:

> **The strict inequality $p_k<1$ keeps this proof uniform, but the tail-based
> definition allows a slightly stronger statement.** Claim 3 remains true for
> $0\le p_k\le1$. If only finitely many $p_k$ equal $1$, start the product after
> the last zero factor; if infinitely many do, then $\sum p_k$ diverges and no
> tail has all factors nonzero. The stated strict form avoids this
> finite/infinite split.

### 2. `cex-cauchy-product-of-convergent-series-diverges`: unused Facts prevent strict contract closure

Class: **(b) citation-precision repair**. This is an inventory/contract defect,
not a mathematical gap.

Facts L2 and L5 link, respectively, to `thm-of-square-roots` plus `thm-am-gm`,
and to `lem-of-abs-value`, but no numbered proof step cites L2 or L5. The
contract checker requires every Fact link to have at least one genuine numbered
step use and correctly rejects fabricated `uses` entries. L2 is referenced only
from a Remark; L5 is unused throughout the item.

A3-approved repair, applied at A4:

1. Delete Fact L5.
2. Delete Fact L2 and replace the Remark's phrase "the AM-GM bound of [L2]"
   with "the AM-GM bound ([[thm-am-gm]], with square roots as in
   [[thm-of-square-roots]])".
3. Remove the now-unused `lem-of-abs-value` dependency and regenerate this
   item's contract entry from the final text. No L2/L5 contract rows existed,
   so none were deleted and no `uses` entry was fabricated.

The regenerated worksheet now passes strict with **34/34 contracts checked,
zero errors, and zero warnings**. It still contains all 324 proof steps, 433
Fact-to-source citation records, and 272 boundary dispositions.

### 3. `rem-sums-proved-to-exist-but-not-evaluated`: universal proof-method claim

Class: **(d) debatable restatement**.

The A2 text said the signed infinite-product criterion is true and that
"every known proof of it expands $\log(1+x)$". The criterion is correct under
the standing hypothesis that $\sum p_k$ converges, because then $p_k\to0$ and
the factors are eventually positive and nonzero. The universal claim about all
known proofs is neither needed nor supportable from the cited source. The A-page
summary similarly says the refinement "genuinely needs the logarithm".

A3-approved replacements, applied at A4:

- In the Remark: "A standard proof expands $\log(1+x)$; that route belongs
  with the logarithm, later in the reading order."
- In the A-page summary: "the
  refinement usually proved with logarithms is deferred."

These preserve the reading-order point without asserting necessity or an
exhaustive survey of proofs.

### 4. Provenance retags and references

Class: **(c) provenance retag**.

All 40 statement/proof classifications and their final literature references
were applied to item frontmatters after correcting the ledger. The 14 mandatory
A3 source/classification overrides were incorporated, including the TBB
summation/test sources, Berkeley's strong Riemann form, Bernstein's Mertens
source, YSU/Binghamton infinite-product sources, the actual Lévy and Steinitz
paper records, Colorado's Cauchy-product witness, and the row-35 semantic-source
classification. No one-axis authorship metadata existed to remove.

No item deletion, id change, reading-order change, or new dependency was made;
the one genuinely unused dependency identified above was removed.

## Nonfatal observations under the standing triage rule

- The A-page body has 11 prose paragraphs and 1,023 whitespace-delimited words;
  one paragraph has 165 words. This violates the canonical two-paragraph,
  under-150-words-per-paragraph summary contract. It is a structural prose
  defect, not an embedded mathematical falsehood. Consistent with the standing
  triage rule against wholesale summary rewrites, it is recorded for the owner
  queue rather than proposed as an A4 rewrite.
- `cor-cauchy-product-absolute` step 5.1 passes from termwise comparison to an
  inequality between the sums without explicitly naming finite-sum monotonicity
  and limit preservation. The argument closes immediately from L5/L6 and the
  preceding partial-sum bounds; it is under the 30-second threshold.
- `fs-infinite-product-converges-iff-terms-tend-to-one` says that factors tending
  to $1$ is necessary for product convergence without spelling out the ratio
  argument. From an admissible tail $T_n\to\ell\ne0$,
  $a_{N+n}=T_{n+1}/T_n\to1$ by the algebra of limits. This is correct and under
  the 30-second threshold.
- The long prescribed-liminf/limsup construction in
  `thm-riemann-series-theorem`, the transpose argument in
  `thm-double-series-fubini`, and the non-terminal uniqueness argument in
  `thm-decimal-expansions` were checked step by step, including extended-real,
  choice, endpoint, zero, and tail cases; no further repair was found.

## A4 validation and handoff

- Material item ids: `thm-infinite-product-criterion`,
  `cex-cauchy-product-of-convergent-series-diverges`, and
  `rem-sums-proved-to-exist-but-not-evaluated`. Their stale `verification`
  fields were removed for A6; exactly 37 other scoped items are pure retags and
  retain their verification records.
- Reflow was unchanged for both materially edited proof-bearing items; precheck
  passed 2/2. Strict proof-contract validation passed 34/34 with 0 errors and 0
  warnings. Finite smoke passed with 0 errors; risk routing covered all 34.
- Audit content policy reconciled all 40 tags against 40 unique ledger rows with
  0 errors and the three expected legacy `generation.role` warnings for the
  positively identified AI-generated witnesses. Audit-manifest, forward-reference,
  scoped citation, render, and prose checks exited cleanly. Depcheck under the
  A4 `--pending-audit-ok` mode had 0 errors; the repo-wide warning inventory
  includes the three intentionally unaudited items from this batch plus
  unrelated concurrent/pre-existing warnings.
- All 40 origins remain `session`; there are 0 authorship fields and 0 stale
  University of Washington infinite-product URLs. `git diff --check` passed.
- No A4 repair escalation remains. The existing long A-page summary-shape
  observation stays in the owner prose queue; A6 independent verification is
  required before the three material items can regain audit stamps.

Files written by this Beta at A4 are the 40 scoped item files, the approved
sentence in `library/real-analysis/absolute-convergence-and-rearrangement.md`,
and this batch's namespaced provenance ledger, findings report, and proof-contract
worksheet. No other file class was written.
