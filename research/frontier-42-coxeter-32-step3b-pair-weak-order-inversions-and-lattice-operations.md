# Step 3b pair report — `weak-order-inversions-and-lattice-operations`

- Run: `frontier-42-coxeter-32`; role `alpha-high`; label
  `step3b-pair-weak-order-inversions-and-lattice-operations-aed4e269e524e7f1`.
- Pair: A `weak-order-inversions-and-lattice-operations` /
  B `weak-order-inversions-and-lattice-operations-examples` (batch 23, orders
  1762/1763, category `coxeter-groups`, design label CG-18).
- Step 3a scope decision: `sufficient`
  (`frontier-42-coxeter-32-step3a-review-weak-order-inversions-and-lattice-operations.json`).
- Owned artifacts: the nine items below, the two `library/coxeter-groups/`
  pages, `research/frontier-42-coxeter-32-batch-23.pages.json`,
  `research/frontier-42-coxeter-32-batch-23.proof-contracts.json`,
  `research/frontier-42-coxeter-32-batch-23.cross-batch-dependencies.json`
  (recheck rows only, preserving sibling-free batch).
- Author order (dispatch list, ascending `dependency_level`):
  11 `def-cg-left-right-weak-order-and-descents`;
  12 `lem-cg-weak-order-prefix-property-and-left-translation`;
  13 `lem-cg-weak-order-is-a-graded-partial-order`;
  14 `lem-cg-bounded-weak-order-join-construction`;
  17 `lem-cg-full-descent-element-characterizes-finite-type`;
  18 `thm-cg-weak-order-meet-semilattice-and-finite-lattice`;
  19 `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` (B);
  19 `ex-cg-s3-weak-order-meets-and-joins` (B);
  20 `cex-cg-inversion-sets-do-not-compute-meets-and-joins` (B).

## Open obligations (updated as work proceeds)

- [x] Author and check all nine owned items. Item 11 remains owner-escalated:
      only the owner can reconsider its well-definedness decision now that its
      justifier `lem-cg-weak-order-is-a-graded-partial-order` is complete.
- [ ] Owner review of `def-cg-left-right-weak-order-and-descents` after checking
      the completed antisymmetry/uniqueness justifier; this pass cannot clear its
      existing escalation receipt.
- [x] Author both page bodies, preserving the item/page IDs, A-page prerequisite
      closure, and the B page's dependency-leaf registration.
- [x] Complete all nine proof contracts and run the strict batch contract,
      boundary audit, citation fidelity, finite-smoke and risk report.
- [x] Reconcile the batch-23 cross-batch input and refresh the unified ledger.
      Current input: 49 item rows (44 verified, 5 removed) and 2 verified page
      rows; no open batch-23 cross-batch row remains.
- [x] Record all B item decisions as `repaired`, confidence 1, with examined
      dependency IDs. The item-11 owner escalation remains open as recorded.
- [x] Correct the Step 3a locator finding: BB has no remark after Cor. 3.1.4
      asserting a meet/intersection rule. The S3 and infinite-dihedral locator
      corrections are also recorded in their checkpoints.
- [x] Run explicit-path precheck/rendering and the required batch gates, then
      run the single explicit-path proof-layout command over all nine changed
      item paths. The plan and run-wide dependency-level gates still report
      out-of-scope failures documented below.
- [x] Refresh the sufficient pair scope decision after the S3 local repairs;
      the nine owned IDs and promised claims remain unchanged.

## Checkpoints

### Entry — dispatch `aed4e269e524e7f1`, attempt 1

- The report was already present at entry with the earlier same-pair label
  `0d1bc1def9ea74bc` and no item checkpoints. Its contents are retained; all
  pre-existing item work is being rechecked against current suppliers and
  records before it is treated as complete.
- Recomputed run status at `2026-10-07T10:53:56Z`: run is in `3b-author`, this
  pair is still missing, and the status command reports no workers in flight.
- Open at entry: verify the first item's exact suppliers, then audit and
  checkpoint items in dispatch order; inspect applicable Step-3a findings at
  the corresponding item; reconcile registrations, contracts, decisions,
  pages, and required checks before handoff.

### 11 — `def-cg-left-right-weak-order-and-descents`

- Claim/conventions: defines right and left weak-order relations by
  length-additive multiplication; inversion exchanges them using
  $\ell(w)=\ell(w^{-1})$; defines intervals, covers, bounded subsets, and
  meet/join universal properties without assuming any existence formula.
- Local repair: intervals, covers, and bounds are defined directly from the
  relations so item 11 does not use poset-only definitions before the order
  property is established. Dependencies on the published interval, finite
  graded-poset, and lattice definitions were removed; the promised claim is
  unchanged. The uniqueness clause remains covered by the existing
  `justified_by` edge.
- Direct dependencies examined: `def-hh-coxeter-matrix-word-group-and-length`;
  `def-cg-parabolic-quotient-and-two-sided-minima` (clause 2, the exact
  $D_L,D_R$ conventions); `def-cg-canonical-reflection-homomorphism` ($\rho$,
  roots and reflections); `def-cg-geometric-inversion-set` (only the definition
  of $N(w)$); `def-partial-order`; and
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (clause 3,
  $\ell(w)=\ell(w^{-1})$). The definition's recorded justifier is
  `lem-cg-weak-order-is-a-graded-partial-order`; it must prove antisymmetry for
  the uniqueness claim. Item 13 has now proved that support; item 11's prior
  escalation remains owner-held and cannot be cleared by this non-owner.
