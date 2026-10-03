# Step 3b auditor/author report — pair `sobolev-traces-and-zero-boundary-values`

- Run: `frontier-38-owner-30` (stage `3b-author`), dispatch label
  `step3b-pair-sobolev-traces-and-zero-boundary-values-d6b7e8481196a21d`.
- Role: alpha-high author (not owner). No owner ruling used beyond the recorded
  Step-3a scope decision; none invented.
- A page: `sobolev-traces-and-zero-boundary-values`, batch 4, order 458.023,
  category `pde`, 21 items (dependency levels 0–7).
- B page: `sobolev-traces-and-zero-boundary-values-examples`, order 458.024,
  7 items (levels 1–7, leaf).
- Batch 4 contains this pair only; its shared files carry no sibling rows.
- Handoff status: **COMPLETE** (all 28 items authored, checked, offset by
  current `accept`/`repaired` decisions; both library pages written; batch
  contracts, manifest and coverage reconciled; no open blocker).

## Progress log (owned IDs, obligations, checkpoints)

Status vocabulary: `todo` | `written` | `checked` | `decision`.

| level | item | status |
|---:|---|---|
| 0 | `def-fractional-slobodeckij-space-on-euclidean-space` | written, checked (precheck n/a), decision accept |
| 0 | `lem-one-dimensional-hardy-inequality-on-the-half-line` | written, checked, decision accept |
| 0 | `lem-one-dimensional-sobolev-endpoint-estimate` | written, checked, decision accept |
| 1 | `def-fractional-sobolev-space-on-a-compact-c-one-boundary` | written, checked (precheck n/a), decision accept |
| 1 | `lem-coordinate-direction-form-of-the-slobodeckij-seminorm` | written, checked, decision accept |
| 1 | `lem-slobodeckij-seminorm-is-well-defined` | written, checked, decision accept |
| 1 | `thm-trace-estimate-on-the-half-space` | written, checked, decision repaired (missing declared dep) |
| 1 | `ex-trace-of-an-ac-sobolev-function-on-an-interval` (B) | written, checked, decision accept |
| 2 | `lem-fractional-boundary-norm-is-independent-of-atlas` | written, checked, decision repaired (KaTeX) |
| 2 | `lem-half-space-trace-has-the-fractional-slobodeckij-bound` | written, checked, decision repaired (**defect D1**) |
| 2 | `lem-mean-zero-kernel-scale-estimate` | written, checked, decision accept |
| 2 | `lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces` | written, checked, decision accept |
| 2 | `thm-lp-trace-operator-on-a-bounded-c-one-domain` | written, checked, decision repaired (unused fact F10) |
| 2 | `ex-zero-trace-versus-zero-extension` (B) | written, checked, decision repaired (B-page dep removed) |
| 3 | `lem-sobolev-trace-agrees-with-continuous-boundary-values` | written, checked, decision accept |
| 3 | `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts` | written, checked, decision accept |
| 3 | `thm-sobolev-gauss-green-formula-on-c-one-domains` | written, checked, decision accept |
| 3 | `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control` (B) | written, checked, decision repaired (fact block moved) |
| 4 | `thm-half-space-lift-by-normal-mollification` | written, checked, decision repaired (display join) |
| 4 | `thm-kernel-of-the-trace-is-w-one-p-zero` | written, checked, decision accept |
| 4 | `cex-boundary-point-values-are-not-defined-by-an-lp-class` (B) | written, checked, decision repaired (fact block moved) |
| 5 | `thm-sharp-trace-theorem-for-w-one-p` | written, checked, decision repaired (display join) |
| 6 | `thm-bounded-right-inverse-for-the-sobolev-trace` | written, checked, decision accept |
| 6 | `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range` (B) | written, checked, decision repaired (generation metadata, fact block) |
| 6 | `ex-trace-of-an-affine-function-on-a-ball` (B) | written, checked, decision repaired (missing Verification heading) |
| 7 | `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` | written, checked, decision accept |
| 7 | `rem-endpoint-and-rough-domain-trace-limitations` | written, checked, decision accept |
| 7 | `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` (B) | written, checked, decision repaired (**defect D2** + B-page/forward deps) |

