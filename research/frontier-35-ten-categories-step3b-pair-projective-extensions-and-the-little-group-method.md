# Step 3b — pair `projective-extensions-and-the-little-group-method`

Run `frontier-35-ten-categories`; role `alpha-high`; batch 9 (shared with the
sibling pair `monomial-characters-and-m-groups` / `…-examples`, whose rows in
every shared file were preserved untouched).
A page `projective-extensions-and-the-little-group-method` (order 510.039, 12
items), B page `projective-extensions-and-the-little-group-method-examples`
(order 510.04, 4 items). Scope decision `sufficient`
(`research/frontier-35-ten-categories-step3a-review-…json`, refreshed below);
owner direction file has no batch-9 instruction.

This file is the running checkpoint: per item the claim, conventions, source
locators, dependencies, decision, checks and open gaps, then the dispatch-level
results.

## What was produced

- 16 authored items in `items/` (12 A, 4 B), all `status: draft`,
  `origin: pipeline`; definitions carry `proof: not-applicable`, all others
  `ai-altered` proofs.
- 2 authored pages: `library/representation-theory/projective-extensions-and-the-little-group-method.md`
  (`items:` the 12 A ids in manifest order, `examples: []`) and
  `…-examples.md` (`items: []`, `examples:` the 4 B ids).
- `research/frontier-35-ten-categories-batch-9.proof-contracts.json` — 13
  proof-bearing items, 79 citations, 94 step entries, 104 boundary rows (plus
  one `finite_smoke` obligation; written merge-safely so sibling scope rows are
  never clobbered).
- Batch manifest rows for the two pages refreshed: item `title` and `deps`
  brought up to date with the authored items (statements and strategies left as
  the Step 1 plan text, which is the run's practice; page `requires` was
  untouched by the author and later reconciled by the owner below).
- 16 item receipts via `tools/step3-decisions.mjs record-item` (8 `accept`,
  8 `repaired`) and the pair's `sufficient` scope receipt refreshed.
- Cross-batch input `research/frontier-35-ten-categories-batch-9.cross-batch-dependencies.json`
  stays `[]` — no in-run pair is a supplier or consumer of this pair (all
  dependencies outside the pair are published items; the only consumer is the B
  page). `frontier-dependency-ledger.mjs refresh` run; batch 9 is in
  `reviewed_batches` with zero edges.

## Scaffold audit and repairs

1. **Missing proof-section headings (7 items).** `lem-invariant-irrep-produces-a-projective-inertia-extension`,
   `lem-cocycle-central-extension-is-a-group`, `thm-little-group-method-for-a-split-abelian-normal-subgroup`,
   `ex-q8-as-a-central-extension-of-c2-times-c2`, `cex-invariant-character-need-not-extend-linearly`,
   `ex-little-groups-for-a-finite-dihedral-group`, `ex-coboundary-rephasing-of-a-projective-representation`
   carried numbered steps with no `## Proof` (A items) or `## Verification`
   (B items) heading. `numberedProofSteps` reads those named sections, so the
   strict proof-contract parser saw an empty proof and no citation could have
   been contracted; added the missing heading in each file (both headings are
   the published convention). All 13 proof items now parse their steps.
2. **Declared facts that no step used (2 items).** `thm-little-group-method…`
   declared the splitting-field fact [F2] and `thm-projective-clifford-correspondence`
   declared the twisted-group-algebra fact [F4] with no step citing them (the
   contract gate requires every declared fact to be used). Both were made
   genuine inputs — [F2] now carries the C-is-a-splitting-field hypothesis of
   [F3] in step 6.1 of the little-group theorem, and [F4] supplies the module
   reading of the (step 5.1) irreducibility conclusion of the projective
   correspondence. No claim was weakened or dropped.
3. **Scope-receipt refresh.** The manifest repair (2 above, titles/deps)
   changed the pair's `scopeHash`, invalidating the Step 3a receipt. Per the
   dispatch, a fresh `sufficient` scope receipt was recorded with the reason
   spelled out (design inventory, statements, coverage rows, sources and the
   three published `requires` pages unchanged); the original 2026-09-24 review
   remains recorded in `research/frontier-35-ten-categories-step3a-pair-projective-extensions-and-the-little-group-method.md`.
4. Nothing published was edited. No item, page id or promised claim was added,
   dropped or renamed; no AC/DC assumption is used anywhere (all groups, cosets,
   transversals, bases and choices are finite, and the only selections are of a
   finite transversal/intertwiner family and a witnessing cochain).

