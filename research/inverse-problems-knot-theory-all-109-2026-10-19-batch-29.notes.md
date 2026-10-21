# Batch 29 authoring notes — Regularized nonlinear Levenberg–Marquardt

## Plan and scope

- The task, controlling owner direction, batch scaffold, current `plan-spec.json`, and complete IP-29 design section were read. The plan-spec entry and design agree on page IDs, title, category, order 3054/3055, companion, and the four A-page prerequisites. No design/plan-spec conflict was found.
- The design names `alg-ip-regularized-levenberg-marquardt` and `thm-ip-lm-local-discrepancy-stopping`. The empty scaffold inventory was extended with one necessary definition and three proof lemmas: the product-type remainder condition, its range-approximation consequence, forcing-step existence, and the one-step Fejér/parameter estimate. These supply the theorem's missing local proof obligations; no claim was weakened or omitted.
- The design locator “Clason Ch. 11, §§11.2–11.4” is broader than the current full-text PDF contents: the current arXiv v2 contents labels Levenberg–Marquardt §11.2 and anchored IRGNM §11.3. The complete relevant LM proof is Theorem 11.11, with Assumptions 11.7/11.10, Theorem 11.8, and Lemma 11.9. The authored source locator uses the exact section, equation, and theorem numbers.
- The batch-level scheduling input remains `394b3a6ddc24d5039024b0a5f3fa1ca2983c11bce6777cd1089a3afdc1d9e4e8`: batch 29 is level 4 and depends on batches 25 and 26. Item levels below are computed from actual in-run item edges, not copied from the batch level.
- Only batch-29 carriers and evidence are being edited. Published suppliers, shared plans, run state, and verdicts remain untouched. The A/B pages will contain YAML frontmatter only and empty bodies; no summaries are authored.

## Item inventory and dependency order

| Order within authoring | Item | Kind | Level | In-run direct suppliers |
|---|---|---|---:|---|
| 1 | `def-ip-product-tangential-cone-condition` | definition | 3 | `def-ip-nonlinear-forward-map` (1), `def-ip-tangential-cone-condition` (2) |
| 2 | `lem-ip-lm-product-condition-implies-range-approximation` | lemma | 4 | `def-ip-product-tangential-cone-condition` (3), `def-ip-nonlinear-forward-map` (1) |
| 3 | `alg-ip-regularized-levenberg-marquardt` | algorithm | 4 | `def-ip-product-tangential-cone-condition` (3), `def-ip-nonlinear-forward-map` (1) |
| 4 | `lem-ip-lm-step-existence-and-residual-forcing` | lemma | 5 | algorithm (4), range-approximation lemma (4) |
| 5 | `lem-ip-lm-fejer-decrease-and-parameter-bound` | lemma | 6 | step/forcing lemma (5), range-approximation lemma (4), algorithm (4) |
| 6 | `thm-ip-lm-local-discrepancy-stopping` | theorem | 7 | Fejér lemma (6), algorithm (4), range-approximation lemma (4) |
| 7 | `ex-ip-lm-scalar-regularized-step-stability` | example | 5 | algorithm (4) |
| 8 | `cex-ip-lm-zero-noise-discrepancy-stopping` | counterexample | 8 | stopping theorem (7), algorithm (4), product condition (3) |

The page manifest records the same dependency arrays and levels before these item carriers were written. The local chain raises the highest item level to 8 while the batch scheduling level remains 4; this is expected and acyclic.

## Supplier checks and mathematical decisions

- The actual batch-25 `def-ip-nonlinear-forward-map`, one-basepoint `def-ip-tangential-cone-condition`, residual/derivative comparison lemma, and local identifiability theorem were read with their proofs where applicable. Current owner-input readiness rows bind these actual carriers; they are authoring readiness, not independent approval.
- The product-type assumption is the full two-point inequality
  `||F(x)-F(z)-F'(x)(x-z)|| <= c ||x-z|| ||F(x)-F(z)||` on the stated local ball. It is not inferred from differentiability or from the batch-25 one-basepoint TCC; both interfaces remain distinct.
