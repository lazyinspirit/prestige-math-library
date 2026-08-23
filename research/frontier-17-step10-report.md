# frontier-17 — Step 10 final owner report

Lead Alpha, run `frontier-17`, dispatch `owner-report-v2`, 2026-08-24.
Claude Opus 5 on the claude CLI runner, `xhigh`, 1,000,000-token context
(`claude-opus-5[1m]`).

This stage edits no mathematics, no prompt, no workflow code, no ledger, no
receipt and no `status` field. It refreshed the two derived defect-ledger views
(`stats`, `render`) as instructed, re-ran every gate named below from the repo
root, and wrote this file. **Nothing here publishes anything.**

---

## What was built

**13 A/B pairs — 26 pages, 443 items — across 7 categories on disk.** Every page
and every item is `status: draft`, verified mechanically at this stage. (The
batch manifests name eight categories: batch 1's Frattini pair is planned as
`group-theory` and is homed under `library/abstract-algebra/`, which is where
`pathway-sync` placed it and where `pathcheck` is green. The mismatch is a
planning label, not a page-file field.)

| category | A pages | A + B items |
|---|---|---|
| real-analysis | 5 | `constant-rank-submersions-and-regular-level-sets` 19+14 · `regular-surfaces-and-surface-integrals` 22+13 · `volumes-of-elementary-solids-and-solids-of-revolution` 15+9 · `the-real-gamma-and-beta-functions` 25+7 · `trigonometric-and-oscillatory-examples-in-several-variables` 1+9 |
| abstract-algebra | 3 | `the-galois-correspondence` 30+15 · `modules-over-a-pid-and-canonical-forms` 38+12 · `frattini-subgroups-and-the-burnside-basis-theorem` 24+12 |
| category-theory | 1 | `monadicity-and-becks-theorem` 44+7 |
| complex-analysis | 1 | `the-identity-theorem-and-the-open-mapping-theorem` 25+10 |
| measure-theory | 1 | `outer-measure-and-the-caratheodory-extension-theorem` 35+8 |
| number-theory | 1 | `sums-of-two-squares` 18+8 |
| topology | 1 | `applications-of-the-fundamental-group` 17+6 |

By kind: 104 theorems, 74 examples, 58 lemmas, 58 corollaries, 55 definitions,
41 false statements, 26 propositions, 23 counterexamples, 4 remarks. **384 are
proof-bearing** and carry a strict proof contract; `level-coverage` counts
**2,034 declared relationships**.

**No result in this level rests on anything the library has not established.**
`proved_here: false` is used **zero** times — the documented external fallback
was not taken once, and there is no `external_dependency` record to audit.
**The run declares no forward reference either**: 35 items, all on the
complex-analysis pair, carry a `forward_refs` key and every one of the 35 is the
empty list, which is what 6c verified independently. There are also zero
`external_refs` mentions. **Both reader-facing citation tiers above "ordinary
citation" are therefore unused in this level**: neither the fuchsia ‡
not-proved-here marker nor the sky forward-reference marker will appear on any of
these 26 pages.

