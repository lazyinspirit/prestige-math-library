# Step 3a item order: adjudicator batch-30, run machine-learning-all-101-2026-10-19

Assigned batches: 30. Read briefs/tasks/alpha-3a-adjudicate.md first.

Adjudicate and complete each routed item from lowest dependency level to highest within the dispatched batches. Finish all obligations and the risk review for an item before moving to a higher level. The scope files plus authenticated foreign-refuter registry determine exact decisions; this list enumerates those obligations.

Required foreign native refuter obligations (additional mandatory ordinary gate decisions; preserve original finding, independently review current proof and exact repair evidence; unbound historical source, no inherited acceptance):

{"obligation":"gate:ml101-b57-3a-convex-supporting-line","id":"lem-convex-gradient-step-nonexpansive","batch":"30","route":"gate","defect_id":"ml101-b57-3a-convex-supporting-line","historical_delta_unknown":true,"original_obligation":"refuter:57:1","original_finding":{"id":"lem-convex-gradient-step-nonexpansive","location":"Facts & Assumptions [F1]; Proof 1.1","defect":"unlicensed-inference","evidence":"F1 states that convexity gives the supporting-line inequality, which Proof 1.1 uses to assert that u minimizes φ. The cited definition defines convexity by the segment inequality f((1−t)x+ty)≤(1−t)f(x)+tf(y) for t∈[0,1]; it does not state the supporting-line result. Differentiability gives that result by taking a one-sided derivative at t=0, so the missing derivation is short.","severity":"nonfatal"},"owner_foreign_refuter_route":{"path":"research/machine-learning-all-101-2026-10-19-step3-owner-foreign-refuter-routes.json","entry_sha256":"2abfe85fa40cabf16069d1729ae2c0cf8561f601a971bd2938edc176e91c9876","evidence":{"version":1,"run":"machine-learning-all-101-2026-10-19","policy":"owner-step3-required-foreign-refuter-obligation-v1","owner_identity":"/root","reviewed":true,"at":"2026-10-19T13:11:11.988849+00:00","reason":"Preserve this exact genuine original extra-opened refuter57 finding as its own required ordinary gate at uniquely owned actual home30. The report home55 claim is wrong and no57-to30 logical edge is asserted. Home30 already completed before this finding, so a supported one-shot native continuation must independently adjudicate this finding and all old obligations. Root repair never supplies native acceptance.","mathematical_acceptance":false,"edit_permission":false,"historical_observation_bound":false,"observation_basis":"unbound-native-refuter; owner-registration capture only","origin_batch":"57","target_batch":"30","index":1,"id":"lem-convex-gradient-step-nonexpansive","defect_id":"ml101-b57-3a-convex-supporting-line","finding":{"id":"lem-convex-gradient-step-nonexpansive","location":"Facts & Assumptions [F1]; Proof 1.1","defect":"unlicensed-inference","evidence":"F1 states that convexity gives the supporting-line inequality, which Proof 1.1 uses to assert that u minimizes φ. The cited definition defines convexity by the segment inequality f((1−t)x+ty)≤(1−t)f(x)+tf(y) for t∈[0,1]; it does not state the supporting-line result. Differentiability gives that result by taking a one-sided derivative at t=0, so the missing derivation is short.","severity":"nonfatal"},"finding_sha256":"21f3a7e8a81e6f7ace4ef752bed4afd81754259a8c803b08b8cfb6397ea05725","original_report":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-original-evidence/machine-learning-all-101-2026-10-19-refute-57.json","sha256":"7ae845511dafcacdbad2de9cf8f18b44a4f879cbffd5c01ee5de6531d95987db"},"native_result":{"path":"research/machine-learning-all-101-2026-10-19-dispatch/refuter-refute-57.attempt-1.result.json","sha256":"7bcf791efd68a8ba7d4309ac4b077b40d29b03d6d26df5e1a84c59dcd7bf0cff"},"prompt":{"path":"research/machine-learning-all-101-2026-10-19-dispatch/refuter-refute-57.attempt-1.prompt.md","sha256":"afdc64aa53930aad3d0c0e5b657a9cc69dc37d0bb9de3455efe8ea871282de11"},"origin_scope":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-original-evidence/machine-learning-all-101-2026-10-19-step3-scope-57.json","sha256":"6429ab6c4ccf6489c3c12cd7ebd2b333d3d340430bc276837820baf84ea65f1a"},"source_before":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-convex-defects/root-application/before/items/lem-convex-gradient-step-nonexpansive.md","sha256":"2c0d4c5e7e9eaf04ca25139603b065ee9d5901e85455dc7582792f86955efe46"},"source_after":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-extra-route/root-registration/source-after.md","sha256":"e6eea1fe5aea4fe805cd0e855a5b4587d936620b9b2a218c468b090d2accf2a6"},"application":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-convex-defects/root-application/application.json","sha256":"d73f2c8d5b7757b5e8514c1c3652e87e562f217106388dba2c69e58002aa1b54"},"owner_review":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-extra-route/root-registration/focused-root-review-1.json","sha256":"dfdc9a0646fd98e25593fb174c5a14b030927e7e995591a7785957405adf1a2f"},"defect_record":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-extra-route/root-registration/pending-owner-finding-1.json","sha256":"16a0a6c7eef4f4514fd0a4cde09e0a5ca823fad16ef48c670776186262aecb53"}}}}

