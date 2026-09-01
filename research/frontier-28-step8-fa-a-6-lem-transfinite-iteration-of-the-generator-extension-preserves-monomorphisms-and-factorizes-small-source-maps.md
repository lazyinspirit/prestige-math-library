# Final-adjudicator evidence: `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `86690767331209716fc9a0cb014c08a6bf0ca27b8fb9efb6bb071ca9dfbfb8ff`.
Exact terminal item hash: `2255801d23570a1eb58dd03ff99d935523f96fd331f57dfcd71a2561ada96920`.
Exact terminal context hash: `bc3015b8117d99e6dbd23bf440257cd07a5c3d24d1a4afa820fb3979e311b85f`.

## Material inspected

I read the current lemma, all four dependencies, and the one-step construction;
the projective/injective-resolutions A page and B companion; batch-8's
manifest, source coverage, notes, batch and merged contracts, critical-risk
record, and refuter scope; both frozen judge rejections; both exact Alpha
adjudications and defect-ledger rows; and both Alpha repair reports.

The first frozen rejection correctly rejected cofinality alone as a
small-source factorization argument. Alpha repaired it by using the increasing
preimages of the monic stages inside the fixed source. The second rejection
correctly required local smallness to form the one-step index sets and invoke
well-poweredness. Alpha added that hypothesis.

## Authoritative verification

I verified the repaired mechanism against the Stacks Project,
`https://stacks.math.columbia.edu/tag/05AB`.

- Lemma 19.11.1 bounds increasing chains and the number of subobjects using a
  generator.
- Proposition 19.11.5 proves the precise factorization result: for a map into
  a high-cofinality colimit of injections, the preimages of the stages form an
  increasing family; AB5 makes their union the whole source; representatives
  of the at-most-boundedly-many distinct preimages have a common upper bound
  below the limit ordinal.
- Theorem 19.11.7 applies that proposition to the same transfinite one-step
  generator-extension tower.

## Mathematical determination

Alpha's preimage repair is correct. Successor transitions are monic by the
one-step lemma. For a fixed earlier stage and a limit target, exactness of the
filtered colimit of the short exact sequences beginning with that fixed stage
shows its canonical map into the limit stage is monic. Thus the entire tower
is a tower of subobjects.

For `f:N -> M_lambda`, set `N_alpha=f^{-1}(M_alpha)`. AB5 gives

`join_(alpha<lambda) N_alpha = f^{-1}(join M_alpha)=N`.

Only boundedly many distinct subobjects can occur. Representative indices for
them form a set of size at most `kappa`, hence are bounded below `lambda` when
`cf(lambda)>kappa`. At such a bound `gamma`, `N_gamma` contains every preimage,
so it equals their join `N`, exactly saying that `f` factors through
`M_gamma`.

I independently repaired the remaining foundations and contract residue. The
current proof well-orders the relevant subobject sets as cardinals and chooses
representative indices, so under this library's explicit-foundations
convention it needs the Axiom of Choice; the statement and Given now say so.
The limit-stage monicity argument is written as a filtered colimit of short
exact sequences, and the cofinality argument now follows the authoritative
representative-set proof. I removed the extraneous final assertion that the
factorized map extends one stage later, preserving the intended separation
between this lemma and the one-step extension lemma used by queue item 4. The
well-poweredness dependency is also synchronized into the batch manifest and
both proof contracts. No dependency item was edited during this resolution.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-8 and merged proof contracts: zero errors and zero warnings.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Required risk report: `critical`, score 11, with a complete terminal review
  and no error.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-8 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
