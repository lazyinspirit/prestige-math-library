# Step 3b author checkpoint — Solovay's model and regularity of all sets of reals

Run: `phase-2-next-18`  
Pair: `solovays-model-and-regularity-of-all-sets-of-reals` / `solovays-model-and-regularity-of-all-sets-of-reals-examples`  
Role: `alpha-high`

## Initial audit

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, SET-24 in the design, the current
  batch-8 manifest, coverage, contracts, dependency input and notes, the Step 3a
  insufficiency report, and the owner's then-current `proceed` receipt. The
  completed repairs later changed the scope hash and made that receipt stale. No
  `research/phase-2-next-18-owner-authoring-direction.md` exists.
- Read Solovay's 1970 paper completely in the parts used here: Part I §1.12 and
  §§3–4, Part II §§1–2, Part III §§1–2 and §4. Also read both pages and all six
  claims of Unger's *A Brief Account of Solovay's Model*, and Kanamori's
  complete proof of Theorem 11.1 through Proposition 11.13 (printed pp.
  139–143). The local copy of Solovay's paper used for line checks has SHA-256
  prefix `b0c04c1c40167c3f`.
- Confirmed repairs: move both enriched $L(\mathbb R)$ theorems after their
  actual suppliers; replace the invalid “bounded ordinal parameters” DC sketch
  by the least-ordinal/coded-real construction; pass first to the constructible
  ground so the promised real--ordinal parameter theorem does not falsely
  real-code arbitrary ordinal sequences; prove the Euclidean transfer by a
  measure-preserving digit map; fix the Bernstein countability case; and prove
  positive finite ball measure from containing/containing boxes while treating
  a radius-zero ball separately.
- Ambient AC is declared through `def-axiom-of-choice`. It is used for forcing
  maximal antichains and Boolean completions, enumerating the reals/codes of a
  countable intermediate model, selecting definition codes in the $HOD(S)$
  closure proof, and constructing ambient DC chains. No positive theorem below
  assumes AC inside $M$ or $L(\mathbb R)$; the only internal use is the reductio
  in the failure-of-AC theorem.

## Published concerns for owner reconciliation

- **Confirmed, high confidence:** `rem-solovay-model` is a Recorded orientation
  remark, not a proof of its ZF+DC/regularity assertions. Its retirement needs
  the authored chain in this pair; it must not be consumed as a supplier.
- **Confirmed, high confidence (limited clause):** `rem-banach-tarski` records
  the classical theorem but does not prove the Solovay-model nonexistence
  clause. The required supplier is
  `cor-solovay-model-has-no-banach-tarski-decomposition`, using universal
  measurability in $\mathbb R^3$ and finite additivity.
- **Suspicion, medium confidence:** `cor-volume-of-a-closed-three-ball` calls a
  Jordan-content computation “volume” but does not itself identify it with
  three-dimensional Lebesgue measure. It is therefore insufficient for the
  proposed Banach–Tarski proof. The local repair avoids that claim entirely:
  a positive-radius ball lies between two explicit boxes, so
  `thm-lebesgue-measure-of-a-box-of-every-kind` gives $0<V<\infty$.

The serial reconciler, not this dispatch, should update
`published-consumer-supplier-ledger.md`.

## Item checkpoints

Checkpoints are appended here only after the corresponding authored file,
manifest metadata and item-specific proof contract have been checked.
All 31 IDs were already present in the immutable Step 3 pre-author baseline, so
none qualifies for automatic auditor-created-item certification. Their item
verdicts require `record-item` after the owner refreshes the repaired scope.

### 1. `def-solovay-levy-collapse-setup`

- Exact claim: first pass from a supplied ambient model to its constructible
  ground, where the inaccessible is preserved and every ground parameter has
  an ordinal code; then use finite-function $\operatorname{Lv}(\kappa)$,
  initial complete projections and supplied generics. Source: Solovay I.§3;
  dependencies include the published constructible-inner-model, GCH,
  canonical-ground-order, inaccessible, collapse, valuation and AC results.
- Checks: explicit rendercheck and strict contract pass; no proof-bearing body.
  Empty/zero coordinates and nonexistence of a supplied generic are explicit.
- Decision status: baseline-scaffold item; its current-scope item verdict is
  blocked pending the owner scope refresh. Next: collapse localization.

