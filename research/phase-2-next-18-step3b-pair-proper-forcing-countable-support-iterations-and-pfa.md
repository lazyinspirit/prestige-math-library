# Step 3b authoring checkpoint — Proper forcing, countable-support iterations, and PFA

Run: `phase-2-next-18`  
Role: `alpha-high`  
A page: `proper-forcing-countable-support-iterations-and-pfa`  
B page: `proper-forcing-countable-support-iterations-and-pfa-examples`

## Preflight and scaffold audit

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, SET-27 in the completion-track
  design, the batch task and notes, the current batch manifest/coverage/contracts,
  the Step 3a report and decision, the dependency input/ledger instructions, and
  the exact statements and proofs of the relevant published suppliers. No
  `research/phase-2-next-18-owner-authoring-direction.md` file exists.
- The immutable scope is the existing 20-item A page and five-item B page. The
  shared batch also contains the Suslin-tree pair; its manifest rows, contracts,
  items, and pages are not owned here and must remain untouched.
- The source passages read in full are: Karagila, Chapter 8, printed pp. 38–42;
  Cummings, Chapter 24, printed pp. 97–101; Moore–Venturi, §§3.2, 4.3 and 5,
  printed pp. 4–9; Todorcevic, §2 and §7, printed pp. 2–3 and 20–22; and Jech,
  Chapter 31, Theorem 31.7 and Theorem 31.15 with Lemmas 31.16–31.18, printed
  pp. 602–606. The Jech PDF was fetched from the author/course-hosted chapter
  URL, has 312554 bytes and SHA-256
  `b3db26ec5c63801e2d40d7370199c27055c64923064852ef6b90aef487d44c32`.
- Confirmed local scaffold defect: `lem-proper-iteration-master-condition` and
  `ex-countable-support-fusion-at-a-limit-stage` described a “coordinatewise
  union” without the coherence hypothesis needed for the union to be a
  condition. Repair: state Jech's proper iteration lemma with a coherent
  sequence whose successive restrictions are literally preserved, then take
  the union of those initial segments. No coordinatewise lower bound of an
  arbitrary descending sequence of iterand conditions is used.
- Confirmed page-metadata omission: the A page consumes SET-17 suppliers
  `thm-ma-aleph-one-eliminates-suslin-trees` and
  `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras`, so its manifest
  `requires` must also include `suslin-trees-lines-algebras-and-independence`.
  The plan spec still has only the two earlier page prerequisites; this is a
  pre-splice plan mismatch to report for Step 4, not a reason to hide the edge.
- The batch-6 cross-batch dependency input is correctly empty: both A/B pairs
  consume only earlier pages or their own A page. Later batch-9 consumers of
  this pair are recorded in batch 9's consumer-owned input.
- Definitions make no selections and will be authored choice-free. Proofs that
  enumerate countable models/dense families, take elementary submodels, select
  Laver/embedding witnesses, or thin families use ambient AC explicitly and
  retain `def-axiom-of-choice`. The PFA/PID consequences retain their additional
  hypotheses rather than conflating incompatible forcing-axiom branches.
- No confirmed defect was found in the published suppliers inspected so far.
  In particular the Laver-preparation item is used only for the comparison
  remark, never as a premise of the PFA iteration.

## Item checkpoints

### `def-countable-support-forcing-iteration` — repaired, confidence 1

- Exact claim/conventions: supplied top names; two-step successors;
  countable-support inverse limits; stronger-is-smaller order; restrictions;
  and the quotient/tail-name requirement. The text explicitly permits unions
  only for coherent initial segments and defers the countable-union choice cost.
- Source locator: Cummings, Chapters 5 and 24; definition cross-checked against
  the already published finite-support interface.
- Examined dependencies: `def-two-step-forcing-iteration`,
  `def-finite-support-forcing-iteration`, `def-forcing-names-and-name-rank`,
  `def-countable`.
- Checks: focused precheck, rendercheck and strict proof-contract check pass.
  The item decision is recorded as `repaired`, confidence 1.
- Open gap: none. Next item:
  `def-countable-model-generic-master-condition-and-proper-poset`.

### `def-countable-model-generic-master-condition-and-proper-poset` — repaired, confidence 1

