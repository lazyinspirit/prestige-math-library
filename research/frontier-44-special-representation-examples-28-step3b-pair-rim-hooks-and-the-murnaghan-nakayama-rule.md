# Step 3b — pair `rim-hooks-and-the-murnaghan-nakayama-rule` (batch 19)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-rim-hooks-and-the-murnaghan-nakayama-rule-f37f8cca6ace3ebf`.
Owned A page: `rim-hooks-and-the-murnaghan-nakayama-rule` (order 1563, category
`special-topics-in-representation-theory`, 11 items). Owned B page:
`rim-hooks-and-the-murnaghan-nakayama-rule-examples` (order 1564, 5 items).
Batch 19 contains only this pair, so no sibling rows exist in the shared batch
files. Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, `AGENTS.md`, the batch-19
manifest/coverage/notes, the step-3a scope report and decision for this pair,
the run's owner authoring direction, the SYMR-4 design rows in
`research/symmetric-group-planning/proposed-inventory.md` and
`research/symmetric-group-planning-main-review/gap-dependency-closure-ledger.md`,
the step-1 drift verdict (`no-drift`), and the plan-spec shells for orders
1563/1564.

## Owned IDs and open obligations (entry checkpoint)

All 16 IDs are scaffold-only at entry (item files, pages, contracts and
decisions owed). Author/audit order (dependency level, then page order/id):

| level | id | kind | page |
|---|---|---|---|
| 0 | `def-removable-border-strip-and-height` | definition | A |
| 0 | `lem-restriction-to-two-block-subgroup-has-lr-multiplicities` | lemma | A |
| 0 | `thm-determinantal-form-of-a-specht-character` | theorem | A |
| 0 | `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` | theorem | A |
| 1 | `lem-alternating-hook-induction-cancels-disconnected-rim-removals` | lemma | A |
| 1 | `lem-character-value-on-a-full-cycle-is-supported-on-hooks` | lemma | A |
| 1 | `lem-hooks-correspond-to-removable-border-strips` | lemma | A |
| 1 | `ex-s5-character-table-by-fixed-tabloid-reconstruction` | example | B |
| 2 | `prop-r-cycle-virtual-character-filter` | proposition | A |
| 2 | `thm-murnaghan-nakayama-character-rule` | theorem | A |
| 3 | `cor-no-removable-cycle-length-strip-forces-a-character-zero` | corollary | A |
| 3 | `ex-r-cycle-filter-for-nu-three-two-and-r-three` | example | B |
| 3 | `ex-the-s4-character-table-by-rim-hook-recursion` | example | B |
| 4 | `cor-hook-divisibility-defect-zero-vanishing-criterion` | corollary | A |
| 4 | `cex-a-disconnected-rim-set-is-not-a-border-strip` | counterexample | B |
| 4 | `ex-murnaghan-nakayama-for-shape-five-four-four` | example | B |

Open obligations at entry:

1. Author all 16 item files under `items/` exactly as the batch-19 manifest
   specifies their claims, and create both pages under
   `library/special-topics-in-representation-theory/`.
2. Write `research/frontier-44-special-representation-examples-28-batch-19.proof-contracts.json`
   with per-step inputs, exact cited excerpts, and boundary/Choice dispositions.
3. Reconcile the two step-3a bookkeeping findings against the current
   suppliers: `thm-determinantal-form-of-a-specht-character` links
   `thm-complex-specht-modules-are-irreducible`, and
   `thm-murnaghan-nakayama-character-rule` links
   `def-finite-symmetric-group-and-permutation-notation`, neither in `deps`;
   fix both in the item files (defect type `dependency`).
4. Recompute/verify every new item's `dependency_level` against the manifest;
   item metadata and manifest entry must agree.
5. Run the focused battery (proof-layout on all changed item paths in one
   command, precheck, rendercheck, content policy, strict proof contracts,
   dependency-level check, validate-plan against `research/plan-spec.json`,
   depcheck/extcheck/fwdcheck/depsource, coverage, manifest-deps, pathcheck).
6. Record one `record-item` decision per owned ID (`accept`, `repaired`, or
   `escalate`) with defect types and one reason sentence.

