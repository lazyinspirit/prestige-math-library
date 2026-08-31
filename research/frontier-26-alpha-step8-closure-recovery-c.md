# frontier-26 — Step 8 closure recovery, group c

Handled 11 current rejudge rejection tuple(s): 3 confirmed fatal and 8 confirmed nonfatal. No false positives, incoming alerts, outgoing cross-group alerts, or published repairs occurred.

## Exact outcomes

| item | context_sha256 | outcome | pre-edit guard hash |
|---|---|---|---|
| `def-calligraphic-l-p-on-a-measure-space` | `c38e9d45308a13f2c7e907a8d1dc9a7c80868fa82b4f90f55dc251626a2a750a` | `confirmed_nonfatal` | `c49448f7593d2fc30e94e590b2ca3fac696559547f8051d9c723eb374d794c68` |
| `def-condition-number-of-a-simple-eigenvalue` | `ab5368eb804133b68cf99aa99700b19fabf51d4b952a1ff092754254379bc26d` | `confirmed_nonfatal` | `ce7b9289f94218995c2bcfb6672ed9f226ee65024bf8d5e853f17187edd1c795` |
| `def-grade-and-relative-minimal-polynomial-of-a-start-vector` | `04b28d48330dd1bfcaf3bd5444db70b279c5ed01c6dc89d37980012d6c605fd4` | `confirmed_fatal` | `47447ee3ceaa4536847ac8442574cdab760fa7e108315a27aef197026a849012` |
| `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere` | `8efc4ede3048a89b0388d8b550da39d6aeb158a56c9da0a15de9c648647208b8` | `confirmed_nonfatal` | `4dc652e9eccaab510bf95e54e44832ccc15e8acca708a7ebd50cf42cec4324a5` |
| `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector` | `2a5282ae1331582660df2d3f0a498ea573866b427e98eff901ba66cf35fab9b0` | `confirmed_fatal` | `7d3c3aeed13533d2345f23906b93c5fbdcc2b3388ce4032c9ae163cfec756484` |
| `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance` | `4ce402973d452ed1eaf529b91e54758caf32283232454ad1b1e6d56f1ec0ee96` | `confirmed_nonfatal` | `39bcdfa8e3820b317d3a7c26fdc3cc85cc497f8604714188321aaad8515033f0` |
| `rem-covering-maps-among-complete-analytic-functions` | `5e40fc922ef7a6a81de46fbea1d93cb289141aa9ef9a175efaeecde845d9bee1` | `confirmed_nonfatal` | `5e8801e1fbb7bf5910660d6375336bca910b3684dcafb37bae30e0e4765b1291` |
| `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities` | `91dafb1dc6b4af5004cd85652486c1b1811d7bbd63953dc508282c57a94b2db8` | `confirmed_nonfatal` | `ba53b279488194c9cba78c8da81e616d5d4012b1306353d1066ce347360c9ea2` |
| `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization` | `6552097c2013e65c6649e7d0f3eed5678cce6863ac409ae3343f45db0fef1fc5` | `confirmed_fatal` | `7b00e2672e763c94757e3fd76c9fc42f741439f6f7728984c877ef8be322edd6` |
| `thm-monodromy-theorem` | `46e9772045862a770604bea9610e64043a998b386ff1a04bedc9ead644ffafda` | `confirmed_nonfatal` | `fce75b8036eb2015374fde4da45eb380c4c453065801bebe55d0232372d6cfa6` |
| `thm-riemann-surface-of-the-logarithm` | `f3992ea6b6d3fba4a20135d848402dacc5f88afb6c36b396473955a08745526d` | `confirmed_nonfatal` | `2190bbee557d4be7683849f3c3f0cc432a6ea35a4a68f41f63028c4be472d422` |

## Licensed repairs

### `def-grade-and-relative-minimal-polynomial-of-a-start-vector`

