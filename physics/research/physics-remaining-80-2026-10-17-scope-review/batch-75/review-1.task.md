# Batch 75: review 1

Run: physics-remaining-80-2026-10-17
Batch: 75
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: tgr-mhs03, tgr-mhs03-examples
Items: lem-tgr-timelike-scalar-acceleration, lem-tgr-spectral-thermometer, ex-tgr-finite-switch-inertial-rate
Consolidated findings: [{"id":"lem-tgr-timelike-scalar-acceleration:test-function-topology","type":"prerequisite","reason":"The Statement and steps 1.1 and 2.1 claim continuity in the test-function topology, but the deps only define the test-function set. Add and state the relevant content of def-test-function-topology, which supplies the fixed-support topology."},{"id":"lem-tgr-timelike-scalar-acceleration:step-4.1-temperedness","type":"local","reason":"Step 4.1 asserts that C_a is tempered from its finite-part singularity and exponential tails without giving a Schwartz seminorm bound or citing a result. Supply that justification, needed for the Fourier transform used in step 5.1 and by the consuming lemma."},{"id":"lem-tgr-timelike-scalar-acceleration:step-4.1-factors","type":"local","reason":"With A=2ℓe^{-κv}, B=2ℓe^{κv}, and x=sinh(κs/2), the factors are Y−X+iε=−A(x−iε/A) and Y+X−iε=B(x−iε/B); step 4.1 reverses the labels. Their product is unchanged, but correct the displayed factor assignments."},{"id":"lem-tgr-spectral-thermometer:markov-model","type":"prerequisite","reason":"Step 4.1 derives the forward equation from a named two-state continuous-time Markov chain, but the model lacks an explicit generator or earlier exact definition. Specify the generator on states {g,e}, or define the probability evolution by the stated ODE."}]
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
