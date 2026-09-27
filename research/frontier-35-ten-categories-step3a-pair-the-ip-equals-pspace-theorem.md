# Step 3a scope review — pair `the-ip-equals-pspace-theorem`

- Run: `frontier-35-ten-categories` (stage `3a-scope`), dispatch label
  `step3a-pair-the-ip-equals-pspace-theorem-e37c088412d616e5`
- Role: alpha (scope reviewer, not owner, not item author)
- A page: `the-ip-equals-pspace-theorem` (batch 12, order 643,
  19 items: 3 definitions, 9 lemmas, 4 theorems, 1 corollary, 2 false
  statements)
- B page: `the-ip-equals-pspace-theorem-examples` (batch 12, order 644,
  4 items: 3 examples, 1 counterexample)
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
  --page the-ip-equals-pspace-theorem --decision sufficient`.
- Date: 2026-09-24.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record.

## 1. Intended subject and role in the library

The controlling prose design is `TC-32` of
`research/plan-computability-theory-track.md` (lines 1318–1348), superseded
item-for-item by **§46, "Binding replacement for `TC-32`: IP = PSPACE"**
(lines 1969–2012). §46 is the design of record: it fixes the page id, the
three page prerequisites (the third, `chebyshev-bounds-and-mertens-theorems`,
supplies Bertrand's postulate), a 19-item proof-ordered A inventory, and a
B page that "requires only the A page" and that opens with the new
`ex-two-quantifier-qbf-arithmetization-transcript`. The run plan
(`research/plan-spec.json`, orders 643/644), the run scope ledger
(`research/frontier-35-ten-categories-scope-ledger.json`, pages 44–45), the
planning notes (row 12) and the drift record
(`research/frontier-35-ten-categories-drift-evidence.json`, entry 17) all agree
with that target. The owner direction file
(`research/frontier-35-ten-categories-owner-authoring-direction.md`) does not
alter this pair; its deferrals concern batch 8 and the Easton pair.

Subject and role. The pair is the terminal landmark of the computability IP /
arithmetization spine: it proves the *reverse* inclusion
`PSPACE ⊆ IP` by the Shamir/Shen quantified-arithmetization protocol and then
states `IP = PSPACE`, closing it against the already-published upper inclusion
`thm-ip-is-contained-in-pspace`. It adds the two standard consequences the
design names (`cor-ip-is-closed-under-complement`,
`thm-ip-can-be-given-perfect-completeness`) and two false statements
(multilinearization is unnecessary; the terminal field value may be trusted).
No page inside this run and no published page consumes the pair: the
published-consumer ledger records 0 direct published consumers for all 19
planned A ids,
the plan's graph audit (lines 1820–1870) shows 0/0 existing coverage at
643–644, the batch-12 `cross-batch-dependencies` file is `[]`, the run-level
edge file has no batch-12 edge, and the B page is a dependency leaf whose only
requirement is its A companion.

## 2. Design-to-manifest mapping

All 19 designed A ids and all 4 designed B ids are present in
`research/frontier-35-ten-categories-batch-12.pages.json`, in the designed
order, with the designed kinds:

| # | manifest item | §46 role |
| --- | --- | --- |
| 1 | `def-qbf-arithmetization-operators` | A/E quantifier operators |
| 2 | `lem-quantifier-polynomials-agree-on-booleans` | Boolean agreement |
| 3 | `def-multilinearization-operator` | `R_x`, ordered convention |
| 4 | `lem-multilinearization-preserves-boolean-values` | strengthened degree bound `D=max(L,2)`, `O(n^2)` operators |
| 5 | `lem-efficient-prime-field-for-a-polynomial-soundness-budget` | deterministic prime field, `p>12TD` |
| 6 | `def-shamir-protocol-for-tqbf` | reverse-operator protocol |
| 7 | `lem-honest-prover-maintains-the-claim-invariant` | completeness invariant |
| 8 | `lem-each-round-has-polynomial-communication` | explicit round/message/degree/point bounds |
| 9 | `lem-shamir-protocol-has-perfect-completeness` | perfect completeness |
| 10 | `lem-first-false-claim-survives-with-root-bound-probability` | one-round soundness `2D/p` |
| 11 | `lem-total-soundness-follows-by-union-bound` | total soundness `<1/6` |
| 12 | `lem-shamir-qbf-verifier-runs-in-polynomial-time` | verifier efficiency |
| 13 | `thm-tqbf-has-a-polynomial-round-interactive-proof` | TQBF ∈ IP |
| 14 | `thm-pspace-is-contained-in-ip` | PSPACE ⊆ IP |
| 15 | `thm-ip-equals-pspace` | equality (uses the published upper inclusion) |
| 16 | `cor-ip-is-closed-under-complement` | corollary |
| 17 | `thm-ip-can-be-given-perfect-completeness` | corollary-level theorem |
| 18 | `fs-ip-equals-pspace-needs-no-degree-reduction` | false statement |
| 19 | `fs-the-verifier-trusts-the-final-field-value` | false statement |

The B page carries the design's new
`ex-two-quantifier-qbf-arithmetization-transcript` followed by the three
preserved items `ex-multilinearization-preserves-boolean-values`,
`ex-ip-can-be-given-perfect-completeness`,
`cex-ip-equals-pspace-needs-no-degree-reduction`; every B item's dependencies
resolve to A items only, as §46 requires. Unlike several sibling pairs, this
scaffold adds **no** support items beyond the design and drops nothing: the
manifest is exactly the binding inventory. Both "strengthen" obligations in
§46 (items 4 and 8) are reflected in the statements. The pair's `requires`
list is exactly the three pages §46 names. The drift snapshot's
two-prerequisite list is stale history (it predates the owner-authorized
`chebyshev-bounds-and-mertens-theorems` edge, which is now in both the plan
and the manifest).

## 3. Source coverage

`research/frontier-35-ten-categories-batch-12.coverage.json` gives this page
two independent full-text treatments and 15 disposition rows
(Arora–Barak Chapter 8 §8.5; Shen, JACM 39(4) 1992, pp. 878–880); the
coverage checklist rerun on 2026-09-24 reports 65 harvested results across the
batch's two A pages with 0 errors and 0 warnings. All 23 pair items carry both
references in the manifest.

I re-fetched both sources and reproduced the recorded stamps exactly:

- Arora–Barak, author-hosted full draft: 4,572,986 bytes,
  `sha256_16 da0881782a35bde6`, 489 pages.
- Shen, *IP = PSPACE: Simplified Proof*: 147,259 bytes,
  `sha256_16 71b48bccc1a57780`, 3 printed pages (878–880).

What I read directly in the fetched files, matched against the manifest:

- Arora–Barak §8.5 (printed pp. 157–162): Theorem 8.17 (LFKN, Shamir 1990)
  `IP = PSPACE`, with only `PSPACE ⊆ IP` to prove via
  `TQBF ∈ IP[poly(n)]`, public coins and perfect completeness (§8.5.3); the
  warning that repeated multiplication "after k steps, the degree could be
  2^k … cannot even be transmitted in polynomial time"; and **Remark 8.19**,
  the alternative multilinearization route used by this scaffold:
  `L_i(p) = x_i p|_{x_i=1} + (1-x_i) p|_{x_i=0}`, "O(n²) invocations", messages
  "of degree at most 2", with the terminal evaluation done by the verifier.
  The upper inclusion `IP ⊆ PSPACE` is proved earlier in the same draft.
- Shen, all three printed pages: the operators
  `A_xP = P(0)P(1)`, `E_xP = P(0)+P(1)-P(0)P(1)`, `R_xP = P mod (x^2-x)`
  (identical to the manifest's interpolation `(1-x)P|_{0}+xP|_{1}`); the
  one-operator reduction protocol (degree-`d` predecessor message, check of the
  A/E/R identity, fresh random point); the global operator order, which the
  scaffold's ordered convention reproduces exactly —
  `R_{x1},…,R_{xn}, q_n x_n, R_{x1},…,R_{x_{n-1}}, q_{n-1}x_{n-1}, …, R_{x1}, q_1 x_1`;
  the error bound "(number of operations A,E,R)·(maximal degree)/#F"; `O(l²)`
  operations with degrees never above 2; the terminal check
  `b(u_1,…,u_n)=v` performed by the verifier alone; and the remark that a
  log-length prime can be used because primality testing is trivial at that
  size.

Independent consistency checks on the concrete statements (not item
approvals): the B transcript example checks out exactly over `F_101`
(`b(x,y)=1-y+xy`; forward `b → R_x → R_y → A_y → R_x → E_x`; reverse messages
`T` (1→2), `T` (2→3), `1+2T` at `x=3` (3→9), `1+2T` (9→11), `5T-4` at
`y=5` (11→26); terminal `b(6,5)=26`), as does
`ex-multilinearization-preserves-boolean-values`
(`P(0,z)=z`, `P(1,z)=2z+2`, `R_xP=z+x(z+2)`). The counterexample's
`y^{2^k}` degree growth is Arora–Barak's own §8.5.3 warning and matches the
manifest's `fs-`/`cex-` pair.

The one deliberate deviation from the cited presentations is design-mandated:
§46 requires deterministic trial division ("no prime-number theorem or
randomized prime search is assumed"), where both sources use a random or
size-trivial prime. The scaffold's item states a deterministic polynomial-time
search via Bertrand's postulate; scanning `(12TD+1, 2(12TD+1))` by trial
division costs `O(N^{3/2})` arithmetic steps with `N` polynomial in the input
length, so the claimed bound is attainable. Proof correctness is not this
review's subject. The design's two extra background citations (MIT 6.841
notes, Sipser §10.4) are not harvested; no designed claim depends on them,
and every item carries the two verified references.

## 4. Dependency, integrity and consumer checks (rerun 2026-09-24)

- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-12.pages.json`:
  62 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only …batch-12.pages.json`:
  62 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs …batch-12.coverage.json`: 0 errors,
  0 warnings.
