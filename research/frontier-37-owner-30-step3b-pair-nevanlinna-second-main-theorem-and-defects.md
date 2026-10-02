# Step 3b author report — pair `nevanlinna-second-main-theorem-and-defects`

- Run `frontier-37-owner-30`, role `alpha-high`, label
  `step3b-pair-nevanlinna-second-main-theorem-and-defects-b2c33e8715e7eeec`.
- A page `nevanlinna-second-main-theorem-and-defects` (complex-analysis, batch 26,
  14 items), B page `nevanlinna-second-main-theorem-and-defects-examples`
  (batch 26, 7 items).
- Owned IDs (dependency-level order of the dispatch):
  `def-nevanlinna-exceptional-radius-notation`,
  `def-nevanlinna-truncated-and-ramification-counts`,
  `lem-nevanlinna-exterior-three-value-extension`,
  `lem-nevanlinna-growth-dominates-logarithm`,
  `lem-nevanlinna-poisson-jensen-derivative-bound`,
  `ex-nevanlinna-omitted-values-of-exponential`,
  `def-nevanlinna-deficiency-and-ramification-index`,
  `lem-borel-nevanlinna-growth-increment`,
  `lem-nevanlinna-ramification-counting-identity`,
  `cex-nevanlinna-error-bound-without-exceptional-radii`,
  `ex-truncated-versus-full-nevanlinna-counting`,
  `lem-nevanlinna-logarithmic-derivative`,
  `thm-nevanlinna-second-main-theorem`,
  `thm-local-second-main-theorem-on-a-punctured-disc`,
  `thm-nevanlinna-defect-relation`,
  `thm-nevanlinna-five-value-theorem`,
  `ex-sharpness-of-nevanlinna-q-minus-two`,
  `cor-nevanlinna-picard-theorems`,
  `ex-five-value-bound-is-sharp`,
  `ex-nevanlinna-deficiencies-of-elementary-functions`,
  `ex-nevanlinna-and-normal-family-picard-proofs`.

## Open obligations at entry

1. Resume the failed prior dispatch: 20 of the 21 item files exist as drafts;
   `ex-nevanlinna-and-normal-family-picard-proofs` is absent, both library
   pages and the batch proof-contract file are absent.
2. Step-3a scope was repaired by the owner
   (`research/frontier-37-owner-30-scope-repair-nevanlinna.md`, owner scope
   `proceed` receipt sha `b1a4aad3…` for the 14 A + 7 B inventory). The
   owner-authorized Countable Choice qualifier for
   `thm-local-second-main-theorem-on-a-punctured-disc` is recorded in
   `research/frontier-37-owner-30-post-baseline-nevanlinna-amendment.json`.
   The plan still needs the Step-4 edits (new A row, extra `requires` pages,
   seventh B item).
3. Known authoring risk from the owner direction: the counterexample
   checkpoint previously mentioned a divergent series; the actual draft uses
   a lacunary power series, and its recurrence was checked (see item audit).
4. `cex-nevanlinna-error-bound-without-exceptional-radii` had a recurrence
   whose slack does not satisfy the cited Goldberg–Ostrovskii hypothesis
   `nλ_n2^(nλ_n) = o(λ_{n+1})`; repaired while authoring.
5. `ex-differentiable...` link defect: the deficiencies example cited a
   nonexistent item id `cor-differentiable-implies-continuity`; repaired to
   `cor-differentiable-implies-continuous`.
6. All 21 IDs are original scaffold IDs, so each needs a current Step-3 item
   decision after the item is written and checked.

## Checkpoints

### Status at handoff

All 21 owned items are authored, checked and carry a current Step-3b item
decision (16 `repaired`, 5 `accept`).
The two library pages, the batch manifest rows, coverage rows and the batch
proof-contract file exist. `step3-decisions check --run frontier-37-owner-30
--phase final` reports none of the 21 IDs as work; every one is closed with
confidence 1 and its examined dependency IDs recorded in
`research/frontier-37-owner-30-step3b-review-<id>.json`. No supplier item
outside this pair is unfinished on any proof path, so no consumer is left
escalated and no cross-batch ledger row is needed
(`batch-26.cross-batch-dependencies.json` is `[]`).

