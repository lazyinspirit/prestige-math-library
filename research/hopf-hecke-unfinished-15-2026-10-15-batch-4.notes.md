# Batch 4 authoring notes

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Role: beta, batch 4  
Pair: `hopf-ideals-finite-duals-and-basic-constructions`

## Inventory and plan reconciliation

The assigned A/B pair is at orders 1696–1697 in `hopf-hecke-algebras`. The A page contains the six items in the HH-5 track design; the B page contains five worked examples. The pair requires `tensor-coherence-and-algebraic-descent`, `coalgebras-counits-and-the-fundamental-coalgebra-theorem`, `comodules-matrix-coefficients-and-coalgebra-duality`, and `bialgebras-convolution-and-antipode-identities`.

`research/plan-spec.json` agrees on the page IDs, order, kind, and page prerequisites, but its HH-5 A and B entries have empty `items` arrays. The track design and scaffold inventory specify the six A items and the B example scope, so I retained that inventory rather than treating the empty arrays as an instruction to omit it. No other plan/spec scope conflict was found. The pair uses 11 of the 100 permitted page slots.

| Page | Item | Dependency level |
|---|---|---:|
| A | `def-hh-finite-dual-of-an-associative-algebra` | 0 |
| A | `def-hh-hopf-ideal-and-hopf-subalgebra` | 3 |
| A | `thm-hh-finite-dimensional-dual-hopf-algebra` | 3 |
| A | `lem-hh-taft-algebra-pbw-and-hopf-structure` | 3 |
| A | `thm-hh-hopf-quotient-kernel-and-tensor-product-constructions` | 4 |
| A | `thm-hh-finite-dual-coalgebra-and-hopf-descent` | 4 |
| B | `ex-hh-finite-group-dual-hopf-algebra` | 4 |
| B | `ex-hh-coideals-ring-ideals-hopf-ideals-and-subbialgebras` | 4 |
| B | `ex-hh-sweedler-four-dimensional-hopf-algebra` | 4 |
| B | `ex-hh-finite-dual-of-a-polynomial-hopf-algebra` | 5 |
| B | `ex-hh-tensor-product-hopf-algebra` | 5 |

The levels are computed from in-run item `deps`, not `justified_by`. In particular the finite-dual definition introduces the cofinite-ideal space before the later theorem proves the transposed multiplication lands in its tensor square. `node tools/item-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15` passes for all 138 items on 30 pages, maximum level 14.

## Supplier checks and dependency changes

I inspected the current A-page and relevant item bodies for each required HH-1 through HH-4 page. The actual statements supply the tensor-duality/coherence, coalgebra and coideal, finite algebra–coalgebra duality, bialgebra/Hopf map equations, convolution uniqueness, and group/polynomial Hopf structures used here. Direct supplier statements and proofs were checked for hypotheses, map directions, characteristic assumptions, finite-sum notation, and antipode conventions. The used HH-2 and HH-3 supplier items have hash-current `ready` records. The current HH-4 bodies were inspected, but the Step 1 records for the following items are hash-stale after later edits. Those exact body claims were checked directly; this batch makes no upstream acceptance claim. No required supplier body was unavailable at handoff.

* `def-hh-bialgebra-and-bialgebra-map`: over the field `k`, `Δ` and `ε` are unital algebra maps and the tensor-product algebra is componentwise. This supports `def-hh-hopf-ideal-and-hopf-subalgebra`, `thm-hh-finite-dimensional-dual-hopf-algebra`, `thm-hh-hopf-quotient-kernel-and-tensor-product-constructions`, and `thm-hh-finite-dual-coalgebra-and-hopf-descent`.
* `def-hh-hopf-algebra-and-antipode`: a Hopf algebra over `k` has an antipode that is a two-sided convolution inverse; no bijectivity is required. This supports the Hopf-ideal definition, finite-dimensional dual theorem, Taft structure lemma, quotient/kernel/tensor theorem, and finite-dual theorem.
* `lem-hh-convolution-algebra-associativity-and-unit`: for the stated coalgebra source and algebra target, convolution on `Hom_k(C,A)` is associative with unit `u_A ε_C`. The quotient/kernel/tensor theorem uses this interface to compare antipodes of Hopf maps.
* `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication`: for a Hopf algebra over `k`, uniqueness of two-sided convolution inverses gives `S(ab)=S(b)S(a)`. This supports the quotient/kernel/tensor theorem and the coideal/ideal example's proof that `(x)` is stable under `S`.
* `lem-hh-group-and-polynomial-hopf-algebras-exist`: the group and primitive-polynomial Hopf structures, including their stated antipodes, are checked in the current supplier. This supports the finite-group dual, coideal, polynomial finite-dual, and tensor-product examples.

