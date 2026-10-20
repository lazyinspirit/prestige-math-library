# Batch 26 — PC algorithm and Markov-equivalence structure learning

Run `machine-learning-all-101-2026-10-19`; role `beta`; pair `ML-25`, A/B orders
2746/2747, category `machine-learning`.

## Controlling plan and inventory

The refreshed owner-authoring direction file is absent. The controlling design is
`research/plan-machine-learning-track.md` L254–256. The corresponding A/B rows in
`research/plan-spec.json` agree on page IDs, title, category, companion, page
requirements, scope, proposed five core items, and source/proof route. The manifest's
initial empty `items` arrays were construction placeholders, not a plan conflict. The
batch-level scheduling input is
`research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json`, input
SHA-256 `424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0`: batch 26
has level 0 and no prerequisite batches. Its four declared page requirements are
published context. The authored inventory is 15 A-page items and 3 B-page examples,
well below the 100-item cap.

| Level | Item | In-batch dependencies |
|---:|---|---|
| 0 | `def-causal-discovery-oracle-regime` | — |
| 0 | `def-cpdag-markov-equivalence-class` | — |
| 0 | `lem-pc-skeleton-separation` | — |
| 0 | `lem-covered-edge-reversal-preserves-d-separation` | — |
| 0 | `lem-chordal-components-admit-both-orientations` | — |
| 0 | `def-gaussian-partial-correlation` | — |
| 1 | `lem-pc-separating-set-collider` | `def-cpdag-markov-equivalence-class` |
| 1 | `thm-dag-markov-equivalence-skeleton-vstructures` | `def-cpdag-markov-equivalence-class`; `lem-pc-skeleton-separation`; `lem-covered-edge-reversal-preserves-d-separation` |
| 1 | `alg-pc-causal-discovery` | `def-causal-discovery-oracle-regime`; `def-cpdag-markov-equivalence-class` |
| 1 | `def-sample-partial-correlation` | `def-gaussian-partial-correlation` |
| 1 | `thm-gaussian-zero-partial-correlation-is-conditional-independence` | `def-gaussian-partial-correlation` |
| 2 | `lem-pc-fisher-transform-uniform-concentration` | `def-sample-partial-correlation`; `def-gaussian-partial-correlation`; `thm-gaussian-zero-partial-correlation-is-conditional-independence` |
| 2 | `lem-meek-rules-complete-for-cpdag` | `alg-pc-causal-discovery`; `def-cpdag-markov-equivalence-class`; `thm-dag-markov-equivalence-skeleton-vstructures`; `lem-chordal-components-admit-both-orientations` |
| 2 | `ex-pc-chain-versus-collider-separating-sets` | `alg-pc-causal-discovery`; `def-causal-discovery-oracle-regime`; `def-cpdag-markov-equivalence-class`; `lem-pc-separating-set-collider`; `thm-gaussian-zero-partial-correlation-is-conditional-independence` |
| 2 | `ex-pc-latent-confounding-limitations` | `alg-pc-causal-discovery`; `def-causal-discovery-oracle-regime`; `def-cpdag-markov-equivalence-class`; `thm-dag-markov-equivalence-skeleton-vstructures` |
| 3 | `thm-pc-oracle-correctness` | `def-causal-discovery-oracle-regime`; `def-cpdag-markov-equivalence-class`; `alg-pc-causal-discovery`; `lem-pc-skeleton-separation`; `lem-pc-separating-set-collider`; `lem-meek-rules-complete-for-cpdag` |
| 3 | `ex-pc-markov-equivalent-dags` | `alg-pc-causal-discovery`; `def-cpdag-markov-equivalence-class`; `thm-dag-markov-equivalence-skeleton-vstructures`; `lem-meek-rules-complete-for-cpdag`; `def-causal-discovery-oracle-regime` |
| 4 | `thm-pc-high-dimensional-consistency` | `alg-pc-causal-discovery`; `def-causal-discovery-oracle-regime`; `def-cpdag-markov-equivalence-class`; `def-gaussian-partial-correlation`; `def-sample-partial-correlation`; `lem-pc-fisher-transform-uniform-concentration`; `lem-pc-skeleton-separation`; `thm-gaussian-zero-partial-correlation-is-conditional-independence`; `thm-pc-oracle-correctness` |