### 2. `lem-solovay-collapse-localizes-countable-ordinal-data`

- Exact claim: $\kappa=\omega_1$, every countable ordinal sequence has bounded
  collapse support, and intermediate reals become countable; source Solovay
  I.3.4 and Corollary 3.6. Ambient AC selects deciding antichains.
- Checks: explicit precheck, rendercheck and strict contract pass. Empty support,
  zero/one coordinates and both sides of the $\omega_1$ computation are checked.
- Decision status: baseline-scaffold item; its current-scope item verdict is
  blocked pending the owner scope refresh. Next: absorption/homogeneity.

### 3. `lem-solovay-absorption-factorization-and-homogeneity`

- Exact claim: Solovay I.4.1 absorption, I.3.5 zero-one homogeneity, the
  I.4.3/I.1.12 real-capture argument for ordinal sequences over a constructible
  ground, and the random/Cohen small-factor variants. Parameters fixed by
  automorphisms and the omitted generic are explicit.
- Checks: explicit precheck, rendercheck and strict contract pass; Boolean
  endpoints and one-real factors checked. Decision status: baseline-scaffold
  item; its current-scope item verdict is blocked pending the owner scope
  refresh. Next: $HOD(S)$ definition.

### 4. `def-solovay-hereditarily-ordinal-sequence-definable-model`

- Exact claim: uniform $M=HOD(S)$ definition through transitive closure and
  satisfaction ranks, with one interleaved $S$-parameter. It asserts no equality
  with $L(\mathbb R)$ or $HOD(\mathbb R)$.
- Checks: explicit rendercheck and strict contract pass. Decision status:
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: $L(\mathbb R)$.

### 5. `def-l-of-the-reals-in-the-solovay-collapse-extension`

- Exact claim: the relativized hierarchy, minimality, same reals/ordinals, and
  only $L(\mathbb R)\subseteq HOD(S)$. Source: Unger pp.1–2.
- Checks: explicit rendercheck and strict contract pass; zero/successor/limit
  stages and the non-equality boundary are explicit. Decision status:
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: the $HOD(S)$ model theorem in the repaired
  prerequisite order.

### 6. `thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability`

- Exact claim and conventions: $M=HOD(S)$ is a transitive ZF inner model with
  the ambient ordinals and reals; every $M$-set of reals has a definition from
  one real and finitely many ordinals, equivalently one member of $S$. The
  Replacement proof forms the image from the fixed set, function and definition
  codes. The parameter proof captures the $S$-parameter by a real and the
  ordinal code of a constructible-ground name; it does not attempt to real-code
  arbitrary ordinal parameters.
- Evidence and dependencies: Solovay III.2.4 and III.2.8; the $HOD(S)$
  definition, collapse localization, and absorption/homogeneity. Checks pass;
  no open gap. Decision status: baseline-scaffold item; its current-scope item
  verdict is blocked pending the owner scope refresh. Next: omega-closure.

### 7. `lem-solovay-inner-model-is-closed-under-ambient-omega-sequences`

- Exact claim and conventions: every ambient $f:\omega\to M$ belongs to $M$.
  A definable $\mathrm{Ord}\times S$ coding relation is used, and ambient AC
  chooses one code for each $f(n)$; the chosen countably many $S$-parameters,
  not arbitrary ordinals, are interleaved into one member of $S$.
- Evidence and dependencies: Solovay III.2.6 and Unger Claims 4–5; the preceding
  model theorem and `def-axiom-of-choice`. Empty and one-term sequences are
  covered. Checks pass; no open gap. Decision status: baseline-scaffold item;
  its current-scope item verdict is blocked pending the owner scope refresh.
  Next: DC.

### 8. `thm-solovay-inner-model-satisfies-dependent-choice`

- Exact claim and conventions: $M$ satisfies serial-relation DC. Given a
  nonempty $A\in M$, ambient AC recursively selects an $R$-chain; omega-closure
  places the completed chain in $M$, and transitivity supplies absoluteness of
  membership and the fixed relation. This does not assert internal AC.
- Evidence and dependencies: Solovay III.2.7; omega-closure, the published DC
  definition, and ambient AC. The empty-domain exclusion, singleton case, and
  initial witness are explicit. Checks pass; no open gap. Decision status:
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: Borel absoluteness.

