# Round 05 diagram supplement lane 01

## Scope and evidence

Reviewed only `lem-canonical-resolution-over-nonclosed-fields`. The assignment-bound snapshot SHA256 is `a224045b490b1061f40ff548650f502dbf17bdce2cb28a314513c149283d7a70`, matching the assignment. Inspected both listed local PNG tiles at original resolution:

- `screenshots/lem-canonical-resolution-over-nonclosed-fields--01.png` — SHA256 `94bc4ecec5c9457f2eb8bc9edd7ebf99fe3a2dde1909d11b8b29512d97f0be2b`.
- `screenshots/lem-canonical-resolution-over-nonclosed-fields--02.png` — SHA256 `0d4aeacccffd5bc0972605b8aa71d26f888beddd1248840c22bbf7c31d40aec8`.

The tiles show the statement, facts, and proof. There is no displayed diagram. The local render receipt reports `katex_errors=[]`, `tikz_count=0`, and `diagram_failures=[]`.

## Finding

An optional Galois-equivariant descent diagram is recommended. The relevant statement is lines 45–47, with setup in line 51 and the algebraically closed resolution and Galois action in lines 55 and 57. A useful schematic would show:

1. The faithfully flat base change `π:X̄=X×_K K̄→X` and the pullback `(Ī,Ē,μ)` of `(I,E,μ)`.
2. Over `K̄`, the canonical resolution stages `X̄ᵢ` with blowups `X̄ᵢ₊₁=Bl_{C̄ᵢ}X̄ᵢ→X̄ᵢ`.
3. The semilinear action of each `σ∈G=Aut_K(K̄)` on the stages, preserving each canonical center `C̄ᵢ` and the invariant strata.
4. The descended centers `Cᵢ⊂Xᵢ` and the corresponding blowups over `K`, with cartesian squares identifying `Xᵢ×_K K̄` with `X̄ᵢ` at each stage.

The directions match the construction: stage `i+1` maps to stage `i`, with the center in stage `i`; the field-extension projection maps the barred object to its K-model. The Galois action comes from semilinear naturality, while compatibility with smooth morphisms is a separate claim and should not be conflated with that action. No inconsistency in the described maps or descent relations was found. The diagram would clarify their relationship; its absence is not a mathematical error.
