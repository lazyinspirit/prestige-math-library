# phase-2-next-17 — Step 3b group-B assist after Hopf–Rinow

Dispatch: step3b-b-23894e4645751cb1. Owned scope: batch-7 B-page item
ex-hyperbolic-space-is-complete only.

Status: the owned item is fully authored and locally checked. This is a
supplemental author checkpoint, not a Step-3 gate pass, independent audit,
judge result, owner ruling, or completion claim for batch 7. No shared
manifest, coverage, contract, scope, decision, page, plan, dependency-ledger,
group-D report, or published item was edited.

## Start gate and completed claim

The item file was absent at the immutable start of this dispatch. Work began
only after tools/step3-decisions.mjs reported the current thm-hopf-rinow input
closure closed by a repaired, non-owner Step-3 decision at confidence 1. Its
receipt and recomputed closure hash are both
995886475388da48508358819c36429ab1aad1cd8b0ca067fa241dbf06914da8.
The two same-batch suppliers used below are also current at confidence 1:
def-geodesically-complete-riemannian-manifold and
ex-geodesics-in-the-poincare-upper-half-plane.

The completed item proves the exact preserved claim with the library's
assumption made explicit. Assuming AC_omega, the Poincaré upper half-plane

    H={(x,y) in R^2 : y>0},    g=(dx^2+dy^2)/y^2

is geodesically complete and complete for its Riemannian distance d_g. The
metric-completeness assertion is expressly about d_g, not the restricted
Euclidean distance.

The actual argument:

1. exhibits (0,1), proves H open by an explicit y/2 ball, proves y^(-2)
   smooth by calculating every iterated partial derivative, checks positive
   definiteness, and hence verifies a nonempty boundaryless Riemannian
   two-manifold;
2. proves H convex by the positive second coordinate of every affine segment,
   and hence connected;
3. starts from the already authored classification of every nonconstant
   affine geodesic as a vertical exponential or a boundary-centred
   semicircle, and calculates its squared hyperbolic speed to be k^2;
4. treats zero initial velocity separately by the global constant geodesic
   and uses the all-real classified formulas plus maximality to force every
   maximal geodesic domain to equal R;
5. applies only the geodesically-complete-to-metrically-complete implication
   of Hopf–Rinow after checking its nonempty, connected, boundaryless
   hypotheses.

The displayed metric, convexity, speed, and extension calculations are
choice-free. AC_omega is stated because the current
def-geodesically-complete-riemannian-manifold and thm-hopf-rinow suppliers
assume it. The item uses AC_omega only through those two suppliers. It invokes
no full AC, Recorded result, forward reference, incompatible-axiom branch, or
unstated converse.

## Direct dependencies and scaffold repair

The manifest scaffold listed only thm-hopf-rinow and
ex-geodesics-in-the-poincare-upper-half-plane. That was underdeclared. The
authored direct dependencies, in prerequisite order, are:

- def-countable-choice — names the inherited AC_omega assumption; published.
- cor-differentiable-implies-continuous — proves continuity of each calculated
  one-variable derivative; published.
- thm-algebra-of-derivatives — supplies the product and quotient rules in the
  all-orders y^(-2) calculation; published.
- def-ck-and-multi-index-notation-in-several-variables — turns the
  all-iterated-partials calculation into smoothness; published.
- prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure —
  supplies the boundaryless smooth structure once openness is checked;
  published.
- prop-coordinate-criterion-for-a-riemannian-metric — identifies the smooth
  symmetric positive-definite coordinate matrix as a Riemannian metric;
  published.
- ex-convex-subsets-of-rn-are-path-connected — supplies connectedness from the
  locally verified convexity; published.
- def-geodesically-complete-riemannian-manifold — turns the maximal-domain
  calculation into geodesic completeness; draft earlier on the batch-7 A
  page, with a current confidence-1 repaired decision.
- thm-hopf-rinow — supplies the one completeness implication actually used;
  draft earlier on the batch-7 A page, with the required current
  confidence-1 repaired decision.
- ex-geodesics-in-the-poincare-upper-half-plane — supplies the exhaustive
  global vertical/semicircle formulas and constant case; draft earlier on the
  batch-7 B page, with a current confidence-1 repaired decision.

All nonpublished dependencies are earlier items of this same A/B pair. No new
cross-batch dependency input or frontier-dependency-ledger edge is required.
No local supplier was added.

## Source audit

