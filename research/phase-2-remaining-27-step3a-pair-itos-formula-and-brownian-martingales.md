# Step 3a scope review — Ito's formula and Brownian martingales

- Run: `phase-2-remaining-27` (role: alpha, this pair only; batch 8)
- A page: `itos-formula-and-brownian-martingales` (plan order 288.139, 21 items)
- B page: `itos-formula-and-brownian-martingales-examples` (plan order 288.14, 8 items)
- Scope decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/phase-2-remaining-27-step3a-review-itos-formula-and-brownian-martingales.json`)
- Scope is judged here, not proof correctness. No scaffold, item contract, plan,
  page, batch file, or owner record was edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-8.pages.json` | Current A inventory (21 items, in order), B inventory (8 items, in order), `requires` (9 exact page IDs), companion pairing; sibling pair PT-21 shares the batch file |
| `research/phase-2-remaining-27-batch-8.coverage.json` | A-page source record: 2 fetch-verified complete treatments, 26 harvested rows (15 van der Vaart + 11 Lawler), 4 out-of-scope rows with reasons |
| `research/phase-2-remaining-27-batch-8.notes.md` | Scaffolder record: the two inserted local lemmas, the C^3-first Ito route, the closed-range representation route, the generator caveat, the AC ledger, all batch gate results |
| `research/phase-2-remaining-27-batch-8.cross-batch-dependencies.json` and `research/phase-2-remaining-27-cross-batch-dependencies.json` | 25 batch-8 edges, every one `verified`; 2 page edges and 13 item edges enter this pair from batch 7 |
| `research/plan-probability-track.md` | Prose design: §0A.3 exact `requires` (L273); §0A.3 stale-edge removal order (L279–283); §0A.7 seam rule; §5 PT-22 (L2113–2186: requires L2117, source backing L2121–2127, 19 A items L2131–2154, hard-proof plan L2156–2173, 8 B items L2175–2186); §6 forward-ref row (L2211); §7 obligation rows 43–44 (L2272–2273) and 50 (L2279); §8 choice-ledger row (L2315); §11.0 acquisition row AV (L2428); §11.2 Durrett row (L2517); §11.5 van der Vaart rows (L2591–2601); §11.6 Pitman rows (L2664–2669); §11.7 Lawler rows (L2730–2734) and Yoshida row (L2755); §11.9 source matrix PT-22 (L2801); §13.2 enrichment (L2861) |
| `research/plan-spec.json` | Page identity, order, companion and exact `requires` for both pages (288.139/288.14); consumer entries for `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` and `partial-differential-equations-and-characteristics` |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction: complete local proofs; the PT-22 representation/terminal-value paragraph; the `Lf=(1/2)Delta f` generator caveat |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (PT-22 entry) | Drift verdict `no-drift`; the nine declared edges match PT-22 exactly |
| 29 `research/phase-2-remaining-27-step1-<item>.json` records | All 29 items have current non-owner `ready` records (`step1-decisions check --run phase-2-remaining-27`: 1006/1006 ready, 0 missing or stale) |
| Sibling interface: PT-21 manifest, batch-8 notes, batch-7 manifests | In-run suppliers and the batch-shared records |
| Both cited source PDFs, re-fetched | Independent hash/byte confirmation and direct reading of every load-bearing numbered result (below) |

## Role in the library

PT-22 is the closing A page of the Probability track, after PT-21 (the Ito
integral) and before its own B companion; order 288.139/288.14 places the pair
at the end of the appended block. Its exact `requires` are the six published
pages `conditional-expectation`, `martingale-inequalities-and-convergence`,
`stopping-times-and-optional-stopping`,
`brownian-motion-construction-and-continuity`,
`mixed-partials-taylor-and-extrema`, `fubini-and-change-of-variables`, and the
three in-run pages `brownian-motion-markov-properties-and-hitting-times`,
`brownian-path-properties` (batch 7) and
`the-ito-integral-with-respect-to-brownian-motion` (sibling pair in batch 8).
That list equals plan §0A.3 L273 and plan-spec exactly, and the drift entry
confirms `no-drift`.

The pair is a leaf of this run: no page in any of the 15 batches requires
`itos-formula-and-brownian-martingales`, and no item outside the pair depends
on any of its 29 items (checked over all batch manifests). The B page requires
only its A companion and its items depend only on A-page items, batch-7 items,
and published items — all inside the A page's transitive closure. The one
cross-pair orientation edge named in plan §6 (PT-21 B's
`ex-integral-of-brownian-motion-against-itself-preview` -> PT-22
`cor-brownian-square-martingale`) is prose-only and was closed locally on the
PT-21 side per the batch notes.

