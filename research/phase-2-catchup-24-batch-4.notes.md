# phase-2-catchup-24 — beta batch 4

Status: **Step-5 authoring complete for 38 draft items and four draft pages.** Updated 2026-09-10. See the final Step-5 receipt below; earlier status and review discussions are historical.
The two owned pairs have a substantive scaffold, but source-fetch gates fail
and the exact transitive proof audit remains incomplete. Do not publish or
treat structural passes as a mathematical verdict.

## Scope and controlling design

Only `phase-2-catchup-24-batch-4.pages.json`, its `.coverage.json`, and this
`.notes.md` were edited in the repository. Published content, canonical plan,
prose designs, other batches and ledgers were not edited. Temporary check
inputs and logs are in `/tmp`. Existing unrelated working-tree changes were
preserved. No broader access was requested.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the scaffold brief, both
batch task files, current plan, owned artifacts and frontier bookkeeping brief.
The live state inspected was `.autopilot/phase-2-catchup-24/status.md`, not a
historical RESUME; git HEAD at initial inspection was `209eaa2f1`.

Probability design §0A.4, “Missing standard-Borel proof machinery,” controls
the coding pair. The supplied L262 pointer is contextual; the actual section
starts near L287. Functional-analysis §14.14, “Representation Theory
reconciliation,” was read completely: it declares the later measurable-Hilbert-
field consumer, not a competing specification of this supplier. PT-10,
“Conditional expectation,” including its hard proof plan and all nine B
items, controls the second pair. Relevant probability §0A.3 prerequisite table,
choice discussion and source matrix were also consulted.

The canonical plan controls page IDs, categories, orders and requires. These
match the dispatch and current reconciled prose; older PT abbreviations are
resolved to its exact A-page requirements. The four plan inventories are
empty, so the manifest supplies them without editing the plan. Counts:

| Pair | A items | B items | Orders |
|---|---:|---:|---|
| Standard-Borel Real Codings and Determining Classes | 4 | 3 | 288.1101 / 288.1102 |
| Conditional Expectation | 21 | 9 | 288.115 / 288.116 |

All 37 stable IDs have explicit deps arrays. Three supporting lemmas were
added inside authorized pairs: Borel-subspace Polish presentations, countable
supporting lines, and conditional-variance well-definedness. No new pair has
been shown necessary; no page exceeds the plan's A-page inventory limit.

Two design ambiguities required explicit mathematical correction, not silent
scope loss:

* `cex-conditioning-does-not-preserve-strict-inequalities` cannot refute strict
  **a.s.** order. If W=Y-X>0 a.s. and V=E[W|G], testing A={V=0} gives
  integral_A W=0 and hence P(A)=0. The A basic-properties theorem includes
  this fact. The stable B ID now refutes strict **pointwise** order for
  arbitrary versions on a two-point probability space with one null atom.
* PT-10's “rational supporting affine functions” must mean a countable family
  indexed by rational contact points, allowing real coefficients. An affine
  function with irrational slope has no global affine minorant with rational
  slope. The added lemma uses the left derivative at each rational contact
  point, with secant bounds and continuity to prove the exact supremum.

The design's two integrable-product hypotheses for taking-out are retained;
the scaffold additionally proves that X,ZX in L1 imply Z E[X|G] in L1.
No stronger assertion is used without its displayed truncation/MCT argument.

## Proof and dependency evidence

Coding uses x/2, terminating-zero binary expansions, a Borel row condition,
diagonal digit interleaving and ternary 0/2 coding. It explicitly addresses
image Borelness and inverse measurability. The general theorem uses published
Hilbert-cube embedding and only the forward completely-metrizable-to-G-delta
interface. Rational cuts yield an algebra containing E; finite total mass
allows the pi-lambda uniqueness argument. Infinite measures are not covered.

The published `def-standard-borel-space` requires a Polish presentation.
Accordingly the Borel-subspace example cannot merely cite the Borel code
image: `lem-borel-subspaces-admit-polish-presentations` proves the finer
topology assertion using clopen refinements and the closed diagonal in a
countable product. AC pays for countably many topology/metric/basis witnesses.

Conditional expectation uses two finite positive RN applications on
(Omega,G,P restricted to G), modifying infinite densities on G-null sets
before subtraction. No completeness of G, signed infinity subtraction,
kernel, regular conditional law or forward conditional-MCT argument is used.
Uniqueness precedes class notation. Extended nonnegative uniqueness uses
{Y>=Z+1/k,Z<=m}, avoiding infinity-minus-infinity. Null-set integral invariance
is now an explicit dependency of conditional MCT. Variance has a dedicated
justified_by lemma. L2 closedness uses completeness of the restricted L2
quotient and orthogonality uses truncations and ordinary Cauchy-Schwarz.

Direct interfaces read included the definitions of Polish/standard Borel,
product topology, real Borel sigma-algebra, expectation, L1/Lp quotient,
moments, UI and AC; the Hilbert-cube, forward and reverse G-delta, complete
product metric and Polish countability results; RN density and the
finite-positive decomposition route; measurable closure and sequential
limits; simple approximation, indefinite integrals, linearity, null-set and
a.e. invariance, zero-integral criterion, MCT, DCT, absolute continuity of the
integral; Cauchy-Schwarz, finite-measure Lp inclusion and Riesz-Fischer;
supporting lines/one-sided convex derivatives; real completeness, rational
countability and density, geometric series and real Borel generators.
These are local readings, not independent review or certification of their
entire dependency closures.

The final conservative graph traversal of published frontmatter plus the
owned manifest found 38 direct published prerequisite IDs and 943 reachable
IDs through deps, justified_by and all forward_refs. No unresolved IDs or
direct homes outside the declared page closure were found. None of these
reachable IDs was homed on `deferred-set-theory-beyond-choice`. The graph
includes non-load-bearing orientation edges and is not an exact proof-use
census. In particular, all transitive body references and hypotheses have
**not** been semantically checked. This remains fatal to readiness, including
full Foundations-boundary certification. No missing-edge absence is inferred
from the graph alone. Snapshot, hashes and traversal are in
`/tmp/batch4-dependency-audit.json` and `/tmp/batch4-audit.py`.

Dependency narrowing is justified by the proposed proofs: replaced
`lem-q-and-irrationals-dense-r` with `lem-rat-embeds-dense` because only rational
approximation/separation is used, never the irrational-density clause.
The composite `thm-polish-spaces-as-g-delta` is not imported: only its forward
interface is needed. Independence is stated as the rectangle identity and
proved by simple approximation, so a general factorization/product theorem
is unnecessary. Cauchy-Schwarz is used only for its inequality and L1-product
consequence; its equality clause is not part of the proposed proof.

## Published findings for ledger reconciliation

Write authority excludes the published-consumer-supplier ledger. The owner
should reconcile these exact observations into existing entries, avoiding
duplicates. Neither item was edited or labelled repaired here.

