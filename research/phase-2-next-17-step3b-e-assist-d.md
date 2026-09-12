# phase-2-next-17 — Step 3b group E supplemental authoring for D

Dispatch label: `step3b-e-d33ad95a5a2385a5`

Owned batch: 7

Owned item: `lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain`

This is a supplemental content handoff to group D, not a Step-3 gate pass or
an independent audit. No shared manifest, coverage, proof-contract, scope,
decision, page, plan, group-D report, dependency ledger, or published item was
edited.

`research/phase-2-next-17-owner-authoring-direction.md` was read; it contains
no batch-7 or owned-item-specific direction. The existing Step 1 decision marks
this item `ready` after examining only the four scaffold dependencies. The
completed proof uses the 20 dependencies recorded below, so that earlier
readiness evidence is no longer sufficient for the actual dependency graph.
It was preserved rather than overridden because this dispatch is forbidden to
edit decisions.

## Checkpoint — owned item

Status: fully authored; the focused precheck and renderer both pass.

Before the write, both
`items/lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain.md`
and this report were confirmed absent. The item was therefore not an overwrite
of group D's work.

Exact claim and conventions: assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a
boundaryless Riemannian manifold, let $p\in M$, let $C_p$ be its connected
component, and suppose the fibre exponential domain is
$\mathcal E_p=T_pM$. For every $q\in C_p$ there is $v\in T_pM$ such that
$$\exp_p(v)=q,\qquad |v|_{g_p}=d_{g|_{C_p}}(p,q),$$
and the radial curve $t\mapsto\exp_p(tv)$ is globally length minimizing. If
$q\ne p$, writing $\ell=d(p,q)$, the proof produces $v=\ell u$ with $|u|=1$
and proves the stronger endpoint identity
$$d(\exp_p(su),q)=\ell-s\qquad(0\le s\le\ell).$$
Every curve from $p$ to $q$ has connected image and stays in $C_p$, so the
componentwise and ambient minimizing statements agree.

## Scaffold audit and repair

The batch-7 scaffold has the correct promised conclusion, but its strategy
contains a substantive omitted argument. It says that the set of points
reached by minimizing radial geodesics is open because of convex-neighbourhood
extension. Strong convexity by itself does not show that concatenating an old
radial minimizer with each local connector is a geodesic from $p$: the possible
corner must first be excluded, and an arbitrary nearby endpoint need not lie on
the continuation of the old radial direction. This is a confirmed gap in the
scaffold strategy as written, not a defect in the promised lemma and not a
published-item defect.

The authored proof repairs that gap by fixing one target $q$ and using a
frontier in parameter space:

1. At any $x\ne y$, a sufficiently small normal exponential sphere about $x$
   is proved to be the exact global metric sphere. Finite-dimensional
   Heine--Borel and continuous-image compactness give a point $z_0$ minimizing
   $d(-,y)$ on that sphere.
2. A single near-minimizing competitor from $x$ to $y$ must cross the sphere by
   the intermediate value theorem. Splitting its length at a crossing proves
   the exact identity
   $d(x,y)=\delta+d(z_0,y)$. This supplies the missing minimization calculation
   without a sequence of approximate minimizers.
3. The first such point at $p$ selects a unit radial direction $u$. Global
   exponential domain makes $\gamma(s)=\exp_p(su)$ an all-real unit-speed
   geodesic.
4. For
   $$A=\{t\in[0,\ell]:\ell=t+d(\gamma(t),q)\},$$
   triangle inequalities prove downward closure. The supremum $T=\sup A$ lies
   in $A$ by the Lipschitz continuity of distance, again without selecting a
   sequence.
5. If $T<\ell$, repeat the compact-sphere minimization at $\gamma(T)$ inside a
   strongly convex neighbourhood. The old radial segment concatenated with
   the new local radial segment attains the global distance to its endpoint.
   Its local two-piece subarc is therefore a minimizing curve in the convex
   neighbourhood. The supplied equality case makes it a monotone
   reparametrization of the unique affine connector; unit speed on both sides
   removes the corner. Initial-value uniqueness then identifies the new local
   segment with the continuation of $\gamma$, placing $T+\delta$ in $A$ and
   contradicting maximality.
6. Thus $T=\ell$, $\gamma(\ell)=q$, and every prefix has the asserted distance
   identity.

