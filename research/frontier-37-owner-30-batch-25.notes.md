# frontier-37-owner-30, batch 25 — Step 1 scaffold notes

Owned pair: `harmonic-hardy-classes-and-fatou-boundary-limits` (A, order 835)
and `harmonic-hardy-classes-and-fatou-boundary-limits-examples` (B, order
836). The manifest has 11 A items and three B items. Each was scaffolded in
prerequisite order, with an outcome recorded through `tools/step1-decisions.mjs`
before proceeding to the next. All 14 currently have `ready` records. Later
corrections to two proof strategies, two explicit dependency lists and the
nonnegative convention for the positive-harmonic statement refreshed only the
affected records; unchanged ready items and records were preserved. Readiness
is a scaffold assessment, not Step 3 mathematical approval. No published
item, shared plan, engine state, or verdict was edited.

## Instructions and plan reconciliation

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
`briefs/beta-scaffold.md`, the assigned batch task and manifest, the complete
CA-HP-1 design in `research/plan-complex-analysis-track.md` lines 3685–3720,
the current `research/plan-spec.json` entries for both pages, the run evidence,
the dependency ledger, and the statements and relevant proofs of the actual
published suppliers. No
`research/frontier-37-owner-30-owner-authoring-direction.md` exists.

The design states its `requires` in broad track shorthand. The controlling
plan spells out nine page prerequisites, explicitly including
`the-duality-of-lp-and-lq`, `density-separability-and-convolution-in-lp`,
`banach-alaoglu-goldstine-and-krein-milman`, and
`reflexivity-and-eberlein-smulian`, which the design shorthand does not name.
The plan also names
`green-functions-harmonic-measure-and-conformal-invariance` as a page
prerequisite; it is the design's CA-HM-1 placement, not an item used as a
proof supplier in this scaffold. The manifest follows the current plan's
exact nine-page list. There is no contrary mathematical claim in the design.
Its bounded-harmonic Fatou conclusion is retained as a separate corollary,
and all promised B phenomena are present. CA-HP-2 remains a future consumer,
not a supplier.

Four local joints precede their consumers: the finite-measure Poisson
extension, circle maximal/cone conventions, a circle weak-(1,1) measure
estimate, and the bounded-harmonic Fatou corollary. The published Euclidean
Hardy–Littlewood theorem concerns functions on R^n and does not by itself
state the finite-measure circle estimate; the local lemma closes that gap.
The endpoint `h¹` representation is proved before the `p>1` representation,
as the design requires. The statement of positive harmonic correspondence
uses **nonnegative** functions and measures, including the zero case.

## Proof and dependency audit

The published disc Poisson integral and disc Dirichlet theorem cover real
continuous data. The first local definition extends the kernel to finite
complex measures and L¹ densities; harmonicity and continuous-data arguments
are applied componentwise. The Poisson contraction proof uses dominated
convergence for differentiation under the boundary integral, real Jensen,
Fubini, finite-p density, and the published approximate identity. The `h¹`
argument obtains a weak-star limit of bounded radial measures, identifies it
through the Poisson formula on smaller discs, and recovers the exact variation
norm by complex Riesz–Markov. It does not infer an L¹ density from `h¹`.
For `1<p<∞`, reflexive weak subsequences identify the Lp boundary function.
At infinity, real L¹ duality gives real and imaginary densities and the
published complex finite-simple dual norm lemma supplies the **sharp** complex
L∞ bound. No arbitrary L∞ norm-limit is claimed.

For the Fatou theorem, the local weak-(1,1) circle lemma uses Fatou's lemma
for openness of maximal-function superlevel sets and a finite disjoint-arc
selection. The Poisson maximal estimate uses radial monotonicity of the
kernel and the cone geometry. Density of continuous data, the weak estimate,
and Chebyshev give limits for each aperture; a countable integer-aperture
intersection gives every finite aperture. The boundary-atom example keeps
the singular `h¹` branch visible. The tangential counterexample uses arcs at
angles `t_n=2^-n` with half-widths `w_n=2^-3n`; at the target point the radial
Poisson mass is `O(ε)` as `r=1-ε↑1`, while values at
`(1-w_n)e^{it_n}` stay bounded below and the approach ratio tends to infinity.

