# phase-2-next-17 — Step 3b group A supplemental authoring for D

Dispatch label: `step3b-a-96dc4c5e243b0a91`

Owned batch: 7

Owned files: `ex-great-circles-as-round-sphere-geodesics` followed by
`ex-normal-coordinates-on-the-round-sphere`

This is a supplemental content handoff to group D, not a Step-3 gate pass or
an independent audit. No shared manifest, coverage, proof-contract, scope,
decision, page, plan, group-D report, or published item is edited here.

## Checkpoint 1 — `ex-great-circles-as-round-sphere-geodesics`

Status: authored and focused checks pass.

Exact claim and conventions: for the unit round sphere $S^n$, $n\geq1$, on an
interval with nonempty interior, every nonconstant affinely parametrized
geodesic has constant speed $c>0$ and, for each supplied $t_0$ in its parameter
interval, has the form
$$\gamma(t)=\cos(c(t-t_0))p+\sin(c(t-t_0))u,$$
where $p=\gamma(t_0)$ and $u=\gamma'(t_0)/c$ are orthonormal. Thus its image is
an arc of the great circle in their span; the explicit all-real extension is
the corresponding maximal geodesic and covers the entire circle. The converse
and constant-curve case are proved. Included endpoints use one-sided
derivatives plus continuity. The argument is choice-free.

Proof route: identify $T_pS^n=p^\perp$; verify directly that tangent projection
of ambient differentiation is a metric-compatible torsion-free connection;
invoke Levi--Civita uniqueness; derive
$D_t^\nabla V=V'+\langle\gamma',V\rangle\gamma$; reduce a speed-$c$ geodesic to
$\gamma''=-c^2\gamma$; prove the displayed solution from its initial data via
the conserved nonnegative quantity $|h'|^2+c^2|h|^2$; and verify the converse.

Source read: Ved Datar, *Lectures on Riemannian Geometry*, Proposition 15.3.1
and its complete proof, printed pp. 117--118 (PDF pp. 125--126). It proves that
round-sphere geodesics are great circles. The authored item derives the
tangent-projection connection and explicit formula rather than copying Datar's
isometry argument.

Dependencies retained from the manifest:

- `def-geodesic-of-an-affine-connection`
- `prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`
- `thm-fundamental-theorem-of-riemannian-geometry`
- `ex-the-n-sphere-with-its-standard-smooth-atlas`
- `def-riemannian-metric-and-riemannian-manifold`

Necessary earlier suppliers added to the item after the scaffold audit:

- `thm-sine-and-cosine-derivatives`
- `cor-trigonometric-parity-and-pythagorean-identity`
- `thm-sine-and-cosine-parametrize-the-unit-circle`
- `thm-chain-rule`
- `cor-zero-derivative-implies-constant`

These five additions are actual uses in steps 4.1--5.1, not source-only
orientation. Group D or the serial integrator must mirror them in the batch-7
manifest and dependency records and add the item-specific proof contract. The
shared decision is intentionally not recorded by this dispatch; the item is
ready for group D's canonical integration after those records are supplied.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-great-circles-as-round-sphere-geodesics.md`
  — pass, 1 checked and 0 failing.
- `node tools/rendercheck.mjs items/ex-great-circles-as-round-sphere-geodesics.md`
  — pass, 1 file; frontmatter, delimiters, KaTeX, and renderer parsing clean.
- A focused trailing-whitespace scan of the owned file found no defect.

Open gap before canonical closure: shared manifest/dependency synchronization
and a strict item-specific proof-contract entry remain group-D/serial work.
Next action in this dispatch: author
`ex-normal-coordinates-on-the-round-sphere`, after rechecking that it remains
absent.

## Published concern observed in the relevant closure

`thm-fundamental-theorem-of-riemannian-geometry` is mathematically adequate for
the use above, but its published frontmatter has only a `verification.judge`
record. `SCHEMA.md` requires a published proved-here item to have `audited` or
`verified`; a judge stamp alone is insufficient. This is a confirmed
publication-evidence metadata defect, not a confirmed mathematical defect.
Confidence: high from direct frontmatter inspection. Required supplier: none.
Repair strategy: the owner/serial reconciler should record it in the canonical
published-consumer-supplier ledger and arrange an authorized audit or delegated
verification record; this supplemental dispatch does not edit the published
item.

