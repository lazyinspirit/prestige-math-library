# phase-2-next-17 — Step 3b group-B assist for D

Dispatch: step3b-b-364a714dcb881178. Owned scope: batch-7 B-page item
ex-the-punctured-euclidean-plane-is-geodesically-incomplete only.

Status: the owned item is fully authored and locally checked. This is a
supplemental author checkpoint, not a Step-3 gate pass, independent audit,
judge result, owner ruling, or completion claim for batch 7. No shared
manifest, coverage, contract, scope, decision, page, plan, dependency-ledger,
group-D report, or published item was edited.

## Completed item and mathematical audit

The item proves the preserved claim and a stronger exact witness statement.
Assuming the library's current AC_omega convention, the unique maximal
geodesic from p=(1,0) with v=(-1,0) in the punctured Euclidean plane is
gamma(t)=(1-t,0) on exactly (-infinity,1), and it has unit speed. Consequently
the punctured plane is geodesically incomplete.

The stopped draft's curve was correct, but its maximal-interval step needed a
complete argument. The repaired proof now:

1. proves the punctured plane open by an explicit radius ||z||/2 ball and
   verifies that the restricted constant Euclidean matrix defines a
   boundaryless Riemannian two-manifold;
2. computes zero Christoffel symbols and checks the coordinate geodesic
   equation, initial data, and unit speed;
3. glues the explicit curve to the unique maximal solution on their common
   interval, forcing the maximal domain to contain (-infinity,1), then uses
   continuity at the deleted origin to exclude time 1 and every later time;
4. applies the library's definition of geodesic completeness.

The explicit manifold, curve, calculation, and obstruction use no choice.
AC_omega is declared because
thm-existence-uniqueness-and-smooth-dependence-of-geodesics and
def-geodesically-complete-riemannian-manifold currently assume it. This item
uses AC_omega only through those two suppliers; def-countable-choice is a
direct dependency. There is no full-AC use, Recorded result, forward
reference, incompatible-axiom branch, empty-manifold reliance, zero-vector
witness, included-endpoint ambiguity, or unstated converse.

The direct dependencies, in prerequisite order, are:

- def-countable-choice — names the inherited AC_omega assumption; published.
- def-riemannian-metric-and-riemannian-manifold — verifies the constant
  restricted tensor is a Riemannian metric; published.
- prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure —
  supplies the one-chart boundaryless smooth structure after openness is
  proved locally; published.
- prop-christoffel-formula-for-the-levi-civita-connection — computes zero
  symbols from the constant metric; published, with the metadata concern
  below.
- prop-coordinate-geodesic-equation — verifies that the explicit curve is a
  geodesic; draft on the batch-7 A page and ordered before this B item.
- thm-existence-uniqueness-and-smooth-dependence-of-geodesics — supplies the
  unique maximal geodesic and its interval; draft on the batch-7 A page and
  ordered before this B item.
- def-geodesically-complete-riemannian-manifold — turns the proper maximal
  interval into incompleteness; draft on the batch-7 A page and ordered before
  this B item.

The scaffold dependency ex-straight-lines-as-euclidean-geodesics was removed
from the item: its ambient R^2 statement does not by itself prove that the
restricted curve is a geodesic on the open submanifold. The repaired proof
uses the coordinate equation and Christoffel formula directly.

## Source audit

The complete Ben Andrews chapter, Geodesics and Completeness, was downloaded
from the recorded URL and read across all eight PDF pages. The retrieved file
has 326027 bytes and SHA-256
1f798b46b51c80b31c10d9d947bdfacd151ae983a2b8f06b418b24615e7c0cdd.

The relevant genuine locator is Section 11.5, Theorem 11.5.1 and its proof,
printed pp. 106–108 (PDF pp. 6–8). It states the equivalence between metric
completeness and indefinite geodesic extension and proves the metric-limit
continuation direction. The chapter contains no punctured-plane example or
warning. The owned item's explicit witness and nonextension argument are
therefore local work; Andrews is cited only for the general completeness
context.

Confirmed shared coverage corrections for the serial integrator:

