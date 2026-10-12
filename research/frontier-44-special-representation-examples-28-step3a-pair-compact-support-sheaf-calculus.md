# Step 3a scope review — `compact-support-sheaf-calculus`

- Run `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-compact-support-sheaf-calculus-f521a358fabb595a`.
- Pair: A `compact-support-sheaf-calculus` (order 1798) / B
  `compact-support-sheaf-calculus-examples` (order 1804), batch 32, category
  `scheme-theory`. A has 10 scaffolded items, B has 1; 26 harvested source
  results (7 source entries over 4 distinct URLs).
- Decision: **sufficient** for the subject the current design fixes. Every
  design contract has a scaffolded definition, result or example; the six
  scaffold additions are necessary local prerequisites inside the owner's
  same-frontier direction and every one is used by a planned item or a
  consumer; all 131 declared dependency ids resolve (100 published, 31
  in-batch, 0 missing); the four sources re-fetch byte-identical to their
  stamps; the prior simplicial-`requires` escalation is resolved
  (`validate-plan` clean). Findings F1–F3 are record/strength observations, not
  scope blockers, under the design as written.
- No prior reviewer or owner scope receipt existed for this page (no
  `…-step3a-review-…` / `…-step3a-owner-…` file; `tools/step3-decisions.mjs
  check` reported "current scope review required"). No scaffold, item, page,
  coverage, plan or owner record was edited by this review.

## Evidence read

- **Design (controlling).** `research/plan-klr-foundation-prerequisites.md`
  L332–L381 ("Compact Support Sheaf Calculus", next section at L382): four A
  contracts at L340 `lem-sections-near-a-compact-set-are-sections-on-that-set`,
  L348 `lem-c-soft-field-sheaves-are-compact-support-acyclic`, L356
  `lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology`, L364
  `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`, and
  the B example at L374 `ex-compact-support-and-softness-on-a-finite-discrete-space`,
  with their author inputs under
  `research/frontier-44-special-representation-examples-28-klr-foundation-sixfunctor-drafts/items/`
  (read in full, including the declared inputs and the `a^!W` sentence).
- **Plan.** `research/plan-spec.json` for both pages: same orders, kinds,
  category, companion, `requires` (A: the 10 listed page prerequisites; B:
  `compact-support-sheaf-calculus` only) and the same 4 planned A items + 1 B
  item with the design's declared inputs. No design/plan conflict.
- **Manifest and coverage.** `research/frontier-44-special-representation-examples-28-batch-32.pages.json`
  (10 A + 1 B item, full statements and strategies read) and
  `…-batch-32.coverage.json` (26 harvested results, all dispositioned; three
  declines with reasons: Schapira 11.2.11–11.2.12 countable-at-infinity
  clauses, 11.2.13 general field tensor, Verdier §1.3 filtered colimits).
- **Owner decisions.** `…-owner-authoring-direction.md`, "Owner same-frontier
  prerequisite extension — 2026-10-09": this pair is one of the 21 appended
  prerequisite pairs; "Read actual supplier Statements, dependencies, full
  research proof bodies and source ledgers"; "Include the necessary
  intermediate lemmas with their actual homes and dependencies." The
  escalation resolutions are recorded in
  `…-native-initial-foundations-metadata-repair.json` and the item records.
- **Step-1 records and drift.** All 11 pair items have current `ready` step-1
  records (`…-step1-<item>.json`; the dimension item's record documents the
  owner's metadata-only repair adding the two published simplicial pages to
  `requires`). Drift review `…-alpha-step1-drift.md` L274–278:
  "VERDICT: no-drift (order 1798; declared closure complete; no change)".
- **Batch notes.** `…-batch-32.notes.md` (scaffold evidence: additions,
  source stamps, checks; the earlier two-error `validate-plan` escalation is
  resolved there and by the owner update).
- **Tools re-run 2026-10-10.** `coverage-checklist` → 2 pages, 26 harvested,
  0 errors, 0 warnings (with `--require-destination`).
  `source-fetch-check` → 7/7 fetch-verified, 0 drops.
  `manifest-deps.mjs …-batch-32.pages.json` → 11 items, 0 errors.
  `validate-plan.mjs research/plan-spec.json --run …` → exit 0: "no item-level
  cycles, forward references, B-page dependencies, or unresolved ids"; 0
  `undeclared-prereq` errors (only pre-existing `redundant-prereq` advisories).
  `step3-decisions.mjs check --phase scope` → this pair was an outstanding
  scope decision.

## Inventory against the design

