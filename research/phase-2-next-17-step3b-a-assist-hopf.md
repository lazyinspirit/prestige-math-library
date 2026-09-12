# phase-2-next-17 — Step 3b group A continuation after Hopf--Rinow

Dispatch label: `step3b-a-9bf32ddcddf3addf`

Owned batch: 7

Owned files, in prerequisite order:

1. `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`
2. `ex-hopf-rinow-on-a-flat-cylinder`

This is a supplemental content handoff to group D. It is not a Step-3 gate
pass or an independent audit. No shared manifest, contract, coverage, scope,
decision, page, plan, group-D report, dependency ledger, or published item is
edited here.

## Entry condition

The required current Step-3 decision for `thm-hopf-rinow` was verified before
authoring. The direct item-hash check returned `closed: true`, decision
`repaired`, confidence `1`, with both the receipt and current transitive item
hash equal to
`995886475388da48508358819c36429ab1aad1cd8b0ca067fa241dbf06914da8`.
The receipt is
`research/phase-2-next-17-step3b-review-thm-hopf-rinow.json`, dated
2026-09-12T06:49:02.874Z.

Both owned item files and this report were absent at entry. The first item file
was confirmed absent again immediately before its creation.

## Checkpoint 1 — antipodal points on the round sphere

Item: `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`

Status: fully authored; explicit-path precheck and rendercheck pass.

Exact claim and conventions: assuming $\mathrm{AC}_\omega$, for every
$n\geq2$ and $p\in S^n$, every unit $u\in T_pS^n$ gives the unit-speed
half-great-circle
$$
\gamma_u(t)=\cos t\,p+\sin t\,u,\qquad 0\leq t\leq\pi,
$$
from $p$ to $-p$. The proof establishes $d(p,-p)=\pi$ and constructs the
distinct family
$u_m=(u_1+m u_2)/\sqrt{1+m^2}$ for $m\in\mathbb N$, so the same antipodal
endpoints have infinitely many globally minimizing geodesics. The false
uniqueness assertion is kept visible. The cases $n=0,1$, zero distance,
nonemptiness, the parameter endpoints $0,\pi/2,\pi$, and absence of an iff
claim are addressed explicitly.

Proof route: the standard atlas and induced metric make the sphere a
boundaryless Riemannian manifold, and the published sphere-connectivity result
makes it connected. The current great-circle item proves every maximal
geodesic is all-real, hence geodesic completeness. Hopf--Rinow supplies a
minimizer $\eta$ from $p$ to $-p$ of speed and length
$L=d(p,-p)>0$. Any explicit half-great-circle has length $\pi$, so
$L\leq\pi$. The great-circle formula for $\eta$ gives $\cos L=-1$; strict
decrease of cosine on $[0,\pi]$ forces $L=\pi$. The explicit $u_m$ then give
the promised distinct minimizers.

Choice: $\mathrm{AC}_\omega$ is declared through `def-countable-choice` and
is spent exactly in the Hopf--Rinow invocation. The two tangent vectors are
obtained by applying finite Gram--Schmidt to the first two vectors of one
fixed chart basis, and the family $u_m$ is explicit; those operations use no
choice principle.

Source read: Ved Datar, *Lectures on Riemannian Geometry*, Proposition 15.3.1
and complete proof, printed pp. 117--118 (PDF pp. 125--126), and Theorem
19.2.1 and complete proof, printed pp. 141--144 (PDF pp. 149--152). The first
identifies sphere geodesics as great circles; the second supplies Hopf--Rinow.
The distance comparison and infinite family are derived in the item.

Exact direct dependencies in the authored item:

- `def-countable-choice`
- `ex-the-n-sphere-with-its-standard-smooth-atlas`
- `ex-the-round-metric-on-the-sphere-as-an-induced-metric`
- `cor-euclidean-spheres-are-path-connected`
- `thm-path-connected-implies-connected`
- `thm-coordinate-derivations-form-a-basis-of-the-tangent-space`
- `thm-gram-schmidt-orthonormalisation`
- `ex-great-circles-as-round-sphere-geodesics`
- `thm-hopf-rinow`
- `thm-riemannian-distance-is-a-metric`
- `def-riemannian-speed-and-length`
- `def-riemannian-distance-on-a-connected-manifold`
- `thm-sine-cosine-signs-monotonicity-and-ranges`
- `thm-quarter-turn-values-and-shift-formulas`

Scaffold repair requiring canonical integration: the manifest strategy says
that the explicit exponential formula "shows" the entire tangent ball
$|v|<\pi$ is a normal chart and then applies
`cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood`.
The current `ex-normal-coordinates-on-the-round-sphere` proves injectivity on
that ball and describes coordinates on any supplied normal domain inside it;
it does not prove that the whole radius-$\pi$ ball maps diffeomorphically onto
an open normal neighbourhood. Thus that planned inference is unsupported.
The authored Hopf--Rinow comparison removes the gap and does not use the local
distance corollary. Group D or the serial integrator must replace the manifest
dependency row by the exact direct list above and mirror it in the canonical
dependency records.

Checks actually run after the canonical proof-phase renumbering was adopted by
hand:

- `node tools/tsx-run.mjs tools/precheck.mts items/cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics.md`
  — pass, 1 checked and 0 failing.
- `node tools/rendercheck.mjs items/cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics.md`
  — pass for 1 file, including real KaTeX and renderer YAML parsing.
- `git diff --check` was requested in the focused chain; completion of that
  chain stopped at an incorrectly invoked content-policy command, so the
  whitespace check and remaining focused policy checks are rerun below rather
  than claimed here.

Open canonical work: manifest, coverage, dependency-record and strict
item-specific proof-contract splices remain reserved to group D or the serial
integrator. No item decision was written, as this dispatch forbids changes to
shared decisions. No mathematical gap remains in the authored item.

No mathematical defect was found in a published supplier for this checkpoint.
The already reported publication-evidence metadata defect in
`thm-fundamental-theorem-of-riemannian-geometry` remains relevant through the
great-circle supplier and is included again in the final concern list below.

Next action: reread the exact flat-cylinder suppliers, then confirm the second
owned file is still absent immediately before authoring it.

## Checkpoint 2 — Hopf--Rinow on a flat cylinder

Item: `ex-hopf-rinow-on-a-flat-cylinder`

Status: fully authored. The owned file was confirmed absent immediately before
creation. Its explicit-path precheck and rendercheck pass after the final local
dependency repairs.

Exact claim and conventions: assuming $\mathrm{AC}_\omega$, the product
$$
C=(\mathbb R/\mathbb Z)\times\mathbb R
$$
with the circumference-one flat circle metric and Euclidean line metric is a
nonempty connected boundaryless two-dimensional Riemannian manifold. Every
initial vector $(a,b)$ at $P=([x],y)$ has the all-real geodesic
$$
t\longmapsto([x+ta],y+tb),
$$
so $C$ is geodesically complete and
$\exp_P(a,b)=([x+a],y+b)$. Hopf--Rinow then gives metric completeness,
properness, and minimizing joins. For
$$
k=\left\lfloor x-x'+\frac12\right\rfloor,
\quad \delta=x'-x+k,\quad \Delta y=y'-y,
$$
the item proves, including lift independence and the half-period tie,
$$
d_C(P,Q)=\sqrt{\delta^2+(\Delta y)^2}
$$
and verifies that the displayed projected segment attains this value. Finally,
$(0,0)$ and $(1,0)$ are explicit distinct tangent vectors with the same
exponential image.

Proof route: quotient charts have translation transitions and the product
metric matrix is $I_2$. The Christoffel formula and coordinate geodesic
equation therefore verify the all-real affine lifted curves directly; maximal
geodesic uniqueness identifies these with all maximal geodesics. For the
nearest lift, writing $a=x-x'=m+t$ with $m=\lfloor a\rfloor$ and
$0\leq t<1$ proves that the centered-floor convention selects displacement
$-t$ for $t<1/2$ and $1-t$ for $t\geq1/2$. The published nearest-integer
example proves this absolute displacement is no larger than the displacement
to any integer translate. A Hopf--Rinow minimizer is classified by its initial
velocity using the already proved all-geodesic formula, and comparison with the
nearest displacement proves the exact distance and minimization claims.

