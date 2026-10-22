# Batch 44: repair 1

Run: inverse-problems-knot-theory-all-109-2026-10-19
Batch: 44
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: numerical-pde-inversion-and-adjoint-error-control, numerical-pde-inversion-and-adjoint-error-control-examples
Items: def-ip-pde-solver-admissibility-contract, lem-ip-finite-element-reduced-gradient-from-discrete-adjoint, lem-ip-linear-finite-element-solve-residual-controls-state-error, prop-ip-discrete-adjoint-gradient-and-residual-status, alg-ip-finite-element-pde-tikhonov, thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination, ex-ip-pde-cfl-invalid-iterate, cex-ip-pde-biased-under-solved-adjoint-gradient, ex-ip-finite-element-mesh-error-at-zero-solve-residual
Consolidated findings: [{"id":"def-ip-pde-solver-admissibility-contract","type":"prerequisite","reason":"The Definition asserts that the nearest point in nonempty closed convex Q_h exists, but omits thm-nearest-point-in-a-nonempty-closed-convex-set from deps and Definition references. Its n≥1 hypothesis follows from m≥1 here. Add that supplier to deps/references."}]
Authorized source files: ["items/def-ip-pde-solver-admissibility-contract.md","items/lem-ip-finite-element-reduced-gradient-from-discrete-adjoint.md","items/lem-ip-linear-finite-element-solve-residual-controls-state-error.md","items/prop-ip-discrete-adjoint-gradient-and-residual-status.md","items/alg-ip-finite-element-pde-tikhonov.md","items/thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination.md","items/ex-ip-pde-cfl-invalid-iterate.md","items/cex-ip-pde-biased-under-solved-adjoint-gradient.md","items/ex-ip-finite-element-mesh-error-at-zero-solve-residual.md","library/inverse-problems/numerical-pde-inversion-and-adjoint-error-control.md","library/inverse-problems/numerical-pde-inversion-and-adjoint-error-control-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