| design contract | scaffolded item(s) |
|---|---|
| L340 sections near a compact set are sections on that set; finite gluing with prescribed germs | `lem-sections-near-a-compact-set-are-sections-on-that-set` (statement strengthened to pairwise disjoint compact families with sections $s_j$) |
| L348 c-softness: compact-support extension, injective $\Rightarrow$ c-soft, $\Gamma_c$-acyclicity, preservation, short exact sequences | `lem-c-soft-field-sheaves-are-compact-support-acyclic` clauses (1)–(5) (adds the tensor-with-constant-vector-space clause and the neighbourhood-lift clause) |
| L356 refinement-limit Čech comparison + all-sheaf polyhedral dimension bound + open-subspace compact-support bound | `lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology` (split out) and `lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology` (intrinsic order-bounded-cover theorem first, finite-polyhedron instance, closed-subcomplex fibre model) |
| L364 bounded fibrewise-soft resolutions; every bounded complex; $k_X$; triangulations imply the hypothesis | `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions` (all clauses present; the triangulation sentence kept as the geometric supply remark) |
| L374 finite discrete example: all sheaves c-soft, $R\Gamma_c=\bigoplus_xV_x$, $a^!W$ constant family | `ex-compact-support-and-softness-on-a-finite-discrete-space` (the $a^!$ sentence made precise as the right-adjoint property of $W\mapsto W_X$, since no $f^!$ definition precedes the six-operations page) |

Scaffold additions (all on A, all used): `def-support-of-a-sheaf-section`
(support/compact support; every $\Gamma_c$ statement and the consumers),
`def-c-soft-sheaf` (the definition the design states inside its second lemma),
`def-compactly-supported-global-sections` ($\Gamma_c$ and its right derived
functors via the published injective-resolution-datum pattern; consumer
interface), `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`
($\Gamma_c(X,j_!\mathcal A)\cong\Gamma_c(U,\mathcal A)$,
$\Gamma_c(X,i_*\mathcal B)\cong\Gamma_c(Z,\mathcal B)$, derived versions,
c-softness preservation), `lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft`
(Schapira 11.2.9 criterion used by the fibre lemma),
`lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology` (first
clause of the L356 contract, used by the dimension bound). Every addition
serves a design item or a declared consumer edge, so nothing in the pair is
unused padding and nothing in the design is dropped.

## Sources re-verified