Component provenance over the 443 items: **statement** 308 `literature-derived`,
112 `ai-altered`, 23 `ai-generated`; **proof** 336 `ai-altered`, 47
`ai-generated`, 59 `not-applicable`, 1 `literature-derived`. No `ai-generated`
Statement is load-bearing — `content-policy` gates that, and each group Alpha
independently probed the AI-generated constructions in its own batches for
counterexamples (group a's list is in `frontier-17-alpha-a-6b.md` §"Read-only
refuter adjudications"; all survived).

**One page is thin and the owner should know it.**
`trigonometric-and-oscillatory-examples-in-several-variables` is an A page
carrying a **single** item, `prop-two-classical-counterexamples-in-polar-coordinates`,
against a 9-item B companion. `coverage-checklist` raises its only warning on
exactly this page — `coverage-low-yield`, 7 of 25 harvested results scaffolded.
Group a adjudicated the declines at step 3 and again at 6b.0 and upheld them;
the pair is an examples-oriented pair by design and its B page carries the
mathematics. It is not a defect, and it is the thinnest thing in the run.

### The run's shape, and one thing about it that is unusual

`frontier-17` **spans the 2026-08-23 model-lineup move.** The dispatch record
(`research/frontier-17-dispatch/*.result.json`) is unambiguous:

- **`gpt-5.6-sol`** ran every Beta (scaffold, author, fix, source-scout), **all
  nine independent readers**, the `2-assign` Alpha, the step-0 drift Alpha, all
  three step-3 group Alphas and their rechecks, the step-4 splice adjudication,
  and group Alphas **a** and **b** at 6b.
- **`claude-opus-5[1m]`** ran group Alpha **c** at 6b, and everything from 6c
  onward: 6c, the contract audit, the risk-review round, step 8 and its three
  repair rounds, step 9 and its closure recovery, the impact closure, the
  receipts, the pathway rewrite, the step-10 contract repair, and this report.
  Every dispatched `refuter` in the record is Opus.

Two consequences that matter for how the evidence should be weighed, and they
point in opposite directions. Group c said it plainly in its own 6b report and it
is right: its four Opus refuters reading GPT-authored, GPT-read text were a
**genuine cross-family read**, which is the most plausible reason they found
seven fatal defects on text that had already cleared a full reader pass. But the
Opus **judge** lane still shares its family — and its exact model id — with the
Alpha that adjudicated its rejections from 6c onward, and with the author of the
three items step 9 built. That is developed in §"The two judge lanes" below.

Also recorded because it is part of what was built: the run was **re-scoped
twice before step 2** (`research/frontier-17-scope-amendment.md`). Step 1's drift
review found `trigonometric-and-oscillatory-examples-in-several-variables`
needed `regular-surfaces-and-surface-integrals`, absent from both the published
library and the original scope; the pair was added as batch 10, a batch-seam
repair moved constant-rank and regular surfaces together, and an
assignment-cap rebalance folded ten batches back into nine without changing any
owner cap. Every pre-rebalance artifact is preserved under
`research/frontier-17-scope-repair-history/`, set-preservation was checked
mechanically before each atomic replacement, and the scope ledger's 26 pages all
appear in the final manifests — verified again at this stage, 0 missing.

---

## What every verification gate established, and what it does not prove

Every row below was re-run from the repo root at this stage unless marked. All
are green.

| gate / receipt | what it established on the final text | limit of the evidence |
|---|---|---|
| `level-coverage --verify-current-context` | **0 errors, exit 0** — 443 items, 384 proof-bearing, 2,034 declared relationships, **443/443 required judge pairs current**. 94 warnings, all `judge-verdict-adjudicated-nonfatal`, over 88 distinct items | the receipt gate; it does not read a proof. A warning here is an adjudicated rejection, not an open defect |
| `judge-closure` (`--judge-only --verify-current-context`) | `closed: true`, scope 443, `pairs_complete` 443, `needs_rejudge` `unadjudicated` `open_fatal` all empty, **both allowance flags `false`** — closed on the merits, not on an allowance. **Recomputed at this stage to a scratch path and byte-identical to the on-disk receipt** apart from its timestamp | closure is per frozen context and per configured lane; it is not a claim about recall |
| `publication-ready --verify` | `publishable-pending-owner-approval`, `workflow_owned_blockers: []`, content and input hashes current, **every scoped item and page still `draft`** | deliberately does not perform the owner's audit, publish or deploy |
| `defect-ledger check` | 333 rows for this run, **0 errors**, no `open` row, view hash current | the ledger records dispositions; it does not certify them |
| `precheck` | 4,924 items checked repo-wide, **0 failing** | proof stratification and phase format, not validity |
| `depcheck` · `fwdcheck` · `extcheck` | no cycles, every reference resolves, no draft item on a published page; repo-wide, every forward reference is declared, strictly later, closed by a planned later page and off the spine, and every recorded-not-proved statement is a cited remark with its consequences marked. **This run declares neither class**, so both gates are green on it vacuously | see the blind spot in §"Machinery", finding M-6 |
| `prosecheck` · `pathcheck` | no positional claim contradicts the spec; 10 pathway files, 0 errors, 0 warnings | navigation prose, not mathematics |
| `depsource` | 0 unresolved dependencies; 28,329 deps link to a published page, 720 to neither a published nor an earlier planned page | the 720 are this level's own draft-local edges, which is by design while the run is draft |
| `splice-plan --verify` | 26 pages across 9 manifests agree with the plan; `splice-refusals.json` is empty for the whole run | manifest/plan agreement, not mathematics |
| `merge-proof-contracts` → `proof-contract --strict` | 384/384 proof-bearing items, **0 errors**, 1 warning | worksheets record obligations; they do not prove inferences. The warning is named below |
| `citation-fidelity --fail-on-missing-quote` | every recorded contract quote occurs in its cited item; no missing quote, no widening candidate | it compares the **contract** quote to the target — not the reader-facing `[L#]` line. That gap cost a real defect at 6c (M-4) |
| `boundary-audit --fail-on-contradicted --fail-on-template` | 3,048 boundary rows over 9 files, no mechanically contradicted disposition, no template cluster at or above 3 members | narrow by design; a 2-member cluster survives (§"Thin receipts", T-6) |
| `finite-smoke` | 3 checks, no counterexample: cyclic-subgroup Lagrange through n=200, binomial congruence over 2,363 solvable instances, Vieta over 837 comparisons | **3 of 384 proof-bearing items.** Bounded falsification, never a proof |
| `risk-report --require-reviewed` | 384 items routed, every high/critical item carries an Alpha `risk_review` | the field is checked for non-emptiness only; see T-3 |
| `gate-liveness --min-checks 1` | re-run at this stage: **all four live** — `finite-smoke` 3 checks, `proof-contract` 384 items, `coverage-checklist` 710 results, `precheck` 4,924 items | it caught this run's vacuous `finite-smoke` (M-1); it cannot tell 3 checks from 300 |
| `coverage-checklist` | 13 pages, **710 harvested results**, 0 errors, 1 warning (`coverage-low-yield`, batch 2) | structure cannot prove a harvest is honest; the group Alphas supplied that reading at 6b.0 |
| `url-sweep --recover --fail-on-dead` | re-run at this stage: **40/40 live**, 0 failed, 0 needing recovery, 0 suspect | liveness is not evidence a source supports what is attributed to it |
| `content-policy` (manifests) | re-run at this stage: **443 scoped items, 0 errors, 0 warnings** — component provenance, generated-claim containment, applied-`\iota` notation and source-URL requirements | labels are accountability, not truth |
| `audit-manifest` | re-run at this stage: **2,034 relationships over 443 items in 9 batches, 0 defects** (1,948 over 440 at 6c, before step 9's three builds) | it enumerates the relationships; 6c read them |
| `impact-audit` receipt | 440 changed interfaces, 371 in the required-review set, **371/371 concrete dispositions, 0 pending** | proves the consumer queue was reviewed; see T-5 on its window and its notes |
| `spine-audit` | 58 proof-bearing items among the 100 largest dependency cones, all hash-current | **57 of 58 readings are carried from frontier-16 at byte-identical hashes** (T-2) |
| `step8-guard` | every step-8 edit licensed by a `confirmed_fatal` row; the final round reports 0 changed / 0 created / 0 deleted over 6,151 items | one direction only; the closure gate checks the other |
| `apply-judge-stamps --verify` | 443 in scope — **355 stamped current, 88 lane-rejected, 0 recorded-not-proved, 0 problems** | an adjudicated rejection never manufactures a pass stamp |
| `pathway-closure check` | 10 briefs, all `status: closed`, each with baseline and final section hashes | course navigation, not proof evidence |
| `obligations check --terminal` | 0 rows, 0 errors, 0 open report-tier rows | an empty set is legitimate: this run owed nothing external |
| `rendercheck` | 6,517 files parse under the real KaTeX parser and the renderer's YAML parser | source parsing, not visual layout — and the browser tier is gone (T-9) |

**The one warning that is not a receipt artifact.** `proof-contract --strict`
carries a `shotgun-bracket` warning on
`lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`:
step 3.3 cites four of five declared facts while two other steps cite none. The
contract-audit round opened the uses and found each licensed. It is weaker than
per-step attribution and it is not a publish blocker; step 8's fatal-only rule
correctly forbade editing it, and it is named here so it is not rediscovered.

---

## Fatal mathematical defects — 174, all closed

`research/defect-ledger.jsonl` holds **333 `frontier-17` rows**: **174 fatal**,
151 nonfatal, 8 polish. Dispositions on the fatal rows: **159 `fixed`, 15
`narrowed`, 0 `open`, 0 `deferred`, 0 `dropped`.** No fatal defect survives into
this report as an open item.

Repair cost of the fatal set: 101 `inline-fix`, 59 `repair+rejudge`, 14
`rewrite`. Fourteen proofs were **replaced rather than mended** — repair (2) in
the Alpha brief's list — and fifteen claims were **narrowed** rather than
patched with an inflated dependency.

Where they were caught, and by whom:

| stage | fatal | | role | fatal |
|---|---:|---|---|---:|
| `6a-read` | 96 | | independent reader | 96 |
| `8-adjudicate` | 48 | | judge, DeepSeek V4 Pro | 52 |
| `6b-adjudicate` | 24 | | Alpha's read-only refuter | 21 |
| `8-rejudge` | 5 | | group Alpha, adjudicating | 3 |
| `9-scope` | 1 | | judge, Claude Opus 5 | 2 |

Two things in that table deserve to be read rather than skimmed. **The
independent readers are the single most productive control in the run** — 96 of
174, more than the two judge lanes and every refuter combined. And **the
cross-family judge lane found 52 fatal defects to the same-family lane's 2**,
which is §"The two judge lanes".

### By defect type

Each entry names the distinct items. Every one is closed; none is open.

**`citation-missing` — 40 rows, 36 items.** A load-bearing result absent from
`deps` altogether, not merely unlifted into the Facts block. This is the run's
largest fatal class and its most consistent one: `thm-burnside-basis-theorem`
applied the elementary-abelian basis lemma to `P/Φ(P)` with nothing establishing
that quotient is elementary abelian; `def-topology-induced-by-an-ultrafilter-algebra`
spoke of an algebra for the ultrafilter monad while citing only the endofunctor,
unit and multiplication; `thm-fundamental-theorem-of-finite-galois-theory` rested
two steps on `|Gal| = [K:F]` with nothing cited supplying it.
Locations: 18 proof-step, 17 facts-block, 3 frontmatter, 1 definition, 1 remark.
Items: `cor-primitive-sums-of-two-squares-closed-under-products`,
`lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`,
`thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`,
`cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes`,
`cor-local-holomorphic-roots-nonvanishing-function`,
`rem-complex-versus-banach-open-mapping-theorems`,
`cor-regular-level-set-local-graph-theorem`, `ex-graph-as-a-regular-level-set`,
`cex-cusp-level-set-has-a-rank-drop-at-the-origin`,
`cex-critical-value-can-have-a-smooth-level-set`,
`fs-every-level-set-of-a-smooth-map-is-a-graph`,
`fs-a-critical-value-has-a-singular-level-set`,
`fs-flux-is-independent-of-the-parametrization`,
`thm-cylindrical-shell-formula-for-solids-of-revolution`,
`lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`,
`thm-burnside-basis-theorem`,
`cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set`,
`cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`,
`thm-finite-galois-extension-characterizations`,
`thm-fundamental-theorem-of-finite-galois-theory`,
`fs-becks-theorem-characterises-strict-monadicity`,
`def-topology-induced-by-an-ultrafilter-algebra`,
`thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse`,
`ex-the-comparison-functor-for-the-free-group-adjunction`,
`ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic`,
`thm-caratheodory-domain-is-the-completion-under-sigma-finiteness`,
`ex-sphere-and-hemisphere-surface-integrals`,
`ex-orientation-reversal-preserves-area-and-negates-flux`,
`ex-closed-cylinder-as-a-finitely-patched-oriented-surface`, `ex-torus-surface-area`,
`fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas`,
`thm-real-gamma-endpoint-behaviour-and-unique-minimum`,
`lem-bohr-mollerup-factorial-squeeze`,
`cor-unit-n-ball-volume-is-maximal-in-dimension-five`,
`ex-s-three-galois-correspondence-for-x-cubed-minus-two`, and one aggregated row
covering three volume proofs with undeclared high-page dependencies.

**`citation-truncated` — 38 rows, 37 items.** A restatement stopping before the
clause the proof actually uses. `[L2]` on
`lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers`
listed the ring axioms **without commutativity of addition**, and step 3.1
verifies exactly the axioms listed; `thm-becks-strict-monadicity-theorem` and
`thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs`
each restated strict creation without the clause that the lifted fork is a
coequalizer — the clause the next step consumes; `thm-invariant-factor-decomposition-over-a-pid`
quoted only the simultaneous-basis theorem's vague first sentence and dropped
the existence clause producing the aligned bases;
`thm-regular-level-surfaces-have-local-regular-parametrizations` dropped the
normalisations `g(0)=0`, `Dg(0)=0` that steps 1.1 and 3.1 use.
Locations: 29 facts-block, 9 contract-row.

**`missing-hypothesis` — 17 rows, 15 items.** The sharpest class in the run,
because nine of the seventeen sit in the **Statement**.
`thm-lagrange-multipliers-for-regular-level-set-constraints` cited the
curve-velocity theorem without its regular-value hypothesis, and surjectivity of
`DG` at one point does not supply it — `G(x)=x²(x−1)` at `a=1` has `DG(1)=1`
while `0` is a critical value; `def-biholomorphic-map`'s local clause required
only that the restricted domains lie **inside** the two neighbourhoods, under
which `z²` is biholomorphic between neighbourhoods of 0 by restricting away from
the origin, collapsing clause 4 of the holomorphic inverse function theorem into
triviality; `thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`
admitted `m=0` under the library's naturals-contain-zero convention while step
2.1 divides by `√m`. Also
`def-local-degree-holomorphic-map`, `thm-local-normal-form-holomorphic-map`,
`cor-local-multiplicity-count-holomorphic-map`, `thm-surface-integrals-over-c-one-graphs`,
`thm-scalar-surface-integrals-on-a-surface-of-revolution`,
`ex-lagrange-multipliers-on-the-sphere`,
`thm-discriminant-square-criterion-for-an-alternating-galois-group`,
`thm-the-contravariant-power-set-functor-is-monadic`, and the four Galois
correspondence examples.

**`citation-misattributed` — 17 rows, 17 items.** A fact credited to a result
that does not state it. `cor-euclidean-submersions-are-open-maps` attributed
"homeomorphisms are open maps" to a definition that explicitly defers the
equivalence to the next item; `def-invariant-factors-and-elementary-divisors-of-an-endomorphism`
attributed both existence and uniqueness to the uniqueness theorem;
`lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` asserted `h'/h`
holomorphic from the algebra of derivatives, whose quotient rule needs a
holomorphic numerator — that `h'` is holomorphic is the higher-derivative
theorem and was not cited, while step 1.1 feeds `h'/h` to a primitive theorem.
Two rows aggregate source-locator misattributions across batch 9 (Riehl, Mehrle).

**`invalid-inference` — 14 rows, 14 items.** All but one in a proof step.
`thm-groups-are-monadic-over-sets` and `thm-monoids-and-rings-are-monadic-over-sets`
each asserted that the isomorphism over **Set** of the cited theorem *is* the
comparison functor, which that theorem does not say — strict monadicity was not
established, and both were repaired by proving the comparison bijective on
objects and morphisms directly. `ex-volume-of-a-solid-of-revolution-by-cylindrical-shells`
applied the shell theorem, stated for the region below a single nonnegative
profile, to the region **between** two profiles. `prop-fraction-field-dimension-recovers-pid-module-rank`
took an arbitrary torsion-free splitting from a corollary whose own Statement
warns the complement is not canonical, then equated its rank with the
invariant-factor rank.

**`false-or-overstrong-title` — 11 rows, 11 items, all in the title.** This is
the class the judges structurally cannot catch — they read Statements and cannot
see a false title — and every one was caught by a reader or an Alpha:
`cor-divisors-of-primitively-two-square-representable-integers`,
`prop-two-classical-counterexamples-in-polar-coordinates`,
`cor-surface-area-of-revolution-formula`, `cex-schwarz-lantern-polyhedral-areas-diverge`,
`cex-compact-solid-without-jordan-volume`, `fs-every-compact-solid-has-a-volume`,
`prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator`,
`lem-free-word-rings-are-unital-rings`,
`thm-irreducible-separable-polynomial-iff-galois-group-transitive`,
`prop-module-and-jordan-string-block-data-agree`,
`ex-generator-rank-of-upper-unitriangular-groups`.

**`missing-choice-scope` — 8 rows, 7 items,** five of them in the Statement:
`prop-caratheodory-extension-compares-with-other-extensions`,
`cor-regular-level-set-local-graph-theorem`,
`lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`,
`thm-becks-monadicity-theorem`, `thm-crude-monadicity-the-reflexive-tripleability-theorem`,
`lem-source-algebra-is-caratheodory-measurable`,
`thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation`.
The sharpest was group a's REF4-1: a general complement theorem **explicitly
assumes Choice** and `[L2]` silently dropped it; the repair replaced it with the
choice-free finite-dimensional orthogonal decomposition rather than inheriting
the axiom.

**`citation-inflated` — 7 rows, 7 items.** `thm-rational-canonical-form-existence-and-uniqueness`
had `[L1]` claiming a finitely generated PID module is classified by its
invariant factors **alone**, dropping the free rank — false as written, since
`Z` and `Z²` have no invariant factors and differ. Also
`prop-frattini-subgroup-of-a-quotient-finite-p-group`,
`thm-holomorphic-inverse-function-theorem`,
`thm-no-retraction-of-the-closed-disk-onto-the-circle`,
`ex-lagrange-multipliers-with-two-constraints`, and two aggregated rows (three
radius-zero ball interfaces; five inflated Cavalieri facts).

**`false-or-overstrong-statement` — 7 rows, 7 items.**
`lem-maximal-divisor-pivot-for-pid-submodules` ended step 4.1 with a **false**
clause — that a unit pivot makes `N` a direct summand of `M`; for `R=Z`,
`M=Z²`, `N=Z(1,0)+Z(0,2)`, `M/N ≅ Z/2` is not torsion-free.
`thm-galois-group-of-a-compositum-as-a-fibre-product` asserted in its Given that
the compositum is the splitting field of the **product** of two separable
polynomials, which need not be separable when `E₁=E₂`. Also
`def-admissible-regular-parametrized-surface-patch`,
`cex-circular-curve-defeats-vector-valued-mean-value-equality`,
`cor-torsion-splits-from-the-free-part-over-a-pid`,
`thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras`,
and the A-page summary of `applications-of-the-fundamental-group`, which falsely
attributed the `n=0,1` Euclidean-dimension branches to punctured-space
fundamental groups.

**`ill-typed-construction` — 3.** `def-finitely-patched-regular-surface-and-integrals`
required induced normals to agree away from the excluded overlap preimages —
exactly where no two patches both have a normal — so the clause constrained
nothing and admitted opposite normals on patches meeting along a curve. Also
`cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` and
`thm-hadamard-three-lines`.

**`false-boundary-disposition` — 2**
(`lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces`,
`thm-cylindrical-shell-formula-for-solids-of-revolution`); **`citation-corrupted`
— 2** (`fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms`,
`fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability`);
**`invalid-witness` — 1** (`lem-coprime-cyclic-pid-quotients-split`);
**`undefined-notation` — 1** and **`arithmetic-error` — 1**, both on
`lem-product-of-content-zero-set-and-interval-has-content-zero`, where step 2.1
asserted a strict inequality its own step 1.2 contradicts; **`other` — 5**, four
of them contract-row records on the two-square batch.

### By location

| location | fatal rows | reading |
|---|---:|---|
| facts-block | 65 | the citation surface: what a step is *told* it may use |
| proof-step | 46 | the inference surface |
| statement | 21 | **not repairable by editing a proof** — narrowed or corrected |
| contract-row | 14 | the audit record itself was wrong |
| title | 11 | invisible to the judges by construction |
| frontmatter | 8 | `deps`, provenance, `forward_refs` |
| definition | 6 | the object was ill-formed before any theorem used it |
| remark · page-summary · coverage-row | 1 each | 174 total |

**The Facts block is where this level's mathematics went wrong.** 65 of the 174
fatal defects sit there, the single largest location, and cutting the same set by
defect type rather than by place gives the same answer: **104 of 174 — 60% — are
one of the five `citation-*` subclasses.** This level's characteristic failure is
a step being told it may use something the cited result does not say, not an
arithmetical or structural error. That is a different profile from
`frontier-16`, and §"Comparison" reads it.

**Twenty-one fatal defects sat in a Statement and eleven in a title** — 32
places where the claim itself, not its argument, was wrong; fifteen of the run's
fatal resolutions are `narrowed` rather than `fixed` for exactly that reason.
**The eleven titles are the class the judges structurally cannot catch**, since
they read Statements. Every one was caught by a reader or an Alpha, and this is
also the class an owner audit is most likely to be able to check independently.

---

## The two judge lanes

Lineup `deepseek+opus`, resolved by the tool and recorded in the receipt — not
assumed. `judge-compare` over `research/frontier-17-judge.jsonl`:

| | DeepSeek V4 Pro | Claude Opus 5 (1M) |
|---|---:|---:|
| ledger rows | 502 | 871 |
| usable verdicts | **502** | **502** |
| passes | 361 | 479 |
| rejections | 141 | 23 |
| **nulls (capacity refusals)** | **0** | **369** |
| adjudicated | 141/141 | 23/23 |
| confirmed fatal | 52 | 14 |
| confirmed nonfatal | 86 | 8 |
| false positive | 3 | 1 |
| distinct fatal ids | 47 | 14 |

Agreement on the latest usable verdict over 443 pairs: **both pass 355, both
reject 6, DeepSeek-only reject 80, Opus-only reject 2, incomplete or null 0.**
Context integrity: **443 matching frozen contexts, 0 mismatched or unattested.**

### DeepSeek is the only cross-family lane, and the Opus lane's agreement is not corroboration

This is the standing rule (`CLAUDE.md`, owner 2026-08-23) and this run's evidence
is unusually direct about it. The Opus judge lane runs the identical model id as
the Alpha that adjudicated its rejections at 6c, 8, 9 and here — `claude-opus-5[1m]`
— so **an Opus rejection this Alpha called `false_positive` is two reads by the
same model agreeing, not two lanes corroborating.** There is exactly one such
call, and it is named: `fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability`.
The step-8 report gives it a full pass against SCHEMA §7 rather than a
same-family nod, and the reasoning is checkable from the section text: examples
pages are leaves, the counterexample Opus wanted cited is homed on a *different*
B page and therefore cannot be a dependency, and the sibling Opus cited as a
precedent is a same-B-page citation, which §7 explicitly permits. The owner can
verify that in one reading of SCHEMA §7 and two page files, and should.

The same-model relation is tighter still for the three items **step 9 built**:
their author, their refuter, their adjudicator and the Opus judge lane are one
model. `ex-lagrange-multipliers-with-two-constraints` is the case that matters,
and it is in §"Repeated repairs" below.

**Where the cross-family screen actually paid.** Of 47 distinct items DeepSeek
confirmed fatal, **35 were found by no other lane**:

`cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set`,
`cor-torsion-splits-from-the-free-part-over-a-pid`,
`cor-volume-under-a-continuous-graph-over-a-jordan-base`, `def-biholomorphic-map`,
`def-invariant-factors-and-elementary-divisors-of-an-endomorphism`,
`def-topology-induced-by-an-ultrafilter-algebra`,
`ex-biquadratic-galois-correspondence-lattice`,
`ex-closed-cylinder-as-a-finitely-patched-oriented-surface`,
`ex-d-four-galois-correspondence-for-x-four-minus-two`,
`ex-lagrange-multipliers-with-two-constraints`,
`ex-maximal-subgroups-as-frattini-hyperplanes`,
`ex-quartic-x-four-minus-x-minus-one-has-galois-group-s-four`,
`ex-s-three-galois-correspondence-for-x-cubed-minus-two`,
`ex-sphere-and-hemisphere-surface-integrals`,
`ex-the-comparison-functor-for-the-free-group-adjunction`, `ex-torus-surface-area`,
`fs-becks-theorem-characterises-strict-monadicity`,
`lem-bohr-mollerup-factorial-squeeze`, `lem-maximal-divisor-pivot-for-pid-submodules`,
`lem-product-of-content-zero-set-and-interval-has-content-zero`,
`lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers`,
`prop-fraction-field-dimension-recovers-pid-module-rank`,
`thm-becks-strict-monadicity-theorem`, `thm-burnside-basis-theorem`,
`thm-caratheodory-domain-is-the-completion-under-sigma-finiteness`,
`thm-galois-group-of-a-compositum-as-a-fibre-product`,
`thm-graph-of-continuous-function-on-a-compact-set-has-content-zero`,
`thm-groups-are-monadic-over-sets`, `thm-holomorphic-inverse-function-theorem`,
`thm-invariant-factor-decomposition-over-a-pid`,
`thm-rational-canonical-form-existence-and-uniqueness`,
`thm-regular-level-surfaces-have-local-regular-parametrizations`,
`thm-regular-outer-measures-are-continuous-from-below`,
`thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras`,
`thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs`.

Four of those carry a **counterexample** in the rejection text, not an
objection: the false unit-pivot clause, the false compositum Given, the vacuous
local clause in `def-biholomorphic-map`, and the missing regular-value hypothesis
in the Lagrange theorem. Discounting the lane for its volume would have cost
every one.

**What the Opus lane contributed that nothing else did:** two items,
`lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` and
`thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse`.
Both real, both repaired. Twelve more fatal ids it found were also found by
DeepSeek. The lane rejected five times less often and confirmed fatal at a higher
rate inside its own rejections; on the same sweeps it was **silent on 35 items
whose defects were real**. That is a lane with a higher bar, not a better one,
and the correct reading of a low rejection rate from a lane sharing a family with
the authors it screens is that it is uninformative, not reassuring.

**The Opus lane is still an unproven judge.** `tools/judge.mts` records an
injection test as the adoption bar for any new judge model, and no equivalent has
been run against Opus at this frozen prompt. Nothing in this run discharges that;
it remains owed.

### The 369 nulls, and the capacity cliff

`research/frontier-17-judge-attempts.jsonl` records **2,114 attempts**. DeepSeek:
502 responses plus 3 length retries, zero refusals. Opus: **502 responses and
1,107 `claude_exit` refusals** — 1,609 attempts for 502 usable verdicts. Every
refusal is `status=1`, `finish_reason=claude_exit`, median latency **1.8 s**.

They are not scattered. All 1,107 fall in a two-hour window:

| hour (UTC, 2026-08-23) | Opus responses | Opus `claude_exit` |
|---|---:|---:|
| 01 | 68 | 0 |
| 02 | 249 | 271 |
| **03** | **0** | **836** |
| 04 | 123 | 0 |
| 06–14 | 62 | 0 |

That is the Claude session limit, live, exactly as `CLAUDE.md` warns — and its
signature is a **fast exit, not an error anyone reads**. The lane self-recovered
at 04:00 and reached parity at 502 usable verdicts, so no item is short a lane
for want of capacity, and no null was ever adjudicated or counted as a verdict.
But the run spent 1,107 wasted calls to find that out, and this was the second
successive run in which the second judge lane's transport failed mid-sweep — the
first being Terra's Codex throttle on frontier-16. The failure mode moved
accounts; it did not go away.

### Current rejections on the published text

`level-coverage` reports **94 current rejections over 88 distinct items — 86
DeepSeek, 8 Opus** — and every one is adjudicated at the exact frozen context:
**90 `confirmed_nonfatal`, 4 `false_positive`, 0 `confirmed_fatal`.** Those 88
items are exactly the 88 that `apply-judge-stamps` records as lane-rejected and
correctly refuses to stamp. The reader-facing verification caption is therefore
honest as it stands: 355 items carry a paired pass, 88 carry an adjudicated
rejection that Alpha read and closed, and none carries a manufactured stamp.

---

## Repeated repairs and the twice-touched escalation

`touchlog audit` over the touch ledger and the judge ledger reports an
**escalation set of 53 items** (refutations + repairs > 1). Twelve items were
refuted twice or more:

| item | refuted | repaired |
|---|---:|---:|
| **`ex-s-three-galois-correspondence-for-x-cubed-minus-two`** | **3×** | **2×** |
| `def-finitely-patched-regular-surface-and-integrals` | 2× | 1× |
| `ex-closed-cylinder-as-a-finitely-patched-oriented-surface` | 2× | 1× |
| `ex-maximal-subgroups-as-frattini-hyperplanes` | 2× | 1× |
| `ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic` | 2× | 1× |
| `lem-maximal-divisor-pivot-for-pid-submodules` | 2× | 1× |
| `thm-becks-strict-monadicity-theorem` | 2× | 1× |
| `thm-finite-galois-extension-characterizations` | 2× | 1× |
| `thm-lagrange-multipliers-for-regular-level-set-constraints` | 2× | 1× |
| `thm-monoids-and-rings-are-monadic-over-sets` | 2× | 1× |
| `thm-real-gamma-endpoint-behaviour-and-unique-minimum` | 2× | 1× |
| `lem-stirling-formula-up-to-a-positive-constant` | 2× | 1× |

**`ex-s-three-galois-correspondence-for-x-cubed-minus-two` fired the escalation**
(`WORKFLOW.md` §"Twice-touched proofs", trigger 2: refuted again after step 6 →
the lead Alpha audits the proof personally, not a subagent and not another repair
cycle). Three consecutive DeepSeek rejections of the same two steps, across
round 0, round 1 and round 3 of step 8. The lead Alpha recomputed the whole
example from disk: the mathematics is right at every point — Eisenstein at 2,
`[L:Q(a)]=2` from the nonreal `ω`, `[L:Q]=6`, the relations `r³=s²=1`,
`srs=r⁻¹`, the fixed-field table row by row, and the four degrees against the
four subgroup indices. What was wrong twice over was the **licence**: step 1.1
reached `[L:Q]=6` through the tower law with the tower law in neither `deps` nor
the Facts block, and step 2.1's finite-extension hypothesis is supplied by
exactly that degree. The repair closed the whole licensing chain in one pass
rather than the clause the judge named, and the item was retiered CRITICAL. Both
lanes pass its current text.

**`lem-stirling-formula-up-to-a-positive-constant` is the one to watch, and it is
open as a deferral rather than a defect.** DeepSeek found something real on it on
two consecutive reads, both citation-level and both correctly closed as nonfatal.
The lead Alpha re-verified the mathematics independently — the `e_r ≤ K/r²`
closed form checked numerically to `<5e−16` residual, the sequence converging to
`log√(2π) = 0.9189385332…` at `n=10⁵`, and `exp((n+½)log n − n) = √n (n/e)ⁿ` —
and found no false claim. What is missing is that `thm-ftc-second-part` and
`thm-derivative-of-exponential` are used and not named, and
`thm-exponential-limits-and-range` is a dead `deps` edge. R1 forbade the edit at
step 8 and it was not made. **It is recorded as a known deferral with named
replacements, not an oversight.**

**One caveat on this section's evidence.** `touchlog report --min 2` names only
**one** item with two or more repairs, because it counts snapshot-to-snapshot
transitions and this run took seven snapshots, with the entire step-6 repair
window collapsed into the single `pre-author → post-6b` interval. The
twelve-item table above comes from `touchlog audit`, which adds refutations from
the judge ledger; the group Alphas' own twice-touched lists (group a names eight
items, group b names two) are prose. `frontier-16` derived its repeated-repair
set from snapshots; `frontier-17` cannot, at this snapshot granularity. That is a
receipt limitation, named in §"Thin receipts" as T-10.

---

## Course-pathway receipt

`tools/pathway-sync.mjs` placed **13 pages** into 10 parts across 7 categories,
`unplaceable: []`, `categoriesWithoutPathway: []`. Every part that gained a page
had its brief **rewritten by the lead Alpha and closed** — 10 of 10, each with a
baseline and final section hash in `research/frontier-17-pathway-closure.json`.
No prose obligation survives into the owner's list.

| category / part | pages placed | material incorporated into the brief |
|---|---|---|
| abstract-algebra / `modules` | `modules-over-a-pid-and-canonical-forms` (level 9) | aligned bases, invariant factors, elementary divisors, Smith normal form and their uniqueness; the specialisations giving finitely generated abelian groups and the rational canonical, Cayley–Hamilton, Jordan and similarity results |
| abstract-algebra / `sylow-and-extensions` | `frattini-subgroups-and-the-burnside-basis-theorem` (10), `the-galois-correspondence` (11) | the Frattini subgroup as the nongenerators, Burnside basis turning generation and the automorphism action into linear algebra over `F_p`; then Artin fixed-field degree, the subgroup–field correspondence with normality, and the action on roots with discriminants and resolvents |
| category-theory / `reflections-and-monads` | `monadicity-and-becks-theorem` (6) | canonical free-algebra coequalizer presentations, absoluteness of split coequalizers, the equivalence criterion with its strict and reflexive variants, and the applications from algebraic categories and the power-set functor to compact Hausdorff spaces via the ultrafilter monad |
| complex-analysis / `contours-and-cauchy` | `the-identity-theorem-and-the-open-mapping-theorem` (4) | isolated zeros and the identity theorem, the local power normal form, the open mapping theorem, maximum and minimum modulus, Hadamard three lines, and holomorphic inverses for injective maps |
| measure-theory / `sigma-algebras-and-borel-sets` | `outer-measure-and-the-caratheodory-extension-theorem` (2) | outer measures complete on the Carathéodory measurable sets, covering costs extending a premeasure, σ-finite uniqueness with the completion as domain, regularity, and the metric criterion for Borel measurability |
| number-theory / `quadratic-residues` | `sums-of-two-squares` (5) | the first supplement, Thue small representatives, uniqueness up to signs and order, Brahmagupta–Fibonacci multiplicativity, the even-exponent obstruction at primes `≡3 (mod 4)`, and the primitive and squarefree criteria |
| real-analysis / `classical-functions` | `trigonometric-and-oscillatory-examples-in-several-variables` (16) | polar factorisation of Cartesian expressions, the failed vector-valued mean value equality, mixed partials, differentiability against unbounded or discontinuous partials, boundedness against equicontinuity, the sine solid of revolution, and non-injective spherical coordinates |
| real-analysis / `several-variables` | `constant-rank-submersions-and-regular-level-sets` (17), `regular-surfaces-and-surface-integrals` (18) | rank semicontinuity and the constant-rank normal form giving submersions, immersions, regular level sets, tangent kernels and Lagrange multipliers; then the first fundamental form and Gram determinant giving area, scalar integrals and flux |
| real-analysis / `curves-and-the-fundamental-theorems` | `volumes-of-elementary-solids-and-solids-of-revolution` (17), `the-real-gamma-and-beta-functions` (18) | slicing between continuous graphs with the disc, washer, shell, cone and ball formulas in every dimension; the Gamma and Beta integrals with factorial interpolation, Bohr–Mollerup, `Γ(1/2)`, Stirling and the unit-ball volume |
| topology / `homotopy-and-covering-spaces` | `applications-of-the-fundamental-group` (11) | no retraction of the disk onto the circle with Brouwer and the fundamental theorem of algebra, Borsuk–Ulam on sphere-to-plane maps, commuting loops in a topological group, and punctured spaces separating the plane from other `Rⁿ` |

`pathcheck` is green on all 10 files. Nothing in this section is owed to the
owner as a writing task.

---

## Cross-edge, scope and impact closure

**6c read the seams, and the seam list itself was a finding.** The level has
exactly **4 cross-batch dependency edges**, all inside group a's own cohort;
batches 1, 3, 6, 7, 8 and 9 have none. The lead Alpha did not accept that as a
clean bill: it ran a statement-token similarity scan of all 440 in-run items
against all 6,514 corpus items to test whether the separation was real or was
duplication and prose standing in for citation. It is real — the categories
genuinely do not meet — and the one place two batches *should* have met
(batch 7's fundamental-group proof of the FTA against the published
complex-analysis proofs) is handled correctly by
`rem-fundamental-theorem-of-algebra-proof-routes`.

All four cross-batch edges were read in full. Three are clean. The fourth,
`fs-finite-volume-implies-finite-lateral-surface-area → thm-volume-of-a-solid-of-revolution-by-discs`,
carried two citation-fidelity defects and both were repaired: `[L1]` restated the
target **without either of its hypotheses**, and a single `[L3]` described what
three results are *for* rather than stating them, which house style bans in
terms. Ledger rows `f17-6c-1`, `f17-6c-2`.

**775 cross-level citations over 372 distinct published targets** were
mechanically classified and read by exception — every hypothesis-preamble
candidate (129), every reader-facing-line candidate (260), every prose candidate
(10). Declared forward references at 6c: 0 across the run's `forward_refs` keys
in that snapshot; `external_refs` mentions: 0; `proved_here: false`: 0;
18 items invoke a choice principle and every one declares it in its own
title or Statement. `audit-manifest` enumerates **1,948 relationships over 440
items in 9 batches, 0 defects**.

**The cross-level duplication screen is the one only 6c can run**, because every
published item is outside all three group Alphas' scope by construction. Two
findings, both repaired with a cross-naming Remark rather than a deletion:
`fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability`
reproduces a published counterexample at Statement-token Jaccard **1.00** (the
duplication is licensed — B pages are leaves, so the published item cannot be
cited — but the cross-reference was missing), and
`cor-finite-galois-extension-has-finitely-many-intermediate-fields` is a weaker
special case of a published corollary reached by a different route and carried
**no Remarks section at all**. Ledger rows `f17-6c-3`, `f17-6c-4`.

**Impact receipt.** `research/frontier-17-impact.json`: **440 changed interfaces,
371 in the required-review set, 371 concrete dispositions, 0 pending.** 368 were
written at 6c; the three added by the mechanical refresh are exactly the three
items step 9 built, and each was closed by opening every changed interface it
cites and reading the citing step against current text — not by the reasoning
that a later-authored item cannot be stale.

**Step 9 — the scope-denial sweep.** 94 declines were extracted mechanically
from all nine coverage files, not sampled. All 20 distinct named destinations
resolve against `plan-spec.json`; all 16 destinations outside this run are
**absent from `library/`**, so no decline defers a result to a page already
published and therefore never to be retro-filled. Every one of the run's 43
`deferred` rows names a destination — the prose-only decline that was 52 of 68
on an earlier run does not occur here.

**Three declines were overturned and built**, each with its proof authored to
step-5 standard and passed through the same gates, contracts and risk review:

- `ex-orthogonal-group-is-a-regular-level-set` — the decline claimed the
  orthogonal group "uses Lie-group and manifold structure". False about the
  mathematics: reading `Mₙ(R)` as `R^{n²}`, `f(A)=AᵀA` is polynomial, `Df(A)H =
  AᵀH + HᵀA`, and the witness `H = ½AS` gives `Df(A)H = S` for every symmetric
  `S`. It is the pair's only example with codomain dimension above one — the only
  place the vector-valued normal form does work — and its tangent space
  `T_A O(n) = {AK : Kᵀ = −K}` is the page's first tangent computation not read
  off a gradient.
- `ex-lagrange-multipliers-with-two-constraints` — the decline deferred the
  result to the companion page **of the pair that was declining it**.
- `cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant`.

Two records were corrected without a build (a destination whose subject cannot
carry the result; a self-referential deferral), and 91 declines were upheld with
evidence. Three declines carry `owner-decision` as their destination by their own
record — a third construction route for the two-square theorem, three torus
moment integrals, and the Hawaiian-earring cardinality direction — plus D53,
Legendre duplication on the positive reals, which stands under a design seam
recorded at step 3. **Those four are owner calls, not workflow defects**, and
step 9 explicitly declined to bend the seam unilaterally.

**One of the lead Alpha's own three builds carried a fatal overclaim**, a
dispatched refuter caught it, and it was repaired in the same stage rather than
recorded. That is what step 9's adversarial read is for.

---

## Machinery findings — abnormalities, including the self-resolved

**M-1 — `finite-smoke` was vacuous run-wide, and `gate-liveness` is what caught
it.** All 381 contracts carried `finite_smoke: []`; the gate exited 0 having
executed nothing. Under-selection, not registry inapplicability. Group c refused
to attach a token check to turn the gate green and escalated it. The
contract-audit round read the level's 13 pages against the registry's 10 checks
and selected **three**, each one where the check's model family *is* the claim's
object family, and recorded in writing the checks it considered and deliberately
did not force (`matrix-ring-laws-mod-n` over a non-domain `Z/n`; two poset checks
against non-poset witnesses; three graph checks in a level with no graph theory;
a linear-recurrence check against a non-constant-coefficient recursion). It also
found that `QUALITY-CONTROLS.md` listed **6** registry checks while
`tools/finite-smoke.mjs` defines **10** — the four added on `frontier-13` were
never documented, and **two of the three checks selected are in that unlisted
group**, so an author reading the document could not have found them. The doc was
corrected in the same act. Ledger row `f17-contract-audit-1-d2`.
**Self-resolved. Prevention is mechanical.**

**M-2 — the duplicate touch-snapshot label, and the tool now refuses it.** A
step-8 recovery Alpha re-took the `pre-step8` snapshot after 47 of round 0's 48
repairs had landed. A label is a key: `impact-audit --from/--to` and
`step8-guard --baseline` both resolve one label to one snapshot and the later row
wins, so the guard went from "48 changed, 48/48 licensed" to "1 changed, 1/1
licensed" — **a baseline taken after the edits it is meant to bound confirms
rather than checks.** No unlicensed edit existed; that was verified against the
original snapshot before the duplicate was written. `tools/touchlog.mjs snap` now
**hard-refuses** a duplicate label with a round-qualification remedy, rather than
auto-suffixing, because quietly renaming leaves every later reader guessing which
row their tool resolved. This is `frontier-16` recommendation #5, unimplemented
until a live instance forced it. The ledger still shows both `pre-step8` rows.
**Self-resolved in-run — and it has no defect-ledger row, which is
recommendation 10 below.**

**M-3 — group b's 100 `risk_review` notes are one sentence pattern.** All 100 —
57 HIGH and 43 CRITICAL, the whole of its batch 3/7/9 cohort — restate the
tier word and the risk-report's own tier-reason string, with eleven distinct
texts shared by two to six items each. `tools/risk-report.mjs` checks only that
`reviewer` and `notes` are nonempty strings. **This is exactly the failure shape
`boundary-audit --fail-on-template` exists to catch, in a field that has no such
detector.** Groups a and c wrote item-specific dispositions — 0 of their 171
notes match the pattern — so this is one group's practice, not the run's. 6c did
not overwrite them (replacing them with fresh generic text is the same defect
under a new name); instead it read **seven of the 100 in full**, across all three
batches, checking every numbered step and cited clause, and found all seven
sound. Ledger row `f17-6c-5`, `nonfatal-recorded`. **Open as a receipt gap; see
T-3.**

**M-4 — `citation-fidelity` cannot see the defect it is nearest to.** On edge 4
the batch-4 contract quoted the target Statement *in full*, so the detector saw
nothing — while the reader-facing `[L1]` line dropped **both** of the target's
hypotheses. The tool compares the **contract quote** to the cited item and never
compares that quote with the `[L#]` line a reader actually sees. That is a
mechanical gap with a mechanical fix. Ledger row `f17-6c-1`.

**M-5 — 6c overwrote a `risk_review` it was repairing, and said so.** Rewriting
the contract entry for `fs-finite-volume-implies-finite-lateral-surface-area`
assigned a whole new `risk_review` object over the existing one. That item is
CRITICAL and had a group-a 6b review; the prior text is **not recoverable** —
the batch contract is untracked, so git holds no earlier copy, and the
`alpha-6b-a` dispatch log does not quote it. **Group a's independent 6b reading
of that one item is gone from the record.** Mitigated, not undone: the
replacement carries a full fresh 6c reading and its `supersedes` field states
plainly that a prior review was overwritten and lost. Group a held 82
`risk_review`s before 6c and holds 81 now — the single missing one is this item.
Ledger row `f17-6c-6`.

**M-6 — a structural blind spot in the readiness contract, exposed by an
inherited defect.** `depcheck`'s `published-unchecked` rule fires only on
`status: published`. `rem-sine-period-arc-length-integrand-is-nonelementary` was
authored and audited during frontier-16, was `draft` throughout that run — whose
readiness gate correctly certified every scoped item still draft — and became
non-compliant **at the instant the owner flipped its status**, after the last
gate of the run that produced it. It then hard-blocked frontier-17's
`5-author..6b-adjudicate` join at 2026-08-23T00:52:05Z, because `depcheck` is
repo-wide. Four `depcheck` rules are status-gated this way
(`draft-on-published-page`, `published-unchecked`, `published-unaudited`,
`orphan`), and none of them can fire on a run's own scope while that run is
alive. **frontier-17's own scope is safe from the specific rule by luck** — it
has zero `proved_here: false` items — not by design. Repaired under owner
authorisation as `R1` in
`research/frontier-17-published-dependency-repairs.md`; see T-8 on its
certification.

**M-7 — `latestSnapshotLabel` prefers a label nothing writes.**
`tools/autopilot/stages/mathlib.mts` prefers `post-step9`; stage
`10-snapshot-v2` writes `post-step9-v2`. The preference can never match, so once
step 10's snapshot exists the impact window still ends at `post-step8` and would
silently exclude step-9 and step-10 edits. **Latent today** — the only gate using
the helper is `9-close`, which runs before that snapshot, and the 6c gate is
pinned to `post-6b` — and it stops being latent the moment any post-10 stage uses
it. The per-run task-file template hardcodes the same non-existent label, which
is why the command it prints cannot be run as written. Found at `impact-close-1`
and deliberately not changed there: it is a mechanism, `ARCHITECTURE.md` governs
it, and altering it was outside that dispatch.

**M-8 — `9-scope` has no `onGateFailure`, so one rejection needed a hand-started
Alpha.** `frontier-16`'s recommendation #1 — route `closure.unadjudicated` at
`8-adjudicate` to a narrow recovery dispatch — **was implemented** (commit
`704b2691`, and the route is live at `mathlib.mts:1603`). `9-scope` carries the
same `closureGate` and got no such route. Step 9 is licensed to author new
content, so it can create exactly the situation the route exists for, and it did:
the sweep swept the three new items, DeepSeek rejected
`ex-lagrange-multipliers-with-two-constraints`, and nothing could dispatch the
adjudicator. The recovery ran as a hand-started `step9-closure-recovery`
dispatch. **The rejection was `confirmed_fatal`.**

**M-9 — the visual lane returned three findings, made zero repairs itself, cost
a real lead-Alpha repair anyway, and was withdrawn mid-run.** Sigma's initial
pass over 26 captured pages returned three findings. Tau closed all three
`no-change-required` — every source repair was already on disk before its own
baseline was taken, which Tau re-verified from disk rather than taking on report
— so `changed_files: []` and the rejudge target set was empty. One of the three,
**S-002, was not free**: joining step 1.4 of
`thm-the-contravariant-power-set-functor-is-monadic` into one paragraph exposed
its citation of step 1.3 to `precheck`, which demanded the canonical
stratification `1.4→2.1, 2.1→3.1, 3.1→4.1`, and that renumbering desynchronised
the **step-keyed** contract in `research/frontier-17-batch-9.proof-contracts.json`
— a file Sigma never named and therefore outside Tau's authority. The lead Alpha
closed it at `step10-contract-repair`: the join, the renumber with every prose
and tag reference moved (including the list form `steps 1.1, 1.2, and 2.1`, which
precheck's own auto-repair does **not** rewrite and which would otherwise have
named the pullback step where the preservation step was meant), the contract
re-keyed with one truncated claim restored, and a re-merge. `proof-contract
--strict` on that item went 11 errors → 0. The same pass found and fixed a
`citation-quote-mismatch` on
`thm-galois-group-of-an-irreducible-quartic-by-its-resolvent`, where a prior Tau
run had changed the cited lemma's table header from `|H∩V₄|` to `\lvert…\rvert`
so its GFM table would parse. **`visual-repair check` was then red on two
controller-owned artifacts the `workflowOwned` exemption did not name**, and the
lead Alpha refused to widen the guard to clear it — turning a red gate green by
editing the gate is the failure mode the run's own rules name. The lane was
withdrawn by the owner on 2026-08-23 (`ARCHITECTURE.md` §3.11j) and that blocker
went with it. The render receipts survive as evidence: 26/26 pages captured
initial and final, app HEAD `2f098c5c`, and the final capture's
`content_sha256 = a997f650…` is **the same hash the readiness receipt records**,
so the final render is current with the published text.

**M-10 — the group-c 6b lane timed out and the repair round inherited rather
than re-derived.** The 2026-08-21 `6b-c` dispatch ran on `gpt-5.6-sol`, timed out
at 4 h (`exit_code: null`), and was killed after adjudicating 53 reader findings
and writing 62 ledger rows but before any of its three refuters returned. Its own
checkpoint named the exact remainder. The re-dispatch on `claude-opus-5[1m]`
**verified that work from disk rather than re-deriving it** — all 53 findings
closed on current text, 62 rows validating, the machine findings file matching
the ledger's fatal count — then did the remainder: 21 new adjudicated findings (7
fatal), 87 risk reviews, and the gate receipts. The context-continuity rule
worked as designed.

