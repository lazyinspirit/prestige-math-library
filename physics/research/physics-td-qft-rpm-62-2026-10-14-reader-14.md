# Reader report — batch 14

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: Step 3a reader  
Batch: `14`

## Scope and opened inventory

The live run status identified this run as active at Step 3a read. The assigned
manifest contains these two draft pages and seven items:

| Page | Opened file | Items opened |
|---|---|---|
| `td-math-continuum-pressure` — A page, “Continuum Pressure” | `library/thermodynamics-mathematics/td-math-continuum-pressure.md` | `def-tdmath-stable-power-tempered-particle-model`; `lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral`; `lem-tdmath-particle-exponential-cutoff`; `lem-tdmath-separated-cube-tail-bound`; `thm-tdmath-stable-tempered-free-cube-grand-pressure` |
| `td-math-continuum-pressure-examples` — B page, “Continuum Pressure — Examples” | `library/thermodynamics-mathematics/td-math-continuum-pressure-examples.md` | `ex-tdmath-repulsive-power-tail`; `ex-tdmath-hard-core-attractive-power-tail` |

Dependencies were read before the claims that use them. The additional in-run
supplier `def-tdmath-measure-integral` is assigned to batch 11; I inspected its
current draft Definition and found no defect. Relevant mathematical suppliers
opened for the measure bridge and the partition estimates were:

- Measure and simple integration: `def-complete-ordered-field`, `def-finite-sum`,
  `def-measure`, `def-nonnegative-lebesgue-integral`,
  `def-nonnegative-simple-measurable-function`,
  `def-simple-function-and-canonical-representation`,
  `def-integral-of-a-nonnegative-simple-function`, and
  `lem-well-definedness-of-the-simple-integral`.
