# frontier-14 — step 8, fatal-only adjudication of the paired-judge verdicts

Lead Alpha (Claude Opus 5, `xhigh`, 1M). Baseline snapshot `pre-step8` taken
before any adjudication: 4984 items.

## The rejection corpus

| | |
|---|---|
| judged items | 338 (9 A/B pairs) |
| verdict rows | 676 (338 × 2 lanes) |
| rejections | **226** — Terra 124, DeepSeek 102 |
| distinct rejected items | **150** |
| rejected by **both** lanes | 76 |

Rejection rate 33% (Terra 37%, DeepSeek 30%). Consistent with prior runs, where
a comparable rate resolved to a low single-digit confirmed-fatal fraction; the
rate is not the finding, the outcomes are.

## Two verification facts established before adjudicating

**1. No text drifted between judging and adjudication.** A first comparison of
the ledger's `item_sha256` against `tools/item-hash.mjs` showed all 226
rejections "drifted", which would have meant every judged item was rewritten
after its verdict. It is an artefact of two deliberately different
normalizations, not drift:

- `judge.mts` / `apply-judge-stamps.mjs` strip only the `  judge:` sub-block;
- `item-hash.mjs` (used by `touchlog` and `step8-guard`) strips the whole
  `verification:` block.

Recomputed under the judge's own normalization: **0 of 226 drifted**, and 0 of
all 338 judged items. The frozen verdicts are live against the text on disk.

**Consequence for this ledger:** `step8-guard` compares an adjudication's
`item_sha256` (via `shortHash`) against `touchlog` snapshot hashes, which are
`itemContentHash`. Every row below therefore carries the **`itemContentHash`**
of the pre-edit text, not the judge ledger's hash. The 150 pre-edit hashes were
frozen to `research/frontier-14-step8-preedit-hashes.json` before any edit and
verified equal to the `pre-step8` snapshot (0 mismatches).

**2. Autopilot note, not a step-8 defect.** The engine entered `8-adjudicate` at
01:44:43Z and dispatched this Alpha, but `7-judge` is still re-dispatching
`judge-sweep` (attempt 37 at 01:53Z), each exiting 0 without appending a row.
The ledger has been stable at 676 rows throughout. It is a spinning stage-exit
condition, harmless to this stage — flagged for the owner, not fixed here.

## Method

The corpus splits sharply. The dominant class is *"step 2.1 uses X but no cited
fact states X"* where X is true and standard — the 30-second class, nonfatal by
the owner's rule. The minority class alleges a **false Statement, an overstated
title, or a missing hypothesis**, which the 30-second rule explicitly does not
cover ("a defect in the Statement itself is never 30-second").

- The lead Alpha read every high-risk item on disk personally.
- Eight read-only proof-refuters (Sol, `xhigh`, 1M, `--sandbox read-only`) were
  dispatched over **all 226 rejections** grouped by A/B pair, tasked to sort
  each into `FALSE` / `CITATION-GAP` / `WRONG` and to open every dependency
  file. They supply evidence only; Alpha adjudicates every row from disk.

---

## Confirmed fatal (decided; repairs applied below)

Numbered stably. `[T]` = Terra, `[D]` = DeepSeek.

### F1 · `def-cyclic-subspace-vector-and-vector-annihilator` [T+D] — `other`

The definition asserts: *"Finite dimensionality is required for $m_{T,v}$ to
exist and is not a convenience."* That is false. Both lanes gave the same
counterexample independently: on an infinite-dimensional $V$ with $T=0$ and
$v\ne0$, $p(T)v=a_0v$, so $\operatorname{Ann}_T(v)=\{p:p(0)=0\}=(x)$, with monic
generator $x$. The witness the item does supply (the shift $T e_n=e_{n+1}$)
shows only that the ideal *can* be zero, which is not the necessity claimed.

A false claim in a Definition is a Statement defect, outside the 30-second rule.

### F2 · `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` [T+D] — `logic`

Title, Statement and step 3.1 all assert the isomorphism needs the
**inverse-path convention**. With the library's own traversal-order product —
which `[F2]` declares makes monodromy a **right** action — the direct assignment
is already a homomorphism, and inserting the reversal produces an
antihomomorphism. Verified from the item's own facts:

