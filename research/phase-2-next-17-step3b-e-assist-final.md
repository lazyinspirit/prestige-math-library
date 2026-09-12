# phase-2-next-17 — Step 3b group E final disjoint authoring continuation

Dispatch label: `step3b-e-2196096cf5663fd7`

Owned batch: 7

Owned item: `ex-geodesics-of-a-riemannian-product`

This is the required supplemental checkpoint and canonical-integration
handoff. It is not a Step-3 gate pass or an independent audit. No shared
manifest, contract, coverage, scope, decision, page, plan, group-D report,
dependency ledger, or published item was edited.

`research/phase-2-next-17-owner-authoring-direction.md` was read completely. It
contains no batch-7 or owned-item-specific obligation. The current Step 1
decision for this example is `ready`, but it examined only the four scaffold
dependencies. The completed proof exposes two further direct inputs, so that
decision needs canonical refresh and was not overwritten here.

## Checkpoint — `ex-geodesics-of-a-riemannian-product`

Status: fully authored; focused precheck and rendering pass.

The target item and this report were absent on the initial ownership check. The
target was checked again immediately before its creation and remained absent,
so no other author's work was overwritten.

Exact claim and conventions: let $(M^m,g)$ and $(N^n,h)$ be boundaryless
Riemannian manifolds, let $I\subseteq\mathbb R$ be an interval with nonempty
interior, and use the product metric on $M\times N$. A supplied smooth curve
$$\gamma=(\alpha,\beta):I\to M\times N$$
is an affinely parametrized product geodesic if and only if both component
curves are affinely parametrized geodesics using the same parameter $t$. The
claim does not require the two factor speeds to agree. Taking $I=\mathbb R$
gives the all-real form in both directions.

The core equivalence is choice-free. A separate final clause assumes
$\mathrm{AC}_\omega$ and nonempty connected factors, then invokes the already
authored finite-product proposition to conclude that the product is
metrically, equivalently geodesically, complete exactly when both factors are.
This is the only use of $\mathrm{AC}_\omega$ in the item.

## Scaffold and supplier audit

The scaffold's proposed block-connection strategy is mathematically sound, but
it was not yet a proof. Its dependency list omitted the exact theorem that
turns the split coordinate equations into both directions of the intrinsic
geodesic assertion, `prop-coordinate-geodesic-equation`. It also listed
`prop-a-riemannian-product-is-complete-iff-each-factor-is-complete` without a
mathematical use. The authored example makes that edge genuine through the
explicit conditional completeness consequence and therefore must also declare
`def-countable-choice` and propagate the proposition's
$\mathrm{AC}_\omega$ assumption for that clause. These are local scaffold
repairs; the promised product-geodesic affine-parameter claim is unchanged.

The relevant current suppliers were read completely before authoring:

- `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete` is a
  complete current draft. Its Step-3 item decision is current, closed,
  non-owner `repaired`, confidence 1. Its proof computes the finite block
  Christoffel symbols, proves both geodesic-completeness directions, and applies
  Hopf--Rinow under explicit nonempty, connected, boundaryless and
  $\mathrm{AC}_\omega$ hypotheses. Focused precheck and rendering were rerun
  in this dispatch and passed. No defect was found in the proposition on the
  scope used here.
- `ex-the-product-riemannian-metric` is published with an audit record. Its
  proof establishes the block matrix and positive definiteness from the
  product tangent coordinates.
- `thm-fundamental-theorem-of-riemannian-geometry` constructs the unique
  Levi--Civita connection from the Koszul formula without choice. Its proof and
  the relevant Koszul construction/necessity interfaces were read and found
  adequate for this use; its publication-evidence defect is reported below.
- `prop-christoffel-formula-for-the-levi-civita-connection` correctly derives
  the coordinate formula from Koszul and the inverse metric. Its complete proof
  and relevant direct definitions were read; its publication-evidence defect
  is reported below.
- `prop-coordinate-geodesic-equation` is a complete current draft with a
  current closed non-owner `accept` decision at confidence 1. Its proof expands
  $D_t\gamma'$ and proves both directions, including chart seams, zero
  dimension, constant curves, and included endpoints.