This is the actual minimization and endpoint argument required by the planned
Hopf--Rinow theorem; no open/closed-set slogan is substituted for it.

## Source evidence and qualifications

The following complete relevant passages were read, not merely their theorem
statements:

- Ved Datar, *Lectures on Riemannian Geometry*, Theorem 19.2.1, implication
  (3)$\Rightarrow$(5), printed pp.142--144, with the theorem context through
  p.145. The relevant passage starts “Let $p,q\in M$ with
  $l=d(p,q)$” on p.142, constructs the compact first sphere on p.143, defines
  the supremal parameter there, and gives the endpoint concatenation on
  pp.143--144.
- Ben Andrews, *Geodesics and Completeness*, Theorem 11.5.1,
  (3)$\Rightarrow(*_p)$, printed pp.107--108 (PDF pp.7--8); the complete
  eight-page chapter passage was read. It constructs the compact small sphere,
  defines the fixed-target set $A$, proves its downward closure, and performs
  the convex-neighbourhood endpoint continuation.

The sources are authoritative orientation, not substitutes for the proof.
Andrews abbreviates “any path from $p$ to $q$ must pass through” the small
sphere and “the concatenation is a geodesic”; authored steps 4.1 and 10.1--11.1
derive those assertions. Datar's printed Claim 1 passage describes an arbitrary
near-minimizing unit-speed path as minimizing initially and places its
$\varepsilon$-time point on the metric sphere; that wording is not valid for an
arbitrary competitor and is not used here. Authored step 4.1 instead applies
the intermediate value theorem to $t\mapsto d(x,c(t))$ and splits the length at
the actual first supplied crossing. Datar also uses a sequence approaching the
supremum; authored step 8.1 uses the defining approximation property of a
supremum for one arbitrary $\eta$, so no countable selection is introduced.

No unresolved source qualification remains for the authored claim.

## Exact direct dependencies

The current batch manifest lists only these four dependencies:

- `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood`
- `thm-existence-of-geodesically-convex-neighborhoods`
- `cor-heine-borel-in-the-product-topology`
- `thm-compactness-under-continuous-maps`

The completed proof necessarily has the following exact direct dependency
list, already declared in the owned item's frontmatter, in prerequisite order:

- `def-countable-choice`
- `prop-components-of-a-topological-manifold-are-open-and-at-most-countable`
- `def-riemannian-distance-on-a-connected-manifold`
- `thm-riemannian-distance-is-a-metric`
- `thm-the-riemannian-distance-topology-is-the-manifold-topology`
- `def-riemannian-speed-and-length`
- `prop-length-dominates-endpoint-distance`
- `prop-length-is-additive-under-concatenation-and-invariant-under-reversal`
- `thm-intermediate-value`
- `thm-gram-schmidt-orthonormalisation`
- `cor-heine-borel-in-the-product-topology`
- `thm-compactness-under-continuous-maps`
- `thm-existence-of-normal-neighborhoods`
- `prop-exponential-map-scales-geodesic-time`
- `prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`
- `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood`
- `cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood`
- `thm-existence-of-geodesically-convex-neighborhoods`
- `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`
- `cor-cauchy-reals-lub-complete`

All suppliers currently exist before this item. No new local supplier was
created by this dispatch.

## Proof-contract handoff

### Numbered derivations

- 1.1: restrict one normal exponential chart at $x$ to a tangent ball and, if
  prescribed, inside a given open neighbourhood; choose a smaller metric ball
  using equality of metric and manifold topologies, then choose
  $0<\delta<\min\{\rho,a,D\}$. Inputs: F1, F3, F4, given.
- 2.1: the tangent sphere is nonempty in positive dimension and compact in
  orthonormal coordinates; its exponential image is compact and equals the
  global metric sphere of radius $\delta$. Inputs: F1, F3, F4, step 1.1.
- 3.1: $d(-,y)$ is 1-Lipschitz, attains a minimum at $z_0$, and the triangle
  inequality gives $d(z_0,y)\ge D-\delta$. Inputs: F1, F4, step 2.1.
- 4.1: a single competitor of length less than $D+\kappa$ crosses the metric
  sphere; prefix--suffix length inequalities contradict a strict lower bound,
  proving $D=\delta+d(z_0,y)$. Inputs: F1, F2, F5, steps 2.1--3.1,
  assume-contra, discharge-contradiction.
