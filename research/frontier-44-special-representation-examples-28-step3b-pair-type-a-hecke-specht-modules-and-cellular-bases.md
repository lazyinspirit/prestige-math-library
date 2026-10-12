# Step 3b — scaffold audit and authoring: `type-a-hecke-specht-modules-and-cellular-bases`

Run `frontier-44-special-representation-examples-28`, batch 20 (orders 1569/1575),
role `alpha-high`, label
`step3b-pair-type-a-hecke-specht-modules-and-cellular-bases-208a7a4d099f43c0`.
A page `type-a-hecke-specht-modules-and-cellular-bases` (29 new items, all
authored here), B page `type-a-hecke-specht-modules-and-cellular-bases-examples`
(5 new items, authored here). Category
`special-topics-in-representation-theory`. Only this pair is owned; sibling
rows in the shared batch files are preserved. Report opened at entry
2026-10-10 before any edit.

## Owned IDs and open obligations at entry

A page, in the dispatch's dependency order (level, then listed order):

| level | id |
|---:|---|
| 0 | `def-cellular-algebra-basis-and-cell-module` |
| 0 | `def-e-regular-and-e-restricted-partitions` |
| 0 | `def-quantum-characteristic-of-an-invertible-hecke-parameter` |
| 0 | `lem-central-idempotent-decompositions-of-one-are-unique` |
| 0 | `lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents` |
| 0 | `lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra` |
| 1 | `def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents` |
| 1 | `def-hecke-jucys-murphy-elements-and-q-contents` |
| 1 | `def-murphy-elements-and-murphy-tableau-elements` |
| 1 | `lem-cell-form-is-associative-and-its-radical-is-a-submodule` |
| 2 | `def-type-a-q-schur-algebra-and-weyl-modules` |
| 2 | `thm-murphy-tableau-elements-form-a-cellular-basis` |
| 2 | `thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra` |
| 3 | `cor-cellular-decomposition-matrices-are-dominance-unitriangular` |
| 3 | `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras` |
| 3 | `lem-semistandard-weight-dimensions-detect-virtual-weyl-classes` |
| 9 | `def-type-a-hecke-specht-module-and-cell-form` |
| 10 | `def-alternating-weyl-and-specht-symbols-from-beta-sequences` |
| 10 | `def-jantzen-filtration-of-a-lifted-cell-module` |
| 10 | `thm-hecke-jucys-murphy-action-is-dominance-triangular` |
| 10 | `thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions` |
| 11 | `cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular` |
| 11 | `lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation` |
| 11 | `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one` |
| 11 | `thm-q-schur-weyl-weight-space-gram-determinant-hook-product` |
| 11 | `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules` |
| 11 | `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases` |
| 12 | `thm-q-schaper-virtual-radical-layer-formula` |
| 13 | `rem-general-type-a-decomposition-numbers-remain-unsolved` |

B page: `ex-hecke-jucys-murphy-elements-through-rank-four` (level 11),
`cex-residue-sequences-need-not-separate-when-e-is-at-most-n` (12),
`ex-murphy-cellular-basis-for-h3` (12),
`ex-q-schaper-for-shape-three-two-at-e-two` (13),
`cex-cellularity-does-not-make-every-cell-module-simple` (14).

Deliverables: 34 item files; `library/special-topics-in-representation-theory/type-a-hecke-specht-modules-and-cellular-bases.md`
and its `-examples` companion; the batch-20 manifest with actual deps and
recomputed levels; 34 current item decisions; a proof-contracts entry for every
proof-bearing item; this report.

Open obligations at entry:
1. Direct in-run prerequisite pairs to inspect while unfinished:
   `rim-hooks-and-the-murnaghan-nakayama-rule` (batch 19; suppliers
   `def-removable-border-strip-and-height`,
   `lem-hooks-correspond-to-removable-border-strips` for the Gram-determinant
   and q-Schaper items) and `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`
   (batch 50; suppliers `def-dj-bridge-murphy-cell-conventions`,
   `lem-dj-bridge-sign-automorphism-and-star-dual`,
   `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`,
   `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`,
   `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary` for
   `def-type-a-hecke-specht-module-and-cell-form` and
   `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`).
   At entry no supplier file exists in `items/`; the affected consumers are
   authored with the exact supplier IDs and consuming steps flagged here, and
   their decisions stay escalated until the suppliers and actual proof uses are
   reconciled.
2. The whole pair is new; the A page's 29 items are original scaffold IDs and
   need ordinary current item decisions (not owner-creation certification).
3. Choice: the scaffold declares the pair choice-free (the block definition uses
   the two local choice-free central-idempotent lemmas rather than the Artinian
   route). Recheck per item against actual suppliers; propagate any AC use.
