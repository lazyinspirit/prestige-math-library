# Step 3b — scaffold audit and authoring: `tensor-product-crystals-and-highest-weight-crystal-uniqueness`

Run `frontier-44-special-representation-examples-28`, batch 7 (orders 1530/1531),
role `alpha-high`, label
`step3b-pair-tensor-product-crystals-and-highest-weight-crystal-uniqueness-b42afe089c06711f`.
A page `tensor-product-crystals-and-highest-weight-crystal-uniqueness` (10 new
items), B page `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples`
(4 new items), category `special-topics-in-representation-theory`. Own only this
pair; sibling rows in shared batch files are preserved. Report opened at entry
2026-10-10 before any edit.

## Owned IDs and open obligations at entry

A-page items (all to be authored here, dispatch dependency order):
`lem-tensor-products-of-integrable-weight-modules-are-integrable` (L4);
`def-tensor-product-of-crystals` (L5);
`lem-i-string-components-of-a-crystal-lattice` (L5);
`def-highest-weight-element-and-connected-highest-weight-crystal` (L6);
`thm-crystal-basis-tensor-product-rule` (L6);
`lem-crystal-tensor-product-weight-epsilon-and-phi-formulas` (L7);
`thm-the-highest-weight-crystal-b-lambda-exists` (L7);
`prop-dual-crystal-and-reversal-conventions` (L8);
`thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` (L8);
`thm-highest-weight-components-in-a-tensor-product-crystal` (L9).

B-page items (all to be authored here):
`cex-changing-the-tensor-equality-convention-changes-the-crystal` (L8);
`ex-tensor-crystal-b-one-tensor-b-one-for-sl-two` (L8);
`ex-highest-components-in-a-small-type-a-two-tensor-crystal` (L10);
`ex-dual-crystal-reverses-arrows-and-weights` (L11).

Deliverables: 14 item files, the two page files
`library/special-topics-in-representation-theory/tensor-product-crystals-and-highest-weight-crystal-uniqueness.md`
and `…-examples.md`, `…-batch-7.proof-contracts.json`, ordinary current item
decisions, and this report.

Open obligations at entry:
1. **Direct in-run prerequisite pair `kashiwara-operators-and-crystal-lattices`
   (batch 6, orders 1528/1529) is scaffolded but not yet authored** — no
   `items/` files existed at entry. Its items are direct suppliers of this
   page: `def-crystal-lattice-and-crystal-basis` (consumed by
   `lem-tensor-products-of-integrable-weight-modules-are-integrable` 2.1(?) via
   the lattice axioms, by `def-tensor-product-of-crystals`,
   `lem-i-string-components-of-a-crystal-lattice`,
   `thm-crystal-basis-tensor-product-rule`,
   `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`);
   `def-kashiwara-crystal-operators` (consumed by the tensor definition, the
   string-component lemma and the tensor rule);
   `def-crystal-graph-epsilon-phi-and-weight` (consumed by the tensor
   definition, ε/φ formulas, highest-weight definitions, tensor-rule
   components); `def-kashiwara-lattices-lambda-and-infinity` (consumed by
   `def-highest-weight-element-and-connected-highest-weight-crystal`,
   `thm-the-highest-weight-crystal-b-lambda-exists`, the uniqueness theorem);
   `thm-unique-kashiwara-i-string-decomposition` (consumed by the string
   component lemma and the tensor rule);
   `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` (rank-one block
   of the tensor rule; also the counterexample);
   `thm-grand-loop-existence-of-highest-weight-crystal-bases` (consumed by
   `thm-the-highest-weight-crystal-b-lambda-exists` and the uniqueness
   theorem). Consumers are authored against the exact scaffolded interfaces;
   their decisions stay escalated until each supplier is completed and the
   actual proof use is reconciled.
