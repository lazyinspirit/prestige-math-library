# Diagram supplement lane 10

## Coverage

| Item | Status | Review |
|---|---|---|
| `ex-incidence-point-hyperplane` | optional diagram candidate | A point–hyperplane incidence schematic is supported by the example. Label both projection fibres by `P^(n-1)` only for `n >= 1`, and state separately that for `n = 0` the incidence locus and both fibres are empty. |

## Evidence

- Reviewed the assignment-bound snapshot at `snapshots/ex-incidence-point-hyperplane.md`; its SHA256 matches the assignment binding `467bda3d73e329b368c51b7d702c53d9b04ef3851a3bf794eccd636349f92a50`.
- Reviewed the bound local rendered preview at original resolution: `screenshots/ex-incidence-point-hyperplane--01.png`. It renders the example text and contains no diagram.
- The incidence equation `sum_i a_i x_i = 0` is homogeneous separately in the point and hyperplane coordinates. Fixing either coordinate imposes one nonzero linear equation on the other vector space when `n >= 1`; the kernel has vector dimension `n`, so its projectivization is `P^(n-1)`.
- At `n = 0`, each corresponding kernel is the zero vector space. Its projectivization is empty, consistently with the snapshot's statement that the unique point lies on no hyperplane.

## Suggested diagram content

Show the incidence locus

`I = {([x],[a]) in P^n x (P^n)^vee : sum_i a_i x_i = 0}`

with its two projections to `P^n` and `(P^n)^vee`. For `n >= 1`, label each fibre `P^(n-1)`. Add an explicit `n = 0` note that `I` and both fibres are empty. This recommendation is limited to the stated example; it asserts no general fibre criterion beyond this bilinear incidence construction.
