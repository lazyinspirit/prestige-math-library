# Step 3a scope review — tensor-product-crystals-and-highest-weight-crystal-uniqueness

- Run: `frontier-44-special-representation-examples-28` (batch 7), role alpha, label
  `step3a-pair-tensor-product-crystals-and-highest-weight-crystal-uniqueness-1a3c9e6dff5c1595`.
- A page: `tensor-product-crystals-and-highest-weight-crystal-uniqueness` (order 1530, kind A,
  category `special-topics-in-representation-theory`, 10 items; `requires`
  `kashiwara-operators-and-crystal-lattices`, `tensor-products-of-modules`).
- B page: `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` (order 1531,
  kind B, 4 items; `requires` the A page; companion pointers agree).
- Decision: **sufficient**, recorded with `node tools/step3-decisions.mjs record-scope`
  (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-tensor-product-crystals-and-highest-weight-crystal-uniqueness.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-44-special-representation-examples-28 --phase scope`.
- Scope only: this review decides whether the planned definitions, results and examples cover the
  intended subject. It is not item or proof approval, and it edits no scaffold, item, plan row or
  owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-44-special-representation-examples-28-batch-7.pages.json` | Both pages in full: 10 A + 4 B items with every statement, strategy, `deps`, provenance, source locator and title; page `requires`; companion pairing |
| `research/frontier-44-special-representation-examples-28-batch-7.coverage.json` | 5 A-page + 4 B-page source records (JKK, Kashiwara 91, Berkeley notes, Shimozono, Assaf–Dranowski–González) with locators, row dispositions, destinations, reasons and fetch stamps |
| `research/frontier-44-special-representation-examples-28-batch-7.notes.md` | Step-1 construction record: design-vs-plan check, 7 recorded deviations, choice discipline, source ledger, cross-batch ledger, checks actually run |
| `research/frontier-44-special-representation-examples-28-batch-7.cross-batch-dependencies.json` | 55 open rows with the owner supplier-first interface evidence for every batch-5/batch-6 edge |
| `research/plan-quantum-groups-track.md`, QG-4 section (lines 141–158) and the QG-4 examples block | Controlling prose design: role, item table (10 items), conventions, B companion list (4 items) and the rank-one warning |
| `research/plan-spec.json` rows 1530/1531 | Page identity/order/kind/companion/`requires`; both rows carry empty item arrays, so the manifest controls the inventory |
| `research/frontier-44-special-representation-examples-28-alpha-step1-drift.md` (§tensor-product-crystals…) | Drift verdict `no-drift`; requires declared and complete; no owner order supplement for this pair |
| `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` | Binding owner direction: 24-pair build; 2026-10-08 quantum proof-route decision (repaired QG2–QG3 interfaces, no early QG2–QG4 dependence on the two late QG5 global theorems); 2026-10-08 final-interface decision (strict-f/non-strict-e comparisons, correct dual arrow/tensor reversal, locally weight-finite indexed decompositions, no false finite-constituent claim) |
| Batch-5 and batch-6 manifests (`…-batch-5.pages.json`, `…-batch-6.pages.json`) | The QG-2/QG-3 supplier statements actually consumed by the pair (chosen $P$-grading, admissible string decomposition, rank-one tensor rule, grand loop, semisimplicity) |
| `items/*.md` (published library) | Existence check for every published dependency id; all 30 target files exist |
| Live web texts (see source section) | Independent re-verification of the load-bearing combinatorial statements (ADG caveat and §5 formulas; Shimozono §2.3.5/2.28/Warning 2.18; Kashiwara-convention tensor rule) |

## Inventory against the prose design

The current manifest realises the current plan's QG-4 table exactly: the same 10 A ids, kinds and
order, and the same 4 B ids as the QG-4 examples list; `requires`, companion pointers and the
1530/1531 orders agree with `plan-spec.json`, and no designed item is dropped, renamed or re-kinded.

- A results: `lem-tensor-products-of-integrable-weight-modules-are-integrable`,
  `def-tensor-product-of-crystals`, `lem-i-string-components-of-a-crystal-lattice`,
  `def-highest-weight-element-and-connected-highest-weight-crystal`,
  `thm-crystal-basis-tensor-product-rule`,
  `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas`,
  `thm-the-highest-weight-crystal-b-lambda-exists`,
  `prop-dual-crystal-and-reversal-conventions`,
  `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`,
  `thm-highest-weight-components-in-a-tensor-product-crystal`.
- B examples: `ex-tensor-crystal-b-one-tensor-b-one-for-sl-two`,
  `ex-highest-components-in-a-small-type-a-two-tensor-crystal`,
  `ex-dual-crystal-reverses-arrows-and-weights`,
  `cex-changing-the-tensor-equality-convention-changes-the-crystal`.
- Boundary clauses are preserved in the statements: the left-to-right tensor convention with the
  split equality case (non-strict for $\tilde e_i$, strict for $\tilde f_i$); the tensor rule with
  no finite-dimensionality, bounded-support or uniform-nilpotence hypothesis and no choice
  principle; the uniqueness theorem as a possibly infinite, locally weight-finite indexed direct
  sum with no false finite-constituent claim; the dual only for crystals of integrable-module crystal
  bases (the $B(\infty)$ dual is explicitly excluded); and the ADG caution that not every connected
  abstract crystal with a highest weight element of weight $\lambda$ is $B(\lambda)$.
- The batch-7 note records two lattice lemmas (string components of a crystal lattice; tensor
  integrability and the free tensor lattice) as additions beyond the design's first eight items;
  both are now rows of the current QG-4 table, so the current design and the scaffold agree. The
  note's sentence "exactly the eight design items" is stale prose about the earlier design revision,
  not a live design/plan conflict.

## Source coverage assessment

The pair carries nine source records (five on A, four on B) covering every included item:

- Jeong–Kang–Kashiwara, *Crystal Bases for Quantum Generalized Kac–Moody Algebras*,
  arXiv:math/0305390 — §4 Lemma 4.5(a), Theorem 4.7; §5 Example 5.1(a), Theorem 5.2 with its proof
  and equality cases; §7 uniqueness remark (inline). Imaginary-root clauses declined with reason.
- Kashiwara, *On crystal bases of the q-analogue of universal enveloping algebras*, Duke 63 (1991)
  — §2.3 Proposition 2.3.2(ii); §2.6 Theorem 3 and Lemmas 2.6.1–2.6.3; §§3–7 deferred to QG-3/QG-5.
- Berkeley *Lie Groups and Quantum Groups* notes, Ch. 13 §13.3 — Lemma 13.3.0.10, Propositions
  13.3.0.11–13.3.0.12, Theorem 13.3.0.18 with (13.3.0.19)–(13.3.0.20), Examples 13.3.0.3 and
  13.3.0.21.
- Shimozono, *Crystals for Dummies* — §2.2.2, §2.3.4 with Warning 2.18, §2.3.5 (2.17), Example
  2.27, Lemma 2.28, §2.4.2–2.4.4.
- Assaf–Dranowski–González, *Extremal tensor products of Demazure crystals*, arXiv:2210.10236 —
  §2 axioms (C1)–(C4), highest weight element definition and the $B(\lambda)$ caveat; §5 tensor
  data with both max formulas and the two operator rules, Theorem 5.1.

Row dispositions are complete: on A, 19 included + 7 inline + 11 deferred to the named QG-2 (batch
5), QG-3 (batch 6) and QG-5 (batch 8) destinations + 1 already-published + 4 out-of-scope with
individual reasons; on B, 9 included + 4 inline, no declines. Every deferred destination is a page
scaffolded in this run, and the imaginary-root decline is correct for the library's Cartan datum
($a_{ii}=2$, no imaginary simple roots). The batch record reports `source-fetch-check --stamp` at
9/9 fetch-verified, 9/9 resolved, 0 documented drops, and a 5/5-live URL sweep.

Bounded independent web re-checks I performed:

- Assaf–Dranowski–González (§2/§5) in the published version: the sentence "Note not every highest
  weight crystal with highest weight $\lambda$ is isomorphic to $B(\lambda)$", the definition
  $B = F\{b_\lambda\}$, and the §5 formulas
  $\varepsilon_i(b_1\otimes b_2)=\max(\varepsilon_i(b_1),\varepsilon_i(b_2)-wt_i(b_1))$,
  $\varphi_i(b_1\otimes b_2)=\max(\varphi_i(b_2),\varphi_i(b_1)+wt_i(b_2))$ with the strict
  (non-strict, resp.) comparison on the left factor for $\tilde f$ ($\tilde e$) all match the
  scaffold's statements and locators.
- Shimozono §2.3.5: formulas (2.17), Example 2.27 and Lemma 2.28
  $(B_1\otimes B_2)^\vee\cong B_2^\vee\otimes B_1^\vee$ match the dual-crystal proposition and
  example; Warning 2.18 confirms the source's left-to-right convention is the opposite of
  Kashiwara's, which the coverage file records and the scaffold handles by fixing its own
  convention and re-proving the tensor swap locally.
- The Kashiwara-convention tensor rule (strict $\tilde f$, non-strict $\tilde e$) and the
  uniqueness pattern of Kashiwara's Theorem 3 (a crystal base of an integrable module is a direct
  sum of the canonical $(L(\lambda),B(\lambda))$) are confirmed in independent published/lecture
  restatements (Benkart–Kang, *Crystal Bases for Quantum Superalgebras*, Theorem 4.6 and Theorem
  4.10, Proposition 2.9 edn.).
