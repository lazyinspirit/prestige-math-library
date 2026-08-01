# Frontier 7 Alpha Step 4 propagation report

Date: 2026-08-01

Role: Alpha-frontier7, Step 4 only. This pass applied the approved batch-note
amendments to higher-level prose scaffolds as their single writer. It did not
author or modify items or library pages, alter the already-spliced machine
scaffold, edit manifests or proof contracts, audit or judge mathematical
content, publish, commit, or push.

## Propagation ledger

| source decision | prose target | exact disposition |
|---|---|---|
| Batch 1 §1.1; Step-3 normal-subgroup expansion | `research/plan-algebra-track.md`, AA-3 | Replaced the matching old block with the approved order-34 normal-subgroup/quotient scaffold. The replacement includes normal closure, centre and commutator results, both directions of coset-product well-definedness, quotient laws, projection/order/abelian-quotient results, the on-spine identification of $(\mathbb Z/n,+)$ with $(\mathbb Z,+)/n\mathbb Z$ including $n=0,1$, the five B examples, and the convention/justification traps. |
| Batch 1 §1.2; Step-3 Euler/Hamilton corrections | `research/plan-combinatorics-and-categories.md`, GT-3 | Replaced the matching old block with the approved order-211 scaffold. It now states the zero-or-two odd-degree Euler-trail criterion, Dirac condition implies Ore condition, the directed and loop conventions, the Hierholzer/Bondy–Chvátal/tournament decomposition, Camion for order at least three, bounded B witnesses, and the explicit Petersen deferral; the unsafe false-statement prompts are gone. |
| Batch 2 §1.1; Step-3 logarithm/power corrections | `research/plan-realanalysis-pages.md`, RA-27 | Replaced the matching old construction paragraph. The rational supremum is restricted to $a>1$, subunit bases use reciprocals, $a=1$ is separate, and Landau's limit uses the approved dyadic root $x^{1/2^n}$. |
| Batch 2 §1.2; Step-3 signed-product convention | `research/plan-realanalysis-pages.md`, RA-27 inheritance note | Appended the approved tail-log argument after the log-free-bounds sentence. It preserves finite initial zero factors, obtains eventual positivity from square summability, applies logarithms only on the tail, and invokes tail invariance. |
| Batch 2 §1.3; Step-3 no-convexity-import decision | `research/plan-realanalysis-pages.md`, RA-27 | Replaced the generic convexity phrase with the approved explicit two-point exponential inequality, its direct one-variable-calculus route, weighted AM–GM, and Young/Hölder/Minkowski for real exponents. No dependency on the concurrent `convexity` pair was introduced. |
| Batch 2 §1.4; Step-3 analytic-pi proof order | `research/plan-realanalysis-pages.md`, RA-28 | Inserted the approved binding order from series convergence and ODE uniqueness through addition formulas, alternating bounds, the first cosine zero, $\pi=2\gamma$, the later first-sine-zero reconciliation, and the analytic $\sin x/x$ limit. |
| Batch 2 §1.5; Step-3 explicit deferral | `items/rem-classical-oscillator-is-sine-of-one-over-x.md` | **Not applied.** Step 3 deferred this published orientation/forward-reference change until a publish-authorized scope change. The item remains untouched and the exact proposal remains preserved in the batch note. |
| Batch 3 §2.1; Step-3 convexity expansion | `research/plan-realanalysis-pages.md`, RA-17 and its scope note | Replaced the matching inventory with the approved three-slope, local-regularity, one-sided-derivative, supporting-line, differentiability, derivative-characterisation, Jensen/minimizer, and inflection development and its nonduplicative B examples. Appended the approved dyadic-convention and Hamel-witness dependency amendment. |
| Batch 3 §2.2; Step-3 total-derivative repair | `research/plan-realanalysis-pages.md`, RA-34 | Replaced the matching A/B prose with the approved native Euclidean linear-map seam, matrix/boundedness and total-derivative chain, convex-domain mean-value/constancy scope, sourced directional-derivative witness, nonduplicative examples, generated disconnected-domain witness, and angle-example deferral. |
| Batch 4 §1.1; Step-3 Tychonoff/Stone–Čech split | `research/plan-topology-track.md`, T7 | Inserted the approved page-271 paragraph after the exact CEX anchor. It separates cube embedding, compactification under the ultrafilter lemma, and the universal-property route with dependent choice, and records the companion scope and omitted machinery. |
| Batch 4 §1.2; Step-3 metrization expansion | `research/plan-topology-track.md`, T8b | Replaced the matching old block with the approved definitions, compatible-normal-sequence lemma, Nagata–Smirnov/Bing/Urysohn/Smirnov routes, explicit Choice sufficiency, separate regularity and $T_1$ hypotheses, basis-merger obligation, and revised witnesses. |

