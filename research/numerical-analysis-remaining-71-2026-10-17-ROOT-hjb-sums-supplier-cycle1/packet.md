# First research-to-repair packet: Jensen and elliptic theorem of sums

Run: numerical-analysis-remaining-71-2026-10-17. Parent assignment: batch-71 PE32 actual escalation, first research/repair cycle. This packet is research only; it changes no canonical carrier, page, plan, manifest, engine state, metadata/readiness, hash binding, or acceptance evidence. It preserves the original 71-pair frontier and adds the necessary proved suppliers to the same frontier. No gate or test was run.

## Completed proposed carriers, in dependency order

1. `proposed/items/def-na-second-order-elliptic-semijets-and-closure.md`: full Euclidean upper/lower semijets, including value-sensitive sequential closures. This is a definition, not a claim of test-function equivalence. No choice is required.
2. `proposed/items/lem-na-jensen-maximum-principle-semiconvex.md`: strict maximum of a locally semiconvex function has arbitrarily nearby, arbitrarily slightly tilted local maxima outside any specified null set. The proof explicitly constructs a compact contact set with positive outer measure. It proves differentiability and a 2-lambda Lipschitz bound for its gradient, extends the coordinate gradients by the infimum formula, and applies the existing proved Lipschitz null-image supplier. This avoids an area formula and avoids mollification. Full AC is explicitly assumed to cover the outer-measure suppliers.
3. `proposed/items/lem-na-sup-convolution-semiconvexity-and-jet-transfer.md`: compact restriction, finite continuous semiconvex regularization, attained maximizing point, exact gradient displacement, exact original value, and unchanged-Hessian jet transfer. These facts are proved, not imported as “magic properties.” No choice is required.
4. `proposed/items/thm-na-elliptic-theorem-of-sums.md`: arbitrary finite product of open Euclidean domains, arbitrary finite-valued USC factors, C2 contact penalty, and exact closed upper jets with both CIL matrix bounds. The proof includes the matrix square estimate, localized quadratic reduction, semiconvex perturbation, almost-everywhere quadratic expansion, block-separability proof, compact extraction, transfer with value convergence, and the final diagonal closed-jet limit. Full AC is inherited from the Alexandrov supplier and used for the countable selections.

The existing CIL theorem is nowhere assumed as a Fact. The only new substantive external-to-this-packet mathematical supplier is the separately authored `thm-na-semiconvex-alexandrov-second-order-differentiability`, whose complete proposed carrier was read at `../numerical-analysis-remaining-71-2026-10-17-ROOT-hjb-alexandrov-supplier-cycle1/proposed-items/`. Its exact interface is finite locally semiconvex on arbitrary open R^m, with a direction-uniform second-order Peano expansion off a Lebesgue null set, under full AC. The packet does not replace that proof with a citation.

## Exact consumer interface

`thm-na-elliptic-theorem-of-sums` gives, at a local maximum of sum u_i minus phi and for any epsilon>0,

- `(D_i phi(z),X_i) in closed J2,+ u_i(z_i)`;
- `-(epsilon^-1+||A||) I <= diag(X_i) <= A+epsilon A^2`, where `A=D2 phi(z)`.

Take two factors in dimension d+1, namely u(t,x) and -v(s,y). The comparison supplier confirmed that the penalty `|x-y|^2/(2 eps)+(t-s)^2/(2 delta)+eta t+gamma/(S-t)` needs this elliptic theorem only. Restricting its full matrix inequality to spatial components and choosing the theorem parameter equal to eps yields the required `3/eps [[I,-I],[-I,I]]` spatial upper bound, because the penalty has no mixed space-time Hessians. Its time components give the exact derivative difference `eta+gamma/(S-t)^2`. The comparison supplier authors the separate polynomial-test/closed-jet-to-parabolic-viscosity interface locally. No generic parabolic theorem of sums, time-jet compactness hypothesis, or unproved CIL Theorem 8.3 is needed for the selected periodic diagonal model. This is the complete necessary route for that model, not a reduction of its dimension, coefficient, or scheme scope.

