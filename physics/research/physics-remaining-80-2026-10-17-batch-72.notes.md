# Batch 72 authoring notes — `tgr-g02`

Run: `physics-remaining-80-2026-10-17`  
Pair: `tgr-g02` / `tgr-g02-examples`  
Status: draft authoring complete; all 11 assigned items have current Step-1 `ready` records. Readiness records bind authored prerequisites; they do not constitute independent acceptance.

## Plan reconciliation and scope

The current owner direction applies: this is a draft-only pair and owns no other pages. The design reservation has eight A-page items and three B-page examples, matching the current `plan-spec.json` inventory exactly.

There is an apparent page-prerequisite discrepancy. The design reservation lists `TGR-I01`, `TGR-MG02`, `TGR-G01`, and `TGR-MG01`; the canonical plan row for `tgr-g02` declares direct `requires` only `tgr-g01` and `tgr-mg02`. The direct plan edges control page placement. `tgr-i01` and `tgr-mg01` remain in the actual transitive prerequisite closure through `tgr-g01`; their exact direct item suppliers are recorded below and in the cross-batch edge file. No shared plan or scheduling file was edited.

The final A/B inventories are 8 and 3 items, below the page cap. The A page supplies the static model, local TOV branch, constant-density specialization, constrained entropy preparation/result, and finite-bath preparation/result. The B page contains only the half-compactness example, its family-specific critical-limit counterexample, and the half-capacity bath example.

## Dependency levels and current interfaces

Levels are recomputed from the current populated run graph. All declared and computed item levels agree:

| Item | Level | Direct dependencies |
|---|---:|---|
| `post-tgr-static-spherical-fluid-preparation` | 6 | `def-tgr-framework-units`, `def-tgr-spherical-static-state-domain` |
| `pthm-tgr-static-tov-local-branch` | 7 | `post-tgr-static-spherical-fluid-preparation`, `lem-tgr-spherical-einstein-tov-reduction`, `thm-tgr-tov-regular-center-local-existence` |
| `post-tgr-incompressible-star-preparation` | 7 | `post-tgr-static-spherical-fluid-preparation` |
| `post-tgr-gravitating-entropy-variational-preparation` | 7 | `def-tgr-framework-units`, `post-tgr-local-material-thermodynamics`, `def-tgr-spherical-static-state-domain`, `def-tgr-spherical-entropy-constraint-functional` |
| `pthm-tgr-static-constant-density-star` | 8 | `post-tgr-incompressible-star-preparation`, `thm-tgr-constant-density-star-verified`, `def-tgr-spherical-static-state-domain` |
| `pthm-tgr-gravitating-entropy-criticality` | 8 | `post-tgr-gravitating-entropy-variational-preparation`, `thm-tgr-constrained-entropy-tov-criticality` |
| `post-tgr-finite-bath-exchange-preparation` | 7 | `def-tgr-framework-units`, `post-tgr-kepler-microcanonical-volume-preparation`, `thm-tgr-regulated-kepler-negative-capacity` |
| `pthm-tgr-negative-capacity-exchange-stability` | 8 | `post-tgr-finite-bath-exchange-preparation`, `lem-tgr-finite-bath-exchange-stability` |
| `ex-tgr-physical-star-half-compactness` | 9 | `pthm-tgr-static-constant-density-star` |
| `cex-tgr-physical-critical-star-limit` | 9 | `pthm-tgr-static-constant-density-star` |
| `ex-tgr-physical-finite-bath-attraction` | 9 | `pthm-tgr-negative-capacity-exchange-stability` |

Before authoring, the direct suppliers were read at their actual current interfaces and their live `step1Decision` records were checked. The geometry, signed Einstein/TOV reduction, regular-center Volterra construction, constant-density family, entropy functional/criticality result, Kepler negative-capacity result, and finite-bath stability lemma all have current `ready` records. Their carriers remain drafts awaiting later review; no readiness label or source citation is treated as independent acceptance. The full supplier excerpts, actual consumer arguments, dependencies and source dispositions are preserved in `batch-72.proof-contracts.json` and `batch-72.coverage.json`.

Key hypotheses retained in consumers:

- The local TOV branch uses a supplied $C^\infty$ positive $\mathcal E(P)$ on an open pressure interval, a compact central-pressure interval with a closed margin, the exact $\mathrm{ZF}+\mathrm{AC}_\omega$ convention, and the regular-center theorem only on its common local interval. The full Einstein equations at the center follow by continuity of the $C^2$ metric and isotropic stress.
- The constant-density result uses only the exact $0<u<8/9$ family, including its regular center, explicit vacuum match and no-surface-layer interface. It makes no general Buchdahl claim and no causal finite-sound-speed claim.
- The entropy result uses a compatible supplied $C^2$ local material/entropy chart, the spherical mass constraint, fixed $R,E,N_b$, positive $b$, the exact admissible even $C^2$ profile curves, and the boundary clock $e^{\phi(R)}=\sqrt{b(R)}$. It is a first-variation equivalence, not an entropy maximum.
- The bath preparation now selects a strict interior point of the Gibbs-volume Kepler branch and an open $C^2$ energy interval; it retains the upstream optional slow-motion bound for Newtonian physical applicability. Its logarithmic bath and scalar ODE are explicit adopted assumptions. The stability conclusion applies only to that ODE.