- Exact claim/conventions: for countable $M\prec H_\theta$, $(M,P)$-generic
  means every $D\in M$ dense in $P$ has $D\cap M$ predense below $q$;
  mastery adds $q\leq p$ for $p\in P\cap M$. Properness uses every model at
  every sufficiently large regular $\theta$. No false requirement $q\in M$ or
  $q\in D$ appears.
- Source locators: Karagila Definition 8.1 and Cummings Definition 24.1.
- Examined dependencies: `def-dense-open-sets-and-model-generic-filters`,
  `thm-countable-elementary-submodels-and-transitive-collapses`,
  `def-hereditary-size-and-h-kappa`,
  `def-club-filter-and-nonstationary-ideal`.
- Choice: definition only; no selection. Checks: focused precheck, rendercheck,
  strict contract pass. A follow-up precision repair made the well-ordered
  $H_\theta$/Skolem-closure convention explicit; the current item decision is
  `repaired`, confidence 1.
- Open gap: none. Next item: `lem-proper-master-condition-characterizations`.

### `lem-proper-master-condition-characterizations` — repaired, confidence 1

- Exact claim: $(M,P)$-genericity, forced meeting of $D\cap M$, ground-model
  trace equality, and ordinal trace equality are equivalent. A least
  club-closure function in a larger well-ordered $H_\lambda$ proves the
  club/all-model properness equivalence; the $H_\mu$ trace works because
  $\mu>2^{|P|}$ contains every subset of $P$.
- Source locators: Karagila Proposition 8.4; Cummings Lemma 24.2; Jech
  Theorem 31.7 and Lemma 31.16.
- Examined dependencies: `def-countable-model-generic-master-condition-and-proper-poset`,
  `thm-forcing-theorem`, `thm-downward-lowenheim-skolem-with-parameters`,
  `def-axiom-of-choice`.
- AC use: maximal antichains, well-orders, and ambient Skolem closures; no
  generic filter is selected. Focused precheck, rendercheck, strict contract
  pass; current decision `repaired`, confidence 1.
- Open gap: none. Next item: `thm-ccc-and-countably-closed-forcings-are-proper`.

### `thm-ccc-and-countably-closed-forcings-are-proper` — accepted, confidence 1

- Exact claim: each ccc condition is already a master because every maximal
  antichain in $M$ is countable and hence contained in $M$; in the countably
  closed case, a descending sequence inside $M$ meets all its dense sets and
  an external common lower bound is master. No converse is claimed.
- Source locator: Karagila Propositions 8.5 and 8.7, printed p.39.
- Examined dependencies: `lem-proper-master-condition-characterizations`,
  `def-poset-ccc-and-knaster-property`,
  `def-kappa-closure-distributivity-and-chain-condition`,
  `def-axiom-of-choice`.
- AC use: maximal antichains, dense-set enumeration and recursive extensions.
  Focused precheck, rendercheck and strict contract pass; decision `accept`,
  confidence 1.
- Open gap: none. Next item:
  `thm-proper-forcing-preserves-stationary-subsets-of-omega-one`.

### `thm-proper-forcing-preserves-stationary-subsets-of-omega-one` — accepted, confidence 1

- Exact claim: a master over $M$ with $\delta=M\cap\omega_1\in S$ traps the
  first $\delta$ values of a normal enumeration of a named club below
  $\delta$; monotonicity makes them cofinal and closure puts $\delta$ in the
  club. A separate name-trapping argument bounds every named
  $\omega$-sequence in the ground $\omega_1$.
- Source locator: Karagila Theorems 8.8–8.9, printed pp.39–40.
- Examined dependencies: `lem-proper-master-condition-characterizations`,
  `def-club-filter-and-nonstationary-ideal`, `thm-forcing-theorem`,
  `def-axiom-of-choice`.
- AC use: the elementary model/stationary trace and normal club enumeration.
  Focused precheck, rendercheck and strict contract pass; decision `accept`,
  confidence 1.
- Open gap: none. Next item: `lem-proper-iteration-master-condition`.

### `lem-proper-iteration-master-condition` — repaired, confidence 1

- Exact claim: Jech's proper-iteration extension lemma, including an arbitrary
  earlier master $q_0$ and an $M$-condition name already entering the earlier
  generic. The limit construction recursively preserves literal initial
  segments, unions them below $\rho=\sup(M\cap\alpha)$, and supplies top names
  on the tail. Membership of the dense witnesses in the final generic follows
  from their supports lying in $M\cap\alpha$ and their cofinal projections; it
  is not inferred from a nonexistent coordinatewise lower bound.