Choice: $\mathrm{AC}_\omega$ is declared through `def-countable-choice` and
is inherited exactly through the current maximal-geodesic,
geodesic-completeness, exponential-map, and Hopf--Rinow interfaces. The
quotient, floor, length, lift-independence, distance, and exponential-collision
calculations are explicit and choice-free. No full-AC use or incompatible
axiom branch occurs.

Source read: Ben Andrews, *Geodesics and Completeness*, Theorem 11.5.1 and
its complete proof, printed pp. 106--108 (PDF pp. 6--8). It proves the
completeness/global-geodesic equivalence and minimizing-geodesic conclusion.
It does not state the cylinder calculation; the quotient formula, nearest
translate, distance, properness specialization, and exponential witnesses are
proved locally in the item.

Exact direct dependencies in the authored item:

- `def-countable-choice`
- `def-circle-as-real-line-mod-integers`
- `ex-the-flat-torus-metric-from-periodic-euclidean-coordinates`
- `ex-the-euclidean-metric-and-its-musical-maps`
- `ex-the-product-riemannian-metric`
- `prop-real-line-mod-integers-is-compact-and-path-connected`
- `thm-path-connected-implies-connected`
- `cor-connected-subsets-of-the-line`
- `thm-product-of-connected-spaces`
- `prop-christoffel-formula-for-the-levi-civita-connection`
- `prop-coordinate-geodesic-equation`
- `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`
- `def-geodesically-complete-riemannian-manifold`
- `def-domain-and-exponential-map-of-a-connection`
- `thm-hopf-rinow`
- `lem-integer-part`
- `ex-distance-to-the-integers`
- `def-riemannian-speed-and-length`
- `def-riemannian-distance-on-a-connected-manifold`

Scaffold repairs requiring canonical integration:

1. The manifest's `ex-the-exponential-map-of-a-flat-torus-is-not-injective`
   is a full-rank lattice quotient of $\mathbb R^n$ and does not itself supply
   the rank-one cylinder quotient or its exponential formula. The authored
   item constructs and verifies the cylinder formula locally, so this scaffold
   dependency is removed.
2. `ex-straight-lines-as-euclidean-geodesics` states the global Euclidean
   space result, not the local-chart inference needed on the quotient. The
   authored proof instead cites the Christoffel formula and coordinate
   geodesic equation directly and checks the zero symbols in each lifted chart.
3. The scaffold did not supply the integer discreteness needed by a bare
   nearest-translate comparison. The repaired floor split cites
   `ex-distance-to-the-integers`, which proves attainment and the exact
   $\min\{t,1-t\}$ formula, and handles the $t=1/2$ tie explicitly.

No local supplier was added. No promised result, pair, item ID, or page order
was changed. Manifest, coverage, dependency records, page integration, scope,
decision, and canonical proof-contract work remain reserved to group D or the
serial integrator.

Potentially defective published supplier observed: confirmed metadata defect,
not a mathematical defect, in
`prop-christoffel-formula-for-the-levi-civita-connection` on page
`connections-levi-civita-and-parallel-transport`. Its frontmatter says
`status: published` and `provenance.proof: ai-altered` but has only a judge
record, with no `verification.audited` or `verification.verified`; SCHEMA.md
lines 134--135 require one of those owner records for a published proved-here
item and say a judge stamp alone is insufficient. Confidence: 1 for the
metadata defect; no content defect was found in the formula or proof. Required
supplier: none. Repair strategy: an owner must perform or identify the missing
audit and add the authorized audit/verification record; this dispatch does not
edit published content or the published-consumer-supplier ledger. This debt
does not invalidate the proposition's checked mathematical statement or block
the sound new consumer.

The same confirmed metadata-only defect persists in
`thm-fundamental-theorem-of-riemannian-geometry` on that A page: it is a
published proved-here theorem with `provenance.proof: ai-altered` and only a
judge record, but no `verification.audited` or `verification.verified`. It is
used inside the current great-circle supplier and was already reported in
`research/phase-2-next-17-step3b-a-assist-d.md`. Confidence: 1 for the
frontmatter defect; its completed argument was read and no mathematical defect
was found. Required supplier: none. Repair strategy: owner audit or authorized
verification metadata, without changing the theorem's claim or proof unless
that audit independently finds a content problem.

Next action: run the focused content-policy, strict proof-contract, canonical
pre-splice, plan, dependency, and whitespace checks; then append the tested
contract payload and complete handoff.

## Tested proof-contract payload

The following standalone payload was generated from the final item text, the
current exact source sections, and the boundary evidence recorded above. It
passed `proof-contract.mjs --strict` for both owned IDs with zero errors and
zero warnings. The serial integrator should merge the two entries into the
existing version-1 canonical contract rather than replace its wider scope.