## Sources and source resolution

Two independent full-text treatments were retrieved, inspected at the relevant locators, and passed `source-fetch-check --stamp`:

- Chavanis, *Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas*, complete 62-page PDF, [arXiv full text](https://arxiv.org/pdf/1908.10806). Section III.A, equations (97)–(108), PDF pp. 17–19, gives independent static-fluid/TOV context. Section III.E, equations (138)–(163), PDF pp. 22–26, treats entropy variation, hydrostatic equilibrium and Tolman/Klein relations. Its own caveat that the mass constraint is imported from Einstein's equations is retained; the authored entropy item claims first-variation criticality only.
- Hughes, MIT 8.962 *General Relativity*, complete 20-page Spring 2020 lecture guide, [MIT full text](https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf). Lecture 20, PDF p. 8, treats the static spherical perfect-fluid equations, TOV, and supplied EOS/central data; Lecture 21, PDF pp. 8–10, treats the idealized constant-density branch and its endpoint. Its infinite-sound-speed warning is retained. The guide's broader Buchdahl statement is not consumed; this batch proves and uses only the displayed family-specific result.

Current fetch stamps: Chavanis, 928,353 bytes, 62 pages, SHA-256 prefix `24365448b79f9d62`; MIT, 441,765 bytes, 20 pages, SHA-256 prefix `a78542cd02bcc564`. All included citations are contextual; no source is treated as a proof supplier in place of the exact local mathematical items.

Search also surfaced an optional NYU Lecture 21 PDF candidate. One initial local curl attempt failed TLS certificate verification. The complete MIT guide and Chavanis paper were already retrieved and inspected as the two independent treatments, so no claim uses the NYU candidate; this is not a dropped-source finding. Searches, that disposition, per-item arguments/dependencies, source locators, and each included/context-only source disposition remain in `batch-72.coverage.json`.

## Cross-batch interfaces

`batch-72.cross-batch-dependencies.json` is a JSON array with 17 direct rows: 2 direct page inputs (`tgr-g01`, `tgr-mg02`) and 15 direct item edges. All are `verified` after checking the exact current statement/definition, hypotheses, relevant complete proof and current Step-1 readiness. `verified` means the scoped interface was checked; it does not certify independent proof acceptance. The file contains no transitive-only rows.

## Scoped validation and readiness

Final current-carrier checks:

- `content-policy --manifest-only --authored` and ordinary scoped content policy: pass, 0 errors/warnings.
- `depcheck --items-file batch-72.items.json`: pass, 0 errors/warnings; 1,372-item dependency closure and page/item cycles checked.
- `rendercheck` on all 11 items and both pages: pass, 0 errors/warnings.
- normative `precheck`: 11/11 items checked, 0 failures.
- `proof-layout` on the seven proof-bearing items: 7 items, 16 numbered steps, 0 defects.
- `fwdcheck` and `extcheck` on the 11 items: pass, no references declared.
- strict proof contracts: all 11 entries checked, 0 errors/warnings.
- `source-fetch-check --coverage batch-72.coverage.json`: 2/2 full-text sources verified.
- Focused dependency-level recomputation over the current populated run graph: all 11 declared levels match (6, 7, 7, 7, 8, 8, 7, 8, 9, 9, 9); no assigned item-level errors.
- All 11 assigned items have current Step-1 `ready` records. The records bind their exact direct supplier lists and current transitive hashes; they are not independent approval.

Run-wide checks have owner-level blockers outside this assignment. `proof-contract-coverage` cannot construct the run frontier because unrelated page `emg-s02` has an empty scaffold inventory. The whole-run `item-dependency-levels` command reports empty inventories on `emg-s02`, `emg-s02-examples`, `tgr-pet02`, `tgr-pet02-examples`, `tgr-phs02`, `tgr-phs02-examples`, `tgr-phs03`, `tgr-phs03-examples`, `tgr-phs04`, and `tgr-phs04-examples`; it reports no assigned-item mismatch. The shared `batch-dependency-levels` check reports the run schedule stale and requests recomputation before authoring. These shared/run-wide artifacts were left untouched; the assigned item levels were independently recomputed against the current populated graph.