| Published item/path | Observation and actual owned use | Repair/supplier disposition |
|---|---|---|
| `items/thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures.md`, proof 2.1 and 3.1 | Selects a sequence approaching a supremum and countably many Hahn decompositions without an explicit AC contract. Actual path: owned `thm-conditional-expectation-exists-by-radon-nikodym` → published `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` → this finite-positive construction. | Confirmed choice-accounting finding; local route explicitly assumes AC, identifies these choices and propagates the assumption to owned consumers. Published repair can add the appropriate choice contract/dependency and propagation; existing `def-axiom-of-choice` is the supplier, no new Phase-2 theorem is required. This does not certify all deeper RN prerequisites. |
| `items/thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta.md`, final intersection equality | The owned coding theorem needs the image itself to be G-delta, not merely its intersection with its closure. | Local elaboration supplies the closure inclusion: each point of every G_n is within 1/n of Y by the n-small neighbourhood condition. Therefore the intersection already lies in closure Y. AC covers the published DC construction. Treat as proof-elaboration/impact-review evidence, not a newly established false theorem. Existing metric/choice suppliers suffice. |

The new coding and CE items are **scaffolded, blocked, unpublished**. Searches
of published items for the new coding and CE-existence IDs found no direct
mentions. This is not a semantic census of future/published consumers.
The FA measurable-field design is a planned downstream consumer, not an
upstream blocker. No semantic audit of unrelated co-resident published items
is claimed or required for these supplier routes.

Frontier ledger instructions were read. This is the initial Step-1 batch,
with write authority limited to three files. The inspected declared inputs
are published prerequisites, and no same-frontier item edge was identified.
No unauthorized cross-batch input or aggregate refresh was written. Step 3
must independently audit implicit uses and create/maintain its authorized
input even if empty; this note is not a replacement for that gate.

## Sources and recovery

Coverage records contain exact URLs, locators, dispositions and honest read
evidence. Coding has Durrett, Rao–Srivastava and Marker; CE has Durrett and
van der Vaart. Each A therefore has two independent treatments including a
book/full lecture-note set at the reading level, but no successful fresh
fetch stamp. Named relevant text was read; surrounding chapters are not
represented as completely harvested.

* Durrett: author-hosted PTE5_011119.pdf, Theorem 2.1.22, printed 53–54
  (zero-based PDF indices 60–61); CE §4.1 through §4.1.2, printed 205–213
  (indices 212–220), excluding regular conditional probabilities. Existing
  local PDF/page extracts were cross-checked with browser full text.
* Rao–Srivastava: complete three-page paper, Real Analysis Exchange 20(1),
  347–349, especially Proposition 2 and Theorem 5. Full extraction was read;
  an unused Schroder–Bernstein displayed formula was missing and screenshot
  recovery failed, so that formula is not certified as inspected.
* Marker: author-hosted full Descriptive Set Theory notes; “Changing the
  Topology,” Lemmas 2.22–2.23/Theorem 2.24, printed 20–21; “Borel
  Isomorphisms,” Definition 2.29/Examples 2.30–2.31/Corollary 2.32, 21–22.
  Complete named statements and proofs were read.
* Van der Vaart: author-hosted full Stochastic Integration notes, §1.1 through
  Lemma 1.10 and warning, pp.1–4; separately Lemma 1.21 and its proof p.6.
  No claim to have harvested the intervening material.

The scaffold's density-kernel/general independent-function integration and
Borel-paradox harvest is deferred explicitly to
`conditional-distributions-and-regular-conditional-probability`; no result
is silently discarded. Coding-paper classification/perfect-set material has
specific out-of-scope reasons in coverage.

`source-fetch-check --stamp` was run on the original four records, then on
the newly added Marker record in an isolated temporary coverage file to
avoid repeating earlier attempts. Its six real recovery_attempts were copied
back verbatim. Each active record retains the tool's initial failure plus
five retries, all EAI_AGAIN. These are network retries, not five independent
literature searches. Browser recovery obtained the active sources above.
Exploratory author searches also recovered the correct Varadhan URL
`https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf`; it was not fully read or
adopted. Sousi's `mynotes.pdf` and `lecture_notes.pdf` returned browser
internal/502 errors; indexed newer pagination differs from the old design.
Neither exploratory treatment supplies a claimed proof here.

No source was declared unavailable on the open web or dropped, and no fetch
stamp was manufactured. URL-sweep's archive failure/re-sourcing advice is
not evidence of absence when DNS itself fails. A second tooling issue is
visible in `tools/source-fetch-check.mjs:69`: its four-page PDF minimum would
reject the complete three-page Rao–Srivastava paper if fetched. That is an
anticipated gate incompatibility, distinct from the observed DNS failure;
the tool was not modified and no waiver was assumed.

## Checks actually run

Final checks were rerun after the 37-item additions and dependency edits.
Logs use `/tmp/batch4-final-NAME.txt` unless specified.

| Command/check | Actual result |
|---|---|
| `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-4.coverage.json --require-destination` | exit 0; 2 pages, 93 harvest records, 0 errors/warnings |
| `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` | exit 0; 616 current whole-run items, 0 normalized/errors; explicit arrays only |
| `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-4.pages.json` | exit 0; 37 items, 0 errors/warnings |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; order/dependency check passed; 936 inventoried pages, empty pages not item-checked; redundant-requires warnings |
| `node tools/validate-plan.mjs /tmp/batch4-plan-overlay.json` | exit 0; current plan with exactly four owned inventories overlaid, 940 inventoried pages; no reported cycles, forward/B dependencies or unresolved IDs |
| `node tools/extcheck.mjs` | exit 0; existing published unproved-use warnings remain; this is not an owned proof-closure certificate |
| `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-4.coverage.json --stamp` | original 4 records: 0/4 verified, 4 DNS failures; log `/tmp/batch4-fetch.txt` |
| Same fetch command with `/tmp/batch4-marker-fetch.json` | new Marker record: 0/1 verified, DNS failure; `/tmp/batch4-marker-fetch.txt`; recovery records merged |
| `node tools/url-sweep.mjs --coverage research/phase-2-catchup-24-batch-4.coverage.json --out /tmp/batch4-url-liveness.json --recover --fail-on-dead` | exit 1; 0/4 unique URLs live, four DNS failures, zero archive recoveries |
| `node tools/source-backing.mjs --coverage research/phase-2-catchup-24-batch-4.coverage.json --liveness /tmp/batch4-url-liveness.json --require-verified` | exit 1; 21 result IDs lack tool-verified openable backing |
| Custom conservative dependency traversal | 38 direct/943 reachable IDs; no unresolved/direct-outside-closure/catalogue-home hits; **not** complete semantic proof audit |

No item precheck, rendercheck, independent judge or publication was performed.
Whole-run counts are snapshots because other batches are active.

## Remaining obligations and next action

1. Restore working fetch verification and rerun source gates; reconcile the
   genuine short-paper gate incompatibility through an authorized tool owner.
   Keep real failed attempts; do not claim a drop based on this outage.
2. Finish the exact transitive proof-use audit, including body references,
   omitted dependencies, axiom strength and the Foundations boundary. The
   943-ID conservative graph is navigation evidence, not completed review.
3. Independently review the explicit binary-image proof, topology refinement,
   strict-a.s.-order correction, countable-support lemma, extended uniqueness
   and variance well-definedness. Reconcile published findings and frontier
   bookkeeping within the next writer's authority.

After handoff/reset, reread these notes, current manifest/coverage, actual
prerequisite files and live plan before continuing. Do not rerun the temporary
manifest-generation scripts: later edits and fetch evidence supersede them.

## Step-3 fix pass

