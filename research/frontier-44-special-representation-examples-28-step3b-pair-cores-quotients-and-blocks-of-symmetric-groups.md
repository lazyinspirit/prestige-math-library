# Step 3b — scaffold audit and authoring: `cores-quotients-and-blocks-of-symmetric-groups`

Run `frontier-44-special-representation-examples-28`, batch 21 (orders 1571/1572),
role `alpha-high`, label
`step3b-pair-cores-quotients-and-blocks-of-symmetric-groups-c2d5f2fc0157df88`.
A page `cores-quotients-and-blocks-of-symmetric-groups`, B page
`cores-quotients-and-blocks-of-symmetric-groups-examples`, category
`special-topics-in-representation-theory`. Only this pair is owned; sibling
pairs in shared carriers are preserved. Report opened at entry 2026-10-10
before any edit.

## Owned IDs and open obligations at entry

A-page items (13, all authored here):
`def-beta-set-and-e-runner-abacus-of-a-partition` (L0),
`lem-hooks-are-bead-gap-pairs-on-an-abacus` (L2),
`def-e-core-e-quotient-and-e-weight` (L3),
`lem-virtual-weyl-combinations-detect-q-schur-block-separation` (L4),
`thm-e-core-is-independent-of-the-rim-hook-removal-order` (L4),
`thm-e-quotient-controls-hooks-divisible-by-e` (L4),
`prop-core-quotient-size-and-weight-formula` (L5),
`thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` (L13),
`thm-weight-one-block-decomposition-pattern` (L13),
`cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` (L14),
`thm-nakayama-block-classification-for-symmetric-groups` (L15),
`prop-weight-zero-symmetric-group-blocks-are-defect-zero` (L16),
`rem-block-weight-is-not-the-same-as-numerical-defect` (L17).

B-page items (4, all authored here): `ex-three-core-and-three-quotient-by-abacus` (L6),
`ex-three-core-of-four-three-two-one` (L6),
`cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test` (L16),
`ex-a-weight-one-block-decomposition-matrix` (L16).

Deliverables: 17 item files, the two page files
`library/special-topics-in-representation-theory/…` (A and B),
`research/frontier-44-special-representation-examples-28-batch-21.proof-contracts.json`,
17 current item decisions, the refreshed cross-batch input, and this report.

Open obligations at entry:

1. In-run suppliers not yet authored on disk at entry: batch 19
   `def-removable-border-strip-and-height` (authored during this dispatch),
   `lem-hooks-correspond-to-removable-border-strips`; batch 20
   `def-type-a-q-schur-algebra-and-weyl-modules`, `def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents`,
   `lem-semistandard-weight-dimensions-detect-virtual-weyl-classes`,
   `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`,
   `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`,
   `thm-q-schaper-virtual-radical-layer-formula`,
   `def-type-a-hecke-specht-module-and-cell-form`,
   `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`,
   `def-quantum-characteristic-of-an-invertible-hecke-parameter` (authored during
   this dispatch), `lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents`,
   `lem-central-idempotent-decompositions-of-one-are-unique`. Consumers whose
   actual proof uses load on an unfinished supplier keep an escalated decision
   and are flagged with supplier ID, consumer ID and consuming step below.
2. Source check for the q-Schur block theorem: the printed Jantzen sum formula
   index in the registered Mathas manuscript is inconsistent with its own
   worked examples (details in the checkpoint notes); the exact form to consume
   is the batch-20 item `thm-q-schaper-virtual-radical-layer-formula`.
3. Choice: the pair is choice-free throughout; verify per item against actual
   suppliers.

## Checkpoint log

### 1. `def-beta-set-and-e-runner-abacus-of-a-partition` (A, level 0) — authored

