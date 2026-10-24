# Batch 64 authoring notes

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: 64 (`dependency_level: 0`; no cross-batch supplier edges)  
Pair: `qftx-gaga-local-analytic-flatness` / `qftx-gaga-local-analytic-flatness-examples`

## Scope and plan reconciliation

The binding owner direction and append-2 source/consumer handoff were read before authoring. The assigned task says no design section was found; no design section governed this pair. The current canonical plan and batch-64 manifest add `schemes-subschemes-and-morphisms-locally-of-finite-type` to the nine prerequisite pages abbreviated in the task. The manifest's tenth page edge is retained because the plan controls this discrepancy.

The A page now contains the local common-completion lemma and the faithful-flatness theorem. This local lemma supplies the finite-jet and nonreduced quotient argument needed by the theorem. The B page contains two checked examples. A and B page carriers have YAML frontmatter only and no body summaries.

## Authored claims and dependencies

| Item | Claim and conventions | Dependency level |
|---|---|---:|
| `lem-qftx-gaga-algebraic-analytic-local-completions` | For $P=\mathbb C[w_1,\ldots,w_n]$, the algebraic local ring $P_{(w)}$ and holomorphic germ ring $\mathbb C\{w\}$ have the common completion $\mathbb C[[w]]$. Quotienting both by the same finite ideal $I\subseteq(w)$ gives $\mathbb C[[w]]/I\mathbb C[[w]]$, without radicalization. AC is stated because the finite-quotient completion supplier assumes it. | 0 |
| `thm-qftx-gaga-analytic-local-ring-flatness` | For a finite-type complex scheme and closed $\mathbb C$-point, the induced algebraic-to-analytic local map is injective and faithfully flat, has the common completed local ring, preserves the exact finite defining ideal, and gives $B/A$ flat plus $M\to M\otimes_A B$ injective for every module. Assumes full AC; the proof derives the DC required by Tor suppliers. | 1 |
| `ex-qftx-gaga-analytic-equal-completions` | $\mathbb C[t]_{(t)}\to\mathbb C\{t\}$ is faithfully flat with common completion $\mathbb C[[t]]$ but is not surjective; a coefficient-growth argument proves the exponential germ is not rational. AC is inherited explicitly. | 2 |
| `ex-qftx-gaga-analytic-nonreduced-quotient` | $\mathbb C[x,y]_{(x,y)}/(x^2)\to\mathbb C\{x,y\}/(x^2)$ is faithfully flat with common completion $\mathbb C[[x,y]]/(x^2)$; the formal $x$ coefficient proves that the nonzero nilpotent class survives. AC is inherited explicitly. | 2 |

The dependency-level calculation uses only in-run logical suppliers: the lemma has none; the theorem uses the lemma; each example uses the theorem. All other suppliers are pinned external mathematical inputs. The batch-level graph remains level 0. The cross-batch dependency file is the empty JSON array because no declared item or page edge crosses a batch boundary.

## Sources and reading record

The complete relevant arguments were inspected in three full-text treatments; two are independent full lecture-note treatments. The source records, source-section results and per-result dispositions are in `advanced-qft-supersymmetry-build-2026-10-23-batch-64.coverage.json`.

- Jean-Pierre Serre, *Géométrie algébrique et géométrie analytique*: [full paper](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf), §2, no. 6, Proposition 3 and Corollary 1, printed pp. 9–11; Appendix §22 Definition 4 and Propositions 22 and 26–29, printed pp. 36–40. This gives the local completion comparison and flat-pair/quotient route. Its analytic vanishing-ideal result is not used to replace a scheme-theoretic ideal by its radical.
- Johannes Anschütz, *Lecture Notes on Étale Cohomology*: [full 93-page notes](https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf), §§3.24–3.26, Theorems 3.25 and 3.26(1)–(3), PDF pp. 12–14. The full local quotient construction and completion argument were read. The notes state local faithful flatness after identifying completions; this author proof supplies the full flatness descent used here.
- Kiran S. Kedlaya, MIT OCW 18.726, *Lecture 22: GAGA*: [official full lecture PDF](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf), §2 local-stalk flatness lemma, PDF pp. 2–3, and §6 local analytification/completion statement, PDF pp. 8–9. Its ambient local-map proof uses equal completions and describes the flatness descent briefly; the local lemma here provides the complete quotient and descent arguments.

Searches also located a translation of Serre's paper and a Purdue commutative-algebra lecture-note PDF. The translation was not counted as independent treatment; the Purdue endpoint returned 403 and was not selected. The official MIT OCW GAGA PDF and Anschütz's full notes provide the two independent lecture treatments. No selected-source retrieval failed; `source_resolution` is empty, with no drops or alternative-proof dispositions.