Every approved prose target existed with the source text recorded in its batch
note. There were no source-text mismatches and no amendment was generalized
beyond its approved wording. The one unapplied proposal is exactly the
published oscillator change that Step 3 explicitly deferred.

## Machine-scaffold reconciliation observed

The orchestrator had already spliced and validated `research/plan-spec.json`.
Alpha made no change to it. Its current A-page orders are 34, 157, 177, 179,
211, 229, 271, and 275 for the eight selected pairs. In particular,
`tychonoff-embedding-and-stone-cech` already declares
`hereditary-and-productive-separation` together with
`urysohn-lemma-and-tietze` and `nets-and-filters`, so the Step-3 prerequisite
addition is present structurally without an Alpha machine-scaffold edit.

## Verification and touched paths

- `git diff --check`: pass.
- The published oscillator item has no diff.
- No proof precheck, content audit, or judge was run at this prose-only stage.

Alpha-touched paths:

- `research/plan-algebra-track.md`
- `research/plan-combinatorics-and-categories.md`
- `research/plan-realanalysis-pages.md`
- `research/plan-topology-track.md`
- `research/frontier-7-alpha.md`

## Frontier 7 Alpha Step 6 checkpoint and audit report

Date: 2026-08-01  
Substage: complete; ready for the separate Step-7 judge stage.

### Scope, readers, and dependency audit

Two independent read-only proof readers covered the whole in-flight frontier.
The batch-1/2 reader covered 106 items, 8 pages, 309 derivations, 87 proof
contracts, and 353 citations; the batch-3/4 reader covered 79 items, 8 pages,
182 derivations, 61 proof contracts, and 129 citations. Thus all 185 scoped
items, including every high/critical item, received independent-reader coverage.

Alpha opened and checked every published-backward dependency against its on-disk
Statement/Definition, hypotheses, and direction. The initial 394 uses were
split B1 94 / B2 111 / B3 82 / B4 107. Repairs added eleven net uses; the final
manifest records all 405 (B1 94 / B2 111 / B3 82 / B4 118), plus 302 same-batch
edges, with no cross-batch or unresolved edge. The additional cardinal-bridge,
Cantor-set, rational-density, and interval-factor sources were checked after
the repair; the final manifest is
`research/frontier-7-audit-manifest.json`.

### Fatal dispositions

| finding | disposition |
|---|---|
| Empty separating family was said to work on a singleton | Repaired `def-unit-interval-function-family-separates-points-from-closed-sets`: it works exactly for the empty space. |
| Stone--Cech proof cited generic compactification existence for a particular evaluation closure | Repaired the compactification corollary, the Stone--Cech contract, and the bounded-functions example to state/cite the full evaluation closure and interval compact-Hausdorff facts. |
| Local compatible-normal-sequence construction was invalid | Replaced it by the source-backed `rem-sigma-locally-finite-base-produces-compatible-normal-sequence`, `proved_here: false`, with exact source, failed route, and necessity. Nagata--Smirnov visibly depends on it. |
| Local sigma-discrete-basis construction was invalid | Replaced it by the source-backed `rem-metric-spaces-have-sigma-discrete-bases`, `proved_here: false`, with exact source, failed route, and necessity. Bing visibly depends on it. |
| Niemytzki cardinal comparison and its unsupported Tychonoff assertion | Repaired `ex-niemytzki-plane-metrization-profile` with a local continuum/powerset Cantor--Schröder--Bernstein bridge (using only A/published sources) and an explicit tangent-disk bump-function proof of complete regularity and $T_1$. |