- `def-countable-choice` is published with delegated verification and supplies
  only the assumption bookkeeping for the conditional completeness clause.

No new local supplier was needed or authored.

## Actual calculation

In product coordinates $(x^i,y^\alpha)$, the metric and inverse are
$$\overline G=\operatorname{diag}((g_{ij}(x)),(h_{\alpha\beta}(y))),\qquad \overline G^{-1}=\operatorname{diag}((g^{ij}(x)),(h^{\alpha\beta}(y))).$$
The $M$ block has no $y$-dependence, the $N$ block has no $x$-dependence, and
mixed coefficients vanish. Direct substitution into the Christoffel formula
therefore gives
$$\Gamma^k{}_{ij}=\Gamma^k{}_{ij}(g),\qquad \Gamma^\gamma{}_{\alpha\beta}=\Gamma^\gamma{}_{\alpha\beta}(h),$$
with every mixed symbol zero. For example,
$$\Gamma^k{}_{i\beta}=0,\qquad \Gamma^k{}_{\alpha\beta}=-\tfrac12g^{k\ell}\partial_\ell h_{\alpha\beta}=0.$$
Consequently the product geodesic equation is exactly the pair
$$\ddot x^k+\Gamma^k{}_{ij}(g)\dot x^i\dot x^j=0,\qquad \ddot y^\gamma+\Gamma^\gamma{}_{\alpha\beta}(h)\dot y^\alpha\dot y^\beta=0.$$
Both systems use the supplied variable $t$, which proves the precise
affine-parameter claim in both directions rather than only identifying the
unparametrized images.

## Source evidence and qualification

Ved Datar, *Lectures on Riemannian Geometry*, Example 8.2.8, printed p.49, was
read in full with its surrounding product/warped-product examples. It states
that $M\times N$ is a smooth manifold, gives the fibrewise tangent splitting
$T_{(p,q)}(M\times N)\cong T_pM\oplus T_qN$, and defines the product metric as
$g_M\oplus g_N$.

That source passage does **not** state the split Levi--Civita connection, the
geodesic iff, affine-parameter preservation, or the completeness equivalence.
The item therefore cites Datar only for the product construction. The split
symbols and geodesic equations are derived locally in steps 1.1--4.2; the
conditional completeness assertion is attributed to the already-authored
local proposition. No unresolved source qualification remains.

## Exact direct dependencies

The current scaffold lists:

- `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`
- `ex-the-product-riemannian-metric`
- `prop-christoffel-formula-for-the-levi-civita-connection`
- `thm-fundamental-theorem-of-riemannian-geometry`

The completed item's exact direct dependency list, in prerequisite order, is:

- `def-countable-choice`
- `ex-the-product-riemannian-metric`
- `thm-fundamental-theorem-of-riemannian-geometry`
- `prop-christoffel-formula-for-the-levi-civita-connection`
- `prop-coordinate-geodesic-equation`
- `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`

The first and fifth IDs are the exposed additions. All six currently exist and
precede the B-page example logically. The product-completeness and coordinate-
equation suppliers also have current Step-3 decisions.

## Proof-contract handoff

### Numbered derivations

- 1.1: in supplied product coordinates, calculate the block-diagonal product
  metric and inverse; record own-factor dependence and vanishing mixed entries.
  Inputs: F1, given.
- 2.1: substitute the block matrices into the Christoffel formula; recover each
  factor's symbol family and prove every mixed symbol is zero, with two explicit
  representative calculations and symmetry between the factors. Inputs: F2,
  step 1.1.
- 3.1: substitute the split symbols into the coordinate geodesic equation and
  obtain precisely the two factor systems, both evaluated at the same $t$.
  Inputs: F3, step 2.1.
- 4.1: forward iff direction: a product geodesic makes both factor systems
  vanish, hence both projections are affine geodesics. Inputs: F3, step 3.1.
- 4.2: reverse iff direction: two factor geodesics make both product blocks
  vanish on every product-chart subinterval, hence their pair is a product
  geodesic; taking $I=\mathbb R$ proves the all-real version. Inputs: F3,
  step 3.1.