A deck transformation $h$ satisfies $h(x\cdot g)=h(x)\cdot g$, because
$h\circ\tilde\alpha$ is a lift of $\alpha$ starting at $h(x)$ and lifts are
unique. Hence for $h_a$ defined by $h_a(e)=e\cdot a$,
$$(h_a\circ h_b)(e)=h_a(e\cdot b)=h_a(e)\cdot b=(e\cdot a)\cdot b=e\cdot(ab)=h_{ab}(e),$$
and `[F4]` (two deck transformations agreeing at a point are equal) gives
$h_a\circ h_b=h_{ab}$. So $a\mapsto h_a$ is a homomorphism as it stands.

The conclusion "Deck $\cong\pi_1$" survives either way — every group is
isomorphic to its opposite via inversion — but the item names the *wrong map* as
the isomorphism, and step 3.1's stated reason is exactly inverted.

### F3 · `lem-simple-continued-fraction-convergents-and-cylinders` [T] — `other`

Statement hypothesis is *"Let $a_0\in\mathbb Z$ and $a_n\ge1$ for $n\ge1$"* —
$a_n\ge1$ does not say $a_n\in\mathbb Z$. The same Statement then asserts *"Both
endpoints of $J(a_0,\dots,a_n)$ are rational, being ratios of integers."* Terra's
counterexample stands: $a_0=0$, $a_1=\sqrt2$ gives $p_1=1$, $q_1=\sqrt2$, so
$p_1/q_1=1/\sqrt2$ is irrational. Missing hypothesis in the Statement; the
intended reading is integral, since `[F1]` builds $a_n=x_n+1$ from
$x\in\mathbb N^{\mathbb N}$.

### F4 · `cor-locally-compact-hausdorff-spaces-are-cech-complete` [T+D] — `other`

Statement is unconditional: *"Every locally compact Hausdorff space is
Čech-complete."* Step 2.1 invokes `[F4]`, whose own text opens **"Assume the
Axiom of Dependent Choice"**, to supply the Tychonoff hypothesis that `[F1]`
requires. Missing choice scope in the Statement, on a page that declares choice
principles item by item.

### F5 · `def-covering-space-action` [T+D] — `other`

