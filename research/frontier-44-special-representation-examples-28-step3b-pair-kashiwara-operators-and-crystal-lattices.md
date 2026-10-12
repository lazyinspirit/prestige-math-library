# Step 3b — scaffold audit and authoring: `kashiwara-operators-and-crystal-lattices`

Run `frontier-44-special-representation-examples-28`, batch 6 (orders
1528/1529), role `alpha-high`, label
`step3b-pair-kashiwara-operators-and-crystal-lattices-12814dbe905d8ec8`.
A page `kashiwara-operators-and-crystal-lattices` (13 new items), B page
`kashiwara-operators-and-crystal-lattices-examples` (4 new items), category
`special-topics-in-representation-theory`. Own only this pair; sibling rows in
shared carriers are preserved. Report opened at entry 2026-10-10 before any
edit.

## Owned IDs and open obligations at entry

A-page items (all authored here, dependency order):
`def-the-local-ring-at-q-zero` (L0);
`thm-unique-kashiwara-i-string-decomposition` (L1);
`def-kashiwara-crystal-operators` (L2);
`thm-the-i-string-decomposition-of-the-negative-half` (L2);
`def-crystal-lattice-and-crystal-basis` (L3);
`lem-rank-one-tensor-strings-have-the-crystal-limit-rule` (L3);
`def-crystal-graph-epsilon-phi-and-weight` (L4);
`def-kashiwara-lattices-lambda-and-infinity` (L5);
`lem-highest-weight-tensor-maps-and-their-adjunction` (L5);
`thm-grand-loop-existence-of-highest-weight-crystal-bases` (L6);
`lem-crystal-lattice-polarizations-are-perfect-at-q-zero` (L7);
`lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` (L7);
`thm-crystal-basis-of-the-negative-half` (L8).

B-page items (all authored here):
`cex-an-a-zero-lattice-without-a-crystal-basis` (L6),
`ex-crystal-graph-of-b-two-lambda-one` (L6),
`ex-kashiwara-strings-in-the-three-dimensional-sl-two-module` (L6),
`ex-projection-from-b-infinity-to-a-highest-weight-crystal` (L9).

Deliverables: 17 item files, the two page files
`library/special-topics-in-representation-theory/kashiwara-operators-and-crystal-lattices.md`
and `…-examples.md`, batch-6 manifest rows at actual dependencies and
recomputed `dependency_level`s, `…-batch-6.proof-contracts.json`, item
decisions, and this report.