- Source locator: Jech, Lemma 31.17 and its complete proof, printed pp.605–606;
  supporting Lemmas 31.16 and 31.18 on the same pages.
- Examined dependencies: `def-countable-support-forcing-iteration`,
  `lem-proper-master-condition-characterizations`,
  `thm-two-step-generic-factorization-and-ccc`, `thm-forcing-theorem`,
  `thm-transfinite-induction`, `thm-countable-union-of-countable`,
  `def-axiom-of-choice`.
- AC use: enumeration of the countable model's dense sets, recursive witness
  choices, names, and the countable union of supports. Focused precheck,
  rendercheck and strict contract pass; decision `repaired`, confidence 1.
- Open gap: none. Next item:
  `thm-countable-support-iterations-preserve-properness`.

### `thm-countable-support-iterations-preserve-properness` — accepted, confidence 1

- Exact claim: every initial segment, including the full iteration, is proper.
  For arbitrary $M$ and $p\in P_\alpha\cap M$, the proof applies the completed
  master lemma at the trivial stage to the canonical name for $p$.
- Source locator: Jech, Proper Iteration Lemma 31.17 and Theorem 31.15,
  pp.604–606; Karagila Fact 8.15.
- Examined dependencies: `lem-proper-iteration-master-condition`,
  `def-countable-model-generic-master-condition-and-proper-poset`,
  `def-axiom-of-choice`.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1. No additional iterand-closure assumption is used.
- Open gap: none. Next item: `def-proper-forcing-axiom`.

### `def-proper-forcing-axiom` — accepted, confidence 1

- Exact claim/conventions: PFA applies to every nonempty proper partial order
  and every family of at most $\omega_1$ dense sets. Filters use the shared
  stronger-is-smaller convention. Empty families are included, and PFA is not
  identified with $\mathrm{FA}_{<2^{\aleph_0}}(\mathrm{proper})$.
- Source locator: Cummings Definition 24.10, p.99.
- Examined dependencies:
  `def-countable-model-generic-master-condition-and-proper-poset`,
  `def-martins-axiom`. The definition makes no selection.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1.
- Open gap: none. Next item:
  `cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis`.

### `cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis` — accepted, confidence 1

- Exact claim: restricting PFA to ccc forcings gives the exact
  $\mathrm{MA}(\aleph_1)$ scheme; the published MA tree-elimination theorem and
  Kurepa tree/line equivalence then give the strong Suslin Hypothesis.
- Source locator: Karagila §§7–8, with the two completed local SET-17
  suppliers checked directly.
- Examined dependencies: `def-proper-forcing-axiom`,
  `thm-ccc-and-countably-closed-forcings-are-proper`,
  `thm-ma-aleph-one-eliminates-suslin-trees`,
  `thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras`,
  `def-axiom-of-choice`.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1. No continuum value is used.
- Open gap: none. Next item:
  `def-p-ideals-pid-pseudointersection-number-and-s-spaces`.

### `def-p-ideals-pid-pseudointersection-number-and-s-spaces` — repaired, confidence 1

- Exact claim/conventions: $\subseteq^*$ and orthogonality mean finite
  difference/intersection; ideals contain all finite sets; the P-ideal
  pseudounion quantifies over every omega-sequence; both PID alternatives are
  explicit; $\mathfrak p$ uses the strong finite intersection property and an
  infinite pseudointersection; hereditary topology quantifies over all
  subspaces; an S-space is regular, Hausdorff, hereditarily separable and
  non-Lindel&ouml;f.
- Source locators: Todorcevic §2, pp.2–3, and §7, pp.20–22.
- Examined dependencies: `def-countable`, `def-cardinal`,
  `def-regular-and-t3-spaces`, `def-hausdorff-space`, `def-separable-space`,
  `def-compactness-variants`, `def-hereditary-property`,
  `def-axiom-of-choice`.
- Repair: the scaffold's blanket ZF base was too strong for treating
  $\mathfrak p$ as an existing least cardinal. The predicates remain
  choice-free, while that cardinal-invariant clause is now explicitly ZFC.
  Focused precheck, rendercheck and strict contract pass; decision `repaired`,
  confidence 1.