- 5.1: handle $q=p$ with $v=0$; otherwise apply 1.1--4.1 at $p,q$ to obtain a
  unit $u$, first sphere point $\exp_p(\varepsilon u)$, and the initial endpoint
  identity. Inputs: F1, F3, steps 1.1--4.1.
- 6.1: global exponential domain and scaling produce the all-real geodesic
  $\gamma(s)=\exp_p(su)$; connectedness keeps its image in $C_p$, and constant
  speed gives segment length $s-r$. Inputs: F1, F2, F6, given, step 5.1.
- 7.1: define $A$; the initial sphere point makes it nonempty, and two triangle
  inequalities prove $t\in A\Rightarrow[0,t]\subseteq A$, with every such
  prefix minimizing. Inputs: F1, F2, steps 5.1--6.1.
- 8.1: form $T=\sup A$ and use the supremum approximation plus the 1-Lipschitz
  distance estimate to prove $T\in A$. Inputs: F1, F2, F8, steps 6.1--7.1.
- 9.1: under $T<\ell$, choose a strongly convex $W$ at $x=\gamma(T)$ and repeat
  the local sphere argument inside $W$ with
  $0<\delta<\min\{T,\ell-T\}$, obtaining the exact new endpoint identity.
  Inputs: F3, F4, F7, steps 1.1--4.1 and 8.1, assume-contra.
- 10.1: concatenate the old ray and local radial segment. Its length is
  $T+\delta$; the endpoint identity and triangle inequality give the reverse
  distance bound, hence the concatenation and every subarc are globally
  minimizing. Inputs: F1, F2, F3, steps 6.1 and 9.1.
- 11.1: the local two-piece subarc lies in $W$. The equality case in strong
  convexity makes it a monotone reparametrization of the unique affine
  connector. Constant unit speed on both pieces forces matching one-sided
  velocities, and initial-value uniqueness identifies the local radial segment
  with $\gamma$ continued past $T$. Inputs: F6, F7, steps 6.1, 9.1, 10.1.
- 12.1: the new endpoint identity puts $T+\delta$ in $A$, a contradiction;
  hence $T=\ell$ and metric separation gives $\gamma(\ell)=q$. Inputs: F1, F8,
  steps 8.1--9.1 and 11.1, discharge-contradiction.
- 13.1: downward closure gives both distance identities on the entire interval;
  $v=\ell u$ and exponential scaling give the claimed radial parametrization,
  length, and minimization. Inputs: F1, F2, F6, steps 5.1--7.1 and 12.1.
- 14.1: componentwise/ambient equivalence, dimensional and degenerate cases,
  open and parameter endpoints, the one-way status, and exact choice use are
  recorded. Inputs: A1, F1, F3--F8, steps 4.1--5.1, 8.1, 12.1--13.1.

### Canonical citation excerpts and uses

- A1 -> `def-countable-choice`, Definition: “For every family
  $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a
  function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every
  $n\in\mathbb N$.” Used through F3, F6, and F7 in 1.1, 5.1--6.1, 9.1,
  11.1, 13.1, and accounted for in 14.1.
- F1 -> `prop-components-of-a-topological-manifold-are-open-and-at-most-countable`,
  Statement: “every connected component of $M$ is open.” Used in 1.1 and 6.1,
  and for the ambient/component equivalence in 14.1.
- F1 -> `def-riemannian-distance-on-a-connected-manifold`, Definition:
  “$d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p
  \text{ to }q\}$.” Used to define $D,\ell$ and select the single
  near-minimizing competitor in 4.1; also used in 5.1, 7.1, and 13.1.
- F1 -> `thm-riemannian-distance-is-a-metric`, Statement: “$d_g$ is a finite
  metric on a connected Riemannian manifold.” Triangle inequality and
  separation are used in 1.1, 3.1--5.1, 7.1--8.1, 10.1, and 12.1--13.1.
- F1 -> `thm-the-riemannian-distance-topology-is-the-manifold-topology`,
  Statement: “The topology of $d_g$ is the manifold topology on every connected
  Riemannian manifold.” Used in 1.1 to place a metric ball inside the normal
  chart (and inside the prescribed convex neighbourhood in 9.1).
