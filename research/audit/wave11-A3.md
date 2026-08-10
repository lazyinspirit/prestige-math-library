# Wave 11 A3 orchestrator decision receipt

Date: 2026-08-09
Role: audit orchestrator, A3 only
Baseline / current HEAD read: `442f831c94882899c1dc5559b36599b0f78a99c8`
Decision: **PASS WITH AMENDMENTS — A4 is authorized exactly as specified below**

## 1. Durable recovery and scope actually read

I recovered the run from disk after the A1/A2 dispatch had exited, rather than
deciding from its earlier in-flight state. The final dispatch record is
`ok: true`, exit code `0`, ended at `2026-08-09T13:00:55.931Z`, after
`2,926,878 ms`. I then reread the final findings, ledger, and contracts written
by that completed dispatch.

The exact A3 inputs were:

| Artifact | SHA-256 read at A3 |
|---|---|
| `research/audit/wave11-A0.md` | `6dbd496833ed889e488d170ae05e9bb7abe57aed655962c2a5d3b6d80972f15b` |
| `research/audit/wave11-real-analysis.pages.json` | `399f3d1f471da3c30395046be9355c05f5adc2629064b2a07ba28d1d26759e76` |
| `research/audit/wave11-real-analysis.findings.md` | `5f8dee3d4be21dc25b5c1c8c73fa4e7be3be554509b58e77e9605b07265ee7c5` |
| `research/audit/wave11-real-analysis.provenance.jsonl` | `fc1ef1f4c985e2c13b710db3038ece8b4cb6428cc97ca7dfb90478443615977a` |
| `research/audit/wave11-real-analysis.proof-contracts.json` | `02a990204143c884f44b07b283d8df778af75761d0b9480e332b9b3c4209e61b` |
| `research/audit/wave11-dispatch/audit-beta-a1a2.result.json` | `718643790e36a96470a400b39d3273f950dc0cc36643616be83ebed25a3d74a8` |

