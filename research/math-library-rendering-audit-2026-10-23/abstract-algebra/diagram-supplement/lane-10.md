# Lane 10 — product basis of a tensor product

## Coverage

Reviewed the bound snapshot for `thm-tensor-product-basis-from-bases`, statement lines 30–41, and its proof. The snapshot hash matches the current item. Both assigned local PNGs were viewed at original resolution (`1200×1400` and `1200×100`); their hashes match the screenshot receipt. The first capture shows the statement, facts, and proof; the second contains the proof's closing line. The receipt reports zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No rendering defect was observed.

## Map and indexing checks

- **Canonical map:** With the chosen bases, the direct-sum identifications give

  ```text
  φ : R^(I×J) → M ⊗_R N
  δ_(i,j) ↦ e_i ⊗ f_j.
  ```

  Here `δ_(i,j)` is the standard coordinate vector at `(i,j)`. Tensoring the direct sums and using `R⊗_R R ≅ R` gives `M⊗_R N ≅ ⊕_(i,j) R`, so these are exactly the product-indexed basis vectors.

- **Finite support and balancing:** `R^(I×J)` consists of finitely supported coefficient families. If `m=Σ_i a_i e_i` and `n=Σ_j b_j f_j`, each sum is finite and `m⊗n=Σ_(i,j) a_i b_j(e_i⊗f_j)`. The coordinate pairing `(m,n) ↦ (a_i b_j)_(i,j)` is `R`-bilinear since `R` is commutative, so it factors through the balanced tensor product and is inverse to `φ` on basis tensors. Every tensor is a finite sum of pure tensors; uniqueness follows from the direct-sum isomorphism. The source's direct-sum proof establishes this without needing the coordinate inverse explicitly.

- **Empty bases:** If either `I` or `J` is empty, the corresponding free module is zero and `I×J=∅`. Thus both `R^(I×J)` and `M⊗_R N` are zero, and the canonical map is the unique isomorphism between them.

- **Other conventions:** No extra left/right action convention, coset indexing, or double-coset indexing occurs here. The theorem is stated for the chosen bases and does not make a separate naturality claim.

## Recommendation

A small schematic marking a generic `(i,j) ↦ e_i⊗f_j` could help readers see the product indexing. It should preserve arbitrary indexing and make clear that `R^(I×J)` has finite support; a finite grid or unrestricted coefficient array would mislead. The source already states the map, finite expansion, and empty case explicitly, so the diagram's editorial value is uncertain. The lack of art alone is not a mathematical or rendering defect.
