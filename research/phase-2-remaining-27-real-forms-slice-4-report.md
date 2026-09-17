# Step 3b slice 4 — `real-forms-and-real-semisimple-lie-algebras` (batch 13)

Role: alpha-high, label `step3b-slice-4-real-forms`.
Focus: examples and counterexamples page (B page, order 510), 12 items.

## Handoff summary

- **Completed ids (12/12), all decided `repaired` with confidence 1:**
  `ex-compact-and-split-real-forms-of-sl-two-c`,
  `ex-cartan-involution-and-k-plus-p-for-sl-n-r`,
  `ex-polar-cartan-decomposition-of-sl-n-r`,
  `ex-iwasawa-decomposition-of-sl-two-r`,
  `ex-compact-and-split-cartan-subalgebras-of-sl-two-r`,
  `ex-restricted-roots-of-sl-n-r`,
  `ex-a-nonreduced-bc-root-system-from-a-real-form`,
  `ex-vogan-diagrams-for-real-forms-of-sl-three-c`,
  `ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra`,
  `cex-two-nonconjugate-real-cartan-subalgebras`,
  `cex-same-complexification-with-different-killing-form-signatures`,
  `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n`.
  Nothing in this slice is escalated; no promised claim was dropped and no
  item or pair was added.
- **Checks actually run:** precheck (12 checked, 0 failing), rendercheck
  (12 files OK), content-policy on the batch manifest (116 scoped items,
  0 errors, 0 warnings), depcheck (OK, no cycles, all references resolve),
  manifest-deps (0 errors), coverage-checklist (0 errors), the step3-decisions
  receipts plus the run's final check (no open work item for this slice),
  `frontier-dependency-ledger refresh`, and a pure-Python numerical check of
  every root vector exhibited in item 7.
- **Local suppliers added:** none (all prerequisites exist as items).
  Eleven in-run cross-batch edges were added to the batch input
  `research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json`,
  preserving all sibling rows.
- **Published concerns:** no published item was found defective. Two in-run
  sibling findings (a missing Gram normalisation and stale trailing text) were
  reported and have since been fixed by their owners; the classification
  obligations recorded by three sibling items are documented but not consumed.
- **Open obligations:** none for this slice; the notes under "Open obligations"
  below list the residual interface notes for the orchestrator (manifest
  patches to merge, the item-8 citation caveat and the sibling classification
  obligations).

## Slice plan and checkpoint log

Assigned ids, in dispatch order:

1. ex-compact-and-split-real-forms-of-sl-two-c
2. ex-cartan-involution-and-k-plus-p-for-sl-n-r
3. ex-polar-cartan-decomposition-of-sl-n-r
4. ex-iwasawa-decomposition-of-sl-two-r
5. ex-compact-and-split-cartan-subalgebras-of-sl-two-r
6. ex-restricted-roots-of-sl-n-r
7. ex-a-nonreduced-bc-root-system-from-a-real-form
8. ex-vogan-diagrams-for-real-forms-of-sl-three-c
9. ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra
10. cex-two-nonconjugate-real-cartan-subalgebras
11. cex-same-complexification-with-different-killing-form-signatures
12. ex-hyperbolic-space-as-so-zero-n-one-mod-so-n

Authoritative inputs read: CLAUDE.md, SCHEMA.md,
research/phase-2-remaining-27-real-forms-recovery-direction.md, the pair's
manifest rows (research/phase-2-remaining-27-batch-13.pages.json), the
batch-13 coverage entry, the authored A-page items #1-#22 on disk, and the
source passages in Knapp, *Lie Groups Beyond an Introduction* 2nd ed.,
Chapter VI (PDF paginated copy fetched 2026-09-17 from
https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf;
printed pages 355-441 = PDF pages 372-458, byte size 5060066). Page numbers
below are Knapp's printed page numbers.

Source locators established for this slice:

- Knapp p. 362, Theorem 6.31 (global Cartan decomposition on the group level).
- Knapp pp. 357-359, Theorem 6.16, Corollaries 6.18-6.20.
- Knapp pp. 370-373, definition of restricted roots and Proposition 6.40,
  Examples 1 (sl(n,K)) and 2 (su(p,q)) with the explicit root spaces.
- Knapp pp. 374-376, Theorem 6.46 (global Iwasawa decomposition).
- Knapp pp. 384-386, sl(2,R) Cartan-subalgebra example, Proposition 6.59.
- Knapp pp. 397-404, Vogan diagrams: definition of the triple
  (g_0,h_0,Sigma^+), abstract Vogan diagram, Theorems 6.74, 6.88.
