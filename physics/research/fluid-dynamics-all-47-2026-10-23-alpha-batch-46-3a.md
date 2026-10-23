# Batch 46 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-46`.

Completed level 1: `def-fd-wall-defect-capillary-models`. Reviewed its full Definition, current supplier `def-fd-x00`, batch-5 contract and manifest. Residual signs, extension traces, explicit affine divergence-free tangential lift, periodic derivatives and capillary boundary equations are coherent. No general existence, nonlinear convergence or empirical conclusion is asserted. Its complete risk review is recorded in the owning contract. No carrier decision is owed for this untouched item.

The reader and refuter both identify the same current supplier omission: `def-fd-x00` uses a streamline parameter domain J without specifying an interval or endpoint derivative convention. This ancillary subdefinition is unused by the batch-46 Cartesian-operator dependency. Producer batch 5 owns any correction and its consumer propagation; no outside carrier was edited.

All four routed risk reviews and all three decision obligations are now complete; see dispositions and checks below.

Completed level 2: `thm-fd-common-wall-residual-error`, verdict `accepted_repair`, confidence 1. Independently verified all six steps and 12 supplier statements. The reader insertion defines the matrix Jacobian norm used in diffusion. Removing only that introduction reproduces exact pre hash `472c598117ea8cdea8fc7be34c6e2c621c5a6b6b58ea5ae4d90f39d0db3bbd9b`; current hash equals post `eb0c3c690e87cf3a8410159f48e6952606c1a8122c16ec38878798f894232487`. Zero-error regularization, endpoint integration, C2-wall divergence theorem under Countable Choice, periodic-face cancellation, lift expansion and dimensions checked. Public Statement unchanged; no downstream interface change. Risk review complete.

Completed level 3: `thm-fd-capillary-gravity-dispersion-energy`. All seven steps and 14 dependency statements checked, plus the gravity-mode supplier proof. Positive frequency, representative independence on the torus, smoothness, rescaling, surface/bottom conditions, and amplitude-zero case hold. Green identity applies with phi_t C1 and phi C2 on an elementary rectangular cell. Periodic flux cancellation and the negative surface Laplacian term yield E prime = 0; continuity covers both time endpoints. MIT Chapter 19 pp.78–79, equation (19.4), independently retrieved and read. Complete risk review recorded; untouched item owes no decision.

Completed level 4: `ex-fd-capillary-zero-tension-limit`. Both verification steps checked against their two exact theorem suppliers. Positive frequencies and denominators justify specialization and rationalization; the bound by sigma*k^3*tanh(kh)/(rho*omega0) proves the one-sided limit for fixed positive parameters. Amplitude zero requires no separate division. Complete risk review recorded. No empirical or nonlinear conclusion.

## Routed decisions and owner referral

- `touched:46:thm-fd-common-wall-residual-error`: `accepted_repair`, `repair_confidence: 1`, closed fixed defect `fluid-dynamics-all-47-2026-10-23-3a-batch-46-jacobian-norm`.
- `reader:46:1`: `confirmed_nonfatal`, closed disposition `nonfatal-recorded` for `fluid-dynamics-all-47-2026-10-23-3a-batch-46-streamline-domain`.
- `refuter:46:1`: `confirmed_nonfatal`, explicitly shares that same defect with `reader:46:1`. Each finding references exactly one ledger row. Original observation bindings, dependency path, producer pre-reader snapshot and routing-time producer carrier are retained verbatim in the decisions.

The current `def-fd-x00` carrier remains the observed raw SHA256 `16662d30bea7767180cb2de28fcdb07698aa44723a973ff4b43f27f0584cf962`. Its batch-5 contract and manifest still contain the same streamline domain omission. The current producer is a definition with no proof argument; all six mathematical definition suppliers were opened. None supplies a binding for J in that streamline clause. The local consumer uses its explicit row-component Cartesian operators, not the ancillary streamline definition. Therefore the finding is true and nonfatal to the assigned deductions, rather than a false positive or a repaired finding. The two reports refer to identical bytes; historical uncertainty is not introduced.

