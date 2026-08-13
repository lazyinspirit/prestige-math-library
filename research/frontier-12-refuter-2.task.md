## refuter-2 — Green's theorem, the Poincaré lemma, and the line-integral development

You are **read-only**. You cannot write files, and you never propose an edit
directly into content — you report evidence and Alpha adjudicates it from disk.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 241 | A | `line-integrals-and-the-gradient-theorem` | 31 |
| 242 | B | `line-integrals-and-the-gradient-theorem-examples` | 9 |

**40 items.** Every id below is a file at `items/<id>.md`.

The batch's own record — what the author promised — is the matching
`research/frontier-12-batch-<i>.notes.md` and
`research/frontier-12-batch-<i>.proof-contracts.json`. The merged contract is
`research/frontier-12-proof-contracts.json`.

### Where the exposure is

Decision D2 scoped Green's theorem to **elementary regions and finite unions**.
That it does not cover arbitrary Jordan domains is deliberate and stated in
`rem-greens-theorem-jordan-domain-limitation` — complaining about it is not a
finding. **A proof step that quietly assumes a Jordan domain IS a finding.**

Concentrate on:

- `lem-green-boundary-cancellation-under-finite-gluing`. This is where a
  hand-wave would hide. The claim is that shared internal arcs cancel and that
  piece integrals sum to the union integral. Check that every hypothesis it uses
  is actually supplied by `def-type-i-type-ii-and-elementary-green-regions` —
  in particular that the decomposition being *part of the data* is what licenses
  "each positive-length internal arc belongs to exactly two pieces with opposite
  induced orientations", and that this is not silently inferred. Check the
  content-zero argument in steps 1.2 and 3.1 and the bound on `|q|`.
- `lem-green-type-i-boundary-identity` and `lem-green-type-ii-boundary-identity`.
  These are the real analytic content. Check the Fubini application, the
  orientation of each of the four boundary pieces, and the degenerate case where
  a side collapses (alpha = beta at an endpoint is permitted by the definition).
- `def-positive-orientation-for-elementary-region-boundaries`. Check that [L2] of
  the gluing lemma states what this definition actually says.
- `thm-poincare-lemma-for-star-shaped-domains` with `def-star-shaped-open-subset-of-rn`.
  **Star-shaped versus merely connected is the live hypothesis risk.** Check
  differentiation under the integral sign is licensed by a cited result, not
  assumed, and that `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains`
  does not quietly upgrade star-shaped to connected.
- `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane` — verify the
  computation, and that it genuinely marks the boundary of the Poincaré lemma.
- `thm-path-independent-field-has-a-potential-by-line-integrals` and
  `thm-conservative-path-independent-and-zero-loop-equivalence`. Check **both
  directions** of every equivalence and that path-connectedness is in force where
  the potential is constructed.

### Item ids


**`line-integrals-and-the-gradient-theorem`**

- `def-piecewise-c1-path-operations-and-oriented-reparametrizations`
- `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`
- `lem-line-integrals-are-independent-of-the-piecewise-c1-partition`
- `thm-line-integrals-under-oriented-reparametrization`
- `thm-line-integrals-under-reversal-and-concatenation`
- `thm-scalar-and-vector-line-integral-estimates`
- `cor-scalar-line-integral-of-one-is-arc-length`
- `cor-arc-length-accumulation-derivative-is-speed`
- `def-piecewise-c1-path-connected-conservative-and-path-independent`
- `thm-gradient-theorem-for-line-integrals`
- `cor-conservative-fields-are-path-independent-and-have-zero-circulation`
- `thm-path-independence-iff-zero-closed-loop-integrals`
- `thm-path-independent-field-has-a-potential-by-line-integrals`
- `thm-conservative-path-independent-and-zero-loop-equivalence`
- `cor-potentials-differ-by-a-componentwise-constant`
- `lem-potentials-glue-over-a-path-connected-overlap`
- `def-closed-and-exact-c1-vector-fields`
- `lem-clairaut-for-c2-potentials-by-rectangular-differences`
- `thm-exact-c1-vector-fields-are-closed`
- `def-star-shaped-open-subset-of-rn`
- `thm-poincare-lemma-for-star-shaped-domains`
- `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains`
- `def-type-i-type-ii-and-elementary-green-regions`
- `def-positive-orientation-for-elementary-region-boundaries`
- `lem-green-type-i-boundary-identity`
- `lem-green-type-ii-boundary-identity`
- `lem-green-boundary-cancellation-under-finite-gluing`
- `thm-greens-theorem-for-finite-unions-of-elementary-regions`
- `cor-area-as-a-line-integral-for-elementary-regions`
- `rem-greens-theorem-jordan-domain-limitation`
- `rem-domain-hypotheses-for-closed-versus-exact`

**`line-integrals-and-the-gradient-theorem-examples`**

- `ex-scalar-line-integral-over-a-unit-semicircle`
- `ex-line-segment-scalar-and-vector-line-integrals`
- `ex-gradient-theorem-for-a-polynomial-potential`
- `ex-constructing-a-potential-on-an-open-rectangle`
- `cex-the-one-form-y-dx-is-path-dependent`
- `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`
- `fs-every-closed-c1-field-on-a-connected-open-set-is-exact`
- `fs-vector-line-integrals-are-invariant-under-reversal`
- `ex-a-vector-line-integral-counts-multiple-traversals`