- Open gap: none. Next item: `thm-pfa-implies-p-ideal-dichotomy`.

### `thm-pfa-implies-p-ideal-dichotomy` — accepted, confidence 1

- Exact claim: PFA implies both-alternative PID for an arbitrary P-ideal on an
  arbitrary base. The authored proof defines $Q_{\mathcal I}$ and its order,
  proves properness by the finite-model side-condition and
  $\mathcal J^+$-splitting compatibility construction, forces an uncountable
  union with all countable subsets in the ideal, and uses omega-one many
  decision dense sets to obtain the ground witness.
- Source locator: Moore/Venturi §§3.2, 4.3 and 5, pp.5–9, read through the end
  of Theorem 5.1; Todorcevic §§2 and 6–7 for the convention and context.
- Examined dependencies: `def-proper-forcing-axiom`,
  `def-p-ideals-pid-pseudointersection-number-and-s-spaces`,
  `lem-proper-master-condition-characterizations`, `def-axiom-of-choice`.
- Checks: focused reflow/precheck, rendercheck and strict contract pass;
  decision `accept`, confidence 1. The PFA application is to the proper cone
  below the initial master, so its filter does not silently omit that condition.
- Open gap: none. Next item: `lem-pfa-raises-the-pseudointersection-number`.

### `lem-pfa-raises-the-pseudointersection-number` — accepted, confidence 1

- Exact claim: every at-most-$\omega_1$ strong-finite-intersection family has
  an infinite pseudointersection. Conditions are finite stems with finite side
  families; equal stems form centered pieces. The $E_a$ dense sets put every
  family member into a side condition, and the $D_n$ dense sets make the stem
  union infinite.
- Source locator: Todorcevic §2 and the discussion preceding §7.
- Examined dependencies:
  `def-p-ideals-pid-pseudointersection-number-and-s-spaces`,
  `cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis`,
  `def-martins-axiom`, `def-axiom-of-choice`.
- The directed-filter calculation proves the union is almost contained in
  each $a$ rather than merely intersecting it. Focused precheck, rendercheck
  and strict contract pass; decision `accept`, confidence 1.
- Open gap: none. Next item:
  `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces`.

### `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces` — repaired, confidence 1

- Exact claim: under PID and $\mathfrak p>\omega_1$, every regular Hausdorff
  hereditarily separable space is hereditarily Lindel&ouml;f.
- Source locators: Todorcevic, *Combinatorial Dichotomies in Set Theory*,
  §23 and Theorem 23.2, pp.45–46; *Forcing with a coherent Souslin tree*, §7,
  pp.20–22. The former full 61-page PDF has SHA-256 prefix
  `ce5fd159c6887157`.
- Examined dependencies:
  `def-p-ideals-pid-pseudointersection-number-and-s-spaces`,
  `def-axiom-of-choice`.
- Repair: replaced the scaffold's unresolved free-sequence appeal by the
  direct proof. A right-separated omega-one subspace yields the ideal of
  countable sets meeting every $\overline{V_x}$ finitely. The proof derives
  eventual domination from $\mathfrak p$, verifies the P-ideal clause, obtains
  an uncountable discrete subspace in PID alternative one, and in alternative
  two takes a pseudointersection of
  $\{D\setminus\overline{V_x}:x\in X\}$ inside an orthogonal piece.
- Checks: focused reflow/precheck, rendercheck and strict contract pass;
  decision `repaired`, confidence 1. No unresolved source qualification
  remains.
- Open gap: none. Next item: `cor-pfa-implies-no-s-spaces`.

### `cor-pfa-implies-no-s-spaces` — accepted, confidence 1

- Exact claim: PFA independently supplies PID and
  $\mathfrak p>\omega_1$; the repaired topology theorem then excludes exactly
  regular Hausdorff hereditarily separable non-Lindel&ouml;f spaces.
- Examined dependencies: `thm-pfa-implies-p-ideal-dichotomy`,
  `lem-pfa-raises-the-pseudointersection-number`,
  `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces`.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1.
- Open gap: none. Next item: `rem-laver-preparation-versus-pfa-bookkeeping`.

### `rem-laver-preparation-versus-pfa-bookkeeping` — accepted, confidence 1