## Item log

Conventions: `P(q)P(r)=α(q,r)P(qr)`, `P(1)=id`, normalized `α`; multiplicative
cocycle `α(q,r)α(qr,s)=α(r,s)α(q,rs)`; coboundary `c(q)c(r)c(qr)^{-1}α`;
`H²(Q,ℂ×)` in the published factor-set model; conjugation `ᵍθ(n)=θ(g⁻¹ng)`;
`I_G(θ)` as published.

| # | item | claim / exact work | sources | deps (as authored) | decision |
|---|---|---|---|---|---|
| 1 | `def-projective-representation-and-factor-set` | definition: normalized projective representation, factor set (proved determined by `P`), similarity, irreducibility; `V≠0` required and explained | Späth Def. 1.4/Rmk 1.5 pp. 2–3; tom Dieck §4.2 | — | accept |
| 2 | `lem-factor-set-is-a-normalized-two-cocycle` | `α(1,q)=α(q,1)=1` by cancelling invertible `P(r)`; cocycle identity by comparing both bracketings of `P(q)P(r)P(s)`; multiplicative reading of the published additive convention | Späth p. 3; Loh | def-projective…, def-normalized-two-cocycle… | accept |
| 3 | `lem-rephasing-changes-the-factor-set-by-a-coboundary` | `P_c=cP` has `α_c=c(q)c(r)c(qr)⁻¹α`, same class in `H²`; converse realization | Späth Rmk 1.5(a); Loh | def-projective…, lem-factor-set…, def-normalized-two-cocycle…, def-second-cohomology-by-factor-sets | accept |
| 4 | `def-twisted-group-algebra-for-a-factor-set` | `ℂ^α[Q]` on basis `u_q`, `u_q u_r=α(q,r)u_{qr}`; `u_1` unit, `u_q` inverse `α(q,q⁻¹)⁻¹u_{q⁻¹}` | Späth Rmk 1.5(b); tom Dieck §4.2 | lem-factor-set… | accept |
| 5 | `lem-projective-representations-are-twisted-group-algebra-modules` | `A` unital associative; nonzero f.d. `A`-modules ↔ projective reps with factor set `α` (both directions, mutually inverse); averaging a projection over the finite group gives complements, hence finite length ⇒ semisimple; zero module the zero object | Späth Rmk 1.5(b); Webb | def-twisted…, def-projective…, lem-factor-set…, def-algebra…, def-left-and-right-modules, def-composition-series…, def-semisimple-module, def-semisimple-ring, thm-finite-length-semisimple-module-characterizations | accept |
| 6 | `lem-invariant-irrep-produces-a-projective-inertia-extension` | transversal intertwiners `T_t` (character-determination theorem), `P(i)=ρ(n_i)T_{t_i}`; `P(xi)=ρ(x)P(i)`, `P(ix)=P(i)ρ(x)`, `P(i)ρ(m)P(i)⁻¹=ρ(imi⁻¹)`; `A(i,j)=P(i)P(j)P(ij)⁻¹` is an `N`-endomorphism ⇒ scalar (Schur); coset-independence, cocycle identity, and uniqueness up to a cochain `c` with `α'=c(q)c(r)c(qr)⁻¹α` | Späth Def. 1.4, Lem. 1.8(a)–(d) pp. 2–4; tom Dieck §4.2 | def-projective…, lem-factor-set…, def-conjugate-representation-and-inertia-group, def-conjugate-representation-and-conjugate-character, cor-endomorphisms…, thm-complex-representations-are-determined-by-their-characters, def-normalized-two-cocycle… | repaired (heading) |
| 7 | `def-clifford-obstruction-class` | class `[α]∈H²(I/N,ℂ×)` of any associated family; independent of operators (rephasing) and of equivalent `ρ`; `I=N` automatic | Späth §1.B/Lem. 1.8(d); tom Dieck §4.2 | lem-invariant-irrep…, lem-rephasing…, def-second-cohomology-by-factor-sets, def-conjugate-representation-and-inertia-group | accept |
| 8 | `thm-extension-exists-iff-the-clifford-obstruction-vanishes` | extension ⇒ constant factor set ⇒ zero class; zero class ⇒ `α=δc` ⇒ rephasing by `c(iN)⁻¹` is multiplicative, i.e. an extension; `I=N` both conditions automatic | Späth Lem. 1.8(d) and Rmk 1.9 discussion pp. 3–4; tom Dieck (4.2.5)–(4.2.6) p. 57 | def-clifford-obstruction-class, lem-rephasing…, lem-invariant-irrep…, def-extension-of-an-irreducible-normal-subgroup-representation, def-normalized-two-cocycle…, def-second-cohomology-by-factor-sets | accept |
| 9 | `lem-cocycle-central-extension-is-a-group` | `E_α=Q×ℂ×`, `(q,z)(r,w)=(qr,α(q,r)zw)` is a group: associativity from the cocycle identity, identity `(1,1)`, inverse using `α(q,q⁻¹)=α(q⁻¹,q)`; kernel `{1}×ℂ×` central with quotient `≅Q`; infinite when `Q≠∅` | Späth Prop. 1.11 p. 4; tom Dieck §4.2 | lem-factor-set…, def-normalized-two-cocycle…, def-group, def-kernel-and-image-of-group-homomorphism, thm-first-isomorphism-theorem-groups, def-center-of-a-group | repaired (heading) |
| 10 | `lem-central-extension-linearizes-a-projective-representation` | `D(q,z)=zP(q)` ↔ `P(q)=D(q,1)` mutually inverse, intertwiners preserved; the central character `z↦z` is exactly consistency | Späth Thm. 1.12(b) pp. 4–5; tom Dieck §4.2 | lem-cocycle-central-extension…, def-projective…, def-finite-dimensional-representation-of-a-group-over-a-field | accept |
| 11 | `thm-projective-clifford-correspondence` | `U↦M=Hom_N(S,U)`, `M(iN)f=U(i)f P(i)⁻¹` has factor set `α⁻¹` and is irreducible exactly when `U` is (subspace bijection); `E_U:S⊗M→U` is an `I`-isomorphism; inverse `M↦S⊗M` with `i·(s⊗m)=P(i)s⊗M(iN)m`; composed with Clifford induction gives all of `Irr(G\|θ)`; `I=N` and trivializable `α` (Gallagher) disposed of | Späth Thm. 1.12/Cor. 1.13 pp. 4–5; tom Dieck (4.2.4)–(4.2.7) pp. 56–57 | lem-invariant-irrep…, lem-projective-representations…, lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces, thm-clifford-correspondence, lem-inducing-an-irreducible-inertia-module-is-irreducible, lem-induction-from-the-inertia-group-recovers-the-module, thm-gallagher-correspondence…, def-projective…, def-extension-of-an-irreducible-normal-subgroup-representation, thm-extension-exists…, def-conjugate-representation-and-inertia-group, thm-clifford-homogeneous-restriction-formula | repaired (heading + [F4] use) |
| 12 | `thm-little-group-method-for-a-split-abelian-normal-subgroup` | unique `ah`, `I_θ=A⋊H_θ`, `[G:I_θ]=[H:H_θ]`; `θ̃(ah)=θ(a)` is a genuine linear character; Gallagher + Clifford give `σ↦Ind(θ̃⊗Infl σ)` bijectively onto `Irr(G\|θ)`; degrees `[H:H_θ]dim σ`; obstruction vanishes; `H_θ=H`, `H_θ=1`, `A=1` disposed of | tom Dieck (4.2.4)/(4.2.6)/(4.2.7) pp. 56–57; Späth Thm. 1.3 (Gallagher), Thm. 1.2 (Clifford) pp. 2–3 | thm-projective-clifford…, thm-extension-exists…, thm-clifford-correspondence, thm-gallagher…, thm-irreducible-representations-of-a-finite-abelian-group…, def-internal-semidirect-product, def-conjugate-representation-and-inertia-group, cor-cyclotomic-field-splits-a-finite-group, thm-the-complex-numbers-are-algebraically-closed, prop-representations-with-kernel…, thm-characters-of-direct-sums-tensor-products-and-duals, cor-dimension-of-an-induced… | repaired (heading + [F2] use) |
| 13 | `ex-q8-as-a-central-extension-of-c2-times-c2` | `I=diag(i,−i)`, `J=[[0,1],[−1,0]]`, `I²=J²=−1`, `IJ=K=−JI`; `P(x^a y^b)=I^aJ^b` has `α(y,x)=−1≠1=α(x,y)`, not a coboundary (coboundaries are symmetric on abelian `Q`); `Q×{±1}≅Q_8` via the explicit lift | Späth Prop. 1.11/Thm. 1.12 pp. 4–5; tom Dieck §4.2 | lem-cocycle-central-extension…, lem-central-extension-linearizes…, def-quaternion-group-of-order-eight, lem-factor-set…, def-projective… | repaired (heading) |
| 14 | `cex-invariant-character-need-not-extend-linearly` | `Z(Q_8)={±1}`; `θ(−1)=−1` is invariant (central) but `−1=iji⁻¹j⁻¹` is a commutator so every linear character is 1 there: no extension, and the obstruction class is nonzero | Späth §1.B pp. 3–5; tom Dieck (4.2.6)/(4.2.7) p. 57 | ex-q8…, thm-extension-exists…, def-quaternion…, def-extension-of-an-irreducible-normal-subgroup-representation, def-conjugate-representation-and-inertia-group | repaired (heading) |
| 15 | `ex-little-groups-for-a-finite-dihedral-group` | `θ_k(r^j)=ζ^{jk}`; `s` sends `θ_k↦θ_{−k}`; `f=gcd(2,n)` fixed indices ⇒ `2f` linear characters; `(n−f)/2` degree-two induced characters; sum of squares `2f·1²+((n−f)/2)·2²=2n`; `n=1,2` degenerate cases | tom Dieck (4.2.7) p. 57; Späth Thm. 1.2 p. 3 | thm-little-group-method…, cor-dihedral-groups-as-semidirect-products, thm-irreducible-representations-of-a-finite-abelian-group…, thm-complex-nth-roots-and-roots-of-unity, cor-cyclotomic-field-splits-a-finite-group, def-conjugate-representation-and-inertia-group | repaired (heading) |
| 16 | `ex-coboundary-rephasing-of-a-projective-representation` | `C₂={1,t}`, trivial family rephased by `c(1)=1, c(t)=i`: `α_c(t,t)=−1=δc(t,t)`, rephasing by `c⁻¹` returns `P`; both factor sets represent the zero class while `α_c≠α` | Späth Rmk 1.5(a) p. 3; tom Dieck §4.2 | lem-rephasing…, def-clifford-obstruction-class, def-projective… | repaired (heading) |

