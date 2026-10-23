# Batch 25 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`. Group: `batch-25`; original scope assignment group `l` is unchanged. Scope: batch 25 only. All 13 owed decisions are supplied: six touched carriers and seven reader findings. No page or refuter decision is owed. Three reader repairs are accepted and three amended. All seven reader findings are confirmed nonfatal, recorded as published-owner maintenance. Nine required risk reviews are complete. This is local adjudication evidence, not judgment, certification, publication, or a completed engine gate battery.

## Decisions and changes

Reviewed the current items in the generated dependency order, checking the authored arguments and exact supplier statements against the reader and refuter evidence. The pre/post snapshots confirm raw item changes for all six touched subjects. The accepted items still match their post-reader raw hashes; the three amendments differ. No missing historical preimage was represented as an owner-authorized current-content resolution.

| Obligation | Verdict | Evidence and disposition |
|---|---|---|
| `touched:25:prop-fd-maxwellian-moments` | `accepted_repair` | Tonelli establishes absolute integrability of nonnegative Gaussian product majorants before signed Fubini. Affine scaling gives mass n, centered stress n theta I3, zero heat flux and the stated total energy. Statement unchanged. |
| `touched:25:def-fd-conserving-bgk` | `accepted_repair` | Relaxation time tau>0 is declared before use, with units seconds. The admissible domain, moment-matched target and operator are unchanged. |
| `touched:25:prop-fd-kinetic-moment-balances` | `amended_repair` | The reader added spacetime integrability, but ordinary L1_loc on I x Omega x R3 controls only compact velocity sets. The Statement now explicitly requires finite weighted integrals on every compact time interval times Omega times ALL velocities. Time-density and matching spatial-flux derivatives use the exact displayed majorants. Fubini then applies to the full moment fields. |
| `touched:25:cex-fd-collision-support` | `amended_repair` | Retain the reader's complete refuted implication. Require nu-measurable collision evaluations so its production integral is well-formed. The concrete Dirac model now declares Borel-measurable inputs: Lebesgue measurability alone does not ensure measurability on the collision set's relative Borel sigma-algebra. The smooth positive witness is unchanged. |
| `touched:25:thm-fd-controlled-euler-passage` | `amended_repair` | Retain explicit epsilon-downarrow-zero convergence and full-velocity Gaussian/error bounds. Fix remaining F5 wording: integration by parts needs continuity of the relevant coordinate derivative, rather than C1 regularity of every moment flux. Degree-three spacetime and degree-two initial errors control every term. |
| `touched:25:ex-fd-bgk-initial-layer` | `accepted_repair` | Retain Tonelli before Fubini and normalized covariance theta I3, equivalently unnormalized tensor n theta I3. Positive Gaussian variances give all required moments and entropy. Nonconstant log-cosh curvature proves non-Gaussianity. |

The risk-only carrier `thm-fd-kinetic-h` received a necessary local repair without an extra routed decision. Its three entropy/derivative integrability expressions now belong to L1 on I0 x Omega x ALL R3 for every compact time interval I0. The previous all-variable L1_loc condition alone did not supply the unbounded-velocity Fubini premise in step 3.1. The separate global differentiability envelope and the global entropy conclusion are unchanged. This repair and all completed touched repairs have `repair_confidence: 1` in the corresponding records. No current edited item had a judge record to invalidate.

The owning manifest's three changed Statements and the actual affected contract derivations were synchronized. Exact supplier quotations were refreshed within batch 25 for Euler's moment supplier, homogeneous BGK's operator supplier, and the scope remark's Euler supplier. Stable IDs, page inventories, draft statuses, compact-layout flags and logical edges remain intact. No page body was authored.

## Mathematical review and risk evidence

Each item was checkpointed during the ordered review; the durable final details are in its owning contract's `risk_review`.