**M-11 — a stale near-name-collision contracts file.**
`research/frontier-17.proof-contracts.json` (dot) sits beside the canonical
`research/frontier-17-proof-contracts.json` (hyphen). It is six hours older and
runs **10 errors red** under `proof-contract --strict`, because it predates the
S-002 repair. Nothing on any gate's path reads it and `step10-contract-repair`
deliberately left it alone. This stage ran the gate against the wrong one before
noticing, which is precisely the hazard: two files one character apart, one
green and one red, and the difference is invisible in a task file.

---

## Comparison with frontier-15 and frontier-16

`defect-ledger stats --leakage --recurrence`, all three runs, **no recurrence
flag in any of them**:

| | frontier-15 | frontier-16 | **frontier-17** |
|---|---:|---:|---:|
| ledger rows | 91 | 273 | **333** |
| fatal | 28 | 173 | **174** |
| fatal caught at step 6 (6a+6b+6c) | 23 | 78 | **120** |
| fatal caught at step 8 (8-adj + 8-rejudge) | 5 | 95 | **53** |
| **fatal leaking past step 6, as a share** | 18% | **55%** | **30%** |
| second-lane unique fatal ids | — | 28 (Terra, GPT) | **2 (Opus, Anthropic)** |
| DeepSeek fatal | 5 | 67 | **52** |
| finite-smoke coverage | 4/329 | 1/271 | **3/384** |
| open rows at close | 0 | 0 | **0** |