## Per-item checkpoints (dependency-level order)

Level 0

1. `def-nevanlinna-exceptional-radius-notation` — **accept**.
   Claim/conventions: `S(r,f)` is dominated by `C(log^+T(r,f)+log r)` off a
   measurable set of finite linear measure; constant, threshold and set belong
   to each occurrence; finite sums take unions; no all-radius or sharper-order
   bound is implicit; Countable Choice is used only through the published
   complete-measure interface. Sources: Eremenko §§5–6 (printed pp. 9–13),
   Goldberg–Ostrovskii Ch. 3 §1 (pp. 87–98). Dependencies examined:
   `def-nevanlinna-counting-proximity-and-characteristic`,
   `def-order-of-growth-meromorphic-function`,
   `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
   `thm-lebesgue-measure-is-a-complete-measure`, `def-countable-choice`.
   Checks: no proof body (definition, skipped by precheck by design);
   rendercheck/content-policy/contracts pass. Gaps: none. Next: none.
2. `def-nevanlinna-truncated-and-ramification-counts` — **repaired**.
   Claim/conventions: `n=bar n+n_1`, `N=bar N+N_1`, the ramification count
   `n_1(t,f)` and the centre regularisation, checked pointwise at finite
   targets and poles. Sources: Eremenko §4 eq. (17) (p. 9);
   Goldberg–Ostrovskii Ch. 3 §§1–2 (pp. 87–98). Dependencies examined: the
   seven declared IDs (counting/proximity definition, well-definedness, zero
   factorisation, pole characterisations, discreteness, isolated zeros, zero
   derivative). Repair: joined a multiline display. Checks: precheck PASS,
   rendercheck OK. Gaps: none. Next: none.
3. `lem-nevanlinna-exterior-three-value-extension` — **repaired**.
   Claim/conventions: three omitted sphere values on an exterior domain force
   meromorphic extension across `∞`; proof is the choice-free Schottky
   diagonal route (Möbius normalisation, dyadic-box extraction, Cauchy
   Lipschitz bound, uniform Cauchy limit, bounded-or-reciprocal-bounded
   alternative, maximum-modulus propagation, removable singularity/pole).
   Sources: Simonič §5.3 Thm 11 (p. 13), §5.4 Thms 13–14 (pp. 14–15);
   Eremenko §5 (pp. 10–12). Dependencies examined: the 15 declared IDs
   (`thm-schottky-theorem`, `lem-cauchy-estimates-on-concentric-subdiscs`,
   `thm-recursion`, chordal-metric/topology items, compactness/maximum-modulus
   items, removable-singularity and pole characterisations, ...). Repair: the
   uniform chordal modulus was `min{1,...}`; the chordal metric used here has
   diameter two (steps 5.1 and 8.2 use the diameter-two normalisation), so it
   now reads `min{2,...}`. Checks: precheck PASS, rendercheck OK, strict
   contract OK. Gaps: none. Next: none.
4. `lem-nevanlinna-growth-dominates-logarithm` — **accept**.
   Claim/conventions: `T(r,f)/log r -> ∞` for transcendental `f` (convex
   Ahlfors–Shimizu chord argument; bounded liminf would force `T=O(log r)`
   and rationality), rational case `d log r+O(1)`. Sources: Eremenko §4–5
   (pp. 6–13); Goldberg–Ostrovskii Ch. 1 §§5–6 (pp. 23–28).
   Dependencies examined: `thm-ahlfors-shimizu-characteristic-identity`,
   `thm-rational-functions-characterized-by-logarithmic-characteristic`,
   `def-nevanlinna-counting-proximity-and-characteristic`. Checks: precheck
   PASS. Gaps: none. Next: none.
5. `lem-nevanlinna-poisson-jensen-derivative-bound` — **repaired**.
   Claim/conventions: separated-radius bound
   `m_0(r,f'/f) ≤ C_{f,α}+C_α(log^+T(R,f)+log R+log^+1/(R-r))`, `2≤r<R`,
   `0<α<1`; proof by differentiated Poisson–Jensen, kernel bounds, α-power
   angular means, divisor counting at `s=(R+r)/2`. Sources:
   Goldberg–Ostrovskii Ch. 3 §1 Thm 1.1 with (1.3),(1.3′) (pp. 88–89);
   Laine §§5–6.1 (pp. 35–43). Dependencies examined: the seven declared IDs
   (Poisson–Jensen formula, counting definition, well-definedness, FMT,
   characteristic laws, zero factorisation, pole characterisation). Repair:
   step 1.2's equality for the mean of `|log|h||` was replaced by the correct
   inequality with the pointwise chordal comparison. Checks: precheck PASS,
   strict contract OK. Gaps: none. Next: none.
6. `ex-nevanlinna-omitted-values-of-exponential` — **repaired**.
   Claim/conventions: `e^z` omits exactly `0` and `∞`; preimages of every
   nonzero finite value are `b+2πiℤ` and are simple. Sources: Eremenko §5
   (p. 9); Laine §5 (pp. 38–40). Dependencies examined:
   `def-countable-choice`, `thm-nevanlinna-first-main-theorem`,
   `thm-complex-exponential-is-entire-with-derivative-itself`,
   `thm-complex-exponential-surjects-onto-the-punctured-plane`,
   `thm-kernel-and-fibres-of-complex-exponential`,
   `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`.
   Repair: heading `## Proof` → `## Verification` (SCHEMA example
   convention). Checks: precheck PASS. Gaps: none. Next: none.

Level 1

7. `def-nevanlinna-deficiency-and-ramification-index` — **repaired**.
   Claim/conventions: `δ = liminf m/T = 1−limsup N/T`, `ε = liminf N_1/T`,
   both in `[0,1]`; target sums are suprema of finite subsums with no
   countability assumption. Sources: Goldberg–Ostrovskii Ch. 3 §§1–2 and
   Ch. 4 §3 (pp. 87–98, 121–122); Laine §§5–6.1. Dependencies examined:
   counting definition, truncated counts, First Main Theorem,
   `lem-nevanlinna-growth-dominates-logarithm`. Repair: missing `[F1]` tag in
   step 2.2 plus a joined display. Checks: precheck PASS. Gaps: none. Next:
   none.
8. `lem-borel-nevanlinna-growth-increment` — **repaired**.
   Claim/conventions: for continuous nondecreasing unbounded `u≥1` and
   `ε>0`, `u(r+u(r)^{−1−ε})<u(r)+1` off a measurable set of finite linear
   measure; applications to `u=T(·,f)`. Sources: Eremenko §5 (pp. 11–12);
   Goldberg–Ostrovskii Ch. 3 §1 Thm 1.2 (pp. 89–91). Dependencies examined:
   the seven declared IDs (exceptional-radius notation, rational
   characterisation, Ahlfors–Shimizu, complete Lebesgue measure, Countable
   Choice, countable subadditivity, p-series). Repair: the two cover displays
   had been interleaved after the wrong steps and `m_0` was defined only after
   its first use; `m_0:=⌈u(r_0)⌉` moved to step 1.1, the `λ(E)` estimate placed
   inside step 1.3, the cover inclusion inside step 3.1, and step 4.1
   rewritten. Checks: precheck PASS, strict contract OK. Gaps: none. Next:
   none.
9. `lem-nevanlinna-ramification-counting-identity` — **accept**.
   Claim/conventions: `N_1(r,f)=N(r,0;f')+2N(r,∞;f)−N(r,∞;f')` and
   `Σ_{a∈A}N_1(r,a;f) ≤ N_1(r,f)`, checked through the local divisor weights
   and integration with the centre term. Sources: Eremenko §4 eq. (17);
   Goldberg–Ostrovskii Ch. 3 §1. Dependencies examined: the five declared
   IDs. Checks: precheck PASS. Gaps: none. Next: none.
10. `cex-nevanlinna-error-bound-without-exceptional-radii` — **repaired**.
    Claim/conventions: the Hayman lacunary entire function
    `f=Σ(z/r_n)^{λ_n}` with `λ_1=2`,
    `λ_{n+1}=4nλ_n2^{nλ_n}+n+1`, `r_n=2^{n−1}`, satisfies
    `λ_n=o(log λ_{n+1})`, has `|f|≤(ν−1)2^{λ_{ν−1}}+2` and
    `|f'|≥λ_ν/(2r_ν)` on `|z|=r_ν`, so `m_0(r_ν,f'/f)≥(1/3)log λ_ν` while
    `log^+T(r_ν,f)+log r_ν=o(log λ_ν)`; infinite order at `r_{ν+1}`. Sources:
    Goldberg–Ostrovskii Ch. 3 §1 pp. 92–94, eqs. (1.14)–(1.16) (Hayman);
    Eremenko §6. Dependencies examined: the seven declared IDs. Repairs: the
    recurrence strengthened and heading fixed earlier; today the later-terms
    exponent `2^{−m(λ−1)}` corrected to `2^{−mλ}` (verified: each summand is
    then `≤2^{−m}` because `λ≤2^{m(λ−1)}` for `λ≥2`). Checks: precheck PASS,
    strict contract OK. Gaps: none. Next: none.
11. `ex-truncated-versus-full-nevanlinna-counting` — **repaired**.
    Claim/conventions: for `f=z^d`, `N(r,0;f)=d log r`, `bar N=log r`,
    `N_1=(d−1)log r`, `T=d log r+O(1)`; full count strictly exceeds truncated.
    Sources: Goldberg–Ostrovskii Ch. 3 §§1–2; Laine §§5–6.1. Dependencies
    examined: the three declared IDs. Repair: heading → `## Verification`.
    Checks: precheck PASS. Gaps: none. Next: none.

Level 2

12. `lem-nevanlinna-logarithmic-derivative` — **repaired**.
    Claim/conventions: `m_0(r,f'/f)=S(r,f)`, chordal proximity the same;
    finite order `O_f(log r)` at every large `r`, rational `O_f(1)`. Sources:
    Goldberg–Ostrovskii Ch. 3 §1 Thm 1.3 (pp. 91–92); Laine §§5–6.1;
    Eremenko §6. Dependencies examined: the eight declared IDs. Repair: added
    `def-nevanlinna-counting-proximity-and-characteristic` to the frontmatter
    deps (it was used but undeclared). Checks: precheck PASS, manifest-deps
    clean. Gaps: none. Next: none.

Level 3

13. `thm-nevanlinna-second-main-theorem` — **repaired**.
    Claim/conventions: `Σ_j m(r,a_j;f)+N_1(r,f) ≤ 2T(r,f)+S(r,f)` and its
    equivalent truncated forms, with `O_f(log r)` all-radii refinement for
    finite order and `O_f(1)` for rational; proof by finite-target reduction,
    target separation, `H=Σ1/(f−a_j)`, logarithmic-derivative estimates and
    the ramification identity. Sources: Goldberg–Ostrovskii Ch. 3 §2 Thm 2.1
    (pp. 96–98); Eremenko §6 (pp. 12–13); Laine §§5–6.1. Dependencies
    examined: the eight declared IDs. Repair: added the undeclared counting
    definition dependency. Checks: precheck PASS, strict contract OK.
    Gaps: none. Next: none.

Level 4

14. `thm-local-second-main-theorem-on-a-punctured-disc` — **repaired**.
    Claim/conventions: the owner-authorized Countable Choice qualifier is
    preserved verbatim; with `F(w)=f(z_0+ρ/w)`, the exterior characteristic
    `T_ext=m_ext+N_ext` satisfies
    `(q−2)T_ext(R,F) ≤ Σ_j bar N_ext(R,a_j;F)+C(log^+T_ext(R,F)+log R)` off a
    finite-measure set in the exterior radius, with the change of variables
    `s=ρ/R` and the bounded image exceptional measure. Sources: Lund–Ye,
    Definition A (p. 549) and Theorems A1–A2 (pp. 551–552); Kondratyuk Thm 1
    (p. 10) as annular-Jensen context. Dependencies examined: the 13 declared
    IDs (truncated counts, counting definition, ramification identity, plane
    SMT, argument principle/winding suppliers, Möbius suppliers, structural
    items, `def-countable-choice`). Repair: joined a multiline display.
    Checks: precheck PASS, strict contract OK. Gaps: the exterior SFT is
    derived locally from annular Jensen and Lund–Ye A2 (no print of a direct
    exterior SFT was available); this narrow source qualification is recorded
    in the notes and coverage. Next: none.
15. `thm-nevanlinna-defect-relation` — **repaired**.
    Claim/conventions: `Σ_a(δ+ε) ≤ 2`, `Σ_a δ ≤ 2`, `δ+ε ≤ 1`, and the set
    where either index is positive is at most countable; proof by finite
    target sets, division by `T`, growth separation and the level sets
    `F_k={δ+ε>1/k}`. Sources: Goldberg–Ostrovskii Ch. 3 §§1–2, Ch. 4 §3;
    Laine §§5–6.1. Dependencies examined: the seven declared IDs. Repair:
    joined a multiline display. Checks: precheck PASS. Gaps: none. Next:
    none.
16. `thm-nevanlinna-five-value-theorem` — **accept**.
    Claim/conventions: sharing five distinct sphere values ignoring
    multiplicity forces `f=g`; proof by Möbius normalisation,
    `C(r)≤N(r,0;F−G)≤T(F)+T(G)+O(1)`, the q=5 truncated SMT on both
    functions, and growth separation. Sources: Laine §§5–6.1 (pp. 35–43);
    Goldberg–Ostrovskii Ch. 3–4. Dependencies examined: the six declared IDs.
    Checks: precheck PASS. Gaps: none. Next: none.
17. `ex-sharpness-of-nevanlinna-q-minus-two` — **repaired**.
    Claim/conventions: for `e^z` with targets `0,∞,a`,
    `T=r/π+O(1)` and `bar N(r,a;·)=r/π+O(log r)`, so the `q=3` truncated SMT
    is asymptotically an equality and no coefficient `c>1` is possible.
    Sources: Eremenko §5; Laine §§5–6.1. Dependencies examined: the four
    declared IDs. Repair: joined a display; heading → `## Verification`.
    Checks: precheck PASS. Gaps: none. Next: none.

Level 5

18. `cor-nevanlinna-picard-theorems` — **repaired**.
    Claim/conventions: plane claim (at most two omitted sphere values; entire
    case one finite value) and local claim (an isolated essential singularity
    assumes every sphere value infinitely often in every punctured
    neighbourhood with at most two exceptions; one finite exception when
    holomorphic). Sources: Eremenko §§4–6; Goldberg–Ostrovskii Ch. 3–4; Laine
    §§5–6.1; Lund–Ye Thm A2 for the exterior logarithmic derivative.
    Dependencies examined: the 24 declared IDs (plane and local SMT,
    exterior lemma, growth and rationality criteria, Laurent/exponential
    calculus items, Möbius and pole suppliers). Repairs: step 4.3 now records
    that the winding number of `G` about `0` is constant on `1<|w|<∞`; step
    5.3 computes `c_{−1}` by the coefficient formula at `|w|=2` (the licensed
    range `1<ρ<∞`). Checks: precheck PASS, strict contract OK. Gaps: none.
    Next: none.
19. `ex-five-value-bound-is-sharp` — **repaired**.
    Claim/conventions: `e^z` and `e^{−z}` share exactly the four sphere values
    `0,∞,1,−1` ignoring multiplicity and are distinct, so five cannot be
    reduced to four. Sources: Laine §§5–6.1. Dependencies examined: the seven
    declared IDs. Repair: heading → `## Verification`. Checks: precheck PASS.
    Gaps: none. Next: none.
20. `ex-nevanlinna-deficiencies-of-elementary-functions` — **repaired**.
    Claim/conventions: `T(r,e^z)=r/π+O(1)`,
    `δ(0)=δ(∞)=1`, all `ε=0`; `T(r,sin)=2r/π+O(1)`, `δ(∞)=1`, all finite
    `δ=0`, `ε(±1)=1/2`, combined defect sum 2. Sources: Eremenko §§4–6;
    Laine §§5–6.1; Goldberg–Ostrovskii Ch. 3–4. Dependencies examined: the 19
    declared IDs (defect relation, deficiency index, counts, exponential and
    trigonometric suppliers, real-integration items). Repairs: Re/Im
    interchanged in the two lattice-count displays (corrected); heading →
    `## Verification`; earlier the nonexistent
    `cor-differentiable-implies-continuity` link corrected and cross-page B
    dependencies removed. Checks: precheck PASS, strict contract OK. Gaps:
    none. Next: none.

Level 6

21. `ex-nevanlinna-and-normal-family-picard-proofs` — **accept**.
    Claim/conventions: two independent exclusions of three omitted values —
    the local exterior SMT route (all `bar N_ext=0`, `y≤C log y+C log R` solves
    to `T_ext≤C_1 log R` off the finite-measure set, feeding the growth-to-
    extension factorisation) and the Schottky/normal-family route (exterior
    lemma applied to the inverted map with no characteristic function) — plus
    the "finitely often" and holomorphic formulations. Sources: Simonič §5.3
    Thm 11, §5.4 Thms 13–14; Lund–Ye Def A, Thms A1–A2. Dependencies examined:
    `thm-local-second-main-theorem-on-a-punctured-disc`,
    `lem-nevanlinna-exterior-three-value-extension`,
    `cor-nevanlinna-picard-theorems`, `def-countable-choice`,
    `thm-poles-meromorphic-function-are-discrete-and-countable`. Checks:
    precheck PASS (authored with `## Verification`). Gaps: none. Next: none.

## Scaffold-audit repairs actually made

- `lem-borel-nevanlinna-growth-increment`: interleaved displays and late
  definition of `m_0` (structural, repaired).
- `lem-nevanlinna-exterior-three-value-extension`: wrong chordal diameter in
  the uniform modulus (mathematical, repaired).
- `cex-nevanlinna-error-bound-without-exceptional-radii`: wrong exponent in
  the later-terms estimate (mathematical, repaired).
- `lem-nevanlinna-poisson-jensen-derivative-bound`: false equality replaced by
  the correct inequality (mathematical, repaired).
- `ex-nevanlinna-deficiencies-of-elementary-functions`: Re/Im interchange in
  two lattice counts (mathematical, repaired); plus the earlier link fix.
- `cor-nevanlinna-picard-theorems`: two one-line gaps closed (annulus
  constancy of a winding number; range of the Laurent coefficient formula).
- Heading normalisation to the SCHEMA example convention in five examples;
  multiline displays joined in six items; `def-nevanlinna-counting-proximity-
  and-characteristic` declared where used in two items; `[F1]` input tag added
  in one definition.

## Pre-splice plan findings (Step 4)

Findings 64–66 of
`research/frontier-37-owner-30-pre-splice-plan-findings.json` were
`undeclared-prereq` findings for
`the-riemann-sphere-and-mobius-transformations`, `bloch-schottky-and-picard`
and `normal-families-and-montels-theorem`. They are resolved in the batch
manifest: the A page's `requires` list now names all three (and the other six
supplier pages), and `validate-plan` today reports no undeclared prerequisite
or forward edge for this pair. Remaining Step-4 splice edits (owner to apply;
the shared plan is not edited by this dispatch):