The levels are zero without a same-batch supplier and otherwise one plus the largest
supplier level. Item IDs and the planned dependency graph were recorded before carriers
were drafted; the manifest's complete object rows (`deps` and `dependency_level`) were
reconciled from the authored frontmatter afterward. The scoped dependency audit reports
all 18 labels correct. The only cross-page edges are to published prerequisite context, so
`research/machine-learning-all-101-2026-10-19-batch-26.cross-batch-dependencies.json`
is an empty reviewed-edge list; no other batch's files were edited.

## Supplier verification and conventions

Inspected the actual published bodies (including proofs where present) of
`def-recursive-structural-causal-model-and-dag`, `def-d-separation-in-a-dag`,
`thm-dag-factorization-implies-d-separation-conditional-independence`,
`def-faithfulness-of-a-dag-model`, `def-conditional-independence-given-a-sigma-algebra`,
`def-independent-random-elements`, `def-multivariate-normal-law`, and
`thm-nondegenerate-multivariate-normal-law-has-density`. The SCM supplier distinguishes
observed and latent vertices and defines its Markovian case by mutual independence of
exogenous variables. The global-Markov theorem supplies the d-separation-to-conditional-
independence direction only for a finite topological probability-kernel factorization
and assumes AC; faithfulness supplies the converse and is a separate law assumption.
The oracle-regime definition therefore states both the full-joint factorization and
faithfulness explicitly. It does not infer faithfulness from the SCM. The PC theorem is
choice-free as a finite graph argument; AC is carried in the probability interfaces
because the conditional-independence and Gaussian suppliers assume it.

The multivariate-normal supplier permits singular covariance, but every Gaussian
partial-correlation and high-dimensional claim here assumes positive-definite covariance.
The density supplier has exactly that hypothesis. The sample test is restricted to
conditioning sets with a positive-definite sample covariance block and
`n - |S| - 3 > 0`; for the theorem's bounded search depth these conditions hold almost
surely for all sufficiently large `n`. The Fisher-z cutoff is the source's test rule;
no exact finite-sample size claim is made. The theoretical `alpha_n` depends on unknown
`c_n`, so it is not an implementable tuning prescription.

The design's warning about Kalisch–Bühlmann's printed R4 condition is retained: its
listed nonadjacency conflicts with a required arrow. This batch uses only background-free
R1–R3, as directed by the controlling plan. Meek's 1995 paper states Theorem 1 without a
proof and omits a subcase in its intermediate transitivity argument; the local DAG
equivalence and R1–R3 completion proofs supply those arguments instead of treating the
citations as proofs. The latter also proves the chordal-component orientation result
locally. No CLT or Borel–Cantelli conclusion is used: the high-dimensional result follows
from a finite-sample Gaussian concentration bound and a union bound, while the declared
page requirements remain unchanged.

## Sources read

1. Kalisch and Bühlmann, “Estimating High-Dimensional Directed Acyclic Graphs with the
   PC-Algorithm,” *JMLR* 8 (2007), §§2.1–2.3, printed pp. 614–619; §3 and Theorems 1–2,
   pp. 619–620; Appendix A.1–A.2.3, pp. 628–634; Appendix B, p. 635.
   <https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf>
2. Meek, “Causal Inference and Causal Explanation with Background Knowledge,” UAI 1995,
   §§1.1, 2.1–2.3, printed pp. 404–406; Appendix, printed pp. 408–410. The inspected
   author-hosted full-text deposit is the complete original eight-page paper.
   <https://arxiv.org/pdf/1302.4972>
3. Lauritzen, *Graphical Models* lecture notes, §2.6, printed pp. 69–72 (Lemmas 2.57–2.61
   and Theorem 2.62, including covered-edge reversals and the equivalence proof); §2.5.4,
   printed pp. 54–57 (d-separation and ancestral moral separation).
   <https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf>

