# Step 3a reader report — batch 32

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader  
Date: 2026-10-15

## Inventory opened

Assigned pages reviewed:

- emg-mg01 (A page), “Oriented Lorentzian fields, observers and coordinate conventions.”
- emg-mg01-examples (B page), the constant two-form example page.

Their declared page prerequisites were opened for context: gr-connections-and-free-fall, gr-einstein-and-matter, and the-inverse-function-theorem-completed. The assigned items use only the mathematical geometry and differential-form material from those pages; no physical postulate or observation enters a mathematical dependency.

All five assigned items were reviewed:

- def-emg-lorentzian-forms
- lem-emg-lorentz-hodge-calculus
- lem-emg-conformal-hodge-multiplier
- lem-emg-observer-field-decomposition
- ex-emgmath-lorentz-star

The 24 direct logical suppliers were confirmed as published items and their relevant definitions, statements, and proof portions were opened: def-countable-choice, def-exterior-derivative-by-the-invariant-vector-field-formula, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-local-frame-and-tetrad-fields, def-gr-metric-selected-connection, def-gr-metric-volume-form-and-current-flux, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-lorentzian-objects, def-gr-timelike-worldline-and-proper-time, def-oriented-smooth-manifold-and-oriented-chart, def-smooth-differential-k-form, def-wedge-product-of-differential-forms, lem-gr-metric-volume-form-patching-and-face-normal, lem-gr-observer-projection-decomposition, lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear, prop-differential-forms-form-a-graded-commutative-algebra, prop-local-coordinate-expression-for-a-differential-form, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-clairaut-schwarz-mixed-partials, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-local-coordinate-formula-for-the-exterior-derivative, thm-real-power-continuity-and-derivatives, and thm-the-exterior-derivative-is-a-graded-derivation. The batch cross-batch dependency file is empty; no direct supplier is assigned to another current-run batch.

Authoritative source passages checked:

- Tong, General Relativity, §2.4.2, Eq. (2.87), gives the Minkowski field-strength component convention and states \(c=1\): [source](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html).
- Tong, §3.1.3, Eqs. (3.97)–(3.98), gives the metric-and-orientation Hodge formula and the Lorentzian star-square sign: [source](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html).
- Reall, Part III General Relativity, §2.2, Eqs. (2.9)–(2.10), covers orthonormal Lorentzian bases; §8.1, Eqs. (8.1)–(8.9), covers wedge and exterior-derivative conventions; §8.5, Eqs. (8.52)–(8.56), covers the metric volume form and Hodge star: [source](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf).

## Repairs and evidence

- In def-emg-lorentzian-forms, the first Tong source locator incorrectly grouped Eqs. (2.85)–(2.87) under §2.4.2. Eqs. (2.85)–(2.86) occur before §2.4.2; Eq. (2.87) is the field-strength matrix in §2.4.2. I narrowed the citation to Eq. (2.87) and recorded Tong’s \(c=1\) convention. The item's geometric and coordinate conventions remain locally stated.
- In lem-emg-conformal-hodge-multiplier, proof step 2.1 asserted nondegeneracy of the pointwise wedge pairing without stating or deriving it in this item. I rewrote the step to show that the scaled \(\Omega^{4-2k}\star_g\beta\) candidate satisfies the Hodge defining identity for every \(k\)-form \(\alpha\), then invoke the supplier's uniqueness clause. The proof lists the five multipliers \(\Omega^4,\Omega^2,1,\Omega^{-2},\Omega^{-4}\) first, so the candidate is explicitly a smooth bundle map. This uses the supplier already listed in Facts [F1] and removes the unstated prerequisite. The proof contract's D2 now matches the repaired argument.
- In lem-emg-observer-field-decomposition, the statement used “rest covector space” without defining it and treated positivity of the restricted inverse metric as immediate. I defined \(\mathcal{R}^*_{n,p}=\{\alpha\in T_p^*M:\alpha(n_p)=0\}\), identified it through \(\flat_p\) with \(n_p^\perp\), and stated \(g^{-1}_p(v^\flat,w^\flat)=g_p(v,w)\), which transfers positivity from the published rest-space lemma. Fact [F2] now includes the full Hodge basis formula used to reconstruct the spatial part, not only the \(e^{01}\) and \(e^{23}\) cases. Proof step 3.1 now explicitly identifies the spatial sums with the stated covector inner products and cites [F1] and [F3]. The affected contract's F2/F3 evidence and D3 inputs were synchronized.
- No edited item carried a verification.judge record; no stale judge stamp remained. No published supplier or page prose was edited.

## Page verdicts

- emg-mg01: pass after the citation and proof clarifications above. The local tetrad construction, Hodge signs, conformal multiplier, observer decomposition, tensor types, orientation and unit convention are explicit. The page's mathematical claims do not rely on Maxwell equations or empirical observations.
- emg-mg01-examples: pass. Direct recomputation confirms the displayed Hodge dual, \(\star_g^2F=-F\), contraction, wedge sign, and \(dF=0\) for the stated smooth constant form. The example is mathematical and reports no measurement.

No content defect remained outside the repair scope; no finding is routed for batch 32.

## Validation and blocker

For each changed item, reflow.mts reported unchanged and precheck.mts reported PASS (three items checked individually). The required explicit-path command, node tools/physics-support/proof-layout.mjs items/def-emg-lorentzian-forms.md items/lem-emg-conformal-hodge-multiplier.md items/lem-emg-observer-field-decomposition.md, did not complete: its renderer failed to resolve the website import @/components from ItemBody.tsx. A temporary alias-resolution attempt advanced past that import but then failed on the extensionless MathMarkdown import. No proof-layout pass is claimed; this remains a tooling blocker, not a mathematical finding.

One process limitation: the first two assigned item files were initially displayed before their suppliers during navigation. I deferred judgment and all repairs until after checking the relevant suppliers; subsequent substantive review and repair proceeded from supplier content to consumers. The item and dependency coverage above reflects the material actually opened.
