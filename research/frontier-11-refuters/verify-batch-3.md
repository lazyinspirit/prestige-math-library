## Your cluster — `vfy-batch-3`: batch 3 — formal power series (order 193) and extremal graph theory (order 219)

Your artifact is **`research/frontier-11-batch-3.proof-contracts.json`**.
The items are under `items/<id>.md` and are **frozen** — read them, never edit.

**This batch carried 174 rows of the template** "The authored proof addresses
this boundary and closes it in step $N.1$." — which names a step but asserts
nothing about it. They survived every earlier round and were cleared only in the
round you are checking: 127 rewritten to `checked` with new evidence, 47 flipped
to `not_applicable`.

**Six of them were positively verified FALSE** by an earlier refuter. Check each
of these six first, and report what the row says now and whether it is true:

| item | case | why it was false |
|---|---|---|
| `thm-lagrange-burmann-inversion` | `zero` | theorem assumes $n\ge1$; $1/n$ undefined at $n=0$ |
| `ex-lagrange-inversion-catalan-coefficients` | `zero` | treats only $n\ge1$ |
| `ex-formal-geometric-series` | `empty` | no empty family occurs |
| `cex-nonsummable-constant-family` | `empty` | index set is fixed as $\mathbb N$ |
| `thm-formal-power-series-ring-and-polynomial-embedding` | `empty` | no empty object treated |
| `thm-x-adic-completeness-and-polynomial-density` | `empty` | no empty object treated |

The other 78 template rows were never individually assessed by anyone. They are
now yours.

Also rule on the `iff` rows of `thm-turan-exact-and-unique` and
`cor-chromatic-number-extremal-density`: both Statements are genuine
biconditionals and both had their `iff` rows marked `not_applicable`.

### Priority items — rule on each of these explicitly

- `thm-lagrange-burmann-inversion`
- `ex-lagrange-inversion-catalan-coefficients`
- `ex-formal-geometric-series`
- `cex-nonsummable-constant-family`
- `thm-formal-power-series-ring-and-polynomial-embedding`
- `thm-x-adic-completeness-and-polynomial-density`
- `thm-turan-exact-and-unique`
- `cor-chromatic-number-extremal-density`

### Every row changed in the repair round, by item

These are the rows the Beta changed. Each is a claim that the row is now true of
the frozen item text. Work down the list; report coverage honestly and do not
extrapolate to rows you did not open.

- `cex-formal-composition-with-nonzero-constant`
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `cex-formal-nonunit-has-no-inverse`
    - quotes changed: F1<-thm-formal-power-series-unit-criterion (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[not_applicable]
- `cex-nonsummable-constant-family`
    - boundary rows changed: empty[not_applicable], zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `cor-bipartite-extremal-density-zero`
    - boundary rows changed: empty[not_applicable], zero[not_applicable], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `cor-chromatic-number-extremal-density`
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `cor-formal-series-over-a-field-is-a-local-domain`
    - quotes changed: F3<-thm-formal-power-series-unit-criterion (uses 1.2,2.1); F4<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.2)
    - boundary rows changed: zero[checked], one[checked], degenerate[not_applicable], iff-forward[checked], iff-reverse[checked]
- `cor-turan-ramsey-lower-bound`
    - boundary rows changed: zero[not_applicable], one[checked], degenerate[not_applicable], endpoints[checked]
- `cor-unique-formal-root-with-constant-one`
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `ex-five-cycle-k-two-two-free`
    - boundary rows changed: zero[checked], one[checked], degenerate[not_applicable]
- `ex-formal-geometric-series`
    - quotes changed: F1<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.1); F2<-prop-coefficient-extraction-linearity-and-extensionality (uses 2.1); F3<-thm-formal-power-series-unit-criterion (uses 2.1)
    - boundary rows changed: empty[not_applicable], zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `ex-formal-series-over-zmod-four`
    - boundary rows changed: zero[checked], one[not_applicable], degenerate[checked]
- `ex-formal-square-root-one-minus-four-x`
    - quotes changed: F2<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], endpoints[checked]
- `ex-lagrange-inversion-catalan-coefficients`
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `ex-mantel-balanced-complete-bipartite`
    - boundary rows changed: zero[not_applicable], one[not_applicable]
