# Reader 12 — batch 12

Run: `frontier-40-geometry-braids-rep-27`. Independent Step 5a review completed. This report is reader evidence, not a judgment or certification.

## Scope and evidence

Opened both assigned pages, the current batch manifest, reader brief, and all 27 assigned item bodies. Assigned suppliers were read before their assigned consumers. External statements were opened as their uses were traced; some elementary calculus targets were opened after their first consumer, and all required target statements were available before final repair/handoff. External suppliers were opened at their definitions/statements (and relevant facts where needed); this is not a recursive audit of all published proofs. No rendered evidence bundle was located for this dispatch.

Primary source: Ivanov–Olshanski, <https://arxiv.org/pdf/math/0304010>, downloaded and read in relevant complete sections, §§1–5 and §6 through the proof of Theorem 6.1, printed pp. 5–32. The source's moment generators, two filtrations, multiplication rules, LLN, and character CLT agree with the principal authored claims. Supporting source: Ivanov–Kerov, <https://arxiv.org/pdf/math/0302203v1>, printed pp. 5–7 and 10–11: partial-permutation counts and Theorem 9.1 (actually on p. 11). Romik's author-hosted manuscript was downloaded; §0.1 pp. 1–2 was read to check convergence conventions. Its cited Gaussian-moment locator does not supply Gaussian moments.

## Confirmed local repairs performed

- `prop-plancherel-weights-sum-to-one`, step 1.1: the assertion that every prime divides no positive integer is false; only characteristic zero and `0` not dividing `n!>0` are needed.
- `thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law`, Statement/step 3.1: distinguish a partition-valued random element from a real random variable; the cited real-valued definition cannot make the map itself real-valued.
- `def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram`, Definition: specify the outer staircase and axis rays, and the empty profile; restrict the transformed area region to the compact support interval (otherwise its equality edges include infinite axis rays); remove the false description of Plancherel probability as counting measure.
- `lem-rsk-union-bound-localizes-plancherel-profiles`, F3: the binomial definition explicitly defers the factorial formula to `thm-binomial-closed-formula`; use that exact supplier.
- `lem-bounded-lipschitz-profile-moments-control-uniform-distance`, steps 1.3/4.1: restrict the integral triangle argument to continuous tests so absolute-value integrability is supplied, and prove the topology comparison at arbitrary profiles using half their difference. Avoid relying on unproved metrizability/sequential-closure claims.
- `thm-shifted-character-basis-and-weight-filtration`, Statement/steps 1.1/4.1 and source locator: generators alone are not a vector-space basis; use monomials, justify restriction/extension between Young and continual diagrams, and correct IK Theorem 9.1's location.
- `lem-shifted-character-multiplication-by-p-k`, step 1.3: the `(k+ell)`-point counting set consists of fixed points of the product, not the whole support `X_1`.
- `lem-profile-moment-generators-and-shifted-character-basis`, F3: lower canonical degree does not imply lower weight (for example the `p_1^2` term in `p_3^#` has the same weight as `p_3`). Remove that false assertion, define coefficient functionals on the full basis before restriction to homogeneous elements, and derive generator values directly from the top-partition rule.
- `def-normalized-shifted-character-basis-elements`, Definition: explicitly restrict normalization to `n>=1` to exclude zero denominators/ambiguous `0^0` at the empty partition.
- `lem-hermite-orthogonality-and-monomial-expansion`, steps 1.2/1.3/4.1: avoid undefined `H_{-1}` and coefficients outside their range, and cite the binomial formula correctly.
- `lem-standard-gaussian-is-determined-by-its-moments`, Statement/steps 1.3/1.4: define the general sequence as `m_k=E[Z^k]`; replace the layer-cake argument incorrectly applied at `k=0` with an exponential-series bound; apply real Taylor bounds separately to real and imaginary parts of the characteristic functions.
- `thm-multivariate-method-of-moments-for-a-determinate-limit`, prerequisite use: supply Euclidean completeness, separability, and cube compactness before invoking Polish-space extraction; establish Gaussian mixed absolute moments by an elementary bound.
- `cex-plancherel-measure-is-not-uniform-on-partitions`, Statement refuted/step 1.1: the heading currently contains the true nonuniformity claim while the proof says it refutes it. State uniformity as the false claim and keep the witness and all nonuniformity conclusions.
- A-page prose: correct the statement about exactly which items assume AC; the Hermite orthogonality and final CLT items also declare AC.

