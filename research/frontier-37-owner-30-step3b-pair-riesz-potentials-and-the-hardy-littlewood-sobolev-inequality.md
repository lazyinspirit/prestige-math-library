# Step 3b dispatch report — pair `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality` (batch 12)

- Run `frontier-37-owner-30`, role `alpha-high`; this file is the authoring
  checkpoint **and** the final dispatch report for the pair.
- Owned A page `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality`
  (5 items) and owned B page
  `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples`
  (3 items) in `research/frontier-37-owner-30-batch-12.pages.json`. Batch 12
  contains only this pair, so no sibling rows had to be preserved.
- Scope: `research/frontier-37-owner-30-step3a-review-riesz-potentials-and-the-hardy-littlewood-sobolev-inequality.json`
  (`sufficient`, current). No owner-authoring-direction file exists; no
  pre-splice findings row names this pair. No in-run (unfinished) supplier
  exists for this pair, so no supplier escalation is open.
- Status at handoff: **all 8 items fully authored and checked (`status: draft`),
  both pages created (`status: draft`), proof contracts strict-clean, all 8 item
  decisions recorded (`accept`/`repaired`, confidence 1).** Independent
  mathematical audit remains with Steps 5–8.

## Completed items (authored in dispatch order)

| # | Item | Level | Kind | Decision |
|---|---|---|---|---|
| 1 | `def-riesz-potential-of-order-alpha` | 0 | definition | accept |
| 2 | `lem-riesz-potential-near-far-splitting` | 1 | lemma | repaired |
| 3 | `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint` | 1 | counterexample | accept |
| 4 | `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint` | 1 | counterexample | repaired |
| 5 | `ex-riesz-potential-scaling-determines-the-target-exponent` | 1 | example | repaired |
| 6 | `lem-hedberg-pointwise-inequality` | 2 | lemma | repaired |
| 7 | `thm-hardy-littlewood-sobolev-fractional-integration` | 3 | theorem | repaired |
| 8 | `rem-fractional-integration-endpoints` | 4 | remark (recorded, not proved) | accept |

Pages: `library/fourier-analysis/riesz-potentials-and-the-hardy-littlewood-sobolev-inequality.md`
(items 1–5) and `...-examples.md` (the scaling example and the two
counterexamples). Every promised FR-13 claim is present; the unit
normalization `c_{n,α}=1` matches Williams Prop 11.4 and Harboure §1; `K_α(0)=0`
is immaterial; the strict range is `1<p<n/α`; the endpoint remark is never a
proof supplier and no item depends on it.

## Author-level repairs made while auditing/authoring

Repairs made in this session, after re-deriving the arguments:

1. `lem-riesz-potential-near-far-splitting`, step 2.1: the dyadic shells were
   redefined as the left-closed half-open sets
   `S_j={2^{-j-1}R ≤ |x-y| < 2^{-j}R}`, which tile `B(x,R)\{x}` exactly (the
   previous open-open shells missed the dyadic spheres and the union claim was
   literally false); the kernel estimate now uses `≤` at the lower endpoint.
   The near constant was also wrong by a factor `2^n`: the displayed arithmetic
   gives `2^{2n-α}` (not `2^{n-α}`), and steps 2.1 and 3.1 now carry
   `C_{n,α}=2^{2n-α}/(1-2^{-α})`.
2. `thm-hardy-littlewood-sobolev-fractional-integration`, step 3.1: removed the
   false implication "`E^c ⊆ S^c` hence `Ĩ_α f` vanishes where `Mf=∞`" (the
   implication runs the wrong way). The correct statement is that at `Mf=+∞`
   with `‖f‖_p>0` the right-hand side is `+∞`, so the pointwise bound is
   trivially true; the zero class cannot have `Mf=+∞` pointwise.
3. `thm-...`, step 5.1: the step invoked monotone convergence, which is not in
   the theorem's declared dependencies. It was replaced by the a.e.-argument
   already used in the splitting lemma: ball averages of `|f|,|g|` agree by the
   a.e.-equality clause, so the conull set `S={Mf<∞}` is common, and the
   splitting lemma gives that `I_α f=I_α g` at every point of `S`. No
   dependency change was needed.

Repairs made earlier in this same dispatch (kept, re-verified here):

4. `lem-hedberg-pointwise-inequality`: the balancing display was rewritten as
   `R^{α}M=M^{1-θ}F^{θ}=R^{α-n/p}F` with `R=(F/M)^{p/n}`, and the far constant
   was renamed `D_{n,α,p}` to avoid clashing with the final constant.
5. `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint`: the
   statement now names the punctured ball `B(0,δ)\{0}` (positive measure) as the
   superlevel set, and step 1.3 proves absolute convergence of the potential at
   every `x≠0`, so the annular lower bound is legitimate and the conclusion is
   essential unboundedness, not failure at a point.
6. `ex-riesz-potential-scaling-determines-the-target-exponent`: the
   `## Verification` heading and step numbering were restored after an
   adopt-repair pass (a missing heading silently zeroes the parser). Separately,
   the theorem gained the declared dependency `cor-integral-over-a-null-set-vanishes`
   (used for null-set integrals and null unions in steps 2.1 and 6.1), with the
   manifest resynced.
7. All six proof-bearing items now record `verification.precheck: pass`; the
   endpoint remark records `n/a` (`proved_here: false`).

## Checks actually run at handoff (all on current bytes)

