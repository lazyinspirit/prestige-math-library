# Batch 47 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-47`.

Scope: ten touched items and one A page; reader findings and refuter flags are empty. Current touched raw sources match the immutable reader-post hashes. Review proceeds in the generated dependency order. No judge cycle or stamping is performed.

## Completed level 4 review

`def-particle-gibbs-extended-target`: accept the reader repair requiring common standard-Borel spaces and jointly measurable parameterized laws, potentials and weight versions. This supplies the missing measurable family needed to integrate against the prior. The published prior/kernel joint-law lemma applies to the resulting probability kernel. SIR uses multinomial ancestors in sampled order; zero estimates contribute zero mass. At T=0 there is only the initial particle array; N>=2 is explicit. Conditional versions are posterior-a.e. with measurable identity fallback, rather than arbitrary topological-support values. AC is inherited through RN/path laws and disintegration. Exact normalization and conditional factorization will be reviewed with their theorem carriers. Risk review is complete in the contract.

Historical evidence: reconstructing the old Definition from the batch manifest, deleting the added joint-law dependency and restoring the old citation title reproduces the pre-reader raw SHA-256 exactly; this is hash-checked evidence, not an assumption from the reader report. The reader-post current raw hash also matches.

Sources opened: Andrieu–Doucet–Holenstein, https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf, §§4.4–4.5, equations (36)–(37), Theorems 4–5; Lindsten–Schön, https://arxiv.org/html/1110.2873v2, §4.1 equation (7) and Proposition 1. The latter confirms the corrected source title/version.

This level was completed before proceeding to the level 5 carriers below.

## alg-conditional-particle-gibbs

Inputs, finite-time loops, outputs and unavailable branches are explicit. Reference ancestry is fixed, and every non-reference ancestor is sampled independently with multinomial weights; all hypotheses inherit the repaired measurable family. ADH §4.3 conditional SMC and §4.5 apply. Only source-title metadata changed.

Verdict: reviewed_no_defect. Current source matches reader-post; the pre-reader archive matches the immutable raw pre hash. No unresolved obligation for this item.

## alg-pmmh

The prior is a measure; pointwise pi_0(theta)>0 was undefined for this interface. Reader correctly restricts initialization positivity to p_0(theta) Lhat>0 in the density case and delegates the density-free case to general MH accepted flow. Zero proposals are rejected; rejection retains the full auxiliary state; N=1 is admissible. m_theta is explicitly a kernel and Lhat jointly measurable. Unbiasedness plus 0<C<infinity normalizes the extended law. General-state MH supplier and ADH §4.4 Theorem 4 justify the procedure; book §16.3.5 provides the likelihood-estimate/PMMH context.

Verdict: accepted_repair. Current source matches reader-post; the pre-reader archive matches the immutable raw pre hash. No unresolved obligation for this item.

## def-particle-gibbs-backward-simulation-extended-target

This variant adds sigma-finite coordinate reference measures and target/proposal densities, and uses backward indices without genealogical equality. B is W f divided by its finite positive sum. The displayed target is Lindsten–Schön §4.1 equation (7), with times 0:T instead of 1:T. Its off-path particle and reference-ancestor factors are normalized kernels; ratios use a common conull set with identity fallback. Proper prior, evidence and parameter measurability are inherited. Only source-title metadata changed.

Verdict: reviewed_no_defect. Current source matches reader-post; the pre-reader archive matches the immutable raw pre hash. No unresolved obligation for this item.

## thm-particle-gibbs-selected-path-marginal

Read both proof steps and all cited suppliers. For each fixed lineage, Zhat W_T and its selected ancestor probabilities cancel to N^{-(T+1)} times the FK path measure. The remaining factors are ordered normalized non-reference proposal/resampling kernels. There are exactly N^{T+1} lineages, giving total mass one and the full joint posterior. RN identities are needed only a.e.; selected target paths avoid exceptional versions. A zero weight prefix has zero tilted mass; T=0 gives N lineages, not N^0. No finite positive prefix-normalizer assumption from the separate unbiasedness theorem is imported. AC is inherited through RN/path laws; finite sums require no extra choice. ADH equations (36)–(37) match; Lindsten–Schön Proposition 1 is the backward analogue, not a substitute for this local proof. Reader only normalized the citation title and Given line wrap.

