# Step 3b report — pair `group-schemes-of-finite-type-over-a-field`

Run `frontier-38-owner-30`; stage `3b-author`; role alpha-high; label
`step3b-pair-group-schemes-of-finite-type-over-a-field-1ba3529f4e3379e4`.
A page `group-schemes-of-finite-type-over-a-field` (A871, scheme-theory),
B page `group-schemes-of-finite-type-over-a-field-examples` (B872). Batch 22
manifest `research/frontier-38-owner-30-batch-22.pages.json` (shared batch file
holds only this pair). Report opened at entry; entries are added in dependency order.

## Owned IDs and entry checkpoint (entry state)

Order (dependency_level, page order, item ID):

| # | item | page | kind | level | scaffold state at entry |
|---|---|---|---|---|---|
| 1 | `def-group-scheme-over-a-field` | A | definition | 0 | written, sources recorded |
| 2 | `def-morphism-and-closed-subgroup-scheme` | A | definition | 1 | written, sources recorded |
| 3 | `lem-closed-subgroup-scheme-valued-point-criterion` | A | lemma | 2 | written, proof present |
| 4 | `ex-additive-multiplicative-and-general-linear-group-schemes` | B | example | 2 | written, verification present |
| 5 | `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme` | B | counterexample | 3 | written, counterexample present |

Both owned library pages (`library/scheme-theory/group-schemes-of-finite-type-over-a-field.md`
and `...-examples.md`) **do not exist at entry** and must be authored. Open
obligations at entry:

1. author both library pages and keep them under the 100-item ceiling;
2. audit each item against its exact suppliers (all suppliers are published),
   repair any local gap, and re-verify the recorded dependency levels;
3. record Step 3b item decisions for all five original scaffold IDs after the
   checks pass; no escalation is expected unless a supplier gap appears;
4. re-run explicit-path precheck, rendercheck, proof-layout, content-policy,
   coverage, dependency-level and plan checks before handoff;
5. carry the Step 3a non-blocking flags (B-page `requires` drift; Snowden
   locator superseded by Milne 2.5) as Step-4 plan/prose amendments, not as
   blockers.

Entry checks (before edits): `item-dependency-levels.mjs check --run
frontier-38-owner-30` exit 0, 815 items, levels 0/1/2/2/3 for the owned IDs
(no owned row flagged); `precheck.mts --json` on the five item paths: 2
not-applicable (definitions) + 3 pass; `rendercheck.mjs --json`: 5 checked, 0
errors; `step3-decisions.mjs check --phase scope`: closed, so item decisions
are admissible.

## Item checkpoints

Audited in dependency order. Suppliers were read before writing: for item 1,
`def-scheme-over-base`, `def-locally-finite-type-and-finite-type-morphism`,
`thm-fibre-products-of-schemes-exist`; for item 2,
`def-closed-immersion-schemes`; for item 3,
`thm-affine-closed-immersions-quotient-rings`,
`thm-fibre-products-of-schemes-exist`; for items 4–5,
`thm-affine-scheme-ring-anti-equivalence`,
`thm-affine-fibre-product-tensor-ring`, `thm-ring-matrix-arithmetic-laws`,
`thm-determinant-multiplicative`, `cor-inverse-matrix-by-adjugate`. All are
published, git-tracked items; no supplier is unfinished, so no consumer
decision needed escalation. Sources were re-read against the fetched full
texts (Milne iAG2022, SHA-256 `f2ddd8fa…d21f40`, PDF pp. 17–19/50–52/55 =
Definitions 1.1–1.5 and items 2.1–2.5, 2.8, 2.14; Stacks *Groupoid Schemes*,
SHA-256 `4506a392…e7a30f`, printed pp. 4–6 = 022S/047D/0G8L and 5.1–5.4).

1. `def-group-scheme-over-a-field` — **accept, unchanged.** Definition audit
   only (no proof). Asserts exactly the design-row content: finite-type
   $k$-scheme with $m,e,i$ satisfying the three identity groups, functorial law
   on $G(T)$ for all $k$-schemes $T$ and hence on $G(R)$ for all unital
   $k$-algebras $R$, nilpotents included; no reducedness or smoothness. The
   inverse identity $m\circ(i,\operatorname{id})=e\circ p=m\circ(\operatorname{id},i)$
   is type-correct. Links to the three suppliers are all declared in `deps`.
   Dependency level 0 verified.
