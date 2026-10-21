# Batch 13 — Step 1 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `network-tomography-and-experiment-design` (A/B)  
Authoring date: 2026-10-19

## Live-run and scope evidence

- `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19/state.json` records stage `1-scaffold`, revision `six-step-v1-compact`, and a batch-13 dispatch started at `2026-10-18T18:16:28.014Z` with no recorded end time.
- The accompanying `.autopilot/.../status.md` says `PAUSED`, reports no in-flight work, and was updated at `2026-10-18T18:15:06.316Z`; that conflicts with the later state dispatch rows. No engine state was changed.
- `git log -5` has HEAD `dd17c1fe56` (`Lower mathematics workflow worker concurrency to 20`). `git status --short --untracked-files=no` shows pre-existing modifications to `research/plan-machine-learning-track.md` and `research/plan-spec.json`; both were left untouched.
- The batch assignment gives scheduling input `69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce`, batch dependency level 1, and prerequisite batch 7.

## Plan comparison and interpretation

The IP-13 section in `research/plan-inverse-problems-track.md` and the current IP-13 entry in `research/plan-spec.json` agree on page IDs, order 3022/3023, the three page requirements, and the active network-tomography scope. The design's declared A inventory is `def-ip-tree-probing-experiment`, `alg-ip-link-loss-em`, and `def-ip-network-tomography-design-criterion`; the B leaves are a two-receiver multicast/unicast comparison and a normal-delay tree with nonidentifiable means. No plan/spec conflict was found.

The design says to keep split/coverage as a reported result until its original proof is sourced. Xi–Michailidis–Nair (2006), Proposition 1 and Appendix A.1, supplies the original full proof. A local theorem helper, `thm-ip-flexicast-link-loss-identifiability`, is therefore added on A with a complete moment-ratio proof. It proves the cited interior-parameter criterion locally and keeps the design condition itself as a definition. No plan file was changed.

## Item inventory and in-run item levels (before carrier authoring)

| Item | Kind | Direct item dependencies | In-run level |
|---|---|---|---:|
| `def-ip-tree-probing-experiment` | definition | `def-statistical-experiment` | 0 |
| `def-ip-network-tomography-design-criterion` | definition | `def-ip-tree-probing-experiment` | 1 |
| `alg-ip-link-loss-em` | algorithm | `def-ip-tree-probing-experiment`, `alg-expectation-maximization` | 1 |
| `thm-ip-flexicast-link-loss-identifiability` | theorem | `def-ip-tree-probing-experiment`, `def-ip-network-tomography-design-criterion`, `def-identifiability-of-an-estimand` | 2 |
| `ex-ip-unicast-product-nonidentifiability-and-multicast-recovery` | example | `def-ip-tree-probing-experiment` | 1 |
| `ex-ip-independent-normal-delays-have-nonidentifiable-link-means` | example | `def-standard-normal-and-normal-laws`, `def-axiom-of-choice`, `def-identifiability-of-an-estimand` | 0 |

The level rule counts only dependencies owned by this run. All cross-run suppliers remain explicit item/page context. The A items are authored first; B examples follow the A-page definitions.

## Supplier bodies examined

- `library/mathematical-statistics/statistical-experiments-models-and-identifiability.md` and its relevant items: `def-statistical-experiment`, `def-parametric-statistical-model`, `def-observational-equivalence`, `def-estimand-on-a-statistical-model`, `def-identifiability-of-an-estimand`, and `thm-identifiability-iff-constant-on-equivalence-classes`. The experiment definition gives a measurable observation space, parameter set, and sampling-law family; the identifiability definition says the identity target is identifiable exactly when the parameter-to-law map is injective. The local theorem uses only these finite-law interfaces, not parameter-space measurability or a common realization.
- `library/bayesian-computational-statistics/em-algorithm-and-latent-variable-likelihood-ascent.md` and `items/alg-expectation-maximization.md`, `items/thm-em-observed-log-likelihood-is-nondecreasing.md`, and `items/rem-em-ascent-does-not-imply-global-optimality-or-convergence.md`. The local procedure uses conditional latent-success expectations followed by maximization of the expected complete-data Bernoulli log likelihood. It makes no monotonicity, convergence, or global-optimality claim and does not invoke the generic algorithm's finite-KL/AC branch; all latent-state sums are finite.
- `items/def-standard-normal-and-normal-laws.md` and `items/def-axiom-of-choice.md` were read for the B-page normal-delay example. That example explicitly carries AC because the published normal-law definition assumes it; the finite Bernoulli model and split/coverage theorem remain choice-free.

