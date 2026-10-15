# Batch 14 authoring notes — Cyclotomic Murphy Bases and Cellular Module Constructions

## Scope, reading, and plan comparison

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the HH-17 owner authoring direction, the complete HH-17 design section, the relevant `plan-spec.json` entries, the HH-17 scaffold inventory, batch 14 task/design text, the dependency-level input, the current batch 12/13 evidence, and the active-run status. The owner direction is controlling.

The HH-17 design and `plan-spec.json` agree on page IDs, order 1720/1721, titles, category, and six required pages. The plan-spec and initial batch scaffold record empty item arrays, while the HH-17 design and scaffold inventory specify eight A-page claims and two examples. The empty arrays are placeholders, not a conflicting reduced scope. This batch authored the eight planned A claims, added one necessary local anti-involution supplier, and authored both assigned B examples. No shared plan, published item, engine state, or verdict was edited.

The added supplier is `lem-hh-cyclotomic-anti-involution-fixes-generators`. The finite-Hecke reversal alone only fixes the finite $T_i$; the affine/cyclotomic Murphy definition needs an anti-involution fixing $X_j=L_j$. The local proof checks every relation in the actual affine/cyclotomic presentation before descending word reversal.

## Inventory and item levels

The batch manifest inventory is 9 A items and 2 B examples. Levels were recomputed from actual in-run dependencies; external published suppliers do not increase an item level.

| Item | Level | In-run supplier(s) |
|---|---:|---|
| `def-hh-cell-datum-dominance-and-cell-ideals` | 0 | none |
| `lem-hh-cyclotomic-anti-involution-fixes-generators` | 0 | none |
| `def-hh-cyclotomic-murphy-elements` | 1 | cell datum; anti-involution |
| `lem-hh-type-a-garnir-straightening-and-murphy-cell-law` | 2 | Murphy elements; cell datum |
| `lem-hh-componentwise-initial-row-straightening` | 3 | ordinary type-A lemma; Murphy elements |
| `lem-hh-cyclotomic-component-shift-and-dominance-ideals` | 4 | componentwise straightening; Murphy elements; HH-12 affine definition |
| `thm-hh-cyclotomic-murphy-basis-and-cellularity` | 5 | component shift; componentwise straightening; type-A lemma; cell datum; Murphy elements |
| `thm-hh-cell-modules-forms-and-radicals` | 6 | cell datum; cyclotomic cellularity application |
| `thm-hh-cellular-simple-module-classification-over-a-field` | 7 | cell modules/forms; cell datum |
| `ex-hh-rank-one-cyclotomic-cell-modules-and-forms` | 7 | Murphy elements; cellular basis; forms |
| `ex-hh-type-a-rank-two-cell-module-specialization` | 7 | Murphy elements; cellular basis; forms |

The abstract cell module/form proof and the field classification are complete as general cellular algebra results. Their cyclotomic application remains held by the unresolved cellular basis dependency. The examples calculate the small algebra relations directly, but remain escalated because their assigned interfaces require the cyclotomic cell construction and forms item chain.

## Cross-batch body checks

Batch 12’s earlier receipts and batch 13’s earlier “supplier absent” note are point-in-time records. The current batch 12 pages, contracts, notes, and item bodies are now present. I read the full current bodies of `def-hh-type-a-affine-bernstein-presentation` and `thm-hh-affine-type-a-bernstein-pbw`. They match the required multiplicative normalization, commuting invertible $X_j$, compact affine relation, distant commutation, Bernstein cross relation, universal PBW basis, and arbitrary commutative base change. Both carriers remain draft; the cross-batch ledger marks only body/interface verification and does not assert owner acceptance.

The current batch 13 notes record seven published HH-16 context carriers. Their relevant actual bodies were read in full: `def-hh-multiplicative-cyclotomic-hecke-algebra`, `lem-hh-cyclotomic-commuting-jucys-murphy-generators`, `def-hh-multipartitions-standard-tableaux-and-generic-contents`, `lem-hh-cyclotomic-straightening-spanning`, `lem-hh-colored-permutation-rsk-and-tableau-square-count`, and `thm-hh-ariki-koike-basis-and-generic-splitness`. The multiplicative relation, JM recursion, tableau conventions, universal PBW rank, and colored RSK count agree with this batch’s uses. The current batch 13 new rank-one draft is not used. The cross-batch file records the precise verified page and item interfaces; no approval is inferred.

## Source retrieval and disposition

The A page uses three independent full texts, including two complete lecture/paper treatments. `research/hopf-hecke-unfinished-15-2026-10-15-batch-14.coverage.json` records URLs, locators, items supported, harvest dispositions, recovery history, and the existing successful `source-fetch-check --stamp` receipts. The complete Mathas manuscript was inspected at Chapter 2 §§2.1–2.13 and Chapter 3 §§3.1–3.18; the full Dipper–James–Mathas paper was inspected at §3, including the component-shift and cell-ideal arguments; Hu–Mathas §2.5 was used as an independent normalization/convention check. A web-provider click to the author-hosted Dipper–James–Mathas PS file returned an internal provider error; a direct request to the same official URL then fetched the full text successfully and was stamped. No URL remained failed, no recovery retry limit was reached, and no source-resolution drop is claimed.

Every harvested theorem, lemma, definition, and example has a disposition in the coverage file. Hu–Mathas’s theorem statement is context only; its proof citation is not substituted for the complete integral proof. Generic seminormal diagonalization is not used to assert singular-parameter cellularity.

