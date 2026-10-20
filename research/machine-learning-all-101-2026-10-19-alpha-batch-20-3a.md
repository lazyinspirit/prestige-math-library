# Batch 20 Step 3a adjudication

Run: machine-learning-all-101-2026-10-19. Group: batch-20.

Nine touched obligations; no page, reader or refuter findings. Scope and generated dependency order govern this review. Reader and refuter reports contain no findings.

Level 0 completed

- `lem-log-determinant-strictly-concave-on-positive-definite-matrices`: reviewed_no_defect, audit_enrichment. All five proof steps and exact direct supplier statements checked. The added determinant expansion closes routine algebra; no mathematical defect established. Strict second derivative and the two secant slopes prove the full claim; equal endpoints give equality.
- `thm-equal-spherical-mixture-low-variance-kmeans-limit`: reviewed_no_defect, metadata (proof spacing). All four steps and exponential supplier checked. Positive fixed nearest-weight sum bounds the logarithm; least-index labels attain the finite objective. Ties, K=1 and zero distances checked.

Both current risk reviews recorded in the batch contract before moving higher. Source: Boyd and Vandenberghe, Convex Optimization §3.1.5, printed pp.74–75, https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf (retrieved and read; strictness also follows independently from the opened local suppliers). No item edited, no Statement/Definition changed, and no consumer repair triggered.

The next dependency level was reviewed only after both level-0 reviews were recorded.

Level 1 completed

- `thm-finite-gaussian-component-density-normalized`: reviewed_no_defect, audit_enrichment. Reviewed all four steps and every direct supplier Statement/Definition. The same SPD square root drives both the determinant and pushforward calculation; finite normal products, Borel rectangle uniqueness and the affine change of variables give the claimed density. AC supplies countable choice. p=1 and arbitrary SPD covariance checked; singular matrices are outside the claim. Current risk review completed before level 2. Reader clarification is valid routine algebra, with no confirmed mathematical defect.

Boyd §3.1.5 printed p.74 was retrieved and read through the line-restriction second-derivative conclusion. Bishop official PDF failed in the web reader; no source reading is claimed for that failed retrieval.

Level 2 progress

- `thm-gaussian-mixture-exact-m-step-maximizes-q`: reviewed_no_defect, metadata. Eight steps checked against KL, logarithm, spectral, determinant and normalization suppliers. Full affine span and positive responsibilities force SPD scatters. Conditional mean improvement, categorical KL in direction alpha||rho and strict concavity in precision establish the unique joint maximum for labeled parameters. K=1 included; rank-deficient data and zero weights excluded. Risk review complete.
- `thm-lloyd-objective-monotonicity-and-termination`: reviewed_no_defect, metadata. The four steps match the actual algorithm: retention prevents zero-improvement label changes, injectivity of the repeated-vector map gives a unique nonempty mean, and post-update cost is determined by finitely many labelings even with empty centers. Termination makes no global-optimum claim. No item edit or interface change.

- `ex-fractional-gaussian-mixture-responsibilities`: reviewed_no_defect, metadata. Three steps and suppliers checked. Equal positive densities cancel for each positive variance, giving exactly (1/3,2/3). The tied-weight limit agrees; variance zero is never substituted. Risk review complete.
- `ex-gaussian-mixture-likelihood-unbounded`: reviewed_no_defect, metadata. Two steps and suppliers checked. Independent lower bounds multiply to exp(-1/2)/(8 pi epsilon), and the explicit epsilon choice forces log L above any real threshold. Positive covariance and inherited AC remain explicit. Risk review complete.
- `ex-lloyd-tie-sensitive-local-minima`: reviewed_no_defect, metadata. Six steps checked by exact rational distance, mean and objective computations. Costs are 2,2,1; retained boundary ties are at 1 and 2 respectively. TikZ rows have precisely the computed assignments and centers, with no mathematical reliance on the display. No diagram repair or additional diagram is needed.

All level 2 obligations complete; no original statement, definition or algorithm changed. The level-4 review follows below.

Level 4 completed