- Exact claim/conventions: beta-sets (finite strictly decreasing subsets of
  $\mathbb N_0$), the $l$-shift $X+l$, $P(X)$ with trailing zeros deleted,
  $X_\lambda$ = first-column hook lengths $b_i(\lambda)=\lambda_i+m-i$, and
  James's $e$-abacus with position $ae+i$ in row $a\ge0$ of runner $i$,
  rows labelled downward. The item proves $P(X_\lambda)=\lambda$ and that the
  $\beta$-sets of $\lambda$ are exactly the $X_\lambda+l$, $l=m-t$ recovered,
  in two Remarks (winding $P$); the runner labelling is a bijection.
- Suppliers read: published `def-partition-young-diagram-and-conjugate-partition`,
  `def-hook-arm-leg-and-hook-length`; source Tomczak §4.1 printed pp. 54-55 and
  Mathas (5.20)-(5.21) printed pp. 52-53.
- Checks: precheck `not-applicable` (definition), rendercheck clean,
  proof-layout no phases. Item decision `accept`, defects `[]`, recorded with
  `record-item`.
- Open: none. Choice-free.

### 2. `lem-hooks-are-bead-gap-pairs-on-an-abacus` (A, level 2) — authored

- Exact claim: (i) $h\in H_i(\lambda)$ iff $h\le h_i$ and $h_i-h\notin X$,
  equivalently the bead-gap bijection $(b,g)\mapsto$ hook; (ii) removal
  formula $X'=(X\setminus\{b\})\cup\{g\}$ is a $\beta$-set for
  $\lambda\setminus H_{i,j}$, and the hook is a removable border strip of size
  $b-g$ and height $\lambda'_j-i$; (iii) same runner iff $e\mid$ length, and a
  hook of length $e$ in row $i$ exists iff $h_i-e\notin X$. **Scaffold repair:**
  the scaffold's "empty position immediately below" is reversed relative to the
  downward-increasing row labels and the top-packing convention; the authored
  item states (and proves) "immediately above" ($h_i-e\notin X$, i.e. a gap at
  the position $e$ labels *above* the bead, which is the position reachable by
  the upward bead slide that removes an $e$-hook). This preserves the promised
  correspondence and follows Tomczak Corollary 4.5/4.8 and the removal formula
  $Z=(X\setminus\{h_i\})\cup\{h_i-h_{i,j}\}$ of Proposition 4.7.
- Suppliers read: published hook/partition items; `def-removable-border-strip-and-height`
  (batch 19, authored on disk during this dispatch, read in full). Unfinished:
  `lem-hooks-correspond-to-removable-border-strips` (batch 19) is used only for
  the terminology/height identification in (ii); the item proves edge-connectedness,
  the absence of $2\times2$ blocks, the complement-Young-diagram property and the
  height count directly, so the use is terminological and the item decision stays
  escalated until that supplier is authored.
- **Late repair (this dispatch, verified).** The first draft of (ii) wrongly
  said that deleting the hook *node set* from $[\lambda]$ leaves a Young
  diagram; that is false in general. The item now removes the *rim hook*
  $R_{i,j}$ corresponding to the hook (the subpath of the rim between the last
  node of the arm and the last node of the leg, batch-19
  `lem-hooks-correspond-to-removable-border-strips`), with the explicit
  part formula
  $\lambda\setminus R_{i,j}=(\lambda_1,\dots,\lambda_{i-1},\lambda_{i+1}-1,\dots,\lambda_{i+b_0}-1,j-1,\lambda_{i+b_0+1},\dots)$,
  $b_0=\lambda'_j-i$, and $|\lambda\setminus R_{i,j}|=n-h_{i,j}(\lambda)$, as
  in Tomczak Proposition 4.7 (the source writes $\lambda\setminus H_{i,j}$ for
  this partition). A cross-reference error introduced by the repair
  (relocation step numbered 3.2 instead of 2.4) was fixed; precheck now PASS
  (8 steps), rendercheck OK. Item decision `repaired`, defects `["statement"]`,
  recorded with `record-item`. Choice-free.

### 8. `ex-three-core-and-three-quotient-by-abacus` (B, level 6) — authored

