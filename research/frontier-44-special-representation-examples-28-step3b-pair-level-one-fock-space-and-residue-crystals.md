# Step 3b — pair `level-one-fock-space-and-residue-crystals` (batch 23)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-level-one-fock-space-and-residue-crystals-00ff070717b7c647`.
Owned A page: `level-one-fock-space-and-residue-crystals` (order 1576,
special-topics-in-representation-theory, 5 items: 2 definitions, 1 lemma,
1 proposition, 1 theorem). Owned B page:
`level-one-fock-space-and-residue-crystals-examples` (order 1577, 3 items:
2 examples, 1 counterexample). Batch 23 contains only this pair, so no sibling
rows exist in the shared batch files.

## Owned IDs and open obligations (entry checkpoint)

A (all 5 scaffold-only; item files, page, contracts owed):
`def-symmetric-group-level-one-residue-and-partition-label-convention` (level 13),
`lem-level-one-node-order-and-conjugation-dictionary` (15),
`prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators` (18),
`thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention` (19),
`def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention` (21).

B (3 scaffold-only):
`ex-fock-e-and-f-actions-on-shape-two-one-at-e-three` (19),
`ex-level-one-charge-zero-crystal-through-rank-four-at-e-three` (20),
`cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module` (21).

Open obligations at entry:
1. Author all 8 item files and both pages
   (`library/special-topics-in-representation-theory/level-one-fock-space-and-residue-crystals.md`,
   `…-examples.md`).
2. Audit scaffold hypotheses, strategies, direct suppliers (batch 9
   `quantum-affine-type-a-and-level-one-fock-space`, batch 22
   `modular-branching-and-the-good-node-crystal`, batch 8, batch 7) and proof
   routes; recheck the Step-3a observations and the batch-23 notes' supplier
   findings against the current owner-corrected interfaces.
3. Write `research/frontier-44-special-representation-examples-28-batch-23.proof-contracts.json`
   with exact citation excerpts, per-step inputs and boundary dispositions
   (empty, zero, one, degenerate, endpoint, Choice, both iff directions).
4. Maintain the 27 rows of
  `research/frontier-44-…-batch-23.cross-batch-dependencies.json` (3 page, 24
  item), recording actual consumer uses and the flags demanded for unfinished
   suppliers; run `tools/frontier-dependency-ledger.mjs refresh --run …`.
5. Run the check battery (proof-layout, precheck, rendercheck, content-policy,
   depcheck/depsource, manifest-deps, item-dependency-levels, validate-plan,
   coverage-checklist, source-fetch-check, proof-contract --strict,
   boundary-audit, citation-fidelity, pathcheck/prosecheck, finite-smoke,
   step3-decisions final).
6. Record item decisions for the 8 owned IDs; leave escalated decisions for
   consumers whose in-run suppliers (batch 9 / batch 22 / batch 8 / batch 7)
   are not yet authored.

Direct in-run prerequisite pairs to inspect (may still be unfinished):
`modular-branching-and-the-good-node-crystal`, `quantum-affine-type-a-and-level-one-fock-space`.

## Checkpoint log

(updated after each item; resume here)

- Sources re-obtained live 2026-10-10 and byte/sha256-16 verified against the
  coverage stamps: Kleshchev 0909.4844 (746493 B, `8685199608967fa7`), Fayers
  0906.4129 (262474 B, `afea008b148b9600`), Leclerc author notes (302817 B,
  `32da60cfed68246e`), Brundan quantum.pdf (321117 B, `c9739b545e24407f`),
  KMPY q-alg/9603025 (551775 B, `99bb8974806e51be`), LLT q-alg/9602025
  (145252 B, `289637f0f37050c7`). Full texts extracted for reading.

### Item 1 `def-symmetric-group-level-one-residue-and-partition-label-convention` (level 13)

