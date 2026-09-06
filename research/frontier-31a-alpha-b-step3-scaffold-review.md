# frontier-31a · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `8`, `9`, and `10`: five A/B pairs in the
homological-algebra route. The current A-page verdicts are in
`research/frontier-31a-alpha-b-step3-verdicts.json`.

## Material reviewed

- Batch 8: `research/frontier-31a-batch-8.pages.json`,
  `research/frontier-31a-batch-8.coverage.json`, and
  `research/frontier-31a-batch-8.notes.md`; controlling design HA-8
  (lines 1661–1813) and HA-9 (1814–1993) in
  `research/plan-homological-algebra-track.md`.
- Batch 9: `research/frontier-31a-batch-9.pages.json`,
  `research/frontier-31a-batch-9.coverage.json`, and
  `research/frontier-31a-batch-9.notes.md`; HA-10 (1994–2165) and HA-11
  (2166–2320) in the same design file.
- Batch 10: `research/frontier-31a-batch-10.pages.json`,
  `research/frontier-31a-batch-10.coverage.json`, and
  `research/frontier-31a-batch-10.notes.md`; HA-12 (2321–2494).
- The current `research/plan-spec.json` and
  `research/frontier-31a-alpha-groups.json`.

The plan route is sufficient despite its intentionally compact direct
`requires` lists: its A/B closures reach the design prerequisites in order.
The route is `delta-functors-and-universality-examples` → Ext examples →
Yoneda examples → Tor examples → universal-coefficients examples → group
cohomology; the published abstract-algebra suppliers for tensor products,
semisimplicity, flatness, and group rings remain available as direct item
dependencies. No forward edge, page-order change, or new page is needed.

## Source and scope audit

The coverage files provide named source-to-item dispositions for 63 batch-8,
71 batch-9, and 75 batch-10 results. Their primary, full-text locators are:

