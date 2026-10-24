# Round 04 diagram supplement lane 01

## Scope and evidence

Reviewed only `thm-factorization-of-birational-morphisms-of-smooth-surfaces`. The assignment-bound snapshot SHA256 is `2f87b95722ec7b429ce227c52e0fde336ad4681c5af86d413a37324ddf437560`, matching the assignment. Inspected all three listed local PNG tiles at original resolution:

- `screenshots/thm-factorization-of-birational-morphisms-of-smooth-surfaces--01.png` — SHA256 `91ef43ca89a3f3ecdd183da5e3a69b0642be9b836ba826a3390a268be64030fe`.
- `screenshots/thm-factorization-of-birational-morphisms-of-smooth-surfaces--02.png` — SHA256 `69c42ef57fd14777eb0d1f31996681f3683fea507619819c8cd28f511f95c4ed`.
- `screenshots/thm-factorization-of-birational-morphisms-of-smooth-surfaces--03.png` — SHA256 `685b56aa2a5742ee847275e34500ebaa89e9a077da436041de0302e3b5e4da82`.

The tiles show the statement, facts, proof, and remarks. No diagram appears. The local render receipt reports `katex_errors=[]`, `tikz_count=0`, and `diagram_failures=[]`.

## Finding

An optional indexed factorization ladder is recommended. The exact claim is lines 53–58: `X₀=Y`, schemes `X₁,…,Xₙ` with `Xₙ≅X` over `Y`, centers `yᵢ₋₁∈Xᵢ₋₁` whose local rings are regular of dimension two, and blowup maps `bᵢ:Xᵢ=Bl_{yᵢ₋₁}Xᵢ₋₁→Xᵢ₋₁`.

Show the arrows descending in index:

`X --φ≅--> Xₙ --bₙ--> Xₙ₋₁ → ⋯ → X₁ --b₁--> X₀=Y`.

Then `b₁∘b₂∘⋯∘bₙ:Xₙ→Y`, and composing with the stated isomorphism `X→Xₙ` gives `f:X→Y`. Each arrow has the stated source and target and is the blowup at the closed regular point on its target. For `n=0`, the blowup ladder is empty and the assertion says `X≅Y` over `Y`. The indexing and composite order agree with the source. The diagram is explanatory; no mathematical inconsistency was found.