- F2 -> `def-riemannian-speed-and-length`, Definition: “The Riemannian speed on
  a $C^1$ piece is $|\dot\gamma(t)|_g=\sqrt{g_{\gamma(t)}(\dot\gamma(t),
  \dot\gamma(t))}$. Its length is
  $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}|\dot\gamma(t)|_g\,dt$.” Used in
  4.1, 6.1, 10.1, and 13.1.
- F2 -> `prop-length-dominates-endpoint-distance`, Statement: “For every
  piecewise $C^1$ curve $\gamma:[a,b]\to M$,
  $d_g(\gamma(a),\gamma(b))\le L_g(\gamma)$.” Used in 4.1, 7.1, and 10.1.
- F2 -> `prop-length-is-additive-under-concatenation-and-invariant-under-reversal`,
  Statement: “Length adds under finite concatenation and is unchanged by
  reversal.” Used for the prefix--suffix calculation in 4.1, the concatenation
  in 10.1, and the shorter-subarc replacement there.
- F5 -> `thm-intermediate-value`, Statement: if a continuous
  $f:[a,b]\to\mathbb R$ and $y$ lies between $f(a)$ and $f(b)$, “Then there is
  $c\in[a,b]$ with $f(c)=y$.” Used in 4.1 for
  $f(t)=d(x,c(t))$ and $y=\delta$.
- F4 -> `thm-gram-schmidt-orthonormalisation`, Statement: for a finite linearly
  independent list, “There is an orthonormal list
  $(e_0,\ldots,e_{r-1})$” with the same successive spans. Used in 1.1--2.1 to
  identify the positive-dimensional tangent space with Euclidean coordinates.
- F4 -> `cor-heine-borel-in-the-product-topology`, Statement: for
  $n\ge1$, “A subset $K\subseteq\mathbb R^n$ is a compact subset for the
  product topology if and only if $K$ is closed in $\mathbb R^n$ and bounded.”
  Used in 2.1 and the repeated construction in 9.1.
- F4 -> `thm-compactness-under-continuous-maps`, Statements: “If
  $K\subseteq X$ is a compact subset of $X$ then $f[K]$ is a compact subset of
  $Y$,” and, for continuous $g$ on nonempty compact $X$, “there are
  $x_{\max},x_{\min}\in X$” attaining the extrema. Used for the compact
  exponential sphere in 2.1 and the attained distance minimum in 3.1, repeated
  in 9.1.
- F3 -> `thm-existence-of-normal-neighborhoods`, Statement: assuming
  $\mathrm{AC}_\omega$, at every point there is an open star-shaped
  $\widetilde U_p\ni0_p$, contained in $\mathcal E_p$, such that
  $\exp_p:\widetilde U_p\to U_p$ “is a diffeomorphism and $U_p$ is an open
  neighbourhood of $p$.” Used in 1.1, 5.1, and 9.1.
- F6 -> `prop-exponential-map-scales-geodesic-time`, Statement: assuming
  $\mathrm{AC}_\omega$,
  “$t\in I_{p,v}\Longleftrightarrow tv\in\mathcal E_p$,” and then
  “$\exp_p(tv)=\gamma_{p,v}(t)$.” Used in 6.1 and 13.1.
- F6 -> `prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`,
  Statement: “$g(\gamma',\gamma')$ and the speed $|\gamma'|$ are constant on
  $I$.” Used in 6.1 and in the no-corner calculation of 11.1.
- F3 -> `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood`,
  Statement: the radial geodesic in a normal ball “has length
  $|v|_{g_p}$ and minimizes length,” with equality precisely for monotone radial
  reparametrizations when $v\ne0$. Its length clause is used in 10.1; its
  normal-radial interface underlies the local constructions in 1.1--5.1 and
  9.1.
- F3 -> `cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood`,
  Statement: in a normal exponential ball,
  “$d_g(p,\exp_p(v))=|v|_{g_p}$.” Used in 2.1 to identify the exponential and
  global metric spheres, then in 5.1 and 9.1.
- F7 -> `thm-existence-of-geodesically-convex-neighborhoods`, Statement:
  every point has a strongly geodesically convex neighbourhood, it may be
  chosen inside any prescribed open neighbourhood, and it may be chosen so
  “every piecewise smooth curve attaining the global minimum between two of
  its points is a monotone reparametrization of the displayed connector.” Used
  in 9.1 and 11.1.
