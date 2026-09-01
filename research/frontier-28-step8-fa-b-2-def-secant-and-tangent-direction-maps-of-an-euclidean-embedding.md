# Final-adjudicator evidence — `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding`

Disposition: `accepted-after-review`.

## Material reviewed

I independently read the current definition and its three declared
dependencies; the two immediately downstream projection lemmas; the complete
Whitney A/B page pair; the batch-10 manifest, canonical coverage carrier,
notes, and contract files; the Step-6 reader repair and Alpha disposition; both
frozen judge rejections and exact Alpha adjudications; the defect-ledger rows;
and Alpha's first and second repairs.

This is a definition with `provenance.proof: not-applicable`, so there is no
item-local proof contract, finite smoke test, or proof risk tier. Its Definition
section is quoted by the proof contracts for the two projection lemmas. Both
consumers are below the high-risk threshold, and their current contract quotes
match the current item bytes.

## Mathematical basis

Alpha's second repair is correct and complete. The library's Euclidean-space
convention permits $N=0$, while the codomain notation $S^{N-1}$ used here has no
declared meaning at $N=0$. Adding $N\geq1$ makes both displayed codomains
well-formed, including for the empty-manifold edge case that motivated the
second frozen rejection.

The two normalizations are well-defined. If $(p,q)$ is off the diagonal, then
injectivity of the smooth embedding gives $f(q)-f(p)\ne0$. If $v\ne0$, the
immersion clause in the definition of a smooth embedding makes $df_p$ injective,
so $df_p(v)\ne0$. Positive definiteness of the Euclidean norm then makes each
denominator positive, and the normalized vector has norm one.

Alpha's first repair also remains sound. The current item no longer claims,
without $\mathrm{AC}_\omega$, that the whole punctured tangent bundle is a
second-countable smooth manifold. It defines the tangent-direction map on the
underlying punctured tangent bundle and records only the local induced
tangent-chart structure, which does not require the global countable-choice
conclusion of the cited tangent-bundle theorem. Thus the repair respects the
library's foundational boundary instead of silently spending that theorem
without its hypothesis.

No further item or metadata edit was required.

## Source verification

Source status: `familiar`. No external verification was needed. These are the
standard secant and differential normalizations used in the elementary Whitney
projection argument; their well-definedness follows directly from injectivity,
the immersion condition, and the Euclidean norm, all of which were checked
against the opened local dependencies.

## Focused checks

- `precheck` on the definition: no proof-bearing item was applicable and no
  failure was reported.
- Strict batch-10 proof contract on both direct consumers: 2/2 checked, 0
  errors or warnings.
- Strict merged proof contract on the same consumers: 2/2 checked, 0 errors or
  warnings.
- Batch-10 citation fidelity: 80 citations over 48 items, with no missing quote
  and no widening candidate.
- Required batch-10 risk review: 48 items routed, 0 errors.
- Batch-10 content policy: 54 scoped items, 0 errors or warnings.
- Renderer check on the item: clean YAML, wikilinks, delimiters, and KaTeX.
- `git diff --check` on the item: clean.
