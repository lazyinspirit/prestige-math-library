# Batch 21 notes — `em-causal-wave-kernel-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **321**, B page order **322**, category
`classical-electromagnetism-mathematics`, library `mathematics`. Final inventory:
**5 A items + 1 B item**. No item file, page, plan, published item, engine state or
verdict was edited. Files written: this manifest
(`research/physics-em-sr-40-2026-10-08-batch-21.pages.json`), coverage, the
cross-batch dependency input, the `step1-*` readiness records, this note, and the
tool-refreshed unified ledger. The binding owner direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` was read first;
its corrections do not name this pair, and no correction of it is contradicted here.

## Design vs plan

Design section `research/plan-classical-electromagnetism-track.md` L1509–L1601
("Causal kernels, gauge and point fields after wave existence", quoting
`proposed-inventory.json`'s `mathematical_pages` entry). Compared with
`research/plan-spec.json` orders 321/322: page ids, kinds, orders, category,
library `mathematics`, titles, companion links and the declared `requires`
(`em-wave-equation-prerequisites`) agree exactly. **No page-metadata plan conflict**
and the design's 4-item A inventory / empty B inventory is reproduced verbatim in
`reference`, `design_state`, deps and dependency roles; the design's own
`dependency_level` labels (3,3,3,4) also match the computed in-run levels. Two
scaffolder additions are recorded below (one local definition, one B example)
because the pair's own closure requires the first and every page requires a
nonempty inventory.

## Inventory decisions (recorded)

1. **`def-em-potential-gauge-and-field-conventions`** (new, level 0). The design's
   four items use potential pairs, the gauge transformation, its field conventions
   `E=-grad phi-d_t A`, `B=curl A`, the Lorenz divergence `G=div A+c^{-2}d_t phi`
   and the wave expression `W=c^{-2}d_t^2-Delta` without a mathematical definition on
   any earlier page. The design's own `definition-contracts.md` fixes these
   conventions (`def-em-gauge-transformation`, `def-em-retarded-point-geometry`) for
   *later physics* pages (`def-em-*` under `library: physics`), which cannot serve a
   mathematics item and whose ids are reserved there; this page therefore defines the
   purely mathematical vocabulary locally under a fresh id, with the design's exact
   signs, the `c^{-2}` in `G`, the spelling *Lorenz*, and no existence claim. The
   definition is used by items 3, 4, 5 below and by the B example.
2. **`lem-em-retarded-wave-kernel`** (design W3) keeps deps
   `thm-em-wave-cauchy-kirchhoff`, `def-distributional-derivative` and adds the
   published suppliers its route consumes (test-function topology and fixed-support
   seminorms, polar/chart surface measure and the polar formula, Fubini, one-variable
   substitution, dominated convergence, integral triangle inequality, positivity of
   integrals over positive-measure sets, translation invariance, mollifiers and
   approximate identities, extreme value and Heine–Borel, linearity of the integral).
   No design claim was weakened: support = the cone, the convolution identity, the
   pointwise equation `W(K*h)=h` and `WK=delta_{(0,0)}` are all kept, with the
   explicit statement that no smoothness of `K` on the cone is asserted.
3. **`lem-em-gauge-wave-reachability`** (design W6) keeps the design dep and adds
   `def-em-potential-gauge-and-field-conventions` plus the vector identities
   `curl grad=0`, mixed partials, algebra of derivatives and total derivatives, and
   div/curl linearity. The design's caveat (prescribed boundary values on a bounded
   spatial domain are outside the result) is retained verbatim in scope.
4. **`lem-em-smooth-forced-maxwell-cauchy-system`** (design W7) keeps the design dep
   and adds the constraint-driving identities (`div curl=0`,
   `curl curl=grad div-Delta`), linearity, mixed partials, cone definition, gradient
   conventions and the countable-choice premise. Statements (a) existence and
   uniqueness of the smooth solution, (b) both Gauss laws, (c) the `c`-cone of
   dependence and the explicit non-physicality caveat are all kept.
5. **`lem-em-point-retarded-potential-and-fields`** (design R2) keeps the three
   design deps (`lem-em-global-retarded-root`, `lem-em-retarded-wave-kernel`,
   `lem-em-point-current-continuity`) and adds the change-of-variables and
   distributional suppliers needed to make the "retarded convolution" clause exact,
   the vector-algebra suppliers, and the regularity suppliers. The field formulas
   `E=C[(1-|beta|^2)(n-beta)/(kappa^3 r^2)+n x ((n-beta) x betadot)/(c kappa^3 r)]`,
   `B=n x E/c` are kept exactly, as are the caveats ("mathematical model computation",
   no self-force/radiation-reaction postulate). The distributional clause is stated as
   exact pairing identities against the locally integrable functions off the worldline
   (the worldline is excluded, so no null-set argument is needed), with the
   retarded-history estimate that makes every pairing finite.
6. **`ex-em-causal-wave-kernel-prerequisites-explicit-checks`** (new B item). The
   design reserves no B item and an empty inventory would fail the manifest gates;
   the example is a genuine mathematical check, not padding: (i) the static
   specialization `z=0` of R2 gives `phi=C/|x|`, `A=0`, `E=Cx/|x|^3`, `B=0`;
   (ii) an explicit nonzero-`G` gauge computation `A=(x_1,0,0)`, `chi=-|x|^2/6` with
   `W chi=1=G`, reached Lorenz gauge and unchanged fields; (iii) the kernel's support
   is sharp at the apex and at every cone point by a nonnegative-bump computation. It
   is homed on the B page and no A item depends on it.

## Dependency verification (actual transitive uses, not declared edges)

All dep targets resolve: published imported items on disk, plus the four in-run
suppliers `thm-em-wave-cauchy-kirchhoff` (page 311, batch 17, level 2, ready),
`lem-em-global-retarded-root` (page 310, batch 16, level 0, ready),
`lem-em-point-current-continuity` (page 305, batch 13, level 0, ready), and this
batch's `def-em-potential-gauge-and-field-conventions`/`lem-em-retarded-wave-kernel`.
Points checked in particular (statements read on disk):

- `thm-em-wave-cauchy-kirchhoff`: its W is exactly `c^{-2}d_t^2-Delta`, its
  solution formula is the c-normalized Duhamel term, its (b) uniqueness is for C^2
  solutions with the same data/source, its (c) cone clause assumes data on the closed
  base ball and sources on the closed cone, and it carries AC_omega — all four uses
  (kernel identification, gauge function, Maxwell reduction, cone) match its clauses.
- `lem-em-global-retarded-root`: used for existence/uniqueness of the root and for
  `d_t s=kappa^{-1}`, `grad s=-n/(c kappa)`, `kappa>=1-v_*/c>0`; see the finding below.
- `lem-em-point-current-continuity`: it is stated for an open interval `I` and a C^1
  curve; `I=R`, `Omega=R^3 x R` and C^3 `z` are instances, and no endpoint terms are
  introduced by the consumer.
- Published suppliers checked for exact hypotheses: `thm-polar-coordinates-formula-for-lebesgue-measure`
  (nonnegative Borel, AC_omega), `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`
  (chart measure = polar measure, n>=2), `cor-one-dimensional-change-of-variables-with-absolute-derivative`
  (C^1 injective with nonvanishing derivative, continuous integrand),
  `cor-c-one-change-of-variables-for-l-one-functions` and
  `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
  (C^1 diffeomorphism; the second applied to `|f|` first to establish `f in L^1`),
  `thm-domain-of-dependence-and-local-uniqueness` (AC_omega, C^2 solutions, agreement
  on the cone and base ball) — the Maxwell cone clause is read through the cone clause
  of the in-run wave theorem, which is the library form of that argument,
  `thm-the-curl-of-a-gradient-vanishes` (C^2), `thm-the-divergence-of-a-curl-vanishes`,
  `cor-the-curl-of-a-curl-of-a-c2-field`, `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`,
  `lem-cross-product-is-bilinear-alternating-and-orthogonal` (bilinearity,
  alternation, orthogonality used for `n x (n-beta)=-n x beta` and the triple-product
  identity), `def-regular-distribution-from-a-locally-integrable-function`,
  `thm-distributional-differentiation-is-continuous-and-commutes` (continuity of
  distributional derivatives in the weak topology, ZF part), and the mollifier /
  approximate-identity pair. The triple-product identity `n x ((n-beta) x betadot)
  = d(n-beta)-kappa betadot` is proved inline by coordinates as the design's R2
  proof does; it is not a separate harvested item.