- **Authored** `items/def-symmetric-group-level-one-residue-and-partition-label-convention.md`
  (draft, `origin: pipeline`, `dependency_level: 13`), with a `## Definition`
  (residue $c-r$; $e$-regular/$e$-restricted and the conjugation dictionary;
  the modular top-to-bottom $-$+ signature with good $=$ first surviving $-$
  and cogood $=$ last surviving $+$; the linear model $F_{\mathrm{sym}}$ with
  $J M_\lambda = |\lambda'\rangle$ and the transported operators
  $E_i^{\mathrm{sym}} = J^{-1}E_{-i}^{\mathrm{QG}}J$ etc.; the $A_0$ standard
  chart; the label dictionaries and the $e = 0$ boundary) and a complete
  elementary `## Proof`: column-multiplicity dictionary
  $z_a(\lambda') = \lambda_a - \lambda_{a+1}$; restricted$\iff$conjugate
  regular; node transposition preserving type and negating residue; weight
  reflection $m_i(\lambda) = m_{-i}(\lambda')$; node-move form of the
  transported operators; distinct corner contents; the $e = 0$ boundary; and
  the conjugation-vs-Mullineux distinction.
- **Deps actually used** (superset of manifest, added
  `def-p-regular-and-p-restricted-partitions`).
- **Checks.** `precheck` PASS; `proof-layout` 8 steps/0 defects;
  `rendercheck` OK. `depcheck` currently reports `dep-unresolved` for the two
  batch-9/batch-22 scaffods not yet authored (`def-level-one-partition-fock-space-and-node-residues`,
  `def-residue-signature-normal-good-conormal-and-cogood-nodes`) — open
  obligation owned by the sibling writers; `def-cyclic-affine-type-a-cartan-datum`
  is now on disk.
- **Open.** Item decision owed after final reconciliation; proof-contract entry
  owed.

### Items 2-5 (A page) and the A page

- **Authored** `items/lem-level-one-node-order-and-conjugation-dictionary.md`
  (level 15; order/sign dictionary of same-residue corners; reduction
  uniqueness by a stack-scan argument; conjugation reversal; word-level
  agreement with the Fock reference order and its reversed form),
  `items/prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators.md`
  (level 18; conjugation intertwines modular and normalized QG operators with
  negated colors including zeros; no naming-polarity swap; transported
  normalized operators on all partitions; weight reflection; Chevalley
  coefficients are not the arrows),
  `items/thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention.md`
  (level 19; restricted component $=B(\Lambda_0)$; full decomposition under AC;
  James labels and the sign-twisted socle $\operatorname{soc}E_{-i}D^{\lambda'}=D^{(\tilde e_i\lambda)'}$;
  $e=0$ boundary), and
  `items/def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention.md`
  (level 21; transported lower basis, transition polynomials
  $d_{(\lambda,\mu)}=D_{\mathrm{QG}}(\mu',\lambda')$ with dominance/core/weight
  support, ambient Gram and upper coordinates with the $e=2$,
  $G_{\mathrm{sym}}(1,1)=M_{1,1}+qM_2$, $G^*_{\mathrm{sym}}(1,1)=(M_{1,1}+qM_2)/(1+q^2)$
  example, full dual matrix $D_{\mathrm{full}}^{-\mathsf t}$, and the
  linear/semilinear/decomposition-number boundaries).
- **A page** `library/special-topics-in-representation-theory/level-one-fock-space-and-residue-crystals.md`
  created (draft) with the two in-run `requires` pages and the five A items.
- **Scaffold repair recorded.** The B example scaffold's transported
  $E$-table read $E_1^{\mathrm{sym}}M_{21}=M_2$, $E_2^{\mathrm{sym}}M_{21}=q^{-1}M_{11}$;
  with the manifest's own definition $J^{-1}E_{-i}^{\mathrm{QG}}J$ the correct
  table is $E_1^{\mathrm{sym}}M_{21}=M_{11}$, $E_2^{\mathrm{sym}}M_{21}=q^{-1}M_2$
  (verified by direct node computation). The $F$-table of the scaffold is
  correct; the crystal tables are correct.
- **Checks.** Each of the five items: `precheck` PASS, `proof-layout` 0
  defects, `rendercheck` OK. `depcheck` still flags only the not-yet-authored
  batch-9/22/8 suppliers.

### Item 6 `ex-fock-e-and-f-actions-on-shape-two-one-at-e-three` (level 19, B page)

- **Authored** with the complete quantum-group Chevalley table at $|2,1\rangle$
  ($F_0=|2,2\rangle$, $F_1=q^{-1}|2,1,1\rangle$, $F_2=|3,1\rangle$,
  $E_0=0$, $E_1=q^{-1}|1,1\rangle$, $E_2=|2\rangle$), the transported
  symmetric table, both normalized crystal tables, and the explicit
  Chevalley-versus-arrow separation. Every coefficient was recomputed by hand
  from the increasing-content node formulas and independently by the
  computational model.
- **Repairs.** (i) The scaffold's transported $E$-table read
  $E_1^{\mathrm{sym}}M_{2,1}=M_2$, $E_2^{\mathrm{sym}}M_{2,1}=q^{-1}M_{1,1}$;
  under the declared $J^{-1}E_{-i}J$ the correct table is
  $E_1^{\mathrm{sym}}M_{2,1}=M_{1,1}$, $E_2^{\mathrm{sym}}M_{2,1}=q^{-1}M_2$
  (direct node computation: $(2)'=(1,1)$, $(1,1)'=(2)$), and the stale
  manifest statement mirror has been corrected in the same pass. (ii) Step 1.1
  had listed the removable $(2,1)$ of the smaller diagram $(1,1)$ among its
  residue-$1$ nodes; it has residue $2$ and is not counted, so the sentence was
  corrected ($N^l_1=1$ and $E_1=q^{-1}|1,1\rangle$ unchanged).
- **Checks.** precheck PASS; proof-layout 0 defects; rendercheck OK.
- **Decision.** `repaired`, defect type `arithmetic`.

### Item 7 `ex-level-one-charge-zero-crystal-through-rank-four-at-e-three` (level 20, B page)

- **Authored** with the rank $0$-$4$ vertex list, every cogood addition and
  good deletion in the window, the rank-$4$ omission (not zero) convention,
  and the conjugate comparison to the QG arrow. All $3$-restricted partitions
  and every arrow were recomputed by hand and by the computational model.
- **Repair.** Step 3.1 wrongly said the addable nodes of $(2,2)$ "are not
  cogood for those colors, so colors $1,2$ give zero": at $(2,2)$ the node
  $(1,3)$ of residue $2$ and the node $(3,1)$ of residue $1$ are each the
  unique surviving $+$ of their color, so $\tilde f_2$ adds $(1,3)$ and
  $\tilde f_1$ adds $(3,1)$, both leaving rank $5$ and therefore omitted from
  the displayed window; the zero statements are the absent good deletions
  $\tilde e_1,\tilde e_2$. The sentence was corrected and the step re-verified.
- **Checks.** precheck PASS; proof-layout 0 defects; rendercheck OK.
- **Decision.** `repaired`, defect type `arithmetic`.

### Item 8 `cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module` (level 21, B page)

- **Authored** with the two finite non-containment witnesses
  ($|1,1,1,1\rangle\notin M$ and $G(1,1,1,1)\notin M$ by the standard-class
  independence in the top-isotypic splitting), the conjugate transport to
  $M_{(4)}\notin M_{\mathrm{sym}}$, and the non-restricted edge
  $\tilde e_0(4)=(3)$ that keeps the full signature meaningful on non-basic
  shapes. The lattice/crystal input is quoted from the batch-7 theorem and the
  batch-9 global-basis theorem; the finite checks were recomputed.
- **Checks.** precheck PASS; proof-layout 0 defects; rendercheck OK.
- **Decision.** `accept` (no defects).

### B page and A page

- `library/special-topics-in-representation-theory/level-one-fock-space-and-residue-crystals-examples.md`
  created (draft) with the three B items and the parent-page requirement;
  rendercheck OK, prosecheck clean.

## Supplier reconciliation (batch 9 / batch 22 / batch 7 / batch 8)

All fact-linked suppliers of the pair were read on disk in this pass and
matched against the recorded fact uses (residues $c-r$, cancellation direction,
good/cogood polarity, `e`-core and weight interfaces, AC carriage): batch 9
`def-cyclic-affine-type-a-cartan-datum`, `def-level-one-partition-fock-space-and-node-residues`,
`def-the-node-order-and-n-i-exponents-for-fock-space`,
`def-good-and-cogood-nodes-by-residue-signature-reduction`,
`thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations`,
`thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`,
`thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero`,
`thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`;
batch 22 `def-residue-signature-normal-good-conormal-and-cogood-nodes`,
`def-good-node-and-cogood-node-crystal-operators`,
`prop-every-p-restricted-partition-is-reached-by-cogood-node-additions`,
`thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction`,
`def-generalized-jm-primary-idempotents-and-residue-summand-functors`;
batch 7 `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`;
batch 8 `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible`;
published `def-removable-and-addable-nodes-of-a-partition`,
`def-partition-young-diagram-and-conjugate-partition`,
`def-p-regular-and-p-restricted-partitions`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
`def-jucys-murphy-elements-of-the-symmetric-group-algebra`,
`def-sign-representation-and-restriction-of-a-representation`,
`def-module-radical-socle-head-and-loewy-series`, `def-axiom-of-choice`.

- The two suppliers flagged as unauthored at entry both **landed during this
  pass** and are reconciled:
  `thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction`
  (batch 22; used by `thm-restricted-…` at proof step 4.2 through [F5]) and
  `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` (batch 8;
  used by `def-level-one-global-basis-…` at proof steps 4.2 and 5.1 through
  [F3]). Their statements were read in full against the recorded clauses, the
  citation rows were built with exact `Statement` quotes, and
  `proof-contract --strict` now reports **0 errors over 8/8 items**.
- `thm-restricted-…` also gained the missing frontmatter, manifest and ledger
  declaration of the batch-22 socle supplier; the cross-batch ledger row is
  `verified`.
- The batch-9 scaffolding findings recorded in the batch notes were rechecked
  against the now-authored batch-9 items: the corrected $e$-restricted gloss
  ($\lambda_a-\lambda_{a+1}<e$, column of height $e$ allowed), the
  increasing-content $-$+ signature with first surviving $-$ and last surviving
  $+$, the all-partitions crystal with $e$-regular empty component, and the
  conjugation-vs-Mullineux distinction are all present in the current supplier
  text used here.
- Independent computational cross-check: Kleshchev's top-to-bottom rule,
  Fayers' regular rule and the QG increasing-content rule agree under
  conjugation with negated colors for all partitions of size $\le 8$ at
  $e = 2,3$ and size $\le 7$ at $e = 4$ (zero mismatches; null sets and count
  identities agree).

## Checks actually run (final pass)

| check | scope | result |
|---|---|---|
| precheck | 8 items (explicit paths) | 8/8 PASS |
| proof-layout | 8 items batched (50 steps) | 0 defects |
| rendercheck | 8 items + 2 pages | OK |
| pathcheck | 2 pages | 0 errors (no pathway files in scope) |
| prosecheck | 8 items + 2 pages | 0 errors, 0 warnings |
| proof-contract `--strict` | batch-23 contracts | 0 errors, 8/8 items |
| boundary-audit (`--fail-on-contradicted --fail-on-template`) | batch-23 contracts | no contradicted dispositions, no template reuse |
| citation-fidelity (`--fail-on-missing-quote`) | batch-23 contracts | every quote found, no widening candidates |
| finite-smoke | batch-23 contracts | 0 errors, 0 obligations for these items |
| content-policy | batch-23 manifest (item mode) | 8 scoped items, 0 errors |
| coverage-checklist `--require-destination` | batch-23 coverage | 2 pages, 42 harvested, 0 errors |
| source-fetch-check | batch-23 coverage | 9/9 fetch-verified, 9/9 resolved |
| manifest-deps | batch-23 manifest | 8 items, 0 errors |
| item-dependency-levels | whole run | 862 items, 0 label mismatches |
| depsource (`--run`, scoped `--items-file`) | 8 items | 0 unresolved, 8/8 consumer coverage |
| depcheck | whole repo | 0 findings within this pair (run-wide legacy findings unrelated) |
| validate-plan | `research/plan-spec.json` | batch-23 pair contributes no error (orders 1576/1577 list the 5+3 items and both `requires` correctly); run-wide FAIL solely through four pre-existing `undeclared-prereq` errors on other pages (`character-polynomials-fi-modules-and-representation-stability`, `projective-functors-and-the-soergel-functor-in-category-o`, `compact-kahler-hodge-foundations`, `complex-algebraic-stratified-topology`) plus redundant-prereq advisories on the ariki page |
| gate-liveness (scoped) | contracts + checklist | proof-contract live (8 items), coverage live (42); finite-smoke vacuous for this pair (no obligations); precheck probe unparsed because the run-scope invocation includes not-yet-authored sibling item files — engine-wide concern, not a batch-23 gate failure |
| step3-decisions check `--phase final` | whole run | 7 of 8 owned items closed; 1 owner-held escalation (below) |

## Item decisions recorded

`node tools/step3-decisions.mjs record-item` receipts (all with owner `false`):
`def-symmetric-group-level-one-residue-and-partition-label-convention` —
`repaired`/`format`; `lem-level-one-node-order-and-conjugation-dictionary` —
`accept`; `prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators` —
`accept`; `thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention` —
`repaired`/`dependency`; `def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention` —
`escalate`/`dependency`; `ex-fock-e-and-f-actions-on-shape-two-one-at-e-three` —
`repaired`/`arithmetic`; `ex-level-one-charge-zero-crystal-through-rank-four-at-e-three` —
`repaired`/`arithmetic`; `cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module` —
`accept`.

## Open obligations and flags

1. **Owner clearance of one escalation.**
   `def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention`
   was escalated for the unauthored batch-8 supplier
   `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` at proof
   steps 4.2 and 5.1. That supplier has since been authored; its statement was
   read, the citation row now exists, `proof-contract --strict` is clean, and
   the ledger row is `verified`. The escalation receipt predates the landing
   and only the owner can replace it; the owner is asked to clear it on this
   evidence.
2. **Ledger bookkeeping note.** The batch-23 input preserves its seven
   pre-existing same-batch review rows (the examples-page edge and the B-item
   to A-item edges). The unified ledger lists them under `orphaned_reviews`
   because it tracks cross-batch edges only, exactly as other batches' inputs
   do; they were preserved, not removed, and no cross-batch row is orphaned.
3. **Page-level edges stay open (not owned by this pair).** The two `requires`
   edges of the A page to `modular-branching-and-the-good-node-crystal`
   (batch 22) and `quantum-affine-type-a-and-level-one-fock-space` (batch 9)
   remain `open`: those supplier pages still carry items not yet authored on
   disk, so authored-page review is owed by their owners. All item-level edges
   into them used by this pair are reconciled row by row in
   `…-batch-23.cross-batch-dependencies.json` (26 `verified`, 2 page `open`).
4. **Steps 5-7 own the thorough independent audit**, including the recursive
   supplier proofs and any citation-attribution refinements.

## Published concerns

None confirmed against published content: no published item was edited or found
defective in this pass, and all published prerequisites were used exactly as
stated. No suspension-level defects were left unrecorded; the only flagged
in-run items were the two suppliers above, both now authored and reconciled.

## Handoff status

All 8 owned items authored (draft), both pages created (draft), the batch-23
proof contracts completed with 0 strict errors, the manifest, coverage and
cross-batch ledger updated (batch 23 in `reviewed_batches`), and the 8 item
decisions recorded. The only remaining item-level work row is the owner-held
escalation of obligation 1, whose blocker is resolved.