All 16 receipts are current under `step3-decisions check --phase final`
(0 open rows for this pair).

## Proof contracts

13 proof-bearing items (the three definitions excluded). Contract gates run on
the batch contract path after the merge-safe write (sibling scope rows, if any,
preserved):

| check | actual result |
|---|---|
| `proof-contract … --strict` | 0 errors, 0 warnings, 13/13 items |
| `boundary-audit … --fail-on-contradicted --fail-on-template` | 104 rows, 34 `not_applicable`, 0 contradicted, 0 template clusters |
| `citation-fidelity … --fail-on-missing-quote` | 79 citations over 13 items; every quote found, no widening candidates |
| `finite-smoke` | 1 check (`cyclic-subgroup-lagrange` through n = 48 on `ex-little-groups…`), PASS |
| `risk-report` | 0 errors; 13 items routed (11 CRITICAL / 1 HIGH / 1 MODERATE) — a Step-5a routing signal, not a verdict |
| `gate-liveness` | all four gates live (exit 0) |

## Checks actually run (dispatch level)

| check | actual result |
|---|---|
| `precheck.mts` on the 16 items | 13 checked (proof-bearing), 0 failing — clean |
| `rendercheck.mjs` on the 16 items + 2 pages | OK: no multiline display block, all math parses |
| `coverage-checklist.mjs … --require-destination` | 2 pages, 83 harvested results, 0 errors, 0 warnings |
| `manifest-deps.mjs` (batch 9) | 30 items, 0 missing, 0 errors |
| `content-policy.mjs` (batch 9) | 14 `scope-item-missing` errors, **all** for the sibling pair's not-yet-written items; 0 for this pair |
| `validate-plan.mjs research/plan-spec.json` | exit 0 — page order acyclic/consistent, no item-level cycles; my page carries no item list yet (pre-splice) |
| `splice-plan.mjs --verify` | 52 pages of pre-splice drift run-wide, including my two pages (manifest items vs plan `0`); expected before Step 4 |
| `depcheck.mjs` / `fwdcheck.mjs` on the 16 items | repo-wide FAIL on unrelated pre-existing debt (published `justification-backward` rows, the Brauer-chain `page-cycle`); no finding names any of my items |
| `frontier-dependency-ledger.mjs refresh` | batch 9 reviewed, 0 edges |
| `step3-decisions.mjs check --phase final` | my pair closed (0 work rows); run open on other groups' items |

