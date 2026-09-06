# frontier-31a reader-15 report

Batch: `15`  
Run: `frontier-31a`  
Role: Step 6a independent reader

## Scope opened

I read the current batch manifest, proof contract, notes, and source-harvest
ledger:

- `research/frontier-31a-batch-15.pages.json`,
  `research/frontier-31a-batch-15.proof-contracts.json`,
  `research/frontier-31a-batch-15.notes.md`, and
  `research/frontier-31a-batch-15.coverage.json`;
- the assigned design route at
  `research/plan-combinatorics-and-categories.md:3916-3954` and the current
  `plan-spec` route recorded by the manifest; and
- Huang--Ju--Zhou, *Erdős--Hajnal beyond the five-vertex path*, version 2,
  complete §5, especially Lemma 5.1 and Claims 5.1.1--5.1.2 (current HTML
  lines 856--915 at `https://arxiv.org/html/2606.06258v2`).

I opened both assigned pages and all fourteen assigned item bodies:

| Page | Kind | Item bodies read |
| --- | --- | --- |
| `the-structural-criterion-for-property-star` | A | `def-structural-comb-partition-hypothesis`; `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set`; `lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade`; `lem-no-property-star-outcome-forces-a-small-structural-block-partition`; `def-integral-geometric-layers-of-a-decreasing-block-partition`; `lem-integral-geometric-layers-have-rounded-cutoff-bounds`; `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades`; `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade`; `lem-successive-small-integral-geometric-layers-contradict-a-large-x-part`; `thm-the-structural-comb-partition-criterion-implies-property-star` |
| `the-structural-criterion-for-property-star-examples` | B | `ex-a-large-y-part-in-a-structural-comb-partition`; `ex-a-wide-transversal-in-four-structural-comb-partitions`; `ex-integral-geometric-layers-for-fourteen-ordered-blocks`; `cex-omitting-cross-block-purity-breaks-the-transversal-conclusion` |

For the current arguments I also opened the semantic dependency closure needed
to check the claims: property (*), combs, blockades, purity/mixed pairs and
pattern graphs; Erdős--Hajnal constants and clique/stable-set numbers;
complements and induced-family freeness; real powers and their laws;
rational-power order support; Archimedean and well-ordering statements; and
the geometric-series theorem. The structural hypothesis's uniform quantifier,
the nonempty-block convention, the three property-(*) outcomes, and the
direction of cross-block purity agree with the primary source after the
intentional uniform-quantifier and integral-index formalizations.

## Repairs

1. `items/lem-integral-geometric-layers-have-rounded-cutoff-bounds.md` had a
   proof gap at the terminal cutoff. Its former floor-style argument used
   `x<m_r+1` even when the cap gives `m_q=t`, for which that implication need
   not hold. I separated the preterminal floor argument from the terminal
   case: `q\ge2`, and the preceding integral cutoff implies
   `t>\ell^{(q-1)/2}\ge\ell^{q/4}`. The claimed terminal lower bound is now
   established rather than assumed. I updated the corresponding derivation in
   `research/frontier-31a-batch-15.proof-contracts.json`. This item had no
   stale `verification.judge` record.
2. `items/def-integral-geometric-layers-of-a-decreasing-block-partition.md`
   had a two-source-line display for the layer definition, which the production
   Markdown renderer mis-renders. I made it a single display-math source line;
   its definition is unchanged.
3. `items/thm-the-structural-comb-partition-criterion-implies-property-star.md`
   omitted closing inline-math delimiters in Facts F2, F3, and F5. The omitted
   delimiters swallowed their dependency wikilinks into math and made the
   theorem fail rendering. I restored the delimiters without changing any
   statement, proof inference, or contract claim.

## Mathematical review and page verdicts

The large-`Y` estimate, transversal purity argument, small-block reduction,
rounded layer bounds, pattern lift, wide-layer exponent conversion, and final
geometric-series contradiction are now type-correct with their stated domains.
In particular, the finite terminal layer is included in the small-layer sum,
and the conservative constants `c_1=c_3=c/4`, `c_2=10/c` give the required
second outcome after the floor-safe lower bound.

- `the-structural-criterion-for-property-star`: pass after the repairs above.
- `the-structural-criterion-for-property-star-examples`: pass; its three
  numerical examples and cross-block-purity counterexample agree with their
  cited A-item claims and boundary conventions.

No uneditable in-flight-item, page, or published-dependency defect remains.
There is no blocker.

## Validation

- Reflowed each changed item. Focused precheck passed for the repaired proof
  lemma and final theorem; a final scoped precheck passed for all 12
  proof-bearing assigned items.
- `node tools/rendercheck.mjs` on both pages and all 14 assigned items passed:
  16 files, no delimiter, KaTeX, or frontmatter error.
- `node tools/proof-contract.mjs research/frontier-31a-batch-15.proof-contracts.json --strict`
  passed: 12/12, zero errors and warnings.
- `node tools/content-policy.mjs research/frontier-31a-batch-15.pages.json`
  passed: 14 scoped items, zero errors and warnings.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-15.pages.json`
  passed: 14 items, zero errors. `git diff --check` also passed.