Two planned edges were removed after inspecting the actual arguments:

* The planned edge from `thm-hh-hopf-quotient-kernel-and-tensor-product-constructions` to `thm-hh-coalgebra-quotient-and-kernel-descent` is not logically needed. The local quotient proof establishes coideal descent directly from the image-based coideal condition and `q ⊗ q`; this branch is choice-free. The supplier theorem bundles additional kernel/sum claims and assumes AC. The HH-2 page and coideal definition remain direct requirements. The removed edge is recorded in `batch-4.cross-batch-dependencies.json`.
* The planned edge from `lem-hh-taft-algebra-pbw-and-hopf-structure` to `lem-hh-finite-polynomial-and-localization-constructions` is unused: the Taft proof constructs the truncated vector-space model directly and uses the free-associative quotient supplier for the presentation and PBW basis.

The Hopf-ideal definition adds the explicit two-sided-ideal prerequisite. The coideal example adds the finite-polynomial and tensor-basis prerequisites for monomial independence. The finite-dimensional dual theorem drops unused tensor-product-algebra and module-tensor-functoriality edges; its proof uses finite tensor duality, the bialgebra/Hopf equations, and finite Sweedler calculus. Manifest dependencies and item frontmatter agree.

The declared axiom branches are preserved. AC is used only for the equivalent tensor-subspace shorthand in the Hopf-ideal definition, and for tensoring arbitrary injections/kernel exactness in the Hopf-map kernel branch. The Hopf quotient and tensor-product Hopf constructions, and the polynomial/group examples, are proved without choice. The characteristic and field hypotheses remain explicit on the Taft and finite-dual claims.

## Sources and source-convention escalation

The coverage file records three full-text sources, their locators, all harvested results and dispositions, and fetch stamps. There were no retrieval failures, retries, or dropped sources; `tools/source-resolution.mjs` required no changes.

* Andrew Baker, *Hopf algebras over fields: an introduction*, complete 55-page lecture notes, `https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf`. Read §§2.22–2.25, §3.2, §3.4, and §3.12. These supply comparison results for Hopf ideals/quotients/kernels, finite group duality, Taft algebras, and the four-dimensional specialization. The local carriers provide complete proofs. The Taft relation uses the inverse of Baker's root parameter.
* Kalle Kytölä, *Introduction to Hopf algebras and representations*, complete 91-page lecture notes, `https://www.math.csi.cuny.edu/abhijit/iiser2018/reading/Hopf-lecture_notes.pdf`. Read all of §§3.8–3.9, printed pp.47–52, including the preparations for Theorems 3.45–3.46. Theorem 3.46 is a sketch in the source; the finite-dual carrier proves the required closure and antipode claims locally.
* Miguel Angelo Marques do Couto, *Commutative-by-finite Hopf algebras and their finite dual*, PhD thesis, University of Glasgow (2019), complete 222-page text, `https://theses.gla.ac.uk/74418/1/2019CoutoPhD.pdf`. Read §1.3, Theorem 1.3.7(2) and its proof, Example 1.3.8, and Remark 1.3.9, printed pp.21–23. Its example identifies the characteristic-zero finite dual of the primitive polynomial Hopf algebra as `k[f] ⊗ k(k,+)` and identifies all algebra maps with group-likes. It is recorded as an out-of-scope source result because the assigned carrier proves its all-characteristic point-indexed formula directly.