2. **Batch-5 pair `divided-powers-integral-forms-and-quantum-highest-weights`
   is scaffolded but not yet authored** — its items are direct suppliers:
   `def-quantum-weight-module-and-integrability` (weight grading, integration,
   finite-cone support in the integrability lemma, the tensor rule and the
   uniqueness theorem), `prop-integrable-quantum-highest-weight-modules-are-semisimple`
   (the declared-AC supplier of the uniqueness theorem), and
   `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`
   (canonicity of $V(\lambda)=L(\lambda)$ used by $B(\lambda)$ and the
   uniqueness theorem). Same escalation rule.
3. Page edges: A page requires batch-6 page `kashiwara-operators-and-crystal-lattices`
   (in flight) and the published page `tensor-products-of-modules`; B page
   requires the A page. Open until the batch-6 pair is authored.
4. Choice: `def-axiom-of-choice` is declared in exactly two pair items —
   `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`
   (single use: simultaneous selection of bases of the finite-dimensional
   maximal-vector spaces in the semisimple decomposition, plus simultaneous
   lifts of finite top residue bases) and its consumer
   `thm-highest-weight-components-in-a-tensor-product-crystal` (inherited);
   also declared in the consumer `ex-highest-components-in-a-small-type-a-two-tensor-crystal`.
   All other items state no choice principle.
5. All 14 IDs are original scaffold IDs (present in the Step-1 inventory), so
   they require ordinary current item decisions even though the files are newly
   written; no auditor bypass applies.

## Checkpoint log

(updated after each item; resume here)

### L4 A item 1: `lem-tensor-products-of-integrable-weight-modules-are-integrable`

- **Authored** `items/lem-tensor-products-of-integrable-weight-modules-are-integrable.md`
  (draft, `origin: pipeline`, `dependency_level: 4`, `proof_strategy: direct`).
- **Claim/conventions.** The tensor product of two chosen $P$-graded type-one
  weight modules carries the coproduct action
  $u\cdot(m_1\otimes m_2)=\sum u'm_1\otimes u''m_2$; (a) grading by
  $\bigoplus_{\mu_1+\mu_2=\mu}$, (b) local nilpotence on pure tensors via the
  $q$-binomial expansion (no integrality), (c) finite weight spaces and finite
  cone support, (d) the free $A_0$-tensored lattice with weighted residue
  basis. No choice.
- **Actual proof route.** Step 1.1 well-definedness of the action (factorization
  through the tensor product by the universal property, associativity from
  $\Delta(uv)=\Delta(u)\Delta(v)$, unitality from $\Delta(1)=1\otimes1$);
  1.2 decomposition by two applications of direct-sum compatibility; 1.3
  $F_i$ local nilpotence with $yx=q_i^{-2}xy$; 2.1 weight-module structure and
  part (a); 2.2 $E_i$ with $yx=q_i^2xy$ and extension to finite sums; 2.3
  finiteness argument over the finitely many cones; 2.4 freeness, injectivity,
  generation and weight grading of $L_1\otimes_{A_0}L_2$; 3.1
  $L/qL\cong(L_1/qL_1)\otimes_{\mathbb Q}(L_2/qL_2)$ with the two inverse
  maps; 4.1 choice audit.
- **Dependencies used.** Exactly the manifest deps plus the published
  `thm-universal-property-of-module-tensor-products` (needed to factor the
  action through the tensor product; item deps are a superset of the manifest
  deps, manifest unchanged). All six manifest suppliers are batch-5/batch-6
  scaffolded items not yet authored at entry: `def-quantum-weight-module-and-integrability`,
  `def-crystal-lattice-and-crystal-basis` — flagged for reconciliation.
- **Checks.** `precheck` PASS (direct, 1/1 clean after adopting the canonical
  layering 1.1–1.3, 2.1–2.4, 3.1, 4.1); `proof-layout` 1 item / 9 steps /
  0 defects. Contract entry owed.

### L5 A item 2: `def-tensor-product-of-crystals`

- **Authored** `items/def-tensor-product-of-crystals.md` (draft, definition, no
  proof phase, `dependency_level: 5`). The full scaffolded Definition is
  preserved: weight additivity, the two-case $\tilde f_i$ (strict on the first
  factor) and $\tilde e_i$ (non-strict) rules, zero conventions, the
  left-to-right preference, the split equality case with the counterexample
  reference, and the caveat that the Definition asserts nothing about arbitrary
  crystal data. `precheck` reports not-applicable (no proof phase).

