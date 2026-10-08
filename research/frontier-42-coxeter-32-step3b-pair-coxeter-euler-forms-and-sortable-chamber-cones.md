# Step 3b — A/B pair coxeter-euler-forms-and-sortable-chamber-cones

Run `frontier-42-coxeter-32`, role `alpha-high`, label
`step3b-pair-coxeter-euler-forms-and-sortable-chamber-cones-72010295e9203b90`.
Batch 29. Owned A page: `coxeter-euler-forms-and-sortable-chamber-cones`; owned B page:
`coxeter-euler-forms-and-sortable-chamber-cones-examples`.

## Owned items (18) in assigned dependency order

A page: `def-cg-coxeter-oriented-euler-form-and-c-sorting-word` (6),
`lem-cg-positive-span-of-transported-simple-roots` (13),
`lem-cg-coxeter-word-transport-and-form-independence` (14),
`lem-cg-finite-dihedral-subsystems-and-canonical-roots` (16),
`lem-cg-finite-rank-two-inversion-set-recognition` (17),
`lem-cg-greedy-sorting-word-and-rank-two-alignment` (17),
`lem-cg-weak-parabolic-projection-and-cover-joins` (19),
`def-cg-sortable-element-skip-roots-and-cone` (20),
`lem-cg-uniform-omega-positive-and-aligned-sortability` (21),
`def-cg-initial-letter-sortable-projection` (22),
`lem-cg-sortable-recursion-output-and-initial-choice-independence` (23),
`lem-cg-sortable-skips-basis-and-cover-decomposition` (24),
`lem-cg-sortable-cone-criterion-and-projection-monotonicity` (25),
`thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions` (26).

B page: `cex-cg-rank-two-inversion-set-violating-closure` (18),
`ex-cg-euler-and-skew-form-in-a3` (18),
`ex-cg-source-sink-move-and-sign-convention` (19),
`ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3` (26).

## Open obligations at entry

1. Nine item files absent at entry and to be authored here:
   `ex-cg-source-sink-move-and-sign-convention`,
   `def-cg-sortable-element-skip-roots-and-cone`,
   `lem-cg-uniform-omega-positive-and-aligned-sortability`,
   `def-cg-initial-letter-sortable-projection`,
   `lem-cg-sortable-recursion-output-and-initial-choice-independence`,
   `lem-cg-sortable-skips-basis-and-cover-decomposition`,
   `lem-cg-sortable-cone-criterion-and-projection-monotonicity`,
   `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`,
   `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`.
2. Contracts to add for those nine items in
   `research/frontier-42-coxeter-32-batch-29.proof-contracts.json`.
3. Page registration for the nine items on the two owned library pages.
4. Cross-batch dependency rows (consumer side) recheck after authoring; supplier
   batches 17 (finite-reflection-arrangements-and-spherical-coxeter-complexes)
   and 23 (weak-order-inversions-and-lattice-operations) remain in-flight
   suppliers — their exact consumed clauses are recorded per item below.

## Audit notes and repairs

### Checkpoint 1 — entry fixes (2026-10-08)

- `ex-cg-source-sink-move-and-sign-convention` (B, level 19): stale internal
  reference "step 2.2" in step 4.1 corrected to "step 3.1"; a two-line display
  joined to one source line (rendercheck). precheck: pass (direct); rendercheck:
  clean. Math spot-checked earlier: E_{c'}, omega_{c'} and the nine basis-pair
  conjugation checks recomputed by hand; matrix in basis (e_{s2},e_{s3},e_{s1}).
- `def-cg-sortable-element-skip-roots-and-cone` (A, level 20): one display
  joined to one source line; precheck: not-applicable (definition);
  rendercheck: clean.
