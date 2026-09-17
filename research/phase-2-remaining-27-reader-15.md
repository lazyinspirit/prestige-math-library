# Step 5a reader report — batch `15`, run `phase-2-remaining-27`

Reader label: `reader-15` (covers 15). Scope: the two pages of
`research/phase-2-remaining-27-batch-15.pages.json` and all 33 items listed
there, plus the dependencies and primary sources opened to verify claims.

Status: COMPLETE. Six in-flight carriers were repaired (five items and assigned
A-page prose); one inference that I could not repair with confidence is returned
in the findings JSON; limitations are recorded in §7.

## 1. Opened inventory

### Pages

- A `shelahs-baire-property-model-and-inner-model-lower-bounds` (order 703, 29
  items) — read in full, including the item list; prose edited (R6).
- B `shelahs-baire-property-model-and-inner-model-lower-bounds-examples`
  (order 704, 5 items) — read in full; not edited.

### Items (all 33 opened and read in full)

A page, in order:

1. `def-shelah-sweetness-model` — verified clause by clause against Shelah
   Definition 7.2(1)/7.2A and the 7.9(2) extension clauses, with the source's
   larger-is-stronger order translated to the library's smaller-is-stronger
   order; the comparable reformulation of 7.2(1)(d) is proved correctly in both
   directions. Sound.
2. `lem-shelah-sweet-forcings-are-sigma-directed-ccc` — verified; the proof
   works for a sweet $P$ itself, which is stronger than source Claim 7.3(1)
   (stated there for $P\le BA(Q)$ with $Q$ sweet). Sound.
3. `lem-shelah-sweet-density-transfer-along-complete-suborders` — verified
   against source Claim 7.4 (both parts), including the recursive bad-witness
   construction under DC and the density-below-$p$ argument. Repaired (R4).
4. `thm-shelah-sweet-amalgamation-preserves-sweetness` — verified against Lemma
   7.5 and Claim 7.12: the two successive applications of 7.4(2), the definition
   of $m(q_1,q_2)$, its stability, the classes $E_n$, directedness, the
   sequential clause and the transfer clause all match the source. Repaired (R5).
5. `def-shelah-universal-meagre-forcing` — three false claims found and repaired
   (R1). Sound after repair.
6. `lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets` —
   verified: the grafting tree $T''$ is a tree, perfect, nowhere dense, with the
   recorded initial tree preserved; $[T'']$ is the union of $[T]$ with the
   finitely many homeomorphic images of $[S]\cap[s_i]$; the envelope
   $E=\bigcup_m\pi_m([U_G])$ is meagre and absorbs every old meagre set. Sound.
7. `thm-shelah-universal-meagre-composition-preserves-sweetness` — verified
   against Composition Lemma 7.6 and Subclaim 7.8 (classes, moduli, omission
   agreement, directedness, sequential clause, the diagonal nowhere-density
   argument, and the extension-of-models clauses). Repaired (R3).
8. `lem-shelah-continuous-unions-of-sweetness-models` — verified against Claim
   7.10; the cofinal-subsequence reduction, countable class count, directedness,
   sequential clause and transfer clause are correct. One compressed phrase in
   step 4.1 (noted in §5) closes at once. Sound.
9. `thm-shelah-sweet-partial-isomorphism-extension` — verified as a faithful
   rendering of Claim 7.13(1)-(2) and its $\omega$-iteration; the statement's
   countable-generation hypothesis is a weakening of 7.13 and is used in R3/F-1.
   Sound.
10. `thm-shelah-ch-omega-one-sweet-construction` — verified against Main Lemma
    7.14 (a),(d) and the bookkeeping; the union-level homogeneity clause (b) is
    not established by the proof as written: F-1 in §3. Defective.
11. `lem-shelah-real-name-capture-and-coded-meagre-unions` — verified: capture
    of real/Borel-code/countable-ordinal-sequence names over a stage, the
    real-and-ordinal presentation over $L$, and the UM-quotient absorption.
    Label gap noted in §5. Sound.
12. `lem-shelah-homogeneous-truth-has-baire-representatives` — verified as
    Solovay's Cohen-genericity argument given the homogeneity input of [F2]; the
    input's supplier is F-1. Sound conditional on F-1.