- Lebesgue and product measure: `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
  `def-countable-choice`, `thm-borel-sets-are-lebesgue-measurable`,
  `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`,
  `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`.
- Measurability and extended reals: `def-borel-sigma-algebra`,
  `def-extended-reals`, `def-borel-sigma-algebra-on-the-extended-real-line`,
  `def-extended-real-valued-measurable-function`,
  `cor-continuous-functions-are-borel-measurable`,
  `thm-composition-with-borel-functions-preserves-measurability`, and
  `prop-closure-properties-of-measurable-functions-used-by-the-integral`.
- Series and real functions: `def-nonnegative-extended-series`,
  `def-real-exponential-function-and-e`,
  `lem-exponential-series-has-infinite-radius`,
  `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`,
  `thm-exponential-limits-and-range`, `def-factorial-and-falling-factorial`,
  `def-integer-power`, `lem-integer-part`, `def-real-power`,
  `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`,
  `def-natural-logarithm`, `thm-natural-logarithm-laws`, `def-integers`,
  `thm-p-series-real-exponents`, and `cor-mean-value-theorem`.
- Euclidean setup: `def-euclidean-inner-product` and `def-natural-numbers`.

I also checked the current batch-14 proof contracts and relevant import records.
Published suppliers were used at their exact statements and stated hypotheses;
this was not a re-audit of every transitive published proof.

## Repairs and evidence

1. **`lem-tdmath-separated-cube-tail-bound`, Statement and Proof 3.1.** The
   original sums ranged over all points `q ∈ C_j` and `q' ∈ C_{j'}`, although
   the argument counts at most `n` particles in each cube. A cube is
   uncountable, so those displayed sums were not defined as finite particle
   sums. I replaced them with explicit labelled finite position families
   `q_{j,s}` with `0 ≤ n_j ≤ n`, and rewrote the sum over those labels. The
   proof now counts at most `n_j n_{j'}` pairs per cube pair, allowing
   coincident positions with their multiplicity counted. The positive-integer
   dimension is explicit. The assigned consumer
   `thm-tdmath-stable-tempered-free-cube-grand-pressure` was checked: its Step
   2.2 applies the estimate to finite particle configurations with at most the
   cutoff count per cube, matching the repaired statement. The theorem's proof
   needs no further change.

2. **`lem-tdmath-particle-exponential-cutoff`, Facts F2–F3 and Proof 1.1.** The
   Statement defines `λ_d` as Lebesgue measure restricted to Borel sets, but the
   original facts did not establish that Borel sets lie in the Lebesgue
   sigma-algebra or that this restriction is sigma-finite. I added the exact
   published supplier `thm-borel-sets-are-lebesgue-measurable`, then stated the
   countable covering by finite-measure Borel boxes `[-k,k]^d`. Proof 1.1 now
   derives finite measure of each simple-set minorant and monotonicity directly
   from countable additivity and the finite box measure, rather than assuming
   monotonicity before deriving it; the step's tags now cite the measure and
   product facts used for finiteness. The item gains the Borel-measurability
   theorem in `deps` with role `mathematical-premise`; its dependency level is
   unchanged. The original dispatch manifest remains frozen and therefore does
   not include this reader-added direct edge.

3. **Statement provenance for `lem-tdmath-particle-exponential-cutoff` and
   `thm-tdmath-stable-tempered-free-cube-grand-pressure`.** I changed each from
   `literature-derived` to `ai-altered`. The cutoff and the broader free-cube
   theorem are established by their local arguments, while the sources provide
   related results under narrower/different hypotheses. I read Stefan Adams,
   [*Mathematical Statistical Mechanics*](https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-3006.pdf),
   §5.2 (Theorem 5.3: canonical free energy for stable and tempered potentials)
   and §5.3 (grand-canonical limits stated with additional model requirements);
   Fisher and Lebowitz,
   [*Asymptotic Free Energy of a System with Periodic Boundary Conditions*](https://cmsr.rutgers.edu/images/people/lebowitz_joel/publications-archived/jll.pub_69.pdf),
   §VI (grand-canonical pressure approach under hard-core/weak-tempering
   assumptions, with details sketched); and Ruelle,
   [*Classical Statistical Mechanics of a System of Particles*](https://www.e-periodica.ch/cntmng?pid=hpa-001%3A1963%3A36%3A%3A1128&bot=1),
   §1 properties A/B and §5 Theorem 4 (grand-canonical limit under that
   paper's more restrictive potential conditions). These do not state the current full class of arbitrary even
   Borel stable power-tail potentials. The items' local proofs supply the
   stated conclusions; the revised provenance records that adaptation.

The affected contracts in
`research/physics-td-qft-rpm-62-2026-10-14-batch-14.proof-contracts.json` were
regenerated for current citations and derivations. I refreshed the new Borel
supplier excerpt, the theorem's excerpt for the repaired cube-tail statement,
and affected case-scope carrier hashes. None of the three changed items had a
`verification.judge` record to remove.

No page prose was edited. I found no defect in the two page summaries, the
finite grand-normalization estimate, the cube-block limit proof, or the two
examples. No proposed withdrawal is present.

## Page verdicts

| Page | Verdict |
|---|---|
| `td-math-continuum-pressure` | **Accept after the reader repairs above.** Its summary accurately limits the theorem to free-boundary cubes and disclaims fixed-density and arbitrary-boundary conclusions. |
| `td-math-continuum-pressure-examples` | **Accept.** Both examples establish the stated model-class membership; its summary accurately describes the attractive-tail shell estimate and limits on the companion theorem. |

## Validation and blocker

- `reflow.mts` completed for the cutoff lemma, separated-cube lemma, and grand-pressure theorem (exit code 0 for each).
- `precheck.mts` passed for all three changed items.
- The strict proof-contract check passed for all three changed items (0 errors, 0 warnings).
- After the final item edit, the batched `proof-layout.mjs` command was attempted
  for all three changed items. It could not run because the renderer failed to
  resolve `@/components` imported by
  `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`
  (`ERR_MODULE_NOT_FOUND`). This is an environment/tool blocker; proof-layout
  was not certified. An earlier identical attempt before the final tag update
  failed at the same renderer import.

The only remaining operational limitation is the renderer import failure above.
No unedited mathematical defect remains in the assigned items or pages.