### L5 A item 3: `lem-i-string-components-of-a-crystal-lattice`

- **Authored** `items/lem-i-string-components-of-a-crystal-lattice.md` (draft,
  `dependency_level: 5`, `proof_strategy: direct`).
- **Claim/route.** (a) string components of $u\in L$ lie in $L$ via
  $u_n=T_n-\tilde f_iT_{n+1}$; (b) the direct lattice string decomposition by
  uniqueness of admissible decompositions; (c) the simultaneous induction on
  the largest string index giving the single surviving component modulo $q$,
  $n_0=\varepsilon_i(u+qL)$ and the residue formulas for $\tilde e_i,\tilde f_i$
  including both endpoints. Depends only on the batch-6 string decomposition
  and crystal-lattice data; no finite-dimensionality or choice.
- **Checks.** `precheck` PASS (direct, canonical layering 1.1, 2.1–2.3, 3.1,
  4.1); `proof-layout` 1 item / 6 steps / 0 defects.

### L6 A item 4: `def-highest-weight-element-and-connected-highest-weight-crystal`

- **Authored** the definition item (draft, `dependency_level: 6`): highest
  weight elements, the lowering-generated subcrystal $F(b)$, the connected
  component $C(b)$, highest weight crystals, the two separated conditions, the
  abstract-crystal caveat and the notation $B(\lambda)=\mathcal B(\lambda)$,
  $P^+$. `precheck` not-applicable (no proof phase).

### L6 A item 5: `thm-crystal-basis-tensor-product-rule`

- **Authored** `items/thm-crystal-basis-tensor-product-rule.md` (draft,
  `dependency_level: 6`, `proof_strategy: direct`).
- **Claim/route.** $(L_1\otimes L_2,B_1\otimes B_2)$ is a crystal basis with
  the two-case rule; the proof reduces a residue to a single-component lift
  (string lemma), passes to the finite rank-one block inside $U_iw_1\otimes
  U_iw_2$ (rank-one supplier), transports the congruences back along
  $\varphi_i(b_1)=a_1-n_1$, $\varepsilon_i(b_2)=n_2$, proves full lattice
  stability for arbitrary lattice vectors BEFORE transporting congruences
  (no stability of a $q$-error is assumed), and closes the partial-inverse
  axiom including the tie. No finite-dimensionality, bounded support, uniform
  nilpotence or choice.
- **Checks.** `precheck` PASS (direct, canonical layering 1.1, 1.2, 2.1, 3.1,
  4.1, 5.1, 6.1, 7.1); `proof-layout` 1 item / 8 steps / 0 defects.

### L7 A item 6: `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas`

- **Authored** the $\varepsilon/\varphi$ lemma (draft, `dependency_level: 7`,
  direct): the two integer-pair bookkeeping with $p=\varphi_i(b_1)$,
  $a=\varepsilon_i(b_1)$, $s=\varepsilon_i(b_2)$, $r=\varphi_i(b_2)$; the
  branch/tie assertions of (d) derived from the actual step counts rather than
  from max-attainment alone; partial-inverse consistency (e); string iteration
  (f). `precheck` PASS (canonical layering 1.1, 2.1, 3.1, 4.1,
  5.1); `proof-layout` 1 item / 7 steps / 0 defects.

### L7 A item 7: `thm-the-highest-weight-crystal-b-lambda-exists`

- **Authored** the $B(\lambda)$ theorem (draft, `dependency_level: 7`, direct):
  (i) top residue existence and $\tilde e_ib_\lambda=0$ from the support
  $\lambda-Q_+$; (ii) lowering-word generation by the recursive spanning clause
  and induction on height; (iii) Kashiwara's Lemma 2.6.1(i) argument using the
  finite basis $\mathcal B(\lambda)_\mu$, pairwise-distinct $\tilde e_i$-images
  and step 2.1. `precheck` PASS (1.1, 2.1, 3.1, 4.1); `proof-layout` 1 item /
  4 steps / 0 defects.

