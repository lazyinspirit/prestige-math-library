# `frontier-5` — selected six-stream build state

**Started 2026-07-31.** The owner selected the following ready work from the
disk-derived frontier: `graphs-walks-and-connectivity`,
`homotopy-and-homotopy-equivalence`,
`power-series-and-real-analytic-functions`,
`congruences-and-the-chinese-remainder-theorem`,
`filters-and-ultrafilters`, and `incidence-algebras-and-mobius-inversion`.
This run follows `LEVELS.md` steps 0 through 10 and stops at the step-10 owner
pause. All new content remains `status: draft`; this file does not authorize
publication, an owner audit, a commit, or a push.

## Step 0 — selection and batches

The frontier was recomputed from `research/plan-spec.json` and page files by
`tools/rounds.mjs --pairs`. A prerequisite qualifies when its page is at least
`draft`, not only when it is published. The five new A/B pairs are unscaffolded;
the Filters A page is already published and only its planned B companion is
outstanding.

| order | static level | work stream | category | state | direct prerequisites |
|---:|---:|---|---|---|---|
| 12/13 | 3 | `filters-and-ultrafilters` | foundations | published A, planned B | `order-zorn-and-the-axiom-of-choice`, `deferred-set-theory-beyond-choice` |
| 30/31 | 7 | `congruences-and-the-chinese-remainder-theorem` | number theory | unscaffolded A/B | `primes-and-the-fundamental-theorem-of-arithmetic`, `inclusion-exclusion-and-the-pigeonhole-principle` |
| 173/174 | 14 | `power-series-and-real-analytic-functions` | real analysis | unscaffolded A/B | `uniform-convergence-of-functions`, `absolute-convergence-and-rearrangement` |
| 203/204 | 7 | `incidence-algebras-and-mobius-inversion` | combinatorics | unscaffolded A/B | `chains-antichains-sperner-and-dilworth`, `rings-subrings-and-integral-domains`, `primes-and-the-fundamental-theorem-of-arithmetic` |
| 207/208 | 7 | `graphs-walks-and-connectivity` | combinatorics | unscaffolded A/B | `inclusion-exclusion-and-the-pigeonhole-principle`, `chains-antichains-sperner-and-dilworth` |
| 289/290 | 14 | `homotopy-and-homotopy-equivalence` | topology | unscaffolded A/B | `the-topology-of-euclidean-space`, `subspaces-products-and-quotients` |

### Batches

1. **Filters, congruences, and incidence:** the existing Filters B companion,
   congruences/CRT, and incidence algebras/Möbius inversion. This groups the
   possible number-theoretic Möbius-function seam with the incidence-algebra
   development.
2. **Power series, graph walks, and homotopy:** three independent A/B pairs
   whose direct prerequisites are already available.

The declared page-level seam count between these selected streams is zero at
Step 0. Item-level seams are not computable before the five unscaffolded pairs
receive item lists. The existing Filters B companion has a fixed planned item
list, but no selected stream depends on it.

No step beyond Step 0 had completed when this record was created. The legacy
untracked `frontier-3` scratch files are outside this run and must remain
untouched.

## Step 3 — scaffold decisions

The orchestrator read both Batch Beta reports and checked the cited library
items and plan state from disk before accepting the following corrections.

1. **Accepted — incidence inversion is lower-/upper-finite, not merely locally
   finite.** Local finiteness makes each incidence-convolution interval sum
   finite, but the displayed global inversion sums over a principal ideal or
   filter. The scaffold therefore states the lower-finite theorem and proves
   its upper-finite order dual separately. The finite-poset corollary remains
   valid. This is a fatal scope correction, not a wording preference.
2. **Accepted — add finite commutative-monoid summation and Fubini lemmas.**
   The published `def-sum-over-a-finite-index-set` is explicitly restricted to
   real- or natural-valued summands. Incidence convolution needs sums in an
   arbitrary commutative ring, so the scaffold supplies the general definition
   and reindexing/Fubini lemma rather than citing a too-weak dependency.
3. **Accepted — retain the CRT/incidence Möbius seam.** The number-theoretic
   Möbius function is introduced only on the incidence page, where its equality
   with the divisibility-poset Möbius function is proved. CRT contributes the
   divisor-sum/totient result; the one Examples-page seam records the recovery
   of Euler's totient by Möbius inversion. The direct CRT dependency on
   inclusion--exclusion is retained for the coprime-residue count.
4. **Accepted — CRT boundary conventions.** Congruence modulo zero is equality;
   quotient-ring and totient assertions use positive moduli; and the text does
   not call \(\mathbb Z/1\mathbb Z\) a field. The scaffold includes the
   non-coprime compatibility form of CRT, while deferring primitive roots and
   later group-theoretic consequences.