The current Ved Datar PDF was recovered in full: 1,206,685 bytes, 290 PDF
pages, SHA-256
fab4114ca5142b8ee1b7eca52daa559494cf012fcde9318ad87c7c97a7652050.
The complete relevant passages were read. Example 15.1.6, printed p. 115,
supplies the Poincaré metric and coordinate geodesic equations. Its printed
circle equation interchanges the centre-coordinate roles and does not itself
prove completeness; the boundary-centred formulas used here come from the
completed local supplier ex-geodesics-in-the-poincare-upper-half-plane.
Theorem 19.2.1 and its complete proof, printed pp. 141–144, supply the general
geodesic/metric completeness equivalence used in the last step.

The current Bruno Martelli PDF was also recovered in full: 3,519,376 bytes,
161 PDF pages, SHA-256
7b3d0f6e6793f993831ba72faa231995bd0297f31bcf9be3ffae3c6e7ae4f4a3.
The complete relevant arguments were read:

- preliminary §2.5, Theorem 2.13, printed p. 13, states Hopf–Rinow;
- Chapter 2 §1.3, Proposition 1.8 and Corollary 1.9, printed p. 24, give the
  all-real hyperboloid geodesics and deduce completeness;
- Chapter 2 §1.5, Propositions 1.15–1.17, printed pp. 28–30, identify the
  upper half-space as the Poincaré model, derive the metric x_n^(-2)g_E, and
  give the vertical unit-speed parametrization.

Martelli is therefore the genuine Poincaré-model source for the promised
completeness claim. The owned proof still obtains the full two-dimensional
vertical/semicircle extension calculation from the exact local geodesic
supplier rather than attributing more to Martelli than those passages state.

Confirmed source defect, not a published-item defect: Datar's printed p. 115
circle has the centre coordinates interchanged. The current published/draft
consumer used here already states this qualification and proves the corrected
boundary-centred equation. No new suspected or confirmed defect was found in
any published supplier inspected for this item.

## Canonical integration required

The active group-D author or serial integrator must perform the following
shared-file work:

1. In research/phase-2-next-17-batch-7.pages.json, replace the two scaffold
   dependencies by the ten direct dependencies listed above, propagate
   AC_omega into the preserved statement, replace the strategy by the actual
   manifold/speed/maximal-extension/Hopf–Rinow argument, and add the exact
   Martelli reference already present in the item. Preserve
   ai-altered/ai-altered provenance.
2. In research/phase-2-next-17-batch-7.coverage.json, add a Datar contents row
   for this item whose locators are Example 15.1.6, printed p. 115, and
   Theorem 19.2.1 with proof, printed pp. 141–144, qualified as equations and
   general Hopf–Rinow support rather than a sourced completeness example.
   Expand the existing Martelli source locator and reading status to the
   exact passages above, and add a contents row for this item identifying
   Proposition 1.8, Corollary 1.9, and Propositions 1.15–1.17 as the direct
   model/completeness support.
3. Merge the tested contract below under this item's key in
   research/phase-2-next-17-batch-7.proof-contracts.json. The item is already
   in that file's scope array, but its contracts object has no entry.
4. Place the item under its original ID and original position on the batch-7
   B page. Both relevant plan-spec pages still have zero-item arrays; Step 4
   must splice the full canonical inventories without changing the pair.
5. Do not add a frontier edge for this item: every dependency is published or
   is an earlier item of this same batch-7 pair.
6. The current scope-sufficient receipt hashes the old manifest statement and
   will be invalidated by the honest AC_omega propagation. After applying the
   shared repairs, refresh the non-owner scope-sufficient decision with
   evidence, then record this item as repaired at confidence 1 with exactly
   the ten dependencies above and a reason naming the completed extension
   proof and focused checks. This assist dispatch wrote neither decision and
   did not use --owner.

No pair, page order, promised result, or provenance class needs to change.

## Tested proof-contract payload

