# Step 3b authoring report — pair `balanced-triples-and-global-crystal-bases`

- Run: `frontier-44-special-representation-examples-28`
- Dispatch: `step3b-pair-balanced-triples-and-global-crystal-bases-f54d3eb3554af735`
- A page: `balanced-triples-and-global-crystal-bases` (27 items)
- B page: `balanced-triples-and-global-crystal-bases-examples` (4 items)
- Batch: 8. Role: alpha-high item author (not owner). Date entered: 2026-10-10.

## Owned IDs and order (dependency level, then page order, then ID)

4. lem-lusztig-and-kashiwara-normalizations-match-by-root-color
7. def-the-bar-lattice-and-integral-lattice-of-a-based-module
8. def-balanced-triple-and-globalization-map
8. def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules
8. def-root-height-completion-for-weightwise-quasi-r-intertwiners
9. def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves
9. lem-balanced-triple-linear-algebra-over-the-projective-line
9. lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis
10. lem-negative-half-reversal-preserves-integral-and-crystal-lattices
10. lem-string-ideal-decomposition-of-the-integral-lattices
10. lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree
11. lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite
11. lem-string-ideal-triples-are-balanced
12. thm-the-highest-weight-crystal-triple-is-balanced
12. thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique
13. def-lower-global-basis-of-a-quantum-highest-weight-module
13. lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations
14. thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis
15. def-upper-global-basis-by-the-contravariant-form
15. thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module
15. thm-integral-triangular-decomposition-for-the-lusztig-form
15. cex-bar-invariance-and-mod-q-congruence-without-balancedness (B)
16. prop-global-bases-specialize-to-integral-weight-bases
16. thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type
16. thm-quantum-highest-weight-modules-deform-the-classical-weight-character
16. thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible
17. lem-quasi-r-divided-power-integrality-on-based-lattices
17. ex-canonical-global-basis-normalization-in-symmetric-type (B)
17. ex-lower-and-upper-global-bases-in-a-small-highest-weight-module (B)
18. thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules
19. ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module (B)

