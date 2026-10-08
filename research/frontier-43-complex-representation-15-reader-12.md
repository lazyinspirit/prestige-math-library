# Reader 12 — batch 12

Run: `frontier-43-complex-representation-15`. Completed independent Step 5a reader review on 2026-10-08.

Both pages and all 25 assigned item bodies were opened. Fourteen items received mathematical or prerequisite repairs; nine further items received bibliography corrections only. One false claim remains in B-page prose, which this dispatch is forbidden to edit. No item was withdrawn, published, judged, stamped or independently certified.

## Opened page inventory and verdicts

| Page | Read scope | Reader verdict |
| --- | --- | --- |
| `library/complex-analysis/extremal-length-and-planar-quasiconformality.md` | Full frontmatter and summary; all 17 listed items | No unresolved mathematical defect identified in the current A-page prose or its assigned items after the repairs, under the exact recorded Gehring qualitative-citation exception. |
| `library/complex-analysis/extremal-length-and-planar-quasiconformality-examples.md` | Full frontmatter and summary; all eight listed items | Correction required: summary paragraph 2, line 22, calls the two semiaxes a ratio. All assigned example arguments were read and the repairable defects were corrected. |

Both page files remain byte-identical to the pre-reader snapshots. These are reader conclusions, not Step 5b adjudications or judge records.

## Opened assigned item inventory

The principal A-page supplier chain was read before its consumers, followed by the B-page examples after their A-page inputs; within the examples, affine and radial suppliers preceded the composition and inverse examples. Additional exact published clauses were consulted during the subsequent inference checks. The table follows the assigned page order.

| Item, at `items/<id>.md` | Final reader action |
| --- | --- |
| `def-acl-sobolev-quasiconformal-homeomorphism` | Mathematical/prerequisite repair |
| `def-extremal-length-and-curve-family-modulus` | Mathematical/prerequisite repair |
| `def-beltrami-coefficient-and-maximal-dilatation` | Mathematical/prerequisite repair |
| `lem-rho-length-and-extremal-length-are-well-defined` | Mathematical/prerequisite repair |
| `def-geometric-quasiconformal-homeomorphism` | Read; unchanged |
| `thm-extremal-length-conformal-invariance-and-monotonicity` | Mathematical/prerequisite repair |
| `thm-modulus-rectangle-and-annulus` | Bibliography correction only |
| `thm-round-annulus-conformal-parameter-is-complete-invariant` | Bibliography correction only |
| `lem-riemann-maps-of-jordan-domains-extend-homeomorphically` | Read; unchanged |
| `lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds` | Mathematical/prerequisite repair |
| `thm-geometric-and-analytic-quasiconformality-equivalent` | Mathematical/prerequisite repair |
| `lem-inverse-of-a-quasiconformal-map-is-quasiconformal` | Mathematical/prerequisite repair |
| `lem-analytic-quasiconformality-implies-modulus-distortion` | Bibliography correction only |
| `thm-composition-and-inverse-quasiconformal` | Bibliography correction only |
| `thm-one-quasiconformal-is-conformal` | Mathematical/prerequisite repair |
| `thm-normalized-quasiconformal-compactness` | Mathematical/prerequisite repair |
| `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality` | Mathematical/prerequisite repair |
| `ex-extremal-length-of-rectangle-and-annulus` | Bibliography correction only |
| `ex-punctured-disc-versus-finite-annulus-modulus` | Mathematical/prerequisite repair |
| `ex-affine-quasiconformal-ellipse-map` | Mathematical/prerequisite repair |
| `ex-radial-stretch-quasiconformal-map` | Bibliography correction only |
| `ex-quasiconformal-composition-dilatation-bound` | Bibliography correction only |
| `ex-modulus-obstruction-to-quasiconformal-equivalence` | Bibliography correction only |
| `ex-beltrami-coefficient-of-an-inverse-map` | Bibliography correction only |
| `cex-orientation-reversing-homeomorphism-is-quasiconformal` | Mathematical/prerequisite repair |

## Mathematical repairs and evidence