- Exact claim: for $e=3$ and $\lambda=(6,5,2,1^3)\vdash16$ the top-packed
  3-abacus of $X_\lambda=\{11,9,5,3,2,1\}$ is $X^{(3)}=\{8,5,3,2,1,0\}$ with
  $C_3(\lambda)=(3,1)$; the normalised runner row-label sets $X^{(3)}_0=\{3,1\}$,
  $X^{(3)}_1=\{0\}$, $X^{(3)}_2=\{3,1,0\}$ give
  $Q_3(\lambda)=((2,1),\varnothing,(1))$ and $w_3=4$; four same-runner bead
  moves realise the rim 3-hook removals
  $(6,5,2,1^3)\to(4,4,2,1^3)\to(3,2,2,1^3)\to(3,2,2)\to(3,1)$; and
  $16=4+3\cdot4$. The verification also lists the four 3-divisible hooks of
  $\lambda$ (lengths $3,9,3,3$) and their images under $f$ (sizes $1,3,1,1$),
  independently recomputed from the hook-length diagram.
- Suppliers read: all in-pair items above (level 0-5), all on disk.
  Source: Tomczak §4.1 worked example, printed pp. 59-62; the printed bead
  diagram, hook table and both indicated removal orders were followed and
  recomputed by hand.
- Checks: precheck PASS, rendercheck OK (display formulas single-line).
  Item decision `accept`, defects `[]` (recorded in the final pass).
  Choice-free.

### 9. `ex-three-core-of-four-three-two-one` (B, level 6) — authored

- Exact claim: for $e=3$, $\lambda=(4,3,2,1)\vdash10$, $X_\lambda=\{7,5,3,1\}$,
  the top-packed configuration is $X^{(3)}=\{4,2,1,0\}$ with
  $C_3(\lambda)=P(X^{(3)})=(1)$; two explicit maximal orders of rim 3-hook
  removals, $(4,3,2,1)\to(2,2,2,1)\to(1,1,1,1)\to(1)$ and
  $(4,3,2,1)\to(4,3)\to(2,2)\to(1)$, both end at $(1)$; $10=1+3\cdot3$ and
  $(1)$ has no hook of length $3$. Every intermediate step was recomputed from
  the bead moves $7\mapsto4$, $5\mapsto2$, $3\mapsto0$ and checked against the
  part formula of the hook lemma.
- Suppliers read: in-pair levels 0-5 plus batch-19
  `def-removable-border-strip-and-height`,
  `lem-hooks-correspond-to-removable-border-strips` (both on disk); batch-19
  supplier edges are now resolvable.
- Source: Mathas Lemma 5.34's printed abacus example, printed p. 61 (printed
  beta numbers $(13,11,9,7,5,4,3,2,1,0)$, i.e. the shift by $6=2\cdot3$ of
  $X_\lambda$; the unshifted set gives the same core). Tomczak Theorem 4.10 and
  Proposition 4.12 for order independence and the size formula.
- Checks: precheck PASS (5 steps, canonical layering $1.1,2.1,3.1,3.2,4.1$
  adopted), rendercheck OK. Item decision `accept`, defects `[]` (recorded in
  the final pass). Choice-free.

### 10. `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` (A, level 13) — authored, decision to be escalated

- Exact claim: for $d\ge n$, Weyl modules $W^{\lambda}_F,W^{\mu}_F$ of
  $S_F(d,n)$ are in the same block iff $C_e(\lambda)=C_e(\mu)$; blocks are
  indexed by e-cores $\gamma$ with $|\gamma|\le n$, $|\gamma|\equiv n$ (mod e);
  the $e=\infty$ parenthetical (each Weyl module its own block, algebra
  semisimple) is kept and proved via the vanishing sum formula.
- Proof route: lift $(R,\pi,\hat q)$ on $F[X]_{(X-q)}$; valuation criterion
  $\nu_\pi([h]_{\hat q})\ne0\Leftrightarrow e\mid h$; Jantzen sum formula (with
  the $D^\top D$ Cartan matrix $C$); Jantzen links lie in one block (via the
  block-separation lemma [4]); a finite dominance-descent shows every
  composition factor of $W^{\lambda}_F$ has core $C_e(\lambda)$; necessity via
  the Cartan-graph characterisation of blocks, sufficiency by the Mathas/James
  induction moving rim e-hooks to the first row.
