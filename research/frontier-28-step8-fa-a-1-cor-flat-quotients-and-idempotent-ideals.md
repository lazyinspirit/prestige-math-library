# Final-adjudicator evidence: `cor-flat-quotients-and-idempotent-ideals`

Disposition: `repaired`

Source status: `familiar`

Exact reviewed item hash before the independent repair: `c178db746cdec8b66066f05fd2fe3d5e434efdae10ee68682eeec7cf77b003c0`.
Exact terminal item hash after the independent repair: `f5989d3dd8909b6b103e0c561eab9ba3faa816e3ea0598e5376a30c735dda8e7`.
Exact terminal judge-context hash: `026d7f110a7319a77bb2b4d650a81b60faebca967e831d3a7711e903dc893e47`.

## Material inspected

I read the current item; both cited dependencies present on Alpha's repaired
bytes; the A page `flatness-and-faithful-flatness`; its B companion
`flatness-and-faithful-flatness-examples`; the batch-2 page manifest, source
coverage, notes, and proof contract; the merged proof contract; the Step-6 risk
record; both frozen judge rejections; both exact Alpha adjudications; both
defect-ledger rows; and the initial and round-1 Alpha repair reports.

The first frozen rejection correctly identified that the former local-ring
argument dropped a Choice hypothesis. Alpha's first repair added Choice. The
second frozen rejection correctly identified that the resulting proof still
used an uncited local-to-global classification of finite idempotent ideals.
Alpha's second repair replaced that detour by the determinant trick.

## Mathematical determination

Alpha's determinant-trick repair is correct and choice-free. If `R/I` is flat,
the ideal criterion makes the multiplication map
`I tensor_R R/I -> R/I` injective. That map is zero, while the standard
quotient-tensor isomorphism identifies its domain with `I/I^2`; hence
`I=I^2`. If `I` is finite, applying the determinant trick to the finite module
`I` and the equality `II=I` gives an element `e in I` with `(1-e)I=0`.
Consequently every `x in I` satisfies `x=ex`, so `I` is contained in `Re`; the
reverse containment follows from `e in I`. Substituting `x=e` gives `e^2=e`.
Conversely, if `I=Re` with `e^2=e`, then
`R=Re direct-sum R(1-e)` and `R/I` is the flat direct summand `R(1-e)`.

I nevertheless found two directly required carrier defects left after Alpha's
repair. The proof used the quotient-tensor isomorphism and preservation of
flatness by direct summands without citing the library items that state them,
and the proof contract's `iff-forward` row credited step 1.1 alone even though
the idempotent conclusion also needs step 2.1. I independently added those two
dependencies and fact citations, removed the vacuous old step 1.3, made the
final step identify exactly which clauses each argument proves, synchronized
the batch manifest and both contract carriers, and wrote concrete zero-ideal,
unit-ideal, zero-ring, and two-direction boundary records. No neighboring
mathematical item was edited.

This algebra is familiar and was fully checkable from the displayed maps and
the four opened library statements, so no external verification was needed.

## Focused checks

- `precheck` passed the repaired item with strategy `direct`.
- Strict `proof-contract` passed the batch contract for this item with zero
  errors and zero warnings.
- `rendercheck` passed YAML, wikilink/math delimiters, and KaTeX parsing.
- Citation fidelity reported no missing quote or widening for this item.
- Boundary audit reported no contradiction, template, or upheld exception for
  this item.
- Content policy reported no item finding.
- Repository `depcheck --quiet` ended `OK`; its warnings were pre-existing
  corpus-wide multi-home/orphan/citation warnings unrelated to this repair.