- Source passages read: Björner–Brenti, *Combinatorics of Coxeter Groups*,
  Definition 3.1.1 (printed p. 65) and §1.4 equation (1.20), Corollary 1.4.6
  (printed pp. 17–18), at
  https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf;
  Stembridge, §1.3 (PDF p. 5), at
  https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf. These support the
  length-additive conventions, descents, and inversion relation. No inversion-
  set order criterion is asserted here.
- Checks: explicit-path precheck returned `not-applicable` (exit 0);
  explicit-path rendercheck passed (1 file); batch-23 content policy passed
  (9 items, 0 errors/warnings); strict item-11 proof contract passed; the
  cross-batch dependency input was refreshed into the unified ledger. The
  dependency-level checker reported no batch-23 mismatch but exited 1 for 21
  level mismatches in other pairs (listed below). The explicit-path
  proof-layout check and `validate-plan` remain for the final pass.
- Decisions: refreshed this pair's Step-3 scope decision to `sufficient` after
  the local repair; recorded item 11 as `escalate`, confidence 1, with all
  examined dependencies. It remains escalated because its same-batch
  well-definedness justifier is not yet authored and its actual use cannot yet
  be reconciled.
- Next: read item 12's exact suppliers, then author and checkpoint item 12
  before surveying later items or tools.

### 12 — `lem-cg-weak-order-prefix-property-and-left-translation`

- Claim/conventions: (1) converts the two length-additive relations to length
  identities; (2) gives both reduced-word prefix characterizations; (3) gives
  left translation when $s$ is a left descent of both elements; (4) translates
  right and left intervals by multiplication, now stated as bijections that
  preserve and reflect the relation. The proof does not use transitivity or
  antisymmetry, so it does not consume item 11's still-open poset justifier.
- Confirmed local gaps and repairs: step 2.3 needed the supplier's
  $\pm1$-length change for simple multiplication and $s^2=1$; both now appear
  as explicit Facts and contract inputs. The previous interval proof called
  the maps poset isomorphisms before that structure was established; it now
  proves the stronger relation-preserving/reflection statement directly.
  Removed the unused published `def-poset-interval-and-finiteness-conditions`
  dependency. Item level remains 12.
- Direct dependencies examined: item 11's relation/interval definitions;
  `def-hh-coxeter-matrix-word-group-and-length` (length and reduced words,
  including $s^2=1$); `def-cg-parabolic-quotient-and-two-sided-minima` (the exact
  descent conventions and $\pm1$ length changes); and
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (length
  invariance under inversion, clause 3). Exact uses are itemized in the
  three updated batch-23 cross-batch rows. The item-11 relation is used only
  as a binary relation; its open `justified_by` property is not used here.
- Sources read: Björner–Brenti, Proposition 3.1.2(ii),(iv),(vi), printed p. 66,
  and Proposition 3.1.6 with proof, printed pp. 69–70, at
  https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf;
  Stembridge, §1.3 and Proposition 1.3, PDF p. 5, at
  https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf. BB's interval proof
  uses the length chain for the same interval image; this item writes each
  equality case and proves relation preservation/reflection without assuming
  the partial-order lemma.
- Checks: explicit-path precheck passed (1 checked, 0 failures);
  explicit-path rendercheck passed (1 file); batch content policy passed
  (9 items, 0 errors/warnings); strict item proof contract passed; three
  cross-batch rows were updated to `verified` and the unified ledger refresh
  succeeded. The item decision is `repaired`, confidence 1, with four examined
  dependencies. The run-wide dependency-level check still has the 21
  out-of-scope mismatches recorded above and no batch-23 mismatch.
- Open item-11 decision: its recorded escalation remains owner-held even though
  item 13 now proves the actual antisymmetry/uniqueness support. Item 12 uses the
  relation definition only and does not consume that property.
- Next: inspect the required in-run prerequisite pairs and item 13's exact
  suppliers, then author item 13.

### 13 — `lem-cg-weak-order-is-a-graded-partial-order`

- Claim/conventions: both length-additive weak orders are partial orders with
  minimum 1; covers are simple-generator length rises; comparable intervals
  are finite and graded; right weak order is characterized by inclusion of
  `N(u^{-1})`; and left/right descents are detected by the corresponding simple
  roots. The claim assumes finite `S`, not finite `W`, and uses no Choice.
- Proof route: establish the relation axioms and finite balls from word length;
  prove the inversion criterion forward from a reduced-prefix extension and
  the prefix-root formula, and reverse by induction on `ell(u)`, translating
  by the first letter and applying the descent recursion; derive covers by
  factoring a reduced quotient and forcing every prefix/suffix to be
  length-additive; build saturated chains from reduced quotients; then prove
  interval gradedness and the descent-root dictionary.
- Independent audit repairs: (i) rank-one `ell(s)=1` now follows from the
  supplied `±1` length change at `w=1` and nonnegative length, not from
  distinctness of generators; (ii) the induction explicitly uses `s^2=1`;
  (iii) the cover proof states both prefix and suffix length bounds; (iv) the
  chain uses `u_{i+1}=u_i s_{i+1}`, with the one-unit rise proved; (v)
  `ell(w^{-1})=ell(w)`, used in the left descent arguments, is derived from the
  cited inversion-root count.
- Direct dependencies examined: `def-cg-left-right-weak-order-and-descents`,
  `lem-cg-weak-order-prefix-property-and-left-translation`,
  `def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `def-cg-geometric-inversion-set`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`,
  `thm-cg-root-length-criterion-and-faithfulness`,
  `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`,
  `def-partial-order`, and `def-cg-parabolic-quotient-and-two-sided-minima`.
  The batch-2, batch-7, and batch-10 reports confirm the in-run suppliers are
  authored, checked and decided; the item-13 cross-batch input now records
  exact current uses, including the previously missing parabolic edge. No
  strong-exchange or faithfulness clause is used here.
