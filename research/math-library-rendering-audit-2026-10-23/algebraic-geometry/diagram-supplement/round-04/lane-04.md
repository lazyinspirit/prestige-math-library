# Diagram supplement, round 04, lane 04

## Finding

| Item | Finding | Severity | Assessment |
|---|---|---|---|
| `lem-ag-separable-residue-cotangent-sequence` | `optional-missing-diagram` | Editorial | An arrow-labeled module diagram could clarify the exact sequence and its finite-separable specialization. The sequence is already displayed correctly in the preview; no mathematical defect was found. |

The review concerns statement lines 24–34 of the assignment-bound snapshot. Its SHA256 matches the assignment binding: `8fb07f15d31e9ea7b729a6d28e2f20dd0291f68ad774e2e14705d322f46e1877`.

## Suggested diagram content

Show the short exact sequence

`0 -> m/m^2 -> Omega_{R/k} tensor_R kappa -> Omega_{kappa/k} -> 0`

for a Noetherian local `k`-algebra `(R,m)` with residue field `kappa=R/m` finitely generated and separably generated over `k`. Label the first map by `[x] -> dx tensor 1` for `x in m`. Label the second map as induced by `R -> kappa`, sending `dr tensor lambda` to `lambda d(r mod m)`. The composition is zero, and the source asserts the sequence is short exact under the stated residue-field hypothesis.

Add a conditional branch for `kappa/k` finite separable: then `Omega_{kappa/k}=0`, so the first map is an isomorphism

`m/m^2 ~= Omega_{R/k} tensor_R kappa`.

The terms are `kappa`-vector spaces. The source claims no numerical ranks; exactness gives the dimension sum for the middle term, and these dimensions are finite under the stated hypotheses. Do not label the rightmost term zero for arbitrary separably generated `kappa/k`; the vanishing is stated only in the additional finite-separable case.

## Preview review

Viewed both assignment-listed local screenshot tiles at original resolution:

- `screenshots/lem-ag-separable-residue-cotangent-sequence--01.png` shows the statement, facts, and beginning of the proof. The short exact sequence is rendered inline as display math; no separate diagram is present.
- `screenshots/lem-ag-separable-residue-cotangent-sequence--02.png` shows the remainder of the proof; no diagram is present.

The arrow directions, domains, and codomains match the source. The first map is the stated map from `m/m^2` to `Omega_{R/k} tensor_R kappa`; the quotient map on differentials goes from that middle term to `Omega_{kappa/k}`. Exactness and the zero right term in the finite-separable case give the stated isomorphism. No composition, indexing, or convention defect was found.