| A page | Primary source support checked | Independent support recorded in coverage |
|---|---|---|
| `ext-and-balanced-resolutions` | Weibel, [§2.7](https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf), printed pp. 58–65 / PDF pp. 29–36; and [§§3.3–3.4](https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf), printed pp. 73–79 / PDF pp. 7–13 | Sharifi §3.5, PDF pp. 64–69 |
| `yoneda-extensions-and-homological-dimension` | Weibel [§3.4](https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf), printed pp. 76–79 / PDF pp. 10–13, and [§§4.1–4.2](https://math.mit.edu/~hrm/palestine/weibel/04-homological_dimension.pdf), printed pp. 91–98 / PDF pp. 0–7 | Stacks, [Derived Categories §27](https://stacks.math.columbia.edu/download/derived.pdf), PDF pp. 86–90 |
| `tor-flatness-and-global-dimension` | Weibel §§2.7, 3.1–3.2, and 4.1: the exact locators are in batch-9 coverage | Rotman §§7.1, 7.1.1, 7.1.2, 8.1; Sharifi §3.5; Stacks *Homology* §§18, 25 |
| `universal-coefficients-and-kunneth-theorems` | Weibel [§3.6](https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf), printed pp. 87–90 / PDF pp. 21–24 | Rotman §§7.4 and 10.10; Hilton–Stammbach Ch. V §§1–4; Sharifi §§2.8, 3.5 |
| `group-cohomology-as-a-derived-functor` | Weibel [Ch. 6](https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf): §§6.1, 6.2, 6.3, 6.5, and 6.7 at the coverage's printed-page locators | Clara Löh §§1.2, 1.6, 1.7, 3.1, 4.2 and Sharifi §3.6 |

The read primary sources support the used balance, Ext, dimension,
universal-coefficient, bar-resolution, Shapiro, and transfer claims. In
particular, Weibel's texts distinguish the two Ext variables, give the
noncanonical cohomological UCT splitting, use the appropriate induction or
coinduction construction in Shapiro, and state the bar-resolution calculation.
The coverage locators above and the three coverage files retain the complete
source list and every individual disposition.

`node tools/scope-decisions.mjs refresh --run frontier-31a --group b` produced
58 current declines. They were all reviewed against the current plan closure:
19 deferred rows point to existing destinations (10 Tor, 4 Yoneda, 2 Ext,
2 localisation, and 1 derived-categories), while 39 rows are deliberate
out-of-scope boundaries. Every row is now `stands`; none needs an
`owner-decision` because no destination is missing and no row needs a new page,
forward edge, or reading-order change.

## Local repairs

### B8-1 — foreign examples-page dependency removed

`lem-ext-one-of-z-mod-n-by-z-is-z-mod-n` and the B-page example
`ex-an-ext-dimension-shift` had depended on
`ex-a-projective-resolution-of-a-cyclic-abelian-group`, whose home is the
foreign examples page
`library/homological-algebra/projective-and-injective-resolutions-examples.md`.
That violates the examples-page leaf rule.

Both manifest entries now depend on the earlier A-page theorem
`thm-free-modules-are-projective-with-choice-boundary` instead. The displayed
two-term cyclic resolution can therefore be checked locally from freeness and
the elementary kernel computation, while the Ext calculation remains carried
by the batch-8 Weibel §3.3–3.4 source record. No claim, source, page, or order
changed.

### B10-1 — stated double-complex prerequisites made explicit

`thm-the-bar-cochain-complex-computes-derived-group-cohomology` explicitly
uses the finite-diagonal Hom double complex and both exactness/acyclic-assembly
directions. Its manifest now names the corresponding batch-8 definitions and
lemmas: the Hom double complex, its signed differential, finite-diagonal
totalisation, row/column assembly, and the projective/injective Hom exactness
lemmas.

`thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` now
also names
`thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`, the exact earlier
criterion used by its stated proof strategy. These are backward dependencies
within the established group route; no B item is made load-bearing.

## Page verdicts

| A page | batch | A/B item count | verdict | basis |
|---|---:|---:|---|---|
| `ext-and-balanced-resolutions` | 8 | 35 / 7 | **sufficient** | Separate resolution-defined Ext constructions, finite-diagonal balance, variance, long exact sequences, shifting, and the cyclic lower-bound bridge are all scoped and sourced. |
| `yoneda-extensions-and-homological-dimension` | 8 | 44 / 8 | **sufficient** | Extension equivalence, Baer sum, higher Yoneda product, derived comparison, and handed dimension claims have the required A-side bridges. |
| `tor-flatness-and-global-dimension` | 9 | 41 / 8 | **sufficient** | The arbitrary-ring handedness repair, two resolution constructions, balance, flatness tests, cyclic computations, and weak/global-dimension boundary are source-backed and dependency-closed. |
| `universal-coefficients-and-kunneth-theorems` | 9 | 32 / 7 | **sufficient** | Free-PID cycle/boundary bridges, both natural short exact sequences, nonnatural splittings, and bounded Künneth hypotheses are explicit. |
| `group-cohomology-as-a-derived-functor` | 10 | 42 / 9 | **sufficient** | Integral left/right conventions, bar calculation, normalized comparison, Shapiro, transfer, and cohomological dimension now carry every stated earlier prerequisite. |

## Checks and outstanding routing

- `node tools/scope-decisions.mjs check --run frontier-31a --group b`:
  `58 current decline(s), 0 error(s)`.
- Focused group dependency audit after the repairs: batch manifests parse as
  JSON and have no cross-page examples-page dependency.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-31a-batch-8.pages.json`:
  `94 scoped item(s), 0 error(s), 0 warning(s)`.

The batch-9 and batch-10 notes identify duplicate IDs in later
`research/frontier-31a-batch-1.pages.json`: it redeclares the batch-9
cohomological UCT theorem and the batch-10 derived group-(co)homology
definitions. Batch 1 belongs to group `a`; this review does not edit it. The
duplicate-ID finding is an out-of-group alert for that owner before the
whole-run manifest policy can close, not a defect of these five page verdicts.

All five pairs are sufficient for authoring. The next action is authoring from
the current manifests while preserving the source locators, handedness,
finite-diagonal hypotheses, nonnatural-splitting boundaries, and the recorded
out-of-scope seams.
