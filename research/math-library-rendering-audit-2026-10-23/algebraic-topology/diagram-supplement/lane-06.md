# Diagram supplement review: lane 06

## `thm-naturality-of-the-long-exact-sequence-of-a-pair`

**Verdict: warranted; classification: uncertain.** The statement says a map of pairs induces a commuting morphism of long exact sequences, including the connecting maps (lines 28–29). Proof line 39 identifies the induced maps on the subspace, ambient space, and quotient/relative chains; line 41 specifically cites the chain identity at the connector. A ladder would make the naturality claim and its map types easier to check. This is an editorial recommendation, not a finding of mathematical error.

Proposed schematic:

```text
... → H_n(A) → H_n(X) → H_n(X,A) --∂_(X,A)--> H_(n−1)(A) → H_(n−1)(X) → ...
       |             |               |                              |
       | (f|_A)_*    | f_*           | f_*^rel                      | (f|_A)_*
       v             v               v                              v
... → H_n(B) → H_n(Y) → H_n(Y,B) --∂_(Y,B)--> H_(n−1)(B) → H_(n−1)(Y) → ...
```

The vertical relative map is induced by the map of pairs, which requires `f(A)⊆B`. Include the adjacent `H_n(X)→H_n(X,A)` and `H_n(Y)→H_n(Y,B)` quotient arrows, and their neighboring LES arrows, in a full ladder; every square should commute. The connector square has common source `H_n(X,A)` and target `H_(n−1)(B)` and states
`(f|_A)_* ∘ ∂_(X,A) = ∂_(Y,B) ∘ f_*^rel`.
Its degree drops by one. The stated chain identity gives the connector equality without an additional sign. The ladder is explanatory and does not replace the short exact sequence of chain complexes or its naturality argument.

Evidence: the bound snapshot SHA256 is `482fb4820bc76657ffc89bc577053955a9c7867518e6ba49eed412300cbd877c`, matching the source item. Reviewed the assigned local screenshot at original resolution: `thm-naturality-of-the-long-exact-sequence-of-a-pair--01.png` (SHA256 `70b7149081dcb14e533b7393a430c4ac5d4f7de4c421a92e1c978fa70a6db859`). It shows the statement and proof with no ladder. Its receipt records `tikz_count: 0`, no diagram failures, and no KaTeX errors.