1. **ACL and the Cantor witness.** In `def-acl-sobolev-quasiconformal-homeomorphism`, Definition paragraph 1 falsely equated ACL alone with local W1,2. The opened `thm-acl-characterisation-of-w-one-p`, Statement (2), requires measurable L2 coordinate derivatives in addition to ACL and L2 function values. The repaired paragraph states those requirements and explains why the fixed continuous representative agrees linewise with its ACL representative. The final witness paragraph formerly said the non-ACL Cantor shear satisfies (A2), although (A2) requires weak L2 derivatives. It now distinguishes classical derivatives from the weak assertion, uses the open-square domains, and proves failure of local ACL from Cantor nonconstancy and the AC fundamental theorem. Added exact published suppliers: `thm-cantor-function-properties`, `cor-cantor-set-is-an-uncountable-lebesgue-null-set`, `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two`, and `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`. The Cantor homeomorphism proof and the non-AC Cantor example were also opened. The definition's actual analytic class is unchanged.

2. **Continuous densities and boundary endpoints.** In `def-extremal-length-and-curve-family-modulus`, the rho-length paragraph claimed agreement with the published continuous absolute line integral without restricting a boundary path or an extended-valued continuous density. The opened `def-absolute-line-integral-over-a-rectifiable-path` and `thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral` require a finite continuous integrand on the full compact trace. Agreement is now explicitly limited to finite continuous densities and rectifiable paths whose full traces lie inside the open domain; the zero extension need not be continuous at boundary endpoints. Countable Choice is now explicitly assumed at the start. The Stieltjes definition for boundary paths and the numerical modulus convention are unchanged.

3. **Finite supported measures.** In `lem-rho-length-and-extremal-length-are-well-defined`, step 1.1, and `thm-extremal-length-conformal-invariance-and-monotonicity`, step 2.1, a finite pushforward measure was said to agree on every real half-open interval with Lebesgue measure, rather than with its restriction to the finite arc-length interval. A supported finite measure cannot equal Lebesgue measure on all of R. Both sentences now identify the restricted measure, using clipping and the already cited interval uniqueness theorem. The rho lemma's step 1.2 also now passes from finite subpath sums to the stated countable sum by monotone convergence; this last omission was immediately closable and nonfatal.

4. **The zero-denominator Beltrami convention.** In `thm-one-quasiconformal-is-conformal`, Statement (b) incorrectly said mu=0 alone is equivalent to the weak Cauchy–Riemann equation under a general Sobolev-homeomorphism hypothesis. Reflection is a direct counterexample: f_z=0, f_bar=1, yet the fixed convention sets mu=0. The repaired coefficient reformulation also requires f_bar=0 almost everywhere on {f_z=0}. Step 1.1 proves the reformulation separately on and off that set. Step 1.2 uses its given hypothesis directly rather than reintroducing (a). In `def-beltrami-coefficient-and-maximal-dilatation`, the last paragraph now locates the nullity result in the inverse theorem's area/N argument, where it is actually proved, and supplies the short countable-intersection argument that the finite essential supremum is itself an essential bound. The core three-way conformality theorem is preserved.

5. **Local homology and smooth orientation.** A vector-space determinant-sign theorem alone does not identify the integral local-homology multiplier. The opened published `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier`, Statement and complete proof, supplies exactly that bridge, including linear maps and smooth nonsingular germs. It is now explicitly cited and declared as a dependency in the quadrilateral core F1, equivalence F7, inverse lemma F4, one-quasiconformal theorem F5, affine example F1, and reflection counterexample F4. The nonsmooth differentiability-point use still relies on the local nonvanishing boundary homotopy actually proved in the core/equivalence; it does not assume smoothness of the homeomorphism. In the inverse area proof, the previously duplicated mollification sentence was reduced to its smoothness assertion; the later exact convergence clauses remain.

6. **Area-function differentiation in geometric-to-analytic regularity.** `thm-geometric-and-analytic-quasiconformality-equivalent`, step 1.2, previously assumed the differentiability almost everywhere of the finite increasing image-area function. The step now constructs the finite Borel image-area measure on the transverse coordinate and applies the already cited `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` to forward/backward half-intervals. The exact supplier permits nicely shrinking sets, including these intervals. The thin-strip ACL estimate is unchanged. Step 1.1 now explicitly calls the earlier total-differentiability interface before the orientation argument.

7. **Compactness prerequisites and extended dilatation.** `thm-normalized-quasiconformal-compactness`, F5, formerly invoked Hilbert reflexivity for L2 matrix fields without establishing their Hilbert-space premise. It now cites the opened published `lem-l-two-with-the-integral-pairing-is-a-hilbert-space` and explains completeness of the finite matrix direct sum. Statement (iii) explicitly assigns K_f=infinity to a nonquasiconformal homeomorphic limit; otherwise the infinite-liminf case could name an undefined analytic dilatation. The finite-liminf proof and exact K closure remain intact.

