# Step 3a scope review — Hörmander Estimates and the Levi Problem

- Run: `frontier-37-owner-30` (role: alpha; batch 29; this pair only)
- A page: `hormander-estimates-and-the-levi-problem` (plan order 865)
- B page: `hormander-estimates-and-the-levi-problem-examples` (plan order 866)
- Inventory: 18 A items (1 definition, 9 lemmas, 6 theorems, 2 corollaries) at
  declared levels 0–7 and 6 B examples at declared levels 0–6; A `requires`
  nine pages (eight published, one in-run batch-10 page), B requires the A
  page only; reciprocal companion pointers pair the two pages.
- Scope decision: **sufficient**, recorded with
  `tools/step3-decisions.mjs record-scope`; receipt
  `research/frontier-37-owner-30-step3a-review-hormander-estimates-and-the-levi-problem.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item
  contract, plan, page, coverage record, engine state or owner record was
  edited; nothing below is an item approval. No owner scope record and no
  `research/frontier-37-owner-30-owner-authoring-direction.md` exists for this
  pair, so nothing was assumed from an owner decision.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-29.pages.json` | Current scope carrier: 18 A items at levels 0–7 (Levi at 6, final Oka–Weil at 7) and 6 B examples at levels 0–6; orders, `requires` and companion pointers as above |