Owner reconciliation is needed for a source-convention discrepancy. Baker §2.10 (printed p.24) defines `A°` by cofinite two-sided ideals, so each evaluation `ev_a(f)=f(a)` lies in `k[X]°`, since it annihilates the cofinite ideal `(X-a)`. These are distinct group-like functionals for distinct `a`. Yet Baker §3.2 (printed pp.38–39) states `k[X]° ≅ Γ_k` in characteristic zero, where the displayed `Γ_k` is the divided-power Hopf algebra identified there with the primitive polynomial Hopf algebra. That object does not account for the group-like evaluations at all points. Couto's Theorem 1.3.7 and Example 1.3.8 independently exhibit the missing point-indexed group-like factor. Baker may be using a different intended dual convention in §3.2 or may have omitted this factor; the exact explanation remains unresolved. The batch-4 polynomial example does not rely on Baker's claim: it proves the point decomposition from cofinite ideals, factorization, and CRT. This source issue does not leave a local claim unproved, but the owner should reconcile the source statement before using it elsewhere.

## Contracts, checks, and readiness

The proof contracts contain the actual proof steps, exact supplier excerpts, fact/input mappings, boundary dispositions, and finite checks applicable to the examples. `proof-contract --strict` passes 11/11. The cross-batch ledger records current source-body inspection only; no independent acceptance is claimed.

Final scoped checks after the carrier edits:

* `proof-layout`: 11 items, 57 steps, 0 defects.
* `precheck`: 9 proof-bearing items checked, 0 failures; the two definitions are not applicable.
* `rendercheck`: all 13 assigned item/page files parse, with no delimiter, math-link, KaTeX, or frontmatter errors.
* `proof-contract --strict`: 11/11, 0 errors, 0 warnings.
* `coverage-checklist`: 1 page, 11 harvested results, 0 errors, 0 warnings.
* `source-fetch-check --stamp`: 3/3 sources fetch-verified, 0 drops.
* `content-policy`: 11 scoped items, 0 errors, 0 warnings.
* Focused `depcheck`: 11 selected items; cycle checks cover 427 items and 60 pages, with no errors.
* `manifest-deps`: 11 items, 0 normalized, 0 errors.
* `item-dependency-levels`: all 138 items on 30 pages pass.
* Manifest/frontmatter sync: both page item lists and all 11 items' `deps`, `justified_by`, `forward_refs`, and levels match.
* Cross-batch edge audit: all external page requirements and earlier-batch direct item dependencies are represented in the 28-row evidence ledger.

All 11 batch-4 Step 1 records are hash-current against the final carrier and dependency inputs, with examined `deps`/`justified_by` IDs and evidence reasons. The `record` command correctly refuses to overwrite these unchanged ready records. At final check, the whole-run Step 1 check reports 63/138 ready and remains open outside this batch; the run-wide check is not a batch approval.

The shared schedule file `research/hopf-hecke-unfinished-15-2026-10-15-batch-dependency-levels.json` remains stale and was not edited. Its recorded input hash is `af174adebd9c7757f619129f8c23dd9db949b50f57fb82ef23457433b3dfd119`; recomputation from current manifests gives `a63185472fa07740b0e4982de4874724c3a62c6b94139d7c87a43e032fcae869`. The recomputed batch-4 row is still dependency level 3 with prerequisites 1, 2, and 3. `batch-dependency-levels.mjs check` therefore fails freshness validation; the owner must refresh the shared derived schedule. This does not change the passing item-level labels for the assigned batch.

The read-only autopilot status recomputation at `2026-10-15T05:47:37Z` reports the run as running, with no action in flight. Its `1-scaffold` stage reports 13/15 units covered, missing 4 and 14, and missing artifacts for 3, 5, 6, 7, 8, 9, 11, and 14. Thus the local batch-4 files are present, but the driver still reports no batch-4 dispatch coverage. The owner blocker file records `stage-stalemate` for covered but artifact-incomplete units 11 and 3. The owner/authorized operator must reconcile dispatch coverage, blocker evidence, and stale shared scheduling before advancing the run. No `.autopilot` state, shared plan, or verdict was edited. A run-name search of `git log --all` found no matching commit.