8. **Quasisymmetry citation scope.** `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`, F3, attributed the compact-set upper-infinitesimal-dilatation implication to Lyubich Lemma 12.11. The retrieved full source shows that lemma concerns whole Euclidean-space embeddings with an all-scale macroscopic bound. F3 now states the ratio definition and inverse control and points to the item's own local proof. The sole exceptional source input remains the separately authorized qualitative Gehring criterion in F4; the sharp L bound and circle/dyadic estimates remain local.

9. **Punctured-disc exclusions.** `ex-punctured-disc-versus-finite-annulus-modulus`, former step 2.1, added an unnecessary boundary-family invariance sentence. The compact-interior conformal invariance theorem does not license that boundary-endpoint transport. The sentence was removed; the exact already proved winding/Liouville/logarithm supplier still proves every exclusion. The final proof follows precheck's canonical numbering: 1.1, 1.2, 1.3, 2.1. No promised exclusion was removed.

## Bibliography and contract repairs

Removed the stale parenthetical “146 pp.” from the Bishop reference titles in the following 15 assigned items; the current authoritative PDF has 164 PDF pages. This correction makes no mathematical claim about the number of printed text pages:

- `thm-modulus-rectangle-and-annulus`
- `thm-round-annulus-conformal-parameter-is-complete-invariant`
- `thm-geometric-and-analytic-quasiconformality-equivalent`
- `lem-analytic-quasiconformality-implies-modulus-distortion`
- `thm-composition-and-inverse-quasiconformal`
- `thm-one-quasiconformal-is-conformal`
- `thm-normalized-quasiconformal-compactness`
- `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`
- `ex-extremal-length-of-rectangle-and-annulus`
- `ex-affine-quasiconformal-ellipse-map`
- `ex-radial-stretch-quasiconformal-map`
- `ex-quasiconformal-composition-dilatation-bound`
- `ex-modulus-obstruction-to-quasiconformal-equivalence`
- `ex-beltrami-coefficient-of-an-inverse-map`
- `cex-orientation-reversing-homeomorphism-is-quasiconformal`

Corrected the mistyped `archive.ymsc.tsinghua.edu.au` URL in the round-annulus complete-invariant item to the `archive.ymsc.tsinghua.edu.cn` address already used by the other assigned Ahlfors–Beurling references. No full-paper reading is claimed for that URL correction.

Updated `research/frontier-43-complex-representation-15-batch-12.proof-contracts.json`: current exact supplier quotes, affected derivations/uses, corrected boundary evidence and stale example step locators. Auxiliary total-differentiability, exceptional-curve and area/N citations remain bound to the proved Remark clauses of the core and inverse items, rather than being replaced with quadrilateral/inverse statements that do not state those interfaces. No judge record was present in the assigned carriers; the final check found zero such records, and none was added.

## Uneditable defect and blocker

`extremal-length-and-planar-quasiconformality-examples`, summary paragraph 2, `library/complex-analysis/extremal-length-and-planar-quasiconformality-examples.md:22`, says “the semiaxis ratio $1\pm|\mu|$.” The opened assigned `ex-affine-quasiconformal-ellipse-map`, Statement (b), F3 and step 1.2, give semiaxes 1+|mu| and 1-|mu| and ratio (1+|mu|)/(1-|mu|). For mu=1/3 these are 4/3 and 2/3, with ratio 2. The B-page statement is false as written. Replace “semiaxis ratio” with “semiaxes”, or write the correct quotient. Severity is fatal under this dispatch's rule that a defective claim is not downgraded to a short proof omission. B-page prose is outside reader edit authority, so it is unchanged and is the sole JSON finding.

No item withdrawal is proposed. Step 5b must correct this B-page sentence and handle changed Definition/Statement consumer impacts, including other batches and consolidated metadata if required. This reader has not changed their items, manifests, contracts, the global plan or published content. The batch manifest remains evidence of the authoring baseline; the current item dependencies contain the explicit added prerequisites listed above.

## Source retrieval and exact review limits