Supplier note at entry: the direct in-run prerequisite list for this pair is
empty; every external supplier of the pair is a published A-homed item, and the
two B-page consumers declared in the batch-19 manifest
(`lem-hooks-are-bead-gap-pairs-on-an-abacus`,
`thm-e-core-is-independent-of-the-rim-hook-removal-order`,
`ex-three-core-of-four-three-two-one`, plus batch 20's
`thm-q-schur-weyl-weight-space-gram-determinant-hook-product` and
`thm-q-schaper-virtual-radical-layer-formula`) are consumers, not suppliers, so
none of the assigned items has an unfinished supplier dependency to flag.

## Checkpoint log

(updated after each item; resume here)

### Level-0 item 1: `def-removable-border-strip-and-height`

- Authored `items/def-removable-border-strip-and-height.md` (draft,
  `dependency_level: 0`, provenance literature-derived / not-applicable) with
  the manifest statement: the three conditions, the skew-diagram form, size,
  the height as rows occupied minus one, the path count $w=r-c+1$ and
  $\operatorname{ht}=r-c$, the height-0 horizontal-strip case, and the size-1
  identification with removable nodes; remarks record the rim interpretation
  and the empty-set convention. Suppliers read on disk:
  `def-partition-young-diagram-and-conjugate-partition`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-removable-and-addable-nodes-of-a-partition`.
- Checks: `proof-layout` 1 item / 0 steps / 0 defects; `precheck` clean
  (definition, no proof phase).
- Open: contract entry owed; decision owed.

### Level-0 item 2: `lem-restriction-to-two-block-subgroup-has-lr-multiplicities`

- Authored `items/lem-restriction-to-two-block-subgroup-has-lr-multiplicities.md`
  (draft, `dependency_level: 0`, provenance literature-derived / ai-altered).
  Claim exactly as the manifest: the restriction–induction transport via
  Frobenius reciprocity, the outer LR rule $\chi^\nu\circ\chi^\mu=\sum_\lambda
  c^\lambda_{\nu\mu}\chi^\lambda$, the identification of the external products
  $\chi^\nu\boxtimes\chi^\mu$ with the irreducible characters of $K$ (integral
  basis + orthonormality argument), the expansion
  $\chi^\lambda|_K=\sum c^\lambda_{\nu\mu}\chi^\nu\boxtimes\chi^\mu$, and the
  $r=n$ multiplicity $1$/$\delta_{\lambda\mu}$ clause.
- Deps actually used beyond the manifest list (all published, so the in-run
  level stays 0): `def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `thm-complex-specht-modules-are-irreducible`,
  `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions`,
  `thm-character-inner-product-computes-intertwiner-dimension`,
  `def-virtual-character-and-character-ring-of-a-finite-group` (already
  present). Manifest deps to be synced at handoff.
- Checks: `precheck` PASS (direct) after adopting the checker's canonical
  layering 1.1, 2.1, 2.2, 3.1, 4.1; `proof-layout` 5 steps / 0 defects.
- Open: contract entry owed; decision owed.

### Level-0 item 3: `thm-determinantal-form-of-a-specht-character`

- Authored `items/thm-determinantal-form-of-a-specht-character.md` (draft,
  `dependency_level: 0`, provenance literature-derived / ai-altered). Route:
  $\operatorname{ch}([m])=h_m$ for every integer $m$ (Specht/determinant
  normalisation plus Jacobi–Trudi conventions), transport of the Leibniz
  determinant through the characteristic isomorphism, Jacobi–Trudi
  $\det(h_{\lambda_i-i+j})=s_\lambda$, injectivity of $\operatorname{ch}$, and
  the degree count $\sum_i(\lambda_i-i+w(i))=n$ with the $[0]\ne0$ convention
  check.
- Deps added beyond the manifest (published, level unchanged):
  `thm-complex-specht-modules-are-irreducible` (the step-3a bookkeeping repair),
  `def-determinant-of-a-square-matrix`,
  `def-inversions-inversion-number-and-sign`. Manifest deps to be synced.
- Checks: `precheck` PASS after canonical layering 1.1, 1.2, 2.1, 3.1;
  `proof-layout` 4 steps / 0 defects.
- Open: contract entry owed; decision owed.

### Level-0 item 4: `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table`