Re-verified by a post-handoff sweep after the last write to this pair (no file
of this pair has changed since the receipts were recorded): `precheck.mts`
13 checked / 0 failing; `rendercheck.mjs` 18 files OK; `proof-contract.mjs
--strict` 0/0 with 13/13; `citation-fidelity.mjs --fail-on-missing-quote` 79
citations, no missing quote; `boundary-audit.mjs --fail-on-contradicted
--fail-on-template` 104 rows, 34 `not_applicable`, none contradicted, no
template cluster; `finite-smoke.mjs` 1 check PASS; `coverage-checklist.mjs
--require-destination` 2 pages / 83 harvested results / 0 errors (the
`--manifests` form appears in that tool's usage comment but is not implemented
— the manifest is auto-paired by file stem, which is the form used here);
`manifest-deps.mjs` 30 items / 0 errors; `content-policy.mjs` 14 errors, all
the sibling lane's unwritten items; `validate-plan.mjs` exit 0;
`gate-liveness.mjs --run frontier-35-ten-categories --contracts …batch-9.proof-contracts.json
--checklists …batch-9.coverage.json` 4/4 gates live, exit 0;
`depcheck.mjs` / `fwdcheck.mjs` FAIL repo-wide on pre-existing debt with no
finding naming any item of this pair; `step3-decisions.mjs check --run
frontier-35-ten-categories --phase final` returns 0 work rows for this pair; the
unified `research/frontier-35-ten-categories-cross-batch-dependencies.json` has
batch 9 in `reviewed_batches` with 0 edges and no orphaned review.