Verdict: reviewed_no_defect. Current source matches reader-post; the pre-reader archive matches the immutable raw pre hash. No unresolved obligation for this item.

## alg-particle-gibbs-backward-simulation

The algorithm explicitly draws reference ancestors from B instead of fixing a genealogy; other particles use multinomial SIR. It draws a posterior parameter, regenerates the CAPF, and then samples terminal and backward indices. Finite loops include T=0; input/output extended states, failed arithmetic and good-set identity branches are specified. Lindsten–Schön Algorithms 1–3 and Proposition 2 agree. Only citation-title metadata changed.

Verdict: reviewed_no_defect, metadata. No unresolved risk.

## thm-particle-gibbs-conditional-sweep-is-gibbs

All six steps and citations reviewed. Only W_T depends on K, giving the terminal categorical conditional. The lineage cancellation gives the posterior path factor times normalized conditional SIR and a uniform N^{-(T+1)} lineage factor. Disintegration on standard-Borel products and finite unions supply measurable common conull sets; conditional exceptional events have conditional probability zero a.e. The parameter draw is conditional on the retained path, then regenerates the other particles: together these draw a joint block, rather than conditioning theta on the old full cloud. Each block preserves the target by its conditional integral identity, and null-state identity fallback leaves its integral unchanged. Positive reference weights prevent zero sums a.e.; T=0 reduces to conditional importance resampling. ADH §4.5 and local selected-path theorem match. Reader changed the source title and Given wrapping only relative to the hash-reconstructed preimage.

Verdict: reviewed_no_defect, metadata. No unresolved risk.

## thm-pmmh-exact-invariance

Read all four steps and suppliers. Nonnegative kernel integration of Lhat gives the parameter posterior and mass one. Conditional terminal-index selection and the weighted SIR unbiasedness identity apply to bounded section indicators because L_theta is finite a.e.; prefix normalizers match the supplier assumptions. The proposal is a kernel; general accepted-flow MH yields reversibility and invariance. Coordinate projections give stationary posterior marginals without asserting their processes alone are Markov, ergodic or rapidly mixing. N=1, zero-estimate proposals, zero/finite evidence and density-free priors checked. AC enters through RN/MH suppliers. ADH Theorem 4 and Särkkä–Svensson §16.3.5 agree. Minor prose reference in final step corrected from nonexistent steps 1.1–1.2 to steps 1.1 and 2.1; claim, inputs and hypotheses unchanged.

Risk-only obligation; no original touched/finding decision is owed.

## cex-particle-gibbs-missing-path-support

Read the two-step counterexample and exact support suppliers. With T=0, pi({1})=1/2 and q({1})=0, absolute continuity fails, so no finite importance-weight density can represent pi relative to q. Starting at 0 all proposed particles remain 0. This refutes well-defined usual-weight exactness without support, not a claim that every arbitrarily extended kernel is noninvariant. The example is finite, normalized and includes the missing positive-mass path explicitly. ADH Assumption 5 and Lindsten–Schön Assumption 1 enforce the needed support. Reader changed citation title and Given wrapping only.

Verdict: reviewed_no_defect, metadata. No unresolved risk.

## thm-particle-gibbs-backward-simulation-sweep-is-gibbs

Reviewed all six steps, density hypotheses and suppliers, and Lindsten–Schön §4.1 equation (7), Propositions 1–3 and Appendix A. Canceling the indexed joint proposals gives normalized CAPF factors with the reference ancestor categorical in B. Conditional on the cloud, successive weight substitutions yield W_T^{j_T} times the backward B product; finite backward summation normalizes this law. All ratios are on the declared common finite-positive domain; zero terms carry zero mass and conditional versions are a.e. Uniform N^{-(T+1)} index factors give exactly N^{T+1} copies of the posterior path law. The theta draw and CAPF form one joint block given path and indices; the subsequent index draw is its full conditional. Disintegration and the measurable null-state identity preserve the target integral. T=0 leaves just conditional importance resampling; no mixing/ergodicity conclusion is imported. Reader altered citation title and Given layout only; a hash-matched reconstruction of the exact pre-reader source confirms this.

