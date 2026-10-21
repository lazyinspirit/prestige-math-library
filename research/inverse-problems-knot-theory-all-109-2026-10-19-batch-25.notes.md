# Batch 25 authoring notes — Nonlinear maps and tangential cone control

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `nonlinear-inverse-problems-and-tangential-cone-conditions`  
Assigned output: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-25.pages.json`

## Plan and design reconciliation

- The current `research/plan-spec.json` entries match the task and batch scaffold on page IDs, titles, A/B kinds, category, companion, order 3046/3047, and the three A-page `requires` values. Its `items` arrays are empty pre-authoring placeholders; the complete IP-25 design in `research/plan-inverse-problems-track.md` supplies the four named A items and two B leaves. No plan-spec metadata conflict was found.
- The design requires the local TCC with $0\le\eta<1$, the derivative/data-residual comparison, and local uniqueness with the stated minimum-norm and orthogonality conditions. It warns that TCC is a substantive hypothesis, not a consequence of differentiability. The new `def-ip-x0-minimum-norm-solution` is a local definition needed to state that condition precisely; it supplements the planned four A items without changing their claims.
- The design cites Clason, Chapter 9, Lemma 9.5 and Theorems 9.8–9.9. Theorem 9.9 in fact proves local minimum-norm uniqueness from the TCC, exact solution, and orthogonality without requiring a prior global minimum-norm hypothesis. The authored theorem retains the design's explicit minimum-norm hypothesis and proves the stronger strict local distance comparison in its conclusion; this is sound and records the plan's convention.
- Clason's TCC is a one-basepoint condition over a ball. Kaltenbacher–Schöpfer–Schuster use a two-point condition uniformly over a set, together with further assumptions for their iterative-convergence and existence results. The authored definition uses the one-basepoint convention from Clason; the second treatment is recorded as a related, stronger variant and is not silently substituted.

## Item inventory and dependency order

`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json` gives batch 25 dependency level 2, with prerequisite batches 1 and 2 and input SHA-256 `b64c07a4338c9dad575b383cf241aab615c3ca0b10ca5a67e3b3b0798094de78`. Item levels count only in-run item suppliers.

| Level | Item | Kind | Direct dependencies |
|---:|---|---|---|
| 1 | `def-ip-nonlinear-forward-map` | definition | `def-ip-forward-map-and-solution-classes`; `def-hilbert-space`; `def-frechet-derivative-between-banach-spaces` |
| 2 | `def-ip-x0-minimum-norm-solution` | definition | `def-ip-nonlinear-forward-map`; `def-hilbert-space` |
| 2 | `def-ip-tangential-cone-condition` | definition | `def-ip-nonlinear-forward-map`; `def-frechet-derivative-between-banach-spaces`; `cor-inner-product-induces-a-norm` |
| 3 | `lem-ip-tcc-residual-derivative-comparison` | lemma | `def-ip-tangential-cone-condition`; `cor-inner-product-induces-a-norm` |
| 4 | `thm-ip-tcc-local-minimum-norm-identifiability` | theorem | the two definitions above, the comparison lemma, the Fréchet-derivative definition, `def-kernel-and-image-of-a-linear-map`, `def-orthogonality-and-orthogonal-complement`, `lem-pythagorean-theorem-and-finite-orthogonal-sums`, and `cor-inner-product-induces-a-norm` |
| 3 | `cex-ip-smooth-map-fails-tcc` | counterexample | the nonlinear-map and TCC definitions; Fréchet derivative; the real-line/Euclidean Hilbert suppliers |
| 3 | `ex-ip-local-tcc-neighborhood` | example | the nonlinear-map and TCC definitions; Fréchet derivative; the real-line/Euclidean Hilbert suppliers |

The page-level prerequisite `linear-operators-pseudoinverses-and-picard-criteria` is retained exactly as assigned. Its current batch-2 manifest lists `def-ip-unbounded-hilbert-moore-penrose-inverse`, `def-ip-compact-linear-inverse-model`, `thm-ip-closed-range-pseudoinverse-stability`, and `thm-ip-picard-range-criterion-for-compact-operators`. The actual draft definition and compact-model bodies were inspected; the pseudoinverse definition carries Countable Choice for its orthogonal decomposition. None of those claims is a logical supplier to the IP-25 proofs: the theorem uses the kernel and orthogonality of the Fréchet derivative directly, without a pseudoinverse or an adjoint-range identity. The required page's native authoring evidence is not complete at this handoff, so the page-level edge remains an explicit owner reconciliation obligation; no item excerpt, proof completion, or acceptance is inferred from the current drafts.

## Supplier audit and conventions

- Batch 1's actual `def-ip-forward-map-and-solution-classes` Definition was read. It supplies the exact forward-map and solution-set convention used here. Its current Step-1 record says `ready`; that is a readiness record, not independent acceptance.
- The published Fréchet-derivative Definition was read. It fixes real Banach spaces and an open domain; accordingly this pair explicitly uses real Hilbert spaces and real Fréchet derivatives.
- The published Hilbert suppliers read for the proof are `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-orthogonality-and-orthogonal-complement`, `cor-inner-product-induces-a-norm`, and `lem-pythagorean-theorem-and-finite-orthogonal-sums`. The published `def-kernel-and-image-of-a-linear-map` was read for the notation $\ker T$. The theorem uses only the norm triangle inequality, kernel, orthogonality and Pythagoras; it does not use Riesz representation, an adjoint, or a closed-range theorem.
- The authored theorem proves that each distinct exact solution in the stated local ball has strictly larger distance to $x_0$. It does not assert local injectivity of $F$ or uniqueness of all exact solutions. The TCC hypothesis is not derived from differentiability.
- No axiom of choice is used. The proof fixes an arbitrary local solution and uses no selection, compactness, existence theorem, pseudoinverse, or range decomposition.
- Clason writes $N(F'(x^\dagger))$ for the derivative kernel; the authored statement uses the library's published $\ker(F'(x^\dagger))$ notation, defined by `def-kernel-and-image-of-a-linear-map`. These are the same zero set, so the source orthogonality condition is unchanged.

## Source work

1. Christian Clason, *Regularization of Inverse Problems*, full lecture notes, `https://arxiv.org/pdf/2001.00617v2`. Read the complete relevant reasoning in Chapter 9: Lemma 9.5 and its proof (PDF p. 85), the local TCC (9.6), Theorem 9.8 and its norm comparison proof, Theorem 9.9 and its local minimum-norm proof (PDF pp. 87–88), and the caveat immediately following Theorem 9.9. This is the primary full-lecture-note treatment.
2. Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, *Iterative methods for nonlinear ill-posed problems in Banach spaces: convergence and applications to parameter identification problems*, full preprint, `https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf`. Read §1 and §2.3, equation (9), Proposition 1, and the proof discussion (PDF pp. 4–7). It presents the two-point TCC and a Banach-space minimum-norm result; Proposition 1 refers back to earlier proofs, so it is context and an independent treatment, not a substitute for the complete local proof authored here.