- Exact comparison: both constructions use Laver anticipation. Preparation
  yields indestructibility only for subsequent
  $<\kappa$-directed-closed forcing; PFA bookkeeping anticipates arbitrary
  proper posets and uses the image-iteration factor. The latter collapses
  $\kappa$ to $\omega_2$, so it plainly does not preserve supercompactness.
- Source locator: Cummings Chapter 24, especially Theorem 24.11.
- Examined dependencies: `def-lc-laver-anticipation-function`,
  `thm-lc-laver-function-existence`,
  `thm-lc-supercompact-preparation-interface`, `def-axiom-of-choice`.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1. Preparation is not load-bearing below.
- Open gap: none. Next item: `def-laver-guided-proper-bookkeeping-iteration`.

### `def-laver-guided-proper-bookkeeping-iteration` — accepted, confidence 1

- Exact definition: recursively use the Laver guess at stage $\alpha$ only
  when it is a $P_\alpha$-name forced to be a nonempty proper order with a
  greatest condition; otherwise use the fixed one-condition forcing. Limits
  have countable support.
- Source locator: Cummings, proof of Theorem 24.11, pp.99–101.
- Examined dependencies: `def-countable-support-forcing-iteration`,
  `def-lc-laver-anticipation-function`, `thm-lc-laver-function-existence`,
  `def-cohen-collapse-and-levy-collapse-forcings`,
  `def-countable-model-generic-master-condition-and-proper-poset`.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1. The item defers collapse occurrence to the reflection
  proof and does not use Laver preparation.
- Open gap: none. Next item:
  `lem-laver-guided-iteration-size-collapse-and-factorization`.

### `lem-laver-guided-iteration-size-collapse-and-factorization` — repaired, confidence 1

- Exact claim: the bookkeeping iteration is proper, preserves $\omega_1$, has
  size $\kappa$ and the $\kappa$-cc, collapses every ground cardinal strictly
  between $\omega_1$ and $\kappa$, forces $\kappa=\omega_2$, and factors the
  image iteration as $P_\kappa*\dot Q*\dot R$ when the embedding anticipates
  the proper name $\dot Q$.
- Source locator: Cummings, Proposition 7.13, p.28, and Theorem 24.11,
  pp.99–101.
- Examined dependencies: `def-laver-guided-proper-bookkeeping-iteration`,
  `thm-countable-support-iterations-preserve-properness`,
  `thm-proper-forcing-preserves-stationary-subsets-of-omega-one`,
  `thm-lc-supercompactness-closed-embedding-characterization`,
  `cor-lc-large-cardinal-implication-ledger`,
  `lem-lc-inaccessible-size-and-rank-bounds`,
  `lem-generalized-delta-system-for-small-supports`,
  `thm-chain-condition-preserves-cofinalities-and-cardinals`,
  `def-axiom-of-choice`.
- Repair: the scaffold had attributed “supercompact implies inaccessible” to
  a supplier that assumes inaccessibility. The item and manifest now declare
  the exact large-cardinal implication supplier, and the proof invokes it
  before the inaccessible size calculation.
- Checks: focused reflow/precheck, rendercheck and strict contract pass;
  decision `repaired`, confidence 1. Properness, both size inequalities,
  collapse occurrence, endpoint preservation and factorization are separate
  steps.
- Open gap: none. Next item:
  `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa`.

### `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa` — repaired, confidence 1

- Exact claim: the Laver-guided iteration from a supercompact ground forces
  PFA and $\kappa=\omega_2$, preserves $\omega_1$, and yields a ZFC generic
  extension.
- Source locator: Cummings, Theorem 24.11, pp.99–101, especially the lifted
  embedding and reflected-filter argument on pp.100–101.
- Examined dependencies: `def-proper-forcing-axiom`,
  `def-laver-guided-proper-bookkeeping-iteration`,
  `lem-laver-guided-iteration-size-collapse-and-factorization`,
  `thm-lc-laver-function-existence`,
  `thm-generic-extensions-satisfy-zf-and-zfc`, `thm-forcing-theorem`,
  `def-axiom-of-choice`.
- Repair: the scaffold began with a proper order in one actual extension but
  silently treated its arbitrary name as forced proper by the top condition.
  The proof restricts the name below a truth-lemma condition, uses a singleton
  off that branch, and adds a greatest condition. It then anticipates the
  globally forced-proper name. The outer generic generates the image filter;
  elementarity reflects only the filter's existence to $V[G]$.