- Source passages: Björner–Brenti, Proposition 3.1.2(ii),(iv),(vi), p. 66;
  Proposition 3.1.3 with proof and Corollary 3.1.4, pp. 68–69. Reading–Speyer,
  Section 2, arXiv pp. 4–5, is explicitly finite-Coxeter-group context and is
  cited only as finite-case corroboration; the general proof is local and the
  general source is Björner–Brenti. Step 3a's repaired existential cover
  quantifier (“some `s ∈ S`”) is preserved.
- Registration: batch-23 manifest statement, dependencies, level 13 and proof
  strategy match the authored item; the source locator is corrected;
  item-specific citations and derivations are complete; the batch-23
  cross-batch input gained the missing item-13-to-
  `def-cg-parabolic-quotient-and-two-sided-minima` row without changing sibling
  rows. The unified dependency ledger was refreshed.
- Checks on current bytes: explicit-path precheck passed (1 item); explicit-path
  rendercheck passed (1 file); batch-23 content policy passed (9 items, 0
  errors/warnings); strict item-13 proof contract passed; `manifest-deps`
  passed (9 items, 0 normalized, 0 errors). Pair scope was refreshed to
  `sufficient`; item decision recorded `repaired`, confidence 1, with all 11
  examined dependencies. The proof-layout and final batch gates remain for
  handoff.
- Open item-specific issue: item 11
  `def-cg-left-right-weak-order-and-descents` still has an owner-held escalation
  on its `justified_by` link to this lemma. This lemma is now authored and its
  actual uniqueness/antisymmetry support is proved; do not clear the prior
  item-11 receipt as a non-owner.

### 14 — `lem-cg-bounded-weak-order-join-construction`

- Claim/conventions: every pair has a binary meet, realized by any
  maximal-length common lower bound; the meet is 1 exactly when 1 is the only
  common lower bound; every nonempty subset has a meet; and nonempty bounded
  subsets have joins given by the meet of their upper bounds. The left-order
  claims follow by inversion. The proof uses no AC and asserts no empty-set
  meet/join convention.
- Proof route: finiteness of `[1,x]_R` gives a maximal common lower bound `z`.
  The common-atom argument applies left exchange to reduced expressions
  `x=z x′`, `y=z y′`, separating deletion in the `z` prefix (contradicting
  `s` ascending at `z`) from deletion in the suffix (producing a longer
  common lower bound). For an arbitrary common lower bound `w`, its first
  letter `s` descends `w,x,y,z`; induction gives `z′=sx∧sy`. Left translation
  explicitly gives `sw≤sx,sy`, hence `sw≤z′`. To show `sz′≤x,y`, the proof
  uses the inversion criterion and the two possible inversion-recursion
  cases, avoiding an unsupported descent assumption on `z′`. Maximality and
  the final length comparison force `z′=sz`; reverse left translation gives
  `w≤z`. A finite decreasing-length recursion proves arbitrary nonempty meets,
  and taking the meet of the nonempty upper-bound set proves the join claim.
- Audit repairs: added the omitted `sw≤sx,sy` argument before invoking the
  inductive meet; supplied the Coxeter relation `s²=1` where the exchange and
  root-set involution arguments use it; declared the direct descent-definition
  and canonical-reflection suppliers; and made `ell(w^{-1})=ell(w)` explicit
  from item 13's inversion-root count before applying the recursion to
  `N(x^{-1}s)`. Published interval/lattice dependencies were removed because
  item 11 supplies the required interval and universal-bound definitions.
