# Step 3a scope review — pair `constrained-variational-problems-and-variational-inequalities`

- Run: `frontier-39-analysis-30` (stage `3a-scope`), dispatch label
  `step3a-pair-constrained-variational-problems-and-variational-inequalities-f3e0953e9ad8e84c`
- Role: alpha scope reviewer (not owner, not item author).
- A page: `constrained-variational-problems-and-variational-inequalities`
  (batch 16, order 458.041, category `pde`, `requires` =
  [`the-direct-method-and-euler-lagrange-equations`]; 25 items:
  10 theorems, 11 lemmas, 1 definition, 2 corollaries, 1 remark).
- B page: `constrained-variational-problems-and-variational-inequalities-examples`
  (batch 16, order 458.042, `requires` = the A page; 8 items: 4 examples,
  4 counterexamples).
- Decision: **`insufficient`** — the designed subject is fully scaffolded and
  sourced, but one confirmed unmet prerequisite was found (the one-dimensional
  trace-truncation interface used by the n = 1 items). Recorded with
  `node tools/step3-decisions.mjs record-scope`.
- Date: 2026-10-05 (local; 2026-10-04/05 UTC).

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
design, plan or engine artifact was edited; the only writes are this report
and the scope receipt
`research/frontier-39-analysis-30-step3a-review-constrained-variational-problems-and-variational-inequalities.json`.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-pde-track.md` PDE-22, lines
L1986–L2044 (A/B ids and `requires` L1988–L1991; the 14 designed A items
L1993–L2007; the five-row B companion L2009–L2016; sources/proof
architecture/well-definedness L2018–L2044), the PDE-22 additions table
L3746–L3756 (10 rows), the source-audit row L3399, and the track index row
(`research/frontier-39-analysis-30-planning-notes.md` L28). The Alpha Step-1
drift verdict for this page is `no-drift`
(`research/frontier-39-analysis-30-alpha-step1-drift.md` L220–L232), with the
constraints actually honoured below: the split-surjective Banach implicit
theorem and level-set-curve realisation are page-local items (A3, A4) and the
published finite-dimensional implicit theorem is not used; complementarity
and the Lewy-Stampacchia bound carry explicit measure/order regularity
hypotheses and no distribution product is formed without them.

Intended subject: the constrained-variational page of the elliptic/PDE track —
equality-constraint multiplier rules on Banach and Hilbert spaces, the
projection characterisation of variational inequalities (Stampacchia), the
obstacle problem (existence, uniqueness, complementarity, Lewy-Stampacchia
bounds, contact-set support) and constrained minimisation on the L² sphere
(first and higher Dirichlet eigenvalues), with the design's explicit warnings
(the unit sphere is not weakly closed; the obstacle constraint is never
differentiated; nonemptiness of the admissible set is a theorem hypothesis).

Intended role / consumers. The plan declares exactly one page-level consumer of
this pair: `strongly-continuous-semigroups-and-hille-yosida`
(plan-spec order 458.043, batch 17) requires the A page, and the run's
dependency ledger records that edge (`consumer_batch 17`, `supplier_batch 16`,
status open). A scan of all 30 batch manifests finds **no** in-run item that
cites a batch-16 item id, so the pair is terminal within the authored frontier
and its internal consistency is the load-bearing property.

## 2. Design-to-manifest mapping

`research/frontier-39-analysis-30-batch-16.pages.json` (33 items, page cap
100 respected) was diffed against the PDE-22 design section and the additions
table:

- **All 14 designed A items are present** with matching ids, kinds and design
  order: `thm-direct-method-on-a-weakly-closed-constraint-set` (1),
  `lem-strong-ltwo-compactness-preserves-unit-normalisation` (2),
  `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` (3),
  `lem-regular-banach-constraint-directions-are-realised-by-level-set-curves`
  (4), `thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint`
  (5), `thm-finite-regular-constraint-lagrange-multiplier-rule` (6),
  `thm-first-dirichlet-eigenfunction-by-constrained-minimisation` (7),
  `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` (8),
  `def-closed-convex-obstacle-set-and-variational-inequality` (9),
  `lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed` (10),
  `thm-stampacchia-variational-inequality` (11),
  `thm-existence-and-uniqueness-for-the-obstacle-problem` (12),
  `cor-obstacle-complementarity-in-distribution-form` (13),
  `rem-pointwise-and-integral-constraints-have-different-regularity-tests`
  (14).
- **All five designed B items are present**:
  `ex-rayleigh-quotient-on-an-interval`,
  `ex-isoperimetric-integral-constraint-and-its-multiplier`,
  `cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space`,
  `ex-one-dimensional-obstacle-problem-and-contact-set`,
  `cex-obstacle-complementarity-product-needs-extra-regularity`.
- **All 10 additions-table rows are present** (7 A + 3 B):
  `lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative`,
  `lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent`,
  `lem-hilbert-projection-characterisation-by-a-variational-inequality`,
  `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities`,
  `thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class`,
  `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation`,
  `cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity`,
  `cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible`,
  `cex-dependent-equality-constraints-have-nonunique-multiplier-vectors`,
  `ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set`.
- **Four additional in-subject local suppliers** complete the page, each
  consumed by a designed item and none displacing one:
  `lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum`
  (Fermat half of the design's "missing step"; consumed by A6/A7),
  `lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family`
  (finite-duality supplier for both multiplier rules),
  `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive`
  (contraction property for the Stampacchia fixed-point map), and
  `lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions`
  (L² sign transfer for complementarity).
- The design's one un-minted id,
  `cex-lagrange-multiplier-rule-needs-a-regular-constraint`, is the published
  degenerate-constraint counterexample, linked from A25/A6 as the design
  instructs (`status: published` in `items/`); a second copy is correctly not
  minted.

Design warnings are visible in the statements: the weak-closure failure of the
unit sphere is B3 with the Rellich repair in A2; the obstacle constraint is
presented only through the variational inequality, with complementarity in
distribution/measure form under explicit hypotheses (A13, A18–A21, A24, B5,
B8); nonemptiness of K is a theorem hypothesis stress-tested by B7; a.e. order
and representative independence are fixed in A13.

## 3. Source coverage

`research/frontier-39-analysis-30-batch-16.coverage.json` carries 2 pages,
63 harvested rows and 14 fetch-stamped source entries (10 A + 4 B; 11
distinct URLs behind them for the 11 distinct works). Dispositions:
32 `included`, 13 `inline`, 18 `out-of-scope` with written reasons, 0
unresolved. The out-of-scope rows are the design's declared boundaries
([T] Problem 13.7 weighted potential, [CV] §7.2 C² remark and the absence
record, [LS] chapters outside 9, [SID] chapters outside the contraction/IFT
material, [YK] §§3–4 non-coercive generalizations, [OK] chapters 2–6 numerics,
[AN] free-boundary regularity and Sobolev appendix, [OU] entropy-solution
framework, [GT] stochastic/parabolic setting, [BRE] the uncited chapters,
[NA] equilibrium applications).

Fresh checks re-run against the current tree (read-only):

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-16.pages.json`
  → 33 item(s), 0 errors;
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-16.coverage.json --require-destination`
  → 2 page(s), 63 harvested result(s), 0 errors/warnings;
- `node tools/source-fetch-check.mjs --coverage …` → 14/14 fetch-verified;
- `node tools/url-sweep.mjs --coverage … --fail-on-dead` → 11/11 live, 0 failed;
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  → 899 scoped item(s), 0 errors/warnings (whole run);
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30`
  → 60 page(s) owed, 60 in the manifests, no scope drift.