- Knapp pp. 407-408, Theorem 6.94 and Proposition 6.95 (complexification of a
  simple real Lie algebra; g_R real simple).
- Knapp pp. 409-413, Theorem 6.96 (Borel-de Siebenthal), Figure 6.1 (A_n:
  painting the p-th simple root gives su(p,q) with p+q=n+1).
- Knapp pp. 413-414 and 421-423, Theorem 6.105 classification; (6.107) table of
  real ranks and restricted root systems; the Cayley-transform computation for
  su(p,n-p) giving Sigma = {+-f_k+-f_l} u {+-2f_k} u {+-f_k} if 2p<n, i.e.
  type (BC)_p.

Cross-slice dependencies still missing on disk at slice start (owned by the
other four slices of this pair): def-restricted-root-and-restricted-root-space,
def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-vogan-diagram,
prop-real-cartan-subalgebras-need-not-be-conjugate, thm-global-iwasawa-decomposition,
thm-complexification-dichotomy-for-a-real-simple-lie-algebra,
prop-restricted-root-systems-may-be-nonreduced,
prop-classical-real-forms-of-the-classical-complex-lie-algebras,
thm-classification-of-real-forms-by-vogan-diagrams. Items 4, 5, 6, 7, 8, 9, 10
consume those; each such item is rechecked against the sibling text once the
file appears, and a decision is recorded only after that recheck.

## Item-by-item checkpoint

All twelve assigned ids were authored in dispatch order; each file is
`items/<id>.md`. "Decision" records the Step-3b receipt written with
`tools/step3-decisions.mjs record-item --run phase-2-remaining-27`; a
re-record supersedes an earlier receipt for the same item (the receipt hash
covers the item text and the dependency list, so any text change forced a
re-record).

1. `ex-compact-and-split-real-forms-of-sl-two-c` — claim: the fixed algebras
   su(2) and sl_2(R) of the conjugate-transpose and complex-conjugation
   involutions are respectively compact and split real forms of sl_2(C).
   Authored: both maps shown to be conjugate-linear involutions; fixed loci
   identified; real-form dimension check; Killing form verified as
   B(X,Y)=4tr(XY) on the basis (B(h,h)=8, B(e,f)=4); su(2) negative definite
   from -4tr(XX*); split Cartan R h self-normalizing with real ad-spectrum
   {0,2,-2}; indefinite signature recorded. Decision: `repaired`,
   confidence 1. Checks: precheck PASS, rendercheck OK. Sources: Knapp
   Ch. VI sec.1 pp.348-353, sec.5 pp.384-385; Etingof Lect.39 sec.39.3-39.4.

2. `ex-cartan-involution-and-k-plus-p-for-sl-n-r` — claim: for sl_n(R),
   theta(X)=-X^T is a Cartan involution with k_0=so(n) and p_0 the symmetric
   traceless matrices. Authored: theta shown involutive automorphism; Killing
   form B=2n tr(XY) (published classical-Killing-forms example); -B(X,theta Y)
   = 2n tr(XY^T) shown positive definite; fixed and anti-fixed subspaces,
   bracket relations and Killing signs verified by transposition; n=1
   excluded as non-semisimple. Decision: `repaired`, confidence 1. Checks:
   precheck PASS, rendercheck OK. Sources: Knapp Ch. VI sec.1 pp.355-358,
   sec.4 Example 1 p.371.

3. `ex-polar-cartan-decomposition-of-sl-n-r` — claim: the global Cartan
   decomposition of SL_n(R) is the polar factorization g = k exp X with
   k in SO(n), X symmetric traceless. Authored: P=(g^Tg)^{1/2} with det P = 1
   from det(g^Tg)=(det g)^2; k=gP^{-1} orthogonal with det 1; X = log P by the
   spectral decomposition with exp X = P and tr X = log det P = 0; uniqueness
   from polar-factor uniqueness plus uniqueness of the self-adjoint logarithm;
   SL_n(R) shown connected (Gram-Schmidt/QR, det R = 1) with finite center, so
   the global Cartan theorem applies. Decision: `repaired`, confidence 1
   (re-recorded after correcting the centre description for odd n). Checks:
   precheck PASS, rendercheck OK. Sources: Knapp Ch. VI sec.3 Theorem 6.31(c)
   and Remark 1 pp.361-363.

