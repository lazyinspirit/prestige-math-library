# frontier-38-owner-30 — batch 14 scaffold notes

## Scope and authority

- Owned pair: `thom-spaces-normal-data-and-collapse-maps` (A, order 547) and
  `thom-spaces-normal-data-and-collapse-maps-examples` (B, order 548),
  differential topology. The batch manifest contains 15 A items and five B
  items, in the design's order; all 20 have current Step-1 `ready` records
  written in dependency order (levels 0 to 3). A readiness record states that
  the item has a complete proof strategy and adequate met prerequisites; it is
  not independent mathematical approval.
- `research/frontier-38-owner-30-owner-authoring-direction.md` exists and was
  read before construction. It is binding and controls this pair: use the
  verified Stanford 215B Lectures 14–15, pp. 44–46, Theorems 138–139 for the
  collapse/Thom pullback-PD claim; use May Ch. 23 §5, pp. 194–196, and the
  published AT interfaces for the remaining Thom claims; tubular charts must
  preserve the specified normal identification (identity induced normal
  derivative) and choice-independence is proved only for that exact normal
  data; unrestricted-chart independence must not be asserted.
- The registered local prerequisite packet `research/frontier-38-owner-30-local-prereq-547.md`
  had already authored the 20 draft item files; this scaffold verified their
  mathematics against the design, the owner direction, the plan and the
  published suppliers, built the manifest, coverage, ledger input and readiness
  records, and made the minimal repairs recorded below. No published content,
  shared plan, engine state or verdict was edited.

## Design, plan and owner-direction reconciliation

- The current plan (`research/plan-spec.json`, orders 547/548) carries exactly
  the design's DT-16 inventory: the same 15 A and five B IDs in the design
  order, with the plan's `requires` list (nine published pages for A; the A
  page for B). The manifest keeps that inventory, order and `requires` set.
- **Source conflict (plan/owner direction override the design).** The design's
  DT-16 lists MS Ch. 18 §§18.1–18.4, MM Ch. III §§3.8–3.17, F Lectures 2–3 and
  10, and W §8.1. The binding owner direction for this run instead requires
  Stanford 215B Lectures 14–15 (Theorems 138–139) and May Ch. 23 §5, with the
  published AT interfaces for the remaining Thom claims. The manifest and
  coverage follow the owner direction; the design's source list is superseded.
- **Design item 9 is false as unqualified prose, and is corrected.** "Collapse
  is independent of the tubular neighbourhood" fails if a chart may be
  precomposed by an arbitrary normal automorphism while the specified normal
  identification is held fixed: for `{0} ⊂ R` the charts `Φ₊(t)=t` and
  `Φ₋(t)=−t` give degree `+1` and `−1` sphere maps with induced normal
  derivatives `+1` and `−1`. The owner direction confirms this. The authored
  lemma states and proves independence for the compatibility class whose
  induced normal derivative is the specified `α` (identity on the normal
  quotient) and exhibits the reflected line as the sharp boundary; no claim of
  unrestricted chart independence remains.
- **Design "Requires" vs plan "Requires".** The design's DT-16 paragraph also
  names `obstruction-theory-postnikov-towers-and-classifying-spaces` "for
  cohomological statements". The current plan's `requires` list (which controls
  this run) omits it, and no item in this pair consumes obstruction theory: the
  cohomological content is the published AT Thom class/isomorphism, Poincaré
  duality and cap-product interfaces. Recorded as a resolved conflict; if a
  later consumer requires obstruction theory, that belongs to another pair.
- No other inventory, ordering or claim conflict was found. The two B items use
  the A page (plus published items), and the B page requires only its A page.

## Prerequisite and dependency verification

