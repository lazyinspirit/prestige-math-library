# Agent 03 A–P repair report

Completed review of all 32 assigned items: 16 accept, 14 repair, 2 audited defer. Effective per-item receipts are in `agent-03-receipts.jsonl`; every current item SHA matches its receipt. No commits or autopilot transitions were run.

## Assigned items

| # | ID | Decision |
|---:|---|---|
| 1 | `def-thom-euler-class-of-an-oriented-vector-bundle` | accept |
| 2 | `thm-separation-of-an-open-convex-set-and-a-point` | repair |
| 3 | `lem-depth-infinity-when-ideal-acts-surjectively` | repair |
| 4 | `thm-rmk-positive-functional-is-integration-against-its-representing-measure` | repair |
| 5 | `thm-hilbert-cube-universal-for-separable-metrizable-spaces` | repair |
| 6 | `lem-normal-density-has-total-mass-one` | repair |
| 7 | `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula` | accept |
| 8 | `def-uniformly-integrable-family` | accept |
| 9 | `thm-taking-out-what-is-known` | accept |
| 10 | `thm-conditional-jensen-inequality` | accept |
| 11 | `thm-koopman-operator-is-a-linear-isometry-on-l-p` | accept |
| 12 | `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` | accept |
| 13 | `prop-simple-integrals-are-bounded-by-total-variation` | accept |
| 14 | `def-metric-topology` | repair |
| 15 | `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity` | repair |
| 16 | `def-killing-dual-vector-attached-to-a-root` | repair |
| 17 | `lem-complex-translation-and-approximate-identity-interfaces` | repair |
| 18 | `thm-the-root-set-is-a-reduced-crystallographic-root-system` | repair |
| 19 | `cor-verma-irreducibility-criterion-from-shapovalov-determinants` | defer |
| 20 | `thm-diagram-area-agrees-with-algebraic-relator-area` | repair |
| 21 | `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free` | defer |
| 22 | `lem-universal-martin-lof-test-exists` | repair |
| 23 | `thm-sigma-one-sets-are-exactly-ce-sets` | repair |
| 24 | `cor-hamiltonian-path-and-cycle-are-np-complete` | accept |
| 25 | `lem-fibre-as-base-change-to-point-classical` | repair |
| 26 | `rem-noetherian-conventions-and-choice` | accept |
| 27 | `cex-proper-subspace-with-an-equinumerous-basis` | accept |
| 28 | `def-discriminant-of-a-number-field-basis-and-order` | accept |
| 29 | `def-quotient-vector-space-and-canonical-projection` | accept |
| 30 | `ex-proper-versus-improper-equivalence-of-forms` | accept |
| 31 | `fs-hodge-star-needs-only-the-vector-space-structure` | accept |
| 32 | `thm-gram-inner-product-on-exterior-powers-is-positive-definite` | accept |

## Unresolved substantial prerequisites

- `cor-verma-irreducibility-criterion-from-shapovalov-determinants`: the determinant theorem still lacks four RL-2 generic-hyperplane/radical/transverse-pairing obligations and a factor-direction argument. The corollary is conditionally correct; no local edit can supply that theorem.
- `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free`: its nonidentity endpoint error was repaired and checked, but the torsion theorem supplier still rests on an external restatement pending SC-9 and the small-cancellation periodic-word/diagram chain.
- In the later Cartan-choice consumer closure, shard 06 found that the strong-linkage proof uses the Jantzen sum formula, which depends on the same unresolved Shapovalov generic-hyperplane premise. The combined impact file marks 11 current descendants in this substantive-debt chain, including the two audited suppliers; their Choice-interface repairs alone do not certify those proofs.
- Root reserved the published determinant theorem itself for exact audit. I read Etingof's cited Exercise 8.15(iv)–(x) (printed pp.45–47), Theorem 15.11 (p.82), and the local determinant/embedding/radical items. Four obligations remain: the factor-direction argument, a noncircular generic positive-root embedding, equality of its image with the full generic radical, and perfect first transverse derivative pairing. The cited exercise asks for these proofs; Theorem 15.11 derives its embedding from the determinant formula and cannot close the local gap without circularity. I recorded an unchanged-item defer receipt and the current nine-descendant exact-use trace. Two owner-02 sl₂ examples and two owner-09 block examples now have independent proofs and no longer depend on it.
- Root also reserved `thm-verma-embedding-for-an-arbitrary-positive-root` for exact audit. Its local proof delegates the whole non-simple-root case to Etingof Theorem 15.11, whose printed proof explicitly uses the determinant formula for generic weights. The local simple-root proposition does not fill that gap. I recorded an unchanged-item defer receipt and the two direct/three total item-consumer paths to owner 06's BGG and linkage-block proofs.

## Cross-shard repairs and interface impact

