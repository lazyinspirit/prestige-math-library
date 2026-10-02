# Step 3a scope review — Dirichlet's unit theorem, regulators and S-units

- Run: `frontier-37-owner-30` (role: alpha; batch 3; this pair only)
- Dispatch label: `step3a-pair-dirichlets-unit-theorem-regulators-and-s-units-a9c7cfa8ad52046b`
- A page: `dirichlets-unit-theorem-regulators-and-s-units` (order 365.919, category `number-theory`,
  18 items: 4 definitions, 7 lemmas, 6 theorems, 1 corollary — full list in §2)
- B page: `dirichlets-unit-theorem-regulators-and-s-units-examples` (order 365.92, 7 items:
  6 examples + 1 counterexample)
- Page `requires`: A → `minkowski-theory-and-number-field-class-groups` and
  `pell-equations-and-generalized-pell-orbits`; B → the A page only.
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30 --page
  dirichlets-unit-theorem-regulators-and-s-units --decision sufficient`;
  receipt `research/frontier-37-owner-30-step3a-review-dirichlets-unit-theorem-regulators-and-s-units.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item contract, plan,
  page, coverage record, engine state or owner record was edited; nothing below is an
  item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-3.pages.json` | Current scope carrier: 18 A items and 7 B items with statements, strategies, deps and sources; page orders, companions and `requires`; batch 3 contains no other pair |
| `research/frontier-37-owner-30-batch-3.coverage.json` | 6 A sources / 4 B sources, 97 harvested rows: 56 `included`, 21 `inline`, 18 `out-of-scope`, 2 `already-published`; all fetch-stamped (`fetch_verified`) |
| `research/frontier-37-owner-30-batch-3.notes.md` | Scaffolder reconstruction record: design reconciliations, the two local additions, choice audit, the earlier published-defect list, gate results |
| `research/frontier-37-owner-30-batch-3.cross-batch-dependencies.json` | 9 open edges: the page edge A ← NT-22 and 8 item edges to six batch-2 ready scaffolds (recheck at Step 3b) |
| `research/plan-number-theory-track.md` lines 1949–2016 | Binding prose design NT-23: page ids (1951–1952), Requires (1953–1958), Primary backing (1959–1963), A item table (1965–1990), strategy/choice (1991–2005), B table (2007–2015); line 3069 records the A-page dependency cutover |
| `research/plan-spec.json` entries 203/204 | Page identity, order, companion and `requires` match the manifest exactly; both item inventories are empty scaffold placeholders, so the manifest is the inventory of record |
| `research/frontier-37-owner-30-alpha-step1-drift.md` lines 15–21; `…-drift-evidence.json` | Step-1 verdict `no-drift` for this page; declared requires as above; the doubled complex coordinate and the finite-index valuation image are flagged as proof (not scope) checks |
| `research/frontier-37-owner-30-scope-ledger.json` | Both pages are in the 60-page run scope; `allow_in_run_dependencies: true` |
| `research/frontier-37-owner-30-step1-*.json` | All 25 pair items have current `ready` records; the six batch-2 suppliers used here also have current `ready` records |
| Absence of `research/frontier-37-owner-30-owner-authoring-direction.md` and of any step-3a owner receipt | No owner amendment constrains this pair at scope time |
| Independent re-fetches in `/tmp` (this review) | Byte counts match the coverage stamps: Milne v3.08 1 287 434 B, Sutherland Lect. 15 414 005 B, Conrad–Landesman 763 960 B, Neukirch 36 588 729 B; cited passages re-read (below) |

## 1. Intended subject and role in the library

The controlling design is NT-23 “Dirichlet's unit theorem, regulators, and S-units”
(`research/plan-number-theory-track.md` lines 1949–2016). It fixes the subject as: finiteness of
$\mu(K)$ and Kronecker's criterion; the unit norm criterion; the number-field product formula in
the normalization used by the logarithmic map; the logarithmic embedding with doubled complex
coordinates and its trace-zero hyperplane; kernel, discreteness and full-lattice facts; the unit
theorem $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1}$ with fundamental systems; the
regulator with deleted-row normalization and well-definedness; the rank corollary; and
S-integers/S-units with the rank $r_1+r_2-1+|S|$ theorem — plus a B page of seven worked
instances (ranks 0, 1, 2; two regulator computations; a unimodular change of generators; the
$K=\mathbb Q$ S-unit computation; and the $\mathbb Z[\sqrt5]$-versus-$\mathcal O_K$ order
counterexample).

Prerequisites are exactly as designed. NT-22 `minkowski-theory-and-number-field-class-groups`
is batch 2 of this run (24 A items, ready records); the six direct suppliers
(`lem-bounded-conjugates-give-finitely-many-integral-polynomials`,
`cor-minkowski-convex-body-theorem-at-equality`, `thm-covolume-of-an-ideal-lattice`,
`thm-ring-of-integers-and-ideals-are-full-lattices`,
`lem-finitely-many-number-field-ideals-of-bounded-norm`,
`thm-finiteness-of-the-number-field-class-group`) are ready scaffolds whose contracts match the
consumer claims, so the 9 cross-batch edges stay `open` for rechecking at Step 3b, not scope
blockers. The Pell page `pell-equations-and-generalized-pell-orbits` is published
(`library/number-theory/pell-equations-and-generalized-pell-orbits.md`), and the CA-9
fractional-ideal/valuation/class-group interface named by the design is published and reachable
through the declared closure (drift evidence closure of 285 pages; no path to the deferred ZF
foundations in this pair's own closure per the scaffolder's checks).

Consumers. A reverse scan of all 30 batch manifests finds **no cross-batch consumer** of any of
the 25 items and no page-level consumer other than the B companion; the plan's former NT-24
dependency on this B page was cut over to `decomposition-inertia-and-frobenius`
(`plan-number-theory-track.md` line 3070), and no plan-spec page requires the A page besides its
B companion. The pair is therefore a track continuation (the completed number-field arc after
class groups), not an in-run supplier; it blocks nothing. There is no duplication with published
content: the published Pell page owns the order-$\mathbb Z[\sqrt d]$ Pell group, and the new
counterexample `cex-z-sqrt-d-units-need-not-equal-ok-units` strictly strengthens the published
`cex-pell-units-need-not-be-all-quadratic-field-units` (which only exhibits
$\varepsilon\in\mathcal O_K\setminus\mathbb Z[\sqrt5]$), identifying both unit groups and the
index 3; the published item is left untouched and both can coexist.

## 2. Design-to-manifest mapping

All 16 designed A rows are present, in design order, with the designed kinds, followed by the two
declared local suppliers; all 7 designed B rows are present verbatim.

| Design row (plan 1965–1990) | Manifest item |
|---|---|
| roots of unity finite | `lem-roots-of-unity-in-a-number-field-are-finite` |
| Kronecker criterion | `thm-kronecker-root-of-unity-criterion` |
| unit iff norm ±1 | `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one` |
| product formula | `thm-product-formula-for-number-fields` |
| logarithmic embedding | `def-logarithmic-unit-embedding` |
| log image in the hyperplane | `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` |
| kernel = μ(K) | `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` |
| log image discrete | `lem-logarithmic-unit-image-is-discrete` |
| log image full lattice | `thm-logarithmic-unit-image-is-a-full-lattice` |
| unit theorem | `thm-dirichlet-unit-theorem` |
| fundamental units | `def-fundamental-units` |
| regulator definition | `def-number-field-regulator` |
| regulator well defined | `thm-number-field-regulator-is-well-defined` |
| ranks by signature | `cor-unit-ranks-by-number-field-signature` |
| S-integers and S-units | `def-s-integers-and-s-units-of-a-number-field` |
| S-unit theorem | `thm-s-unit-theorem` |

Two local additions, both declared in the batch notes as necessary suppliers and both consumed
before use: `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` (Milne v3.08 Lemma 4.14 /
Prop. 4.15, both re-verified in the fetched text; the design's discreteness lemma needs the
discrete-subgroup ⇒ lattice structure theorem, which NT-22's bounded-intersection results do not
provide) and
`lem-deleted-row-minors-of-a-matrix-with-zero-column-sums` (Milne p. 94 / Sutherland Def. 15.16
cofactor statement; consumed by the well-definedness theorem). No designed claim is dropped or
altered; no pair split or merger is needed.

The manifest realizes the design's displays and conventions: the product formula with finite
$|\cdot|_{\mathfrak p}=N\mathfrak p^{-v_{\mathfrak p}}$ , real $|\sigma(x)|$ and complex
$|\tau(x)|^2$ normalizations; the logarithmic embedding with the explicit non-optional factor 2
on complex coordinates; $H=\{(x_i):\sum x_i=0\}$; full lattice of rank $r_1+r_2-1$; the unit
theorem as an isomorphism with torsion $\mu(K)$; the regulator as the absolute deleted-row
determinant with the empty determinant set to 1 at rank zero; S-integers with $S$ a finite set of
*finite* primes only and rank $r_1+r_2-1+|S|$. The B page keeps the design's $d\equiv1\pmod4$
half-integer correction visible (`ex-real-quadratic-units-and-pell`), gives the two independent
totally real cubic units `α`, `α−1`, computes $R_K=\log\varepsilon$ for a real quadratic field and
the common $2\times2$ minor $0.849287\ldots$ for the cubic, exhibits the $\mathrm{GL}_2(\mathbb Z)$
change of generators, and closes with the index-3 order counterexample. Design exclusions are
recorded with reasons (CM fields Prop. 5.12; the rank-one cubic with a complex place, Milne
Ex. 5.4 and Stein's $Q(2^{1/3})$; continued fractions; function fields; Milne Lemma 5.10's
alternative invertibility route; historical and sharpness remarks).

## 3. Source coverage

The A page is backed by six independently fetched treatments, two of them full proof-bearing
treatments of the spine (Milne v3.08 Ch. 5 and Stein §8.1–8.2), plus Conrad–Landesman Ch. 29,
Sutherland Lect. 15, Neukirch I.4/I.7/I.11 and Biasse–Van Vredendaal §2F; the B page reuses the
core four. Every item carries `sources.references` with locators. I re-fetched four of these
complete PDFs and re-read the load-bearing passages below myself; the Stein and Biasse–Van
Vredendaal locators are accepted from the stamped coverage (not independently re-read in this
review):

- **Milne v3.08** (byte count and `sha256_16 de2066ee7a319c0e` match the stamp): Theorem 5.1
  p. 85 (unit theorem statement and fundamental systems), Lemma 5.2 p. 86, Example 5.3,
  Prop. 5.5 / Cor. 5.6 p. 87, Prop. 5.8, Theorem 5.9 pp. 88–89, Lemma 5.10, Theorem 5.11 p. 90
  (`S` a finite set of prime ideals; rank $r+s+\#S-1$), regulators p. 94, Lemma 4.14 / Prop. 4.15
  pp. 73–75, and the product-formula statements in Chs. 7–8.
- **Neukirch** (stamp 36 588 729 B): Corollary (11.7) p. 71 states
  $K_S\cong\mu(K)\times\mathbb Z^{\#S+r+s-1}$ for a finite set of prime ideals, matching the
  manifest's finite-prime convention; the (11.6) exact sequence and (7.4) unit theorem are the
  two inputs the `thm-s-unit-theorem` strategy names.
- **Sutherland** (stamp 414 005 B): Def. 15.16 defines $R_K$ as the covolume and gives the
  "absolute value of any minor" computation; Example 15.17 gives $R_K=\log\varepsilon$; the
  doubled $|x|_{\mathbb C}^2$ normalization is at §15.2.
- **Conrad–Landesman** (stamp 763 960 B): Example 29.1's displayed
  $\mathcal O_K^\times=\langle\pm1\rangle\alpha^{\mathbb Z}(\alpha+1)^{\mathbb Z}$ for
  $\alpha^3-3\alpha+1=0$ is a source misprint (verified: $Nm(\alpha+1)=(-1)^3f(-1)=-3$); the
  scaffold records the correction and asserts only $\alpha,\alpha-1$ and finite index.

Harvest: 97 rows, no `deferred` row, and every non-deferred row names a destination
(`coverage-checklist` exit 0, 0 errors/0 warnings, run in this review). I reproduced the B-page
numerics independently: roots $1.532088886238$, $0.347296355334$, $-1.879385241572$ of
$X^3-3X+1$; all three deleted-row $2\times2$ minors and the unimodularly changed tuple have
absolute determinant $0.849287450646$; $\varepsilon^3=2+\sqrt5$, $\varepsilon^6=9+4\sqrt5$ and
$\log(9+4\sqrt5)=6\log\varepsilon\approx2.887270950$. The deliberate exclusions listed in §2 are
separate topics or alternative routes and remove no result the design promises.

## 4. Findings for the owner (recorded, not scope blockers)

1. **Two coverage rows describe more than the named item states.** (a) The Milne p. 94 row
   "The regulator of an arbitrary independent system and the index ratio
   $|Reg(\varepsilon_i)|/|Reg(U)|$" is dispositioned `inline → thm-number-field-regulator-is-well-defined`,
   but that item's statement and strategy prove invariance for *fundamental* systems only; the
   index formula for an arbitrary independent system is neither stated nor derived. (b) The
   Conrad–Landesman Example 29.2 row (biquadratic $Q(\sqrt2,\sqrt3)$, three independent units)
   is `included → ex-change-of-fundamental-units-preserves-regulator`, but the realized example
   uses the cubic's units and the $\mathrm{GL}_2(\mathbb Z)$ change; the independence-detected-by-logs
   and finite-index content is present on the pair at the cubic instance
   (`ex-units-in-a-real-cubic-field`), not with the biquadratic units. These are harvest-record
   wordings, not gaps in the designed scope; if the owner wants the ledger exact, the cheap
   repair is to reword/re-dispose those two rows, or add a one-line remark/index statement.
2. **No complex-place instance.** Every non-torsion example is totally real (real quadratic,
   cubic), so the doubled complex coordinate is exercised only by the definition and lemmas;
   both sources offering a signature $(1,1)$ instance (Milne Ex. 5.4, Stein's $Q(2^{1/3})$) are
   excluded with written reasons. This is a conscious design choice, not an oversight; a
   signature-$(1,1)$ example is optional future enrichment.
3. **Harvest label.** The row named "Lemma 5.1 (finitely many roots of unity)" has no such
   numbered result in Milne v3.08 (Ch. 5 opens with Theorem 5.1, the unit theorem; finiteness of
   $\mu(K)$ is carried by the row's Prop. 5.5 locator). Item-level locators cite Theorem 5.1
   correctly and the batch notes already record the locator reconciliation; bookkeeping only.
4. **Published defects** recorded by the scaffolder for the owner ledger
   (`cor-ring-of-integers-is-a-dedekind-domain` citation gap; the ZF-labelled integral-ideal
   factorisation item's DC chain; the compressed ramified-primes proof) are proof-level,
   transitive-dependency matters outside this scope decision; I did not adjudicate them. The
   Conrad–Landesman 29.1 misprint was verified numerically above.
5. Neukirch's (11.8) (finiteness of the S-class group) lies in the read range but is neither
   harvested nor part of the design; no scope action.

## 5. Checks run for this pair (read-only)

| Check | Result |
|---|---|
| `coverage-checklist.mjs research/frontier-37-owner-30-batch-3.coverage.json` | exit 0: 2 pages, 97 harvested, 0 errors, 0 warnings |
| `manifest-deps.mjs research/frontier-37-owner-30-batch-3.pages.json` | 25 items, 0 normalized, 0 errors |
| `manifest-deps.mjs research/frontier-37-owner-30-batch-*.pages.json` | 778 items, 0 errors |
| `content-policy.mjs --manifest-only research/frontier-37-owner-30-batch-*.pages.json` | 778 scoped items, 0 errors, 0 warnings (single-manifest invocation reports the 8 batch-2 in-run edges, which is an invocation-scope artifact, not a defect) |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0: 778 items across 60 pages, no mislabel/cycle |
| `step1-decisions.mjs check --run frontier-37-owner-30` | 778/778 `ready`, closed |
| `fwdcheck.mjs research/frontier-37-owner-30-batch-3.pages.json` | exit 0: 0 open forward references |
| `step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` (before recording) | this pair's scope review outstanding; siblings recorded concurrently by other alphas |

## Judgment

**Sufficient.** The planned definitions, results and examples cover the intended subject
adequately: the manifest reproduces the binding NT-23 inventory 1:1 (16 design items plus two
necessary, declared local suppliers on A; all 7 design items on B), the statements fix the
conventions the design mandates (doubled complex logarithm, finite-prime S, empty determinant at
rank zero), the examples witness ranks 0, 1 and 2 with two regulator computations and the
sharp order-versus-maximal-order counterexample, and every part of the spine is anchored in at
least two independent full treatments, with the harvest gate clean and the cited passages
re-read at their locators. Dependencies are published items or ready in-run scaffolds awaiting
Step 3b, the pair has no other consumer to contradict and no page-level drift (`no-drift`).
The findings in §4 are record-accuracy and optional-enrichment observations that change no
designed result; none of them requires an owner scope amendment.

This decision's receipt is bound to the current A+B scope hash (page identity plus item ids,
kinds, titles and statements). Any later inventory or statement change voids it and requires a
fresh Step 3a decision; proof-level and item-contract questions remain with Step 3b and the
later review stages.