- I could not re-retrieve the body of the JKK PDF in this session, so the exact printed statement of
  JKK Theorem 5.2 rests on the batch's stamped full-text fetch (60 pp., sha256 prefix
  `f873e27305536ded`) rather than a second independent read by me; the rule it must contain agrees
  with the independently checked sources above. I record this as residual uncertainty, not as a
  coverage gap.

## Role in the library and prerequisite availability

- Page level: `tensor-products-of-modules` is published
  (`library/abstract-algebra/tensor-products-of-modules.md`); `kashiwara-operators-and-crystal-lattices`
  is batch 6 of this run and requires `divided-powers-integral-forms-and-quantum-highest-weights`
  (batch 5), which requires the published `quantized-enveloping-algebras-and-quantum-serre-relations`
  and `integrable-highest-weight-kac-moody-modules`. The declared `requires` chain is therefore
  material, and the Step-1 drift verdict is `no-drift` with no owner order supplement.
- Item level: the transitive dependency closure of both pages' items contains 68 ids — 30 published
  items, 16 items scaffolded in batch 5 (QG-2), 10 in batch 6 (QG-3), and 12 pair-internal items —
  with **0 missing and 0 planned-only** ids. No prerequisite is absent from both the published
  library and the current scaffold.
- Interface checks on the load-bearing suppliers: batch-5
  `prop-integrable-quantum-highest-weight-modules-are-semisimple` carries exactly the uniqueness
  theorem's hypotheses (AC, finite-dimensional label-weight spaces, weight set in a finite union of
  cones, integrability); batch-6 `thm-unique-kashiwara-i-string-decomposition` supplies the
  admissible string decomposition and finite endpoints used by
  `lem-i-string-components-of-a-crystal-lattice`;
  `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` supplies the rank-one block the tensor
  rule needs; `thm-grand-loop-existence-of-highest-weight-crystal-bases` supplies the crystal basis
  of $V(\lambda)$ consumed by `thm-the-highest-weight-crystal-b-lambda-exists`. The 55-row
  cross-batch ledger records an owner supplier-first review of each of these interfaces.