Date: 2026-09-09. This section supersedes the earlier blocked/source-fetch
wording where it conflicts with the current records. It resolves the group-A
Step-3 verdicts only; it is not a self-certification or publication action.
Only the owned batch manifest, coverage, and these notes were changed. No
published item/page, plan, shared prose design, or other batch was edited.

No new A/B pair is required. The one new prerequisite is the authorized local
A-item `lem-absolute-real-powers-are-convex`, placed immediately before its
only consumer `cor-conditional-lp-contraction`; the A page now has 22 items,
well below the plan limit. All its prerequisites and every newly added edge
are published earlier than the owning page. In particular,
`def-natural-number-coding-of-finite-sequences` is homed at planned order 609,
after this pair's order 288.1101, and was deliberately not used.

### Verdict `standard-borel-real-codings-and-determining-classes missing[0]` — resolved

**Evidence.** The coding proof explicitly invokes integer parts for the
binary digits, integer powers for the binary/ternary series, and the exhibited
bijection of `thm-n-cross-n-countable` to interleave the rows. Each supplier's
statement has exactly this direction and precedes the page.

**Changed record.**
`lem-hilbert-cube-has-a-bimeasurable-real-coding` now directly declares
`lem-integer-part`, `def-integer-power`, and `thm-n-cross-n-countable`.

**Remaining blocker.** None for this dependency closure.

### Verdict `standard-borel-real-codings-and-determining-classes missing[1]` — resolved

**Evidence.** Let `(H_n)` enumerate the rational-cut pullbacks using
`thm-rationals-countable`. The Boolean algebra `A_n` on the first `n` cuts has
at most the finitely many unions of its at-most `2^n` atoms. The desired
algebra is `union_n A_n`, so `thm-countable-union-of-countable` applies. Its
statement spends exactly one `AC_omega` choice of enumerations; full AC in the
corollary supplies that instance through `def-countable-choice`. The rational
separation and pi-lambda parts make no selection. This legal finite-algebra
route replaces the forward finite-sequence-coding suggestion without weakening
the countability claim.

**Changed record.**
`cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`
now declares `thm-rationals-countable`,
`thm-countable-union-of-countable`, and `def-countable-choice`, and its
strategy plus `axiom_use` field give the finite-atom construction and exact
choice use.

**Remaining blocker.** None for this dependency closure.

### Verdict `standard-borel-real-codings-and-determining-classes missing[2]` — resolved

**Evidence.** `lem-metrics-on-rn` supplies the maximum-coordinate metric
interface, and `thm-product-of-countable` supplies the inductive countability
of `Q^n`; the singleton `n=0` case remains inline.

**Changed record.** `ex-euclidean-borel-spaces-are-standard-borel` now directly
declares those two prerequisites.

**Remaining blocker.** None for this example's dependency closure.

### Verdict `conditional-expectation missing[0]` — resolved

**Evidence.** For real `p>=1`, the new lemma proves on `(0,infinity)` that
`(u^p)''=p(p-1)u^(p-2)>=0`, then uses the second-derivative convexity theorem.
The logarithm/exponential comparison `0<=u^p<=u` for `0<u<=1` gives the
continuous extension at zero by squeeze; the triangle inequality and
monotonicity transfer half-line convexity to `t |-> |t|^p` on all of `R`.
Continuous Borel preimages give measurableness. The direct local interfaces
are the real-power derivative, logarithm, exponential, convexity, continuity,
and Borel-measurability items named in its explicit `deps` array. The existing
complete source records were rechecked at Durrett, Theorems 4.1.10--4.1.11,
and van der Vaart, Lemma 1.9(vi)--(vii): both use conditional Jensen and the
`L^p` contraction route with this absolute-power choice.

**Changed record.** Added the canonical coverage record and the local lemma
`lem-absolute-real-powers-are-convex`, immediately before
`cor-conditional-lp-contraction`; the contraction now directly depends on and
invokes it to discharge conditional Jensen's finite-convex/Borel premise.
The lemma records both active full-text URLs. No source was added, dropped, or
given an invented recovery receipt.

**Remaining blocker.** None for the Jensen-premise dependency closure.

### Verdict `conditional-expectation missing[1]` — resolved

**Evidence.** The variance expansion applies known-variable conditioning to
`U^2`; `lem-conditioning-a-known-variable-and-an-independent-variable` is the
earlier published item that states exactly that clause.

**Changed record.**
`lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`
now directly declares that lemma.

**Remaining blocker.** None for this use.

### Verdict `conditional-expectation missing[2]` — resolved

**Evidence.** `lem-rat-embeds-dense` gives the exact density of rational `t`
needed to extend nonnegative quadratic values from rational parameters to all
real parameters by the item's inline polynomial-continuity argument.

**Changed record.** `cor-conditional-cauchy-schwarz-inequality` now directly
declares `lem-rat-embeds-dense`.

**Remaining blocker.** None for this use.

### Verdict `conditional-expectation missing[3]` — resolved

**Evidence — unbounded-factor counterexample.** The displayed geometric
normalization and both finite/infinite moment series now directly use
`def-integer-power` and `thm-geometric-series`. More fundamentally, the law is
constructed as two nonnegative countable weighted sums of Dirac probability
measures. `def-nonnegative-weighted-sum-of-measures` and
`thm-nonnegative-weighted-sums-of-measures` make those sums measures; the
geometric total mass one then gives `def-probability-measure`. Thus the full
discrete sigma-algebra, integrable `X` and `Z`, and undefined signed `ZX`
conditional expectation are not merely informal atom notation.

**Evidence — total-variance example.** The statement now fixes
`Omega={0,1}^2`, its full sigma-algebra, and all four masses `1/4`.
`thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`
supplies the finite probability-space interface. The rectangle identity
`P(U=u,V=v)=1/4=P(U=u)P(V=v)` proves the exact independent-variable hypothesis;
the conditional mean, conditional variance, and both ordinary variances are
then finite four-atom calculations.

**Changed record.**
`cex-taking-out-an-unbounded-factor-needs-integrability` now declares the
integer-power/geometric suppliers and the direct Dirac/weighted-measure
construction dependencies, with its strategy expanded accordingly.
`ex-law-of-total-variance` replaces the undefined Bernoulli shorthand with the
four-atom law, adds the finite-space theorem, and gives the independence and
moment calculations explicitly.

**Remaining blocker.** None for either repaired B-item closure.

### Coverage, frontier bookkeeping, and checks

Coverage is now `scaffold-repaired-final-checks`: it has 94 harvested
dispositions with the new canonical lemma and replaces its stale source-fetch
blocker with the current checks. `source-fetch-check --stamp` reported 5/5
active sources fetch-verified and resolved, with zero newly stamped; the
earlier genuine recovery history remains intact. `source-backing` against the
shared current liveness receipt reported all 21 authored sourced results still
backed by an openable source or documented alternative argument.

The owned frontier input remains exactly `[]`. Every new direct supplier is a
published earlier item or the preceding local A item; no same-frontier item or
page edge was introduced. `node tools/frontier-dependency-ledger.mjs refresh
--run phase-2-catchup-24` completed after the edits and preserved that
classification. There is therefore no new cross-batch row to hand-edit or
reconcile.