- In research/phase-2-next-17-batch-7.coverage.json, the Andrews
  reading_status must lose “punctured-plane warning.”
- The source-level locator “Propositions 11.1.1–11.1.4 and Theorem 11.2.1” is
  inaccurate. The chapter contains Proposition 11.1.1, Propositions
  11.2.1–11.2.2, Propositions 11.3.1–11.3.2, and Theorem 11.5.1.
- The contents row named “Theorem 11.2.1: Hopf–Rinow” must name Theorem
  11.5.1. Proposition 11.2.1 is instead the local minimizing result.
- Replace the ex-the-punctured-euclidean-plane-is-geodesically-incomplete
  contents row by a context-only row such as: name “Completeness versus
  indefinite geodesic extension”; locator “Section 11.5, Theorem 11.5.1,
  printed pp. 106–108 (PDF pp. 6–8)”; support “Background only; the explicit
  punctured-plane witness and maximal-interval proof are supplied locally and
  are not stated by Andrews.”

Because no source found in the assigned evidence states the exact example,
the item now honestly uses provenance.statement=ai-generated,
provenance.proof=ai-generated, and generation.role=example. This is the
schema-permitted non-load-bearing B-page example class. It must not become a
dependency target.

## Canonical integration required

The active group-D author or serial integrator must perform the following
shared-file work:

1. In research/phase-2-next-17-batch-7.pages.json, replace this item's two
   scaffold dependencies with the seven direct dependencies listed above;
   replace the strategy by the actual coordinate calculation,
   uniqueness/gluing, and deleted-endpoint proof; propagate the AC_omega
   statement; and change provenance to ai-generated/ai-generated with
   generation.role=example.
2. Apply the exact source-coverage corrections above in
   research/phase-2-next-17-batch-7.coverage.json.
3. Merge the tested contract below under this item's key in
   research/phase-2-next-17-batch-7.proof-contracts.json. The item is already
   present in that file's scope array, but its contracts object has no entry.
4. Put the item on the batch-7 B page under its original ID and in its original
   position. Both relevant plan-spec pages currently have empty item arrays;
   Step 4 must splice the canonical full inventories without changing the
   page pair.
5. No new cross-batch input is needed for this item. Its draft suppliers are
   earlier items of the same batch-7 A page; every other direct supplier is
   published. The existing batch-7 cross-batch input therefore needs no new
   edge on account of this repair.
6. After the shared dependency/provenance/source changes and page integration,
   refresh the current scope-sufficient decision for the preserved pair and
   record the item as repaired, confidence 1, with exactly the seven direct
   dependency IDs above and a reason citing the completed four-step argument
   and focused checks. This assist dispatch did not write either decision and
   did not use --owner.

No local supplier was added, no promised result was dropped, and no pair or
page-order change is needed.

## Tested proof-contract payload

