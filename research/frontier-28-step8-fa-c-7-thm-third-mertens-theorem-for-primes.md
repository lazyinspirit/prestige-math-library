# Final-adjudicator evidence — `thm-third-mertens-theorem-for-primes`

Disposition: `repaired`.

## Material reviewed

I independently read the theorem and all seven declared dependencies, the
number-theory A/B page pair, the controlling NT-11 design block, batch-6
manifest, coverage notes and proof contract, the run-wide contract and
critical-risk record, both frozen judge rejections and adjudications, both
defect-ledger rows, the reader report, and Alpha's two repairs.

## Authoritative source verification

Source status: `verified`.

The official MIT 18.785 problem set is
https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_pset9.pdf.
Problem 1 states the sharp logarithmic third-Mertens estimate
`\sum_{p\le x}\log(1-1/p)=-\log\log x-\gamma+O(1/\log x)`; Problem 2(c)--(f)
derives the prime-power formulation and identifies the constant with
Euler's `\gamma`.

Terence Tao's completed 254A notes are
https://terrytao.wordpress.com/2014/11/23/254a-notes-1-elementary-multiplicative-number-theory/.
Equation (25), the computation ending in (34), and the following display prove
exactly
`\sum_{2\le n\le x}\Lambda(n)/(n\log n)
=\log\log x+\gamma+O(1/\log x)`. The subsequent displays bound the difference
from the full logarithmic Euler-product series by
`\sum_{j\ge2}O(\min(2^{-j},x^{-1/2}))=O(1/\log x)`, and Theorem 26 states the
same product asymptotic as the library item. Tao's form
`(e^{-\gamma}+O(1/\log x))/\log x` is equivalent to the item's
`e^{-\gamma}(1+O(1/\log x))/\log x` because `e^{-\gamma}` is a fixed positive
constant.

## Mathematical basis

Alpha's second repair is correct and essential: the weighted sum begins at
`n=2`, because the nominal `n=1` term would have denominator
`1\log1=0`. For a prime power `n=p^k`, the repaired sum converts literally to
`1/(kp^k)` using `\Lambda(p^k)=\log p` and `\log(p^k)=k\log p`.

For the finite positive Euler product, the logarithm power series gives

`-\log\prod_{p\le x}(1-1/p)=\sum_{p\le x}\sum_{k\ge1}1/(kp^k)`.

The difference from the source-backed truncated prime-power sum consists
exactly of `k\ge2`, `p\le x`, `p^k>x`. When
`2\le k\le\lfloor\log_2x\rfloor`, comparison with the integral tail of
`\sum n^{-k}` is uniformly `O(x^{-(k-1)/k})=O(x^{-1/2})`; there are
`O(\log x)` such `k`. For larger `k`, the complete tail is `O(2^{-k})`, whose
sum is `O(1/x)`. Thus the difference is
`O(\log x/\sqrt x)+O(1/x)=O(1/\log x)`. Combining this with the verified
weighted formula yields
`\log P(x)=-\log\log x-\gamma+O(1/\log x)`. Finally,
`e^{O(1/\log x)}=1+O(1/\log x)`, which proves the displayed product estimate.

Alpha's first repair therefore supplies the genuinely load-bearing exact
constant rather than inferring it from a weaker `\Theta(1/\log x)` bound, and
the current local tail derivation is complete.

I repaired the directly required metadata. The batch manifest still described
the superseded `B_1+\alpha` proof and omitted the von Mangoldt and logarithm
power-series dependencies present in the current item. Both proof-contract
copies also referred to the obsolete constant `\alpha`, assigned work to a
nonexistent step 4.1, and pointed the product expansion to the wrong step. The
manifest, endpoint/remainder records, and `CRITICAL 9` risk review now match
the current three-step proof.

## Focused checks

- `precheck` on the theorem and five proof-bearing dependencies: 6 checked, 0
  failing.
- strict batch-6 proof contract: 21/21 checked, 0 errors or warnings.
- batch-6 content policy: 25 scoped items, 0 errors or warnings.
- plan validation after manifest synchronization: acyclic and consistent.
- renderer math/frontmatter check on all three Mertens theorem carriers:
  clean.
- run-wide risk report: `CRITICAL 9`, complete review, 0 report errors.
- `git diff --check` on the item, manifest, and contract carriers: clean.
- The run-wide strict contract scan reached all 339 items but reported one
  unrelated citation-quote mismatch in
  `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`;
  the owned batch-6 contract remained fully clean, and I did not alter that
  out-of-scope concurrent defect.
