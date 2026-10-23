# Batch 41 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`. Group: `batch-41`.

## Completed level 1 review

`lem-fd-periodic-integration-by-parts`, Proof 1.1–4.1: the uniform-grid Darboux estimate, coordinate mean-value estimate, periodic telescoping and product-rule derivation prove both identities for every integer d>=1. Its exact suppliers are `def-fd-periodic-torus-domain` and `cor-mean-value-theorem`; the latter was checked through Cauchy and Rolle. The d=1 empty remaining tuple, zero fields, periodic endpoints and finite-choice limits were checked. Complete HIGH risk review recorded in the owning contract; no item edit or routed touched decision. Reader/refuter evidence was read; neither identifies an in-scope mathematical defect here.

## Completed level 2 review

`thm-fd-diffuse-interface-energy`, Proof 1.1–5.1: all four declared suppliers and their actual uses were checked. The stated supremum-norm time differentiability gives uniform difference quotients for phi, its gradient and u. At each interior time, the nearby phi values lie in the nonempty compact interval J=[-R,R]. The all-pairs open cover in 1.1 has a finite subcover by `thm-heine-borel-r`; its positive minimum radius gives uniform continuity of W', and the same finite cover bounds W'. The mean-value estimate holds for every intermediate value, so no function selecting such values is needed. The resulting uniform limit passes through the fixed-cube Riemann integral by its volume-times-supremum bound.

For 2.1 the scalar dt(phi) and vector epsilon grad(phi) are C1 in space; for 2.2 the pressure, velocity and componentwise gradients meet the periodic supplier's C1 hypotheses. For 3.1 mu and grad(mu) are admissible by the separately imposed C2 regularity of mu. For 4.1 phi and mu*u are C1 periodic fields. Thus all integrations by parts are typed correctly. Incompressibility removes pressure and kinetic transport. The phase transport is minus integral mu*u dot grad(phi), which equals plus integral phi*u dot grad(mu); this cancels the negative kinetic exchange. Adding the balances gives exactly the two stated negative dissipation terms with coefficients nu and M.

Checked all integers d>=1 (including the one-coordinate case), zero velocity, constant phase, vanishing dissipation gradients, the nonempty finite subcover, and the restriction 0<t<T. No endpoint derivative, strict dissipation, existence, stability or physical truth is asserted. W bounded below is harmless additional scope; it need not be used in the derivative identity. The complete CRITICAL risk review is in the owning contract. No mathematical repair was necessary.

The supporting Definition specifies all fields, dimensionless coefficients, chemical-potential formula and regularity. The constant-state example substitutes u=0, phi=c and pi=0 for arbitrary real c; the defined mu is constant even when W'(c) is nonzero, and the energy is the cube volume times epsilon^{-1}W(c). Its energy-stationary claim asserts no stability or minimization. These remain mathematical items with purely mathematical prerequisites and no empirical premises.

## Routed decisions and published referrals

Exactly three obligations are owed. There are no touched items, touched pages or refuter findings in the scope. No decisions were added for untouched, unflagged carriers.

| Obligation | Published supplier | Owned consumer | Verdict |
|---|---|---|---|
| reader:41:1 | thm-heine-borel-r | thm-fd-diffuse-interface-energy | confirmed_nonfatal |
| reader:41:2 | thm-cauchy-mean-value | lem-fd-periodic-integration-by-parts | confirmed_nonfatal |
| reader:41:3 | thm-rolle | lem-fd-periodic-integration-by-parts | confirmed_nonfatal |

For reader:41:1, the first Statement paragraph embeds `def-interval` and `def-open-cover-r`; the following Statement explanation also embeds `thm-recursion`. No Statement references section follows the complete formulation. Its full bisection proof was checked: the canonical left-first rule preserves bad intervals, recursion produces nested nonempty closed intervals, the explicit length bound tends below any positive radius, and one cover member contradicts badness. The a=b case remains valid. The energy proof uses precisely the finite-subcover conclusion for J, not a stronger compactness theorem.

For reader:41:2, the Cauchy Statement embeds `def-continuity-real`, `def-interval` and `def-derivative` in its hypotheses. The full auxiliary-function proof checks continuity, differentiability and equal endpoints of h=(f(b)-f(a))g-(g(b)-g(a))f before applying Rolle. Its conclusion is a product identity with no division assumption. `cor-mean-value-theorem` uses g(x)=x and obtains the exact one-variable mean-value identity needed on each closed coordinate segment in periodic Proof 2.1. That segment has positive length and a C1 restriction, so the supplier hypotheses hold.

For reader:41:3, Rolle embeds the same three links and a later Statement link to `thm-fermat-interior-extremum`. Its full proof checks the two exhaustive extremizer cases: an interior extremizer gives zero derivative by Fermat; otherwise equal endpoint values force constancy, and the midpoint gives the required interior zero derivative. The Cauchy-to-mean-value-to-periodic dependency path preserves these hypotheses.

