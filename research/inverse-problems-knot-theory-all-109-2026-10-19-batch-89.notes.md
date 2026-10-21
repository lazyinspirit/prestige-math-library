# Batch 89 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: beta  
Batch: 89  
Pair: `colored-jones-invariant-and-volume-conjecture`

## Controlling plan and conflicts

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the owner direction, the beta-89 task, both task design pointers, the complete current KT-36 design section, the plan specification, batch evidence, and live autopilot status. The owner direction controls draft status and native transitions.
- The task's plan pointers at `research/plan-knot-theory-track.md:1064` and `:1066` point to the end of KT-35 in the current file. The complete current KT-36 section is `:1071–1092`; it controls because it is the assigned design section and states the four A items, two B items, conventions, scope, proof route, and root-specialization boundary. The obsolete task pointers are recorded as a plan/task conflict; shared plans were not edited.
- `research/plan-spec.json` and the initial scaffold manifest had empty item inventories. The controlling track plan supplies the six items now in the manifest. A/B pages remain frontmatter-only; no summaries or page bodies were added.
- The plan requires the generic reduced quotient, a proof that it is in `Z[q,q^{-1}]`, and only then substitution at `q_N=exp(2πi/N)`. Direct division by the quantum dimension at `q_N` is invalid for `N≥2`. The complex-volume refinement remains separate from the real absolute-value conjecture.

## Inventory and final dependency levels

The batch dependency input supplied for this dispatch has hash `e8912dc9107b20df630299a7829cbaae0f617b660efa808b45ba452755269692`; it labels batch 89 level 7 with declared page prerequisites 72 and 86. Final item levels recomputed from current item edges are:

| Item | Level | Final scope |
|---|---:|---|
| `cex-knot-kt-36-boundary-case` | 0 | One finite positive-sequence value does not determine an asymptotic limit. |
| `def-normalized-colored-jones-sequence` | 2 | Generic matrix color, rational quotient, AC/ACω branches, and root-dimension boundary. |
| `alg-colored-jones-from-ribbon-evaluation` | 3 | Finite exact matrix procedure; no root substitution. |
| `thm-colored-jones-finite-evaluation` | 4 | Termination, exact generic value, and braid-representative independence. |
| `ex-knot-kt-36-worked-cases` | 5 | N=1, unknot, N=2 three-crossing value, and the planned general fundamental-color/Jones identity. |
| `op-kashaev-volume-conjecture-for-hyperbolic-knots` | 6 | Fixed-color real volume-conjecture formulation with specified metric. |

The final levels were computed with `tools/item-dependency-levels.mjs` from the live run manifests. The whole-run checker reports unrelated current errors: empty `character-varieties-and-the-a-polynomial-examples`, and level labels one too low on `lem-property-p-instanton-surgery-triangle-and-rank-input`, `thm-property-p-for-nontrivial-knots`, `lem-s-three-filling-detects-the-meridian-slope`, and `thm-gordon-luecke-knot-complement-determines-knot`. The six batch-89 computed levels match their labels.

## Item arguments and conventions

- `cex-knot-kt-36-boundary-case`: for target `V>0` and finite `N₀≥1`, set `a_N₀=exp(VN₀/(2π))` and all other terms to 1. The premise holds and the normalized logarithms are eventually 0. This is explicitly a sequence-level boundary example, not a claimed colored-Jones sequence or a refutation of the volume conjecture.
- `def-normalized-colored-jones-sequence`: `q=A^4`, `q_K=A^2`, `q_L=A^-2`, `t=q^-1`; the carrier spells out the N-dimensional module, finite R-sum, left-dual maps, pivotal trace, twist correction, generic dimension, and `w(β)=Σ ε_j` for a braid word. It proves the module relations, irreducibility and absolute simplicity, `d_N≠0` in `Q(A)`, generic unknot normalization, braid-representative independence under AC/ACω, and `d_N(q_N)=0` for `N≥2`. Admissibility remains an explicit structural hypothesis. The explicit exponent-sum formula was added in a final statement pass after the item was escalated; the existing escalation was not overwritten.
- `alg-colored-jones-from-ribbon-evaluation`: defines finite word input, exact `Q(A)` operations, positive crossing `c_N=P R_N`, composition order, color-preserving closure, and generic normalization. TikZ diagrams label the one-crossing convention; neither proof nor verification relies on the diagrams.
- `thm-colored-jones-finite-evaluation`: counts the finite R-sum, one matrix update per letter, and one trace contraction; it applies the actual procedure-properties and twist/Markov suppliers. AC supplies Markov classification; ACω is the exact framed-evaluator requirement and is derived from AC through the cited theorem. It claims no Laurentness or root value.
- `ex-knot-kt-36-worked-cases`: computes N=1, the unknot, and the N=2 closure of `σ₁³` directly from the matrix `c₂`. It also drafts the planned identity `J₂gen(K;q)=V_K(q^-1)` under separate AC and ACω assumptions, with the actual batch-86 ribbon/bracket bridge and batch-82 bracket/Jones theorem cited. The general identity remains escalated; the finite matrix computations do not depend on that supplier chain.
- `op-kashaev-volume-conjecture-for-hyperbolic-knots`: writes `q_N=exp(2πi/N)`, requires eventual nonvanishing before taking the real logarithm, and fixes a complete finite-volume metric `g` with one peripheral torus cusp. It does not use the unproved Mostow–Prasad item to identify metrics.