- `lem-cg-uniform-omega-positive-and-aligned-sortability` (A, level 21):
  adopted the canonical layered renumbering produced by precheck, then repaired
  by hand (all repairs independently checked against Reading--Speyer,
  arXiv:0803.2722v3, Theorem 4.3 proof pp. 24-25 and Proposition 3.11):
  (a) step 1.8 induction claim now covers clause (2) as well as clause (1)
      (the proof appeals to sortability at smaller (rank,length) in 2.4, 2.5,
      7.1); the base case is checked for both clauses;
  (b) step 2.4: inserted the proof that a simple reflection s lying in a
      generalized rank-two parabolic W' is a canonical generator of W' (e_s in
      Phi_P^+; the two extreme rays are distinct and lie in V_+; a strictly
      interior e_s would force both extreme roots onto the ray of e_s);
  (c) step 2.6: canonical generators of W' = A W_J A^{-1} now justified via
      RS Theorem 2.7 + Proposition 2.8 (new literature Fact F19) after checking
      A is the minimal representative of the right coset A W_J (ell(A a_{i+1})
      = ell(A)+1 by prefix; ell(A s) > ell(A) from s notin S(A) and deletion);
  (d) step 3.3 zero-case rewritten: sum zero => omega_c(beta_{t_{i+1}},
      beta_{r_{i+1}}) = omega_c(beta_{t_{i+1}}, beta_{r_i}) = 0 (normal-component
      computation), the restriction of omega_c to W' is then zero (F4 endpoint
      case via the canonical generators t_{i+1}, r_i), and c-alignment of w then
      forces N(w^{-1}) cap Phi_P^+ to be empty or a singleton, contradicting
      that it contains the two distinct roots beta_{t_{i+1}}, beta_{r_{i+1}}.
      (The earlier text's appeal to "the combination beta_{r_i} = e_s + sum ..."
      silently used a nesting property of the F5 coefficients that the F5
      Statement does not export; that appeal is removed.)
  (e) prose step-ranges in 5.1 and 8.1 garbled by the mechanical renumbering
      fixed to the true ranges; tags untouched.
  Facts F10 (unit norm), F17 (extreme rays/sector, clause (1) equivalence) made
  faithful to their supplier statements; F19 added (literature, RS Thm 2.7 /
  Prop 2.8, p. 11). precheck: pass (induction); rendercheck: clean.
  Verification note: clause (1)'s (i)=>(ii) direction (steps 2.3, 3.1) matches
  RS Prop 3.11's proof; clause (2)'s reverse direction (2.4-2.6, 3.3, 4.2, 7.1)
  now matches RS Theorem 4.3's proof with the two local repairs above.

Next action: author `def-cg-initial-letter-sortable-projection` (level 22) from
the batch-29 manifest, then the five consumers in order.

### Checkpoint 2 — replacement completion (2026-10-08)

This is the second (DeepSeek replacement) writer continuation recorded in
`research/frontier-42-coxeter-32-owner-authoring-direction.md`; the native
author's FAILED/timeout receipt and attribution are preserved and are not
reclassified by this record. The nine original 29-ID carriers that were absent
at the native timeout were authored here in the assigned dependency order:
`def-cg-sortable-element-skip-roots-and-cone`,
`lem-cg-uniform-omega-positive-and-aligned-sortability`,
`def-cg-initial-letter-sortable-projection`,
`lem-cg-sortable-recursion-output-and-initial-choice-independence`,
`lem-cg-sortable-skips-basis-and-cover-decomposition`,
`lem-cg-sortable-cone-criterion-and-projection-monotonicity`,
`thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`,
`ex-cg-source-sink-move-and-sign-convention`,
`ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`, together with the
remaining item-local repairs, contract regeneration, page registration and
decisions listed below.

Repairs and record changes in this continuation:

1. `ex-cg-source-sink-move-and-sign-convention`: the fact that had cited the
   ai-generated `ex-cg-euler-and-skew-form-in-a3` now cites
   `def-cg-coxeter-oriented-euler-form-and-c-sorting-word` (2) and
   `def-cg-real-coxeter-form-and-reflection` (2),(3), with every matrix entry
   derived explicitly; the stale internal step reference was corrected; the
   ai-generated item was removed from deps. `dependency_level` recomputed
   19 -> 18 in item metadata and manifest (dependency-level check now clean for
   this pair).