- Authored `items/thm-triangular-fixed-tabloid-reconstruction-of-the-character-table.md`
  (draft, `dependency_level: 0`, literature-derived / ai-altered). Claims
  preserved exactly: (1) $b_{\lambda\nu}=|S_\nu|K_{\lambda\nu}$ with the
  Frobenius-reciprocity route, nonnegative upper triangular $B$ with diagonal
  $|S_\nu|$; (2) Gram equation $B^{\mathsf T}B=AMA^{\mathsf T}$ via Frobenius'
  induced-character formula, $z_\rho$ centralizer and orbit–stabilizer; (3)
  uniqueness of the nonnegative positive-diagonal triangular solution by the
  column/row determinacy induction, $\det A=\prod\prod(\lambda_i-1)!$ from
  triangularity and the diagonal count $\prod(\lambda_i-1)!$, $C=B(A^{\mathsf
  T})^{-1}$ and $\det C=\prod_\lambda\prod_i\lambda_i$.
- Deps added beyond the manifest (published, level unchanged): standard inner
  product, Frobenius formula, induced-Young-module identification, determinant
  of a triangular matrix, determinant multiplicativity/inverse,
  invertible-iff-det-unit, Specht irreducibility, Specht module definition.
- Checks: `precheck` PASS (direct), 5 steps; `proof-layout` 0 defects.
- Open: contract entry owed; decision owed.

### Level-1 item 5: `lem-alternating-hook-induction-cancels-disconnected-rim-removals`

- Authored `items/lem-alternating-hook-induction-cancels-disconnected-rim-removals.md`
  (draft, `dependency_level: 1`). Complete local proof of James Lemma 21.5 in
  the library's LR-tableau framework: structural analysis of LR tableaux of
  content $(x,1^{r-x})$ (one label per row at its right end, labels in
  increasing rows, first row all ones, column condition), bijection with
  admissible label-row sets $L$, count $\binom{m-1}{c-x}$ via
  $f=r-c$ incidences and $m=w-f$ components, alternating binomial sum, and the
  character-form collapse via the outer LR rule. Verified against all skew
  shapes of size $\le7$ by an independent enumeration script (0 mismatches).
- Deps added beyond the manifest (all published): skew-tableau definition,
  partitions, outer-induction-product definition, `def-binomial-coefficient`,
  `cor-binomial-theorem-consequences`. Manifest deps to be synced.
- Checks: `precheck` PASS (direct), 5 steps; `proof-layout` 0 defects.
- Open: contract entry owed; decision owed.

### Level-1 item 6: `lem-character-value-on-a-full-cycle-is-supported-on-hooks`

- Authored `items/lem-character-value-on-a-full-cycle-is-supported-on-hooks.md`
  (draft, `dependency_level: 1`). Route: value of an outer product of trivial
  characters at an $n$-cycle (fixed tabloids of a Young permutation module),
  evaluation of the Leibniz determinant series, solution of
  $\lambda_i-i+w(i)\in\{0,n\}$ forcing $\lambda_2\le1$ and the unique
  $k$-cycle $w$ of sign $(-1)^{n-x}$.
- Repair recorded: the scaffold's "in particular" clause "zero whenever
  $\lambda$ has at least two rows and at least two columns" is false as
  written (e.g. $(2,1)$ has two rows and two columns but value $(-1)^{n-x}$);
  the item states the correct equivalent condition $\lambda_2\ge2$, i.e.
  $[\lambda]$ contains a $2\times2$ block, keeping the promised formula.
- Deps added beyond the manifest (published): symmetric-group notation,
  virtual-character ring, Young subgroup/tabloid module, induced Young module,
  permutation-character fixed-point formula, cycle sign. Manifest deps to be
  synced (the step-3a bookkeeping finding concerned the MN theorem, handled at
  its item).
- Checks: `precheck` PASS, 3 steps; `proof-layout` 0 defects.
- Open: contract entry owed; decision owed.

### Level-1 item 7: `lem-hooks-correspond-to-removable-border-strips`

