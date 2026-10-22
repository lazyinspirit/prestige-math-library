# Batch 128 notes — JT disk spectral preparation and ensemble boundaries

## Scope and plan comparison

The owner-authoring-direction file
research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md
is absent. The controlling inventory is batch 128's pair
tgrx-jt-disk-model / tgrx-jt-disk-model-examples, orders 953–954.
plan-spec.json requires the A page to follow both
tgrx-ads-effective-boundaries and the published mathematical page
improper-and-parameter-dependent-multiple-integrals; the B page follows the
A page.

The detailed prose module's A-page header lists only
tgrx-ads-effective-boundaries among its earlier pages, while both
plan-spec.json and the canonical item inventory include the improper-integral
page. The plan controls; the batch manifest and A-page frontmatter retain both
requirements. The mathematical page is a published external supplier, not an
in-run batch edge.

The design's theorem inventory directly lists the published
thm-gaussian-integral and asks for the Gaussian integral's squared polar
proof. I read that complete supplier proof; it squares the one-dimensional
integral, evaluates the plane Gaussian in polar coordinates, then selects the
positive square root. I reuse that exact published result rather than duplicate
it as a new A-page mathematical item. The design also requires differentiating
the Gaussian-cosh integral under a Gaussian dominator, so the theorem directly
depends on the published
thm-differentiation-under-dominated-improper-multiple-integrals. Its complete
proof and hypotheses were inspected.

The design calls the units “dimensionless,” but the source formula requires
CE and C/beta to be dimensionless. The items state the convention
c = hbar = k_B = 1: E has units s^-1, C and beta have units s,
and S_0 is dimensionless. This makes the density and partition function
dimensionally consistent while preserving the design's model scope.

## Inventory, dependencies, and levels

Batch 128 is recorded at dependency level 4 and requires batch 126. The
postulate post-tgrx-jt-disk-spectral-model has the in-run supplier
post-tgrx-semiclassical-ads-dictionary at item level 4, so its level is 5.
The Laplace theorem and B-page remark consume the new postulate at level 5, so
each has level 6. The Gaussian integral and dominated-differentiation results
are published external mathematical context and do not raise in-run levels.

The assigned A inventory is one physical postulate and one physics theorem; the
B inventory is one source-backed physical remark. No local mathematical item is
missing: the Gaussian value and the rule for differentiating the improper
parameter integral are supplied by the exact published mathematical results.
The A-page proof explicitly verifies the domination hypotheses and performs
the energy substitution; the citations do not replace those calculations.

## Supplier inspection and readiness

I loaded current Step 1 state with loadStep1Record and queried step1Decision
for the batch-126 inputs. An earlier query during authoring returned missing
records for post-tgrx-semiclassical-ads-dictionary and
def-tgrx-ads-regulated-generalized-entropy. Before final recording, the live
query returned current ready records for both; I reread their complete current
carriers and checked that the actual interface still matches this page's
formulation-only use. The other inspected direct inputs,
prop-tgrx-code-area-entropy, def-tgr-regulated-generalized-entropy, and
pthm-tgrx-noether-first-law, also have current ready authoring records; their
Statements and the relevant proposition/theorem proofs were read.

The actual upstream AdS postulate supplies a restricted boundary-entropy
dictionary only when its prescribed candidate set is nonempty, finite, and
attains a minimum. It does not derive the JT disk density. The new JT density
is therefore stated as a separate adopted premise. The Laplace theorem is
complete conditionally on that premise and the two published mathematical
suppliers. All three assigned Step 1 records are ready; the verified
cross-batch rows record only the scoped page/item interface checks, not
independent proof approval.

## Sources and checks

Three independent full-text treatments were inspected for the A page, including
Sárosi's complete lecture notes. The Saad–Shenker–Stanford paper and the
Mertens–Turiaci review state the disk density in the chosen convention. The
lecture notes independently review the Schwarzian boundary action and disk
thermal factor and explicitly state their natural-unit convention; they do not
supply the exact density normalization. The local theorem proves the Laplace
integral directly.

The source reading, supported items, locators, and per-result dispositions are
in the batch-128 source-reading file and the sibling coverage JSON.
source-fetch-check --stamp returned 5/5 source records fetch-verified and 5/5
resolved, with five new stamps and no failures or documented drops. Each
successful record took one fetch attempt; no source-resolution alternative
proof was needed.

## Scoped validation and owner refresh

- Proof layout: 1 changed proof item, 5 steps, 0 defects.
- Normative precheck through tsx-run: 2 applicable items checked, 0 failures.
- Strict proof contracts: 3/3 assigned items, 0 errors, 0 warnings.
- Source coverage: 2 pages, 11 harvested results, 0 errors, 0 warnings.
- Source fetch check: 5/5 records verified, 0 documented drops.
- Content policy: 3 assigned items, 0 errors, 0 warnings.
- Focused depcheck: all 3 assigned items and both pages checked; 0 errors and
  0 warnings over the 2,735-item / 602-page dependency closure.
- Rendercheck: the 3 items and 2 pages pass YAML and real KaTeX parsing.
- Recomputed item levels on the 250 nonempty run pages: the three assigned
  items are at levels 5, 6, and 6, with no dependency errors.
- The run-wide item-level CLI still reports empty scaffold inventories outside
  batch 128: qftx-kz-chiral-interface and its examples page;
  csm-frontier-inverse-gibbs and its examples page;
  csm-frontier-planar-critical-point and its examples page;
  csm-frontier-rare-event-numerics and its examples page; and
  tgrx-research-boundaries and its examples page. These pages are outside this
  assignment and were not edited.
- Recomputing the current batch graph gives batch 128 at level 4 with
  prerequisite batch 126. The recorded run-level dependency-level file is
  stale because the batch manifest changed during authoring. It is shared run
  scheduling evidence owned by the orchestrator and requires refresh at the
  drained join; it was not edited here.

The final Step 1 records for all three assigned items are current and ready.
They record authored prerequisite readiness only; they do not assert
independent proof or source approval.