## Mathematical escalation: ordinary type-A dominance refinement

The local type-A carrier proves the universal standard Murphy basis, Garnir straightening, and lexicographic cell law. It does **not** prove the dominance upgrade needed by the controlling plan. The plan’s prescribed route requires a local result that a nonzero coefficient in the row-symmetrizer module forces each consecutive row-label block to form a horizontal strip; this then gives the dominance inequalities by counting boxes column by column.

The full Mathas Chapter 3 Proposition 3.16 argument (printed pp. 23–24, PDF pp. 29–30) was inspected. In its coefficient-elimination step it rules out a selected coefficient with a vertical adjacent pair, then removes a selected nonvertical term using the two-standard-tableau expression $m_{uv}+m_{u'v}=m_\mu m_{uv}$ for $u'=u(i,i+1)$. The argument does not address the case where $i,i+1$ lie in the same row of $u$: then $u'$ is not standard, and the displayed subtraction has no justified standard-basis interpretation. This is an unresolved local proof check, not a reason to accept the result solely on source authority.

Affected claims are exact:

- `lem-hh-type-a-garnir-straightening-and-murphy-cell-law`: dominance support, dominance ideals, and the dominance cell law remain unproved; its basis and lexicographic cell law are proved.
- `lem-hh-componentwise-initial-row-straightening`: componentwise dominance support and the finite-generator law modulo higher multipartition shapes depend on the missing ordinary type-A support theorem.
- `lem-hh-cyclotomic-component-shift-and-dominance-ideals`: the algebraic shift identity and the $k=1$ cyclotomic vanishing are proved; its dominance-raising conclusion and ideal closure depend on componentwise support.
- `thm-hh-cyclotomic-murphy-basis-and-cellularity`: the PBW/RSK square-rank argument is complete conditional on the preceding dominance cell law; cellularity is not claimed ready.
- Both B examples have complete direct low-rank calculations, but their declared cellular-module supplier chain remains open.

Proposed owner placement: add or approve a local A-page supplier before the componentwise lemma, with interface “for a partition $\lambda$ and $h\in x_\lambda H_n$, every nonzero Murphy coefficient has shape $\mu\unrhd\lambda$; the proof establishes horizontal-strip support for each consecutive row-label block over the universal domain, with all singular specializations inherited by base change.” The owner should either repair the coefficient-elimination case above or replace it with a complete proof of this interface. No claim or prerequisite is weakened in this batch.

## Run state and scoped handoff

The final on-disk autopilot status remains at `1-scaffold`: it reports 14/15 assignments covered, `14` missing, and artifacts missing for batches 9 and 14. The blocker receipt still requires owner repair and recertification before retry. The batch-14 files are present in the workspace, but the run's artifact state was not edited. The assigned scheduling input at dispatch was `58cf41778ca737ce2c4e0a45aba6eaf8476b4c24fb4e64f5f1794e1d28217856`; the manifest changes make that shared scheduling hash stale, so reconciliation remains with the owner.

The manifest and all 11 item frontmatters now agree on `deps`, `justified_by`, and `dependency_level`. Reverse `justified_by` entries that named downstream consumers were cleared: they did not establish well-definedness, and the actual proofs use the direct `deps` listed in the manifest. The cellularity theorem's direct reference to the multiplicative cyclotomic presentation is now declared in both its item and manifest and recorded in the cross-batch dependency ledger.

Final scoped checks:

- Item dependency levels: 138 run items checked across 30 pages; maximum level 14; exit 0.
- Coverage checklist: 29 harvested results; 0 errors and 0 warnings. Each result has a disposition; conditional or escalated carriers are explicitly identified in their coverage notes.
- Content policy: all 11 scoped items; 0 errors and 0 warnings.
- Dependency check: 11 selected items and their two pages; 0 errors and 0 warnings.
- Proof contracts: strict check of all 11 items; 0 errors and 0 warnings.
- Proof layout: 11 items, 55 proof steps, 0 defects.
- Source retrieval: all 3 sources fetch-verified and resolved; 0 new stamps and 0 documented drops.
- Manifest/frontmatter comparison: all 11 item dependency lists, justification lists, and levels match.

The additional `precheck.mts` diagnostic exits nonzero on all 11 items: it proposes phase relabeling for 8, and flags 3 multiline proofs (`lem-hh-cyclotomic-component-shift-and-dominance-ideals`, `thm-hh-cell-modules-forms-and-radicals`, and `ex-hh-rank-one-cyclotomic-cell-modules-and-forms`) as `untagged-steps` because their end-of-step tags are on later physical lines. The dispatch's own example explicitly allows a later step in the same phase to cite the preceding step (1.2 cites 1.1), whereas this legacy diagnostic proposes a new phase for every such dependency. The authored steps end in the required tags and are independently parsed by the passing proof-contract/layout checks; no proof content was changed to satisfy that incompatible normalization.

Step-1 records were written without `--owner`: 3 items are `ready` (cell datum, generator-fixing anti-involution, and Murphy elements), and 8 are `escalated` along the type-A dominance chain and its consumers. The whole-run Step-1 check reports 138 items, 123 ready, `closed: false`. In addition to this batch's 8 explicit escalations, it flags seven existing batch-9 items because their item or dependency inputs changed; those records were not edited. The unresolved type-A supplier and its dependent claims are detailed above; the run-level owner blocker and missing artifacts remain outside this batch's authority.
