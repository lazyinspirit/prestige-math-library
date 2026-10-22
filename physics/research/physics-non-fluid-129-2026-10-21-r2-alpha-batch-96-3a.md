# Batch 96 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`  
Group: `batch-96`; assigned batch: 96; role: Alpha.

## Decisions and repairs

All three routed obligations are decided in `research/physics-non-fluid-129-2026-10-21-r2-alpha-batch-96-3a-decisions.json`. The refuter artifact contains no findings; neither page has a routed decision. No obligation was added for untouched risk-only carriers.

- `touched:96:def-csm-frontier-latent-gibbs-observation`: **accepted_repair**, confidence 1. The reader explicitly types the dominated density as a measurable map from `(Theta × X × Y, (T ⊗ 2^X) ⊗ Y)` to extended nonnegative reals, and quantifies its normalization for every parameter/latent pair. This supplies exactly the finite sections needed to make the marginal likelihood jointly measurable. The reader's Definition is retained without further item edits. I synchronized its stale Definition mirror in the owning pages manifest. Closed defect: `physics-non-fluid-129-2026-10-21-r2-3a-batch-96-latent-density-domain`.
- `touched:96:thm-csm-frontier-inverse-posterior`: **amended_repair**, confidence 1. The original touch refreshed only the supplier excerpt in its contract. Independent review found two related typing slips in the proof: step 1.2 used `pi_theta` even though the arbitrary measurable parameter space is mapped into canonical parameters by `vartheta`, and step 2.1 reversed the arguments of the fixed-data likelihood section. I used `pi_vartheta(theta)` and the density `L(.,y)` with respect to the prior, and synchronized the two contract derivations. Statement and hypotheses are unchanged. Closed defect: `physics-non-fluid-129-2026-10-21-r2-3a-batch-96-posterior-typing`.
- `reader:96:1`, published `def-euclidean-inner-product`: **confirmed_nonfatal**. The malformed function-space and metric-identification prose is present at Definition lines 39–43. The explicit function-set display, finite-sum inner product, square-root norm and zero-dimensional convention remain sufficient for the owned consumer, which states its coordinate sum and assumes `k>=1`. Closed scoped disposition `nonfatal-recorded`: `physics-non-fluid-129-2026-10-21-r2-3a-batch-96-published-euclidean-wording`. Original mathematics maintenance stays OPEN; no imported or published content was edited.

## Historical comparison

The immutable pre/post snapshots show that the latent item changed from `d57c0a75b3562ea85912cc1e84ae0dfcaf10e4003fe7cb5fa487e833aad3f9e1` to `4f1443c33e7fda5c9a48648d225fc6ea3b66b1c053f2fdd550d11009613ffc77`; its original contract and manifest fingerprints did not change. The posterior item remained `a1f6a07458419851ac59ed7d51aae23f9dce0284f5e4dad4cab68f0302dd3859`, while its contract changed from `0b32a19f72c8cfcb4369416cca367eca00e94117a7b24163f93de092b3ee2173` to `dfc120daea12e3c3344759a18ad4ff7c3c83e9e54c2cbdf045d45045090b0911`.

The older Step-2 archives do not match the immediate pre-reader latent hash. To resolve that precise historical question, I extracted the contiguous 99 numbered source lines starting with this item's frontmatter from `research/physics-non-fluid-129-2026-10-21-r2-dispatch/reader-reader-96.attempt-1.log`, at log lines 7546–7644. Reassembling those lines with their original line endings reproduces the immutable pre-reader SHA256 exactly. The authenticated diff consists of the reported dominated-clause clarification and paragraph reflow in proof step 3.1. No unknown historical delta or owner authorization is asserted. The general reader/refuter reports remain unchanged.

