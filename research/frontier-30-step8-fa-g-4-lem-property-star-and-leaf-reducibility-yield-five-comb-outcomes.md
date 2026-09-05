# Final-adjudicator evidence: `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`

## Disposition

`accepted-after-review`

## Independent review

I inspected the current lemma and all five direct dependencies; the complete
property-`(*)` A/B page context; the batch-14 manifest, coverage notes, source
route, and strict proof contract; the Step-6 reader/refuter findings and Alpha
risk review; both frozen judge rejections; both exact Alpha adjudications and
defect records; and both Alpha repair accounts.

The first frozen rejection correctly found that the former step 5.1 claimed
the unproved stronger estimate `w >= x^8 |G|`.  The current proof uses only
`w >= x^9 |G|`, which follows from

`w >= y^4 |G| / (2x^(-2))^2 >= x^8 |G|/4 >= x^9 |G|`

because `x <= 1/4`.  This is exactly sufficient for outcome 3.

The second frozen rejection correctly found that L1 had omitted the
`ell,w >= 4` domain of property `(*)`.  The current L1 retains those
hypotheses, and step 4.1 establishes them before use: the comb dependency gives
`ell_0 >= y^(-1)`, while `y <= 2^(-16)` gives `ell_0 >= 4`; and the same width
estimate together with `|G| >= x^(-9)` gives
`w >= x^(-1)/4 >= 4`.

The rest of the five-way reduction is also complete.  On the complement-sparse
side, applying the leaf-reduction lemma with sparse parameter `y^3` and
`b = 4` gives exponent `12d+3`; choosing
`c_4 = max(12d+3,4)` and `c_5 = max(h,4)` weakens both size bounds in the
required direction.  Complement invariance transfers the restricted branch.
On the sparse side, the small-order case yields outcome 3 and otherwise
`|G| >= x^(-9) >= y^(-4)` licenses the comb trichotomy.  The pair and sparser
branches are outcomes 1 and 2.

For the remaining property-`(*)` branches, `ell_0 >= y^(-1)` implies
`w = y^4|G|/ell_0^2 >= |G|/ell_0^6`; together with
`k >= ell_0^c_3` this gives the stated blockade width and
`k >= y^(-c_3)` in outcome 4.  In the pure branch, setting
`ell = sqrt(ell_0/y)` gives `y^(-1) <= ell <= x^(-2)`, actual blockade length
at least `ell`, and the exact identity
`w/ell_0^2 = y^4|G|/ell_0^4 = |G|/ell^8`.  Thus the ceiling in the comb
dependency is absorbed without strengthening that dependency.

Authoritative source verification:

- https://arxiv.org/html/2606.06258v2 — Huang, Ju, and Zhou's original paper,
  Lemma 4.1 and its proof give this five-outcome property-`(*)` reduction,
  including the dense/complement side, the sparse-comb trichotomy, and the
  three terminal property-`(*)` branches.  The local item deliberately weakens
  constants where its cited library interfaces use `ceil(x^(-2))`; the
  calculations above verify that the resulting statement remains valid.

The proof contract classifies this item as critical risk and contains the
required completed `alpha-6b-g` risk review.  No item, dependency, page,
metadata, or contract edit was required.  Focused precheck and six-file render
checks passed.  The strict batch-14 contract check passed all 17 proof-bearing
items; citation fidelity found every quote current; boundary audit found no
contradicted disposition; the reviewed risk gate passed all 17 items; and
batch-14 content policy passed without errors or warnings.