13. `def-shelah-hereditarily-ordinal-sequence-definable-model` — verified; the
    definition matches the published Solovay $HOD(S)$ presentation, and the
    real-ordinal presentation is claimed only over the $L$ branch, as it should
    be. Sound.
14. `lem-shelah-inner-model-is-closed-under-ambient-omega-sequences` — verified;
    mirrors the published Solovay closure lemma, with AC used once to select
    codes (declared). Sound.
15. `thm-shelah-inner-model-satisfies-zf-and-dependent-choice` — verified: ZF
    by rank-bounded definability closure and DC from closure under ambient
    $\omega$-sequences plus ambient AC (declared). Sound.
16. `thm-shelah-inner-model-all-sets-of-reals-have-baire-property` — verified
    conditional on the homogeneity supplier; the code-transfer to $N$ is
    correct. Sound conditional on F-1.
17. `thm-baire-property-model-equiconsistent-with-zfc` — verified against
    Shelah 7.17 and the remark: both directions, no inaccessible hypothesis.
    Sound.
18. `def-boldface-sigma-one-three-measurability` — verified against the setup of
    Ishii Theorems 3.3/3.4; including $\Sigma^1_2\subseteq\Sigma^1_3$ by a dummy
    quantifier and the Cantor/Baire transfer. Sound.
19. `def-rapid-and-raisonnier-filters` — verified against Ishii Definition 3.2,
    Lemma 3.6 and Definition 3.3, including the uniform-bounding form and
    $H(\overline X)=H(X)$. Sound.
20. `lem-raisonnier-family-is-a-sigma-one-three-filter` — verified against Ishii
    Lemma 3.8 and Lemma 3.9 ($\aleph_1$-regularity + GCH in $L[x]$ for
    properness, cylinder covers for the Fréchet filter, tree-coded covers for
    the $\Sigma^1_3(x)$ complexity). Sound.
21. `thm-rapid-filters-are-not-lebesgue-measurable` — verified against Ishii
    Lemma 3.7 (Mokobodzki); the numeric estimate in step 3.2 was defective and
    is repaired (R2). Sound after repair.
22. `lem-measurable-null-code-orders-bound-constructible-null-unions` — verified
    against Ishii Definition 3.4 and Lemma 3.10: $A(x)$ is $\Sigma^1_2(x)$, the
    disjointification, the Fubini step and the outer-measure conclusion. Sound.
23. `lem-uniform-null-g-delta-capture-functions` — verified against Ishii Lemma
    3.11, including the size bound $|\varphi_U(n)|\le 2^{n+1}$, the $1-x\le
    e^{-x}$ estimate, finiteness of every $A_s(n)$, the Baire argument in the
    closed subspace $K$ and model-membership of the codes. Sound.
24. `thm-raisonnier-filter-is-rapid-from-null-code-measurability` — verified
    against Ishii Theorem 3.12, including the definition of $a$, the branching
    argument giving $|a\cap(n_{i-1},n_i]|\le|\varphi_U(i)|\le2^{i+1}$ and the
    bound $|a\cap n_i|\le 2^{i+2}-2$. Sound.
25. `lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one` —
    verified against Ishii Lemma 3.5 (regularity via CC, GCH in $L$, the real
    coding a bijection). Sound; see §5 for a superfluous CC appeal.
26. `thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l` —
    verified against Ishii Theorem 3.4 with the contrapositive form of Theorem
    3.3; the contradiction chain is correct. Sound.
27. `thm-all-real-sets-measurable-gives-an-inaccessible-inner-model` — verified;
    semantic conclusion plus fragment-by-fragment compiler. Sound.
28. `thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible` —
    verified; the inaccessible is confined to the Solovay branch. Sound.
29. `thm-shelah-baire-model-separates-baire-property-from-measurability` —
    verified against Shelah 7.16/7.17 and the discussion after Ishii Theorem
    3.2: the two-case choice of $N_0$, ccc preservation, $L^N=N_0$ and the
    measurability contradiction. Sound.

B page, in order:

30. `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets` — verified: the
    grafting construction, the direct extension, the finite subunion of the
    envelope, and the level-by-level display for $\{0^\omega\}$. Sound.
31. `ex-raisonnier-first-difference-cover` — verified against Ishii Lemma 3.8's
    Fréchet part, including the $n=0$ case. Sound.
32. `ex-uniform-null-capture-on-a-block-function` — verified: $N_f$ for
    $f\equiv0$ is a null $G_\delta$ and the capture $0\in\varphi_U(n)$ is
    eventual. Sound.
33. `fs-the-baire-property-model-needs-an-inaccessible` — verified: the
    equiconsistency theorem refutes the alleged inaccessible requirement, and
    the contrast with universal measurability is exact. Sound.
34. `ex-sweet-amalgam-over-a-common-complete-subalgebra` — verified: the
    modulus, the $E_n$-classes (with the common modulus $m$), the canonical
    complete embeddings and the ccc instance. Sound.

### Primary sources opened (complete relevant sections read)

- Saharon Shelah, *Can You Take Solovay's Inaccessible Away?*
  (https://shelah.logic.at/files/95333/176.pdf), Section 7, printed pp. 33-46:
  Notation 7.1, Definition 7.2, 7.2A, Claims 7.3, 7.4, Lemma 7.5, Composition
  Lemma 7.6 with Subclaim 7.8, Definition 7.7, Definition 7.9, Claim 7.10,
  Claim 7.11, Claim 7.12, Claim 7.13, Main Lemma 7.14, Claim 7.15, Main Theorem
  7.16, Conclusion 7.17, Concluding Remarks (1)-(4), and the Claim on p. 44.
  (Used in particular for R1, R3, R4 and F-1.)
- Hiromi Ishii, *Regularity Properties and Inaccessible Cardinals*
  (https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf),
  Chapter 3, printed pp. 43-51: Definition 3.1, Theorems 3.1-3.4, Lemmas 3.5,
  3.6, 3.7, 3.8, 3.9, 3.10, 3.11, Theorem 3.12 and the proofs of Theorems 3.3
  and 3.4. (Used for items 18-29 and 30-33.)

### Published dependencies opened

- `items/def-trees-and-bodies-on-discrete-alphabets.md` (full).
- `items/def-nowhere-dense-meagre-and-residual-subsets.md` (nowhere-density
  clause).
- `items/def-forcing-preorder-compatibility-and-filter.md` (order and
  compatibility clauses — confirms $q\le p$ means $q$ stronger).
- `items/def-complete-boolean-algebra-and-regular-open-sets.md` (order and
  order-dense embedding clauses).
- `items/def-two-step-forcing-iteration.md` (full — it does not define $Q/P$;
  see R6 and §5).
- `items/thm-forcing-theorem.md` (frontmatter, statement, first facts).
- Statement-level text of `def-filter`, `def-countable-choice`,
  `def-lambda-system`, `thm-dynkin-pi-lambda`, `thm-lebesgue-density-theorem`,
  `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` was read through the
  batch proof contract's verified citation quotes.

## 2. Repairs

Every repair is in an in-flight item of this batch or in assigned A-page prose.
After the edits, `reflow` reported each file already canonical (`unchanged`) and
`precheck` reported `all clean` for each changed item; the batch proof contract
validates with 0 errors and 0 warnings (34/34 items). No changed item carried a
`verification.judge` record, so there was no stale judge stamp to remove.

### R1 — `items/def-shelah-universal-meagre-forcing.md` (material)

Confirmed defects, all contradicted by the source and by elementary examples:

- "$\mathrm{UM}$ is nonempty because the binary tree itself is perfect and
  nowhere dense" — $2^{<\omega}$ is perfect but $[2^{<\omega}]=2^\omega$ has
  nonempty interior, so it is not nowhere dense. Replaced by the explicit
  witness $T_0=\{\sigma:\sigma$ contains no two consecutive $1$s$\}$, which is
  perfect and has empty interior.
- "Any two conditions $(t_1,T_1)$, $(t_2,T_2)$ are compatible" — false. With
  $|t_1|=|t_2|=2$, $T_1$ the tree with no two consecutive $1$s and $T_2$ the
  tree with no two consecutive $0$s, $t_1\ne t_2$ on level $2$, and a common
  strengthening would have to record both, which is impossible. Shelah's own
  proofs only ever combine conditions with a common recorded tree (7.6 condition
  (b) uses $(p^*,(t,T_1\cup T_2))$ with $t=t_1=t_2$). Replaced by the correct
  criterion: compatible exactly when the recorded trees agree on the shorter
  level, with the union tree again perfect and nowhere dense.
- "the conditions with $|t|=n$ form a directed set below each condition" —
  false for the same reason (conditions with the same height and different
  recorded trees are incompatible). Replaced by the correct decomposition: the
  conditions carrying one fixed recorded tree $t$ are pairwise compatible (their
  trees agree below level $|t|$, so the union is again a witness tree with the
  same recorded tree), and there are only countably many finite $t$; hence
  $\mathrm{UM}$ is a countable union of directed sets and every antichain meets
  each class in at most one element. The ccc conclusion itself is unchanged and
  correct.
- "perfect nowhere-dense subtree in the sense of [trees] and [nowhere dense]" —
  neither cited item defines perfection of a subtree. The definition now reads
  "a subtree … that is **perfect** — every node of $T$ has two incomparable
  extensions in $T$ — and whose body $[T]$ is nowhere dense".

### R2 — `items/thm-rapid-filters-are-not-lebesgue-measurable.md` (material)

The proof of Mokobodzki's lemma (Ishii Lemma 3.7) contained a defective estimate
in step 3.2: with $H_i=\{x:\forall m\in[\operatorname{lh}(s_i),n_{i+1}]\ x(m)=1\}$
the measure of $H_i$ is $2^{-(n_{i+1}-\operatorname{lh}(s_i))}$, which is not at
least $2^{-(i+2)}$ in general, so the displayed chain
$\nu(H_i\cap[s_i]\cap B)>2^{-(n_i+i+2)}$ did not follow. Repairs: $H_i$ is now
defined by the $a$-coordinates alone,
$H_i=\{x:x(m)=1$ for every $m\in a\cap[\operatorname{lh}(s_i),n_{i+1})\}$, which
is still independent of $[s_i]$ and has $\nu(H_i)\ge2^{-|a\cap n_{i+1}|}$; step
2.2 now obtains $|a\cap n_{i+1}|\le i$ by applying rapidity to the increasing
function $f(n)=n_{n+1}$ (the heights of step 1.2 are increasing), which is the
uniform-bounding form with room to spare; and step 3.2 now displays the correct
chain
$\nu(H_i\cap[s_i]\cap B)\ge\nu(H_i)\nu([s_i])-\nu([s_i]\setminus B)>
(2^{-i}-2^{-(i+2)})2^{-\operatorname{lh}(s_i)}\ge3\cdot2^{-(n_i+i+2)}
>2^{-(n_i+i+2)}$,
using $\operatorname{lh}(s_i)\le n_i$ and the density clause for $s_i\in T_i$.
The contradiction with the almost-covering clause (constant $2^{-(n_i+i+2)}$)
then stands as before, and the rest of the proof (0-1 law, nullity, positive
outer measure) is unchanged.

### R3 — `items/thm-shelah-universal-meagre-composition-preserves-sweetness.md` (material)

Steps 4.5, 5.2 and 6.1 used the source's order convention ($\ge$ = stronger),
which reverses the library convention fixed by
`def-shelah-sweetness-model` and used in steps 4.2-4.3 of the same proof: the
common bound produced by the sequential clause was written $p^*\ge p_i$ although
it is a common lower bound. All such occurrences are now written with $\le$, and
"above/below" wording was corrected to match ("$r'\le r$", "$r_j\le
r_j^0,r_j^1$", "$p''$ a common lower bound", etc.). In addition, step 5.2's
sentence "the family … is directed by the same equivalences and so has a common
bound $r^*$" asserted an infinite common bound from mere directedness; it now
invokes the sequential clause of [F1] on the sequence $\langle r'_{n+i}\rangle$
with last term $r'$ (using that $E^P_{n+i}$ refines $E^P_i$), which is exactly
the step that legitimately produces $r^*$. The contract rows for steps 4.5, 5.2
and 6.1 and the inputs of step 5.2 were updated accordingly.

### R4 — `items/lem-shelah-sweet-density-transfer-along-complete-suborders.md` (minor)

The statement ended "This is the full two-part conclusion of Shelah the
corresponding source claim, in the library order." — a garbled sentence.
Corrected to "… of Claim 7.4 of the source, in the library order." (verified
against Shelah's Claim 7.4). The same defect also appeared in [F3], whose
attribution of the quotient assertion to
`[[def-two-step-forcing-iteration]]` is inaccurate (that published definition
does not mention $Q/P$); [F3] now cites the definition together with "the
quotient convention recorded on this page" and Shelah's Section 7.1.

### R5 — `items/thm-shelah-sweet-amalgamation-preserves-sweetness.md` (minor)

Step 9.1 said "Steps 4.1 through 5.1 verify all clauses of the Statement",
omitting the directedness, sequential, transfer and extension steps 6.1-8.1.
Corrected to "Steps 4.1 through 8.1".

### R6 — `library/foundations/shelahs-baire-property-model-and-inner-model-lower-bounds.md` (page prose)

The page and three of its items use the quotient notation $Q/P$, but no library
item defines it: `def-two-step-forcing-iteration` (the item cited for it) treats
two-step iterations only. A paragraph was added to the A-page prose recording
Shelah's Section 7.1 convention, the equivalence $p\Vdash q\in Q/P$ iff every
$p'\le p$ is compatible with $q$, its upward closure in $q$ and its monotonicity
in $p$, and the three items that use it. No item, dependency edge or frontmatter
was changed by this repair.

## 3. Uneditable defect returned in the findings JSON

### F-1 (fatal, unlicensed inference) — `items/thm-shelah-ch-omega-one-sweet-construction.md`, step 3.2; consumer `items/thm-shelah-homogeneous-truth-has-baire-representatives.md`, step 1.2/[F2]

Step 3.2 reads "the stage that handles it applies [F3] to extend it to an
automorphism of the next stage, which remains an automorphism of the union". The
cited [F3] (`thm-shelah-sweet-partial-isomorphism-extension`) is stated for
*countably generated* complete subalgebras and yields an automorphism of an
extension $B^*\supseteq B_{\alpha+1}$ after one $\omega$-iteration; the
bookkeeping of the theorem schedules each isomorphism task at a single stage and
never schedules the cofinal re-extension of the resulting automorphism along all
later stages, so an automorphism of $B_{\alpha+1}$ is not shown to extend to
$B=\bigcup_{\beta<\omega_1}B_\beta$. The property that is needed is exactly
Shelah's Main Lemma 7.14(b), which is stated for the union: "for every countably
generated, complete Boolean subalgebras $B_1,B_2$ of $BA(P)$ and any isomorphism
$f$ from $B_1$ onto $B_2$, $f$ can be extended to an automorphism of $BA(P)$"
(p. 42), together with 7.14(c) on free amalgamation. The consumer
`lem-shelah-homogeneous-truth-has-baire-representatives` uses it at step 1.2 to
conclude that "the automorphism group of $B$ fixing $B_0$ acts transitively on
the conditions of $\mathbb{C}$", and
`thm-shelah-inner-model-all-sets-of-reals-have-baire-property` in turn depends
on that homogeneity. I did not repair this: supplying the union-level property
requires reworking the bookkeeping so that each created automorphism is extended
cofinally often, and I could not reconstruct that argument with the confidence
demanded for a repair. If confirmed, the page's headline equiconsistency route is
affected, not merely the local phrasing.

## 4. Page verdicts

- A `shelahs-baire-property-model-and-inner-model-lower-bounds`: **sound after
  the repairs, with one open obligation (F-1)**. The repaired items
  (`def-shelah-universal-meagre-forcing`,
  `thm-shelah-universal-meagre-composition-preserves-sweetness`,
  `lem-shelah-sweet-density-transfer-along-complete-suborders`,
  `thm-shelah-sweet-amalgamation-preserves-sweetness`) now match their sources;
  the lower branch (items 18-29) and the equiconsistency/separation statements
  (17, 27-29) verified line by line against Shelah §7 and Ishii Chapter 3. F-1
  concerns the upper branch's homogeneity step and needs 5b/owner reconciliation.
- B `shelahs-baire-property-model-and-inner-model-lower-bounds-examples`:
  **sound**; all five examples verified (three display lemmas from this batch,
  one false-statement refutation, one amalgamation instantiation).

## 5. Other observations (no edit made)

- `lem-shelah-real-name-capture-and-coded-meagre-unions` labels its facts
  [F1], [F2], [F3], [F5] — there is no [F4]. The labels used are consistent, so
  this is cosmetic; renumbering would churn the contract for no mathematical
  gain.
- `lem-shelah-continuous-unions-of-sweetness-models` step 4.1 compresses the
  construction of $r_i$ ("a strengthening $r_i\le q_i$ of $q_\omega$ inside the
  $E_i$-class of $q_\omega$"): the transfer clause with $p'=q_i$ and
  reflexivity, plus the class-containment clause of the extension relation,
  supplies it. A competent reader closes it at once; not a defective claim.
- `lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one` step 3.1
  attributes the selection of one real coding a bijection $\omega\to\mu$ to
  Countable Choice; selecting one element of a nonempty set needs no choice.
  The appeal is superfluous but harmless, since CC is assumed in the statement.
- `thm-shelah-sweet-amalgamation-preserves-sweetness` step 8.1's treatment of
  the mixed transfer clause is a one-sentence sketch; the source (7.12) calls
  this direction "even easier", and the sketch is faithful to it. Accepted as a
  short omission.
- `lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets` step 3.1
  writes "(t,T'') can be assumed in G" where the intended reading is "for any
  generic $G\ni(t,T'')$"; step 4.1 supplies the density argument. Nonfatal.
- The published `def-two-step-forcing-iteration` does not define $Q/P$; this is
  now supplied on the A page (R6). Reported here rather than in the findings
  array because the local page convention closes it for this batch's uses.

## 6. Checks run

- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for all 33 items
  before editing: all clean. After editing: clean for the five changed items.
- `node tools/tsx-run.mjs tools/reflow.mts <file>` for each changed item and for
  the edited page: "unchanged" (already in canonical form).
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-15.proof-contracts.json`:
  0 errors, 0 warnings, 34/34 items checked (two errors introduced by my edits —
  a stale [F2] quote and a missing step-5.2 input — were fixed and rechecked).
- The run-level merged contract `research/phase-2-remaining-27-proof-contracts.json`
  was regenerated with `node tools/merge-proof-contracts.mjs --level
  phase-2-remaining-27 …` from all 15 batch contracts (962 scoped items) so that the
  derived file carries the repaired texts; a merged-scope `proof-contract --strict`
  run then produced no issue line naming any batch-15 item (the remaining lines
  belong to other, still in-flight batches). The engine's own `merge-contracts` gate
  regenerates this file again before the whole-level contract checks.
- No `verification.judge` records exist on any changed item, so no stale judge
  record was removed; no item was stamped or self-certified.

## 7. Limitations (coverage note)

- I read all 33 assigned items and both pages in full, but the published
  dependencies were opened only to the depth needed for the claims under review
  (`thm-forcing-theorem`, the formal-consistency compilers, the constructible
  hierarchy items and the Lebesgue-measure items were read at statement level,
  through their own texts where opened and through the batch contract's quotes
  otherwise). I did not re-prove those published dependencies.
- The upper-branch verification was carried out against Shelah's paper text as
  extracted from the PDF; the extraction garbles some symbols and diacritics, so
  clause identifications rest on the surrounding proof text (7.6's conditions
  (a)-(e), 7.9(2), 7.14(a)-(d)) and on the internal consistency of the source's
  arguments, not on character-perfect quotes.
- F-1 is unresolved: I recorded what the proof does and does not supply, but I
  did not reconstruct Shelah's "trivial" verification of Main Lemma 7.14(b)-(c).
  Any adjudication should read that argument (or reconstruct it) before closing
  the batch.
- I did not check rendered KaTeX output or any other presentation layer beyond
  the tools listed in §6.