- Direct dependencies examined: `def-cg-left-right-weak-order-and-descents`,
  `lem-cg-weak-order-prefix-property-and-left-translation`,
  `lem-cg-weak-order-is-a-graded-partial-order`,
  `def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `def-cg-canonical-reflection-homomorphism`,
  `def-cg-geometric-inversion-set`, and
  `def-cg-parabolic-quotient-and-two-sided-minima`. The batch-2, batch-4,
  batch-7 and batch-10 reports confirm the in-run suppliers are authored,
  checked and decided; cross-batch rows list only the exact clauses and steps
  consumed.
- Source passage: Björner–Brenti, Theorem 3.2.1 with its complete proof and
  immediately following bounded-join/finite-lattice paragraph, printed
  pp. 70–71. The proof independently verifies the extension step that BB
  abbreviates by left translation. Reading–Speyer, Section 2, arXiv pp. 4–5,
  is cited only as finite-case corroboration.
- Registration: manifest and item both declare eight direct dependencies and
  level 14; the source locator, proof route, citations and per-step contract
  match the authored argument. The cross-batch input added the missing
  item-14-to-`def-cg-parabolic-quotient-and-two-sided-minima` and
  item-14-to-`def-cg-canonical-reflection-homomorphism` edges. The unified
  dependency ledger was refreshed.
- Checks on current bytes: explicit-path precheck passed (1 item); rendercheck
  passed (1 file); batch content policy passed (9 items, 0 errors/warnings);
  strict item-14 proof contract passed; `manifest-deps` passed (9 items,
  0 normalized, 0 errors); run dependency-level check found no batch-23 level
  mismatch. Pair scope was refreshed to `sufficient`; item decision recorded
  `repaired`, confidence 1, with all eight examined dependencies.
- Open item-specific issue: none. Item 11 remains owner-escalated as recorded
  above; item 14's use of its definition and the completed item-13 justifier
  have been reconciled.

### 17 — `lem-cg-full-descent-element-characterizes-finite-type`

- Claim/conventions: a full left descent set forces all positive roots to be
  sent to negative roots by `rho(x^{-1})`; the inversion set is all of
  `Phi_+`, the root system and group are finite, and `x` is the unique longest
  element. The parabolic clause proves the same criterion inside `W_J` and
  identifies `w_0(J)`. The argument allows degenerate/indefinite Coxeter forms
  and uses no Choice.
- Proof route: use the root-sign theorem to extend the negative images of all
  simple roots by linearity to every positive root; the inversion definition
  gives `N(x^{-1})=Phi_+`. The inversion count, root/reflection bijection and
  faithful action then give finite `Phi` and finite `W`; the finite-longest
  supplier identifies `x`. For parabolics, invariance of `V_J` and the signed
  subsystem root decomposition let the same cone argument prove
  `N_J(w^{-1})=Phi_J^+`; the restricted representation is identified on
  generators and by the presentation universal property, so the inversion
  formula and faithfulness apply to the subsystem before the first clause is
  reused.
- Audit repairs: made the use of `ell(w^{-1})=ell(w)` explicit before applying
  the inversion-count formula to `N(x^{-1})`; expanded the restricted
  canonical-representation argument with the simple reflection formula and
  presentation uniqueness; used the ambient basis to justify that roots in
  `V_J` have no coordinates outside `J`; removed the unused direct dependency
  `def-cg-left-right-weak-order-and-descents`.
- Direct dependencies examined: `lem-cg-weak-order-is-a-graded-partial-order`,
  `def-hh-coxeter-matrix-word-group-and-length`,
  `def-cg-canonical-reflection-homomorphism`,
  `def-cg-real-coxeter-form-and-reflection`,
  `thm-cg-root-sign-and-simple-reflection-positivity`,
  `thm-cg-root-length-criterion-and-faithfulness`,
  `def-cg-geometric-inversion-set`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`,
  `thm-cg-finite-parabolic-longest-element-and-opposition`,
  `def-cg-parabolic-quotient-and-two-sided-minima`,
  `thm-cg-parabolic-intersections-and-coset-factorization`, and
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`. The
  batch-2/4/7/10/17 reports confirm the actual in-run A suppliers are authored,
  checked and decided. The separate batch-17 B example escalation is not used
  by item 17.
- Source passages: Björner–Brenti, Proposition 2.3.1(ii) with proof,
  Proposition 2.3.2 and Corollary 2.3.3, printed pp. 36–37. The local proof
  replaces the printed Bruhat-lifting argument with the declared root-sign,
  inversion and faithfulness suppliers. Reading–Speyer Section 2, arXiv
  pp. 4–5 is cited only for finite-Coxeter-group inversion/descent context.
- Registration: manifest and item now agree on twelve direct dependencies and
  dependency level 17. The full-descent lemma remains a completed direct
  supplier of the later meet/join theorem; all item-17 cross-batch rows are
  verified and the unified ledger was refreshed.
- Checks on current bytes: explicit-path precheck passed (1 item); rendercheck
  passed (1 file); batch content policy passed (9 items, 0 errors/warnings);
  strict item-17 proof contract passed; `manifest-deps` passed (9 items,
  0 normalized, 0 errors). The run dependency-level check found no batch-23
  mismatch. Pair scope was refreshed to `sufficient`; item decision recorded
  `repaired`, confidence 1, with all twelve examined dependencies.
- Open item-specific issue: none.

### 18 — `thm-cg-weak-order-meet-semilattice-and-finite-lattice`

- Claim/conventions: (1) every nonempty subset of either weak order has a meet,
  and bounded nonempty subsets have joins; (2) finite $W$ has maximum $w_0$ and
  both orders are lattices, with empty meet $w_0$ and empty join $1$; (3) for
  every $J\subseteq S$, $W_J$ is finite iff $J$ has a right or left upper bound
  iff its join exists, with value $w_0(J)$ and minimality below every upper
  bound; (4) the rank-two $m(s,t)=\infty$ case has no join and incomparable
  atoms. The orders use the length-additive conventions of item 11.
- Repairs: handled $J=\varnothing$ separately because item 14's join assertion
  is for nonempty subsets; derived $\ell(sw_0(J))=\ell(w_0(J))-1$ from the
  right longest-element length formula, inverse-length symmetry and both
  involutions; made the boundedness converse independent of an assumed finite
  $W_J$; transferred finite maxima and parabolic joins to left order through
  inversion; cited the Coxeter relators and length-zero identity where used;
  recorded that no Axiom of Choice is used, with the finite-recursion source.
- Direct dependencies examined: `def-cg-left-right-weak-order-and-descents`,
  `lem-cg-weak-order-is-a-graded-partial-order`,
  `lem-cg-bounded-weak-order-join-construction`,
  `lem-cg-full-descent-element-characterizes-finite-type`,
  `def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`,
  `thm-cg-finite-parabolic-longest-element-and-opposition`,
  `def-cg-parabolic-quotient-and-two-sided-minima`,
  `lem-hh-dihedral-root-recurrence-and-root-sign`, and
  `def-lattice-distributive-lattice-and-order-ideal`. The item-11 historical
  receipt remains owner-held; this consumer uses its order and universal-bound
  definitions at steps 1.2, 1.3, 2.1 and 4.1, while its poset support is proved
  by item 13. The five external supplier rows are verified.
- Source passages: Björner–Brenti, Theorem 3.2.1 with its complete proof and the
  following bounded-join/finite-lattice paragraph, printed pp. 70–71; Lemma
  3.2.3 with proof, printed pp. 71–72; Figure 3.1, printed p. 66. Reading–Speyer,
  Section 2, arXiv p. 6, was read as finite-case corroboration. The proof does
  not rely on the source's picture for the infinite-dihedral claim.
- Registration: item and manifest agree on ten direct dependencies and level
  18; its contract records exact citations, step inputs and all eight boundary
  cases. Cross-batch input remains 51 item + 2 page rows; this item's five
  external rows are `verified`, and the unified ledger was refreshed.
- Latest item checks: explicit-path precheck passed (1 item), rendercheck passed
  (1 file), strict item-18 proof contract passed (0 errors/warnings), batch
  content policy passed (9 items, 0 errors/warnings), and `manifest-deps`
  passed (9 items, 0 normalized/errors). Source-fetch check reports 3/3
  verified sources. Boundary audit found no template or contradicted
  disposition. Finite-smoke had 0 checks for this contract. Risk report routes
  item 18 as critical (score 17), a review-routing signal, not a verdict. Item
  18 is recorded `repaired`, confidence 1, with all ten examined dependencies;
  pair scope is refreshed to `sufficient`.
- Run-wide checks: dependency-level check found no batch-23 mismatch and six
  mismatches elsewhere (listed below). The full frontier plan check exited 1
  with 17 `undeclared-prereq` findings; one downstream A-page finding is that
  `coxeter-descents-poincare-polynomials-and-growth` consumes this page but does
  not declare it in `requires`. Its owning pair must add the page requirement
  or remove the dependency. The other 16 plan findings concern sibling
  invariant/growth pages and are listed in the plan-gate checkpoint below.
- Batch-wide citation-fidelity reported three quote-not-found candidates in
  two owned B items: `ex-cg-s3-weak-order-meets-and-joins` (`F2` from the
  dihedral supplier and `F11` from the type-A supplier) and
  `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` (`F3` from the
  dihedral supplier). Repair these exact excerpts while authoring those items;
  the item-18 contract had no candidate.

The level-19 infinite-dihedral B item was then authored and checked; see its
checkpoint below. The next dispatch item is the S3 weak-order example.

### 19 — `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` (B)

- Claim/conventions: in the rank-two system $m(s,t)=\infty$, every reduced
  expression is alternating and unique; every right lower interval is the
  finite prefix chain of that expression; the two atoms are incomparable and
  have no upper bound; nonempty subsets of the displayed finite intervals
  have joins/meets at their endpoints; the interval translation $x\mapsto sx$
  identifies $[1,ts]_R$ with $[s,sts]_R$. The empty subset of $[1,sts]_R$ has
  join $1$ by a separate universal-bound argument.
- Repairs: made $s\ne t$ explicit; fixed the literature locator from the
  unrelated Section 1.3 to Section 3.1 and Figure 3.1; separated the empty
  prefix from $a_q,b_q$ (which are defined only for $q\ge1$); showed that equal
  reduced expressions must have equal lengths before comparing their first
  letters; derived the empty join from $\ell(1)=0$ and the weak-order
  definition; limited chain endpoint operations to nonempty subsets; and added
  the lattice definition dependency for the non-lattice conclusion.
- Direct dependencies examined: `def-cg-left-right-weak-order-and-descents`,
  `lem-cg-weak-order-prefix-property-and-left-translation`,
  `thm-cg-weak-order-meet-semilattice-and-finite-lattice`,
  `def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `lem-hh-dihedral-root-recurrence-and-root-sign`, and
  `def-lattice-distributive-lattice-and-order-ideal`. The three batch-2
  external supplier rows are verified; their exact uses are deletion (step
  1.1), the simple length/order facts (steps 1.1, 1.2 and 2.1), and ambient
  reducedness (steps 1.1 and 2.2).