These texts were inspected in full-text form for the cited sections. A supplementary
Meek thesis deposit at a presigned host URL returned HTTP 403; it was not selected or
cited. Its relevant topic was checked against the complete accessible Meek 1995 paper,
Lauritzen's full notes, and Kalisch–Bühlmann; no authored claim relies on that thesis.
The selected full-text sources were stamped in the coverage carrier: K&B PDF 199,047
bytes/24 pages (`af2c2704f645c413`), Meek PDF 519,039 bytes/8 pages
(`75012e99821d06b3`), Lauritzen PDF 899,245 bytes/160 pages
(`965fc04bf07b2e8b`); all six page/source entries fetched and verified successfully.
Kalisch–Bühlmann
supports the PC search, Fisher test, and asymptotic error bound; Meek supports the
v-structure rule, R1–R3 and the equivalence characterization (while omitting a proof
of its theorem and a subcase in one intermediate proof); Lauritzen supports ancestral-
moral separation, covered-edge reversal, and the skeleton/v-structure equivalence route.
The local proofs supply the omitted arguments. The coverage carrier lists all supported
items and harvested-result dispositions; its six page/source entries have fetch stamps,
and the liveness/source-backing check passed for all 18 included authored items.

## Item progress and checks

All 18 carriers are drafts on the assigned pages. Direct dependency IDs are listed in
the scaffold table above and on each carrier; source locators are listed in “Sources
read” and in the coverage harvest. All assigned records are now `ready`; this is
authorship readiness, not independent approval.

- `def-causal-discovery-oracle-regime`: finite observed-only Markovian recursive SCM, explicit full-joint parent-kernel factorization, separate faithfulness assumption, and perfect CI oracle; AC is explicit. Sources: K&B §§2.1–2.2; Meek §1.1. Actual SCM, kernel, global-Markov, faithfulness, CI, and independent-random-element suppliers were inspected.
- `def-cpdag-markov-equivalence-class`: skeleton, unshielded triples/colliders, d-separation equivalence, consistent extension, and compelled/reversible edge conventions. Sources: Meek §1.1; Lauritzen §2.6. D-separation supplier checked.
- `lem-pc-skeleton-separation`: adjacent endpoints have an active one-edge path; a nonedge is separated by the parents of a nondescendant endpoint. Sources: K&B §2.1; Lauritzen Lemma 2.57. Both directions proved locally.
- `lem-covered-edge-reversal-preserves-d-separation`: covered reversal preserves acyclicity and the full d-separation model via common moral graphs, ancestor differences, and a removable simplicial vertex. Sources: Lauritzen Lemma 2.59; Meek Appendix. Ancestral-moral suppliers checked.
- `lem-chordal-components-admit-both-orientations`: every edge in a finite chordal graph admits both directions inside acyclic orientations with no unshielded collider; proof uses simplicial elimination and a clique forest. Sources: Meek Appendix; Lauritzen §2.6. Finite construction supplied locally.
- `def-gaussian-partial-correlation`: normalized off-diagonal entry of the Gaussian conditional-covariance block; covariance must be positive definite. Sources: K&B §2.2.2; Lauritzen §2.6.
- `lem-pc-separating-set-collider`: for an unshielded triple and endpoint separator, the middle vertex is omitted exactly for a collider. Sources: K&B §2.3; Meek §2.1. Both implications proved locally.
- `thm-dag-markov-equivalence-skeleton-vstructures`: same skeleton and unshielded colliders iff equal d-separation models; forward proof uses finite covered reversals. Sources: Meek Theorem 1; Lauritzen Lemmas 2.57–2.61 and Theorem 2.62; K&B §2.1. A parent-set argument defect was repaired at current step 3.1 by explicitly assuming the parent is absent before deriving the contradiction.
- `alg-pc-causal-discovery`: fixed-order population skeleton search, stored separators, collider orientation, and background-free R1–R3 closure; R4 is excluded per the controlling-plan warning. Sources: K&B Algorithms 1–2; Meek §2.1.
- `def-sample-partial-correlation`: residual correlation after projecting off the intercept and conditioning columns; Fisher multiplier requires n minus cardinality(S) minus 3 to be positive. Source: K&B §2.2.2. Sample covariance nonsingularity conditions are explicit.
- `thm-gaussian-zero-partial-correlation-is-conditional-independence`: positive-definite conditional covariance and the Gaussian zero partial-correlation iff CI criterion; AC is assumed. Sources: K&B Proposition 2; Lauritzen §2.6. Block-regression and conditional-characteristic-function arguments supplied.
- `lem-pc-fisher-transform-uniform-concentration`: uniform Gaussian Fisher-transform tail bound with exponent (n minus cardinality(S) minus 1)t² and constants depending only on M<1. Sources: K&B Appendix A.2.3; Lauritzen §2.6. Residual, chi-square, and normal mgf arguments are complete.
- `lem-meek-rules-complete-for-cpdag`: R1–R3 are sound and complete from the skeleton plus exact colliders; closed undirected components are chordal and each remaining edge is reversible. Sources: Meek §§2.1–2.3 and Appendix; Lauritzen §2.6; K&B §2.3. The transitivity proof includes all initial-collider/R1/R2/R3 cases.
- `thm-pc-oracle-correctness`: under the stated factorization and faithfulness regime, exact PC recovers the skeleton, records actual d-separators, orients colliders, and returns the CPDAG. Sources: K&B §§2.2.1 and 2.3; Meek §§2.1–2.3; Lauritzen §2.6. AC is confined to probability suppliers.
- `thm-pc-high-dimensional-consistency`: Gaussian Fisher-threshold PC recovers the CPDAG with error at most exp(-C n^(1-2d)) under p_n=O(n^a), q_n=O(n^(1-b)), c_n^-1=O(n^d), and 2d<b. Source: K&B Theorems 1–2 and Appendix A.2.3; Lauritzen §2.6. The finite test count and union bound are written out; c_n is unknown, so the threshold is theoretical. No CLT or Borel–Cantelli conclusion is used.
- `ex-pc-chain-versus-collider-separating-sets`: unit-coefficient Gaussian chain and collider have endpoint separators {Y} and empty, respectively; covariance calculations verify faithfulness and PC outputs. Sources: K&B §2.3; Meek §2.1. TikZ diagrams accompany the algebraic verification.
- `ex-pc-latent-confounding-limitations`: L→X,L→Y and an observed-only X→Y model share the same N(0, [[2,1],[1,2]]) law, so observed PC returns adjacency without identifying the causal explanation. Sources: K&B §2.1; Meek §1.1. Equality is proved via characteristic functions; TikZ is explanatory only.
- `ex-pc-markov-equivalent-dags`: opposite total orientations of a complete three-vertex skeleton yield the same equivalence class and an undirected triangle CPDAG. Sources: Meek Theorem 1; Lauritzen Theorem 2.62. All three edge reversals and PC output are verified directly; TikZ is explanatory only.