5. **Accepted — keep power-series scope real and dependency-closed.** The
   Cauchy--Hadamard material is explicitly for real series (with the zero and
   infinite-radius conventions). Formal-series units, complex endpoint
   binomial claims, and Borel/smooth-nonanalytic examples are deferred because
   their required machinery is not available. The page directly requires
   `equivalent-forms-of-completeness`, which licenses the Ces\`aro material.
6. **Accepted — defer the unbuilt P\'olya count.** The plan contains
   `counting-up-to-symmetry-burnside-and-polya` with no items, so the
   unlabeled-graph/P\'olya example is not self-contained and is absent.
7. **Accepted — graph conventions are explicit.** \(P_n\) has \(n\) vertices,
   \(C_n\) is used only for \(n\ge3\), contraction returns a simple graph by
   deleting loops and merging parallel edges, and the Whitney witness is
   stated with its exceptional case. Distance is componentwise and degree
   extrema exclude the empty graph.
8. **Accepted — avoid the published pasting lemma as a dependency.**
   `lem-continuity-is-local-and-pastes` carries a forward reference to its
   infinite-closed-cover counterexample. The homotopy scaffold instead proves
   the finite reparameterisation/pasting fact it needs, avoiding inherited
   forward-reference baggage.
9. **Accepted — remove unsupported cone and strong-equivalence claims.** The
   topology prerequisite explicitly leaves preservation of quotient maps by
   products unproved, so cone contractibility is deferred. The incorrect
   retraction witness is replaced by the two-point discrete singleton, a
   retract that is not a deformation retract; no unlicensed cofibration theory
   is invoked.

All other reported source-convention and closure checks were accepted as
scaffold constraints. In particular, the product-poset Möbius theorem states
and verifies the product order in its proof strategy, so a separate elementary
product-poset definition would add no logical dependency.

## Step 4 — plan splice and Alpha reconciliation

The two approved scaffold files were mechanically spliced into the twelve
selected page objects in `research/plan-spec.json`; static page metadata was
preserved and only `requires` and `items` were replaced. The splice comprises
197 plan records, of which twelve are the pre-existing published Filters A
records and five are pre-planned Filters B ids; it introduces the remaining
selected records without collision. `research/BUILD-LEVELS.md` was regenerated.

The first full `validate-plan` caught three leaf/scope defects missed by the
scaffolds: a power-series proof cited an FTC **Examples** item, straight-line
homotopy cited a connectedness **Examples** item, and the interval example did
the same. The repair replaces the FTC example with `thm-ftc-first-part`, proves
the elementary graph-metric clauses directly rather than citing the later
metric-space page, removes the B-page convexity citations, and adds only the
needed earlier A-page prerequisites (`finite-counting-and-binomial-coefficients`,
`properties-of-the-integral-and-the-working-ftc`,
`monoids-groups-and-subgroups`, and `connectedness`). A rerun passes:

- `validate-plan`: pass (no cycles, B-page dependencies, unresolved ids, or
  undeclared prerequisite errors);
- `depsource`: pass (0 unresolved; selected external dependencies are published
  or earlier planned);
- `fwdcheck`: pass; and
- `git diff --check`: pass.

Alpha's independent Step-4 reconciliation is recorded in
`research/frontier-5-alpha-step4.md`. It made no plan edit: these plan objects
have no page-summary/description field, so source-note prose proposals had no
valid target. It confirmed that changing item metadata or scope at this stage
would have been out of boundary.

The permanent paired-judge configuration was also preflighted before authoring:
`deepseek-v4-pro` reached the configured direct API successfully through
`tools/judge.mts --preflight --model deepseek-v4-pro`. The later final-text
sweep remains reserved for Step 7 and will use its shared ten-call global pool
with fresh `gpt-5.6-terra` calls on the identical hash-attested prompts.
The owner subsequently required explicit DeepSeek `xhigh` thinking. The durable
request setting is `reasoning_effort: "max"` with thinking enabled, because
DeepSeek's official API maps compatible `xhigh` to `max`; the actual configured
request was preflighted successfully again after that change.

## Step 5 — draft authoring complete

Six Sol/xhigh author runs completed without scope escalation: Filters B (8
items), CRT (23 A + 10 B), power series (30 A + 8 B), incidence (26 A + 8 B),
graph walks (35 A + 8 B), and homotopy (22 A + 7 B). Each authored exactly its
assigned files as `draft`/`session`, plus its two page files except Filters,
which correctly authored only its B page. No author published, audited, judged,
committed, or pushed.

The plan was mechanically synchronised from authored frontmatter after the
authors' evidence-backed dependency corrections (53 title/dependency fields).
The first cross-pair gate run passes full `precheck`, `validate-plan`,
`depcheck`, `fwdcheck`, and `depsource` with no unresolved item ids or draft
items on published pages. A touch snapshot was recorded as `after step-5
authoring`; creation is not charged as a repair.

Author reports identify the following material corrections for the later audit:
the CRT compatible noncoprime form and its modulus; power-series real-only
index/radius and FTC scope; incidence lower-/upper-finite inversion and general
finite sums; graph metric/contraction/Petersen conventions; homotopy finite
pasting and no-cone boundary; and Filters' exact finite-partition statement.
The detailed per-item evidence remains in the authors' handoff reports.

## Steps 6–10 — complete; owner publication pause

Independent Step-6 readers and Alpha completed the full proof/dependency audit.
Alpha's report is `research/frontier-5-alpha-audit.md`; its final manifest has
807 checked edges (415 same-batch, 392 published-backward, and no cross-batch,
forward, or unresolved edge). The personal twice-touched review is recorded in
`research/frontier-5-orchestrator-escalation-audit.md`.

The Step-7/8 paired ledger and adjudications are
`research/frontier-5-judge.jsonl` and
`research/frontier-5-judge-adjudications.jsonl`. Alpha adjudicated every actual
rejection candidate: 25 confirmed fatal, 19 confirmed nonfatal, and 11 false
positive records. DeepSeek/V4 Pro's current-context transport reset twice for
the derivative-radius lemma and the final Abel-transform replay; these are kept
as incomplete transport outcomes, not synthetic passes. All other final paired
replays use matching frozen prompts. The ledger retains one accidental duplicate
replay for transparency; the shared global pool nevertheless kept at most ten
judge calls in flight.

Final gates of record pass: full precheck, validate-plan, depcheck, fwdcheck,
extcheck, citecheck, rendercheck, depsource, scoped prosecheck, and `git diff
--check`. Step 9 found no in-flight scope-denial or prose warning. Seven
touchlog snapshots exist, and the audit escalation set is documented above.

Step 10 is now at the only permitted owner pause. All new items/pages remain
`draft`/`session`. No owner audit, publication, commit, or push has been done.
