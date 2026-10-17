# Step 3a reader report — batch 35

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `35` only

## Opened inventory

**Assigned pages**

- `csm-fluctuations-countermodels` — A page.
- `csm-fluctuations-countermodels-examples` — B page.

**Assigned items**

- `def-csm-finite-variance`
- `pthm-csm-bernoulli-fluctuation-bounds`
- `pthm-csm-nonadditive-phase-countermodel`
- `pthm-csm-walk-recurrence-and-entropy`
- `ex-csm-bernoulli-fluctuation-bounds`
- `ex-csm-nonadditive-phase-countermodel`
- `ex-csm-walk-recurrence-and-entropy`

**Direct item suppliers opened for the relevant definitions and statements**

- `cor-characteristic-function-criterion-for-weak-convergence`, `cor-mean-value-theorem`, `lem-characteristic-function-of-a-normal-law`
- `def-axiom-of-choice`, `def-characteristic-function-of-a-real-random-variable`, `def-expectation-on-a-finite-probability-space`, `def-finite-probability-space-and-event`, `def-finite-real-random-variable-and-distribution`, `def-moment-generating-function`, `def-natural-logarithm`, `def-real-analytic-function`, `def-real-exponential-function-and-e`, `def-standard-normal-and-normal-laws`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-weak-convergence-of-borel-probability-measures`
- `post-csm-examples-ensemble-preparations`
- `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-csm-examples-flow-fine-entropy`, `thm-derivative-of-exponential`, `thm-logarithm-derivative-and-integral`, `thm-logarithm-slower-than-every-positive-power`, `thm-natural-logarithm-laws`, `thm-power-series-sums-are-real-analytic`, `thm-real-analytic-functions-closed-under-algebra-quotients-and-composition`, `thm-real-analytic-inverse-and-implicit-function-theorems`, `thm-sine-and-cosine-derivatives`, `thm-taylor-peano-remainder`
- Also opened `lem-csm-examples-smooth-flow-jacobian` to check the flow-entropy supplier's cited hypothesis.

The batch proof-contract file covers the six proof-bearing assigned carriers. I checked its cited supplier mappings, derivation steps, boundaries, and finite checks against the current item text. The variance definition has no proof contract, as expected for a definition.

## Review and dispositions

The finite-variance definition agrees with its finite-space, random-variable, and expectation suppliers. The Bernoulli theorem proves normalization, moments, the quadratic relative-entropy bound, tail bounds, point-mass bounds, and the stated fixed-parameter rate under its explicit product law. Its example's substitutions at $n=100$, $p=1/4$, and $k=35$ are correct.

The three-sector theorem's cardinality contradiction, shell selection, partition-function estimate, transition location, mean-energy limits, and analyticity claim follow from the stated finite model. The $N=4$ example gives weights $(1,1/16,1)$, partition function $33/16$, and middle-sector probability $1/33$, as claimed.

The walk theorem's finite product calculations, characteristic-function limit, rotor period and recurrence witnesses, and four-state coarse-entropy calculation are correct under the stated assumptions. The example's $\ell=1/2\,\mathrm m$, $n=8$, variance $2\,\mathrm m^2$, and $2\pi\,\mathrm s$ rotor period are correct. These items distinguish model predictions from observations and make no empirical claim.

One fatal defect remains in a draft supplier outside this batch and is recorded below. No batch-35 carrier or page prose was edited.

## Uneditable finding

`thm-csm-examples-flow-fine-entropy` is owned by batch 34. Its Statement assumes a jointly $C^2$ diffeomorphic family $\chi_t$ and a $C^1$ divergence-free “velocity field” $b$, but does not state any relation between them. In particular, it omits the hypothesis $\partial_t\chi(t,a)=b(t,\chi(t,a))$ that the cited Euclidean Jacobian lemma requires; its Proof step 1.1/F1 nevertheless applies that lemma to the family. The theorem is false under its written hypotheses: on $\mathbb T=\mathbb R/(2\pi\mathbb Z)$, take normalized angle measure, $I=(-1,1)$, $\chi_t([\theta])=[\theta+t\sin\theta]$, and $b=0$. For $|t|<1$ these are smooth diffeomorphisms with $\chi_0=\mathrm{id}$ and $\operatorname{div}b=0$. With $f_0([\theta])=1+\eta\cos\theta$, $0<\eta<1$, the stated $f_t=f_0\circ\chi_t^{-1}$ has integral $1+\eta t/2\ne1$ for $t\ne0$. The consumer's coarse-entropy comparison in step 2.3 therefore lacks a verified supplier. The flow theorem must tie $b$ to $\chi_t$ in local translation charts (and apply the periodic Jacobian result with that relation), or assume measure preservation directly.

## Page verdicts

- `csm-fluctuations-countermodels`: **Hold for the inherited supplier defect.** No page-summary defect was found; the Bernoulli and three-sector carriers were checked. The walk carrier's comparison in step 2.3 depends on the batch-34 result above.
- `csm-fluctuations-countermodels-examples`: **No page-local defect.** The two non-walk examples check out. The walk example inherits the hold through its assigned theorem dependency.

## Edits and blockers

- Edits: none. This was a read-only assignment; no reflow, precheck, or proof-layout command was needed.
- Blocker: batch 34 must repair or otherwise resolve the missing flow/velocity relation before the affected consumer comparison can be accepted.
- Coverage limitation: I checked the relevant direct supplier definitions and statements, not the complete transitive proofs of the published mathematical infrastructure. The batch-34 supplier defect is bound to the current raw item bytes recorded in the findings JSON.