Two published pages in `research/plan-spec.json` still declare the B page as a
prerequisite: `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`
and `partial-differential-equations-and-characteristics`. §0A.3 L279–283
orders both edges removed as spurious (zero item-level impact). The PDE entry
no longer declares the edge; the Fourier entry still does. I verified the
zero-impact claim directly: none of the 14 published items of the Fourier page
and none of the 21 published items of the PDE page references any PT-22 item
id. This is a plan/owner reconciliation item, not a scope omission, and it does
not change the pair's inventory or its leaf role (see observation 6).

## Inventory against the prose design

All 19 design A items (plan L2131–2154) are present in design order:
`def-continuous-brownian-ito-process`,
`def-quadratic-covariation-of-brownian-ito-processes`,
`thm-quadratic-covariation-of-brownian-ito-processes`,
`thm-integration-by-parts-for-brownian-ito-processes`,
`thm-ito-formula-one-dimensional`,
`thm-multidimensional-ito-formula-for-brownian-driven-processes`,
`cor-brownian-square-martingale`, `cor-exponential-brownian-martingale`,
`thm-space-time-harmonic-functions-yield-brownian-local-martingales`,
`cor-heat-semigroup-martingale`, `thm-levy-characterization-of-brownian-motion`,
`cor-vector-levy-characterization`, `def-brownian-generator`,
`thm-dynkin-formula-for-bounded-brownian-stopping`,
`rem-ito-versus-stratonovich-boundary`,
`rem-general-semimartingale-calculus-is-outside-this-block`,
`thm-brownian-filtration-martingale-representation`,
`cor-square-integrable-brownian-terminal-variables-have-ito-representations`,
`cor-brownian-filtration-local-martingales-have-continuous-versions`.
The two extra items are exactly the local helpers the batch notes list:
`lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`
placed before Levy's theorem (it replaces the invalid use of the Brownian-driven
Ito formula in the Levy proof) and
`lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two` placed
immediately before martingale representation (it supplies the closed-range step
without adding the undeclared Hilbert-space page as a prerequisite).

All 8 design B items (plan L2175–2186) are present verbatim and in order:
brownian powers, log of geometric Brownian motion, exponential-martingale tail
bound, planar harmonic functions, expected exit time from an interval, drifted
hitting probability, the ordinary-chain-rule counterexample, and the
non-uniformly-integrable stopped exponential counterexample. Both pages are far
below the 60-item ceiling.

Design intents survive into the statements that scope depends on: the Ito
formula items are stated for Brownian Ito processes with drift and diffusion and
leave the localizations explicit; the multidimensional item keeps the full
covariance term `(sigma sigma^T)_{ij}` rather than assuming independent
coordinates; the covariation definition demands one common
uniform-on-compacts-in-probability limit for every deterministic vanishing-mesh
partition sequence (existence is the following theorem, per obligation row 43);
`def-brownian-generator` carries the owner-directed caveat that `Lf=(1/2)Delta f`
is the Ito differential operator and not a claim about the `C_0`
semigroup-generator domain; the Stratonovich remark is the mandated scope
denial (plan §0A.3 L334); and the representation theorem adopts the usual
augmented Brownian filtration with predictable locally square-integrable
integrand, the L^2 terminal form, and the continuous-version corollary, which
are plan §13.2's enrichment additions.

Obligation rows 43 (existence of quadratic covariation before the product and
Ito formulas use the symbol), 44 (localize before passing from bounded
coefficients/test functions; prove a local martingale is true before taking
expectations) and 50 (usual augmented Brownian filtration; indistinguishable
continuous version) are implemented by item order and by the stated strategies
of items 2–6, 11–12, 15, and 19–21. The choice ledger is consistent: every item
that invokes conditional expectation, the L^2 completion, subsequences or
localization states AC and declares both the axiom and the AC=>DC=>AC_omega
bridge (the published `def-conditional-expectation-as-an-ae-class` itself
carries the AC inherited from Radon–Nikodym); the one item on this pair with
axiom base ZF is `def-quadratic-covariation-of-brownian-ito-processes`; no item
reaches the deferred Set Theory catalogue.

## Dependency and interface checks (scope level)