Open obligations at entry, all closed:

1. All 28 scaffold items authored with complete proofs and registered in the
   batch manifest (no new IDs; the two pages and the batch proof-contract file
   written). Resolved.
2. The two Step-3a dependency observations resolved (see §Step 3a observations).
   Resolved.
3. Unfinished suppliers: none; all 54 distinct out-of-batch dependencies are
   published items on disk (checked mechanically before and after authoring).
   Nothing to escalate.
4. Per-item decisions recorded with `tools/step3-decisions.mjs record-item`
   after authoring and checks: 16 `accept`, 12 `repaired`, 0 `escalate`; the
   tool reports 28/28 current for this pair. Resolved.

## Item checkpoints

Dependency levels below are the recomputed levels (three items moved; see
§Manifest/coverage reconciliation). Every proof-bearing item passed
`tools/tsx-run.mjs tools/precheck.mts <path>` and `tools/rendercheck.mjs` on
its own path; the two definitions and the remark are precheck `n/a`.

### Level 0

- `def-fractional-slobodeckij-space-on-euclidean-space` — diagonal convention,
  extended-integral/class conventions, trace exponent θ=1−1/p; class
  well-posedness deferred via `justified_by` to
  `lem-slobodeckij-seminorm-is-well-defined`. Sources: Schikorra V.1
  pp. 96–97; Gagliardo (1.3) pp. 288–289; Kampanou pp. 18–19. Decision accept.
