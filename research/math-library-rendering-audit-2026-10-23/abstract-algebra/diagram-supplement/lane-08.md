# Lane 08 — associativity of balanced tensor products

## Coverage

Reviewed the bound snapshot for `thm-associativity-of-balanced-tensor-products`, statement lines 26–40 and its proof. The snapshot hash matches the current item. Both listed local screenshots were viewed at original resolution: `1200×1400` and `1200×208`; their hashes match the screenshot receipt.

The first capture shows the statement, facts, and most of the proof legibly. The second is the short trailing capture. The receipt reports zero KaTeX errors, zero TikZ diagrams, and zero diagram failures.

## Map, balancing, and action checks

- **Typed associator:** For a right `R`-module `M`, an `(R,S)`-bimodule `N`, and a left `S`-module `P`, the canonical group isomorphism is

  ```text
  α : (M ⊗_R N) ⊗_S P → M ⊗_R (N ⊗_S P)
  ((m ⊗ n) ⊗ p) ↦ m ⊗ (n ⊗ p).
  ```

- **Balancing:** The inner `R` relation is preserved because `(mr ⊗ n) ⊗ p = (m ⊗ rn) ⊗ p`, while on the right `mr ⊗ (n ⊗ p) = m ⊗ ((rn) ⊗ p)`. The outer `S` relation is preserved because `((m ⊗ n)s) ⊗ p = (m ⊗ ns) ⊗ p` maps to `m ⊗ ((ns) ⊗ p) = m ⊗ (n ⊗ sp)`, the image of `(m ⊗ n) ⊗ sp`.
- **Inverse:** The inverse is `β(m ⊗ (n ⊗ p)) = (m ⊗ n) ⊗ p`. The same equalities in reverse verify its `R`- and `S`-balancing. Both composites fix elementary tensors, so they are identities on the tensor products.
- **Outer actions:** If `M` has a compatible left `A`-action and `P` a compatible right `B`-action, commuting with the actions used in the balances, these actions descend to both iterated products. On generators, `α(a·((m⊗n)⊗p)) = am⊗(n⊗p) = a·α((m⊗n)⊗p)` and `α(((m⊗n)⊗p)·b) = m⊗(n⊗pb) = α((m⊗n)⊗p)·b`. Thus `α` is an `(A,B)`-bimodule map; the inverse has the same compatibility.
- **Naturality and indexing:** For compatible maps in `M`, `N`, and `P`, both naturality paths agree on each elementary tensor and hence everywhere. No coset or double-coset indexing occurs in this construction.

## Recommendation

A small reassociation diagram showing the two correctly typed iterated products and the canonical map (optionally with its inverse) is sound and may help orient readers. The proof already makes the balancing and inverse explicit, so the diagram's editorial value is uncertain. The lack of art alone is not a mathematical or rendering defect.
