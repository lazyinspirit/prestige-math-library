# Batch 19 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`. Group: `batch-19`.

## Completed lower-level review

The touched definition explicitly types finite row-stochastic kernels and positive detailed-balance laws. Current raw hash `76fc197e6edf29a48cab891271c59eef52368df52877607e34836e009abff2ef` matches the post snapshot; pre snapshot was `d89c4742a1258811e1787c544b20e75db50403937d3992a4355b13b92512ac3a`. The reader documents the added kernel typing and row normalization. Its rate-model conventions and physical scope are sound. Consumer uses in Markov convergence and both rate examples are valid; Crooks remains to check. No further item edit made.

### pthm-td-markov-relative-entropy-and-convergence

Independently checked steps 1.1–4.1: finite stochastic P gives uniformly convergent Poisson series and positive n=0 term; integrating the difference gives uniqueness without an ODE assumption. Positive ratios make logarithmic derivatives valid, paired edges give Dprime <=0. Finite root paths and Cauchy–Schwarz give V <=4(N-1)/a_* times edge energy; Vprime=-2 energy gives exponential convergence. N>=2 and connectedness ensure a_*>0; p(0)>0 excludes log-zero. Fixed finite paths require no AC. This is a conditional rate-model deduction, with no data premise.

### ex-td-biased-bath-shannon-entropy-decreases

Checked q01=1, q10=9, pi=(.9,.1) gives equal flux .9. Solution p1=.1+.4 exp(-10t) lies strictly between .1 and .5 for t>0; Hprime=log((1-p)/p)>0 and pprime<0. At t=0 the entropy derivative is zero, consistent with stated t>0. Connectedness and positivity meet the relative-entropy theorem; no observation or universal Shannon monotonicity is asserted.

### ex-td-disconnected-markov-relaxation

Checked isolated state retains probability 1/2, edge difference decays exp(-2t)/4, both other components stay positive and total mass is one. Limit is (1/4,1/4,1/2), and Dlimit=1/2 log(9/8)>0. The example does not apply the connected convergence theorem to a disconnected graph; it displays its missing hypothesis. No empirical premise or AC is used.

## Review scope

Reviewed all six routed obligations and every HIGH/CRITICAL carrier in the prescribed order; no acceptance is inferred from earlier author risk notes. Only the two owned OU carriers were edited. Supplier review remained read-only.

## OU review checkpoint

Opened the entire current mathematical OU proof and its batch-12 contract/manifest. Its F6 falsely assigns modulus and derivative facts to the power-series definition/addition theorem, and step 4.1 uses them without derivation. The exact entire-derivative theorem and Cartesian modulus corollary were opened and do supply the missing statements. The Brownian, predictable-integrand, general Itô integral, continuous-version, isometry and deterministic Gaussian supplier interfaces explicitly assume AC. Producer AC and Fourier repairs remain outside scope; all three routed producer findings are escalated. Local AC assumptions/dependencies and manifest/contract boundary records were repaired in the physics theorem and spectrum example. No Fourier claim is certified by this repair; OU HIGH risk remains open.

Checked the whole producer argument: deterministic integration by parts, Gaussian transition independence, moment formulas, normal-density symmetry, positive-time Fokker–Planck differentiation, uniqueness estimate, stationary Gaussian covariance and finite-time averaging follow their displayed hypotheses with AC. The averaging Fubini use is justified by E|X_sX_t|<=V on a finite square. Fourier closure would integrate exp[-(gamma-i omega)t] to -exp[-(gamma-i omega)t]/(gamma-i omega), use modulus exp(-gamma*t) for absolute integrability and vanishing endpoint, and use gamma>0 for the nonzero denominator. That is an attempted closure, not an edit or acceptance of the current producer.

The definition pre-reader text is recoverable exactly: replacing only the current second paragraph with the second paragraph of the archived batch-19 contract Definition excerpt reproduces raw SHA-256 `d89c4742a1258811e1787c544b20e75db50403937d3992a4355b13b92512ac3a` from the immutable pre snapshot. The archive is `research/physics-td-qft-rpm-62-2026-10-14-owner-numeric-boundary-binding-proposal/root-executions/2026-10-14T12-36-13-444Z/research__physics-td-qft-rpm-62-2026-10-14-batch-19.proof-contracts.json.before`. Thus the reader delta is exactly kernel typing/normalization and the explicit positive law, without a missing historical-preimage blocker.