- `def-fd-kinetic-density`: the completed pushforward of Lebesgue measure on the half-open cell has unnormalised volume L1 L2 L3. AC_omega, sigma-finite products and third moments are explicit. Zero density leaves u,T undefined; zero temperature does not define the positive Gaussian.
- `prop-fd-maxwellian-moments`: positive theta permits coordinate rescaling. Polynomial Gaussian decay establishes absolute moments; oddness and one-dimensional integration by parts give all tensor and energy formulas.
- `prop-fd-kinetic-moment-balances`: collision brackets for 1, each coordinate and squared speed vanish. Required weak-test membership includes absolute convergence. Expanding v=u+c gives energy flux Eu+Pu+q with the correct coefficient on Pu. Full-velocity slab integrability is now explicit.
- `thm-fd-collision-maxwellian`: checked all six steps and both directions. Nonnegative continuous production and full support force collision balance everywhere. Apply one-variable Peano Taylor to s mapped to g(a+s xi); no multivariable Taylor theorem is silently imported. The scalar Hessian is constant by independent-coordinate variation using C2 regularity. Integrability excludes nonnegative quadratic coefficient. Weak annihilation remains conditional on collision-domain membership.
- `thm-fd-kinetic-h`: checked the five steps. Chain/product differentiation gives entropy derivative; periodic transport integrates to zero. Test 1 removes the constant and the log bracket gives the factor -1/4. The local weak identity has h eta_t + J dot grad eta - D eta, with the correct sign. No interchange involving an arbitrary collision measure is used.
- `thm-fd-controlled-euler-passage`: bounded n,u,T and a positive lower temperature bound control Gaussian third moments uniformly. Weighted convergence gives full-velocity slab integrability for sufficiently small epsilon. Invariant brackets remove the scaled collision contribution. Initial traces, periodic faces, both weights and the bump argument from distributional to pointwise equations were checked. No kinetic existence or convergence theorem is inferred.
- `thm-fd-homogeneous-bgk-limit`: bounded moment functionals commute with the defining weighted-L1 derivative. Their conservation fixes the Maxwellian target. The scalar integrating factor proves uniqueness (equivalently test against bounded linear functionals). The exact norm and epsilon tau time-integral bound hold; t=0 is excluded from the general uniform-equilibrium conclusion.
- `prop-fd-bgk-entropy-rate`: Phi(z)=z log z-z+1 has its nonnegative continuous convex extension at zero. Finite absolute entropy and quadratic log M permit moment cancellation. Convex interpolation bounds relative entropy and also supplies absolute finiteness of the evolved reference-relative entropy. No logarithmic differentiation at zeros of initial data is used.
- `ex-fd-bgk-initial-layer`: Sigma is positive definite because 0<a²<theta. Product Gaussian bounds give entropy and third moments. The normalized covariance is Sigma+a² e1 tensor e1=theta I3. Nonconstant logarithmic curvature and continuity give a strictly positive initial weighted-L1 distance, which prevents uniform convergence including t=0.

The ordinary counterexample witness was also checked explicitly: its oscillatory factor is bounded between positive constants; the two logarithmic second derivatives are -1/16 and -1/5 in the dimensionless coordinate. The zero-collision Dirac measure is symmetric and not full support. All declared tests are measurable in the corrected Borel input domain and both weak integrals vanish.

No TikZ/tikzcd diagrams occur in the assigned current carriers. None is required to substantiate these analytic calculations. All scoped items are mathematical deductions for explicit models; no measured input, experimental observation, or statistical precision is asserted.

## Exact suppliers and source limits

Read the current cited dependency statements, including their conditions, rather than treating review reports as verdicts:

- `def-countable-choice`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, Tonelli and L1 Fubini: countable-choice and sigma-finiteness conditions, nonnegative integrals before absolute integrability, and signed rearrangement only after L1 control.
- `def-tdmath-elastic-collision-kernel` and `thm-tdmath-regular-collision-entropy`: declared operator/test domains, absolute weak identities, periodic entropy envelopes and full-support equality conditions. These are adopted mathematical interfaces, not microscopic derivations.
- `thm-differentiation-under-the-integral-sign`: integrable sections, measurable derivatives, and one common integrable derivative majorant outside one null set. `thm-chain-rule`, `thm-algebra-of-derivatives`, `thm-ftc-second-part`, logarithm derivative and MVT supply the exact coordinate calculus used.
- `thm-gaussian-integral`, `thm-of-square-roots`, `thm-substitution-for-improper-integrals`, `thm-integration-by-parts`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `thm-exponential-beats-every-polynomial`: positive affine substitutions, compact smooth truncations and limits, and nonnegative Riemann/Lebesgue agreement under AC_omega.
- `thm-taylor-peano-remainder` supplies the one-variable C2 expansion. `lem-smooth-bump-between-concentric-euclidean-balls` supplies a nonnegative bump with support strictly inside the larger ball; its actual construction/proof was inspected.

External inspection was limited to the passages actually retrieved: Tong's §§2.3, 2.4.1–2.4.2 and 2.5.1 context and displayed formulas; Golse's §3.2 Proposition 3.3 statement and opening proof; Zamponi's title/contents and a later formal-expansion passage. No complete external-text audit or independent retrieval of every cited book is claimed. In particular, Zamponi's full §3.2 argument was not independently reread here; the conditional Euler proof was checked locally instead. Golse's published kernel hypotheses are not substituted for this batch's arbitrary-measure full-support hypotheses. The relevant source links are:

- [Tong, Kinetic Theory, Part 2](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf), printed pp.32–46; relaxation-time approximation at p.46.
- [Golse, The Boltzmann Equation and Its Hydrodynamic Limits](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf), §3.2, Proposition 3.3, printed p.23.
- [Zamponi, From the Boltzmann Equation to Hydrodynamic Models](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf), contents labels §3 as formal hydrodynamical limits.

## Published findings

All seven routed findings persist in current published files. Each has exactly one closed `nonfatal-recorded` row caught at `3a-adjudicate`, referenced by its reader decision; this closes the scoped disposition, not the published repair.