The published torus and Lp density interface assumes countable choice, so
that assumption is explicit where consumed. Full AC is explicit in the
`h¹`, `p>1`, bounded-harmonic and positive-measure representation statements:
it supplies DC for complex Riesz–Markov, the ultrafilter lemma for the
published weak-star subsequence result, and Hahn–Banach/reflexive weak
compactness where used. The L¹ Poisson/Fatou path retains its countable-choice
form. No proof path reaches a Recorded result or
`deferred-set-theory-beyond-choice`.

An independent traversal of actual `deps` from the 14 owned roots reached
1,468 item IDs: 14 owned and 1,454 published external items. The 36 distinct
direct external IDs and their necessary statements/proofs were checked for
hypotheses, direction, conventions and choice strength. No missing ID,
unpublished supplier, cross-batch draft supplier, Recorded result, or proof
dependency cycle was found. The B items are leaves. No defect was established
in an actual published prerequisite, and no page split or new prerequisite
pair is needed. The consumer-batch input is `[]`; the ledger refresh found no
batch-25 edge. Page membership of planned prerequisites was not treated as a
proof check.

## Full-text sources and harvest

The 47 result-level dispositions and exact supported IDs are in
`research/frontier-37-owner-30-batch-25.coverage.json`. Two independent full
treatments support the A page:

| Treatment | Full argument inspected |
|---|---|
| [Axler–Bourdon–Ramey, *Harmonic Function Theory*, 2nd ed.](https://www.axler.net/HFT.pdf) | Chapter 6, printed pp. 111–120 and 128–137 (PDF pp. 116–125 and 133–142): Poisson integral, contraction, weak-star/Hardy representations, maximal bounds, covering, weak type and Fatou proofs. |
| [Herbert Koch, *Notes for Harmonic and Real Analysis*](https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf) | Chapter 3 §§1.2.1–3, pp. 35–37: Theorem 3.4, Lemmas 3.5 and 3.7, Definition 3.6 and Theorem 3.8 with their complete arguments. |

`source-fetch-check --stamp` fetched both complete PDFs and recorded
Axler–Bourdon–Ramey as 2,258,926 bytes/260 pages, SHA-256 prefix
`4e64124f7e36993e`, and Koch as 691,220 bytes/118 pages, prefix
`3f0f0e59c81d077b`. The subsequent unstamped check resolved 2/2. The
design-listed Purdue Schlag URL initially returned HTTP 404 and a later
full-text recheck still returned 404, despite search-index snippets. An
alternate Yale location had a TLS certificate failure; its insecure response
was an unrelated two-page document. Snippets and those responses were not
treated as full text, and no result was harvested from them.
Koch supplied a complete independent treatment, so no source was dropped,
no source-count waiver was used, and no `source_resolution` claim is made.
The coverage marks stronger or general source results that the pair does not
assert as out of scope with specific reasons, including general singular
measure Fatou theory and the L¹ norm-convergence characterization of absolute
continuity.

## Checks and remaining run work

- `coverage-checklist` with `--require-destination`: **pass**, one A page,
  47 harvested results, zero errors or warnings. `source-fetch-check`:
  **pass**, 2/2 full-text sources resolved.
- Whole-run `manifest-deps` and `content-policy --manifest-only`: **pass** at
  the check snapshot, 551 scoped items, zero errors and zero policy warnings.
  `validate-plan research/plan-spec.json`: **pass**; the plan still reports
  319 planned pages without item lists and redundant-prerequisite warnings.
- `extcheck --quiet`: **exit 0**, with 40 published Recorded-result warnings
  outside this pair's proof closure.
- `item-dependency-levels check --run frontier-37-owner-30`: **exit 1** only
  because 14 pages in other batches still had empty scaffold inventories at
  the check snapshot. Independent batch-25 recomputation found 14/14 correct
  labels (levels 0–4), with no cycle or mismatch.
- Whole-run Step 1 check was still open at its snapshot (14 empty pages and
  72 unclosed items in other batches). A direct batch-25 check found **14/14
  current ready records**, with no unclosed owned item.

There is no unresolved batch-25 mathematical or source finding. Step 3 still
has to author and independently review the scaffold proofs.