- `lem-one-dimensional-hardy-inequality-on-the-half-line` — weighted-dual
  proof (truncation, dual test function (F/t)^{p−1}, Minkowski, monotone
  convergence) and sharpness family t^{−1/p−α}1_{(1,∞)} with ratio →(p')^p;
  interval form. Decision accept.
- `lem-one-dimensional-sobolev-endpoint-estimate` — ACL/FTC identity, p=1 and
  1<p<∞ cases via 2^{p−1} and Hölder, reflection for the right endpoint,
  representative independence, multiplicative form. Decision accept.

### Level 1

- `def-fractional-sobolev-space-on-a-compact-c-one-boundary` — finite chart
  family with flattening charts and ambient partition, sum norm, atlas
  independence deferred via `justified_by` to
  `lem-fractional-boundary-norm-is-independent-of-atlas`. Decision accept.
- `lem-coordinate-direction-form-of-the-slobodeckij-seminorm` — polar form
  [g]^p=∫_{S^{d−1}}F_g dσ; upper comparison by telescoping along a
  coordinate polygonal path; lower comparison by averaging against a fixed
  probability density supported near e_i plus a spherical comparison. Decision
  accept.
- `lem-slobodeckij-seminorm-is-well-defined` — null-set insensitivity (Tonelli),
  homogeneity, Minkowski triangle inequality, zero seminorm forces a.e.
  constancy (Fubini) and then zero by infinite Lebesgue measure. Decision
  accept.
- `thm-trace-estimate-on-the-half-space` — pointwise normal-line identity from
  ACL+FTC; Tonelli/Hölder integration; strip form from the 1-D endpoint
  estimate; density of C_c^∞(R^n)|_H via the published half-space extension
  operator plus interior density on R^n (the scaffold's H∩B_R route was
  replaced: half-balls have corners); extension by the completion universal
  property; uniqueness and class dependence. **Repaired in check**: the fact
  citing `thm-riesz-fischer-completeness-of-l-p` was missing from `deps`
  (depcheck `cited-not-in-deps`); added to deps and to the manifest row, and a
  duplicate inline wikilink in [F2] was removed (it produced a duplicate
  contract citation). Decision repaired.
- `ex-trace-of-an-ac-sobolev-function-on-an-interval` (B) — trace as the
  endpoint pair; well-defined linear bounded; both directions of
  ker T=W_0^{1,p}(I) (forward by continuity; converse by truncation toward the
  endpoints, zero extension, interior mollification); worked functions x(1−x)
  and 1. Decision accept.

### Level 2

- `lem-fractional-boundary-norm-is-independent-of-atlas` — bi-Lipschitz bounds
  from bounded derivatives via a path/chord argument (no convexity of chart
  domains); diffeomorphism invariance by change of variables; bounded-Lipschitz
  multiplier estimate; atlas comparison over finitely many overlaps.
  **Repaired in check**: `\Psi'_k^{-1}` parsed as a KaTeX double superscript
  (rendercheck failure); parenthesised as `(\Psi'_k)^{-1}` in both occurrences
  of step 3.1, mathematics unchanged. Decision repaired.
- `lem-half-space-trace-has-the-fractional-slobodeckij-bound` — midpoint
  splitting, Hardy in the normal variable, Hölder on the tangential segment,
  Fatou in the density argument, exact scaling computation. **Statement
  repaired (defect D1)**: the scaffold's middle expression
  C(‖u‖_{L^p}+‖∂_n u‖_{L^p}) is false; the item now states
  [g]^p≤C(d,p)∫_H|Du|^p≤C(d,p)‖u‖^p_{W^{1,p}} with the matching scaling
  paragraph. Decision repaired.
- `lem-mean-zero-kernel-scale-estimate` — difference form of the convolution,
  Ct^{−d} ball bound, Hölder over the ball, Tonelli in (x,y,t), exact tail
  exponent |y|^{−(p+d−1)}=|y|^{−d−pθ}, coordinate-direction comparability.
  Decision accept.
- `lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces` —
  truncation by a smooth cutoff in two weight regimes; translation continuity
  of the seminorm by a near/far split; mollification with the second-difference
  estimate. Decision accept.
- `thm-lp-trace-operator-on-a-bounded-c-one-domain` — chartwise estimate on
  continuous classes (partition, flattening, half-space trace, bounded graph
  density); density of C_c^∞(R^n)|_Ω; completion extension. **Repaired in
  check**: fact [F10] (W^{1,p} class conventions) was declared but never cited,
  leaving its two contract citations without uses; cited it at the
  class-dependence clause of step 3.1 and added it to the step tag. Decision
  repaired.
- `ex-zero-trace-versus-zero-extension` (B) — the four-way equivalence, with
  (i)–(iii) from the interval trace example and (ii)⇔(iv) proved locally
  through the absolutely continuous representative. **Repaired in check**:
  removed the load-bearing dependency on the B-page counterexample
  `cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump`
  (depcheck `b-leaf-content`) and an unused fact
  (`lem-compact-support-zero-extension-in-wkp`); the failure of (iv) for u≡1
  is now the contrapositive of step 1.2, and the statement's δ_0−δ_1 clause
  was trimmed. Decision repaired.

### Level 3

- `lem-sobolev-trace-agrees-with-continuous-boundary-values` — Tu=ũ|∂Ω from
  the defining property of T; uniqueness of the continuous boundary
  restriction along sequences x_m→x∈∂Ω. Decision accept.
- `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts` —
  multiplicativity under smooth cutoffs, locality under restriction to
  subdomains, chart transport, each by density plus uniqueness of bounded
  extensions. Decision accept.
- `thm-sobolev-gauss-green-formula-on-c-one-domains` — smooth divergence-theorem
  case (bilinear reduction for complex scalars), density extension with
  Hölder estimates, finiteness of all three pairings. Decision accept.
- `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control`
  (B) — explicit concentrating family u_δ=θ(y/δ) on the outward cusp α>p:
  ‖u_δ‖^p_{W^{1,p}}≤Cδ^{α+1−p}, boundary mass ≥2δ, ratio diverges like
  δ^{(p−α)/p}; no bounded extension of classical restriction exists.
  **Repaired in check**: the fact declarations sat inside the Counterexample
  block (invisible to the contract parser); moved to a Facts & Assumptions
  section, steps unchanged. Decision repaired.

### Level 4

- `thm-half-space-lift-by-normal-mollification` — mean-zero kernel
  ψ=−Σ∂_i(y_iφ), R_+g=η(t)(g*φ_t), tangential/normal derivative identities,
  norm estimate from the mean-zero kernel scale estimate, extension to
  W^{θ,p} by completion, right-inverse identity by density.
  **Repaired in check**: a display formula was hard-wrapped (rendercheck
  `multiline-display`); joined with `tools/fix-multiline-display.mjs`.
  Decision repaired.
- `thm-kernel-of-the-trace-is-w-one-p-zero` — forward inclusion by continuity;
  converse by the half-space zero-extension computation (direct Fubini + FTC,
  replacing the scaffold's unavailable unbounded half-space Gauss–Green step),
  translated mollification, chart pieces, interior piece; both inclusions.
  Decision accept.
- `cex-boundary-point-values-are-not-defined-by-an-lp-class` (B) — null-set
  change of representative (f=0 vs 1_{∂Ω}) and the unbounded profile
  (1−|x|)^{−1/4}∈L^2(B); trace vs pointwise evaluation.
  **Repaired in check**: fact declarations moved out of the Counterexample
  block into Facts & Assumptions, argument unchanged. Decision repaired.

### Level 5

- `thm-sharp-trace-theorem-for-w-one-p` — boundedness in the fractional norm
  (chartwise flat bound + atlas comparison), surjectivity via the flat right
  inverse patched through charts, strictness of the range by the
  high-frequency family ϑ(y)sin(my_1) with seminorm ≳m^θ, and non-compactness
  by the boundary-concentrating family ψ(my)/C_m (weakly null, traces of norm
  bounded below). **Repaired in check**: display formula hard-wrapped; joined
  with `tools/fix-multiline-display.mjs`. The Step-3a observation on
  `lem-c-k-boundary-flattening-preserves-wkp-locally` is resolved (declared in
  deps and used in [F5]/step 1.1). Decision repaired.

### Level 6

- `thm-bounded-right-inverse-for-the-sobolev-trace` — collar-localised
  construction (chart neighbourhoods shrunk inside the prescribed U), piece
  traces by chart transport/multiplicativity, R_U=Σu_j with the estimate,
  non-uniqueness recorded. Decision accept.
- `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range` (B) — jump
  function on a straight chart; exact divergence threshold pθ≥1, i.e. p≥2;
  transfer to the boundary by the chart density; for 1<p<2 the same jump lies
  in the range, so the range depends on p. **Repaired in check**: removed
  `generation:` metadata that SCHEMA reserves for ai-generated statements
  (content-policy error) and moved fact declarations into Facts & Assumptions.
  Decision repaired.
- `ex-trace-of-an-affine-function-on-a-ball` (B) — affine function is smooth on
  the closed ball; trace is its classical restriction; fractional membership
  and norm bound for 1<p<∞; boundary L^p norm as a sphere integral; p=1 kept
  outside W^{0,1} notation. **Repaired in check**: the numbered verification
  steps had no `## Verification` heading (they sat inside Facts &
  Assumptions), leaving the item with no contract-visible steps; heading
  inserted, content unchanged. Decision repaired.

### Level 7

- `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` — both directions of
  u=Rg+v with v∈W_0^{1,p}; non-attainment outside the trace range.
  Decision accept.
- `rem-endpoint-and-rough-domain-trace-limitations` — scope remark: p=1
  surjectivity and Peetre non-existence attributed (not proved), W^{0,1}
  refused, outward-cusp limitation, Lipschitz scope of Gagliardo, no pointwise
  boundary values. Decision accept.
- `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` (B) —
  Fourier-integral Poisson-type extension U; smoothness on R^d×[0,∞),
  boundedness, harmonicity, U(·,0)=g; energy identity
  ‖∇U‖²_{L²(H)}=2π∫|ξ||ĝ|²; local trace on cylinders Q_R; global T_+U=g
  under the exact L²(H) condition (d≥2 always, d=1 iff ∫g=0) by a cutoff
  density argument. **Statement repaired (defect D2)** and the B-page/forward
  dependencies `ex-heat-and-poisson-semigroups-as-fourier-multipliers`,
  `ex-fourier-transform-of-the-poisson-kernel` and
  `lem-ltwo-fourier-multiplier-bound` replaced by A-page suppliers and local
  arguments. Decision repaired.

## Defects found, evidence, repairs

- **D1 — `lem-half-space-trace-has-the-fractional-slobodeckij-bound`
  (confirmed, repaired).** The scaffold statement's middle bound
  [g]^p≤C(‖u‖_{L^p}+‖∂_n u‖_{L^p}) is false. Witness: d=1, p=2, θ=1/2,
  u_m(x,t)=sin(mx)χ(t) with χ∈C_c^∞([0,∞)), χ=1 near 0: the RHS is uniformly
  bounded in m while [g_m]²_{1/2,2}≍m‖sin‖²_{L²}→∞. The design's §12.5 row
  and the scaffold strategy both describe the gradient bound, which is the
  form whose two sides scale alike. Repair: statement now
  [g]^p≤C(d,p)∫_H|Du|^p≤C(d,p)‖u‖^p_{W^{1,p}}, with the scaling paragraph;
  proof unchanged in substance. Confidence 1. Decision `repaired`.
- **D2 — `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension`
  (confirmed, repaired).** The scaffold claim "U(·,t)→g in L², so T_+U=g" is
  not well posed as stated: ∫_H|U|²=(4π)^{−1}∫|ĝ(ξ)|²/|ξ|dξ, which diverges
  for d=1 exactly when ĝ(0)=∫g≠0, so then U∉L²(H)⊇W^{1,2}(H) and T_+ is not
  defined on U. Repair: the statement now proves the local trace identity on
  every bounded cylinder Q_R=B_R(0)×(0,1) (valid for all data), and the global
  identity T_+U=g under the exact L²(H) condition (d≥2, or d=1 with ∫g=0),
  with the L²(H) criterion computed in step 4.1; the cutoff-density argument
  supplies T_+U=g. Confidence 1. Decision `repaired`.
- **D3 — load-bearing B-page dependencies (confirmed, repaired).**
  `ex-zero-trace-versus-zero-extension` depended on the B-page item
  `cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump`, and
  `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` on the
  B-page items `ex-heat-and-poisson-semigroups-as-fourier-multipliers`,
  `ex-fourier-transform-of-the-poisson-kernel` plus the later-page
  `lem-ltwo-fourier-multiplier-bound` (fwdcheck `forward-undeclared`). Detected
  by depcheck `b-leaf-content` and fwdcheck; both items were rewritten to use
  exact A-page suppliers or complete local arguments (interval example's local
  contrapositive; Fourier inversion/Plancherel/Tonelli/multiplier-free energy
  computation). Verified by rerunning both tools: no line names either item.
  Decision `repaired` for both.
- **D4 — contract-invisible fact/step structure (confirmed, repaired).** The
  three B counterexamples carried their `[F#]` declarations inside the
  Counterexample block, and `ex-trace-of-an-affine-function-on-a-ball` had its
  numbered steps inside Facts & Assumptions with no `## Verification` heading;
  `proof-contract` therefore saw no facts (three cases) or no steps (one
  case). Repaired by moving facts into `## Facts & Assumptions` and inserting
  the missing heading, without changing any mathematical content. All four
  items then regenerated 4 facts and all steps under the shared parser.
- **D5 — render defects (confirmed, repaired).** rendercheck found a KaTeX
  double superscript in `lem-fractional-boundary-norm-is-independent-of-atlas`
  (`\Psi'_k^{-1}`) and hard-wrapped display formulas in
  `thm-half-space-lift-by-normal-mollification` and
  `thm-sharp-trace-theorem-for-w-one-p`. Repaired with an exact parenthesisation
  and `tools/fix-multiline-display.mjs`; rendercheck now reports 0 errors over
  the 30 files.
- **D6 — declaration defects (confirmed, repaired).**
  `thm-trace-estimate-on-the-half-space` cited `thm-riesz-fischer-completeness-of-l-p`
  in its facts without declaring it (depcheck warning), duplicated one
  wikilink in [F2] (contract `citation-duplicate`), and
  `thm-lp-trace-operator-on-a-bounded-c-one-domain` declared fact [F10] without
  ever citing it (two contract citations with empty uses). All three repaired
  in the item text and deps; the two facts are now cited at the steps that use
  them.
- **D7 — metadata defect (confirmed, repaired).**
  `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range` carried a
  `generation:` block while its `provenance.statement` is `ai-altered`;
  SCHEMA reserves `generation` for ai-generated statements and content-policy
  failed on it. The block was removed (the statement is the literature's
  strictness fact, so `ai-altered` is the honest tag).

No unresolved suspect defect remains in this pair.

## Step 3a observations

- `thm-sharp-trace-theorem-for-w-one-p`: the published
  `lem-c-k-boundary-flattening-preserves-wkp-locally` is now declared in
  `deps` and used in [F5]/step 1.1 (chartwise boundedness of the flattening and
  of its inverse). Resolved.
- `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension`: the
  Step-3a note asked to add or waive the parenthetical mention of
  `ex-fourier-transform-of-the-poisson-kernel`. It was **eliminated rather
  than declared**: that item lives only on a B page, so the example was
  rewritten to be self-contained (the mention and the dependency are gone).
  Resolved.

## Manifest, coverage and dependency reconciliation

- Manifest deps and `dependency_level` are synchronised with the authored
  items: 246 dependency slots, 74 distinct dependencies (20 in-batch, 54
  out-of-batch, all published). Three levels changed after authoring and were
  recomputed in the manifest: `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts`
  3→4, `thm-sobolev-gauss-green-formula-on-c-one-domains` 3→4,
  `thm-kernel-of-the-trace-is-w-one-p-zero` 4→5; item decisions were recorded
  in the recomputed dependency order. `node tools/item-dependency-levels.mjs
  check --run frontier-38-owner-30` reports no error naming a batch-4 item
  (whole-run: 816 items, maximum level 16).
- **Pre-splice plan mismatch for Step 4.** The manifest `statement` strings
  are still the scaffold versions; the authored item statements are the
  current text (splice `REFRESH` copies manifest objects into `plan-spec.json`,
  so the plan would otherwise carry scaffold wording). For thirteen items the
  difference is authoring rewording that preserves the promised claim
  (`lem-sobolev-trace-agrees-with-continuous-boundary-values`,
  `lem-trace-commutes-…`, `def-fractional-slobodeckij-…`,
  `lem-slobodeckij-seminorm-is-well-defined`,
  `lem-coordinate-direction-form-…`, `lem-one-dimensional-hardy-…`,
  `def-fractional-sobolev-space-…`, `lem-fractional-boundary-norm-…`,
  `cor-inhomogeneous-dirichlet-data-…`, `ex-trace-of-an-ac-sobolev-function-…`,
  `cex-boundary-point-values-…`, `cex-lp-boundary-data-…`,
  `ex-zero-trace-versus-zero-extension`); for
  `lem-half-space-trace-has-the-fractional-slobodeckij-bound` the change is
  semantic (defect D1) and the Step-3a scope hash covers the old string. The
  manifest statement strings were deliberately left untouched so the recorded
  Step-3a scope receipt stays current; the owner's Step-4 reconciliation must
  refresh them (and, for D1, decide whether the Step-3a scope decision is
  re-recorded). No other plan/manifest mismatch.
- Coverage: the documented-drop alternative row for
  `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` listed the
  item's pre-repair deps and failed `coverage-alternative-deps` after the
  repair; the row now carries the current declared deps (and the affine
  example's row gained its missing declared dep). Coverage is 2 pages, 94
  harvested results, 0 errors, 0 warnings.
- Cross-batch ledger input `research/frontier-38-owner-30-batch-4.cross-batch-dependencies.json`
  stays `[]`: no dependency of this pair is an in-run item of another batch
  (re-checked mechanically after all edits); `frontier-dependency-ledger.mjs
  refresh --run frontier-38-owner-30` succeeds.

## Checks actually run (results)

- `node tools/tsx-run.mjs tools/precheck.mts <28 explicit paths>` → 25 checked,
  **0 failing** (the two definitions and the remark are not phase-format
  items).
- `node tools/rendercheck.mjs <28 items + 2 pages>` → **OK, 0 errors** (30
  files; KaTeX parses every math span and all frontmatter parses).
- `node tools/proof-layout.mjs <28 explicit paths>` → **28 items, 99 steps, 0
  defects** (read-only explicit-path mode, run after the last edit).
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-4.proof-contracts.json --strict`
  → **0 errors, 0 warnings, 28/28 items checked**; 191 citations (quotes are
  the cited item's own statement text), every step mapped by exactly one
  derivation, all 8 boundary worksheets per item (224 rows).
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`
  → 224 boundary rows, 93 `not_applicable`, **0 template clusters, 0
  contradicted candidates**.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` → 191
  citations, **no missing quote, no widening candidate**.
- `node tools/finite-smoke.mjs …` → 0 errors, 0 checks (this pair defines no
  finite-model obligations; the run-level liveness gate is supplied by other
  batches' entries).
- `node tools/risk-report.mjs …` → **0 errors**, 28 items routed (highest
  routing: the two biconditional/limit examples, informational).
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-4.pages.json`
  → **28 scoped items, 0 errors, 0 warnings**.
- `node tools/depcheck.mjs` → run-wide exit 1 from sibling pairs; **0 errors
  and 0 warnings name a batch-4 item**. `node tools/fwdcheck.mjs --quiet` →
  run-wide exit 1 from sibling pairs; none of the 19 `forward-undeclared` rows
  names a batch-4 item. `node tools/extcheck.mjs` → exit 0.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` →
  exit 0, 816 items, no error naming this pair.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-4.pages.json`
  → 28 items, 0 errors. `node tools/manifest-integrity.mjs --run …` → 60/60
  pages, no scope drift.
- `node tools/coverage-checklist.mjs … --require-destination` → 2 pages, 94
  harvested results, 0 errors. `node tools/source-fetch-check.mjs --coverage …`
  → 15/19 fetch-verified, 19/19 resolved (4 documented HAL drops).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (later
  planned pages still carry no item lists). `node tools/pathcheck.mjs` → 0
  errors; `node tools/prosecheck.mjs` → OK; `node tools/depsource.mjs` → 0
  unresolved.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final`
  → this pair closed: **28/28 items current** (16 accept, 12 repaired); the
  scope receipt for `sobolev-traces-and-zero-boundary-values` remains current
  (`scopeDecision` closed, hash 3fd6f72a…). Run-wide the check is open only
  because sibling pairs are still landing.
- `node tools/gate-liveness.mjs --run … --contracts <batch-4 contracts>
  --checklists <batch-4 coverage> --min-checks 1` → the finite-smoke probe
  reports an empty scope for a single-batch invocation because this pair
  defines no finite-model checks; the run-level gate reads the merged contracts
  (batch 11 supplies the run's finite-smoke sample). Recorded so the flag is
  not mistaken for a defect in this pair.

## Published concerns and open obligations

- **No new confirmed published defect.** The defects D1–D7 are all in this
  pair's own scaffold or newly authored items and are repaired here.
- **Low-confidence observation (not a defect).**
  `lem-ltwo-fourier-multiplier-bound` is `status: published` while its home
  page `fourier-multipliers-and-sobolev-characterisations` carries a later
  planned order (458.02601) than this pair; fwdcheck treats a dependency on it
  as a forward reference. This pair no longer consumes it (the Poisson example
  was made self-contained). No action requested; flagged only because the
  metadata pattern (published item on a later-planned page) recurs in the run.
- **Open obligation handed to Step 4 (owner-held):** refresh the batch-4
  manifest `statement` strings from the authored item files; for
  `lem-half-space-trace-has-the-fractional-slobodeckij-bound` this is defect
  D1's semantic change and interacts with the Step-3a scope hash. Nothing else
  is owed: no unfinished supplier, no unresolved Choice branch, no
  impossible-prerequisite escalation.

## Handoff

- 28/28 assigned items authored and current (21 A + 7 B), both assigned pages
  written; batch manifest, coverage, cross-batch input and proof contracts
  registered; 28 item decisions recorded (`accept` 16, `repaired` 12).
- Suppliers added beyond the scaffold: published density, extension,
  Banach/completion, Hölder/Minkowski/Fubini–Tonelli/Fatou/dominated-
  convergence, ACL, translation-continuity, smooth-multiplier, Fourier
  inversion/Schwartz-calculus, Poisson-kernel and boundary-chart items (54
  distinct published dependencies in total, all on disk and openable), plus
  the eight in-batch additions scaffolded by Step 1.
- Independent mathematical audit and systematic defect repair follow in Steps
  5–8; this report records author-side checks only.
