# Frontier 17 — independent reader 2

## Fatal findings

### R2-1 — `prop-two-classical-counterexamples-in-polar-coordinates` — title exceeds the Statement and proof — fatal

**Location:** item frontmatter `title` and `short`, the batch manifest title, and the A-page summary.

The title calls the two displayed expressions “differentiability counterexamples,” but the Statement and proof establish only their polar-coordinate identities on `r>0` and, for the second expression, `cos(theta) != 0`. They neither define the extensions at the origin nor prove the discontinuity/directional-derivative properties that make the expressions counterexamples. This is exactly a title asserting more than the proof gives. The licensed fix is to narrow the title, short label, manifest title, and summary to the polar forms actually proved; the item id remains unchanged.

**Disposition:** fixed. The item and manifest title now read “Polar-coordinate forms of two Cartesian expressions,” the short label was narrowed likewise, and the A-page summary now says only that the proposition identifies the two expressions’ angular and radial structure. `research/plan-spec.json` was deliberately not touched; 6b Alpha owns the licensed `splice-plan --update` transcription.

### R2-2 — `cex-circular-curve-defeats-vector-valued-mean-value-equality` — listed sources do not support the exact literature-derived Statement — fatal

**Location:** `sources.references` and `provenance.statement` support.

The listed Lebl sections supply the unit-circle parametrization and trigonometric facts, and the listed Toronto section supplies partial-derivative conventions, but neither cited locator states the vector-valued mean-value equality counterexample. William S. Hall and Martin L. Newell, “The Mean Value Theorem for Vector Valued Functions: A Simple Proof,” states the exact circular witness on `[0,2pi]` and the surviving norm inequality. The licensed fix is to add that exact scholarly source while retaining the background sources.

**Disposition:** fixed. The full-text Hall–Newell source at `https://www.maths.tcd.ie/pub/ims/news07/news_all07.pdf` was added to `sources.references`. The article’s opening example is the same `[0,2pi]` circle witness and its following theorem gives the norm inequality.

### R2-3 — `fs-the-mean-value-equality-holds-for-vector-valued-maps` — listed sources do not support the exact literature-derived Statement — fatal

**Location:** `sources.references` and `provenance.statement` support.

As in R2-2, the listed background sections do not state the false universal vector-valued equality. Hall–Newell states both its failure via `f(t)=(cos t,sin t)` and the valid inequality that replaces it. The licensed fix is to add the exact source.

**Disposition:** fixed by adding the same exact full-text source to `sources.references`.

### R2-4 — `ex-volume-of-the-sine-solid-of-revolution` — integral citations omit the nondegenerate-interval hypothesis — fatal

**Location:** Facts `[L7]` and `[L8]`, steps 1.2–1.3, and their proof-contract inputs.

`lem-integral-elementary-bounds` and `thm-ftc-second-part` both assume `a<b`, but `[L7]` and `[L8]` omit that hypothesis. Steps 1.2 and 1.3 invoke nondegenerate-interval results without listing the fact that `pi>0` among their inputs. The cited `cor-pi-is-the-first-positive-sine-zero` does state that positivity. The licensed fix is to preserve `a<b` in both restatements, include the source’s positivity conclusion in `[L1]`, and route `[L1]` into the affected steps and proof contract.

**Disposition:** fixed. `[L7]` and `[L8]` now retain `a<b`; `[L1]` includes the cited corollary’s first-positive-zero conclusion; steps 1.2 and 1.3 explicitly establish the nondegenerate interval; and the proof contract’s citation uses and step inputs match the new proof text.

### R2-5 — `ex-surface-area-of-the-sine-solid-of-revolution` — FTC citation omits the nondegenerate-interval hypothesis — fatal

**Location:** Fact `[L13]`, step 1.3, and the proof-contract input map.

`thm-ftc-second-part` assumes `a<b`, but `[L13]` omits it. The proof later applies the theorem on `[0,pi]`; the cited first-positive-sine-zero corollary supplies `pi>0`, but the integrability step does not list it. The licensed fix is to preserve `a<b` in `[L13]`, include the source’s positivity conclusion in `[L1]`, and use `[L1]` in step 1.3 and its contract row.

**Disposition:** fixed. `[L13]` now retains the theorem’s interval, differentiability, and integrability hypotheses; `[L1]` records `pi>0`; step 1.3 establishes the nondegenerate interval; and its contract row was synchronized.

### R2-6 — `cor-surface-area-of-revolution-formula` — false title in another in-flight batch — fatal

**Location:** frontmatter `title` in `items/cor-surface-area-of-revolution-formula.md`.

The title displays `sqrt(1+r''(s)^2)`, while the item’s Statement and proof correctly use `sqrt(1+r'(s)^2)`. This is a false title on a cited draft dependency. It is outside reader-2’s batch write authority and is therefore report-only for Alpha to return to batch 4.