## Sources and reading locators

- Xi, Michailidis, and Nair, “Estimating Network Loss Rates Using Active Tomography,” JASA 101 (2006), full 19-page PDF, `https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf`: §3.2 Proposition 1 and Appendix A.1, PDF pp. 15–17 (printed pp. 1445–1447), for the split/coverage criterion and original proof; §4.2, PDF pp. 5–6 (printed pp. 1434–1435), for the latent-link E/M update.
- Lawrence, Michailidis, and Nair, “Statistical inverse problems in active network tomography,” IMS Lecture Notes–Monograph Series 54 (2007), full 21-page PDF, `https://arxiv.org/pdf/0708.1079`: §§1, 3.1–3.2, PDF pp. 1–6, for the unicast and multicast examples, additive Gaussian-delay ambiguity, split/coverage statement, model assumptions, and flexicast EM mechanics.
- Cáceres, Duffield, Horowitz, and Towsley, “Multicast-Based Inference of Network-Internal Loss Characteristics,” IEEE Transactions on Information Theory 45 (1999), full 30-page PDF, `https://www.kiskeya.net/ramon/work/pubs/toit99.pdf`: §§2.1–2.3, PDF pp. 3–5, for logical-tree conventions, independent link-level Bernoulli trials, and the full receiver-outcome law. The source's temporal/spatial-dependence qualifications are not silently adopted; this pair uses the explicitly stated independent, homogeneous model.

The Cambridge 2021 chapter link was indexed as a full-PDF URL but the attempted browser open redirected to its abstract/metadata page. It is not used as evidence; the complete 2007 lecture-notes treatment and the independent 1999 paper were retrieved instead. All included URLs still require the final `source-fetch-check --stamp` result below.

## Cross-batch prerequisite still open

The A-page manifest retains the assigned page requirement `statistical-inverse-experiments-and-white-noise` (batch 7). The current batch-7 manifest has empty A/B item inventories and no corresponding authored library pages/items were present during this check. The controlling IP-07 plan names `def-ip-isonormal-white-noise-experiment` and `thm-ip-white-noise-spectral-sequence-representation`; its required interface is the family `Y(g)=⟨Kx†,g⟩+εZ(g)` over a separable Hilbert observation space with isonormal `Z`, plus the fixed-orthonormal-basis coordinate sequence with independent `N(⟨Kx†,u_j⟩, ε²)` laws and equality of cylinder experiments. The planned transitive suppliers are `def-statistical-experiment`, `def-negative-sobolev-space-for-white-noise`, and `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`.

No item-level argument in this batch uses those white-noise claims: the network model is finite Bernoulli and the normal-delay example is a separate finite tree model. The explicit page prerequisite remains open, so these carriers are not represented as fully ready until batch 7's actual page and bodies are checked. The published statistical-experiment and EM suppliers required by this pair are present and were inspected.

## Validation and readiness log

Pending until final carriers are written: source stamping; proof-contract validation; per-item dependency levels; render/precheck/depcheck scoped to this pair; `node tools/proof-layout.mjs` on all changed item paths; and Step-1 readiness records. Each item will be marked `escalated` if the page-7 supplier check remains unresolved at handoff. No native acceptance or publication is claimed.