Scoped validation results and run-wide blockers are recorded below.

## Final scoped checks

| Check | Result |
|---|---|
| Batch-local dependency levels | 18 items, 0 errors; levels are 0–4 and match the final carrier dependencies. |
| Focused `depcheck` | 18 items checked; 0 errors and 0 warnings; no item or page cycles. |
| Phase precheck | 13 proof-bearing items checked; 0 failures. The five definitions/algorithm without proof sections are not applicable. |
| `proof-layout` | 18 items, 63 numbered steps, 0 defects. |
| Proof contracts | Strict check: 18/18 items, 0 errors and 0 warnings; all cited facts have exact supplier excerpts and every step is mapped. |
| Citation fidelity | 69 citations checked; no missing quotes or widening candidates. |
| Coverage checklist | 2 pages, 32 harvested results, 0 errors and 0 warnings. |
| Full-text fetch | 6/6 page/source entries stamped and verified; no source drops. |
| URL liveness/source backing | 3/3 URLs live; all 18 included authored items remain backed. |
| Step 1 decisions | 18/18 assigned items recorded `ready` with their direct dependency IDs and evidence. |

At the latest run-wide check, the dependency scan covered 202 pages and 360 items; its
144 errors were all empty scaffold inventories outside batch 26, with no dependency-level
mismatches and no errors for this batch. The run-wide proof-contract-coverage command
stops at the empty inventory for `distribution-shift-and-domain-adaptation`; this batch's
strict contract check and local dependency scope pass. The run-wide Step 1 check remains
open: it reports 360 items, 205 ready, and 299 pending work records, with zero pending
records on either page of this batch.

Both page files contain YAML frontmatter only; their Markdown bodies are empty and no
summary was authored. The engine has not applied `page_layout: compact-v1` yet. That
mechanical run-wide step remains with the workflow owner after all initial page authoring;
the authored page metadata is ready for it. No published content, shared plan, engine
state, verdict, or other pair's file was changed. Readiness records are not independent
approval or publication.
