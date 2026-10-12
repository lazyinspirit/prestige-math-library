# Step 3b — pair `modular-branching-and-the-good-node-crystal` / `...-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-modular-branching-and-the-good-node-crystal-dc540f517a8a7788`
- Batch: 22 (A page `modular-branching-and-the-good-node-crystal`, order 1573;
  B page `modular-branching-and-the-good-node-crystal-examples`, order 1574)
- Date: 2026-10-10

## Owned IDs (15; authoring order = dispatch dependency order)

A page (13): `def-generalized-jm-primary-idempotents-and-residue-summand-functors`,
`def-residue-signature-normal-good-conormal-and-cogood-nodes`,
`lem-finite-group-induction-is-coinduction-and-thus-biadjoint`,
`cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues`,
`def-good-node-and-cogood-node-crystal-operators`,
`prop-every-p-restricted-partition-is-reached-by-cogood-node-additions`,
`rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels`,
`prop-schur-functor-compares-first-level-branching-with-hecke-restriction`,
`thm-kleshchev-first-level-branching-multiplicity`,
`thm-normal-node-composition-multiplicities-under-residue-restriction`,
`thm-conormal-node-composition-multiplicities-under-residue-induction`,
`thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction`,
`thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction`.

B page (2): `ex-good-node-path-from-empty-to-a-p-restricted-partition`,
`ex-normal-and-good-nodes-for-a-large-partition`.

## Open obligations at entry

1. Five in-run suppliers of `prop-schur-functor-compares-first-level-branching-with-hecke-restriction`
   are scaffolded but possibly unauthored (batch 20): exact IDs and consuming
   steps are recorded below when the item is reached.
2. Step 3a confirmed B-statement defect: `ex-normal-and-good-nodes-for-a-large-partition`
   has the wrong `l=4` socle label `D^{(6,4,4,2,2)}` (correct: `D^{(5,4,4,3,2)}`)
   and a loose "(2.9)" citation — to be repaired during authoring.
3. Step 3a interface notes to resolve in authoring: (a) arbitrary-field versus
   splitting-hypothesis bridging; (b) undeclared JM commutativity corollary
   (and, found on audit, the false scaffold clause "each `e(i)` commutes with
   `S_{n-1}`" in the JM item — the correct invariant objects are the content
   sums); (c) undefined "modular branching graph" phrase in the reachability
   proposition.

(Checkpoints are appended item by item below.)

## Checkpoints

### 1. def-generalized-jm-primary-idempotents-and-residue-summand-functors (level 0) — authored

- Claim/conventions: primary JM projectors `P_{r,a}` and `e(i)` over a field of
  characteristic `p` (via integer minimal polynomial of `L_r` on the regular
  module plus CRT, so all eigenvalues lie in `F_p`); content sums `e_alpha`
  central idempotents; functor projectors
  `e_{alpha,alpha_i} = e_alpha^{(n-1)} P_{n,i}`; residue decomposition
  `Res = ⊕_i E_i`, `Ind = ⊕_i F_i`; `E_i`, `F_i` exact and dual-compatible.
- Repairs made: the scaffold clause "each `e(i)` commutes with `S_{n-1}`" is
  false (verified by exact computation in `QS_4`); the invariant objects are
  the content sums and the functor idempotents `e_{alpha,alpha_i}`, and the
  statement/proof now use only these. The block-identification clause (ii) is
  kept as a recorded source theorem (Kleshchev (2.41), Lyle-Mathas/Brundan);
  primitivity/exhaustiveness are not re-proved locally (flagged as open
  obligation O1 below); centrality, idempotency, orthogonality and all functor
  properties are proved locally.
- Suppliers used: `def-jucys-murphy-elements-of-the-symmetric-group-algebra`,
  `cor-jucys-murphy-elements-commute-pairwise`,
  `thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors`,
  `thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center`,
  `thm-chinese-remainder-theorem-for-comaximal-ideals`,
  `def-p-blocks-by-primitive-central-idempotents`,
  `def-restriction-induction-and-coinduction-for-group-modules`,
  `lem-the-group-ring-is-free-over-a-subgroup-ring`.
- Checks: precheck PASS (9 steps); rendercheck OK; prosecheck 0/0;
  proof-layout 9 steps 0 defects.
- Next: `def-residue-signature-normal-good-conormal-and-cogood-nodes`.