No false local proof remains in either metrization fallback. The external
fallbacks are `rem-` items with no fictitious dependencies or proof section;
the batch manifest, page, exact citation facts, and rendered dependency chain
all use the renamed IDs.

### Deferred nonfatal reader observations

No B1/B2 bridge was repaired: the sine/cosine source wording, tangent/cotangent
quarter-turn citation, coset-multiplication formula citation, and hyperbolic
zero wording are each 30-second closable gaps. The B3/B4 one-sided-convex
endpoint wording and gradient-equality presentation omission are the same
nonfatal class. They are recorded rather than broadened into a rewrite.

### Contracts, impact, and gates

- The batch contracts and merged
  `research/frontier-7-proof-contracts.json` were refreshed: 146 proof-bearing
  items are strict-clean. All high/critical risk reviews are marked complete by
  Alpha; the two external remarks correctly have no proof contract.
- `research/frontier-7-impact-audit.json` is a passing receipt for 11 changed
  public interfaces and all 12 affected consumers, each with a concrete
  disposition.
- `research/frontier-7-touches.json` has a snapshot after every item-changing
  stage, including `step-6 Alpha final gate repairs`. The mechanical ledger has
  five twice-or-more touched records requiring the orchestrator's personal
  attention: `ex-niemytzki-plane-metrization-profile` (3), the two pre-rename
  lemma records (2 each), `thm-nagata-smirnov-metrization` (2), and
  `thm-bing-metrization` (2). The two `lem-` records were renamed to the listed
  `rem-` fallbacks as part of the repair; no stale consumer remains.
- Full final gates passed: whole-corpus precheck (1,868 checked), depcheck,
  fwdcheck, extcheck, citecheck (warnings only), rendercheck, validate-plan,
  depsource, all-batch content policy (185 scoped, 0 errors), B4 and merged
  strict proof-contract (24/24 and 146/146), finite-smoke (0 checks), reviewed
  risk report, impact receipt, audit manifest, and `git diff --check`.

### Owned artifacts and handoff constraint

Alpha owns the updated Step-6 report, audit manifest, proof-contracts, impact
receipt, touch ledger, and batch-4 notes. No judge was run and no publication,
commit, or push was attempted. The exact next action is the orchestrator's
separate Step-7 judge workflow, including its required personal review of the
five twice-touched ledger records; do not modify the audited items before that
stage without taking another touch snapshot and reopening this audit.

### Post-Step-6 personal-escalation freeze

The orchestrator's post-audit review found two malformed control sequences in
step 1.2 of `ex-niemytzki-plane-metrization-profile`: `$mathbb Q` and
`$mathcal P`. Both are corrected to `\mathbb Q` and `\mathcal P` within their
math spans. The snapshot `step-6 Alpha post-escalation typography repair`
records that exact item repair.

The same review required a source-convention check on
`rem-sigma-locally-finite-base-produces-compatible-normal-sequence`. Alpha
opened the cited Umeå full text. Its Definitions 2.2.3 and 2.2.7 define
regularity only for Fréchet ($T_1$) spaces. The fallback's title, Statement,
exact-statement record, page/plan record, citation contract, and Nagata--Smirnov
fact now say **regular $T_1$** explicitly; this is a faithful narrowing, not a
new theorem. The snapshot `step-6 Alpha post-escalation source-convention
repair` records it.