### 9. `lem-solovay-borel-code-and-regularity-absoluteness`

- Exact claim and conventions: shared well-founded Borel codes have the same
  evaluation on shared reals; null, meagre, open, and closed code predicates
  have the required absoluteness. Nonempty perfectness is transferred only
  between same-real models or from an explicit pruned splitting-tree
  certificate, since an outer model with new reals can add a branch to a closed
  code. A Borel induction actually builds an open set modulo a meagre set.
- Evidence and dependencies: Solovay II.1, especially Lemma 1.6; the published
  Borel-code, BP, Lebesgue-measure, and perfect-set definitions, plus internal
  DC for countable ideal closure. Empty codes, Boolean endpoints, and
  successor/limit evaluation are covered. Checks pass; no open gap. Decision
  status: baseline-scaffold item; its current-scope item verdict is blocked
  pending the owner scope refresh. Next: generic largeness.

### 10. `lem-solovay-random-and-cohen-generics-are-large`

- Exact claim and conventions: when the intermediate transitive model $N$ has
  countably many reals in the ambient extension, its random reals are conull and
  its Cohen generics are comeagre. Only $N$-coded null sets and dense-open
  requirements are enumerated.
- Evidence and dependencies: Solovay III.1.1–1.2 and Unger Claim 1; collapse
  localization, Borel absoluteness, and ambient AC. Empty and finite enumerations
  and the countable union step are explicit. Checks pass; no open gap. Decision
  status: baseline-scaffold item; its current-scope item verdict is blocked
  pending the owner scope refresh. Next: Boolean representatives.

### 11. `lem-solovay-homogeneous-truth-has-borel-representatives`

- Exact claim and conventions: for a formula over $N$, its random-algebra
  Boolean value gives an $N$-coded Borel representative on all $N$-random reals;
  the Cohen regular-open value gives a Borel, hence open-mod-meagre,
  representative on all $N$-Cohen generics. Nongeneric points remain an
  explicitly bounded exception.
- Evidence and dependencies: Solovay II.2.8 and III.1.4; absorption and
  homogeneity, generic largeness, the forcing theorem, and ambient AC. Boolean
  values $0$ and $1$ and both truth directions are covered. Checks pass; no
  open gap. Decision status: baseline-scaffold item; its current-scope item
  verdict is blocked pending the owner scope refresh. Next: LM.

### 12. `thm-every-solovay-model-set-of-reals-is-lebesgue-measurable`

- Exact claim and conventions: every $A\subseteq\mathbb R$ in $M$ differs from
  a Borel set by a null set coded in $M$, so $M$ regards $A$ as Lebesgue
  measurable. The external construction and the internal absoluteness transfer
  are kept separate.
- Evidence and dependencies: Solovay III.1.4 and III.2.9; real--ordinal
  definability, localization, Borel absoluteness, generic largeness, and the
  homogeneous representative lemma. Empty/full representatives and both
  inclusions in the symmetric difference are checked. Checks pass; no open
  gap. Decision status: baseline-scaffold item; its current-scope item verdict
  is blocked pending the owner scope refresh. Next: BP.

### 13. `thm-every-solovay-model-set-of-reals-has-the-baire-property`

- Exact claim and conventions: every $A\subseteq\mathbb R$ in $M$ differs from
  an open set by a meagre set. The Cohen representative is first Borel and is
  then converted to open-mod-meagre by the preceding Borel induction.
- Evidence and dependencies: Solovay III.1.5 and III.2.10; the same definability,
  localization, absoluteness, largeness, and representative interfaces, plus
  the published BP definition. Empty/open endpoints and both symmetric-
  difference directions are checked. Checks pass; no open gap. Decision status:
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: perfect-tree supplier.

### 14. `lem-solovay-perfect-tree-of-mutually-generic-name-interpretations`

- Exact claim and conventions: for a small forcing name forced to be a new real,
  a binary fusion tree yields branch generics that are mutually generic in
  distinct pairs, have pairwise distinct interpretations, and vary
  continuously. At each split, failure of incompatible decided prefixes would
  force a unique ground-model real; branch filters are upward closed in the
  stronger-condition order.