## Checkpoint 2 — `ex-normal-coordinates-on-the-round-sphere`

Status: authored and focused checks pass after adopting the phase checker's
canonical renumbering and repairing the normal-domain quantifier.

Exact claim and conventions: assume $\mathrm{AC}_\omega$ and fix $n\geq1$,
$p\in S^n$, and a supplied orthonormal basis of $T_pS^n$. The exponential is
defined on all of $T_pS^n$ and satisfies
$$\exp_p(v)=\cos|v|\,p+\frac{\sin|v|}{|v|}v$$
for $v\ne0$, with continuous value $p$ at zero. It is injective on
$|v|<\pi$. On a normal domain inside that ball, the normal coordinates of
$\exp_p(v)$ are the supplied-basis components of $v$. The distinct witnesses
$\pi e_1$ and $-\pi e_1$ both map to $-p$, so the open-ball endpoint is sharp.
Dimension zero is explicitly outside the claim, the empty case has no supplied
centre, and $n=1$ is covered.

Proof route: evaluate the all-real great-circle solution at time one; prove
continuity at zero by
$|\exp_p(v)-p|\leq|\cos|v|-1|+|\sin|v||$; recover $|v|$ from the strictly
decreasing scalar component $\langle p,\exp_p(v)\rangle=\cos|v|$ and then
recover $v$ from its perpendicular component; restrict a supplied normal
domain to the radius-$\pi$ ball; and calculate the two antipodal witnesses.

Source read: Datar, *Lectures on Riemannian Geometry*, the complete exponential
map and normal-coordinate passage on printed pp. 127--131 (PDF pp. 135--139),
especially Example 17.1.3 on p. 128 and Definition 17.2.1 on p. 130. The source
gives the $S^2$ north-pole formula and the normal-chart definition; the authored
item proves the all-$n$ formula, continuity, injectivity, and sharp collision.

Dependencies retained from the manifest:

- `def-normal-neighborhood-and-normal-coordinate-chart`
- `ex-great-circles-as-round-sphere-geodesics`

Necessary earlier suppliers added to the item after the scaffold audit:

- `def-domain-and-exponential-map-of-a-connection`
- `def-countable-choice`
- `thm-sine-and-cosine-derivatives`
- `cor-differentiable-implies-continuous`
- `thm-sine-cosine-signs-monotonicity-and-ranges`
- `cor-pi-is-the-first-positive-sine-zero`
- `thm-quarter-turn-values-and-shift-formulas`

The explicit calculation makes no choice. `def-countable-choice` is declared
because the current library definitions of the exponential map and normal
neighborhood assume $\mathrm{AC}_\omega$; the use is precisely [A1] through
[F1]--[F2], in proof steps 1.2 and 3.1. Group D or the serial integrator must
mirror the seven added edges in the batch-7 manifest/dependency records and
propagate this assumption in the canonical contract. The shared decision is
intentionally not recorded by this dispatch.

Checks actually run:

- Focused precheck first requested canonical phase repair; that repair was
  adopted. The rerun
  `node tools/tsx-run.mjs tools/precheck.mts items/ex-normal-coordinates-on-the-round-sphere.md`
  passed with 1 checked and 0 failing.
- `node tools/rendercheck.mjs items/ex-normal-coordinates-on-the-round-sphere.md`
  passed for 1 file with frontmatter, delimiters, KaTeX, and renderer parsing
  clean.
- A focused trailing-whitespace scan of the owned item and report found no
  defect after removing Markdown hard-break spaces from this report.

Open gap before canonical closure: shared manifest/dependency synchronization,
the batch coverage row, and a strict item-specific proof-contract entry remain
group-D/serial work.

## Proof-contract handoff

The following maps the completed arguments exactly for canonical integration.
Fact labels have been split so each source has only its actual numbered-step
uses.

### Great-circle derivations and citation uses

- 1.1: $T_pS^n=p^\perp$; tangent projection is
  $D_XY+\langle X,Y\rangle p$; it is an affine, metric-compatible,
  torsion-free connection and hence Levi--Civita. Inputs: F1, F2, given.