- The pair's 23 items have 8 distinct external prerequisite ids, all resolving
  to published `items/*.md`: `def-ip` and `thm-ip-is-contained-in-pspace`
  (home page `interactive-proof-systems-and-public-coins`, order 639),
  `def-arithmetization-of-a-boolean-formula` (declared prerequisite page 641),
  `def-quantified-boolean-formula-and-tqbf`, `thm-tqbf-is-pspace-complete`,
  `cor-pspace-equals-npspace-and-is-closed-under-complement` (declared
  prerequisite page 625), `thm-bertrands-postulate` (declared prerequisite
  page, number theory) and `thm-root-bound-for-polynomials-over-a-domain`
  (published abstract-algebra page). Six of the eight live on the three
  declared `requires` pages; the two on page 639 are available transitively
  (639 < 641 < 643) exactly as §46's prerequisite list intends. No scaffold
  edit was made.
- Transitive closure of the pair's 8 external seeds: 474 published ids, every
  one `status: published`, none `proved_here: false`, none on a
  `not-proved-here` page, and disjoint from this run's new item ids — so no
  Foundations-bootstrapping-boundary path and no in-run dependency. There is
  no duplicate id in `items/` and none across the run manifests, and no A item
  depends on a B item.
- Repo-wide `node tools/depcheck.mjs --quiet` still exits non-zero on
  pre-existing diagnostics elsewhere (page cycles, B-leaf content,
  published-unaudited items); a filter confirmed none of them names this
  pair's ids or its 8 direct prerequisites. The published-consumer ledger has
  no defect entry for this pair; its related rows concern already-repaired
  `def-ip` and an unrelated published consumer's Phase-3 interface question
  about `thm-tqbf-is-pspace-complete` (this scaffold uses that published item,
  which is the one hosted on its declared `space-complexity-savitch-and-tqbf`
  prerequisite page).