- Evidence and dependencies: Solovay III.1.6; localization,
  the forcing theorem, and ambient AC. Empty dense-list, first split, ordered
  product pairs, downward-closed dense requirements, diagonal exclusion, and
  both continuity directions are covered. Checks pass; no open gap. Decision
  status: baseline-scaffold item; its current-scope item verdict is blocked
  pending the owner scope refresh. Next: PSP.

### 15. `thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset`

- Exact claim and conventions: every uncountable $A\subseteq\mathbb R$ in $M$
  contains a nonempty perfect subset. Countability of the relevant intermediate
  reals and omega-closure are used to find a genuinely new member of $A$ before
  the perfect-tree construction is applied.
- Evidence and dependencies: Solovay III.1.6 and III.2.11; the model,
  localization, absorption, omega-closure, forcing, Borel absoluteness, and
  perfect-tree suppliers. Countable/uncountable alternatives, nonemptiness, and
  injectivity/closedness of the perfect image are checked. Checks pass; no open
  gap. Decision status: baseline-scaffold item; its current-scope item verdict
  is blocked pending the owner scope refresh. Next: Euclidean transfer.

### 16. `lem-solovay-universal-measurability-transfers-to-euclidean-spaces`

- Exact claim and conventions: for every positive finite $n$, all subsets of
  $\mathbb R^n$ in $M$ are Lebesgue measurable. A fixed digit interleaving map
  gives a measure-preserving Borel isomorphism off null dyadic ambiguity sets;
  the product-completion theorem then transfers measurability.
- Evidence and dependencies: Solovay III.4 for the target conclusion; the
  real-line LM theorem, internal DC, `DC=>AC_omega`, dyadic coding, and the
  finite-product and translation-invariance Lebesgue interfaces. The exact
  internal use of choice is countable choice supplied by DC. Cases $n=1$,
  empty/full sets, dyadic endpoints, the integer-cube union, and both transfer
  directions are checked. Checks pass; no open gap. Decision status:
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: classical pathologies.

### 17. `cor-solovay-model-has-no-vitali-or-bernstein-set`

- Exact claim and conventions: $M$ has neither a Vitali selector modulo
  $\mathbb Q$ nor a Bernstein subset of $\mathbb R$. The Vitali calculation uses
  countably many rational translates. For a Bernstein candidate, DC implies
  that either it or its complement is uncountable; PSP on that side supplies a
  perfect set missed by the other side. It does not assume that the candidate
  itself is uncountable.
- Evidence and dependencies: the authored LM/PSP/DC theorems and the published
  Vitali, Bernstein, countability, measure-additivity, translation,
  subadditivity, box-measure, and rational-countability interfaces. Zero
  measure, positive measure, and both Bernstein cases are explicit. Checks
  pass; no open gap. Decision status: baseline-scaffold item; its current-scope
  item verdict is blocked pending the owner scope refresh. Next: Hamel/additive
  consequences.

### 18. `thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function`

- Exact claim and conventions: $M$ has no Hamel basis of $\mathbb R$ over
  $\mathbb Q$, and every additive real map is continuous and $\mathbb R$-linear.
  A hypothetical basis gives a measurable coefficient homomorphism whose kernel
  is a countable-index measurable subgroup; countable subadditivity and
  Steinhaus force the contradiction. Measurable Cauchy regularity treats the
  additive-map clause.
- Evidence and dependencies: the authored LM theorem and the published basis,
  subgroup, measure, rational-countability, Steinhaus, and Cauchy interfaces.
  Zero coefficients, the one-basis-element case, and both theorem clauses are
  checked. Checks pass; no open gap. Decision status: baseline-scaffold item;
  its current-scope item verdict is blocked pending the owner scope refresh.
  Next: Banach--Tarski.

### 19. `cor-solovay-model-has-no-banach-tarski-decomposition`

- Exact claim and conventions: no closed ball in $\mathbb R^3$ admits a finite
  partition whose rigid images form two disjoint congruent copies. Every piece
  is measurable by the Euclidean transfer, rigid motions preserve measure, and
  explicit inner/outer cubes prove $0<V<\infty$ for positive radius; radius zero
  is handled by finite cardinality.
- Evidence and dependencies: Euclidean measurability, translation and
  orthogonal invariance, and box measure. Empty pieces, zero radius, positive
  radius, and both partition equalities are checked. Checks pass; no open gap.
  Decision status: baseline-scaffold item; its current-scope item verdict is
  blocked pending the owner scope refresh. Next: failure of AC.

