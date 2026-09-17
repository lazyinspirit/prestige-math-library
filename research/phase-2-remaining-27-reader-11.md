# phase-2-remaining-27 reader-11

Independent Step 5a read of batch `11` (run `phase-2-remaining-27`), served as
`reader-11`. The batch was in flight at start (`.autopilot/phase-2-remaining-27/state.json`:
stage `5a-read`, `5a-read:reader-11`, `covers: ["11"]`, `endedAt: null`).

## Scope opened

- Control: `AGENTS.md`, `CLAUDE.md`, `briefs/reader.md`,
  `research/phase-2-remaining-27-batch-11.pages.json`,
  `research/phase-2-remaining-27-batch-11.coverage.json`,
  `research/phase-2-remaining-27-batch-11.proof-contracts.json`,
  `research/phase-2-remaining-27-batch-11.notes.md`,
  `research/phase-2-remaining-27-author-check-11.json`, and the run state files.
- Assigned pages (read in full):
  `library/differential-geometry/cartan-subalgebras-and-root-space-decompositions.md`,
  `library/differential-geometry/cartan-subalgebras-and-root-space-decompositions-examples.md`,
  `library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification.md`,
  `library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification-examples.md`.
- Assigned items: every one of the 115 items listed in the batch manifest —
  45 on `cartan-subalgebras-and-root-space-decompositions`, 10 on its examples
  page, 50 on `root-systems-dynkin-diagrams-and-cartan-killing-classification`,
  10 on its examples page. All titles, statements, facts, constructions,
  proofs/refutations, witnesses, computations, citations and the four page
  summaries were checked against their hypotheses and against the cited targets.
- Page-level examples carried by the batch's proof-contract scope:
  `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`,
  `ex-classical-root-systems-in-euclidean-coordinates`,
  `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`.