- Exact context: `04b28d48330dd1bfcaf3bd5444db70b279c5ed01c6dc89d37980012d6c605fd4`.
- Repair: Fixed the coefficient domain to the same field, explicitly $\mathbb R$ or $\mathbb C$, for $A$, $b$, and the relative polynomial.
- Matching adjudication and defect-ledger row appended.
- Rejudge target: yes.

### `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector`

- Exact context: `2a5282ae1331582660df2d3f0a498ea573866b427e98eff901ba66cf35fab9b0`.
- Repair: Restored the source definition's $\mathbb R$ or $\mathbb C$ matrix and matching-vector hypotheses in Statement and Given.
- Matching adjudication and defect-ledger row appended.
- Rejudge target: yes.

### `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`

- Exact context: `6552097c2013e65c6649e7d0f3eed5678cce6863ac409ae3343f45db0fef1fc5`.
- Repair: Restated [L1] with the source proposition's explicit alternative $p=0$ or $\deg p<m$.
- Matching adjudication and defect-ledger row appended.
- Rejudge target: yes.

## Nonfatal closures

- `def-calligraphic-l-p-on-a-measure-space`: The power $|f|^p$ is measurable because it is the composition of measurable $f$ with the continuous nonnegative function $t\mapsto |t|^p$; the objection is a local dependency gap, not a defective definition. No content, contract, impact, or judge record changed.
- `def-condition-number-of-a-simple-eigenvalue`: For a simple eigenvalue, the right eigenspace is one-dimensional, and the compatible left eigenspace is the corresponding one-dimensional eigenspace of $A^*$; the scale-independence claim is correct and the omitted support is immediate. No content, contract, impact, or judge record changed.
- `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere`: Every norm-convergent sequence is Cauchy in the induced metric. The typewriter witness remains valid; only this standard implication was left uncited. No content, contract, impact, or judge record changed.
- `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance`: The residual formula is exactly the defining Arnoldi projection formula from the process definition. The equivalence and both directions remain correct. No content, contract, impact, or judge record changed.
- `rem-covering-maps-among-complete-analytic-functions`: The complete-analytic-function definition already depends on chain-independence; concatenation therefore reaches the prescribed intermediate germ. The covering argument is correct. No content, contract, impact, or judge record changed.
- `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities`: The real triangle inequality is elementary, and the two signed finite Cauchy–Schwarz theorems are linked directly in the same sentence. The repaired distinction between absolute-product and signed left sides is correct. No content, contract, impact, or judge record changed.
- `thm-monodromy-theorem`: Continuity on the compact subinterval gives the stated uniform tube by a finite-subcover argument. This is an immediately closable compactness detail, not a false step. No content, contract, impact, or judge record changed.
- `thm-riemann-surface-of-the-logarithm`: The identity $\exp\ell(u)=u$ propagates through a continuation chain by the identity theorem on each overlap. The logarithm-surface construction remains correct. No content, contract, impact, or judge record changed.

## Rejudge targets

- `def-grade-and-relative-minimal-polynomial-of-a-start-vector`
- `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector`
- `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`

The batch-2 proof contracts for the repaired proposition and theorem and their direct citation consumers were regenerated, then the level contract was deterministically re-merged.

## Checks

- Focused precheck: 2 proof-bearing repaired files, 0 failures.
- Focused rendercheck: 3 repaired files, 0 errors.
- Batch-2 content policy: 60 items, 0 errors, 0 warnings.
- Batch-2 proof contract: 48/48 items, 0 errors, 0 warnings.
- Batch-2 citation fidelity: 66 citations, no missing quote and no widening candidate.
- Step-8 guard: 88/88 changed items licensed; 0 errors, 0 warnings.
- Step-8 scope check: 0 open rejection rows routed.
- Defect-ledger validation: 315 run rows, 0 shape errors.
- Exact adjudication reconciliation reports all current rejection candidates adjudicated.

## Sources and alerts

All decisions were resolved from the current items and their on-disk dependencies; no external web source was needed. No cross-group mathematical finding arose.

## Blockers

No group-c blocker. The whole-run defect-ledger closure check still reports 14 unmatched fatal rows belonging to another group; none names a group-c item, and this dispatch did not alter them.