### Completed item: `def-ip-tree-probing-experiment`

- Claim/conventions: finite known rooted tree; nonempty leaf receiver set; no nonroot unary internal vertices; a design is a finite family of nonempty receiver subsets with positive probe counts; independent homogeneous link-success Bernoulli variables; full receiver vectors are observed; counts are optional summaries. The one-probe law is explicitly the finite sum over compatible link states and is normalized by a finite product calculation.
- Dependencies: `def-statistical-experiment` (external published definition); no in-run item supplier, so `dependency_level: 0`.
- Source support: Cáceres–Duffield–Horowitz–Towsley (1999), §§2.1–2.3, PDF pp. 3–5; Lawrence–Michailidis–Nair (2007), §§1–2, PDF pp. 1–4. These support the logical-tree loss model and observed path products; they do not replace the later identifiability proof.
- Decision: draft definition complete; source stamping and scoped validators remain pending. Next: define split/coverage on this exact model, then author the finite-state EM procedure.

### Completed item: `def-ip-network-tomography-design-criterion`

- Claim/conventions: a receiver is covered by membership in one probe receiver set; a nonroot internal vertex is split when one receiver set meets two distinct child subtrees; the condition is their conjunction. This item defines only the combinatorial condition, not its statistical equivalence.
- Dependencies: `def-ip-tree-probing-experiment` (in-run level 0), so `dependency_level: 1`.
- Source support: Xi–Michailidis–Nair (2006), §3.2 Proposition 1; Lawrence–Michailidis–Nair (2007), §3.1. The primary source's original proof is recorded separately in the theorem helper.
- Decision: draft definition complete. Next: define the finite-state EM procedure without a convergence/global-optimum claim.

### Completed item: `alg-ip-link-loss-em`

- Claim/conventions: a finite-state EM procedure for link success probabilities, with per-design counts, an interior starting vector, link-coverage validation, conditional latent-success ratios, expected-success/probe-count updates, absolute observed-log-likelihood tolerance, and a finite cap. A boundary candidate that gives zero probability to an observed pattern is rejected; statuses are stopping reasons only.
- Dependencies: `def-ip-tree-probing-experiment` (in-run level 0) and the published `alg-expectation-maximization`; in-run `dependency_level: 1`.
- Axiom/use: no arbitrary-choice or KL calculation is used in the finite sums; this item makes no likelihood-ascent, convergence, or global-optimum claim. The generic EM item's separate measure-space/KL branch is not invoked.
- Source support: Xi et al. (2006), §4.2; Lawrence et al. (2007), §3.2. The full conditional state sums and stopping/status behavior are authored locally.
- Decision: draft algorithm definition complete. Next: prove the split/coverage equivalence locally using the finite outcome laws.

### Completed item: `thm-ip-flexicast-link-loss-identifiability`

- Exact claim: for the finite known-tree, independent, temporally homogeneous Bernoulli link-success experiment with every $p_e\in(0,1)$, the full repeated-probe law map is injective iff every receiver is covered and each nonroot internal vertex is split by one receiver set.
- Conventions/hypotheses: the root may have any finite number of children; every nonroot internal vertex has at least two; receiver sets are nonempty; each design has at least one probe; all success probabilities are strictly interior. The extension to a multi-child root is proved directly; no root split is required because $q_o=1$.
- Dependencies: `def-ip-tree-probing-experiment`, `def-ip-network-tomography-design-criterion`, `def-identifiability-of-an-estimand`; in-run level 2. No axiom of choice is used.
- Proof route: recover root-to-vertex success probabilities from leaf marginals and split-pair joint/marginal ratios, then divide along edges. For necessity, an uncovered leaf edge is invisible; an unsplit internal vertex admits a small incoming/outgoing probability rescaling that preserves every per-design outcome law. This is a local proof, not a citation-only acceptance.
- Source support: Xi et al. (2006), §3.2 Proposition 1 and Appendix A.1 (full original proof read); Lawrence et al. (2007), §3.1. The local moment proof is self-contained and uses the actual strict-interior hypotheses.
- Decision: draft theorem complete; source-fetch and mechanical validation remain pending. Next: author the two B leaves after the A definitions.