1. Plan rows 841/842 still carry empty item inventories; the 14 A rows and
   7 B rows must be spliced from
   `research/frontier-37-owner-30-batch-26.pages.json`.
2. The new A item `thm-local-second-main-theorem-on-a-punctured-disc` and the
   additional `requires` pages are absent from the design text even though the
   plan's `requires` row already matches the manifest.
3. The frozen scope keeps seven B items; the design text lists six names, and
   `ex-five-value-bound-is-sharp` is the retained seventh. This is an
   inventory-text mismatch only, not a scope change.
4. `validate-plan` lists informational `redundant-prereq` warnings for this
   page (e.g. `measures-and-their-basic-properties` is already reached through
   `lebesgue-measure-on-euclidean-space` and through the Jensen page). No
   correction is proposed here; the manifest preserves the design's declared
   prerequisites.

## Earlier escalations and supplier reconciliation

- The Step-1 escalation of `lem-nevanlinna-exterior-three-value-extension` and
  `cor-nevanlinna-picard-theorems` is reconciled. The exterior extension lemma
  is now an authored, complete, choice-free Schottky route; the Picard
  corollary's local statement is proved from the owner-authorized local SMT
  route, and `ex-nevanlinna-and-normal-family-picard-proofs` instantiates both
  routes independently. No unfinished in-run supplier remains on any proof
  path of this pair; all 61 published suppliers declared in the item graph
  resolve, and the 15 non-published suppliers are all items of this pair.