The following standalone version passed the strict checker. Canonical
integration needs only its contract entry because the batch contract already
has version 1 and contains the item in scope.

    {
      "version": 1,
      "scope": [
        "ex-the-punctured-euclidean-plane-is-geodesically-incomplete"
      ],
      "contracts": {
        "ex-the-punctured-euclidean-plane-is-geodesically-incomplete": {
          "citations": [
            {
              "fact": "F1",
              "source": "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure",
              "source_section": "Statement",
              "quote": "Let $n\\ge1$ and let $W\\subseteq\\mathbb R^n$ be open. Then $W$ is a smooth\n$n$-manifold: the one-chart atlas $\\{(W,\\mathrm{id}_W)\\}$ is a smooth atlas, and the\nsmooth structure it generates is the one induced on the open subset $W$ of\n$\\mathbb R^n$.",
              "uses": [
                "1.1"
              ]
            },
            {
              "fact": "F1",
              "source": "def-riemannian-metric-and-riemannian-manifold",
              "source_section": "Definition",
              "quote": "A **Riemannian metric** on a Hausdorff second-countable smooth manifold $M$ is a smooth symmetric covariant two-tensor $g$ such that $g_p(v,v)>0$ for every point $p$ and every nonzero $v\\in T_pM$. A **Riemannian manifold** is the pair $(M,g)$.",
              "uses": [
                "1.1"
              ]
            },
            {
              "fact": "F2",
              "source": "prop-christoffel-formula-for-the-levi-civita-connection",
              "source_section": "Statement",
              "quote": "In coordinates for a Riemannian metric with matrix $(g_{ij})$ and inverse $(g^{ij})$, its Levi–Civita symbols are\n$$\\Gamma^k{}_{ij}=\\tfrac12\\sum_\\ell g^{k\\ell}(\\partial_i g_{j\\ell}+\\partial_j g_{i\\ell}-\\partial_\\ell g_{ij}).$$",
              "uses": [
                "2.1"
              ]
            },
            {
              "fact": "F3",
              "source": "prop-coordinate-geodesic-equation",
              "source_section": "Statement",
              "quote": "In coordinates $x^1,\\ldots,x^n$, a smooth curve $\\gamma$ is a geodesic if and only if, throughout every parameter subinterval lying in the chart,\n$$\\ddot x^k+\\Gamma^k{}_{ij}(x)\\dot x^i\\dot x^j=0\\qquad(1\\le k\\le n),$$\nwith summation over repeated indices.",
              "uses": [
                "2.1"
              ]
            },
            {
              "fact": "F4",
              "source": "thm-existence-uniqueness-and-smooth-dependence-of-geodesics",
              "source_section": "Statement",
              "quote": "Assume $\\mathrm{AC}_\\omega$. For every $(p,v)\\in TM$ there is a unique maximal geodesic $\\gamma_{p,v}:I_{p,v}\\to M$ with $\\gamma_{p,v}(0)=p$ and $\\gamma'_{p,v}(0)=v$. Each $I_{p,v}$ is an open interval containing zero",
              "uses": [
                "3.1",
                "4.1"
              ]
            },
            {
              "fact": "F5",
              "source": "def-countable-choice",
              "source_section": "Definition",
              "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.",
              "uses": [
                "4.1"
              ]
            },
            {
              "fact": "F5",
              "source": "def-geodesically-complete-riemannian-manifold",
              "source_section": "Definition",
              "quote": "Assume $\\mathrm{AC}_\\omega$. A Riemannian manifold without boundary is **geodesically complete** when, for every initial vector $v\\in T_pM$, the unique maximal geodesic has domain\n$$I_{p,v}=\\mathbb R.$$\nFor a disconnected manifold this condition is componentwise. The zero initial vector is included.",
              "uses": [
                "4.1"
              ]
            }
          ],
          "derivations": [
            {
              "id": "step-1-1",
              "claim": "An explicit ball about each nonzero point proves the punctured plane open; the identity chart and constant positive-definite Euclidean matrix make it a boundaryless Riemannian two-manifold.",
              "step": "1.1",
              "inputs": [
                "F1",
                "given"
              ]
            },
            {
              "id": "step-2-1",
              "claim": "The constant metric has zero Christoffel symbols, so the explicit affine curve solves the coordinate geodesic equation on (-infinity,1) and has the claimed point, velocity, and unit speed.",
              "step": "2.1",
              "inputs": [
                "F2",
                "F3",
                "step 1.1",
                "algebra"
              ]
            },
            {
              "id": "step-3-1",
              "claim": "Uniqueness permits gluing the explicit curve to the maximal geodesic, forcing its domain to contain (-infinity,1); continuity at the deleted origin forbids time 1 or any later time, so the maximal interval is exactly (-infinity,1).",
              "step": "3.1",
              "inputs": [
                "F4",
                "step 2.1"
              ]
            },
            {
              "id": "step-4-1",
              "claim": "The proper maximal domain violates geodesic completeness; all geometry is explicit and choice-free, while AC_omega is used only through the current maximal-geodesic and completeness suppliers.",
              "step": "4.1",
              "inputs": [
                "F4",
                "F5",
                "step 1.1",
                "step 2.1",
                "step 3.1",
                "given"
              ]
            }
          ],
          "routine_steps": [],
          "boundaries": [
            {
              "case": "empty",
              "status": "checked",
              "evidence": "Step 1.1 exhibits the open punctured plane, and step 2.1 supplies the point (1,0), so the manifold and witness are nonempty."
            },
            {
              "case": "zero",
              "status": "checked",
              "evidence": "Step 2.1 computes the initial velocity norm as one, so the witness is not the always-global zero-vector geodesic."
            },
            {
              "case": "one",
              "status": "not_applicable",
              "reason": "The claimed manifold has fixed dimension two; no dimension-one or singleton-manifold case is quantified over."
            },
            {
              "case": "degenerate",
              "status": "checked",
              "evidence": "Steps 1.1 and 2.1 verify a nonempty boundaryless two-manifold and a nonconstant unit-speed curve, excluding the degenerate constant case."
            },
            {
              "case": "endpoints",
              "status": "checked",
              "evidence": "Step 3.1 proves that time 1 is an excluded finite endpoint and that continuity at the deleted origin forbids extension through it."
            },
            {
              "case": "nonempty-choice",
              "status": "checked",
              "evidence": "Step 4.1 identifies AC_omega solely in the current F4/F5 suppliers; the explicit manifold, curve, and obstruction make no selections."
            },
            {
              "case": "iff-forward",
              "status": "not_applicable",
              "reason": "The example proves one explicit incompleteness claim and states no equivalence."
            },
            {
              "case": "iff-reverse",
              "status": "not_applicable",
              "reason": "The example proves one explicit incompleteness claim and states no converse."
            }
          ]
        }
      }
    }