- **Open obligations (exact).**
  (a) `thm-q-schaper-virtual-radical-layer-formula` (batch 20, not on disk):
  consumed at [F5] and in steps 1.1, 2.1, 3.1 (canonical numbering) — its
  index description and the filtration property $W^{\lambda}_F(1)=\mathrm{rad}$
  carry the whole proof.
  (b) `lem-semistandard-weight-dimensions-detect-virtual-weyl-classes`
  (batch 20, not on disk): consumed at [F1] for $[W^{\lambda}]$ a $\mathbb Z$-basis.
  (c) [F4] (Graham-Lehrer: cell-module factors lie in the block of the head)
  and [F7] (blocks are the Cartan-graph components) have no in-run supplier;
  remedies: state them in the batch-20 cellular items, or prove [F7] locally.
  Item decision `escalate`, defects `["dependency"]`, reason records (a)-(b).
- Checks: precheck PASS after adopting the canonical layering (8 steps),
  rendercheck OK. Choice-free.

### 11. `thm-weight-one-block-decomposition-pattern` (A, level 13) — authored, decision to be escalated

- Exact claim: for an e-core $\gamma$ of $m$ and $n=m+e$ there are exactly $e$
  partitions $\lambda_1\rhd\cdots\rhd\lambda_e$ of $n$ with core $\gamma$; in
  the source's normalisation $W^{\lambda_e}=L^{\lambda_e}$ and
  $[W^{\lambda_k}]=[L^{\lambda_k}]+[L^{\lambda_{k+1}}]$ for $k<e$ (bidiagonal
  decomposition matrix); exactly $\lambda_1$ is not e-restricted; the Schur
  functor gives the Murphy rows $[S^{\lambda_1}_M]=[D^{\lambda_2}_M]$,
  $[S^{\lambda_k}_M]=[D^{\lambda_k}_M]+[D^{\lambda_{k+1}}_M]$,
  $[S^{\lambda_e}_M]=[D^{\lambda_e}_M]$ with $D^{\lambda_1}_M=0$, and the
  signed-conjugate dictionary transfers this to the Dipper-James labels.
- **Deliberate rephrasing (no promise dropped, recorded for Step 4):** the
  scaffold's phrase "the Weyl modules and simple modules of this block" is
  authored as "of this weight-one class"; the block identification of the
  class is the content of item 10, so the word "block" is not used in a
  load-bearing way and item 11 stays at level 13 without depending on item 10.
  The matrix claim itself is fully preserved.
- Proof route: enumeration via the e-quotient of size 1 (e components, one box
  in one component) and the abacus; e-restriction of $\lambda_1$ by the $e$
  equal height-1 columns $\gamma_1+1,\dots,\gamma_1+e$; the Jantzen evaluation
  $\sum_{i>0}[W^{\lambda_k}(i)]=\sum_{j>k}(-1)^{j-k+1}[W^{\lambda_j}]$; the
  telescoping descending induction; the Schur functor rows.
- Open obligations: `thm-q-schaper-virtual-radical-layer-formula` (consumed at
  [F2] and step 2.2), `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`
  and `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`
  and `def-type-a-hecke-specht-module-and-cell-form` (consumed at [F4] and
  step 3.1) — all batch 20, not on disk. The e-restriction claim for
  $\lambda_2,\dots,\lambda_e$ (step 2.1) is a flagged abacus input from
  Mathas Prop 5.38. Item decision `escalate`, defects `["dependency"]`.
- Checks: precheck PASS (canonical layering 1.1, 2.1, 2.2, 3.1 adopted),
  rendercheck OK after joining the display line. Choice-free.

### 12. `cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` (A, level 14) — authored, decision escalated