- Source passages: Björner–Brenti, Section 3.1 with Figure 3.1, printed p. 66
  (the infinite-dihedral weak-order zigzag and no common initial letter), and
  Sections 3.1–3.2, printed pp. 66–71 (prefix property and bounded joins).
  The proof itself derives unique expressions from the two-letter deletion
  theorem and the exact infinite order of $st$.
- Registration: item and manifest agree on seven direct dependencies and
  level 19; the proof contract has exact excerpts and step mappings for all
  cited facts and eight boundary cases. Cross-batch input remains 51 item + 2
  page rows; all three external item-19 rows are `verified`, and the unified
  ledger is current.
- Checks on current item bytes: explicit-path precheck passed (1 item),
  rendercheck passed (1 file), strict item-19 contract passed (0 errors/warnings),
  batch content policy passed (9 items, 0 errors/warnings), `manifest-deps`
  passed (9 items, 0 normalized/errors), and source-fetch reports 3/3 sources
  verified. The run dependency-level check found no batch-23 mismatch and six
  out-of-scope mismatches listed above. Item 19 is recorded `repaired`,
  confidence 1, with all seven examined dependencies; pair scope was refreshed
  to `sufficient`.
- Open pair findings: the current batch-wide citation-fidelity pass still has
  two `ex-cg-s3-weak-order-meets-and-joins` quote repairs (`F2`,`F11`) and one
  `cex-cg-inversion-sets-do-not-compute-meets-and-joins` locator item; both are
  assigned items still to author.

### 19 — `ex-cg-s3-weak-order-meets-and-joins` (B)

- Claim/conventions: the type-$A_2$ group is $S_3$ with the six listed lengths;
  the right-order Hasse diagram is the two-chain hexagon; all binary meets and
  joins, empty-set values, and the left-order asymmetry are verified from the
  complete down-set/up-set table. The proof locally computes the signed $A_2$
  root orbit and positive roots, lists all six inversion sets, and checks the
  inversion-inclusion criterion on all 36 ordered pairs.
