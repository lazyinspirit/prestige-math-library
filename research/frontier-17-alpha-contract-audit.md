# Contract-detector adjudication — run `frontier-17`

Lane label: `contract-audit-1` (round 1; `research/frontier-17-dispatch/` held only
this round's prompt file, no prior contract-audit result or log to inherit).
Alpha, Claude Opus 5, `xhigh`, 1M context. Date 2026-08-23.

## Detector state on entry

| detector | exit | candidates |
|---|---|---|
| `boundary-audit --fail-on-contradicted --fail-on-template` | 0 | none — 3048 rows over 9 files, 1492 `not_applicable`, no template reuse at or above 3 members, no contradicted disposition |
| `citation-fidelity --fail-on-missing-quote` | 0 | 1303 citations, 381 items; no missing quote; **1 widening candidate** |
| `gate-liveness --min-checks 1` | **1** | **`finite-smoke` VACUOUS — 0 checks** |
| `risk-report --require-reviewed` | 0 | 381 routed, 0 errors |

Two things needed a read: the widening candidate, and the vacuous gate. The
level is pre-freeze — `research/frontier-17-judge.jsonl` does not exist, so
step 7 has not run and no verdict was at risk from a repair.

---

## Candidate 1 — `citation-fidelity` widening, `prop-vandermonde-transforms-by-sign-under-the-galois-action` [L1] -> `thm-sign-is-a-homomorphism`

Detector's reason: *"the cited text carries `$n \ge 2$`; the restatement
quantifies over all `$n$` without it."*

### The detector is WRONG on what it reported. Upheld on the record.

The cited Statement reads:

> For every natural $n$, the function $\operatorname{sgn}:S_n\to\{+1,-1\}$ is a
> group homomorphism. It is surjective exactly when $n\ge2$; for $n=0$ and
> $n=1$ its image is $\{1\}$.

The `$n\ge2$` bound qualifies **surjectivity**, not the homomorphism claim. The
[L1] line restates only the homomorphism clause, which the source asserts
verbatim *for every natural $n$*, and it makes no surjectivity claim for the
bound to attach to. The `bound-dropped` heuristic matched a bound belonging to an
elided clause. Recorded as
`reviewed: {upheld: true, by: "alpha-contract-audit-1", reason: ...}` on the L1
citation row in `research/frontier-17-batch-3.proof-contracts.json`.

### But my own read of the same row found a real defect the detector did not report.

Old step 2.1:

> Every permutation is a product of transpositions, and [L1] records the parity
> independently of the chosen product. Applying step 1.1 along such a product
> gives $\sigma(\delta)=\operatorname{sgn}(\sigma)\delta$.

[L1] states only that `sgn` is a group homomorphism. It does **not** state that
transpositions generate $S_n$, and it does **not** state $\operatorname{sgn}(\tau)=-1$.
So the step rested on two uncited facts, and the clause *"[L1] records the parity
independently of the chosen product"* substitutes a description of what the cited
result is **for** in place of the proposition it **states** — the exact pattern
`CLAUDE.md` §"citation fidelity" forbids and the step-7 judges are told to hunt.

**Severity: nonfatal.** Both missing facts are standard and both sit in the cited
item's own dependency closure, so a competent reader closes the gap well inside
30 seconds. It is a citation defect, not a logic defect: the identity is true and
the route is the right one.

**Disposition: fixed at step 6, where the text is unfrozen and no verdict exists
to void.** Repairs applied:

1. `deps` gained `def-inversions-inversion-number-and-sign`,
   `thm-transpositions-generate-the-symmetric-group` and
   `thm-parity-of-transposition-factorisations-is-well-defined` (all published,
   all `literature-derived` statements — none `ai-generated`, so all eligible).
2. Facts block gained [F1] ($\operatorname{sgn}:=(-1)^{\operatorname{inv}}$),
   [L2] (transpositions generate; identity is the empty product) and [L3]
   (any transposition factorisation of length $r$ has $(-1)^r=(-1)^{\operatorname{inv}(\sigma)}$).
   [L1] is retained and now does real work.
3. The proof was decomposed — repair (4) — so each fact is cited at the step that
   uses it: 1.1 the transposition flips $\delta$; 1.2 $\operatorname{sgn}(\tau)=-1$
   from [L3] at $r=1$ and [F1]; 2.1 factor by [L2] and apply 1.1 $r$ times to get
   $\sigma(\delta)=(-1)^r\delta$; 3.1 [L1] multiplies the signs to
   $\operatorname{sgn}(\sigma)=(-1)^r$ and closes the identity, with $n=0,1$
   disposed of explicitly; 4.1 squares it. The first attempt kept everything in
   one step and `proof-contract --strict` correctly warned `shotgun-bracket`;
   the split cleared it. `precheck` then printed a REPAIR stratification (a step
   citing no earlier step belongs in phase 1) and I adopted the printed canonical
   form verbatim.
4. Contract row resynced: four citation rows with verbatim quotes, five
   derivations covering the five steps exactly once, and the five `checked`
   boundary rows rewritten to name the final step numbers and the actual
   disposition — they had previously embedded the old step-2.1 prose verbatim,
   which my rewrite would otherwise have left stale.
5. The repair pushed the item from moderate into the **high** risk tier (6 deps,
   6 cited facts, boundary-sensitive language), so `risk-report --require-reviewed`
   raised `risk-review-missing` against it. I wrote the `risk_review` from my own
   verification — see below.

**Ledger row:** `f17-contract-audit-1-d1`, `accuracy` / `citation-misattributed`
/ `nonfatal` / `proof-step`, disposition `fixed`.

### `risk_review` for the item, written from my own read

Not an AI-generated statement (`provenance.statement: literature-derived`,
Milne *Fields and Galois Theory* v5.10 Prop 4.1), so no counterexample search for
the claim itself was owed; I probed the risk that earned the tier instead.

I opened all four cited items on disk and checked each restatement against the
source **Statement**, not its title. The genuine risk in this proposition is
**well-definedness, not the identity**: $\sigma(\delta)=(-1)^r\delta$ depends on
the transposition count $r$, and $r$ is not unique. That is now discharged by
citation — [L3] fixes the parity of $r$ — where the pre-repair text asserted it in
prose and attributed it to a fact that does not say it. Boundary probe: at
$n=0,1$ the factorisation is empty by [L2] and $\delta$ is the empty product $1$,
so the identity reads $1=1$; at $n=2$, $\delta=\alpha_1-\alpha_2$ and the single
transposition negates it. Separability gives distinct roots and $\delta\ne0$, so
step 4.1 squares without cancellation.

**No refuter was dispatched for this item.** The disposition above is my own read
of the proof against its contract and its four sources, written to disk before
this report, per the dispatch's standing instruction.

---

## Candidate 2 — `gate-liveness`: `finite-smoke` VACUOUS, 0 checks

All 381 contracts carried `finite_smoke: []`. The gate exited 0 having executed
nothing. Under-selection, not registry inapplicability — the level carries
finitely checkable claims.

I read the level's 13 pages against the 10 registry checks and selected **three**,
each one where the check's model family *is* the claim's own object family.
Selective by design; a handful of well-chosen checks is the target.

| item | batch | check | why it genuinely probes the claim |
|---|---|---|---|
| `ex-frattini-subgroup-of-a-cyclic-p-group` | 1 | `cyclic-subgroup-lagrange` | The item asserts, at step 1.1, *"By [L2], $\langle g^p\rangle$ has order $p^{n-1}$"*. Under $\langle g\rangle\cong\mathbb Z/p^n$ that subgroup is $\langle p\rangle$, and the check enumerates exactly this: for every modulus and every divisor, that $\langle d\rangle$ has order $m/d$ and that the order divides $m$. Raised `max_modulus` to 200 so the prime powers 25, 27, 32, 49, 64, 81, 121, 125, 128 and 169 are in range. |
| `prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares` | 1 | `binomial-congruence-solution-count` | Step 1.1 asserts *"Let $Q$ be the set of all square classes in $\mathbb Z/p$, including zero. By [L1], $|Q|=(p+1)/2$."* That count holds **only** because each nonzero quadratic residue has exactly $\gcd(p-1,2)=2$ square roots, which is precisely what the check verifies. The whole proof is a pigeonhole on $|Q|$, so an off-by-one there is fatal to it — the exact defect class this check catches. Set `max_exponent: 2` to focus on squares, `max_modulus: 100`. |
| `prop-resolvent-cubic-formula-and-discriminant` | 3 | `vieta-elementary-symmetric` | Its Given block asserts *"their elementary symmetric functions $e_1=-a$, $e_2=b$, $e_3=-c$, $e_4=d$"* — Vieta for a monic quartic, verbatim what the check verifies ($e_k=(-1)^k a_k$). The entire resolvent coefficient formula $R_f(y)=y^3-by^2+(ac-4d)y-(a^2d+c^2-4bd)$ is derived from it, so a sign or index shift there propagates into every quartic Galois-group determination on the page. `max_degree: 4`. |

Each `asserts` excerpt was verified present in its item before writing, and
`finite-smoke` now reports:

```
PASS [prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares] binomial-congruence-solution-count: no counterexample in 2363 solvable instances, moduli through 100 with a primitive root, exponents through 2
PASS [ex-frattini-subgroup-of-a-cyclic-p-group] cyclic-subgroup-lagrange: checked cyclic subgroups of Z/nZ through n = 200
PASS [prop-resolvent-cubic-formula-and-discriminant] vieta-elementary-symmetric: Vieta held in 837 coefficient comparisons, degrees through 4, roots in [-4,4]
finite-smoke: 0 error(s), 3 check(s) over 3/381 item(s) carrying obligations
```

**Ledger row:** `f17-contract-audit-1-d2`, `silent-runtime` / `gate-vacuous` /
`nonfatal`, disposition `fixed`, `prevention: {mechanical, gate-liveness --min-checks 1}`.

### Checks I considered and deliberately did NOT force

- `matrix-ring-laws-mod-n` on the PID/canonical-forms page. It verifies matrix
  associativity, distributivity and determinant multiplicativity over
  $\mathbb Z/n\mathbb Z$, which for composite $n$ is not a domain, let alone a
  PID. `thm-smith-normal-form-uniqueness-via-determinantal-divisors` asserts a
  PID-specific claim about determinantal ideals; the check would have executed
  and passed without touching it. Attaching it would have manufactured coverage.
- `monotone-map-need-not-preserve-meets` / `full-subposet-meet-differs-from-ambient`
  on the monadicity page. I read both counterexamples: `cex-a-conservative-functor-that-is-not-monadic`
  is built from $\mathbf{TFAb}\to\mathbf{Set}$ and `cex-a-reflexive-pair-whose-coequalizer-is-not-preserved`
  from $\mathbf{Set}(\mathbb N,-)$. Neither is a poset witness, so the poset
  checks would not have been countermodel searches for these items' claims.
- The three graph checks. This level contains no graph theory.
- `linear-recurrence-matches-rational-series`. The nearest candidate,
  `thm-volume-recursion-for-closed-euclidean-balls`, has the non-constant
  coefficient $2\pi/n$, so it is not a constant-coefficient linear recurrence and
  has no rational generating function of the form the check extracts.

### Registry gaps — a caveat for step 10, not a finding against any Beta

Several genuinely finite, bounded claims in this level have **no** registry check
that fits, and extending the registry is the orchestrator's job per
`QUALITY-CONTROLS.md` ("New check types need an independently written
implementation, a bounded test, and an update here and in `ARCHITECTURE.md`"). I
did not extend it mid-audit. The candidates a future extension would serve:

- batch 6: `ex-zero-one-outer-measure-on-a-two-point-set`,
  `cex-three-point-outer-measure-has-only-trivial-caratheodory-sets`,
  `cex-two-point-outer-measure-need-not-be-regular` — outer measures on 2- and
  3-point sets are fully enumerable, and Carathéodory measurability is a finite
  condition over the power set. This is the strongest gap in the level.
- batch 5: `cor-unit-n-ball-volume-is-maximal-in-dimension-five` and
  `ex-unit-n-ball-volumes-through-eight-from-gamma` — the maximising dimension is
  a bounded numerical search.
- batch 3: `ex-abelian-groups-of-order-three-hundred-sixty-in-both-canonical-forms` —
  the partition enumeration behind both canonical forms is finite.
- batch 9: `ex-the-ultrafilter-algebra-structure-on-a-finite-discrete-space` —
  ultrafilters on a finite set are principal, and that is enumerable.

### Doc repair in the same act

`QUALITY-CONTROLS.md` §"Finite countermodel smoke tests" listed **6** checks; the
registry in `tools/finite-smoke.mjs` defines **10**. The four arithmetic and
polynomial checks added on `frontier-13` were never added to the list, and **two
of the three checks I selected are in that unlisted group** — so an author
selecting from the document could not have found them. Updated to all ten, with a
pointer that the tool is the registry and `--self-test` prints it (verified: all
10 PASS). This is the prevention for `f17-contract-audit-1-d2`.

---

## Gate state on exit

| gate | exit |
|---|---|
| `boundary-audit --fail-on-contradicted --fail-on-template` | **0** |
| `citation-fidelity --fail-on-missing-quote` | **0** — 1306 citations, no missing quote, **no widening candidate** |
| `gate-liveness --min-checks 1` | **0** — finite-smoke live at 3 checks |
| `risk-report --require-reviewed` | **0** — 381 routed |
| `proof-contract --strict` | **0** — 0 errors, 1 warning (pre-existing, `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`, not mine) |
| `finite-smoke` | **0** — 3 checks, all PASS |
| `precheck` (repaired item) | **PASS** |
| `depcheck` / `citecheck` | **0** — neither reports anything against the repaired id |

The widening candidate cleared because the recorded L1 quote is now the clause
the [L1] line actually restates — the smallest faithful shortening `CLAUDE.md`
requires — not because any rationale was weakened to pass a regex. The upheld
`reviewed` record stays on the row either way.

## Files changed

- `items/prop-vandermonde-transforms-by-sign-under-the-galois-action.md` — deps,
  Facts block, proof decomposed and canonically stratified.
- `research/frontier-17-batch-1.proof-contracts.json` — 2 `finite_smoke` entries.
- `research/frontier-17-batch-3.proof-contracts.json` — 1 `finite_smoke` entry;
  Vandermonde citations / derivations / boundaries / `reviewed` / `risk_review`.
- `research/frontier-17-proof-contracts.json` — re-merged from the batch files.
- `research/defect-ledger.jsonl` + `research/DEFECT-LEDGER.md` — 2 rows, view
  re-rendered in the same invocation.
- `QUALITY-CONTROLS.md` — registry list corrected 6 -> 10.

## Left open

Nothing on this dispatch's gates. Carry to step 10: the registry gaps above, and
that `finite-smoke` covers 3 of 381 items — correct under the selective rule, but
it is a thin instrument on a level this analytic, and the honest reason is that
six of the ten registry checks are graph/poset/recurrence shaped and this level
is not.

---
---

# Round 2 — lane label `adjudicate-risk-review-1`

Alpha (lead), Claude Opus 5, `xhigh`, 1M context. Date 2026-08-23.

Inherited per the repair-round rule: `research/frontier-17-dispatch/` held
`alpha-contract-audit-1.{prompt.md,log,result.json}` from round 1, and the
report above. Round 1's findings were read before anything was re-derived, and
nothing in it was recomputed.

**What changed between the rounds.** Round 1 recorded `risk-report
--require-reviewed` at exit 0. It is now exit 1 with six `risk-review-missing`
errors, and the cause is not drift: step 8 ran in between and repaired 48 items
under `confirmed_fatal` adjudications. Six of those repairs added dependencies,
Facts lines or proof steps and so pushed their items over the routing
threshold — exactly the effect `QUALITY-CONTROLS.md` §risk-report documents
("repairing a proof can newly route it here"). Every one of the six carries a
step-8 `confirmed_fatal` row in `research/frontier-17-judge-adjudications.jsonl`.

## Detector state on entry

| detector | exit | candidates |
|---|---|---|
| `boundary-audit --fail-on-contradicted --fail-on-template` | 0 | none — 3048 rows over 9 files, 1492 `not_applicable`; no template reuse at or above 3 members; no contradicted disposition |
| `citation-fidelity --fail-on-missing-quote` | 0 | none — 1351 citations over 381 items; every quote found; no widening candidate |
| `gate-liveness --min-checks 1` | 0 | none — `finite-smoke` 3 checks (round 1's selections), `proof-contract` 381, `coverage-checklist` 710, `precheck` 4921 |
| `risk-report --require-reviewed` | **1** | **6 `risk-review-missing`** |

Neither `boundary-audit` nor `citation-fidelity` printed a candidate, so this
round has no detector adjudication to make and no `reviewed` block to write.
`finite-smoke` is live, so the VACUOUS branch of the dispatch does not apply
either; round 1's three selections still stand and its caveat still holds.

**The whole of this round is the six risk reviews.** Each is Alpha's own read of
the proof against its contract, probing the specific risk that earned the tier.
All six dispositions were written to disk from that read **before** any refuter
was dispatched.

## The six reviews

### 1. `ex-maximal-subgroups-as-frattini-hyperplanes` — HIGH 5 (batch 1)

Tier from cited-fact count, boundary-sensitive language and the quotient
construction. Alpha enumerated D8 by hand: the three displayed subgroups have
order four, hence index two, hence are maximal, and each contains
Φ(D)=⟨r²⟩. The quotient risk is the real one, so the images were recomputed in
the basis (rΦ, sΦ): spans of (1,0), (0,1), (1,1), which are the kernels of b, a
and a+b. **Completeness** — the Example says *the* maximal subgroups — follows
because (Z/2)² has exactly three nonzero functionals, so [L2]'s correspondence
is exhausted by the three listed. The definite article is earned. Both quotes
verbatim on disk.

### 2. `ex-orientation-reversal-preserves-area-and-negates-flux` — HIGH 7 (batch 4)

Carries `provenance.statement: ai-generated`, so Alpha tested the **Statement**,
not only the proof. Recomputed from the coordinate formula rather than trusting
the item: φ_u×φ_v=(0,0,1) and ψ_s×ψ_t=(0,1,0)×(1,0,0)=(0,0,−1). Both densities
are the constant 1, so both areas are 1; with F=(0,0,1) the fluxes are +1 and
−1. There is no counterexample to hunt — the claim is the value of two integrals
over an explicit region, and it is right. Admissibility also checked directly
against `def-admissible-regular-parametrized-surface-patch`: [0,1]² is a compact
Jordan region equal to the closure of its nonempty connected interior, both maps
are C¹ on R², both cross products are everywhere nonzero, both are injective.
det Dh = −1, so [L1]'s orientation-reversing case is the one invoked.

### 3. `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas` — HIGH 5 (batch 4)

A false-statement item, so the failure mode is refuting a strawman. Alpha
checked that the two sides compared are the **same surface**: [L1]'s Schwarz
lanterns are inscribed in a cylinder of radius r and height H, and [L2] is
applied to that same lateral cylinder as the surface of revolution of the
constant profile r on [0,H]. The cited corollary's hypotheses were traced
through to `thm-scalar-surface-integrals-on-a-surface-of-revolution` and all
hold (a<b since H>0; constant profile C¹ on a neighbourhood; positive on the
open interval), giving the finite 2πrH. Unbounded-above against finite is a
genuine contradiction, so the quantified statement is refuted.

Alpha also re-checked the cited corollary's **title**, which one judge lane read
at step 8 as a second derivative: the YAML scalar is single-quoted and the
doubled apostrophe is the YAML escape. Decoded programmatically — it is
`r'(s)`. The step-8 lead's `false_positive` stands.

### 4. `ex-volume-of-a-solid-of-revolution-by-cylindrical-shells` — CRITICAL 10 (batch 5)

The "both-direction claim" factor is [F5], the Jordan boundary criterion, used
in **both** directions in step 2.1; Alpha checked each orientation separately
and both are the ones the cited theorem supplies. The substantive risk is that
the cap region f₂≤y≤f₁ is **not** of the graph form [F1] covers — and the proof
does not pretend otherwise, which is precisely what the step-8 repair
(`f17-step8-048`) restructured it to avoid. Alpha verified ∂S ⊆ ∂S₁ ∪ ∂S₂ by
computing ∂S = {y=f₂(ρ)} ∪ {y=1}, and S∪S₂=S₁, S∩S₂={y=f₂(ρ)} set-theoretically.
Every number recomputed: 4π, 4π/3, difference 8π/3; washer radii 1±√y on the
correct y-range, annulus area 4π√y, ∫₀¹4π√y dy = 8π/3; shell integral
2π∫₀²x(2x−x²)dx = 8π/3, reached by **linearity**, not by applying [F1] to a
non-graph region.

### 5. `cor-unit-n-ball-volume-is-maximal-in-dimension-five` — CRITICAL 8 (batch 5)

A **uniqueness** claim resting on two rational bounds for π, so every comparison
must be strict and the bracket must be tight enough. Alpha recomputed both
Gregory–Leibniz partial sums as exact BigInt fractions: N=7 gives exactly
33976/45045 and N=18 gives exactly 133330680156299/166966608033225 — both match
the item byte for byte — with remainder signs positive and negative
respectively, so 3 < π < 16/5 strictly. The ratio law V_{n+2}/V_n = 2π/(n+2) was
re-derived from [F1] and [F3], and the bracket is **exactly** sufficient: the
even chain's turn needs π>3, the lower bound itself, and V₅>V₆ needs π<16/5, the
upper bound itself. Both are strict, so there is no tie and the maximum is
genuinely unique. Γ(7/2)=(15/8)√π and Γ(4)=6 confirmed, giving V₅=8π²/15 and
V₆=π³/6; an independent numerical sweep of V₁..V₁₀ puts the maximum at V₅.

### 6. `thm-groups-are-monadic-over-sets` — CRITICAL 8 (batch 9)

The tier is the induction at step 2.3, and this item was repaired at step 8
because the earlier text identified an unspecified isomorphism with the
comparison functor. Alpha checked the repaired argument move by move. The
splitting a(w) = a([x₁^ε])·a(tail) is licensed: μ_A of the two-letter word of
words returns w because w is reduced so nothing cancels at the junction, and
T(a) of it is reduced because both letters are positive. All three base cases
are discharged — empty word, [x] by the unit law, [x⁻¹] by definition. The three
axioms were **re-derived independently** rather than accepted: [[x,y],[z]] and
[[x],[y,z]] give associativity; [[],[x]] gives the unit law; and [[x⁻¹],[x]]
gives the inverse law, this last being the one place where cancellation inside
μ_A does real work, and it is used correctly. K is bijective on objects (2.2,
2.3) and on hom-sets (2.1), and "over Set" comes from [L3]'s cited defining
equation U^T K = U. [L1] is corroborating, not load-bearing — the proof
establishes the isomorphism directly.

## Decisions

| item | tier | disposition | new defect? |
|---|---|---|---|
| `ex-maximal-subgroups-as-frattini-hyperplanes` | high | `risk_review` complete | one nonfatal, recorded |
| `ex-orientation-reversal-preserves-area-and-negates-flux` | high | `risk_review` complete | none |
| `fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas` | high | `risk_review` complete | none |
| `ex-volume-of-a-solid-of-revolution-by-cylindrical-shells` | critical | `risk_review` complete | one nonfatal, recorded |
| `cor-unit-n-ball-volume-is-maximal-in-dimension-five` | critical | `risk_review` complete | none |
| `thm-groups-are-monadic-over-sets` | critical | `risk_review` complete | none |

**No new fatal defect.** All six step-8 repairs hold up under an independent
read, and in two cases (the shell/washer additivity restructuring and the
monadicity comparison-functor proof) Alpha re-derived the repair's mathematics
from scratch and confirms it closes the defect its ledger row names.

### The two nonfatal findings, and why neither was repaired

1. **`ex-maximal-subgroups-as-frattini-hyperplanes` [L2]** drops the cited
   corollary's "finite p-group P" hypothesis. Ledger `f17-riskrev-1-d1`.
2. **`ex-volume-of-a-solid-of-revolution-by-cylindrical-shells` [F1]** states
   only the volume formula, while step 1.1 also draws from it the cited
   theorem's "compact and Jordan measurable" conclusion. Ledger
   `f17-riskrev-1-d2`.

Both are Facts-block restatements that are shorter than the propositions they
cite; in both the cited item genuinely supplies what the step uses, so **no step
draws an unlicensed inference** and both sit well inside the 30-second
threshold. **Step 8 is fatal-only under R1**, and each is exactly the polish R1
withdraws: an edit would be a material rewrite under SCHEMA §3, voiding a frozen
verdict and buying a rejudge and a resampled refuter for a wording gap. Recorded
rather than repaired, which is the disposition the rule prescribes.

`introduced_at_stage` is `unknown` on both rows, honestly: the `pre-step8`
snapshot stores hashes and surfaces, not Facts-block text, so it cannot be
established from disk whether either shortening predates the step-8 repair.

## Corroborating refuters

Per `CLAUDE.md` (high/critical routes to an additional Alpha proof-refuter),
three read-only refuters were dispatched **after** all six dispositions were on
disk, grouped so no refuter reads across unrelated mathematics:

| label | items | result file |
|---|---|---|
| `rr-algebra` | `ex-maximal-subgroups-as-frattini-hyperplanes`, `thm-groups-are-monadic-over-sets` | `research/frontier-17-dispatch/refuter-rr-algebra.result.json` |
| `rr-surfaces` | `ex-orientation-reversal-...`, `fs-surface-area-is-the-supremum-...` | `research/frontier-17-dispatch/refuter-rr-surfaces.result.json` |
| `rr-volumes` | `ex-volume-of-a-solid-...`, `cor-unit-n-ball-volume-...` | `research/frontier-17-dispatch/refuter-rr-volumes.result.json` |

Each is `claude-opus-5[1m]`, `xhigh`, `--sandbox read-only` (tool allow list),
attested by `dispatch.mjs --dry-run --json`. Task files are
`research/frontier-17-alpha-riskrev-refuter-{algebra,surfaces,volumes}.task.md`.

## Refuter results — all three returned

All three completed inside the dispatch (310 s, 470 s, 505 s), each
`claude-opus-5[1m]`, `xhigh`, read-only, `exit 0`.

**No fatal defect in any of the six items. All six `risk_review` dispositions
corroborated; none contradicted.** Each refuter states it formed its own view
before reading Alpha's note — the brief instructed them to read the
`risk_review` last, and all three confirm they did.

Nine nonfatal findings across the three reports, every one adjudicated
`confirmed_nonfatal` from disk and recorded. Machine half:
`research/frontier-17-alpha-riskrev-1-findings.json`.

| finding | item | what | ledger |
|---|---|---|---|
| RR-SURF-1 | `ex-orientation-reversal-...` | `[L2]` restates 2 of the definition's 4 clauses, and step 1.1 uses it in the converse direction | `f17-riskrev-1-d3` |
| RR-SURF-2 | `ex-orientation-reversal-...` | Given declares the maps *on* `[0,1]²`, not on a neighbourhood; step 1.1 records only `det Dh = −1`, not the diffeomorphism hypotheses | `f17-riskrev-1-d4` |
| RR-ALG-1 | `ex-maximal-subgroups-...` | `[L2]` drops "finite p-group" — **independently corroborates** Alpha's own finding | `f17-riskrev-1-d1` |
| RR-ALG-2 | `ex-maximal-subgroups-...` | completeness rests on the unstated count of nonzero functionals on (Z/2)² | `f17-riskrev-1-d5` |
| RR-ALG-3 | `thm-groups-are-monadic-...` | `[L3]` omits `UᵀK = U`, `[L2]` omits "strict implies monadic"; step 3.1 uses both | `f17-riskrev-1-d6` |
| RR-ALG-4/5 | `thm-groups-are-monadic-...` | step 2.3 prints `a([x₁])` for `a([x₁^ε])`, mis-attributes the inverse base case to the unit law, and compresses four axiom instantiations without flagging the asymmetric one | `f17-riskrev-1-d7` |
| RR-VOL-1 | `cor-unit-n-ball-volume-...` | `[F2]` states the magnitude bound the proof never uses and omits the **sign** rule it does | `f17-riskrev-1-d8` |
| RR-VOL-2 | `ex-volume-of-a-solid-...` | `[F1]` omits the measurability conclusion — **independently corroborates** Alpha's own finding | `f17-riskrev-1-d2` |

### What the refuters found that Alpha's own read did not

Worth stating plainly, because it is the argument for the pairing rather than
for either read alone.

**RR-VOL-1 is the real one.** Alpha verified both Gregory–Leibniz remainder
**signs** mathematically and got them right — but did not notice that the
`[F2]` line never states the sign rule, restating only the magnitude bound
`|R_N| ≤ 1/(2N+3)`, which step 1.1 never uses. The refuter's demonstration is
sharp: from the magnitude bound alone, N=7 gives only π ≳ 2.78 and N=18 only
π ≲ 3.297 — neither of the two inequalities the proof needs. The inference is
licensed anyway, because the cited theorem defines
`R_N := (−1)^{N+1}∫₀¹ x^{2N+2}/(1+x²)dx` and so fixes the sign; Alpha confirmed
that from disk. Nonfatal, but Alpha had recorded the strictly weaker analogue
on the shells item while missing this one — an asymmetry the refuter named.

**RR-ALG-3** is a second Facts-line omission Alpha did not flag, and **RR-ALG-2**
sharpens Alpha's completeness argument by pointing out that the functional count
carrying it is nowhere written in the item.

Three findings ran the other way — RR-ALG-1, RR-VOL-2 and RR-SURF-1 reproduce,
independently, points Alpha had already recorded, two of them as ledger rows
written before the refuters were dispatched.

### Why none of the nine was repaired

Every one is a Facts-block restatement shorter than the proposition it cites, an
unwritten hypothesis that in fact holds, or a notational compression — and in
every case the **cited item genuinely supplies what the step uses**, so no step
draws an unlicensed inference and each closes well inside 30 seconds. **Step 8
is fatal-only under R1**: an edit would be a material rewrite under SCHEMA §3,
voiding a frozen verdict and buying a rejudge and a resampled refuter for
wording. Recorded, not repaired.

Every refuter also ran the boundary instantiation the brief demands and reported
its own coverage. Two coverage limits are stated honestly and neither affects a
disposition: `rr-algebra` did not fetch the two `references` PDFs, so it
confirms the mathematics is standard and correctly stated but not the specific
locator numbers; `rr-surfaces` did not descend past the first dependency layer,
having challenged nothing at the second.

## Gate state on exit

| gate | exit |
|---|---|
| `boundary-audit --fail-on-contradicted --fail-on-template` | 0 |
| `citation-fidelity --fail-on-missing-quote` | 0 |
| `gate-liveness --min-checks 1` | 0 |
| `risk-report --require-reviewed` | **0** (was 1 on entry) |
| `proof-contract --strict` | 0 (381/381; 1 pre-existing `shotgun-bracket` warning on another item) |
| `defect-ledger check` | 0 (316 rows for this run) |
| `step8-guard --baseline pre-step8` | 0 — **48/48 unchanged**, no item was edited this round |

## Files changed

- `research/frontier-17-batch-1.proof-contracts.json` — 1 `risk_review`.
- `research/frontier-17-batch-4.proof-contracts.json` — 2 `risk_review`.
- `research/frontier-17-batch-5.proof-contracts.json` — 2 `risk_review`.
- `research/frontier-17-batch-9.proof-contracts.json` — 1 `risk_review`.
- `research/frontier-17-proof-contracts.json` — re-merged (272 → 278 blocks).
- `research/defect-ledger.jsonl` + `research/DEFECT-LEDGER.md` — 8 rows
  (`f17-riskrev-1-d1` … `-d8`), view re-rendered in the same invocation.
- `research/frontier-17-alpha-riskrev-1-findings.json` — 9 adjudicated findings.
- `research/frontier-17-alpha-riskrev-refuter-{algebra,surfaces,volumes}.task.md`.
- **No `items/` file was touched.**

## Left open, and what to carry to step 10

1. **Eight nonfatal citation-precision rows are recorded and unrepaired**, by
   R1's design. They are step-6 work that step 8 cannot do. If the level ever
   reopens before publication, `f17-riskrev-1-d8` (the `[F2]` sign omission) is
   the one to fix first: it is the only one where the Facts line states the part
   the proof does not use and omits the part it does.
2. **The `frontier-14`-shaped observation.** Six items were routed here *because*
   step 8 repaired them; every one survived an independent read. That is
   evidence the step-8 repairs were sound, and it belongs in the step-10 report
   as an outcome, not as a rate.
3. Round 1's `finite-smoke` caveat is unchanged: 3 of 381 items, correct under
   the selective rule, thin because six of the ten registry checks are
   graph/poset/recurrence shaped and this level is not.
4. `proof-contract --strict` carries one pre-existing `shotgun-bracket` warning
   on `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`
   (3.3 cites 4 of 5 declared facts while two steps cite none). Not this
   dispatch's gate, not licensed for an edit at step 8, and recorded here so it
   is not rediscovered.