- 5.1: invoke the two-factor instance of the authored completeness proposition
  only under its extra hypotheses, and discharge empty, zero, one, degenerate,
  endpoint, choice and both-iff cases. Inputs: A1, F2, F3, F4, steps 1.1--4.2.

There are no routine omitted steps.

### Canonical citation excerpts and uses

- A1 -> `def-countable-choice`, Definition: “For every family
  $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a
  function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every
  $n\in\mathbb N$.” Use: 5.1, solely through F4's conditional completeness
  invocation.
- F1 -> `ex-the-product-riemannian-metric`, Example: “The product metric on
  $(M,g)\times(N,h)$ is $\pi_M^*g+\pi_N^*h$, with block matrix
  $\operatorname{diag}(G,H)$.” Use: 1.1.
- F2 -> `thm-fundamental-theorem-of-riemannian-geometry`, Statement: “Every
  supplied smooth Riemannian metric on a smooth manifold, including a manifold
  with boundary, has exactly one Levi–Civita connection. The construction adds
  no choice assumption.” Uses: 2.1 and the choice accounting in 5.1.
- F2 -> `prop-christoffel-formula-for-the-levi-civita-connection`, Statement:
  “In coordinates for a Riemannian metric with matrix $(g_{ij})$ and inverse
  $(g^{ij})$, its Levi–Civita symbols are
  $$\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j
  g_{i\ell}-\partial_\ell g_{ij}).$$” Use: 2.1.
- F3 -> `prop-coordinate-geodesic-equation`, Statement: “In coordinates
  $x^1,\ldots,x^n$, a smooth curve $\gamma$ is a geodesic if and only if,
  throughout every parameter subinterval lying in the chart,
  $$\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0\qquad(1\le k\le n),$$
  with summation over repeated indices.” Uses: 3.1, 4.1, 4.2, and the endpoint
  audit in 5.1.
- F4 -> `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`,
  Statement: assuming $\mathrm{AC}_\omega$ for a finite family of nonempty
  connected boundaryless Riemannian manifolds, the conditions that every
  factor is metrically complete, every factor is geodesically complete, the
  product is metrically complete, and the product is geodesically complete are
  equivalent. Use: 5.1 with the two-factor family.

### Boundary and logical-form rows

- Empty: checked in 5.1. If either factor is empty, no curve from the stipulated
  nonempty-interior interval exists, so the universally quantified geodesic iff
  has no instance. The conditional completeness clause explicitly assumes both
  factors nonempty because the unrestricted completeness equivalence would be
  false for an empty product beside an incomplete factor.
- Zero: checked in 5.1. A zero-dimensional factor supplies an empty coordinate
  equation and its component curve is locally constant; two constant
  components give the zero-velocity product geodesic.
- One: checked in 5.1. A one-dimensional factor contributes one Christoffel
  symbol and one scalar geodesic equation, so the block calculation is
  unchanged.
- Degenerate: checked in 5.1. Either component may be constant; its coordinate
  derivatives vanish and the product is geodesic exactly when the other
  component is. Both constant components are included.
- Endpoints: checked through F3 and 5.1. The interval has nonempty interior,
  and the coordinate-geodesic supplier uses one-sided derivatives at included
  endpoints and overlapping chart subintervals at seams.
- Nonempty choice: checked in 5.1. Steps 1.1--4.2 use no choice. The only
  non-ZF assumption is $\mathrm{AC}_\omega$, explicitly confined to F4's
  conditional completeness consequence; no points, charts, curves, or
  representatives are chosen from a family.
- Iff-forward: checked in 4.1 by splitting a vanishing product geodesic system
  into its factor systems without reparametrization.
- Iff-reverse: checked in 4.2 by combining the two vanishing factor systems
  into the product system with their supplied common parameter.

## Canonical integration required

Group D or the serial reconciler still needs to:

1. Replace the four scaffold edges in the batch-7 manifest with the exact six
   dependencies above while preserving the original item ID and claim. The
   conditional completeness sentence should remain conditional so the core
   product-geodesic iff is not mislabeled as choice-dependent.
