# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-next-18-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-18
role: alpha-adjudicate
label: step7-c
covers: 6, 9

# Step 7 adjudication — group **c**, run `phase-2-next-18`

You are the group Alpha for batches **6**, **9**: 4 A/B pair(s), 8 page(s), 104 item(s), 39 open rejection(s) over 39 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-18-alpha-c-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-18-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `suslin-trees-lines-algebras-and-independence` | A | foundations | 687 | `finite-support-iterations-and-martins-axiom`, `condensation-gch-and-diamond-in-l`, `weak-choice-principles-and-sierpinskis-theorem` |
| 6 | `suslin-trees-lines-algebras-and-independence-examples` | B | foundations | 688 | `suslin-trees-lines-algebras-and-independence` |
| 6 | `proper-forcing-countable-support-iterations-and-pfa` | A | foundations | 707 | `finite-support-iterations-and-martins-axiom`, `large-cardinals-measures-and-elementary-embeddings`, `suslin-trees-lines-algebras-and-independence` |
| 6 | `proper-forcing-countable-support-iterations-and-pfa-examples` | B | foundations | 708 | `proper-forcing-countable-support-iterations-and-pfa` |
| 9 | `prikry-forcing-and-gitiks-singular-cardinal-model` | A | foundations | 705 | `large-cardinals-measures-and-elementary-embeddings`, `symmetric-collapse-and-ultrafilter-free-models` |
| 9 | `prikry-forcing-and-gitiks-singular-cardinal-model-examples` | B | foundations | 706 | `prikry-forcing-and-gitiks-singular-cardinal-model` |
| 9 | `minimal-walks-oscillation-and-l-and-s-spaces` | A | foundations | 711 | `proper-forcing-countable-support-iterations-and-pfa`, `condensation-gch-and-diamond-in-l`, `borel-analytic-sets-perfect-sets-and-determinacy` |
| 9 | `minimal-walks-oscillation-and-l-and-s-spaces-examples` | B | foundations | 712 | `minimal-walks-oscillation-and-l-and-s-spaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `suslin-trees-lines-algebras-and-independence` — Suslin Trees, Lines, Algebras, and Independence (24 item(s))

- `def-suslin-hypothesis-and-suslin-algebra` · definition — The Suslin Hypothesis and Suslin algebras
- `lem-suslin-tree-normal-splitting-refinement` · lemma — Every Suslin tree has a normal splitting refinement
- `lem-suslin-tree-branch-first-difference-order` · lemma — The first-difference order on branches
- `lem-linear-order-completion-existence-uniqueness-and-density` · lemma — Linear-order completion and density
- `thm-suslin-tree-implies-suslin-line` · theorem — A Suslin tree yields a Suslin line
- `lem-suslin-line-nowhere-separable-quotient` · lemma — Nowhere-separable quotient of a Suslin line
- `lem-nowhere-separable-suslin-line-nested-interval-tree` · lemma — Nested intervals form a Suslin tree
- `thm-suslin-line-implies-suslin-tree` · theorem — A Suslin line yields a Suslin tree
- `lem-suslin-tree-forcing-is-countably-distributive` · lemma — Suslin-tree forcing is countably distributive
- `thm-suslin-tree-regular-open-algebra-is-suslin` · theorem — A Suslin tree has a Suslin regular-open algebra
- `lem-suslin-algebra-refining-antichain-tree` · lemma — Refining antichains of a Suslin algebra form a tree
- `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras` · theorem — Kurepa equivalence
- `cor-suslin-tree-yields-nonproductive-ccc` · corollary — A Suslin tree yields nonproductive ccc
- `thm-ma-aleph-one-eliminates-suslin-trees` · theorem — MA(aleph_1) eliminates Suslin trees
- `cor-ma-and-not-ch-implies-suslin-hypothesis` · corollary — MA plus not CH implies SH
- `def-countable-normal-tree-end-extension-forcing` · definition — Countable normal-tree end-extension forcing
- `thm-countably-closed-forcing-adds-a-normal-suslin-tree` · theorem — A countably closed forcing adds a normal Suslin tree
- `thm-every-countable-linear-order-embeds-in-the-rationals` · theorem — Every countable linear order embeds in the rationals
- `thm-special-trees-are-exactly-rationally-special` · theorem — Special trees are exactly rationally special
- `thm-specializing-forcing-kills-a-suslin-tree` · theorem — Specializing forcing kills a Suslin tree
- `thm-finite-support-iteration-kills-all-named-suslin-trees` · theorem — Finite-support bookkeeping kills all named Suslin trees
- `cor-formal-consistency-of-suslin-hypothesis` · corollary — Formal relative consistency of SH
- `cor-formal-consistency-of-not-suslin-hypothesis` · corollary — Formal relative consistency of not SH
- `thm-conditional-independence-of-suslin-hypothesis` · theorem — Conditional independence of SH

### `suslin-trees-lines-algebras-and-independence-examples` — Suslin Trees, Lines, Algebras, and Independence: Examples and Counterexamples (5 item(s))

- `ex-first-difference-order-on-a-binary-branching-tree` · example — First-difference order on a binary tree
- `ex-nested-interval-tree-from-a-suslin-line` · example — First stages of the nested-interval tree
- `ex-antichain-sealing-in-countable-tree-forcing` · example — Sealing a named maximal antichain
- `ex-specialization-generic-kills-a-tree` · example — A specialization generic kills a tree
- `fs-suslin-hypothesis-is-equivalent-to-continuum-hypothesis` · false-statement — SH is not equivalent to CH

### `proper-forcing-countable-support-iterations-and-pfa` — Proper Forcing, Countable-Support Iterations, and PFA (20 item(s))

- `def-countable-support-forcing-iteration` · definition — Countable-support forcing iterations
- `def-countable-model-generic-master-condition-and-proper-poset` · definition — Master conditions and proper posets
- `lem-proper-master-condition-characterizations` · lemma — Master-condition characterizations
- `thm-ccc-and-countably-closed-forcings-are-proper` · theorem — Ccc and countably closed forcings are proper
- `thm-proper-forcing-preserves-stationary-subsets-of-omega-one` · theorem — Proper forcing preserves stationary subsets of omega_1
- `lem-proper-iteration-master-condition` · lemma — Proper iteration master-condition lemma
- `thm-countable-support-iterations-preserve-properness` · theorem — Countable-support iterations preserve properness
- `def-proper-forcing-axiom` · definition — The Proper Forcing Axiom
- `cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis` · corollary — PFA implies MA(aleph_1) and SH
- `def-p-ideals-pid-pseudointersection-number-and-s-spaces` · definition — P-ideals, PID, p, and S-spaces
- `thm-pfa-implies-p-ideal-dichotomy` · theorem — PFA implies PID
- `lem-pfa-raises-the-pseudointersection-number` · lemma — PFA implies p is greater than omega_1
- `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces` · theorem — PID plus p greater than omega_1 eliminates S-spaces
- `cor-pfa-implies-no-s-spaces` · corollary — PFA implies no S-spaces
- `rem-laver-preparation-versus-pfa-bookkeeping` · remark — Laver preparation versus PFA bookkeeping
- `def-laver-guided-proper-bookkeeping-iteration` · definition — Laver-guided proper bookkeeping iteration
- `lem-laver-guided-iteration-size-collapse-and-factorization` · lemma — Size, collapse, and factorization for the PFA iteration
- `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa` · theorem — A supercompact cardinal can be forced to give PFA
- `lem-formal-pfa-iteration-verification-compiler` · lemma — Finite-fragment compiler for the PFA iteration
- `cor-formal-consistency-of-pfa-from-a-supercompact` · corollary — Formal consistency of PFA from a supercompact

### `proper-forcing-countable-support-iterations-and-pfa-examples` — Proper Forcing, Countable-Support Iterations, and PFA: Examples and Counterexamples (5 item(s))

- `ex-ccc-posets-are-proper-by-maximal-antichains` · example — Ccc posets are proper by maximal antichains
- `ex-baumgartner-club-shooting-is-proper` · example — Baumgartner's finite-condition generic club forcing is proper
- `ex-countable-support-fusion-at-a-limit-stage` · example — Countable-support fusion at a limit
- `ex-pfa-specializes-an-aronszajn-tree` · example — PFA specializes an Aronszajn tree
- `fs-ccc-and-proper-are-equivalent` · false-statement — Ccc and proper are not equivalent

### `prikry-forcing-and-gitiks-singular-cardinal-model` — Prikry Forcing and Gitik's Singular-Cardinal Model (20 item(s))

- `def-prikry-forcing-and-direct-extension` · definition — Prikry forcing and its direct-extension order
- `lem-normal-measure-rowbottom-homogeneity` · lemma — Finite-set homogeneity for a normal measure
- `thm-prikry-property` · theorem — The Prikry property
- `thm-prikry-generic-sequence-changes-cofinality` · theorem — The Prikry generic sequence changes cofinality to omega
- `thm-prikry-forcing-adds-no-bounded-subsets` · theorem — Prikry forcing adds no bounded subsets of kappa
- `lem-prikry-kappa-plus-chain-condition` · lemma — Prikry forcing is kappa-plus-cc but not ccc
- `thm-prikry-forcing-preserves-cardinals` · theorem — Prikry forcing preserves every cardinal
- `rem-magidor-and-extender-prikry-orientation` · remark — Magidor and extender Prikry forcing are orientation, not substitutes
- `def-gitik-strongly-compact-filter-system-and-class-forcing` · definition — Gitik's filter system and proper-class forcing
- `lem-gitik-restriction-amalgamation-and-prikry-property` · lemma — Restriction, amalgamation, and the set-sized Prikry property
- `thm-gitik-expanded-proper-class-forcing-theorem` · theorem — The forcing theorem for Gitik's expanded proper-class language
- `thm-gitik-intermediate-model-zf-minus-power-set` · theorem — The intermediate extension satisfies ZF minus Power Set plus Collection
- `thm-gitik-intermediate-model-makes-every-set-countable` · theorem — Every set is countable in the intermediate extension
- `def-gitik-finite-support-symmetric-submodel` · definition — Gitik's finite-support symmetric submodel
- `lem-gitik-support-approximation-and-bounded-stage` · lemma — Finite-support symmetry and bounded-stage approximation
- `lem-gitik-strong-compact-support-homogenization` · lemma — Strong compactness bounds symmetric decision patterns
- `thm-gitik-symmetric-submodel-satisfies-zf` · theorem — Gitik's symmetric submodel satisfies ZF
- `thm-gitik-every-limit-ordinal-has-cofinality-omega` · theorem — Every limit ordinal has cofinality omega in Gitik's model
- `cor-gitik-every-uncountable-cardinal-is-singular` · corollary — Every uncountable cardinal is singular in Gitik's model
- `thm-gitik-relative-consistency-from-strongly-compact-cardinals` · theorem — Relative consistency from a proper class of strongly compact cardinals

### `prikry-forcing-and-gitiks-singular-cardinal-model-examples` — Prikry Forcing and Gitik's Singular-Cardinal Model: Examples and Counterexamples (3 item(s))

- `ex-prikry-stems-and-direct-extensions` · example — Stems, direct extensions, and the generic sequence
- `ex-prikry-bounded-name-fusion` · example — A bounded-name direct-extension fusion
- `fs-prikry-forcing-is-ccc` · false-statement — False: Prikry forcing is ccc

### `minimal-walks-oscillation-and-l-and-s-spaces` — Minimal Walks, Oscillation, and L- and S-Spaces (24 item(s))

- `def-set-theoretic-l-and-s-spaces` · definition — L-spaces and S-spaces
- `def-c-sequences-and-minimal-walk-traces-on-omega-one` · definition — C-sequences and minimal-walk traces
- `lem-minimal-walk-trace-concatenation-and-limit-control` · lemma — Trace concatenation and limit control
- `def-minimal-walk-weights-and-coherent-functions` · definition — Minimal-walk weights and coherent functions
- `lem-minimal-walk-functions-are-coherent-and-finite-to-one` · lemma — The minimal-walk functions are coherent and finite-to-one
- `def-oscillation-on-minimal-walk-lower-traces` · definition — Oscillation on lower traces
- `lem-moore-club-extension-for-minimal-walks` · lemma — Moore's club extension lemma
- `thm-moore-oscillation-block-lemma` · theorem — The oscillation block lemma
- `thm-moore-oscillation-colouring-pattern` · theorem — The Moore colouring realizes finite binary patterns
- `def-moore-l-space-topology` · definition — Moore's clopen-generated topology
- `lem-moore-topology-is-nonseparable` · lemma — Every uncountable Moore subspace is nonseparable
- `lem-moore-no-cross-injection` · lemma — The Moore colouring forbids cross-injections
- `lem-moore-topology-is-hereditarily-lindelof` · lemma — Moore's topology is hereditarily Lindelof
- `thm-moore-zfc-l-space` · theorem — A ZFC L-space
- `def-ordered-fundamental-space-and-nice-refinement` · definition — Ordered fundamental spaces and nice refinements
- `lem-nice-refinement-exists-and-is-not-lindelof` · lemma — Nice refinements exist and are regular but not Lindelof
- `lem-ch-nice-refinement-is-strongly-hereditarily-separable` · lemma — CH makes the nice refinement strongly hereditarily separable
- `thm-ch-implies-an-s-space-exists` · theorem — CH implies that an S-space exists
- `def-simple-dichotomy-for-omega-one-generated-ideals` · definition — The simple dichotomy for omega-one-generated ideals
- `thm-pfa-implies-the-simple-ideal-dichotomy` · theorem — PFA implies the simple ideal dichotomy
- `lem-regular-nonhereditarily-lindelof-space-yields-ideal-witness` · lemma — A non-hereditarily-Lindelof regular space yields an ideal witness
- `thm-pfa-implies-there-are-no-s-spaces` · theorem — PFA implies there are no S-spaces
- `cor-supercompact-consistency-of-no-s-spaces` · corollary — A supercompact gives the relative consistency of no S-spaces
- `thm-l-and-s-space-existence-is-asymmetric` · theorem — L-space and S-space existence is asymmetric

### `minimal-walks-oscillation-and-l-and-s-spaces-examples` — Minimal Walks, Oscillation, and L- and S-Spaces: Examples and Counterexamples (3 item(s))

- `ex-a-finite-minimal-walk-and-its-lower-trace` · example — A finite minimal walk and its lower trace
- `ex-oscillation-pattern-controls-clopen-membership` · example — An oscillation pattern controls clopen membership
- `fs-l-space-and-s-space-existence-are-dual-zfc-theorems` · false-statement — False: L-space and S-space existence are dual ZFC theorems

## Your seams

Your pages depend on another group's:

- `prikry-forcing-and-gitiks-singular-cardinal-model` requires `symmetric-collapse-and-ultrafilter-free-models` (group d, batch 7)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

6 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-0a1dcfacefd8f2d6de45bf5a · `thm-moore-oscillation-colouring-pattern`** (from group c, would-be-fatal) — Counting mismatch between the proof and the block lemma it invokes. Step 2.1 asserts that the evaluated label q_i 'occurs exactly m additional times in the oscillation set for (a(i), b_m(pi(i))), while every other evaluated-label count is unchanged', and step 3.1 defines h_i as 'the number of q_i-labelled oscillations'. But o as defined in def-oscillation-on-minimal-walk-lower-traces is a sum over the whole labelled lower trace: o(alpha,beta) = sum over q of |mu(alpha,beta;alpha)^{-1}({q})| mod q, and step 4.1 uses r_i built from those same full-trace counts. The block lemma (thm-moore-oscillation-block-lemma, clauses 2-4) controls the oscillation set and the labels of the marked points only; each block L(alpha,b^+(j)) = L(alpha,b(j)) union L^+ also adds all the other points of L^+, whose labels are w of walk nodes at or above delta and are not controlled by any clause, so the full-trace count of q_i-labelled points need not increase by exactly m and the residue computation in step 4.1 does not follow from the stated clauses. Since I could not retrieve Moore's Section 5 definition (p. 15), I cannot tell whether the fix is to sum over Osc(alpha,beta) instead of L(alpha,beta) or to add the missing trace-count argument.
- **s8a-da2ff32a6a638cb8c38cb319 · `def-oscillation-on-minimal-walk-lower-traces`** (from group c, gap-a-reader-closes) — Same reconciliation as for thm-moore-oscillation-colouring-pattern, at the definition: o(alpha,beta) sums count-mod-q terms over the full labelled lower trace mu(alpha,beta;alpha)^{-1}({q}), while the only counting statement its consumer has is about the oscillation set (and, for the topology, Moore's Section 6 only records c = o mod 2). A reader must check against the source whether the sum is meant to range over L(alpha,beta) or over Osc(alpha,beta); the two give different values and only the latter is what the block lemma's clauses directly control.
- **s8a-20081d9e34d8f11f672f7bc9 · `lem-moore-club-extension-for-minimal-walks`** (from group c, gap-a-reader-closes) — Step 3.1 defines the set X by clauses mentioning w_delta, mu(delta,b(j)) and gamma via delta = M cap omega_1, and then states 'All parameters in this definition belong to M: restrictions below gamma_0 are finite modifications, by [F1], of restrictions coded in M.' Step 1.1 itself records that delta is not in M, and the only justification offered covers the restrictions below gamma_0; membership of w_delta and of the labelled trace mu(delta,b(j)) in M is not established, so the definition of X must be re-read as a formula relative to the cut (with the finite-modification data as the parameters) before elementarity can be applied.
- **s8a-d06f5e6da526cad859181398 · `thm-gitik-intermediate-model-zf-minus-power-set`** (from group c, gap-a-reader-closes) — Step 1.1 ('Every ground-definable antichain in P_3 is a set') is the load-bearing step for the Separation/Collection arguments that follow, and I could not reconstruct its thinning details: after thinning to a fixed finite support size and section-length pattern, the argument needs 'some least support position is unbounded', disjoint upper petals for a proper subclass, and amalgamation of two such conditions via lem-gitik-restriction-amalgamation-and-prikry-property; the last step in particular depends on the amalgamation clause of a proper-class forcing with unbounded coordinate domains. I flag this as a step whose justification I had to attempt to reconstruct and could not close within this pass.
- **s8a-d090b8336d9fbcd33b7a4177 · `fs-suslin-hypothesis-is-equivalent-to-continuum-hypothesis`** (from group c, presentation) — Step 1.1 displays '$T_{mathrm{MA}}=\mathrm{ZFC}+\mathrm{MA}+\neg\mathrm{CH}$': the first \mathrm is missing its backslash, so KaTeX parses the subscript as literal italic letters plus a group and the theory name renders wrong. Wording-only rendering defect in the refutation's first symbolic display.
- **s8a-54150a9d2d46b78f3fc8aac9 · `def-simple-dichotomy-for-omega-one-generated-ideals`** (from group c, presentation) — In the sentence after the displayed equivalence for the increasing generators the text reads '$a\in\mathcal Iquad\Longleftrightarrow\quad\exists\alpha<\omega_1\ \ a\subseteq^*B_\alpha$': 'Iquad' is a typo for '\mathcal I\quad', so the formula renders with a stray word in the definition's key reformulation.

Append one owning-group disposition per warning to `research/phase-2-next-18-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-formal-consistency-of-suslin-hypothesis` | `suslin-trees-lines-algebras-and-independence` | gpt-5.6-terra | `82c6035cedf6fe69b0302c39e22f7c7585edace1b1f483965de544b98b482a9e` |
| `cor-supercompact-consistency-of-no-s-spaces` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `0ad900ee824847dd32e85b0704bfd34a9887c00a8bd3274587f56e4205a9368a` |
| `def-countable-support-forcing-iteration` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `ae3ddb82f297e7e6deef705b135d2ef26ae6b33ca658000f1c0ffd8027ed0af6` |
| `def-gitik-finite-support-symmetric-submodel` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `b775791c8a4b43265633174b25045ff69718e2e3523cd918c7aea2a5797784bc` |
| `def-gitik-strongly-compact-filter-system-and-class-forcing` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `6bea573f3950ca776664b50739ac2c2599ff94842634d564df5c87855410dc76` |
| `def-laver-guided-proper-bookkeeping-iteration` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `f816f440fa5c812b8265e0db5059dd09885c272b648b8ba9b22cc029cef1f35f` |
| `def-ordered-fundamental-space-and-nice-refinement` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `f181bb44d76c57d65665df8d4db73b96a105ada24eee3c3a77255d0a2dcfd045` |
| `def-set-theoretic-l-and-s-spaces` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `a29e4a60551b3f717aa595d6f6c8d53febc20c66a3bc5ede9248c48440c95996` |
| `def-simple-dichotomy-for-omega-one-generated-ideals` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `86c70f805b5cc2461dd57684d90e35d1c54783984e7c8d82b2b95689e22a3eed` |
| `ex-countable-support-fusion-at-a-limit-stage` | `proper-forcing-countable-support-iterations-and-pfa-examples` | gpt-5.6-terra | `59e71400f1322ed12e2eb0e92fbf82d001ef37535b003c3fdef6042195b4232d` |
| `ex-nested-interval-tree-from-a-suslin-line` | `suslin-trees-lines-algebras-and-independence-examples` | gpt-5.6-terra | `9c992117532336f33d1d7f0553039b36a4806f2d7e3a0e293fffe16ea84db826` |
| `ex-prikry-stems-and-direct-extensions` | `prikry-forcing-and-gitiks-singular-cardinal-model-examples` | gpt-5.6-terra | `fe79178f5c5e569fe090dba441210ca9f38a30d4aa65ff3b9789eaac2a80cd35` |
| `lem-formal-pfa-iteration-verification-compiler` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `a0025d313b045fc0bfe9abd04271688c2d3d97546bd47dbb87c32516cc2ffd79` |
| `lem-gitik-strong-compact-support-homogenization` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `bac462afc5d91097bd2bd9a441eb57f9fb1e8aae7f7286d2b4cfbd8cdfe29ab0` |
| `lem-gitik-support-approximation-and-bounded-stage` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `6b8b97f57f1fb5c424d3667a4474d22c355b7ab1c78b7949d38a3b91b7d3f661` |
| `lem-laver-guided-iteration-size-collapse-and-factorization` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `b146632967360eb1b56150c351665c4deaba7712ce87b0b6f5495281e46c124e` |
| `lem-linear-order-completion-existence-uniqueness-and-density` | `suslin-trees-lines-algebras-and-independence` | gpt-5.6-terra | `3783df1bf45c3ec1213449588e4a7d356df11926989c47f197f2e08d9ab2312d` |
| `lem-moore-club-extension-for-minimal-walks` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `3ba8778dee033ade2be2d13908e1fe7130c44d6e90b9d52ef2637dd2e7b170d1` |
| `lem-moore-no-cross-injection` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `caf3e78d6c75fdb471090079e936cd696a765f7f3813c0695d2934a11d048f0f` |
| `lem-moore-topology-is-hereditarily-lindelof` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `ddb8abfdee2da06616302c2cc9651fce34ca643584d0cd141d5991ddcb2cc123` |
| `lem-nice-refinement-exists-and-is-not-lindelof` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `3ca6f3757b6d9c68783af09810604b88040bd8d6f6f186509087d4421196e7d1` |
| `lem-normal-measure-rowbottom-homogeneity` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `c214047c939b29d75add32a7b96714112a231dcb7a1699de49f5192fb702b00a` |
| `lem-proper-iteration-master-condition` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `87561d634f06a49e31a7735982b0d0919b04b76f1c094968f57f8531381cbfc3` |
| `lem-proper-master-condition-characterizations` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `77397f5a275e5c78ad9fd527b5b0cbe9504e97afa43ace422bf1a9fe0d8c6760` |
| `lem-suslin-tree-forcing-is-countably-distributive` | `suslin-trees-lines-algebras-and-independence` | gpt-5.6-terra | `e21bc84527d1f4df4b53efe41033017ad1075ae52df632bba99d5eb6face0c46` |
| `lem-suslin-tree-normal-splitting-refinement` | `suslin-trees-lines-algebras-and-independence` | gpt-5.6-terra | `411ccf5e16294359507bca6a1a31113444f2d6fb7b4333be5485730b813d28cc` |
| `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `acd6049b26ded0b1e14c375fd2d0ccc86d097a2b30d3810f790dd55df9fe34b4` |
| `thm-countable-support-iterations-preserve-properness` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `174d0d25910c5ec8e7a2aba820ad45cd2ba685e738eb27478ea844f8fccbab15` |
| `thm-gitik-expanded-proper-class-forcing-theorem` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `273d292f03c3ad75892d38f05251b68b94483ad6012de98d096b5a3b3aafaa6e` |
| `thm-gitik-intermediate-model-makes-every-set-countable` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `1d7da3c5184b34104739660d50e9b9965d313e377eeea64004b03d7cbf33b48c` |
| `thm-gitik-intermediate-model-zf-minus-power-set` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `6a57f224d668e777d37f52cf2461145bd45ed7bea986b9e00f0d2c1b81a33a21` |
| `thm-gitik-relative-consistency-from-strongly-compact-cardinals` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `41abd72baccd9923d45070a1f81a526cb27ef2518e8a387cac4c24f7a35be7dd` |
| `thm-gitik-symmetric-submodel-satisfies-zf` | `prikry-forcing-and-gitiks-singular-cardinal-model` | gpt-5.6-terra | `ce263b7913ff215acdbcfc3862f7e768dc2a707331af8d482005b48b9a15d5a7` |
| `thm-moore-oscillation-block-lemma` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `4f532bfe422df25ef10282f79e6c10067a913d85394b4d125e239e46f36f9b70` |
| `thm-moore-oscillation-colouring-pattern` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `4b296c77ebb603a043d4c6141232f7c0837ee4017a9dc7beaf65bd292f0fefb5` |
| `thm-moore-zfc-l-space` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `bdf20e698ea48fd325eccbcf8069b6ca0f889b529c4c63d705ba095a644e3093` |
| `thm-pfa-implies-p-ideal-dichotomy` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `391edf2c537be68d9c978448a17c67aa85c5febb4a92a4036ec6abc00359c1b1` |
| `thm-pfa-implies-the-simple-ideal-dichotomy` | `minimal-walks-oscillation-and-l-and-s-spaces` | gpt-5.6-terra | `caae93d7bb7d23776fdf6d1fc474c9640bbe8bbb4db6c13f80236506538f4ae0` |
| `thm-proper-forcing-preserves-stationary-subsets-of-omega-one` | `proper-forcing-countable-support-iterations-and-pfa` | gpt-5.6-terra | `ecca268a2457ca71f9e01ebd2f00c8b457ef736c0dc0fe72254cf8e463b3231c` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-18`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-18-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-18-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-18-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-18-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-18-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
