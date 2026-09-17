# Step 3a scope review — Compact Lie Groups, Maximal Tori, and Peter–Weyl Theory

- Run: `phase-2-remaining-27` (role: alpha, this pair only; batch 12)
- A page: `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (plan order 507, DG-33)
- B page: `compact-lie-groups-maximal-tori-and-peter-weyl-theory-examples` (plan order 508)
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27 --page <A> --decision sufficient`.
  Receipt `research/phase-2-remaining-27-step3a-review-compact-lie-groups-maximal-tori-and-peter-weyl-theory.json`
  (scope hash `5fd35544426a6a8fe1f1a0db38fd4f70799fa1e921e7ed99877dae83fc94e3b5`,
  recorded 2026-09-16T15:13:43.761Z; re-verify with
  `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope`).
- This report judges scope only: whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item contract, plan entry or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-12.pages.json` | Current A inventory (54 items, in order) and B inventory (12 items, in order); page `requires`; companion pairing; all item deps |
| `research/phase-2-remaining-27-batch-12.coverage.json` | DG-33 source record: 3 fetch-verified treatments, 24 harvested rows, all `included` or `inline` |
| `research/phase-2-remaining-27-batch-12.notes.md` | Step-1 repair record: 112 items total, two added well-definedness items, source re-harvest, choice ledger, changed-locator fix, gate results |
| `research/phase-2-remaining-27-batch-12.cross-batch-dependencies.json` | 66 verified consumer rows (7 page + item edges); supplier statements read on the current manifests |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (DG-33 entry) | Drift verdict `no-drift`; the run's controlling cross-track closure |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding direction: DG-33 proves the compact Weyl character formula locally in the denominator → numerator → quotient order, descends from `Z(G)^0 × G_der^sc → G`, and neither rho nor half-roots need lie in `X^*(T)` |
| `research/plan-differential-geometry-track.md` DG-33 (from line 8238, sources block to line 8495) | Prose design: A items, `fs-` items, B items, sources/locators, well-definedness table, choice ledger, unresolved seams |
| `research/plan-spec.json` pages 507–508 | Page identity, order, companion, exact `requires` for both pages; item lists empty, so no competing order |
| `tools/step3-decisions.mjs check --phase scope` | Confirms this pair is closed after recording; the 13 outstanding 3a work rows belong to other pairs |
| Knapp, *Lie Groups Beyond an Introduction*, 2nd ed. (author-hosted PDF) | Re-read extracted text for Theorem 4.20 and Lemmas 4.17–4.19, Theorem 4.34, Theorem 4.36, Theorem 4.50, Theorem 4.54 |
| Conrad–Landesman, *Compact Lie Groups* (author-hosted PDF) | Re-read §15 Theorem 15.3 statement and proof opening (degree-`#W` map `q: (G/T) × T → G`, normalized volume-1 forms, Jacobian `det(Ad_{G/T}(t^{-1}) − 1)`) |
| Web check (Peter–Weyl statements, Weyl integration normalization) | Independent confirmation that the normalized matrix-coefficient basis, multiplicity `dim π`, and the `1/|W|`-weighted integration formula are the standard conventions |

## Role in the library

DG-33 is the compact-group peak of the Lie/differential-geometry track. It consumes
the published DG-18/21/25–29 pages by page-level `requires`, the run-local
DG-30/31/32 scaffolds of batches 11–12 by item edges, RG-18 Haar measure, and the
functional-analysis pages `hilbert-space-geometry-and-riesz-representation`,
`orthonormal-bases-parseval-and-fourier-series`,
`compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` (batches 1–3,
scaffolded), plus `stone-weierstrass-general`. The drift review judged this
closure exact and recorded no undeclared edge.

The A page is a supplier for three planned pages: its B companion (page-level
only), `real-forms-and-real-semisimple-lie-algebras` (which uses
`thm-conjugacy-of-maximal-tori` and otherwise builds its own restricted-root /
Cartan-subalgebra machinery) and `moment-maps-and-symplectic-reduction` (which
uses the normalized Haar measure and Haar translation/conjugation invariance
items for averaging). The B page supplies nothing: no in-run item outside the B
page depends on any B item, and no published consumer edge exists. This is the
intended A/B shape for the pair.

## Inventory against the prose design

All 47 enumerated DG-33 design items (§A-page items 1–47 at design lines
8246–8433) are present, in design order, with their design kinds; all six
designed `fs-` items (lines 8435–8448) are present; all 12 designed B items
(lines 8449–8462) are present in order. Step-1 added two well-definedness items
that the design had folded into prose:

- `prop-weyl-vector-is-the-sum-of-fundamental-weights` — supplies rho before the
  Weyl denominator lemma (design items 44–45 assume rho as a character on the
  cover);
- `prop-weyl-jacobian-is-well-defined-and-weyl-invariant` — the design asserts
  Jacobian independence/invariance inside its Jacobian definition (design item
  24 prose) and the integration formula (item 25) needs it.

Both are obligations the design already intended, not new topics; no design item
was dropped, no pair member was moved, and the total (66 items) is far below the
60-item A-page cap with a 12-item B companion.

Scope-relevant design choices are preserved exactly:

- definition 27/28 use the *actual* character lattice `X^*(T)`; classification
  30–33 keeps `Q ⊆ X^*(T) ⊆ P` and marks central quotients as marked quotients,
  with abstract classes taken modulo root-datum automorphisms;
- item 19 proves the connected-centralizer theorem rather than only finiteness
  of `W`; item 23 supplies compact root `SU(2)` coroots and the reflection
  action; item 20 covers class-meets-`T` and the Weyl-orbit description;
- Peter–Weyl (39) is proved from convolution/Hilbert–Schmidt/compact-spectral
  inputs the design names, and density (40) is separated from finite equality,
  which is also the subject of `fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients`;
- the Weyl character chain (45–48) follows the owner-mandated local order and
  the finite central cover `Z(G)^0 × G_der^sc → G`, with lift-independence and
  continuous extension across singular points; no DG-32/RL-7 character formula
  is imported.

One design/source correction is recorded and is scope-positive: the design's
second Knapp locator "Theorem 4.54" for the analytic Weyl group is right, but the
Weyl integration formula is *not* Knapp 4.54; coverage correctly cites
Conrad–Landesman §15 Theorem 15.3 as its proof-bearing source and states the
misattribution explicitly. I re-read both: Knapp 4.54 is the compact root
`SU(2)`/analytic-Weyl statement, and Conrad–Landesman 15.3 is the normalized
Weyl integration formula with the degree-`#W` covering argument.

## Source coverage assessment

The coverage file records 42 harvested results for batch 12, 24 of them for
DG-33, across three fetch-verified treatments:

- Knapp, *Lie Groups Beyond an Introduction*, Ch. IV §§1–8, Ch. V §8, Ch. VI
  §§1–2, Ch. VII §1 (locators name Theorems 4.20, 4.34, 4.36, 4.50, 4.54, 4.69,
  5.107, 5.110, 5.113, 6.11 and the Lemmas 4.17–4.19 route);
- Conrad–Landesman, *Compact Lie Groups*, §§6–15, §§20–21 and Appendices K, R,
  V, Z (Theorem 15.3 for Weyl integration; Theorem V.1.1 for the `P` endpoint);
- Etingof, *Lie Groups and Lie Algebras*, Lecture 42 §42.1, Theorem 42.4,
  Corollaries 42.5–42.6 (finite central cover of a compact connected group).

Every harvested row is `included` or `inline` with an exact consuming item;
there are no `dropped` rows, no failed retrievals, no source-count waivers and
no owner source escalations. Fetch records carry byte counts, page counts and
SHA-256 prefixes. I re-verified the load-bearing source text directly rather
than accepting the coverage rows: Knapp's Lemma 4.17 (strong continuity by
`L^2` approximation), Lemmas 4.18–4.19 (disjoint-cover strong continuity and
translation-invariant closure), Theorem 4.20 and its contradiction proof, the
conjugacy theorem 4.34, existence/containing theorem 4.36, centralizer theorem
4.50 and analytic-Weyl theorem 4.54, plus Conrad–Landesman Theorem 15.3's
statement and proof opening. The normalized statements match the standard
literature, and the coverage's own correction of the Knapp Weyl-integration
locator is accurate.

Coverage adequacy verdict: for the intended subject — Haar measure and
averaging on a compact group, unitarizability/complete reducibility, Schur
orthogonality, bi-invariant metrics, tori and maximal tori (existence,
containment, conjugacy, rank), the analytic Weyl group, Weyl integration, tori
character/cocharacter lattices and root data up to isogeny, central quotients,
Peter–Weyl with density/separation/matrix-group consequences, compact highest
weights, the Weyl character formula, the representation ring, and the six
designed false statements — the three treatments plus the declared Lie/FA
suppliers are adequate. No omitted topic in the design's own scope lacks a
source.

## Honest uncertainty and non-scope observations

No scope-level uncertainty remains that would change the verdict. Two
observations are recorded so the owner can weigh them, and neither is a scope
gap under the design:

1. The B page contains no worked Weyl-character-formula computation (the
   `SU(2)` character/dimension evaluation sits on the DG-32 page), so the most
   advanced A-page result is exercised only through the representation-ring
   corollary. This is a possible enrichment, not an omission relative to the
   design; the design's B inventory is realized exactly.
2. The A page's proof-bearing load is heavy (54 items including the
   Peter–Weyl analytic chain and the local Weyl character chain). That is a
   build-risk observation for Step 3b, not a scope defect.

Potentially defective **published** items already carried by the batch-11
notes (Jordan–Chevalley AC metadata omission; the three published
Cartan/root-system interfaces superseded by planned replacements) are not
suppliers of this pair: the owned manifest depends on the planned replacements,
and the affected proofs declare AC locally. They remain canonical-ledger debt
for the owner and are not re-adjudicated here.

## Verdict

**sufficient** for both pages of the pair. The planned definitions, results,
examples and false statements cover the intended subject of compact Lie
groups, maximal tori, Weyl integration/character theory and Peter–Weyl theory,
with design-consistent boundary items and adequate, fetch-verified, fully
harvested source coverage. No omissions are named, no enrichment is required,
no pair merger is proposed, and Step 3b may author against this scope.