### 20. `thm-solovay-model-fails-full-choice`

- Exact claim and conventions: $M\models\neg AC$ while $M\models DC$. Assuming
  internal AC invokes the published AC-to-Bernstein construction, contradicting
  item 17. This is the sole positive use of internal full AC, and it occurs only
  under reductio.
- Evidence and dependencies: the no-Bernstein corollary, `def-axiom-of-choice`,
  and `thm-choice-bernstein-set-pathology`. Both reductio directions and the
  nonempty-perfect-set hypothesis are explicit. Checks pass; no open gap.
  Decision status: baseline-scaffold item; its current-scope item verdict is
  blocked pending the owner scope refresh. Next: $L(\mathbb R)$ DC.

### 21. `thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice`

- Exact claim and conventions: $L(\mathbb R)^{V[G]}$ is a ZF+DC inner model
  with the ambient reals and ordinals. Its hierarchy defines a canonical
  surjection $F:\mathrm{Ord}\times\mathbb R\twoheadrightarrow L(\mathbb R)$.
  For DC, the least ordinal admitting the next witness is chosen canonically,
  ambient AC selects a real code at that stage, and all countably many real
  witnesses are packed into one real. No false bounded-ordinal assertion is
  used.
- Evidence and dependencies: Kanamori, Theorem 11.1 and Proposition 11.13,
  printed pp. 142–143; Solovay III.2.4–2.7 supplies the analogous original-model
  machinery, while Unger Claim 6 supplies only the $HOD(\mathbb R)$ coding
  template. The direct dependencies are the $L(\mathbb R)$ definition,
  definability and canonical finite-code suppliers, DC, and ambient AC.
  Zero/successor/limit stages,
  empty/nonempty relations, and the two surjection directions are checked.
  Checks pass; no open gap. Decision status: baseline-scaffold item; its
  current-scope item verdict is blocked pending the owner scope refresh. Next:
  $L(\mathbb R)$ regularity.

### 22. `thm-all-sets-of-reals-in-solovay-l-of-the-reals-have-regularity`

- Exact claim and conventions: every $L(\mathbb R)$ set of reals has LM, BP,
  and PSP, and the Vitali, Bernstein, Hamel, discontinuous-additive,
  Banach--Tarski, and AC consequences hold there. The homogeneous forcing proofs
  and each consequence calculation are repeated with an
  $L(\mathbb R)$-definition code; no theorem specific to $M=HOD(S)$ is silently
  transferred.
- Evidence and dependencies: Solovay Theorem 1 and Parts II–III, and Unger
  pp. 1–2; the preceding $L(\mathbb R)$ theorem, forcing/regularity interfaces,
  and every published consequence supplier actually used. LM, BP, PSP,
  countable/uncountable, zero-radius, and all two-sided reductions are covered.
  Checks pass; no open gap. Decision status: baseline-scaffold item; its
  current-scope item verdict is blocked pending the owner scope refresh. Next:
  formalization.

### 23. `lem-solovay-construction-is-uniformly-formalizable`

- Exact claim and conventions: a primitive-recursive compiler maps any finite
  contradiction proof from the stated target theory to a contradiction proof
  from ZFC plus an inaccessible. The proof parses each axiom occurrence,
  substitutes the definable inner-model interpretation, emits only the finitely
  required forcing/definability/regularity instances, and verifies the resulting
  proof code.
- Evidence and dependencies: Solovay p. 2 and Parts I–III; the complete authored
  construction and negative-consequence chain, the published proof-reduction
  theorem, arithmetized consistency, primitive-recursive syntax/proof checking,
  and the finite-fragment $L$ proof translator. The compiler explicitly
  preserves the inaccessible when it passes to $L$ and compiles failure of AC
  and every named exclusion rather than merely appending them semantically.
  Empty input, zero/one axiom occurrence, and preservation of derivation
  endpoints are checked. Checks pass; no open gap. Decision status:
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: relative consistency.

### 24. `thm-solovay-model-regularity-relative-to-an-inaccessible`

