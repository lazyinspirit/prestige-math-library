# Step 3a Reader Report — Batch 35

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader, batch `35`

## Verdicts

- `qftx-susy-scft-and-frontier` — **pass after assigned-item repairs**. Its frontmatter identifies the three assigned A-page items and the three earlier page prerequisites. The body is empty and `page_layout: compact-v1` is present.
- `qftx-susy-scft-and-frontier-examples` — **pass after assigned-item repairs**. Its frontmatter identifies the three assigned examples and the A-page plus `qftx-susy-extended-actions` prerequisites. The body is empty and `page_layout: compact-v1` is present.
- No page summary was present or added.

## Opened inventory

Assigned pages:

- `library/advanced-qft-and-supersymmetry/qftx-susy-scft-and-frontier.md`
- `library/advanced-qft-and-supersymmetry/qftx-susy-scft-and-frontier-examples.md)

Their page prerequisites were opened at their current frontmatter-only carriers:

- `qftx-susy-extended-actions` (manifest order 987; batch 31)
- `qftx-susy-ward-and-nonrenormalization` (order 988; batch 32)
- `qftx-susy-moduli-and-dualities` (order 989; batch 33)

Assigned items, reviewed in dependency order:

1. `post-qftx-n4-super-yang-mills-model` (batch 31; draft physical postulate): read as the adopted classical SU(2) model and field/action convention, not as a proof of a quantum construction.
2. `def-qftx-instanton-number-and-asd-sector` (batch 5; draft mathematical definition): read its complete Definition, Facts & Assumptions, and Proof, including its trace sign, Chern-class normalization, and self-dual/ASD conventions.
3. `def-axiom-of-choice` (published): read the exact full-choice formulation.
4. `def-qftx-scft-protected-data`
5. `pthm-qftx-scft-index-q-pair-cancellation`
6. `pthm-qftx-scft-chiral-primary-unitarity-bound`
7. `ex-qftx-n4-su2-line-operator-duality`
8. `ex-qftx-scft-index-two-state-pair`
9. `ex-qftx-n4-su2-chiral-primary-dimension)

For the compact-instanton supplier, I also opened the direct mathematical supplier items it cites: `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-associated-covariant-derivative`, `def-invariant-polynomial-on-a-matrix-lie-algebra`, `def-complex-linear-and-compatible-bundle-connections`, `def-evaluation-of-an-invariant-polynomial-on-curvature`, `def-the-chern-weil-homomorphism`, `thm-chern-weil-homomorphism-is-independent-of-connection-and-natural`, `def-chern-pontryagin-and-euler-characteristic-forms`, `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`, `def-chern-classes-from-the-projective-bundle-relation`, `thm-de-rham-theorem`, `def-axiom-of-choice` (also listed above), and `lem-qftx-hodge-star-decomposition-four-dimensions`. Their exact statements and proof status support the compact SU(2) trace-normalized charge used by batch 35.

I also opened the batch-35 manifest, proof-contract record, cross-batch dependency record, and batch notes. They were used as navigation and evidence, not as verdicts.

## Source review

The relevant primary-source sections were opened directly:

- Kinney, Maldacena, Minwalla, and Raju, [*An Index for 4 Dimensional Super Conformal Theories*](https://arxiv.org/pdf/hep-th/0510251v1), §2.1, printed pp. 3–4, for radial-quantization adjoints; §3, equations (3.1)–(3.3), printed pp. 12–13, for the positive supercharge anticommutator and index cancellation.
- David Tong, [*Supersymmetric Field Theory*](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf), §6.4.2, printed pp. 193–194, for the scalar chiral-primary unitarity bound and charge convention.
- Kapustin and Witten, [*Electric-Magnetic Duality and the Geometric Langlands Program*](https://arxiv.org/pdf/hep-th/0604151v3), §2.1, printed pp. 7–10, for the anti-Hermitian trace/action normalization and theta term; §2.2, printed pp. 10–12, for the coupling and explicit conjectural status of quantum S-duality; §4.2, printed pp. 47–48, for the Euclidean theta term and instanton sign conventions.
- Aharony, Seiberg, and Tachikawa, [*Reading between the Lines of Four-Dimensional Gauge Theories*](https://arxiv.org/pdf/1305.0318v5), §§1.1–1.2, printed pp. 2–5, and §2.4, printed pp. 16–18, for the SU(2)/SO(3) line spectra and S/T charge transformations.

The source comparison supports the assigned source qualifications: the 2013 AST article supplies the finite line-charge data; the 2007 KW paper explicitly calls quantum S-duality a conjecture. The finite charge arithmetic is proved locally and is not used as proof of quantum equivalence.

## Repairs and evidence

- `def-qftx-scft-protected-data`: replaced the vague “unitary positive-energy quantum field theory/local-operator state space” description with the exact representation-theoretic state-space data used by these items, including a graded Hilbert space, dense invariant domain, supercommutator, radial Hamiltonian, and scalar-primary conditions. Corrected the radial-adjoint convention: in radial quantization (P_mu^dagger=K_mu), rather than calling translations self-adjoint. KMMR §2.1 states this radial adjoint relation. The definition now explicitly limits itself to representation data and asserts neither a local operator algebra nor a continuum construction.
- `def-qftx-scft-protected-data`: made the Euclidean continuation explicit by adopting the gauge-sector action (S_E^{mathrm{gauge}}[omega]=g^{-2}int_X B(F_omegawedge *_gF_omega)-i	heta k). The text derives the classical factors (q^k) and (ar q^{k_{mathrm A}}) for self-dual and anti-self-dual fields and explicitly disclaims a measure or full partition-function contribution. This preserves (k=-langle c_2(E),[X]
angle) and the distinct positive-ASD convention (k_{mathrm A}=-k). The cited KW normalization and Euclidean theta term support the convention; the local Hodge/charge identities give the stated factors.
- `def-qftx-scft-protected-data`: corrected source-status prose to attribute the explicit conjecture classification to Kapustin–Witten and the line spectra/charge transformations to AST. Updated its source locators and its batch contract with the exact instanton-number and AC supplier excerpts. Refreshed the five affected consumer contract excerpts.
- `ex-qftx-n4-su2-chiral-primary-dimension`: made the symmetry-preserving renormalization premise explicit for the renormalized (operatorname{Tr}_2(Z^2)) representative, and expressed the premise as a proposed unitary SCFT realization supplying the primary state. Its conditional conclusion and norm-bound proof remain unchanged.
- `ex-qftx-n4-su2-line-operator-duality`: corrected Fact [F2] so AST supports the line classes and charge transformations, while KW §2.2 supports calling quantum S-duality conjectural. The finite (mathbb Z_2^2) proof and statement are unchanged. Its TikZ diagram was checked: the four marked points and three isotropic subgroups match the text, and the proof does not rely on the drawing.

The other three assigned items were read and checked without repair:

- `pthm-qftx-scft-index-q-pair-cancellation`: its blockwise odd involution, trace-class summation, and zero-kernel identification follow from the stated closed-operator domains and trace assumptions; it does not claim a continuum SCFT result.
- `pthm-qftx-scft-chiral-primary-unitarity-bound`: the two adjoint norm identities imply both inequalities and the two shortening conditions, including the (r=0) case.
- `ex-qftx-scft-index-two-state-pair`: the two-dimensional (Q,S) matrices give (delta=lambda I), empty kernel, and zero graded trace exactly; the item disclaims a full superconformal representation.

## Consumer review

The current-run dependency closure of `def-qftx-scft-protected-data` contains exactly these five assigned consumers: both physics theorems and all three examples. I checked each current use against the revised interface:

- The index theorem uses the selected (Q,S,delta) and adds its own stronger domain, reducing-block, and trace-class assumptions.
- The scalar bound theorem uses the scalar (D,R,J_1,J_2) conventions and the radial adjoints.
- The line-lattice example uses only the finite center-charge data and source-reported maps.
- The two-state example uses the trace convention and explicitly does not require a full SCFT representation.
- The quadratic-primary example now states the R-covariant renormalization premise that its charge calculation needs.

No other current-run item depends on or cites the revised Definition.

## Checks and remaining issues

For the changed items, reflow reported unchanged; the scoped precheck passed for the two proof-bearing examples, with zero failures. The Definition has no proof steps, so the scoped precheck selected zero proof-bearing items for it. The final required proof-layout run checked three items and four proof steps with zero defects. No changed item had a stale `verification.judge` record.

No defect remains that I could not edit, and no blocker was found. I did not audit the full transitive prerequisite libraries beneath the opened mathematical suppliers; this report records the supplier statements/proofs actually opened, not a whole-library mathematics audit.
