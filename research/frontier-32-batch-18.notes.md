# frontier-32 beta batch-18 notes

## Scope, design reconciliation, and state

This beta owns only the manifest, source-coverage harvest, and this notes file
for the `stable-unstable-manifolds-and-morse-smale-transversality` A/B pair.
It does not author items or pages, change `plan-spec.json`, alter workflow
state, or touch another batch.

The controlling design was read at
`research/plan-differential-topology-track.md` lines 437–477.  Its A-page
order (523), category, title, companion, and mathematical prerequisite DT-3
agree with the dispatch and `research/plan-spec.json`; the run's drift record
also says `no-drift`.  The dispatch correctly spells the operational required
page as `gradient-like-vector-fields-and-morse-trajectories-examples`.  There
is therefore no design/spec conflict to adjudicate in this batch.

There is one mathematical design correction, recorded rather than silently
copied.  The designed B item
`cex-symmetric-sphere-height-flow-is-not-morse-smale` is false: for the
ordinary two-critical-point height function on a round sphere,
$W^u(\max)\cap W^s(\min)$ is an open $n$-manifold of exactly the expected
dimension $n$, hence is transverse.  Audin--Damian §2.2.a instead explicitly
shows the intended failure for the symmetric inner-tube torus: the unstable
manifold of one saddle and stable manifold of the other share open intervals
(printed p. 37 / PDF p. 46), and Examples 2.2.4 calls this the non-Smale
height-flow example (printed p. 40 / PDF p. 49).  The scaffold consequently
uses the unused, source-faithful
`cex-symmetric-torus-height-flow-is-not-morse-smale` ID.  It does not retain
or duplicate the false sphere claim.

The A page has 16 items and the B page has 5, so the A page is well below the
60-item split threshold.  Every manifest item explicitly has a `deps` array.
The regular-level lemma is intentionally placed before the quotient-manifold
theorem even though it is numbered eighth in the design prose: it is a genuine
proof dependency and prevents treating a free action by itself as a quotient
manifold theorem.

## Conventions and proof boundary

- $M$ is a closed smooth $n$-manifold, $f:M\to\mathbb R$ a Morse function,
  and the descending convention is $\dot\gamma=-\operatorname{grad}_g f$.
  The relative construction also permits a complete downward gradient-like
  field $X$; in that context its own flow is the descending flow.  $W^u(p)$
  is the backward-limit set and has dimension $\lambda(p)$; $W^s(p)$ is the
  forward-limit set and has dimension $n-\lambda(p)$.
- A "Morse--Smale pair" means $(f,g)$ in the metric case and, explicitly when
  needed, $(f,X)$ for a downward gradient-like field: every $W^u(p)$ is
  transverse to every $W^s(q)$.  This slight generality is needed so the
  relative field theorem does not misuse metric language.
- $\widetilde{\mathcal M}(p,q)$ is the set of point-marked trajectories, so
  evaluation at $0$ identifies it with $W^u(p)\cap W^s(q)$.  This records both
  the path and intersection presentations.  The $\mathbb R$ action is time
  shift on paths, equivalently the flow action on marked points.
- For $f(q)<c<f(p)$ a regular value, every nonconstant trajectory meets
  $f^{-1}(c)$ once.  The smooth structure on
  $\mathcal M(p,q)=\widetilde{\mathcal M}(p,q)/\mathbb R$ is constructed via
  this slice, not inferred from freeness.  Its dimension is
  $\lambda(p)-\lambda(q)-1$.
- The generic metric claim is precisely residuality for a *fixed* Morse
  function in the smooth metric space on a closed manifold.  It does not say
  open dense, and it does not combine genericity for metrics, functions, and
  continuation families.  Its authoring proof must state the finite-regularity
  Banach/Sard--Smale step and the Baire passage to smooth metrics; the
  finite-dimensional `thm-parametric-transversality` is supporting local
  geometry, not a substitute for that analytic argument.
- The relative theorem has a narrow contract: perturb a gradient-like field
  away from prescribed critical neighborhoods and a specified closed region on
  which the desired intersections are already transverse.  It preserves the
  stated local data; it makes no unsupported assertion that every such field
  remains a gradient of a metric.
