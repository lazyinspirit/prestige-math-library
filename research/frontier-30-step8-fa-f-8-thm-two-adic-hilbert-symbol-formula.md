# Final-adjudicator evidence: `thm-two-adic-hilbert-symbol-formula`

## Disposition

`repaired`

## Mathematical basis

The Alpha's second repair is correct: in the `v=-1`, negative-`u` cases,
primitive values can also be congruent to `2 mod 8`; this residue is a
nonsquare because it has odd 2-adic valuation.  With `2` restored, the listed
residues `2,5,6,7` are exhaustive.  I independently enumerated all primitive
triples modulo `8` for the odd-unit and one-even-valuation cases and obtained
exactly the signs predicted by the displayed formula.

I inspected the theorem, all three direct dependencies, the Hilbert-symbol
A-page and paired examples page, batch-8 manifest/coverage, the batch and
merged proof contracts, the high-risk record, both frozen judge rejections,
defects `frontier-30-S8-f-041` and `frontier-30-S8-f-049`, and the Alpha
recovery adjudication.

The repaired norm-coset identity in step 1.1 is correctly oriented.  From
`(d,c)_2=1`, symmetry and the norm characterization make `d` a norm from the
quadratic algebra for `c`, so multiplication by `d` preserves whether the
first argument is in that norm subgroup.  The positive witnesses and all
negative residue obstructions in steps 2.1 and 3.1 are valid.

Authoritative verification:

- https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf — Sutherland's
  Lemma 10.8 reduces the relevant primitive solvability questions to modulo
  `8`; Theorem 10.9 states exactly the formula using
  `(u-1)/2` and `(u^2-1)/8`; Corollary 10.3 supplies the norm-coset identity
  used to reduce the double-odd-valuation case.
- https://www.samraskin.net/forms.pdf — Proposition 3.16.3 states the same
  `Q_2` Hilbert-symbol formula, separates the two valuation parities, and
  checks the unit cases by the `Q_2` square criterion and congruences modulo
  `8`.

## Independent repairs

- Corrected the Raskin source locator from §4.3 to Proposition 3.16.3.
- Added the missing exponent transport for `alpha=beta=1`, using that
  `epsilon` and `omega` are homomorphisms on odd unit classes and that
  `epsilon(-1)=1`, `omega(-1)=0`.
- Regenerated the theorem's citation/derivation entries in the batch-8 and
  merged proof contracts and synchronized their high-risk records.

No direct dependency was edited, so no owner-prerequisite-repair licence is
applicable.

Focused checks passed:

- phase-format precheck of the theorem;
- strict batch-8 and merged proof-contract checks for the theorem;
- batch-8 citation-fidelity check;
- independent exhaustive modulo-8 enumeration of all representative cases and
  the `alpha=beta=1` exponent identity.