**Step 6 got substantially better and step 8 got correspondingly quieter.**
`frontier-16` sent 55% of its fatal defects past the readers into the frozen-text
stage, where each costs an adjudication, a rejudge and a resampled refuter;
`frontier-17` sent 30%. In absolute terms the readers and refuters caught 120
fatal defects at step 6 against `frontier-16`'s 78, on a level 37% larger. The
leakage table names where the remainder went: **`6b-adjudicate → 8-adjudicate`
56 and `6b-adjudicate → 8-rejudge` 11 — 67 defects a step-6 adjudication should
have caught and a judge caught instead.** That is the number to drive down next,
and it is now the largest single control gap in the run.

**The second judge lane got much worse as a screen, exactly as predicted.**
Terra, a GPT lane screening GPT authors, still found 28 fatal ids nobody else
found on `frontier-16`. Opus, an Anthropic lane sharing its model id with the
adjudicating Alpha, found **2**. DeepSeek's yield barely moved (67 → 52 on a
larger level). The 2026-08-23 lineup move was made for capacity, not quality, and
this is what it cost, measured: **the paired lineup is now one screen and one
confirmation, not two screens.**

**The fatal profile shifted from inference to citation.** `frontier-16`'s largest
fatal class was `citation-inflated` (49); `frontier-17`'s are `citation-missing`
(40) and `citation-truncated` (38), with `citation-inflated` down to 7. Inflation
— restating a dependency as stronger than it is — is the dangerous shape, because
the proof then looks licensed. Omission and truncation are the visible shapes.
`invalid-inference` fell 17 → 14 on a larger level; `ill-typed-construction` fell
14 → 3.

