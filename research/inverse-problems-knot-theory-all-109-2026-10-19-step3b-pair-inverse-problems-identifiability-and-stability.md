# Step 3b pair authoring report — Inverse maps, identifiability, and stability

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: beta, batch 1  
Pair: `inverse-problems-identifiability-and-stability`  
Batch manifest: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-1.pages.json`

## Authored scope

The A page contains three draft items at dependency levels 0, 1, and 2. The first defines metric parameter and data spaces, a nonempty admissible class, the forward map, exact solution sets, an explicitly supplied equivalence relation, and a metric target-class space and map. It does not assume that a quotient metric can be constructed from an arbitrary equivalence relation. The second defines identifiability, total deterministic estimators, exact recovery, and a uniform stability modulus as distinct notions. Its commutative triangle is explained as notation, not used in a proof. The theorem proves the two-truth lower bound from the target-metric triangle inequality and derives the exact-data nonidentifiability case.

The B page contains `ex-ip-01-scope-and-boundary-cases` at dependency level 3. It verifies a finite-dimensional projection with nontrivial kernel, an injective geometric diagonal map on real `ell2` with no uniform stability modulus, the theorem's noisy-data lower bound, and isometric recovery on the stated restricted class. The `ell2` proof uses the supplier's finite-subsum definition; no compactness or choice claim is used.

The item inventory, direct edges, and level labels are recorded in the batch manifest. A and B page files contain YAML frontmatter only and no body summaries. All statement references follow their complete statements in the required references sections.

## Supplier and source evidence

The complete relevant supplier statements and proofs inspected are `def-metric-space`, `lem-metric-nonnegativity`, `lem-metrics-on-rn`, `def-euclidean-inner-product`, `def-linear-map`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-hilbert-space`, `lem-square-summable-sequences-form-a-hilbert-space`, `lem-geometric-sequence-null`, and `lem-power-monotone`. Their real-metric, zero-based-index, canonical-norm, and finite-subsum conventions agree with the authored uses.

Full-text source evidence, fetch stamps, per-heading destinations, and dispositions are in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-1.coverage.json`:

- Christian Clason, *Regularization of Inverse Problems*, [full PDF](https://arxiv.org/pdf/2001.00617v2): Chapter 3 opening and §§3.1–3.2, Chapter 4 §4.1. Supports inverse-problem models, exact/noisy data, stability and error amplification. Theorem 3.10 has the additional `y ∈ R(K)` hypothesis; it is not used as an arbitrary-data Picard criterion.

- Tristan van Leeuwen and Christoph Brune, *10 Lectures on Inverse Problems and Imaging*, [Lecture 1](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html): §§1.2–1.3, including §1.3.2. Independent lecture-note treatment of forward maps, parameter/data spaces, ill-posedness, and finite conditioning.

- Giannis Daras et al., *A Survey on Diffusion Models for Inverse Problems*, [full PDF](https://arxiv.org/pdf/2410.00083v1): §1.2, p. 3. Used for scope context only; no proof claim was imported.

The full texts were inspected; `source-fetch-check --stamp` passed all 3 sources on the recorded retrieval, URL liveness passed 3/3, and `source-backing --require-verified` passed for both authored source-backed results. Coverage records direct harvested-result destinations and explicit scope dispositions. The coverage checklist reports 0 errors and a low-yield warning (3/25 headings scaffolded); that warning remains visible for owner/reader reconciliation.

## Scoped validation and Step 1 records

- Batch-1 item dependency recomputation: 4 items, levels 0–3, no errors.
- `precheck.mts`: both proof-bearing items pass.
- Strict proof-contract check: 2/2 items, 0 errors, 0 warnings.
- `proof-layout.mjs`: 2 items, 11 numbered steps, 0 defects.
- `rendercheck.mjs`: all 4 item files and both page files pass math and frontmatter rendering checks.
- All four `step1-decisions.mjs record` entries are `ready`, `owner:false`; current hashes are checked at handoff. The definition entries record their complete placement/prerequisite evidence; the theorem and example entries include their proof-contract and scoped-gate evidence.

These are authoring-readiness records, not independent approval or publication.

## Run-wide owner blockers

The current full-run item-level dependency gate reports 180 empty page inventories and 28 dependency-level mismatches across the run's 218 pages; the exact mismatched item IDs and command evidence are recorded in the batch notes. The full-run batch-dependency gate is blocked before graph comparison by invalid YAML in the unassigned draft `thm-oriented-knot-framing-classes-form-z-torsor`: line 24 contains double-quoted `locator: "$\pi_1(S^1)\cong\mathbb Z$ by degree"`, where `\p` is an invalid YAML escape. No other pair's file was edited. These are run-wide owner reconciliation tasks; this pair has no unresolved in-pair prerequisite.

The current plan-spec/task page orders 2998/2999 control over the stale proposed-registration orders 2978/2979. No claim-scope conflict remains.