2. Add the item to the batch-7 B page in its planned third position, after
   `ex-great-circles-as-round-sphere-geodesics` and before
   `ex-geodesics-in-the-poincare-upper-half-plane`.
3. Add the coverage record for this item with Datar Example 8.2.8, printed
   p.49, and the precise limited support recorded above. The current coverage
   row for that source is attached only to the product-completeness proposition
   and does not register this example.
4. Add the exact proof-contract entry supplied above, including all six
   derivations, citation excerpts/uses, and all eight boundary rows.
5. Refresh the current item/scope and dependency-input records invalidated by
   the two added direct dependencies. These inputs introduce no known new
   page-level cross-batch edge: the product-metric/connection pages are already
   required by DG-20, while the coordinate and completeness suppliers are on
   its A page. The canonical ledger must nevertheless recompute this from the
   shared inventory.
6. Run the batch-wide content-policy, strict contract, and plan-validation
   checks only after the shared records and B page are integrated. This
   dispatch was forbidden to edit those carriers and therefore does not claim
   their passes.
7. Record the authorized Step-3 item decision only after that integration and
   checking. This dispatch did not run `record-item`, use `--owner`, alter an
   escalation, or add any judge/audit stamp.

## Checks actually run

- The current product-completeness supplier was checked with
  `node tools/tsx-run.mjs tools/precheck.mts items/prop-a-riemannian-product-is-complete-iff-each-factor-is-complete.md`
  — pass, 1 checked and 0 failing.
- The same supplier was checked with
  `node tools/rendercheck.mjs items/prop-a-riemannian-product-is-complete-iff-each-factor-is-complete.md`
  — pass for 1 file.
- The authored target was checked, after its final proof edit, with
  `node tools/tsx-run.mjs tools/precheck.mts items/ex-geodesics-of-a-riemannian-product.md`
  — pass, 1 checked and 0 failing.
- The target was checked with
  `node tools/rendercheck.mjs items/ex-geodesics-of-a-riemannian-product.md`
  — pass for 1 file; frontmatter, delimiters, KaTeX, wikilink placement, and
  renderer YAML parsing are clean.
- The Step-3 decision resolver was run read-only for
  `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete` and
  `prop-coordinate-geodesic-equation`; both decisions are current and closed.

No batch-wide gate, content-policy pass, strict shared-contract pass,
`validate-plan` pass, independent review, or independent audit is claimed.

## Published concerns

Confirmed publication-evidence metadata defect, high confidence: the direct
suppliers `prop-christoffel-formula-for-the-levi-civita-connection` and
`thm-fundamental-theorem-of-riemannian-geometry`, both on published page
`connections-levi-civita-and-parallel-transport`, are `status: published` and
have only `verification.judge` records. `SCHEMA.md` requires a published
proved-here item to have an `audited` or delegated `verified` record; a judge
stamp alone is insufficient. Their current statements and complete proofs were
read and no mathematical defect was found on the interface used here, so this
metadata debt does not block the sound new example.

The same confirmed metadata condition appears in their relevant published
support chain on that page:

- `lem-koszul-formula-is-necessary-for-a-levi-civita-connection` — judge only;
- `def-christoffel-symbols-of-an-affine-connection` — judge only;
- `thm-the-koszul-formula-defines-an-affine-connection` — judge only;
- `def-levi-civita-connection` — no `verification` block.

Confidence is high from direct frontmatter inspection against `SCHEMA.md`.
Required mathematical suppliers: none. Repair strategy: the owner should
arrange and record a legitimate current owner audit or delegated verification
for each affected item and then rerun the publication checks; no mathematical
claim should be changed merely to repair evidence metadata. These concerns
were already observed in the group-D parallel checkpoint, so the serial
reconciler should update or retain the existing canonical ledger finding rather
than create duplicates. This dispatch did not edit that ledger or any
published file.

## Open obligations and next action

No mathematical or source uncertainty remains for the owned example. The only
open work is the seven canonical integration actions above and the owner-held
published metadata repair. This supplemental dispatch has no further owned
item; next action belongs to group D/serial integration.
