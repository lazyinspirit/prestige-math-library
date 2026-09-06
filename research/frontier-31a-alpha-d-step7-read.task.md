# Step 7 whole-group reading — group **d**, run `frontier-31a`

You are the group Alpha for batches **21**, **22**: 3 A/B pair(s), 6 page(s), 66 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
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
| 21 | `the-arithmetical-hierarchy-and-posts-theorem` | A | computability-theory | 613 | `acceptable-numberings-smn-and-the-recursion-theorem` |
| 21 | `the-arithmetical-hierarchy-and-posts-theorem-examples` | B | computability-theory | 614 | `the-arithmetical-hierarchy-and-posts-theorem` |
| 21 | `time-and-space-hierarchy-theorems` | A | computability-theory | 627 | `space-complexity-savitch-and-tqbf`, `diagonalization-and-the-halting-problem` |
| 21 | `time-and-space-hierarchy-theorems-examples` | B | computability-theory | 628 | `time-and-space-hierarchy-theorems` |
| 22 | `logarithmic-space-nl-and-reachability` | A | computability-theory | 629 | `time-and-space-hierarchy-theorems` |
| 22 | `logarithmic-space-nl-and-reachability-examples` | B | computability-theory | 630 | `logarithmic-space-nl-and-reachability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-arithmetical-hierarchy-and-posts-theorem` — The Arithmetical Hierarchy and Post's Theorem (18 item(s))

- `def-bounded-arithmetic-formula` · definition — Bounded arithmetic formulas
- `def-sigma-n-pi-n-and-delta-n-sets` · definition — The classes Sigma_n^0, Pi_n^0, and Delta_n^0
- `lem-bounded-quantifiers-preserve-primitive-recursiveness` · lemma — Bounded quantifiers preserve primitive recursiveness
- `thm-sigma-one-sets-are-exactly-ce-sets` · theorem — Sigma_1^0 sets are exactly the computably enumerable sets
- `cor-delta-one-sets-are-exactly-decidable` · corollary — Delta_1^0 sets are exactly the decidable sets
- `lem-prenex-normalization-preserves-level` · lemma — Prenex normalization preserves the arithmetical level
- `def-arithmetical-level-completeness` · definition — Completeness at an arithmetical level
- `thm-halting-is-sigma-one-complete` · theorem — The halting set is Sigma_1^0-complete
- `thm-totality-is-pi-two-complete` · theorem — The totality set is Pi_2^0-complete
- `def-relative-computability-and-enumerability` · definition — Relative computability and relative enumerability
- `lem-oracle-computation-has-a-finite-query-witness` · lemma — An oracle computation has a finite query witness
- `thm-posts-theorem` · theorem — Post's theorem
- `lem-diagonal-set-at-each-level` · lemma — A diagonal set at each arithmetical level
- `thm-arithmetical-hierarchy-is-strict` · theorem — The arithmetical hierarchy is strict
- `def-limit-computable-function` · definition — Limit-computable functions
- `thm-shoenfield-limit-lemma` · theorem — Shoenfield's limit lemma
- `fs-sigma-n-and-pi-n-are-disjoint` · false-statement — False: Sigma_n^0 and Pi_n^0 are disjoint
- `fs-limit-computable-has-a-known-stabilization-stage` · false-statement — False: a limit-computable function has a known stabilization stage

### `the-arithmetical-hierarchy-and-posts-theorem-examples` — The Arithmetical Hierarchy and Post's Theorem: Examples and Counterexamples (3 item(s))

- `ex-sigma-one-sets-are-exactly-ce-sets` · example — Reading a c.e. definition as a Sigma_1^0 formula
- `ex-shoenfield-limit-lemma` · example — A limit approximation computed from the halting oracle
- `cex-sigma-n-and-pi-n-are-disjoint` · counterexample — A set lying in both Sigma_n^0 and Pi_n^0

### `time-and-space-hierarchy-theorems` — Time and Space Hierarchy Theorems (20 item(s))