## Published concerns for owner reconciliation

Confirmed metadata/schema defects, high confidence; no mathematical defect was
found in the Christoffel formula used here. On published page
connections-levi-civita-and-parallel-transport, the following published items
lack the audited or verified record required by SCHEMA.md:

- prop-christoffel-formula-for-the-levi-civita-connection;
- thm-fundamental-theorem-of-riemannian-geometry;
- lem-koszul-formula-is-necessary-for-a-levi-civita-connection;
- def-christoffel-symbols-of-an-affine-connection;
- thm-the-koszul-formula-defines-an-affine-connection;
- def-levi-civita-connection.

The first five have only a judge pass; def-levi-civita-connection has no
verification block. A judge stamp alone is insufficient under SCHEMA.md.
Repair requires a legitimate owner audit or delegated verified record over
the current proof/dependency closure, not a new mathematical supplier and not
a self-issued stamp. This concern is already described in the group-D parallel
B-example checkpoint and should be deduplicated during serial reconciliation.
The canonical published-consumer-supplier ledger was not edited here.

## Checks actually run

- Explicit-path precheck: pass, 1 checked and 0 failing.
- Explicit-path real renderer/KaTeX check: pass, 1 file.
- Focused citecheck: pass, 1 item.
- Focused content policy using a temporary one-item manifest containing the
  repaired dependencies and provenance: 1 scoped item, 0 errors, 0 warnings.
- Focused strict proof contract using the standalone payload above: 1/1 item,
  0 errors, 0 warnings.
- The current shared strict contract check correctly fails with one
  scope-missing-contract error for this item; canonical integration item 3
  above resolves it.
- Full current batch-7 content policy: 127 scoped items, 17 errors, 0 warnings.
  All 17 errors are scope-item-missing findings for other active group-D
  items; none names this item. This is not reported as a batch pass.
- validate-plan with research/plan-spec.json: exit 1 in the unfinished shared
  worktree. It produced 5094 warning/error finding lines globally and no line
  naming this item. Its relevant page inventory output is exactly 0 items for
  both orders 481 and 482, confirming the expected pre-splice mismatch. This
  is not reported as a plan pass.

## Open obligations and next action

There is no unresolved mathematics or source uncertainty in the owned item.
The remaining obligations are only the canonical shared-file integrations
listed above, followed by their normal checks and non-owner Step-3 repaired
decision. The active group-D author owns every other batch-7 item and the
batch/page handoff.
