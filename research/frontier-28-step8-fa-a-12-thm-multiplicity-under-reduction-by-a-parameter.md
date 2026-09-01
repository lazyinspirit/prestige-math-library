# Final-adjudicator evidence: `thm-multiplicity-under-reduction-by-a-parameter`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `7f555e812d0f76816fa96f93f5cba5152f1cce9435415927035619056b5e69e6`.
Exact terminal item hash: `608c943e2b33291ded84dff0bc4fd5b0aff5c3cb1a7ebfa74271fe93c3875c63`.
Exact terminal context hash: `8896d3809fa23da875af41e881557044c39f417bf6e0e4b9031b42bc4058feb1`.

## Material inspected

I read the current theorem, its parameter dependency, the now-repaired local
dimension theorem, and the exact Hilbert-Samuel coefficient conventions; the
Rees/Hilbert-Samuel A/B page pair; batch-2's manifest, coverage, notes, batch
and merged contracts, high-risk and refuter records; both frozen judge
rejections; both exact Alpha adjudications and defect-ledger rows; and both
Alpha repair reports.

The first frozen rejection gave a valid counterexample to the former ordinary
annihilator multiplicity: a lower-dimensional annihilator must contribute zero
at the ambient dimension. Alpha repaired the statement with
dimension-indexed coefficients. The second rejection correctly observed that
ordinary short-exact-sequence additivity does not produce the quotient-minus-
annihilator formula. Alpha replaced it by the Koszul Euler-characteristic
theorem.

## Authoritative verification

I verified the repair against these Stacks Project sources:

- `https://stacks.math.columbia.edu/tag/0AZU`: Definition 43.15.1 defines the
  dimension-indexed coefficient, Theorem 43.15.5 identifies it with the
  alternating lengths of Koszul homology, and Remark 43.15.6 extends the
  finite-length/ideal-of-definition criterion to finite modules.
- `https://stacks.math.columbia.edu/tag/00KD`: the parameter and dimension
  results bound the support dimensions after quotienting by part of a system
  of parameters.

The Koszul sign is correct: taking homology first in the two-term complex on
`x` places `M/xM` in degree zero and `(0:_M x)` in degree one, so the latter
Euler characteristic is subtracted.

## Mathematical determination and independent repair

Alpha's dimension-indexed Koszul formula is correct, but its current statement
and special case still omitted necessary work. I now assume a nonzero module
of support dimension `d>=1` and require the displayed `d`-tuple itself to be a
system of parameters. For `C=M/xM`, one has `C/Q'C=M/QM`, so `Q'` is an ideal
of definition. For `K=(0:_M x)`, the equality `xK=0` gives `Q'K=QK`, and
`Supp(K/Q'K)` lies in `Supp(M) intersect V(Q)={m}`; the cited finite-support
criterion makes this quotient finite length. The parameter theorem and the
dimension theorem then give degrees at most `d-1` for both `Q'` polynomials,
which is exactly the hypothesis needed to apply Theorem 43.15.5 at index
`d-1`.

The finite spectral sequence of the tensor-decomposed Koszul complex preserves
Euler characteristic and yields

`e_Q^[d](M)=e_Q'^[d-1](C)-e_Q'^[d-1](K)`.

If `x` is regular, `K=0`. The dimension theorem gives `deg P_Q,M=d`, so the
left side is the nonzero ordinary multiplicity. Hence the indexed coefficient
of `C` is nonzero; combined with its degree bound, this forces
`deg P_Q',C=d-1`, finally licensing the ordinary multiplicity asserted in the
special case.

I synchronized the precise Choice, nonzero, `d>=1`, system-of-parameters, and
degree-bound hypotheses; replaced the stale manifest additivity edge by the
dimension theorem actually used; and updated both proof contracts and all
boundary/risk records. No dependency item was edited during this resolution.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-2 and merged proof contracts: zero errors and zero warnings.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Required risk report: high, score 7, with complete terminal review.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-2 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