### Completed item: `ex-ip-unicast-product-nonidentifiability-and-multicast-recovery`

- Exact claim: the interior triples $(1/2,1/2,1/4)$ and $(1/3,3/4,3/8)$ share both separate-unicast path success probabilities, while their multicast joint-success probabilities are $1/16$ and $3/32$; the two-receiver multicast law recovers all three link probabilities by marginal/joint ratios.
- Conventions: two distinct unicast schemes use independent probes; one multicast probe records the joint receiver vector. The TikZ tree labels the shared and branch probabilities; the verification is algebraic and does not rely on the diagram.
- Dependencies: `def-ip-tree-probing-experiment`, in-run level 0, so item level 1.
- Source support: Lawrence et al. (2007), §1 Examples 1–2; Xi et al. (2006), §3.2. The exact parameter pair and local law comparison are computed in the item.
- Decision: draft example complete. No registered finite-smoke check applies; the witness uses exact rational probabilities. Next: author the additive Gaussian-delay example.

### Completed item: `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`

- Exact claim: for independent link delays $N(\mu_i,1)$ on one shared edge and two branch edges, the distinct means $(0,0,0)$ and $(1,-1,-1)$ give pointwise equal coupled path-delay vectors, hence equal one-probe and repeated-probe laws.
- Dependencies/axioms: `def-standard-normal-and-normal-laws`, `def-identifiability-of-an-estimand`, and direct `def-axiom-of-choice`; in-run level 0. AC is carried only because the library's normal-law definition assumes it. The Bernoulli network model and identifiability proof remain choice-free.
- Source support: Lawrence et al. (2007), §1 Example 3, PDF p. 2. The counterexample proof uses a direct coupling and does not rely on a Gaussian-sum theorem or the diagram.
- Decision: draft example complete. Mechanical verification remains pending; no precheck stamp was added. Next: add the A/B page carriers and synchronize the manifest to the final statements.

### A/B page carriers

Created frontmatter-only draft pages at `library/inverse-problems/network-tomography-and-experiment-design.md` and `library/inverse-problems/network-tomography-and-experiment-design-examples.md`. A item placement is in supplier/dependency order; the B page contains only the two planned examples. Both page bodies are empty and `page_layout` is left for the engine's mechanical compact-layout pass.

### Cross-batch input recorded

Created `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13.cross-batch-dependencies.json` with one open page edge from the A page to batch 7's `statistical-inverse-experiments-and-white-noise`. It names the exact absent planned IP-07 items and the required white-noise interface from the controlling plan. No item-level use of those claims is asserted. The published statistical-experiment and EM pages are outside this run and are not cross-batch ledger rows.

The batch-13 manifest is synchronized from the six final item carriers: IDs, kinds, page homes, dependency arrays, levels, provenance, titles, source references, and exact uninterrupted Definition/Statement/Example text now match the authored items.

### Source retrieval and stamping

`node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13.source-coverage.json --stamp` exited 0: 5/5 page/source entries fetch-verified, 5 newly stamped, 0 recovery retries, 0 drops. The coverage file records full-PDF sizes, page counts, hashes, and actual fetch times. The source-evidence file records the exact locators, supported item IDs, dispositions, supplier reads, and the unused Cambridge abstract redirect.

## Final validation and handoff

The final item carriers, A/B pages, manifest, proof contracts, source coverage/evidence, the native `batch-13.coverage.json` harvest checklist, and cross-batch dependency input are synchronized. The theorem proof is ordered as leaf marginals and counterexamples (phase 1), split-pair recovery (phase 2), edge recovery (phase 3), and the equivalence conclusion (phase 4); its proof contract uses the same phase steps and exact inspected supplier excerpts.