- The linearized-flow lemma must define its chosen decaying Banach completion
  and the operator $D_\gamma$ in the item itself, then identify its cokernel
  obstruction with the failure of $T W^u(p)+T W^s(q)=TM$.  It must not import
  an unproved free-quotient claim or silently invoke general Fredholm theory.
- The index-one and index-two propositions assert **only** dimensions
  (discrete and one-dimensional).  Finiteness, compactification, broken-end
  classification, orientation lines, and the boundary argument for
  $\partial^2=0$ are reserved for
  `morse-trajectory-moduli-spaces-and-the-morse-differential`.  The broken
  trajectory lemma here only gives strict value/index descent and the resulting
  finite bound on the number of nonconstant components.
- Ambient orientability is not assumed for transversality or these dimension
  statements.  Orientation lines and signed counts belong to the later Morse
  differential construction.

## Source harvest and source repair

The full source-by-source heading/result ledger, exact locators, dispositions,
and web-reader receipts are in `frontier-32-batch-18.coverage.json`.  It has
four independent, full-text treatments: Nicolaescu's monograph; Audin--Damian's
textbook; Ritter's complete course notes; and Abbondandolo--Majer's lecture
notes.  Each has a live HTTP(S) URL, was directly opened at that URL, and has
its own read-range headings enumerated in coverage.  The first three provide
harvestable contents; no Wikipedia source is used.

Nicolaescu §2.4 provides the finite-dimensional stable/unstable, moving, and
gradient-like-field construction.  Audin--Damian §2.2 provides the level-slice
model, the localized perturbation induction, and the corrected torus example.
Ritter Lectures 8--9 independently supplies the trajectory-space and
unparametrized-moduli route.  Abbondandolo--Majer §2.12 supplies the actual
linearized-operator/surjectivity and residual-perturbation architecture.

The design's Cohen URL failed fetch verification in this dispatch and no
verified complete alternate/archive copy of the same document was recovered.
It is not listed as a read source or credited with a harvest.  The replacement
Audin--Damian source record retains its `original_url` and re-source rationale,
while every harvest row remains attributed only to the text actually read.  No
result was removed to satisfy a source gate.

## Item ledger: claims, dependencies, and proposed proof route