- F6 -> `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
  Statement: assuming $\mathrm{AC}_\omega$, for every $(p,v)\in TM$ “there is
  a unique maximal geodesic $\gamma_{p,v}:I_{p,v}\to M$” with the supplied
  initial data. Used in 11.1 to identify the new radial connector with the
  shifted old ray.
- F8 -> `cor-cauchy-reals-lub-complete`, Statement: “every nonempty
  $S\subseteq\mathbb R_C$ that is bounded above has a least upper bound
  $\sup S\in\mathbb R_C$.” Used in 8.1 to define $T$ and in 12.1 for its
  upper-bound property.

### Boundary and logical-form rows

- Empty: checked in 14.1; a supplied $p$ cannot exist when $M=\varnothing$.
- Zero: checked in 5.1 and 14.1; a zero-dimensional component is an open
  singleton, so only $q=p$ and $v=0_p$ occur.
- One: checked in 2.1 and 14.1; the positive-radius tangent sphere has two
  points and the compact minimum argument applies unchanged.
- Degenerate: checked in 5.1 and 14.1; $q=p$, $\ell=0$, and $v=0_p$ give the
  constant minimizing radial curve.
- Endpoints: checked in 1.1 by taking all radii strictly below open normal and
  metric-ball radii; $0$ and $\ell$ are included in 8.1, 12.1, and 13.1.
- Nonempty choice: checked in 14.1. $\mathrm{AC}_\omega$ is used exactly through
  the already-authored normal-neighbourhood, exponential/geodesic, and convex-
  neighbourhood suppliers F3, F6, and F7. Compact minima and the
  near-minimizing curve are finite pointwise instantiations; no additional
  choice or choice sequence is used.
- Iff-forward: inapplicable; the item is a one-way implication from global
  fibre exponential domain to existence of minimizing radial geodesics.
- Iff-reverse: inapplicable for the same item-specific reason; no converse is
  stated.

## Canonical integration required from group D

The active group D author or serial reconciler still needs to perform all
shared-state work:

1. Replace the four-edge scaffold dependency list in the batch-7 manifest with
   the exact 20-edge list above, retain the original item ID and promised
   conclusion, and align the canonical statement with the explicit
   $\mathrm{AC}_\omega$, connected-component distance, and endpoint identity.
2. Splice the item into the batch-7 A page immediately before
   `thm-hopf-rinow`; do not duplicate or weaken its proof.
3. Add or refresh its coverage row with Datar Theorem 19.2.1,
   (3)$\Rightarrow$(5), printed pp.142--144, and Andrews Theorem 11.5.1,
   (3)$\Rightarrow(*_p)$, printed pp.107--108, including the source
   qualifications above.
4. Add the strict item-specific proof-contract entry from this handoff,
   including derivations 1.1--14.1, exact citation uses, and every boundary row.
5. Refresh the current scope decision and dependency-input record after the
   actual dependency change. The suppliers already exist; no new local
   supplier or known new page-level cross-batch edge is introduced, but the
   canonical ledger must make that determination from the shared inventory.
6. Propagate $\mathrm{AC}_\omega$ through the consuming `thm-hopf-rinow` and
   any later consumer whose proof uses this lemma. The present Hopf--Rinow
   scaffold depends on this lemma but does not itself list
   `def-countable-choice`, so its authored statement and dependency record must
   not silently drop the assumption.
7. Only after canonical integration and the required shared checks should
   group D record the authorized item decision. This supplemental dispatch did
   not run `record-item`, alter an escalation, or claim a certification.

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain.md`
  — pass: `PASS ... ("direct")`; 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain.md`
  — pass: 1 file; YAML, delimiters, KaTeX, wikilink placement, and renderer
  parsing clean.

The checks were rerun after making explicit that the all-real radial ray stays
in $C_p$. No batch-wide content-policy check, strict shared contract check,
`validate-plan`, Step-3 gate, or independent audit is claimed; those require
the shared integration that this dispatch was forbidden to edit.

## Published concerns and open obligations

No potentially defective published item was found in the supplier closure
examined for this lemma. The confirmed issue is confined to the unpublished
batch scaffold strategy described above. This is not an independent audit of
the suppliers.

Open obligations are exactly the seven canonical integration actions above.
There is no unresolved mathematical or source gap in the owned item, and no
local supplier remains to be authored by this supplemental dispatch.