The following checks were actually run after the repair and are also recorded
in coverage: coverage checklist (2 pages, 94 results, 0 errors/warnings),
whole-run `manifest-deps` (703 items, 0 normalized/errors), manifest-only
content policy (38 items, 0 errors/warnings), `validate-plan` (declared order
acyclic; no cycles, forward references, B-page dependencies, or unresolved
IDs among 960 populated plan pages), `extcheck --quiet` (exit 0; 57 existing
global published warnings), source-fetch check (5/5), source-backing (21/21),
and the frontier-ledger refresh. Independent Step-3 recheck remains the only
open process obligation; no owned mathematical or source blocker remains.


## Final group-a adjudication — 2026-09-09

Current controlling receipt: `research/phase-2-catchup-24-alpha-a-step3-scaffold-recheck.md`. Both assigned pairs are accepted with confidence 1 after checking the current prior fixes and actual proof interfaces. No mathematical manifest or coverage change was made to this batch in final adjudication. See the receipt for exact source locators, dependency clause uses, scope dispositions and checks. The two batch-3 escalations do not block these suppliers. The empty batch-owned frontier input remains valid.

## Step-5 authoring

2026-09-10. Authoring complete; current Step-3 verdicts accept both pairs. Historical source/review blockers above are superseded. Read SCHEMA, controlling probability sections 0A.4/PT-10 and FA 14.14, current manifest and all 66 external dependency statements. Published RN and ambient G-delta supplier repairs are now present. No scope reduction. All items remain draft.

### Checkpoint `lem-hilbert-cube-has-a-bimeasurable-real-coding`

Authored claim/conventions: There is an explicit Borel measurable bijection $c:[0,1]^{\mathbb N}\to C$ onto a Borel subset $C\subseteq[0,1]$, whose inverse is Borel measurable. The cube carries its product topology and its Borel sigma-algebra; indices start at zero.

Sources: Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.22, printed pp.53–54 (PDF pp.61–62). The complete coding paragraph and its caveat were read. The present proof replaces the abbreviated digit argument by a Borel row condition and separated ternary cylinders. The interleaving uses the actual bijection in the local supplier rather than attributing a diagonal formula to that supplier.

Dependencies: def-borel-sigma-algebra, def-product-topology, thm-seven-generators-of-the-borel-sigma-algebra-on-r, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-geometric-series, thm-rationals-countable, lem-rat-embeds-dense, lem-integer-part, def-integer-power, thm-n-cross-n-countable. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-standard-borel-spaces-admit-bimeasurable-real-codings`

Authored claim/conventions: Assume AC. Every standard-Borel space $(E,\mathcal S)$ is measurably isomorphic to a Borel subset of $[0,1]$, including $E=\varnothing$.

Sources: Durrett Theorem 2.1.22, printed pp.53–54, provides the coding route. Its omitted image detail is supplied by the local cube lemma and the current forward completely-metrizable-to-G-delta theorem; no converse or external recorded theorem is imported.

Dependencies: lem-hilbert-cube-has-a-bimeasurable-real-coding, def-standard-borel-space, thm-hilbert-cube-universal-for-separable-metrizable-spaces, thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta, def-axiom-of-choice, lem-standard-complete-metric-on-a-countable-product, thm-reals-cauchy-complete. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`

Authored claim/conventions: Assume AC. Every standard-Borel space $(E,\mathcal S)$ has a countable algebra $\mathcal A$ which generates $\mathcal S$, separates points, and determines finite measures: if finite measures $\mu,\nu$ agree on $\mathcal A$, then $\mu=\nu$. In particular it determines probability measures.

Sources: Durrett Theorem 2.1.22 (printed pp.53–54) motivates real coding. The finite-algebra construction and finite-total lambda-system argument are derived here from the exact local countability and pi-lambda statements; arbitrary infinite measures are outside the claim.

Dependencies: thm-standard-borel-spaces-admit-bimeasurable-real-codings, thm-dynkin-pi-lambda, thm-seven-generators-of-the-borel-sigma-algebra-on-r, def-axiom-of-choice, thm-rationals-countable, thm-countable-union-of-countable, def-countable-choice, lem-rat-embeds-dense. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `lem-borel-subspaces-admit-polish-presentations`

Authored claim/conventions: Assume AC. If $B$ is a Borel subset of a Polish space $(P,\tau)$, then $B$ has a finer Polish topology with exactly the trace sigma-algebra $\mathcal B(P)|_B$. In fact there is a finer Polish topology on $P$ with the same Borel sets which makes $B$ clopen. Thus $(B,\mathcal B(P)|_B)$ is standard Borel.

Sources: Marker, Descriptive Set Theory, Lemmas 2.22–2.23 and Theorem 2.24, printed pp.20–21 (PDF indices 19–20), full statements and proofs read. The closed-diagonal argument is expanded using continuity to the original Hausdorff topology. Rao–Srivastava, An Elementary Proof of the Borel Isomorphism Theorem, pp.347–349, is retained as the scaffold’s independent background treatment, not a load-bearing citation in this proof.

Dependencies: def-standard-borel-space, def-polish-space, thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable, lem-standard-complete-metric-on-a-countable-product, prop-polish-space-countability-conventions-agree, def-axiom-of-choice, thm-countable-union-of-countable, thm-product-of-countable. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `def-conditional-expectation-given-a-sigma-algebra`

Authored claim/conventions: Let $(\Omega,\mathcal F,P)$ be a probability space, $\mathcal G\subseteq\mathcal F$ a sub-sigma-algebra, and $X:\Omega\to\mathbb R$ integrable. A **conditional-expectation version of $X$ given $\mathcal G$** is a real, $\mathcal G$-measurable, integrable function $Y$ such that $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. No completeness of $\mathcal G$ is assumed.

Sources: Durrett §4.1, printed pp.205–206; van der Vaart §1.1, Definition 1.1, printed p.1. Integrability is imposed explicitly here.

Dependencies: def-expectation-of-a-nonnegative-or-integrable-random-variable, def-l-one-of-a-measure. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-conditional-expectation-exists-by-radon-nikodym`

Authored claim/conventions: Assume AC. For every real integrable $X$ on $(\Omega,\mathcal F,P)$ and every sub-sigma-algebra $\mathcal G$, a conditional-expectation version of $X$ given $\mathcal G$ exists.

Sources: Durrett §4.1, existence paragraph, printed pp.206–207; van der Vaart Theorem 1.3, printed pp.1–2. The local current RN statement (including AC and its integrable real-valued output) is used exactly as stated.

Dependencies: def-conditional-expectation-given-a-sigma-algebra, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-axiom-of-choice, cor-integral-over-a-null-set-vanishes. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `lem-conditional-expectation-is-unique-almost-surely`

Authored claim/conventions: If $Y,Z$ are conditional-expectation versions of the same real integrable $X$ given $\mathcal G$, then $Y=Z$ almost surely.

Sources: Durrett §4.1, uniqueness paragraph, printed p.206; van der Vaart Theorem 1.3, printed p.2.

Dependencies: def-conditional-expectation-given-a-sigma-algebra, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-closure-properties-of-measurable-functions-used-by-the-integral. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `def-conditional-expectation-as-an-ae-class`

Authored claim/conventions: Assume AC for the supplied existence theorem. Write $E[X\mid\mathcal G]$ for the unique class in $L^1(\Omega,\mathcal G,P|_{\mathcal G})$ consisting of conditional-expectation versions of $X$. A chosen real $\mathcal G$-measurable representative is a **version**. Equalities and inequalities involving these classes mean almost-sure equalities and inequalities.

Sources: Durrett §4.1, printed p.206, version/uniqueness convention; van der Vaart Definition 1.1 and Theorem 1.3, printed pp.1–2.

Dependencies: def-conditional-expectation-given-a-sigma-algebra, thm-conditional-expectation-exists-by-radon-nikodym, lem-conditional-expectation-is-unique-almost-surely, def-l-p-space-as-a-quotient-by-null-functions, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-basic-algebra-and-order-properties-of-conditional-expectation`