- Repairs: derived $\cos(\pi/3)=1/2$ from double-angle, supplementary-cosine,
  monotonicity and quarter-turn suppliers, then derived each reflection action
  from the Coxeter form and reflection formula; removed the unsupported
  dihedral-action shortcut. Proved the complete signed root orbit by generator
  invariance and the canonical orbit definition. Added the Coxeter relators
  where used, supplied the empty meet/join arguments from the explicit
  endpoints, removed unused direct dependencies from the item and synchronized
  the manifest, and corrected the BB/Stembridge locators and exact excerpt
  mappings.
- Direct dependencies examined (14): `def-cg-left-right-weak-order-and-descents`,
  `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-weak-order-is-a-graded-partial-order`,
  `thm-cg-weak-order-meet-semilattice-and-finite-lattice`,
  `def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`,
  `thm-cg-root-sign-and-simple-reflection-positivity`,
  `def-cg-geometric-inversion-set`, and four trigonometric suppliers. The five
  current-run cross-batch rows were verified against exact facts and uses;
  at this checkpoint the batch-23 input had 49 item rows (43 verified, 6 open
  for the counterexample consumer) plus 2 verified page rows.
- Sources: Björner–Brenti, §3.1 Definition 3.1.1 and Proposition 3.1.2,
  printed pp. 65–67, and §3.2 Theorem 3.2.1 with proof and the bounded-join
  paragraph, printed pp. 70–71; Stembridge, §1.3, PDF pp. 5–6. The cited
  passages support general weak-order conventions and lattice context; the
  $S_3$ table and $A_2$ root calculations are local. Figure 3.2 is the $S_4$
  diagram and is not cited as an $S_3$ diagram.
- Checks on current item bytes: explicit-path precheck passed; rendercheck
  passed; the selected strict proof contract passed (0 errors/warnings);
  batch content policy passed (9 items, 0 errors/warnings); `manifest-deps`
  passed (9 items, 0 normalized/errors). The run dependency-level check found
  no batch-23 mismatch and five current mismatches outside this pair. Scope is
  refreshed to `sufficient`; the item is recorded `repaired`, confidence 1,
  with all 14 direct dependencies examined. The pair’s final batch-wide checks
  remain for the handoff pass.
- Open item-specific issue: none. The prior S3 citation-fidelity candidates
  (`F2`, `F11`) and the infinite-dihedral `F3` quote candidate are corrected.

### 20 — `cex-cg-inversion-sets-do-not-compute-meets-and-joins` (B)

- Claim preserved: the blanket formulas identifying meet inversion sets with
  intersections and join inversion sets with unions both fail in finite type
  $A_2$. The correct statement says meet inversion sets are greatest among
  those contained in the intersection, while join inversion sets are least
  among those containing the union.
- Proof route: use the completed S3 companion for the six inversion sets and
  the two bound values. The union for $s,t$ and the intersection for $st,ts$
  are each absent from the six-set list, giving explicit non-inversion-set
  witnesses and strict failures. Apply the general inversion-order criterion
  to all lower and upper bounds to prove the corrected containment statement.
  No Choice is used.
- Supplier audit and dependency repair: retained five direct dependencies:
  `def-cg-geometric-inversion-set`, the S3 companion,
  `lem-cg-weak-order-is-a-graded-partial-order`,
  `thm-cg-weak-order-meet-semilattice-and-finite-lattice`, and
  `def-cg-left-right-weak-order-and-descents`. The geometric inversion
  definition's exact use is Fact F1 at steps 1.1, 2.1 and 2.2. Five unused
  direct dependencies (Coxeter presentation, dihedral recurrence, root-prefix
  formula, root-sign theorem, finite-longest theorem) were removed; their
  batch-23 cross-batch rows are marked `removed` with the exact use change.
  The definition supplier row is `verified`. The completed S3 sibling supplies
  the A2-specific group, length, roots, inversion sets and meet/join values.
- Step 3a locator repair: its note correctly found no claim about inversion-set
  intersections after BB Corollary 3.1.4. The text proceeds to Propositions
  3.1.5–3.1.6 and Corollaries 3.1.7–3.1.8; Theorem 3.2.1 proves meets by a
  maximal-length common lower bound without discussing inversion-set
  intersections. The item now cites BB Proposition 3.1.3 and Corollary 3.1.4
  for reflection-set containment, and Theorem 3.2.1 for complete meets; the
  A2 counterexample is explicitly local. Reading–Speyer §2 is cited only for
  the finite reflection-inversion containment convention.
- Registration: item and manifest agree on five direct dependencies and level
  20. Its contract has exact excerpts/uses and all eight boundary cases.
  The Step-3 scope decision is `sufficient`; item decision is `repaired`,
  confidence 1, with all five direct dependencies examined.
- Checks on current item bytes: explicit precheck and rendercheck passed;
  selected strict proof contract passed (0 errors/warnings). The later batch
  citation-fidelity pass found 121 citations across nine items, no missing
  quotes or widening candidates; content policy passed (9 items, 0 errors or
  warnings); `manifest-deps` passed (9 items, 0 normalized/errors); source
  fetch verified 3/3 sources; boundary audit found no template or contradicted
  disposition; finite-smoke ran 0 checks; risk report routes this item as
  critical (score 9), a review-routing signal rather than a verdict.
- Open item-specific issue: none. All five direct suppliers are authored and
  their actual uses are reconciled.

### Page bodies

- A page `weak-order-inversions-and-lattice-operations` now summarizes the
  length-additive conventions, prefix/translation properties, graded orders,
  inversion criterion, meet/join existence, finite-lattice case and parabolic
  join criterion. Its four declared prerequisites are preserved.
- B page `weak-order-inversions-and-lattice-operations-examples` now summarizes
  the completed S3 table, infinite-dihedral obstruction and corrected
  inversion-set containment counterexample. Its sole prerequisite remains the
  A page; no workflow-only scaffold prose remains.