All listed repairs were applied to the current assigned carriers. The limit-shape and cycle-character CLT conclusions were preserved; no withdrawal is proposed. No confirmed current mathematical defect remains outside the edit scope.

Additional edits and evidence:

- `def-shifted-character-observables-and-profile-moments`, Definition (a)–(c): proved real-valuedness from inverse-conjugacy and the conjugate character identity; continuity and compact support now supply Riemann integrability, rather than the insufficient bounded-support condition; scaling cites the monotone substitution theorem.
- `def-monic-probabilists-hermite-polynomials`, Gaussian interpretation: qualified it by the AC assumption of the normal-law supplier; the recurrence remains choice-free.
- `lem-hermite-leading-terms-for-normalized-shifted-characters`, Statement/reference: required `n>=max(1,|rho|)`, including the empty-partition case, after normalization was explicitly restricted to positive orders. Corrected the Corollary 4.13 locator to p. 25. The recurrence, exact removal of ones and finite negative-degree remainder were independently checked against IO pp. 23–25 and 30–32.
- `prop-scaled-plancherel-profile-moments-converge-in-probability`, reference: corrected Proposition 2.2's locator from p. 11 to p. 10. The proof's column-only expectation limit, multiplicativity and variance argument were checked against IO Theorem 5.4, pp. 27–28.
- `thm-kerov-central-limit-theorem-for-normalized-cycle-characters`, reference: corrected Śniady's Theorem and Definition 3.1 locator (p. 10), and separated Theorem 3.2/Corollary 3.3/Example 3.4 at pp. 11–13. Read those statements and the full Corollary 3.3 proof; the later genus-expansion proofs were not read or used for local closure.
- `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned`, reference: separated Chapter 2's fluctuation/edge sections (pp. 79–82, 143–148) from §§1.18–1.20's dimension/growth/limit-shape sections (pp. 62–70). Checked the table of contents, Chapter 2 introduction, and final limit-shape passage, without reviewing the out-of-scope BDJ proof.
- A-page prose also now cites the shifted-observable definition for profile moments, rather than the Russian-profile definition, which does not define those moments.
- The Gaussian determinacy, Hermite orthogonality, and multivariate moment proofs now cite the general expectation-linearity/monotonicity/modulus supplier. The moment theorem explicitly derives the zero-variance case using Markov and countable subadditivity. Completeness, rational countability/density and Heine–Borel supply its Polish-space and compact-cube hypotheses.

The six permutation insertions and the hook/tableau computations at `n=3` were checked directly. The nonuniformity witness uses dimensions `1` and `n-1` for `(n)` and `(n-1,1)`; conjugation gives the same hook dimension for the shape mentioned in B-page prose. No B-page prose was changed.


## Contract corrections

Updated `research/frontier-40-geometry-braids-rep-27-batch-12.proof-contracts.json`. Regenerated the 19 proof-bearing entries from current Facts/steps, including exact changed-supplier quotations in untouched consumers; definition/remark entries have no proof steps and retain their worksheet structure. No certification or judgment was added. Removed any stale `verification.judge` record from edited items (none remains on the 19 changed carriers).

Corrected false/stale boundary evidence: the one-box profile has support `[-1,1]`, not a point; `eta_(1)=p_1^#/n=1`, not `sqrt(n)`; Hermite recurrence at `m=1` uses `H_0`, not `H_-1`; no `tilde p_0` is defined; the empty shifted character equals one by its identity-character quotient; the joint-convergence definition does not claim vanishing character expectations; lower-weight structure-constant terms are allowed; `L_0(1)=1` handles constant products; and the nonuniformity proof's general comparison is a hook and a row, not a column and a row. Updated Taylor/MGF and Polish-space evidence and renumbered the two canonicalized proofs. These are mathematical evidence corrections, not new review stamps.

## Opened inventory

Both complete assigned page files:

- `library/representation-theory/plancherel-measure-and-asymptotic-young-diagrams.md`
- `library/representation-theory/plancherel-measure-and-asymptotic-young-diagrams-examples.md`

All assigned items below were opened completely. “Repaired” includes source-only corrections.