I read `CLAUDE.md`, `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, and
`briefs/audit-orchestrator.md` fully; the last is the repository's canonical
orchestrator brief (there is no separate root `ORCHESTRATOR-BRIEF.md`). I read
all four current published pages, all 61 scoped items in full, all 61 final
provenance rows, all 55 contracts as needed to adjudicate the findings, and the
exact out-of-scope dependency clauses behind every proposed repair. I also
verified the live shared dirty tree and did not disturb concurrent Wave 12--14
work.

The recovered scope is four pages in two A/B pairs, 61 items, 55 proof-bearing
items, 377 numbered steps, 703 current Fact-to-target citation entries, 440
boundary entries, and 790 manifest relationships (618 published-backward, 155
same-batch, 17 explicit forward references). The final strict contract run is
truthfully red at **55/55 checked, 12 errors, zero warnings**: one missing step
reference and eleven unused-citation errors. Those twelve findings are all
disposed below; they are not an audit-coverage exception.

## 2. Class (a): false primitive claim

### A-1 — APPROVE

Item: `ex-integral-test-applied-to-the-p-series`.

Current false text:

> At $p = 1$ the verdict is that
> $\bigl(\int_0^N (t+1)^{-1}\bigr)_N$ is **unbounded**, since the harmonic
> series diverges; no primitive is exhibited there, and none can be, because
> the primitive is the logarithm and this library has not built it.

Authorized replacement:

> At $p = 1$ the verdict is that
> $\bigl(\int_0^N (t+1)^{-1}\bigr)_N$ is **unbounded**, since the harmonic
> series diverges. No named logarithmic primitive is available from the
> current dependency vocabulary, and none is needed for this conclusion.

Independent check: `cor-primitives-of-a-continuous-function`, claim 1, says
that every continuous real function on an interval has the integral-function
primitive. The integrand $t\mapsto(t+1)^{-1}$ is continuous on its interval.
The library's absence of a named logarithm prevents a named closed form, not the
existence of a primitive. The unboundedness conclusion is unaffected. This is
an unambiguous current mathematical falsehood and the replacement is the
narrowest accurate repair.

## 3. Class (b): citation and proof precision

### B-1 — APPROVE

Item: `thm-linearity-of-the-integral`, proof step 4.2.

Replace only:

> so steps 2.3 to 6.3 give integrability

with:

> so steps 2.3, 2.4 and 3.2 give integrability and the required identities

There is no step 6.3. Step 2.3 proves positive-scalar integrability, step 2.4
handles `-f`, and step 3.2 supplies the positive-scalar integral identity. The
existing bracket `[step 2.3, step 3.2, step 2.4, L9]` is already the correct
input map. This repair removes the sole
`step-entry-input-step-missing` contract error without changing the argument.

### B-2 through B-7 — AMEND BETA'S OWNER-QUEUE CLASSIFICATION; APPROVE FOR A4

The six unused Fact paragraphs are ordinary citation-precision cleanup under
R1, not owner-only deletion. The owner-only queue covers published item/id
deletion or replacement, renaming, and structural reading-order changes. These
repairs delete no item, id, theorem, proof step, page section, or mathematical
result. Prior waves applied the same classification. Inventing `uses` entries
would be false, so A4 must delete the unused Facts and update the exact contracts.

| Item | A4 action | Exact dependency reconciliation |
|---|---|---|
| `thm-monotonicity-of-the-integral` | Delete unused last Fact `[L5]`. | Keep `def-oriented-integral`: it remains directly cited in the Statement's oriented-limit clause. |
| `thm-additivity-over-subintervals` | Delete unused `[L6]`; renumber old `[L7]` to `[L6]` and old `[L8]` to `[L7]`, including every proof input tag and matching contract entry. | Remove `lem-refinement-inequalities`. Keep `def-partition-and-refinement`, which remains cited in `[L4]` and the proof architecture. |
| `thm-first-mean-value-theorem-for-integrals` | Delete unused last Fact `[L8]`. | Remove `def-oriented-integral`; it has no remaining direct use. |
| `thm-ftc-second-part` | Delete unused last Fact `[L8]`. | Remove `def-oriented-integral`; it has no remaining direct use. |
| `thm-integration-by-parts` | Delete unused last Fact `[L7]`. | Remove `def-oriented-integral`; it has no remaining direct use. |
| `cex-absolute-value-integrable-without-the-function` | Delete unused last Fact `[L9]`, containing five direct links. | Remove `def-measure-zero-and-content-zero` and `def-continuity-real`. Keep `thm-lebesgue-criterion`, `lem-nondegenerate-interval-is-not-null`, and `thm-dirichlet-and-thomae-continuity-sets`, each still directly cited in the final Remark. |

This authorizes exactly **six Fact-paragraph deletions, eleven Fact citation
entry deletions, six dependency-edge deletions, and one two-label renumbering**.
The resulting contract inventory must be **55 contracts, 692 citation entries,
377 derivations, zero routine-step suppressions, and 440 boundary entries**.
The required strict result after A4 is **55/55 checked, zero errors, zero
warnings**.

## 4. Published-page decay

### P-1 — AMEND BETA'S MAINTENANCE-QUEUE DISPOSITION; APPROVE A NARROW A4 REPAIR

Page: `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md`.

The current A-page says:

> Taylor's integral remainder needs higher derivatives and is deliberately
> developed with Darboux's theorem, l'Hopital's rule, and Taylor expansion
> rather than on this page.

That is a present-tense published claim about the target page, not merely a
harmless historical plan. The current target
`rem-darboux-lhopital-taylor-scope` says exactly: “No integral remainder ... is
made here.” The current target does prove Schlömilch--Roche, Lagrange, Cauchy,
and Peano forms, but not the integral form.

A4 is authorized to replace only those two lines with:

> Taylor's integral remainder needs higher derivatives and is not developed on
> this page. The current Darboux/L'Hopital/Taylor page also explicitly excludes
> the integral remainder.

This is the smallest current-text repair. It neither adds a theorem nor changes
reading order. No other page prose is authorized at A4.

## 5. Class (c): provenance decisions

### 5.1 Rows approved as recorded — 58

I approve the following 58 rows exactly as the final ledger records them.
Listing them by evidence class makes the decision on every row explicit.

**Exact-source — 23:** `thm-general-leibniz-rule`,
`lem-higher-order-rolle`, `thm-darboux-theorem-for-derivatives`,
`lem-injective-darboux-function-is-strictly-monotone`,
`lem-cauchy-mean-value-quotient-form`, `lem-taylor-polynomial-derivatives`,
`thm-taylor-peano-remainder`, `cor-taylor-remainder-bound`,
`thm-second-derivative-test`, `def-oriented-integral`,
`lem-integrability-on-a-subinterval`, `thm-linearity-of-the-integral`,
`thm-monotonicity-of-the-integral`,
`lem-changing-a-function-at-finitely-many-points`,
`thm-composition-with-a-continuous-function`,
`thm-first-mean-value-theorem-for-integrals`, `def-the-integral-function`,
`thm-the-integral-function-is-lipschitz`, `thm-ftc-first-part`,
`thm-ftc-second-part`,
`thm-nonnegative-continuous-with-zero-integral-vanishes`,
`ex-polynomial-integrals-by-the-ftc`, and
`cex-a-composition-of-integrable-functions-that-is-not-integrable`.

**Semantic-source — 24:** `def-higher-derivatives-and-smoothness`,
`cor-derivatives-have-no-removable-or-jump-discontinuities`,
`cor-injective-or-monotone-derivative-is-continuous`,
`thm-lhopital-zero-over-zero`, `thm-lhopital-infinity-over-infinity`,
`def-taylor-polynomial-and-remainder`,
`thm-taylor-schlomilch-roche-remainder`,
`cor-taylor-lagrange-and-cauchy-remainders`,
`thm-first-nonzero-derivative-test`,
`fs-zero-second-derivative-decides-extremum`,
`ex-geometric-function-taylor-remainder`,
`ex-zero-second-derivative-extremum-trichotomy`,
`thm-additivity-over-subintervals`,
`cor-integrability-of-absolute-values-products-and-lattice-operations`,
`cor-primitives-of-a-continuous-function`, `thm-integration-by-parts`,
`thm-substitution`, `thm-second-mean-value-theorem-for-integrals`,
`thm-integral-test-for-series`, `ex-integral-test-applied-to-the-p-series`,
`ex-two-root-x-and-its-unbounded-derivative`,
`cex-an-integrable-function-with-no-primitive`,
`cex-spikes-with-integral-one-converging-pointwise-to-zero`, and
`fs-the-integral-function-is-always-a-primitive`.

**Trivial — 7:** `ex-piecewise-polynomial-periodic-oscillator`,
`ex-differentiable-function-with-discontinuous-derivative`,
`ex-positive-derivative-at-zero-with-no-local-monotonicity`,
`ex-lhopital-rational-removable-quotient`, `cex-lhopital-converse`,
`ex-additivity-on-a-step-function`, and
`cex-the-first-mean-value-theorem-needs-a-one-signed-weight`.

**None / positively determined generated — 4:**
`rem-darboux-lhopital-taylor-scope`, `rem-integral-conventions-and-scope`,
`cex-a-function-with-a-primitive-that-is-not-integrable`, and
`fs-integration-by-parts-needs-no-integrability-hypothesis`.

For the exact-source group I independently opened all **15/15 distinct exact
source URLs** used by the 23 rows: UTSA's differentiation-rule page; the
Chicago MATH 395 notes; Florida's General Rolle note; Lebl's mean-value,
Taylor, integral-properties, and FTC chapters; the Colgate mean-value notes;
the DOI Serbia Darboux/injectivity article; Iowa's Taylor notes; Encyclopedia
of Mathematics' integral-calculus entry; CMU's 2026 Riemann-integral notes; the
Springer composition article; MIT's 18.100 exercise solution; and Berkeley's
integration notes. Every URL resolved to the claimed HTML or PDF and exposed
the relevant statement; no exact-source row requires a liveness or content
demotion.

### 5.2 Established-knowledge rows — two CONCUR, one SOURCE OVERRIDE

The owner explicitly asked A3 to resolve these rows. The following decisions
supply the independent determination D2 requires.

1. `ex-xk-abs-x-smoothness-threshold` — **CONCUR / APPROVE**
   `statement: ai-altered`, `evidence: established-knowledge`, `urls: []`, and
   authorize `alpha_concurred: true`. For $x>0$, $x^k|x|=x^{k+1}$; for $x<0$,
   it is $-x^{k+1}$. Every derivative through order $k$ has matching value $0$
   at the origin and is continuous there, while the $(k+1)$st one-sided values
   are opposite nonzero factorials. This includes $k=0$, where the assertion is
   continuity but not differentiability of absolute value. The exact claim is
   standard and the local derivation closes it.
2. `cex-absolute-value-integrable-without-the-function` — **CONCUR / APPROVE**
   `statement: ai-altered`, `evidence: established-knowledge`, `urls: []`, and
   authorize `alpha_concurred: true`. The witness is
   $f=2\mathbf1_{\mathbb Q}-1$: $|f|=1$, whereas density of rationals and
   irrationals makes every lower Darboux sum $-1$ and every upper sum $1$ on
   $[0,1]$. This is the standard signed Dirichlet counterexample, and the item's
   direct computation is complete. The unused `[L9]` cleanup in §3 does not
   affect this determination.
3. `fs-substitution-holds-for-every-integrable-integrand` — **AMEND: SOURCE
   OVERRIDE**, not a waiver. Charles C. Pugh, *Real Mathematical Analysis*,
   2nd ed., Chapter 3, Exercise 35(a)--(d), gives the same construction: a fat
   Cantor set $F$, $\psi(x)=\int_0^x\operatorname{dist}(t,F)\,dt$, the fact that
   $\psi(F)$ is null, and the characteristic function of $\psi(F)$ being
   Riemann integrable while its composite with $\psi$ is not. I verified the
   exact exercise text and the canonical publisher page resolves. A4 must amend
   this row and item to:
   - `statement: literature-derived`;
   - `proof: ai-generated`;
   - `evidence: exact-source`;
   - `urls: ["https://link.springer.com/book/10.1007/978-3-319-17771-7"]`;
   - `alpha_concurred: false` (not applicable to sourced evidence);
   - a rationale naming Chapter 3, Exercise 35 and noting that the repository's
     quantitative content-zero proof and dependency-explicit packaging are
     local.

The post-A4 provenance census is therefore:

| Axis | Classification | Count |
|---|---:|---:|
| statement | `literature-derived` | 24 |
| statement | `ai-altered` | 26 |
| statement | `ai-generated` | 11 |
| proof | `ai-generated` | 55 |
| proof | `not-applicable` | 6 |
| evidence | `exact-source` | 24 |
| evidence | `semantic-source` | 24 |
| evidence | `established-knowledge` | 2 |
| evidence | `trivial` | 7 |
| evidence | `none` | 4 |

There will be 27 distinct literature URLs after adding the Pugh publisher URL.

### 5.3 Generated-statement routing

I approve the eleven positive `ai-generated` statement determinations. Two are
currently load-bearing and must receive the mandatory final-text A6 `genrisk`
disposition rather than being mistaken for zero-cone examples:

- `ex-piecewise-polynomial-periodic-oscillator` has three direct dependency
  consumers: `ex-differentiable-function-with-discontinuous-derivative`,
  `ex-positive-derivative-at-zero-with-no-local-monotonicity`, and
  `cex-lhopital-converse`.
- `cex-a-function-with-a-primitive-that-is-not-integrable` has one direct
  dependency consumer,
  `fs-integration-by-parts-needs-no-integrability-hypothesis`; the other current
  hits are explicit orientation-only `forward_refs` or Remarks, not dependency
  consumers.

A3 does not choose the A6 disposition. Alpha must try retag/restate/unfold/narrow
in order and, only if none closes, perform the counterexample search,
proof-refuter, and paired-judge route required for `verified-generated`.

## 6. Exact A4 authorization

A4 is authorized to edit all **61 scoped item files** for approved provenance
frontmatter/source application. Of those, exactly **eight item ids are material
text/dependency repairs** and the other **53 are pure retag/source-only item
edits**:

1. `ex-integral-test-applied-to-the-p-series`
2. `thm-linearity-of-the-integral`
3. `thm-monotonicity-of-the-integral`
4. `thm-additivity-over-subintervals`
5. `thm-first-mean-value-theorem-for-integrals`
6. `thm-ftc-second-part`
7. `thm-integration-by-parts`
8. `cex-absolute-value-integrable-without-the-function`

It is also authorized to edit exactly **one page**, the narrow P-1 sentence in
`library/real-analysis/properties-of-the-integral-and-the-working-ftc.md`.
No companion page or Darboux/L'Hopital/Taylor page edit is authorized.

Exactly **seven proof-contract entries** must be regenerated from final text:
`thm-linearity-of-the-integral` plus the six unused-Fact items. The p-series
Example repair and the page repair do not change a numbered proof contract.

Before each material item edit, A4 must take the required item-dedicated
pre-edit touch snapshot, remove stale `verification.judge` and
`verification.audited`/`verified` state, then reflow and precheck the final item.
Pure retags preserve stamps. A4 must apply the two D2 concurrences and the Pugh
source override to the provenance ledger as well as to final item frontmatter,
then take the stage touch snapshot and run the prescribed A4 gates. It must not
expand these repairs into nearby prose.

## 7. Declines, owner queue, and blockers

- **No Beta mathematical proposal is returned.** A-1 and B-1 are approved.
- **No unused-Fact cleanup is owner-queued.** B-2 through B-7 are reclassified
  and approved as delegated class-(b) repairs.
- **The false A-page sentence is not left as maintenance debt.** P-1 is approved
  narrowly for A4.
- No deletion, id change, rename, new item, or reading-order change is approved.
- The mandatory final-text Waves 12--14 to Wave 11 edge barrier remains for the
  later waves' A6 passes; this A3 receipt does not certify those still-moving
  consumer edges.
- **Blockers: none.**

This receipt is the only file written by the Wave 11 A3 orchestrator. No item,
page, shared ledger, contract, gate artifact, A4 change, or later step was run or
applied here.