### 2. def-residue-signature-normal-good-conormal-and-cogood-nodes (level 0) — authored

- Claim/conventions: residue `c-r mod p`, i-nodes top-to-bottom, reduction of
  `-+` pairs, normal/good/conormal/cogood, `epsilon_i`, `phi_i`, transposed
  dictionary warning (Brundan's `r-c`).
- Well-definedness proved locally: termination, normal-form shape `+^a 0^c -^b`,
  local confluence of the rewriting (no critical pairs) hence unique reduced
  word, and uniqueness of the outermost signs.
- Checks: precheck n/a (definition, no phase), rendercheck OK, prosecheck 0/0.
- Source locators: Kleshchev survey §3.4 (3.12)-(3.14), §11.4; Brundan §2.2-2.4
  and Remark 2.4(II).

### 3. lem-finite-group-induction-is-coinduction-and-thus-biadjoint (level 0) — authored

- Claim: relative Frobenius isomorphism `Ind = kG⊗_{kH}M → Coind = Hom_{kH}(kG,M)`
  for finite `H ≤ G`, arbitrary `k`; inverse via a left transversal;
  both adjunctions and exactness.
- Proof local and complete (5 steps); choice-free (finite transversal by least
  elements).
- Checks: precheck PASS; rendercheck OK; prosecheck 0/0.

### 4. cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues (level 1) — authored

- Claim: `soc(D(μ)↓) = ⊕_{i: ε_i>0} D(μ\A_i)`, multiplicity-free.
- Structure: the residue-refined socle theorem is a *recorded source input*
  (Kleshchev II Thm 0.5 via survey §11.4; Brundan Thm 2.6 with §5.5-5.7);
  the local content is the residue decomposition, the sum over summands and
  multiplicity-freeness via the classification of simples. Flagged as O2 below.
- Suppliers declared: `def-residue-signature-...`, `def-generalized-jm-...`,
  `thm-modular-simple-modules-...`,
  `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions`,
  `prop-p-regular-and-p-restricted-simple-labels-...`.
- Checks: precheck PASS; rendercheck OK.

### 5. def-good-node-and-cogood-node-crystal-operators (level 1) — authored

- Claim: partial operators `ẽ_i`, `f̃_i`; `μ = f̃_iν ⟺ ν = ẽ_iμ` for
  p-restricted partitions; ranks ±1; at most one good/cogood per residue.
- Proof fully local: stack algorithm for the reduced signature; the
  first-surviving-`-` / last-surviving-`+` flip lemma proved by stack and
  prefix-count analysis; geometric comparison of the `i`-words of `μ` and
  `μ∖X`; closure of both operators on p-restricted partitions proved by the
  two bad-case analyses (a removable `i`-node `B` above the good node would
  survive or force the good node to die; for the cogood node the next
  `i`-node `D` below it is also addable, so both survive together). The
  scaffold Fact [F4] (a false general preservation claim) was replaced.
- Checks: precheck PASS (9 steps); rendercheck OK.

### 6. prop-every-p-restricted-partition-is-reached-by-cogood-node-additions (level 2) — authored

- Claim: every p-restricted partition is reachable from ∅ by cogood additions
  (and descends to ∅ by good deletions); "modular branching graph" rephrased
  to a defined graph of the cogood operators (interface note 3 resolved).
- Proof local: restriction faithfulness via the counit of the adjunction;
  nonzero socle; the residue-refined source socle theorem (O2) forces some
  `ε_i > 0`; closure and inverse property from item 5; induction on rank.
- Note: the scaffold's `(kS_{d-1})^{⊕d} ⊗ Res M ≅ M` identity is false as
  written; replaced by the honest counit-surjectivity argument, with the
  freeness lemma kept as the rank statement for `kS_d` over `kS_{d-1}`.
- Checks: precheck PASS; rendercheck OK; prosecheck 0/0.

### 7. rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels (level 2) — authored

- Remark recording the inductive definition of `Ḋ(μ) = hd(F_i Ḋ(ẽ_iμ))` and
  the Ariki identification (11.1) with the cellular labels; boundary drawn so
  neither direction is used circularly.
- Checks: precheck n/a; rendercheck OK; prosecheck 0/0.

### 8. ex-good-node-path-from-empty-to-a-p-restricted-partition (level 3) — authored

- Example authored with full `## Verification`: all nodes, residues and
  reduced signatures recomputed by hand; the `(+,+)` word of `(1,1)` at `i=1`
  (cogood `(3,1)`), the `(+,-)` word of `(1,1,1)`, and both reverse
  deletions checked; matches the reachability proposition.
- Checks: precheck PASS; rendercheck OK; prosecheck 0/0.

### 9. prop-schur-functor-compares-first-level-branching-with-hecke-restriction (level 12) — authored, decision ESCALATED

- Claim/conventions: for a field $F$, $q\in F^\times$ and $\ell$ the quantum
  characteristic, (i) $f_{n-1,r-1}(L_n(\lambda)^1)=f_{n,r}(L_n(\lambda))\downarrow_{H(r-1)}$
  via the weight comparison; (ii) the Hom comparison
  $\operatorname{Hom}_{S(n,r)}(W,V)\cong\operatorname{Hom}_{H(r)}(fW,fV)$ for
  $W^{(e)}=W$, $V_{(e)}=0$ (Brundan's Lemma 5.6); (iii) socle labels of the
  first level are $\ell$-restricted (Lemma 5.7); (iv) the $q=1$ specialization
  of (i)-(iii) via the batch-20 Hecke/group item.
- Repairs/notes: the SYMR-9 replacement of the Kleshchev I §2.12(v) citation by
  this proof-bearing comparison is implemented; the manifest strategy's bare
  decimal references to Brundan's Lemmas 5.6/5.7 were replaced in the proof
  steps by references to the fact [F6] (needed for the contract grammar).
- Suppliers: three batch-20 items of `type-a-hecke-specht-modules-and-cellular-bases`
  are consumed and are not finished on disk:
  `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`
  (appeared mid-run at 22:46 but is an 82-line unfinished definition, and it
  fixes the right-module functor $X\mapsto Xe$ while this proof uses the
  left-module $eV$; convention interface to reconcile),
  `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`
  (missing), and
  `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
  (missing). Consuming steps: [F2] in steps 1.1, 1.2, 2.1; [F4] in 2.1, 2.2;
  [F5] in 2.2.
- Checks: precheck PASS; rendercheck OK; contract strict has exactly two
  residuals (F4 → missing Weyl/simple transfer, F5 → missing $q=1$
  specialization); depcheck 2 dep-unresolved + 4 link-unresolved; fwdcheck 4
  link-unplanned; all attributable to the two missing suppliers.
- Decision: `escalate` (`["dependency"]`), recorded.

### 10. thm-kleshchev-first-level-branching-multiplicity (level 13) — authored, decision ESCALATED

- Claim: for $p$-regular $\lambda$ and a removable node $A=(j,\lambda_j)$ with
  $\lambda(j)$ $p$-regular, $[D^\lambda\downarrow_{S_{n-1}}:D^{\lambda(j)}]=0$
  when $A$ is not normal and $=1+\#\{$normal removable nodes strictly above $A$
  with the same residue$\}$ when $A$ is normal, normality read through the
  transposed-node dictionary of $\lambda'$.
- Proof route: reduction to the first level by the Schur-functor comparison
  [F2] in step 1.1; recorded Kleshchev 1997 Theorem 9.3 (first-level count
  $\gamma$) in step 2.1; recorded Theorem 1.4 with Corollary 5.8(ii) in step
  3.1; calibration $p=3$, $\lambda=(5,3,2)$ with multiplicities $1,2,0$
  reproduced from the source's worked example in step 4.1. No Fock-space or
  Ariki input; no claim of a local re-derivation of Kleshchev Part I/II.
- Open obligation: step 1.1 consumes the escalated Schur-functor comparison,
  so the decision is `escalate` (`["dependency"]`), to be resolved with the
  three batch-20 suppliers above.
- Checks: precheck PASS; rendercheck OK; contract strict clean for this item.

### 11. thm-normal-node-composition-multiplicities-under-residue-restriction (level 14) — authored, decision accept

- Claim: for a removable $i$-node $A$ of a $p$-restricted $\mu$ with $\nu=\mu\setminus A$
  $p$-restricted, $[E_iD(\mu):D(\nu)]=0$ if $A$ is not normal and equals the
  number of normal $i$-nodes weakly below $A$ (counting $A$) if $A$ is normal.
- Local content: step 1.1 localizes the factor $D(\nu)$ in the residue summand
  $E_i$ by the transposition-class-sum scalar action ($L_d$ acts by
  $\operatorname{res}(A)$); step 2.1 carries the count from the recorded
  Kleshchev II Theorem 0.5 / survey Theorem 11.6(ii), with the alternative
  transfer from the $p$-regular side through the transpose/sign dictionary
  (re-checked against survey Theorem 11.6, which states exactly the
  weakly-below count); step 3.1 calibrates on $p=3$, $\mu=(3,3,2,1,1)$
  (counts $2,1$).
- Checks: precheck PASS; rendercheck OK; prosecheck 0 errors; contract strict
  clean; the one advisory widening candidate (F2) was read and judged faithful
  (the source's separate $m\ge2$ character-value clause is not used and this is
  now stated in the fact).

### 12. thm-conormal-node-composition-multiplicities-under-residue-induction (level 15) — authored, decision repaired

- Claim: for an addable $i$-node $B$ of $p$-restricted $\mu$ with $\nu=\mu\cup B$
  $p$-restricted, $[F_iD(\mu):D(\nu)]=0$ if $B$ is not conormal and equals the
  number of conormal $i$-nodes weakly above $B$ (counting $B$) if $B$ is
  conormal. Re-checked against survey Theorem 11.7(ii), which states exactly
  this.
- Repair: the scaffold strategy proposed
  $[F_iD(\mu):D(\nu)]=[E_iD(\nu):D(\mu)]$ as the mechanism; that unshifted
  identity is false in positive characteristic, and step 2.2 exhibits the
  failure $p=2$, $\mu=(1)$: $F_1D(1)\cong kS_2$ has $D(1,1)$ with multiplicity
  $2=\varphi_1(1)$, while $[E_1D(1,1):D(1)]=1$. The proof instead uses the
  recorded conormal theorem and the dually stated transfer; the false route is
  recorded in the item's Remarks.
- Checks: precheck PASS; rendercheck OK; contract strict clean.

### 13. thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction (level 15) — authored, decision accept

- Claim: for the good $i$-node $A$ ($\varepsilon_i(\mu)>0$) and $\nu=\mu\setminus A$,
  $E_iD(\mu)$ has simple socle and simple head $D(\nu)$ and total multiplicity
  $\varepsilon_i(\mu)$.
- Proof: socle from the residue-refined socle corollary (step 1.1), total
  multiplicity from the normal-node theorem with the weakly-below count
  $=\varepsilon_i(\mu)$ (step 2.1), head by antipode-invariance/self-duality
  (step 2.2); middle Loewy layers explicitly not claimed (step 3.1).
- Checks: precheck PASS; rendercheck OK; contract strict clean.

### 14. thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction (level 16) — authored, decision accept

- Claim: for the cogood $i$-node $B$ ($\varphi_i(\mu)>0$) and $\nu=\mu\cup B$,
  $F_iD(\mu)$ has simple socle and head $D(\nu)$ and total multiplicity
  $\varphi_i(\mu)$.
- Proof: multiplicity from the conormal-node theorem applied to the cogood node
  (step 1.1), socle/head from the recorded dual source statement plus
  self-duality (steps 2.1-2.2), calibration $p=2$, $\mu=(1)$
  ($F_1D(1)\cong kS_2$, socle/head/ total multiplicity $2=\varphi_1(1)$) in
  step 2.2. The proof explicitly does not use the false unshifted duality.
- Checks: precheck PASS; rendercheck OK; contract strict clean.

### 15. ex-normal-and-good-nodes-for-a-large-partition (level 16) — authored, decision repaired

- Claim/repair: Brundan's Example 2.8 for $\lambda=(6,4,4,3,2)$ at $\ell=3,4$
  recomputed row by row: $R^{normal}=\{1,4,5\}$, $R^{good}=\{1,5\}$ at
  $\ell=3$ (socle $D^{(5,4,4,3,2)}\oplus D^{(6,4,4,3,1)}$, decomposable), and
  $R^{normal}=\{1,3,5\}$, $R^{good}=\{1\}$ at $\ell=4$ (socle the single
  $D^{(5,4,4,3,2)}=D^{\lambda(1)}$, indecomposable by self-duality). The
  scaffold's wrong label $D^{(6,4,4,2,2)}$ and its loose (2.9) citation are
  removed; the citation now goes through [F2] (Brundan Theorem 2.6 with
  §2.10, recorded).
- Checks: precheck PASS; rendercheck OK (three multiline displays joined in
  one source line each); prosecheck 0 errors; contract strict clean.

## Status at handoff

- All 15 owned item files authored and checkable; both library pages created:
  `library/special-topics-in-representation-theory/modular-branching-and-the-good-node-crystal.md`
  (13 items) and `...-examples.md` (2 examples).
- Scope review refreshed and current for this A page; 13 item decisions close
  (7 `repaired`: def-JM, def-residue, cor-socle, def-operators, prop-reach,
  thm-conormal, ex-normal; 6 `accept`: lem-finite-group, rem-crystal,
  thm-normal, thm-good, thm-cogood, ex-good-path); 2 remain `escalate`
  (prop-schur, thm-kleshchev) pending the batch-20 suppliers.
- No new item IDs were created; no sibling or published content was edited.

## Checks actually run (final battery, all with explicit scope)

- `node tools/tsx-run.mjs tools/precheck.mts <15 items>` — PASS (13 phase
  items checked, 0 failing).
- `node tools/rendercheck.mjs <15 items + 2 pages>` — OK (no multiline
  displays, all math KaTeX-parses).
- `node tools/prosecheck.mjs <15 items>` — 0 errors, 4 heuristic
  count-in-prose warnings; pages 0 errors, 2 warnings.
- `node tools/proof-layout.mjs <15 changed item paths>` (one batched run after
  the final edit) — 15 items, 77 steps, 0 defects.
- `node tools/content-policy.mjs research/...batch-22.pages.json` — 15 scoped
  items, 0 errors.
- `node tools/proof-contract.mjs research/...batch-22.proof-contracts.json --strict`
  — 15/15 checked, 2 errors, both `citation-fact-uncontracted` for prop-schur
  [F4] and [F5] citing the two unauthored batch-20 suppliers (escalation
  residual). All other citation, derivation and boundary obligations pass.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote` — exit 0, no
  missing quotes; 1 advisory widening candidate on thm-normal [F2], read and
  judged faithful.
- `node tools/boundary-audit.mjs ...` — no contradicted dispositions, no
  template-reuse clusters (after making the three theorem rationales specific).
- `node tools/manifest-deps.mjs research/...batch-22.pages.json` — 15 items,
  0 errors; manifest deps synced to the authored frontmatter.
- `node tools/item-dependency-levels.mjs check --run ...` — 862 items across
  100 pages, no drift; every authored `dependency_level` verified.
- `node tools/coverage-checklist.mjs research/...batch-22.coverage.json --require-destination`
  — 2 pages, 29 harvested results, 0 errors.
- `node tools/source-fetch-check.mjs --coverage research/...batch-22.coverage.json`
  — 5/5 sources fetch-verified.
- `node tools/depcheck.mjs --items-file <batch-22 ids>` — 6 errors, all
  prop-schur links/deps to the two missing suppliers (escalation).
- `node tools/fwdcheck.mjs --items-file <batch-22 ids>` — 4 errors, same
  cause (`link-unplanned`, a mid-run class also present on sibling batch-23).
- `node tools/extcheck.mjs --items-file <batch-22 ids>` — 0 errors, OK.
- `node tools/depsource.mjs research/plan-spec.json --run ... --items-file ...`
  — 0 unresolved.
- `node tools/validate-plan.mjs research/plan-spec.json --run ...` — 4 hard
  errors, all on other pairs' pages (character-polynomials-fi-modules,
  projective-functors-and-the-soergel-functor, compact-kahler-hodge-foundations,
  complex-algebraic-stratified-topology); this pair's pages carry only 8
  `redundant-prereq` warnings (see Step 4 notes).
- `node tools/frontier-dependency-ledger.mjs refresh --run ...` — refreshed
  and deduplicated (10 rows in `...batch-22.cross-batch-dependencies.json`).
- `node tools/step3-decisions.mjs check --run ... --phase scope` — this A page
  closed; final-phase open items in the pair are exactly the two escalations.

## Published concerns and confirmed scaffold defects (with evidence)

1. **Confirmed, repaired — B statement (Step 3a finding).**
   `ex-normal-and-good-nodes-for-a-large-partition` carried the wrong
   $\ell=4$ socle label $D^{(6,4,4,2,2)}$; the correct label is
   $D^{(5,4,4,3,2)}=D^{\lambda(1)}$ (Brundan Theorem 2.6 with §2.10 and the
   transposed dictionary). Confidence: high (recomputed). Repaired.
2. **Confirmed scaffold defects, repaired locally (report for the ledger).**
   (a) `def-generalized-jm-...` asserted that each primary idempotent
   $e(\mathbf i)$ commutes with $S_{n-1}$; false in general in characteristic
   $p$ (exact computation in $kS_4$), replaced by the content-sum and
   functor-idempotent construction.
   (b) `def-good-node-and-cogood-node-crystal-operators` carried a scaffold
   fact claiming general preservation of removable nodes; false, replaced by
   the local stack/flip proof.
   (c) `prop-every-p-restricted-partition-...` scaffolded the tensor identity
   $M\cong(kS_{d-1})^{\oplus d}\otimes_{kS_{d-1}}\operatorname{Res}M$; false as
   written, replaced by counit surjectivity.
   (d) `thm-conormal-...` scaffolded the unshifted duality
   $[F_iD(\mu):D(\nu)]=[E_iD(\nu):D(\mu)]$; false at $p=2$ ($2\ne1$),
   replaced by the recorded survey Theorem 11.7(ii).
3. **Citation widened beyond its source, repaired.**
   `cor-socle-...` [F2] originally sourced the $p$-restrictedness of
   $\mu\setminus A_i$ to the signature definition alone; re-sourced to the
   survey's presentation discussion (§11.5, after Theorem 11.8, printed p. 54,
   verified in the fetched 66-page text) and the local step 4.1 sentence was
   corrected (the $d=1$ display has the single summand $D(\varnothing)=k$).