- 2.1: along a curve,
  $D_t^\nabla V=V'+\langle\gamma',V\rangle\gamma$, so the geodesic equation is
  $\gamma''+|\gamma'|^2\gamma=0$. Inputs: F3, step 1.1.
- 3.1: constant speed gives the constant case when $c=0$ and orthonormal
  initial data with $\gamma''=-c^2\gamma$ when $c>0$. Inputs: F4, L4,
  step 2.1.
- 4.1: the proposed trigonometric solution has the same initial data and ODE;
  the nonnegative conserved energy of the difference forces equality,
  including included endpoints. Inputs: L1, L2, L4, step 3.1.
- 5.1: the all-real solution covers the great circle and verifies the converse;
  the construction is choice-free. Inputs: F3, L1, L2, L3, steps 2.1 and 4.1.

Canonical citation tuples, with exact contiguous source-section excerpts and
all uses:

- F1 -> `ex-the-n-sphere-with-its-standard-smooth-atlas`, Example: “define a
  smooth atlas on $S^n$.”; use 1.1.
- F1 -> `def-riemannian-metric-and-riemannian-manifold`, Definition: “A
  **Riemannian metric** on a Hausdorff second-countable smooth manifold $M$ is
  a smooth symmetric covariant two-tensor $g$ such that $g_p(v,v)>0$ for every
  point $p$ and every nonzero $v\in T_pM$.”; use 1.1.
- F2 -> `thm-fundamental-theorem-of-riemannian-geometry`, Statement: “Every
  supplied smooth Riemannian metric on a smooth manifold, including a manifold
  with boundary, has exactly one Levi–Civita connection.”; use 1.1.
- F3 -> `def-geodesic-of-an-affine-connection`, Definition: “A smooth curve
  $\gamma:I\to M$ is an **affinely parametrized geodesic** when
  $$D_t\gamma'(t)=0\qquad(t\in I),$$”; uses 2.1 and 5.1.
- F4 -> `prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`,
  Statement: “Then $g(\gamma',\gamma')$ and the speed $|\gamma'|$ are constant
  on $I$.”; use 3.1.
- L1 -> `thm-sine-and-cosine-derivatives`, Statement: “The functions $\sin$
  and $\cos$ are differentiable on $\mathbb R$, with
  $$(\sin x)'=\cos x,\qquad(\cos x)'=-\sin x.$$”; uses 4.1 and 5.1.
- L1 -> `thm-chain-rule`, Statement: “$$(f \circ g)'(c) \;=\;
  f'\bigl(g(c)\bigr)\,g'(c) .$$”; uses 4.1 and 5.1.
- L2 -> `cor-trigonometric-parity-and-pythagorean-identity`, Statement:
  “$$\sin(-x)=-\sin x,\qquad\cos(-x)=\cos x,\qquad
  \sin^2x+\cos^2x=1.$$”; uses 4.1 and 5.1.
- L3 -> `thm-sine-and-cosine-parametrize-the-unit-circle`, Statement: “The
  map $t\mapsto(\cos t,\sin t)$ is a bijection from $[0,2\pi)$ onto
  $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$.”; use 5.1.
- L4 -> `cor-zero-derivative-implies-constant`, Statement: “Then $f$ is
  constant on $I$: there is a real $k$ with $f(x) = k$ for every
  $x \in I$.”; uses 3.1 and 4.1.

Great-circle boundary rows: empty is inapplicable because $S^n$ is nonempty,
$n\geq1$, and a curve and $t_0$ are supplied; zero and degenerate are checked
in 3.1 and 5.1 by the constant curve; one is checked because the orthonormal
two-plane formula applies to $S^1$; endpoints are checked in 4.1; nonempty
choice is checked in 5.1; iff-forward is checked in 1.1--4.1 and iff-reverse in
5.1.

### Normal-coordinate derivations and citation uses

- 1.1: under the inherited exponential-map framework, the all-real
  initial-value solution puts every tangent vector in the exponential domain
  and yields the displayed time-one formula. Inputs: A1, F1, F3, given.