### L8 A item 8: `prop-dual-crystal-and-reversal-conventions`

- **Authored** the dual-crystal proposition (draft, `dependency_level: 8`,
  direct): (i) partial inverses, reversed arrows, maximal iterated powers,
  weight pairing and involutivity; (ii) the tensor swap
  $b_1\otimes b_2\mapsto b_2^\vee\otimes b_1^\vee$ verified on all four
  comparisons by the two-case rule; scope note restricting the construction to
  crystals of integrable-module crystal bases (no dual for $B(\infty)$).
  `precheck` PASS; `proof-layout` 1 item / 4 steps / 0 defects.

### L8 A item 9: `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`

- **Authored** the uniqueness/decomposition theorem (draft,
  `dependency_level: 8`, direct; AC declared).
- **Route.** Step A top-isotypic decomposition with maximal weight $\lambda$;
  Step B the minimal-$n$ descent lemma for $V(\lambda)^{\oplus m}$ built on the
  single surviving-component clause of the batch-6 uniqueness theorem
  ($b^{(j)}=0$ by the unique-highest-element clause); Step C
  $L\cap N_0=\mathcal L(\lambda)^{\oplus m}$ by descending induction; Step D
  the lattice splitting $L=(L\cap N_0)\oplus(L\cap N_1)$; Step E the residue
  basis splitting with $B_0$ equal to the standard basis by lowering-word
  generation (cardinality argument); Step G locally weight-finite iteration
  producing $\Phi$ and the multiset; Step H components via
  `thm-the-highest-weight-crystal-b-lambda-exists`; Choice audit (one
  declared AC use as recorded).
- **Checks.** `precheck` PASS (canonical layering after one layering-only
  repair); `proof-layout` 1 item / 8 steps / 0 defects.

### L8 B item 10: `cex-changing-the-tensor-equality-convention-changes-the-crystal`

- **Authored** the convention counterexample (draft, `dependency_level: 8`,
  `provenance.statement: ai-generated` with `generation.role: counterexample`).
  The exchanged-equality rule fails the partial-inverse axiom at
  $v_1\otimes w_1$ in $B(2)\otimes B(2)$ for $\mathfrak{sl}_2$
  ($\tilde e_1^{\prime}\tilde f_1^{\prime}(v_1\otimes w_1)=v_2\otimes w_0$),
  and the modified graph has a four-vertex string against the correct
  three-vertex $B(2)$ component; the strict-both and non-strict-both variants
  are recorded with their failing vertices. `precheck` PASS
  (1.1, 2.1, 3.1, 4.1, 5.1, 6.1 after one layering-only repair);
  `proof-layout` 1 item / 6 steps / 0 defects.

### L8 B item 11: `ex-tensor-crystal-b-one-tensor-b-one-for-sl-two`

- **Authored** the $B(1)\otimes B(1)$ example (draft, `dependency_level: 8`,
  direct). Vertex-by-vertex computation of the two components
  $B(2)\sqcup B(0)$, the $\varepsilon_1/\varphi_1$ table against the max
  formulas, the component identification and the dimension cross-check; no
  uniqueness theorem and no choice. `precheck` PASS (1.1, 2.1, 3.1, 4.1, 5.1);
  `proof-layout` 1 item / 5 steps / 0 defects.

### L9 A item 12: `thm-highest-weight-components-in-a-tensor-product-crystal`

- **Authored** (draft, `dependency_level: 9`, direct, AC inherited): (a) the
  highest-vertex criterion via the $\varepsilon$ max formula and dominance;
  (b) each highest vertex generates a canonical $B(\lambda)$ component via the
  uniqueness theorem applied to $M_1\otimes M_2$; (c) the disjoint-union
  decomposition and the multiplicity statement; the AC is used only through
  the inherited supplier. `precheck` PASS (1.1, 2.1, 3.1);
  `proof-layout` 1 item / 3 steps / 0 defects.