The revised frozen state passes scoped precheck (Niemytzki and Nagata--Smirnov),
depcheck, all-batch content policy, B4 and merged strict proof-contract checks,
citecheck, rendercheck, validate-plan, fwdcheck, extcheck, regenerated audit
manifest (405 published-backward / 302 same-batch), and `git diff --check`.
The refreshed impact receipt again closes 11 changed interfaces and 12 affected
consumers. No judge, publication, commit, or push occurred. The next action
remains the separate Step-7 judge workflow; this checkpoint is frozen pending
that stage.

## Frontier 7 Step 8 adjudication checkpoint

Date: 2026-08-01  
Substage: rejection adjudication in progress; no active or new judge calls.

I have read the current disk text, declared dependencies, and model reasons for
the complete rejection set: 145 unique model/context adjudications (the raw log
contains one exact duplicate). The majority are either faithful routine inferences
or 30-second citation/presentation omissions; the ledger will retain one
model-keyed decision for every rejection rather than treating model agreement
as evidence. The genuinely material candidates are the malformed compatible-
cover-chain metric construction, the invalid local-finiteness merger proof,
the overly permissive inflection definition, the hyperbolic-domain circularity
and range wording, the free integer in the sine/cosine zero-set statement, and
several short but real proof defects (including the oscillator energy
derivative and zero-direction case for total derivatives).

No item text, contract, manifest, impact receipt, or touch snapshot has yet
been changed in this substage. The next action is to write the full
`frontier-7-judge-adjudications.jsonl` ledger, then make only the confirmed
fatal repairs (plus narrowly chosen presentation repairs), snapshot them, and
refresh the scoped evidence artifacts before requesting the exact paired
rejudge IDs.

## Frontier 7 Step 8 adjudication completion

Date: 2026-08-01  
Substage: complete; no new judge call, publication, commit, or push was made.

### Adjudication ledger

`research/frontier-7-judge-adjudications.jsonl` contains a decision keyed by
`{id, model, context_sha256}` for each of the 145 unique rejection candidates.
The raw judge log had 146 rejection rows because one Terra row was an exact
duplicate. The dispositions are 13 `confirmed_fatal`, 82
`confirmed_nonfatal`, and 50 `false_positive`; all 13 fatal dispositions are
`logic` defects. The model-specific totals are:

| Model | Fatal | Nonfatal | False positive |
|---|---:|---:|---:|
| DeepSeek | 6 | 26 | 20 |
| Terra | 7 | 56 | 30 |

`research/frontier-7-judge-effectiveness.json` records the resulting fatal
confirmation rates (DeepSeek 6/52; Terra 7/93). This is a precision summary
of adjudicated rejections, not a recall estimate.

### Confirmed-fatal repairs

The following seven item IDs changed:

- `def-inflection-point-by-change-of-convexity`
- `def-hyperbolic-functions`
- `thm-hyperbolic-identities-and-derivatives`
- `cor-trigonometric-parity-and-pythagorean-identity`
- `thm-sine-cosine-zero-sets-and-fundamental-period`
- `thm-convex-functions-are-differentiable-off-a-countable-set`
- `lem-alexandroff-urysohn-metrization-lemma`

The repairs respectively rule out constant-function false inflections; make
the hyperbolic nonzero argument non-circular; restrict cosh strict increase to
its nonnegative half-line; prove Pythagoras before using it for parity; bind
the integer in each trigonometric zero set existentially; supply the missing
convex one-sided-limit argument; and make the compatible-cover chain distance
well-defined even when no chain exists.

Snapshots `step-8 Alpha confirmed-fatal adjudication repairs`, `step-8 Alpha
proof reflow and contract refresh`, and `step-8 canonical proof-label repairs`
and `step-8 hyperbolic zero justification` record every item-changing stage.
The Step-8 impact receipt covers five public interfaces and all eight affected
consumers with explicit dispositions.

### Refreshed evidence and required next action

