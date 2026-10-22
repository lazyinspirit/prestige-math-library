# Batch 21 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-21`.

Read workspace rules, dispatched order/scope, original reader/findings/refuter, and both hash snapshots. All six pre/post item and contract fingerprints and both page fingerprints agree; touched/page/refuter obligations are empty. Only `reader:21:1` is owed. No published/imported source is editable.

## Completed level 0 review

- `def-emg-fx-wave-currents`: smooth local tensor and current types, signature, connection, finite singular-chain flux, empty/null/degenerate faces and inherited AC_omega checked against its five actual supplier interfaces. Restrict a smooth simplex extension to the inverse image of open U to define the local pullback. No defect found.
- `thm-emg-fx-coupled-potential-energy`: all three proof steps checked against the exact two supplier statements. Symmetric time-independent V supplies the energy derivative; bounded V and locally uniform Schwartz bounds justify local differentiation and vanishing boundary flux. PSD and L2 Cauchy–Schwarz yield Eprime<=sqrt(2E)||S||_2; epsilon regularization covers zero energy. No decay or full perturbation conclusion follows.

Both current risk reviews are complete in the owning contract before proceeding to level 1. Sources opened: Dafermos–Rodnianski, https://arxiv.org/pdf/0811.0354, massless current template Appendix D; Giorgi, https://arxiv.org/pdf/1904.04926, introduction sections 1.2–1.3, coupled transformed system and distinct low modes. These sources supply context; the potential/source and matrix calculations are local. No assertion of full-paper review.

## Routed finding `reader:21:1`

Verdict: **false_positive**. The exact Definition qualifies its claim by “in length coordinates”. In general [g_ab]=m^2/([x^a][x^b]); hence components in coordinates all measured in metres are dimensionless. The displayed polar chart is mixed: [t]=[r]=m, [theta]=[phi]=1, so [g_theta_theta]=[g_phi_phi]=m^2. This does not contradict the qualified sentence, which does not call angles length coordinates. The current consumer uses the correct inverse angular block r^(-2) gamma^(AB), density r^2 sin(theta), and potential unit m^(-2) in steps 1.2–3.1. No source edit is warranted.

