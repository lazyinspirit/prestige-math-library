# frontier-38-owner-30 — batch 20 Step 1 notes

Owned pair: `analytic-hardy-spaces-and-canonical-factorisation` (A, order 837,
`complex-analysis`) and its `-examples` companion (B, order 838), the only pair
assigned to this dispatch. Read before construction: `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `briefs/beta-scaffold.md`, the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, the CA-HP-2 design
section at `research/plan-complex-analysis-track.md` L3727–3780,
`research/plan-spec.json`, and the current batch evidence on disk (the run's
manifests, the unified frontier ledger and the `.autopilot/` state directory).
The owner direction selects this pair, forbids reliance on the unbuilt 873/877
pairs (never touched here), and caps each page at 100 items (this pair uses
25 A + 7 B). No selected pair, shared plan, published item, engine state or
verdict was edited. Nothing in this batch consumes a Recorded/external-only
result: all 58 external suppliers are ordinary published items with
`proved_here` implicit.

## Plan versus design

`research/plan-spec.json` carries exactly the dispatch's page IDs, orders
(837/838), category (`complex-analysis`), companion pointers and six `requires`
entries; the item lists for both pages were empty. There is no plan-level
conflict. The design's scope, conventions and route were preserved; recorded
deviations and reconciliations:

1. **Definition of the Nevanlinna class.** The design's one-line row defines
   `N(D)` by "uniformly bounded radial means of `log^+|f|`". The item
   `def-nevanlinna-class-on-the-disc` takes the equivalent harmonic-majorant
   form (Garnett II.5's definition) as primary and the radial-mean form is
   *proved* to be equivalent in the new local lemma
   `lem-nevanlinna-sup-mean-criterion`. Both formulations appear on the page,
   the design's wording is preserved as a characterized form, and the
   equivalence is not assumed: the lemma proves the nontrivial direction by
   Poisson modifications on expanding discs plus the increasing Harnack
   convergence principle, and carries no choice principle itself.
2. **A inventory expanded from 12 designed rows to 25 items.** The design's
   route requires local prerequisites that are not published in one piece, so
   13 items were added on the same A page (well under the 100-item cap), in
   prerequisite order: `lem-hardy-radial-means-are-monotone`,
   `thm-blaschke-product-boundary-values-and-zeros`,
   `thm-riesz-factorization-hardy-space`, `lem-hardy-log-integrability-of-boundary-values`,
   `lem-poisson-jensen-inequality-hardy-functions`, `lem-outer-function-properties`,
   `thm-singular-inner-function-properties`,
   `thm-zero-free-inner-functions-are-singular-inner`,
   `lem-nevanlinna-sup-mean-criterion`, `lem-nevanlinna-blaschke-factorization`,
   `thm-nevanlinna-boundary-values-and-log-integrability`,
   `lem-smirnov-class-quotient-characterisation` and
   `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients`.
   Every designed claim is retained; the additions only supply missing local
   closure (Riesz factorization with equal norms, inner/outer machinery,
   Nevanlinna boundary theory, the h¹-analytic measure route to F. and M.
   Riesz without a Hilbert transform, as the design itself directs).
3. **B inventory: 6 designed rows built as 7 items.** "Finite/infinite
   Blaschke products" is split into `ex-finite-blaschke-products` and
   `ex-blaschke-product-with-zeros-accumulating-at-one` (the second carries the
   telescoping value `B(0)=1/2` and the accumulation at `1`). The
   "factorization of a rational inner function" row is built as the rational
   function `f(z)=((z-a)/(1-az))·((1+z)/2)`, which is deliberately *not* inner:
   it exhibits both a nonconstant Blaschke factor and a nonconstant outer
   factor, which is the content the row is for. The inner rational case (a
   finite Blaschke product and a unimodular constant) is the preceding
   `ex-finite-blaschke-products`; no claimed content was weakened.
4. **Design source substitutions.** The design names Ryzhik Ch. 5 §5.4,
   Schlag Ch. 3 §§2–3, Garnett Ch. II §§1–5 and Srivastava §§2.4/2.6–2.7/
   3.1–3.10. Four complete treatments were fetched and read: Garnett
   (monograph), Srivastava (course notes), Ryzhik §5.4 and — in place of
   Schlag — Axler–Bourdon–Ramey, *Harmonic Function Theory* Ch. 6. The
   harmonic-Hardy/Herglotz side needs an independent book treatment, and the
   Schlag Hilbert-transform route is deliberately not used (the design says
   F. and M. Riesz is to be obtained "without invoking an unavailable Hilbert
   transform"; the scaffold instead uses the published h¹ measure
   representation). No designed claim rested on Schlag alone.
5. **Superseded URLs and locators (history retained in the coverage file).**
   The design-named Garnett URL (the lib.ysu.am open-books scan) is image-only
   and its TLS certificate is rejected by the fetch tool and curl; the
   Internet Archive snapshot of the same scan is likewise image-only. All
   readings are therefore from the complete OCR text mirror recorded as the
   source URL (`dokumen.pub`), whose licensing uncertainty is recorded. The
   design-named Srivastava locators
   (§§2.4, 2.6–2.7, 3.1–3.10) belong to an earlier version of the same notes;
   the current MA650 file carries the same material at §§4.4, 4.6–4.7,
   5.6–5.11, 6.2–6.4, and the earlier `Advanced hardy spaces Notes_V2.pdf`
   URL is a 404 with no archived snapshot. It was replaced by the same
   author's live MA650 file. `url-sweep --recover --fail-on-dead` records
   4/4 live citations and 0 documented source drops.

## Inventory, dependency levels and route

All 32 IDs were unused before this batch (no `items/<id>.md` exists for any of
them and no other manifest of the run uses them), every item has an explicit
`deps` array, and the run-wide duplicate scan reports 752 unique run items and
no collision.

**A inventory (25), level = 1 + max level of in-run deps:**

| level | id |
|---|---|
| 0 | `def-analytic-hardy-space-disc` |
| 0 | `lem-nevanlinna-sup-mean-criterion` |
| 0 | `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients` |
| 1 | `lem-hardy-radial-means-are-monotone` |
| 1 | `def-nevanlinna-class-on-the-disc` |
| 2 | `thm-hardy-zero-set-blaschke-condition` |
| 2 | `thm-nevanlinna-class-is-bounded-quotient-class` |
| 3 | `def-blaschke-product` |
| 4 | `thm-blaschke-product-boundary-values-and-zeros` |
| 5 | `thm-riesz-factorization-hardy-space` |
| 5 | `def-inner-singular-inner-and-outer-functions` |
| 5 | `lem-nevanlinna-blaschke-factorization` |
| 6 | `thm-fatou-boundary-theorem-analytic-hardy-spaces` |
| 6 | `thm-singular-inner-function-properties` |
| 6 | `thm-nevanlinna-boundary-values-and-log-integrability` |
| 7 | `lem-hardy-log-integrability-of-boundary-values` |
| 7 | `lem-outer-function-properties` |
| 7 | `thm-zero-free-inner-functions-are-singular-inner` |
| 7 | `thm-f-and-m-riesz-theorem` |
| 8 | `lem-poisson-jensen-inequality-hardy-functions` |
| 8 | `cor-hardy-one-cauchy-representation` |
| 9 | `thm-inner-outer-factorisation-hardy-space` |
| 9 | `def-smirnov-class-on-the-disc` |
| 10 | `lem-smirnov-class-quotient-characterisation` |
| 10 | `thm-smirnov-maximum-principle` |

**B inventory (7):** `ex-finite-blaschke-products` (5),
`ex-blaschke-product-with-zeros-accumulating-at-one` (5),
`ex-singular-inner-function-from-a-point-mass` (7),
`ex-outer-function-with-prescribed-boundary-modulus` (8),
`cex-divergent-blaschke-sum` (5), `ex-factorization-of-a-rational-function`
(10), `ex-boundary-vanishing-and-uniqueness` (8). B items consume A items only,
never the reverse.

Proof route, verified item by item against the published statements actually
cited: radial means monotone by Poisson modification of `|f|^p`; Blaschke
condition from Jensen; normalized factors with normal convergence; `|B^*|=1`
a.e. by the tail-product mean bound; Riesz factorization `f=Bg` with equal
norms; Fatou boundary theorem via the published harmonic-Hardy representation
and the `mp>1` root trick for `p<=1`; log-integrability of `f^*` from the
zero-free `g=G^m` mean value; Poisson–Jensen inequality via the automorphism
substitution; inner/singular/outer definitions with the singular-function
properties proved from Lebesgue decomposition and the Fatou theorem for
positive measures; zero-free inner functions are `λS_μ` by Herglotz plus
conjugate functions (and the general inner-function clause via the Blaschke
product of its zeros); inner-outer factorization of `H^p`; Nevanlinna class
with the sup-mean criterion, bounded-quotient representation (Herglotz and a
harmonic conjugate), Blaschke factorization inside `N` (Jensen mean estimates
plus the sup-mean criterion), boundary values and log-integrability via a
quotient of two bounded zero-free functions; Smirnov class with the outer-
denominator quotient characterization and `N^+∩L^p=H^p`; the analytic
Poisson-integral/F. and M. Riesz route through the published h¹ measure
representation and Cauchy's formula. Two corrections were applied during this
Step-1 pass: the `(ii)⇒(i)` clause of the bounded-quotient theorem now uses the
`log^+`-normalized harmonic majorant
`log^+||g||_∞ + log^+||h||_∞ − log|h|` (the previous constant-term version
failed when `||g||_∞,||h||_∞<1`), and the Blaschke-factorization lemma's
sup-mean bound now splits `r<=1/2` (compactness of `g` on the closed half-disc)
from `r>=1/2` (Jensen-mean factor estimates), so the claim
`sup_r ∫ log^+|g_r| dm < ∞` is actually established before the criterion is
invoked. A wikilink-and-strategy audit of all 32 items against their declared
`deps` also closed the remaining implicit uses: the Fatou theorem's `p=1`
clause now declares the published h¹ representation
(`thm-harmonic-hardy-one-measure-representation`), the zero-free-inner theorem
declares the Blaschke-product inputs for its "every inner function" clause,
the Poisson–Jensen lemma declares the outer-function definition it invokes,
and the Nevanlinna definition declares the mean value property used for the
majorant-to-sup-mean direction.

Choice accounting (direct declared dependencies): the Axiom of Choice enters
seven items — `thm-fatou-boundary-theorem-analytic-hardy-spaces`,
`thm-zero-free-inner-functions-are-singular-inner`,
`thm-inner-outer-factorisation-hardy-space`,
`thm-nevanlinna-class-is-bounded-quotient-class`,
`thm-nevanlinna-boundary-values-and-log-integrability`,
`lem-smirnov-class-quotient-characterisation` and
`thm-f-and-m-riesz-theorem` — through the published Herglotz/weak-star items
`thm-harnack-convergence-positive-harmonic-functions` and
`thm-harmonic-hardy-one-measure-representation`, where the representing
measure and the normalized compactness of nonnegative harmonic functions are
obtained. Seven further items assume countable choice directly
(`def-analytic-hardy-space-disc`, `thm-blaschke-product-boundary-values-and-zeros`,
`def-inner-singular-inner-and-outer-functions`, `thm-singular-inner-function-properties`,
`def-nevanlinna-class-on-the-disc`, `thm-smirnov-maximum-principle`,
`cor-hardy-one-cauchy-representation`); the remaining items inherit it
transitively where stated. `lem-nevanlinna-sup-mean-criterion` declares no
choice principle and uses the choice-free increasing Harnack convergence
principle. No item consumes a Recorded result to prove its replacement, and
the pair never reaches `deferred-set-theory-beyond-choice`, the ultrafilter
principle or any incompatible-axiom branch.

## Sources, suppliers and dispositions

Four complete works were fetch-stamped and inspected (8 stamps: 4 per page);
nothing was dropped and no recovery allowance was exhausted:

- J. B. Garnett, *Bounded Analytic Functions*, rev. 1st ed., Ch. II §§1–6,
  printed pp. 49–78 (complete OCR mirror; html, 775,494 bytes, 526,198
  extracted text characters; A-page stamp `f26774f0970230c8`, the B-page fetch
  stamp differs only in the html hash `fd693a49a5f3efb4` with identical text
  length) — primary monograph treatment: H^p, Blaschke products, boundary
  values, the Nevanlinna class and (5.1), inner functions.
- R. K. Srivastava, *Lecture Notes on Hardy Spaces* (MA650, IIT Guwahati),
  §§5.1–5.11 and 6.2–6.5, printed pp. 26–71 (pdf, 111 pages,
  `e4a4359518417637`) — independent course-notes treatment including the
  original radial-mean definition of `N` and the quotient theorem.
- L. Ryzhik, Stanford Math 215 notes, Ch. 5 §5.4, printed pp. 75–79 (pdf,
  128 pages, `28b6a05e49fa2910`) — independent proof of F. and M. Riesz and
  the Riesz-brothers boundary non-vanishing theorem.
- S. Axler, P. Bourdon and W. Ramey, *Harmonic Function Theory*, 2nd ed.,
  Ch. 6, printed pp. 117–145 (pdf, 260 pages, `4e64124f7e36993e`) —
  independent textbook treatment of Poisson integrals of measures, weak-star
  convergence, `h^p` and the harmonic Fatou theorem.

The owned coverage file records every harvested heading of those ranges with a
disposition (81 rows after the rows added during this pass for the new
sup-mean lemma and for the analytic-Poisson-integral lemma): 55 `included`,
which cover all 32 authored items (some items have several rows), 6 `inline`,
4 `already-published` (the published Herglotz/Harnack and harmonic
representation items, and the h¹/h^p/Fatou items from the `harmonic-hardy-...`
page), and 16 `out-of-scope` each with a specific reason (completeness of
`H^p`, smooth-class density, the least-majorant corollaries not needed,
Beurling invariant subspaces, boundary-continuation results, Nevanlinna value
distribution, and the like). No result was left undisposed. Each direct
external supplier was checked at its statement and published status; where the
route depends on exact hypotheses the relevant proof was also read
(`thm-harnack-convergence-positive-harmonic-functions`,
`thm-harmonic-hardy-one-measure-representation`,
`thm-poisson-modification-preserves-subharmonicity-and-majorizes`,
`thm-harnack-convergence-principle-for-plane-harmonic-functions`,
`thm-jensen-formula-on-a-disc`, `thm-blaschke-factor-is-a-disc-automorphism`).
No published defect in an actual prerequisite was found; every direct
dependency is either in this batch or published outside the run, so the
consumer-batch dependency input is `[]`.

## Checks (actual observed results)

| Check | Result |
|---|---|
| Owned `coverage-checklist --require-destination` | exit 0; 2 pages, 81 harvested results, 0 errors, 0 warnings |
| Owned `source-fetch-check` (stamp, then check mode) | exit 0; 8/8 fetch-verified, 8/8 resolved, 0 documented drops |
| Owned `url-sweep --recover --fail-on-dead` | exit 0; 4/4 live, 0 failed, 0 recoverable, 0 suspect |
| Owned `source-backing --require-verified` | exit 0; 32 authored results, every one backed by an openable source |
| Owned `manifest-deps` | exit 0; 32 items, 0 missing, 0 errors |
| Owned `content-policy --manifest-only` | exit 0; 32 scoped items, 0 errors, 0 warnings |
| Whole-run `manifest-deps` | exit 0; 752 items, 0 errors |
| Whole-run `content-policy --manifest-only` | exit 0; 752 scoped items, 0 errors, 0 warnings |
| Whole-run `item-dependency-levels check` | exit 1 for 6 empty inventories in three other, unbuilt pairs; no batch-20 id appears; all 32 owned labels recompute exactly, 0 cycles |
| Whole-run `step1-decisions check` | exit 1 while three other pairs still have empty inventories; 752/752 existing items have current `ready` records and 0 work rows belong to this pair |
| Current-plan `validate-plan` | exit 0; pre-existing `redundant-prereq` advisories for the plan's `requires` closure (7 name this A page, all plan-level) and 289 planned pages without item lists elsewhere; no error in the owned path |
| Whole-repo `extcheck --quiet` | exit 0; only pre-existing published warnings elsewhere, none in the owned path |
| Whole-repo `fwdcheck --quiet` | exit 0 |
| `frontier-dependency-ledger refresh` | exit 0; batch-20 input `[]`, 0 unified-ledger edges touch batch 20 |
| `scaffoldArtifacts` predicate (replicated with the engine's modules) | 2 owned pages, 32/32 decisions closed, 32/32 `dependency_level` values match the computed levels, 0 dependency-cycle errors |

The remaining whole-run failures are other pairs' unfinished scaffold work;
they are recorded here and were not repaired, as they are outside this batch's
ownership.

## Escalations and remaining work

No cross-batch change, new prerequisite pair, page split, source drop or owner
escalation is required. The A page has 25 items and the B page 7 (limit 100
each), all local prerequisites are scaffolded before their consumers, every
assigned pair claim is preserved, and no incompatible-axiom branch is
consumed. Owner/operator reconciliation and the full engine gate follow
construction; Step-1 readiness records are scaffold evidence only, and Step 3
provides the independent mathematical review.

## Step 3 gate repair supplement

The historical author evidence above is retained. Current operative proofs, source dispositions and all boundary rows were independently reviewed and repaired in `frontier-38-owner-30-step3-gate-repair-jm-review.md`; exact before/current hashes and supplier closures are in the accompanying evidence JSON. Three same-page CC prerequisites supply singular-Poisson limits, finite-circle decomposition and bounded-holomorphic Fatou without strengthening the singular-function Definition context to full AC. The two mislabeled Garnett assertions are now correctly mapped inline to actual local proofs. Batch20 now has35 items (28 A,7 B); parent owns global registration/native contexts and owner recertification.

## Final CC closure supplement

This supplement supersedes the prior35-item route summary while preserving its historical bytes/evidence. The current batch has37 items (A30/B7), including five fully proved CC prerequisites. Nevanlinna boundary/log, full analytic Fatou, F-and-M Riesz and H1 Cauchy now have complete CC proofs; the required positive complex variation and Fourier/Poisson uniqueness are local, without Hahn/Jordan AC. All current strategies/quotes/boundaries are synchronized. The Ryzhik5.19–21 combined row is truthfully split into the excluded general subharmonic theorem and inline analytic claims. Exact final proofs, source decisions, hashes and checks are in the final `frontier-38-owner-30-step3-gate-repair-jm-review.md` and evidence/decisions JSON. Parent owns global registration and certification.
