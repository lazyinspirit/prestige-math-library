# Step 3b dispatch report — `real-forms-and-real-semisimple-lie-algebras`

Run `phase-2-remaining-27`, batch 13, role alpha-high, dispatch
`step3b-pair-real-forms-and-real-semisimple-lie-algebras-f3f520be9f0c112a`.
A page `real-forms-and-real-semisimple-lie-algebras`, B page
`real-forms-and-real-semisimple-lie-algebras-examples`.

## Outcome

**Incomplete dispatch with three completed repairs and one owner escalation.**
22 of 63 manifest items are authored on disk (all 22 pass `precheck` and
`rendercheck`); 29 A items (manifest #23-#51) and all 12 B items are unwritten.
No item decision was recorded: the batch proof-contract file contains no entry
for this pair, so every receipt would certify more than exists. The shared
batch file `research/phase-2-remaining-27-batch-13.pages.json` and the
moment-maps pair were not modified. The checkpoint
`research/phase-2-remaining-27-step3b-pair-real-forms-and-real-semisimple-lie-algebras.md`
carries the resume state.

## Completed repairs (the three items the operator direction named)

| ID | Was | Now |
|---|---|---|
| `thm-conjugacy-of-compact-real-forms` (A8) | step 3.2's finite-iteration termination unjustified | full proof by the Knapp Cor 6.19-6.20 route: realification, `B_R = 2 Re B`, `g_R` semisimple, conjugations as Cartan involutions of `g_R`, polar normalisation of `tau_2 tau_1` with `log` a derivation and hence inner by `thm-every-derivation-...`, then the commuting-involution argument |
| `thm-existence-of-a-cartan-involution` (A12) | step 2.1 a sketch | full proof: `tau` is a Cartan involution of `g_R` (Prop 6.14 computation), Knapp Thm 6.16 normalisation of `sigma` and `tau`, restriction to `g_0 = g^sigma`, positivity of `(B_0)_{theta_0} = (1/2) B_psi` |
| `thm-global-cartan-decomposition-...` (A16) | steps 2.1, 3.1 sketches | full proof: K closed, Lie K = k_0, auxiliary group T, operator argument `Ad(g)*Ad(g) = e^{ad X}` with `X in p_0`, `G = T exp(p_0)`, uniqueness, the differential of the polar map computed with the left-trivialised derivative of exp, `T` connected and `T = K`, compactness of T |

The three repairs changed only the assigned items' own files; the compact real
form construction of `thm-existence-of-a-compact-real-form` (A7) was kept and
re-verified as instructed. Six stray `1 checked, 1 failing` tool-output lines
appended by the first dispatch were removed as a formatting defect.

## Also authored (no review pass - Step-3b creations)

A13 `thm-conjugacy-of-cartan-involutions`; A17
`cor-maximal-compact-subgroups-exist-and-are-conjugate-...`; A18
`def-riemannian-symmetric-pair-of-noncompact-type`; A19
`prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k`;
A20 `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space`;
A21 `def-maximal-split-abelian-subspace-and-real-rank`; A22
`thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k`. All statements keep
the manifest claims; A17's statement now makes explicit which half (existence
and maximality) is proved and which half (conjugacy) is escalated.

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts` on the 22 owned item paths:
  **14 checked, 0 failing** (the other eight are definitions with no proof
  body).
- `node tools/rendercheck.mjs` on the same 22 paths: **OK** (22 files; no
  wikilink-in-math, no multiline display, all math parses, all frontmatter
  parses). Six `wikilink-in-math` defects in A19 were found and repaired by
  rewriting the nested Lie brackets with `\lbrack\lbrack ... \rbrack`.
- `node tools/depcheck.mjs` (repo-wide): **OK** - no cycles, all references
  resolve, no draft items on published pages. The two remaining
  `cited-not-in-deps` errors are in other batches' items, not in this pair.
- NOT run, and why: strict `proof-contract` (the batch contract has no entry
  for this pair), `content-policy`, `manifest-deps`,
  `coverage-checklist`, `validate-plan`, `fwdcheck`/`extcheck`, and
  `step3-decisions record-item`. The inventory of the pair is incomplete, so
  these gates would either fail on missing files or certify an incomplete pair.

## Local suppliers added

None. A22 needed the regular-element lemma (Knapp Lemma 6.50) and the
simultaneous-diagonalisability input; both are proved inside A22 from the
published `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`
and `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces`,
so no new supplier item was added.

## Escalations (exact IDs and proposed remedies)

1. **A17 `cor-maximal-compact-subgroups-exist-and-are-conjugate-...`, conjugacy
   half only.** Evidence: Knapp Chapter VI records the theorem in the
   Historical Notes p. 766 as deliberately omitted ("having as yet no fully
   Lie-theoretic proof") with a pointer to Borel [1998], pp. 128-133, which is
   not among the declared sources; the local route requires the convexity of
   the displacement function on `G/K`, whose geometry this page builds only in
   A18-A20, after A17. Proposed remedies: (a) move A17 after A20 in the
   manifest and add A19/A20 to its dependencies, (b) authorise Borel 1998 as a
   source and let the pair carry the local convexity proof, or (c) record the
   imported theorem with explicit owner sign-off. No decision receipt was
   recorded for A17.
2. **Scope: A23-A51 and B1-B12 unwritten.** The dispatch budget was consumed by
   the audit of the 63-item scaffold, the three repaired proofs and the
   verification pass; the remaining 41 items need a follow-up dispatch. The
   relevant Knapp and Etingof locators are recorded in the checkpoint.
3. **A25 `prop-restricted-root-systems-may-be-nonreduced`, authoring risk.**
   The clean criterion `2 lambda in Sigma` iff `[g_lambda,g_lambda] != 0`
   (from Prop 6.40(b)) is available, but the explicit `su(p,q)` computation
   exhibiting `2 lambda` was not re-derived in this dispatch; it must be
   proved before A25 is closed, not sketched.

## Step-3a obligations: status

| Obligation | Status |
|---|---|
| Satake locators for A40/A41 extended to Knapp VI §11 + §12 Problem 7 (p. 427) and coverage row | NOT applied (items unwritten); carried in the checkpoint |
| A17 conjugacy half via the local displacement route or the Knapp Notes pointer | escalated; see above |
| A44 cites `prop-classical-types-correspond-to-sl-so-and-sp` with the batch-11 replacements | NOT applied (item unwritten); carried in the checkpoint |

## Published defects for the canonical ledger

No newly confirmed published defect was found in this dispatch's reading. The
carry-over list recorded by the batch-13 Step-1 notes (the Jordan-Chevalley AC
metadata omission and the three published Cartan/root-system interfaces
superseded by the planned batch-11 replacements) was not re-adjudicated here
and remains for the serial reconciler. The serial ledger
`research/published-consumer-supplier-ledger.md` was not touched.

## Uncertainty statement

- A17's conjugacy half is not proved and is reported as such; the item's own
  text states the reduction and the missing input. No claim of completion was
  made for it.
- A19's curvature formula follows the library's conventions
  (`R(X,Y)Z = grad_X grad_Y Z - grad_Y grad_X Z - grad_{[X,Y]} Z`,
  `Rm(u,v,v,u) > 0` on a positively curved round sphere). The sign of the
  symmetric-space formula was checked numerically on the explicit
  `sl(2,R)`/`K = SO(2)` model with `B_theta`: the displayed metric gives
  sectional curvature `-B_theta([X,Y],[X,Y]) < 0`, matching the required
  nonpositive curvature; the intermediate Koszul-formula derivation of the
  Levi-Civita connection is recorded in the item at the standard textbook
  level, and the mixed-slot connection values were re-derived repeatedly during
  authoring. A reviewer should check this item's sign conventions against the
  page's `def-riemann-curvature-four-tensor`.
- A22's proof follows Knapp Lemma 6.50 and Theorem 6.51; the simultaneous
  diagonalisation and regular-element inputs are proved inside the item.
- The `su(p,q)` restricted-root computation behind A25 was not verified in
  this dispatch (see the escalation).
- The three repairs A8/A12/A16 are complete proofs at the dispatch standard as
  far as this author can verify; the index conventions of A16 were re-derived
  and cross-checked against the A19/A20 usage.