- The actual batch-26 nonlinear Tikhonov functional, global minimizer theorem, and weak-cluster stability theorem were read. Their weak-compactness, ultrafilter, DC, and HB assumptions are not logical premises of the regularized LM step or its stopping theorem. The page-level prerequisite is preserved, but no nonlinear global-minimizer conclusion is imported.
- The published `alg-safeguarded-levenberg-marquardt` carrier was read in full and is used for the finite-dimensional exact damped-step mechanics in the scalar B example. Its actual/predicted trust-ratio damping policy is not substituted for the residual-forcing parameter rule in the Hilbert-space theorem.
- The published anchored IRGNM algorithm and theorem were read. Their anchored update contains `alpha_k (x_0-x_k)` and has separate source/smallness assumptions; that theorem is not used for the unanchored LM claim and no duplicate IRGNM theorem is added.
- The normal-operator supplier `lem-hilbert-tikhonov-normal-operator-invertible` and its direct statement/proof were read. It assumes Countable Choice through the Hilbert adjoint and orthogonal-decomposition interface. The new algorithm and dependent proofs state and carry Countable Choice only; they do not assume full AC, DC, or HB.
- The exact forced-step equality and `tau > 1/sigma` are retained. The local theorem proves finite stopping for every positive noise level and the logarithmic count under an explicit sufficient smallness bound. It asserts no convergence rate, no global minimizer, and no guarantee for arbitrary inexact linear solves. A separate scalar counterexample shows why the positive-noise condition cannot be extended to `delta=0`.

## Full-text sources inspected