The new logical closure is: convex/measure and Alexandrov foundations -> Jensen plus sup convolution -> elliptic sums -> `lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities` -> `thm-na-periodic-diagonal-hjb-second-order-comparison` -> unconditional diagonal-scheme convergence and its existing scheme/half-relaxed consumers as determined by the comparison packet. Jensen itself does not depend on Alexandrov, preventing a cycle.

## Original statements and consumer ownership

No original Statement or Definition is changed in this packet. In particular the finite-control, uniformly positive diagonal coefficient model remains exactly as authored: bounded, periodic, jointly Lipschitz alpha_j, b_j and f, arbitrary d>=1, alpha_j>=alpha_*>0. No assumption of C1 coefficients, smooth solutions, constant diffusion, or first-order-only dynamics is introduced. The half-relaxed and existing initial-trace interfaces are not changed.

If the owner changes the original model Definition, its current transitive carrier consumers (read from canonical frontmatter on this packet's date) are:

- `alg-na-explicit-diagonal-diffusion-hjb-grid-step`
- `cor-na-diagonal-diffusion-scheme-converges-under-comparison`
- `def-na-second-order-parabolic-viscosity-solution`
- `ex-na-compact-control-quantization-hamiltonian-error`
- `ex-na-diagonal-diffusion-manufactured-solution`
- `ex-na-eikonal-kink-monotone-hjb-updates`
- `lem-na-diagonal-diffusion-discrete-initial-trace`
- `lem-na-diagonal-diffusion-stencil-is-monotone`
- `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity`
- `thm-na-diagonal-diffusion-scheme-half-relaxed-limits`
- `thm-na-diagonal-diffusion-stencil-consistency`
- `thm-na-first-order-hjb-scheme-convergence`.

The current viscosity Definition's transitive consumers are the conditional corollary, compact-control and eikonal examples, smooth-test lemma, diagonal half-relaxed theorem, and first-order convergence theorem. The conditional corollary currently has no carrier consumers. These original items remain under the parent/same-reviewer consumer-closure protocol if their original statements or definitions change; the new sums suppliers do not authorize splitting them into read-only reviews.

## Actual source reading and limits

A fresh authoritative PDF was retrieved from https://arxiv.org/pdf/math/9207212 into `sources/cil.pdf`; PyMuPDF reports 69 pages, and `sources/cil.txt` is its full text extraction. Read in detail: Section 2 (2.3), definitions (2.6)-(2.7) and Remark 2.4; Section 3 Theorem 3.2 and its quadratic doubled-variable application; complete Appendix A printed pp. 56-63, including reductions, (A.4), A.2, A.3, A.4, A.5 and appendix notes. The full PDF is present; this packet does not claim that the remainder of the 69-page article was read in detail. The Appendix labels its proof a sketch; omitted arguments needed here have been supplied locally (contact gradients, extension, block Hessians, and diagonal closure in particular).

Existing canonical supplier carriers read completely: `thm-convex-functions-on-open-convex-sets-are-locally-lipschitz`, `thm-lipschitz-images-of-null-sets-in-rn-are-null`, `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure`, `lem-symmetric-matrix-operator-norm-rayleigh`, `cor-bolzano-weierstrass-in-rn`. Also inspected the complete first-order-jet item to avoid treating it as a second-order supplier. The canonical second-order model and viscosity Definition, the smooth-test lemma's statement/interface, and batch-71 notes/source coverage were read. None was overwritten.

`/home/lazyinspirit/.codex/config.toml` was inspected and contains `model_auto_compact_token_limit = 500000` and scope `total`. Existing running-session adoption was not asserted or simulated.

## Completion limits and next action

All four necessary proposed sums carriers have complete local statements and arguments; there is no known unresolved sum/Jensen/jet-transfer gap in this packet. They remain proposed research content, not accepted native items. The parent must integrate the foundation packet before this packet, then the comparison packet, and dispatch the authorized single native batch-71 continuation including all new suppliers and the two missing declared pages. The same original reviewers then own the second/final sequential foundation -> sums -> comparison review and all affected original/current consumers. Readiness, hashes, contracts, validation and engine transitions belong to the parent/native workflow.