- Checks: focused reflow/precheck, rendercheck and strict contract pass;
  decision `repaired`, confidence 1. The empty dense-family case and the
  restriction from the top-adjoined order back to $Q$ are explicit.
- Open gap: none. Next item:
  `lem-formal-pfa-iteration-verification-compiler`.

### `lem-formal-pfa-iteration-verification-compiler` — repaired, confidence 1

- Exact claim: for fixed certified presentations, PA verifies total
  primitive-recursive fragment compilers and a map from certified
  ZFC+PFA refutations to certified ZFC+supercompact refutations.
- Source locator: Cummings, Theorem 24.11, for the fixed object-theory PFA
  block; the formal interfaces are the cited forcing-transfer, proof-checking
  and primitive-recursive representability suppliers.
- Examined dependencies: `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa`,
  `lem-forcing-transfer-for-finite-zfc-fragments`,
  `thm-formal-consistency-transfer-by-forcing`,
  `lem-primitive-recursive-syntax-and-proof-checking`,
  `thm-primitive-recursive-numeralwise-representability`.
- Repair: the scaffold had no supplier turning primitive-recursive syntax
  operations into PA-provably total functional graphs. That dependency is now
  declared. The proof gives the forcing-formula recursion, all axiom-dispatch
  branches, exact checker invariants, `Good(P)` parameter discharge, and
  malformed-input defaults; it does not infer a CTM from consistency.
- Checks: focused reflow/precheck, rendercheck and strict contract pass;
  decision `repaired`, confidence 1.
- Open gap: none. Next item:
  `cor-formal-consistency-of-pfa-from-a-supercompact`.

### `cor-formal-consistency-of-pfa-from-a-supercompact` — accepted, confidence 1

- Exact claim: for the fixed certified presentations,
  $\mathrm{PA}\vdash\operatorname{Con}(\mathrm{ZFC}+\text{supercompact})
  \to\operatorname{Con}(\mathrm{ZFC}+\mathrm{PFA})$.
- Examined dependencies: `lem-formal-pfa-iteration-verification-compiler`,
  `thm-formal-relative-consistency-from-verified-proof-reduction`.
- The proof checks the critical orientation: certified target refutations map
  to certified source refutations. It spells out the arbitrary proof-code
  quantifier and separates the standard-code consequence from any CTM claim.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1.
- Open gap: none. Next item:
  `ex-ccc-posets-are-proper-by-maximal-antichains`.

### `ex-ccc-posets-are-proper-by-maximal-antichains` — accepted, confidence 1

- Exact claim: for ccc $P$, countable relevant $M$, and $p\in P\cap M$,
  the original $p$ is already an $(M,P)$-master.
- Source locator: Karagila, Theorem 8.7, printed p.39.
- Examined dependency: `thm-ccc-and-countably-closed-forcings-are-proper`.
- Calculation: a maximal antichain $A\subseteq D$ chosen in $M$ is externally
  countable, hence $A\subseteq M$; maximality supplies, below every $r\leq p$,
  a compatible member of $D\cap M$.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1. Finite and singleton cases are explicit.
- Open gap: none. Next item: `ex-baumgartner-club-shooting-is-proper`.

### `ex-baumgartner-club-shooting-is-proper` — accepted, confidence 1

- Exact claim: finite partial normal-function conditions form a proper forcing;
  the generic union is normal and has a new club range in $\omega_1$.
- Source locator: Karagila, Theorem 8.13, printed pp.40–41.
- Examined dependencies:
  `def-countable-model-generic-master-condition-and-proper-poset`,
  `lem-proper-master-condition-characterizations`,
  `def-club-filter-and-nonstationary-ideal`, `def-axiom-of-choice`.
- Calculations added: $p\cup\{(\delta,\delta)\}$ is extended by a normal
  function from $M$; the $r/r'$ amalgam is witnessed by splicing two normal
  functions at $\delta$; a dense-below-condition argument proves continuity;
  dense disagreement with each ground normal function proves that the club
  range is new.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1.
- Open gap: none. Next item: `ex-countable-support-fusion-at-a-limit-stage`.

### `ex-countable-support-fusion-at-a-limit-stage` — repaired, confidence 1

- Exact claim: at a countable-cofinality limit, cofinal stages $\eta_n$,
  dense sets $D_n$, descending model conditions $p_n$, and masters $q_n$ can
  be chosen so the coherent union is a final master meeting every $D_n$.