- Choice discipline: `def-axiom-of-choice` is declared in exactly
  `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` (and inherited by
  `thm-highest-weight-components-in-a-tensor-product-crystal` and the small $A_2$ example) with the
  single use identified; all other items state no choice principle, and the inherited AC is declared
  at each consumer.
- Consumers and role: outside the pair, A-page items are consumed by QG-5
  `balanced-triples-and-global-crystal-bases` (`lem-quasi-r-divided-power-integrality-on-based-lattices`,
  `thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules`), QG-6
  `quantum-affine-type-a-and-level-one-fock-space` and `level-one-fock-space-and-residue-crystals`,
  QG-7 `cyclotomic-klr-algebras-and-highest-weight-categorification`
  (`thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`), and
  `parabolic-category-o-and-fock-space-bases` (two Fock-basis theorems). Each consumes only the
  pair's stated clauses (tensor rule and $\varepsilon/\varphi$ formulas, $B(\lambda)$ existence,
  the decomposition/uniqueness theorem, the tensor-product crystal object and its integrability).
  The B page is a leaf: scanning all 50 batch manifests and the plan shows no item outside the pair
  depends on any B item, consistent with the owner rule that B pages carry no load-bearing
  suppliers.

## Non-blocking observations (no owner action required for this scope)

1. The ADG caveat ("not every connected crystal with a highest weight element of weight $\lambda$
   is isomorphic to $B(\lambda)$") is recorded in
   `def-highest-weight-element-and-connected-highest-weight-crystal` but not witnessed by an
   example or counterexample anywhere in the pair. The uniqueness theorem is about crystal bases of
   modules, so the subject is covered without such a witness; a future witness example would be
   optional enrichment, not a scope requirement.
2. `batch-7.notes.md` deviation 1/2 prose refers to "the design's eight design items"; the current
   QG-4 table contains all ten. This is stale internal prose, not a design/plan conflict.
3. The QG-2/QG-3 suppliers are scaffolded but not yet authored or independently verified; that is
   ordinary Step 3b/Step 5 ownership, and this review endorses no proof strategy.
4. No published page or Defect-Ledger row is affected: the pair has no published content yet, and
   no published dependency's Statement is consumed in a changed form.

## Uncertainty statement

I verified the pair's inventory against the current design, the page/order/`requires`/companion
rows, the full dependency availability (68 ids, none missing or planned-only), the source-row
dispositions, the recorded fetch stamps, the consumer interfaces, and the AC declarations. I
re-read the load-bearing combinatorial statements of Shimozono and Assaf–Dranowski–González at
source, and the Kashiwara-convention tensor rule and uniqueness pattern in independent published
restatements. I did not re-derive the 14 proof strategies, did not independently re-read the JKK
PDF body in this session, and did not audit the proofs of the 30 published suppliers or of the
scaffolded QG-2/QG-3 suppliers; those are Step 3b/Step 5 obligations. The only residual
uncertainty is the JKK Theorem 5.2 typography noted above; it does not remove any claim, result or
example from the pair's intended subject. I found no omitted topic, so I name no omission and
propose no enrichment or merger.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and examples realise
the full QG-4 design (tensor product crystal and two-case tensor rule, $\varepsilon/\varphi$
formulas, highest-weight elements and $B(\lambda)$, the uniqueness/decomposition theorem,
highest-weight components in tensor products, the dual crystal), the planned examples cover the
principal computations and the convention boundary, every included row is backed by a
fetch-verified source at the promised locator, the pair's page- and item-level prerequisite
closures are complete, and the pair's role as the QG-4 supplier for QG-5/6/7 and the Fock/KLR
consumers is preserved. Step 3b may author against this scope.