Next: run the final explicit-path gates, refresh and inspect the current
cross-batch ledger, and record the remaining owner-held item-11 obligation at
handoff.

## In-run page-prerequisite inspection

- `parabolic-subgroups-and-double-coset-geometry` (batch 10) and its examples
  companion were read from their current page files and manifest. The A page
  requires the completed HH-11 and canonical-roots pages; its B page is a
  dependency leaf. Its current Step-3b report says all eight items are
  authored, checked and decided `accept`/`repaired`, with no pair-local open
  obligation. The direct definition supplier
  `def-cg-parabolic-quotient-and-two-sided-minima` clause (2) was checked for
  the left/right descent conventions and the $\pm1$ length-change fact used
  in items 11–12.
- `finite-reflection-arrangements-and-spherical-coxeter-complexes` (batch 17)
  and its examples companion were read from their current page files and
  current pair report. The A page's three items are authored and checked; its
  finite-parabolic-longest item is recorded `repaired`. The report records
  the separate B example `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue`
  as owner-escalated for its area computation. That example is homed on the B
  dependency-leaf page and is not an item supplier to this pair. The finite
  longest-element item was audited at item 17 and its length formulas and
  involution were rechecked at item 18; its external rows are verified.
- The current weak-order page frontmatter and batch-23 manifest agree on the
  four A-page requirements: the two in-run pairs above and the published
  chains/antichains and incidence-algebra pages. Both page-level rows now record
  verified current A-page suppliers; item-level supplier rows close only after
  each assigned consumer's exact use has been checked.

## Run-wide check findings outside this pair

