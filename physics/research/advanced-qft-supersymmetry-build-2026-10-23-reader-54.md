# Step 3a reader report — batch 54

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent reader  
Verdict: both assigned pages pass; all three assigned items pass after the repairs below. No uneditable defect or blocker remains.

## Opened inventory

Assigned batch manifest: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-54.pages.json`. Also inspected the batch proof contracts and cross-batch dependency records.

Assigned pages, each with frontmatter only, `status: draft`, and `page_layout: compact-v1`:

- `qftx-physical-hall-bps-wall-crossing` — A page; lists `def-qftx-physical-bps-charge-data` and `pthm-qftx-physical-bps-wall-crossing`.
- `qftx-physical-hall-bps-wall-crossing-examples` — B page; lists `ex-qftx-physical-bps-kronecker-hall-sector`.

Assigned items, read in dependency order:

- `def-qftx-physical-bps-charge-data`.
- `pthm-qftx-physical-bps-wall-crossing`.
- `ex-qftx-physical-bps-kronecker-hall-sector`, including its TikZ two-arrow quiver.

Read the direct item suppliers and the additional results needed for the charged claims: `def-countable-choice`; `def-qftx-n2-coulomb-branch-data`; `post-qftx-n2-seiberg-witten-effective-solution`; `def-qftx-bps-state-and-saturation`; `def-qftx-unitary-super-poincare-representation`; `def-trace-class-operator`; `def-trace-of-a-trace-class-operator`; `thm-qftx-n-extended-central-charge-bounds`; `pthm-qftx-n2-bps-saturation-kernel-equivalence`; `def-qftx-hall-spectrum-generator`; `prop-qftx-hall-spectrum-invariance`; `def-finite-acyclic-quiver-stability-data`; `lem-upper-half-plane-sum-phase-between`; `def-subobject-first-completed-finite-quiver-hall-algebra-and-tori`; `thm-finite-quiver-euler-and-skew-integration-is-multiplicative`; `thm-finite-quiver-hall-wall-crossing`; and `lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend`. I also read `def-qftx-physical-bps-index` to check the theorem remark distinguishing the Witten heat-supertrace interface from the second-helicity trace.

Opened the prerequisite pages declared by the assigned page manifests: `qftx-bps-indices`, `qftx-susy-moduli-and-dualities`, `qftx-hall-bps-wall-crossing`, `countability-and-uncountability`, `qftx-susy-algebra-and-multiplets`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, and `hall-stability-dt-bps-and-wall-crossing`. The published mathematical pages and supplier items were read-only context.

## Mathematical and source review

- The pure-SU(2) charge and mass normalization in the local definition matches Seiberg and Witten, Sections 1 equations (1.1)–(1.2), 4 equations (4.3)–(4.9), and 6 equations (6.19)–(6.28): [source PDF](https://arxiv.org/pdf/hep-th/9407087v1). The second-helicity trace and KS sign/factor convention match Gaiotto–Moore–Neitzke, Introduction equation (1.1) and Section 2.2 equations (2.10)–(2.18): [source PDF](https://arxiv.org/pdf/0807.4723). Their physical bridge is not imported as a proved result; the assigned theorem states it as an additional hypothesis.
- Denef, Section 5.3, printed pages 35–36, supports the pure-SU(2) monopole/dyon two-arrow quiver and intersection magnitude 2: [source PDF](https://arxiv.org/pdf/hep-th/0206072). The finite-field orbit count and stability calculation are proved locally in the example, not attributed to Denef.
- Tong, *Supersymmetric Field Theory*, Section 2.4.2, printed pages 40–41, states the massive N=2 central-charge bound and shortened representation conditions in a different normalization, as the item notes: [source PDF](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).
- The Hall equality was checked through the exact finite-field suppliers above: semistability convention, phase-of-sum lemma, HN factorization, skew integration normalization, and published Hall spectrum invariance. No physical state-counting conclusion is drawn from the finite-field coefficient without the separately assumed bridge.
- Diagram review: both arrows are directed from `d` to `m`, with labels `a` and `b`. Under the displayed Euler convention this gives `⟨e_m,e_d⟩_Q=2`, matching the supplied DSZ value. There are no crossings or compositions to adjudicate. The proof establishes the count independently of the diagram.

## Repairs and evidence

1. `def-qftx-physical-bps-charge-data`, Definition: replaced the undefined “locally finite set” condition with an explicitly typed charge set and pointwise phase domain. Defined a chamber relative to an explicitly supplied family of wall subsets. The phase is pointwise; convergence of ordered products is handled separately by the degree hypotheses in the consuming theorem. Updated the definition contract’s endpoint evidence. No state-existence, local-constancy, or Hall-identification claim was added.
2. `pthm-qftx-physical-bps-wall-crossing`, Statement and `physical_scope`: quantified the degree identity on `N^{Q_0}` (where `ρ(d)` lies in `Γ_+`) and the bilinear pairing identity on `Z^{Q_0}`. Removed an unspecified chamber-family condition that the proof did not use; the theorem now takes two specified regular-patch points and retains its explicit common phase, finite-degree, and exact-bridge hypotheses. Updated the contract’s corresponding derivation descriptions.
3. `ex-qftx-physical-bps-kronecker-hall-sector`, Example, Facts & Assumptions, and Verification 2.2–3.1: expressed the two calculations using the supplied strict phase orders at `u_-` and `u_+`, without relying on an unspecified chamber family. The orbit count, automorphism orders, stability classification, Euler self-pairing, and finite-field coefficient remain unchanged. Updated its proof contract to match.

No `verification.judge` record was present on the changed items, so none was removed. All edits stayed within the three assigned in-flight items. The changed item contracts were updated.

Required checks after the repairs:

- Reflow: run on all three changed items; each reported unchanged.
- Precheck: definition `0 checked, 0 failing`; theorem and example each `PASS`, with `0 failing`.
- Proof layout: `node tools/physics-support/proof-layout.mjs` on the three changed paths reported `3 items, 10 steps, 0 defects`.

## Page verdicts

- `qftx-physical-hall-bps-wall-crossing`: pass. Its inventory matches the A-page manifest; it has no Markdown summary body. The page presents the physical charge datum and an explicitly conditional transport theorem.
- `qftx-physical-hall-bps-wall-crossing-examples`: pass. Its example inventory matches the B-page manifest; it has no Markdown summary body. The quiver orientation and example’s finite-field scope are consistent with the item proof.

## Uneditable defects and blocker

None. No confirmed defect remained in an out-of-scope or read-only dependency, and no blocker was encountered.

## Coverage note

The assigned pages, all three assigned items, their direct item dependencies, the transitive Hall/HN and BPS-saturation results needed for the reviewed steps, the declared prerequisite pages, the batch contracts, and the cross-batch dependency record were inspected. The cited source sections listed above were read; the remainder of those works was not reviewed. No experiment or empirical-data claim occurs in this batch.