- Owner direction's batch-26 concern ("check the ACTUAL current proof; no
  unsupported witness") is resolved: the counterexample uses the convergent
  lacunary power series `Σ(z/r_n)^{λ_n}` of Goldberg–Ostrovskii pp. 92–94, not
  the divergent exponential series mentioned in the old checkpoint, and its
  exponents, block estimates and growth comparison were re-derived today.

## Local suppliers added / shared records

- No new item IDs were created: all 21 IDs are original scaffold IDs, so the
  auditor-addition exception does not apply and each carries an ordinary
  current item decision.
- All local suppliers (the six A-page lemmas/definitions, the truncated-count
  definition, and the punctured-disc SMT) are inside this pair, authored
  before their consumers; no cross-batch supplier is requested
  (`batch-26.cross-batch-dependencies.json` stays `[]`).
- `frontier-dependency-ledger refresh --run frontier-37-owner-30` was retried
  after the final edits and currently exits 1 on an unrelated pair's item
  (`lem-roots-of-unity-in-a-number-field-are-finite.md: justified_by must be
  an array`, another owner's in-flight file). The unified ledger already lists
  batch 26 as reviewed with no edges, matching the unchanged empty batch-26
  input, so no batch-26 reconciliation is outstanding; the owner should re-run
  the refresh once that sibling file is fixed.
- Batch notes were checkpointed in
  `research/frontier-37-owner-30-batch-26.notes.md` (Step-3b section); the
  manifest dependency rows were regenerated from item frontmatter and match.

## Published concerns

- No confirmed defect in a published item is attributable to this pair. The
  global `depcheck`/`fwdcheck` exit 1 only on unrelated published
  algebraic-geometry missing IDs
  (`def-invertible-sheaf-of-cartier-divisor`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `thm-elliptic-cubic-chord-tangent-group-law`, ...), and `extcheck` exits 0
  with unrelated published recorded-result warnings; no failure line names an
  item of this pair. Report to the owner for the serial ledger, not repaired
  here.
- Observation (not a defect): the library carries two chordal
  normalisations — `def-nevanlinna-counting-proximity-and-characteristic`
  uses `δ` with diameter one, while `def-chordal-metric-riemann-sphere` uses
  the chord length `χ` with diameter two. This pair uses `δ` for Nevanlinna
  proximities and `χ` only where the published chordal-metric item is cited
  (the exterior lemma), and the repaired modulus reflects that distinction.

## Checks actually run (2026-09-30, after all edits)

- `node tools/tsx-run.mjs tools/precheck.mts` on the explicit 21-item list:
  20 checked (the definition body is legitimately skipped), 0 failing.
- `node tools/rendercheck.mjs` on the 21 items and both pages: OK, 23 files.
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-26.pages.json`:
  21 items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-26.pages.json`:
  21 items, 0 normalized, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`:
  812 items across 60 pages, no label mismatch; no batch-26 item out of order.
- `node tools/tsx-run.mjs tools/proof-contract.mjs
  research/frontier-37-owner-30-batch-26.proof-contracts.json --strict`:
  21/21 contracts checked, 0 errors, 0 warnings (regenerated from the final
  step text after the repairs).
- `node tools/coverage-checklist.mjs` on the batch coverage: 1 page,
  58 harvested results, 0 errors, 0 warnings;
  `source-fetch-check` on the same coverage: 7/7 fetch-verified, 7/7 resolved.
- `node tools/tsx-run.mjs tools/validate-plan.mjs research/plan-spec.json`:
  page order acyclic and consistent, no item-level cycles or forward
  references among pages carrying item lists; the Step-4 splice items above
  remain.
- `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase
  final`: none of the 21 IDs appear as work; all 21 are closed with
  confidence 1 (run-level total 316/812 at the time of the check because other
  pairs are still in flight).
- Global `depcheck`/`fwdcheck` exit 1 only on the unrelated published
  algebraic-geometry IDs listed above; `extcheck` exits 0. `step3-decisions
  check --phase scope` is closed for all 30 pairs.

## Open obligations at exit

1. Step-4 splice of the shared plan (rows 841/842 item inventories, the new
   local SMT row, the seventh B item, and the `requires`-text alignment) —
   reported here as required, not applied by this dispatch.
2. None for content, sources, dependencies or contracts: every assigned item
   is authored, checked and decision-closed; no escalation is open and no
   consumer awaits an unfinished supplier.
3. Independent mathematical audit and any systematic defect repair remain with
   Steps 5–8; nothing in this report substitutes for them.

## Resume re-verification (2026-09-30, after compaction)

The dispatch was resumed from its checkpoint after context compaction; no item
text was edited in this session, so every decision, contract and receipt above
remains the current one (re-hashed through `step3-decisions`). Checks re-run on
the exact on-disk state:

- `node tools/tsx-run.mjs tools/author-check.mts frontier-37-owner-30 26`:
  `ok: true` — precheck (21 explicit items; 20 checked, the definition skipped
  by design, 0 failing), rendercheck (23 files including both pages),
  content-policy (21 scoped items, 0/0), proof-contract `--strict` (21/21,
  0/0); receipt `research/frontier-37-owner-30-author-check-26.json`.
- `checkPairAuthorArtifacts` (`tools/dispatch-author-artifacts.mjs`): 25/25
  required carriers present and non-empty (21 items, 2 library pages, pair
  report, batch proof-contract file).
- `step3-decisions check --run frontier-37-owner-30 --phase final`: none of
  the 21 owned ids appears as work (the run-level nonzero total is other
  pairs still in flight).
- `coverage-checklist` (canonical form, and `--require-destination`): 58
  harvested results, 0 errors; `manifest-deps`: 21 items, 0 errors;
  `item-dependency-levels check`: 812 items / 60 pages, no errors;
  `validate-plan`: unchanged, Step-4 splice items above; `source-fetch-check`:
  7/7 resolved.
- Repo-wide: `prosecheck`, `depsource`, `pathcheck`, `extcheck` clean for this
  pair; `depcheck`/`fwdcheck` still exit 1 only on the unrelated published
  algebraic-geometry ids listed above, with no failure line naming a batch-26
  item.
- `frontier-dependency-ledger refresh --run frontier-37-owner-30` still exits
  nonzero on the sibling item
  `items/lem-roots-of-unity-in-a-number-field-are-finite.md` (`justified_by:`
  is empty, not a YAML array). Batch 26 remains listed reviewed with an empty
  input, so nothing is owed here by this pair.

Independent re-derivations performed on resume (author-level, not a substitute
for Steps 5–8): the target-separation case analysis and the
`m(r,0;f')+N_1` identity of `thm-nevanlinna-second-main-theorem`; the annular
Jensen identity, exterior ramification bookkeeping and Möbius transfer steps
of `thm-local-second-main-theorem-on-a-punctured-disc`; the finite- and
infinite-order branches of `lem-nevanlinna-logarithmic-derivative`; the
pointwise weight comparison of `lem-nevanlinna-ramification-counting-identity`;
the recurrence, block estimates and growth comparison of
`cex-nevanlinna-error-bound-without-exceptional-radii`; and the preimage
computations of `ex-five-value-bound-is-sharp`. No defect requiring an edit was
found in these passages; the open obligations at resume exit are unchanged
from "Open obligations at exit" above.