- Manifest dependency resolution: 161 direct edges over the 29 items, 0
  unresolved. Page A: 124 edges = 25 intra-page + 23 to the sibling PT-21 page +
  6 to batch-7 pages + 70 to published items (23 distinct published suppliers).
  Page B: 37 edges = 9 to A-page items + 7 to batch-7 items + 21 to published
  items (7 distinct). No edge points at a B item.
- Closure: every published supplier's page lies inside the 193-page transitive
  closure of the A page's nine `requires` (7,761-entry published item-to-page
  map rebuilt from `library/`), so no item borrows outside the declared
  prerequisite closure.
- Mechanical checks reproduced: `manifest-deps` 56 items / 0 errors,
  `coverage-checklist` 2 pages / 50 harvested rows / 0 errors / 0 warnings,
  `source-backing --require-verified` 38 authored results all backed, all 29
  readiness records current.
- Cross-batch ledger: the 2 page edges (PT-22 -> batch-7 pages) and the item
  edges into batch 7 are `verified` with evidence; no unreviewed or orphaned
  batch-8 edge is reported.

## Source coverage

I re-fetched both coverage sources and reproduced the recorded sizes and
`sha256_16` values exactly:

- van der Vaart, <https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf>
  — 941777 bytes, `0706a4b2ed1323fd`, 188 pp.
- Lawler, <https://www.math.uchicago.edu/~lawler/finbook.pdf> — 1080535 bytes,
  `484521433950aad8`, 260 pp.

Load-bearing results read in the extracted full texts: Definition 5.62 with the
integration-by-parts identity (5.63) and Theorem 5.64 (partition sums converge
in probability to `[X,Y]`); Section 5.6's bounded-variation fact and Exercise
5.84 (the bounded-variation part contributes nothing to quadratic variation);
Theorem 5.79 (one-dimensional Ito formula for a continuous local martingale plus
locally bounded variation process) and Theorem 5.85 (multivariate Ito formula
with the full `[X^i,X^j]` matrix), plus (5.82) and (5.86); Theorem 6.1 (Levy:
continuous local martingale with `[M]_t=t` is Brownian, proved through the
characteristic exponential) and Exercise 6.5 (the vector version, left as an
exercise); and the complete Theorem 6.6 argument — closed range of the terminal
Ito integral, characteristic-exponential orthogonality, Fourier/Caratheodory
extension, L^2 truncation for continuous versions, localization, and patching
by the isometry on overlaps. Lawler: Theorem 3.3.1 and Example 3.3.1 with
equation (3.8); the exponential martingale `e^{sigma B_t - sigma^2 t/2}` in
§3.3; the generator computation via Ito in §3.5; the stochastic product rule in
§3.6; Theorem 3.7.2 with the harmonic-function remark in §3.7; and §5.7, which
states the representation for a terminal claim informally ("we will not go into
details here") and proves only a random-walk analogue — confirming the coverage
row's `inline` disposition and the scaffold's choice of van der Vaart Theorem
6.6 as the complete proof source.

Coverage disposal is honest but not one-row-per-item: 20 of the 21 A items are
named by coverage rows (the two `inline` helper rows included); the remaining
item, `rem-general-semimartingale-calculus-is-outside-this-block`, is covered by
the two `out-of-scope` rows (jump/general semimartingale Ito formula, Girsanov)
with explicit reasons. The B items each carry their own openable references and
are elementary applications of A-page items.

## Observations for the Step 3b author and owner (not item approvals)

1. **Source title misattributed (affects both pairs in batch 8).** The document
   at the recorded URL is A. W. van der Vaart, *Martingales, Diffusions and
   Financial Mathematics* (preliminary notes, 188 pp.), which is also how plan
   §11.0 L2428 names it. The coverage record and ~15 item references call it
   "Stochastic Integration and Differential Equations", a different book
   (Protter). The URL, section locators and hashes are correct; only the title
   is wrong. The same wrong title appears in the PT-21 coverage/items.
2. **Levy locator.** `thm-levy-characterization-of-brownian-motion` and
   `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`
   cite "van der Vaart, Theorem 6.4". In the hash-verified PDF, Levy's theorem is
   **Theorem 6.1**; 6.4 is the *Cameron–Martin–Girsanov* section. The manifest's
   own proof strategy already matches the 6.1 proof.
3. **Vector Levy locator.** `cor-vector-levy-characterization` cites "Corollary
   6.5"; the source's multivariate statement is **Exercise 6.5** (stated, not
   proved). The manifest's Cramer–Wold strategy remains a complete local
   obligation; the citation should say Exercise 6.5 or cite Theorem 6.1
   componentwise.