{"obligation":"gate:ml101-b57-3a-convex-citation","id":"lem-convex-gradient-step-nonexpansive","batch":"30","route":"gate","defect_id":"ml101-b57-3a-convex-citation","historical_delta_unknown":true,"original_obligation":"refuter:57:2","original_finding":{"id":"lem-convex-gradient-step-nonexpansive","location":"Statement references","defect":"citation-inaccurate","evidence":"The linked SCAFFOLD Appendix C, Lemma 6 states a result for β-smooth, μ-strongly convex h with η≤1/β and gives the squared-distance bound with factor 1−μη. It does not state the convex-only nonexpansiveness result for 0≤η≤2/β asserted here. The current proof derives the broader result, so this citation defect is nonfatal.","severity":"nonfatal"},"owner_foreign_refuter_route":{"path":"research/machine-learning-all-101-2026-10-19-step3-owner-foreign-refuter-routes.json","entry_sha256":"4ebe951ee0aac9ddd846a235d1438abfb40dc7daef902f3548fc6a12376db8db","evidence":{"version":1,"run":"machine-learning-all-101-2026-10-19","policy":"owner-step3-required-foreign-refuter-obligation-v1","owner_identity":"/root","reviewed":true,"at":"2026-10-19T13:11:11.989955+00:00","reason":"Preserve this exact genuine original extra-opened refuter57 finding as its own required ordinary gate at uniquely owned actual home30. The report home55 claim is wrong and no57-to30 logical edge is asserted. Home30 already completed before this finding, so a supported one-shot native continuation must independently adjudicate this finding and all old obligations. Root repair never supplies native acceptance.","mathematical_acceptance":false,"edit_permission":false,"historical_observation_bound":false,"observation_basis":"unbound-native-refuter; owner-registration capture only","origin_batch":"57","target_batch":"30","index":2,"id":"lem-convex-gradient-step-nonexpansive","defect_id":"ml101-b57-3a-convex-citation","finding":{"id":"lem-convex-gradient-step-nonexpansive","location":"Statement references","defect":"citation-inaccurate","evidence":"The linked SCAFFOLD Appendix C, Lemma 6 states a result for β-smooth, μ-strongly convex h with η≤1/β and gives the squared-distance bound with factor 1−μη. It does not state the convex-only nonexpansiveness result for 0≤η≤2/β asserted here. The current proof derives the broader result, so this citation defect is nonfatal.","severity":"nonfatal"},"finding_sha256":"cc7a8c47b118926206a7911d559a1a34c645ab9b34e961914d783625e0bd0b05","original_report":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-original-evidence/machine-learning-all-101-2026-10-19-refute-57.json","sha256":"7ae845511dafcacdbad2de9cf8f18b44a4f879cbffd5c01ee5de6531d95987db"},"native_result":{"path":"research/machine-learning-all-101-2026-10-19-dispatch/refuter-refute-57.attempt-1.result.json","sha256":"7bcf791efd68a8ba7d4309ac4b077b40d29b03d6d26df5e1a84c59dcd7bf0cff"},"prompt":{"path":"research/machine-learning-all-101-2026-10-19-dispatch/refuter-refute-57.attempt-1.prompt.md","sha256":"afdc64aa53930aad3d0c0e5b657a9cc69dc37d0bb9de3455efe8ea871282de11"},"origin_scope":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-original-evidence/machine-learning-all-101-2026-10-19-step3-scope-57.json","sha256":"6429ab6c4ccf6489c3c12cd7ebd2b333d3d340430bc276837820baf84ea65f1a"},"source_before":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-convex-defects/root-application/before/items/lem-convex-gradient-step-nonexpansive.md","sha256":"2c0d4c5e7e9eaf04ca25139603b065ee9d5901e85455dc7582792f86955efe46"},"source_after":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-extra-route/root-registration/source-after.md","sha256":"e6eea1fe5aea4fe805cd0e855a5b4587d936620b9b2a218c468b090d2accf2a6"},"application":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-convex-defects/root-application/application.json","sha256":"d73f2c8d5b7757b5e8514c1c3652e87e562f217106388dba2c69e58002aa1b54"},"owner_review":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-extra-route/root-registration/focused-root-review-2.json","sha256":"b435bb66333b2a026dff83b6cc972aefbe36d15c22ebe4033a6d26f9004c9df9"},"defect_record":{"path":"research/machine-learning-all-101-2026-10-19-owner-refuter57-extra-route/root-registration/pending-owner-finding-2.json","sha256":"c27df9595180cb2b54adbe067d989807e8c1dae476750f421321c343ae986048"}}}}