Verdict: reviewed_no_defect. No unresolved obligation.

## ex-particle-gibbs-invariant-but-sticky

At T=0,N=2 the target/proposal weights are 99 and 1/99. Direct calculation gives P(0,1)=99/980200 and P(1,0)=9801/980200; the posterior flows both equal 9801/98020000, and P(0,1)<1/9000. The finite positive-support example therefore demonstrates invariant yet sticky behavior. Its use of the already-reviewed conditional algorithm and invariance theorem meets all hypotheses. Only citation title and Given layout changed.

Verdict: reviewed_no_defect. No unresolved obligation.

## particle-mcmc-pmmh-and-particle-gibbs

The page distinguishes PMMH retained randomness from MCWM refresh, genealogical fixed-lineage CPF from density-based CAPF/backward simulation, and invariance from mixing. The repaired summary explicitly requires measurable parameter dependence, common support, finite positive evidence and measurable weights, with posterior-a.e. formulas and identity fallback. The two parameter-plus-filter joint blocks agree with the reviewed local theorems; the ten listed items remain in their original order. The current measurability requirement is sound. Current raw page hash equals immutable reader-post; the exact pre-reader page carrier was not recovered; see the historical escalation below.

Verdict: escalated for missing historical page preimage; current mathematical review found no defect.

## Historical page escalation

The page currently has raw SHA-256 `5c158502c6f3b4a152697b0b588fe5c26007f20d7fd82afcc0cd6a6f52951133`, exactly the reader-post binding. The frozen pre-reader fingerprint is `4ce016a2172d8f3664ae9ed07e80eadbc74f039111162060f34928669597a499`. Its complete source was not found. The only matching-name archived page, in `research/bayesian-computational-statistics-62-owner-pmcmc-before/library/bayesian-computational-statistics/`, predates additional owner repairs and is not that preimage. Searching all matching-name carriers under research and .autopilot found no exact match. Reversing the reported measurability insertion with candidate whitespace layouts also failed authentication. Hashes establish change, but cannot identify its full text. The reader report is evidence, not an authenticated before source.

The current page was fully reviewed against its actual local prerequisites and is mathematically sound. Historical acceptance remains open; `historical_delta_unknown: true` is recorded. Required owner action: provide the exact frozen preimage, or explicitly authorize a current-content resolution with durable evidence under the brief. There is no invented owner authorization and no claim to have reviewed unknown bytes. This is the only blocker.

## Historical item evidence

For eight touched items, exact pre-reader sources are present in `research/bayesian-computational-statistics-62-owner-step2-gate1-45-48-before/<id>.md`; all eight raw hashes were compared with the immutable pre snapshot. The remaining two theorem preimages can be reconstructed and authenticated exactly from current reader-post source: restore the old Lindsten–Schön source title, and restore the original Facts Given paragraph newline after `multinomial SIR` for the genealogical sweep theorem, or after `full target-path support,` for the backward-sweep theorem. These transformations reproduce their immutable pre hashes. They show only source-title and Given-layout normalization, with no mathematical change. For all ten touched items, current raw hashes matched reader-post before review and the adjudicator did not change them.

The PMMH theorem was originally untouched and routed for risk review only. Its sole adjudicator change corrects the prose step reference in Proof 3.1 from `1.1–1.2` to `1.1 and 2.1`; reflow also joins its Given paragraph. No Statement or Definition changed and no judge marker was present. This risk-only correction adds no original touched/finding obligation.

## Consumer and bookkeeping review

Direct dependency/reference consumer searches for both repaired interfaces found only batch-47 items and the owned A page. The four PG definition consumers inherit the measurable-family requirement; their actual uses were read and needed no mathematical repair. PMMH's theorem uses the measurable auxiliary kernel and unbiasedness interface; MCWM uses its density branch; the finite rejection example has a discrete density and positive estimates. These actual uses remain valid. No outside consumer repair or published defect was found. Published content remains read-only and the published-consumer ledger needed no addition.