## Finite protocol risk review

### pthm-td-finite-crooks

Checked reverse product defines a normalized law by row-stochastic kernels in reverse stage order. Positive canonical weights and detailed balance pair supports in both directions, including zero transitions; hence zero forward paths also have zero reversed mass. Endpoint Gibbs ratio and kernel ratios telescope with heat-in sign to beta(W-Delta F). Reverse transition precedes quench at i_(k-1), so reversed work is -W. Finite summation proves identity for all real w, including unattained values where both masses vanish. No convergence, AC or empirical input is used. Clarified kernel definition is used exactly as specified.

### pthm-td-finite-jarzynski

Checked base S0=pi0 and finite stage recurrence at k=1,...,m. Boltzmann quench factor converts (Z_(k-1)/Z0)pi_(k-1) into (Zk/Z0)pi_k before stationarity; summing terminal pi_m yields Zm/Z0. Positive finite Z and beta>0 justify divisions/log. Singleton, unchanged-energy and zero-entry kernels remain covered; stationarity, not mixing/reversibility, is used. Only finite canonical-sampling branch is imported; no individual-path bound or empirical certainty asserted.

### ex-td-finite-quench-work-fluctuation

Checked epsilon,beta>0 imply r=exp(-beta epsilon) in (0,1) and r<(1+r)/2<1, giving 0<Delta F<epsilon. Identity kernel is row stochastic and preserves pi1 without mixing. Canonical zero energies give probability 1/2 to each work value; exactly W=0 is below Delta F. Explicit exponential expectation matches the finite Jarzynski theorem. No synthetic value is presented as measured and no pathwise second-law claim follows.

## Final decisions and consumer disposition

| Obligation | Verdict | Disposition |
|---|---|---|
| touched:19:def-td-detailed-balance-rate-model | accepted_repair | Kernel typing/normalization repair retained; exact pre/post delta recovered. |
| reader:19:1 | escalated | Current batch-12 Fourier prerequisite gap remains. |
| refuter:19:1 | escalated | Same current Fourier defect as reader finding; preserved separately. |
| refuter:19:2 | escalated | Producer must carry inherited Choice explicitly. |
| refuter:19:3 | confirmed_fatal | Local inherited-Choice omission repaired. |
| refuter:19:4 | confirmed_fatal | Example inherited-Choice omission repaired. |

Each completed repair has confidence 1, referring only to that correction. The two local Choice corrections do not close the producer findings or accept the full OU claim. Decisions retain producer batch 12, consumer ID, immutable pre-reader fingerprint, exact dependency path, observed carrier and split carrier; no historical finding was relabelled false-positive. The producer current raw hash is recorded below. The five defect-ledger rows comprise three fixed defects and two open producer defects; reader/refuter Fourier observations share one open row. No mechanical failure received a defect row.

Actual item consumers of the clarified rate/kernel definition are exactly the Markov theorem, biased/disconnected examples and Crooks theorem. All satisfy its clarified finite row-stochastic/positive-law interface. Current explicit Definition was transcribed into the manifest and exact contract supplier quotes refreshed. The thermal theorem's only item consumer is the assigned spectrum example, whose Example/Given and mathematical dependency now carry Choice. The example has no item consumer. Page placements mention the items without deriving stronger claims. No outside consumer requiring a repair was found; no further hop was necessary. No published supplier defect was identified in the inspected uses, so the published-supplier ledger was not changed. No published/imported content, root mathematics file, engine transition or judge stamp was edited.

## Sources and proof status

All imported calculus, logarithm, finite Cauchy–Schwarz, Brownian/Itô, Gaussian, complex-exponential and Fubini suppliers were read at their exact relevant Definition/Statement sections, with positivity, finite-interval, filtration and Choice hypotheses checked. These are prerequisite interfaces, not a claimed audit of their full published transitive proofs. Current OU equation and theorem are draft batch-12 carriers; their actual proof, contract citations and manifest row were inspected, without treating source presence as acceptance.