4. **No published item outside this pair was found defective or edited.**

## Open obligations escalated (exact IDs, consumers, consuming steps)

- `def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`
  (batch-20 page `type-a-hecke-specht-modules-and-cellular-bases`): file
  appeared mid-run but unfinished; consumed by
  `prop-schur-functor-compares-first-level-branching-with-hecke-restriction`
  steps 1.1, 1.2, 2.1 ([F2], [F4]) and, transitively, by
  `thm-kleshchev-first-level-branching-multiplicity` step 1.1. Convention
  interface to reconcile (right-module $X\mapsto Xe$ vs left-module $eV$).
- `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`
  (same page): missing; consumed by prop-schur [F4] steps 2.1, 2.2 and
  transitively by thm-kleshchev step 1.1.
- `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`
  (same page): missing; consumed by prop-schur [F5] step 2.2 and transitively
  by thm-kleshchev step 1.1.
- Until these are authored and the uses reconciled, the two decisions stay
  `escalate` and the pair's strict contract retains the two residual errors
  listed above. The cross-batch ledger carries one row per consumer/supplier
  pair (10 rows), with two rows now `verified` (the q-Schur algebra and the
  quantum characteristic items, read on disk).
- Step-5 scope: the six source-recorded items (`cor-socle`, `thm-kleshchev`,
  `thm-normal`, `thm-conormal`, `thm-good`, `thm-cogood`) record central
  theorems of Kleshchev II (1995)/survey/1997 and Brundan (1998) with exact
  locators; no full local re-derivation of Kleshchev Part I/II or of the
  translation-functor machinery is claimed.

## Step 4 notes (plan/prose and shared-file amendments)

- Batch-22 manifest updated without touching siblings: every item's `deps`
  synced to the authored frontmatter, statements re-synced for all 15 items,
  and the strategies of the five materially repaired items rewritten
  (def-JM, def-operators, prop-reach, thm-conormal, ex-normal). `requires` of
  both pages unchanged.
- The two library pages were created; `validate-plan` reports 8
  `redundant-prereq` warnings on the A page (direct `requires` entries also
  reached through the sibling prerequisite pages). These are Step 4
  transitive-reduction candidates, not errors.
- The four `validate-plan` hard errors are on other pairs' pages and are
  reported here as pre-splice plan mismatches for their owners
  (character-polynomials-fi-modules-and-representation-stability,
  projective-functors-and-the-soergel-functor-in-category-o,
  compact-kahler-hodge-foundations,
  complex-algebraic-stratified-topology).
- `fwdcheck`'s `link-unplanned` failures for the missing batch-20 suppliers
  are the run-wide mid-flight class (the same class is present on the
  sibling batch-23); the item list of `plan-spec.json` is still empty and the
  links resolve once the plan is spliced with the batch manifests.
