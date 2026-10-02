# Frontier 37, owner 30 — batch 2 scaffold notes

## Scope and plan comparison

Owned A/B pair: `minkowski-theory-and-number-field-class-groups` (number theory, order 365.917) and `minkowski-theory-and-number-field-class-groups-examples` (365.918). The A page contains 24 items and the B page 7; both ordered ID lists match the complete NT-22 design exactly. The current `research/plan-spec.json` gives the A page only `decomposition-inertia-and-frobenius` and the B page only this A page as page prerequisites, with the same IDs, order, category, and titles as the NT-22 design. **No plan/design conflict** was found. No selected pair or shared plan was changed. The run-local owner-authoring-direction file did not exist when construction began.

The design's proposed successive-minima deformation says its nonlinear image is convex and applies the equality form of Minkowski. Green's full argument does not establish convexity of that image. The scaffold preserves the full two-sided second theorem and instead proves the image is Borel, centrally symmetric, and free of distinct points congruent modulo `2Λ`, then uses Blichfeldt for the upper bound. The triangular volume lemma covers the actual nonlinear Borel shear, not merely a linear matrix. The design's old Milne theorem numbers were reconciled against the retrieved v3.08 text; this is a locator correction, not a page-scope change. No page split is needed.

## Sources and harvested results

The complete bodies of five authoritative sources were downloaded and inspected. The `source-fetch-check --stamp` run wrote genuine full-text stamps for all five to [batch-2.coverage.json](frontier-37-owner-30-batch-2.coverage.json). This page has two independent full lecture-note/book treatments plus further independent arguments.