- [Bishop, Quasiconformal Mappings](https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf): opened the current authoritative PDF and its extracted opening extremal-length section, printed pp.1–4. Other proofs in this report were checked from their local authored arguments and exact published library suppliers, without claiming to have reread every source cited by an author.
- [Gehring, Definitions for a Class of Plane Quasiconformal Mappings](https://doi.org/10.1017/S0027763000024272): opened the Cambridge DOI page and read the complete ten-page extracted paper at `research/frontier-43-complex-representation-15-gehring-planar-source.txt`. Section 1, p.175, requires orientation preservation and finite planar domains; section 3, p.176, gives ACL and L2-derivative analytic formulations; section 9, Definition 8-prime, p.179, states bounded upper circular dilatation iff qualitative quasiconformality. Section 14 refers the equivalence proofs elsewhere. `research/frontier-43-complex-representation-15-circular-metric-citation-authorization.json` records the exact owner exception for that qualitative input only. I verified its hypothesis/conclusion translation and read the local sharp and quasisymmetry proofs independently. I did not read Gehring's 1960 proof and do not claim a complete proof of that exceptional criterion.
- [Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials](https://www.math.stonybrook.edu/~mlyubich/book.pdf): the web PDF parser failed, but direct retrieval succeeded to `/tmp/reader-12-lyubich.pdf` (702 PDF pages). Read the complete relevant quasisymmetry and metric-to-analytic discussion on printed/PDF pp.186–188, including the full Lemma 12.11 argument, Proposition 12.13 and the complete Proposition 12.14 argument, and p.189's Weyl/Cantor discussion. Also opened the available current-run extracted passages for Lemma 12.6 and Proposition 12.7, and the analytic definition/area statements. An existing extraction ended midway through Lemma 12.11; I obtained its continuation from the retrieved PDF before drawing the citation-scope conclusion. I do not claim to have read the entire book.

The direct supplier inventory below consists of opened claim/interface sections; those reads do not constitute fresh whole-proof audits of the published library. Complete proofs additionally opened include the ACL characterization, weak-representative lemma, Cantor homeomorphism/non-AC example, smooth-to-local-homology bridge, and L2 Hilbert-space lemma. Some supplementary supplier clauses were consulted after the first consumer pass, and the affected inferences were then rechecked. Thus the supplementary first-open order was not uniformly dependency-first; no claim of stricter reading-order coverage is made. No mathematical defect in those published interfaces remains identified by this review, and no other-batch draft defect is being reported.

## Validation

- Reflow was run for every changed item and again for items edited during the check corrections; it reported unchanged paragraph layout on the final carriers.
- Every changed proof-bearing item passed precheck: 20 proofs pass, three changed definitions are not applicable. The first punctured-disc check proposed renumbering; that canonical repair was adopted and its rerun passed.
- Final strict proof-contract check: 25 assigned entries checked, zero errors and zero warnings. This is mechanical contract validation, not a mathematical acceptance stamp.
- After the last item edits and formatters, the explicit 23 changed paths were batched in one final `node tools/proof-layout.mjs` invocation: **23 items, 115 steps, 0 defects**, exit 0. No item edit followed that final command.
- Both page SHA-256 values still match the pre-reader snapshot. The A-page hash is `1825e49611351dee5615551e5ffa83048ec341ebb1b9c901bbc6a5a7256e3237`; the unchanged B-page hash is `cc0eced85663a9a918d8473f1a40b3a6a6027ba4c28e94658affd47ab80bf354`.

No broader gate, judge, render audit or publication action was run.

## Opened published supplier inventory

Every entry below is `items/<id>.md`; the opened section was its Statement, Definition, Example or the needed Remark/interface prose. These are the direct authored supplier interfaces plus the additional Cantor/L2/orientation context actually opened, not a claim to have recursively read every proof in their transitive closure.

- `cor-additivity-of-the-nonnegative-lebesgue-integral`
- `cor-ascoli-arzela-for-compact-metric-domains`
- `cor-cantor-set-is-an-uncountable-lebesgue-null-set`
- `cor-cauchy-schwarz-inequality-for-l-two`
- `cor-closed-contour-integral-of-a-derivative-is-zero`
- `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`
- `cor-components-of-open-subsets-of-rn-are-polygonally-connected`
- `cor-geometric-unit-circle-has-fundamental-group-z`
- `cor-holomorphic-functions-are-real-analytic-and-smooth`
- `cor-holomorphic-logarithm-has-the-logarithmic-derivative`
- `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace`
- `cor-injective-holomorphic-derivative-nonzero`
- `cor-integral-logarithm-agrees-with-natural-logarithm`
- `cor-integral-logarithm-is-strictly-increasing`
- `cor-integral-logarithm-reciprocals-and-integer-powers`
- `cor-jacobian-determinant-of-a-holomorphic-map`
- `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions`
- `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps`
- `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`
- `cor-locally-integrable-weakly-harmonic-functions-are-smooth`
- `cor-mean-value-theorem`
- `cor-normalized-circle-integral-about-its-centre-is-one`
- `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`
- `cor-winding-number-classifies-loops-in-the-punctured-plane`
- `def-absolute-continuity-on-almost-every-coordinate-line`
- `def-absolute-line-integral-over-a-rectifiable-path`
- `def-arc-length-function`
- `def-axiom-of-choice`
- `def-based-loops-and-fundamental-group`
- `def-biholomorphic-map`
- `def-borel-and-lebesgue-measurable-function-on-rn`
- `def-borel-sigma-algebra`
- `def-cantor-function`
- `def-chordal-metric-riemann-sphere`
- `def-complex-annulus`
- `def-complex-differentiability-holomorphic-and-entire`
- `def-complex-domain`
- `def-complex-line-integral-over-a-rectifiable-path`
- `def-complex-lp-and-euclidean-test-function-conventions`
- `def-conformal-equivalence-and-automorphism-group`
- `def-convex-subset-of-euclidean-space`
- `def-countable-choice`
- `def-dependent-choice`
- `def-distributional-harmonicity-and-poisson-equation-in-rn`
- `def-essential-supremum-with-respect-to-a-measure`
- `def-extended-real-valued-measurable-function`
- `def-homeomorphism-and-open-maps`
- `def-homologically-simply-connected-complex-domain`
- `def-induced-homomorphism-on-fundamental-groups`
- `def-integral-over-a-measurable-set`
- `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`
- `def-measurable-function-between-measurable-spaces`
- `def-measure-preserving-transformation-and-system`
- `def-mobius-transformation`
- `def-natural-logarithm`
- `def-nonnegative-lebesgue-integral`
- `def-orientation-of-a-finite-dimensional-real-vector-space`
- `def-path-connected`
- `def-pi-via-first-positive-cosine-zero`
- `def-r-orientation-of-a-topological-manifold`
- `def-riemann-sphere-holomorphic-charts`
- `def-sobolev-space-wkp-and-its-norm`
- `def-unit-disc-upper-half-plane-and-blaschke-factor`
- `def-weak-derivative-of-a-locally-integrable-function`
- `def-winding-number-closed-complex-contour`
- `def-wirtinger-derivatives`
- `ex-cantor-function-bv-not-absolutely-continuous`
- `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one`
- `ex-convex-subsets-of-rn-are-path-connected`
- `lem-arc-length-function-is-continuous-and-nondecreasing`
- `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
- `lem-c-one-stokes-for-complex-euclidean-domains`
- `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`
- `lem-complex-conjugation-and-modulus-laws`
- `lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous`
- `lem-coordinate-ball-classes-identify-local-homology-stalks`
- `lem-jordan-schoenflies-extension-for-plane-curves`
- `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`
- `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc`
- `lem-mollification-commutes-with-weak-derivatives-in-the-interior`
- `lem-radial-normalisation-is-continuous`
- `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier`
- `lem-weak-derivative-is-independent-of-lp-representatives`
- `lem-weak-derivative-linearity-locality-and-commutation`
- `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two`
- `prop-arc-length-under-lipschitz-maps-and-euclidean-similarities`
- `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`
- `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`
- `prop-linearity-of-complex-line-integrals`
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`
- `prop-relative-homology-is-functorial-for-maps-of-pairs`
- `prop-reversal-and-concatenation-of-complex-line-integrals`
- `prop-star-shaped-plane-domains-are-homologically-simply-connected`
- `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`
- `rem-complex-contours-as-planar-rectifiable-paths`
- `rem-riemann-sphere-one-point-compactification`
- `thm-acl-characterisation-of-w-one-p`
- `thm-arc-length-is-additive-over-subintervals`
- `thm-arc-length-is-invariant-under-monotone-reparametrization`
- `thm-argument-principle-as-image-winding-number`
- `thm-arithmetic-and-lattice-operations-preserve-measurability`
- `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`
- `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`
- `thm-c1-paths-have-length-equal-to-the-integral-of-speed`
- `thm-cantor-function-properties`
- `thm-chain-rule-for-complex-derivatives`
- `thm-chain-rule-for-total-derivatives`
- `thm-choice-implies-dependent-implies-countable-choice`
- `thm-chordal-metric-induces-sphere-topology`
- `thm-completion-measurable-functions-have-base-measurable-representatives`
- `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`
- `thm-complex-exponential-is-entire-with-derivative-itself`
- `thm-complex-holder-minkowski-and-the-quotient-norm`
- `thm-continuous-image-of-a-compact-space-is-compact`
- `thm-continuous-preimages-of-borel-sets-are-borel`
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`
- `thm-determinant-sign-detects-orientation-change`
- `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`
- `thm-egorovs-theorem`
- `thm-euclidean-inverse-function-theorem`
- `thm-every-rectifiable-path-has-an-arc-length-parametrization`
- `thm-excision-for-singular-homology`
- `thm-existence-of-complex-line-integrals-on-rectifiable-paths`
- `thm-existence-of-the-lebesgue-stieltjes-measure`
- `thm-fundamental-inequality-for-complex-line-integrals`
- `thm-fundamental-theorem-for-complex-line-integrals`
- `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`
- `thm-global-sphere-degree-is-the-sum-of-local-degrees`
- `thm-harmonic-and-holomorphic-schwarz-reflection-principles`
- `thm-heine-borel-rn`
- `thm-hilbert-spaces-are-reflexive-by-riesz-representation`
- `thm-holomorphic-logarithms-homologically-simply-connected-domains`
- `thm-identity-theorem-holomorphic-functions`
- `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`
- `thm-induced-fundamental-group-map-functoriality`
- `thm-int-comm-ring`
- `thm-integral-logarithm-product-law`
- `thm-integrals-are-invariant-under-measure-preserving-maps`
- `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`
- `thm-jordan-brouwer-separation`
- `thm-l-one-approximate-identities-converge-in-l-p`
- `thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n`
- `thm-lebesgue-measure-is-a-radon-measure-on-rn`
- `thm-lebesgue-measure-of-a-box-of-every-kind`
- `thm-lebesgue-number-lemma`
- `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`
- `thm-liouville-bounded-entire-function`
- `thm-local-homology-detects-interior-points-boundary-points-and-dimension`
- `thm-long-exact-sequence-of-a-pair-in-singular-homology`
- `thm-lusins-theorem`
- `thm-measure-uniqueness-on-a-sigma-finite-pi-system`
- `thm-metric-compactness-equivalences`
- `thm-mobius-transformations-biholomorphic-sphere`
- `thm-monotone-convergence-for-the-integral`
- `thm-morse-sard-for-smooth-manifolds`
- `thm-naturality-of-the-long-exact-sequence-of-a-pair`
- `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`
- `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations`
- `thm-of-archimedean`
- `thm-path-connected-implies-connected`
- `thm-polar-coordinates-formula-for-lebesgue-measure`
- `thm-polar-form-with-unique-principal-argument`
- `thm-primitives-homologically-simply-connected-domains`
- `thm-rectifiable-iff-coordinate-functions-have-bounded-variation`
- `thm-riemann-mapping-theorem`
- `thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral`
- `thm-riemann-stieltjes-linearity-and-additivity`
- `thm-sine-and-cosine-parametrize-the-unit-circle`
- `thm-singular-chain-homotopy-formula`
- `thm-stereographic-projection-riemann-sphere-homeomorphism`
- `thm-three-point-transitivity-mobius-transformations`
- `thm-tonelli-and-fubini-for-completed-product-measures`
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`
- `thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r`
- `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates`
- `thm-weyl-lemma-for-the-laplacian`
- `thm-winding-number-equals-circle-degree`
- `thm-wirtinger-chain-rule-for-real-differentiable-maps`

## Other opened task evidence

`CLAUDE.md` and `README.md` fully; `briefs/reader.md` fully; the complete relevant content rules in `SCHEMA.md`; selected Step-5 source/routing/impact clauses in `WORKFLOW.md`; assigned `research/frontier-43-complex-representation-15-batch-12.pages.json`; the batch proof contracts; `research/frontier-43-complex-representation-15-step5-hash-12-pre.json`; the exact circular citation authorization; relevant source-authority entries in the live run supervision record and batch notes (searched clauses only); the local source extracts named above. Current engine status confirmed this is the live Step-5 run, rather than a concluded RESUME record. Tool implementation sections were opened only to understand reflow/precheck, contract regeneration and evidence-bundle extraction.

