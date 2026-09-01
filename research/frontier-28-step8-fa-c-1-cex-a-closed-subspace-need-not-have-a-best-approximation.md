# Final-adjudicator evidence — `cex-a-closed-subspace-need-not-have-a-best-approximation`

Disposition: `repaired`.

## Material reviewed

I independently read the current item, its A/B page pair, the batch-5 page
manifest and notes, both batch-local and run-wide proof contracts, the Alpha
risk review, both frozen judge rejections and adjudications, the defect-ledger
rows, and Alpha's first and second repairs. The item has no current cited
dependencies; that is appropriate because its construction is proved inline.

## Mathematical basis

Alpha's second repair correctly fixes the scalar field as `\mathbb R`. Thus
each coordinatewise Cauchy sequence has a real limit, and the order comparison
in the nonattainment argument is meaningful. Alpha's earlier renaming of the
arbitrary Cauchy limit from `x` to `z` also correctly preserves the fixed
witness `x=2e_0`.

The remaining distance argument is correct. The functional
`\varphi(z)=\sum_{n\ge0}2^{-n-1}z_n` has norm at most one and
`\varphi(2e_0)=1`, so every `y\in\ker\varphi` satisfies
`\|2e_0-y\|_\infty\ge1`. The finite-support vectors that equal
`(1-2^{-N})^{-1}` in coordinates `0,\ldots,N-1` have `\varphi=1` and norms
tending down to one, so the distance is exactly one. If it were attained, a
unit-norm real sequence `z` with `\varphi(z)=1` would make equality hold in
both weighted triangle inequalities. Since every weight is strictly positive,
this forces `z_n=1` for every `n`, contrary to `z\in c_0`.

I independently repaired step 1.1 because it selected an index using uniform
convergence before deriving that convergence. The revised proof first lets the
second Cauchy index tend coordinatewise to infinity, obtains the uniform bound
`\|x^{(m)}-z\|_\infty\le\varepsilon/2`, and then uses one tail of
`x^{(m)}\in c_0` to prove `z\in c_0`. This closes the completeness proof in
the order in which its facts are used.

Both proof-contract copies still rebound the Cauchy limit to `x`, exactly the
first frozen fatal defect, so I synchronized them to the repaired `z` proof.
I also synchronized the batch manifest to the item's empty dependency list;
the counterexample does not use either quotient-seminorm item formerly listed
there.

## Source verification

Source status: `familiar`. No external verification was needed. Completeness
of real `c_0`, continuity of an absolutely summable-coordinate functional, and
the positive-weight equality argument are standard functional-analysis facts,
and every one is proved directly in the repaired item rather than imported as
an external theorem.

## Focused checks

- `precheck` on the item: 1 checked, 0 failing.
- strict batch-5 proof contract: 24/24 checked, 0 errors or warnings.
- strict run-wide proof contract: 339/339 checked, 0 errors or warnings.
- batch-5 content policy: 34 scoped items, 0 errors or warnings.
- `depcheck --quiet`: exit 0; only standing repository warnings.
- renderer math/frontmatter check on the item: clean.
- `git diff --check` on the repaired item and synchronized metadata: clean.
