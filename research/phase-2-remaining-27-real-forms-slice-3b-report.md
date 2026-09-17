# Step 3b slice 3b report — `real-forms-and-real-semisimple-lie-algebras`

Run `phase-2-remaining-27`, batch 13, slice 3b (Satake diagrams, classification of
real forms, classical real forms, remark and false statements). Binding
directions read first: `research/phase-2-remaining-27-real-forms-recovery-direction.md`,
`research/phase-2-remaining-27-real-forms-slice.task.md`,
`research/phase-2-remaining-27-owner-authoring-direction.md`, and the pair's
Step-3a scope report.

## Items, decisions, checks

All twelve assigned ids were authored (none existed on disk when this slice
started). Every proof-bearing item passes
`node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (10 checked, 0
failing; the definition and the remark have no proof section) and
`node tools/rendercheck.mjs items/<id>.md` (12 files OK). A decision was
recorded for each id with `node tools/step3-decisions.mjs record-item`, with
the examined dependency IDs equal to the item's current frontmatter deps.

| # | Item | Decision |
|---|---|---|
| A40 | `def-satake-diagram` | repaired |
| A41 | `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications` | **escalate** |
| A42 | `thm-complexification-dichotomy-for-a-real-simple-lie-algebra` | repaired |
| A43 | `thm-classification-of-real-semisimple-lie-algebras` | **escalate** |
| A44 | `prop-classical-real-forms-of-the-classical-complex-lie-algebras` | **escalate** |
| A45 | `rem-representation-theory-of-noncompact-real-reductive-groups` | repaired |
| A46 | `fs-a-real-form-is-merely-the-same-complex-lie-algebra-with-scalars-forgotten` | repaired |
| A47 | `fs-all-real-forms-of-a-complex-semisimple-lie-algebra-are-isomorphic` | repaired |
| A48 | `fs-all-cartan-subalgebras-of-a-real-semisimple-lie-algebra-are-conjugate` | repaired |
| A49 | `fs-restricted-root-systems-are-always-reduced` | repaired |
| A50 | `fs-a-plain-dynkin-diagram-classifies-real-forms` | repaired |
| A51 | `fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k` | repaired |

Receipts: `research/phase-2-remaining-27-step3b-review-<id>.json` (nine
`repaired`, three `escalate`). Each escalated receipt was re-recorded after the
final content edit by removing and rewriting this author's own stale receipt;
no owner receipt was touched.

## Content actually proved

- **A40 `def-satake-diagram`.** Maximally split $\theta$-stable Cartan
  $\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ with $\mathfrak a_0$
  maximal abelian in $\mathfrak p_0$; root types from
  `def-cayley-transform-of-a-theta-stable-cartan-subalgebra`; compatible
  positive systems with an explicit construction; black vertex
  $\Leftrightarrow$ imaginary simple root $\Leftrightarrow$ restriction to
  $\mathfrak a_0$ vanishes (with the maximal-splitness proof that all
  imaginary roots are compact); Satake arrows = distinct white simple roots
  with equal nonzero restriction, justified by Knapp VI §12 Problem 7
  (a)-(d); equivalence relation of abstract Satake diagrams.
- **A41.** Both assignments are well defined up to their equivalence relations
  and invariant under isomorphism (steps 1.1-1.3); assertion 1, that equal
  Vogan class $\Leftrightarrow$ isomorphic, from the pair's #38 and #39
  injectivity (2.1); the implication same Vogan class $\Rightarrow$ same
  Satake class (3.1); the Cayley-transform chain joining the two extremal
  Cartan types (2.2). Gap recorded in step 4.1 and the Remarks.
- **A42.** Full dichotomy proof of Knapp Theorem 6.94 without Cartan-theoretic
  hypotheses: $g_0$ simple $\Rightarrow$ semisimple; the canonical conjugation
  permutes the simple ideals of the complexification with kernel of size at
  most two and rigidly (a conjugation-stable proper sum would split $g_0$
  into two nonzero proper ideals); $n=1$ gives complex-simple
  complexification, $n=2$ gives $\mathfrak g=\mathfrak s\oplus\sigma(\mathfrak s)$
  with the projection $\mathfrak g_0\to\mathfrak s_{\mathbb R}$ an
  isomorphism and the two ideals complex-isomorphic.
- **A43.** The decomposition of a real semisimple algebra into real simple
  ideals, the dichotomy reduction, the taxonomy of the Vogan/Satake list, and
  the assembly of the classification from the enumeration (steps 1.1-4.1).
  Gaps recorded in step 5.1 and the Remarks.
- **A44.** Each of $\mathfrak{su}(p,q)$, $\mathfrak{sl}_n(\mathbb R)$,
  $\mathfrak{sl}_k(\mathbb H)=\mathfrak{su}^{*}(2k)$, $\mathfrak{so}(p,q)$,
  $\mathfrak{sp}(p,q)$, $\mathfrak{sp}_{2n}(\mathbb R)$,
  $\mathfrak{so}^{*}(2n)$ exhibited as the fixed locus of a displayed
  conjugate-linear involution, hence a real form; admissible ranges,
  low-rank coincidences, compact forms at $q=0$, split forms at the extreme
  signatures (steps 1.1-2.2). Exhaustion gap in step 3.1 and the Remarks.
- **A45.** Boundary remark for the analytic representation theory.
- **A46-A51.** Counterexample refutations, each with an explicit witness and
  a failed conclusion: dimension doubling for scalar-forgetting (A46);
  $\mathfrak{su}(2)$ versus $\mathfrak{sl}_2(\mathbb R)$ via the sign of the
  Killing form (A47, A50); the compact and split Cartan lines of
  $\mathfrak{sl}_2(\mathbb R)$ (A48); the $\mathfrak{su}(2,1)$ restricted
  system $\{\pm f,\pm2f\}$ (A49); the universal cover of
  $\mathrm{SL}_2(\mathbb R)$ with noncompact $\widetilde K\cong\mathbb R$ and
  no compact subgroup of Lie algebra $\mathfrak k_0$ (A51).

## Step-3a obligations: status

| Obligation | Status |
|---|---|
| Satake locators of A40/A41 extended to Knapp VI §11, §12 Problem 7 (p. 427), Historical Notes p. 767 | **applied** in both items |
| A44 cites `prop-classical-types-correspond-to-sl-so-and-sp` with the batch-11 replacement items | **applied** (`prop-classical-types-correspond-to-sl-so-and-sp`, `def-classical-complex-matrix-lie-algebras`) |
| A17 conjugacy half | not this slice; untouched |

## Exact unresolved gaps (escalations)

1. **A41** — the converse implication of assertion 2: a Satake class must
   determine the Vogan class (Satake injectivity). The missing input is the
   compactness rule for simple roots under a Cayley transform, Knapp, Chapter
   VI, Proposition 6.72, printed pp. 393-394, used in §11, printed
   pp. 422-425; no declared supplier contains it.
2. **A43** — (a) the enumeration/completeness input: Borel-de Siebenthal,
   Knapp, Theorem 6.96 with Lemmas 6.97-6.98, printed pp. 409-412, plus the
   Weyl-group case analysis of §10, printed pp. 413-421 with Figures 6.1-6.3;
   (b) the realization of every abstract Vogan diagram: Knapp, Theorem 6.88,
   whose proof needs the normalized root-vector system of Theorem 6.6,
   printed pp. 349-352 and 403-406. Input (b) is the same gap already
   escalated on the pair's `thm-classification-of-real-forms-by-vogan-diagrams`.
3. **A44** — exhaustion of the classical list: the same enumeration input as
   A43(a), or an independent supplier such as the classification of order-two
   automorphisms of the classical compact groups up to conjugacy (Etingof,
   §40.3, printed pp. 188-189), which the pair's classical supplier
   `prop-classical-types-correspond-to-sl-so-and-sp` does not contain.

**Proposed remedy (single item unblocks all three):** add one item supplying
the normalized real root-vector system for complex semisimple Lie algebras
(Knapp, Theorem 6.6 with Lemma 6.4 and Corollary 2.37, printed pp. 350-352),
which is provable from the pair's existing structure theory (the Chevalley
involution on the Serre generators, invariance of the Killing form, and the
rescaling $a_\alpha a_{-\alpha}=1$, $a_\alpha^2=-c_\alpha$), together with one
item supplying the Borel-de Siebenthal reduction (Knapp, Theorem 6.96,
pp. 409-412). With the first, the surjectivity half of the Vogan
classification and hence A43(b), A44 and the converse half of A41 can be
closed; with the second, A43(a) and A44 can be closed.

## Manifest patches proposed (frontmatter `deps` differ from batch-13 manifest)

All additions below are cited in the items; the manifest rows should be
updated when the slices are merged.

- `def-satake-diagram`: + `def-cayley-transform-of-a-theta-stable-cartan-subalgebra`,
  `def-maximal-split-abelian-subspace-and-real-rank`,
  `def-restricted-root-and-restricted-root-space`,
  `thm-restricted-root-space-decomposition`,
  `thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification`,
  `def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention`,
  `def-vogan-diagram`.
- `thm-vogan-and-satake-...`: + `def-vogan-diagram`,
  `thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence`,
  `thm-conjugacy-of-compact-real-forms`, `thm-conjugacy-of-cartan-involutions`,
  `thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one`,
  `def-theta-stable-cartan-subalgebra-and-compact-split-parts`,
  `def-cayley-transform-of-a-theta-stable-cartan-subalgebra`,
  `def-maximal-split-abelian-subspace-and-real-rank`,
  `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k`,
  `def-complexification-of-a-real-lie-algebra`.
- `thm-complexification-dichotomy-...`: + `def-simple-semisimple-and-reductive-lie-algebras`,
  `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero`,
  `cor-semisimple-lie-algebras-are-centerless-and-perfect`,
  `thm-isomorphism-theorem-for-complex-semisimple-lie-algebras`,
  `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra`,
  `def-cartan-subalgebra-of-a-lie-algebra`, `def-axiom-of-choice`;
  **axiom base ZF $\to$ ZFC** (the isomorphism theorem is the single AC use,
  declared in `[A1]` and in the Remarks: identifying a complex semisimple Lie
  algebra with its complex conjugate).
- `thm-classification-of-real-semisimple-lie-algebras`: + `def-real-form-of-a-complex-lie-algebra`,
  `def-compact-real-form-of-a-complex-semisimple-lie-algebra`,
  `def-split-real-form`, `def-simple-semisimple-and-reductive-lie-algebras`,
  `def-satake-diagram`, `def-vogan-diagram`; **the manifest dep
  `prop-classical-real-forms-of-the-classical-complex-lie-algebras` was
  removed** because it created a depcheck item cycle with that item (which
  depends on this one); the classical list is now cited to Knapp §10 Figure
  6.1 by locator instead.
- `prop-classical-real-forms-...`: + `def-real-form-of-a-complex-lie-algebra`,
  `thm-real-forms-correspond-to-conjugate-linear-involutions`,
  `def-classical-complex-matrix-lie-algebras`,
  `def-compact-real-form-of-a-complex-semisimple-lie-algebra`,
  `def-split-real-form`,
  `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications`,
  `def-vogan-diagram`.
- `fs-a-real-form-is-merely-...`: + `def-complexification-of-a-real-lie-algebra`,
  `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero`.
- `fs-all-real-forms-...-are-isomorphic`: + `def-classical-complex-matrix-lie-algebras`,
  `prop-real-cartan-subalgebras-need-not-be-conjugate`,
  `def-special-linear-lie-algebra-sl-two`,
  `def-killing-form-of-a-finite-dimensional-lie-algebra`.
- `fs-all-cartan-subalgebras-...-are-conjugate`: + `def-cartan-subalgebra-of-a-lie-algebra`,
  `def-special-linear-lie-algebra-sl-two`, `thm-cartans-semisimplicity-criterion`;
  the manifest's `def-axiom-of-choice` is **not** used by this choice-free
  refutation and was dropped from the frontmatter (orchestrator should keep
  the manifest row's ZF base).
- `fs-restricted-root-systems-are-always-reduced`: + `def-reduced-crystallographic-euclidean-root-system`,
  `def-restricted-root-and-restricted-root-space`,
  `thm-restricted-root-space-decomposition`.
- `fs-a-plain-dynkin-diagram-classifies-real-forms`: + `prop-classical-types-correspond-to-sl-so-and-sp`,
  `def-classical-complex-matrix-lie-algebras`, `def-special-linear-lie-algebra-sl-two`,
  `def-killing-form-of-a-finite-dimensional-lie-algebra`,
  `prop-real-cartan-subalgebras-need-not-be-conjugate`, `def-vogan-diagram`,
  `def-satake-diagram`, `def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention`.
- `fs-global-cartan-and-iwasawa-...`: + `def-special-linear-lie-algebra-sl-two`,
  `thm-lie-subgroup-lie-subalgebra-correspondence`,
  `def-cartin-involution-of-a-real-semisimple-lie-algebra`,
  `prop-real-cartan-subalgebras-need-not-be-conjugate`.

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts` on the twelve explicit item
  paths: **10 checked, 0 failing** (definitions and the remark have no proof
  section). Canonical step numbering was adopted where the checker printed
  REPAIR (A42, A44, A50, A51 among the authored items).
