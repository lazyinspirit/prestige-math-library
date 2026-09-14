# Step 6 whole-group reading — group **c**, run `phase-2-next-18`

You are the group Alpha for batches **6**, **9**: 4 A/B pair(s), 8 page(s), 104 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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

---

# Step 6 — group reading digest, `phase-2-next-18`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
