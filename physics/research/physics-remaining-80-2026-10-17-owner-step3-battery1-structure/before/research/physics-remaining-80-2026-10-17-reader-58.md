# Step 3a reader report — batch 58

Run: `physics-remaining-80-2026-10-17`  
Role: read-only reader  
Scope: batch `58` only

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity/tgr-c01.md`
- `library/thermodynamics-and-general-relativity/tgr-c01-examples.md`

Assigned items:

- `items/post-tgr-perfect-fluid-model.md`
- `items/pthm-tgr-local-first-law.md`
- `items/pthm-tgr-perfect-entropy-circulation.md`
- `items/ex-tgr-uniform-perfect-background.md`

Claim-relevant in-run suppliers, read before their consumers:

- `items/def-tgr-local-fluid-state.md` (batch 53)
- `items/lem-tgr-local-gibbs-euler.md` (batch 53)
- `items/def-tgr-framework-units.md` (batch 54)
- `items/post-tgr-local-material-thermodynamics.md` (batch 54; pre-reader bytes and the later current text were both inspected)
- `items/lem-tgr-perfect-fluid-projection.md` (batch 55)
- `items/lem-tgr-carter-circulation.md` (batch 55)

Other opened mathematical suppliers used along those paths:

- `items/def-countable-choice.md`
- `items/cor-zero-derivative-implies-constant.md`
- `items/def-gr-smooth-lorentzian-objects.md`
- `items/def-gr-observer-and-rest-space.md`
- `items/def-gr-observer-congruence-and-adapted-charts.md`
- `items/def-gr-timelike-worldline-and-proper-time.md`
- `items/def-gr-local-frame-and-tetrad-fields.md`
- `items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md`
- `items/def-gr-killing-field.md`
- `items/thm-gr-killing-and-on-shell-matter-identities.md`
- `items/def-tgr-spacelike-current-slab.md`
- `items/thm-tgr-finite-current-production-balance.md`
- `items/lem-tgr-killing-energy-normalization.md`
- `items/lem-tdmath-local-contraction-flow.md`
- `items/lem-tdmath-variational-flow-and-commutation.md`
- `items/thm-tdmath-local-implicit-rank.md`
- `items/thm-chain-rule-for-total-derivatives.md`
- `items/lem-tdmath-concave-affine-maximizer-and-hessian.md`

Opened prerequisite pages:

- `library/thermodynamics-and-general-relativity/tgr-i01.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc01.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc02.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mi01.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mi03.md`
- `library/special-relativity/sr-observer-measurements.md`

Contextual evidence consulted: the batch-58 manifest and proof-contract file; batch-55 current readiness records, author-check, coverage, and notes; the batch-54 pre-reader hash record and archived source preimage for `post-tgr-local-material-thermodynamics`; and selective import-record lookups for the published mathematical suppliers. These are evidence about scope and source currency, not verdicts on the mathematics.

## Review and source evidence

The postulate `post-tgr-perfect-fluid-model` distinguishes adopted current/stress balances from deductions and does not claim existence, universal material validity, or empirical confirmation. Its state map, field regularity, Lorentzian signature, perfect stress/current, and local scope are explicit through the cited local-state and units definitions.

The local first-law proof is a correct conditional state-function calculation on its explicitly stated open parcel domain. Its derivatives with respect to entropy, volume, and the continuous marker amount agree with the supplied (C^2) state function. The Gibbs–Duhem identity follows by differentiating the Gibbs/Euler identities and cancelling the already proved differential terms.

The entropy/circulation proof correctly applies the isolated perfect-fluid projection identities and the supplied local-loop identity. It divides only under (n,T>0), and it does not infer spatially constant entropy from (D\sigma_p=0). The finite-loop flow interval and closed-curve condition are supplied by the exact current mathematical dependency. The example's constant fields give vanishing local balances on the prescribed Minkowski background, and the boosted contraction is ((\varepsilon_0+p_0)\gamma^2-p_0). It is explicitly not a coupled Einstein solution or an observation.

The cited source material was checked at the relevant locations. Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, arXiv:gr-qc/0603009: §4.3, PDF pp. 15–16, equations (4.10)–(4.14), for rest-energy-inclusive state functions and thermodynamic derivatives; §§5.2–5.4, PDF pp. 17–19, for perfect-fluid balance projections; §§6.1–6.3, PDF pp. 20–24, for the Carter–Lichnerowicz identity and entropy per particle; §7.5, PDF pp. 33–34, for the isentropic relativistic Kelvin circulation theorem. Borghini, *Elements of Hydrodynamics* (2015): §I.1.3, PDF pp. 4–5, for the local-equilibrium modeling premise; §IX.3.1, PDF pp. 139–141, for perfect current/stress; and §IX.3.2, PDF pp. 141–142, for entropy-current conservation. The BIPM 9th edition SI Brochure v4.01, §2.2, PDF pp. 124–125, supports the exact SI values used by the units supplier; the 2022 CODATA source identifies (G) as adjusted with uncertainty.

Three uneditable findings remain in the JSON below. The historical batch-54 observation is bound to the immutable pre-reader bytes: the archived source preimage matches `step3-hash-54-pre.json` at SHA-256 `71b83888a1eb9397f782566c37c1b6890096a1e9d807b31f73676b37c35ff9e7` and matches the text first read. The live `post-tgr-local-material-thermodynamics` file changed during this review; its current SHA-256 is `c5b1beb8bcdffc660a7667837b9e2f9bf1826681618014e6a737c1f468b4b021`. The current text explicitly gives (N_p>0), (V>0), and ((V/N_p,S/N_p)\in D). This report does not attribute that edit to the reader and does not describe the corrected current text as the observed defect.

For the Carter-circulation supplier, the local proof is self-contained, but its Gourgoulhon locator in `items/lem-tgr-carter-circulation.md` names §§6.1–6.3 for “restricted isentropic circulation”; the integrated Kelvin theorem is actually in §7.5, PDF pp. 33–34, equations (7.36)–(7.43). The assigned entropy theorem reaches this supplier. The source locator should include §7.5 or be narrowed to the local identity actually used.

The C01 page summary also says the current readiness records identify stale MC01 input hashes. The current Step 1 records for both batch-55 suppliers say `decision: ready`, `owner: true`; the current MC01 supplier records for `def-tgr-local-fluid-state` and `lem-tgr-local-gibbs-euler` also say `decision: ready`, `owner: true`. The page's present-tense status sentence is therefore stale.

## Page verdicts

- `tgr-c01`: the three assigned items and the conditional mathematical scope are summarized accurately. The final present-tense sentence about current readiness records is a false status claim and requires page-owner correction. No page edit was made.
- `tgr-c01-examples`: the summary accurately states the prescribed-background example and its limit; no defect found.

## Edits and blockers

No edits were made. This was a read-only assignment. No formatter, precheck, or proof-layout command was run because no item was edited. No unresolved mathematical uncertainty blocks the reviewed deductions. The historical batch-54 defect and the current batch-55 citation and page-status findings remain for routing/adjudication.

Coverage limitation: all assigned pages/items and claim-relevant in-run suppliers above were inspected, but this was not a re-audit of every transitive proof in the published mathematical library or every unrelated clause in the broad TGR units supplier. External PDFs were inspected at the cited relevant sections, not read cover-to-cover. Batch 58 contains no experiment item or measured statistical result.