Source dispositions and fetch evidence are in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-25.coverage.json`. `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-25.coverage.json --stamp` fetched and stamped both full texts on the first attempt: Clason's PDF is 1,145,516 bytes, 137 pages, SHA-256 prefix `696b4f580464ec0e`; the Stuttgart preprint is 227,334 bytes, 25 pages, SHA-256 prefix `315c0644f938176b`. A no-network fetch check passed 2/2. `coverage-checklist --require-destination` passed with zero errors and one low-yield warning (3/10 harvested results scaffolded); the remaining results have explicit inline/out-of-scope dispositions for reader confirmation.

## Item checkpoint — `def-ip-nonlinear-forward-map`

Authored on the A page at item level 1. It specializes the batch-1 metric-space forward-map/solution-set interface to open subsets of real Hilbert spaces and states the relevant Fréchet derivative convention. Direct dependencies are the actual batch-1 definition, the published Hilbert-space definition, and the published real Fréchet-derivative definition. Source locators: Clason, Chapter 9; Kaltenbacher–Schöpfer–Schuster, §1. The body statement is uninterrupted and all references follow it. Placement and manifest entry are recorded; scoped validation and readiness recording remain pending until the full pair and contracts are complete.

## Item checkpoint — `def-ip-x0-minimum-norm-solution`

Authored on the A page at item level 2. It defines the global minimizer condition over the exact solution set, centered at an arbitrary $x_0\in X$, and explicitly makes no existence or uniqueness claim. Its direct dependencies are the nonlinear forward-map definition and the real Hilbert-space definition. Source locators: Clason, Theorem 9.9 (local minimum-norm conclusion), and Kaltenbacher–Schöpfer–Schuster, Proposition 1 (the $x_0$-minimum-norm terminology). The statement has no inline links; all references follow it. Placement and manifest entry are recorded; scoped validation remains pending.

## Item checkpoint — `def-ip-tangential-cone-condition`

Authored on the A page at item level 2. It fixes the point-based local convention: $F$ is Fréchet differentiable at the base point, the closed ball lies in the open domain, $0\le\eta<1$, and the derivative remainder is bounded by the same-basepoint data difference for every increment in the ball. Direct dependencies are the real Hilbert forward-map and Fréchet-derivative definitions and the inner-product norm inequality. Source locators: Clason equation (9.6), Chapter 9; Kaltenbacher–Schöpfer–Schuster §2.3, equation (9), recorded only as the related two-point variant. The limitation that differentiability alone does not imply TCC is explicit and will be illustrated on the B page. Placement and manifest entry are recorded; scoped validation remains pending.

## Item checkpoint — `lem-ip-tcc-residual-derivative-comparison`

Authored on the A page at item level 3. Under the defined TCC with $0\le\eta<1$, the lemma derives both $(1-\eta)\|F(x+h)-F(x)\|\le\|F'(x)h\|$ and the matching upper bound $(1+\eta)\|F(x+h)-F(x)\|$. The proof writes the data residual as derivative plus remainder and uses the Hilbert norm triangle inequality in both directions; no differentiability beyond the stated derivative and no further theorem are used. Direct dependencies: the TCC definition and the published inner-product norm theorem. Source locators: Clason, Theorem 9.8; Stuttgart preprint §2.3 for the related cone framework. The proof has two labelled steps and an exact supplier excerpt contract is pending final contract assembly.

## Item checkpoint — `thm-ip-tcc-local-minimum-norm-identifiability`

Authored on the A page at item level 4. With the plan's $x_0$-minimum-norm premise, local TCC, and the source orthogonality condition $x^\dagger-x_0\in\ker(F'(x^\dagger))^\perp$, every distinct exact solution in the closed TCC ball has strictly greater $x_0$-distance. The proof first puts each solution difference in the derivative kernel using the residual comparison, then applies orthogonality and Pythagoras. It proves no injectivity claim and uses no adjoint-range or closed-range hypothesis. Direct dependencies are recorded in the manifest, including the local minimum-norm definition, kernel, orthogonality, and Pythagorean suppliers. Source locator: Clason, Theorem 9.9, PDF p. 88; the proof is complete in the item. The current batch-2 page-level prerequisite remains unresolved. Exact-excerpt contract and scoped validation remain pending.

## Item checkpoint — `cex-ip-smooth-map-fails-tcc`

Authored on the B page at item level 3. The false universal claim is that every smooth real-Hilbert forward map has local TCC at every point. The witness $F(t)=t^2$ at $0$ is smooth, has derivative zero, and makes the Taylor remainder equal the data difference $h^2$; any nonzero increment in any positive-radius ball would force $\eta\ge1$. The proof explicitly verifies the real-line Hilbert structure through the one-coordinate Euclidean inner product, Euclidean norm theorem, and completeness of $\mathbb R$. Direct dependencies are the A-page map/TCC definitions, the real Fréchet definition, and these published real-line suppliers. The example is AI-generated and has the required counterexample generation role. Placement is recorded; exact proof-contract and scoped validation remain pending.

## Item checkpoint — `ex-ip-local-tcc-neighborhood`

Authored on the B page at item level 3. For $F(t)=t+t^2$ at $x^\dagger=1$, the exact data are $y=2$; the derivative is $3h$, the remainder is $h^2$, and on $|h|\le1/4$ the ratio of remainder to data difference is at most $1/11<1/10$. The verification includes the $h=0$ boundary and the whole closed ball. Direct dependencies are the A-page map/TCC definitions, the real Fréchet definition, and the same published real-line Hilbert suppliers as the counterexample. The example is AI-generated and has the required example generation role. Placement is recorded; exact proof-contract and scoped validation remain pending.

## Final scoped checks and handoff

- `node tools/tsx-run.mjs tools/precheck.mts <four proof-bearing items>` passed 4/4. The precheck initially requested canonical phase numbering; the items now use phases `1.1` and `2.1`.
- `node tools/proof-layout.mjs <four proof-bearing items>` passed 4 items / 8 steps with 0 defects. The first layout pass found the B counterexample description section had no proof steps; the witness is now given without links and the proof argument is in the counterexample section.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-25.proof-contracts.json --strict` passed 4/4 with 0 errors and 0 warnings.
- `node tools/rendercheck.mjs <seven items and two pages>` passed 9/9 files. A direct statement-first check of the seven assigned item statements/descriptions found 0 inline links; both page bodies are empty.
- `node tools/content-policy.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-25.pages.json` passed 7 items with 0 errors and 0 warnings. The focused `depcheck` passed all 7 selected items and their prerequisite-cycle closure (345 items / 158 pages). It shows the actual published item closure also passes through `banach-space-differential-calculus-and-banach-manifolds` and `linear-maps-rank-nullity-and-quotient-spaces`; these are supplied by the direct Fréchet-derivative and kernel definitions. The task's batch-2 page requirement remains a separate open page edge.
- Scoped item-level recomputation over batches 1, 2, and 25 checked 17 items with 0 errors. Batch-25 levels recomputed as 1, 2, 2, 3, 4, 3, 3, matching the manifest. The whole-run CLI has no item selector and was not used as a substitute for this scoped closure check.
- `coverage-checklist --require-destination` passed with 0 errors and one low-yield warning (3/10 harvested results scaffolded); every remaining result has a specific inline or out-of-scope disposition. `source-fetch-check --stamp` passed 2/2 sources on the first attempt, and its no-network check passed 2/2.
- Manifest-to-carrier consistency check passed: all seven IDs, kinds, titles, dependency arrays, and levels match the item frontmatter; page placement matches both frontmatter-only pages.
- The run-wide `statement-first-check` could not reach this batch: it stopped at the unassigned batch-10 page `minimax-testing-and-detection-rates` because that manifest has an empty item inventory. No outside page or carrier was repaired.

The seven `step1-decisions.mjs record` rows are `escalated`, `owner:false`, and bind the exact direct item dependencies and current hashes. The reason is the unresolved required page-level supplier `linear-operators-pseudoinverses-and-picard-criteria` (batch 2); its draft carriers exist, but its batch coverage and proof-contract handoff is incomplete. All assigned mathematics, placement, sources, contracts, and scoped checks are complete. The batch-25 cross-batch input records the batch-1 page, batch-2 page, and batch-1 forward-map item edges as `open`; those are author declarations, not acceptance or owner review.

At the initial live status inspection, the native run was held at `1-scaffold` for owner repair/recertification with no workers in flight. No engine state, plan, verdict, published content, or other pair was edited. Owner reconciliation remains for the batch-2 page edge and the separate run-wide batch-10 empty inventory.