- Published dependencies opened at their interface statements to check the
  batch's uses: `thm-additive-jordan-chevalley-decomposition`,
  `thm-engels-theorem`, `thm-lies-theorem`,
  `prop-nilpotent-lie-algebras-are-solvable`,
  `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`,
  `thm-cartans-semisimplicity-criterion`,
  `prop-trace-forms-are-symmetric-and-invariant`,
  `def-killing-form-of-a-finite-dimensional-lie-algebra`,
  `thm-primary-decomposition-for-an-endomorphism`,
  `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
  `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces`,
  `thm-tree-characterisations`,
  `ex-classical-simple-lie-algebras-and-their-killing-forms`,
  `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups`.
- Source use: the batch cites Knapp, *Lie Groups Beyond an Introduction*,
  2nd ed., Chapter II, and Etingof, MIT 18.745 Lectures 19–24, at named
  numbered results. The four substantive reconstructions listed under Edits
  (weight-space stability, openness of the conjugacy classes, rank-two
  exhaustiveness, realisation of `E_7`/`E_6`) are standard and were re-derived
  locally; no external source read was needed to settle them.

## Edits (all in-flight items of this batch)

1. `lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra` —
   step 1.2 broke off mid-sentence at "The operator identity" and carried no
   justification tag; its own contract entry had `inputs: ["given"]`. Restored
   the missing operator identity
   `(ad_H - λ)^n[Y,X] = Σ_k C(n,k)[(ad_H)^{n-k}Y,(ad_H-λ)^kX]` with its
   induction proof and the two-exponent argument (`m` kills `Y`, `N = dim g`
   kills `X`), so the claimed `ad_h`-stability of `V_{λ,H}` is now proved.
2. `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras` — the
   proof used `t` and `l` before introducing them (old step 1.2 preceded the
   choice of `t`), and the step that was to introduce them ended at
   "simultaneously diagonalisable, so". Rewrote the proof so that a maximal
   toral `t` and `l = g_0 = C_g(t)` with `g = ⊕ g_λ` are set up first, then
   `x_s, x_n ∈ l` and `x_s ∈ t`, then `l` nilpotent, abelian, `B|_l`
   non-degenerate, all elements of `l` semisimple, `l = t`, and
   `N_g(t) = t`. Steps are numbered in the precheck's dependency-depth form
   (1.1, 2.1, 3.1, 3.2, 4.1, 5.1, 6.1, 7.1, 8.1). The proof now runs for an
   arbitrary **maximal toral** subalgebra, which is what the statement asserts.
3. `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate` —
   step 1.3 broke off at "the class of `y` contains" and the openness of the
   classes, on which the final step depends, was never proved. Completed 1.3 as
   the equivalence-relation definition and added a new step 7.1: for
   `x ∈ g^{sr}` with `h_x = C_g(x)` (a Cartan subalgebra by step 6.1), `x` is a
   regular element of `h_x`, so `U_{h_x} = Ad(G)·(h_x)_reg` is open by step 2.2
   and equals the class of `x`; the old final step is renumbered 8.1 and cites
   the new step.
4. `thm-rank-two-root-system-classification` — step 6.1 excluded the surplus
   candidates with false claims about what the descent (d) produces (for
   instance "the pairs `(n,n)` with `n ≥ 2` … (d) applied to `α_2` … produces
   `(n,0)`", which the descent cannot give, and the analogous A_2 chain). The
   enumeration of candidates was also incomplete in the `(-3,-1)` case
   (`(5,4)`, `(7,4)`, … satisfy (a)–(b)). Replaced it with a correct finite
   verification: a least-height positive root outside `K` is a sum of two
   elements of `K`; all sums are then either in `K`, or violate (a)–(c), or
   descend by (d) to such a sum, or are a multiple ≥ 2 of the root
   `α_1+α_2` (resp. `2α_1+α_2`) and are excluded by reducedness. Every sum of
   two elements of `K` is listed and disposed of in each of the five cases.
5. `thm-existence-of-each-classified-root-system` — two defects repaired.
   (a) Step 1.2 computed `2(β,2e_i)/(2e_i,2e_i) = β_i/2`; the value is `β_i`,
   and only that gives integrality. (b) Step 2.1 claimed that the `E_8` simple
   roots `α_1,…,α_7` lie in `V_7 = (e_7+e_8)^⊥` and that `α_1,…,α_6` give the
   `E_6` matrix; but `α_2 = e_7+e_8` is not in `V_7`, so the claim is false.
   Replaced it with a correct argument: `Φ_7 = Φ_8 ∩ V_7` and
   `Φ_6 = Φ_7 ∩ (e_6+e_8)^⊥` are reduced crystallographic systems of ranks 7
   and 6 with 126 and 72 roots, all of squared length 2, hence with
   simply-laced diagrams; the reducible alternatives are bounded by the
   explicit `A`/`D` counts (≤ 42 roots in rank 6, ≤ 74 in rank 7), so
   `Φ_6 ≅ E_6` and `Φ_7 ≅ E_7`.
6. `thm-universal-property-of-the-free-lie-algebra` — removed an authoring
   corruption: the item contained a literal TAB + `o` in place of `\to`
   inside `$g:L(V)\to\mathfrak g$` (byte codes 9, 111), which breaks the
   renderer; and repaired the garbled fact clause "it carries `[x,y]` is sent
   to `xy-yx`" to "it carries `[x,y]` to `xy-yx`".
7. `def-reduced-crystallographic-euclidean-root-system` — removed a
   self-citation: the definition referred to itself as the source of its own
   crystallographic axiom.

## Verification of the edits

- `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` for each changed
  item: `unchanged` (idempotent, no reflow needed).
- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each changed
  item: `PASS` (direct). Full batch:
  `node tools/tsx-run.mjs tools/precheck.mts <84 proof-bearing batch items>`
  → `84 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-11.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 118/118 item(s) checked`, after regenerating the
  affected entries: citation `uses` recomputed from the current step brackets,
  step entries rebuilt for the new step lists, and the `nonempty-choice`
  boundary evidence of `thm-cartan-subalgebras-exist-…` updated (it named the
  removed step `1.2`).
- `node tools/rendercheck.mjs` on the changed items → `OK — 6 file(s)` (and
  `OK` for the two further single-item edits).
- No `verification.judge` record existed in any batch-11 item
  (`grep -c '^verification:'` = 0 over the 115 items), so none had to be
  removed.

## Defects found but not edited

1. `items/lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching.md`,
   step 3.1 (assertion 5 of the statement). The proof of the shape
   restriction for diagrams with a multiple edge is a hand-off: "If the graph
   contained a multiple edge together with a trivalent vertex, the subdiagram
   consisting of that edge and one arm would be one of the affine
   configurations whose explicit nonnegative label vector has
   `Σx² ≤ Σ √(a_ij a_ji) x_i x_j`, contradicting [L2] … Likewise two double
   edges in a path admit the label vector `1,1,2,…,2,1,1` violating [L2]."
   No affine configurations or label vectors are listed, and no reduction of
   an arbitrary multiple-edge shape to one of them is given (the one displayed
   label vector `2,1,1,1,1` is the affine `B̃₄`/`D̃₄` star). Assertion 5 —
   which `thm-classification-of-irreducible-reduced-crystallographic-root-systems`
   step 1.3 uses to exclude all but `B_n, C_n, F_4, G_2` — is therefore
   unproved here. The statement is true and the gap is closable by the
   standard affine-diagram check, so I recorded it instead of inventing a
   replacement table.
2. `items/thm-serre-presentation-theorem.md`, step 1.1 (with the same pattern
   in step 5.1). Step 1.1 proves neither freeness of `ñ_±` nor linear
   independence of the `h_i`: it says this "is the source's
   triangular-decomposition lemma, proved by representing `g̃` on
   `U = C⟨f_i⟩ ⊗ C[h'_i]` by the displayed formulas for the action of
   `h_i, f_i, e_i`" — but the item contains no such displayed formulas
   anywhere, the source is not an in-library item, and steps 2.1–6.1 rest on
   that triangular decomposition. Step 5.1 likewise asserts an invariant form
   "as in the source's normalized form" without carrying out the extension.
   The statements used downstream are standard and true; the item's proof is
   not self-contained at these two points.
3. Observation, not edited (contract hygiene): the statements of
   `prop-dimension-formula-from-roots`, `prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra`,
   `prop-centralizer-dimension-from-vanishing-roots`,
   `cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra`,
   `prop-brackets-of-root-spaces`, `cor-opposite-root-spaces-pair-nondegenerately`,
   `prop-killing-form-orthogonality-of-root-spaces`,
   `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`,
   `lem-killing-length-of-a-root-is-nonzero`, `cor-cartan-integers-are-integral`,
   `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root`,
   `thm-root-reflections-preserve-the-root-set`, `def-root-and-root-space-relative-to-a-cartan-subalgebra`,
   `def-killing-dual-vector-of-a-root`, `def-coroot-of-a-lie-algebra-root`,
   `def-root-reflection-from-a-coroot` and `thm-root-string-property` do not
   declare the Axiom of Choice while their facts/proofs cite suppliers that do
   (`thm-root-space-decomposition-…`, and for the dimension formula
   `thm-cartan-subalgebras-…-are-conjugate`). The batch manifest records
   `axiom_base: ZFC` for each of them, so no false choice-free claim is made,
   but rule 11's propagation clause is not visibly satisfied. A batch-wide
   AC-contract pass is outside what I could verify item-by-item here.
4. Observation, not edited: `library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification-examples.md`
   says the examples compute "the Weyl groups of types A, B, D", but the page's
   own example list contains only `ex-weyl-group-of-a-n-is-the-symmetric-group`;
   the B/D example `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`
   is listed on the companion A page. I judge this a summary-scope wording
   issue, not a mathematical error, since the pair's example set does contain
   the example.
5. Manifest drift, report-only: the batch manifest rows for the repaired items
   still record the pre-repair proof strategies (e.g. the old "maximal
   dimension" phrasing and the pre-repair conjugate/openness picture). The
   dispatch authorizes item and page repair, not batch-manifest rewrites, so
   I left `research/phase-2-remaining-27-batch-11.pages.json` untouched.

## Published-dependency notes

- The batch's own remark `rem-additive-jordan-chevalley-is-supplied-by-x-two`
  reports that the published `thm-additive-jordan-chevalley-decomposition`
  assumes AC without declaring `def-axiom-of-choice`. That metadata defect is
  confirmed on disk (the published item's statement says "Assume the Axiom of
  Choice", its `deps` omit the AC item) and is already recorded in
  `research/phase-2-remaining-27-batch-13.notes.md`; it is not re-edited here.
- All other published interfaces I opened state exactly what the batch uses,
  including the trace-form invariance identity, Lie's theorem (common
  eigenvector form, from which the batch's triangular form follows), Engel's
  equivalence, Cartan's criterion, the primary decomposition, the classical
  Killing forms and the `SU(2)`/`SO(3)` example.

## Page verdicts

- `cartan-subalgebras-and-root-space-decompositions`: sufficient on the
  current bytes after the three repairs; all 45 items, including the six false
  statements, are mathematically sound.
- `cartan-subalgebras-and-root-space-decompositions-examples`: sufficient on
  the current bytes; all 10 items verified (witnesses, Killing-form
  computations and root strings recomputed).
- `root-systems-dynkin-diagrams-and-cartan-killing-classification`: sufficient
  except the two proof-completeness gaps reported above (lemma step 3.1 and
  Serre theorem step 1.1); statements, constructions, the rank-two
  classification, the diagram list, the duality proposition and the classical
  and exceptional dimension counts are sound.
- `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`:
  sufficient on the current bytes; all 10 items verified.

## Blockers

- None to reading. The two un-repaired proof gaps need a standard but
  nontrivial local argument (the affine label-vector check for assertion 5;
  the Etingof triangular-decomposition construction with its display
  formulas), so they are routed to the 5b lead / owner rather than guessed at.

## Coverage note

I read all 115 manifest items and the four assigned pages in full, plus the
three page-level examples in the batch contract scope, and verified the
published interfaces the batch uses at their statement level. I did not fetch
or re-read the external Knapp/Etingof PDFs; the four reconstructions I supplied
were derived locally. I did not audit published dependency closures beyond the
interface claims used in this batch, and I did not carry out the batch-wide AC
declaration propagation noted in item 3 above.
