# Batch 38 — Step 1 authoring notes

Run `numerical-optimization-dynamics-2026-10-16`; pair `NA-29`; beta batch 38.
The A page is `ceas-lemma-and-aubin-nitsche-error-estimates`; the B page is
`ceas-lemma-and-aubin-nitsche-error-estimates-examples`. The batch dependency
level is 2, with prerequisite batch 24 and scheduling input SHA-256
`e8550439fef5be6a02b177bd3d34853719a8096a1856fe08ac9827e78543ee0c`.

## Controlling design and recorded conflict

I read the complete NA-29 sections in `research/plan-numerical-analysis-track.md`
L412–424 and `research/plan-numerical-spatial-track.md` L310–344, the NA-29
row in `research/plan-spec.json`, and the supplier audit in
`research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

The `plan-spec.json` row at order 2360 explicitly selects the repaired spatial
plan and its incorporated contract as controlling. The older analysis-track
section has the same core route—Galerkin orthogonality, Céa, energy best
approximation, and conditional Aubin–Nitsche—but gives fewer supplier and
geometry limits. I followed the spatial contract: it keeps continuous
well-posedness and regularity as imports, requires the exact C²/W¹,∞/Countable
Choice branch for global H², and treats affine mesh conformity separately.
No scope was dropped to resolve this authority conflict.

The geometric hypotheses do not automatically meet: the inspected NA-28
matching affine mesh definition is for bounded polyhedral open sets, while the
global H² supplier is for bounded C² domains. The generic L² estimate and
`h^(r+s)` corollary therefore retain explicit primal/dual approximation
conditions. The `h^(r+1)` branch is not asserted for every Lipschitz or curved
domain. To instantiate both results on a curved domain, the owner should route
the geometry through PE17 or supply a separate, exact-domain mesh/regularity
argument. The A-page caveat records this gap without adding an unplanned pair
dependency.

## Inventory and dependency levels

The 12 item carriers are ordered by their in-run dependencies. Level 0: Galerkin
orthogonality; adjoint variational well-posedness; the Poisson adjoint H² bound;
and the local two-cell hat/quadratic H¹₀ membership lemma. Level 1: Céa
quasi-optimality. Level 2: Hermitian energy best approximation and the general
Aubin–Nitsche estimate. Level 5: the shape-regular affine FE primal estimate.
Level 6: the conditional `h^(r+s)` L² rate. The B-page levels are 2 for the
nonsymmetric sharp-factor example and 3 for the two-cell Poisson calculation
and reentrant-corner counterexample. The A page has 9 items and the B page 3,
well below the 100-item limit.

The local A-page lemma for the hat and quadratic functions was added because
the published interval weak-Poisson example is homed on a different B page and
cannot be a B-to-B dependency. Its proof constructs the smooth compactly
supported approximants directly. The B example then verifies the quadratic
weak equation and the discrete coefficient in its own carrier.

## Supplier and cross-batch audit

The published Lax–Milgram, weak-Poisson, Poincaré, global H², Hilbert-space,
finite-dimensional-closedness, form, Sobolev and Holder suppliers were read at
their actual item bodies and relevant proofs. Imported conventions and axiom
branches are explicit in the carriers. The Poisson H² item assumes a specified
Poincaré constant and uses the energy identity to remove the global regularity
estimate’s retained L² solution term; it does not import the stronger Poincaré
supplier branch.

Batch 38 consumes only these NA-28 draft items in its primal interpolation
proof: `def-matching-affine-simplicial-meshes`,
`def-reference-finite-element-and-unisolvent-dofs`,
`lem-unisolvent-dofs-define-reference-interpolant`,
`lem-affine-pullback-weak-derivatives-and-scaling`,
`lem-shape-regular-affine-simplex-scaling`, and
`thm-bramble-hilbert-on-reference-simplex`. Their actual statements and proofs
were inspected, and their levels recompute as 0, 0, 1, 1, 3 and 4. All six Step 1 author-readiness records now exist as ready following native batch24 success. This records author readiness only; no independent acceptance is asserted. The broader `thm-local-finite-element-interpolation-estimates` and
`thm-lagrange-point-evaluation-threshold-on-reference-simplex` branches are
not item dependencies and are not used.

The inherited batch24 NA10 page route is now reconciled by the producer in its cross-batch evidence: actual one-dimensional cardinal construction, uniqueness, remainder and finite evaluator bodies are present. They do not establish multidimensional simplex nodal unisolvence. Batch38 does not consume the broader local interpolation or Lagrange point-evaluation branches; its generic bounded-DOF/Bramble–Hilbert proof continues independently. The declared page edge and all scope remain. Owner interface evidence is in `research/numerical-optimization-dynamics-2026-10-16-owner-fe38-escalation.json`.

## Source reading and dispositions

All three source bodies were fetched in full, read at the locators below, and
stamped by `source-fetch-check`. The coverage record lists the results and
their dispositions. No retrieval failed, so no recovery attempt or
`source_resolution` entry was needed.

| Full-text source | Read locator | Items supported and disposition |
| --- | --- | --- |
| Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 26, [PDF](https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf) | Complete 14-page chapter; §§26.3.1–26.3.2, Lemmas 26.12–26.13, printed pp. 28–30. | Orthogonality, Céa’s `M/alpha` estimate and the Hermitian energy result; included. |
| Thomas Richter, *Die Finite Elemente Methode für partielle Differentialgleichungen*, [complete notes](https://numerics.ovgu.de/teaching/numpde/skript.pdf) | Complete 188-page notes; §3.1.1, Lemmas 3.2/3.4/3.6, pp. 52–54; §3.3.1–3.3, Lemmas 3.23–3.28, pp. 75–79; §3.4.1, Lemmas 3.34/3.36, pp. 83–85. | Discrete solvability, adjoint problem, L² duality, reference interpolation and affine scaling; included. The source leaves its global interpolation proof as an exercise; the carrier supplies the full scaling-and-sum proof. |
| Thomas Wick, *Numerical Methods for Partial Differential Equations*, [complete notes](https://www.thomaswick.org/links/lecture_notes_Numerics_PDEs_Oct_12_2019.pdf) | Complete 274-page notes; §7.11.3, Proposition 7.185 and proof, printed pp. 133–134. | Symmetric Poisson Aubin–Nitsche model and the two-cell example; included as motivation, with the finite calculation recomputed in the carrier. |

The source stamps are in `research/numerical-optimization-dynamics-2026-10-16-batch-38.coverage.json` (PDF page counts 14, 188 and 274). The new H¹₀ membership lemma is proved from the repository’s actual cutoff, weak-derivative, Sobolev-closure and calculus suppliers; it is not attributed to an uninspected external result.

## Checks and Step 1 decisions

Historical author checks before the owner repair: `proof-layout` reported 12 items / 46 steps / 0
defects; `precheck` passes 12/12; `proof-contract --strict` reports 0 errors
and 0 warnings for 12/12; `rendercheck` passes the 12 item carriers and both
pages (14 files); focused `depcheck` passes the 12 assigned items and their
prerequisite cycles; source fetch verifies 3/3 sources with 0 newly stamped.
The scoped dependency recomputation checked all 12 batch-38 items plus the six
NA-28 suppliers (18 total), with no level mismatch or cycle. The manifest,
carrier IDs/dependencies, A/B page inventories and proof-contract scope also
match.

Historical author closeout reported 10 ready decisions and 2 escalations for then-absent NA28 readiness. Those six readiness records are now present. Following verified native batch38 drain, the owner corrected the conditional L2-rate proof to apply the actual Aubin–Nitsche final norm bound and combine it with Céa, without the erroneous unsquared intermediate inequality or division. Its Statement is unchanged. The exact supplier Statement quote remains current in the proof contract; changed derivation mirrors and zero-case evidence were updated. Native readiness records remain untouched for root's owner route. Full preimages and native evidence are archived under `research/numerical-optimization-dynamics-2026-10-16-owner-fe38-evidence/before/`. The actual parabolic consumer retains the same static constant and explicit uniform primal/dual hypotheses and needs no change.

The historical author run-wide item-level scan recorded 114 errors outside this scoped
result: 88 empty scaffold inventories and 26 stale labels in the partially
authored run. The batch-24/38 scoped recomputation above is clean. Two
intermediate, read-only commands were accidentally invoked without item
selection (`depcheck --help` and one bare precheck); their corpus-wide outputs
were not used as batch evidence. The final scoped dependency, precheck, render,
contract and layout results above are the recorded batch checks. No runtime,
owner plan, published item, verdict, blocker file or engine state was changed.

Owner post-repair required check: `node tools/proof-layout.mjs items/cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation.md` returned `proof-layout: 1 items, 4 steps, 0 defects` (exit 0). No other checks were rerun; root owns current recertification.
