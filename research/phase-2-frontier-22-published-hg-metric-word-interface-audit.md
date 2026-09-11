# Frontier-22 published HG metric and word-interface audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit covers six previously unclassified published metric,
geodesic, word-metric and group-power interfaces directly used by active HG
work. All six complete items and the exact coarse-map/nonnegativity clauses were
read. Before adding rows, the canonical index and whole ledger were searched by
exact IDs, titles, aliases, and the endpoint, strong-triangle, word-path and
integer-power mechanisms. The six IDs were absent. `def-metric-space` and
`lem-group-power-laws` aliases were also checked. Existing rows for both
coarse-map definitions, the word-ball proposition, the quasi-isometry
characterization and its affected consumer were retained unchanged.

This does not audit every metric-space or Cayley-graph dependency. No published
item or workflow state was edited.

## Exact bounded dispositions

| Item | SHA-256 | Evidence |
|---|---|---|
| `def-metric-space` | `6f2a4cb0a3b4f0cb850406c4c3e811a0bcd06546c9d0e0ff11f83310d4ed7535` | Separation, symmetry and triangle inequality force nonnegativity by the published lemma. Its independent strong-triangle branch directly proves nonnegativity before deriving the ordinary triangle inequality, so the ultrametric equivalence remark is not circular. Aliases `def-metric`, `def-pseudometric` and `def-ultrametric` name this same item. |
| `def-geodesic-and-geodesic-metric-space` | `72cd3ac4ca68293e1778c43a787c6f74cf257e96acc529690a7976c3726d4b98` | An isometric interval map with fixed endpoints forces its length to be the endpoint distance. Degenerate equal-endpoint segments and the uniform every-pair space condition are coherent. |
| `def-quasi-geodesic-and-quasi-geodesic-metric-space` | `68f9bf086eac921571166174a6fccf80772146185b5e3b0bd736fdd4b2dbbbbd` | The two-sided `(lambda,c)` inequalities use `lambda>=1,c>=0`, bounded closed segment intervals and one uniform pair of constants for a quasi-geodesic space. These are the exact conventions used by the active toolkit. |
| `def-word-metric` | `321e119143b1ea608ad8e3cb6ea3d4eca81fbecb5f6ae12a0ae3ded107f1fe13` | `d_S(g,h)=|g^{-1}h|_S` is defined for a generating set, and the already-read word-length laws give separation, symmetry and triangle inequality. |
| `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph` | `590914619da208928bad2462549cd8d9866cd23a08253dcce2437b0d7c377970` | Group cancellation gives left invariance. Paths from `g` to `h` are exactly expressions for `g^{-1}h`; identity generators may be deleted, so excluding loops in the simple Cayley graph does not change the minimum. |
| `lem-group-power-laws` | `7d701a4db30ccebb5a0fcb6b92fe2cb7bd3253d9dea61bb48b751f38daa15ffa` | Natural induction proves addition and commuting-product laws, and the integer normal form plus inverse laws extends them to negative exponents. The potentially false `(gh)^n` identity is explicitly restricted to commuting elements. Alias `lem-exponent-laws-in-a-group` is the same item. |

## Frontier disposition and limits

No new defect, choice hypothesis, Phase-2 supplier or live blocker was found in
these exact interfaces. The active word-ball proposition's already-recorded
identity-letter wording error and the separate quasi-isometry lower-bound gaps
remain A-P and are neither duplicated nor closed here. No fresh external source
retrieval was needed; the local proofs expose the exact algebraic and metric
steps and cite standard references.