- Source locator: Jech, Proper Iteration Lemma 31.17 and proof, pp.605–606.
- Examined dependency: `lem-proper-iteration-master-condition`.
- Repair completed: the original scaffold’s coordinatewise-fusion language
  was removed. The only union is of exact coherent initial segments
  $q_{n+1}\restriction\eta_n=q_n$; no arbitrary proper iterand is assigned a
  lower bound for a descending coordinate sequence.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `repaired`, confidence 1. Empty stage, first dense set, countable support and
  the cofinal-projection conclusion are explicit.
- Open gap: none. Next item: `ex-pfa-specializes-an-aronszajn-tree`.

### `ex-pfa-specializes-an-aronszajn-tree` — repaired, confidence 1

- Exact claim: under PFA, the finite-specialization forcing for an arbitrary
  Aronszajn tree has a filter meeting every node-domain requirement, and the
  directed union is a total specializing map into $\omega$.
- Source locator: Karagila, Definition 8.17 and Fact 8.18, printed p.41, for
  the PFA scheme; the local specialization-poset suppliers contain the ccc,
  density and directed-union arguments.
- Examined dependencies: `def-proper-forcing-axiom`,
  `thm-ccc-and-countably-closed-forcings-are-proper`,
  `thm-aronszajn-specialization-poset-ccc`,
  `lem-specialization-dense-domains-and-union`, `thm-hessenberg`,
  `def-axiom-of-choice`.
- Repair completed: the scaffold omitted the simultaneous level choices and
  the cardinal-product calculation needed to prove $|T|\leq\omega_1$ and
  hence bound the dense family. Those exact suppliers are now declared and
  used before PFA. The empty condition, repeated dense sets, label zero,
  directedness and the absence of an externally postulated generic are
  checked explicitly.
- Checks: focused reflow/precheck, rendercheck and strict contract pass;
  decision `repaired`, confidence 1.
- Open gap: none. Next item: `fs-ccc-and-proper-are-equivalent`.

### `fs-ccc-and-proper-are-equivalent` — accepted, confidence 1

- Exact claim: the implication ccc $\Rightarrow$ proper is true, but the
  converse fails for
  $P=\operatorname{Fn}(\omega_1,2,{<}\omega_1)$, which is countably closed
  and hence proper while carrying an explicit $\omega_1$-antichain.
- Source locator: Karagila, Theorems 8.7–8.8 and the comparison immediately
  following them, printed p.40.
- Examined dependencies:
  `thm-ccc-and-countably-closed-forcings-are-proper`,
  `def-cohen-collapse-and-levy-collapse-forcings`,
  `def-poset-ccc-and-knaster-property`,
  `thm-countable-union-of-countable`, `def-axiom-of-choice`.
- Calculations: the union of a descending omega-sequence remains a condition
  because its domain is a countable union of countable domains. For
  $\alpha<\omega_1$, $p_\alpha$ is zero below $\alpha$ and one at $\alpha$;
  if $\alpha<\beta$, the two functions disagree at $\alpha$. Both directions
  of the proposed iff and the exact countable-choice cost are recorded.
- The witness is retained as an $\operatorname{Fn}$ order and is not
  incorrectly called $\operatorname{Col}(\omega_1,2)$, which would violate
  the local collapse definition's parameter restriction.
- Checks: focused precheck, rendercheck and strict contract pass; decision
  `accept`, confidence 1.
- Open gap: none. Next action: author the A and B pages.

## Final pair handoff

Both pages are authored with exact manifest-order inventories: 20 A items and
five B items. The page-inventory comparison passes for both files.

Completed A IDs:

- `def-countable-support-forcing-iteration`
- `def-countable-model-generic-master-condition-and-proper-poset`
- `lem-proper-master-condition-characterizations`
- `thm-ccc-and-countably-closed-forcings-are-proper`
- `thm-proper-forcing-preserves-stationary-subsets-of-omega-one`
- `lem-proper-iteration-master-condition`
- `thm-countable-support-iterations-preserve-properness`
- `def-proper-forcing-axiom`
- `cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis`
- `def-p-ideals-pid-pseudointersection-number-and-s-spaces`
- `thm-pfa-implies-p-ideal-dichotomy`
- `lem-pfa-raises-the-pseudointersection-number`
- `thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces`
- `cor-pfa-implies-no-s-spaces`
- `rem-laver-preparation-versus-pfa-bookkeeping`
- `def-laver-guided-proper-bookkeeping-iteration`
- `lem-laver-guided-iteration-size-collapse-and-factorization`
- `thm-a-supercompact-cardinal-can-be-forced-to-give-pfa`
- `lem-formal-pfa-iteration-verification-compiler`
- `cor-formal-consistency-of-pfa-from-a-supercompact`