```json
{
  "version": 1,
  "scope": [
    "cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics",
    "ex-hopf-rinow-on-a-flat-cylinder"
  ],
  "contracts": {
    "cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics": {
      "citations": [
        {
          "fact": "A1",
          "source": "def-countable-choice",
          "source_section": "Definition",
          "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
          "uses": [
            "1.1",
            "4.1"
          ]
        },
        {
          "fact": "A1",
          "source": "thm-hopf-rinow",
          "source_section": "Statement",
          "quote": "Assume $\\mathrm{AC}_\\omega$. Let $(M,g)$ be a **nonempty**, connected,\nboundaryless Riemannian manifold, and let $d=d_g$ be its Riemannian distance.\nThe following conditions are equivalent.\n\n1. The metric space $(M,d)$ is complete.\n2. The Riemannian manifold $(M,g)$ is geodesically complete.\n3. For every $p\\in M$, the fibre exponential domain is all of the tangent\n   space: $\\mathcal E_p=T_pM$.\n4. There is a point $p_0\\in M$ for which $\\mathcal E_{p_0}=T_{p_0}M$.\n5. Every closed bounded subset of the metric space $(M,d)$ is compact.\n\nWhenever these conditions hold, every $x,y\\in M$ are joined by a minimizing\ngeodesic. More exactly, there is $v\\in T_xM$ with\n$$\n\\exp_x(v)=y,\\qquad |v|_{g_x}=d(x,y),\n$$\nand $t\\mapsto\\exp_x(tv)$ on $[0,1]$ has length $d(x,y)$.\n\nThe nonemptiness hypothesis is essential for this formulation: on the empty\nmanifold conditions 1--3 and 5 are vacuous, whereas condition 4 is false.",
          "uses": [
            "1.1",
            "4.1"
          ]
        },
        {
          "fact": "F1",
          "source": "ex-the-n-sphere-with-its-standard-smooth-atlas",
          "source_section": "Example",
          "quote": "For $n\\ge1$, let\n\n$$S^n:=\\{(x_1,\\dots,x_{n+1})\\in\\mathbb R^{n+1}:x_1^2+\\cdots+x_{n+1}^2=1\\}.$$\n\nWith north and south poles $N=(0,\\dots,0,1)$ and $S=(0,\\dots,0,-1)$, the\nstereographic charts\n\n$$\\sigma_N(x)=\\frac{(x_1,\\dots,x_n)}{1-x_{n+1}},\\qquad \\sigma_S(x)=\\frac{(x_1,\\dots,x_n)}{1+x_{n+1}}$$\n\ndefine a smooth atlas on $S^n$. Their overlap transition is\n$u\\mapsto u/\\|u\\|^2$ on $\\mathbb R^n\\setminus\\{0\\}$.",
          "uses": [
            "1.1"
          ]
        },
        {
          "fact": "F1",
          "source": "ex-the-round-metric-on-the-sphere-as-an-induced-metric",
          "source_section": "Example",
          "quote": "The Euclidean inclusion of $S^n$ induces its round metric. In spherical coordinates on $S^2$, $g=d\\theta^2+\\sin^2\\theta\\,d\\varphi^2$.",
          "uses": [
            "1.1"
          ]
        },
        {
          "fact": "F1",
          "source": "cor-euclidean-spheres-are-path-connected",
          "source_section": "Statement",
          "quote": "For $n\\ge2$, the unit sphere $S^{n-1}\\subseteq\\mathbb R^n$ is path-connected and connected.",
          "uses": [
            "1.1"
          ]
        },
        {
          "fact": "F1",
          "source": "thm-path-connected-implies-connected",
          "source_section": "Statement",
          "quote": "Let $X$ be a topological space, with subsets carrying the subspace topology\n([[def-subspace-topology-top]]). Then:\n\n1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of\n   $\\mathbb{R}$, hence a connected space.\n2. **Path-connected implies connected.** If $X$ is path-connected\n   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The\n   same holds for a subset: a path-connected subset of $X$ is a connected subset\n   of $X$.\n3. **Path components refine components.** For every $x \\in X$,\n   $$P(x) \\;\\subseteq\\; C(x),$$\n   the path component inside the component\n   ([[def-connected-component-and-quasicomponent]]). So every component is a\n   union of path components.\n\n**No converse is claimed.** Claim 2 is one-directional and claim 3 is an\ninclusion; the question of when a connected space is path-connected is not\nsettled here.\n\n**No choice principle is used.** The proof takes the union over the **set of all**\npaths issuing from a fixed point rather than selecting one path per endpoint,\nwhich is what an appeal to the Axiom of Choice would be. The point at which the\ntemptation arises is flagged in the remarks.",
          "uses": [
            "1.1"
          ]
        },
        {
          "fact": "F2",
          "source": "thm-coordinate-derivations-form-a-basis-of-the-tangent-space",
          "source_section": "Statement",
          "quote": "If $(U,x)$ is a smooth chart on an $n$-manifold $M$ with $p\\in U$, then the coordinate derivations $\\partial_1|_p,\\dots,\\partial_n|_p$ form a basis of $T_pM$.",
          "uses": [
            "1.2",
            "1.3",
            "4.1"
          ]
        },
        {
          "fact": "F2",
          "source": "thm-gram-schmidt-orthonormalisation",
          "source_section": "Statement",
          "quote": "Let $(v_0,\\ldots,v_{r-1})$ be a finite linearly independent list in a real or complex inner product space. There is an orthonormal list $(e_0,\\ldots,e_{r-1})$ such that, for every $k\\le r$,\n\n$$\\operatorname{span}(e_0,\\ldots,e_{k-1})=\\operatorname{span}(v_0,\\ldots,v_{k-1}).$$\n\nIt is obtained recursively from\n\n$$u_k=v_k-\\sum_{j<k}\\langle v_k,e_j\\rangle e_j,\\qquad e_k=\\frac{u_k}{\\lVert u_k\\rVert}.$$\n\nFor $r=0$, both lists are empty.",
          "uses": [
            "1.2",
            "1.3",
            "4.1"
          ]
        },
        {
          "fact": "F3",
          "source": "ex-great-circles-as-round-sphere-geodesics",
          "source_section": "Example",
          "quote": "Let $n\\geq1$, and give\n$$S^n=\\{x\\in\\mathbb R^{n+1}:\\langle x,x\\rangle=1\\}$$\nthe round metric induced by the Euclidean inner product. Let $I\\subseteq\\mathbb R$ be an interval with nonempty interior. For any supplied $t_0\\in I$, a nonconstant affinely parametrized geodesic $\\gamma:I\\to S^n$ has constant speed $c>0$ and can be written\n$$\\gamma(t)=\\cos(c(t-t_0))p+\\sin(c(t-t_0))u,$$\nwhere $p=\\gamma(t_0)$ and $u=\\gamma'(t_0)/c$ are orthonormal. Its image is therefore an arc of the great circle $S^n\\cap\\operatorname{span}\\{p,u\\}$; the corresponding maximal geodesic has the whole great circle as its image. Conversely, every such constant-speed parametrization of a great circle is a geodesic. Constant geodesics are obtained separately by taking $\\gamma(t)=p$.",
          "uses": [
            "1.1",
            "1.2",
            "2.1"
          ]
        },
        {
          "fact": "F4",
          "source": "thm-hopf-rinow",
          "source_section": "Statement",
          "quote": "Assume $\\mathrm{AC}_\\omega$. Let $(M,g)$ be a **nonempty**, connected,\nboundaryless Riemannian manifold, and let $d=d_g$ be its Riemannian distance.\nThe following conditions are equivalent.\n\n1. The metric space $(M,d)$ is complete.\n2. The Riemannian manifold $(M,g)$ is geodesically complete.\n3. For every $p\\in M$, the fibre exponential domain is all of the tangent\n   space: $\\mathcal E_p=T_pM$.\n4. There is a point $p_0\\in M$ for which $\\mathcal E_{p_0}=T_{p_0}M$.\n5. Every closed bounded subset of the metric space $(M,d)$ is compact.\n\nWhenever these conditions hold, every $x,y\\in M$ are joined by a minimizing\ngeodesic. More exactly, there is $v\\in T_xM$ with\n$$\n\\exp_x(v)=y,\\qquad |v|_{g_x}=d(x,y),\n$$\nand $t\\mapsto\\exp_x(tv)$ on $[0,1]$ has length $d(x,y)$.\n\nThe nonemptiness hypothesis is essential for this formulation: on the empty\nmanifold conditions 1--3 and 5 are vacuous, whereas condition 4 is false.",
          "uses": [
            "1.1",
            "4.1"
          ]
        },
        {
          "fact": "F4",
          "source": "thm-riemannian-distance-is-a-metric",
          "source_section": "Statement",
          "quote": "$d_g$ is a finite metric on a connected Riemannian manifold.",
          "uses": [
            "1.1",
            "4.1"
          ]
        },
        {
          "fact": "F5",
          "source": "def-riemannian-speed-and-length",
          "source_section": "Definition",
          "quote": "The **Riemannian speed** on a $C^1$ piece is $|\\dot\\gamma(t)|_g=\\sqrt{g_{\\gamma(t)}(\\dot\\gamma(t),\\dot\\gamma(t))}$. Its **length** is $L_g(\\gamma)=\\sum_j\\int_{t_{j-1}}^{t_j}|\\dot\\gamma(t)|_g\\,dt$.\n\nThe curve convention is [[def-piecewise-c-one-curve-on-a-manifold]] and the norm is [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]. Each integrand is continuous on its closed piece with the one-sided endpoint derivative, hence Riemann integrable and nonnegative. Values chosen at the finitely many corners do not change its integral. For a singleton interval the empty sum is zero; a constant curve also has zero length. Partition independence is established by [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]].",
          "uses": [
            "1.2",
            "2.1",
            "3.1",
            "4.1"
          ]
        },
        {
          "fact": "F5",
          "source": "def-riemannian-distance-on-a-connected-manifold",
          "source_section": "Definition",
          "quote": "On a connected Riemannian manifold define $d_g(p,q)=\\inf\\{L_g(\\gamma):\\gamma\\text{ is piecewise }C^1\\text{ from }p\\text{ to }q\\}$.\n\nLengths are those of [[def-riemannian-speed-and-length]]. For each pair $p,q$, [[lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve]] supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property [[cor-cauchy-reals-lub-complete]] to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.",
          "uses": [
            "1.2",
            "2.1",
            "3.1",
            "4.1"
          ]
        },
        {
          "fact": "F5",
          "source": "thm-sine-cosine-signs-monotonicity-and-ranges",
          "source_section": "Statement",
          "quote": "Sine is strictly increasing on each interval $[-\\pi/2+2m\\pi,\\pi/2+2m\\pi]$ and strictly decreasing on each interval $[\\pi/2+2m\\pi,3\\pi/2+2m\\pi]$. Cosine is strictly decreasing on $[2m\\pi,(2m+1)\\pi]$ and strictly increasing on $[(2m+1)\\pi,(2m+2)\\pi]$. Both functions have range $[-1,1]$.",
          "uses": [
            "1.2",
            "2.1",
            "3.1",
            "4.1"
          ]
        },
        {
          "fact": "F5",
          "source": "thm-quarter-turn-values-and-shift-formulas",
          "source_section": "Statement",
          "quote": "For every real $x$,\n$$\\sin(x+\\pi/2)=\\cos x,\\quad\\cos(x+\\pi/2)=-\\sin x,\\quad\\sin(x+\\pi)=-\\sin x,\\quad\\cos(x+\\pi)=-\\cos x.$$\nIn particular,\n$$\\sin(\\pi/2)=1,\\quad\\cos(\\pi/2)=0,\\quad\\sin\\pi=0,\\quad\\cos\\pi=-1.$$",
          "uses": [
            "1.2",
            "2.1",
            "3.1",
            "4.1"
          ]
        }
      ],
      "derivations": [
        {
          "id": "step-1-1",
          "claim": "The point $p$ is not equal to $-p$: equality would give $p=0$, contrary to $|p|=1$. By [F1] and [F3], the round sphere satisfies all the geometric hypotheses of [F4]. Hence [F4], under [A1], supplies a minimizing geodesic $\\eta:[0,1]\\to S^n$ from $p$ to $-p$ with constant speed $$ L=d(p,-p)>0 $$ and length $L$.",
          "step": "1.1",
          "inputs": [
            "A1",
            "F1",
            "F3",
            "F4"
          ]
        },
        {
          "id": "step-1-2",
          "claim": "Fix any unit $u\\in T_pS^n$; such a vector exists because [F2] supplies $u_1$. By [F3] and [F5], $\\gamma_u$ is a geodesic from $$ \\gamma_u(0)=p\\quad\\hbox{to}\\quad \\gamma_u(\\pi)=-p $$ of length $\\pi$. Therefore the definition of Riemannian distance gives $L=d(p,-p)\\leq\\pi$. The calculation applies to every unit $u$.",
          "step": "1.2",
          "inputs": [
            "F2",
            "F3",
            "F5"
          ]
        },
        {
          "id": "step-1-3",
          "claim": "For each $m\\in\\mathbb N$, define $$ u_m=\\frac{u_1+m u_2}{\\sqrt{1+m^2}}. $$ Orthonormality gives $|u_m|=1$. If $u_m=u_k$, comparison of the nonzero $u_1$ coefficients and then of the ratios of the $u_2$ and $u_1$ coefficients gives $m=k$. Hence $(u_m)_{m\\in\\mathbb N}$ is an infinite family of distinct unit tangent vectors. This construction uses the two fixed vectors from [F2], not a choice of a vector from each member of a family.",
          "step": "1.3",
          "inputs": [
            "F2",
            "algebra"
          ]
        },
        {
          "id": "step-2-1",
          "claim": "Apply the explicit great-circle formula [F3] to the nonconstant geodesic $\\eta$, based at $t=0$. Its speed is $L$, so there is a unit $w\\in T_pS^n$ such that $$ \\eta(t)=\\cos(Lt)p+\\sin(Lt)w. $$ Taking the Euclidean inner product of the endpoint equality $-p=\\eta(1)$ with $p$, and using $w\\perp p$, gives $\\cos L=-1$. Steps 1.1--1.2 put $L$ in $(0,\\pi]$. Cosine is strictly decreasing on $[0,\\pi]$ and $\\cos\\pi=-1$ by [F5], so $L=\\pi$. Thus $$ d(p,-p)=\\pi. $$",
          "step": "2.1",
          "inputs": [
            "F3",
            "F5",
            "step 1.1",
            "step 1.2"
          ]
        },
        {
          "id": "step-3-1",
          "claim": "Since the unit vector in step 1.2 was arbitrary, steps 1.2 and 2.1 show that every $\\gamma_u$ has length $\\pi=d(p,-p)$ and is globally minimizing. In particular this holds for every $u_m$. Moreover [F5] gives $$ \\gamma_{u_m}(\\pi/2)=u_m. $$ The distinctness in step 1.3 therefore makes these curves distinct. This is an explicit infinite collection of minimizing half-great-circles with the same two endpoints and proves the claimed failure of uniqueness.",
          "step": "3.1",
          "inputs": [
            "F5",
            "step 1.2",
            "step 2.1",
            "step 1.3"
          ]
        },
        {
          "id": "step-4-1",
          "claim": "The lower-dimensional cases $n=0,1$ lie outside the quantified claim: the construction of an infinite family in step 1.3 specifically requires the two orthonormal tangent directions that [F2] obtains from $n\\geq2$. The zero-distance case cannot occur because $p\\ne-p$ and the Riemannian distance is a metric; the parameter endpoints $0,\\pi/2,\\pi$ were evaluated explicitly. No empty-manifold case arises because $p$ is given, and there is no iff assertion. Assumption [A1] is spent exactly in step 1.1 through Hopf--Rinow and nowhere in the explicit family.",
          "step": "4.1",
          "inputs": [
            "A1",
            "F2",
            "F4",
            "F5",
            "step 1.1",
            "step 1.3",
            "step 3.1"
          ]
        }
      ],
      "routine_steps": [],
      "boundaries": [
        {
          "case": "empty",
          "status": "checked",
          "evidence": "Step 4.1 notes that a supplied point p makes the sphere nonempty."
        },
        {
          "case": "zero",
          "status": "checked",
          "evidence": "Steps 1.1 and 4.1 use p != -p and metric separation to exclude zero endpoint distance."
        },
        {
          "case": "one",
          "status": "checked",
          "evidence": "Step 4.1 explains why n=1 is outside the n>=2 claim and why the construction needs two tangent directions."
        },
        {
          "case": "degenerate",
          "status": "checked",
          "evidence": "Steps 1.1-1.2 separate the nonconstant antipodal minimizer from constant geodesics."
        },
        {
          "case": "endpoints",
          "status": "checked",
          "evidence": "Steps 1.2, 3.1, and 4.1 evaluate t=0, pi/2, and pi explicitly."
        },
        {
          "case": "nonempty-choice",
          "status": "checked",
          "evidence": "Steps 1.3 and 4.1 give an explicit countable family and identify AC_omega only in Hopf-Rinow."
        },
        {
          "case": "iff-forward",
          "status": "not_applicable",
          "reason": "The item refutes uniqueness by witnesses and asserts no equivalence."
        },
        {
          "case": "iff-reverse",
          "status": "not_applicable",
          "reason": "The item refutes uniqueness by witnesses and asserts no equivalence."
        }
      ]
    },
    "ex-hopf-rinow-on-a-flat-cylinder": {
      "citations": [
        {
          "fact": "A1",
          "source": "def-countable-choice",
          "source_section": "Definition",
          "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
          "uses": [
            "2.1",
            "3.1",
            "4.1",
            "5.1"
          ]
        },
        {
          "fact": "F1",
          "source": "def-circle-as-real-line-mod-integers",
          "source_section": "Definition",
          "quote": "Use the canonical copy of $\\mathbb Z$ inside $\\mathbb R$ fixed in\n[[lem-integer-part]]. For $x,y\\in\\mathbb R$, put\n\n$$x\\sim y\\quad\\Longleftrightarrow\\quad x-y\\in\\mathbb Z.$$\n\nThis is an equivalence relation. Indeed, $x-x=0\\in\\mathbb Z$; if\n$x-y\\in\\mathbb Z$, then $y-x=-(x-y)\\in\\mathbb Z$; and if\n$x-y,y-z\\in\\mathbb Z$, then $x-z=(x-y)+(y-z)\\in\\mathbb Z$. The closure facts\nused here are part of the additive-group structure supplied by\n[[thm-int-comm-ring]], and the quotient-set construction is that of\n[[def-quotient-topology]].\n\nLet $[x]$ denote the equivalence class of $x$. Let\n$p:\\mathbb R\\to\\mathbb R/\\mathbb Z$ be the canonical projection,\n$p(x)=[x]$. Thus\n\n$$p(x)=p(y)\\quad\\Longleftrightarrow\\quad x-y\\in\\mathbb Z.$$\n\nLet $\\mathbb R/\\mathbb Z$ carry the quotient topology induced by $p$.\nThe circle is $S^1:=\\mathbb R/\\mathbb Z$ with the quotient topology induced by $p(x)=[x]$ and basepoint $[0]$; moreover $p^{-1}([0])=\\mathbb Z$ and $p(x+n)=p(x)$ for every real $x$ and integer $n$.\n\nThe last assertions follow directly from the displayed fibre criterion:\n$p(x)=[0]$ exactly when $x\\in\\mathbb Z$, while\n$(x+n)-x=n\\in\\mathbb Z$.",
          "uses": [
            "1.1",
            "2.1",
            "3.2",
            "3.3",
            "4.1",
            "5.1"
          ]
        },
        {
          "fact": "F1",
          "source": "ex-the-flat-torus-metric-from-periodic-euclidean-coordinates",
          "source_section": "Example",
          "quote": "The periodic Euclidean coordinates on $\\mathbb R^n/\\mathbb Z^n=(\\mathbb R/\\mathbb Z)^n$ define a metric locally equal to $\\sum_i dx_i^2$, called the flat torus metric.",
          "uses": [
            "1.1",
            "2.1",
            "3.2",
            "3.3",
            "4.1",
            "5.1"
          ]
        },
        {
          "fact": "F2",
          "source": "ex-the-euclidean-metric-and-its-musical-maps",
          "source_section": "Example",
          "quote": "On Euclidean $\\mathbb R^n$, $v^\\flat=\\sum_i v^i dx^i$, $\\alpha^\\sharp=\\sum_i\\alpha_i\\partial_i$, and $\\operatorname{grad}f=\\sum_i(\\partial_i f)\\partial_i$.",
          "uses": [
            "1.1",
            "3.2",
            "4.1"
          ]
        },
        {
          "fact": "F2",
          "source": "ex-the-product-riemannian-metric",
          "source_section": "Example",
          "quote": "The product metric on $(M,g)\\times(N,h)$ is $\\pi_M^*g+\\pi_N^*h$, with block matrix $\\operatorname{diag}(G,H)$.",
          "uses": [
            "1.1",
            "3.2",
            "4.1"
          ]
        },
        {
          "fact": "F3",
          "source": "prop-real-line-mod-integers-is-compact-and-path-connected",
          "source_section": "Statement",
          "quote": "$\\mathbb R/\\mathbb Z$ is compact and path-connected.",
          "uses": [
            "1.2"
          ]
        },
        {
          "fact": "F3",
          "source": "thm-path-connected-implies-connected",
          "source_section": "Statement",
          "quote": "Let $X$ be a topological space, with subsets carrying the subspace topology\n([[def-subspace-topology-top]]). Then:\n\n1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of\n   $\\mathbb{R}$, hence a connected space.\n2. **Path-connected implies connected.** If $X$ is path-connected\n   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The\n   same holds for a subset: a path-connected subset of $X$ is a connected subset\n   of $X$.\n3. **Path components refine components.** For every $x \\in X$,\n   $$P(x) \\;\\subseteq\\; C(x),$$\n   the path component inside the component\n   ([[def-connected-component-and-quasicomponent]]). So every component is a\n   union of path components.\n\n**No converse is claimed.** Claim 2 is one-directional and claim 3 is an\ninclusion; the question of when a connected space is path-connected is not\nsettled here.\n\n**No choice principle is used.** The proof takes the union over the **set of all**\npaths issuing from a fixed point rather than selecting one path per endpoint,\nwhich is what an appeal to the Axiom of Choice would be. The point at which the\ntemptation arises is flagged in the remarks.",
          "uses": [
            "1.2"
          ]
        },
        {
          "fact": "F3",
          "source": "cor-connected-subsets-of-the-line",
          "source_section": "Statement",
          "quote": "Give $\\mathbb{R}$ its usual topology, the metric topology of\n$d_{\\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],\n[[def-metric-topology]], [[def-metrizable-space]]), and let $E \\subseteq\n\\mathbb{R}$ carry the subspace topology ([[def-subspace-topology-top]]). Then $E$\nis a connected subset of $\\mathbb{R}$ ([[def-connected-space]]) if and only if\n$E$ is **order-convex** ([[def-interval]],\n[[def-order-topology-on-a-linearly-ordered-set]]), that is\n\n$$x, z \\in E \\text{ and } x \\le w \\le z \\;\\Longrightarrow\\; w \\in E .$$\n\nIn particular each of the nine interval forms of [[def-interval]] is connected,\nand so are $\\varnothing$ and every singleton.\n\n**What has to be checked, and it is not the mathematics.** The characterisation\nitself is the published [[thm-connected-subsets-of-r-are-intervals]], which is\nstated for the connectedness of [[def-connected-r]] — a condition phrased with\nthe open sets of [[def-open-and-closed-in-r]] and the closure of\n[[def-interior-closure-boundary-r]]. The present corollary says the same thing\nfor the connectedness of [[def-connected-space]] in the topological space\n$\\mathbb{R}$. What licenses the transport is that the two descriptions of \"open\nin $\\mathbb{R}$\" are the same condition word for word, which is unfolded in the\nproof rather than quoted.",
          "uses": [
            "1.2"
          ]
        },
        {
          "fact": "F3",
          "source": "thm-product-of-connected-spaces",
          "source_section": "Statement",
          "quote": "Let $I$ be a set, let $(X_i, \\mathcal{T}_i)$ be a connected topological space\n([[def-connected-space]]) for each $i \\in I$, and give\n$P := \\prod_{i \\in I} X_i$ the product topology ([[def-product-topology]]). Then\n$P$ is connected.\n\n**The choice cost, stated exactly.** The proof needs one point $a \\in P$ and\nnothing else, and it obtains it as follows.\n\n- If $P = \\varnothing$ then $P$ is connected outright, no separation of the empty\n  space existing, and no choice principle is involved.\n- If $P \\ne \\varnothing$ a point $a \\in P$ is fixed. Selecting one element of one\n  nonempty set is not a choice principle.\n\nSo the theorem **as displayed is a theorem of ZF**. What costs something is the\ncompanion assertion that $P$ is nonempty when every $X_i$ is: for $I$ a natural\nnumber that is [[lem-finite-choice]], a theorem of ZF, and for an arbitrary $I$\nit **is** the Axiom of Choice ([[def-axiom-of-choice]], [[def-choice-function]]),\nas [[def-product-topology]] records. A reader who wants \"the product of nonempty\nconnected spaces is a nonempty connected space\" for infinite $I$ is therefore\nusing $\\mathrm{AC}$, and that is where the cost sits — not in the connectedness\nargument.",
          "uses": [
            "1.2"
          ]
        },
        {
          "fact": "F4",
          "source": "prop-christoffel-formula-for-the-levi-civita-connection",
          "source_section": "Statement",
          "quote": "In coordinates for a Riemannian metric with matrix $(g_{ij})$ and inverse $(g^{ij})$, its Levi–Civita symbols are\n$$\\Gamma^k{}_{ij}=\\tfrac12\\sum_\\ell g^{k\\ell}(\\partial_i g_{j\\ell}+\\partial_j g_{i\\ell}-\\partial_\\ell g_{ij}).$$",
          "uses": [
            "2.1",
            "5.1"
          ]
        },
        {
          "fact": "F4",
          "source": "prop-coordinate-geodesic-equation",
          "source_section": "Statement",
          "quote": "In coordinates $x^1,\\ldots,x^n$, a smooth curve $\\gamma$ is a geodesic if and only if, throughout every parameter subinterval lying in the chart,\n$$\\ddot x^k+\\Gamma^k{}_{ij}(x)\\dot x^i\\dot x^j=0\\qquad(1\\le k\\le n),$$\nwith summation over repeated indices.",
          "uses": [
            "2.1",
            "5.1"
          ]
        },
        {
          "fact": "F4",
          "source": "thm-existence-uniqueness-and-smooth-dependence-of-geodesics",
          "source_section": "Statement",
          "quote": "Assume $\\mathrm{AC}_\\omega$. For every $(p,v)\\in TM$ there is a unique maximal geodesic $\\gamma_{p,v}:I_{p,v}\\to M$ with $\\gamma_{p,v}(0)=p$ and $\\gamma'_{p,v}(0)=v$. Each $I_{p,v}$ is an open interval containing zero, the domain\n$$\\mathcal G=\\{(t,p,v):t\\in I_{p,v}\\}\\subseteq\\mathbb R\\times TM$$\nis open, and $(t,p,v)\\mapsto\\gamma_{p,v}(t)$ is smooth on $\\mathcal G$.",
          "uses": [
            "2.1",
            "5.1"
          ]
        },
        {
          "fact": "F4",
          "source": "def-geodesically-complete-riemannian-manifold",
          "source_section": "Definition",
          "quote": "Assume $\\mathrm{AC}_\\omega$. A Riemannian manifold without boundary is **geodesically complete** when, for every initial vector $v\\in T_pM$, the unique maximal geodesic has domain\n$$I_{p,v}=\\mathbb R.$$\nFor a disconnected manifold this condition is componentwise. The zero initial vector is included.",
          "uses": [
            "2.1",
            "5.1"
          ]
        },
        {
          "fact": "F4",
          "source": "def-domain-and-exponential-map-of-a-connection",
          "source_section": "Definition",
          "quote": "Assume $\\mathrm{AC}_\\omega$. Let $M$ be a smooth manifold without boundary with an affine connection. For $v\\in T_pM$, let $\\gamma_{p,v}:I_{p,v}\\to M$ be its unique maximal geodesic. The **domain of the exponential map** is\n$$\\mathcal E=\\{v\\in TM:1\\in I_{p,v}\\text{ for }p=\\pi(v)\\}.$$\nThe **exponential map** and its fibrewise restrictions are\n$$\\exp:\\mathcal E\\longrightarrow M,\\qquad \\exp(v)=\\gamma_{p,v}(1),\\qquad \\exp_p=\\exp|_{\\mathcal E_p}:\\mathcal E_p\\longrightarrow M,$$\nwhere $\\mathcal E_p=\\mathcal E\\cap T_pM$.",
          "uses": [
            "2.1",
            "5.1"
          ]
        },
        {
          "fact": "F5",
          "source": "thm-hopf-rinow",
          "source_section": "Statement",
          "quote": "Assume $\\mathrm{AC}_\\omega$. Let $(M,g)$ be a **nonempty**, connected,\nboundaryless Riemannian manifold, and let $d=d_g$ be its Riemannian distance.\nThe following conditions are equivalent.\n\n1. The metric space $(M,d)$ is complete.\n2. The Riemannian manifold $(M,g)$ is geodesically complete.\n3. For every $p\\in M$, the fibre exponential domain is all of the tangent\n   space: $\\mathcal E_p=T_pM$.\n4. There is a point $p_0\\in M$ for which $\\mathcal E_{p_0}=T_{p_0}M$.\n5. Every closed bounded subset of the metric space $(M,d)$ is compact.\n\nWhenever these conditions hold, every $x,y\\in M$ are joined by a minimizing\ngeodesic. More exactly, there is $v\\in T_xM$ with\n$$\n\\exp_x(v)=y,\\qquad |v|_{g_x}=d(x,y),\n$$\nand $t\\mapsto\\exp_x(tv)$ on $[0,1]$ has length $d(x,y)$.\n\nThe nonemptiness hypothesis is essential for this formulation: on the empty\nmanifold conditions 1--3 and 5 are vacuous, whereas condition 4 is false.",
          "uses": [
            "3.1",
            "5.1"
          ]
        },
        {
          "fact": "F6",
          "source": "lem-integer-part",
          "source_section": "Statement",
          "quote": "Identify $\\mathbb{Z}$ with its canonical copy inside $\\mathbb{R}$, along the\nembeddings $\\mathbb{N} \\to \\mathbb{Z} \\to \\mathbb{Q} \\to \\mathbb{R}$\n([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]],\n[[def-integers]]). Then for every real $x$ there is **exactly one** integer $m$\nwith\n\n$$m \\;\\le\\; x \\;<\\; m + 1 .$$\n\nIt is written $\\lfloor x \\rfloor$ and called the **integer part**, or **floor**,\nof $x$.\n\n**Two independent ingredients are needed and neither may be dropped.** Existence\nis the Archimedean property ([[thm-of-archimedean]]) together with the\nwell-ordering of $\\mathbb{N}$ ([[thm-well-ordering-principle]]): the first says\nthat $x$ is caught between two integers at all, the second picks the *least*\ninteger above $x$. Uniqueness is the discreteness of $\\mathbb{Z}$: no integer\nlies strictly between $m$ and $m+1$.\n\nThis lemma is stated once here and reused. It is what turns \"the nearest integer\nto $x$\" from a picture into an object, and the companion page's oscillator\n$\\psi(x) = \\inf_{n \\in \\mathbb{Z}} |x - n|$ is computed from it in one line.",
          "uses": [
            "1.3",
            "5.1"
          ]
        },
        {
          "fact": "F6",
          "source": "ex-distance-to-the-integers",
          "source_section": "Example",
          "quote": "Identify $\\mathbb{Z}$ with its canonical copy in $\\mathbb{R}$\n([[def-integers]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]) and for\n$x \\in \\mathbb{R}$ put\n\n$$D(x) \\;:=\\; \\{\\, |x - n| \\ : \\ n \\in \\mathbb{Z} \\,\\}, \\qquad \\psi(x) \\;:=\\; \\inf D(x)$$\n\n([[def-infimum]]). Write $m := \\lfloor x \\rfloor$ for the integer part of $x$\n([[lem-integer-part]]) and $t := x - m$, so $0 \\le t < 1$. Then:\n\n1. **Existence and attainment.** $\\psi(x)$ exists and is **attained**:\n   $$\\psi(x) \\;=\\; \\min\\{\\, t,\\ 1 - t \\,\\} \\;=\\; \\min\\bigl\\{\\, |x - m|,\\ |x - (m+1)| \\,\\bigr\\} ,$$\n   so $\\psi(x) = |x - n|$ for $n = m$ or $n = m + 1$, and $\\psi(x) = \\min D(x)$\n   ([[def-max-min]]).\n2. **Range.** $0 \\le \\psi(x) \\le 1/2$ for every real $x$, and every value in\n   $[0, 1/2]$ occurs: the range of $\\psi$ is exactly the interval $[0, 1/2]$\n   ([[def-interval]]).\n3. **Zero set.** $\\psi(x) = 0$ if and only if $x \\in \\mathbb{Z}$.\n4. **Half-integers.** $\\psi(m + 1/2) = 1/2$ for every $m \\in \\mathbb{Z}$.\n5. **Periodicity.** $\\psi(x + 1) = \\psi(x)$ for every real $x$.\n\n**What this function is for.** It is the elementary, trigonometry-free\nsubstitute for $\\sin$: it is bounded, it oscillates, and on every punctured\nneighbourhood of $0$ the composite $\\psi(1/x)$ attains both the value $0$ and the\nvalue $1/2$. Claims 3 and 4 are exactly what the companion counterexample\n[[cex-psi-of-one-over-x-has-no-limit-at-zero]] evaluates, and claim 2 is what the\nsqueeze argument of [[ex-x-times-psi-tends-to-zero]] uses.",
          "uses": [
            "1.3",
            "5.1"
          ]
        },
        {
          "fact": "F7",
          "source": "def-riemannian-speed-and-length",
          "source_section": "Definition",
          "quote": "The **Riemannian speed** on a $C^1$ piece is $|\\dot\\gamma(t)|_g=\\sqrt{g_{\\gamma(t)}(\\dot\\gamma(t),\\dot\\gamma(t))}$. Its **length** is $L_g(\\gamma)=\\sum_j\\int_{t_{j-1}}^{t_j}|\\dot\\gamma(t)|_g\\,dt$.\n\nThe curve convention is [[def-piecewise-c-one-curve-on-a-manifold]] and the norm is [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]. Each integrand is continuous on its closed piece with the one-sided endpoint derivative, hence Riemann integrable and nonnegative. Values chosen at the finitely many corners do not change its integral. For a singleton interval the empty sum is zero; a constant curve also has zero length. Partition independence is established by [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]].",
          "uses": [
            "3.2",
            "4.1"
          ]
        },
        {
          "fact": "F7",
          "source": "def-riemannian-distance-on-a-connected-manifold",
          "source_section": "Definition",
          "quote": "On a connected Riemannian manifold define $d_g(p,q)=\\inf\\{L_g(\\gamma):\\gamma\\text{ is piecewise }C^1\\text{ from }p\\text{ to }q\\}$.\n\nLengths are those of [[def-riemannian-speed-and-length]]. For each pair $p,q$, [[lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve]] supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property [[cor-cauchy-reals-lub-complete]] to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.",
          "uses": [
            "3.2",
            "4.1"
          ]
        }
      ],
      "derivations": [
        {
          "id": "step-1-1",
          "claim": "By [F1] the circle has lifted charts onto open intervals in $\\mathbb R$, and [F2] makes their products with real intervals smooth charts for $C$ whose metric matrix is $I_2$. These charts have no half-space boundary, so $C$ is a boundaryless two-dimensional Riemannian manifold. It is nonempty, containing $([0],0)$. Replacing a lift $x$ by $x+m$, $m\\in\\mathbb Z$, changes a lifted coordinate by a translation with identity derivative, so the tangent coordinates $(a,b)$ used in the statement are well-defined.",
          "step": "1.1",
          "inputs": [
            "F1",
            "F2"
          ]
        },
        {
          "id": "step-1-2",
          "claim": "The cylinder is connected by [F3].",
          "step": "1.2",
          "inputs": [
            "F3"
          ]
        },
        {
          "id": "step-1-3",
          "claim": "Put $a=x-x'$, let $m=\\lfloor a\\rfloor$ and $t=a-m\\in[0,1)$, and put $k=\\lfloor a+1/2\\rfloor$. If $t<1/2$, uniqueness in [F6] gives $k=m$ and $\\delta=k-a=-t$; if $t\\geq1/2$, it gives $k=m+1$ and $\\delta=1-t$. Thus [F6] gives $$ |\\delta|=\\min\\{t,1-t\\}\\leq|a-j|=|x'-x+j|\\qquad(j\\in\\mathbb Z), $$ including the tied case $t=1/2$. If the lifts are changed to $x+r,x'+s$, with $r,s\\in\\mathbb Z$, applying the uniqueness in [F6] to $a+1/2+r-s$ changes $k$ to $k+r-s$, leaving $\\delta$ unchanged. Thus both the nearest displacement and the formula in the statement are independent of the chosen lifts.",
          "step": "1.3",
          "inputs": [
            "F6",
            "algebra"
          ]
        },
        {
          "id": "step-2-1",
          "claim": "For $P=([x],y)$ and $(a,b)\\in T_PC\\cong\\mathbb R^2$, define $$ \\gamma_{P,(a,b)}(t)=([x+ta],y+tb),\\qquad t\\in\\mathbb R. $$ Near each parameter value, a lifted product chart represents this curve by an affine line. The matrix $I_2$ from step 1.1 has zero derivatives, so [F4] gives zero Christoffel symbols and verifies the coordinate geodesic equation. Thus the curve is a geodesic. Its initial data are $P,(a,b)$, and the formula is independent of the representative $x$ by [F1]. Maximal-geodesic uniqueness in [F4] identifies it with the maximal geodesic for those data, whose domain is therefore all of $\\mathbb R$. Since the initial data were arbitrary, $C$ is geodesically complete, and the time-one definition in [F4] gives $$ \\exp_P(a,b)=([x+a],y+b). $$",
          "step": "2.1",
          "inputs": [
            "A1",
            "F1",
            "F4",
            "step 1.1"
          ]
        },
        {
          "id": "step-3-1",
          "claim": "Steps 1.1--2.1 verify the nonempty, connected, boundaryless, and geodesically complete hypotheses of [F5]. Hopf--Rinow therefore makes $(C,d_C)$ a complete metric space, makes every closed bounded subset of it compact, and supplies a minimizing geodesic between any two points. This is the asserted completeness, properness, and existence claim.",
          "step": "3.1",
          "inputs": [
            "A1",
            "F5",
            "step 1.1",
            "step 1.2",
            "step 2.1"
          ]
        },
        {
          "id": "step-3-2",
          "claim": "The curve $\\sigma$ in the statement is the restriction of the all-real geodesic in step 2.1 with initial velocity $(\\delta,\\Delta y)$. Its endpoint is $([x+\\delta],y+\\Delta y)=([x'+k],y')=Q$ by [F1]. Its speed is the constant $\\sqrt{\\delta^2+(\\Delta y)^2}$, so [F7] gives the same number for its length.",
          "step": "3.2",
          "inputs": [
            "F1",
            "F2",
            "F7",
            "step 1.3",
            "step 2.1"
          ]
        },
        {
          "id": "step-3-3",
          "claim": "The exponential formula in step 2.1 gives $$ \\exp_P(0,0)=P=\\exp_P(1,0). $$ The two tangent vectors are distinct, so every fibre exponential map is noninjective.",
          "step": "3.3",
          "inputs": [
            "F1",
            "step 2.1"
          ]
        },
        {
          "id": "step-4-1",
          "claim": "Under [A1], let $\\eta:[0,1]\\to C$ be the minimizing geodesic from $P$ to $Q$ supplied in step 3.1. By step 2.1 it has the form $$ \\eta(t)=([x+tA],y+tB) $$ for its initial velocity $(A,B)$. The endpoint condition and [F1] give $B=\\Delta y$ and $A=x'-x+j$ for some $j\\in\\mathbb Z$. Therefore [F2], [F7], and step 1.3 give $$ L(\\eta)=\\sqrt{(x'-x+j)^2+(\\Delta y)^2} \\geq\\sqrt{\\delta^2+(\\Delta y)^2}=L(\\sigma). $$ But $L(\\eta)=d_C(P,Q)$, while the infimum definition [F7] gives $d_C(P,Q)\\leq L(\\sigma)$. Equality holds throughout. Thus $\\sigma$ is minimizing and the displayed distance formula is proved.",
          "step": "4.1",
          "inputs": [
            "A1",
            "F1",
            "F2",
            "F7",
            "step 1.3",
            "step 2.1",
            "step 3.1",
            "step 3.2"
          ]
        },
        {
          "id": "step-5-1",
          "claim": "If $P=Q$, the fibre criterion in [F1] says $x-x'$ is an integer, so the uniqueness in [F6] gives $k=x-x'$, $\\delta=0$, and $\\Delta y=0$; thus $\\sigma$ is the constant zero-length geodesic. When $|\\delta|=1/2$, the adjacent integer translate gives a second minimizer of the same length; uniqueness is not claimed. The closed parameter endpoints $0,1$ were evaluated in step 3.2. The cylinder is explicitly nonempty and two-dimensional, while the one-dimensional periodic factor and the period-one tangent vector are exactly what produce step 3.3; no empty or zero-dimensional case is being asserted. There is no iff claim in this example. Assumption [A1] is used only through [F4]--[F5] in steps 2.1, 3.1, and 4.1; the explicit formulas make no choices.",
          "step": "5.1",
          "inputs": [
            "A1",
            "F1",
            "F4",
            "F5",
            "F6",
            "step 1.3",
            "step 2.1",
            "step 3.1",
            "step 3.2",
            "step 3.3",
            "step 4.1"
          ]
        }
      ],
      "routine_steps": [],
      "boundaries": [
        {
          "case": "empty",
          "status": "checked",
          "evidence": "Steps 1.1 and 5.1 exhibit ([0],0), so the cylinder is nonempty."
        },
        {
          "case": "zero",
          "status": "checked",
          "evidence": "Step 5.1 evaluates P=Q and obtains the constant zero-length geodesic."
        },
        {
          "case": "one",
          "status": "checked",
          "evidence": "Steps 3.3 and 5.1 use the period-one tangent vector as the exact exponential-map collision."
        },
        {
          "case": "degenerate",
          "status": "checked",
          "evidence": "Step 5.1 treats the constant geodesic and the half-period tie without claiming uniqueness."
        },
        {
          "case": "endpoints",
          "status": "checked",
          "evidence": "Steps 3.2 and 5.1 evaluate both closed parameter endpoints 0 and 1."
        },
        {
          "case": "nonempty-choice",
          "status": "checked",
          "evidence": "Step 5.1 identifies AC_omega only through the maximal-geodesic and Hopf-Rinow interfaces; all displayed formulas are explicit."
        },
        {
          "case": "iff-forward",
          "status": "not_applicable",
          "reason": "The example verifies consequences and an explicit formula, not an equivalence."
        },
        {
          "case": "iff-reverse",
          "status": "not_applicable",
          "reason": "The example verifies consequences and an explicit formula, not an equivalence."
        }
      ]
    }
  }
}
```

