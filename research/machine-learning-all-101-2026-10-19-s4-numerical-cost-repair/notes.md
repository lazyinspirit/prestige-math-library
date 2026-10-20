# S4 numerical-cost escalation repair

Initial investigation, 2026-10-18 (UTC). CLAUDE.md and README.md read fully; SCHEMA.md and Step-1/owner/consumer controls in WORKFLOW.md inspected. Existing Codex compaction setting is 500000. Root confirmed batch-35 native writer drained; actual state independently re-read with endedAt 2026-10-18T19:30:16.888Z before native terminal preimages were archived under `before/`. Native state, receipts, gates, manifests and contracts have not been changed.

## Confirmed defect and original evidence

Both native escalations concern the numerical branch, not the already proved exact operation bound. Full original terminal item carriers, manifest, notes, coverage and contracts are archived. The complete normative ML-34 plan retains both exact O((N+L)log²(N+L)) and numerical O((N+L)log(N+L)log(1/epsilon)) claims, filter evaluation only.

Full S4 and Pan PDFs each fetched successfully on initial attempt and extracted locally with PyMuPDF (pdftotext unavailable; no fetch retry). Inspected S4 §§2.1–3.3 and complete Appendix C.1–C.3, including Proposition 5; inspected Pan §§3.2–3.3 and 6.1–7.1. S4 Proposition 5 reports the numerical operation count without defining precision norm or conditioning margins. Pan §3.3 expressly warns exact polynomial coefficient algorithms can require growing precision; §6.1 supplies the geometric separated-kernel identity; Theorem 6.3 covers log(1/xi)=O(log n); §7.1 expressly exposes condition-number-dependent amplification. None proves uniform fixed-precision absolute-error S4 complexity for arbitrary noncollision inputs.

For y=1/(z−mu), moving mu by h changes y by h/((z−mu)(z−mu−h)). Arbitrarily small root separation therefore rules out a uniform input precision guarantee. Small Woodbury correction singular values independently amplify Cauchy block errors. This is a conditioning qualification of a numerical arithmetic count, not an open mathematical problem and not permission to drop the numerical branch.

## Initial proposed complete local proof

Proposed A-page home: `thm-cauchy-root-grid-matvec-numerical-cost`, before the S4 consumer. Use a balanced dyadic arc tree of the M roots. A pole descends only near nodes; at each depth only a constant number of equal-length arcs can have their midpoint centers within a constant multiple of their covering radius of a fixed pole (chord packing). Stop far pairs when R/|c−mu|≤2/3, and expand 1/(z−mu) in p powers of −(z−c)/(c−mu). The exact remainder is at most (2/3)^p/|z−mu|. Singleton near pairs are direct. Every source interacts with O(log(2+M)) nodes; target evaluation through ancestors has the same bound.

Process one depth and one degree at a time, storing only current reciprocal powers per pole/node pair, one coefficient per target node and one current target power. This yields O((n+M)log(2+M)p) arithmetic operations and O(n+M) scalar words, including arbitrary p and repeated poles. With certified d≤min|z−mu| and A≥sum|a|, absolute truncation error is at most (2/3)^p A/d. General absolute epsilon cost therefore has log(max(1,A/d)/epsilon), while normalized error epsilon*max(1,A/d) costs log(1/epsilon).

Numerical model: variable-precision scalar arithmetic with absolute rounding error at most u per gate, supplied certified approximations to parameters/root constants and unrestricted exponent range; word operations/space are counted, bit complexity is not. A finite rational circuit with nonzero denominators admits an explicit conservative rounding choice: if T gates, exact intermediates bounded by V and denominator moduli bounded below by D>0, set K=(8(V+1)/min(1,D))² and u≤min(1,D/2,tau)/(2 K^(T+1)); elementary gate induction bounds final error by tau. Certified overlapping near/far tests avoid nontermination on branch equalities. Input reading and root approximation cost cannot be silently called constant bit cost.

For the S4 consumer use scaled blocks D(z)=2R(z)/(1+z), beta=(1+z)/2: H=x−beta*u*(I+beta*T)^−1*v. This avoids an artificial amplification at roots near −1. Let b≥1 bound all four block infinity norms, w≥1 bound correction inverse norms, s≥1 bound all Cauchy A/d scales and direct constants. If scalar block error is delta, norm error e≤r*delta; when w*e≤1/2 the inverse perturbation is ≤2w²e and the generating-value error is ≤9w²(b+1)²e. Inverse DFT infinity operator norm is one. Choose delta≤epsilon/[32r*w²*(b+1)²], reserving error for finite arithmetic. General operation count is O((N+L)log(2+N+L)log(kappa/epsilon)) with explicit kappa proportional to r*w²*(b+1)²*s. The source form follows uniformly for bounded-kappa families. Preserve original reported form and state that an unconditional uniform absolute/bit-cost interpretation is unsupported.

## Consumer closure

Actual textual references to the S4 complexity theorem occur only in `ex-s4-filter-cost-excludes-training` and the A/B placement pages. Source dependency closure and aliases must be rechecked after final edits, including current all-run manifests. The example must retain the training-cost exclusion and explain the proved conditional numerical guarantee; it must not continue to claim numerical cost is unresolved after a successful supplier proof. No algorithm/definition change is proposed, so no upstream procedural consumer propagation is needed.

Root initial mathematical/model review pending before major carrier edits. Final repair remains bounded to the second review→repair cycle. Root owns metadata, hashes/readiness integration and every native gate.

## Final second-cycle result

Root accepted the initial numerical model/proof diagnosis and authorized the final repair after the native writer drained. Three mathematical carriers are now complete, with the numerical theorem and sole item consumer repaired by the same agent. The new theorem is source-backed ai-altered and draft. The S4 theorem has the explicit kappa=64*r*w²*(b+1)²*s bound, scaled-resolvent formula, finite λ=−a and root −1 branches, inverse perturbation estimate with rank factor r, infinity-norm inverse-DFT estimate, and whole-circuit rounding bound including parameter/root/β errors. Existing exact suppliers and algorithm/definitions were not edited.

The phase checker proposed phase reorderings; those were adopted before final proof-layout and contract generation. Final focused proof-layout: 3 items, 18 steps, zero defects. Phase precheck: 3/3 pass. Renderer: 3/3, no errors/warnings. Strict scoped contract proposal: 3/3, no errors/warnings. Exact source/metadata proposals are in `proposals/`; no active manifest, contract, coverage, native readiness receipt or run-state file was edited. Owner integration and native gates remain owed.

A help probe to rendercheck was discovered to select its default unscoped inventory; that process was interrupted before any result and supplied no evidence. All recorded render evidence is the subsequent explicit three-file selection. An initial nonexistent proof-contracts tool spelling produced a module-not-found result and was corrected to the actual proof-contract.mjs command. Neither failure was treated as a pass.

Source retrieval and terminal archive hashes above document actual bytes, not current carrier certification. Root owns current hashing/recertification. No commit, publication, push, state transition or native gate was performed.
