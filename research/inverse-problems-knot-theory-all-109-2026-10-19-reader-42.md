# Step 3a reader report — batch 42

Run: \`inverse-problems-knot-theory-all-109-2026-10-19\`  
Role: reader  
Batch: \`42\`

## Opened inventory

Assigned pages:

- A page \`anisotropic-calderon-gauge-and-open-uniqueness\`: \`library/inverse-problems/anisotropic-calderon-gauge-and-open-uniqueness.md\`.
- B page \`anisotropic-calderon-gauge-and-open-uniqueness-examples\`: \`library/inverse-problems/anisotropic-calderon-gauge-and-open-uniqueness-examples.md\`.

Assigned items, inspected in manifest dependency-level order:

1. \`lem-ip-euclidean-trace-quotient-is-h12\`
2. \`def-ip-anisotropic-conductivity-dirichlet-to-neumann-map\`
3. \`lem-ip-anisotropic-conductivity-map-wellposedness\`
4. \`thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map\`
5. \`op-ip-general-anisotropic-calderon-uniqueness\`
6. \`ex-ip-anisotropic-boundary-fixing-gauge-example\`

Direct page prerequisites opened for context:

- \`calderon-problem-and-cgo-uniqueness\`
- \`smooth-manifolds-and-smooth-maps\`
- \`riemannian-metrics-length-distance-and-volume\`
- \`sobolev-traces-and-zero-boundary-values\`

Dependency items opened for their relevant statements/interfaces:

- \`def-ip-sobolev-spaces-on-compact-riemannian-domain\`
- \`def-ip-conductivity-dirichlet-to-neumann-map\`
- \`lem-ip-conductivity-map-wellposedness\`
- \`lem-ip-smooth-manifold-elliptic-nonresonant-regularity\`
- \`def-sobolev-space-wkp-and-its-norm\`
- \`def-wkp-zero-as-a-sobolev-closure\`
- \`def-fractional-sobolev-space-on-a-compact-c-one-boundary\`
- \`lem-fractional-boundary-norm-is-independent-of-atlas\`
- \`lem-c-k-boundary-flattening-preserves-wkp-locally\`
- \`lem-weak-leibniz-rule-with-a-smooth-factor\`
- \`thm-smooth-up-to-the-boundary-density-on-smooth-domains\`
- \`thm-sobolev-spaces-are-banach-spaces\`
- \`lem-half-space-trace-has-the-fractional-slobodeckij-bound\`
- \`thm-lp-trace-operator-on-a-bounded-c-one-domain\`
- \`thm-kernel-of-the-trace-is-w-one-p-zero\`
- \`thm-bounded-right-inverse-for-the-sobolev-trace\`
- \`thm-poincare-inequality-for-w-one-p-zero\`
- \`thm-lax-milgram\`
- \`thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions\`
- \`thm-chain-rule-for-total-derivatives\`
- \`def-riemannian-metric-and-riemannian-manifold\`
- \`def-pullback-riemannian-metric\`
- \`def-riemannian-volume-density\`
- \`def-diffeomorphism-and-local-diffeomorphism-of-manifolds\`
- \`def-axiom-of-choice\`
- \`def-countable-choice\`
- \`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration\`

Relevant manifest, coverage, contract, and cross-batch dependency entries were treated as navigation/evidence, not as proof verdicts. The assigned item carriers were initially opened before their external supplier files; supplier statements were then checked before final adjudication. Thus the final proof review used the suppliers, but the literal supplier-before-consumer reading order was not followed.

## Page verdicts

- \`anisotropic-calderon-gauge-and-open-uniqueness\` — pass. The frontmatter inventory agrees with batch 42, status remains draft, the Markdown body is empty, and \`page_layout: compact-v1\` is preserved.
- \`anisotropic-calderon-gauge-and-open-uniqueness-examples\` — pass. The A-page companion and example placement agree with the assignment, status remains draft, the body is empty, and \`page_layout: compact-v1\` is preserved.

## Item verdicts

- \`lem-ip-euclidean-trace-quotient-is-h12\` — pass. The fixed-atlas and Euclidean \(H^1\) norms are compared on the dense smooth core; the trace bound, kernel, surjectivity, and quotient norm equivalence follow from the cited trace, kernel, and bounded-lift interfaces. The finite-atlas and \(p=2\) hypotheses match the suppliers.
- \`def-ip-anisotropic-conductivity-dirichlet-to-neumann-map\` — pass. It specifies the symmetric uniformly elliptic matrix coefficient, quotient data, weak equation, and energy form. Its well-definedness and bounded bilinearity are explicitly delegated to \`lem-ip-anisotropic-conductivity-map-wellposedness\`; the definition references its suppliers and keeps them outside the complete Definition.
- \`lem-ip-anisotropic-conductivity-map-wellposedness\` — pass. The Poincaré inequality gives a complete gradient-norm Hilbert space on \(H_0^1\), Lax–Milgram gives existence, coercivity gives uniqueness and representative independence, and the energy minimization estimate gives boundedness and bilinearity. Choice assumptions match the cited interfaces.
- \`thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map\` — pass. The pushforward ellipticity, \(H^1\) composition and trace preservation, weak energy change of variables, and the Riemannian pullback energy identity are justified. The local Riemannian clause correctly requires uniqueness and smoothness when identifying classical Dirichlet solutions.
- \`op-ip-general-anisotropic-calderon-uniqueness\` — pass as a status-qualified question, not as an established theorem. Its domain, patch, weak energy map, and gauge conclusion are precisely formulated. The dated surveys support only their dated open-status claims. The 2026 preprint claims the conclusion, but its novel full argument remains unverified. One inaccurate statement about the preprint was repaired; see below.
- \`ex-ip-anisotropic-boundary-fixing-gauge-example\` — pass. The radial derivative is positive on \([0,1]\), the map extends smoothly as a diffeomorphism through the boundary, the pushed-forward coefficient differs at the origin for \(n\ge3\), and DN invariance follows from the assigned theorem.

All six assigned statement/definition/example formulations are uninterrupted by hyperlinks; references are in their immediately following reference sections. No TikZ or other diagrams occur in the assigned items.

## Edit and evidence

In \`items/op-ip-general-anisotropic-calderon-uniqueness.md\`, the final paragraph of \`## Status\` incorrectly said that Proposition 7.2 of the OpenAI preprint prints a closure bar over \(E\). The primary PDF at page 38 instead prints
\[
M_j^\circ=(M_j^e)^\circ\setminus E
\]
without a closure bar, and equates that complement with \(M_j^\circ\). Because the open cap is attached along \(P_0=\{b>0\}\), the complement includes the seam \(P_0\), so this set equality is inaccurate. The updated note records that the subsequent preservation of the original \(M_j\) may still follow from taking closures: the complement contains \(M_j^\circ\), lies in the original \(M_j\), and has closure \(M_j\). This local correction does not validate or refute the preprint's theorem.

The affected \`open_problem_review.status\` and \`open_problem_review.sources\` evidence in \`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-42.proof-contracts.json\` was updated to record the exact source passages inspected and this qualification. No \`verification.judge\` record was present on the item. No other carrier was edited.

## Sources and coverage limits

- Mikko Salo, *The Calderón problem on Riemannian manifolds*, §1, printed pp. 170–171 (PDF pp. 3–4): conductivity and metric diffeomorphism gauges and Question 1.2 (full-boundary formulation). Opened at [the source PDF](https://library.slmath.org/books/Book60/files/30salo.pdf).
- Daudé, Kamran, and Nicoleau, *A survey of non-uniqueness results for the anisotropic Calderón problem with disjoint data*, §1, equation (1.6), Q1, and the dated open-status paragraph at PDF p. 6: [the source PDF](https://arxiv.org/pdf/1803.00910).
- Gagliardo, Theorem [1.I] and proof, printed pp. 286–290, and Kampanou, Theorems 3.4–3.5, printed pp. 28–31: trace range and bounded extension interfaces. Opened at [Gagliardo's paper](https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf) and [Kampanou's thesis](https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf). The assigned trace-quotient proof is local and does not rely on these works as a substitute for its own argument.
- OpenAI, *Smooth anisotropic uniqueness in the Calderón problem from one boundary patch* (2026-09-24), abstract and Theorem 1.1 (PDF pp. 1–2), and Proposition 7.2 (PDF p. 38): [primary PDF](https://raw.githubusercontent.com/openai/math/main/preprints/Smooth-Anisotropic-Uniqueness-in-the-Calderon-Problem-from-One-Boundary-Patch-September-24-2026/paper.pdf). I did not independently review its complete 43-page proof or validate the central continuation estimates.

The item carriers were read in manifest order, with direct supplier statements checked before final adjudication, but not before the initial carrier pass. Direct supplier interfaces were reviewed; this was not a recursive audit of every published supplier's own proof and dependency closure. The OpenAI preprint is an external source, so its printed statement was not edited. No uneditable library item or page defect remains for batch 42.

## Validation and blocker

- Reflow: \`node tools/tsx-run.mjs tools/reflow.mts items/op-ip-general-anisotropic-calderon-uniqueness.md\` — unchanged.
- Precheck: \`node tools/tsx-run.mjs tools/precheck.mts items/op-ip-general-anisotropic-calderon-uniqueness.md\` — 0 checked, 0 failing; the open-problem item has no proof steps, so this is not proof validation.
- Proof layout: \`node tools/proof-layout.mjs items/op-ip-general-anisotropic-calderon-uniqueness.md\` — 1 item, 0 steps, 0 defects.
- The live-run status was \`running\` at the start and \`PAUSED\` at closeout. No \`.autopilot/.../control.json\` was present; \`git log\` showed HEAD \`ace06e03bc\`. I did not change run control.
- Blocker to this reader handoff: none. No findings remain that this reader was not licensed to edit.
