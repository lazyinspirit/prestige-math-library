# Batch 55 Step 3a adjudication

Run `machine-learning-all-101-2026-10-19`; group `batch-55`; scope batch 55 only. No agents dispatched, judgments, stamps, publication, or stage transitions initiated. Live `.autopilot/machine-learning-all-101-2026-10-19` status and Git HEAD `38f95712f5` checked; this is native Step 3a work.

## Producer checkpoint: level 0

`lem-convex-gradient-step-nonexpansive`, batch 30, consumer `thm-sgd-stability-convex-loss`: read the current complete proof, its three cited suppliers, producer contract and manifest. Current raw SHA-256 matches the exact routed source. Immutable producer pre-reader fingerprint and routing carrier/path are preserved verbatim in each decision.

- reader:55:1 / refuter:55:1: confirmed_nonfatal. Confirmed short nonfatal gap: F1 cites segment convexity but uses its differentiable supporting inequality without deriving it. For 0<t<=1, convexity gives (h(u+t(v-u))-h(u))/t<=h(v)-h(u); differentiability gives the limit <gradient h(u),v-u>. The descent inequality for the shifted function, reversed-point addition and square expansion then prove the full 0<=eta<=2/beta claim. Current raw producer hash equals the routed observation 2c0d4c5e7e9eaf04ca25139603b065ee9d5901e85455dc7582792f86955efe46. Producer remains read-only; owner batch 30 must add the derivation.
- reader:55:2 / refuter:55:2: confirmed_fatal. Confirmed citation defect: SCAFFOLD Appendix C, Lemma 6, PDF p.17, assumes beta-smoothness and mu-strong convexity and eta<=1/beta; its squared-distance contraction does not state the claimed full eta<=2/beta interval. Hardt-Recht-Singer section 3.2, Lemma 3.7(2), states the exact result. Independent local derivation supports the mathematics but does not cure a false citation; classified fatal under the dispatched citation rule. Current producer raw hash still matches the routed observed bytes. Owner batch 30 must replace both source references, preserving the theorem.

Owner alert: batch 30 owns both pending corrections. They need no statement change and no consumer mathematical change. The consumer's nonexpansive update use matches all hypotheses and endpoints. The supplier needs no substantial new prerequisite: the displayed one-sided derivative argument closes its proof locally. These are pending outside repairs, not claimed completed repairs. The cross-batch edge must stay open until the owning batch resolves them.