- 1.2: intersect one supplied normal domain with $B_\pi(0_p)$ to prove
  existence there, then evaluate the coordinate inverse on an arbitrary normal
  domain contained in that ball. Inputs: A1, F2.
- 2.1: the nonzero branch tends to $p$ at zero. Inputs: L1, step 1.1.
- 2.2: equality of exponential images first forces equal radii and then equal
  tangent vectors, including the zero/nonzero split. Inputs: L2, L3, step 1.1.
- 3.1: $\pi e_1$ and $-\pi e_1$ are explicit distinct collision witnesses;
  all dimensional, endpoint, empty, and choice qualifications are recorded.
  Inputs: L3, L4, steps 1.1 and 2.2.

Canonical citation tuples, with exact contiguous source-section excerpts and
all uses:

- A1 -> `def-countable-choice`, Definition; exact checker quote, including the
  source's blockquote markers: `> For every family $(X_n)_{n \in \mathbb{N}}$
  of nonempty sets indexed by > $\mathbb{N}$ there is a function $f$ with
  domain $\mathbb{N}$ such that > $f(n) \in X_n$ for every
  $n \in \mathbb{N}$.`; uses 1.1 and 1.2, solely through F1 and F2.
- F1 -> `def-domain-and-exponential-map-of-a-connection`, Definition:
  exact substring `\exp(v)=\gamma_{p,v}(1)`; use 1.1.
- F2 -> `def-normal-neighborhood-and-normal-coordinate-chart`, Definition:
  “The associated **normal coordinate chart** is
  $$x_e=E_e^{-1}\circ\exp_p^{-1}:U\longrightarrow
  E_e^{-1}(D)\subseteq\mathbb R^n.$$”; use 1.2.
- F3 -> `ex-great-circles-as-round-sphere-geodesics`, Example: “For any
  supplied $t_0\in I$, a nonconstant affinely parametrized geodesic
  $\gamma:I\to S^n$ has constant speed $c>0$ and can be written
  $$\gamma(t)=\cos(c(t-t_0))p+\sin(c(t-t_0))u,$$”; use 1.1.
- L1 -> `thm-sine-and-cosine-derivatives`, Statement: “The functions $\sin$
  and $\cos$ are differentiable on $\mathbb R$”; use 2.1.
- L1 -> `cor-differentiable-implies-continuous`, Statement: “Consequently, if
  $f$ is differentiable on a set $S \subseteq A$ then $f$ is continuous at
  every point of $S$.”; use 2.1.
- L2 -> `thm-sine-cosine-signs-monotonicity-and-ranges`, Statement: “Cosine is
  strictly decreasing on $[2m\pi,(2m+1)\pi]$”; use 2.2 with $m=0$.
- L3 -> `cor-pi-is-the-first-positive-sine-zero`, Statement: “$\sin\pi=0$,
  and $\sin x>0$ for every $x$ with $0<x<\pi$.”; uses 2.2 and 3.1.
- L4 -> `thm-quarter-turn-values-and-shift-formulas`, Statement:
  exact substring `\sin\pi=0,\quad\cos\pi=-1.`; use 3.1.

Normal-coordinate boundary rows: empty is inapplicable because no centre $p$
exists; zero and degenerate are checked by 1.1--2.1; one is checked in 3.1 by
the supplied $e_1$; endpoints are checked in 3.1, which both excludes radius
$\pi$ from the open ball and exhibits the boundary collision; nonempty choice
is checked in 1.1--1.2 with the exact inherited $\mathrm{AC}_\omega$ use, while
3.1 confirms that the explicit collision calculation makes no choice; both iff
cases are inapplicable because the item asserts a formula, continuity,
injectivity, and a counter-collision rather than an equivalence.

## Final supplemental handoff

Completed, in prerequisite order:

1. `ex-great-circles-as-round-sphere-geodesics`
2. `ex-normal-coordinates-on-the-round-sphere`

Both item files were confirmed absent immediately before their respective
first writes. No local supplier item was added: every declared supplier exists,
and a final resolution scan found zero missing dependency files across the ten
great-circle dependencies and nine normal-coordinate dependencies. The
same-batch consumer edge
`ex-normal-coordinates-on-the-round-sphere` ->
`ex-great-circles-as-round-sphere-geodesics` is preserved. The other draft
suppliers used by these items are also in batch 7; all newly discovered
external suppliers are already published. Therefore these repairs introduce
no new different-batch row, but group D must retain the same-batch edge and
recheck its batch-7 dependency input when synchronizing the manifest.

Final checks actually run after the last content repair:

- Explicit-path precheck on both owned item files: pass, 2 checked and 0
  failing.
- Explicit-path rendercheck on both owned item files: pass; YAML frontmatter,
  delimiters, wikilink placement, KaTeX, and renderer parsing are clean.
- Focused citation-excerpt comparison using the proof-contract checker's
  source-section parser and whitespace normalization: pass, 18/18 handoff
  excerpts occur in their declared source sections.
- Focused trailing-whitespace scan on both items and this report: pass.
- `manifest-deps` on `research/phase-2-next-17-batch-7.pages.json`: pass, 127
  items, 0 normalized, 0 errors. This checks the still-unsynchronized shared
  manifest and does not certify the added item-level edges.
- Strict proof-contract check scoped to the two completed IDs: expected fail,
  with exactly two `scope-missing-contract` errors and no warnings. The
  dispatch forbids writing the shared contract; the complete contract handoff
  is recorded above.
- Batch-7 content-policy check: neither completed ID produced an error. The
  batch command remains red with 14 `scope-item-missing` errors, all outside
  this supplemental ownership: `thm-hopf-rinow`,
  `cor-complete-connected-riemannian-manifolds-are-proper-length-spaces`,
  `cor-compact-riemannian-manifolds-are-geodesically-complete`,
  `cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image`,
  `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`,
  `prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time`,
  `fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold`,
  `fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic`,
  `fs-geodesic-completeness-means-the-manifold-is-compact`,
  `ex-geodesics-of-a-riemannian-product`, `ex-hyperbolic-space-is-complete`,
  `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`,
  `cex-a-complete-manifold-with-zero-global-injectivity-radius`, and
  `ex-hopf-rinow-on-a-flat-cylinder`.
- `validate-plan research/plan-spec.json`: fail on the repository's broad
  pre-splice baseline. A filtered rerun showed no error naming either completed
  item, but did expose current page-level mismatches relevant to this handoff:
  the A page has redundant direct prerequisites for Euclidean ODEs (already
  reached through vector fields, Riemannian metrics, and connections), vector
  fields (through Riemannian metrics and connections), Riemannian metrics
  (through connections), compactness (through vector fields, Riemannian
  metrics, and connections), and completeness/uniform continuity (through
  Euclidean ODEs, vector fields, Riemannian metrics, connections, and
  compactness). The B page's direct fundamental-group-of-the-circle
  prerequisite is redundant through its A companion. These are pre-splice
  plan mismatches for Step 4, not changes authorized here.

Canonical integration still required from group D or the serial integrator:

- Mirror the five added great-circle dependencies and seven added
  normal-coordinate dependencies listed in the checkpoints into the batch-7
  manifest and dependency records.
- Add coverage dispositions for both item IDs, preserving the Datar locators
  and qualifications recorded above. The current batch-7 coverage records the
  general exponential/normal-coordinate source only against
  `thm-existence-of-normal-neighborhoods`; it does not name either completed
  example.
- Install the two item-specific strict proof contracts from this handoff,
  including the boundary rows and the exact $\mathrm{AC}_\omega$ propagation.
- Recompute any scope and item decisions invalidated by those real dependency
  changes, then record the authorized Step-3 decisions. This dispatch recorded
  no shared decision and used neither `--owner` nor any judge/audit stamp.
- Compose both IDs onto
  `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` in their
  manifest order after its A companion. Both canonical page files are
  currently absent, so rendering here was necessarily item-focused.
- Reconcile the published metadata concern for
  `thm-fundamental-theorem-of-riemannian-geometry` described above; no other
  potentially defective published item was found in this owned proof closure.

There is no unresolved mathematical or source-reading qualification in either
completed proof. The remaining obligations are canonical shared-record/page
integration and the separately owned batch-7 absences reported by the batch
check. This report is not a Step-3 gate pass or an independent audit.