### frontier-16's recommendations, tested against this run

| frontier-16 recommendation | frontier-17 evidence |
|---|---|
| #1 route `closure.unadjudicated` at `8-adjudicate` | **Closed** (commit `704b2691`; live at `mathlib.mts:1603`) — and **incomplete**: `9-scope` carries the same gate with no route, and needed a hand-started recovery for a `confirmed_fatal` (M-8) |
| #2 classify the judge-lane transport outage and back off | **Not applicable as written, and recurred in a new form.** The Codex signature is gone with the lane; the Opus lane spent **1,107 fast `claude_exit` refusals** to deliver 502 verdicts, with no back-off |
| #3 make refuter process-enforcement a gated coverage property | **Not implemented, and worse than frontier-16.** Only group c's refuters ran through `dispatch.mjs` (4 result records, plus 3 risk-review and 1 step-9 refuters). Groups a and b — six of nine batches — used in-session subagents that are prompt-enforced only, with no dispatch record. See T-4 |
| #4 add a finite-smoke check for finite index/sign boundaries | **Not implemented.** Coverage improved 1/271 → 3/384 by better selection from the existing registry, not by extending it. The contract audit named four concrete extension candidates (T-1) |
| #5 require unique round-qualified touch-snapshot labels | **Closed in-run, forced by a live instance** (M-2) |
| #6 no further change to the v2 chain / fatal-only rule | **Upheld.** The fatal-only rule held under three step-8 repair rounds and one escalation; the serial v2 chain produced no report-order race. The visual half of that chain was withdrawn by the owner for cost, not correctness (M-9) |

