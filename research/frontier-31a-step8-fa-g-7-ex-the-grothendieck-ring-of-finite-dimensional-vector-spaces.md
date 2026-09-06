# FA terminal evidence — queue g/7

Item: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces. Decision: repaired.

Read the item, both complete cited dependencies ex-finite-dimensional-vector-spaces-form-a-fusion-category and def-grothendieck-ring-of-a-tensor-category, batch-7 A/B pages and page conventions, manifest/coverage and batch notes, both proof-contract entries, reader/refute-7 risk report, Alpha's adjudication and basis-decomposition repair, and Terra's initial/final rejection rows (2026-09-05T18:46:49.363Z and 2026-09-05T21:37:03.982Z). The basis argument in repaired F1 is valid for the same elementary reason as in position 6. The final rejection identifies a different interface gap: F2 treats an intended tensor multiplication as already established, whereas its dependency expressly defers well-definedness.

I repaired F2 to state precisely that interface and verified the multiplication locally. Dimension respects short exact relations by extending a subspace basis with quotient-basis lifts. Direct sums show [V]=dim(V)[k], so dimension and m maps to m[k] are two-sided inverse group homomorphisms. This handles arbitrary virtual classes, not just classes of actual vector spaces. Transporting multiplication from Z along this bijection is well-defined by construction. The finite tensor-basis dimension identity identifies the transported product with [V tensor W] on every pair of object generators. Bilinearity then proves that the intended tensor multiplication descends and is unique. It preserves the unit [k], zero, and negative classes. This uses no unproved general multiplication theorem and is valid over every field.

Verified authoritative EGNO Tensor Categories, §4.5 opening, formula (4.7), Lemma 4.5.1 and Definition 4.5.2, printed pp.71–72/PDF pp.87–88:
https://math.mit.edu/~etingof/egnobookfinal.pdf
These fix the tensor-product Grothendieck multiplication. The dimension transport argument is independently supplied for this example, so the repair does not smuggle in a stronger interface or source hypothesis.

Changed only the example's facts/proof and its batch/merged proof-contract entries. Its statement, dependency IDs, A/B interface, and manifest are unchanged; no dependency repair licence. Focused precheck and both strict contract checks each pass 1/1, zero errors/warnings. No unresolved obligation, new judge call, or pass stamp. Next action after recording: position 8.