## Final supplemental handoff

Completed, in prerequisite order:

1. `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`
2. `ex-hopf-rinow-on-a-flat-cylinder`

Both files were absent immediately before their respective first writes. No
local supplier item was created, no published file was edited, and no shared
manifest, coverage, proof-contract, scope, decision, page, plan, dependency
ledger, or group-D report was changed. This dispatch wrote no judge/audit stamp,
did not use `--owner`, and does not claim a Step-3 gate pass or independent
audit.

Checks actually run on the final authored text:

- The required current `thm-hopf-rinow` entry decision was verified before
  authoring as `repaired`, confidence 1, closed, with matching receipt/current
  transitive hash
  `995886475388da48508358819c36429ab1aad1cd8b0ca067fa241dbf06914da8`.
- Explicit-path precheck on both owned item files: pass, 2 checked and 0
  failing.
- Explicit-path rendercheck on both owned item files: pass; renderer YAML,
  delimiter balance, wikilink placement, real KaTeX, and multiline-display
  checks are clean.
- Focused content-policy input containing exactly the two owned manifest rows:
  pass, 2 scoped items and 0 errors/warnings.
- Standalone strict proof-contract payload printed above: pass, 2/2 items with
  0 errors and 0 warnings.
- A simulated batch manifest in which only these two rows receive their actual
  final `deps` arrays passes `manifest-deps`: 127 items, 0 normalized, 0
  errors. The untouched canonical manifest also passes its current structural
  check, but still contains the obsolete scaffold dependency lists.