`frontier-15`'s two standing caveats also carry forward unchanged: finite smoke
remains thin, and per-group fatal findings must reconcile against the ledger.
**The latter reconciles here, and I checked the join rather than the headline.**
The three group findings files hold 184 adjudicated rows — **119
`confirmed_fatal`**, 65 `confirmed_nonfatal`. The ledger holds **120 fatal rows
at 6a/6b/6c**: 96 attributed to a reader, 21 to a refuter, 3 to a group Alpha.
The two numbers are the two sides of the ledger's one-row-per-DEFECT contract:
119 findings rows dedupe to 117 defect rows (two lanes or two readers on one
defect is one row — and the findings do collide, 119 fatal rows over 101 distinct
ids), and the remaining 3 are defects an Alpha found while adjudicating rather
than findings routed to it. 6c contributed six rows and **none of them is
fatal**. `frontier-15`'s failure — one group accepting 58 fatal reader findings,
writing 13 ledger rows, and no gate able to see it — does not recur.

---

## Weak, late and thin receipts — what each does not prove

Every gate in this run is green. These are the places where green is worth less
than it looks, stated so the owner's audit can aim at them.

**T-1 — `finite-smoke` covers 3 of 384 proof-bearing items.** Better than
`frontier-16`'s 1 of 271 and better selected — each of the three tests a claim
the item actually makes at a numbered step — but it is bounded falsification over
0.8% of the level, and it is not evidence about the other 381. The reason is
honest: six of the ten registry checks are graph-, poset- and
recurrence-shaped and this level is Galois theory, PID modules, measure theory,
several-variable analysis, complex analysis and category theory. The contract
audit named four concrete extension candidates rather than manufacturing
coverage: outer measures on 2- and 3-point sets with Carathéodory measurability
as a finite condition over the power set (**the strongest gap in the level**),
the maximising dimension of the unit `n`-ball as a bounded numerical search, the
partition enumeration behind both canonical forms of an order-360 abelian group,
and ultrafilters on a finite discrete space.