These are actual editorial defects under the uninterrupted-statement instruction; their presence changes neither a mathematical hypothesis nor the owned deduction. Each decision references exactly one distinct closed `nonfatal-recorded` row in `research/defect-ledger.jsonl`, with IDs `fluid-dynamics-all-47-2026-10-23-3a-batch-41-reader-1` through `-3` and ownership at `3a-adjudicate`. The published ledger was reread and merged while holding the exclusive `research/.published-consumer-ledger.lock`; only that acquired lock was released. Its deduplicated index and exact consumer/source records retain OPEN mathematics-owner maintenance. The original owner must move every link after the complete Statement into Statement references, preserving all mathematics and checking affected original consumers. No published or imported source was edited, and no repair confidence or completed source-repair claim is fabricated.

## Source comparison and reading limits

Read the current five batch items, both page carriers, the complete direct mathematical suppliers, the complete mean-value/Cauchy/Rolle/Heine–Borel proofs discussed above, the batch manifest and cross-batch input, original reader report/findings, refuter report, scope, pre/post snapshots and owning contract. This is a review of the assigned arguments and their actual supplier interfaces, not a fresh audit of every transitive root-mathematics proof.

[Oden, Foundations of Predictive Computational Science](https://www.oden.utexas.edu/media/reports/2017/1701.pdf), Chapter 11 §§11.2 and 11.4, printed pp. 209–212, equations (11.1)–(11.10), (11.16)–(11.21), was retrieved and read for gradient energy, chemical potential and Cahn–Hilliard formulation. Its normalization differs from the local coefficients; the local Definition fixes those coefficients and the local proof derives the identity.

[Georgiadis, Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility](https://d-nb.info/1352416549/34), §1 equations (1.1)–(1.10), Definition 1, Theorem 1 and §2 opening periodic mollification/integration passages through equation (2.5) and the transport manipulations on pp. 4–5 were retrieved and inspected. The source uses a three-dimensional torus and a weak-solution theorem with additional assumptions. These serve formulation context; no weak-solution result is imported into the local smooth proof. This review does not claim to verify its entire weak-solution argument or silently resolve source-level typography or normalization.

All four inspected published supplier files match their exact raw pins in `research/math-imports.json`: Heine–Borel `a307702eba182c6f0e29cabd7576e76a654f87dee8e91872a291a23c30d803c9`, Cauchy `0edb30be95188d8dc57bdfb3d713dbc954ea74ed9004312390d3270eee31a9a2`, Rolle `07ce0c8cef8890e0ba3b27b4cb193b687367d416f4b78c4f6ab0de60308b5585`, and mean value `8fa28eca643121fe9c22a70106aa70ce0db3843db94ac7a2858e9bb5118479ba`. The routed scope's carrier fingerprints are not raw-source hashes and have not been substituted for these pin checks.

## History, consumers and diagrams

The pre/post snapshot item and page fingerprint maps are identical. All five current raw item hashes equal their post-reader snapshot hashes. The reader made no repair to accept, amend or revert. This dispatch changes only risk-review and adjudication/ledger evidence; every item, Statement, Definition, page inventory and publication status is preserved. No historical reconstruction or owner historical-resolution exception is needed.

The A/B page bodies are empty, retain compact-v1 and have the expected four-item/one-example inventories. No TikZ/tikzcd diagram occurs in the reviewed carriers; none is needed to establish these coordinate identities. The owned cross-batch input retains the page edge fd-mp01 -> fd-x01. The current fd-x01 page exists with its eight-item inventory; its broader proofs were not claimed reviewed here. No cross-batch logical item dependency was added. The frontier ledger records this dispatch, and its native refresh completed. No Statement/Definition changed, so no new consumer propagation event or outside surgical repair arises. Stable IDs and all proposed inventories remain present; no withdrawal is proposed.

## Local checks and handoff

- `risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-41.proof-contracts.json`: HIGH 7 periodic lemma, CRITICAL 11 energy theorem, ORDINARY 2 example; zero errors. After recording both specific complete risk reviews, rerun with `--require-reviewed`: zero errors, three items routed.
- `proof-contract.mjs` on that contract with `--strict`: zero errors, zero warnings, 3/3 items checked.
- `rendercheck.mjs` with the five explicit item paths and two explicit page paths: seven files pass YAML and real KaTeX checks.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` with the three explicit proof-bearing item paths: 3 checked, 0 failing.
- Final `proof-layout.mjs` on those same three item paths in one command: 3 items, 13 steps, 0 defects. No item edit or formatter followed it.
- Decision/ledger consistency check: exactly 3/3 scoped obligations, each references one unique nonfatal-recorded row with the exact obligation and `3a-adjudicate` ownership.
- `frontier-dependency-ledger.mjs refresh --run fluid-dynamics-all-47-2026-10-23`: refreshed and deduplicated.

No unresolved scientific prerequisite or local blocker was found. Published editorial maintenance remains OPEN as recorded above. No judging, stamping, self-certification, publication, dispatch, transition or gate battery was performed; current decision hashing and the engine gates remain engine-owned.
