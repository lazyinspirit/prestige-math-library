# Final-adjudicator evidence: `ex-semilocal-adic-completion`

Disposition: `repaired`

Source status: `familiar`

Exact reviewed item hash before the independent repair: `3e8724c8f65ce64bcbfb7ac02f0fa99827f8cfb88191e29b1c1fac3783d119fb`.
Exact terminal item hash: `43bcafd3e0281162ba48969769461c8396d20ca318110e6e7c6bb94d0e5a68e2`.
Exact terminal context hash: `6562a895f69c0ccaeae3a1e6e6839c722eaef9f634edc66eba2dba784289a002`.

Currency note: the example's item bytes remain unchanged; this context hash was
refreshed after a later theorem on the companion A page was independently
repaired.

## Material inspected

I read the current example and all four dependencies on Alpha's repaired bytes;
the inverse-limits/completion A page and its B companion; the batch-3 page
manifest, source coverage, notes, batch proof contract, and merged contract;
the Step-6/refuter and risk records; both frozen judge rejections; both exact
Alpha adjudications and defect-ledger rows; and Alpha's initial and round-1
repair reports.

The first frozen rejection correctly required the ring to be commutative under
this library's convention. Alpha repaired that hypothesis. The second frozen
rejection correctly observed that the central Chinese-remainder decomposition
had no cited fact. Alpha added the exact published CRT dependency and used it
on the powers of the maximal ideals.

## Mathematical determination

Alpha's second repair is mathematically correct. Distinct maximal ideals are
pairwise comaximal. If `I+J=R`, expansion of `(a+b)^(2n-1)=1` with `a in I`
and `b in J` shows `I^n+J^n=R`. Chinese remainders therefore identify

`R/(intersection_i m_i)^n = R/product_i m_i^n`

with `product_i R/m_i^n`. For `s` outside `m_i`, write `as+u=1` with
`u in m_i`; then `as(1+u+...+u^(n-1))` is congruent to one modulo `m_i^n`.
Thus localizing the quotient changes nothing. Finally, a compatible tuple in
the inverse limit of the finite products is precisely a finite tuple of
compatible inverse-limit coordinates, giving the asserted product of local
completions.

The terminal review found a remaining scope defect: the example did not state
`t>=1`, although its CRT dependency explicitly assumes a nonempty family, and
its proof contract incorrectly marked the singleton case inapplicable. I added
the nonempty bound, proved the two intermediate algebraic identifications
inline, made the coordinatewise inverse-limit argument explicit, and checked
the `t=1` and `n=1` boundaries. I also removed the two unused completion
theorems from the item's dependency list and synchronized the batch manifest,
batch contract, and merged contract. No other mathematical item was changed.

This finite commutative-algebra argument was familiar and is now completely
derived from the displayed calculations plus the two opened library
interfaces, so no external verification was needed.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch and merged proof contracts: zero errors and zero warnings for
  the item after synchronizing the new `L1` use in step 3.1.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Citation fidelity: no missing quote and no widening candidate for the item.
- Boundary audit: no contradiction or template for the item.
- Batch-3 content policy: no item finding.
- Repository `depcheck --quiet`: exit zero and final `OK`; standing warnings
  were unrelated to this repair.
