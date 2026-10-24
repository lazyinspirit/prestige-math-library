# Step 3a reader report — batch 67

Run: \`advanced-qft-supersymmetry-build-2026-10-23\`  
Role: independent reader  
Scope: batch \`67\`

## Opened inventory

Pages:

- \`library/quantum-field-theory-mathematics/qftx-gaga-projective-scalar-dolbeault.md\`
- \`library/quantum-field-theory-mathematics/qftx-gaga-projective-scalar-dolbeault-examples.md\`

Assigned items, read in dependency order:

- \`def-qftx-gaga-projective-twisting-line-bundles\`
- \`lem-qftx-gaga-projective-cover-laurent-cohomology\`
- \`thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology\`
- \`ex-qftx-gaga-analytic-projective-structure\`
- \`ex-qftx-gaga-analytic-untwisted-obstruction\`

The direct imported mathematical suppliers of the Laurent–Čech lemma were opened: \`def-axiom-of-choice\`, \`def-complex-projective-space-and-holomorphic-charts\`, \`def-complex-manifolds-and-holomorphic-vector-bundles\`, \`def-polydisc-boundary-radius\`, \`def-plurisubharmonic-function\`, \`def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity\`, \`def-sheaf-cohomology-derived-global-sections\`, \`def-bigraded-complex-differential-forms\`, \`thm-dolbeault-lemma-polydisc\`, \`thm-cauchy-riemann-characterization-in-several-complex-variables\`, \`thm-dolbeault-cohomology-polydisc-vanishes-positive-q\`, \`thm-smooth-function-module-sheaves-are-acyclic\`, \`thm-acyclic-resolution-theorem-for-right-derived-functors\`, \`thm-choice-implies-dependent-implies-countable-choice\`, \`thm-cauchy-integral-formula-on-a-polydisc\`, \`thm-laurent-expansion-annulus\`, \`prop-holomorphic-functions-are-continuous-and-separately-holomorphic\`, \`thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables\`, \`thm-leray-acyclic-cover-theorem\`, \`thm-cech-to-sheaf-cohomology-comparison\`, and \`cor-dolbeault-vanishing-pseudoconvex-domain\`.

Additional transitive suppliers opened for the proof routes reviewed were \`lem-acyclic-rows-and-columns-of-cech-double-complex\`, \`thm-hormander-l2-dbar-existence\`, \`thm-pseudoconvex-domain-smooth-psh-exhaustion\`, and \`lem-hormander-solver-on-smooth-pseudoconvex-domain\`. The 21 direct imported suppliers above match their raw SHA-256 pins in \`research/math-imports.json\`.

All five item contracts were inspected. Both page bodies are empty, with \`page_layout: compact-v1\`; the A-page lists its three assigned items, and the B-page lists its two assigned examples. No assigned item contains a TikZ or tikzcd diagram. The items are mathematical; no physical postulates, observations, or empirical/statistical claims occur.

## Mathematical review

The twisting-bundle definition gives holomorphic, nowhere-zero transition factors on the stated overlaps and checks identity, inverse, and triple-overlap cocycle conditions. The Laurent–Čech lemma explicitly treats each intersection as \(\mathbb C^a\times(\mathbb C^*)^b\), computes its Hartogs boundary function, trivializes \(\mathcal O(k)\) there, and uses the stated smooth Dolbeault resolution and acyclic-cover comparison. The mode-support criterion, sign contraction, normal-convergence argument, and the empty/full-support boundary modes agree with the supplied frame convention. The projective Dolbeault theorem correctly patches the coefficientwise operator in holomorphic frames, uses the local lemma for exactness, and applies the acyclic-resolution theorem to smooth-module sheaves. The \(\mathbb P^2\) zero-mode matrices have the stated kernels and images. The negative-twist top-mode argument and the fiberwise global-generation test are correct after the repair below.

I checked the relevant passages in Lebl, *Tasty Bits of Several Complex Variables*, v4.4: Theorem 4.4.5 (printed pp. 141–142), Lemma 4.4.7 (printed p. 143), and Exercise 1.2.4 (printed pp. 20–23). The Laurent exercise is a prompt, not a proof; the batch lemma supplies the missing mixed Laurent–Taylor argument. Demailly, *Complex Analytic and Differential Geometry*, Ch. VIII §6, Theorem 6.5 (printed pp. 377–378), was checked for the source issue below. I also checked the relevant Boas §3.3.3 and Jabbari Theorem 77 passages; their scopes are noted below. The other bibliography entries remain contextual and were not relied on as proof premises in this review.

## Repair made

In \`ex-qftx-gaga-analytic-untwisted-obstruction\`, the original degree-zero argument asserted that a global mode must occur on every singleton chart without spelling out the overlap compatibility for singleton negative support. I replaced that inference with the empty/full-support degree check and the explicit Čech 0-cocycle argument on \(U_{ij}\). The title now states the actual \(\mathcal O(-1)\) global-generation and \(\mathcal O(-r-1)\) top-cohomology conclusions.

I updated the corresponding step 1.1 derivation in \`research/advanced-qft-supersymmetry-build-2026-10-23-batch-67.proof-contracts.json\`. The item had no \`verification.judge\` record to remove. Final scoped commands produced:

- Reflow: unchanged.
- Precheck: pass, one item checked.
- Proof-layout: one item, five steps, zero defects.

## Uneditable finding

\`thm-hormander-l2-dbar-existence\` is published and outside batch 67 write scope. Its Statement gives both the \(L^2\) and smooth-data claims for \(1\le q\le n\), while its Proof step 6.1 establishes the smooth-data claim by the Demailly source fact [F19]. Demailly, Ch. VIII §6, Theorem 6.5, printed p. 378, explicitly assumes \(q>1\); the proof on pp. 377–378 carries that restriction. Thus [F19] does not establish the published item’s smooth-data assertion at \(q=1\). The bounded-domain solver \`lem-hormander-solver-on-smooth-pseudoconvex-domain\` establishes the \(L^2\) claim, not this smooth-data branch. Boas §3.3.3 treats smooth solvability on bounded strongly pseudoconvex domains, and Jabbari Theorem 77 states smooth solvability for positive form degree but does not state the exact weighted bound asserted in \`thm-hormander-l2-dbar-existence\`; neither is incorporated into its step 6.1 proof.

This matters to the assigned dependency chain: \`cor-dolbeault-vanishing-pseudoconvex-domain\` invokes the smooth branch in step 11.1 for all \(1\le q\le n\), and the assigned Laurent–Čech lemma uses that corollary in step 2.2 to establish local acyclicity, including \(q=1\). I did not edit the published item or its consumer. The exact routed finding is in the required JSON file.

## Page verdicts

- \`qftx-gaga-projective-scalar-dolbeault\` (A): presentation, inventory, definitions, and direct calculations reviewed. Hold the page’s mathematical closure on the q=1 smooth-solvability finding reached through \`lem-qftx-gaga-projective-cover-laurent-cohomology\`.
- \`qftx-gaga-projective-scalar-dolbeault-examples\` (B): presentation, inventory, and both example arguments reviewed; the second example’s title and degree-zero argument were repaired. Hold the page’s mathematical closure because its examples depend on the A-page theorem/lemma chain reaching the same published finding.

## Blocker and coverage limit

The unresolved published dependency is the blocker for both page verdicts. This review checked every assigned page and item, every direct item dependency needed by the assigned arguments, and the additional transitive suppliers listed above. I did not independently re-audit every deeper published item in the full transitive closure or read all page-level \`requires\` page bodies; those remain outside this focused mathematical review. No item is stamped, adjudicated, or self-certified.

