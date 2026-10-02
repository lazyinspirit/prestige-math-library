# Step 3a scope report — approximation algorithms and gap reductions

- Run: `frontier-37-owner-30`
- A/B pair: `approximation-algorithms-and-gap-reductions` / `approximation-algorithms-and-gap-reductions-examples`
- Batch: 17
- A-page scope decision: **insufficient** — owner action required; Step 3b stays blocked for this pair

## Decision and exact omissions

The batch-17 manifest materialises the **pre-audit** TC-36 inventory
(`research/plan-computability-theory-track.md` L1468–1493: 18 A items, 3 B items,
the four current `requires`). The binding design for TC-36 is **§49** of the
same file (L2152–2206), whose 22-item A list and 5-item B list supersede the
earlier text by §44 L1794 ("This section and §§45–52 supersede every conflicting
inventory, dependency claim, collision claim, count, or readiness claim above").
Three further checks support §49 as operative: the sibling pairs were built from
the binding sections (TC-32 = 19 items = §46; TC-34 = 31 = §47; TC-35 = 34 = §48
plus four local interfaces), the frontier-36 drift record states that §48
supersedes the earlier TC-35 draft, and `research/published-consumer-supplier-ledger.md`
L12473–12488 lists TC-36's 22-item §49 inventory. The batch-17 notes and the
Step-1 drift record (L85–88) treat L1468 as controlling and never reconcile §49,
although `frontier-37-owner-30-drift-evidence.json` lists §49's lines (2154, 2193)
as design locations for this page.

Missing from the manifest relative to binding §49, with what the scaffold
carries instead:

1. `def-harmonic-number-for-set-cover-analysis` — $H_n$ is defined inline in
   `def-greedy-set-cover`; missing as a standalone item.
2. `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp` — present only as a
   proof step inside `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp`.
3. `lem-euler-double-tree-shortcutting-does-not-increase-cost` — likewise folded
   into that theorem.
4. `def-apx-hardness-and-apx-completeness` — APX-hardness under L-reductions and
   APX-completeness are defined inside `def-l-reduction`; the standalone definition
   that §49 names does not exist.
5. `ex-conditional-expectation-for-a-small-max-cut-instance` — absent.
6. `ex-double-tree-shortcutting-for-a-metric-tsp-instance` — absent.

Items 5–6 are absent content: §49 says the B page carries five examples, and the
two A-page algorithms with no worked B example are exactly the Max-Cut
derandomization and the double-tree TSP algorithm. Items 1–4 are granularity
variants whose mathematics is inlined, but §49 names them as planned definitions
and results, so the owner must decide between enrichment and an explicit
acceptance of the coarser inventory.

Declared prerequisites: §49 requires `trees-forests-and-spanning-trees` and
`eulerian-and-hamiltonian-graphs` beyond the four current `requires`. Both are
published (orders 209, 211) and already lie in the page's transitive
prerequisite closure (drift-evidence closure, 191 pages), so this is a
declaration/directness defect, not a missing prerequisite. The metric-TSP
theorem's actual `deps` (`thm-kruskals-minimum-spanning-tree-algorithm`,
`def-weighted-graph-and-minimum-spanning-tree`, `thm-connected-iff-has-spanning-tree`)
live on `trees-forests-and-spanning-trees`.

## Source coverage

I re-downloaded all four stamped sources and matched the coverage hashes:
Williamson–Shmoys `f890311c5c9f5e6b` (2 395 493 B, 500 pp.), Arora–Barak 2007
author draft `da0881782a35bde6` (4 572 986 B, 489 pp.), Ghaffari
`622355925629596c`, Cornell `7f67c614c8719134`. I read the cited arguments:
WS §1.6 (Algorithm 1.2, Fact 1.10, Theorem 1.11 with the charging proof), §2.4
(Lemma 2.10, Theorem 2.12 and shortcutting), §5.1 (Theorem 5.3 with proof),
§5.2 (conditional-expectation derandomization), §16.2 (Definition 16.4,
Theorems 16.5–16.6); AB §18.2.4–18.2.5 (Theorem 18.13 context, Lemmas
18.15–18.16 with proofs, Remark 18.17); Cornell §1.1–1.1.2; Ghaffari §2.1 and
§2.2.2 (Theorem 3, Algorithm 2, Theorem 8). The two recorded out-of-scope source
results (WS Theorem 2.11 nearest addition; Cornell §1.1.1 pairwise hashing) are
genuinely optional alternatives to the selected routes, and the scaffold's
deliberate omission of nearest addition is consistent with §49's own proof trap.

