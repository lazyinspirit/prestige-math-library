# Round 02, lane 09 — Pure braids as pure mapping classes

**Item:** `cor-pure-braids-are-pure-punctured-disk-mapping-classes`  
**Review:** targeted missing-diagram candidate  
**Source:** bound snapshot, SHA-256 `2246bafb5e72c589610950c5af5b74068d1548f9c7f60230c996a9d3fce1abca`

I read the bound source and viewed all three assigned PNG tiles at original resolution. They show the statement, proof, and remarks without a diagram. The matching screenshot receipt reports `tikz_count: 0`, no KaTeX errors, and no diagram failures. Its item id matches, but the receipt's lane field says `01` while this assignment is round 2, lane `09`.

## Assessment

A compact commuting square with its kernel restriction is warranted as an explanatory schematic. It would make the map direction and the proof's key equality of endpoint permutations visible. The corollary is clear without a diagram, and the proof remains the basis for the conclusion.

The source's isomorphism is
`Ψ:G_n→Mod(D²,Q_n;∂D²)`. It points from geometric braids to boundary-fixed mapping classes. The endpoint homomorphism is `π_geo:G_n→S_n`. For a braid class `[β]`, the proof shows that the lifted homeomorphism endpoint satisfies `h_β(q_j)=z_j(1)=q_(π_geo([β])(j))`. Thus the permutation induced on the marked set by `Ψ([β])` is exactly `π_geo([β])`, and the square with both maps to `S_n` commutes. The endpoint tuple's label record here is `π_geo([β])`; the inverse appearing in the separate covering-monodromy convention is a label-versus-action conversion and should not be inserted into this square.

The group `Mod(D²,Q_n;∂D²)` consists of mapping classes fixing the boundary pointwise and preserving the marked set setwise. Its pure subgroup `PMod(D²,Q_n;∂D²)` consists of classes inducing the identity permutation, equivalently fixing each marked point. Since `G_n^pure=ker(π_geo)` and `Ψ` is an isomorphism, the restriction of `Ψ` maps that kernel isomorphically onto `PMod`. The statement includes `n≤1`, where the groups in question are trivial.

I found no diagram-related mathematical defect. A suitable figure should show the forward map `Ψ`, both endpoint-permutation maps and their agreement, and the kernel restriction. It should distinguish setwise from pointwise preservation of `Q_n`, retain pointwise boundary fixing, and avoid adding an inverse to the endpoint map.

**Relevant source lines:** 37–56 (statement and map definitions); proof steps 1.1–3.1 establish the matching endpoint permutation and kernel image.
