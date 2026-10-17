# Batch 17: review 1

Run: physics-remaining-80-2026-10-17
Batch: 17
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emg-mm02, emg-mm02-examples
Items: def-emg-conformastatic-chart-data, lem-emg-conformastatic-chart-is-lorentzian, lem-emg-conformastatic-curvature, thm-emg-smooth-counterpoised-dust, cor-emg-regular-counterpoised-sphere, ex-emgmath-ml-b05, ex-emgmath-ml-b06
Consolidated findings: [{"id":"cor-emg-regular-counterpoised-sphere","type":"local","reason":"Proof step 2.2 uses “support” and “compactly supported” without defining them. Rephrase using the exact claim that the density is positive everywhere and that no compact set contains all points where it is nonzero, or define the topological support explicitly."},{"id":"ex-emgmath-ml-b05","type":"local","reason":"The Statement, Verification step 3.1, and Remarks use “support” without a definition. Define it inline as the closure of the nonzero set, or state the equivalent nonzero-set and no-compact-containment claims; preserve the everywhere-positive density conclusion."},{"id":"ex-emgmath-ml-b06","type":"local","reason":"The Statement and Verification step 3.1 use “worldlines” and assert that the dust is “not freely falling” without defining the curves or the pointwise scope. For this profile, H_i vanishes at r=0, so the supplier’s acceleration and electric field vanish there; the central static curve is geodesic. Define the worldline as a smooth, future timelike curve with specified domain and proper-time parameter, define free fall as geodesic motion, and qualify the nonzero acceleration and force balance to r>0."}]
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
