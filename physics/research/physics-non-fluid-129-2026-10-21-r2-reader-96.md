# Step 3a reader report — batch 96

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Date: 2026-10-22

## Verdict

- **A page `csm-frontier-inverse-gibbs`:** its summary matches the seven assigned definitions and results. The finite IID MLE claim is conditional on the stated product sampling model; the latent posterior conditions and pseudo-likelihood distinction are carried correctly. I clarified the dominated density's measurable domain in its assigned Definition and checked its posterior consumer. One nonfatal prose defect in a published mathematical supplier is reported below.
- **B page `csm-frontier-inverse-gibbs-examples`:** its two hypothetical finite examples and summary are accurate. The all-plus likelihood is strictly increasing at finite fields, and the two-spin exact and pseudo-posterior odds differ. No empirical result is reported.
- **Blocker:** none for the assigned carriers.

## Opened inventory

### Assigned pages and items

- `library/classical-statistical-mechanics/csm-frontier-inverse-gibbs.md` — A page.
- `library/classical-statistical-mechanics/csm-frontier-inverse-gibbs-examples.md` — B page.
- A-page items, reviewed supplier-first: `def-csm-frontier-inverse-finite-exponential`, `lem-csm-frontier-finite-polytope-support`, `def-csm-frontier-pseudolikelihood`, `thm-csm-frontier-inverse-identifiability`, `def-csm-frontier-latent-gibbs-observation`, `thm-csm-frontier-finite-mle-existence`, and `thm-csm-frontier-inverse-posterior`.
- B-page items, reviewed after their A-page suppliers: `ex-csm-frontier-pseudolikelihood-not-joint` and `ex-csm-frontier-boundary-mle`.

### Page prerequisites

Opened the four page carriers required by the A-page manifest: `csm-frontier-sampling-certificates` (draft, batch 95), `csm-frontier-large-deviation-ensembles` (draft, batch 88), `csm-phase-ensembles` (published), and `bayesian-models-priors-and-posterior-laws` (published). The batch-95 sampling and batch-88 large-deviation pages are page-order context; no assigned proof treats their results as premises. The published CSM normalization/covariance and Bayesian prior/kernel/posterior interfaces used by assigned items were inspected directly.

### Direct item prerequisites

Inspected the current statements or definitions and proof status of every external direct item prerequisite listed in the assigned item frontmatter. These were:

- `cor-bolzano-weierstrass-in-rn`, `cor-euclidean-closed-balls-and-spheres-are-compact`, `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`.
- `def-axiom-of-choice`, `def-bayesian-model-as-prior-and-sampling-kernel`, `def-euclidean-inner-product`, `def-measure-kernel-and-probability-kernel`, `def-natural-logarithm`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-real-exponential-function-and-e`, `def-standard-borel-space`.
- `lem-countable-iff-surjection-from-n`, `lem-rat-embeds-dense`.
- `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule`, `thm-compact-subset-is-closed-and-bounded`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-csm-exponential-normalization-covariance`, `thm-derivative-of-exponential`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `thm-extreme-value-metric`, `thm-heine-borel-rn`, `thm-logarithm-derivative-and-integral`, `thm-metric-continuity-characterisations`, `thm-natural-logarithm-laws`, `thm-product-of-countable`, `thm-rank-nullity`, `thm-rationals-countable`, `thm-standard-borel-bayesian-posterior-kernel-exists`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The full local proofs of `thm-csm-exponential-normalization-covariance`, `thm-standard-borel-bayesian-posterior-kernel-exists`, and Tonelli were read because they supply central analytic and posterior steps. The assigned support lemma's choice-free Bolzano–Weierstrass supplier was also checked. The other published mathematical prerequisites were checked at the exact interface used by the assigned proof; their entire recursive closures were not independently re-audited.

## Mathematical and source review