**T-2 — the spine receipt is 57 carried readings and 1 fresh one.** 58
proof-bearing items among the 100 largest dependency cones; 57 of the
attestations are `frontier-16`'s, carried forward at byte-identical
`content_sha256`, and one (`lem-inverse-unique`) was read in full at this run's
6c. The carry is what the receipt's design licenses and the hashes were compared
mechanically rather than asserted — but **no spine proof was read afresh by this
run's models**, and 57 of the 58 readings were made by a GPT-family Alpha on a
prior run. What it proves is that no high-fan-out proof this level rests on has
*changed*; it does not re-establish that any of them is correct.

**T-3 — 93 of group b's 100 high/critical `risk_review` notes say nothing about
their item's mathematics.** 6c read 7 of the 100 in full and found all 7 sound;
the other 93 rest on group b's refuter coverage and a note that restates the
tier score. `risk-report --require-reviewed` is green because the field is
nonempty. This is M-3 stated as what it leaves unproven: **for 93 CRITICAL and
HIGH items in batches 3, 7 and 9 there is no per-item adjudicated disposition
anyone can read.** It is the largest single documentation gap in the run.

**T-4 — six of nine batches had prompt-enforced refuters, not process-enforced
ones.** `research/frontier-17-dispatch/` holds refuter result records only for
group c's four batch refuters, three risk-review refuters and one step-9 refuter
— all `claude-opus-5[1m]`, all through `dispatch.mjs` with its default-deny
allow list. Groups a and b's refuters (REF2/REF4/REF5, and
`refute_batch3/7/9`) were in-session subagents told the no-write rule in their
prompt. Their reports are detailed and their findings were adjudicated from disk,
so this is not a claim that they wrote anything — it is that **read-only was
asserted rather than enforced for two thirds of the level**, and that is the same
class `frontier-16` flagged and did not close.