- A direct resolution scan found 14/14 sphere dependencies and 19/19 cylinder
  dependencies on disk, with none missing.
- Focused `git diff --check` was run and exited zero, but all three owned files
  are new and untracked, so that result is not treated as coverage. A direct
  `rg` trailing-whitespace scan over both item files and this report after the
  handoff append found no matches; all three files are present and nonempty.

Expected pre-splice/shared failures, reported rather than hidden:

- Canonical strict proof-contract selection fails with exactly two
  `scope-missing-contract` errors, one for each completed ID, and no warnings;
  the shared contract is intentionally reserved to group D/the serial
  integrator.
- Full batch-7 content-policy checks 127 scoped IDs and currently has one
  `scope-item-missing` error for the separately owned
  `fs-geodesic-completeness-means-the-manifold-is-compact`; neither completed
  ID produces a policy error.
- Repository-wide `validate-plan research/plan-spec.json --repo . --max-items
  60` fails on a broad 1254-error pre-splice state. For this pair specifically,
  it reports 14 redundant direct prerequisites on the A page and one redundant
  `the-fundamental-group-of-the-circle` prerequisite on the B page (already
  reached through the A page). The exact 14 A-page rows are: Euclidean ODEs
  already reached through vector fields, Riemannian metrics, and connections;
  vector fields already reached through Riemannian metrics and connections;
  Riemannian metrics already reached through connections; compactness already
  reached through vector fields, Riemannian metrics, and connections; and
  completeness/uniform continuity already reached through Euclidean ODEs,
  vector fields, Riemannian metrics, connections, and compactness. Both pair
  entries in `research/plan-spec.json` still have empty item arrays. These are
  Step-4 plan/inventory reconciliation obligations, not item-proof failures.
