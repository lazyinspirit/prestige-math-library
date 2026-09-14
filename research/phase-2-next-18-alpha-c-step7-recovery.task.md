# Step 7 adjudication — group **c**, run `phase-2-next-18`

You are the group Alpha for batches **6**, **9**: 4 A/B pair(s), 8 page(s), 104 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-18`

Read `research/phase-2-next-18-judge-closure.json`,
`research/phase-2-next-18-judge.jsonl`,
`research/phase-2-next-18-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-18-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-18-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-18-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