Coverage gaps to name for the owner:

- **APX is unsourced.** Neither WS (this edition uses MAX SNP) nor the AB draft
  defines the class APX or APX-hardness/completeness. `def-ptas-fptas-and-apx`
  and `def-l-reduction` therefore carry APX, APX-hardness and APX-completeness
  with no coverage row, and §49's `def-apx-hardness-and-apx-completeness` would
  need a canonical declaration (e.g. Papadimitriou–Yannakakis 1991 or Ausiello
  et al.) if the APX formulation is kept.
- **FPTAS has no row.** WS Definition 3.4 exists in the same stamped full text
  (verified at Chapter 3), so the row is simply missing.

The published supplier `thm-pcp-theorem-np-equals-pcp-log-n-o-one` does supply
exactly the hypothesis the new hardness lemma states (binary proof alphabet,
perfect completeness, fixed soundness $s<1$, $O(1)$ nonadaptive bit queries,
$O(\log n)$ fair coins, one fixed polynomial-length proof per input), and the
published 3SAT-to-clique occurrence convention supports the scaffold's
three-occurrence clause-graph variant, whose contract already carries the §49
strengthening $\alpha(G)=\mathrm{OPT}_{Max3SAT}(F)$.

## Role in the library and inherited published issue

The pair is the terminal pair (order 651) of the PCP chain and consumes the
published TC-32–TC-35 items. The ledger records zero direct published consumers
for every §49 TC-36 item, no published item has a forward reference into this
page, and the B page requires only the A page, so no downstream obligation
blocks or is blocked by this pair. Forward references: none.

Inherited published issue (reported, not repaired here): the three new hardness
items carry an interim Axiom of Choice because the published PCP proof route
reaches the published, AC-assuming `thm-algebraic-embedding-extension`
(Statement assumes Choice; Proof step 3.1 invokes Zorn) along
`thm-margulis-family-has-uniform-spectral-gap` →
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms` →
`thm-complex-spectral-theorem-for-normal-endomorphisms` →
`thm-the-complex-numbers-are-algebraically-closed` → finite Galois → Artin →
algebraic-embedding-extension. I confirmed that declared-dependency path and the
AC-assuming theorem's Statement and step 3.1; I did not re-audit every proof
step on the published chain for proof-use, and the batch notes additionally
identify an over-broad IVT → countable-choice edge that is not a proof use.
This belongs in the published-consumer-supplier ledger; the interim AC
declarations in the scaffold are the correct conservative treatment meanwhile.

## What the owner must decide

- **Enrich**: add §49 items 5, 11, 12, 20 (exact IDs above), the two missing B
  examples, and the two `requires` edges in plan and manifest; keep the
  strengthened clause-graph contract; declare sources for APX and FPTAS. Then
  re-run the pair scope decision for the new scope.
- **Or accept the current 18/3 scope explicitly**: record `proceed` on the
  current scope hash plus deferrals for the omitted items/examples; the
  APX/FPTAS source declarations then become authoring obligations.

I did not edit the scaffold, plan, coverage, or any item.

## Uncertainty

Whether §49 governs this run's TC-36 pair is the owner's call. The run's
generated pointers and both run records cite the pre-audit TC-36 text, but §44's
supersession clause, the ledger's 22-item list, and the sibling-pair precedent
all treat §49 as operative. I found no owner direction or scope receipt adopting
the 18/3 inventory.

## Recorded decision

`record-scope --run frontier-37-owner-30 --page approximation-algorithms-and-gap-reductions
--decision insufficient` was written to
`research/frontier-37-owner-30-step3a-review-approximation-algorithms-and-gap-reductions.json`
at 2026-09-30T07:55:05Z against scope hash
`e37af606de095e69e431b31a013e33be674c93d3cf45d9001db28977ee7fa905`
(the current 18 A/3 B pair content). Any enrichment changes that hash, so the
owner must record `proceed`/`enrich` for the resulting scope or commission a
fresh sufficient review. Next action: owner decision on the two options above;
no Step 3b authoring for this pair until then.
