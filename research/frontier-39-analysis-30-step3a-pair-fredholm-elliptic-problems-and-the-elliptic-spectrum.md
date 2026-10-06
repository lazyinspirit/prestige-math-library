# Step 3a scope review — fredholm-elliptic-problems-and-the-elliptic-spectrum

- Run: `frontier-39-analysis-30` (batch 11), role alpha, label
  `step3a-pair-fredholm-elliptic-problems-and-the-elliptic-spectrum-6110bd0de0d9cc9e`.
- A page: `fredholm-elliptic-problems-and-the-elliptic-spectrum` (order 458.031,
  pde, 29 items). B page: `fredholm-elliptic-problems-and-the-elliptic-spectrum-examples`
  (order 458.032, pde, 10 items); companion pointers agree A↔B, and the B
  manifest `requires` the A page.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-39-analysis-30-batch-11.pages.json` (39 items: 29 A + 10 B,
  with statements, deps and sources), `.coverage.json` (77 harvested rows),
  `.notes.md`, and `.cross-batch-dependencies.json` (58 rows: 53 `verified`,
  5 `removed`, no unmet row).
- `research/frontier-39-analysis-30-scope-ledger.json` (both pages listed at
  batch 11) and `research/plan-spec.json` (458.031/458.032 `requires` identical
  to the manifests).
- Prose design: `research/plan-pde-track.md` PDE-17 — header/requires L1697–1701,
  A inventory L1703–1730, B inventory L1732–1740, proof architecture and
  well-definedness L1743–1760, additions table L3653–3680 (8 A + 4 B rows),
  source-audit rows and PDE-17 line 53.
- Drift/owner direction: `research/frontier-39-analysis-30-alpha-step1-drift.md`
  PDE-17 section (drift-applied after adding the two published FA pages; the
  smooth-eigenfunction corollary moves to PDE-18/batch 12);
  `research/frontier-39-analysis-30-drift-evidence.json` entry for the A page
  (declaredRequires = manifest requires). No
  `research/frontier-39-analysis-30-owner-authoring-direction.md` exists.
- Owner repairs: `.autopilot/frontier-39-analysis-30/owner-repairs/batch11-*.json`
  (11 files). Every `replacement_item`/`items` row matches the current manifest
  statement and deps (checked in full), so the reviewed inventory is post-repair.
- Checks I ran: `manifest-deps.mjs` on batch 11 (39 items, 0 errors);
  `coverage-checklist.mjs` (2 pages, 77 rows, 0 errors, 1 warning — the B page
  `coverage-low-yield` warning; declines confirmed below); a recursive scan of
  every `deps` entry and every `[[…]]` link of all 39 items resolving against
  the published `items/*.md` set plus the run's 30 batch scaffolds (0 missing).
- Independent source check: on-disk `brezis.pdf` (2608077 B), `simon.pdf`
  (940975 B) and `laugesen.pdf` (764005 B) match the coverage `fetch_verified`
  sizes and sha256 prefixes (`1575d1bf…`, `e1f1b2f5…`, `6aec033c…`); a fresh
  download of Hunter's notes matches (1597256 B, `0dbade18…`). Text extraction
  of the cited locators confirmed the load-bearing statements: Brezis
  Theorem 9.31, Remark 28 and Remark 30; Hunter Theorems 4.21, 4.23, 4.24 and
  4.25; Simon Lecture 10 (min–max, monotonicity); Laugesen Corollaries 4.8/4.9,
  Exercise 4.3, §4.4.

## Scope against the prose design

**A page.** All 19 design rows are present in design order, plus all 8 PDE-17 A
additions, plus the two recorded local prerequisites
(`lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`,
`lem-eigenbasis-expansion-in-the-form-norm`): Gårding with explicit
$\theta/2$, $nM_b^2/(2\theta)+M_c$ constants; the shift corollary; the shifted
solution operator $K_\mu$ and its $L^2$ compactness; the identity-minus-compact
reduction; formal adjoint and adjoint weak problem; $K_\mu^*$; the
range↔adjoint-kernel translation; the two-alternative Fredholm theorem
($\dim N=\dim N^*$, $f\in L^2$); finite kernel/cokernel; uniqueness⇒existence
with the bounded solution map; the symmetric-case $L^2$ operator, its density,
symmetry and lower bound, self-adjointness with compact resolvent; weak
eigenpairs; positivity/self-adjointness of $K_\mu$; the discrete spectrum with
multiplicity and $L^2$ orthonormal eigenbasis; the form-norm expansion;
Rayleigh, Courant–Fischer and the Poincaré-constant corollary; discrete
non-invertible shifts; the resolvent identity; distinct-eigenvalue
orthogonality; the spectral-series solution; domain monotonicity; the mean-zero
Neumann first positive eigenvalue; the constant zero-mode remark. 29 = 19 + 8
+ 2, nothing dropped, nothing weakened.

**B page.** All 6 design leaves plus all 4 PDE-17 B additions: interval
Dirichlet eigenpairs; the Neumann zero constant mode; the negative-obstruction
shift example; Fredholm failure at an eigenvalue; repeated eigenvalues on the
square; no orthonormal eigenbasis without symmetry; a non-real Galerkin
eigenvalue pair; a disconnected Neumann domain with a double zero eigenvalue;
no canonical basis in a repeated eigenspace; resolvent blow-up at an
eigenvalue. 10 = 6 + 4.

The two recorded deviations from the design prose are source-faithful and do
not narrow the intended subject: (1) the Fredholm alternative is stated for
$f\in L^2(\Omega)$, exactly the datum class of [H] Theorem 4.24 (extraction
confirmed) and of the compact-operator reduction — no run consumer asks for
$H^{-1}$ data; (2) the smooth-eigenfunction corollary lives on PDE-18/batch 12
per the drift resolution, and that batch consumes
`def-symmetric-elliptic-weak-eigenpair` from this pair.

## Source coverage

The A page carries 6 fetch-verified treatments (Hunter, Laugesen *Linear
Analysis*, Teschl, Brezis, Laugesen *Spectral Theory*, Simon) and 53 harvested
rows: 30 `included`, 9 `inline`, 6 `deferred`, 6 `out-of-scope`, 2
`already-published`. The B page carries 4 treatments (Laugesen *Spectral*,
Hunter, Laugesen *Linear Analysis*, Brezis) and 24 rows: 4 `included`,
16 `inline`, 3 `deferred`, 1 `out-of-scope`.

The checker's B-page `coverage-low-yield` warning (4/24 scaffolded) is
explained and confirmed as legitimate decline: the 16 `inline` rows are source
results folded into the item arguments (e.g. Laugesen Linear Analysis §4.3
Cor 4.8/4.9 and Exercise 4.3; Hunter §4.9–4.10; Brezis §8.6 and Thm 9.31), the
3 `deferred` rows belong to PDE-16 (variational formulation), PDE-18 (interior
regularity) and PDE-20 (regularity and maximum principles), and the single
`out-of-scope` row is the disk/Bessel spectrum, which the design deliberately
replaces by the square repeated-eigenvalue example. The A-page declines are
likewise page-owner deferrals (Poincaré→PDE-14, interior $H^2$→PDE-18,
Lax–Milgram→PDE-16, comparison principle→PDE-20) or genuinely out of scope
(Weyl asymptotics, Courant nodal domains, the whole-space non-compact
comparison $(-\Delta+I)^{-1}$ on $\mathbb R^n$, reverse Neumann monotonicity).

One record-level gap, not a subject gap: the B-page coverage record lists only
4 sources and has no Simon row, while two B items
(`rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis`,
`ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue`)
cite Simon with URL and locator, and Simon is fetch-verified on the A page.
Recommended reconciliation when the page is built: add the Simon row to the
B coverage record with those two item mappings (Step 4/owner record repair).

## Role in the library

The pair is PDE-17: Gårding plus the elliptic Fredholm alternative plus the
self-adjoint operator with compact resolvent plus the discrete spectrum and
eigenbasis, and it is the designed supplier of the later evolution pages.
Confirmed on disk: batch 12 (interior and boundary Sobolev elliptic
regularity) declares the A page in `requires` and consumes
`thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems`,
`cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem`,
`def-symmetric-elliptic-weak-eigenpair` and
`lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`;
batches 16, 17 and 18 consume
`def-ltwo-operator-associated-with-a-symmetric-elliptic-form`,
`lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded`,
`thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`,
`thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`,
`lem-eigenbasis-expansion-in-the-form-norm`,
`thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue`,
`thm-courant-fischer-minimax-for-elliptic-eigenvalues`,
`cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal`
and `cor-poincare-constant-and-first-dirichlet-eigenvalue`. All of these exist
on the pair (design items 10–12 are present, as the design requires for the
heat-semigroup pages). No published item or page references any pair item
(checked over `items/*.md` and `library/`), and
`research/published-consumer-supplier-ledger.md` names neither the pair nor its
suppliers, so there is no published-defect entanglement.

## Prerequisites

- Page level: A `requires` = {`lax-milgram-and-weak-elliptic-solutions`
  (batch 10, in-run), `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`
  (published; contains `thm-spectral-theorem-for-compact-self-adjoint-operators`)
  and `unbounded-self-adjoint-operators-and-stones-theorem` (published;
  contains `thm-self-adjointness-range-criterion`)}; B `requires` = A. Declared
  edges match `plan-spec.json` and the drift evidence.
- No prerequisite is absent from both the published library and the current
  scaffold: every dep and inline link of all 39 items resolves to a published
  item or an in-run item — abstract suppliers
  `thm-fredholm-alternative-for-identity-minus-compact`,
  `lem-kernel-of-identity-minus-compact-is-finite-dimensional`,
  `thm-spectral-theorem-for-compact-self-adjoint-operators`,
  `thm-self-adjointness-range-criterion`; in-run
  `thm-poincare-inequality-for-w-one-p-zero` (batch 4), the batch-9
  Rellich/Poincaré–Wirtinger items, and the batch-10 Lax–Milgram form and
  operator items.
- Recorded bookkeeping for Step 4 (already in batch-11 notes item 1; reverified
  now): `splice-plan.mjs --run frontier-39-analysis-30 --verify` reports 15
  undeclared immediate page edges for this pair — A: 3 →
  `rellich-kondrachov-and-sobolev-compactness` (PDE-15) and 1 →
  `sobolev-poincare-and-morrey-inequalities` (PDE-14); B: 10 →
  `lax-milgram-and-weak-elliptic-solutions` (PDE-16) and 1 → PDE-15. The items
  exist in-run; only the plan/manifest `requires` edges are missing. Proposed
  action: add direct backward `requires` edges A→PDE-14, PDE-15 and B→PDE-15,
  PDE-16 in `plan-spec.json` and the run manifests. This is an edge-declaration
  gap, not missing content. (The notes' earlier count of 18 differs from the
  current 15 because later owner repairs removed some declared supplier edges;
  the recommended action is unchanged.)

## Uncertainty and observations

1. Proof correctness, statement-by-statement source fidelity and dependency
   minimality were **not** judged here; those belong to Step 3b and Step 5.
2. The scaffold's explicit-constant Gårding inequality
   ($\alpha=\theta/2$, $\beta=\theta/2+nM_b^2/(2\theta)+M_c$) is a sharpened
   form of [H] (4.23) (whose $\gamma=(2\theta)^{-1}\sum_i\|b_i\|_\infty^2+\theta/2-c_0$),
   cross-checked against [T] (10.44)–(10.47) and [Si] Lecture 7; the batch
   notes record that the constants are not claimed optimal. No scope impact.
3. Simon's cited span "printed pp. 100–107" covers the load-bearing min–max
   lemma and monotonicity corollary (Lecture 10 runs printed pp. 98–107); a
   minor locator trim the owner may apply at build time.
4. The manifest's eigenvalue ordering ($\lambda_1\le\lambda_2\le\cdots$ with
   multiplicity) is slightly more general than [H] Theorem 4.25's
   $\lambda_1<\lambda_2\le\cdots$; the scaffold includes the equality case and
   the repeated-eigenvalue counterexample intentionally. No scope impact.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject at design breadth — the elliptic Gårding estimate and shift, the
compact-operator reduction yielding the weak elliptic Fredholm alternative
with adjoint-kernel solvability, the self-adjoint $L^2$ operator with compact
resolvent, and the discrete spectrum with eigenbasis, Rayleigh/min–max
formulas, resolvent and spectral-series statements, together with the full
B-page example set — with fetch-verified source backing for every design row
and the ten additions, all owner repairs applied, and no prerequisite missing
from the published library and the run's scaffold. Recorded: **sufficient**.
