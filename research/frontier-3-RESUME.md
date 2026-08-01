# `frontier-3` — build state and decision log

**Started 2026-07-30.** Owner instruction after reviewing the disk-derived
frontier: **build every non-topology frontier A/B pair**. This build follows the
canonical step 0 to step 10 workflow in `LEVELS.md`; its sole owner pause is at
the end of step 10.

## Step 0 — frontier selection and batching

Step 0.1 recomputed the frontier from page files on disk: an A page absent from
`library/` whose entire declared `requires` list is `status: published` in its
page files. Thirteen A/B pairs qualified. The owner selected all seven outside
topology:

| order | static level | A page | category | published prerequisites |
|---:|---:|---|---|---|
| 30 | 7 | `congruences-and-the-chinese-remainder-theorem` | number-theory | `primes-and-the-fundamental-theorem-of-arithmetic`, `inclusion-exclusion-and-the-pigeonhole-principle` |
| 155 | 11 | `darboux-lhopital-and-taylor` | real-analysis | `the-derivative-and-mean-value-theorems`, `finite-counting-and-binomial-coefficients` |
| 163 | 12 | `bounded-variation-and-riemann-stieltjes` | real-analysis | `properties-of-the-integral-and-the-working-ftc` |
| 165 | 12 | `improper-integrals` | real-analysis | `properties-of-the-integral-and-the-working-ftc` |
| 169 | 13 | `uniform-convergence-of-functions` | real-analysis | `rn-as-a-normed-space`, `properties-of-the-integral-and-the-working-ftc`, `completeness-and-uniform-continuity` |
| 191 | 6 | `chains-antichains-sperner-and-dilworth` | combinatorics | `inclusion-exclusion-and-the-pigeonhole-principle`, `order-zorn-and-the-axiom-of-choice` |
| 235 | 13 | `the-riemann-integral-in-rn-and-jordan-content` | real-analysis | `the-riemann-integral`, `rn-as-a-normed-space` |

Static levels are context only. Publication state selected the build.

### Step 0.2–0.3 batches

Three batches, all below the cap of three A pages and packed by prerequisite and
subject affinity:

1. **Discrete mathematics:** `congruences-and-the-chinese-remainder-theorem`,
   `chains-antichains-sperner-and-dilworth`.
2. **Differentiation and function sequences:** `darboux-lhopital-and-taylor`,
   `uniform-convergence-of-functions`.
3. **Integration:** `bounded-variation-and-riemann-stieltjes`,
   `improper-integrals`, `the-riemann-integral-in-rn-and-jordan-content`.

### Step 0.4 seam report before spawning

- **Declared page-level edges between selected A pages: 0.** Every selected A
  page depends only on already-published pages, which is why it is on the disk
  frontier.
- **Cross-batch item-level seam count: not computable.** All fourteen selected
  page objects have empty `items` arrays before scaffolding. Reporting zero would
  be false precision.
- Shared published prerequisites are internalised where possible: the two
  discrete pages share `inclusion-exclusion-and-the-pigeonhole-principle`; the
  integration batch clusters the pages whose mathematics is built on the
  published Riemann-integral spine.

No step beyond step 0 had run when this section was written.