4. `ex-iwasawa-decomposition-of-sl-two-r` — claim: every g in SL_2(R) has a
   unique KAN factor with K=SO(2), A={diag(a,a^{-1}):a>0},
   N={[[1,x],[0,1]]}. Authored: Lie-algebra Iwasawa data (k_0=so(2),
   a=R diag(1,-1), n=R E with [H,E]=2E); A and N computed as exponentials
   (E^2=0); explicit QR-style existence formula
   k = a^{-1}[[p,-q],[q,p]], x = (pr+qs)/a^2, a = sqrt(p^2+q^2); uniqueness
   from the first column and rotation-fixing-e_1 argument; global Iwasawa
   theorem cited with hypotheses checked. Decision: `repaired`, confidence 1
   (recorded after the sibling `thm-global-iwasawa-decomposition` landed and
   its statement was re-read and matched, including the K x A x N
   diffeomorphism and the description of A and N). Checks: precheck PASS,
   rendercheck OK.
   Sources: Knapp Ch. VI sec.4 pp.371-375, sec.5 pp.384-385.

5. `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` — claim: the lines
   R[[0,-1],[1,0]] and R diag(1,-1) are compact and split theta-stable Cartan
   subalgebras of sl_2(R). Authored: theta-eigenvalues; normalizer
   computations for both lines; compact/split parts read off; maximality of
   the compact dimension against rank so(3)=1; ad-spectra {0,+-2i} and
   {0,+-2}. Decision: `repaired`, confidence 1 (re-recorded after correcting
   the bracket expansion/basis order in step 1.4). Checks: precheck PASS,
   rendercheck OK. Source: Knapp Ch. VI sec.6 pp.384-386.

6. `ex-restricted-roots-of-sl-n-r` — claim: for sl_n(R) with diagonal
   traceless a, the restricted roots are f_i-f_j with one-dimensional spaces
   R E_ij. Authored: maximality of a in p_0; [H,E_ij]=(f_i-f_j)(H)E_ij;
   completeness by comparing entries against a generic diagonal element;
   dimension count (n-1)+n(n-1)=n^2-1; system A_{n-1}, reduced. Decision:
   `repaired`, confidence 1. Checks: precheck PASS, rendercheck OK. Sources:
   Knapp Ch. VI sec.4 Example 1 p.371, table (6.107) p.424.

7. `ex-a-nonreduced-bc-root-system-from-a-real-form` — claim: for su(p,q),
   p<q, the standard maximal split subspace has restricted roots BC_p.
   Authored: su(p,q) block form; a = {H_D}; a maximal abelian in p_0 by the
   centralizer computation; the block commutator formula; the four scalar
   eigen-equations solved to give multiplicities 2 for +-f_i+-f_j, 1 for
   +-2f_i and 2(q-p) for +-f_i; completeness from the dimension count
   (p+q)^2-1 = dim su(p,q); BC_p identified and shown non-reduced. The
   exhibited root vectors were additionally verified numerically (pure-Python
   script, 2026-09-17, p=1,2,3: membership in su(p,q) and
   [H_D,Y]=lambda(H_D)Y all confirmed). Consistent with sibling
   `prop-restricted-root-systems-may-be-nonreduced` part (b)
   (su(2,1): Sigma={+-f,+-2f}, multiplicities 2,1 = the p=1,q=2 case).
   Decision: `repaired`, confidence 1. Checks: precheck PASS, rendercheck OK.
   Sources: Knapp Ch. VI sec.4 Example 2 pp.371-372, sec.11 pp.422-424.

8. `ex-vogan-diagrams-for-real-forms-of-sl-three-c` — claim: su(3), su(2,1)
   and sl_3(R) are distinguished by the Vogan data on A_2. Authored: compact
   form (identity Cartan involution; no painted vertex); su(2,1) (diagonal
   compact Cartan; alpha_2 = eps_2-eps_3 noncompact via E_23 in the
   off-diagonal block, alpha_1 compact; one painted vertex; the mirrored
   painting gives su(1,2) in the same class); sl_3(R) (explicit maximally
   compact Cartan H_1,H_2; roots 2ix, -ix+3y, ix+3y; theta swaps the simple
   roots of the theta-stable positive system, so the nontrivial involution
   with no painted vertex); pairwise distinctness by compactness/compact
   Cartan invariants. After the siblings
   `def-vogan-diagram`, `thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence`
   and `thm-classification-of-real-forms-by-vogan-diagrams` landed, the
   distinction step was rewritten to use only the proven well-definedness and
   injectivity directions, and the claim was narrowed to what the promised
   statement says: the three real forms (whose occurrence is taken from the
   classical list of `prop-classical-real-forms-of-the-classical-complex-lie-algebras`)
   are pairwise non-isomorphic and distinguished by their Vogan data. No
   exhaustiveness of the A_2 real forms and no realizability of arbitrary
   abstract diagrams is claimed, so the siblings' open surjectivity and
   exhaustion obligations are not consumed. Decision: `repaired`, confidence 1.
   Checks: precheck PASS, rendercheck OK. Sources: Knapp Ch. VI sec.8
   pp.391-399, sec.10 pp.409-414.

