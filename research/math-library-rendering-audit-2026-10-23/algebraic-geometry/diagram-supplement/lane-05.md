# Diagram supplement review: lane 05

Reviewed the two assigned items against their bound snapshots and local screenshots at original resolution. Both screenshot receipts report `tikz_count: 0`; no diagram is currently displayed. This is an editorial assessment, not a finding of mathematical error. Any diagram added must remain explanatory and must not be used as proof.

## `lem-proper-pushforward-of-cycles-well-defined`

**Verdict: warranted; classification: uncertain.** The source states flat base-change compatibility in Statement lines 70–72 and gives the construction and multiplicity argument in proof line 108 (step 4.1). A Cartesian square is a useful aid for tracking the four maps and the induced equality of Chow operations.

Proposed square:

```text
X' = X ×_Y Y'  --g'-->  X
       | f'               | f
       v                  v
      Y' -------g-------> Y
```

Label `f` proper and `g` flat of pure relative dimension `n`; then `f'` is proper and `g'` is flat of pure relative dimension `n`. Mark `f'∘g' = g∘f` and
`f'_*∘g'^* = g^*∘f_*`. On `d`-cycles the two composites land in degree `d+n`. The proof's generic-point check must stay visible in explanatory text: when the image has equal dimension, both coefficients at a component `W_i` are `m·ℓ(C_i)`, where `m=[k(V):k(W)]`; when the dimension drops, both sides vanish. There are no sign choices. The diagram must not imply that it proves this coefficient identity.

Evidence: bound snapshot SHA256 `b31bee45c6a2740fa21a93c5e54ec5b78aecace7daf7a2b8e1eb39a53ece88a2`; screenshots `lem-proper-pushforward-of-cycles-well-defined--01.png` (statement), `--02.png` (facts/proof start), and `--03.png` (step 4.1), hashes recorded in `lane-05.json`. The statement and proof render without a square.

## `thm-flag-variety-bruhat-cell-decomposition`

**Verdict: warranted; classification: uncertain.** Statement lines 44–54 define `C_w = BwB/B` and say `X_B=G/B` is the disjoint union of these locally closed irreducible cells indexed by `w∈W`. Lines 55 onward give `C_w≅A^{ℓ(w)}` and identify the longest cell as the unique open dense cell; proof line 97 confirms the finite locally closed stratification. A compact index/rank schematic would make this decomposition easier to read.

Put `X_B` around cells `C_w`, each labeled by its Weyl group index `w` and dimension `ℓ(w)`, and distinguish only `C_{w0}` as open dense, of dimension `|Φ⁺|`. A small Weyl-group example is acceptable if labeled as an example. Do not draw closure-order arrows: no such relations are established by the selected claim. Keep the distinction between `n_w∈G` and `C_w⊂G/B`, and between the left `B`-action and right quotient by `B`, clear. No signs occur.

Evidence: bound snapshot SHA256 `a516c86aac8497adc7c184f147be3fa829824555181595c35bea4f49c4be1a94`; screenshots `thm-flag-variety-bruhat-cell-decomposition--01.png` (statement), `--02.png` (facts/proof), and `--03.png` (stratification and longest cell), hashes recorded in `lane-05.json`. The theorem renders without a diagram.
