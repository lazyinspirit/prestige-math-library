# Lane 03 — projection formula on character rings

## Coverage

Reviewed the bound source snapshot for `prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings`, statement lines 26–38 and the proof. The snapshot hash matches the current item. Both listed local screenshots were viewed at original resolution: `1200×1400` and `1200×100`; their hashes match the screenshot receipt.

The first capture shows the statement, facts, and proof legibly; the second is the short trailing capture. The receipt reports zero KaTeX errors, zero TikZ diagrams, and zero diagram failures.

## Map and domain checks

- **Correct diagram:** For fixed `ψ ∈ R(G)`, draw the square

  ```text
  R(H)  -- m_{Res_H^G ψ} -->  R(H)
   | Ind_H^G                    | Ind_H^G
   v                            v
  R(G)  ------ m_ψ --------->  R(G)
  ```

  Its commutativity states `Ind_H^G(χ · Res_H^G ψ) = (Ind_H^G χ) · ψ` for each `χ ∈ R(H)`.
- **Domains and codomains:** Restriction is the ring map `Res_H^G:R(G)→R(H)`. Induction is additive from `R(H)` to `R(G)`. Each `m` is multiplication in the ring named at its vertex; multiplication is the character operation induced by tensor product, including for virtual characters. Do not label induction a ring homomorphism or depict induction and restriction as inverses.
- **Action interpretation:** Restriction makes `R(H)` an `R(G)`-module by `ψ·χ = (Res_H^G ψ)χ`. The formula says induction is linear for that module structure. The source's pointwise proof checks ordinary characters by the induced-character formula and class-function property, then extends bilinearly to virtual characters.
- **Other assigned checks:** There is no balanced tensor product, action-side ambiguity, coset/double-coset indexing, or extra naturality claim to encode. The multiplication maps are on character rings, not a separate module tensor construction.

## Recommendation

A fixed-`ψ` commuting square is a correct optional illustration of the projection formula and its module-linearity meaning. The proof already gives a concise pointwise derivation, so its editorial value is uncertain. The lack of art alone is not a mathematical or rendering defect.