## Source/scaffold inputs read at entry

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md` (Step 3/4 obligations), batch-8
  manifest, batch-8 notes, batch-8 coverage, Step 3a pair report and review
  receipt, owner authoring direction (`...-owner-authoring-direction.md`,
  quantum proof-route and final quantum interface sections), owner
  `...-owner-quantum-global-repair.md` including the "current31" correction.
- Direct in-run supplier scaffolds read from their batch manifests when a
  consumer needs them: batches 5, 6, 7 (files may be unauthored; the scaffold
  Statement is the provisional interface).

## Status at handoff

All 31 assigned items (27 on the A page `balanced-triples-and-global-crystal-bases`,
4 on the B page `balanced-triples-and-global-crystal-bases-examples`) are
authored under `items/`, both library pages are written under
`library/special-topics-in-representation-theory/`, and the both-pair proof
contract file
`research/frontier-44-special-representation-examples-28-batch-8.proof-contracts.json`
exists with one validated entry per item. Every item was written in dependency
order (level 4 to level 19, ties by page order), and the manifest dependency
lists were extended in place (16 items) to the exact fact-level suppliers used
by the completed proofs; the computed dependency levels are unchanged and the
repository dependency-level check reports no error for this pair. No new item
IDs were added to the pair, no sibling batch file was edited, and no owner
decision was overridden.

## Item decisions

All 31 items were recorded with `tools/step3-decisions.mjs record-item` as
`escalate` with defect type `["dependency"]`, on one-sentence reasons naming
the then-unauthored suppliers. All dependency blockers were subsequently
closed by the sibling pairs, but the receipts predate the final dependency-list
and text edits, and a non-owner cannot re-record an item whose previous
decision is `escalate`; the engine therefore reports each item as awaiting an
owner decision. The authored content and every Step-3 gate for this pair are
complete, so the owner resolution is a re-record against the now-complete
supplier set.

## Supplier reconciliation (final)

During the authoring window every in-run supplier was finished by the sibling
pairs. At handoff **every item in the transitive closure of all 31 assigned
items exists on disk** (closure check: 0 missing):

- `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`:
  statement inspected; the rank-one values
  `(F^{(a)},F^{(b)})=delta_{ab}/[a]_{q_i^2}!`, symmetry, graded nondegeneracy and
  the localization bound agree with every consuming fact of this pair
  (`lem-lusztig-and-kashiwara-normalizations-match-by-root-color` [F4],
  `lem-integral-crystal-residues-...` [F5],
  `lem-negative-half-reversal-...` [F1],
  `lem-the-drinfeld-hopf-pairing-is-nondegenerate-...` [F1],
  `ex-canonical-global-basis-normalization-...` [L2]). No consumer asserted
  A-valuedness of the form on the divided-power lattice, so the supplier's
  explicit non-A-valuedness there does not conflict.
- `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`:
  statement inspected; the Serre-quotient identification of the simple
  integrable module is exactly the input of the three consuming facts
  (`thm-the-highest-weight-crystal-triple-is-balanced` [F7] steps 1.1 and 3.2,
  `thm-global-basis-projection-...` [F4] step 1.2,
  `thm-quantum-highest-weight-modules-deform-...` [F3] step 2.2). The
  consumers' kernel formula
  `ker pi_lambda = sum_i U_q^- F_i^{lambda(h_i)+1}` is the PBW standard
  consequence recorded through the Serre-quotient supplier and is a Steps 5-7
  audit target.
- `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators`:
  positive toral quotient `k[H_i]` matches the uses in
  `prop-global-bases-specialize-...` [F3] step 2.1 and
  `thm-quantum-highest-weight-modules-deform-...` [F2] step 2.1.
- `prop-integrable-quantum-highest-weight-modules-are-semisimple` and
  `prop-specialization-at-q-one-recovers-the-classical-enveloping-relations`:
  authored; the proof contract validates their exact cited excerpts; consumers
  are `prop-global-bases-specialize-...` [F3] step 2.1 and
  `thm-quantum-highest-weight-modules-deform-...` [F2] step 2.1.
- Also finished during the window and inspected at statement level:
  `lem-unmodified-integral-torus-has-a-quantum-binomial-basis` and
  `lem-local-q-one-deformation-proves-integrable-highest-weight-universality`.

All 31 items nevertheless keep their `escalate` receipts: a non-owner cannot
re-record an escalated item, and the owner resolution is now a re-record
against the completed suppliers.

## Checks actually run (final, this handoff)

- Explicit-path precheck, all 31 items: 24 `pass`, 7 `not-applicable` (the
  seven definitions); no `repair`/`fail`.
- `tools/rendercheck.mjs` on all 31 items and both pages: OK (no wikilink in
  math, no nested delimiters, all KaTeX and frontmatter parses; the
  `\mathbb Z[[q]]` occurrences were rewritten as `\mathbb Z[\![q]\!]` to avoid
  the wikilink tokenizer, and the two `\iota(...)` applications in
  `def-drinfeld-hopf-pairing-...` were rewritten to satisfy the
  `notation-iota-applied` policy).
- `tools/proof-layout.mjs` on all 31 changed item paths in one batched
  command: 31 items, 153 steps, 0 defects.
- `tools/proof-contract.mjs research/...-batch-8.proof-contracts.json
  --strict`: **0 errors, 0 warnings, 31/31 item contracts validated**, with
  exact source quotes for every fact-level citation (including the suppliers
  finished during the window).
- `tools/content-policy.mjs research/...-batch-8.pages.json` (post-authoring
  mode): **0 errors, 0 warnings** for all 31 scoped items. The pre-authoring
  `--manifest-only` mode additionally reports 29 `batch-item-already-exists`
  findings, which is its intended future-batch containment question; it
  reports no dependency, provenance or notation error.
- Transitive closure check for all 31 items: 0 missing dependencies.
- `tools/item-dependency-levels.mjs check --run ...`: this pair contributes no
  error; the run-wide check currently fails on two other pages
  (`ex-projective-perverse-decomposition-for-projective-space-to-a-point` and
  `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`,
  level 24 vs computed 26) outside this dispatch.
- `tools/validate-plan.mjs research/plan-spec.json --run ...`: no error names
  this pair; the run-wide check reports 7 errors on other pages, and our page
  appears only in `redundant-prereq` notes (its three declared `requires` are
  mutually reachable in the plan graph).
- `tools/prosecheck.mjs` on all 31 items and both pages: OK, no positional
  claim contradicts the specification.
- `tools/fwdcheck.mjs --items-file ...`: OK; selected item/page and
  prerequisite forward-cycle checks passed.
- `tools/extcheck.mjs --items-file ...`: 31 items, 0 recorded-not-proved.
- `tools/depsource.mjs --run ... --items-file ...`: OK, 0 unresolved,
  consumer coverage 31/31.
- `tools/depcheck.mjs --items-file ...`: 2 errors, both `b-leaf-content`
  findings in *prerequisite* sibling items, not in this pair's items; exact
  diagnosis under Published concerns.
- `tools/dispatch-author-artifacts.mjs`: 35/35 required artifacts present.
- `tools/step3-decisions.mjs check --run ... --phase final`: all 31 items are
  present with their recorded `escalate` receipts; the engine asks for owner
  action because the inputs changed after each receipt was written.

## Pre-splice plan mismatches for Step 4

`research/plan-spec.json` carries only the two transferred contracts on this
page, `thm-integral-triangular-decomposition-for-the-lusztig-form` and
`thm-quantum-highest-weight-modules-deform-the-classical-weight-character`,
and no items at all for the examples page. Compared with the authored
manifests the plan entry for
`thm-integral-triangular-decomposition-for-the-lusztig-form` lacks
`def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves`, and
the plan entry for
`thm-quantum-highest-weight-modules-deform-the-classical-weight-character`
lacks `def-lower-global-basis-of-a-quantum-highest-weight-module`; the other 29
items exist only in the run manifest. The plan-spec was not edited.

## Published concerns

No confirmed defect in published content was found during this authoring. Two
items to carry into Steps 5-7 as independent-check targets, both verified
locally at the time of writing but not independently audited: the two coproduct
factorizations and the cocycle of
`lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations`
(checked by hand at degree $\alpha_i$ and $2\alpha_i$ in rank one, including
the middle toral factors), and the induction bookkeeping of
`thm-the-highest-weight-crystal-triple-is-balanced` (whose rank-one string
recursion was verified numerically at $q=3/2$ for $n\le4$). Both are
audit-pending, not confirmed defects.

Cross-pair finding surfaced by `depcheck` through the prerequisite closure of
this page's `prop-global-bases-specialize-to-integral-weight-bases`: the
sibling items
`lem-local-q-one-deformation-proves-integrable-highest-weight-universality`
and `lem-rational-local-quantum-halves-and-torus-specialize-at-q-one` each
depend on `ex-localisation-of-a-pid-at-a-prime`, an example that currently
lives only on the B page `valuation-rings-and-discrete-valuation-rings-examples`.
This is a load-bearing A-page -> B-page leaf-example dependency of the
`b-leaf-content` class; it is a shared-ledger concern for the serial
reconciler, with remedy either an A-page supplier with the same statement or a
complete local argument in the two sibling items. It does not affect the
mathematical content of this pair, and it was not repaired here because
sibling content is outside this dispatch.

## Open obligations

1. Owner resolution of the 31 recorded escalations against the now-complete
   supplier set (re-record with the appropriate current decision; the
   dependency defect no longer exists).
2. Steps 5-7 independent mathematical audit of all 31 items and both pages,
   with attention to the two audit targets listed under Published concerns.
3. Pre-splice plan-spec reconciliation for Step 4 (see the mismatch section).
4. Two out-of-pair engine findings encountered while running the gates, not
   owned by this dispatch: the `item-dependency-levels` mismatch on
   `ex-projective-perverse-decomposition-for-projective-space-to-a-point` and
   `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`,
   and the seven `validate-plan` errors on other pages.

## Checkpoint: quasi-R normalization conventions (verified locally)

Verified by explicit finite-rank computer algebra in the rank-one quantum algebra
(relations $KEK^{-1}=q^2E$, $KF=q^{-2}FK$, $[E,F]=(K-K^{-1})/(q-q^{-1})$) and by
reading Lacabanne arXiv:1807.00770v2 §1.5–1.7 in the original PDF (page images)
and Brundan arXiv:math/0509700v2 §3:

- Library coproduct $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$,
  $\Delta F_i=F_i\otimes1+K_i\otimes F_i$; $\psi$: $q\mapsto q^{-1}$, $E_i,F_i$
  fixed, $K_h\mapsto K_h^{-1}$; $\bar\Delta(u)=(\psi\otimes\psi)\Delta(\psi(u))$
  satisfies $\bar\Delta(E_i)=E_i\otimes K_i+1\otimes E_i$,
  $\bar\Delta(F_i)=F_i\otimes1+K_i^{-1}\otimes F_i$.
- The $D$-coevaluation family $\Theta=\sum_\nu\Theta_\nu$ satisfies
  $\Delta(u)\Theta=\Theta\bar\Delta(u)$ if and only if
  $\Theta_{\nu}=\sum x_a\otimes y^a$ over $D$-dual homogeneous bases
  (the coefficient is $1/D(E_i^{(n)},F_i^{(n)})$ in rank one), and it is
  equivalently characterized by the commutator recursions
  $[1\otimes E_i,\Theta_\nu]=\Theta_{\nu-\alpha_i}(E_i\otimes K_i)
  -(E_i\otimes K_i^{-1})\Theta_{\nu-\alpha_i}$ and
  $[F_i\otimes1,\Theta_\nu]=\Theta_{\nu-\alpha_i}(K_i^{-1}\otimes F_i)
  -(K_i\otimes F_i)\Theta_{\nu-\alpha_i}$.
- Rank one: $\Theta_{n\alpha_i}=(q_i-q_i^{-1})^n[n]_{q_i^2}!\,E_i^{(n)}\otimes
  F_i^{(n)}$ with $[n]_{q_i^2}!=\prod_{r=1}^n(1+q_i^2+\cdots+q_i^{2(r-1)})$
  $=q_i^{n(n-1)/2}[n]_{q_i}!$ (symmetric $q$-numbers), and $\Theta_{\alpha_i}=(q_i-q_i^{-1})E_i\otimes F_i$.
  (Numerically verified for $n\le4$ at $q=3/2$: coefficients
  $6/5,325/144,216125/13824,\dots$; the closed form matched exactly.)
- Half form: $B_K(F_i^{(n)},F_i^{(n)})=q_i^{-n(n-1)/2}/[n]_{q_i}!
  =1/[n]_{q_i^2}!$ (geometric-sum factorial); $B_L=C_\nu B_K$,
  $C_\nu=\prod_i(1-q_i^2)^{-\nu_i}$; rank one
  $B_L(F_i^{(n)},F_i^{(n)})=\prod_{r=1}^n(1-q_i^{2r})^{-1}$.
- Drinfeld pairing $D(x,y)=d_\nu^{-1}B_K(\iota x,y)$, $d_\nu=\prod_i(q_i-q_i^{-1})^{\nu_i}$:
  $D(E_i,F_j)=\delta_{ij}/(q_i-q_i^{-1})$,
  $D(E_i^{(n)},F_i^{(n)})=q_i^{-n(n-1)/2}/([n]_{q_i}!(q_i-q_i^{-1})^n)$.
- Source-normalization arithmetic: $(-1)^{\mathrm{ht}\,\nu}\prod v_i^{\nu_i}
  C_\nu^{-1}=d_\nu$ exactly (per color
  $(-q_i^{-1}(1-q_i^2))^{\nu_i}=(q_i-q_i^{-1})^{\nu_i}$).

## Per-item checkpoints

Supplier mentions below describe the state at the moment each item was
authored; all of those suppliers are on disk at handoff (see the supplier
reconciliation section). Each block records: item id [kind, level]; the claim actually authored; the
load-bearing suppliers; the decision; and the check status. All items were
renderchecked; precheck status is noted only where it is not `pass`.

1. `lem-lusztig-and-kashiwara-normalizations-match-by-root-color` [lemma, 4]:
   semilinear parameter transport $v=q^{-1}$ identifying presentations,
   coproducts up to flip and $B_L=C_\nu B_K$; depends on the normalized
   half form and the two skew-derivation/bar items; escalated [dependency];
   precheck pass.
2. `def-the-bar-lattice-and-integral-lattice-of-a-based-module` [definition, 7]:
   bar lattice $L^-=\psi(L)$, integral lattices and balanced intersection;
   definition, precheck n/a.
3. `def-balanced-triple-and-globalization-map` [definition, 8]: balanced-triple
   isomorphism criterion and two-chart notation; definition, n/a.
4. `def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules`
   [definition, 8]: $L_{\mathbb Z}=M_A\cap L$, residue injection, module and
   half integral lattices; cites the (then missing) integrable-module and
   grand-loop suppliers; n/a.
5. `def-root-height-completion-for-weightwise-quasi-r-intertwiners`
   [definition, 8]: diagonal root-height completion $\widehat C$, finite-support
   action; n/a.
6. `def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves`
   [definition, 8]: normalized pairing $D$ with generator and divided-power
   values; cites the missing half-form supplier; n/a.
7. `lem-balanced-triple-linear-algebra-over-the-projective-line`
   [lemma, 9]: the integral chart-extension criteria (1)-(3) with exact
   residue sequences; precheck pass; F2/A1 citation tags added at the step
   that uses them.
8. `lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis`
   [lemma, 9]: $L_{\mathbb Z}/qL_{\mathbb Z}=\bigoplus_b\mathbb Zb$, norm-one
   characterization, localization-valued pairing; cites the half-form
   supplier; precheck pass.
9. `lem-negative-half-reversal-preserves-integral-and-crystal-lattices`
   [lemma, 10]: the anti-involution $\star$ preserving integral and crystal
   lattices with signed residue permutation; precheck pass.
10. `lem-string-ideal-decomposition-of-the-integral-lattices` [lemma, 10]:
    integral projector, $I_{(i,n)}^A=U_A^-\cap F_i^nU_q^-$ decompositions and
    the boundary generation identity; precheck pass.
11. `lem-the-drinfeld-hopf-pairing-is-nondegenerate-in-each-root-degree`
    [lemma, 10]: graded perfectness with divided-power values; precheck pass.
12. `lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite`
    [lemma, 11]: $\Theta_\nu$ basis independence and the uniform tail bound;
    precheck pass.
13. `lem-string-ideal-triples-are-balanced` [lemma, 11]: descent induction
    balancing every $I_{(i,n)}^A,J_{(i,n)}^A$ with adapted bases and exact
    top-string transition; precheck pass (relabelled and KaTeX-fixed).
14. `thm-the-highest-weight-crystal-triple-is-balanced` [theorem, 12]: the
    simultaneous height induction producing the balanced triples, lower global
    bases, string-ideal decompositions, based projection rule and saturation;
    cites the missing integrable-module supplier; precheck pass; proof-layout 0
    defects.
15. `thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique`
    [theorem, 12]: uniqueness and recursions of $\Theta$, rank-one coefficient;
    precheck pass.
16. `def-lower-global-basis-of-a-quantum-highest-weight-module`
    [definition, 13]: $G(b)$ as the inverse integral globalization;
    n/a.
17. `lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations`
    [lemma, 13]: $\Theta^{-1}=\overline\Theta$, the two coproduct
    factorizations, the cocycle and the bar-coproduct counterpart; precheck
    pass; rank-one degrees $\alpha_i,2\alpha_i$ checked by hand.
18. `thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis`
    [theorem, 14]: existence, bar invariance and uniqueness of the lower global
    family with adapted ideals; precheck pass.
19. `def-upper-global-basis-by-the-contravariant-form` [definition, 15]:
    restricted graded dual, dual charts, upper bar and adjoint operators, with
    existence deferred to item 26; cites the missing half-form supplier; n/a.
20. `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`
    [theorem, 15]: based quotient and kernel
    $\sum_i\sum_{s>\lambda(h_i)}U_A^-F_i^{(s)}$ via reversal; cites the
    missing integrable-module supplier; precheck pass.
21. `thm-integral-triangular-decomposition-for-the-lusztig-form`
    [theorem, 15, transferred contract]: $U_A^-\otimes U_A^0\otimes U_A^+\cong U_A$,
    freeness, toral basis and component ranks (AC only in the PBW-rank
    supplier); precheck pass.
22. `cex-bar-invariance-and-mod-q-congruence-without-balancedness`
    [counterexample, 15, B page]: the mixed lattice missing $qv$ and the
    rank-three trivial-module nonuniqueness witness; precheck pass (`construct`,
    `discharge-construct`); restructured to `Statement refuted` +
    `Counterexample` for proof-layout 0 defects.
23. `prop-global-bases-specialize-to-integral-weight-bases` [proposition, 16]:
    free-basis base change for every unital $A\to S$, the $q=1$ classical
    fibre, chart lattices and the root-of-unity factorial boundary; cites the
    two missing $q=1$ suppliers; precheck pass.
24. `thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type`
    [theorem, 16]: signed set $\pm G_\infty$, positive recursion and quotient
    bases under the exact transport; precheck pass.
25. `thm-quantum-highest-weight-modules-deform-the-classical-weight-character`
    [theorem, 16, transferred contract]: finite free weight lattices, the
    $q=1$ classical fibre and Weyl-Kac character; cites the missing
    integrable-module and $q=1$ suppliers; precheck pass.
26. `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible`
    [theorem, 16]: restricted graded perfect duality, dual charts, upper bar
    and the exact weighted adjunctions; precheck pass.
27. `lem-quasi-r-divided-power-integrality-on-based-lattices`
    [lemma, 17]: integral action in the highest-first, lowest-second,
    finite-type and $C_{\mathrm{high}}/C_{\mathrm{low}}$ cases, with the
    affine counterexample showing the unrestricted failure; precheck pass.
28. `ex-canonical-global-basis-normalization-in-symmetric-type` [example, 17, B]:
    rank-one normalizations, $A_2$ mixed-degree Gram matrix and inverse-Gram
    duals; precheck pass.
29. `ex-lower-and-upper-global-bases-in-a-small-highest-weight-module`
    [example, 17, B]: rank-one norms $d_{m,n}$, $m=1$ coincidence and the
    $m=2$ proper containment with quotient $A/(1+q^2)$; precheck pass.
30. `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`
    [theorem, 18]: the field tensor bar, parenthesization independence, the
    triangular correction and the admissible integral cases with exclusions;
    precheck pass.
31. `ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module`
    [example, 19, B]: the rank-one balanced triple, $\Theta=1+(q-q^{-1})E\otimes F$,
    the corrected tensor global basis and the nonbalanced mixed lattice;
    precheck pass.