4. Downstream consumers in batches 21, 22, 24 and 25 consume this pair's items;
   keep the item interfaces (IDs, statements, deps) as scaffolded unless a
   repair is forced, and record cross-batch changes in the shared
   cross-batch-dependencies file.
5. Owner-held history: the source20/source21 cell-head escalation is resolved
   for the manifest wording only; no fresh mathematical acceptance is claimed
   here. The batch-50 pair is an owner-authorized build target, not a supplied
   proof.

## Checkpoint log

### Level 0 (6 items) — 2026-10-10

1. `def-cellular-algebra-basis-and-cell-module` (def, L0) — authored from the
   scaffold (Graham–Lehrer axioms, cell-module actions, basis of
   $A^{\unrhd\lambda}/A^{\rhd\lambda}$), well-definedness of the actions noted
   inline; deps unchanged
   (`def-algebra-over-a-commutative-ring`, `def-left-and-right-modules`,
   `def-partial-order`). Decision `accept`. Locator: Mathas Def. 2.1 with
   Cor. 2.3 and (2.4)–(2.6), printed pp. 9–16; Mathas–Soriano §§2.1–2.5.
   Checks: precheck n/a (definition), rendercheck OK, proof-layout 0 steps.
2. `def-e-regular-and-e-restricted-partitions` (def, L0) — authored with the
   finite-`e` reduction to the published `p`-regular item, the conjugate
   dictionary $z_i(\lambda')=\lambda_i-\lambda_{i+1}$ and the $e=\infty$
   vacuity. Decision `accept`. Locator: Mathas Def. 3.35–3.37, pp. 32–34;
   Kleshchev §5.3.
3. `def-quantum-characteristic-of-an-invertible-hecke-parameter` (def, L0) —
   authored with the closed formula $[m]_q=(q^m-1)/(q-1)$ ($q\ne1$), the
   characteristic case $q=1$, and the residue identity
   $[m+e]_q=[m]_q+q^m[e]_q$ including the negative-index convention used later
   for $q$-contents. Decision `accept`.
4. `lem-central-idempotent-decompositions-of-one-are-unique` (lem, L0) —
   repaired: dependency swapped to `def-ring` (the unused
   `def-algebra-over-a-commutative-ring` dropped); proof by the orthogonal
   central idempotent calculus $ef\in\{0,e\}$, singleton $S_j$, injective and
   surjective $j\mapsto i(j)$; steps renumbered to the checker's citational
   layering (1.1, 1.2, 2.1, 3.1, 4.1, 5.1, 5.2, 6.1). Decision `repaired`
   (`dependency`). precheck PASS, proof-layout 8 steps 0 defects.
5. `lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents`
   (lem, L0) — repaired: added `thm-dimension-of-a-linear-subspace` and
   `thm-well-ordering-principle` (both choice-free) for the dimension descent;
   proof is a minimal-counterexample induction on $\dim_FD$ via the corners
   $D_u=uD$, $D_v=vD$ (steps 1.1–8.1). Decision `repaired` (`dependency`).
   The statement text's tab glitch fixed. precheck PASS.
6. `lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra` (lem, L0) —
   repaired: the star map is constructed on the presented word algebra
   $F=R^{(X^*)}$ by word reversal $\rho$, which preserves the presentation
   ideal (each relator is palindromic up to sign, steps 1.1–2.1) and descends
   to $\bar\rho$; uniqueness and $T_w^*=T_{w^{-1}}$ use the reduced-expression
   definition of $T_w$ and $\ell(w^{-1})=\ell(w)$ (steps 3.1–4.2). Added deps
   `lem-words-satisfy-the-free-monoid-universal-property`,
   `def-free-module-on-a-set-and-standard-basis`,
   `def-generated-and-principal-ideals`,
   `def-left-right-and-two-sided-ideal`, `def-quotient-ring`,
   `def-weyl-group-and-length-for-finite-gl-n`. Decision `repaired`
   (`dependency`, `proof`). precheck PASS, proof-layout 7 steps 0 defects.

Open after level 0: batch-20 manifest deps for items 4–6 must be updated to
the item lists above before the dependency-level and plan checks; all six
receipts to be re-recorded in the final sweep.

### Level 1 (4 items) — 2026-10-10

7. `def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents`
   (def, L1) — authored from the scaffold: blocks as the ideals $Ae$ for
   primitive central idempotents, the block decomposition of $1$, and the
   equivalence relation on primitive idempotents; deps unchanged. Decision
   `accept`. Locators: Mathas Ch. 2 (Notes on Chapter 2) and Appendix A;
   standard finite-dimensional algebra theory.
8. `def-hecke-jucys-murphy-elements-and-q-contents` (def, L1) — repaired:
   added `def-quantum-characteristic-of-an-invertible-hecke-parameter` (the
   $[m]_q$ normalisation for the $q$-content formula). Decision `repaired`
   (`dependency`).
9. `def-murphy-elements-and-murphy-tableau-elements` (def, L1) — repaired:
   added `def-weyl-group-and-length-for-finite-gl-n` and
   `lem-finite-weyl-strong-exchange-and-deletion`; fixed a multiline display
   block. Decision `repaired` (`dependency`).
10. `lem-cell-form-is-associative-and-its-radical-is-a-submodule` (lem, L1) —
    authored: unique bilinear form from the cellular product, symmetry via the
    anti-automorphism, associativity, adjointness identity
    $x c^{\lambda}_{uv}=\langle x,c^{\lambda}_u\rangle_\lambda c^{\lambda}_v$,
    and the radical as the kernel of $x\mapsto\langle x,-\rangle_\lambda$;
    steps 1.1–4.1. Decision `accept`. precheck PASS, rendercheck OK,
    proof-layout 6 steps 0 defects. Locators: Mathas (2.3)–(2.6); Mathas–Soriano
    (2.3) and the following paragraph.

### Level 2 (3 items) — 2026-10-10

11. `def-type-a-q-schur-algebra-and-weyl-modules` (def, L2) — authored from the
    scaffold: $S_{R,q}(n)=\mathrm{End}_H(\bigoplus_\mu m_\mu H)$ and the Weyl
    modules $W^\lambda$ as the image of the cell idempotent, with the
    semistandard-tableau indexing. Decision `accept`. Locator: Mathas Ch. 4,
    Theorems 4.8–4.16, pp. 36–44.
12. `thm-murphy-tableau-elements-form-a-cellular-basis` (thm, L2) — authored
    following Mathas's straightening chain (Lemma 3.2, Prop. 3.3, Cor. 3.4,
    Lemmas 3.9–3.14, Cor. 3.15, Prop. 3.16, Cor. 3.17, Thm. 3.18, printed
    pp. 20–31); statement repaired on the source side (the Murphy indexation and
    the dominance convention). Decision `repaired` (`source`). precheck PASS,
    rendercheck OK, proof-layout 7 steps 0 defects.