| Item (`items/<id>.md`) | Reader disposition |
| --- | --- |
| `def-plancherel-measure-on-partitions` | Reviewed; no confirmed defect. |
| `prop-plancherel-weights-sum-to-one` | Reviewed; repaired. |
| `thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law` | Reviewed; repaired. |
| `def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram` | Reviewed; repaired. |
| `def-logan-shepp-vershik-kerov-limit-profile` | Reviewed; no confirmed defect. |
| `lem-rsk-union-bound-localizes-plancherel-profiles` | Reviewed; repaired. |
| `lem-bounded-lipschitz-profile-moments-control-uniform-distance` | Reviewed; repaired. |
| `def-shifted-character-observables-and-profile-moments` | Reviewed; repaired. |
| `def-joint-convergence-and-normalized-cycle-character-observables` | Reviewed; no confirmed defect. |
| `thm-shifted-character-basis-and-weight-filtration` | Reviewed; repaired. |
| `lem-shifted-character-multiplication-by-p-k` | Reviewed; repaired. |
| `lem-profile-moment-generators-and-shifted-character-basis` | Reviewed; repaired. |
| `prop-plancherel-expectations-of-shifted-character-observables` | Reviewed; no confirmed defect. |
| `prop-limit-profile-moments-are-central-binomial-coefficients` | Reviewed; no confirmed defect. |
| `def-normalized-shifted-character-basis-elements` | Reviewed; repaired. |
| `lem-hermite-leading-terms-for-normalized-shifted-characters` | Reviewed; repaired. |
| `def-monic-probabilists-hermite-polynomials` | Reviewed; repaired. |
| `lem-hermite-orthogonality-and-monomial-expansion` | Reviewed; repaired. |
| `lem-standard-gaussian-is-determined-by-its-moments` | Reviewed; repaired. |
| `thm-multivariate-method-of-moments-for-a-determinate-limit` | Reviewed; repaired. |
| `prop-scaled-plancherel-profile-moments-converge-in-probability` | Reviewed; repaired. |
| `thm-plancherel-young-diagrams-converge-to-the-limit-shape` | Reviewed; no confirmed defect. |
| `thm-kerov-central-limit-theorem-for-normalized-cycle-characters` | Reviewed; repaired. |
| `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned` | Reviewed; repaired. |
| `ex-plancherel-measure-on-partitions-of-three` | Reviewed; no confirmed defect. |
| `ex-rsk-shapes-of-all-six-permutations-in-s3` | Reviewed; no confirmed defect. |
| `cex-plancherel-measure-is-not-uniform-on-partitions` | Reviewed; repaired. |

The following 79 published direct suppliers were opened at their complete relevant Definition/Statement sections; representation-theory Facts were also read. Their hypotheses and directions were checked at the uses here. This inventory does not claim that all their proofs or their recursive dependency closures were read.

```text
cor-cauchy-schwarz-for-random-variables
cor-chebyshev-inequality-for-random-variables
cor-expectation-linearity-monotonicity-and-modulus-bound
cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients
cor-markov-inequality-for-random-variables
cor-mean-value-theorem
cor-paths-in-the-young-graph-index-standard-tableaux
cor-sum-of-squares-of-standard-tableau-numbers
cor-taylor-remainder-bound
cor-tightness-extracts-a-weakly-convergent-subsequence
cor-weierstrass-approximation-on-a-closed-interval
def-abs-value
def-axiom-of-choice
def-binomial-coefficient
def-characteristic-function-of-a-real-random-variable
def-continuity-real
def-convergence-in-distribution-of-random-elements
def-convergence-in-probability
def-darboux-integral
def-derivative
def-factorial-and-falling-factorial
def-finite-probability-space-and-event
def-finite-real-random-variable-and-distribution
def-law-or-distribution-of-a-random-element
def-moments-variance-and-covariance
def-multivariate-normal-law
def-partition-young-diagram-and-conjugate-partition
def-pointwise-uniform-and-uniformly-cauchy-convergence
def-polish-space
def-principal-inverse-sine-and-cosine
def-row-insertion-and-bumping-route
def-standard-normal-and-normal-laws
def-taylor-polynomial-and-remainder
def-tight-family-of-probability-measures
def-uniform-finite-probability-space
def-uniformly-integrable-family
def-weak-convergence-of-borel-probability-measures
lem-characteristic-function-of-a-multivariate-normal-law
lem-characteristic-function-of-a-normal-law
lem-gaussian-even-moment-bound-for-brownian-increments
lem-moments-give-derivatives-of-the-characteristic-function
lem-of-abs-value
lem-of-triangle-inequality
lem-probability-measure-basic-identities
lem-rat-embeds-dense
lem-wallis-integrals-recurrence-and-squeeze
prop-basic-value-properties-of-a-complex-character
thm-algebra-of-derivatives
thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces
thm-binomial-closed-formula
thm-chain-rule
thm-change-of-variables-for-compact-jordan-sets
thm-character-of-the-regular-representation
thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
thm-complex-specht-modules-are-irreducible
thm-continuous-implies-integrable
thm-cramer-wold-device
thm-derivative-of-an-inverse
thm-euclidean-space-complete
thm-exponential-definition-equivalence
thm-factorization-of-expectations-for-independent-variables
thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree
thm-heine-borel-rn
thm-hook-length-formula
thm-integration-by-parts
thm-linearity-of-the-integral
thm-monotone-change-of-variable-for-riemann-integrals
thm-monotonicity-of-the-integral
thm-multinomial-theorem
thm-of-archimedean
thm-prokhorov-tightness-theorem-on-polish-spaces
thm-rationals-countable
thm-robinson-schensted-correspondence
thm-schensted-longest-increasing-and-decreasing-subsequence-theorem
thm-sine-and-cosine-derivatives
thm-skorokhod-representation-on-polish-spaces
thm-standard-polytabloid-basis
thm-uniqueness-of-a-law-from-its-characteristic-function
thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces
```