| Item | Claim to author | Dependency/proof rationale |
| --- | --- | --- |
| `def-morse-smale-pair` | Defines the metric and explicitly stated gradient-like-field forms of the all-pairs transversality condition. | Builds on published flow/stable-manifold and transversality language. |
| `def-parametrized-morse-trajectory-space` | Defines point-marked connecting trajectories and evaluation-at-zero identification with $W^u(p)\cap W^s(q)$. | Makes the path/intersection convention unambiguous before quotienting. |
| `prop-parametrized-morse-trajectory-space-is-a-manifold` | Under Morse--Smale, the space is smooth of dimension $\lambda(p)-\lambda(q)$. | Apply the transverse fibre-product theorem to the stable/unstable immersions, not the embedded-intersection theorem. |
| `lem-time-translation-acts-freely-on-nonconstant-trajectories` | The time-shift action has trivial stabilizer for $p\ne q$. | Strict descent/no recurrence rules out a nonzero period. |
| `def-unparametrized-morse-trajectory-moduli-space` | Defines the orbit set $\mathcal M(p,q)$. | Names the quotient but does not assert it is already a manifold. |
| `lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories` | A regular intermediate level gives one representative of every time-shift orbit. | Strict descent gives uniqueness; the flow and regular-level theorem give the smooth slice. |
| `thm-unparametrized-trajectory-space-is-a-smooth-manifold` | The slice realizes $\mathcal M(p,q)$ as a smooth manifold of dimension $\lambda(p)-\lambda(q)-1$. | Transfer the transverse intersection structure to the regular-level slice. |
| `cor-no-morse-smale-trajectories-for-nonpositive-index-drop` | For distinct $p,q$ with $\lambda(p)\le\lambda(q)$, the moduli space is empty. | A nonempty trajectory space would have the impossible negative dimension after quotienting. |
| `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` | Smooth metrics making fixed $f$ Morse--Smale form a residual set. | Use the stated Sard--Smale/regular-value route and Baire diagonalization; never strengthen to open dense. |
| `thm-relative-morse-smale-perturbation-of-a-gradient-like-field` | Perturbs only in allowed regular bands, preserving critical neighborhoods and a pre-existing transverse closed region. | Finite critical-point induction plus local regular-value/moving construction. |
| `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator` | For a connecting orbit, $D_\gamma$ is onto exactly at a transverse stable/unstable intersection. | Define the completion/operator locally and identify kernel/cokernel through the asymptotic stable and unstable tangent spaces. |
| `prop-index-one-trajectory-spaces-are-zero-dimensional` | Index drop one gives a discrete smooth moduli space. | Immediate dimension specialization only; no compactness/finiteness. |
| `prop-index-two-trajectory-spaces-are-one-dimensional` | Index drop two gives a one-dimensional smooth moduli space. | Immediate dimension specialization only; no claim about its missing ends. |
| `lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices` | Every nonconstant component drops $f$ and Morse index, bounding the length of a finite broken string. | Combine the energy drop with the no-nonpositive-index-drop corollary; define the finite string within the lemma, before its formal DT-9 definition. |
| `rem-morse-smale-residuality-does-not-assert-simultaneous-genericity-for-all-data` | Separates fixed-$f$ metric genericity from function and continuation transversality. | Records the precise parameter-space boundary. |
| `rem-ambient-orientability-is-not-required-for-morse-smale-transversality` | Transversality and dimension do not orient $M$; later signed theory uses orientation lines. | Prevents an ambient-orientation assumption entering early. |
| `ex-morse-smale-flow-on-the-circle` | For a two-critical-point circle height function, computes the two unparametrized index-one trajectories. | Direct flow/regular-slice calculation. |
| `ex-a-morse-smale-height-function-on-a-tilted-torus` | Uses a small asymmetric tilt/field perturbation to make the torus separatrices transverse. | Verify the slice intersections after the symmetry-breaking perturbation. |
| `cex-symmetric-torus-height-flow-is-not-morse-smale` | Exhibits two saddle stable/unstable manifolds sharing open intervals. | Audin--Damian's explicit symmetric inner-tube torus calculation. |
| `cex-an-index-one-moduli-space-can-be-infinite-without-compactness` | Gives a noncompact gradient-like example with an infinite discrete index-one moduli set. | Construct and check the escaping ends; it refutes only the inference discrete implies finite. |
| `ex-regular-level-slices-for-unparametrized-trajectories` | Computes an orbit quotient as its unique intermediate-level intersection. | Concrete verification of the slice lemma. |

## Validation checkpoint

- JSON parsing — PASS: the manifest has two pages and coverage has the required
  A-page record.
