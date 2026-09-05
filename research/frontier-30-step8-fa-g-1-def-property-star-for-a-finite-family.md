# Final-adjudicator evidence: `def-property-star-for-a-finite-family`

## Disposition

`repaired`

The Alpha's two mathematical repairs are correct.  The current definition
explicitly defines
`overline(F) = {overline(H) : H in F}`, declares the graph-complement
definition as a direct dependency, and cites it beside the family-free
interface.  Its second outcome is also well typed: the actual blockade length
is integral, while a real lower-bound parameter `k` means actual length at
least `ceil(k)`.  Thus both confirmed fatal defects are closed without changing
the mathematical scope of property `(*)`.

## Independent review

I inspected the current item and all six direct dependencies; the
`property-star-and-comb-outcomes` A page and B companion; the batch-14 page
manifest, coverage record, and notes; the Step-6 reader, refuter, scope, and
risk routing; the Step-7 group context; both frozen judge rejections; both
exact Alpha adjudications and defect records; the initial published-dependency
repair; and Alpha's round-2 recovery account.  This definition has no local
proof contract or proof-specific risk review, as appropriate for a definition
with `verification.precheck: n/a`; it was nevertheless in the Step-6
reader-untouched/refuter scope.

The statement is source-faithful.  In particular, the hypotheses retain a
finite graph family, an `overline(F)`-free ambient graph, an `(ell,w)`-comb with
`ell,w >= 4`, and a vertex outside the comb that is complete to every block and
anticomplete to every tooth.  The three conclusions reproduce the source's
homogeneous-set, complete/anticomplete-blockade, and pure-blockade branches.
The local complement-family definition also agrees with the source's explicit
preliminary convention.

Authoritative source verification:

- https://arxiv.org/html/2606.06258v2 — Huang, Ju, and Zhou's original paper,
  Section 1.4, states property `(*)` with exactly this trigger and the three
  displayed outcomes.  Section 2 defines
  `overline(H-family) = {overline(H) : H in H-family}` and defines an
  `(ell,w)`-blockade by an integer actual length at least `ell`; the paper also
  uses real thresholds such as `epsilon^{-1}`.  These passages support both
  Alpha repairs and the ceiling interpretation of a real length lower bound.

## Independent contract repair and focused checks

The item bytes required no further mathematical edit.  However, the live
batch-14 and merged proof-contract entries for the direct consumer
`ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade` still quoted
the superseded pre-round-2 definition.  The strict batch contract check
reported `citation-quote-mismatch`.  I regenerated exactly that consumer's
citation and derivation entries in
`research/frontier-30-batch-14.proof-contracts.json` and
`research/frontier-30-proof-contracts.json` from the current definition.  This
is a run-local contract repair, not an edit to a direct dependency, so no
`owner-prerequisite-repair` licence is applicable.

After regeneration, the strict batch-14 proof-contract check passed for all
17 proof-bearing items and citation fidelity found all 46 quotations current.
The batch-14 content-policy check passed with no errors or warnings; repository
dependency checking completed with no errors; and focused rendering of the
definition, repaired blockade dependency, direct consumer, and A/B pages
passed YAML, wikilink, delimiter, and KaTeX checks.