| Check | Result |
|---|---|
| `tools/precheck.mts` on the 6 proof items | 6 checked, 0 failing (PASS each) |
| `rendercheck.mjs` on 8 items + 2 pages | OK: no wikilink-in-math, no delimiter or multiline-display defect, KaTeX parses, frontmatter parses |
| `manifest-deps.mjs` batch 12 | 8 items, 0 errors (manifest `deps` equals frontmatter) |
| `content-policy.mjs` batch 12 (full) | 8 scoped items, 0 errors, 0 warnings |
| `proof-contract.mjs --strict` batch 12 | 0 errors, 0 warnings, 8/8 checked (citations/derivations regenerated after the repairs; `boundaries` hand-authored for all 8 standard cases on all 8 items) |
| `fwdcheck.mjs` batch 12 | 0 open forward references, 432 closed, 44 load-bearing; no row names this pair |
| `depcheck.mjs` | no error row names any item or page of this pair |
| `extcheck.mjs` | exit 0; only pre-existing published warnings, none in this pair; the recorded remark is a cited remark with no proof |
| `coverage-checklist.mjs ... --require-destination` | 1 page, 29 harvested results, 0 errors, 1 documented low-yield advisory |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | no level error for our 8 items |
| `validate-plan.mjs research/plan-spec.json --repo .` | exit 0; documented pre-splice note (item lists still empty on 367 planned pages, including both of ours) |
| `step3-decisions.mjs check --phase final` | all 8 owned items CLOSED; own pair scope CLOSED; whole-run still open only for other pairs |

Whole-run caveats (not this batch's defects, not repaired here): `fwdcheck`
exits 1 on 142 `[link-unplanned]` wikilinks in other groups' in-flight drafts
(the count moves as sibling groups edit)
(0 open forward references run-wide; no row names this pair); `depcheck` exits 1
on the other in-flight pairs' unresolved links/deps (569 error rows on the final
run; none names this pair). `item-dependency-levels check --run` now passes
cleanly (810 items, 60 pages); an earlier snapshot had one unrelated label
mismatch on `cex-a-stationary-chain-need-not-be-ergodic` (batch 1), which was
resolved by its own group before handoff and was never edited here.

## Supplier reconciliation and dependency audit

- **Local suppliers added: none.** The scaffold already contained every
  definition and lemma the arguments need; no new A-page item, no examples-page
  promotion and no promise was dropped or narrowed.
- No in-run or cross-batch supplier is unfinished: every direct dependency of
  every item resolves to a published item on disk, and
  `frontier-37-owner-30-batch-12.cross-batch-dependencies.json` is `[]` (no
  cross-batch page or item edge). No escalation or flagged supplier is open.
- `cor-integral-over-a-null-set-vanishes` is declared on the theorem and used at
  step 2.1/6.1 (null-set integrals and null unions); every wikilink used in a
  proof step is declared in the item's deps and registered in the manifest,
  coverage and proof contract.
- The consumer is the later planned page `fourier-restriction-and-the-stein-tomas-theorem`
  (FR-14), which consumes `thm-hardy-littlewood-sobolev-fractional-integration`
  at `n=1`, `α=(n-1)/(n+1)`; the general `n≥1` statement covers that use.
- The endpoint remark is `proved_here: false` and is a dependency target of
  nothing; its `external_dependency.source_url` matches a `sources.references`
  URL exactly.

## Source verification

Stamped copies in `/tmp/s3a-riesz` hash-match the coverage records (Williams
`05c37240004db213`, Guth `547e68e49cfcd334`, Harboure `b4e12183a71b3993`).
Re-read at handoff: Williams Prop 11.4 and its proof (near part `R^α Mf`, far
part by Hölder with `(n-α)p'=n+p'n/q>n`, radius `R=‖f‖_p^{p/n}Mf^{-p/n}`,
printed p. 73); Harboure Theorem 1 + homogeneity remark (printed p. 2, the
scaling test), the weak-type remark and Theorem 3 (printed p. 5), the critical
radial example with `1<r≤n/α` (printed p. 5), Theorem 4 and the renormalization
remark (printed pp. 5–7). All recorded endpoint qualifications match the source
text; Guth's PDF OCR mangles its formulas, and its ball/maximal route was
checked from the earlier full-text read recorded in the batch notes.

## Published concerns

No potentially defective published item was found or suspected for this pair:
no published dependency used here is cited outside its stated hypotheses, and
this dispatch requests no published-consumer-ledger entry. Nothing in this
report should be read as an independent mathematical audit of published
suppliers; that belongs to the later review stages.

## Open obligations for the owner / Step 4

1. **Plan splice**: `research/plan-spec.json` still carries empty item lists for
   orders 458.02615/458.02616 (the pre-splice state; `validate-plan` exit 0 with
   the global note). Required shared change: splice the eight manifest items
   into the two planned pages; no claim, order, kind or prerequisite change is
   requested.
2. The endpoint remark must stay recorded-not-proved and unconsumed; the weak
   `L^q` and BMO vocabulary it mentions has no published definition yet.
3. Whole-run gates (`fwdcheck`, `depcheck`, `item-dependency-levels`,
   `step3-decisions --phase final`) still fail only on other groups' in-flight
   content; rerun after those pairs land.
4. Owner correction at 2026-09-30 11:18 UTC: all eight owned IDs were in the
   immutable pre-author scaffold inventory. They use ordinary Step-3 item
   decisions, which the owner verified are current and closed for all eight.
   This batch added no genuinely new IDs eligible for auditor-addition
   certification. Subsequent independent mathematical review remains required.