Re-fetched 2026-10-10 with `curl -sSL`; byte count and sha256 prefix compared
with the coverage stamps (the tool's check mode also reports 7/7):

| source | recorded | re-fetch |
|---|---|---|
| Stacks, Cohomology of Sheaves | 1054846 B, `23fbd6af99fe8f0b` | match |
| Schapira, Categories and Sheaves (2023) | 1341322 B, `bfc99466bc5e670e` | match |
| Verdier, Bourbaki exposé 300 | 820080 B, `48571f9856f26ba3` | match |
| Stacks, Sheaves of Modules | 589991 B, `7effc55750a81b69` | match |

Spot-read in the fetched texts for scope (not proof audit):
Schapira §11.2 pp. 207–209 — Definition 11.2.1, Propositions 11.2.2
(c-soft $\Leftrightarrow$ compactly supported restriction onto compact and
locally closed subsets), 11.2.4 (filtered colimits/direct sums), 11.2.5
(locally closed restrictions, $f_!$, extension), 11.2.6, 11.2.7, 11.2.9 with
Corollary 11.2.10, 11.2.13, Example 11.2.14 (flabby $\Rightarrow$ c-soft);
Stacks tag 09V2 (Čech = sheaf cohomology on Hausdorff quasi-compact spaces,
for all $n$, via universal $\delta$-functors); Verdier §1.1–1.4 (left
exactness and the point/open/closed descriptions of $f_!$; the finite
cohomological-dimension criterion and finite resolutions by "$Y$-mou" = on
every fibre c-soft sheaves). The scaffold's claims match the scope of these
statements, with the qualifications in F1–F2.

## Role in the library and consumer closure

- The unified ledger (`…-cross-batch-dependencies.json`) carries 2 page edges
  and 22 item edges with this pair as supplier: page edges to
  `constructible-incidence-and-cochain-models` (batch 36) and
  `analytic-derived-six-operations-and-duality` (batch 40), item edges into
  batches 36, 40 and 41 (`thm-constructible-six-functors-proper-base-change-and-verdier-duality`).
  The consumed interfaces are exactly `def-support-of-a-sheaf-section`,
  `def-c-soft-sheaf`, `def-compactly-supported-global-sections`,
  `lem-c-soft-field-sheaves-are-compact-support-acyclic`,
  `lem-sections-near-a-compact-set-are-sections-on-that-set`,
  `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`; all
  are scaffolded with the clauses the consumer rows cite (checked against the
  consumer strategies of `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`,
  `lem-analytic-six-operation-support-and-trace-calculus`,
  `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`
  and `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`).
  The B example has no consumers (correctly: B pages carry no load-bearing
  suppliers).
- **Unmet prerequisites: none found.** Every declared dependency id of the 11
  items resolves — 100 to published `items/*.md` (including the load-bearing
  extension-by-zero family, injective/flasque/derived-functor and Čech
  machinery, `thm-lebesgue-number-lemma`, and the two simplicial pages' mesh,
  star and realization items), 31 inside this batch. The one interface gap
  recorded at scaffold time (no `f^!` definition before the six-operations
  page) is handled inside the pair: the example states the discrete
  adjunction without shriek notation and the consumers define $f_!$ and $f^!$
  themselves. The `requires` closure includes the two simplicial pages
  (published, orders 828/830 $<$ 1798), closing the earlier escalation.

## Findings reported to the owner (none scope-blocking)

- **F1 (source-versus-statement strength, `lem-c-soft-field-sheaves-are-compact-support-acyclic`
  clause (5)).** Schapira 11.2.6 (p. 207–208) gives $\Gamma_c$-exactness of
  $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ when only $\mathcal F'$
  is c-soft; the scaffold states exactness of that sequence only "whenever
  $\mathcal F$ is also c-soft", and its strategy proves exactly that weaker
  form (the middle term's c-softness is used at the final gluing step). The
  coverage disposition for 11.2.6 reads "included". Corollary 11.2.10
  ($\mathcal F'$, $\mathcal F''$ c-soft $\Rightarrow$ $\mathcal F$ c-soft) is
  likewise not stated as a clause. No declared consumer edge needs the
  stronger form (checked against the four consumer strategies above), so this
  is not a scope failure; recommend either strengthening clause (5) to the
  Schapira form (its proof is in the fetched source) or recording the
  middle-term hypothesis in the 11.2.6 disposition.
- **F2 (harvest-disposition wording).** The dispositions "inline" for
  Schapira 11.2.3/11.2.4 and "included" for 11.2.5 assert the full source
  statements, while the scaffold states the cases used: direct sums (not
  general filtered colimits), tensor with a constant $k$-vector space (not a
  general flat module; 11.2.13 is separately declined), and $j_!$ / $i_*$ for
  open/closed inclusions (not arbitrary continuous $f_!$ or general locally
  closed $Z$). Verdier §1.3 (filtered colimits) is declined with a reason.
  Recommend aligning the disposition text with the stated scope, or adding
  the filtered-colimit clause if a later consumer needs it; no current
  consumer edge declares it.
- **F3 (observation, B-page depth).** B holds exactly the design's single
  example. Because $X$ is finite (hence compact), $\Gamma_c=\Gamma$ there, so
  the example cannot exhibit the compact-support phenomenon it names
  ($\Gamma_c\neq\Gamma$), a non-c-soft sheaf, the $\mathcal F_{X\setminus K}$
  short exact sequence, or any dimension-bound boundary. The design planned
  this one example and the sibling appended pairs are similarly scoped, so
  scope is met as designed; recorded so the owner can decide whether to
  enrich later (e.g. an infinite discrete or direct-limit example where
  $\Gamma_c=\bigoplus$ differs from $\Gamma=\prod$).

## Boundary of this decision

This decision certifies **scope** only: that the planned definitions, results
and examples cover the intended subject, that the pair's declared
prerequisites exist, and that the consumer interfaces the ledger declares are
present in the scaffold. It does not certify any statement or proof (Steps 3b
and 5–9 own those), does not audit the scaffold's proof strategies, and does
not re-derive the sources' proofs. Residual uncertainty: the clause (5)
strength difference and disposition wordings in F1–F2 were read at statement
level in the fetched texts and the manifest strategies; I did not attempt the
stronger Schapira 11.2.6 proof myself, and the B enrichment in F3 is an
observation the owner may decline.

## Decision and receipt

```bash
node tools/step3-decisions.mjs record-scope \
  --run frontier-44-special-representation-examples-28 \
  --page compact-support-sheaf-calculus --decision sufficient \
  --reason "Design L332-381 (A contracts L340/348/356/364, B example L374) realized item-for-item by 10 A + 1 B scaffolded items, all 11 step1-ready; six additions are necessary local prerequisites used by planned items or the 22 item/2 page consumer edges of batches 36/40/41; all 131 declared dep ids resolve (100 published, 31 in-batch, 0 missing) and the simplicial-requires escalation is resolved (validate-plan exit 0, no undeclared-prereq); coverage 26 harvested/7 source entries over 4 URLs re-fetched byte-identical (Stacks Cohomology 1054846/23fbd6af99fe8f0b, Schapira 1341322/bfc99466bc5e670e, Verdier 820080/48571f9856f26ba3, Stacks Modules 589991/7effc55750a81b69) with Schapira 11.2, Stacks 09V2 and Verdier 1.1-1.4 spot-read; drift no-drift order 1798. Findings F1 Schapira 11.2.6 stated weaker in clause (5) (needs middle term c-soft; disposition says included), F2 11.2.3-11.2.5 dispositions broader than the stated cases (filtered colimits/general f_! omitted, direct sums and j_!/i_* stated), F3 B single compact example does not exercise Gamma_c != Gamma; none blocking nor needed by declared consumers. Report: research/frontier-44-special-representation-examples-28-step3a-pair-compact-support-sheaf-calculus.md"
```

Receipt to `research/frontier-44-special-representation-examples-28-step3a-review-compact-support-sheaf-calculus.json`
(reviewer role only; no owner record, no item approval, no scaffold edit).