The batch contracts and merged `research/frontier-7-proof-contracts.json` are
strict-clean (146/146). The audit manifest, impact receipt, and effectiveness
record are current. Scoped gates passed: precheck for all repaired proof items,
depcheck, fwdcheck, extcheck, citecheck (legacy heuristic warnings only),
rendercheck, validate-plan, depsource, all-batch content policy (185 scoped,
0 errors), finite-smoke, reviewed risk report, impact audit, audit manifest,
and `git diff --check`.

Because these seven items have new content hashes, the exact paired rejudge
targets are each changed ID with both `deepseek-v4-pro` and
`gpt-5.6-terra` (14 target item/model pairs). The orchestrator must freeze the
new contexts and obtain both lanes before a current-context coverage receipt
can pass.

## Frontier 7 Step 8 paired-rejudge repair addendum

Date: 2026-08-01  
Substage: current-rejection adjudication and repair complete; no new judge
call, publication, commit, or push was made by Alpha.

The five current rejection records were adjudicated against their frozen disk
contexts and all are `confirmed_fatal` / `dependency_citation`:

- both models on `thm-hyperbolic-identities-and-derivatives`;
- both models on `thm-sine-cosine-zero-sets-and-fundamental-period`; and
- Terra on `cor-trigonometric-parity-and-pythagorean-identity`.

The resulting ledger has 153 raw rejection rows, 152 unique
model/context candidates (one transport duplicate), and current adjudication
coverage of 54/55 DeepSeek and 96/97 Terra candidates. Fatal totals are 8/54
for DeepSeek and 10/96 for Terra; the corresponding confirmation rates in
`research/frontier-7-judge-effectiveness.json` are 0.14814814814814814 and
0.10416666666666667. The two outstanding candidates are not in this current
rejection set.

### Repaired proof obligations and escalation review

Only these three items changed in this addendum:

- `thm-hyperbolic-identities-and-derivatives` now states the full
  closed-interval/positive-derivative MVT condition, cites its continuity
  source before all MVT/IVT applications, and cites the nonzero quotient-domain
  facts at reciprocal differentiation. The repeated-proof local and dependency
  review checked `def-hyperbolic-functions`,
  `cor-differentiable-implies-continuous`, `cor-mean-value-theorem`, and the
  derivative algebra source.
- `thm-sine-cosine-zero-sets-and-fundamental-period` now uses natural induction
  only, derives the negative shifts by substituting `x-n\\pi`, and cites the
  integer representation and integer-power laws for the negative case. The
  local/dependency review checked `thm-induction-principle`,
  `def-integer-power`, `lem-power-laws`, and `lem-integer-part`.
- `cor-trigonometric-parity-and-pythagorean-identity` now makes the
  differentiability-to-continuity step explicit before applying the
  zero-derivative theorem. Its local/dependency review checked the continuity
  corollary and the exact continuity hypothesis of
  `cor-zero-derivative-implies-constant`.

Snapshot `step-8 paired-rejudge dependency repairs` is the fourteenth touch
snapshot. The fifteenth, `step-8 sine integer-decomposition clarification`,
records the wording correction from “negative of one” to “negative of a natural
number”; the sixteenth, `step-8 sine statement render normalization`, collapses
the Statement display to one source line for the renderer. The ledger reports
nine items touched more than once; the repeated hyperbolic theorem received the
local/dependency escalation just described. The refreshed Step-8 impact receipt
closes six changed public interfaces and all 13 affected consumers with concrete
dispositions.

### Verification and exact next rejudge set

The three changed items pass scoped precheck. The refreshed merged contract is
strict-clean (146/146); `depcheck`, `fwdcheck`, `extcheck`, `citecheck`,
`rendercheck`, `validate-plan`, `depsource`, all-batch content policy
(185 scoped, 0 errors), finite smoke, reviewed risk routing, impact audit,
regenerated audit manifest (409 published-backward / 302 same-batch), and
`git diff --check` all pass.

The next action is precisely these six frozen-context paired rejudges:

- `thm-hyperbolic-identities-and-derivatives` × `deepseek-v4-pro`,
  `gpt-5.6-terra`;
- `thm-sine-cosine-zero-sets-and-fundamental-period` × `deepseek-v4-pro`,
  `gpt-5.6-terra`; and
- `cor-trigonometric-parity-and-pythagorean-identity` × `deepseek-v4-pro`,
  `gpt-5.6-terra`.

No broader judge sweep is authorized by this addendum.

## Frontier 7 Step 8 third paired-rejudge repair addendum

Date: 2026-08-01  
Substage: current-rejection adjudication and repair complete; no new judge
call, publication, commit, or push was made by Alpha.

The current frozen-context rejections are confirmed fatal
`dependency_citation` defects:

- both DeepSeek and Terra rejected
  `thm-hyperbolic-identities-and-derivatives` on context
  `c031a6d605b49ab6a6816e7a59843bc2da287dbaa345c8c34c7b26ef2a3cb2a1`;
- Terra rejected `cor-trigonometric-parity-and-pythagorean-identity` on context
  `8f11a13b6c8273f2205a20dab34af82ca491ddfa2ca0e2445934414b835f3bca`;
  DeepSeek passed that same context; and
- both models passed the current sine zero-set theorem on context
  `644228cc55d2843ed34ddab78fc7edfe3b4ca01716ddc2eca1a3ddd9768270cc`,
  so it needs no further repair or rejudge.

Only the first two items changed. The hyperbolic Fact L3 now states the exact
mean-value equation, including its interval hypotheses; steps 2.1 and 3.1 then
apply that equation on arbitrary intervals and derive the positive increments
inline. This repeatedly repaired proof received another local/dependency review
of `cor-mean-value-theorem`, `cor-differentiable-implies-continuous`,
`def-hyperbolic-functions`, and the derivative source. The trigonometric
corollary’s Fact L1 now states both all-real addition formulas explicitly, and
its dependency review checked the cited statement against the two equations in
step 3.1. These are citation-fidelity repairs, not a change of mathematical
claim.

The adjudication ledger and effectiveness receipt are current at 156 raw
rejection rows / 155 unique model-context candidates. DeepSeek has 9 confirmed
fatal findings among 55 adjudicated candidates; Terra has 12 among 98. Snapshot
`step-8 third paired-rejudge citation-fidelity repairs` is the seventeenth
touch snapshot. The impact receipt remains passing for six changed public
interfaces and all 13 affected consumers. Scoped precheck, strict proof
contracts (146/146), the regenerated audit manifest, dep/fwd/ext/cite/render
checks, plan/dependency-source checks, content policy (185/0), finite smoke,
risk routing, impact audit, and `git diff --check` all pass.

The exact further paired rejudge set is four item/model pairs:

- `thm-hyperbolic-identities-and-derivatives` × `deepseek-v4-pro`,
  `gpt-5.6-terra`; and
- `cor-trigonometric-parity-and-pythagorean-identity` × `deepseek-v4-pro`,
  `gpt-5.6-terra`.

No other item was modified or is selected for rejudge.

## Frontier 7 Step 8 fourth paired-rejudge repair addendum

Date: 2026-08-01  
Substage: current-rejection adjudication and repair complete; no new judge
call, publication, commit, or push was made by Alpha.

Both current rejections of `thm-hyperbolic-identities-and-derivatives` on
frozen context `95f16438cc8e909786ac079def7fc7466d4b679527ad4b351a95ace392aea5bd`
are confirmed fatal `dependency_citation` defects. Terra correctly noted that
steps 1.1 and 1.2 used the hyperbolic exponential definitions while citing only
exponential laws and derivative rules. DeepSeek correctly noted that the
reciprocal-derivative simplification uses the identity established in step 1.1
without tagging that step.