- `def-efficient-universal-simulation-with-clock` · definition — An efficient universal simulation with a clock
- `lem-effective-enumeration-of-clocked-machines` · lemma — Effective enumeration of clocked machines
- `lem-time-diagonal-language-respects-its-budget` · lemma — The time-diagonal language respects its budget
- `thm-deterministic-time-hierarchy` · theorem — The deterministic time hierarchy theorem
- `cor-p-is-properly-contained-in-exp` · corollary — P is properly contained in EXP
- `thm-nondeterministic-time-hierarchy` · theorem — The nondeterministic time hierarchy theorem
- `lem-space-bounded-universal-simulation` · lemma — Space-bounded universal simulation
- `lem-space-diagonal-machine-halts` · lemma — The space-diagonal machine halts
- `thm-deterministic-space-hierarchy` · theorem — The deterministic space hierarchy theorem
- `def-read-only-input-workspace-classes` · definition — Read-only-input work-space classes and constructibility
- `lem-read-only-workspace-universal-simulation` · lemma — Universal simulation preserves read-only work space up to constants
- `lem-read-only-workspace-diagonal-machine-halts` · lemma — The read-only-workspace diagonal machine halts
- `thm-read-only-workspace-space-hierarchy` · theorem — The read-only-workspace space hierarchy theorem
- `lem-read-only-workspace-simulates-in-all-tapes-space` · lemma — Read-only work space becomes all-tapes space after charging input
- `cor-l-is-properly-contained-in-pspace` · corollary — L is properly contained in PSPACE
- `def-language-padding` · definition — Language padding
- `lem-padding-transfers-time-bounds` · lemma — Padding transfers time bounds
- `thm-gap-and-union-theorems-for-complexity-bounds` · theorem — Gap and union theorems for abstract complexity bounds
- `prop-hierarchy-theorems-do-not-separate-p-from-np` · proposition — Hierarchy theorems do not separate P from NP
- `fs-unrestricted-diagonalization-respects-any-bound` · false-statement — False: unrestricted diagonalization respects any resource bound

### `time-and-space-hierarchy-theorems-examples` — Time and Space Hierarchy Theorems: Examples and Counterexamples (3 item(s))

- `ex-time-diagonal-language-respects-its-budget` · example — Budgeting a time-diagonal language
- `ex-hierarchy-theorems-do-not-separate-p-from-np` · example — Why a hierarchy separation is not a P versus NP separation
- `cex-unrestricted-diagonalization-respects-any-bound` · counterexample — Overhead breaks an unrestricted diagonalization claim

### `logarithmic-space-nl-and-reachability` — Logarithmic Space, NL, and Reachability (19 item(s))

- `def-read-only-input-logspace-machine` · definition — A read-only-input logarithmic-space machine
- `def-l-and-nl` · definition — The classes L and NL
- `lem-logspace-machines-have-polynomially-many-configurations` · lemma — Logspace machines have polynomially many configurations
- `def-logspace-many-one-reduction` · definition — Logspace many-one reduction
- `lem-logspace-reductions-compose` · lemma — Logspace many-one reductions compose
- `def-directed-st-connectivity` · definition — Directed s-t connectivity
- `thm-directed-st-connectivity-is-nl-complete` · theorem — Directed s-t connectivity is NL-complete
- `thm-read-only-input-savitch-simulation` · theorem — Savitch simulation into read-only-input deterministic work space
- `thm-nl-is-contained-in-dspace-log-squared-n` · theorem — NL is contained in read-only-input DWORKSPACE(log-squared n)
- `def-inductive-reachable-vertex-count` · definition — Inductive counts of reachable vertices
- `lem-reachability-count-is-verifiable-in-nl` · lemma — A reachable-vertex count is verifiable in NL
- `lem-nonreachability-has-an-inductive-counting-certificate` · lemma — Nonreachability has an inductive counting certificate
- `thm-immerman-szelepcsenyi-nl-equals-conl` · theorem — Immerman-Szelepcsényi theorem: NL equals coNL
- `cor-nspace-is-closed-under-complement-above-logspace` · corollary — Read-only-input nondeterministic work space is closed under complement above logarithmic space
- `def-logspace-uniform-circuit-family` · definition — A logspace-uniform Boolean circuit family
- `def-p-complete-under-logspace-reductions` · definition — P-completeness under logspace reductions
- `lem-polynomial-time-computations-have-logspace-uniform-circuits` · lemma — Polynomial-time computations have logspace-uniform circuit families
- `thm-circuit-value-is-p-complete` · theorem — Circuit Value is P-complete
- `fs-nl-equals-conl-follows-by-state-swapping` · false-statement — NL equals coNL follows by swapping accepting and rejecting states

### `logarithmic-space-nl-and-reachability-examples` — Logarithmic Space, NL, and Reachability: Examples and Counterexamples (3 item(s))

- `ex-logspace-reductions-compose` · example — Composing two logspace reductions through a virtual tape
- `ex-circuit-value-is-p-complete` · example — A small computation tableau compiled to Circuit Value
- `cex-nl-equals-conl-follows-by-state-swapping` · counterexample — A nondeterministic branch tree where state swapping is not complementing

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-31a`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