The following standalone payload passed the strict checker. Canonical
integration needs only its contract entry because the batch contract already
has version 1 and contains this item in scope.

    {
      "version": 1,
      "scope": [
        "ex-hyperbolic-space-is-complete"
      ],
      "contracts": {
        "ex-hyperbolic-space-is-complete": {
          "citations": [
            {
              "fact": "A1",
              "source": "def-countable-choice",
              "source_section": "Definition",
              "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.",
              "uses": ["3.1"]
            },
            {
              "fact": "F1",
              "source": "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure",
              "source_section": "Statement",
              "quote": "Let $n\\ge1$ and let $W\\subseteq\\mathbb R^n$ be open. Then $W$ is a smooth\n$n$-manifold: the one-chart atlas $\\{(W,\\mathrm{id}_W)\\}$ is a smooth atlas, and the\nsmooth structure it generates is the one induced on the open subset $W$ of\n$\\mathbb R^n$.",
              "uses": ["1.1"]
            },
            {
              "fact": "F1",
              "source": "thm-algebra-of-derivatives",
              "source_section": "Statement",
              "quote": "$fg$ is differentiable at $c$ and $(fg)'(c) = f'(c)g(c) + f(c)g'(c)$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and is a limit point of $A_0$, the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is differentiable\n   at $c$ as a function on $A_0$, and\n   $$\\bigl((f/g)|_{A_0}\\bigr)'(c) \\;=\\; \\frac{f'(c)\\,g(c) - f(c)\\,g'(c)}{g(c)^{2}} .$$",
              "uses": ["1.1"]
            },
            {
              "fact": "F1",
              "source": "def-ck-and-multi-index-notation-in-several-variables",
              "source_section": "Definition",
              "quote": "For $k\\in\\mathbb N$, $f$ is of class $C^k$ on $U$ when, for every word $(i_1,\\ldots,i_r)$ of coordinate indices with $0\\le r\\le k$, the iterated derivative $\\partial_{i_r}\\cdots\\partial_{i_1}f$ exists and is continuous on $U$; the word of length $0$ denotes $f$.",
              "uses": ["1.1"]
            },
            {
              "fact": "F1",
              "source": "cor-differentiable-implies-continuous",
              "source_section": "Statement",
              "quote": "If $f$ is differentiable at $c$ ([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).",
              "uses": ["1.1"]
            },
            {
              "fact": "F1",
              "source": "prop-coordinate-criterion-for-a-riemannian-metric",
              "source_section": "Statement",
              "quote": "A covariant two-tensor $g$ on $M$ is Riemannian exactly when, in every smooth coordinate chart $x$, its coordinate matrix $G_x=(g_{ij})$ has smooth entries and is symmetric positive definite.",
              "uses": ["1.1"]
            },
            {
              "fact": "F2",
              "source": "ex-convex-subsets-of-rn-are-path-connected",
              "source_section": "Example",
              "quote": "**Every convex $C \\subseteq \\mathbb{R}^n$ is path-connected**\n   ([[def-path-connected]]), hence connected ([[def-connected-space]],\n   [[thm-path-connected-implies-connected]]).",
              "uses": ["1.2"]
            },
            {
              "fact": "F3",
              "source": "ex-geodesics-in-the-poincare-upper-half-plane",
              "source_section": "Example",
              "quote": "For the Poincaré metric $g=(dx^2+dy^2)/y^2$ on $H=\\{(x,y)\\in\\mathbb R^2:y>0\\}$, every nonconstant affinely parametrized geodesic is a restriction of exactly one of the following forms, with $k\\ne0$:\n$$\\gamma(t)=(a,b e^{kt})\\quad(a\\in\\mathbb R,\\ b>0),$$\n$$\\gamma(t)=\\bigl(a+R\\tanh(kt+c),\\ R\\operatorname{sech}(kt+c)\\bigr)\\quad(a,c\\in\\mathbb R,\\ R>0).$$\nThus their unparametrized images are vertical lines and upper Euclidean semicircles $(x-a)^2+y^2=R^2$ orthogonal to the boundary $y=0$. Constant curves are the zero-speed geodesics. An affine change of parameter merely changes the constants in these displayed parametrizations.",
              "uses": ["1.3", "2.1"]
            },
            {
              "fact": "F4",
              "source": "def-geodesically-complete-riemannian-manifold",
              "source_section": "Definition",
              "quote": "Assume $\\mathrm{AC}_\\omega$. A Riemannian manifold without boundary is **geodesically complete** when, for every initial vector $v\\in T_pM$, the unique maximal geodesic has domain\n$$I_{p,v}=\\mathbb R.$$\nFor a disconnected manifold this condition is componentwise. The zero initial vector is included.",
              "uses": ["2.1", "3.1"]
            },
            {
              "fact": "F5",
              "source": "thm-hopf-rinow",
              "source_section": "Statement",
              "quote": "Assume $\\mathrm{AC}_\\omega$. Let $(M,g)$ be a **nonempty**, connected,\nboundaryless Riemannian manifold, and let $d=d_g$ be its Riemannian distance.\nThe following conditions are equivalent.\n\n1. The metric space $(M,d)$ is complete.\n2. The Riemannian manifold $(M,g)$ is geodesically complete.",
              "uses": ["3.1"]
            }
          ],
          "derivations": [
            {
              "id": "step-1-1",
              "claim": "An explicit Euclidean ball proves H open and (0,1) proves it nonempty; the all-orders partial-derivative induction proves y^-2 smooth, and its positive quadratic form makes the resulting boundaryless smooth two-manifold Riemannian.",
              "step": "1.1",
              "inputs": ["F1", "given", "induction", "algebra"]
            },
            {
              "id": "step-1-2",
              "claim": "Every affine segment between two points of H has positive second coordinate, so H is convex and hence connected.",
              "step": "1.2",
              "inputs": ["F2", "given", "algebra"]
            },
            {
              "id": "step-1-3",
              "claim": "The global vertical and semicircle formulas have squared hyperbolic speed k^2; |k|=1 gives arclength parametrizations on all R and every nonzero k gives a global affine constant-speed parametrization.",
              "step": "1.3",
              "inputs": ["F3", "algebra"]
            },
            {
              "id": "step-2-1",
              "claim": "Every maximal nonzero-speed geodesic is the restriction of a globally defined classified geodesic and therefore cannot have a proper maximal interval; the zero-speed geodesic is globally constant, so every maximal domain is R.",
              "step": "2.1",
              "inputs": ["F3", "F4", "step 1.3"]
            },
            {
              "id": "step-3-1",
              "claim": "The verified nonempty, connected, boundaryless Riemannian manifold is geodesically complete, so the geodesic-complete-to-metric-complete implication of Hopf-Rinow makes its Riemannian distance complete; AC_omega enters only through the current F4 and F5 suppliers.",
              "step": "3.1",
              "inputs": ["A1", "F4", "F5", "step 1.1", "step 1.2", "step 2.1"]
            }
          ],
          "routine_steps": [],
          "boundaries": [
            {
              "case": "empty",
              "status": "checked",
              "evidence": "Step 1.1 exhibits (0,1) in H before Hopf-Rinow is applied, so the theorem's nonemptiness hypothesis is met."
            },
            {
              "case": "zero",
              "status": "checked",
              "evidence": "Step 2.1 treats zero initial velocity separately by its constant geodesic on all of R."
            },
            {
              "case": "one",
              "status": "not_applicable",
              "reason": "The promised Poincare upper half-plane and all calculations have fixed dimension two; the item quantifies over no dimension-one model."
            },
            {
              "case": "degenerate",
              "status": "checked",
              "evidence": "Step 1.1 proves positive definiteness for every nonzero tangent vector, while step 2.1 separates the degenerate zero-speed constant case from the two nonconstant families."
            },
            {
              "case": "endpoints",
              "status": "checked",
              "evidence": "Steps 1.3 and 2.1 verify that exp, tanh and sech parametrizations have domain all R and that maximality excludes every proper finite or infinite endpoint interval."
            },
            {
              "case": "nonempty-choice",
              "status": "checked",
              "evidence": "Step 3.1 invokes AC_omega only through the current maximal-geodesic completeness definition F4 and Hopf-Rinow F5; the manifold, connectedness, speed and extension calculations make no selections."
            },
            {
              "case": "iff-forward",
              "status": "not_applicable",
              "reason": "The item asserts a conjunction, not an iff; step 3.1 names the sole Hopf-Rinow direction actually used, from geodesic completeness to metric completeness."
            },
            {
              "case": "iff-reverse",
              "status": "not_applicable",
              "reason": "No converse is asserted or needed: geodesic completeness is proved directly rather than inferred from metric completeness."
            }
          ]
        }
      }
    }