## Source retrieval and result disposition

`source-fetch-check --stamp` verified all six A/B page-source records (the same three full-text sources recorded on each page); the final check reconfirmed 6/6 fetch stamps and 0 documented drops. The verified unique-source records are:

| Source | Retrieved evidence |
|---|---|
| Serre, *Géométrie algébrique et géométrie analytique* | 3,620,462 bytes, 43 PDF pages, SHA-256 prefix `eaba41b510464213` |
| Anschütz, *Lecture Notes on Étale Cohomology* | 1,150,185 bytes, 93 PDF pages, SHA-256 prefix `228d08bfaa7382d5` |
| Kedlaya, MIT OCW Lecture 22 | 284,954 bytes, 12 PDF pages, SHA-256 prefix `35bde68e9d2ba71a` |

The A-page results are recorded as `included` with exact item destinations; Anschütz Theorem 3.26(3) is `out-of-scope` with the reason that global exact/conservative pullback is distinct from the local-ring claim. On the B page, the two canonical examples are included. The six source-content rows (Serre, Anschütz, and MIT OCW, each applied to both examples) are marked `inline` and point to those examples; none is a decline. The search record notes a Serre translation that was not counted as independent and a Purdue notes URL that returned 403 and was not selected. No selected source had a retrieval failure, so `source_resolution` remains empty and no source is marked dropped. The coverage checklist reports its low-yield advisory (2/8 harvested results scaffolded); it counts only the two canonical examples as scaffolded, while the six inline supporting results remain attached to those examples.

## Final Step 1 state and checks

The batch-64 inventory contains the local completion lemma, the faithful-flatness theorem, and the two examples. Its computed in-run item levels are respectively 0, 1, 2, and 2; current batch-level computation gives batch 64 level 0 with `requires: []`. The A page retains the plan's tenth prerequisite page, `schemes-subschemes-and-morphisms-locally-of-finite-type`, beyond the nine abbreviated task prerequisites. The two pages are frontmatter-only, have no summaries, and remain well below the 100-item cap. The engine-owned `page_layout: compact-v1` flag has not yet been applied and is left for the owner engine pass. The cross-batch dependency record is the JSON array `[]` because none of this batch's item or page edges targets another batch in this run.

Each assigned item has a current `step1-decisions` record with `decision: ready` and `owner: false`; direct `step1Decision` checks returned `closed: true` for all four. The records include the examined direct dependencies. This records authoring readiness and is not independent proof approval.

Final scoped results:

- `proof-contract.mjs --strict`: 4/4 items, 38 exact supplier citations, every numbered step mapped, no errors or warnings.
- `proof-layout.mjs` on the four changed carriers: 21 steps, 0 defects.
- Focused `rendercheck`: six item/page files, 0 errors or warnings; formal-series brackets use `\llbracket\cdot\rrbracket` so they are not parsed as links.
- Focused `depcheck` and `fwdcheck`: each checked all four carriers plus the 1,290-item prerequisite closure, with 0 errors or warnings.
- `content-policy`: four scoped items, 0 errors or warnings.
- `coverage-checklist --require-destination`: two pages and 25 harvested results, 0 errors and the B-page low-yield advisory described above.
- `source-fetch-check`: 6/6 sources fetch-verified; 6/6 resolved, 0 drops.
- Scoped in-memory dependency-level calculation: no errors; the assigned levels are 0, 1, 2, and 2.

## Run-wide owner work still required

The run-wide `proof-contract-coverage` and item-level dependency commands cannot close because neighboring manifests are still empty: batches 65–69 contain the A/B page pairs `qftx-gaga-local-coherent-acyclicity`, `qftx-gaga-compact-coherent-finiteness`, `qftx-gaga-projective-scalar-dolbeault`, `qftx-coupled-penrose-vanishing-on-the-round-four-sphere`, and `qftx-positive-real-linear-monad-normal-forms`, with their companion example pages. The coverage command stops at the first of those, batch 65's `qftx-gaga-local-coherent-acyclicity` inventory. These are outside batch 64's ownership.

The run-wide `batch-dependency-levels.mjs check` reports its recorded input digest stale after current manifests were authored. An in-memory recomputation gives batch 64 `dependency_level: 0`, `requires: []` (current input SHA-256 `c433ef85e082f7d94c8e6a2bfc2670a3faee340a5a840ea9442086c7b863fe65`). The shared run-level dependency artifact was left unchanged for the owner to refresh together with the other batches. No mathematical prerequisite gap, cycle, or page-capacity issue remains in batch 64.