- Christian Clason, *Regularization of Inverse Problems*, arXiv:2001.00617v2, [complete PDF](https://arxiv.org/pdf/2001.00617v2). Read §11.2, equations (11.14)–(11.17), Theorem 11.8 with its full parameter-existence proof, Lemma 11.9 with its full Fejér proof, Assumption 11.10, and Theorem 11.11 through the finite-stopping and logarithmic-bound proof. The URL, locators, item support, and inline/out-of-scope dispositions are in the batch coverage carrier.
- Barbara Kaltenbacher, *Inverse Problems – Applications and Solution Strategies*, [complete lecture PDF](https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf). Read slide 80/PDF p. 80, which states the LM normal equation, residual-forcing equation, and discrepancy stop. It is an independent treatment of the procedure, not a source for the local logarithmic stopping proof.
- Retrieval succeeded on inspection for both full texts. `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-29.coverage.json --stamp` verified and stamped both sources (2/2). There were no failed retrievals, recovery retries, dropped sources, or `source_resolution` escalations.

## Validation and next action

- The final batch manifest and item carriers agree on all eight dependency arrays. Recomputing over the full current run manifest gives assigned item levels `3, 4, 4, 5, 6, 7, 5, 8`, respectively; these match the draft frontmatter. The A/B pair remains batch level 4.
- Strict proof-contract validation passes for all 8 assigned items. The 6 proof-bearing items pass `precheck` and `proof-layout` (28 numbered steps, 0 layout defects). The A/B pages are YAML frontmatter only. The source coverage checklist passes (1 A page, 9 harvested results), and full-text fetch stamps pass (2/2).
- The full-run `item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` currently reports 97 issues outside batch 29: 69 empty inventories, 15 string-only item rows with no IDs, and 13 missing/stale level labels; there are no dependency cycles. The 15 malformed rows are in batch 67 (`levine-tristram-signatures-and-arf-invariant` and its examples pair). A recomputation over the complete manifest before that pair entered string-only construction state matched all batch-29 labels. No other batch files were changed.
- No registered finite-smoke model applies to this continuous scalar LM family; `finite_smoke: []` is recorded. The scalar minimizer, forced-parameter formula, augmented QR factorization, trust-ratio acceptance, and zero-noise boundary are verified symbolically in the item arguments.
- All 8 items have Step-1 records set to `ready` with `owner:false`, direct dependency lists, and placement/contract evidence; six rows were refreshed after their input hashes changed during authoring. A later full-run hash recheck is blocked by batch 67: the ordinary loader sees duplicate item `undefined`, while the construction-scheduling projection cannot resolve its missing carrier `items/lem-levine-tristram-hermitian-form-singular-set.md`. The affected files are outside batch 29; no record was changed after this blocker appeared. These authoring records do not claim independent approval.

## Item checkpoint — `def-ip-product-tangential-cone-condition`

- **Claim/convention:** On a declared set `V` in an open real Hilbert domain, continuous Fréchet differentiability plus the explicit two-point inequality `||F(x)-F(z)-F'(x)(x-z)|| <= c ||x-z|| ||F(x)-F(z)||` defines the product-type condition. The derivative is evaluated at the first point. It is a separate hypothesis from the one-basepoint TCC.
- **Dependencies/placement:** `def-ip-nonlinear-forward-map`, `def-frechet-derivative-between-banach-spaces`, and `def-ip-tangential-cone-condition`; A page, item level 3. Carrier is on the assigned A page.
- **Source:** Clason, *Regularization of Inverse Problems*, §11.2, Assumption 11.10 and (11.23); full source and source disposition are recorded in `batch-29.coverage.json`.
- **Decision/validation:** Definition has no proof phase; statement/reference policy and YAML-only A-page checks pass. Its dependency level is 3, source fetch and coverage checks pass, and its Step-1 record is ready (authoring readiness only).
- **Next:** the range-approximation lemma is recorded below.

## Item checkpoint — `lem-ip-lm-product-condition-implies-range-approximation`

- **Claim/convention:** For fixed $x,x^\dagger$ in the product-condition set, exact data $F(x^\dagger)=y$, noise $\|y^\delta-y\|\le\delta$, and residual $R=\|F(x)-y^\delta\|>\tau\delta$, the range residual satisfies $\|F'(x)(x^\dagger-x)+F(x)-y^\delta\|\le[1+ce(1+\tau)]R/\tau$ when $\|x-x^\dagger\|\le e$. With $e\le e_0$ and $\gamma=\sigma\tau/[1+ce_0(1+\tau)]>1$, this is at most $\sigma R/\gamma$.
- **Dependencies/placement:** `def-ip-product-tangential-cone-condition`, `def-ip-nonlinear-forward-map`, `def-hilbert-space`, `def-frechet-derivative-between-banach-spaces`, and `cor-inner-product-induces-a-norm`; A page, level 4.
- **Source:** Clason, *Regularization of Inverse Problems*, §11.2, Assumption 11.10 and the opening range-approximation estimate in the proof of Theorem 11.11. The source's direction and noise substitution were checked; the item gives the full local inequality argument.
- **Decision/validation:** Complete choice-free proof; dependency level 4; `precheck`, `proof-layout`, strict source-excerpt contract, source-fetch, coverage, and page-statement checks pass. Step-1 record is ready (authoring readiness only).

## Item checkpoint — `alg-ip-regularized-levenberg-marquardt`

- **Claim/convention:** The method minimizes the residual of the local Fréchet linearization plus `alpha/2 ||h||^2`, chooses each positive `alpha_n` by the exact forcing equation with fixed `sigma`, and returns the first discrepancy crossing or a finite-call/budget status. The range-approximation margin is stated as a sufficient admissibility condition, and exact calls are explicit.
- **Dependencies/placement:** `def-ip-nonlinear-forward-map`, `def-frechet-derivative-between-banach-spaces`, `def-ip-product-tangential-cone-condition`, `def-countable-choice`, `def-hilbert-space-adjoint`, and `lem-hilbert-tikhonov-normal-operator-invertible`; A page, level 4.
- **Axiom decision:** Countable Choice is stated because the repository's Hilbert adjoint and shifted-normal-operator suppliers require it. No full AC, DC, or HB assumption is imported.
- **Sources:** Clason §11.2 equations (11.14)–(11.16), and Kaltenbacher slide 80/PDF p. 80; both were inspected in full context and are covered in the batch source ledger.
- **Decision/validation:** Exact algorithm interface and local `justified_by` result are both authored; dependency level 4, source-fetch and coverage checks pass, scoped statement/page checks pass, and the Step-1 record is ready (authoring readiness only).

## Item checkpoint — `lem-ip-lm-step-existence-and-residual-forcing`

- **Claim/convention:** For each positive shift, the regularized linearized least-squares functional has the unique minimizer from the shifted normal equation. A fixed range-approximation vector makes the residual map fall below `sigma ||r||` for small alpha, while the zero-step limit gives `||r||` at large alpha; continuity and the intermediate value theorem give a forcing parameter.
- **Dependencies/placement:** The algorithm, range-approximation lemma, Countable Choice, real Hilbert/adjoint and bounded-operator definitions, Hilbert-norm triangle inequality, shifted-normal-operator inverse lemma, and intermediate value theorem; A page, level 5.
- **Axiom decision:** The proof carries Countable Choice only through the adjoint and normal-inverse suppliers. The IVT supplier is choice-free. The root-selection computation cost is outside this existence claim.
- **Source:** Clason, *Regularization of Inverse Problems*, Theorem 11.8 and complete proof, §11.2; the Kaltenbacher lecture independently states the residual forcing equation on slide 80.
- **Decision/validation:** Complete minimizer and forcing-parameter proof; dependency level 5; `precheck`, `proof-layout`, strict source-excerpt contract, source-fetch and coverage checks pass. Step-1 record is ready (authoring readiness only).

## Item checkpoint — `lem-ip-lm-fejer-decrease-and-parameter-bound`

- **Claim/convention:** With $e=x-x^\dagger$, $r=y^\delta-F(x)$, $q=r-F'(x)h$, the exact normal equation gives $\alpha h=F'(x)^*q$. Under $\|q\|=\sigma\|r\|$ and the range residual bound $\|F'(x)(x-x^\dagger)+r\|\le(\sigma/\gamma)\|r\|$, expansion yields the stated squared-error decrease; bounded derivative norm $M$ also forces $\alpha\le\sigma M^2/(1-\sigma)$.
- **Dependencies/placement:** algorithm, range-approximation and step/forcing lemmas; real Hilbert/adjoint, Countable Choice, operator norm and its unit-ball bound, Hilbert-norm triangle inequality, Cauchy–Schwarz and absolute-value suppliers; A page, level 6.
- **Axiom decision:** The step's adjoint and normal-operator interfaces use Countable Choice. The estimate is proved for the exact linearized minimizer; it does not assert behavior for inexact solves.
- **Source:** Clason, *Regularization of Inverse Problems*, Lemma 11.9 and the alpha-bound portion of Theorem 11.11, §11.2; the complete argument is reproduced algebraically with the local range residual named explicitly.
- **Decision/validation:** Complete exact Fejér and regularization-parameter bound; dependency level 6; `precheck`, `proof-layout`, strict source-excerpt contract, source-fetch and coverage checks pass. Step-1 record is ready (authoring readiness only).


## Item checkpoint — `thm-ip-lm-local-discrepancy-stopping`

- **Claim/convention:** Under the explicit product-type remainder condition on `B_{2r}(x0)`, positive noise, `tau>1/sigma`, and the stated strict start-radius bound, the exact forced LM iteration stays in the local ball, stops finitely, and satisfies `N_delta <= 1+log(K/(tau delta))/(-log q)` for `0<delta<=delta0`. No stopped-iterate rate is claimed.
- **Dependencies/placement:** Product condition; range-approximation, forcing-step, and Fejér/parameter lemmas; regularized LM procedure and nonlinear forward map; Hilbert norm, operator norm, logarithm, logarithm laws, Archimedean bound, and Countable Choice. A page, item level 7. All actual direct suppliers were checked.
- **Source:** Clason §11.2, Assumption 11.10 and complete Theorem 11.11 proof; full locator and disposition are in the coverage ledger.
- **Decision/validation:** Complete proof and step contract; `precheck`, `proof-layout`, and strict contract checks pass. The positive-noise boundary is covered by the B counterexample.

## Item checkpoint — `ex-ip-lm-scalar-regularized-step-stability`

- **Claim/convention:** For `F_epsilon(t)=epsilon t`, fixed positive damping gives `|h_alpha|<=delta/(2 sqrt(alpha))` uniformly in epsilon; the unregularized and forcing-selected increments scale as `1/epsilon`. The separate exact safeguarded trial uses a supplied augmented QR factorization, obtains ratio 1, stays strictly inside the trust radius, and preserves damping.
- **Dependencies/placement:** Regularized LM forcing rule, published exact safeguarded LM trial, Countable Choice interface, and square-root theorem; B page, item level 5.
- **Sources:** Clason §11.2 and Kaltenbacher slide 80 for regularizing LM conventions; the finite trial is anchored to the actual published safeguarded algorithm carrier.
- **Decision/validation:** Complete symbolic verification and boundary worksheet; `precheck`, `proof-layout`, and strict contract checks pass. No registered finite-smoke model applies to this continuous scalar family.

## Item checkpoint — `cex-ip-lm-zero-noise-discrepancy-stopping`

- **Claim/convention:** With the identity map, `x0=15/16`, exact datum 1, `sigma=1/2`, and `delta=0`, each forced step has `alpha_n=1`, halves the residual, and remains strictly above the zero threshold at every finite index. The local product, derivative, and small-start conditions hold; only positive noise is absent.
- **Dependencies/placement:** Regularized LM forcing rule, positive-noise stopping theorem, product condition, and Countable Choice interface; B page, item level 8.
- **Source:** The positive-noise restriction is in Clason Theorem 11.11; the counterexample itself is proved directly.
- **Decision/validation:** Complete counterexample proof and boundary worksheet; `precheck`, `proof-layout`, and strict contract checks pass. No unresolved mathematical dependency remains within this item.

## Step 3a source-locator correction

The older slide80/PDF p.80 reading claims above are inaccurate locators and remain historical records only. Alpha independently downloaded and read Kaltenbacher PDF pp.63 and80: page63 contains the LM normal update, residual-forcing equation and discrepancy rule; page80 contains loping Landweber Kaczmarz. Current references in the algorithm, existence lemma and scalar example, and their manifest copies, now use PDF p.63. Defect `ipkt109-b29-3a-kaltenbacher-locator` is repaired with confidence1. Clason remains the source for the proved local stopping result; no whole-lecture reading is claimed. Full adjudication and local checks: `research/inverse-problems-knot-theory-all-109-2026-10-19-alpha-batch-29-3a.md`.