The owned page manifest's stale statement/dependency mirrors were synchronized to the actual reviewed carriers, including the reader-added joint-law edge and existing current procedural/conditional-block wording. This is metadata reconciliation, not a new content repair. Eight proof contracts had their exact citations and derivations regenerated from the current reviewed sources. All seven HIGH/CRITICAL contracts now contain specific complete risk reviews. The owned cross-batch file adds the missing prior/kernel joint-law edge and records the actual SIR use in the backward algorithm; the frontier dependency ledger records these owned consumer checks. Stable IDs and all proposed withdrawals remain present.

Three closed mathematical/editorial defect rows were appended to `research/defect-ledger.jsonl`, owned at `3a-adjudicate`: `bcs62-b47-3a-parameter-measurability`, `bcs62-b47-3a-prior-density-initialization`, and `bcs62-b47-3a-pmmh-step-reference`. The first two are reader repairs independently accepted here; the third is the small risk-review correction. Citation-title normalization has no invented mathematical defect rows. There are no reader/refuter findings to decide.

## Sources and scope limits

Authoritative passages read independently: Andrieu–Doucet–Holenstein, *Particle Markov chain Monte Carlo methods*, §§4.4–4.5 (printed pp. 294–296), equations (35)–(37), Theorems 4–5, and Appendix A (printed p. 299); Lindsten–Schön, *On the use of backward simulation in particle Markov chain Monte Carlo methods*, arXiv:1110.2873v2, §3.1 Assumption 1, §3.2 Algorithm 1, §4.1 equation (7), Propositions 1–3, Algorithms 2–3 and Appendix A.1–A.2. The latter provides density-based formulas; the local genealogical proof uses kernel RN identities and does not require state transition densities. The parameter-plus-filter steps are assessed as a joint conditional block, avoiding the source prose's loose description of a parameter draw as a full conditional on the old full cloud.

Särkkä–Svensson, *Bayesian Filtering and Smoothing*, 2nd ed., https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf, §§11.2–11.5 (printed pp. 231–244) and §16.3.5 (pp. 340–343) were downloaded and read via PyMuPDF after the web PDF reader failed. The IS support and weight identities, SIR resampling, product likelihood estimate and PMMH context agree. The book's sorted multinomial implementation is not used to justify an IID labeled law: the current local resampling algorithm explicitly returns sampled-order IID indices, which is the required genealogy interface.

All current direct cited dependencies of the routed items and the risk-only theorem were opened and reviewed for their actual uses, including probability/measure/kernel/product and standard-Borel definitions, AC, disintegration, FK targets/RN weights, SIR, the prior/kernel joint-law lemma, the SIR weighted-estimator unbiasedness proof, and general-state MH construction/invariance proof. This is not an independent audit of the entire recursive foundational closure.

## Local checks

- Risk report without `--require-reviewed`: 14 routed items, 7 HIGH/CRITICAL; zero mechanical errors.
- Reflow on the single adjudicator-edited item `items/thm-pmmh-exact-invariance.md`, followed by its precheck: 1 proof checked, 0 failures.
- Required final proof-layout command on that one changed item: 1 item, 4 steps, 0 defects; no item edit followed it.
- Precheck on the ten original touched items: 5 proof sections checked, 0 failures; five definition/algorithm carriers have no phase proof.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-47.proof-contracts.json --strict`: 14/14 checked, 0 errors, 0 warnings.
- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-47.proof-contracts.json --require-reviewed`: 14 routed items, 0 errors, all seven required risk reviews complete.
- Focused rendercheck on the edited PMMH theorem and owned A page: both parsed with the actual renderer YAML and KaTeX; no errors.

No judging, stamping, self-certification, dispatch, gate battery, publication or commit was performed. The decisions file has exactly eleven entries: ten touched-item obligations and one escalated page obligation. The engine owns hashing and gates. Next action belongs to the owner: resolve the historical page preimage escalation.