- Exact claim and conventions: $\operatorname{Con}(\mathrm{ZFC}+\text{an
  inaccessible})$ implies consistency of ZF+DC plus universal LM, BP, PSP,
  failure of AC, and the stated exclusions. Only this direction is asserted;
  there is no converse and no internal inaccessible conclusion.
- Evidence and dependencies: Solovay Theorem 1 and p. 2; the formal compiler,
  formal proof reduction, and the authored consequence theorems. Consistent and
  inconsistent source cases and both logical directions of the displayed
  implication are distinguished. Checks pass; no open gap. Decision status:
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: companion examples.

### 25. `ex-solovay-collapse-factorization-around-a-real-parameter`

- Exact calculation: for $t\in V[G_\xi]$, first
  $V[G]=V[G_\xi][G^\xi]$, then absorption gives $V[G]=V[t][H]$; homogeneity may
  decide formulas from $t$ and ordinals but not formulas retaining the omitted
  initial generic. Dependencies are the setup and absorption lemmas.
- Both factorizations and parameter restrictions are explicit. Checks pass; no
  open gap. Decision status: permitted generated leaf and baseline-scaffold
  item; its current-scope item verdict is blocked pending the owner scope
  refresh. Next: random Boolean value.

### 26. `ex-a-borel-representative-from-a-random-boolean-value`

- Exact calculation: for $b=\lVert\varphi(\dot r,a)\rVert$ in the random
  algebra, choose its coded Borel representative $B_b$ and verify, for every
  $N$-random $x$, that $N[x]\models\varphi(x,a)$ iff $x\in B_b$. The null
  symmetric-difference ambiguity is confined to nongeneric reals.
- Dependency is the homogeneous-representative lemma; Boolean values $0,1$ and
  both iff directions are calculated. Checks pass; no open gap. Decision status:
  permitted generated leaf and baseline-scaffold item; its current-scope item
  verdict is blocked pending the owner scope refresh. Next: perfect-tree trace.

### 27. `ex-the-perfect-tree-splitting-of-a-new-real-name`

- Exact calculation: the first three binary levels meet $D_0,D_1,D_2$ and the
  corresponding pair-dense sets, deciding pairwise incompatible prefixes of
  lengths at least $1,2,3$. The supplied dense sets are first replaced by their
  downward closures so finite later refinements preserve earlier meetings.
- Dependency is the perfect-tree lemma. The root, first split, all six level-two
  pairs, all 28 level-three pairs, distinctness, and the continuity modulus are
  explicit. Checks pass; no open gap. Decision status: permitted generated leaf
  and baseline-scaffold item; its current-scope item verdict is blocked pending
  the owner scope refresh. Next: parameter coding.

### 28. `ex-coding-countably-many-solovay-definition-parameters`

- Exact calculation: a fixed bijection $\pi:\omega^2\to\omega$ interleaves
  countably many countable ordinal sequences and finite formula/ordinal tags
  into one bounded ordinal sequence in $S$, with a uniform inverse. Empty tuples
  carry the length tag zero.
- Dependencies are the $HOD(S)$ definition and omega-closure lemma. The common
  bound, all decoding maps, zero-length tags, and one-sequence case are explicit.
  Checks pass; no open gap. Decision status: permitted generated leaf and
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: pathology comparison.

### 29. `ex-regularity-excludes-the-classical-choice-pathologies`

- Exact calculation: the Vitali, Bernstein, Hamel, and discontinuous-additive
  cases are separately matched to translation/measurability, PSP,
  coefficient-kernel subgroup rigidity, and measurable Cauchy regularity. The
  comparison does not treat these as one interchangeable contradiction.
- Dependencies are the two authored pathology results. All four cases and DC's
  countable-measure role are explicit. Checks pass; the citation heuristic's
  “translation invariance” warning is a false positive because that move is
  packaged in the cited Vitali corollary. Decision status: permitted generated
  leaf and baseline-scaffold item; its current-scope item verdict is blocked
  pending the owner scope refresh. Next: volume calculation.

### 30. `ex-volume-contradiction-for-an-alleged-banach-tarski-decomposition`

- Exact calculation: finite additivity and rigid-motion invariance give
  $V=\sum_i\lambda(A_i)=\sum_i\lambda(g_iA_i)$, while two disjoint congruent
  targets have measure $2V$; inner/outer boxes give $0<V<\infty$, hence the
  contradiction $V=2V$.