- Authored `items/lem-hooks-correspond-to-removable-border-strips.md` (draft,
  `dependency_level: 1`). Route: the rim is a monotone left/down path; $\xi(x)$
  is its subpath from $(i,\lambda_i)$ to $(\lambda'_j,j)$; explicit complement
  partition $\nu$ proving it is a removable border strip of size $h(x)$ and
  height $\ell(x)$; converse via the rim-location lemma for removable strips
  and the end-point identification, giving the bijection and the
  size/height/removability consequences.
- Deps: only the manifest list; no additions.
- Checks: `precheck` PASS, 5 steps; `proof-layout` 0 defects.
- Open: contract entry owed; decision owed.

### Level-1 B item: `ex-s5-character-table-by-fixed-tabloid-reconstruction`

- Authored `items/ex-s5-character-table-by-fixed-tabloid-reconstruction.md`
  (draft, `dependency_level: 1`). All matrices, det and inner products
  recomputed here in exact rational arithmetic: $A$, $M$, $B=|S_\nu|K_{\lambda\nu}$
  (full matrix displayed), $B^{\mathsf T}B=AMA^{\mathsf T}$ verified,
  $C=B(A^{\mathsf T})^{-1}$ equals the standard $S_5$ table in the declared
  reversed column order, $\det C=2880$, and the displayed inner products are
  $0$ and $1$.
- Deps added beyond the manifest (published): symmetric-class indexing, Young
  subgroup module, Young's rule, Kostka definition, standard inner product,
  virtual-character ring. Manifest deps to be synced.
- Checks: `precheck` PASS, 5 steps; `proof-layout` 0 defects.
- Open: contract entry owed; decision owed.

### Level-2 item 9: `prop-r-cycle-virtual-character-filter`

- Authored `items/prop-r-cycle-virtual-character-filter.md` (draft,
  `dependency_level: 2`). Manifest claims preserved: $\Psi_\nu$ is the signed sum
  over the removable $r$-strips above $\nu$; it vanishes on every class without
  an $r$-cycle; $\Psi_\nu=\chi^\nu\circ\psi_r$ with
  $\psi_r=\sum_x(-1)^{r-x}\chi^{(x,1^{r-x})}$; and $\psi_r$ vanishes on every
  class of $S_r$ other than the class of $r$-cycles. The proof establishes the
  stronger evaluation $\psi_r=r\cdot 1_{C_r}$ (value $r$ on each $r$-cycle,
  $0$ elsewhere).
- Route: claim 3 of the cancellation lemma gives
  $\Psi_\nu=\sum_x(-1)^{r-x}\chi^\nu\circ\chi^{(x,1^{r-x})}=\chi^\nu\circ\psi_r$;
  $\psi_r=r\cdot1_{C_r}$ follows by comparing
  $\langle\psi_r,\chi^\lambda\rangle=(-1)^{r-\lambda_1}$ on hooks (orthonormality)
  with $\langle r\cdot1_{C_r},\chi^\lambda\rangle=\frac{r|C_r|}{r!}\chi^\lambda(\rho)=\chi^\lambda(\rho)$,
  using the full-cycle lemma, integrality of Specht values (determinantal form)
  and the classification plus orthonormal-basis theorem; the vanishing of
  $\Psi_\nu$ follows from Frobenius' formula, since an r-cycle in the $S_r$
  component of a conjugate of an r-cycle-free $\sigma$ is impossible, with
  $r=1$ handled as an empty sum.
- Deps: the six manifest deps plus twelve published items actually used
  (orthonormality, orthonormal-basis, Specht classification, Frobenius formula,
  standard inner product, determinantal form, Young permutation modules,
  cycle-type/conjugation, notation). Level unchanged at 2.
- Sources: James §21.7 printed pp. 83–84; Macdonald I §3 (2) printed p. 49;
  Woods §4.3.
- Checks: `precheck` PASS (direct), 4 steps; `proof-layout` 0 defects.
- Decision: `repaired` (`["dependency"]`).

### Level-2 item 10: `thm-murnaghan-nakayama-character-rule`

- Authored `items/thm-murnaghan-nakayama-character-rule.md` (draft,
  `dependency_level: 2`), statement exactly as scaffolded, with the Step 3a
  bookkeeping repair applied: `def-finite-symmetric-group-and-permutation-notation`
  is now declared and linked. Proof: reduce to the standard two-block subgroup
  by an inner conjugation (characters are class functions), evaluate the
  restriction identity of item 2 at $(\sigma,\rho)$, substitute the full-cycle
  values of item 6, and apply the cancellation of item 5 (claim 2), giving the
  signed sum over removable strips; the final step derives the "computes every
  class" clause by induction on $n$ over the cycles of $\sigma$, with base
  $\chi^\varnothing(1)=1$.
- Deps: manifest five plus seven published items used in the proof. Level 2.
- Sources: James §21.1 printed pp. 79–80; Macdonald I §7 Example 5 p. 117;
  Woods §4.3 Theorem 4.3.1 pp. 24–29.
- Checks: `precheck` PASS, 4 steps; `proof-layout` 0 defects.
- Decision: `repaired` (`["dependency"]`) — Step 3a bookkeeping finding.

### Level-3 item 11: `cor-no-removable-cycle-length-strip-forces-a-character-zero`

- Authored `items/cor-no-removable-cycle-length-strip-forces-a-character-zero.md`
  (draft, level 3). Decompose the given r-cycle out of $\rho$ as $\rho=\sigma c$,
  apply the rule, observe the index set is empty; the hook form follows from the
  hook/rim-hook bijection (sizes of strips = hook lengths).
- Deps: manifest three plus four published items; level 3.
- Checks: `precheck` PASS; `proof-layout` 0 defects.
- Decision: `repaired` (`["dependency"]`).

### Level-3 item 12: `ex-r-cycle-filter-for-nu-three-two-and-r-three`

- Authored the B item (draft, level 3). Verified independently for this report:
  the four partitions are $(6,2),(4,4),(3,2,2,1),(3,2,1,1,1)$ with heights
  $0,1,1,2$; dimensions $20,14,70,64$; $\Psi_{(3,2)}$ has degree $0$; on the
  $(4,4)$-class the four values are $0,2,-2,0$, so the signed sum is $0$; on the
  8-cycle class all four vanish (no hook). Canonical layering 1.1, 2.1–2.3, 3.1
  adopted after the checker proposed it.
- Deps: manifest two plus six published items; level 3.
- Checks: `precheck` PASS; `proof-layout` 5 steps / 0 defects.
- Decision: `repaired` (`["dependency"]`).

### Level-3 item 13: `ex-the-s4-character-table-by-rim-hook-recursion`

- Authored the B item (draft, level 3). All 25 table entries recomputed by the
  recursion and checked against the standard table; row norms and the displayed
  inner products recomputed exactly (all norms $1$, $\langle\chi^{(3,1)},\chi^{(2,2)}\rangle=0$).
- Deps: manifest three plus eight published items; level 3.
- Checks: `precheck` PASS; `proof-layout` 0 defects.
- Decision: `repaired` (`["dependency"]`).

### Level-4 item 14: `cor-hook-divisibility-defect-zero-vanishing-criterion`

- Authored `items/cor-hook-divisibility-defect-zero-vanishing-criterion.md`
  (draft, level 4). Route: a prime dividing the order of a permutation divides
  one of its cycle lengths, proved by minimality of the order with Euclid's
  lemma and cancellation (no Bézout input); then no hook length equals that
  cycle length, and the missing-strip corollary gives vanishing; the
  equivalence with $p\nmid |S_n|/f^\lambda$ is the finite-product form of
  Euclid's lemma applied to $\prod h(x)$.
- Deps: manifest four plus nine published items; level 4.
- Checks: `precheck` PASS, 3 steps; `proof-layout` 0 defects.
- Decision: `repaired` (`["dependency"]`).

### Level-4 item 15: `cex-a-disconnected-rim-set-is-not-a-border-strip`

- Authored the B counterexample (draft, level 4). Witness recomputed: $\lambda=(2,2,1,1)$,
  $\nu=(1,1,1)$, $\lambda/\nu=\{(1,2),(2,2),(4,1)\}$ is the disjoint union of a
  vertical domino and an isolated node ($m=2$, $r=3$, $c=2$) but is disconnected,
  hence not a border strip; the LR coefficients are $1,1,0$ (unique tableaux
  exhibited) and the alternating sum is $1-1+0=0$; hook lengths $5,4,2,2,1,1$
  avoid $3$, so $\chi^{(2,2,1,1)}$ vanishes on classes containing a 3-cycle.
- Deps: manifest three plus five published items; level 4.
- Checks: `precheck` PASS, 5 steps; `proof-layout` 0 defects.
- Decision: `repaired` (`["dependency"]`).

### Level-4 item 16: `ex-murnaghan-nakayama-for-shape-five-four-four`

- Authored the B item (draft, level 4). Recomputations: hook lengths
  $7,6,5,4,1;5,4,3,2;4,3,2,1$, strip sizes $\{1,\dots,7\}$; the two 5-strips of
  the $(5,4,3,1)$-class have signs $+$ (to $(3,3,2)$, height $2$) and $-$ (to
  $(5,3)$, height $1$), with child values $0$ and $1$, giving $-1$; the unique
  7-strip to $(3,3)$ has height $2$ and $\chi^{(3,3)}(3,3)=1-(-1)=2$; the
  absence of strips of sizes $8..13$ forces vanishing on the corresponding
  classes.
- Deps: manifest five plus two published items; level 4.
- Checks: `precheck` PASS, 4 steps; `proof-layout` 0 defects.
- Decision: `repaired` (`["dependency"]`).

## Independent recomputation evidence (this session)

- A self-contained Murnaghan–Nakayama recursion and hook-length implementation
  (`/tmp/rimhooks-src/verify_remaining.py`, `/tmp/rimhooks-src/verify_s8.py`)
  recomputed: the full $S_8$ character table (all $22\times22$ values), which
  satisfies both orthogonality relations on all pairs and the degree checks
  $\sum_\lambda (f^\lambda)^2 = 8!$; the $S_4$ table (all 25 entries, norms $1$);
  the four strips above $\nu=(3,2)$ with heights $0,1,1,2$ and dimensions
  $20,14,70,64$; the values $\chi^{(6,2)}(4,4)=0$, $\chi^{(4,4)}(4,4)=2$,
  $\chi^{(3,2,2,1)}(4,4)=-2$, $\chi^{(3,2,1,1,1)}(4,4)=0$; the $(5,4,4)$ values
  $-1$ on $(5,4,3,1)$ and $2$ on $(7,3,3)$ plus the zeros for cycle lengths
  $8$–$13$; the LR coefficients $1,1,0$ of the disconnected witness; and the
  recursion's order-independence on 200 random $(\lambda,\rho)$ pairs of $S_8$.
- The $S_5$ matrices and the $2880$ determinant were recomputed exactly when
  that item was authored (see its checkpoint above).

## Post-checkpoint repairs to earlier items in this pair

- `lem-restriction-to-two-block-subgroup-has-lr-multiplicities`: step 2.1 now
  also cites `[F1]` (the block identification it uses); the strict
  proof-contract checker found the fact otherwise uncited.
- `lem-hooks-correspond-to-removable-border-strips` step 4.1, the $S_5$ example
  step 3.1 and the disconnected-rim counterexample step 3.1: the trailing tag
  lists now include the step references their text already used (found by the
  strict proof-contract checker).
- `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table`:
  `thm-character-inner-product-computes-intertwiner-dimension` added to `deps`
  (depcheck load-bearing citation) and the companion link to the $S_5$ example
  declared in `forward_refs` (fwdcheck).
- `thm-determinantal-form-of-a-specht-character`: fact `[F3]` restated with
  "$n\ge0$ and every $\nu\vdash n$" to match its source exactly
  (citation-fidelity widening candidate removed).
- Batch manifest `research/frontier-44-special-representation-examples-28-batch-19.pages.json`:
  `deps` synced to the authored item deps for the 14 items whose sets changed;
  `dependency_level` values unchanged and re-verified.

## Checks actually run (all from the repo root)

| check | command | result |
|---|---|---|
| proof format | `node tools/tsx-run.mjs tools/precheck.mts items/<16 files>` | 15 checked, 0 failing (definition n/a) |
| step layout | `node tools/proof-layout.mjs items/<16 files> <2 pages>` | 18 items, 64 steps, 0 defects |
| rendering | `node tools/rendercheck.mjs items/<16 files> <2 pages>` | OK, no defects |
| content policy | `node tools/content-policy.mjs ...-batch-19.pages.json` | 16 scoped, 0 errors, 0 warnings |
| proof contracts | `node tools/proof-contract.mjs ...-batch-19.proof-contracts.json --strict` | 16/16 items, 0 errors, 0 warnings |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-44-...` | 62 errors, all in other batches; none among the 16 owned items (levels also recomputed directly from item files: manifest = item = frontmatter) |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; advisories only, including the recorded `redundant-prereq` on the A page |
| dependencies | `node tools/depcheck.mjs --items-file <16 ids>` | OK (selected item and page cycle checks over 940 items / 292 pages) |
| dependency sources | `node tools/depsource.mjs research/plan-spec.json --run ... --items-file <16>` | 16/16 consumer coverage, 0 unresolved |
| recorded-not-proved | `node tools/extcheck.mjs --items-file <16>` | 16 items, 0 recorded-not-proved |
| forward refs | `node tools/fwdcheck.mjs --items-file <16>` | OK after declaring the companion forward reference |
| coverage | `node tools/coverage-checklist.mjs ...-batch-19.coverage.json` | 2 pages, 41 harvested results, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs ...-batch-19.pages.json` | 16 items, 0 errors |
| pathway | `node tools/pathcheck.mjs special-topics-in-representation-theory` | 0 errors, 14 warnings (draft pages unplaced; pathway-sync places them) |
| citation fidelity | `node tools/citation-fidelity.mjs ...-batch-19.proof-contracts.json` | no widening candidates |

## Item decisions (recorded via `tools/step3-decisions.mjs record-item`)

- accepted: `def-removable-border-strip-and-height`,
  `lem-hooks-correspond-to-removable-border-strips`.
- repaired with `["dependency"]` (under-declared scaffold deps completed, with
  the Step 3a bookkeeping repairs for the determinantal and Murnaghan–Nakayama
  items): `lem-restriction-to-two-block-subgroup-has-lr-multiplicities`,
  `thm-determinantal-form-of-a-specht-character`,
  `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table`,
  `lem-alternating-hook-induction-cancels-disconnected-rim-removals`,
  `ex-s5-character-table-by-fixed-tabloid-reconstruction`,
  `prop-r-cycle-virtual-character-filter`,
  `thm-murnaghan-nakayama-character-rule`,
  `cor-no-removable-cycle-length-strip-forces-a-character-zero`,
  `ex-r-cycle-filter-for-nu-three-two-and-r-three`,
  `ex-the-s4-character-table-by-rim-hook-recursion`,
  `cor-hook-divisibility-defect-zero-vanishing-criterion`,
  `cex-a-disconnected-rim-set-is-not-a-border-strip`,
  `ex-murnaghan-nakayama-for-shape-five-four-four`.
- repaired with `["statement-correctness","dependency"]`:
  `lem-character-value-on-a-full-cycle-is-supported-on-hooks`.
- All 16 receipts verified to hash the current inputs after the final edits.

## Handoff

- **Completed IDs (16/16):** the four level-0 items
  (`def-removable-border-strip-and-height`,
  `lem-restriction-to-two-block-subgroup-has-lr-multiplicities`,
  `thm-determinantal-form-of-a-specht-character`,
  `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table`), the
  four level-1 items (`lem-alternating-hook-induction-cancels-disconnected-rim-removals`,
  `lem-character-value-on-a-full-cycle-is-supported-on-hooks`,
  `lem-hooks-correspond-to-removable-border-strips`,
  `ex-s5-character-table-by-fixed-tabloid-reconstruction`), the two level-2
  items (`prop-r-cycle-virtual-character-filter`,
  `thm-murnaghan-nakayama-character-rule`), the three level-3 items
  (`cor-no-removable-cycle-length-strip-forces-a-character-zero`,
  `ex-r-cycle-filter-for-nu-three-two-and-r-three`,
  `ex-the-s4-character-table-by-rim-hook-recursion`) and the three level-4
  items (`cor-hook-divisibility-defect-zero-vanishing-criterion`,
  `cex-a-disconnected-rim-set-is-not-a-border-strip`,
  `ex-murnaghan-nakayama-for-shape-five-four-four`); both pages
  `library/special-topics-in-representation-theory/rim-hooks-and-the-murnaghan-nakayama-rule.md`
  and `...-examples.md`; the proof-contract file
  `research/frontier-44-special-representation-examples-28-batch-19.proof-contracts.json`
  (144 citation entries, 64 step entries).
- **Added suppliers:** none. No prerequisite item outside the assigned
  scaffold inventory was needed; every external supplier used is a published
  item (68 distinct dependencies checked on disk, all resolvable, none draft
  outside this pair).
- **Published concerns:** none confirmed. The only finding touching published
  content is the preserved plan advisory (`validate-plan` reports the A page's
  direct `frobenius-characteristic-...` requirement as already reached through
  `outer-products-skew-specht-modules-and-littlewood-richardson`); per the
  batch record the declared `requires` list is kept verbatim for Step 4.
- **Open obligations:** none for this pair. Run-state notes: the run-wide
  dependency-level check still reports 62 level-label errors in other,
  concurrently authored batches (none in batch 19), and the run-wide Step 3a
  scope check still shows `level-one-fock-space-and-residue-crystals` open;
  neither involves these items. The pathway warnings are the expected
  `draft-unplaced` notices that `pathway-sync` resolves at splice.