All ten web sources were downloaded fresh on 2026-10-05 and match the recorded
stamps byte-for-byte and sha256-identical (16-hex prefix): Teschl 2,912,992 /
`cea9939acea1858e`; Cristoferi 3,198,738 / `8511dd35c5d9a7f4`; Laugesen
arXiv:1203.2344 2,649,819 / `8aca596d3246a35e`; Sideris 2,860,518 /
`f6195abed6890814`; Yen–Kim 126,636 / `0eb939a0a5238d3d`; Oden–Kikuchi
7,064,859 / `1013840dc41189a5`; Andersson 633,226 / `6d137ec9f8a1eb6b`;
Ouaro–Traore 420,479 / `807fcdca212165f3`; Guibé et al. (Wayback snapshot)
684,713 / `3e5741fbebd2cbfc`; Nagurney 116,825 / `f8bd7dd9ece5bbac`. The
repository copy `brezis.pdf` (2,608,077 / `1575d1bf37916451`) matches its stamp
as well.

Load-bearing locators were re-read in the fetched texts and support the
attributed claims:

- [T] §13.3, printed pp. 302–305: Lemma 13.5 (level set of a continuous
  functional on a compactly embedded space is weakly sequentially closed),
  Theorem 13.6 (constrained variational principle with δN ≠ 0 and multiplier
  identity), Example 13.9 (Dirichlet energy on ∫G(u) = N₀; G = |u|²/2, N₀ = 1
  gives the lowest Dirichlet eigenvalue), and the discussion that the unit
  sphere is not weakly closed with the unit ball as weak closure.
