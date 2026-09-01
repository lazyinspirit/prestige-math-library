# Final-adjudicator evidence — `ex-bertrand-finite-range-verification`

Disposition: `accepted-after-review`.

## Material reviewed

I independently read the current example, `thm-bertrands-postulate`, the
number-theory A/B page pair, the batch-6 manifest, coverage notes and proof
contract, the run-wide contract and risk classification, both frozen judge
rejections and adjudications, both defect-ledger rows, and Alpha's two repairs.
The current dependency on `thm-bertrands-postulate` is consistent with the
page and batch contracts.

## Mathematical basis

The first Alpha repair replaces an unsupported claim about 466 individual
checks with a finite covering certificate. For an odd prime `p`, every integer
`n` in the interval

`(p/2,p)`, equivalently `(p+1)/2 \le n \le p-1`, satisfies `n<p<2n`.

I independently trial-divided every listed value through its square root; all
of `3,5,7,13,23,43,83,163,317,631` are prime. Their integer witness ranges are
respectively

`2--2, 3--4, 4--6, 7--12, 12--22, 22--42, 42--82, 82--162,
159--316, 316--630`.

I also ran an exhaustive integer check over every `n` from 2 through 467. For
each such `n`, at least one listed prime satisfies `n<p<2n`; the missed-value
list was empty. In particular, the first two ranges and the `7`/`13` ranges
meet consecutively rather than overlap. Alpha's second repair now says exactly
that consecutive ranges "overlap or meet consecutively," so it removes the
false overstatement without weakening the coverage argument. The union in
fact reaches 630, more than the required endpoint 467.

The proof contract reproduces the current table and repaired wording, and its
endpoint records correctly identify step 1.1 as covering both 2 and 467. The
risk tool classifies the example as `ORDINARY 1`; no separate high-risk review
row is required.

## Source verification

Source status: `familiar`. No external verification was needed. The terminal
question is a finite elementary certificate: primality is settled by trial
division and coverage by exact integer inequalities, both independently
recomputed above. The example makes no unfamiliar analytic-number-theory
inference and imports only the residual cutoff from its displayed dependency.

## Focused checks

- Exhaustive primality/range computation: all ten entries prime; no missed
  integer in `2..467`.
- `precheck` on the example and its dependency: 2 checked, 0 failing.
- strict batch-6 proof contract: 21/21 checked, 0 errors or warnings.
- batch-6 content policy: 25 scoped items, 0 errors or warnings.
- renderer math/frontmatter check on the example and dependency: clean.
- run-wide risk report: `ORDINARY 1` for this item; 0 report errors.