After Alpha's proof correction and reflow, the posterior raw SHA256 is `10201f5738a5c928140ed9b2e9cb63c1f723f7cd1da0809788ffdf7e44b17af5`. The latent item still matches its post-reader hash. All seven other item hashes match both snapshots. Risk reviews now enrich all nine contract entries; the manifest change only synchronizes the latent Definition.

## Supplier-first mathematical review

The generated level order was followed, with a completed risk review recorded before moving to a higher level. Exact dependency Statements/Definitions were read directly, including every declared outside item supplier. Central normalization/covariance, standard-Borel posterior and Tonelli proofs were also read. These are scoped supplier-use reviews, not independent audits of their entire transitive published closures.

| Level | Carrier | Independently checked argument |
|---|---|---|
| 0 | `def-csm-frontier-inverse-finite-exponential` | Finite positive weights and compact-parameter envelopes meet the normalization/covariance supplier on counting measure. Full support holds also for nonminimal or singleton statistics. |
| 0 | `def-csm-frontier-pseudolikelihood` | Finite denominators are positive; potentials excluding a site cancel from its conditional. Parameter measurability follows from finite operations. Empty interaction collections and singleton spin sets are admissible. No joint normalization is claimed. |
| 0 | `lem-csm-frontier-finite-polytope-support` | Compact simplex image, least-index rational exterior approximants, unique nearest points, projection inequality and a bounded unit-vector subsequence yield the supporting direction. Auxiliary existential witnesses only prove each least-index set nonempty. No countable choice is hidden. |
| 1 | `def-csm-frontier-latent-gibbs-observation` | Continuous finite-family weights composed with the measurable canonical map give a probability-kernel mixture. Product-measurable density sections yield the exact marginal likelihood before posterior formation. |
| 1 | `thm-csm-frontier-inverse-identifiability` | Positive-weight variance vanishes precisely for a constant statistic direction. Logarithm cancellation and parameter translation prove both injectivity implications. Rank-nullity identifies full affine dimension, including zero-dimensional difference span. |
| 1 | `ex-csm-frontier-pseudolikelihood-not-joint` | Four-state enumeration gives exact posterior odds `r`, pseudo odds `r²`, with `r>1`; pseudo mass totals `2-1/cosh(1)²>1`. At zero coupling independence is consistent. |
| 2 | `thm-csm-frontier-finite-mle-existence` | Interior empirical mean gives a uniform support gap and coercivity, then compact attainment. MVT proves strict concavity and uniqueness. At a boundary mean a supporting direction gives positive likelihood derivative at every finite parameter. Both iff directions and `n>=1` are retained. |
| 2 | `thm-csm-frontier-inverse-posterior` | AC/standard-Borel existence is separate from the dominated formula. Proper prior and sigma-finite data measure satisfy Tonelli. The predictive density integrates to one; the prior completes exceptional posterior sections. Uniqueness is only outside a common data-marginal null set. |
| 3 | `ex-csm-frontier-boundary-mle` | Minimal two-state support has empirical mean at its endpoint. The independent derivative calculation is positive for every finite field; MVT gives strict increase and excludes a finite maximizer. |

Complete per-item boundary, choice, typing, supplier-use and statistical qualifications are recorded in the owning contract's nine `risk_review` objects. All carriers are mathematical. Hypothetical sample outcomes are not reported observations; neither posterior concentration, computational efficiency, physical validity nor IID behavior of MCMC output is inferred.

No TikZ/tikzcd diagram occurs in either assigned page or any assigned item. These algebraic and measure-theoretic arguments require no additional diagram.

## Sources and reading limits