Authored claim/conventions: Assume AC for existence. For real $X,Y\in L^1(P)$ and $a,b\in\mathbb R$, $E[aX+bY\mid\mathcal G]=aE[X\mid\mathcal G]+bE[Y\mid\mathcal G]$. Conditional expectation is positive, preserves order and constants, satisfies $E(E[X\mid\mathcal G])=EX$, and $|E[X\mid\mathcal G]|\le E[|X|\mid\mathcal G]$ almost surely. Also $X<Y$ almost surely implies $E[X\mid\mathcal G]<E[Y\mid\mathcal G]$ almost surely.

Sources: Durrett Lemma 4.1.1 and Theorem 4.1.9(a)–(b), printed pp.206,210–211; van der Vaart Lemma 1.9(i),(iii),(iv), printed p.4. The strict almost-sure statement is derived by the zero-event argument, not attributed to a counterexample.

Dependencies: def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-taking-out-what-is-known`

Authored claim/conventions: Assume AC for existence. If $X\in L^1(P)$ and $Z$ is bounded real $\mathcal G$-measurable, then $E[ZX\mid\mathcal G]=ZE[X\mid\mathcal G]$ almost surely. The identity also holds for finite real $\mathcal G$-measurable $Z$ whenever $ZX$ and $ZE[X\mid\mathcal G]$ are integrable. In fact $X,ZX\in L^1$ imply the latter integrability.

Sources: Durrett Theorem 4.1.14, printed pp.212–213; locality Theorem 4.1.2, printed p.206. The absolute-product integrability estimate is explicitly proved by ordinary MCT before the signed DCT limit; conditional MCT is not used.

Dependencies: def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, lem-conditional-expectation-is-unique-almost-surely, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-tower-property-of-conditional-expectation`

Authored claim/conventions: Assume AC for existence. If $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$ and $X\in L^1(P)$, then $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ and $E[E[X\mid\mathcal H]\mid\mathcal G]=E[X\mid\mathcal H]$ almost surely. Also, if a version of $E[X\mid\mathcal G]$ is $\mathcal H$-measurable, it is a version of $E[X\mid\mathcal H]$.

Sources: Durrett Theorems 4.1.12–4.1.13, printed p.212; van der Vaart Lemma 1.9(v), printed p.4.

Dependencies: def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `lem-conditioning-a-known-variable-and-an-independent-variable`

Authored claim/conventions: Assume AC for existence. For real $X\in L^1(P)$, if $X$ is $\mathcal G$-measurable, then $E[X\mid\mathcal G]=X$. If $P(\{X\in B\}\cap A)=P(X\in B)P(A)$ for every real Borel $B$ and $A\in\mathcal G$, then $E[X\mid\mathcal G]=EX$ almost surely.

Sources: Durrett Examples 4.1.3–4.1.4, printed pp.207–208; van der Vaart Examples 1.4–1.5, printed p.2. The rectangle hypothesis is extended by simple approximation explicitly, without importing a general factorization theorem.

Dependencies: def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `def-conditional-expectation-for-nonnegative-variables`

Authored claim/conventions: Assume AC. For measurable $X:\Omega\to[0,\infty]$, select versions $U_n$ of $E[X\wedge n\mid\mathcal G]$, $n\ge1$. Outside one $\mathcal G$-measurable null set they are nonnegative and increasing. Set all of them to zero on that set. Define $E[X\mid\mathcal G]$ to be the almost-sure class of $\lim_n U_n$, allowing $+\infty$.

Sources: Van der Vaart Lemma 1.10(i), printed p.4; Durrett Theorem 4.1.9(c), printed pp.210–211, supplies the integrable case. The local next theorem proves the extended-valued definition.

Dependencies: def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-conditional-monotone-convergence`

Authored claim/conventions: Assume AC. For nonnegative measurable $X$ (possibly infinite), $E[X\mid\mathcal G]$ is the unique almost-sure class of nonnegative $\mathcal G$-measurable $Y$ satisfying $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. If $0\le X_n\uparrow X$ almost surely, then $E[X_n\mid\mathcal G]\uparrow E[X\mid\mathcal G]$ almost surely. Every increasing integrable nonnegative approximation to $X$ gives the same class. For integrable real $V_n\downarrow V$ almost surely with $V_1,V\in L^1$, $E[V_n\mid\mathcal G]\downarrow E[V\mid\mathcal G]$ almost surely.

Sources: Van der Vaart Lemma 1.10(i), printed p.4; Durrett Theorem 4.1.9(c) and its decreasing-limit remark, printed pp.210–211. Extended uniqueness and order are supplied locally by finite-level localization; the decreasing clause preserves the coverage promise.

Dependencies: def-conditional-expectation-for-nonnegative-variables, lem-conditional-expectation-is-unique-almost-surely, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-monotone-convergence-for-the-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-axiom-of-choice, cor-integral-over-a-null-set-vanishes. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-conditional-fatou-and-dominated-convergence`

Authored claim/conventions: Assume AC. For nonnegative measurable $X_n$, $E[\liminf_n X_n\mid\mathcal G]\le\liminf_n E[X_n\mid\mathcal G]$ almost surely, in the extended sense. If real $X_n\to X$ almost surely and $|X_n|\le W$ almost surely for one nonnegative $W\in L^1(P)$, then $E[X_n\mid\mathcal G]\to E[X\mid\mathcal G]$ almost surely and in $L^1$.

Sources: Van der Vaart Lemma 1.10(ii)–(iii), printed p.4, full statements read; ordinary MCT, conditional order and the two nonnegative dominated sequences supply the proof here.

Dependencies: thm-conditional-monotone-convergence, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-dominated-convergence, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `lem-convex-functions-have-countable-supporting-line-representations`

Authored claim/conventions: Let $\phi:\mathbb R\to\mathbb R$ be finite and convex. For each $q\in\mathbb Q$ define $\ell_q(t)=\phi(q)+\phi^{\prime}_-(q)(t-q)$. Then $\phi(t)=\sup_{q\in\mathbb Q}\ell_q(t)$ for every real $t$. This is a countable family with deterministic real coefficients; the coefficients need not be rational. The function $\phi$ is locally Lipschitz and Borel measurable.

Sources: Durrett Theorem 4.1.10 and countability remark, printed p.211, motivate the countable-support method. Here rational contact points with real slopes avoid any rational-coefficient ambiguity; the exact local supporting-line and derivative interfaces give the complete derivation.