| Source | Full-text locator actually inspected | Main support |
| --- | --- | --- |
| [Milne, *Algebraic Number Theory* v3.08](https://www.jmilne.org/math/CourseNotes/ANTc.pdf) | Ch. 2 Example 2.39 p. 39; Ch. 4 pp. 68–82; Ch. 8 Thm. 8.43 pp. 151–152; 166-page PDF | Lattice, covolume, class bound, examples, Hermite proof |
| [Stein, *Algebraic Number Theory: A Computational Approach*](https://wstein.org/books/ant/ant.pdf) | §§6.3, 7.1, 7.3, pp. 74–85; 215-page PDF | Ideal norms, class-bound direction, quadratic examples |
| [Conrad–Landesman, Math 154 notes](https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf) | §§25–28, pp. 128–147; 153-page PDF | Independent class-group and volume proofs; Hermite statement only |
| [Green, *Additive Combinatorics*, Lecture 3](https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf) | §3.7, pp. 26–29; complete 13-page PDF | Blichfeldt and second-theorem triangular deformation |
| [Henk, *Successive Minima and Lattice Points*](https://arxiv.org/pdf/math/0204158) | §§1–3; complete 7-page paper | Independent second-theorem bounds |

Coverage records 75 harvested rows: 43 included, 6 inline, 17 specifically out of scope in source rows, plus 9 canonical included rows. Every included or inline row names its destination; every out-of-scope row gives a specific reason. Four previously published source results are marked out of scope for new authoring and retain their exact published item IDs. No source failed, was dropped, or needed a retry/alternative proof decision.

The source's totally complex Hermite window is `|Re z₁|<1`, `|Im z₁|<√(D+1)` with unit discs elsewhere. Its exact volume is `4π^(r₂−1)√(D+1)`; the printed Milne volume `2π^(r₂−1)√(D+1)` omits the factor two for this stated rectangle. The manifest uses the geometric volume and checks the strict Minkowski threshold directly. For `r₂=1`, the product over later complex places is empty, so the norm argument does not make the first conjugate exceptional. The repaired proof instead shows that the nonzero window point cannot be rational integral because `|Re z₁|<1`; degree two then makes it primitive. For `r₂≥2`, the norm product is nonempty and the restriction-fibre route applies. The restriction-fibre theorem and characteristic-zero separability remain explicit dependencies.

## Six authorized proof repairs

The selected repair pass kept every statement and conclusion intact. In the successive-minima definition, the false minimum over unit-coordinate vectors was replaced by the bounded inverse basis-map estimate from the published `lem-euclidean-linear-maps-have-matrices-and-are-bounded`. The definition now also proves bounded lattice intersections directly by bounding integer coordinates, keeping this choice-free remark independent of the AC-qualified fundamental-domain lemma. The adapted-flag proof now chooses `ε<λᵢ` by continuity, uses the common finite set `(t₀+1)C∩Λ` for every approximating dilate, and separates the `p=0` case from the nonempty finite gap minimum.

The deformation proof establishes centroid containment inside each affine slice by relative separation, computes Borel centroid coordinates with the constant fibre Jacobian `sqrt(det(AᵀA))`, splits signed moments before Tonelli, derives oddness from `Fⱼ(−x)=−Fⱼ(x)`, and exhausts the interior using only positive dilations indexed by `k≥2`. The primitive-element proof supplies `π>2` from the `N=1` finite remainder of the published Gregory–Leibniz theorem and handles the totally complex quadratic field by rational-integrality and the degree-two tower law. The quintic example's critical value is corrected to `f(−c)=4c/5−1`; the scaled-embedding counterexample now proves `3<π<4` from the `N=7` and `N=2` finite remainders.

## Dependency and mathematical audit

Every scaffold item has an explicit `deps` array and `dependency_level`; levels use only other items in this run and reach 9 on the B page. Batch-local level recomputation found 31 items, 0 errors. All 31 current Step-1 readiness records are `ready` and cite examined dependency IDs plus a proof strategy. Changed contracts and their descendants were rerecorded; unchanged ready records were preserved. The five full-text sources support the complete strategy, while Step 3 remains the independent mathematical review.

The direct external set contains 43 published item IDs. A mechanical proof-`deps` closure reaches 1,150 external published IDs with no missing item, unpublished/recorded prerequisite, or proof-`deps` cycle, and no route to `deferred-set-theory-beyond-choice`. `justified_by` links were checked as well-definedness obligations rather than reversed proof edges, as `SCHEMA.md` requires; a definition and its later well-definedness lemma naturally refer to each other in the metadata. This count checks graph integrity and publication state, not the correctness of every one of those 1,150 inherited proofs. The direct mathematical audit read the needed published statements and proofs, especially CA-9's class-group/factorization route, NT-20's ring-of-integers/ideal-norm/discriminant route, the finite-dimensional Lebesgue interfaces, and the embedding-fibre route.

The class-bound construction uses `b=uI⁻¹` with `0≠u∈O_K` and `b` integral, then `a=(β)b⁻¹`: its class is the original `[I]`, and `Na=|Nβ|/Nb`. This uses the published `cor-ring-of-integers-is-a-dedekind-domain`, CA-9 invertibility and class-group well-definedness, and integral ideal norm multiplicativity. The small-prime corollary explicitly uses CA-9's proved `thm-unique-factorisation-of-ideals-in-dedekind-domains`; it does not use a Recorded result to replace that proof. The separate number-field ZF factorization item `thm-number-field-integral-ideal-factorisation-in-zf` is now published and proved; the design's description of it as merely recorded is stale. All CA-9/volume-dependent claims state AC and depend on `def-axiom-of-choice`; the finite bounded-ideal and bounded-polynomial lemmas remain choice-free.

The B computations check both norm bounds and the exclusions. For `X^5−X−1`, a direct modular calculation found no roots mod 2 or 3, no irreducible quadratic factor mod 3, and resultant/discriminant 2869 = 19·151; thus the irreducible quintic has maximal power basis and Minkowski constant below 4. This polynomial is the sign change of Milne's `X^5−X+1` example and defines the same field. The quadratic examples use explicit ideals and norm multiplicativity. The scaled-embedding counterexample uses a disk of radius `6/5` in `√2 Z²`, whose area exceeds the false mixed-convention threshold but contains no nonzero scaled-lattice vector.

No dependency on an item or page in another batch of this run was found for either owned consumer page. [The batch-2 cross-batch input](frontier-37-owner-30-batch-2.cross-batch-dependencies.json) is therefore `[]`; `frontier-dependency-ledger refresh` succeeded. Published prerequisites do not become cross-batch planned suppliers.

## Published prerequisite observations for the owner ledger

1. **`cor-ring-of-integers-is-a-dedekind-domain` — published**, on `number-fields-rings-of-integers-and-discriminants`. Its Proof 1.1 applies `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` (**published**) to `Z⊂K` without citing the premises that `Z` is Dedekind and `K/Q` is separable. Both are true and independently checkable: `ex-integers-with-absolute-value-are-euclidean`, `thm-euclidean-domain-is-a-pid`, and `ex-pid-as-dedekind-domain` are **published** for the base ring; `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect` and `cor-algebraic-extensions-of-perfect-fields-are-separable` are **published** for the extension. Repair the published corollary by adding the actual supplier IDs and spelling out this instantiation. The batch class-bound item names the corollary directly; the missing citations are a published dependency/proof-explication debt, not a false Dedekind claim.
2. **`thm-ramified-primes-and-the-number-field-discriminant` — published**, on `prime-ideal-decomposition-ramification-and-the-different`. Its Proof 1.1 states the equivalence among degeneracy of the trace pairing on `O_K/pO_K`, nonreducedness, and an `e>1` factor in one sentence labelled “algebra”. This is load-bearing for `cor-no-nontrivial-number-field-is-unramified-over-q` and `ex-no-everywhere-unramified-extension-of-q` (both **batch-2 scaffold, ready**). Milne Ch. 3 Thm. 3.35 and Lemmas 3.36–3.38 supply the full route. The existing `thm-chinese-remainder-theorem-for-comaximal-ideals` and `thm-trace-form-is-nondegenerate-iff-separable` are **published** partial suppliers; the finite residue-algebra trace criterion needs to be written explicitly. A proposed new supplier `lem-trace-degeneracy-of-finite-residue-algebra-detects-ramification` is **not published or in this run** and belongs immediately before the published criterion if the owner chooses a split. Alternatively expand Proof 1.1 in place, covering nilpotents, perfect residue fields and the prime-power CRT factors. The batch corollary's strategy independently states this argument, so no false ramification conclusion is being assumed. This is a potential published proof-explication/dependency defect for canonical-ledger review.

No published file or canonical published-defect ledger was edited by this batch worker.

## Checks and remaining whole-run work

| Check | Result at this dispatch |
| --- | --- |
| `coverage-checklist ... --require-destination` | Pass: 1 page, 75 harvested results, 0 errors/warnings |
| `source-fetch-check` on batch coverage | Pass: 5/5 sources fetch-verified and resolved; original `--stamp` created five full-text stamps |
| `manifest-deps` on all 30 run manifests | Pass: 552 items, 0 errors |
| `content-policy --manifest-only` on all 30 run manifests | Pass: 552 scoped items, 0 errors/warnings |
| `validate-plan research/plan-spec.json` | Pass (exit 0); inherited redundant-prerequisite notices and 319 planned pages without item lists were reported |
| `extcheck` | Pass (exit 0); global output lists 40 marked consequences resting on recorded material elsewhere, none in this batch's proof-`deps` closure |
| Batch-local `dependencyLevels` and Step-1 record check | Pass: 31 labels, max level 9, 31/31 current `ready` records |
| Required whole-run `item-dependency-levels check --run frontier-37-owner-30` | Pending: 14 A/B pages in other batches still had empty scaffold inventories when run; no batch-2 label error was reported |
| Whole-run `step1-decisions check` | Pending other batches: 496/551 current ready item records and 14 empty pages at that check; batch 2 is 31/31 current |

These readiness records are scaffold judgments. They are not the later owner/operator reconciliation or Step-3 proof approval.