Items in order:

- level 0: batch 30, lem-convex-gradient-step-nonexpansive — gate:ml101-b57-3a-convex-supporting-line, gate:ml101-b57-3a-convex-citation

- level 0: batch 30, lem-finite-martingale-difference-sum-variance — risk review

- level 0: batch 30, lem-smooth-convex-gradient-difference — risk review

- level 1: batch 30, lem-local-sgd-client-drift — risk review

- level 1: batch 30, lem-local-sgd-sampling-variance — risk review

- level 1: batch 30, lem-local-sgd-virtual-progress — risk review

- level 1: batch 30, lem-uniform-client-sampling-moments — risk review

- level 1: batch 30, ex-client-data-locality-does-not-imply-dp — touched:30:ex-client-data-locality-does-not-imply-dp, touched, risk review

- level 2: batch 30, fs-scaffold-general-convex-uniform-output-round-headline — risk review

- level 2: batch 30, lem-fedavg-local-drift — risk review

- level 2: batch 30, lem-fedavg-one-round-progress — risk review

- level 2: batch 30, thm-local-sgd-convex-round-complexity — risk review

- level 2: batch 30, ex-scaffold-control-correction — risk review

- level 3: batch 30, lem-scaffold-control-tracking-identity — risk review

- level 3: batch 30, lem-scaffold-convex-control-lag — risk review

- level 3: batch 30, thm-fedavg-under-gradient-dissimilarity — risk review

- level 4: batch 30, lem-scaffold-convex-client-drift — risk review

- level 4: batch 30, lem-scaffold-convex-server-variance — risk review

- level 4: batch 30, lem-scaffold-nonconvex-client-drift — risk review

- level 4: batch 30, lem-scaffold-nonconvex-server-variance — risk review

- level 5: batch 30, lem-scaffold-convex-round-progress — risk review

- level 5: batch 30, lem-scaffold-nonconvex-control-lag — risk review

- level 6: batch 30, lem-scaffold-nonconvex-round-progress — risk review

- level 7: batch 30, thm-scaffold-convex-and-nonconvex-rates — risk review

Other routed obligations (pages and published dependencies; review them as required by the scope):

- touched:30:ex-client-data-locality-does-not-imply-dp: original home obligation must be independently re-reviewed; {"obligation":"touched:30:ex-client-data-locality-does-not-imply-dp","id":"ex-client-data-locality-does-not-imply-dp","route":"touched","added":false,"batch":"30","owner_home_alpha_continuation":{"path":"research/machine-learning-all-101-2026-10-19-step3-home-alpha-continuations.json","entry_sha256":"2cc99f9fbbc757992d42e5f8874f5162f6473026640cdf93cc357f657102c699"}}
