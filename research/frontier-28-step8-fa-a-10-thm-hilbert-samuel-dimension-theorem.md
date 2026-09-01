# Final-adjudicator evidence: `thm-hilbert-samuel-dimension-theorem`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `8b363c7fcf9b1bdef26d2e262f1c38bf7bde6bb3b753a7fa5fe2f985aa878494`.
Exact terminal item hash: `a7ff5683d4a70d2d2ec78217cdc6b5752408b7fbd9f75a719a10332cd344979d`.
Exact terminal context hash: `46baece06e34946c4f2c2dd4819060a115ed97bba797ae5eaf5821c273563113`.

Currency note: the theorem's item bytes remain unchanged; this context hash was
refreshed after the later parameter-reduction theorem on the same A page was
independently repaired.

## Material inspected

I read the current theorem and every dependency, including the independent
dimension/parameter theorem and the repaired additivity theorem; the
Rees/Hilbert-Samuel A page and B companion; batch-2's manifest, source coverage,
notes, batch and merged contracts, critical-risk and refuter records; both
frozen judge rejections; both exact Alpha adjudications and defect-ledger rows;
and both Alpha repair reports. The parameter theorem is proved from Krull
dimension and height results and does not depend back on this theorem, so the
current dependency graph is noncircular.

## Authoritative verification

I verified the proof against these authoritative Stacks Project sections:

- `https://stacks.math.columbia.edu/tag/00KD`: Proposition 10.60.9 proves the
  equality between Krull dimension, Hilbert-Samuel degree, and the least number
  of generators of an ideal of definition. It separates the zero-dimensional
  case, uses the monomial bound for a positive number of parameters, and in the
  reverse inequality passes from a prime chain to the injective multiplication
  sequence in the domain quotient.
- `https://stacks.math.columbia.edu/tag/00K4`: Lemma 10.59.10 supplies the
  exact degree behavior in short exact sequences used in that induction.

## Mathematical determination and independent repair

Alpha's second repair correctly compared the `J`-adic and parameter-ideal
`Q`-adic filtrations before applying the monomial count. Several fatal seams
nevertheless remained.

First, the monomial count `binomial(n+d-1,d-1)` is undefined at `d=0`; the
repaired proof handles `Q=0` separately, where `A` has finite length and the
Hilbert-Samuel polynomial is constant. Second, finite generation of `J` and
`Q` is now cited before equal radicals are converted into mutual power
containments. Third, the determinant-trick base case now cites the local-unit
criterion and carries its Axiom-of-Choice hypothesis.

Most importantly, the former step 1.4 used a five-term sequence that was not
short exact and did not justify a degree drop. For a prime `p_0`, the quotient
`B=A/p_0` is a domain. The selected `x` has nonzero image in `B`, so

`0 -> B --x--> B -> C=B/xB -> 0`

is genuinely short exact. The quotient inequality gives
`deg P_B <= deg P_A`. Applying top-degree additivity to the displayed sequence
forces `deg P_C < deg P_B`: otherwise the nonzero leading coefficient of
`P_C` would have to vanish after the two copies of `P_B` cancel. The remaining
prime chain descends to `C`, and the induction hypothesis bounds its length.
This proves the reverse dimension inequality without circularity.

I added the explicit Choice, finite-ideal, and local-unit interfaces; rewrote
the `d=0`, `r=0`, and prime-chain branches; replaced the stale manifest edges
to later parameter results by the seven dependencies actually used; refreshed
the changed additivity citation; and synchronized both contract carriers. No
dependency item was edited while resolving this queue position.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-2 and merged proof contracts: zero errors and zero warnings.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Required risk report: critical, score 11, with complete terminal review.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-2 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