The definition requires only that each $e$ have an open $U$ with $gU\cap
U=\varnothing$ for $g\ne1$. It cites `def-group-action`, which is confirmed on
disk to be an action **on a set** ("let $G$ be a group … and let $X$ be a
set"), so nothing requires $g$ to act continuously, let alone by a
homeomorphism. Then $gU$ need not be open and
`thm-orbit-map-of-a-covering-space-action-is-a-covering` loses the openness and
sheet-homeomorphism it needs. The definition already cites
`def-homeomorphism-and-open-maps` without ever using it — evidence the clause
was intended and dropped. Standard sources (Hatcher §1.3) carry "acts by
homeomorphisms".

### F6 · `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints` [T+D] — `other`

Title: *"GAFT recovers the published free-group and abelianisation
adjunctions."* The item's own Statement says the opposite for the second branch:
*"That second assembly uses only [thm-a-left-adjoint-exists-…] and **not** the
GAFT functor form."* Step 3.1 says the same. The title asserts more than the
proof gives, and the Statement contradicts it.

### F7 · `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` [D] — `other`

Title: *"The lattice generated by distance functions is dense on every compact
metric space."* The Statement correctly defines $L$ as the smallest sublattice
containing **every constant function and** every $d_a$, and the proof uses
unitality at step 2.1 and `[L1]`. The title's literal claim is false: on a
one-point space the lattice generated by the distance functions alone is
$\{0\}$, which is not dense in $C(X,\mathbb R)\cong\mathbb R$. Titles render
standalone in search, page listings and flowchart nodes.

### F8 · `thm-circle-integrals-of-integer-monomials` [D] — `dependency_citation`

`[L3]` reads *"The complex exponential is entire with derivative itself and **is
additive under sums**."* The exponential is not additive; the cited
`thm-complex-exponential-addition-and-real-extension` states
$\exp(z+w)=\exp z\exp w$. A Fact block that prints a false sentence is not a
faithful shortening — CLAUDE.md forbids substituting a summary of what a clause
is "for". The proof's own use (step 2.2, $\exp(2\pi ik)=1$) is correct, so this
is a citation defect, not a broken proof.

---

## Repairs applied (fatal-licensed only)

Each is the minimal correction of the named fatal defect. `precheck` re-run on
all six proof-bearing items: 6 checked, 0 failing.

| # | item | what changed |
|---|---|---|
| F1 | `def-cyclic-subspace-vector-and-vector-annihilator` | The necessity sentence now says finite dimensionality is what *forces the ideal to be nonzero*, keeps the shift witness showing the ideal can vanish, and adds the $T=0$ witness showing it is **not** necessary. |
| F2 | `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` | Title drops "with the inverse-path convention"; Statement now says the direct assignment is the isomorphism and no reversal is inserted; step 3.1 replaced by the equivariance argument $h(x\cdot g)=h(x)\cdot g\Rightarrow h_a\circ h_b=h_{ab}$, closing on `[F4]`, and noting that inverse classes would give an antihomomorphism. |
| F3 | `lem-simple-continued-fraction-convergents-and-cylinders` | Hypothesis now reads $a_n\in\mathbb Z$ with $a_n\ge1$ for $n\ge1$. |
| F4 | `cor-locally-compact-hausdorff-spaces-are-cech-complete` | Statement opens "Assume the Axiom of Dependent Choice." |
| F5 | `def-covering-space-action` | Action is now **by homeomorphisms**, with a sentence saying the underlying set action alone would not make the translates $gU$ open — which makes the already-present `def-homeomorphism-and-open-maps` citation load-bearing. |
| F6 | `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints` | Title now names both routes: GAFT for the free-group branch, the comma-initial criterion for abelianisation. Id unchanged (ids are immutable). |
| F7 | `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` | Title now names the constants, matching the Statement's own definition of $L$. |
| F8 | `thm-circle-integrals-of-integer-monomials` | `[L3]` now states $\exp(z+w)=\exp z\exp w$ instead of "is additive under sums". |

**Rejudge set** — exactly these 8 ids. Every other judged item is untouched, so
its verdict pair stands on byte-identical text under `level-coverage`'s clause
(b).

---

## Outcome

| | |
|---|---|
| rejections adjudicated | **257** (226 at baseline + 31 arriving mid-stage, below) |
| `confirmed_fatal` | **38 rows, 25 distinct items** |
| `confirmed_nonfatal` | 210 |
| `false_positive` | 9 |
| items repaired | **23** — every one licensed, `step8-guard` green |
| fatal but **not** repaired | **2** — declared blockers, below |

Confirmed-fatal rate: 25 of 338 judged items (7.4%), from a 33% rejection rate.
The rate was again not the finding.

All eight refuter reports returned. Their independent classification of the same
226 rejections: **43 `FALSE`**, 12 `WRONG` (judge premise false about disk), the
rest `CITATION-GAP`. Where a refuter and I disagreed I adjudicated from disk —
three `WRONG` calls I recorded as `confirmed_nonfatal` rather than
`false_positive`, because the judge's textual observation was accurate even
though the dependency supplied the missing content (e.g.
`thm-termwise-differentiation-of-complex-power-series`, where `[L1]` really does
omit "absolute" but its sources carry it).

## The fatal set

F1–F9 above, plus the following, each confirmed by both a judge lane and the
independent refuter unless noted. Full evidence per row is in the ledger's
`note` field.

| # | item | class | repaired |
|---|---|---|---|
| F10 | `def-cech-complete-space` | Definition asserts the every-compactification equivalence without the UL+DC its source carries | yes |
| F11 | `def-simple-continued-fraction-coding` | the bracket $[a_0;\ldots,a_n]$ is never defined, yet is load-bearing downstream | yes |
| F12 | `lem-maps-of-compactifications-preserve-remainders` | Statement writes $f\vert_X$, $K\setminus X$, $L\setminus X$ without naming either embedding | yes |
| F13 | `prop-meagre-subsets-form-a-sigma-ideal` | countable union of meagre sets uses Countable Choice; none assumed | yes |
| F14 | `prop-topological-sums-of-cech-complete-spaces` | one-point compactification of an already-compact sum is not a compactification | yes |
| F15 | `thm-orbit-map-of-a-covering-space-action-is-a-covering` | openness unlicensed, downstream of F5; plus an empty-space boundary failure | yes |
| F16 | `ex-real-line-mod-integer-translations-is-a-covering` | closed intervals of length $<1$ are not evenly covered | yes |
| F17 | `rem-why-completeness-alone-is-not-enough-for-an-adjoint` | Remark states two AC-dependent conclusions without AC | yes |
| F18 | `thm-frolik-internal-characterisation-of-cech-completeness` | Statement assumes UL, `[F2]`'s source assumes UL+DC | yes |
| F19 | `thm-metrizable-cech-complete-spaces-are-completely-metrizable` | Statement assumes UL; sources assume UL+DC and CC | yes |
| F20 | `thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube` | Statement assumes CC; sources assume DC and full AC | yes |
| F21 | `fs-every-metrizable-space-is-cech-complete` | `[F3]` asserts an equivalence its source states under UL+AC | yes |
| F22 | `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space` | `[F1]` says "finite tree"; the source says explicitly that $T$ is infinite | yes |
| F23 | `ex-baire-sequence-space-and-the-irrationals` | `[F2]` identifies code cylinder with real interval; the source refuses that identification in terms | yes |
| F24 | `thm-cech-complete-spaces-are-baire` | step 2.1's construction is impossible | **NO — blocker** |
| F25 | `thm-simple-continued-fractions-parametrise-the-irrationals` | the tail identity and both continuity directions are never proved | **NO — blocker** |

### The dominant defect class

Eleven of the 25 are the **same defect**: a Statement declaring one choice
principle while a Fact block restates a dependency whose own Statement carries a
stronger one — Countable Choice standing in for Dependent Choice, the ultrafilter
lemma alone standing in for UL+DC, or no principle at all standing in for AC.
Both lanes and the refuters converged on it independently across two pages. On a
library that tracks choice principles item by item, this is a systematic
authoring gap, not nine coincidences, and it is worth a step-0 check on the next
run that reads each Fact block's hypothesis against its source file's.

## Two open blockers — fatal, deliberately not repaired

R1 makes fatal repairs uncapped, but both of these need a **proof rewrite**, not
a minimal correction. Improvising a replacement proof at step 8 would be
authoring under a frozen verdict, which is exactly what the stage forbids.
`level-coverage` correctly reports both as hard failures.

1. **`thm-cech-complete-spaces-are-baire`** — step 2.1 needs a nonempty *ambient*
   open set to sit inside dense open subsets of $X$, which are only relatively
   open. Counterexample: $K=[0,1]$, $X$ its irrational subspace, every dense open
   set equal to $X$; then $X$ is a proper dense $G_\delta$ with empty ambient
   interior, so no nonempty ambient open set is contained in it. The theorem is
   true; the nested-open-set construction must be redone inside the
   compactification, using ambient opens that *meet* $X$ rather than ones
   contained in it.
2. **`thm-simple-continued-fractions-parametrise-the-irrationals`** — step 3.1
   never proves the tail identity
   $x=\dfrac{p_nx_{n+1}+p_{n-1}}{q_nx_{n+1}+q_{n-1}}$, which is what puts the
   original irrational in every prefix interval; step 4.1 asserts both continuity
   directions without the cylinder/preimage comparison. These are the substantive
   inverse and homeomorphism arguments.

A third, refuter-found defect is recorded but not repaired and is **not** a judge
rejection: `thm-frolik-internal-characterisation-of-cech-completeness` quantifies
over a centred family "subordinate to every $\mathcal U_n$" without "subordinate
to a cover" being defined in the item or any named dependency, and different
notions of cover-subordination give different assertions.

## The mid-stage ledger race — an orchestration defect

The autopilot never exited `7-judge`; it dispatched this Alpha into
`8-adjudicate` while `judge-sweep` kept re-running. Because a step-8 repair moves
the frozen **pair** context hash, each repair made the sweep rejudge every
sibling on that pair. Measured here:

- the ledger grew from 676 to 773 rows *during* adjudication;
- of 29 fresh rejections, **26 were on items this stage never touched**;
- **8 of those flipped pass → reject on byte-identical text**, from the same lane
  that had passed them.

That is resample noise being manufactured by the stage's own repairs — the exact
pathology the owner's 2026-08-06 item-granular rule and `judge.mts`'s
`item_sha256` field exist to prevent, reappearing at the *scheduler* level
because the sweep was still running concurrently with step 8.

I paused the engine (`.autopilot/control.json`), let the in-flight calls drain,
and adjudicated the settled set. All 31 late rejections are adjudicated on their
merits; the 3 on items I had repaired and the 8 demonstrable flips are recorded
with that evidence in their `note`.

**For the orchestrator:** `7-judge` must be closed before `8-adjudicate` is
dispatched. As it stands the stage cannot terminate — every step-8 repair
re-arms it — which is also why it reached attempt 37 before this Alpha started.

## Gate state at hand-off

```
step8-guard.mjs        OK   23 changed, 23/23 licensed by a confirmed_fatal
proof-contract --strict OK   0 errors, 289/289 items
citation-fidelity      OK   1089 citations, every recorded quote found
finite-smoke           OK
risk-report            OK
gate-liveness          OK
boundary-audit         OK
impact-audit           OK
level-coverage         BLOCKED — by design, see below
```

`proof-contract` and `citation-fidelity` failed on first run: 21 contract entries
quoted source text that the licensed repairs had changed. Regenerated with
`tools/regen-contract-entries.mjs` (contracts are separate JSON, so no item text
moved and the guard is unaffected). Both green after.

`level-coverage` blocks on exactly three things, all correct:
- 36 `judge-verdict-confirmed-fatal` rows awaiting the **rejudge** of the 23
  repaired items — step 8's designed output, not a failure;
- the 2 unrepaired fatal blockers above;
- 57 `audit-receipt-plan-reconciliation-reason` plus empty reviewer/attestation
  fields, because **`research/frontier-14-audit-coverage.json` did not exist** —
  the whole-level receipt that `LEVELS.md` requires after the initial sweep was
  never generated by step 6c/7. I generated the template with
  `level-coverage.mjs --template`; completing its reviewer, attestation and
  reconciliation fields belongs to the stage that owns it, after the rejudge.

## Rejudge set — 23 ids

Only these changed; every unedited page-mate keeps its verdict pair under
`level-coverage` clause (b), on byte-identical text.

```
cor-gaft-recovers-the-free-group-and-abelianisation-adjoints
cor-locally-compact-hausdorff-spaces-are-cech-complete
def-cech-complete-space
def-covering-space-action
def-cyclic-subspace-vector-and-vector-annihilator
def-simple-continued-fraction-coding
ex-baire-sequence-space-and-the-irrationals
ex-distance-function-lattice-is-dense-on-a-compact-metric-space
ex-real-line-mod-integer-translations-is-a-covering
fs-every-metrizable-space-is-cech-complete
lem-maps-of-compactifications-preserve-remainders
lem-simple-continued-fraction-convergents-and-cylinders
prop-meagre-subsets-form-a-sigma-ideal
prop-topological-sums-of-cech-complete-spaces
rem-why-completeness-alone-is-not-enough-for-an-adjoint
thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space
thm-circle-integrals-of-integer-monomials
thm-deck-group-of-a-universal-cover-is-the-fundamental-group
thm-frolik-internal-characterisation-of-cech-completeness
thm-invariance-of-complex-line-integrals-under-increasing-reparametrization
thm-metrizable-cech-complete-spaces-are-completely-metrizable
thm-orbit-map-of-a-covering-space-action-is-a-covering
thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube
```

(`thm-cech-complete-spaces-are-baire` and
`thm-simple-continued-fractions-parametrise-the-irrationals` carry fatal rows but
were not edited, so they are not in the rejudge set — they are blockers.)

## Artefacts

| file | what |
|---|---|
| `research/frontier-14-judge-adjudications.jsonl` | 257 rows, each with `item_sha256` and an evidence `note` |
| `research/frontier-14-step8-build-ledger.mjs` | the decision table; the ledger is regenerable from it |
| `research/frontier-14-step8-preedit-hashes.json` | 153 frozen pre-edit `itemContentHash` values |
| `research/frontier-14-step8-refuters/*.task.md` | the eight refuter assignments |
| `research/frontier-14-step8-refuters/reports/r*.md` | the eight reports, extracted from the dispatch logs |

## Nonfatal / false positive — decided by Alpha on disk

Recorded per row in `research/frontier-14-judge-adjudications.jsonl`. Rationale
for the ones where the judge's premise itself was wrong is given there; the
notable ones:

- **`thm-cyclic-subspace-power-basis-and-companion-matrix`** [T] — `[L1]` is
  cited with a finite-dimensionality hypothesis the Statement lacks, but the
  **Given** supplies "its monic vector annihilator $m=m_{T,v}$ of degree $d$" as
  hypothesis data. Given a monic generator, $p(T)v=0\iff m\mid p$ is immediate
  from "generator" in the PID $F[x]$, with no dimension hypothesis. True as
  written; imprecise citation. `confirmed_nonfatal`, `dependency_citation`.

- **`thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta`** [T] —
  the judge's stated requirement is wrong. The proof needs
  $Y=\overline Y\cap\bigcap_nG_n$, which steps 2.1–4.1 do establish; it does
  **not** need $\bigcap_nG_n\subseteq\overline Y$, which is false in general.
  A real but smaller gap remains — the final assembly never says $\overline Y$
  is itself $G_\delta$ in a metric space ($\overline Y=\bigcap_n\{x:d(x,\overline
  Y)<1/n\}$) — and that is a 30-second fact.
  `confirmed_nonfatal`, `logic`.

- **`ex-power-residues-modulo-seventeen`** [T] — `[L5]` does drop primality, and
  the general implication is indeed false ($p=4$, $a=6$). But the source is
  named `lem-prime-not-dividing-is-coprime` and the proof applies it only at
  $p=17$. Discharged by context before use. `confirmed_nonfatal`,
  `dependency_citation`.

- **`cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form`** [T]
  — the strengthened induction's base is stated only for $\chi_T=1$, not for a
  general nonzero constant. A nonzero constant is an empty product of linear
  factors; well inside 30 seconds. `confirmed_nonfatal`, `logic`.

- **`thm-fundamental-inequality-for-complex-line-integrals`** [T] — the
  Statement claims no sharpness; "sharp constant 1" is an unproved aside in step
  3.1, and is true in the standard reading (sup over all $f,\gamma$, attained by
  $f\equiv1$ on a segment). The judge's counterexample argues per-contour
  sharpness, which is not what the phrase means. `confirmed_nonfatal`, `other`.

- **`lem-simple-continued-fraction-convergents-and-cylinders`** [D] — separate
  from F3. Nestedness of the $J$ intervals is asserted, not derived; the claim is
  true and standard (the endpoints are the mediant-type values
  $(tp_n+p_{n-1})/(tq_n+q_{n-1})$). No edit, because F3's repair is confined to
  the integrality hypothesis. `confirmed_nonfatal`, `logic`.

## A call I revised mid-stage

Repairing F5 (`def-covering-space-action`) left the verbatim `[F1]` restatement
inside `thm-orbit-map-of-a-covering-space-action-is-a-covering` missing the new
clause. My first reading was that both of that theorem's rejections were
citation-completeness, so R1 would not license touching it, and I queued the
refresh for step 9.

The r3 refuter changed that. Terra's rejection there — openness of the orbit
image is not licensed — is not a citation gap but an unclosable hole, and the
counterexample shows why: with $E=\mathbb R_{\text{usual}}\sqcup\mathbb
R_{\text{discrete}}$ and $C_2$ swapping the copies, the action satisfied `[F1]`
as written, the quotient is $\mathbb R_{\text{usual}}$, and the projection
restricted to the discrete copy maps no sheet homeomorphically onto an interval.
`[F3]` cannot repair it, because the missing ingredient is precisely the
homeomorphism hypothesis dropped in `def-covering-space-action`. So the item has
its own `confirmed_fatal` (F15), the `[F1]` refresh and the openness step are
licensed by it, and nothing is deferred.

Nothing remains in the step-9 queue from this stage.