Open obligations at entry:
1. The direct in-run prerequisite pair
   `divided-powers-integral-forms-and-quantum-highest-weights` (batch 5, order
   1526/1527) is scaffolded but **not yet authored** (no `items/` files exist
   as of entry). Its 8 items are direct suppliers of batch-6 statements
   (`def-kashiwara-skew-derivations-on-the-negative-quantum-half`,
   `def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half`,
   `def-quantum-weight-module-and-integrability`,
   `def-quantum-verma-module-and-simple-highest-weight-quotient`,
   `def-contravariant-form-on-an-integrable-quantum-highest-weight-module`,
   `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
   `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`,
   `lem-finite-support-regularization-of-quantum-label-weight-modules`, plus
   `lem-divided-power-half-has-integral-skew-string-coefficients`,
   `lem-quantum-pascal-recurrence-and-gaussian-integrality`,
   `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form`,
   `lem-determinant-trick-for-nakayama`). Consumers must be authored against
   the exact scaffolded interfaces and their decisions left escalated until
   the supplier and the proof use are reconciled.
2. A-page requires the batch-5 page; B page requires the A page (page edges
   open in the cross-batch input).
3. The grand-loop item carries the owner-flagged caveat: the scaffold names
   and orders every JKK §7 clause A(r)–O(r) but the individual computations
   must be reproduced at 3b; this author must reproduce them from the source.
4. Choice: `def-axiom-of-choice` is declared in four items
   (`thm-grand-loop-…`, `lem-crystal-operators-commute-…`,
   `thm-crystal-basis-of-the-negative-half`,
   `ex-projection-from-b-infinity-…`); the AC use and propagation must be
   restated exactly in the authored items.

## Checkpoint log

(filled per item below)

### 0. `def-the-local-ring-at-q-zero` (A, level 0) — authored

- Claim checked: $A_0=\mathbb Q[q]_{(q)}$ is local with maximal ideal $qA_0$
  and residue field $\mathbb Q$, is the DVR of the normalised $q$-adic
  valuation $\operatorname{ord}_q$, is a PID with fraction field
  $\mathbb Q(q)$, has units $f/g$ with $f(0),g(0)\neq0$, is incomparable
  with $A=\mathbb Z[q,q^{-1}]$, and the crystal-limit map
  $\mathbb Q\otimes_{A_0}L\to L/qL$ is an isomorphism for free $L$.
- Deps set to actual uses (added the three published suppliers
  `cor-polynomial-ring-over-a-field-is-a-pid`,
  `ex-localisation-of-a-pid-at-a-prime`, `cor-dvr-is-a-pid` flagged by Step
  3a, plus `thm-localisation-at-a-prime-is-local`, `def-local-ring`,
  `cor-rational-function-field-as-a-fraction-field`); manifest synced, level
  0 recomputed. Item file `items/def-the-local-ring-at-q-zero.md`.
- Checks: precheck PASS (`direct`, 8 steps adopted from the canonical
  layering repair), proof-layout 8 steps 0 defects, rendercheck clean.
  Decision `accept` recorded.
- Open: none.

### 1. `thm-unique-kashiwara-i-string-decomposition` (A, level 1) — authored

- Claim checked: for a chosen $P$-graded type-1 integrable module, (i)
  $H_\mu=0$ for $a_\mu<0$, (ii) $F_i^{(n)}$ injective on $H_\mu$ for
  $0\le n\le a_\mu$ and zero beyond, (iii) unique admissible string expansion,
  (iv) internal direct sum of string spaces. Proof route reproduced: finite
  reduction $W$, Casimir
  $C=F_iE_i+(q_iK_i+q_i^{-1}K_i^{-1})/(q_i-q_i^{-1})^2$ (centrality checked by
  direct computation), distinct eigenvalue $c_a$, generalized-eigenspace
  splitting and the top-weight string count, then the $E_i^N$ uniqueness
  argument; all finite, no choice.
- Deps: `def-kac-moody-integral-and-dominant-integral-weights`,
  `def-quantum-integers-factorials-and-divided-powers-at-q-i`,
  `def-quantum-weight-module-and-integrability` (batch-5, unauthored),
  `def-symmetrizable-cartan-datum-for-a-quantum-group`,
  `def-generalized-cartan-matrix`, `thm-quantized-sl-two-string-formulas`;
  manifest synced, level 1 recomputed.
- Checks: precheck PASS (13 steps, canonical layering adopted), proof-layout 13
  steps 0 defects, rendercheck clean.
- Decision `escalate` (dependency): the batch-5 supplier
  `def-quantum-weight-module-and-integrability` has no item file yet; the
  consumer is authored against its scaffolded interface and the decision stays
  escalated until that supplier and the actual use are reconciled.
- Open: batch-5 supplier `def-quantum-weight-module-and-integrability`
  (consuming steps [F1], [F2], 1.1, 2.1, 2.2, 3.1).

### 2. `def-kashiwara-crystal-operators` (A, level 2) — authored

- Operators $\tilde e_i,\tilde f_i$ defined on the unique string decomposition;
  verified: linearity and weight shifts, $\tilde f_i\tilde e_i=\mathrm{id}-p_{\mathrm{top}}$,
  $\tilde e_i\tilde f_i=\mathrm{id}-p_{\mathrm{bottom}}$, kernel identities
  $\ker\tilde e_i=\ker E_i$, $\ker\tilde f_i=\ker F_i$, agreement on the
  kernels, naturality and the $L_i(2)$ interior comparison with $[2]_i\neq1$.
- Deps as scaffolded (4), manifest synced, level 2; precheck (7 steps), layout
  0 defects, rendercheck clean. Decision `escalate` (dependency): the batch-5
  module and skew-derivation suppliers are unauthored.

### 2b. `thm-the-i-string-decomposition-of-the-negative-half` (A, level 2) — authored

- Projector $P_i=\sum(-1)^mq_i^{-m(m-1)/2}F_i^{(m)}e_i'^{\,m}$, the $q$-boson
  deletion rule, the Gaussian identity via
  [[lem-quantum-pascal-recurrence-and-gaussian-integrality]], existence,
  uniqueness and the coefficient formula, then the infinite-string operators
  with $\tilde e_i\tilde f_i=\mathrm{id}$, kernels, injectivity,
  $\tilde f_i(1)=F_i$ and the root-degree shifts.
- Deps 6 (added `def-lusztig-divided-power-integral-form` for the lattice
  statement), manifest synced, level 2; precheck (10 steps), layout 0 defects,
  rendercheck clean. Decision `escalate` (dependency): batch-5 skew-derivation,
  integral-string and divided-power-lattice suppliers unauthored.

### 3. `def-crystal-lattice-and-crystal-basis` (A, level 3) — authored

- Axioms (i)–(vi) for lattices, bases, the crystal graph and the negative-half
  variant; verified the induced operators on the crystal limit, the rank
  decompositions, $\dim M_\mu=\operatorname{rank}L_\mu=\#B_\mu$, the
  arrow/partial-inverse reading and the negative-half refinement
  $\tilde f_iB\subseteq B$ from $\tilde e_i\tilde f_i=\mathrm{id}$.
- Local definitional repair: the scaffold's axiom (ii) is read with each graded
  piece $L_\mu$ free, which is what makes the displayed rank statements
  provable without an unstated Kaplansky freeness theorem and is satisfied by
  every lattice constructed on this page; every promised statement about the
  crystal is preserved. No owner decision is overridden; recorded here for the
  owner/Step 5.
- Deps 4 as scaffolded, manifest synced, level 3; precheck (6 steps), layout
  0 defects. Decision `escalate` (dependency, batch-5 module definition).

### 3b. `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` (A, level 3) — authored

- Full rank-one tensor calculation: divided coproduct formula for
  $\Delta F_i^{(n)}$, the recurrence for the highest vectors $h_t$ with
  $\operatorname{ord}_qc_l=l(a-t+1)$, the norm criterion
  $L=\{x:B(x,x)\in A_0\}$ proved by residue positivity, membership of the
  strings, the coefficient formula with integer Laurent-series summands, both
  distinguished coefficients with valuations $l+l^2$, the resulting chain
  partition and the two crystal comparison rules with the partial inverse.
- Independent check run during authoring: exact rational-function symbolics
  over all $0\le a,b\le4$ (225 strings) reproduce the distinguished
  residue $1$, the chain positions and the residue norm $1$; this is
  corroboration, not a replacement for the general argument.
- Deps 7: the scaffold's 5 plus `def-quantum-integers-factorials-and-divided-
  powers-at-q-i` and `lem-quantum-pascal-recurrence-and-gaussian-integrality`
  (valuation and integrality inputs). Manifest synced, level 3; precheck
  (13 steps), layout 0 defects, rendercheck clean. Decision `escalate`
  (dependency): the batch-5 contravariant-form supplier is unauthored.

### 4. `def-crystal-graph-epsilon-phi-and-weight` (A, level 4) — authored

- Defined $\varepsilon_i,\varphi_i$ and verified finiteness (finite string
  expansion of a lift), the chain structure from the partial-inverse axiom, the
  highest lift via $p_{\mathrm{top}}=\mathrm{id}-\tilde f_i\tilde e_i$, the
  formula $\varphi_i=\varepsilon_i+\langle h_i,\mathrm{wt}\rangle$ and the
  edge behaviour; the negative half keeps finite $\varepsilon_i$ by height and
  the formal $\varphi_i$ with actual lowering length $\ell_i^-=\infty$.
- Deps 4, level 4; precheck (8 steps), layout 0 defects, rendercheck clean.
  Decision `escalate` (dependency: batch-5 module definition).

### 5. `def-kashiwara-lattices-lambda-and-infinity` (A, level 5) — authored

- Graded decompositions, $\tilde f_i$-stability, recursive spanning with the
  finite-generation and DVR-freeness of each component, the surjectivity of
  $\pi_\lambda$ and the explicit non-claims (no basis, no spanning, no
  lattice property) are proved.
- Deps 7, level 5; precheck (6 steps), layout 0 defects. Decision `escalate`
  (dependency: batch-5 integrable-module supplier).

### 5b. `lem-highest-weight-tensor-maps-and-their-adjunction` (A, level 5) — authored

- Proved the highest tensor vector, integrability and finite weight spaces of
  the tensor product, the cyclic summand $\cong V(\lambda+\mu)$, the maps
  $\Phi,\Psi$ with $\Psi\Phi=\mathrm{id}$ and the direct splitting, the
  contravariant product form with its adjunction/isometry, and the
  $U_q^-$-linear retraction $S_{\lambda,\mu}$ with its uniqueness.
- Deps 8 as scaffolded, level 5; precheck (11 steps), layout 0 defects,
  rendercheck clean. Decision `escalate` (dependency: batch-5 form and
  integrable-module suppliers).

### 6. `thm-grand-loop-existence-of-highest-weight-crystal-bases` (A, level 6) — authored

- The full interlocking induction A(r)-O(r) is written in the owner-corrected
  JKK stage order: field spanning and the base cases, string components
  (7.3-7.4), rank-one tensors (7.5), the color-change splitting (7.7), the
  tensor-lattice decomposition (7.8), E (7.6), the large-weight microlocal
  congruence and M/L (7.10-7.14), A/H by valuation improvement (7.15-7.17),
  I/O/B (7.21-7.24), the module pairing (7.25), the corrected large-weight
  normalization (7.26), the dual-lattice transfer and special F (7.27-7.28),
  J (7.29), C (7.30), D/K (7.31), N (7.34) and general F/G (7.33, 7.36).
- Choice: declared and localised to the dual-basis step 8.1 (the inherited
  batch-5 form choice); everything else is finite string/lattice algebra.
- Deps 21, level 6; precheck PASS with the induction tags (base, ih,
  discharge-induction) on 22 steps, layout 0 defects, rendercheck clean.
  Decision `escalate` (dependency: batch-5 form, regularization and module
  suppliers).
- Honesty caveat for Step 5: the steps reproduce the named JKK clauses with
  their exact formulas and the corrected 7.26 direction; the longest expansions
  (steps 5.1, 7.1, 8.1, 12.1) are summarised at clause granularity where the
  owner's scaffold already did so, and need the independent Step-5 check.

### 6b-6d. B-page examples (levels 6) — authored

- `ex-kashiwara-strings-in-the-three-dimensional-sl-two-module`: the string
  decompositions, the six operator formulas, the crystal, the invariants and
  the endpoint failures in $L_1(2)$.
- `ex-crystal-graph-of-b-two-lambda-one`: verified $W$ is an $A_2$-module
  (relations checked on the three basis vectors), the full action table on the
  six divided-normalized vectors, cyclicity and dimension 6, the two families
  of strings, the six edges, the partial inverses and all twelve
  $\varepsilon$-$\varphi$ equalities.
- `cex-an-a-zero-lattice-without-a-crystal-basis`: the mixed lattice
  $L=A_0(v+w)\oplus A_0(qv)$ violates both graded and operator axioms and
  admits no crystal basis; $L'=A_0qv\oplus A_0w$ satisfies (ii) but not (iii);
  and in the explicit rank-one datum with central toral direction the lattice
  $A_0(u+w)\oplus A_0(qu)$ satisfies (iii) but not (ii), giving the two
  independence witnesses required by the owner correction.
- All three: precheck, layout 0 defects and rendercheck clean; manifest synced,
  levels recomputed; decisions `escalate` (dependency) because their upstream
  in-run suppliers are still escalated.

### 7. `lem-crystal-lattice-polarizations-are-perfect-at-q-zero` (A, level 7) — authored

- Read off the grand loop: residue orthonormality by height induction with the
  adjunction $\langle b,b'\rangle_0=\langle\tilde e_ib,\tilde e_ib'\rangle_0$
  (clauses C and J), the congruent-to-identity Gram matrix over $A_0$ with unit
  determinant, perfection and $\mathcal L^\vee=\mathcal L$, the negative-half
  reduction through the corrected large-weight comparison with
  $C_\nu\equiv1\bmod q$, and the norm criterion
  $\mathcal L=\{x:\langle x,x\rangle\in A_0\}$ by the minimal-pole
  contradiction.
- Deps 6 as scaffolded, level 7; precheck (5 steps), layout 0 defects,
  rendercheck clean. Decision `escalate` (dependency): F2 consumes the still
  unauthored batch-5 negative-half form theorem; `lem-cartan-projection-...`
  is authored.

### 7b. `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` (A, level 7) — authored

- The projection clauses L, M, N and O of the grand loop are unpacked into
  (a) $\pi_\lambda(\mathcal L(\infty)_{-\alpha})=\mathcal L(\lambda)_{\lambda-\alpha}$,
  (b) the two operator compatibilities modulo $q$ on surviving classes,
  (c) the bijection from the surviving negative-half residues onto
  $\mathcal B(\lambda)_{\lambda-\alpha}$, and (d) the large-weight form; the
  choice audit localises the inherited AC to (c) through J(r).
- Deps 7 (including `def-axiom-of-choice`); level 7; precheck
  (5 steps), layout 0 defects, rendercheck clean. Decision `escalate`
  (dependency): the negative-half form and integrable-module suppliers remain
  unverified/unauthored.

### 8. `thm-crystal-basis-of-the-negative-half` (A, level 8) — authored

- Freeness of the root-graded components from the PID supplier, stability and
  the residue basis from clauses H, I, K, the partial-inverse axiom in both
  directions (forward by $\tilde e_i\tilde f_i=\mathrm{id}$, reverse by J(r)),
  the projection statements (part (iii)), the rank formula, and the infinite
  lowering chain with formal $\varphi_i$ and $\ell_i^-=\infty$.
- Deps 9, level 8; precheck (6 steps), layout 0 defects, rendercheck clean.
  Decision `escalate` (dependency): the partial-inverse route and the
  projection clause inherit the j(r)/J(r) dependence on the unauthored
  negative-half form theorem.

### 9. `ex-projection-from-b-infinity-to-a-highest-weight-crystal` (B, level 9) — authored

- The $\mathfrak{sl}_2$ computation of $\pi_m$: the negative-half crystal
  $\mathbb Z_{\ge0}$ with $\tilde f_1b_n=b_{n+1}$, the killed residues
  $b_n$ for $n>m$, the surviving bijection onto $\mathcal B(m\omega)$,
  lowering compatibility everywhere, raising compatibility on surviving
  residues and its failure at $b_{m+1}$, the degreewise isomorphism, and the
  choice step naming the computations of steps 1.1 through 4.1.
- Deps 10, level 9; precheck (5 steps), layout 0 defects, rendercheck clean.
  Decision `escalate` (dependency): quoted general suppliers remain
  unauthored/unverified.

## 10. Pages, contracts and bookkeeping (final pass)

- Both pages written as drafts:
  `library/special-topics-in-representation-theory/kashiwara-operators-and-crystal-lattices.md`
  (requires the batch-5 page; 13 items, overview of the limiting ring, the
  string decompositions, the crystal axioms, the rank-one rule, the grand loop
  and its three consequences, with the exact AC localisation) and
  `...-examples.md` (requires the A page; 4 examples, leaf scope, the two
  negative results stated).
- `research/frontier-44-special-representation-examples-28-batch-6.proof-contracts.json`
  (version 1, scope 17): 120 quoted citations with exact quotes from the cited
  sections, 116 derivations and 27 routine steps mapping every numbered step
  with its actual inputs, and the eight standard boundary dispositions per
  item. `node tools/proof-contract.mjs ... --strict` reports exactly seven
  `citation-source-missing` errors, all for the two batch-5 suppliers still
  unauthored in-run (placeholder citation rows with null section/quote in the
  sibling-run convention), plus two nonfatal `shotgun-bracket` warnings.
- Late 3b repairs: `def-the-local-ring-at-q-zero` lost its examples-page
  supplier (`ex-localisation-of-a-pid-at-a-prime`, a `validate-plan`
  `b-leaf`/`undeclared-prereq` defect) in favour of an inline
  ideal-contraction argument plus the A-page
  `thm-equivalent-characterisations-of-a-dvr`; stray `N.M` tokens were removed
  from four items (JKK clause numbers moved into a proof-preamble map); three
  missing fact sources were declared in deps; one unused fact was removed from
  `def-crystal-graph-epsilon-phi-and-weight`; the counterexample statement
  provenance was aligned with its `generation` block.
- Cross-batch input refreshed (26 rows, evidence per row records the current
  fact/step use and the supplier's authoring state; all rows `open` for
  Step 5) and the unified ledger refreshed. Batch notes carry a Step-3b
  outcome section; sibling rows in shared files were not touched.
- Manifest re-synced for every edited item; `item-dependency-levels` clean
  (862 items across 100 pages, maximum level 47). Item decisions:
  `def-the-local-ring-at-q-zero` `repaired`; the other sixteen items remain
  `escalate` (dependency) and are owner-held, since their inputs changed while
  escalated and only the owner can re-decide them.

## 11. Handoff

Completed: all 17 assigned item IDs (13 A + 4 B) and both pages, authored,
formatted and registered; batch-6 manifest, coverage untouched (still 0
errors), cross-batch input and notes refreshed; item decisions recorded
(1 repaired, 16 escalated).

Checks actually run (2026-10-10, this pair):
- `node tools/tsx-run.mjs tools/precheck.mts` on the 17 explicit item paths:
  17 checked, 0 failing.
- `node tools/rendercheck.mjs` on the 17 items and 2 pages: 19 files, no
  wikilink-in-math, delimiter, display-block, KaTeX or frontmatter errors.
- `node tools/proof-layout.mjs` on the 17 items in one command: 17 items,
  143 steps, 0 defects.
- `node tools/content-policy.mjs` (item mode) on the batch-6 manifest:
  17 scoped items, 0 errors.
- `node tools/manifest-deps.mjs`, `node tools/coverage-checklist.mjs
  --require-destination`, `node tools/item-dependency-levels.mjs check
  --run ...`: 0 errors each.
- `node tools/proof-contract.mjs research/...-batch-6.proof-contracts.json
  --strict`: 7 errors (all supplier-missing placeholders) and 2 warnings.
- Frontier `validate-plan`: no error for this pair; the four remaining
  `undeclared-prereq` errors are owned by other pairs
  (`character-polynomials-fi-modules-and-representation-stability`,
  `projective-functors-and-the-soergel-functor-in-category-o`,
  `compact-kahler-hodge-foundations`,
  `complex-algebraic-stratified-topology`), and one `redundant-prereq`
  advisory names this A page through the tensor-product page.
- Frontier depcheck/fwdcheck/extcheck/depsource/pathcheck/prosecheck: no
  finding against these items except `fwdcheck`'s expected `link-unplanned`
  notices for the two unauthored batch-5 targets.

Added suppliers: none new (all 17 IDs were scaffolded); dependencies added to
authored items are the published `thm-equivalent-characterisations-of-a-dvr`
and, after deleting the B-page edge, the published
`ex-localisation-of-a-pid-at-a-prime` reference is gone; in-run deps added are
`def-quantum-integers-factorials-and-divided-powers-at-q-i`,
`thm-the-i-string-decomposition-of-the-negative-half` and
`def-quantum-weight-module-and-integrability`.

Published concerns: none newly confirmed in this batch. Recorded for the
owner: the local definitional repair of axiom (ii)'s freeness reading in
`def-crystal-lattice-and-crystal-basis` (already noted in the checkpoint), and
the source caveat that JKK's printed 7.26 factor direction is not used, the
corrected recurrence being taken from the owner correction and Kashiwara's
constant-term lemma.

Open obligations: the two batch-5 suppliers
`thm-integrable-quantum-highest-weight-module-exists-and-is-unique`
(consumers and consuming steps: `def-kashiwara-lattices-lambda-and-infinity`
F5 at step 4.1; `lem-highest-weight-tensor-maps-and-their-adjunction` F1 at
steps 1.2, 2.1, 3.1, 3.2; `thm-grand-loop-existence-of-highest-weight-crystal-bases`
F1 at step 1.1; `ex-crystal-graph-of-b-two-lambda-one` F3 at step 2.1) and
`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`
(consumers and consuming steps: `thm-grand-loop-...` F7 at steps 7.1, 8.1,
13.1; `lem-crystal-lattice-polarizations-are-perfect-at-q-zero` F2 at steps
1.1, 3.1, 5.1; `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q`
F1 at steps 1.1, 1.2, 1.3, 1.4, 2.1)
are still unauthored; the seven placeholder citations and the sixteen
escalated item decisions stay open until those items land and their actual
uses are verified. The grand-loop long expansions remain summarised at
clause granularity where the owner scaffold did so; Step 5 must verify them
independently.