- `node tools/manifest-deps.mjs research/frontier-32-batch-18.pages.json` —
  PASS: 21 items, 0 normalized, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-18.coverage.json
  --require-destination` — PASS: 1 page, 51 harvested results, 0 errors.  Its
  one advisory `coverage-low-yield` warning (19 included of 51) is explained by
  the specific, destination-bearing deferrals to the handle, rearrangement, and
  Morse-differential pages; it does not identify a missing disposition.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-18.pages.json` — PASS: 21 scoped items, 0 errors,
  0 warnings.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-18.coverage.json` — PASS: 4/4 source receipts.
- `node tools/splice-plan.mjs --run frontier-32 --batch 18 --dry-run` — PASS:
  2 pages spliced in memory, 21 items, no already-correct conflicts.  No plan
  file was written.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS (exit 0): the
  unchanged plan's declared page order and current item lists are acyclic and
  resolved.  Its many repository-wide redundant-prerequisite advisories are
  outside this batch.
- `git diff --check -- research/frontier-32-batch-18.pages.json
  research/frontier-32-batch-18.coverage.json
  research/frontier-32-batch-18.notes.md` — PASS.
- A recovery URL sweep was started before the repaired-source provenance was
  moved under the replacement source, but the runner did not produce a receipt
  in its 30-second tool window.  After that representation change, a plain
  sweep wrote `/tmp/frontier-32-batch-18.url-liveness.json`: 0/4 live, with all
  four failures reported as local `curl` DNS-resolution failures.  Direct
  bounded `curl` checks had the same result.  This is a runner resolver
  limitation, not a claim that the URLs failed: all four exact URLs were
  independently fetched and read in the web reader and retain accurate
  `web-open` receipts.  No alternate URL
  or archive was invented on that basis.

Before a later authoring step, re-read the named source passages and the actual
published dependency statements, especially the Banach/Sard--Smale
qualification and the regular-level slice proof.

## Step-3 fix pass

This pass changes only `frontier-32-batch-18.pages.json`,
`frontier-32-batch-18.coverage.json`, and this notes file.  The earlier
four-source/21-item checkpoint is superseded below: the repaired scaffold has
20 A items, 5 B items, 25 items total, and six independently read sources.
The A page remains below the 60-item split threshold.  Every new record has an
explicit `deps` array, including `deps: []` on the new definition.

### E18-1 — accepted: proved Sard--Smale interface and source added

**Finding and disposition.** E18-1 is accepted.  The old generic-metric
theorem depended on finite-dimensional
`thm-parametric-transversality`; that theorem cannot supply the required
Banach-Fredholm regular-value conclusion.  It is no longer in that theorem's
dependency list.  Its valid local role remains confined to the relative
finite-dimensional perturbation theorem.

**Primary evidence read.** Stephen Smale, *An Infinite Dimensional Version of
Sard's Theorem*, §1, journal pp. 861--863 / PDF pp. 2--4,
<https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf>,
was opened through the §2 boundary.  The source defines Fredholm maps on
countable-base Banach manifolds and proves Theorem (1.3): for a $C^h$ Fredholm
map, $h>\max\{\operatorname{ind},0\}$, regular values are residual.  Its proof
reduces locally to finite-dimensional kernel/cokernel data and Theorem (1.2).
The existing published `thm-morse-sard-for-euclidean-maps` is therefore a
genuine backward dependency, not a relabelling of Sard--Smale.

Abbondandolo--Majer, §2.12, PDF pp. 41--46,
<https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf>, was reread
for Theorem 2.19 and Lemmas 2.21--2.25.  In particular, Lemmas 2.23--2.24 give
the onto universal linearization and Fredholm projection used here, while
Lemma 2.25 supplies the fixed-critical-pair residual step.  The harvest now
names the carrier for every one of these results; Smale is the primary proof
source rather than an unverified provenance note.

**Changed scaffold records and proof contracts.**

- `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds`
  (`definition`, `deps: []`) will define the $C^h$ countable-base Banach
  manifold convention, a Fredholm derivative (finite kernel and cokernel with
  closed range), its index, and a regular value.  It is deliberately a local
  interface; it does not claim a global Fredholm theory beyond what the
  subsequent theorem states.
- `thm-sard-smale-residual-regular-values-for-fredholm-maps` depends on that
  definition, `def-nowhere-dense-meagre-and-residual-subsets`, and
  `thm-morse-sard-for-euclidean-maps`.  Its authoring proof must retain the
  finite differentiability bound $h>\max\{m,0\}$ for Fredholm index $m$, the
  countable-base hypothesis, the local kernel/cokernel reduction, and the
  conclusion **residual**, never measure-theoretic or open dense.
- `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator`
  was moved before the genericity chain.  Its existing parametrized-trajectory
  and Riemannian/Hessian dependencies remain sufficient: it still must define
  its decaying completion and $D_\gamma$ rather than import a bare quotient
  claim.
- `lem-universal-metric-trajectory-projection-is-fredholm` depends on the
  parametrized trajectory definition, the new Banach-Fredholm definition, the
  Riemannian/Hessian definition, and the linearized-flow lemma.  Its contract
  is a finite-$C^h$ metric completion, with variations fixed near critical
  points, an onto universal section linearization, and a Fredholm projection
  of the zero set to the metric parameter space.  It is the missing
  universal-section interface.
- `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics`
  depends on the residual definition, the published Baire theorem, Sard--Smale,
  and the universal projection lemma.  It must pass from the finite-regularity
  residual sets to the standard complete-metrizable $C^\infty$ metric topology
  by a countable diagonal/Baire argument.  It must state the background
  Baire/choice convention inherited from its published dependency.
- `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` now
  depends on the two new analytic lemmas and the new Sard--Smale theorem.  Its
  exact scope remains: $M$ closed, $f$ fixed and Morse, and the set of smooth
  metrics making $(f,g)$ Morse--Smale is residual.  It neither asserts openness
  nor mixes this metric problem with varying-$f$ or continuation-family
  genericity.

### E18-2 — initial global-moduli repair (superseded in the Scaffold-fix round)

**Finding and disposition.** The scope repair retains the counterexample's
stable existing id
`cex-an-index-one-moduli-space-can-be-infinite-without-compactness`, but its
claim is now the **global index-one locus**
$\mathcal M_1(X):=\coprod_{\lambda(p)-\lambda(q)=1}\mathcal M(p,q)$, not an
unsupported claim that one fixed-endpoint space $\mathcal M(p,q)$ is infinite.
This is the exact scope carried by the source, and it is sufficient to refute
the unqualified inference “zero-dimensional index-one data are finite” on a
noncompact manifold.  The field construction in this initial fix was rejected
at recheck and is not an authoring contract; the replacement is recorded in
the later `## Scaffold-fix round`.