- Axioms: AC_omega is declared in every item that uses the wave theorem, the polar
  formula or the change-of-variables corollary, and `def-countable-choice` is in their
  deps with the exact use identified. No arbitrary-index choice, no DC-only claim and
  no `deferred-set-theory-beyond-choice` path is used.
- No missing, circular, forward or inadequate dependency was found in the closure;
  `content-policy --manifest-only` over all 40 manifests reports 0 errors and 0
  warnings at the time of writing.

## Findings for owner reconciliation

1. **Scaffold-level supplier hypothesis defect (batch 16).**
   `lem-em-global-retarded-root` (page 310) states the hypothesis `z` of class `C^1`
   but concludes that the root map is of class `C^3`. With `C^1` data the
   parametrized implicit function theorem gives only `C^1`; the design's R1 states
   `z in C^3`, which is what makes the `C^3` conclusion true. Proposed minimal repair:
   strengthen the hypothesis to `z` of class `C^3` (matching the design and the
   conclusion). No other in-run consumer declares this supplier, and
   `lem-em-point-retarded-potential-and-fields` already assumes `z in C^3`, so the
   repair has no other consumer impact. Exact evidence is in
   `research/physics-em-sr-40-2026-10-08-batch-21.cross-batch-dependencies.json` (row
   `lem-em-point-retarded-potential-and-fields -> lem-em-global-retarded-root`).