2. `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`: F1 was split so that
   the type-A3 form entries cite `def-cg-real-coxeter-form-and-reflection` (2),
   the reflection action and `rho(s)=r_{e_s}` cite that definition (3) and
   `def-cg-canonical-reflection-homomorphism` (1) (new F11), the relators
   `s^2`, `(st)^{m(s,t)}` cite `def-hh-coxeter-matrix-word-group-and-length`
   (new F10), and the adjoint identity cites
   `lem-cg-reflection-representation-descends-and-root-norms` (2) (new F9);
   `ex-cg-euler-and-skew-form-in-a3` and an unused
   `lem-cg-finite-dihedral-subsystems-and-canonical-roots` dep were removed,
   and the four declaring sources were added to deps (frontmatter + manifest).
   F5 now cites the parabolic theorem's clauses (1),(4) rather than (1),(2).
3. `lem-cg-sortable-cone-criterion-and-projection-monotonicity`: F6 was
   rewritten to cite `lem-cg-reflection-representation-descends-and-root-norms`
   (2), the definition that actually proves `B`-preservation (its previous
   sources only define the terms); deps updated accordingly.
4. `lem-cg-sortable-recursion-output-and-initial-choice-independence`: F9 now
   quotes only the stated clauses of
   `thm-cg-parabolic-intersections-and-coset-factorization` (1),(2); the
   unstated `V_{J cap I}=V_J cap V_I` clause was dropped.
5. `lem-cg-sortable-skips-basis-and-cover-decomposition`: F12 now cites the
   correct clause (1) of `def-cg-parabolic-quotient-and-two-sided-minima` and
   only stated theorem clauses; the misplaced clause number (2) was fixed.
6. `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`: F6 was made
   precise (cover-root dictionary and cover-join formulas), step 1.5 now cites
   it inline, and `lem-cg-weak-parabolic-projection-and-cover-joins` was added
   to deps (frontmatter + manifest).
7. The batch manifest's per-item `deps`/`justified_by`/`dependency_level` were
   synchronised to the item frontmatter for the seven items whose rows had
   drifted (`lem-cg-uniform-...`, `lem-cg-sortable-recursion-...`,
   `lem-cg-sortable-skips-...`, `lem-cg-sortable-cone-...`,
   `thm-cg-sortable-skip-basis-...`, `ex-cg-source-sink-...`,
   `ex-cg-skips-...`), preserving sibling rows.
8. The four ai-generated B items received the required
   `generation: {role: ...}` frontmatter blocks (content policy now 0/0 on this
   batch).
9. Proof contracts for the nine items were regenerated against the current
   supplier sections: every fact-to-source citation now carries an exact quote
   from the source's Statement/Definition text and the exact list of consuming
   proof steps; derivation entries carry each step's claim and its actual
   fact/step inputs; the boundary worksheets of the uniform lemma, the skip
   definition, the projection definition, the recursion lemma, the skips
   lemma, the cone-criterion lemma and the final theorem were rewritten to
   reference existing steps only.
10. Page registration (appended; siblings preserved): the seven authorship
    items were added to the A-page `items:` list, and the two new examples were
    added to the B page, which now records its four examples under `examples:`
    following the sibling convention.

## Item checkpoints (final state)

Format: item (level) — claim/conventions — source locators — dependencies —
decision — open items.

1. `def-cg-coxeter-oriented-euler-form-and-c-sorting-word` (6) — Coxeter
   words, K=2B, triangular `E_c`, `omega_c = E_c - E_c^T`, `c^inf` with
   dividers, admissible position sets, lexicographically first sorting word,
   explicit abstentions. RS sections 2.6-2.7 pp. 16-18 and 3.1 pp. 18-19;
   Reading section 2 pp. 5-6; BB Ch. 1. 4 deps. Decision: accept (current).
   No local gap; supplier receipts await owner recertification.
2. `lem-cg-positive-span-of-transported-simple-roots` (13) —
   `rho(u)e_s = e_s + sum c_l beta_{t_l}`, `c_l >= 0`, unit coefficient of
   `e_s`, positivity. RS Lemma 2.6 p. 10. 8 deps. Decision: repaired
   (current). No local gap.