### L10 B item 13: `ex-highest-components-in-a-small-type-a-two-tensor-crystal`

- **Authored** (draft, `dependency_level: 10`, direct): the $A_2$ standard
  crystal data, the highest-vertex criterion computation giving exactly
  $u_1\otimes u_1$ and $u_1\otimes u_2$, the direct check that $u_1\otimes u_3$
  is not highest, the component identification $B(2\lambda_1)\sqcup B(\lambda_2)$
  with $9=6+3$, and the source cross-check; AC only through the inherited
  uniqueness theorem. `precheck` PASS (1.1, 2.1, 3.1, 4.1, 5.1, 5.2 after one
  layering-only repair); `proof-layout` 1 item / 6 steps / 0 defects.

### L11 B item 14: `ex-dual-crystal-reverses-arrows-and-weights`

- **Authored** (draft, `dependency_level: 11`, direct): (A)
  $B(1)^\vee\cong B(1)$ with highest vertex $v_1^\vee$; (B)
  $B(\lambda_1)^\vee\cong B(\lambda_2)$ compared against the dual standard
  $\mathfrak{sl}_3$ crystal; (C) the tensor swap on $B(1)\otimes B(1)$ with
  both sides $B(2)\sqcup B(0)$; no choice and no general uniqueness theorem.
  `precheck` PASS (1.1, 2.1, 3.1, 4.1 after removing one stray textual
  forward reference); `proof-layout` 1 item / 4 steps / 0 defects.

### Pages (both authored)

- `library/special-topics-in-representation-theory/tensor-product-crystals-and-highest-weight-crystal-uniqueness.md`
  (draft; 10 items in manifest order; `requires` = batch-6 page and the
  published `tensor-products-of-modules`; body states the left-to-right
  convention, the no-finite-dimensionality scope of the tensor rule, the
  abstract-crystal caveat, the locally weight-finite indexed uniqueness and
  the single declared AC use).
- `library/special-topics-in-representation-theory/tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples.md`
  (draft; `items: []`, the four example items under `examples` in dispatch
  order; `requires` the A page).

### Checks run so far (14 items + 2 pages)

- `precheck` (explicit paths): all 14 items clean (definitions
  not-applicable, 11 proof items PASS after adopting the canonical layering
  repairs; no mathematical change).
- `proof-layout` (explicit paths): 16 files, 0 defects (14 items + 2 pages).
- `rendercheck` (explicit 16 paths): OK — no wikilinks in math, all KaTeX
  spans parse, all frontmatter parses.
- `content-policy` on `…-batch-7.pages.json`: 14 scoped items, 0 errors,
  0 warnings.
- `item-dependency-levels` `check --run`: the run-level check currently reports
  three `dependency-level` errors, all in sibling batches (projective-perverse
  and quiver-flag items, 23/24/25 vs computed 25/26); this pair's 14 items and
  2 pages produce no error at their recorded levels 4–11.
- `depcheck` (full): zero errors touch any of the 16 files of this pair;
  remaining corpus errors belong to other in-flight pairs.
- `validate-plan research/plan-spec.json`: exit 0. The earlier 11 `[resolve]`
  errors of the sibling batch-8 page cleared once its items were authored.
  One `[redundant-prereq]` **warning** concerns this pair: the A page requires
  `tensor-products-of-modules` directly while already reaching it through
  `kashiwara-operators-and-crystal-lattices` (whose `requires` include it).
  This is a plan-page redundancy, reported here for Step 4/serial
  reconciliation, not edited at Step 3b (the `requires` pair is part of the
  owner-reviewed scaffold and the plan rows 1530/1531).

### Proof contracts and supplier reconciliation

- `research/frontier-44-special-representation-examples-28-batch-7.proof-contracts.json`
  written: version 1, scope = the 14 items, every step mapped to a
  `derivations` entry with its cited inputs, exact-quote citations for every
  fact-to-source link (30 section-anchored supplier quotes, `uses` computed
  from the actual step tags), and all eight standard boundary rows per item.