2. `def-morphism-and-closed-subgroup-scheme` — **repaired.** Defect found in
   the displayed preservation identities: the inverse clause read
   `f\circ i_G=i_H`, whose two sides have different sources and targets
   ($G\to H$ versus $H\to H$). Repaired to the well-typed
   $i_H\circ f=f\circ i_G$; this is the only content change in the pair's
   authored text. The closed-subgroup definition, the monomorphism remark
   (closed immersion has unique factorizations) and the nilpotent-points
   caveat match Stacks 047D and Milne 1.2–1.3. Level 1 verified.
3. `lem-closed-subgroup-scheme-valued-point-criterion` — **accept, unchanged.**
   Step 1.1 gives both directions of the identity clause, including the
   $R=k$ test forcing $e_G$ to factor through $H$ (so the empty subscheme is
   excluded on both sides); step 2.1 factors $m_G\circ(j\times j)$ and
   $i_G\circ j$ through $H$ over affine charts of $H\times_kH$ and $H$ using
   the all-algebra hypothesis, gluing by uniqueness through the monomorphism;
   step 3.1 transfers the group identities through $j$ and proves $H$ is
   finite type via the quotient charts $\operatorname{Spec}(A_i/I_i)$. Checks:
   no reducedness or smoothness used; proof is choice-free (no AC declared);
   the criterion is an iff and both directions are proved. Milne 1.5 and
   Stacks 4.4 (0G8L) state the same criterion, Stacks for general base and
   Milne for all $k$-algebras; the local proof is self-contained. Level 2.
4. `ex-additive-multiplicative-and-general-linear-group-schemes` — **accept,
   unchanged.** Comorphisms for $\mathbf G_a$ ($x\mapsto x\otimes1+1\otimes x$,
   $0$, $-x$) and $\mathbf G_m$ ($t\mapsto t\otimes t$, $1$, $t^{-1}$, every
   image a unit) are checked as algebra maps and evaluated on all $R$; for
   $\mathrm{GL}_n$ the comultiplication
   $x_{ij}\mapsto\sum_l x_{il}\otimes x_{lj}$ has determinant
   $(d\otimes1)(1\otimes d)$, the counit has determinant one, and the
   $d^{-1}\operatorname{adj}(X)$ antipode has determinant the unit $d^{-1}$
   (adjugate identity plus determinant multiplicativity). Finiteness is
   checked on the three coordinate algebras. Matches Milne 2.1/2.2/2.8 and
   Stacks 5.1/5.3/5.4; the adjugate and determinant suppliers are published.
   Level 2.
5. `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme` — **accept,
   unchanged.** Step 1.1: $\alpha_p(R)$ and $\mu_p(R)$ are subgroups by
   Frobenius additivity, the coordinate algebras have dimension $p$, the
   substitution $t=1+x$ identifies the underlying rings because
   $(1+x)^p-1=x^p$, and over the field $k$ both rational-point groups are
   singletons while the nonzero nilpotent classes survive. Step 2.1: the
   coefficient recurrence $rc_r=c_{r-1}c_1$ gives $c_r=c_1^r/r!$, and the
   $x^{p-1}y$ coefficient, zero on the left and $c_1^p/(p-1)!$ on the right,
   forces $g=1$ for every homomorphism $\alpha_p\to\mathbf G_m$, including
   $p=2$. Step 3.1 excludes every group-scheme isomorphism
   $\alpha_p\cong\mu_p$ by composing with the closed inclusion
   $\mu_p\hookrightarrow\mathbf G_m$, contradicting step 2.1. Every
   inference is over a field of characteristic $p>0$ and algebraically closed
   exactly where the statement says so. The asserted scheme isomorphism and
   the non-isomorphism of the algebraic groups is Milne 2.5 (verified
   verbatim in the fetched text); the local coefficient argument supplies the
   full non-isomorphism proof. Level 3.

## Pages and contracts authored

- `library/scheme-theory/group-schemes-of-finite-type-over-a-field.md` (draft,
  3 items, `requires` exactly the three manifest prerequisite pages).