## Sources and supplier interfaces

Source harvest, full-text locators, per-result dispositions, retrieval attempts, and stamps are in `batch-89.source-coverage.json` and `.source-evidence.json`. The independent A-page treatments include the book *Tensor Categories* and Murakami's *An Introduction to the Volume Conjecture*. Full texts inspected:

- EGNO, *Tensor Categories*, §§5.6, 8.3.11, 8.9–8.10: `https://math.mit.edu/~etingof/egnobookfinal.pdf`.
- Snyder–Tingley, §§3–5: `https://msp.org/ant/2009/3-7/ant-v3-n7-p04-p.pdf`.
- Murakami, §§2.4, 3.1, 5.1: `https://arxiv.org/pdf/1002.0126`.
- Habiro, introduction, §§2.3, 3.3: `https://arxiv.org/pdf/math/0211044`.
- Murakami–Murakami, Theorem 4.9, §5: `https://arxiv.org/pdf/math/9905075`.
- Aistleitner–Borda, §1, printed pp. 5044–5045: `https://ems.press/content/serial-article-files/51448`.
- Kakuta, version 3, §1: `https://arxiv.org/pdf/2604.10472v3`.
- Kauffman, *Combinatorial Knot Theory and the Jones Polynomial*, §2: `https://arxiv.org/pdf/2204.12104v2`.

The Habiro note states the relevant integrality result but explicitly defers its proof; it is recorded as deferred, not used as a proof supplier. No retrieval failed, so no source was dropped and `source_resolution_history` is empty. Final `source-fetch-check --stamp` result: 10/10 source records fetch-verified, 0 retries, 0 drops.

Actual cross-batch supplier bodies were checked before handoff; the ledger records each external item edge. Important interfaces and open checks:

- Batch 86: the colored framed evaluation requires ACω; the scalar-twist theorem requires AC, an absolutely simple color, and a nonzero scalar twist. The N=2 fundamental module fixes `q_K=A²`, `q_L=q_K^-1`, its crossing, duality, and twist. It does not prove the all-N ribbon identities required by the standard-color family.
- Batch 86: the actual `lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket` statement supplies the N=2 trace-to-bracket value formula under ACω. Its current Step 1 record is escalated because it depends on `def-kauffman-bracket-smoothing-and-loop-value`, escalated for a curl-correction defect, and `lem-hecke-bracket-trace-dictionary-and-local-descent`.
- Batch 82: the actual `thm-bracket-state-sum-matches-library-jones-specialization` statement supplies the full-AC normalized bracket/Jones formula. Its Step 1 record says authoring complete, but its actual transitive `thm-normalized-bracket-is-an-oriented-link-invariant` chain uses the escalated curl-correction lemma. That record is not independent approval and does not close this prerequisite.
- Batch 72: `def-finite-volume-hyperbolic-knot-exterior` makes a metric part of the structure and proves neither existence nor uniqueness. Its readiness record was absent at inspection. The open-problem item fixes `g` and does not import the draft Mostow–Prasad claim.

Proposed local A-page suppliers not authored because their complete proofs cannot be supplied honestly in this batch:

- `lem-colored-jones-generic-ribbon-data`: prove all-N universal-R action, duality/pivotal data, scalar twist, and ribbon identities in the declared `q_K/q_L` convention. Affected: the unconditional standard-color interpretation of the definition, algorithm, finite-evaluation theorem, worked-color example, and root formulation.
- `lem-colored-jones-generic-quotient-is-laurent`: prove the generic reduced quotient is in `Z[q,q^-1]` before root substitution. Affected: root specialization and the volume-conjecture formulation. No direct division by `d_N(q_N)` is used.

## Final evidence and blockers

- `proof-contracts.json`: strict validation passed, 6/6 items; actual numbered steps, exact supplier excerpts, boundary cases, and applicable finite checks are recorded.
- `proof-layout.mjs`: 6 items, 17 numbered steps, 0 defects. The scoped precheck passes all 4 proof-bearing items; algorithm and open problem are not applicable. Rendercheck: 8 files, 0 errors/warnings. Content policy: 6 items, 0 errors/warnings. Focused depcheck: 6 items and 1,963 closure items, 0 errors/warnings.
- `coverage-checklist --require-destination`: 2 pages, 23 harvest entries, 0 errors, 1 advisory low-yield warning on the A-page (6 of 16 harvested results scaffolded); each decline has its own disposition and reason/destination.
- `item-dependency-levels.mjs check` is not clean across the whole run for the four unrelated items listed above; the six batch-89 item levels themselves recompute correctly.
- `batch-dependency-levels.mjs check` reports stale shared scheduling data. The recorded batch-89 prerequisites are 72 and 86; recomputation from current manifests gives 58, 72, 82, and 86 because the planned general Jones identity adds direct consumers of batch-58 and batch-82 suppliers. Other concurrent stale rows are 107, 77, 94, 78, 95, 51, 80, 99, 109, and 106. The shared scheduling file was not edited; owner reconciliation is required.
- Final Step 1 decisions: `cex-knot-kt-36-boundary-case` is ready. The other five items are escalated because their exact unresolved supplier obligations above prevent readiness; no `--owner` flag was used and no existing escalation was overwritten.