| `research/frontier-37-owner-30-batch-29.coverage.json` | 4 full-text sources, 25 harvested rows: 19 `included`, 2 `inline`, 4 `out-of-scope` with specific reasons; no drops, no retries |
| `research/frontier-37-owner-30-batch-29.notes.md` | Scaffolder construction record: design/plan reconciliation, the nine supporting insertions, ordered proof routes, the AC supplier audit, cross-batch input, validation results |
| `research/frontier-37-owner-30-batch-29.cross-batch-dependencies.json` and `research/frontier-37-owner-30-cross-batch-dependencies.json` | Exactly two edges out of this pair, both reviewed `verified`: the page edge to batch-10 `smooth-approximation-and-sobolev-extension` and the item edge `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains` → batch-10 `lem-mollification-commutes-with-weak-derivatives-in-the-interior` |
| `research/plan-complex-analysis-track.md` L4200–4238 (SC-6 prose design), L427 (choice row), L503 (well-definedness #56), L5392 (prerequisite row), L5700 (orders 865/866), L5706–5749 (§M.1 binding A inventories and counts; SC-6 count 9), L5858–5863 (§M.2 SC-6 B inventory), L554/L3541/L3570 (SC-4 declares the Levi converse to SC-6 and does not prove it) | Binding prose design, division of labour with SC-4/SC-7, and the machine-actionable item counts |
| `research/plan-spec.json` orders 865/866 (items arrays empty; the run manifest is the scope carrier); consumer page 867 `bergman-and-szego-kernels` | Plan reconciliation, direct consumer, build boundary |
| `research/frontier-37-owner-30-alpha-step1-drift.md` (`### hormander-estimates-and-the-levi-problem`, VERDICT: no-drift) and drift-evidence entry 28 | Step-1 verdict: declared closure reaches the needed interfaces; exhaustion and the functional-analytic extension of the estimate still need full proofs (supplied by the support items below) |
| `research/frontier-37-owner-30-scope-ledger.json` | Both pages are in the 60-page run scope; `allow_in_run_dependencies: true` |
| `research/published-consumer-supplier-ledger.md` (Complex Analysis section, incl. the 20 planned-enrichment list and L12293–12325) | The pair is planned-only enrichment with zero direct and zero transitive published consumers, no published item in the library depends on any of its 24 items, and it is not Phase-2 eligible |
| Four source PDFs already present from the Step-1 fetch (`/tmp/prestige-sc6-*.pdf`, extracted full texts beside them) | Byte counts and sha256-16 match the coverage `fetch_verified` records exactly: Demailly `d7c7654a7417e832` (3,557,990 B, 455 pp.), Boas `2d8f5e24943f67e3` (1,726,335 B, 97 pp.), Jabbari `e8bf824bef56853d` (1,399,384 B, 118 pp.), Lebl `729cdb8a00685da5` (1,652,309 B, 248 pp.); claimed locators read directly in the extracts |
| Transitive closure over `items/*.md` plus the run manifests | 1,822 nodes = 25 in-run items (the 24 pair items plus the batch-10 supplier) + 1,797 published item files; 0 missing, 0 non-published |

## Role in the library

SC-6 is the complex-analysis track's single home for the Hörmander `L²`
estimate and for the **converse Levi problem**. SC-4
(`domains-of-holomorphy-and-pseudoconvexity`, published) states only the
forward implication and explicitly declares the converse to SC-6 before its
`L²` proof exists (plan L554, L3541, L3570); no other page carries the
converse. The planned direct consumer is SC-7 `bergman-and-szego-kernels`
(order 867), which requires this A page at page level; the B page is a
singleton-A dependency leaf with no consumers. The ledger records the pair as
planned-only enrichment: zero published direct consumers, zero transitive
published impact, item by item, so it carries no Phase-2 debt and no
published-defect obligation.

## Inventory against the prose design

The nine binding SC-6 claims (plan L4200–4238, §M.1 count 9) are all present,
with exactly the designed IDs and kinds:

| Design claim (SC-6 table) | Manifest item | Manifest level |
|---|---|---|
| weighted `L²` spaces, maximal `∂̄`, adjoint | `def-weighted-l2-spaces-dbar-forms` | 0 |
| compactly supported Bochner–Kodaira–Morrey estimate | `thm-basic-bochner-kodaira-morrey-estimate-cn` | 1 |
| Hörmander `L²` existence with the explicit estimate | `thm-hormander-l2-dbar-existence` | 4 |
| smooth strictly psh exhaustion of a pseudoconvex domain | `thm-pseudoconvex-domain-smooth-psh-exhaustion` | 1 |
| positive-degree Dolbeault vanishing | `cor-dolbeault-vanishing-pseudoconvex-domain` | 5 |
| Levi problem: pseudoconvex ⇔ domain of holomorphy (⇔ holomorphic convexity via Cartan–Thullen) | `thm-levi-problem` | 6 |
| Behnke–Stein increasing unions | `thm-behnke-stein-increasing-union` | 0 |
| Oka–Weil approximation on a pseudoconvex domain | `thm-oka-weil-approximation-pseudoconvex-domain` | 7 |
| first Cousin problem on a pseudoconvex domain | `cor-first-cousin-problem-pseudoconvex-domain` | 5 |

The six B items are exactly the design's companion list (§M.2, plan L5858–5863):
Gaussian-weight equality, ball Levi form, explicit weighted `∂̄` solution,
strictly psh exhaustion of the ball, Hartogs-domain pseudoconvexity, Cousin-I
gluing. No designed A claim or B example is dropped (batch-29 notes; verified
ID by ID above).

Nine declared support items make the designed proof routes complete; every one
is inside the subject and is consumed before use by a designed claim:

| Support item | Consumed by | Justification |
|---|---|---|
| `lem-smooth-regularization-of-psh-exhaustion` | exhaustion theorem, Levi proof | Drift note: "exhaustion … need full proofs"; regularizes SC-4's continuous psh exhaustion (Boas Thm 19 + Sard) |
| `lem-maximal-distributional-dbar-operator-is-closed` | Hörmander theorem | Plan well-definedness obligation #56 (closed, densely defined maximal operator; adjoint vs formal expression) |
| `lem-hilbert-complex-solver-from-coercive-estimate` | Hörmander theorem | Drift note: functional-analytic extension of the estimate needs its own proof (Demailly Thm 1.2) |
| `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains` | smooth-domain solver | Boundary-term form of the basic estimate (Boas §3.3.3 (3.2)–(3.5), Friedrichs density) |
| `lem-hormander-solver-on-smooth-pseudoconvex-domain` | Hörmander theorem | Smooth-domain solver before exhaustion |
| `lem-local-boundary-separator-for-strongly-pseudoconvex-domain` | peak-function lemma | Boas (3.1) local holomorphic separator |
| `lem-boundary-peak-function-by-dbar-correction` | Levi proof | Cutoff-correction peak function (Boas p. 77) |
| `lem-oka-weil-on-domain-of-holomorphy` | host lemma inside Levi, final Oka–Weil | Boas Thm 21, order-ed so it uses only the forward SC-4 direction |
| `lem-locally-finite-smooth-partition-of-unity-on-domain` | first Cousin corollary | Localization needed by the Cousin argument |

Ordering is non-circular by construction: the host-domain Oka–Weil lemma and
the Levi theorem use only the forward SC-4 implication and the earlier
Hörmander theorem; the final pseudoconvex-domain Oka–Weil theorem is
downstream of Levi (plan L3541, batch notes).

## Source coverage

`node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-29.coverage.json`
→ 1 page, 25 harvested results, 0 errors, 0 warnings;
`node tools/source-fetch-check.mjs --coverage …` → 4/4 fetch-verified, 4/4
resolved, 0 drops. The four `out-of-scope` rows are the alternative
complete-Kähler/Friedrichs route (Demailly §2, §3 graph core, §5) and the
CIMAT Sobolev localization row, each with a specific reason; the batch notes
record that batch 29 instead uses bounded smooth exhaustion domains and its
separate finite-chart boundary argument via the batch-10 mollifier interface.

The Step-1 fetch artifacts were re-checked against the coverage
`fetch_verified` stamps (byte count and sha256-16 identical for all four
files), and I read the claimed locators in the extracted full texts:

- **Demailly** Ch. VIII (printed pp. 363–379): (1.1)–(1.2) Theorems with
  coercivity (1.3) and the minimal-norm solution (pp. 363–364); §3 openness of
  the graph domain of a differential operator and the explicit warning that the
  Hilbert adjoint may differ from the formal adjoint on a bounded domain, with
  Example (3.1); §4 (4.1)–(4.5) general `d″` estimate and (4.8)
  smallest-eigenvalue remark; §6 (6.5) Theorem — weakly pseudoconvex Kähler
  `X`, eigenvalues `λ₁≤…≤λₙ≥0`, estimate with `1/(λ₁+…+λ_q)` and the
  exhaustion/weak-limit proof — and (6.9) Theorem for weakly pseudoconvex
  `Ω⊂ℂⁿ` with an upper semicontinuous psh weight.
- **Boas** §§3.2.4–3.3.3 (pp. 70–85): Theorem 19 and proof (Sard;
  strictly psh exhaustion; sublevels locally biholomorphic to strongly convex
  domains); Theorem 20 (bounded pseudoconvex, `C∞` boundary: `∂̄`-solvability
  for `(0,1)`-forms with `C∞` data); the local separator from formula (3.1)
  and the reciprocal/peak-function construction (p. 77); Theorem 21 with the
  complete graph-lift/cutoff/correction/telescoping proof (pp. 77–79); the
  arbitrary-pseudoconvex-domain Levi proof (pp. 79–80); §3.3.3 basic estimate
  (3.2), adjoint formula and `∂̄`-Neumann boundary condition (3.3)–(3.4), and
  the cited Friedrichs lemma for the smooth-core density (p. 82).
- **Jabbari (CIMAT)** §§4.1–4.3 (PDF pp. 67–83): Theorem 80 (Behnke–Stein),
  Theorem 84 (`L²` `∂̄` estimates on pseudoconvex `D`, with Lemma 85's
  strict-weight form).
- **Lebl** Ch. 2 §§2.3–2.6 and Ch. 4 §4.6: Exercise 2.5.9 on nested
  Hartogs-pseudoconvex unions with the note that Behnke–Stein can be proved
  without Levi (Exercise 2.6.13); Theorem 2.5.8; Theorem 2.6.2, whose reverse
  direction the text explicitly omits ("save some hundred pages"), which is why
  Boas is the proof authority; Theorem 4.6.5 (Cousin I solvable from
  `H^{0,1}(U)=0`) with proof.

The three quantitative B examples were re-derived directly: the Gaussian
example gives `∫|z₁|²e^{-|z|²}dV = ∫e^{-|z|²}dV = πⁿ` with `λ₁=1`, so equality
holds in the `q=1` estimate; the explicit solution has `∫|u|²e^{-φ} = π/16`
and `½∫|f|²e^{-φ} = π/8` with `λ₁=2`; the Hartogs exhaustion `ψ` has a
positive-definite complex Hessian at sampled interior points (numeric check),
matching its psh proof strategy (convex increasing composition of the psh
function `s = e^{2|z|²}|w|²`). The remaining three examples
(ball Levi form, `−log(1−|z|²)` exhaustion, Cousin-I data on `ℂ`) are the
textbook computations the design names, and the published prerequisite items
they cite exist.

## Dependency and readiness checks

- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-29.pages.json`
  → 24 items, 0 normalized, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`
  → exit 0, 778 items across 60 pages, no mislabeled dependency or cycle.
- `node tools/step1-decisions.mjs check --run frontier-37-owner-30`
  → 778/778 `ready`, closed.
- `node tools/fwdcheck.mjs research/frontier-37-owner-30-batch-29.pages.json`
  → exit 0.
- All nine page prerequisites resolve: eight are published pages on disk
  (`domains-of-holomorphy-and-pseudoconvexity`,
  `complex-lp-spaces-and-test-function-conventions`,
  `hilbert-space-geometry-and-riesz-representation`,
  `weak-and-weak-star-topologies`, `reflexivity-and-eberlein-smulian`,
  `unbounded-self-adjoint-operators-and-stones-theorem`,
  `weak-derivatives-and-sobolev-spaces`,
  `the-dbar-complex-and-integral-solutions`); the ninth
  (`smooth-approximation-and-sobolev-extension`) is the in-run batch-10 page
  with a reviewed `verified` cross-batch edge.
- The only cross-batch item supplier
  (`lem-mollification-commutes-with-weak-derivatives-in-the-interior`,
  batch 10) is scaffolded in this run and recorded `verified`; it is not yet an
  `items/*.md` file, so Step 3b must confirm the authored supplier before
  closing its consumer. This is the expected in-run-dependency state, not a
  scope gap.
- Transitive closure: 1,822 nodes, 25 in-run (24 own + the batch-10
  supplier), 1,797 published files, 0 missing, 0 non-published.
- No published item anywhere depends on any of the 24 new items (ledger),
  so the pair has no outside consumer to satisfy beyond the planned SC-7 page.

## Judgment

**Sufficient.** The planned definitions, results and examples cover the
intended subject adequately: weighted `L²` spaces with the maximal `∂̄` and its
Hilbert adjoint, the Bochner–Kodaira–Morrey basic estimate and its
smooth-boundary Morrey form, the abstract coercive Hilbert-complex solver, the
Hörmander existence theorem (general pseudoconvex `Ω⊂ℂⁿ`, strictly psh `C²`
weight, `Σλ_q` denominator, smooth solution for smooth data), positive-degree
Dolbeault vanishing, smooth strictly psh exhaustions, and the designed
applications — the converse Levi problem (with Cartan–Thullen), Behnke–Stein,
Oka–Weil, and the first Cousin problem — together with the full six-item
example companion. The inventory matches the binding SC-6 design and §M.1/
§M.2 counts exactly, the nine support items are declared, subject-internal and
consumed, source coverage is anchored in four complete, independently
stamp-matched texts with the claimed locators verified, dependencies are
published or in-run with verified edges, and the pair's role as the library's
sole home of the Levi converse and planned supplier to SC-7 is consistent with
the plan.

## Residual uncertainty (recorded honestly; Step 3b matters, not scope blockers)

1. The coverage row claiming Demailly's (6.9) Theorem is `included` in
   `thm-hormander-l2-dbar-existence` is a mild overstatement: the manifest
   states the (6.5)-type estimate under a strictly psh `C²` weight, while (6.9)
   treats upper-semicontinuous psh weights with `(1+|z|²)` loss factors. The
   design promises only the strictly psh version (plan L4210), so scope is
   unaffected; Step 3b should either narrow that coverage claim or state the
   refinement if the page prose advertises it.
2. Boas proves `∂̄`-solvability only for `(0,1)`-forms; the `(0,q)`
   generality rests on Demailly §4/§6 and Jabbari Lemma 85 and is a declared
   scaffold extension. Proof-level audit belongs to Step 3b and Steps 5–8, as
   does the finite-chart Friedrichs boundary-density argument whose source is
   the batch-10 mollifier supplier.
3. All 24 statements blanketly assume AC with `def-axiom-of-choice` listed
   directly, while the plan's choice row (L427) requires copying the exact
   supplier strength. The batch notes call this a conservative choice level
   and record the per-item direct choice suppliers; it is a metadata question
   for Step 3b, not a coverage omission.
4. `ex-levi-form-of-the-unit-ball` closely neighbours the published SC-4
   example `ex-the-ball-is-levi-pseudoconvex` (which asserts Levi
   pseudoconvexity without computing the form). The design explicitly assigns
   "the ball Levi form" to SC-6's companion (plan L5859), so this is intended;
   Step 3b should keep the explicit `Lρ(ξ)=|ξ|²` computation so the item is
   not a pure duplicate.
5. `lem-locally-finite-smooth-partition-of-unity-on-domain` lists only choice
   dependencies; Step 3b should ensure its proof cites the published
   partition-of-unity/σ-compactness and smooth-bump machinery. This is a
   dependency-completeness detail, not a scope gap.
6. I read the cited statements and their immediate proof surroundings, not
   every proof in the four PDFs; the Hartogs Hessian check was numeric at
   sampled points. Full proof verification remains with Step 3b and the later
   review stages.