13. `thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra`
    (thm, L3 after repair) — the in-flight file was rewritten: the earlier
    draft used a "nonzero homomorphisms are dominance-monotone" step that is
    false as stated (a zero-form source label gives a counterexample), so the
    distinctness proof was replaced by a correct argument. The new proof has
    steps: 1.1 two-sidedness of $A^{\unrhd\lambda}$, $A^{\rhd\lambda}$ and the
    annihilation $A^{\unrhd\nu}\cdot C^{\lambda}=0$ whenever
    $\lambda\not\unrhd\nu$; 1.2 generation by vectors outside the form radical;
    1.3 nontrivial action of $A^{\unrhd\mu}$ on a nonzero $D^{\mu}$ via the
    element $c^{\mu}_{ut}$; 2.1 the radical as unique maximal submodule and
    $D^{\lambda}\ne0\iff$ form not identically zero; 2.2 pairwise
    non-isomorphism; 3.1 absolute irreducibility by base change of the Gram
    matrix; 3.2 completeness by the upward-cell filtration $A_j$ and the
    $A_j^2\subseteq A_{j-1}$ contradiction; 4.1 assembly. Dependency added:
    `thm-murphy-tableau-elements-form-a-cellular-basis` (needed by the
    statement's Hecke-instance sentence), so the item is now level 3; this is a
    plan-label change to report for Step 4. Decision `repaired`
    (`dependency`, `proof`). precheck PASS, rendercheck OK, proof-layout
    8 steps 0 defects. Source note: classification statements checked against
    Mathas–Soriano §2 (Graham–Lehrer Theorem 3.4 / Prop. 3.6 citations) and
    Kleshchev Theorem 5.2; the cell-form calculus against the item
    `lem-cell-form-is-associative-and-its-radical-is-a-submodule`.

### Level 3 (recomputed) — 2026-10-10

14. `cor-cellular-decomposition-matrices-are-dominance-unitriangular` (cor, L4)
    — authored: off-diagonal vanishing via the annihilation and nontrivial
    action lemmas re-derived from the cellular axioms; diagonal
    $d_{\mu\mu}=1$ by additivity along $0\to\mathrm{rad}\,C^{\mu}\to C^{\mu}\to
    D^{\mu}\to0$ together with the fact that $\mathrm{span}\{c^{\mu}_{uv}\}$
    annihilates the form radical; lower-unitriangular shape stated with the
    linear-extension convention. Added deps
    `def-cellular-algebra-basis-and-cell-module` and
    `lem-cell-form-is-associative-and-its-radical-is-a-submodule` (actually
    used). Decision `repaired` (`dependency`). precheck PASS, rendercheck OK,
    proof-layout 5 steps 0 defects.
15. `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`
    (def, L3) — authored from the scaffold: $\omega=(1^n)$, $M^\omega=m_\omega
    H=H$, $e=\varphi_{t^\omega t^\omega}$ the projection with $eSe\cong H$, and
    the exact Schur functor $F(X)=Xe$ with the right-module convention.
    Decision `accept`. rendercheck OK, proof-layout 0 steps. The source
    identification of $e$ with the projection is Mathas (4.13) with Cor (4.9),
    (4.12); the analogous statement for the cyclotomic case is proved in
    Dipper-James-Mathas, The (Q,q)-Schur algebra, Section 5 (diagonal
    semistandard elements are orthogonal idempotents whose sum is the identity,
    with $\varphi_{\omega,\omega}$ the identity on $H$).
16. `def-type-a-q-schur-algebra-and-weyl-modules` (def, L2) — repaired
    (source-level): added the semistandard-basis idempotent and weight-space
    structure ($\varphi_{TT}$ orthogonal idempotents and
    $\dim_F(W^{\lambda}\varphi_{T^\nu T^\nu})=K_{\lambda\nu}$), which the
    weight-dimension and Gram-determinant consumers require. Sources: Mathas
    Theorem 4.14 and Lemma 5.30; Dipper-James-Mathas (Q,q)-Schur Section 5.
    Decision `repaired` (`source`). rendercheck OK, precheck n/a.
17. `lem-semistandard-weight-dimensions-detect-virtual-weyl-classes` (lem, L3)
    — authored: rank additivity for idempotent endomorphisms over short exact
    sequences, additivity of the weight functionals over composition series,
    invertibility of the weight matrix $X$ from $K=dX$ with $d$ and $K$
    unitriangular, and the Grothendieck-class conclusion. Added
    `thm-jordan-holder-theorem-for-modules` (actually used). Decision `repaired`
    (`dependency`). precheck PASS, rendercheck OK, proof-layout 5 steps 0
    defects.

### Level 9 — 2026-10-10

18. `def-type-a-hecke-specht-module-and-cell-form` (def, L9) — authored from
    the scaffold: Murphy cell module with the fixed-first-index basis and its
    product-defined cell form, then the signed conjugate normalization
    $S^{\lambda}:=(S^{\lambda'}_{\mathrm M})^\theta$ with
    $D^{\lambda}=(D^{\lambda'}_{\mathrm M})^\theta$ and the $e$-regular/
    $e$-restricted label bookkeeping. **Escalated**: the batch-50 suppliers
    `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`,
    `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` and
    `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary` do
    not exist in `items/` yet; the consuming passage is the Convention
    paragraph (the two "Thus ..." identifications and the characteristic-two
    sign remark). The existing sibling supplier
    `lem-dj-bridge-sign-automorphism-and-star-dual` was read and used for
    $\theta$. Decision `escalate` (`dependency`) until the suppliers are
    authored and the uses reconciled. rendercheck OK, precheck n/a,
    proof-layout 0 steps.

### Level 10 (recomputed) — 2026-10-10

19. `def-alternating-weyl-and-specht-symbols-from-beta-sequences` (def, L10) —
    authored from the scaffold: sorting sign and recovery formula
    $\nu'_i=b_i-n+i$, the vanishing rule for repeated or negative sorted
    entries, and the branching recursion for the signed semistandard
    multiplicities, with the two source caveats (the recovery formula as the
    inverse of the column convention; recursion (5.22) for non-beta sequences)
    stated in the Definition. Decision `accept`. rendercheck OK, precheck n/a,
    proof-layout 0 steps.
20. `def-jantzen-filtration-of-a-lifted-cell-module` (def, L10) — authored from
    the scaffold: the submodules $M(i)$ cut out by the integrality condition on
    the form, the stabilising descending chain with $M_F(1)=\mathrm{rad}\,M_F$
    and stable value $0$, under exactly the PID/prime/non-degeneracy
    hypotheses. Decision `accept`. rendercheck OK, precheck n/a, proof-layout
    0 steps.
21. `thm-hecke-jucys-murphy-action-is-dominance-triangular` (thm, L10) —
    authored from the scaffold: the module triangular identity from the
    James–Mathas Murphy-basis triangularity (clean statement read in Mathas,
    arXiv:1310.2142, Lemma 1.6.2, printed p. 8), the triangular matrix
    statement and the commutativity/centrality consequences, steps 1.1–3.1.
    Decision `accept`. precheck PASS, rendercheck OK, proof-layout 3 steps
    0 defects.
22. `thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions`
    (thm, L10) — **escalated** (`dependency`, `source`): consumes the escalated
    signed-normalization item and rests on Mathas Theorem 3.39 with Lemmas
    3.35/3.37/3.38 and Corollary 3.40, read at statement and locator level
    (equivalent clean statement checked in Kleshchev Theorem 5.4 with Remark
    5.5). This round: the inline "Mathas, Corollary 3.40" locator was moved out
    of step 1.2's text into the frontmatter reference locator, because the
    strict proof-contract grammar rejects foreign `d.d` tokens in step blocks
    (0 of the other 581 items of this run carry one). precheck PASS,
    rendercheck OK, proof-layout 4 steps 0 defects.

### Level 11 (recomputed) — 2026-10-10

23. `cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular` (cor,
    L11) — authored from the scaffold: the $\theta$-twist is an exact
    equivalence carrying composition series, the Murphy corollary gives
    vanishing unless $\lambda'\unrhd\mu'$, conjugation reverses dominance, and
    $d_{\mu\mu}=1$; steps 1.1–3.1. Decision `accept`; declared the cited
    `def-quantum-characteristic-of-an-invertible-hecke-parameter` in the deps
    after depcheck's `cited-not-in-deps` finding. precheck PASS, rendercheck
    OK, proof-layout 4 steps 0 defects.
24. `lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation` (lem,
    L11) — authored from the scaffold via the Smith normal form bases of
    `thm-smith-normal-form-existence-over-a-pid`: layer dimensions count
    elementary divisors with valuation at least $k$, and the summation gives
    $\nu_\pi(G)$ basis-independently; steps 1.1–3.1. Decision `accept`.
    precheck PASS, rendercheck OK, proof-layout 3 steps 0 defects.
25. `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
    (prop, L11) — **escalated** (`dependency`): flagged consumer of the
    unauthored batch-50 suppliers
    `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` and
    `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`,
    cited in F1 and used at steps 1.1 and 2.1 (Murphy-basis specialization,
    module/form comparison, label dictionary). All other steps rest on
    published suppliers present in the library. The contract entry for F1
    therefore leaves exactly the two citations to the missing items
    uncontracted (`citation-fact-uncontracted`, the only two strict errors of
    the batch-20 contract file). precheck PASS, rendercheck OK, proof-layout
    3 steps 0 defects.
26. `thm-q-schur-weyl-weight-space-gram-determinant-hook-product` (thm, L11) —
    **escalated** (`dependency`, `source`). The two batch-19 suppliers
    `def-removable-border-strip-and-height` and
    `lem-hooks-correspond-to-removable-border-strips` are now authored: their
    statements were read this round against the statement's exponent
    interpretation and step 3.1 ($R^{\lambda}_{ac}$ unwrapped as a removable
    border strip of size $h^{\lambda}_{ac}$, sign $(-1)^{l_{ab}+l_{ac}}$), the
    shared-ledger rows were flipped `open` → `verified`, and the dependency
    ground of the escalation is cleared. The remaining escalation ground is
    source-reading only: Mathas Theorems 5.18/5.19 and Lemmas 5.22–5.26 were
    used at statement/locator level (the full derivations were not re-read).
    Decision stays owner-held. precheck PASS, rendercheck OK, proof-layout
    4 steps 0 defects.
27. `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`
    (thm, L11) — **escalated** (`dependency`, `source`): consumes the escalated
    signed-normalization item and cites Mathas Proposition 4.19 with Theorem
    3.39, read at statement/locator level. This round: the stale internal
    reference "using steps 1.1-1.2" in step 4.1 was corrected to "steps 1.1 and
    2.1" (the item has no step 1.2), the inline Theorem 3.39 locator was moved
    into F4, and the cited `def-type-a-q-schur-algebra-and-weyl-modules` was
    declared in the deps. precheck PASS, rendercheck OK, proof-layout 5 steps
    0 defects.
28. `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases` (thm,
    L11) — **escalated** (`dependency`, `source`): consumes the escalated
    signed-normalization item; follows Mathas Lemma 3.32 and Theorem 3.34 with
    the Hu–Mathas corrected coefficient branches, read at statement/locator
    level. This round: the stale "1.2-3.2" in step 5.1 was corrected to the
    enumerated steps 1.1, 1.2, 2.1, 3.1, 4.1, and the cited
    `def-hecke-jucys-murphy-elements-and-q-contents` was declared in the deps.
    precheck PASS, rendercheck OK, proof-layout 6 steps 0 defects.
29. `ex-hecke-jucys-murphy-elements-through-rank-four` (ex, B page, L11) —
    authored/verified: the JM elements through rank four, the contents
    $0,-1,1,2$ of $\begin{smallmatrix}1&3&4\\2\end{smallmatrix}$, the
    eigenvalues $0,-q^{-1},1,1+q$ and the $q=1$ specialization. Decision
    `accept`. This round: the verification steps were moved under a
    `## Verification` heading — they had been sitting outside any proof-like
    section, so both `proof-layout` and the contract parser saw 0 steps and the
    facts F1/F2 could not be contracted at all. precheck PASS, rendercheck OK,
    proof-layout 4 steps 0 defects.

### Level 12 (recomputed) — 2026-10-10

30. `thm-q-schaper-virtual-radical-layer-formula` (thm, L12) — **escalated**
    (`dependency`, `source`). The batch-19 suppliers are authored and
    reconciled this round: [F4] in step 1.1 uses the moving strip
    $R^{\lambda}_{ac}$ of size $h^{\lambda}_{ac}$ and the hook/border-strip
    bijection exactly as `def-removable-border-strip-and-height` and
    `lem-hooks-correspond-to-removable-border-strips` supply them, and the
    shared-ledger rows were flipped `open` → `verified`. The remaining
    escalation ground is source-reading: Mathas Theorem 5.31 and Corollary 5.32
    were used at statement/locator level, and the item also consumes the
    escalated Schur-functor item. Declared the cited
    `def-jantzen-filtration-of-a-lifted-cell-module` and
    `def-type-a-q-schur-algebra-and-weyl-modules` in the deps (depcheck
    `cited-not-in-deps`). precheck PASS, rendercheck OK, proof-layout 3 steps
    0 defects.
31. `cex-residue-sequences-need-not-separate-when-e-is-at-most-n` (cex, B
    page, L12) — authored: at $F=\mathbb C$, $q=-1$, $e=2$, $n=3$,
    $\lambda=(2,1)$ the two standard tableaux have colliding q-content
    sequences $(0,1,1)$ and the interpolation denominator
    $[1]_{-1}=[-1]_{-1}$ vanishes, refuting the droppability of $e>n$.
    **Escalated** (`dependency`): consumes the escalated supplier
    `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases` in the
    refutation of its hypothesis and in the reference to its projector formula;
    decision stands owner-held until that supplier is resolved. precheck PASS,
    rendercheck OK, proof-layout 3 steps 0 defects.
32. `ex-murphy-cellular-basis-for-h3` (ex, B page, L12) — authored/verified:
    the $1+4+1=6$ Murphy elements of $H(S_3)$, the off-diagonal star-pair
    $m_{tu}^*=m_{ut}$ and the $q=1$ specialization. Decision `accept`. This
    round: the verification steps were placed under a `## Verification` heading
    (same invisible-steps defect as item 29), and the ambiguous chain
    "$m_{(1^3)}=T_1=1$" was rewritten as the trivial-group sum
    "$m_{(1^3)}=1$". precheck PASS, rendercheck OK, proof-layout 4 steps
    0 defects.

### Level 13 (recomputed) — 2026-10-10

33. `rem-general-type-a-decomposition-numbers-remain-unsolved` (rem, L13) —
    authored: the two real but limited constraints (dominance
    unitriangularity; the virtual q-Schaper identity), the special regimes that
    do determine entries, and the recorded open boundary for general
    decomposition numbers; no proof obligation. Decision `accept`. rendercheck
    OK, precheck n/a, proof-layout 0 steps.
34. `ex-q-schaper-for-shape-three-two-at-e-two` (ex, B page, L13) — authored:
    the hook valuations $(1,1,0,0)$ at $\hat q=-1$, the virtual sums
    $[W^{(3,1^2)}_F]+[W^{(2^2,1)}_F]-[W^{(1^5)}_F]$ and
    $2[D^{(2^2,1)}_{\mathrm M}]$, the entry $d_{(3,2),(2^2,1)}=1$ pinned by
    the dimension count and the conjugate translation to the Dipper–James
    convention. **Escalated** (`dependency`, `source`): consumes the escalated
    q-Schaper theorem, and the source's Examples 5.28/5.33 were used at
    locator level. This round: the inline "Mathas, Examples 5.28 and 5.33"
    locator was moved out of step 2.1 into the frontmatter reference locator.
    precheck PASS, rendercheck OK, proof-layout 4 steps 0 defects.

### Level 14 (recomputed) — 2026-10-10

35. `cex-cellularity-does-not-make-every-cell-module-simple` (cex, B page,
    L14) — authored: the geometric-series algebra $F[x]/(x^2)$ instance
    ($D^2=0$ with $C^2\ne0$), the characteristic-two trivial-sign Hecke
    instance ($S^{(1,1,1)}\cong D^{(3)}$, $D^{(1,1,1)}=0$) and the reducible
    cell module $W^{(3,2)}_F$ with radical
    $[L^{(3,1^2)}_F]+2[L^{(2^2,1)}_F]\ne0$. **Escalated** (`dependency`,
    `source`): parts (b) and (c) consume the escalated Hecke classification and
    q-Schaper items and the Mathas Example 5.33 computation. precheck PASS,
    rendercheck OK, proof-layout 4 steps 0 defects.

## Handoff — 2026-10-10

**Completed IDs.** All 34 owned items are authored on disk, with the A page
`type-a-hecke-specht-modules-and-cellular-bases` (29 items) and the B page
`type-a-hecke-specht-modules-and-cellular-bases-examples` (5 items) rendered
under `library/special-topics-in-representation-theory/`. The batch-20 manifest
`research/frontier-44-special-representation-examples-28-batch-20.pages.json`
carries the actual deps and recomputed levels for every owned item (sibling
rows: none — this batch holds only this pair). Item decisions: 24 accept/
repaired receipts current against the final inputs; 10 owner-held escalations
(listed below). No new item IDs were created; no published content was edited.

**Checks actually run (final, after the last edit).**

- `node tools/proof-layout.mjs items/<34 owned items> <both page files>`
  (single batched command): `36 items, 111 steps, 0 defects`.
- `node tools/precheck.mjs` over the same explicit paths (`items/...`):
  `22 checked, 0 failing — all clean` (definitions and the remark are
  precheck `n/a`).
- `node tools/rendercheck.mjs` over the 34 items and both pages:
  `36 file(s): no wikilink inside math, no nested or unbalanced delimiters,
  no multiline display block, KaTeX parses, YAML parses`.
- `node tools/prosecheck.mjs` over the same 36 files: `0 error(s),
  0 warning(s)`.
- `node tools/content-policy.mjs research/...-batch-20.pages.json`:
  `34 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/...-batch-20.pages.json`:
  `34 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run ...`: no mismatch for any
  of the 34 owned IDs (the run-wide command is red on unrelated pairs' levels).
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --run ...`:
  exit 1 run-wide. Nothing attributable to this pair except its pre-existing
  advisory `[redundant-prereq]` rows (23 lines) about the shared canonical
  `requires` chain — reported for Step 4, not hidden; no `[undeclared-prereq]`
  and no `[b-leaf]` finding names this pair.
- `node tools/proof-contract.mjs research/...-batch-20.proof-contracts.json
  --strict`: `34/34 item(s) checked`, **2 errors**, both
  `citation-fact-uncontracted` for F1 of
  `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
  against the two unauthored batch-50 items (below). One nonfatal
  `shotgun-bracket` warning on the star-automorphism item's step 1.1.
  All citations carry exact quotes and declared sources; the three undeclared
  citations found by depcheck and 60 first-pass contract defects were repaired.
  `boundary-audit` reports no template clusters and no contradicted rows;
  `citation-fidelity --fail-on-missing-quote` reports no missing quote and no
  widening candidate; `finite-smoke` and `risk-report` exit 0.
- `node tools/depcheck.mjs` / `fwdcheck.mjs` (run-wide, exit 1 on other pairs):
  the only findings on this pair's items are `dep-unresolved` /
  `link-unresolved` / `link-unplanned` for the three unauthored batch-50 item
  IDs, plus nothing else. All `cited-not-in-deps` findings on this pair were
  repaired by declaring the cited items.
- `node tools/coverage-checklist.mjs research/...-batch-20.coverage.json
  --require-destination`: `2 page(s), 78 harvested result(s), 0 error(s)`,
  one pre-existing warning (B page 5/21 harvested results scaffolded, declines
  confirmed at 3a).
- `node tools/frontier-dependency-ledger.mjs refresh --run ...`: refreshed and
  deduplicated; the five `open` batch-20 rows (page ← rim-hooks; the two
  Gram-determinant and two q-Schaper item rows) were flipped to `verified`
  after reading the now-authored batch-19 supplier statements. The batch-50
  rows and the two owner-repair rows were preserved untouched.
- `node tools/step3-decisions.mjs check --run ... --phase final`: 24 owned
  items closed; the 10 escalations below return `owner=true` (owner-held).
- `node tools/depsource.mjs` (frontier wrapper): OK, 0 unresolved.

**Added suppliers.** None — no new item ID, page, or pair was created in this
round (the pair's scaffold inventory is unchanged at 29 + 5). Dependency
*declarations* added, all verified to exist: `def-quantum-characteristic-of-an-
invertible-hecke-parameter` (cor-type-a); `def-cellular-algebra-basis-and-cell-
module`, `def-generic-type-a-hecke-algebra` (thm-murphy-basis);
`def-jantzen-filtration-of-a-lifted-cell-module`,
`def-type-a-q-schur-algebra-and-weyl-modules` (thm-q-schaper);
`def-partition-young-diagram-and-conjugate-partition` (thm-q-schur-gram);
`def-hecke-jucys-murphy-elements-and-q-contents` (thm-separated);
`def-cellular-algebra-basis-and-cell-module` (thm-nonzero-cell-heads);
`def-type-a-hecke-specht-module-and-cell-form` (cor-type-a);
`def-type-a-q-schur-algebra-and-weyl-modules` (thm-schur-functor).

**Repairs this round beyond the per-item authoring.** (a) The two B-page
examples `ex-hecke-jucys-murphy-elements-through-rank-four` and
`ex-murphy-cellular-basis-for-h3` had their numbered verification steps outside
any proof-like section; both now carry `## Verification`, so the steps are
seen by `proof-layout` and the proof contracts (4 steps each, 0 defects).
(b) Five items carried source-manuscript numbers inside proof steps
(`thm-murphy-basis`: Lemmas/Propositions 3.9–3.17; `thm-simple`: Corollary
3.40; `thm-q-schur-gram`/`thm-schur-functor`/`thm-separated`: stale internal
step ids 1.3, 1.2, 3.2; `ex-q-schaper`: Examples 5.28/5.33). Foreign `d.d`
tokens are uncontractable under the strict grammar (0 of the run's other 581
contracted items contain one), so the locators were moved to the frontmatter
reference locators or to F-block text, the stale internal ids were corrected to
the actual step numbers, and no mathematical claim changed.

**Published concerns.** None new about published items. The previously
recorded caveats stand: (i) the Mathas manuscript's remark after Theorem 2.13
says "non-degenerate" where "not identically zero" is required — every item
here uses the corrected form; (ii) the 1998 manuscript's Theorem 3.34(ii)
`t▷s` branch is inconsistent with the Hecke relations, so the corrected
Hu–Mathas coefficient system is used in
`thm-separated-hecke-residues-...`; (iii) the source results read at
statement/locator level only — Mathas Theorems 3.39/Corollary 3.40, Theorems
5.18/5.19, Lemmas 5.22–5.26, Theorem 5.31/Corollary 5.32 and Proposition 4.19
— are declared as unresolved qualifications on the escalations below.

**Open obligations (owner-held or supplier-gated; none silently cleared).**

1. Batch-50 suppliers not yet on disk:
   `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`,
   `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`,
   `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`.
   Consumers and consuming steps: `def-type-a-hecke-specht-module-and-cell-form`
   (Convention paragraph: the two "Thus ..." identifications and the
   characteristic-two remark; deps and wikilinks unresolved) and
   `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
   (F1, used at steps 1.1 and 2.1; the only two strict contract errors). The
   shared-ledger rows for these edges are owner-verified history; the item files
   themselves are still being authored by the batch-50 pair. When they land:
   re-run `node tools/regen-contract-entries.mjs
   research/frontier-44-special-representation-examples-28-batch-20.proof-contracts.json
   prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one` and
   re-check `--strict`; the unresolved links then clear in depcheck/fwdcheck
   automatically.
2. Ten owner-held escalations, to be resolved by the owner once the supplier
   side is complete: `def-type-a-hecke-specht-module-and-cell-form`,
   `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
   (batch-50 suppliers); `thm-q-schur-weyl-weight-space-gram-determinant-hook-
   product`, `thm-q-schaper-virtual-radical-layer-formula` (batch-19 suppliers
   now reconciled; remaining ground is the statement-level source reading);
   `thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions`,
   `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-
   modules`, `thm-separated-hecke-residues-give-seminormal-idempotents-and-
   bases`, `cex-residue-sequences-need-not-separate-when-e-is-at-most-n`,
   `ex-q-schaper-for-shape-three-two-at-e-two`,
   `cex-cellularity-does-not-make-every-cell-module-simple` (cascades through
   the signed-normalization item and the statement-level source caveats).
3. Step 4 plan-label changes to carry: `thm-nonzero-cell-heads-classify-the-
   simple-modules-of-a-cellular-algebra` 2 → 3 (added the Murphy-basis
   supplier) and `cor-cellular-decomposition-matrices-are-dominance-
   unitriangular` 3 → 4 (added the cellular-basis and cell-form suppliers);
   every recomputed level is already recorded in the manifest and item
   frontmatter and `item-dependency-levels check` is clean for this pair.
4. The manifest `requires` list of the A page still carries the advisory
   `[redundant-prereq]` rows of the shared canonical chain; the declared list was
   not edited (plan-level Step 4 material).
5. Downstream contract regeneration (batch-22 owner): the merged strict run
   reports `citation-fact-uncontracted` for
   `prop-schur-functor-compares-first-level-branching-with-hecke-restriction`
   F4 → `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-
   simple-modules` and F5 →
   `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`:
   both source items now exist and their statements are stable, so the fix is
   `node tools/regen-contract-entries.mjs
   research/frontier-44-special-representation-examples-28-batch-22.proof-contracts.json
   prop-schur-functor-compares-first-level-branching-with-hecke-restriction`
   on the batch-22 side, not a change to this pair.

**Contract file.** `research/frontier-44-special-representation-examples-28-
batch-20.proof-contracts.json` (version 1) covers all 34 items: exact quotes and
uses for every fact link, per-step derivations with stated inputs, and item-
specific boundary rows for all eight axes (272 rows; I checked the empty, zero,
one, degenerate, endpoints, Choice and both iff cases per item, explaining the
inapplicable axes concretely).
