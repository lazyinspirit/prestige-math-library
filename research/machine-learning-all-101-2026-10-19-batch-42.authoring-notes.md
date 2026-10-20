# Batch 42 authoring notes

Run: `machine-learning-all-101-2026-10-19`  
Batch: `42` · declared batch level: `4` · prerequisite batch: `40`  
Scheduling input: `a4ceb137a414ece6240fd042cc4654658056b078b733764f9eb13be67e1cf824`

## Controlling plan comparison

The complete ML-41 design at `research/plan-machine-learning-track.md` L377–381
and the matching `adaptive-gradient-optimizers` / companion records in
`research/plan-spec.json` agree on page identities, the main mathematical
scope, the Adam counterexample, the source-matched AMSGrad theorem, proof route,
and examples. They conflict on page prerequisites: the prose design lists only
ML-39 (`stochastic-gradient-descent-for-learning`), while `plan-spec.json` and
the generated batch assignment list ML-39 and the variance-reduced page. The
variance-reduced page supplies the published diagonal AdaGrad algorithm and
regret theorem, which the refreshed interface repair explicitly reuses. The A
page therefore requires that page as well and leaves its published items on
their existing page so the native prerequisite disclosure supplies them. This
removes the page cycle caused by duplicating `alg-adam-update` and the published
periodic counterexample across pages. Owner reconciliation is still required
for the prose-design/structured-requirement mismatch.
The generated batch manifest initially had empty `items`; this note records
the inventory and dependency labels written there before any batch-42 item
carrier.

## Inventory and dependency order

The owned carriers are recorded in `machine-learning-all-101-2026-10-19-batch-42.pages.json`.
In-run item levels are computed from actual internal `deps` edges; published
and other-batch suppliers do not raise the item level.

| Level | Items |
|---|---|
| 0 | `alg-rmsprop`, `alg-adam`, `alg-amsgrad`, `lem-geometric-polynomial-decay`, `lem-clipped-negative-prefix-positive-suffix` |
| 1 | `lem-adaptive-moment-updates-well-defined` |
| 2 | `lem-amsgrad-one-step-regret-inequality`, `lem-amsgrad-momentum-energy-bound`, `thm-adam-online-regret-counterexample`, `ex-amsgrad-historical-maximum` |
| 3 | `thm-amsgrad-online-convex-regret`, `ex-adam-fixed-epsilon-online-regret-counterexample` |
| 4 | `ex-amsgrad-constant-beta-outside-decaying-schedule` |

The published `alg-diagonal-adagrad-online-regret`,
`thm-diagonal-adagrad-regret-bound`, `alg-adam-update`, `alg-amsgrad-update`,
and `cex-adam-periodic-linear-losses-force-divergence` remain on their existing
variance-reduced page and are supplied by the required-page disclosure. Local
`alg-adam` links to the published update to distinguish the denominator and
bias-correction conventions; the Adam theorem links to the published
counterexample only to mark its distinct bias-corrected scope. These are not
newly authored batch-42 carriers and are not duplicated in this A page's item
inventory.

## Exact ownership and interface findings

- `alg-adagrad` is already assigned in the active run manifest
  `research/machine-learning-all-101-2026-10-19-batch-75.pages.json` to
  `mirror-descent-and-adaptive-regularization`, where it is the Gram-matrix
  AdaGrad procedure. I did not edit or claim it. Batch 42 uses the published
  diagonal online AdaGrad algorithm and its published regret theorem, as the
  controlling design also directs. Owner reconciliation of the duplicate
  proposed ID is still needed.
- Published `alg-amsgrad-update` takes a historical maximum of **bias-corrected**
  second moments and explicitly says it is not Reddi–Kale–Kumar Algorithm 2.
  That source algorithm instead takes a maximum of the raw exponential second
  moment `v_t` and uses a time-varying first-moment weight. The new local
  `alg-amsgrad` is the source-matched procedure for the new regret theorem;
  the published bias-corrected procedure remains a distinct reused item.
  This is the exact supplier/body mismatch requiring owner reconciliation; no
  theorem is claimed for the bias-corrected variant.