Closed adjudication row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-21-reader-1-units` (false-positive disposition). The original report is preserved. No defective published supplier is confirmed, so the published-maintenance ledger and its classification index require no entry. No historical preimage is claimed reconstructed; the routed split guard remains distinct from the original reader observation, whose observed_source was null.

## lem-emg-fx-multiplier-divergence

Alpha batch-21: checked all three steps and exact current observer, projection, connection and wave-current suppliers. Metric compatibility and symmetric scalar Hessian cancel the kinetic derivative terms, leaving s du minus u^2 dV/2. Symmetry yields K with the stated sign; Killing, X(V)=0 and s=0 give zero divergence. At a point decompose X=alpha n+w with alpha>0 and |w|<alpha; dual rest-space Cauchy–Schwarz proves the displayed lower bound including V=0 and du=0. Empty local domains are vacuous; no boundary flux or null normal is claimed. Reader/refuter report no local defect; no empirical input or additional choice is used.

## lem-emg-fx-rn-scalar-wave-potential

Alpha batch-21: checked all four steps against exact current RN, divergence-density, primitive, inverse-function and positive-energy interfaces. Q^2>=0 and strict Q^2<m^2 give rplus>0, positive simple exterior f and fprime>0, including Q=0 and ell=0. The integral coordinate has logarithmic negative-infinity horizon limit, positive-infinity far limit, and compatible smooth inverses. Normalized Y is nonzero and recovers smooth phi at one fixed point. Computing determinant r^4 sin^2(theta), inverse blocks and U=r phi gives V=f(ell(ell+1)/r^2+fprime/r); positive with zero limits, hence bounded. Conditional Schwartz bounds justify energy conservation; radial derivative coefficient f vanishes at the horizon. Published units sentence says in length coordinates, not in the mixed polar chart; g_theta theta=r^2 has units m^2 there, consistently. Reader units objection is a false positive under the exact qualification. No full Einstein–Maxwell or empirical inference.

## prop-emg-fx-conditional-bootstrap

Alpha batch-21: checked all three steps and actual twelve supplier interfaces. AC implies continuity; on positive compact intervals E has positive minimum, so x^(-1/2) is Lipschitz by MVT and composition is AC. The a.e. chain rule reverses the inequality with its negative factor; AC_omega/DC FTC integrates it. Integral kernel is [1-(1+t)^(-delta)]/delta and the strict C sqrt(E0)<2 delta threshold keeps the denominator positive. Components after a zero cannot restart: integrate from s>a and let E(s) approach zero, contradicting finite E(t)^(-1/2). C=0, t=0 and finite/infinite existence intervals are covered. Explicit logarithmic equality solution blows up at exp(2/(C sqrt(E0)))-1 only when C>0. No PDE continuation, RN inequality or empirical conclusion is inferred. Reader/refuter report no defect.

## Current-source and review limits

- `def-emg-fx-wave-currents`: unchanged raw SHA256 `2ea5b1f6cdde97c9169461a96c2896b854a63282b09d2e2638eb97acd86d5b37`.
- `lem-emg-fx-multiplier-divergence`: unchanged raw SHA256 `6bb5a2ecf7a3003161f60d02d41b24562781f6c4d10caa7e0d9829471f206648`.
- `thm-emg-fx-coupled-potential-energy`: unchanged raw SHA256 `03d275476087ff7f3579c6756a305630ba09168dcbbd634092343533f55c51bd`.
- `lem-emg-fx-rn-scalar-wave-potential`: unchanged raw SHA256 `d5a4ac8d00c01466cc99a8655e2f133fd2e406e3a9e4d60f57ef2a533d3b1ac9`.
- `prop-emg-fx-conditional-bootstrap`: unchanged raw SHA256 `2530f04f1f78639e3331667f2ddab195882003e1bd8efd8747275756cedae900`.
- `cex-emg-fx-negative-bound-state`: unchanged raw SHA256 `29a14241400d3d2384772c1d17585570d2ea1bfae3949cd0804d53c97db828fa`.

The five HIGH/CRITICAL reviews were completed in generated order, each recorded before the next review. Contract edits update only those five risk_review objects; no item, public interface, manifest, import or verification stamp changed. The counterexample uses w=sech(x), wprimeprime=w-2w^3, V=-2w^2 and U=exp(t)w, giving the claimed finite initial norm and growth. Both pages are frontmatter-only; all six items and both pages have no TikZ/tikzcd diagrams, and no diagram is needed for these explicit identities. There are no proposed withdrawals or changed-interface consumer repairs.

Dependency review covered each actual declared supplier Statement/Definition at the hypotheses used, including inherited AC_omega and the bootstrap FTC supplier's DC. It does not claim a new audit of every published supplier proof or its transitive foundations. Local algebra was independently checked. The initial planning statement that the units finding was an error was superseded after reading its full coordinate qualification.

## Local checks and handoff

- Initial `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-21.proof-contracts.json`: exit 0; five HIGH/CRITICAL items routed.
- Final same command with `--require-reviewed`: exit 0; 0 errors, six items routed.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-21.proof-contracts.json --strict`: exit 0; 0 errors, 0 warnings, 6/6 checked. An earlier lookup used the nonexistent plural `proof-contracts.mjs`; it ran no validator and supplied no pass.
- Owned decision/ledger consistency and unchanged-current-item SHA256 check: pass; exactly `reader:21:1`, one closed false-positive row, all six unchanged item hashes match the post-reader snapshot.
- Item precheck, formatter and final proof-layout are not applicable: no item file was edited. No judge, stamp, certification, engine transition or gate battery was initiated. Ledger append used the tool's serialized append with `--no-render`; generated aggregate rendering remains engine-owned.

No unresolved scientific blocker or required consumer repair remains in this dispatch. The engine still owns hash stamping and gate acceptance.