- `ex-near-extremal-triangle-free-graph`
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[not_applicable]
- `ex-negative-binomial-series`
    - quotes changed: F1<-thm-formal-power-series-unit-criterion (uses 1.1); F2<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.1,3.1); F4<-thm-stars-and-bars (uses 2.1); F5<-def-binomial-coefficient (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `ex-odd-cycle-extremal-density`
    - quotes changed: F2<-def-proper-vertex-colouring-and-chromatic-number (uses 1.1,2.1)
    - boundary rows changed: zero[not_applicable], one[checked], degenerate[checked], endpoints[checked]
- `ex-petersen-extremal-density`
    - quotes changed: F1<-def-petersen-graph (uses 1.1,1.2); F2<-def-proper-vertex-colouring-and-chromatic-number (uses 1.1,1.2)
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[not_applicable]
- `ex-reversion-of-x-over-one-minus-x`
    - quotes changed: F1<-thm-formal-composition-laws (uses 1.1); F2<-thm-formal-power-series-unit-criterion (uses 1.1,2.1); F3<-prop-coefficient-extraction-linearity-and-extensionality (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `ex-turan-graph-t-ten-three`
    - quotes changed: F1<-lem-turan-graph-edge-count-and-balance (uses 1.1)
    - boundary rows changed: zero[not_applicable], one[checked], degenerate[not_applicable]
- `ex-turan-ramsey-colouring-witness`
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[not_applicable]
- `fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph`
    - quotes changed: F2<-def-proper-vertex-colouring-and-chromatic-number (uses 1.1)
    - boundary rows changed: zero[not_applicable], one[not_applicable], degenerate[checked], endpoints[checked]
- `fs-every-triangle-free-graph-is-bipartite`
    - boundary rows changed: degenerate[not_applicable]
- `lem-colouring-embeds-a-graph-in-a-balanced-blowup`
    - quotes changed: F1<-def-proper-vertex-colouring-and-chromatic-number (uses 1.1,2.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], nonempty-choice[checked]
- `lem-formal-order-laws`
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `lem-formal-residue-identities`
    - quotes changed: F3<-thm-formal-power-series-unit-criterion (uses 1.2,2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `lem-kst-common-neighbour-double-count`
    - quotes changed: F3<-thm-double-counting (uses 1.1); F4<-def-binomial-coefficient (uses 1.2,2.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `lem-turan-graph-edge-count-and-balance`
    - quotes changed: F1<-def-extremal-number-turan-graph-and-blowup (uses 1.1); F3<-def-binomial-coefficient (uses 1.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `lem-zykov-symmetrisation`
    - quotes changed: F1<-def-extremal-number-turan-graph-and-blowup (uses 1.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `prop-coefficient-extraction-linearity-and-extensionality`
    - quotes changed: F3<-def-formal-power-series-and-coefficient-extraction (uses 1.3)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `prop-formal-derivative-algebra`
    - quotes changed: F1<-def-formal-power-series-derivative (uses 1.1,1.2); F2<-def-binomial-coefficient (uses 1.2); F3<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.3); F4<-thm-formal-power-series-unit-criterion (uses 1.3); F5<-thm-summable-families-and-rearrangement (uses 2.2)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `prop-normalized-extremal-number-monotonicity`
    - quotes changed: F2<-def-subgraph-induced-subgraph-and-spanning-subgraph (uses 1.1); F3<-thm-double-counting (uses 2.1)
    - boundary rows changed: empty[not_applicable], zero[not_applicable], one[not_applicable], endpoints[checked], nonempty-choice[checked]
- `thm-erdos-stone-for-balanced-blowups`
    - boundary rows changed: zero[not_applicable], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `thm-erdos-stone-simonovits`
    - quotes changed: F1<-def-proper-vertex-colouring-and-chromatic-number (uses 1.1)
    - boundary rows changed: empty[not_applicable], zero[not_applicable], one[not_applicable], degenerate[checked], endpoints[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `thm-extremal-graph-supersaturation`
    - quotes changed: F2<-thm-double-counting (uses 1.1,3.1)
    - boundary rows changed: empty[not_applicable], zero[not_applicable], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `thm-formal-composition-laws`
    - quotes changed: F2<-thm-summable-families-and-rearrangement (uses 1.1,1.2); F3<-thm-summable-families-and-rearrangement (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked]
- `thm-formal-compositional-inverse`
    - quotes changed: F1<-thm-formal-composition-laws (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `thm-formal-exponential-logarithm-identities`
    - quotes changed: F1<-def-formal-exponential-logarithm-and-powers (uses 1.1,1.2); F2<-def-formal-exponential-logarithm-and-powers (uses 1.3,2.1); F4<-thm-summable-families-and-rearrangement (uses 1.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `thm-formal-power-laurent-dictionary`
    - quotes changed: F2<-thm-formal-power-series-unit-criterion (uses 1.2); F4<-lem-laurent-valuation (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `thm-formal-power-series-ring-and-polynomial-embedding`
    - quotes changed: F1<-def-formal-power-series-and-coefficient-extraction (uses 1.1)
    - boundary rows changed: empty[not_applicable], zero[checked], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `thm-formal-power-series-unit-criterion`
    - quotes changed: F1<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.1,1.2); F2<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.2)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked], iff-forward[checked], iff-reverse[checked]
- `thm-hypergraph-kovari-sos-turan-bound`
    - quotes changed: F3<-thm-double-counting (uses 1.1,2.1); F4<-lem-kst-common-neighbour-double-count (uses 3.1)
    - boundary rows changed: empty[not_applicable], zero[not_applicable], one[not_applicable], degenerate[checked], endpoints[checked]
- `thm-kovari-sos-turan-bound`
    - quotes changed: F1<-lem-kst-common-neighbour-double-count (uses 1.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `thm-lagrange-burmann-inversion`
    - quotes changed: F1<-thm-formal-power-series-unit-criterion (uses 1.1)
    - boundary rows changed: zero[not_applicable], one[checked], degenerate[checked], endpoints[checked]
- `thm-mantel-exact-and-unique`
    - quotes changed: F1<-def-extremal-number-turan-graph-and-blowup (uses 1.1,2.1); F3<-lem-turan-graph-edge-count-and-balance (uses 2.1,4.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `thm-summable-families-and-rearrangement`
    - quotes changed: F3<-prop-coefficient-extraction-linearity-and-extensionality (uses 1.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[not_applicable]
- `thm-turan-density-exists`
    - quotes changed: F2<-thm-monotone-convergence (uses 2.1)
    - boundary rows changed: zero[not_applicable], one[not_applicable], endpoints[checked]
- `thm-turan-exact-and-unique`
    - quotes changed: F1<-def-extremal-number-turan-graph-and-blowup (uses 1.1); F3<-lem-turan-graph-edge-count-and-balance (uses 1.1,1.2,2.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `thm-x-adic-completeness-and-polynomial-density`
    - quotes changed: F3<-prop-coefficient-extraction-linearity-and-extensionality (uses 2.1)
    - boundary rows changed: empty[not_applicable], zero[checked], one[checked], degenerate[checked], endpoints[checked]
