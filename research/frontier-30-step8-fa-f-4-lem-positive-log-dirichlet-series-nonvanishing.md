# Final-adjudicator evidence: `lem-positive-log-dirichlet-series-nonvanishing`

## Disposition

`accepted-after-review`

## Mathematical basis

I independently checked the item, its Landau-theorem dependency, the
number-theory A/B-page context, batch-8 coverage, the batch and merged proof
contracts, boundary records, both frozen judge rejections, defects
`frontier-30-S8-f-025` and `frontier-30-S8-f-045`, and the Alpha recovery
adjudication.

For a putative zero at `1+i t_0` with `t_0 != 0`, absolute convergence of the
logarithmic Dirichlet series gives the real-part identity used in step 1.1.
The trigonometric polynomial
`3 + 4 cos(theta) + cos(2 theta) = 2(1+cos(theta))^2` is nonnegative, so the
weighted product has modulus at least one.  At the boundary, the factors have
orders at worst `-3`, at least `4`, and at least `0`, respectively: the simple
pole at `1`, the fourth power of the zero at `1+i t_0`, and boundedness at
`1+2i t_0`.  The product is therefore `O(sigma-1)`, a contradiction.  The
first frozen counterexample is excluded precisely by the repaired hypothesis
that there are no other poles on the closed half-plane.

At `t_0=0`, the Alpha's second repair is decisive and does not misuse Landau:
the identity at real `sigma>1` gives
`log |F(sigma)| = sum b_n n^{-sigma} >= 0`, hence `|F(sigma)| >= 1`; this is
incompatible with holomorphy and a zero at `1`.  The Landau fact is redundant
to this endpoint argument but is stated accurately and is not used to infer
the contradiction.

Authoritative verification:

- https://kskedlaya.org/ant/chap-lfunc.html — Lemma 3.6 states the same
  nonvanishing criterion for a meromorphic function with at worst a simple
  pole at the boundary point, no other poles, and a logarithm represented by a
  nonnegative-coefficient Dirichlet series.  The surrounding section applies
  it to the product of Dirichlet L-functions.
- https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf — the
  cited university analytic-number-theory notes provide the standard
  nonnegative logarithmic-series boundary-nonvanishing argument used by the
  item.

No item, dependency, contract, or metadata edit was needed.

Focused checks:

- phase-format precheck of the lemma;
- strict batch-8 and merged proof-contract checks for the lemma;
- batch-8 citation-fidelity check.