[Wainwright–Jordan](https://people.eecs.berkeley.edu/~jordan/sail/readings/wainwright-jordan-fnt.pdf): read §3.2 at printed p.38, Proposition 2 and its proof at pp.61–62, Proposition 3 and its proof at p.63, §6.1 at p.146, and §6.2–6.2.1 at pp.151–153. These confirm the exponential-family, covariance, minimality, IID-likelihood and latent-variable context. The assigned results use their explicit local proofs; no general supporting-hyperplane or gradient-range theorem is imported from the source. Appendix B.1 was not independently reread.

[Geyer](https://www.stat.umn.edu/geyer/8931expfam/infinity.pdf): §2 at pp.1–2 and §4.6.3 at pp.56–57 distinguish canonical boundary behavior and faces/relative interiors. [Bayes Rules!, Chapter 2](https://www.bayesrulesbook.com/chapter-2.html): §2.3.5, equations (2.9)–(2.10), gives finite-prior normalized updating; it is contextual, not a supplier of the general kernel theorem.

[Besag](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/GibbsFieldEst/BesagPseudoLik1975.pdf): the text layer exposes only metadata. I rendered and visually read PDF page index 12, printed p.190: §3.3 equation (3.2) sums log site conditionals and the following paragraph distinguishes it from the true log likelihood. Thus the cited equation locator is confirmed, resolving the reader/refuter rendering limit. The two-spin computation remains local.

## Consumer and ledger maintenance

The latent Definition's only actual item consumer is the owned posterior, whose F1, step 1.2, and dominated ratio use the explicit product measurability. The A-page summary retains the same qualified kernel/density distinction. No outside consumer requires repair. Posterior amendments are proof-only and trigger no further interface propagation. Stable IDs, page inventories and dependencies are preserved; there is no proposed withdrawal.

The published ledger was reread and merged under an exclusively acquired `research/.published-consumer-ledger.lock`, then only that lock was released. Its existing Euclidean index row was extended rather than duplicated. The three confirmed defects have separate closed scoped ledger rows at `caught_at_stage: 3a-adjudicate`; the published row does not close mathematics-owner maintenance.

The owned cross-batch input's latent-to-posterior evidence was refreshed, a batch-96 record was appended to `briefs/tasks/frontier-dependency-ledger.md`, and the derived unified ledger was refreshed. The batch-95 and batch-88 prerequisite pages were read as page-order context; no theorem from them is used by this batch. The B-page pseudo-likelihood forward link remains nonlogical context.

## Checks and handoff

Actual focused checks:

- `risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-96.proof-contracts.json`: all nine HIGH/CRITICAL items routed before review; rerun with `--require-reviewed`: 0 errors, 9 items.
- `proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-96.proof-contracts.json --strict`: 0 errors, 0 warnings, 9/9 checked.
- `tsx-run.mjs .../reflow.mts items/thm-csm-frontier-inverse-posterior.md`: reflowed; subsequent precheck: 1 checked, 0 failing.
- `rendercheck.mjs items/thm-csm-frontier-inverse-posterior.md`: 1 file passes actual YAML/KaTeX checks.
- Final `proof-layout.mjs items/thm-csm-frontier-inverse-posterior.md`: 1 item, 4 steps, 0 defects. This was the only Alpha-edited item.
- `frontier-dependency-ledger.mjs refresh --run physics-non-fluid-129-2026-10-21-r2`: refreshed and deduplicated.
- The three appended batch-96 defect rows pass validation as an explicit temporary ledger selection.

The run-wide defect-ledger validation reported 10 taxonomy errors in other batches: batch 14 (`degree-zero-false-positive`, `projector-title`, `curvature-radial-sign`), batch 28 (`unsupported-gauge-title`, `constitutive-fragment`), batch 26 (`choice-context-edge`), and batch 46 (`marginal-locator`, `commutator-locator`, `egorov-page-locator`). Invalid values include locations `proof`/`deps` and subclasses `claim-mismatch`, `incorrect-computation`, `incorrect-citation`. These are outside this dispatch and were not edited; the owner must route append-only taxonomy correction. No defect row was fabricated for this mechanical failure.

No mathematical escalation remains for batch 96. The external taxonomy diagnostics remain an owner handoff limitation. No judgment, stamp, certification, engine transition or full gate battery was initiated; those remain engine-owned.