## Local suppliers added

None. Every prerequisite of every item is either a published library item or an
earlier item of this pair; no new pair, definition or lemma was needed, and no
published content was edited.

## Scope-decline decisions (Step 3b refresh)

The pair's coverage rows carry exactly two `out-of-scope` declines, both from
the Späth source; the B page carries none. Both were re-checked, decided
`stands`, and recorded with evidence in the group register
`research/frontier-35-ten-categories-alpha-b-scope-decisions.json` (group `b`
covers batches 9, 10 and 11; the tool `scope-decisions.mjs refresh` preserves
such decisions exactly, and a refresh after the write kept both):

| decline (row id) | source result | evidence gist |
|---|---|---|
| `e275112d…` | Späth Thm. 1.10 finite-valued factor set | Re-read Remark 1.9 and Thm. 1.10 with its proof (printed pp. 4–5): it forces a finite value group `Z_α` and a finite cocycle central extension. This pair deliberately uses the full `ℂ^×`: `lem-cocycle-central-extension-is-a-group` builds `E_α=Q×ℂ^×` and says “need not be finite”, `lem-central-extension-linearizes-a-projective-representation` uses the central character `z↦z` on all of `ℂ^×`, and `lem-projective-representations-are-twisted-group-algebra-modules` gets semisimplicity by averaging over the finite `Q`, never by identifying `Z_α`. No authored item mentions finite image/order of `α`. |
| `6e25d730…` | Späth §2 character-triple comparison | §2 compares two triples `(G,N,ϑ)`, `(H,M,ϑ′)` through the order relations 2.1/2.7 and comparison/Butterfly theorems for the later global-local reductions. This pair is single-triple theory (`def-clifford-obstruction-class` fixes `[α]` for one triple; the correspondence items work over one `N⊴G`). No item declares a second triple, a dominance order or the Butterfly theorem. |