**Disposition:** fixed concurrently by the owning batch-4 reader at 2026-08-22 02:31 +10:00. I re-opened the current file and verified that its title now uses `r'(s)`. Reader 2 did not edit the batch-4 file.

### R2-7 — `thm-scalar-surface-integrals-on-a-surface-of-revolution` — free scalar field in another in-flight batch’s Statement — fatal

**Location:** `## Statement` in `items/thm-scalar-surface-integrals-on-a-surface-of-revolution.md`.

The Statement concludes with an integral containing `q(phi(s,t))`, but never introduces `q`, states its domain, or assumes its continuity. The Facts section later calls `q` a continuous scalar field, but a missing Statement hypothesis cannot be supplied retroactively by the proof. This cited draft dependency belongs to another batch, so the finding is report-only for Alpha/batch 4.

**Disposition:** fixed concurrently by the owning batch-4 reader at 2026-08-22 02:31 +10:00. I re-opened the current Statement and verified that it now assumes `a<b`, quantifies every continuous real-valued `q` on the patch image, states the integral as `int_S q dS`, and names the parametrized patch. The dependency change made batch 2’s old F2 contract quote stale; I repaired only batch 2’s F2 restatement and exact contract quote to include `a<b`. Reader 2 did not edit the batch-4 file.

## Checkpoint after the first complete item pass

Every scoped item, both page files, the batch notes, the complete batch proof contract, and every direct `[F#]`/`[A#]`/`[L#]` dependency used by the ten items have been opened. The four `ai-generated` constructions have no authored or planned `deps` consumers. Boundary cases checked so far include both coordinate axes and the origin, positive-index witness sequences from `k=1`, the nonempty compact square, zero endpoint radii, both surface endpoints, the spherical seam, both poles, and radius zero. No additional concrete defect has been found so far. Repairs and final per-page verdicts follow below after verification.

## Changes made

- Narrowed the proposition title and short label, synchronized its batch-manifest title, and narrowed the A-page summary. No id changed and no result was added or deleted.
- Added the exact Hall–Newell source to the circular counterexample and its companion false-statement item.
- Repaired the nondegenerate-interval hypotheses and proof inputs in the volume and surface-area examples.
- Updated `research/frontier-17-batch-2.proof-contracts.json` for every changed citation use and numbered-step input.
- No scoped item carried `verification.judge`, so there was no stale judge block to delete. No `verification.audited` block was added. No other batch, published item, or `research/plan-spec.json` was edited.

## Verification

- Reflow: all five changed item files were unchanged by the canonical formatter.
- Targeted precheck: all five changed items pass; a final all-scope pass also covers all ten items.
- Strict proof contract: 10/10 items, zero errors and zero warnings.
- Citation fidelity: 87 direct citations checked, no absent quote and no widening candidate; every citation was also compared manually with the cited item on disk.
- Boundary audit: all 80 rows read manually; the detector found no contradicted or reused-template disposition.
- Content policy: 10 scoped items, zero errors and zero warnings. All four `ai-generated` constructions are non-load-bearing: no authored item and no planned item has one in `deps`.
- Generated-construction probe: independent numerical checks of the displayed mixed-partial formulas, reciprocal-radius partials and witness values, and radial-gradient formulas found zero failures; the exact symbolic calculations and quantifiers were also checked by hand. No counterexample was found.
- Rendercheck, prosecheck, and citecheck are clean on the scoped files. Coverage remains structurally valid with its pre-existing low-yield advisory, and all 6/6 harvested sources retain full-text fetch stamps.
- The newly added Hall–Newell item citation was opened through the web reader and matched the exact witness and inequality. A local attempt to add it as a newly stamped harvest row hit sandbox DNS `EAI_AGAIN`; no stamp was fabricated and no unstamped harvest row was retained.
- `validate-plan` remains acyclic and consistent. Repository-wide `depcheck` remains red only on the unrelated published `rem-sine-period-arc-length-integrand-is-nonelementary`, whose `sources_checked` block is absent; no batch-2 item or page is named by that error.

## Per-page verdicts

- `trigonometric-and-oscillatory-examples-in-several-variables` — **clean after R2-1 repair**. One scoped item opened; no other finding.
- `trigonometric-and-oscillatory-examples-in-several-variables-examples` — **clean after R2-2 through R2-5 repairs and after re-verifying the owning batch’s concurrent R2-6/R2-7 dependency repairs**. Nine scoped items opened; no other finding.

## Coverage count

Opened **10/10 scoped items**. Including direct dependencies, I opened **50 distinct item files**: the ten scoped items and forty additional direct dependency items. I also opened both page files, the batch manifest, notes, coverage file, and complete proof-contract file.