9. `ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra` — claim: a
   complex simple s viewed as real is real simple and has complexification
   s + conjugate(s) with conjugation interchanging factors. Authored:
   s_R semisimple via B_R = 2Re B_s; ideals satisfy a = [a,g]; J-stability of
   ideals; real simplicity; explicit isomorphism L(X+iY)=(X+JY,X-JY) with
   bracket preservation and the factor-swap property for the canonical
   conjugation; conjugate s-bar identified with s via the conjugation of a
   compact real form. The item was rewritten to be choice-free (the earlier
   draft's appeal to a compact real form was replaced by the direct
   s-bar identification free of that step), matching the manifest axiom base
   ZF, and the sibling `thm-complexification-dichotomy-for-a-real-simple-lie-algebra`
   was re-read on landing (its extra isomorphism clause, which assumes AC, is
   not consumed). Decision: `repaired`, confidence 1. Checks: precheck PASS,
   rendercheck OK. Source: Knapp Ch. VI sec.9 Theorems 6.94/6.95 pp.407-408.

10. `cex-two-nonconjugate-real-cartan-subalgebras` — refutes: "any two Cartan
    subalgebras of sl_2(R) are conjugate". Authored: the two lines are Cartan
    subalgebras (via the sibling normalizer computations); ad_{K_0} has
    characteristic polynomial t(t^2+4), ad_H has t(t-2)(t+2); conjugation
    invariance of characteristic polynomials rules out any automorphism, in
    particular inner ones. Decision: `repaired`, confidence 1. Checks:
    precheck PASS, rendercheck OK. Source: Knapp Ch. VI sec.6 pp.384-386.

11. `cex-same-complexification-with-different-killing-form-signatures` —
    refutes: congruence of Killing forms across real forms. Authored:
    su(2) negative definite (inertia (0,3,0)) from -4tr(XX*); sl_2(R) Gram
    eigenvalues 8,4,-4 (inertia (2,1,0)); isomorphism-invariance of the
    Killing form by ad_{phi X}=phi ad_X phi^{-1}; differing inertia excludes
    isomorphism via Sylvester. Decision: `repaired`, confidence 1. Checks:
    precheck PASS, rendercheck OK.

12. `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` — claim: real hyperbolic
    n-space is SO_0(n,1)/SO(n) with the Cartan metric of constant negative
    curvature. Authored: O(n,1)/so(n,1) block form [[A,b],[b^T,0]];
    theta(X)=-X^T Cartan involution with k_0=so(n), p_0={X_b},
    B_theta=(n-1)tr(XX^T); hyperboloid as a regular level set with tangent
    e_0^perp; SO_0(n,1) preserves the upper sheet; transitivity by explicit
    boosts; stabilizer SO(n); orbit map a diffeomorphism; Cartan metric
    B_theta(X_a,X_b)=2(n-1)(a.b) at the origin; trivial (hence finite) centre;
    sectional curvature -1/(2(n-1)) computed from R(X,Y)Z=-[[X,Y],Z] and
    [X_a,X_b]=[[ab^T-ba^T,0],[0,0]], constant by transitivity; the rescaled
    metric B_theta/(2(n-1)) has curvature -1, i.e. B_theta is 2(n-1) times the
    standard curvature -1 metric (the rescaling direction was corrected after
    a factor check, and the global comparison of the two invariant metrics is
    justified by determination at the base point). Decision: `repaired`,
    confidence 1 (re-recorded after each text change). Checks:
    precheck PASS, rendercheck OK. Note: uses the Gram-normalised sectional
    curvature formula of `def-sectional-curvature` rather than the
    unnormalised display of
    `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k`;
    the sibling defect is reported below. Sources: Knapp Ch. VI sec.3
    Theorem 6.31 pp.361-368, sec.4 Example 3 p.373.