The other 26 declines in the group register belong to the sibling pairs of
batches 10–11 and remain `pending` for their own owners (this dispatch decides
only its pair's rows). Consequently `scope-decisions.mjs check --run …` is
still red run-wide on those rows — none of the reported errors names this pair.

## Published concerns (for the canonical ledger — reported, not edited)

1. `lem-monomiality-lifts-along-a-quotient` (published, RG-6 chain): step 2.1
   says “Compatibility of induction with quotient inflation gives
   χ=Ind_H^G λ” with no supplier for that compatibility in `deps` (its deps are
   `def-supersolvable-groups-and-monomial-characters`,
   `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`,
   `thm-transitivity-of-induction-for-finite-groups`, `def-quotient-group`).
   Confidence: confirmed textual gap; the statement may be true. Repair
   strategy: cite a proved induction/inflation compatibility lemma (the sibling
   lane's `lem-induction-commutes-with-inflation`, not yet published) or insert
   the covariant-function computation.
2. `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`
   (published): step 1.1 asserts “By maximality there is `g∈G` not commuting
   with some `a∈G_i`”. The central/cyclic case is not argued: if `G_i` were
   central and `G_{i+1}/G_i` cyclic of prime order then `G_{i+1}` would be
   abelian, contradicting maximality. Confidence: confirmed omission of a
   needed step; repair by inserting that argument (tom Dieck Lemma 4.3.3
   instead passes to `G/Z(G)`).
3. `def-supersolvable-groups-and-monomial-characters` (published): reads
   “normal series `1=G_0⊲G_1⊲⋯⊲G_r=G`”. The intended convention requires each
   term normal in the whole group; adjacent subnormality alone would admit
   solvable non-supersolvable groups and break the quoted theorem. Confidence:
   convention-precision concern (suspicion, not a proven false statement);
   repair by stating “normal in `G`” explicitly. This pair does not consume the
   definition.

These three belong to the sibling RG-6 proof chain; they are not dependencies
of any item of this pair, which was constructed with its own sound suppliers.

## Step 4 / owner obligations

- **`undeclared-prereq` (owner reconciliation complete).** Eight
  dependency edges of the A page's items land on the published page
  `second-cohomology-and-abelian-kernel-extensions` (order 365.073), which is
  not in the author-time transitive closure of this page's `requires`
  (`clifford-theory-over-normal-subgroups`,
  `group-extensions-complements-and-schur-zassenhaus`,
  `normal-subgroups-and-quotient-groups`; closure size 298). The edges are:
  `def-normalized-two-cocycle-and-two-coboundary` ←
  `lem-factor-set-is-a-normalized-two-cocycle`, `lem-rephasing-changes-the-factor-set-by-a-coboundary`,
  `lem-invariant-irrep-produces-a-projective-inertia-extension`,
  `lem-cocycle-central-extension-is-a-group`,
  `thm-extension-exists-iff-the-clifford-obstruction-vanishes`;
  `def-second-cohomology-by-factor-sets` ←
  `lem-rephasing-changes-the-factor-set-by-a-coboundary`,
  `def-clifford-obstruction-class`,
  `thm-extension-exists-iff-the-clifford-obstruction-vanishes`. All eight are
  genuine proof uses (the normalized two-cocycle convention and the factor-set
  model of `H²`), the supplier is published and strictly earlier, and dropping
  them would drop load-bearing hypotheses. The owner added
  `second-cohomology-and-abelian-kernel-extensions` to the A page's `requires`
  in the plan and batch-9 manifest after the sibling author stopped. An
  independent mathematical audit checked all eight uses and found the edge
  sufficient. All 16 previous author receipt hashes match the present proof
  inputs when only this new page edge is omitted; the owner recertified the
  current item inputs without changing proof text or item dependencies.
  Plan validation and batch-9 manifest-dependency checks pass.
- Pre-splice plan mismatch: my two pages are among the 52 pages whose manifest
  items are not yet in `plan-spec.json`; Step 4 must splice batch 9's rows
  (including the sibling pair's, when its items exist).
- Scope-decline register: the 26 still-pending rows of
  `research/frontier-35-ten-categories-alpha-b-scope-decisions.json` belong to
  the sibling pairs of batches 10–11; each of their owners must decide them (or
  the Step-8 lead must) before `scope-decisions.mjs check` can pass. This
  pair's two rows are decided `stands` with evidence and survive `refresh`.
- The pair's item decisions and the refreshed `sufficient` scope receipt bind
  the current manifest rows; any later edit to these items, their deps or the
  manifest rows invalidates the affected receipts and requires re-recording.
- Repo-wide `depcheck`/`fwdcheck` debt and the Brauer-chain page cycle are
  outside this dispatch and were not touched.
- Axiom of Choice: **not used** anywhere in these 16 items. All selections
  (transversal, intertwiners, projection, witnessing cochain) are finite; no
  choice principle is declared and none is needed.

## Next action on resume

Read this file, then `items/thm-projective-clifford-correspondence.md` and
`items/thm-little-group-method-for-a-split-abelian-normal-subgroup.md` (the two
largest proofs), the batch contract file, and the batch-9 manifest rows; the
  open work is Step 4 splicing, not any
  unfinished item work in this pair.