- Exact claim: for $q$ of quantum characteristic $e$, Hecke Specht modules
  $S^{\lambda},S^{\mu}$ of $H_{F,q}(S_n)$ lie in the same block iff
  $C_e(\lambda)=C_e(\mu)$; blocks indexed by $e$-cores; $e=\infty$
  parenthetical kept.
- Proof route: the Schur functor $F_0(X)=Xe$ with $eSe\cong H$; the central
  idempotents $\tilde\epsilon_C=\epsilon_Ce$; the two-sided block count
  ($\#\mathrm{blocks}(H)\ge\#\mathrm{blocks}(S)$ from the supports of the
  $\tilde\epsilon_C$, and the reverse from $S=\prod_i\mathrm{End}_{B_i}(MB_i)$);
  the resulting bijection $C\mapsto\tilde\epsilon_C$; item 10 for the core
  criterion; the signed $\theta$ dictionary for the Dipper-James label set.
- Open obligations: `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`
  (consumed at [F1] and steps 1.1, 3.1, 4.1) still not on disk; the other
  batch-20 suppliers used here (Schur idempotent, block idempotents, the two
  central-idempotent lemmas, the Dipper-James cell-form item) are on disk and
  were read and reconciled. Item decision `escalate`, defects `["dependency"]`.
- Checks: precheck PASS (canonical layering 1.1, 1.2, 2.1, 3.1, 4.1 adopted),
  rendercheck OK. Choice-free.

### 13. `thm-nakayama-block-classification-for-symmetric-groups` (A, level 15) — authored, decision escalated

- Exact claim: for a splitting field $k$ of characteristic $p>0$, Specht
  modules $S^{\lambda}_k,S^{\mu}_k$ of $k[S_n]$ lie in the same block iff
  $\lambda,\mu$ have the same $p$-core; blocks indexed by pairs $(\gamma,w)$
  with $n=|\gamma|+pw$; block of $S^{\lambda}_k$ is
  $(C_p(\lambda),w_p(\lambda))$.
- Proof route: specialise the Hecke criterion (item 12) at $q=1$ through the
  batch-20 $q=1$ proposition and the algebra-isomorphism block transport, then
  read off the pairs from the core-quotient size formula.