- Repository-wide `depcheck` remains red with broad published-audit debt and
  unrelated B-leaf findings. Its relevant exact output confirms the
  `prop-christoffel-formula-for-the-levi-civita-connection` metadata defect
  described above; it reports no unresolved link or dependency for either
  owned item.
- Both canonical library page files are currently absent, so only item-level
  rendering was possible.

Canonical integration still required from group D or the serial integrator:

1. Preserve the original B-page positions 10 and 12 and splice these two IDs
   into
   `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` after
   its A companion is built.
2. Replace each batch-7 manifest row's scaffold dependencies and strategy with
   the exact final dependency arrays and actual proof routes recorded in the
   two checkpoints. In particular, remove the unsupported whole-radius normal
   chart/local-distance route from the antipodal row and remove both the flat-
   torus exponential and global Euclidean-lines dependencies from the cylinder
   row.
3. Add coverage dispositions for both IDs. For the sphere record Datar
   Proposition 15.3.1, printed pp. 117--118/PDF pp. 125--126, and Theorem
   19.2.1, printed pp. 141--144/PDF pp. 149--152, with the qualification that
   the antipodal distance and infinite family are local derivations. For the
   cylinder record Andrews Theorem 11.5.1 and complete proof, printed pp.
   106--108/PDF pp. 6--8, as Hopf--Rinow background only; the source does not
   contain the cylinder calculation.