3. `lem-cg-coxeter-word-transport-and-form-independence` (14) — reducedness,
   left/right descent formulas, commutation connectivity, word-independence of
   `E_c`, `omega_c`, prefix-root basis. RS 2.6 p. 16, 3.1 pp. 18-19; Reading
   section 2 p. 5; BB 1.7/3.3. 15 deps. Decision: repaired (current). No local
   gap.
4. `lem-cg-finite-dihedral-subsystems-and-canonical-roots` (16) — root planes,
   parabolic stabilizers, two extreme rays, alternating angular list,
   canonical generators, reversal. RS 2.4 Theorem 2.7, Propositions 2.9, 2.11.
   12 deps including the batch-17 finite-reflection suppliers. Decision:
   repaired (current). No local gap.
5. `lem-cg-finite-rank-two-inversion-set-recognition` (17) — rank-two
   initial/final-segment recognition. RS Lemma 2.17 p. 14 and Lemma 2.25
   pp. 15-16. Decision: escalate (pre-existing escalation receipt, owner
   resolves). The receipt lists unaudited direct suppliers with consuming
   steps, e.g. `lem-cg-finite-dihedral-subsystems-and-canonical-roots`
   (steps 1.1, 1.3, 2.1, 2.2, 3.1, 3.2, 6.1) and
   `thm-cg-finite-type-positive-definite-criterion` (1.1, 3.1).
6. `lem-cg-greedy-sorting-word-and-rank-two-alignment` (17) — greedy scan,
   block-sequence independence, conjugation/restriction identities,
   finite-type rank-two orientation, alignment. RS 2.6-2.7 pp. 16-17, Lemma
   3.3 and Lemma 3.7 pp. 18-19. 16 deps. Decision: repaired (current;
   includes the previously authorised strict-shortening correction in Proof
   5.1). No local gap.
7. `cex-cg-rank-two-inversion-set-violating-closure` (18) — A2 counterexample
   to closure-based recognition. RS Lemma 2.17 p. 14. Decision: escalate
   (pre-existing; the generation-block edit makes the existing receipt
   owner-held). `generation.role: counterexample` added.