## Checks actually run

- Explicit-path precheck: pass, 1 checked and 0 failing.
- Explicit-path real renderer/KaTeX check: pass, 1 file.
- Focused citecheck: pass, 1 item.
- Focused content policy using a temporary one-item manifest containing the
  repaired claim, dependencies, sources, strategy, and provenance: 1 scoped
  item, 0 errors, 0 warnings.
- Focused strict proof contract using the standalone payload above: 1/1 item,
  0 errors, 0 warnings.
- The current shared strict contract check correctly fails with one
  scope-missing-contract error for this item; canonical integration item 3
  resolves it.
- Full current batch-7 content policy: 127 scoped items, 5 errors, 0 warnings.
  All five are scope-item-missing findings for other active group-D items:
  fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold,
  fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic,
  fs-geodesic-completeness-means-the-manifold-is-compact,
  ex-geodesics-of-a-riemannian-product, and
  cex-a-complete-manifold-with-zero-global-injectivity-radius. None names this
  item, and this is not reported as a batch pass.
- validate-plan with research/plan-spec.json: exit 1 in the unfinished shared
  worktree, with 1,254 global dup-id errors and 3,840 redundant-prerequisite
  findings. Relevant orders 481 and 482 each still report 0 items; order 481
  has 14 redundant prerequisites and order 482 has one. This is the expected
  pre-splice mismatch, not a plan pass.

## Open obligations and next action

There is no unresolved mathematics or source uncertainty in the owned item.
The remaining obligations are the six canonical shared-file integrations
above, followed by their normal focused/batch checks and non-owner decisions.
The five currently absent items named by content policy and every other
batch-7 item remain solely with the active group-D author.
