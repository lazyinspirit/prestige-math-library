# Final-adjudicator evidence: `thm-additivity-of-hilbert-samuel-multiplicity`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `096c9bd72f5178b5b61bde32282e4f2345f034d51c030d687b01fb05ab10331f`.
Exact terminal item hash: `42d9113399ca0a59257993eacedc4ab5aa509edfae5d79867a908a49f3a1e418`.
Exact terminal context hash: `72b7114dec1a65f8d7c85543bc1ce1429dc8cd34a7b06898eb6be9826d0609b3`.

Currency note: the theorem's item bytes remain unchanged; this context hash was
refreshed after the later dimension theorem on the same A page was
independently repaired.

## Material inspected

I read the current theorem, all declared dependencies, the Hilbert-Samuel
function and multiplicity conventions, and the exact Artin-Rees theorem; the
Rees/Hilbert-Samuel A page and B companion; batch-2's manifest, source coverage,
notes, batch and merged contracts, risk and refuter records; both frozen judge
rejections; both exact Alpha adjudications and defect-ledger rows; and both
Alpha repair reports.

The first frozen rejection correctly rejected an unsupported claim that a
bounded-shift filtration error had lower degree. Alpha replaced it with a
finite-colength comparison. The second rejection correctly required the exact
Artin-Rees equality rather than a weaker equivalence-of-filtrations corollary.
Alpha added the exact theorem and obtained the correct shifted polynomial
identity.

## Authoritative verification

I verified the argument against the Stacks Project,
`https://stacks.math.columbia.edu/tag/00K4`.

- Lemma 10.59.2 gives the finite-colength comparison with the lower argument
  shifted downward and the ambient function on the middle term.
- Lemma 10.59.3 gives the exact Artin-Rees identity
  `chi_M = chi_M'' + chi_N(shift) + length(M'/N)`.
- Lemma 10.59.10 explicitly separates the positive-degree and finite-length
  branches when deriving degree/additivity consequences.

## Mathematical determination and independent repair

Alpha's exact Artin-Rees repair was correct, but its next step still contained
a fatal error. It asserted

`chi_M'(n-c) <= chi_N(n) <= chi_M'(n)`

up to a constant. The shifts are in the wrong direction. For example, with
`M'=R`, `N=m`, and `c=1` in a two-dimensional regular local ring,
`chi_N(n)` is larger than `chi_R(n)`. Moreover, when the global top degree is
zero, the constant `length(M'/N)` in the exact identity is itself load-bearing
and cannot be discarded.

The repaired comparison puts `C=length(M'/N)` and uses

`I^(n+c+1)M' subset I^(n+1)N subset I^(n+1)M'`

to obtain the correct squeeze

`chi_M'(n) <= chi_N(n)+C <= chi_M'(n+c)`.

If `P_M'` has positive degree, this forces `P_N` to have the same degree and
leading coefficient. If `P_M'` has degree zero, the outer polynomials are the
same constant, so the squeeze forces `P_N+C=P_M'`. If `M'=0`, the same statement
is immediate. Thus `P_N(n-c)+C` and `P_M'` have the same coefficient in the
global top degree in every case, and coefficient comparison in the exact
polynomial identity proves the theorem. I also defined `d=0` for the all-zero
short exact sequence, whose former empty maximum was undefined, synchronized
the exact Artin-Rees dependency in the batch manifest, and rewrote both
contract boundary/risk records. No dependency item was edited.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-2 and merged proof contracts: zero errors and zero warnings.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Risk report: moderate, score 3, with a complete terminal review.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-2 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