- `thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing`: amended_repair, repair_confidence 1. Reviewed all seven steps and all 26 direct supplier statements/definitions. Joint measurability, normalized fibres, positive finite marginals, posterior support, finite directional KL and absolute log integrability satisfy the exact general EM theorem. The full-affine-span M-step remains in the SPD domain for every finite iteration.
- Confirmed nonfatal computation defect `ml101-b20-3a-posterior-coordinate-normalization`: step 4.2 incorrectly wrote a sum over j not equal to i of unit marginal sums as 1. It equals n-1; an allowed p=1,n=3 full-span sample already gives 2. Replaced it by the individual coordinate identity for every j not equal to i. Summing the product posterior over all other coordinates now explicitly uses unit marginal factors, yielding the unchanged Q identity. Updated the exact derivation claim in the proof contract. No Statement, Definition, dependency edge, provenance classification or manifest interface changed; no material rewrite or judge stamp exists. No consumer repair is triggered. Risk review complete.

Local checks completed as recorded below.

Final evidence and checks

The live status command against `.autopilot/machine-learning-all-101-2026-10-19` returned running, with Step 3a active; `git log -3` shows current HEAD `603500781c`. No old handoff was used as activity evidence. The unrelated split-8 blocker remains engine/owner work and was not modified.

The pre/post JSON snapshots show changes to all nine routed item hashes and contract changes to the two reader algebra clarifications. Current raw hashes still equal post-reader hashes for eight items. The observed-likelihood item alone differs by Alpha's step-4.2 correction: post-reader `4951489a6bd4550a1cb1d458dbe0de7bbda95204d34bfa54ff1e4ee689c4322d`, current `9533c0d688c61568f5e9457b7946e21a4c8f35299dcca15bed2c000b51a49bcf`. The contemporaneous reader report identifies the spacing and algebra edits; hashes authenticate snapshots but do not themselves reconstruct old text. No missing historical defect observation is adjudicated: both findings artifacts are empty. The eight clean decisions use the explicitly authorized metadata/audit-enrichment route with empty defect IDs; the single amended decision cites the closed defect row. The engine owns decision hashes and subsequent gates.

I reviewed the exact Statement/Definition interfaces of the direct suppliers cited by the routed proofs, including determinant/derivative/trace/spectral laws, Gaussian and normal definitions, AC and its countable-choice implication, product-law/measure/Tonelli/change-of-variables/uniqueness results, logarithm and exponential laws, least squares, directional KL, and the general latent-density/EM interface. Local suppliers and both algorithms were reviewed before their uses. No outside producer or published-library defect was established. No page obligation was routed, no page was edited, and no original Statement/Definition changed; no direct/indirect consumer repair is required. No proposed withdrawal or stable ID was removed.

Sources actually consulted: [Boyd and Vandenberghe, Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf), §3.1.5, printed p.74, line restriction and nonpositive second derivative; [Bishop, Pattern Recognition and Machine Learning](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf), §2.3 equations (2.43), (2.53)–(2.57), printed pp.78–82; Gaussian singularity discussion printed pp.433–435; §9.2.2 equations (9.17)–(9.22), pp.435–437; §9.3.1 equations (9.35)–(9.40), pp.442–443; §9.3.2 equations (9.41)–(9.43), pp.443–444; Exercise 9.11, p.457; §9.4 equations (9.69)–(9.74), pp.450–452. The Bishop PDF failed in the web reader but downloaded successfully from its official URL and was read with local PDF text extraction. Its nearest-center explanation omits the tied case; the current local theorem correctly proves the weighted tie limit. Its general EM discussion supplies the lower-bound/KL argument, while the local theorem explicitly checks support and integrability. No independent full ESL source audit is claimed.

Commands completed successfully:

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-20.proof-contracts.json`: 13 items routed, seven HIGH/CRITICAL. Each required current risk review was completed in dependency order.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing.md`: 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-20.proof-contracts.json --strict`: 13/13 checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs items/thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing.md --quiet`: YAML and all math spans parse.
- Final `node tools/proof-layout.mjs items/thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing.md`: 1 item, 7 steps, 0 defects, after the final edit and reflow.
- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-20.proof-contracts.json --require-reviewed`: 13 items, 0 errors; all seven required reviews complete.
- Defect-ledger append: one closed nonfatal arithmetic-error row, with generated view refreshed. The initial append rejected the location vocabulary and appended nothing; changing the row location to the required `proof-step` allowed the successful append. This mechanical validation rejection was not a mathematical defect.

All nine owed decisions are written. No mathematical escalation or unfinished batch-20 obligation remains. No judgment, certification, publication, dispatch or engine transition was performed.
