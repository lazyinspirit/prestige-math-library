# Step 3b checkpoint — Real Forms and Real Semisimple Lie Algebras

Run `phase-2-remaining-27`, batch 13. A page
`real-forms-and-real-semisimple-lie-algebras` (51 items), B page
`real-forms-and-real-semisimple-lie-algebras-examples` (12 items). Scope
decision `sufficient`
(`research/phase-2-remaining-27-step3a-review-real-forms-and-real-semisimple-lie-algebras.json`).
Operator direction `research/phase-2-remaining-27-real-forms-recovery-direction.md`
read and followed where the budget allowed.

## State at this checkpoint (2026-09-17, second dispatch)

- 22 of the 51 A items exist on disk and pass `precheck` and `rendercheck`:
  items 1–22 of the manifest, i.e. `def-complexification-of-a-real-lie-algebra`
  through `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k`.
- 29 A items (manifest #23–#51) and all 12 B items are NOT written.
- No item decision has been recorded: the pair is incomplete and
  `research/phase-2-remaining-27-batch-13.proof-contracts.json` contains no
  entry for any item of this pair, so an `accept` receipt would be a false
  certification. The moment the contracts and the remaining items exist, the
  decisions can be recorded from this checkpoint.
- The stray tool-output line `1 checked, 1 failing` that the first dispatch had
  appended to eight item files was removed (formatting defect, not text).

## Repairs completed in this dispatch (all pass `precheck` `(direct)`)

- `thm-conjugacy-of-compact-real-forms` (A8): proof fully rewritten.
  Realification, `B_R = 2 Re B`, nondegeneracy and semisimplicity of
  `g_R`, the conjugations as Cartan involutions of `g_R`, the Fishburn-type
  polar normalisation with `rho = (tau_2 tau_1)^2`, `log rho` as a derivation
  hence inner, and the commuting-Cartan-involutions argument give the
  conjugacy directly (Knapp Cor 6.19-6.20 route) without the unjustified
  finite iteration of the old step 3.2.
- `thm-existence-of-a-cartan-involution` (A12): proof fully rewritten along
  Knapp Cor 6.18 with the Prop 6.14 computation, replacing the sketch of the
  old step 2.1.
- `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group`
  (A16): proof fully rewritten along Knapp Thm 6.31: K closed with Lie algebra
  k_0, the auxiliary group T, the operator argument giving G = T exp(p_0), the
  differential of the polar map computed with the left-trivialised derivative
  of exp, uniqueness, smoothness and compactness of T = K. The statement now
  defines "global Cartan involution" precisely (involutive automorphism with
  Cartan differential fixing Z(G) pointwise), which is necessary for the claim
  to hold.

## Authored in this dispatch

A13 `thm-conjugacy-of-cartan-involutions` (Knapp Cor 6.19 route),
A17 `cor-maximal-compact-subgroups-...` (existence and maximality proved;
conjugacy half escalated - see below), A18 `def-riemannian-symmetric-pair-of-noncompact-type`,
A19 `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k`,
A20 `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space`,
A21 `def-maximal-split-abelian-subspace-and-real-rank`,
A22 `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k` (Knapp Lemma 6.50 /
Thm 6.51 route, with the regular-element and simultaneous-diagonalisation
lemmas proved locally).

## Open obligations

1. **A17 conjugacy half (escalated).** Cartan's theorem "every compact
   subgroup lies in a conjugate of K" needs the convexity of the displacement
   function on the symmetric space G/K. In this page that geometry is built in
   A18-A20, which FOLLOW A17, and the declared sources do not prove it (Knapp
   Historical Notes p. 766 omits it and points to Borel 1998, pp. 128-133,
   which is not a declared source). Proposed remedies: (a) move A17 after A20
   in the manifest and add the dependency, (b) authorise Borel 1998 as a source
   and let the pair supply the local displacement-function proof, or (c) record
   the theorem as a known-hard imported result with owner sign-off.
2. **A23-A51 and B1-B12 unwritten** (29 + 12 items). The per-item source
   material has been located in Knapp Chapter VI (Prop 6.40, Lemma 6.45,
   Lemma 6.50, Thm 6.51, Prop 6.52, Lemma 6.56, Thm 6.57, Prop 6.59, Thm 6.74,
   Thm 6.88) and Etingof Lectures 39-43; a follow-up dispatch can continue at
   A23 `def-restricted-root-and-restricted-root-space`.
3. **A25 authoring risk.** `prop-restricted-root-systems-may-be-nonreduced`
   needs a verified nonreduced example. The clean criterion is
   `2 lambda in Sigma` iff `[g_lambda, g_lambda] != 0` (from Prop 6.40(b)),
   but the explicit `su(p,q)` computation illustrating it was NOT re-derived
   here; it must be proved before A25 is closed.
4. **Step-3a obligations still open:** Satake locators for A40/A41 (unwritten),
   and A44's citation of `prop-classical-types-correspond-to-sl-so-and-sp`
   together with the batch-11 replacements (unwritten).
5. **Contracts, manifest, coverage, cross-batch rows, decisions:** not yet
   updated for this dispatch's items. `research/phase-2-remaining-27-batch-13.proof-contracts.json`
   needs 47 entries for this pair (35 A + 12 B proof-bearing items); adding them
   is mechanical once the items exist, and each entry needs the exact-step
   citations and the standard boundary worksheet.
6. **B-page protection and shared files:** the moment-maps pair in the shared
   batch file was not touched; no other pair's files were edited.

## Checks actually run (this dispatch)

- `node tools/tsx-run.mjs tools/precheck.mts` on the 22 owned item paths:
  14 proof-bearing items PASS `(direct)`, 0 failing.
- `node tools/rendercheck.mjs` on the same 22 paths: OK after repairing six
  `wikilink-in-math` defects in A19 (nested Lie brackets `[[X,Y],Z]` were being
  read as wikilinks; rewritten with `\lbrack\lbrack ... \rbrack`).
- `node tools/depcheck.mjs` (repo-wide): no cycles, all references resolve, no
  draft items on published pages; the two remaining `cited-not-in-deps` errors
  belong to `thm-sequential-criterion-for-function-limits` and
  `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators`, not to this
  pair.
- NOT run: strict proof-contract check (no contracts yet), content-policy,
  manifest-deps, coverage-checklist, validate-plan, fwdcheck/extcheck, and
  `step3-decisions record-item` (deliberately deferred; see the report).

## Next action for a follow-up dispatch

Continue at A23; then A24-A51 in manifest order with the Knapp locators above;
then the 12 B items; then add the 47 proof-contract entries, refresh coverage
and the cross-batch dependency rows, run the full author-check set, and record
item decisions. Resolve escalation 1 (A17) with the owner first, since the
manifest order is affected.