- `def-csm-frontier-inverse-finite-exponential` verifies the finite counting-measure envelope before using the normalization/covariance result. The minimality equivalences follow from the finite positive variance formula, logarithm identities, and rank-nullity.
- `lem-csm-frontier-finite-polytope-support` proves compactness of the finite convex hull, constructs nearby rational exterior points by least indices (so no choice is used), and obtains a supporting unit vector by projection and a convergent subsequence. The stated full-affine-hull hypothesis is used.
- `thm-csm-frontier-finite-mle-existence` has the explicit IID likelihood and minimality hypotheses. Its interior argument proves coercivity and attainment; its boundary argument gives a strictly positive directional derivative at each finite parameter. Strict concavity proves uniqueness. No finite-sample or empirical claim is inferred.
- `def-csm-frontier-latent-gibbs-observation` sums the latent state before forming the marginal kernel and likelihood. `thm-csm-frontier-inverse-posterior` applies the standard-Borel result under explicit AC, and its Tonelli calculation proves measurability, normalization, and the data-marginal density. The density formula is restricted to (0<m(y)<\infty); null-set posterior values remain unspecified.
- `def-csm-frontier-pseudolikelihood` uses a finite fixed-boundary interaction family and proves that the one-site factors are the exact conditionals. The two-spin calculation verifies different likelihood ratios and a pseudo-likelihood mass sum greater than one. The all-plus example's derivative calculation is positive for every finite field.
- The assigned items are all mathematical. The A-page correctly states that MCMC output is not thereby IID and makes no experiment, posterior concentration, or sampling-efficiency claim. No TikZ or tikzcd diagrams occur in the assigned pages or items.

Source locators were checked against [Wainwright and Jordan](https://people.eecs.berkeley.edu/~jordan/sail/readings/wainwright-jordan-fnt.pdf) (§3.2 exponential-family form; §3.5.1 Proposition 2; §3.5.2 Proposition 3 and Theorem 1; §6.1 IID log likelihood), [Geyer's exponential-family notes](https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf) (§2 and §4.6.3), and [Bayes Rules!](https://www.bayesrulesbook.com/chapter-2.html) (§§2.1.1–2.1.2 and 2.3.5). These sources are used for context; the assigned finite-family and posterior deductions are proved locally from their stated dependencies. The [Besag paper](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/GibbsFieldEst/BesagPseudoLik1975.pdf) was opened as a scan; its available text layer exposed the article metadata but not the cited §3.3 equation (3.2) page. Search results corroborated the standard product-of-conditionals account, while the assigned definition and example were checked directly. I cannot attest the exact equation-page locator from this rendering.

## Repair

In `items/def-csm-frontier-latent-gibbs-observation.md`, the dominated-model clause previously named a “jointly measurable” density without specifying its domain or product sigma-algebra, while `thm-csm-frontier-inverse-posterior` applies Tonelli to (L(\theta,y)). I defined (k:\Theta\times X\times\mathsf Y\to[0,\infty]), specified measurability from ((\Theta\times X\times\mathsf Y,(\mathcal T\otimes2^X)\otimes\mathcal Y)) into the Borel measurable space ([0,\infty]), and stated the normalization identities for every ((\theta,x)) and (B\in\mathcal Y). The existing posterior proof already uses this condition and required no mathematical change. I refreshed its assigned proof-contract `citations` and `supplier_excerpts` to match the current Definition. The original boundary-worksheet source hash remains as historical evidence; it was not re-bound to the edited bytes. No `verification.judge` record was present on the edited item.

Checks on the changed item:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-csm-frontier-latent-gibbs-observation.md` — unchanged after reflow.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-csm-frontier-latent-gibbs-observation.md` — pass, 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/def-csm-frontier-latent-gibbs-observation.md` — 1 item, 4 steps, 0 defects.

## Uneditable finding

The published dependency `def-euclidean-inner-product` has malformed prose in its `Definition` at lines 39–43: the sentences beginning “is the function space of The vector space…” and “This is the same set that … calls” do not grammatically state the function-space identification. Its displayed inner-product formula remains explicit, so this is nonfatal; the published supplier is outside the reader's edit scope. The assigned consumer `def-csm-frontier-inverse-finite-exponential` reaches it directly.