`node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
exited 1. It reported no batch-23 mismatch and ten mismatches outside this
assignment; those item metadata were not edited here:

- `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`: 11 vs computed 10.
- `thm-cg-compact-local-cat-one-short-circle-criterion`: 12 vs 11.
- `ex-cg-root-versus-coroot-translation-lattices`: 3 vs 2.
- `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve`: 20 vs 19.
- `ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve`: 21 vs 20.
- `def-cg-recursive-sortable-projection-and-cambrian-congruence`: 28 vs 27.
- `thm-cg-sortable-meet-join-closure-and-cambrian-quotient`: 29 vs 28.
- `thm-cg-sortable-projection-greatest-element-and-interval-fibers`: 30 vs 29.
- `ex-cg-cambrian-quotient-of-s3-and-two-orientations`: 31 vs 30.
- `ex-cg-a3-sortable-subset-and-a-three-element-fiber`: 31 vs 30.

`node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope`
exited 1 with six other pairs needing current scope reviews:
`bipartite-coxeter-elements-and-ordered-root-complexes`,
`crystallographic-root-lattices-and-weyl-group-interfaces`,
`large-spherical-metric-flags-and-the-moussong-girth-theorem`,
`affine-reflections-coroot-translations-and-alcoves`,
`coxeter-descents-poincare-polynomials-and-growth`, and
`davis-cat-zero-geometry-and-finite-subgroup-fixed-points`. The assigned weak-
order scope is current and sufficient.

The unified dependency ledger refresh succeeded. It still contains eight
orphaned `verified` review rows in the batch-19 input for
`lem-cg-ordered-root-complex-is-geometric-simplicial` against the published
suppliers `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-compact-subset-of-a-hausdorff-space-is-closed`,
`thm-metric-hausdorff-separation`, `def-topological-space`,
`def-compact-space`, `def-continuous-map-top`, and
`thm-continuity-characterisations-top`. The batch-19 owner should reconcile
those published-supplier records; none belongs to batch 23.

`node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan`
exited 1 with 21 errors over 64 pages. Thirteen are malformed/duplicate
`undefined` item records attached to `crystallographic-root-lattices-and-weyl-group-interfaces`
and its examples page (7 `[prefix] unknown kind "undefined"` and 6
`[dup-id] undefined`); those page owners need to repair the plan item records.
The other eight are undeclared prerequisite-page edges:

- `affine-reflections-coroot-translations-and-alcoves-examples` omits
  `minkowski-theory-and-number-field-class-groups`.
- `coxeter-descents-poincare-polynomials-and-growth` omits
  `weak-order-inversions-and-lattice-operations`,
  `permutation-statistics-inversions-and-eulerian-numbers`,
  `braided-and-symmetric-monoidal-categories`, and
  `fundamental-trigonometric-identities-examples`.
- `coxeter-descents-poincare-polynomials-and-growth-examples` omits
  `braided-and-symmetric-monoidal-categories`, `formal-power-series-examples`,
  and `weak-order-inversions-and-lattice-operations`.

The batch-25 growth-page owners must add the weak-order A page to the relevant
`requires` closures or remove the corresponding item dependencies. The affine
examples and crystallographic-root-lattice plan fixes belong to their owners.
No batch-23 prerequisite closure was flagged.

## Final current-input rehash and supplier audit

- After re-reading the current item checkpoints, the eight non-owner review
  receipts for items 12–14, 17–19, and 20 no longer matched `itemHash`, because
  their transitive dependency/plan inputs had changed. The assigned item texts
  had not changed. Each current item and its direct dependencies were re-read;
  the receipts were refreshed in dependency order with `record-item`,
  `repaired`, confidence 1, and the exact direct dependency IDs. A fresh
  `itemDecision()` check now closes all eight. Item 11 remains its prior
  owner-held `escalate`; it was not overwritten.
- Rechecked the root-inversion supplier's current proof, including the
  induction using the inversion-set recursion and the root/reflection
  dictionary. The reverse of a reduced word is reduced because reversing any
  word for an inverse preserves its length, and applying this in both
  directions gives `ell(x^{-1})=ell(x)`. The complete relevant source argument
  was checked in Björner–Brenti §4.4, printed pp. 101–105 (especially
  Proposition 4.4.4 and its induction); the source supports inversion counting,
  while the displayed root lists and exchange details are proved locally.
  Exact owned uses are item 13 steps 1.5, 2.2 and 6.1; item 17 step 3.1; and
  the S3 example step 2.3.
- Rechecked the finite-longest supplier's current chamber/root proof and its
  application to standard parabolics. Davis, *The Geometry and Topology of
  Coxeter Groups*, §4.6, printed pp. 51–53 (Lemmas 4.6.1–4.6.2 and proofs),
  and Michel, Proposition 4.6, printed pp. 5–6, were read in full for the
  longest-element properties. The exact uses are item 17 steps 4.1 and 5.1;
  item 18 steps 1.2, 1.3, 2.1 and 3.1.
- The following direct in-run suppliers in other pairs still have stale/open
  current item receipts because their own transitive hashes have not been
  refreshed: `def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`,
  `lem-hh-dihedral-root-recurrence-and-root-sign`,
  `def-cg-canonical-reflection-homomorphism`,
  `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-parabolic-quotient-and-two-sided-minima`,
  `thm-cg-parabolic-intersections-and-coset-factorization`,
  `def-cg-geometric-inversion-set`,
  `thm-cg-root-sign-and-simple-reflection-positivity`,
  `thm-cg-root-length-criterion-and-faithfulness`,
  `thm-cg-root-inversion-formulas-and-strong-exchange`, and
  `thm-cg-finite-parabolic-longest-element-and-opposition`. These items are
  authored; their current proof text and the exact uses in this pair were
  inspected, and no new mathematical defect was found. The actual uses are
  listed in each item's Facts/proof and strict contract; the load-bearing
  mappings above identify the root-inversion and finite-longest steps. Their
  owners must refresh their item decisions before the run-wide Step-3 gate can
  close. This is a receipt-refresh obligation, not a confirmed proof gap.
- Current run status was recomputed from `.autopilot`: it remains in
  `3b-author`, 20/32 pairs covered, with no workers in flight. The pair is not
  yet counted as stage-complete by the engine. The existing stage blockers and
  other-pair work remain owner/engine responsibilities; no autopilot state or
  sibling artifacts were edited here.

## Handoff

- **Completed items (9):** `def-cg-left-right-weak-order-and-descents`,
  `lem-cg-weak-order-prefix-property-and-left-translation`,
  `lem-cg-weak-order-is-a-graded-partial-order`,
  `lem-cg-bounded-weak-order-join-construction`,
  `lem-cg-full-descent-element-characterizes-finite-type`,
  `thm-cg-weak-order-meet-semilattice-and-finite-lattice`,
  `ex-cg-infinite-dihedral-bounded-interval-and-missing-join`,
  `ex-cg-s3-weak-order-meets-and-joins`, and
  `cex-cg-inversion-sets-do-not-compute-meets-and-joins`.
- **Pages authored:** A
  `weak-order-inversions-and-lattice-operations`; B
  `weak-order-inversions-and-lattice-operations-examples`.
- **Added direct suppliers:** four published trigonometric items were added to
  the S3 example so its $A_2$ root constant and root orbit are derived locally:
  `thm-double-angle-and-power-reduction-identities`,
  `thm-cofunction-supplementary-and-reflection-identities`,
  `thm-sine-cosine-signs-monotonicity-and-ranges`, and
  `thm-quarter-turn-values-and-shift-formulas`. No new item IDs were created.
- **Batch checks:** explicit precheck passed for eight proof-bearing items;
  the definition is not applicable. Rendercheck passed for nine items and both
  pages. Proof-layout passed once over nine items and 60 steps with zero
  defects. Strict contracts passed (9/9, no errors or warnings); citation
  fidelity passed (121 citations, no missing quotes or widening candidates);
  content policy passed (9 items, zero errors/warnings); `manifest-deps` passed
  (9 items, zero normalized/errors); source fetch verified 3/3 sources;
  boundary audit found no templates or contradicted dispositions; finite-smoke
  had zero checks; risk report routed all nine as critical, a review-routing
  signal rather than a verdict.
- **Cross-batch ledger:** refreshed after the batch input edits. All 49 item
  rows and 2 page rows are dispositioned: 44 item rows and both page rows are
  verified, and five item rows are marked `removed` because their consumers no
  longer use those suppliers. There are no open batch-23 cross-batch rows.
- **Published concerns:** no new mathematical defect in published content was
  confirmed. The Step 3a citation-locator concern was in the scaffold metadata
  and is corrected; the A2 failure calculations are explicit in the local
  companion example.
- **Open owner-held item decision:**
  `def-cg-left-right-weak-order-and-descents` remains `escalate` by its existing
  receipt. Its `justified_by` supplier
  `lem-cg-weak-order-is-a-graded-partial-order` is now authored and checked;
  the owner must review the uniqueness/antisymmetry support and clear or
  preserve that decision. This pass did not override it.
- **Current item decisions:** items 12–14, 17–19, and 20 now have current
  `repaired` receipts at confidence 1. The direct in-run supplier receipts
  listed in the rehash checkpoint remain stale/open under their respective
  pair owners, so their refresh is still required for the run-wide Step-3 gate.
- **Open out-of-scope gates:** the run-wide dependency-level check still has
  the ten discrepancies above; `validate-plan` has the 21 plan errors above;
  and the run-wide Step-3 scope check lists six other pairs needing current
  scope reviews. The unified ledger also retains eight orphaned batch-19
  records for published suppliers, detailed above. The assigned batch has no
  dependency-level mismatch, no undeclared prerequisite finding and no open
  cross-batch row.