- [AN] Theorem 3.1 states nonemptiness of K as an explicit hypothesis, exactly
  as A14/B7 use it; Theorem 4.2 gives the W^{2,2}_loc complementarity
  identity Δu = χ_{u>0} used by A18/B8.
- [YK] Theorems 2.2–2.3 (Stampacchia VI for bounded coercive forms) and
  estimate (2.4) (Lipschitz dependence with constant 1/α) as A12/A17 state.
- [OU] Theorem 2.5 and display (2.10): f ≤ Au ≤ f + (Aψ − f)⁺ a.e. — the
  corroborating Lewy–Stampacchia form; the item's bounded-coefficient
  extension is proved locally by the owner-resolved truncation argument.
- [BRE] Theorem 5.6 (unique solution for continuous coercive forms on a
  nonempty closed convex set, with the symmetric case characterised by energy
  minimisation) and §8.4's closed-convex-constraint application (printed
  pp. 221–227), matching A12/A15.
- [LS] Ch. 9: Rayleigh principle (9.1), Poincaré minimax (9.2), §9.4
  orthogonal-complement minimisation, matching A22/A23/B1.
- [CV] Ch. 7 (printed pp. 67–71): finite-dimensional Lagrange multipliers,
  Lemma 7.1, Courant–Fischer Theorem 7.2; a full-text search finds no
  occurrence of "obstacle" or "variational inequality", confirming the
  recorded absence disposition against the additions table's original
  attribution.
- [SID] Theorem 5.7 is the Banach-space implicit function theorem by the
  contraction proof, the route declared for A3.
- [OK] §1.2–1.3: the projection characterisation and the contraction
  T(w) = P_K(I − ρA)w with k² = 1 − 2ρm + ρ²M² and Theorem 1-3.1, matching
  A12's fixed-point construction; [NA] Theorem 2, Corollary 1 (nonexpansive
  projection), Theorems 3 and 8 for the finite-dimensional model; [GT] §3.1
  penalisation used only as corroboration.
- Recorded substitutions: [E] §§8.3–8.4 and [ACM] Ch. 1 could not be obtained
  as full text; their intended backing is independently covered by the
  fourteen fetched treatments ([BRE] §8.4 for the H¹(I) constraint model).
  The [GT] HAL URL's bot wall and the Wayback recovery are recorded in the
  coverage entry with preserved attempts.

## 4. Prerequisite and dependency audit