- Shard 04 repaired `thm-van-kampen-lemma` with literal-boundary free-reduction surgery and an at-most-m face construction. I repaired the assigned diagram/algebraic area equality with a separate one-factor-per-face peeling induction.
- Shard 08 repaired `thm-total-variation-is-a-measure`; the assigned simple-integral bound was rechecked and accepted. Shard 08 also repaired the AC edge in Nakayama; the assigned depth lemma now states its direct AC dependency.
- `def-metric-topology` now uses canonical arbitrary-superset neighbourhoods. Root reserved and I repaired the copied stale contrasts in `def-metrizable-space` and `def-locally-compact-metric-space`. Full structural closure reaches more than 19,500 published/draft items; the first-hop use review found only these two affected mathematical notes.
- I checked all five aliases of these three metric definitions against 20,100 current items, 1,221 current library pages, the 319 frozen assigned-before snapshots, 17 immediate maintenance snapshots, and tracked pre-repair HEAD items. Exact whole-ID alias references occur only in the owning `aliases:` declarations, so canonicalization adds no missed consumer edges or paths. The supplemental `agent-03-impact-metric-alias-audit.json` records every match and is linked from both metric impact files.
- The initial literal Definition edit in `def-killing-dual-vector-attached-to-a-root` changed a supplier citation only; that earlier 74-descendant citation trace is superseded by the Choice-interface review below.
- A later interface audit found that the cited finite root/string lemma uses maximal toral subalgebras, while the library's Cartan definition means nilpotent self-normalizing. I reopened both the Killing-dual definition and the root-set theorem: each now explicitly assumes AC and invokes the published Cartan=maximal-toral bridge before the finite lemma. Their arbitrary-Cartan scope and formulas remain. The final combined trace records all 64 current published descendants and every reachable incoming exact use. Of four direct consumers, three inherit the repaired root-system domain or already assume AC; owner 01 repaired the fourth with AC. Chevalley, Harish–Chandra, center, and central-character interfaces were repaired by owners 05/07/10 and their affected consumers by owners 06/07/09. Owner 10 removed unnecessary root-chain edges from the freeness theorem and separately qualified its Kostant-based proof by AC. Owner 02 detached two sl₂ examples through direct PBW arguments; owner 09 detached its BGG-linked sl₂ chain and two determinant-linked block examples through independent calculations. The remaining 11 Cartan-reachable proof-debt items have audited deferrals under owners 02/03/06; no current consumer route is waiting for ownership or an unreviewed repair.
- The universal Martin-Löf test and classical fibre Statement changes have no direct item consumers. The former now states countable/dependent choice for the published fair-coin product measure; the latter states inherited AC and proves the locally affine reduced-fibre pullback, including reducible and empty objects.
- Six root-reserved probability consumers now quote only the integrable factorization clause actually used. Their exported claims did not change; focused precheck/rendercheck pass and the 35-node structural trace is recorded.
- Seven root-reserved associated-prime consumers now state exact inherited DC/AC hypotheses; the zero-divisor theorem keeps its DC union clause and adds AC only to finite-union finiteness. Their 121-node structural trace identifies seven next-hop targets assigned to shard 01: six were repaired with AC, and the seventh was accepted unchanged because its Statement inherits its supplier hypotheses literally. Other direct consumers already carry sufficient AC in Statement/Given; shard 06 corrected its own Serre-lemma Facts quote. Further cascades are routed by their owners and central reconciliation.
- Two further root-reserved Cohen--Macaulay localization consumers now match shard 01's AC-qualified supplier. The direct corollary explicitly assumes AC; the umbrella theorem keeps its global localization clause choice-free and assumes AC only for the local special case. Its complete item-consumer closure has one edge (corollary to theorem), now repaired, and no further descendants.

## Evidence

- 19 effective maintenance receipts (17 consumer repairs and two audited supplier defers) and 17 immediate before snapshots; all current item SHAs match receipts.
- Two reopened assigned-item receipts have immediate snapshots in `agent-03-before-reopen/`; current item SHAs match their latest receipts.
- Impact files: `agent-03-impact-metric-topology.json`, `agent-03-impact-metric-maintenance.json`, `agent-03-impact-metric-alias-audit.json`, `agent-03-impact-killing-dual-vector.json` (superseded for current Choice scope by `agent-03-impact-cartan-choice-bridge.json`), `agent-03-impact-shapovalov-determinant-debt.json`, `agent-03-impact-positive-root-verma-embedding-debt.json`, `agent-03-impact-universal-martin-lof-test.json`, `agent-03-impact-fibre-base-change.json`, `agent-03-impact-probability-factorization-quoted-facts.json`, `agent-03-impact-associated-prime-choice-consumers.json`, `agent-03-impact-cohen-macaulay-localisation.json`.
- `agent-03-events.jsonl` records interface changes, escalations, cross-owner requests and superseding unaffected dispositions.
- Focused precheck/rendercheck passed for all edited proof items; edited definitions passed rendercheck. Diff checks passed on edited files. This is targeted validation, not an independent whole-library certification.

## Root-owned reconciliation

- Reconcile page `requires` and plan dependencies for new direct AC/DC/product-measure and affine-algebraic suppliers, including the Cartan=maximal-toral bridge and finite root/string source used by the Killing-dual definition and root-system theorem and the two Cohen--Macaulay localization AC edges.
- Reconcile the two assigned-item audited deferrals, the newly audited determinant and arbitrary positive-root embedding supplier defers, and shard-01 next-hop dispositions in the central ledger after their own evidence is complete.