[Seifert, 2012 review](https://arxiv.org/html/1205.4176v1), §§3.2.1–3.2.3, equations (58)–(61), supplies the equilibrium-initial ensemble work relations and reversed preparation context; §§6.1.1–6.1.2, equations (110)–(113), supplies finite master equations and detailed balance. These passages were retrieved and read. The local finite proofs use explicit stage kernels and retain their restricted scope; they do not claim reported measurements or prove bath assumptions empirically.

[Pavliotis, Stochastic Processes and Applications](https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf), §3.7, printed pp.70–71 (PDF pp.74–75), equations (3.99)–(3.104) and Proposition 3.10 proof, gives the linear stochastic solution and covariance calculation. The scalar specialization has positive damping and noise. The retrieved draft has an apparent sign typo in its displayed infinite-integral formula (3.105); no local acceptance relies on that formula. The local OU covariance is independently checked through the finite-time integral. Fourier support and repository-specific Choice requirements must be supplied in the current producer itself; textbook background does not fill undeclared interfaces. Other bibliographic sources in the carriers were not independently re-retrieved in this adjudication, and no full-source reading is claimed for them.

This batch contains no empirical measurements. Temperatures and energies are declared idealized model parameters, the Einstein relation and canonical preparation are adopted premises, and all reviewed stochastic formulas are conditional predictions. There are no fabricated sample counts, calibration claims, error rates or statistical precision.

## Local checks and blockers

- Initial `risk-report.mjs` without `--require-reviewed`: exit 0, all 19 items routed. Each original HIGH/CRITICAL proof was read; six finite-model risk reviews were completed with specific argument and boundary evidence. The Choice corrections make the thermal theorem CRITICAL and its example HIGH; both current risk reviews explicitly remain open for batch 12.
- Scoped reflow on the two edited OU items: exit 0, unchanged.
- Scoped `precheck.mts` on the two edited OU items: exit 0, 2 checked, 0 failing.
- Scoped `rendercheck.mjs` on the two edited OU items: exit 0, both YAML and every mathematics span parse with the actual renderer parser/KaTeX.
- Final strict `proof-contract.mjs` on the owning batch-19 contract: exit 0, 0 errors, 0 warnings, 19/19 items checked. An initial run exposed five stale rate-definition citation excerpts and two unanchored Choice boundary records; those metadata records were corrected and the strict check rerun successfully. These mechanical failures created no defect rows.
- Required final `proof-layout.mjs` on both changed item paths, batched in one command after reflow/final item edits: exit 1 before rendering. Exact cause: `ERR_MODULE_NOT_FOUND: Cannot find package '@/components' imported from /Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`, Node v26.10.0. No item edit occurred afterward. This is not a layout pass or a mathematical defect; owner environment resolution is required.
- Frontier dependency ledger refresh: exit 0, refreshed and deduplicated. Only the owned current OU supplier row was changed to open; unrelated prior rows were preserved.
- Defect-ledger append: exit 0, five rows appended under the tool's serialization lock and the generated view refreshed.
- Required `risk-report.mjs --require-reviewed`: exit 1 with exactly the thermal theorem and spectrum example lacking completed Alpha reviews, intentionally open pending the producer resolution. No author risk note was used to hide this hold.

Required owner action: route batch-12 Fourier and explicit-Choice corrections, review the corrected current producer proof and its actual prerequisites, then resolve these three producer obligations and both risk holds. Repair strategy is the exact complex derivative/modulus suppliers plus the antiderivative/absolute-convergence argument detailed above; explicit Choice must be carried into its Statement/deps/contract/manifest and all affected consumers. Separately resolve the external renderer alias so the required layout scan can run. No owner resolution has yet been supplied. No hash stamping, judgment, self-certification or gate battery was initiated.

Current raw SHA-256 `thm-tdmath-ornstein-uhlenbeck-model`: `34b639b59669c2ee9dd856702ae2b37c80b985195f2d991025375c4b65d717e4`.

Current raw SHA-256 `pthm-td-ornstein-uhlenbeck-thermal-fluctuations`: `0bec25168f15be077a4a3412adab04c620d13147ef144e226c444dceed8797b3`.

Current raw SHA-256 `ex-td-ornstein-uhlenbeck-spectrum`: `c44b502e01a769bba388e89622e3f4ea1bca49e5c6e086b229ffae0403f4441f`.

Final bookkeeping checks: exact manual scope comparison found all 6/6 obligations once, no extras, and one defect reference per obligation. `node tools/physics-support/defect-ledger.mjs validate --run physics-td-qft-rpm-62-2026-10-14` exited 0: 13 current run defect rows checked, 0 errors. This validates records, not proof acceptance or closure.
