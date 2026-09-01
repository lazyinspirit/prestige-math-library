# Final-adjudicator evidence: `thm-noetherianity-of-adic-completion`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `49c3f1320a8d1cea42c71de6603e230ad214cc4a2e947358f656068eba17df44`.
Exact terminal item hash: `9ead49a441bc2da9e154870788d1f1e08df475d5448221e862998c1484d27304`.
Exact terminal context hash: `9c57bbb57d826a6d96a95846e550e9e06f821ff58ef679759bfc8d3108d1de20`.

## Material inspected

I read the current theorem and all five dependencies; the completion A/B page
pair; batch-3's manifest, source coverage, notes, batch and merged contracts,
critical-risk and refuter records; both frozen judge rejections; both exact
Alpha adjudications and defect-ledger rows; and both Alpha repair reports.

The first frozen rejection correctly required a commutative Noetherian ring for
the quotient, ideal-generation, and polynomial-ring interfaces. Alpha added
commutativity. The second correctly required the Axiom of Choice inherited from
the finite-module completion comparison. Alpha added Choice to the statement
and Given.

## Authoritative verification

I verified the proof against the Stacks Project,
`https://stacks.math.columbia.edu/tag/0BNH`. Lemma 10.97.5 proves the key
complete-ring result by showing the associated graded ring is a quotient of a
finite-variable polynomial ring, choosing homogeneous initial generators for
an arbitrary ideal, and recursively correcting an element to higher adic
order. Completeness sums the coefficient series. Lemma 10.97.6 applies that
argument to a Noetherian ring's completion.

## Mathematical determination and independent repair

Alpha's repaired hypotheses and mathematical route are correct. Finite
generation of `I` makes `gr_I(R)` a quotient of `(R/I)[T_1,...,T_r]`, hence
Noetherian. Completion identifies all adic quotients and therefore the
associated graded ring of `R-hat` with `gr_I(R)`.

I independently made the final lifting argument exact. The graded ideal of an
arbitrary `J subset R-hat` is finite by the cited Noetherian ideal
characterization. After choosing homogeneous generators `g_j` of degrees
`d_j`, the repaired recursion starts with `r_0=x` and, in degree `n`, writes
the initial class of `r_n` using only generators with `d_j<=n`; the lifted
coefficient lies in `I^(n-d_j)`, and the next remainder lies one adic level
deeper. Choice supports the countable recursion. For fixed `j`, the coefficient
series starts at `d_j` and is Cauchy; for `N>=d_j` its tail lies in
`I^(N+1-d_j)`. Multiplication by `g_j` puts the error in `I^(N+1)`, and
separatedness of the complete ring makes the limiting error zero. Thus the
lifted `g_j` generate `J` itself, not merely its closure.

I added the missing [L2] citation at the graded-ideal step, replaced the vague
degree-zero recursion and negative-exponent tail language by the precise
degree-by-degree construction, and synchronized both proof contracts and all
boundary/risk records. The statement, dependency set, and batch manifest were
already correct after Alpha's repairs. No dependency item was edited.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-3 and merged proof contracts: zero errors and zero warnings.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Required risk report: critical, score 13, with complete terminal review.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-3 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
