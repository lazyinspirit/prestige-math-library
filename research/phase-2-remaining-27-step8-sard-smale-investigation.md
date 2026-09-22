# Step-8 Sard–Smale scope investigation

Date: 2026-09-22. Bounded mathematical investigation, followed by an explicitly
authorized update to the existing canonical ledger finding, its single index
row, and affected classification counts. No item, page, scope carrier,
engine state, or historical certification was changed by this investigator.

## Disposition

Resolve the routing ambiguity locally, but retain the mathematical repair as
existing Phase-3 published-consumer debt. The theorem really has a published
identity, `thm-sard-smale-residual-regular-values-for-fredholm-maps`, on
`library/differential-topology/stable-unstable-manifolds-and-morse-smale-transversality.md`.
Its current proof is not dependency-closed. Publication and old audit stamps
do not discharge that debt. Adding another theorem to the FA pair would
duplicate the published identity and depart from the binding inventory.

The prior scope evidence's references to `thm-parametric-transversality` and
`lem-sard-*` are inadequate: those are finite-dimensional results, not the
infinite-dimensional theorem. Replace that evidence with the exact published
identity, existing Phase-3 repair plan, and the following source distinctions.

## Source evidence and exact comparison

Read Abbondandolo–Majer, *Lectures on the Morse Complex*, Theorem 2.19,
printed p. 78, from the existing complete cached primary-source text
`/tmp/step8work/txt/montreal.txt`. Its PDF is
`/tmp/step8work/src/montreal.pdf`, SHA-256
`f213f283987b78bdb116f346b6260be79407d2fb8051b89a4215764b752d3df6`.
No new Montreal retrieval was claimed or attempted. The theorem states:
for C^h Banach manifolds M,N, h >= 1, M Lindelöf, and a C^h Fredholm
map of index m with h > max(0,m), the regular values are residual in N.
The next sentence is “The proof can be found in Smale (1965).” Montreal
does not provide a proof of Theorem 2.19; a reference locator saying
“Theorem 2.19 proof” must not be represented as a proof read there.

Fetched successfully on the initial HTTP attempt:
<https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf>.
Local PDF `/tmp/step8-sard-smale-original.pdf`, SHA-256
`a92ccd113a3243c788e5beb33f2560f489f6148cb7db840fa6e392f075350dbb`.
Read the extracted complete article with PyMuPDF after the unavailable
`pdftotext` command; no source-recovery retries were needed. Smale (1965),
*American Journal of Mathematics* 87, 861–866, §1 assumes connected
countable-base Banach manifolds, proves residual regular values in Theorem
(1.3), and establishes local properness in (1.6), pp. 862–863. Text extraction
on p. 863 has damaged/truncated lines; this is not claimed to be a flawless
line-by-line reading of that page. The local argument below was independently
checked using the fully readable current FA normal-form supplier.

The published library statement uses countable-base manifolds and fixed
index m. It is the genuine countable-base Sard–Smale specialization; it does
not literally supply the source's more general Lindelöf-domain/arbitrary-target
formulation. The current FA manifold definition is also second-countable.
No current scoped consumer inspected requires that stronger generalization.
Finite-dimensional Sard asserts null critical values in Euclidean spaces;
finite-dimensional parametric transversality applies Sard to a parameter
projection between finite-dimensional manifolds. Neither alone proves
Banach-manifold residuality.

## Binding scope and actual gap

Read `CLAUDE.md`, `README.md`, relevant Step-8 workflow controls, and the
run's complete owner-authoring direction. The latter binds FA §14.5A in
`research/plan-functional-analysis-track.md`: its exact 18-item A inventory
ends with local Fredholm reduction/index constancy and the split-kernel
warning. It supplies prerequisites for the published DT-4 theorem; it does
not owe another Sard–Smale theorem.

The existing canonical ledger section
`banach-space-differential-calculus-and-banach-manifolds` already maps the
published theorem to the FA suppliers. The authoritative DT plan,
`research/plan-differential-topology-track.md` §12.5 and audit finding 7,
explicitly requires two additional DT-4 lemmas before repairing Sard–Smale:

- `lem-countable-locally-proper-restrictions-cover-a-fredholm-map-source`;
- `lem-critical-values-on-each-proper-restriction-are-nowhere-dense`.