- `node tools/rendercheck.mjs` on the twelve explicit paths: **OK, 12 files**.
- `node tools/depcheck.mjs --json` (repo-wide): **0 errors**; no warning names
  an item of this slice (an item cycle introduced by A44's `deps` was found by
  this check and repaired by removing the A43 $\to$ A44 edge; three
  `cited-not-in-deps` warnings on this slice's items were repaired by
  registering the cited suppliers in `deps`).
- A local script re-derived `itemHash` through `loadStep3`/`itemDecision` and
  confirmed that all twelve receipts are current (nine closed `repaired`,
  three open `escalate`).
- NOT run here: `content-policy`, `coverage-checklist`, `manifest-deps`,
  `validate-plan`, strict proof-contract checks. They need the merged batch
  manifest, coverage and contract files, which the slice rules reserve for the
  orchestrator.

## Published-defect report

No newly confirmed defect of a *published* item was found in this slice's
reading. Three items used as suppliers that are **drafts, not published**, and
their state matters for the owner's remedy:

1. `thm-existence-of-a-compact-real-form` (A7, this pair) records in its own
   Remarks that its closure computation needs the real, antisymmetric
   structure-constant normalization of Knapp Theorem 6.6 and that this input is
   missing; the same input blocks `thm-classification-of-real-forms-by-vogan-diagrams`
   (A39) and this slice's A43/A44 (see the remedy above). Suspicion level:
   confirmed missing supplier, exactly located.
