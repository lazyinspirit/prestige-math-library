# Final-adjudicator evidence: `thm-faithful-flatness-of-jacobson-adic-completion`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `6515601d2dd7bc2a1fa687a0e83d61748bb215ef5d6f973df034d98a3b389de4`.
Exact terminal item hash: `a742cc13f6d001a181001311bf759e16e56283ac73ae9ef63855b81d7c3bbeac`.
Exact terminal context hash: `d9c2a7b37ab8a22f9cb313b78a5fc31a21452bcc111e06b5aea05f7657cfd813`.

Currency note: the theorem's item bytes remain unchanged; this context hash was
refreshed after the following flatness theorem on the same A page was
independently repaired.

## Material inspected

I read the current theorem and all four dependencies on Alpha's repaired bytes;
the inverse-limits/completion A page and B companion; batch-3's manifest,
coverage, notes, batch and merged contracts, high-risk review, Step-6 refuter
record, and cross-group audit; both frozen judge rejections; both exact Alpha
adjudications and defect-ledger rows; and both Alpha repair reports.

The first frozen rejection correctly required the commutative-ring hypothesis
of the faithful-flatness characterization. Alpha added it. The second frozen
rejection correctly noted that a merely nonzero quotient was not, by itself, a
cited prime-existence result. Alpha added a Choice-qualified maximal-ideal
theorem.

## Authoritative verification

I verified the result against the Stacks Project,
`https://stacks.math.columbia.edu/tag/0BNH`. Lemma 10.97.2 supplies flatness of
Noetherian completion, Lemma 10.97.3 states that completion is faithfully flat
when the defining ideal lies in the Jacobson radical, and its proof uses the
survival of every maximal ideal in the completed spectrum. Lemma 10.97.4 gives
the quotient comparison used locally.

## Mathematical determination and independent repair

Alpha's repair is correct, but the added maximal-ideal choice is unnecessary.
For a maximal ideal `m`, the Jacobson hypothesis gives `I subset m`, and the
finite-quotient comparison gives

`R-hat / m R-hat isomorphic to R/m`.

The right side is a field. Therefore `m R-hat` itself is a maximal, hence
prime, ideal; no new prime has to be selected. Its contraction contains `m`.
Because a prime's preimage is proper and `m` is maximal, that contraction is
exactly `m`. Thus every maximal ideal lies under a prime of the completion.
Together with flatness, the cited characterization gives faithful flatness.

I replaced Alpha's detour by this direct field-quotient argument, removed the
now-unused maximal-ideal-existence dependency and fact, and synchronized the
batch and merged contracts. The contract now explicitly checks `I=0`, the
vacuous zero-ring case, the contraction argument, and the inherited Choice
boundary. The batch manifest already contained exactly the three dependencies
used by the repaired proof. No dependency item was edited.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-3 and merged proof contracts: zero errors and zero warnings.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Required risk report: high, score 7, with complete terminal review and no
  error.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-3 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