- Published `alg-adam-update` uses bias correction and adds epsilon outside
  `sqrt(vhat)`. Reddi’s general-parameter counterexample uses the uncorrected
  recurrence without epsilon; its fixed-epsilon construction adds epsilon
  **inside** `sqrt(v_t + epsilon)`. The local `alg-adam` and theorem state these
  variants explicitly. No counterexample claim is transferred to the published
  bias-corrected update.
- Reddi Appendix F’s proof writes an inequality comparing the two low-gradient
  steps at period index `t=0` that is false there: it uses
  `1/sqrt(3t+3) >= 1/sqrt(2(3t+1))`, which fails at `t=0`. The source’s theorem
  remains provable: the local proof verifies the first cycle directly with a
  smaller fixed step size, then uses the strict positive cycle drift for
  `t>=1`. This source-proof defect and repair route are escalated for owner
  reconciliation; no incomplete source argument is treated as proof.

## Supplier inspection

- The published AdaGrad algorithm states the diagonal accumulator
  `s_{t,j}=sqrt(epsilon^2+sum_{k<=t}g_{k,j}^2)` and weighted proximal update.
  The published regret theorem assumes nonempty closed convex `C`, finite
  coordinate diameters, convex losses, `g_t in partial ell_t(x_t)`, `eta>0`,
  and `epsilon>0`, with bound
  `sum_j (D_j^2/(2 eta)+eta)s_{T,j}`. I read its complete proof and the cited
  one-step and minimizer-existence proofs; this is an independent AdaGrad
  application, not an input to the Adam or AMSGrad arguments.
- The variance-reduced prerequisite page is published. I inspected its actual
  `alg-adam-update`, `alg-amsgrad-update`, diagonal AdaGrad items, and the
  published periodic Adam counterexample, including the complete counterexample
  proof. The page itself records the raw-versus-bias-corrected AMSGrad distinction.
- Batch 40’s current `stochastic-gradient-descent-for-learning` manifest and
  `alg-stochastic-gradient-descent` carrier were inspected. That algorithm is an
  unconstrained stochastic-oracle update and explicitly assumes no unbiasedness,
  variance, or independence property. Batch 42’s online convex loss sequences
  are deterministic and do not use any stochastic-gradient theorem as a proof
  premise. Current full-run readiness for the in-run prerequisite remains open.

## Sources read in full relevant scope