4. Merge the two tested contract entries above into the existing version-1
   batch contract, retaining its wider scope and the exact boundary/choice/iff
   rows.
5. Recompute any current scope-sufficient and item decisions invalidated by the
   real dependency repairs. This dispatch supplies content and evidence but
   does not invent an owner ruling or write a shared decision.
6. Retain the same-batch prerequisite edges. The sphere item consumes
   `ex-great-circles-as-round-sphere-geodesics` and `thm-hopf-rinow`; the
   cylinder consumes `prop-coordinate-geodesic-equation`,
   `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
   `def-geodesically-complete-riemannian-manifold`,
   `def-domain-and-exponential-map-of-a-connection`, and `thm-hopf-rinow`.
   Every other direct supplier is already published. Consequently these
   repairs introduce no item dependency on another batch of this run and no
   new row is needed in the batch-7 cross-batch input; group D should preserve
   the existing page prerequisites and recheck that conclusion after its
   shared manifest splice.
7. Route the two confirmed metadata-only published concerns above to the owner
   and serial published-ledger reconciler. No owner-held escalation or
   unresolved mathematical/source qualification remains in either newly
   authored item.

Open obligations are therefore limited to the explicitly reserved canonical
splices, the pair's existing plan cleanup, the separately owned missing
false-statement file seen by full content-policy, and owner handling of the two
published metadata defects. The two owned mathematical claims themselves are
complete and locally checked.