2. `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`
   and `thm-root-sl-two-triple` (batch 11, drafts) carry the compensating sign
   defects reported by the slice-2 author. This slice avoided both as
   load-bearing suppliers: the bracket identity
   $[X,Y]=B(X,Y)H_\alpha$ used in A44's constructions is either displayed
   directly or avoided, and no item of this slice cites either draft.
3. `thm-classification-of-real-forms-by-vogan-diagrams` (A39) is escalated by
   the slice-2 author for its surjectivity half. Reading it for A41/A43/A44, I
   add one observation: the presentation (6.76) that A39's step 7.1 assumes
   for a compact real form with a conjugation-stable Cartan subalgebra does
   follow from the general theory (the conjugation reverses each root pair,
   the root-pair planes are orthogonal for the positive definite form, and the
   fixed Cartan part is spanned by the $iH_\alpha$), so A39's missing input is
   the existence direction only; this is an author's analysis, not a proof
   recorded in an item.


## Note for the orchestrator (cross-slice receipt impact)

The correction of the Problem 7(b) phrasing in `def-satake-diagram` (the
involution $\alpha\mapsto\alpha'$ may fix roots, e.g. real roots) changed that
item after slice 4 had already recorded receipts for its B-page items
`ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra` (depends on
`thm-complexification-dichotomy-for-a-real-simple-lie-algebra`) and
`ex-vogan-diagrams-for-real-forms-of-sl-three-c` (depends on
`prop-classical-real-forms-of-the-classical-complex-lie-algebras`). The second
B item's dependency closure reaches `def-satake-diagram` through
`thm-classification-of-real-semisimple-lie-algebras`, so its recorded receipt
hash is now stale even though its own text is unchanged; its owner should
re-record it after the merge. No other batch-13 item outside this slice depends
on the twelve items here (checked by scanning frontmatter deps).

## Uncertainty statement

- A41's Satake-to-Vogan reconstruction and A43's enumeration are not proved;
  both are escalated with the exact locators above, and the items state
  precisely what they do and do not establish.
- A44's conjugate-linear involutions for the quaternionic families
  ($\mathfrak{su}^{*}(2k)$, $\mathfrak{so}^{*}(2n)$) are written with the
  entrywise conjugation $X\mapsto\overline{X}$ and $J\overline{X}J$, not the
  transpose; the fixed-locus identifications are quoted from the source and
  the general real-form criterion, and a reviewer should re-check the block
  conventions against `def-classical-complex-matrix-lie-algebras`.
- The sign and normalization conventions of A44's step 2.1 use the pair's
  $B(h,h)=8$, $B(e,f)=4$ values from
  `prop-real-cartan-subalgebras-need-not-be-conjugate`.