Dependencies: thm-supporting-lines-for-convex-functions, thm-one-sided-derivatives-of-convex-functions, thm-rationals-countable, lem-rat-embeds-dense, thm-continuous-preimages-of-borel-sets-are-borel. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-conditional-jensen-inequality`

Authored claim/conventions: Assume AC. If $\phi:\mathbb R\to\mathbb R$ is finite convex and both $X$ and $\phi(X)$ are integrable, then $\phi(E[X\mid\mathcal G])\le E[\phi(X)\mid\mathcal G]$ almost surely; the left side is measurable and integrable.

Sources: Durrett Theorem 4.1.10 and following remark, printed p.211; van der Vaart Lemma 1.9(vi), printed p.4. The integrability of the left side is checked using one lower supporting line and the conditional upper bound.

Dependencies: def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, lem-convex-functions-have-countable-supporting-line-representations, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `lem-absolute-real-powers-are-convex`

Authored claim/conventions: For each real $p\ge1$, the function $\phi_p:\mathbb R\to\mathbb R$ defined by $\phi_p(t)=|t|^p$ is finite, continuous, Borel measurable and convex. Here $0^p=0$.

Sources: Durrett Theorem 4.1.11, printed pp.211–212, and van der Vaart Lemma 1.9(vii), printed p.4, use this power in the contraction argument. The calculus and endpoint proof is supplied here from the explicitly cited local real-analysis results.

Dependencies: def-real-power, thm-real-power-continuity-and-derivatives, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, thm-algebra-of-derivatives, thm-monotonicity-from-the-derivative, cor-second-derivative-characterises-convexity, def-convex-concave-and-midpoint-convex-functions, lem-of-triangle-inequality, lem-of-abs-value, thm-algebra-of-continuous-functions, thm-squeeze-for-function-limits, thm-continuous-preimages-of-borel-sets-are-borel, def-measurable-function-between-measurable-spaces, def-natural-logarithm. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `cor-conditional-lp-contraction`

Authored claim/conventions: Assume AC. For $1\le p\le\infty$, conditional expectation is a linear map from real $L^p(P)$ to real $L^p(P|_{\mathcal G})$ satisfying $\|E[X\mid\mathcal G]\|_p\le\|X\|_p$.

Sources: Durrett Theorem 4.1.11 and proof, printed pp.211–212; van der Vaart Lemma 1.9(vii), printed p.4. The infinite endpoint uses the essential bound directly.

Dependencies: thm-conditional-jensen-inequality, lem-absolute-real-powers-are-convex, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-l-p-space-as-a-quotient-by-null-functions, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-conditional-expectation-is-the-l2-orthogonal-projection`

Authored claim/conventions: Assume AC. Real $L^2(\Omega,\mathcal G,P|_{\mathcal G})$ embeds isometrically as a closed subspace of real $L^2(\Omega,\mathcal F,P)$. For $X\in L^2(P)$, $U=E[X\mid\mathcal G]$ is its orthogonal projection onto this subspace. It uniquely minimizes $E[(X-Z)^2]$ over $Z\in L^2(\mathcal G)$ as an almost-sure class.

Sources: Durrett Theorem 4.1.15 and geometric remark, printed p.213; van der Vaart Lemma 1.8 and proof, printed p.3. The product-integrability route proves orthogonality for all L2 tests directly; closedness is separately established from the restricted L2 completeness interface.

Dependencies: cor-conditional-lp-contraction, lem-conditioning-a-known-variable-and-an-independent-variable, thm-taking-out-what-is-known, cor-cauchy-schwarz-inequality-for-l-two, thm-riesz-fischer-completeness-of-l-p, def-axiom-of-choice, thm-basic-algebra-and-order-properties-of-conditional-expectation. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `def-conditional-variance`

Authored claim/conventions: Assume AC. For real $X\in L^2(P)$ define $\operatorname{Var}(X\mid\mathcal G)=E[(X-E[X\mid\mathcal G])^2\mid\mathcal G]$ as an almost-sure class. Its integrability, nonnegativity, representative independence and second-moment formula are justified by the following lemma.

Sources: Durrett §4.1.2, printed pp.211–213, supplies the conditional L2 machinery; the following local lemma establishes the variance formula.

Dependencies: def-conditional-expectation-as-an-ae-class, cor-conditional-lp-contraction, thm-taking-out-what-is-known, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`

Authored claim/conventions: Assume AC. For real $X\in L^2(P)$, conditional variance is an integrable nonnegative class independent of representatives and satisfies $\operatorname{Var}(X\mid\mathcal G)=E[X^2\mid\mathcal G]-(E[X\mid\mathcal G])^2$ almost surely.

Sources: Durrett Theorems 4.1.9, 4.1.11, 4.1.14–4.1.15, printed pp.210–213. The local square expansion supplies the formula and checks every product before taking-out.

Dependencies: def-conditional-variance, thm-taking-out-what-is-known, cor-conditional-lp-contraction, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-axiom-of-choice, cor-cauchy-schwarz-inequality-for-l-two, lem-conditioning-a-known-variable-and-an-independent-variable. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `cor-conditional-variance-decomposition`

Authored claim/conventions: Assume AC. For real $X\in L^2(P)$, $\operatorname{Var}(X)=E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(E[X\mid\mathcal G])$.

Sources: Durrett §4.1.2, printed pp.210–213, supplies expectation preservation and the conditional L2 identities. The decomposition is the displayed local algebraic consequence of the proved second-moment formula.

Dependencies: def-conditional-variance, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-moments-variance-and-covariance, lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `thm-uniform-integrability-of-conditional-expectations-of-one-variable`

Authored claim/conventions: Assume AC. For fixed real $X\in L^1(P)$, the classes $E[X\mid\mathcal G]$, as $\mathcal G$ ranges over all sub-sigma-algebras of $\mathcal F$, form a uniformly integrable family.

Sources: Van der Vaart, Martingales, Diffusions and Financial Mathematics, Lemma 1.21 and its full proof, printed p.6 (PDF index 11). The local argument uses the same tail event with absolute continuity of the fixed input integral.

Dependencies: def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-taking-out-what-is-known, def-uniformly-integrable-family, thm-absolute-continuity-of-the-integral, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function`

Authored claim/conventions: Under the AC existence convention, identities between conditional expectations concern almost-sure classes. Once versions for finitely or countably many such identities are selected, the identities hold simultaneously outside the union of their measurable null exceptional sets; that union is still null. This gives no single pointwise representative satisfying an uncountable family of identities. Subsequent conditional-law constructions require their own hypotheses.

Sources: Durrett §4.1 uniqueness discussion, printed p.206, and countable-exception remark after Theorem 4.1.10, p.211; van der Vaart warning after Lemma 1.10, printed p.4.

Dependencies: def-conditional-expectation-as-an-ae-class, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `cor-conditional-cauchy-schwarz-inequality`

Authored claim/conventions: Assume AC. For real $X,Y\in L^2(P)$, $|E[XY\mid\mathcal G]|^2\le E[X^2\mid\mathcal G]E[Y^2\mid\mathcal G]$ almost surely.

Sources: Durrett §4.1.2, Theorem 4.1.9(a)–(b), printed pp.210–211, supplies positivity and linearity. The conditional quadratic argument is written here in full, using rational parameters and explicit zero-coefficient handling.

Dependencies: def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, lem-rat-embeds-dense, thm-rationals-countable. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-countable-discrete-spaces-are-standard-borel`

Authored claim/conventions: Every at most countable set $S$ with its full power-set sigma-algebra is standard Borel, including the empty set. For example $S=\mathbb N$ has the discrete complete metric $d(m,n)=\mathbf1_{\{m\ne n\}}$.

Sources: Marker, Descriptive Set Theory, Example 1.2, printed p.2; Durrett Theorem 2.1.22, printed pp.53–54. The metric and its Cauchy property are explicitly evaluated here.

Dependencies: def-standard-borel-space, def-polish-space. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-euclidean-borel-spaces-are-standard-borel`