8. `ex-cg-euler-and-skew-form-in-a3` (18) — reference-flagged A3 form
   computations. RS Example 3.6 p. 19. Decision: escalate (pre-existing;
   generation-block edit makes the receipt owner-held). `generation.role:
   example` added. Note: its Statement provenance is ai-generated, so no other
   item may cite it (the two pairs' citations were re-routed accordingly).
9. `lem-cg-weak-parabolic-projection-and-cover-joins` (19) — prefix
   `N(w_J^-1)=N(w^-1) cap Phi_{J,+}`, largest lift, meet/join preservation,
   cover-join lemmas. RS 2.5 Proposition 2.20, Lemmas 2.22-2.23 pp. 14-15.
   Decision: escalate (pre-existing). Sole blocking supplier according to the
   receipt: `def-cg-left-right-weak-order-and-descents`, consumed at Proof
   3.1, 3.2, 4.2, 5.1, 6.1 and 7.1; the ten other suppliers have current
   accept/repaired receipts.
10. `ex-cg-source-sink-move-and-sign-convention` (18) — conjugation by an
    initial letter with exact 3x3 transport of `E_c`, `omega_c` and the sign
    convention. RS Lemma 3.3 p. 18, Lemmas 3.7-3.8 pp. 19-20; Reading section
    2 p. 6; BB 1.7. 6 deps. Decision: repaired (current; the ai-generated
    citation was removed and the dependency level recomputed to 18). No local
    gap.
11. `def-cg-sortable-element-skip-roots-and-cone` (20) — sorting word, skips,
    forced/unforced alternatives, skip roots and recursion, `Cone_c`,
    abstentions. RS 2.7 pp. 17-18, section 5 pp. 25-31, section 6 p. 32.
    Decision: escalate (new). Blocking supplier:
    `lem-cg-weak-parabolic-projection-and-cover-joins`, consumed by the
    definition's `W_{<s>}`-prefix construction (no numbered steps);
    that supplier is escalated because `def-cg-left-right-weak-order-and-
    descents` is owner-held.
12. `lem-cg-uniform-omega-positive-and-aligned-sortability` (21) —
    (1) `omega_c`-nonnegativity iff sortable; (2) sortable = aligned;
    (3) parabolic restriction. RS Proposition 3.11 pp. 20-21, Lemma 3.12
    p. 21, Proposition 3.13 pp. 21-22, Theorem 4.3 pp. 24-25. Decision:
    escalate (new). Blocking suppliers with consuming steps:
    `def-cg-left-right-weak-order-and-descents` (1.4, 1.9),
    `lem-cg-finite-rank-two-inversion-set-recognition` (2.4, 6.1, 7.2),
    `lem-cg-weak-parabolic-projection-and-cover-joins` (2.5, 7.2). The
    zero-weight case is handled locally by alignment plus two distinct roots
    (no nesting assumption).
13. `def-cg-initial-letter-sortable-projection` (22) — three-branch recursion
    with lexicographic (rank, length) measure and abstentions. RS section 6
    p. 31; Reading section 3 p. 8. Decision: escalate (new). Blocking
    supplier: `lem-cg-weak-parabolic-projection-and-cover-joins`, consumed by
    the definition's prefix construction (no numbered steps).
14. `lem-cg-sortable-recursion-output-and-initial-choice-independence` (23) —
    clauses (1)-(6): well-definedness and initial-choice independence,
    sortability and idempotence of `pi_c`, descent detection, parabolic
    restriction, prefix identity. RS Lemma 6.6 pp. 32-33, Propositions 6.7-6.10
    pp. 33-34. Decision: escalate (new). Blocking suppliers:
    `def-cg-left-right-weak-order-and-descents` (step 1.1),
    `lem-cg-weak-parabolic-projection-and-cover-joins` (2.1, 2.2, 2.4, 2.5,
    3.1).
15. `lem-cg-sortable-skips-basis-and-cover-decomposition` (24) — skip-root
    basis, choice independence, forced/unforced signs, cover decomposition.
    RS Lemmas 5.6-5.11 and Propositions 5.1-5.4 pp. 26-31, Lemma 3.12 p. 21.
    Decision: escalate (new). Blocking suppliers:
    `lem-cg-finite-rank-two-inversion-set-recognition` (6.3, 8.1),
    `lem-cg-weak-parabolic-projection-and-cover-joins` (5.2, 6.3, 8.1).
16. `lem-cg-sortable-cone-criterion-and-projection-monotonicity` (25) —
    cone criterion for comparable pairs, monotonicity of `pi_c`, unique
    greatest sortable element below `w` with the full criterion, parabolic
    compatibility. RS Lemma 6.12 pp. 35-36, Theorem 6.1 pp. 36-37, Corollary
    6.2 and Theorem 6.3 p. 37, Proposition 6.13 p. 37. Decision: escalate
    (new). Blocking suppliers: `def-cg-left-right-weak-order-and-descents`
    (1.2, 1.3, 3.1, 3.3, 4.1), `lem-cg-weak-parabolic-projection-and-cover-
    joins` (1.2, 1.3, 2.3, 3.1, 3.4, 6.1). Dependency order preserved:
    comparable criterion (clause 1) before monotonicity (clause 2) before
    greatest-element/full criterion (clause 3).
17. `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions` (26) —
    assembly: projection well-defined, skip basis and cover roots, chamber
    unions of cones, parabolic compatibility and abstentions. RS sections 5-7.
    Decision: escalate (new). Blocking supplier:
    `lem-cg-weak-parabolic-projection-and-cover-joins` (step 1.5); the
    declared `def-cg-left-right-weak-order-and-descents` (right weak order)
    is not cited by any numbered step and is also owner-held.
18. `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3` (26) — all skips of
    `v=s_1s_2`, skip roots, forced/unforced alternatives, the unique cover
    reflection, and `vC` subset `Cone_c(v)`. RS Propositions 5.1-5.2 and
    Example 5.5 pp. 26-28, Theorem 6.3 p. 32. Decision: escalate (new).
    Blocking supplier: `lem-cg-weak-parabolic-projection-and-cover-joins`
    (step 6.1, cover-root dictionary).

## Checks actually run (final state)

- `precheck` on all 18 item paths: 15 pass, 3 not-applicable (the three
  definitions), 0 failed.
- `rendercheck` on all 18 item paths: 0 errors, 0 warnings.
- `proof-layout` on all 18 item paths (one command): 18 items, 186 steps,
  0 defects.
- `proof-contract` on
  `research/frontier-42-coxeter-32-batch-29.proof-contracts.json --strict`:
  ok true, 0 errors, 0 warnings, 18/18 items checked.
- `content-policy` on `research/frontier-42-coxeter-32-batch-29.pages.json`
  (full post-authoring mode): 0 errors, 0 warnings.
- `item-dependency-levels check --run frontier-42-coxeter-32`: all 18 owned
  items consistent; two pre-existing mismatches remain in non-owned items
  (`thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` 11 vs 10;
  `thm-cg-compact-local-cat-one-short-circle-criterion` 12 vs 11).
- `validate-plan research/plan-spec.json --run frontier-42-coxeter-32`: no
  error or warning in this pair; three `undeclared-prereq` errors remain in
  non-owned pages (affine-coxeter-diagrams examples; noncrossing-partition
  lattice pages) and the recorded page-level `redundant-prereq` observation
  for this A page is unchanged (owner-recorded in the batch-29 notes).
- Decisions: 6 current accept/repaired receipts
  (`def-cg-coxeter-oriented-euler-form-and-c-sorting-word` accept;
  `lem-cg-positive-span-of-transported-simple-roots`,
  `lem-cg-coxeter-word-transport-and-form-independence`,
  `lem-cg-finite-dihedral-subsystems-and-canonical-roots`,
  `lem-cg-greedy-sorting-word-and-rank-two-alignment`,
  `ex-cg-source-sink-move-and-sign-convention` repaired) and 12 escalations
  (8 new: `def-cg-sortable-element-skip-roots-and-cone`,
  `lem-cg-uniform-omega-positive-and-aligned-sortability`,
  `def-cg-initial-letter-sortable-projection`,
  `lem-cg-sortable-recursion-output-and-initial-choice-independence`,
  `lem-cg-sortable-skips-basis-and-cover-decomposition`,
  `lem-cg-sortable-cone-criterion-and-projection-monotonicity`,
  `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`,
  `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`; 4 pre-existing
  escalations left to the owner: `lem-cg-finite-rank-two-inversion-set-
  recognition`, `cex-cg-rank-two-inversion-set-violating-closure`,
  `ex-cg-euler-and-skew-form-in-a3`,
  `lem-cg-weak-parabolic-projection-and-cover-joins`). No `--owner` flag and
  no audit/judge stamp was used anywhere.

## Added / removed supplier edges

- Added to `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`:
  `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `def-hh-coxeter-matrix-word-group-and-length`,
  `lem-cg-weak-parabolic-projection-and-cover-joins`; removed
  `ex-cg-euler-and-skew-form-in-a3` (ai-generated statement) and the unused
  `lem-cg-finite-dihedral-subsystems-and-canonical-roots`.
- Added to `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`:
  `lem-cg-weak-parabolic-projection-and-cover-joins`.
- Added to `lem-cg-sortable-cone-criterion-and-projection-monotonicity`:
  `lem-cg-reflection-representation-descends-and-root-norms` (and the
  earlier-added `def-cg-real-coxeter-form-and-reflection` was withdrawn once
  F6 was re-pointed at the definition that actually proves preservation).
- Added earlier in this pair and retained: `def-cg-coxeter-oriented-euler-form-
  and-c-sorting-word` to the uniform and skips items;
  `thm-cg-root-sign-and-simple-reflection-positivity` and
  `thm-cg-parabolic-intersections-and-coset-factorization` to the recursion
  item; `lem-cg-weak-parabolic-projection-and-cover-joins` to the skips item;
  `def-cg-canonical-reflection-homomorphism` to the cone item.
- Removed from `ex-cg-source-sink-move-and-sign-convention`:
  `ex-cg-euler-and-skew-form-in-a3`.

## Shared plan / prose amendments for Step 4

- The A page `library/coxeter-groups/coxeter-euler-forms-and-sortable-
  chamber-cones.md` now lists all 14 items; its section prose already carried
  the placeholder paragraphs for the seven newly authored items, so no prose
  rewrite was made (to be reviewed in Step 4 against the final items).
- The B page now lists its four examples under `examples:` with short sections
  for the two newly authored examples.
- `research/plan-spec.json` order/id/title/companion/requires for orders
  1774/1775 are unchanged and remain consistent; its item lists stay empty by
  design, so the splice in Step 4 must take the item lists from
  `research/frontier-42-coxeter-32-batch-29.pages.json`.
- Recorded (unchanged) plan-level observation: the A page's `requires`
  contains `finite-reflection-arrangements-and-spherical-coxeter-complexes`
  redundantly (already reached through
  `weak-order-inversions-and-lattice-operations`); the field is design-fixed
  and is not scaffold-editable.

## Published concerns for the owner / serial reconciler

1. `def-cg-left-right-weak-order-and-descents` (batch 23) — confirmed open,
   confidence 1: its current decision is the recorded escalation whose stated
   blocker was that its justifier
   `lem-cg-weak-order-is-a-graded-partial-order` "has not yet been authored";
   that justifier now carries a current repaired decision, so the blocker
   should be re-adjudicated by the owner. This single owner-held decision is
   the transitive blocker for five of this pair's escalations (via
   `lem-cg-weak-parabolic-projection-and-cover-joins`) and for
   `lem-cg-uniform-...`, `lem-cg-sortable-recursion-...`,
   `lem-cg-sortable-cone-...` and `thm-cg-sortable-skip-basis-...` directly.
   No repair is proposed beyond owner resolution and a recheck of the listed
   consuming steps.
2. Non-owned dependency-level mismatches (confirmed, mechanical):
   `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` declares 11 vs
   computed 10 and `thm-cg-compact-local-cat-one-short-circle-criterion`
   declares 12 vs computed 11. These belong to sibling pairs; left untouched.
3. Non-owned plan errors (confirmed, mechanical): three `undeclared-prereq`
   errors in `affine-coxeter-diagrams-and-semidefinite-classification-examples`
   and the two `noncrossing-partition-lattices-and-kreweras-complements` pages
   reported by `validate-plan --run`; left to their owners.
4. Cross-batch ledger: all 126 recorded consumer-side rows for this pair
   remain in `research/frontier-42-coxeter-32-batch-29.cross-batch-
   dependencies.json` as 61 verified / 50 open / 15 removed; the 50 open rows
   correspond to this pair's 12 escalations and await supplier completion and
   the serial reconciler. No ledger edit was made by this writer.
5. No published-content defect was found in this pair's own original items
   beyond the local repairs recorded above; the two ai-generated B items
   (`ex-cg-euler-and-skew-form-in-a3`, `cex-cg-rank-two-inversion-set-
   violating-closure`) carry ai-generated Statements by design and are cited
   by no item anywhere in this pair after the re-routing (suspicion: none;
   confirmed by the strict contract gate).

## Handoff

Completed: all 18 assigned original 29-ID items exist and are fully authored
with complete local arguments; nine item files were created in this
continuation, the others repaired or re-verified; all 18 appear in the batch
manifest with synced deps/levels; the proof-contract file covers all 18 with
0 errors/0 warnings under `--strict`; both owned pages register their items;
the batch content policy is clean; per-item decisions are recorded as above.

Open obligations: (i) the 12 escalated items require the owner to resolve the
supplier decisions, chiefly `def-cg-left-right-weak-order-and-descents`, and
the consuming steps are listed per item above; (ii) the batch-17 (finite
reflection) and batch-23 (weak order) supplier receipts are stale relative to
the current closure hashes (plan-spec churn), so Root's stable
dependency-ordered recertification pass should re-record them before the
Step-3 gate; (iii) source-32's held consumers of the seven new supplier
interfaces can be re-examined against the completed items; (iv) the
`requires`-redundancy observation above remains for the owner; (v) no
publication, push, gate, receipt, control or certification action is claimed
or taken.