| Reader obligation | Published subject | Confirmed issue |
|---|---|---|
| `reader:25:1` | `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` | Duplicated prose beginning “Under countable choice, Assuming countable choice” and malformed theorem-reference prose. The actual measurable-set criterion and restriction formula remain clear. |
| `reader:25:2` | `def-product-measure-on-sigma-finite-spaces` | Malformed “well-defined by For sigma-finite measures” sentence. The displayed product formula and exact section-measure suppliers remain intelligible. |
| `reader:25:3` | `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` | Hunter Definition 2.10 title linked to a different author's work. |
| `reader:25:4` | `thm-lebesgue-measure-is-a-complete-measure` | Hunter Theorem 2.9/Proposition 2.12 title linked to that different work. |
| `reader:25:5` | `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets` | Hunter Chapter 2 title linked to that different work. |
| `reader:25:6` | `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` | Hunter Theorem 5.14 title linked to that different work. |
| `reader:25:7` | `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` | Hunter Theorem 5.18 title linked to that different work. |

The actual [linked PDF](https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf), page 1, identifies François Golse's *Mean-Field Limits in Statistical Dynamics*, arXiv:2201.02005v1. Its title page was independently retrieved. These source mismatches do not invalidate the independently checked measure statements and kinetic computations. Published/imported sources remain read-only. The published ledger and its deduplicated six-subject index were merged after acquiring `research/.published-consumer-ledger.lock`; only this process's lock was released. The strategy is mathematics-owner prose cleanup and verified replacement Hunter URLs/locators, preserving formulas and hypotheses.

## Consumers and owner routes

- Moment Statement change: the sole direct item consumer is owned `thm-fd-controlled-euler-passage`. Its full-slab weighted convergence supplies the corrected premise. Its contract quote is current; no outside item repair is needed.
- Kinetic-H Statement change: the sole direct item consumer is batch-26 `pthm-fd-boltzmann-entropy`. Its uniform velocity majorants for all three expressions imply the corrected assumption, so its physical claim, proof and empirical qualifications remain sound. **Owner route remains open:** refresh its F1 exact quotation in `research/fluid-dynamics-all-47-2026-10-23-batch-26.proof-contracts.json` and rerun its focused strict contract check before engine closure. This outside contract was not edited.
- The BGK Definition clarification is compatible with owned homogeneous/entropy consumers and outside `post-fd-bgk-relaxation` and `pthm-fd-bgk-equilibration`; their actual operator, admissible moments and tau uses were inspected. No propagated content repair is needed.
- The counterexample and covariance example have no direct item consumers. Euler's scope remark remains accurate and its owned exact supplier quotation was refreshed. The two owned pages retain empty bodies and inventories.

Consumer evidence and the outside contract route are recorded in `briefs/tasks/frontier-dependency-ledger.md`. No withdrawal is proposed. No substantial missing mathematical prerequisite remains in the locally corrected proofs; there is no invented owner resolution or hidden scientific escalation.

## Local checks and limitations

- Initial risk report: 13 routed items, nine HIGH/CRITICAL. Final `risk-report.mjs ...batch-25.proof-contracts.json --require-reviewed`: 0 errors, 13 routed, all nine required reviews complete.
- `proof-contract.mjs ...batch-25.proof-contracts.json --strict`: final 13/13 checked, 0 errors, 0 warnings. Earlier quote mismatches in owned consumers were refreshed and this final check passed.
- Reflow on Alpha's four edited items: unchanged. Precheck: 4 checked, 0 failing. Rendercheck on those four: all frontmatter/math parsed, no delimiter or rendering errors.
- Final required `proof-layout.mjs`, batched across the six touched items plus kinetic H: **7 items, 19 steps, 0 defects**. No item edit or formatter ran afterward.
- Explicit decision coverage check: exactly the 13 scope obligations, no duplicates or additions. Every referenced defect row resolves to the same subject at stage 3a with a closed disposition. The serialized native append accepted all 16 new rows, including the separate risk-only H repair and distinct example/counterexample defects.
- Direct primary-section scan found no inline hyperlinks. No page-summary pass or diagram mutation was performed.
- Read-only batch-26 check: `proof-contract.mjs ...batch-26.proof-contracts.json --strict --items pthm-fd-boltzmann-entropy` reports exactly the F1 supplier quotation mismatch described above (1 checked, 1 error). This is pending owner synchronization, not a claimed passing check.
- Run-wide `defect-ledger.mjs validate --run fluid-dynamics-all-47-2026-10-23` reports two outside errors in `fluid-dynamics-all-47-2026-10-23-3a-batch-33-sobol-expansion`: disposition `repaired` is outside the closed enum and `prevention.kind` is invalid. Route both fields to the batch-33 owner; Alpha did not edit that row or create a new mathematical defect for this mechanical failure.

The engine owns decision hashes, current-input certification and subsequent gates. Owner follow-up on the batch-26 quotation and batch-33 ledger fields is required before global closure.