No other item changed. The theorem's Fact L6 now faithfully records all six
defining formulas as well as the established quotient domains; step 1.1 cites
it for the exponential substitutions, and step 2.1 cites both it and step 1.1
for the derivative calculation and simplification. The precheck-required phase
reflow makes the dependency order explicit: 1.1; 2.1--2.2; 3.1; 4.1; 5.1. The
matching proof-contract has the exact definition clause and complete input map.
This repeatedly repaired proof again received a local/dependency review of
`def-hyperbolic-functions`, the derivative rules, the MVT, the continuity
corollary, and the intermediate value theorem.

Snapshot `step-8 fourth paired-rejudge hyperbolic definition-and-tag repairs`
is the eighteenth touch snapshot. The impact receipt remains passing for six
changed public interfaces and all 13 affected consumers. The current
effectiveness receipt has 158 raw rejection rows / 157 unique model-context
candidates: 10 confirmed fatal findings among 56 adjudicated DeepSeek
candidates, and 13 among 99 adjudicated Terra candidates. Scoped precheck,
strict proof contracts (146/146), regenerated audit manifest, dep/fwd/ext/cite/
render checks, plan/dependency-source checks, content policy (185/0), finite
smoke, risk routing, impact audit, and `git diff --check` all pass.

The exact further paired rejudge instruction is only:

- `thm-hyperbolic-identities-and-derivatives` × `deepseek-v4-pro` and
  `gpt-5.6-terra`.

No other item is selected for rejudge or mutation.

## Frontier 7 Step 8 final adjudication and coverage closure

Date: 2026-08-01  
Substage: final paired-rejudge bookkeeping, independent spine reading, and
current-context coverage verification. No mathematical item was changed, and no
publication, commit, or push was made by Alpha.

The final targeted rejudge of
`thm-hyperbolic-identities-and-derivatives` is a paired PASS on the identical
current context hash
`079a82e3724e5ecb9e352e6cfa9931e57e2baeeef8923ff69a7eaf21a02ba9a7` for
both DeepSeek and Terra. There is consequently no current rejection and no
further repair or rejudge is selected.

The previously missing historical adjudications were completed for the original
`lem-alexandroff-urysohn-metrization-lemma` rejections on context
`b5653d44be86d757a0ab1829eec821276a4106a8f9dd2828e19df225ced4ff18`:
both are `confirmed_fatal` / `logic`, matching the already recorded repair.
`judge-compare` now reports `status: complete`: 158 raw rejection rows, 157
unique model-context candidates, and one exact duplicate ignored. DeepSeek has
57/57 adjudicated candidates (11 fatal: 7 logic, 4 dependency/citation; 26
nonfatal; 20 false positives; fatal-confirmation rate
0.19298245614035087). Terra has 100/100 (14 fatal: 8 logic, 6
dependency/citation; 56 nonfatal; 30 false positives; rate 0.14).

Closure receipts are now present and current. The dependency-spine receipt
`research/frontier-7-dependency-spine-audit.json` covers the 67 proof-bearing
items among the top 100 transitive-consumer cones (scope hash
`5722d96e58f5c9ddb74532a1ef057ca2bd5a7b4ca6d3934d88d1cc81ec7f0012`);
Alpha independently read every scoped proof and recorded an item-level note.
The level-coverage receipt
`research/frontier-7-audit-coverage.json` records the 185-item / 143-proof
scope, the manifest hash
`aec740e5bfb1139d57848eef6bd4508fe92fb9c5f063524fe2a92893605810d3`, and
concrete reasons for all 30 planned-vs-final dependency drifts. The exact
`level-coverage.mjs --verify-current-context` gate passed with these receipts,
the merged strict proof contracts, and the judge ledger. The independent spine
read found no new fatal mathematical defect; its observations do not replace a
fresh model verdict.

The final closure is evidence-led: complete adjudication, a current paired PASS
for the only pending repair target, and passing current-context coverage. It
does not claim recall beyond the rejection candidates or semantic certainty from
structural gates.