4. **Multidimensional Ito locator.**
   `thm-multidimensional-ito-formula-for-brownian-driven-processes` cites
   "Theorem 5.79"; the multivariate formula is **Theorem 5.85** (5.79 is the
   one-dimensional `(M,A)` formula). Lawler Theorem 3.7.2 corroborates the
   space-time form and is inside the declared 3.3–3.7 range.
5. **Lawler section attributions.** The harmonic-function remark sits at the end
   of §3.7 (not §3.6), and Lawler contains no "Dynkin" label or exit-time
   formula; the plan's own disposition maps the generator/Dynkin fragments to
   §2.10 and §3.5, and Lawler's systematic harmonic/exit-time material is
   Chapter 8, which is outside the declared read range (L: §§1.1–1.7, 2.4–2.10,
   3.1–3.7, 4.1, 4.5, 5.7). Suggested repair: re-point the affected coverage
   rows and item references to §2.10, §3.5 and §3.7 (or to the plan's Yoshida
   §7.2 / Pitman material) and keep the local proofs. The claims themselves are
   not left unbacked.
6. **Stale plan edge (owner/operator reconciliation, no scope change).**
   `research/plan-spec.json` still records
   `dirichlet-kernel-localisation-and-pointwise-fourier-convergence ->`
   `itos-formula-and-brownian-martingales-examples`, which §0A.3 L279–283 orders
   removed; I verified zero item-level references from that published page (and
   from the PDE page, whose edge is already gone) into any PT-22 item. Until it
   is removed, a published page carries a spurious prerequisite on an examples
   companion, which the plan's own seam rule forbids. This is not an omitted
   topic and cannot be repaired by enrichment or a pair merger.
7. **Design item 16 wording (optional).** The design's denial list names
   "Tanaka/local time" among the excluded topics; the manifested remark names
   jumps, general semimartingales, SDE existence, Girsanov and stochastic
   geometry. Adding the two words would match the design exactly; it removes no
   content and is not a scope gap.

## Boundary notes for the owner (not defects against the design)

- Deliberately excluded and not omissions: jumps and general semimartingale
  integration, Girsanov/change of measure, SDE existence and uniqueness,
  Tanaka/local time, Stratonovich conversion, Feynman–Kac, the
  Burkholder–Davis–Gundy family (assigned to the planned general
  continuous-local-martingale page) and predictable quadratic variation
  `<M>` (van der Vaart §5.13, outside the declared read range). These follow
  plan §3 and the two scope-denial remarks.
- The B page is an examples companion with no item consumers anywhere in the
  run; page-size discipline and the B-only-companion rule hold (B `requires`
  is exactly `[itos-formula-and-brownian-martingales]`).
- The AC declarations here are traceable to the published
  conditional-expectation/Radon–Nikodym supplier and the owner's AC
  authorization; the one genuinely choice-free item remains ZF. No
  deferred-catalogue use occurs.

## Limits of this review

I verified scope, inventory fidelity, source support, dependency interfaces and
consumer relations; I did not verify the scaffold's proofs, choice accounting
per line, or item-level proof contracts — those are Step 3b/Step 5 duties. My
source reading covered each load-bearing numbered result and its immediate
proof context, not every page of the cited ranges. I did not read Durrett §7.6,
Pitman Lectures 23–25 or Yoshida §§7.3–7.6 for this pair: those have plan-level
§11 dispositions only, and the run harvests two complete treatments (van der
Vaart, Lawler) whose results cover every A item. No owner scope record exists
for this pair; the recorded receipt is my non-owner decision.

## Decision

`sufficient`: the planned definitions, results, examples and counterexamples
cover the intended subject (continuous Brownian Ito processes; quadratic
covariation with explicit partition conventions; integration by parts; one- and
multidimensional Ito formulas; square, exponential, harmonic and heat-semigroup
Brownian martingales; Levy and vector Levy characterization; the Brownian
generator and bounded-stopping Dynkin formula; the full Brownian-filtration
martingale representation with its L^2 terminal form and continuous-version
corollary; and eight worked examples/counterexamples), reproduce the PT-22
design inventory exactly plus the two documented local helpers, are backed by
two hash-verified complete treatments whose load-bearing results I read, resolve
every dependency inside the declared 193-page requires closure, and introduce no
consumer obligation beyond the B companion. The locator and title corrections
in observations 1–5, the stale plan edge in observation 6, and the wording in
observation 7 are recorded for the Step 3b author and the owner; none of them
requires enrichment or a pair merger. No enrichment, merger or pair change is
requested.
