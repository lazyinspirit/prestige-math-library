## Your assignment — the two B pages: batch 5 (circle) and batch 6 (Goursat/Cauchy)

Run `frontier-15`, batches 5 and 6. The pairs are
`library/topology/the-fundamental-group-of-the-circle.md` +
`…-examples.md`, and
`library/complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain.md` +
`…-examples.md`. All items are at `items/<id>.md`, `status: draft`. The batch proof
contracts are `research/frontier-15-batch-5.proof-contracts.json` and
`research/frontier-15-batch-6.proof-contracts.json`.

Read these items in full, every numbered step against every cited item on disk:

Batch 5 B page:
- cex-unit-length-interval-need-not-embed-in-real-line-mod-integers
- ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop
- ex-a-surjective-circle-loop-of-degree-zero
- ex-trigonometric-circle-loops-have-their-integer-degrees
- cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic
- ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected
- fs-every-continuous-self-map-of-the-circle-is-nullhomotopic

Batch 6 B page:
- ex-goursat-triangle-integral-of-z-squared
- ex-goursat-four-triangle-boundary-cancellation
- ex-cauchy-integral-formula-exponential-over-z-minus-one
- ex-cauchy-integral-formula-cosine-third-order-pole
- cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral
- cex-connected-domain-need-not-be-star-shaped
- fs-goursats-theorem-requires-continuity-of-the-derivative
- fs-every-continuous-function-on-a-convex-domain-has-a-primitive

**Focus for this group. These are witnesses and computations, so check them by
arithmetic, not by reading.** Several carry `provenance.statement: ai-generated`
constructions; for each such item, actively try to break the Statement before you
assess its proof. Five of the batch-6 items were rewritten hours ago after an
independent reader found fatal defects — read the current text as fresh text and give
the repairs no credit.

1. **Recompute every number.** For `ex-goursat-triangle-integral-of-z-squared`,
   integrate `z^2` over each of the three oriented edges of the triangle `0\to1\to i\to0`
   and check the three stated values and their sum. For
   `ex-cauchy-integral-formula-exponential-over-z-minus-one`, check the stated contour,
   the interior point, and the value `2\pi i\,e^{1}` (or whatever is on disk) against
   the formula's hypotheses. For `ex-cauchy-integral-formula-cosine-third-order-pole`,
   check the `n = 2` higher-derivative formula's factorial, the derivative
   `\cos''(z) = -\cos z`, the evaluation point and the sign.
2. **The two batch-6 counterexamples.** For the annulus counterexample, check the stated
   function, the stated closed contour, and the computed nonzero value — and check that
   the domain really is an annulus (or the punctured plane) on which the function really
   is holomorphic. `\oint z^{-1}\,dz = 2\pi i` over the unit circle is the standard
   witness; verify the parametrisation and the polar/exponential step actually license
   each other. For `cex-connected-domain-need-not-be-star-shaped`, check the exhibited
   domain is (a) open, (b) connected, and (c) genuinely not star-shaped **for every
   choice of centre**, not merely for one obvious centre — a proof that fixes a single
   candidate centre is an unlicensed inference.
3. **The two batch-6 false statements.** `fs-goursats-theorem-requires-continuity-of-the-
   derivative` should be refuted by the fact that Goursat's proof assumes only
   differentiability; check the refutation cites the on-disk Goursat theorem's actual
   hypotheses. `fs-every-continuous-function-on-a-convex-domain-has-a-primitive` should
   be refuted by a continuous non-holomorphic function with no primitive — check the
   witness (`\bar z`, or `|z|`, or similar) and that the contradiction derived really
   uses the closed-contour consequence of having a primitive.
4. **Batch 5's witnesses.** `cex-unit-length-interval-need-not-embed-in-real-line-mod-
   integers`: check the map, the failure of openness, and — importantly — what the
   Statement claims. If it claims no embedding exists, a proof that **one particular
   map** fails to be an embedding does not establish it; a claim that no continuous
   injection is an embedding needs a real argument (e.g. compactness of `[0,1]` and
   Hausdorffness of the target make every continuous injection an embedding — so a
   Statement about the **half-open** interval `[0,1)` behaves differently from one about
   `[0,1]`). **State exactly which interval is on disk and whether the Statement is
   true for it.** `ex-a-surjective-circle-loop-of-degree-zero`: exhibit the loop, verify
   it is surjective and that its lift returns to its start. `cex-based-circle-loops-with-
   the-same-endpoints-need-not-be-path-homotopic`: check the two loops' degrees differ.
   `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic`: check the refuting
   witness is a self-map of nonzero degree and that the degree obstruction cited is
   about self-maps, not about loops, or that the reduction between them is proved.
5. **Provenance.** Report any `deps` edge in these fifteen items whose target has
   `provenance.statement: ai-generated`, and any item whose own Statement is
   `ai-generated` and which another item depends on.