- Dependencies are the authored Banach--Tarski and Euclidean-measurability
  results plus the published translation, orthogonal-invariance, and box-measure
  suppliers. Empty pieces, finite sums, and positive radius are explicit.
  Checks pass; no open gap. Decision status: permitted generated leaf and
  baseline-scaffold item; its current-scope item verdict is blocked pending the
  owner scope refresh. Next: inaccessible false statement.

### 31. `fs-solovays-model-proves-an-inaccessible-exists`

- Exact refutation: the construction's inaccessible is an external
  source-theory hypothesis, and the designated $\kappa$ becomes $\omega_1$ in
  the collapse extension and both inner models. The consistency theorem is
  one-way. The item deliberately makes no claim that the target models have no
  other inaccessible ordinal.
- Evidence and dependencies: Solovay's Introduction and I.§§3–4; the collapse,
  $M$, $L(\mathbb R)$, and relative-consistency theorems. Ground/extension
  viewpoints and both possible readings of “proves” are separated. Checks pass;
  no mathematical gap. Decision status: false-statement baseline-scaffold item;
  its current-scope item verdict is blocked pending the owner scope refresh.
  Next: final pair gates.

## Final checks and handoff

- Completed inventory: checkpoints 1–24 are the exact 24 A-page IDs and
  checkpoints 25–31 are the exact seven B-page IDs; every listed file is fully
  authored. No post-baseline item ID was created. The local supplier chain
  authored here comprises the collapse setup/localization/absorption lemmas,
  the $HOD(S)$ and $L(\mathbb R)$ model/closure theorems, the Borel and generic
  representative lemmas, the three regularity theorems, Euclidean transfer,
  the pathology exclusions, and the finite-fragment proof compiler.
- Explicit owned paths: precheck passed all 28 proof-bearing files; rendercheck
  passed all 31 item files and both A/B page files; strict proof contracts passed
  the full shared batch, 45/45 with zero errors or warnings. The page inventories
  exactly match the manifest: 24 A items and 7 B examples.
- Batch gates: manifest dependencies passed 49/49; coverage passed both pages
  and all 70 harvested results, including destination checks; source fetch
  passed 6/6 and source backing retained all 23 source-authored results;
  manifest integrity passed all 36 run pages; the refreshed dependency input and
  `validate-plan` passed with no cycle, forward reference, B-page dependency, or
  unresolved item ID. Its repository-wide redundant-prerequisite notices are
  unrelated to this pair and do not identify a pre-splice mismatch here.
- The citation heuristic emitted two false positives: the “translation
  invariance” move in the companion comparison is packaged in its cited Vitali
  corollary, while “transitivity” in the DC proof means transitivity of the
  inner model, not an order axiom. The boundary audit has no owned finding; its
  two contradicted-disposition candidates both concern sibling-owned
  `def-halpern-lauchli-finite-word-calculus` and are left untouched.
- The full shared content-policy/author gate remains open only because sibling
  files `thm-halpern-lauchli-and-the-basic-cohen-bpi-model`,
  `cor-relative-consistency-of-halpern-lauchli-bpi-without-choice`,
  `thm-strict-relative-placement-of-bpi-over-zf`, and
  `fs-bpi-well-orders-every-set`, plus the sibling A/B pages, are not yet on
  disk. The owned pair has no reported content-policy error.
- Pre-splice dry run reports the expected Step 4 delta: four shared-batch pages
  and 49 items would be added. No splice was performed and no published file or
  published-consumer ledger was edited.
- The owned dependency input retains one open page-order/methodological edge
  from this A page to batch 7's
  `symmetric-collapse-and-ultrafilter-free-models`. No Solovay item proof
  consumes a batch-7 item, but the supplier page remains unpublished, so the
  row is honestly left open for serial reconciliation.
- **Open owner obligation:** the repaired dependency inventory and prerequisite
  order changed the pair's scope hash. `step3-decisions check --phase scope`
  therefore requests the owner to re-record `proceed` for the current
  `solovays-model-and-regularity-of-all-sets-of-reals` scope. No item verdict was
  recorded while that owner-held scope decision is stale. All 31 IDs occur in
  the immutable pre-author baseline, so after the owner refresh they require
  ordinary `record-item` decisions rather than automatic certification.