**Producer-owner action remains:** batch 5 should specify the real interval and derivative convention, then perform its own actual consumer-use checks. This referral does not clear that source omission or claim an owner resolution. No substantial mathematical prerequisite blocks the batch-46 arguments, so these finding decisions use the ordinary nonfatal-recorded disposition. The prior batch-5 definition-completeness disposition is preserved as historical evidence and is not treated as resolving this separate omitted domain.

## Sources and review limits

Independently retrieved and read [MIT 18.357 lecture notes](https://ocw.mit.edu/courses/18-357-interfacial-phenomena-fall-2010/04759cfc15c79928ca9f72a18b3864dd_MIT18_357F10_lec_all.pdf), Chapter 19, printed/PDF pp.78–79: the linearized harmonic-potential problem, bottom, kinematic and dynamic conditions and equation (19.4) match the adopted model and dispersion signs. Nonlinear terms are explicitly discarded in that derivation; the items correctly restrict their deductions to the linear mathematical system.

Independently retrieved [Wiedemann lecture notes](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf), title page and §5.1, printed pp.38–39. Its residual comparison and periodic integration-by-parts calculation are related Euler context, not an exact citation of the same-viscosity bounded-domain theorem proved locally here. The title page identifies Emil Wiedemann; the local reference metadata's first-name label “Erik” is an incidental bibliographic discrepancy referred to the owner for normalization outside these routed mathematical obligations. No mathematical conclusion depends on that label.

No fresh full-text review of Temam, ETH, Feddersen or Firing is claimed. The reader's reported retrievals and failures remain attributed to the reader; local proof gaps were not closed by assuming unread sources. Exact current item supplier statements were checked directly. This is a scoped argument and supplier-use review, not a new audit of all transitive published mathematical proofs. No defective published mathematical item was established in these routed uses, so no published-ledger write or lock was needed.

## Scope, consumer records and presentation

No item/page was edited by this adjudicator. The reader's proof-only Jacobian-norm insertion is retained. No public Statement/Definition, physical interface, inventory, status, provenance or judge record changed; no direct/indirect interface propagation was triggered. All four current item hashes match the post-reader snapshot. The two pages retain empty bodies, `page_layout: compact-v1` and the assigned inventories. No TikZ/tikzcd diagrams occur; these coordinate/energy arguments require no added diagram. All statements/definitions/examples are uninterrupted by links, with references afterward.

Updated the owned cross-batch operator-use record with the precise nonfatal outside finding and producer referral, retaining verified status only for the actual Cartesian-operator use. Refreshed the derived frontier dependency ledger through its native tool. No stable IDs were withdrawn or deleted. Added complete item-specific risk reviews to all four owning contracts in dependency order. The decisions file contains exactly the three owed obligations; untouched items and pages have no extra decisions.

## Local checks

- Initial `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-46.proof-contracts.json`: exit 0; HIGH definition/example, CRITICAL residual/wave theorems, four items routed.
- After all reviews, the same command with `--require-reviewed`: exit 0, four routed items, zero errors.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/thm-fd-common-wall-residual-error.md`: exit 0; one checked, zero failing.
- After final item state, `node tools/physics-support/proof-layout.mjs items/thm-fd-common-wall-residual-error.md`: exit 0; one item, six steps, zero defects. There were no subsequent item edits.
- `node tools/physics-support/rendercheck.mjs` on the four batch-46 item paths and the two assigned page paths: exit 0; six files, YAML and KaTeX parse cleanly.
- Native defect-ledger append: exit 0, two rows appended and derived view refreshed. One defect covers the reader/refuter duplicate finding; one covers the accepted reader proof repair.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run fluid-dynamics-all-47-2026-10-23`: exit 0, refreshed and deduplicated.

No judge, hash stamp, acceptance certification, stage transition, publication or gate battery was run. The engine owns those operations. The remaining source-domain referral is explicit and nonfatal to this batch; no batch-46 mathematical blocker remains.