2. **Undeclared prerequisite pages (design/plan metadata; `validate-plan` FAIL).**
   Running `frontier-item-gate … --tool validate-plan` after this scaffold reports
   (among other batches' findings) three errors naming
   `em-causal-wave-kernel-prerequisites`:
   - item dependency on `fubini-and-change-of-variables`, induced by
     `cor-one-dimensional-change-of-variables-with-absolute-derivative` (used by
     `lem-em-retarded-wave-kernel` and `lem-em-point-retarded-potential-and-fields`);
   - item dependency on `the-topology-of-euclidean-space`, induced by
     `cor-euclidean-closed-balls-and-spheres-are-compact` (used by
     `lem-em-retarded-wave-kernel`);
   - item dependency on `density-separability-and-convolution-in-lp`, induced by
     `def-l-one-approximate-identity-on-rn`,
     `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` and
     `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions`
     (all used by `lem-em-retarded-wave-kernel`).
   These published home pages are genuinely used and must be added to page 321's
   `requires` (or declared as P entries), exactly as the owner's
   `research/physics-em-sr-40-2026-10-08-external-prerequisite-repair.json` did for
   the earlier A pages (its `missing_consumer_homes_after` was empty because pages
   321+ still had empty inventories at that time). The same class of finding exists
   for the concurrently scaffolded page `em-causal-response-and-radiation-prerequisites`
   (fubini-and-change-of-variables) and for two SR pages; this scaffolder did not edit
   the shared plan and records the exact repair here for owner reconciliation.
   Separately, the design's R2 dependency on `lem-em-point-current-continuity` homes
   on `em-elementary-mathematical-prerequisites` (order 305, batch 13), which is also
   not in the declared closure (321 -> 311 -> {310,
   wave-equation-representation-formulas}); reading order is unaffected (305 < 321),
   and the same declaration repair (or an explicit owner decision) is required.
   None of these is a mathematical prerequisite gap: every named supplier is
   published on disk and was read and checked; the finding is the plan-level
   `requires` declaration (the same class batch 20 recorded for pages 311/313).
3. **Published defects: none found** among the published suppliers used. No supplier
   statement was found false, mistyped or directionally wrong; the only defect found is
   the in-run scaffold slip in finding 1.

## Sources (three treatments, all full-text stamped 2026-10-08)

1. D. Tong, *Electromagnetism* (Cambridge Part II lecture notes, 2026 printing, 236
   pp.), author-hosted at
   `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`
   (sha256_16 `b99b41156dfe6cd9`, 1 882 418 bytes). Read: §6.1 pp. 134–135 (gauge
   transformation, Lorenz condition, `Box chi=f`), §6.1.2 pp. 140–142 (retarded
   Green's function, root equation (6.36)), §6.1.3 pp. 142–143, §6.4.1 pp. 157–159
   (point sources (6.30)–(6.31), delta substitution, potentials (6.34)–(6.36)),
   §6.4.2–§6.4.3 pp. 159–164 (constant-velocity example (6.37); fields (6.42),
   (6.44)–(6.45)). Dispositions: gauge reachability, kernel/G_ret, point sources and
   Liénard–Wiechert are `included`; the covariant and emitted-power material is
   `out-of-scope` with destinations on later physics pages.
2. G. Teschl, *Partial Differential Equations* (2025 archived author manuscript;
   `https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf`,
   sha256_16 `cea9939acea1858e`, 2 912 992 bytes). Read: §7.1 pp. 167–172
   (Kirchhoff (7.10), Theorem 7.2, Duhamel (7.11)–(7.12), Maxwell Problem 7.9), §7.2
   pp. 173–176, §7.3 pp. 176–178 (cone (7.29), uniqueness). Dispositions: the
   Kirchhoff/Duhamel and Maxwell-reduction headings are `deferred` to
   `em-wave-equation-prerequisites` (the in-run home of
   `thm-em-wave-cauchy-kirchhoff`) or `included` in this batch's items; §7.2 and §7.3
   bounded-domain material is `out-of-scope` with reasons.
3. V. Ivrii, *Partial Differential Equations* (Toronto, 2026, 415 pp.),
   `https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf`
   (sha256_16 `02c9eb1e43203930`, 4 626 594 bytes). Read: Ch. 9 pp. 281–293
   (3D wave (9.1.4), (9.1.8)–(9.1.12); energy (9.2.2)–(9.2.5), Proposition 9.2.1)
   and Ch. 11 pp. 330–349 (§11.1–§11.2 distributions and convolution, Exercise
   11.2.6(e)). Dispositions: the wave/energy/distribution headings are `included`;
   §11.3–§11.4 boundary applications are `out-of-scope` with reasons.

Recovery history for the Tong source: the initial damtp HTTPS URL failed node TLS
verification (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`) while curl retrieved the full body;
the plain-http host mirror and the author-hosted `davidtong.org` copy both returned
the identical 1 882 418-byte PDF; the author-hosted copy was stamped and used. Full
attempt list in the coverage file.

The research arguments (`completed-expansion-arguments.md` W3/W6/W7/R2,
`definition-contracts.md`) are the in-repo reference for every item via the manifest
`reference` fields; the three external treatments below back the standard PDE,
distributional and retarded-potential ingredients the items consume.

## Checks run (actual results)

- `manifest-deps research/…-batch-21.pages.json`: 6 items, 0 missing, 0 errors.
- `content-policy --manifest-only research/…-batch-*.pages.json` (all populated
  manifests): 0 errors, 0 warnings (231 scoped items at the time of the run).
- `item-dependency-levels check --run`: no error naming any batch-21 page or item
  (computed levels 0,3,3,3,4,5 match the manifest labels; no cycle, no forward
  edge); the reported errors are only `empty scaffold inventory` rows for pages of
  batches still in flight (concurrently being written by other workers).
- `coverage-checklist --require-destination` (batch-21 coverage): 2 pages, 44
  harvested results, 0 errors, 0 warnings.
- `source-fetch-check --coverage … --stamp`, then check mode: 6/6 source rows
  fetch-verified (3 sources × 2 pages; stamps above); 6/6 resolved.
- `step1-decisions record` + `check --run`: all 6 batch-21 items recorded; see the
  per-item records for examined dependencies and reasons. Remaining work rows belong
  to in-flight batches.
- `frontier-dependency-ledger refresh --run`: refreshed; all 6 batch-21 edges carry
  one `open` review row each; batch 21 appears in `reviewed_batches` with no orphans.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
  `drift-review-check --run`: 40 pages reviewed, 0 spec edits, no blocked edges;
  52 same-category requires edges checked, every owed A and B page strictly above
  95% published-or-earlier-in-run.
- `frontier-item-gate … --tool validate-plan`: FAIL, 7 errors. Three name page
  `em-causal-wave-kernel-prerequisites` (the three undeclared published homes listed
  in finding 2); the other four belong to other batches (`sr-proper-time-comparisons`,
  `sr-energy-momentum` x2, `em-causal-response-and-radiation-prerequisites`). No
  mathematical error or missing supplier is asserted by any of them; they are
  plan-metadata declaration findings for owner reconciliation. 13 `redundant-prereq`
  warnings were also printed, none naming a batch-21 page.
- `frontier-item-gate` item selectors (`extcheck --manifest-only`, `fwdcheck`) cannot
  run at all while any batch manifest has an empty page (currently batch 10 and the
  still-empty batches); this is run-level state, exactly as batch 20 recorded.
  Running `extcheck` directly over the corpus reports 26654 items, 0
  recorded-not-proved, 0 resting on them — no external-reference finding involves
  batch 21.

## Honest uncertainty

- The items are scaffolded with complete proof strategies and exact cited uses, but
  they are not authored item files and have not received independent review; Step 3
  provides that. In particular the R2 field computation is a long coordinate
  computation whose written form must be checked line by line against the strategy,
  and the distributional identities of the kernel item must be checked against the
  published distribution suppliers at authoring time.
- The Tong locators were read from the freshly stamped author-hosted 2026 printing,
  which differs in bytes from the 2026-10-03 research copy used by the research
  phase; the section-level content was re-read in the new copy, printed-page locators
  are as printed in the notes' own page markers.
- The batch-16 hypothesis defect (finding 1) is reported, not repaired: this
  scaffolder owns only batch 21. Until the owner reconciles it, the readiness record
  of `lem-em-point-retarded-potential-and-fields` rests on the consumer's own `C^3`
  hypothesis and on the true `C^1`-level content of the supplier, as stated in its
  record and cross-batch row.