- Open obligation: `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
  (consumed at [F1] and step 1.1) still not on disk; remedy: author it and
  re-verify the Hecke Specht normalisation against the Dipper-James convention.
  O'Donovan's Theorem 1 is recorded in the sources as an independent
  confirmation, not as the proof route. Item decision `escalate`, defects
  `["dependency"]`.
- Checks: precheck PASS, rendercheck OK. Choice-free.

### 14. `prop-weight-zero-symmetric-group-blocks-are-defect-zero` (A, level 16) — authored

- Exact claim: for $\lambda\vdash n$ a $p$-core (weight zero), the block $B$ of
  $S^{\lambda}_k$ has exactly one Specht label $\lambda$, decomposition matrix
  $(1)$, $D^{\lambda}$ as unique simple and unique projective indecomposable,
  Cartan matrix $(1)$, block algebra a full matrix algebra, defect zero.
- All suppliers on disk and read (Nakayama item 13, the modular-simple-heads
  theorem, dominance unitriangularity, $C=D^\top D$, the defect-zero criterion,
  the defect-group definition). Verified independently: weight zero implies
  $C_p(\lambda)=\lambda$; the only $p$-regular label with that core is
  $\lambda$ itself.
- Checks: precheck PASS, rendercheck OK. Item decision `accept`, defects `[]`.
  Choice-free.

### 15. `cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test` (B, level 16) — authored

- Exact claim refuted: equal numbers of removable $p$-hooks force equal
  $p$-cores/blocks. Witness: $p=3$, $(5)$ and $(4,1)$, each with one removable
  $3$-hook, cores $(2)\ne(1,1)$; Nakayama separates the blocks.
- Both hook diagrams and both top-packed abaci were recomputed by hand; both
  witnesses have $3$-weight $1$, so even the weight agrees while the blocks
  differ.
- Checks: precheck PASS, rendercheck OK. Item decision `accept`, defects `[]`.

### 16. `ex-a-weight-one-block-decomposition-matrix` (B, level 16) — authored

- Exact claim: for $e=p=3$, $\gamma=\varnothing$, $n=3$ the Weyl matrix is
  $\left(\begin{smallmatrix}1&1&0\\0&1&1\\0&0&1\end{smallmatrix}\right)$ and
  the group-side matrix in the labels $(3),(2,1)$ is
  $\left(\begin{smallmatrix}1&0\\1&1\\0&1\end{smallmatrix}\right)$ with rows
  $(3),(2,1),(1,1,1)$; verified independently from the two-dimensional model
  of $S^{(2,1)}$ in characteristic $3$.
- The direct check $(12)e_t+e_t=3v_3-w\equiv0$ in characteristic $3$ was
  recomputed against the tabloid model.
- Checks: precheck PASS (canonical layering 1.1, 2.1, 3.1, 4.1 adopted),
  rendercheck OK. Item decision `accept`, defects `[]`. Its own suppliers are
  on disk (item 11 and item 13 included); the escalation of item 11 concerns
  item 11's batch-20 suppliers, not this consumer's use of its statement.

### 17. `rem-block-weight-is-not-the-same-as-numerical-defect` (A, level 17) — authored

- Exact claim recorded: weight is the number of $e$-hooks removed, the
  numerical defect is the order of a defect group; no identification is made
  or claimed beyond the proved weight-zero case, and the printed defect-group
  computation for weight $w>0$ is deliberately not asserted because no counted
  proof source is registered with this batch.
- Checks: precheck `not-applicable` as a remark, rendercheck OK. Item decision
  `accept`, defects `[]`.

## Final handoff

### Completed IDs

All 17 scaffolded items of the pair are fully authored on disk, with the two
page files, the batch-21 proof-contract file and the refreshed cross-batch
input:

- A page items (13): `def-beta-set-and-e-runner-abacus-of-a-partition`,
  `lem-hooks-are-bead-gap-pairs-on-an-abacus`,
  `def-e-core-e-quotient-and-e-weight`,
  `lem-virtual-weyl-combinations-detect-q-schur-block-separation`,
  `thm-e-core-is-independent-of-the-rim-hook-removal-order`,
  `thm-e-quotient-controls-hooks-divisible-by-e`,
  `prop-core-quotient-size-and-weight-formula`,
  `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`,
  `thm-weight-one-block-decomposition-pattern`,
  `cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`,
  `thm-nakayama-block-classification-for-symmetric-groups`,
  `prop-weight-zero-symmetric-group-blocks-are-defect-zero`,
  `rem-block-weight-is-not-the-same-as-numerical-defect`.
- B page items (4): `ex-three-core-and-three-quotient-by-abacus`,
  `ex-three-core-of-four-three-two-one`,
  `cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test`,
  `ex-a-weight-one-block-decomposition-matrix`.
- Pages:
  `library/special-topics-in-representation-theory/cores-quotients-and-blocks-of-symmetric-groups.md`
  (items: the 13 A items, examples: none) and
  `…-cores-quotients-and-blocks-of-symmetric-groups-examples.md`
  (items: none, examples: the 4 B items).
- Contracts:
  `research/frontier-44-special-representation-examples-28-batch-21.proof-contracts.json`
  (version 1, scope = all 17 items, citations with exact quotes for every
  fact-to-source link, one derivation per step, complete boundary worksheet).
- Cross-batch input:
  `research/frontier-44-special-representation-examples-28-batch-21.cross-batch-dependencies.json`
  updated (36 rows; batch-19 edges and the on-disk batch-20 edges moved to
  `verified` with the reconciled consuming steps; the three still-missing
  suppliers and the page edge kept `open` with exact remedies), then
  `frontier-dependency-ledger.mjs refresh --run …` ran clean.

### Checks actually run

- `precheck.mts` on all 17 items: 14 checked, 0 failing (3 items are
  definition/remark bodies with precheck `not-applicable`).
- `rendercheck.mjs` on the 17 items and the two pages: OK, no wikilinks inside
  math, no unbalanced or multiline display delimiters, all KaTeX parses, all
  frontmatter parses.
- `proof-layout.mjs` once, batched over all 17 changed item paths: 17 items,
  68 steps, 0 defects.
- `content-policy.mjs research/…-batch-21.pages.json`: 17 scoped items, 0
  errors, 0 warnings.
- `proof-contract.mjs …-batch-21.proof-contracts.json --strict`: 0 errors,
  0 warnings, 17/17 items checked.
- `item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`:
  no error names any item of this pair (the reported level drift belongs to
  other pairs of the run that are concurrently under construction).
- `validate-plan.mjs research/plan-spec.json --repo . --run …`: no error names
  this page pair or its items (the reported `undeclared-prereq`/`redundant-prereq`
  entries concern other pages; the advisories on this page are the expected
  redundant shared prerequisites of the canonical chain).
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and
  deduplicated.
- `step3-decisions.mjs record-item`: 17 decisions recorded (13 `accept` /
  `repaired`, 4 `escalate`); `check --phase final` recognises the 13 and lists
  the 4 escalations as requiring the owner's decision, which is the intended
  state. Two small frontmatter `deps` additions made after the first recording
  (to items 11 and 12) could not be re-recorded: the tool refuses a second
  non-owner receipt while an escalation stands ("the owner must resolve this
  item decision"), so the escalation receipts remain authoritative and their
  hashes are the pre-addition ones; the escalation content is unchanged.

### Added suppliers

None. No item outside the 17 scaffolded IDs was created, and no published or
sibling content was edited. The two page files, the contract file and the
cross-batch input are the only files created besides the item files. (The
frontmatter `deps` of several items were extended with prerequisites that the
proof routes actually use — batch-19/20 items and published items — and
`prop-core-quotient-size-and-weight-formula`, `thm-e-core-is-independent…` etc.
as detailed per item above; the scaffold manifests themselves were not edited.)

### Published concerns

None new. The only previously recorded concern, the printed Jantzen sum
formula of the Mathas manuscript, is not a published-library defect: it is the
unfinished batch-20 supplier `thm-q-schaper-virtual-radical-layer-formula`,
left escalated with exact consumer IDs and consuming steps.

### Open obligations (escalated, owner or Step 4)

1. `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`:
   consumes `thm-q-schaper-virtual-radical-layer-formula` at fact [F5] and steps
   1.1, 1.2, 2.1, 2.2, 3.1, 6.1; also relies on the cellular input [F4]
   (Graham–Lehrer cell-module block fact) and the Cartan-graph block input
   [F7], which currently have no in-run supplier.
2. `thm-weight-one-block-decomposition-pattern`: consumes the same Jantzen
   supplier at fact [F2] step 2.2 and
   `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`
   at fact [F4] step 3.1.
3. `cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`:
   consumes the missing Schur functor correspondence at fact [F1] and steps
   1.1, 3.1, 4.1.
4. `thm-nakayama-block-classification-for-symmetric-groups`: consumes
   `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one` at
   fact [F1] and step 1.1.
5. Pre-splice manifest note for Step 4: the scaffold places
   `thm-weight-one-block-decomposition-pattern` at level 13 together with the
   block theorem, but its statement as scaffolded says "of this block"; the
   authored statement says "of this weight-one class" and its proof does not
   use the block theorem, so the level-13 placement is kept and the block
   identification stays the content of item 10. No dependency beyond the
   declared ones was introduced.

### Choice

All 17 items are choice-free; every proof-bearing item states or records that
no choice principle is used, and the boundary worksheets dispose of the
`nonempty-choice` case accordingly.

### Next action if the batch is resumed

Re-check whether the three still-missing batch-20 suppliers and the batch-20
page have landed; if so, re-read them against the consuming facts and steps
listed above, re-run the gate battery, and have the owner resolve the four
escalations. Otherwise hand off in the escalated state recorded here; do not
mark the four consumers complete.