Additional published targets opened: `lem-word-reversal-transposes-the-insertion-tableau` (complete item), `lem-polish-closed-products-and-baire-parametrization` (Statement), `thm-layer-cake-formula-for-l-p-powers` (Statement; the incorrect zero-order use was removed), and `thm-linearity-of-expectation` (Statement; its finite-space restriction was distinguished from the general expectation corollary).

The source basis/isomorphism, coefficient inversion and partial-permutation facts are used as expressly cited authoritative theorems. Their relevant supplied arguments were read; no independent reconstruction of the entire shifted-Schur theory or other upstream source books is claimed. Romik pp. 18–26 were read for the insertion, shape-law and hook-formula locations, and §0.1 pp. 1–2 for convergence conventions. The two smaller `n=3` calculations were verified locally rather than inferred from a source verdict.

## Checks and page verdicts

- Reflow ran on all 19 changed items and returned exit 0. Each changed item received precheck; two initial numbering repairs were adopted, reflowed and rechecked, and all final prechecks passed or were not applicable for definitions/remarks.
- Strict proof-contract check: 27/27 entries checked, 0 errors, 2 heuristic `shotgun-bracket` warnings (the bump and Gaussian-parity steps cite several genuinely used facts while other steps use earlier results).
- Scoped rendercheck: all 27 items and both pages, 29 files, exit 0; every math span and YAML frontmatter parsed with the actual renderer.
- Final required batched `node tools/proof-layout.mjs` invocation covered the explicit 19 changed item paths after all item edits and formatters: 19 items, 79 steps, 0 defects, exit 0.

**A page verdict:** current page mathematics and summary are sound after the listed local repairs. The two Kerov filtrations remain distinct; the law of large numbers and fixed-dimensional cycle-character CLT retain their full statements. No sharp LIS or edge-fluctuation result is inferred.

**B page verdict:** current examples and nonuniformity witness are sound. The false statement/witness labeling was repaired in its assigned counterexample item; B-page prose was read and left unchanged.

No unresolved mathematical blocker or uneditable item/page finding remains. Mechanical checks are local validation, not independent proof judgments.

## Lead follow-up and limitations

The batch manifest was treated as historical scope evidence and left untouched. It still has obsolete formulations for the two filtrations/top term in `thm-shifted-character-basis-and-weight-filtration`, the homogeneous top-component wording in `lem-profile-moment-generators-and-shifted-character-basis`, the erroneous `c_{m,m}=1` in `lem-hermite-orthogonality-and-monomial-expansion`, positive-order normalization boundaries, and the undefined general moment sequence in `lem-standard-gaussian-is-determined-by-its-moments`. Step 5b should reconcile those manifest entries against the repaired carriers. These are not unrepaired current-item defects and therefore are not routed as findings on edited items.

The run status recomputed from `.autopilot/frontier-40-geometry-braids-rep-27` places this work at Step 5a. No transitions, judgments, publication, commits, or other-batch edits were performed. Full published-proof recursion, the whole Romik book, and Śniady's later genus-expansion proofs are outside the evidence produced here. The independently checked current claims use the source ranges and suppliers explicitly inventoried above.