Sources checked: [SCAFFOLD Appendix C, Lemma 6, printed p.17](https://cs.nyu.edu/~mohri/pub/scaffold.pdf); [Hardt–Recht–Singer §3.2 Lemma 3.7(2), Appendix A proof](https://arxiv.org/html/1509.01240). The latter supplies convex smooth nonexpansiveness over the full step interval; the former has the narrower interval above.

Checkpoint next action (subsequently completed below): record each owned high-risk proof review in generated order, finish the touched nonconvex decision, adjudicate the published uniqueness finding, then run focused checks.

## Completed item checkpoint: `thm-uniform-stability-implies-expected-generalization`

Checked both steps and all cited definitions/statements. Probability factors (including the independent seed) are finite, hence sigma-finite. Nonnegative joint loss plus the explicit integrability assumptions justify Fubini; ghost-coordinate exchangeability holds for ordered samples without permutation invariance of the rule. Conditioning first on S and the ghost keeps the test observation fixed, so the stability definition bounds the seed expectation before the outer integral triangle inequality. n=1, epsilon=0, deterministic seeds and point-mass laws preserve the proof; n=0 is excluded. No arbitrary choice, diagram, quotient construction, or claim of a high-probability bound. Product uniqueness application independently checked against its exact pi-system exhaustion theorem. HRS section 2.2 Theorem 2.2 and Matni section 3.1 pp.3-4 support this argument.

## Completed item checkpoint: `thm-sgd-stability-convex-loss`

Checked all five steps, loss domains, differentiability, joint measurability and all cited supplier statements. Normalizing a nonzero gradient and taking its directional derivative gives norm<=L; zero gradient is treated separately. Same-index coupling gives pathwise delta_t<=delta_(t-1)+2 alpha_t L 1_(I_t=j); only uniform marginals are used in expectation, so no conditional or cross-time independence is smuggled in. Fixed initialization, finite T and n>=1, L=0, zero steps and alpha=2/beta all work. Finite index-vector support makes expected test losses finite for each fixed sample/test point. The IID/integrability assumptions permit the previously reviewed generalization theorem. Batch-30 supplier is mathematically sound after the immediate supporting-line derivation recorded in this report, but its unexpanded inference and inaccurate SCAFFOLD citation remain explicitly routed owner debts; this review does not mark those repairs complete. HRS section 3.3 Theorem 3.8 and Matni section 4 pp.5-6 checked. No AC or diagrams.

## Completed item checkpoint: `thm-sgd-stability-nonconvex-loss`

Checked every step 1.1-6.1 and actual suppliers. Gradient norm<=L follows from value Lipschitzness. The pathwise smoothness recurrence unrolls with deterministic amplification factors; min(1,sum a)<=sum min(1,a) and uniform marginals give the clipped-kick sum without temporal independence. For integer 1<=s<=T, exponential addition/monotonicity and the reciprocal integral give product<= (T/s)^q; empty product at s=T is 1. With q=beta*c>0 and L>0, r>0 and h(x)=min(1,(r/x)^(q+1)) is continuous and nonincreasing. Continuity on each nondegenerate compact interval supplies integrability for order, additivity and FTC; the reader adds exactly that missing supplier F14. Checked T=1, r<1, r=1, 1<r<T, r>=T, and L=0 separately. FTC power antiderivatives give sum h(s)<=(1+1/q)r, hence stronger /n bound and stated / (n-1) for n>=2. All denominators positive; bounded jointly measurable loss gives integrable risks. Statement unchanged; no consumer-interface changes or AC. HRS section 3.4 Theorem 3.12 and full proof checked; the authored clipped-kick proof avoids its real-valued burn-in rounding issue and proves the stated marginal-only version directly.

## Completed item checkpoint: `ex-sgd-nonlipschitz-loss-no-uniform-stability`

Checked all three verification steps and both cited interfaces. At n=T=1 and alpha=1/2 the quadratic gradient is w-y and output on S_a is a/2; test loss difference at (*,0) is a^2/8, unbounded over finite a. Stability quantifies over every sample, so samples outside the support of the chosen point-mass law are admissible. Each fixed test loss is finite. Direct segment expansion proves convexity, gradient difference equals w-v, and loss-value quotient |w|/2 is unbounded. Thus it violates exactly the global value-Lipschitz hypothesis and refutes no asserted convex theorem. a=0 gives equality; no zero denominator or arbitrary choice. Example section has no inline hyperlink and no diagram.

## Published obligation and historical comparison

reader:55:3 is false_positive. False positive as an unlicensed inference: Proof 3.1 explicitly establishes that rho and the product measure agree on every rectangle, and invokes the rectangle exhaustion from step 2.1. Therefore on each exhaustion rectangle rho(X_n x Y_n)=(mu x nu)(X_n x Y_n)=mu(X_n)nu(Y_n)<infinity. These are exactly the equal finite values required by thm-measure-uniqueness-on-a-sigma-finite-pi-system. That theorem does not require a separately stated sigma-finiteness conclusion for rho. The elementary substitution is already licensed by the two preceding clauses, so repeating the equality would be optional exposition. Read both complete proofs; the probability-factor consumer uses the sound uniqueness conclusion. Published item unchanged.

No new defective published item is established by this finding, so the published classification index needs no new defect entry. Existing published inline-reference maintenance records are preserved. No published carrier or published ledger was edited.

The sole touched item is accepted_repair with repair_confidence 1. Pre-reader raw SHA-256 `90103fe5e92799f85ec536efb44fa383d98dd1c7a57e89282a56fa2becd1b24d`; post-reader/current `3efb64de4645f1d104cbc9bf0549b5e80726636d59531decb998df2766750f2e`. Its Statement is unchanged. The exact reader edit and updated contract are consistent; synchronized the manifest's omitted `thm-continuous-implies-integrable` dependency. No new item edit or provenance change, no prior judge stamp to remove, and no changed public mathematical interface requiring consumer repair. The touched repair's nonfatal source-support defect is recorded separately from the three reader/refuter findings.

## Presentation and scope

Both assigned pages are YAML-only, draft, and retain compact-v1. No page obligation is owed. No TikZ/tikzcd or other diagram appears in the reviewed carriers; no argument requires a diagram. Owned Statement/Definition/Example sections have uninterrupted claims and following references sections. No algorithm is routed. No arbitrary choice use or proposed withdrawal was introduced. Six decisions are owed and recorded exactly: four producer findings, one published finding, one touched item.

The batch-30 supplier remains read-only. Closed finding rows record the completed local adjudication/disposition; the fatal citation repair remains deferred and the owning consumer edge is explicitly open. This is not repaired producer closure or acceptance of its inaccurate citation. No substantial new mathematical prerequisite blocks the authorized batch-55 repair. Required owner action: route both producer corrections to batch 30 before clearing that edge. Engine owns every subsequent gate, hash stamp and stage transition.

## Checks

Initial risk-report: 8 items routed, 0 errors; three CRITICAL and one HIGH proof received the complete specific reviews above. Final `risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-55.proof-contracts.json --require-reviewed`: 8 routed, 0 errors; all four required reviews complete.

`node tools/tsx-run.mjs tools/precheck.mts` on the three high-risk theorems and quadratic example: 4 checked, 0 failing. `node tools/rendercheck.mjs` on the touched item and both assigned pages: 3 files, all math spans parsed by real KaTeX and all frontmatter parsed, no errors. Final `node tools/proof-layout.mjs items/thm-sgd-stability-nonconvex-loss.md`: 1 item, 7 steps, 0 defects. No item changed after that command.

`node tools/defect-ledger.mjs append --file /tmp/ml55-ledger-rows.json`: appended four deduplicated local rows and regenerated the view. Both producer lanes share one row per actual defect; the false-positive published finding has a separate closed rejected-finding record, and the accepted reader repair has its own closed fixed row. No producer repair is recorded as fixed.

`node tools/frontier-dependency-ledger.mjs refresh --run machine-learning-all-101-2026-10-19`: refreshed and deduplicated the native frontier ledger after changing only the owned batch-55 input. The consumer's batch-30 edge remains open. Six unique obligations and matching decision/ledger references checked locally. All checks reported above exited 0. No full gate battery or judge was run.

Final disposition: local batch-55 adjudication is complete; owner batch-30 citation and supporting-line corrections remain pending. No additional local edits are needed before engine handoff.