Scoped checks completed after the final contract edit:

- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13.proof-contracts.json --strict --json`: passed all 6 items, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` on the six items: 3 proof-bearing items checked, all pass; the three definitions/algorithm are not applicable to phase-proof checking.
- `node tools/proof-layout.mjs` on all six items: 6 items, 12 proof steps, 0 defects.
- `node tools/depcheck.mjs --items-file /tmp/inverse-problems-batch-13-validation-items.json --json --quiet`: passed the six-item and two-page closure with 0 errors and 0 warnings.
- `node tools/content-policy.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13.pages.json --json`: passed 6 items, 0 errors and 0 warnings.
- `node tools/rendercheck.mjs` on the six items and two page carriers: passed 8 files, 0 errors and 0 warnings. Both A/B page bodies are empty. A direct section scan confirms all six complete Definition/Statement/Example blocks contain no hyperlinks.
- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13.source-coverage.json`: passed 5/5 source stamps and 5/5 resolved sources; the earlier `--stamp` run recorded 5 actual stamps, 0 retries and 0 drops.
- `node tools/coverage-checklist.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13.coverage.json --require-destination --json`: passed the A-page harvest, 3 sources and 9 harvested results, 0 errors and 0 warnings. Its three copied source stamps also passed `source-fetch-check` (3/3 verified, 3/3 resolved). The coverage record preserves the unused Cambridge abstract redirect and the open batch-7 page blocker.
- Scoped `dependencyLevels` on the batch-13 manifest: 6 items, 0 errors. Levels are `def-ip-tree-probing-experiment` 0; `def-ip-network-tomography-design-criterion` 1; `alg-ip-link-loss-em` 1; `thm-ip-flexicast-link-loss-identifiability` 2; `ex-ip-unicast-product-nonidentifiability-and-multicast-recovery` 1; `ex-ip-independent-normal-delays-have-nonidentifiable-link-means` 0.

All six Step-1 records were written with `node tools/step1-decisions.mjs record` as `escalated` (without `--owner`). Each record includes its direct item suppliers and the reviewed page suppliers. The exact unresolved page supplier is `statistical-inverse-experiments-and-white-noise`; its batch-7 manifest remains empty and the actual bodies of `def-ip-isonormal-white-noise-experiment` and `thm-ip-white-noise-spectral-sequence-representation` remain unavailable. The required interface is the isonormal family over a separable Hilbert observation space and its fixed-basis independent Gaussian coordinate experiment with cylinder equivalence. This batch's six item claims do not use those claims, but the explicit A-page prerequisite and its transitive page dependency prevent a `ready` decision for the pair. No excerpt, proof completion, or acceptance was inferred from the plan.

Run-wide checks remain blocked outside this pair:

- `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` reports 208 errors across current run manifests: 180 empty scaffold inventories and 28 `dependency_level` mismatches. The scoped batch-13 level check above passes.
- `node tools/step1-decisions.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` remains open: 159 run items, 0 ready, 159 item work rows and 339 page work rows. All six batch-13 rows appear as `escalated` for the missing batch-7 page.
- The full-run `batch-dependency-levels.mjs check` fails on malformed YAML outside this pair: `items/thm-oriented-knot-framing-classes-form-z-torsor.md`, batch 59, line 24 has the double-quoted locator `"$\pi_1(S^1)\cong\mathbb Z$ by degree"`, where raw `\p` is an invalid YAML escape. No out-of-scope carrier was changed.

The recomputed autopilot status at `2026-10-18T18:49:54.088Z` is `running`, stage `1-scaffold`, with 0/109 results because no coverage is declared and no batch artifacts are yet counted; nothing is in flight. The latest git commit remains `dd17c1fe56` (`Lower mathematics workflow worker concurrency to 20`). No engine state, published content, plan, or verdict was changed by this pair.