Authored claim/conventions: For each finite $n\ge0$, $(\mathbb R^n,\mathcal B(\mathbb R^n))$ is standard Borel. For $n\ge1$ use $d_\infty(x,y)=\max_{i<n}|x_i-y_i|$; $\mathbb R^0$ is a singleton.

Sources: Durrett Theorem 2.1.22, printed pp.53–54. The explicit complete Euclidean metric and rational density give the Polish presentation directly.

Dependencies: def-standard-borel-space, def-polish-space, thm-reals-cauchy-complete, thm-rationals-countable, lem-rat-embeds-dense, lem-metrics-on-rn, thm-product-of-countable. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-borel-subspaces-of-polish-spaces-are-standard-borel`

Authored claim/conventions: Under AC, every Borel subset $B$ of a Polish space $P$ is standard Borel with its trace Borel sigma-algebra. A concrete instance is $\mathbb Q\subset\mathbb R$, presented by its discrete topology.

Sources: Marker Theorem 2.24, printed pp.20–21, and Definition 2.29, pp.21–22; Durrett Theorem 2.1.22, printed pp.53–54. The Q instance is calculated locally.

Dependencies: lem-borel-subspaces-admit-polish-presentations, def-axiom-of-choice, thm-rationals-countable, thm-reals-cauchy-complete, lem-rat-embeds-dense. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-conditioning-on-a-finite-partition`

Authored claim/conventions: Assume AC for the conditional-class convention. Let $(A_i)_{i=1}^m$ be a finite measurable partition of a probability space, $\mathcal G=\sigma(A_1,\ldots,A_m)$, and real $X\in L^1(P)$. A version has value $c_i=P(A_i)^{-1}\int_{A_i}X\,dP$ on each positive-mass cell, and zero on each zero-mass cell.

Sources: Durrett Example 4.1.5, printed p.208; van der Vaart Example 1.7, printed p.3. Zero-mass cells and a numerical four-atom calculation are included.

Dependencies: def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-conditioning-on-trivial-and-full-sigma-algebras`

Authored claim/conventions: Under the AC conditional-class convention, for integrable real X, $E[X\mid\{\varnothing,\Omega\}]=EX$ and $E[X\mid\mathcal F]=X$ as classes.

Sources: Durrett Examples 4.1.3–4.1.5, printed pp.207–208; van der Vaart Examples 1.4–1.5, printed p.2.

Dependencies: lem-conditioning-a-known-variable-and-an-independent-variable, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-conditioning-an-independent-sum-on-one-summand`

Authored claim/conventions: Assume AC for conditional classes. If real integrable X,Y are independent, meaning $P(X\in B,Y\in C)=P(X\in B)P(Y\in C)$ for all real Borel B,C, then $E[X+Y\mid\sigma(X)]=X+EY$ almost surely.

Sources: Durrett Example 4.1.7, printed pp.209–210, additive special case; Examples 4.1.3–4.1.4 supply the two individual terms.

Dependencies: lem-conditioning-a-known-variable-and-an-independent-variable, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-conditional-expectation-given-a-discrete-random-variable`

Authored claim/conventions: Assume AC for conditional classes. If Y is a countably valued real random variable and X is real integrable, a version of $E[X\mid\sigma(Y)]$ takes value $c_y=\int_{\{Y=y\}}X\,dP/P(Y=y)$ on each positive-mass fibre and zero on all zero-mass fibres.

Sources: Durrett Example 4.1.5, printed p.208; van der Vaart Example 1.7 and its countable-partition extension, printed p.3. The countable sum is justified using ordinary MCT on positive and negative parts.

Dependencies: def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice, thm-monotone-convergence-for-the-integral, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-l2-best-prediction-by-conditional-expectation`

Authored claim/conventions: Assume AC. For real $X\in L^2(P)$, $U=E[X\mid\mathcal G]$ and every $Z\in L^2(\mathcal G)$, $E[(X-Z)^2]=E[(X-U)^2]+E[(U-Z)^2]$. Equality with the minimum error holds if and only if $Z=U$ almost surely.

Sources: Durrett Theorem 4.1.15, printed p.213; van der Vaart Lemma 1.8, printed p.3. The four-atom calculation illustrates the orthogonal error decomposition.

Dependencies: thm-conditional-expectation-is-the-l2-orthogonal-projection, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, def-conditional-expectation-as-an-ae-class. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `ex-law-of-total-variance`

Authored claim/conventions: Assume AC for conditional classes. On $\Omega=\{0,1\}^2$ with full sigma-algebra and each atom of mass $1/4$, put $U(u,v)=u$, $V(u,v)=v$, $X=U+V$ and $\mathcal G=\sigma(U)$. Then $\operatorname{Var}(X)=1/2$, $E[\operatorname{Var}(X\mid\mathcal G)]=1/4$ and $\operatorname{Var}(E[X\mid\mathcal G])=1/4$.

Sources: Durrett §4.1.2, printed pp.210–213, conditional identities; the explicit four-atom variance instance is locally calculated and has generated-example provenance.

Dependencies: cor-conditional-variance-decomposition, lem-conditioning-a-known-variable-and-an-independent-variable, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, def-conditional-variance. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `cex-a-version-can-fail-a-pointwise-identity-on-a-null-set`

Authored claim/conventions: The assertion “every version of $E[0\mid\mathcal F]$ equals zero at every sample point” is false, under the usual AC conditional-class convention.

Sources: Durrett §4.1 uniqueness/version discussion, printed p.206; van der Vaart warning after Lemma 1.10, printed p.4. The two-atom witness is locally constructed.

Dependencies: def-conditional-expectation-as-an-ae-class, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `cex-conditioning-does-not-preserve-strict-inequalities`

Authored claim/conventions: Even when $X(\omega)<Y(\omega)$ at every point, arbitrary versions of their conditional expectations need not satisfy that strict inequality at every point. This is a pointwise-version counterexample; strict almost-sure inequalities are preserved.

Sources: Durrett §4.1 version convention, printed p.206. The local basic-properties theorem proves strict almost-sure preservation. The stable requested ID retains the Step-3-approved pointwise interpretation.

Dependencies: def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.

### Checkpoint `cex-taking-out-an-unbounded-factor-needs-integrability`

Authored claim/conventions: Under the AC conditional-class convention, omitting product integrability from the signed $L^1$ taking-out rule can leave its left side undefined even when both factors are integrable and the product of the factor with the conditional mean is zero.

Sources: Durrett Theorem 4.1.14, printed pp.212–213, states the integrable-product hypothesis. The constructed atomic counterexample, its normalization and all moments are independently calculated here.

Dependencies: thm-taking-out-what-is-known, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, def-integer-power, thm-geometric-series, def-probability-measure, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-weighted-sum-of-measures, thm-nonnegative-weighted-sums-of-measures, thm-monotone-convergence-for-the-integral. Proof and exact-step contract written; final checks recorded below. Open mathematical/scope gap: none identified in this local argument. Next: owning Alpha may consume the completed draft and its contract; no authoring action remains identified.


### Final Step-5 receipt — 2026-09-10