Closure over the current scaffold and published library: the 33 items declare
**224 dependency edges** — 129 to published items (53 distinct, every one
`status: published`), 47 to 27 in-run scaffold items in batches 4, 9, 10, 11,
14, 15, and 48 intra-pair. **Zero dependency ids and zero of the 61 distinct
`[[…]]` wikilink targets are absent from both the published library and the
scaffold.** All six supplier pages have plan orders 458.025–458.039, strictly
before 458.041, so the supplier-before-consumer direction holds; no cycle.

I read the statements of the load-bearing in-run suppliers and confirmed they
state the required claims: batch 15's
`thm-direct-method-in-a-reflexive-banach-space`,
`lem-norm-closed-convex-sets-are-weakly-closed`,
`lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence` and
`def-proper-coercive-and-weakly-lower-semicontinuous-functional`; batch 14's
`thm-rellich-compactness-from-w-one-p-zero-to-lp` and
`lem-positive-part-is-an-admissible-weak-test-by-truncation`; batch 10's
`def-bounded-coercive-and-symmetric-sesquilinear-forms`; batch 11's
`thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`,
`thm-courant-fischer-minimax-for-elliptic-eigenvalues` and
`lem-eigenbasis-expansion-in-the-form-norm`; batch 4's
`thm-poincare-inequality-for-w-one-p-zero`; and the published
`thm-implicit-function-theorem-for-banach-spaces` (the Banach-space IFT, not
the finite-dimensional one).

