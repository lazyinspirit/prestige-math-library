# Lane 03 — geometric/configuration braid models

## Coverage

Reviewed the bound source snapshot for `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic`, statement lines 34–50. Its SHA256 matches the current item. Both listed local screenshots were viewed at their original resolutions: `1200×1400` and `1200×238`; their hashes match the screenshot receipt.

The captures show the statement, facts, and proof with no diagram. The formulas and proof labels are legible. The receipt reports zero KaTeX errors, zero TikZ diagrams, and zero diagram failures.

## Convention checks

- **Map direction:** The theorem defines `Φ:G_n→B_n^conf`, based at `Q` and `[Q]`, and asserts `π_conf∘Φ=π_geo`. The endpoint square therefore has both vertical arrows into `S_n` and bottom arrow `id_{S_n}`.
- **Inverse loop:** The formula is `Φ([β])=(ι^C_*[S(β)])^{-1}`. The raw slice has inverse endpoint permutation and reverses products: with geometric product `[γ][β]=[γ⋆β]`, its class satisfies `[S(γ⋆β)]=[S(β)][S(γ)]` under the first-then-second loop convention. Inversion reverses that order again, making `Φ` a homomorphism and restoring the geometric endpoint permutation.
- **Pure square:** The pure formula is `Ψ([β])=(ι^F_*[z_β])^{-1}` with domain `G_n^pure` and codomain `PB_n`. The cited pure-subgroup corollary gives `Φ(G_n^pure)=ker π_conf=im p_*`, where `p_*:PB_n→ker π_conf` is an isomorphism. Thus `p_*∘Ψ=Φ|_{G_n^pure}`. Draw the inner square with `Ψ` across the top, inclusions down the sides, and `Φ` across the bottom; the pure endpoint maps land at the identity permutation.
- **Crossings:** No particular braid, crossing sequence, or Artin word is specified in the source. A literal crossing example would add unsupported data.

## Recommendation

An abstract commuting square for endpoint permutations, alongside the pure subgroup/kernel square, would help explain the model comparison. This is an optional editorial opportunity and remains uncertain as a “missing diagram” defect; the absence of art alone is not a mathematical or rendering failure.
