# Final-adjudicator evidence: `thm-kernel-and-universal-property-of-adic-completion`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `95d92c5be96f7437395b09f6406e2dd8d2be9acaaff289179ec0bc21b2532952`.
Exact terminal item hash: `3e2b1e2eb1c589792c7edef76e1b372f0f2c358fbed5b34b18268b1d14e7769a`.
Exact terminal context hash: `2dc198976e867f3c7d74862a57f82fbfd7e0193e81f8b6904a9848640db2298c`.

Currency note: the theorem's item bytes remain unchanged; this context hash was
refreshed after the final noetherianity theorem on the same A page was
independently repaired.

## Material inspected

I read the current theorem and every dependency, including the exact index
conventions in the completion and filtered-completeness definitions; the
completion A/B page pair; batch-3's manifest, coverage, notes, batch and merged
contracts, critical-risk and refuter records; both frozen judge rejections;
both exact Alpha adjudications and defect-ledger rows; and both Alpha repair
reports.

The first frozen rejection correctly required uniqueness to be restricted to
continuous extensions. Alpha added continuity. The second correctly observed
that agreement on the canonical image does not imply agreement on the whole
completion without a genuine density or quotient-factorization result. Alpha
added a density/Hausdorff argument.

## Authoritative verification

I verified the topology issue against the Stacks Project,
`https://stacks.math.columbia.edu/tag/00M9`.

- The section defines `M-hat` as the inverse limit of `M/I^nM` and functorially
  constructs maps on completions.
- Definition 10.96.2 defines adic completeness through the canonical
  inverse-limit map.
- Crucially, Lemma 10.96.5 distinguishes
  `K_n=ker(M-hat -> M/I^nM)` from `I^n M-hat`; equality for all `n` is
  equivalent to `M-hat` itself being adically complete and is false in general.

## Mathematical determination and independent repair

Alpha's density idea was directionally right, but its repaired proof called
cosets modulo `I^n M-hat` the basic inverse-limit cosets. That identification
is false for arbitrary ideals and modules, exactly as Lemma 10.96.5 records.

The theorem now equips `M-hat` with the inverse-limit topology whose basic
submodules are `K_n=ker(pi_n^M)`, while the complete target `N` keeps its
I-adic topology. The compatible quotient maps give `tilde f` with

`pi_n^N tilde f = f_n pi_n^M`,

so `tilde f(K_n)` lies in `ker(pi_n^N)` and is continuous. Completeness makes
`kappa_N:N -> lim N/I^nN` a bijection; the inverse-limit basic submodule pulls
back to `I^nN`, hence this bijection is a homeomorphism. This proves existence
and continuity of `f-hat`.

For density, a representative of the single class `pi_n^M(x)` gives an
element `m` with `x-kappa_M(m)` in `K_n`. If a continuous difference map to
the separated target were nonzero at `x`, an I-adic coset excluding zero would
pull back to an open neighbourhood of `x`; density would put a canonical-image
point in it, contradicting that the difference vanishes there. Thus uniqueness
is complete without assuming `I` finite.

I also synchronized all indices to `n>=1`, explained why the kernel
intersection may start at zero, added the adic-topology dependency, removed the
unused left-exactness manifest edge, adopted precheck's phase ordering, and
updated both contract carriers and boundary/risk records. No dependency item
was edited.

## Focused checks

- `precheck`: one item checked, zero failures after adopting canonical phase
  order.
- Strict batch-3 and merged proof contracts: zero errors and zero warnings.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Required risk report: critical, score 13, with complete terminal review.
- Citation fidelity: no missing quote or widening candidate.
- Boundary audit: no contradiction or template.
- Batch-3 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