**Splice finding (Step 4, not a scope omission).** The plan licenses only one
page-level `requires` edge. Of the six in-run supplier pages, batches 14
(458.037) and 15 (458.039) lie inside the plan's `requires` closure of
458.041, but batches 4 (458.025), 9 (458.027), 10 (458.029) and 11 (458.031)
do not; 28 item edges point into them (3 + 1 + 13 + 11). The design prose
itself names PDE-15–17 (not PDE-14's Poincaré supplier). All claims exist and
all orders precede 458.041. Step 4 should either add the direct `requires`
edges or record acceptance of the item-level licensing. The run's
cross-batch ledger already records all 48 batch-16 consumer rows (1 page + 47
item), currently all `open` for Alpha/Step-3 review.

### Unmet prerequisite (the one insufficiency)

**Confirmed gap.** The one-dimensional trace-truncation interface used by the
n = 1 strand is stated nowhere in the published library or the scaffold, and
the item that A13 inline-cites for it excludes n = 1.

- **Consuming planned items:**
  `def-closed-convex-obstacle-set-and-variational-inequality` (A13) declares
  `n >= 1` and inline-cites
  `lem-positive-part-of-a-zero-trace-function-has-zero-trace` for the
  equivalence `Tpsi <= 0` a.e. iff `psi^+ in H^1_0(Omega)`;
  `lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed` (A14)
  uses `psi^+ in H^1_0` for nonemptiness;
  `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation`
  (A21) uses the same characterisation; and the 1-D B-page items
  `ex-one-dimensional-obstacle-problem-and-contact-set` (B4, "Then
  `Tpsi <= 0`") and
  `cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible`
  (B7, "by the zero-trace truncation characterisation, `Tv >= Tpsi = 1`")
  rely on the same interface on `Omega = (-1, 1)`.
- **Required prerequisite claim and hypotheses:** for a bounded interval
  `I = (a, b)`, `1 <= p < infinity` and `u in W^{1,p}(I)`, the endpoint
  trace T of `ex-trace-of-an-ac-sobolev-function-on-an-interval` satisfies
  `T(u - k)^+ = (Tu - k)^+`, hence `(u - k)^+ in W_0^{1,p}(I)` iff
  `Tu <= k` — the n = 1 instance of the batch-14 lemma.
- **Evidence for absence:** the named supplier's statement begins "Let
  n >= 2" (batch-14 manifest); the two supporting published items also
  exclude n = 1 — `def-bounded-c-k-domain-and-boundary-charts` ("Let k >= 1
  and n >= 2", and "when n >= 2" at its convention line) and
  `thm-lp-trace-operator-on-a-bounded-c-one-domain` (`Omega in R^n`, 
  n >= 2). The published 1-D item gives the endpoint trace and
  `W_0^{1,p}(I)` iff `Tu = 0` but states no truncation commutation (searched
  `items/` for trace/positive-part combinations and all 30 batch manifests;
  no 1-D trace-truncation item exists). The unified ledger's review row for
  B7 to supplier currently asserts the supplier covers "the zero-trace claims
  of the one-dimensional ... examples", which its n >= 2 statement does not
  support.
- **Uncertainty (stated honestly):** the missing claim is a one-line
  consequence of two published items —
  `ex-trace-of-an-ac-sobolev-function-on-an-interval` (unique absolutely
  continuous representative; Tu = endpoint values) plus
  `cor-positive-negative-part-and-truncation-calculus-in-w-one-p`
  (`u^+ in W^{1,p}`, `D u^+ = 1_{u>0} D u`) — and B4/B7 also admit direct
  proofs via the ACL representative (v >= 1 a.e. plus continuity contradicts
  Tv = 0). So this is stated-support bookkeeping rather than missing
  mathematics. It is recorded as insufficient because repairing it either
  adds a local supplier or changes A13's statement/range, and both change
  this pair's scope (inventory or scope hash), which only the owner may
  authorise.
- **Recommended owner action:** (a) recommended — add a short local supplier
  on the A page before A13 (e.g.
  `lem-one-dimensional-trace-truncation-compatibility`, from the published
  interval trace example plus the truncation calculus) and declare it in the
  deps of A13/A14/A21/B4/B7; or (b) restrict A13 to n >= 2 (matching its
  cited domain and trace suppliers) and rewrite the 1-D B-item justifications
  against the published interval trace example, correcting the ledger review
  evidence. After applying either option, the owner records `proceed` for the
  resulting scope.

## 5. Other flagged findings (not the insufficiency)

1. **Stale coverage text.** The [GT] coverage row's reason still says the
   Lewy-Stampacchia item "is recorded as escalated in the Step-1 decisions",
   but
   `research/frontier-39-analysis-30-step1-thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class.json`
   now records the owner-resolved truncation proof with `decision: ready`
   (owner record, 2026-10-04T18:38:04.704Z). Housekeeping for the owner or
   Step 4; the item itself is present and in-scope.
2. **Cross-batch reviews.** All 48 batch-16 consumer rows are `open` in
   `research/frontier-39-analysis-30-cross-batch-dependencies.json`
   (reviewing them is an Alpha/Step-3 duty). None of the recorded rows
   identifies a missing claim.
3. **Published suppliers.** The 53 published items consumed here were checked
   for existence and status; the projection sign-convention overlap (A10
   versus the published `thm-hilbert-projection-variational-characterization`)
   is a recorded, page-local convention restatement, not a defect, and no
   published defect was found in any consumed supplier.

## 6. Decision

**`insufficient`.** Subject coverage is complete — all 14 designed A items,
all 5 designed B items and all 10 additions-table rows are present with
matching kinds, the four minted local suppliers are in-subject and consumed,
source coverage is complete and freshly re-verified, and the dependency
closure has no missing id. The single insufficiency is the confirmed unmet
prerequisite of section 4: the n = 1 trace-truncation interface used by
A13/A14/A21 and by the design's 1-D B items (B4, B7) is stated by no item in
the published library or the scaffold, while the cited supplier, the domain
definition and the trace theorem all require n >= 2. The owner should either
add the short 1-D supplier (recommended) or restrict/reword the affected
statements, then record `proceed` for the resulting scope; the splice finding
and the stale coverage text are handed to Step 4 / the owner without changing
pair membership or the designed inventory.

Recorded with:
`node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
--page constrained-variational-problems-and-variational-inequalities
--decision insufficient --reason "…"`.