- `node tools/proof-contract.mjs … --strict`: **0 errors, 0 warnings, 14/14
  items checked** after all suppliers landed.
- Supplier reconciliation against authored files (read at source, statement /
  definition sections): `def-crystal-lattice-and-crystal-basis`,
  `def-kashiwara-crystal-operators`,
  `def-crystal-graph-epsilon-phi-and-weight`,
  `def-kashiwara-lattices-lambda-and-infinity`,
  `thm-unique-kashiwara-i-string-decomposition`,
  `lem-rank-one-tensor-strings-have-the-crystal-limit-rule`,
  `thm-grand-loop-existence-of-highest-weight-crystal-bases`,
  `def-quantum-weight-module-and-integrability`,
  `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
  `prop-integrable-quantum-highest-weight-modules-are-semisimple` and
  `def-quantum-verma-module-and-simple-highest-weight-quotient` match the
  interfaces the consumers use (string shifts, φ=ε+⟨h,wt⟩, finite strings
  ε+φ+1, single surviving component, rank-one congruence, chosen P-label
  grading, λ−Q₊ support with one-dimensional top, AC selecting a maximal
  independent family of simple submodules). The two extra in-run dependencies
  added to item files during authoring
  (`def-quantum-verma-module-and-simple-highest-weight-quotient` for
  `thm-the-highest-weight-crystal-b-lambda-exists` and
  `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`)
  are recorded as two appended rows in `…-batch-7.cross-batch-dependencies.json`
  (55 → 57 rows; no sibling row touched).

### Item decisions recorded

All 14 original scaffold IDs have current Step-3b item receipts at the final
authored hashes: `repaired` with defect `dependency` for
`lem-tensor-products-of-integrable-weight-modules-are-integrable` (added
`thm-universal-property-of-module-tensor-products`),
`thm-the-highest-weight-crystal-b-lambda-exists` and
`thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`
(added the batch-5 Verma-quotient dependency); `accept` with no defects for the
other 11. No escalation is open: every flagged supplier was authored during
this window and its statement was reconciled against the consuming step. The
pair's rows are clean in `step3-decisions.mjs check --phase final` (zero
pending rows); the run as a whole still has pending sibling pairs.

## Handoff

- **Completed IDs.** 14 item files (10 A, 4 B) and both pages named above;
  `…-batch-7.proof-contracts.json`; item receipts; this report.
- **Checks actually run.** `precheck` (14 explicit paths: 12 pass, 2
  definitions not-applicable, 0 failing); `proof-layout` (16 explicit paths,
  70 steps, 0 defects); `rendercheck` (16 explicit paths, OK); `content-policy`
  (`…-batch-7.pages.json`, 14 items, 0 errors, 0 warnings);
  `proof-contract --strict` (0 errors, 14/14); `item-dependency-levels`
  `check --run` (pair-clean); `depcheck` (pair-clean); `fwdcheck`/`extcheck`
  (no finding for this pair); `validate-plan research/plan-spec.json` (exit 0;
  one `[redundant-prereq]` warning naming this pair, reported above).
- **Added suppliers.** None created by this dispatch; two dependency additions
  inside authored item files, both to already-authored items
  (`thm-universal-property-of-module-tensor-products` — published;
  `def-quantum-verma-module-and-simple-highest-weight-quotient` — batch 5).
- **Published concerns.** None new. The only pair-relevant plan finding is the
  `[redundant-prereq]` warning above (Step 4/serial reconciler). Residual
  uncertainty inherited from Step 3a: the exact printed typography of JKK
  Theorem 5.2 was not re-retrieved by the Step 3a reviewer; its content agrees
  with the independently checked sources and with the batch stamped fetch.
- **Open obligations.** (1) Step 4 to reconcile the redundant
  `tensor-products-of-modules` page edge; (2) the ordinary Step 5–7 independent
  audit of every authored item (this report is authoring evidence, not an
  audit); (3) refresh item receipts if any upstream batch-5/6 item is edited
  after this handoff (the receipts bind the current input hashes).