**Completed content.** All 38 assigned items have their written arguments or definitions, actual examples/counterexample calculations, and individual proof contracts. All four pages are written at `library/probability/<page.id>.md`. IDs, promised scope, and draft status are preserved. This is an authoring receipt, not an independent mathematical review or publication decision.

Page `standard-borel-real-codings-and-determining-classes`:

- `lem-hilbert-cube-has-a-bimeasurable-real-coding`
- `thm-standard-borel-spaces-admit-bimeasurable-real-codings`
- `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`
- `lem-borel-subspaces-admit-polish-presentations`

Page `standard-borel-real-codings-and-determining-classes-examples`:

- `ex-countable-discrete-spaces-are-standard-borel`
- `ex-euclidean-borel-spaces-are-standard-borel`
- `ex-borel-subspaces-of-polish-spaces-are-standard-borel`

Page `conditional-expectation`:

- `def-conditional-expectation-given-a-sigma-algebra`
- `thm-conditional-expectation-exists-by-radon-nikodym`
- `lem-conditional-expectation-is-unique-almost-surely`
- `def-conditional-expectation-as-an-ae-class`
- `thm-basic-algebra-and-order-properties-of-conditional-expectation`
- `thm-taking-out-what-is-known`
- `thm-tower-property-of-conditional-expectation`
- `lem-conditioning-a-known-variable-and-an-independent-variable`
- `def-conditional-expectation-for-nonnegative-variables`
- `thm-conditional-monotone-convergence`
- `thm-conditional-fatou-and-dominated-convergence`
- `lem-convex-functions-have-countable-supporting-line-representations`
- `thm-conditional-jensen-inequality`
- `lem-absolute-real-powers-are-convex`
- `cor-conditional-lp-contraction`
- `thm-conditional-expectation-is-the-l2-orthogonal-projection`
- `def-conditional-variance`
- `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula`
- `cor-conditional-variance-decomposition`
- `thm-uniform-integrability-of-conditional-expectations-of-one-variable`
- `rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function`
- `cor-conditional-cauchy-schwarz-inequality`

Page `conditional-expectation-examples`:

- `ex-conditioning-on-a-finite-partition`
- `ex-conditioning-on-trivial-and-full-sigma-algebras`
- `ex-conditioning-an-independent-sum-on-one-summand`
- `ex-conditional-expectation-given-a-discrete-random-variable`
- `ex-l2-best-prediction-by-conditional-expectation`
- `ex-law-of-total-variance`
- `cex-a-version-can-fail-a-pointwise-identity-on-a-null-set`
- `cex-conditioning-does-not-preserve-strict-inequalities`
- `cex-taking-out-an-unbounded-factor-needs-integrability`

**Checks actually run.**

- `node tools/tsx-run.mjs tools/precheck.mts` with all 38 explicit manifest item paths: canonical repairs adopted and rerun; exit 0, 33 proof-bearing items checked, zero failures. The four definitions and one remark have no standalone proof layout to precheck.
- `node tools/validate-plan.mjs`: printed usage because a plan path is required; this bare invocation did not validate a plan. The corrected invocation `node tools/validate-plan.mjs research/plan-spec.json` exited 0: no item cycles, forward references, B-page dependencies, or unresolved IDs among 978 inventoried pages. Its repository-wide limitation remains 641 planned pages without item inventories; redundancy warnings are not failures of this batch.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-4.pages.json`: exit 0, 38 items, zero errors or warnings.
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-4.proof-contracts.json --strict`: exit 0, 38/38 items, zero errors or warnings. Contracts map the final canonical step labels, actual claims and inputs, cited statement/definition excerpts and uses, and item-specific boundary evidence.
- `node tools/rendercheck.mjs` with all 38 items and four page paths: exit 0, all 42 files pass real KaTeX and renderer YAML checks. After correcting a Unicode escape in the conditional-expectation examples page title, that page was checked again and passed.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-catchup-24`: succeeded after dependency edits. Own consumer input `phase-2-catchup-24-batch-4.cross-batch-dependencies.json` is `[]`; comparison against current run manifests found no same-frontier cross-batch edges. The aggregate `briefs/tasks/frontier-dependency-ledger.md` is generated by that refresh.
- Additional `node tools/depcheck.mjs --json`: final exit 1, seven errors and 617 warnings repository-wide; filtering by all 42 owned paths gives zero owned errors and zero owned warnings. The seven errors are in other batches' content and remain untouched. These global counts reflect the current concurrent workspace, not a clean whole-repository result.
- `git diff --check` scoped to owned content, manifest, notes, contracts and consumer dependency input: exit 0.

These structural checks supplement the written mathematical arguments; they do not establish mathematical correctness on their own.

**Provenance and source decisions.** Statement provenance remains `ai-altered` for 26 non-generated items and `ai-generated` for nine examples and three counterexamples, with their generation roles retained. Proof provenance is `ai-altered` for the 33 proof-bearing items and `not-applicable` for four definitions and the remark. No generated statement is used as a dependency target. No external result is silently recorded without proof; justified-by fields separate well-definedness from definition dependencies. No verification or judge stamps were added.

Complete relevant source passages were read in bounded chunks: Durrett, *Probability: Theory and Examples*, fifth edition, Theorem 2.1.22, printed pp.53–54, and §4.1 printed pp.205–213; Marker, *Descriptive Set Theory*, Lemmas 2.22–2.23/Theorem 2.24 printed pp.20–21 and Definition 2.29 through Corollary 2.32 printed pp.21–22; van der Vaart, *Stochastic Integration*, §1.1 printed pp.1–4 and Lemma 1.21 printed p.6. Their author-hosted URLs and per-item locators are retained in the items/contracts and checkpoints. Rao–Srivastava, *An Elementary Proof of the Borel Isomorphism Theorem*, pp.347–349, remains independent background; its extracted Schroeder–Bernstein displayed formula was unavailable, so it is not represented as inspected or used to justify a proof step. The load-bearing refinement argument is written from the fully read Marker passage. Source records and independent reviews are preserved.

All original external dependency statements were read, and added direct inputs were checked against their current statements. The coding uses the supplier's actual pairing bijection, treats binary endpoints explicitly, proves Borel image and inverse measurability, and constructs the countable cube basis. The standard-Borel argument uses the current repaired ambient G-delta statement and explicitly assumes AC where required. The RN construction uses the current supplier's choice hypothesis. Nonnegative conditional expectation avoids infinite subtraction; the unbounded-factor rule establishes product integrability before passing limits. Strict almost-sure order preservation is proved; the stable strict-inequalities counterexample ID has the Step-3-approved pointwise-version claim and an explicit null-point witness. These are the final conventions, superseding scaffold strategies and historical supplier-gap discussions above.

Dependency frontmatter and the manifest agree with the final proofs. The checkpoints above list the final direct inputs, including added real completeness, rational density, countable products/unions, null-integral, measurable-limit, continuous-measurability, logarithm, rational-countability, finite-probability, monotone-convergence, and conditional-class/variance inputs at their actual uses.

**Unresolved mathematical or scope obligations.** None identified in the completed local arguments. No promised item or page was removed or narrowed during Step 5; no plan or workflow transition was made. There is no new prerequisite or proposed scope change to submit to Alpha. The unrelated repository dependency-check failures and uninventoried plan pages above remain outside this batch's authoring authority. Independent review remains separate from this authoring receipt.