Completed B IDs:

- `ex-ccc-posets-are-proper-by-maximal-antichains`
- `ex-baumgartner-club-shooting-is-proper`
- `ex-countable-support-fusion-at-a-limit-stage`
- `ex-pfa-specializes-an-aronszajn-tree`
- `fs-ccc-and-proper-are-equivalent`

No local definition or lemma had to be added beyond the immutable 20+5
inventory. Scaffold repairs used existing suppliers. In particular,
`cor-lc-large-cardinal-implication-ledger` now supplies the exact
supercompact-to-inaccessible implication,
`thm-primitive-recursive-numeralwise-representability` supplies the PA
representability step, and `thm-hessenberg` plus `def-axiom-of-choice` supply
the Aronszajn-tree cardinality calculation. The A page also retains the exact
sibling-page prerequisite `suslin-trees-lines-algebras-and-independence`.

## Final checks actually run

- Explicit-path precheck: 19 proof-bearing owned files checked, 19 passed.
  The six definition/remark files are intentionally not proof-strategy inputs
  to that checker.
- Explicit-path rendercheck: all 25 owned item files and both page files, 27/27
  passed.
- Content policy on the complete shared batch-6 manifest: 54 scoped items,
  zero errors and zero warnings.
- Strict proof contracts on the 25 owned IDs: 25/25, zero errors and zero
  warnings. Risk routing with `--require-reviewed` covered all 25 and found no
  missing review. Citation fidelity found no absent quote or widening
  candidate across the shared contracts. Finite smoke ran zero checks because
  no owned contract claims a supported finite executable obligation; this is
  not mathematical evidence.
- Manifest dependency check: 54 batch items, zero missing or malformed
  dependency arrays. Coverage checklist: two A pages, 65 harvested results,
  zero errors and zero warnings. Source checks: 10/10 source records are
  fetch-verified and resolved; all 30 authored harvested results checked by
  source-backing retain an open source or documented alternative.
- `validate-plan research/plan-spec.json --max-items 60`: passed the current
  plan's ordering, resolution and acyclicity checks. Pair-specific decision
  recheck: scope closed and 25/25 item decisions current.
- Batch-6 dependency input remains the exact empty array: there is no
  different-batch consumer edge owned here. The prescribed frontier-ledger
  refresh passed and preserved sibling rows elsewhere.
- JSON parsing and `git diff --check` passed for the manifest, coverage,
  contracts, dependency records, report, 25 items and two pages. Repository
  `depcheck --pending-audit-ok`, `fwdcheck` and `extcheck` exited successfully;
  `extcheck` continues to print 55 unrelated published-content warnings, none
  of which names an owned item.

The whole-run Step-3 final check is not closed: it reports 512/566 accepted
items and an owner-held scope plus unaudited items in other assigned pairs.
The pair-specific check above is closed; no whole-run state was represented as
this pair's verdict.

## Published concerns and open obligations

No confirmed or suspected defect was found in a published item used by this
pair. The audited repairs concern only the unpublished scaffold and its
authored files. There is no local mathematical, source, rendering, contract,
dependency or owner-held escalation left open.

Step 4 has two exact serial reconciliation obligations:

1. Splice the A and B item arrays into `research/plan-spec.json`, whose current
   pre-splice entries contain 0 items while the final batch manifest contains
   20 and 5 respectively.
2. Adjudicate and retain the A-page prerequisite
   `suslin-trees-lines-algebras-and-independence`. The manifest needs it for
   the exact Kurepa/MA and specialization suppliers, whereas the plan currently
   lists only `finite-support-iterations-and-martins-axiom` and
   `large-cardinals-measures-and-elementary-embeddings`. The read-only
   `splice-plan --batch 6 --dry-run` correctly withheld the batch on this one
   `requires` edge; this dispatch did not invent an owner ruling or edit the
   shared plan.