**Source evidence and rejected witness.** Cieliebak--Frauenfelder, *Morse homology on
noncompact manifolds*, Introduction `Example`, PDF p. 2, and §2.1 through the
index-one quotient paragraph, PDF pp. 3--7,
<https://arxiv.org/pdf/0911.1805>, was opened and read.  Its example is
$M=\coprod_{n\ge1}\mathbb R_n$, with on each component one maximum $c_n^+$,
one minimum $c_n^-$ of values $n,-n$, and precisely one gradient flow line
between them.

The initial metric formula
$g_n=(1+(f_n')^2)\,dx^2$ did give a complete strictly descending negative
gradient, but its linearizations at $1$ and $-1$ are $3n$ and $-3n$, not the
required $2$ and $-2$.  It therefore fails the exact local normal-form
dependency and must not be used.  The later Scaffold-fix round supplies and
checks the replacement bounded vector field.

**Known limit.** This source-faithful witness does not claim an infinite
zero-dimensional moduli set for a *single fixed pair* of critical points; it
establishes the only claim now scaffolded, namely global non-finiteness absent
compactness.  Any stronger connected or fixed-endpoint example requires a
separate source and must not be inferred at authoring time.

**Coverage records changed.** The Abbondandolo--Majer harvest now maps
Theorem 2.19 to the new Sard--Smale theorem; Lemmas 2.23--2.24 to the
universal-projection lemma; and Lemma 2.25 to the Baire-passage lemma.  New
complete, fetch-verified records enumerate Smale §1 and the relevant
Cieliebak--Frauenfelder Introduction/§2.1 results.  Every harvested result is
carried by an item or has a result-specific deferred/out-of-scope disposition.

### Fix-pass validation

- JSON parsing — PASS for the manifest and coverage files.
- `node tools/manifest-deps.mjs research/frontier-32-batch-18.pages.json` —
  PASS: 25 items, 0 normalized, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-18.coverage.json
  --require-destination` — PASS: 1 page, 64 harvested results, 0 errors,
  0 warnings.
- Batch-local `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-18.pages.json` — PASS: 25 scoped items,
  0 errors, 0 warnings.
- Required whole-run `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-*.pages.json` — PASS: 676 scoped items,
  0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-18.coverage.json` — PASS: all 6 source receipts
  are fetch-verified.  The two added URLs were also directly opened in the web
  reader at the exact recorded locators.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS (exit 0).
  It validates the unchanged run-wide plan; the new scaffold records remain
  intentionally unspliced.
- `git diff --check -- research/frontier-32-batch-18.pages.json
  research/frontier-32-batch-18.coverage.json
  research/frontier-32-batch-18.notes.md` — PASS.

No plan, library, item, workflow, or dispatch artifact was changed.

## Scaffold-fix round

### E18-2 — accepted: locally normalized complete downward-gradient-like witness

**Finding and disposition.** Accepted.  The previous negative-gradient metric
had the wrong invariant linearizations at its critical points and is
superseded.  The manifest keeps the same counterexample id and its already
necessary dependencies:
`def-downward-gradient-like-vector-field`, `def-morse-smale-pair`,
`prop-index-one-trajectory-spaces-are-zero-dimensional`, and
`rem-noncompact-flow-completeness-is-an-extra-hypothesis`.  No new item or
dependency is needed.

**Fetch-verified source support.** Cieliebak--Frauenfelder, *Morse homology on
noncompact manifolds*, Introduction `Example`, PDF p. 2, and §2.1, PDF
pp. 3--7, <https://arxiv.org/pdf/0911.1805>, was re-opened at the recorded
full-text URL.  Its Introduction example gives the required pattern
$\coprod_{n\geq1}\mathbb R_n$: one maximum and one minimum of values $n$ and
$-n$ on each component, with precisely one flow line between them.  It does
not provide the particular locally normalized complete field below; coverage
now says so explicitly.  The other five recorded full-text URLs were also
re-opened at their exact recorded URLs.  `source-fetch-check --stamp
--force` could not resolve any public host in this runner (`EAI_AGAIN` for all
six), while the reader opened the complete PDFs; this is a resolver limitation,
not a replacement-source event.

**Replacement construction and checks.** On $\mathbb R_n$ set
$$ f_n(x)=\frac n2(3x-x^3),\qquad p_n=1,\qquad q_n=-1. $$
Thus $p_n$ is a Morse maximum of index $1$, $q_n$ a Morse minimum of index
$0$, and they have values $n$ and $-n$.  Put
$$ Y_n=-\frac{f_n'(x)}{1+(f_n'(x))^2}\,\partial_x. $$
Near $p_n$, use the Morse coordinate
$$ u=(x-1)\sqrt{\frac{n(x+2)}2},\qquad f_n=n-u^2, $$
and define $X_{+,n}=(2u/u')\partial_x$.  Near $q_n$, use
$$ v=(x+1)\sqrt{\frac{n(2-x)}2},\qquad f_n=-n+v^2, $$
and define $X_{-,n}=(-2v/v')\partial_x$.  Choose disjoint smooth bump
functions $\chi_+$ and $\chi_-$ supported respectively in
$|x-1|<1/4$ and $|x+1|<1/4$, each equal to $1$ on the corresponding
$1/8$-neighbourhood, and set
$$ X_n=\chi_+X_{+,n}+\chi_-X_{-,n}+(1-\chi_+-\chi_-)Y_n. $$
On the two inner neighbourhoods, $X_nu=2u$ and $X_nv=-2v$, so this is exactly
the local normal form required by
`def-downward-gradient-like-vector-field`, not merely a matching
linearization.  Away from the critical points, each summand points strictly
downward: $df_n(X_{+,n})=-4u^2$, $df_n(X_{-,n})=-4v^2$, and
$df_n(Y_n)=-(f_n')^2/(1+(f_n')^2)$.  Hence their nonnegative bump combination
is strictly descending.

The local coefficients are independent of $n$:
$$ X_{+,n}=\frac{4(x-1)(x+2)}{3(x+1)}\partial_x,
\qquad X_{-,n}=-\frac{4(x+1)(2-x)}{3(1-x)}\partial_x. $$
They are bounded on their fixed supports, and $|Y_n|\leq1/2$.  Therefore the
patched $X_n$ is bounded (uniformly in $n$), and every solution exists for all
time.  On each component,
$W^u(p_n)=(-1,\infty)$ and $W^s(q_n)=(-\infty,1)$, whose intersection
$(-1,1)$ is one time-translation orbit; all remaining nonempty stable/unstable
intersections are a one-dimensional tangent space with a zero-dimensional one.
Thus $(f,X)$ on $\coprod_n\mathbb R_n$ is Morse--Smale, and
$$ \mathcal M_1(X)=\coprod_{n\geq1}\mathcal M(p_n,q_n)
 =\coprod_{n\geq1}\{[\gamma_n]\} $$
is infinite and discrete.  This retains the prior, deliberately narrow global
claim and makes no fixed-endpoint or connected-manifold claim.

**Coverage and manifest action.** The Cieliebak--Frauenfelder Introduction
result remains `included` in
`cex-an-index-one-moduli-space-can-be-infinite-without-compactness`; its
coverage receipt now records the exact source/construction boundary.  The
manifest itself requires no structural edit: the item already has the correct
stable id, kind, and explicit dependency array.

**Current validation.** JSON parsing passed.  `manifest-deps` passed with 25
items and zero errors; the batch coverage checklist passed with 64 harvested
results and zero warnings; and manifest-only content policy passed across all
frontier-32 batch manifests with 677 scoped items and no errors or warnings.
The receipt gate reports 6/6 fetch-verified sources.  `validate-plan` exited
0, and `git diff --check` passed for the three task-authorized artifacts.

## Step-5 authoring

Authored draft pages:

- `library/differential-topology/stable-unstable-manifolds-and-morse-smale-transversality.md`
- `library/differential-topology/stable-unstable-manifolds-and-morse-smale-transversality-examples.md`

Authored draft A-item ids: `def-morse-smale-pair`, `def-parametrized-morse-trajectory-space`, `prop-parametrized-morse-trajectory-space-is-a-manifold`, `lem-time-translation-acts-freely-on-nonconstant-trajectories`, `def-unparametrized-morse-trajectory-moduli-space`, `lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories`, `thm-unparametrized-trajectory-space-is-a-smooth-manifold`, `cor-no-morse-smale-trajectories-for-nonpositive-index-drop`, `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator`, `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds`, `thm-sard-smale-residual-regular-values-for-fredholm-maps`, `lem-universal-metric-trajectory-projection-is-fredholm`, `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics`, `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function`, `thm-relative-morse-smale-perturbation-of-a-gradient-like-field`, `prop-index-one-trajectory-spaces-are-zero-dimensional`, `prop-index-two-trajectory-spaces-are-one-dimensional`, `lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices`, `rem-morse-smale-residuality-does-not-assert-simultaneous-genericity-for-all-data`, and `rem-ambient-orientability-is-not-required-for-morse-smale-transversality`.

Authored draft B-item ids: `ex-morse-smale-flow-on-the-circle`, `ex-a-morse-smale-height-function-on-a-tilted-torus`, `cex-symmetric-torus-height-flow-is-not-morse-smale`, `cex-an-index-one-moduli-space-can-be-infinite-without-compactness`, and `ex-regular-level-slices-for-unparametrized-trajectories`.

All statements and proofs are marked literature-derived and cite the scoped Audin--Damian, Ritter, Abbondandolo--Majer, Smale, and Cieliebak--Frauenfelder treatments recorded in coverage.  The proof contract is `research/frontier-32-batch-18.proof-contracts.json`; it records every cited fact's exact current dependency statement, all numbered proof uses, and all eight standard boundary dispositions for the 19 proof-bearing items.

The descending convention is fixed throughout.  The quotient manifold is constructed via a regular intermediate level, not inferred from a free action.  The generic-metric theorem says residual for a fixed Morse function only.  The index-two item states dimension only; no compactification or end classification is claimed.  The noncompact counterexample is deliberately the global index-one locus $\mathcal M_1(X)$, an infinite discrete union over components, and does not claim infinitude for a single fixed endpoint pair.  The symmetric-sphere design claim remains dropped; the source-faithful symmetric inner-tube torus counterexample is authored instead.

Required checks run after the canonical phase repair in the broken-trajectory lemma:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 25 explicit batch item paths — 19 proof-bearing files checked, 0 failing.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; page order and item graph acyclic and resolved.
- `node tools/content-policy.mjs research/frontier-32-batch-18.pages.json` — 25 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-18.proof-contracts.json --strict` — 19/19 checked, 0 errors, 0 warnings.
- `git diff --check -- items library/differential-topology research/frontier-32-batch-18.proof-contracts.json` — pass.

There are no remaining authoring blockers for this batch.