- `library/scheme-theory/group-schemes-of-finite-type-over-a-field-examples.md`
  (draft, 2 examples, `requires` the A page as in the batch-22 manifest).
- `research/frontier-38-owner-30-batch-22.proof-contracts.json`: contracts for
  the three proof-bearing items (13 citations with exact source quotes and
  step uses, 9 derivations with stated inputs, 24 boundary dispositions:
  empty/zero/one/degenerate/iff-forward/iff-reverse checked where applicable,
  endpoints and nonempty-choice specifically explained; the example's two iff
  rows and the counterexample's iff rows are `not_applicable` with reasons).

## Completed IDs

All five assigned items are authored, registered and decided; no assigned item
is unresolved and no assigned item needed escalation.

- A page `group-schemes-of-finite-type-over-a-field`:
  `def-group-scheme-over-a-field`, `def-morphism-and-closed-subgroup-scheme`,
  `lem-closed-subgroup-scheme-valued-point-criterion`.
- B page `group-schemes-of-finite-type-over-a-field-examples`:
  `ex-additive-multiplicative-and-general-linear-group-schemes`,
  `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`.

Step 3b decisions recorded with `tools/step3-decisions.mjs record-item`, one per
item, in dependency order, each with confidence 1, its examined dependency IDs
and concrete evidence: `accept` for four items, `repaired` for
`def-morphism-and-closed-subgroup-scheme` (the type repair above). No `--owner`
invocation, no judge or audit stamp; every item remains `status: draft`. The
pair scope decision recorded in Step 3a remains current (the manifest item
inventory and statements were not changed by this dispatch).

Decision receipts (`research/frontier-38-owner-30-step3b-review-<id>.json`,
current item hash prefix in parentheses): `def-group-scheme-over-a-field`
accept (`e1414582…`), `def-morphism-and-closed-subgroup-scheme` repaired
(`1afcdf5a…`), `lem-closed-subgroup-scheme-valued-point-criterion` accept
(`bebada86…`), `ex-additive-multiplicative-and-general-linear-group-schemes`
accept (`1840c8fc…`), `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`
accept (`fafcd885…`).

## Added suppliers, published concerns and consumer impact

- Added suppliers: **none**. Every direct supplier of the five items is an
  already-published git-tracked item; the two library pages and the batch
  proof-contracts file are the only new artifacts.
- Published consumers: an explicit scan of `items/` and `library/` found no
  published item or page referencing any of the five IDs. The only external
  citations to `def-group-scheme-over-a-field` are the two draft items
  `def-multiplicative-type-coordinate-hopf-algebra` and
  `lem-multiplicative-type-affineness-by-field-descent` of the in-run pair
  887/888; both cite it as a convention (Milne/Stacks style), the item's
  statement is unchanged by this dispatch, and their own authors own those
  rows. No consumer event.
- Published defects: none found in the suppliers read. The published
  `thm-affine-closed-immersions-quotient-rings`, `thm-fibre-products-of-schemes-exist`,
  `thm-affine-scheme-ring-anti-equivalence`, `thm-affine-fibre-product-tensor-ring`,
  `thm-ring-matrix-arithmetic-laws`, `thm-determinant-multiplicative` and
  `cor-inverse-matrix-by-adjugate` were read at their used statements and match
  their cited Stacks/Milne/Vakil locators (including the zero-ring and
  empty-scheme clauses). No suspicion of a published defect is recorded.
- Source availability: the Milne and Stacks full texts were re-checked against
  the recorded fetch hashes (Milne `f2ddd8fa…`, Stacks `4506a392…`); the
  Snowden Lecture 5 URL named only in the plan prose remains unreachable
  (historical 403/404, and not retried as a current source) and is superseded
  by the verified Milne 2.5 statement plus the local coefficient proof. This
  is a plan-prose amendment for Step 4, not a published defect.

## Checks actually run (final content)

| Check | Command | Result |
|---|---|---|
| precheck | `precheck.mts` on the five owned item paths `--json` | 5 files, 3 proof items checked, 0 failed (2 definitions `not-applicable`) |
| rendercheck | `rendercheck.mjs` on 5 items + both library pages `--json` | 7 checked, 0 errors, 0 warnings |
| proof layout | `PRESTIGE_APP_DIR=/tmp/batch22-render-app node tools/proof-layout.mjs <5 item paths>` | 5 items, 9 steps, 0 defects (run after the last item edit) |
| proof contracts | `proof-contract.mjs research/frontier-38-owner-30-batch-22.proof-contracts.json --strict` | 0 errors, 0 warnings, 3/3 items |
| content policy | `content-policy.mjs research/frontier-38-owner-30-batch-22.pages.json --json` | 5 scoped, 0 errors, 0 warnings |
| coverage | `coverage-checklist.mjs …batch-22.coverage.json --require-destination --json` | 2 pages, 21 harvested rows, 0 errors, 0 warnings |
| source fetch | `source-fetch-check.mjs --coverage …batch-22.coverage.json` | 4/4 fetch-verified, 4/4 resolved |
| dependency levels | `item-dependency-levels.mjs check --run frontier-38-owner-30` | exit 0; owned levels 0/1/2/2/3 recomputed from actual deps |
| manifest deps | `manifest-deps.mjs …batch-22.pages.json` | 5 items, 0 normalized, 0 errors |
| dependency graph | `depcheck.mjs --items-file <owned ids>` | 0 errors; no owned id among the 141 global legacy warnings |
| forward refs | `fwdcheck.mjs --items-file <owned ids>` | 0 errors, 0 warnings |
| recorded results | `extcheck.mjs --items-file <owned ids>` | 0 errors; no owned id among the 40 global warnings |
| plan | `validate-plan.mjs research/plan-spec.json` | exit 0; acyclic and consistent (pre-existing `redundant-prereq` notes elsewhere only) |
| scope/items gate | `step3-decisions.mjs check --run … --phase scope/final` | pair scope current; all five owned items closed at their current hashes |

Local checks are local evidence of format, rendering, provenance, coverage,
dependency and contract readiness, not an independent audit; Steps 5–8 follow.

## Open obligations and plan mismatches (for Step 4)

- Step 3a flag 1 (unchanged): plan-spec B page 872 `requires` lists
  `determinants-of-matrices-over-a-commutative-ring` in addition to the A page,
  while the batch-22 manifest lists only the A page. The authored B page
  follows the manifest. The dropped page (order 82, hence earlier in reading
  order) hosts two of the B example's published deps, and
  `cor-inverse-matrix-by-adjugate` is homed on
  `the-determinant-of-a-linear-operator` (order 84, also earlier); all three
  deps are on-disk published items, so the splice licenses them by reading
  order. Step 4 must reconcile the plan/manifest `requires` disagreement
  (`splice-plan --update --accept-requires` after adjudication).
- Step 3a flag 2 (unchanged): the AG-GS-1 plan prose still cites Snowden
  Lecture 5 and "Milne §2.14, p. 44" for the counterexample comparison; the
  verified source is Milne 2.5, printed p. 40, and Snowden is unreachable this
  run. Coverage and item sources already carry the accurate locator; only the
  plan prose needs the Step 4 amendment.
- Open mathematical obligations: **none**. No supplier is unfinished, no
  decision is escalated, no AC dependency arises in this pair, and no item is
  left with a stated open obligation. `dependency-review.json` was refreshed
  for the one repaired raw hash, and the stale Step-1 readiness record for
  `def-morphism-and-closed-subgroup-scheme` was re-recorded `ready` so the
  Step-1 consumer sees current evidence.
- Shared-file preservation: batch 22 contains only this pair; no sibling rows
  exist in the shared batch files, and the cross-batch dependency input stays
  empty (`[]`) because every supplier is published. No shared plan, pathway,
  ledger or configuration file was edited by this dispatch.

## Supervisor Choice reconciliation — 2026-10-03

The earlier assertions that no AC dependency arises and that the entire criterion proof is choice-free are superseded by the bounded supplier/consumer review in research/frontier-38-owner-30-published-affine-closed-immersion-review.md and research/frontier-38-owner-30-choice-consumers-evidence.json. The published affine closed-immersion theorem already inherited AC through its old suppliers. Its repaired direct proof makes those uses explicit. The criterion and alpha_p/mu_p counterexample now carry that already inherited assumption in their Given/Facts/deps/tags and synchronized manifest/contracts; original mathematical statements remain unchanged. Other three item entries are preserved. Stable central item recertification remains pending after all writers drain.
