# Algebraic Topology diagram supplement — lane 01

Reviewed the bound snapshot and both assigned PNG tiles at original resolution. The snapshot SHA256 matches the assignment's bound source hash; the local receipt and tile hashes match their recorded values. No TikZ diagram is present; the displayed commutative square is reviewed below.

## Existing diagram mathematics

**thm-naturality-of-the-homological-serre-spectral-sequence** (snapshot line 31): the square has `u:E→E'`, `f:B→B'`, `p:E→B`, and `p':E'→B'`, with strict commutativity `p'∘u=f∘p`. Restricting `u` over `x∈B` therefore gives `u_x:p⁻¹(x)→(p')⁻¹(f(x))`. These maps induce the forward local-system morphism `ℋ_b(p;R)→f*ℋ_b(p';R)`; hence the stated E₂ map has correct source and target. The proof checks compatibility with fiber transport, all differentials and page transitions, and filtration preservation from cellularity of `f`; its stable-page map agrees with the associated-graded homology map. No index or sign issue found.

## Coverage

The JSON records exact map and fiber domains/codomains, coefficient direction, E₂ map, page naturality, and filtration compatibility. No diagram defect found.
