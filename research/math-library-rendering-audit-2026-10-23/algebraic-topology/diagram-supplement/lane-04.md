# Lane 04 diagram review

Reviewed the bound snapshot for `lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder` and viewed all three assigned local PNGs at original resolution. The PNGs show the statement and proof across three tiles; no diagram is present. The snapshot hash matches the assignment's bound source hash.

## Finding

A Mayer–Vietoris cap-duality ladder is warranted. Lines 26–30 state exact rows, naturality for the first two maps, and a parity-corrected connecting square. A diagram can make visible both the cohomological degree increase under `δ` and the corresponding homological degree decrease under `∂`, which is the central compatibility assertion. The argument remains proved algebraically in the source; the diagram should summarize it, not serve as proof.

Use the rows

```text
H_c^p(U∩V) ──(e_U,−e_V)──> H_c^p(U)⊕H_c^p(V) ──sum──> H_c^p(M) ──δ──> H_c^{p+1}(U∩V)
      │ D_{U∩V}                      │ D_U⊕D_V                    │ D_M                       │ D_{U∩V}
      ▼                               ▼                            ▼                           ▼
H_{n−p}(U∩V) ─(i_* ,−i_*)─> H_{n−p}(U)⊕H_{n−p}(V) ─sum─> H_{n−p}(M) ──∂──> H_{n−p−1}(U∩V)
```

For a strictly commuting ladder, label the last lower arrow `(-1)^{p+1}∂`; the unmodified homology Mayer–Vietoris connector is still `∂`. The sign check is

```text
(-1)^{p+1} ∂ D_M = (-1)^{p+1}(-1)^{p+1}D_{U∩V}δ = D_{U∩V}δ.
```

Thus the connector square has the correct sign. The endpoint degrees also match: `D_M` maps `H_c^p(M)` to `H_{n−p}(M)`, while `D_{U∩V}` maps `H_c^{p+1}(U∩V)` to `H_{n−p−1}(U∩V)`. The first two vertical squares use the same `(+,−)` and sum conventions on the cohomology and homology rows. Multiplying a connecting homomorphism by this unit sign does not change exactness. The diagram must not imply that any cap-duality map is an isomorphism.

The rendered screenshots were inspected only as local visual evidence. This review made no item or publication-status changes.