Neither item currently exists in `items/`. They are planned DT-4 repair
obligations, not current FA inventory. The published theorem currently has
only the old Fredholm definition, residual-set definition, and finite-dimensional
Sard as dependencies. Proof 1.1 asserts the local reduction without a supplier;
2.1 asserts local properness, countable closed restrictions, closed critical
images and empty interior without deriving them. Moreover, its description of
a map “between finite-dimensional spaces” must retain the infinite-dimensional
parameter in the normal form: it is each fixed-parameter slice that is finite
dimensional.

The needed Phase-2 normal-form item now exists, fully authored but **draft**:
`items/lem-local-finite-dimensional-reduction-for-a-fredholm-map.md`, SHA-256
`47b3f76d8dd922a1bd1b55453788db859849f482c5509c0adf6374ffa88a6cda`.
Its proof was read in full: implicit function applied to the range coordinate
gives `(u,v) -> (u,g(u,v))`, with finite-dimensional v and obstruction target.
It explicitly assumes AC; a repair invoking it must propagate and declare AC.
The associated FA definitions and Banach regular-value theorem also remain
draft in this run. Supplier publication is still required before the planned
published-consumer cutover.

Current published theorem SHA-256:
`9a71045c7a5b8f20e2305358f8f0c9ff6f3fe4cc6950bff27dfab6830307d49e`.
It is absent from the immutable Step-7 frontier. This is existing published
proof debt, not an authorized Step-8 frozen-item repair.

## Concrete Phase-3 proof strategy

From the normal form choose smaller product neighborhoods, restricting the
kernel variable to a compact closed ball. A convergent sequence of image
points forces convergence of the range coordinates; compactness gives a
subsequence of kernel coordinates, and the normal-form inverse then gives
convergence in the source. Choose closed restrictions inside the coordinate
domains so limits stay inside them, and localize target charts appropriately.
This proves properness/closed-image claims directly; it does not assert
compactness of an infinite-dimensional closed ball. Countable-base source
localization supplies a countable cover by such closed neighborhoods.

The derivative of `(u,v) -> (u,g(u,v))` is surjective exactly when D_v g is
onto the finite-dimensional obstruction space. Nonsurjectivity is closed
here, so the proper restriction takes its critical subset to a closed set.
For each fixed u, finite-dimensional Sard says the critical values of
`v -> g(u,v)` are null at the threshold h > max(dim(kernel)-dim(cokernel),0).
Thus a nonempty product-open target set cannot lie in the critical image:
its fixed-u section would contain a nonempty open set of critical values.
If the obstruction space has dimension zero, every point in this normal
form is regular and there is no critical image. The closed critical images
are therefore nowhere dense; their countable union contains every critical
value. This supplies the residual conclusion, with vacuous regularity off
the image. The fully authored category lemmas must include the localization
and choice bookkeeping rather than citing this report as their proof.

This is feasible planned DT-4 work using existing mathematical ingredients,
but it requires two new proof-bearing local lemmas, the published theorem's
proof/dependency and AC-interface repair, and its authorized certification
and impact handling. It is not a small in-scope FA metadata remedy.

## Minimal proposed shared-record correction

For decline `0b49a2e785a6f08fb00e5dd1281f8756eb62475dd5c7279b9a401df1352ba495`
(group e, batch 3, source Theorem 2.19), preserve `deferred` and route
`owner-decision` to the existing DT-4 page / Phase-3 published-consumer repair,
as supported by the engine's allowed destination representation. State that
the FA prerequisite obligation is met at draft-content level, while published
proof closure is pending. Explicitly record that the broader source variant
is not silently asserted or an additional owed FA theorem.

The subsequent authorized ledger integration moved the existing single
classification row from U-P to defect-focused audited/pending Phase-3
classification A-P, with this bounded audit, exact draft supplier mapping,
two missing DT lemma IDs, and AC propagation. Do not create a duplicate debt
entry or mark the theorem repaired. A direct full audit of all its Euclidean
Sard prerequisite proofs was not performed; this is not whole-closure
certification. The original classification was verified against the enclosing
index heading during integration; it was U-P, not U-C. The existing
regular-value supplier mapping is useful to the
broader DT cutover but is not logically necessary for the residual-values
argument itself.

Live state was verified with autopilot status: `phase-2-remaining-27` is
paused at `8-scope`, no agent dispatch in flight, Step 7 frozen; Git HEAD
was `449fd8efc`. These are observation-time facts, not instructions to
steer the engine. No Step 7 reopening or new page is proposed.