- Every one of the 20 items was read in full, together with the statements and
  proofs of every published supplier it names. Examined published suppliers
  (all `status: published`): `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`,
  `prop-thom-space-of-zero-and-trivial-bundles`,
  `def-normal-and-conormal-bundles-of-an-embedded-submanifold`,
  `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`,
  `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`,
  `prop-normal-and-conormal-bundles-are-smooth-vector-bundles` (context),
  `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`,
  `def-pullback-vector-bundle-and-pullback-section`,
  `cor-local-normal-form-for-submersions`,
  `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`,
  `thm-relative-whitney-approximation-for-manifold-valued-maps`,
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`,
  `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`,
  `lem-continuity-is-local-and-pastes`, `def-axiom-of-choice`,
  `def-countable-choice`, `def-thom-class-by-fiberwise-normalization`,
  `thm-thom-isomorphism-for-oriented-vector-bundles`,
  `thm-naturality-and-uniqueness-of-thom-classes`,
  `thm-poincare-duality-for-oriented-topological-manifolds`,
  `def-relative-cap-product`, `prop-cap-product-naturality-and-projection-formula`,
  `lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls`,
  `def-euler-class-by-zero-section-pullback-of-the-thom-class`.
  Hypotheses, directions, conventions (based quotients, outward/front-evaluation
  cap, normal-first orientation) and axiom strength were checked against each
  use; no missing, circular, forward or inadequate dependency remains in the
  manifest.
- All out-of-run dependency home pages lie in the transitive `requires`
  closure of the A page (checked: `euclidean-ordinary-differential-equations-with-smooth-dependence`,
  `cup-cap-cross-products-and-cohomology-rings`, `rank-theorems-and-embedded-submanifolds`,
  `topological-spaces-and-continuity`, `relations-functions-and-quotients`);
  `validate-plan` reports no `undeclared-prereq` finding.
- **Axiom-strength repairs (5 item files, all draft).** The registered packet
  under-declared the countable-choice `AC_ω` that this development genuinely
  carries, because the repository proves the tangent/normal-bundle smooth
  structure and the tubular theorem under `AC_ω`:
  - `def-pontryagin-thom-collapse-of-an-embedded-submanifold`, 
    `def-stable-normal-bundle-of-a-compact-smooth-manifold`,
    `thm-stable-normal-bundle-is-independent-of-the-embedding` and
    `prop-transverse-preimage-carries-a-pulled-back-normal-structure` now
    declare `def-countable-choice` in `deps` and state the inheritance and its
    exact use in their bodies;
  - the items that already assumed full AC (which implies `AC_ω` —
    `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms`,
    `def-thom-class-and-thom-isomorphism-interface`,
    `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual`,
    `ex-zero-section-pulls-back-the-thom-class-to-the-euler-class`) keep their
    explicit assumption and use it exactly through the imported AT/smoothing
    suppliers;
  - the two B instances (`ex-collapse-map-of-an-equatorial-sphere`,
    `cex-different-unstabilized-normal-bundles-can-have-nonisomorphic-thom-data`)
    are explicit or trivial instances and add no choice.
  Three explicit tool uses with published homes were also added to `deps`:
  `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding` (the
  compact-immersion step of the stable-normal transport),
  `cor-local-normal-form-for-submersions` (the submersion step of the
  transverse-preimage proposition) and `lem-continuity-is-local-and-pastes`
  (finite closed-cover pasting in collapse continuity). The plan inventory must
  be refreshed by the Step-4 splice to carry these deps; the changes are
  dependency/hypothesis corrections, not scope changes.
- **Owner-direction normal-data check.** The collapse definition imposes the
  induced normal derivative condition, the independence lemma preserves exactly
  that class, and the collapse/PD proposition uses the normal-first orientation
  with the library's cohomology-first, front-evaluation cap; the Stanford p.46
  convention remark (Bredon versus Hatcher orders) is handled explicitly and the
  mod-two and rank-zero cases are retained.
- **Stable-normal route.** The transport is the explicit global ODE solution
  `U̇ₜ = KₜUₜ` with `Kₜ = ṖₜPₜ − PₜṖₜ`; `Kₜ` is skew, so `Uₜ` is orthogonal and
  conjugates `P₀` to `Pₜ`. This is choice-free beyond the declared `AC_ω` and
  cancels no unstable summand, so no unstable independence is asserted (the B
  counterexample shows it is false).
- Exact in-run dependency levels (published and other out-of-run suppliers do
  not raise them): level 0 — `def-disk-bundle-sphere-bundle-and-thom-space`,
  `def-stable-normal-bundle-of-a-compact-smooth-manifold`,
  `def-thom-class-and-thom-isomorphism-interface`; level 1 — the metric lemma,
  the trivial-rank proposition, the stable-normal theorem, the collapse
  definition, the transverse-preimage proposition, the suspension lemma, the
  Möbius and Euler examples; level 2 — the conventions remark, collapse
  continuity, normal cobordisms, collapse/PD, the spectrum remark, the trivial
  line and equatorial examples, the counterexample; level 3 — collapse
  independence. No cycle, no forward reference, no B-page-only supplier.

## Source record and harvest

Full texts were downloaded and read for the three coverage sources, then
fetch-verified by `source-fetch-check --stamp`:

| Treatment | Kind | Locator actually inspected | Stamp |
|---|---|---|---|
| [Stanford Math 215B notes](https://web.stanford.edu/~lindrew/math215B.pdf) | lecture-notes | Lectures 14–15, Theorem 138 and Theorem 139 with the complete displayed proof, printed/PDF pp. 44–46, including the p.46 cap-order remark and the rational-representability aside | 543,433 B, 63 pp., `sha256_16 7ac76c813f493ed7` |
| [May, *A Concise Course in Algebraic Topology*](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf) | textbook | Ch. 23 §§3–5, printed pp. 191–196 (PDF 199–204): normal complements and stable-normal well-definedness pp.191–193; Thom space, Thom class, Thom isomorphism pp.194–196 and the §6 stabilization identity on p.196 | 1,715,976 B, 251 pp., `sha256_16 6724f02748ed1f2f` |
| [Hatcher, *Vector Bundles and K-Theory*](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf) | textbook | §1.2 Theorem 1.6 and Proposition 1.7, printed pp. 20–21 (PDF pp. 24–25) | 1,563,812 B, 124 pp., `sha256_16 04282b30dfa63051` |

`research/frontier-38-owner-30-batch-14.coverage.json` disposes 21 harvested
results: six `included` in manifest items, seven `inline`, three
`already-published` (the AT Thom diagonal, Thom class and Thom isomorphism),
and five `out-of-scope` with
individual reasons (rational representability, product Thom spaces, the
boundary Stiefel–Whitney theorem, and the two Hatcher endpoint-transport
statements, which the explicit ODE transport does not consume). The
`coverage-low-yield` warning (6/21 included) is expected and justified: most of
May §5 is AT-owned and already published, and this pair deliberately consumes
those interfaces instead of rebuilding them. No source failed retrieval; no
retry allowance was consumed (one attempt per URL, all successful); no
`source_resolution` drop or escalation was needed.

## Choice, published defects and uncertainties

- Choice: `AC_ω` is declared wherever the repository's tangent/normal-bundle
  and tubular machinery actually uses it (see the repairs above); full AC is
  declared only where the published AT/smoothing suppliers assume it. No item
  reaches a Recorded-not-proved result, and there is no Foundations path.
- No defective actual prerequisite was found among the published items this
  pair consumes; their statements, hypotheses and directions support the uses
  recorded above. One declaration-style variation is noted for the ledger,
  with no proof defect asserted: a few published consumers of
  `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`
  state the inherited `AC_ω` in the item body without listing
  `def-countable-choice` in `deps` (for example
  `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial`, published
  with the assumption stated but no choice deps entry). The batch-14 items take
  the stricter form: assumption stated and dependency declared.
- Unresolved uncertainty: none asserted. The one genuinely delicate analytic
  step, smoothing a continuous based homotopy only near the zero section while
  fixing endpoint collars and a zero-free buffer, is carried by the published
  relative Whitney and relative transversality suppliers under AC; Step 3 must
  write it out in full and Step 5 must review it. The normal-first cap sign
  convention should also receive explicit review.

## Checks and remaining run-level work

| Check | Actual result |
|---|---|
| `coverage-checklist` batch 14 with `--require-destination` | exit 0; 1 page, 21 harvested results, 0 errors, 1 justified `coverage-low-yield` warning |
| `source-fetch-check --stamp` then check mode | exit 0; 3/3 sources fetch-verified (1 attempt each), 3/3 resolved |
| `url-sweep` on batch 14 coverage (own output path) | exit 0; 3/3 live, 3 citation decisions, 0 drops |
| `source-backing` on batch 14 coverage | exit 0; 5 authored results, every one still backed |
| `manifest-deps.mjs` batch 14 / whole run | exit 0; 20 / 201 items, 0 missing or malformed `deps` |
| `content-policy.mjs --manifest-only` batch 14 / whole run | exit 0; 20 / 201 scoped items, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | exit 0; no undeclared prerequisite from this pair |
| `item-dependency-levels.mjs check --run` | exit 1 at check time (42 errors) all from other batches' still-empty or unlabeled inventories; 0 errors touch batch 14, whose 20 labels match the computed levels |
| `step1-decisions.mjs check --run` | exit 1 at check time; 201 run items, 62 ready, 181 open rows — 0 rows touch batch 14, so all 20 records are current |
| `frontier-dependency-ledger.mjs refresh --run` | exit 0; batch-14 input is `[]` (no cross-batch edge) and no unified row touches this pair |
| `extcheck.mjs` | exit 0; this pair introduces no recorded-not-proved dependency |
| `fwdcheck.mjs` | exit 1 at check time: 0 open forward references overall; its 2 `link-unplanned` errors are in other batches' in-flight draft items, none in this pair |
| `precheck.mts` on the changed proof items | exit 0; 3 checked, 0 failing |
| `proof-layout.mjs` on all 20 items | exit 0; 20 items, 35 steps, 0 defects |
| `rendercheck.mjs` on all 20 items | exit 0; YAML and KaTeX clean |

Step 3 must author/verify the full proofs as written (especially the relative
smoothing patch, the uniform-chart Taylor extension and the local cap
computation), and Step 4 must splice the manifest — including the corrected
deps and hypotheses — into the plan. The whole-run Step-1 gates currently fail
only on other batches' unfinished units; batch 14 itself is clean.

## Same-reviewer normal/Thom repair closure

Current complete local proofs and exact source/consumer evidence are in
`frontier-38-owner-30-batch-14-local-repair.md` and `.json`. The initial
authoring rank-zero exception was false under the actual based quotient;
zero sections are closed in all ranks, rank-zero is clopen, and the original
unrestricted homotopy range is restored with a full relative smoothing branch.
Compact central-band/collar buffering and small good parameters replace the
noncompact-interior-zero argument. Stable-normal transport uses normal images;
boundary preimages use a time-preserving relative IFT. One genuine local
cohomology quotient helper is registered before the Thom interface, bringing
the pair to17A+5B=22items. Stabilization and trivial-rankzero basepoints and the
Euler continuous-section wording are corrected. All actual interface consumers
were reviewed. Existing low-yield coverage warning remains recorded, with no
source decline waiver or owner decision invented. Parent owns current scope
closure and ordinary dependency-ordered author/item recertification; no
post-baseline bypass of ordinary receipts was written here.

## Owner-held Step 3 gate repair, heat lane

The trivial-line suspension boundary row now cites its disk/sphere quotient calculation, point/empty cases and the specified trivialization. No converse asserting bundle triviality from a suspension Thom space is made.

Exact decisions, source hashes, consumers and focused checks are in `frontier-38-owner-30-step3-gate-repair-heat-decisions.json` and the matching report. This lane provides mathematical repair evidence, not central certification or an owner decision.