**T-5 — the impact receipt's window and its notes.** The window is `pre-author →
post-step8`, not the `pre-author → post-6b` the Alpha brief names, because the
engine's `9-close` gate computes the latest snapshot label and that resolves to
`post-step8` here; `source.to` was itself wrong-in-fact (it read `post-6b`) until
`impact-close-1` corrected it, and the tool validates neither field. The window
is the wider and safer of the two. Separately, all 371 dispositions share a
closing sentence of the form "every consumed interface is on the consumer's own
page or in batch N, read by reader-N and adjudicated at 6b" — the per-consumer
content is real (each names its interfaces), but the *justification* is one
sentence repeated 371 times, and that is a milder instance of T-3's shape.

**T-6 — two templated boundary rows survive below the detector's threshold.**
`boundary-audit --fail-on-template` fires at three members. A three-member
cluster on the `iff-reverse` axis — the sentence "No reverse implication is
asserted." — was found only when the batch contracts were merged; group c
rewrote **its** row into a determination and the gate went green **because the
cluster dropped to two**, not because the remaining rows were examined. Group c
said so explicitly and asked whoever owns batch 7 to look; nobody did. I read
both items at this stage: `thm-no-retraction-of-the-closed-disk-onto-the-circle`
and `cor-no-continuous-injection-from-s2-to-r2` are pure negative existence
statements with no iff at all, so `not_applicable` is **factually correct for
each** and nothing is hidden. What is left is a receipt shape, not a defect — and
the gate that let it through is threshold-based, so the same shape at two members
will pass again.

**T-7 — `coverage-checklist` warns on batch 2 and the warning is real.** 7 of 25
harvested results scaffolded on
`trigonometric-and-oscillatory-examples-in-several-variables`. Group a
adjudicated the declines at step 3, forced two additions (the sine surface-area
computation, and re-routing the sine volume example onto the disc theorem it was
rebuilding from lower facts) and upheld the rest at 6b.0. The page is still one
item.

**T-8 — the published-dependency repair is uncertified.** `R1` on
`rem-sine-period-arc-length-integrand-is-nonelementary` was authored by the
monitoring session under direct owner authorisation. The protocol says no author
certifies its own repair. The repair carries no mathematical content — it adds a
`sources_checked` attestation to a `proved_here: false` remark and changes no
claim, and its evidence is a verbatim quotation, an exact locator and a
reproducible extraction route — so the certifiable object is the source reading.
**An independent re-read costs one `fitz` extraction and has not been done.** The
repair record flags it for owner election, and the item is outside frontier-17's
scope: absent from all nine manifests, cited by nothing in the run.

**T-9 — this is the last run that will have a browser-rendered receipt at all.**
frontier-17 has one, and it is current: 26/26 pages captured at initial and
final, app HEAD `2f098c5c`, and a final content hash identical to the readiness
receipt's. No future run will produce one. `ARCHITECTURE.md` §3.11j states the cost the
owner accepted: **a defect visible only in produced HTML, which `rendercheck`
parses cleanly past, will now reach the owner audit unflagged.** For this level
the receipt exists; for the next one it will not.

**T-10 — the repeated-repair history is coarser than `frontier-16`'s.** Seven
snapshots, with the whole step-6 repair window inside a single `pre-author →
post-6b` interval, so `touchlog report --min 2` sees exactly one item. The
twelve-item table in §"Repeated repairs" comes from `touchlog audit`, which adds
judge refutations; the group Alphas' own twice-touched sets are prose only.
`frontier-16` derived 17 repeated-repair items and 3 three-repair items from
snapshots; this run cannot.

**T-11 — the URL receipt on disk predates the run's repairs, and I re-ran it.**
`research/frontier-17-url-liveness.json` was generated 2026-08-23T01:48Z. I ran
`url-sweep --coverage … --recover --fail-on-dead` at this stage: **40/40 live, 0
failed, 0 recoverable, 0 suspect.** The 6 URLs in the coverage files that the
receipt does not list are the superseded ones, of which 2 are recorded as
retired in `research/frontier-17-retired-sources.json` — the Ciesielski–Miller
paper (3 headings, 0 included) and **Mac Lane's *Categories for the Working
Mathematician* (22 headings, 5 included)**, both unreachable and unarchived. Mac
Lane was batch 9's textbook backing; Riehl's *Category Theory in Context* remains
as that pair's textbook-tier primary source, so the two-independent-treatments
rule holds, but **five included results lost the source that was harvested for
them**. The retirement record asserts that every included result is
independently backed by a live source on the same page — Riehl plus the Mehrle
course notes — and that assertion is the group Alpha's reading, not a gate
result.

**T-12 — this report's own evidence base.** Everything above is a query over
files on disk, re-run at this stage. It is **not** a re-audit of the level's
mathematics; that was done at 6a/6b/6c, 8 and 9, and the evidence is the ledgers
and the per-group findings files. Where a claim rests on another agent's reading
rather than a gate, the section says so.

---

## What I recommend the owner read personally

1. **`ex-s-three-galois-correspondence-for-x-cubed-minus-two`** — the run's only
   three-refutation item, and the one place the twice-touched escalation fired.
   The mathematics was re-derived from scratch by the lead Alpha and holds; what
   failed twice was the licensing. Now CRITICAL-tiered, both lanes passing.
2. **`lem-maximal-divisor-pivot-for-pid-submodules`** and
   **`thm-galois-group-of-a-compositum-as-a-fibre-product`** — two false clauses,
   each refuted by DeepSeek with an explicit counterexample, each repaired by
   replacing the claim rather than the wording. These are the strongest
   cross-family-only signals in the run.
3. **`def-biholomorphic-map`** and
   **`thm-lagrange-multipliers-for-regular-level-set-constraints`** — the two
   missing-hypothesis defects whose absence made a definition vacuous and a
   theorem false at a specific point (`G(x)=x²(x−1)` at `a=1`). Both DeepSeek-only.
4. **The 21 fatal defects that sat in a Statement and the 11 in a title.** These
   are the claims themselves, not their arguments, and fifteen were narrowed
   rather than proved. They are also what a reader can check fastest.
5. **`fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability`**
   — the single Opus rejection this Alpha called a false positive, and therefore
   the one adjudication in the run where the judge and the adjudicator were the
   same model. The reasoning is checkable against SCHEMA §7 and two page files.
6. **The 93 unread group-b `risk_review` items** in batches 3, 7 and 9 (T-3), or
   a sample of them. 6c read seven and found them sound; there is no per-item
   record for the rest.
7. **`lem-stirling-formula-up-to-a-positive-constant`** — nothing is wrong with
   it, and DeepSeek found something real on it twice. Two Facts and one dead
   `deps` edge are named and deferred by R1's design.
8. **`trigonometric-and-oscillatory-examples-in-several-variables`** — the
   one-item A page, if the owner wants a view on whether it should stay that way.
9. **The three step-9 builds** — `ex-orthogonal-group-is-a-regular-level-set`,
   `ex-lagrange-multipliers-with-two-constraints`,
   `cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant`.
   Their author, refuter, adjudicator and second judge lane are one model, and
   their sources were read at decline-adjudication time rather than re-fetched at
   authoring time.

---

## Recommended workflow changes, ranked by impact/risk ratio

1. **Give every stage carrying `closureGate` the `closure.unadjudicated`
   recovery route that `8-adjudicate` already has — high impact, very low risk.**
   The route exists and works (`mathlib.mts:1603`); `9-scope` and `9-receipt`
   carry the same gate without it. Step 9 is licensed to *author*, so it is the
   stage most able to create an unadjudicated rejection, and it did — a
   `confirmed_fatal` that needed a hand-started dispatch to close (M-8). This is
   moving an existing conditional up one scope, not new machinery, and it changes
   no adjudication rule or mathematical authority.

2. **Add a template detector for `risk_review.notes`, modelled exactly on
   `boundary-audit --fail-on-template` — high impact, low risk.** 100 notes,
   11 clusters of two to six identical texts, `risk-report` green because the
   field is a nonempty string (M-3, T-3). The detector already exists in another
   file for the same failure shape; port the threshold logic and point it at this
   field. Keep the threshold at three so it does not fire on two items that
   genuinely share a disposition — and note T-6, which is what that threshold
   costs.

3. **Make refuter process-enforcement a gated coverage property — high impact,
   low risk.** Record, per required high/critical read, whether it used
   `dispatch.mjs` with the default-deny allow list, a prompt-only fallback, or no
   refuter, and gate on it. `frontier-16` recommended this; `frontier-17` is
   worse, at six of nine batches prompt-only (T-4). A fallback may remain visible
   evidence — the engine should route a failed canonical transport rather than
   letting prose be the only place the independence loss appears.

4. **Have `citation-fidelity` compare the contract quote with the reader-facing
   `[L#]` line, not only with the cited item — medium-high impact, low risk.**
   The detector was three feet from a real fatal defect and structurally could
   not see it: the contract quoted the target in full while `[L1]` dropped both
   its hypotheses (M-4). The comparison is mechanical and both strings are
   already in hand.

5. **Fix `latestSnapshotLabel`'s dead `post-step9` preference — medium impact,
   very low risk.** Nothing writes that label; `10-snapshot-v2` writes
   `post-step9-v2` (M-7). Latent today and silently wrong the moment a post-10
   stage uses the helper. Fix the per-run task-file template in the same commit,
   since it prints a command that cannot be run.

6. **Back off the Opus judge lane on the capacity signature — medium impact,
   medium risk.** 1,107 fast `claude_exit` refusals in two hours to deliver 502
   verdicts, self-recovering only when the session limit reset. Match the
   specific signature — `status=1`, `finish_reason=claude_exit`, sub-3-second
   latency — refund the round and back the lane off rather than re-spending the
   loop; `CLAUDE.md` already says "lower the caps rather than re-spend the loop",
   and nothing implements it. The medium risk is real and should not be waved
   away: broadening this past the exact signature would silence a genuinely dead
   lane, and a null must never become a verdict.

7. **Run the injection test against the Opus judge lane at the frozen prompt —
   medium impact, low risk.** `tools/judge.mts` sets this as the adoption bar for
   any new judge model and records it as owed. `frontier-17` is the first run to
   use the lane and it used it without the test. A low rejection rate and a
   fluent reason are not evidence either way — and this run's numbers say the
   lane rejects five times less often than DeepSeek while missing 35 real fatal
   defects, which is exactly the pattern an unproven judge would also produce.

8. **Have `merge-proof-contracts` refuse to leave a near-name sibling, or delete
   the orphan — low-medium impact, very low risk.** `frontier-17.proof-contracts.json`
   versus `frontier-17-proof-contracts.json`, one character apart, one 10 errors
   red and one green (M-11). A one-line existence check at merge time, or a
   `--prune` that names what it removes.

9. **Extend the finite-smoke registry with the four candidates the contract audit
   named — low-medium impact, low risk.** Outer measures on 2- and 3-point sets
   first; that is the level's strongest gap and Carathéodory measurability over a
   finite power set is exactly enumerable. **Do not impose a check-count quota** —
   a count invites the manufactured coverage this run's contract audit
   deliberately refused to write.

10. **Add a defect-ledger row for the touch-snapshot duplicate-label defect —
    low impact, no risk, and it is not mine to write.** M-2 is a real
    `silent-runtime` defect that produced a tool change and has **no row**. Step
    10 authors none by rule, which is why it is a recommendation. The general
    lesson is worth more than the row: a tool change made mid-run is a defect
    disposition, and the ledger is the only place that can be queried later.

**Where no change is recommended, and the evidence supports saying so plainly:**

- **The fatal-only rule at step 8 (R1).** It held under three repair rounds, one
  three-refutation escalation and 90 nonfatal closures, and the contract audit
  found that six items routed to it *because* step 8 repaired them all survived
  an independent read. No loop, no unbounded polish. **No change.**
- **The group-Alpha split and the `2-assign` grouping rule.** The three groups
  produced 184 adjudicated findings with no cross-boundary confusion, and 6c's
  seam audit found the batch partition genuinely reflects the mathematics — four
  cross-batch edges, all inside one group. **No change.**
- **Step 3.** Group a alone recorded **eight** fatal-if-authored scaffold
  defects and Alpha repaired every one in the scaffold — two load-bearing edges
  onto AI-generated counterexamples, a missing determinant-scaling inference in
  the `n`-ball recursion, an endpoint gap at `s=0`/`p=0`/`q=0`, a missing
  induction in the Gamma-smoothness route, and three prerequisite/dependency
  closures. Thirty-four step-3 findings were routed and all thirty-four closed at
  recheck. This is the cheapest place any defect in this run was fixed. **No
  change.**
- **The defect ledger and its `check` gate.** 333 rows, 0 errors, per-group
  findings files reconciling, leakage and recurrence as queries rather than
  archaeology. **No change.**
- **The withdrawal of the visual lane.** This run is the evidence base for it:
  three findings, zero Tau repairs, one guard blocker on controller-owned
  artifacts, against two full-corpus Chromium captures and two whole-level
  adjudications. The cost is stated in T-9 and it is a real cost. **No change,
  and no re-opening on absence of evidence** — reopen it only on an actual
  rendering defect that `rendercheck` parses past.
- **Model concurrency caps, the 30-second threshold, the twice-touched
  escalation, and the page-summary contract.** Nothing in this run's evidence
  argues for moving any of them.

---

## Is everything publishable pending owner approval?

**Yes.** This copies the structured readiness verdict at
`research/frontier-17-publication-readiness.json`, re-verified at this stage:

```
verdict:                  publishable-pending-owner-approval
workflow_owned_blockers:  []
content_sha256:           a997f650f2ae813feede184667c9725b82b6984bef60be64520b904c3ef4abb9
owner_actions_remaining:  personal mathematical audit
                          deliberate status:published changes
                          push/deployment
```

`publication-ready --verify` exits 0 with the saved verdict's content and input
hashes current against disk.

**What "yes" means here, precisely.** Every workflow-owned blocker is closed:

- **174 fatal defects, 159 fixed and 15 narrowed, 0 open.** No `open` row in
  `research/defect-ledger.jsonl` for this run; `defect-ledger check` clean at
  333 rows, 0 errors.
- **Judge closure `closed: true`** — 443/443 current pairs, 0 needing rejudge,
  0 unadjudicated rejections, 0 open fatal, **both allowance flags `false`**.
  Every one of the 164 rejection rows across both lanes has an exact-context
  adjudication. I regenerated this receipt to a scratch path at this stage rather
  than trusting the stored one: it comes back byte-identical apart from its
  timestamp.
- **`level-coverage --verify-current-context` exits 0** with 0 errors over 443
  items, 384 proof-bearing and 2,034 relationships. Its 94 warnings are the 94
  current rejections Alpha adjudicated nonfatal or false-positive; none is fatal.
- **355 items stamped, 88 lane-rejected, 0 problems** — no adjudicated rejection
  manufactured a pass.
- **10 of 10 pathway briefs rewritten and closed**; no prose obligation is owed.
- **371 of 371 impact consumers dispositioned**, 0 pending.
- **Obligations: 0 rows, 0 open.** Nothing externally blocked.
- **Every scoped item and page is `status: draft`**, exactly as the readiness
  gate requires before the owner decides.

**What "yes" does not mean.** It does not mean the level has been proved correct.
It means every control this workflow owns has run, every finding it produced has
a recorded disposition, and nothing is waiting on the workflow. Section
"Weak, late and thin receipts" is the list of places where that sentence is
weakest — above all the 93 unread `risk_review` items (T-3), the 3-of-384
finite-smoke coverage (T-1), the carried spine readings (T-2), and the fact that
**one of the two judge lanes was a same-family confirmation rather than a second
screen** (§"The two judge lanes").

The remaining actions are the owner's and only the owner's: the personal
mathematical audit, the deliberate `status: published` flips, and push and
deployment. **Owner approval is not a workflow defect.** Nothing in this report
changed a status field, published, pushed, or wrote a defect-ledger row, and
**Step 10 published nothing.**

---

### Artifacts this report reads

`research/defect-ledger.jsonl` (333 rows for this run) and its generated view
`research/DEFECT-LEDGER.md` · `research/frontier-17-judge.jsonl` ·
`-judge-attempts.jsonl` · `-judge-adjudications.jsonl` · `-judge-closure.json` ·
`-judge-stamps.json` · `-publication-readiness.json` · `-pathway.json` ·
`-pathway-closure.json` · `-impact.json` · `-spine-audit.json` ·
`-audit-coverage.json` · `-audit-manifest.json` · `-touches.json` ·
`-scope-ledger.json` · `-scope-amendment.md` · `-published-dependency-repairs.md` ·
`-retired-sources.json` · `-url-liveness.json` · `-render-initial.json` ·
`-render-final.json` · `-sigma-initial.json` · `-tau.json` ·
`-proof-contracts.json` and the nine `-batch-N.{pages,coverage,notes,proof-contracts}` files ·
the nine `-reader-N.md` reports · the three `-alpha-{a,b,c}-{step3,recheck,6b}` sets
and their `-6b-findings.json` machine halves · `-alpha-6c.md` · `-alpha-step4.md` ·
`-alpha-step8.md` · `-alpha-step9.md` · `-alpha-step9-closure-recovery.md` ·
`-alpha-receipts.md` · `-alpha-contract-audit.md` · `-alpha-impact-close-1.md` ·
`-alpha-step10-contract-repair.md` · `research/frontier-17-dispatch/` (266 files) ·
`research/frontier-16-step10-report.md` and `research/frontier-15-step10-report.md`
for the comparison · `tools/autopilot/stages/mathlib.mts`, `tools/touchlog.mjs`,
`tools/depcheck.mjs`, `tools/publication-ready.mjs` and `ARCHITECTURE.md` §3.11j
for the machinery findings.