## 5. Uncertainty and considered-and-declined additions

- The coverage record's own read claim was not taken on trust: both sources
  were re-fetched, byte- and hash-matched, and the cited sections read. I found
  no statement-level discrepancy between the design, the manifest and the
  sources, and I record no unresolved uncertainty for this pair.
- The compressed statement of `def-multilinearization-operator` ("inserts
  `R_x` for every currently free variable after each quantifier operation")
  becomes unambiguous in its strategy text and equals Shen's explicit order;
  the B transcript instantiates it, and I verified that arithmetic. Making the
  sequence fully explicit in the item statement is an authoring refinement for
  Step 3b, not a scope omission.
- Arora–Barak's alternative auxiliary-variable route (`ψ′` with degree ≤ 2) is
  declined by the coverage in favour of Remark 8.19's multilinearization
  route, which is what §46 mandates; both routes prove the same theorem, and
  the declined route is not needed by any designed claim.
- Nothing else of the declared subject is missing: definitions (arithmetized
  quantifier operators, multilinearization, protocol), results (TQBF ∈ IP,
  PSPACE ⊆ IP, equality, complement closure, perfect completeness), examples
  and counterexamples match the binding inventory, and the published upper
  inclusion plus published TQBF completeness supply the two interfaces the
  page deliberately does not reprove.

## 6. Decision

Scope decision for the A page (and hence the pair): **`sufficient`** — the
planned definitions, results and examples cover the intended subject, match
the binding §46 design item-for-item with no additions or drops, are backed by
two independently verified full treatments, and introduce no unowned subject
matter and no unresolved prerequisite. Receipt:
`research/frontier-35-ten-categories-step3a-review-the-ip-equals-pspace-theorem.json`.