## Checks actually run (commands and results)

- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` on each of the
  twelve ids, jointly and individually: 12 checked, 0 failing — all clean.
  Item 1 required adopting the tool's canonical step numbering; every later
  edit was followed by a fresh pass and the canonical numbering from
  `layerRepair` is preserved in each file. Final joint run: "12 checked,
  0 failing — all clean".
- `node tools/rendercheck.mjs items/<id>.md ...` on the twelve ids: OK — no
  wikilink inside math, no unbalanced or multiline display blocks, every math
  span parses under KaTeX, every frontmatter block parses under the renderer's
  YAML parser. Final joint run: 12 files, OK.
- `node tools/content-policy.mjs research/phase-2-remaining-27-batch-13.pages.json`:
  at the time of the first run it reported 22 `scope-item-missing` errors for
  sibling items not yet written; the final run reports 116 scoped items,
  0 errors, 0 warnings.
- `node tools/depcheck.mjs`: at the time of the first run the only errors were
  `dep-unresolved`/`link-unresolved` for the five sibling dependencies not yet
  on disk; the final run reports "OK — no cycles, all references resolve, no
  draft items on published pages", with no finding on any of the twelve items.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-13.pages.json`:
  116 items, 0 normalized, 0 errors.
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-13.coverage.json`:
  2 pages, 29 harvested results, 0 errors, 0 warnings.
- `node tools/step3-decisions.mjs record-item ...` receipts written for all
  twelve ids (see the checkpoint list); every receipt was rewritten after any
  later text change so that its hash matches the shipped text.
- `node tools/frontier-dependency-ledger.mjs refresh --run
  phase-2-remaining-27` after adding the slice's cross-batch rows.
- Independent verification script (pure Python, 2026-09-17) for item 7: every
  exhibited root vector checked to lie in su(p,q) and to satisfy
  [H_D,Y]=lambda(H_D)Y for p=1,2 and 3 with random diagonal D.
- Sibling re-reads after their files landed: `thm-global-iwasawa-decomposition`
  (item 4), `def-vogan-diagram`, `thm-vogan-diagram-...-well-defined-up-to-equivalence`,
  `thm-classification-of-real-forms-by-vogan-diagrams`,
  `prop-classical-real-forms-of-the-classical-complex-lie-algebras` (item 8),
  `thm-complexification-dichotomy-for-a-real-simple-lie-algebra` (item 9),
  `def-restricted-root-and-restricted-root-space`,
  `thm-restricted-root-space-decomposition`,
  `prop-restricted-root-systems-may-be-nonreduced` (items 6, 7),
  `prop-real-cartan-subalgebras-need-not-be-conjugate` (item 10),
  `def-theta-stable-cartan-subalgebra-and-compact-split-parts` (item 5).

## Local suppliers added

None. This slice is confined to its twelve B-page items; every prerequisite
used already exists as an item (in this pair, in this run, or published). Two
items are supplied by the earlier slices of this same pair
(`ex-compact-and-split-cartan-subalgebras-of-sl-two-r` for the Iwasawa and
counterexample items, `ex-cartan-involution-and-k-plus-p-for-sl-n-r` for
items 3, 5 and 12); earlier items on the same examples page are permitted as
dependencies by the page rules.

## Cross-batch dependency input

Eleven in-run cross-batch edges were added to
`research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json`,
preserving all sibling rows (28 existing rows kept, 39 total), each with a
supplier-claim/consumer-use evidence string: consumers
`ex-compact-and-split-real-forms-of-sl-two-c` (2),
`ex-compact-and-split-cartan-subalgebras-of-sl-two-r` (2),
`ex-restricted-roots-of-sl-n-r` (1),
`ex-a-nonreduced-bc-root-system-from-a-real-form` (1),
`ex-vogan-diagrams-for-real-forms-of-sl-three-c` (3),
`cex-two-nonconjugate-real-cartan-subalgebras` (2). All other dependencies of
this slice are either inside the pair or published items of earlier runs.

## Manifest patches proposed (frontmatter `deps` vs manifest rows)

Every item's `deps` was expanded beyond the manifest row because the proofs
are load-bearing on additional items; the orchestrator should merge these
into the batch-13 manifest, coverage and proof-contract files. (Manifest row
deps in parentheses.)

1. `ex-compact-and-split-real-forms-of-sl-two-c`: manifest
   [def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form];
   authored deps add def-special-linear-lie-algebra-sl-two,
   def-real-form-of-a-complex-lie-algebra,
   thm-real-forms-correspond-to-conjugate-linear-involutions,
   ex-killing-form-of-sl-two, def-killing-form-of-a-finite-dimensional-lie-algebra,
   ex-unitary-and-special-unitary-lie-groups,
   ex-general-and-special-linear-lie-groups,
   def-cartan-subalgebra-of-a-lie-algebra, def-transpose-of-a-matrix.
2. `ex-cartan-involution-and-k-plus-p-for-sl-n-r`: manifest
   [def-cartan-involution..., def-cartan-decomposition...]; authored deps add
   ex-general-and-special-linear-lie-groups,
   ex-orthogonal-and-special-orthogonal-lie-groups,
   ex-classical-simple-lie-algebras-and-their-killing-forms, def-transpose-of-a-matrix,
   def-killing-form-of-a-finite-dimensional-lie-algebra,
   thm-cartans-semisimplicity-criterion,
   prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition.
3. `ex-polar-cartan-decomposition-of-sl-n-r`: manifest
   [thm-global-cartan-decomposition..., def-axiom-of-choice]; authored deps add
   ex-general-and-special-linear-lie-groups,
   ex-orthogonal-and-special-orthogonal-lie-groups,
   ex-cartan-involution-and-k-plus-p-for-sl-n-r,
   def-cartan-decomposition-of-a-real-semisimple-lie-algebra, thm-polar-decomposition,
   cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
   ex-matrix-exponential-as-the-lie-group-exponential,
   thm-gram-schmidt-orthonormalisation, def-determinant-of-a-square-matrix,
   cor-determinant-of-an-inverse, cor-determinant-multiplicativity-from-the-top-exterior-power.
4. `ex-iwasawa-decomposition-of-sl-two-r`: manifest
   [thm-global-iwasawa-decomposition, def-axiom-of-choice]; authored deps add
   ex-general-and-special-linear-lie-groups,
   ex-orthogonal-and-special-orthogonal-lie-groups,
   ex-cartan-involution-and-k-plus-p-for-sl-n-r,
   ex-compact-and-split-cartan-subalgebras-of-sl-two-r,
   def-cartan-decomposition-of-a-real-semisimple-lie-algebra,
   def-theta-stable-cartan-subalgebra-and-compact-split-parts,
   ex-matrix-exponential-as-the-lie-group-exponential,
   def-exponential-map-of-a-lie-group.
5. `ex-compact-and-split-cartan-subalgebras-of-sl-two-r`: manifest
   [def-theta-stable-cartan-subalgebra-and-compact-split-parts]; authored deps
   add def-cartan-subalgebra-of-a-lie-algebra,
   def-cartan-involution-of-a-real-semisimple-lie-algebra,
   def-cartan-decomposition-of-a-real-semisimple-lie-algebra,
   ex-cartan-involution-and-k-plus-p-for-sl-n-r,
   ex-general-and-special-linear-lie-groups,
   ex-orthogonal-and-special-orthogonal-lie-groups,
   def-special-linear-lie-algebra-sl-two.
6. `ex-restricted-roots-of-sl-n-r`: manifest
   [def-restricted-root-and-restricted-root-space]; authored deps add
   def-maximal-split-abelian-subspace-and-real-rank,
   def-cartan-decomposition-of-a-real-semisimple-lie-algebra,
   ex-cartan-involution-and-k-plus-p-for-sl-n-r,
   ex-general-and-special-linear-lie-groups,
   ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, def-lie-algebra-over-a-field.
7. `ex-a-nonreduced-bc-root-system-from-a-real-form`: manifest
   [prop-restricted-root-systems-may-be-nonreduced, def-axiom-of-choice];
   authored deps add def-restricted-root-and-restricted-root-space,
   def-maximal-split-abelian-subspace-and-real-rank,
   def-cartan-involution-of-a-real-semisimple-lie-algebra,
   def-cartan-decomposition-of-a-real-semisimple-lie-algebra,
   def-reduced-crystallographic-euclidean-root-system,
   ex-classical-simple-lie-algebras-and-their-killing-forms,
   prop-complexification-preserves-semisimplicity,
   def-killing-form-of-a-finite-dimensional-lie-algebra,
   ex-unitary-and-special-unitary-lie-groups.
8. `ex-vogan-diagrams-for-real-forms-of-sl-three-c`: manifest
   [def-vogan-diagram, thm-classification-of-real-forms-by-vogan-diagrams,
   prop-classical-real-forms-of-the-classical-complex-lie-algebras,
   def-axiom-of-choice]; authored deps add
   ex-general-and-special-linear-lie-groups,
   ex-unitary-and-special-unitary-lie-groups,
   def-classical-complex-matrix-lie-algebras,
   def-cartan-involution-of-a-real-semisimple-lie-algebra,
   def-cartan-decomposition-of-a-real-semisimple-lie-algebra,
   def-theta-stable-cartan-subalgebra-and-compact-split-parts,
   def-cartan-subalgebra-of-a-lie-algebra,
   ex-diagonal-cartan-subalgebra-and-roots-of-sl-n,
   ex-cartan-involution-and-k-plus-p-for-sl-n-r,
   ex-classical-simple-lie-algebras-and-their-killing-forms,
   thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence.
9. `ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra`: manifest
   [thm-complexification-dichotomy-for-a-real-simple-lie-algebra]; authored
   deps add def-complexification-of-a-real-lie-algebra,
   prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero,
   prop-complexification-preserves-semisimplicity,
   prop-ideals-and-quotients-of-semisimple-lie-algebras,
   cor-semisimple-lie-algebras-are-centerless-and-perfect,
   thm-cartans-semisimplicity-criterion,
   def-killing-form-of-a-finite-dimensional-lie-algebra. (An earlier draft
   also listed thm-existence-of-a-compact-real-form and def-axiom-of-choice;
   both were removed when the item was made choice-free, so its axiom base
   stays ZF exactly as scaffolded.)
10. `cex-two-nonconjugate-real-cartan-subalgebras`: manifest
    [prop-real-cartan-subalgebras-need-not-be-conjugate]; authored deps add
    ex-compact-and-split-cartan-subalgebras-of-sl-two-r,
    def-cartan-subalgebra-of-a-lie-algebra,
    def-special-linear-lie-algebra-sl-two,
    ex-general-and-special-linear-lie-groups,
    ex-cartan-involution-and-k-plus-p-for-sl-n-r.
11. `cex-same-complexification-with-different-killing-form-signatures`:
    manifest [ex-compact-and-split-real-forms-of-sl-two-c]; authored deps add
    ex-killing-form-of-sl-two, def-killing-form-of-a-finite-dimensional-lie-algebra,
    def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form,
    thm-sylvesters-law-of-inertia,
    cor-real-symmetric-bilinear-forms-are-classified-by-inertia,
    def-definiteness-inertia-and-signature-data-over-the-reals.
12. `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n`: manifest
    [def-riemannian-symmetric-pair-of-noncompact-type,
    prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k,
    thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space,
    def-axiom-of-choice]; authored deps add def-sectional-curvature,
    def-cartan-involution-of-a-real-semisimple-lie-algebra,
    def-cartan-decomposition-of-a-real-semisimple-lie-algebra,
    def-killing-form-of-a-finite-dimensional-lie-algebra,
    ex-classical-simple-lie-algebras-and-their-killing-forms,
    prop-complexification-preserves-semisimplicity,
    ex-orthogonal-and-special-orthogonal-lie-groups,
    ex-general-and-special-linear-lie-groups,
    thm-cartans-closed-subgroup-theorem,
    thm-a-regular-level-set-is-an-embedded-submanifold,
    prop-tangent-space-of-a-regular-level-set-is-the-kernel,
    def-homogeneous-space-of-a-lie-group,
    thm-quotient-manifold-by-a-closed-lie-subgroup,
    ex-matrix-exponential-as-the-lie-group-exponential,
    cor-the-exponential-map-is-a-local-diffeomorphism-at-zero.

No other manifest patch is requested: the statements, titles, kinds, axiom
bases and promised claims of all twelve rows were kept as scaffolded.

## Concerns about sibling items (reported to the owner; not edited)

1. **Missing normalisation in the sectional-curvature display (in-run
   sibling, not published).** At the time of authoring,
   `items/prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k.md`
   stated "K(σ) = -B_{θ_*}([X,Y],[X,Y])" for independent (not orthonormal)
   X,Y in p_0, which is missing the Gram factor required by
   `def-sectional-curvature`. Reported. Rechecked 2026-09-17 15:4x: the item
   has since been repaired by its owner (statement part 2 and step 8.1 now say
   the formula holds for B_θ-orthonormal pairs "and for arbitrary independent
   X,Y the same formula holds with the normalising factor
   B_θ(X,X)B_θ(Y,Y)-B_θ(X,Y)^2 in the denominator"). Finding closed.
2. **Stale trailing text (in-run sibling items, not published).** Six A-page
   items of this batch ended with the stray line `1 checked, 1 failing` after
   the QED glyph: `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition`,
   `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero`,
   `prop-complexification-preserves-semisimplicity`,
   `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form`,
   `thm-existence-of-a-compact-real-form`,
   `thm-real-forms-correspond-to-conjugate-linear-involutions`. Reported.
   Rechecked 2026-09-17 15:4x: `grep -rn "checked, .* failing" items/*.md`
   returns nothing, so the stray lines have been removed. Finding closed.

No published (status: published) item was found defective during this slice;
both findings above were in-run drafts of this batch and have been fixed by
their owners.

3. **Open classification obligations observed, not consumed (in-run siblings,
   not published).** Three sibling items record their own obligations with
   exact locators: `thm-classification-of-real-forms-by-vogan-diagrams`
   (surjectivity/realizability of abstract diagrams; locator Knapp Ch. VI
   Theorem 6.88 pp. 403-405 and Etingof Thm 40.1 pp. 186-188),
   `thm-classification-of-real-semisimple-lie-algebras` (the Borel-de
   Siebenthal enumeration and the realization step), and
   `prop-classical-real-forms-of-the-classical-complex-lie-algebras`
   (exhaustion of the classical lists; itself "recorded as escalated on the
   exhaustion input"). Items 8 and 9 of this slice were authored so as not to
   consume any of these unproven directions: item 8 claims only that the
   compact, intermediate and split forms are pairwise non-isomorphic and
   distinguished by their computed Vogan data, using the proven
   well-definedness/injectivity directions and the classical list only for the
   occurrence of the three forms; item 9 proves the complex-as-real
   alternative directly, without the AC-dependent isomorphism clause of the
   dichotomy. The classification obligations remain with the sibling owners
   and the inventory owner.

## Open obligations

1. All twelve ids have Step-3b decisions recorded (`repaired`, confidence 1,
   with the examined dependency list and a concrete evidence reason); every
   receipt was rewritten after the last text change to that item, so the
   recorded hashes match the shipped files. Seven receipts were refreshed a
   second time after sibling edits changed the transitive dependency closure
   (`ex-cartan-involution-and-k-plus-p-for-sl-n-r`,
   `ex-iwasawa-decomposition-of-sl-two-r`, `ex-restricted-roots-of-sl-n-r`,
   `ex-a-nonreduced-bc-root-system-from-a-real-form`,
   `ex-vogan-diagrams-for-real-forms-of-sl-three-c`,
   `cex-two-nonconjugate-real-cartan-subalgebras`,
   `cex-same-complexification-with-different-killing-form-signatures`); the
   cited clauses of each changed supplier were re-read before re-recording,
   and `node tools/step3-decisions.mjs check --run phase-2-remaining-27
   --phase final` now reports no open work item for this slice. No item is
   escalated: each promised claim is either proved in the item or supplied by
   a confirmed dependency, and the unproven sibling directions listed under
   Concerns 3 are not used.
2. Axiom-of-Choice bookkeeping: items 3, 4, 7, 8 and 12 assume AC and list
   `def-axiom-of-choice` among their authors' deps, stating the exact use
   (global Cartan/Iwasawa theorems, quotient/closed-subgroup interfaces,
   classification). Items 1, 2, 5, 6, 9, 10 and 11 are choice-free, matching
   their manifest axiom base ZF; item 9 in particular was rewritten so that
   the AC-dependent compact-real-form step is not needed.
3. Item 8's `[L5]` cites `prop-classical-real-forms-of-the-classical-complex-lie-algebras`
   only for the occurrence of su(3,0), su(2,1) and sl_3(R) in the classical
   list, not for its escalated exhaustion direction. If that sibling's final
   statement narrows its classical list, item 8's `[L5]` sentence must be
   rechecked; the three computed Vogan data would be unaffected.
4. Residual interface note for the orchestrator: the classification
   obligations above (Vogan surjectivity, Borel-de Siebenthal enumeration,
   classical exhaustion) are recorded in the sibling items and in
   `research/published-consumer-supplier-ledger.md` terms belong to the pair's
   Step-3b gate; this slice neither created nor resolved them.