- Reddi, Kale, and Kumar, [*On the Convergence of Adam and Beyond*](https://arxiv.org/pdf/1904.09237), full 23-page paper and appendices. Read §2 Algorithm 1 and moment conventions; §3 Theorems 1–2; Appendix A and B proofs; §4 Algorithm 2 and Theorem 4; Appendix D proof and its momentum-energy estimate; Appendix F Theorem 6 and proof. Supports `alg-adam`, `alg-amsgrad`, `thm-adam-online-regret-counterexample`, `thm-amsgrad-online-convex-regret`, and the epsilon example. Harvest disposition: included; the local proofs supply the full arguments and explicitly correct the Appendix F `t=0` boundary.
- Hazan, [*Introduction to Online Convex Optimization*, 2nd ed.](https://arxiv.org/pdf/1909.05207), full 260-page monograph. Read §5.6 Algorithm 19 and §5.6.1 Lemma 5.13, Theorem 5.12, and the theorem proof. Supports diagonal AdaGrad and the online-regret framework. Harvest disposition: included as the book treatment.
- Duchi, Hazan, and Singer, [*Adaptive Subgradient Methods for Online Learning and Stochastic Optimization*](https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf), full 39-page paper. Read §2’s composite update, Theorem 5/corollaries, and the cited proof passages for adaptive diagonal regret. Supports the published diagonal AdaGrad procedure and theorem. Harvest disposition: included as an independent research treatment.
- Bottou, Curtis, and Nocedal, [*Optimization Methods for Large-Scale Machine Learning*](https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf), full 95-page paper. Read the RMSprop recurrence and coordinate rescaling in the adaptive/momentum discussion (PDF p. 66). Supports `alg-rmsprop`. Harvest disposition: included as an independent treatment.
- Kingma and Ba, [*Adam: A Method for Stochastic Optimization*](https://arxiv.org/pdf/1412.6980), full 15-page paper. Read Algorithm 1 and §§2–3, including bias correction and denominator placement. Supports the explicit distinction between published bias-corrected Adam and the uncorrected online counterexample variant. Harvest disposition: included as a convention check; no unsupported convergence claim is imported.

## Readiness and checks

All 13 batch-42 items have current `ready` Step-1 records. Each record includes
the item's declared `deps`, `justified_by`, and `forward_refs` suppliers (where
present), in ascending dependency-level order. Readiness records are authoring
evidence and do not constitute independent review or approval. Both required
page suppliers have current evidence in the cross-batch sidecar.

### Inventory checkpoint (before carrier authoring)

`node` imported `dependencyLevels` from `tools/item-dependency-levels.mjs` and
checked the two batch-42 manifest pages only: **13 items, no errors**, with the
levels listed above. `node tools/manifest-deps.mjs
research/machine-learning-all-101-2026-10-19-batch-42.pages.json` reported 13
items, zero missing dependency arrays, and zero errors. This is a local batch
check; the final ordinary whole-run snapshot is recorded in the handoff section.

### Completed item: `alg-rmsprop` (level 0)

Authored the no-momentum vector RMSProp procedure with exponential second-moment
recurrence, positive denominator stabilizer outside the root, and no convergence
claim. Dependencies are the Euclidean coordinate convention, nonnegative square
roots, sign rules, and real completeness; it has no in-run logical supplier.
Source passages read: Bottou–Curtis–Nocedal, RMSprop running averages and
coordinate rescaling, PDF pp. 65–66; Reddi–Kale–Kumar, §2 adaptive setup and
RMSProp-as-zero-first-moment context, PDF pp. 2–3. The in-run well-definedness
lemma is authored and referenced through `justified_by`.

### Completed item: `alg-adam` (level 0)

Authored the scalar, projected, uncorrected Adam recurrence used for the online
counterexamples. The no-epsilon mode requires positive second moments; the
regularized mode adds fixed epsilon inside the square root. The statement
explicitly distinguishes this from published `alg-adam-update` (bias correction
and epsilon outside the root). Sources read: Reddi et al., §2 Algorithm 1, §3,
and Appendix F; Kingma–Ba, Algorithm 1 and §§2–3. No convergence claim is made.
The in-run moment/well-definedness lemma is authored and referenced through
`justified_by`.

### Completed item: `lem-geometric-polynomial-decay` (level 0)

Proved the explicit ratio bound for $n^p q^n$ with $p=1,2$, including $q=0$.
This supplies the large-even-period existence estimates in the general Adam
counterexample. Dependencies: natural indices and powers, the Archimedean
property, the geometric-sequence null lemma, and ordered-real arithmetic.
Source read: Reddi et al., Appendix B, large-period choice. The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `alg-amsgrad` (level 0)

Authored the raw-moment AMSGrad procedure from Reddi Algorithm 2: variable
first-moment weights, exponential raw second moment, coordinatewise historical
maximum, and weighted projection. Zero-weight coordinates use a stated zero
ratio convention; minimizers need not be unique. The published
`alg-amsgrad-update` remains a separate bias-corrected variant. Source read:
Reddi §4 Algorithm 2 and Theorem 4, PDF pp. 4–6, with Appendix D checked. The
in-run well-definedness lemma is authored below; no check has yet been run.

### Completed item: `lem-adaptive-moment-updates-well-defined` (level 1)

Proved finite moment recurrences remain finite/nonnegative, RMSProp/Adam
denominators are positive under their stated conditions, the AMSGrad zero-ratio
case has zero first moment, and compact weighted subproblems attain minima.
Dependencies: `alg-rmsprop`, `alg-adam`, `alg-amsgrad`, induction, square and
sign facts, finite maxima, and the Euclidean extreme-value theorem. Sources:
Reddi et al., §§2 and 4 and Appendix F
(https://arxiv.org/pdf/1904.09237); Bottou et al., RMSprop update
(https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf). The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `lem-clipped-negative-prefix-positive-suffix` (level 0)

Proved the scalar clipping inequality for a nonpositive increment prefix and
nonnegative suffix. It is the projection step used by both periodic Adam
counterexamples. Dependencies are the finite maximum/minimum convention and
ordered-field monotonicity. Source read: Reddi et al., Appendix B projection
argument; the local proof gives the complete clipping argument. The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `lem-amsgrad-momentum-energy-bound` (level 2)

Proved the no-log convolution estimate bounding
`sum_t alpha_t sum_i m_{t,i}^2/sqrt(vhat_{t,i})` by a coordinatewise
`sum_i sum_t |g_{t,i}|/sqrt(t)` term. The proof expands the time-varying
first-moment weights, applies finite Cauchy–Schwarz, and sums the geometric lag.
In-run suppliers are `alg-amsgrad` and
`lem-adaptive-moment-updates-well-defined`; other dependencies are finite-sum,
power, square-root, order, and Cauchy–Schwarz facts. Source: Reddi et al.,
Appendix D, PDF pp. 15–16 (https://arxiv.org/pdf/1904.09237). The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `lem-amsgrad-one-step-regret-inequality` (level 2)

Proved the per-round convex regret inequality from the semidefinite weighted
projection, including the zero-coordinate case, momentum decomposition, and
weighted Young bound. In-run dependencies: `alg-amsgrad` and
`lem-adaptive-moment-updates-well-defined`. External dependencies: subgradient
supporting inequality, Euclidean inner product, and Cauchy–Schwarz. Source:
Reddi et al., Appendix D, PDF pp. 15–16
(https://arxiv.org/pdf/1904.09237). The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `thm-adam-online-regret-counterexample` (level 2)

Proved two distinct online convex counterexample branches. With zero stabilizer,
for every fixed $\beta_1<\sqrt{\beta_2}$ the source-matched periodic slopes
$(C,-1,\ldots,-1)$ produce $\liminf R_T/T\ge2/C$ for an even period chosen
from explicit moment, drift, and clipping inequalities. For each fixed positive
inside-root $\epsilon$, the proof uses the separate $(3\sqrt\epsilon,
-\sqrt\epsilon,-\sqrt\epsilon)$ sequence at $(\alpha,\beta_1,\beta_2)=
(1/10,0,1/45)$ and obtains $\liminf R_T/T\ge2\sqrt\epsilon/3$. The
zero-epsilon proof directly verifies positive denominators and the even-period
choice via `lem-geometric-polynomial-decay`; both branches use
`lem-clipped-negative-prefix-positive-suffix`, and the regret argument defines
the horizon-specific best comparator. In-run dependencies are the Adam
algorithm, well-definedness lemma, geometric and clipping lemmas, induction,
finite-sum/power/order facts, and the limit-inferior definition. Source:
Reddi–Kale–Kumar, Appendix B periodic construction and parameter choice, and
Appendix F fixed-epsilon construction, full paper at
https://arxiv.org/pdf/1904.09237, PDF pp. 14–18. The Appendix F `t=0`
comparison is not used; the first cycle is checked directly and later cycles
have strict positive drift. The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `thm-amsgrad-online-convex-regret` (level 3)

Proved the stated online convex regret bound from the one-step projection
inequality and momentum-energy estimate. The potential argument now separates
the unpaired first-round term, telescopes the nonnegative $q_t/\alpha_t$
increments explicitly, and bounds the changing-$\beta_{1,t}$ coefficient
correction and explicit first-moment term. The schedule corollary derives the
finite geometric-sum identity by telescoping and proves the reciprocal-root
sum bound. In-run suppliers are `alg-amsgrad`, the moment well-definedness
lemma, the one-step inequality, and the momentum-energy bound; external inputs
include subgradient support, finite-sum/power/order facts, induction, continuous
finite sums, and the Euclidean extreme-value theorem. Sources: Reddi et al.,
Theorem 4 and Appendix D, https://arxiv.org/pdf/1904.09237, PDF pp. 5 and
15–16; Hazan, *Introduction to Online Convex Optimization*, §5.6.1,
https://arxiv.org/pdf/1909.05207, PDF pp. 114–116. The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `ex-adam-fixed-epsilon-online-regret-counterexample` (level 3)

Verified the fixed-$\epsilon$ example as the positive-epsilon branch of
`thm-adam-online-regret-counterexample`, including the exact parameter set,
inside-root denominator, period, and positive denominator condition. In-run
dependencies include `alg-adam`, the well-definedness lemma, and the Adam
counterexample theorem. Source locator: Reddi et al., Appendix F, PDF pp. 17–18,
https://arxiv.org/pdf/1904.09237. The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `ex-amsgrad-historical-maximum` (level 2, B page)

For $\beta_2=1/2$ and gradients $(2,0)$, the raw moment changes from $v_1=2$
to $v_2=1$ while $\widehat v_1=\widehat v_2=2$. The item is on the B page in
accordance with the plan's examples list. In-run dependencies are `alg-amsgrad`
and its well-definedness lemma; finite convex-domain, subgradient, interval, and
order interfaces are stated. Source: Reddi et al., Algorithm 2, §4, PDF p. 5,
https://arxiv.org/pdf/1904.09237. The carrier passed the final batch-42 scoped validation suite recorded below.

### Completed item: `ex-amsgrad-constant-beta-outside-decaying-schedule` (level 4, B page)

For $F=[-1,1]$, unit linear losses/gradients, $\beta_{1,t}=1/4$, and
$\beta_2=1/2$, computed the AMSGrad theorem's second correction term to be at
least $4T^{3/2}/9$. The example says only that the displayed upper bound does
not yield its $O(\sqrt T)$ corollary for this schedule; it makes no lower-bound
claim about actual regret. Its in-run dependencies are the AMSGrad algorithm,
well-definedness lemma, and regret theorem. Sources: Reddi et al., Theorem 4 and
Corollary 1, PDF pp. 5–6, https://arxiv.org/pdf/1904.09237; Hazan, §5.6.1,
https://arxiv.org/pdf/1909.05207, PDF pp. 114–116. The carrier passed the final batch-42 scoped validation suite recorded below.

## Final batch-42 validation and active-run handoff

The final scoped checks after the A-page cycle cleanup reported:

- `depcheck --items-file /tmp/batch42-item-ids.json --json`: **0 errors, 0 warnings**;
  both assigned pages and all 13 items were in scope, with no prerequisite cycle.
- `proof-layout`: **13 items, 38 steps, 0 defects**.
- `precheck`: **10 proof-bearing items passed, 3 definitions not applicable, 0 failed**.
- `rendercheck`: **15 files checked, 0 errors, 0 warnings**.
- `content-policy`: **13 scoped items, 0 errors, 0 warnings**.
- strict proof contracts: **13/13 items, 0 errors, 0 warnings**.
- source retrieval: **7/7 sources fetch-verified; 0 documented drops**.
- `manifest-deps`: **13 items, 0 normalized, 0 errors**.
- whole-run dependency levels: **1,247 items across 202 pages, maximum level 15**;
  batch 42 remains at levels 0–4 as inventoried above.
- `git diff --check`: clean.

The post-record full-run Step-1 snapshot reports **1,168/1,247 ready**, with
**79 remaining work entries outside these two pages and both required-page
suppliers**. All 13 batch-42 item records are current and hash-closed; the full
run remains open. A fresh ordinary autopilot status at
`2026-10-19T00:40:04.132Z` reports the run still active, 1-scaffold at 100/101
covered with batch 42 listed as missing, no workers in flight, and the existing
owner repair/recertification hold in
`research/machine-learning-all-101-2026-10-19-step1-blockers.json`. No engine
state, verdict, or other batch file was changed.

Owner reconciliation remains required for the prose-design versus
`plan-spec.json` required-page mismatch, the existing `alg-adagrad` ownership
collision with batch 75, and the false `t=0` comparison printed in Reddi
Appendix F. The local claims retain their original scopes and the proofs record
the exact convention differences and the repaired first-cycle argument.
